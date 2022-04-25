/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.gateway.reactive.handlers.api.adapter.invoker;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

import io.gravitee.gateway.api.buffer.Buffer;
import io.gravitee.gateway.api.handler.Handler;
import io.gravitee.gateway.api.proxy.ProxyConnection;
import io.gravitee.gateway.api.proxy.ProxyResponse;
import io.gravitee.gateway.reactive.api.context.sync.SyncExecutionContext;
import io.gravitee.gateway.reactive.api.context.sync.SyncRequest;
import io.gravitee.gateway.reactive.api.context.sync.SyncResponse;
import io.gravitee.reporter.api.http.Metrics;
import io.reactivex.schedulers.TestScheduler;
import io.reactivex.subscribers.TestSubscriber;
import java.util.concurrent.atomic.AtomicInteger;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

/**
 * @author Jeoffrey HAEYAERT (jeoffrey.haeyaert at graviteesource.com)
 * @author GraviteeSource Team
 */
@ExtendWith(MockitoExtension.class)
class FlowableProxyResponseTest {

    protected static final String MOCK_EXCEPTION_MESSAGE = "Mock exception";
    protected static final int TOTAL_CHUNKS = 100;
    protected static final int REQUEST_COUNT = 16;

    @Mock
    private SyncExecutionContext ctx;

    @Mock
    private SyncRequest request;

    @Mock
    private SyncResponse response;

    @Mock
    private ProxyResponse proxyResponse;

    @Mock
    private ProxyConnection proxyConnection;

    @Mock
    private Metrics metrics = mock(Metrics.class);

    @Captor
    private ArgumentCaptor<Handler<Buffer>> bodyHandlerCaptor;

    @Captor
    private ArgumentCaptor<Handler<Void>> endHandlerCaptor;

    private FlowableProxyResponse cut;

    @BeforeEach
    public void init() {
        lenient().when(ctx.request()).thenReturn(request);
        lenient().when(request.metrics()).thenReturn(metrics);
        lenient().when(ctx.isInterrupted()).thenReturn(false);
        lenient().when(ctx.response()).thenReturn(response);
        lenient().when(response.ended()).thenReturn(false);
        lenient().when(proxyResponse.bodyHandler(bodyHandlerCaptor.capture())).thenReturn(proxyResponse);
        lenient().when(proxyResponse.endHandler(endHandlerCaptor.capture())).thenReturn(proxyResponse);

        cut = new FlowableProxyResponse();
        cut.initialize(ctx, proxyConnection, proxyResponse);
    }

    @Test
    public void shouldPauseProxyResponseWhenInitializing() {
        verify(proxyResponse).pause();
    }

    @Test
    public void shouldErrorWhenMultipleSubscribers() {
        cut.test().assertNoValues();
        cut.test().assertError(IllegalStateException.class);
    }

    @Test
    public void shouldCompleteAndReceiveProxyResponseWhenSubscribing() {
        final TestSubscriber<Buffer> obs = cut.test();

        // Check body and end handlers have been set and the proxy response have been resumed.
        verify(proxyResponse).bodyHandler(bodyHandlerCaptor.capture());
        verify(proxyResponse).endHandler(endHandlerCaptor.capture());
        verify(proxyResponse).resume();

        // Writes some chunks to simulate body coming from the proxy response.
        for (int i = 0; i < TOTAL_CHUNKS; i++) {
            bodyHandlerCaptor.getValue().handle(Buffer.buffer("chunk" + i));
        }

        // Mark the end of the proxy response.
        endHandlerCaptor.getValue().handle(null);

        // Check that end actions has been executed (api response time, release proxy response, ...).
        verify(metrics).setApiResponseTimeMs(anyLong());
        verify(proxyResponse).bodyHandler(isNull());
        verify(proxyResponse).endHandler(isNull());

        obs.assertComplete();

        for (int i = 0; i < TOTAL_CHUNKS; i++) {
            final String expectedChunk = "chunk" + i;
            obs.assertValueAt(i, b -> b.toString().equals(expectedChunk));
        }
    }

    @Test
    public void shouldCompleteReceiveProxyResponseWithBackPressure() {
        final AtomicInteger chunkCount = new AtomicInteger(0);

        // Simulate #REQUEST_COUNT chunks each time the proxy response is resumed.
        setupChunkProducer(
            () -> {
                for (int i = 0; i < REQUEST_COUNT; i++) {
                    if (chunkCount.get() == TOTAL_CHUNKS) {
                        // All chunks have been produces, end the proxy response and exit.
                        endHandlerCaptor.getValue().handle(null);
                        return;
                    }

                    bodyHandlerCaptor.getValue().handle(Buffer.buffer("chunk" + chunkCount.getAndIncrement()));
                }
            }
        );

        final TestScheduler scheduler = new TestScheduler();
        final TestSubscriber<Buffer> obs = cut.subscribeOn(scheduler).test(0);

        for (int i = 0; i < TOTAL_CHUNKS; i++) {
            if (i % REQUEST_COUNT == 0) {
                // Simulate request next chunks.
                obs.request(REQUEST_COUNT);
                scheduler.triggerActions();
            }

            // Check chunks are received in order.
            final String expectedChunk = "chunk" + i;
            obs.assertValueAt(i, b -> b.toString().equals(expectedChunk));
        }

        // Check the flow is completed.
        obs.assertComplete();

        // Check the backpressure worked as expected by counting the number of pause and resume calls.
        verify(proxyResponse, times(TOTAL_CHUNKS / REQUEST_COUNT + 1)).pause();
        verify(proxyResponse, times(TOTAL_CHUNKS / REQUEST_COUNT + 1)).resume();
    }

    @Test
    public void shouldCompleteAndCancelProxyResponseWhenContextIsInterrupted() {
        final AtomicInteger chunkCount = new AtomicInteger(0);

        // Generates one chunk, mark the context interrupted then generate another chunk (the second one should not be propagated).
        setupChunkProducer(
            () -> {
                bodyHandlerCaptor.getValue().handle(Buffer.buffer("chunk" + chunkCount.getAndIncrement()));
                when(ctx.isInterrupted()).thenReturn(true);
                bodyHandlerCaptor.getValue().handle(Buffer.buffer("chunk" + chunkCount.getAndIncrement()));
            }
        );

        final TestScheduler scheduler = new TestScheduler();
        final TestSubscriber<Buffer> obs = cut.subscribeOn(scheduler).test(REQUEST_COUNT);

        scheduler.triggerActions();
        obs.assertComplete();

        // Only 1 chunk must be received because the context has been interrupted.
        obs.assertValueCount(1);

        verify(proxyResponse).cancel();
        verify(proxyConnection).cancel();
        verify(metrics).setApiResponseTimeMs(anyLong());
    }

    @Test
    public void shouldErrorAndCancelProxyResponseWhenExceptionOccurs() {
        setupChunkProducer(() -> bodyHandlerCaptor.getValue().handle(Buffer.buffer("chunk")));

        // Simulate an exception during chunk handling.
        doThrow(new RuntimeException(MOCK_EXCEPTION_MESSAGE)).when(ctx).isInterrupted();

        final TestScheduler scheduler = new TestScheduler();
        final TestSubscriber<Buffer> obs = cut.subscribeOn(scheduler).test(REQUEST_COUNT);

        scheduler.triggerActions();
        obs.assertErrorMessage(MOCK_EXCEPTION_MESSAGE);

        verify(proxyResponse).cancel();
        verify(proxyConnection).cancel();
    }

    @Test
    public void shouldCancelProxyResponseWhenSubscriberCancels() {
        final AtomicInteger chunkCount = new AtomicInteger(0);

        // Generated one chunk, mark the context interrupted then generate another chunk (the second one should not be propagated).
        setupChunkProducer(() -> bodyHandlerCaptor.getValue().handle(Buffer.buffer("chunk" + chunkCount.getAndIncrement())));

        final TestScheduler scheduler = new TestScheduler();
        final TestSubscriber<Buffer> obs = cut.subscribeOn(scheduler).test(REQUEST_COUNT);

        scheduler.triggerActions();
        obs.cancel();
        obs.assertNotComplete();
        obs.assertNoErrors();
        assertTrue(obs.isDisposed());

        // Chunk produced before the cancellation must still have been received.
        obs.assertValueCount(1);

        verify(proxyResponse).cancel();
        verify(proxyConnection).cancel();
    }

    private void setupChunkProducer(Runnable runnable) {
        // Generated one chunk, mark the context interrupted then generate another chunk (the second one should not be propagated).
        doAnswer(
                invocation -> {
                    runnable.run();

                    return null;
                }
            )
            .when(proxyResponse)
            .resume();
    }
}
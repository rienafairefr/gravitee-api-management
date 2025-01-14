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
package io.gravitee.gateway.reactive.reactor.processor.transaction;

import static io.gravitee.gateway.reactive.reactor.processor.transaction.TransactionHeader.DEFAULT_REQUEST_ID_HEADER;
import static io.gravitee.gateway.reactive.reactor.processor.transaction.TransactionHeader.DEFAULT_TRANSACTION_ID_HEADER;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

import org.junit.jupiter.api.Test;

/**
 * @author Guillaume LAMIRAND (guillaume.lamirand at graviteesource.com)
 * @author GraviteeSource Team
 */
public class TransactionPreProcessorFactoryTest {

    @Test
    public void shouldTransactionProcessorHaveDefaultHeader() {
        TransactionPreProcessorFactory transactionPreProcessorFactory = new TransactionPreProcessorFactory(
            DEFAULT_TRANSACTION_ID_HEADER,
            DEFAULT_REQUEST_ID_HEADER
        );
        TransactionPreProcessor transactionPreProcessor = transactionPreProcessorFactory.create();
        assertThat(transactionPreProcessor.transactionHeader()).isEqualTo(DEFAULT_TRANSACTION_ID_HEADER);
        assertThat(transactionPreProcessor.requestHeader()).isEqualTo(DEFAULT_REQUEST_ID_HEADER);
    }

    @Test
    public void shouldTransactionProcessorHaveCustomHeader() {
        TransactionPreProcessorFactory transactionPreProcessorFactory = new TransactionPreProcessorFactory(
            "CUSTOM_TRANSACTION_ID_HEADER",
            "CUSTOM_REQUEST_ID_HEADER"
        );
        TransactionPreProcessor transactionPreProcessor = transactionPreProcessorFactory.create();
        assertThat(transactionPreProcessor.transactionHeader()).isEqualTo("CUSTOM_TRANSACTION_ID_HEADER");
        assertThat(transactionPreProcessor.requestHeader()).isEqualTo("CUSTOM_REQUEST_ID_HEADER");
    }
}

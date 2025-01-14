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
package io.gravitee.gateway.reactive.reactor.handler;

import io.gravitee.gateway.reactor.handler.HttpAcceptor;
import io.gravitee.gateway.reactor.handler.ReactorHandlerRegistry;

/**
 * @author Jeoffrey HAEYAERT (jeoffrey.haeyaert at graviteesource.com)
 * @author GraviteeSource Team
 */
public class DefaultHttpAcceptorResolver implements HttpAcceptorResolver {

    private final ReactorHandlerRegistry handlerRegistry;

    public DefaultHttpAcceptorResolver(ReactorHandlerRegistry handlerRegistry) {
        this.handlerRegistry = handlerRegistry;
    }

    @Override
    public HttpAcceptor resolve(String host, String path) {
        for (HttpAcceptor httpAcceptor : handlerRegistry.getAcceptors(HttpAcceptor.class)) {
            if (httpAcceptor.accept(host, path)) {
                return httpAcceptor;
            }
        }

        return null;
    }
}

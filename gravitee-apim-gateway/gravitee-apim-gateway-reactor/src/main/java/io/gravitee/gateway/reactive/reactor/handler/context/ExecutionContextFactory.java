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
package io.gravitee.gateway.reactive.reactor.handler.context;

import io.gravitee.el.TemplateVariableProvider;
import io.gravitee.gateway.core.component.ComponentProvider;
import io.gravitee.gateway.reactive.api.context.ExecutionContext;
import io.gravitee.gateway.reactive.api.context.Request;
import io.gravitee.gateway.reactive.api.context.Response;
import io.gravitee.gateway.reactive.api.context.sync.SyncRequest;
import io.gravitee.gateway.reactive.api.context.sync.SyncResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * A factory of {@link ExecutionContext}. A single instance is created on per {@link io.gravitee.gateway.reactor.Reactable}
 * basis because {@link TemplateVariableProvider} providers list is containing provider specific to the reactable.
 *
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author GraviteeSource Team
 */
public class ExecutionContextFactory {

    protected final List<TemplateVariableProvider> providers = new ArrayList<>();

    protected final ComponentProvider componentProvider;

    public ExecutionContextFactory(ComponentProvider componentProvider) {
        this.componentProvider = componentProvider;
    }

    /**
     * Create a new {@link ExecutionContext} for each of the incoming sync request to the gateway.
     *
     * @param request the request to attach to the context.
     * @param response the response to attach to the context.
     *
     * @return the created {@link SyncExecutionContext}.
     */
    public SyncExecutionContext create(SyncRequest request, SyncResponse response) {
        return new SyncExecutionContext(request, response, componentProvider);
    }

    public void addTemplateVariableProvider(TemplateVariableProvider templateVariableProvider) {
        this.providers.add(templateVariableProvider);
    }
}
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
package io.gravitee.definition.jackson.datatype.services.healthcheck.ser;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdScalarSerializer;
import io.gravitee.definition.model.services.healthcheck.HealthCheckResponse;
import java.io.IOException;

/**
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author GraviteeSource Team
 */
public class ResponseSerializer extends StdScalarSerializer<HealthCheckResponse> {

    public ResponseSerializer(Class<HealthCheckResponse> t) {
        super(t);
    }

    @Override
    public void serialize(HealthCheckResponse response, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        jgen.writeStartObject();

        jgen.writeArrayFieldStart("assertions");
        if (response.getAssertions() != null && !response.getAssertions().isEmpty()) {
            response
                .getAssertions()
                .forEach(assertion -> {
                    try {
                        jgen.writeString(assertion);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
        } else {
            jgen.writeString(HealthCheckResponse.DEFAULT_ASSERTION);
        }

        jgen.writeEndArray();

        jgen.writeEndObject();
    }
}

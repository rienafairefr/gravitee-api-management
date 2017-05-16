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
package io.gravitee.management.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Objects;

/**
 * @author Azize ELAMRANI (azize at graviteesource.com)
 * @author GraviteeSource Team
 */
public class ApiMetadataEntity {

    @NotNull
    @Size(min = 1)
    private String key;

    private String name;

    private MetadataFormat format;

    @NotNull
    @Size(min = 1)
    private String value;

    private String defaultValue;

    private String apiId;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MetadataFormat getFormat() {
        return format;
    }

    public void setFormat(MetadataFormat format) {
        this.format = format;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getDefaultValue() {
        return defaultValue;
    }

    public void setDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
    }

    public String getApiId() {
        return apiId;
    }

    public void setApiId(String apiId) {
        this.apiId = apiId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ApiMetadataEntity)) return false;
        ApiMetadataEntity that = (ApiMetadataEntity) o;
        return Objects.equals(key, that.key) &&
                Objects.equals(apiId, that.apiId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key, apiId);
    }

    @Override
    public String toString() {
        return "ApiMetadataEntity{" +
                "key='" + key + '\'' +
                ", name='" + name + '\'' +
                ", format=" + format +
                ", value='" + value + '\'' +
                ", defaultValue='" + defaultValue + '\'' +
                ", apiId=" + apiId +
                '}';
    }
}

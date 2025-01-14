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
package io.gravitee.rest.api.service.impl;

import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.*;

import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.management.api.EnvironmentRepository;
import io.gravitee.repository.management.model.Environment;
import io.gravitee.rest.api.model.EnvironmentEntity;
import io.gravitee.rest.api.model.UpdateEnvironmentEntity;
import io.gravitee.rest.api.service.ApiHeaderService;
import io.gravitee.rest.api.service.OrganizationService;
import io.gravitee.rest.api.service.PageService;
import io.gravitee.rest.api.service.common.ExecutionContext;
import io.gravitee.rest.api.service.common.GraviteeContext;
import io.gravitee.rest.api.service.exceptions.OrganizationNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

/**
 * @author Nicolas GERAUD (nicolas.geraud at graviteesource.com)
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
@RunWith(MockitoJUnitRunner.class)
public class EnvironmentService_CreateTest {

    @InjectMocks
    private EnvironmentServiceImpl environmentService = new EnvironmentServiceImpl();

    @Mock
    private EnvironmentRepository mockEnvironmentRepository;

    @Mock
    private OrganizationService mockOrganizationService;

    @Mock
    private ApiHeaderService mockAPIHeaderService;

    @Mock
    private PageService mockPageService;

    @Test
    public void shouldCreateEnvironment() throws TechnicalException {
        when(mockOrganizationService.findById(any())).thenReturn(null);
        when(mockEnvironmentRepository.findById(any())).thenReturn(Optional.empty());

        UpdateEnvironmentEntity env1 = new UpdateEnvironmentEntity();
        env1.setHrids(Arrays.asList("envhrid"));
        env1.setName("env_name");
        env1.setDescription("env_desc");
        List<String> domainRestrictions = Arrays.asList("domain", "restriction");
        env1.setDomainRestrictions(domainRestrictions);

        Environment createdEnv = new Environment();
        createdEnv.setId("env_id");
        when(mockEnvironmentRepository.create(any())).thenReturn(createdEnv);

        EnvironmentEntity environment = environmentService.createOrUpdate("DEFAULT", "env_id", env1);

        assertNotNull("result is null", environment);
        verify(mockEnvironmentRepository, times(1))
            .create(
                argThat(arg ->
                    arg != null &&
                    arg.getHrids().equals(Arrays.asList("envhrid")) &&
                    arg.getName().equals("env_name") &&
                    arg.getDescription().equals("env_desc") &&
                    arg.getDomainRestrictions().equals(domainRestrictions) &&
                    arg.getOrganizationId().equals("DEFAULT")
                )
            );
        verify(mockEnvironmentRepository, never()).update(any());
        ExecutionContext executionContext = new ExecutionContext("DEFAULT", "env_id");
        verify(mockAPIHeaderService, times(1)).initialize(executionContext);
        verify(mockPageService, times(1)).initialize(executionContext);
    }

    @Test
    public void shouldUpdateEnvironment() throws TechnicalException {
        when(mockOrganizationService.findById(any())).thenReturn(null);
        when(mockEnvironmentRepository.findById(any())).thenReturn(Optional.of(new Environment()));

        UpdateEnvironmentEntity env1 = new UpdateEnvironmentEntity();
        env1.setHrids(Arrays.asList("envhrid"));
        env1.setName("env_name");
        env1.setDescription("env_desc");
        List<String> domainRestrictions = Arrays.asList("domain", "restriction");
        env1.setDomainRestrictions(domainRestrictions);

        Environment updatedEnv = new Environment();
        when(mockEnvironmentRepository.update(any())).thenReturn(updatedEnv);

        EnvironmentEntity environment = environmentService.createOrUpdate("DEFAULT", "env_id", env1);

        assertNotNull("result is null", environment);
        verify(mockEnvironmentRepository, times(1))
            .update(
                argThat(arg ->
                    arg != null &&
                    arg.getHrids().equals(Arrays.asList("envhrid")) &&
                    arg.getName().equals("env_name") &&
                    arg.getDescription().equals("env_desc") &&
                    arg.getDomainRestrictions().equals(domainRestrictions) &&
                    arg.getOrganizationId().equals("DEFAULT")
                )
            );
        verify(mockEnvironmentRepository, never()).create(any());
        ExecutionContext executionContext = new ExecutionContext("DEFAULT", "env_id");
        verify(mockAPIHeaderService, never()).initialize(executionContext);
        verify(mockPageService, never()).initialize(executionContext);
    }

    @Test(expected = OrganizationNotFoundException.class)
    public void shouldHaveBadOrganizationExceptionWhenNoOrganizationInEntity() {
        when(mockOrganizationService.findById("UNKNOWN")).thenThrow(new OrganizationNotFoundException("UNKNOWN"));

        environmentService.createOrUpdate("UNKNOWN", "env_id", new UpdateEnvironmentEntity());
    }
}

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

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.gravitee.definition.jackson.datatype.GraviteeMapper;
import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.media.api.MediaRepository;
import io.gravitee.repository.media.model.Media;
import io.gravitee.rest.api.model.MediaEntity;
import io.gravitee.rest.api.model.PageMediaEntity;
import io.gravitee.rest.api.service.ConfigService;
import io.gravitee.rest.api.service.MediaService;
import io.gravitee.rest.api.service.exceptions.ApiMediaNotFoundException;
import io.gravitee.rest.api.service.exceptions.TechnicalManagementException;
import java.io.InputStream;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import junit.framework.AssertionFailedError;
import junit.framework.TestCase;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

/**
 * @author GraviteeSource Team
 */
@RunWith(MockitoJUnitRunner.class)
public class MediaServiceTest extends TestCase {

    private static final String API_ID = "api-id";
    private static final String MEDIA_FILE = "media/logo.png";
    private static final String MEDIA_FILE_NAME = "logo.png";
    private static final String MEDIA_TYPE = "image";
    private static final String MEDIA_HASH = "72A6AF6B72587FE1720AC31F802F9DD6";
    private static final Date MEDIA_DATE = Date.from(Instant.now());
    private static final long MEDIA_SIZE = 1952;

    private static final ObjectMapper MAPPER = new GraviteeMapper();

    @Mock
    private MediaRepository mediaRepository;

    @Mock
    private ConfigService configService;

    private MediaService mediaService;

    @Override
    @Before
    public void setUp() throws Exception {
        mediaService = new MediaServiceImpl(mediaRepository, configService, MAPPER);
    }

    @Test
    public void shouldCreateMediaWhenHashIsNotFound() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.empty());

        String hash = mediaService.saveApiMedia(API_ID, newMediaEntity());

        assertThat(hash).isEqualTo(MEDIA_HASH);

        verify(mediaRepository, times(1))
            .create(
                argThat(media ->
                    media.getData().length == media.getSize() &&
                    MEDIA_SIZE == media.getSize() &&
                    MEDIA_HASH.equals(media.getHash()) &&
                    API_ID.equals(media.getApi()) &&
                    media.getId() != null
                )
            );
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnCreateMedia() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenThrow(TechnicalException.class);
        mediaService.saveApiMedia(API_ID, newMediaEntity());
    }

    @Test
    public void shouldNotCreateMediaWhenHashIsFound() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.of(newMedia()));

        String hash = mediaService.saveApiMedia(API_ID, newMediaEntity());

        assertThat(hash).isEqualTo(MEDIA_HASH);

        verify(mediaRepository, never()).create(any());
    }

    @Test
    public void shouldCreateMediaFromDefinitionWhenHashIsNotFound() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.empty());

        String hash = mediaService.createWithDefinition(API_ID, newMediaDefinition());

        assertThat(hash).isEqualTo(MEDIA_HASH);

        verify(mediaRepository, times(1))
            .create(
                argThat(media ->
                    media.getData().length == media.getSize() &&
                    MEDIA_SIZE == media.getSize() &&
                    MEDIA_HASH.equals(media.getHash()) &&
                    API_ID.equals(media.getApi()) &&
                    media.getId() != null
                )
            );
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnCreateMediaFromDefinition() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenThrow(TechnicalException.class);

        mediaService.createWithDefinition(API_ID, newMediaDefinition());
    }

    @Test
    public void shouldNotCreateMediaFromDefinitionWhenHashIsFound() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.of(newMedia()));

        String hash = mediaService.createWithDefinition(API_ID, newMediaDefinition());

        assertThat(hash).isEqualTo(MEDIA_HASH);

        verify(mediaRepository, never()).create(any());
    }

    @Test
    public void findByHashShouldReturnNullIfNotFound() throws Exception {
        when(mediaRepository.findByHashAndType(MEDIA_HASH, MEDIA_TYPE)).thenReturn(Optional.empty());

        MediaEntity mediaEntity = mediaService.findByHash(MEDIA_HASH);

        assertThat(mediaEntity).isNull();
    }

    @Test
    public void findByHashShouldConvertIfFound() throws Exception {
        when(mediaRepository.findByHashAndType(MEDIA_HASH, MEDIA_TYPE)).thenReturn(Optional.of(newMedia()));

        MediaEntity mediaEntity = mediaService.findByHash(MEDIA_HASH);

        assertThat(mediaEntity).usingRecursiveComparison().isEqualTo(newMediaEntity());
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnFindByHashAndType() throws Exception {
        when(mediaRepository.findByHashAndType(MEDIA_HASH, MEDIA_TYPE)).thenThrow(TechnicalException.class);
        mediaService.findByHash(MEDIA_HASH);
    }

    @Test
    public void findByHashAndApiIdShouldReturnNullIfNotFound() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.empty());

        MediaEntity mediaEntity = mediaService.findByHashAndApiId(MEDIA_HASH, API_ID);

        assertThat(mediaEntity).isNull();
    }

    @Test
    public void findByHashAndApiIdShouldConvertIfFound() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.of(newMedia()));

        MediaEntity mediaEntity = mediaService.findByHashAndApiId(MEDIA_HASH, API_ID);

        assertThat(mediaEntity).usingRecursiveComparison().isEqualTo(newMediaEntity());
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnFindByHashAndApiId() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenThrow(TechnicalException.class);
        mediaService.findByHashAndApiId(MEDIA_HASH, API_ID);
    }

    @Test
    public void findByHashShouldReturnNullIfNotFoundIgnoringType() throws Exception {
        when(mediaRepository.findByHash(MEDIA_HASH)).thenReturn(Optional.empty());

        MediaEntity mediaEntity = mediaService.findByHash(MEDIA_HASH, true);

        assertThat(mediaEntity).isNull();
    }

    @Test
    public void findByHashShouldConvertIfFoundWithType() throws Exception {
        when(mediaRepository.findByHashAndType(MEDIA_HASH, MEDIA_TYPE)).thenReturn(Optional.of(newMedia()));

        MediaEntity mediaEntity = mediaService.findByHash(MEDIA_HASH, false);

        assertThat(mediaEntity).usingRecursiveComparison().isEqualTo(newMediaEntity());
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnFindByHashIgnoringType() throws Exception {
        when(mediaRepository.findByHash(MEDIA_HASH)).thenThrow(TechnicalException.class);

        mediaService.findByHash(MEDIA_HASH, true);
    }

    @Test
    public void findByHashAndApiShouldReturnNullIfNotFoundIgnoringType() throws Exception {
        when(mediaRepository.findByHashAndApi(MEDIA_HASH, API_ID)).thenReturn(Optional.empty());

        MediaEntity mediaEntity = mediaService.findByHashAndApi(MEDIA_HASH, API_ID, true);

        assertThat(mediaEntity).isNull();
    }

    @Test
    public void findByHashAndApiShouldConvertIFoundWithType() throws Exception {
        when(mediaRepository.findByHashAndApiAndType(MEDIA_HASH, API_ID, MEDIA_TYPE)).thenReturn(Optional.of(newMedia()));

        MediaEntity mediaEntity = mediaService.findByHashAndApi(MEDIA_HASH, API_ID, false);

        assertThat(mediaEntity).usingRecursiveComparison().isEqualTo(newMediaEntity());
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnFindByHashAndApiIgnoringType() throws Exception {
        when(mediaRepository.findByHashAndApi(MEDIA_HASH, API_ID)).thenThrow(TechnicalException.class);

        mediaService.findByHashAndApi(MEDIA_HASH, API_ID, true);
    }

    @Test
    public void findAllWithoutContentShouldConvertListIfFound() throws Exception {
        when(mediaRepository.findByHashAndApi(MEDIA_HASH, API_ID, false)).thenReturn(Optional.of(newMedia(false)));

        List<MediaEntity> mediaEntities = mediaService.findAllWithoutContent(List.of(newPageMediaEntity()), API_ID);

        assertThat(mediaEntities).usingRecursiveComparison().isEqualTo(List.of(newMediaEntity(false)));
    }

    @Test
    public void findAllWithoutContentShouldReturnEmptyListWithNullPages() {
        List<MediaEntity> mediaEntities = mediaService.findAllWithoutContent(null, API_ID);

        assertThat(mediaEntities).isEmpty();
    }

    @Test
    public void findAllWithoutContentShouldReturnEmptyListWithEmptyPages() {
        List<MediaEntity> mediaEntities = mediaService.findAllWithoutContent(List.of(), API_ID);

        assertThat(mediaEntities).isEmpty();
    }

    @Test
    public void findAllWithoutContentShouldReturnEmptyListIfNotFound() throws Exception {
        when(mediaRepository.findByHashAndApi(MEDIA_HASH, API_ID, false)).thenReturn(Optional.empty());

        List<MediaEntity> mediaEntities = mediaService.findAllWithoutContent(List.of(newPageMediaEntity()), API_ID);

        assertThat(mediaEntities).isEmpty();
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnFindAllWithoutContent() throws Exception {
        when(mediaRepository.findByHashAndApi(MEDIA_HASH, API_ID, false)).thenThrow(TechnicalException.class);

        mediaService.findAllWithoutContent(List.of(newPageMediaEntity()), API_ID);
    }

    @Test
    public void findAllByApiShouldConvertList() throws Exception {
        when(mediaRepository.findAllByApi(API_ID)).thenReturn(List.of(newMedia()));

        List<MediaEntity> mediaEntities = mediaService.findAllByApiId(API_ID);

        assertThat(mediaEntities).usingRecursiveComparison().isEqualTo(List.of(newMediaEntity()));
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnFindAllByApi() throws Exception {
        when(mediaRepository.findAllByApi(API_ID)).thenThrow(TechnicalException.class);

        mediaService.findAllByApiId(API_ID);
    }

    @Test(expected = TechnicalManagementException.class)
    public void shouldThrowTechnicalManagementExceptionOnDeleteByHashAndApi() throws Exception {
        doThrow(TechnicalException.class).when(mediaRepository).findByHashAndApi(MEDIA_HASH, API_ID);

        mediaService.deleteByHashAndApi(MEDIA_HASH, API_ID);
    }

    @Test(expected = ApiMediaNotFoundException.class)
    public void shouldThrowApiMediaNotFoundExceptionOnDeleteByHashAndApi() throws Exception {
        when(mediaRepository.findByHashAndApi(MEDIA_HASH, API_ID)).thenReturn(Optional.empty());

        mediaService.deleteByHashAndApi(MEDIA_HASH, API_ID);
    }

    private static MediaEntity newMediaEntity() throws Exception {
        return newMediaEntity(true);
    }

    private static MediaEntity newMediaEntity(boolean includeContent) throws Exception {
        MediaEntity mediaEntity = new MediaEntity();
        mediaEntity.setFileName(MEDIA_FILE_NAME);
        mediaEntity.setType(MEDIA_TYPE);
        mediaEntity.setSize(MEDIA_SIZE);
        mediaEntity.setHash(MEDIA_HASH);
        mediaEntity.setUploadDate(MEDIA_DATE);
        if (includeContent) {
            mediaEntity.setData(readBytes());
        }
        return mediaEntity;
    }

    private static byte[] readBytes() throws Exception {
        InputStream resourceAsStream = MediaServiceTest.class.getClassLoader().getResourceAsStream(MEDIA_FILE);
        if (resourceAsStream == null) {
            throw new AssertionFailedError("Resource not found " + MEDIA_FILE);
        }
        return resourceAsStream.readAllBytes();
    }

    private static String newMediaDefinition() throws Exception {
        return MAPPER.writeValueAsString(newMediaEntity());
    }

    private static Media newMedia() throws Exception {
        return newMedia(true);
    }

    private static Media newMedia(boolean includeContent) throws Exception {
        Media media = new Media(MEDIA_TYPE, null, MEDIA_FILE_NAME, MEDIA_SIZE);
        media.setHash(MEDIA_HASH);
        media.setCreatedAt(MEDIA_DATE);
        if (includeContent) {
            media.setData(newMediaEntity().getData());
        }
        return media;
    }

    private static PageMediaEntity newPageMediaEntity() {
        return new PageMediaEntity(MEDIA_HASH, MEDIA_FILE_NAME, MEDIA_DATE);
    }
}

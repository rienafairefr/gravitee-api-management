/*
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
import {
  ApiEntity,
  ApiEntityFlowModeEnum,
  LoadBalancerTypeEnum,
  MemberEntity,
  PageEntity,
  Proxy,
  Visibility,
} from '../../management-webclient-sdk/src/lib';
import * as faker from 'faker';
import { ApiFakers } from '@fakers/apis';

export interface ApiImportEntity extends ApiEntity {
  members?: Array<MemberEntity>;
  pages?: Array<PageEntity>;
  metadata?: any;
}

export enum ApiMetadataFormat {
  STRING = 'STRING',
  NUMERIC = 'NUMERIC',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  MAIL = 'MAIN',
  URL = 'URL',
}

export class ApisFaker {
  static apiImport(attributes?: Partial<ApiImportEntity>): ApiImportEntity {
    return this.api(attributes);
  }

  static api(attributes?: Partial<ApiEntity>): ApiEntity {
    const name = faker.commerce.productName();
    const version = ApiFakers.version();
    const description = faker.commerce.productDescription();

    return {
      name,
      version,
      description,
      visibility: Visibility.PRIVATE,
      gravitee: '2.0.0',
      flow_mode: ApiEntityFlowModeEnum.DEFAULT,
      resources: [],
      properties: [],
      groups: [],
      plans: [],
      path_mappings: [],
      proxy: this.proxy(),
      response_templates: {},
      ...attributes,
    };
  }

  static proxy(attributes?: Partial<Proxy>): Proxy {
    return {
      virtual_hosts: [
        {
          path: `/${faker.helpers.slugify(faker.commerce.productName())}`,
        },
      ],
      strip_context_path: false,
      preserve_host: false,
      groups: [
        {
          name: 'default-group',
          endpoints: [
            {
              inherit: true,
              name: 'default',
              target: 'https://api.gravitee.io/whattimeisit',
              weight: 1,
              backup: false,
              type: 'http',
            },
          ],
          load_balancing: {
            type: LoadBalancerTypeEnum.ROUNDROBIN,
          },
          http: {
            connectTimeout: 5000,
            idleTimeout: 60000,
            keepAlive: true,
            readTimeout: 10000,
            pipelining: false,
            maxConcurrentConnections: 100,
            useCompression: true,
            followRedirects: false,
          },
        },
      ],
      ...attributes,
    };
  }
}
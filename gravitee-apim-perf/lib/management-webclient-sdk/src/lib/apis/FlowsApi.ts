/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    OrganizationFlowConfiguration,
    OrganizationFlowConfigurationFromJSON,
    OrganizationFlowConfigurationToJSON,
} from '../models';

export interface GetConfigurationSchemaFormRequest {
    orgId: string;
}

export interface GetPlatformFlowSchemaFormRequest {
    orgId: string;
}

export interface HasPoliciesRequest {
    orgId: string;
}

/**
 * 
 */
export class FlowsApi extends runtime.BaseAPI {

    /**
     */
    async getConfigurationSchemaFormRaw(requestParameters: GetConfigurationSchemaFormRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getConfigurationSchemaForm.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/configuration/flows/configuration-schema`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getConfigurationSchemaForm(requestParameters: GetConfigurationSchemaFormRequest): Promise<void> {
        await this.getConfigurationSchemaFormRaw(requestParameters);
    }

    /**
     */
    async getPlatformFlowSchemaFormRaw(requestParameters: GetPlatformFlowSchemaFormRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getPlatformFlowSchemaForm.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/configuration/flows/flow-schema`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getPlatformFlowSchemaForm(requestParameters: GetPlatformFlowSchemaFormRequest): Promise<void> {
        await this.getPlatformFlowSchemaFormRaw(requestParameters);
    }

    /**
     * Get the global flow configuration of the organization
     */
    async hasPoliciesRaw(requestParameters: HasPoliciesRequest): Promise<runtime.ApiResponse<OrganizationFlowConfiguration>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling hasPolicies.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/configuration/flows`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFlowConfigurationFromJSON(jsonValue));
    }

    /**
     * Get the global flow configuration of the organization
     */
    async hasPolicies(requestParameters: HasPoliciesRequest): Promise<OrganizationFlowConfiguration> {
        const response = await this.hasPoliciesRaw(requestParameters);
        return await response.value();
    }

}
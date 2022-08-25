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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HealthCheckResponse
 */
export interface HealthCheckResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof HealthCheckResponse
     */
    assertions?: Array<string>;
}

/**
 * Check if a given object implements the HealthCheckResponse interface.
 */
export function instanceOfHealthCheckResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthCheckResponseFromJSON(json: any): HealthCheckResponse {
    return HealthCheckResponseFromJSONTyped(json, false);
}

export function HealthCheckResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthCheckResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assertions': !exists(json, 'assertions') ? undefined : json['assertions'],
    };
}

export function HealthCheckResponseToJSON(value?: HealthCheckResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assertions': value.assertions,
    };
}


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
import type { HealthCheckStep } from './HealthCheckStep';
import {
    HealthCheckStepFromJSON,
    HealthCheckStepFromJSONTyped,
    HealthCheckStepToJSON,
} from './HealthCheckStep';

/**
 * 
 * @export
 * @interface EndpointHealthCheckService
 */
export interface EndpointHealthCheckService {
    /**
     * 
     * @type {boolean}
     * @memberof EndpointHealthCheckService
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EndpointHealthCheckService
     */
    inherit?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EndpointHealthCheckService
     */
    schedule?: string;
    /**
     * 
     * @type {Array<HealthCheckStep>}
     * @memberof EndpointHealthCheckService
     */
    steps?: Array<HealthCheckStep>;
}

/**
 * Check if a given object implements the EndpointHealthCheckService interface.
 */
export function instanceOfEndpointHealthCheckService(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EndpointHealthCheckServiceFromJSON(json: any): EndpointHealthCheckService {
    return EndpointHealthCheckServiceFromJSONTyped(json, false);
}

export function EndpointHealthCheckServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointHealthCheckService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'inherit': !exists(json, 'inherit') ? undefined : json['inherit'],
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'steps': !exists(json, 'steps') ? undefined : ((json['steps'] as Array<any>).map(HealthCheckStepFromJSON)),
    };
}

export function EndpointHealthCheckServiceToJSON(value?: EndpointHealthCheckService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'inherit': value.inherit,
        'schedule': value.schedule,
        'steps': value.steps === undefined ? undefined : ((value.steps as Array<any>).map(HealthCheckStepToJSON)),
    };
}


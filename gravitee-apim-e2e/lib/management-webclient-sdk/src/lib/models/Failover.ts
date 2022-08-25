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
 * @interface Failover
 */
export interface Failover {
    /**
     * 
     * @type {Array<string>}
     * @memberof Failover
     */
    cases?: Array<FailoverCasesEnum>;
    /**
     * 
     * @type {number}
     * @memberof Failover
     */
    maxAttempts?: number;
    /**
     * 
     * @type {number}
     * @memberof Failover
     */
    retryTimeout?: number;
}


/**
 * @export
 */
export const FailoverCasesEnum = {
    TIMEOUT: 'TIMEOUT'
} as const;
export type FailoverCasesEnum = typeof FailoverCasesEnum[keyof typeof FailoverCasesEnum];


/**
 * Check if a given object implements the Failover interface.
 */
export function instanceOfFailover(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FailoverFromJSON(json: any): Failover {
    return FailoverFromJSONTyped(json, false);
}

export function FailoverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Failover {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cases': !exists(json, 'cases') ? undefined : json['cases'],
        'maxAttempts': !exists(json, 'maxAttempts') ? undefined : json['maxAttempts'],
        'retryTimeout': !exists(json, 'retryTimeout') ? undefined : json['retryTimeout'],
    };
}

export function FailoverToJSON(value?: Failover | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cases': value.cases,
        'maxAttempts': value.maxAttempts,
        'retryTimeout': value.retryTimeout,
    };
}


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
 * @interface PlatformRequestItem
 */
export interface PlatformRequestItem {
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    api?: string;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    application?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlatformRequestItem
     */
    endpoint?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    method?: PlatformRequestItemMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    plan?: string;
    /**
     * 
     * @type {number}
     * @memberof PlatformRequestItem
     */
    responseTime?: number;
    /**
     * 
     * @type {number}
     * @memberof PlatformRequestItem
     */
    status?: number;
    /**
     * 
     * @type {number}
     * @memberof PlatformRequestItem
     */
    timestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    transactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlatformRequestItem
     */
    user?: string;
}


/**
 * @export
 */
export const PlatformRequestItemMethodEnum = {
    CONNECT: 'CONNECT',
    DELETE: 'DELETE',
    GET: 'GET',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS',
    PATCH: 'PATCH',
    POST: 'POST',
    PUT: 'PUT',
    TRACE: 'TRACE',
    OTHER: 'OTHER'
} as const;
export type PlatformRequestItemMethodEnum = typeof PlatformRequestItemMethodEnum[keyof typeof PlatformRequestItemMethodEnum];


/**
 * Check if a given object implements the PlatformRequestItem interface.
 */
export function instanceOfPlatformRequestItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlatformRequestItemFromJSON(json: any): PlatformRequestItem {
    return PlatformRequestItemFromJSONTyped(json, false);
}

export function PlatformRequestItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformRequestItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api': !exists(json, 'api') ? undefined : json['api'],
        'application': !exists(json, 'application') ? undefined : json['application'],
        'endpoint': !exists(json, 'endpoint') ? undefined : json['endpoint'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'plan': !exists(json, 'plan') ? undefined : json['plan'],
        'responseTime': !exists(json, 'responseTime') ? undefined : json['responseTime'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function PlatformRequestItemToJSON(value?: PlatformRequestItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api': value.api,
        'application': value.application,
        'endpoint': value.endpoint,
        'id': value.id,
        'method': value.method,
        'path': value.path,
        'plan': value.plan,
        'responseTime': value.responseTime,
        'status': value.status,
        'timestamp': value.timestamp,
        'transactionId': value.transactionId,
        'user': value.user,
    };
}


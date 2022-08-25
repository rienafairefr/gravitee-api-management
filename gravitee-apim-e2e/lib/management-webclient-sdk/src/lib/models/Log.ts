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
import type { Request } from './Request';
import {
    RequestFromJSON,
    RequestFromJSONTyped,
    RequestToJSON,
} from './Request';
import type { Response } from './Response';
import {
    ResponseFromJSON,
    ResponseFromJSONTyped,
    ResponseToJSON,
} from './Response';

/**
 * 
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    available?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    endpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    gateway?: string;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    message?: string;
    /**
     * 
     * @type {Request}
     * @memberof Log
     */
    request?: Request;
    /**
     * 
     * @type {Response}
     * @memberof Log
     */
    response?: Response;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    responseTime?: number;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    state?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    timestamp?: number;
}

/**
 * Check if a given object implements the Log interface.
 */
export function instanceOfLog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LogFromJSON(json: any): Log {
    return LogFromJSONTyped(json, false);
}

export function LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Log {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': !exists(json, 'available') ? undefined : json['available'],
        'endpoint': !exists(json, 'endpoint') ? undefined : json['endpoint'],
        'gateway': !exists(json, 'gateway') ? undefined : json['gateway'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'request': !exists(json, 'request') ? undefined : RequestFromJSON(json['request']),
        'response': !exists(json, 'response') ? undefined : ResponseFromJSON(json['response']),
        'responseTime': !exists(json, 'responseTime') ? undefined : json['responseTime'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
    };
}

export function LogToJSON(value?: Log | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
        'endpoint': value.endpoint,
        'gateway': value.gateway,
        'id': value.id,
        'message': value.message,
        'request': RequestToJSON(value.request),
        'response': ResponseToJSON(value.response),
        'responseTime': value.responseTime,
        'state': value.state,
        'success': value.success,
        'timestamp': value.timestamp,
    };
}


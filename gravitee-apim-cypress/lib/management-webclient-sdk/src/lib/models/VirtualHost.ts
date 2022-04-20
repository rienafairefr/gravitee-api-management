/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.18.0-SNAPSHOT
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
 * @interface VirtualHost
 */
export interface VirtualHost {
    /**
     * 
     * @type {string}
     * @memberof VirtualHost
     */
    host?: string;
    /**
     * 
     * @type {string}
     * @memberof VirtualHost
     */
    path?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VirtualHost
     */
    override_entrypoint?: boolean;
}

export function VirtualHostFromJSON(json: any): VirtualHost {
    return VirtualHostFromJSONTyped(json, false);
}

export function VirtualHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualHost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': !exists(json, 'host') ? undefined : json['host'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'override_entrypoint': !exists(json, 'override_entrypoint') ? undefined : json['override_entrypoint'],
    };
}

export function VirtualHostToJSON(value?: VirtualHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'path': value.path,
        'override_entrypoint': value.override_entrypoint,
    };
}


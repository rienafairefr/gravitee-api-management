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
import type { PluginEntity } from './PluginEntity';
import {
    PluginEntityFromJSON,
    PluginEntityFromJSONTyped,
    PluginEntityToJSON,
} from './PluginEntity';
import type { PolicyDevelopmentEntity } from './PolicyDevelopmentEntity';
import {
    PolicyDevelopmentEntityFromJSON,
    PolicyDevelopmentEntityFromJSONTyped,
    PolicyDevelopmentEntityToJSON,
} from './PolicyDevelopmentEntity';
import type { PolicyType } from './PolicyType';
import {
    PolicyTypeFromJSON,
    PolicyTypeFromJSONTyped,
    PolicyTypeToJSON,
} from './PolicyType';

/**
 * 
 * @export
 * @interface PolicyEntity
 */
export interface PolicyEntity {
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    description?: string;
    /**
     * 
     * @type {PolicyDevelopmentEntity}
     * @memberof PolicyEntity
     */
    dev?: PolicyDevelopmentEntity;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    name?: string;
    /**
     * 
     * @type {PluginEntity}
     * @memberof PolicyEntity
     */
    plugin?: PluginEntity;
    /**
     * 
     * @type {PolicyType}
     * @memberof PolicyEntity
     */
    type?: PolicyType;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    version?: string;
}

/**
 * Check if a given object implements the PolicyEntity interface.
 */
export function instanceOfPolicyEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PolicyEntityFromJSON(json: any): PolicyEntity {
    return PolicyEntityFromJSONTyped(json, false);
}

export function PolicyEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dev': !exists(json, 'dev') ? undefined : PolicyDevelopmentEntityFromJSON(json['dev']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'plugin': !exists(json, 'plugin') ? undefined : PluginEntityFromJSON(json['plugin']),
        'type': !exists(json, 'type') ? undefined : PolicyTypeFromJSON(json['type']),
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function PolicyEntityToJSON(value?: PolicyEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'description': value.description,
        'dev': PolicyDevelopmentEntityToJSON(value.dev),
        'id': value.id,
        'name': value.name,
        'plugin': PluginEntityToJSON(value.plugin),
        'type': PolicyTypeToJSON(value.type),
        'version': value.version,
    };
}


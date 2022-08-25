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
import type { Format } from './Format';
import {
    FormatFromJSON,
    FormatFromJSONTyped,
    FormatToJSON,
} from './Format';
import type { Type } from './Type';
import {
    TypeFromJSON,
    TypeFromJSONTyped,
    TypeToJSON,
} from './Type';

/**
 * 
 * @export
 * @interface ImportSwaggerDescriptorEntity
 */
export interface ImportSwaggerDescriptorEntity {
    /**
     * 
     * @type {Format}
     * @memberof ImportSwaggerDescriptorEntity
     */
    format?: Format;
    /**
     * The swagger/openapi content.
     * @type {string}
     * @memberof ImportSwaggerDescriptorEntity
     */
    payload: string;
    /**
     * 
     * @type {Type}
     * @memberof ImportSwaggerDescriptorEntity
     */
    type?: Type;
    /**
     * Do you want to create a swagger page in addition to the API ?
     * @type {boolean}
     * @memberof ImportSwaggerDescriptorEntity
     */
    with_documentation?: boolean;
    /**
     * Do you want to create a path mapping for each declared swagger paths in addition to the API ?
     * @type {boolean}
     * @memberof ImportSwaggerDescriptorEntity
     */
    with_path_mapping?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImportSwaggerDescriptorEntity
     */
    with_policies?: Array<string>;
    /**
     * Do you want to create a path (in order to add policies under) for each declared swagger paths in addition to the API ?
     * @type {boolean}
     * @memberof ImportSwaggerDescriptorEntity
     */
    with_policy_paths?: boolean;
}

/**
 * Check if a given object implements the ImportSwaggerDescriptorEntity interface.
 */
export function instanceOfImportSwaggerDescriptorEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payload" in value;

    return isInstance;
}

export function ImportSwaggerDescriptorEntityFromJSON(json: any): ImportSwaggerDescriptorEntity {
    return ImportSwaggerDescriptorEntityFromJSONTyped(json, false);
}

export function ImportSwaggerDescriptorEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportSwaggerDescriptorEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': !exists(json, 'format') ? undefined : FormatFromJSON(json['format']),
        'payload': json['payload'],
        'type': !exists(json, 'type') ? undefined : TypeFromJSON(json['type']),
        'with_documentation': !exists(json, 'with_documentation') ? undefined : json['with_documentation'],
        'with_path_mapping': !exists(json, 'with_path_mapping') ? undefined : json['with_path_mapping'],
        'with_policies': !exists(json, 'with_policies') ? undefined : json['with_policies'],
        'with_policy_paths': !exists(json, 'with_policy_paths') ? undefined : json['with_policy_paths'],
    };
}

export function ImportSwaggerDescriptorEntityToJSON(value?: ImportSwaggerDescriptorEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': FormatToJSON(value.format),
        'payload': value.payload,
        'type': TypeToJSON(value.type),
        'with_documentation': value.with_documentation,
        'with_path_mapping': value.with_path_mapping,
        'with_policies': value.with_policies,
        'with_policy_paths': value.with_policy_paths,
    };
}


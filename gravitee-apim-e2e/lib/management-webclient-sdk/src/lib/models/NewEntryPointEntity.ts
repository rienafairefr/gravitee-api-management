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
 * @interface NewEntryPointEntity
 */
export interface NewEntryPointEntity {
    /**
     * 
     * @type {Array<string>}
     * @memberof NewEntryPointEntity
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NewEntryPointEntity
     */
    value: string;
}

/**
 * Check if a given object implements the NewEntryPointEntity interface.
 */
export function instanceOfNewEntryPointEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function NewEntryPointEntityFromJSON(json: any): NewEntryPointEntity {
    return NewEntryPointEntityFromJSONTyped(json, false);
}

export function NewEntryPointEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewEntryPointEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tags': json['tags'],
        'value': json['value'],
    };
}

export function NewEntryPointEntityToJSON(value?: NewEntryPointEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tags': value.tags,
        'value': value.value,
    };
}


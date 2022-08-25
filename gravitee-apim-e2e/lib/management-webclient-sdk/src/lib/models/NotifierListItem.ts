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
 * @interface NotifierListItem
 */
export interface NotifierListItem {
    /**
     * 
     * @type {string}
     * @memberof NotifierListItem
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof NotifierListItem
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NotifierListItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof NotifierListItem
     */
    schema?: string;
    /**
     * 
     * @type {string}
     * @memberof NotifierListItem
     */
    version?: string;
}

/**
 * Check if a given object implements the NotifierListItem interface.
 */
export function instanceOfNotifierListItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NotifierListItemFromJSON(json: any): NotifierListItem {
    return NotifierListItemFromJSONTyped(json, false);
}

export function NotifierListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifierListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function NotifierListItemToJSON(value?: NotifierListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'schema': value.schema,
        'version': value.version,
    };
}


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
 * @interface ClientRegistrationProviderListItem
 */
export interface ClientRegistrationProviderListItem {
    /**
     * 
     * @type {Date}
     * @memberof ClientRegistrationProviderListItem
     */
    created_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof ClientRegistrationProviderListItem
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRegistrationProviderListItem
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientRegistrationProviderListItem
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof ClientRegistrationProviderListItem
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the ClientRegistrationProviderListItem interface.
 */
export function instanceOfClientRegistrationProviderListItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClientRegistrationProviderListItemFromJSON(json: any): ClientRegistrationProviderListItem {
    return ClientRegistrationProviderListItemFromJSONTyped(json, false);
}

export function ClientRegistrationProviderListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientRegistrationProviderListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ClientRegistrationProviderListItemToJSON(value?: ClientRegistrationProviderListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


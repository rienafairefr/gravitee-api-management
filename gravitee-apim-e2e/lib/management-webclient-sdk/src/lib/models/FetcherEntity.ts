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
 * @interface FetcherEntity
 */
export interface FetcherEntity {
    /**
     * 
     * @type {string}
     * @memberof FetcherEntity
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof FetcherEntity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FetcherEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof FetcherEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FetcherEntity
     */
    version?: string;
}

/**
 * Check if a given object implements the FetcherEntity interface.
 */
export function instanceOfFetcherEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetcherEntityFromJSON(json: any): FetcherEntity {
    return FetcherEntityFromJSONTyped(json, false);
}

export function FetcherEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetcherEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function FetcherEntityToJSON(value?: FetcherEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'version': value.version,
    };
}


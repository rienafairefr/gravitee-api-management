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
import type { ApiListItem } from './ApiListItem';
import {
    ApiListItemFromJSON,
    ApiListItemFromJSONTyped,
    ApiListItemToJSON,
} from './ApiListItem';
import type { Page } from './Page';
import {
    PageFromJSON,
    PageFromJSONTyped,
    PageToJSON,
} from './Page';

/**
 * 
 * @export
 * @interface PagedResultApiListItem
 */
export interface PagedResultApiListItem {
    /**
     * 
     * @type {Array<ApiListItem>}
     * @memberof PagedResultApiListItem
     */
    data?: Array<ApiListItem>;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof PagedResultApiListItem
     */
    metadata?: { [key: string]: { [key: string]: any; }; };
    /**
     * 
     * @type {Page}
     * @memberof PagedResultApiListItem
     */
    page?: Page;
}

/**
 * Check if a given object implements the PagedResultApiListItem interface.
 */
export function instanceOfPagedResultApiListItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PagedResultApiListItemFromJSON(json: any): PagedResultApiListItem {
    return PagedResultApiListItemFromJSONTyped(json, false);
}

export function PagedResultApiListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedResultApiListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ApiListItemFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'page': !exists(json, 'page') ? undefined : PageFromJSON(json['page']),
    };
}

export function PagedResultApiListItemToJSON(value?: PagedResultApiListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ApiListItemToJSON)),
        'metadata': value.metadata,
        'page': PageToJSON(value.page),
    };
}


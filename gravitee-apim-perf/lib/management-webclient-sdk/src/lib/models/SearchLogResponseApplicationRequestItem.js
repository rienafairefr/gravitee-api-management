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
import { exists } from '../runtime';
import { ApplicationRequestItemFromJSON, ApplicationRequestItemToJSON, } from './';
export function SearchLogResponseApplicationRequestItemFromJSON(json) {
    return SearchLogResponseApplicationRequestItemFromJSONTyped(json, false);
}
export function SearchLogResponseApplicationRequestItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'logs': !exists(json, 'logs') ? undefined : (json['logs'].map(ApplicationRequestItemFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}
export function SearchLogResponseApplicationRequestItemToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'logs': value.logs === undefined ? undefined : (value.logs.map(ApplicationRequestItemToJSON)),
        'metadata': value.metadata,
        'total': value.total,
    };
}
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
import type { MetadataFormat } from './MetadataFormat';
import {
    MetadataFormatFromJSON,
    MetadataFormatFromJSONTyped,
    MetadataFormatToJSON,
} from './MetadataFormat';

/**
 * 
 * @export
 * @interface ApplicationMetadataEntity
 */
export interface ApplicationMetadataEntity {
    /**
     * 
     * @type {string}
     * @memberof ApplicationMetadataEntity
     */
    applicationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationMetadataEntity
     */
    defaultValue?: string;
    /**
     * 
     * @type {MetadataFormat}
     * @memberof ApplicationMetadataEntity
     */
    format?: MetadataFormat;
    /**
     * 
     * @type {string}
     * @memberof ApplicationMetadataEntity
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationMetadataEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationMetadataEntity
     */
    value: string;
}

/**
 * Check if a given object implements the ApplicationMetadataEntity interface.
 */
export function instanceOfApplicationMetadataEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ApplicationMetadataEntityFromJSON(json: any): ApplicationMetadataEntity {
    return ApplicationMetadataEntityFromJSONTyped(json, false);
}

export function ApplicationMetadataEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationMetadataEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'format': !exists(json, 'format') ? undefined : MetadataFormatFromJSON(json['format']),
        'key': json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': json['value'],
    };
}

export function ApplicationMetadataEntityToJSON(value?: ApplicationMetadataEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationId': value.applicationId,
        'defaultValue': value.defaultValue,
        'format': MetadataFormatToJSON(value.format),
        'key': value.key,
        'name': value.name,
        'value': value.value,
    };
}


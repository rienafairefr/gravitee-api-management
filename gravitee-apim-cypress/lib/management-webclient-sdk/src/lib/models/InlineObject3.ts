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
import {
    FormDataBodyPart,
    FormDataBodyPartFromJSON,
    FormDataBodyPartFromJSONTyped,
    FormDataBodyPartToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * 
     * @type {FormDataBodyPart}
     * @memberof InlineObject3
     */
    file?: FormDataBodyPart;
    /**
     * 
     * @type {string}
     * @memberof InlineObject3
     */
    fileName?: string;
}

export function InlineObject3FromJSON(json: any): InlineObject3 {
    return InlineObject3FromJSONTyped(json, false);
}

export function InlineObject3FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': !exists(json, 'file') ? undefined : FormDataBodyPartFromJSON(json['file']),
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
    };
}

export function InlineObject3ToJSON(value?: InlineObject3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': FormDataBodyPartToJSON(value.file),
        'fileName': value.fileName,
    };
}


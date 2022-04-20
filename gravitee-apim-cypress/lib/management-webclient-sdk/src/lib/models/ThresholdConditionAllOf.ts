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
/**
 * 
 * @export
 * @interface ThresholdConditionAllOf
 */
export interface ThresholdConditionAllOf {
    /**
     * 
     * @type {string}
     * @memberof ThresholdConditionAllOf
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdConditionAllOf
     */
    operator?: ThresholdConditionAllOfOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof ThresholdConditionAllOf
     */
    threshold?: number;
}

export function ThresholdConditionAllOfFromJSON(json: any): ThresholdConditionAllOf {
    return ThresholdConditionAllOfFromJSONTyped(json, false);
}

export function ThresholdConditionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThresholdConditionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'threshold': !exists(json, 'threshold') ? undefined : json['threshold'],
    };
}

export function ThresholdConditionAllOfToJSON(value?: ThresholdConditionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property': value.property,
        'operator': value.operator,
        'threshold': value.threshold,
    };
}

/**
* @export
* @enum {string}
*/
export enum ThresholdConditionAllOfOperatorEnum {
    LT = 'LT',
    LTE = 'LTE',
    GTE = 'GTE',
    GT = 'GT'
}


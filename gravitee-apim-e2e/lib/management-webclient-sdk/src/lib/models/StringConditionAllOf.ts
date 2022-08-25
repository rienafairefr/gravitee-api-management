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
 * @interface StringConditionAllOf
 */
export interface StringConditionAllOf {
    /**
     * 
     * @type {string}
     * @memberof StringConditionAllOf
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof StringConditionAllOf
     */
    operator?: StringConditionAllOfOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof StringConditionAllOf
     */
    pattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StringConditionAllOf
     */
    ignoreCase?: boolean;
}


/**
 * @export
 */
export const StringConditionAllOfOperatorEnum = {
    EQUALS: 'EQUALS',
    NOT_EQUALS: 'NOT_EQUALS',
    STARTS_WITH: 'STARTS_WITH',
    ENDS_WITH: 'ENDS_WITH',
    CONTAINS: 'CONTAINS',
    MATCHES: 'MATCHES'
} as const;
export type StringConditionAllOfOperatorEnum = typeof StringConditionAllOfOperatorEnum[keyof typeof StringConditionAllOfOperatorEnum];


/**
 * Check if a given object implements the StringConditionAllOf interface.
 */
export function instanceOfStringConditionAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StringConditionAllOfFromJSON(json: any): StringConditionAllOf {
    return StringConditionAllOfFromJSONTyped(json, false);
}

export function StringConditionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): StringConditionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'ignoreCase': !exists(json, 'ignoreCase') ? undefined : json['ignoreCase'],
    };
}

export function StringConditionAllOfToJSON(value?: StringConditionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property': value.property,
        'operator': value.operator,
        'pattern': value.pattern,
        'ignoreCase': value.ignoreCase,
    };
}


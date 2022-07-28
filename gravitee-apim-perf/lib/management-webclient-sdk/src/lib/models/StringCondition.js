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
import { ConditionFromJSONTyped, ConditionToJSON, } from './';
export function StringConditionFromJSON(json) {
    return StringConditionFromJSONTyped(json, false);
}
export function StringConditionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ConditionFromJSONTyped(json, ignoreDiscriminator),
        'property': json['property'],
        'operator': json['operator'],
        'pattern': json['pattern'],
        'ignoreCase': !exists(json, 'ignoreCase') ? undefined : json['ignoreCase'],
    };
}
export function StringConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...ConditionToJSON(value),
        'property': value.property,
        'operator': value.operator,
        'pattern': value.pattern,
        'ignoreCase': value.ignoreCase,
    };
}
/**
* @export
* @enum {string}
*/
export var StringConditionOperatorEnum;
(function (StringConditionOperatorEnum) {
    StringConditionOperatorEnum["EQUALS"] = "EQUALS";
    StringConditionOperatorEnum["NOTEQUALS"] = "NOT_EQUALS";
    StringConditionOperatorEnum["STARTSWITH"] = "STARTS_WITH";
    StringConditionOperatorEnum["ENDSWITH"] = "ENDS_WITH";
    StringConditionOperatorEnum["CONTAINS"] = "CONTAINS";
    StringConditionOperatorEnum["MATCHES"] = "MATCHES";
})(StringConditionOperatorEnum || (StringConditionOperatorEnum = {}));
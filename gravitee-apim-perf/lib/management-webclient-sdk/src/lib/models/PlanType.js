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
/**
 *
 * @export
 * @enum {string}
 */
export var PlanType;
(function (PlanType) {
    PlanType["API"] = "API";
    PlanType["CATALOG"] = "CATALOG";
})(PlanType || (PlanType = {}));
export function PlanTypeFromJSON(json) {
    return PlanTypeFromJSONTyped(json, false);
}
export function PlanTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function PlanTypeToJSON(value) {
    return value;
}
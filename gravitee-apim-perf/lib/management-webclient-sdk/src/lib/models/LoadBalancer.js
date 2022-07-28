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
export function LoadBalancerFromJSON(json) {
    return LoadBalancerFromJSONTyped(json, false);
}
export function LoadBalancerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}
export function LoadBalancerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
/**
* @export
* @enum {string}
*/
export var LoadBalancerTypeEnum;
(function (LoadBalancerTypeEnum) {
    LoadBalancerTypeEnum["ROUNDROBIN"] = "ROUND_ROBIN";
    LoadBalancerTypeEnum["RANDOM"] = "RANDOM";
    LoadBalancerTypeEnum["WEIGHTEDROUNDROBIN"] = "WEIGHTED_ROUND_ROBIN";
    LoadBalancerTypeEnum["WEIGHTEDRANDOM"] = "WEIGHTED_RANDOM";
})(LoadBalancerTypeEnum || (LoadBalancerTypeEnum = {}));
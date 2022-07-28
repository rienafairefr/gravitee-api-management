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
import { UserMembershipFromJSON, UserMembershipToJSON, } from './';
export function UserMembershipListFromJSON(json) {
    return UserMembershipListFromJSONTyped(json, false);
}
export function UserMembershipListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'memberships': !exists(json, 'memberships') ? undefined : (json['memberships'].map(UserMembershipFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}
export function UserMembershipListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'memberships': value.memberships === undefined ? undefined : (value.memberships.map(UserMembershipToJSON)),
        'metadata': value.metadata,
    };
}
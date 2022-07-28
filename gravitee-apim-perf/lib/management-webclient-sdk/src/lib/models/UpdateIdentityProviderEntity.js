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
import { GroupMappingEntityFromJSON, GroupMappingEntityToJSON, RoleMappingEntityFromJSON, RoleMappingEntityToJSON, } from './';
export function UpdateIdentityProviderEntityFromJSON(json) {
    return UpdateIdentityProviderEntityFromJSONTyped(json, false);
}
export function UpdateIdentityProviderEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'configuration': json['configuration'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'emailRequired': !exists(json, 'emailRequired') ? undefined : json['emailRequired'],
        'enabled': json['enabled'],
        'groupMappings': !exists(json, 'groupMappings') ? undefined : (json['groupMappings'].map(GroupMappingEntityFromJSON)),
        'name': json['name'],
        'roleMappings': !exists(json, 'roleMappings') ? undefined : (json['roleMappings'].map(RoleMappingEntityFromJSON)),
        'syncMappings': !exists(json, 'syncMappings') ? undefined : json['syncMappings'],
        'userProfileMapping': !exists(json, 'userProfileMapping') ? undefined : json['userProfileMapping'],
    };
}
export function UpdateIdentityProviderEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'configuration': value.configuration,
        'description': value.description,
        'emailRequired': value.emailRequired,
        'enabled': value.enabled,
        'groupMappings': value.groupMappings === undefined ? undefined : (value.groupMappings.map(GroupMappingEntityToJSON)),
        'name': value.name,
        'roleMappings': value.roleMappings === undefined ? undefined : (value.roleMappings.map(RoleMappingEntityToJSON)),
        'syncMappings': value.syncMappings,
        'userProfileMapping': value.userProfileMapping,
    };
}
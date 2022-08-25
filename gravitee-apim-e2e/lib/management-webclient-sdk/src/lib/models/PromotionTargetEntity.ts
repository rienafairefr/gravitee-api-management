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
 * @interface PromotionTargetEntity
 */
export interface PromotionTargetEntity {
    /**
     * 
     * @type {string}
     * @memberof PromotionTargetEntity
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PromotionTargetEntity
     */
    hrids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PromotionTargetEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PromotionTargetEntity
     */
    installationId: string;
    /**
     * 
     * @type {string}
     * @memberof PromotionTargetEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PromotionTargetEntity
     */
    organizationId: string;
}

/**
 * Check if a given object implements the PromotionTargetEntity interface.
 */
export function instanceOfPromotionTargetEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "installationId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "organizationId" in value;

    return isInstance;
}

export function PromotionTargetEntityFromJSON(json: any): PromotionTargetEntity {
    return PromotionTargetEntityFromJSONTyped(json, false);
}

export function PromotionTargetEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionTargetEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hrids': !exists(json, 'hrids') ? undefined : json['hrids'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'installationId': json['installationId'],
        'name': json['name'],
        'organizationId': json['organizationId'],
    };
}

export function PromotionTargetEntityToJSON(value?: PromotionTargetEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hrids': value.hrids,
        'id': value.id,
        'installationId': value.installationId,
        'name': value.name,
        'organizationId': value.organizationId,
    };
}


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
import type { DictionaryProviderEntity } from './DictionaryProviderEntity';
import {
    DictionaryProviderEntityFromJSON,
    DictionaryProviderEntityFromJSONTyped,
    DictionaryProviderEntityToJSON,
} from './DictionaryProviderEntity';
import type { DictionaryTriggerEntity } from './DictionaryTriggerEntity';
import {
    DictionaryTriggerEntityFromJSON,
    DictionaryTriggerEntityFromJSONTyped,
    DictionaryTriggerEntityToJSON,
} from './DictionaryTriggerEntity';
import type { DictionaryType } from './DictionaryType';
import {
    DictionaryTypeFromJSON,
    DictionaryTypeFromJSONTyped,
    DictionaryTypeToJSON,
} from './DictionaryType';

/**
 * 
 * @export
 * @interface DictionaryEntity
 */
export interface DictionaryEntity {
    /**
     * 
     * @type {Date}
     * @memberof DictionaryEntity
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof DictionaryEntity
     */
    deployed_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof DictionaryEntity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof DictionaryEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DictionaryEntity
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DictionaryEntity
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {DictionaryProviderEntity}
     * @memberof DictionaryEntity
     */
    provider?: DictionaryProviderEntity;
    /**
     * 
     * @type {string}
     * @memberof DictionaryEntity
     */
    state?: DictionaryEntityStateEnum;
    /**
     * 
     * @type {DictionaryTriggerEntity}
     * @memberof DictionaryEntity
     */
    trigger?: DictionaryTriggerEntity;
    /**
     * 
     * @type {DictionaryType}
     * @memberof DictionaryEntity
     */
    type?: DictionaryType;
    /**
     * 
     * @type {Date}
     * @memberof DictionaryEntity
     */
    updated_at?: Date;
}


/**
 * @export
 */
export const DictionaryEntityStateEnum = {
    INITIALIZED: 'INITIALIZED',
    STOPPED: 'STOPPED',
    STOPPING: 'STOPPING',
    STARTED: 'STARTED',
    CLOSED: 'CLOSED'
} as const;
export type DictionaryEntityStateEnum = typeof DictionaryEntityStateEnum[keyof typeof DictionaryEntityStateEnum];


/**
 * Check if a given object implements the DictionaryEntity interface.
 */
export function instanceOfDictionaryEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DictionaryEntityFromJSON(json: any): DictionaryEntity {
    return DictionaryEntityFromJSONTyped(json, false);
}

export function DictionaryEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DictionaryEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'deployed_at': !exists(json, 'deployed_at') ? undefined : (new Date(json['deployed_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'provider': !exists(json, 'provider') ? undefined : DictionaryProviderEntityFromJSON(json['provider']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'trigger': !exists(json, 'trigger') ? undefined : DictionaryTriggerEntityFromJSON(json['trigger']),
        'type': !exists(json, 'type') ? undefined : DictionaryTypeFromJSON(json['type']),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function DictionaryEntityToJSON(value?: DictionaryEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'deployed_at': value.deployed_at === undefined ? undefined : (value.deployed_at.toISOString()),
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'properties': value.properties,
        'provider': DictionaryProviderEntityToJSON(value.provider),
        'state': value.state,
        'trigger': DictionaryTriggerEntityToJSON(value.trigger),
        'type': DictionaryTypeToJSON(value.type),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


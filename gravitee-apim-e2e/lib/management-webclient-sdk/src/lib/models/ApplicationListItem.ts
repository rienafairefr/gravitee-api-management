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
import type { ApiKeyMode } from './ApiKeyMode';
import {
    ApiKeyModeFromJSON,
    ApiKeyModeFromJSONTyped,
    ApiKeyModeToJSON,
} from './ApiKeyMode';
import type { ApplicationSettings } from './ApplicationSettings';
import {
    ApplicationSettingsFromJSON,
    ApplicationSettingsFromJSONTyped,
    ApplicationSettingsToJSON,
} from './ApplicationSettings';
import type { PrimaryOwnerEntity } from './PrimaryOwnerEntity';
import {
    PrimaryOwnerEntityFromJSON,
    PrimaryOwnerEntityFromJSONTyped,
    PrimaryOwnerEntityToJSON,
} from './PrimaryOwnerEntity';

/**
 * 
 * @export
 * @interface ApplicationListItem
 */
export interface ApplicationListItem {
    /**
     * 
     * @type {ApiKeyMode}
     * @memberof ApplicationListItem
     */
    api_key_mode?: ApiKeyMode;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListItem
     */
    background?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListItem
     */
    background_url?: string;
    /**
     * The date (as a timestamp) when the application was created.
     * @type {Date}
     * @memberof ApplicationListItem
     */
    created_at?: Date;
    /**
     * Application's description. A short description of your App.
     * @type {string}
     * @memberof ApplicationListItem
     */
    description?: string;
    /**
     * Domain used by the application, if relevant
     * @type {string}
     * @memberof ApplicationListItem
     */
    domain?: string;
    /**
     * Application groups. Used to add teams to your application.
     * @type {Array<string>}
     * @memberof ApplicationListItem
     */
    groups?: Array<string>;
    /**
     * Application's uuid.
     * @type {string}
     * @memberof ApplicationListItem
     */
    id?: string;
    /**
     * Application's name. Duplicate names can exists.
     * @type {string}
     * @memberof ApplicationListItem
     */
    name?: string;
    /**
     * 
     * @type {PrimaryOwnerEntity}
     * @memberof ApplicationListItem
     */
    owner?: PrimaryOwnerEntity;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListItem
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationListItem
     */
    picture_url?: string;
    /**
     * 
     * @type {ApplicationSettings}
     * @memberof ApplicationListItem
     */
    settings?: ApplicationSettings;
    /**
     * if the app is ACTIVE or ARCHIVED.
     * @type {string}
     * @memberof ApplicationListItem
     */
    status?: string;
    /**
     * a string to describe the type of your app.
     * @type {string}
     * @memberof ApplicationListItem
     */
    type?: string;
    /**
     * The last date (as a timestamp) when the application was updated.
     * @type {Date}
     * @memberof ApplicationListItem
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the ApplicationListItem interface.
 */
export function instanceOfApplicationListItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationListItemFromJSON(json: any): ApplicationListItem {
    return ApplicationListItemFromJSONTyped(json, false);
}

export function ApplicationListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_key_mode': !exists(json, 'api_key_mode') ? undefined : ApiKeyModeFromJSON(json['api_key_mode']),
        'background': !exists(json, 'background') ? undefined : json['background'],
        'background_url': !exists(json, 'background_url') ? undefined : json['background_url'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : PrimaryOwnerEntityFromJSON(json['owner']),
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'picture_url': !exists(json, 'picture_url') ? undefined : json['picture_url'],
        'settings': !exists(json, 'settings') ? undefined : ApplicationSettingsFromJSON(json['settings']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ApplicationListItemToJSON(value?: ApplicationListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_key_mode': ApiKeyModeToJSON(value.api_key_mode),
        'background': value.background,
        'background_url': value.background_url,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'description': value.description,
        'domain': value.domain,
        'groups': value.groups,
        'id': value.id,
        'name': value.name,
        'owner': PrimaryOwnerEntityToJSON(value.owner),
        'picture': value.picture,
        'picture_url': value.picture_url,
        'settings': ApplicationSettingsToJSON(value.settings),
        'status': value.status,
        'type': value.type,
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


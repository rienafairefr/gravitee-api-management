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
import type { AlertEventRuleEntity } from './AlertEventRuleEntity';
import {
    AlertEventRuleEntityFromJSON,
    AlertEventRuleEntityFromJSONTyped,
    AlertEventRuleEntityToJSON,
} from './AlertEventRuleEntity';
import type { AlertReferenceType } from './AlertReferenceType';
import {
    AlertReferenceTypeFromJSON,
    AlertReferenceTypeFromJSONTyped,
    AlertReferenceTypeToJSON,
} from './AlertReferenceType';
import type { Condition } from './Condition';
import {
    ConditionFromJSON,
    ConditionFromJSONTyped,
    ConditionToJSON,
} from './Condition';
import type { Dampening } from './Dampening';
import {
    DampeningFromJSON,
    DampeningFromJSONTyped,
    DampeningToJSON,
} from './Dampening';
import type { Filter } from './Filter';
import {
    FilterFromJSON,
    FilterFromJSONTyped,
    FilterToJSON,
} from './Filter';
import type { Notification } from './Notification';
import {
    NotificationFromJSON,
    NotificationFromJSONTyped,
    NotificationToJSON,
} from './Notification';
import type { Period } from './Period';
import {
    PeriodFromJSON,
    PeriodFromJSONTyped,
    PeriodToJSON,
} from './Period';

/**
 * 
 * @export
 * @interface UpdateAlertTriggerEntity
 */
export interface UpdateAlertTriggerEntity {
    /**
     * 
     * @type {Array<Condition>}
     * @memberof UpdateAlertTriggerEntity
     */
    conditions?: Array<Condition>;
    /**
     * 
     * @type {Dampening}
     * @memberof UpdateAlertTriggerEntity
     */
    dampening?: Dampening;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertTriggerEntity
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAlertTriggerEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {Array<AlertEventRuleEntity>}
     * @memberof UpdateAlertTriggerEntity
     */
    event_rules?: Array<AlertEventRuleEntity>;
    /**
     * 
     * @type {Array<Filter>}
     * @memberof UpdateAlertTriggerEntity
     */
    filters?: Array<Filter>;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertTriggerEntity
     */
    id?: string;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof UpdateAlertTriggerEntity
     */
    metadata?: { [key: string]: { [key: string]: string; }; };
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertTriggerEntity
     */
    name: string;
    /**
     * 
     * @type {Array<Period>}
     * @memberof UpdateAlertTriggerEntity
     */
    notificationPeriods?: Array<Period>;
    /**
     * 
     * @type {Array<Notification>}
     * @memberof UpdateAlertTriggerEntity
     */
    notifications?: Array<Notification>;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertTriggerEntity
     */
    reference_id?: string;
    /**
     * 
     * @type {AlertReferenceType}
     * @memberof UpdateAlertTriggerEntity
     */
    reference_type?: AlertReferenceType;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertTriggerEntity
     */
    severity: UpdateAlertTriggerEntitySeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateAlertTriggerEntity
     */
    source?: string;
}


/**
 * @export
 */
export const UpdateAlertTriggerEntitySeverityEnum = {
    INFO: 'INFO',
    WARNING: 'WARNING',
    CRITICAL: 'CRITICAL'
} as const;
export type UpdateAlertTriggerEntitySeverityEnum = typeof UpdateAlertTriggerEntitySeverityEnum[keyof typeof UpdateAlertTriggerEntitySeverityEnum];


/**
 * Check if a given object implements the UpdateAlertTriggerEntity interface.
 */
export function instanceOfUpdateAlertTriggerEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "severity" in value;

    return isInstance;
}

export function UpdateAlertTriggerEntityFromJSON(json: any): UpdateAlertTriggerEntity {
    return UpdateAlertTriggerEntityFromJSONTyped(json, false);
}

export function UpdateAlertTriggerEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAlertTriggerEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(ConditionFromJSON)),
        'dampening': !exists(json, 'dampening') ? undefined : DampeningFromJSON(json['dampening']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'event_rules': !exists(json, 'event_rules') ? undefined : ((json['event_rules'] as Array<any>).map(AlertEventRuleEntityFromJSON)),
        'filters': !exists(json, 'filters') ? undefined : ((json['filters'] as Array<any>).map(FilterFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'notificationPeriods': !exists(json, 'notificationPeriods') ? undefined : ((json['notificationPeriods'] as Array<any>).map(PeriodFromJSON)),
        'notifications': !exists(json, 'notifications') ? undefined : ((json['notifications'] as Array<any>).map(NotificationFromJSON)),
        'reference_id': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'reference_type': !exists(json, 'reference_type') ? undefined : AlertReferenceTypeFromJSON(json['reference_type']),
        'severity': json['severity'],
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function UpdateAlertTriggerEntityToJSON(value?: UpdateAlertTriggerEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(ConditionToJSON)),
        'dampening': DampeningToJSON(value.dampening),
        'description': value.description,
        'enabled': value.enabled,
        'event_rules': value.event_rules === undefined ? undefined : ((value.event_rules as Array<any>).map(AlertEventRuleEntityToJSON)),
        'filters': value.filters === undefined ? undefined : ((value.filters as Array<any>).map(FilterToJSON)),
        'id': value.id,
        'metadata': value.metadata,
        'name': value.name,
        'notificationPeriods': value.notificationPeriods === undefined ? undefined : ((value.notificationPeriods as Array<any>).map(PeriodToJSON)),
        'notifications': value.notifications === undefined ? undefined : ((value.notifications as Array<any>).map(NotificationToJSON)),
        'reference_id': value.reference_id,
        'reference_type': AlertReferenceTypeToJSON(value.reference_type),
        'severity': value.severity,
        'source': value.source,
    };
}


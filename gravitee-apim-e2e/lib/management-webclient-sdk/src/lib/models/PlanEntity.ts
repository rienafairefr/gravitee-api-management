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
import type { Flow } from './Flow';
import {
    FlowFromJSON,
    FlowFromJSONTyped,
    FlowToJSON,
} from './Flow';
import type { PlanSecurityType } from './PlanSecurityType';
import {
    PlanSecurityTypeFromJSON,
    PlanSecurityTypeFromJSONTyped,
    PlanSecurityTypeToJSON,
} from './PlanSecurityType';
import type { PlanStatus } from './PlanStatus';
import {
    PlanStatusFromJSON,
    PlanStatusFromJSONTyped,
    PlanStatusToJSON,
} from './PlanStatus';
import type { PlanType } from './PlanType';
import {
    PlanTypeFromJSON,
    PlanTypeFromJSONTyped,
    PlanTypeToJSON,
} from './PlanType';
import type { PlanValidationType } from './PlanValidationType';
import {
    PlanValidationTypeFromJSON,
    PlanValidationTypeFromJSONTyped,
    PlanValidationTypeToJSON,
} from './PlanValidationType';
import type { Rule } from './Rule';
import {
    RuleFromJSON,
    RuleFromJSONTyped,
    RuleToJSON,
} from './Rule';

/**
 * a list of plans with flows (the policies configuration)
 * @export
 * @interface PlanEntity
 */
export interface PlanEntity {
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    api?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlanEntity
     */
    characteristics?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntity
     */
    closed_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    comment_message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlanEntity
     */
    comment_required?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntity
     */
    created_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    crossId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlanEntity
     */
    excluded_groups?: Array<string>;
    /**
     * 
     * @type {Array<Flow>}
     * @memberof PlanEntity
     */
    flows: Array<Flow>;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    general_conditions?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PlanEntity
     */
    order?: number;
    /**
     * 
     * @type {{ [key: string]: Array<Rule>; }}
     * @memberof PlanEntity
     */
    paths: { [key: string]: Array<Rule>; };
    /**
     * 
     * @type {Date}
     * @memberof PlanEntity
     */
    published_at?: Date;
    /**
     * 
     * @type {PlanSecurityType}
     * @memberof PlanEntity
     */
    security: PlanSecurityType;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    securityDefinition?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntity
     */
    selection_rule?: string;
    /**
     * 
     * @type {PlanStatus}
     * @memberof PlanEntity
     */
    status: PlanStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlanEntity
     */
    tags?: Array<string>;
    /**
     * 
     * @type {PlanType}
     * @memberof PlanEntity
     */
    type: PlanType;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntity
     */
    updated_at?: Date;
    /**
     * 
     * @type {PlanValidationType}
     * @memberof PlanEntity
     */
    validation: PlanValidationType;
}

/**
 * Check if a given object implements the PlanEntity interface.
 */
export function instanceOfPlanEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "flows" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "paths" in value;
    isInstance = isInstance && "security" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "validation" in value;

    return isInstance;
}

export function PlanEntityFromJSON(json: any): PlanEntity {
    return PlanEntityFromJSONTyped(json, false);
}

export function PlanEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api': !exists(json, 'api') ? undefined : json['api'],
        'characteristics': !exists(json, 'characteristics') ? undefined : json['characteristics'],
        'closed_at': !exists(json, 'closed_at') ? undefined : (new Date(json['closed_at'])),
        'comment_message': !exists(json, 'comment_message') ? undefined : json['comment_message'],
        'comment_required': !exists(json, 'comment_required') ? undefined : json['comment_required'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'crossId': !exists(json, 'crossId') ? undefined : json['crossId'],
        'description': json['description'],
        'excluded_groups': !exists(json, 'excluded_groups') ? undefined : json['excluded_groups'],
        'flows': ((json['flows'] as Array<any>).map(FlowFromJSON)),
        'general_conditions': !exists(json, 'general_conditions') ? undefined : json['general_conditions'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'paths': json['paths'],
        'published_at': !exists(json, 'published_at') ? undefined : (new Date(json['published_at'])),
        'security': PlanSecurityTypeFromJSON(json['security']),
        'securityDefinition': !exists(json, 'securityDefinition') ? undefined : json['securityDefinition'],
        'selection_rule': !exists(json, 'selection_rule') ? undefined : json['selection_rule'],
        'status': PlanStatusFromJSON(json['status']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'type': PlanTypeFromJSON(json['type']),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'validation': PlanValidationTypeFromJSON(json['validation']),
    };
}

export function PlanEntityToJSON(value?: PlanEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api': value.api,
        'characteristics': value.characteristics,
        'closed_at': value.closed_at === undefined ? undefined : (value.closed_at.toISOString()),
        'comment_message': value.comment_message,
        'comment_required': value.comment_required,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'crossId': value.crossId,
        'description': value.description,
        'excluded_groups': value.excluded_groups,
        'flows': ((value.flows as Array<any>).map(FlowToJSON)),
        'general_conditions': value.general_conditions,
        'id': value.id,
        'name': value.name,
        'order': value.order,
        'paths': value.paths,
        'published_at': value.published_at === undefined ? undefined : (value.published_at.toISOString()),
        'security': PlanSecurityTypeToJSON(value.security),
        'securityDefinition': value.securityDefinition,
        'selection_rule': value.selection_rule,
        'status': PlanStatusToJSON(value.status),
        'tags': value.tags,
        'type': PlanTypeToJSON(value.type),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'validation': PlanValidationTypeToJSON(value.validation),
    };
}


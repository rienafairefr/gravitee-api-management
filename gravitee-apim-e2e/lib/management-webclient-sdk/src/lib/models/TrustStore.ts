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
import {
     JKSTrustStoreFromJSONTyped,
     PEMTrustStoreFromJSONTyped,
     PKCS12TrustStoreFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface TrustStore
 */
export interface TrustStore {
    /**
     * 
     * @type {string}
     * @memberof TrustStore
     */
    type?: TrustStoreTypeEnum;
}


/**
 * @export
 */
export const TrustStoreTypeEnum = {
    PEM: 'PEM',
    PKCS12: 'PKCS12',
    JKS: 'JKS',
    NONE: 'None'
} as const;
export type TrustStoreTypeEnum = typeof TrustStoreTypeEnum[keyof typeof TrustStoreTypeEnum];


/**
 * Check if a given object implements the TrustStore interface.
 */
export function instanceOfTrustStore(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrustStoreFromJSON(json: any): TrustStore {
    return TrustStoreFromJSONTyped(json, false);
}

export function TrustStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrustStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['type'] === 'JKS') {
            return JKSTrustStoreFromJSONTyped(json, true);
        }
        if (json['type'] === 'PEM') {
            return PEMTrustStoreFromJSONTyped(json, true);
        }
        if (json['type'] === 'PKCS12') {
            return PKCS12TrustStoreFromJSONTyped(json, true);
        }
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function TrustStoreToJSON(value?: TrustStore | null): any {
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


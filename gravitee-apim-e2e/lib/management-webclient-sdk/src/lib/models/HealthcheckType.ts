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
 */
export const HealthcheckType = {
    AVAILABILITY: 'AVAILABILITY',
    RESPONSE_TIME: 'RESPONSE_TIME'
} as const;
export type HealthcheckType = typeof HealthcheckType[keyof typeof HealthcheckType];


export function HealthcheckTypeFromJSON(json: any): HealthcheckType {
    return HealthcheckTypeFromJSONTyped(json, false);
}

export function HealthcheckTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthcheckType {
    return json as HealthcheckType;
}

export function HealthcheckTypeToJSON(value?: HealthcheckType | null): any {
    return value as any;
}


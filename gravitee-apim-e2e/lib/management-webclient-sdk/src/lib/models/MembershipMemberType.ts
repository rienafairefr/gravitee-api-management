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
 * Type's name
 * @export
 */
export const MembershipMemberType = {
    USER: 'USER',
    GROUP: 'GROUP'
} as const;
export type MembershipMemberType = typeof MembershipMemberType[keyof typeof MembershipMemberType];


export function MembershipMemberTypeFromJSON(json: any): MembershipMemberType {
    return MembershipMemberTypeFromJSONTyped(json, false);
}

export function MembershipMemberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipMemberType {
    return json as MembershipMemberType;
}

export function MembershipMemberTypeToJSON(value?: MembershipMemberType | null): any {
    return value as any;
}


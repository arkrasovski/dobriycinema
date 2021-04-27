/* tslint:disable */
/* eslint-disable */
/**
 * Music service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface Film
 */
export interface Film {
    /**
     * 
     * @type {string}
     * @memberof Film
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Film
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof Film
     */
    date: string;
}

export function FilmFromJSON(json: any): Film {
    return FilmFromJSONTyped(json, false);
}

export function FilmFromJSONTyped(json: any, ignoreDiscriminator: boolean): Film {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'image': json['image'],
        'date': json['date'],
    };
}

export function FilmToJSON(value?: Film | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'image': value.image,
        'date': value.date,
    };
}


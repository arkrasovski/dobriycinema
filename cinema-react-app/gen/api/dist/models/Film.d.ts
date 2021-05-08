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
    /**
     *
     * @type {string}
     * @memberof Film
     */
    genre: string;
    /**
     *
     * @type {string}
     * @memberof Film
     */
    plot: string;
    /**
     *
     * @type {string}
     * @memberof Film
     */
    country: string;
    /**
     *
     * @type {string}
     * @memberof Film
     */
    rating?: string;
}
export declare function FilmFromJSON(json: any): Film;
export declare function FilmFromJSONTyped(json: any, ignoreDiscriminator: boolean): Film;
export declare function FilmToJSON(value?: Film | null): any;

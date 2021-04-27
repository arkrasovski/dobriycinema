/* tslint:disable */
/* eslint-disable */
/**
 * Film weekly service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    FilmEvent,
    FilmEventFromJSON,
    FilmEventToJSON,
} from '../models';

export interface WeeklyeventsRequest {
    date?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns list of cinemas films
     */
    async weeklyeventsRaw(requestParameters: WeeklyeventsRequest): Promise<runtime.ApiResponse<Array<FilmEvent>>> {
        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/weekly`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FilmEventFromJSON));
    }

    /**
     * Returns list of cinemas films
     */
    async weeklyevents(requestParameters: WeeklyeventsRequest): Promise<Array<FilmEvent>> {
        const response = await this.weeklyeventsRaw(requestParameters);
        return await response.value();
    }

}

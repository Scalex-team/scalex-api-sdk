/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, Method } from 'axios';
import { ApiResponse, Endpoint, ScalexError } from '../types';
import { notifyClientOfSuccess, notifyClientOfFailure } from './send-api-response';
export const ScalexAuthHeaderName = 'scalexadminauthorization';
export const ScalexAuthBearerName = 'ScalexAdminBearer';
export const AuthorizationHeaderName = 'Authorization';

export async function makeHttpRequest ( 
	{
		method, url, body, headers, query, params
	}: 
	{
		method: Method,
		url: string,
		body?: unknown,
		headers?: any,
		params?: Array<string>,
		query?: any
	} ): Promise<AxiosResponse> {
	const aggregatedHeaders: any = {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Headers': 'content-type',
		'Access-Control-Allow-Methods': 'GET,HEAD,PUT,POST,DELETE,PATCH',
	};
	if ( headers ) {
		if ( headers[ScalexAuthHeaderName] ) {
			aggregatedHeaders[ScalexAuthHeaderName] = headers[ScalexAuthHeaderName];
		}
		if ( headers[AuthorizationHeaderName] ) {
			aggregatedHeaders[AuthorizationHeaderName] = headers[AuthorizationHeaderName];
		}
	}

	if ( params ) {
		params.forEach( p => {
			url += `/${p}`;
		} );
	}
	return axios( {
		method,
		url,
		data: body,
		headers: aggregatedHeaders,
		params: query
	} );
}

export async function callApi<Input, Output>( requestParams: {
	serviceUri: string,
	endpoint: Endpoint,
    headers?: unknown,
    body?: Input,
	params?: Array<string>,
    query?: unknown,
} ): Promise<ApiResponse<Output>> {
	try {
		const response = await makeHttpRequest( {
			method: requestParams.endpoint.method,
			body: requestParams.body,
			query: requestParams.query,
			headers: requestParams.headers,
			params: requestParams.params,
			url: `${requestParams.serviceUri}${requestParams.endpoint.fullPath}`
		} );
		return notifyClientOfSuccess<Output>( response.data );
	} catch ( e: unknown ) {
		throw notifyClientOfFailure( {
			error: e as ScalexError,
		} );
	}
}

export function setBearerToken( token: string ) {
	return {
		Authorization: `Bearer ${token}`
	};
}
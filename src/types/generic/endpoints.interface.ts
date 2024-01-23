export enum HttpMethods {
	Post = 'POST',
	Put = 'PUT',
	Get = 'GET',
	Patch = 'PATCH',
	Delete = 'DELETE'
}

export interface Endpoint {
	path: string;
	method: HttpMethods;
	fullPath: string;
}

export type Endpoints<T extends Array<string>> = {
	[k in keyof T]: Endpoint;
}
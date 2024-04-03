import {IAddress, IBusiness, Endpoint, HttpMethods, IUser} from "../../generic";

export interface IUpdateProfilePayload {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}

export interface ICreateBusinessPayload extends IBusiness {}

export interface IUpdateAddressPayload extends IAddress {}

export interface IUpdateAddressResponse {
    customer: Partial<IUser>
}

export interface ICreateBusinessResponse {
    customer: Partial<IUser>
}
export interface IUpdateProfileResponse {
    customer: Partial<IUser>
}

export const UpdateProfileEndpoint: Endpoint = {
	method: HttpMethods.Patch,
	path: '/customer-profile',
	fullPath: '/customer-profile'
};

export const CreateBusinessEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/businesses',
	fullPath: '/businesses'
};

export const UpdateAddressEndpoint: Endpoint = {
	method: HttpMethods.Patch,
	path: '/customer-address',
	fullPath: '/customer-address'
};

export const RetrieveProfileEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '/customer-profile',
	fullPath: '/customer-profile'
};
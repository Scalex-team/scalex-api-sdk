import {Endpoint, HttpMethods, IUser} from "../../generic";

export interface IUpdateProfilePayload {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}

export interface IUpdateProfileResponse {
    customer: Partial<IUser>
}

export const UpdateProfileEndpoint: Endpoint = {
    method: HttpMethods.Patch,
    path: 'customer-profile',
    fullPath: 'customer-profile'
}

export const RetrieveProfileEndpoint: Endpoint = {
    method: HttpMethods.Get,
    path: 'customer-profile',
    fullPath: 'customer-profile'
}
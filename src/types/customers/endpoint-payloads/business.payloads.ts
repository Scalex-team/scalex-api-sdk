import {BusinessRegistrationType, IBusinessDirector, IBusinessProfile} from "../models";
import {IUpdateAddressPayload} from "./profile.payloads";
import {Endpoint, HttpMethods} from "../../generic";

export interface IBusinessDirectorDetails {
    country: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: string;
}

export interface ICreateBusinessPayload {
    registration: {
        type: BusinessRegistrationType;
        number: string;
        date: Date;
        country: string;
        name: string;
    }
    agreedToKyc: boolean;
}

export interface ICreateBusinessDirectorPayload {
    creatorIsADirector: boolean;
    directorDetails?: IBusinessDirectorDetails;
}

export interface ICreateBusinessAddressPayload extends IUpdateAddressPayload {};

export interface IBusinessResponse {
    business: IBusinessProfile;
}

export interface IBusinessDirectorResponse {
    director: IBusinessDirector;
}

export const CreateBusinessEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/businesses',
	fullPath: '/businesses'
};

export const CreateBusinessDirectorEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/directors',
	fullPath: '/businesses/directors'
};

export const CreateBusinessAddressEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/addresses',
	fullPath: '/businesses/addresses'
};

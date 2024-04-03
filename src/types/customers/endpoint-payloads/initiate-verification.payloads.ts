import {VerifiableEntity} from "../models";
import {Endpoint, HttpMethods} from "../../generic";

export interface IInitiateVerificationPayload {
    entity: VerifiableEntity;
}

export interface IInitiateVerificationResponse {
    link: string;
}

export const InitiateVerificationEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/customer-verification',
	fullPath: '/customer-verification'
};

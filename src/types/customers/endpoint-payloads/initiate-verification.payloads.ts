import {VerifiableEntity, VerificationApplicantType} from "../models";
import {Endpoint, HttpMethods} from "../../generic";

export interface IInitiateVerificationPayload {
    entity: VerifiableEntity;
	applicant: VerificationApplicantType;
	applicantId?: string;
}

export interface IInitiateVerificationResponse {
    link: string;
}

export const InitiateVerificationEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/customer-verification',
	fullPath: '/customer-verification'
};

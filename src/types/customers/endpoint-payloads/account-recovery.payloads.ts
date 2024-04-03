import { Endpoint, HttpMethods } from "../../generic";

export interface IRequestPasswordResetPayload {
    email: string
}

export interface IRequestPasswordResetResponse {
    token: string;
}

export const RequestPasswordResetEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '',
	fullPath: '/customers-account-recovery'
};

export interface IResetPasswordPayload {
    otp: string;
    password: string;
    confirmPassword: string;
}

export const ResetPasswordEndpoint: Endpoint = {
	method: HttpMethods.Patch,
	path: '',
	fullPath: '/customers-account-recovery'
};

import { Endpoint, HttpMethods } from "../../generic";

export interface IRequestOtpToRegisterPayload {
    email: string
}

export interface IRequestOtpToRegisterResponse {
    token: string;
}

export const RequestOtpToRegisterEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/otps',
	fullPath: '/customers-auth/otps'
};

export interface IVerifyOtpAndCreatePasswordPayload {
    otp: string;
    password: string;
    agreedToTerms: boolean;
}

export interface IVerifyOtpAndCreatePasswordResponse {
    token: string;
}

export const VerifyOtpAndCreatePasswordEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/passwords',
	fullPath: '/customers-auth/passwords'
};

export interface IInitiate2faResponse {
    qr: string;
    secret: string;
}

export const Initiate2faEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/2fa',
	fullPath: '/customers-auth/2fa'
};

export interface IVerify2faTokenPayload {
    token: string;
}

export const Verify2faEndpoint: Endpoint = {
	method: HttpMethods.Patch,
	path: '/2fa',
	fullPath: '/customers-auth/2fa'
};


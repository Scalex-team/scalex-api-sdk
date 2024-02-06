import { Endpoint, HttpMethods } from "../../generic";

export interface IReqeustOtpForLoginPayload {
    email: string;
}

export interface IVerifyOtpAndPasswordForLoginPayload {
    otp: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

export const RequestOtpForLoginEndpoint: Endpoint = {
    method: HttpMethods.Post,
    path: '/login',
    fullPath: '/customers-auth/login'
}

export const VerifyOtpAndPasswordForLoginEndpoint: Endpoint = {
    method: HttpMethods.Patch,
    path: '/login',
    fullPath: '/customers-auth/login'
}

export const Verify2faForLoginEndpoint: Endpoint = {
    method: HttpMethods.Patch,
    path: '/login/2fa',
    fullPath: '/customers-auth/login/2fa'
}
import { Endpoint, HttpMethods } from "../../generic";

export interface IRequestOtpToRegisterPayload {
    email: string
}

export interface IRequestOtpToRegisterResponse {
    token: string;
}

export const RequestOtpToRegisterEndpoint: Endpoint = {
    method: HttpMethods.Post,
    path: 'otps',
    fullPath: 'customers-auth/otps'
}
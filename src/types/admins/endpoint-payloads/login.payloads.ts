import { Endpoint, HttpMethods, ScalexError } from "../../generic";
import { HttpStatusCode } from 'axios';

export interface IAdminLoginPayload {
    email: string;
    password: string;
}

export interface IAdminLoginResponse {
    token: string;
}

export const AdminLoginErrors: {
    duplicateAdminExists: ScalexError
} = {
    duplicateAdminExists: {
        code: 'DUPLICATE_ADMIN_EXISTS',
        statusCode: HttpStatusCode.BadRequest,
        message: `A admin with these credentials already exists`,
        recommendedActions: [
            `Attempt creating a admin using different credentials`
		],
		description: `This happens when one tries to create a admin with already existing credentials`
    }
}

export const AdminLoginEndpoint: Endpoint = {
    path: 'auth',
    fullPath: '/auth',
    method: HttpMethods.Put
}
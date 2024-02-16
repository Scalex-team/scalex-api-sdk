import { ScalexSuccessResponse, callApi, setBearerToken } from "../../../functions";
import {
    IInitiate2faResponse,
    IRequestOtpToRegisterPayload,
    IRequestOtpToRegisterResponse,
    IRequestPasswordResetPayload,
    IRequestPasswordResetResponse,
    IResetPasswordPayload,
    IVerify2faTokenPayload,
    IVerifyOtpAndCreatePasswordPayload,
    IVerifyOtpAndCreatePasswordResponse,
    Initiate2faEndpoint,
    RequestOtpToRegisterEndpoint,
    RequestPasswordResetEndpoint,
    ResetPasswordEndpoint,
    Verify2faEndpoint,
    VerifyOtpAndCreatePasswordEndpoint,
    IRequestOtpForLoginPayload,
    ILoginResponse,
    RequestOtpForLoginEndpoint,
    IVerifyOtpAndPasswordForLoginPayload,
    VerifyOtpAndPasswordForLoginEndpoint,
    IVerify2faForLoginPayload,
    Verify2faForLoginEndpoint
} from "../../../types";

export class ScalexCustomersSdk {
    constructor( protected apiUrl: string ) {}

    async requestOtpToRegister(payload: IRequestOtpToRegisterPayload)
    : Promise<ScalexSuccessResponse<IRequestOtpToRegisterResponse>> {
        return callApi<IRequestOtpToRegisterPayload, IRequestOtpToRegisterResponse>({
            serviceUri: this.apiUrl,
            endpoint: RequestOtpToRegisterEndpoint,
            body: payload
        })
    }

    async verifyOtpAndCreatePassword( payload: IVerifyOtpAndCreatePasswordPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IVerifyOtpAndCreatePasswordResponse>> {
        return callApi<IVerifyOtpAndCreatePasswordPayload, IVerifyOtpAndCreatePasswordResponse>({
            serviceUri: this.apiUrl,
            endpoint: VerifyOtpAndCreatePasswordEndpoint,
            body: payload,
            headers: {
                ...setBearerToken(authToken)
            }
        })
    }

    async initiate2faRegistration( authToken: string )
    : Promise<ScalexSuccessResponse<IInitiate2faResponse>> {
        return callApi<null, IInitiate2faResponse>({
            serviceUri: this.apiUrl,
            endpoint: Initiate2faEndpoint,
            headers: {
                ...setBearerToken(authToken)
            }
        })
    }

    async verify2faToken( payload: IVerify2faTokenPayload, authToken: string )
    : Promise<ScalexSuccessResponse<null>> {
        return callApi<IVerify2faTokenPayload, null>({
            serviceUri: this.apiUrl,
            endpoint: Verify2faEndpoint,
            body: payload,
            headers: {
                ...setBearerToken(authToken)
            }
        })
    }

    async requestPasswordReset( payload: IRequestPasswordResetPayload )
    : Promise<ScalexSuccessResponse<IRequestPasswordResetResponse>> {
        return callApi<IRequestPasswordResetPayload, IRequestPasswordResetResponse>({
            serviceUri: this.apiUrl,
            endpoint: RequestPasswordResetEndpoint,
            body: payload
        })
    }

    async resetPassword( payload: IResetPasswordPayload, authToken: string )
    : Promise<ScalexSuccessResponse<null>> {
        return callApi<IResetPasswordPayload, null>({
            serviceUri: this.apiUrl,
            endpoint: ResetPasswordEndpoint,
            body: payload,
            headers: {
                ...setBearerToken(authToken)
            }
        })
    }

    async requestOtpToLogin( payload: IRequestOtpForLoginPayload )
        : Promise<ScalexSuccessResponse<ILoginResponse>> {
        return callApi<IRequestOtpForLoginPayload, ILoginResponse>({
            serviceUri: this.apiUrl,
            endpoint: RequestOtpForLoginEndpoint,
            body: payload,
        })
    }

    async verifyOtpAndPasswordForLogin( payload: IVerifyOtpAndPasswordForLoginPayload, authToken: string )
        : Promise<ScalexSuccessResponse<ILoginResponse>> {
        return callApi<IVerifyOtpAndPasswordForLoginPayload, ILoginResponse>({
            serviceUri: this.apiUrl,
            endpoint: VerifyOtpAndPasswordForLoginEndpoint,
            body: payload,
            headers: {
                ...setBearerToken(authToken)
            }
        })
    }

    async verify2faForLogin( payload: IVerify2faForLoginPayload, authToken: string )
        : Promise<ScalexSuccessResponse<ILoginResponse>> {
        return callApi<IVerify2faForLoginPayload, ILoginResponse>({
            serviceUri: this.apiUrl,
            endpoint: Verify2faForLoginEndpoint,
            body: payload,
            headers: {
                ...setBearerToken(authToken)
            }
        })
    }
}
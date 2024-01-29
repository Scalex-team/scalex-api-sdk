import { callApi } from "../../../functions/call-api.function";
import { ScalexSuccessResponse } from "../../../functions/send-api-response";
import { IRequestOtpToRegisterPayload, IRequestOtpToRegisterResponse, RequestOtpToRegisterEndpoint } from "../../../types";

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
}
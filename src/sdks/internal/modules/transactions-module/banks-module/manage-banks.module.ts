import { ScalexSuccessResponse, callApi, setBearerToken } from "../../../../../functions";
import { IResolveBankAccountInfoPayload, IResolveBankAccountInfoResponse, IRetrieveBankListsPayload, IRetrieveBankListsResponse, ResolveBankAccountInfoEndpoint, RetrieveBankListsEndpoint } from "../../../../../types";


export class BanksModule {
	constructor( protected apiUrl: string ) {}

	async retrieveBankLists( payload: IRetrieveBankListsPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IRetrieveBankListsResponse>> {
		return callApi<IRetrieveBankListsPayload, IRetrieveBankListsResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveBankListsEndpoint,
			query: payload,
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}

	async resolveBankAccount( payload: IResolveBankAccountInfoPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IResolveBankAccountInfoResponse>> {
		return callApi<IResolveBankAccountInfoPayload, IResolveBankAccountInfoResponse>( {
			serviceUri: this.apiUrl,
			endpoint: ResolveBankAccountInfoEndpoint,
			body: payload,
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}
    
}
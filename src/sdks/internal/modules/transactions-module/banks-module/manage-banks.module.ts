import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IResolveBankAccountInfoPayload, IResolveBankAccountInfoResponse, IRetrieveBankListsPayload, IRetrieveBankListsResponse, ResolveBankAccountInfoEndpoint, RetrieveBankListsEndpoint } from "../../../../../types";


export class BanksModule {
	constructor( protected apiUrl: string ) {}

	async retrieveBankLists( payload: IRetrieveBankListsPayload )
    : Promise<ScalexSuccessResponse<IRetrieveBankListsResponse>> {
		return callApi<IRetrieveBankListsPayload, IRetrieveBankListsResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveBankListsEndpoint,
			query: payload
		} );
	}

	async resolveBankAccount( payload: IResolveBankAccountInfoPayload )
    : Promise<ScalexSuccessResponse<IResolveBankAccountInfoResponse>> {
		return callApi<IResolveBankAccountInfoPayload, IResolveBankAccountInfoResponse>( {
			serviceUri: this.apiUrl,
			endpoint: ResolveBankAccountInfoEndpoint,
			body: payload
		} );
	}
    
}
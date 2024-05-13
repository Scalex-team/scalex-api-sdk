import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IRetrieveBankListsPayload, IRetrieveBankListsResponse, RetrieveBankListsEndpoint } from "../../../../../types";


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
    
}
import {
	FetchJobEndpoint,
	IHasQueryIdPayload,
	IJobResponse,
	IRetrieveCountriesResponse,
	RetrieveCountriesEndpoint,
} from "../../../types";
import {callApi, ScalexSuccessResponse, setBearerToken} from "../../../functions";

export class ScalexUtilsSdk {
	constructor( protected apiUrl: string ) {}
	async retrieveCountries( )
        : Promise<ScalexSuccessResponse<IRetrieveCountriesResponse>> {
		return callApi<null, IRetrieveCountriesResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveCountriesEndpoint,
		} );
	}

	async fetchJob( jobId: string, authToken: string )
        : Promise<ScalexSuccessResponse<IJobResponse<unknown>>> {
		return callApi<null, IJobResponse<unknown>, IHasQueryIdPayload>( {
			serviceUri: this.apiUrl,
			endpoint: FetchJobEndpoint,
			query: {
				id: jobId
			},
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}
}

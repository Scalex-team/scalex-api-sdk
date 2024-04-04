import {
	FetchJobEndpoint,
	IHasQueryIdPayload,
	IJobResponse,
} from "../../../types";
import {callApi, ScalexSuccessResponse, setBearerToken} from "../../../functions";

export class ScalexUtilsSdk {
	constructor( protected apiUrl: string ) {}

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

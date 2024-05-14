import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IRetrievePersistentNubanPayload, IRetrievePersistentNubanResponse, RetrievePersistentNubanEndpoint } from "../../../../../types";

export class UtilsModule {
	constructor( protected apiUrl: string ) {}

	async retrievePersistentNuban( payload: IRetrievePersistentNubanPayload )
    : Promise<ScalexSuccessResponse<IRetrievePersistentNubanResponse>> {
		return callApi<IRetrievePersistentNubanPayload, IRetrievePersistentNubanResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrievePersistentNubanEndpoint,
			query: payload
		} );
	}
}
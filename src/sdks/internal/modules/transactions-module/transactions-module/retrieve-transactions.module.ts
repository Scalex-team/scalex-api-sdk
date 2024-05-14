import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IRetrieveDepositsPayload, IRetrieveDepositsResponse, RetrieveDepositsEndpoint, TransactionType } from "../../../../../types";

export class TransactionsModule {
	constructor( protected apiUrl: string ) {}

	async retrieveDeposits( payload: IRetrieveDepositsPayload )
    : Promise<ScalexSuccessResponse<IRetrieveDepositsResponse>> {
		return callApi<IRetrieveDepositsPayload, IRetrieveDepositsResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveDepositsEndpoint,
			query: {
				...payload,
				type: TransactionType.deposit
			}
		} );
	}
}
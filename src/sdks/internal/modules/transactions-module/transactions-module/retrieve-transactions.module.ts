import { ScalexSuccessResponse, callApi, setBearerToken } from "../../../../../functions";
import { IRetrieveTransactionPayload, IRetrieveTransactionResponse, RetrieveTransactionsEndpoint, TransactionType } from "../../../../../types";

export class TransactionsModule {
	constructor( protected apiUrl: string ) {}

	async retrieveDeposits( payload: IRetrieveTransactionPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IRetrieveTransactionResponse>> {
		return callApi<IRetrieveTransactionPayload, IRetrieveTransactionResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveTransactionsEndpoint,
			query: {
				...payload,
				type: TransactionType.deposit
			},
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}

	async retrieveWithdrawals( payload: IRetrieveTransactionPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IRetrieveTransactionResponse>> {
		return callApi<IRetrieveTransactionPayload, IRetrieveTransactionResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveTransactionsEndpoint,
			query: {
				...payload,
				type: TransactionType.transfer
			},
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}
}
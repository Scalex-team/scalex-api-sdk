import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IRetrieveTransactionPayload, IRetrieveTransactionResponse, RetrieveTransactionsEndpoint, TransactionType } from "../../../../../types";

export class TransactionsModule {
	constructor( protected apiUrl: string ) {}

	async retrieveDeposits( payload: IRetrieveTransactionPayload )
    : Promise<ScalexSuccessResponse<IRetrieveTransactionResponse>> {
		return callApi<IRetrieveTransactionPayload, IRetrieveTransactionResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveTransactionsEndpoint,
			query: {
				...payload,
				type: TransactionType.deposit
			}
		} );
	}

	async retrieveWithdrawals( payload: IRetrieveTransactionPayload )
    : Promise<ScalexSuccessResponse<IRetrieveTransactionResponse>> {
		return callApi<IRetrieveTransactionPayload, IRetrieveTransactionResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveTransactionsEndpoint,
			query: {
				...payload,
				type: TransactionType.transfer
			}
		} );
	}
}
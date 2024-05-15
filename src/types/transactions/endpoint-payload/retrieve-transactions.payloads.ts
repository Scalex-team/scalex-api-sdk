import { Endpoint, HttpMethods } from "../../generic";
import { ITransaction, TransactionStatus, TransactionType } from "../models";


export interface IRetrieveTransactionPayload {
    ref?: string;
    status?: TransactionStatus;
    type?: TransactionType;
    product?: string;
    hash?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    page?: number;
}

export interface IRetrieveTransactionResponse {
    paginatedData: Array<ITransaction>;
    meta: {
        page: number;
        limit: number;
        totalPages: number;
        totalDataCount: number;
    };
}

export const RetrieveTransactionsEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '/retrieve-tx',
	fullPath: '/transactions/retrieve-tx'
};
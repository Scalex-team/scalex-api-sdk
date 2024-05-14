import { Endpoint, HttpMethods } from "../../generic";
import { ITransaction, TransactionStatus, TransactionType } from "../models";


export interface IRetrieveDepositsPayload {
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

export interface IRetrieveDepositsResponse {
    paginatedData: Array<ITransaction>;
    meta: {
        page: number;
        limit: number;
        totalPages: number;
        totalDataCount: number;
    };
}

export const RetrieveDepositsEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '',
	fullPath: '/retrieve-tx'
};
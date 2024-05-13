import { Endpoint, HttpMethods } from "../../generic";
import { IBank } from "../models";

export interface IRetrieveBankListsPayload {
    currency: string;
    product: string;
}

export interface IRetrieveBankListsResponse {
    banks: Array<Partial<IBank>>;
}

export const RetrieveBankListsEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '',
	fullPath: '/list-banks'
};

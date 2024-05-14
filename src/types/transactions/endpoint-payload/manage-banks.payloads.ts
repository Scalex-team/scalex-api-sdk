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

export interface IResolveBankAccountInfoPayload {
    bankCode: string;
    accountNumber: string;
    currency: string;
    product: string;
}

export interface IResolveBankAccountInfoResponse {
    bank: IBank; // TODO: Update this in FiatModules
}

export const ResolveBankAccountInfoEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '',
	fullPath: '/resolve-bank-account'
};

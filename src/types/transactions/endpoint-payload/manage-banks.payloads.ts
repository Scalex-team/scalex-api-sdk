import { Endpoint, HttpMethods } from "../../generic";
import { IBank } from "../models";

export interface IRetrieveBankListsPayload {
    id?: string;
    name?: string;
    shortName?: string;
    payazaCode?: string;
    baniCode?: string;
    pagaCode?: string;
    polarisCode?: string;
}

export interface IRetrieveBankListsResponse {
    banks: Array<Partial<IBank>>;
}

export const RetrieveBankListsEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '/banks',
	fullPath: '/banks'
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
	path: '/resolve-bank-account',
	fullPath: '/fiat-management/resolve-bank-account'
};

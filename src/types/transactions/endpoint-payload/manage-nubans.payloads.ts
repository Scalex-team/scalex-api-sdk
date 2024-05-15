import { Endpoint, HttpMethods } from "../../generic";
import { IFiatWallet } from "../models";

export interface IRetrieveFiatWalletPayload {
	currency: string,
	product: string,
	countryCode?: string,
	holder: {
		name: string,
		email: string,
		phone?: string,
	}
}

export interface IRetrieveFiatWalletResponse {
    nuban: IFiatWallet
}

export const RetrieveFiatWalletEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '/retrieve-persistent-nuban',
	fullPath: '/fiat-management/retrieve-persistent-nuban'
};

export interface IRetrieveCryptoWalletAddressPayload {
    coin: string,
	network: number,
}

export interface IRetrieveCryptoWalletAddressResponse {
    address: string
    addressType: string
}

export const RetrieveCryptoWalletAddressEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '/retrieve-wallet-address',
	fullPath: '/crypto-management/retrieve-wallet-address'
};
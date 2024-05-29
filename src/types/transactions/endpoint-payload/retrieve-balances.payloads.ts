import { CurrencyType, Endpoint, HttpMethods } from "../../generic";
import { IRate } from "../models";

export interface IRetrieveWalletBalancesPayload {
    forceCacheReload: boolean
}

export interface IWalletBalance {
	asset: {
		_id: string;
		fullName: string;
		logo: string;
		type: CurrencyType;
		network?: {
			_id: string
			name: string;
			logo: string;
		}
	}
	balance: number;
	stats: Array<IRate>;
}

export interface IRetrieveWalletBalancesRes {
    balances: Array<IWalletBalance>
}

export const RetrieveWalletBalancesEndpoint: Endpoint = {
	method: HttpMethods.Put,
	path: '/retrieve-wallet-balances',
	fullPath: '/transactions/retrieve-wallet-balances'
};

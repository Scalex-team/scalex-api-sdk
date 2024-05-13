import { ICountry } from "../../generic";
import { IRate } from "./rate.model";

export interface IFiat {
	symbol: string,
	abbr: string,
	shortName: string,
	fullName: string,
	logo: string,
	rates: Array<IRate> | Array<string>,
	isActive: boolean,
	country: ICountry | string
}

export enum AssetStatus {
	Active = 'active',
	Suspended = 'suspended',
	Locked = 'locked',
	Destroyed = 'destroyed',
}

export interface Nuban {
	accountNumber: string,
	provider: string;
	bank: string;
	isActive: boolean;
}

export interface IFiatWallet {
	customerId: string,
	fiatId: string,
	ledgerBalance: number,
	lockedBalance: number,
	status: AssetStatus,
	nuban: Nuban
}

export interface FiatFunctions {
	name: string,
	provider: string,
	product: string,
	isActive: boolean
}

export enum FiatProviders {
	Paga = 'Paga',
	Payaza = 'Payaza',
	Polaris = 'Polaris',
	Bani = 'Bani',
}

export interface IFiatDependencyApiKeys {
	[provider: string]: {
		apiKey: string;
		secretKey?: string;
		pin?: string;
		accountReference?: string;
		hmac?: string;
		staticUrl?: string;
		tribe_account_ref?: string,
		access_token?: string
	};
}
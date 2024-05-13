import { IBaseModel } from "../../generic";
import { IRate } from "./rate.model";
import { LpProviders } from "./third-party-lp.model";

export interface iNetwork {
	id: string, // | Types.ObjectId ,
	isActive?: boolean
}

export enum CoinSymbols {
	USDT = 'USDT',
	USDC = 'USDC',
	BTC = 'BTC',
}

export const CoinFulNames: Record<CoinSymbols, string> = {
	USDT: 'Tether USD',
	USDC: 'USD Coin',
	BTC: 'Bitcoin',
};

export type CoinFulNamesTypes = keyof typeof CoinFulNames;
export interface ICoin extends IBaseModel{
	symbol: string,
	fullName?: string,
	logo: string,
	isActive?: boolean,
	alias: {
		[K in keyof typeof LpProviders]?: string;
	},
	rates?: Array<IRate> | Array<string>,
	networks: Array<iNetwork> | Array<string> 
}
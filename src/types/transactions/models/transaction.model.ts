import {CurrencyType, IBaseModel} from "../../generic";
import {IRate} from "./rate.model";

export enum CrytpoProviders {
	Shyft = 'Shyft',
	Liminal = 'Liminal',
	Bitnob = 'Bitnob',
}

export type Nuban = {
    nuban: string;
    bank: string;
    meta: {
        bankName: string;
        accountName: string;
    }
}

export enum TransactionType {
    onramp = 'onramp',
    offramp = 'offramp',
    transfer = 'transfer'
}

export enum TransactionStatus {
    initiated = 'initiated',
    awaitingConsumation = 'awaiting-consumation',
    processing = 'processing',
    successful = 'successful',
    failed = 'failed',
    expired = 'expired',
    cancelled = 'cancelled'
}

export type CurrencyAndAmount = {
    currencyType: CurrencyType;
    currency: {
        id: string;
        networkId?: string;
        chainId?: string;
    }
    amount: number;
}

export type TransactionRecipient = {
    id?: string;
    isInternal: boolean;
    address?: string;
    addressPassword?: string;
    bankAccount?: Nuban;
}

export interface ITransaction extends IBaseModel {
    reference: string;
    initiator?: TransactionRecipient;
    type: TransactionType;
    status: TransactionStatus;
    volume: {
        initiated?: CurrencyAndAmount;
        toBeConsumated?: CurrencyAndAmount;
        consumated?: CurrencyAndAmount;
    };
    hash: string;
    recipient: TransactionRecipient
    product: string;
    fee: {
        id?: string;
        charge: CurrencyAndAmount
    }
    meta: {
        revenue?: string;
        snapshots?: {
            rates?: {
                start?: {
                    currencyToUsdt: IRate;
                    currencyToRequest?: IRate;
                    usdtToNaira: IRate;
                },
                end?: {
                    currencyToUsdt: IRate;
                    currencyToRequest?: IRate;
                    usdtToNaira: IRate;
                }
            };
            fees?: unknown;
        }
        productConfig?: unknown;
        ledgerBalance: {
            before: number;
            after: number;
        };
        thirdParty?: {
            provider?: CrytpoProviders;
            reference?: string;
        }
    }
}
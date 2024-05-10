import {CurrencyType, IBaseModel, ResourceOwner} from "../../generic";
import { IBankAccount } from "./bank-account.model";
import {IRate} from "./rate.model";

export enum CrytpoProviders {
	shyft = 'shyft',
	liminal = 'liminal',
	bitnob = 'bitnob',
}

export enum TransactionType {
    onramp = 'onramp',
    offramp = 'offramp',
    transfer = 'transfer',
    deposit = 'deposit'
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

export type ICurrencyAndAmount = {
    currencyType: CurrencyType;
    currency: {
        id: string;
        networkId?: string;
        chainId?: string;
    }
    amount: number;
}

export type ITransactionRecipient = {
    type?: ResourceOwner;
    id?: string;
    isInternal: boolean;
    address?: string;
    addressPassword?: string;
    bankAccount?: IBankAccount;
}

export interface ITransaction extends IBaseModel {
    reference: string;
    initiator?: ITransactionRecipient;
    type: TransactionType;
    status: TransactionStatus;
    volume: {
        initiated?: ICurrencyAndAmount;
        toBeConsumated?: ICurrencyAndAmount;
        consumated?: ICurrencyAndAmount;
    };
    hash: string;
    recipient: ITransactionRecipient
    product: string;
    fee: {
        id?: string;
        charge: ICurrencyAndAmount
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
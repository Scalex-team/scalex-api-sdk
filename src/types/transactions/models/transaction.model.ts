import {CurrencyType, IBaseModel, ResourceOwner} from "../../generic";
import { IBankAccount } from "./bank-account.model";
import {IRate} from "./rate.model";
import { TransactionStatus } from "./transaction-status.enum";

export enum CrytpoProviders {
	shyft = 'shyft',
	liminal = 'liminal',
	bitnob = 'bitnob',
}

export enum TransactionType {
    transfer = 'transfer',
    deposit = 'deposit'
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
    isWalletTx: boolean;
    address?: string;
    addressPassword?: string;
    bankAccount?: IBankAccount;
}

export interface ITransaction extends IBaseModel {
    reference: string;
    initiator?: ITransactionRecipient;
    recipient: ITransactionRecipient;
    type: TransactionType;
    status: TransactionStatus;
    volume: {
        requested?: ICurrencyAndAmount;
        initiated?: ICurrencyAndAmount;
        toBeConsumated?: ICurrencyAndAmount;
        consumated?: ICurrencyAndAmount;
    };
    hash: string;
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
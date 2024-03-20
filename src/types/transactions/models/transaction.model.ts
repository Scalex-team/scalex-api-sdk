import {CurrencyType, IBaseModel} from "../../generic";
import {IRate} from "./rate.model";

export type Nuban = {
    nuban: string;
    bank: string;
    name: string;
}

export enum TransactionStatus {
    initiated = 'initiated',
    processing = 'processing',
    completed = 'completed',
    failed = 'failed',
    expired = 'expired',
    cancelled = 'cancelled'
}

export type CurrencyAndAmount = {
    currencyType: CurrencyType;
    currency: {
        id: string;
        networkId: string;
    }
    amount: number;
}

export interface ITransaction extends IBaseModel {
    reference: string;
    initiator: string;
    status: TransactionStatus;
    amount: CurrencyAndAmount;
    request: CurrencyAndAmount;
    recipient: {
        id: string;
        isInternal: boolean;
        address?: string;
        bankAccount?: string;
    }
    product: string;
    fee: {
        id: string;
        charge: CurrencyAndAmount
    }
    meta: {
        rateSnapshots: {
            currencyToUsdt: IRate;
            currencyToRequest: IRate;
            usdtToNaira: IRate;
        };
        productConfig: unknown;
        ledgerBalance: {
            before: number;
            after: number;
        }
    }
}
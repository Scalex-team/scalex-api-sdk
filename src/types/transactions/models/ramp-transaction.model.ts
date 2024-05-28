import { IBaseModel } from "../../generic";
import { TransactionStatus } from "./transaction-status.enum";

export enum RampTxType {
    onramp = 'onramp',
    offramp = 'offramp',
    turnover = 'turnover' // Still looking sketchy for now
}

export interface IRampTransaction extends IBaseModel {
    user: string;
    status: TransactionStatus;
    fiatTx: string;
    cryptoTx: string;
}
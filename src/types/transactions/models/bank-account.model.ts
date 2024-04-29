import { ActiveOrInactive, IBaseModel, ResourceOwner } from "../../generic";

export interface IBankAccount extends IBaseModel {
    owner: {
        type: ResourceOwner;
        id: string;
    };
    nuban: string;
    bank: string;
    currency?: string;
    status: ActiveOrInactive;
    meta: {
        bankName: string;
        accountName: string;
    }
}
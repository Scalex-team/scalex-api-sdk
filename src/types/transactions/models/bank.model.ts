import { IBaseModel } from "../../generic";

export interface IBank extends IBaseModel {
    name: string;
    shortName: string;
    logo: string;
    codes: {
        payaza?: string;
        bani?: string;
        paga?: string;
        polaris?: string;
    }
}
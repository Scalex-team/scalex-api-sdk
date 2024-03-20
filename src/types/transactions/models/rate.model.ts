import {CurrencyType, IBaseModel} from "../../generic";

export enum PercentageChangeTimeframes {
    _1h = '_1h',
    _1d = '_1d',
    _1w = '_1w',
}

export interface IPercentageChangeTimeframes {
    timeframe: PercentageChangeTimeframes,
    value: number
}

export interface IRate extends IBaseModel {
    id: string,
    rate: number,
    percentageChange: Array<IPercentageChangeTimeframes>;
    type: CurrencyType
}
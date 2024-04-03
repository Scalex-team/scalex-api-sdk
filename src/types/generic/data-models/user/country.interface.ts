import { IBaseModel } from "../base.model";

export enum Continents {
	AF = 'Africa',
	AN = 'Antarctica',
	AS = 'Asia',
	EU = 'Europe',
	NA = 'North America',
	OC = 'Oceania',
	SA = 'South America',
}

export interface ILanguage extends IBaseModel {
	name: string,
	shortCode: string,
    native: string,
}

export interface IPhoneCode extends IBaseModel {
	code: string
}

export interface IFiatCurrency extends IBaseModel {
	currency: string
}

export interface ICountry {
	name: string,
    native: string,
    countryCode: string,
    phoneCodes: Array<IPhoneCode> | Array<string>,
    continent: Continents,
    capital: string,
    emoji: string,
    currencies: Array<IFiatCurrency> | Array<string>,
    languages: Array<ILanguage> | Array<string>,
}
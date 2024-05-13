
import { Endpoint, HttpMethods } from "../../generic";
import { IFiat } from "../models";

export interface IRetrieveFiatCurrenciesResponse {
    currencies: Array<IFiat>;
}

export const RetrieveFiatCurrenciesEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '',
	fullPath: '/list-fiat-currencies'
};

import { Endpoint, HttpMethods } from "../../generic";
import { ICoin } from "../models";

export interface IRetrieveCryptoTokensResponse {
    coins: Array<ICoin>;
}

export const RetrieveCryptoTokensEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '',
	fullPath: '/list-coins'
};

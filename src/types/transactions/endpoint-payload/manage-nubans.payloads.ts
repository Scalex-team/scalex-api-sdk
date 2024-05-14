import { Endpoint, HttpMethods } from "../../generic";
import { IFiatWallet } from "../models";

export interface IRetrievePersistentNubanPayload {
    transactionId: string,
	amount: number,
	currency: string,
	countryCode?: string,
	holder: {
		name: string,
		email: string,
		phone?: string,
	}
}

export interface IRetrievePersistentNubanResponse {
    nuban: IFiatWallet
}

export const RetrievePersistentNubanEndpoint: Endpoint = {
	method: HttpMethods.Post,
	path: '',
	fullPath: '/retrieve-persistent-nuban'
};
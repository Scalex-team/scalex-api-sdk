import { Endpoint, HttpMethods, ICountry } from "../../generic";

export interface IRetrieveCountriesResponse {
    countries: Array<Partial<ICountry>>
}

export const RetrieveCountriesEndpoint: Endpoint = {
    method: HttpMethods.Get,
    path: '/preferences/countries',
    fullPath: '/preferences/countries',
}

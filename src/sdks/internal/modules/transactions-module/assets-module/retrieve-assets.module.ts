import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IRetrieveCryptoTokensResponse, RetrieveCryptoTokensEndpoint } from "../../../../../types";
import { IRetrieveFiatCurrenciesResponse, RetrieveFiatCurrenciesEndpoint } from "../../../../../types/transactions/endpoint-payload/retrieve-fiat-assets.payloads";

export class AssetsModule {
	constructor( protected apiUrl: string ) {}

	async retrieveCryptoTokens()
    : Promise<ScalexSuccessResponse<IRetrieveCryptoTokensResponse>> {
		return callApi<void, IRetrieveCryptoTokensResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveCryptoTokensEndpoint
		} );
	}

	async retrieveFiatCurrencies()
    : Promise<ScalexSuccessResponse<IRetrieveFiatCurrenciesResponse>> {
		return callApi<void, IRetrieveFiatCurrenciesResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveFiatCurrenciesEndpoint
		} );
	}
}
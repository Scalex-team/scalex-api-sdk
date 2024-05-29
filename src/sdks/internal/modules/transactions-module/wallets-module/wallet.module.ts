import { ScalexSuccessResponse, callApi, setBearerToken } from "../../../../../functions";
import { IRetrieveCryptoWalletAddressPayload, IRetrieveCryptoWalletAddressResponse, IRetrieveFiatWalletPayload, IRetrieveFiatWalletResponse, IRetrieveWalletBalancesPayload, IRetrieveWalletBalancesRes, RetrieveCryptoWalletAddressEndpoint, RetrieveFiatWalletEndpoint, RetrieveWalletBalancesEndpoint } from "../../../../../types";

export class WalletsModule {
	constructor( protected apiUrl: string ) {}

	async retrieveFiatWallet( payload: IRetrieveFiatWalletPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IRetrieveFiatWalletResponse>> {
		return callApi<IRetrieveFiatWalletPayload, IRetrieveFiatWalletResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveFiatWalletEndpoint,
			query: payload,
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}

	async retrieveCryptoWallet( payload: IRetrieveCryptoWalletAddressPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IRetrieveCryptoWalletAddressResponse>> {
		return callApi<IRetrieveCryptoWalletAddressPayload, IRetrieveCryptoWalletAddressResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveCryptoWalletAddressEndpoint,
			query: payload,
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}

	async retrieveWalletBalances( payload: IRetrieveWalletBalancesPayload, authToken: string )
    : Promise<ScalexSuccessResponse<IRetrieveWalletBalancesRes>> {
		return callApi<IRetrieveWalletBalancesPayload, IRetrieveWalletBalancesRes>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveWalletBalancesEndpoint,
			body: payload,
			headers: {
				...setBearerToken( authToken )
			}
		} );
	}
}
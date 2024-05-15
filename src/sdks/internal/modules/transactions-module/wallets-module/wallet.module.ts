import { ScalexSuccessResponse, callApi, setBearerToken } from "../../../../../functions";
import { IRetrieveCryptoWalletAddressPayload, IRetrieveCryptoWalletAddressResponse, IRetrieveFiatWalletPayload, IRetrieveFiatWalletResponse, RetrieveCryptoWalletAddressEndpoint, RetrieveFiatWalletEndpoint } from "../../../../../types";

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
}
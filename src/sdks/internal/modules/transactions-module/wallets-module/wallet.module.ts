import { ScalexSuccessResponse, callApi } from "../../../../../functions";
import { IRetrieveCryptoWalletAddressPayload, IRetrieveCryptoWalletAddressResponse, IRetrieveFiatWalletPayload, IRetrieveFiatWalletResponse, RetrieveCryptoWalletAddressEndpoint, RetrieveFiatWalletEndpoint } from "../../../../../types";

export class WalletsModule {
	constructor( protected apiUrl: string ) {}

	async retrieveFiatWallet( payload: IRetrieveFiatWalletPayload )
    : Promise<ScalexSuccessResponse<IRetrieveFiatWalletResponse>> {
		return callApi<IRetrieveFiatWalletPayload, IRetrieveFiatWalletResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveFiatWalletEndpoint,
			query: payload
		} );
	}

	async retrieveCryptoWallet( payload: IRetrieveCryptoWalletAddressPayload )
    : Promise<ScalexSuccessResponse<IRetrieveCryptoWalletAddressResponse>> {
		return callApi<IRetrieveCryptoWalletAddressPayload, IRetrieveCryptoWalletAddressResponse>( {
			serviceUri: this.apiUrl,
			endpoint: RetrieveCryptoWalletAddressEndpoint,
			query: payload
		} );
	}
}
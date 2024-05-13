export enum LpPaymentMethod {
	Crypto = 'Crypto',
	Bank = 'Bank',
}

export enum LpFiatCurrencyNetwork {
	Local = 'LOCAL'
}

export interface LpApiKeys {
	secretKey: string,
	staticUrl: string
}

export enum LpProviders {
	XendBridge = 'XendBridge'
}
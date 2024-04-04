import {ScalexCustomersSdk, ScalexUtilsSdk} from "./modules";

export enum ScalexInternalEnvironments {
    local = 'local',
    dev = 'dev',
    prod = 'prod'
};

export enum ScalexInternalApiVersions {
    v1 = '/v1',
}

const InternalEnvironmentUrls: {
    [key in ScalexInternalEnvironments]: string;
} = {
	local: 'http://localhost:8500',
	dev: 'https://scalex-api-gateway-dev.up.railway.app',
	prod: 'https://scalex-api.up.railway.app'
};

export class ScalexInternalAPI {
	private readonly apiUrl: string;
	customers: ScalexCustomersSdk;
	utils: ScalexUtilsSdk;


	constructor(
		environment: ScalexInternalEnvironments = ScalexInternalEnvironments.dev,
		version: ScalexInternalApiVersions = ScalexInternalApiVersions.v1
	) {
		this.apiUrl = InternalEnvironmentUrls[environment] + version;
		this.customers = new ScalexCustomersSdk( this.apiUrl );
		this.utils = new ScalexUtilsSdk( this.apiUrl );
	}
}

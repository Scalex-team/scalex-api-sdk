import {ScalexCustomersSdk} from "./modules";

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
}

export class ScalexInternalAPI {
    private apiUrl: string;
    customers: ScalexCustomersSdk;


    constructor(
        environment: ScalexInternalEnvironments = ScalexInternalEnvironments.dev,
        version: ScalexInternalApiVersions = ScalexInternalApiVersions.v1
    ) {
        this.apiUrl = InternalEnvironmentUrls[environment] + version;
        this.customers = new ScalexCustomersSdk(this.apiUrl)
    }
}
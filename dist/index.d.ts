import { HttpStatusCode } from 'axios';

declare enum HttpMethods {
    Post = "POST",
    Put = "PUT",
    Get = "GET",
    Patch = "PATCH",
    Delete = "DELETE"
}
interface Endpoint {
    path: string;
    method: HttpMethods;
    fullPath: string;
}
type Endpoints<T extends Array<string>> = {
    [k in keyof T]: Endpoint;
};

interface ScalexError {
    code: string;
    statusCode: HttpStatusCode;
    message: string;
    recommendedActions?: Array<string>;
    description?: string;
}

interface IRequestOtpToRegisterPayload {
    email: string;
}
interface IRequestOtpToRegisterResponse {
    token: string;
}
declare const RequestOtpToRegisterEndpoint: Endpoint;
interface IVerifyOtpAndCreatePasswordPayload {
    otp: string;
    password: string;
    agreedToTerms: boolean;
}
interface IVerifyOtpAndCreatePasswordResponse {
    token: string;
}
declare const VerifyOtpAndCreatePasswordEndpoint: Endpoint;
interface IInitiate2faResponse {
    qr: string;
    secret: string;
}
declare const Initiate2faEndpoint: Endpoint;
interface IVerify2faTokenPayload {
    token: string;
}
declare const Verify2faEndpoint: Endpoint;

interface IRequestPasswordResetPayload {
    email: string;
}
interface IRequestPasswordResetResponse {
    token: string;
}
declare const RequestPasswordResetEndpoint: Endpoint;
interface IResetPasswordPayload {
    otp: string;
    password: string;
    confirmPassword: string;
}
declare const ResetPasswordEndpoint: Endpoint;

interface IRequestOtpForLoginPayload {
    email: string;
}
interface IVerifyOtpAndPasswordForLoginPayload {
    otp: string;
    password: string;
}
interface ILoginResponse {
    token: string;
}
interface ITokenWithUserResponse {
    token: string;
    customer: Partial<IUser>;
}
interface IVerify2faForLoginPayload {
    token: string;
}
declare const RequestOtpForLoginEndpoint: Endpoint;
declare const VerifyOtpAndPasswordForLoginEndpoint: Endpoint;
declare const Verify2faForLoginEndpoint: Endpoint;

declare enum VerifiableEntity {
    governmentIssuedId = "government-issued-id",
    utilityBill = "utility-bill",
    businessRegistrationCertificate = "business-registration-certificate",
    phoneNumber = "phone-number"
}
type VerificationResult = {
    entity: VerifiableEntity;
    status: PassOrFail;
};
declare enum VerificationApplicantType {
    individual = "individual",
    business = "business",
    director = "director"
}
declare enum VerificationAction {
    initiateJobWithPartner = "initiate-job-with-partner",
    confirmJobStatusWithPartner = "confirm-job-status-with-partner",
    updateLocalUserRecords = "update-local-user-records"
}
declare enum VerificationStepType {
    apiCall = "api-call",
    webhook = "webhook"
}
declare enum VerificationRequirementStatus {
    one = "one",
    all = "all"
}
declare enum VerificationApplicationStatus {
    cold = "cold",
    inProgress = "in-progress",
    expired = "expired",
    filled = "filled",
    failed = "failed",
    successful = "successful"
}
type VerificationFlow = {
    entity: VerifiableEntity;
    status: ActiveOrInactive;
    applicantTypes: Array<VerificationApplicantType>;
    steps: Array<{
        index: number;
        action: VerificationAction;
        type: VerificationStepType;
        endpoint: string;
        payloads: {
            request: string;
            response: string;
        };
    }>;
};
interface IVerificationPartner<ApiKeyType = unknown> extends IBaseModel {
    name: string;
    integrationType: IntegrationType;
    apiKeys: string | ApiKeyType;
    status: ActiveOrInactive;
    baseUrl?: string;
    docsUrl?: string;
    webhookUrl?: string;
    processFlows: Array<VerificationFlow>;
}
interface IVerificationApplication extends IBaseModel {
    applicant: string;
    applicantType: VerificationApplicantType;
    applications: Array<{
        entity: VerifiableEntity;
        partner: {
            id: string;
            processFlowSnapshot: string;
        };
        status: VerificationApplicationStatus;
        steps: {
            index: number;
            request: string;
            response: string;
            status: VerificationApplicationStatus;
        };
    }>;
}

declare enum BusinessRegistrationType {
    businessName = "business-name",
    privateOrPublicLtd = "private-public-ltd",
    incorporatedTrustees = "incorporated-trustees"
}
interface IBusinessDirector extends IBaseModel {
    country: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    residentialAddress: string;
    hasVerifiedIdentity: boolean;
}
interface IBusinessProfile<T = unknown> extends IBaseModel {
    customer: string;
    registration: {
        name: string;
        number: string;
        country: string;
        isVerified: boolean;
        date: Date;
        type: BusinessRegistrationType;
    };
    creatorIsADirector: boolean;
    agreedToKyc: boolean;
    hasVerifiedDirector: boolean;
    addresses: Array<IAddress>;
    directors: Array<IBusinessDirector>;
    pendingVerifications: Array<IVerification>;
    metadata?: T;
}

interface IInitiateVerificationPayload {
    entity: VerifiableEntity;
    applicant: VerificationApplicantType;
    applicantId?: string;
}
interface IInitiateVerificationResponse {
    link: string;
}
declare const InitiateVerificationEndpoint: Endpoint;

interface IUpdateProfilePayload {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}
interface IUpdateAddressPayload {
    country: string;
    state: string;
    city: string;
    postalCode: string;
    address: string;
    utilityBill: string;
}
interface IUpdateAddressResponse {
    customer: Partial<IUser>;
}
interface IUpdateProfileResponse {
    customer: Partial<IUser>;
}
declare const UpdateProfileEndpoint: Endpoint;
declare const UpdateAddressEndpoint: Endpoint;
declare const RetrieveProfileEndpoint: Endpoint;

interface IBusinessDirectorDetails {
    country: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: string;
}
interface ICreateBusinessPayload {
    registration: {
        type: BusinessRegistrationType;
        number: string;
        date: Date;
        country: string;
        name: string;
    };
    agreedToKyc: boolean;
}
interface ICreateBusinessDirectorPayload {
    creatorIsADirector: boolean;
    directorDetails?: IBusinessDirectorDetails;
}
interface ICreateBusinessAddressPayload extends IUpdateAddressPayload {
}
interface IBusinessResponse {
    business: IBusinessProfile;
}
interface IBusinessDirectorResponse {
    director: IBusinessDirector;
}
declare const CreateBusinessEndpoint: Endpoint;
declare const FetchBusinessEndpoint: Endpoint;
declare const CreateBusinessDirectorEndpoint: Endpoint;
declare const CreateBusinessAddressEndpoint: Endpoint;

interface IBaseModel {
    _id?: string;
    _deletedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

interface IPermission extends IBaseModel {
    slug: string;
    name: string;
}

interface IRole extends IBaseModel {
    name: string;
    permissions: Array<IPermission> | Array<string>;
    creator: IUser | string;
}

interface IAdminRoleMatrix extends IBaseModel {
    roles: Array<IRole> | Array<string>;
    specialPermissions: Array<IPermission> | Array<string>;
    admin: IUser | string;
}

interface IAddress extends IBaseModel {
    location: {
        country: string;
        state: string;
        city: string;
        postalCode: string;
        address: string;
        utilityBill: string;
    };
    isVerified: boolean;
}
interface IVerification extends IBaseModel {
    job: string;
    entity: VerifiableEntity;
}
interface IPassword {
    token: string;
    hint: string;
    isActive: boolean;
}
declare enum UserStatus {
    Active = "active",
    Suspended = "suspended",
    Deactivated = "deactivated"
}
declare enum AuthStatus {
    loggedInWithout2fa = "logged-in-without-2fa",
    loggedInWith2fa = "logged-in-with-2fa",
    loggedOutByExpiredToken = "logged-out-by-expired-token",
    loggedOutManually = "logged-out-manually",
    neverLoggedIn = "never-logged-in"
}
interface IUser extends IBaseModel {
    fullName: string;
    invitedBy?: string;
    dateOfBirth?: Date;
    email: string;
    phone: string;
    status: UserStatus;
    roleMatrix: string | IAdminRoleMatrix;
    passwords?: Array<IPassword>;
    authStatus?: AuthStatus;
    authStatusLastChangedAt?: Date;
    passWordResetToken?: string;
    passWordResetTokenExpiry?: Date;
    twoFactorAuthSecret?: string;
    twoFactorAuthActive?: boolean;
    agreedToTerms: boolean;
    addresses: Array<IAddress>;
    hasVerifiedIdentity: boolean;
    hasVerifiedAddress: boolean;
    businesses: Array<string>;
    pendingVerifications: Array<IVerification>;
}
interface IUserMethods {
    updatePassword(newPassword: string, hint?: string): void;
    updateAuthStatus(status: AuthStatus): void;
    updatePasswordResetToken(token: string): void;
}

type ValuesOf<T extends any[]> = T[number];
interface ApiResponse<T> {
    statusCode: HttpStatusCode;
    error?: ScalexError;
    message: string;
    data: T;
}
declare enum TokenActions {
    Login = "login",
    DataAccess = "data-access",
    SetPassword = "set-password",
    Refresh = "refresh",
    ResetPassword = "reset-password"
}
declare const TokenExpiry: {
    [key in TokenActions]: string;
};
type DecodedJwtToken = {
    admin?: Partial<IUser>;
    action?: TokenActions;
};
type ScalexAuthenticatedRequest = Request & DecodedJwtToken;

declare enum Continents {
    AF = "Africa",
    AN = "Antarctica",
    AS = "Asia",
    EU = "Europe",
    NA = "North America",
    OC = "Oceania",
    SA = "South America"
}
interface ILanguage extends IBaseModel {
    name: string;
    shortCode: string;
    native: string;
}
interface IPhoneCode extends IBaseModel {
    code: string;
}
interface IFiatCurrency extends IBaseModel {
    currency: string;
}
interface ICountry extends IBaseModel {
    name: string;
    native: string;
    countryCode: string;
    phoneCodes: Array<IPhoneCode> | Array<string>;
    continent: Continents;
    capital: string;
    emoji: string;
    currencies: Array<IFiatCurrency> | Array<string>;
    languages: Array<ILanguage> | Array<string>;
}

declare enum ActiveOrInactive {
    active = "active",
    inactive = "inactive"
}
declare enum IntegrationType {
    SDK = "sdk",
    REST = "rest"
}
declare enum PassOrFail {
    passed = "passed",
    failed = "failed"
}
declare enum CurrencyType {
    Crypto = "crypto",
    Fiat = "fiat"
}
declare enum ResourceOwner {
    business = "business",
    individual = "individual"
}

interface IHasQueryIdPayload {
    id: string;
}

interface IBankAccount extends IBaseModel {
    owner: {
        type: ResourceOwner;
        id: string;
    };
    nuban: string;
    bank: string;
    currency?: string;
    status: ActiveOrInactive;
    meta: {
        accountName: string;
    };
}

declare enum PercentageChangeTimeframes {
    _1h = "_1h",
    _1d = "_1d",
    _1w = "_1w"
}
interface IPercentageChangeTimeframes {
    timeframe: PercentageChangeTimeframes;
    value: number;
}
interface IRate extends IBaseModel {
    id: string;
    rate: number;
    percentageChange: Array<IPercentageChangeTimeframes>;
    type: CurrencyType;
}

declare enum CrytpoProviders {
    shyft = "shyft",
    liminal = "liminal",
    bitnob = "bitnob"
}
declare enum TransactionType {
    onramp = "onramp",
    offramp = "offramp",
    transfer = "transfer",
    deposit = "deposit"
}
declare enum TransactionStatus {
    initiated = "initiated",
    awaitingConsumation = "awaiting-consumation",
    processing = "processing",
    successful = "successful",
    failed = "failed",
    expired = "expired",
    cancelled = "cancelled"
}
type ICurrencyAndAmount = {
    currencyType: CurrencyType;
    currency: {
        id: string;
        networkId?: string;
        chainId?: string;
    };
    amount: number;
};
type ITransactionRecipient = {
    type?: ResourceOwner;
    id?: string;
    isInternal: boolean;
    address?: string;
    addressPassword?: string;
    bankAccount?: IBankAccount;
};
interface ITransaction extends IBaseModel {
    reference: string;
    initiator?: ITransactionRecipient;
    type: TransactionType;
    status: TransactionStatus;
    volume: {
        initiated?: ICurrencyAndAmount;
        toBeConsumated?: ICurrencyAndAmount;
        consumated?: ICurrencyAndAmount;
    };
    hash: string;
    recipient: ITransactionRecipient;
    product: string;
    fee: {
        id?: string;
        charge: ICurrencyAndAmount;
    };
    meta: {
        revenue?: string;
        snapshots?: {
            rates?: {
                start?: {
                    currencyToUsdt: IRate;
                    currencyToRequest?: IRate;
                    usdtToNaira: IRate;
                };
                end?: {
                    currencyToUsdt: IRate;
                    currencyToRequest?: IRate;
                    usdtToNaira: IRate;
                };
            };
            fees?: unknown;
        };
        productConfig?: unknown;
        ledgerBalance: {
            before: number;
            after: number;
        };
        thirdParty?: {
            provider?: CrytpoProviders;
            reference?: string;
        };
    };
}

interface IBank extends IBaseModel {
    name: string;
    shortName: string;
    logo: string;
    codes: {
        payaza?: string;
        bani?: string;
        paga?: string;
        polaris?: string;
    };
}

declare enum LpPaymentMethod {
    Crypto = "Crypto",
    Bank = "Bank"
}
declare enum LpFiatCurrencyNetwork {
    Local = "LOCAL"
}
interface LpApiKeys {
    secretKey: string;
    staticUrl: string;
}
declare enum LpProviders {
    XendBridge = "XendBridge"
}

interface iNetwork {
    id: string;
    isActive?: boolean;
}
declare enum CoinSymbols {
    USDT = "USDT",
    USDC = "USDC",
    BTC = "BTC"
}
declare const CoinFulNames: Record<CoinSymbols, string>;
type CoinFulNamesTypes = keyof typeof CoinFulNames;
interface ICoin extends IBaseModel {
    symbol: string;
    fullName?: string;
    logo: string;
    isActive?: boolean;
    alias: {
        [K in keyof typeof LpProviders]?: string;
    };
    rates?: Array<IRate> | Array<string>;
    networks: Array<iNetwork> | Array<string>;
}

interface IFiat {
    symbol: string;
    abbr: string;
    shortName: string;
    fullName: string;
    logo: string;
    rates: Array<IRate> | Array<string>;
    isActive: boolean;
    country: ICountry | string;
}
declare enum AssetStatus {
    Active = "active",
    Suspended = "suspended",
    Locked = "locked",
    Destroyed = "destroyed"
}
interface Nuban {
    accountNumber: string;
    provider: string;
    bank: string;
    isActive: boolean;
}
interface IFiatWallet {
    customerId: string;
    fiatId: string;
    ledgerBalance: number;
    lockedBalance: number;
    status: AssetStatus;
    nuban: Nuban;
}
interface FiatFunctions {
    name: string;
    provider: string;
    product: string;
    isActive: boolean;
}
declare enum FiatProviders {
    Paga = "Paga",
    Payaza = "Payaza",
    Polaris = "Polaris",
    Bani = "Bani"
}
interface IFiatDependencyApiKeys {
    [provider: string]: {
        apiKey: string;
        secretKey?: string;
        pin?: string;
        accountReference?: string;
        hmac?: string;
        staticUrl?: string;
        tribe_account_ref?: string;
        access_token?: string;
    };
}

interface IRetrieveCryptoTokensResponse {
    coins: Array<ICoin>;
}
declare const RetrieveCryptoTokensEndpoint: Endpoint;

interface IRetrieveFiatCurrenciesResponse {
    currencies: Array<IFiat>;
}
declare const RetrieveFiatCurrenciesEndpoint: Endpoint;

interface IRetrieveTransactionPayload {
    ref?: string;
    status?: TransactionStatus;
    type?: TransactionType;
    product?: string;
    hash?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    page?: number;
}
interface IRetrieveTransactionResponse {
    paginatedData: Array<ITransaction>;
    meta: {
        page: number;
        limit: number;
        totalPages: number;
        totalDataCount: number;
    };
}
declare const RetrieveTransactionsEndpoint: Endpoint;

interface IRetrieveBankListsPayload {
    id?: string;
    name?: string;
    shortName?: string;
    payazaCode?: string;
    baniCode?: string;
    pagaCode?: string;
    polarisCode?: string;
}
interface IRetrieveBankListsResponse {
    banks: Array<Partial<IBank>>;
}
declare const RetrieveBankListsEndpoint: Endpoint;
interface IResolveBankAccountInfoPayload {
    bankCode: string;
    accountNumber: string;
    currency: string;
    product: string;
}
interface IResolveBankAccountInfoResponse {
    bank: IBank;
}
declare const ResolveBankAccountInfoEndpoint: Endpoint;

interface IRetrieveFiatWalletPayload {
    currency: string;
    product: string;
    countryCode?: string;
    holder: {
        name: string;
        email: string;
        phone?: string;
    };
}
interface IRetrieveFiatWalletResponse {
    nuban: IFiatWallet;
}
declare const RetrieveFiatWalletEndpoint: Endpoint;
interface IRetrieveCryptoWalletAddressPayload {
    coin: string;
    network: number;
}
interface IRetrieveCryptoWalletAddressResponse {
    address: string;
    addressType: string;
}
declare const RetrieveCryptoWalletAddressEndpoint: Endpoint;

declare enum JobStatus {
    initiated = "initiated",
    pending = "pending",
    completed = "completed",
    failed = "failed"
}
declare enum JobTask {
    kyc = "kyc",
    kyb = "kyb"
}
declare enum JobClientType {
    merchant = "merchant",
    customer = "customer",
    business = "business",
    businessDirector = "business-director",
    admin = "admin",
    system = "system"
}
interface IJob<T = unknown> extends IBaseModel {
    status: JobStatus;
    client: {
        type: JobClientType;
        id?: string;
    };
    reports: Array<string>;
    description: string;
    task: JobTask;
    metadata: T;
}

interface IViewJobPayload {
    jobId: string;
}
interface IJobResponse<T> {
    job: IJob<T>;
}
declare const FetchJobEndpoint: Endpoint;

interface IRetrieveCountriesResponse {
    countries: Array<Partial<ICountry>>;
}
declare const RetrieveCountriesEndpoint: Endpoint;

interface ScalexSuccessResponse<T> {
    statusCode?: HttpStatusCode;
    message?: string;
    data?: T;
}

declare class ScalexCustomersSdk {
    protected apiUrl: string;
    constructor(apiUrl: string);
    requestOtpToRegister(payload: IRequestOtpToRegisterPayload): Promise<ScalexSuccessResponse<IRequestOtpToRegisterResponse>>;
    verifyOtpAndCreatePassword(payload: IVerifyOtpAndCreatePasswordPayload, authToken: string): Promise<ScalexSuccessResponse<IVerifyOtpAndCreatePasswordResponse>>;
    initiate2faRegistration(authToken: string): Promise<ScalexSuccessResponse<IInitiate2faResponse>>;
    verify2faToken(payload: IVerify2faTokenPayload, authToken: string): Promise<ScalexSuccessResponse<ITokenWithUserResponse>>;
    requestPasswordReset(payload: IRequestPasswordResetPayload): Promise<ScalexSuccessResponse<IRequestPasswordResetResponse>>;
    resetPassword(payload: IResetPasswordPayload, authToken: string): Promise<ScalexSuccessResponse<null>>;
    requestOtpToLogin(payload: IRequestOtpForLoginPayload): Promise<ScalexSuccessResponse<ILoginResponse>>;
    verifyOtpAndPasswordForLogin(payload: IVerifyOtpAndPasswordForLoginPayload, authToken: string): Promise<ScalexSuccessResponse<ITokenWithUserResponse>>;
    verify2faForLogin(payload: IVerify2faForLoginPayload, authToken: string): Promise<ScalexSuccessResponse<ILoginResponse>>;
    updateProfile(payload: IUpdateProfilePayload, authToken: string): Promise<ScalexSuccessResponse<IUpdateProfileResponse>>;
    retrieveProfile(authToken: string): Promise<ScalexSuccessResponse<IUpdateProfileResponse>>;
    initiateVerification(payload: IInitiateVerificationPayload, authToken: string): Promise<ScalexSuccessResponse<IJobResponse<IInitiateVerificationResponse>>>;
    updateAddress(payload: IUpdateAddressPayload, authToken: string): Promise<ScalexSuccessResponse<IUpdateAddressResponse>>;
    createBusiness(payload: ICreateBusinessPayload, authToken: string): Promise<ScalexSuccessResponse<IBusinessResponse>>;
    createBusinessDirector(payload: ICreateBusinessDirectorPayload, businessId: string, authToken: string): Promise<ScalexSuccessResponse<IBusinessDirectorResponse>>;
    createBusinessAddress(payload: ICreateBusinessAddressPayload, businessId: string, authToken: string): Promise<ScalexSuccessResponse<IBusinessResponse>>;
    retrieveBusiness(businessId: string, authToken: string): Promise<ScalexSuccessResponse<IBusinessProfile>>;
}

declare class ScalexUtilsSdk {
    protected apiUrl: string;
    constructor(apiUrl: string);
    retrieveCountries(): Promise<ScalexSuccessResponse<IRetrieveCountriesResponse>>;
    fetchJob(jobId: string, authToken: string): Promise<ScalexSuccessResponse<IJobResponse<unknown>>>;
}

declare class AssetsModule {
    protected apiUrl: string;
    constructor(apiUrl: string);
    retrieveCryptoTokens(authToken: string): Promise<ScalexSuccessResponse<IRetrieveCryptoTokensResponse>>;
    retrieveFiatCurrencies(authToken: string): Promise<ScalexSuccessResponse<IRetrieveFiatCurrenciesResponse>>;
}

declare class BanksModule {
    protected apiUrl: string;
    constructor(apiUrl: string);
    retrieveBankLists(authToken: string, payload?: IRetrieveBankListsPayload): Promise<ScalexSuccessResponse<IRetrieveBankListsResponse>>;
    resolveBankAccount(payload: IResolveBankAccountInfoPayload, authToken: string): Promise<ScalexSuccessResponse<IResolveBankAccountInfoResponse>>;
}

declare class TransactionsModule {
    protected apiUrl: string;
    constructor(apiUrl: string);
    retrieveDeposits(payload: IRetrieveTransactionPayload, authToken: string): Promise<ScalexSuccessResponse<IRetrieveTransactionResponse>>;
    retrieveWithdrawals(payload: IRetrieveTransactionPayload, authToken: string): Promise<ScalexSuccessResponse<IRetrieveTransactionResponse>>;
}

declare class UtilsModule {
    protected apiUrl: string;
    constructor(apiUrl: string);
}

declare class WalletsModule {
    protected apiUrl: string;
    constructor(apiUrl: string);
    retrieveFiatWallet(payload: IRetrieveFiatWalletPayload, authToken: string): Promise<ScalexSuccessResponse<IRetrieveFiatWalletResponse>>;
    retrieveCryptoWallet(payload: IRetrieveCryptoWalletAddressPayload, authToken: string): Promise<ScalexSuccessResponse<IRetrieveCryptoWalletAddressResponse>>;
}

declare class ScalexTransactionsSdk {
    protected apiUrl: string;
    readonly assets: AssetsModule;
    readonly banks: BanksModule;
    readonly utils: UtilsModule;
    readonly wallets: WalletsModule;
    readonly transactions: TransactionsModule;
    constructor(apiUrl: string);
}

declare enum ScalexInternalEnvironments {
    local = "local",
    dev = "dev",
    prod = "prod"
}
declare enum ScalexInternalApiVersions {
    v1 = "/v1"
}
declare class ScalexInternalAPI {
    private readonly apiUrl;
    customers: ScalexCustomersSdk;
    transaction: ScalexTransactionsSdk;
    utils: ScalexUtilsSdk;
    constructor(environment?: ScalexInternalEnvironments, version?: ScalexInternalApiVersions);
}

declare const socketChannelsAndEvents: {
    jobs: {
        channelName: string;
        events: {
            completed: string;
        };
    };
};

export { ActiveOrInactive, type ApiResponse, AssetStatus, AuthStatus, BusinessRegistrationType, CoinFulNames, type CoinFulNamesTypes, CoinSymbols, Continents, CreateBusinessAddressEndpoint, CreateBusinessDirectorEndpoint, CreateBusinessEndpoint, CrytpoProviders, CurrencyType, type DecodedJwtToken, type Endpoint, type Endpoints, FetchBusinessEndpoint, FetchJobEndpoint, type FiatFunctions, FiatProviders, HttpMethods, type IAddress, type IAdminRoleMatrix, type IBank, type IBankAccount, type IBaseModel, type IBusinessDirector, type IBusinessDirectorDetails, type IBusinessDirectorResponse, type IBusinessProfile, type IBusinessResponse, type ICoin, type ICountry, type ICreateBusinessAddressPayload, type ICreateBusinessDirectorPayload, type ICreateBusinessPayload, type ICurrencyAndAmount, type IFiat, type IFiatCurrency, type IFiatDependencyApiKeys, type IFiatWallet, type IHasQueryIdPayload, type IInitiate2faResponse, type IInitiateVerificationPayload, type IInitiateVerificationResponse, type IJob, type IJobResponse, type ILanguage, type ILoginResponse, type IPassword, type IPermission, type IPhoneCode, type IRequestOtpForLoginPayload, type IRequestOtpToRegisterPayload, type IRequestOtpToRegisterResponse, type IRequestPasswordResetPayload, type IRequestPasswordResetResponse, type IResetPasswordPayload, type IResolveBankAccountInfoPayload, type IResolveBankAccountInfoResponse, type IRetrieveBankListsPayload, type IRetrieveBankListsResponse, type IRetrieveCountriesResponse, type IRetrieveCryptoTokensResponse, type IRetrieveCryptoWalletAddressPayload, type IRetrieveCryptoWalletAddressResponse, type IRetrieveFiatCurrenciesResponse, type IRetrieveFiatWalletPayload, type IRetrieveFiatWalletResponse, type IRetrieveTransactionPayload, type IRetrieveTransactionResponse, type IRole, type ITokenWithUserResponse, type ITransaction, type ITransactionRecipient, type IUpdateAddressPayload, type IUpdateAddressResponse, type IUpdateProfilePayload, type IUpdateProfileResponse, type IUser, type IUserMethods, type IVerification, type IVerificationApplication, type IVerificationPartner, type IVerify2faForLoginPayload, type IVerify2faTokenPayload, type IVerifyOtpAndCreatePasswordPayload, type IVerifyOtpAndCreatePasswordResponse, type IVerifyOtpAndPasswordForLoginPayload, type IViewJobPayload, Initiate2faEndpoint, InitiateVerificationEndpoint, IntegrationType, JobClientType, JobStatus, JobTask, type LpApiKeys, LpFiatCurrencyNetwork, LpPaymentMethod, LpProviders, type Nuban, PassOrFail, RequestOtpForLoginEndpoint, RequestOtpToRegisterEndpoint, RequestPasswordResetEndpoint, ResetPasswordEndpoint, ResolveBankAccountInfoEndpoint, ResourceOwner, RetrieveBankListsEndpoint, RetrieveCountriesEndpoint, RetrieveCryptoTokensEndpoint, RetrieveCryptoWalletAddressEndpoint, RetrieveFiatCurrenciesEndpoint, RetrieveFiatWalletEndpoint, RetrieveProfileEndpoint, RetrieveTransactionsEndpoint, type ScalexAuthenticatedRequest, type ScalexError, ScalexInternalAPI, ScalexInternalApiVersions, ScalexInternalEnvironments, TokenActions, TokenExpiry, TransactionStatus, TransactionType, UpdateAddressEndpoint, UpdateProfileEndpoint, UserStatus, type ValuesOf, VerifiableEntity, VerificationAction, VerificationApplicantType, VerificationApplicationStatus, type VerificationFlow, VerificationRequirementStatus, type VerificationResult, VerificationStepType, Verify2faEndpoint, Verify2faForLoginEndpoint, VerifyOtpAndCreatePasswordEndpoint, VerifyOtpAndPasswordForLoginEndpoint, type iNetwork, socketChannelsAndEvents };

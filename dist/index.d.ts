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

interface IHasQueryIdPayload {
    id: string;
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

type Nuban = {
    nuban: string;
    bank: string;
    name: string;
};
declare enum TransactionType {
    onramp = "onramp",
    offramp = "offramp",
    transfer = "transfer"
}
declare enum TransactionStatus {
    initiated = "initiated",
    processing = "processing",
    completed = "completed",
    failed = "failed",
    expired = "expired",
    cancelled = "cancelled"
}
type CurrencyAndAmount = {
    currencyType: CurrencyType;
    currency: {
        id: string;
        networkId?: string;
    };
    amount: number;
};
type TransactionRecipient = {
    id: string;
    isInternal: boolean;
    address?: string;
    bankAccount?: Nuban;
};
interface ITransaction extends IBaseModel {
    reference: string;
    initiator: string;
    type: TransactionType;
    status: TransactionStatus;
    amount: CurrencyAndAmount;
    request: CurrencyAndAmount;
    recipient: TransactionRecipient;
    product: string;
    fee: {
        id: string;
        charge: CurrencyAndAmount;
    };
    meta: {
        rateSnapshots: {
            currencyToUsdt: IRate;
            currencyToRequest: IRate;
            usdtToNaira: IRate;
        };
        productConfig: unknown;
        ledgerBalance: {
            before: number;
            after: number;
        };
    };
}

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

export { ActiveOrInactive, type ApiResponse, AuthStatus, BusinessRegistrationType, Continents, CreateBusinessAddressEndpoint, CreateBusinessDirectorEndpoint, CreateBusinessEndpoint, type CurrencyAndAmount, CurrencyType, type DecodedJwtToken, type Endpoint, type Endpoints, FetchBusinessEndpoint, FetchJobEndpoint, HttpMethods, type IAddress, type IAdminRoleMatrix, type IBaseModel, type IBusinessDirector, type IBusinessDirectorDetails, type IBusinessDirectorResponse, type IBusinessProfile, type IBusinessResponse, type ICountry, type ICreateBusinessAddressPayload, type ICreateBusinessDirectorPayload, type ICreateBusinessPayload, type IFiatCurrency, type IHasQueryIdPayload, type IInitiate2faResponse, type IInitiateVerificationPayload, type IInitiateVerificationResponse, type IJob, type IJobResponse, type ILanguage, type ILoginResponse, type IPassword, type IPermission, type IPhoneCode, type IRequestOtpForLoginPayload, type IRequestOtpToRegisterPayload, type IRequestOtpToRegisterResponse, type IRequestPasswordResetPayload, type IRequestPasswordResetResponse, type IResetPasswordPayload, type IRetrieveCountriesResponse, type IRole, type ITokenWithUserResponse, type ITransaction, type IUpdateAddressPayload, type IUpdateAddressResponse, type IUpdateProfilePayload, type IUpdateProfileResponse, type IUser, type IUserMethods, type IVerification, type IVerificationApplication, type IVerificationPartner, type IVerify2faForLoginPayload, type IVerify2faTokenPayload, type IVerifyOtpAndCreatePasswordPayload, type IVerifyOtpAndCreatePasswordResponse, type IVerifyOtpAndPasswordForLoginPayload, type IViewJobPayload, Initiate2faEndpoint, InitiateVerificationEndpoint, IntegrationType, JobClientType, JobStatus, JobTask, type Nuban, PassOrFail, RequestOtpForLoginEndpoint, RequestOtpToRegisterEndpoint, RequestPasswordResetEndpoint, ResetPasswordEndpoint, RetrieveCountriesEndpoint, RetrieveProfileEndpoint, type ScalexAuthenticatedRequest, type ScalexError, ScalexInternalAPI, ScalexInternalApiVersions, ScalexInternalEnvironments, TokenActions, TokenExpiry, type TransactionRecipient, TransactionStatus, TransactionType, UpdateAddressEndpoint, UpdateProfileEndpoint, UserStatus, type ValuesOf, VerifiableEntity, VerificationAction, VerificationApplicantType, VerificationApplicationStatus, type VerificationFlow, VerificationRequirementStatus, type VerificationResult, VerificationStepType, Verify2faEndpoint, Verify2faForLoginEndpoint, VerifyOtpAndCreatePasswordEndpoint, VerifyOtpAndPasswordForLoginEndpoint, socketChannelsAndEvents };

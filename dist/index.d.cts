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
    business = "business"
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

interface IInitiateVerificationPayload {
    entity: VerifiableEntity;
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
interface ICreateBusinessPayload extends IBusiness {
}
interface IUpdateAddressPayload extends IAddress {
}
interface IUpdateAddressResponse {
    customer: Partial<IUser>;
}
interface ICreateBusinessResponse {
    customer: Partial<IUser>;
}
interface IUpdateProfileResponse {
    customer: Partial<IUser>;
}
declare const UpdateProfileEndpoint: Endpoint;
declare const CreateBusinessEndpoint: Endpoint;
declare const UpdateAddressEndpoint: Endpoint;
declare const RetrieveProfileEndpoint: Endpoint;

interface IRetrieveCountriesResponse {
    countries: Array<Partial<ICountry>>;
}
declare const RetrieveCountriesEndpoint: Endpoint;

interface IBusiness extends IBaseModel {
    country: string;
    registration: {
        name: string;
        number: string;
        date: Date;
        agreedToKyc: boolean;
    };
}
interface IAddress extends IBaseModel {
    country: string;
    state: string;
    city: string;
    postalCode: string;
    address: string;
    proofOfAddress: string;
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
    verifications: Array<{
        entity: VerifiableEntity;
        references: {
            linkId: string;
            jobId: string;
        };
        status: VerificationApplicationStatus;
    }>;
    address: IAddress;
    businesses: Array<IBusiness>;
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
interface ICountry {
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
    initiateVerification(payload: IInitiateVerificationPayload, authToken: string): Promise<ScalexSuccessResponse<IInitiateVerificationResponse>>;
    updateAddress(payload: IUpdateAddressPayload, authToken: string): Promise<ScalexSuccessResponse<IUpdateAddressResponse>>;
    createBusiness(payload: ICreateBusinessPayload, authToken: string): Promise<ScalexSuccessResponse<ICreateBusinessResponse>>;
    check401Error(): Promise<number>;
    retrieveCountries(authToken: string): Promise<ScalexSuccessResponse<IRetrieveCountriesResponse>>;
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
    constructor(environment?: ScalexInternalEnvironments, version?: ScalexInternalApiVersions);
}

declare const socketChannelsAndEvents: {
    verification: {
        channelName: string;
        events: {
            completedVerification: string;
        };
    };
};

export { ActiveOrInactive, type ApiResponse, AuthStatus, Continents, CreateBusinessEndpoint, type DecodedJwtToken, type Endpoint, type Endpoints, HttpMethods, type IAddress, type IAdminRoleMatrix, type IBaseModel, type IBusiness, type ICountry, type ICreateBusinessPayload, type ICreateBusinessResponse, type IFiatCurrency, type IInitiate2faResponse, type IInitiateVerificationPayload, type IInitiateVerificationResponse, type ILanguage, type ILoginResponse, type IPassword, type IPermission, type IPhoneCode, type IRequestOtpForLoginPayload, type IRequestOtpToRegisterPayload, type IRequestOtpToRegisterResponse, type IRequestPasswordResetPayload, type IRequestPasswordResetResponse, type IResetPasswordPayload, type IRetrieveCountriesResponse, type IRole, type ITokenWithUserResponse, type IUpdateAddressPayload, type IUpdateAddressResponse, type IUpdateProfilePayload, type IUpdateProfileResponse, type IUser, type IUserMethods, type IVerificationApplication, type IVerificationPartner, type IVerify2faForLoginPayload, type IVerify2faTokenPayload, type IVerifyOtpAndCreatePasswordPayload, type IVerifyOtpAndCreatePasswordResponse, type IVerifyOtpAndPasswordForLoginPayload, Initiate2faEndpoint, InitiateVerificationEndpoint, IntegrationType, PassOrFail, RequestOtpForLoginEndpoint, RequestOtpToRegisterEndpoint, RequestPasswordResetEndpoint, ResetPasswordEndpoint, RetrieveCountriesEndpoint, RetrieveProfileEndpoint, type ScalexAuthenticatedRequest, type ScalexError, ScalexInternalAPI, ScalexInternalApiVersions, ScalexInternalEnvironments, TokenActions, TokenExpiry, UpdateAddressEndpoint, UpdateProfileEndpoint, UserStatus, type ValuesOf, VerifiableEntity, VerificationAction, VerificationApplicantType, VerificationApplicationStatus, type VerificationFlow, VerificationRequirementStatus, type VerificationResult, VerificationStepType, Verify2faEndpoint, Verify2faForLoginEndpoint, VerifyOtpAndCreatePasswordEndpoint, VerifyOtpAndPasswordForLoginEndpoint, socketChannelsAndEvents };

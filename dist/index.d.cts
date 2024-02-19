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
    invitedBy: string;
    email: string;
    status: UserStatus;
    roleMatrix: string | IAdminRoleMatrix;
    passwords?: Array<IPassword>;
    authStatus?: AuthStatus;
    authStatusLastChangedAt?: Date;
    passWordResetToken?: string;
    passWordResetTokenExpiry?: Date;
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
    verify2faToken(payload: IVerify2faTokenPayload, authToken: string): Promise<ScalexSuccessResponse<null>>;
    requestPasswordReset(payload: IRequestPasswordResetPayload): Promise<ScalexSuccessResponse<IRequestPasswordResetResponse>>;
    resetPassword(payload: IResetPasswordPayload, authToken: string): Promise<ScalexSuccessResponse<null>>;
    requestOtpToLogin(payload: IRequestOtpForLoginPayload): Promise<ScalexSuccessResponse<ILoginResponse>>;
    verifyOtpAndPasswordForLogin(payload: IVerifyOtpAndPasswordForLoginPayload, authToken: string): Promise<ScalexSuccessResponse<ITokenWithUserResponse>>;
    verify2faForLogin(payload: IVerify2faForLoginPayload, authToken: string): Promise<ScalexSuccessResponse<ILoginResponse>>;
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
    private apiUrl;
    customers: ScalexCustomersSdk;
    constructor(environment?: ScalexInternalEnvironments, version?: ScalexInternalApiVersions);
}

export { type ApiResponse, type DecodedJwtToken, type Endpoint, type Endpoints, HttpMethods, type IInitiate2faResponse, type ILoginResponse, type IRequestOtpForLoginPayload, type IRequestOtpToRegisterPayload, type IRequestOtpToRegisterResponse, type IRequestPasswordResetPayload, type IRequestPasswordResetResponse, type IResetPasswordPayload, type ITokenWithUserResponse, type IVerify2faForLoginPayload, type IVerify2faTokenPayload, type IVerifyOtpAndCreatePasswordPayload, type IVerifyOtpAndCreatePasswordResponse, type IVerifyOtpAndPasswordForLoginPayload, Initiate2faEndpoint, RequestOtpForLoginEndpoint, RequestOtpToRegisterEndpoint, RequestPasswordResetEndpoint, ResetPasswordEndpoint, type ScalexAuthenticatedRequest, type ScalexError, ScalexInternalAPI, ScalexInternalApiVersions, ScalexInternalEnvironments, TokenActions, TokenExpiry, type ValuesOf, Verify2faEndpoint, Verify2faForLoginEndpoint, VerifyOtpAndCreatePasswordEndpoint, VerifyOtpAndPasswordForLoginEndpoint };

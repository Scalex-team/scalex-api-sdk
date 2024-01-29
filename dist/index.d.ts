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

interface ScalexSuccessResponse<T> {
    statusCode?: HttpStatusCode;
    message?: string;
    data?: T;
}

declare class ScalexCustomersSdk {
    protected apiUrl: string;
    constructor(apiUrl: string);
    requestOtpToRegister(payload: IRequestOtpToRegisterPayload): Promise<ScalexSuccessResponse<IRequestOtpToRegisterResponse>>;
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

export { type ApiResponse, type DecodedJwtToken, type Endpoint, type Endpoints, HttpMethods, type IRequestOtpToRegisterPayload, type IRequestOtpToRegisterResponse, RequestOtpToRegisterEndpoint, type ScalexAuthenticatedRequest, type ScalexError, ScalexInternalAPI, ScalexInternalApiVersions, ScalexInternalEnvironments, TokenActions, TokenExpiry, type ValuesOf };

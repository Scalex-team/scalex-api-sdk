import {IBaseModel} from "../base.model";
import {IAdminRoleMatrix} from "./admin-role-matrix.interface";

export interface IAddress extends IBaseModel {
    location: {
        country: string;
        state: string;
        city: string;
        postalCode: string;
        address: string;
    },
    isVerified: boolean;
}

export interface IPassword {
    token: string;
    hint: string;
    isActive: boolean
}

export enum UserStatus {
    Active = 'active',
    Suspended = 'suspended',
    Deactivated = 'deactivated'
}

export enum AuthStatus {
    loggedInWithout2fa = 'logged-in-without-2fa',
    loggedInWith2fa = 'logged-in-with-2fa',
    loggedOutByExpiredToken = 'logged-out-by-expired-token',
    loggedOutManually = 'logged-out-manually',
    neverLoggedIn = 'never-logged-in'
}

export interface IUser extends IBaseModel {
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
    hasVerifiedBusiness: boolean;
    businesses: Array<string>
}

export interface IUserMethods {
    updatePassword(
        newPassword: string,
        hint?: string
    ): void;

    updateAuthStatus( status: AuthStatus ): void;
    updatePasswordResetToken( token: string ): void;
}

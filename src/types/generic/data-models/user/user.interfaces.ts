import {IBaseModel} from "../base.model";
import {IAdminRoleMatrix} from "./admin-role-matrix.interface";
import {VerifiableEntity, VerificationApplicationStatus} from "../../../customers";

export interface IBusiness extends IBaseModel {
    country: string;
    registration: {
        name: string;
        number: string;
        date: Date;
        agreedToKyc: boolean;
    }
}

export interface IAddress extends IBaseModel {
    country: string;
    state: string;
    city: string;
    postalCode: string;
    address: string;
    proofOfAddress: string;
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
    verifications: Array<{
        entity: VerifiableEntity,
        references: {
            linkId: string;
            jobId: string;
        }
        status: VerificationApplicationStatus
    }>
    address: IAddress;
    businesses: Array<IBusiness>
}

export interface IUserMethods {
    updatePassword(
        newPassword: string,
        hint?: string
    ): void;

    updateAuthStatus( status: AuthStatus ): void;

    updatePasswordResetToken( token: string ): void;
}
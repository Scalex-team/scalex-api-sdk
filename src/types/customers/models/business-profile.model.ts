import {IAddress, IBaseModel, IVerification} from "../../generic";

export enum BusinessRegistrationType {
    businessName = 'business-name',
    privateOrPublicLtd = 'private-public-ltd',
    incorporatedTrustees = 'incorporated-trustees'
}

export interface IBusinessDirector extends IBaseModel {
    country: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    residentialAddress: string;
    hasVerifiedIdentity: boolean;
}

export interface IBusinessProfile<T = unknown> extends IBaseModel {
    customer: string;
    registration: {
        name: string;
        number: string;
        country: string;
        isVerified: boolean;
        date: Date;
        type: BusinessRegistrationType;
    }
    creatorIsADirector: boolean;
    agreedToKyc: boolean;
    hasVerifiedDirector: boolean;
    addresses: Array<IAddress>;
    directors: Array<IBusinessDirector>;
    pendingVerifications: Array<IVerification>;
    metadata?: T
}

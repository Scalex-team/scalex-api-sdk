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
    verifications: Array<IVerification>;
}

export interface IBusinessProfile extends IBaseModel {
    registration: {
        name: string;
        number: string;
        country: string;
        date: Date;
        type: BusinessRegistrationType;
    }
    creatorIsADirector: boolean;
    agreedToKyc: boolean;
    addresses: Array<IAddress>
    directors: Array<IBusinessDirector>
    verifications: Array<IVerification>;
}

import {ActiveOrInactive, IBaseModel, IntegrationType, PassOrFail} from "../../generic";

export enum VerifiableEntity {
    governmentIssuedId = 'government-issued-id',
    utilityBill = 'utility-bill',
    businessRegistrationCertificate = 'business-registration-certificate',
    phoneNumber = 'phone-number'
}

export type VerificationResult = {
    entity: VerifiableEntity;
    status: PassOrFail
}

export enum VerificationApplicantType {
    individual = 'individual',
    business = 'business'
}

export enum VerificationAction {
    initiateJobWithPartner = 'initiate-job-with-partner',
    confirmJobStatusWithPartner = 'confirm-job-status-with-partner',
    updateLocalUserRecords = 'update-local-user-records'
}

export enum VerificationStepType {
    apiCall = 'api-call',
    webhook = 'webhook'
}

export enum VerificationRequirementStatus {
    one = 'one',
    all = 'all'
}

export enum VerificationApplicationStatus {
    cold = 'cold',
    inProgress = 'in-progress',
    expired = 'expired',
    filled = 'filled',
    failed = 'failed',
    successful = 'successful'
}

export type VerificationFlow = {
    entity: VerifiableEntity;
    status: ActiveOrInactive;
    applicantTypes: Array<VerificationApplicantType>
    steps: Array<{
        index: number;
        action: VerificationAction;
        type: VerificationStepType;
        endpoint: string;
        payloads: {
            request: string;
            response: string;
        }
    }>
}

export interface IVerificationPartner<ApiKeyType = unknown> extends IBaseModel {
    name: string;
    integrationType: IntegrationType
    apiKeys: string | ApiKeyType;
    status: ActiveOrInactive;

    baseUrl?: string;
    docsUrl?: string;
    webhookUrl?: string;

    processFlows: Array<VerificationFlow>;
}

export interface IVerificationApplication extends IBaseModel {
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
            status: VerificationApplicationStatus
        }
    }>
}
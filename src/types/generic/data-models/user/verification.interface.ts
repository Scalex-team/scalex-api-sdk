import {VerifiableEntity, VerificationApplicantType, VerificationApplicationStatus} from "../../../customers";
import {IBaseModel} from "../base.model";

export interface IVerification extends IBaseModel {
    entity: VerifiableEntity;
    applicant: VerificationApplicantType;
    references?: {
        linkId?: string;
        jobId?: string;
        uploadedDocument?: string;
    }
    status: VerificationApplicationStatus;
    metadata: unknown;
}

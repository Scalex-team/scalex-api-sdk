import { IBaseModel } from "../../generic";


export enum JobStatus {
  initiated = 'initiated',
  pending = 'pending',
  completed = 'completed',
  failed = 'failed'
}

export enum JobTask {
  bulkCustomerUpload = 'bulk-customer-upload',
  bulkProductUpload = 'bulk-product-upload'
}

export enum JobClientType {
  merchant = 'merchant',
  customer = 'customer',
  store = 'store',
  admin = 'admin',
  system = 'system'
}

export interface IJob<T = unknown> extends IBaseModel {
  status: JobStatus;
  client: {
    type: JobClientType;
    id?: string;
  }
  reports: Array<string>;
  description: string;
  task: JobTask;
  metadata: T;
}

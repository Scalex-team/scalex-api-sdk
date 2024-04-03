import { Endpoint, HttpMethods } from "../../generic";
import {IJob} from "../models";

export interface IViewJobPayload {
  jobId: string;
}

export interface IJobResponse<T> {
  job: IJob<T>
}

export const FetchJobEndpoint: Endpoint = {
	method: HttpMethods.Get,
	path: '/jobs',
	fullPath: '/jobs'
};

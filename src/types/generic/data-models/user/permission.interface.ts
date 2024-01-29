import { IBaseModel } from "../base.model";

export interface IPermission extends IBaseModel {
	slug: string;
	name: string;
}
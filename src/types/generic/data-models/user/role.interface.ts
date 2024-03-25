import { IBaseModel } from "../base.model";
import { IPermission } from "./permission.interface";
import { IUser } from "./user.interface";

export interface IRole extends IBaseModel {
	name: string;
	permissions: Array<IPermission> | Array<string>;
	creator: IUser | string
}
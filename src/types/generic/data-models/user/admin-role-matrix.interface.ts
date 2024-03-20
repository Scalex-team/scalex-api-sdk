import { IBaseModel } from "../base.model";
import { IPermission } from "./permission.interface";
import { IRole } from "./role.interface";
import { IUser } from "./user.interface";

export interface IAdminRoleMatrix extends IBaseModel {
	roles: Array<IRole> | Array<string>;
	specialPermissions: Array<IPermission> | Array<string>;
	admin: IUser | string
}
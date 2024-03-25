import { HttpStatusCode } from "axios";
import { ScalexError } from "./errors.interface";
import { IUser } from "./data-models/user/user.interface";

export type ValuesOf<T extends any[]> = T[number];
export interface ApiResponse<T> {
	statusCode: HttpStatusCode;
	error?: ScalexError;
	message: string;
	data: T
}

export enum TokenActions {
	Login = 'login',
	DataAccess = 'data-access',
	SetPassword = 'set-password',
	Refresh='refresh',
	ResetPassword='reset-password'
}

export const TokenExpiry: {
	[key in TokenActions]: string
} = {
	'set-password': '15m',
	'data-access': '3h',
	refresh: '1d',
	'reset-password': '15m',
	'login': '10m'
};

export type DecodedJwtToken = { admin?: Partial<IUser>, action?: TokenActions }
export type ScalexAuthenticatedRequest = Request & DecodedJwtToken
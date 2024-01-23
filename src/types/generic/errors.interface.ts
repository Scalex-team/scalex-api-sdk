import { HttpStatusCode } from "axios";

export interface ScalexError {
	code: string;
	statusCode: HttpStatusCode;
	message: string;
	recommendedActions?: Array<string>;
	description?: string;
};
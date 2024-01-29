import { AxiosError, HttpStatusCode } from 'axios';
import { ApiResponse, ScalexError } from '../types';

export interface ScalexSuccessResponse<T> {
	statusCode?: HttpStatusCode;
	message?: string;
	data?: T;
}

export function notifyClientOfSuccess<T>(
	payload: ScalexSuccessResponse<T> = {
		statusCode: HttpStatusCode.Ok,
		message: 'Your request was successful',
		data: {} as never,
	}
): ApiResponse<T> {
	return {
		statusCode: payload.statusCode ?? HttpStatusCode.Ok,
		message: payload.message as string ?? 'Your request was successful',
		data: payload.data as T,
	};
}

export function notifyClientOfFailure<T>(
	{
		data = {} as never,
		error,
	}: {
		data?: T;
		error: ScalexError | AxiosError
	}
): ApiResponse<T> {
	if ( error instanceof AxiosError ) {
		const scxError = error.response?.data as ScalexError;
		return {
			statusCode: scxError?.statusCode ?? 500,
			data,
			message: scxError?.message ?? 'Something went terribly wrong. Please contact support',
			error: scxError
		};
	} 
	return {
		statusCode: error?.statusCode ?? 500,
		data,
		message: error?.message ?? 'Something went terribly wrong. Please contact support',
		error,
	};

}
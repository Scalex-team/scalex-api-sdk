let __defProp = Object.defineProperty;
let __getOwnPropSymbols = Object.getOwnPropertySymbols;
let __hasOwnProp = Object.prototype.hasOwnProperty;
let __propIsEnum = Object.prototype.propertyIsEnumerable;
let __defNormalProp = ( obj, key, value ) => key in obj ? __defProp( obj, key, { enumerable: true, configurable: true, writable: true, value } ) : obj[key] = value;
let __spreadValues = ( a, b ) => {
	for ( var prop in b || ( b = {} ) )
		if ( __hasOwnProp.call( b, prop ) )
			__defNormalProp( a, prop, b[prop] );
	if ( __getOwnPropSymbols )
		for ( var prop of __getOwnPropSymbols( b ) ) {
			if ( __propIsEnum.call( b, prop ) )
				__defNormalProp( a, prop, b[prop] );
		}
	return a;
};
let __async = ( __this, __arguments, generator ) => {
	return new Promise( ( resolve, reject ) => {
		let fulfilled = ( value ) => {
			try {
				step( generator.next( value ) );
			} catch ( e ) {
				reject( e );
			}
		};
		let rejected = ( value ) => {
			try {
				step( generator.throw( value ) );
			} catch ( e ) {
				reject( e );
			}
		};
		var step = ( x ) => x.done ? resolve( x.value ) : Promise.resolve( x.value ).then( fulfilled, rejected );
		step( ( generator = generator.apply( __this, __arguments ) ).next() );
	} );
};

// src/functions/call-api.function.ts
import axios from "axios";

// src/functions/send-api-response.ts
import { AxiosError, HttpStatusCode } from "axios";
function notifyClientOfSuccess( payload = {
	statusCode: HttpStatusCode.Ok,
	message: "Your request was successful",
	data: {}
} ) {
	let _a, _b;
	return {
		statusCode: ( _a = payload.statusCode ) != null ? _a : HttpStatusCode.Ok,
		message: ( _b = payload.message ) != null ? _b : "Your request was successful",
		data: payload.data
	};
}
function notifyClientOfFailure( {
	data = {},
	error
} ) {
	let _a, _b, _c, _d, _e;
	if ( error instanceof AxiosError ) {
		const scxError = ( _a = error.response ) == null ? void 0 : _a.data;
		return {
			statusCode: ( _b = scxError == null ? void 0 : scxError.statusCode ) != null ? _b : 500,
			data,
			message: ( _c = scxError == null ? void 0 : scxError.message ) != null ? _c : "Something went terribly wrong. Please contact support",
			error: scxError
		};
	}
	return {
		statusCode: ( _d = error == null ? void 0 : error.statusCode ) != null ? _d : 500,
		data,
		message: ( _e = error == null ? void 0 : error.message ) != null ? _e : "Something went terribly wrong. Please contact support",
		error
	};
}

// src/functions/call-api.function.ts
let ScalexAuthHeaderName = "scalexadminauthorization";
let AuthorizationHeaderName = "Authorization";
function makeHttpRequest( _0 ) {
	return __async( this, arguments, function* ( {
		method,
		url,
		body,
		headers,
		query,
		params
	} ) {
		const aggregatedHeaders = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Headers": "content-type",
			"Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,DELETE,PATCH"
		};
		if ( headers ) {
			if ( headers[ScalexAuthHeaderName] ) {
				aggregatedHeaders[ScalexAuthHeaderName] = headers[ScalexAuthHeaderName];
			}
			if ( headers[AuthorizationHeaderName] ) {
				aggregatedHeaders[AuthorizationHeaderName] = headers[AuthorizationHeaderName];
			}
		}
		if ( params ) {
			params.forEach( ( p ) => {
				url += `/${p}`;
			} );
		}
		return axios( {
			method,
			url,
			data: body,
			headers: aggregatedHeaders,
			params: query
		} );
	} );
}
function callApi( requestParams ) {
	return __async( this, null, function* () {
		try {
			const response = yield makeHttpRequest( {
				method: requestParams.endpoint.method,
				body: requestParams.body,
				query: requestParams.query,
				headers: requestParams.headers,
				params: requestParams.params,
				url: `${requestParams.serviceUri}${requestParams.endpoint.fullPath}`
			} );
			return notifyClientOfSuccess( response.data );
		} catch ( e ) {
			throw notifyClientOfFailure( {
				error: e
			} );
		}
	} );
}
function setBearerToken( token ) {
	return {
		Authorization: `Bearer ${token}`
	};
}

// src/types/generic/endpoints.interface.ts
var HttpMethods = /* @__PURE__ */ ( ( HttpMethods2 ) => {
	HttpMethods2["Post"] = "POST";
	HttpMethods2["Put"] = "PUT";
	HttpMethods2["Get"] = "GET";
	HttpMethods2["Patch"] = "PATCH";
	HttpMethods2["Delete"] = "DELETE";
	return HttpMethods2;
} )( HttpMethods || {} );

// src/types/generic/api-response.type.ts
var TokenActions = /* @__PURE__ */ ( ( TokenActions2 ) => {
	TokenActions2["Login"] = "login";
	TokenActions2["DataAccess"] = "data-access";
	TokenActions2["SetPassword"] = "set-password";
	TokenActions2["Refresh"] = "refresh";
	TokenActions2["ResetPassword"] = "reset-password";
	return TokenActions2;
} )( TokenActions || {} );
let TokenExpiry = {
	"set-password": "15m",
	"data-access": "3h",
	refresh: "1d",
	"reset-password": "15m",
	"login": "10m"
};

// src/types/generic/data-models/user/user.interfaces.ts
var UserStatus = /* @__PURE__ */ ( ( UserStatus2 ) => {
	UserStatus2["Active"] = "active";
	UserStatus2["Suspended"] = "suspended";
	UserStatus2["Deactivated"] = "deactivated";
	return UserStatus2;
} )( UserStatus || {} );
var AuthStatus = /* @__PURE__ */ ( ( AuthStatus2 ) => {
	AuthStatus2["loggedInWithout2fa"] = "logged-in-without-2fa";
	AuthStatus2["loggedInWith2fa"] = "logged-in-with-2fa";
	AuthStatus2["loggedOutByExpiredToken"] = "logged-out-by-expired-token";
	AuthStatus2["loggedOutManually"] = "logged-out-manually";
	AuthStatus2["neverLoggedIn"] = "never-logged-in";
	return AuthStatus2;
} )( AuthStatus || {} );

// src/types/generic/data-models/enums/utility.enums.ts
var ActiveOrInactive = /* @__PURE__ */ ( ( ActiveOrInactive2 ) => {
	ActiveOrInactive2["active"] = "active";
	ActiveOrInactive2["inactive"] = "inactive";
	return ActiveOrInactive2;
} )( ActiveOrInactive || {} );
var IntegrationType = /* @__PURE__ */ ( ( IntegrationType2 ) => {
	IntegrationType2["SDK"] = "sdk";
	IntegrationType2["REST"] = "rest";
	return IntegrationType2;
} )( IntegrationType || {} );
var PassOrFail = /* @__PURE__ */ ( ( PassOrFail2 ) => {
	PassOrFail2["passed"] = "passed";
	PassOrFail2["failed"] = "failed";
	return PassOrFail2;
} )( PassOrFail || {} );
var CurrencyType = /* @__PURE__ */ ( ( CurrencyType2 ) => {
	CurrencyType2["Crypto"] = "crypto";
	CurrencyType2["Fiat"] = "fiat";
	return CurrencyType2;
} )( CurrencyType || {} );

// src/types/customers/endpoint-payloads/create-account.payloads.ts
let RequestOtpToRegisterEndpoint = {
	method: "POST" /* Post */,
	path: "/otps",
	fullPath: "/customers-auth/otps"
};
let VerifyOtpAndCreatePasswordEndpoint = {
	method: "POST" /* Post */,
	path: "/passwords",
	fullPath: "/customers-auth/passwords"
};
let Initiate2faEndpoint = {
	method: "POST" /* Post */,
	path: "/2fa",
	fullPath: "/customers-auth/2fa"
};
let Verify2faEndpoint = {
	method: "PATCH" /* Patch */,
	path: "/2fa",
	fullPath: "/customers-auth/2fa"
};

// src/types/customers/endpoint-payloads/account-recovery.payloads.ts
let RequestPasswordResetEndpoint = {
	method: "POST" /* Post */,
	path: "",
	fullPath: "/customers-account-recovery"
};
let ResetPasswordEndpoint = {
	method: "PATCH" /* Patch */,
	path: "",
	fullPath: "/customers-account-recovery"
};

// src/types/customers/endpoint-payloads/login.payloads.ts
let RequestOtpForLoginEndpoint = {
	method: "POST" /* Post */,
	path: "/login",
	fullPath: "/customers-auth/login"
};
let VerifyOtpAndPasswordForLoginEndpoint = {
	method: "PATCH" /* Patch */,
	path: "/login",
	fullPath: "/customers-auth/login"
};
let Verify2faForLoginEndpoint = {
	method: "PATCH" /* Patch */,
	path: "/login/2fa",
	fullPath: "/customers-auth/login/2fa"
};

// src/types/customers/endpoint-payloads/initiate-verification.payloads.ts
let InitiateVerificationEndpoint = {
	method: "POST" /* Post */,
	path: "/customer-verification",
	fullPath: "/customer-verification"
};

// src/types/customers/endpoint-payloads/profile.payloads.ts
let UpdateProfileEndpoint = {
	method: "PATCH" /* Patch */,
	path: "/customer-profile",
	fullPath: "/customer-profile"
};
let CreateBusinessEndpoint = {
	method: "POST" /* Post */,
	path: "/businesses",
	fullPath: "/businesses"
};
let UpdateAddressEndpoint = {
	method: "PATCH" /* Patch */,
	path: "/customer-address",
	fullPath: "/customer-address"
};
let RetrieveProfileEndpoint = {
	method: "GET" /* Get */,
	path: "/customer-profile",
	fullPath: "/customer-profile"
};

// src/types/customers/models/verification.models.ts
var VerifiableEntity = /* @__PURE__ */ ( ( VerifiableEntity2 ) => {
	VerifiableEntity2["governmentIssuedId"] = "government-issued-id";
	VerifiableEntity2["utilityBill"] = "utility-bill";
	VerifiableEntity2["businessRegistrationCertificate"] = "business-registration-certificate";
	VerifiableEntity2["phoneNumber"] = "phone-number";
	return VerifiableEntity2;
} )( VerifiableEntity || {} );
var VerificationApplicantType = /* @__PURE__ */ ( ( VerificationApplicantType2 ) => {
	VerificationApplicantType2["individual"] = "individual";
	VerificationApplicantType2["business"] = "business";
	return VerificationApplicantType2;
} )( VerificationApplicantType || {} );
var VerificationAction = /* @__PURE__ */ ( ( VerificationAction2 ) => {
	VerificationAction2["initiateJobWithPartner"] = "initiate-job-with-partner";
	VerificationAction2["confirmJobStatusWithPartner"] = "confirm-job-status-with-partner";
	VerificationAction2["updateLocalUserRecords"] = "update-local-user-records";
	return VerificationAction2;
} )( VerificationAction || {} );
var VerificationStepType = /* @__PURE__ */ ( ( VerificationStepType2 ) => {
	VerificationStepType2["apiCall"] = "api-call";
	VerificationStepType2["webhook"] = "webhook";
	return VerificationStepType2;
} )( VerificationStepType || {} );
var VerificationRequirementStatus = /* @__PURE__ */ ( ( VerificationRequirementStatus2 ) => {
	VerificationRequirementStatus2["one"] = "one";
	VerificationRequirementStatus2["all"] = "all";
	return VerificationRequirementStatus2;
} )( VerificationRequirementStatus || {} );
var VerificationApplicationStatus = /* @__PURE__ */ ( ( VerificationApplicationStatus2 ) => {
	VerificationApplicationStatus2["cold"] = "cold";
	VerificationApplicationStatus2["inProgress"] = "in-progress";
	VerificationApplicationStatus2["expired"] = "expired";
	VerificationApplicationStatus2["filled"] = "filled";
	VerificationApplicationStatus2["failed"] = "failed";
	VerificationApplicationStatus2["successful"] = "successful";
	return VerificationApplicationStatus2;
} )( VerificationApplicationStatus || {} );

// src/types/transactions/models/transaction.model.ts
var TransactionStatus = /* @__PURE__ */ ( ( TransactionStatus2 ) => {
	TransactionStatus2["initiated"] = "initiated";
	TransactionStatus2["processing"] = "processing";
	TransactionStatus2["completed"] = "completed";
	TransactionStatus2["failed"] = "failed";
	TransactionStatus2["expired"] = "expired";
	TransactionStatus2["cancelled"] = "cancelled";
	return TransactionStatus2;
} )( TransactionStatus || {} );

// src/sdks/internal/modules/customers.sdk.ts
let ScalexCustomersSdk = class {
	constructor( apiUrl ) {
		this.apiUrl = apiUrl;
	}
	requestOtpToRegister( payload ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: RequestOtpToRegisterEndpoint,
				body: payload
			} );
		} );
	}
	verifyOtpAndCreatePassword( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: VerifyOtpAndCreatePasswordEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	initiate2faRegistration( authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: Initiate2faEndpoint,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	verify2faToken( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: Verify2faEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	requestPasswordReset( payload ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: RequestPasswordResetEndpoint,
				body: payload
			} );
		} );
	}
	resetPassword( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: ResetPasswordEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	requestOtpToLogin( payload ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: RequestOtpForLoginEndpoint,
				body: payload
			} );
		} );
	}
	verifyOtpAndPasswordForLogin( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: VerifyOtpAndPasswordForLoginEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	verify2faForLogin( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: Verify2faForLoginEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	updateProfile( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: UpdateProfileEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	retrieveProfile( authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: RetrieveProfileEndpoint,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	initiateVerification( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: InitiateVerificationEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	updateAddress( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: UpdateAddressEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
	createBusiness( payload, authToken ) {
		return __async( this, null, function* () {
			return callApi( {
				serviceUri: this.apiUrl,
				endpoint: UpdateAddressEndpoint,
				body: payload,
				headers: __spreadValues( {}, setBearerToken( authToken ) )
			} );
		} );
	}
};

// src/sdks/internal/internal.sdk.ts
var ScalexInternalEnvironments = /* @__PURE__ */ ( ( ScalexInternalEnvironments2 ) => {
	ScalexInternalEnvironments2["local"] = "local";
	ScalexInternalEnvironments2["dev"] = "dev";
	ScalexInternalEnvironments2["prod"] = "prod";
	return ScalexInternalEnvironments2;
} )( ScalexInternalEnvironments || {} );
var ScalexInternalApiVersions = /* @__PURE__ */ ( ( ScalexInternalApiVersions2 ) => {
	ScalexInternalApiVersions2["v1"] = "/v1";
	return ScalexInternalApiVersions2;
} )( ScalexInternalApiVersions || {} );
let InternalEnvironmentUrls = {
	local: "http://localhost:8500",
	dev: "https://scalex-api-gateway-dev.up.railway.app",
	prod: "https://scalex-api.up.railway.app"
};
let ScalexInternalAPI = class {
	constructor( environment = "dev" /* dev */, version = "/v1" /* v1 */ ) {
		this.apiUrl = InternalEnvironmentUrls[environment] + version;
		this.customers = new ScalexCustomersSdk( this.apiUrl );
	}
};

// src/constants/sockets.constants.ts
let socketChannelsAndEvents = {
	verification: {
		channelName: "verification",
		events: {
			completedVerification: "completed-verification"
		}
	}
};
export {
	ActiveOrInactive,
	AuthStatus,
	CreateBusinessEndpoint,
	CurrencyType,
	HttpMethods,
	Initiate2faEndpoint,
	InitiateVerificationEndpoint,
	IntegrationType,
	PassOrFail,
	RequestOtpForLoginEndpoint,
	RequestOtpToRegisterEndpoint,
	RequestPasswordResetEndpoint,
	ResetPasswordEndpoint,
	RetrieveProfileEndpoint,
	ScalexInternalAPI,
	ScalexInternalApiVersions,
	ScalexInternalEnvironments,
	TokenActions,
	TokenExpiry,
	TransactionStatus,
	UpdateAddressEndpoint,
	UpdateProfileEndpoint,
	UserStatus,
	VerifiableEntity,
	VerificationAction,
	VerificationApplicantType,
	VerificationApplicationStatus,
	VerificationRequirementStatus,
	VerificationStepType,
	Verify2faEndpoint,
	Verify2faForLoginEndpoint,
	VerifyOtpAndCreatePasswordEndpoint,
	VerifyOtpAndPasswordForLoginEndpoint,
	socketChannelsAndEvents
};
//# sourceMappingURL=index.js.map
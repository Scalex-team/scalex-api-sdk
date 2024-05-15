"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ActiveOrInactive: () => ActiveOrInactive,
  AssetStatus: () => AssetStatus,
  AuthStatus: () => AuthStatus,
  BusinessRegistrationType: () => BusinessRegistrationType,
  CoinFulNames: () => CoinFulNames,
  CoinSymbols: () => CoinSymbols,
  Continents: () => Continents,
  CreateBusinessAddressEndpoint: () => CreateBusinessAddressEndpoint,
  CreateBusinessDirectorEndpoint: () => CreateBusinessDirectorEndpoint,
  CreateBusinessEndpoint: () => CreateBusinessEndpoint,
  CrytpoProviders: () => CrytpoProviders,
  CurrencyType: () => CurrencyType,
  FetchBusinessEndpoint: () => FetchBusinessEndpoint,
  FetchJobEndpoint: () => FetchJobEndpoint,
  FiatProviders: () => FiatProviders,
  HttpMethods: () => HttpMethods,
  Initiate2faEndpoint: () => Initiate2faEndpoint,
  InitiateVerificationEndpoint: () => InitiateVerificationEndpoint,
  IntegrationType: () => IntegrationType,
  JobClientType: () => JobClientType,
  JobStatus: () => JobStatus,
  JobTask: () => JobTask,
  LpFiatCurrencyNetwork: () => LpFiatCurrencyNetwork,
  LpPaymentMethod: () => LpPaymentMethod,
  LpProviders: () => LpProviders,
  PassOrFail: () => PassOrFail,
  RequestOtpForLoginEndpoint: () => RequestOtpForLoginEndpoint,
  RequestOtpToRegisterEndpoint: () => RequestOtpToRegisterEndpoint,
  RequestPasswordResetEndpoint: () => RequestPasswordResetEndpoint,
  ResetPasswordEndpoint: () => ResetPasswordEndpoint,
  ResolveBankAccountInfoEndpoint: () => ResolveBankAccountInfoEndpoint,
  ResourceOwner: () => ResourceOwner,
  RetrieveBankListsEndpoint: () => RetrieveBankListsEndpoint,
  RetrieveCountriesEndpoint: () => RetrieveCountriesEndpoint,
  RetrieveCryptoTokensEndpoint: () => RetrieveCryptoTokensEndpoint,
  RetrieveCryptoWalletAddressEndpoint: () => RetrieveCryptoWalletAddressEndpoint,
  RetrieveFiatCurrenciesEndpoint: () => RetrieveFiatCurrenciesEndpoint,
  RetrieveFiatWalletEndpoint: () => RetrieveFiatWalletEndpoint,
  RetrieveProfileEndpoint: () => RetrieveProfileEndpoint,
  RetrieveTransactionsEndpoint: () => RetrieveTransactionsEndpoint,
  ScalexInternalAPI: () => ScalexInternalAPI,
  ScalexInternalApiVersions: () => ScalexInternalApiVersions,
  ScalexInternalEnvironments: () => ScalexInternalEnvironments,
  TokenActions: () => TokenActions,
  TokenExpiry: () => TokenExpiry,
  TransactionStatus: () => TransactionStatus,
  TransactionType: () => TransactionType,
  UpdateAddressEndpoint: () => UpdateAddressEndpoint,
  UpdateProfileEndpoint: () => UpdateProfileEndpoint,
  UserStatus: () => UserStatus,
  VerifiableEntity: () => VerifiableEntity,
  VerificationAction: () => VerificationAction,
  VerificationApplicantType: () => VerificationApplicantType,
  VerificationApplicationStatus: () => VerificationApplicationStatus,
  VerificationRequirementStatus: () => VerificationRequirementStatus,
  VerificationStepType: () => VerificationStepType,
  Verify2faEndpoint: () => Verify2faEndpoint,
  Verify2faForLoginEndpoint: () => Verify2faForLoginEndpoint,
  VerifyOtpAndCreatePasswordEndpoint: () => VerifyOtpAndCreatePasswordEndpoint,
  VerifyOtpAndPasswordForLoginEndpoint: () => VerifyOtpAndPasswordForLoginEndpoint,
  socketChannelsAndEvents: () => socketChannelsAndEvents
});
module.exports = __toCommonJS(src_exports);

// src/functions/call-api.function.ts
var import_axios2 = __toESM(require("axios"), 1);

// src/functions/send-api-response.ts
var import_axios = require("axios");
function notifyClientOfSuccess(payload = {
  statusCode: import_axios.HttpStatusCode.Ok,
  message: "Your request was successful",
  data: {}
}) {
  var _a, _b;
  return {
    statusCode: (_a = payload.statusCode) != null ? _a : import_axios.HttpStatusCode.Ok,
    message: (_b = payload.message) != null ? _b : "Your request was successful",
    data: payload.data
  };
}
function notifyClientOfFailure({
  data = {},
  error
}) {
  var _a, _b, _c, _d, _e;
  if (error instanceof import_axios.AxiosError) {
    const scxError = (_a = error.response) == null ? void 0 : _a.data;
    return {
      statusCode: (_b = scxError == null ? void 0 : scxError.statusCode) != null ? _b : 500,
      data,
      message: (_c = scxError == null ? void 0 : scxError.message) != null ? _c : "Something went terribly wrong. Please contact support",
      error: scxError
    };
  }
  return {
    statusCode: (_d = error == null ? void 0 : error.statusCode) != null ? _d : 500,
    data,
    message: (_e = error == null ? void 0 : error.message) != null ? _e : "Something went terribly wrong. Please contact support",
    error
  };
}

// src/functions/call-api.function.ts
var ScalexAuthHeaderName = "scalexadminauthorization";
var AuthorizationHeaderName = "Authorization";
function makeHttpRequest(_0) {
  return __async(this, arguments, function* ({
    method,
    url,
    body,
    headers,
    query,
    params
  }) {
    const aggregatedHeaders = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "content-type",
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,DELETE,PATCH"
    };
    if (headers) {
      if (headers[ScalexAuthHeaderName]) {
        aggregatedHeaders[ScalexAuthHeaderName] = headers[ScalexAuthHeaderName];
      }
      if (headers[AuthorizationHeaderName]) {
        aggregatedHeaders[AuthorizationHeaderName] = headers[AuthorizationHeaderName];
      }
    }
    if (params) {
      params.forEach((p) => {
        url += `/${p}`;
      });
    }
    return (0, import_axios2.default)({
      method,
      url,
      data: body,
      headers: aggregatedHeaders,
      params: query
    });
  });
}
function callApi(requestParams) {
  return __async(this, null, function* () {
    try {
      const response = yield makeHttpRequest({
        method: requestParams.endpoint.method,
        body: requestParams.body,
        query: requestParams.query,
        headers: requestParams.headers,
        params: requestParams.params,
        url: `${requestParams.serviceUri}${requestParams.endpoint.fullPath}`
      });
      return notifyClientOfSuccess(response.data);
    } catch (e) {
      throw notifyClientOfFailure({
        error: e
      });
    }
  });
}
function setBearerToken(token) {
  return {
    Authorization: `Bearer ${token}`
  };
}

// src/types/generic/endpoints.interface.ts
var HttpMethods = /* @__PURE__ */ ((HttpMethods2) => {
  HttpMethods2["Post"] = "POST";
  HttpMethods2["Put"] = "PUT";
  HttpMethods2["Get"] = "GET";
  HttpMethods2["Patch"] = "PATCH";
  HttpMethods2["Delete"] = "DELETE";
  return HttpMethods2;
})(HttpMethods || {});

// src/types/generic/api-response.type.ts
var TokenActions = /* @__PURE__ */ ((TokenActions2) => {
  TokenActions2["Login"] = "login";
  TokenActions2["DataAccess"] = "data-access";
  TokenActions2["SetPassword"] = "set-password";
  TokenActions2["Refresh"] = "refresh";
  TokenActions2["ResetPassword"] = "reset-password";
  return TokenActions2;
})(TokenActions || {});
var TokenExpiry = {
  "set-password": "15m",
  "data-access": "3h",
  refresh: "1d",
  "reset-password": "15m",
  "login": "10m"
};

// src/types/generic/data-models/user/user.interface.ts
var UserStatus = /* @__PURE__ */ ((UserStatus2) => {
  UserStatus2["Active"] = "active";
  UserStatus2["Suspended"] = "suspended";
  UserStatus2["Deactivated"] = "deactivated";
  return UserStatus2;
})(UserStatus || {});
var AuthStatus = /* @__PURE__ */ ((AuthStatus2) => {
  AuthStatus2["loggedInWithout2fa"] = "logged-in-without-2fa";
  AuthStatus2["loggedInWith2fa"] = "logged-in-with-2fa";
  AuthStatus2["loggedOutByExpiredToken"] = "logged-out-by-expired-token";
  AuthStatus2["loggedOutManually"] = "logged-out-manually";
  AuthStatus2["neverLoggedIn"] = "never-logged-in";
  return AuthStatus2;
})(AuthStatus || {});

// src/types/generic/data-models/user/country.interface.ts
var Continents = /* @__PURE__ */ ((Continents2) => {
  Continents2["AF"] = "Africa";
  Continents2["AN"] = "Antarctica";
  Continents2["AS"] = "Asia";
  Continents2["EU"] = "Europe";
  Continents2["NA"] = "North America";
  Continents2["OC"] = "Oceania";
  Continents2["SA"] = "South America";
  return Continents2;
})(Continents || {});

// src/types/generic/data-models/enums/utility.enums.ts
var ActiveOrInactive = /* @__PURE__ */ ((ActiveOrInactive2) => {
  ActiveOrInactive2["active"] = "active";
  ActiveOrInactive2["inactive"] = "inactive";
  return ActiveOrInactive2;
})(ActiveOrInactive || {});
var IntegrationType = /* @__PURE__ */ ((IntegrationType2) => {
  IntegrationType2["SDK"] = "sdk";
  IntegrationType2["REST"] = "rest";
  return IntegrationType2;
})(IntegrationType || {});
var PassOrFail = /* @__PURE__ */ ((PassOrFail2) => {
  PassOrFail2["passed"] = "passed";
  PassOrFail2["failed"] = "failed";
  return PassOrFail2;
})(PassOrFail || {});
var CurrencyType = /* @__PURE__ */ ((CurrencyType2) => {
  CurrencyType2["Crypto"] = "crypto";
  CurrencyType2["Fiat"] = "fiat";
  return CurrencyType2;
})(CurrencyType || {});
var ResourceOwner = /* @__PURE__ */ ((ResourceOwner2) => {
  ResourceOwner2["business"] = "business";
  ResourceOwner2["individual"] = "individual";
  return ResourceOwner2;
})(ResourceOwner || {});

// src/types/customers/endpoint-payloads/create-account.payloads.ts
var RequestOtpToRegisterEndpoint = {
  method: "POST" /* Post */,
  path: "/otps",
  fullPath: "/customers-auth/otps"
};
var VerifyOtpAndCreatePasswordEndpoint = {
  method: "POST" /* Post */,
  path: "/passwords",
  fullPath: "/customers-auth/passwords"
};
var Initiate2faEndpoint = {
  method: "POST" /* Post */,
  path: "/2fa",
  fullPath: "/customers-auth/2fa"
};
var Verify2faEndpoint = {
  method: "PATCH" /* Patch */,
  path: "/2fa",
  fullPath: "/customers-auth/2fa"
};

// src/types/customers/endpoint-payloads/account-recovery.payloads.ts
var RequestPasswordResetEndpoint = {
  method: "POST" /* Post */,
  path: "",
  fullPath: "/customers-account-recovery"
};
var ResetPasswordEndpoint = {
  method: "PATCH" /* Patch */,
  path: "",
  fullPath: "/customers-account-recovery"
};

// src/types/customers/endpoint-payloads/login.payloads.ts
var RequestOtpForLoginEndpoint = {
  method: "POST" /* Post */,
  path: "/login",
  fullPath: "/customers-auth/login"
};
var VerifyOtpAndPasswordForLoginEndpoint = {
  method: "PATCH" /* Patch */,
  path: "/login",
  fullPath: "/customers-auth/login"
};
var Verify2faForLoginEndpoint = {
  method: "PATCH" /* Patch */,
  path: "/login/2fa",
  fullPath: "/customers-auth/login/2fa"
};

// src/types/customers/endpoint-payloads/initiate-verification.payloads.ts
var InitiateVerificationEndpoint = {
  method: "POST" /* Post */,
  path: "/customer-verification",
  fullPath: "/customer-verification"
};

// src/types/customers/endpoint-payloads/profile.payloads.ts
var UpdateProfileEndpoint = {
  method: "PATCH" /* Patch */,
  path: "/customer-profile",
  fullPath: "/customer-profile"
};
var UpdateAddressEndpoint = {
  method: "PATCH" /* Patch */,
  path: "/customer-address",
  fullPath: "/customer-address"
};
var RetrieveProfileEndpoint = {
  method: "GET" /* Get */,
  path: "/customer-profile",
  fullPath: "/customer-profile"
};

// src/types/customers/endpoint-payloads/business.payloads.ts
var CreateBusinessEndpoint = {
  method: "POST" /* Post */,
  path: "/businesses",
  fullPath: "/businesses"
};
var FetchBusinessEndpoint = {
  method: "GET" /* Get */,
  path: "/businesses",
  fullPath: "/businesses"
};
var CreateBusinessDirectorEndpoint = {
  method: "POST" /* Post */,
  path: "/directors",
  fullPath: "/businesses/directors"
};
var CreateBusinessAddressEndpoint = {
  method: "POST" /* Post */,
  path: "/addresses",
  fullPath: "/businesses/addresses"
};

// src/types/customers/models/verification-application.models.ts
var VerifiableEntity = /* @__PURE__ */ ((VerifiableEntity2) => {
  VerifiableEntity2["governmentIssuedId"] = "government-issued-id";
  VerifiableEntity2["utilityBill"] = "utility-bill";
  VerifiableEntity2["businessRegistrationCertificate"] = "business-registration-certificate";
  VerifiableEntity2["phoneNumber"] = "phone-number";
  return VerifiableEntity2;
})(VerifiableEntity || {});
var VerificationApplicantType = /* @__PURE__ */ ((VerificationApplicantType2) => {
  VerificationApplicantType2["individual"] = "individual";
  VerificationApplicantType2["business"] = "business";
  VerificationApplicantType2["director"] = "director";
  return VerificationApplicantType2;
})(VerificationApplicantType || {});
var VerificationAction = /* @__PURE__ */ ((VerificationAction2) => {
  VerificationAction2["initiateJobWithPartner"] = "initiate-job-with-partner";
  VerificationAction2["confirmJobStatusWithPartner"] = "confirm-job-status-with-partner";
  VerificationAction2["updateLocalUserRecords"] = "update-local-user-records";
  return VerificationAction2;
})(VerificationAction || {});
var VerificationStepType = /* @__PURE__ */ ((VerificationStepType2) => {
  VerificationStepType2["apiCall"] = "api-call";
  VerificationStepType2["webhook"] = "webhook";
  return VerificationStepType2;
})(VerificationStepType || {});
var VerificationRequirementStatus = /* @__PURE__ */ ((VerificationRequirementStatus2) => {
  VerificationRequirementStatus2["one"] = "one";
  VerificationRequirementStatus2["all"] = "all";
  return VerificationRequirementStatus2;
})(VerificationRequirementStatus || {});
var VerificationApplicationStatus = /* @__PURE__ */ ((VerificationApplicationStatus2) => {
  VerificationApplicationStatus2["cold"] = "cold";
  VerificationApplicationStatus2["inProgress"] = "in-progress";
  VerificationApplicationStatus2["expired"] = "expired";
  VerificationApplicationStatus2["filled"] = "filled";
  VerificationApplicationStatus2["failed"] = "failed";
  VerificationApplicationStatus2["successful"] = "successful";
  return VerificationApplicationStatus2;
})(VerificationApplicationStatus || {});

// src/types/customers/models/business-profile.model.ts
var BusinessRegistrationType = /* @__PURE__ */ ((BusinessRegistrationType2) => {
  BusinessRegistrationType2["businessName"] = "business-name";
  BusinessRegistrationType2["privateOrPublicLtd"] = "private-public-ltd";
  BusinessRegistrationType2["incorporatedTrustees"] = "incorporated-trustees";
  return BusinessRegistrationType2;
})(BusinessRegistrationType || {});

// src/types/transactions/models/transaction.model.ts
var CrytpoProviders = /* @__PURE__ */ ((CrytpoProviders2) => {
  CrytpoProviders2["shyft"] = "shyft";
  CrytpoProviders2["liminal"] = "liminal";
  CrytpoProviders2["bitnob"] = "bitnob";
  return CrytpoProviders2;
})(CrytpoProviders || {});
var TransactionType = /* @__PURE__ */ ((TransactionType2) => {
  TransactionType2["onramp"] = "onramp";
  TransactionType2["offramp"] = "offramp";
  TransactionType2["transfer"] = "transfer";
  TransactionType2["deposit"] = "deposit";
  return TransactionType2;
})(TransactionType || {});
var TransactionStatus = /* @__PURE__ */ ((TransactionStatus2) => {
  TransactionStatus2["initiated"] = "initiated";
  TransactionStatus2["awaitingConsumation"] = "awaiting-consumation";
  TransactionStatus2["processing"] = "processing";
  TransactionStatus2["successful"] = "successful";
  TransactionStatus2["failed"] = "failed";
  TransactionStatus2["expired"] = "expired";
  TransactionStatus2["cancelled"] = "cancelled";
  return TransactionStatus2;
})(TransactionStatus || {});

// src/types/transactions/models/coin.model.ts
var CoinSymbols = /* @__PURE__ */ ((CoinSymbols2) => {
  CoinSymbols2["USDT"] = "USDT";
  CoinSymbols2["USDC"] = "USDC";
  CoinSymbols2["BTC"] = "BTC";
  return CoinSymbols2;
})(CoinSymbols || {});
var CoinFulNames = {
  USDT: "Tether USD",
  USDC: "USD Coin",
  BTC: "Bitcoin"
};

// src/types/transactions/models/fiat.model.ts
var AssetStatus = /* @__PURE__ */ ((AssetStatus2) => {
  AssetStatus2["Active"] = "active";
  AssetStatus2["Suspended"] = "suspended";
  AssetStatus2["Locked"] = "locked";
  AssetStatus2["Destroyed"] = "destroyed";
  return AssetStatus2;
})(AssetStatus || {});
var FiatProviders = /* @__PURE__ */ ((FiatProviders2) => {
  FiatProviders2["Paga"] = "Paga";
  FiatProviders2["Payaza"] = "Payaza";
  FiatProviders2["Polaris"] = "Polaris";
  FiatProviders2["Bani"] = "Bani";
  return FiatProviders2;
})(FiatProviders || {});

// src/types/transactions/models/third-party-lp.model.ts
var LpPaymentMethod = /* @__PURE__ */ ((LpPaymentMethod2) => {
  LpPaymentMethod2["Crypto"] = "Crypto";
  LpPaymentMethod2["Bank"] = "Bank";
  return LpPaymentMethod2;
})(LpPaymentMethod || {});
var LpFiatCurrencyNetwork = /* @__PURE__ */ ((LpFiatCurrencyNetwork2) => {
  LpFiatCurrencyNetwork2["Local"] = "LOCAL";
  return LpFiatCurrencyNetwork2;
})(LpFiatCurrencyNetwork || {});
var LpProviders = /* @__PURE__ */ ((LpProviders2) => {
  LpProviders2["XendBridge"] = "XendBridge";
  return LpProviders2;
})(LpProviders || {});

// src/types/transactions/endpoint-payload/retrieve-crypto-assets.payloads.ts
var RetrieveCryptoTokensEndpoint = {
  method: "GET" /* Get */,
  path: "/list-active-coins",
  fullPath: "/coin-management/list-active-coins"
};

// src/types/transactions/endpoint-payload/retrieve-fiat-assets.payloads.ts
var RetrieveFiatCurrenciesEndpoint = {
  method: "GET" /* Get */,
  path: "/list-fiat-currencies",
  fullPath: "/fiat-management/list-fiat-currencies"
};

// src/types/transactions/endpoint-payload/retrieve-transactions.payloads.ts
var RetrieveTransactionsEndpoint = {
  method: "GET" /* Get */,
  path: "/retrieve-tx",
  fullPath: "/transactions/retrieve-tx"
};

// src/types/transactions/endpoint-payload/manage-banks.payloads.ts
var RetrieveBankListsEndpoint = {
  method: "GET" /* Get */,
  path: "/list-banks",
  fullPath: "/fiat-management/list-banks"
};
var ResolveBankAccountInfoEndpoint = {
  method: "POST" /* Post */,
  path: "/resolve-bank-account",
  fullPath: "/fiat-management/resolve-bank-account"
};

// src/types/transactions/endpoint-payload/manage-nubans.payloads.ts
var RetrieveFiatWalletEndpoint = {
  method: "POST" /* Post */,
  path: "/retrieve-persistent-nuban",
  fullPath: "/fiat-management/retrieve-persistent-nuban"
};
var RetrieveCryptoWalletAddressEndpoint = {
  method: "GET" /* Get */,
  path: "/retrieve-wallet-address",
  fullPath: "/crypto-management/retrieve-wallet-address"
};

// src/types/utils/models/job.model.ts
var JobStatus = /* @__PURE__ */ ((JobStatus2) => {
  JobStatus2["initiated"] = "initiated";
  JobStatus2["pending"] = "pending";
  JobStatus2["completed"] = "completed";
  JobStatus2["failed"] = "failed";
  return JobStatus2;
})(JobStatus || {});
var JobTask = /* @__PURE__ */ ((JobTask2) => {
  JobTask2["kyc"] = "kyc";
  JobTask2["kyb"] = "kyb";
  return JobTask2;
})(JobTask || {});
var JobClientType = /* @__PURE__ */ ((JobClientType2) => {
  JobClientType2["merchant"] = "merchant";
  JobClientType2["customer"] = "customer";
  JobClientType2["business"] = "business";
  JobClientType2["businessDirector"] = "business-director";
  JobClientType2["admin"] = "admin";
  JobClientType2["system"] = "system";
  return JobClientType2;
})(JobClientType || {});

// src/types/utils/endpoint-payloads/manage-jobs.payloads.ts
var FetchJobEndpoint = {
  method: "GET" /* Get */,
  path: "/jobs",
  fullPath: "/jobs"
};

// src/types/utils/endpoint-payloads/peference.payloads.ts
var RetrieveCountriesEndpoint = {
  method: "GET" /* Get */,
  path: "/preferences/countries",
  fullPath: "/preferences/countries"
};

// src/sdks/internal/modules/customers.sdk.ts
var ScalexCustomersSdk = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  requestOtpToRegister(payload) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RequestOtpToRegisterEndpoint,
        body: payload
      });
    });
  }
  verifyOtpAndCreatePassword(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: VerifyOtpAndCreatePasswordEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  initiate2faRegistration(authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: Initiate2faEndpoint,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  verify2faToken(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: Verify2faEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  requestPasswordReset(payload) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RequestPasswordResetEndpoint,
        body: payload
      });
    });
  }
  resetPassword(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: ResetPasswordEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  requestOtpToLogin(payload) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RequestOtpForLoginEndpoint,
        body: payload
      });
    });
  }
  verifyOtpAndPasswordForLogin(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: VerifyOtpAndPasswordForLoginEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  verify2faForLogin(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: Verify2faForLoginEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  updateProfile(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: UpdateProfileEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  retrieveProfile(authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveProfileEndpoint,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  initiateVerification(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: InitiateVerificationEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  updateAddress(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: UpdateAddressEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  createBusiness(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: CreateBusinessEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  createBusinessDirector(payload, businessId, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: CreateBusinessDirectorEndpoint,
        body: payload,
        query: {
          id: businessId
        },
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  createBusinessAddress(payload, businessId, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: CreateBusinessAddressEndpoint,
        body: payload,
        query: {
          id: businessId
        },
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  retrieveBusiness(businessId, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: FetchBusinessEndpoint,
        query: {
          id: businessId
        },
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
};

// src/sdks/internal/modules/utils.sdk.ts
var ScalexUtilsSdk = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  retrieveCountries() {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveCountriesEndpoint
      });
    });
  }
  fetchJob(jobId, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: FetchJobEndpoint,
        query: {
          id: jobId
        },
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
};

// src/sdks/internal/modules/transactions-module/assets-module/retrieve-assets.module.ts
var AssetsModule = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  retrieveCryptoTokens(authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveCryptoTokensEndpoint,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  retrieveFiatCurrencies(authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveFiatCurrenciesEndpoint,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
};

// src/sdks/internal/modules/transactions-module/banks-module/manage-banks.module.ts
var BanksModule = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  retrieveBankLists(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveBankListsEndpoint,
        query: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  resolveBankAccount(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: ResolveBankAccountInfoEndpoint,
        body: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
};

// src/sdks/internal/modules/transactions-module/transactions-module/retrieve-transactions.module.ts
var TransactionsModule = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  retrieveDeposits(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveTransactionsEndpoint,
        query: __spreadProps(__spreadValues({}, payload), {
          type: "deposit" /* deposit */
        }),
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  retrieveWithdrawals(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveTransactionsEndpoint,
        query: __spreadProps(__spreadValues({}, payload), {
          type: "transfer" /* transfer */
        }),
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
};

// src/sdks/internal/modules/transactions-module/utils-module/manage-nuban.module.ts
var UtilsModule = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  // async retrievePersistentNuban( payload: IRetrievePersistentNubanPayload )
  // : Promise<ScalexSuccessResponse<IRetrievePersistentNubanResponse>> {
  // return callApi<IRetrievePersistentNubanPayload, IRetrievePersistentNubanResponse>( {
  // serviceUri: this.apiUrl,
  // endpoint: RetrievePersistentNubanEndpoint,
  // query: payload
  // } );
  // }
};

// src/sdks/internal/modules/transactions-module/wallets-module/wallet.module.ts
var WalletsModule = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  retrieveFiatWallet(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveFiatWalletEndpoint,
        query: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
  retrieveCryptoWallet(payload, authToken) {
    return __async(this, null, function* () {
      return callApi({
        serviceUri: this.apiUrl,
        endpoint: RetrieveCryptoWalletAddressEndpoint,
        query: payload,
        headers: __spreadValues({}, setBearerToken(authToken))
      });
    });
  }
};

// src/sdks/internal/modules/transactions-module/transactions.sdk.ts
var ScalexTransactionsSdk = class {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.assets = new AssetsModule(apiUrl);
    this.banks = new BanksModule(apiUrl);
    this.utils = new UtilsModule(apiUrl);
    this.wallets = new WalletsModule(apiUrl);
    this.transactions = new TransactionsModule(apiUrl);
  }
};

// src/sdks/internal/internal.sdk.ts
var ScalexInternalEnvironments = /* @__PURE__ */ ((ScalexInternalEnvironments2) => {
  ScalexInternalEnvironments2["local"] = "local";
  ScalexInternalEnvironments2["dev"] = "dev";
  ScalexInternalEnvironments2["prod"] = "prod";
  return ScalexInternalEnvironments2;
})(ScalexInternalEnvironments || {});
var ScalexInternalApiVersions = /* @__PURE__ */ ((ScalexInternalApiVersions2) => {
  ScalexInternalApiVersions2["v1"] = "/v1";
  return ScalexInternalApiVersions2;
})(ScalexInternalApiVersions || {});
var InternalEnvironmentUrls = {
  local: "http://localhost:8500",
  dev: "https://scalex-api-gateway-dev.up.railway.app",
  prod: "https://scalex-api.up.railway.app"
};
var ScalexInternalAPI = class {
  constructor(environment = "dev" /* dev */, version = "/v1" /* v1 */) {
    this.apiUrl = InternalEnvironmentUrls[environment] + version;
    this.customers = new ScalexCustomersSdk(this.apiUrl);
    this.transaction = new ScalexTransactionsSdk(this.apiUrl);
    this.utils = new ScalexUtilsSdk(this.apiUrl);
  }
};

// src/constants/sockets.constants.ts
var socketChannelsAndEvents = {
  jobs: {
    channelName: "job-stream",
    events: {
      completed: "completed-job"
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActiveOrInactive,
  AssetStatus,
  AuthStatus,
  BusinessRegistrationType,
  CoinFulNames,
  CoinSymbols,
  Continents,
  CreateBusinessAddressEndpoint,
  CreateBusinessDirectorEndpoint,
  CreateBusinessEndpoint,
  CrytpoProviders,
  CurrencyType,
  FetchBusinessEndpoint,
  FetchJobEndpoint,
  FiatProviders,
  HttpMethods,
  Initiate2faEndpoint,
  InitiateVerificationEndpoint,
  IntegrationType,
  JobClientType,
  JobStatus,
  JobTask,
  LpFiatCurrencyNetwork,
  LpPaymentMethod,
  LpProviders,
  PassOrFail,
  RequestOtpForLoginEndpoint,
  RequestOtpToRegisterEndpoint,
  RequestPasswordResetEndpoint,
  ResetPasswordEndpoint,
  ResolveBankAccountInfoEndpoint,
  ResourceOwner,
  RetrieveBankListsEndpoint,
  RetrieveCountriesEndpoint,
  RetrieveCryptoTokensEndpoint,
  RetrieveCryptoWalletAddressEndpoint,
  RetrieveFiatCurrenciesEndpoint,
  RetrieveFiatWalletEndpoint,
  RetrieveProfileEndpoint,
  RetrieveTransactionsEndpoint,
  ScalexInternalAPI,
  ScalexInternalApiVersions,
  ScalexInternalEnvironments,
  TokenActions,
  TokenExpiry,
  TransactionStatus,
  TransactionType,
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
});
//# sourceMappingURL=index.cjs.map
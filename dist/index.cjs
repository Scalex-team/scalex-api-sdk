"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  HttpMethods: () => HttpMethods,
  RequestOtpToRegisterEndpoint: () => RequestOtpToRegisterEndpoint,
  ScalexInternalAPI: () => ScalexInternalAPI,
  ScalexInternalApiVersions: () => ScalexInternalApiVersions,
  ScalexInternalEnvironments: () => ScalexInternalEnvironments,
  TokenActions: () => TokenActions,
  TokenExpiry: () => TokenExpiry
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
      "Content-Type": "application/json"
    };
    if (headers) {
      if (headers[ScalexAuthHeaderName]) {
        aggregatedHeaders[ScalexAuthHeaderName] = headers[ScalexAuthHeaderName];
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

// src/types/customers/endpoint-payloads/create-account.payloads.ts
var RequestOtpToRegisterEndpoint = {
  method: "POST" /* Post */,
  path: "otps",
  fullPath: "customers-auth/otps"
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
  dev: "https://scalex-dev.railway.app",
  prod: "https://scalex-api.railway.app"
};
var ScalexInternalAPI = class {
  constructor(environment = "dev" /* dev */, version = "/v1" /* v1 */) {
    this.apiUrl = InternalEnvironmentUrls[environment] + version;
    this.customers = new ScalexCustomersSdk(this.apiUrl);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HttpMethods,
  RequestOtpToRegisterEndpoint,
  ScalexInternalAPI,
  ScalexInternalApiVersions,
  ScalexInternalEnvironments,
  TokenActions,
  TokenExpiry
});
//# sourceMappingURL=index.cjs.map
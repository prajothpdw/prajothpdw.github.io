/*! msal v1.1.3 2019-08-14 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationLocal", {
        get: function () { return "localStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationSession", {
        get: function () { return "sessionStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 * CacheKeys for 'authority' and 'account'
 */
exports.CacheKeys = {
    AUTHORITY: "msal.authority",
    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
};
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
exports.SSOTypes = {
    ACCOUNT: "account",
    SID: "sid",
    LOGIN_HINT: "login_hint",
    ID_TOKEN: "id_token",
    DOMAIN_HINT: "domain_hint",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers",
    ACCOUNT_ID: "accountIdentifier",
    HOMEACCOUNT_ID: "homeAccountIdentifier",
    LOGIN_REQ: "login_req",
    DOMAIN_REQ: "domain_req"
};
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    exports.SSOTypes.SID,
    exports.SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * MSAL JS Library Version
 */
function libraryVersion() {
    return "1.1.3";
}
exports.libraryVersion = libraryVersion;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    CryptoUtils.base64Decode = function (input) {
        return decodeURIComponent(atob(input).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    invalidCacheLocation: {
        code: "invalid_cache_location",
        desc: "The cache location provided is not valid."
    },
    noStorageSupported: {
        code: "browser_storage_not_supported",
        desc: "localStorage and sessionStorage are not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
    };
    ClientConfigurationError.createNoStorageSupportedError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = serverRequestParams.scopes;
        if (scopes.indexOf(serverRequestParams.clientId) === -1) {
            scopes.push(serverRequestParams.clientId);
        }
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        this.translateclientIdUsedInScope(scopes, serverRequestParams.clientId);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    UrlUtils.translateclientIdUsedInScope = function (scopes, clientId) {
        var clientIdIndex = scopes.indexOf(clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !UrlUtils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
var StringUtils_1 = __webpack_require__(1);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    //TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    //TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
* General error class thrown by the MSAL.js library.
*/
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(4);
var XHRClient_1 = __webpack_require__(18);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /*enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        var _this = this;
        var openIdConfigurationEndpoint = "";
        return this.GetOpenIdConfigurationEndpointAsync().then(function (openIdConfigurationEndpointResponse) {
            openIdConfigurationEndpoint = openIdConfigurationEndpointResponse;
            return _this.DiscoverEndpoints(openIdConfigurationEndpoint);
        }).then(function (tenantDiscoveryResponse) {
            _this.tenantDiscoveryResponse = tenantDiscoveryResponse;
            return _this;
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AccessTokenKey_1 = __webpack_require__(26);
var AccessTokenValue_1 = __webpack_require__(27);
var ServerRequestParameters_1 = __webpack_require__(28);
var ClientInfo_1 = __webpack_require__(29);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(30);
var Storage_1 = __webpack_require__(31);
var Account_1 = __webpack_require__(16);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
var CryptoUtils_1 = __webpack_require__(3);
var TokenUtils_1 = __webpack_require__(15);
var TimeUtils_1 = __webpack_require__(33);
var UrlUtils_1 = __webpack_require__(5);
var ResponseUtils_1 = __webpack_require__(34);
var AuthorityFactory_1 = __webpack_require__(35);
var Configuration_1 = __webpack_require__(20);
var ClientConfigurationError_1 = __webpack_require__(4);
var AuthError_1 = __webpack_require__(7);
var ClientAuthError_1 = __webpack_require__(6);
var ServerError_1 = __webpack_require__(11);
var InteractionRequiredAuthError_1 = __webpack_require__(21);
var AuthResponse_1 = __webpack_require__(22);
var TelemetryManager_1 = __webpack_require__(36);
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * @hidden
 * @ignore
 * A wrapper to handle the token response/error within the iFrame always
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
var resolveTokenOnlyIfOutOfIframe = function (target, propertyKey, descriptor) {
    var tokenAcquisitionMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.isInIframe()
            ? new Promise(function () {
                return;
            })
            : tokenAcquisitionMethod.apply(this, args);
    };
    return descriptor;
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
  
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // track login and acquireToken in progress
        this.loginInProgress = false;
        this.acquireTokenInProgress = false;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        try {
            this.cacheStorage = new Storage_1.Storage(this.config.cache.cacheLocation);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation);
        }
        // Initialize window handling code
        window.openedWindows = [];
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = this.urlContainsHash(urlHash);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            if (urlContainsHash) {
                this.handleAuthenticationResponse(urlHash);
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    //#endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        });
    };
    //#region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // If already in progress, do not proceed
        if (this.loginInProgress || this.acquireTokenInProgress) {
            var thrownError = this.loginInProgress ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request && request.state));
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // if extraScopesToConsent is passed in loginCall, append them to the login request
        var scopes = isLoginCall ? this.appendScopes(request) : request.scopes;
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, !isLoginCall);
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, scopes, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, scopes, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        if (isLoginCall) {
            this.loginInProgress = true;
        }
        else {
            this.acquireTokenInProgress = true;
        }
        var scope = scopes ? scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (!isLoginCall && request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
            if (!popUpWindow) {
                // We pass reject in openWindow, we reject there during an error
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () {
            // On Fulfillment
            var responseType = isLoginCall ? ResponseTypes.id_token : _this.getTokenType(account, scopes, false);
            var loginStartPage;
            if (isLoginCall) {
                // if the user sets the login start page - angular only??
                loginStartPage = _this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
                if (!loginStartPage || loginStartPage === "") {
                    loginStartPage = window.location.href;
                }
                else {
                    _this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
                }
            }
            serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, scopes, responseType, _this.getRedirectUri(), request && request.state);
            _this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest.populateQueryParams(account, request);
            // Construct urlNavigate
            var urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
            // set state in cache
            if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                if (!isLoginCall) {
                    _this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, _this.inCookie);
                }
            }
            else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                window.renewStates.push(serverAuthenticationRequest.state);
                window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                // Register callback to capture results from server
                _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
            }
            else {
                throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
            }
            // prompt user for interaction
            _this.navigateWindow(urlNavigate, popUpWindow);
        }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            //if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                serverAuthenticationRequest.populateQueryParams(account, request);
            }
            //if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    // refresh attempt with iframe
                    // Already renewing for this scope, callback when we get the token.
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            // App uses idToken to send to api endpoints
                            // Default scope is tracked as clientId to store this token
                            _this.logger.verbose("renewing idToken");
                            _this.silentLogin = true;
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        });
    };
    //#endregion
    //#region Popup Window Creation
    /**
     * @hidden
     *
     * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     *
     * @param urlNavigate
     * @param title
     * @param interval
     * @param instance
     * @param resolve
     * @param reject
     * @ignore
     */
    UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
        var _this = this;
        // Generate a popup window
        var popupWindow;
        try {
            popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
        }
        catch (e) {
            instance.loginInProgress = false;
            instance.acquireTokenInProgress = false;
            this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
            }
            return null;
        }
        // Push popup window handle onto stack for tracking
        window.openedWindows.push(popupWindow);
        var pollTimer = window.setInterval(function () {
            // If popup closed or login in progress, cancel login
            if (popupWindow && popupWindow.closed && (instance.loginInProgress || instance.acquireTokenInProgress)) {
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                }
                window.clearInterval(pollTimer);
                if (_this.config.framework.isAngular) {
                    _this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                    return;
                }
                instance.loginInProgress = false;
                instance.acquireTokenInProgress = false;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                // If the popup hash changes, close the popup window
                if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                    window.clearInterval(pollTimer);
                    instance.loginInProgress = false;
                    instance.acquireTokenInProgress = false;
                    _this.logger.info("Closing popup window");
                    // TODO: Check how this can be extracted for any framework specific code?
                    if (_this.config.framework.isAngular) {
                        _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                        for (var i = 0; i < window.openedWindows.length; i++) {
                            window.openedWindows[i].close();
                        }
                    }
                }
            }
            catch (e) {
                // Cross Domain url check error.
                // Will be thrown until AAD redirects the user back to the app"s root page with the token.
                // No need to log or throw this error as it will create unnecessary traffic.
            }
        }, interval);
        return popupWindow;
    };
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.loginInProgress = false;
            this.acquireTokenInProgress = false;
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    //#endregion
    //#region Iframe Management
    /**
     * @hidden
     * Returns whether current window is in ifram for token renewal
     * @ignore
     */
    UserAgentApplication.prototype.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Returns whether parent window exists and has msal
     */
    UserAgentApplication.prototype.parentIsMsal = function () {
        return window.parent !== window && window.parent.msal;
    };
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        var _this = this;
        //set iframe session to pending
        var expectedState = window.activeRenewals[scope];
        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
        this.loadFrame(urlNavigate, frameName);
        setTimeout(function () {
            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                // fail the iframe session if it"s in pending state
                _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                // Error after timeout
                if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                    window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                }
                _this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
            }
        }, this.config.system.loadFrameTimeout);
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
        var _this = this;
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        this.logger.info("LoadFrame: " + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = _this.addHiddenIFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
                _this.logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
        }, this.config.system.navigateFrameWait);
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    UserAgentApplication.prototype.addHiddenIFrame = function (iframeId) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        this.logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    //#endregion
    //#region General Helpers
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.replace(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server esponse in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
                function (response, error) {
                    // reset active renewals
                    window.activeRenewals[scope] = null;
                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                    for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (error) {
                                window.promiseMappedToRenewStates[expectedState][i].reject(error);
                            }
                            else if (response) {
                                window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                            }
                            else {
                                throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                            }
                        }
                        catch (e) {
                            _this.logger.warning(e);
                        }
                    }
                    // reset
                    window.promiseMappedToRenewStates[expectedState] = null;
                    window.callbackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    //#endregion
    //#region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.navigateWindow(urlNavigate);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    //#endregion
    //#region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return this.urlContainsHash(hash);
    };
    UserAgentApplication.prototype.urlContainsHash = function (urlString) {
        var parameters = this.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearCookie();
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.Constants.accessToken;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.Constants.idToken;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        if (hash == null) {
            hash = window.location.hash;
        }
        var self = null;
        var isPopup = false;
        var isWindowOpenerMsal = false;
        // Check if the current window opened the iFrame/popup
        try {
            isWindowOpenerMsal = window.opener && window.opener.msal && window.opener.msal !== window.msal;
        }
        catch (err) {
            // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
            isWindowOpenerMsal = false;
        }
        // Set the self to the window that created the popup/iframe
        if (isWindowOpenerMsal) {
            self = window.opener.msal;
            isPopup = true;
        }
        else if (window.parent && window.parent.msal) {
            self = window.parent.msal;
        }
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = self.getResponseState(hash);
        var tokenResponseCallback = null;
        self.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (this.parentIsMsal()) {
            tokenResponseCallback = window.parent.callbackMappedToRenewStates[stateInfo.state];
        }
        // Current window is window opener (popup)
        else if (isWindowOpenerMsal) {
            tokenResponseCallback = window.opener.callbackMappedToRenewStates[stateInfo.state];
        }
        // Redirect cases
        else {
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (self.config.auth.navigateToLoginRequestUrl) {
                self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                if (window.parent === window && !isPopup) {
                    window.location.href = self.cacheStorage.getItem(Constants_1.Constants.loginRequest, self.inCookie);
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                return;
            }
        }
        self.processCallBack(hash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isWindowOpenerMsal) {
            for (var i = 0; i < window.opener.openedWindows.length; i++) {
                window.opener.openedWindows[i].close();
            }
        }
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @param hash
     */
    UserAgentApplication.prototype.deserializeHash = function (urlFragment) {
        var hash = UrlUtils_1.UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = this.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        // async calls can fire iframe and login request at the same time if developer does not use the API as expected
        // incoming callback needs to be looked up to find the request type
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { //acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    //#endregion
    //#region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes) && UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > TimeUtils_1.TimeUtils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState,
                };
                ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authoritues from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
            return TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameHandle = this.addHiddenIFrame("msalRenewFrame" + scope);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
    };
    /**
     * @hidden
     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameHandle = this.addHiddenIFrame("msalIdTokenFrame");
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalIdTokenFrame", this.clientId);
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty("scope")) {
            // read the scopes
            scope = parameters["scope"];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.Constants.expiresIn]);
            expiration = TimeUtils_1.TimeUtils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
        };
        var error;
        var hashParams = this.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.Constants.errorDescription) || hashParams.hasOwnProperty(Constants_1.Constants.error)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.Constants.error] + "; Error description:" + hashParams[Constants_1.Constants.errorDescription]);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, hashParams[Constants_1.Constants.error]);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, hashParams[Constants_1.Constants.errorDescription]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.loginInProgress = false;
                this.cacheStorage.setItem(Constants_1.Constants.loginError, hashParams[Constants_1.Constants.errorDescription] + ":" + hashParams[Constants_1.Constants.error]);
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                this.acquireTokenInProgress = false;
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.Constants.error, hashErr = hashParams[_a], _b = Constants_1.Constants.errorDescription, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this.cacheStorage.setItem(Constants_1.Constants.msalSessionState, hashParams[Constants_1.Constants.sessionState]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this.logger.info("Fragment has access token");
                    this.acquireTokenInProgress = false;
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                        response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    }
                    // retrieve the authority from cache and replace with tenantID
                    var authorityKey_1 = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                    var authority = this.cacheStorage.getItem(authorityKey_1, this.inCookie);
                    if (!StringUtils_1.StringUtils.isEmpty(authority)) {
                        authority = UrlUtils_1.UrlUtils.replaceTenantPath(authority, response.tenantId);
                    }
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this.logger.info("Fragment has id token");
                    // login no longer in progress
                    this.loginInProgress = false;
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                    var authority = this.cacheStorage.getItem(authorityKey, this.inCookie);
                    if (!StringUtils_1.StringUtils.isEmpty(authority)) {
                        authority = UrlUtils_1.UrlUtils.replaceTenantPath(authority, idTokenObj.tenantId);
                    }
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                            this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
            }
        }
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + stateInfo.state, Constants_1.Constants.tokenRenewStatusCompleted);
        this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
        }
        if (error) {
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /* tslint:enable:no-string-literal */
    //#endregion
    //#region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    //#endregion
    //#region Scopes (Extract to Scopes.ts)
    // Note: "this" dependency in this section is minimal.
    // If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.appendScopes = function (request) {
        var scopes;
        if (request && request.scopes) {
            if (request.extraScopesToConsent) {
                scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
                scopes = request.scopes;
            }
        }
        return scopes;
    };
    //#endregion
    //#region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this.loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.loginInProgress = loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.acquireTokenInProgress = acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    //#endregion
    //#region Getters and Setters
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    //#endregion
    //#region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * extract URI from the host
     *
     * @param {string} URI
     * @returns {string} host from the URI
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        // if account is passed and matches the account object/or set to getAccount() from cache
        // if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        //return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @hidden
     * @ignore
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
     * @hidden
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    //#endregion
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return null;
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            sdk: "msal.js",
            sdkVersion: Constants_1.libraryVersion(),
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    tslib_1.__decorate([
        resolveTokenOnlyIfOutOfIframe
    ], UserAgentApplication.prototype, "acquireTokenSilent", null);
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
   * Check if there are dup scopes in a given request
   *
   * @param cachedScopes
   * @param scopes
   */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(4);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            //this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid) && !StringUtils_1.StringUtils.isEmpty(utid)) {
            homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Authority_1 = __webpack_require__(8);
var XHRClient_1 = __webpack_require__(18);
var Constants_1 = __webpack_require__(2);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        var host = this.CanonicalAuthorityUrlComponents.HostNameAndPort;
        if (this.IsInTrustedHostList(host)) {
            return resultPromise;
        }
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
            .then(function (response) {
            return response.tenant_discovery_endpoint;
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /*async: */ true);
            if (enableCaching) {
                // TODO: (shivb) ensure that this can be cached
                // xhr.setRequestHeader("Cache-Control", "Public");
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(17);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        if (this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
            return resultPromise;
        }
        return new Promise(function (resolve, reject) {
            return reject(ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation);
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(10);
var UrlUtils_1 = __webpack_require__(5);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ServerError_1 = __webpack_require__(11);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(19);
var Constants_1 = __webpack_require__(2);
var TelemetryConstants_1 = __webpack_require__(9);
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(5);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    // TODO sha256 this
    // Current test runner is being funny with node libs that are webpacked anyway
    // need a different solution
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(12);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(10);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(10);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(16);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(8);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(12);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(20);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(14);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(22);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(7);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(11);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(4);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(21);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var AuthenticationParameters_1 = __webpack_require__(14);
var Constants_1 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(4);
var StringUtils_1 = __webpack_require__(1);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        if (!scope) {
            this.scopes = [clientId];
        }
        else {
            this.scopes = scope.slice();
        }
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.state = state && !StringUtils_1.StringUtils.isEmpty(state) ? CryptoUtils_1.CryptoUtils.createNewGuid() + "|" + state : CryptoUtils_1.CryptoUtils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = CryptoUtils_1.CryptoUtils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Constants_1.libraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        // adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
        // this.logger.verbose("Calling addHint parameters");
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams);
    };
    //#region QueryParam helpers
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    ServerRequestParameters.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    //TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
        // This is a final check for all queryParams added so far; preference order: sid > login_hint
        // sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[0]);
                var utid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * @hidden
     * @ignore
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    ServerRequestParameters.prototype.sanitizeEQParams = function (request) {
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    //#endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var ClientAuthError_1 = __webpack_require__(6);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var TokenUtils_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            // TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
            // Need to add better error handling here to account for being unable to decode jwts.
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(32);
var ClientConfigurationError_1 = __webpack_require__(4);
/**
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage.instance) {
            return Storage.instance;
        }
        this.cacheLocation = cacheLocation;
        this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
        this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage.instance = this;
        if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
        }
        return Storage.instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(homeAccountIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function (state) {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((key.indexOf(Constants_1.CacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) && (!state || key.indexOf(state) !== -1)) {
                        var splitKey = key.split(Constants_1.Constants.resourceDelimiter);
                        var state_1 = void 0;
                        if (splitKey.length > 1) {
                            state_1 = splitKey[1];
                        }
                        if (state_1 && !this.tokenRenewalInProgress(state_1)) {
                            this.removeItem(key);
                            this.removeItem(Constants_1.Constants.renewStatus + state_1);
                            this.removeItem(Constants_1.Constants.stateLogin);
                            this.removeItem(Constants_1.Constants.stateAcquireToken);
                            this.setItemCookie(key, "", -1);
                        }
                    }
                }
            }
        }
        this.clearCookie();
    };
    Storage.prototype.tokenRenewalInProgress = function (stateValue) {
        var storage = window[this.cacheLocation];
        var renewStatus = storage[Constants_1.Constants.renewStatus + stateValue];
        return !(!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress);
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
            this.removeAcquireTokenEntries();
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    Storage.generateAcquireTokenAccountKey = function (accountId, state) {
        return Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_1.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AadAuthority_1 = __webpack_require__(17);
var B2cAuthority_1 = __webpack_require__(19);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(5);
var StringUtils_1 = __webpack_require__(1);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
    * Parse the url and determine the type of authority
    */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = UrlUtils_1.UrlUtils.CanonicalizeUri(authorityUrl);
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            case "adfs":
                return Authority_1.AuthorityType.Adfs;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
    * Create an authority object of the correct type based on the url
    * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
    */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DefaultEvent_1 = __webpack_require__(37);
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        //Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = config.platform;
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        // TODO, when i get to wiring this through, think about what it means if
        // a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
        // optional?
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        // TODO, name cache event different?
        // if type is cache event, change name
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryEvent_1 = __webpack_require__(38);
var TelemetryUtils_1 = __webpack_require__(23);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        /// Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryConstants_2 = __webpack_require__(9);
var TelemetryUtils_1 = __webpack_require__(23);
var CryptoUtils_1 = __webpack_require__(3);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ })
/******/ ]);
});
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9DcnlwdG9VdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL1NlcnZlckVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvVXNlckFnZW50QXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TY29wZVNldC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1Rva2VuVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2NvdW50LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWFkQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvWEhSQ2xpZW50LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQjJjQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoUmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuS2V5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5WYWx1ZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ2xpZW50SW5mby50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0lkVG9rZW4udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TdG9yYWdlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5DYWNoZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9UaW1lVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9SZXNwb25zZVV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aG9yaXR5RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlNYW5hZ2VyLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L0RlZmF1bHRFdmVudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7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Q0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDckUsSUFBSSxDQUFD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QUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxTQUFTLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQVZELDRDQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1SSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkosQ0FBQztBQUpELDRDQUlDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1FBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pOLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEssU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hJLENBQUM7QUFORCxzQ0FNQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxHQUFHO0lBQzVDLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQUU7U0FBTTtRQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQUU7SUFDL0csT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUhELG9EQUdDO0FBQUEsQ0FBQztBQUVGLFNBQWdCLFlBQVksQ0FBQyxHQUFHO0lBQzVCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDdEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksR0FBRyxJQUFJLElBQUk7UUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFBRSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBTkQsb0NBTUM7QUFFRCxTQUFnQixlQUFlLENBQUMsR0FBRztJQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM1RCxDQUFDO0FBRkQsMENBRUM7Ozs7Ozs7OztBQ25NRCw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQzs7R0FFRztBQUNIO0lBQUE7SUFTQSxDQUFDO0lBUkc7Ozs7T0FJRztJQUNJLG1CQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxXQUFXLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBVFksa0NBQVc7Ozs7Ozs7Ozs7QUNKeEIsNERBQTREO0FBQzVELGtDQUFrQztBQUVsQzs7O0dBR0c7QUFDSDtJQUFBO0lBNkVBLENBQUM7SUE1RUMsc0JBQVcsNkJBQWdCO2FBQTNCLGNBQXdDLE9BQU8sbUJBQW1CLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNyRSxzQkFBVyxrQkFBSzthQUFoQixjQUE2QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTlDLHNCQUFXLGtCQUFLO2FBQWhCLGNBQTZCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDOUMsc0JBQVcsdUJBQVU7YUFBckIsY0FBa0MsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUN6RCxzQkFBVyxxQkFBUTthQUFuQixjQUFnQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXBELHNCQUFXLG9CQUFPO2FBQWxCLGNBQStCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQVcsd0JBQVc7YUFBdEIsY0FBbUMsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMzRCxzQkFBVyx3QkFBVzthQUF0QixjQUFtQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzNELHNCQUFXLHNCQUFTO2FBQXBCLGNBQWlDLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQVcseUJBQVk7YUFBdkIsY0FBb0MsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3RCxzQkFBVyxtQkFBTTthQUFqQixjQUE4QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRWhELHNCQUFXLDJCQUFjO2FBQXpCLGNBQXNDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRSxzQkFBVyxzQkFBUzthQUFwQixjQUFpQyxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3ZELHNCQUFXLGlDQUFvQjthQUEvQixjQUE0QyxPQUFPLHdCQUF3QixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFOUUsc0JBQVcsNkJBQWdCO2FBQTNCLGNBQXdDLE9BQU8sb0JBQW9CLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUN0RSxzQkFBVyxzQkFBUzthQUFwQixjQUFpQyxPQUFPLGlCQUFpQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDNUQsc0JBQVcsMkJBQWM7YUFBekIsY0FBc0MsT0FBTyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3ZFLHNCQUFXLDBCQUFhO2FBQXhCLGNBQXFDLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNwRSxzQkFBVyx1QkFBVTthQUFyQixjQUFrQyxPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDOUQsc0JBQVcsOEJBQWlCO2FBQTVCLGNBQXlDLE9BQU8seUJBQXlCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM1RSxzQkFBVyx1QkFBVTthQUFyQixjQUFrQyxPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDOUQsc0JBQVcseUJBQVk7YUFBdkIsY0FBb0MsT0FBTyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xFLHNCQUFXLHFCQUFRO2FBQW5CLGNBQWdDLE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDekQsc0JBQVcsdUJBQVU7YUFBckIsY0FBa0MsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMxRCxzQkFBVyx5QkFBWTthQUF2QixjQUFvQyxPQUFPLG9CQUFvQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEUsc0JBQVcsdUJBQVU7YUFBckIsY0FBa0MsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzlELHNCQUFXLHdCQUFXO2FBQXRCLGNBQW1DLE9BQU8seUJBQXlCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUN0RSxzQkFBVyxvQkFBTzthQUFsQixjQUErQixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3ZELHNCQUFXLGdDQUFtQjthQUE5QixjQUEyQyxPQUFPLDRCQUE0QixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDakYsc0JBQVcsaUJBQUk7YUFBZixjQUE0QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTVDLHNCQUFXLHVCQUFVO2FBQXJCLGNBQWtDLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDeEQsc0JBQVcsMEJBQWE7YUFBeEIsY0FBcUMsT0FBTyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3JGLHNCQUFXLGdCQUFHO2FBQWQsY0FBMkIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUUxQyxzQkFBVyxrQ0FBcUI7YUFBaEMsY0FBNkMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQy9FLHNCQUFXLHdCQUFXO2FBQXRCLGNBQW1DLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDM0Qsc0JBQVcsbUJBQU07YUFBakIsY0FBOEIsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVoRCxzQkFBVyxtQ0FBc0I7YUFBakMsY0FBOEMsT0FBTyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2pGLHNCQUFXLDhCQUFpQjthQUE1QixjQUF5QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXRELHNCQUFXLHNDQUF5QjthQUFwQyxjQUFpRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3JFLHNCQUFXLHNDQUF5QjthQUFwQyxjQUFpRCxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3RFLHNCQUFXLHVDQUEwQjthQUFyQyxjQUFrRCxPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3pFLHNCQUFXLHVCQUFVO2FBQXJCLGNBQWtDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDNUQsVUFBc0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FIMkQ7SUFLNUQsc0JBQVcsd0JBQVc7YUFBdEIsY0FBbUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUM5RCxVQUF1QixNQUFjO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUM7OztPQUg2RDtJQUs5RCxzQkFBVyxrQkFBSzthQUFoQixjQUE2QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzlDLHNCQUFXLHVCQUFVO2FBQXJCLGNBQWtDLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDekQsc0JBQVcsb0JBQU87YUFBbEIsY0FBK0IsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVsRCxzQkFBVyxrQ0FBcUI7YUFBaEMsY0FBNkMsT0FBTyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTlFLHNCQUFXLG1CQUFNO2FBQWpCLGNBQThCLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDaEQsc0JBQVcsd0JBQVc7YUFBdEIsY0FBbUMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNyRCxzQkFBVyx5QkFBWTthQUF2QixjQUFvQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXZELHNCQUFXLCtCQUFrQjthQUE3QixjQUFpRCxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3pFLHNCQUFXLGlDQUFvQjthQUEvQixjQUFtRCxPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFN0Usc0JBQVcsb0NBQXVCO2FBQWxDLGNBQXdELE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUN2RixzQkFBVyxpQ0FBb0I7YUFBL0IsY0FBcUQsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBekJsRSxxQkFBVyxHQUFXLEdBQUcsQ0FBQztJQUsxQixzQkFBWSxHQUFXLEdBQUcsQ0FBQztJQXFCNUMsZ0JBQUM7Q0FBQTtBQTdFWSw4QkFBUztBQStFdEI7OztHQUdHO0FBQ1UsaUJBQVMsR0FBRztJQUNyQixTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCLHFCQUFxQixFQUFFLDBCQUEwQjtDQUNwRCxDQUFDO0FBRVcsMEJBQWtCLEdBQUk7SUFDakMsbUJBQW1CLEVBQUUsbUJBQW1CO0lBQ3hDLHdCQUF3QixFQUFFLHdCQUF3QjtJQUNsRCxzQkFBc0IsRUFBRSxzQkFBc0I7SUFDOUMsMkJBQTJCLEVBQUUsMkJBQTJCO0lBQ3hELDBCQUEwQixFQUFFLDBCQUEwQjtJQUN0RCwwQkFBMEIsRUFBRSwwQkFBMEI7Q0FDdkQsQ0FBQztBQUVGOzs7R0FHRztBQUNVLGdCQUFRLEdBQUc7SUFDcEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsR0FBRyxFQUFFLEtBQUs7SUFDVixVQUFVLEVBQUUsWUFBWTtJQUN4QixRQUFRLEVBQUUsVUFBVTtJQUNwQixXQUFXLEVBQUUsYUFBYTtJQUMxQixhQUFhLEVBQUUsZUFBZTtJQUM5QixTQUFTLEVBQUUsV0FBVztJQUN0QixVQUFVLEVBQUUsbUJBQW1CO0lBQy9CLGNBQWMsRUFBRSx1QkFBdUI7SUFDdkMsU0FBUyxFQUFFLFdBQVc7SUFDdEIsVUFBVSxFQUFFLFlBQVk7Q0FDM0IsQ0FBQztBQUVGOztHQUVHO0FBQ1UsMkJBQW1CLEdBQUc7SUFDakMsZ0JBQVEsQ0FBQyxHQUFHO0lBQ1osZ0JBQVEsQ0FBQyxVQUFVO0NBQ3BCLENBQUM7QUFJRjs7Ozs7R0FLRztBQUNVLG1CQUFXLEdBQUc7SUFDMUIsS0FBSyxFQUFFLE9BQU87SUFDZCxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLElBQUksRUFBRSxNQUFNO0NBQ1osQ0FBQztBQUVGOztHQUVHO0FBQ0gsU0FBZ0IsY0FBYztJQUM1QixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRkQsd0NBRUM7Ozs7Ozs7OztBQ3hKRCw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQzs7R0FFRztBQUNIO0lBQUE7SUFxSUEsQ0FBQztJQW5JRzs7O09BR0c7SUFDSSx5QkFBYSxHQUFwQjtRQUNJLGlGQUFpRjtRQUNqRix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLDhEQUE4RDtRQUM5RCxrRUFBa0U7UUFDbEUscUVBQXFFO1FBQ3JFLG9FQUFvRTtRQUNwRSxpQ0FBaUM7UUFDakMscUVBQXFFO1FBQ3JFLGNBQWM7UUFDZCwySEFBMkg7UUFDM0gscUNBQXFDO1FBQ3JDLHFDQUFxQztRQUNyQyxxQ0FBcUM7UUFDckMscUNBQXFDO1FBQ3JDLG9DQUFvQztRQUNwQyxxQ0FBcUM7UUFDckMsK0NBQStDO1FBQy9DLG1GQUFtRjtRQUNuRiwwQkFBMEI7UUFFMUIsSUFBTSxTQUFTLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVk7UUFDckQsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM1QyxJQUFNLE1BQU0sR0FBZSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWxDLDhMQUE4TDtZQUM5TCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsK0NBQStDO1lBQ2xFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQywwRkFBMEY7WUFFN0csK0tBQStLO1lBQy9LLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQywrQ0FBK0M7WUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLCtDQUErQztZQUVsRSxPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7a0JBQzFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7a0JBQ3pFLEdBQUcsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUMvRSxHQUFHLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztrQkFDL0UsR0FBRyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7a0JBQy9FLEdBQUcsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2tCQUNqRixXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2tCQUMzRSxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakY7YUFDSTtZQUNMLElBQU0sVUFBVSxHQUFXLHNDQUFzQyxDQUFDO1lBQ2xFLElBQU0sR0FBRyxHQUFXLGtCQUFrQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztZQUNsQixJQUFJLFlBQVksR0FBVyxFQUFFLENBQUM7WUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7b0JBQ3BELGtDQUFrQztvQkFDbEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRCxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7b0JBQzNCLFlBQVksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDbEMsbUZBQW1GO29CQUNuRixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsOENBQThDO29CQUN4RCxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMseUJBQXlCO29CQUNuQyxZQUFZLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDUCxZQUFZLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QjthQUNKO1lBQ0QsT0FBTyxZQUFZLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFHRCw4SkFBOEo7SUFFOUo7Ozs7T0FJRztJQUNJLHdCQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUMzRCxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzQixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7WUFDMUQsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHVCQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxLQUFvQixDQUFDLENBQUMsbURBQW1EO1FBQzdFLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztRQUNuQyxJQUFNLE1BQU0sR0FBRyxVQUFDLENBQVMsSUFBSyx5QkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDO1FBQ3JFLElBQU0sR0FBRyxHQUFPLEVBQUUsQ0FBQztRQUNuQixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPLEtBQUssRUFBRTtZQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUM7QUFySVksa0NBQVc7Ozs7Ozs7OztBQ054Qiw0REFBNEQ7QUFDNUQsa0NBQWtDOzs7QUFFbEMseUNBQStDO0FBQy9DLCtDQUFvRDtBQUd2Qyx1Q0FBK0IsR0FBRztJQUMzQyxtQkFBbUIsRUFBRTtRQUNqQixJQUFJLEVBQUUsZUFBZTtRQUNyQixJQUFJLEVBQUUscUhBQXFIO0tBQzlIO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDbEIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixJQUFJLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLCtCQUErQjtRQUNyQyxJQUFJLEVBQUUsb0RBQW9EO0tBQzdEO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDcEIsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixJQUFJLEVBQUUscUlBQXFJO1lBQ3ZJLDBIQUEwSDtLQUNqSTtJQUNELHFCQUFxQixFQUFFO1FBQ25CLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsSUFBSSxFQUFFLGtEQUFrRDtZQUN0RCwwSEFBMEg7S0FDL0g7SUFDRCxjQUFjLEVBQUU7UUFDWixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLElBQUksRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLElBQUksRUFBRSx5Q0FBeUM7S0FDbEQ7SUFDRCxjQUFjLEVBQUU7UUFDWixJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLElBQUksRUFBRSw2RUFBNkU7S0FDdEY7SUFDRCxvQkFBb0IsRUFBRTtRQUNsQixJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLElBQUksRUFBRSxtSUFBbUk7S0FDNUk7SUFDRCxvQkFBb0IsRUFBRTtRQUNsQixJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLElBQUksRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRCx1QkFBdUIsRUFBRTtRQUNyQixJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLElBQUksRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRCw4QkFBOEIsRUFBRTtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO1FBQ3hDLElBQUksRUFBRSxvRUFBb0U7S0FDN0U7SUFDRCwwQkFBMEIsRUFBRTtRQUN4QixJQUFJLEVBQUUsZ0NBQWdDO1FBQ3RDLElBQUksRUFBRSxpREFBaUQ7S0FDMUQ7SUFDRCx5QkFBeUIsRUFBRTtRQUN2QixJQUFJLEVBQUUsOEJBQThCO1FBQ3BDLElBQUksRUFBRSxrREFBa0Q7S0FDM0Q7SUFDRCxpQkFBaUIsRUFBRTtRQUNmLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsSUFBSSxFQUFFLDZCQUE2QjtLQUN0QztJQUNELG9CQUFvQixFQUFFO1FBQ2xCLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsSUFBSSxFQUFFLHlEQUF5RDtLQUNsRTtDQUNKLENBQUM7QUFFRjs7R0FFRztBQUNIO0lBQThDLG9EQUFlO0lBRXpELGtDQUFZLFNBQWlCLEVBQUUsWUFBcUI7UUFBcEQsWUFDSSxrQkFBTSxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBR2pDO1FBRkcsS0FBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUN2QyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDcEUsQ0FBQztJQUVNLHNEQUE2QixHQUFwQztRQUNJLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQ3hGLEtBQUcsdUNBQStCLENBQUMsbUJBQW1CLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLDhEQUFxQyxHQUE1QyxVQUE2QyxrQkFBMEI7UUFDbkUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLHVDQUErQixDQUFDLG9CQUFvQixDQUFDLElBQUksRUFDdEYsdUNBQStCLENBQUMsb0JBQW9CLENBQUMsSUFBSSx5QkFBb0Isa0JBQWtCLCtCQUEwQixxQkFBUyxDQUFDLGtCQUFrQixVQUFLLHFCQUFTLENBQUMsb0JBQW9CLE1BQUcsQ0FBQyxDQUFDO0lBQ3hNLENBQUM7SUFFTSxzREFBNkIsR0FBcEM7UUFDSSxPQUFPLElBQUksd0JBQXdCLENBQUMsdUNBQStCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUN2Rix1Q0FBK0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sMkRBQWtDLEdBQXpDO1FBQ0ksT0FBTyxJQUFJLHdCQUF3QixDQUFDLHVDQUErQixDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSx1Q0FBK0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsSyxDQUFDO0lBRU0seURBQWdDLEdBQXZDLFVBQXdDLGNBQXNCO1FBQzFELE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQ3ZGLHVDQUErQixDQUFDLHFCQUFxQixDQUFDLElBQUksNENBQXVDLGNBQWdCLENBQUMsQ0FBQztJQUM5SCxDQUFDO0lBRU0sb0RBQTJCLEdBQWxDLFVBQW1DLFdBQW1CO1FBQ2xELE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM3RSx1Q0FBK0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxzQkFBaUIsV0FBVyxNQUFHLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU0sa0RBQXlCLEdBQWhDLFVBQWlDLFdBQW1CO1FBQ2hELE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUNoRix1Q0FBK0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxzQkFBaUIsV0FBVyxNQUFHLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRU0sdURBQThCLEdBQXJDLFVBQXNDLFdBQW1CO1FBQ3JELE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM3RSx1Q0FBK0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxzQkFBaUIsV0FBVyxNQUFHLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU0sa0RBQXlCLEdBQWhDLFVBQWlDLFdBQWdCO1FBQzdDLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUNoRix1Q0FBK0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxzQkFBaUIsV0FBYSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVNLGlEQUF3QixHQUEvQixVQUFnQyxXQUFnQjtRQUM1QyxPQUFPLElBQUksd0JBQXdCLENBQUMsdUNBQStCLENBQUMsYUFBYSxDQUFDLElBQUksRUFDL0UsdUNBQStCLENBQUMsYUFBYSxDQUFDLElBQUksc0JBQWlCLFdBQWEsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTSx3REFBK0IsR0FBdEMsVUFBdUMsdUJBQStCO1FBQ2xFLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyx1Q0FBK0IsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQzNGLHVDQUErQixDQUFDLHlCQUF5QixDQUFDLElBQUksc0JBQWlCLHVCQUF5QixDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVNLGdEQUF1QixHQUE5QjtRQUNVLGtFQUFrRSxFQUFoRSxjQUFJLEVBQUUsY0FBMEQsQ0FBQztRQUN6RSxPQUFPLElBQUksd0JBQXdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxtREFBMEIsR0FBakMsVUFBa0MsTUFBd0I7UUFDaEQscUVBQXFFLEVBQW5FLGNBQUksRUFBRSxjQUE2RCxDQUFDO1FBQzVFLElBQU0sWUFBWSxHQUFHO1lBQ2pCLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLGtCQUFrQixFQUFFLFFBQVE7WUFDNUIsZ0JBQWdCLEVBQUUsVUFBVTtTQUMvQixDQUFDO1FBRUYsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDeEMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDZCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUssR0FBRyxVQUFLLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFFLENBQUMsQ0FBQztRQUNqRixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFWCxPQUFPLElBQUksd0JBQXdCLENBQUMsSUFBSSxFQUFLLElBQUksd0JBQW1CLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLENBbEY2QyxpQ0FBZSxHQWtGNUQ7QUFsRlksNERBQXdCOzs7Ozs7Ozs7QUN2RnJDLDREQUE0RDtBQUM1RCxrQ0FBa0M7O0FBR2xDLHlDQUFrRDtBQUVsRCx5Q0FBdUM7QUFDdkMsMkNBQTRDO0FBRTVDOztHQUVHO0FBQ0g7SUFBQTtJQThNQSxDQUFDO0lBNU1DOzs7T0FHRztJQUNJLDBCQUFpQixHQUF4QixVQUF5QixtQkFBNEM7UUFDbkUsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEUsSUFBSSxZQUFZLEdBQVcsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUM7UUFDdkYsdUZBQXVGO1FBQ3ZGLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsWUFBWSxJQUFJLEdBQUcsQ0FBQztTQUNyQjthQUFNO1lBQ0wsWUFBWSxJQUFJLEdBQUcsQ0FBQztTQUNyQjtRQUVELElBQU0sVUFBVSxHQUFXLEtBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7UUFDN0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtDQUF5QixHQUFoQyxVQUFpQyxtQkFBNEM7UUFDM0UsSUFBSSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRXhDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBTSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVoRixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFnQixtQkFBbUIsQ0FBQyxVQUFZLENBQUMsQ0FBQztRQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFnQixtQkFBbUIsQ0FBQyxVQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtZQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7WUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksbUJBQW1CLENBQUMsZUFBZSxFQUFFO1lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFO1lBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNwRDtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2RixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDWSxxQ0FBNEIsR0FBM0MsVUFBNEMsTUFBcUIsRUFBRSxRQUFnQjtRQUNqRixJQUFNLGFBQWEsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksYUFBYSxJQUFJLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLDhCQUFxQixHQUE1QjtRQUNFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFpQixHQUF4QixVQUF5QixHQUFXLEVBQUUsUUFBZ0I7UUFDcEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLHFCQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxvQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUU7WUFDMUgsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sd0NBQStCLEdBQXRDLFVBQXVDLFNBQWUsRUFBRSxTQUFtQjtRQUN6RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLGVBQWUsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRDs7O09BR0c7SUFDSSx5QkFBZ0IsR0FBdkIsVUFBd0IsR0FBVztRQUNqQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxjQUFjLENBQUM7U0FDdEI7UUFFRCx1REFBdUQ7UUFDdkQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFFakYsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE1BQU0sb0JBQW9CLENBQUM7U0FDNUI7UUFFRCxJQUFJLGFBQWEsR0FBUztZQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2QixDQUFDO1FBRUYsSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssVUFBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDNUYsYUFBYSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDMUMsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3QkFBZSxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDdkMsR0FBRyxJQUFJLEdBQUcsQ0FBQztTQUNaO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx5REFBeUQ7SUFDbEQsaUJBQVEsR0FBZixVQUFnQixHQUFXLEVBQUUsTUFBYztRQUN6QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0NBQTZCLEdBQXBDLFVBQXFDLEdBQVcsRUFBRSxJQUFZO1FBQzVELElBQUkseUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUVELElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDbkQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLGNBQWM7UUFDZCxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQztRQUM3QyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0IsYUFBYTtRQUNiLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHVCQUFjLEdBQXJCLFVBQXNCLG1CQUEyQjtRQUMvQyxJQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUFNLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUNELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBOU1ZLDRCQUFROzs7Ozs7Ozs7QUNackIsNERBQTREO0FBQzVELGtDQUFrQzs7O0FBRWxDLHlDQUF3QztBQUV4QywyQ0FBbUQ7QUFFdEMsOEJBQXNCLEdBQUc7SUFDbEMsc0JBQXNCLEVBQUU7UUFDcEIsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxJQUFJLEVBQUUsa0VBQWtFO1lBQ3BFLHFFQUFxRTtLQUM1RTtJQUNELHdCQUF3QixFQUFFO1FBQ3RCLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLDhFQUE4RTtLQUN2RjtJQUNELHVCQUF1QixFQUFFO1FBQ3JCLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsSUFBSSxFQUFFLHlFQUF5RTtLQUNsRjtJQUNELGdCQUFnQixFQUFFO1FBQ2QsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixJQUFJLEVBQUUsMEdBQTBHO0tBQ25IO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRCxjQUFjLEVBQUU7UUFDWixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSwwQkFBMEI7S0FDbkM7SUFDRCxpQkFBaUIsRUFBRTtRQUNmLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsSUFBSSxFQUFFLGdCQUFnQjtLQUN6QjtJQUNELGtCQUFrQixFQUFFO1FBQ2hCLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLHlDQUF5QztLQUNsRDtJQUNELGtCQUFrQixFQUFFO1FBQ2hCLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLDRFQUE0RTtLQUNyRjtJQUNELHlCQUF5QixFQUFFO1FBQ3ZCLElBQUksRUFBRSw2QkFBNkI7UUFDbkMsSUFBSSxFQUFFLG1GQUFtRjtLQUM1RjtJQUNELGtCQUFrQixFQUFFO1FBQ2hCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLDBCQUEwQjtLQUNuQztJQUNELGFBQWEsRUFBRTtRQUNYLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLHFEQUFxRDtLQUM5RDtJQUNELHNCQUFzQixFQUFFO1FBQ3BCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLHlCQUF5QjtLQUNsQztJQUNELHFCQUFxQixFQUFFO1FBQ25CLElBQUksRUFBRSxtQkFBbUI7UUFDekIsSUFBSSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNELHVCQUF1QixFQUFFO1FBQ3JCLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsSUFBSSxFQUFFLDZHQUE2RztLQUN0SDtJQUNELDJCQUEyQixFQUFFO1FBQ3pCLElBQUksRUFBRSxpQ0FBaUM7UUFDdkMsSUFBSSxFQUFFLCtGQUErRjtLQUN4RztJQUNELGtCQUFrQixFQUFFO1FBQ2hCLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsSUFBSSxFQUFFLG9GQUFvRjtLQUM3RjtJQUNELGdCQUFnQixFQUFFO1FBQ2QsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixJQUFJLEVBQUUsK0VBQStFO0tBQ3hGO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixJQUFJLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDcEIsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxJQUFJLEVBQUUscUVBQXFFO0tBQzlFO0NBQ0osQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBcUMsMkNBQVM7SUFFMUMseUJBQVksU0FBaUIsRUFBRSxZQUFxQjtRQUFwRCxZQUNJLGtCQUFNLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FJakM7UUFIRyxLQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBRTlCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDM0QsQ0FBQztJQUVNLDZDQUE2QixHQUFwQyxVQUFxQyxTQUFrQjtRQUNuRCxJQUFJLFlBQVksR0FBRyw4QkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7UUFDdkUsSUFBSSxTQUFTLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QyxZQUFZLElBQUksZUFBYSxTQUFXLENBQUM7U0FDNUM7UUFDRCxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRU0sd0RBQXdDLEdBQS9DLFVBQWdELEtBQWE7UUFDekQsT0FBTyxJQUFJLGVBQWUsQ0FBQyw4QkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQ3pFLDJCQUF5QixLQUFLLFVBQUssOEJBQXNCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRU0scURBQXFDLEdBQTVDLFVBQTZDLEtBQWE7UUFDdEQsT0FBTyxJQUFJLGVBQWUsQ0FBQyw4QkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQzNFLDJCQUF5QixLQUFLLFVBQUssOEJBQXNCLENBQUMsd0JBQXdCLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU0sc0NBQXNCLEdBQTdCLFVBQThCLFNBQWtCO1FBQzVDLElBQUksWUFBWSxHQUFHLDhCQUFzQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUNoRSxJQUFJLFNBQVMsSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlDLFlBQVksSUFBSSxlQUFhLFNBQVcsQ0FBQztTQUM1QztRQUNELE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTSw4Q0FBOEIsR0FBckM7UUFDSSxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDcEUsOEJBQXNCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLHlDQUF5QixHQUFoQyxVQUFpQyxPQUFnQjtRQUM3QyxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQzlELDhCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLHNCQUFpQixPQUFTLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQseUVBQXlFO0lBQ2xFLHVDQUF1QixHQUE5QixVQUErQixZQUFvQixFQUFFLFdBQW1CO1FBQ3BFLE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUNqRSw4QkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFNBQUksWUFBWSwyQkFBc0IsV0FBVyxNQUFHLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRUQseUVBQXlFO0lBQ2xFLHdDQUF3QixHQUEvQixVQUFnQyxZQUFvQixFQUFFLFdBQW1CO1FBQ3JFLE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUNsRSw4QkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLFNBQUksWUFBWSwyQkFBc0IsV0FBVyxNQUFHLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRU0sMENBQTBCLEdBQWpDO1FBQ0ksT0FBTyxJQUFJLGVBQWUsQ0FBQyw4QkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQ3JFLDhCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxpREFBaUMsR0FBeEM7UUFDSSxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLHlCQUF5QixDQUFDLElBQUksRUFDNUUsOEJBQXNCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLHdDQUF3QixHQUEvQjtRQUNJLE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUNyRSw4QkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sNkNBQTZCLEdBQXBDLFVBQXFDLFNBQWlCO1FBQ2xELE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsYUFBYSxDQUFDLElBQUksRUFDN0QsOEJBQXNCLENBQUMsYUFBYSxDQUFDLElBQUksU0FBSSxTQUFTLE1BQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSw0Q0FBNEIsR0FBbkM7UUFDSSxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLHNCQUFzQixDQUFDLElBQUksRUFDekUsOEJBQXNCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLDJDQUEyQixHQUFsQztRQUNJLE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUN4RSw4QkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sNkNBQTZCLEdBQXBDLFVBQXFDLFdBQW1CO1FBQ3BELE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUN2RSw4QkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLDRCQUF1QixXQUFhLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU0saURBQWlDLEdBQXhDLFVBQXlDLFdBQW1CO1FBQ3hELE9BQU8sSUFBSSxlQUFlLENBQUMsOEJBQXNCLENBQUMsMkJBQTJCLENBQUMsSUFBSSxFQUMzRSw4QkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLDRCQUF1QixXQUFhLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRU0sNkNBQTZCLEdBQXBDLFVBQXFDLHFCQUE2QjtRQUM5RCxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksRUFDbEUsOEJBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSw2QkFBd0IscUJBQXVCLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0seUNBQXlCLEdBQWhDLFVBQWlDLGtCQUEwQjtRQUN2RCxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFDaEUsOEJBQXNCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSw0QkFBdUIsa0JBQW9CLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU0sd0NBQXdCLEdBQS9CLFVBQWdDLHVCQUErQjtRQUMzRCxPQUFPLElBQUksZUFBZSxDQUFDLDhCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksRUFDbEUsOEJBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSw4QkFBeUIsdUJBQXlCLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBRU0saURBQWlDLEdBQXhDO1FBQ0ksT0FBTyxJQUFJLGVBQWUsQ0FBQyw4QkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQ3pFLDhCQUFzQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FwSG9DLHFCQUFTLEdBb0g3QztBQXBIWSwwQ0FBZTs7Ozs7Ozs7O0FDOUY1Qiw0REFBNEQ7QUFDNUQsa0NBQWtDOzs7QUFFckIsd0JBQWdCLEdBQUc7SUFDNUIsZUFBZSxFQUFFO1FBQ2IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUscUNBQXFDO0tBQzlDO0NBQ0osQ0FBQztBQUVGOztFQUVFO0FBQ0Y7SUFBK0IscUNBQUs7SUFLaEMsbUJBQVksU0FBaUIsRUFBRSxZQUFxQjtRQUFwRCxZQUNJLGtCQUFNLFlBQVksQ0FBQyxTQU10QjtRQUxHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxLQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQzs7SUFDNUIsQ0FBQztJQUVNLCtCQUFxQixHQUE1QixVQUE2QixPQUFlO1FBQ3hDLE9BQU8sSUFBSSxTQUFTLENBQUMsd0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBSyx3QkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFLLE9BQVMsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0FqQjhCLEtBQUssR0FpQm5DO0FBakJZLDhCQUFTOzs7Ozs7Ozs7QUNidEIsNERBQTREO0FBQzVELGtDQUFrQzs7QUFJbEMsd0RBQW1GO0FBQ25GLDBDQUF3QztBQUN4Qyx3Q0FBNEM7QUFFNUM7O0dBRUc7QUFDSCxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsK0NBQUc7SUFDSCxpREFBSTtJQUNKLCtDQUFHO0FBQ0wsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQ7O0dBRUc7QUFDSDtJQUNFLG1CQUFZLFNBQWlCLEVBQUUsaUJBQTBCO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBRXBDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBTUQsc0JBQVcsNkJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFJRCxzQkFBVyw0Q0FBcUI7YUFBaEM7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFrQjthQUE3QjtZQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFGLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNENBQXFCO2FBQWhDO1lBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlFLENBQUM7OztPQUFBO0lBRU8sb0NBQWdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNqQyxNQUFNLHlDQUF5QyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUtELHNCQUFXLHlDQUFrQjtRQUg3Qjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQThCLEdBQVc7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG1CQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUM7UUFDOUMsQ0FBQzs7O09BTEE7SUFVRCxzQkFBVyxzREFBK0I7YUFBMUM7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFO2dCQUN6QyxJQUFJLENBQUMsK0JBQStCLEdBQUcsbUJBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUMzRjtZQUVELE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBS0Qsc0JBQWMseURBQWtDO1FBSGhEOztXQUVHO2FBQ0g7WUFDRSxPQUFVLElBQUksQ0FBQyxrQkFBa0IsMENBQXVDLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNLLGlDQUFhLEdBQXJCO1FBQ0UsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJO1lBQ0YsVUFBVSxHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQztTQUNuRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSwwREFBK0IsQ0FBQyxvQkFBb0IsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQzFFLE1BQU0sMERBQStCLENBQUMsb0JBQW9CLENBQUM7U0FDNUQ7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEUsTUFBTSwwREFBK0IsQ0FBQyx1QkFBdUIsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLHFDQUFpQixHQUF6QixVQUEwQiwyQkFBbUM7UUFDM0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDL0IsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQzthQUN2RixJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hCLE9BQWlDO2dCQUM3QixxQkFBcUIsRUFBRSxRQUFRLENBQUMsc0JBQXNCO2dCQUN0RCxrQkFBa0IsRUFBRSxRQUFRLENBQUMsb0JBQW9CO2dCQUNqRCxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07YUFDMUIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0kseUNBQXFCLEdBQTVCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLDJCQUEyQixHQUFHLEVBQUUsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLElBQUksQ0FBQyw2Q0FBbUM7WUFDeEYsMkJBQTJCLEdBQUcsbUNBQW1DLENBQUM7WUFDbEUsT0FBTyxLQUFJLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyx1QkFBaUQ7WUFDeEQsS0FBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1lBQ3ZELE9BQU8sS0FBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBTUgsZ0JBQUM7QUFBRCxDQUFDO0FBN0hxQiw4QkFBUzs7Ozs7Ozs7OztBQ3JCbEIseUJBQWlCLEdBQUcsT0FBTyxDQUFDO0FBQzVCLHNCQUFjLEdBQUcsWUFBWSxDQUFDO0FBQzlCLHNCQUFjLEdBQUcsWUFBWSxDQUFDO0FBQzlCLHdCQUFnQixHQUFJLGNBQWMsQ0FBQztBQUVuQyxrQ0FBMEIsR0FBSTtJQUN2Qyw0QkFBNEIsRUFBRSwrQkFBK0I7SUFDN0QscUJBQXFCLEVBQUUsbUJBQW1CO0lBQzFDLGdCQUFnQixFQUFFLGFBQWE7SUFDL0Isb0JBQW9CLEVBQUUsMkJBQTJCO0lBQ2pELDBCQUEwQixFQUFFLGtDQUFrQztJQUM5RCwrQkFBK0IsRUFBRSxpQ0FBaUM7SUFDbEUsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQyx5QkFBeUIsRUFBRSxFQUFFO0lBQzdCLHVCQUF1QixFQUFFLDhCQUE4QjtJQUN2RCx1QkFBdUIsRUFBRSw4QkFBOEI7SUFDdkQsbUJBQW1CLEVBQUUsMEJBQTBCO0lBQy9DLDZCQUE2QixFQUFFLCtCQUErQjtDQUNqRSxDQUFDO0FBRUYsNERBQTREO0FBQy9DLDBCQUFrQixHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7O0FDckI3Qyw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQywyQ0FBa0Q7QUFDbEQseUNBQW1EO0FBTW5ELElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQix5Q0FBSztJQUNMLDZDQUFPO0lBQ1AsdUNBQUk7SUFDSiw2Q0FBTztBQUNULENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQUVEO0lBNEJFLGdCQUFZLGFBQThCLEVBQ3RDLE9BS007UUFMTixzQ0FLTTtRQXJCVjs7V0FFRztRQUNLLFVBQUssR0FBYSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBb0JoQyw4QkFBa0IsRUFBbEIsdUNBQWtCLEVBQ2xCLGtCQUFxQixFQUFyQiwwQ0FBcUIsRUFDckIsOEJBQXlCLEVBQXpCLDhDQUF5QixDQUNqQjtRQUVaLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSywyQkFBVSxHQUFsQixVQUFtQixRQUFrQixFQUFFLFVBQWtCLEVBQUUsV0FBb0I7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxXQUFXLENBQUMsRUFBRTtZQUN2RSxPQUFPO1NBQ1I7UUFDRCxJQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsMEJBQWMsRUFBRSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztTQUNuSDthQUNJO1lBQ0gsR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsMEJBQWMsRUFBRSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztTQUN4RjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBZSxHQUFmLFVBQWdCLEtBQWUsRUFBRSxPQUFlLEVBQUUsV0FBb0I7UUFDcEUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUJBQVEsR0FBUixVQUFTLE9BQWU7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3QkFBTyxHQUFQLFVBQVEsT0FBZTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFVLEdBQVYsVUFBVyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUJBQUksR0FBSixVQUFLLE9BQWU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3QkFBTyxHQUFQLFVBQVEsT0FBZTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILHdCQUFPLEdBQVAsVUFBUSxPQUFlO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQVUsR0FBVixVQUFXLE9BQWU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDO0FBcklZLHdCQUFNOzs7Ozs7Ozs7QUNqQm5CLDREQUE0RDtBQUM1RCxrQ0FBa0M7OztBQUVsQyx5Q0FBd0M7QUFFM0IsMEJBQWtCLEdBQUc7SUFDOUIsaUJBQWlCLEVBQUU7UUFDZixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixJQUFJLEVBQUUsc0JBQXNCO0tBQy9CO0NBQ0osQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBaUMsdUNBQVM7SUFFdEMscUJBQVksU0FBaUIsRUFBRSxZQUFxQjtRQUFwRCxZQUNJLGtCQUFNLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FJakM7UUFIRyxLQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUUxQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQ3ZELENBQUM7SUFFTSx3Q0FBNEIsR0FBbkM7UUFDSSxPQUFPLElBQUksV0FBVyxDQUFDLDBCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUQsMEJBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLG9DQUF3QixHQUEvQixVQUFnQyxTQUFpQjtRQUM3QyxPQUFPLElBQUksV0FBVyxDQUFDLDBCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksRUFDN0QsU0FBUyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQWxCZ0MscUJBQVMsR0FrQnpDO0FBbEJZLGtDQUFXOzs7Ozs7Ozs7QUNsQnhCLDREQUE0RDtBQUM1RCxrQ0FBa0M7OztBQUdsQywrQ0FBa0Q7QUFDbEQsaURBQXNEO0FBQ3RELHdEQUFvRTtBQUVwRSwyQ0FBMEM7QUFDMUMseUNBQTJIO0FBQzNILHdDQUFvQztBQUVwQyx3Q0FBb0M7QUFDcEMsd0NBQW9DO0FBQ3BDLHlDQUFzQztBQUN0QywyQ0FBa0Q7QUFDbEQsMkNBQWtEO0FBQ2xELDJDQUFnRDtBQUNoRCwwQ0FBOEM7QUFDOUMsd0NBQTRDO0FBQzVDLDhDQUFzRDtBQUN0RCxpREFBc0Q7QUFDdEQsOENBQXNGO0FBRXRGLHdEQUE0RTtBQUM1RSx5Q0FBOEM7QUFDOUMsK0NBQWtGO0FBQ2xGLDRDQUFrRDtBQUNsRCw2REFBb0Y7QUFDcEYsNkNBQXNFO0FBQ3RFLGlEQUE0RDtBQUkzRCxvQkFBb0I7QUFDckIsSUFBTSxpQkFBaUIsR0FBRywwQ0FBMEMsQ0FBQztBQW1CckU7Ozs7Ozs7R0FPRztBQUNILElBQU0sYUFBYSxHQUFHO0lBQ3BCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEtBQUssRUFBRSxPQUFPO0lBQ2QsY0FBYyxFQUFFLGdCQUFnQjtDQUNqQyxDQUFDO0FBK0NGOzs7Ozs7OztHQVFHO0FBQ0gsSUFBTSw2QkFBNkIsR0FBRyxVQUFDLE1BQVcsRUFBRSxXQUFtQixFQUFFLFVBQThCO0lBQ3JHLElBQU0sc0JBQXNCLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNoRCxVQUFVLENBQUMsS0FBSyxHQUFHO1FBQVUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDdkMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQztnQkFDWixPQUFPO1lBQ1QsQ0FBQyxDQUFDO1lBQ0YsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNIO0lBeURFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNILDhCQUFZLGFBQTRCO1FBekV4Qyw0QkFBNEI7UUFDcEIseUJBQW9CLEdBQXlCLElBQUksQ0FBQztRQUNsRCwwQkFBcUIsR0FBMEIsSUFBSSxDQUFDO1FBQ3BELDBCQUFxQixHQUEwQixJQUFJLENBQUM7UUF3RTFELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLGtDQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7UUFFekQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhHLHlGQUF5RjtRQUN6RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQztRQUVqRSwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUVwQyxvSEFBb0g7UUFDcEgsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixNQUFNLG1EQUF3QixDQUFDLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pHO1FBRUQsa0NBQWtDO1FBQ2xDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxFQUFHLENBQUM7UUFDekMsTUFBTSxDQUFDLDBCQUEwQixHQUFHLEVBQUcsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRELDRDQUE0QztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksZUFBZSxFQUFFO2dCQUNuQixJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUM7U0FDRjtJQUNILENBQUM7SUF4RkQsc0JBQVcsMkNBQVM7UUFJcEI7Ozs7V0FJRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7UUFDbkQsQ0FBQztRQWhCRDs7O1dBR0c7UUFDSCwyREFBMkQ7YUFDM0QsVUFBcUIsR0FBRztZQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsbUNBQWdCLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BHLENBQUM7OztPQUFBO0lBV0Q7Ozs7T0FJRztJQUNJLG1EQUFvQixHQUEzQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFpRkQscURBQXNCLEdBQXRCLFVBQXVCLG1CQUFpRSxFQUFFLHFCQUE2QztRQUNySSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxNQUFNLG1EQUF3QixDQUFDLGdDQUFnQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDdEY7UUFFRCxnQkFBZ0I7UUFDaEIsSUFBSSxxQkFBcUIsRUFBRTtZQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsbUJBQTRDLENBQUM7WUFDMUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLCtKQUErSixDQUFDLENBQUM7U0FDdEw7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBMkMsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFakMsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVPLGtEQUFtQixHQUEzQixVQUE0QixlQUFnQyxFQUFFLFFBQXNCLEVBQUUsT0FBYTtRQUNqRyxJQUFJLGVBQWUsS0FBSyxxQkFBUyxDQUFDLHVCQUF1QixFQUFFO1lBQ3pELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDM0M7U0FDRjthQUFNLElBQUksZUFBZSxLQUFLLHFCQUFTLENBQUMsb0JBQW9CLEVBQUU7WUFDN0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25CO2FBQU07WUFDTCxNQUFNLGlDQUFlLENBQUMsaUNBQWlDLEVBQUUsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFFTywrQ0FBZ0IsR0FBeEIsVUFBeUIsZUFBZ0MsRUFBRSxPQUFrQixFQUFFLFFBQXNCLEVBQUUsTUFBWTtRQUNqSCxJQUFJLGVBQWUsS0FBSyxxQkFBUyxDQUFDLHVCQUF1QixFQUFFO1lBQ3pELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7YUFBTSxJQUFJLGVBQWUsS0FBSyxxQkFBUyxDQUFDLG9CQUFvQixFQUFFO1lBQzdELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0wsTUFBTSxpQ0FBZSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsWUFBWTtJQUNaOzs7T0FHRztJQUNILDRDQUFhLEdBQWIsVUFBYyxPQUFrQztRQUM5Qyx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixNQUFNLG1EQUF3QixDQUFDLGtDQUFrQyxFQUFFLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQVMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbURBQW9CLEdBQXBCLFVBQXFCLE9BQWlDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixNQUFNLG1EQUF3QixDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDMUQ7UUFFRCx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixNQUFNLG1EQUF3QixDQUFDLGtDQUFrQyxFQUFFLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQVMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHlDQUFVLEdBQVYsVUFBVyxPQUFrQztRQUE3QyxpQkFJQztRQUhDLE9BQU8sSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQyxLQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnREFBaUIsR0FBakIsVUFBa0IsT0FBaUM7UUFBbkQsaUJBUUM7UUFQQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxtREFBd0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQzFEO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9DLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBUyxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVCQUF1QjtJQUV2Qjs7Ozs7O09BTUc7SUFDSyxzREFBdUIsR0FBL0IsVUFBZ0MsZUFBZ0MsRUFBRSxXQUFvQixFQUFFLE9BQWtDLEVBQUUsT0FBYSxFQUFFLE1BQVk7UUFBdkosaUJBK0RDO1FBN0RDLHlDQUF5QztRQUN6QyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3ZELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGlDQUFlLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUNBQWUsQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1lBQzlJLElBQU0saUJBQWlCLEdBQUcscUNBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDakcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFDbkMsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixNQUFNLENBQUMsQ0FBQztZQUNWLE9BQU87U0FDUjtRQUVELG1GQUFtRjtRQUNuRixJQUFNLE1BQU0sR0FBa0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhGLG9GQUFvRjtRQUNwRixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsNkNBQTZDO1FBQzdDLElBQU0sT0FBTyxHQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTVHLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsaURBQXVCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVELElBQUksV0FBVyxFQUFFO2dCQUNmLGtDQUFrQztnQkFDbEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBRTVDLGdFQUFnRTtnQkFDaEUsSUFBSSxXQUFXLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7b0JBQzdGLElBQUksWUFBWSxHQUE2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRS9FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFRO3dCQUNqRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQzt3QkFFckQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzdELE9BQU87b0JBQ1QsQ0FBQyxFQUFFLFVBQUMsS0FBSzt3QkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEdBQUcsS0FBSyxDQUFDLENBQUM7d0JBRXZFLG9DQUFvQzt3QkFDcEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNoRyxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCx3Q0FBd0M7cUJBQ25DO29CQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDL0Y7YUFDRjtZQUNELHFFQUFxRTtpQkFDaEU7Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxpQ0FBZSxDQUFDLDRCQUE0QixFQUFFLENBQUM7YUFDdEQ7U0FDRjtRQUNELHNCQUFzQjthQUNqQjtZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNsRztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGlEQUFrQixHQUExQixVQUEyQixPQUFnQixFQUFFLGVBQWdDLEVBQUUsV0FBb0IsRUFBRSxPQUFrQyxFQUFFLE1BQXNCLEVBQUUsT0FBYSxFQUFFLE1BQVk7UUFBNUwsaUJBK0VDO1FBOUVDLGtDQUFrQztRQUNsQyxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO1FBRUQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBGLElBQUksMkJBQW9ELENBQUM7UUFDekQsSUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUMsV0FBVyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUUvTCxJQUFJLFdBQW1CLENBQUM7UUFDeEIsSUFBSSxlQUFlLEtBQUsscUJBQVMsQ0FBQyxvQkFBb0IsRUFBRTtZQUN0RCwwQkFBMEI7WUFDMUIsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixnRUFBZ0U7Z0JBQ2hFLE9BQU87YUFDUjtTQUNGO1FBRUQscUJBQXFCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDakQsaUJBQWlCO1lBQ2pCLElBQU0sWUFBWSxHQUFXLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlHLElBQUksY0FBc0IsQ0FBQztZQUUzQixJQUFJLFdBQVcsRUFBRTtnQkFDZix5REFBeUQ7Z0JBQ3pELGNBQWMsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTtvQkFDNUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUM5RDthQUNGO1lBRUQsMkJBQTJCLEdBQUcsSUFBSSxpREFBdUIsQ0FDdkQscUJBQXFCLEVBQ3JCLEtBQUksQ0FBQyxRQUFRLEVBQ2IsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUN6QixDQUFDO1lBRUYsS0FBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztZQUU5RSxnSEFBZ0g7WUFDaEgsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLHdCQUF3QjtZQUN4QixJQUFJLFdBQVcsR0FBRyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLEdBQUcscUJBQVMsQ0FBQyxzQkFBc0IsQ0FBQztZQUU3RyxxQkFBcUI7WUFDckIsSUFBSSxlQUFlLEtBQUsscUJBQVMsQ0FBQyx1QkFBdUIsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDaEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxpQkFBaUIsRUFBRSwyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRzthQUNGO2lCQUFNLElBQUksZUFBZSxLQUFLLHFCQUFTLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzdELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMscUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDO2dCQUUxRSxtREFBbUQ7Z0JBQ25ELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsRjtpQkFBTTtnQkFDTCxNQUFNLGlDQUFlLENBQUMsaUNBQWlDLEVBQUUsQ0FBQzthQUMzRDtZQUVELDhCQUE4QjtZQUM5QixLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGlDQUFlLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLHFDQUFzQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuSixJQUFJLFdBQVcsRUFBRTtnQkFDZixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUVILGlEQUFrQixHQUFsQixVQUFtQixPQUFpQztRQURwRCxpQkFtSEM7UUFqSEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sbURBQXdCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUUvQyxvRkFBb0Y7WUFDcEYsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFOUMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFckQscUVBQXFFO1lBQ3JFLElBQU0sT0FBTyxHQUFZLE9BQU8sQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRTlELDBEQUEwRDtZQUMxRCxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXJFLGlGQUFpRjtZQUNqRixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRztnQkFDekYsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxNQUFNLENBQUMsaUNBQWUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7YUFDL0Q7WUFFRCxJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXRFLElBQUksMkJBQTJCLEdBQUcsSUFBSSxpREFBdUIsQ0FDM0QsbUNBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFDdEYsS0FBSSxDQUFDLFFBQVEsRUFDYixPQUFPLENBQUMsTUFBTSxFQUNkLFlBQVksRUFDWixLQUFJLENBQUMsY0FBYyxFQUFFLEVBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUN6QixDQUFDO1lBQ0YsZ0hBQWdIO1lBQ2hILElBQUksaURBQXVCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDMUQsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsK0dBQStHO2lCQUMxRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3RELDREQUE0RDtnQkFDNUQsSUFBTSxpQkFBaUIsR0FBRyx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsMEVBQTBFLENBQUMsQ0FBQztnQkFDaEcsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsYUFBYSxJQUFJLDJCQUEyQixDQUFDLFdBQVcsQ0FBQztZQUU3RixJQUFJLE9BQWtCLENBQUM7WUFDdkIsSUFBSSxtQkFBbUIsQ0FBQztZQUV4QixJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUNqRCxJQUFJO29CQUNGLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2pGO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2I7YUFDRjtZQUVELHNDQUFzQztZQUN0QyxJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDakUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0ksSUFBSSxPQUFPLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsMEJBQTBCO2lCQUNyQjtnQkFDSCxJQUFJLFVBQVUsVUFBQztnQkFDZixJQUFJLG1CQUFtQixFQUFFO29CQUN2QixVQUFVLEdBQUcsK0NBQStDLENBQUM7aUJBQzlEO3FCQUFNLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDL0IsVUFBVSxHQUFHLHdFQUF3RSxDQUFDO2lCQUN2RjtxQkFBTTtvQkFDTCxVQUFVLEdBQUcsa0NBQWtDLEdBQUcsS0FBSyxDQUFDO2lCQUN6RDtnQkFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFaEMscUlBQXFJO2dCQUNySSxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLEVBQUU7b0JBQ2hELDJCQUEyQixDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1DQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztpQkFDdkw7Z0JBQ0QsYUFBYTtnQkFDYixPQUFPLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFO3FCQUMzRSxJQUFJLENBQUM7b0JBQ0osOEJBQThCO29CQUM5QixtRUFBbUU7b0JBQ25FLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDaEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMseUJBQXlCLEdBQUcsS0FBSyxHQUFHLHVDQUF1QyxDQUFDLENBQUM7d0JBQ2pHLHVEQUF1RDt3QkFDdkQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDN0U7eUJBQ0k7d0JBQ0gsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQy9GLDRDQUE0Qzs0QkFDNUMsMkRBQTJEOzRCQUMzRCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzRCQUN4QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs0QkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixDQUFDLENBQUM7eUJBQzFGOzZCQUFNOzRCQUNMLHFCQUFxQjs0QkFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs0QkFDNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixDQUFDLENBQUM7eUJBQ3hGO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLGlDQUFlLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEUsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFFWiwrQkFBK0I7SUFFL0I7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNLLHlDQUFVLEdBQWxCLFVBQW1CLFdBQW1CLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsUUFBYyxFQUFFLE9BQWtCLEVBQUUsTUFBaUI7UUFBOUgsaUJBOERDO1FBN0RDLDBCQUEwQjtRQUMxQixJQUFJLFdBQW1CLENBQUM7UUFDeEIsSUFBSTtZQUNGLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUscUJBQVMsQ0FBQyxVQUFVLEVBQUUscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsUUFBUSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDakMsUUFBUSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztZQUV4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3Q0FBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLHdDQUFzQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BILElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLHdDQUFzQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsb0JBQW9CLEVBQUUsd0NBQXNCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEcsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLGlDQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELG1EQUFtRDtRQUNuRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2QyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ25DLHFEQUFxRDtZQUNyRCxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsRUFBRTtnQkFDdEcsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLGlDQUFlLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtvQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSx3Q0FBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxpQkFBaUIsR0FBRyx3Q0FBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEssT0FBTztpQkFDVjtnQkFDRCxRQUFRLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDakMsUUFBUSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQzthQUN6QztZQUVELElBQUk7Z0JBQ0YsSUFBTSxtQkFBbUIsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUVqRCxvREFBb0Q7Z0JBQ3BELElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDbEUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDaEMsUUFBUSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7b0JBQ2pDLFFBQVEsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3pDLHlFQUF5RTtvQkFDekUsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7d0JBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDbEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDbkM7cUJBQ0o7aUJBQ0Y7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLGdDQUFnQztnQkFDaEMsMEZBQTBGO2dCQUMxRiw0RUFBNEU7YUFDN0U7UUFDSCxDQUFDLEVBQ0QsUUFBUSxDQUFDLENBQUM7UUFFVixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSyx3Q0FBUyxHQUFqQixVQUFrQixXQUFtQixFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLFdBQW1CO1FBQzNGLElBQUk7WUFDRjs7O2VBR0c7WUFDSCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZFLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDcEU7OztlQUdHO1lBQ0gsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyRyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pHLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDeEQsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUV4RCxrQkFBa0I7WUFDbEIsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMzSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixNQUFNLGlDQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUNoRDtZQUNELElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtnQkFDckIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3JCO1lBRUQsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLE1BQU0saUNBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFRCxZQUFZO0lBRVosMkJBQTJCO0lBRTNCOzs7O09BSUc7SUFDSSx5Q0FBVSxHQUFqQjtRQUNJLE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDJDQUFZLEdBQXBCO1FBQ0UsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxnREFBaUIsR0FBekIsVUFBMEIsV0FBbUIsRUFBRSxTQUFpQixFQUFFLEtBQWE7UUFBL0UsaUJBa0JDO1FBakJDLCtCQUErQjtRQUMvQixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLHFCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxLQUFLLHFCQUFTLENBQUMsMEJBQTBCLEVBQUU7Z0JBQzdHLG1EQUFtRDtnQkFDbkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMscUNBQXFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDO2dCQUNoSyxzQkFBc0I7Z0JBQ3RCLElBQUksYUFBYSxJQUFJLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdEUsTUFBTSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxpQ0FBZSxDQUFDLDhCQUE4QixFQUFFLENBQUMsQ0FBQztpQkFDM0c7Z0JBRUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLHFCQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUN2RztRQUNILENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssd0NBQVMsR0FBakIsVUFBa0IsV0FBbUIsRUFBRSxTQUFpQjtRQUF4RCxpQkFjQztRQWJDLCtDQUErQztRQUMvQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUU3QixVQUFVLENBQUM7WUFDVCxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksV0FBVyxDQUFDLEdBQUcsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsS0FBSyxhQUFhLEVBQUU7Z0JBQy9ELFdBQVcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO2dCQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsU0FBUyxHQUFHLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxDQUFDO2FBQ3BGO1FBQ0gsQ0FBQyxFQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyw4Q0FBZSxHQUF2QixVQUF3QixRQUFnQjtRQUN0QyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQUksUUFBUSxDQUFDLGFBQWE7Z0JBQ3hCLFFBQVEsQ0FBQyxlQUFlO2dCQUN4QixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2dCQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDekMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixTQUFTLEdBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQXVCLENBQUM7YUFDOUY7aUJBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzFELFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLGtDQUFrQyxDQUFDLENBQUM7YUFDekk7WUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDNUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBRVoseUJBQXlCO0lBRXpCOzs7O09BSUc7SUFDSyw2Q0FBYyxHQUF0QixVQUF1QixXQUFtQixFQUFFLFdBQW9CO1FBQzlELHdCQUF3QjtRQUN4QixJQUFJLFdBQVcsSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BELElBQUksY0FBYyxHQUFXLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEUsSUFBSSxVQUFVLEdBQVcsV0FBVyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7WUFDakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUM7YUFDSTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDMUMsTUFBTSxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSywrQ0FBZ0IsR0FBeEIsVUFBeUIsYUFBcUIsRUFBRSxLQUFhLEVBQUUsT0FBaUIsRUFBRSxNQUFnQjtRQUFsRyxpQkFzQ0M7UUFyQ0Msd0JBQXdCO1FBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBRTdDLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDekQ7UUFDRCw4RUFBOEU7UUFDOUUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFNUYsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEQsTUFBTSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQztnQkFDakQsVUFBQyxRQUFzQixFQUFFLEtBQWdCO29CQUN2Qyx3QkFBd0I7b0JBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUVwQyxpSEFBaUg7b0JBQ2pILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUNoRixJQUFJOzRCQUNGLElBQUksS0FBSyxFQUFFO2dDQUNQLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ3JFO2lDQUFNLElBQUksUUFBUSxFQUFFO2dDQUNqQixNQUFNLENBQUMsMEJBQTBCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUN6RTtpQ0FBTTtnQ0FDTCxNQUFNLHFCQUFTLENBQUMscUJBQXFCLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs2QkFDM0U7eUJBQ0Y7d0JBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3hCO3FCQUNGO29CQUVELFFBQVE7b0JBQ1IsTUFBTSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDeEQsTUFBTSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDM0QsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsWUFBWTtJQUVaLGdCQUFnQjtJQUVoQjs7O09BR0c7SUFDSCxxQ0FBTSxHQUFOO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUU7WUFDbkMsTUFBTSxHQUFHLDJCQUEyQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7U0FDNUY7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQVM7WUFDekQsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLGtCQUFrQjtnQkFDNUMsQ0FBQyxDQUFJLFNBQVMsQ0FBQyxrQkFBa0IsU0FBSSxNQUFRO2dCQUM3QyxDQUFDLENBQUksS0FBSSxDQUFDLFNBQVMsMkJBQXNCLE1BQVEsQ0FBQztZQUN0RCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyx5Q0FBVSxHQUFwQjtRQUNFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRSxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08saURBQWtCLEdBQTVCLFVBQTZCLFdBQW1CO1FBQzlDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRSxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzRDtTQUNKO0lBQ0gsQ0FBQztJQUVELFlBQVk7SUFFWixrQkFBa0I7SUFFbEI7Ozs7OztPQU1HO0lBQ0gseUNBQVUsR0FBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEVBQTRFLENBQUMsQ0FBQztRQUMvRixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLDhDQUFlLEdBQXZCLFVBQXdCLFNBQWlCO1FBQ3ZDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNyRCxVQUFVLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsS0FBSyxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDaEQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSyw4Q0FBZSxHQUF2QixVQUF3QixJQUFZLEVBQUUsU0FBNEIsRUFBRSxjQUF5QjtRQUMzRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ25FLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksUUFBdUIsQ0FBQztRQUM1QixJQUFJLE9BQW1CLENBQUM7UUFDeEIsb0NBQW9DO1FBQ3BDLElBQUk7WUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNwRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNmO1FBRUQsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEQsSUFBSTtZQUNGLCtCQUErQjtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQU0sWUFBWSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxLQUFLLHFCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtvQkFDNUUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTt3QkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUMsQ0FBQztxQkFDdEU7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztxQkFDaEU7b0JBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLFdBQVcsQ0FBQztpQkFDNUM7cUJBQ0ksSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLHFCQUFTLENBQUMsS0FBSyxFQUFFO29CQUNsRCxRQUFRLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDO2lCQUN4QztnQkFDRCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQVMsQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDdEUsT0FBTztpQkFDUjthQUNGO2lCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxxQ0FBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN4RyxPQUFPO2FBQ1I7WUFFRCxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNoRixNQUFNLGlDQUFlLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSywyREFBNEIsR0FBcEMsVUFBcUMsSUFBWTtRQUMvQyxvQkFBb0I7UUFDcEIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBWSxLQUFLLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFL0Isc0RBQXNEO1FBQ3RELElBQUk7WUFDRixrQkFBa0IsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDaEc7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGdHQUFnRztZQUNoRyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFFRCwyREFBMkQ7UUFDM0QsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNoQjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUM5QyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDM0I7UUFFRCw4SEFBOEg7UUFDOUgsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLElBQUkscUJBQXFCLEdBQXVELElBQUksQ0FBQztRQUVyRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQy9DLGlGQUFpRjtRQUNqRixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNyQixxQkFBcUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0RjtRQUNELDBDQUEwQzthQUNyQyxJQUFJLGtCQUFrQixFQUFFO1lBQ3pCLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsaUJBQWlCO2FBQ1o7WUFDSCxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFDN0IscURBQXFEO1lBQ3JELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pGO2dCQUNELE9BQU87YUFDUjtpQkFDSTtnQkFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUM5Qiw4RkFBOEY7Z0JBQzlGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxPQUFPO2FBQ1I7U0FDRjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRTdELGlEQUFpRDtRQUNqRCxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDhDQUFlLEdBQXZCLFVBQXdCLFdBQW1CO1FBQ3pDLElBQUksSUFBSSxHQUFHLG1CQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELE9BQU8seUJBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLCtDQUFnQixHQUExQixVQUEyQixJQUFZO1FBQ3JDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxhQUFnQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixNQUFNLHFCQUFTLENBQUMscUJBQXFCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QyxhQUFhLEdBQUc7Z0JBQ2QsV0FBVyxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDOUIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO2dCQUN2QixVQUFVLEVBQUUsS0FBSzthQUNsQixDQUFDO1NBQ0g7YUFBTTtZQUNMLE1BQU0scUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsK0dBQStHO1FBQy9HLG1FQUFtRTtRQUVuRSxnQkFBZ0I7UUFDaEIsSUFBSSxhQUFhLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLGdCQUFnQjtZQUN0SyxhQUFhLENBQUMsV0FBVyxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDO1lBQzVDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBQ0QsdUJBQXVCO2FBQ2xCLElBQUksYUFBYSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLHNCQUFzQjtZQUM5SCxhQUFhLENBQUMsV0FBVyxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDO1lBQ2pELGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsaUZBQWlGO1FBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUMvQyxJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckQsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsS0FBSyxFQUFFO29CQUNwRCxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDaEMsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsWUFBWTtJQUVaLDBEQUEwRDtJQUUxRDs7Ozs7T0FLRztJQUNLLDZDQUFjLEdBQXRCLFVBQXVCLDJCQUFvRCxFQUFFLE9BQWdCO1FBQzNGLElBQUksb0JBQW9CLEdBQXlCLElBQUksQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRywyQkFBMkIsQ0FBQyxNQUFNLENBQUM7UUFFbEQsaUNBQWlDO1FBQ2pDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUgseUNBQXlDO1FBQ3pDLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sYUFBYSxHQUFnQyxFQUFFLENBQUM7UUFFdEQseUJBQXlCO1FBQ3pCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxTQUFTLEVBQUU7WUFDMUMsa0JBQWtCO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckQsSUFBSSxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQ2hELGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7WUFFRCxpQ0FBaUM7WUFDakMsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QywyQkFBMkIsQ0FBQyxpQkFBaUIsR0FBRyxtQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3pKO1lBQ0QseUNBQXlDO2lCQUNwQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLGlDQUFlLENBQUMsd0NBQXdDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbkY7WUFDRCxnRUFBZ0U7aUJBQzNEO2dCQUNILElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzVFLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzVCLE1BQU0saUNBQWUsQ0FBQyxxQ0FBcUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDaEY7Z0JBRUQsMkJBQTJCLENBQUMsaUJBQWlCLEdBQUcsbUNBQWdCLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3ZJO1NBQ0Y7UUFDRCx1Q0FBdUM7YUFDbEM7WUFDSCxnQ0FBZ0M7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9DLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLG1CQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLDJCQUEyQixDQUFDLFNBQVMsRUFBRTtvQkFDL0ksYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtZQUNELFdBQVc7WUFDWCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsZ0NBQWdDO2lCQUMzQixJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekM7aUJBQ0k7Z0JBQ0gscUNBQXFDO2dCQUNyQyxNQUFNLGlDQUFlLENBQUMsd0NBQXdDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbkY7U0FDRjtRQUVELElBQUksb0JBQW9CLElBQUksSUFBSSxFQUFFO1lBQ2hDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0Qsc0RBQXNEO1lBQ3RELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHlCQUF5QixJQUFJLEdBQUcsQ0FBQztZQUNuRSxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLFVBQVUsR0FBRyxJQUFJLGlCQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNaLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ1osTUFBTSxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLGtDQUFrQyxDQUFDLENBQUM7cUJBQzNFO2lCQUNGO2dCQUNELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksUUFBUSxHQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osUUFBUSxFQUFFLEVBQUU7b0JBQ1osU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLFdBQVc7b0JBQ3RJLE9BQU8sRUFBRSxVQUFVO29CQUNuQixhQUFhLEVBQUUsVUFBVSxDQUFDLE1BQU07b0JBQ2hDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVztvQkFDbkQsTUFBTSxFQUFFLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDbEQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxPQUFPO29CQUNoQixZQUFZLEVBQUUsTUFBTTtpQkFDckIsQ0FBQztnQkFDRiw2QkFBYSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxRQUFRLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssaURBQWtCLEdBQTFCLFVBQTJCLHFCQUFrRCxFQUFFLFFBQWdCO1FBQzdGLElBQU0sYUFBYSxHQUFrQixFQUFFLENBQUM7UUFDeEMsSUFBTSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsaUJBQU87WUFDbkMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pGLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxpREFBa0IsR0FBMUI7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxPQUFPLHVCQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHlDQUFVLEdBQWxCLFVBQW1CLE1BQXFCLEVBQUUsT0FBaUIsRUFBRSxNQUFnQixFQUFFLE9BQWdCLEVBQUUsMkJBQW9EO1FBQ25KLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsOEJBQThCLEdBQUcsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEYsNEVBQTRFO1FBQzVFLElBQUksV0FBVyxHQUFHLG1CQUFRLENBQUMsNkJBQTZCLENBQUMsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcscUJBQVMsQ0FBQyxXQUFXLENBQUM7UUFFNUosTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssMkNBQVksR0FBcEIsVUFBcUIsTUFBcUIsRUFBRSxPQUFpQixFQUFFLE1BQWdCLEVBQUUsT0FBZ0IsRUFBRSwyQkFBb0Q7UUFFckosSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxHQUFHLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFGLDRFQUE0RTtRQUM1RSxJQUFJLFdBQVcsR0FBRyxtQkFBUSxDQUFDLDZCQUE2QixDQUFDLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLHFCQUFTLENBQUMsV0FBVyxDQUFDO1FBRTVKLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixNQUFNLENBQUMsV0FBVyxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyx5QkFBeUIsR0FBRywyQkFBMkIsQ0FBQyxLQUFLLENBQUM7U0FDdEU7YUFBTTtZQUNILE1BQU0sQ0FBQyxXQUFXLEdBQUcscUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDMUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUQ7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsc0NBQXNDO0lBQzlCLDhDQUFlLEdBQXZCLFVBQXdCLFFBQXNCLEVBQUUsU0FBaUIsRUFBRSxVQUFlLEVBQUUsVUFBa0IsRUFBRSxVQUFtQjtRQUN6SCxJQUFJLEtBQWEsQ0FBQztRQUNsQixJQUFJLG1CQUFtQix3QkFBUSxRQUFRLENBQUUsQ0FBQztRQUMxQyxJQUFNLFNBQVMsR0FBZSxJQUFJLHVCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsSUFBSSxVQUFrQixDQUFDO1FBRXZCLG1DQUFtQztRQUNuQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsa0JBQWtCO1lBQ2xCLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6QyxtRUFBbUU7WUFDbkUsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckQsSUFBTSxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdEQsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTtvQkFDN0YsSUFBTSxZQUFZLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hFLElBQUksbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEVBQUU7d0JBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDeEU7aUJBQ0Y7YUFDRjtZQUVELHlEQUF5RDtZQUN6RCxJQUFNLFNBQVMsR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVFLFVBQVUsR0FBRyxxQkFBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFNLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFHLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxVQUFVLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUUzSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBRTVGLG1CQUFtQixDQUFDLFdBQVcsR0FBSSxVQUFVLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1NBQzlDO1FBQ0QsdUdBQXVHO2FBQ2xHO1lBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFdEIseURBQXlEO1lBQ3pELElBQU0sY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzVGLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksVUFBVSxFQUFFO1lBQ1osbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUM1RDtRQUVELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxnREFBaUIsR0FBM0IsVUFBNEIsSUFBWSxFQUFFLFNBQTRCO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsVUFBVSxHQUFHLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlELElBQUksUUFBUSxHQUFrQjtZQUM1QixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7UUFFRixJQUFJLEtBQWdCLENBQUM7UUFDckIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLFlBQVksR0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxzQkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxVQUFVLEdBQVksSUFBSSxDQUFDO1FBRS9CLDZCQUE2QjtRQUM3QixJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLHFCQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFFbEcsUUFBUTtZQUNSLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxxQkFBUyxDQUFDLEtBQUssRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVILFlBQVksR0FBRyxpQkFBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5RDtZQUVELGVBQWU7WUFDZixJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUsscUJBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLFlBQVksR0FBRyxpQkFBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0QsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLFNBQVMsVUFBQztnQkFFZCxJQUFJLE9BQU8sSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO29CQUNoRSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDO2lCQUM3QztxQkFDSTtvQkFDRCxTQUFTLEdBQUcscUJBQVMsQ0FBQyxVQUFVLENBQUM7aUJBQ3BDO2dCQUVELHNCQUFzQixHQUFHLGlCQUFPLENBQUMsOEJBQThCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3RjtZQUdDLG9DQUFpQixFQUFqQix3QkFBMEIsRUFDMUIsMkNBQTRCLEVBQTVCLDRCQUF5QyxDQUM1QjtZQUNmLElBQUksMkRBQTRCLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDO2dCQUNsRSwyREFBNEIsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDdEUsS0FBSyxHQUFHLElBQUksMkRBQTRCLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2FBQy9HO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxJQUFJLHlCQUFXLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2FBQzlGO1NBQ0Y7UUFDRCxrQ0FBa0M7YUFDN0I7WUFDSCx3RUFBd0U7WUFDeEUsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMscUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUM3RjtnQkFDRCxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLFVBQVUsR0FBVyxFQUFFLENBQUM7Z0JBRTVCLHVCQUF1QjtnQkFDdkIsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7b0JBRXBDLGlEQUFpRDtvQkFDakQsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ2hELFVBQVUsR0FBRyxJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsUUFBUSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7d0JBQzlCLFFBQVEsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztxQkFDNUM7eUJBQU07d0JBQ0wsVUFBVSxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzFFLFFBQVEsR0FBRyw2QkFBYSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztxQkFDbkU7b0JBRUQsOERBQThEO29CQUM5RCxJQUFNLGNBQVksR0FBRyxpQkFBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFL0UsSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUNuQyxTQUFTLEdBQUcsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUN0RTtvQkFFRCxvRkFBb0Y7b0JBQ3BGLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUNuRCxVQUFVLEdBQUcsVUFBVSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQy9DO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7d0JBQ3hFLE1BQU0saUNBQWUsQ0FBQyxpQ0FBaUMsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO3FCQUNwSDtvQkFFRCxRQUFRLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLHVCQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFFakYsSUFBSSxVQUFVLFNBQVEsQ0FBQztvQkFDdkIsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO3dCQUNwRixVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztxQkFDckQ7eUJBQ0k7d0JBQ0gsVUFBVSxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDO3FCQUNuQztvQkFFRCxzQkFBc0IsR0FBRyxpQkFBTyxDQUFDLDhCQUE4QixDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdGLElBQU0sZ0NBQWdDLEdBQUcsaUJBQU8sQ0FBQyw4QkFBOEIsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXZILElBQUksYUFBYSxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQzlFLElBQUksbUJBQW1CLFNBQVMsQ0FBQztvQkFFakMsc0NBQXNDO29CQUN0QyxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7d0JBQ3ZDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ2hELElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxtQkFBbUIsSUFBSSxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLEVBQUU7NEJBQzdHLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzs0QkFDekYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0dBQW9HLENBQUMsQ0FBQzt5QkFDeEg7NkJBQ0k7NEJBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2pCLDRHQUE0RyxDQUFDLENBQUM7eUJBQ2pIO3FCQUNGO3lCQUNJLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLEVBQUU7d0JBQzFGLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztxQkFDMUY7aUJBQ0Y7Z0JBRUQsbUJBQW1CO2dCQUNuQixJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFFMUMsOEJBQThCO29CQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFFN0Isa0JBQWtCO29CQUNsQixVQUFVLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBRXhELFFBQVEsR0FBRyw2QkFBYSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ25ELFVBQVUsR0FBRyxVQUFVLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDL0M7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQztxQkFDekU7b0JBRUQsWUFBWSxHQUFHLGlCQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM3RCxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUUvRSxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ25DLFNBQVMsR0FBRyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3hFO29CQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksdUJBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM3RSxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBRWhDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUU7d0JBQ2xDLDZFQUE2RTt3QkFDN0UsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDekYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNuTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDcEssS0FBSyxHQUFHLGlDQUFlLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDdEk7d0JBQ0QsaUJBQWlCOzZCQUNaOzRCQUNILElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDOzRCQUVoRSw4Q0FBOEM7NEJBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3lCQUMvRTtxQkFDRjt5QkFBTTt3QkFDTCxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQzt3QkFDL0Isc0JBQXNCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQzt3QkFFekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQzt3QkFDL0QsS0FBSyxHQUFHLGlDQUFlLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQy9FO2lCQUNKO2FBQ0Y7WUFDRCw0Q0FBNEM7aUJBQ3ZDO2dCQUNILFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUMvQixzQkFBc0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUV6QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoSCxLQUFLLEdBQUcsaUNBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQy9FO1NBQ0Y7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLHFCQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxzREFBc0Q7UUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE1BQU0scUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELHFDQUFxQztJQUVyQyxZQUFZO0lBRVosaUJBQWlCO0lBRWpCOzs7OztPQUtHO0lBQ0gseUNBQVUsR0FBVjtRQUNFLGdFQUFnRTtRQUNoRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCO1FBRUQsOEVBQThFO1FBQzlFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUMzRSxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsSUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjtRQUNELHFDQUFxQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCw4Q0FBZSxHQUFmLFVBQWlCLEtBQWE7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDcEQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZDQUFjLEdBQWQ7UUFDRSxJQUFNLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQ3BDLElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRSxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFeEgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RixJQUFNLE9BQU8sR0FBWSxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDcEUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxnREFBaUIsR0FBekIsVUFBMEIsUUFBd0I7UUFDaEQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNyQyxPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUVELElBQU0sS0FBSyxHQUFrQixFQUFFLENBQUM7UUFDaEMsSUFBTSxjQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtZQUNwRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN4RyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNsRCxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWTtJQUVaLHVDQUF1QztJQUV2QyxzREFBc0Q7SUFDdEQsOEdBQThHO0lBRTlHOzs7Ozs7O09BT0c7SUFDSyxpREFBa0IsR0FBMUIsVUFBMkIsTUFBcUIsRUFBRSxjQUF1QjtRQUN2RSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLE1BQU0sbURBQXdCLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFFRCw2RUFBNkU7UUFDN0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUIsTUFBTSxtREFBd0IsQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRTtRQUVELDBDQUEwQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sbURBQXdCLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDL0U7UUFFRCxnREFBZ0Q7UUFDaEQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixNQUFNLG1EQUF3QixDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2xGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLGdEQUFpQixHQUF6QixVQUEwQixLQUFhO1FBQ3JDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEM7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSywyQ0FBWSxHQUFwQixVQUFxQixPQUFpQztRQUVwRCxJQUFJLE1BQXFCLENBQUM7UUFFMUIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsTUFBTSxHQUFPLE9BQU8sQ0FBQyxNQUFNLFFBQUssT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakU7aUJBQ0k7Z0JBQ0wsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDdkI7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxZQUFZO0lBRVosaUJBQWlCO0lBRWpCOzs7Ozs7T0FNRztJQUNLLHdDQUFTLEdBQWpCLFVBQWtCLFNBQWlCLEVBQUUsSUFBWTtRQUMvQyxJQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDTyxxREFBc0IsR0FBaEMsVUFBaUMsTUFBc0IsRUFBRyxPQUFnQixFQUFFLEtBQWE7UUFDdkYsMkNBQTJDO1FBQzNDLElBQU0sYUFBYSxHQUFZLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQseURBQXlEO1FBQ3pELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxtQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNKLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFNLDJCQUEyQixHQUFHLElBQUksaURBQXVCLENBQzdELFlBQVksRUFDWixJQUFJLENBQUMsUUFBUSxFQUNiLE1BQU0sRUFDTixZQUFZLEVBQ1osSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixLQUFLLENBQ04sQ0FBQztRQUVGLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLG1EQUFvQixHQUE5QixVQUErQixRQUFnQjtRQUM3Qyx5R0FBeUc7UUFDekcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hFLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUN0RSxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1NBQ0o7UUFFRCwyREFBMkQ7UUFDM0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELEtBQWdCLFVBQTZELEVBQTdELFVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBN0QsY0FBNkQsRUFBN0QsSUFBNkQsRUFBRTtnQkFBMUUsSUFBSSxHQUFHO2dCQUNSLHlFQUF5RTtnQkFDekUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDOUQ7YUFDSjtTQUNKO1FBRUQseURBQXlEO1FBQ3pELDJDQUEyQztRQUMzQyx5RUFBeUU7UUFDekUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUU7Z0JBQzlFLE9BQU8sSUFBSSxLQUFLLENBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7YUFBTTtZQUNQLDhFQUE4RTtZQUM5RSw2REFBNkQ7WUFDekQsT0FBTyxJQUFJLEtBQUssQ0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFFRCxpRkFBaUY7UUFDakYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaURBQWtCLEdBQXpCO1FBQ0UsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLGVBQWUsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLGlEQUFrQixHQUE1QixVQUE2QixlQUF5QjtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyx3REFBeUIsR0FBbkM7UUFDSSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyx3REFBeUIsR0FBbkMsVUFBb0Msc0JBQWdDO1FBQ2hFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyx3Q0FBUyxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxZQUFZO0lBRVosNkJBQTZCO0lBRTdCOzs7Ozs7T0FNRztJQUNJLDZDQUFjLEdBQXJCO1FBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHVEQUF3QixHQUEvQjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxVQUFVLEVBQUU7WUFDaEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHNEQUF1QixHQUE5QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sbURBQXdCLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztTQUNoRTtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtJQUVaLHVEQUF1RDtJQUV2RDs7Ozs7Ozs7T0FRRztJQUNLLDZDQUFjLEdBQXRCLFVBQXVCLEdBQVc7UUFDaEMsc0NBQXNDO1FBQ3RDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ssMkNBQVksR0FBcEIsVUFBcUIsYUFBc0IsRUFBRSxNQUFnQixFQUFFLFVBQW1CO1FBRWhGLHdGQUF3RjtRQUN4RixzR0FBc0c7UUFDdEcsSUFBSSxTQUFpQixDQUFDO1FBRXRCLHFCQUFxQjtRQUNyQixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksaUJBQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO2dCQUM3RCxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDN0c7aUJBQ0k7Z0JBQ0gsU0FBUyxHQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO2FBQ3ZIO1lBRUQsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxrQkFBa0I7YUFDYjtZQUNILElBQUksQ0FBQyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7Z0JBQzlELFNBQVMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO2FBQzFDO2lCQUNJO2dCQUNILFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFFRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUVILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLDhDQUFlLEdBQXZCLFVBQXdCLE9BQWdCLEVBQUUsS0FBYTtRQUVyRCwrQkFBK0I7UUFDL0IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQztRQUU1RSxJQUFNLHNCQUFzQixHQUFHLGlCQUFPLENBQUMsOEJBQThCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSyxnREFBaUIsR0FBekIsVUFBMEIsS0FBYSxFQUFFLFNBQWlCO1FBQ3hELHFCQUFxQjtRQUNyQixJQUFNLFlBQVksR0FBRyxpQkFBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGlEQUFrQixHQUExQixVQUEyQiwyQkFBb0QsRUFBRSxPQUFnQixFQUFFLGNBQW9CO1FBQ3JILDhCQUE4QjtRQUM5QixJQUFJLGNBQWMsRUFBRTtZQUNsQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVwRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSwyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakcsY0FBYztRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLDJCQUEyQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssMkNBQVksR0FBcEIsVUFBcUIsT0FBZ0I7UUFDbkMsMkdBQTJHO1FBQzNHLElBQUksU0FBaUIsQ0FBQztRQUN0QixJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDcEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztTQUM5QzthQUNJO1lBQ0QsU0FBUyxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxrREFBbUIsR0FBM0IsVUFBNEIsT0FBaUM7UUFFM0QsSUFBSSxZQUFZLEdBQTZCO1lBQzNDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxvQkFBb0I7U0FDbkQsQ0FBQztRQUVGLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRixZQUFZO0lBRUgsNERBQTZCLEdBQXJDLFVBQXNDLE1BQXdCLEVBQUUsUUFBZ0I7UUFDOUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFdBQVc7WUFDeEIsT0FBTyxJQUFJO1NBQ1o7UUFDRCx1QkFBdUI7UUFDZiw0Q0FBZSxFQUFFLDhDQUFrQixFQUFFLDBDQUFnQixDQUFZO1FBQ3pFLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFFLGdCQUFnQixFQUFFO1lBQ2pFLE1BQU0sbURBQXdCLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkU7UUFDRCwwQkFBMEI7UUFDMUIsSUFBTSxpQkFBaUIsR0FBc0I7WUFDM0MsR0FBRyxFQUFFLFNBQVM7WUFDZCxVQUFVLEVBQUUsMEJBQWMsRUFBRTtZQUM1QixlQUFlO1lBQ2Ysa0JBQWtCO1NBQ25CLENBQUM7UUFDRixJQUFNLHNCQUFzQixHQUFvQjtZQUM5QyxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFDRixPQUFPLElBQUksMEJBQWdCLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBbHRERDtRQURDLDZCQUE2QjtrRUFtSDdCO0lBaW1ESCwyQkFBQztDQUFBO0FBNW5FWSxvREFBb0I7Ozs7Ozs7OztBQzNJakMsNERBQTREO0FBQzVELGtDQUFrQzs7QUFFbEM7SUFBQTtJQWlFQSxDQUFDO0lBL0RHOzs7OztLQUtDO0lBQ0gsa0ZBQWtGO0lBQzNFLDZCQUFvQixHQUEzQixVQUE0QixZQUEyQixFQUFFLE1BQXFCO1FBQzVFLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHNCQUFhLEdBQXBCLFVBQXFCLFlBQTJCLEVBQUUsTUFBcUI7UUFDckUsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFVLElBQWMsbUJBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpRkFBaUY7SUFDMUUsMkJBQWtCLEdBQXpCLFVBQTBCLE1BQXFCO1FBQzdDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLFdBQVcsRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUZBQWlGO0lBQzFFLHNCQUFhLEdBQXBCLFVBQXFCLE1BQXFCLEVBQUUsS0FBYTtRQUN2RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBSyxJQUFJLFlBQUssS0FBSyxLQUFLLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFVLEdBQWpCLFVBQWtCLE1BQXFCO1FBQ3JDLElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNSLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNoRCxTQUFTLElBQUksQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO1NBQ0Y7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFqRVksNEJBQVE7Ozs7Ozs7OztBQ0hyQiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUdsQyx3REFBNEU7QUFxQjVFLFNBQWdCLHFCQUFxQixDQUFDLE9BQWlDO0lBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1FBQ3hCLE9BQU87S0FDVjtJQUNELElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSTtRQUNBLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM5QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxtREFBd0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyRTtJQUVELDhHQUE4RztBQUNsSCxDQUFDO0FBWkQsc0RBWUM7Ozs7Ozs7OztBQ3JDRCw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQywyQ0FBNEM7QUFDNUMsMkNBQTRDO0FBRTVDOztHQUVHO0FBQ0g7SUFBQTtJQW1EQSxDQUFDO0lBakRDOzs7O09BSUc7SUFDSSxvQkFBUyxHQUFoQixVQUFpQixRQUFnQjtRQUMvQixJQUFJLHlCQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFNLGlCQUFpQixHQUFHLHNDQUFzQyxDQUFDO1FBQ2pFLElBQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLDhFQUE4RTtZQUM5RSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBTSxZQUFZLEdBQUc7WUFDbkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDbkIsQ0FBQztRQUNGLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kseUJBQWMsR0FBckIsVUFBc0IsY0FBc0I7UUFDMUMsK0NBQStDO1FBQy9DLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSTtZQUNGLElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7WUFDOUMsSUFBTSxhQUFhLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEIsa0dBQWtHO2dCQUNsRyxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0Qsd0NBQXdDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osd0ZBQXdGO1NBQ3pGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBbkRZLGdDQUFVOzs7Ozs7Ozs7QUNUdkIsNERBQTREO0FBQzVELGtDQUFrQzs7QUFJbEMsMkNBQWtEO0FBQ2xELDJDQUFrRDtBQUdsRDs7Ozs7Ozs7R0FRRztBQUNIO0lBV0k7Ozs7Ozs7OztPQVNHO0lBQ0gsaUJBQVksaUJBQXlCLEVBQUUscUJBQTZCLEVBQUUsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsYUFBeUIsRUFBRSxHQUFXLEVBQUcsV0FBbUI7UUFDaEssSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFCQUFhLEdBQXBCLFVBQXFCLE9BQWdCLEVBQUUsVUFBc0I7UUFFekQsMkJBQTJCO1FBQzNCLElBQU0saUJBQWlCLEdBQVcsT0FBTyxDQUFDLFFBQVEsSUFBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRXZFLCtCQUErQjtRQUMvQixJQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFNLElBQUksR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUV2RCxJQUFJLHFCQUE2QixDQUFDO1FBQ2xDLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pELHFCQUFxQixHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRztRQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkosQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksdUJBQWUsR0FBdEIsVUFBdUIsRUFBVyxFQUFFLEVBQVc7UUFDM0MsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQzFELElBQUksRUFBRSxDQUFDLHFCQUFxQixLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDdkQsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNBO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBdkVZLDBCQUFPOzs7Ozs7Ozs7QUNsQnBCLDREQUE0RDtBQUM1RCxrQ0FBa0M7OztBQUVsQyx5Q0FBdUQ7QUFDdkQsMENBQXdDO0FBQ3hDLHlDQUF1RDtBQUV2RDs7R0FFRztBQUNIO0lBQWtDLHdDQUFTO0lBT3pDLHNCQUFtQixTQUFpQixFQUFFLGlCQUEwQjtlQUM5RCxrQkFBTSxTQUFTLEVBQUUsaUJBQWlCLENBQUM7SUFDckMsQ0FBQztJQU5ELHNCQUFZLHlEQUErQjthQUEzQztZQUNJLE9BQVUsWUFBWSxDQUFDLDRCQUE0QixnREFBMkMsSUFBSSxDQUFDLGtCQUFrQiwwQkFBdUIsQ0FBQztRQUNqSixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLHVDQUFhO2FBQXhCO1lBQ0UsT0FBTyx5QkFBYSxDQUFDLEdBQUcsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRztJQUNJLDBEQUFtQyxHQUExQztRQUFBLGlCQW1CQztRQWxCRyxJQUFNLGFBQWEsR0FBb0IsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMzRSxjQUFPLENBQUMsS0FBSSxDQUFDLGtDQUFrQyxDQUFDO1FBQWhELENBQWdELENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLCtCQUErQixDQUFDLGVBQWUsQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxHQUFjLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRXhDLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2FBQzlFLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixPQUFPLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSSwwQ0FBbUIsR0FBMUIsVUFBMkIsSUFBWTtRQUNyQyxPQUFPLDhCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUE3Q3VCLHlDQUE0QixHQUFXLDZEQUE2RCxDQUFDO0lBOEMvSCxtQkFBQztDQUFBLENBL0NpQyxxQkFBUyxHQStDMUM7QUEvQ1ksb0NBQVk7Ozs7Ozs7OztBQ1Z6Qiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQzs7OztHQUlHO0FBQ0g7SUFBQTtJQWtEQSxDQUFDO0lBakRRLG9DQUFnQixHQUF2QixVQUF3QixHQUFXLEVBQUUsTUFBYyxFQUFFLGFBQXVCO1FBQTVFLGlCQWtDQztRQWpDQyxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksYUFBYSxFQUFFO2dCQUNqQiwrQ0FBK0M7Z0JBQy9DLG1EQUFtRDthQUNwRDtZQUVELEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBQyxFQUFFO2dCQUNaLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7b0JBQ3ZDLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJO29CQUNBLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuRDtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDUixNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7Z0JBRUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQyxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUNwQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDWjtpQkFDSTtnQkFDSCxNQUFNLGlCQUFpQixDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsK0JBQVcsR0FBckIsVUFBc0IsWUFBb0I7UUFDeEMsSUFBSSxZQUFZLENBQUM7UUFDakIsSUFBSTtZQUNGLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNILE1BQU0sWUFBWSxDQUFDO2FBQ3RCO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQztBQWxEWSw4QkFBUzs7Ozs7Ozs7O0FDUnRCLDREQUE0RDtBQUM1RCxrQ0FBa0M7OztBQUVsQyw2Q0FBOEM7QUFDOUMseUNBQTRDO0FBQzVDLHdEQUFtRjtBQUNuRix3Q0FBNEM7QUFFNUM7O0dBRUc7QUFDSDtJQUFrQyx3Q0FBWTtJQUU1QyxzQkFBbUIsU0FBaUIsRUFBRSxpQkFBMEI7UUFBaEUsWUFDRSxrQkFBTSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FTcEM7UUFSQyxJQUFNLGFBQWEsR0FBRyxtQkFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNELElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixNQUFNLDBEQUErQixDQUFDLDBCQUEwQixDQUFDO1NBQ3BFO1FBRUQsS0FBSSxDQUFDLGtCQUFrQixHQUFHLGFBQVcsYUFBYSxDQUFDLGVBQWUsU0FBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDOztJQUNqSSxDQUFDO0lBRUQsc0JBQVcsdUNBQWE7YUFBeEI7WUFDRSxPQUFPLHlCQUFhLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSSwwREFBbUMsR0FBMUM7UUFBQSxpQkFjQztRQWJDLElBQU0sYUFBYSxHQUFHLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEQsY0FBTyxDQUFDLEtBQUksQ0FBQyxrQ0FBa0MsQ0FBQztRQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNsRixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxhQUFNLENBQUMsMERBQStCLENBQUMsOEJBQThCLENBQUM7UUFBdEUsQ0FBc0UsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFsQ2EsdUJBQVUsR0FBVyxLQUFLLENBQUM7SUFtQzNDLG1CQUFDO0NBQUEsQ0FwQ2lDLDJCQUFZLEdBb0M3QztBQXBDWSxvQ0FBWTs7Ozs7Ozs7O0FDWHpCLDREQUE0RDtBQUM1RCxrQ0FBa0M7OztBQUVsQyx1Q0FBa0M7QUFDbEMsd0NBQTRDO0FBVTVDOztHQUVHO0FBQ0gsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNuQixJQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztBQTZGaEMsSUFBTSxvQkFBb0IsR0FBZ0I7SUFDeEMsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsSUFBSTtJQUNmLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsV0FBVyxFQUFFLGNBQU0sMEJBQVEsQ0FBQyxxQkFBcUIsRUFBRSxFQUFoQyxDQUFnQztJQUNuRCxxQkFBcUIsRUFBRSxjQUFNLDBCQUFRLENBQUMscUJBQXFCLEVBQUUsRUFBaEMsQ0FBZ0M7SUFDN0QseUJBQXlCLEVBQUUsSUFBSTtDQUNoQyxDQUFDO0FBRUYsSUFBTSxxQkFBcUIsR0FBaUI7SUFDMUMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixzQkFBc0IsRUFBRSxLQUFLO0NBQzlCLENBQUM7QUFFRixJQUFNLHNCQUFzQixHQUFrQjtJQUM1QyxNQUFNLEVBQUUsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hCLGdCQUFnQixFQUFFLGFBQWE7SUFDL0IseUJBQXlCLEVBQUUsTUFBTTtJQUNqQyxpQkFBaUIsRUFBRSxtQkFBbUI7Q0FDdkMsQ0FBQztBQUVGLElBQU0seUJBQXlCLEdBQXFCO0lBQ2xELFNBQVMsRUFBRSxLQUFLO0lBQ2hCLG9CQUFvQixFQUFFLElBQUksS0FBSyxFQUFVO0lBQ3pDLG9CQUFvQixFQUFFLElBQUksR0FBRyxFQUF5QjtDQUN2RCxDQUFDO0FBRUY7Ozs7Ozs7OztHQVNHO0FBRUgsU0FBZ0Isa0JBQWtCLENBQUMsRUFBK0Q7UUFBN0QsY0FBSSxFQUFFLGFBQVUsRUFBViwrQkFBVSxFQUFFLGNBQVcsRUFBWCxnQ0FBVyxFQUFFLGlCQUFjLEVBQWQsbUNBQWM7SUFDaEYsSUFBTSxlQUFlLEdBQWtCO1FBQ3JDLElBQUksdUJBQU8sb0JBQW9CLEVBQUssSUFBSSxDQUFFO1FBQzFDLEtBQUssdUJBQU8scUJBQXFCLEVBQUssS0FBSyxDQUFFO1FBQzdDLE1BQU0sdUJBQU8sc0JBQXNCLEVBQUssTUFBTSxDQUFFO1FBQ2hELFNBQVMsdUJBQU8seUJBQXlCLEVBQUssU0FBUyxDQUFFO0tBQzFELENBQUM7SUFDRixPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBUkQsZ0RBUUM7Ozs7Ozs7OztBQzlKRCw0REFBNEQ7QUFDNUQsa0NBQWtDOzs7QUFFbEMsNENBQTRDO0FBRS9CLDJDQUFtQyxHQUFHO0lBQy9DLG1CQUFtQixFQUFFO1FBQ2pCLElBQUksRUFBRSxzQkFBc0I7S0FDL0I7SUFDRCxlQUFlLEVBQUU7UUFDYixJQUFJLEVBQUUsa0JBQWtCO0tBQzNCO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSSxFQUFFLGdCQUFnQjtLQUN6QjtDQUNKLENBQUM7QUFFRjs7R0FFRztBQUNIO0lBQWtELHdEQUFXO0lBRXpELHNDQUFZLFNBQWlCLEVBQUUsWUFBcUI7UUFBcEQsWUFDSSxrQkFBTSxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBSWpDO1FBSEcsS0FBSSxDQUFDLElBQUksR0FBRyw4QkFBOEIsQ0FBQztRQUUzQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDeEUsQ0FBQztJQUVNLHVEQUEwQixHQUFqQyxVQUFrQyxXQUFtQjtRQUNqRCxJQUFNLHdCQUF3QixHQUFHO1lBQzdCLDJDQUFtQyxDQUFDLG1CQUFtQixDQUFDLElBQUk7WUFDNUQsMkNBQW1DLENBQUMsZUFBZSxDQUFDLElBQUk7WUFDeEQsMkNBQW1DLENBQUMsYUFBYSxDQUFDLElBQUk7U0FDekQsQ0FBQztRQUVGLE9BQU8sV0FBVyxJQUFJLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0seURBQTRCLEdBQW5DLFVBQW9DLFNBQWlCO1FBQ2pELE9BQU8sSUFBSSw0QkFBNEIsQ0FBQywyQ0FBbUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFTSwrREFBa0MsR0FBekMsVUFBMEMsU0FBaUI7UUFDdkQsT0FBTyxJQUFJLDRCQUE0QixDQUFDLDJDQUFtQyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRU0sMkRBQThCLEdBQXJDLFVBQXNDLFNBQWlCO1FBQ25ELE9BQU8sSUFBSSw0QkFBNEIsQ0FBQywyQ0FBbUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUMsQ0E5QmlELHlCQUFXLEdBOEI1RDtBQTlCWSxvRUFBNEI7Ozs7Ozs7OztBQ3BCekMsNERBQTREO0FBQzVELGtDQUFrQzs7QUFtQmxDLFNBQWdCLHNCQUFzQixDQUFDLEtBQWE7SUFDaEQsT0FBTztRQUNILFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLFNBQVMsRUFBRSxJQUFJO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixZQUFZLEVBQUUsS0FBSztLQUN0QixDQUFDO0FBQ04sQ0FBQztBQWJELHdEQWFDOzs7Ozs7Ozs7O0FDakNELDZDQUErQztBQUMvQyx5Q0FBd0Q7QUFDeEQsa0RBQTZFO0FBQzdFLDJDQUFtRDtBQUNuRCx3Q0FBNkM7QUFFaEMsMEJBQWtCLEdBQUcsVUFBQyxHQUFXO0lBRTFDLElBQU0sR0FBRyxHQUFHLG1CQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFM0Msd0JBQXdCO0lBQ3hCLElBQUksQ0FBQyw4QkFBa0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRTtRQUM5RCw4Q0FBOEM7UUFDOUMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFcEMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDdEMsSUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFNLDJCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3BDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyx1Q0FBa0IsQ0FBQztTQUNuRDtLQUNKO0lBRUQsT0FBVyxHQUFHLENBQUMsUUFBUSxVQUFLLEdBQUcsQ0FBQyxlQUFlLFNBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztBQUM5RSxDQUFDLENBQUM7QUFFVyw4QkFBc0IsR0FBRyxVQUFDLFdBQW1CO0lBQ3RELG1CQUFtQjtJQUNuQiw4RUFBOEU7SUFDOUUsNEJBQTRCO0lBQzVCLE9BQU8seUJBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBRVcsOEJBQXNCLEdBQUcsVUFBQyxNQUFjLElBQWEsWUFBRyxzQ0FBaUIsSUFBRyxNQUFNLElBQUksRUFBRSxDQUFFLEVBQXJDLENBQXFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN4RyxxREFBOEQ7QUFBckQsMEVBQW9CO0FBQzdCLHVDQUFrQztBQUF6QixnQ0FBTTtBQUNmLHVDQUFvQztBQUEzQixvQ0FBUTtBQUNqQix3Q0FBb0M7QUFBM0IsbUNBQU87QUFDaEIseUNBQThDO0FBQXJDLHlDQUFTO0FBQ2xCLHlDQUF3QztBQUEvQix5Q0FBUztBQUNsQixxREFBcUQ7QUFBNUMsd0RBQVc7QUFDcEIsOENBQStEO0FBQXRELHFEQUFhO0FBQUUscURBQWE7QUFDckMseURBQXNFO0FBQTdELHNGQUF3QjtBQUNqQyw2Q0FBOEM7QUFBckMsa0RBQVk7QUFFckIsU0FBUztBQUNULHlDQUE4QztBQUFyQyx5Q0FBUztBQUNsQiwrQ0FBMEQ7QUFBakQsMkRBQWU7QUFDeEIsNENBQWtEO0FBQXpDLCtDQUFXO0FBQ3BCLHdEQUE0RTtBQUFuRSxzRkFBd0I7QUFDakMsNkRBQW9GO0FBQTNFLGtHQUE0Qjs7Ozs7Ozs7O0FDaEJyQyw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQywyQ0FBa0Q7QUFDbEQsd0NBQTRDO0FBRTVDOztHQUVHO0FBQ0g7SUFPRSx3QkFBWSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEdBQVcsRUFBRSxJQUFZO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBYlksd0NBQWM7Ozs7Ozs7OztBQ1QzQiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQzs7R0FFRztBQUNIO0lBT0UsMEJBQVksV0FBbUIsRUFBRSxPQUFlLEVBQUUsU0FBaUIsRUFBRSxxQkFBNkI7UUFDaEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO0lBQ3JELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUM7QUFiWSw0Q0FBZ0I7Ozs7Ozs7OztBQ043Qiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUdsQywyQ0FBa0Q7QUFDbEQseURBQTZGO0FBRzdGLHlDQUEwRztBQUMxRyx3REFBNEU7QUFDNUUsMkNBQWtEO0FBRWxEOzs7O0dBSUc7QUFDSDtJQTJCRTs7Ozs7Ozs7T0FRRztJQUNILGlDQUFhLFNBQW9CLEVBQUUsUUFBZ0IsRUFBRSxLQUFvQixFQUFFLFlBQW9CLEVBQUUsV0FBbUIsRUFBRSxLQUFhO1FBQ2pJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBUSxLQUFLLFFBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcseUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSx5QkFBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUcsQ0FBQyxDQUFDLHlCQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFL0gsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVqRCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRywwQkFBYyxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQWxDRCxzQkFBVyw4Q0FBUzthQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRixDQUFDOzs7T0FBQTtJQWtDRDs7Ozs7OztPQU9HO0lBQ0gscURBQW1CLEdBQW5CLFVBQW9CLE9BQWdCLEVBQUUsT0FBaUMsRUFBRSxpQkFBdUI7UUFDOUYsSUFBSSxlQUFlLEdBQWUsRUFBRSxDQUFDO1FBRXJDLElBQUksT0FBTyxFQUFFO1lBQ1gsZ0VBQWdFO1lBQ2hFLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ25DO1lBRUQsNERBQTREO1lBQzVELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtnQkFDekIsZ0RBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzthQUMxQztZQUVELDhFQUE4RTtZQUM5RSxJQUFJLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDL0MsZUFBZSxHQUFHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDM0U7U0FDRjtRQUVELElBQUksaUJBQWlCLEVBQUU7WUFDckIsZUFBZSxHQUFHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNyRjtRQUVELHdGQUF3RjtRQUN4RixxREFBcUQ7UUFDckQsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFbkUseURBQXlEO1FBQ3pELElBQUksUUFBb0IsQ0FBQztRQUN6QixJQUFJLE9BQU8sRUFBRTtZQUNYLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFFRCw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsb0JBQW9CLEdBQUcsdUJBQXVCLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELDRCQUE0QjtJQUU1Qjs7Ozs7O09BTUc7SUFDSyx5REFBdUIsR0FBL0IsVUFBaUMsTUFBYztRQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVCQUFXLENBQUMsS0FBSyxFQUFFLHVCQUFXLENBQUMsY0FBYyxFQUFFLHVCQUFXLENBQUMsT0FBTyxFQUFFLHVCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2hILE1BQU0sbURBQXdCLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILHVHQUF1RztJQUMvRixxRUFBbUMsR0FBM0MsVUFBNEMsT0FBaUMsRUFBRSxhQUFrQjtRQUUvRiwrQ0FBK0M7UUFDL0MsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksY0FBYyxHQUFlLEVBQUUsQ0FBQztRQUNwQyw4REFBOEQ7UUFDOUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLElBQU0sT0FBTyxHQUFZLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDZixPQUFPLEdBQUcsb0JBQVEsQ0FBQyxHQUFHLENBQUM7b0JBQ3ZCLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUN2QjtxQkFDSSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7b0JBQ3pCLE9BQU8sR0FBRyxvQkFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDOUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQzVCO2FBQ0Y7WUFDRCxtQkFBbUI7aUJBQ2QsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUNwQixPQUFPLEdBQUcsb0JBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ3ZCO1lBQ0QseUJBQXlCO2lCQUNwQixJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQzFCLE9BQU8sR0FBRyxvQkFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRjtRQUNELG1DQUFtQzthQUM5QixJQUFJLGFBQWEsRUFBRTtZQUN0QixJQUFJLGFBQWEsQ0FBQyxjQUFjLENBQUMscUJBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxHQUFHLG9CQUFRLENBQUMsUUFBUSxDQUFDO2dCQUM1QixPQUFPLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQzthQUM3QjtpQkFDSTtnQkFDSCxPQUFPLEdBQUcsb0JBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDaEI7U0FDRjtRQUVELGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RCxrREFBa0Q7UUFDbEQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1lBQ3JFLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDekg7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNLLG1EQUFpQixHQUF6QixVQUEwQixPQUFnQixFQUFFLE9BQW1CO1FBQzdELDZGQUE2RjtRQUM3RiwwSEFBMEg7UUFDMUgsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQyxxRkFBcUY7WUFDckYsSUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssdUJBQVcsQ0FBQyxJQUFJLENBQUM7WUFDMUcsSUFBSSxXQUFXLEVBQUU7Z0JBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN0RTtZQUNELGdDQUFnQztpQkFDM0I7Z0JBQ0gsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RILElBQUksaUJBQWlCLEVBQUU7b0JBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2hGO2FBQ0Y7WUFFRCxJQUFNLGlCQUFpQixHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RixJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBUSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDakc7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxpREFBZSxHQUF2QixVQUF3QixPQUFlLEVBQUUsT0FBZSxFQUFFLFFBQXFCO1FBQzdFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsT0FBTyxRQUFRLENBQUM7U0FDbkI7UUFFRCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssb0JBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsUUFBUSxDQUFDLG9CQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNqQyxNQUFNO2FBQ1A7WUFDRCxLQUFLLG9CQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDeEMsUUFBUSxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsb0JBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hELE1BQU07YUFDUDtZQUNELEtBQUssb0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsUUFBUSxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLG9CQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLFFBQVEsQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLG9CQUFRLENBQUMsYUFBYSxDQUFDO2dCQUN4RCxNQUFNO2FBQ1A7WUFDRCxLQUFLLG9CQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLG9CQUFRLENBQUMsU0FBUyxDQUFDO2dCQUNwRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLG9CQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLElBQU0sR0FBRyxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFNLElBQUksR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFeEQsdUVBQXVFO2dCQUN2RSxRQUFRLENBQUMsb0JBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFFckMsSUFBSSxJQUFJLEtBQUsscUJBQVMsQ0FBQyxhQUFhLEVBQUU7b0JBQ2xDLFFBQVEsQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLG9CQUFRLENBQUMsU0FBUyxDQUFDO2lCQUN2RDtxQkFDSTtvQkFDRCxRQUFRLENBQUMsb0JBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxvQkFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDM0Q7Z0JBQ0QsTUFBTTthQUNQO1lBQ0QsS0FBSyxvQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixRQUFRLENBQUMsb0JBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQ3ZDLE1BQU07YUFDUDtZQUNELEtBQUssb0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsUUFBUSxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxNQUFNO2FBQ1A7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGtEQUFnQixHQUF4QixVQUF5QixPQUFpQztRQUN4RCxJQUFJLFFBQVEsR0FBZ0IsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLG1LQUFtSztZQUNuSyxPQUFPLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsK0JBQW1CLENBQUMsT0FBTyxDQUFDLGVBQUs7WUFDL0IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLDJJQUEySTtnQkFDM0ksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxxREFBNkIsR0FBcEMsVUFBcUMsZUFBMkI7UUFDOUQsSUFBSSxZQUFZLEdBQVcsSUFBSSxDQUFDO1FBRWhDLElBQUksZUFBZSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztnQkFDL0MsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO29CQUN4QixZQUFZLEdBQU0sR0FBRyxTQUFJLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFDO2lCQUNyRTtxQkFDSTtvQkFDSCxZQUFZLElBQUksTUFBSSxHQUFHLFNBQUksa0JBQWtCLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFHLENBQUM7aUJBQ3ZFO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZO0lBRVo7OztPQUdHO0lBQ0ksa0NBQVUsR0FBakIsVUFBa0IsT0FBaUM7UUFDL0MsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUM7QUF2VlksMERBQXVCOzs7Ozs7Ozs7QUNqQnBDLDREQUE0RDtBQUM1RCxrQ0FBa0M7O0FBRWxDLDJDQUFrRDtBQUNsRCwrQ0FBMEQ7QUFDMUQsMkNBQWtEO0FBRWxEOztHQUVHO0FBQ0g7SUFvQkUsb0JBQVksYUFBcUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsSUFBSSx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSTtZQUNGLElBQU0saUJBQWlCLEdBQVcseUJBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUUsSUFBTSxVQUFVLEdBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6RSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDM0I7Z0JBRUQsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxpQ0FBZSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQXZDRCxzQkFBSSwyQkFBRzthQUFQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQVEsR0FBVztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLDRCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0QyxDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7OztPQUpBO0lBNkJILGlCQUFDO0FBQUQsQ0FBQztBQTNDWSxnQ0FBVTs7Ozs7Ozs7O0FDVnZCLDREQUE0RDtBQUM1RCxrQ0FBa0M7O0FBRWxDLCtDQUEwRDtBQUMxRCwyQ0FBZ0Q7QUFFaEQsMkNBQWtEO0FBRWxEOztHQUVHO0FBQ0g7SUFlRSxzQ0FBc0M7SUFDdEMsaUJBQVksVUFBa0I7UUFDNUIsSUFBSSx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNuQyxNQUFNLGlDQUFlLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQztnQkFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQztnQkFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7aUJBQ3hEO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNuQztnQkFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDL0M7Z0JBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQztnQkFDSCxxQ0FBcUM7YUFDcEM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1Ysb0hBQW9IO1lBQ3BILHFGQUFxRjtZQUNyRixNQUFNLGlDQUFlLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUgsY0FBQztBQUFELENBQUM7QUE1RVksMEJBQU87Ozs7Ozs7OztBQ1hwQiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQyx5Q0FBeUQ7QUFDekQscURBQThEO0FBRTlELHdEQUE0RTtBQUU1RTs7R0FFRztBQUNIO0lBT0UsaUJBQVksYUFBNEI7UUFDdEMsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3JILElBQUksQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM3RyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hFLE1BQU0sbURBQXdCLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztTQUNoRTtRQUVELE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUMsdUJBQXVCO0lBQ3ZCLHlCQUFPLEdBQVAsVUFBUSxHQUFXLEVBQUUsS0FBYSxFQUFFLG1CQUE2QjtRQUM3RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxtQkFBbUIsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMseUJBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxtQkFBNkI7UUFDOUMsSUFBSSxtQkFBbUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDRCQUE0QjtJQUM1Qiw0QkFBVSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsdUJBQUssR0FBTDtRQUNJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBRUQsb0NBQWtCLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUscUJBQTZCO1FBQzlELElBQU0sT0FBTyxHQUFnQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxvQkFBMEMsQ0FBQztRQUMvQyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxHQUFHLFNBQVEsQ0FBQztZQUNoQixLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRTt3QkFDekQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxLQUFLLEVBQUU7NEJBQ1Asb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDcEYsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3lCQUN0QztxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsMkNBQXlCLEdBQXpCLFVBQTBCLEtBQWM7UUFDcEMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksR0FBRyxTQUFRLENBQUM7WUFDaEIsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFO2dCQUNqQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzFJLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLE9BQUssVUFBQzt3QkFDVixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNyQixPQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN2Qjt3QkFDRCxJQUFJLE9BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFLLENBQUMsRUFBRTs0QkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsR0FBRyxPQUFLLENBQUMsQ0FBQzs0QkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ25DO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sd0NBQXNCLEdBQTlCLFVBQStCLFVBQWtCO1FBQzdDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHFCQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLFdBQVcsS0FBSyxxQkFBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxHQUFHLFNBQVEsQ0FBQztZQUNoQixLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hCO2lCQUNKO2FBQ0o7WUFDRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCwrQkFBYSxHQUFiLFVBQWMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFnQjtRQUN6RCxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekQsU0FBUyxJQUFJLFVBQVUsR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQzlDO1FBRUQsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVELCtCQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQU0sSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7WUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0M7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlDQUF1QixHQUF2QixVQUF3QixjQUFzQjtRQUMxQyxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxjQUFjLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDOUUsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQ0FBOEIsR0FBckMsVUFBc0MsU0FBYyxFQUFFLEtBQWE7UUFDL0QsT0FBTyxxQkFBUyxDQUFDLHFCQUFxQixHQUFHLHFCQUFTLENBQUMsaUJBQWlCO2FBQ2hFLEtBQUcsU0FBVyxJQUFHLHFCQUFTLENBQUMsaUJBQWlCLElBQUksS0FBRyxLQUFPLEVBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFvQixHQUEzQixVQUE0QixLQUFhO1FBQ3JDLE9BQU8scUJBQVMsQ0FBQyxTQUFTLEdBQUcscUJBQVMsQ0FBQyxpQkFBaUIsSUFBRyxLQUFHLEtBQU8sRUFBQztJQUMxRSxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUF2TFksMEJBQU87Ozs7Ozs7OztBQ1hwQiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUtsQzs7R0FFRztBQUNIO0lBS0UsOEJBQVksR0FBbUIsRUFBRSxLQUF1QjtRQUN0RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUM7QUFUWSxvREFBb0I7Ozs7Ozs7OztBQ1RqQyw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQzs7R0FFRztBQUNIO0lBQUE7SUFvQkEsQ0FBQztJQW5CRzs7OztPQUlHO0lBQ0ksd0JBQWMsR0FBckIsVUFBc0IsU0FBaUI7UUFDbkMsMEpBQTBKO1FBQzFKLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNsQjtRQUNELE9BQU8sUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFHLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBcEJZLDhCQUFTOzs7Ozs7Ozs7OztBQ0h0Qiw0REFBNEQ7QUFDNUQsa0NBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUFBQTtJQXNCQSxDQUFDO0lBcEJVLGdDQUFrQixHQUF6QixVQUEwQixnQkFBOEIsRUFBRSxVQUFtQjtRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxnQkFBZ0IsQ0FBQztTQUMzQjtRQUVELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNyRDtRQUVELDRCQUNLLGdCQUFnQixJQUNuQixPQUFPLEVBQUUsVUFBVSxFQUNuQixhQUFhLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFDaEMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLE9BQU8sRUFDbkQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLElBQzdCO0lBQ04sQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQXRCWSxzQ0FBYTs7Ozs7Ozs7O0FDVDFCLDREQUE0RDtBQUM1RCxrQ0FBa0M7O0FBRWxDOztHQUVHO0FBQ0gsNkNBQThDO0FBQzlDLDZDQUE4QztBQUM5Qyx5Q0FBdUQ7QUFDdkQsd0RBQW1GO0FBQ25GLHdDQUE0QztBQUM1QywyQ0FBa0Q7QUFFbEQ7SUFBQTtJQXNDQSxDQUFDO0lBckNHOztNQUVFO0lBQ2EsdUNBQXNCLEdBQXJDLFVBQXNDLFlBQW9CO1FBQ3RELFlBQVksR0FBRyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFNLFVBQVUsR0FBRyxtQkFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDN0MsUUFBUSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckIsS0FBSyxLQUFLO2dCQUNOLE9BQU8seUJBQWEsQ0FBQyxHQUFHLENBQUM7WUFDN0IsS0FBSyxNQUFNO2dCQUNQLE9BQU8seUJBQWEsQ0FBQyxJQUFJLENBQUM7WUFDOUI7Z0JBQ0ksT0FBTyx5QkFBYSxDQUFDLEdBQUcsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRDs7O01BR0U7SUFDWSwrQkFBYyxHQUE1QixVQUE2QixZQUFvQixFQUFFLGlCQUEwQjtRQUN6RSxJQUFJLHlCQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSx1REFBdUQ7UUFDdkQsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLHlCQUFhLENBQUMsR0FBRztnQkFDbEIsT0FBTyxJQUFJLDJCQUFZLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDN0QsS0FBSyx5QkFBYSxDQUFDLEdBQUc7Z0JBQ2xCLE9BQU8sSUFBSSwyQkFBWSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdEO2dCQUNJLE1BQU0sMERBQStCLENBQUMsb0JBQW9CLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDO0FBdENZLDRDQUFnQjs7Ozs7Ozs7OztBQ0g3Qiw2Q0FBMEM7QUFFMUMsMEJBQTBCO0FBQzFCLElBQU0sNkJBQTZCLEdBQUcsWUFBWSxDQUFDO0FBQ25ELElBQU0scUJBQXFCLEdBQUcsa0JBQWtCLENBQUM7QUFFakQsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFxQixJQUFhLFFBQ25ELEtBQUssQ0FBQyxzQkFBc0IsU0FBSSxLQUFLLENBQUMsT0FBTyxTQUFJLEtBQUssQ0FBQyxTQUFXLENBQ3hFLEVBRnlELENBRXpELENBQUM7QUFFRjtJQWVJLDBCQUFZLE1BQXVCLEVBQUUsZ0JBQWtDO1FBYnZFLG1DQUFtQztRQUMzQixvQkFBZSxHQUFvQixFQUFFLENBQUM7UUFDOUMscUJBQXFCO1FBQ2IscUJBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUNoRCw4Q0FBOEM7UUFDdEMsOEJBQXlCLEdBQThCLEVBQUUsQ0FBQztRQUVsRSwyQkFBMkI7UUFDbkIsNkJBQXdCLEdBQVksS0FBSyxDQUFDO1FBTTlDLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNoRSx3RUFBd0U7UUFDeEUsZ0dBQWdHO1FBQ2hHLFlBQVk7UUFDWixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxLQUFxQjtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUNELElBQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBcUI7UUFDM0IsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUQsT0FBTztTQUNWO1FBQ0QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsR0FBTyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsU0FBRSxLQUFLLEVBQUMsQ0FBQztRQUV6RixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLGFBQXFCO1FBQTNCLGlCQWtDQztRQWhDRyxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDaEUsT0FBTztTQUNWO1FBRUQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBSyxJQUFJLFlBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sYUFBYSxHQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQ25DLGNBQWMsQ0FDcEIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFNLGtCQUFrQixHQUFlLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyRixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxnRkFBZ0Y7UUFFaEYsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTztTQUNWO1FBRUQsSUFBTSxZQUFZLEdBQWlCLElBQUksc0JBQVksQ0FDL0MsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixhQUFhLEVBQ2IsSUFBSSxDQUFDLFFBQVEsRUFDYixrQkFBa0IsQ0FDckIsQ0FBQztRQUVGLElBQU0sc0JBQXNCLEdBQVEsYUFBYSxTQUFFLFlBQVksRUFBRSxDQUFDO1FBRWxFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBUCxDQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyw4Q0FBbUIsR0FBM0IsVUFBNEIsS0FBcUI7O1FBQzdDLG9DQUFvQztRQUNwQyxzQ0FBc0M7UUFDdEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNiLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3hELEdBQUMsU0FBUyxJQUFHLENBQUM7bUJBQ2pCLENBQUM7U0FDTDthQUFNO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0wsQ0FBQztJQUVPLDRDQUFpQixHQUF6QixVQUEwQixhQUFxQjtRQUEvQyxpQkFVQztRQVRHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDcEMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLFFBQVE7WUFDbkIsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN4QyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxPQUFXLElBQUksU0FBRSxLQUFLLEdBQUU7YUFDM0I7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7QUNsSUQsa0RBQXFGO0FBQ3JGLCtDQUE4QztBQUU5QywrQ0FBMEQ7QUFFMUQ7SUFBMEMsd0NBQWM7SUFDcEQscUJBQXFCO0lBQ3JCLHNCQUFZLFFBQTJCLEVBQUUsYUFBcUIsRUFBRSxRQUFnQixFQUFFLFVBQXNCO1FBQXhHLFlBQ0ksa0JBQU0sdUNBQXNCLENBQUMsZUFBZSxDQUFDLEVBQUUsYUFBYSxDQUFDLFNBVWhFO1FBVEcsS0FBSSxDQUFDLEtBQUssQ0FBQyx1Q0FBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMzRCxLQUFJLENBQUMsS0FBSyxDQUFDLHVDQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNqRSxLQUFJLENBQUMsS0FBSyxDQUFDLHVDQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN4RSxLQUFJLENBQUMsS0FBSyxDQUFDLHVDQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ2xGLEtBQUksQ0FBQyxLQUFLLENBQUMsdUNBQXNCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUcsK0NBQTBCLENBQUMsNkJBQStCLENBQUMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLHVDQUFzQixDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9JLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBRywrQ0FBMEIsQ0FBQywrQkFBaUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsdUNBQXNCLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkosS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFHLCtDQUEwQixDQUFDLDBCQUE0QixDQUFDLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyx1Q0FBc0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQzs7UUFDL0ksY0FBYztJQUNsQixDQUFDO0lBRU8sb0NBQWEsR0FBckIsVUFBc0IsU0FBaUIsRUFBRSxVQUFzQjtRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBckJ5Qyx3QkFBYyxHQXFCdkQ7Ozs7Ozs7Ozs7OztBQzFCRCxrREFBa0U7QUFDbEUsa0RBSThCO0FBQzlCLCtDQUEwRDtBQUMxRCwyQ0FBbUQ7QUFFbkQ7SUFNSSx3QkFBWSxTQUFpQixFQUFFLGFBQXFCOztRQUVoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUs7WUFDTixHQUFDLHVDQUFzQixDQUFDLG1DQUFjLENBQUMsSUFBRyxTQUFTO1lBQ25ELEdBQUMsdUNBQXNCLENBQUMsbUNBQWMsQ0FBQyxJQUFHLElBQUksQ0FBQyxjQUFjO1lBQzdELEdBQUMsdUNBQXNCLENBQUMscUNBQWdCLENBQUMsSUFBRyxDQUFDLENBQUM7WUFDOUMsR0FBQyxLQUFHLCtDQUEwQixDQUFDLDRCQUE4QixJQUFHLGFBQWE7ZUFDaEYsQ0FBQztJQUNOLENBQUM7SUFFTyx1Q0FBYyxHQUF0QixVQUF1QixJQUFZO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsdUNBQXNCLENBQUMscUNBQWdCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNoRSxDQUFDO0lBRU0sNkJBQUksR0FBWDtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxzQkFBVyxrREFBc0I7YUFBakM7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBRywrQ0FBMEIsQ0FBQyw0QkFBOEIsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7YUFFRCxVQUFrQyxLQUFhO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBRywrQ0FBMEIsQ0FBQyw0QkFBOEIsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNyRixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLHFDQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHVDQUFzQixDQUFDLG1DQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRU0sNEJBQUcsR0FBVjtRQUNJLDRCQUNPLElBQUksQ0FBQyxLQUFLLElBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQ3ZCO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNc2FsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSBzdHJpbmcgaXMgZW1wdHlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3RyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSBcInVuZGVmaW5lZFwiIHx8ICFzdHIgfHwgMCA9PT0gc3RyLmxlbmd0aCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDYWNoZUxvY2F0aW9uIH0gZnJvbSBcIi4uL0NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBDb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gIHN0YXRpYyBnZXQgZXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJlcnJvcl9kZXNjcmlwdGlvblwiOyB9XHJcbiAgc3RhdGljIGdldCBlcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJlcnJvclwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2NvcGVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgY2xpZW50SW5mbygpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRfaW5mb1wiOyB9XHJcbiAgc3RhdGljIGdldCBjbGllbnRJZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRJZFwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJpZF90b2tlblwiOyB9XHJcbiAgc3RhdGljIGdldCBhZGFsSWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJhZGFsLmlkdG9rZW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgYWNjZXNzVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWNjZXNzX3Rva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IGV4cGlyZXNJbigpOiBzdHJpbmcgeyByZXR1cm4gXCJleHBpcmVzX2luXCI7IH1cclxuICBzdGF0aWMgZ2V0IHNlc3Npb25TdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzZXNzaW9uX3N0YXRlXCI7IH1cclxuICBzdGF0aWMgZ2V0IGNsYWltcygpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGFpbXNcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IG1zYWxDbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuY2xpZW50LmluZm9cIjsgfVxyXG4gIHN0YXRpYyBnZXQgbXNhbEVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXJyb3JcIjsgfVxyXG4gIHN0YXRpYyBnZXQgbXNhbEVycm9yRGVzY3JpcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5lcnJvci5kZXNjcmlwdGlvblwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgbXNhbFNlc3Npb25TdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnNlc3Npb24uc3RhdGVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgdG9rZW5LZXlzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ua2V5c1wiOyB9XHJcbiAgc3RhdGljIGdldCBhY2Nlc3NUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFjY2Vzcy50b2tlbi5rZXlcIjsgfVxyXG4gIHN0YXRpYyBnZXQgZXhwaXJhdGlvbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmV4cGlyYXRpb24ua2V5XCI7IH1cclxuICBzdGF0aWMgZ2V0IHN0YXRlTG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5sb2dpblwiOyB9XHJcbiAgc3RhdGljIGdldCBzdGF0ZUFjcXVpcmVUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmFjcXVpcmVUb2tlblwiOyB9XHJcbiAgc3RhdGljIGdldCBzdGF0ZVJlbmV3KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUucmVuZXdcIjsgfVxyXG4gIHN0YXRpYyBnZXQgbm9uY2VJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubm9uY2UuaWR0b2tlblwiOyB9XHJcbiAgc3RhdGljIGdldCB1c2VyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVzZXJuYW1lXCI7IH1cclxuICBzdGF0aWMgZ2V0IGlkVG9rZW5LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5pZHRva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IGxvZ2luUmVxdWVzdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLnJlcXVlc3RcIjsgfVxyXG4gIHN0YXRpYyBnZXQgbG9naW5FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLmVycm9yXCI7IH1cclxuICBzdGF0aWMgZ2V0IHJlbmV3U3RhdHVzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ucmVuZXcuc3RhdHVzXCI7IH1cclxuICBzdGF0aWMgZ2V0IHVybEhhc2goKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC51cmxIYXNoXCI7IH1cclxuICBzdGF0aWMgZ2V0IGFuZ3VsYXJMb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hbmd1bGFyLmxvZ2luLnJlcXVlc3RcIjsgfVxyXG4gIHN0YXRpYyBnZXQgbXNhbCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBub19hY2NvdW50KCk6IHN0cmluZyB7IHJldHVybiBcIk5PX0FDQ09VTlRcIjsgfVxyXG4gIHN0YXRpYyBnZXQgY29uc3VtZXJzVXRpZCgpOiBzdHJpbmcgeyByZXR1cm4gXCI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWRcIjsgfVxyXG4gIHN0YXRpYyBnZXQgdXBuKCk6IHN0cmluZyB7IHJldHVybiBcInVwblwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvbXB0X3NlbGVjdF9hY2NvdW50KCk6IHN0cmluZyB7IHJldHVybiBcIiZwcm9tcHQ9c2VsZWN0X2FjY291bnRcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcHJvbXB0X25vbmUoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1ub25lXCI7IH1cclxuICBzdGF0aWMgZ2V0IHByb21wdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9tcHRcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHJlc3BvbnNlX21vZGVfZnJhZ21lbnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnJlc3BvbnNlX21vZGU9ZnJhZ21lbnRcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcmVzb3VyY2VEZWxpbWl0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIFwifFwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0NhbmNlbGxlZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJDYW5jZWxlZFwiOyB9XHJcbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzQ29tcGxldGVkKCk6IHN0cmluZyB7IHJldHVybiBcIkNvbXBsZXRlZFwiOyB9XHJcbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcygpOiBzdHJpbmcgeyByZXR1cm4gXCJJbiBQcm9ncmVzc1wiOyB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9wb3BVcFdpZHRoOiBudW1iZXIgPSA0ODM7XHJcbiAgc3RhdGljIGdldCBwb3BVcFdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wb3BVcFdpZHRoOyB9XHJcbiAgc3RhdGljIHNldCBwb3BVcFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvcFVwV2lkdGggPSB3aWR0aDtcclxuICB9XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwSGVpZ2h0OiBudW1iZXIgPSA2MDA7XHJcbiAgc3RhdGljIGdldCBwb3BVcEhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBIZWlnaHQ7IH1cclxuICBzdGF0aWMgc2V0IHBvcFVwSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb3BVcEhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgbG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiTE9HSU5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgcmVuZXdUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJSRU5FV19UT0tFTlwiOyB9XHJcbiAgc3RhdGljIGdldCB1bmtub3duKCk6IHN0cmluZyB7IHJldHVybiBcIlVOS05PV05cIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhvbWVBY2NvdW50SWRlbnRpZmllcigpOiBzdHJpbmcgeyByZXR1cm4gXCJob21lQWNjb3VudElkZW50aWZpZXJcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGNvbW1vbigpOiBzdHJpbmcgeyByZXR1cm4gXCJjb21tb25cIjsgfVxyXG4gIHN0YXRpYyBnZXQgb3BlbmlkU2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwib3BlbmlkXCI7IH1cclxuICBzdGF0aWMgZ2V0IHByb2ZpbGVTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9maWxlXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBjYWNoZUxvY2F0aW9uTG9jYWwoKTogQ2FjaGVMb2NhdGlvbiB7IHJldHVybiBcImxvY2FsU3RvcmFnZVwiOyB9XHJcbiAgc3RhdGljIGdldCBjYWNoZUxvY2F0aW9uU2Vzc2lvbigpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIFwic2Vzc2lvblN0b3JhZ2VcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGludGVyYWN0aW9uVHlwZVJlZGlyZWN0KCk6IEludGVyYWN0aW9uVHlwZSB7IHJldHVybiBcInJlZGlyZWN0SW50ZXJhY3Rpb25cIjsgfVxyXG4gIHN0YXRpYyBnZXQgaW50ZXJhY3Rpb25UeXBlUG9wdXAoKTogSW50ZXJhY3Rpb25UeXBlIHsgcmV0dXJuIFwicG9wdXBJbnRlcmFjdGlvblwiOyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIENhY2hlS2V5cyBmb3IgJ2F1dGhvcml0eScgYW5kICdhY2NvdW50J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENhY2hlS2V5cyA9IHtcclxuICAgIEFVVEhPUklUWTogXCJtc2FsLmF1dGhvcml0eVwiLFxyXG4gICAgQUNRVUlSRV9UT0tFTl9BQ0NPVU5UOiBcIm1zYWwuYWNxdWlyZVRva2VuQWNjb3VudFwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUFEVHJ1c3RlZEhvc3RMaXN0ID0gIHtcclxuICBcImxvZ2luLndpbmRvd3MubmV0XCI6IFwibG9naW4ud2luZG93cy5uZXRcIixcclxuICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIjogXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCIsXHJcbiAgXCJsb2dpbi5jbG91ZGdvdmFwaS51c1wiOiBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCIsXHJcbiAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxyXG4gIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCIsXHJcbiAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogU1NPIFR5cGVzIC0gZ2VuZXJhdGVkIHRvIHBvcHVsYXRlIGhpbnRzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1NPVHlwZXMgPSB7XHJcbiAgICBBQ0NPVU5UOiBcImFjY291bnRcIixcclxuICAgIFNJRDogXCJzaWRcIixcclxuICAgIExPR0lOX0hJTlQ6IFwibG9naW5faGludFwiLFxyXG4gICAgSURfVE9LRU46IFwiaWRfdG9rZW5cIixcclxuICAgIERPTUFJTl9ISU5UOiBcImRvbWFpbl9oaW50XCIsXHJcbiAgICBPUkdBTklaQVRJT05TOiBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUzogXCJjb25zdW1lcnNcIixcclxuICAgIEFDQ09VTlRfSUQ6IFwiYWNjb3VudElkZW50aWZpZXJcIixcclxuICAgIEhPTUVBQ0NPVU5UX0lEOiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgTE9HSU5fUkVROiBcImxvZ2luX3JlcVwiLFxyXG4gICAgRE9NQUlOX1JFUTogXCJkb21haW5fcmVxXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmxhY2tsaXN0ZWRFUVBhcmFtcyA9IFtcclxuICBTU09UeXBlcy5TSUQsXHJcbiAgU1NPVHlwZXMuTE9HSU5fSElOVFxyXG5dO1xyXG5cclxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25UeXBlID0gXCJyZWRpcmVjdEludGVyYWN0aW9uXCIgfCBcInBvcHVwSW50ZXJhY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcclxuXHRMT0dJTjogXCJsb2dpblwiLFxyXG5cdFNFTEVDVF9BQ0NPVU5UOiBcInNlbGVjdF9hY2NvdW50XCIsXHJcblx0Q09OU0VOVDogXCJjb25zZW50XCIsXHJcblx0Tk9ORTogXCJub25lXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogTVNBTCBKUyBMaWJyYXJ5IFZlcnNpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWJyYXJ5VmVyc2lvbigpOiBzdHJpbmcge1xyXG4gIHJldHVybiBcIjEuMS4zXCI7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3J5cHRvVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyByYW5kb20gR1VJRCAtIHVzZWQgdG8gcG9wdWxhdGUgc3RhdGU/XHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgKEdVSUQpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVOZXdHdWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUkZDNDEyMjogVGhlIHZlcnNpb24gNCBVVUlEIGlzIG1lYW50IGZvciBnZW5lcmF0aW5nIFVVSURzIGZyb20gdHJ1bHktcmFuZG9tIG9yXHJcbiAgICAgICAgLy8gcHNldWRvLXJhbmRvbSBudW1iZXJzLlxyXG4gICAgICAgIC8vIFRoZSBhbGdvcml0aG0gaXMgYXMgZm9sbG93czpcclxuICAgICAgICAvLyAgICAgU2V0IHRoZSB0d28gbW9zdCBzaWduaWZpY2FudCBiaXRzIChiaXRzIDYgYW5kIDcpIG9mIHRoZVxyXG4gICAgICAgIC8vICAgICAgICBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxyXG4gICAgICAgIC8vICAgICBTZXQgdGhlIGZvdXIgbW9zdCBzaWduaWZpY2FudCBiaXRzIChiaXRzIDEyIHRocm91Z2ggMTUpIG9mIHRoZVxyXG4gICAgICAgIC8vICAgICAgICB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkIHRvIHRoZSA0LWJpdCB2ZXJzaW9uIG51bWJlciBmcm9tXHJcbiAgICAgICAgLy8gICAgICAgIFNlY3Rpb24gNC4xLjMuIFZlcnNpb240XHJcbiAgICAgICAgLy8gICAgIFNldCBhbGwgdGhlIG90aGVyIGJpdHMgdG8gcmFuZG9tbHkgKG9yIHBzZXVkby1yYW5kb21seSkgY2hvc2VuXHJcbiAgICAgICAgLy8gICAgIHZhbHVlcy5cclxuICAgICAgICAvLyBVVUlEICAgICAgICAgICAgICAgICAgID0gdGltZS1sb3cgXCItXCIgdGltZS1taWQgXCItXCJ0aW1lLWhpZ2gtYW5kLXZlcnNpb24gXCItXCJjbG9jay1zZXEtcmVzZXJ2ZWQgYW5kIGxvdygyaGV4T2N0ZXQpXCItXCIgbm9kZVxyXG4gICAgICAgIC8vIHRpbWUtbG93ICAgICAgICAgICAgICAgPSA0aGV4T2N0ZXRcclxuICAgICAgICAvLyB0aW1lLW1pZCAgICAgICAgICAgICAgID0gMmhleE9jdGV0XHJcbiAgICAgICAgLy8gdGltZS1oaWdoLWFuZC12ZXJzaW9uICA9IDJoZXhPY3RldFxyXG4gICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgPSBoZXhPY3RldDpcclxuICAgICAgICAvLyBjbG9jay1zZXEtbG93ICAgICAgICAgID0gaGV4T2N0ZXRcclxuICAgICAgICAvLyBub2RlICAgICAgICAgICAgICAgICAgID0gNmhleE9jdGV0XHJcbiAgICAgICAgLy8gRm9ybWF0OiB4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcclxuICAgICAgICAvLyB5IGNvdWxkIGJlIDEwMDAsIDEwMDEsIDEwMTAsIDEwMTEgc2luY2UgbW9zdCBzaWduaWZpY2FudCB0d28gYml0cyBuZWVkcyB0byBiZSAxMFxyXG4gICAgICAgIC8vIHkgdmFsdWVzIGFyZSA4LCA5LCBBLCBCXHJcblxyXG4gICAgICAgIGNvbnN0IGNyeXB0b09iajogQ3J5cHRvID0gd2luZG93LmNyeXB0bzsgLy8gZm9yIElFIDExXHJcbiAgICAgICAgaWYgKGNyeXB0b09iaiAmJiBjcnlwdG9PYmouZ2V0UmFuZG9tVmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xyXG4gICAgICAgIGNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgLy9idWZmZXJbNl0gYW5kIGJ1ZmZlcls3XSByZXByZXNlbnRzIHRoZSB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDQgdGhyb3VnaCA3KSBvZiBidWZmZXJbNl0gdG8gcmVwcmVzZW50IGRlY2ltYWwgbnVtYmVyIDQgKFVVSUQgdmVyc2lvbiBudW1iZXIpLlxyXG4gICAgICAgIGJ1ZmZlcls2XSB8PSAweDQwOyAvL2J1ZmZlcls2XSB8IDAxMDAwMDAwIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAxLlxyXG4gICAgICAgIGJ1ZmZlcls2XSAmPSAweDRmOyAvL2J1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxyXG5cclxuICAgICAgICAvL2J1ZmZlcls4XSByZXByZXNlbnRzIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNiBhbmQgNykgb2YgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgdG8gemVybyBhbmQgb25lLCByZXNwZWN0aXZlbHkuXHJcbiAgICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vYnVmZmVyWzhdIHwgMTAwMDAwMDAgd2lsbCBzZXQgdGhlIDcgYml0IHRvIDEuXHJcbiAgICAgICAgYnVmZmVyWzhdICY9IDB4YmY7IC8vYnVmZmVyWzhdICYgMTAxMTExMTEgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDAuXHJcblxyXG4gICAgICAgIHJldHVybiBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzBdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMV0pXHJcbiAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsyXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzNdKVxyXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls0XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzVdKVxyXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls2XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzddKVxyXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls4XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzldKVxyXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMV0pXHJcbiAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxM10pXHJcbiAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBndWlkSG9sZGVyOiBzdHJpbmcgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiO1xyXG4gICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XHJcbiAgICAgICAgbGV0IHI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGd1aWRSZXNwb25zZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSAhPT0gXCItXCIgJiYgZ3VpZEhvbGRlcltpXSAhPT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgLy8gZWFjaCB4IGFuZCB5IG5lZWRzIHRvIGJlIHJhbmRvbVxyXG4gICAgICAgICAgICByID0gTWF0aC5yYW5kb20oKSAgKiAxNiB8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieFwiKSB7XHJcbiAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ5XCIpIHtcclxuICAgICAgICAgICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCBmaXJzdCBoZXggaXMgZmlsdGVyZWQgYW5kIHJlbWFpbmluZyBoZXggdmFsdWVzIGFyZSByYW5kb21cclxuICAgICAgICAgICAgciAmPSAweDM7IC8vIGJpdCBhbmQgd2l0aCAwMDExIHRvIHNldCBwb3MgMiB0byB6ZXJvID8wPz9cclxuICAgICAgICAgICAgciB8PSAweDg7IC8vIHNldCBwb3MgMyB0byAxIGFzIDE/Pz9cclxuICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGd1aWRSZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNpbWFsIHRvIEhleFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBudW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY2ltYWxUb0hleChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGhleDogc3RyaW5nID0gbnVtLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB3aGlsZSAoaGV4Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICBoZXggPSBcIjBcIiArIGhleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhleDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1NvbHV0aW9uXzRfJUUyJTgwJTkzX2VzY2FwaW5nX3RoZV9zdHJpbmdfYmVmb3JlX2VuY29kaW5nX2l0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBlbmNvZGluZyBzdHJpbmcgdG8gYmFzZTY0IC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJhc2U2NEVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlcihcIjB4XCIgKyBwMSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlY29kaW5nIGJhc2U2NCB0b2tlbiAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGJhc2U2NElkVG9rZW5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJhc2U2NERlY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoaW5wdXQpLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiVcIiArIChcIjAwXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICAgICAgfSkuam9pbihcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZXNlcmlhbGl6ZSBhIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBxdWVyeVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVzZXJpYWxpemUocXVlcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcclxuICAgICAgICBjb25zdCBwbCA9IC9cXCsvZztcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSAvKFteJj1dKyk9KFteJl0qKS9nO1xyXG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpID0+IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGwsIFwiIFwiKSk7XHJcbiAgICAgICAgY29uc3Qgb2JqOiB7fSA9IHt9O1xyXG4gICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xyXG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xyXG4gICAgICAgIG9ialtkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XHJcbiAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4uL0NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgY29uZmlndXJhdGlvbk5vdFNldDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fY29uZmlnX3NldFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ29uZmlndXJhdGlvbiBoYXMgbm90IGJlZW4gc2V0LiBQbGVhc2UgY2FsbCB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gY29uc3RydWN0b3Igd2l0aCBhIHZhbGlkIENvbmZpZ3VyYXRpb24gb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENhY2hlTG9jYXRpb246IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfY2FjaGVfbG9jYXRpb25cIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBsb2NhdGlvbiBwcm92aWRlZCBpcyBub3QgdmFsaWQuXCJcclxuICAgIH0sXHJcbiAgICBub1N0b3JhZ2VTdXBwb3J0ZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImJyb3dzZXJfc3RvcmFnZV9ub3Rfc3VwcG9ydGVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJsb2NhbFN0b3JhZ2UgYW5kIHNlc3Npb25TdG9yYWdlIGFyZSBub3Qgc3VwcG9ydGVkLlwiXHJcbiAgICB9LFxyXG4gICAgbm9SZWRpcmVjdENhbGxiYWNrc1NldDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fcmVkaXJlY3RfY2FsbGJhY2tzXCIsXHJcbiAgICAgICAgZGVzYzogXCJObyByZWRpcmVjdCBjYWxsYmFja3MgaGF2ZSBiZWVuIHNldC4gUGxlYXNlIGNhbGwgc2V0UmVkaXJlY3RDYWxsYmFja3MoKSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvbiBhcmd1bWVudHMgYmVmb3JlIGNvbnRpbnVpbmcuIFwiICtcclxuICAgICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS9NU0FMLWJhc2ljcy5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDYWxsYmFja09iamVjdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWxsYmFja19vYmplY3RcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBvYmplY3QgcGFzc2VkIGZvciB0aGUgY2FsbGJhY2sgd2FzIGludmFsaWQuIFwiICtcclxuICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvTVNBTC1iYXNpY3MuXCJcclxuICAgIH0sXHJcbiAgICBzY29wZXNSZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwic2NvcGVzX3JlcXVpcmVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgYXJlIHJlcXVpcmVkIHRvIG9idGFpbiBhbiBhY2Nlc3MgdG9rZW4uXCJcclxuICAgIH0sXHJcbiAgICBlbXB0eVNjb3Blczoge1xyXG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBlbXB0eSBhcnJheS5cIlxyXG4gICAgfSxcclxuICAgIG5vbkFycmF5U2NvcGVzOiB7XHJcbiAgICAgICAgY29kZTogXCJub25hcnJheV9pbnB1dF9zY29wZXNfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIG5vbi1hcnJheS5cIlxyXG4gICAgfSxcclxuICAgIGNsaWVudFNjb3BlOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRpZF9pbnB1dF9zY29wZXNfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNsaWVudCBJRCBjYW4gb25seSBiZSBwcm92aWRlZCBhcyBhIHNpbmdsZSBzY29wZS5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRQcm9tcHQ6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfcHJvbXB0X3ZhbHVlXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdXBwb3J0ZWQgcHJvbXB0IHZhbHVlcyBhcmUgJ2xvZ2luJywgJ3NlbGVjdF9hY2NvdW50JywgJ2NvbnNlbnQnIGFuZCAnbm9uZSdcIixcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQXV0aG9yaXR5VHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9hdXRob3JpdHlfdHlwZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIGF1dGhvcml0eSBpcyBub3QgYSB2YWxpZCB0eXBlIG9mIGF1dGhvcml0eSBzdXBwb3J0ZWQgYnkgTVNBTC4gUGxlYXNlIHNlZSBoZXJlIGZvciB2YWxpZCBhdXRob3JpdGllczogPGluc2VydCBVUkwgaGVyZT4uXCJcclxuICAgIH0sXHJcbiAgICBhdXRob3JpdHlVcmlJbnNlY3VyZToge1xyXG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnNlY3VyZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiQXV0aG9yaXR5IFVSSXMgbXVzdCB1c2UgaHR0cHMuXCJcclxuICAgIH0sXHJcbiAgICBhdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xyXG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcclxuICAgICAgICBkZXNjOiBcIkdpdmVuIGF1dGhvcml0eSBVUkkgaXMgaW52YWxpZC5cIlxyXG4gICAgfSxcclxuICAgIHVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5zdXBwb3J0ZWRfYXV0aG9yaXR5X3ZhbGlkYXRpb25cIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBhdXRob3JpdHkgdmFsaWRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIGF1dGhvcml0eSB0eXBlLlwiXHJcbiAgICB9LFxyXG4gICAgYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg6IHtcclxuICAgICAgICBjb2RlOiBcImIyY19hdXRob3JpdHlfdXJpX2ludmFsaWRfcGF0aFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIFVSSSBmb3IgdGhlIEIyQyBhdXRob3JpdHkgaXMgaW52YWxpZC5cIlxyXG4gICAgfSxcclxuICAgIGNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsYWltc19yZXF1ZXN0X3BhcnNpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNvdWxkIG5vdCBwYXJzZSB0aGUgZ2l2ZW4gY2xhaW1zIHJlcXVlc3Qgb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgZW1wdHlSZXF1ZXN0RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVtcHR5X3JlcXVlc3RfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlJlcXVlc3Qgb2JqZWN0IGlzIHJlcXVpcmVkLlwiXHJcbiAgICB9LFxyXG4gICAgdGVsZW1ldHJ5Q29uZmlnRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInRlbGVtZXRyeV9jb25maWdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRlbGVtZXRyeSBjb25maWcgaXMgbm90IGNvbmZpZ3VyZWQgd2l0aCByZXF1aXJlZCB2YWx1ZXNcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIGNvbmZpZ3VyYXRpb24gb2YgdGhlIC5qcyBsaWJyYXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTm9TZXRDb25maWd1cmF0aW9uRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNvbmZpZ3VyYXRpb25Ob3RTZXQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmRlc2N9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZUxvY2F0aW9uQ29uZmlnRXJyb3IoZ2l2ZW5DYWNoZUxvY2F0aW9uOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlTG9jYXRpb24uY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVMb2NhdGlvbi5kZXNjfSBQcm92aWRlZCB2YWx1ZTogJHtnaXZlbkNhY2hlTG9jYXRpb259LiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiAke0NvbnN0YW50cy5jYWNoZUxvY2F0aW9uTG9jYWx9LCAke0NvbnN0YW50cy5jYWNoZUxvY2F0aW9uU2Vzc2lvbn0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU5vU3RvcmFnZVN1cHBvcnRlZEVycm9yKCkgOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1JlZGlyZWN0Q2FsbGJhY2tzU2V0LmNvZGUsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoY2FsbGJhY2tPYmplY3Q6IG9iamVjdCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FsbGJhY2tPYmplY3QuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FsbGJhY2tPYmplY3QuZGVzY30gR2l2ZW4gdmFsdWUgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uOiAke2NhbGxiYWNrT2JqZWN0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihzY29wZXNWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRTY29wZS5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXNWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uuc2NvcGVzUmVxdWlyZWQuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHRWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGNsYWltc1JlcXVlc3RQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuZGVzY30gR2l2ZW4gdmFsdWU6ICR7Y2xhaW1zUmVxdWVzdFBhcnNlRXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RlLCBkZXNjIH0gPSBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5UmVxdWVzdEVycm9yO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKGNvZGUsIGRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWc6IFRlbGVtZXRyeU9wdGlvbnMpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS50ZWxlbWV0cnlDb25maWdFcnJvcjtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEtleXMgPSB7XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICB0ZWxlbWV0cnlFbWl0dGVyOiBcImZ1bmN0aW9uXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtaXNzaW5nS2V5cyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkS2V5cylcclxuICAgICAgICAgICAgLnJlZHVjZSgoa2V5cywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnW2tleV0gPyBrZXlzIDoga2V5cy5jb25jYXQoWyBgJHtrZXl9ICgke3JlcXVpcmVkS2V5c1trZXldfSlgIF0pO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKGNvZGUsIGAke2Rlc2N9IG1pc2luZyB2YWx1ZXM6ICR7bWlzc2luZ0tleXMuam9pbihcIixcIil9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi4vSVVyaVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMsIFNTT1R5cGVzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnLi9TdHJpbmdVdGlscyc7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogZ2VuZXJhdGVzIHRoZSBVUkwgd2l0aCBRdWVyeVN0cmluZyBQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJSZXF1ZXN0UGFyYW1zOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzdHIgPSB0aGlzLmNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2VydmVyUmVxdWVzdFBhcmFtcyk7XHJcbiAgICBsZXQgYXV0aEVuZHBvaW50OiBzdHJpbmcgPSBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmF1dGhvcml0eUluc3RhbmNlLkF1dGhvcml6YXRpb25FbmRwb2ludDtcclxuICAgIC8vIGlmIHRoZSBlbmRwb2ludCBhbHJlYWR5IGhhcyBxdWVyeXBhcmFtcywgbGV0cyBhZGQgdG8gaXQsIG90aGVyd2lzZSBhZGQgdGhlIGZpcnN0IG9uZVxyXG4gICAgaWYgKGF1dGhFbmRwb2ludC5pbmRleE9mKFwiP1wiKSA8IDApIHtcclxuICAgICAgYXV0aEVuZHBvaW50ICs9IFwiP1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXV0aEVuZHBvaW50ICs9IFwiJlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RVcmw6IHN0cmluZyA9IGAke2F1dGhFbmRwb2ludH0ke3N0ci5qb2luKFwiJlwiKX1gO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RVcmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZSB0aGUgYXJyYXkgb2YgYWxsIFF1ZXJ5U3RyaW5nUGFyYW1zIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzZXJ2ZXJSZXF1ZXN0UGFyYW1zOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgbGV0IHNjb3BlcyA9IHNlcnZlclJlcXVlc3RQYXJhbXMuc2NvcGVzO1xyXG5cclxuICAgIGlmIChzY29wZXMuaW5kZXhPZihzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKSA9PT0gLTEpIHtcclxuICAgICAgc2NvcGVzLnB1c2goc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHI6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHN0ci5wdXNoKFwicmVzcG9uc2VfdHlwZT1cIiArIHNlcnZlclJlcXVlc3RQYXJhbXMucmVzcG9uc2VUeXBlKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzLCBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKTtcclxuICAgIHN0ci5wdXNoKFwic2NvcGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoU2NvcGVTZXQucGFyc2VTY29wZShzY29wZXMpKSk7XHJcbiAgICBzdHIucHVzaChcImNsaWVudF9pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKSk7XHJcbiAgICBzdHIucHVzaChcInJlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnJlZGlyZWN0VXJpKSk7XHJcblxyXG4gICAgc3RyLnB1c2goXCJzdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnN0YXRlKSk7XHJcbiAgICBzdHIucHVzaChcIm5vbmNlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMubm9uY2UpKTtcclxuXHJcbiAgICBzdHIucHVzaChcImNsaWVudF9pbmZvPTFcIik7XHJcbiAgICBzdHIucHVzaChgeC1jbGllbnQtU0tVPSR7c2VydmVyUmVxdWVzdFBhcmFtcy54Q2xpZW50U2t1fWApO1xyXG4gICAgc3RyLnB1c2goYHgtY2xpZW50LVZlcj0ke3NlcnZlclJlcXVlc3RQYXJhbXMueENsaWVudFZlcn1gKTtcclxuICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnByb21wdFZhbHVlKSB7XHJcbiAgICAgIHN0ci5wdXNoKFwicHJvbXB0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMucHJvbXB0VmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGFpbXNWYWx1ZSkge1xyXG4gICAgICBzdHIucHVzaChcImNsYWltcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsYWltc1ZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHN0ci5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICBzdHIucHVzaChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHIucHVzaChcImNsaWVudC1yZXF1ZXN0LWlkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMuY29ycmVsYXRpb25JZCkpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFwcGVuZCB0aGUgcmVxdWlyZWQgc2NvcGVzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtYmFzaWMtMV8wLmh0bWwjU2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBjbGllbnRJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGllbnRJZEluZGV4OiBudW1iZXIgPSBzY29wZXMuaW5kZXhPZihjbGllbnRJZCk7XHJcbiAgICBpZiAoY2xpZW50SWRJbmRleCA+PSAwKSB7XHJcbiAgICAgIHNjb3Blcy5zcGxpY2UoY2xpZW50SWRJbmRleCwgMSk7XHJcbiAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcIm9wZW5pZFwiKSA9PT0gLTEpIHtcclxuICAgICAgICBzY29wZXMucHVzaChcIm9wZW5pZFwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2NvcGVzLmluZGV4T2YoXCJwcm9maWxlXCIpID09PSAtMSkge1xyXG4gICAgICAgIHNjb3Blcy5wdXNoKFwicHJvZmlsZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBjdXJyZW50IHdpbmRvdyBVUkwgYXMgcmVkaXJlY3QgdXJpXHJcbiAgICovXHJcbiAgc3RhdGljIGdldERlZmF1bHRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXS5zcGxpdChcIiNcIilbMF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHaXZlbiBhIHVybCBsaWtlIGh0dHBzOi8vYTpiL2NvbW1vbi9kP2U9ZiNnLCBhbmQgYSB0ZW5hbnRJZCwgcmV0dXJucyBodHRwczovL2E6Yi90ZW5hbnRJZC9kXHJcbiAgICogQHBhcmFtIGhyZWYgVGhlIHVybFxyXG4gICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcclxuICAgKi9cclxuICBzdGF0aWMgcmVwbGFjZVRlbmFudFBhdGgodXJsOiBzdHJpbmcsIHRlbmFudElkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgdXJsT2JqZWN0ID0gdGhpcy5HZXRVcmxDb21wb25lbnRzKHVybCk7XHJcbiAgICB2YXIgcGF0aEFycmF5ID0gdXJsT2JqZWN0LlBhdGhTZWdtZW50cztcclxuICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XHJcbiAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3QsIHBhdGhBcnJheSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiB0aGlzLkNhbm9uaWNhbGl6ZVVyaSh1cmxPYmplY3QuUHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxPYmplY3QuSG9zdE5hbWVBbmRQb3J0ICsgXCIvXCIgKyBwYXRoQXJyYXkuam9pbihcIi9cIikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cclxuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cclxuICAgKi9cclxuICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgdGhyb3cgXCJVcmwgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9jdXJ0aXN6LzExMTM5YjJjZmNhZWY0YTI2MWUwXHJcbiAgICB2YXIgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XHJcblxyXG4gICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4KTtcclxuXHJcbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmxlbmd0aCA8IDYpIHtcclxuICAgICAgdGhyb3cgXCJWYWxpZCB1cmwgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXJsQ29tcG9uZW50cyA9IDxJVXJpPntcclxuICAgICAgUHJvdG9jb2w6IG1hdGNoWzFdLFxyXG4gICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxyXG4gICAgICBBYnNvbHV0ZVBhdGg6IG1hdGNoWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLkFic29sdXRlUGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xyXG4gICAgdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHM7XHJcbiAgICByZXR1cm4gdXJsQ29tcG9uZW50cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgdXJsIG9yIHBhdGgsIGFwcGVuZCBhIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBkb2VzbnQgZXhpc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBzdGF0aWMgQ2Fub25pY2FsaXplVXJpKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVybCAmJiAhVXJsVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcclxuICAgICAgdXJsICs9IFwiL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1cmwgZW5kcyB3aXRoIHRoZSBzdWZmaXhcclxuICAgKiBSZXF1aXJlZCBiZWNhdXNlIHdlIGFyZSBjb21waWxpbmcgZm9yIGVzNSBpbnN0ZWFkIG9mIGVzNlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKiBAcGFyYW0gc3RyXHJcbiAgICovXHJcbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIG5vdCBjbGVhciB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGRvXHJcbiAgc3RhdGljIGVuZHNXaXRoKHVybDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFV0aWxzIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbG9naW5faGludCBhbmQgZG9tYWluX2hpbnQgZnJvbSB0aGUgaS9wIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHVybFxyXG4gICAqIEBwYXJhbSBuYW1lXHJcbiAgICovXHJcbiAgc3RhdGljIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodXJsKSkge1xyXG4gICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXCZcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgIC8vIG5hbWU9dmFsdWUmXHJcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgLy8gbmFtZT12YWx1ZVxyXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBSZXR1cm5zIHRoZSBhbmNob3IgcGFydCgjKSBvZiB0aGUgVVJMXHJcbiAgICovXHJcbiAgc3RhdGljIGdldEhhc2hGcm9tVXJsKHVybFN0cmluZ09yRnJhZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBoYXNoSW5kZXgxID0gdXJsU3RyaW5nT3JGcmFnbWVudC5pbmRleE9mKFwiI1wiKTtcclxuICAgIGNvbnN0IGhhc2hJbmRleDIgPSB1cmxTdHJpbmdPckZyYWdtZW50LmluZGV4T2YoXCIjL1wiKTtcclxuICAgIGlmIChoYXNoSW5kZXgyID4gLTEpIHtcclxuICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQuc3Vic3RyaW5nKGhhc2hJbmRleDIgKyAyKTtcclxuICAgIH0gZWxzZSBpZiAoaGFzaEluZGV4MSA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50LnN1YnN0cmluZyhoYXNoSW5kZXgxICsgMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsU3RyaW5nT3JGcmFnbWVudDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgbXVsdGlwbGVNYXRjaGluZ1Rva2Vuczoge1xyXG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfbWF0Y2hpbmdfdG9rZW5zXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy4gXCIgK1xyXG4gICAgICAgICAgICBcIkNhbGwgQWNxdWlyZVRva2VuIGFnYWluIHByb3ZpZGluZyBtb3JlIHJlcXVpcmVtZW50cyBsaWtlIGF1dGhvcml0eS5cIlxyXG4gICAgfSxcclxuICAgIG11bHRpcGxlQ2FjaGVBdXRob3JpdGllczoge1xyXG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfYXV0aG9yaXRpZXNcIixcclxuICAgICAgICBkZXNjOiBcIk11bHRpcGxlIGF1dGhvcml0aWVzIGZvdW5kIGluIHRoZSBjYWNoZS4gUGFzcyBhdXRob3JpdHkgaW4gdGhlIEFQSSBvdmVybG9hZC5cIlxyXG4gICAgfSxcclxuICAgIGVuZHBvaW50UmVzb2x1dGlvbkVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJlbmRwb2ludHNfcmVzb2x1dGlvbl9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiRXJyb3I6IGNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50cy4gUGxlYXNlIGNoZWNrIG5ldHdvcmsgYW5kIHRyeSBhZ2Fpbi5cIlxyXG4gICAgfSxcclxuICAgIHBvcFVwV2luZG93RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInBvcHVwX3dpbmRvd19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3cuIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIHVzaW5nIElFIG9yIGlmIHBvcHVwcyBhcmUgYmxvY2tlZCBpbiB0aGUgYnJvd3Nlci5cIlxyXG4gICAgfSxcclxuICAgIHRva2VuUmVuZXdhbEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ0b2tlbl9yZW5ld2FsX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZW5ld2FsIG9wZXJhdGlvbiBmYWlsZWQgZHVlIHRvIHRpbWVvdXQuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkSWRUb2tlbjoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pZF90b2tlblwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBJRCB0b2tlbiBmb3JtYXQuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkU3RhdGVFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9zdGF0ZV9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBzdGF0ZS5cIlxyXG4gICAgfSxcclxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uY2VfbWlzbWF0Y2hfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIk5vbmNlIGlzIG5vdCBtYXRjaGluZywgTm9uY2UgcmVjZWl2ZWQ6IFwiXHJcbiAgICB9LFxyXG4gICAgbG9naW5Qcm9ncmVzc0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJsb2dpbl9wcm9ncmVzc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiTG9naW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxyXG4gICAgfSxcclxuICAgIGFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImFjcXVpcmV0b2tlbl9wcm9ncmVzc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQWNxdWlyZVRva2VuX0luX1Byb2dyZXNzOiBFcnJvciBkdXJpbmcgbG9naW4gY2FsbCAtIGxvZ2luIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXCJcclxuICAgIH0sXHJcbiAgICB1c2VyQ2FuY2VsbGVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfY2FuY2VsbGVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJVc2VyIGNhbmNlbGxlZCB0aGUgZmxvdy5cIlxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNhbGxiYWNrX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbi5cIlxyXG4gICAgfSxcclxuICAgIHVzZXJMb2dpblJlcXVpcmVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfbG9naW5fZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWQuXCJcclxuICAgIH0sXHJcbiAgICB1c2VyRG9lc05vdEV4aXN0RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfbm9uX2V4aXN0ZW50XCIsXHJcbiAgICAgICAgZGVzYzogXCJVc2VyIG9iamVjdCBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGNhbGwgYSBsb2dpbiBBUEkuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRJbmZvRGVjb2RpbmdFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2xpZW50X2luZm9fZGVjb2RpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjbGllbnQgaW5mbyBjb3VsZCBub3QgYmUgcGFyc2VkL2RlY29kZWQgY29ycmVjdGx5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX25vdF9wb3B1bGF0ZWRfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBzZXJ2aWNlIGRpZCBub3QgcG9wdWxhdGUgY2xpZW50X2luZm8gaW4gdGhlIHJlc3BvbnNlLCBQbGVhc2UgdmVyaWZ5IHdpdGggdGhlIHNlcnZpY2UgdGVhbVwiXHJcbiAgICB9LFxyXG4gICAgbnVsbE9yRW1wdHlJZFRva2VuOiB7XHJcbiAgICAgICAgY29kZTogXCJudWxsX29yX2VtcHR5X2lkX3Rva2VuXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgaWRUb2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBpZFRva2VuTm90UGFyc2VkOiB7XHJcbiAgICAgICAgY29kZTogXCJpZF90b2tlbl9wYXJzaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJJRCB0b2tlbiBjYW5ub3QgYmUgcGFyc2VkLiBQbGVhc2UgcmV2aWV3IHN0YWNrIHRyYWNlIHRvIGRldGVybWluZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgdG9rZW5FbmNvZGluZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ0b2tlbl9lbmNvZGluZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIHRva2VuIHRvIGJlIGRlY29kZWQgaXMgbm90IGVuY29kZWQgY29ycmVjdGx5LlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZEludGVyYWN0aW9uVHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pbnRlcmFjdGlvbl90eXBlXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgaW50ZXJhY3Rpb24gdHlwZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXIgd2FzIGluY29ycmVjdCBvciB1bmtub3duXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgY2xpZW50IGNvZGUgcnVubmluZyBvbiB0aGUgYnJvd3Nlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2M7XHJcbiAgICAgICAgaWYgKGVyckRldGFpbCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShlcnJEZXRhaWwpKSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuY29kZSxcclxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuZGVzY30uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlQXV0aG9yaXRpZXNJbkNhY2hlRXJyb3Ioc2NvcGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuY29kZSxcclxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5kZXNjfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYztcclxuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlbmV3YWxFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZElkVG9rZW5FcnJvcihpZFRva2VuOiBJZFRva2VuKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmRlc2N9IEdpdmVuIHRva2VuOiAke2lkVG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPOiBJcyB0aGlzIG5vdCBhIHNlY3VyaXR5IGZsYXcgdG8gc2VuZCB0aGUgdXNlciB0aGUgc3RhdGUgZXhwZWN0ZWQ/P1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBhY3R1YWxTdGF0ZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZFN0YXRlRXJyb3IuZGVzY30gJHtpbnZhbGlkU3RhdGV9LCBzdGF0ZSBleHBlY3RlZCA6ICR7YWN0dWFsU3RhdGV9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIE5vbmNlIGV4cGVjdGVkPz9cclxuICAgIHN0YXRpYyBjcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoaW52YWxpZE5vbmNlOiBzdHJpbmcsIGFjdHVhbE5vbmNlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmRlc2N9ICR7aW52YWxpZE5vbmNlfSwgbm9uY2UgZXhwZWN0ZWQgOiAke2FjdHVhbE5vbmNlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlckNhbmNlbGxlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVycm9yRGVzYzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmRlc2N9ICR7ZXJyb3JEZXNjfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVVc2VyRG9lc05vdEV4aXN0RXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKGludmFsaWRSYXdUb2tlblN0cmluZzogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uZGVzY30gUmF3IElEIFRva2VuIFZhbHVlOiAke2ludmFsaWRSYXdUb2tlblN0cmluZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlblBhcnNpbmdFcnJvcihjYXVnaHRQYXJzaW5nRXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5Ob3RQYXJzZWQuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0UGFyc2luZ0Vycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVUb2tlbkVuY29kaW5nRXJyb3IoaW5jb3JyZWN0bHlFbmNvZGVkVG9rZW46IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmRlc2N9IEF0dGVtcHRlZCB0byBkZWNvZGU6ICR7aW5jb3JyZWN0bHlFbmNvZGVkVG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJbnRlcmFjdGlvblR5cGUuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmRlc2MpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEVycm9yTWVzc2FnZSA9IHtcclxuICAgIHVuZXhwZWN0ZWRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBlcnJvciBpbiBhdXRoZW50aWNhdGlvbi5cIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cclxuKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcclxuXHJcbiAgICBlcnJvckNvZGU6IHN0cmluZztcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJBdXRoRXJyb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVW5leHBlY3RlZEVycm9yKGVyckRlc2M6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0aEVycm9yKEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmNvZGUsIGAke0F1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmRlc2N9OiAke2VyckRlc2N9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi9JVXJpXCI7XHJcbmltcG9ydCB7IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSB9IGZyb20gXCIuL0lUZW5hbnREaXNjb3ZlcnlSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFhockNsaWVudCB9IGZyb20gXCIuL1hIUkNsaWVudFwiO1xyXG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL3V0aWxzL1VybFV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGVudW0gQXV0aG9yaXR5VHlwZSB7XHJcbiAgQWFkLFxyXG4gIEFkZnMsXHJcbiAgQjJDXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5IHtcclxuICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCA9IHZhbGlkYXRlQXV0aG9yaXR5O1xyXG4gICAgdGhpcy5DYW5vbmljYWxBdXRob3JpdHkgPSBhdXRob3JpdHk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZUFzVXJpKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZTtcclxuXHJcbiAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBnZXQgVGVuYW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcclxuXHJcbiAgcHVibGljIGdldCBBdXRob3JpemF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuQXV0aG9yaXphdGlvbkVuZHBvaW50LnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IEVuZFNlc3Npb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XHJcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLklzc3Vlci5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVJlc29sdmVkKCkge1xyXG4gICAgaWYgKCF0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlKSB7XHJcbiAgICAgIHRocm93IFwiUGxlYXNlIGNhbGwgUmVzb2x2ZUVuZHBvaW50c0FzeW5jIGZpcnN0XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IENhbm9uaWNhbEF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5ID0gVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKHVybCk7XHJcbiAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5vbmljYWxBdXRob3JpdHk6IHN0cmluZztcclxuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XHJcblxyXG4gIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcclxuICAgIGlmICghdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XHJcbiAgICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHModGhpcy5DYW5vbmljYWxBdXRob3JpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAvLyBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1kaXNjb3ZlcnktMV8wLmh0bWwjUHJvdmlkZXJNZXRhZGF0YVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXQgRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fXYyLjAvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb25gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxyXG4gICAqL1xyXG4gIHByaXZhdGUgdmFsaWRhdGVBc1VyaSgpIHtcclxuICAgIGxldCBjb21wb25lbnRzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29tcG9uZW50cyA9IHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQXV0aG9yaXR5VHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW5zZWN1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb21wb25lbnRzLlBhdGhTZWdtZW50cyB8fCBjb21wb25lbnRzLlBhdGhTZWdtZW50cy5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyB0aGUgT0lEQyBlbmRwb2ludCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2VcclxuICAgKi9cclxuICBwcml2YXRlIERpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDogc3RyaW5nKTogUHJvbWlzZTxJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcclxuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZT57XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICBFbmRTZXNzaW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmVuZF9zZXNzaW9uX2VuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgSXNzdWVyOiByZXNwb25zZS5pc3N1ZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlLlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcclxuICAgKiBEaXNjb3ZlciBlbmRwb2ludHMgdmlhIG9wZW5pZC1jb25maWd1cmF0aW9uXHJcbiAgICogSWYgc3VjY2Vzc2Z1bCwgY2FjaGVzIHRoZSBlbmRwb2ludCBmb3IgbGF0ZXIgdXNlIGluIE9JRENcclxuICAgKi9cclxuICBwdWJsaWMgcmVzb2x2ZUVuZHBvaW50c0FzeW5jKCk6IFByb21pc2U8QXV0aG9yaXR5PiB7XHJcbiAgICBsZXQgb3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50ID0gXCJcIjtcclxuICAgIHJldHVybiB0aGlzLkdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCkudGhlbihvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9PiB7XHJcbiAgICAgIG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCA9IG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFJlc3BvbnNlO1xyXG4gICAgICByZXR1cm4gdGhpcy5EaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpO1xyXG4gICAgfSkudGhlbigodGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlID0gdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBUZW5hbnREaXNjb3ZlcnlFbmRwb2ludFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz47XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVfUFJFRklYID0gXCJtc2FsLlwiO1xyXG5leHBvcnQgY29uc3QgRVZFTlRfTkFNRV9LRVkgPSBcImV2ZW50X25hbWVcIjtcclxuZXhwb3J0IGNvbnN0IFNUQVJUX1RJTUVfS0VZID0gXCJzdGFydF90aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBFTEFQU0VEX1RJTUVfS0VZICA9IFwiZWxhcHNlZF90aW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgPSAge1xyXG4gICAgTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleTogXCJNaWNyb3NvZnQuTVNBTC5jb3JyZWxhdGlvbl9pZFwiLFxyXG4gICAgQXBpVGVsZW1JZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX3RlbGVtX2lkXCIsXHJcbiAgICBBcGlJZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX2lkXCIsXHJcbiAgICBCcm9rZXJBcHBDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9icm9rZXJfYXBwXCIsXHJcbiAgICBDYWNoZUV2ZW50Q291bnRDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9jYWNoZV9ldmVudF9jb3VudFwiLFxyXG4gICAgSHR0cEV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleTogXCJNaWNyb3NvZnRfTVNBTF9odHRwX2V2ZW50X2NvdW50XCIsXHJcbiAgICBJZHBDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pZHBcIixcclxuICAgIElzU2lsZW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiXCIsXHJcbiAgICBJc1N1Y2Nlc3NmdWxDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pc19zdWNjZXNzZnVsXCIsXHJcbiAgICBSZXNwb25zZVRpbWVDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9yZXNwb25zZV90aW1lXCIsXHJcbiAgICBUZW5hbnRJZENvbnN0U3RyS2V5OiBcIk1pY3Jvc29mdF9NU0FMX3RlbmFudF9pZFwiLFxyXG4gICAgVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiTWljcm9zb2Z0X01TQUxfdWlfZXZlbnRfY291bnRcIlxyXG59O1xyXG5cclxuLy8gVGhpcyBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIHJlYWwgdGVuYW50IGluIHRlbGVtZXRyeSBpbmZvXHJcbmV4cG9ydCBjb25zdCBURU5BTlRfUExBQ0VIT0xERVIgPSBcIjx0ZW5hbnQ+XCI7XHJcblxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBsaWJyYXJ5VmVyc2lvbiB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyQ2FsbGJhY2sge1xyXG4gIChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgRXJyb3IsXHJcbiAgV2FybmluZyxcclxuICBJbmZvLFxyXG4gIFZlcmJvc2VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciB7Ly8gU2luZ2xldG9uIENsYXNzXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzaW5nbGV0b24hISBDaGFuZ2Ugb3IgRGVsZXRlLlxyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMb2dnZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSW5mbztcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcGlpTG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcclxuXHJcbiAgY29uc3RydWN0b3IobG9jYWxDYWxsYmFjazogSUxvZ2dlckNhbGxiYWNrLFxyXG4gICAgICBvcHRpb25zOlxyXG4gICAgICB7XHJcbiAgICAgICAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nLFxyXG4gICAgICAgICAgbGV2ZWw/OiBMb2dMZXZlbCxcclxuICAgICAgICAgIHBpaUxvZ2dpbmdFbmFibGVkPzogYm9vbGVhbixcclxuICAgICAgfSA9IHt9KSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGNvcnJlbGF0aW9uSWQgPSBcIlwiLFxyXG4gICAgICAgICAgbGV2ZWwgPSBMb2dMZXZlbC5JbmZvLFxyXG4gICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxyXG4gICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvY2FsQ2FsbGJhY2s7XHJcbiAgICAgIHRoaXMuY29ycmVsYXRpb25JZCA9IGNvcnJlbGF0aW9uSWQ7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IHBpaUxvZ2dpbmdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9nTWVzc2FnZShsb2dMZXZlbDogTG9nTGV2ZWwsIGxvZ01lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgobG9nTGV2ZWwgPiB0aGlzLmxldmVsKSB8fCAoIXRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgJiYgY29udGFpbnNQaWkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcclxuICAgIGxldCBsb2c6IHN0cmluZztcclxuICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNvcnJlbGF0aW9uSWQpKSB7XHJcbiAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgdGhpcy5jb3JyZWxhdGlvbklkICsgXCItXCIgKyBsaWJyYXJ5VmVyc2lvbigpICsgXCItXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIiBcIiArIGxvZ01lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbG9nID0gdGltZXN0YW1wICsgXCI6XCIgKyBsaWJyYXJ5VmVyc2lvbigpICsgXCItXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIiBcIiArIGxvZ01lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhsb2dMZXZlbCwgbG9nLCBjb250YWluc1BpaSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgZXhlY3V0ZUNhbGxiYWNrKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMubG9jYWxDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sobGV2ZWwsIG1lc3NhZ2UsIGNvbnRhaW5zUGlpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIGVycm9yUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICB3YXJuaW5nUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIGluZm9QaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgdmVyYm9zZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5WZXJib3NlLCBtZXNzYWdlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgdmVyYm9zZVBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5WZXJib3NlLCBtZXNzYWdlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGlzUGlpTG9nZ2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5waWlMb2dnaW5nRW5hYmxlZDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlcnZlckVycm9yTWVzc2FnZSA9IHtcclxuICAgIHNlcnZlclVuYXZhaWxhYmxlOiB7XHJcbiAgICAgICAgY29kZTogXCJzZXJ2ZXJfdW5hdmFpbGFibGVcIixcclxuICAgICAgICBkZXNjOiBcIlNlcnZlciBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS5cIlxyXG4gICAgfSxcclxuICAgIHVua25vd25TZXJ2ZXJFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5rbm93bl9zZXJ2ZXJfZXJyb3JcIlxyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZlckVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVNlcnZlclVuYXZhaWxhYmxlRXJyb3IoKTogU2VydmVyRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmNvZGUsXHJcbiAgICAgICAgICAgIFNlcnZlckVycm9yTWVzc2FnZS5zZXJ2ZXJVbmF2YWlsYWJsZS5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVW5rbm93blNlcnZlckVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogU2VydmVyRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnVua25vd25TZXJ2ZXJFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBlcnJvckRlc2MpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuS2V5IH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5LZXlcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcclxuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzLCBTU09UeXBlcywgUHJvbXB0U3RhdGUsIEJsYWNrbGlzdGVkRVFQYXJhbXMsIEludGVyYWN0aW9uVHlwZSwgbGlicmFyeVZlcnNpb24gfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4vU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XHJcbmltcG9ydCB7IFRva2VuVXRpbHMgfSBmcm9tIFwiLi91dGlscy9Ub2tlblV0aWxzXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL3V0aWxzL1VybFV0aWxzXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlVXRpbHMgfSBmcm9tIFwiLi91dGlscy9SZXNwb25zZVV0aWxzXCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eUZhY3RvcnkgfSBmcm9tIFwiLi9BdXRob3JpdHlGYWN0b3J5XCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIGJ1aWxkQ29uZmlndXJhdGlvbiwgVGVsZW1ldHJ5T3B0aW9ucyB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCB2YWxpZGF0ZUNsYWltc1JlcXVlc3QgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9TZXJ2ZXJFcnJvclwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UsIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcclxuaW1wb3J0IFRlbGVtZXRyeU1hbmFnZXIgZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVGVsZW1ldHJ5UGxhdGZvcm0sIFRlbGVtZXRyeUNvbmZpZyB9IGZyb20gJy4vdGVsZW1ldHJ5L1RlbGVtZXRyeVR5cGVzJztcclxuXHJcblxyXG4gLy8gZGVmYXVsdCBhdXRob3JpdHlcclxuY29uc3QgREVGQVVMVF9BVVRIT1JJVFkgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdG8gaGFuZGxlIGlGcmFtZSBnZW5lcmF0aW9uLCBQb3B1cCBXaW5kb3cgY3JlYXRpb24gYW5kIHJlZGlyZWN0IGhhbmRsaW5nXHJcbiAqL1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBtc2FsOiBPYmplY3Q7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnQ6IEN1c3RvbUV2ZW50O1xyXG4gICAgICAgIEV2ZW50OiBFdmVudDtcclxuICAgICAgICBhY3RpdmVSZW5ld2Fsczoge307XHJcbiAgICAgICAgcmVuZXdTdGF0ZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICAgICAgY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzIDoge307XHJcbiAgICAgICAgcHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXM6IHt9O1xyXG4gICAgICAgIG9wZW5lZFdpbmRvd3M6IEFycmF5PFdpbmRvdz47XHJcbiAgICAgICAgcmVxdWVzdFR5cGU6IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogQGlnbm9yZVxyXG4gKiByZXNwb25zZV90eXBlIGZyb20gT3BlbklEQ29ubmVjdFxyXG4gKiBSZWZlcmVuY2VzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb2F1dGgtdjItbXVsdGlwbGUtcmVzcG9uc2UtdHlwZXMtMV8wLmh0bWwgJiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTQuMi4xXHJcbiAqIFNpbmNlIHdlIHN1cHBvcnQgb25seSBpbXBsaWNpdCBmbG93IGluIHRoaXMgbGlicmFyeSwgd2UgcmVzdHJpY3QgdGhlIHJlc3BvbnNlX3R5cGUgc3VwcG9ydCB0byBvbmx5ICd0b2tlbicgYW5kICdpZF90b2tlbidcclxuICpcclxuICovXHJcbmNvbnN0IFJlc3BvbnNlVHlwZXMgPSB7XHJcbiAgaWRfdG9rZW46IFwiaWRfdG9rZW5cIixcclxuICB0b2tlbjogXCJ0b2tlblwiLFxyXG4gIGlkX3Rva2VuX3Rva2VuOiBcImlkX3Rva2VuIHRva2VuXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVSZXN1bHQge1xyXG4gIGVycm9yRGVzYzogc3RyaW5nO1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbiAgZXJyb3I6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogQGlnbm9yZVxyXG4gKiBEYXRhIHR5cGUgdG8gaG9sZCBpbmZvcm1hdGlvbiBhYm91dCBzdGF0ZSByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXJcclxuICovXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNlU3RhdGVJbmZvID0ge1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcbiAgc3RhdGVNYXRjaDogYm9vbGVhbjtcclxuICByZXF1ZXN0VHlwZTogc3RyaW5nO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBhbGlhcyBmb3IgYW4gYXV0aFJlc3BvbnNlQ2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAqIHtAbGluayAoYXV0aFJlc3BvbnNlQ2FsbGJhY2s6dHlwZSl9XHJcbiAqIEBwYXJhbSBhdXRoRXJyIGVycm9yIGNyZWF0ZWQgZm9yIGZhaWx1cmUgY2FzZXNcclxuICogQHBhcmFtIHJlc3BvbnNlIHJlc3BvbnNlIGNvbnRhaW5pbmcgdG9rZW4gc3RyaW5ncyBpbiBzdWNjZXNzIGNhc2VzLCBvciBqdXN0IHN0YXRlIHZhbHVlIGluIGVycm9yIGNhc2VzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBhdXRoUmVzcG9uc2VDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlPzogQXV0aFJlc3BvbnNlKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBhbGlhcyBmb3IgYSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAqIHtAbGluayAodG9rZW5SZWNlaXZlZENhbGxiYWNrOnR5cGUpfVxyXG4gKiBAcmV0dXJucyByZXNwb25zZSBvZiB0eXBlIHtAbGluayAoQXV0aFJlc3BvbnNlOnR5cGUpfVxyXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGdldCB0aGUgY2FsbCBiYWNrIG9uY2UgdGhpcyBBUEkgaXMgY29tcGxldGVkIChlaXRoZXIgc3VjY2Vzc2Z1bGx5IG9yIHdpdGggYSBmYWlsdXJlKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IChyZXNwb25zZTogQXV0aFJlc3BvbnNlKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBhbGlhcyBmb3IgYSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAqIHtAbGluayAoZXJyb3JSZWNlaXZlZENhbGxiYWNrOnR5cGUpfVxyXG4gKiBAcmV0dXJucyByZXNwb25zZSBvZiB0eXBlIHtAbGluayAoQXV0aEVycm9yOmNsYXNzKX1cclxuICogQHJldHVybnMge3N0cmluZ30gYWNjb3VudCBzdGF0ZVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gKGF1dGhFcnI6IEF1dGhFcnJvciwgYWNjb3VudFN0YXRlOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqIEEgd3JhcHBlciB0byBoYW5kbGUgdGhlIHRva2VuIHJlc3BvbnNlL2Vycm9yIHdpdGhpbiB0aGUgaUZyYW1lIGFsd2F5c1xyXG4gKlxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqIEBwYXJhbSBwcm9wZXJ0eUtleVxyXG4gKiBAcGFyYW0gZGVzY3JpcHRvclxyXG4gKi9cclxuY29uc3QgcmVzb2x2ZVRva2VuT25seUlmT3V0T2ZJZnJhbWUgPSAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gIGNvbnN0IHRva2VuQWNxdWlzaXRpb25NZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNJbklmcmFtZSgpXHJcbiAgICAgICAgICA/IG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogdG9rZW5BY3F1aXNpdGlvbk1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICB9O1xyXG4gIHJldHVybiBkZXNjcmlwdG9yO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNsYXNzXHJcbiAqXHJcbiAqIE9iamVjdCBJbnN0YW5jZSB0aGF0IHRoZSBkZXZlbG9wZXIgY2FuIHVzZSB0byBtYWtlIGxvZ2luWFggT1IgYWNxdWlyZVRva2VuWFggZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXNlckFnZW50QXBwbGljYXRpb24ge1xyXG5cclxuICAvLyBpbnB1dCBDb25maWd1cmF0aW9uIGJ5IHRoZSBkZXZlbG9wZXIvdXNlclxyXG4gIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uO1xyXG5cclxuICAvLyBjYWxsYmFja3MgZm9yIHRva2VuL2Vycm9yXHJcbiAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VDYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xyXG4gIHByaXZhdGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xyXG4gIHByaXZhdGUgZXJyb3JSZWNlaXZlZENhbGxiYWNrOiBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xyXG5cclxuICAvLyBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgYXMgdGhlc2UgcGFyYW1zIGFyZSB2ZXJ5IGZyZXF1ZW50bHkgdXNlZFxyXG4gIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XHJcbiAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgaW5Db29raWU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSB0ZWxlbWV0cnlNYW5hZ2VyOiBUZWxlbWV0cnlNYW5hZ2VyO1xyXG5cclxuICAvLyBDYWNoZSBhbmQgQWNjb3VudCBpbmZvIHJlZmVycmVkIGFjcm9zcyB0b2tlbiBncmFudCBmbG93XHJcbiAgcHJvdGVjdGVkIGNhY2hlU3RvcmFnZTogU3RvcmFnZTtcclxuICBwcml2YXRlIGFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gIC8vIHN0YXRlIHZhcmlhYmxlc1xyXG4gIHByaXZhdGUgbG9naW5JblByb2dyZXNzOiBib29sZWFuO1xyXG4gIHByaXZhdGUgYWNxdWlyZVRva2VuSW5Qcm9ncmVzczogYm9vbGVhbjtcclxuICBwcml2YXRlIHNpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGU6IHN0cmluZztcclxuICBwcml2YXRlIHNpbGVudExvZ2luOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcmVkaXJlY3RDYWxsYmFja3NTZXQ6IGJvb2xlYW47XHJcblxyXG4gIC8vIEF1dGhvcml0eSBGdW5jdGlvbmFsaXR5XHJcbiAgcHJvdGVjdGVkIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNldHRlciBmb3IgdGhlIGF1dGhvcml0eSBVUkxcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5XHJcbiAgICovXHJcbiAgLy8gSWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYXV0aG9yaXR5LCBjcmVhdGUgYW4gaW5zdGFuY2VcclxuICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcclxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHZhbCwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gbWFuYWdlIHRoZSBhdXRob3JpdHkgVVJMLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gYXV0aG9yaXR5XHJcbiAgICovXHJcbiAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBhdXRob3JpdHkgaW5zdGFuY2UgZnJvbSB0aGUgTVNBTCBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0BsaW5rIEF1dGhvcml0eX0gYXV0aG9yaXR5IGluc3RhbmNlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF1dGhvcml0eUluc3RhbmNlKCk6IEF1dGhvcml0eSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gb2JqZWN0XHJcbiAgICpcclxuICAgKiBJbXBvcnRhbnQgYXR0cmlidXRlcyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGF1dGggYXJlOlxyXG4gICAqIC0gY2xpZW50SUQ6IHRoZSBhcHBsaWNhdGlvbiBJRCBvZiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAqIFlvdSBjYW4gb2J0YWluIG9uZSBieSByZWdpc3RlcmluZyB5b3VyIGFwcGxpY2F0aW9uIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXdcclxuICAgKiAtIGF1dGhvcml0eTogdGhlIGF1dGhvcml0eSBVUkwgZm9yIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICpcclxuICAgKiBJbiBBenVyZSBBRCwgYXV0aG9yaXR5IGlzIGEgVVJMIGluZGljYXRpbmcgdGhlIEF6dXJlIGFjdGl2ZSBkaXJlY3RvcnkgdGhhdCBNU0FMIHVzZXMgdG8gb2J0YWluIHRva2Vucy5cclxuICAgKiBJdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJmx0O0VudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlJmd0Oy5cclxuICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIG9uZSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggdGhlIFRlbmFudCBJZCBvciBUZW5hbnQgbmFtZSAoZm9yIGV4YW1wbGUsIGNvbnRvc28ubWljcm9zb2Z0LmNvbSkuXHJcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5LCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIG9yZ2FuaXphdGlvbnMuXHJcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5IGFuZCBwZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMsIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29tbW9uLlxyXG4gICAqIFRvIHJlc3RyaWN0IHN1cHBvcnQgdG8gUGVyc29uYWwgTWljcm9zb2Z0IGFjY291bnRzIG9ubHksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29uc3VtZXJzLlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBJbiBBenVyZSBCMkMsIGF1dGhvcml0eSBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7LyZsdDtwb2xpY3lOYW1lJmd0Oy9cclxuXHJcbiAgICogQHBhcmFtIHtAbGluayAoQ29uZmlndXJhdGlvbjp0eXBlKX0gY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBNU0FMIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGluc3RhbmNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG5cclxuICAgIC8vIFNldCB0aGUgQ29uZmlndXJhdGlvblxyXG4gICAgdGhpcy5jb25maWcgPSBidWlsZENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBjYWxsYmFjayBib29sZWFuXHJcbiAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5sb2dnZXIgPSB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9nZ2VyO1xyXG4gICAgdGhpcy5jbGllbnRJZCA9IHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQ7XHJcbiAgICB0aGlzLmluQ29va2llID0gdGhpcy5jb25maWcuY2FjaGUuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTtcclxuXHJcbiAgICB0aGlzLnRlbGVtZXRyeU1hbmFnZXIgPSB0aGlzLmdldFRlbGVtZXRyeU1hbmFnZXJGcm9tQ29uZmlnKHRoaXMuY29uZmlnLnN5c3RlbS50ZWxlbWV0cnksIHRoaXMuY2xpZW50SWQpO1xyXG5cclxuICAgIC8vIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQsIHNldCB0aGUgZGVmYXVsdDogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcclxuICAgIHRoaXMuYXV0aG9yaXR5ID0gdGhpcy5jb25maWcuYXV0aC5hdXRob3JpdHkgfHwgREVGQVVMVF9BVVRIT1JJVFk7XHJcblxyXG4gICAgLy8gdHJhY2sgbG9naW4gYW5kIGFjcXVpcmVUb2tlbiBpbiBwcm9ncmVzc1xyXG4gICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGNhY2hlIGtleXMgbXNhbCAtIHR5cGVzY3JpcHQgdGhyb3dzIGFuIGVycm9yIGlmIGFueSB2YWx1ZSBvdGhlciB0aGFuIFwibG9jYWxTdG9yYWdlXCIgb3IgXCJzZXNzaW9uU3RvcmFnZVwiIGlzIHBhc3NlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhY2hlTG9jYXRpb25Db25maWdFcnJvcih0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHdpbmRvdyBoYW5kbGluZyBjb2RlXHJcbiAgICB3aW5kb3cub3BlbmVkV2luZG93cyA9IFtdO1xyXG4gICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzID0ge307XHJcbiAgICB3aW5kb3cucmVuZXdTdGF0ZXMgPSBbXTtcclxuICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XHJcbiAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XHJcbiAgICB3aW5kb3cubXNhbCA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgY29uc3QgdXJsQ29udGFpbnNIYXNoID0gdGhpcy51cmxDb250YWluc0hhc2godXJsSGFzaCk7XHJcblxyXG4gICAgLy8gT24gdGhlIHNlcnZlciAzMDIgLSBSZWRpcmVjdCwgaGFuZGxlIHRoaXNcclxuICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICBpZiAodXJsQ29udGFpbnNIYXNoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKHVybEhhc2gpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gUmVkaXJlY3QgQ2FsbGJhY2tzXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyBmb3IgdGhlIHJlZGlyZWN0IGZsb3cgdG8gc2VuZCBiYWNrIHRoZSBzdWNjZXNzIG9yIGVycm9yIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge0BsaW5rICh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9IHN1Y2Nlc3NDYWxsYmFjayAtIENhbGxiYWNrIHdoaWNoIGNvbnRhaW5zIHRoZSBBdXRoUmVzcG9uc2Ugb2JqZWN0LCBjb250YWluaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgKGVycm9yUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX0gZXJyb3JDYWxsYmFjayAtIENhbGxiYWNrIHdoaWNoIGNvbnRhaW5zIGEgQXV0aEVycm9yIG9iamVjdCwgY29udGFpbmluZyBlcnJvciBkYXRhIGZyb20gZWl0aGVyIHRoZSBzZXJ2ZXJcclxuICAgKiBvciB0aGUgbGlicmFyeSwgZGVwZW5kaW5nIG9uIHRoZSBvcmlnaW4gb2YgdGhlIGVycm9yLlxyXG4gICAqL1xyXG4gIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2sodG9rZW5SZWNlaXZlZENhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2ssIGVycm9yUmVjZWl2ZWRDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrKTogdm9pZDtcclxuICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKGF1dGhDYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2spOiB2b2lkO1xyXG4gIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2soYXV0aE9yVG9rZW5DYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgfCB0b2tlblJlY2VpdmVkQ2FsbGJhY2ssIGVycm9yUmVjZWl2ZWRDYWxsYmFjaz86IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgaWYgKCFhdXRoT3JUb2tlbkNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDYWxsYmFja09iamVjdEVycm9yKGF1dGhPclRva2VuQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBjYWxsYmFja3NcclxuICAgIGlmIChlcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy50b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSBhdXRoT3JUb2tlbkNhbGxiYWNrIGFzIHRva2VuUmVjZWl2ZWRDYWxsYmFjaztcclxuICAgICAgdGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSBlcnJvclJlY2VpdmVkQ2FsbGJhY2s7XHJcbiAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJUaGlzIG92ZXJsb2FkIGZvciBjYWxsYmFjayBpcyBkZXByZWNhdGVkIC0gcGxlYXNlIGNoYW5nZSB0aGUgZm9ybWF0IG9mIHRoZSBjYWxsYmFja3MgdG8gYSBzaW5nbGUgY2FsbGJhY2sgYXMgc2hvd246IChlcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSkuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayA9IGF1dGhPclRva2VuQ2FsbGJhY2sgYXMgYXV0aFJlc3BvbnNlQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IHRydWU7XHJcblxyXG4gICAgLy8gT24gdGhlIHNlcnZlciAzMDIgLSBSZWRpcmVjdCwgaGFuZGxlIHRoaXNcclxuICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICBjb25zdCBjYWNoZWRIYXNoID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMudXJsSGFzaCk7XHJcbiAgICAgIGlmIChjYWNoZWRIYXNoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2soY2FjaGVkSGFzaCwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXV0aFJlc3BvbnNlSGFuZGxlcihpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgcmVzb2x2ZT86IGFueSkgOiB2b2lkIHtcclxuICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xyXG4gICAgICBpZiAodGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlamVjdD86IGFueSkgOiB2b2lkIHtcclxuICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xyXG4gICAgICBpZiAodGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhhdXRoRXJyLCByZXNwb25zZS5hY2NvdW50U3RhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2soYXV0aEVyciwgcmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XHJcbiAgICAgIHJlamVjdChhdXRoRXJyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG4gIC8qKlxyXG4gICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cclxuICAgKi9cclxuICBsb2dpblJlZGlyZWN0KHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcclxuICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHRydWUsIHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHdpbmRvdyB0byB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludC5cclxuICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XHJcbiAgICpcclxuICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIGFjcXVpcmVUb2tlblJlZGlyZWN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcclxuICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIGZhbHNlLCByZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxyXG4gICAqL1xyXG4gIGxvZ2luUG9wdXAocmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwLCB0cnVlLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugd2hlbiB5b3Ugd2FudCB0byBvYnRhaW4gYW4gYWNjZXNzX3Rva2VuIGZvciB5b3VyIEFQSSB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcclxuICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cclxuICAgKlxyXG4gICAqIFRvIHJlbmV3IGlkVG9rZW4sIHBsZWFzZSBwYXNzIGNsaWVudElkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBBdXRoZW50aWNhdGlvbiBQYXJhbWV0ZXJzXHJcbiAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgKi9cclxuICBhY3F1aXJlVG9rZW5Qb3B1cChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBQcm9taXNlPEF1dGhSZXNwb25zZT4ge1xyXG4gICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXAsIGZhbHNlLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gQWNxdWlyZSBUb2tlblxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugd2hlbiBpbml0aWF0aW5nIHRoZSBsb2dpbiBwcm9jZXNzIG9yIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEksXHJcbiAgICogZWl0aGVyIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQgb3IgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyLlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cclxuICAgKlxyXG4gICAqIFRvIHJlbmV3IGlkVG9rZW4sIHBsZWFzZSBwYXNzIGNsaWVudElkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBBdXRoZW50aWNhdGlvbiBQYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGw6IGJvb2xlYW4sIHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHJlc29sdmU/OiBhbnksIHJlamVjdD86IGFueSk6IHZvaWQge1xyXG5cclxuICAgIC8vIElmIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIGRvIG5vdCBwcm9jZWVkXHJcbiAgICBpZiAodGhpcy5sb2dpbkluUHJvZ3Jlc3MgfHwgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XHJcbiAgICAgIGNvbnN0IHRocm93bkVycm9yID0gdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvci5jcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKTtcclxuICAgICAgY29uc3Qgc3RhdGVPbmx5UmVzcG9uc2UgPSBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KHRoaXMuZ2V0QWNjb3VudFN0YXRlKHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZSkpO1xyXG4gICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLFxyXG4gICAgICAgIHRocm93bkVycm9yLFxyXG4gICAgICAgIHN0YXRlT25seVJlc3BvbnNlLFxyXG4gICAgICAgIHJlamVjdCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQgaW4gbG9naW5DYWxsLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxyXG4gICAgY29uc3Qgc2NvcGVzOiBBcnJheTxzdHJpbmc+ID0gaXNMb2dpbkNhbGwgPyB0aGlzLmFwcGVuZFNjb3BlcyhyZXF1ZXN0KSA6IHJlcXVlc3Quc2NvcGVzO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCAhaXNMb2dpbkNhbGwpO1xyXG5cclxuICAgIC8vIEdldCB0aGUgYWNjb3VudCBvYmplY3QgaWYgYSBzZXNzaW9uIGV4aXN0c1xyXG4gICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiAhaXNMb2dpbkNhbGwpID8gcmVxdWVzdC5hY2NvdW50IDogdGhpcy5nZXRBY2NvdW50KCk7XHJcblxyXG4gICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cclxuICAgIGlmICghYWNjb3VudCAmJiAhU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xyXG4gICAgICBpZiAoaXNMb2dpbkNhbGwpIHtcclxuICAgICAgICAvLyBleHRyYWN0IEFEQUwgaWRfdG9rZW4gaWYgZXhpc3RzXHJcbiAgICAgICAgbGV0IGFkYWxJZFRva2VuID0gdGhpcy5leHRyYWN0QURBTElkVG9rZW4oKTtcclxuXHJcbiAgICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xyXG4gICAgICAgIGlmIChhZGFsSWRUb2tlbiAmJiAhc2NvcGVzKSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xyXG4gICAgICAgICAgbGV0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5TaWxlbnQodG9rZW5SZXF1ZXN0KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVW5pZmllZCBjYWNoZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCByZXNwb25zZSwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgZHVyaW5nIHVuaWZpZWQgY2FjaGUgQVRTOiBcIiArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHByb2NlZWQgdG8gbG9naW4gc2luY2UgQVRTIGZhaWxlZFxyXG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihudWxsLCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm8gQURBTCB0b2tlbiBmb3VuZCwgcHJvY2VlZCB0byBsb2dpblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIobnVsbCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBBY3F1aXJlVG9rZW4gY2FsbCwgYnV0IG5vIGFjY291bnQgb3IgY29udGV4dCBnaXZlbiwgc28gdGhyb3cgZXJyb3JcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVXNlciBzZXNzaW9uIGV4aXN0c1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSGVscGVyKGFjY291bnQsIGludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGwsIHJlcXVlc3QsIHNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGFjcXVpcmVUb2tlblxyXG4gICAqXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhY3F1aXJlVG9rZW5IZWxwZXIoYWNjb3VudDogQWNjb3VudCwgaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsOiBib29sZWFuLCByZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBzY29wZXM/OiBBcnJheTxzdHJpbmc+LCByZXNvbHZlPzogYW55LCByZWplY3Q/OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcclxuICAgIGlmIChpc0xvZ2luQ2FsbCkge1xyXG4gICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjb3BlID0gc2NvcGVzID8gc2NvcGVzLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCkgOiB0aGlzLmNsaWVudElkLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnM7XHJcbiAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSAoIWlzTG9naW5DYWxsICYmIHJlcXVlc3QgJiYgcmVxdWVzdC5hdXRob3JpdHkpID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xyXG5cclxuICAgIGxldCBwb3BVcFdpbmRvdzogV2luZG93O1xyXG4gICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XHJcbiAgICAgIC8vIEdlbmVyYXRlIGEgcG9wdXAgd2luZG93XHJcbiAgICAgIHBvcFVwV2luZG93ID0gdGhpcy5vcGVuV2luZG93KFwiYWJvdXQ6YmxhbmtcIiwgXCJfYmxhbmtcIiwgMSwgdGhpcywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgaWYgKCFwb3BVcFdpbmRvdykge1xyXG4gICAgICAgIC8vIFdlIHBhc3MgcmVqZWN0IGluIG9wZW5XaW5kb3csIHdlIHJlamVjdCB0aGVyZSBkdXJpbmcgYW4gZXJyb3JcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIE9uIEZ1bGZpbGxtZW50XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gaXNMb2dpbkNhbGwgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgc2NvcGVzLCBmYWxzZSk7XHJcbiAgICAgIGxldCBsb2dpblN0YXJ0UGFnZTogc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgc2V0cyB0aGUgbG9naW4gc3RhcnQgcGFnZSAtIGFuZ3VsYXIgb25seT8/XHJcbiAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0KTtcclxuICAgICAgICBpZiAoIWxvZ2luU3RhcnRQYWdlIHx8IGxvZ2luU3RhcnRQYWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBsb2dpblN0YXJ0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0LCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcclxuICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHksXHJcbiAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICBzY29wZXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCwgbG9naW5TdGFydFBhZ2UpO1xyXG5cclxuICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0KTtcclxuXHJcbiAgICAgIC8vIENvbnN0cnVjdCB1cmxOYXZpZ2F0ZVxyXG4gICAgICBsZXQgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XHJcblxyXG4gICAgICAvLyBzZXQgc3RhdGUgaW4gY2FjaGVcclxuICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XHJcbiAgICAgICAgaWYgKCFpc0xvZ2luQ2FsbCkge1xyXG4gICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XHJcbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBpc0xvZ2luQ2FsbCA/IENvbnN0YW50cy5sb2dpbiA6IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG5cclxuICAgICAgICAvLyBSZWdpc3RlciBjYWxsYmFjayB0byBjYXB0dXJlIHJlc3VsdHMgZnJvbSBzZXJ2ZXJcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEludGVyYWN0aW9uVHlwZUVycm9yKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHByb21wdCB1c2VyIGZvciBpbnRlcmFjdGlvblxyXG4gICAgICB0aGlzLm5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlLCBwb3BVcFdpbmRvdyk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XHJcbiAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihpbnRlcmFjdGlvblR5cGUsIENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcpLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KHJlcXVlc3Quc3RhdGUpLCByZWplY3QpO1xyXG4gICAgICBpZiAocG9wVXBXaW5kb3cpIHtcclxuICAgICAgICBwb3BVcFdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIG9idGFpbiBhIHRva2VuIGJlZm9yZSBldmVyeSBjYWxsIHRvIHRoZSBBUEkgLyByZXNvdXJjZSBwcm92aWRlclxyXG4gICAqXHJcbiAgICogTVNBTCByZXR1cm4ncyBhIGNhY2hlZCB0b2tlbiB3aGVuIGF2YWlsYWJsZVxyXG4gICAqIE9yIGl0IHNlbmQncyBhIHJlcXVlc3QgdG8gdGhlIFNUUyB0byBvYnRhaW4gYSBuZXcgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XHJcbiAgICpcclxuICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XHJcbiAgICpcclxuICAgKi9cclxuICBAcmVzb2x2ZVRva2VuT25seUlmT3V0T2ZJZnJhbWVcclxuICBhY3F1aXJlVG9rZW5TaWxlbnQocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgIGlmICghcmVxdWVzdCkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlSZXF1ZXN0RXJyb3IoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShyZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XHJcblxyXG4gICAgICBjb25zdCBzY29wZSA9IHJlcXVlc3Quc2NvcGVzLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHBhc3NlcyBhbiBhY2NvdW50LCBnaXZlIHRoYXQgYWNjb3VudCB0aGUgcHJpb3JpdHlcclxuICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAgIC8vIGV4dHJhY3QgaWYgdGhlcmUgaXMgYW4gYWRhbElkVG9rZW4gc3Rhc2hlZCBpbiB0aGUgY2FjaGVcclxuICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XHJcblxyXG4gICAgICAvL2lmIHRoZXJlIGlzIG5vIGFjY291bnQgbG9nZ2VkIGluIGFuZCBubyBsb2dpbl9oaW50L3NpZCBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcclxuICAgICAgaWYgKCFhY2NvdW50ICYmICEocmVxdWVzdC5zaWQgIHx8IHJlcXVlc3QubG9naW5IaW50KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSApIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XHJcblxyXG4gICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgIEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpLFxyXG4gICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgcmVxdWVzdC5zY29wZXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcclxuICAgICAgKTtcclxuICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSB8fCBhY2NvdW50KSB7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgLy9pZiB1c2VyIGRpZG4ndCBwYXNzIGxvZ2luX2hpbnQvc2lkIGFuZCBhZGFsJ3MgaWR0b2tlbiBpcyBwcmVzZW50LCBleHRyYWN0IHRoZSBsb2dpbl9oaW50IGZyb20gdGhlIGFkYWxJZFRva2VuXHJcbiAgICAgIGVsc2UgaWYgKCFhY2NvdW50ICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xyXG4gICAgICAgIC8vIGlmIGFkYWxJZFRva2VuIGV4aXN0cywgZXh0cmFjdCB0aGUgU1NPIGluZm8gZnJvbSB0aGUgc2FtZVxyXG4gICAgICAgIGNvbnN0IGFkYWxJZFRva2VuT2JqZWN0ID0gVG9rZW5VdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkFEQUwncyBpZFRva2VuIGV4aXN0cy4gRXh0cmFjdGluZyBsb2dpbiBpbmZvcm1hdGlvbiBmcm9tIEFEQUwncyBpZFRva2VuIFwiKTtcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCBudWxsLCBhZGFsSWRUb2tlbk9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlckNvbnRhaW5lZENsYWltcyA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdCB8fCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY2xhaW1zVmFsdWU7XHJcblxyXG4gICAgICBsZXQgYXV0aEVycjogQXV0aEVycm9yO1xyXG4gICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcclxuXHJcbiAgICAgIGlmICghdXNlckNvbnRhaW5lZENsYWltcyAmJiAhcmVxdWVzdC5mb3JjZVJlZnJlc2gpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2FjaGVSZXN1bHRSZXNwb25zZSA9IHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBhdXRoRXJyID0gZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIGNhY2hlUmVzdWx0XHJcbiAgICAgIGlmIChjYWNoZVJlc3VsdFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRva2VuIGlzIGFscmVhZHkgaW4gY2FjaGUgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xyXG4gICAgICAgIHJlc29sdmUoY2FjaGVSZXN1bHRSZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoYXV0aEVycikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoYXV0aEVyci5lcnJvckNvZGUgKyBcIjpcIiArIGF1dGhFcnIuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICByZWplY3QoYXV0aEVycik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZWxzZSBwcm9jZWVkIHdpdGggbG9naW5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGxvZ01lc3NhZ2U7XHJcbiAgICAgICAgaWYgKHVzZXJDb250YWluZWRDbGFpbXMpIHtcclxuICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIGNsYWltcyB3ZXJlIGdpdmVuLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5mb3JjZVJlZnJlc2gpIHtcclxuICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIHJlcXVlc3QuZm9yY2VSZWZyZXNoIG9wdGlvbiB3YXMgc2V0IHRvIHRydWVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbG9nTWVzc2FnZSA9IFwiVG9rZW4gaXMgbm90IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGxvZ01lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvLyBDYWNoZSByZXN1bHQgY2FuIHJldHVybiBudWxsIGlmIGNhY2hlIGlzIGVtcHR5LiBJbiB0aGF0IGNhc2UsIHNldCBhdXRob3JpdHkgdG8gZGVmYXVsdCB2YWx1ZSBpZiBubyBhdXRob3JpdHkgaXMgcGFzc2VkIHRvIHRoZSBhcGkuXHJcbiAgICAgICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gcmVxdWVzdC5hdXRob3JpdHkgPyBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSA6IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhY2hlIG1pc3NcclxuICAgICAgICByZXR1cm4gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlLnJlc29sdmVFbmRwb2ludHNBc3luYygpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgLy8gcmVmcmVzaCBhdHRlbXB0IHdpdGggaWZyYW1lXHJcbiAgICAgICAgICAvLyBBbHJlYWR5IHJlbmV3aW5nIGZvciB0aGlzIHNjb3BlLCBjYWxsYmFjayB3aGVuIHdlIGdldCB0aGUgdG9rZW4uXHJcbiAgICAgICAgICBpZiAod2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgdG9rZW4gZm9yIHNjb3BlOiBcIiArIHNjb3BlICsgXCIgaXMgaW4gcHJvZ3Jlc3MuIFJlZ2lzdGVyaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgICAgICAgICAvLyBBY3RpdmUgcmVuZXdhbHMgY29udGFpbnMgdGhlIHN0YXRlIGZvciBlYWNoIHJlbmV3YWwuXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zY29wZXMgJiYgcmVxdWVzdC5zY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xICYmIHJlcXVlc3Quc2NvcGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIC8vIEFwcCB1c2VzIGlkVG9rZW4gdG8gc2VuZCB0byBhcGkgZW5kcG9pbnRzXHJcbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCBzY29wZSBpcyB0cmFja2VkIGFzIGNsaWVudElkIHRvIHN0b3JlIHRoaXMgdG9rZW5cclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgaWRUb2tlblwiKTtcclxuICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmV3SWRUb2tlbihyZXF1ZXN0LnNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0LCBhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHJlbmV3IGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBhY2Nlc3N0b2tlblwiKTtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmV3VG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XHJcbiAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZygpKSk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFBvcHVwIFdpbmRvdyBDcmVhdGlvblxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBVc2VkIHRvIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlZGlyZWN0X3VyaSBhZnRlciBhdXRoZW50aWNhdGlvbiBpcyBjb21wbGV0ZS4gVGhlIHVzZXIncyBiZWFyZXIgdG9rZW4gaXMgYXR0YWNoZWQgdG8gdGhlIFVSSSBmcmFnbWVudCBhcyBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW4gZmllbGQuXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhbHNvIGNsb3NlcyB0aGUgcG9wdXAgd2luZG93IGFmdGVyIHJlZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICogQHBhcmFtIHRpdGxlXHJcbiAgICogQHBhcmFtIGludGVydmFsXHJcbiAgICogQHBhcmFtIGluc3RhbmNlXHJcbiAgICogQHBhcmFtIHJlc29sdmVcclxuICAgKiBAcGFyYW0gcmVqZWN0XHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlbldpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyLCBpbnN0YW5jZTogdGhpcywgcmVzb2x2ZT86IEZ1bmN0aW9uLCByZWplY3Q/OiBGdW5jdGlvbik6IFdpbmRvdyB7XHJcbiAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xyXG4gICAgdmFyIHBvcHVwV2luZG93OiBXaW5kb3c7XHJcbiAgICB0cnkge1xyXG4gICAgICBwb3B1cFdpbmRvdyA9IHRoaXMub3BlblBvcHVwKHVybE5hdmlnYXRlLCB0aXRsZSwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xyXG4gICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1c2ggcG9wdXAgd2luZG93IGhhbmRsZSBvbnRvIHN0YWNrIGZvciB0cmFja2luZ1xyXG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MucHVzaChwb3B1cFdpbmRvdyk7XHJcblxyXG4gICAgY29uc3QgcG9sbFRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgcG9wdXAgY2xvc2VkIG9yIGxvZ2luIGluIHByb2dyZXNzLCBjYW5jZWwgbG9naW5cclxuICAgICAgaWYgKHBvcHVwV2luZG93ICYmIHBvcHVwV2luZG93LmNsb3NlZCAmJiAoaW5zdGFuY2UubG9naW5JblByb2dyZXNzIHx8IGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MpKSB7XHJcbiAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwQ2xvc2VkXCIsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9wVXBXaW5kb3dMb2NhdGlvbiA9IHBvcHVwV2luZG93LmxvY2F0aW9uO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzaCBjaGFuZ2VzLCBjbG9zZSB0aGUgcG9wdXAgd2luZG93XHJcbiAgICAgICAgaWYgKHBvcFVwV2luZG93TG9jYXRpb24uaHJlZi5pbmRleE9mKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgICAgaW5zdGFuY2UubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAvLyBUT0RPOiBDaGVjayBob3cgdGhpcyBjYW4gYmUgZXh0cmFjdGVkIGZvciBhbnkgZnJhbWV3b3JrIHNwZWNpZmljIGNvZGU/XHJcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KFwibXNhbDpwb3BVcEhhc2hDaGFuZ2VkXCIsIHBvcFVwV2luZG93TG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVkV2luZG93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBDcm9zcyBEb21haW4gdXJsIGNoZWNrIGVycm9yLlxyXG4gICAgICAgIC8vIFdpbGwgYmUgdGhyb3duIHVudGlsIEFBRCByZWRpcmVjdHMgdGhlIHVzZXIgYmFjayB0byB0aGUgYXBwXCJzIHJvb3QgcGFnZSB3aXRoIHRoZSB0b2tlbi5cclxuICAgICAgICAvLyBObyBuZWVkIHRvIGxvZyBvciB0aHJvdyB0aGlzIGVycm9yIGFzIGl0IHdpbGwgY3JlYXRlIHVubmVjZXNzYXJ5IHRyYWZmaWMuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbnRlcnZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHBvcHVwV2luZG93O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogQ29uZmlndXJlcyBwb3B1cCB3aW5kb3cgZm9yIGxvZ2luLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICogQHBhcmFtIHRpdGxlXHJcbiAgICogQHBhcmFtIHBvcFVwV2lkdGhcclxuICAgKiBAcGFyYW0gcG9wVXBIZWlnaHRcclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlblBvcHVwKHVybE5hdmlnYXRlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHBvcFVwV2lkdGg6IG51bWJlciwgcG9wVXBIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGFkZGluZyB3aW5MZWZ0IGFuZCB3aW5Ub3AgdG8gYWNjb3VudCBmb3IgZHVhbCBtb25pdG9yXHJcbiAgICAgICAqIHVzaW5nIHNjcmVlbkxlZnQgYW5kIHNjcmVlblRvcCBmb3IgSUU4IGFuZCBlYXJsaWVyXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCB3aW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xyXG4gICAgICBjb25zdCB3aW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xyXG4gICAgICAvKipcclxuICAgICAgICogd2luZG93LmlubmVyV2lkdGggZGlzcGxheXMgYnJvd3NlciB3aW5kb3dcInMgaGVpZ2h0IGFuZCB3aWR0aCBleGNsdWRpbmcgdG9vbGJhcnNcclxuICAgICAgICogdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIGZvciBJRTggYW5kIGVhcmxpZXJcclxuICAgICAgICovXHJcbiAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHBvcFVwV2lkdGggLyAyKSkgKyB3aW5MZWZ0O1xyXG4gICAgICBjb25zdCB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcFVwSGVpZ2h0IC8gMikpICsgd2luVG9wO1xyXG5cclxuICAgICAgLy8gb3BlbiB0aGUgd2luZG93XHJcbiAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xyXG4gICAgICBpZiAoIXBvcHVwV2luZG93KSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcclxuICAgICAgICBwb3B1cFdpbmRvdy5mb2N1cygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcG9wdXBXaW5kb3c7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBJZnJhbWUgTWFuYWdlbWVudFxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIGN1cnJlbnQgd2luZG93IGlzIGluIGlmcmFtIGZvciB0b2tlbiByZW5ld2FsXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0luSWZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFJldHVybnMgd2hldGhlciBwYXJlbnQgd2luZG93IGV4aXN0cyBhbmQgaGFzIG1zYWxcclxuICAgKi9cclxuICBwcml2YXRlIHBhcmVudElzTXNhbCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5tc2FsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIENhbGxpbmcgX2xvYWRGcmFtZSBidXQgd2l0aCBhIHRpbWVvdXQgdG8gc2lnbmFsIGZhaWx1cmUgaW4gbG9hZGZyYW1lU3RhdHVzLiBDYWxsYmFja3MgYXJlIGxlZnQuXHJcbiAgICogcmVnaXN0ZXJlZCB3aGVuIG5ldHdvcmsgZXJyb3JzIG9jY3VyIGFuZCBzdWJzZXF1ZW50IHRva2VuIHJlcXVlc3RzIGZvciBzYW1lIHJlc291cmNlIGFyZSByZWdpc3RlcmVkIHRvIHRoZSBwZW5kaW5nIHJlcXVlc3QuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vc2V0IGlmcmFtZSBzZXNzaW9uIHRvIHBlbmRpbmdcclxuICAgIGNvbnN0IGV4cGVjdGVkU3RhdGUgPSB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdO1xyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNldCBsb2FkaW5nIHN0YXRlIHRvIHBlbmRpbmcgZm9yOiBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKTtcclxuICAgIHRoaXMubG9hZEZyYW1lKHVybE5hdmlnYXRlLCBmcmFtZU5hbWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUpID09PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpIHtcclxuICAgICAgICAvLyBmYWlsIHRoZSBpZnJhbWUgc2Vzc2lvbiBpZiBpdFwicyBpbiBwZW5kaW5nIHN0YXRlXHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQgLyAxMDAwKSArIFwiIHNlY29uZHMgZm9yIHNjb3BlIFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcclxuICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKG51bGwsIENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIExvYWRzIGlmcmFtZSB3aXRoIGF1dGhvcml6YXRpb24gZW5kcG9pbnQgVVJMXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZEZyYW1lKHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxyXG4gICAgLy8gSUUgZG9lcyBub3QgbG9hZCB0aGUgcGFnZSBjb25zaXN0ZW50bHkgaW4gaWZyYW1lXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiTG9hZEZyYW1lOiBcIiArIGZyYW1lTmFtZSk7XHJcbiAgICBjb25zdCBmcmFtZUNoZWNrID0gZnJhbWVOYW1lO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lQ2hlY2spO1xyXG4gICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XHJcbiAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gdXJsTmF2aWdhdGU7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIkZyYW1lIE5hbWUgOiBcIiArIGZyYW1lTmFtZSArIFwiIE5hdmlnYXRlZCB0bzogXCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aGlzLmNvbmZpZy5zeXN0ZW0ubmF2aWdhdGVGcmFtZVdhaXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEFkZHMgdGhlIGhpZGRlbiBpZnJhbWUgZm9yIHNpbGVudCB0b2tlbiByZW5ld2FsLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEhpZGRlbklGcmFtZShpZnJhbWVJZDogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xyXG4gICAgaWYgKHR5cGVvZiBpZnJhbWVJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQWRkIG1zYWwgZnJhbWUgdG8gZG9jdW1lbnQ6XCIgKyBpZnJhbWVJZCk7XHJcbiAgICBsZXQgYWRhbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xyXG4gICAgaWYgKCFhZGFsRnJhbWUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJiZcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcclxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcclxuICAgICAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XHJcbiAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICAgIGFkYWxGcmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoaWZyKSBhcyBIVE1MSUZyYW1lRWxlbWVudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aWZyYW1lIG5hbWU9J1wiICsgaWZyYW1lSWQgKyBcIicgaWQ9J1wiICsgaWZyYW1lSWQgKyBcIicgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+PC9pZnJhbWU+XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2luZG93LmZyYW1lcyAmJiB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXSkge1xyXG4gICAgICAgIGFkYWxGcmFtZSA9IHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkYWxGcmFtZTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gR2VuZXJhbCBIZWxwZXJzXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIHJlZGlyZWN0IHRoZSBicm93c2VyIHRvIHRoZSBTVFMgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxOYXZpZ2F0ZSAtIFVSTCBvZiB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxyXG4gICAqL1xyXG4gIHByaXZhdGUgbmF2aWdhdGVXaW5kb3codXJsTmF2aWdhdGU6IHN0cmluZywgcG9wdXBXaW5kb3c/OiBXaW5kb3cpIHtcclxuICAgIC8vIE5hdmlnYXRlIGlmIHZhbGlkIFVSTFxyXG4gICAgaWYgKHVybE5hdmlnYXRlICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHVybE5hdmlnYXRlKSkge1xyXG4gICAgICBsZXQgbmF2aWdhdGVXaW5kb3c6IFdpbmRvdyA9IHBvcHVwV2luZG93ID8gcG9wdXBXaW5kb3cgOiB3aW5kb3c7XHJcbiAgICAgIGxldCBsb2dNZXNzYWdlOiBzdHJpbmcgPSBwb3B1cFdpbmRvdyA/IFwiTmF2aWdhdGVkIFBvcHVwIHdpbmRvdyB0bzpcIiArIHVybE5hdmlnYXRlIDogXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlO1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGxvZ01lc3NhZ2UpO1xyXG4gICAgICBuYXZpZ2F0ZVdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybE5hdmlnYXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xyXG4gICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFVzZWQgdG8gYWRkIHRoZSBkZXZlbG9wZXIgcmVxdWVzdGVkIGNhbGxiYWNrIHRvIHRoZSBhcnJheSBvZiBjYWxsYmFja3MgZm9yIHRoZSBzcGVjaWZpZWQgc2NvcGVzLiBUaGUgdXBkYXRlZCBhcnJheSBpcyBzdG9yZWQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWRTdGF0ZSAtIFVuaXF1ZSBzdGF0ZSBpZGVudGlmaWVyIChndWlkKS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgLSBUaGUgcmVzb2x2ZSBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gVGhlIHJlamVjdCBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFjayhleHBlY3RlZFN0YXRlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAvLyB0cmFjayBhY3RpdmUgcmVuZXdhbHNcclxuICAgIHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0gPSBleHBlY3RlZFN0YXRlO1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgY2FsbGJhY2tzIG1hcHBlZCBhcnJheVxyXG4gICAgaWYgKCF3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcclxuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBbXTtcclxuICAgIH1cclxuICAgIC8vIGluZGV4aW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlLCBwdXNoIHRoZSBjYWxsYmFjayBwYXJhbXMgdG8gY2FsbGJhY2tzIG1hcHBlZFxyXG4gICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdLnB1c2goeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9KTtcclxuXHJcbiAgICAvLyBTdG9yZSB0aGUgc2VydmVyIGVzcG9uc2UgaW4gdGhlIGN1cnJlbnQgd2luZG93Pz9cclxuICAgIGlmICghd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xyXG4gICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID1cclxuICAgICAgKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHtcclxuICAgICAgICAvLyByZXNldCBhY3RpdmUgcmVuZXdhbHNcclxuICAgICAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gZm9yIGFsbCBwcm9taXNlTWFwcGVkdG9SZW5ld1N0YXRlcyBmb3IgYSBnaXZlbiAnc3RhdGUnIC0gY2FsbCB0aGUgcmVqZWN0L3Jlc29sdmUgd2l0aCBlcnJvci90b2tlbiByZXNwZWN0aXZlbHlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV1baV0ucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJFcnJvciBhbmQgcmVzcG9uc2UgYXJlIGJvdGggbnVsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXRcclxuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xyXG4gICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBMb2dvdXRcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRvIGxvZyBvdXQgdGhlIGN1cnJlbnQgdXNlciwgYW5kIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkuXHJcbiAgICogRGVmYXVsdCBiZWhhdmlvdXIgaXMgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cclxuICAgKi9cclxuICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcclxuICAgIHRoaXMuYWNjb3VudCA9IG51bGw7XHJcbiAgICBsZXQgbG9nb3V0ID0gXCJcIjtcclxuICAgIGlmICh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKSB7XHJcbiAgICAgIGxvZ291dCA9IFwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0UG9zdExvZ291dFJlZGlyZWN0VXJpKCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKGF1dGhvcml0eSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBhdXRob3JpdHkuRW5kU2Vzc2lvbkVuZHBvaW50XHJcbiAgICAgICAgICAgID8gYCR7YXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludH0/JHtsb2dvdXR9YFxyXG4gICAgICAgICAgICA6IGAke3RoaXMuYXV0aG9yaXR5fW9hdXRoMi92Mi4wL2xvZ291dD8ke2xvZ291dH1gO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVXaW5kb3codXJsTmF2aWdhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQ2xlYXIgYWxsIGFjY2VzcyB0b2tlbnMgaW4gdGhlIGNhY2hlLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY2xlYXJDYWNoZSgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBDbGVhciBhIGdpdmVuIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBjYWNoZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlblxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjbGVhckNhY2hlRm9yU2NvcGUoYWNjZXNzVG9rZW46IHN0cmluZykge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gYWNjZXNzVG9rZW5JdGVtc1tpXTtcclxuICAgICAgICBpZiAodG9rZW4udmFsdWUuYWNjZXNzVG9rZW4gPT09IGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBSZXNwb25zZVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIENoZWNrcyBpZiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJbiBjYXNlIG9mIHJlZGlyZWN0LCB0aGUgdXJsIGZyYWdtZW50IGhhcyBlaXRoZXIgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvci5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAtIEhhc2ggcGFzc2VkIGZyb20gcmVkaXJlY3QgcGFnZS5cclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSB0cnVlIGlmIHJlc3BvbnNlIGNvbnRhaW5zIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBpc0NhbGxiYWNrKGhhc2g6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ2FsbGJhY2sgd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHVybENvbnRhaW5zSGFzaCBpbiBNU0FMLmpzIHYyLjAuXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMudXJsQ29udGFpbnNIYXNoKGhhc2gpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cmxDb250YWluc0hhc2godXJsU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0aGlzLmRlc2VyaWFsaXplSGFzaCh1cmxTdHJpbmcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHxcclxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpIHx8XHJcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxyXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIGNhbGwgdGhlIGNvbnN0cnVjdG9yIGNhbGxiYWNrIHdpdGggdGhlIHRva2VuL2Vycm9yXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvY2Vzc0NhbGxCYWNrKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbywgcGFyZW50Q2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlByb2Nlc3NpbmcgdGhlIGNhbGxiYWNrIGZyb20gcmVkaXJlY3QgcmVzcG9uc2VcIik7XHJcbiAgICAvLyBnZXQgdGhlIHN0YXRlIGluZm8gZnJvbSB0aGUgaGFzaFxyXG4gICAgaWYgKCFzdGF0ZUluZm8pIHtcclxuICAgICAgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZTtcclxuICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xyXG4gICAgLy8gU2F2ZSB0aGUgdG9rZW4gaW5mbyBmcm9tIHRoZSBoYXNoXHJcbiAgICB0cnkge1xyXG4gICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZVRva2VuRnJvbUhhc2goaGFzaCwgc3RhdGVJbmZvKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhdXRoRXJyID0gZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBoYXNoIGZyb20gdGhlIGNhY2hlXHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBDbGVhciB0aGUgY29va2llIGluIHRoZSBoYXNoXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRTdGF0ZTogc3RyaW5nID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB8fCByZXNwb25zZS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiV2luZG93IGlzIGluIGlmcmFtZSwgYWNxdWlyaW5nIHRva2VuIHNpbGVudGx5XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5pZFRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhcmVudENhbGxiYWNrKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIGF1dGhFcnIsIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkoYWNjb3VudFN0YXRlKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXNwb25zZSwgYXV0aEVycik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbjogXCIgKyBlcnIpO1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIHRoZSBTVFMuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yIGluZm9ybWF0aW9uIGFuZCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUuIEl0IHRoZW5cclxuICAgKiBjYWxscyB0aGUgcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gY2FzZSBvZiByZWRpcmVjdCBvciByZXNvbHZlcyB0aGUgcHJvbWlzZXMgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyByZXRyaWV2ZSB0aGUgaGFzaFxyXG4gICAgaWYgKGhhc2ggPT0gbnVsbCkge1xyXG4gICAgICBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlbGYgPSBudWxsO1xyXG4gICAgbGV0IGlzUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBpc1dpbmRvd09wZW5lck1zYWwgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB3aW5kb3cgb3BlbmVkIHRoZSBpRnJhbWUvcG9wdXBcclxuICAgIHRyeSB7XHJcbiAgICAgIGlzV2luZG93T3BlbmVyTXNhbCA9IHdpbmRvdy5vcGVuZXIgJiYgd2luZG93Lm9wZW5lci5tc2FsICYmIHdpbmRvdy5vcGVuZXIubXNhbCAhPT0gd2luZG93Lm1zYWw7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gZXJyID0gU2VjdXJpdHlFcnJvcjogQmxvY2tlZCBhIGZyYW1lIHdpdGggb3JpZ2luIFwiW3VybF1cIiBmcm9tIGFjY2Vzc2luZyBhIGNyb3NzLW9yaWdpbiBmcmFtZS5cclxuICAgICAgaXNXaW5kb3dPcGVuZXJNc2FsID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzZWxmIHRvIHRoZSB3aW5kb3cgdGhhdCBjcmVhdGVkIHRoZSBwb3B1cC9pZnJhbWVcclxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgc2VsZiA9IHdpbmRvdy5vcGVuZXIubXNhbDtcclxuICAgICAgaXNQb3B1cCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93LnBhcmVudC5tc2FsKSB7XHJcbiAgICAgIHNlbGYgPSB3aW5kb3cucGFyZW50Lm1zYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVzcG9uc2VTdGF0ZSBtZXRob2Qgc3BlY2lmaWNhbGx5XHJcbiAgICBjb25zdCBzdGF0ZUluZm8gPSBzZWxmLmdldFJlc3BvbnNlU3RhdGUoaGFzaCk7XHJcblxyXG4gICAgbGV0IHRva2VuUmVzcG9uc2VDYWxsYmFjazogKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHZvaWQgPSBudWxsO1xyXG5cclxuICAgIHNlbGYubG9nZ2VyLmluZm8oXCJSZXR1cm5lZCBmcm9tIHJlZGlyZWN0IHVybFwiKTtcclxuICAgIC8vIElmIHBhcmVudCB3aW5kb3cgaXMgdGhlIG1zYWwgaW5zdGFuY2Ugd2hpY2ggb3BlbmVkIHRoZSBjdXJyZW50IHdpbmRvdyAoaWZyYW1lKVxyXG4gICAgaWYgKHRoaXMucGFyZW50SXNNc2FsKCkpIHtcclxuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cucGFyZW50LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgLy8gQ3VycmVudCB3aW5kb3cgaXMgd2luZG93IG9wZW5lciAocG9wdXApXHJcbiAgICBlbHNlIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cub3BlbmVyLmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgLy8gUmVkaXJlY3QgY2FzZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAvLyBpZiBzZXQgdG8gbmF2aWdhdGUgdG8gbG9naW5SZXF1ZXN0IHBhZ2UgcG9zdCBsb2dpblxyXG4gICAgICBpZiAoc2VsZi5jb25maWcuYXV0aC5uYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsKSB7XHJcbiAgICAgICAgc2VsZi5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgaGFzaCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgPT09IHdpbmRvdyAmJiAhaXNQb3B1cCkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZWxmLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHNlbGYuaW5Db29raWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICAgIC8vIFdlIHJlYWNoZWQgdGhpcyBwb2ludCB0b28gZWFybHkgLSBjYWNoZSBoYXNoLCByZXR1cm4gYW5kIHByb2Nlc3MgaW4gaGFuZGxlUmVkaXJlY3RDYWxsYmFja3NcclxuICAgICAgICBzZWxmLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy51cmxIYXNoLCBoYXNoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnByb2Nlc3NDYWxsQmFjayhoYXNoLCBzdGF0ZUluZm8sIHRva2VuUmVzcG9uc2VDYWxsYmFjayk7XHJcblxyXG4gICAgLy8gSWYgY3VycmVudCB3aW5kb3cgaXMgb3BlbmVyLCBjbG9zZSBhbGwgd2luZG93c1xyXG4gICAgaWYgKGlzV2luZG93T3BlbmVyTXNhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5vcGVuZXIub3BlbmVkV2luZG93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuZXIub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmV0dXJucyBkZXNlcmlhbGl6ZWQgcG9ydGlvbiBvZiBVUkwgaGFzaFxyXG4gICAqIEBwYXJhbSBoYXNoXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkZXNlcmlhbGl6ZUhhc2godXJsRnJhZ21lbnQ6IHN0cmluZykge1xyXG4gICAgbGV0IGhhc2ggPSBVcmxVdGlscy5nZXRIYXNoRnJvbVVybCh1cmxGcmFnbWVudCk7XHJcbiAgICByZXR1cm4gQ3J5cHRvVXRpbHMuZGVzZXJpYWxpemUoaGFzaCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQ3JlYXRlcyBhIHN0YXRlSW5mbyBvYmplY3QgZnJvbSB0aGUgVVJMIGZyYWdtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICAtICBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2VcclxuICAgKiBAcmV0dXJucyB7VG9rZW5SZXNwb25zZX0gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNlU3RhdGUoaGFzaDogc3RyaW5nKTogUmVzcG9uc2VTdGF0ZUluZm8ge1xyXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHRoaXMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xyXG4gICAgbGV0IHN0YXRlUmVzcG9uc2U6IFJlc3BvbnNlU3RhdGVJbmZvO1xyXG4gICAgaWYgKCFwYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIHdhcyBub3QgcGFyc2VkIGNvcnJlY3RseS5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpKSB7XHJcbiAgICAgIHN0YXRlUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgcmVxdWVzdFR5cGU6IENvbnN0YW50cy51bmtub3duLFxyXG4gICAgICAgIHN0YXRlOiBwYXJhbWV0ZXJzLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlTWF0Y2g6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiSGFzaCBkb2VzIG5vdCBjb250YWluIHN0YXRlLlwiKTtcclxuICAgIH1cclxuICAgIC8vIGFzeW5jIGNhbGxzIGNhbiBmaXJlIGlmcmFtZSBhbmQgbG9naW4gcmVxdWVzdCBhdCB0aGUgc2FtZSB0aW1lIGlmIGRldmVsb3BlciBkb2VzIG5vdCB1c2UgdGhlIEFQSSBhcyBleHBlY3RlZFxyXG4gICAgLy8gaW5jb21pbmcgY2FsbGJhY2sgbmVlZHMgdG8gYmUgbG9va2VkIHVwIHRvIGZpbmQgdGhlIHJlcXVlc3QgdHlwZVxyXG5cclxuICAgIC8vIGxvZ2luUmVkaXJlY3RcclxuICAgIGlmIChzdGF0ZVJlc3BvbnNlLnN0YXRlID09PSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCB0aGlzLmluQ29va2llKSB8fCBzdGF0ZVJlc3BvbnNlLnN0YXRlID09PSB0aGlzLnNpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGUpIHsgLy8gbG9naW5SZWRpcmVjdFxyXG4gICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLmxvZ2luO1xyXG4gICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RhdGVSZXNwb25zZTtcclxuICAgIH1cclxuICAgIC8vIGFjcXVpcmVUb2tlblJlZGlyZWN0XHJcbiAgICBlbHNlIGlmIChzdGF0ZVJlc3BvbnNlLnN0YXRlID09PSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgdGhpcy5pbkNvb2tpZSkpIHsgLy9hY3F1aXJlVG9rZW5SZWRpcmVjdFxyXG4gICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcbiAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4dGVybmFsIGFwaSByZXF1ZXN0cyBtYXkgaGF2ZSBtYW55IHJlbmV3dG9rZW4gcmVxdWVzdHMgZm9yIGRpZmZlcmVudCByZXNvdXJjZVxyXG4gICAgaWYgKCFzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2gpIHtcclxuICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IHdpbmRvdy5yZXF1ZXN0VHlwZTtcclxuICAgICAgY29uc3Qgc3RhdGVzSW5QYXJlbnRDb250ZXh0ID0gd2luZG93LnJlbmV3U3RhdGVzO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlc0luUGFyZW50Q29udGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdGF0ZXNJblBhcmVudENvbnRleHRbaV0gPT09IHN0YXRlUmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGVSZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gVG9rZW4gUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBUb2tlblByb2Nlc3NpbmcudHMpXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIGdldCB0b2tlbiBmb3IgdGhlIHNwZWNpZmllZCBzZXQgb2Ygc2NvcGVzIGZyb20gdGhlIGNhY2hlXHJcbiAgICogQHBhcmFtIHtAbGluayBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc30gLSBSZXF1ZXN0IHNlbnQgdG8gdGhlIFNUUyB0byBvYnRhaW4gYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuXHJcbiAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHNjb3BlcyB3ZXJlIHJlcXVlc3RlZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWNjb3VudDogQWNjb3VudCk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbnVsbDtcclxuICAgIGNvbnN0IHNjb3BlcyA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zY29wZXM7XHJcblxyXG4gICAgLy8gZmlsdGVyIGJ5IGNsaWVudElkIGFuZCBhY2NvdW50XHJcbiAgICBjb25zdCB0b2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnModGhpcy5jbGllbnRJZCwgYWNjb3VudCA/IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyIDogbnVsbCk7XHJcblxyXG4gICAgLy8gTm8gbWF0Y2ggZm91bmQgYWZ0ZXIgaW5pdGlhbCBmaWx0ZXJpbmdcclxuICAgIGlmICh0b2tlbkNhY2hlSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xyXG5cclxuICAgIC8vIGlmIG5vIGF1dGhvcml0eSBwYXNzZWRcclxuICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xyXG4gICAgICAvLyBmaWx0ZXIgYnkgc2NvcGVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSB0b2tlbkNhY2hlSXRlbXNbaV07XHJcbiAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWQgdG9rZW4gZm91bmRcclxuICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBmaWx0ZXJlZEl0ZW1zWzBdO1xyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcclxuICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIG5vIG1hdGNoIGZvdW5kLCBjaGVjayBpZiB0aGVyZSB3YXMgYSBzaW5nbGUgYXV0aG9yaXR5IHVzZWRcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdCA9IHRoaXMuZ2V0VW5pcXVlQXV0aG9yaXR5KHRva2VuQ2FjaGVJdGVtcywgXCJhdXRob3JpdHlcIik7XHJcbiAgICAgICAgaWYgKGF1dGhvcml0eUxpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlQXV0aG9yaXRpZXNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhdXRob3JpdHlMaXN0WzBdLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaWYgYW4gYXV0aG9yaXR5IGlzIHBhc3NlZCBpbiB0aGUgQVBJXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gZmlsdGVyIGJ5IGF1dGhvcml0eSBhbmQgc2NvcGVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSB0b2tlbkNhY2hlSXRlbXNbaV07XHJcbiAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSAmJiBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoY2FjaGVJdGVtLmtleS5hdXRob3JpdHkpID09PSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gbm8gbWF0Y2hcclxuICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgb25seSBvbmUgY2FjaGVkVG9rZW4gRm91bmRcclxuICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gaWYgbW9yZSB0aGFuIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxyXG4gICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY2Nlc3NUb2tlbkNhY2hlSXRlbSAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBleHBpcmVkID0gTnVtYmVyKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmV4cGlyZXNJbik7XHJcbiAgICAgIC8vIElmIGV4cGlyYXRpb24gaXMgd2l0aGluIG9mZnNldCwgaXQgd2lsbCBmb3JjZSByZW5ld1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmNvbmZpZy5zeXN0ZW0udG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyB8fCAzMDA7XHJcbiAgICAgIGlmIChleHBpcmVkICYmIChleHBpcmVkID4gVGltZVV0aWxzLm5vdygpICsgb2Zmc2V0KSkge1xyXG4gICAgICAgIGxldCBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbik7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICBhY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkFjY291bnQgc2hvdWxkIG5vdCBiZSBudWxsIGhlcmUuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhU3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZSA9IHtcclxuICAgICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxyXG4gICAgICAgICAgdGVuYW50SWQ6IFwiXCIsXHJcbiAgICAgICAgICB0b2tlblR5cGU6IChhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5pZFRva2VuID09PSBhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5hY2Nlc3NUb2tlbikgPyBDb25zdGFudHMuaWRUb2tlbiA6IENvbnN0YW50cy5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmosXHJcbiAgICAgICAgICBpZFRva2VuQ2xhaW1zOiBpZFRva2VuT2JqLmNsYWltcyxcclxuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgIHNjb3BlczogYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIiksXHJcbiAgICAgICAgICBleHBpcmVzT246IG5ldyBEYXRlKGV4cGlyZWQgKiAxMDAwKSxcclxuICAgICAgICAgIGFjY291bnQ6IGFjY291bnQsXHJcbiAgICAgICAgICBhY2NvdW50U3RhdGU6IGFTdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShmaWx0ZXJlZEl0ZW1zWzBdLmtleSkpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIGdldCBhIHVuaXF1ZSBsaXN0IG9mIGF1dGhvcml0dWVzIGZyb20gdGhlIGNhY2hlXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT59ICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgLSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VW5pcXVlQXV0aG9yaXR5KGFjY2Vzc1Rva2VuQ2FjaGVJdGVtczogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+LCBwcm9wZXJ0eTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBhdXRob3JpdHlMaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmtleS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgKGZsYWdzLmluZGV4T2YoZWxlbWVudC5rZXlbcHJvcGVydHldKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgZmxhZ3MucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgIGF1dGhvcml0eUxpc3QucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhdXRob3JpdHlMaXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIENoZWNrIGlmIEFEQUwgaWRfdG9rZW4gZXhpc3RzIGFuZCByZXR1cm4gaWYgZXhpc3RzLlxyXG4gICAqXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBleHRyYWN0QURBTElkVG9rZW4oKTogYW55IHtcclxuICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xyXG4gICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xyXG4gICAgICByZXR1cm4gVG9rZW5VdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBBY3F1aXJlcyBhY2Nlc3MgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHJlbmV3VG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld1Rva2VuIGlzIGNhbGxlZCBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XHJcbiAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXHJcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpLCBDb25zdGFudHMucHJvbXB0KSArIENvbnN0YW50cy5wcm9tcHRfbm9uZTtcclxuXHJcbiAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcclxuICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcclxuICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlLCBzY29wZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmVuZXdzIGlkdG9rZW4gZm9yIGFwcFwicyBvd24gYmFja2VuZCB3aGVuIGNsaWVudElkIGlzIHBhc3NlZCBhcyBhIHNpbmdsZSBzY29wZSBpbiB0aGUgc2NvcGVzIGFycmF5LlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHJlbmV3SWRUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInJlbmV3aWRUb2tlbiBpcyBjYWxsZWRcIik7XHJcbiAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKFwibXNhbElkVG9rZW5GcmFtZVwiKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyBJZHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXHJcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpLCBDb25zdGFudHMucHJvbXB0KSArIENvbnN0YW50cy5wcm9tcHRfbm9uZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaWxlbnRMb2dpbikge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcclxuICAgICAgICB0aGlzLnNpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGUgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm90ZTogc2NvcGUgaGVyZSBpcyBjbGllbnRJZFxyXG4gICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5jbGllbnRJZCwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcclxuICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcclxuICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIFwibXNhbElkVG9rZW5GcmFtZVwiLCB0aGlzLmNsaWVudElkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIEFBRC4gSXQgZXh0cmFjdHMgdGhlIGhhc2gsIHByb2Nlc3NlcyB0aGUgdG9rZW4gb3IgZXJyb3IsIHNhdmVzIGl0IGluIHRoZSBjYWNoZSBhbmQgY2FsbHMgdGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIHJlc3VsdC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IGF1dGhvcml0eSByZWNlaXZlZCBpbiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQuXHJcbiAgICogQHBhcmFtIHtUb2tlblJlc3BvbnNlfSByZXF1ZXN0SW5mbyBhbiBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRCBjb21wcmlzaW5nIG9mIHRoZSBrZXlzIC0gcGFyYW1ldGVycywgcmVxdWVzdFR5cGUsIHN0YXRlTWF0Y2gsIHN0YXRlUmVzcG9uc2UgYW5kIHZhbGlkLlxyXG4gICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCBhY2NvdW50IG9iamVjdCBmb3Igd2hpY2ggc2NvcGVzIGFyZSBjb25zZW50ZWQgZm9yLiBUaGUgZGVmYXVsdCBhY2NvdW50IGlzIHRoZSBsb2dnZWQgaW4gYWNjb3VudC5cclxuICAgKiBAcGFyYW0ge0NsaWVudEluZm99IGNsaWVudEluZm8gY2xpZW50SW5mbyByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZSBjb21wcmlzaW5nIG9mIGZpZWxkcyB1aWQgYW5kIHV0aWQuXHJcbiAgICogQHBhcmFtIHtJZFRva2VufSBpZFRva2VuIGlkVG9rZW4gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICBwcml2YXRlIHNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBhdXRob3JpdHk6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBjbGllbnRJbmZvOiBzdHJpbmcsIGlkVG9rZW5PYmo6IElkVG9rZW4pOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgbGV0IHNjb3BlOiBzdHJpbmc7XHJcbiAgICBsZXQgYWNjZXNzVG9rZW5SZXNwb25zZSA9IHsgLi4ucmVzcG9uc2UgfTtcclxuICAgIGNvbnN0IGNsaWVudE9iajogQ2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pO1xyXG4gICAgbGV0IGV4cGlyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICAvLyBpZiB0aGUgcmVzcG9uc2UgY29udGFpbnMgXCJzY29wZVwiXHJcbiAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShcInNjb3BlXCIpKSB7XHJcbiAgICAgIC8vIHJlYWQgdGhlIHNjb3Blc1xyXG4gICAgICBzY29wZSA9IHBhcmFtZXRlcnNbXCJzY29wZVwiXTtcclxuICAgICAgY29uc3QgY29uc2VudGVkU2NvcGVzID0gc2NvcGUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgLy8gcmV0cmlldmUgYWxsIGFjY2VzcyB0b2tlbnMgZnJvbSB0aGUgY2FjaGUsIHJlbW92ZSB0aGUgZHVwIHNjb3Jlc1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnModGhpcy5jbGllbnRJZCwgYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV07XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuaG9tZUFjY291bnRJZGVudGlmaWVyID09PSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xyXG4gICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICBpZiAoU2NvcGVTZXQuaXNJbnRlcnNlY3RpbmdTY29wZXMoY2FjaGVkU2NvcGVzLCBjb25zZW50ZWRTY29wZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZW5lcmF0ZSBhbmQgY2FjaGUgYWNjZXNzVG9rZW5LZXkgYW5kIGFjY2Vzc1Rva2VuVmFsdWVcclxuICAgICAgY29uc3QgZXhwaXJlc0luID0gVGltZVV0aWxzLnBhcnNlRXhwaXJlc0luKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmV4cGlyZXNJbl0pO1xyXG4gICAgICBleHBpcmF0aW9uID0gVGltZVV0aWxzLm5vdygpICsgZXhwaXJlc0luO1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIGlkVG9rZW5PYmoucmF3SWRUb2tlbiwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XHJcblxyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuICA9IHBhcmFtZXRlcnNbQ29uc3RhbnRzLmFjY2Vzc1Rva2VuXTtcclxuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBjb25zZW50ZWRTY29wZXM7XHJcbiAgICB9XHJcbiAgICAvLyBpZiB0aGUgcmVzcG9uc2UgZG9lcyBub3QgY29udGFpbiBcInNjb3BlXCIgLSBzY29wZSBpcyB1c3VhbGx5IGNsaWVudF9pZCBhbmQgdGhlIHRva2VuIHdpbGwgYmUgaWRfdG9rZW5cclxuICAgIGVsc2Uge1xyXG4gICAgICBzY29wZSA9IHRoaXMuY2xpZW50SWQ7XHJcblxyXG4gICAgICAvLyBHZW5lcmF0ZSBhbmQgY2FjaGUgYWNjZXNzVG9rZW5LZXkgYW5kIGFjY2Vzc1Rva2VuVmFsdWVcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xyXG4gICAgICBleHBpcmF0aW9uID0gTnVtYmVyKGlkVG9rZW5PYmouZXhwaXJhdGlvbik7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSwgcGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0sIGV4cGlyYXRpb24udG9TdHJpbmcoKSwgY2xpZW50SW5mbyk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XHJcbiAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2Uuc2NvcGVzID0gW3Njb3BlXTtcclxuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiA9IHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleHBpcmF0aW9uKSB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHBpcmF0aW9uICogMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiQ291bGQgbm90IHBhcnNlIGV4cGlyZXNJbiBwYXJhbWV0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogU2F2ZXMgdG9rZW4gb3IgZXJyb3IgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEIGluIHRoZSBjYWNoZS4gSW4gY2FzZSBvZiBpZF90b2tlbiwgaXQgYWxzbyBjcmVhdGVzIHRoZSBhY2NvdW50IG9iamVjdC5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHNhdmVUb2tlbkZyb21IYXNoKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbyk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgc3RhdGVJbmZvLnN0YXRlTWF0Y2ggKyBcIjsgUmVxdWVzdCB0eXBlOlwiICsgc3RhdGVJbmZvLnJlcXVlc3RUeXBlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJcIik7XHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgXCJcIik7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlID0ge1xyXG4gICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgdGVuYW50SWQ6IFwiXCIsXHJcbiAgICAgIHRva2VuVHlwZTogXCJcIixcclxuICAgICAgaWRUb2tlbjogbnVsbCxcclxuICAgICAgaWRUb2tlbkNsYWltczogbnVsbCxcclxuICAgICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICAgIHNjb3BlczogW10sXHJcbiAgICAgIGV4cGlyZXNPbjogbnVsbCxcclxuICAgICAgYWNjb3VudDogbnVsbCxcclxuICAgICAgYWNjb3VudFN0YXRlOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZXJyb3I6IEF1dGhFcnJvcjtcclxuICAgIGNvbnN0IGhhc2hQYXJhbXMgPSB0aGlzLmRlc2VyaWFsaXplSGFzaChoYXNoKTtcclxuICAgIGxldCBhdXRob3JpdHlLZXk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBsZXQgYWNxdWlyZVRva2VuQWNjb3VudEtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBpZFRva2VuT2JqOiBJZFRva2VuID0gbnVsbDtcclxuXHJcbiAgICAvLyBJZiBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvclxyXG4gICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb24pIHx8IGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yKSkge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiRXJyb3IgOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdICsgXCI7IEVycm9yIGRlc2NyaXB0aW9uOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcblxyXG4gICAgICAvLyBsb2dpblxyXG4gICAgICBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dICsgXCI6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0pO1xyXG4gICAgICAgIGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWNxdWlyZVRva2VuXHJcbiAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB7XHJcbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICAgICAgbGV0IGFjY291bnRJZDtcclxuXHJcbiAgICAgICAgaWYgKGFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGFjY291bnRJZCA9IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWNjb3VudElkID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkLCBzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgW0NvbnN0YW50cy5lcnJvcl06IGhhc2hFcnIsXHJcbiAgICAgICAgW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXTogaGFzaEVyckRlc2NcclxuICAgICAgfSA9IGhhc2hQYXJhbXM7XHJcbiAgICAgIGlmIChJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGhhc2hFcnIpIHx8XHJcbiAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihoYXNoRXJyRGVzYykpIHtcclxuICAgICAgICBlcnJvciA9IG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgc2VydmVyIHJldHVybnMgXCJTdWNjZXNzXCJcclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBWZXJpZnkgdGhlIHN0YXRlIGZyb20gcmVkaXJlY3QgYW5kIHJlY29yZCB0b2tlbnMgdG8gc3RvcmFnZSBpZiBleGlzdHNcclxuICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIGlzIHJpZ2h0XCIpO1xyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5zZXNzaW9uU3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxTZXNzaW9uU3RhdGUsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLnNlc3Npb25TdGF0ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5hY2NvdW50U3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzdGF0ZUluZm8uc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgY2xpZW50SW5mbzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBhY2Nlc3NfdG9rZW5cclxuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pKSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGFjY2VzcyB0b2tlblwiKTtcclxuICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBpZF90b2tlbiBmcm9tIHJlc3BvbnNlIGlmIHByZXNlbnRcclxuICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xyXG4gICAgICAgICAgICBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4oaGFzaFBhcmFtc1tDb25zdGFudHMuaWRUb2tlbl0pO1xyXG4gICAgICAgICAgICByZXNwb25zZS5pZFRva2VuID0gaWRUb2tlbk9iajtcclxuICAgICAgICAgICAgcmVzcG9uc2UuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5PYmouY2xhaW1zO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXkpKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBSZXNwb25zZVV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gcmV0cmlldmUgdGhlIGF1dGhvcml0eSBmcm9tIGNhY2hlIGFuZCByZXBsYWNlIHdpdGggdGVuYW50SURcclxuICAgICAgICAgIGNvbnN0IGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5KSkge1xyXG4gICAgICAgICAgICBhdXRob3JpdHkgPSBVcmxVdGlscy5yZXBsYWNlVGVuYW50UGF0aChhdXRob3JpdHksIHJlc3BvbnNlLnRlbmFudElkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyByZXRyaWV2ZSBjbGllbnRfaW5mbyAtIGlmIGl0IGlzIG5vdCBmb3VuZCwgZ2VuZXJhdGUgdGhlIHVpZCBhbmQgdXRpZCBmcm9tIGlkVG9rZW5cclxuICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xyXG4gICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuXHJcbiAgICAgICAgICBsZXQgYWNjb3VudEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGFjY291bnRLZXkgPSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvdW50S2V5ID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRLZXksIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KENvbnN0YW50cy5ub19hY2NvdW50LCBzdGF0ZUluZm8uc3RhdGUpO1xyXG5cclxuICAgICAgICAgIGxldCBjYWNoZWRBY2NvdW50OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXkpO1xyXG4gICAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgd2l0aCB0aGUgYWNjb3VudCBpbiB0aGUgQ2FjaGVcclxuICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShjYWNoZWRBY2NvdW50KSkge1xyXG4gICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50ID0gSlNPTi5wYXJzZShjYWNoZWRBY2NvdW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgYWNxdWlyZVRva2VuQWNjb3VudCAmJiBBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhyZXNwb25zZS5hY2NvdW50LCBhY3F1aXJlVG9rZW5BY2NvdW50KSkge1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRoZSB1c2VyIG9iamVjdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBhY2NvdW50IG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlc3BvbnNlIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleV9ub2FjY291bnQpKSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBpZF90b2tlblxyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGlkIHRva2VuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gbG9naW4gbm8gbG9uZ2VyIGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGlkVG9rZW5cclxuICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUmVzcG9uc2VVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuY2xpZW50SW5mbykpIHtcclxuICAgICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgICAgICBsZXQgYXV0aG9yaXR5OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGF1dGhvcml0eUtleSwgdGhpcy5pbkNvb2tpZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5KSkge1xyXG4gICAgICAgICAgICAgIGF1dGhvcml0eSA9IFVybFV0aWxzLnJlcGxhY2VUZW5hbnRQYXRoKGF1dGhvcml0eSwgaWRUb2tlbk9iai50ZW5hbnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuT2JqLCBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmFjY291bnQgPSB0aGlzLmFjY291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaWRUb2tlbk9iaiAmJiBpZFRva2VuT2JqLm5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgLy8gY2hlY2sgbm9uY2UgaW50ZWdyaXR5IGlmIGlkVG9rZW4gaGFzIG5vbmNlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm90IG1hdGNoZWRcclxuICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iai5ub25jZSAhPT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIGlkVG9rZW5PYmoubm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJOb25jZSBNaXNtYXRjaC5FeHBlY3RlZCBOb25jZTogXCIgKyB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpICsgXCIsXCIgKyBcIkFjdHVhbCBOb25jZTogXCIgKyBpZFRva2VuT2JqLm5vbmNlKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpLCBpZFRva2VuT2JqLm5vbmNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgdG9rZW5cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXksIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvLCBjbGllbnRJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGlkVG9rZW4gYXMgYWNjZXNzIHRva2VuIGZvciBhcHAgaXRzZWxmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvLCBpZFRva2VuT2JqKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG4gICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiSW52YWxpZCBpZF90b2tlbiByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZElkVG9rZW5FcnJvcihpZFRva2VuT2JqKTtcclxuICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGVycm9yLmVycm9yQ29kZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gU3RhdGUgbWlzbWF0Y2ggLSB1bmV4cGVjdGVkL2ludmFsaWQgc3RhdGVcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG4gICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkU3RhdGUgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlN0YXRlIE1pc21hdGNoLkV4cGVjdGVkIFN0YXRlOiBcIiArIGV4cGVjdGVkU3RhdGUgKyBcIixcIiArIFwiQWN0dWFsIFN0YXRlOiBcIiArIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZFN0YXRlRXJyb3Ioc3RhdGVJbmZvLnN0YXRlLCBleHBlY3RlZFN0YXRlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGVycm9yLmVycm9yQ29kZSk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlSW5mby5zdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCBpZiBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPWZhbHNlXHJcbiAgICBpZiAodGhpcy5pbkNvb2tpZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtQ29va2llKGF1dGhvcml0eUtleSwgXCJcIiwgLTEpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiUmVzcG9uc2UgaXMgbnVsbFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcbiAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEFjY291bnRcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc2lnbmVkIGluIGFjY291bnRcclxuICAgKiAodGhlIGFjY291bnQgb2JqZWN0IGlzIGNyZWF0ZWQgYXQgdGhlIHRpbWUgb2Ygc3VjY2Vzc2Z1bCBsb2dpbilcclxuICAgKiBvciBudWxsIHdoZW4gbm8gc3RhdGUgaXMgZm91bmRcclxuICAgKiBAcmV0dXJucyB7QGxpbmsgQWNjb3VudH0gLSB0aGUgYWNjb3VudCBvYmplY3Qgc3RvcmVkIGluIE1TQUxcclxuICAgKi9cclxuICBnZXRBY2NvdW50KCk6IEFjY291bnQge1xyXG4gICAgLy8gaWYgYSBzZXNzaW9uIGFscmVhZHkgZXhpc3RzLCBnZXQgdGhlIGFjY291bnQgZnJvbSB0aGUgc2Vzc2lvblxyXG4gICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZyYW1lIGlzIHVzZWQgdG8gZ2V0IGlkVG9rZW4gYW5kIHBvcHVsYXRlIHRoZSBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gc2Vzc2lvblxyXG4gICAgY29uc3QgcmF3SWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXkpO1xyXG4gICAgY29uc3QgcmF3Q2xpZW50SW5mbyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvKTtcclxuXHJcbiAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcclxuICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKHJhd0lkVG9rZW4pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8ocmF3Q2xpZW50SW5mbyk7XHJcbiAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcclxuICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcclxuICAgIH1cclxuICAgIC8vIGlmIGxvZ2luIG5vdCB5ZXQgZG9uZSwgcmV0dXJuIG51bGxcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogRXh0cmFjdHMgc3RhdGUgdmFsdWUgZnJvbSB0aGUgYWNjb3VudFN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgZ2V0QWNjb3VudFN0YXRlIChzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xyXG4gICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBnZXQgYSBsaXN0IG9mIHVuaXF1ZSBhY2NvdW50cyBpbiBNU0FMIGNhY2hlIGJhc2VkIG9uIGhvbWVBY2NvdW50SWRlbnRpZmllci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQXJyYXk8QWNjb3VudD59IEFjY291bnQgLSBhbGwgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUuXHJcbiAgICovXHJcbiAgZ2V0QWxsQWNjb3VudHMoKTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgY29uc3QgYWNjb3VudHM6IEFycmF5PEFjY291bnQ+ID0gW107XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XHJcbiAgICAgIGFjY291bnRzLnB1c2goYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogVXNlZCB0byBmaWx0ZXIgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2NvdW50Pn0gIEFjY291bnRzIC0gYWNjb3VudHMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHM6IEFycmF5PEFjY291bnQ+KTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgaWYgKCFhY2NvdW50cyB8fCBhY2NvdW50cy5sZW5ndGggPD0gMSkge1xyXG4gICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGNvbnN0IHVuaXF1ZUFjY291bnRzOiBBcnJheTxBY2NvdW50PiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFjY291bnRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICBpZiAoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBmbGFncy5pbmRleE9mKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpID09PSAtMSkge1xyXG4gICAgICAgIGZsYWdzLnB1c2goYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgICAgdW5pcXVlQWNjb3VudHMucHVzaChhY2NvdW50c1tpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuaXF1ZUFjY291bnRzO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTY29wZXMgKEV4dHJhY3QgdG8gU2NvcGVzLnRzKVxyXG5cclxuICAvLyBOb3RlOiBcInRoaXNcIiBkZXBlbmRlbmN5IGluIHRoaXMgc2VjdGlvbiBpcyBtaW5pbWFsLlxyXG4gIC8vIElmIHBDYWNoZVN0b3JhZ2UgaXMgc2VwYXJhdGVkIGZyb20gdGhlIGNsYXNzIG9iamVjdCwgb3IgcGFzc2VkIGFzIGEgZm4gcGFyYW0sIHNjb3Blc1V0aWxzLnRzIGNhbiBiZSBjcmVhdGVkXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3Blc1JlcXVpcmVkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNjb3BlcyBhcnJheSBpcyByZXF1aXJlZCBvciBub3RcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXNSZXF1aXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFzY29wZXMpIHtcclxuICAgICAgaWYgKHNjb3Blc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc1JlcXVpcmVkRXJyb3Ioc2NvcGVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBhbiBhcnJheSBvYmplY3QgKGFsc28gdGhyb3dzIGVycm9yIGlmIHNjb3BlcyA9PSBudWxsKVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjb3BlcykpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBub3QgYW4gZW1wdHkgYXJyYXlcclxuICAgIGlmIChzY29wZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlTY29wZXNBcnJheUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IGNsaWVudElkIGlzIHBhc3NlZCBhcyBzaW5nbGUgc2NvcGVcclxuICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSB7XHJcbiAgICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBFeHRyYWN0cyBzY29wZSB2YWx1ZSBmcm9tIHRoZSBzdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0U2NvcGVGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xyXG4gICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEFwcGVuZHMgZXh0cmFTY29wZXNUb0NvbnNlbnQgaWYgcGFzc2VkXHJcbiAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhcHBlbmRTY29wZXMocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogQXJyYXk8c3RyaW5nPiB7XHJcblxyXG4gICAgbGV0IHNjb3BlczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnNjb3Blcykge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50KSB7XHJcbiAgICAgICAgICAgIHNjb3BlcyA9IFsuLi5yZXF1ZXN0LnNjb3BlcywgLi4ucmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNjb3BlcyA9IHJlcXVlc3Quc2NvcGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NvcGVzO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBBbmd1bGFyXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEJyb2FkY2FzdCBtZXNzYWdlcyAtIFVzZWQgb25seSBmb3IgQW5ndWxhcj8gICpcclxuICAgKiBAcGFyYW0gZXZlbnROYW1lXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBwcml2YXRlIGJyb2FkY2FzdChldmVudE5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbDogZGF0YSB9KTtcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGNhY2hlZCB0b2tlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudFxyXG4gICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAqIEByZXR1cm4ge0BsaW5rIEF1dGhSZXNwb25zZX0gQXV0aFJlc3BvbnNlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldENhY2hlZFRva2VuSW50ZXJuYWwoc2NvcGVzIDogQXJyYXk8c3RyaW5nPiAsIGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcpOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBhY2NvdW50IG9iamVjdFxyXG4gICAgY29uc3QgYWNjb3VudE9iamVjdDogQWNjb3VudCA9IGFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICBpZiAoIWFjY291bnRPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25zdHJ1Y3QgQXV0aGVudGljYXRpb25SZXF1ZXN0IGJhc2VkIG9uIHJlc3BvbnNlIHR5cGVcclxuICAgIGNvbnN0IG5ld0F1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlIDogQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh0aGlzLmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50T2JqZWN0LCBzY29wZXMsIHRydWUpO1xyXG4gICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICBuZXdBdXRob3JpdHksXHJcbiAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgIHNjb3BlcyxcclxuICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgIHN0YXRlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGdldCBjYWNoZWQgdG9rZW5cclxuICAgIHJldHVybiB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBHZXQgc2NvcGVzIGZvciB0aGUgRW5kcG9pbnQgLSBVc2VkIGluIEFuZ3VsYXIgdG8gdHJhY2sgcHJvdGVjdGVkIGFuZCB1bnByb3RlY3RlZCByZXNvdXJjZXMgd2l0aG91dCBpbnRlcmFjdGlvbiBmcm9tIHRoZSBkZXZlbG9wZXIgYXBwXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW5kcG9pbnRcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0U2NvcGVzRm9yRW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZykgOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGxpc3Qgb2YgdW5wcm90ZWN0ZWRSZXNvdXJjZXMsIG5vIG5lZWQgdG8gc2VuZCB0b2tlbiB0byB0aGVzZSBlbmRwb2ludHMsIHJldHVybiBudWxsLlxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5zaXplID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZ0VuZHBvaW50IGlzIGxpa2UgL2FwaS9Ub2RvIHJlcXVlc3RlZCBlbmRwb2ludCBjYW4gYmUgL2FwaS9Ub2RvLzFcclxuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlZmF1bHQgcmVzb3VyY2Ugd2lsbCBiZSBjbGllbnRpZCBpZiBub3RoaW5nIHNwZWNpZmllZFxyXG4gICAgLy8gQXBwIHdpbGwgdXNlIGlkdG9rZW4gZm9yIGNhbGxzIHRvIGl0c2VsZlxyXG4gICAgLy8gY2hlY2sgaWYgaXQncyBzdGFyaW5nIGZyb20gaHR0cCBvciBodHRwcywgbmVlZHMgdG8gbWF0Y2ggd2l0aCBhcHAgaG9zdFxyXG4gICAgaWYgKGVuZHBvaW50LmluZGV4T2YoXCJodHRwOi8vXCIpID4gLTEgfHwgZW5kcG9pbnQuaW5kZXhPZihcImh0dHBzOi8vXCIpID4gLTEpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRIb3N0RnJvbVVyaShlbmRwb2ludCkgPT09IHRoaXMuZ2V0SG9zdEZyb21VcmkodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIC8vIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxyXG4gICAgLy8gaWYgaXQncyByZWxhdGl2ZSBjYWxsLCB3ZSdsbCB0cmVhdCBpdCBhcyBhcHAgYmFja2VuZCBjYWxsLlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGJvb2xlYW4gZmxhZyB0byBkZXZlbG9wZXIgdG8gaGVscCBpbmZvcm0gaWYgbG9naW4gaXMgaW4gcHJvZ3Jlc3NcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRMb2dpbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwZW5kaW5nQ2FsbGJhY2sgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuICAgIGlmIChwZW5kaW5nQ2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxvZ2luSW5Qcm9ncmVzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbG9naW5JblByb2dyZXNzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHNldGxvZ2luSW5Qcm9ncmVzcyhsb2dpbkluUHJvZ3Jlc3MgOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGxvZ2luSW5Qcm9ncmVzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiByZXR1cm5zIHRoZSBzdGF0dXMgb2YgYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY3F1aXJlVG9rZW5JblByb2dyZXNzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHNldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiByZXR1cm5zIHRoZSBsb2dnZXIgaGFuZGxlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldExvZ2dlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnN5c3RlbS5sb2dnZXI7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBVc2UgdG8gZ2V0IHRoZSByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXHJcbiAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJlZGlyZWN0IFVSTFxyXG4gICAqXHJcbiAgICovXHJcbiAgcHVibGljIGdldFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdG8gZ2V0IHRoZSBwb3N0IGxvZ291dCByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXHJcbiAgICogRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHBvc3QgbG9nb3V0IHJlZGlyZWN0IFVSTFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBnZXQgdGhlIGN1cnJlbnQge0BsaW5rIENvbmZpZ3VyYXRpb259IG9iamVjdCBpbiBNU0FMXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7QGxpbmsgQ29uZmlndXJhdGlvbn1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q3VycmVudENvbmZpZ3VyYXRpb24oKTogQ29uZmlndXJhdGlvbiB7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1NldENvbmZpZ3VyYXRpb25FcnJvcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTdHJpbmcgVXRpbCAoU2hvdWxkIGJlIGV4dHJhY3RlZCB0byBVdGlscy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIGV4dHJhY3QgVVJJIGZyb20gdGhlIGhvc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBVUklcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBob3N0IGZyb20gdGhlIFVSSVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0SG9zdEZyb21VcmkodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gcmVtb3ZlIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gZnJvbSB1cmlcclxuICAgIGxldCBleHRyYWN0ZWRVcmkgPSBTdHJpbmcodXJpKS5yZXBsYWNlKC9eKGh0dHBzPzopXFwvXFwvLywgXCJcIik7XHJcbiAgICBleHRyYWN0ZWRVcmkgPSBleHRyYWN0ZWRVcmkuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgcmV0dXJuIGV4dHJhY3RlZFVyaTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBVdGlscyBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICogQHBhcmFtIHtAbGluayBhY2NvdW50fSBhY2NvdW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKiBAcGFyYW0gc2lsZW50Q2FsbFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gdG9rZW4gdHlwZTogaWRfdG9rZW4gb3IgYWNjZXNzX3Rva2VuXHJcbiAgICpcclxuICAgKi9cclxuICBwcml2YXRlIGdldFRva2VuVHlwZShhY2NvdW50T2JqZWN0OiBBY2NvdW50LCBzY29wZXM6IHN0cmluZ1tdLCBzaWxlbnRDYWxsOiBib29sZWFuKTogc3RyaW5nIHtcclxuXHJcbiAgICAvLyBpZiBhY2NvdW50IGlzIHBhc3NlZCBhbmQgbWF0Y2hlcyB0aGUgYWNjb3VudCBvYmplY3Qvb3Igc2V0IHRvIGdldEFjY291bnQoKSBmcm9tIGNhY2hlXHJcbiAgICAvLyBpZiBjbGllbnQtaWQgaXMgcGFzc2VkIGFzIHNjb3BlLCBnZXQgaWRfdG9rZW4gZWxzZSB0b2tlbi9pZF90b2tlbl90b2tlbiAoaW4gY2FzZSBubyBzZXNzaW9uIGV4aXN0cylcclxuICAgIGxldCB0b2tlblR5cGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBhY3F1aXJlVG9rZW5TaWxlbnRcclxuICAgIGlmIChzaWxlbnRDYWxsKSB7XHJcbiAgICAgIGlmIChBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcclxuICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0b2tlblR5cGUgID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlblR5cGU7XHJcbiAgICB9XHJcbiAgICAvLyBhbGwgb3RoZXIgY2FzZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIUFjY291bnQuY29tcGFyZUFjY291bnRzKGFjY291bnRPYmplY3QsIHRoaXMuZ2V0QWNjb3VudCgpKSkge1xyXG4gICAgICAgIHRva2VuVHlwZSA9IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlblR5cGU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIFNldHMgdGhlIGNhY2hla2V5cyBmb3IgYW5kIHN0b3JlcyB0aGUgYWNjb3VudCBpbmZvcm1hdGlvbiBpbiBjYWNoZVxyXG4gICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICogQHBhcmFtIHN0YXRlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0QWNjb3VudENhY2hlKGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAvLyBDYWNoZSBhY3F1aXJlVG9rZW5BY2NvdW50S2V5XHJcbiAgICBsZXQgYWNjb3VudElkID0gYWNjb3VudCA/IHRoaXMuZ2V0QWNjb3VudElkKGFjY291bnQpIDogQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcblxyXG4gICAgY29uc3QgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZCwgc3RhdGUpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5LCBKU09OLnN0cmluZ2lmeShhY2NvdW50KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogU2V0cyB0aGUgY2FjaGVLZXkgZm9yIGFuZCBzdG9yZXMgdGhlIGF1dGhvcml0eSBpbmZvcm1hdGlvbiBpbiBjYWNoZVxyXG4gICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBdXRob3JpdHlDYWNoZShzdGF0ZTogc3RyaW5nLCBhdXRob3JpdHk6IHN0cmluZykge1xyXG4gICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XHJcbiAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYXV0aG9yaXR5S2V5LCBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5KSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGFjY291bnQsIGF1dGhvcml0eSwgYW5kIG5vbmNlIGluIGNhY2hlXHJcbiAgICogQHBhcmFtIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdFxyXG4gICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhY2NvdW50OiBBY2NvdW50LCBsb2dpblN0YXJ0UGFnZT86IGFueSkge1xyXG4gICAgLy8gQ2FjaGUgYWNjb3VudCBhbmQgYXV0aG9yaXR5XHJcbiAgICBpZiAobG9naW5TdGFydFBhZ2UpIHtcclxuICAgICAgLy8gQ2FjaGUgdGhlIHN0YXRlLCBub25jZSwgYW5kIGxvZ2luIHJlcXVlc3QgZGF0YVxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIGxvZ2luU3RhcnRQYWdlLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJcIik7XHJcblxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xyXG5cclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgIH1cclxuICAgIC8vIENhY2hlIGF1dGhvcml0eUtleVxyXG4gICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpO1xyXG5cclxuICAgIC8vIENhY2hlIG5vbmNlXHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGxvZ2dlZCBpbiBhY2NvdW50XHJcbiAgICogQHBhcmFtIGFjY291bnRcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0QWNjb3VudElkKGFjY291bnQ6IEFjY291bnQpOiBhbnkge1xyXG4gICAgLy9yZXR1cm4gYCR7YWNjb3VudC5hY2NvdW50SWRlbnRpZmllcn1gICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICsgYCR7YWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXJ9YDtcclxuICAgIGxldCBhY2NvdW50SWQ6IHN0cmluZztcclxuICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWNjb3VudElkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIENvbnN0cnVjdCAndG9rZW5SZXF1ZXN0JyBmcm9tIHRoZSBhdmFpbGFibGUgZGF0YSBpbiBhZGFsSWRUb2tlblxyXG4gICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkSURUb2tlblJlcXVlc3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIHtcclxuXHJcbiAgICBsZXQgdG9rZW5SZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB7XHJcbiAgICAgIHNjb3BlczogW3RoaXMuY2xpZW50SWRdLFxyXG4gICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICBhY2NvdW50OiB0aGlzLmdldEFjY291bnQoKSxcclxuICAgICAgZXh0cmFRdWVyeVBhcmFtZXRlcnM6IHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRva2VuUmVxdWVzdDtcclxuICB9XHJcblxyXG4gLy8jZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgZ2V0VGVsZW1ldHJ5TWFuYWdlckZyb21Db25maWcoY29uZmlnOiBUZWxlbWV0cnlPcHRpb25zLCBjbGllbnRJZDogc3RyaW5nKTogVGVsZW1ldHJ5TWFuYWdlciB7XHJcbiAgICBpZiAoIWNvbmZpZykgeyAvLyBpZiB1bnNldFxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgLy8gaWYgc2V0IHRoZW4gdmFsaWRhdGVcclxuICAgIGNvbnN0IHsgYXBwbGljYXRpb25OYW1lLCBhcHBsaWNhdGlvblZlcnNpb24sIHRlbGVtZXRyeUVtaXR0ZXIgfSA9IGNvbmZpZztcclxuICAgIGlmICghYXBwbGljYXRpb25OYW1lIHx8ICFhcHBsaWNhdGlvblZlcnNpb24gfHwgISB0ZWxlbWV0cnlFbWl0dGVyKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWcpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgdmFsaWQgdGhlbiBjb25zdHJ1Y3RcclxuICAgIGNvbnN0IHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSA9IHtcclxuICAgICAgc2RrOiBcIm1zYWwuanNcIiwgLy8gVE9ETyBuZWVkIHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhpcyBmb3IgYW5ndWxhciwgcmVhY3QsIGV0Y1xyXG4gICAgICBzZGtWZXJzaW9uOiBsaWJyYXJ5VmVyc2lvbigpLFxyXG4gICAgICBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgIGFwcGxpY2F0aW9uVmVyc2lvblxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRlbGVtZXRyeU1hbmFnZXJDb25maWc6IFRlbGVtZXRyeUNvbmZpZyA9IHtcclxuICAgICAgcGxhdGZvcm06IHRlbGVtZXRyeVBsYXRmb3JtLFxyXG4gICAgICBjbGllbnRJZDogY2xpZW50SWRcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IFRlbGVtZXRyeU1hbmFnZXIodGVsZW1ldHJ5TWFuYWdlckNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcGVTZXQge1xyXG5cclxuICAgIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZXJlIGFyZSBkdXAgc2NvcGVzIGluIGEgZ2l2ZW4gcmVxdWVzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgaW50ZXJzZWN0aW5nIHNjb3BlcyBpc24ndCBhIGdyZWF0IG5hbWUgZm9yIGR1cGxpY2F0ZSBjaGVja2VyXHJcbiAgc3RhdGljIGlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNhY2hlZFNjb3Blcy5pbmRleE9mKHNjb3Blc1tpXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjb250YWluc1Njb3BlKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xyXG4gICAgcmV0dXJuIHNjb3Blcy5ldmVyeSgodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gY2FjaGVkU2NvcGVzLmluZGV4T2YodmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA+PSAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvTG93ZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcclxuICBzdGF0aWMgY29udmVydFRvTG93ZXJDYXNlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHNjb3Blcy5tYXAoc2NvcGUgPT4gc2NvcGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgb25lIGVsZW1lbnQgZnJvbSBhIHNjb3BlIGFycmF5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3BlXHJcbiAgICovXHJcbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXHJcbiAgc3RhdGljIHJlbW92ZUVsZW1lbnQoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gc2NvcGVzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2NvcGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2UgdGhlIHNjb3BlcyBpbnRvIGEgZm9ybWF0dGVkIHNjb3BlTGlzdFxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICBzdGF0aWMgcGFyc2VTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xyXG4gICAgbGV0IHNjb3BlTGlzdDogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmIChzY29wZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgc2NvcGVMaXN0ICs9IChpICE9PSBzY29wZXMubGVuZ3RoIC0gMSkgPyBzY29wZXNbaV0gKyBcIiBcIiA6IHNjb3Blc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzY29wZUxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcclxuICovXHJcbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHtcclxuICAgIHNjb3Blcz86IEFycmF5PHN0cmluZz47XHJcbiAgICBleHRyYVNjb3Blc1RvQ29uc2VudD86IEFycmF5PHN0cmluZz47XHJcbiAgICBwcm9tcHQ/OiBzdHJpbmc7XHJcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IFN0cmluZ0RpY3Q7XHJcbiAgICBjbGFpbXNSZXF1ZXN0Pzogc3RyaW5nO1xyXG4gICAgYXV0aG9yaXR5Pzogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nO1xyXG4gICAgYWNjb3VudD86IEFjY291bnQ7XHJcbiAgICBzaWQ/OiBzdHJpbmc7XHJcbiAgICBsb2dpbkhpbnQ/OiBzdHJpbmc7XHJcbiAgICBmb3JjZVJlZnJlc2g/OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIHtcclxuICAgIGlmICghcmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGNsYWltcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2xhaW1zID0gSlNPTi5wYXJzZShyZXF1ZXN0LmNsYWltc1JlcXVlc3QpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IE1vcmUgdmFsaWRhdGlvbiB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHNlcnZlciB0ZWFtIHRlbGxzIHVzIGhvdyB0aGV5IGhhdmUgYWN0dWFsbHkgaW1wbGVtZW50ZWQgY2xhaW1zXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vQ3J5cHRvVXRpbHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICcuL1N0cmluZ1V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9rZW5VdGlscyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlY29kZSBhIEpXVFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGp3dFRva2VuXHJcbiAgICovXHJcbiAgc3RhdGljIGRlY29kZUp3dChqd3RUb2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGp3dFRva2VuKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGlkVG9rZW5QYXJ0c1JlZ2V4ID0gL14oW15cXC5cXHNdKilcXC4oW15cXC5cXHNdKylcXC4oW15cXC5cXHNdKikkLztcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBpZFRva2VuUGFydHNSZWdleC5leGVjKGp3dFRva2VuKTtcclxuICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcclxuICAgICAgLy90aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIud2FybihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBpcyBub3QgcGFyc2VhYmxlLlwiKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmFja2VkVG9rZW4gPSB7XHJcbiAgICAgIGhlYWRlcjogbWF0Y2hlc1sxXSxcclxuICAgICAgSldTUGF5bG9hZDogbWF0Y2hlc1syXSxcclxuICAgICAgSldTU2lnOiBtYXRjaGVzWzNdXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNyYWNrZWRUb2tlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4dHJhY3QgSWRUb2tlbiBieSBkZWNvZGluZyB0aGUgUkFXSWRUb2tlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVuY29kZWRJZFRva2VuXHJcbiAgICovXHJcbiAgc3RhdGljIGV4dHJhY3RJZFRva2VuKGVuY29kZWRJZFRva2VuOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgLy8gaWQgdG9rZW4gd2lsbCBiZSBkZWNvZGVkIHRvIGdldCB0aGUgdXNlcm5hbWVcclxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHRoaXMuZGVjb2RlSnd0KGVuY29kZWRJZFRva2VuKTtcclxuICAgIGlmICghZGVjb2RlZFRva2VuKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYmFzZTY0SWRUb2tlbiA9IGRlY29kZWRUb2tlbi5KV1NQYXlsb2FkO1xyXG4gICAgICBjb25zdCBiYXNlNjREZWNvZGVkID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKGJhc2U2NElkVG9rZW4pO1xyXG4gICAgICBpZiAoIWJhc2U2NERlY29kZWQpIHtcclxuICAgICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5pbmZvKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGNvdWxkIG5vdCBiZSBiYXNlNjQgdXJsIHNhZmUgZGVjb2RlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRUNNQSBzY3JpcHQgaGFzIEpTT04gYnVpbHQtaW4gc3VwcG9ydFxyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShiYXNlNjREZWNvZGVkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5lcnJvcihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgZGVjb2RlZFwiICsgZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENsaWVudEluZm8gfSBmcm9tIFwiLi9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XHJcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XHJcblxyXG4vKipcclxuICogYWNjb3VudElkZW50aWZpZXIgICAgICAgY29tYmluYXRpb24gb2YgaWRUb2tlbi51aWQgYW5kIGlkVG9rZW4udXRpZFxyXG4gKiBob21lQWNjb3VudElkZW50aWZpZXIgICBjb21iaW5hdGlvbiBvZiBjbGllbnRJbmZvLnVpZCBhbmQgY2xpZW50SW5mby51dGlkXHJcbiAqIHVzZXJOYW1lICAgICAgICAgICAgICAgIGlkVG9rZW4ucHJlZmVycmVkX3VzZXJuYW1lXHJcbiAqIG5hbWUgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4ubmFtZVxyXG4gKiBpZFRva2VuICAgICAgICAgICAgICAgICBpZFRva2VuXHJcbiAqIHNpZCAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4uc2lkIC0gc2Vzc2lvbiBpZGVudGlmaWVyXHJcbiAqIGVudmlyb25tZW50ICAgICAgICAgICAgIGlkdG9rZW4uaXNzdWVyICh0aGUgYXV0aG9yaXR5IHRoYXQgaXNzdWVzIHRoZSB0b2tlbilcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50IHtcclxuXHJcbiAgICBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWRUb2tlbjogU3RyaW5nRGljdDsgLy8gd2lsbCBiZSBkZXByZWNhdGVkIHNvb25cclxuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XHJcbiAgICBzaWQ6IHN0cmluZztcclxuICAgIGVudmlyb25tZW50OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIEFjY291bnQgT2JqZWN0XHJcbiAgICAgKiBAcHJhcmFtIGFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgKiBAcGFyYW0gdXNlck5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIHNpZFxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3QsIHNpZDogc3RyaW5nLCAgZW52aXJvbm1lbnQ6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmFjY291bnRJZGVudGlmaWVyID0gYWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXHJcbiAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW5DbGFpbXM7XHJcbiAgICAgIHRoaXMuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5DbGFpbXM7XHJcbiAgICAgIHRoaXMuc2lkID0gc2lkO1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIGNsaWVudEluZm9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnQoaWRUb2tlbjogSWRUb2tlbiwgY2xpZW50SW5mbzogQ2xpZW50SW5mbyk6IEFjY291bnQge1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYWNjb3VudElkZW50aWZpZXJcclxuICAgICAgICBjb25zdCBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nID0gaWRUb2tlbi5vYmplY3RJZCB8fCAgaWRUb2tlbi5zdWJqZWN0O1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgICAgY29uc3QgdWlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51aWQgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHV0aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnV0aWQgOiBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHVpZCkgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkodXRpZCkpIHtcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZGVudGlmaWVyID0gQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHVpZCkgKyBcIi5cIiArIENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1dGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50KGFjY291bnRJZGVudGlmaWVyLCBob21lQWNjb3VudElkZW50aWZpZXIsIGlkVG9rZW4ucHJlZmVycmVkTmFtZSwgaWRUb2tlbi5uYW1lLCBpZFRva2VuLmNsYWltcywgaWRUb2tlbi5zaWQsIGlkVG9rZW4uaXNzdWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxzIGZ1bmN0aW9uIHRvIGNvbXBhcmUgdHdvIEFjY291bnQgb2JqZWN0cyAtIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHNhbWUgdXNlciBhY2NvdW50IGlzIGxvZ2dlZCBpblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhMTogQWNjb3VudCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBhMjogQWNjb3VudCBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbXBhcmVBY2NvdW50cyhhMTogQWNjb3VudCwgYTI6IEFjY291bnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWExIHx8ICFhMikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhMS5ob21lQWNjb3VudElkZW50aWZpZXIgJiYgYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XHJcbmltcG9ydCB7IEFBRFRydXN0ZWRIb3N0TGlzdCB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYWRBdXRob3JpdHkgZXh0ZW5kcyBBdXRob3JpdHkge1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnQ6IHN0cmluZyA9IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vbi9kaXNjb3ZlcnkvaW5zdGFuY2VcIjtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gYCR7QWFkQXV0aG9yaXR5LkFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnR9P2FwaS12ZXJzaW9uPTEuMCZhdXRob3JpemF0aW9uX2VuZHBvaW50PSR7dGhpcy5DYW5vbmljYWxBdXRob3JpdHl9b2F1dGgyL3YyLjAvYXV0aG9yaXplYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKGF1dGhvcml0eSwgdmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xyXG4gICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcclxuICAgKiBPbmx5IHJlc3BvbmRzIHdpdGggdGhlIGVuZHBvaW50XHJcbiAgICovXHJcbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdFByb21pc2U6IFByb21pc2U8c3RyaW5nPiA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgcmVzb2x2ZSh0aGlzLkRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QoaG9zdCkpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsaWVudDogWGhyQ2xpZW50ID0gbmV3IFhockNsaWVudCgpO1xyXG5cclxuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyh0aGlzLkFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwsIFwiR0VUXCIsIHRydWUpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGhvc3QgaXMgaW4gYSBsaXN0IG9mIHRydXN0ZWQgaG9zdHNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gVGhlIGhvc3QgdG8gbG9vayB1cFxyXG4gICAqL1xyXG4gIHB1YmxpYyBJc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3Q6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFBRFRydXN0ZWRIb3N0TGlzdFtob3N0LnRvTG93ZXJDYXNlKCldO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuLyoqXHJcbiAqIFhIUiBjbGllbnQgZm9yIEpTT04gZW5kcG9pbnRzXHJcbiAqIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2FzeW5jLXByb21pc2VcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFhockNsaWVudCB7XHJcbiAgcHVibGljIHNlbmRSZXF1ZXN0QXN5bmModXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBlbmFibGVDYWNoaW5nPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIC8qYXN5bmM6ICovIHRydWUpO1xyXG4gICAgICBpZiAoZW5hYmxlQ2FjaGluZykge1xyXG4gICAgICAgIC8vIFRPRE86IChzaGl2YikgZW5zdXJlIHRoYXQgdGhpcyBjYW4gYmUgY2FjaGVkXHJcbiAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwiUHVibGljXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB4aHIub25sb2FkID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDMwMCkge1xyXG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB4aHIub25lcnJvciA9IChldikgPT4ge1xyXG4gICAgICAgIHJlamVjdCh4aHIuc3RhdHVzKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogYW55IHtcclxuICAgIHZhciBqc29uUmVzcG9uc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIGlmIChqc29uUmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiBqc29uUmVzcG9uc2UuZXJyb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyByZXNwb25zZVRleHQ7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlVGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCMmNBdXRob3JpdHkgZXh0ZW5kcyBBYWRBdXRob3JpdHkge1xyXG4gIHB1YmxpYyBzdGF0aWMgQjJDX1BSRUZJWDogU3RyaW5nID0gXCJ0ZnBcIjtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSBVcmxVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eSk7XHJcblxyXG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHM7XHJcbiAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYGh0dHBzOi8vJHt1cmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoU2VnbWVudHNbMF19LyR7cGF0aFNlZ21lbnRzWzFdfS8ke3BhdGhTZWdtZW50c1syXX0vYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcclxuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XHJcbiAgICovXHJcbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICByZXNvbHZlKHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCkpO1xyXG5cclxuICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QodGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCkpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgcmVqZWN0KENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnlFbWl0dGVyIH0gZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeVR5cGVzXCJcclxuXHJcbi8qKlxyXG4gKiBDYWNoZSBsb2NhdGlvbiBvcHRpb25zIHN1cHBvcnRlZCBieSBNU0FMIGFyZTpcclxuICogLSBsb2NhbCBzdG9yYWdlOiBNU0FMIHVzZXMgYnJvd3NlcnMgbG9jYWwgc3RvcmFnZSB0byBzdG9yZSBpdHMgY2FjaGVcclxuICogLSBzZXNzaW9uIHN0b3JhZ2U6IE1TQUwgdXNlcyB0aGUgYnJvd3NlcnMgc2Vzc2lvbiBzdG9yYWdlIHRvIHN0b3JlIGl0cyBjYWNoZVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FjaGVMb2NhdGlvbiA9IFwibG9jYWxTdG9yYWdlXCIgfCBcInNlc3Npb25TdG9yYWdlXCI7XHJcblxyXG4vKipcclxuICogRGVmYXVsdHMgZm9yIHRoZSBDb25maWd1cmF0aW9uIE9wdGlvbnNcclxuICovXHJcbmNvbnN0IEZSQU1FX1RJTUVPVVQgPSA2MDAwO1xyXG5jb25zdCBPRkZTRVQgPSAzMDA7XHJcbmNvbnN0IE5BVklHQVRFX0ZSQU1FX1dBSVQgPSA1MDA7XHJcblxyXG5cclxuLyoqXHJcbiAqIEB0eXBlIEF1dGhPcHRpb25zOiBVc2UgdGhpcyB0byBjb25maWd1cmUgdGhlIGF1dGggb3B0aW9ucyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICpcclxuICogIC0gY2xpZW50SWQgICAgICAgICAgICAgICAgICAgIC0gQ2xpZW50IElEIG9mIHlvdXIgYXBwIHJlZ2lzdGVyZWQgd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlldyBpbiBNaWNyb3NvZnQgSWRlbnRpdHkgUGxhdGZvcm1cclxuICogIC0gYXV0aG9yaXR5ICAgICAgICAgICAgICAgICAgIC0gWW91IGNhbiBjb25maWd1cmUgYSBzcGVjaWZpYyBhdXRob3JpdHksIGRlZmF1bHRzIHRvIFwiIFwiIG9yIFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXHJcbiAqICAtIHZhbGlkYXRlQXV0aG9yaXR5ICAgICAgICAgICAtIFVzZWQgdG8gdHVybiBhdXRob3JpdHkgdmFsaWRhdGlvbiBvbi9vZmYuIFdoZW4gc2V0IHRvIHRydWUgKGRlZmF1bHQpLCBNU0FMIHdpbGwgY29tcGFyZSB0aGUgYXBwbGljYXRpb24ncyBhdXRob3JpdHkgYWdhaW5zdCB3ZWxsLWtub3duIFVSTHMgdGVtcGxhdGVzIHJlcHJlc2VudGluZyB3ZWxsLWZvcm1lZCBhdXRob3JpdGllcy4gSXQgaXMgdXNlZnVsIHdoZW4gdGhlIGF1dGhvcml0eSBpcyBvYnRhaW5lZCBhdCBydW4gdGltZSB0byBwcmV2ZW50IE1TQUwgZnJvbSBkaXNwbGF5aW5nIGF1dGhlbnRpY2F0aW9uIHByb21wdHMgZnJvbSBtYWxpY2lvdXMgcGFnZXMuXHJcbiAqICAtIHJlZGlyZWN0VXJpICAgICAgICAgICAgICAgICAtIFRoZSByZWRpcmVjdCBVUkkgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHNob3VsZCBiZSBzYW1lIGFzIHRoZSB2YWx1ZSBpbiB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5EZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gKiAgLSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgICAgICAgLSBVc2VkIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoaXMgbG9jYXRpb24gYWZ0ZXIgbG9nb3V0LiBEZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gKiAgLSBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsICAgLSBVc2VkIHRvIHR1cm4gb2ZmIGRlZmF1bHQgbmF2aWdhdGlvbiB0byBzdGFydCBwYWdlIGFmdGVyIGxvZ2luLiBEZWZhdWx0IGlzIHRydWUuIFRoaXMgaXMgdXNlZCBvbmx5IGZvciByZWRpcmVjdCBmbG93cy5cclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIEF1dGhPcHRpb25zID0ge1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXR5Pzogc3RyaW5nO1xyXG4gIHZhbGlkYXRlQXV0aG9yaXR5PzogYm9vbGVhbjtcclxuICByZWRpcmVjdFVyaT86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaT86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG4gIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw/OiBib29sZWFuO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYmVsb3cgY2FjaGUgY29uZmlndXJhdGlvbiBvcHRpb25zOlxyXG4gKlxyXG4gKiAtIGNhY2hlTG9jYXRpb24gICAgICAgICAgICAtIFVzZWQgdG8gc3BlY2lmeSB0aGUgY2FjaGVMb2NhdGlvbiB1c2VyIHdhbnRzIHRvIHNldC4gVmFsaWQgdmFsdWVzIGFyZSBcImxvY2FsU3RvcmFnZVwiIGFuZCBcInNlc3Npb25TdG9yYWdlXCJcclxuICogLSBzdG9yZUF1dGhTdGF0ZUluQ29va2llICAgLSBJZiBzZXQsIE1TQUwgc3RvcmUncyB0aGUgYXV0aCByZXF1ZXN0IHN0YXRlIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIG9mIHRoZSBhdXRoIGZsb3dzIGluIHRoZSBicm93c2VyIGNvb2tpZXMuIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENhY2hlT3B0aW9ucyA9IHtcclxuICBjYWNoZUxvY2F0aW9uPzogQ2FjaGVMb2NhdGlvbjtcclxuICBzdG9yZUF1dGhTdGF0ZUluQ29va2llPzogYm9vbGVhbjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUZWxlbWV0cnkgQ29uZmlnIE9wdGlvbnNcclxuICogLSBhcHBsaWNhdGlvbk5hbWUgICAgICAgICAgICAgIC0gTmFtZSBvZiB0aGUgY29uc3VtaW5nIGFwcHMgYXBwbGljYXRpb25cclxuICogLSBhcHBsaWNhdGlvblZlcnNpb24gICAgICAgICAgIC0gVmVyaXNvbiBvZiB0aGUgY29uc3VtaW5nIGFwcGxpY2F0aW9uXHJcbiAqIC0gdGVsZW1ldHJ5RW1pdHRlciAgICAgICAgICAgICAtIEZ1bmN0aW9uIHdoZXJlIHRlbGVtZXRyeSBldmVudHMgYXJlIGZsdXNoZWQgdG9cclxuICovXHJcbmV4cG9ydCB0eXBlIFRlbGVtZXRyeU9wdGlvbnMgPSB7XHJcbiAgYXBwbGljYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25WZXJzaW9uOiBzdHJpbmc7XHJcbiAgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlclxyXG4gLy9UT0RPLCBhZGQgb25seUFkZEZhaWx1cmVUZWxlbWV0cnkgb3B0aW9uXHJcbn07XHJcblxyXG4vKipcclxuICogTGlicmFyeSBTcGVjaWZpYyBPcHRpb25zXHJcbiAqXHJcbiAqIC0gbG9nZ2VyICAgICAgICAgICAgICAgICAgICAgICAtIFVzZWQgdG8gaW5pdGlhbGl6ZSB0aGUgTG9nZ2VyIG9iamVjdDsgVE9ETzogRXhwYW5kIG9uIGxvZ2dlciBkZXRhaWxzIG9yIGxpbmsgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gbG9nZ2VyXHJcbiAqIC0gbG9hZEZyYW1lVGltZW91dCAgICAgICAgICAgICAtIG1heGltdW0gdGltZSB0aGUgbGlicmFyeSBzaG91bGQgd2FpdCBmb3IgYSBmcmFtZSB0byBsb2FkXHJcbiAqIC0gdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIHNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XHJcbiAqIC0gbmF2aWdhdGVGcmFtZVdhaXQgICAgICAgICAgICAtIHNldHMgdGhlIHdhaXQgdGltZSBmb3IgaGlkZGVuIGlGcmFtZSBuYXZpZ2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTeXN0ZW1PcHRpb25zID0ge1xyXG4gIGxvZ2dlcj86IExvZ2dlcjtcclxuICBsb2FkRnJhbWVUaW1lb3V0PzogbnVtYmVyO1xyXG4gIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM/OiBudW1iZXI7XHJcbiAgbmF2aWdhdGVGcmFtZVdhaXQ/OiBudW1iZXI7XHJcbiAgdGVsZW1ldHJ5PzogVGVsZW1ldHJ5T3B0aW9uc1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcC9GcmFtZXdvcmsgc3BlY2lmaWMgZW52aXJvbm1lbnQgc3VwcG9ydFxyXG4gKlxyXG4gKiAtIGlzQW5ndWxhciAgICAgICAgICAgICAgICAtIGZsYWcgc2V0IHRvIGRldGVybWluZSBpZiBpdCBpcyBBbmd1bGFyIEZyYW1ld29yay4gTVNBTCB1c2VzIHRoaXMgdG8gYnJvYWRjYXN0IHRva2Vucy4gTW9yZSB0byBjb21lIGhlcmU6IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXHJcbiAqIC0gdW5wcm90ZWN0ZWRSZXNvdXJjZXMgICAgIC0gQXJyYXkgb2YgVVJJJ3Mgd2hpY2ggYXJlIHVucHJvdGVjdGVkIHJlc291cmNlcy4gTVNBTCB3aWxsIG5vdCBhdHRhY2ggYSB0b2tlbiB0byBvdXRnb2luZyByZXF1ZXN0cyB0aGF0IGhhdmUgdGhlc2UgVVJJLiBEZWZhdWx0cyB0byAnbnVsbCcuXHJcbiAqIC0gcHJvdGVjdGVkUmVzb3VyY2VNYXAgICAgIC0gVGhpcyBpcyBtYXBwaW5nIG9mIHJlc291cmNlcyB0byBzY29wZXMgdXNlZCBieSBNU0FMIGZvciBhdXRvbWF0aWNhbGx5IGF0dGFjaGluZyBhY2Nlc3MgdG9rZW5zIGluIHdlYiBBUEkgY2FsbHMuQSBzaW5nbGUgYWNjZXNzIHRva2VuIGlzIG9idGFpbmVkIGZvciB0aGUgcmVzb3VyY2UuIFNvIHlvdSBjYW4gbWFwIGEgc3BlY2lmaWMgcmVzb3VyY2UgcGF0aCBhcyBmb2xsb3dzOiB7XCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vdjEuMC9tZVwiLCBbXCJ1c2VyLnJlYWRcIl19LCBvciB0aGUgYXBwIFVSTCBvZiB0aGUgcmVzb3VyY2UgYXM6IHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS9cIiwgW1widXNlci5yZWFkXCIsIFwibWFpbC5zZW5kXCJdfS4gVGhpcyBpcyByZXF1aXJlZCBmb3IgQ09SUyBjYWxscy5cclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIEZyYW1ld29ya09wdGlvbnMgPSB7XHJcbiAgaXNBbmd1bGFyPzogYm9vbGVhbjtcclxuICB1bnByb3RlY3RlZFJlc291cmNlcz86IEFycmF5PHN0cmluZz47XHJcbiAgcHJvdGVjdGVkUmVzb3VyY2VNYXA/OiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIGFuZCBpbml0aWFsaXplIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbi5cclxuICpcclxuICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgaW1wb3J0YW50IGVsZW1lbnRzIG9mIE1TQUwgZnVuY3Rpb25hbGl0eTpcclxuICogLSBhdXRoOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgYXV0aCBlbGVtZW50cyBsaWtlIGNsaWVudElELCAgYXV0aG9yaXR5IHVzZWQgZm9yIGF1dGhlbnRpY2F0aW5nIGFnYWluc3QgdGhlIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxyXG4gKiAtIGNhY2hlOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgY2FjaGUgbG9jYXRpb24gYW5kIHdoZXRoZXIgdG8gc3RvcmUgY2FjaGUgaW4gY29va2llc1xyXG4gKiAtIHN5c3RlbTogdGhpcyBpcyB3aGVyZSB5b3UgY2FuIGNvbmZpZ3VyZSB0aGUgbG9nZ2VyLCBmcmFtZSB0aW1lb3V0IGV0Yy5cclxuICogLSBmcmFtZXdvcms6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIHJ1bm5pbmcgbW9kZSBvZiBhbmd1bGFyLiBNb3JlIHRvIGNvbWUgaGVyZSBzb29uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29uZmlndXJhdGlvbiA9IHtcclxuICBhdXRoOiBBdXRoT3B0aW9ucyxcclxuICBjYWNoZT86IENhY2hlT3B0aW9ucyxcclxuICBzeXN0ZW0/OiBTeXN0ZW1PcHRpb25zLFxyXG4gIGZyYW1ld29yaz86IEZyYW1ld29ya09wdGlvbnNcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQVVUSF9PUFRJT05TOiBBdXRoT3B0aW9ucyA9IHtcclxuICBjbGllbnRJZDogXCJcIixcclxuICBhdXRob3JpdHk6IG51bGwsXHJcbiAgdmFsaWRhdGVBdXRob3JpdHk6IHRydWUsXHJcbiAgcmVkaXJlY3RVcmk6ICgpID0+IFVybFV0aWxzLmdldERlZmF1bHRSZWRpcmVjdFVyaSgpLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogKCkgPT4gVXJsVXRpbHMuZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCksXHJcbiAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybDogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9DQUNIRV9PUFRJT05TOiBDYWNoZU9wdGlvbnMgPSB7XHJcbiAgY2FjaGVMb2NhdGlvbjogXCJzZXNzaW9uU3RvcmFnZVwiLFxyXG4gIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xyXG4gIGxvZ2dlcjogbmV3IExvZ2dlcihudWxsKSxcclxuICBsb2FkRnJhbWVUaW1lb3V0OiBGUkFNRV9USU1FT1VULFxyXG4gIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IE9GRlNFVCxcclxuICBuYXZpZ2F0ZUZyYW1lV2FpdDogTkFWSUdBVEVfRlJBTUVfV0FJVFxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUzogRnJhbWV3b3JrT3B0aW9ucyA9IHtcclxuICBpc0FuZ3VsYXI6IGZhbHNlLFxyXG4gIHVucHJvdGVjdGVkUmVzb3VyY2VzOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxyXG4gIHByb3RlY3RlZFJlc291cmNlTWFwOiBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1TQUwgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2hlbiBub3QgZXhwbGljaXRseSBjb25maWd1cmVkIGZyb20gYXBwIGRldmVsb3BlclxyXG4gKlxyXG4gKiBAcGFyYW0gVEF1dGhPcHRpb25zXHJcbiAqIEBwYXJhbSBUQ2FjaGVPcHRpb25zXHJcbiAqIEBwYXJhbSBUU3lzdGVtT3B0aW9uc1xyXG4gKiBAcGFyYW0gVEZyYW1ld29ya09wdGlvbnNcclxuICpcclxuICogQHJldHVybnMgVENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlndXJhdGlvbih7IGF1dGgsIGNhY2hlID0ge30sIHN5c3RlbSA9IHt9LCBmcmFtZXdvcmsgPSB7fX06IENvbmZpZ3VyYXRpb24pOiBDb25maWd1cmF0aW9uIHtcclxuICBjb25zdCBvdmVybGF5ZWRDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBhdXRoOiB7IC4uLkRFRkFVTFRfQVVUSF9PUFRJT05TLCAuLi5hdXRoIH0sXHJcbiAgICBjYWNoZTogeyAuLi5ERUZBVUxUX0NBQ0hFX09QVElPTlMsIC4uLmNhY2hlIH0sXHJcbiAgICBzeXN0ZW06IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4uc3lzdGVtIH0sXHJcbiAgICBmcmFtZXdvcms6IHsgLi4uREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUywgLi4uZnJhbWV3b3JrIH1cclxuICB9O1xyXG4gIHJldHVybiBvdmVybGF5ZWRDb25maWc7XHJcbn1cclxuXHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UgPSB7XHJcbiAgICBpbnRlcmFjdGlvblJlcXVpcmVkOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnRlcmFjdGlvbl9yZXF1aXJlZFwiXHJcbiAgICB9LFxyXG4gICAgY29uc2VudFJlcXVpcmVkOiB7XHJcbiAgICAgICAgY29kZTogXCJjb25zZW50X3JlcXVpcmVkXCJcclxuICAgIH0sXHJcbiAgICBsb2dpblJlcXVpcmVkOiB7XHJcbiAgICAgICAgY29kZTogXCJsb2dpbl9yZXF1aXJlZFwiXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZSB1c2VyIGlzIHJlcXVpcmVkIHRvIHBlcmZvcm0gYW4gaW50ZXJhY3RpdmUgdG9rZW4gcmVxdWVzdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIGV4dGVuZHMgU2VydmVyRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGVycm9yU3RyaW5nOiBzdHJpbmcpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25SZXF1aXJlZENvZGVzID0gW1xyXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbnRlcmFjdGlvblJlcXVpcmVkLmNvZGUsXHJcbiAgICAgICAgICAgIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmNvbnNlbnRSZXF1aXJlZC5jb2RlLFxyXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5sb2dpblJlcXVpcmVkLmNvZGVcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JTdHJpbmcgJiYgaW50ZXJhY3Rpb25SZXF1aXJlZENvZGVzLmluZGV4T2YoZXJyb3JTdHJpbmcpID4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UubG9naW5SZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmludGVyYWN0aW9uUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ29uc2VudFJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmNvbnNlbnRSZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICB1bmlxdWVJZDogc3RyaW5nO1xyXG4gICAgdGVuYW50SWQ6IHN0cmluZztcclxuICAgIHRva2VuVHlwZTogc3RyaW5nO1xyXG4gICAgaWRUb2tlbjogSWRUb2tlbjtcclxuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XHJcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgZXhwaXJlc09uOiBEYXRlO1xyXG4gICAgYWNjb3VudDogQWNjb3VudDtcclxuICAgIGFjY291bnRTdGF0ZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkoc3RhdGU6IHN0cmluZykgOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgICB0b2tlblR5cGU6IFwiXCIsXHJcbiAgICAgICAgaWRUb2tlbjogbnVsbCxcclxuICAgICAgICBpZFRva2VuQ2xhaW1zOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxyXG4gICAgICAgIHNjb3BlczogbnVsbCxcclxuICAgICAgICBleHBpcmVzT246IG51bGwsXHJcbiAgICAgICAgYWNjb3VudDogbnVsbCxcclxuICAgICAgICBhY2NvdW50U3RhdGU6IHN0YXRlXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuLi9CMmNBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQUFEVHJ1c3RlZEhvc3RMaXN0IH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBURU5BTlRfUExBQ0VIT0xERVIsIEVWRU5UX05BTUVfUFJFRklYIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL0NyeXB0b1V0aWxzXCI7XHJcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NydWJUZW5hbnRGcm9tVXJpID0gKHVyaTogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBVcmxVdGlscy5HZXRVcmxDb21wb25lbnRzKHVyaSk7XHJcblxyXG4gICAgLy8gdmFsaWRhdGUgdHJ1c3RlZCBob3N0XHJcbiAgICBpZiAoIUFBRFRydXN0ZWRIb3N0TGlzdFt1cmwuSG9zdE5hbWVBbmRQb3J0LnRvTG9jYWxlTG93ZXJDYXNlKCldKSB7XHJcbiAgICAgICAgLy8gU2hvdWxkIHRoaXMgcmV0dXJuIG51bGwgb3Igd2hhdCB3YXMgcGFzc2VkP1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhdGhQYXJhbXMgPSB1cmwuUGF0aFNlZ21lbnRzO1xyXG5cclxuICAgIGlmIChwYXRoUGFyYW1zICYmIHBhdGhQYXJhbXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICBjb25zdCB0ZW5hbnRQb3NpdGlvbiA9IHBhdGhQYXJhbXNbMV0gPT09ICBCMmNBdXRob3JpdHkuQjJDX1BSRUZJWCA/IDIgOiAxO1xyXG4gICAgICAgIGlmICh0ZW5hbnRQb3NpdGlvbiA8IHBhdGhQYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhdGhQYXJhbXNbdGVuYW50UG9zaXRpb25dID0gVEVOQU5UX1BMQUNFSE9MREVSO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gIGAke3VybC5Qcm90b2NvbH0vLyR7dXJsLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoUGFyYW1zLmpvaW4oXCIvXCIpfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFzaFBlcnNvbmFsSWRlbnRpZmllciA9ICh2YWx1ZVRvSGFzaDogc3RyaW5nKSA9PiB7XHJcbiAgICAvLyBUT0RPIHNoYTI1NiB0aGlzXHJcbiAgICAvLyBDdXJyZW50IHRlc3QgcnVubmVyIGlzIGJlaW5nIGZ1bm55IHdpdGggbm9kZSBsaWJzIHRoYXQgYXJlIHdlYnBhY2tlZCBhbnl3YXlcclxuICAgIC8vIG5lZWQgYSBkaWZmZXJlbnQgc29sdXRpb25cclxuICAgIHJldHVybiBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodmFsdWVUb0hhc2gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBlbmRFdmVudE5hbWVQcmVmaXggPSAoc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7RVZFTlRfTkFNRV9QUkVGSVh9JHtzdWZmaXggfHwgXCJcIn1gO1xyXG4iLCJleHBvcnQgeyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XHJcbmV4cG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xyXG5leHBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0xvZ2dlclwiO1xyXG5leHBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5leHBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcclxuZXhwb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmV4cG9ydCB7IENhY2hlUmVzdWx0IH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcclxuZXhwb3J0IHsgQ2FjaGVMb2NhdGlvbiwgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuZXhwb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XHJcbmV4cG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xyXG5cclxuLy8gRXJyb3JzXHJcbmV4cG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5leHBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuZXhwb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9TZXJ2ZXJFcnJvclwiO1xyXG5leHBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuZXhwb3J0IHsgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcclxuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbktleSB7XHJcblxyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgc2NvcGVzOiBzdHJpbmc7XHJcbiAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5hdXRob3JpdHkgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5KTtcclxuICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xyXG4gICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodWlkKSArIFwiLlwiICsgQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHV0aWQpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlblZhbHVlIHtcclxuXHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBpZFRva2VuOiBzdHJpbmc7XHJcbiAgZXhwaXJlc0luOiBzdHJpbmc7XHJcbiAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuO1xyXG4gICAgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47XHJcbiAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IGhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgdmFsaWRhdGVDbGFpbXNSZXF1ZXN0IH0gZnJvbSBcIi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIlxyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5pbXBvcnQgeyBTU09UeXBlcywgQ29uc3RhbnRzLCBQcm9tcHRTdGF0ZSwgQmxhY2tsaXN0ZWRFUVBhcmFtcywgbGlicmFyeVZlcnNpb24gfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBOb25jZTogT0lEQyBOb25jZSBkZWZpbml0aW9uOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNJRFRva2VuXHJcbiAqIFN0YXRlOiBPQXV0aCBTcGVjOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTEwLjEyXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB7XHJcblxyXG4gIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XHJcbiAgY2xpZW50SWQ6IHN0cmluZztcclxuICBzY29wZXM6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIG5vbmNlOiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgLy8gdGVsZW1ldHJ5IGluZm9ybWF0aW9uXHJcbiAgeENsaWVudFZlcjogc3RyaW5nO1xyXG4gIHhDbGllbnRTa3U6IHN0cmluZztcclxuICBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XHJcblxyXG4gIHJlc3BvbnNlVHlwZTogc3RyaW5nO1xyXG4gIHJlZGlyZWN0VXJpOiBzdHJpbmc7XHJcblxyXG4gIHByb21wdFZhbHVlOiBzdHJpbmc7XHJcbiAgY2xhaW1zVmFsdWU6IHN0cmluZztcclxuXHJcbiAgcXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XHJcbiAgZXh0cmFRdWVyeVBhcmFtZXRlcnM6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlID8gdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5DYW5vbmljYWxBdXRob3JpdHkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICogQHBhcmFtIHNjb3BlXHJcbiAgICogQHBhcmFtIHJlc3BvbnNlVHlwZVxyXG4gICAqIEBwYXJhbSByZWRpcmVjdFVyaVxyXG4gICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yIChhdXRob3JpdHk6IEF1dGhvcml0eSwgY2xpZW50SWQ6IHN0cmluZywgc2NvcGU6IEFycmF5PHN0cmluZz4sIHJlc3BvbnNlVHlwZTogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gYXV0aG9yaXR5O1xyXG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgaWYgKCFzY29wZSkge1xyXG4gICAgICB0aGlzLnNjb3BlcyA9IFtjbGllbnRJZF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjb3BlcyA9IFsgLi4uc2NvcGUgXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vbmNlID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHN0YXRlKSA/ICBDcnlwdG9VdGlscy5jcmVhdGVOZXdHdWlkKCkgKyBcInxcIiArIHN0YXRlICAgOiBDcnlwdG9VdGlscy5jcmVhdGVOZXdHdWlkKCk7XHJcblxyXG4gICAgLy8gVE9ETzogQ2hhbmdlIHRoaXMgdG8gdXNlciBwYXNzZWQgdnMgZ2VuZXJhdGVkIHdpdGggdGhlIG5ldyBQUlxyXG4gICAgdGhpcy5jb3JyZWxhdGlvbklkID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG5cclxuICAgIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxyXG4gICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XHJcbiAgICB0aGlzLnhDbGllbnRWZXIgPSBsaWJyYXJ5VmVyc2lvbigpO1xyXG5cclxuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xyXG4gICAgdGhpcy5yZWRpcmVjdFVyaSA9IHJlZGlyZWN0VXJpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIFV0aWxpdHkgdG8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIGFuZCBFeHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBTZXJ2ZXJSZXF1ZXN0UGFyYW1lcmVyc1xyXG4gICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICogQHBhcmFtIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdFxyXG4gICAqL1xyXG4gIHBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudDogQWNjb3VudCwgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBhZGFsSWRUb2tlbk9iamVjdD86IGFueSk6IHZvaWQge1xyXG4gICAgbGV0IHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIC8vIGFkZCB0aGUgcHJvbXB0IHBhcmFtZXRlciB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcclxuICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZVByb21wdFBhcmFtZXRlcihyZXF1ZXN0LnByb21wdCk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRWYWx1ZSA9IHJlcXVlc3QucHJvbXB0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBZGQgY2xhaW1zIGNoYWxsZW5nZSB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcclxuICAgICAgaWYgKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xyXG4gICAgICAgIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChyZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLmNsYWltc1ZhbHVlID0gcmVxdWVzdC5jbGFpbXNSZXF1ZXN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHByb3ZpZGVzIG9uZSBvZiB0aGVzZSwgZ2l2ZSBwcmVmZXJlbmNlIHRvIGRldmVsb3BlciBjaG9pY2VcclxuICAgICAgaWYgKFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcclxuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSB0aGlzLmNvbnN0cnVjdFVuaWZpZWRDYWNoZVF1ZXJ5UGFyYW1ldGVyKHJlcXVlc3QsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFkYWxJZFRva2VuT2JqZWN0KSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIobnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZHMgc2lkL2xvZ2luX2hpbnQgaWYgbm90IHBvcHVsYXRlZDsgcG9wdWxhdGVzIGRvbWFpbl9yZXEsIGxvZ2luX3JlcSBhbmQgZG9tYWluX2hpbnRcclxuICAgIC8vIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJDYWxsaW5nIGFkZEhpbnQgcGFyYW1ldGVyc1wiKTtcclxuICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudCwgcXVlcnlQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAvLyBzYW5pdHkgY2hlY2sgZm9yIGRldmVsb3BlciBwYXNzZWQgZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgIGxldCBlUVBhcmFtczogU3RyaW5nRGljdDtcclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIGVRUGFyYW1zID0gdGhpcy5zYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBvcHVsYXRlIHRoZSBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcclxuICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgIHRoaXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhlUVBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gUXVlcnlQYXJhbSBoZWxwZXJzXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBVdGlsaXR5IHRvIHRlc3QgaWYgdmFsaWQgcHJvbXB0IHZhbHVlIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxyXG4gICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVByb21wdFBhcmFtZXRlciAocHJvbXB0OiBzdHJpbmcpIHtcclxuICAgIGlmICghKFtQcm9tcHRTdGF0ZS5MT0dJTiwgUHJvbXB0U3RhdGUuU0VMRUNUX0FDQ09VTlQsIFByb21wdFN0YXRlLkNPTlNFTlQsIFByb21wdFN0YXRlLk5PTkVdLmluZGV4T2YocHJvbXB0KSA+PSAwKSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdHMgZXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyIGZvciB0aGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcclxuICAgKiBAcGFyYW0gaWRUb2tlbk9iamVjdFxyXG4gICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqIEBwYXJhbSBzaWRcclxuICAgKiBAcGFyYW0gbG9naW5IaW50XHJcbiAgICovXHJcbiAgLy9UT0RPOiBjaGVjayBob3cgdGhpcyBiZWhhdmVzIHdoZW4gZG9tYWluX2hpbnQgb25seSBpcyBzZW50IGluIGV4dHJhcGFyYW1ldGVycyBhbmQgaWRUb2tlbiBoYXMgbm8gdXBuLlxyXG4gIHByaXZhdGUgY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBpZFRva2VuT2JqZWN0OiBhbnkpOiBTdHJpbmdEaWN0IHtcclxuXHJcbiAgICAvLyBwcmVmZXJlbmNlIG9yZGVyOiBhY2NvdW50ID4gc2lkID4gbG9naW5faGludFxyXG4gICAgbGV0IHNzb1R5cGU7XHJcbiAgICBsZXQgc3NvRGF0YTtcclxuICAgIGxldCBzZXJ2ZXJSZXFQYXJhbTogU3RyaW5nRGljdCA9IHt9O1xyXG4gICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LmFjY291bnQpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xyXG4gICAgICAgIGlmIChhY2NvdW50LnNpZCkge1xyXG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcclxuICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnNpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWNjb3VudC51c2VyTmFtZSkge1xyXG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XHJcbiAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC51c2VyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2lkIGZyb20gcmVxdWVzdFxyXG4gICAgICBlbHNlIGlmIChyZXF1ZXN0LnNpZCkge1xyXG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XHJcbiAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3Quc2lkO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxvZ2luSGludCBmcm9tIHJlcXVlc3RcclxuICAgICAgZWxzZSBpZiAocmVxdWVzdC5sb2dpbkhpbnQpIHtcclxuICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuTE9HSU5fSElOVDtcclxuICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFkYWxJZFRva2VuIHJldHJpZXZlZCBmcm9tIGNhY2hlXHJcbiAgICBlbHNlIGlmIChpZFRva2VuT2JqZWN0KSB7XHJcbiAgICAgIGlmIChpZFRva2VuT2JqZWN0Lmhhc093blByb3BlcnR5KENvbnN0YW50cy51cG4pKSB7XHJcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLklEX1RPS0VOO1xyXG4gICAgICAgIHNzb0RhdGEgPSBpZFRva2VuT2JqZWN0LnVwbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcclxuICAgICAgICBzc29EYXRhID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcclxuICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgc2VydmVyUmVxUGFyYW0gPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5IT01FQUNDT1VOVF9JRCwgcmVxdWVzdC5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgc2VydmVyUmVxUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXJ2ZXJSZXFQYXJhbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEFkZHMgbG9naW5faGludCB0byBhdXRob3JpemF0aW9uIFVSTCB3aGljaCBpcyB1c2VkIHRvIHByZS1maWxsIHRoZSB1c2VybmFtZSBmaWVsZCBvZiBzaWduIGluIHBhZ2UgZm9yIHRoZSB1c2VyIGlmIGtub3duIGFoZWFkIG9mIHRpbWVcclxuICAgKiBkb21haW5faGludCBjYW4gYmUgb25lIG9mIHVzZXJzL29yZ2FuaXphdGlvbnMgd2hpY2ggd2hlbiBhZGRlZCBza2lwcyB0aGUgZW1haWwgYmFzZWQgZGlzY292ZXJ5IHByb2Nlc3Mgb2YgdGhlIHVzZXJcclxuICAgKiBkb21haW5fcmVxIHV0aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgY2xpZW50SW5mb1xyXG4gICAqIGxvZ2luX3JlcSB1aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiBjbGllbnRJbmZvXHJcbiAgICogQWxzbyBkb2VzIGEgc2FuaXR5IGNoZWNrIGZvciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBwYXNzZWQgYnkgdGhlIHVzZXIgdG8gZW5zdXJlIG5vIHJlcGVhdCBxdWVyeVBhcmFtZXRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSB0b2tlbiBpcyByZXF1ZXN0ZWRcclxuICAgKiBAcGFyYW0gcXVlcnlwYXJhbXNcclxuICAgKiBAcGFyYW0ge0BsaW5rIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzfVxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEhpbnRQYXJhbWV0ZXJzKGFjY291bnQ6IEFjY291bnQsIHFQYXJhbXM6IFN0cmluZ0RpY3QpOiBTdHJpbmdEaWN0IHtcclxuICAgIC8vIFRoaXMgaXMgYSBmaW5hbCBjaGVjayBmb3IgYWxsIHF1ZXJ5UGFyYW1zIGFkZGVkIHNvIGZhcjsgcHJlZmVyZW5jZSBvcmRlcjogc2lkID4gbG9naW5faGludFxyXG4gICAgLy8gc2lkIGNhbm5vdCBiZSBwYXNzZWQgYWxvbmcgd2l0aCBsb2dpbl9oaW50IG9yIGRvbWFpbl9oaW50LCBoZW5jZSB3ZSBjaGVjayBib3RoIGFyZSBub3QgcG9wdWxhdGVkIHlldCBpbiBxdWVyeVBhcmFtZXRlcnNcclxuICAgIGlmIChhY2NvdW50ICYmICFxUGFyYW1zW1NTT1R5cGVzLlNJRF0pIHtcclxuICAgICAgLy8gc2lkIC0gcG9wdWxhdGUgb25seSBpZiBsb2dpbl9oaW50IGlzIG5vdCBhbHJlYWR5IHBvcHVsYXRlZCBhbmQgdGhlIGFjY291bnQgaGFzIHNpZFxyXG4gICAgICBjb25zdCBwb3B1bGF0ZVNJRCA9ICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX0hJTlRdICYmIGFjY291bnQuc2lkICYmIHRoaXMucHJvbXB0VmFsdWUgPT09IFByb21wdFN0YXRlLk5PTkU7XHJcbiAgICAgIGlmIChwb3B1bGF0ZVNJRCkge1xyXG4gICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLlNJRCwgYWNjb3VudC5zaWQsIHFQYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxvZ2luX2hpbnQgLSBhY2NvdW50LnVzZXJOYW1lXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcHVsYXRlTG9naW5IaW50ID0gIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF0gJiYgYWNjb3VudC51c2VyTmFtZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LnVzZXJOYW1lKTtcclxuICAgICAgICBpZiAocG9wdWxhdGVMb2dpbkhpbnQpIHtcclxuICAgICAgICAgIHFQYXJhbXMgPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5MT0dJTl9ISU5ULCBhY2NvdW50LnVzZXJOYW1lLCBxUGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBvcHVsYXRlUmVxUGFyYW1zID0gIXFQYXJhbXNbU1NPVHlwZXMuRE9NQUlOX1JFUV0gJiYgIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fUkVRXTtcclxuICAgICAgaWYgKHBvcHVsYXRlUmVxUGFyYW1zKSB7XHJcbiAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgcVBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcVBhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBTSUQgdG8gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgKiBAcGFyYW0gc2lkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xyXG4gICAgaWYgKCFzc29QYXJhbSkge1xyXG4gICAgICBzc29QYXJhbSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc3NvRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBzc29QYXJhbTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHNzb1R5cGUpIHtcclxuICAgICAgY2FzZSBTU09UeXBlcy5TSUQ6IHtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5TSURdID0gc3NvRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNTT1R5cGVzLklEX1RPS0VOOiB7XHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5MT0dJTl9ISU5UOiB7XHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuT1JHQU5JWkFUSU9OUzoge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5DT05TVU1FUlM6IHtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5IT01FQUNDT1VOVF9JRDoge1xyXG4gICAgICAgIGxldCBob21lQWNjb3VudElkID0gc3NvRGF0YS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgdWlkID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKGhvbWVBY2NvdW50SWRbMF0pO1xyXG4gICAgICAgIGNvbnN0IHV0aWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoaG9tZUFjY291bnRJZFsxXSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGRvbWFpbl9yZXEgYW5kIGxvZ2luX3JlcSBhcmUgbm90IG5lZWRlZCBhY2NvcmRpbmcgdG8gZVNUUyB0ZWFtXHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHVpZDtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlkID09PSBDb25zdGFudHMuY29uc3VtZXJzVXRpZCkge1xyXG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX1JFUToge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSBzc29EYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuRE9NQUlOX1JFUToge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gc3NvRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzc29QYXJhbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICogUmVtb3ZlcyB1bm5lY2Vzc2FyeSBvciBkdXBsaWNhdGUgcXVlcnkgcGFyYW1ldGVycyBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgKi9cclxuICBwcml2YXRlIHNhbml0aXplRVFQYXJhbXMocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSA6IFN0cmluZ0RpY3Qge1xyXG4gICAgbGV0IGVRUGFyYW1zIDogU3RyaW5nRGljdCA9IHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnM7XHJcbiAgICBpZiAoIWVRUGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xyXG4gICAgICAvLyB0aGlzLmxvZ2dlci53YXJuaW5nKFwiUmVtb3ZlZCBkdXBsaWNhdGUgY2xhaW1zIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnMuIFBsZWFzZSB1c2UgZWl0aGVyIHRoZSBjbGFpbXNSZXF1ZXN0IGZpZWxkIE9SIHBhc3MgYXMgZXh0cmFRdWVyeVBhcmFtZXRlciAtIG5vdCBib3RoLlwiKTtcclxuICAgICAgZGVsZXRlIGVRUGFyYW1zW0NvbnN0YW50cy5jbGFpbXNdO1xyXG4gICAgfVxyXG4gICAgQmxhY2tsaXN0ZWRFUVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgaWYgKGVRUGFyYW1zW3BhcmFtXSkge1xyXG4gICAgICAgIC8vIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJSZW1vdmVkIGR1cGxpY2F0ZSBcIiArIHBhcmFtICsgXCIgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVycy4gUGxlYXNlIHVzZSB0aGUgXCIgKyBwYXJhbSArIFwiIGZpZWxkIGluIHJlcXVlc3Qgb2JqZWN0LlwiKTtcclxuICAgICAgICBkZWxldGUgZVFQYXJhbXNbcGFyYW1dO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBlUVBhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXHJcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGFyYW1zU3RyaW5nOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGlmIChxdWVyeVBhcmFtZXRlcnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbWV0ZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXNTdHJpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgcGFyYW1zU3RyaW5nID0gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVBhcmFtZXRlcnNba2V5XSl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwYXJhbXNTdHJpbmcgKz0gYCYke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJhbXNTdHJpbmc7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBTU08gcGFyYW1zIHNldCBpbiB0aGUgUmVxdWVzdFxyXG4gICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICovXHJcbiAgc3RhdGljIGlzU1NPUGFyYW0ocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHJldHVybiByZXF1ZXN0ICYmIChyZXF1ZXN0LmFjY291bnQgfHwgcmVxdWVzdC5zaWQgfHwgcmVxdWVzdC5sb2dpbkhpbnQpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRJbmZvIHtcclxuXHJcbiAgcHJpdmF0ZSBfdWlkOiBzdHJpbmc7XHJcbiAgZ2V0IHVpZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VpZCA/IHRoaXMuX3VpZCA6IFwiXCI7XHJcbiAgfVxyXG5cclxuICBzZXQgdWlkKHVpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91aWQgPSB1aWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91dGlkOiBzdHJpbmc7XHJcbiAgZ2V0IHV0aWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl91dGlkID8gdGhpcy5fdXRpZCA6IFwiXCI7XHJcbiAgfVxyXG5cclxuICBzZXQgdXRpZCh1dGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3V0aWQgPSB1dGlkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocmF3Q2xpZW50SW5mbzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXJhd0NsaWVudEluZm8gfHwgU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xyXG4gICAgICB0aGlzLnVpZCA9IFwiXCI7XHJcbiAgICAgIHRoaXMudXRpZCA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWNvZGVkQ2xpZW50SW5mbzogc3RyaW5nID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKHJhd0NsaWVudEluZm8pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvOiBDbGllbnRJbmZvID0gPENsaWVudEluZm8+SlNPTi5wYXJzZShkZWNvZGVkQ2xpZW50SW5mbyk7XHJcbiAgICAgIGlmIChjbGllbnRJbmZvKSB7XHJcbiAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpIHtcclxuICAgICAgICAgIHRoaXMudWlkID0gY2xpZW50SW5mby51aWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInV0aWRcIikpIHtcclxuICAgICAgICAgIHRoaXMudXRpZCA9IGNsaWVudEluZm8udXRpZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IFRva2VuVXRpbHMgfSBmcm9tIFwiLi91dGlscy9Ub2tlblV0aWxzXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZFRva2VuIHtcclxuXHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgb2JqZWN0SWQ6IHN0cmluZztcclxuICBzdWJqZWN0OiBzdHJpbmc7XHJcbiAgdGVuYW50SWQ6IHN0cmluZztcclxuICB2ZXJzaW9uOiBzdHJpbmc7XHJcbiAgcHJlZmVycmVkTmFtZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBob21lT2JqZWN0SWQ6IHN0cmluZztcclxuICBub25jZTogc3RyaW5nO1xyXG4gIGV4cGlyYXRpb246IHN0cmluZztcclxuICByYXdJZFRva2VuOiBzdHJpbmc7XHJcbiAgY2xhaW1zOiBTdHJpbmdEaWN0O1xyXG4gIHNpZDogc3RyaW5nO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXHJcbiAgY29uc3RydWN0b3IocmF3SWRUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IocmF3SWRUb2tlbik7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJhd0lkVG9rZW4gPSByYXdJZFRva2VuO1xyXG4gICAgICB0aGlzLmNsYWltcyA9IFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4ocmF3SWRUb2tlbik7XHJcbiAgICAgIGlmICh0aGlzLmNsYWltcykge1xyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImlzc1wiKSkge1xyXG4gICAgICAgICAgdGhpcy5pc3N1ZXIgPSB0aGlzLmNsYWltc1tcImlzc1wiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm9pZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdElkID0gdGhpcy5jbGFpbXNbXCJvaWRcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJzdWJcIikpIHtcclxuICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHRoaXMuY2xhaW1zW1wic3ViXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwidGlkXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnRlbmFudElkID0gdGhpcy5jbGFpbXNbXCJ0aWRcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJ2ZXJcIikpIHtcclxuICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuY2xhaW1zW1widmVyXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwicHJlZmVycmVkX3VzZXJuYW1lXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnByZWZlcnJlZE5hbWUgPSB0aGlzLmNsYWltc1tcInByZWZlcnJlZF91c2VybmFtZVwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcclxuICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuY2xhaW1zW1wibmFtZVwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5vbmNlXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLm5vbmNlID0gdGhpcy5jbGFpbXNbXCJub25jZVwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImV4cFwiKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBpcmF0aW9uID0gdGhpcy5jbGFpbXNbXCJleHBcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJob21lX29pZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVPYmplY3RJZCA9IHRoaXMuY2xhaW1zW1wiaG9tZV9vaWRcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJzaWRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWQgPSB0aGlzLmNsYWltc1tcInNpZFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBUT0RPOiBUaGlzIGVycm9yIGhlcmUgd29uJ3QgcmVhbGx5IGV2ZXJ5IGJlIHRocm93biwgc2luY2UgZXh0cmFjdElkVG9rZW4oKSByZXR1cm5zIG51bGwgaWYgdGhlIGRlY29kZUp3dCgpIGZhaWxzLlxyXG4gICAgICAvLyBOZWVkIHRvIGFkZCBiZXR0ZXIgZXJyb3IgaGFuZGxpbmcgaGVyZSB0byBhY2NvdW50IGZvciBiZWluZyB1bmFibGUgdG8gZGVjb2RlIGp3dHMuXHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnN0YW50cywgQ2FjaGVLZXlzIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcclxuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Ugey8vIFNpbmdsZXRvblxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RvcmFnZTtcclxuICBwcml2YXRlIGxvY2FsU3RvcmFnZVN1cHBvcnRlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIHNlc3Npb25TdG9yYWdlU3VwcG9ydGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgY2FjaGVMb2NhdGlvbjogQ2FjaGVMb2NhdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FjaGVMb2NhdGlvbjogQ2FjaGVMb2NhdGlvbikge1xyXG4gICAgaWYgKFN0b3JhZ2UuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jYWNoZUxvY2F0aW9uID0gY2FjaGVMb2NhdGlvbjtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dICE9IG51bGw7XHJcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcclxuICAgIFN0b3JhZ2UuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZVN1cHBvcnRlZCAmJiAhdGhpcy5zZXNzaW9uU3RvcmFnZVN1cHBvcnRlZCkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlTm9TdG9yYWdlU3VwcG9ydGVkRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gU3RvcmFnZS5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gICAgLy8gYWRkIHZhbHVlIHRvIHN0b3JhZ2VcclxuICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmFibGVDb29raWVTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IG9uZSBpdGVtIGJ5IGtleSBmcm9tIHN0b3JhZ2VcclxuICAgIGdldEl0ZW0oa2V5OiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtQ29va2llKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgdmFsdWUgZnJvbSBzdG9yYWdlXHJcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFyIHN0b3JhZ2UgKHJlbW92ZSBhbGwgaXRlbXMgZnJvbSBpdClcclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQWNjZXNzVG9rZW5zKGNsaWVudElkOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKTogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtO1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Lm1hdGNoKGNsaWVudElkKSAmJiBrZXkubWF0Y2goaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbmV3IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtKEpTT04ucGFyc2Uoa2V5KSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGtleS5pbmRleE9mKENhY2hlS2V5cy5BVVRIT1JJVFkpICE9PSAtMSB8fCBrZXkuaW5kZXhPZihDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UKSAhPT0gMSkgJiYgKCFzdGF0ZSB8fCBrZXkuaW5kZXhPZihzdGF0ZSkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEtleSA9IGtleS5zcGxpdChDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEtleS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHNwbGl0S2V5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiAhdGhpcy50b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKGtleSwgXCJcIiwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsZWFyQ29va2llKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBjb25zdCByZW5ld1N0YXR1cyA9IHN0b3JhZ2VbQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGVWYWx1ZV07XHJcbiAgICAgICAgcmV0dXJuICEoIXJlbmV3U3RhdHVzIHx8IHJlbmV3U3RhdHVzICE9PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Q2FjaGVJdGVtcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKENvbnN0YW50cy5tc2FsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcsIGNWYWx1ZTogc3RyaW5nLCBleHBpcmVzPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNvb2tpZVN0ciA9IGNOYW1lICsgXCI9XCIgKyBjVmFsdWUgKyBcIjtcIjtcclxuICAgICAgICBpZiAoZXhwaXJlcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmVUaW1lID0gdGhpcy5nZXRDb29raWVFeHBpcmF0aW9uVGltZShleHBpcmVzKTtcclxuICAgICAgICAgICAgY29va2llU3RyICs9IFwiZXhwaXJlcz1cIiArIGV4cGlyZVRpbWUgKyBcIjtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjTmFtZSArIFwiPVwiO1xyXG4gICAgICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gY2FbaV07XHJcbiAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWVFeHBpcmF0aW9uVGltZShjb29raWVMaWZlRGF5czogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwciA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIGNvb2tpZUxpZmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudG9VVENTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNvb2tpZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgXCJcIiwgLTEpO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVMb2dpbiwgXCJcIiwgLTEpO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBcIlwiLCAtMSk7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgXCJcIiwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgdG8gY2FjaGUgYWNjb3VudCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBhY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZDogYW55LCBzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ2FjaGVLZXlzLkFDUVVJUkVfVE9LRU5fQUNDT1VOVCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArXHJcbiAgICAgICAgICAgIGAke2FjY291bnRJZH1gICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICArIGAke3N0YXRlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXV0aG9yaXR5S2V5IHRvIGNhY2hlIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ2FjaGVLZXlzLkFVVEhPUklUWSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke3N0YXRlfWA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuS2V5IH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5LZXlcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5DYWNoZUl0ZW0ge1xyXG5cclxuICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xyXG4gIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXk6IEFjY2Vzc1Rva2VuS2V5LCB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZSkge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRpbWVVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGltZSBpbiBzZWNvbmRzIGZvciBleHBpcmF0aW9uIGJhc2VkIG9uIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV4cGlyZXNJblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VFeHBpcmVzSW4oZXhwaXJlc0luOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGlmIEFBRCBkaWQgbm90IHNlbmQgXCJleHBpcmVzX2luXCIgcHJvcGVydHksIHVzZSBkZWZhdWx0IGV4cGlyYXRpb24gb2YgMzU5OSBzZWNvbmRzLCBmb3Igc29tZSByZWFzb24gQUFEIHNlbmRzIDM1OTkgYXMgXCJleHBpcmVzX2luXCIgdmFsdWUgaW5zdGVhZCBvZiAzNjAwXHJcbiAgICAgICAgaWYgKCFleHBpcmVzSW4pIHtcclxuICAgICAgICBleHBpcmVzSW4gPSBcIjM1OTlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGV4cGlyZXNJbiwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBjdXJyZW50IHRpbWUgaW4gVW5peCB0aW1lLiBEYXRlLmdldFRpbWUoKSByZXR1cm5zIGluIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi4vQXV0aFJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xyXG5cclxuLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VVdGlscyB7XHJcblxyXG4gICAgc3RhdGljIHNldFJlc3BvbnNlSWRUb2tlbihvcmlnaW5hbFJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGlkVG9rZW5PYmo6IElkVG9rZW4pIDogQXV0aFJlc3BvbnNlIHtcclxuICAgICAgICBpZiAoIW9yaWdpbmFsUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICghaWRUb2tlbk9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZXNwb25zZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBleHAgPSBOdW1iZXIoaWRUb2tlbk9iai5leHBpcmF0aW9uKTtcclxuICAgICAgICBpZiAoZXhwICYmICFvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbikge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cCAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5vcmlnaW5hbFJlc3BvbnNlLFxyXG4gICAgICAgICAgaWRUb2tlbjogaWRUb2tlbk9iaixcclxuICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxyXG4gICAgICAgICAgdW5pcXVlSWQ6IGlkVG9rZW5PYmoub2JqZWN0SWQgfHwgaWRUb2tlbk9iai5zdWJqZWN0LFxyXG4gICAgICAgICAgdGVuYW50SWQ6IGlkVG9rZW5PYmoudGVuYW50SWQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBCMmNBdXRob3JpdHkgfSBmcm9tIFwiLi9CMmNBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5RmFjdG9yeSB7XHJcbiAgICAvKipcclxuICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIERldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsOiBzdHJpbmcpOiBBdXRob3JpdHlUeXBlIHtcclxuICAgICAgICBhdXRob3JpdHlVcmwgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5VXJsKTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyhhdXRob3JpdHlVcmwpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xyXG4gICAgICAgIHN3aXRjaCAocGF0aFNlZ21lbnRzWzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZnBcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuICAgICAgICAgICAgY2FzZSBcImFkZnNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFkZnM7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gYXV0aG9yaXR5IG9iamVjdCBvZiB0aGUgY29ycmVjdCB0eXBlIGJhc2VkIG9uIHRoZSB1cmxcclxuICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChlZyBhYWQsIGIyYylcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbik6IEF1dGhvcml0eSB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IEF1dGhvcml0eUZhY3RvcnkuRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmwpO1xyXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiBhYm92ZSBkZXRlY3Rpb24sIGNyZWF0ZSB0aGUgcmlnaHQgdHlwZS5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQjJjQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgdmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWFkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IFRlbGVtZXRyeUV2ZW50IGZyb20gXCIuL1RlbGVtZXRyeUV2ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb21wbGV0ZWRFdmVudHMsXHJcbiAgICBFdmVudENvdW50LFxyXG4gICAgRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCxcclxuICAgIEluUHJvZ3Jlc3NFdmVudHMsXHJcbiAgICBUZWxlbWV0cnlDb25maWcsXHJcbiAgICBUZWxlbWV0cnlQbGF0Zm9ybSxcclxuICAgIFRlbGVtZXRyeUVtaXR0ZXJcclxufSBmcm9tIFwiLi9UZWxlbWV0cnlUeXBlc1wiO1xyXG5pbXBvcnQgRGVmYXVsdEV2ZW50IGZyb20gXCIuL0RlZmF1bHRFdmVudFwiO1xyXG5cclxuLy8gZm9yIHVzZSBpbiBjYWNoZSBldmVudHNcclxuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9WQUxVRV9QUkVGSVggPSBcIm1zYWwudG9rZW5cIjtcclxuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9OQU1FID0gXCJtc2FsLmNhY2hlX2V2ZW50XCI7XHJcblxyXG5jb25zdCBjcmVhdGVFdmVudEtleSA9IChldmVudDogVGVsZW1ldHJ5RXZlbnQpOiBzdHJpbmcgPT4gKFxyXG4gICAgYCR7ZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZH0tJHtldmVudC5ldmVudElkfS0ke2V2ZW50LmV2ZW50TmFtZX1gXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlNYW5hZ2VyIHtcclxuXHJcbiAgICAvLyBjb3JyZWxhdGlvbiBJZCB0byBsaXN0IG9mIGV2ZW50c1xyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZWRFdmVudHM6IENvbXBsZXRlZEV2ZW50cyA9IHt9O1xyXG4gICAgLy8gZXZlbnQga2V5IHRvIGV2ZW50XHJcbiAgICBwcml2YXRlIGluUHJvZ3Jlc3NFdmVudHM6IEluUHJvZ3Jlc3NFdmVudHMgPSB7fTtcclxuICAgIC8vIGNvcnJlbGF0aW9uIGlkIHRvIG1hcCBvZiBldmVudG5hbWUgdG8gY291bnRcclxuICAgIHByaXZhdGUgZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZDogRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCA9IHt9O1xyXG5cclxuICAgIC8vSW1wbGVtZW50IGFmdGVyIEFQSSBFVkVOVFxyXG4gICAgcHJpdmF0ZSBvbmx5U2VuZEZhaWx1cmVUZWxlbWV0cnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdGVsZW1ldHJ5UGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtO1xyXG4gICAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVGVsZW1ldHJ5Q29uZmlnLCB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyKSB7XHJcbiAgICAgICAgLy8gVE9ETyBUSFJPVyBpZiBiYWQgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5UGxhdGZvcm0gPSBjb25maWcucGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNvbmZpZy5jbGllbnRJZDtcclxuICAgICAgICB0aGlzLm9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeSA9IGNvbmZpZy5vbmx5U2VuZEZhaWx1cmVUZWxlbWV0cnk7XHJcbiAgICAgICAgLy8gVE9ETywgd2hlbiBpIGdldCB0byB3aXJpbmcgdGhpcyB0aHJvdWdoLCB0aGluayBhYm91dCB3aGF0IGl0IG1lYW5zIGlmXHJcbiAgICAgICAgLy8gYSBkZXZlbG9wZXIgZG9lcyBub3QgaW1wbGVtZW50IHRlbGVtIGF0IGFsbCwgd2Ugc3RpbGwgaW5zdHJ1bWVudCwgYnV0IHRlbGVtZXRyeUVtaXR0ZXIgY2FuIGJlXHJcbiAgICAgICAgLy8gb3B0aW9uYWw/XHJcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlFbWl0dGVyID0gdGVsZW1ldHJ5RW1pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEV2ZW50KGV2ZW50OiBUZWxlbWV0cnlFdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBjcmVhdGVFdmVudEtleShldmVudCk7XHJcbiAgICAgICAgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSA9IGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcclxuICAgICAgICBjb25zdCBldmVudEtleSA9IGNyZWF0ZUV2ZW50S2V5KGV2ZW50KTtcclxuICAgICAgICBpZiAoIXRoaXMudGVsZW1ldHJ5RW1pdHRlciB8fCAhdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3AoKTtcclxuICAgICAgICB0aGlzLmluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRFdmVudHMgPSB0aGlzLmNvbXBsZXRlZEV2ZW50c1tldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRFdmVudHNbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF0gPSBbLi4uKGNvbXBsZXRlZEV2ZW50cyB8fCBbXSksIGV2ZW50XTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XHJcbiAgICB9XHJcblxyXG4gICAgZmx1c2goY29ycmVsYXRpb25JZDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgdW5maW5pc2hlZCBldmVudHMgc2hvdWxkIHRoaXMgc3RpbGwgcmV0dXJuIHRoZW0/XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgfHwgIXRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9ycGhhbmVkRXZlbnRzID0gdGhpcy5nZXRPcnBoYW5lZEV2ZW50cyhjb3JyZWxhdGlvbklkKTtcclxuICAgICAgICBvcnBoYW5lZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHRoaXMuaW5jcmVtZW50RXZlbnRDb3VudChldmVudCkpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRmx1c2g6IEFycmF5PFRlbGVtZXRyeUV2ZW50PiA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5jb21wbGV0ZWRFdmVudHNbY29ycmVsYXRpb25JZF0sXHJcbiAgICAgICAgICAgIC4uLm9ycGhhbmVkRXZlbnRzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50Q291bnRzVG9GbHVzaDogRXZlbnRDb3VudCA9IHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcclxuICAgICAgICAvLyBUT0RPIGFkZCBmdW5jaXRvbmFsaXR5IGZvciBvbmx5Rmx1c2hGYWlsdXJlcyBhZnRlciBpbXBsZW1lbnRpbmcgYXBpIGV2ZW50PyA/P1xyXG5cclxuICAgICAgICBpZiAoIWV2ZW50c1RvRmx1c2ggfHwgIWV2ZW50c1RvRmx1c2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRFdmVudDogRGVmYXVsdEV2ZW50ID0gbmV3IERlZmF1bHRFdmVudChcclxuICAgICAgICAgICAgdGhpcy50ZWxlbWV0cnlQbGF0Zm9ybSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZCxcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgZXZlbnRDb3VudHNUb0ZsdXNoXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRzV2l0aERlZmF1bHRFdmVudCA9IFsgLi4uZXZlbnRzVG9GbHVzaCwgZGVmYXVsdEV2ZW50IF07XHJcblxyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlcihldmVudHNXaXRoRGVmYXVsdEV2ZW50Lm1hcChlID0+IGUuZ2V0KCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gVE9ETywgbmFtZSBjYWNoZSBldmVudCBkaWZmZXJlbnQ/XHJcbiAgICAgICAgLy8gaWYgdHlwZSBpcyBjYWNoZSBldmVudCwgY2hhbmdlIG5hbWVcclxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudC5ldmVudE5hbWU7XHJcbiAgICAgICAgY29uc3QgZXZlbnRDb3VudCA9IHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXTtcclxuICAgICAgICBpZiAoIWV2ZW50Q291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgW2V2ZW50TmFtZV06IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBldmVudENvdW50W2V2ZW50TmFtZV0gPSBldmVudENvdW50W2V2ZW50TmFtZV0gPyBldmVudENvdW50W2V2ZW50TmFtZV0gKyAxIDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPcnBoYW5lZEV2ZW50cyhjb3JyZWxhdGlvbklkOiBzdHJpbmcpOiBBcnJheTxUZWxlbWV0cnlFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluUHJvZ3Jlc3NFdmVudHMpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKG1lbW8sIGV2ZW50S2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRLZXkuaW5kZXhPZihjb3JyZWxhdGlvbklkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5tZW1vLCBldmVudF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtbztcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVWRU5UX05BTUVfUFJFRklYLCBURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUyB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xyXG5pbXBvcnQgVGVsZW1ldHJ5RXZlbnQgZnJvbSBcIi4vVGVsZW1ldHJ5RXZlbnRcIjtcclxuaW1wb3J0IHsgRXZlbnRDb3VudCwgVGVsZW1ldHJ5UGxhdGZvcm0gfSBmcm9tIFwiLi9UZWxlbWV0cnlUeXBlc1wiO1xyXG5pbXBvcnQgeyBwcmVwZW5kRXZlbnROYW1lUHJlZml4IH0gZnJvbSBcIi4vVGVsZW1ldHJ5VXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRFdmVudCBleHRlbmRzIFRlbGVtZXRyeUV2ZW50IHtcclxuICAgIC8vIFRPRE8gUGxhdGZvcm0gVHlwZVxyXG4gICAgY29uc3RydWN0b3IocGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtLCBjb3JyZWxhdGlvbklkOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIGV2ZW50Q291bnQ6IEV2ZW50Q291bnQpIHtcclxuICAgICAgICBzdXBlcihwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiZGVmYXVsdF9ldmVudFwiKSwgY29ycmVsYXRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiY2xpZW50X2lkXCIpXSA9IGNsaWVudElkO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInNka19wbGFmb3JtXCIpXSA9IHBsYXRmb3JtLnNkaztcclxuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJzZGtfdmVyc2lvblwiKV0gPSBwbGF0Zm9ybS5zZGtWZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImFwcGxpY2F0aW9uX25hbWVcIildID0gcGxhdGZvcm0uYXBwbGljYXRpb25OYW1lO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImFwcGxpY2F0aW9uX3ZlcnNpb25cIildID0gcGxhdGZvcm0uYXBwbGljYXRpb25WZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInVpX2V2ZW50XCIpLCBldmVudENvdW50KTtcclxuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkh0dHBFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImh0dHBfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuQ2FjaGVFdmVudENvdW50Q29uc3RTdHJLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImNhY2hlX2V2ZW50XCIpLCBldmVudENvdW50KTtcclxuICAgICAgICAvLy8gRGV2aWNlIGlkP1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RXZlbnRDb3VudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFldmVudENvdW50W2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBldmVudENvdW50W2V2ZW50TmFtZV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEVWRU5UX05BTUVfS0VZLFxyXG4gICAgU1RBUlRfVElNRV9LRVksXHJcbiAgICBFTEFQU0VEX1RJTUVfS0VZXHJcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHByZXBlbmRFdmVudE5hbWVQcmVmaXggfSBmcm9tIFwiLi9UZWxlbWV0cnlVdGlsc1wiO1xyXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuLi91dGlscy9DcnlwdG9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5RXZlbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnRUaW1lc3RhbXA6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBldmVudDogYW55OyAvLyBUT0RPIFRZUEUgVEhJU1xyXG4gICAgcHVibGljIGV2ZW50SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudE5hbWU6IHN0cmluZywgY29ycmVsYXRpb25JZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRJZCA9IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0ge1xyXG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldOiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFNUQVJUX1RJTUVfS0VZKV06IHRoaXMuc3RhcnRUaW1lc3RhbXAsXHJcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXTogLTEsXHJcbiAgICAgICAgICAgIFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdOiBjb3JyZWxhdGlvbklkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEVsYXBzZWRUaW1lKHRpbWU6IE51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFTEFQU0VEX1RJTUVfS0VZKV0gPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCBkdXJhdGlvbiBvZiBldmVudFxyXG4gICAgICAgIHRoaXMuc2V0RWxhcHNlZFRpbWUoK0RhdGUubm93KCkgLSArdGhpcy5zdGFydFRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0ZWxlbWV0cnlDb3JyZWxhdGlvbklkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZXZlbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50LFxyXG4gICAgICAgICAgICBldmVudElkOiB0aGlzLmV2ZW50SWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
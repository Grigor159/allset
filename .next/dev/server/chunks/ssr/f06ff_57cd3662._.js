module.exports = [
"[project]/Desktop/allset/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/allset/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
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
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Desktop/allset/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>ErrorCode,
    "FormatError",
    ()=>FormatError,
    "InvalidValueError",
    ()=>InvalidValueError,
    "InvalidValueTypeError",
    ()=>InvalidValueTypeError,
    "MissingValueError",
    ()=>MissingValueError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
var ErrorCode;
(function(ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function() {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error);
;
var InvalidValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError);
;
var InvalidValueTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError);
;
var MissingValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError);
;
}),
"[project]/Desktop/allset/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PART_TYPE",
    ()=>PART_TYPE,
    "formatToParts",
    ()=>formatToParts,
    "isFormatXMLElementFn",
    ()=>isFormatXMLElementFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)");
;
;
var PART_TYPE;
(function(PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function(all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
            all.push(part);
        } else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, // For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value
            }
        ];
    }
    var result = [];
    for(var _i = 0, els_1 = els; _i < els_1.length; _i++){
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPoundElement"])(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue)
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingValueError"](varName, originalMessage);
        }
        var value = values[varName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArgumentElement"])(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.date[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTimeElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.time[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.number[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            if (style && style.scale) {
                value = value * (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueTypeError"](value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function(p) {
                return p.value;
            }));
            if (!Array.isArray(chunks)) {
                chunks = [
                    chunks
                ];
            }
            result.push.apply(result, chunks.map(function(c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c
                };
            }));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].MISSING_INTL_API, originalMessage);
                }
                var rule = formatters.getPluralRules(locales, {
                    type: el.pluralType
                }).select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}
}),
"[project]/Desktop/allset/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_context__.s([
    "IntlMessageFormat",
    ()=>IntlMessageFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@formatjs/fast-memoize/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)");
;
;
;
;
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k) {
        all[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, c1[k]), c2[k] || {});
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function(all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function() {
            return {
                get: function(key) {
                    return store[key];
                },
                set: function(key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) {
        cache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
    }
    return {
        getNumberFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getDateTimeFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getPluralRules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        })
    };
}
var IntlMessageFormat = function() {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        if (locales === void 0) {
            locales = IntlMessageFormat.defaultLocale;
        }
        var _this = this;
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
        this.format = function(values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function(all, part) {
                if (!all.length || part.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PART_TYPE"].literal || typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                } else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function(values) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatToParts"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function() {
            var _a;
            return {
                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
            };
        };
        this.getAst = function() {
            return _this.ast;
        };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            var _a = opts || {}, formatters = _a.formatters, parseOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
                "formatters"
            ]);
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, parseOpts), {
                locale: this.resolvedLocale
            }));
        } else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function() {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function(locales) {
        if (typeof Intl.Locale === 'undefined') {
            return;
        }
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"];
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: 'currency'
            },
            percent: {
                style: 'percent'
            }
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric'
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    };
    return IntlMessageFormat;
}();
;
}),
"[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/initializeConfig-CIDVMS2E.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I",
    ()=>IntlError,
    "a",
    ()=>IntlErrorCode,
    "b",
    ()=>createIntlFormatters,
    "c",
    ()=>createFormatter,
    "d",
    ()=>createCache,
    "e",
    ()=>createBaseTranslator,
    "f",
    ()=>defaultGetMessageFallback,
    "g",
    ()=>defaultOnError,
    "i",
    ()=>initializeConfig,
    "r",
    ()=>resolveNamespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@formatjs/fast-memoize/lib/index.js [app-ssr] (ecmascript)");
;
;
;
class IntlError extends Error {
    constructor(code, originalMessage){
        let message = code;
        if (originalMessage) {
            message += ': ' + originalMessage;
        }
        super(message);
        this.code = code;
        if (originalMessage) {
            this.originalMessage = originalMessage;
        }
    }
}
var IntlErrorCode = /*#__PURE__*/ function(IntlErrorCode) {
    IntlErrorCode["MISSING_MESSAGE"] = "MISSING_MESSAGE";
    IntlErrorCode["MISSING_FORMAT"] = "MISSING_FORMAT";
    IntlErrorCode["ENVIRONMENT_FALLBACK"] = "ENVIRONMENT_FALLBACK";
    IntlErrorCode["INSUFFICIENT_PATH"] = "INSUFFICIENT_PATH";
    IntlErrorCode["INVALID_MESSAGE"] = "INVALID_MESSAGE";
    IntlErrorCode["INVALID_KEY"] = "INVALID_KEY";
    IntlErrorCode["FORMATTING_ERROR"] = "FORMATTING_ERROR";
    return IntlErrorCode;
}(IntlErrorCode || {});
/**
 * `intl-messageformat` uses separate keys for `date` and `time`, but there's
 * only one native API: `Intl.DateTimeFormat`. Additionally you might want to
 * include both a time and a date in a value, therefore the separation doesn't
 * seem so useful. We offer a single `dateTime` namespace instead, but we have
 * to convert the format before `intl-messageformat` can be used.
 */ function convertFormatsToIntlMessageFormat(globalFormats, inlineFormats, timeZone) {
    const mfDateDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.date;
    const mfTimeDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.time;
    const dateTimeFormats = {
        ...globalFormats?.dateTime,
        ...inlineFormats?.dateTime
    };
    const allFormats = {
        date: {
            ...mfDateDefaults,
            ...dateTimeFormats
        },
        time: {
            ...mfTimeDefaults,
            ...dateTimeFormats
        },
        number: {
            ...globalFormats?.number,
            ...inlineFormats?.number
        }
    };
    if (timeZone) {
        // The only way to set a time zone with `intl-messageformat` is to merge it into the formats
        // https://github.com/formatjs/formatjs/blob/8256c5271505cf2606e48e3c97ecdd16ede4f1b5/packages/intl/src/message.ts#L15
        [
            'date',
            'time'
        ].forEach((property)=>{
            const formats = allFormats[property];
            for (const [key, value] of Object.entries(formats)){
                formats[key] = {
                    timeZone,
                    ...value
                };
            }
        });
    }
    return allFormats;
}
function joinPath(...parts) {
    return parts.filter(Boolean).join('.');
}
/**
 * Contains defaults that are used for all entry points into the core.
 * See also `InitializedIntlConfiguration`.
 */ function defaultGetMessageFallback(props) {
    return joinPath(props.namespace, props.key);
}
function defaultOnError(error) {
    console.error(error);
}
function createCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function createMemoCache(store) {
    return {
        create () {
            return {
                get (key) {
                    return store[key];
                },
                set (key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function memoFn(fn, cache) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(fn, {
        cache: createMemoCache(cache),
        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
    });
}
function memoConstructor(ConstructorFn, cache) {
    return memoFn((...args)=>new ConstructorFn(...args), cache);
}
function createIntlFormatters(cache) {
    const getDateTimeFormat = memoConstructor(Intl.DateTimeFormat, cache.dateTime);
    const getNumberFormat = memoConstructor(Intl.NumberFormat, cache.number);
    const getPluralRules = memoConstructor(Intl.PluralRules, cache.pluralRules);
    const getRelativeTimeFormat = memoConstructor(Intl.RelativeTimeFormat, cache.relativeTime);
    const getListFormat = memoConstructor(Intl.ListFormat, cache.list);
    const getDisplayNames = memoConstructor(Intl.DisplayNames, cache.displayNames);
    return {
        getDateTimeFormat,
        getNumberFormat,
        getPluralRules,
        getRelativeTimeFormat,
        getListFormat,
        getDisplayNames
    };
}
// Placed here for improved tree shaking. Somehow when this is placed in
// `formatters.tsx`, then it can't be shaken off from `next-intl`.
function createMessageFormatter(cache, intlFormatters) {
    const getMessageFormat = memoFn((...args)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"](args[0], args[1], args[2], {
            formatters: intlFormatters,
            ...args[3]
        }), cache.message);
    return getMessageFormat;
}
function resolvePath(locale, messages, key, namespace) {
    const fullKey = joinPath(namespace, key);
    if (!messages) {
        throw new Error(`No messages available at \`${namespace}\`.`);
    }
    let message = messages;
    key.split('.').forEach((part)=>{
        const next = message[part];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (part == null || next == null) {
            throw new Error(`Could not resolve \`${fullKey}\` in messages for locale \`${locale}\`.`);
        }
        message = next;
    });
    return message;
}
function prepareTranslationValues(values) {
    // Workaround for https://github.com/formatjs/formatjs/issues/1467
    const transformedValues = {};
    Object.keys(values).forEach((key)=>{
        let index = 0;
        const value = values[key];
        let transformed;
        if (typeof value === 'function') {
            transformed = (chunks)=>{
                const result = value(chunks);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(result) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(result, {
                    key: key + index++
                }) : result;
            };
        } else {
            transformed = value;
        }
        transformedValues[key] = transformed;
    });
    return transformedValues;
}
function getMessagesOrError(locale, messages, namespace) {
    try {
        if (!messages) {
            throw new Error(`No messages were configured.`);
        }
        const retrievedMessages = namespace ? resolvePath(locale, messages, namespace) : messages;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!retrievedMessages) {
            throw new Error(`No messages for namespace \`${namespace}\` found.`);
        }
        return retrievedMessages;
    } catch (error) {
        const intlError = new IntlError(IntlErrorCode.MISSING_MESSAGE, error.message);
        return intlError;
    }
}
function getPlainMessage(candidate, values) {
    // To improve runtime performance, only compile message if:
    return(// 1. Values are provided
    values || // 2. There are escaped braces (e.g. "'{name'}")
    /'[{}]/.test(candidate) || // 3. There are missing arguments or tags (dev-only error handling)
    /<|{/.test(candidate) ? undefined // Compile
     : candidate // Don't compile
    );
}
function createBaseTranslator(config) {
    const messagesOrError = getMessagesOrError(config.locale, config.messages, config.namespace);
    return createBaseTranslatorImpl({
        ...config,
        messagesOrError
    });
}
function createBaseTranslatorImpl({ cache, formats: globalFormats, formatters, getMessageFallback = defaultGetMessageFallback, locale, messagesOrError, namespace, onError, timeZone }) {
    const hasMessagesError = messagesOrError instanceof IntlError;
    function getFallbackFromErrorAndNotify(key, code, message, fallback) {
        const error = new IntlError(code, message);
        onError(error);
        return fallback ?? getMessageFallback({
            error,
            key,
            namespace
        });
    }
    function translateBaseFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Provide custom formats for numbers, dates and times. */ formats, _fallback) {
        const fallback = _fallback;
        let message;
        if (hasMessagesError) {
            if (fallback) {
                message = fallback;
            } else {
                onError(messagesOrError);
                return getMessageFallback({
                    error: messagesOrError,
                    key,
                    namespace
                });
            }
        } else {
            const messages = messagesOrError;
            try {
                message = resolvePath(locale, messages, key, namespace);
            } catch (error) {
                if (fallback) {
                    message = fallback;
                } else {
                    return getFallbackFromErrorAndNotify(key, IntlErrorCode.MISSING_MESSAGE, error.message, fallback);
                }
            }
        }
        if (typeof message === 'object') {
            let code, errorMessage;
            if (Array.isArray(message)) {
                code = IntlErrorCode.INVALID_MESSAGE;
                {
                    errorMessage = `Message at \`${joinPath(namespace, key)}\` resolved to an array, but only strings are supported. See https://next-intl.dev/docs/usage/translations#arrays-of-messages`;
                }
            } else {
                code = IntlErrorCode.INSUFFICIENT_PATH;
                {
                    errorMessage = `Message at \`${joinPath(namespace, key)}\` resolved to an object, but only strings are supported. Use a \`.\` to retrieve nested messages. See https://next-intl.dev/docs/usage/translations#structuring-messages`;
                }
            }
            return getFallbackFromErrorAndNotify(key, code, errorMessage);
        }
        let messageFormat;
        // Hot path that avoids creating an `IntlMessageFormat` instance
        const plainMessage = getPlainMessage(message, values);
        if (plainMessage) return plainMessage;
        // Lazy init the message formatter for better tree
        // shaking in case message formatting is not used.
        if (!formatters.getMessageFormat) {
            formatters.getMessageFormat = createMessageFormatter(cache, formatters);
        }
        try {
            messageFormat = formatters.getMessageFormat(message, locale, convertFormatsToIntlMessageFormat(globalFormats, formats, timeZone), {
                formatters: {
                    ...formatters,
                    getDateTimeFormat (locales, options) {
                        // Workaround for https://github.com/formatjs/formatjs/issues/4279
                        return formatters.getDateTimeFormat(locales, {
                            timeZone,
                            ...options
                        });
                    }
                }
            });
        } catch (error) {
            const thrownError = error;
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.INVALID_MESSAGE, thrownError.message + ('originalMessage' in thrownError ? ` (${thrownError.originalMessage})` : ''), fallback);
        }
        try {
            const formattedMessage = messageFormat.format(// @ts-expect-error `intl-messageformat` expects a different format
            // for rich text elements since a recent minor update. This
            // needs to be evaluated in detail, possibly also in regards
            // to be able to format to parts.
            values ? prepareTranslationValues(values) : values);
            if (formattedMessage == null) {
                throw new Error(`Unable to format \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'}`);
            }
            // Limit the function signature to return strings or React elements
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(formattedMessage) || // Arrays of React elements
            Array.isArray(formattedMessage) || typeof formattedMessage === 'string' ? formattedMessage : String(formattedMessage);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.FORMATTING_ERROR, error.message, fallback);
        }
    }
    function translateFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Custom formats for numbers, dates and times. */ formats, _fallback) {
        const result = translateBaseFn(key, values, formats, _fallback);
        if (typeof result !== 'string') {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.INVALID_MESSAGE, `The message \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'} didn't resolve to a string. If you want to format rich text, use \`t.rich\` instead.`);
        }
        return result;
    }
    translateFn.rich = translateBaseFn;
    // Augment `translateBaseFn` to return plain strings
    translateFn.markup = (key, values, formats, _fallback)=>{
        const result = translateBaseFn(key, // @ts-expect-error -- `MarkupTranslationValues` is practically a sub type
        // of `RichTranslationValues` but TypeScript isn't smart enough here.
        values, formats, _fallback);
        if (typeof result !== 'string') {
            const error = new IntlError(IntlErrorCode.FORMATTING_ERROR, "`t.markup` only accepts functions for formatting that receive and return strings.\n\nE.g. t.markup('markup', {b: (chunks) => `<b>${chunks}</b>`})");
            onError(error);
            return getMessageFallback({
                error,
                key,
                namespace
            });
        }
        return result;
    };
    translateFn.raw = (key)=>{
        if (hasMessagesError) {
            onError(messagesOrError);
            return getMessageFallback({
                error: messagesOrError,
                key,
                namespace
            });
        }
        const messages = messagesOrError;
        try {
            return resolvePath(locale, messages, key, namespace);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.MISSING_MESSAGE, error.message);
        }
    };
    translateFn.has = (key)=>{
        if (hasMessagesError) {
            return false;
        }
        try {
            resolvePath(locale, messagesOrError, key, namespace);
            return true;
        } catch  {
            return false;
        }
    };
    return translateFn;
}
/**
 * For the strictly typed messages to work we have to wrap the namespace into
 * a mandatory prefix. See https://stackoverflow.com/a/71529575/343045
 */ function resolveNamespace(namespace, namespacePrefix) {
    return namespace === namespacePrefix ? undefined : namespace.slice((namespacePrefix + '.').length);
}
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * (365 / 12); // Approximation
const QUARTER = MONTH * 3;
const YEAR = DAY * 365;
const UNIT_SECONDS = {
    second: SECOND,
    seconds: SECOND,
    minute: MINUTE,
    minutes: MINUTE,
    hour: HOUR,
    hours: HOUR,
    day: DAY,
    days: DAY,
    week: WEEK,
    weeks: WEEK,
    month: MONTH,
    months: MONTH,
    quarter: QUARTER,
    quarters: QUARTER,
    year: YEAR,
    years: YEAR
};
function resolveRelativeTimeUnit(seconds) {
    const absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
        return 'second';
    } else if (absValue < HOUR) {
        return 'minute';
    } else if (absValue < DAY) {
        return 'hour';
    } else if (absValue < WEEK) {
        return 'day';
    } else if (absValue < MONTH) {
        return 'week';
    } else if (absValue < YEAR) {
        return 'month';
    }
    return 'year';
}
function calculateRelativeTimeValue(seconds, unit) {
    // We have to round the resulting values, as `Intl.RelativeTimeFormat`
    // will include fractions like '2.1 hours ago'.
    return Math.round(seconds / UNIT_SECONDS[unit]);
}
function createFormatter(props) {
    const { _cache: cache = createCache(), _formatters: formatters = createIntlFormatters(cache), formats, locale, onError = defaultOnError, timeZone: globalTimeZone } = props;
    function applyTimeZone(options) {
        if (!options?.timeZone) {
            if (globalTimeZone) {
                options = {
                    ...options,
                    timeZone: globalTimeZone
                };
            } else {
                onError(new IntlError(IntlErrorCode.ENVIRONMENT_FALLBACK, `The \`timeZone\` parameter wasn't provided and there is no global default configured. Consider adding a global default to avoid markup mismatches caused by environment differences. Learn more: https://next-intl.dev/docs/configuration#time-zone`));
            }
        }
        return options;
    }
    function resolveFormatOrOptions(typeFormats, formatOrOptions, overrides) {
        let options;
        if (typeof formatOrOptions === 'string') {
            const formatName = formatOrOptions;
            options = typeFormats?.[formatName];
            if (!options) {
                const error = new IntlError(IntlErrorCode.MISSING_FORMAT, `Format \`${formatName}\` is not available.`);
                onError(error);
                throw error;
            }
        } else {
            options = formatOrOptions;
        }
        if (overrides) {
            options = {
                ...options,
                ...overrides
            };
        }
        return options;
    }
    function getFormattedValue(formatOrOptions, overrides, typeFormats, formatter, getFallback) {
        let options;
        try {
            options = resolveFormatOrOptions(typeFormats, formatOrOptions, overrides);
        } catch  {
            return getFallback();
        }
        try {
            return formatter(options);
        } catch (error) {
            onError(new IntlError(IntlErrorCode.FORMATTING_ERROR, error.message));
            return getFallback();
        }
    }
    function dateTime(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).format(value);
        }, ()=>String(value));
    }
    function dateTimeRange(start, end, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).formatRange(start, end);
        }, ()=>[
                dateTime(start),
                dateTime(end)
            ].join(' – '));
    }
    function number(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.number, (options)=>formatters.getNumberFormat(locale, options).format(value), ()=>String(value));
    }
    function getGlobalNow() {
        // Only read when necessary to avoid triggering a `dynamicIO` error
        // unnecessarily (`now` is only needed for `format.relativeTime`)
        if (props.now) {
            return props.now;
        } else {
            onError(new IntlError(IntlErrorCode.ENVIRONMENT_FALLBACK, `The \`now\` parameter wasn't provided to \`relativeTime\` and there is no global default configured, therefore the current time will be used as a fallback. See https://next-intl.dev/docs/usage/dates-times#relative-times-usenow`));
            return new Date();
        }
    }
    function relativeTime(date, nowOrOptions) {
        try {
            let nowDate, unit;
            const opts = {};
            if (nowOrOptions instanceof Date || typeof nowOrOptions === 'number') {
                nowDate = new Date(nowOrOptions);
            } else if (nowOrOptions) {
                if (nowOrOptions.now != null) {
                    nowDate = new Date(nowOrOptions.now);
                } else {
                    nowDate = getGlobalNow();
                }
                unit = nowOrOptions.unit;
                opts.style = nowOrOptions.style;
                // @ts-expect-error -- Types are slightly outdated
                opts.numberingSystem = nowOrOptions.numberingSystem;
            }
            if (!nowDate) {
                nowDate = getGlobalNow();
            }
            const dateDate = new Date(date);
            const seconds = (dateDate.getTime() - nowDate.getTime()) / 1000;
            if (!unit) {
                unit = resolveRelativeTimeUnit(seconds);
            }
            // `numeric: 'auto'` can theoretically produce output like "yesterday",
            // but it only works with integers. E.g. -1 day will produce "yesterday",
            // but -1.1 days will produce "-1.1 days". Rounding before formatting is
            // not desired, as the given dates might cross a threshold were the
            // output isn't correct anymore. Example: 2024-01-08T23:00:00.000Z and
            // 2024-01-08T01:00:00.000Z would produce "yesterday", which is not the
            // case. By using `always` we can ensure correct output. The only exception
            // is the formatting of times <1 second as "now".
            opts.numeric = unit === 'second' ? 'auto' : 'always';
            const value = calculateRelativeTimeValue(seconds, unit);
            return formatters.getRelativeTimeFormat(locale, opts).format(value, unit);
        } catch (error) {
            onError(new IntlError(IntlErrorCode.FORMATTING_ERROR, error.message));
            return String(date);
        }
    }
    function list(value, formatOrOptions, overrides) {
        const serializedValue = [];
        const richValues = new Map();
        // `formatToParts` only accepts strings, therefore we have to temporarily
        // replace React elements with a placeholder ID that can be used to retrieve
        // the original value afterwards.
        let index = 0;
        for (const item of value){
            let serializedItem;
            if (typeof item === 'object') {
                serializedItem = String(index);
                richValues.set(serializedItem, item);
            } else {
                serializedItem = String(item);
            }
            serializedValue.push(serializedItem);
            index++;
        }
        return getFormattedValue(formatOrOptions, overrides, formats?.list, // @ts-expect-error -- `richValues.size` is used to determine the return type, but TypeScript can't infer the meaning of this correctly
        (options)=>{
            const result = formatters.getListFormat(locale, options).formatToParts(serializedValue).map((part)=>part.type === 'literal' ? part.value : richValues.get(part.value) || part.value);
            if (richValues.size > 0) {
                return result;
            } else {
                return result.join('');
            }
        }, ()=>String(value));
    }
    return {
        dateTime,
        number,
        relativeTime,
        list,
        dateTimeRange
    };
}
function validateMessagesSegment(messages, invalidKeyLabels, parentPath) {
    Object.entries(messages).forEach(([key, messageOrMessages])=>{
        if (key.includes('.')) {
            let keyLabel = key;
            if (parentPath) keyLabel += ` (at ${parentPath})`;
            invalidKeyLabels.push(keyLabel);
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (messageOrMessages != null && typeof messageOrMessages === 'object') {
            validateMessagesSegment(messageOrMessages, invalidKeyLabels, joinPath(parentPath, key));
        }
    });
}
function validateMessages(messages, onError) {
    const invalidKeyLabels = [];
    validateMessagesSegment(messages, invalidKeyLabels);
    if (invalidKeyLabels.length > 0) {
        onError(new IntlError(IntlErrorCode.INVALID_KEY, `Namespace keys can not contain the character "." as this is used to express nesting. Please remove it or replace it with another character.

Invalid ${invalidKeyLabels.length === 1 ? 'key' : 'keys'}: ${invalidKeyLabels.join(', ')}

If you're migrating from a flat structure, you can convert your messages as follows:

import {set} from "lodash";

const input = {
  "one.one": "1.1",
  "one.two": "1.2",
  "two.one.one": "2.1.1"
};

const output = Object.entries(input).reduce(
  (acc, [key, value]) => set(acc, key, value),
  {}
);

// Output:
//
// {
//   "one": {
//     "one": "1.1",
//     "two": "1.2"
//   },
//   "two": {
//     "one": {
//       "one": "2.1.1"
//     }
//   }
// }
`));
    }
}
/**
 * Enhances the incoming props with defaults.
 */ function initializeConfig({ formats, getMessageFallback, messages, onError, ...rest }) {
    const finalOnError = onError || defaultOnError;
    const finalGetMessageFallback = getMessageFallback || defaultGetMessageFallback;
    {
        if (messages) {
            validateMessages(messages, finalOnError);
        }
    }
    return {
        ...rest,
        formats: formats || undefined,
        messages: messages || undefined,
        onError: finalOnError,
        getMessageFallback: finalGetMessageFallback
    };
}
;
}),
"[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntlProvider",
    ()=>IntlProvider,
    "_useExtracted",
    ()=>useExtracted,
    "useFormatter",
    ()=>useFormatter,
    "useLocale",
    ()=>useLocale,
    "useMessages",
    ()=>useMessages,
    "useNow",
    ()=>useNow,
    "useTimeZone",
    ()=>useTimeZone,
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/initializeConfig-CIDVMS2E.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
const IntlContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function IntlProvider({ children, formats, getMessageFallback, locale, messages, now, onError, timeZone }) {
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(IntlContext);
    // The formatter cache is released when the locale changes. For
    // long-running apps with a persistent `IntlProvider` at the root,
    // this can reduce the memory footprint (e.g. in React Native).
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return prevContext?.cache || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])();
    }, [
        locale,
        prevContext?.cache
    ]);
    const formatters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>prevContext?.formatters || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(cache), [
        cache,
        prevContext?.formatters
    ]);
    // Memoizing this value helps to avoid triggering a re-render of all
    // context consumers in case the configuration didn't change. However,
    // if some of the non-primitive values change, a re-render will still
    // be triggered. Note that there's no need to put `memo` on `IntlProvider`
    // itself, because the `children` typically change on every render.
    // There's some burden on the consumer side if it's important to reduce
    // re-renders, put that's how React works.
    // See: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#context-updates-and-render-optimizations
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])({
                locale,
                // (required by provider)
                formats: formats === undefined ? prevContext?.formats : formats,
                getMessageFallback: getMessageFallback || prevContext?.getMessageFallback,
                messages: messages === undefined ? prevContext?.messages : messages,
                now: now || prevContext?.now,
                onError: onError || prevContext?.onError,
                timeZone: timeZone || prevContext?.timeZone
            }),
            formatters,
            cache
        }), [
        cache,
        formats,
        formatters,
        getMessageFallback,
        locale,
        messages,
        now,
        onError,
        prevContext,
        timeZone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IntlContext.Provider, {
        value: value,
        children: children
    });
}
function useIntlContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(IntlContext);
    if (!context) {
        throw new Error('No intl context found. Have you configured the provider? See https://next-intl.dev/docs/usage/configuration#server-client-components');
    }
    return context;
}
let hasWarnedForMissingTimezone = false;
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
function useTranslationsImpl(allMessagesPrefixed, namespacePrefixed, namespacePrefix) {
    const { cache, formats: globalFormats, formatters, getMessageFallback, locale, onError, timeZone } = useIntlContext();
    // The `namespacePrefix` is part of the type system.
    // See the comment in the hook invocation.
    const allMessages = allMessagesPrefixed[namespacePrefix];
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(namespacePrefixed, namespacePrefix);
    if (!timeZone && !hasWarnedForMissingTimezone && isServer) {
        // eslint-disable-next-line react-compiler/react-compiler
        hasWarnedForMissingTimezone = true;
        onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].ENVIRONMENT_FALLBACK, `There is no \`timeZone\` configured, this can lead to markup mismatches caused by environment differences. Consider adding a global default: https://next-intl.dev/docs/configuration#time-zone`));
    }
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
            cache,
            formatters,
            getMessageFallback,
            messages: allMessages,
            namespace,
            onError,
            formats: globalFormats,
            locale,
            timeZone
        }), [
        cache,
        formatters,
        getMessageFallback,
        allMessages,
        namespace,
        onError,
        globalFormats,
        locale,
        timeZone
    ]);
    return translate;
}
/**
 * Translates messages from the given namespace by using the ICU syntax.
 * See https://formatjs.io/docs/core-concepts/icu-syntax.
 *
 * If no namespace is provided, all available messages are returned.
 * The namespace can also indicate nesting by using a dot
 * (e.g. `namespace.Component`).
 */ function useTranslations(namespace) {
    const context = useIntlContext();
    const messages = context.messages;
    // We have to wrap the actual hook so the type inference for the optional
    // namespace works correctly. See https://stackoverflow.com/a/71529575/343045
    // The prefix ("!") is arbitrary.
    // @ts-expect-error Use the explicit annotation instead
    return useTranslationsImpl({
        '!': messages
    }, // @ts-expect-error
    namespace ? `!.${namespace}` : '!', '!');
}
function useLocale() {
    return useIntlContext().locale;
}
function getNow() {
    return new Date();
}
/**
 * @see https://next-intl.dev/docs/usage/dates-times#relative-times-usenow
 */ function useNow(options) {
    const updateInterval = options?.updateInterval;
    const { now: globalNow } = useIntlContext();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(globalNow || getNow());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!updateInterval) return;
        const intervalId = setInterval(()=>{
            setNow(getNow());
        }, updateInterval);
        return ()=>{
            clearInterval(intervalId);
        };
    }, [
        globalNow,
        updateInterval
    ]);
    return updateInterval == null && globalNow ? globalNow : now;
}
function useTimeZone() {
    return useIntlContext().timeZone;
}
function useMessages() {
    const context = useIntlContext();
    if (!context.messages) {
        throw new Error('No messages found. Have you configured them correctly? See https://next-intl.dev/docs/configuration#messages');
    }
    return context.messages;
}
function useFormatter() {
    const { formats, formatters, locale, now: globalNow, onError, timeZone } = useIntlContext();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CIDVMS2E$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])({
            formats,
            locale,
            now: globalNow,
            onError,
            timeZone,
            _formatters: formatters
        }), [
        formats,
        formatters,
        globalNow,
        locale,
        onError,
        timeZone
    ]);
}
function getArgs(messageOrParams, ...rest) {
    let message, values, formats;
    if (typeof messageOrParams === 'string') {
        message = messageOrParams;
        values = rest[0];
        formats = rest[1];
    } else {
        message = messageOrParams.message;
        values = messageOrParams.values;
        formats = messageOrParams.formats;
    // `description` is is not used at runtime
    }
    // @ts-expect-error -- Secret fallback parameter
    return [
        undefined,
        // Always use fallback if not compiled
        values,
        formats,
        message
    ];
}
// Note: This API is usually compiled into `useTranslations`,
// but there is some fallback handling which allows this hook
// to still work when not being compiled.
//
// This is relevant for:
// - Isolated environments like tests, Storybook, etc.
// - Fallbacks in case an extracted message is not yet available
function useExtracted(namespace) {
    const t = useTranslations(namespace);
    function translateFn(...params) {
        // @ts-expect-error -- Passing `undefined` as an ID is secretly allowed here
        return t(...getArgs(...params));
    }
    translateFn.rich = (...params)=>// @ts-expect-error -- Passing `undefined` as an ID is secretly allowed here
        t.rich(...getArgs(...params));
    translateFn.markup = (...params)=>// @ts-expect-error -- Passing `undefined` as an ID is secretly allowed here
        t.markup(...getArgs(...params));
    translateFn.has = function translateHasFn(// eslint-disable-next-line @typescript-eslint/no-unused-vars
    message) {
        // Not really something better we can do here
        return true;
    };
    return translateFn;
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocaleAsPrefix",
    ()=>getLocaleAsPrefix,
    "getLocalePrefix",
    ()=>getLocalePrefix,
    "getLocalizedTemplate",
    ()=>getLocalizedTemplate,
    "getSortedPathnames",
    ()=>getSortedPathnames,
    "hasPathnamePrefixed",
    ()=>hasPathnamePrefixed,
    "isLocalizableHref",
    ()=>isLocalizableHref,
    "isPromise",
    ()=>isPromise,
    "matchesPathname",
    ()=>matchesPathname,
    "normalizeTrailingSlash",
    ()=>normalizeTrailingSlash,
    "prefixPathname",
    ()=>prefixPathname,
    "templateToRegex",
    ()=>templateToRegex,
    "unprefixPathname",
    ()=>unprefixPathname
]);
function isRelativeHref(href) {
    const pathname = typeof href === 'object' ? href.pathname : href;
    return pathname != null && !pathname.startsWith('/');
}
function isLocalHref(href) {
    if (typeof href === 'object') {
        return href.host == null && href.hostname == null;
    } else {
        const hasProtocol = /^[a-z]+:/i.test(href);
        return !hasProtocol;
    }
}
function isLocalizableHref(href) {
    return isLocalHref(href) && !isRelativeHref(href);
}
function unprefixPathname(pathname, prefix) {
    return pathname.replace(new RegExp(`^${prefix}`), '') || '/';
}
function prefixPathname(prefix, pathname) {
    let localizedHref = prefix;
    // Avoid trailing slashes
    if (/^\/(\?.*)?$/.test(pathname)) {
        pathname = pathname.slice(1);
    }
    localizedHref += pathname;
    return localizedHref;
}
function hasPathnamePrefixed(prefix, pathname) {
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
}
function hasTrailingSlash() {
    try {
        // Provided via `env` setting in `next.config.js` via the plugin
        return process.env._next_intl_trailing_slash === 'true';
    } catch  {
        return false;
    }
}
function getLocalizedTemplate(pathnameConfig, locale, internalTemplate) {
    return typeof pathnameConfig === 'string' ? pathnameConfig : pathnameConfig[locale] || internalTemplate;
}
function normalizeTrailingSlash(pathname) {
    const trailingSlash = hasTrailingSlash();
    const [path, ...hashParts] = pathname.split('#');
    const hash = hashParts.join('#');
    let normalizedPath = path;
    if (normalizedPath !== '/') {
        const pathnameEndsWithSlash = normalizedPath.endsWith('/');
        if (trailingSlash && !pathnameEndsWithSlash) {
            normalizedPath += '/';
        } else if (!trailingSlash && pathnameEndsWithSlash) {
            normalizedPath = normalizedPath.slice(0, -1);
        }
    }
    if (hash) {
        normalizedPath += '#' + hash;
    }
    return normalizedPath;
}
function matchesPathname(/** E.g. `/users/[userId]-[userName]` */ template, /** E.g. `/users/23-jane` */ pathname) {
    const normalizedTemplate = normalizeTrailingSlash(template);
    const normalizedPathname = normalizeTrailingSlash(pathname);
    const regex = templateToRegex(normalizedTemplate);
    return regex.test(normalizedPathname);
}
function getLocalePrefix(locale, localePrefix) {
    return localePrefix.mode !== 'never' && localePrefix.prefixes?.[locale] || // We return a prefix even if `mode: 'never'`. It's up to the consumer
    // to decide to use it or not.
    getLocaleAsPrefix(locale);
}
function getLocaleAsPrefix(locale) {
    return '/' + locale;
}
function templateToRegex(template) {
    const regexPattern = template// Replace optional catchall ('[[...slug]]')
    .replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, '(?:/(.*))?') // With leading slash
    .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, '(?:/(.*))?') // Without leading slash
    // Replace catchall ('[...slug]')
    .replace(/\[(\.\.\.[^\]]+)\]/g, '(.+)')// Replace regular parameter ('[slug]')
    .replace(/\[([^\]]+)\]/g, '([^/]+)');
    return new RegExp(`^${regexPattern}$`);
}
function isOptionalCatchAllSegment(pathname) {
    return pathname.includes('[[...');
}
function isCatchAllSegment(pathname) {
    return pathname.includes('[...');
}
function isDynamicSegment(pathname) {
    return pathname.includes('[');
}
function comparePathnamePairs(a, b) {
    const pathA = a.split('/');
    const pathB = b.split('/');
    const maxLength = Math.max(pathA.length, pathB.length);
    for(let i = 0; i < maxLength; i++){
        const segmentA = pathA[i];
        const segmentB = pathB[i];
        // If one of the paths ends, prioritize the shorter path
        if (!segmentA && segmentB) return -1;
        if (segmentA && !segmentB) return 1;
        if (!segmentA && !segmentB) continue;
        // Prioritize static segments over dynamic segments
        if (!isDynamicSegment(segmentA) && isDynamicSegment(segmentB)) return -1;
        if (isDynamicSegment(segmentA) && !isDynamicSegment(segmentB)) return 1;
        // Prioritize non-catch-all segments over catch-all segments
        if (!isCatchAllSegment(segmentA) && isCatchAllSegment(segmentB)) return -1;
        if (isCatchAllSegment(segmentA) && !isCatchAllSegment(segmentB)) return 1;
        // Prioritize non-optional catch-all segments over optional catch-all segments
        if (!isOptionalCatchAllSegment(segmentA) && isOptionalCatchAllSegment(segmentB)) {
            return -1;
        }
        if (isOptionalCatchAllSegment(segmentA) && !isOptionalCatchAllSegment(segmentB)) {
            return 1;
        }
        if (segmentA === segmentB) continue;
    }
    // Both pathnames are completely static
    return 0;
}
function getSortedPathnames(pathnames) {
    return pathnames.sort(comparePathnamePairs);
}
function isPromise(value) {
    // https://github.com/amannn/next-intl/issues/1711
    return typeof value.then === 'function';
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPathnamePrefix",
    ()=>applyPathnamePrefix,
    "compileLocalizedPathname",
    ()=>compileLocalizedPathname,
    "getBasePath",
    ()=>getBasePath,
    "getRoute",
    ()=>getRoute,
    "normalizeNameOrNameWithParams",
    ()=>normalizeNameOrNameWithParams,
    "serializeSearchParams",
    ()=>serializeSearchParams,
    "validateReceivedConfig",
    ()=>validateReceivedConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/shared/utils.js [app-ssr] (ecmascript)");
;
// Minor false positive: A route that has both optional and
// required params will allow optional params.
// For `Link`
// For `getPathname` (hence also its consumers: `redirect`, `useRouter`, …)
function normalizeNameOrNameWithParams(href) {
    return typeof href === 'string' ? {
        pathname: href
    } : href;
}
function serializeSearchParams(searchParams) {
    function serializeValue(value) {
        return String(value);
    }
    const urlSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(searchParams)){
        if (Array.isArray(value)) {
            value.forEach((cur)=>{
                urlSearchParams.append(key, serializeValue(cur));
            });
        } else {
            urlSearchParams.set(key, serializeValue(value));
        }
    }
    return '?' + urlSearchParams.toString();
}
function compileLocalizedPathname({ pathname, locale, params, pathnames, query }) {
    function compilePath(value) {
        const pathnameConfig = pathnames[value];
        let compiled;
        if (pathnameConfig) {
            const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedTemplate"])(pathnameConfig, locale, value);
            compiled = template;
            if (params) {
                Object.entries(params).forEach(([key, paramValue])=>{
                    let regexp, replacer;
                    if (Array.isArray(paramValue)) {
                        regexp = `(\\[)?\\[...${key}\\](\\])?`;
                        replacer = paramValue.map((v)=>String(v)).join('/');
                    } else {
                        regexp = `\\[${key}\\]`;
                        replacer = String(paramValue);
                    }
                    compiled = compiled.replace(new RegExp(regexp, 'g'), replacer);
                });
            }
            // Clean up optional catch-all segments that were not replaced
            compiled = compiled.replace(/\[\[\.\.\..+\]\]/g, '');
            if (compiled.includes('[')) {
                // Next.js throws anyway, therefore better provide a more helpful error message
                throw new Error(`Insufficient params provided for localized pathname.\nTemplate: ${template}\nParams: ${JSON.stringify(params)}`);
            }
            compiled = encodePathname(compiled);
        } else {
            // Unknown pathnames
            compiled = value;
        }
        compiled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(compiled);
        if (query) {
            // This also encodes non-ASCII characters by
            // using `new URLSearchParams()` internally
            compiled += serializeSearchParams(query);
        }
        return compiled;
    }
    if (typeof pathname === 'string') {
        return compilePath(pathname);
    } else {
        const { pathname: internalPathname, ...rest } = pathname;
        const compiled = compilePath(internalPathname);
        const result = {
            ...rest,
            pathname: compiled
        };
        return result;
    }
}
function encodePathname(pathname) {
    // Generally, to comply with RFC 3986 and Google's best practices for URL structures
    // (https://developers.google.com/search/docs/crawling-indexing/url-structure),
    // we should always encode non-ASCII characters.
    //
    // There are two places where next-intl interacts with potentially non-ASCII URLs:
    // 1. Middleware: When mapping a localized pathname to a non-localized pathname internally
    // 2. Navigation APIs: When generating a URLs to be used for <Link /> & friends
    //
    // Next.js normalizes incoming pathnames to always be encoded, therefore we can safely
    // decode them there (see middleware.tsx). On the other hand, Next.js doesn't consistently
    // encode non-ASCII characters that are passed to navigation APIs:
    // 1. <Link /> doesn't encode non-ASCII characters
    // 2. useRouter() uses `new URL()` internally, which will encode—but only if necessary
    // 3. redirect() uses useRouter() on the client, but on the server side only
    //    assigns the location header without encoding.
    //
    // In addition to this, for getPathname() we need to encode non-ASCII characters.
    //
    // Therefore, the bottom line is that next-intl should take care of encoding non-ASCII
    // characters in all cases, but can rely on `new URL()` to not double-encode characters.
    return new URL(pathname, 'http://l').pathname;
}
function getRoute(locale, pathname, pathnames) {
    const sortedPathnames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedPathnames"])(Object.keys(pathnames));
    const decoded = decodeURI(pathname);
    for (const internalPathname of sortedPathnames){
        const localizedPathnamesOrPathname = pathnames[internalPathname];
        if (typeof localizedPathnamesOrPathname === 'string') {
            const localizedPathname = localizedPathnamesOrPathname;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesPathname"])(localizedPathname, decoded)) {
                return internalPathname;
            }
        } else {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesPathname"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedTemplate"])(localizedPathnamesOrPathname, locale, internalPathname), decoded)) {
                return internalPathname;
            }
        }
    }
    return pathname;
}
function getBasePath(pathname, windowPathname = window.location.pathname) {
    if (pathname === '/') {
        return windowPathname;
    } else {
        return windowPathname.replace(pathname, '');
    }
}
function applyPathnamePrefix(pathname, locale, routing, force) {
    const { mode } = routing.localePrefix;
    let shouldPrefix;
    if (force !== undefined) {
        shouldPrefix = force;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLocalizableHref"])(pathname)) {
        if (mode === 'always') {
            shouldPrefix = true;
        } else if (mode === 'as-needed') {
            shouldPrefix = routing.domains ? // Since locales are unique per domain, any locale that is a
            // default locale of a domain doesn't require a prefix
            !routing.domains.some((cur)=>cur.defaultLocale === locale) : locale !== routing.defaultLocale;
        }
    }
    return shouldPrefix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefixPathname"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalePrefix"])(locale, routing.localePrefix), pathname) : pathname;
}
function validateReceivedConfig(config) {
    if (config.localePrefix?.mode === 'as-needed' && !('defaultLocale' in config)) {
        throw new Error("`localePrefix: 'as-needed' requires a `defaultLocale`.");
    }
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/syncLocaleCookie.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>syncLocaleCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/utils.js [app-ssr] (ecmascript)");
;
/**
 * We have to keep the cookie value in sync as Next.js might
 * skip a request to the server due to its router cache.
 * See https://github.com/amannn/next-intl/issues/786.
 */ function syncLocaleCookie(localeCookie, pathname, locale, nextLocale) {
    const isSwitchingLocale = nextLocale !== locale && nextLocale != null;
    if (!localeCookie || !isSwitchingLocale || // Theoretical case, we always have a pathname in a real app,
    // only not when running e.g. in a simulated test environment
    !pathname) {
        return;
    }
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBasePath"])(pathname);
    const hasBasePath = basePath !== '';
    const defaultPath = hasBasePath ? basePath : '/';
    const { name, ...rest } = localeCookie;
    if (!rest.path) {
        rest.path = defaultPath;
    }
    let localeCookieString = `${name}=${nextLocale};`;
    for (const [key, value] of Object.entries(rest)){
        // Map object properties to cookie properties.
        // Interestingly, `maxAge` corresponds to `max-age`,
        // while `sameSite` corresponds to `SameSite`.
        // Also, keys are case-insensitive.
        const targetKey = key === 'maxAge' ? 'max-age' : key;
        localeCookieString += `${targetKey}`;
        if (typeof value !== 'boolean') {
            localeCookieString += '=' + value;
        }
        // A trailing ";" is allowed by browsers
        localeCookieString += ';';
    }
    // Note that writing to `document.cookie` doesn't overwrite all
    // cookies, but only the ones referenced via the name here.
    document.cookie = localeCookieString;
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/BaseLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaseLink$1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$syncLocaleCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/syncLocaleCookie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function BaseLink({ href, locale, localeCookie, onClick, prefetch, ...rest }, ref) {
    const curLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const isChangingLocale = locale != null && locale !== curLocale;
    // The types aren't entirely correct here. Outside of Next.js
    // `useParams` can be called, but the return type is `null`.
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    function onLinkClick(event) {
        // Even though we force a prefix when changing locales,
        // this could be a cache hit of the client-side router,
        // therefore we sync the cookie to ensure it's up to date.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$syncLocaleCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(localeCookie, pathname, curLocale, locale);
        if (onClick) onClick(event);
    }
    if (isChangingLocale) {
        if (prefetch && "development" !== 'production') {
            console.error('The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`');
        }
        prefetch = false;
    }
    // Somehow the types for `next/link` don't work as expected
    // when `moduleResolution: "nodenext"` is used.
    const Link = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Link, {
        ref: ref,
        href: href,
        hrefLang: isChangingLocale ? locale : undefined,
        onClick: onLinkClick,
        prefetch: prefetch,
        ...rest
    });
}
var BaseLink$1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(BaseLink);
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormatter",
    ()=>useFormatter,
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
;
/**
 * This is the main entry file when non-'react-server'
 * environments import from 'next-intl'.
 *
 * Maintainer notes:
 * - Make sure this mirrors the API from 'react-server'.
 * - Make sure everything exported from this module is
 *   supported in all Next.js versions that are supported.
 */ // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function callHook(name, hook) {
    return (...args)=>{
        try {
            return hook(...args);
        } catch  {
            throw new Error(`Failed to call \`${name}\` because the context from \`NextIntlClientProvider\` was not found.

This can happen because:
1) You intended to render this component as a Server Component, the render
   failed, and therefore React attempted to render the component on the client
   instead. If this is the case, check the console for server errors.
2) You intended to render this component on the client side, but no context was found.
   Learn more about this error here: https://next-intl.dev/docs/environments/server-client-components#missing-context`);
        }
    };
}
const useTranslations = callHook('useTranslations', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"]);
const useFormatter = callHook('useFormatter', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormatter"]);
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defineRouting
]);
function defineRouting(config) {
    if (config.domains) {
        validateUniqueLocalesPerDomain(config.domains);
    }
    return config;
}
function validateUniqueLocalesPerDomain(domains) {
    const domainsByLocale = new Map();
    for (const { domain, locales } of domains){
        for (const locale of locales){
            const localeDomains = domainsByLocale.get(locale) || new Set();
            localeDomains.add(domain);
            domainsByLocale.set(locale, localeDomains);
        }
    }
    const duplicateLocaleMessages = Array.from(domainsByLocale.entries()).filter(([, localeDomains])=>localeDomains.size > 1).map(([locale, localeDomains])=>`- "${locale}" is used by: ${Array.from(localeDomains).join(', ')}`);
    if (duplicateLocaleMessages.length > 0) {
        console.warn('Locales are expected to be unique per domain, but found overlap:\n' + duplicateLocaleMessages.join('\n') + '\nPlease see https://next-intl.dev/docs/routing/configuration#domains');
    }
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineRouting",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/routing/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "receiveRoutingConfig",
    ()=>receiveRoutingConfig
]);
function receiveRoutingConfig(input) {
    return {
        ...input,
        localePrefix: receiveLocalePrefixConfig(input.localePrefix),
        localeCookie: receiveLocaleCookie(input.localeCookie),
        localeDetection: input.localeDetection ?? true,
        alternateLinks: input.alternateLinks ?? true
    };
}
function receiveLocaleCookie(localeCookie) {
    return localeCookie ?? true ? {
        name: 'NEXT_LOCALE',
        sameSite: 'lax',
        ...typeof localeCookie === 'object' && localeCookie
    } : false;
}
function receiveLocalePrefixConfig(localePrefix) {
    return typeof localePrefix === 'object' ? localePrefix : {
        mode: localePrefix || 'always'
    };
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/shared/use.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>use
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// @ts-expect-error -- Ooof, Next.js doesn't make this easy.
// `use` is only available in React 19 canary, but we can
// use it in Next.js already as Next.js "vendors" a fixed
// version of React. However, if we'd simply put `use` in
// ESM code, then the build doesn't work since React does
// not export `use` officially. Therefore, we have to use
// something that is not statically analyzable. Once React
// 19 is out, we can remove this in the next major version.
var use = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__['use'.trim()];
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/createSharedNavigationFns.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createSharedNavigationFns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/routing/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$use$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/shared/use.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/shared/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$BaseLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/BaseLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Shared implementations for `react-server` and `react-client`
 */ function createSharedNavigationFns(getLocale, routing) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["receiveRoutingConfig"])(routing || {});
    {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateReceivedConfig"])(config);
    }
    const pathnames = config.pathnames;
    function Link({ href, locale, ...rest }, ref) {
        let pathname, params;
        if (typeof href === 'object') {
            pathname = href.pathname;
            // @ts-expect-error -- This is ok
            params = href.params;
        } else {
            pathname = href;
        }
        // @ts-expect-error -- This is ok
        const isLocalizable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLocalizableHref"])(href);
        const localePromiseOrValue = getLocale();
        const curLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromise"])(localePromiseOrValue) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$use$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(localePromiseOrValue) : localePromiseOrValue;
        const finalPathname = isLocalizable ? getPathname({
            locale: locale || curLocale,
            // @ts-expect-error -- This is ok
            href: pathnames == null ? pathname : {
                pathname,
                params
            },
            // Always include a prefix when changing locales
            forcePrefix: locale != null || undefined
        }) : pathname;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$BaseLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref: ref,
            href: typeof href === 'object' ? {
                ...href,
                pathname: finalPathname
            } : finalPathname,
            locale: locale,
            localeCookie: config.localeCookie,
            ...rest
        });
    }
    const LinkWithRef = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(Link);
    function getPathname(args) {
        const { forcePrefix, href, locale } = args;
        let pathname;
        if (pathnames == null) {
            if (typeof href === 'object') {
                pathname = href.pathname;
                if (href.query) {
                    pathname += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeSearchParams"])(href.query);
                }
            } else {
                pathname = href;
            }
        } else {
            pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileLocalizedPathname"])({
                locale,
                // @ts-expect-error -- This is ok
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeNameOrNameWithParams"])(href),
                // @ts-expect-error -- This is ok
                pathnames: config.pathnames
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPathnamePrefix"])(pathname, locale, config, forcePrefix);
    }
    function getRedirectFn(fn) {
        /** @see https://next-intl.dev/docs/routing/navigation#redirect */ return function redirectFn(args, ...rest) {
            return fn(getPathname(args), ...rest);
        };
    }
    const redirect$1 = getRedirectFn(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"]);
    const permanentRedirect$1 = getRedirectFn(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["permanentRedirect"]);
    return {
        config,
        Link: LinkWithRef,
        redirect: redirect$1,
        permanentRedirect: permanentRedirect$1,
        getPathname
    };
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/react-client/useBasePathname.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBasePathname
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/shared/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function useBasePathname(config) {
    // The types aren't entirely correct here. Outside of Next.js
    // `useParams` can be called, but the return type is `null`.
    // Notes on `useNextPathname`:
    // - Types aren't entirely correct. Outside of Next.js the
    //   hook will return `null` (e.g. unit tests)
    // - A base path is stripped from the result
    // - Rewrites *are* taken into account (i.e. the pathname
    //   that the user sees in the browser is returned)
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!pathname) return pathname;
        let unlocalizedPathname = pathname;
        const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalePrefix"])(locale, config.localePrefix);
        const isPathnamePrefixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPathnamePrefixed"])(prefix, pathname);
        if (isPathnamePrefixed) {
            unlocalizedPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unprefixPathname"])(pathname, prefix);
        } else if (config.localePrefix.mode !== 'never' && config.localePrefix.prefixes) {
            // Workaround for https://github.com/vercel/next.js/issues/73085
            const localeAsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocaleAsPrefix"])(locale);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPathnamePrefixed"])(localeAsPrefix, pathname)) {
                unlocalizedPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unprefixPathname"])(pathname, localeAsPrefix);
            }
        }
        return unlocalizedPathname;
    }, [
        config.localePrefix,
        locale,
        pathname
    ]);
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$createSharedNavigationFns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/createSharedNavigationFns.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$syncLocaleCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/syncLocaleCookie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/shared/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$useBasePathname$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/react-client/useBasePathname.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function createNavigation(routing) {
    const { Link, config, getPathname, ...redirects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$createSharedNavigationFns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"], routing);
    /** @see https://next-intl.dev/docs/routing/navigation#usepathname */ function usePathname$1() {
        const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$useBasePathname$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config);
        const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
        // @ts-expect-error -- Mirror the behavior from Next.js, where `null` is returned when `usePathname` is used outside of Next, but the types indicate that a string is always returned.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>pathname && // @ts-expect-error -- This is fine
            config.pathnames ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoute"])(locale, pathname, // @ts-expect-error -- This is fine
            config.pathnames) : pathname, [
            locale,
            pathname
        ]);
    }
    function useRouter$1() {
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
        const curLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
        const nextPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            function createHandler(fn) {
                return function handler(href, options) {
                    const { locale: nextLocale, ...rest } = options || {};
                    const pathname = getPathname({
                        href,
                        locale: nextLocale || curLocale,
                        // Always include a prefix when changing locales. Theoretically,
                        // this is only necessary for the case described in #2020. However,
                        // the full detection is rather expensive, and this behavior is
                        // consistent with the `Link` component. The downside is an
                        // additional redirect for users in other situations. Locale
                        // changes should be rare though, so this might be fine.
                        forcePrefix: nextLocale != null || undefined
                    });
                    const args = [
                        pathname
                    ];
                    if (Object.keys(rest).length > 0) {
                        // @ts-expect-error -- This is fine
                        args.push(rest);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$shared$2f$syncLocaleCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config.localeCookie, nextPathname, curLocale, nextLocale);
                    fn(...args);
                };
            }
            return {
                ...router,
                /** @see https://next-intl.dev/docs/routing/navigation#userouter */ push: createHandler(router.push),
                /** @see https://next-intl.dev/docs/routing/navigation#userouter */ replace: createHandler(router.replace),
                /** @see https://next-intl.dev/docs/routing/navigation#userouter */ prefetch: createHandler(router.prefetch)
            };
        }, [
            curLocale,
            nextPathname,
            router
        ]);
    }
    return {
        ...redirects,
        Link,
        usePathname: usePathname$1,
        useRouter: useRouter$1,
        getPathname
    };
}
;
}),
"[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNavigation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/allset/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search) {
    return value.indexOf(search);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
}),
"[project]/Desktop/allset/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: ''
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0), root, {
        length: -root.length
    }, props);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/Desktop/allset/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
}),
"[project]/Desktop/allset/node_modules/stylis/src/Serializer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children);
    for(var i = 0; i < length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
            element.value = element.props.join(',');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/Desktop/allset/node_modules/stylis/src/Prefixer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefix",
    ()=>prefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span') ? value : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(children, 'span') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch') ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}),
"[project]/Desktop/allset/node_modules/stylis/src/Middleware.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware,
    "namespace",
    ()=>namespace,
    "prefixer",
    ()=>prefixer,
    "rulesheet",
    ()=>rulesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Serializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Prefixer.js [app-ssr] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combine"])(element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"])(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case '::placeholder':
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copy"])(element, {
                                    props: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                    ]
                                })
                            ], callback);
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}),
"[project]/Desktop/allset/node_modules/stylis/src/Parser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Utility.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/stylis/src/Tokenizer.js [app-ssr] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caret"])()), root, parent), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) - length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length);
}
function comment(value, root, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0);
}
function declaration(value, root, parent, length) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length);
}
}),
"[project]/Desktop/allset/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Desktop/allset/node_modules/@babel/runtime/helpers/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _extends() {
    return module.exports = _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/Desktop/allset/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Desktop/allset/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/allset/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/allset/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/Desktop/allset/node_modules/react-is/index.js [app-ssr] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/Desktop/allset/node_modules/@auth0/auth0-react/dist/auth0-react.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Auth0Context",
    ()=>Auth0Context,
    "Auth0Provider",
    ()=>Auth0Provider,
    "AuthenticationError",
    ()=>d,
    "ConnectError",
    ()=>h,
    "GenericError",
    ()=>u,
    "InMemoryCache",
    ()=>ee,
    "LocalStorageCache",
    ()=>Q,
    "MfaRequiredError",
    ()=>f,
    "MissingRefreshTokenError",
    ()=>g,
    "OAuthError",
    ()=>OAuthError,
    "PopupCancelledError",
    ()=>m,
    "PopupTimeoutError",
    ()=>p,
    "ResponseType",
    ()=>pe,
    "TimeoutError",
    ()=>l,
    "UseDpopNonceError",
    ()=>w,
    "User",
    ()=>me,
    "initialContext",
    ()=>initialContext,
    "useAuth0",
    ()=>useAuth0,
    "withAuth0",
    ()=>withAuth0,
    "withAuthenticationRequired",
    ()=>withAuthenticationRequired
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
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
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function e(e, t) {
    var n = {};
    for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for(o = Object.getOwnPropertySymbols(e); i < o.length; i++)t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
    }
    return n;
}
"function" == typeof SuppressedError && SuppressedError;
var t = "undefined" != typeof globalThis ? globalThis : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function o(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
}
var i = o(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            var e = this;
            this.locked = new Map, this.addToLocked = function(t, n) {
                var o = e.locked.get(t);
                void 0 === o ? void 0 === n ? e.locked.set(t, []) : e.locked.set(t, [
                    n
                ]) : void 0 !== n && (o.unshift(n), e.locked.set(t, o));
            }, this.isLocked = function(t) {
                return e.locked.has(t);
            }, this.lock = function(t) {
                return new Promise(function(n, o) {
                    e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
                });
            }, this.unlock = function(t) {
                var n = e.locked.get(t);
                if (void 0 !== n && 0 !== n.length) {
                    var o = n.pop();
                    e.locked.set(t, n), void 0 !== o && setTimeout(o, 0);
                } else e.locked.delete(t);
            };
        }
        return e.getInstance = function() {
            return void 0 === e.instance && (e.instance = new e), e.instance;
        }, e;
    }();
    t.default = function() {
        return n.getInstance();
    };
});
n(i);
var r = n(o(function(e, n) {
    var o = t && t.__awaiter || function(e, t, n, o) {
        return new (n || (n = Promise))(function(i, r) {
            function s(e) {
                try {
                    c(o.next(e));
                } catch (e) {
                    r(e);
                }
            }
            function a(e) {
                try {
                    c(o.throw(e));
                } catch (e) {
                    r(e);
                }
            }
            function c(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value);
                }).then(s, a);
            }
            c((o = o.apply(e, t || [])).next());
        });
    }, r = t && t.__generator || function(e, t) {
        var n, o, i, r, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        };
        return r = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this;
        }), r;
        //TURBOPACK unreachable
        ;
        function a(r) {
            return function(a) {
                return function(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for(; s;)try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch(o = 0, i && (r = [
                            2 & r[0],
                            i.value
                        ]), r[0]){
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [
                                    0
                                ];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break;
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break;
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break;
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        r = t.call(e, s);
                    } catch (e) {
                        r = [
                            6,
                            e
                        ], o = 0;
                    } finally{
                        n = i = 0;
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    };
                }([
                    r,
                    a
                ]);
            };
        }
    }, s = t;
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var a = "browser-tabs-lock-key", c = {
        key: function(e) {
            return o(s, void 0, void 0, function() {
                return r(this, function(e) {
                    throw new Error("Unsupported");
                });
            });
        },
        getItem: function(e) {
            return o(s, void 0, void 0, function() {
                return r(this, function(e) {
                    throw new Error("Unsupported");
                });
            });
        },
        clear: function() {
            return o(s, void 0, void 0, function() {
                return r(this, function(e) {
                    return [
                        2,
                        window.localStorage.clear()
                    ];
                });
            });
        },
        removeItem: function(e) {
            return o(s, void 0, void 0, function() {
                return r(this, function(e) {
                    throw new Error("Unsupported");
                });
            });
        },
        setItem: function(e, t) {
            return o(s, void 0, void 0, function() {
                return r(this, function(e) {
                    throw new Error("Unsupported");
                });
            });
        },
        keySync: function(e) {
            return window.localStorage.key(e);
        },
        getItemSync: function(e) {
            return window.localStorage.getItem(e);
        },
        clearSync: function() {
            return window.localStorage.clear();
        },
        removeItemSync: function(e) {
            return window.localStorage.removeItem(e);
        },
        setItemSync: function(e, t) {
            return window.localStorage.setItem(e, t);
        }
    };
    function u(e) {
        return new Promise(function(t) {
            return setTimeout(t, e);
        });
    }
    function d(e) {
        for(var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", n = "", o = 0; o < e; o++){
            n += t[Math.floor(Math.random() * t.length)];
        }
        return n;
    }
    var h = function() {
        function e(t) {
            this.acquiredIatSet = new Set, this.storageHandler = void 0, this.id = Date.now().toString() + d(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = t, void 0 === e.waiters && (e.waiters = []);
        }
        return e.prototype.acquireLock = function(t, n) {
            return void 0 === n && (n = 5e3), o(this, void 0, void 0, function() {
                var o, i, s, h, l, p, m;
                return r(this, function(r) {
                    switch(r.label){
                        case 0:
                            o = Date.now() + d(4), i = Date.now() + n, s = a + "-" + t, h = void 0 === this.storageHandler ? c : this.storageHandler, r.label = 1;
                        case 1:
                            return Date.now() < i ? [
                                4,
                                u(30)
                            ] : [
                                3,
                                8
                            ];
                        case 2:
                            return r.sent(), null !== h.getItemSync(s) ? [
                                3,
                                5
                            ] : (l = this.id + "-" + t + "-" + o, [
                                4,
                                u(Math.floor(25 * Math.random()))
                            ]);
                        case 3:
                            return r.sent(), h.setItemSync(s, JSON.stringify({
                                id: this.id,
                                iat: o,
                                timeoutKey: l,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            })), [
                                4,
                                u(30)
                            ];
                        case 4:
                            return r.sent(), null !== (p = h.getItemSync(s)) && (m = JSON.parse(p)).id === this.id && m.iat === o ? (this.acquiredIatSet.add(o), this.refreshLockWhileAcquired(s, o), [
                                2,
                                !0
                            ]) : [
                                3,
                                7
                            ];
                        case 5:
                            return e.lockCorrector(void 0 === this.storageHandler ? c : this.storageHandler), [
                                4,
                                this.waitForSomethingToChange(i)
                            ];
                        case 6:
                            r.sent(), r.label = 7;
                        case 7:
                            return o = Date.now() + d(4), [
                                3,
                                1
                            ];
                        case 8:
                            return [
                                2,
                                !1
                            ];
                    }
                });
            });
        }, e.prototype.refreshLockWhileAcquired = function(e, t) {
            return o(this, void 0, void 0, function() {
                var n = this;
                return r(this, function(s) {
                    return setTimeout(function() {
                        return o(n, void 0, void 0, function() {
                            var n, o, s;
                            return r(this, function(r) {
                                switch(r.label){
                                    case 0:
                                        return [
                                            4,
                                            i.default().lock(t)
                                        ];
                                    case 1:
                                        return r.sent(), this.acquiredIatSet.has(t) ? (n = void 0 === this.storageHandler ? c : this.storageHandler, null === (o = n.getItemSync(e)) ? (i.default().unlock(t), [
                                            2
                                        ]) : ((s = JSON.parse(o)).timeRefreshed = Date.now(), n.setItemSync(e, JSON.stringify(s)), i.default().unlock(t), this.refreshLockWhileAcquired(e, t), [
                                            2
                                        ])) : (i.default().unlock(t), [
                                            2
                                        ]);
                                }
                            });
                        });
                    }, 1e3), [
                        2
                    ];
                });
            });
        }, e.prototype.waitForSomethingToChange = function(t) {
            return o(this, void 0, void 0, function() {
                return r(this, function(n) {
                    switch(n.label){
                        case 0:
                            return [
                                4,
                                new Promise(function(n) {
                                    var o = !1, i = Date.now(), r = !1;
                                    function s() {
                                        if (r || (window.removeEventListener("storage", s), e.removeFromWaiting(s), clearTimeout(a), r = !0), !o) {
                                            o = !0;
                                            var t = 50 - (Date.now() - i);
                                            t > 0 ? setTimeout(n, t) : n(null);
                                        }
                                    }
                                    window.addEventListener("storage", s), e.addToWaiting(s);
                                    var a = setTimeout(s, Math.max(0, t - Date.now()));
                                })
                            ];
                        case 1:
                            return n.sent(), [
                                2
                            ];
                    }
                });
            });
        }, e.addToWaiting = function(t) {
            this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }, e.removeFromWaiting = function(t) {
            void 0 !== e.waiters && (e.waiters = e.waiters.filter(function(e) {
                return e !== t;
            }));
        }, e.notifyWaiters = function() {
            void 0 !== e.waiters && e.waiters.slice().forEach(function(e) {
                return e();
            });
        }, e.prototype.releaseLock = function(e) {
            return o(this, void 0, void 0, function() {
                return r(this, function(t) {
                    switch(t.label){
                        case 0:
                            return [
                                4,
                                this.releaseLock__private__(e)
                            ];
                        case 1:
                            return [
                                2,
                                t.sent()
                            ];
                    }
                });
            });
        }, e.prototype.releaseLock__private__ = function(t) {
            return o(this, void 0, void 0, function() {
                var n, o, s, u;
                return r(this, function(r) {
                    switch(r.label){
                        case 0:
                            return n = void 0 === this.storageHandler ? c : this.storageHandler, o = a + "-" + t, null === (s = n.getItemSync(o)) ? [
                                2
                            ] : (u = JSON.parse(s)).id !== this.id ? [
                                3,
                                2
                            ] : [
                                4,
                                i.default().lock(u.iat)
                            ];
                        case 1:
                            r.sent(), this.acquiredIatSet.delete(u.iat), n.removeItemSync(o), i.default().unlock(u.iat), e.notifyWaiters(), r.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            });
        }, e.lockCorrector = function(t) {
            for(var n = Date.now() - 5e3, o = t, i = [], r = 0;;){
                var s = o.keySync(r);
                if (null === s) break;
                i.push(s), r++;
            }
            for(var c = !1, u = 0; u < i.length; u++){
                var d = i[u];
                if (d.includes(a)) {
                    var h = o.getItemSync(d);
                    if (null !== h) {
                        var l = JSON.parse(h);
                        (void 0 === l.timeRefreshed && l.timeAcquired < n || void 0 !== l.timeRefreshed && l.timeRefreshed < n) && (o.removeItemSync(d), c = !0);
                    }
                }
            }
            c && e.notifyWaiters();
        }, e.waiters = void 0, e;
    }();
    n.default = h;
}));
const s = {
    timeoutInSeconds: 60
}, a = {
    name: "auth0-spa-js",
    version: "2.7.0"
}, c = ()=>Date.now();
class u extends Error {
    constructor(e, t){
        super(t), this.error = e, this.error_description = t, Object.setPrototypeOf(this, u.prototype);
    }
    static fromPayload({ error: e, error_description: t }) {
        return new u(e, t);
    }
}
class d extends u {
    constructor(e, t, n, o = null){
        super(e, t), this.state = n, this.appState = o, Object.setPrototypeOf(this, d.prototype);
    }
}
class h extends u {
    constructor(e, t, n, o, i = null){
        super(e, t), this.connection = n, this.state = o, this.appState = i, Object.setPrototypeOf(this, h.prototype);
    }
}
class l extends u {
    constructor(){
        super("timeout", "Timeout"), Object.setPrototypeOf(this, l.prototype);
    }
}
class p extends l {
    constructor(e){
        super(), this.popup = e, Object.setPrototypeOf(this, p.prototype);
    }
}
class m extends u {
    constructor(e){
        super("cancelled", "Popup closed"), this.popup = e, Object.setPrototypeOf(this, m.prototype);
    }
}
class f extends u {
    constructor(e, t, n){
        super(e, t), this.mfa_token = n, Object.setPrototypeOf(this, f.prototype);
    }
}
class g extends u {
    constructor(e, t){
        super("missing_refresh_token", `Missing Refresh Token (audience: '${b(e, [
            "default"
        ])}', scope: '${b(t)}')`), this.audience = e, this.scope = t, Object.setPrototypeOf(this, g.prototype);
    }
}
class y extends u {
    constructor(e, t){
        super("missing_scopes", `Missing requested scopes after refresh (audience: '${b(e, [
            "default"
        ])}', missing scope: '${b(t)}')`), this.audience = e, this.scope = t, Object.setPrototypeOf(this, y.prototype);
    }
}
class w extends u {
    constructor(e){
        super("use_dpop_nonce", "Server rejected DPoP proof: wrong nonce"), this.newDpopNonce = e, Object.setPrototypeOf(this, w.prototype);
    }
}
function b(e, t = []) {
    return e && !t.includes(e) ? e : "";
}
const k = ()=>window.crypto, v = ()=>{
    const e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t = "";
    return Array.from(k().getRandomValues(new Uint8Array(43))).forEach((n)=>t += e[n % e.length]), t;
}, _ = (e)=>btoa(e), S = (t)=>{
    var { clientId: n } = t, o = e(t, [
        "clientId"
    ]);
    return new URLSearchParams(((e)=>Object.keys(e).filter((t)=>void 0 !== e[t]).reduce((t, n)=>Object.assign(Object.assign({}, t), {
                [n]: e[n]
            }), {}))(Object.assign({
        client_id: n
    }, o))).toString();
}, I = async (e)=>{
    const t = k().subtle.digest({
        name: "SHA-256"
    }, (new TextEncoder).encode(e));
    return await t;
}, T = (e)=>((e)=>decodeURIComponent(atob(e).split("").map((e)=>"%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)).join("")))(e.replace(/_/g, "/").replace(/-/g, "+")), O = (e)=>{
    const t = new Uint8Array(e);
    return ((e)=>{
        const t = {
            "+": "-",
            "/": "_",
            "=": ""
        };
        return e.replace(/[+/=]/g, (e)=>t[e]);
    })(window.btoa(String.fromCharCode(...Array.from(t))));
}, P = new TextEncoder, j = new TextDecoder;
function C(e) {
    return "string" == typeof e ? P.encode(e) : j.decode(e);
}
function x(e) {
    if ("number" != typeof e.modulusLength || e.modulusLength < 2048) throw new R(`${e.name} modulusLength must be at least 2048 bits`);
}
async function K(e, t, n) {
    if (!1 === n.usages.includes("sign")) throw new TypeError('private CryptoKey instances used for signing assertions must include "sign" in their "usages"');
    const o = `${z(C(JSON.stringify(e)))}.${z(C(JSON.stringify(t)))}`;
    return `${o}.${z(await crypto.subtle.sign(function(e) {
        switch(e.algorithm.name){
            case "ECDSA":
                return {
                    name: e.algorithm.name,
                    hash: "SHA-256"
                };
            case "RSA-PSS":
                return x(e.algorithm), {
                    name: e.algorithm.name,
                    saltLength: 32
                };
            case "RSASSA-PKCS1-v1_5":
                return x(e.algorithm), {
                    name: e.algorithm.name
                };
            case "Ed25519":
                return {
                    name: e.algorithm.name
                };
        }
        throw new N;
    }(n), n, C(o)))}`;
}
let E;
if (Uint8Array.prototype.toBase64) E = (e)=>(e instanceof ArrayBuffer && (e = new Uint8Array(e)), e.toBase64({
        alphabet: "base64url",
        omitPadding: !0
    }));
else {
    const e = 32768;
    E = (t)=>{
        t instanceof ArrayBuffer && (t = new Uint8Array(t));
        const n = [];
        for(let o = 0; o < t.byteLength; o += e)n.push(String.fromCharCode.apply(null, t.subarray(o, o + e)));
        return btoa(n.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
}
function z(e) {
    return E(e);
}
class N extends Error {
    constructor(e){
        var t;
        super(null != e ? e : "operation not supported"), this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor);
    }
}
class R extends Error {
    constructor(e){
        var t;
        super(e), this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor);
    }
}
function D(e) {
    switch(e.algorithm.name){
        case "RSA-PSS":
            return function(e) {
                if ("SHA-256" === e.algorithm.hash.name) return "PS256";
                throw new N("unsupported RsaHashedKeyAlgorithm hash name");
            }(e);
        case "RSASSA-PKCS1-v1_5":
            return function(e) {
                if ("SHA-256" === e.algorithm.hash.name) return "RS256";
                throw new N("unsupported RsaHashedKeyAlgorithm hash name");
            }(e);
        case "ECDSA":
            return function(e) {
                if ("P-256" === e.algorithm.namedCurve) return "ES256";
                throw new N("unsupported EcKeyAlgorithm namedCurve");
            }(e);
        case "Ed25519":
            return "Ed25519";
        default:
            throw new N("unsupported CryptoKey algorithm name");
    }
}
function A(e) {
    return e instanceof CryptoKey;
}
function U(e) {
    return A(e) && "public" === e.type;
}
async function Z(e, t, n, o, i, r) {
    const s = null == e ? void 0 : e.privateKey, a = null == e ? void 0 : e.publicKey;
    if (!A(c = s) || "private" !== c.type) throw new TypeError('"keypair.privateKey" must be a private CryptoKey');
    var c;
    if (!U(a)) throw new TypeError('"keypair.publicKey" must be a public CryptoKey');
    if (!0 !== a.extractable) throw new TypeError('"keypair.publicKey.extractable" must be true');
    if ("string" != typeof t) throw new TypeError('"htu" must be a string');
    if ("string" != typeof n) throw new TypeError('"htm" must be a string');
    if (void 0 !== o && "string" != typeof o) throw new TypeError('"nonce" must be a string or undefined');
    if (void 0 !== i && "string" != typeof i) throw new TypeError('"accessToken" must be a string or undefined');
    if (void 0 !== r && ("object" != typeof r || null === r || Array.isArray(r))) throw new TypeError('"additional" must be an object');
    return K({
        alg: D(s),
        typ: "dpop+jwt",
        jwk: await L(a)
    }, Object.assign(Object.assign({}, r), {
        iat: Math.floor(Date.now() / 1e3),
        jti: crypto.randomUUID(),
        htm: n,
        nonce: o,
        htu: t,
        ath: i ? z(await crypto.subtle.digest("SHA-256", C(i))) : void 0
    }), s);
}
async function L(e) {
    const { kty: t, e: n, n: o, x: i, y: r, crv: s } = await crypto.subtle.exportKey("jwk", e);
    return {
        kty: t,
        crv: s,
        e: n,
        n: o,
        x: i,
        y: r
    };
}
const H = [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:token-exchange"
];
function W() {
    return async function(e, t) {
        var n;
        let o;
        if ("string" != typeof e || 0 === e.length) throw new TypeError('"alg" must be a non-empty string');
        switch(e){
            case "PS256":
                o = {
                    name: "RSA-PSS",
                    hash: "SHA-256",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([
                        1,
                        0,
                        1
                    ])
                };
                break;
            case "RS256":
                o = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: "SHA-256",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([
                        1,
                        0,
                        1
                    ])
                };
                break;
            case "ES256":
                o = {
                    name: "ECDSA",
                    namedCurve: "P-256"
                };
                break;
            case "Ed25519":
                o = {
                    name: "Ed25519"
                };
                break;
            default:
                throw new N;
        }
        return crypto.subtle.generateKey(o, null !== (n = null == t ? void 0 : t.extractable) && void 0 !== n && n, [
            "sign",
            "verify"
        ]);
    }("ES256", {
        extractable: !1
    });
}
function J(e) {
    return async function(e) {
        if (!U(e)) throw new TypeError('"publicKey" must be a public CryptoKey');
        if (!0 !== e.extractable) throw new TypeError('"publicKey.extractable" must be true');
        const t = await L(e);
        let n;
        switch(t.kty){
            case "EC":
                n = {
                    crv: t.crv,
                    kty: t.kty,
                    x: t.x,
                    y: t.y
                };
                break;
            case "OKP":
                n = {
                    crv: t.crv,
                    kty: t.kty,
                    x: t.x
                };
                break;
            case "RSA":
                n = {
                    e: t.e,
                    kty: t.kty,
                    n: t.n
                };
                break;
            default:
                throw new N("unsupported JWK kty");
        }
        return z(await crypto.subtle.digest({
            name: "SHA-256"
        }, C(JSON.stringify(n))));
    }(e.publicKey);
}
function X({ keyPair: e, url: t, method: n, nonce: o, accessToken: i }) {
    const r = function(e) {
        const t = new URL(e);
        return t.search = "", t.hash = "", t.href;
    }(t);
    return Z(e, r, n, o, i);
}
const V = async (e, t)=>{
    const n = await fetch(e, t);
    return {
        ok: n.ok,
        json: await n.json(),
        headers: (o = n.headers, [
            ...o
        ].reduce((e, [t, n])=>(e[t] = n, e), {}))
    };
    //TURBOPACK unreachable
    ;
    var o;
}, F = async (e, t, n)=>{
    const o = new AbortController;
    let i;
    return t.signal = o.signal, Promise.race([
        V(e, t),
        new Promise((e, t)=>{
            i = setTimeout(()=>{
                o.abort(), t(new Error("Timeout when executing 'fetch'"));
            }, n);
        })
    ]).finally(()=>{
        clearTimeout(i);
    });
}, G = async (e, t, n, o, i, r, s, a)=>{
    return c = {
        auth: {
            audience: t,
            scope: n
        },
        timeout: i,
        fetchUrl: e,
        fetchOptions: o,
        useFormData: s,
        useMrrt: a
    }, u = r, new Promise(function(e, t) {
        const n = new MessageChannel;
        n.port1.onmessage = function(o) {
            o.data.error ? t(new Error(o.data.error)) : e(o.data), n.port1.close();
        }, u.postMessage(c, [
            n.port2
        ]);
    });
    //TURBOPACK unreachable
    ;
    var c, u;
}, M = async (e, t, n, o, i, r, s = 1e4, a)=>i ? G(e, t, n, o, s, i, r, a) : F(e, o, s);
async function Y(t, n, o, i, r, s, a, c, d, h) {
    if (d) {
        const e = await d.generateProof({
            url: t,
            method: r.method || "GET",
            nonce: await d.getNonce()
        });
        r.headers = Object.assign(Object.assign({}, r.headers), {
            dpop: e
        });
    }
    let l, p = null;
    for(let e = 0; e < 3; e++)try {
        l = await M(t, o, i, r, s, a, n, c), p = null;
        break;
    } catch (e) {
        p = e;
    }
    if (p) throw p;
    const m = l.json, { error: y, error_description: b } = m, k = e(m, [
        "error",
        "error_description"
    ]), { headers: v, ok: _ } = l;
    let S;
    if (d && (S = v["dpop-nonce"], S && await d.setNonce(S)), !_) {
        const e = b || `HTTP error. Unable to fetch ${t}`;
        if ("mfa_required" === y) throw new f(y, e, k.mfa_token);
        if ("missing_refresh_token" === y) throw new g(o, i);
        if ("use_dpop_nonce" === y) {
            if (!d || !S || h) throw new w(S);
            return Y(t, n, o, i, r, s, a, c, d, !0);
        }
        throw new u(y || "request_error", e);
    }
    return k;
}
async function $(t, n) {
    var { baseUrl: o, timeout: i, audience: r, scope: s, auth0Client: c, useFormData: u, useMrrt: d, dpop: h } = t, l = e(t, [
        "baseUrl",
        "timeout",
        "audience",
        "scope",
        "auth0Client",
        "useFormData",
        "useMrrt",
        "dpop"
    ]);
    const p = "urn:ietf:params:oauth:grant-type:token-exchange" === l.grant_type, m = "refresh_token" === l.grant_type && d, f = Object.assign(Object.assign(Object.assign(Object.assign({}, l), p && r && {
        audience: r
    }), p && s && {
        scope: s
    }), m && {
        audience: r,
        scope: s
    }), g = u ? S(f) : JSON.stringify(f), y = (w = l.grant_type, H.includes(w));
    var w;
    return await Y(`${o}/oauth/token`, i, r || "default", s, {
        method: "POST",
        body: g,
        headers: {
            "Content-Type": u ? "application/x-www-form-urlencoded" : "application/json",
            "Auth0-Client": btoa(JSON.stringify(c || a))
        }
    }, n, u, d, y ? h : void 0);
}
const B = (...e)=>{
    return (t = e.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(t))).join(" ");
    //TURBOPACK unreachable
    ;
    var t;
};
class q {
    constructor(e, t = "@@auth0spajs@@", n){
        this.prefix = t, this.suffix = n, this.clientId = e.clientId, this.scope = e.scope, this.audience = e.audience;
    }
    toKey() {
        return [
            this.prefix,
            this.clientId,
            this.audience,
            this.scope,
            this.suffix
        ].filter(Boolean).join("::");
    }
    static fromKey(e) {
        const [t, n, o, i] = e.split("::");
        return new q({
            clientId: n,
            scope: i,
            audience: o
        }, t);
    }
    static fromCacheEntry(e) {
        const { scope: t, audience: n, client_id: o } = e;
        return new q({
            scope: t,
            audience: n,
            clientId: o
        });
    }
}
class Q {
    set(e, t) {
        localStorage.setItem(e, JSON.stringify(t));
    }
    get(e) {
        const t = window.localStorage.getItem(e);
        if (t) try {
            return JSON.parse(t);
        } catch (e) {
            return;
        }
    }
    remove(e) {
        localStorage.removeItem(e);
    }
    allKeys() {
        return Object.keys(window.localStorage).filter((e)=>e.startsWith("@@auth0spajs@@"));
    }
}
class ee {
    constructor(){
        this.enclosedCache = function() {
            let e = {};
            return {
                set (t, n) {
                    e[t] = n;
                },
                get (t) {
                    const n = e[t];
                    if (n) return n;
                },
                remove (t) {
                    delete e[t];
                },
                allKeys: ()=>Object.keys(e)
            };
        }();
    }
}
class te {
    constructor(e, t, n){
        this.cache = e, this.keyManifest = t, this.nowProvider = n || c;
    }
    async setIdToken(e, t, n) {
        var o;
        const i = this.getIdTokenCacheKey(e);
        await this.cache.set(i, {
            id_token: t,
            decodedToken: n
        }), await (null === (o = this.keyManifest) || void 0 === o ? void 0 : o.add(i));
    }
    async getIdToken(e) {
        const t = await this.cache.get(this.getIdTokenCacheKey(e.clientId));
        if (!t && e.scope && e.audience) {
            const t = await this.get(e);
            if (!t) return;
            if (!t.id_token || !t.decodedToken) return;
            return {
                id_token: t.id_token,
                decodedToken: t.decodedToken
            };
        }
        if (t) return {
            id_token: t.id_token,
            decodedToken: t.decodedToken
        };
    }
    async get(e, t = 0, n = !1, o) {
        var i;
        let r = await this.cache.get(e.toKey());
        if (!r) {
            const t = await this.getCacheKeys();
            if (!t) return;
            const i = this.matchExistingCacheKey(e, t);
            if (i && (r = await this.cache.get(i)), !i && n && "cache-only" !== o) return this.getEntryWithRefreshToken(e, t);
        }
        if (!r) return;
        const s = await this.nowProvider(), a = Math.floor(s / 1e3);
        return r.expiresAt - t < a ? r.body.refresh_token ? this.modifiedCachedEntry(r, e) : (await this.cache.remove(e.toKey()), void await (null === (i = this.keyManifest) || void 0 === i ? void 0 : i.remove(e.toKey()))) : r.body;
    }
    async modifiedCachedEntry(e, t) {
        return e.body = {
            refresh_token: e.body.refresh_token,
            audience: e.body.audience,
            scope: e.body.scope
        }, await this.cache.set(t.toKey(), e), {
            refresh_token: e.body.refresh_token,
            audience: e.body.audience,
            scope: e.body.scope
        };
    }
    async set(e) {
        var t;
        const n = new q({
            clientId: e.client_id,
            scope: e.scope,
            audience: e.audience
        }), o = await this.wrapCacheEntry(e);
        await this.cache.set(n.toKey(), o), await (null === (t = this.keyManifest) || void 0 === t ? void 0 : t.add(n.toKey()));
    }
    async clear(e) {
        var t;
        const n = await this.getCacheKeys();
        n && (await n.filter((t)=>!e || t.includes(e)).reduce(async (e, t)=>{
            await e, await this.cache.remove(t);
        }, Promise.resolve()), await (null === (t = this.keyManifest) || void 0 === t ? void 0 : t.clear()));
    }
    async wrapCacheEntry(e) {
        const t = await this.nowProvider();
        return {
            body: e,
            expiresAt: Math.floor(t / 1e3) + e.expires_in
        };
    }
    async getCacheKeys() {
        var e;
        return this.keyManifest ? null === (e = await this.keyManifest.get()) || void 0 === e ? void 0 : e.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
    }
    getIdTokenCacheKey(e) {
        return new q({
            clientId: e
        }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(e, t) {
        return t.filter((t)=>{
            var n;
            const o = q.fromKey(t), i = new Set(o.scope && o.scope.split(" ")), r = (null === (n = e.scope) || void 0 === n ? void 0 : n.split(" ")) || [], s = o.scope && r.reduce((e, t)=>e && i.has(t), !0);
            return "@@auth0spajs@@" === o.prefix && o.clientId === e.clientId && o.audience === e.audience && s;
        })[0];
    }
    async getEntryWithRefreshToken(e, t) {
        var n;
        for (const o of t){
            const t = q.fromKey(o);
            if ("@@auth0spajs@@" === t.prefix && t.clientId === e.clientId) {
                const t = await this.cache.get(o);
                if (null === (n = null == t ? void 0 : t.body) || void 0 === n ? void 0 : n.refresh_token) return this.modifiedCachedEntry(t, e);
            }
        }
    }
    async updateEntry(e, t) {
        var n;
        const o = await this.getCacheKeys();
        if (o) for (const i of o){
            const o = await this.cache.get(i);
            if ((null === (n = null == o ? void 0 : o.body) || void 0 === n ? void 0 : n.refresh_token) === e) {
                const e = Object.assign(Object.assign({}, o.body), {
                    refresh_token: t
                });
                await this.set(e);
            }
        }
    }
}
class ne {
    constructor(e, t, n){
        this.storage = e, this.clientId = t, this.cookieDomain = n, this.storageKey = `a0.spajs.txs.${this.clientId}`;
    }
    create(e) {
        this.storage.save(this.storageKey, e, {
            daysUntilExpire: 1,
            cookieDomain: this.cookieDomain
        });
    }
    get() {
        return this.storage.get(this.storageKey);
    }
    remove() {
        this.storage.remove(this.storageKey, {
            cookieDomain: this.cookieDomain
        });
    }
}
const oe = (e)=>"number" == typeof e, ie = [
    "iss",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "azp",
    "nonce",
    "auth_time",
    "at_hash",
    "c_hash",
    "acr",
    "amr",
    "sub_jwk",
    "cnf",
    "sip_from_tag",
    "sip_date",
    "sip_callid",
    "sip_cseq_num",
    "sip_via_branch",
    "orig",
    "dest",
    "mky",
    "events",
    "toe",
    "txn",
    "rph",
    "sid",
    "vot",
    "vtm"
], re = (e)=>{
    if (!e.id_token) throw new Error("ID token is required but missing");
    const t = ((e)=>{
        const t = e.split("."), [n, o, i] = t;
        if (3 !== t.length || !n || !o || !i) throw new Error("ID token could not be decoded");
        const r = JSON.parse(T(o)), s = {
            __raw: e
        }, a = {};
        return Object.keys(r).forEach((e)=>{
            s[e] = r[e], ie.includes(e) || (a[e] = r[e]);
        }), {
            encoded: {
                header: n,
                payload: o,
                signature: i
            },
            header: JSON.parse(T(n)),
            claims: s,
            user: a
        };
    })(e.id_token);
    if (!t.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
    if (t.claims.iss !== e.iss) throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`);
    if (!t.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
    if ("RS256" !== t.header.alg) throw new Error(`Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
    if (!t.claims.aud || "string" != typeof t.claims.aud && !Array.isArray(t.claims.aud)) throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
    if (Array.isArray(t.claims.aud)) {
        if (!t.claims.aud.includes(e.aud)) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but was not one of "${t.claims.aud.join(", ")}"`);
        if (t.claims.aud.length > 1) {
            if (!t.claims.azp) throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
            if (t.claims.azp !== e.aud) throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`);
        }
    } else if (t.claims.aud !== e.aud) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`);
    if (e.nonce) {
        if (!t.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
        if (t.claims.nonce !== e.nonce) throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`);
    }
    if (e.max_age && !oe(t.claims.auth_time)) throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
    if (null == t.claims.exp || !oe(t.claims.exp)) throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
    if (!oe(t.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
    const n = e.leeway || 60, o = new Date(e.now || Date.now()), i = new Date(0);
    if (i.setUTCSeconds(t.claims.exp + n), o > i) throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o}) is after expiration time (${i})`);
    if (null != t.claims.nbf && oe(t.claims.nbf)) {
        const e = new Date(0);
        if (e.setUTCSeconds(t.claims.nbf - n), o < e) throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o}) is before ${e}`);
    }
    if (null != t.claims.auth_time && oe(t.claims.auth_time)) {
        const i = new Date(0);
        if (i.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n), o > i) throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o}) is after last auth at ${i}`);
    }
    if (e.organization) {
        const n = e.organization.trim();
        if (n.startsWith("org_")) {
            const e = n;
            if (!t.claims.org_id) throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
            if (e !== t.claims.org_id) throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e}", found "${t.claims.org_id}"`);
        } else {
            const e = n.toLowerCase();
            if (!t.claims.org_name) throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
            if (e !== t.claims.org_name) throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${e}", found "${t.claims.org_name}"`);
        }
    }
    return t;
};
var se = o(function(e, n) {
    var o = t && t.__assign || function() {
        return o = Object.assign || function(e) {
            for(var t, n = 1, o = arguments.length; n < o; n++)for(var i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }, o.apply(this, arguments);
    };
    function i(e, t) {
        if (!t) return "";
        var n = "; " + e;
        return !0 === t ? n : n + "=" + t;
    }
    function r(e, t, n) {
        return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e) {
            if ("number" == typeof e.expires) {
                var t = new Date;
                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), e.expires = t;
            }
            return i("Expires", e.expires ? e.expires.toUTCString() : "") + i("Domain", e.domain) + i("Path", e.path) + i("Secure", e.secure) + i("SameSite", e.sameSite);
        }(n);
    }
    function s(e) {
        for(var t = {}, n = e ? e.split("; ") : [], o = /(%[\dA-F]{2})+/gi, i = 0; i < n.length; i++){
            var r = n[i].split("="), s = r.slice(1).join("=");
            '"' === s.charAt(0) && (s = s.slice(1, -1));
            try {
                t[r[0].replace(o, decodeURIComponent)] = s.replace(o, decodeURIComponent);
            } catch (e) {}
        }
        return t;
    }
    function a() {
        return s(document.cookie);
    }
    function c(e, t, n) {
        document.cookie = r(e, t, o({
            path: "/"
        }, n));
    }
    n.__esModule = !0, n.encode = r, n.parse = s, n.getAll = a, n.get = function(e) {
        return a()[e];
    }, n.set = c, n.remove = function(e, t) {
        c(e, "", o(o({}, t), {
            expires: -1
        }));
    };
});
n(se), se.encode, se.parse, se.getAll;
var ae = se.get, ce = se.set, ue = se.remove;
const de = {
    get (e) {
        const t = ae(e);
        if (void 0 !== t) return JSON.parse(t);
    },
    save (e, t, n) {
        let o = {};
        "https:" === window.location.protocol && (o = {
            secure: !0,
            sameSite: "none"
        }), (null == n ? void 0 : n.daysUntilExpire) && (o.expires = n.daysUntilExpire), (null == n ? void 0 : n.cookieDomain) && (o.domain = n.cookieDomain), ce(e, JSON.stringify(t), o);
    },
    remove (e, t) {
        let n = {};
        (null == t ? void 0 : t.cookieDomain) && (n.domain = t.cookieDomain), ue(e, n);
    }
}, he = {
    get (e) {
        const t = de.get(e);
        return t || de.get(`_legacy_${e}`);
    },
    save (e, t, n) {
        let o = {};
        "https:" === window.location.protocol && (o = {
            secure: !0
        }), (null == n ? void 0 : n.daysUntilExpire) && (o.expires = n.daysUntilExpire), (null == n ? void 0 : n.cookieDomain) && (o.domain = n.cookieDomain), ce(`_legacy_${e}`, JSON.stringify(t), o), de.save(e, t, n);
    },
    remove (e, t) {
        let n = {};
        (null == t ? void 0 : t.cookieDomain) && (n.domain = t.cookieDomain), ue(e, n), de.remove(e, t), de.remove(`_legacy_${e}`, t);
    }
}, le = {
    get (e) {
        if ("undefined" == typeof sessionStorage) return;
        const t = sessionStorage.getItem(e);
        return null != t ? JSON.parse(t) : void 0;
    },
    save (e, t) {
        sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove (e) {
        sessionStorage.removeItem(e);
    }
};
var pe;
!function(e) {
    e.Code = "code", e.ConnectCode = "connect_code";
}(pe || (pe = {}));
class me {
}
function fe(e, t, n) {
    var o = void 0 === t ? null : t, i = function(e, t) {
        var n = atob(e);
        if (t) {
            for(var o = new Uint8Array(n.length), i = 0, r = n.length; i < r; ++i)o[i] = n.charCodeAt(i);
            return String.fromCharCode.apply(null, new Uint16Array(o.buffer));
        }
        return n;
    }(e, void 0 !== n && n), r = i.indexOf("\n", 10) + 1, s = i.substring(r) + (o ? "//# sourceMappingURL=" + o : ""), a = new Blob([
        s
    ], {
        type: "application/javascript"
    });
    return URL.createObjectURL(a);
}
var ge, ye, we, be, ke = (ge = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YSx1c2VNcnJ0OmZ9LHBvcnRzOltwXX0pPT57bGV0IGgsdSxsPXt9O2NvbnN0e2F1ZGllbmNlOmQsc2NvcGU6eX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2lmKHU9KChlLHQpPT5vW24oZSx0KV0pKGQseSksIXUmJmYpe2NvbnN0IGU9by5sYXRlc3RfcmVmcmVzaF90b2tlbix0PSgoZSx0KT0+e2NvbnN0IHI9T2JqZWN0LmtleXMobykuZmluZCgocj0+e2lmKCJsYXRlc3RfcmVmcmVzaF90b2tlbiIhPT1yKXtjb25zdCBzPSgoZSx0KT0+dC5zdGFydHNXaXRoKGAke2V9fGApKSh0LHIpLG89ci5zcGxpdCgifCIpWzFdLnNwbGl0KCIgIiksbj1lLnNwbGl0KCIgIikuZXZlcnkoKGU9Pm8uaW5jbHVkZXMoZSkpKTtyZXR1cm4gcyYmbn19KSk7cmV0dXJuISFyfSkoeSxkKTtlJiYhdCYmKHU9ZSl9aWYoIXUpdGhyb3cgbmV3IHQoZCx5KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjp1fSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjp1fSkpfWxldCBqLGs7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGo9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1qLnNpZ25hbCk7dHJ5e2s9YXdhaXQgUHJvbWlzZS5yYWNlKFsoXz1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsXykpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIHAucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFrKXJldHVybiBqJiZqLmFib3J0KCksdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO2c9ay5oZWFkZXJzLGw9Wy4uLmddLnJlZHVjZSgoKGUsW3Qscl0pPT4oZVt0XT1yLGUpKSx7fSksaD1hd2FpdCBrLmpzb24oKSxoLnJlZnJlc2hfdG9rZW4/KGYmJihvLmxhdGVzdF9yZWZyZXNoX3Rva2VuPWgucmVmcmVzaF90b2tlbixPPXUsYj1oLnJlZnJlc2hfdG9rZW4sT2JqZWN0LmVudHJpZXMobykuZm9yRWFjaCgoKFtlLHRdKT0+e3Q9PT1PJiYob1tlXT1iKX0pKSksKChlLHQscik9PntvW24odCxyKV09ZX0pKGgucmVmcmVzaF90b2tlbixkLHkpLGRlbGV0ZSBoLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KShkLHkpLHAucG9zdE1lc3NhZ2Uoe29rOmsub2ssanNvbjpoLGhlYWRlcnM6bH0pfWNhdGNoKGUpe3AucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yOmUuZXJyb3IsZXJyb3JfZGVzY3JpcHRpb246ZS5tZXNzYWdlfSxoZWFkZXJzOmx9KX12YXIgTyxiLGcsX30pKX0oKTsKCg==", ye = null, we = !1, function(e) {
    return be = be || fe(ge, ye, we), new Worker(be, e);
});
const ve = {};
class _e {
    constructor(e, t){
        this.cache = e, this.clientId = t, this.manifestKey = this.createManifestKeyFrom(this.clientId);
    }
    async add(e) {
        var t;
        const n = new Set((null === (t = await this.cache.get(this.manifestKey)) || void 0 === t ? void 0 : t.keys) || []);
        n.add(e), await this.cache.set(this.manifestKey, {
            keys: [
                ...n
            ]
        });
    }
    async remove(e) {
        const t = await this.cache.get(this.manifestKey);
        if (t) {
            const n = new Set(t.keys);
            return n.delete(e), n.size > 0 ? await this.cache.set(this.manifestKey, {
                keys: [
                    ...n
                ]
            }) : await this.cache.remove(this.manifestKey);
        }
    }
    get() {
        return this.cache.get(this.manifestKey);
    }
    clear() {
        return this.cache.remove(this.manifestKey);
    }
    createManifestKeyFrom(e) {
        return `@@auth0spajs@@::${e}`;
    }
}
const Se = {
    memory: ()=>(new ee).enclosedCache,
    localstorage: ()=>new Q
}, Ie = (e)=>Se[e], Te = (t)=>{
    const { openUrl: n, onRedirect: o } = t, i = e(t, [
        "openUrl",
        "onRedirect"
    ]);
    return Object.assign(Object.assign({}, i), {
        openUrl: !1 === n || n ? n : o
    });
}, Oe = (e, t)=>{
    const n = (null == t ? void 0 : t.split(" ")) || [];
    return ((null == e ? void 0 : e.split(" ")) || []).every((e)=>n.includes(e));
}, Pe = {
    NONCE: "nonce",
    KEYPAIR: "keypair"
};
class je {
    constructor(e){
        this.clientId = e;
    }
    getVersion() {
        return 1;
    }
    createDbHandle() {
        const e = window.indexedDB.open("auth0-spa-js", this.getVersion());
        return new Promise((t, n)=>{
            e.onupgradeneeded = ()=>Object.values(Pe).forEach((t)=>e.result.createObjectStore(t)), e.onerror = ()=>n(e.error), e.onsuccess = ()=>t(e.result);
        });
    }
    async getDbHandle() {
        return this.dbHandle || (this.dbHandle = await this.createDbHandle()), this.dbHandle;
    }
    async executeDbRequest(e, t, n) {
        const o = n((await this.getDbHandle()).transaction(e, t).objectStore(e));
        return new Promise((e, t)=>{
            o.onsuccess = ()=>e(o.result), o.onerror = ()=>t(o.error);
        });
    }
    buildKey(e) {
        const t = e ? `_${e}` : "auth0";
        return `${this.clientId}::${t}`;
    }
    setNonce(e, t) {
        return this.save(Pe.NONCE, this.buildKey(t), e);
    }
    setKeyPair(e) {
        return this.save(Pe.KEYPAIR, this.buildKey(), e);
    }
    async save(e, t, n) {
        await this.executeDbRequest(e, "readwrite", (e)=>e.put(n, t));
    }
    findNonce(e) {
        return this.find(Pe.NONCE, this.buildKey(e));
    }
    findKeyPair() {
        return this.find(Pe.KEYPAIR, this.buildKey());
    }
    find(e, t) {
        return this.executeDbRequest(e, "readonly", (e)=>e.get(t));
    }
    async deleteBy(e, t) {
        const n = await this.executeDbRequest(e, "readonly", (e)=>e.getAllKeys());
        null == n || n.filter(t).map((t)=>this.executeDbRequest(e, "readwrite", (e)=>e.delete(t)));
    }
    deleteByClientId(e, t) {
        return this.deleteBy(e, (e)=>"string" == typeof e && e.startsWith(`${t}::`));
    }
    clearNonces() {
        return this.deleteByClientId(Pe.NONCE, this.clientId);
    }
    clearKeyPairs() {
        return this.deleteByClientId(Pe.KEYPAIR, this.clientId);
    }
}
class Ce {
    constructor(e){
        this.storage = new je(e);
    }
    getNonce(e) {
        return this.storage.findNonce(e);
    }
    setNonce(e, t) {
        return this.storage.setNonce(e, t);
    }
    async getOrGenerateKeyPair() {
        let e = await this.storage.findKeyPair();
        return e || (e = await W(), await this.storage.setKeyPair(e)), e;
    }
    async generateProof(e) {
        const t = await this.getOrGenerateKeyPair();
        return X(Object.assign({
            keyPair: t
        }, e));
    }
    async calculateThumbprint() {
        return J(await this.getOrGenerateKeyPair());
    }
    async clear() {
        await Promise.all([
            this.storage.clearNonces(),
            this.storage.clearKeyPairs()
        ]);
    }
}
var xe;
!function(e) {
    e.Bearer = "Bearer", e.DPoP = "DPoP";
}(xe || (xe = {}));
class Ke {
    constructor(e, t){
        this.hooks = t, this.config = Object.assign(Object.assign({}, e), {
            fetch: e.fetch || (("TURBOPACK compile-time truthy", 1) ? fetch : "TURBOPACK unreachable")
        });
    }
    isAbsoluteUrl(e) {
        return /^(https?:)?\/\//i.test(e);
    }
    buildUrl(e, t) {
        if (t) {
            if (this.isAbsoluteUrl(t)) return t;
            if (e) return `${e.replace(/\/?\/$/, "")}/${t.replace(/^\/+/, "")}`;
        }
        throw new TypeError("`url` must be absolute or `baseUrl` non-empty.");
    }
    getAccessToken(e) {
        return this.config.getAccessToken ? this.config.getAccessToken(e) : this.hooks.getAccessToken(e);
    }
    extractUrl(e) {
        return "string" == typeof e ? e : e instanceof URL ? e.href : e.url;
    }
    buildBaseRequest(e, t) {
        if (!this.config.baseUrl) return new Request(e, t);
        const n = this.buildUrl(this.config.baseUrl, this.extractUrl(e)), o = e instanceof Request ? new Request(n, e) : n;
        return new Request(o, t);
    }
    setAuthorizationHeader(e, t, n = xe.Bearer) {
        e.headers.set("authorization", `${n} ${t}`);
    }
    async setDpopProofHeader(e, t) {
        if (!this.config.dpopNonceId) return;
        const n = await this.hooks.getDpopNonce(), o = await this.hooks.generateDpopProof({
            accessToken: t,
            method: e.method,
            nonce: n,
            url: e.url
        });
        e.headers.set("dpop", o);
    }
    async prepareRequest(e, t) {
        const n = await this.getAccessToken(t);
        let o, i;
        "string" == typeof n ? (o = this.config.dpopNonceId ? xe.DPoP : xe.Bearer, i = n) : (o = n.token_type, i = n.access_token), this.setAuthorizationHeader(e, i, o), o === xe.DPoP && await this.setDpopProofHeader(e, i);
    }
    getHeader(e, t) {
        return Array.isArray(e) ? new Headers(e).get(t) || "" : "function" == typeof e.get ? e.get(t) || "" : e[t] || "";
    }
    hasUseDpopNonceError(e) {
        if (401 !== e.status) return !1;
        const t = this.getHeader(e.headers, "www-authenticate");
        return t.includes("invalid_dpop_nonce") || t.includes("use_dpop_nonce");
    }
    async handleResponse(e, t) {
        const n = this.getHeader(e.headers, "dpop-nonce");
        if (n && await this.hooks.setDpopNonce(n), !this.hasUseDpopNonceError(e)) return e;
        if (!n || !t.onUseDpopNonceError) throw new w(n);
        return t.onUseDpopNonceError();
    }
    async internalFetchWithAuth(e, t, n, o) {
        const i = this.buildBaseRequest(e, t);
        await this.prepareRequest(i, o);
        const r = await this.config.fetch(i);
        return this.handleResponse(r, n);
    }
    fetchWithAuth(e, t, n) {
        const o = {
            onUseDpopNonceError: ()=>this.internalFetchWithAuth(e, t, Object.assign(Object.assign({}, o), {
                    onUseDpopNonceError: void 0
                }), n)
        };
        return this.internalFetchWithAuth(e, t, o, n);
    }
}
class Ee {
    constructor(e, t){
        this.myAccountFetcher = e, this.apiBase = t;
    }
    async connectAccount(e) {
        const t = await this.myAccountFetcher.fetchWithAuth(`${this.apiBase}v1/connected-accounts/connect`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        return this._handleResponse(t);
    }
    async completeAccount(e) {
        const t = await this.myAccountFetcher.fetchWithAuth(`${this.apiBase}v1/connected-accounts/complete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        return this._handleResponse(t);
    }
    async _handleResponse(e) {
        let t;
        try {
            t = await e.text(), t = JSON.parse(t);
        } catch (n) {
            throw new ze({
                type: "invalid_json",
                status: e.status,
                title: "Invalid JSON response",
                detail: t || String(n)
            });
        }
        if (e.ok) return t;
        throw new ze(t);
    }
}
class ze extends Error {
    constructor({ type: e, status: t, title: n, detail: o, validation_errors: i }){
        super(o), this.name = "MyAccountApiError", this.type = e, this.status = t, this.title = n, this.detail = o, this.validation_errors = i, Object.setPrototypeOf(this, ze.prototype);
    }
}
const Ne = new r;
class Re {
    constructor(e){
        let t, n;
        if (this.userCache = (new ee).enclosedCache, this.defaultOptions = {
            authorizationParams: {
                scope: "openid profile email"
            },
            useRefreshTokensFallback: !1,
            useFormData: !0
        }, this._releaseLockOnPageHide = async ()=>{
            await Ne.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
        }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e), {
            authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e.authorizationParams)
        }), "undefined" != ("TURBOPACK compile-time value", "undefined") && (()=>{
            if (!k()) throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
            if (void 0 === k().subtle) throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
        })(), e.cache && e.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e.cache) n = e.cache;
        else {
            if (t = e.cacheLocation || "memory", !Ie(t)) throw new Error(`Invalid cache location "${t}"`);
            n = Ie(t)();
        }
        this.httpTimeoutMs = e.httpTimeoutInSeconds ? 1e3 * e.httpTimeoutInSeconds : 1e4, this.cookieStorage = !1 === e.legacySameSiteCookie ? de : he, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((e)=>`auth0.${e}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1;
        const o = e.useCookiesForTransactions ? this.cookieStorage : le;
        var i;
        this.scope = B("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new ne(o, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || c, this.cacheManager = new te(n, n.allKeys ? void 0 : new _e(n, this.options.clientId), this.nowProvider), this.dpop = this.options.useDpop ? new Ce(this.options.clientId) : void 0, this.domainUrl = (i = this.options.domain, /^https?:\/\//.test(i) ? i : `https://${i}`), this.tokenIssuer = ((e, t)=>e ? e.startsWith("https://") ? e : `https://${e}/` : `${t}/`)(this.options.issuer, this.domainUrl);
        const r = `${this.domainUrl}/me/`, s = this.createFetcher(Object.assign(Object.assign({}, this.options.useDpop && {
            dpopNonceId: "__auth0_my_account_api__"
        }), {
            getAccessToken: ()=>this.getTokenSilently({
                    authorizationParams: {
                        scope: "create:me:connected_accounts",
                        audience: r
                    },
                    detailedResponse: !0
                })
        }));
        this.myAccountApi = new Ee(s, r), "undefined" != ("TURBOPACK compile-time value", "undefined") && window.Worker && this.options.useRefreshTokens && "memory" === t && (this.options.workerUrl ? this.worker = new Worker(this.options.workerUrl) : this.worker = new ke);
    }
    _url(e) {
        const t = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || a)));
        return `${this.domainUrl}${e}&auth0Client=${t}`;
    }
    _authorizeUrl(e) {
        return this._url(`/authorize?${S(e)}`);
    }
    async _verifyIdToken(e, t, n) {
        const o = await this.nowProvider();
        return re({
            iss: this.tokenIssuer,
            aud: this.options.clientId,
            id_token: e,
            nonce: t,
            organization: n,
            leeway: this.options.leeway,
            max_age: (i = this.options.authorizationParams.max_age, "string" != typeof i ? i : parseInt(i, 10) || void 0),
            now: o
        });
        //TURBOPACK unreachable
        ;
        var i;
    }
    _processOrgHint(e) {
        e ? this.cookieStorage.save(this.orgHintCookieName, e, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain
        }) : this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain
        });
    }
    async _prepareAuthorizeUrl(e, t, n) {
        var o;
        const i = _(v()), r = _(v()), s = v(), a = await I(s), c = O(a), u = await (null === (o = this.dpop) || void 0 === o ? void 0 : o.calculateThumbprint()), d = ((e, t, n, o, i, r, s, a, c)=>Object.assign(Object.assign(Object.assign({
                client_id: e.clientId
            }, e.authorizationParams), n), {
                scope: B(t, n.scope),
                response_type: "code",
                response_mode: a || "query",
                state: o,
                nonce: i,
                redirect_uri: s || e.authorizationParams.redirect_uri,
                code_challenge: r,
                code_challenge_method: "S256",
                dpop_jkt: c
            }))(this.options, this.scope, e, i, r, c, e.redirect_uri || this.options.authorizationParams.redirect_uri || n, null == t ? void 0 : t.response_mode, u), h = this._authorizeUrl(d);
        return {
            nonce: r,
            code_verifier: s,
            scope: d.scope,
            audience: d.audience || "default",
            redirect_uri: d.redirect_uri,
            state: i,
            url: h
        };
    }
    async loginWithPopup(e, t) {
        var n;
        if (e = e || {}, !(t = t || {}).popup && (t.popup = ((e)=>{
            const t = window.screenX + (window.innerWidth - 400) / 2, n = window.screenY + (window.innerHeight - 600) / 2;
            return window.open(e, "auth0:authorize:popup", `left=${t},top=${n},width=400,height=600,resizable,scrollbars=yes,status=1`);
        })(""), !t.popup)) throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
        const o = await this._prepareAuthorizeUrl(e.authorizationParams || {}, {
            response_mode: "web_message"
        }, window.location.origin);
        t.popup.location.href = o.url;
        const i = await ((e)=>new Promise((t, n)=>{
                let o;
                const i = setInterval(()=>{
                    e.popup && e.popup.closed && (clearInterval(i), clearTimeout(r), window.removeEventListener("message", o, !1), n(new m(e.popup)));
                }, 1e3), r = setTimeout(()=>{
                    clearInterval(i), n(new p(e.popup)), window.removeEventListener("message", o, !1);
                }, 1e3 * (e.timeoutInSeconds || 60));
                o = function(s) {
                    if (s.data && "authorization_response" === s.data.type) {
                        if (clearTimeout(r), clearInterval(i), window.removeEventListener("message", o, !1), e.popup.close(), s.data.response.error) return n(u.fromPayload(s.data.response));
                        t(s.data.response);
                    }
                }, window.addEventListener("message", o);
            }))(Object.assign(Object.assign({}, t), {
            timeoutInSeconds: t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60
        }));
        if (o.state !== i.state) throw new u("state_mismatch", "Invalid state");
        const r = (null === (n = e.authorizationParams) || void 0 === n ? void 0 : n.organization) || this.options.authorizationParams.organization;
        await this._requestToken({
            audience: o.audience,
            scope: o.scope,
            code_verifier: o.code_verifier,
            grant_type: "authorization_code",
            code: i.code,
            redirect_uri: o.redirect_uri
        }, {
            nonceIn: o.nonce,
            organization: r
        });
    }
    async getUser() {
        var e;
        const t = await this._getIdTokenFromCache();
        return null === (e = null == t ? void 0 : t.decodedToken) || void 0 === e ? void 0 : e.user;
    }
    async getIdTokenClaims() {
        var e;
        const t = await this._getIdTokenFromCache();
        return null === (e = null == t ? void 0 : t.decodedToken) || void 0 === e ? void 0 : e.claims;
    }
    async loginWithRedirect(t = {}) {
        var n;
        const o = Te(t), { openUrl: i, fragment: r, appState: s } = o, a = e(o, [
            "openUrl",
            "fragment",
            "appState"
        ]), c = (null === (n = a.authorizationParams) || void 0 === n ? void 0 : n.organization) || this.options.authorizationParams.organization, u = await this._prepareAuthorizeUrl(a.authorizationParams || {}), { url: d } = u, h = e(u, [
            "url"
        ]);
        this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, h), {
            appState: s,
            response_type: pe.Code
        }), c && {
            organization: c
        }));
        const l = r ? `${d}#${r}` : d;
        i ? await i(l) : window.location.assign(l);
    }
    async handleRedirectCallback(e = window.location.href) {
        const t = e.split("?").slice(1);
        if (0 === t.length) throw new Error("There are no query params available for parsing.");
        const n = this.transactionManager.get();
        if (!n) throw new u("missing_transaction", "Invalid state");
        this.transactionManager.remove();
        const o = ((e)=>{
            e.indexOf("#") > -1 && (e = e.substring(0, e.indexOf("#")));
            const t = new URLSearchParams(e);
            return {
                state: t.get("state"),
                code: t.get("code") || void 0,
                connect_code: t.get("connect_code") || void 0,
                error: t.get("error") || void 0,
                error_description: t.get("error_description") || void 0
            };
        })(t.join(""));
        return n.response_type === pe.ConnectCode ? this._handleConnectAccountRedirectCallback(o, n) : this._handleLoginRedirectCallback(o, n);
    }
    async _handleLoginRedirectCallback(e, t) {
        const { code: n, state: o, error: i, error_description: r } = e;
        if (i) throw new d(i, r || i, o, t.appState);
        if (!t.code_verifier || t.state && t.state !== o) throw new u("state_mismatch", "Invalid state");
        const s = t.organization, a = t.nonce, c = t.redirect_uri;
        return await this._requestToken(Object.assign({
            audience: t.audience,
            scope: t.scope,
            code_verifier: t.code_verifier,
            grant_type: "authorization_code",
            code: n
        }, c ? {
            redirect_uri: c
        } : {}), {
            nonceIn: a,
            organization: s
        }), {
            appState: t.appState,
            response_type: pe.Code
        };
    }
    async _handleConnectAccountRedirectCallback(e, t) {
        const { connect_code: n, state: o, error: i, error_description: r } = e;
        if (i) throw new h(i, r || i, t.connection, o, t.appState);
        if (!n) throw new u("missing_connect_code", "Missing connect code");
        if (!(t.code_verifier && t.state && t.auth_session && t.redirect_uri && t.state === o)) throw new u("state_mismatch", "Invalid state");
        const s = await this.myAccountApi.completeAccount({
            auth_session: t.auth_session,
            connect_code: n,
            redirect_uri: t.redirect_uri,
            code_verifier: t.code_verifier
        });
        return Object.assign(Object.assign({}, s), {
            appState: t.appState,
            response_type: pe.ConnectCode
        });
    }
    async checkSession(e) {
        if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
            if (!this.cookieStorage.get("auth0.is.authenticated")) return;
            this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                daysUntilExpire: this.sessionCheckExpiryDays,
                cookieDomain: this.options.cookieDomain
            }), this.cookieStorage.remove("auth0.is.authenticated");
        }
        try {
            await this.getTokenSilently(e);
        } catch (e) {}
    }
    async getTokenSilently(e = {}) {
        var t;
        const n = Object.assign(Object.assign({
            cacheMode: "on"
        }, e), {
            authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), {
                scope: B(this.scope, null === (t = e.authorizationParams) || void 0 === t ? void 0 : t.scope)
            })
        }), o = await ((e, t)=>{
            let n = ve[t];
            return n || (n = e().finally(()=>{
                delete ve[t], n = null;
            }), ve[t] = n), n;
        })(()=>this._getTokenSilently(n), `${this.options.clientId}::${n.authorizationParams.audience}::${n.authorizationParams.scope}`);
        return e.detailedResponse ? o : null == o ? void 0 : o.access_token;
    }
    async _getTokenSilently(t) {
        const { cacheMode: n } = t, o = e(t, [
            "cacheMode"
        ]);
        if ("off" !== n) {
            const e = await this._getEntryFromCache({
                scope: o.authorizationParams.scope,
                audience: o.authorizationParams.audience || "default",
                clientId: this.options.clientId,
                cacheMode: n
            });
            if (e) return e;
        }
        if ("cache-only" !== n) {
            if (!await (async (e, t = 3)=>{
                for(let n = 0; n < t; n++)if (await e()) return !0;
                return !1;
            })(()=>Ne.acquireLock("auth0.lock.getTokenSilently", 5e3), 10)) throw new l;
            try {
                if (window.addEventListener("pagehide", this._releaseLockOnPageHide), "off" !== n) {
                    const e = await this._getEntryFromCache({
                        scope: o.authorizationParams.scope,
                        audience: o.authorizationParams.audience || "default",
                        clientId: this.options.clientId
                    });
                    if (e) return e;
                }
                const e = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(o) : await this._getTokenFromIFrame(o), { id_token: t, token_type: i, access_token: r, oauthTokenScope: s, expires_in: a } = e;
                return Object.assign(Object.assign({
                    id_token: t,
                    token_type: i,
                    access_token: r
                }, s ? {
                    scope: s
                } : null), {
                    expires_in: a
                });
            } finally{
                await Ne.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
            }
        }
    }
    async getTokenWithPopup(e = {}, t = {}) {
        var n;
        const o = Object.assign(Object.assign({}, e), {
            authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), {
                scope: B(this.scope, null === (n = e.authorizationParams) || void 0 === n ? void 0 : n.scope)
            })
        });
        t = Object.assign(Object.assign({}, s), t), await this.loginWithPopup(o, t);
        return (await this.cacheManager.get(new q({
            scope: o.authorizationParams.scope,
            audience: o.authorizationParams.audience || "default",
            clientId: this.options.clientId
        }), void 0, this.options.useMrrt)).access_token;
    }
    async isAuthenticated() {
        return !!await this.getUser();
    }
    _buildLogoutUrl(t) {
        null !== t.clientId ? t.clientId = t.clientId || this.options.clientId : delete t.clientId;
        const n = t.logoutParams || {}, { federated: o } = n, i = e(n, [
            "federated"
        ]), r = o ? "&federated" : "";
        return this._url(`/v2/logout?${S(Object.assign({
            clientId: t.clientId
        }, i))}`) + r;
    }
    async logout(t = {}) {
        var n;
        const o = Te(t), { openUrl: i } = o, r = e(o, [
            "openUrl"
        ]);
        null === t.clientId ? await this.cacheManager.clear() : await this.cacheManager.clear(t.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain
        }), this.cookieStorage.remove(this.isAuthenticatedCookieName, {
            cookieDomain: this.options.cookieDomain
        }), this.userCache.remove("@@user@@"), await (null === (n = this.dpop) || void 0 === n ? void 0 : n.clear());
        const s = this._buildLogoutUrl(r);
        i ? await i(s) : !1 !== i && window.location.assign(s);
    }
    async _getTokenFromIFrame(e) {
        const t = Object.assign(Object.assign({}, e.authorizationParams), {
            prompt: "none"
        }), n = this.cookieStorage.get(this.orgHintCookieName);
        n && !t.organization && (t.organization = n);
        const { url: o, state: i, nonce: r, code_verifier: s, redirect_uri: a, scope: c, audience: d } = await this._prepareAuthorizeUrl(t, {
            response_mode: "web_message"
        }, window.location.origin);
        try {
            if (window.crossOriginIsolated) throw new u("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
            const n = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
            let h;
            try {
                h = new URL(this.domainUrl).origin;
            } catch (e) {
                h = this.domainUrl;
            }
            const p = await ((e, t, n = 60)=>new Promise((o, i)=>{
                    const r = window.document.createElement("iframe");
                    r.setAttribute("width", "0"), r.setAttribute("height", "0"), r.style.display = "none";
                    const s = ()=>{
                        window.document.body.contains(r) && (window.document.body.removeChild(r), window.removeEventListener("message", a, !1));
                    };
                    let a;
                    const c = setTimeout(()=>{
                        i(new l), s();
                    }, 1e3 * n);
                    a = function(e) {
                        if (e.origin != t) return;
                        if (!e.data || "authorization_response" !== e.data.type) return;
                        const n = e.source;
                        n && n.close(), e.data.response.error ? i(u.fromPayload(e.data.response)) : o(e.data.response), clearTimeout(c), window.removeEventListener("message", a, !1), setTimeout(s, 2e3);
                    }, window.addEventListener("message", a, !1), window.document.body.appendChild(r), r.setAttribute("src", e);
                }))(o, h, n);
            if (i !== p.state) throw new u("state_mismatch", "Invalid state");
            const m = await this._requestToken(Object.assign(Object.assign({}, e.authorizationParams), {
                code_verifier: s,
                code: p.code,
                grant_type: "authorization_code",
                redirect_uri: a,
                timeout: e.authorizationParams.timeout || this.httpTimeoutMs
            }), {
                nonceIn: r,
                organization: t.organization
            });
            return Object.assign(Object.assign({}, m), {
                scope: c,
                oauthTokenScope: m.scope,
                audience: d
            });
        } catch (e) {
            throw "login_required" === e.error && this.logout({
                openUrl: !1
            }), e;
        }
    }
    async _getTokenUsingRefreshToken(e) {
        const t = await this.cacheManager.get(new q({
            scope: e.authorizationParams.scope,
            audience: e.authorizationParams.audience || "default",
            clientId: this.options.clientId
        }), void 0, this.options.useMrrt);
        if (!(t && t.refresh_token || this.worker)) {
            if (this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
            throw new g(e.authorizationParams.audience || "default", e.authorizationParams.scope);
        }
        const n = e.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o = "number" == typeof e.timeoutInSeconds ? 1e3 * e.timeoutInSeconds : null, i = ((e, t, n, o)=>{
            var i;
            if (e && n && o) {
                if (t.audience !== n) return t.scope;
                const e = o.split(" "), r = (null === (i = t.scope) || void 0 === i ? void 0 : i.split(" ")) || [], s = r.every((t)=>e.includes(t));
                return e.length >= r.length && s ? o : t.scope;
            }
            return t.scope;
        })(this.options.useMrrt, e.authorizationParams, null == t ? void 0 : t.audience, null == t ? void 0 : t.scope);
        try {
            const u = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e.authorizationParams), {
                grant_type: "refresh_token",
                refresh_token: t && t.refresh_token,
                redirect_uri: n
            }), o && {
                timeout: o
            }), {
                scopesToRequest: i
            });
            if (u.refresh_token && this.options.useMrrt && (null == t ? void 0 : t.refresh_token) && await this.cacheManager.updateEntry(t.refresh_token, u.refresh_token), this.options.useMrrt) {
                if (r = null == t ? void 0 : t.audience, s = null == t ? void 0 : t.scope, a = e.authorizationParams.audience, c = e.authorizationParams.scope, r !== a || !Oe(c, s)) {
                    if (!Oe(i, u.scope)) {
                        if (this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
                        const t = ((e, t)=>{
                            const n = (null == e ? void 0 : e.split(" ")) || [], o = (null == t ? void 0 : t.split(" ")) || [];
                            return n.filter((e)=>-1 == o.indexOf(e)).join(",");
                        })(i, u.scope);
                        throw new y(e.authorizationParams.audience || "default", t);
                    }
                }
            }
            return Object.assign(Object.assign({}, u), {
                scope: e.authorizationParams.scope,
                oauthTokenScope: u.scope,
                audience: e.authorizationParams.audience || "default"
            });
        } catch (t) {
            if ((t.message.indexOf("Missing Refresh Token") > -1 || t.message && t.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
            throw t;
        }
        var r, s, a, c;
    }
    async _saveEntryInCache(t) {
        const { id_token: n, decodedToken: o } = t, i = e(t, [
            "id_token",
            "decodedToken"
        ]);
        this.userCache.set("@@user@@", {
            id_token: n,
            decodedToken: o
        }), await this.cacheManager.setIdToken(this.options.clientId, t.id_token, t.decodedToken), await this.cacheManager.set(i);
    }
    async _getIdTokenFromCache() {
        const e = this.options.authorizationParams.audience || "default", t = await this.cacheManager.getIdToken(new q({
            clientId: this.options.clientId,
            audience: e,
            scope: this.scope
        })), n = this.userCache.get("@@user@@");
        return t && t.id_token === (null == n ? void 0 : n.id_token) ? n : (this.userCache.set("@@user@@", t), t);
    }
    async _getEntryFromCache({ scope: e, audience: t, clientId: n, cacheMode: o }) {
        const i = await this.cacheManager.get(new q({
            scope: e,
            audience: t,
            clientId: n
        }), 60, this.options.useMrrt, o);
        if (i && i.access_token) {
            const { token_type: e, access_token: t, oauthTokenScope: n, expires_in: o } = i, r = await this._getIdTokenFromCache();
            return r && Object.assign(Object.assign({
                id_token: r.id_token,
                token_type: e || "Bearer",
                access_token: t
            }, n ? {
                scope: n
            } : null), {
                expires_in: o
            });
        }
    }
    async _requestToken(e, t) {
        const { nonceIn: n, organization: o, scopesToRequest: i } = t || {}, r = await $(Object.assign(Object.assign({
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs,
            useMrrt: this.options.useMrrt,
            dpop: this.dpop
        }, e), {
            scope: i || e.scope
        }), this.worker), s = await this._verifyIdToken(r.id_token, n, o);
        return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, r), {
            decodedToken: s,
            scope: e.scope,
            audience: e.audience || "default"
        }), r.scope ? {
            oauthTokenScope: r.scope
        } : null), {
            client_id: this.options.clientId
        })), this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain
        }), this._processOrgHint(o || s.claims.org_id), Object.assign(Object.assign({}, r), {
            decodedToken: s
        });
    }
    async exchangeToken(e) {
        return this._requestToken({
            grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
            subject_token: e.subject_token,
            subject_token_type: e.subject_token_type,
            scope: B(e.scope, this.scope),
            audience: e.audience || this.options.authorizationParams.audience
        });
    }
    _assertDpop(e) {
        if (!e) throw new Error("`useDpop` option must be enabled before using DPoP.");
    }
    getDpopNonce(e) {
        return this._assertDpop(this.dpop), this.dpop.getNonce(e);
    }
    setDpopNonce(e, t) {
        return this._assertDpop(this.dpop), this.dpop.setNonce(e, t);
    }
    generateDpopProof(e) {
        return this._assertDpop(this.dpop), this.dpop.generateProof(e);
    }
    createFetcher(e = {}) {
        return new Ke(e, {
            isDpopEnabled: ()=>!!this.options.useDpop,
            getAccessToken: (e)=>{
                var t;
                return this.getTokenSilently({
                    authorizationParams: {
                        scope: null === (t = null == e ? void 0 : e.scope) || void 0 === t ? void 0 : t.join(" "),
                        audience: null == e ? void 0 : e.audience
                    },
                    detailedResponse: !0
                });
            },
            getDpopNonce: ()=>this.getDpopNonce(e.dpopNonceId),
            setDpopNonce: (t)=>this.setDpopNonce(t, e.dpopNonceId),
            generateDpopProof: (e)=>this.generateDpopProof(e)
        });
    }
    async connectAccountWithRedirect(e) {
        const { openUrl: t, appState: n, connection: o, authorization_params: i, redirectUri: r = this.options.authorizationParams.redirect_uri || window.location.origin } = e;
        if (!o) throw new Error("connection is required");
        const s = _(v()), a = v(), c = await I(a), u = O(c), { connect_uri: d, connect_params: h, auth_session: l } = await this.myAccountApi.connectAccount({
            connection: o,
            redirect_uri: r,
            state: s,
            code_challenge: u,
            code_challenge_method: "S256",
            authorization_params: i
        });
        this.transactionManager.create({
            state: s,
            code_verifier: a,
            auth_session: l,
            redirect_uri: r,
            appState: n,
            connection: o,
            response_type: pe.ConnectCode
        });
        const p = new URL(d);
        p.searchParams.set("ticket", h.ticket), t ? await t(p.toString()) : window.location.assign(p);
    }
}
/**
 * The initial auth state.
 */ var initialAuthState = {
    isAuthenticated: false,
    isLoading: true,
    error: undefined,
    user: undefined
};
/**
 * @ignore
 */ var stub = function() {
    throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */ var initialContext = __assign(__assign({}, initialAuthState), {
    buildAuthorizeUrl: stub,
    buildLogoutUrl: stub,
    getAccessTokenSilently: stub,
    getAccessTokenWithPopup: stub,
    getIdTokenClaims: stub,
    loginWithRedirect: stub,
    loginWithPopup: stub,
    connectAccountWithRedirect: stub,
    logout: stub,
    handleRedirectCallback: stub,
    getDpopNonce: stub,
    setDpopNonce: stub,
    generateDpopProof: stub,
    createFetcher: stub
});
/**
 * The Auth0 Context
 */ var Auth0Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(initialContext);
/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */ var OAuthError = function(_super) {
    __extends(OAuthError, _super);
    function OAuthError(error, error_description) {
        var _this = _super.call(this, error_description !== null && error_description !== void 0 ? error_description : error) || this;
        _this.error = error;
        _this.error_description = error_description;
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, OAuthError.prototype);
        return _this;
    }
    return OAuthError;
}(Error);
var CODE_RE = /[?&](?:connect_)?code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function(searchParams) {
    if (searchParams === void 0) {
        searchParams = window.location.search;
    }
    return (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) && STATE_RE.test(searchParams);
};
var normalizeErrorFn = function(fallbackMessage) {
    return function(error) {
        if (error instanceof Error) {
            return error;
        }
        // try to check errors of the following form: {error: string; error_description?: string}
        if (error !== null && typeof error === 'object' && 'error' in error && typeof error.error === 'string') {
            if ('error_description' in error && typeof error.error_description === 'string') {
                var e_1 = error;
                return new OAuthError(e_1.error, e_1.error_description);
            }
            var e = error;
            return new OAuthError(e.error);
        }
        return new Error(fallbackMessage);
    };
};
var loginError = normalizeErrorFn('Login failed');
var tokenError = normalizeErrorFn('Get access token failed');
/**
 * @ignore
 * Helper function to map the v1 `redirectUri` option to the v2 `authorizationParams.redirect_uri`
 * and log a warning.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
var deprecateRedirectUri = function(options) {
    var _a, _b;
    if (options === null || options === void 0 ? void 0 : options.redirectUri) {
        console.warn('Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version');
        options.authorizationParams = (_a = options.authorizationParams) !== null && _a !== void 0 ? _a : {};
        options.authorizationParams.redirect_uri = options.redirectUri;
        delete options.redirectUri;
    }
    if ((_b = options === null || options === void 0 ? void 0 : options.authorizationParams) === null || _b === void 0 ? void 0 : _b.redirectUri) {
        console.warn('Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version');
        options.authorizationParams.redirect_uri = options.authorizationParams.redirectUri;
        delete options.authorizationParams.redirectUri;
    }
};
/**
 * Handles how that state changes in the `useAuth0` hook.
 */ var reducer = function(state, action) {
    switch(action.type){
        case 'LOGIN_POPUP_STARTED':
            return __assign(__assign({}, state), {
                isLoading: true
            });
        case 'LOGIN_POPUP_COMPLETE':
        case 'INITIALISED':
            return __assign(__assign({}, state), {
                isAuthenticated: !!action.user,
                user: action.user,
                isLoading: false,
                error: undefined
            });
        case 'HANDLE_REDIRECT_COMPLETE':
        case 'GET_ACCESS_TOKEN_COMPLETE':
            if (state.user === action.user) {
                return state;
            }
            return __assign(__assign({}, state), {
                isAuthenticated: !!action.user,
                user: action.user
            });
        case 'LOGOUT':
            return __assign(__assign({}, state), {
                isAuthenticated: false,
                user: undefined
            });
        case 'ERROR':
            return __assign(__assign({}, state), {
                isLoading: false,
                error: action.error
            });
    }
};
/**
 * @ignore
 */ var toAuth0ClientOptions = function(opts) {
    deprecateRedirectUri(opts);
    return __assign(__assign({}, opts), {
        auth0Client: {
            name: 'auth0-react',
            version: '2.8.0'
        }
    });
};
/**
 * @ignore
 */ var defaultOnRedirectCallback = function(appState) {
    var _a;
    window.history.replaceState({}, document.title, (_a = appState.returnTo) !== null && _a !== void 0 ? _a : window.location.pathname);
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   authorizationParams={{ redirect_uri: window.location.origin }}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */ var Auth0Provider = function(opts) {
    var children = opts.children, skipRedirectCallback = opts.skipRedirectCallback, _a = opts.onRedirectCallback, onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a, _b = opts.context, context = _b === void 0 ? Auth0Context : _b, clientOpts = __rest(opts, [
        "children",
        "skipRedirectCallback",
        "onRedirectCallback",
        "context"
    ]);
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return new Re(toAuth0ClientOptions(clientOpts));
    })[0];
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialAuthState), state = _c[0], dispatch = _c[1];
    var didInitialise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var handleError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(error) {
        dispatch({
            type: 'ERROR',
            error: error
        });
        return error;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (didInitialise.current) {
            return;
        }
        didInitialise.current = true;
        (function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var user, _a, _b, appState, response_type, result, error_1;
                return __generator(this, function(_c) {
                    switch(_c.label){
                        case 0:
                            _c.trys.push([
                                0,
                                7,
                                ,
                                8
                            ]);
                            user = void 0;
                            if (!(hasAuthParams() && !skipRedirectCallback)) return [
                                3 /*break*/ ,
                                3
                            ];
                            return [
                                4 /*yield*/ ,
                                client.handleRedirectCallback()
                            ];
                        case 1:
                            _a = _c.sent(), _b = _a.appState, appState = _b === void 0 ? {} : _b, response_type = _a.response_type, result = __rest(_a, [
                                "appState",
                                "response_type"
                            ]);
                            return [
                                4 /*yield*/ ,
                                client.getUser()
                            ];
                        case 2:
                            user = _c.sent();
                            appState.response_type = response_type;
                            if (response_type === pe.ConnectCode) {
                                appState.connectedAccount = result;
                            }
                            onRedirectCallback(appState, user);
                            return [
                                3 /*break*/ ,
                                6
                            ];
                        case 3:
                            return [
                                4 /*yield*/ ,
                                client.checkSession()
                            ];
                        case 4:
                            _c.sent();
                            return [
                                4 /*yield*/ ,
                                client.getUser()
                            ];
                        case 5:
                            user = _c.sent();
                            _c.label = 6;
                        case 6:
                            dispatch({
                                type: 'INITIALISED',
                                user: user
                            });
                            return [
                                3 /*break*/ ,
                                8
                            ];
                        case 7:
                            error_1 = _c.sent();
                            handleError(loginError(error_1));
                            return [
                                3 /*break*/ ,
                                8
                            ];
                        case 8:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        })();
    }, [
        client,
        onRedirectCallback,
        skipRedirectCallback,
        handleError
    ]);
    var loginWithRedirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(opts) {
        deprecateRedirectUri(opts);
        return client.loginWithRedirect(opts);
    }, [
        client
    ]);
    var loginWithPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(options, config) {
        return __awaiter(void 0, void 0, void 0, function() {
            var error_2, user;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        dispatch({
                            type: 'LOGIN_POPUP_STARTED'
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            client.loginWithPopup(options, config)
                        ];
                    case 2:
                        _a.sent();
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        error_2 = _a.sent();
                        handleError(loginError(error_2));
                        return [
                            2 /*return*/ 
                        ];
                    case 4:
                        return [
                            4 /*yield*/ ,
                            client.getUser()
                        ];
                    case 5:
                        user = _a.sent();
                        dispatch({
                            type: 'LOGIN_POPUP_COMPLETE',
                            user: user
                        });
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, [
        client,
        handleError
    ]);
    var logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        var args_1 = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function(opts) {
            if (opts === void 0) {
                opts = {};
            }
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            client.logout(opts)
                        ];
                    case 1:
                        _a.sent();
                        if (opts.openUrl || opts.openUrl === false) {
                            dispatch({
                                type: 'LOGOUT'
                            });
                        }
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, [
        client
    ]);
    var getAccessTokenSilently = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    function(opts) {
        return __awaiter(void 0, void 0, void 0, function() {
            var token, error_3, _a;
            var _b;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        _c.trys.push([
                            0,
                            2,
                            3,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            client.getTokenSilently(opts)
                        ];
                    case 1:
                        token = _c.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 2:
                        error_3 = _c.sent();
                        throw tokenError(error_3);
                    case 3:
                        _a = dispatch;
                        _b = {
                            type: 'GET_ACCESS_TOKEN_COMPLETE'
                        };
                        return [
                            4 /*yield*/ ,
                            client.getUser()
                        ];
                    case 4:
                        _a.apply(void 0, [
                            (_b.user = _c.sent(), _b)
                        ]);
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ ,
                            token
                        ];
                }
            });
        });
    }, [
        client
    ]);
    var getAccessTokenWithPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(opts, config) {
        return __awaiter(void 0, void 0, void 0, function() {
            var token, error_4, _a;
            var _b;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        _c.trys.push([
                            0,
                            2,
                            3,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            client.getTokenWithPopup(opts, config)
                        ];
                    case 1:
                        token = _c.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 2:
                        error_4 = _c.sent();
                        throw tokenError(error_4);
                    case 3:
                        _a = dispatch;
                        _b = {
                            type: 'GET_ACCESS_TOKEN_COMPLETE'
                        };
                        return [
                            4 /*yield*/ ,
                            client.getUser()
                        ];
                    case 4:
                        _a.apply(void 0, [
                            (_b.user = _c.sent(), _b)
                        ]);
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ ,
                            token
                        ];
                }
            });
        });
    }, [
        client
    ]);
    var connectAccountWithRedirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(options) {
        return client.connectAccountWithRedirect(options);
    }, [
        client
    ]);
    var getIdTokenClaims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return client.getIdTokenClaims();
    }, [
        client
    ]);
    var handleRedirectCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(url) {
        return __awaiter(void 0, void 0, void 0, function() {
            var error_5, _a;
            var _b;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        _c.trys.push([
                            0,
                            2,
                            3,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            client.handleRedirectCallback(url)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _c.sent()
                        ];
                    case 2:
                        error_5 = _c.sent();
                        throw tokenError(error_5);
                    case 3:
                        _a = dispatch;
                        _b = {
                            type: 'HANDLE_REDIRECT_COMPLETE'
                        };
                        return [
                            4 /*yield*/ ,
                            client.getUser()
                        ];
                    case 4:
                        _a.apply(void 0, [
                            (_b.user = _c.sent(), _b)
                        ]);
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, [
        client
    ]);
    var getDpopNonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(id) {
        return client.getDpopNonce(id);
    }, [
        client
    ]);
    var setDpopNonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(nonce, id) {
        return client.setDpopNonce(nonce, id);
    }, [
        client
    ]);
    var generateDpopProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(params) {
        return client.generateDpopProof(params);
    }, [
        client
    ]);
    var createFetcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(config) {
        return client.createFetcher(config);
    }, [
        client
    ]);
    var contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return __assign(__assign({}, state), {
            getAccessTokenSilently: getAccessTokenSilently,
            getAccessTokenWithPopup: getAccessTokenWithPopup,
            getIdTokenClaims: getIdTokenClaims,
            loginWithRedirect: loginWithRedirect,
            loginWithPopup: loginWithPopup,
            connectAccountWithRedirect: connectAccountWithRedirect,
            logout: logout,
            handleRedirectCallback: handleRedirectCallback,
            getDpopNonce: getDpopNonce,
            setDpopNonce: setDpopNonce,
            generateDpopProof: generateDpopProof,
            createFetcher: createFetcher
        });
    }, [
        state,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        getIdTokenClaims,
        loginWithRedirect,
        loginWithPopup,
        connectAccountWithRedirect,
        logout,
        handleRedirectCallback,
        getDpopNonce,
        setDpopNonce,
        generateDpopProof,
        createFetcher
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(context.Provider, {
        value: contextValue
    }, children);
};
/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0<TUser>();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 *
 * TUser is an optional type param to provide a type to the `user` field.
 */ var useAuth0 = function(context) {
    if (context === void 0) {
        context = Auth0Context;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(context);
};
/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the Auth0Context.
 *
 * Providing a context as the second argument allows you to configure the Auth0Provider the Auth0Context
 * should come from f you have multiple within your application.
 */ var withAuth0 = function(Component, context) {
    if (context === void 0) {
        context = Auth0Context;
    }
    return function WithAuth(props) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(context.Consumer, null, function(auth) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, __assign({}, props, {
                auth0: auth
            }));
        });
    };
};
/**
 * @ignore
 */ var defaultOnRedirecting = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null);
};
/**
* @ignore
*/ var defaultOnBeforeAuthentication = function() {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a) {
            return [
                2 /*return*/ 
            ];
        });
    });
};
/**
 * @ignore
 */ var defaultReturnTo = function() {
    return "".concat(window.location.pathname).concat(window.location.search);
};
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page; after login they will be returned to the page they were redirected from.
 */ var withAuthenticationRequired = function(Component, options) {
    if (options === void 0) {
        options = {};
    }
    return function WithAuthenticationRequired(props) {
        var _this = this;
        var _a = options.returnTo, returnTo = _a === void 0 ? defaultReturnTo : _a, _b = options.onRedirecting, onRedirecting = _b === void 0 ? defaultOnRedirecting : _b, _c = options.onBeforeAuthentication, onBeforeAuthentication = _c === void 0 ? defaultOnBeforeAuthentication : _c, loginOptions = options.loginOptions, _d = options.context, context = _d === void 0 ? Auth0Context : _d;
        var _e = useAuth0(context), isAuthenticated = _e.isAuthenticated, isLoading = _e.isLoading, loginWithRedirect = _e.loginWithRedirect;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            if (isLoading || isAuthenticated) {
                return;
            }
            var opts = __assign(__assign({}, loginOptions), {
                appState: __assign(__assign({}, loginOptions === null || loginOptions === void 0 ? void 0 : loginOptions.appState), {
                    returnTo: typeof returnTo === 'function' ? returnTo() : returnTo
                })
            });
            void function() {
                return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                return [
                                    4 /*yield*/ ,
                                    onBeforeAuthentication()
                                ];
                            case 1:
                                _a.sent();
                                return [
                                    4 /*yield*/ ,
                                    loginWithRedirect(opts)
                                ];
                            case 2:
                                _a.sent();
                                return [
                                    2 /*return*/ 
                                ];
                        }
                    });
                });
            }();
        }, [
            isLoading,
            isAuthenticated,
            loginWithRedirect,
            onBeforeAuthentication,
            loginOptions,
            returnTo
        ]);
        return isAuthenticated ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, __assign({}, props)) : onRedirecting();
    };
};
;
 //# sourceMappingURL=auth0-react.esm.js.map
}),
"[project]/Desktop/allset/node_modules/@pandacss/is-valid-prop/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "allCssProperties",
    ()=>allCssProperties,
    "isCssProperty",
    ()=>isCssProperty
]);
var userGeneratedStr = "";
var userGenerated = userGeneratedStr.split(",");
var cssPropertiesStr = "WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,WebkitUserSelect,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,anchorName,anchorScope,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationRange,animationRangeEnd,animationRangeStart,animationTimeline,animationTimingFunction,appearance,aspectRatio,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockSize,border,borderBlock,borderBlockColor,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBlockStyle,borderBlockWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineColor,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderInlineStyle,borderInlineWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,clipRule,color,colorInterpolationFilters,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,counterIncrement,counterReset,counterSet,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fieldSizing,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontSynthesisPosition,fontSynthesisSmallCaps,fontSynthesisStyle,fontSynthesisWeight,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontVariationSettings,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,interpolateSize,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lightingColor,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,marker,markerEnd,markerMid,markerStart,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overlay,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,positionAnchor,positionArea,positionTry,positionTryFallbacks,positionTryOrder,positionVisibility,printColorAdjust,quotes,r,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,rx,ry,scale,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,scrollbarColor,scrollbarGutter,scrollbarWidth,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textBox,textBoxEdge,textBoxTrim,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textSpacingTrim,textTransform,textUnderlineOffset,textUnderlinePosition,textWrap,textWrapMode,textWrapStyle,timelineScope,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionBehavior,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,vectorEffect,verticalAlign,viewTimeline,viewTimelineAxis,viewTimelineInset,viewTimelineName,viewTransitionName,visibility,whiteSpace,whiteSpaceCollapse,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom,alignmentBaseline,baselineShift,colorInterpolation,colorRendering,glyphOrientationVertical";
var allCssProperties = cssPropertiesStr.split(",").concat(userGenerated);
var properties = new Map(allCssProperties.map((prop)=>[
        prop,
        true
    ]));
function memo(fn) {
    const cache = /* @__PURE__ */ Object.create(null);
    return (arg)=>{
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
    };
}
var cssPropertySelectorRegex = /&|@/;
var isCssProperty = /* @__PURE__ */ memo((prop)=>{
    return properties.has(prop) || prop.startsWith("--") || cssPropertySelectorRegex.test(prop);
});
;
}),
"[project]/Desktop/allset/node_modules/@internationalized/number/dist/NumberFormatter.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_context__.s([
    "NumberFormatter",
    ()=>$488c6ddbf4ef74c2$export$cc77c4ff7e8673c5,
    "numberFormatSignDisplayPolyfill",
    ()=>$488c6ddbf4ef74c2$export$711b50b3c525e0f2
]);
let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}
;
 //# sourceMappingURL=NumberFormatter.module.js.map
}),
"[project]/Desktop/allset/node_modules/@internationalized/number/dist/NumberParser.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberParser",
    ()=>$6c7bd7858deea686$export$cd11ab140839f11d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$internationalized$2f$number$2f$dist$2f$NumberFormatter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@internationalized/number/dist/NumberFormatter.mjs [app-ssr] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
    'latn',
    'arab',
    'hanidec',
    'deva',
    'beng',
    'fullwide'
];
class $6c7bd7858deea686$export$cd11ab140839f11d {
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        this.options = options;
    }
}
const $6c7bd7858deea686$var$numberParserCache = new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
        $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $6c7bd7858deea686$var$NumberParserImpl {
    parse(value) {
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        if (this.symbols.group) fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, '');
        if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, '.');
        if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, '-');
        fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
        if (this.options.style === 'percent') {
            // javascript is bad at dividing by 100 and maintaining the same significant figures, so perform it on the string before parsing
            let isNegative = fullySanitizedValue.indexOf('-');
            fullySanitizedValue = fullySanitizedValue.replace('-', '');
            fullySanitizedValue = fullySanitizedValue.replace('+', '');
            let index = fullySanitizedValue.indexOf('.');
            if (index === -1) index = fullySanitizedValue.length;
            fullySanitizedValue = fullySanitizedValue.replace('.', '');
            if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
            else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
            else if (index - 2 === -2) fullySanitizedValue = '0.00';
            else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
            if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
        }
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        if (this.options.style === 'percent') {
            var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
            // extra step for rounding percents to what our formatter would output
            let options = {
                ...this.options,
                style: 'decimal',
                minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
                maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
            };
            return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$internationalized$2f$number$2f$dist$2f$NumberFormatter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberFormatter"])(this.locale, options).format(newValue));
        }
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === 'accounting' && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        return newValue;
    }
    sanitize(value) {
        // Remove literals and whitespace, which are allowed anywhere in the string
        value = value.replace(this.symbols.literals, '');
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        if (this.symbols.minusSign) value = value.replace('-', this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === 'arab') {
            if (this.symbols.decimal) {
                value = value.replace(',', this.symbols.decimal);
                value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
            }
            if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, '.', this.symbols.group);
        }
        // In some locale styles, such as swiss currency, the group character can be a special single quote
        // that keyboards don't typically have. This expands the character to include the easier to type single quote.
        if (this.symbols.group === "\u2019" && value.includes("'")) value = $6c7bd7858deea686$var$replaceAll(value, "'", this.symbols.group);
        // fr-FR group character is narrow non-breaking space, char code 8239 (U+202F), but that's not a key on the french keyboard,
        // so allow space and non-breaking space as a group char as well
        if (this.options.locale === 'fr-FR' && this.symbols.group) {
            value = $6c7bd7858deea686$var$replaceAll(value, ' ', this.symbols.group);
            value = $6c7bd7858deea686$var$replaceAll(value, /\u00A0/g, this.symbols.group);
        }
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers cannot start with a group separator
        if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
        // Numbers that can't have any decimal values fail if a decimal character is typed
        if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
        // Remove numerals, groups, and decimals
        if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, '');
        value = value.replace(this.symbols.numeral, '');
        if (this.symbols.decimal) value = value.replace(this.symbols.decimal, '');
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        // see https://tc39.es/ecma402/#sec-setnfdigitoptions, when using roundingIncrement, the maximumFractionDigits and minimumFractionDigits must be equal
        // by default, they are 0 and 3 respectively, so we set them to 0 if neither are set
        if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
            if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
                options.maximumFractionDigits = 0;
                options.minimumFractionDigits = 0;
            } else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
            else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
        // if both are specified, let the normal Range Error be thrown
        }
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
        var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
        if (this.options.style === 'percent' && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
    }
}
const $6c7bd7858deea686$var$nonLiteralParts = new Set([
    'decimal',
    'fraction',
    'integer',
    'minusSign',
    'plusSign',
    'group'
]);
// This list is derived from https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html#comparison and includes
// all unique numbers which we need to check in order to determine all the plural forms for a given locale.
// See: https://github.com/adobe/react-spectrum/pull/5134/files#r1337037855 for used script
const $6c7bd7858deea686$var$pluralNumbers = [
    0,
    4,
    2,
    1,
    11,
    20,
    3,
    7,
    100,
    21,
    0.1,
    1.1
];
function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
    var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
    // formatter needs access to all decimal places in order to generate the correct literal strings for the plural set
    let symbolFormatter = new Intl.NumberFormat(locale, {
        ...intlOptions,
        // Resets so we get the full range of symbols
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 21,
        roundingIncrement: 1,
        roundingPriority: 'auto',
        roundingMode: 'halfExpand'
    });
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = symbolFormatter.formatToParts(-10000.111);
    let posAllParts = symbolFormatter.formatToParts(10000.111);
    let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n)=>symbolFormatter.formatToParts(n));
    var _allParts_find_value;
    let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p)=>p.type === 'minusSign')) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : '-';
    let plusSign = (_posAllParts_find = posAllParts.find((p)=>p.type === 'plusSign')) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'always')) plusSign = '+';
    // If maximumSignificantDigits is 1 (the minimum) then we won't get decimal characters out of the above formatters
    // Percent also defaults to 0 fractionDigits, so we need to make a new one that isn't percent to get an accurate decimal
    let decimalParts = new Intl.NumberFormat(locale, {
        ...intlOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).formatToParts(0.001);
    let decimal = (_decimalParts_find = decimalParts.find((p)=>p.type === 'decimal')) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
    let group = (_allParts_find1 = allParts.find((p)=>p.type === 'group')) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let allPartsLiterals = allParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value));
    let pluralPartsLiterals = pluralParts.flatMap((p)=>p.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value)));
    let sortedLiterals = [
        ...new Set([
            ...allPartsLiterals,
            ...pluralPartsLiterals
        ])
    ].sort((a, b)=>b.length - a.length);
    let literals = sortedLiterals.length === 0 ? new RegExp('[\\p{White_Space}]', 'gu') : new RegExp(`${sortedLiterals.join('|')}|[\\p{White_Space}]`, 'gu');
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]));
    let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    let index = (d)=>String(indexes.get(d));
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        index: index
    };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
    if (str.replaceAll) return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
;
 //# sourceMappingURL=NumberParser.module.js.map
}),
"[project]/Desktop/allset/node_modules/uqr/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QrCodeDataType",
    ()=>QrCodeDataType,
    "encode",
    ()=>encode,
    "renderANSI",
    ()=>renderANSI,
    "renderSVG",
    ()=>renderSVG,
    "renderUnicode",
    ()=>renderUnicode,
    "renderUnicodeCompact",
    ()=>renderUnicodeCompact
]);
var QrCodeDataType = /* @__PURE__ */ ((QrCodeDataType2)=>{
    QrCodeDataType2[QrCodeDataType2["Border"] = -1] = "Border";
    QrCodeDataType2[QrCodeDataType2["Data"] = 0] = "Data";
    QrCodeDataType2[QrCodeDataType2["Function"] = 1] = "Function";
    QrCodeDataType2[QrCodeDataType2["Position"] = 2] = "Position";
    QrCodeDataType2[QrCodeDataType2["Timing"] = 3] = "Timing";
    QrCodeDataType2[QrCodeDataType2["Alignment"] = 4] = "Alignment";
    return QrCodeDataType2;
})(QrCodeDataType || {});
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
const LOW = [
    0,
    1
];
const MEDIUM = [
    1,
    0
];
const QUARTILE = [
    2,
    3
];
const HIGH = [
    3,
    2
];
const EccMap = {
    L: LOW,
    M: MEDIUM,
    Q: QUARTILE,
    H: HIGH
};
const NUMERIC_REGEX = /^[0-9]*$/;
const ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
const ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
const MIN_VERSION = 1;
const MAX_VERSION = 40;
const PENALTY_N1 = 3;
const PENALTY_N2 = 3;
const PENALTY_N3 = 40;
const PENALTY_N4 = 10;
const ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    // 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [
        -1,
        7,
        10,
        15,
        20,
        26,
        18,
        20,
        24,
        30,
        18,
        20,
        24,
        26,
        30,
        22,
        24,
        28,
        30,
        28,
        28,
        28,
        28,
        30,
        30,
        26,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ],
    // Low
    [
        -1,
        10,
        16,
        26,
        18,
        24,
        16,
        18,
        22,
        22,
        26,
        30,
        22,
        22,
        24,
        24,
        28,
        28,
        26,
        26,
        26,
        26,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28
    ],
    // Medium
    [
        -1,
        13,
        22,
        18,
        26,
        18,
        24,
        18,
        22,
        20,
        24,
        28,
        26,
        24,
        20,
        30,
        24,
        28,
        28,
        26,
        30,
        28,
        30,
        30,
        30,
        30,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ],
    // Quartile
    [
        -1,
        17,
        28,
        22,
        16,
        22,
        28,
        26,
        26,
        24,
        28,
        24,
        28,
        22,
        24,
        24,
        30,
        28,
        28,
        26,
        28,
        30,
        24,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ]
];
const NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [
        -1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        4,
        4,
        4,
        4,
        4,
        6,
        6,
        6,
        6,
        7,
        8,
        8,
        9,
        9,
        10,
        12,
        12,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        19,
        20,
        21,
        22,
        24,
        25
    ],
    // Low
    [
        -1,
        1,
        1,
        1,
        2,
        2,
        4,
        4,
        4,
        5,
        5,
        5,
        8,
        9,
        9,
        10,
        10,
        11,
        13,
        14,
        16,
        17,
        17,
        18,
        20,
        21,
        23,
        25,
        26,
        28,
        29,
        31,
        33,
        35,
        37,
        38,
        40,
        43,
        45,
        47,
        49
    ],
    // Medium
    [
        -1,
        1,
        1,
        2,
        2,
        4,
        4,
        6,
        6,
        8,
        8,
        8,
        10,
        12,
        16,
        12,
        17,
        16,
        18,
        21,
        20,
        23,
        23,
        25,
        27,
        29,
        34,
        34,
        35,
        38,
        40,
        43,
        45,
        48,
        51,
        53,
        56,
        59,
        62,
        65,
        68
    ],
    // Quartile
    [
        -1,
        1,
        1,
        2,
        4,
        4,
        4,
        5,
        6,
        8,
        8,
        11,
        11,
        16,
        16,
        18,
        16,
        19,
        21,
        25,
        25,
        25,
        34,
        30,
        32,
        35,
        37,
        40,
        42,
        45,
        48,
        51,
        54,
        57,
        60,
        63,
        66,
        70,
        74,
        77,
        81
    ]
];
class QrCode {
    /* -- Constructor (low level) and fields -- */ // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, ecc, dataCodewords, msk){
        this.version = version;
        this.ecc = ecc;
        /* -- Fields -- */ // The width and height of this QR Code, measured in modules, between
        // 21 and 177 (inclusive). This is equal to version * 4 + 17.
        __publicField(this, "size");
        // The index of the mask pattern used in this QR Code, which is between 0 and 7 (inclusive).
        // Even if a QR Code is created with automatic masking requested (mask = -1),
        // the resulting object still has a mask value between 0 and 7.
        __publicField(this, "mask");
        // The modules of this QR Code (false = light, true = dark).
        // Immutable after constructor finishes. Accessed through getModule().
        __publicField(this, "modules", []);
        __publicField(this, "types", []);
        if (version < MIN_VERSION || version > MAX_VERSION) throw new RangeError("Version value out of range");
        if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
        this.size = version * 4 + 17;
        const row = Array.from({
            length: this.size
        }, ()=>false);
        for(let i = 0; i < this.size; i++){
            this.modules.push(row.slice());
            this.types.push(row.map(()=>0));
        }
        this.drawFunctionPatterns();
        const allCodewords = this.addEccAndInterleave(dataCodewords);
        this.drawCodewords(allCodewords);
        if (msk === -1) {
            let minPenalty = 1e9;
            for(let i = 0; i < 8; i++){
                this.applyMask(i);
                this.drawFormatBits(i);
                const penalty = this.getPenaltyScore();
                if (penalty < minPenalty) {
                    msk = i;
                    minPenalty = penalty;
                }
                this.applyMask(i);
            }
        }
        this.mask = msk;
        this.applyMask(msk);
        this.drawFormatBits(msk);
    }
    /* -- Accessor methods -- */ // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
    }
    /* -- Private helper methods for constructor: Drawing function modules -- */ // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
        for(let i = 0; i < this.size; i++){
            this.setFunctionModule(6, i, i % 2 === 0, QrCodeDataType.Timing);
            this.setFunctionModule(i, 6, i % 2 === 0, QrCodeDataType.Timing);
        }
        this.drawFinderPattern(3, 3);
        this.drawFinderPattern(this.size - 4, 3);
        this.drawFinderPattern(3, this.size - 4);
        const alignPatPos = this.getAlignmentPatternPositions();
        const numAlign = alignPatPos.length;
        for(let i = 0; i < numAlign; i++){
            for(let j = 0; j < numAlign; j++){
                if (!(i === 0 && j === 0 || i === 0 && j === numAlign - 1 || i === numAlign - 1 && j === 0)) this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
            }
        }
        this.drawFormatBits(0);
        this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
        const data = this.ecc[1] << 3 | mask;
        let rem = data;
        for(let i = 0; i < 10; i++)rem = rem << 1 ^ (rem >>> 9) * 1335;
        const bits = (data << 10 | rem) ^ 21522;
        for(let i = 0; i <= 5; i++)this.setFunctionModule(8, i, getBit(bits, i));
        this.setFunctionModule(8, 7, getBit(bits, 6));
        this.setFunctionModule(8, 8, getBit(bits, 7));
        this.setFunctionModule(7, 8, getBit(bits, 8));
        for(let i = 9; i < 15; i++)this.setFunctionModule(14 - i, 8, getBit(bits, i));
        for(let i = 0; i < 8; i++)this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
        for(let i = 8; i < 15; i++)this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
        this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
        if (this.version < 7) return;
        let rem = this.version;
        for(let i = 0; i < 12; i++)rem = rem << 1 ^ (rem >>> 11) * 7973;
        const bits = this.version << 12 | rem;
        for(let i = 0; i < 18; i++){
            const color = getBit(bits, i);
            const a = this.size - 11 + i % 3;
            const b = Math.floor(i / 3);
            this.setFunctionModule(a, b, color);
            this.setFunctionModule(b, a, color);
        }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
        for(let dy = -4; dy <= 4; dy++){
            for(let dx = -4; dx <= 4; dx++){
                const dist = Math.max(Math.abs(dx), Math.abs(dy));
                const xx = x + dx;
                const yy = y + dy;
                if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4, QrCodeDataType.Position);
            }
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
        for(let dy = -2; dy <= 2; dy++){
            for(let dx = -2; dx <= 2; dx++){
                this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1, QrCodeDataType.Alignment);
            }
        }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark, type = QrCodeDataType.Function) {
        this.modules[y][x] = isDark;
        this.types[y][x] = type;
    }
    /* -- Private helper methods for constructor: Codewords and masking -- */ // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
        const ver = this.version;
        const ecl = this.ecc;
        if (data.length !== getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
        const numBlocks = NUM_ERROR_CORRECTION_BLOCKS[ecl[0]][ver];
        const blockEccLen = ECC_CODEWORDS_PER_BLOCK[ecl[0]][ver];
        const rawCodewords = Math.floor(getNumRawDataModules(ver) / 8);
        const numShortBlocks = numBlocks - rawCodewords % numBlocks;
        const shortBlockLen = Math.floor(rawCodewords / numBlocks);
        const blocks = [];
        const rsDiv = reedSolomonComputeDivisor(blockEccLen);
        for(let i = 0, k = 0; i < numBlocks; i++){
            const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
            k += dat.length;
            const ecc = reedSolomonComputeRemainder(dat, rsDiv);
            if (i < numShortBlocks) dat.push(0);
            blocks.push(dat.concat(ecc));
        }
        const result = [];
        for(let i = 0; i < blocks[0].length; i++){
            blocks.forEach((block, j)=>{
                if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
            });
        }
        return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
        if (data.length !== Math.floor(getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
        let i = 0;
        for(let right = this.size - 1; right >= 1; right -= 2){
            if (right === 6) right = 5;
            for(let vert = 0; vert < this.size; vert++){
                for(let j = 0; j < 2; j++){
                    const x = right - j;
                    const upward = (right + 1 & 2) === 0;
                    const y = upward ? this.size - 1 - vert : vert;
                    if (!this.types[y][x] && i < data.length * 8) {
                        this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                        i++;
                    }
                }
            }
        }
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
        if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
        for(let y = 0; y < this.size; y++){
            for(let x = 0; x < this.size; x++){
                let invert;
                switch(mask){
                    case 0:
                        invert = (x + y) % 2 === 0;
                        break;
                    case 1:
                        invert = y % 2 === 0;
                        break;
                    case 2:
                        invert = x % 3 === 0;
                        break;
                    case 3:
                        invert = (x + y) % 3 === 0;
                        break;
                    case 4:
                        invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
                        break;
                    case 5:
                        invert = x * y % 2 + x * y % 3 === 0;
                        break;
                    case 6:
                        invert = (x * y % 2 + x * y % 3) % 2 === 0;
                        break;
                    case 7:
                        invert = ((x + y) % 2 + x * y % 3) % 2 === 0;
                        break;
                    default:
                        throw new Error("Unreachable");
                }
                if (!this.types[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
            }
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
        let result = 0;
        for(let y = 0; y < this.size; y++){
            let runColor = false;
            let runX = 0;
            const runHistory = [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            for(let x = 0; x < this.size; x++){
                if (this.modules[y][x] === runColor) {
                    runX++;
                    if (runX === 5) result += PENALTY_N1;
                    else if (runX > 5) result++;
                } else {
                    this.finderPenaltyAddHistory(runX, runHistory);
                    if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * PENALTY_N3;
                    runColor = this.modules[y][x];
                    runX = 1;
                }
            }
            result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * PENALTY_N3;
        }
        for(let x = 0; x < this.size; x++){
            let runColor = false;
            let runY = 0;
            const runHistory = [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            for(let y = 0; y < this.size; y++){
                if (this.modules[y][x] === runColor) {
                    runY++;
                    if (runY === 5) result += PENALTY_N1;
                    else if (runY > 5) result++;
                } else {
                    this.finderPenaltyAddHistory(runY, runHistory);
                    if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * PENALTY_N3;
                    runColor = this.modules[y][x];
                    runY = 1;
                }
            }
            result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * PENALTY_N3;
        }
        for(let y = 0; y < this.size - 1; y++){
            for(let x = 0; x < this.size - 1; x++){
                const color = this.modules[y][x];
                if (color === this.modules[y][x + 1] && color === this.modules[y + 1][x] && color === this.modules[y + 1][x + 1]) result += PENALTY_N2;
            }
        }
        let dark = 0;
        for (const row of this.modules)dark = row.reduce((sum, color)=>sum + (color ? 1 : 0), dark);
        const total = this.size * this.size;
        const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
        result += k * PENALTY_N4;
        return result;
    }
    /* -- Private helper functions -- */ // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
        if (this.version === 1) {
            return [];
        } else {
            const numAlign = Math.floor(this.version / 7) + 2;
            const step = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
            const result = [
                6
            ];
            for(let pos = this.size - 7; result.length < numAlign; pos -= step)result.splice(1, 0, pos);
            return result;
        }
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
        const n = runHistory[1];
        const core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
        return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
        if (currentRunColor) {
            this.finderPenaltyAddHistory(currentRunLength, runHistory);
            currentRunLength = 0;
        }
        currentRunLength += this.size;
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
        if (runHistory[0] === 0) currentRunLength += this.size;
        runHistory.pop();
        runHistory.unshift(currentRunLength);
    }
}
function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len !== 0) throw new RangeError("Value out of range");
    for(let i = len - 1; i >= 0; i--)bb.push(val >>> i & 1);
}
function getBit(x, i) {
    return (x >>> i & 1) !== 0;
}
class QrSegment {
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData){
        this.mode = mode;
        this.numChars = numChars;
        this.bitData = bitData;
        if (numChars < 0) throw new RangeError("Invalid argument");
        this.bitData = bitData.slice();
    }
    /* -- Methods -- */ // Returns a new copy of the data bits of this segment.
    getData() {
        return this.bitData.slice();
    }
}
const MODE_NUMERIC = [
    1,
    10,
    12,
    14
];
const MODE_ALPHANUMERIC = [
    2,
    9,
    11,
    13
];
const MODE_BYTE = [
    4,
    8,
    16,
    16
];
function numCharCountBits(mode, ver) {
    return mode[Math.floor((ver + 7) / 17) + 1];
}
function makeBytes(data) {
    const bb = [];
    for (const b of data)appendBits(b, 8, bb);
    return new QrSegment(MODE_BYTE, data.length, bb);
}
function makeNumeric(digits) {
    if (!isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
    const bb = [];
    for(let i = 0; i < digits.length;){
        const n = Math.min(digits.length - i, 3);
        appendBits(Number.parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
        i += n;
    }
    return new QrSegment(MODE_NUMERIC, digits.length, bb);
}
function makeAlphanumeric(text) {
    if (!isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
    const bb = [];
    let i;
    for(i = 0; i + 2 <= text.length; i += 2){
        let temp = ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
    }
    if (i < text.length) appendBits(ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
    return new QrSegment(MODE_ALPHANUMERIC, text.length, bb);
}
function makeSegments(text) {
    if (text === "") return [];
    else if (isNumeric(text)) return [
        makeNumeric(text)
    ];
    else if (isAlphanumeric(text)) return [
        makeAlphanumeric(text)
    ];
    else return [
        makeBytes(toUtf8ByteArray(text))
    ];
}
function isNumeric(text) {
    return NUMERIC_REGEX.test(text);
}
function isAlphanumeric(text) {
    return ALPHANUMERIC_REGEX.test(text);
}
function getTotalBits(segs, version) {
    let result = 0;
    for (const seg of segs){
        const ccbits = numCharCountBits(seg.mode, version);
        if (seg.numChars >= 1 << ccbits) return Number.POSITIVE_INFINITY;
        result += 4 + ccbits + seg.bitData.length;
    }
    return result;
}
function toUtf8ByteArray(str) {
    str = encodeURI(str);
    const result = [];
    for(let i = 0; i < str.length; i++){
        if (str.charAt(i) !== "%") {
            result.push(str.charCodeAt(i));
        } else {
            result.push(Number.parseInt(str.substring(i + 1, i + 3), 16));
            i += 2;
        }
    }
    return result;
}
function getNumRawDataModules(ver) {
    if (ver < MIN_VERSION || ver > MAX_VERSION) throw new RangeError("Version number out of range");
    let result = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) result -= 36;
    }
    return result;
}
function getNumDataCodewords(ver, ecl) {
    return Math.floor(getNumRawDataModules(ver) / 8) - ECC_CODEWORDS_PER_BLOCK[ecl[0]][ver] * NUM_ERROR_CORRECTION_BLOCKS[ecl[0]][ver];
}
function reedSolomonComputeDivisor(degree) {
    if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
    const result = [];
    for(let i = 0; i < degree - 1; i++)result.push(0);
    result.push(1);
    let root = 1;
    for(let i = 0; i < degree; i++){
        for(let j = 0; j < result.length; j++){
            result[j] = reedSolomonMultiply(result[j], root);
            if (j + 1 < result.length) result[j] ^= result[j + 1];
        }
        root = reedSolomonMultiply(root, 2);
    }
    return result;
}
function reedSolomonComputeRemainder(data, divisor) {
    const result = divisor.map((_)=>0);
    for (const b of data){
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i)=>result[i] ^= reedSolomonMultiply(coef, factor));
    }
    return result;
}
function reedSolomonMultiply(x, y) {
    if (x >>> 8 !== 0 || y >>> 8 !== 0) throw new RangeError("Byte out of range");
    let z = 0;
    for(let i = 7; i >= 0; i--){
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
    }
    return z;
}
function encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
    if (!(MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
    let version;
    let dataUsedBits;
    for(version = minVersion;; version++){
        const dataCapacityBits2 = getNumDataCodewords(version, ecl) * 8;
        const usedBits = getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
            dataUsedBits = usedBits;
            break;
        }
        if (version >= maxVersion) throw new RangeError("Data too long");
    }
    for (const newEcl of [
        MEDIUM,
        QUARTILE,
        HIGH
    ]){
        if (boostEcl && dataUsedBits <= getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
    }
    const bb = [];
    for (const seg of segs){
        appendBits(seg.mode[0], 4, bb);
        appendBits(seg.numChars, numCharCountBits(seg.mode, version), bb);
        for (const b of seg.getData())bb.push(b);
    }
    const dataCapacityBits = getNumDataCodewords(version, ecl) * 8;
    appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
    appendBits(0, (8 - bb.length % 8) % 8, bb);
    for(let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)appendBits(padByte, 8, bb);
    const dataCodewords = Array.from({
        length: Math.ceil(bb.length / 8)
    }, ()=>0);
    bb.forEach((b, i)=>dataCodewords[i >>> 3] |= b << 7 - (i & 7));
    return new QrCode(version, ecl, dataCodewords, mask);
}
function encode(data, options) {
    const { ecc = "L", boostEcc = false, minVersion = 1, maxVersion = 40, maskPattern = -1, border = 1 } = options || {};
    const segment = typeof data === "string" ? makeSegments(data) : Array.isArray(data) ? [
        makeBytes(data)
    ] : void 0;
    if (!segment) throw new Error(`uqr only supports encoding string and binary data, but got: ${typeof data}`);
    const qr = encodeSegments(segment, EccMap[ecc], minVersion, maxVersion, maskPattern, boostEcc);
    const result = addBorder({
        version: qr.version,
        maskPattern: qr.mask,
        size: qr.size,
        data: qr.modules,
        types: qr.types
    }, border);
    if (options?.invert) result.data = result.data.map((row)=>row.map((mod)=>!mod));
    options?.onEncoded?.(result);
    return result;
}
function addBorder(input, border = 1) {
    if (!border) return input;
    const { size } = input;
    const newSize = size + border * 2;
    input.size = newSize;
    input.data.forEach((row)=>{
        for(let i = 0; i < border; i++){
            row.unshift(false);
            row.push(false);
        }
    });
    for(let i = 0; i < border; i++){
        input.data.unshift(Array.from({
            length: newSize
        }, (_)=>false));
        input.data.push(Array.from({
            length: newSize
        }, (_)=>false));
    }
    const b = QrCodeDataType.Border;
    input.types.forEach((row)=>{
        for(let i = 0; i < border; i++){
            row.unshift(b);
            row.push(b);
        }
    });
    for(let i = 0; i < border; i++){
        input.types.unshift(Array.from({
            length: newSize
        }, (_)=>b));
        input.types.push(Array.from({
            length: newSize
        }, (_)=>b));
    }
    return input;
}
function getDataAt(data, x, y, defaults = false) {
    if (x < 0 || y < 0 || x >= data.length || y >= data.length) return defaults;
    return data[y][x];
}
function renderUnicode(data, options = {}) {
    const { whiteChar = "\u2588", blackChar = "\u2591" } = options;
    const result = encode(data, options);
    return result.data.map((row)=>{
        return row.map((mod)=>mod ? blackChar : whiteChar).join("");
    }).join("\n");
}
function renderANSI(data, options = {}) {
    return renderUnicode(data, {
        ...options,
        blackChar: "\x1B[40m\u3000\x1B[0m",
        whiteChar: "\x1B[47m\u3000\x1B[0m"
    });
}
function renderUnicodeCompact(data, options = {}) {
    const platte = {
        WHITE_ALL: "\u2588",
        WHITE_BLACK: "\u2580",
        BLACK_WHITE: "\u2584",
        BLACK_ALL: " "
    };
    const result = encode(data, options);
    const WHITE = false;
    const BLACK = true;
    const at = (x, y)=>getDataAt(result.data, x, y, true);
    const lines = [];
    let line = "";
    for(let row = 0; row < result.size; row += 2){
        for(let col = 0; col < result.size; col++){
            if (at(col, row) === WHITE && at(col, row + 1) === WHITE) line += platte.WHITE_ALL;
            else if (at(col, row) === WHITE && at(col, row + 1) === BLACK) line += platte.WHITE_BLACK;
            else if (at(col, row) === BLACK && at(col, row + 1) === WHITE) line += platte.BLACK_WHITE;
            else line += platte.BLACK_ALL;
        }
        lines.push(line);
        line = "";
    }
    return lines.join("\n");
}
function renderSVG(data, options = {}) {
    const result = encode(data, options);
    const { pixelSize = 10, whiteColor = "white", blackColor = "black" } = options;
    const height = result.size * pixelSize;
    const width = result.size * pixelSize;
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;
    const pathes = [];
    for(let row = 0; row < result.size; row++){
        for(let col = 0; col < result.size; col++){
            const x = col * pixelSize;
            const y = row * pixelSize;
            if (result.data[row][col]) pathes.push(`M${x},${y}h${pixelSize}v${pixelSize}h-${pixelSize}z`);
        }
    }
    svg += `<rect fill="${whiteColor}" width="${width}" height="${height}"/>`;
    svg += `<path fill="${blackColor}" d="${pathes.join("")}"/>`;
    svg += "</svg>";
    return svg;
}
;
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>useAdapterProcessUrlSearchParams,
    "c",
    ()=>debug,
    "i",
    ()=>useAdapterDefaultOptions,
    "l",
    ()=>warn,
    "n",
    ()=>createAdapterProvider,
    "o",
    ()=>renderQueryString,
    "r",
    ()=>useAdapter,
    "s",
    ()=>error,
    "t",
    ()=>context
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
//#region src/lib/debug.ts
const debugEnabled = isDebugEnabled();
function debug(message, ...args) {
    if (!debugEnabled) return;
    const msg = sprintf(message, ...args);
    performance.mark(msg);
    try {
        console.log(message, ...args);
    } catch  {
        console.log(msg);
    }
}
function warn(message, ...args) {
    if (!debugEnabled) return;
    console.warn(message, ...args);
}
function sprintf(base, ...args) {
    return base.replace(/%[sfdO]/g, (match)=>{
        const arg = args.shift();
        return match === "%O" && arg ? JSON.stringify(arg).replace(/"([^"]+)":/g, "$1:") : String(arg);
    });
}
function isDebugEnabled() {
    try {
        const test = "nuqs-localStorage-test";
        if (typeof localStorage === "undefined") return false;
        localStorage.setItem(test, test);
        const isStorageAvailable = localStorage.getItem(test) === test;
        localStorage.removeItem(test);
        return isStorageAvailable && (localStorage.getItem("debug") || "").includes("nuqs");
    } catch  {
        return false;
    }
}
//#endregion
//#region src/lib/errors.ts
const errors = {
    303: "Multiple adapter contexts detected. This might happen in monorepos.",
    404: "nuqs requires an adapter to work with your framework.",
    409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.",
    414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
    422: "Invalid options combination: `limitUrlUpdates: debounce` should be used in SSR scenarios, with `shallow: false`",
    429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
    500: "Empty search params cache. Search params can't be accessed in Layouts.",
    501: "Search params cache already populated. Have you called `parse` twice?"
};
function error(code) {
    return `[nuqs] ${errors[code]}
  See https://nuqs.dev/NUQS-${code}`;
}
//#endregion
//#region src/lib/url-encoding.ts
function renderQueryString(search) {
    if (search.size === 0) return "";
    const query = [];
    for (const [key, value] of search.entries()){
        const safeKey = key.replace(/#/g, "%23").replace(/&/g, "%26").replace(/\+/g, "%2B").replace(/=/g, "%3D").replace(/\?/g, "%3F");
        query.push(`${safeKey}=${encodeQueryValue(value)}`);
    }
    const queryString = "?" + query.join("&");
    warnIfURLIsTooLong(queryString);
    return queryString;
}
function encodeQueryValue(input) {
    return input.replace(/%/g, "%25").replace(/\+/g, "%2B").replace(/ /g, "+").replace(/#/g, "%23").replace(/&/g, "%26").replace(/"/g, "%22").replace(/'/g, "%27").replace(/`/g, "%60").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/[\x00-\x1F]/g, (char)=>encodeURIComponent(char));
}
const URL_MAX_LENGTH = 2e3;
function warnIfURLIsTooLong(queryString) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof location === "undefined") return;
    const url = new URL(location.href);
    url.search = queryString;
    if (url.href.length > URL_MAX_LENGTH) console.warn(error(414));
}
//#endregion
//#region src/adapters/lib/context.ts
const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    useAdapter () {
        throw new Error(error(404));
    }
});
context.displayName = "NuqsAdapterContext";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
/**
* Create a custom adapter (context provider) for nuqs to work with your framework / router.
*
* Adapters are based on React Context,
*
* @param useAdapter
* @returns
*/ function createAdapterProvider(useAdapter$1) {
    return ({ children, defaultOptions, processUrlSearchParams, ...props })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(context.Provider, {
            ...props,
            value: {
                useAdapter: useAdapter$1,
                defaultOptions,
                processUrlSearchParams
            }
        }, children);
}
function useAdapter(watchKeys) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(context);
    if (!("useAdapter" in value)) throw new Error(error(404));
    return value.useAdapter(watchKeys);
}
const useAdapterDefaultOptions = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(context).defaultOptions;
const useAdapterProcessUrlSearchParams = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(context).processUrlSearchParams;
;
 //# sourceMappingURL=context-DRdo5A2P.js.map
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/debounce-C70-rAd_.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>write,
    "c",
    ()=>throttle,
    "i",
    ()=>isAbsentFromUrl,
    "n",
    ()=>globalThrottleQueue,
    "o",
    ()=>debounce,
    "r",
    ()=>createEmitter,
    "s",
    ()=>defaultRateLimit,
    "t",
    ()=>debounceController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
//#region src/lib/queues/rate-limiting.ts
function getDefaultThrottle() {
    if ("TURBOPACK compile-time truthy", 1) return 50;
    //TURBOPACK unreachable
    ;
}
function throttle(timeMs) {
    return {
        method: "throttle",
        timeMs
    };
}
function debounce(timeMs) {
    return {
        method: "debounce",
        timeMs
    };
}
const defaultRateLimit = throttle(getDefaultThrottle());
//#endregion
//#region src/lib/search-params.ts
function isAbsentFromUrl(query) {
    return query === null || Array.isArray(query) && query.length === 0;
}
function write(serialized, key, searchParams) {
    if (typeof serialized === "string") searchParams.set(key, serialized);
    else {
        searchParams.delete(key);
        for (const v of serialized)searchParams.append(key, v);
        if (!searchParams.has(key)) searchParams.set(key, "");
    }
    return searchParams;
}
//#endregion
//#region src/lib/emitter.ts
function createEmitter() {
    const all = /* @__PURE__ */ new Map();
    return {
        on (type, handler) {
            const handlers = all.get(type) || [];
            handlers.push(handler);
            all.set(type, handlers);
            return ()=>this.off(type, handler);
        },
        off (type, handler) {
            const handlers = all.get(type);
            if (handlers) all.set(type, handlers.filter((h)=>h !== handler));
        },
        emit (type, event) {
            all.get(type)?.forEach((handler)=>handler(event));
        }
    };
}
//#endregion
//#region src/lib/timeout.ts
function timeout(callback, ms, signal) {
    function onTick() {
        callback();
        signal.removeEventListener("abort", onAbort);
    }
    const id = setTimeout(onTick, ms);
    function onAbort() {
        clearTimeout(id);
        signal.removeEventListener("abort", onAbort);
    }
    signal.addEventListener("abort", onAbort);
}
//#endregion
//#region src/lib/with-resolvers.ts
function withResolvers() {
    const P = Promise;
    if (Promise.hasOwnProperty("withResolvers")) return Promise.withResolvers();
    let resolve = ()=>{};
    let reject = ()=>{};
    return {
        promise: new P((res, rej)=>{
            resolve = res;
            reject = rej;
        }),
        resolve,
        reject
    };
}
//#endregion
//#region src/lib/compose.ts
function compose(fns, final) {
    let next = final;
    for(let i = fns.length - 1; i >= 0; i--){
        const fn = fns[i];
        if (!fn) continue;
        const prev = next;
        next = ()=>fn(prev);
    }
    next();
}
//#endregion
//#region src/lib/queues/throttle.ts
function getSearchParamsSnapshotFromLocation() {
    return new URLSearchParams(location.search);
}
var ThrottledQueue = class {
    updateMap = /* @__PURE__ */ new Map();
    options = {
        history: "replace",
        scroll: false,
        shallow: true
    };
    timeMs = defaultRateLimit.timeMs;
    transitions = /* @__PURE__ */ new Set();
    resolvers = null;
    controller = null;
    lastFlushedAt = 0;
    resetQueueOnNextPush = false;
    push({ key, query, options }, timeMs = defaultRateLimit.timeMs) {
        if (this.resetQueueOnNextPush) {
            this.reset();
            this.resetQueueOnNextPush = false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs gtq] Enqueueing %s=%s %O", key, query, options);
        this.updateMap.set(key, query);
        if (options.history === "push") this.options.history = "push";
        if (options.scroll) this.options.scroll = true;
        if (options.shallow === false) this.options.shallow = false;
        if (options.startTransition) this.transitions.add(options.startTransition);
        if (!Number.isFinite(this.timeMs) || timeMs > this.timeMs) this.timeMs = timeMs;
    }
    getQueuedQuery(key) {
        return this.updateMap.get(key);
    }
    getPendingPromise({ getSearchParamsSnapshot = getSearchParamsSnapshotFromLocation }) {
        return this.resolvers?.promise ?? Promise.resolve(getSearchParamsSnapshot());
    }
    flush({ getSearchParamsSnapshot = getSearchParamsSnapshotFromLocation, rateLimitFactor = 1, ...adapter }, processUrlSearchParams) {
        this.controller ??= new AbortController();
        if (!Number.isFinite(this.timeMs)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs gtq] Skipping flush due to throttleMs=Infinity");
            return Promise.resolve(getSearchParamsSnapshot());
        }
        if (this.resolvers) return this.resolvers.promise;
        this.resolvers = withResolvers();
        const flushNow = ()=>{
            this.lastFlushedAt = performance.now();
            const [search, error$1] = this.applyPendingUpdates({
                ...adapter,
                autoResetQueueOnUpdate: adapter.autoResetQueueOnUpdate ?? true,
                getSearchParamsSnapshot
            }, processUrlSearchParams);
            if (error$1 === null) {
                this.resolvers.resolve(search);
                this.resetQueueOnNextPush = true;
            } else this.resolvers.reject(search);
            this.resolvers = null;
        };
        const runOnNextTick = ()=>{
            const timeSinceLastFlush = performance.now() - this.lastFlushedAt;
            const timeMs = this.timeMs;
            const flushInMs = rateLimitFactor * Math.max(0, timeMs - timeSinceLastFlush);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(`[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)`, flushInMs, timeMs, rateLimitFactor);
            if (flushInMs === 0) flushNow();
            else timeout(flushNow, flushInMs, this.controller.signal);
        };
        timeout(runOnNextTick, 0, this.controller.signal);
        return this.resolvers.promise;
    }
    abort() {
        this.controller?.abort();
        this.controller = new AbortController();
        this.resolvers?.resolve(new URLSearchParams());
        this.resolvers = null;
        return this.reset();
    }
    reset() {
        const queuedKeys = Array.from(this.updateMap.keys());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs gtq] Resetting queue %s", JSON.stringify(Object.fromEntries(this.updateMap)));
        this.updateMap.clear();
        this.transitions.clear();
        this.options = {
            history: "replace",
            scroll: false,
            shallow: true
        };
        this.timeMs = defaultRateLimit.timeMs;
        return queuedKeys;
    }
    applyPendingUpdates(adapter, processUrlSearchParams) {
        const { updateUrl, getSearchParamsSnapshot } = adapter;
        let search = getSearchParamsSnapshot();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(`[nuqs gtq] Applying %d pending update(s) on top of %s`, this.updateMap.size, search.toString());
        if (this.updateMap.size === 0) return [
            search,
            null
        ];
        const items = Array.from(this.updateMap.entries());
        const options = {
            ...this.options
        };
        const transitions = Array.from(this.transitions);
        if (adapter.autoResetQueueOnUpdate) this.reset();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs gtq] Flushing queue %O with options %O", items, options);
        for (const [key, value] of items)if (value === null) search.delete(key);
        else search = write(value, key, search);
        if (processUrlSearchParams) search = processUrlSearchParams(search);
        try {
            compose(transitions, ()=>{
                updateUrl(search, options);
            });
            return [
                search,
                null
            ];
        } catch (err) {
            console.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(429), items.map(([key])=>key).join(), err);
            return [
                search,
                err
            ];
        }
    }
};
const globalThrottleQueue = new ThrottledQueue();
//#endregion
//#region src/lib/queues/useSyncExternalStores.ts
/**
* Like `useSyncExternalStore`, but for subscribing to multiple keys.
*
* Each key becomes the key of the returned object,
* and the value is the result of calling `getKeySnapshot` with that key.
*
* @param keys - A list of keys to subscribe to.
* @param subscribeKey - A function that takes a key and a callback,
* subscribes to an external store using that key (calling the callback when
* state changes occur), and returns a function to unsubscribe from that key.
* @param getKeySnapshot - A function that takes a key and returns the snapshot for that key.
* It will be called on the server and on the client, so it needs to handle both
* environments.
*/ function useSyncExternalStores(keys, subscribeKey, getKeySnapshot) {
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const record = Object.fromEntries(keys.map((key)=>[
                key,
                getKeySnapshot(key)
            ]));
        return [
            JSON.stringify(record),
            record
        ];
    }, [
        keys.join(","),
        getKeySnapshot
    ]);
    const cacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (cacheRef.current === null) cacheRef.current = snapshot();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        const off = keys.map((key)=>subscribeKey(key, callback));
        return ()=>off.forEach((unsubscribe)=>unsubscribe());
    }, [
        keys.join(","),
        subscribeKey
    ]), ()=>{
        const [cacheKey, record] = snapshot();
        if (cacheRef.current[0] === cacheKey) return cacheRef.current[1];
        cacheRef.current = [
            cacheKey,
            record
        ];
        return record;
    }, ()=>cacheRef.current[1]);
}
//#endregion
//#region src/lib/queues/debounce.ts
var DebouncedPromiseQueue = class {
    callback;
    resolvers = withResolvers();
    controller = new AbortController();
    queuedValue = void 0;
    constructor(callback){
        this.callback = callback;
    }
    abort() {
        this.controller.abort();
        this.queuedValue = void 0;
    }
    push(value, timeMs) {
        this.queuedValue = value;
        this.controller.abort();
        this.controller = new AbortController();
        timeout(()=>{
            const outputResolvers = this.resolvers;
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dq] Flushing debounce queue", value);
                const callbackPromise = this.callback(value);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dq] Reset debounce queue %O", this.queuedValue);
                this.queuedValue = void 0;
                this.resolvers = withResolvers();
                callbackPromise.then((output)=>outputResolvers.resolve(output)).catch((error$1)=>outputResolvers.reject(error$1));
            } catch (error$1) {
                this.queuedValue = void 0;
                outputResolvers.reject(error$1);
            }
        }, timeMs, this.controller.signal);
        return this.resolvers.promise;
    }
};
var DebounceController = class {
    throttleQueue;
    queues = /* @__PURE__ */ new Map();
    queuedQuerySync = createEmitter();
    constructor(throttleQueue = new ThrottledQueue()){
        this.throttleQueue = throttleQueue;
    }
    useQueuedQueries(keys) {
        return useSyncExternalStores(keys, (key, callback)=>this.queuedQuerySync.on(key, callback), (key)=>this.getQueuedQuery(key));
    }
    push(update, timeMs, adapter) {
        if (!Number.isFinite(timeMs)) {
            const getSnapshot = adapter.getSearchParamsSnapshot ?? getSearchParamsSnapshotFromLocation;
            return Promise.resolve(getSnapshot());
        }
        const key = update.key;
        if (!this.queues.has(key)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dqc] Creating debounce queue for `%s`", key);
            const queue = new DebouncedPromiseQueue((update$1)=>{
                this.throttleQueue.push(update$1);
                return this.throttleQueue.flush(adapter).finally(()=>{
                    if (this.queues.get(update$1.key)?.queuedValue === void 0) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dqc] Cleaning up empty queue for `%s`", update$1.key);
                        this.queues.delete(update$1.key);
                    }
                    this.queuedQuerySync.emit(update$1.key);
                });
            });
            this.queues.set(key, queue);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dqc] Enqueueing debounce update %O", update);
        const promise = this.queues.get(key).push(update, timeMs);
        this.queuedQuerySync.emit(key);
        return promise;
    }
    abort(key) {
        const queue = this.queues.get(key);
        if (!queue) return (passThrough)=>passThrough;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dqc] Aborting debounce queue %s=%s", key, queue.queuedValue?.query);
        this.queues.delete(key);
        queue.abort();
        this.queuedQuerySync.emit(key);
        return (promise)=>{
            promise.then(queue.resolvers.resolve, queue.resolvers.reject);
            return promise;
        };
    }
    abortAll() {
        for (const [key, queue] of this.queues.entries()){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs dqc] Aborting debounce queue %s=%s", key, queue.queuedValue?.query);
            queue.abort();
            queue.resolvers.resolve(new URLSearchParams());
            this.queuedQuerySync.emit(key);
        }
        this.queues.clear();
    }
    getQueuedQuery(key) {
        const debouncedQueued = this.queues.get(key)?.queuedValue?.query;
        if (debouncedQueued !== void 0) return debouncedQueued;
        return this.throttleQueue.getQueuedQuery(key);
    }
};
const debounceController = new DebounceController(globalThrottleQueue);
;
 //# sourceMappingURL=debounce-C70-rAd_.js.map
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/compare-Br3z3FUS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/lib/compare.ts
__turbopack_context__.s([
    "t",
    ()=>compareQuery
]);
function compareQuery(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (typeof a === "string" || typeof b === "string") return false;
    if (a.length !== b.length) return false;
    return a.every((value, index)=>value === b[index]);
}
;
 //# sourceMappingURL=compare-Br3z3FUS.js.map
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/key-isolation-MD7HBc2w.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>filterSearchParams,
    "t",
    ()=>applyChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$compare$2d$Br3z3FUS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/compare-Br3z3FUS.js [app-ssr] (ecmascript)");
;
;
//#region src/adapters/lib/key-isolation.ts
function applyChange(newValue, keys, copy) {
    return (oldValue)=>{
        if (!(keys.length === 0 ? true : keys.some((key)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$compare$2d$Br3z3FUS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(oldValue.getAll(key), newValue.getAll(key))))) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs `%s`] no change, returning previous", keys.join(","), oldValue);
            return oldValue;
        }
        const filtered = filterSearchParams(newValue, keys, copy);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(`[nuqs \`%s\`] subbed search params change
  from %O
  to   %O`, keys.join(","), oldValue, filtered);
        return filtered;
    };
}
function filterSearchParams(search, keys, copy) {
    if (keys.length === 0) return search;
    const filtered = copy ? new URLSearchParams(search) : search;
    for (const key of search.keys())if (!keys.includes(key)) filtered.delete(key);
    return filtered;
}
;
 //# sourceMappingURL=key-isolation-MD7HBc2w.js.map
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/reset-CKsIu3sM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>setQueueResetMutex,
    "r",
    ()=>spinQueueResetMutex,
    "t",
    ()=>resetQueues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/debounce-C70-rAd_.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-ssr] (ecmascript)");
;
;
//#region src/lib/queues/reset.ts
let mutex = 0;
function setQueueResetMutex(value = 1) {
    mutex = value;
}
function spinQueueResetMutex() {
    mutex = Math.max(0, mutex - 1);
    if (mutex > 0) return;
    resetQueues();
}
function resetQueues() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs] Aborting queues");
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"].abortAll();
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"].abort().forEach((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"].queuedQuerySync.emit(key));
}
;
 //# sourceMappingURL=reset-CKsIu3sM.js.map
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/patch-history-C8rMQUGm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>shouldPatchHistory,
    "n",
    ()=>markHistoryAsPatched,
    "r",
    ()=>patchHistory,
    "t",
    ()=>historyUpdateMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CKsIu3sM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/reset-CKsIu3sM.js [app-ssr] (ecmascript)");
;
;
//#region src/adapters/lib/patch-history.ts
const historyUpdateMarker = "__nuqs__";
function getSearchParams(url) {
    if (url instanceof URL) return url.searchParams;
    if (url.startsWith("?")) return new URLSearchParams(url);
    try {
        return new URL(url, location.origin).searchParams;
    } catch  {
        return new URLSearchParams(url);
    }
}
function shouldPatchHistory(adapter) {
    if (typeof history === "undefined") return false;
    if (history.nuqs?.version && history.nuqs.version !== "0.0.0-inject-version-here") {
        console.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(409), history.nuqs.version, `0.0.0-inject-version-here`, adapter);
        return false;
    }
    if (history.nuqs?.adapters?.includes(adapter)) return false;
    return true;
}
function markHistoryAsPatched(adapter) {
    history.nuqs = history.nuqs ?? {
        version: "0.0.0-inject-version-here",
        adapters: []
    };
    history.nuqs.adapters.push(adapter);
}
function patchHistory(emitter, adapter) {
    if (!shouldPatchHistory(adapter)) return;
    let lastSearchSeen = typeof location === "object" ? location.search : "";
    emitter.on("update", (search)=>{
        const searchString = search.toString();
        lastSearchSeen = searchString.length ? "?" + searchString : "";
    });
    window.addEventListener("popstate", ()=>{
        lastSearchSeen = location.search;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CKsIu3sM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs %s] Patching history (%s adapter)", "0.0.0-inject-version-here", adapter);
    function sync(url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CKsIu3sM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])();
        try {
            if (new URL(url, location.origin).search === lastSearchSeen) return;
        } catch  {}
        try {
            emitter.emit("update", getSearchParams(url));
        } catch (e) {
            console.error(e);
        }
    }
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    history.pushState = function nuqs_pushState(state, marker, url) {
        originalPushState.call(history, state, "", url);
        if (url && marker !== historyUpdateMarker) sync(url);
    };
    history.replaceState = function nuqs_replaceState(state, marker, url) {
        originalReplaceState.call(history, state, "", url);
        if (url && marker !== historyUpdateMarker) sync(url);
    };
    markHistoryAsPatched(adapter);
}
;
 //# sourceMappingURL=patch-history-C8rMQUGm.js.map
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/adapters/react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NuqsAdapter",
    ()=>NuqsAdapter,
    "enableHistorySync",
    ()=>enableHistorySync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/debounce-C70-rAd_.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$key$2d$isolation$2d$MD7HBc2w$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/key-isolation-MD7HBc2w.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$patch$2d$history$2d$C8rMQUGm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/patch-history-C8rMQUGm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
//#region src/adapters/react.ts
const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])();
function generateUpdateUrlFn(fullPageNavigationOnShallowFalseUpdates) {
    return function updateUrl(search, options) {
        const url = new URL(location.href);
        url.search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(search);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("[nuqs react] Updating url: %s", url);
        if (fullPageNavigationOnShallowFalseUpdates && options.shallow === false) (options.history === "push" ? location.assign : location.replace).call(location, url);
        else (options.history === "push" ? history.pushState : history.replaceState).call(history, history.state, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$patch$2d$history$2d$C8rMQUGm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], url);
        emitter.emit("update", search);
        if (options.scroll === true) window.scrollTo({
            top: 0
        });
    };
}
const NuqsReactAdapterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    fullPageNavigationOnShallowFalseUpdates: false
});
function useNuqsReactAdapter(watchKeys) {
    const { fullPageNavigationOnShallowFalseUpdates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(NuqsReactAdapterContext);
    const [searchParams, setSearchParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof location === "undefined") return new URLSearchParams();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$key$2d$isolation$2d$MD7HBc2w$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(new URLSearchParams(location.search), watchKeys, false);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onPopState = ()=>{
            setSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$key$2d$isolation$2d$MD7HBc2w$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(new URLSearchParams(location.search), watchKeys, false));
        };
        const onEmitterUpdate = (search)=>{
            setSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$key$2d$isolation$2d$MD7HBc2w$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(search, watchKeys, true));
        };
        emitter.on("update", onEmitterUpdate);
        window.addEventListener("popstate", onPopState);
        return ()=>{
            emitter.off("update", onEmitterUpdate);
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        watchKeys.join("&")
    ]);
    return {
        searchParams,
        updateUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>generateUpdateUrlFn(fullPageNavigationOnShallowFalseUpdates), [
            fullPageNavigationOnShallowFalseUpdates
        ])
    };
}
const NuqsReactAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(useNuqsReactAdapter);
function NuqsAdapter({ children, fullPageNavigationOnShallowFalseUpdates = false, ...adapterProps }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(NuqsReactAdapterContext.Provider, {
        value: {
            fullPageNavigationOnShallowFalseUpdates
        }
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(NuqsReactAdapter, {
        ...adapterProps,
        children
    }));
}
/**
* Opt-in to syncing shallow updates of the URL with the useOptimisticSearchParams hook.
*
* By default, the useOptimisticSearchParams hook will only react to internal nuqs updates.
* If third party code updates the History API directly, use this function to
* enable useOptimisticSearchParams to react to those changes.
*/ function enableHistorySync() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$patch$2d$history$2d$C8rMQUGm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(emitter, "react");
}
;
 //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
function declension(scheme, count) {
    // scheme for count=1 exists
    if (scheme.one !== undefined && count === 1) {
        return scheme.one;
    }
    const rem10 = count % 10;
    const rem100 = count % 100;
    // 1, 21, 31, ...
    if (rem10 === 1 && rem100 !== 11) {
        return scheme.singularNominative.replace("{{count}}", String(count));
    // 2, 3, 4, 22, 23, 24, 32 ...
    } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
        return scheme.singularGenitive.replace("{{count}}", String(count));
    // 5, 6, 7, 8, 9, 10, 11, ...
    } else {
        return scheme.pluralGenitive.replace("{{count}}", String(count));
    }
}
function buildLocalizeTokenFn(scheme) {
    return (count, options)=>{
        if (options?.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                if (scheme.future) {
                    return declension(scheme.future, count);
                } else {
                    return "через " + declension(scheme.regular, count);
                }
            } else {
                if (scheme.past) {
                    return declension(scheme.past, count);
                } else {
                    return declension(scheme.regular, count) + " назад";
                }
            }
        } else {
            return declension(scheme.regular, count);
        }
    };
}
const formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        regular: {
            one: "меньше секунды",
            singularNominative: "меньше {{count}} секунды",
            singularGenitive: "меньше {{count}} секунд",
            pluralGenitive: "меньше {{count}} секунд"
        },
        future: {
            one: "меньше, чем через секунду",
            singularNominative: "меньше, чем через {{count}} секунду",
            singularGenitive: "меньше, чем через {{count}} секунды",
            pluralGenitive: "меньше, чем через {{count}} секунд"
        }
    }),
    xSeconds: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} секунда",
            singularGenitive: "{{count}} секунды",
            pluralGenitive: "{{count}} секунд"
        },
        past: {
            singularNominative: "{{count}} секунду назад",
            singularGenitive: "{{count}} секунды назад",
            pluralGenitive: "{{count}} секунд назад"
        },
        future: {
            singularNominative: "через {{count}} секунду",
            singularGenitive: "через {{count}} секунды",
            pluralGenitive: "через {{count}} секунд"
        }
    }),
    halfAMinute: (_count, options)=>{
        if (options?.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                return "через полминуты";
            } else {
                return "полминуты назад";
            }
        }
        return "полминуты";
    },
    lessThanXMinutes: buildLocalizeTokenFn({
        regular: {
            one: "меньше минуты",
            singularNominative: "меньше {{count}} минуты",
            singularGenitive: "меньше {{count}} минут",
            pluralGenitive: "меньше {{count}} минут"
        },
        future: {
            one: "меньше, чем через минуту",
            singularNominative: "меньше, чем через {{count}} минуту",
            singularGenitive: "меньше, чем через {{count}} минуты",
            pluralGenitive: "меньше, чем через {{count}} минут"
        }
    }),
    xMinutes: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} минута",
            singularGenitive: "{{count}} минуты",
            pluralGenitive: "{{count}} минут"
        },
        past: {
            singularNominative: "{{count}} минуту назад",
            singularGenitive: "{{count}} минуты назад",
            pluralGenitive: "{{count}} минут назад"
        },
        future: {
            singularNominative: "через {{count}} минуту",
            singularGenitive: "через {{count}} минуты",
            pluralGenitive: "через {{count}} минут"
        }
    }),
    aboutXHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "около {{count}} часа",
            singularGenitive: "около {{count}} часов",
            pluralGenitive: "около {{count}} часов"
        },
        future: {
            singularNominative: "приблизительно через {{count}} час",
            singularGenitive: "приблизительно через {{count}} часа",
            pluralGenitive: "приблизительно через {{count}} часов"
        }
    }),
    xHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} час",
            singularGenitive: "{{count}} часа",
            pluralGenitive: "{{count}} часов"
        }
    }),
    xDays: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} день",
            singularGenitive: "{{count}} дня",
            pluralGenitive: "{{count}} дней"
        }
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "около {{count}} недели",
            singularGenitive: "около {{count}} недель",
            pluralGenitive: "около {{count}} недель"
        },
        future: {
            singularNominative: "приблизительно через {{count}} неделю",
            singularGenitive: "приблизительно через {{count}} недели",
            pluralGenitive: "приблизительно через {{count}} недель"
        }
    }),
    xWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} неделя",
            singularGenitive: "{{count}} недели",
            pluralGenitive: "{{count}} недель"
        }
    }),
    aboutXMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "около {{count}} месяца",
            singularGenitive: "около {{count}} месяцев",
            pluralGenitive: "около {{count}} месяцев"
        },
        future: {
            singularNominative: "приблизительно через {{count}} месяц",
            singularGenitive: "приблизительно через {{count}} месяца",
            pluralGenitive: "приблизительно через {{count}} месяцев"
        }
    }),
    xMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} месяц",
            singularGenitive: "{{count}} месяца",
            pluralGenitive: "{{count}} месяцев"
        }
    }),
    aboutXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "около {{count}} года",
            singularGenitive: "около {{count}} лет",
            pluralGenitive: "около {{count}} лет"
        },
        future: {
            singularNominative: "приблизительно через {{count}} год",
            singularGenitive: "приблизительно через {{count}} года",
            pluralGenitive: "приблизительно через {{count}} лет"
        }
    }),
    xYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} год",
            singularGenitive: "{{count}} года",
            pluralGenitive: "{{count}} лет"
        }
    }),
    overXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "больше {{count}} года",
            singularGenitive: "больше {{count}} лет",
            pluralGenitive: "больше {{count}} лет"
        },
        future: {
            singularNominative: "больше, чем через {{count}} год",
            singularGenitive: "больше, чем через {{count}} года",
            pluralGenitive: "больше, чем через {{count}} лет"
        }
    }),
    almostXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "почти {{count}} год",
            singularGenitive: "почти {{count}} года",
            pluralGenitive: "почти {{count}} лет"
        },
        future: {
            singularNominative: "почти через {{count}} год",
            singularGenitive: "почти через {{count}} года",
            pluralGenitive: "почти через {{count}} лет"
        }
    })
};
const formatDistance = (token, count, options)=>{
    return formatDistanceLocale[token](count, options);
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, d MMMM y 'г.'",
    long: "d MMMM y 'г.'",
    medium: "d MMM y 'г.'",
    short: "dd.MM.y"
};
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
const dateTimeFormats = {
    any: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "any"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/Desktop/allset/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/Desktop/allset/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/Desktop/allset/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/Desktop/allset/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/Desktop/allset/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/Desktop/allset/node_modules/date-fns/isSameWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameWeek",
    ()=>isSameWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
;
function isSameWeek(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(laterDate_, options) === +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(earlierDate_, options);
}
const __TURBOPACK__default__export__ = isSameWeek;
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/isSameWeek.js [app-ssr] (ecmascript)");
;
const accusativeWeekdays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среду",
    "четверг",
    "пятницу",
    "субботу"
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
            return "'в прошлое " + weekday + " в' p";
        case 1:
        case 2:
        case 4:
            return "'в прошлый " + weekday + " в' p";
        case 3:
        case 5:
        case 6:
            return "'в прошлую " + weekday + " в' p";
    }
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    if (day === 2 /* Tue */ ) {
        return "'во " + weekday + " в' p";
    } else {
        return "'в " + weekday + " в' p";
    }
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
            return "'в следующее " + weekday + " в' p";
        case 1:
        case 2:
        case 4:
            return "'в следующий " + weekday + " в' p";
        case 3:
        case 5:
        case 6:
            return "'в следующую " + weekday + " в' p";
    }
}
const formatRelativeLocale = {
    lastWeek: (date, baseDate, options)=>{
        const day = date.getDay();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameWeek"])(date, baseDate, options)) {
            return thisWeek(day);
        } else {
            return lastWeek(day);
        }
    },
    yesterday: "'вчера в' p",
    today: "'сегодня в' p",
    tomorrow: "'завтра в' p",
    nextWeek: (date, baseDate, options)=>{
        const day = date.getDay();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameWeek"])(date, baseDate, options)) {
            return thisWeek(day);
        } else {
            return nextWeek(day);
        }
    },
    other: "P"
};
const formatRelative = (token, date, baseDate, options)=>{
    const format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date, baseDate, options);
    }
    return format;
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/localize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
;
const eraValues = {
    narrow: [
        "до н.э.",
        "н.э."
    ],
    abbreviated: [
        "до н. э.",
        "н. э."
    ],
    wide: [
        "до нашей эры",
        "нашей эры"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "1-й кв.",
        "2-й кв.",
        "3-й кв.",
        "4-й кв."
    ],
    wide: [
        "1-й квартал",
        "2-й квартал",
        "3-й квартал",
        "4-й квартал"
    ]
};
const monthValues = {
    narrow: [
        "Я",
        "Ф",
        "М",
        "А",
        "М",
        "И",
        "И",
        "А",
        "С",
        "О",
        "Н",
        "Д"
    ],
    abbreviated: [
        "янв.",
        "фев.",
        "март",
        "апр.",
        "май",
        "июнь",
        "июль",
        "авг.",
        "сент.",
        "окт.",
        "нояб.",
        "дек."
    ],
    wide: [
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь"
    ]
};
const formattingMonthValues = {
    narrow: [
        "Я",
        "Ф",
        "М",
        "А",
        "М",
        "И",
        "И",
        "А",
        "С",
        "О",
        "Н",
        "Д"
    ],
    abbreviated: [
        "янв.",
        "фев.",
        "мар.",
        "апр.",
        "мая",
        "июн.",
        "июл.",
        "авг.",
        "сент.",
        "окт.",
        "нояб.",
        "дек."
    ],
    wide: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ]
};
const dayValues = {
    narrow: [
        "В",
        "П",
        "В",
        "С",
        "Ч",
        "П",
        "С"
    ],
    short: [
        "вс",
        "пн",
        "вт",
        "ср",
        "чт",
        "пт",
        "сб"
    ],
    abbreviated: [
        "вск",
        "пнд",
        "втр",
        "срд",
        "чтв",
        "птн",
        "суб"
    ],
    wide: [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утро",
        afternoon: "день",
        evening: "веч.",
        night: "ночь"
    },
    abbreviated: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утро",
        afternoon: "день",
        evening: "веч.",
        night: "ночь"
    },
    wide: {
        am: "ДП",
        pm: "ПП",
        midnight: "полночь",
        noon: "полдень",
        morning: "утро",
        afternoon: "день",
        evening: "вечер",
        night: "ночь"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утра",
        afternoon: "дня",
        evening: "веч.",
        night: "ночи"
    },
    abbreviated: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утра",
        afternoon: "дня",
        evening: "веч.",
        night: "ночи"
    },
    wide: {
        am: "ДП",
        pm: "ПП",
        midnight: "полночь",
        noon: "полдень",
        morning: "утра",
        afternoon: "дня",
        evening: "вечера",
        night: "ночи"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const number = Number(dirtyNumber);
    const unit = options?.unit;
    let suffix;
    if (unit === "date") {
        suffix = "-е";
    } else if (unit === "week" || unit === "minute" || unit === "second") {
        suffix = "-я";
    } else {
        suffix = "-й";
    }
    return number + suffix;
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "any",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/match.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^((до )?н\.?\s?э\.?)/i,
    abbreviated: /^((до )?н\.?\s?э\.?)/i,
    wide: /^(до нашей эры|нашей эры|наша эра)/i
};
const parseEraPatterns = {
    any: [
        /^д/i,
        /^н/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
    wide: /^[1234](-?[ыои]?й?)? квартал/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[яфмаисонд]/i,
    abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
    wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
const parseMonthPatterns = {
    narrow: [
        /^я/i,
        /^ф/i,
        /^м/i,
        /^а/i,
        /^м/i,
        /^и/i,
        /^и/i,
        /^а/i,
        /^с/i,
        /^о/i,
        /^н/i,
        /^я/i
    ],
    any: [
        /^я/i,
        /^ф/i,
        /^мар/i,
        /^ап/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^ав/i,
        /^с/i,
        /^о/i,
        /^н/i,
        /^д/i
    ]
};
const matchDayPatterns = {
    narrow: /^[впсч]/i,
    short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
    abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
    wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
const parseDayPatterns = {
    narrow: [
        /^в/i,
        /^п/i,
        /^в/i,
        /^с/i,
        /^ч/i,
        /^п/i,
        /^с/i
    ],
    any: [
        /^в[ос]/i,
        /^п[он]/i,
        /^в/i,
        /^ср/i,
        /^ч/i,
        /^п[ят]/i,
        /^с[уб]/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
    abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
    wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^дп/i,
        pm: /^пп/i,
        midnight: /^полн/i,
        noon: /^полд/i,
        morning: /^у/i,
        afternoon: /^д[ен]/i,
        evening: /^в/i,
        night: /^н/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/ru.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "ru",
    ()=>ru
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/ru/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ru = {
    code: "ru",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ru$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = ru;
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "ավելի քիչ քան 1 վայրկյան",
        other: "ավելի քիչ քան {{count}} վայրկյան"
    },
    xSeconds: {
        one: "1 վայրկյան",
        other: "{{count}} վայրկյան"
    },
    halfAMinute: "կես րոպե",
    lessThanXMinutes: {
        one: "ավելի քիչ քան 1 րոպե",
        other: "ավելի քիչ քան {{count}} րոպե"
    },
    xMinutes: {
        one: "1 րոպե",
        other: "{{count}} րոպե"
    },
    aboutXHours: {
        one: "մոտ 1 ժամ",
        other: "մոտ {{count}} ժամ"
    },
    xHours: {
        one: "1 ժամ",
        other: "{{count}} ժամ"
    },
    xDays: {
        one: "1 օր",
        other: "{{count}} օր"
    },
    aboutXWeeks: {
        one: "մոտ 1 շաբաթ",
        other: "մոտ {{count}} շաբաթ"
    },
    xWeeks: {
        one: "1 շաբաթ",
        other: "{{count}} շաբաթ"
    },
    aboutXMonths: {
        one: "մոտ 1 ամիս",
        other: "մոտ {{count}} ամիս"
    },
    xMonths: {
        one: "1 ամիս",
        other: "{{count}} ամիս"
    },
    aboutXYears: {
        one: "մոտ 1 տարի",
        other: "մոտ {{count}} տարի"
    },
    xYears: {
        one: "1 տարի",
        other: "{{count}} տարի"
    },
    overXYears: {
        one: "ավելի քան 1 տարի",
        other: "ավելի քան {{count}} տարի"
    },
    almostXYears: {
        one: "համարյա 1 տարի",
        other: "համարյա {{count}} տարի"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + " հետո";
        } else {
            return result + " առաջ";
        }
    }
    return result;
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "d MMMM, y, EEEE",
    long: "d MMMM, y",
    medium: "d MMM, y",
    short: "dd.MM.yyyy"
};
const timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'ժ․'{{time}}",
    long: "{{date}} 'ժ․'{{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'նախորդ' eeee p'֊ին'",
    yesterday: "'երեկ' p'֊ին'",
    today: "'այսօր' p'֊ին'",
    tomorrow: "'վաղը' p'֊ին'",
    nextWeek: "'հաջորդ' eeee p'֊ին'",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/localize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
;
const eraValues = {
    narrow: [
        "Ք",
        "Մ"
    ],
    abbreviated: [
        "ՔԱ",
        "ՄԹ"
    ],
    wide: [
        "Քրիստոսից առաջ",
        "Մեր թվարկության"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Ք1",
        "Ք2",
        "Ք3",
        "Ք4"
    ],
    wide: [
        "1֊ին քառորդ",
        "2֊րդ քառորդ",
        "3֊րդ քառորդ",
        "4֊րդ քառորդ"
    ]
};
const monthValues = {
    narrow: [
        "Հ",
        "Փ",
        "Մ",
        "Ա",
        "Մ",
        "Հ",
        "Հ",
        "Օ",
        "Ս",
        "Հ",
        "Ն",
        "Դ"
    ],
    abbreviated: [
        "հուն",
        "փետ",
        "մար",
        "ապր",
        "մայ",
        "հուն",
        "հուլ",
        "օգս",
        "սեպ",
        "հոկ",
        "նոյ",
        "դեկ"
    ],
    wide: [
        "հունվար",
        "փետրվար",
        "մարտ",
        "ապրիլ",
        "մայիս",
        "հունիս",
        "հուլիս",
        "օգոստոս",
        "սեպտեմբեր",
        "հոկտեմբեր",
        "նոյեմբեր",
        "դեկտեմբեր"
    ]
};
const dayValues = {
    narrow: [
        "Կ",
        "Ե",
        "Ե",
        "Չ",
        "Հ",
        "Ո",
        "Շ"
    ],
    short: [
        "կր",
        "եր",
        "եք",
        "չք",
        "հգ",
        "ուր",
        "շբ"
    ],
    abbreviated: [
        "կիր",
        "երկ",
        "երք",
        "չոր",
        "հնգ",
        "ուրբ",
        "շաբ"
    ],
    wide: [
        "կիրակի",
        "երկուշաբթի",
        "երեքշաբթի",
        "չորեքշաբթի",
        "հինգշաբթի",
        "ուրբաթ",
        "շաբաթ"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "կեսգշ",
        noon: "կեսօր",
        morning: "առավոտ",
        afternoon: "ցերեկ",
        evening: "երեկո",
        night: "գիշեր"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "կեսգիշեր",
        noon: "կեսօր",
        morning: "առավոտ",
        afternoon: "ցերեկ",
        evening: "երեկո",
        night: "գիշեր"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "կեսգիշեր",
        noon: "կեսօր",
        morning: "առավոտ",
        afternoon: "ցերեկ",
        evening: "երեկո",
        night: "գիշեր"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "կեսգշ",
        noon: "կեսօր",
        morning: "առավոտը",
        afternoon: "ցերեկը",
        evening: "երեկոյան",
        night: "գիշերը"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "կեսգիշերին",
        noon: "կեսօրին",
        morning: "առավոտը",
        afternoon: "ցերեկը",
        evening: "երեկոյան",
        night: "գիշերը"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "կեսգիշերին",
        noon: "կեսօրին",
        morning: "առավոտը",
        afternoon: "ցերեկը",
        evening: "երեկոյան",
        night: "գիշերը"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 < 10) {
        if (rem100 % 10 === 1) {
            return number + "֊ին";
        }
    }
    return number + "֊րդ";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/match.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)((-|֊)?(ին|րդ))?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(Ք|Մ)/i,
    abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,
    wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i
};
const parseEraPatterns = {
    any: [
        /^ք/i,
        /^մ/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^ք[1234]/i,
    wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[հփմաօսնդ]/i,
    abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,
    wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i
};
const parseMonthPatterns = {
    narrow: [
        /^հ/i,
        /^փ/i,
        /^մ/i,
        /^ա/i,
        /^մ/i,
        /^հ/i,
        /^հ/i,
        /^օ/i,
        /^ս/i,
        /^հ/i,
        /^ն/i,
        /^դ/i
    ],
    any: [
        /^հու/i,
        /^փ/i,
        /^մար/i,
        /^ա/i,
        /^մայ/i,
        /^հուն/i,
        /^հուլ/i,
        /^օ/i,
        /^ս/i,
        /^հոկ/i,
        /^ն/i,
        /^դ/i
    ]
};
const matchDayPatterns = {
    narrow: /^[եչհոշկ]/i,
    short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i,
    abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,
    wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i
};
const parseDayPatterns = {
    narrow: [
        /^կ/i,
        /^ե/i,
        /^ե/i,
        /^չ/i,
        /^հ/i,
        /^(ո|Ո)/,
        /^շ/i
    ],
    short: [
        /^կ/i,
        /^եր/i,
        /^եք/i,
        /^չ/i,
        /^հ/i,
        /^(ո|Ո)/,
        /^շ/i
    ],
    abbreviated: [
        /^կ/i,
        /^երկ/i,
        /^երք/i,
        /^չ/i,
        /^հ/i,
        /^(ո|Ո)/,
        /^շ/i
    ],
    wide: [
        /^կ/i,
        /^երկ/i,
        /^երե/i,
        /^չ/i,
        /^հ/i,
        /^(ո|Ո)/,
        /^շ/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,
    any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /կեսգիշեր/i,
        noon: /կեսօր/i,
        morning: /առավոտ/i,
        afternoon: /ցերեկ/i,
        evening: /երեկո/i,
        night: /գիշեր/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Desktop/allset/node_modules/date-fns/locale/hy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hy",
    ()=>hy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/date-fns/locale/hy/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const hy = {
    code: "hy",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hy$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = hy;
}),
"[project]/Desktop/allset/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! js-cookie v3.0.5 | MIT */ /* eslint-disable no-var */ __turbopack_context__.s([
    "default",
    ()=>api
]);
function assign(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            target[key] = source[key];
        }
    }
    return target;
}
/* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
    read: function(value) {
        if (value[0] === '"') {
            value = value.slice(1, -1);
        }
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
        return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
};
/* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
        if (typeof document === 'undefined') {
            return;
        }
        attributes = assign({}, defaultAttributes, attributes);
        if (typeof attributes.expires === 'number') {
            attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
        }
        if (attributes.expires) {
            attributes.expires = attributes.expires.toUTCString();
        }
        name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var stringifiedAttributes = '';
        for(var attributeName in attributes){
            if (!attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += '; ' + attributeName;
            if (attributes[attributeName] === true) {
                continue;
            }
            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }
        return document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
        if (typeof document === 'undefined' || arguments.length && !name) {
            return;
        }
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var jar = {};
        for(var i = 0; i < cookies.length; i++){
            var parts = cookies[i].split('=');
            var value = parts.slice(1).join('=');
            try {
                var found = decodeURIComponent(parts[0]);
                jar[found] = converter.read(value, found);
                if (name === found) {
                    break;
                }
            } catch (e) {}
        }
        return name ? jar[name] : jar;
    }
    return Object.create({
        set,
        get,
        remove: function(name, attributes) {
            set(name, '', assign({}, attributes, {
                expires: -1
            }));
        },
        withAttributes: function(attributes) {
            return init(this.converter, assign({}, this.attributes, attributes));
        },
        withConverter: function(converter) {
            return init(assign({}, this.converter, converter), this.attributes);
        }
    }, {
        attributes: {
            value: Object.freeze(defaultAttributes)
        },
        converter: {
            value: Object.freeze(converter)
        }
    });
}
var api = init(defaultConverter, {
    path: '/'
});
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Desktop/allset/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
];

//# sourceMappingURL=f06ff_57cd3662._.js.map
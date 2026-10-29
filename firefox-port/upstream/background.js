/*!
 * rovalra v2.6.20
 * License: GPL-3.0
 * Repository: https://github.com/NotValra/RoValra
 * This extension is provided AS-IS without warranty.
 */
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
  var __commonJS = (cb, mod) => function() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  ));

  // node_modules/dexie/dist/dexie.js
  var require_dexie = __commonJS({
    "node_modules/dexie/dist/dexie.js"(exports, module) {
      (function(global2, factory) {
        typeof exports == "object" && typeof module < "u" ? module.exports = factory() : typeof define == "function" && define.amd ? define(factory) : (global2 = typeof globalThis < "u" ? globalThis : global2 || self, global2.Dexie = factory());
      })(exports, (function() {
        "use strict";
        var extendStatics = /* @__PURE__ */ __name(function(d, b) {
          return extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) Object.prototype.hasOwnProperty.call(b2, p) && (d2[p] = b2[p]);
          }, extendStatics(d, b);
        }, "extendStatics");
        function __extends(d, b) {
          if (typeof b != "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          __name(__, "__"), d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        __name(__extends, "__extends");
        var __assign = /* @__PURE__ */ __name(function() {
          return __assign = Object.assign || /* @__PURE__ */ __name(function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
            }
            return t;
          }, "__assign"), __assign.apply(this, arguments);
        }, "__assign");
        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++)
            (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
          return to.concat(ar || Array.prototype.slice.call(from));
        }
        __name(__spreadArray, "__spreadArray"), typeof SuppressedError == "function" && SuppressedError;
        var _global = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, keys = Object.keys, isArray = Array.isArray;
        typeof Promise < "u" && !_global.Promise && (_global.Promise = Promise);
        function extend(obj, extension) {
          return typeof extension != "object" || keys(extension).forEach(function(key) {
            obj[key] = extension[key];
          }), obj;
        }
        __name(extend, "extend");
        var getProto = Object.getPrototypeOf, _hasOwn = {}.hasOwnProperty;
        function hasOwn(obj, prop) {
          return _hasOwn.call(obj, prop);
        }
        __name(hasOwn, "hasOwn");
        function props(proto, extension) {
          typeof extension == "function" && (extension = extension(getProto(proto))), (typeof Reflect > "u" ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
            setProp(proto, key, extension[key]);
          });
        }
        __name(props, "props");
        var defineProperty = Object.defineProperty;
        function setProp(obj, prop, functionOrGetSet, options) {
          defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get == "function" ? {
            get: functionOrGetSet.get,
            set: functionOrGetSet.set,
            configurable: !0
          } : { value: functionOrGetSet, configurable: !0, writable: !0 }, options));
        }
        __name(setProp, "setProp");
        function derive(Child) {
          return {
            from: /* @__PURE__ */ __name(function(Parent) {
              return Child.prototype = Object.create(Parent.prototype), setProp(Child.prototype, "constructor", Child), {
                extend: props.bind(null, Child.prototype)
              };
            }, "from")
          };
        }
        __name(derive, "derive");
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        function getPropertyDescriptor(obj, prop) {
          var pd = getOwnPropertyDescriptor(obj, prop), proto;
          return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
        }
        __name(getPropertyDescriptor, "getPropertyDescriptor");
        var _slice = [].slice;
        function slice(args, start, end) {
          return _slice.call(args, start, end);
        }
        __name(slice, "slice");
        function override(origFunc, overridedFactory) {
          return overridedFactory(origFunc);
        }
        __name(override, "override");
        function assert(b) {
          if (!b)
            throw new Error("Assertion Failed");
        }
        __name(assert, "assert");
        function asap$1(fn) {
          _global.setImmediate ? setImmediate(fn) : setTimeout(fn, 0);
        }
        __name(asap$1, "asap$1");
        function arrayToObject(array, extractor) {
          return array.reduce(function(result, item, i) {
            var nameAndValue = extractor(item, i);
            return nameAndValue && (result[nameAndValue[0]] = nameAndValue[1]), result;
          }, {});
        }
        __name(arrayToObject, "arrayToObject");
        function getByKeyPath(obj, keyPath) {
          if (typeof keyPath == "string" && hasOwn(obj, keyPath))
            return obj[keyPath];
          if (!keyPath)
            return obj;
          if (typeof keyPath != "string") {
            for (var rv = [], i = 0, l = keyPath.length; i < l; ++i) {
              var val = getByKeyPath(obj, keyPath[i]);
              rv.push(val);
            }
            return rv;
          }
          var period = keyPath.indexOf(".");
          if (period !== -1) {
            var innerObj = obj[keyPath.substr(0, period)];
            return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
          }
        }
        __name(getByKeyPath, "getByKeyPath");
        function setByKeyPath(obj, keyPath, value) {
          if (!(!obj || keyPath === void 0) && !("isFrozen" in Object && Object.isFrozen(obj)))
            if (typeof keyPath != "string" && "length" in keyPath) {
              assert(typeof value != "string" && "length" in value);
              for (var i = 0, l = keyPath.length; i < l; ++i)
                setByKeyPath(obj, keyPath[i], value[i]);
            } else {
              var period = keyPath.indexOf(".");
              if (period !== -1) {
                var currentKeyPath = keyPath.substr(0, period), remainingKeyPath = keyPath.substr(period + 1);
                if (remainingKeyPath === "")
                  value === void 0 ? isArray(obj) && !isNaN(parseInt(currentKeyPath)) ? obj.splice(currentKeyPath, 1) : delete obj[currentKeyPath] : obj[currentKeyPath] = value;
                else {
                  var innerObj = obj[currentKeyPath];
                  if (!innerObj || !hasOwn(obj, currentKeyPath)) {
                    if (value === void 0)
                      return;
                    innerObj = obj[currentKeyPath] = {};
                  }
                  setByKeyPath(innerObj, remainingKeyPath, value);
                }
              } else
                value === void 0 ? isArray(obj) && !isNaN(parseInt(keyPath)) ? obj.splice(keyPath, 1) : delete obj[keyPath] : obj[keyPath] = value;
            }
        }
        __name(setByKeyPath, "setByKeyPath");
        function delByKeyPath(obj, keyPath) {
          typeof keyPath == "string" ? setByKeyPath(obj, keyPath, void 0) : "length" in keyPath && [].map.call(keyPath, function(kp) {
            setByKeyPath(obj, kp, void 0);
          });
        }
        __name(delByKeyPath, "delByKeyPath");
        function shallowClone(obj) {
          var rv = {};
          for (var m in obj)
            hasOwn(obj, m) && (rv[m] = obj[m]);
          return rv;
        }
        __name(shallowClone, "shallowClone");
        var concat = [].concat;
        function flatten(a) {
          return concat.apply([], a);
        }
        __name(flatten, "flatten");
        var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
          return ["Int", "Uint", "Float"].map(function(t) {
            return t + num + "Array";
          });
        }))).filter(function(t) {
          return _global[t];
        }), intrinsicTypes = new Set(intrinsicTypeNames.map(function(t) {
          return _global[t];
        }));
        function cloneSimpleObjectTree(o) {
          var rv = {};
          for (var k in o)
            if (hasOwn(o, k)) {
              var v = o[k];
              rv[k] = !v || typeof v != "object" || intrinsicTypes.has(v.constructor) ? v : cloneSimpleObjectTree(v);
            }
          return rv;
        }
        __name(cloneSimpleObjectTree, "cloneSimpleObjectTree");
        var circularRefs = null;
        function deepClone(any) {
          circularRefs = /* @__PURE__ */ new WeakMap();
          var rv = innerDeepClone(any);
          return circularRefs = null, rv;
        }
        __name(deepClone, "deepClone");
        function innerDeepClone(x) {
          if (!x || typeof x != "object")
            return x;
          var rv = circularRefs.get(x);
          if (rv)
            return rv;
          if (isArray(x)) {
            rv = [], circularRefs.set(x, rv);
            for (var i = 0, l = x.length; i < l; ++i)
              rv.push(innerDeepClone(x[i]));
          } else if (intrinsicTypes.has(x.constructor))
            rv = x;
          else {
            var proto = getProto(x);
            rv = proto === Object.prototype ? {} : Object.create(proto), circularRefs.set(x, rv);
            for (var prop in x)
              hasOwn(x, prop) && (rv[prop] = innerDeepClone(x[prop]));
          }
          return rv;
        }
        __name(innerDeepClone, "innerDeepClone");
        var toString = {}.toString;
        function toStringTag(o) {
          return toString.call(o).slice(8, -1);
        }
        __name(toStringTag, "toStringTag");
        var iteratorSymbol = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", getIteratorOf = typeof iteratorSymbol == "symbol" ? function(x) {
          var i;
          return x != null && (i = x[iteratorSymbol]) && i.apply(x);
        } : function() {
          return null;
        };
        function delArrayItem(a, x) {
          var i = a.indexOf(x);
          return i >= 0 && a.splice(i, 1), i >= 0;
        }
        __name(delArrayItem, "delArrayItem");
        var NO_CHAR_ARRAY = {};
        function getArrayOf(arrayLike) {
          var i, a, x, it;
          if (arguments.length === 1) {
            if (isArray(arrayLike))
              return arrayLike.slice();
            if (this === NO_CHAR_ARRAY && typeof arrayLike == "string")
              return [arrayLike];
            if (it = getIteratorOf(arrayLike)) {
              for (a = []; x = it.next(), !x.done; )
                a.push(x.value);
              return a;
            }
            if (arrayLike == null)
              return [arrayLike];
            if (i = arrayLike.length, typeof i == "number") {
              for (a = new Array(i); i--; )
                a[i] = arrayLike[i];
              return a;
            }
            return [arrayLike];
          }
          for (i = arguments.length, a = new Array(i); i--; )
            a[i] = arguments[i];
          return a;
        }
        __name(getArrayOf, "getArrayOf");
        var isAsyncFunction = typeof Symbol < "u" ? function(fn) {
          return fn[Symbol.toStringTag] === "AsyncFunction";
        } : function() {
          return !1;
        }, dexieErrorNames = [
          "Modify",
          "Bulk",
          "OpenFailed",
          "VersionChange",
          "Schema",
          "Upgrade",
          "InvalidTable",
          "MissingAPI",
          "NoSuchDatabase",
          "InvalidArgument",
          "SubTransaction",
          "Unsupported",
          "Internal",
          "DatabaseClosed",
          "PrematureCommit",
          "ForeignAwait"
        ], idbDomErrorNames = [
          "Unknown",
          "Constraint",
          "Data",
          "TransactionInactive",
          "ReadOnly",
          "Version",
          "NotFound",
          "InvalidState",
          "InvalidAccess",
          "Abort",
          "Timeout",
          "QuotaExceeded",
          "Syntax",
          "DataClone"
        ], errorList = dexieErrorNames.concat(idbDomErrorNames), defaultTexts = {
          VersionChanged: "Database version changed by other database connection",
          DatabaseClosed: "Database has been closed",
          Abort: "Transaction aborted",
          TransactionInactive: "Transaction has already completed or failed",
          MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
        function DexieError(name, msg) {
          this.name = name, this.message = msg;
        }
        __name(DexieError, "DexieError"), derive(DexieError).from(Error).extend({
          toString: /* @__PURE__ */ __name(function() {
            return this.name + ": " + this.message;
          }, "toString")
        });
        function getMultiErrorMessage(msg, failures) {
          return msg + ". Errors: " + Object.keys(failures).map(function(key) {
            return failures[key].toString();
          }).filter(function(v, i, s) {
            return s.indexOf(v) === i;
          }).join(`
`);
        }
        __name(getMultiErrorMessage, "getMultiErrorMessage");
        function ModifyError(msg, failures, successCount, failedKeys) {
          this.failures = failures, this.failedKeys = failedKeys, this.successCount = successCount, this.message = getMultiErrorMessage(msg, failures);
        }
        __name(ModifyError, "ModifyError"), derive(ModifyError).from(DexieError);
        function BulkError(msg, failures) {
          this.name = "BulkError", this.failures = Object.keys(failures).map(function(pos) {
            return failures[pos];
          }), this.failuresByPos = failures, this.message = getMultiErrorMessage(msg, this.failures);
        }
        __name(BulkError, "BulkError"), derive(BulkError).from(DexieError);
        var errnames = errorList.reduce(function(obj, name) {
          return obj[name] = name + "Error", obj;
        }, {}), BaseException = DexieError, exceptions = errorList.reduce(function(obj, name) {
          var fullName = name + "Error";
          function DexieError2(msgOrInner, inner) {
            this.name = fullName, msgOrInner ? typeof msgOrInner == "string" ? (this.message = "".concat(msgOrInner).concat(inner ? `
 ` + inner : ""), this.inner = inner || null) : typeof msgOrInner == "object" && (this.message = "".concat(msgOrInner.name, " ").concat(msgOrInner.message), this.inner = msgOrInner) : (this.message = defaultTexts[name] || fullName, this.inner = null);
          }
          return __name(DexieError2, "DexieError"), derive(DexieError2).from(BaseException), obj[name] = DexieError2, obj;
        }, {});
        exceptions.Syntax = SyntaxError, exceptions.Type = TypeError, exceptions.Range = RangeError;
        var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
          return obj[name + "Error"] = exceptions[name], obj;
        }, {});
        function mapError(domError, message) {
          if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
            return domError;
          var rv = new exceptionMap[domError.name](message || domError.message, domError);
          return "stack" in domError && setProp(rv, "stack", {
            get: /* @__PURE__ */ __name(function() {
              return this.inner.stack;
            }, "get")
          }), rv;
        }
        __name(mapError, "mapError");
        var fullNameExceptions = errorList.reduce(function(obj, name) {
          return ["Syntax", "Type", "Range"].indexOf(name) === -1 && (obj[name + "Error"] = exceptions[name]), obj;
        }, {});
        fullNameExceptions.ModifyError = ModifyError, fullNameExceptions.DexieError = DexieError, fullNameExceptions.BulkError = BulkError;
        function nop() {
        }
        __name(nop, "nop");
        function mirror(val) {
          return val;
        }
        __name(mirror, "mirror");
        function pureFunctionChain(f1, f2) {
          return f1 == null || f1 === mirror ? f2 : function(val) {
            return f2(f1(val));
          };
        }
        __name(pureFunctionChain, "pureFunctionChain");
        function callBoth(on1, on2) {
          return function() {
            on1.apply(this, arguments), on2.apply(this, arguments);
          };
        }
        __name(callBoth, "callBoth");
        function hookCreatingChain(f1, f2) {
          return f1 === nop ? f2 : function() {
            var res = f1.apply(this, arguments);
            res !== void 0 && (arguments[0] = res);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var res2 = f2.apply(this, arguments);
            return onsuccess && (this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess), onerror && (this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror), res2 !== void 0 ? res2 : res;
          };
        }
        __name(hookCreatingChain, "hookCreatingChain");
        function hookDeletingChain(f1, f2) {
          return f1 === nop ? f2 : function() {
            f1.apply(this, arguments);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = this.onerror = null, f2.apply(this, arguments), onsuccess && (this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess), onerror && (this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror);
          };
        }
        __name(hookDeletingChain, "hookDeletingChain");
        function hookUpdatingChain(f1, f2) {
          return f1 === nop ? f2 : function() {
            var res = f1.apply(this, arguments), modifications = arguments[0];
            extend(modifications, res);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var res2 = f2.apply(this, arguments);
            return onsuccess && (this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess), onerror && (this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror), res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
          };
        }
        __name(hookUpdatingChain, "hookUpdatingChain");
        function reverseStoppableEventChain(f1, f2) {
          return f1 === nop ? f2 : function() {
            return f2.apply(this, arguments) === !1 ? !1 : f1.apply(this, arguments);
          };
        }
        __name(reverseStoppableEventChain, "reverseStoppableEventChain");
        function promisableChain(f1, f2) {
          return f1 === nop ? f2 : function() {
            var res = f1.apply(this, arguments);
            if (res && typeof res.then == "function") {
              for (var thiz = this, i = arguments.length, args = new Array(i); i--; )
                args[i] = arguments[i];
              return res.then(function() {
                return f2.apply(thiz, args);
              });
            }
            return f2.apply(this, arguments);
          };
        }
        __name(promisableChain, "promisableChain");
        var debug = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function setDebug(value, filter) {
          debug = value;
        }
        __name(setDebug, "setDebug");
        var INTERNAL = {}, ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise > "u" ? [] : (function() {
          var globalP = Promise.resolve();
          if (typeof crypto > "u" || !crypto.subtle)
            return [globalP, getProto(globalP), globalP];
          var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
          return [nativeP, getProto(nativeP), globalP];
        })(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then, NativePromise = resolvedNativePromise && resolvedNativePromise.constructor, patchGlobalPromise = !!resolvedGlobalPromise;
        function schedulePhysicalTick() {
          queueMicrotask(physicalTick);
        }
        __name(schedulePhysicalTick, "schedulePhysicalTick");
        var asap = /* @__PURE__ */ __name(function(callback, args) {
          microtickQueue.push([callback, args]), needsNewPhysicalTick && (schedulePhysicalTick(), needsNewPhysicalTick = !1);
        }, "asap"), isOutsideMicroTick = !0, needsNewPhysicalTick = !0, unhandledErrors = [], rejectingErrors = [], rejectionMapper = mirror, globalPSD = {
          id: "global",
          global: !0,
          ref: 0,
          unhandleds: [],
          onunhandled: nop,
          pgp: !1,
          env: {},
          finalize: nop
        }, PSD = globalPSD, microtickQueue = [], numScheduledCalls = 0, tickFinalizers = [];
        function DexiePromise(fn) {
          if (typeof this != "object")
            throw new TypeError("Promises must be constructed via new");
          this._listeners = [], this._lib = !1;
          var psd = this._PSD = PSD;
          if (typeof fn != "function") {
            if (fn !== INTERNAL)
              throw new TypeError("Not a function");
            this._state = arguments[1], this._value = arguments[2], this._state === !1 && handleRejection(this, this._value);
            return;
          }
          this._state = null, this._value = null, ++psd.ref, executePromiseTask(this, fn);
        }
        __name(DexiePromise, "DexiePromise");
        var thenProp = {
          get: /* @__PURE__ */ __name(function() {
            var psd = PSD, microTaskId = totalEchoes;
            function then(onFulfilled, onRejected) {
              var _this = this, possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes), cleanup2 = possibleAwait && !decrementExpectedAwaits(), rv = new DexiePromise(function(resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup2), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup2), resolve, reject, psd));
              });
              return this._consoleTask && (rv._consoleTask = this._consoleTask), rv;
            }
            return __name(then, "then"), then.prototype = INTERNAL, then;
          }, "get"),
          set: /* @__PURE__ */ __name(function(value) {
            setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
              get: /* @__PURE__ */ __name(function() {
                return value;
              }, "get"),
              set: thenProp.set
            });
          }, "set")
        };
        props(DexiePromise.prototype, {
          then: thenProp,
          _then: /* @__PURE__ */ __name(function(onFulfilled, onRejected) {
            propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
          }, "_then"),
          catch: /* @__PURE__ */ __name(function(onRejected) {
            if (arguments.length === 1)
              return this.then(null, onRejected);
            var type2 = arguments[0], handler = arguments[1];
            return typeof type2 == "function" ? this.then(null, function(err) {
              return err instanceof type2 ? handler(err) : PromiseReject(err);
            }) : this.then(null, function(err) {
              return err && err.name === type2 ? handler(err) : PromiseReject(err);
            });
          }, "catch"),
          finally: /* @__PURE__ */ __name(function(onFinally) {
            return this.then(function(value) {
              return DexiePromise.resolve(onFinally()).then(function() {
                return value;
              });
            }, function(err) {
              return DexiePromise.resolve(onFinally()).then(function() {
                return PromiseReject(err);
              });
            });
          }, "finally"),
          timeout: /* @__PURE__ */ __name(function(ms, msg) {
            var _this = this;
            return ms < 1 / 0 ? new DexiePromise(function(resolve, reject) {
              var handle = setTimeout(function() {
                return reject(new exceptions.Timeout(msg));
              }, ms);
              _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
          }, "timeout")
        }), typeof Symbol < "u" && Symbol.toStringTag && setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise"), globalPSD.env = snapShot();
        function Listener(onFulfilled, onRejected, resolve, reject, zone) {
          this.onFulfilled = typeof onFulfilled == "function" ? onFulfilled : null, this.onRejected = typeof onRejected == "function" ? onRejected : null, this.resolve = resolve, this.reject = reject, this.psd = zone;
        }
        __name(Listener, "Listener"), props(DexiePromise, {
          all: /* @__PURE__ */ __name(function() {
            var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              values.length === 0 && resolve([]);
              var remaining = values.length;
              values.forEach(function(a, i) {
                return DexiePromise.resolve(a).then(function(x) {
                  values[i] = x, --remaining || resolve(values);
                }, reject);
              });
            });
          }, "all"),
          resolve: /* @__PURE__ */ __name(function(value) {
            if (value instanceof DexiePromise)
              return value;
            if (value && typeof value.then == "function")
              return new DexiePromise(function(resolve, reject) {
                value.then(resolve, reject);
              });
            var rv = new DexiePromise(INTERNAL, !0, value);
            return rv;
          }, "resolve"),
          reject: PromiseReject,
          race: /* @__PURE__ */ __name(function() {
            var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              values.map(function(value) {
                return DexiePromise.resolve(value).then(resolve, reject);
              });
            });
          }, "race"),
          PSD: {
            get: /* @__PURE__ */ __name(function() {
              return PSD;
            }, "get"),
            set: /* @__PURE__ */ __name(function(value) {
              return PSD = value;
            }, "set")
          },
          totalEchoes: { get: /* @__PURE__ */ __name(function() {
            return totalEchoes;
          }, "get") },
          newPSD: newScope,
          usePSD,
          scheduler: {
            get: /* @__PURE__ */ __name(function() {
              return asap;
            }, "get"),
            set: /* @__PURE__ */ __name(function(value) {
              asap = value;
            }, "set")
          },
          rejectionMapper: {
            get: /* @__PURE__ */ __name(function() {
              return rejectionMapper;
            }, "get"),
            set: /* @__PURE__ */ __name(function(value) {
              rejectionMapper = value;
            }, "set")
          },
          follow: /* @__PURE__ */ __name(function(fn, zoneProps) {
            return new DexiePromise(function(resolve, reject) {
              return newScope(function(resolve2, reject2) {
                var psd = PSD;
                psd.unhandleds = [], psd.onunhandled = reject2, psd.finalize = callBoth(function() {
                  var _this = this;
                  run_at_end_of_this_or_next_physical_tick(function() {
                    _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
                  });
                }, psd.finalize), fn();
              }, zoneProps, resolve, reject);
            });
          }, "follow")
        }), NativePromise && (NativePromise.allSettled && setProp(DexiePromise, "allSettled", function() {
          var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve) {
            possiblePromises.length === 0 && resolve([]);
            var remaining = possiblePromises.length, results = new Array(remaining);
            possiblePromises.forEach(function(p, i) {
              return DexiePromise.resolve(p).then(function(value) {
                return results[i] = { status: "fulfilled", value };
              }, function(reason) {
                return results[i] = { status: "rejected", reason };
              }).then(function() {
                return --remaining || resolve(results);
              });
            });
          });
        }), NativePromise.any && typeof AggregateError < "u" && setProp(DexiePromise, "any", function() {
          var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve, reject) {
            possiblePromises.length === 0 && reject(new AggregateError([]));
            var remaining = possiblePromises.length, failures = new Array(remaining);
            possiblePromises.forEach(function(p, i) {
              return DexiePromise.resolve(p).then(function(value) {
                return resolve(value);
              }, function(failure) {
                failures[i] = failure, --remaining || reject(new AggregateError(failures));
              });
            });
          });
        }), NativePromise.withResolvers && (DexiePromise.withResolvers = NativePromise.withResolvers));
        function executePromiseTask(promise, fn) {
          try {
            fn(function(value) {
              if (promise._state === null) {
                if (value === promise)
                  throw new TypeError("A promise cannot be resolved with itself.");
                var shouldExecuteTick = promise._lib && beginMicroTickScope();
                value && typeof value.then == "function" ? executePromiseTask(promise, function(resolve, reject) {
                  value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
                }) : (promise._state = !0, promise._value = value, propagateAllListeners(promise)), shouldExecuteTick && endMicroTickScope();
              }
            }, handleRejection.bind(null, promise));
          } catch (ex) {
            handleRejection(promise, ex);
          }
        }
        __name(executePromiseTask, "executePromiseTask");
        function handleRejection(promise, reason) {
          if (rejectingErrors.push(reason), promise._state === null) {
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            reason = rejectionMapper(reason), promise._state = !1, promise._value = reason, addPossiblyUnhandledError(promise), propagateAllListeners(promise), shouldExecuteTick && endMicroTickScope();
          }
        }
        __name(handleRejection, "handleRejection");
        function propagateAllListeners(promise) {
          var listeners = promise._listeners;
          promise._listeners = [];
          for (var i = 0, len = listeners.length; i < len; ++i)
            propagateToListener(promise, listeners[i]);
          var psd = promise._PSD;
          --psd.ref || psd.finalize(), numScheduledCalls === 0 && (++numScheduledCalls, asap(function() {
            --numScheduledCalls === 0 && finalizePhysicalTick();
          }, []));
        }
        __name(propagateAllListeners, "propagateAllListeners");
        function propagateToListener(promise, listener) {
          if (promise._state === null) {
            promise._listeners.push(listener);
            return;
          }
          var cb = promise._state ? listener.onFulfilled : listener.onRejected;
          if (cb === null)
            return (promise._state ? listener.resolve : listener.reject)(promise._value);
          ++listener.psd.ref, ++numScheduledCalls, asap(callListener, [cb, promise, listener]);
        }
        __name(propagateToListener, "propagateToListener");
        function callListener(cb, promise, listener) {
          try {
            var ret, value = promise._value;
            !promise._state && rejectingErrors.length && (rejectingErrors = []), ret = debug && promise._consoleTask ? promise._consoleTask.run(function() {
              return cb(value);
            }) : cb(value), !promise._state && rejectingErrors.indexOf(value) === -1 && markErrorAsHandled(promise), listener.resolve(ret);
          } catch (e) {
            listener.reject(e);
          } finally {
            --numScheduledCalls === 0 && finalizePhysicalTick(), --listener.psd.ref || listener.psd.finalize();
          }
        }
        __name(callListener, "callListener");
        function physicalTick() {
          usePSD(globalPSD, function() {
            beginMicroTickScope() && endMicroTickScope();
          });
        }
        __name(physicalTick, "physicalTick");
        function beginMicroTickScope() {
          var wasRootExec = isOutsideMicroTick;
          return isOutsideMicroTick = !1, needsNewPhysicalTick = !1, wasRootExec;
        }
        __name(beginMicroTickScope, "beginMicroTickScope");
        function endMicroTickScope() {
          var callbacks, i, l;
          do
            for (; microtickQueue.length > 0; )
              for (callbacks = microtickQueue, microtickQueue = [], l = callbacks.length, i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
              }
          while (microtickQueue.length > 0);
          isOutsideMicroTick = !0, needsNewPhysicalTick = !0;
        }
        __name(endMicroTickScope, "endMicroTickScope");
        function finalizePhysicalTick() {
          var unhandledErrs = unhandledErrors;
          unhandledErrors = [], unhandledErrs.forEach(function(p) {
            p._PSD.onunhandled.call(null, p._value, p);
          });
          for (var finalizers = tickFinalizers.slice(0), i = finalizers.length; i; )
            finalizers[--i]();
        }
        __name(finalizePhysicalTick, "finalizePhysicalTick");
        function run_at_end_of_this_or_next_physical_tick(fn) {
          function finalizer() {
            fn(), tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
          }
          __name(finalizer, "finalizer"), tickFinalizers.push(finalizer), ++numScheduledCalls, asap(function() {
            --numScheduledCalls === 0 && finalizePhysicalTick();
          }, []);
        }
        __name(run_at_end_of_this_or_next_physical_tick, "run_at_end_of_this_or_next_physical_tick");
        function addPossiblyUnhandledError(promise) {
          unhandledErrors.some(function(p) {
            return p._value === promise._value;
          }) || unhandledErrors.push(promise);
        }
        __name(addPossiblyUnhandledError, "addPossiblyUnhandledError");
        function markErrorAsHandled(promise) {
          for (var i = unhandledErrors.length; i; )
            if (unhandledErrors[--i]._value === promise._value) {
              unhandledErrors.splice(i, 1);
              return;
            }
        }
        __name(markErrorAsHandled, "markErrorAsHandled");
        function PromiseReject(reason) {
          return new DexiePromise(INTERNAL, !1, reason);
        }
        __name(PromiseReject, "PromiseReject");
        function wrap(fn, errorCatcher) {
          var psd = PSD;
          return function() {
            var wasRootExec = beginMicroTickScope(), outerScope = PSD;
            try {
              return switchToZone(psd, !0), fn.apply(this, arguments);
            } catch (e) {
              errorCatcher && errorCatcher(e);
            } finally {
              switchToZone(outerScope, !1), wasRootExec && endMicroTickScope();
            }
          };
        }
        __name(wrap, "wrap");
        var task = { awaits: 0, echoes: 0, id: 0 }, taskCounter = 0, zoneStack = [], zoneEchoes = 0, totalEchoes = 0, zone_id_counter = 0;
        function newScope(fn, props2, a1, a2) {
          var parent = PSD, psd = Object.create(parent);
          psd.parent = parent, psd.ref = 0, psd.global = !1, psd.id = ++zone_id_counter, globalPSD.env, psd.env = patchGlobalPromise ? {
            Promise: DexiePromise,
            PromiseProp: {
              value: DexiePromise,
              configurable: !0,
              writable: !0
            },
            all: DexiePromise.all,
            race: DexiePromise.race,
            allSettled: DexiePromise.allSettled,
            any: DexiePromise.any,
            resolve: DexiePromise.resolve,
            reject: DexiePromise.reject
          } : {}, props2 && extend(psd, props2), ++parent.ref, psd.finalize = function() {
            --this.parent.ref || this.parent.finalize();
          };
          var rv = usePSD(psd, fn, a1, a2);
          return psd.ref === 0 && psd.finalize(), rv;
        }
        __name(newScope, "newScope");
        function incrementExpectedAwaits() {
          return task.id || (task.id = ++taskCounter), ++task.awaits, task.echoes += ZONE_ECHO_LIMIT, task.id;
        }
        __name(incrementExpectedAwaits, "incrementExpectedAwaits");
        function decrementExpectedAwaits() {
          return task.awaits ? (--task.awaits === 0 && (task.id = 0), task.echoes = task.awaits * ZONE_ECHO_LIMIT, !0) : !1;
        }
        __name(decrementExpectedAwaits, "decrementExpectedAwaits"), ("" + nativePromiseThen).indexOf("[native code]") === -1 && (incrementExpectedAwaits = decrementExpectedAwaits = nop);
        function onPossibleParallellAsync(possiblePromise) {
          return task.echoes && possiblePromise && possiblePromise.constructor === NativePromise ? (incrementExpectedAwaits(), possiblePromise.then(function(x) {
            return decrementExpectedAwaits(), x;
          }, function(e) {
            return decrementExpectedAwaits(), rejection(e);
          })) : possiblePromise;
        }
        __name(onPossibleParallellAsync, "onPossibleParallellAsync");
        function zoneEnterEcho(targetZone) {
          ++totalEchoes, (!task.echoes || --task.echoes === 0) && (task.echoes = task.awaits = task.id = 0), zoneStack.push(PSD), switchToZone(targetZone, !0);
        }
        __name(zoneEnterEcho, "zoneEnterEcho");
        function zoneLeaveEcho() {
          var zone = zoneStack[zoneStack.length - 1];
          zoneStack.pop(), switchToZone(zone, !1);
        }
        __name(zoneLeaveEcho, "zoneLeaveEcho");
        function switchToZone(targetZone, bEnteringZone) {
          var currentZone = PSD;
          if ((bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) && queueMicrotask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho), targetZone !== PSD && (PSD = targetZone, currentZone === globalPSD && (globalPSD.env = snapShot()), patchGlobalPromise)) {
            var GlobalPromise = globalPSD.env.Promise, targetEnv = targetZone.env;
            (currentZone.global || targetZone.global) && (Object.defineProperty(_global, "Promise", targetEnv.PromiseProp), GlobalPromise.all = targetEnv.all, GlobalPromise.race = targetEnv.race, GlobalPromise.resolve = targetEnv.resolve, GlobalPromise.reject = targetEnv.reject, targetEnv.allSettled && (GlobalPromise.allSettled = targetEnv.allSettled), targetEnv.any && (GlobalPromise.any = targetEnv.any));
          }
        }
        __name(switchToZone, "switchToZone");
        function snapShot() {
          var GlobalPromise = _global.Promise;
          return patchGlobalPromise ? {
            Promise: GlobalPromise,
            PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
            all: GlobalPromise.all,
            race: GlobalPromise.race,
            allSettled: GlobalPromise.allSettled,
            any: GlobalPromise.any,
            resolve: GlobalPromise.resolve,
            reject: GlobalPromise.reject
          } : {};
        }
        __name(snapShot, "snapShot");
        function usePSD(psd, fn, a1, a2, a3) {
          var outerScope = PSD;
          try {
            return switchToZone(psd, !0), fn(a1, a2, a3);
          } finally {
            switchToZone(outerScope, !1);
          }
        }
        __name(usePSD, "usePSD");
        function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup2) {
          return typeof fn != "function" ? fn : function() {
            var outerZone = PSD;
            possibleAwait && incrementExpectedAwaits(), switchToZone(zone, !0);
            try {
              return fn.apply(this, arguments);
            } finally {
              switchToZone(outerZone, !1), cleanup2 && queueMicrotask(decrementExpectedAwaits);
            }
          };
        }
        __name(nativeAwaitCompatibleWrap, "nativeAwaitCompatibleWrap");
        function execInGlobalContext(cb) {
          Promise === NativePromise && task.echoes === 0 ? zoneEchoes === 0 ? cb() : enqueueNativeMicroTask(cb) : setTimeout(cb, 0);
        }
        __name(execInGlobalContext, "execInGlobalContext");
        var rejection = DexiePromise.reject;
        function tempTransaction(db2, mode, storeNames, fn) {
          if (!db2.idbdb || !db2._state.openComplete && !PSD.letThrough && !db2._vip) {
            if (db2._state.openComplete)
              return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
            if (!db2._state.isBeingOpened) {
              if (!db2._state.autoOpen)
                return rejection(new exceptions.DatabaseClosed());
              db2.open().catch(nop);
            }
            return db2._state.dbReadyPromise.then(function() {
              return tempTransaction(db2, mode, storeNames, fn);
            });
          } else {
            var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
            try {
              trans.create(), db2._state.PR1398_maxLoop = 3;
            } catch (ex) {
              return ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), db2.close({ disableAutoOpen: !1 }), db2.open().then(function() {
                return tempTransaction(db2, mode, storeNames, fn);
              })) : rejection(ex);
            }
            return trans._promise(mode, function(resolve, reject) {
              return newScope(function() {
                return PSD.trans = trans, fn(resolve, reject, trans);
              });
            }).then(function(result) {
              if (mode === "readwrite")
                try {
                  trans.idbtrans.commit();
                } catch {
                }
              return mode === "readonly" ? result : trans._completion.then(function() {
                return result;
              });
            });
          }
        }
        __name(tempTransaction, "tempTransaction");
        var DEXIE_VERSION = "4.4.7", maxString = "\uFFFF", minKey = -1 / 0, INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", STRING_EXPECTED = "String expected.", DEFAULT_MAX_CONNECTIONS = 1e3, DBNAMES_DB = "__dbnames", READONLY = "readonly", READWRITE = "readwrite";
        function combine(filter1, filter2) {
          return filter1 ? filter2 ? function() {
            return filter1.apply(this, arguments) && filter2.apply(this, arguments);
          } : filter1 : filter2;
        }
        __name(combine, "combine");
        var AnyRange = {
          type: 3,
          lower: -1 / 0,
          lowerOpen: !1,
          upper: [[]],
          upperOpen: !1
        };
        function workaroundForUndefinedPrimKey(keyPath) {
          return typeof keyPath == "string" && !/\./.test(keyPath) ? function(obj) {
            return obj[keyPath] === void 0 && keyPath in obj && (obj = deepClone(obj), delete obj[keyPath]), obj;
          } : function(obj) {
            return obj;
          };
        }
        __name(workaroundForUndefinedPrimKey, "workaroundForUndefinedPrimKey");
        function Entity2() {
          throw exceptions.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
        }
        __name(Entity2, "Entity");
        function cmp2(a, b) {
          try {
            var ta = type(a), tb = type(b);
            if (ta !== tb)
              return ta === "Array" ? 1 : tb === "Array" ? -1 : ta === "binary" ? 1 : tb === "binary" ? -1 : ta === "string" ? 1 : tb === "string" ? -1 : ta === "Date" ? 1 : tb !== "Date" ? NaN : -1;
            switch (ta) {
              case "number":
              case "Date":
              case "string":
                return a > b ? 1 : a < b ? -1 : 0;
              case "binary":
                return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
              case "Array":
                return compareArrays(a, b);
            }
          } catch {
          }
          return NaN;
        }
        __name(cmp2, "cmp");
        function compareArrays(a, b) {
          for (var al = a.length, bl = b.length, l = al < bl ? al : bl, i = 0; i < l; ++i) {
            var res = cmp2(a[i], b[i]);
            if (res !== 0)
              return res;
          }
          return al === bl ? 0 : al < bl ? -1 : 1;
        }
        __name(compareArrays, "compareArrays");
        function compareUint8Arrays(a, b) {
          for (var al = a.length, bl = b.length, l = al < bl ? al : bl, i = 0; i < l; ++i)
            if (a[i] !== b[i])
              return a[i] < b[i] ? -1 : 1;
          return al === bl ? 0 : al < bl ? -1 : 1;
        }
        __name(compareUint8Arrays, "compareUint8Arrays");
        function type(x) {
          var t = typeof x;
          if (t !== "object")
            return t;
          if (ArrayBuffer.isView(x))
            return "binary";
          var tsTag = toStringTag(x);
          return tsTag === "ArrayBuffer" ? "binary" : tsTag;
        }
        __name(type, "type");
        function getUint8Array(a) {
          return a instanceof Uint8Array ? a : ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : new Uint8Array(a);
        }
        __name(getUint8Array, "getUint8Array");
        function builtInDeletionTrigger(table, keys2, res) {
          var yProps = table.schema.yProps;
          return yProps ? (keys2 && res.numFailures > 0 && (keys2 = keys2.filter(function(_, i) {
            return !res.failures[i];
          })), Promise.all(yProps.map(function(_a2) {
            var updatesTable = _a2.updatesTable;
            return keys2 ? table.db.table(updatesTable).where("k").anyOf(keys2).delete() : table.db.table(updatesTable).clear();
          })).then(function() {
            return res;
          })) : res;
        }
        __name(builtInDeletionTrigger, "builtInDeletionTrigger");
        var PropModification2 = (function() {
          function PropModification3(spec) {
            this["@@propmod"] = spec;
          }
          return __name(PropModification3, "PropModification"), PropModification3.prototype.execute = function(value) {
            var _a2, spec = this["@@propmod"];
            if (spec.add !== void 0) {
              var term = spec.add;
              if (isArray(term))
                return __spreadArray(__spreadArray([], isArray(value) ? value : [], !0), term, !0).sort();
              if (typeof term == "number")
                return (Number(value) || 0) + term;
              if (typeof term == "bigint")
                try {
                  return BigInt(value) + term;
                } catch {
                  return BigInt(0) + term;
                }
              throw new TypeError("Invalid term ".concat(term));
            }
            if (spec.remove !== void 0) {
              var subtrahend_1 = spec.remove;
              if (isArray(subtrahend_1))
                return isArray(value) ? value.filter(function(item) {
                  return !subtrahend_1.includes(item);
                }).sort() : [];
              if (typeof subtrahend_1 == "number")
                return Number(value) - subtrahend_1;
              if (typeof subtrahend_1 == "bigint")
                try {
                  return BigInt(value) - subtrahend_1;
                } catch {
                  return BigInt(0) - subtrahend_1;
                }
              throw new TypeError("Invalid subtrahend ".concat(subtrahend_1));
            }
            var prefixToReplace = (_a2 = spec.replacePrefix) === null || _a2 === void 0 ? void 0 : _a2[0];
            return prefixToReplace && typeof value == "string" && value.startsWith(prefixToReplace) ? spec.replacePrefix[1] + value.substring(prefixToReplace.length) : value;
          }, PropModification3;
        })();
        function applyUpdateSpec(obj, changes) {
          for (var keyPaths = keys(changes), numKeys = keyPaths.length, anythingModified = !1, i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i], value = changes[keyPath], origValue = getByKeyPath(obj, keyPath);
            value instanceof PropModification2 ? (setByKeyPath(obj, keyPath, value.execute(origValue)), anythingModified = !0) : origValue !== value && (setByKeyPath(obj, keyPath, value), anythingModified = !0);
          }
          return anythingModified;
        }
        __name(applyUpdateSpec, "applyUpdateSpec");
        var Table = (function() {
          function Table2() {
          }
          return __name(Table2, "Table"), Table2.prototype._trans = function(mode, fn, writeLocked) {
            var trans = this._tx || PSD.trans, tableName = this.name, task2 = debug && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(mode === "readonly" ? "read" : "write", " ").concat(this.name));
            function checkTableInTransaction(resolve, reject, trans2) {
              if (!trans2.schema[tableName])
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
              return fn(trans2.idbtrans, trans2);
            }
            __name(checkTableInTransaction, "checkTableInTransaction");
            var wasRootExec = beginMicroTickScope();
            try {
              var p = trans && trans.db._novip === this.db._novip ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
                return trans._promise(mode, checkTableInTransaction, writeLocked);
              }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
              return task2 && (p._consoleTask = task2, p = p.catch(function(err) {
                return console.trace(err), rejection(err);
              })), p;
            } finally {
              wasRootExec && endMicroTickScope();
            }
          }, Table2.prototype.get = function(keyOrCrit, cb) {
            var _this = this;
            return keyOrCrit && keyOrCrit.constructor === Object ? this.where(keyOrCrit).first(cb) : keyOrCrit == null ? rejection(new exceptions.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(trans) {
              return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
                return _this.hook.reading.fire(res);
              });
            }).then(cb);
          }, Table2.prototype.where = function(indexOrCrit) {
            if (typeof indexOrCrit == "string")
              return new this.db.WhereClause(this, indexOrCrit);
            if (isArray(indexOrCrit))
              return new this.db.WhereClause(this, "[".concat(indexOrCrit.join("+"), "]"));
            var keyPaths = keys(indexOrCrit);
            if (keyPaths.length === 1)
              return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
            var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
              if (ix.compound && keyPaths.every(function(keyPath) {
                return ix.keyPath.indexOf(keyPath) >= 0;
              })) {
                for (var i = 0; i < keyPaths.length; ++i)
                  if (keyPaths.indexOf(ix.keyPath[i]) === -1)
                    return !1;
                return !0;
              }
              return !1;
            }).sort(function(a, b) {
              return a.keyPath.length - b.keyPath.length;
            })[0];
            if (compoundIndex && this.db._maxKey !== maxString) {
              var keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
              return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(function(kp) {
                return indexOrCrit[kp];
              }));
            }
            !compoundIndex && debug && console.warn("The query ".concat(JSON.stringify(indexOrCrit), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(keyPaths.join("+"), "]"));
            var idxByName = this.schema.idxByName;
            function equals(a, b) {
              return cmp2(a, b) === 0;
            }
            __name(equals, "equals");
            var _a2 = keyPaths.reduce(function(_a3, keyPath) {
              var prevIndex = _a3[0], prevFilterFn = _a3[1], index = idxByName[keyPath], value = indexOrCrit[keyPath];
              return [
                prevIndex || index,
                prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                  var prop = getByKeyPath(x, keyPath);
                  return isArray(prop) && prop.some(function(item) {
                    return equals(value, item);
                  });
                } : function(x) {
                  return equals(value, getByKeyPath(x, keyPath));
                }) : prevFilterFn
              ];
            }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
            return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
          }, Table2.prototype.filter = function(filterFunction) {
            return this.toCollection().and(filterFunction);
          }, Table2.prototype.count = function(thenShortcut) {
            return this.toCollection().count(thenShortcut);
          }, Table2.prototype.offset = function(offset) {
            return this.toCollection().offset(offset);
          }, Table2.prototype.limit = function(numRows) {
            return this.toCollection().limit(numRows);
          }, Table2.prototype.each = function(callback) {
            return this.toCollection().each(callback);
          }, Table2.prototype.toArray = function(thenShortcut) {
            return this.toCollection().toArray(thenShortcut);
          }, Table2.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this));
          }, Table2.prototype.orderBy = function(index) {
            return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[".concat(index.join("+"), "]") : index));
          }, Table2.prototype.reverse = function() {
            return this.toCollection().reverse();
          }, Table2.prototype.mapToClass = function(constructor) {
            var _a2 = this, db2 = _a2.db, tableName = _a2.name;
            this.schema.mappedClass = constructor, constructor.prototype instanceof Entity2 && (constructor = (function(_super) {
              __extends(class_1, _super);
              function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
              }
              return __name(class_1, "class_1"), Object.defineProperty(class_1.prototype, "db", {
                get: /* @__PURE__ */ __name(function() {
                  return db2;
                }, "get"),
                enumerable: !1,
                configurable: !0
              }), class_1.prototype.table = function() {
                return tableName;
              }, class_1;
            })(constructor));
            for (var inheritedProps = /* @__PURE__ */ new Set(), proto = constructor.prototype; proto; proto = getProto(proto))
              Object.getOwnPropertyNames(proto).forEach(function(propName) {
                return inheritedProps.add(propName);
              });
            var readHook = /* @__PURE__ */ __name(function(obj) {
              if (!obj)
                return obj;
              var res = Object.create(constructor.prototype);
              for (var m in obj)
                if (!inheritedProps.has(m))
                  try {
                    res[m] = obj[m];
                  } catch {
                  }
              return res;
            }, "readHook");
            return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = readHook, this.hook("reading", readHook), constructor;
          }, Table2.prototype.defineClass = function() {
            function Class(content) {
              extend(this, content);
            }
            return __name(Class, "Class"), this.mapToClass(Class);
          }, Table2.prototype.add = function(obj, key) {
            var _this = this, _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath, objToAdd = obj;
            return keyPath && auto && (objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj)), this._trans("readwrite", function(trans) {
              return _this.core.mutate({
                trans,
                type: "add",
                keys: key != null ? [key] : null,
                values: [objToAdd]
              });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
            }).then(function(lastResult) {
              if (keyPath)
                try {
                  setByKeyPath(obj, keyPath, lastResult);
                } catch {
                }
              return lastResult;
            });
          }, Table2.prototype.upsert = function(key, modifications) {
            var _this = this, keyPath = this.schema.primKey.keyPath;
            return this._trans("readwrite", function(trans) {
              return _this.core.get({ trans, key }).then(function(existing) {
                var obj = existing ?? {};
                return applyUpdateSpec(obj, modifications), keyPath && setByKeyPath(obj, keyPath, key), _this.core.mutate({
                  trans,
                  type: "put",
                  values: [obj],
                  keys: [key],
                  upsert: !0,
                  updates: { keys: [key], changeSpecs: [modifications] }
                }).then(function(res) {
                  return res.numFailures ? DexiePromise.reject(res.failures[0]) : !!existing;
                });
              });
            });
          }, Table2.prototype.update = function(keyOrObject, modifications) {
            if (typeof keyOrObject == "object" && !isArray(keyOrObject)) {
              var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
              return key === void 0 ? rejection(new exceptions.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(key).modify(modifications);
            } else
              return this.where(":id").equals(keyOrObject).modify(modifications);
          }, Table2.prototype.put = function(obj, key) {
            var _this = this, _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath, objToAdd = obj;
            return keyPath && auto && (objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj)), this._trans("readwrite", function(trans) {
              return _this.core.mutate({
                trans,
                type: "put",
                values: [objToAdd],
                keys: key != null ? [key] : null
              });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
            }).then(function(lastResult) {
              if (keyPath)
                try {
                  setByKeyPath(obj, keyPath, lastResult);
                } catch {
                }
              return lastResult;
            });
          }, Table2.prototype.delete = function(key) {
            var _this = this;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "delete", keys: [key] }).then(function(res) {
                return builtInDeletionTrigger(_this, [key], res);
              }).then(function(res) {
                return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
              });
            });
          }, Table2.prototype.clear = function() {
            var _this = this;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange }).then(function(res) {
                return builtInDeletionTrigger(_this, null, res);
              });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
            });
          }, Table2.prototype.bulkGet = function(keys2) {
            var _this = this;
            return this._trans("readonly", function(trans) {
              return _this.core.getMany({
                keys: keys2,
                trans
              }).then(function(result) {
                return result.map(function(res) {
                  return _this.hook.reading.fire(res);
                });
              });
            });
          }, Table2.prototype.bulkAdd = function(objects, keysOrOptions, options) {
            var _this = this, keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
            options = options || (keys2 ? void 0 : keysOrOptions);
            var wantResults = options ? options.allKeys : void 0;
            return this._trans("readwrite", function(trans) {
              var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
              if (keyPath && keys2)
                throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
              if (keys2 && keys2.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
              var numObjects = objects.length, objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
              return _this.core.mutate({
                trans,
                type: "add",
                keys: keys2,
                values: objectsToAdd,
                wantResults
              }).then(function(_a3) {
                var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures, result = wantResults ? results : lastResult;
                if (numFailures === 0)
                  return result;
                throw new BulkError("".concat(_this.name, ".bulkAdd(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
              });
            });
          }, Table2.prototype.bulkPut = function(objects, keysOrOptions, options) {
            var _this = this, keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
            options = options || (keys2 ? void 0 : keysOrOptions);
            var wantResults = options ? options.allKeys : void 0;
            return this._trans("readwrite", function(trans) {
              var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
              if (keyPath && keys2)
                throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
              if (keys2 && keys2.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
              var numObjects = objects.length, objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
              return _this.core.mutate({
                trans,
                type: "put",
                keys: keys2,
                values: objectsToPut,
                wantResults
              }).then(function(_a3) {
                var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures, result = wantResults ? results : lastResult;
                if (numFailures === 0)
                  return result;
                throw new BulkError("".concat(_this.name, ".bulkPut(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
              });
            });
          }, Table2.prototype.bulkUpdate = function(keysAndChanges) {
            var _this = this, keys2 = keysAndChanges.map(function(entry) {
              return entry.key;
            }), changeSpecs = keysAndChanges.map(function(entry) {
              return entry.changes;
            }), offsetMap = [];
            return this._trans("readwrite", function(trans) {
              var coreTable = _this.core;
              return coreTable.getMany({ trans, keys: keys2, cache: "clone" }).then(function(objs) {
                var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey, resultKeys = [], resultObjs = [];
                keysAndChanges.forEach(function(_a3, idx) {
                  var key = _a3.key, changes = _a3.changes, obj = objs[idx];
                  if (obj) {
                    for (var _i = 0, _b = Object.keys(changes); _i < _b.length; _i++) {
                      var keyPath = _b[_i];
                      setByKeyPath(obj, keyPath, changes[keyPath]);
                    }
                    if (!outbound && cmp2(extractKey(obj), key) !== 0)
                      throw new exceptions.Constraint("Cannot update primary key in bulkUpdate()");
                    offsetMap.push(idx), resultKeys.push(key), resultObjs.push(obj);
                  }
                });
                var numEntries = resultKeys.length;
                return coreTable.mutate({
                  trans,
                  type: "put",
                  keys: resultKeys,
                  values: resultObjs,
                  updates: {
                    keys: keys2,
                    changeSpecs
                  }
                }).then(function(_a3) {
                  var numFailures = _a3.numFailures, failures = _a3.failures;
                  if (numFailures === 0)
                    return numEntries;
                  for (var _i = 0, _b = Object.keys(failures); _i < _b.length; _i++) {
                    var offset = _b[_i], mappedOffset = offsetMap[Number(offset)];
                    if (mappedOffset != null) {
                      var failure = failures[offset];
                      delete failures[offset], failures[mappedOffset] = failure;
                    }
                  }
                  throw new BulkError("".concat(_this.name, ".bulkUpdate(): ").concat(numFailures, " of ").concat(numEntries, " operations failed"), failures);
                });
              });
            });
          }, Table2.prototype.bulkDelete = function(keys2) {
            var _this = this, numKeys = keys2.length;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "delete", keys: keys2 }).then(function(res) {
                return builtInDeletionTrigger(_this, keys2, res);
              });
            }).then(function(_a2) {
              var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
              if (numFailures === 0)
                return lastResult;
              throw new BulkError("".concat(_this.name, ".bulkDelete(): ").concat(numFailures, " of ").concat(numKeys, " operations failed"), failures);
            });
          }, Table2;
        })();
        function Events(ctx) {
          var evs = {}, rv = /* @__PURE__ */ __name(function(eventName, subscriber) {
            if (subscriber) {
              for (var i2 = arguments.length, args = new Array(i2 - 1); --i2; )
                args[i2 - 1] = arguments[i2];
              return evs[eventName].subscribe.apply(null, args), ctx;
            } else if (typeof eventName == "string")
              return evs[eventName];
          }, "rv");
          rv.addEventType = add3;
          for (var i = 1, l = arguments.length; i < l; ++i)
            add3(arguments[i]);
          return rv;
          function add3(eventName, chainFunction, defaultFunction) {
            if (typeof eventName == "object")
              return addConfiguredEvents(eventName);
            chainFunction || (chainFunction = reverseStoppableEventChain), defaultFunction || (defaultFunction = nop);
            var context = {
              subscribers: [],
              fire: defaultFunction,
              subscribe: /* @__PURE__ */ __name(function(cb) {
                context.subscribers.indexOf(cb) === -1 && (context.subscribers.push(cb), context.fire = chainFunction(context.fire, cb));
              }, "subscribe"),
              unsubscribe: /* @__PURE__ */ __name(function(cb) {
                context.subscribers = context.subscribers.filter(function(fn) {
                  return fn !== cb;
                }), context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
              }, "unsubscribe")
            };
            return evs[eventName] = rv[eventName] = context, context;
          }
          function addConfiguredEvents(cfg) {
            keys(cfg).forEach(function(eventName) {
              var args = cfg[eventName];
              if (isArray(args))
                add3(eventName, cfg[eventName][0], cfg[eventName][1]);
              else if (args === "asap")
                var context = add3(eventName, mirror, /* @__PURE__ */ __name(function() {
                  for (var i2 = arguments.length, args2 = new Array(i2); i2--; )
                    args2[i2] = arguments[i2];
                  context.subscribers.forEach(function(fn) {
                    asap$1(/* @__PURE__ */ __name(function() {
                      fn.apply(null, args2);
                    }, "fireEvent"));
                  });
                }, "fire"));
              else
                throw new exceptions.InvalidArgument("Invalid event config");
            });
          }
        }
        __name(Events, "Events");
        function makeClassConstructor(prototype, constructor) {
          return derive(constructor).from({ prototype }), constructor;
        }
        __name(makeClassConstructor, "makeClassConstructor");
        function createTableConstructor(db2) {
          return makeClassConstructor(Table.prototype, /* @__PURE__ */ __name(function(name, tableSchema, trans) {
            this.db = db2, this._tx = trans, this.name = name, this.schema = tableSchema, this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
              creating: [hookCreatingChain, nop],
              reading: [pureFunctionChain, mirror],
              updating: [hookUpdatingChain, nop],
              deleting: [hookDeletingChain, nop]
            });
          }, "Table"));
        }
        __name(createTableConstructor, "createTableConstructor");
        function isPlainKeyRange(ctx, ignoreLimitFilter) {
          return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
        }
        __name(isPlainKeyRange, "isPlainKeyRange");
        function addFilter(ctx, fn) {
          ctx.filter = combine(ctx.filter, fn);
        }
        __name(addFilter, "addFilter");
        function addReplayFilter(ctx, factory, isLimitFilter) {
          var curr = ctx.replayFilter;
          ctx.replayFilter = curr ? function() {
            return combine(curr(), factory());
          } : factory, ctx.justLimit = isLimitFilter && !curr;
        }
        __name(addReplayFilter, "addReplayFilter");
        function addMatchFilter(ctx, fn) {
          ctx.isMatch = combine(ctx.isMatch, fn);
        }
        __name(addMatchFilter, "addMatchFilter");
        function getIndexOrStore(ctx, coreSchema) {
          if (ctx.isPrimKey)
            return coreSchema.primaryKey;
          var index = coreSchema.getIndexByKeyPath(ctx.index);
          if (!index)
            throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
          return index;
        }
        __name(getIndexOrStore, "getIndexOrStore");
        function openCursor(ctx, coreTable, trans) {
          var index = getIndexOrStore(ctx, coreTable.schema);
          return coreTable.openCursor({
            trans,
            values: !ctx.keysOnly,
            reverse: ctx.dir === "prev",
            unique: !!ctx.unique,
            query: {
              index,
              range: ctx.range
            }
          });
        }
        __name(openCursor, "openCursor");
        function iter(ctx, fn, coreTrans, coreTable) {
          var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
          if (ctx.or) {
            var set_1 = {}, union = /* @__PURE__ */ __name(function(item, cursor, advance) {
              if (!filter || filter(cursor, advance, function(result) {
                return cursor.stop(result);
              }, function(err) {
                return cursor.fail(err);
              })) {
                var primaryKey = cursor.primaryKey, key = "" + primaryKey;
                key === "[object ArrayBuffer]" && (key = "" + new Uint8Array(primaryKey)), hasOwn(set_1, key) || (set_1[key] = !0, fn(item, cursor, advance));
              }
            }, "union");
            return Promise.all([
              ctx.or._iterate(union, coreTrans),
              iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
            ]);
          } else
            return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
        }
        __name(iter, "iter");
        function iterate(cursorPromise, filter, fn, valueMapper) {
          var mappedFn = valueMapper ? function(x, c, a) {
            return fn(valueMapper(x), c, a);
          } : fn, wrappedFn = wrap(mappedFn);
          return cursorPromise.then(function(cursor) {
            if (cursor)
              return cursor.start(function() {
                var c = /* @__PURE__ */ __name(function() {
                  return cursor.continue();
                }, "c");
                (!filter || filter(cursor, function(advancer) {
                  return c = advancer;
                }, function(val) {
                  cursor.stop(val), c = nop;
                }, function(e) {
                  cursor.fail(e), c = nop;
                })) && wrappedFn(cursor.value, cursor, function(advancer) {
                  return c = advancer;
                }), c();
              });
          });
        }
        __name(iterate, "iterate");
        var Collection = (function() {
          function Collection2() {
          }
          return __name(Collection2, "Collection"), Collection2.prototype._read = function(fn, cb) {
            var ctx = this._ctx;
            return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
          }, Collection2.prototype._write = function(fn) {
            var ctx = this._ctx;
            return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
          }, Collection2.prototype._addAlgorithm = function(fn) {
            var ctx = this._ctx;
            ctx.algorithm = combine(ctx.algorithm, fn);
          }, Collection2.prototype._iterate = function(fn, coreTrans) {
            return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
          }, Collection2.prototype.clone = function(props2) {
            var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
            return props2 && extend(ctx, props2), rv._ctx = ctx, rv;
          }, Collection2.prototype.raw = function() {
            return this._ctx.valueMapper = null, this;
          }, Collection2.prototype.each = function(fn) {
            var ctx = this._ctx;
            return this._read(function(trans) {
              return iter(ctx, fn, trans, ctx.table.core);
            });
          }, Collection2.prototype.count = function(cb) {
            var _this = this;
            return this._read(function(trans) {
              var ctx = _this._ctx, coreTable = ctx.table.core;
              if (isPlainKeyRange(ctx, !0))
                return coreTable.count({
                  trans,
                  query: {
                    index: getIndexOrStore(ctx, coreTable.schema),
                    range: ctx.range
                  }
                }).then(function(count2) {
                  return Math.min(count2, ctx.limit);
                });
              var count = 0;
              return iter(ctx, function() {
                return ++count, !1;
              }, trans, coreTable).then(function() {
                return count;
              });
            }).then(cb);
          }, Collection2.prototype.sortBy = function(keyPath, cb) {
            var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
            function getval(obj, i) {
              return i ? getval(obj[parts[i]], i - 1) : obj[lastPart];
            }
            __name(getval, "getval");
            var order = this._ctx.dir === "next" ? 1 : -1;
            function sorter(a, b) {
              var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
              return cmp2(aVal, bVal) * order;
            }
            return __name(sorter, "sorter"), this.toArray(function(a) {
              return a.slice().sort(sorter);
            }).then(cb);
          }, Collection2.prototype.toArray = function(cb) {
            var _this = this;
            return this._read(function(trans) {
              var ctx = _this._ctx;
              if (isPlainKeyRange(ctx, !0) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper, index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                  trans,
                  limit: ctx.limit,
                  values: !0,
                  direction: ctx.dir === "prev" ? "prev" : void 0,
                  query: {
                    index,
                    range: ctx.range
                  }
                }).then(function(_a2) {
                  var result = _a2.result;
                  return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
              } else {
                var a_1 = [];
                return iter(ctx, function(item) {
                  return a_1.push(item);
                }, trans, ctx.table.core).then(function() {
                  return a_1;
                });
              }
            }, cb);
          }, Collection2.prototype.offset = function(offset) {
            var ctx = this._ctx;
            return offset <= 0 ? this : (ctx.offset += offset, isPlainKeyRange(ctx) ? addReplayFilter(ctx, function() {
              var offsetLeft = offset;
              return function(cursor, advance) {
                return offsetLeft === 0 ? !0 : offsetLeft === 1 ? (--offsetLeft, !1) : (advance(function() {
                  cursor.advance(offsetLeft), offsetLeft = 0;
                }), !1);
              };
            }) : addReplayFilter(ctx, function() {
              var offsetLeft = offset;
              return function() {
                return --offsetLeft < 0;
              };
            }), this);
          }, Collection2.prototype.limit = function(numRows) {
            return this._ctx.limit = Math.min(this._ctx.limit, numRows), addReplayFilter(this._ctx, function() {
              var rowsLeft = numRows;
              return function(cursor, advance, resolve) {
                return --rowsLeft <= 0 && advance(resolve), rowsLeft >= 0;
              };
            }, !0), this;
          }, Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
            return addFilter(this._ctx, function(cursor, advance, resolve) {
              return filterFunction(cursor.value) ? (advance(resolve), bIncludeStopEntry) : !0;
            }), this;
          }, Collection2.prototype.first = function(cb) {
            return this.limit(1).toArray(function(a) {
              return a[0];
            }).then(cb);
          }, Collection2.prototype.last = function(cb) {
            return this.reverse().first(cb);
          }, Collection2.prototype.filter = function(filterFunction) {
            return addFilter(this._ctx, function(cursor) {
              return filterFunction(cursor.value);
            }), addMatchFilter(this._ctx, filterFunction), this;
          }, Collection2.prototype.and = function(filter) {
            return this.filter(filter);
          }, Collection2.prototype.or = function(indexName) {
            return new this.db.WhereClause(this._ctx.table, indexName, this);
          }, Collection2.prototype.reverse = function() {
            return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
          }, Collection2.prototype.desc = function() {
            return this.reverse();
          }, Collection2.prototype.eachKey = function(cb) {
            var ctx = this._ctx;
            return ctx.keysOnly = !ctx.isMatch, this.each(function(val, cursor) {
              cb(cursor.key, cursor);
            });
          }, Collection2.prototype.eachUniqueKey = function(cb) {
            return this._ctx.unique = "unique", this.eachKey(cb);
          }, Collection2.prototype.eachPrimaryKey = function(cb) {
            var ctx = this._ctx;
            return ctx.keysOnly = !ctx.isMatch, this.each(function(val, cursor) {
              cb(cursor.primaryKey, cursor);
            });
          }, Collection2.prototype.keys = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function(item, cursor) {
              a.push(cursor.key);
            }).then(function() {
              return a;
            }).then(cb);
          }, Collection2.prototype.primaryKeys = function(cb) {
            var ctx = this._ctx;
            if (isPlainKeyRange(ctx, !0) && ctx.limit > 0)
              return this._read(function(trans) {
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                  trans,
                  values: !1,
                  limit: ctx.limit,
                  direction: ctx.dir === "prev" ? "prev" : void 0,
                  query: {
                    index,
                    range: ctx.range
                  }
                });
              }).then(function(_a2) {
                var result = _a2.result;
                return result;
              }).then(cb);
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function(item, cursor) {
              a.push(cursor.primaryKey);
            }).then(function() {
              return a;
            }).then(cb);
          }, Collection2.prototype.uniqueKeys = function(cb) {
            return this._ctx.unique = "unique", this.keys(cb);
          }, Collection2.prototype.firstKey = function(cb) {
            return this.limit(1).keys(function(a) {
              return a[0];
            }).then(cb);
          }, Collection2.prototype.lastKey = function(cb) {
            return this.reverse().firstKey(cb);
          }, Collection2.prototype.distinct = function() {
            var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
            if (!idx || !idx.multi)
              return this;
            var set2 = {};
            return addFilter(this._ctx, function(cursor) {
              var strKey = cursor.primaryKey.toString(), found = hasOwn(set2, strKey);
              return set2[strKey] = !0, !found;
            }), this;
          }, Collection2.prototype.modify = function(changes) {
            var _this = this, ctx = this._ctx;
            return this._write(function(trans) {
              var modifyer;
              typeof changes == "function" ? modifyer = changes : modifyer = /* @__PURE__ */ __name(function(item) {
                return applyUpdateSpec(item, changes);
              }, "modifyer");
              var coreTable = ctx.table.core, _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey, limit = 200, modifyChunkSize = _this.db._options.modifyChunkSize;
              modifyChunkSize && (typeof modifyChunkSize == "object" ? limit = modifyChunkSize[coreTable.name] || modifyChunkSize["*"] || 200 : limit = modifyChunkSize);
              var totalFailures = [], successCount = 0, failedKeys = [], applyMutateResult = /* @__PURE__ */ __name(function(expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for (var _i = 0, _a3 = keys(failures); _i < _a3.length; _i++) {
                  var pos = _a3[_i];
                  totalFailures.push(failures[pos]);
                }
              }, "applyMutateResult"), isUnconditionalDelete = changes === deleteCallback;
              return _this.clone().primaryKeys().then(function(keys2) {
                var criteria = isPlainKeyRange(ctx) && ctx.limit === 1 / 0 && (typeof changes != "function" || isUnconditionalDelete) && {
                  index: ctx.index,
                  range: ctx.range
                }, nextChunk = /* @__PURE__ */ __name(function(offset) {
                  var count = Math.min(limit, keys2.length - offset), keysInChunk = keys2.slice(offset, offset + count);
                  return (isUnconditionalDelete ? Promise.resolve([]) : coreTable.getMany({
                    trans,
                    keys: keysInChunk,
                    cache: "immutable"
                  })).then(function(values) {
                    var addValues = [], putValues = [], putKeys = outbound ? [] : null, deleteKeys = isUnconditionalDelete ? keysInChunk : [];
                    if (!isUnconditionalDelete)
                      for (var i = 0; i < count; ++i) {
                        var origValue = values[i], ctx_1 = {
                          value: deepClone(origValue),
                          primKey: keys2[offset + i]
                        };
                        modifyer.call(ctx_1, ctx_1.value, ctx_1) !== !1 && (ctx_1.value == null ? deleteKeys.push(keys2[offset + i]) : !outbound && cmp2(extractKey(origValue), extractKey(ctx_1.value)) !== 0 ? (deleteKeys.push(keys2[offset + i]), addValues.push(ctx_1.value)) : (putValues.push(ctx_1.value), outbound && putKeys.push(keys2[offset + i])));
                      }
                    return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
                      for (var pos in res.failures)
                        deleteKeys.splice(parseInt(pos), 1);
                      applyMutateResult(addValues.length, res);
                    })).then(function() {
                      return (putValues.length > 0 || criteria && typeof changes == "object") && coreTable.mutate({
                        trans,
                        type: "put",
                        keys: putKeys,
                        values: putValues,
                        criteria,
                        changeSpec: typeof changes != "function" && changes,
                        isAdditionalChunk: offset > 0
                      }).then(function(res) {
                        return applyMutateResult(putValues.length, res);
                      });
                    }).then(function() {
                      return (deleteKeys.length > 0 || criteria && isUnconditionalDelete) && coreTable.mutate({
                        trans,
                        type: "delete",
                        keys: deleteKeys,
                        criteria,
                        isAdditionalChunk: offset > 0
                      }).then(function(res) {
                        return builtInDeletionTrigger(ctx.table, deleteKeys, res);
                      }).then(function(res) {
                        return applyMutateResult(deleteKeys.length, res);
                      });
                    }).then(function() {
                      return keys2.length > offset + count && nextChunk(offset + limit);
                    });
                  });
                }, "nextChunk");
                return nextChunk(0).then(function() {
                  if (totalFailures.length > 0)
                    throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                  return keys2.length;
                });
              });
            });
          }, Collection2.prototype.delete = function() {
            var ctx = this._ctx, range = ctx.range;
            return isPlainKeyRange(ctx) && !ctx.table.schema.yProps && (ctx.isPrimKey || range.type === 3) ? this._write(function(trans) {
              var primaryKey = ctx.table.core.schema.primaryKey, coreRange = range;
              return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
                return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a2) {
                  var failures = _a2.failures, numFailures = _a2.numFailures;
                  if (numFailures)
                    throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                      return failures[pos];
                    }), count - numFailures);
                  return count - numFailures;
                });
              });
            }) : this.modify(deleteCallback);
          }, Collection2;
        })(), deleteCallback = /* @__PURE__ */ __name(function(value, ctx) {
          return ctx.value = null;
        }, "deleteCallback");
        function createCollectionConstructor(db2) {
          return makeClassConstructor(Collection.prototype, /* @__PURE__ */ __name(function(whereClause, keyRangeGenerator) {
            this.db = db2;
            var keyRange = AnyRange, error = null;
            if (keyRangeGenerator)
              try {
                keyRange = keyRangeGenerator();
              } catch (ex) {
                error = ex;
              }
            var whereCtx = whereClause._ctx, table = whereCtx.table, readingHook = table.hook.reading.fire;
            this._ctx = {
              table,
              index: whereCtx.index,
              isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
              range: keyRange,
              keysOnly: !1,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error,
              or: whereCtx.or,
              valueMapper: readingHook !== mirror ? readingHook : null
            };
          }, "Collection"));
        }
        __name(createCollectionConstructor, "createCollectionConstructor");
        function simpleCompare(a, b) {
          return a < b ? -1 : a === b ? 0 : 1;
        }
        __name(simpleCompare, "simpleCompare");
        function simpleCompareReverse(a, b) {
          return a > b ? -1 : a === b ? 0 : 1;
        }
        __name(simpleCompareReverse, "simpleCompareReverse");
        function fail(collectionOrWhereClause, err, T) {
          var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
          return collection._ctx.error = T ? new T(err) : new TypeError(err), collection;
        }
        __name(fail, "fail");
        function emptyCollection(whereClause) {
          var collection = new whereClause.Collection(whereClause, function() {
            return rangeEqual("");
          });
          return collection._addAlgorithm(function() {
            return !1;
          }), collection;
        }
        __name(emptyCollection, "emptyCollection");
        function upperFactory(dir) {
          return dir === "next" ? function(s) {
            return s.toUpperCase();
          } : function(s) {
            return s.toLowerCase();
          };
        }
        __name(upperFactory, "upperFactory");
        function lowerFactory(dir) {
          return dir === "next" ? function(s) {
            return s.toLowerCase();
          } : function(s) {
            return s.toUpperCase();
          };
        }
        __name(lowerFactory, "lowerFactory");
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp3, dir) {
          for (var length = Math.min(key.length, lowerNeedle.length), llp = -1, i = 0; i < length; ++i) {
            var lwrKeyChar = lowerKey[i];
            if (lwrKeyChar !== lowerNeedle[i])
              return cmp3(key[i], upperNeedle[i]) < 0 ? key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1) : cmp3(key[i], lowerNeedle[i]) < 0 ? key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1) : llp >= 0 ? key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1) : null;
            cmp3(key[i], lwrKeyChar) < 0 && (llp = i);
          }
          return length < lowerNeedle.length && dir === "next" ? key + upperNeedle.substr(key.length) : length < key.length && dir === "prev" ? key.substr(0, upperNeedle.length) : llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
        }
        __name(nextCasing, "nextCasing");
        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
          var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
          if (!needles.every(function(s) {
            return typeof s == "string";
          }))
            return fail(whereClause, STRING_EXPECTED);
          function initDirection(dir) {
            upper = upperFactory(dir), lower = lowerFactory(dir), compare = dir === "next" ? simpleCompare : simpleCompareReverse;
            var needleBounds = needles.map(function(needle) {
              return { lower: lower(needle), upper: upper(needle) };
            }).sort(function(a, b) {
              return compare(a.lower, b.lower);
            });
            upperNeedles = needleBounds.map(function(nb) {
              return nb.upper;
            }), lowerNeedles = needleBounds.map(function(nb) {
              return nb.lower;
            }), direction = dir, nextKeySuffix = dir === "next" ? "" : suffix;
          }
          __name(initDirection, "initDirection"), initDirection("next");
          var c = new whereClause.Collection(whereClause, function() {
            return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
          });
          c._ondirectionchange = function(direction2) {
            initDirection(direction2);
          };
          var firstPossibleNeedle = 0;
          return c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            if (typeof key != "string")
              return !1;
            var lowerKey = lower(key);
            if (match(lowerKey, lowerNeedles, firstPossibleNeedle))
              return !0;
            for (var lowestPossibleCasing = null, i = firstPossibleNeedle; i < needlesLen; ++i) {
              var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
              casing === null && lowestPossibleCasing === null ? firstPossibleNeedle = i + 1 : (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) && (lowestPossibleCasing = casing);
            }
            return advance(lowestPossibleCasing !== null ? function() {
              cursor.continue(lowestPossibleCasing + nextKeySuffix);
            } : resolve), !1;
          }), c;
        }
        __name(addIgnoreCaseAlgorithm, "addIgnoreCaseAlgorithm");
        function createRange(lower, upper, lowerOpen, upperOpen) {
          return {
            type: 2,
            lower,
            upper,
            lowerOpen,
            upperOpen
          };
        }
        __name(createRange, "createRange");
        function rangeEqual(value) {
          return {
            type: 1,
            lower: value,
            upper: value
          };
        }
        __name(rangeEqual, "rangeEqual");
        var WhereClause = (function() {
          function WhereClause2() {
          }
          return __name(WhereClause2, "WhereClause"), Object.defineProperty(WhereClause2.prototype, "Collection", {
            get: /* @__PURE__ */ __name(function() {
              return this._ctx.table.db.Collection;
            }, "get"),
            enumerable: !1,
            configurable: !0
          }), WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
            includeLower = includeLower !== !1, includeUpper = includeUpper === !0;
            try {
              return this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper) ? emptyCollection(this) : new this.Collection(this, function() {
                return createRange(lower, upper, !includeLower, !includeUpper);
              });
            } catch {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
          }, WhereClause2.prototype.equals = function(value) {
            return value == null ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
              return rangeEqual(value);
            });
          }, WhereClause2.prototype.above = function(value) {
            return value == null ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
              return createRange(value, void 0, !0);
            });
          }, WhereClause2.prototype.aboveOrEqual = function(value) {
            return value == null ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
              return createRange(value, void 0, !1);
            });
          }, WhereClause2.prototype.below = function(value) {
            return value == null ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
              return createRange(void 0, value, !1, !0);
            });
          }, WhereClause2.prototype.belowOrEqual = function(value) {
            return value == null ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
              return createRange(void 0, value);
            });
          }, WhereClause2.prototype.startsWith = function(str) {
            return typeof str != "string" ? fail(this, STRING_EXPECTED) : this.between(str, str + maxString, !0, !0);
          }, WhereClause2.prototype.startsWithIgnoreCase = function(str) {
            return str === "" ? this.startsWith(str) : addIgnoreCaseAlgorithm(this, function(x, a) {
              return x.indexOf(a[0]) === 0;
            }, [str], maxString);
          }, WhereClause2.prototype.equalsIgnoreCase = function(str) {
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return x === a[0];
            }, [str], "");
          }, WhereClause2.prototype.anyOfIgnoreCase = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            return set2.length === 0 ? emptyCollection(this) : addIgnoreCaseAlgorithm(this, function(x, a) {
              return a.indexOf(x) !== -1;
            }, set2, "");
          }, WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            return set2.length === 0 ? emptyCollection(this) : addIgnoreCaseAlgorithm(this, function(x, a) {
              return a.some(function(n) {
                return x.indexOf(n) === 0;
              });
            }, set2, maxString);
          }, WhereClause2.prototype.anyOf = function() {
            var _this = this, set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments), compare = this._cmp;
            try {
              set2.sort(compare);
            } catch {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            if (set2.length === 0)
              return emptyCollection(this);
            var c = new this.Collection(this, function() {
              return createRange(set2[0], set2[set2.length - 1]);
            });
            c._ondirectionchange = function(direction) {
              compare = direction === "next" ? _this._ascending : _this._descending, set2.sort(compare);
            };
            var i = 0;
            return c._addAlgorithm(function(cursor, advance, resolve) {
              for (var key = cursor.key; compare(key, set2[i]) > 0; )
                if (++i, i === set2.length)
                  return advance(resolve), !1;
              return compare(key, set2[i]) === 0 ? !0 : (advance(function() {
                cursor.continue(set2[i]);
              }), !1);
            }), c;
          }, WhereClause2.prototype.notEqual = function(value) {
            return this.inAnyRange([
              [minKey, value],
              [value, this.db._maxKey]
            ], { includeLowers: !1, includeUppers: !1 });
          }, WhereClause2.prototype.noneOf = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set2.length === 0)
              return new this.Collection(this);
            try {
              set2.sort(this._ascending);
            } catch {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            var ranges = set2.reduce(function(res, val) {
              return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
            }, null);
            return ranges.push([set2[set2.length - 1], this.db._maxKey]), this.inAnyRange(ranges, {
              includeLowers: !1,
              includeUppers: !1
            });
          }, WhereClause2.prototype.inAnyRange = function(ranges, options) {
            var _this = this, cmp3 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
            if (ranges.length === 0)
              return emptyCollection(this);
            if (!ranges.every(function(range) {
              return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
            }))
              return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
            var includeLowers = !options || options.includeLowers !== !1, includeUppers = options && options.includeUppers === !0;
            function addRange2(ranges2, newRange) {
              for (var i = 0, l = ranges2.length; i < l; ++i) {
                var range = ranges2[i];
                if (cmp3(newRange[0], range[1]) < 0 && cmp3(newRange[1], range[0]) > 0) {
                  range[0] = min(range[0], newRange[0]), range[1] = max(range[1], newRange[1]);
                  break;
                }
              }
              return i === l && ranges2.push(newRange), ranges2;
            }
            __name(addRange2, "addRange");
            var sortDirection = ascending;
            function rangeSorter(a, b) {
              return sortDirection(a[0], b[0]);
            }
            __name(rangeSorter, "rangeSorter");
            var set2;
            try {
              set2 = ranges.reduce(addRange2, []), set2.sort(rangeSorter);
            } catch {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            var rangePos = 0, keyIsBeyondCurrentEntry = includeUppers ? function(key) {
              return ascending(key, set2[rangePos][1]) > 0;
            } : function(key) {
              return ascending(key, set2[rangePos][1]) >= 0;
            }, keyIsBeforeCurrentEntry = includeLowers ? function(key) {
              return descending(key, set2[rangePos][0]) > 0;
            } : function(key) {
              return descending(key, set2[rangePos][0]) >= 0;
            };
            function keyWithinCurrentRange(key) {
              return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
            }
            __name(keyWithinCurrentRange, "keyWithinCurrentRange");
            var checkKey = keyIsBeyondCurrentEntry, c = new this.Collection(this, function() {
              return createRange(set2[0][0], set2[set2.length - 1][1], !includeLowers, !includeUppers);
            });
            return c._ondirectionchange = function(direction) {
              direction === "next" ? (checkKey = keyIsBeyondCurrentEntry, sortDirection = ascending) : (checkKey = keyIsBeforeCurrentEntry, sortDirection = descending), set2.sort(rangeSorter);
            }, c._addAlgorithm(function(cursor, advance, resolve) {
              for (var key = cursor.key; checkKey(key); )
                if (++rangePos, rangePos === set2.length)
                  return advance(resolve), !1;
              return keyWithinCurrentRange(key) ? !0 : (_this._cmp(key, set2[rangePos][1]) === 0 || _this._cmp(key, set2[rangePos][0]) === 0 || advance(function() {
                sortDirection === ascending ? cursor.continue(set2[rangePos][0]) : cursor.continue(set2[rangePos][1]);
              }), !1);
            }), c;
          }, WhereClause2.prototype.startsWithAnyOf = function() {
            var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            return set2.every(function(s) {
              return typeof s == "string";
            }) ? set2.length === 0 ? emptyCollection(this) : this.inAnyRange(set2.map(function(str) {
              return [str, str + maxString];
            })) : fail(this, "startsWithAnyOf() only works with strings");
          }, WhereClause2;
        })();
        function createWhereClauseConstructor(db2) {
          return makeClassConstructor(WhereClause.prototype, /* @__PURE__ */ __name(function(table, index, orCollection) {
            if (this.db = db2, this._ctx = {
              table,
              index: index === ":id" ? null : index,
              or: orCollection
            }, this._cmp = this._ascending = cmp2, this._descending = function(a, b) {
              return cmp2(b, a);
            }, this._max = function(a, b) {
              return cmp2(a, b) > 0 ? a : b;
            }, this._min = function(a, b) {
              return cmp2(a, b) < 0 ? a : b;
            }, this._IDBKeyRange = db2._deps.IDBKeyRange, !this._IDBKeyRange)
              throw new exceptions.MissingAPI();
          }, "WhereClause"));
        }
        __name(createWhereClauseConstructor, "createWhereClauseConstructor");
        function eventRejectHandler(reject) {
          return wrap(function(event) {
            return preventDefault(event), reject(event.target.error), !1;
          });
        }
        __name(eventRejectHandler, "eventRejectHandler");
        function preventDefault(event) {
          event.stopPropagation && event.stopPropagation(), event.preventDefault && event.preventDefault();
        }
        __name(preventDefault, "preventDefault");
        var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated", STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1", globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME), Transaction = (function() {
          function Transaction2() {
          }
          return __name(Transaction2, "Transaction"), Transaction2.prototype._lock = function() {
            return assert(!PSD.global), ++this._reculock, this._reculock === 1 && !PSD.global && (PSD.lockOwnerFor = this), this;
          }, Transaction2.prototype._unlock = function() {
            if (assert(!PSD.global), --this._reculock === 0)
              for (PSD.global || (PSD.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                  usePSD(fnAndPSD[1], fnAndPSD[0]);
                } catch {
                }
              }
            return this;
          }, Transaction2.prototype._locked = function() {
            return this._reculock && PSD.lockOwnerFor !== this;
          }, Transaction2.prototype.create = function(idbtrans) {
            var _this = this;
            if (!this.mode)
              return this;
            var idbdb = this.db.idbdb, dbOpenError = this.db._state.dbOpenError;
            if (assert(!this.idbtrans), !idbtrans && !idbdb)
              switch (dbOpenError && dbOpenError.name) {
                case "DatabaseClosedError":
                  throw new exceptions.DatabaseClosed(dbOpenError);
                case "MissingAPIError":
                  throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                default:
                  throw new exceptions.OpenFailed(dbOpenError);
              }
            if (!this.active)
              throw new exceptions.TransactionInactive();
            return assert(this._completion._state === null), idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, {
              durability: this.chromeTransactionDurability
            })), idbtrans.onerror = wrap(function(ev) {
              preventDefault(ev), _this._reject(idbtrans.error);
            }), idbtrans.onabort = wrap(function(ev) {
              preventDefault(ev), _this.active && _this._reject(new exceptions.Abort(idbtrans.error)), _this.active = !1, _this.on("abort").fire(ev);
            }), idbtrans.oncomplete = wrap(function() {
              _this.active = !1, _this._resolve(), "mutatedParts" in idbtrans && globalEvents.storagemutated.fire(idbtrans.mutatedParts);
            }), this;
          }, Transaction2.prototype._promise = function(mode, fn, bWriteLock) {
            var _this = this;
            if (mode === "readwrite" && this.mode !== "readwrite")
              return rejection(new exceptions.ReadOnly("Transaction is readonly"));
            if (!this.active)
              return rejection(new exceptions.TransactionInactive());
            if (this._locked())
              return new DexiePromise(function(resolve, reject) {
                _this._blockedFuncs.push([
                  function() {
                    _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                  },
                  PSD
                ]);
              });
            if (bWriteLock)
              return newScope(function() {
                var p2 = new DexiePromise(function(resolve, reject) {
                  _this._lock();
                  var rv = fn(resolve, reject, _this);
                  rv && rv.then && rv.then(resolve, reject);
                });
                return p2.finally(function() {
                  return _this._unlock();
                }), p2._lib = !0, p2;
              });
            var p = new DexiePromise(function(resolve, reject) {
              var rv = fn(resolve, reject, _this);
              rv && rv.then && rv.then(resolve, reject);
            });
            return p._lib = !0, p;
          }, Transaction2.prototype._root = function() {
            return this.parent ? this.parent._root() : this;
          }, Transaction2.prototype.waitFor = function(promiseLike) {
            var root = this._root(), promise = DexiePromise.resolve(promiseLike);
            if (root._waitingFor)
              root._waitingFor = root._waitingFor.then(function() {
                return promise;
              });
            else {
              root._waitingFor = promise, root._waitingQueue = [];
              var store = root.idbtrans.objectStore(root.storeNames[0]);
              (/* @__PURE__ */ __name((function spin() {
                for (++root._spinCount; root._waitingQueue.length; )
                  root._waitingQueue.shift()();
                root._waitingFor && (store.get(-1 / 0).onsuccess = spin);
              }), "spin"))();
            }
            var currentWaitPromise = root._waitingFor;
            return new DexiePromise(function(resolve, reject) {
              promise.then(function(res) {
                return root._waitingQueue.push(wrap(resolve.bind(null, res)));
              }, function(err) {
                return root._waitingQueue.push(wrap(reject.bind(null, err)));
              }).finally(function() {
                root._waitingFor === currentWaitPromise && (root._waitingFor = null);
              });
            });
          }, Transaction2.prototype.abort = function() {
            this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new exceptions.Abort()));
          }, Transaction2.prototype.table = function(tableName) {
            var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
            if (hasOwn(memoizedTables, tableName))
              return memoizedTables[tableName];
            var tableSchema = this.schema[tableName];
            if (!tableSchema)
              throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
            return transactionBoundTable.core = this.db.core.table(tableName), memoizedTables[tableName] = transactionBoundTable, transactionBoundTable;
          }, Transaction2;
        })();
        function createTransactionConstructor(db2) {
          return makeClassConstructor(Transaction.prototype, /* @__PURE__ */ __name(function(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
            var _this = this;
            mode !== "readonly" && storeNames.forEach(function(storeName) {
              var _a2, yProps = (_a2 = dbschema[storeName]) === null || _a2 === void 0 ? void 0 : _a2.yProps;
              yProps && (storeNames = storeNames.concat(yProps.map(function(p) {
                return p.updatesTable;
              })));
            }), this.db = db2, this.mode = mode, this.storeNames = storeNames, this.schema = dbschema, this.chromeTransactionDurability = chromeTransactionDurability, this.idbtrans = null, this.on = Events(this, "complete", "error", "abort"), this.parent = parent || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new DexiePromise(function(resolve, reject) {
              _this._resolve = resolve, _this._reject = reject;
            }), this._completion.then(function() {
              _this.active = !1, _this.on.complete.fire();
            }, function(e) {
              var wasActive = _this.active;
              return _this.active = !1, _this.on.error.fire(e), _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort(), rejection(e);
            });
          }, "Transaction"));
        }
        __name(createTransactionConstructor, "createTransactionConstructor");
        function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey, type2) {
          return {
            name,
            keyPath,
            unique,
            multi,
            auto,
            compound,
            src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath),
            type: type2
          };
        }
        __name(createIndexSpec, "createIndexSpec");
        function nameFromKeyPath(keyPath) {
          return typeof keyPath == "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
        }
        __name(nameFromKeyPath, "nameFromKeyPath");
        function createTableSchema(name, primKey, indexes) {
          return {
            name,
            primKey,
            indexes,
            mappedClass: null,
            idxByName: arrayToObject(indexes, function(index) {
              return [index.name, index];
            })
          };
        }
        __name(createTableSchema, "createTableSchema");
        function safariMultiStoreFix(storeNames) {
          return storeNames.length === 1 ? storeNames[0] : storeNames;
        }
        __name(safariMultiStoreFix, "safariMultiStoreFix");
        var getMaxKey = /* @__PURE__ */ __name(function(IdbKeyRange) {
          try {
            return IdbKeyRange.only([[]]), getMaxKey = /* @__PURE__ */ __name(function() {
              return [[]];
            }, "getMaxKey"), [[]];
          } catch {
            return getMaxKey = /* @__PURE__ */ __name(function() {
              return maxString;
            }, "getMaxKey"), maxString;
          }
        }, "getMaxKey");
        function getKeyExtractor(keyPath) {
          return keyPath == null ? function() {
          } : typeof keyPath == "string" ? getSinglePathKeyExtractor(keyPath) : function(obj) {
            return getByKeyPath(obj, keyPath);
          };
        }
        __name(getKeyExtractor, "getKeyExtractor");
        function getSinglePathKeyExtractor(keyPath) {
          var split = keyPath.split(".");
          return split.length === 1 ? function(obj) {
            return obj[keyPath];
          } : function(obj) {
            return getByKeyPath(obj, keyPath);
          };
        }
        __name(getSinglePathKeyExtractor, "getSinglePathKeyExtractor");
        function arrayify(arrayLike) {
          return [].slice.call(arrayLike);
        }
        __name(arrayify, "arrayify");
        var _id_counter = 0;
        function getKeyPathAlias(keyPath) {
          return keyPath == null ? ":id" : typeof keyPath == "string" ? keyPath : "[".concat(keyPath.join("+"), "]");
        }
        __name(getKeyPathAlias, "getKeyPathAlias");
        function createDBCore(db2, IdbKeyRange, tmpTrans) {
          function extractSchema(db3, trans) {
            var tables2 = arrayify(db3.objectStoreNames), tempStore = tables2.length > 0 ? trans.objectStore(tables2[0]) : {};
            return {
              schema: {
                name: db3.name,
                tables: tables2.map(function(table) {
                  return trans.objectStore(table);
                }).map(function(store) {
                  var keyPath = store.keyPath, autoIncrement = store.autoIncrement, compound = isArray(keyPath), outbound = keyPath == null, indexByKeyPath = {}, result = {
                    name: store.name,
                    primaryKey: {
                      name: null,
                      isPrimaryKey: !0,
                      outbound,
                      compound,
                      keyPath,
                      autoIncrement,
                      unique: !0,
                      extractKey: getKeyExtractor(keyPath)
                    },
                    indexes: arrayify(store.indexNames).map(function(indexName) {
                      return store.index(indexName);
                    }).map(function(index) {
                      var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath, compound2 = isArray(keyPath2), result2 = {
                        name,
                        compound: compound2,
                        keyPath: keyPath2,
                        unique,
                        multiEntry,
                        extractKey: getKeyExtractor(keyPath2)
                      };
                      return indexByKeyPath[getKeyPathAlias(keyPath2)] = result2, result2;
                    }),
                    getIndexByKeyPath: /* @__PURE__ */ __name(function(keyPath2) {
                      return indexByKeyPath[getKeyPathAlias(keyPath2)];
                    }, "getIndexByKeyPath")
                  };
                  return indexByKeyPath[":id"] = result.primaryKey, keyPath != null && (indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey), result;
                })
              },
              hasGetAll: tables2.length > 0 && "getAll" in tempStore && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
              hasIdb3Features: "getAllRecords" in tempStore
            };
          }
          __name(extractSchema, "extractSchema");
          function makeIDBKeyRange(range) {
            if (range.type === 3)
              return null;
            if (range.type === 4)
              throw new Error("Cannot convert never type to IDBKeyRange");
            var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen, idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
            return idbRange;
          }
          __name(makeIDBKeyRange, "makeIDBKeyRange");
          function createDbCoreTable(tableSchema) {
            var tableName = tableSchema.name;
            function mutate(_a3) {
              var trans = _a3.trans, type2 = _a3.type, keys2 = _a3.keys, values = _a3.values, range = _a3.range;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName), outbound = store.keyPath == null, isAddOrPut = type2 === "put" || type2 === "add";
                if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
                  throw new Error("Invalid operation type: " + type2);
                var length = (keys2 || values || { length: 1 }).length;
                if (keys2 && values && keys2.length !== values.length)
                  throw new Error("Given keys array must have same length as given values array.");
                if (length === 0)
                  return resolve({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: void 0
                  });
                var req, reqs = [], failures = [], numFailures = 0, errorHandler = /* @__PURE__ */ __name(function(event) {
                  ++numFailures, preventDefault(event);
                }, "errorHandler");
                if (type2 === "deleteRange") {
                  if (range.type === 4)
                    return resolve({
                      numFailures,
                      failures,
                      results: [],
                      lastResult: void 0
                    });
                  range.type === 3 ? reqs.push(req = store.clear()) : reqs.push(req = store.delete(makeIDBKeyRange(range)));
                } else {
                  var _a4 = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null], args1 = _a4[0], args2 = _a4[1];
                  if (isAddOrPut)
                    for (var i = 0; i < length; ++i)
                      reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i])), req.onerror = errorHandler;
                  else
                    for (var i = 0; i < length; ++i)
                      reqs.push(req = store[type2](args1[i])), req.onerror = errorHandler;
                }
                var done = /* @__PURE__ */ __name(function(event) {
                  var lastResult = event.target.result;
                  reqs.forEach(function(req2, i2) {
                    return req2.error != null && (failures[i2] = req2.error);
                  }), resolve({
                    numFailures,
                    failures,
                    results: type2 === "delete" ? keys2 : reqs.map(function(req2) {
                      return req2.result;
                    }),
                    lastResult
                  });
                }, "done");
                req.onerror = function(event) {
                  errorHandler(event), done(event);
                }, req.onsuccess = done;
              });
            }
            __name(mutate, "mutate");
            function openCursor2(_a3) {
              var trans = _a3.trans, values = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var index = query2.index, range = query2.range, store = trans.objectStore(tableName), source = index.isPrimaryKey ? store : store.index(index.name), direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next", req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject), req.onsuccess = wrap(function(ev) {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  cursor.___id = ++_id_counter, cursor.done = !1;
                  var _cursorContinue = cursor.continue.bind(cursor), _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                  _cursorContinuePrimaryKey && (_cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor));
                  var _cursorAdvance = cursor.advance.bind(cursor), doThrowCursorIsNotStarted = /* @__PURE__ */ __name(function() {
                    throw new Error("Cursor not started");
                  }, "doThrowCursorIsNotStarted"), doThrowCursorIsStopped = /* @__PURE__ */ __name(function() {
                    throw new Error("Cursor not stopped");
                  }, "doThrowCursorIsStopped");
                  cursor.trans = trans, cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted, cursor.fail = wrap(reject), cursor.next = function() {
                    var _this = this, gotOne = 1;
                    return this.start(function() {
                      return gotOne-- ? _this.continue() : _this.stop();
                    }).then(function() {
                      return _this;
                    });
                  }, cursor.start = function(callback) {
                    var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                      resolveIteration = wrap(resolveIteration), req.onerror = eventRejectHandler(rejectIteration), cursor.fail = rejectIteration, cursor.stop = function(value) {
                        cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped, resolveIteration(value);
                      };
                    }), guardedCallback = /* @__PURE__ */ __name(function() {
                      if (req.result)
                        try {
                          callback();
                        } catch (err) {
                          cursor.fail(err);
                        }
                      else
                        cursor.done = !0, cursor.start = function() {
                          throw new Error("Cursor behind last entry");
                        }, cursor.stop();
                    }, "guardedCallback");
                    return req.onsuccess = wrap(function(ev2) {
                      req.onsuccess = guardedCallback, guardedCallback();
                    }), cursor.continue = _cursorContinue, cursor.continuePrimaryKey = _cursorContinuePrimaryKey, cursor.advance = _cursorAdvance, guardedCallback(), iterationPromise;
                  }, resolve(cursor);
                }, reject);
              });
            }
            __name(openCursor2, "openCursor");
            function query(hasGetAll2, hasIdb3Features2) {
              return function(request) {
                return new Promise(function(resolve, reject) {
                  var _a3;
                  resolve = wrap(resolve);
                  var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query, direction = (_a3 = request.direction) !== null && _a3 !== void 0 ? _a3 : "next", nonInfinitLimit = limit === 1 / 0 ? void 0 : limit, index = query2.index, range = query2.range, store = trans.objectStore(tableName), source = index.isPrimaryKey ? store : store.index(index.name), idbKeyRange = makeIDBKeyRange(range);
                  if (limit === 0)
                    return resolve({ result: [] });
                  if (hasIdb3Features2) {
                    var options = {
                      query: idbKeyRange,
                      count: nonInfinitLimit,
                      direction
                    }, req = values ? source.getAll(options) : source.getAllKeys(options);
                    req.onsuccess = function(event) {
                      return resolve({ result: event.target.result });
                    }, req.onerror = eventRejectHandler(reject);
                  } else if (hasGetAll2 && direction === "next") {
                    var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                    req.onsuccess = function(event) {
                      return resolve({ result: event.target.result });
                    }, req.onerror = eventRejectHandler(reject);
                  } else {
                    var count_1 = 0, req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange, direction) : source.openKeyCursor(idbKeyRange, direction), result_1 = [];
                    req_1.onsuccess = function() {
                      var cursor = req_1.result;
                      if (!cursor)
                        return resolve({ result: result_1 });
                      if (result_1.push(values ? cursor.value : cursor.primaryKey), ++count_1 === limit)
                        return resolve({ result: result_1 });
                      cursor.continue();
                    }, req_1.onerror = eventRejectHandler(reject);
                  }
                });
              };
            }
            return __name(query, "query"), {
              name: tableName,
              schema: tableSchema,
              mutate,
              getMany: /* @__PURE__ */ __name(function(_a3) {
                var trans = _a3.trans, keys2 = _a3.keys;
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  for (var store = trans.objectStore(tableName), length = keys2.length, result = new Array(length), keyCount = 0, callbackCount = 0, req, successHandler = /* @__PURE__ */ __name(function(event) {
                    var req2 = event.target;
                    (result[req2._pos] = req2.result) != null, ++callbackCount === keyCount && resolve(result);
                  }, "successHandler"), errorHandler = eventRejectHandler(reject), i = 0; i < length; ++i) {
                    var key = keys2[i];
                    key != null && (req = store.get(keys2[i]), req._pos = i, req.onsuccess = successHandler, req.onerror = errorHandler, ++keyCount);
                  }
                  keyCount === 0 && resolve(result);
                });
              }, "getMany"),
              get: /* @__PURE__ */ __name(function(_a3) {
                var trans = _a3.trans, key = _a3.key;
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var store = trans.objectStore(tableName), req = store.get(key);
                  req.onsuccess = function(event) {
                    return resolve(event.target.result);
                  }, req.onerror = eventRejectHandler(reject);
                });
              }, "get"),
              query: query(hasGetAll, hasIdb3Features),
              openCursor: openCursor2,
              count: /* @__PURE__ */ __name(function(_a3) {
                var query2 = _a3.query, trans = _a3.trans, index = query2.index, range = query2.range;
                return new Promise(function(resolve, reject) {
                  var store = trans.objectStore(tableName), source = index.isPrimaryKey ? store : store.index(index.name), idbKeyRange = makeIDBKeyRange(range), req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                  req.onsuccess = wrap(function(ev) {
                    return resolve(ev.target.result);
                  }), req.onerror = eventRejectHandler(reject);
                });
              }, "count")
            };
          }
          __name(createDbCoreTable, "createDbCoreTable");
          var _a2 = extractSchema(db2, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll, hasIdb3Features = _a2.hasIdb3Features, tables = schema.tables.map(function(tableSchema) {
            return createDbCoreTable(tableSchema);
          }), tableMap = {};
          return tables.forEach(function(table) {
            return tableMap[table.name] = table;
          }), {
            stack: "dbcore",
            transaction: db2.transaction.bind(db2),
            table: /* @__PURE__ */ __name(function(name) {
              var result = tableMap[name];
              if (!result)
                throw new Error("Table '".concat(name, "' not found"));
              return tableMap[name];
            }, "table"),
            MIN_KEY: -1 / 0,
            MAX_KEY: getMaxKey(IdbKeyRange),
            schema
          };
        }
        __name(createDBCore, "createDBCore");
        function createMiddlewareStack(stackImpl, middlewares) {
          return middlewares.reduce(function(down, _a2) {
            var create = _a2.create;
            return __assign(__assign({}, down), create(down));
          }, stackImpl);
        }
        __name(createMiddlewareStack, "createMiddlewareStack");
        function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
          var IDBKeyRange = _a2.IDBKeyRange;
          _a2.indexedDB;
          var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
          return {
            dbcore
          };
        }
        __name(createMiddlewareStacks, "createMiddlewareStacks");
        function generateMiddlewareStacks(db2, tmpTrans) {
          var idbdb = tmpTrans.db, stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
          db2.core = stacks.dbcore, db2.tables.forEach(function(table) {
            var tableName = table.name;
            db2.core.schema.tables.some(function(tbl) {
              return tbl.name === tableName;
            }) && (table.core = db2.core.table(tableName), db2[tableName] instanceof db2.Table && (db2[tableName].core = table.core));
          });
        }
        __name(generateMiddlewareStacks, "generateMiddlewareStacks");
        function setApiOnPlace(db2, objs, tableNames, dbschema) {
          tableNames.forEach(function(tableName) {
            var schema = dbschema[tableName];
            objs.forEach(function(obj) {
              var propDesc = getPropertyDescriptor(obj, tableName);
              (!propDesc || "value" in propDesc && propDesc.value === void 0) && (obj === db2.Transaction.prototype || obj instanceof db2.Transaction ? setProp(obj, tableName, {
                get: /* @__PURE__ */ __name(function() {
                  return this.table(tableName);
                }, "get"),
                set: /* @__PURE__ */ __name(function(value) {
                  defineProperty(this, tableName, {
                    value,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                  });
                }, "set")
              }) : obj[tableName] = new db2.Table(tableName, schema));
            });
          });
        }
        __name(setApiOnPlace, "setApiOnPlace");
        function removeTablesApi(db2, objs) {
          objs.forEach(function(obj) {
            for (var key in obj)
              obj[key] instanceof db2.Table && delete obj[key];
          });
        }
        __name(removeTablesApi, "removeTablesApi");
        function lowerVersionFirst(a, b) {
          return a._cfg.version - b._cfg.version;
        }
        __name(lowerVersionFirst, "lowerVersionFirst");
        function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
          var globalSchema = db2._dbSchema;
          idbUpgradeTrans.objectStoreNames.contains("$meta") && !globalSchema.$meta && (globalSchema.$meta = createTableSchema("$meta", parseIndexSyntax("")[0], []), db2._storeNames.push("$meta"));
          var trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
          trans.create(idbUpgradeTrans), trans._completion.catch(reject);
          var rejectTransaction = trans._reject.bind(trans), transless = PSD.transless || PSD;
          newScope(function() {
            if (PSD.trans = trans, PSD.transless = transless, oldVersion === 0)
              keys(globalSchema).forEach(function(tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
              }), generateMiddlewareStacks(db2, idbUpgradeTrans), DexiePromise.follow(function() {
                return db2.on.populate.fire(trans);
              }).catch(rejectTransaction);
            else
              return generateMiddlewareStacks(db2, idbUpgradeTrans), getExistingVersion(db2, trans, oldVersion).then(function(oldVersion2) {
                return updateTablesAndIndexes(db2, oldVersion2, trans, idbUpgradeTrans);
              }).catch(rejectTransaction);
          });
        }
        __name(runUpgraders, "runUpgraders");
        function patchCurrentVersion(db2, idbUpgradeTrans) {
          createMissingTables(db2._dbSchema, idbUpgradeTrans), idbUpgradeTrans.db.version % 10 === 0 && !idbUpgradeTrans.objectStoreNames.contains("$meta") && idbUpgradeTrans.db.createObjectStore("$meta").add(Math.ceil(idbUpgradeTrans.db.version / 10 - 1), "version");
          var globalSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
          adjustToExistingIndexNames(db2, db2._dbSchema, idbUpgradeTrans);
          for (var diff = getSchemaDiff(globalSchema, db2._dbSchema), _loop_1 = /* @__PURE__ */ __name(function(tableChange2) {
            if (tableChange2.change.length || tableChange2.recreate)
              return console.warn("Unable to patch indexes of table ".concat(tableChange2.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var store = idbUpgradeTrans.objectStore(tableChange2.name);
            tableChange2.add.forEach(function(idx) {
              debug && console.debug("Dexie upgrade patch: Creating missing index ".concat(tableChange2.name, ".").concat(idx.src)), addIndex(store, idx);
            });
          }, "_loop_1"), _i = 0, _a2 = diff.change; _i < _a2.length; _i++) {
            var tableChange = _a2[_i], state_1 = _loop_1(tableChange);
            if (typeof state_1 == "object")
              return state_1.value;
          }
        }
        __name(patchCurrentVersion, "patchCurrentVersion");
        function getExistingVersion(db2, trans, oldVersion) {
          return trans.storeNames.includes("$meta") ? trans.table("$meta").get("version").then(function(metaVersion) {
            return metaVersion ?? oldVersion;
          }) : DexiePromise.resolve(oldVersion);
        }
        __name(getExistingVersion, "getExistingVersion");
        function updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans) {
          var queue = [], versions = db2._versions, globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans), versToRun = versions.filter(function(v) {
            return v._cfg.version >= oldVersion;
          });
          if (versToRun.length === 0)
            return DexiePromise.resolve();
          versToRun.forEach(function(version) {
            queue.push(function() {
              var oldSchema = globalSchema, newSchema = version._cfg.dbschema;
              adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans), adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans), globalSchema = db2._dbSchema = newSchema;
              var diff = getSchemaDiff(oldSchema, newSchema);
              diff.add.forEach(function(tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
              }), diff.change.forEach(function(change) {
                if (change.recreate)
                  throw new exceptions.Upgrade("Not yet support for changing primary key");
                var store_1 = idbUpgradeTrans.objectStore(change.name);
                change.add.forEach(function(idx) {
                  return addIndex(store_1, idx);
                }), change.change.forEach(function(idx) {
                  store_1.deleteIndex(idx.name), addIndex(store_1, idx);
                }), change.del.forEach(function(idxName) {
                  return store_1.deleteIndex(idxName);
                });
              });
              var contentUpgrade = version._cfg.contentUpgrade;
              if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db2, idbUpgradeTrans), trans._memoizedTables = {};
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function(table) {
                  upgradeSchema_1[table] = oldSchema[table];
                }), removeTablesApi(db2, [db2.Transaction.prototype]), setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1), trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                contentUpgradeIsAsync_1 && incrementExpectedAwaits();
                var returnValue_1, promiseFollowed = DexiePromise.follow(function() {
                  if (returnValue_1 = contentUpgrade(trans), returnValue_1 && contentUpgradeIsAsync_1) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue_1.then(decrementor, decrementor);
                  }
                });
                return returnValue_1 && typeof returnValue_1.then == "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                  return returnValue_1;
                });
              }
            }), queue.push(function(idbtrans) {
              var newSchema = version._cfg.dbschema;
              deleteRemovedTables(newSchema, idbtrans), removeTablesApi(db2, [db2.Transaction.prototype]), setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema), trans.schema = db2._dbSchema;
            }), queue.push(function(idbtrans) {
              db2.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(db2.idbdb.version / 10) === version._cfg.version ? (db2.idbdb.deleteObjectStore("$meta"), delete db2._dbSchema.$meta, db2._storeNames = db2._storeNames.filter(function(name) {
                return name !== "$meta";
              })) : idbtrans.objectStore("$meta").put(version._cfg.version, "version"));
            });
          });
          function runQueue() {
            return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
          }
          return __name(runQueue, "runQueue"), runQueue().then(function() {
            createMissingTables(globalSchema, idbUpgradeTrans);
          });
        }
        __name(updateTablesAndIndexes, "updateTablesAndIndexes");
        function getSchemaDiff(oldSchema, newSchema) {
          var diff = {
            del: [],
            add: [],
            change: []
          }, table;
          for (table in oldSchema)
            newSchema[table] || diff.del.push(table);
          for (table in newSchema) {
            var oldDef = oldSchema[table], newDef = newSchema[table];
            if (!oldDef)
              diff.add.push([table, newDef]);
            else {
              var change = {
                name: table,
                def: newDef,
                recreate: !1,
                del: [],
                add: [],
                change: []
              };
              if ("" + (oldDef.primKey.keyPath || "") != "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto)
                change.recreate = !0, diff.change.push(change);
              else {
                var oldIndexes = oldDef.idxByName, newIndexes = newDef.idxByName, idxName = void 0;
                for (idxName in oldIndexes)
                  newIndexes[idxName] || change.del.push(idxName);
                for (idxName in newIndexes) {
                  var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                  oldIdx ? oldIdx.src !== newIdx.src && change.change.push(newIdx) : change.add.push(newIdx);
                }
                (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) && diff.change.push(change);
              }
            }
          }
          return diff;
        }
        __name(getSchemaDiff, "getSchemaDiff");
        function createTable(idbtrans, tableName, primKey, indexes) {
          var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
          return indexes.forEach(function(idx) {
            return addIndex(store, idx);
          }), store;
        }
        __name(createTable, "createTable");
        function createMissingTables(newSchema, idbtrans) {
          keys(newSchema).forEach(function(tableName) {
            idbtrans.db.objectStoreNames.contains(tableName) || (debug && console.debug("Dexie: Creating missing table", tableName), createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes));
          });
        }
        __name(createMissingTables, "createMissingTables");
        function deleteRemovedTables(newSchema, idbtrans) {
          [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
            return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
          });
        }
        __name(deleteRemovedTables, "deleteRemovedTables");
        function addIndex(store, idx) {
          store.createIndex(idx.name, idx.keyPath, {
            unique: idx.unique,
            multiEntry: idx.multi
          });
        }
        __name(addIndex, "addIndex");
        function buildGlobalSchema(db2, idbdb, tmpTrans) {
          var globalSchema = {}, dbStoreNames = slice(idbdb.objectStoreNames, 0);
          return dbStoreNames.forEach(function(storeName) {
            for (var store = tmpTrans.objectStore(storeName), keyPath = store.keyPath, primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", !0, !1, !!store.autoIncrement, keyPath && typeof keyPath != "string", !0), indexes = [], j = 0; j < store.indexNames.length; ++j) {
              var idbindex = store.index(store.indexNames[j]);
              keyPath = idbindex.keyPath;
              var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, !1, keyPath && typeof keyPath != "string", !1);
              indexes.push(index);
            }
            globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
          }), globalSchema;
        }
        __name(buildGlobalSchema, "buildGlobalSchema");
        function readGlobalSchema(db2, idbdb, tmpTrans) {
          db2.verno = idbdb.version / 10;
          var globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
          db2._storeNames = slice(idbdb.objectStoreNames, 0), setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
        }
        __name(readGlobalSchema, "readGlobalSchema");
        function verifyInstalledSchema(db2, tmpTrans) {
          var installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans), diff = getSchemaDiff(installedSchema, db2._dbSchema);
          return !(diff.add.length || diff.change.some(function(ch) {
            return ch.add.length || ch.change.length;
          }));
        }
        __name(verifyInstalledSchema, "verifyInstalledSchema");
        function adjustToExistingIndexNames(db2, schema, idbtrans) {
          for (var storeNames = idbtrans.db.objectStoreNames, i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i], store = idbtrans.objectStore(storeName);
            db2._hasGetAll = "getAll" in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
              var indexName = store.indexNames[j], keyPath = store.index(indexName).keyPath, dexieName = typeof keyPath == "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
              if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                indexSpec && (indexSpec.name = indexName, delete schema[storeName].idxByName[dexieName], schema[storeName].idxByName[indexName] = indexSpec);
              }
            }
          }
          typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (db2._hasGetAll = !1);
        }
        __name(adjustToExistingIndexNames, "adjustToExistingIndexNames");
        function parseIndexSyntax(primKeyAndIndexes) {
          return primKeyAndIndexes.split(",").map(function(index, indexNum) {
            var _a2, typeSplit = index.split(":"), type2 = (_a2 = typeSplit[1]) === null || _a2 === void 0 ? void 0 : _a2.trim();
            index = typeSplit[0].trim();
            var name = index.replace(/([&*]|\+\+)/g, ""), keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
            return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0, type2);
          });
        }
        __name(parseIndexSyntax, "parseIndexSyntax");
        var Version = (function() {
          function Version2() {
          }
          return __name(Version2, "Version"), Version2.prototype._createTableSchema = function(name, primKey, indexes) {
            return createTableSchema(name, primKey, indexes);
          }, Version2.prototype._parseIndexSyntax = function(primKeyAndIndexes) {
            return parseIndexSyntax(primKeyAndIndexes);
          }, Version2.prototype._parseStoresSpec = function(stores, outSchema) {
            var _this = this;
            keys(stores).forEach(function(tableName) {
              if (stores[tableName] !== null) {
                var indexes = _this._parseIndexSyntax(stores[tableName]), primKey = indexes.shift();
                if (!primKey)
                  throw new exceptions.Schema("Invalid schema for table " + tableName + ": " + stores[tableName]);
                if (primKey.unique = !0, primKey.multi)
                  throw new exceptions.Schema("Primary key cannot be multiEntry*");
                indexes.forEach(function(idx) {
                  if (idx.auto)
                    throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                  if (!idx.keyPath)
                    throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                var tblSchema = _this._createTableSchema(tableName, primKey, indexes);
                outSchema[tableName] = tblSchema;
              }
            });
          }, Version2.prototype.stores = function(stores) {
            var db2 = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
            var versions = db2._versions, storesSpec = {}, dbschema = {};
            return versions.forEach(function(version) {
              extend(storesSpec, version._cfg.storesSource), dbschema = version._cfg.dbschema = {}, version._parseStoresSpec(storesSpec, dbschema);
            }), db2._dbSchema = dbschema, removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]), setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema), db2._storeNames = keys(dbschema), this;
          }, Version2.prototype.upgrade = function(upgradeFunction) {
            return this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction), this;
          }, Version2;
        })();
        function createVersionConstructor(db2) {
          return makeClassConstructor(Version.prototype, /* @__PURE__ */ __name(function(versionNumber) {
            this.db = db2, this._cfg = {
              version: versionNumber,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null
            };
          }, "Version"));
        }
        __name(createVersionConstructor, "createVersionConstructor");
        var connections = createConnectionsManager();
        function createConnectionsManager() {
          if (typeof FinalizationRegistry < "u" && typeof WeakRef < "u") {
            var _refs_1 = /* @__PURE__ */ new Set(), _registry_1 = new FinalizationRegistry(function(ref) {
              _refs_1.delete(ref);
            }), toArray = /* @__PURE__ */ __name(function() {
              return Array.from(_refs_1).map(function(ref) {
                return ref.deref();
              }).filter(function(db2) {
                return db2 !== void 0;
              });
            }, "toArray"), add3 = /* @__PURE__ */ __name(function(db2) {
              var ref = new WeakRef(db2._novip);
              if (_refs_1.add(ref), _registry_1.register(db2._novip, ref, ref), _refs_1.size > db2._options.maxConnections) {
                var oldestRef = _refs_1.values().next().value;
                _refs_1.delete(oldestRef), _registry_1.unregister(oldestRef);
              }
            }, "add"), remove4 = /* @__PURE__ */ __name(function(db2) {
              if (db2)
                for (var iterator = _refs_1.values(), result = iterator.next(); !result.done; ) {
                  var ref = result.value;
                  if (ref.deref() === db2._novip) {
                    _refs_1.delete(ref), _registry_1.unregister(ref);
                    return;
                  }
                  result = iterator.next();
                }
            }, "remove");
            return { toArray, add: add3, remove: remove4 };
          } else {
            var connections_1 = [], toArray = /* @__PURE__ */ __name(function() {
              return connections_1;
            }, "toArray"), add3 = /* @__PURE__ */ __name(function(db2) {
              connections_1.push(db2._novip);
            }, "add"), remove4 = /* @__PURE__ */ __name(function(db2) {
              if (db2) {
                var index = connections_1.indexOf(db2._novip);
                index !== -1 && connections_1.splice(index, 1);
              }
            }, "remove");
            return { toArray, add: add3, remove: remove4 };
          }
        }
        __name(createConnectionsManager, "createConnectionsManager");
        function getDbNamesTable(indexedDB2, IDBKeyRange) {
          var dbNamesDB = indexedDB2._dbNamesDB;
          return dbNamesDB || (dbNamesDB = indexedDB2._dbNamesDB = new Dexie$1(DBNAMES_DB, {
            addons: [],
            indexedDB: indexedDB2,
            IDBKeyRange
          }), dbNamesDB.version(1).stores({ dbnames: "name" })), dbNamesDB.table("dbnames");
        }
        __name(getDbNamesTable, "getDbNamesTable");
        function hasDatabasesNative(indexedDB2) {
          return indexedDB2 && typeof indexedDB2.databases == "function";
        }
        __name(hasDatabasesNative, "hasDatabasesNative");
        function getDatabaseNames(_a2) {
          var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
          return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
            return infos.map(function(info) {
              return info.name;
            }).filter(function(name) {
              return name !== DBNAMES_DB;
            });
          }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
        }
        __name(getDatabaseNames, "getDatabaseNames");
        function _onDatabaseCreated(_a2, name) {
          var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
          !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
        }
        __name(_onDatabaseCreated, "_onDatabaseCreated");
        function _onDatabaseDeleted(_a2, name) {
          var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
          !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
        }
        __name(_onDatabaseDeleted, "_onDatabaseDeleted");
        function vip(fn) {
          return newScope(function() {
            return PSD.letThrough = !0, fn();
          });
        }
        __name(vip, "vip");
        function idbReady() {
          var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
          if (!isSafari || !indexedDB.databases)
            return Promise.resolve();
          var intervalId;
          return new Promise(function(resolve) {
            var tryIdb = /* @__PURE__ */ __name(function() {
              return indexedDB.databases().finally(resolve);
            }, "tryIdb");
            intervalId = setInterval(tryIdb, 100), tryIdb();
          }).finally(function() {
            return clearInterval(intervalId);
          });
        }
        __name(idbReady, "idbReady");
        var _a;
        function isEmptyRange(node) {
          return !("from" in node);
        }
        __name(isEmptyRange, "isEmptyRange");
        var RangeSet2 = /* @__PURE__ */ __name(function(fromOrTree, to) {
          if (this)
            extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
          else {
            var rv = new RangeSet2();
            return fromOrTree && "d" in fromOrTree && extend(rv, fromOrTree), rv;
          }
        }, "RangeSet");
        props(RangeSet2.prototype, (_a = {
          add: /* @__PURE__ */ __name(function(rangeSet) {
            return mergeRanges2(this, rangeSet), this;
          }, "add"),
          addKey: /* @__PURE__ */ __name(function(key) {
            return addRange(this, key, key), this;
          }, "addKey"),
          addKeys: /* @__PURE__ */ __name(function(keys2) {
            var _this = this;
            return keys2.forEach(function(key) {
              return addRange(_this, key, key);
            }), this;
          }, "addKeys"),
          hasKey: /* @__PURE__ */ __name(function(key) {
            var node = getRangeSetIterator(this).next(key).value;
            return node && cmp2(node.from, key) <= 0 && cmp2(node.to, key) >= 0;
          }, "hasKey")
        }, _a[iteratorSymbol] = function() {
          return getRangeSetIterator(this);
        }, _a));
        function addRange(target, from, to) {
          var diff = cmp2(from, to);
          if (!isNaN(diff)) {
            if (diff > 0)
              throw RangeError();
            if (isEmptyRange(target))
              return extend(target, { from, to, d: 1 });
            var left = target.l, right = target.r;
            if (cmp2(to, target.from) < 0)
              return left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null }, rebalance(target);
            if (cmp2(from, target.to) > 0)
              return right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null }, rebalance(target);
            cmp2(from, target.from) < 0 && (target.from = from, target.l = null, target.d = right ? right.d + 1 : 1), cmp2(to, target.to) > 0 && (target.to = to, target.r = null, target.d = target.l ? target.l.d + 1 : 1);
            var rightWasCutOff = !target.r;
            left && !target.l && mergeRanges2(target, left), right && rightWasCutOff && mergeRanges2(target, right);
          }
        }
        __name(addRange, "addRange");
        function mergeRanges2(target, newSet) {
          function _addRangeSet(target2, _a2) {
            var from = _a2.from, to = _a2.to, l = _a2.l, r = _a2.r;
            addRange(target2, from, to), l && _addRangeSet(target2, l), r && _addRangeSet(target2, r);
          }
          __name(_addRangeSet, "_addRangeSet"), isEmptyRange(newSet) || _addRangeSet(target, newSet);
        }
        __name(mergeRanges2, "mergeRanges");
        function rangesOverlap2(rangeSet1, rangeSet2) {
          var i1 = getRangeSetIterator(rangeSet2), nextResult1 = i1.next();
          if (nextResult1.done)
            return !1;
          for (var a = nextResult1.value, i2 = getRangeSetIterator(rangeSet1), nextResult2 = i2.next(a.from), b = nextResult2.value; !nextResult1.done && !nextResult2.done; ) {
            if (cmp2(b.from, a.to) <= 0 && cmp2(b.to, a.from) >= 0)
              return !0;
            cmp2(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
          }
          return !1;
        }
        __name(rangesOverlap2, "rangesOverlap");
        function getRangeSetIterator(node) {
          var state2 = isEmptyRange(node) ? null : { s: 0, n: node };
          return {
            next: /* @__PURE__ */ __name(function(key) {
              for (var keyProvided = arguments.length > 0; state2; )
                switch (state2.s) {
                  case 0:
                    if (state2.s = 1, keyProvided)
                      for (; state2.n.l && cmp2(key, state2.n.from) < 0; )
                        state2 = { up: state2, n: state2.n.l, s: 1 };
                    else
                      for (; state2.n.l; )
                        state2 = { up: state2, n: state2.n.l, s: 1 };
                  case 1:
                    if (state2.s = 2, !keyProvided || cmp2(key, state2.n.to) <= 0)
                      return { value: state2.n, done: !1 };
                  case 2:
                    if (state2.n.r) {
                      state2.s = 3, state2 = { up: state2, n: state2.n.r, s: 0 };
                      continue;
                    }
                  case 3:
                    state2 = state2.up;
                }
              return { done: !0 };
            }, "next")
          };
        }
        __name(getRangeSetIterator, "getRangeSetIterator");
        function rebalance(target) {
          var _a2, _b, diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0), r = diff > 1 ? "r" : diff < -1 ? "l" : "";
          if (r) {
            var l = r === "r" ? "l" : "r", rootClone = __assign({}, target), oldRootRight = target[r];
            target.from = oldRootRight.from, target.to = oldRootRight.to, target[r] = oldRootRight[r], rootClone[r] = oldRootRight[l], target[l] = rootClone, rootClone.d = computeDepth(rootClone);
          }
          target.d = computeDepth(target);
        }
        __name(rebalance, "rebalance");
        function computeDepth(_a2) {
          var r = _a2.r, l = _a2.l;
          return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
        }
        __name(computeDepth, "computeDepth");
        function extendObservabilitySet(target, newSet) {
          return keys(newSet).forEach(function(part) {
            target[part] ? mergeRanges2(target[part], newSet[part]) : target[part] = cloneSimpleObjectTree(newSet[part]);
          }), target;
        }
        __name(extendObservabilitySet, "extendObservabilitySet");
        function obsSetsOverlap(os1, os2) {
          return os1.all || os2.all || Object.keys(os1).some(function(key) {
            return os2[key] && rangesOverlap2(os2[key], os1[key]);
          });
        }
        __name(obsSetsOverlap, "obsSetsOverlap");
        var cache = {}, unsignaledParts = {}, isTaskEnqueued = !1;
        function signalSubscribersLazily(part, optimistic) {
          extendObservabilitySet(unsignaledParts, part), isTaskEnqueued || (isTaskEnqueued = !0, setTimeout(function() {
            isTaskEnqueued = !1;
            var parts = unsignaledParts;
            unsignaledParts = {}, signalSubscribersNow(parts, !1);
          }, 0));
        }
        __name(signalSubscribersLazily, "signalSubscribersLazily");
        function signalSubscribersNow(updatedParts, deleteAffectedCacheEntries) {
          deleteAffectedCacheEntries === void 0 && (deleteAffectedCacheEntries = !1);
          var queriesToSignal = /* @__PURE__ */ new Set();
          if (updatedParts.all)
            for (var _i = 0, _a2 = Object.values(cache); _i < _a2.length; _i++) {
              var tblCache = _a2[_i];
              collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
            }
          else
            for (var key in updatedParts) {
              var parts = /^idb\:\/\/(.*)\/(.*)\//.exec(key);
              if (parts) {
                var dbName = parts[1], tableName = parts[2], tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
                tblCache && collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
              }
            }
          queriesToSignal.forEach(function(requery) {
            return requery();
          });
        }
        __name(signalSubscribersNow, "signalSubscribersNow");
        function collectTableSubscribers(tblCache, updatedParts, outQueriesToSignal, deleteAffectedCacheEntries) {
          for (var updatedEntryLists = [], _i = 0, _a2 = Object.entries(tblCache.queries.query); _i < _a2.length; _i++) {
            for (var _b = _a2[_i], indexName = _b[0], entries = _b[1], filteredEntries = [], _c = 0, entries_1 = entries; _c < entries_1.length; _c++) {
              var entry = entries_1[_c];
              obsSetsOverlap(updatedParts, entry.obsSet) ? entry.subscribers.forEach(function(requery) {
                return outQueriesToSignal.add(requery);
              }) : deleteAffectedCacheEntries && filteredEntries.push(entry);
            }
            deleteAffectedCacheEntries && updatedEntryLists.push([indexName, filteredEntries]);
          }
          if (deleteAffectedCacheEntries)
            for (var _d = 0, updatedEntryLists_1 = updatedEntryLists; _d < updatedEntryLists_1.length; _d++) {
              var _e = updatedEntryLists_1[_d], indexName = _e[0], filteredEntries = _e[1];
              tblCache.queries.query[indexName] = filteredEntries;
            }
        }
        __name(collectTableSubscribers, "collectTableSubscribers");
        function dexieOpen(db2) {
          var state2 = db2._state, indexedDB2 = db2._deps.indexedDB;
          if (state2.isBeingOpened || db2.idbdb)
            return state2.dbReadyPromise.then(function() {
              return state2.dbOpenError ? rejection(state2.dbOpenError) : db2;
            });
          state2.isBeingOpened = !0, state2.dbOpenError = null, state2.openComplete = !1;
          var openCanceller = state2.openCanceller, nativeVerToOpen = Math.round(db2.verno * 10), schemaPatchMode = !1;
          function throwIfCancelled() {
            if (state2.openCanceller !== openCanceller)
              throw new exceptions.DatabaseClosed("db.open() was cancelled");
          }
          __name(throwIfCancelled, "throwIfCancelled");
          var resolveDbReady = state2.dbReadyResolve, upgradeTransaction = null, wasCreated = !1, tryOpenDB = /* @__PURE__ */ __name(function() {
            return new DexiePromise(function(resolve, reject) {
              if (throwIfCancelled(), !indexedDB2)
                throw new exceptions.MissingAPI();
              var dbName = db2.name, req = state2.autoSchema || !nativeVerToOpen ? indexedDB2.open(dbName) : indexedDB2.open(dbName, nativeVerToOpen);
              if (!req)
                throw new exceptions.MissingAPI();
              req.onerror = eventRejectHandler(reject), req.onblocked = wrap(db2._fireOnBlocked), req.onupgradeneeded = wrap(function(e) {
                if (upgradeTransaction = req.transaction, state2.autoSchema && !db2._options.allowEmptyDB) {
                  req.onerror = preventDefault, upgradeTransaction.abort(), req.result.close();
                  var delreq = indexedDB2.deleteDatabase(dbName);
                  delreq.onsuccess = delreq.onerror = wrap(function() {
                    reject(new exceptions.NoSuchDatabase("Database ".concat(dbName, " doesnt exist")));
                  });
                } else {
                  upgradeTransaction.onerror = eventRejectHandler(reject);
                  var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                  wasCreated = oldVer < 1, db2.idbdb = req.result, schemaPatchMode && patchCurrentVersion(db2, upgradeTransaction), runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
                }
              }, reject), req.onsuccess = wrap(function() {
                upgradeTransaction = null;
                var idbdb = db2.idbdb = req.result, objectStoreNames = slice(idbdb.objectStoreNames);
                if (objectStoreNames.length > 0)
                  try {
                    var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                    if (state2.autoSchema)
                      readGlobalSchema(db2, idbdb, tmpTrans);
                    else if (adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans), !verifyInstalledSchema(db2, tmpTrans) && !schemaPatchMode)
                      return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), idbdb.close(), nativeVerToOpen = idbdb.version + 1, schemaPatchMode = !0, resolve(tryOpenDB());
                    generateMiddlewareStacks(db2, tmpTrans);
                  } catch {
                  }
                connections.add(db2), idbdb.onversionchange = wrap(function(ev) {
                  state2.vcFired = !0, db2.on("versionchange").fire(ev);
                }), idbdb.onclose = wrap(function() {
                  db2.close({ disableAutoOpen: !1 });
                }), wasCreated && _onDatabaseCreated(db2._deps, dbName), resolve();
              }, reject);
            }).catch(function(err) {
              switch (err?.name) {
                case "UnknownError":
                  if (state2.PR1398_maxLoop > 0)
                    return state2.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), tryOpenDB();
                  break;
                case "VersionError":
                  if (nativeVerToOpen > 0)
                    return nativeVerToOpen = 0, tryOpenDB();
                  break;
              }
              return DexiePromise.reject(err);
            });
          }, "tryOpenDB"), useSafari14Workaround = typeof navigator < "u" && !!indexedDB2 && indexedDB2 === _global.indexedDB;
          return DexiePromise.race([
            openCanceller,
            (useSafari14Workaround ? idbReady() : DexiePromise.resolve()).then(tryOpenDB)
          ]).then(function() {
            return throwIfCancelled(), state2.onReadyBeingFired = [], DexiePromise.resolve(vip(function() {
              return db2.on.ready.fire(db2.vip);
            })).then(/* @__PURE__ */ __name(function fireRemainders() {
              if (state2.onReadyBeingFired.length > 0) {
                var remainders_1 = state2.onReadyBeingFired.reduce(promisableChain, nop);
                return state2.onReadyBeingFired = [], DexiePromise.resolve(vip(function() {
                  return remainders_1(db2.vip);
                })).then(fireRemainders);
              }
            }, "fireRemainders"));
          }).finally(function() {
            state2.openCanceller === openCanceller && (state2.onReadyBeingFired = null, state2.isBeingOpened = !1);
          }).catch(function(err) {
            state2.dbOpenError = err;
            try {
              upgradeTransaction && upgradeTransaction.abort();
            } catch {
            }
            return openCanceller === state2.openCanceller && db2._close(), rejection(err);
          }).finally(function() {
            state2.openComplete = !0, resolveDbReady();
          }).then(function() {
            if (wasCreated) {
              var everything_1 = {};
              db2.tables.forEach(function(table) {
                table.schema.indexes.forEach(function(idx) {
                  idx.name && (everything_1["idb://".concat(db2.name, "/").concat(table.name, "/").concat(idx.name)] = new RangeSet2(-1 / 0, [[[]]]));
                }), everything_1["idb://".concat(db2.name, "/").concat(table.name, "/")] = everything_1["idb://".concat(db2.name, "/").concat(table.name, "/:dels")] = new RangeSet2(-1 / 0, [[[]]]);
              }), globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME).fire(everything_1), signalSubscribersNow(everything_1, !0);
            }
            return db2;
          });
        }
        __name(dexieOpen, "dexieOpen");
        function awaitIterator(iterator) {
          var callNext = /* @__PURE__ */ __name(function(result) {
            return iterator.next(result);
          }, "callNext"), doThrow = /* @__PURE__ */ __name(function(error) {
            return iterator.throw(error);
          }, "doThrow"), onSuccess = step(callNext), onError = step(doThrow);
          function step(getNext) {
            return function(val) {
              var next = getNext(val), value = next.value;
              return next.done ? value : !value || typeof value.then != "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
            };
          }
          return __name(step, "step"), step(callNext)();
        }
        __name(awaitIterator, "awaitIterator");
        function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
          var i = arguments.length;
          if (i < 2)
            throw new exceptions.InvalidArgument("Too few arguments");
          for (var args = new Array(i - 1); --i; )
            args[i - 1] = arguments[i];
          scopeFunc = args.pop();
          var tables = flatten(args);
          return [mode, tables, scopeFunc];
        }
        __name(extractTransactionArgs, "extractTransactionArgs");
        function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
          return DexiePromise.resolve().then(function() {
            var transless = PSD.transless || PSD, trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
            trans.explicit = !0;
            var zoneProps = {
              trans,
              transless
            };
            if (parentTransaction)
              trans.idbtrans = parentTransaction.idbtrans;
            else
              try {
                trans.create(), trans.idbtrans._explicit = !0, db2._state.PR1398_maxLoop = 3;
              } catch (ex) {
                return ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), db2.close({ disableAutoOpen: !1 }), db2.open().then(function() {
                  return enterTransactionScope(db2, mode, storeNames, null, scopeFunc);
                })) : rejection(ex);
              }
            var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
            scopeFuncIsAsync && incrementExpectedAwaits();
            var returnValue, promiseFollowed = DexiePromise.follow(function() {
              if (returnValue = scopeFunc.call(trans, trans), returnValue)
                if (scopeFuncIsAsync) {
                  var decrementor = decrementExpectedAwaits.bind(null, null);
                  returnValue.then(decrementor, decrementor);
                } else typeof returnValue.next == "function" && typeof returnValue.throw == "function" && (returnValue = awaitIterator(returnValue));
            }, zoneProps);
            return (returnValue && typeof returnValue.then == "function" ? DexiePromise.resolve(returnValue).then(function(x) {
              return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : promiseFollowed.then(function() {
              return returnValue;
            })).then(function(x) {
              return parentTransaction && trans._resolve(), trans._completion.then(function() {
                return x;
              });
            }).catch(function(e) {
              return trans._reject(e), rejection(e);
            });
          });
        }
        __name(enterTransactionScope, "enterTransactionScope");
        function pad(a, value, count) {
          for (var result = isArray(a) ? a.slice() : [a], i = 0; i < count; ++i)
            result.push(value);
          return result;
        }
        __name(pad, "pad");
        function createVirtualIndexMiddleware(down) {
          return __assign(__assign({}, down), { table: /* @__PURE__ */ __name(function(tableName) {
            var table = down.table(tableName), schema = table.schema, indexLookup = /* @__PURE__ */ Object.create(null), allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
              var keyPathAlias = getKeyPathAlias(keyPath), indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [], keyLength = keyPath == null ? 0 : typeof keyPath == "string" ? 1 : keyPath.length, isVirtual = keyTail > 0, virtualIndex = __assign(__assign({}, lowLevelIndex), { name: isVirtual ? "".concat(keyPathAlias, "(virtual-from:").concat(lowLevelIndex.name, ")") : lowLevelIndex.name, lowLevelIndex, isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
              if (indexList.push(virtualIndex), virtualIndex.isPrimaryKey || allVirtualIndexes.push(virtualIndex), keyLength > 1) {
                var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
                addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
              }
              return indexList.sort(function(a, b) {
                return a.keyTail - b.keyTail;
              }), virtualIndex;
            }
            __name(addVirtualIndexes, "addVirtualIndexes");
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [primaryKey];
            for (var _i = 0, _a2 = schema.indexes; _i < _a2.length; _i++) {
              var index = _a2[_i];
              addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
              var result2 = indexLookup[getKeyPathAlias(keyPath)];
              return result2 && result2[0];
            }
            __name(findBestIndex, "findBestIndex");
            function translateRange(range, keyTail) {
              return {
                type: range.type === 1 ? 2 : range.type,
                lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                lowerOpen: !0,
                upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                upperOpen: !0
              };
            }
            __name(translateRange, "translateRange");
            function translateRequest(req) {
              var index2 = req.query.index;
              return index2.isVirtual ? __assign(__assign({}, req), { query: {
                index: index2.lowLevelIndex,
                range: translateRange(req.query.range, index2.keyTail)
              } }) : req;
            }
            __name(translateRequest, "translateRequest");
            var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: /* @__PURE__ */ __name(function(req) {
              return table.count(translateRequest(req));
            }, "count"), query: /* @__PURE__ */ __name(function(req) {
              return table.query(translateRequest(req));
            }, "query"), openCursor: /* @__PURE__ */ __name(function(req) {
              var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
              if (!isVirtual)
                return table.openCursor(req);
              function createVirtualCursor(cursor) {
                function _continue(key) {
                  key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
                }
                __name(_continue, "_continue");
                var virtualCursor = Object.create(cursor, {
                  continue: { value: _continue },
                  continuePrimaryKey: {
                    value: /* @__PURE__ */ __name(function(key, primaryKey2) {
                      cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                    }, "value")
                  },
                  primaryKey: {
                    get: /* @__PURE__ */ __name(function() {
                      return cursor.primaryKey;
                    }, "get")
                  },
                  key: {
                    get: /* @__PURE__ */ __name(function() {
                      var key = cursor.key;
                      return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                    }, "get")
                  },
                  value: {
                    get: /* @__PURE__ */ __name(function() {
                      return cursor.value;
                    }, "get")
                  }
                });
                return virtualCursor;
              }
              return __name(createVirtualCursor, "createVirtualCursor"), table.openCursor(translateRequest(req)).then(function(cursor) {
                return cursor && createVirtualCursor(cursor);
              });
            }, "openCursor") });
            return result;
          }, "table") });
        }
        __name(createVirtualIndexMiddleware, "createVirtualIndexMiddleware");
        var virtualIndexMiddleware = {
          stack: "dbcore",
          name: "VirtualIndexMiddleware",
          level: 1,
          create: createVirtualIndexMiddleware
        };
        function getObjectDiff(a, b, rv, prfx) {
          return rv = rv || {}, prfx = prfx || "", keys(a).forEach(function(prop) {
            if (!hasOwn(b, prop))
              rv[prfx + prop] = void 0;
            else {
              var ap = a[prop], bp = b[prop];
              if (typeof ap == "object" && typeof bp == "object" && ap && bp) {
                var apTypeName = toStringTag(ap), bpTypeName = toStringTag(bp);
                apTypeName !== bpTypeName ? rv[prfx + prop] = b[prop] : apTypeName === "Object" ? getObjectDiff(ap, bp, rv, prfx + prop + ".") : ap !== bp && (rv[prfx + prop] = b[prop]);
              } else ap !== bp && (rv[prfx + prop] = b[prop]);
            }
          }), keys(b).forEach(function(prop) {
            hasOwn(a, prop) || (rv[prfx + prop] = b[prop]);
          }), rv;
        }
        __name(getObjectDiff, "getObjectDiff");
        function getEffectiveKeys(primaryKey, req) {
          return req.type === "delete" ? req.keys : req.keys || req.values.map(primaryKey.extractKey);
        }
        __name(getEffectiveKeys, "getEffectiveKeys");
        var hooksMiddleware = {
          stack: "dbcore",
          name: "HooksMiddleware",
          level: 2,
          create: /* @__PURE__ */ __name(function(downCore) {
            return __assign(__assign({}, downCore), { table: /* @__PURE__ */ __name(function(tableName) {
              var downTable = downCore.table(tableName), primaryKey = downTable.schema.primaryKey, tableMiddleware = __assign(__assign({}, downTable), { mutate: /* @__PURE__ */ __name(function(req) {
                var dxTrans = PSD.trans, _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
                switch (req.type) {
                  case "add":
                    if (creating.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, !0);
                  case "put":
                    if (creating.fire === nop && updating.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, !0);
                  case "delete":
                    if (deleting.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, !0);
                  case "deleteRange":
                    if (deleting.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return deleteRange(req);
                    }, !0);
                }
                return downTable.mutate(req);
                function addPutOrDelete(req2) {
                  var dxTrans2 = PSD.trans, keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
                  if (!keys2)
                    throw new Error("Keys missing");
                  return req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys2 }) : __assign({}, req2), req2.type !== "delete" && (req2.values = __spreadArray([], req2.values, !0)), req2.keys && (req2.keys = __spreadArray([], req2.keys, !0)), getExistingValues(downTable, req2, keys2).then(function(existingValues) {
                    var contexts = keys2.map(function(key, i) {
                      var existingValue = existingValues[i], ctx = { onerror: null, onsuccess: null };
                      if (req2.type === "delete")
                        deleting.fire.call(ctx, key, existingValue, dxTrans2);
                      else if (req2.type === "add" || existingValue === void 0) {
                        var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                        key == null && generatedPrimaryKey != null && (key = generatedPrimaryKey, req2.keys[i] = key, primaryKey.outbound || setByKeyPath(req2.values[i], primaryKey.keyPath, key));
                      } else {
                        var objectDiff = getObjectDiff(existingValue, req2.values[i]), additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                        if (additionalChanges_1) {
                          var requestedValue_1 = req2.values[i];
                          Object.keys(additionalChanges_1).forEach(function(keyPath) {
                            hasOwn(requestedValue_1, keyPath) ? requestedValue_1[keyPath] = additionalChanges_1[keyPath] : setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                          });
                        }
                      }
                      return ctx;
                    });
                    return downTable.mutate(req2).then(function(_a3) {
                      for (var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult, i = 0; i < keys2.length; ++i) {
                        var primKey = results ? results[i] : keys2[i], ctx = contexts[i];
                        primKey == null ? ctx.onerror && ctx.onerror(failures[i]) : ctx.onsuccess && ctx.onsuccess(
                          req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                        );
                      }
                      return { failures, results, numFailures, lastResult };
                    }).catch(function(error) {
                      return contexts.forEach(function(ctx) {
                        return ctx.onerror && ctx.onerror(error);
                      }), Promise.reject(error);
                    });
                  });
                }
                function deleteRange(req2) {
                  return deleteNextChunk(req2.trans, req2.range, 1e4);
                }
                function deleteNextChunk(trans, range, limit) {
                  return downTable.query({
                    trans,
                    values: !1,
                    query: { index: primaryKey, range },
                    limit
                  }).then(function(_a3) {
                    var result = _a3.result;
                    return addPutOrDelete({
                      type: "delete",
                      keys: result,
                      trans
                    }).then(function(res) {
                      return res.numFailures > 0 ? Promise.reject(res.failures[0]) : result.length < limit ? {
                        failures: [],
                        numFailures: 0,
                        lastResult: void 0
                      } : deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: !0 }), limit);
                    });
                  });
                }
              }, "mutate") });
              return tableMiddleware;
            }, "table") });
          }, "create")
        };
        function getExistingValues(table, req, effectiveKeys) {
          return req.type === "add" ? Promise.resolve([]) : table.getMany({
            trans: req.trans,
            keys: effectiveKeys,
            cache: "immutable"
          });
        }
        __name(getExistingValues, "getExistingValues");
        function getFromTransactionCache(keys2, cache2, clone) {
          try {
            if (!cache2 || cache2.keys.length < keys2.length)
              return null;
            for (var result = [], i = 0, j = 0; i < cache2.keys.length && j < keys2.length; ++i)
              cmp2(cache2.keys[i], keys2[j]) === 0 && (result.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]), ++j);
            return result.length === keys2.length ? result : null;
          } catch {
            return null;
          }
        }
        __name(getFromTransactionCache, "getFromTransactionCache");
        var cacheExistingValuesMiddleware = {
          stack: "dbcore",
          level: -1,
          create: /* @__PURE__ */ __name(function(core) {
            return {
              table: /* @__PURE__ */ __name(function(tableName) {
                var table = core.table(tableName);
                return __assign(__assign({}, table), { getMany: /* @__PURE__ */ __name(function(req) {
                  if (!req.cache)
                    return table.getMany(req);
                  var cachedResult = getFromTransactionCache(req.keys, req.trans._cache, req.cache === "clone");
                  return cachedResult ? DexiePromise.resolve(cachedResult) : table.getMany(req).then(function(res) {
                    return req.trans._cache = {
                      keys: req.keys,
                      values: req.cache === "clone" ? deepClone(res) : res
                    }, res;
                  });
                }, "getMany"), mutate: /* @__PURE__ */ __name(function(req) {
                  return req.type !== "add" && (req.trans._cache = null), table.mutate(req);
                }, "mutate") });
              }, "table")
            };
          }, "create")
        };
        function isCachableContext(ctx, table) {
          return ctx.trans.mode === "readonly" && !!ctx.subscr && !ctx.trans.explicit && ctx.trans.db._options.cache !== "disabled" && !table.schema.primaryKey.outbound;
        }
        __name(isCachableContext, "isCachableContext");
        function isCachableRequest(type2, req) {
          switch (type2) {
            case "query":
              return req.values && !req.unique;
            case "get":
              return !1;
            case "getMany":
              return !1;
            case "count":
              return !1;
            case "openCursor":
              return !1;
          }
        }
        __name(isCachableRequest, "isCachableRequest");
        var observabilityMiddleware = {
          stack: "dbcore",
          level: 0,
          name: "Observability",
          create: /* @__PURE__ */ __name(function(core) {
            var dbName = core.schema.name, FULL_RANGE = new RangeSet2(core.MIN_KEY, core.MAX_KEY);
            return __assign(__assign({}, core), { transaction: /* @__PURE__ */ __name(function(stores, mode, options) {
              if (PSD.subscr && mode !== "readonly")
                throw new exceptions.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(PSD.querier));
              return core.transaction(stores, mode, options);
            }, "transaction"), table: /* @__PURE__ */ __name(function(tableName) {
              var table = core.table(tableName), schema = table.schema, primaryKey = schema.primaryKey, indexes = schema.indexes, extractKey = primaryKey.extractKey, outbound = primaryKey.outbound, indexesWithAutoIncPK = primaryKey.autoIncrement && indexes.filter(function(index) {
                return index.compound && index.keyPath.includes(primaryKey.keyPath);
              }), tableClone = __assign(__assign({}, table), { mutate: /* @__PURE__ */ __name(function(req) {
                var _a2, _b, trans = req.trans, mutatedParts = req.mutatedParts || (req.mutatedParts = {}), getRangeSet = /* @__PURE__ */ __name(function(indexName) {
                  var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                  return mutatedParts[part] || (mutatedParts[part] = new RangeSet2());
                }, "getRangeSet"), pkRangeSet = getRangeSet(""), delsRangeSet = getRangeSet(":dels"), type2 = req.type, _c = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [
                  getEffectiveKeys(primaryKey, req).filter(function(id) {
                    return id != null;
                  }),
                  req.values
                ] : [], keys2 = _c[0], newObjs = _c[1], oldCache = req.trans._cache;
                if (isArray(keys2)) {
                  pkRangeSet.addKeys(keys2);
                  var oldObjs = type2 === "delete" || keys2.length === newObjs.length ? getFromTransactionCache(keys2, oldCache) : null;
                  oldObjs || delsRangeSet.addKeys(keys2), (oldObjs || newObjs) && trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                } else if (keys2) {
                  var range = {
                    from: (_a2 = keys2.lower) !== null && _a2 !== void 0 ? _a2 : core.MIN_KEY,
                    to: (_b = keys2.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY
                  };
                  delsRangeSet.add(range), pkRangeSet.add(range);
                } else
                  pkRangeSet.add(FULL_RANGE), delsRangeSet.add(FULL_RANGE), schema.indexes.forEach(function(idx) {
                    return getRangeSet(idx.name).add(FULL_RANGE);
                  });
                return table.mutate(req).then(function(res) {
                  return keys2 && (req.type === "add" || req.type === "put") && (pkRangeSet.addKeys(res.results), indexesWithAutoIncPK && indexesWithAutoIncPK.forEach(function(idx) {
                    for (var idxVals = req.values.map(function(v) {
                      return idx.extractKey(v);
                    }), pkPos = idx.keyPath.findIndex(function(prop) {
                      return prop === primaryKey.keyPath;
                    }), i = 0, len = res.results.length; i < len; ++i)
                      idxVals[i][pkPos] = res.results[i];
                    getRangeSet(idx.name).addKeys(idxVals);
                  })), trans.mutatedParts = extendObservabilitySet(trans.mutatedParts || {}, mutatedParts), res;
                });
              }, "mutate") }), getRange = /* @__PURE__ */ __name(function(_a2) {
                var _b, _c, _d = _a2.query, index = _d.index, range = _d.range;
                return [
                  index,
                  new RangeSet2((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
                ];
              }, "getRange"), readSubscribers = {
                get: /* @__PURE__ */ __name(function(req) {
                  return [primaryKey, new RangeSet2(req.key)];
                }, "get"),
                getMany: /* @__PURE__ */ __name(function(req) {
                  return [primaryKey, new RangeSet2().addKeys(req.keys)];
                }, "getMany"),
                count: getRange,
                query: getRange,
                openCursor: getRange
              };
              return keys(readSubscribers).forEach(function(method) {
                tableClone[method] = function(req) {
                  var subscr = PSD.subscr, isLiveQuery = !!subscr, cachable = isCachableContext(PSD, table) && isCachableRequest(method, req), obsSet = cachable ? req.obsSet = {} : subscr;
                  if (isLiveQuery) {
                    var getRangeSet = /* @__PURE__ */ __name(function(indexName) {
                      var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                      return obsSet[part] || (obsSet[part] = new RangeSet2());
                    }, "getRangeSet"), pkRangeSet_1 = getRangeSet(""), delsRangeSet_1 = getRangeSet(":dels"), _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
                    if (method === "query" && queriedIndex.isPrimaryKey && !req.values ? delsRangeSet_1.add(queriedRanges) : getRangeSet(queriedIndex.name || "").add(queriedRanges), !queriedIndex.isPrimaryKey)
                      if (method === "count")
                        delsRangeSet_1.add(FULL_RANGE);
                      else {
                        var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: !1 }));
                        return table[method].apply(this, arguments).then(function(res) {
                          if (method === "query") {
                            if (outbound && req.values)
                              return keysPromise_1.then(function(_a3) {
                                var resultingKeys = _a3.result;
                                return pkRangeSet_1.addKeys(resultingKeys), res;
                              });
                            var pKeys = req.values ? res.result.map(extractKey) : res.result;
                            req.values ? pkRangeSet_1.addKeys(pKeys) : delsRangeSet_1.addKeys(pKeys);
                          } else if (method === "openCursor") {
                            var cursor_1 = res, wantValues_1 = req.values;
                            return cursor_1 && Object.create(cursor_1, {
                              key: {
                                get: /* @__PURE__ */ __name(function() {
                                  return delsRangeSet_1.addKey(cursor_1.primaryKey), cursor_1.key;
                                }, "get")
                              },
                              primaryKey: {
                                get: /* @__PURE__ */ __name(function() {
                                  var pkey = cursor_1.primaryKey;
                                  return delsRangeSet_1.addKey(pkey), pkey;
                                }, "get")
                              },
                              value: {
                                get: /* @__PURE__ */ __name(function() {
                                  return wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey), cursor_1.value;
                                }, "get")
                              }
                            });
                          }
                          return res;
                        });
                      }
                  }
                  return table[method].apply(this, arguments);
                };
              }), tableClone;
            }, "table") });
          }, "create")
        };
        function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
          function addAffectedIndex(ix) {
            var rangeSet = getRangeSet(ix.name || "");
            function extractKey(obj) {
              return obj != null ? ix.extractKey(obj) : null;
            }
            __name(extractKey, "extractKey");
            var addKeyOrKeys = /* @__PURE__ */ __name(function(key) {
              return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
                return rangeSet.addKey(key2);
              }) : rangeSet.addKey(key);
            }, "addKeyOrKeys");
            (oldObjs || newObjs).forEach(function(_, i) {
              var oldKey = oldObjs && extractKey(oldObjs[i]), newKey = newObjs && extractKey(newObjs[i]);
              cmp2(oldKey, newKey) !== 0 && (oldKey != null && addKeyOrKeys(oldKey), newKey != null && addKeyOrKeys(newKey));
            });
          }
          __name(addAffectedIndex, "addAffectedIndex"), schema.indexes.forEach(addAffectedIndex);
        }
        __name(trackAffectedIndexes, "trackAffectedIndexes");
        function adjustOptimisticFromFailures(tblCache, req, res) {
          if (res.numFailures === 0)
            return req;
          if (req.type === "deleteRange")
            return null;
          var numBulkOps = req.keys ? req.keys.length : "values" in req && req.values ? req.values.length : 1;
          if (res.numFailures === numBulkOps)
            return null;
          var clone = __assign({}, req);
          return isArray(clone.keys) && (clone.keys = clone.keys.filter(function(_, i) {
            return !(i in res.failures);
          })), "values" in clone && isArray(clone.values) && (clone.values = clone.values.filter(function(_, i) {
            return !(i in res.failures);
          })), clone;
        }
        __name(adjustOptimisticFromFailures, "adjustOptimisticFromFailures");
        function isAboveLower(key, range) {
          return range.lower === void 0 ? !0 : range.lowerOpen ? cmp2(key, range.lower) > 0 : cmp2(key, range.lower) >= 0;
        }
        __name(isAboveLower, "isAboveLower");
        function isBelowUpper(key, range) {
          return range.upper === void 0 ? !0 : range.upperOpen ? cmp2(key, range.upper) < 0 : cmp2(key, range.upper) <= 0;
        }
        __name(isBelowUpper, "isBelowUpper");
        function isWithinRange(key, range) {
          return isAboveLower(key, range) && isBelowUpper(key, range);
        }
        __name(isWithinRange, "isWithinRange");
        function applyOptimisticOps(result, req, ops, table, cacheEntry, immutable) {
          if (!ops || ops.length === 0)
            return result;
          var index = req.query.index, multiEntry = index.multiEntry, queryRange = req.query.range, primaryKey = table.schema.primaryKey, extractPrimKey = primaryKey.extractKey, extractIndex = index.extractKey, extractLowLevelIndex = (index.lowLevelIndex || index).extractKey, finalResult = ops.reduce(function(result2, op) {
            var modifedResult = result2, includedValues = [];
            if (op.type === "add" || op.type === "put")
              for (var includedPKs = new RangeSet2(), i = op.values.length - 1; i >= 0; --i) {
                var value = op.values[i], pk = extractPrimKey(value);
                if (!includedPKs.hasKey(pk)) {
                  var key = extractIndex(value);
                  (multiEntry && isArray(key) ? key.some(function(k) {
                    return isWithinRange(k, queryRange);
                  }) : isWithinRange(key, queryRange)) && (includedPKs.addKey(pk), includedValues.push(value));
                }
              }
            switch (op.type) {
              case "add": {
                var existingKeys_1 = new RangeSet2().addKeys(req.values ? result2.map(function(v) {
                  return extractPrimKey(v);
                }) : result2);
                modifedResult = result2.concat(req.values ? includedValues.filter(function(v) {
                  var key2 = extractPrimKey(v);
                  return existingKeys_1.hasKey(key2) ? !1 : (existingKeys_1.addKey(key2), !0);
                }) : includedValues.map(function(v) {
                  return extractPrimKey(v);
                }).filter(function(k) {
                  return existingKeys_1.hasKey(k) ? !1 : (existingKeys_1.addKey(k), !0);
                }));
                break;
              }
              case "put": {
                var keySet_1 = new RangeSet2().addKeys(op.values.map(function(v) {
                  return extractPrimKey(v);
                }));
                modifedResult = result2.filter(
                  function(item) {
                    return !keySet_1.hasKey(req.values ? extractPrimKey(item) : item);
                  }
                ).concat(
                  req.values ? includedValues : includedValues.map(function(v) {
                    return extractPrimKey(v);
                  })
                );
                break;
              }
              case "delete":
                var keysToDelete_1 = new RangeSet2().addKeys(op.keys);
                modifedResult = result2.filter(function(item) {
                  return !keysToDelete_1.hasKey(req.values ? extractPrimKey(item) : item);
                });
                break;
              case "deleteRange":
                var range_1 = op.range;
                modifedResult = result2.filter(function(item) {
                  return !isWithinRange(extractPrimKey(item), range_1);
                });
                break;
            }
            return modifedResult;
          }, result);
          if (finalResult === result)
            return result;
          var sorter = /* @__PURE__ */ __name(function(a, b) {
            return cmp2(extractLowLevelIndex(a), extractLowLevelIndex(b)) || cmp2(extractPrimKey(a), extractPrimKey(b));
          }, "sorter");
          return finalResult.sort(req.direction === "prev" || req.direction === "prevunique" ? function(a, b) {
            return sorter(b, a);
          } : sorter), req.limit && req.limit < 1 / 0 && (finalResult.length > req.limit ? finalResult.length = req.limit : result.length === req.limit && finalResult.length < req.limit && (cacheEntry.dirty = !0)), immutable ? Object.freeze(finalResult) : finalResult;
        }
        __name(applyOptimisticOps, "applyOptimisticOps");
        function areRangesEqual(r1, r2) {
          return cmp2(r1.lower, r2.lower) === 0 && cmp2(r1.upper, r2.upper) === 0 && !!r1.lowerOpen == !!r2.lowerOpen && !!r1.upperOpen == !!r2.upperOpen;
        }
        __name(areRangesEqual, "areRangesEqual");
        function compareLowers(lower1, lower2, lowerOpen1, lowerOpen2) {
          if (lower1 === void 0)
            return lower2 !== void 0 ? -1 : 0;
          if (lower2 === void 0)
            return 1;
          var c = cmp2(lower1, lower2);
          if (c === 0) {
            if (lowerOpen1 && lowerOpen2)
              return 0;
            if (lowerOpen1)
              return 1;
            if (lowerOpen2)
              return -1;
          }
          return c;
        }
        __name(compareLowers, "compareLowers");
        function compareUppers(upper1, upper2, upperOpen1, upperOpen2) {
          if (upper1 === void 0)
            return upper2 !== void 0 ? 1 : 0;
          if (upper2 === void 0)
            return -1;
          var c = cmp2(upper1, upper2);
          if (c === 0) {
            if (upperOpen1 && upperOpen2)
              return 0;
            if (upperOpen1)
              return -1;
            if (upperOpen2)
              return 1;
          }
          return c;
        }
        __name(compareUppers, "compareUppers");
        function isSuperRange(r1, r2) {
          return compareLowers(r1.lower, r2.lower, r1.lowerOpen, r2.lowerOpen) <= 0 && compareUppers(r1.upper, r2.upper, r1.upperOpen, r2.upperOpen) >= 0;
        }
        __name(isSuperRange, "isSuperRange");
        function findCompatibleQuery(dbName, tableName, type2, req) {
          var _a2, tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
          if (!tblCache)
            return [];
          var queries = tblCache.queries[type2];
          if (!queries)
            return [null, !1, tblCache, null];
          var indexName = req.query ? req.query.index.name : null, entries = queries[indexName || ""];
          if (!entries)
            return [null, !1, tblCache, null];
          switch (type2) {
            case "query":
              var reqDirection_1 = (_a2 = req.direction) !== null && _a2 !== void 0 ? _a2 : "next", equalEntry = entries.find(function(entry) {
                var _a3;
                return entry.req.limit === req.limit && entry.req.values === req.values && ((_a3 = entry.req.direction) !== null && _a3 !== void 0 ? _a3 : "next") === reqDirection_1 && areRangesEqual(entry.req.query.range, req.query.range);
              });
              if (equalEntry)
                return [
                  equalEntry,
                  !0,
                  tblCache,
                  entries
                ];
              var superEntry = entries.find(function(entry) {
                var _a3, limit = "limit" in entry.req ? entry.req.limit : 1 / 0;
                return limit >= req.limit && ((_a3 = entry.req.direction) !== null && _a3 !== void 0 ? _a3 : "next") === reqDirection_1 && (req.values ? entry.req.values : !0) && isSuperRange(entry.req.query.range, req.query.range);
              });
              return [superEntry, !1, tblCache, entries];
            case "count":
              var countQuery = entries.find(function(entry) {
                return areRangesEqual(entry.req.query.range, req.query.range);
              });
              return [countQuery, !!countQuery, tblCache, entries];
          }
        }
        __name(findCompatibleQuery, "findCompatibleQuery");
        function subscribeToCacheEntry(cacheEntry, container, requery, signal) {
          cacheEntry.subscribers.add(requery), signal.addEventListener("abort", function() {
            cacheEntry.subscribers.delete(requery), cacheEntry.subscribers.size === 0 && enqueForDeletion(cacheEntry, container);
          });
        }
        __name(subscribeToCacheEntry, "subscribeToCacheEntry");
        function enqueForDeletion(cacheEntry, container) {
          setTimeout(function() {
            cacheEntry.subscribers.size === 0 && delArrayItem(container, cacheEntry);
          }, 3e3);
        }
        __name(enqueForDeletion, "enqueForDeletion");
        var cacheMiddleware = {
          stack: "dbcore",
          level: 0,
          name: "Cache",
          create: /* @__PURE__ */ __name(function(core) {
            var dbName = core.schema.name, coreMW = __assign(__assign({}, core), { transaction: /* @__PURE__ */ __name(function(stores, mode, options) {
              var idbtrans = core.transaction(stores, mode, options);
              if (mode === "readwrite") {
                var ac_1 = new AbortController(), signal = ac_1.signal, endTransaction = /* @__PURE__ */ __name(function(wasCommitted) {
                  return function() {
                    if (ac_1.abort(), mode === "readwrite") {
                      for (var affectedSubscribers_1 = /* @__PURE__ */ new Set(), _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
                        var storeName = stores_1[_i], tblCache = cache["idb://".concat(dbName, "/").concat(storeName)];
                        if (tblCache) {
                          var table = core.table(storeName), ops = tblCache.optimisticOps.filter(function(op) {
                            return op.trans === idbtrans;
                          });
                          if (idbtrans._explicit && wasCommitted && idbtrans.mutatedParts)
                            for (var _a2 = 0, _b = Object.values(tblCache.queries.query); _a2 < _b.length; _a2++)
                              for (var entries = _b[_a2], _c = 0, _d = entries.slice(); _c < _d.length; _c++) {
                                var entry = _d[_c];
                                obsSetsOverlap(entry.obsSet, idbtrans.mutatedParts) && (delArrayItem(entries, entry), entry.subscribers.forEach(function(requery) {
                                  return affectedSubscribers_1.add(requery);
                                }));
                              }
                          else if (ops.length > 0) {
                            tblCache.optimisticOps = tblCache.optimisticOps.filter(function(op) {
                              return op.trans !== idbtrans;
                            });
                            for (var _e = 0, _f = Object.values(tblCache.queries.query); _e < _f.length; _e++)
                              for (var entries = _f[_e], _g = 0, _h = entries.slice(); _g < _h.length; _g++) {
                                var entry = _h[_g];
                                if (entry.res != null && idbtrans.mutatedParts)
                                  if (wasCommitted && !entry.dirty) {
                                    var freezeResults = Object.isFrozen(entry.res), modRes = applyOptimisticOps(entry.res, entry.req, ops, table, entry, freezeResults);
                                    entry.dirty ? (delArrayItem(entries, entry), entry.subscribers.forEach(function(requery) {
                                      return affectedSubscribers_1.add(requery);
                                    })) : modRes !== entry.res && (entry.res = modRes, entry.promise = DexiePromise.resolve({
                                      result: modRes
                                    }));
                                  } else
                                    entry.dirty && delArrayItem(entries, entry), entry.subscribers.forEach(function(requery) {
                                      return affectedSubscribers_1.add(requery);
                                    });
                              }
                          }
                        }
                      }
                      affectedSubscribers_1.forEach(function(requery) {
                        return requery();
                      });
                    }
                  };
                }, "endTransaction");
                idbtrans.addEventListener("abort", endTransaction(!1), {
                  signal
                }), idbtrans.addEventListener("error", endTransaction(!1), {
                  signal
                }), idbtrans.addEventListener("complete", endTransaction(!0), {
                  signal
                });
              }
              return idbtrans;
            }, "transaction"), table: /* @__PURE__ */ __name(function(tableName) {
              var downTable = core.table(tableName), primKey = downTable.schema.primaryKey, tableMW = __assign(__assign({}, downTable), { mutate: /* @__PURE__ */ __name(function(req) {
                var trans = PSD.trans;
                if (primKey.outbound || trans.db._options.cache === "disabled" || trans.explicit || trans.idbtrans.mode !== "readwrite")
                  return downTable.mutate(req);
                var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
                if (!tblCache)
                  return downTable.mutate(req);
                var promise = downTable.mutate(req);
                return (req.type === "add" || req.type === "put") && (req.values.length >= 50 || getEffectiveKeys(primKey, req).some(function(key) {
                  return key == null;
                })) ? promise.then(function(res) {
                  var reqWithResolvedKeys = __assign(__assign({}, req), { values: req.values.map(function(value, i) {
                    var _a2;
                    if (res.failures[i])
                      return value;
                    var valueWithKey = !((_a2 = primKey.keyPath) === null || _a2 === void 0) && _a2.includes(".") ? deepClone(value) : __assign({}, value);
                    return setByKeyPath(valueWithKey, primKey.keyPath, res.results[i]), valueWithKey;
                  }) }), adjustedReq = adjustOptimisticFromFailures(tblCache, reqWithResolvedKeys, res);
                  tblCache.optimisticOps.push(adjustedReq), queueMicrotask(function() {
                    return req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  });
                }) : (tblCache.optimisticOps.push(req), req.mutatedParts && signalSubscribersLazily(req.mutatedParts), promise.then(function(res) {
                  if (res.numFailures > 0) {
                    delArrayItem(tblCache.optimisticOps, req);
                    var adjustedReq = adjustOptimisticFromFailures(tblCache, req, res);
                    adjustedReq && tblCache.optimisticOps.push(adjustedReq), req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  }
                }), promise.catch(function() {
                  delArrayItem(tblCache.optimisticOps, req), req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                })), promise;
              }, "mutate"), query: /* @__PURE__ */ __name(function(req) {
                var _a2;
                if (!isCachableContext(PSD, downTable) || !isCachableRequest("query", req))
                  return downTable.query(req);
                var freezeResults = ((_a2 = PSD.trans) === null || _a2 === void 0 ? void 0 : _a2.db._options.cache) === "immutable", _b = PSD, requery = _b.requery, signal = _b.signal, _c = findCompatibleQuery(dbName, tableName, "query", req), cacheEntry = _c[0], exactMatch = _c[1], tblCache = _c[2], container = _c[3];
                if (cacheEntry && exactMatch)
                  cacheEntry.obsSet = req.obsSet;
                else {
                  var promise = downTable.query(req).then(function(res) {
                    var result = res.result;
                    if (cacheEntry && (cacheEntry.res = result), freezeResults) {
                      for (var i = 0, l = result.length; i < l; ++i)
                        Object.freeze(result[i]);
                      Object.freeze(result);
                    }
                    return res;
                  }).catch(function(error) {
                    return container && cacheEntry && delArrayItem(container, cacheEntry), Promise.reject(error);
                  });
                  cacheEntry = {
                    obsSet: req.obsSet,
                    promise,
                    subscribers: /* @__PURE__ */ new Set(),
                    type: "query",
                    req,
                    dirty: !1
                  }, container ? container.push(cacheEntry) : (container = [cacheEntry], tblCache || (tblCache = cache["idb://".concat(dbName, "/").concat(tableName)] = {
                    queries: {
                      query: {},
                      count: {}
                    },
                    objs: /* @__PURE__ */ new Map(),
                    optimisticOps: [],
                    unsignaledParts: {}
                  }), tblCache.queries.query[req.query.index.name || ""] = container);
                }
                return subscribeToCacheEntry(cacheEntry, container, requery, signal), cacheEntry.promise.then(function(res) {
                  var result = applyOptimisticOps(res.result, req, tblCache?.optimisticOps, downTable, cacheEntry, freezeResults);
                  return {
                    result: freezeResults ? result : deepClone(result)
                  };
                });
              }, "query") });
              return tableMW;
            }, "table") });
            return coreMW;
          }, "create")
        };
        function vipify(target, vipDb) {
          return new Proxy(target, {
            get: /* @__PURE__ */ __name(function(target2, prop, receiver) {
              return prop === "db" ? vipDb : Reflect.get(target2, prop, receiver);
            }, "get")
          });
        }
        __name(vipify, "vipify");
        var Dexie$1 = (function() {
          function Dexie3(name, options) {
            var _this = this;
            this._middlewares = {}, this.verno = 0;
            var deps = Dexie3.dependencies;
            this._options = options = __assign({
              addons: Dexie3.addons,
              autoOpen: !0,
              indexedDB: deps.indexedDB,
              IDBKeyRange: deps.IDBKeyRange,
              cache: "cloned",
              maxConnections: DEFAULT_MAX_CONNECTIONS
            }, options), this._deps = {
              indexedDB: options.indexedDB,
              IDBKeyRange: options.IDBKeyRange
            };
            var addons = options.addons;
            this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
            var state2 = {
              dbOpenError: null,
              isBeingOpened: !1,
              onReadyBeingFired: null,
              openComplete: !1,
              dbReadyResolve: nop,
              dbReadyPromise: null,
              cancelOpen: nop,
              openCanceller: null,
              autoSchema: !0,
              PR1398_maxLoop: 3,
              autoOpen: options.autoOpen
            };
            state2.dbReadyPromise = new DexiePromise(function(resolve) {
              state2.dbReadyResolve = resolve;
            }), state2.openCanceller = new DexiePromise(function(_, reject) {
              state2.cancelOpen = reject;
            }), this._state = state2, this.name = name, this.on = Events(this, "populate", "blocked", "versionchange", "close", {
              ready: [promisableChain, nop]
            }), this.once = function(event, callback) {
              var fn = /* @__PURE__ */ __name(function() {
                for (var args = [], _i = 0; _i < arguments.length; _i++)
                  args[_i] = arguments[_i];
                _this.on(event).unsubscribe(fn), callback.apply(_this, args);
              }, "fn");
              return _this.on(event, fn);
            }, this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
              return function(subscriber, bSticky) {
                Dexie3.vip(function() {
                  var state3 = _this._state;
                  if (state3.openComplete)
                    state3.dbOpenError || DexiePromise.resolve().then(subscriber), bSticky && subscribe(subscriber);
                  else if (state3.onReadyBeingFired)
                    state3.onReadyBeingFired.push(subscriber), bSticky && subscribe(subscriber);
                  else {
                    subscribe(subscriber);
                    var db_1 = _this;
                    bSticky || subscribe(/* @__PURE__ */ __name(function unsubscribe() {
                      db_1.on.ready.unsubscribe(subscriber), db_1.on.ready.unsubscribe(unsubscribe);
                    }, "unsubscribe"));
                  }
                });
              };
            }), this.Collection = createCollectionConstructor(this), this.Table = createTableConstructor(this), this.Transaction = createTransactionConstructor(this), this.Version = createVersionConstructor(this), this.WhereClause = createWhereClauseConstructor(this), this.on("versionchange", function(ev) {
              ev.newVersion > 0 ? console.warn("Another connection wants to upgrade database '".concat(_this.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(_this.name, "'. Closing db now to resume the delete request.")), _this.close({ disableAutoOpen: !1 });
            }), this.on("blocked", function(ev) {
              !ev.newVersion || ev.newVersion < ev.oldVersion ? console.warn("Dexie.delete('".concat(_this.name, "') was blocked")) : console.warn("Upgrade '".concat(_this.name, "' blocked by other connection holding version ").concat(ev.oldVersion / 10));
            }), this._maxKey = getMaxKey(options.IDBKeyRange), this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
              return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
            }, this._fireOnBlocked = function(ev) {
              _this.on("blocked").fire(ev), connections.toArray().filter(function(c) {
                return c.name === _this.name && c !== _this && !c._state.vcFired;
              }).map(function(c) {
                return c.on("versionchange").fire(ev);
              });
            }, this.use(cacheExistingValuesMiddleware), this.use(cacheMiddleware), this.use(observabilityMiddleware), this.use(virtualIndexMiddleware), this.use(hooksMiddleware);
            var vipDB = new Proxy(this, {
              get: /* @__PURE__ */ __name(function(_, prop, receiver) {
                if (prop === "_vip")
                  return !0;
                if (prop === "table")
                  return function(tableName) {
                    return vipify(_this.table(tableName), vipDB);
                  };
                var rv = Reflect.get(_, prop, receiver);
                return rv instanceof Table ? vipify(rv, vipDB) : prop === "tables" ? rv.map(function(t) {
                  return vipify(t, vipDB);
                }) : prop === "_createTransaction" ? function() {
                  var tx = rv.apply(this, arguments);
                  return vipify(tx, vipDB);
                } : rv;
              }, "get")
            });
            this.vip = vipDB, addons.forEach(function(addon) {
              return addon(_this);
            });
          }
          return __name(Dexie3, "Dexie"), Dexie3.prototype.version = function(versionNumber) {
            if (isNaN(versionNumber) || versionNumber < 0.1)
              throw new exceptions.Type("Given version is not a positive number");
            if (versionNumber = Math.round(versionNumber * 10) / 10, this.idbdb || this._state.isBeingOpened)
              throw new exceptions.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, versionNumber);
            var versions = this._versions, versionInstance = versions.filter(function(v) {
              return v._cfg.version === versionNumber;
            })[0];
            return versionInstance || (versionInstance = new this.Version(versionNumber), versions.push(versionInstance), versions.sort(lowerVersionFirst), versionInstance.stores({}), this._state.autoSchema = !1, versionInstance);
          }, Dexie3.prototype._whenReady = function(fn) {
            var _this = this;
            return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
              if (_this._state.openComplete)
                return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
              if (!_this._state.isBeingOpened) {
                if (!_this._state.autoOpen) {
                  reject(new exceptions.DatabaseClosed());
                  return;
                }
                _this.open().catch(nop);
              }
              _this._state.dbReadyPromise.then(resolve, reject);
            }).then(fn);
          }, Dexie3.prototype.use = function(_a2) {
            var stack = _a2.stack, create = _a2.create, level = _a2.level, name = _a2.name;
            name && this.unuse({ stack, name });
            var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
            return middlewares.push({
              stack,
              create,
              level: level ?? 10,
              name
            }), middlewares.sort(function(a, b) {
              return a.level - b.level;
            }), this;
          }, Dexie3.prototype.unuse = function(_a2) {
            var stack = _a2.stack, name = _a2.name, create = _a2.create;
            return stack && this._middlewares[stack] && (this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
              return create ? mw.create !== create : name ? mw.name !== name : !1;
            })), this;
          }, Dexie3.prototype.open = function() {
            var _this = this;
            return usePSD(
              globalPSD,
              function() {
                return dexieOpen(_this);
              }
            );
          }, Dexie3.prototype._close = function() {
            this.on.close.fire(new CustomEvent("close"));
            var state2 = this._state;
            if (connections.remove(this), this.idbdb) {
              try {
                this.idbdb.close();
              } catch {
              }
              this.idbdb = null;
            }
            state2.isBeingOpened || (state2.dbReadyPromise = new DexiePromise(function(resolve) {
              state2.dbReadyResolve = resolve;
            }), state2.openCanceller = new DexiePromise(function(_, reject) {
              state2.cancelOpen = reject;
            }));
          }, Dexie3.prototype.close = function(_a2) {
            var _b = _a2 === void 0 ? { disableAutoOpen: !0 } : _a2, disableAutoOpen = _b.disableAutoOpen, state2 = this._state;
            disableAutoOpen ? (state2.isBeingOpened && state2.cancelOpen(new exceptions.DatabaseClosed()), this._close(), state2.autoOpen = !1, state2.dbOpenError = new exceptions.DatabaseClosed()) : (this._close(), state2.autoOpen = this._options.autoOpen || state2.isBeingOpened, state2.openComplete = !1, state2.dbOpenError = null);
          }, Dexie3.prototype.delete = function(closeOptions) {
            var _this = this;
            closeOptions === void 0 && (closeOptions = { disableAutoOpen: !0 });
            var hasInvalidArguments = arguments.length > 0 && typeof arguments[0] != "object", state2 = this._state;
            return new DexiePromise(function(resolve, reject) {
              var doDelete = /* @__PURE__ */ __name(function() {
                _this.close(closeOptions);
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function() {
                  _onDatabaseDeleted(_this._deps, _this.name), resolve();
                }), req.onerror = eventRejectHandler(reject), req.onblocked = _this._fireOnBlocked;
              }, "doDelete");
              if (hasInvalidArguments)
                throw new exceptions.InvalidArgument("Invalid closeOptions argument to db.delete()");
              state2.isBeingOpened ? state2.dbReadyPromise.then(doDelete) : doDelete();
            });
          }, Dexie3.prototype.backendDB = function() {
            return this.idbdb;
          }, Dexie3.prototype.isOpen = function() {
            return this.idbdb !== null;
          }, Dexie3.prototype.hasBeenClosed = function() {
            var dbOpenError = this._state.dbOpenError;
            return dbOpenError && dbOpenError.name === "DatabaseClosedError";
          }, Dexie3.prototype.hasFailed = function() {
            return this._state.dbOpenError !== null;
          }, Dexie3.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema;
          }, Object.defineProperty(Dexie3.prototype, "tables", {
            get: /* @__PURE__ */ __name(function() {
              var _this = this;
              return keys(this._allTables).map(function(name) {
                return _this._allTables[name];
              });
            }, "get"),
            enumerable: !1,
            configurable: !0
          }), Dexie3.prototype.transaction = function() {
            var args = extractTransactionArgs.apply(this, arguments);
            return this._transaction.apply(this, args);
          }, Dexie3.prototype._transaction = function(mode, tables, scopeFunc) {
            var _this = this, parentTransaction = PSD.trans;
            (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) && (parentTransaction = null);
            var onlyIfCompatible = mode.indexOf("?") !== -1;
            mode = mode.replace("!", "").replace("?", "");
            var idbMode, storeNames;
            try {
              if (storeNames = tables.map(function(table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName != "string")
                  throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
              }), mode == "r" || mode === READONLY)
                idbMode = READONLY;
              else if (mode == "rw" || mode == READWRITE)
                idbMode = READWRITE;
              else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
              if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE)
                  if (onlyIfCompatible)
                    parentTransaction = null;
                  else
                    throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                parentTransaction && storeNames.forEach(function(storeName) {
                  if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1)
                    if (onlyIfCompatible)
                      parentTransaction = null;
                    else
                      throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                }), onlyIfCompatible && parentTransaction && !parentTransaction.active && (parentTransaction = null);
              }
            } catch (e) {
              return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
                reject(e);
              }) : rejection(e);
            }
            var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
            return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
              return _this._whenReady(enterTransaction);
            }) : this._whenReady(enterTransaction);
          }, Dexie3.prototype.table = function(tableName) {
            if (!hasOwn(this._allTables, tableName))
              throw new exceptions.InvalidTable("Table ".concat(tableName, " does not exist"));
            return this._allTables[tableName];
          }, Dexie3;
        })(), symbolObservable = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Observable = (function() {
          function Observable2(subscribe) {
            this._subscribe = subscribe;
          }
          return __name(Observable2, "Observable"), Observable2.prototype.subscribe = function(x, error, complete) {
            return this._subscribe(!x || typeof x == "function" ? { next: x, error, complete } : x);
          }, Observable2.prototype[symbolObservable] = function() {
            return this;
          }, Observable2;
        })(), domDeps;
        try {
          domDeps = {
            indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
            IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
          };
        } catch {
          domDeps = { indexedDB: null, IDBKeyRange: null };
        }
        function liveQuery2(querier) {
          var hasValue = !1, currentValue, observable = new Observable(function(observer) {
            var scopeFuncIsAsync = isAsyncFunction(querier);
            function execute(ctx) {
              var wasRootExec = beginMicroTickScope();
              try {
                scopeFuncIsAsync && incrementExpectedAwaits();
                var rv = newScope(querier, ctx);
                return scopeFuncIsAsync && (rv = rv.finally(decrementExpectedAwaits)), rv;
              } finally {
                wasRootExec && endMicroTickScope();
              }
            }
            __name(execute, "execute");
            var closed = !1, abortController, accumMuts = {}, currentObs = {}, subscription = {
              get closed() {
                return closed;
              },
              unsubscribe: /* @__PURE__ */ __name(function() {
                closed || (closed = !0, abortController && abortController.abort(), startedListening && globalEvents.storagemutated.unsubscribe(mutationListener));
              }, "unsubscribe")
            };
            observer.start && observer.start(subscription);
            var startedListening = !1, doQuery = /* @__PURE__ */ __name(function() {
              return execInGlobalContext(_doQuery);
            }, "doQuery");
            function shouldNotify() {
              return obsSetsOverlap(currentObs, accumMuts);
            }
            __name(shouldNotify, "shouldNotify");
            var mutationListener = /* @__PURE__ */ __name(function(parts) {
              extendObservabilitySet(accumMuts, parts), shouldNotify() && doQuery();
            }, "mutationListener"), _doQuery = /* @__PURE__ */ __name(function() {
              if (!(closed || !domDeps.indexedDB)) {
                accumMuts = {};
                var subscr = {};
                abortController && abortController.abort(), abortController = new AbortController();
                var ctx = {
                  subscr,
                  signal: abortController.signal,
                  requery: doQuery,
                  querier,
                  trans: null
                }, ret = execute(ctx);
                startedListening || (globalEvents.storagemutated.subscribe(mutationListener), startedListening = !0), Promise.resolve(ret).then(function(result) {
                  hasValue = !0, currentValue = result, !(closed || ctx.signal.aborted) && (shouldNotify() ? doQuery() : (currentObs = subscr, shouldNotify() ? doQuery() : (accumMuts = {}, execInGlobalContext(function() {
                    return !closed && observer.next && observer.next(result);
                  }))));
                }, function(err) {
                  closed || ctx.signal.aborted || (hasValue = !1, ["DatabaseClosedError", "AbortError"].includes(err?.name) || closed || execInGlobalContext(function() {
                    closed || observer.error && observer.error(err);
                  }));
                });
              }
            }, "_doQuery");
            return setTimeout(doQuery, 0), subscription;
          });
          return observable.hasValue = function() {
            return hasValue;
          }, observable.getValue = function() {
            return currentValue;
          }, observable;
        }
        __name(liveQuery2, "liveQuery");
        var Dexie2 = Dexie$1;
        props(Dexie2, __assign(__assign({}, fullNameExceptions), {
          delete: /* @__PURE__ */ __name(function(databaseName) {
            var db2 = new Dexie2(databaseName, { addons: [] });
            return db2.delete();
          }, "delete"),
          exists: /* @__PURE__ */ __name(function(name) {
            return new Dexie2(name, { addons: [] }).open().then(function(db2) {
              return db2.close(), !0;
            }).catch("NoSuchDatabaseError", function() {
              return !1;
            });
          }, "exists"),
          getDatabaseNames: /* @__PURE__ */ __name(function(cb) {
            try {
              return getDatabaseNames(Dexie2.dependencies).then(cb);
            } catch {
              return rejection(new exceptions.MissingAPI());
            }
          }, "getDatabaseNames"),
          defineClass: /* @__PURE__ */ __name(function() {
            function Class(content) {
              extend(this, content);
            }
            return __name(Class, "Class"), Class;
          }, "defineClass"),
          ignoreTransaction: /* @__PURE__ */ __name(function(scopeFunc) {
            return PSD.trans ? usePSD(PSD.transless || globalPSD, scopeFunc) : scopeFunc();
          }, "ignoreTransaction"),
          vip,
          async: /* @__PURE__ */ __name(function(generatorFn) {
            return function() {
              try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                return !rv || typeof rv.then != "function" ? DexiePromise.resolve(rv) : rv;
              } catch (e) {
                return rejection(e);
              }
            };
          }, "async"),
          spawn: /* @__PURE__ */ __name(function(generatorFn, args, thiz) {
            try {
              var rv = awaitIterator(generatorFn.apply(thiz, args || []));
              return !rv || typeof rv.then != "function" ? DexiePromise.resolve(rv) : rv;
            } catch (e) {
              return rejection(e);
            }
          }, "spawn"),
          currentTransaction: {
            get: /* @__PURE__ */ __name(function() {
              return PSD.trans || null;
            }, "get")
          },
          waitFor: /* @__PURE__ */ __name(function(promiseOrFunction, optionalTimeout) {
            var promise = DexiePromise.resolve(typeof promiseOrFunction == "function" ? Dexie2.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
            return PSD.trans ? PSD.trans.waitFor(promise) : promise;
          }, "waitFor"),
          Promise: DexiePromise,
          debug: {
            get: /* @__PURE__ */ __name(function() {
              return debug;
            }, "get"),
            set: /* @__PURE__ */ __name(function(value) {
              setDebug(value);
            }, "set")
          },
          derive,
          extend,
          props,
          override,
          Events,
          on: globalEvents,
          liveQuery: liveQuery2,
          extendObservabilitySet,
          getByKeyPath,
          setByKeyPath,
          delByKeyPath,
          shallowClone,
          deepClone,
          getObjectDiff,
          cmp: cmp2,
          asap: asap$1,
          minKey,
          addons: [],
          connections: {
            get: connections.toArray
          },
          errnames,
          dependencies: domDeps,
          cache,
          semVer: DEXIE_VERSION,
          version: DEXIE_VERSION.split(".").map(function(n) {
            return parseInt(n);
          }).reduce(function(p, c, i) {
            return p + c / Math.pow(10, i * 2);
          })
        })), Dexie2.maxKey = getMaxKey(Dexie2.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
          if (!propagatingLocally) {
            var event_1;
            event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
              detail: updatedParts
            }), propagatingLocally = !0, dispatchEvent(event_1), propagatingLocally = !1;
          }
        }), addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a2) {
          var detail = _a2.detail;
          propagatingLocally || propagateLocally(detail);
        }));
        function propagateLocally(updateParts) {
          var wasMe = propagatingLocally;
          try {
            propagatingLocally = !0, globalEvents.storagemutated.fire(updateParts), signalSubscribersNow(updateParts, !0);
          } finally {
            propagatingLocally = wasMe;
          }
        }
        __name(propagateLocally, "propagateLocally");
        var propagatingLocally = !1, bc, createBC = /* @__PURE__ */ __name(function() {
        }, "createBC");
        typeof BroadcastChannel < "u" && (createBC = /* @__PURE__ */ __name(function() {
          bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME), bc.onmessage = function(ev) {
            return ev.data && propagateLocally(ev.data);
          };
        }, "createBC"), createBC(), typeof bc.unref == "function" && bc.unref(), globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
          propagatingLocally || bc.postMessage(changedParts);
        })), typeof addEventListener < "u" && (addEventListener("pagehide", function(event) {
          if (!Dexie$1.disableBfCache && event.persisted) {
            debug && console.debug("Dexie: handling persisted pagehide"), bc?.close();
            for (var _i = 0, _a2 = connections.toArray(); _i < _a2.length; _i++) {
              var db2 = _a2[_i];
              db2.close({ disableAutoOpen: !1 });
            }
          }
        }), addEventListener("pageshow", function(event) {
          !Dexie$1.disableBfCache && event.persisted && (debug && console.debug("Dexie: handling persisted pageshow"), createBC(), propagateLocally({ all: new RangeSet2(-1 / 0, [[]]) }));
        }));
        function add2(value) {
          return new PropModification2({ add: value });
        }
        __name(add2, "add");
        function remove3(value) {
          return new PropModification2({ remove: value });
        }
        __name(remove3, "remove");
        function replacePrefix2(a, b) {
          return new PropModification2({ replacePrefix: [a, b] });
        }
        __name(replacePrefix2, "replacePrefix"), DexiePromise.rejectionMapper = mapError, setDebug(debug);
        var namedExports = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          DEFAULT_MAX_CONNECTIONS,
          Dexie: Dexie$1,
          Entity: Entity2,
          PropModification: PropModification2,
          RangeSet: RangeSet2,
          add: add2,
          cmp: cmp2,
          default: Dexie$1,
          liveQuery: liveQuery2,
          mergeRanges: mergeRanges2,
          rangesOverlap: rangesOverlap2,
          remove: remove3,
          replacePrefix: replacePrefix2
        });
        return __assign(Dexie$1, namedExports, { default: Dexie$1 }), Dexie$1;
      }));
    }
  });

  // src/content/core/transactions/fiatConfig.js
  var ROBUX_FIAT_RATE_MODE_NORMAL = "normal", ROBUX_FIAT_RATE_MODE_DEVEX = "devex";
  var ROBUX_FIAT_ESTIMATE_DEFAULT_GRADIENT = {
    enabled: !0,
    color1: "#5fa8ff",
    color2: "#d05bff",
    angle: 90,
    fade: 100
  };
  var TRANSACTION_FIAT_CURRENCY_OPTIONS = [
    { value: "USD", label: "USD - US Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "CAD", label: "CAD - Canadian Dollar" },
    { value: "AUD", label: "AUD - Australian Dollar" },
    { value: "NZD", label: "NZD - New Zealand Dollar" },
    { value: "JPY", label: "JPY - Japanese Yen" },
    { value: "CNY", label: "CNY - Chinese Yuan" },
    { value: "HKD", label: "HKD - Hong Kong Dollar" },
    { value: "SGD", label: "SGD - Singapore Dollar" },
    { value: "KRW", label: "KRW - South Korean Won" },
    { value: "TWD", label: "TWD - Taiwan Dollar" },
    { value: "INR", label: "INR - Indian Rupee" },
    { value: "PKR", label: "PKR - Pakistani Rupee" },
    { value: "BDT", label: "BDT - Bangladeshi Taka" },
    { value: "IDR", label: "IDR - Indonesian Rupiah" },
    { value: "MYR", label: "MYR - Malaysian Ringgit" },
    { value: "PHP", label: "PHP - Philippine Peso" },
    { value: "THB", label: "THB - Thai Baht" },
    { value: "VND", label: "VND - Vietnamese Dong" },
    { value: "AED", label: "AED - UAE Dirham" },
    { value: "SAR", label: "SAR - Saudi Riyal" },
    { value: "QAR", label: "QAR - Qatari Riyal" },
    { value: "KWD", label: "KWD - Kuwaiti Dinar" },
    { value: "BHD", label: "BHD - Bahraini Dinar" },
    { value: "OMR", label: "OMR - Omani Rial" },
    { value: "ILS", label: "ILS - Israeli New Shekel" },
    { value: "EGP", label: "EGP - Egyptian Pound" },
    { value: "NGN", label: "NGN - Nigerian Naira" },
    { value: "KES", label: "KES - Kenyan Shilling" },
    { value: "MAD", label: "MAD - Moroccan Dirham" },
    { value: "ZAR", label: "ZAR - South African Rand" },
    { value: "CHF", label: "CHF - Swiss Franc" },
    { value: "SEK", label: "SEK - Swedish Krona" },
    { value: "NOK", label: "NOK - Norwegian Krone" },
    { value: "DKK", label: "DKK - Danish Krone" },
    { value: "ISK", label: "ISK - Icelandic Krona" },
    { value: "PLN", label: "PLN - Polish Zloty" },
    { value: "CZK", label: "CZK - Czech Koruna" },
    { value: "HUF", label: "HUF - Hungarian Forint" },
    { value: "RON", label: "RON - Romanian Leu" },
    { value: "BGN", label: "BGN - Bulgarian Lev" },
    { value: "HRK", label: "HRK - Croatian Kuna" },
    { value: "RSD", label: "RSD - Serbian Dinar" },
    { value: "UAH", label: "UAH - Ukrainian Hryvnia" },
    { value: "RUB", label: "RUB - Russian Ruble" },
    { value: "KZT", label: "KZT - Kazakhstani Tenge" },
    { value: "TRY", label: "TRY - Turkish Lira" },
    { value: "BRL", label: "BRL - Brazilian Real" },
    { value: "MXN", label: "MXN - Mexican Peso" },
    { value: "ARS", label: "ARS - Argentine Peso" },
    { value: "CLP", label: "CLP - Chilean Peso" },
    { value: "COP", label: "COP - Colombian Peso" },
    { value: "PEN", label: "PEN - Peruvian Sol" },
    { value: "UYU", label: "UYU - Uruguayan Peso" },
    { value: "VES", label: "VES - Venezuelan Bolivar" }
  ], TRANSACTION_FIAT_RATE_OPTIONS = [
    {
      value: ROBUX_FIAT_RATE_MODE_NORMAL,
      label: "Normal Purchase Rate"
    },
    {
      value: ROBUX_FIAT_RATE_MODE_DEVEX,
      label: "DevEx Cash-Out Rate"
    }
  ];

  // src/content/core/backgroundImage.js
  var DEFAULT_BACKGROUND_IMAGE = Object.freeze({
    source: "",
    opacity: 1,
    size: "cover",
    customSize: 100,
    position: "center",
    repeat: "no-repeat",
    blur: 0,
    overlayColor: "#000000",
    overlayOpacity: 0,
    overrideTopbarSidebar: !1
  });

  // src/content/core/themeVariables.js
  var THEME_VARIABLE_GROUPS = [
    {
      key: "surfaces",
      label: "Surfaces",
      tokens: [
        { key: "surface-0", label: "Page Background" },
        { key: "surface-100", label: "Surface 100" },
        { key: "surface-200", label: "Surface 200" },
        { key: "surface-300", label: "Surface 300" },
        { key: "common-navigation-bar", label: "Navigation Bar" },
        { key: "over-media-0", label: "Over Media 0" },
        { key: "over-media-100", label: "Over Media 100" },
        { key: "over-media-200", label: "Over Media 200" },
        { key: "over-media-300", label: "Over Media 300" },
        { key: "common-backdrop", label: "Backdrop" }
      ]
    },
    {
      key: "content",
      label: "Text",
      tokens: [
        { key: "content-emphasis", label: "Emphasis Text" },
        { key: "content-default", label: "Default Text" },
        { key: "content-muted", label: "Muted Text" },
        { key: "content-link", label: "Link Text" }
      ]
    },
    {
      key: "strokes",
      label: "Strokes & Shifts",
      tokens: [
        { key: "stroke-default", label: "Stroke Default" },
        { key: "stroke-emphasis", label: "Stroke Emphasis" },
        { key: "stroke-muted", label: "Stroke Muted" },
        { key: "common-heavy-divider", label: "Heavy Divider" },
        { key: "shift-100", label: "Shift 100" },
        { key: "shift-200", label: "Shift 200" },
        { key: "shift-300", label: "Shift 300" },
        { key: "shift-400", label: "Shift 400" }
      ]
    },
    {
      key: "system",
      label: "System",
      tokens: [
        { key: "system-emphasis", label: "Emphasis" },
        { key: "system-contrast", label: "Contrast" },
        { key: "system-alert", label: "Alert" },
        { key: "system-success", label: "Success" },
        { key: "system-warning", label: "Warning" },
        { key: "system-neutral", label: "Neutral" }
      ]
    },
    {
      key: "actions",
      label: "Buttons",
      tokens: [
        { key: "action-emphasis-background", label: "Primary Background" },
        { key: "action-emphasis-foreground", label: "Primary Text" },
        { key: "action-standard-background", label: "Standard Background" },
        { key: "action-standard-foreground", label: "Standard Text" },
        {
          key: "action-soft-emphasis-background",
          label: "Soft Background"
        },
        { key: "action-soft-emphasis-foreground", label: "Soft Text" },
        { key: "action-subtle-border", label: "Subtle Border" },
        { key: "action-alert-foreground", label: "Alert Text" },
        {
          key: "action-over-media-background",
          label: "Over Media Background"
        },
        { key: "action-over-media-foreground", label: "Over Media Text" }
      ]
    }
  ], THEME_VARIABLE_KEYS = THEME_VARIABLE_GROUPS.flatMap(
    (group) => group.tokens.map((token) => token.key)
  ), THEME_VARIABLE_KEY_SET = new Set(THEME_VARIABLE_KEYS), ROBLOX_THEME_PRESETS = [
    { label: "Classic", value: "classic" },
    { label: "Circuit Rush", value: "circuit-rush" },
    { label: "Cosmic Dust", value: "cosmic-dust" },
    { label: "Electric Lime", value: "electric-lime" },
    { label: "Hyper Plum", value: "hyper-plum" },
    { label: "Inferno Blast", value: "inferno-blast" },
    { label: "Kinetic Energy", value: "kinetic-energy" },
    { label: "Lava Glow", value: "lava-glow" },
    { label: "Nebula Drift", value: "nebula-drift" },
    { label: "Nitro Frost", value: "nitro-frost" },
    { label: "Pixel Pop", value: "pixel-pop" },
    { label: "Polar Freeze", value: "polar-freeze" },
    { label: "Quantum Pulse", value: "quantum-pulse" },
    { label: "Star Burst", value: "star-burst" },
    { label: "Super Charge", value: "super-charge" }
  ], PRESET_VALUES = new Set(
    ROBLOX_THEME_PRESETS.map((preset) => preset.value)
  );
  function getPresetClasses(preset) {
    return PRESET_VALUES.has(preset) ? [`theme-${preset}`, `${preset}-theme`] : [];
  }
  __name(getPresetClasses, "getPresetClasses");
  var ALL_PRESET_CLASSES = ROBLOX_THEME_PRESETS.flatMap(
    (preset) => getPresetClasses(preset.value)
  ), DEFAULT_THEME_VARIABLES = Object.freeze({
    preset: "",
    themeId: "",
    dark: Object.freeze({}),
    light: Object.freeze({})
  }), HEXA_COLOR_PATTERN = /^#[0-9a-f]{8}$/i, THEME_ID_PATTERN = /^[a-z0-9-]{1,40}$/;
  function sanitizeModeValues(values) {
    let result = {};
    if (!values || typeof values != "object") return result;
    for (let [key, value] of Object.entries(values))
      THEME_VARIABLE_KEY_SET.has(key) && (typeof value != "string" || !HEXA_COLOR_PATTERN.test(value) || (result[key] = value.toLowerCase()));
    return result;
  }
  __name(sanitizeModeValues, "sanitizeModeValues");
  function sanitizeThemeVariables(value) {
    let config = value && typeof value == "object" ? value : {};
    return {
      preset: PRESET_VALUES.has(config.preset) ? config.preset : "",
      themeId: typeof config.themeId == "string" && THEME_ID_PATTERN.test(config.themeId) ? config.themeId : "",
      dark: sanitizeModeValues(config.dark),
      light: sanitizeModeValues(config.light)
    };
  }
  __name(sanitizeThemeVariables, "sanitizeThemeVariables");
  function getThemeLook(value) {
    let { preset, dark, light } = sanitizeThemeVariables(value);
    return { preset, dark, light };
  }
  __name(getThemeLook, "getThemeLook");
  var BUILT_IN_THEMES = [
    {
      id: "builtin-very-dark",
      nameKey: "veryDark",
      name: "Very dark theme",
      theme: getThemeLook({
        dark: {
          "surface-0": "#000000ff",
          "surface-100": "#000000ff",
          "surface-200": "#000000ff",
          "surface-300": "#131316ff"
        }
      })
    }
  ];

  // src/content/core/locale/translationProgress.js
  var localeResources = /* @__PURE__ */ new Map();
  function flattenTranslationKeys(value, prefix = "", keys = []) {
    return value && typeof value == "object" && !Array.isArray(value) ? Object.entries(value).forEach(([key, child]) => {
      flattenTranslationKeys(
        child,
        prefix ? `${prefix}.${key}` : key,
        keys
      );
    }) : prefix && keys.push(prefix), keys;
  }
  __name(flattenTranslationKeys, "flattenTranslationKeys");
  function getValueAtPath(value, path) {
    return path.split(".").reduce((current, key) => current?.[key], value);
  }
  __name(getValueAtPath, "getValueAtPath");
  function getTranslationProgress(language) {
    let locale = localeResources.get(language), english = localeResources.get("en");
    if (!locale || !english) return null;
    if (language === "en") return 100;
    let englishKeys = flattenTranslationKeys(english), translatedKeys = englishKeys.filter((key) => {
      let value = getValueAtPath(locale, key);
      return typeof value == "string" && value.trim().length > 0;
    }).length;
    return Math.round(translatedKeys / englishKeys.length * 1e3) / 10;
  }
  __name(getTranslationProgress, "getTranslationProgress");

  // src/content/core/settings/settingConfig.js
  function languageLabel(label, language) {
    let progress = getTranslationProgress(language);
    return progress === null ? label : `${label} (${progress}%)`;
  }
  __name(languageLabel, "languageLabel");
  var SETTINGS_CONFIG = {
    RoValra: {
      title: "RoValra",
      hidden: !0,
      settings: {
        rovalraLanguage: {
          label: "RoValra Language",
          contributors: [1564574922],
          description: [
            "Manually configure a language for RoValra. Some translations may be missing.",
            // it works on the setting page only once it figures out the language from other pages' URLs
            "The page will reload to apply changes. Might not work immediately on the settings page.",
            "We do not promise up to date translations. These translations are translated by the community, we cannot promise 100% accuracy "
          ],
          type: "select",
          options: [
            {
              label: languageLabel("English", "en"),
              value: "en"
            },
            {
              label: languageLabel("Russian (\u0420\u0443\u0441\u0441\u043A\u0438\u0439)", "ru"),
              value: "ru"
            },
            {
              label: languageLabel("German (Deutsch)", "de"),
              value: "de"
            },
            {
              label: languageLabel(
                "Brazilian Portuguese (Portugu\xEAs (Brasil))",
                "pt"
              ),
              value: "pt"
            },
            {
              label: languageLabel("French (Fran\xE7ais)", "fr"),
              value: "fr"
            },
            {
              label: languageLabel("Polish (Polski)", "pl"),
              value: "pl"
            },
            {
              label: languageLabel("Romanian (Rom\xE2n\u0103)", "ro"),
              value: "ro"
            },
            {
              label: languageLabel(
                "Indonesian (Bahasa Indonesia)",
                "id"
              ),
              value: "id"
            },
            {
              label: languageLabel("Spanish (Espa\xF1ol)", "es"),
              value: "es"
            },
            {
              label: languageLabel("French (Fran\xE7ais)", "fr"),
              value: "fr"
            },
            {
              label: languageLabel(
                "Traditional Chinese (\u7E41\u9AD4\u4E2D\u6587)",
                "zh_TW"
              ),
              value: "zh_TW"
            },
            {
              label: languageLabel(
                "Simplified Chinese (\u7B80\u4F53\u4E2D\u6587)",
                "zh_CN"
              ),
              value: "zh_CN"
            },
            {
              label: languageLabel("Arabic (\u0639\u0631\u0628\u064A)", "ar"),
              value: "ar"
            },
            {
              label: languageLabel("Vietnamese (Ti\u1EBFng Vi\u1EC7t)", "vi"),
              value: "vi"
            },
            { label: "Automatic", value: "auto" }
          ],
          default: "en"
        },
        rovalraVersion: {
          label: `RoValra Version: v${chrome.runtime.getManifest().version}`,
          type: "yay",
          hideContributors: !0
        }
      }
    },
    Marketplace: {
      title: "Marketplace",
      settings: {
        itemSalesEnabled: {
          label: "Item Sales",
          contributors: [447170745],
          description: [
            "This shows the most up to date sales and revenue data we have.",
            "The sales data is very likely to be inaccurate on items that are for sale, but very likely to be correct on offsale items."
          ],
          deprecated: "Sale stats are very old and now inaccurate.",
          type: "checkbox",
          default: !1
        },
        SaveLotsRobuxEnabledv1: {
          label: "Save 10%-40% Robux on Purchases",
          description: [
            "This adds a button allowing you to save 40% on items on the marketplace.",
            "Keep in mind, a group is required for this to work.",
            "**When buying something there will be a 'Save X Robux' Button which when pressed will set up the experience required for it to work for you, if not already set up.**"
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            RobuxPlaceId: {
              label: "Place ID to use for the 10%-40% Robux back",
              description: [
                "It is best not to modify this, as the feature automatically sets the correct place ID when used.",
                "**Don't change this unless you know what you're doing.**"
              ],
              type: "input",
              default: null,
              placeholder: "Enter Place ID here..."
            },
            configureGame: {
              label: "Configure Experience",
              description: "Open the setup to configure an experience for the 40% method without needing to be in a purchase flow.",
              type: "button",
              buttonText: "Open Setup",
              event: "rovalra:open40methodSetup"
            },
            useSoberSupportDeeplinks: {
              label: "Use Roblox deeplinks for Sober support",
              description: "This is less stable and should only be used if on sober",
              type: "checkbox",
              default: !1
            }
          }
        },
        marketplace3DRenderEnabledV2: {
          label: "Enable Custom 3D Marketplace Item Renderer",
          description: [
            "Adds a try-on preview when hovering over items and adds a feature-rich 3D renderer to item pages.",
            "This feature was made possible because of {{[RoAvatar](https://github.com/steinann/RoAvatar) githubLink}} \u2764\uFE0F"
          ],
          type: "checkbox",
          default: !0,
          contributors: ["126448532"],
          childSettings: {
            marketplace3DRenderHoverPreviewDisabled: {
              label: "Disable Hover Preview",
              description: "Disables the 3D try-on preview when hovering over marketplace items.",
              type: "checkbox",
              default: !1
            },
            marketplace3DPostProcessing: {
              label: "Post Processing",
              description: "Post processing allows for advanced effects such as bloom and ambient occlusion, but requires a powerful device.",
              type: "checkbox",
              default: !1
            }
          }
        },
        EnableRobuxAfterPurchase: {
          label: "Robux After Purchase",
          description: "This feature restores the 'Your balance after this transaction will be X' text to the new Roblox purchase UI after it was removed.",
          type: "checkbox",
          default: !0
        },
        recentlyViewedEnabled: {
          label: "Recently Viewed Items",
          description: [
            "Adds a Recently Viewed row to the top of the Marketplace with the last items and bundles you opened.",
            "Items can be removed one by one or all at once. Your history is only stored on this device."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_recently_viewed",
          contributors: ["2239549101"],
          childSettings: {
            recentlyViewedPriceChanges: {
              label: "Show Price Changes",
              description: "Shows if an item got cheaper, more expensive, went off sale or came back on sale since you viewed it.",
              type: "checkbox",
              default: !0
            }
          }
        },
        heroUnitsEnabled: {
          label: "Marketplace Hero Units",
          description: "Adds the featured hero units, like seasonal item collections, to the top of the Marketplace landing page with when they end.",
          type: "checkbox",
          default: !0
        },
        bonusItemEnabled: {
          label: "Robux Purchase Bonus Item Selector",
          description: "Adds a bonus item selector to eligible Robux purchases of 2,000 Robux or more.",
          type: "checkbox",
          default: !1,
          beta: "Currently missing gamepasses."
        },
        EnableItemDependencies: {
          label: "Item Dependencies",
          description: [
            "This feature shows an item's dependencies, which means you can view the texture, mesh, and more."
          ],
          type: "checkbox",
          default: !0
        },
        friendOwnershipEnabled: {
          label: "Friends Who Own the Item",
          description: "Shows which of your friends own the item.",
          type: "checkbox",
          default: !0
        },
        priceFloorEnabled: {
          label: "Show Price Floor",
          description: "This will show the price floor when viewing items, and shows if the item you're viewing is sold at or above the price floor.",
          type: "checkbox",
          default: !1,
          locked: "Pain to maintain due to how Roblox updates the API this uses. They update it without any backwards compatibility in mind.",
          isPermanent: !0
        },
        ParentItemsEnabled: {
          label: "Show what bundle an item is a part of.",
          description: "When viewing items pages of items inside of a bundle it will tell you what bundle that item is from.",
          type: "checkbox",
          default: !0
        },
        PreviousPriceEnabled: {
          label: "Previous Price to item cards and on item pages.",
          description: "This shows the price of an offsale item before it went offsale and when it was last on sale.",
          type: "checkbox",
          default: !0
        },
        lastEquippedEnabled: {
          label: "Last Equipped on Item Pages",
          description: "Shows when you last equipped an item on item pages.",
          type: "checkbox",
          default: !0,
          contributors: ["4866259395", "447170745"]
        },
        ownedItemPriceEnabled: {
          label: "Price on Owned Item Pages",
          description: "Shows the price of an item on its item page even when you already own it.",
          type: "checkbox",
          default: !0
        },
        itemTradingEnabled: {
          label: "Item Trading Info",
          description: [
            "Shows Rolimons values, demand, trend, rare, projected and more on item pages."
          ],
          type: "checkbox",
          default: !0
        }
      }
    },
    Games: {
      title: "Experiences",
      settings: {
        gameBookmarksEnabled: {
          label: "Game Bookmarks",
          description: [
            "Save games to your own bookmark categories and find them later on Home."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_game_bookmarks",
          contributors: ["476449201"],
          childSettings: {
            gameBookmarksCardButtonsEnabled: {
              label: "Show Bookmark Buttons on Game Cards",
              description: [
                "Shows a Bookmark button when you hover over game cards."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        PreferredRegionEnabled: {
          label: "Preferred Region Play Button",
          description: [
            "This adds a play button that joins your preferred region.",
            "This also automatically serverhops.",
            "If you have this enabled along with Quick Play, there will be a Preferred Region quick play button."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["8345351117", "447170745"],
          childSettings: {
            robloxPreferredRegion: {
              label: "Preferred Region",
              description: [
                "Select your preferred region for joining experiences.",
                "**Automatic** will automatically attempt to find the closest region to you."
              ],
              type: "select",
              options: "REGIONS",
              showFlags: !0,
              default: "AUTO"
            },
            preferredRegionUseRobloxLatencyv1: {
              label: "Prioritize biggest servers when using Automatic Mode",
              description: [
                "This makes Preferred Region join the servers closest to you with the most players.",
                "May cause issues with some VPNs"
              ],
              type: "checkbox",
              default: !1
            },
            preferredRegionLocalSearchEnabled: {
              label: "Force Local Server Search",
              description: [
                "Searches Roblox servers locally instead of using RoValra to find servers by region.",
                "**This isn't recommended for normal users, as it'll be much slower.**"
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        QuickPlayEnable: {
          label: "Quick Play Button",
          description: [
            "This will add a quick play button to experiences so you can quickly join the experience without opening the experience page.",
            "If you have Preferred Region Play Button enabled it will also add a Preferred Region quick play button to quickly join your preferred region.",
            "This is made to look like the official Roblox client's Quick Play button."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["48255812", "447170745"],
          childSettings: {
            privateservers: {
              label: "Show Private Servers in Quick Play",
              description: [
                "This adds a button to quickly browse and join private servers to the quick play."
              ],
              type: "checkbox",
              default: !0
            },
            PaidAccessPriceBadgeEnabled: {
              label: "Show Paid Game Access Price",
              description: [
                "This adds a small box that shows the price of paid Games."
              ],
              type: "checkbox",
              default: !0,
              contributors: ["10646979010"]
            },
            playbuttonpreferredregionenabled: {
              label: "Change the normal Play button to join your preferred region in Quick Play",
              description: [
                "This makes the Roblox Play button in the Quick Play join servers closest to you, instead of a random region."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        wideGameTileStatsEnabled: {
          label: "Player Counts on Wide Tiles",
          description: [
            "Shows the concurrent player count alongside the rating on wide experience tiles."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["2963377564", "2333236354"]
        },
        whatamIJoiningEnabled: {
          label: "What Am I Joining",
          description: [
            "This shows the server ID, region, if it's a private server, and more info about the server you're joining when joining an experience."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "8345351117"],
          childSettings: {
            AlwaysGetInfo: {
              label: "Always Get Server Info",
              description: [
                "This will always get the server info, even if no server data is available.",
                "It has a very small chance to get inaccurate information."
              ],
              type: "checkbox",
              default: !0
            },
            closeUiByClickingTheBackground: {
              label: "Close the 'What am I joining' UI by clicking the background",
              description: "This allows you to click the background to close the UI, can be annoying if you want to see the info provided in the UI",
              type: "checkbox",
              default: !0
            }
          }
        },
        EnableImprovedEvents: {
          label: "Improved Events",
          description: "This allows you to view past events on experiences and how many are going.",
          type: "checkbox",
          default: !0,
          childSettings: {
            eventsTabEnabled: {
              label: "Separate Events Tab",
              description: "Moves experience events from About to their own tab.",
              type: "checkbox",
              default: !1,
              contributors: ["127238"]
            }
          }
        },
        EnableGameTrailer: {
          label: "Experience Trailer",
          description: [
            "This adds experience trailers not on YouTube to the website, replacing Roblox's way of doing it.",
            "As a result, it adds quality-of-life features such as full-screen playback, autoplay controls, video length, playback speed, and picture-in-picture mode."
          ],
          type: "checkbox",
          default: !1,
          locked: "This feature broke, and Roblox made its own version.",
          isPermanent: !0,
          childSettings: {
            Enableautoplay: {
              label: "Auto Play Trailer",
              description: [
                "This will automatically play the trailer."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        EnableDevProducts: {
          label: "View Developer Products",
          description: "This allows you to view the developer products of an experience directly on the store page.",
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "10646979010"]
        },
        shopWidgetsEnabled: {
          label: "View In-Game Shop",
          description: "This adds a Shop tab to the experience store page, bringing the in-game shop to the website.",
          type: "checkbox",
          default: !0
        },
        shopOffersEnabled: {
          label: "Show In-game Discounts",
          description: [
            "This shows active Roblox discounts for in-game purchases.",
            "So you dont have to join a game to see it."
          ],
          type: "checkbox",
          default: !0
        },
        QuickOutfitsEnabled: {
          label: "Quick Equip Outfits",
          description: [
            "This allows you to quickly switch your avatar on an experience page."
          ],
          type: "checkbox",
          default: !1
        },
        privateGameViewerEnabled: {
          label: "View Private / Moderated Games",
          description: [
            "This recreates the games page of private / moderated games, allowing you to view them."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            privateGameDetectionFallbackEnabled: {
              label: "Use Robust Private / Moderated Games Detection",
              description: [
                "This makes sure it can identify when you're trying to view a private or moderated game.",
                "Without this, it may fail to show private or moderated game pages when you open their links directly."
              ],
              type: "checkbox",
              default: !1,
              requiredPermissions: ["webRequest"]
            }
          }
        },
        gamePassViewerEnabled: {
          label: "View Gamepasses in Private / Moderated Games",
          description: [
            "This recreates the gamepass page of private / moderated games, allowing you to view them."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["9502859424"]
        },
        underReviewPillEnabled: {
          label: "Show All-Ages Review Status",
          description: [
            "Shows a small notice on experience pages when Roblox is reviewing the experience for all-ages eligibility."
          ],
          type: "checkbox",
          default: !0,
          locked: "Roblox patched this feature.",
          isPermanent: !0
        },
        botdataEnabled: {
          label: "Bot Data",
          description: [
            "Shows if an experience has a lot of bots in the description of the experience.",
            "It doesn't show the amount of bots, since the sample size is too small to give an accurate number."
          ],
          type: "checkbox",
          default: !0
        },
        subplacesEnabled: {
          label: "Subplaces",
          description: [
            "This adds a tab to an experience page that shows the subplaces of the experience."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "3050364170"],
          childSettings: {
            subplacesSortEnabled: {
              label: "Sorting",
              description: [
                "Adds sort and order controls to the Subplaces tab."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        hiddenBadgesEnabled: {
          label: "Hidden Badges",
          description: [
            "Adds a Hidden Badges tab to experience pages.",
            "This will show all badges normally hidden on the games page.",
            "Hidden badges information powered by [Rolimon's](https://www.rolimons.com/)"
          ],
          type: "checkbox",
          default: !0,
          indexedDbStore: "badges"
        },
        badgeLayoutToggleEnabled: {
          label: "Badge Layout Toggle",
          description: [
            "Adds a List / Grid toggle to experience badge sections."
          ],
          type: "checkbox",
          default: !0
        },
        badgeSortEnabled: {
          label: "Badge Sorting",
          description: [
            "Adds a Sort dropdown to experience badge sections.",
            "Sort by recently updated, newest, oldest, most or least won, won yesterday, rarity, or name."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["3050364170"]
        },
        badgeOwnershipEnabled: {
          label: "Dim Unowned Badges",
          description: [
            "Makes experience badges you don't own darker on badge pages. (Similar to how BTRoblox does it)"
          ],
          type: "checkbox",
          default: !0,
          contributors: [546872490]
        },
        badgeEarnedDateEnabled: {
          label: "Badge Earned Date",
          description: [
            "Shows when you earned a badge on badge and experience pages."
          ],
          type: "checkbox",
          default: !0,
          contributors: [476449201]
        },
        freeBadgeQuotaEnabled: {
          label: "Free Badge Quota",
          description: [
            "Shows how many badges an experience can still create for free today in its stats.",
            "Roblox lets each experience create 5 free badges every 24 hours."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["3050364170"]
        },
        gameStatTimestampsEnabled: {
          label: "Detailed Created / Updated Dates",
          description: [
            "Replaces the Created and Updated dates on experience pages with exact, clickable timestamps."
          ],
          type: "checkbox",
          default: !0
        },
        updateHistoryEnabled: {
          label: "Update History",
          description: [
            "This adds a tab to an experience page that has a heatmap showing the update history of an experience.",
            "This feature was heavily inspired by a RoPro v2 feature."
          ],
          type: "checkbox",
          default: !0,
          beta: "This feature is lacking update history data. It will slowly get it over time."
        },
        recentServersEnabled: {
          label: "Recent Servers",
          description: [
            "Shows the 4 most recent servers you joined under an experience."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_server_history"
        },
        TotalServersEnabled: {
          label: "Total Servers",
          description: [
            "This shows the total amount of servers RoValra is tracking under that experience."
          ],
          type: "checkbox",
          default: !0
        },
        GameVersionEnabled: {
          label: "Experience Version",
          description: [
            "This shows the current version an experience is on.",
            "Useful for developers."
          ],
          type: "checkbox",
          default: !0
        },
        TotalSpentGamesEnabled: {
          label: "Total Spent on Experience",
          description: [
            "This shows how much Robux you have spent total on this experience.",
            "This will scan your transactions in the background and store the total spent locally.",
            "This may take a few minutes to work after you first install the extension."
          ],
          type: "checkbox",
          default: !0,
          indexedDbStore: "transactions",
          dependedBy: ["spendingEnabled"]
        },
        OldestVersionEnabled: {
          label: "Oldest Server Version",
          description: [
            "This shows the oldest place version that servers are still running on.",
            "Useful for developers."
          ],
          type: "checkbox",
          default: !0
        },
        ServerFilterEnabled: {
          label: "Server Filters",
          description: [
            "This adds a filter to the server list.",
            "**It is highly recommended that the 'Server List Modifications' setting is enabled for this to work correctly.**"
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            RegionFiltersEnabled: {
              label: "Region Filters",
              description: "Adds Region filters in the server list.",
              type: "checkbox",
              default: !0
            },
            UptimeFiltersEnabled: {
              label: "Uptime Filters",
              description: "Adds Server Uptime filters in the server list.",
              type: "checkbox",
              default: !0
            },
            VersionFiltersEnabled: {
              label: "Place Version Filters",
              description: "Adds Place Version filters in the server list allowing you to filter by servers running a specific place version.",
              type: "checkbox",
              default: !0
            }
          }
        },
        ServerlistmodificationsEnabled: {
          label: "Server List Modifications",
          description: [
            "This adds multiple features to the server list.",
            "These modifications will also apply to the 'Servers My Friends Are In' section."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            PrivateServerGridEnabled: {
              label: "Private Server Grid",
              description: [
                "Displays private/VIP servers in a compact responsive grid.",
                "Only changes the private server section."
              ],
              type: "checkbox",
              default: !1,
              contributors: ["4632962611"]
            },
            PinPrivateServersEnabled: {
              label: "Pin Private Servers",
              description: [
                "Allows private/VIP servers to be pinned to the top of the list.",
                "Pinned servers stay above normal private servers.",
                "Missing a bit of quality of life."
              ],
              type: "checkbox",
              default: !1,
              contributors: ["4632962611"]
            },
            enableShareLink: {
              label: "Share link button",
              description: [
                "This adds a share link button under the join button so you can send a link to the server for other people to join with.",
                "This uses fishstrap.app for the share link."
              ],
              type: "checkbox",
              default: !0
            },
            EnableServerUptime: {
              label: "Server Uptime",
              description: [
                "This shows an estimate of a server's uptime in the server list.",
                "This works by RoValra tracking hundreds of thousands of servers in a database and then estimating the uptime."
              ],
              type: "checkbox",
              default: !0
            },
            EnableServerRegion: {
              label: "Server Region",
              description: [
                "This shows the server's region or location."
              ],
              type: "checkbox",
              default: !0
            },
            EnablePlaceVersion: {
              label: "Server Version",
              description: [
                "This shows the version of the experience that a specific server is running."
              ],
              type: "checkbox",
              default: !0
            },
            EnableFullServerID: {
              label: "Show the entire ServerID",
              description: [
                "This shows the entire ServerID",
                "By default Roblox only shows a part of it.",
                "It'll hide ServerIDs of servers that you're playing in or friends are playing in unless hovered over."
              ],
              type: "checkbox",
              default: !0
            },
            EnableFullServerIndicators: {
              label: "Full Server Indicators",
              description: [
                "This adds indicators when a server is full",
                "Like text that tells you the server is full if we don't have region data."
              ],
              type: "checkbox",
              default: !0
            },
            EnableServerPerformance: {
              label: "Show Server Performance",
              description: [
                "This shows the server performance, which is useful if you want to avoid poorly performing servers."
              ],
              type: "checkbox",
              default: !0
            },
            EnableMiscIndicators: {
              label: "Show misc indicators",
              description: [
                "This shows indicators for servers you can't join, such as when someone is playing in a private server."
              ],
              type: "checkbox",
              default: !0
            },
            EnableDatacenterandId: {
              label: "Show Datacenter ID and Server Ip",
              description: "This shows the Datacenter ID server Ip of servers in the server list.",
              type: "checkbox",
              default: !1
            }
          }
        },
        HidePrivateServersEnabled: {
          label: "Hide Private Servers",
          description: [
            "Adds an option to hide private servers from the server list."
          ],
          type: "checkbox",
          default: !1,
          storageKey: "hiddenFriendPrivateServers",
          contributors: ["476449201"],
          experimental: "Has a few quality of life issues."
        },
        PrivateQuickLinkCopy: {
          label: "Quick Private Server Link Copy and Generation",
          description: [
            "This allows you to quickly copy a private server link or generate a new private server link."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            privateServerFriendsToggleEnabled: {
              label: "Friends Allowed Toggle",
              description: [
                "Adds a Friends Allowed switch under Allow Joining, so you can let friends in or keep them out without opening the server settings."
              ],
              type: "checkbox",
              default: !0,
              contributors: ["4489102289"]
            }
          }
        },
        autoFriendsAllowedEnabled: {
          label: "Friends Allowed On New Private Servers",
          description: [
            "Turns on Friends Allowed as soon as you create a private server, so your friends can join without you going into its settings first.",
            "Only new servers are changed. Servers you already have are left as they are."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["4489102289"]
        }
      }
    },
    Profile: {
      title: "Profile",
      settings: {
        userGamesEnabled: {
          label: "Hidden User Experiences",
          description: [
            "Shows a user's hidden experiences on their profile."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["8345351117", "447170745", "3050364170"]
        },
        avatarDownloadEnabled: {
          label: "Download Avatar",
          description: [
            "Adds a button to save avatar as a PNG on their profile."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["9502859424"]
        },
        profilePronouns: {
          label: "Profile Pronouns",
          description: [
            "Displays your pronouns beside your username on your profile for other RoValra users.",
            "Maximum 15 characters.",
            "Emojis and spaces are allowed. Special characters such as /, comma, or ; are changed to |."
          ],
          type: "input",
          placeholder: "Enter Pronouns",
          maxLength: 15,
          showCharacterCount: !0,
          useGraphemeLength: !0,
          trim: !0,
          replaceSpecialCharactersWithPipe: !0,
          agreementKey: "rovalra_pronouns_guidelines_agreed",
          default: null,
          contributors: ["10646979010"]
        },
        displayAppThemeUserProfile: {
          label: "Display app theme user profiles",
          description: ["Displays users app theme on their profile!"],
          type: "checkbox",
          default: !1,
          childSettings: {
            displayAppThemeOwnProfile: {
              label: "Display your app theme on your profile",
              description: [
                "Displays your app theme on your profile to other users!",
                "To change this setting, you can go to [Roblox Settings > Browser preferences > App theme](https://www.roblox.com/my/account#!/browser-preferences)",
                "Enabling this setting will automatically turn on **Free Roblox Plus Themes**."
              ],
              type: "checkbox",
              default: !1,
              donatorTier: 1,
              donatorReason: "Donator Tier 1 is required to display your app theme on your own profile"
            }
          },
          contributors: ["650766686"],
          dependedBy: ["displayAppThemeOwnProfile"]
        },
        profileNotesEnabled: {
          label: "Profile Notes",
          description: [
            "Adds a private note field to Roblox profiles.",
            "Notes are stored only locally and are never shared to RoValra or Roblox.",
            "Maximum 256 characters."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_profile_notes",
          contributors: ["10646979010"],
          childSettings: {
            profileNotesBackup: {
              label: "Notes Backup",
              description: [
                "Export all profile notes or import them from a .json file.",
                "Imported notes are merged with notes already stored in this browser."
              ],
              type: "buttonGroup",
              buttons: [
                {
                  id: "export-rovalra-profile-notes",
                  text: "Export Notes"
                },
                {
                  id: "import-rovalra-profile-notes",
                  text: "Import Notes"
                }
              ]
            }
          }
        },
        profileViewsEnabled: {
          label: "Profile Views",
          description: [
            "Shows profile view counts on profiles.",
            "Disabling this hides profile views locally and hides your profile views from other RoValra users.",
            "Credit to [syra](https://www.roblox.com/users/170038374/profile) for making a concept which this feature is based on."
          ],
          type: "checkbox",
          default: !0,
          locked: "Due to people selling RoValra profile views as a service.",
          isPermanent: !0
        },
        creatorStatsEnabled: {
          label: "Creator Stats",
          description: [
            "Shows a user's combined CCU, experience visits, and owned community member count on their profile."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["4632962611"]
        },
        socialLinksEnabled: {
          label: "Profile Social Links",
          description: [
            "Shows social links below the profile description."
          ],
          type: "checkbox",
          default: !1
        },
        profileCustomizationEnabled: {
          label: "Profile Customization",
          description: [
            "Adds a customization button to your own profile for quickly switching avatar borders."
          ],
          type: "checkbox",
          default: !0
        },
        profileShowcaseEnabled: {
          label: "Profile Showcase",
          description: [
            "Adds a Showcase tab to profiles for featuring a favourite experience and community.",
            "Credit to [syra](https://www.roblox.com/users/170038374/profile) for making a concept which this feature is based on."
          ],
          type: "checkbox",
          default: !0
        },
        chatEligibilityTooltipEnabled: {
          label: "Chat Eligibility Tooltip",
          description: [
            "Shows if you can or can't chat with a friend, or if they haven't completed an age check, when hovering over the chat button on their profile."
          ],
          type: "checkbox",
          default: !0
        },
        userSniperEnabled: {
          label: "Instant Joiner",
          description: [
            "This joins a user instantly when they go into an experience, best used for people with a lot of people trying to join them.",
            "### Requirements",
            "- This feature requires the user to have their joins enabled for everyone or for you to be friends with them."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            deeplinkEnabled: {
              label: "Join through deeplinks",
              description: [
                "This will use deeplinks to join the user for faster joining but may be less reliable."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        profile3DRenderEnabled: {
          label: "Enable Custom 3D Profile Renderer",
          description: [
            "Replaces the default profile avatar with a more customizable and feature-rich 3D renderer.",
            "This feature is required for custom environments and other render-related settings.",
            "This feature was made possible because of {{[RoAvatar](https://github.com/steinann/RoAvatar) githubLink}} \u2764\uFE0F"
          ],
          type: "checkbox",
          default: !1,
          contributors: ["126448532", "447170745"],
          experimental: "This feature may cause performance issues. And may be buggy",
          childSettings: {
            profileRenderEnvironment: {
              label: "3D Profile Environment",
              description: [
                "Choose a custom environment for your own profile's 3D render.",
                "This only applies when viewing your own profile.",
                "**This is saved on RoValras database so anyone with RoValra can view it. It being saved on RoValras database used to be a tier 1 Donator perk, we are working on a replacement perk.**"
              ],
              type: "select",
              options: [
                { label: "None", value: "void", id: 1 },
                {
                  label: "Purple Space",
                  value: "purple",
                  environmentEndpoint: "/static/json/skyboxSpace.json",
                  id: 2
                },
                {
                  label: "Crossroads",
                  value: "crossroads",
                  environmentEndpoint: "/static/json/crossroads.json",
                  id: 3
                },
                {
                  label: "Baseplate",
                  value: "baseplate",
                  environmentEndpoint: "/static/json/baseplate.json",
                  id: 4
                }
              ],
              default: "void"
            },
            profileRenderRotateEnabled: {
              label: "Auto-Rotate Profile Avatar",
              description: [
                "Automatically rotates the 3D avatar on the profile page."
              ],
              type: "checkbox",
              default: !1
            },
            environmentTester: {
              label: "Enable Environment Creator",
              description: [
                "Shows the Environment Creator tool on profiles to make custom client-side environments.",
                "This is to prepare for community environments.",
                "This will overwrite all environments on profiles.",
                "**This feature should only be enabled if you plan to make environments.**"
              ],
              type: "checkbox",
              default: !1
            },
            profile3DRenderPostProcessing: {
              label: "Post Processing",
              description: "Post processing allows for advanced effects such as bloom and ambient occlusion, but requires a powerful device.",
              type: "checkbox",
              default: !1
            }
          }
        },
        groupFiltersEnabled: {
          label: "Community Filters",
          description: [
            "Adds filters to the community section on profiles allowing you to sort by A-Z, Z-A, Newest and Oldest, also allows you to view groups in a row format or grid format."
          ],
          contributors: ["447170745", "3602693727"],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_group_filters_view"
        },
        trustedConnectionsEnabledv3: {
          label: "Trusted Friends",
          description: [
            "This feature allows you to accept, request and remove trusted friends on the site by pressing the (...) on their profile, this will only work for eligible friends.",
            "Trusted Friends might not be available in some regions.",
            "**Note:** Roblox uses an algorithm that may prevent adding someone even if they meet these requirements. [Learn more here.](https://en.help.roblox.com/hc/en-us/articles/46158344285204)"
          ],
          type: "true",
          default: !1
          //isPermanent: true,
          //locked: 'Seemingly broke after a Roblox update. And Roblox is rolling out their own version of it.',
        },
        lastOnlineEnabled: {
          label: "Show Last Online / Last Seen",
          description: [
            "Shows when a user was last online / seen on their profile.",
            "Only works for friends."
          ],
          type: "checkbox",
          default: !0
        },
        friendsSinceEnabled: {
          label: "Friends Since",
          description: "This feature shows how long you have been friends with someone on their profile and in your friends list.",
          type: "checkbox",
          default: !0
        },
        mutualFriendsEnabled: {
          label: "Mutual Friends",
          description: [
            "Shows how many friends you have in common with a user on their profile.",
            "Click it to see them in a Mutuals tab on their friends page."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["2020751790"]
        },
        groupRoleEnabled: {
          label: "Show Community Roles",
          description: "Shows a user's role in a community on their profile.",
          type: "checkbox",
          default: !0,
          locked: "Roblox released their own version of this.",
          isPermanent: !0
        },
        groupJoinedDateEnabled: {
          label: "Show Community Joined Date",
          description: "Shows when a user joined a community on their profile.",
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "3050364170"]
        },
        showFriendedFromEnabled: {
          label: "Show Friended From",
          description: "This shows where you became friends with a user, e.g., in game, profile, etc.",
          type: "checkbox",
          default: !0
        },
        lastPlayedTogetherEnabled: {
          label: "Most Frequent Played Together",
          description: "Shows the experience you played the most with a friend on their profile.",
          type: "checkbox",
          default: !1
        },
        bulkUnfriendEnabled: {
          label: "Bulk Unfriend",
          description: "This allows you to unfriend people from your friends list in bulk",
          type: "checkbox",
          default: !0
        },
        bulkBadgeRemoverEnabled: {
          label: "Bulk Badge Removal",
          description: "This allows you to delete your badges in bulk.",
          type: "checkbox",
          default: !0,
          contributors: ["476449201"]
        },
        unfriendDetectorEnabled: {
          label: "Unfriend Detector",
          experimental: "May cause issues",
          type: "checkbox",
          default: !1,
          contributors: ["390309731"],
          description: [
            "Tracks your friends list and alerts you with a popup if someone unfriends you, showing who unfriended you."
          ]
        },
        PrivateServerBulkEnabled: {
          label: "Private Server Bulk Removal",
          description: [
            "This will add a toggle to the private server inventory tab that allows you to easily set a bunch of private servers as inactive.",
            "This also works for setting inactive private servers as active"
          ],
          type: "checkbox",
          default: !0
        },
        idVerificationBadgeEnabled: {
          label: "ID Verification Badge",
          description: [
            "Shows if a user has verified their ID on their profile.",
            'This is added to the "more" tab of the profile.'
          ],
          type: "checkbox",
          default: !0,
          contributors: ["477516666", "447170745"]
        },
        ageVerificationBadgeEnabled: {
          label: "Age Checked Badge",
          description: [
            "Shows whether a user has completed Roblox age check on their profile.",
            'This is added to the "more" tab of the profile.'
          ],
          type: "checkbox",
          default: !0
        },
        statusBubbleEnabled: {
          label: "Status Bubble",
          description: [
            "This allows you to set a status bubble on your profile that anyone with RoValra can see.",
            "Also allows you to view other RoValra users' status bubbles.",
            "**This is saved on RoValras database so anyone with RoValra can view it. It being saved on RoValras database used to be a tier 1 Donator perk, we are working on a replacement perk.**"
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            statusBubbleHomePage: {
              label: "Status bubble for friends on home page, and other parts of the site where friends might show.",
              type: "checkbox",
              default: !0
            },
            statusImagesEnabled: {
              label: "Status Images",
              description: [
                "Allows you to add an image to your status bubble using a decal ID.",
                "**The image is saved on RoValras database so anyone with RoValra can view it.**"
              ],
              type: "checkbox",
              default: !0,
              donatorTier: 3,
              donatorReason: "Donator Tier 3 is required to add images to your status."
            },
            hideStatusImages: {
              label: "Hide Status Images",
              description: [
                "Hides images in other users' status bubbles."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        donationbuttonEnable: {
          label: "Donation Button",
          description: [
            "This will add a donation button to a user's profile, allowing you to donate directly from their profile without needing to join a game."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "8345351117"],
          locked: "Roblox made this impossible.",
          isPermanent: !0
        },
        categorizeWearingEnabled: {
          label: "Improved Currently Wearing",
          description: [
            "Separates the 'Currently Wearing' section on profiles into categories like Items, Emotes, Body Parts and Animations.",
            "Also improves the item cards making them look a bit better and adds total outfit price.",
            "This feature was heavily inspired by a [roseal](https://www.roseal.live/) feature."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            CategorizeBodyParts: {
              label: "Body Parts in their own category",
              description: "This puts Body Parts into their own category.",
              type: "checkbox",
              default: !0
            },
            CategorizeEmotes: {
              label: "Emotes in their own category",
              description: "This puts Emotes into their own category.",
              type: "checkbox",
              default: !0
            },
            CategorizeAnimations: {
              label: "Animations in their own category",
              description: "This puts Animations into their own category.",
              type: "checkbox",
              default: !0
            }
          }
        },
        userRapEnabled: {
          label: "User RAP/Value",
          description: [
            "This shows a user's total RAP/Value on their profile."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            HideSerial: {
              label: "Hide Serial Numbers",
              description: [
                "This hides serial numbers on limiteds unless you hover over them."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        useroutfitsEnabled: {
          label: "User Outfits",
          description: [
            "This allows you to view a user's saved outfits on their profile."
          ],
          type: "checkbox",
          default: !0
        },
        RoValraBadgesEnable: {
          label: "RoValra Badges",
          description: [
            "Disabling this will hide any RoValra badges from profiles."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            robloxGroupFeaturesEnabled: {
              label: "Roblox Group Badges",
              description: [
                "Enables Badges for groups, like star creator program, Roblox Community feedback Program etc."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        profileBackgroundGradientEnabled: {
          label: "Custom Profile Background Gradient",
          description: [
            "Shows a user's selected gradient on their profile."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            profileGradient: {
              label: "Profile Gradient",
              description: "Set your own gradient for your own profile",
              type: "gradient",
              avatarPreview: !0,
              donatorTier: 2,
              donatorReason: "Donator Tier 2 is required to set a custom profile gradient. This feature is purely cosmetic and rewards donors.",
              default: {
                enabled: !1,
                color1: "#667eea",
                color2: "#764ba2",
                angle: 135,
                fade: 100
              }
            },
            applyGradientToAvatarTile: {
              label: "Apply Gradient Background to Profile Thumbnails",
              description: [
                "This adds the Gradient Background to profile thumbnails across the site like on the home page"
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        bannedUserViewerEnabled: {
          label: "View Banned Users Profile",
          description: ["Allows you to view banned users' profiles."],
          type: "checkbox",
          default: !0,
          childSettings: {
            bannedUserDetectionFallbackEnabled: {
              label: "Use Robust Banned User Detection",
              description: [
                "This makes sure it never fails to identify when you're trying to view a banned user.",
                "Without this it would fail to show banned user profiles if you open their link directly"
              ],
              type: "checkbox",
              default: !1,
              requiredPermissions: ["webRequest"]
            }
          }
        },
        avatarBorderEnabled: {
          label: "Shows a user's Avatar Border",
          description: [
            "Shows a decorative border around avatars on friend tiles and profile pages.",
            "**Your selected border is saved to RoValra's database so other RoValra users can see it.**"
          ],
          type: "checkbox",
          default: !0,
          contributors: [48255812],
          childSettings: {
            avatarBorderChoice: {
              label: "Get all Avatar borders for free",
              description: [
                "Allows you to use any avatar border completely free of charge."
              ],
              type: "button",
              buttonText: "Open Border Store",
              event: "rovalra:openBorderStore",
              avatarPreview: !0,
              donatorTier: 3,
              donatorReason: "Donator Tier 3 gets all avatar borders for free.",
              default: "none"
            }
          }
        },
        profileFrameEnabled: {
          label: "Shows a user's Profile Frame",
          description: [
            "Draws a frame around the avatar display on profile pages.",
            "Frames are separate from avatar borders, they wrap the whole avatar thumbnail holder instead of the avatar tile.",
            "**Your selected frame is saved to RoValra's database so other RoValra users can see it.**"
          ],
          type: "checkbox",
          default: !0,
          contributors: [48255812],
          childSettings: {
            profileFrameChoice: {
              label: "Profile Frames",
              description: [
                "Pick a profile frame from the Frames tab of the RoValra store."
              ],
              type: "button",
              buttonText: "Open Frame Store",
              event: "rovalra:openFrameStore",
              default: "none"
            }
          }
        },
        improvedAvatarCard: {
          label: "Improved Avatar Card",
          description: [
            "Adds a gap around the profile avatar making it look a bit nicer and modern."
          ],
          type: "checkbox",
          default: !0
        },
        usernameColor: {
          label: "Username Color Preview",
          description: [
            "Changes the user's username color on their profile to the color Roblox would give them in in-game chats. Inspired by https://github.com/RyloRiz/rblx-name-color."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["3602693727"]
        },
        displayNameGradientEnabled: {
          label: "Gradient Display Name",
          description: [
            "Shows three-color gradient display names on profiles to all RoValra users.",
            "Donator Tier 3 is required to set your own gradient display name."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            displayNameGradient: {
              label: "Display Name Gradient",
              description: "Choose the three colors used on your display name gradient.",
              type: "gradient",
              colorCount: 3,
              donatorTier: 3,
              donatorReason: "Donator Tier 3 is required to customize your display name gradient.",
              default: {
                enabled: !1,
                color1: "#ff4ecd",
                color2: "#ffe66d",
                color3: "#4dd4ff",
                angle: 90,
                fade: 100
              }
            },
            displayNameGradientEffect: {
              label: "Display Name Effect",
              description: "Adds an optional shine, roll, or bloom effect to your gradient display name.",
              type: "select",
              options: [
                { value: "none", label: "None" },
                { value: "shine", label: "Shine" },
                {
                  value: "shine-bloom",
                  label: "Shine + Bloom"
                },
                {
                  value: "roll",
                  label: "Gradient Roll"
                },
                {
                  value: "roll-bloom",
                  label: "Gradient Roll + Bloom"
                },
                { value: "sparkles", label: "Bloom" },
                {
                  value: "blooming-bloom",
                  label: "Blooming Bloom"
                }
              ],
              default: "none",
              donatorTier: 3,
              donatorReason: "Donator Tier 3 is required to use display name effects."
            }
          }
        }
      }
    },
    Home: {
      title: "Home",
      settings: {
        AccurateContinueEnabled: {
          label: "Accurate Continue",
          description: [
            "This sorts the continue accurately based off when you last played the game."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            accurateContinueAutoRefreshEnabled: {
              label: "Auto Refresh Continue",
              description: [
                "Updates the Continue row after a game launches, without reloading the page."
              ],
              type: "checkbox",
              default: !1,
              // Not on by default cuz people are used to it not updating, so it randomly uipdating will get annoying.
              contributors: ["10646979010"]
              // hi im rav4
            }
          }
        },
        pinnedFriendsEnabled: {
          label: "Pin Friends",
          description: [
            "Adds an entry to the friend menu on the Home page that keeps someone at the front of the friends row.",
            "Pinned friends stay first whatever their status is, so the people you actually play with are not buried behind everyone who happens to be online."
          ],
          type: "checkbox",
          default: !1,
          storageKey: ["rovalra_pinned_friends"],
          contributors: ["4489102289"]
        },
        underratedGamesEnabled: {
          label: "Underrated Games",
          description: [
            "Adds RoValra community-picked underrated games to the Home page."
          ],
          type: "checkbox",
          default: !0
        },
        friendsSecondRowEnabled: {
          label: "Second Friends Row",
          description: [
            "Shows a second row of friends in the Home page friends carousel instead of only one row.",
            "Some extensions may overwrite this feature."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["2830488781"],
          locked: "Caused issues with other extensions.",
          isPermanent: !1
        },
        HideAddFriendsButton: {
          label: "Hide Add Friends Button",
          description: [
            "Hides the Add Friends button from the Home page and allows friend cards to use the freed space."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"]
        },
        friendsCarouselRedesignEnabled: {
          label: "App-Style Friends Carousel",
          description: [
            "Replaces the Home page friends carousel with the arrow-navigated carousel from the Roblox app."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["3050364170"]
        },
        friendLabelsEnabled: {
          label: "Friend Labels",
          description: [
            "Lets you assign a label to your friends on the Home page."
          ],
          type: "checkbox",
          default: !1,
          storageKey: "rovalra_friend_labels",
          contributors: ["4632962611"]
        },
        friendUsernamesEnabled: {
          label: "Show Usernames On Friend Cards",
          description: [
            "Shows a friend's @username below their display name on the Home page.",
            "In 'Servers My Friends Are In' it shows friends as 'DisplayName (@Username)', and also shows the username in a tooltip when hovering their avatar.",
            "Other extensions may overwrite this feature."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["760897332", "3598865306"]
        },
        robloxAdminBadgesEnabled: {
          label: "Roblox Admin Badges",
          description: [
            "Shows the official Roblox Administrator badge beside names on supported user cards, including Home and the friends list."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["127238"]
        },
        homeLayoutEnabled: {
          label: "Home Layout",
          description: [
            "Lets you save a custom order for the rows on the Home page."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            homeLayoutButtonEnabled: {
              label: "Show Home Layout Button",
              description: [
                "Adds the RoValra Layout button to the Home page."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        currentlyPlayingSubplaceEnabled: {
          label: "Currently Playing Subplace",
          description: [
            "Master toggle for showing the exact subplace and rootplace a user is playing.",
            "Turn this off to disable both the home subplace UI and the profile subplace UI."
          ],
          type: "checkbox",
          default: !1,
          experimental: "May cause issues",
          contributors: ["10646979010"],
          childSettings: {
            currentlyPlayingSubplaceHomeEnabled: {
              label: "Home Subplace",
              description: [
                "Shows the subplace section inside Roblox home/friends cards."
              ],
              type: "checkbox",
              default: !0
            },
            currentlyPlayingSubplaceProfileEnabled: {
              label: "Profile Page Subplace",
              description: [
                "Shows the subplace UI and details on profile pages."
              ],
              type: "checkbox",
              default: !0
            }
          }
        }
      }
    },
    Communities: {
      title: "Communities",
      settings: {
        groupGamesEnabled: {
          label: "Hidden Community Experiences",
          description: ["Shows a communities hidden experiences."],
          type: "checkbox",
          default: !0,
          contributors: ["8345351117", "447170745", "3050364170"]
        },
        pendingRobuxEnabled: {
          label: "Unpending Robux",
          description: [
            "Shows an estimate of how many pending Robux will stop pending within 24 hours."
          ],
          experimental: "May be inaccurate. And will take ages depending on the amount of sales",
          type: "checkbox",
          default: !1
        },
        antibotsEnabled: {
          label: "Anti-Bot Members",
          description: [
            "This adds a button that will allow you to scan all members in a community for bots.",
            "If there is any bots it will allow you to quickly ban or kick them.",
            "This calculates bots by similar avatars and display names, so it may not be 100% accurate."
          ],
          experimental: "Takes ages since Roblox has heavy rate limits.",
          type: "checkbox",
          default: !0,
          locked: "This broke in a UI update and wasn't very effective because of rate limits.",
          isPermanent: !1
        },
        QuickActionsEnabled: {
          label: "Quick Actions",
          description: [
            "This adds a quick action button allowing you to quickly ban or kick a bunch of users at once."
          ],
          type: "checkbox",
          default: !0,
          locked: "This broke in a UI update and wasn't very effective because of rate limits.",
          isPermanent: !1
        },
        draggableGroupsEnabled: {
          label: "Draggable Communities",
          description: [
            "Hold and drag your communities to reorder them however you want.",
            "Your custom order will be saved and persist across page refreshes.",
            "Just hold down on a community for a moment and drag it up or down."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_groups_order",
          contributors: ["7982684834", "447170745"]
        },
        bulkLeaveGroupsEnabled: {
          label: "Bulk Leave Communities",
          description: ["This allows you to leave communities in bulk."],
          type: "checkbox",
          default: !0,
          contributors: [
            "447170745",
            "9502859424",
            "2615068449",
            "422540285"
          ]
        },
        groupPlaceVisitsEnabled: {
          label: "Total Community Place Visits",
          description: [
            "Shows the total number of visits across all of a community's experiences in the insights section."
          ],
          type: "checkbox",
          default: !0
        },
        groupCreateDateEnabled: {
          label: "Community Creation Date",
          description: [
            "Shows when a community was created in its header."
          ],
          type: "checkbox",
          default: !0
        },
        groupPendingFundsEnabled: {
          label: "Pending Community Funds",
          description: [
            "Shows a community's pending Robux in the funds section of its info dialog.",
            "If funds are showing publicly."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["587159802"]
        },
        groupFundsPillEnabled: {
          label: "Community Funds Pill",
          description: [
            "Shows a community's funds as a pill on its page if your role can see them, even when they aren't public.",
            "Clicking it opens the revenue summary."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["74884"]
        }
      }
    },
    Avatar: {
      title: "Avatar",
      settings: {
        forceR6Enabled: {
          label: "Remove R6 Warning",
          description: ["Removes the R6 warning when switching to R6."],
          type: "checkbox",
          default: !0
        },
        multiEquipEnabled: {
          label: "Multi-Equip",
          description: [
            "Allows you to equip multiple items like accessories seamlessly without having to use the advanced tab."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "126448532"]
        },
        stickyAvatarEnabled: {
          label: "Sticky Avatar Preview",
          description: "This forces the avatar preview to always be in view on the avatar editor.",
          type: "checkbox",
          default: !0,
          contributors: ["587159802"]
        },
        avatarFiltersEnabled: {
          label: "Avatar Filters",
          description: [
            "Adds filters to the avatar page, allowing you to filter by effect items, limited, offsale / onsale and more."
          ],
          type: "checkbox",
          default: !0
        },
        searchbarEnabled: {
          label: "Adds a Searchbar to the Avatar Page",
          description: [
            "Allowing you to quickly search for items in the avatar editor."
          ],
          type: "checkbox",
          default: !0
        },
        bodyColorsEnabled: {
          label: "Custom Body Colors",
          description: [
            "Adds a custom color to the body colors in the avatar editor, so you are not limited to Roblox's preset palette.",
            "Colors you pick are saved next to the presets so you can reuse them. Right click a saved color to remove it."
          ],
          type: "checkbox",
          default: !0,
          storageKey: ["rovalra_body_color_presets"],
          contributors: ["4489102289"]
        },
        gameOutfitsEnabled: {
          label: "Outfits Per Experience",
          description: [
            "Lets you set an outfit that gets equipped automatically when you play, one for R6 experiences and one for R15 experiences.",
            "Experiences that let you choose your own avatar type use whichever of the two matches the type you are currently on.",
            "Individual experiences can be given their own outfit from their page, which overrides both."
          ],
          type: "checkbox",
          default: !0,
          storageKey: ["rovalra_game_outfits"],
          contributors: ["4489102289"]
        },
        avatarRotatorEnabled: {
          label: "Avatar Rotator",
          description: [
            "Adds an avatar Rotator allowing you to Rotate between different avatars on a set interval.",
            "Allowing you to have a random avatar equipped every time you join an experience or respawn."
          ],
          type: "checkbox",
          default: !0,
          storageKey: [
            "rovalra_avatar_rotator_enabled",
            "rovalra_avatar_rotator_ids",
            "rovalra_avatar_rotator_interval"
          ]
        }
      }
    },
    transactions: {
      title: "Transactions",
      settings: {
        robuxFiatEstimatesEnabled: {
          label: "Robux Fiat Estimates",
          description: [
            "Shows a money estimate beside Robux values on the transactions page, group revenue pages, and related Robux UI.",
            "You can choose both the display currency and whether the estimate uses Roblox purchase pricing or the current DevEx cash-out rate."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["193520242", "447170745", "2239549101"],
          experimental: "Sometimes shows the wrong amount. And it might causes some issues on the site.",
          childSettings: {
            robuxFiatDisplayCurrency: {
              label: "Display Currency",
              description: [
                "Select which currency RoValra should convert Robux estimates into."
              ],
              type: "select",
              options: TRANSACTION_FIAT_CURRENCY_OPTIONS,
              default: "USD"
            },
            robuxFiatRateMode: {
              label: "Valuation Mode",
              description: [
                "Normal Purchase Rate uses Roblox purchase pricing as the estimate source.",
                "DevEx Cash-Out Rate uses the current Roblox DevEx cash-out rate of $0.0038 per Earned Robux before converting to your selected currency."
              ],
              type: "select",
              options: TRANSACTION_FIAT_RATE_OPTIONS,
              default: "normal"
            },
            robuxFiatEstimateGradient: {
              label: "Estimate Text Gradient",
              description: [
                "Customize the gradient used for the fiat estimate text."
              ],
              type: "gradient",
              default: ROBUX_FIAT_ESTIMATE_DEFAULT_GRADIENT
            },
            robuxFiatEstimateBold: {
              label: "Bold Estimate Text",
              description: ["Render the fiat estimate text in bold."],
              type: "checkbox",
              default: !1
            },
            robuxFiatEstimateItalic: {
              label: "Italic Estimate Text",
              description: [
                "Render the fiat estimate text in italic."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        totalspentEnabled: {
          label: "Total Spent",
          description: [
            "This calculates the total amount of Robux and money you have spent on your account based on your transaction history."
          ],
          type: "checkbox",
          default: !0
        },
        spendingEnabled: {
          label: "Spending Breakdown",
          description: [
            "Shows a timeline of how much Robux you have spent, along with how much you have spent on each creator and experience on the transactions page.",
            "Click a month or year to filter by it, or use **View purchases** to see everything you bought from a creator or experience.",
            "Uses the transaction scan from **Total Spent on Experience**."
          ],
          type: "checkbox",
          default: !0,
          indexedDbStore: "transactions",
          dependsOn: ["TotalSpentGamesEnabled"]
        },
        totalearnedEnabled: {
          label: "Total Earned",
          description: [
            "This calculates the amount of Robux you have earned throughout the years via things like gamepasses, item sales, etc."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["546872490", "447170745"]
        },
        pendingrobuxtrans: {
          label: "Unpending Robux Transactions",
          description: [
            "This estimates how many Robux will stop pending in 24 hours."
          ],
          experimental: "May be inaccurate. And will take ages depending on the amount of sales",
          type: "checkbox",
          default: !1,
          contributors: ["546872490", "447170745"]
        }
      }
    },
    Trading: {
      title: "Trading",
      settings: {
        tradeValuesEnabled: {
          label: "Trade Values",
          description: [
            "This shows a bunch of useful information when trading, stuff like:",
            "Rolimons Values, Trade differences in values and rap, item demand, item trend and more."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            tradeShowItemValues: {
              label: "Show Item Values",
              description: "Display Rolimons item values on individual trade item cards",
              type: "checkbox",
              default: !0
            },
            tradeShowProjectedIndicator: {
              label: "Show Projected Item Indicator",
              description: "Display warning icon for projected items",
              type: "checkbox",
              default: !0
            },
            tradeShowRareIndicator: {
              label: "Show Rare Item Indicator",
              description: "Display rare item indicator icon",
              type: "checkbox",
              default: !0
            },
            tradeShowItemInfo: {
              label: "Show Item Info / Trend / Demand",
              description: "Display item information tooltip with trend, demand and risk data",
              type: "checkbox",
              default: !0
            },
            tradeShowTotalValue: {
              label: "Show Total Trade Value",
              description: "Display total value summary line in trade offers",
              type: "checkbox",
              default: !0
            },
            tradeShowTotalDemand: {
              label: "Show Average Demand",
              description: "Display average demand summary line in trade offers",
              type: "checkbox",
              default: !0
            },
            tradeShowDiffPills: {
              label: "Show Value / RAP Difference Pills",
              description: "Display the value and RAP difference comparison pills at the bottom of the trade window",
              type: "checkbox",
              default: !0
            }
          }
        },
        tradePreviewEnabled: {
          label: "Trade Preview",
          description: [
            "Allows you to preview the value differences of a trade before opening it up.",
            `Also changes the trade timestamp to a more readable format and adds an "Open in Rolimons" link beside a user's username.`
          ],
          type: "checkbox",
          default: !0
        },
        tradeFilterEnabled: {
          label: "Trade Filter",
          description: "Adds a search bar to the trade page. Allowing you to search for trades containing specific items.",
          type: "checkbox",
          default: !0
        },
        tradeSearchEnabled: {
          label: "Trade Search",
          description: "Allows you to search for items in the create trade pages to quickly find them.",
          type: "checkbox",
          default: !0
        },
        confirmTradeEnabled: {
          label: "Trade Protection",
          description: "This adds a small preview of the trade you're making in the accept / decline confirmation pop-up.",
          type: "checkbox",
          default: !0
        },
        tradeProofEnabled: {
          label: "Proof Trades",
          description: "This allows you to quickly copy the rolimons proof format for any trade.",
          type: "checkbox",
          default: !1,
          experimental: "This may be inaccurate and may in some cases cause issues resulting in an inaccurate proof. Please verify it's correct before using it."
        },
        tradeRiskEnabled: {
          label: "Show Item Risk",
          description: "Shows the calculated risk of an item based on its trading history on item pages and trade pages.",
          type: "checkbox",
          default: !1,
          experimental: "May be inaccurate. It isn't recommended to rely on this completely."
        },
        blockUserEnabled: {
          label: "Block User",
          description: "Allows you to block users on the trade page, preventing them from sending you trade offers.",
          type: "checkbox",
          default: !1,
          contributors: ["1960518316"]
        },
        sendTradeEnabled: {
          label: "Send Trade",
          description: "Allows you to send new trade offers to other users from the trade page.",
          type: "checkbox",
          default: !1,
          contributors: ["1960518316"]
        },
        tradeRecentItemsEnabled: {
          label: "Recent Trade Items",
          description: [
            "Remembers the items you recently offered and requested, and shows them above each inventory when making a trade.",
            "Clicking one finds and selects it for you. Your history is only stored on this device."
          ],
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_trade_recent_items",
          contributors: ["2239549101"]
        },
        tradeQuickActionsEnabled: {
          label: "Trade Quick Actions",
          description: [
            "Adds quick actions to the trades page, letting you only show trades above a certain value or hide trades that are a loss for you.",
            "Also adds a button to decline every received trade that is a loss by value, after asking you to confirm."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["2239549101"]
        }
      }
    },
    Plus: {
      title: "Roblox Plus",
      settings: {
        reducePlusAds: {
          label: "Less Roblox Plus",
          description: [
            "Makes Roblox Plus advertising more subtle.",
            "Not recommended if you have an active Roblox Plus subscription."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            removeAllPlusAdds: {
              label: "Remove all Roblox Plus advertising.",
              type: "checkbox",
              default: !1
            }
          },
          contributors: ["1564574922", "476449201"]
        },
        PlusPrivateServerTooltipEnabled: {
          label: "Roblox Plus Free Server Tooltip",
          description: [
            "Adds a tooltip showing the original cost of a private server if it is free due to Roblox Plus."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "546872490"],
          locked: "Roblox made their own version of this.",
          isPermanent: !0
        },
        currencyTransferEnabled: {
          label: "Send Robux",
          description: [
            "This allows Roblox Plus subscribers to start a currency transfer by pressing the (...) on anyone's profile."
          ],
          type: "checkbox",
          default: !0,
          locked: "Roblox released their own version of this feature",
          isPermanent: !0,
          hidden: !0
        },
        sendRobuxEnabled: {
          label: "Send Robux",
          description: [
            "This allows Roblox Plus subscribers to start a transfer by pressing the (...) on anyone's profile, but now directly on the website!",
            'You can also use the "Send" button on the [Buy Robux](https://www.roblox.com/upgrades/robux) page.',
            "If you have an account under 18 you may need to accept Robux transfers in the notifications tab."
          ],
          childSettings: {
            keepRobuxAppButtonEnabled: {
              label: "Keep The Open In App button",
              description: [
                "Keeps the profile item that opens the app to send Robux."
              ],
              type: "checkbox",
              default: !1
            }
          },
          contributors: ["650766686"],
          type: "checkbox",
          default: !0
        },
        plusStatsEnabled: {
          label: "Show Plus Stats",
          description: "Shows Roblox Plus Stats on the [Plus](https://www.roblox.com/plus) page even if you aren't subscribed.",
          type: "checkbox",
          default: !0,
          contributors: ["650766686"]
        },
        plusTransferLimitsEnabled: {
          label: "Show Plus Transfer Limits",
          description: "Shows how much Robux you have left before the daily and monthly Roblox Plus transfer limits on the [Plus](https://www.roblox.com/plus) page.",
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_robux_transfer_limits_v1",
          contributors: ["48255812", "447170745"]
        },
        plusReferralEnabled: {
          label: "Show RoValra Plus Referral",
          description: "Shows RoValra\u2019s referral offer on the [Plus](https://www.roblox.com/plus) page. Only new Roblox Plus users qualify for the reward.",
          type: "checkbox",
          default: !0,
          contributors: ["231260921", "447170745"]
        }
      }
    },
    Navigation: {
      title: "Navigation",
      settings: {
        privacyTogglesEnabled: {
          label: "Privacy Toggles in Navigation",
          description: [
            "This setting adds a <icon filled>lock-closed</icon> button to the top navigation bar.",
            "This allows you to quickly manage privacy settings."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["650766686", "48255812"],
          childSettings: {
            // Toggles to be in the menu
            privacyTogglesDropdownOnlineStatusEnabled: {
              label: "Online Status Toggle",
              description: ["Quickly manage your online status."],
              type: "checkbox",
              default: !0
            },
            privacyTogglesDropdownJoinStatusEnabled: {
              label: "Experience Status Toggle",
              description: [
                "Quickly manage who can join you in experiences."
              ],
              type: "checkbox",
              default: !0
            },
            privacyTogglesDropdownPrivateServerPrivacyEnabled: {
              label: "Private Server Privacy Toggle",
              description: [
                "Quickly manage who can invite you to private servers."
              ],
              type: "checkbox",
              default: !0
            },
            privacyTogglesDropdownInventoryPrivacyEnabled: {
              label: "Inventory Privacy Toggle",
              description: [
                "Quickly manage who can view your inventory."
              ],
              type: "checkbox",
              default: !0
            },
            // Keep this one last please
            privacyTogglesOldIconEnabled: {
              label: "Old QOL Toggles Icon",
              description: [
                "Enable the old QOL Toggles icon (<icon>three-bars-horizontal</icon>). <b>Needs a refresh</b>"
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        qolTogglesEnabled: {
          label: "Adds quality of life toggles to the navigation bar",
          description: "Allowing you to quickly change your online status, experience status, private server privacy, and inventory visibility without going into settings.",
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "8345351117"],
          exclusiveWith: ["privacyTogglesEnabled"],
          isPermanent: !0,
          locked: "Replaced by Privacy Toggles in Navigation",
          deprecated: "Replaced by Privacy Toggles in Navigation.",
          hidden: !0
        },
        sidebarCollapseEnabled: {
          label: "Collapsible Sidebar",
          description: ["Adds a button to collapse the Roblox sidebar."],
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "2963377564"],
          storageKey: "rovalraSidebarCollapsed",
          childSettings: {
            sidebarExpandOnHover: {
              label: "Expand on Hover",
              description: [
                "Temporarily expands the collapsed sidebar while hovering over it."
              ],
              type: "checkbox",
              default: !1,
              contributors: ["4632962611"]
            }
          }
        },
        hideFriendRequestCountEnabled: {
          label: "Hide Friend Request Count",
          description: [
            "Hides the friend request count beside Friends in the sidebar."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["4632962611"]
        },
        sidebarLayoutEnabled: {
          label: "Sidebar Layout",
          description: [
            "Lets you reorder and hide buttons in the Roblox sidebar."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["2963377564"],
          storageKey: [
            "rovalra_sidebar_layout_order",
            "rovalra_sidebar_layout_hidden"
          ]
        },
        voiceBanIndicatorEnabled: {
          label: "Voice Ban Indicator",
          description: [
            "Shows a voice status icon in the top bar while your Roblox voice chat is suspended."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["4632962611"]
        },
        topbarLayoutEnabled: {
          label: "Topbar Layout",
          description: [
            "Lets you reorder and hide buttons in the Roblox topbar."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          storageKey: [
            "rovalra_topbar_layout_order",
            "rovalra_topbar_layout_hidden"
          ],
          locked: "Too much work to up keep. Sorry :C",
          isPermanent: !0
        },
        moreRobuxDigitsEnabled: {
          label: "More Robux Digits",
          description: [
            "Shows additional digits for abbreviated Robux balances such as 1M+ in the navigation bar."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            moreRobuxDigits: {
              label: "Digits to Show",
              description: [
                "Choose how many digits to show after the decimal point in abbreviated Robux balances."
              ],
              type: "select",
              options: [
                { label: "1 digit", value: "1" },
                { label: "2 digits", value: "2" },
                { label: "All digits", value: "all" }
              ],
              default: "1"
            }
          }
        },
        ageKidsThemeEnabled: {
          label: "Age Theme",
          description: [
            "Lets you choose which Roblox age theme is used across the site.",
            "Overrides other age-theme settings."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "650766686"],
          childSettings: {
            ageThemeSelection: {
              label: "Theme",
              description: "Choose which Roblox age theme class should be applied.",
              type: "select",
              options: [
                { label: "Normal Roblox", value: "normal" },
                { label: "Roblox Kids", value: "kids" },
                { label: "Roblox Select", value: "select" },
                {
                  label: "Roblox Leaked Select (Start Mode)",
                  value: "startmode"
                }
              ],
              default: "normal"
            },
            ageThemeNavbarEnabled: {
              label: "Show Age Theme in the navigation bar",
              description: "Adds a navigation bar button for switching the age theme live.",
              type: "checkbox",
              default: !1
            },
            ageThemeTextMatch: {
              label: "Match Age Badge",
              description: [
                "Matches the age badge text to the theme you listed.",
                "(Note: this is overridden by Custom Age Theme Badge Text.",
                "This also means that this will be **automatically turned off** if",
                "the Custom Age Theme Badge Text setting is active.)"
              ],
              type: "checkbox",
              default: !0,
              exclusiveWith: ["ageKidsTextEnabled"],
              contributors: ["650766686"]
            }
          }
        },
        ageKidsTextEnabled: {
          label: "Custom Age Theme Badge Text",
          description: [
            'Change the "SELECT" or "KIDS" text in the badge by the Roblox logo.',
            "You can even use this if you're not in those age groups!",
            "If you want you can also choose to hide the badge."
          ],
          type: "checkbox",
          default: !1,
          exclusiveWith: ["ageThemeTextMatch"],
          contributors: ["650766686", "1564574922"],
          childSettings: {
            ageKidsTextInput: {
              label: "Custom Badge Text",
              description: [
                "The text you would like to display in the badge.",
                "Maximum 30 characters.",
                "This will be overridden by the Hide The Badge setting"
              ],
              type: "input",
              default: null,
              contributors: ["10646979010", "1564574922"]
            },
            ageKidsTextPushNavbarEnabled: {
              label: "Show Full Badge Text",
              description: [
                "Expands the badge to show all of your custom text.",
                "Moves the navigation links to the right when more room is needed."
              ],
              type: "checkbox",
              default: !1,
              contributors: ["10646979010"]
            },
            ageKidsTextHiddenEnabled: {
              label: "Hide The Badge",
              description: "Hide the badge text describing your age group.",
              type: "checkbox",
              default: !1
            }
          }
        },
        hideRoValraSettingsNavbarDropdown: {
          label: "Hide RoValra Settings from the navigation bar dropdown",
          description: "Removes the RoValra Settings shortcut from the Roblox settings dropdown in the top navigation bar.",
          type: "checkbox",
          default: !1
        },
        betaProgramsEnabled: {
          label: "Adds a beta programs toggle to the navigation bar",
          description: "This allows you to toggle beta programs you're enrolled in easily.",
          type: "checkbox",
          default: !1,
          contributors: ["447170745", "48255812"],
          childSettings: {
            previousBetaProgramsEnabled: {
              label: "Show Previous Beta Programs",
              description: "Stores beta programs you have seen before and shows programs that are no longer returned by Roblox as disabled entries in the dropdown.",
              type: "checkbox",
              default: !0,
              storageKey: "rovalra_previous_beta_programs"
            }
          }
        },
        transactionsSidebarLinkEnabled: {
          label: "My Transactions sidebar link",
          description: "Adds a My Transactions link below Communities in the Roblox sidebar.",
          type: "checkbox",
          default: !1,
          contributors: ["193520242", "447170745"]
        },
        quickSearchEnabled: {
          label: "Quick Search",
          description: "This adds an autocomplete to the search dropdown for users, friends and experiences",
          type: "checkbox",
          default: !0,
          childSettings: {
            userSearchEnabled: {
              label: "Quick User Search",
              description: "Shows a user that matched what you searched in the search dropdown.",
              type: "checkbox",
              default: !0
            },
            gameSearchEnabled: {
              label: "Quick Experience Search",
              description: "Shows an experience that has the best match to what you searched in the search dropdown.",
              type: "checkbox",
              default: !0
            },
            friendSearchEnabled: {
              label: "Quick Friend Search",
              description: "Shows a list of friends that has the best match to what you searched in the search dropdown.",
              type: "checkbox",
              default: !0
            },
            itemSearchEnabled: {
              label: "Quick Item Search",
              description: "Shows limited items whose Rolimons acronym matches what you searched, like 8BRC for the 8-Bit Royal Crown.",
              type: "checkbox",
              default: !0
            }
          }
        },
        searchHistoryEnabled: {
          label: "Search History",
          description: "This tracks what you search on Roblox and allows you to view it.",
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_search_history"
        },
        GroupFundsEnabled: {
          label: "Show Community Funds",
          description: "Shows the funds of a specific community when pressing your Robux amount in the navigation bar.",
          type: "checkbox",
          default: !1,
          storageKey: "rovalra-group-funds-data",
          childSettings: {
            GroupFundsNavbarTotalEnabled: {
              label: "Combine Community Funds with Robux Balance",
              description: "Combines your Robux balance with your configured community funds in the navbar. Click the balance to see your Robux and each community separately.",
              type: "checkbox",
              default: !1,
              contributors: ["278039610", "476449201"]
            },
            GroupFundsIds: {
              label: "Community IDs",
              description: "The IDs of the communities to show funds for.",
              type: "list",
              default: [""],
              addButtonText: "Add Another Community",
              placeholder: "Enter Community ID..."
            }
          }
        },
        incidentTrackingEnabled: {
          label: "RoValra Status Banners",
          description: [
            "This feature shows when RoValra, or it's services are experiencing issues. We do not recommend turning this off."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["650766686"]
        }
      }
    },
    Miscellaneous: {
      title: "Miscellaneous",
      settings: {
        browserNotificationsEnabled: {
          label: "Browser Notifications",
          description: "Sends browser notifications for the things you pick below.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["notifications"],
          storageKey: ["rovalra_notifications_state"],
          contributors: ["2239549101"],
          childSettings: {
            tradeNotificationsEnabled: {
              label: "Trades",
              description: "Notifies you when you get a new trade.",
              type: "checkbox",
              default: !0
            },
            friendNotificationsEnabled: {
              label: "Pinned Friends",
              description: "Notifies you when a pinned friend joins an experience.",
              type: "checkbox",
              default: !0
            }
          }
        },
        richRobloxLinksEnabled: {
          label: "Rich Roblox Links",
          description: [
            "Turns Roblox links in descriptions into pills with their icon, name and verified badge.",
            "Hover a pill to preview the community, user, experience or item."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["2239549101"]
        },
        sidebarVerifiedBadgeEnabled: {
          label: "Fixes a few spots where the verified badge is missing",
          description: [
            "Shows the verified badge next to your name in the sidebar and top bar if you're verified."
          ],
          type: "checkbox",
          default: !0
        },
        disableThumbnailBackground: {
          label: "Disable Thumbnail Backgrounds",
          description: [
            "This prevents profile backgrounds from showing in avatar headshots and other places."
          ],
          type: "checkbox",
          default: !1
        },
        disableThumbnailProfileFrame: {
          label: "Disable Roblox Thumbnail Profile Frames",
          description: [
            "This prevents Roblox profile frames from showing around avatar headshots."
          ],
          type: "checkbox",
          default: !1
        },
        ExplorerEnabled: {
          label: "Explorer",
          description: [
            "Adds an Explorer button on item pages and your experiences."
          ],
          type: "checkbox",
          default: !0,
          contributors: ["9502859424"]
        },
        ServerdataEnabled: {
          label: "Send Server IDs and Place IDs to RoValra's API",
          description: [
            "This feature sends server IDs and place IDs to RoValra's API when you browse the site.",
            "This data is used for the server uptime and the Total Servers features.",
            "Leaving this feature on will help improve the Server Uptime and Total Servers features.",
            "This can use extra bandwidth compared to other features, if you are in limited bandwidth it is recommended to turn this off."
          ],
          type: "checkbox",
          default: !0
        },
        ServerdataLegacyEnabled: {
          label: "Use Legacy Server Data Submission",
          description: [
            "Sends only server IDs and place IDs.",
            "Pretty much nerdy experimental development stuff."
          ],
          type: "checkbox",
          default: !0
        },
        playtimeEnabled: {
          label: "Playtime Tracking",
          description: [
            "Allows RoValra to track and store how long you are playing a game for which allows you to view the total playtime on that game.",
            "This is currently experimental and won't show up anywhere in the extension until a future update.",
            "This information is stored server side."
          ],
          type: "checkbox",
          default: !0
        },
        loginBannerEnabled: {
          label: "Login Banner",
          description: [
            "Adds a banner to the login page to verify you're on the official Roblox website.",
            "This helps prevent phishing by ensuring you know when you're on the real site."
          ],
          type: "checkbox",
          default: !1
        },
        legacyThemeSwitcherEnabled: {
          label: "Legacy Theme Switcher",
          description: [
            "This adds a dropdown in the Roblox settings which replicates how the old theme switcher worked",
            "This means you won't have to switch to your preferred theme when logging in on a new browser."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["2615068449"]
        },
        modernIconsEnabled: {
          label: "Modern Icons",
          description: [
            "Replaces default Roblox playing and like icons on the site, with the new modern icons used by the client."
          ],
          type: "checkbox",
          default: !0
        },
        cssfixesEnabled: {
          label: "Site Fixes",
          description: [
            "This fixes various site issues or just poor design choices by Roblox."
          ],
          type: "checkbox",
          default: !0,
          childSettings: {
            giantInvisibleLink: {
              label: "Fix the Continue and Favorites buttons' clickable area",
              description: [
                "Fixes the Continue and Favorites buttons on the home page being wider than shown visually."
              ],
              type: "checkbox",
              default: !0
            },
            gameTitleIssueEnable: {
              label: "Fix the experience title issues",
              description: "Fixes the top and bottom of experience titles on profiles getting cut off.",
              type: "checkbox",
              default: !0
            },
            FixCartRemoveButton: {
              label: "Fix Cart Remove Button Size",
              description: "Fixes the size of the remove item from cart button being super small in the shopping cart.",
              type: "checkbox",
              default: !0,
              contributors: ["4866259395", "447170745"]
            },
            profileUsernameSpacingFixEnabled: {
              label: "Keep profile usernames spaced from the top",
              description: "Prevents your username from being moved up to a place where it's harder to read because of extensions adding features.",
              type: "checkbox",
              default: !0
            },
            themeScrollbarFixEnabled: {
              label: "Match the scrollbar to your theme",
              description: "Fixes the page scrollbar showing up light on dark theme, or dark on light theme, and makes it blend in with the page.",
              type: "checkbox",
              default: !1,
              contributors: ["74884"]
            }
          }
        },
        eastereggslinksEnabled: {
          label: "Easter Egg Links",
          description: [
            "Adds Easter eggs to random links that otherwise wouldn't do anything.",
            "Some easter eggs redirect offsite."
          ],
          type: "checkbox",
          default: !0
        },
        useOldRovalraLogo: {
          label: "Use Old RoValra Logo",
          description: "Brings back the old RoValra logo across the extension.",
          type: "checkbox",
          default: !1
        },
        MemoryleakFixEnabled: {
          label: "Fix Roblox Memory Leak",
          description: [
            "This attempts to fix the memory leak caused by the Roblox website when reloading a page or navigating the site.",
            "This fix will redirect most URL changes to 'about:blank' and then to the intended URL, which fixes the memory leak, but may cause a slight flicker when navigating and issues with the back and forward arrows.",
            "If you don't know what a memory leak is or you don't feel like Roblox is using too much memory, you can leave this off.",
            "**This feature isn't recommended anymore; it seems like Roblox has fixed the memory leak.**"
          ],
          type: "checkbox",
          default: !1,
          locked: "This issue has long since been fixed by Roblox, so the feature isn't needed anymore.",
          isPermanent: !0,
          requiredPermissions: ["webNavigation"]
        },
        firstAccountEnabled: {
          label: "First Account?",
          description: "This adds a section in Roblox's settings showing if Roblox considers your Roblox account the first Roblox account you created.",
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_first_account_cache",
          contributors: ["4866259395", "447170745"]
        },
        trustedCreatorEnabled: {
          label: "In Trusted Creator Program?",
          description: "This adds a section in Roblox's settings showing whether Roblox considers your account part of the Trusted Creator Program.",
          type: "checkbox",
          default: !0,
          storageKey: "rovalra_trusted_creator_cache"
        },
        revertLogo: {
          label: "Change the app launch icon",
          description: [
            "This changes the icon that shows when you join an experience.",
            "Old icon is the icon it had before they changed it to the new app client icon.",
            "And of course, a custom icon can be any image you want."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            customLogoData: {
              label: "Custom icon",
              description: [
                "Upload your custom image. Maximum file size is 1MB."
              ],
              type: "file",
              default: null,
              compressSettingName: "compressCustomLogo",
              storageKey: "customLogoData"
            },
            compressCustomLogo: {
              label: "Compress Custom Icon",
              description: [
                "Compresses the image to reduce storage space (max 512px, JPEG 80% quality for photos, PNG for transparent images).",
                "Disable this to keep full quality and transparency, but it may use more storage space.",
                "Uncompressed images must still be under 1MB."
              ],
              type: "checkbox",
              default: !0
            }
          }
        },
        settingChangeNote: {
          label: "Setting changes alerts",
          description: [
            "Shows you whenever certain settings were replaced or removed."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["1564574922"]
        },
        FunStuffEnabled: {
          label: "Fun Stuff tab",
          description: ["Shows the Fun Stuff tab in RoValra settings."],
          type: "checkbox",
          default: !1
        }
      }
    },
    AntiAccountTracking: {
      title: "Privacy",
      settings: {
        streamermode: {
          label: "Streamer Mode",
          description: [
            "This feature hides information that you most likely don't want to accidentally show on something like a live stream."
          ],
          type: "checkbox",
          default: !1,
          experimental: "This may cause some issues since it tricks Roblox into thinking your private info is something it isn't.",
          contributors: ["447170745", "48255812", "3050364170"],
          childSettings: {
            settingsPageInfo: {
              label: "Hide Private Information on the settings page",
              description: [
                "This visually replaces your Email, Phone Number, Sessions, and account location with 'RoValra Streamer Mode Enabled'.",
                "And completely hides your Age Group, previous usernames in settings and Birthday."
              ],
              type: "checkbox",
              default: !0
            },
            hideRobux: {
              label: "Hide Robux",
              description: [
                "Simply hides your Robux by changing it to 'Hidden'."
              ],
              type: "checkbox",
              default: !1
            },
            hideRobuxRevealOnClick: {
              label: "Reveal Robux on click",
              description: [
                "Lets you click your hidden Robux to show the real amount again, together with its fiat estimate.",
                "Clicking it again hides your Robux, and it also hides itself again whenever you reload or leave the page."
              ],
              type: "checkbox",
              default: !1,
              condition: {
                parent: "hideRobux",
                value: !0,
                hide: !1
              }
            }
          }
        },
        bulkUnblockEnabled: {
          label: "Bulk Unblock",
          description: [
            "Allows you to select and unblock multiple blocked users at once.",
            "You will be asked to confirm before any users are unblocked."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["4632962611"],
          childSettings: {
            openBulkUnblockManager: {
              label: "Manage Blocked Users",
              description: [
                "View your blocked users and select multiple users to unblock."
              ],
              type: "button",
              buttonText: "Open Manager",
              event: "rovalra:openBulkUnblock"
            }
          }
        },
        spoofAsOffline: {
          label: "Spoof status as Offline",
          description: [
            "Makes you appear as offline to you and other people.",
            "This is useful if you want to appear offline while still allowing friends to join you in experiences, since Roblox's official offline status doesn't allow this.",
            "Joining an experience will overwrite this status.",
            "This may take a few minutes to actually change your status to offline after turning on the feature."
          ],
          type: "checkbox",
          default: !1,
          exclusiveWith: ["spoofAsStudio", "spoofAsOnline"],
          contributors: ["447170745", "109176680"]
        },
        spoofAsStudio: {
          label: "Spoof status as In Studio",
          description: [
            "Makes your online status appear as 'In Studio' to you and other users.",
            "Joining an experience will overwrite this status.",
            "The Spoofed Status will only show if RoValra is enabled and a Roblox page is open."
          ],
          type: "checkbox",
          default: !1,
          exclusiveWith: ["spoofAsOffline", "spoofAsOnline"],
          contributors: ["447170745", "109176680"]
        }
      }
    },
    FunStuff: {
      title: "Fun Stuff",
      settings: {
        iconElementUsageDescription: {
          label: "icon Element Usage",
          description: [
            "You can use the `<icon>` element to put icons in places",
            "To use an `<icon>` element simply do the following `<icon>tilt</icon>` <icon>tilt</icon>",
            "If you want the icon to be filled simply do the following `<icon filled>thumb-up</icon>` <icon filled>thumb-up</icon>",
            "To use RoValra icons, simply do the following: `<icon rovalra>contributor</icon>` <icon rovalra>icon</icon>.",
            "To use Google Material Icons, simply do the following: `<icon material>bookmark</icon>` <icon material>bookmark</icon>.",
            "You can also use the `size` property to change the size to a specific css length or even use presets like `x-small`, `small`, `medium`, `large`, `x-large`, and `xx-large`",
            "You can use the `<icon>` element in the Custom Age Theme Badge Text setting."
          ],
          contributors: ["650766686", "1564574922"]
        },
        bandurationsEnabled: {
          label: "All possible ban durations",
          description: [
            "**This doesn't include voice chat bans.**",
            "**Any text saying 'Note:' is a note added by Valra to explain stuff better.**",
            "- Banned for 1 Day",
            "- Banned for 3 Days",
            "- Banned for 7 Days",
            "- Banned for 14 Days",
            "- Account Deleted",
            "\u2022 Warning",
            "\u2022 Banned for 6 Months",
            "\u2022 Banned for 1 Year",
            "\u2022 Note: the things below aren't bans but instead tell you what will happen if you do it again. This doesn't always show when you get banned.",
            "\u2022 The things below are called 'Foreshadow bans'.",
            "\u2022 If you violate the Community Standards again, your account may be suspended in the future. ",
            "\u2022 If you violate the Community Standards again, your account may be suspended for at least 1 day.",
            "\u2022 If you violate the Community Standards again, your account may be suspended for at least 3 days.",
            "\u2022 If you violate the Community Standards again, your account may be suspended for at least 7 days.",
            "\u2022 If you violate the Community Standards again, your account may be permanently banned from Roblox.",
            "- Note: 2 days, 1 hour, 3 hours, 6 hours and 12 hours bans might not be in use.",
            "\u2022 Banned for 2 Days",
            "\u2022 Banned for 3 Hours",
            "\u2022 Banned for 6 Hours",
            "\u2022 Banned for 12 Hours",
            "\u2022 Banned for 1 Hour",
            "\u2022 Account Terminated",
            "\u2022 Banned for 60 Days"
          ],
          default: null
        },
        BanReasons: {
          label: "All possible ban reasons on Roblox, some ban reasons have been censored by Valra.",
          description: [
            "**All ban reasons are 100% confirmed**",
            "**Keep in mind these are ban reasons, which is basically categories each ban might fall into.**",
            "**Any text saying 'Note:' is a note added by Valra to explain stuff better.**",
            "- None (Note: Likely used when there isn't a ban reason and instead only a moderator note.)",
            "- Profanity",
            "- Harassment",
            "- Spam",
            "- Advertisement",
            "\u2022 Scamming",
            "\u2022 Adult Content",
            "\u2022 Inappropriate",
            "\u2022 Privacy",
            "\u2022 Unclassified Mild",
            "\u2022 BlockedContent",
            "\u2022 Minor Swearing",
            "\u2022 Distorted Audio",
            "\u2022 Loud Earbleeders",
            "\u2022 Players Screaming into Microphone",
            "\u2022 Swearing",
            "\u2022 P####graphic Sounds",
            "\u2022 Explicit S##ual References and Innuendo",
            "\u2022 Dr## and Alc###l References",
            "\u2022 Discriminatory or N##i Content",
            "\u2022 Dating Imagery",
            "\u2022 Discriminatory Content",
            "\u2022 Dr##s, Alc###l",
            "\u2022 DMCA",
            "\u2022 Explicit N####y/P##n",
            "\u2022 Gang Images",
            "\u2022 N###s",
            "\u2022 Personal Attack/Harassment/Bullying",
            "\u2022 Red Armbands (Not N###s) ",
            "\u2022 Suggestive/S##ualized Imagery",
            "\u2022 S####de/Self-####",
            "\u2022 Clickbait Ads",
            "\u2022 Inappropriate Content",
            "\u2022 Not Related to Roblox",
            "\u2022 Off-Site Links",
            "\u2022 Hidden Message Clothing",
            "\u2022 None of the Above",
            "\u2022 Account Theft",
            "\u2022 Asset Ownership",
            "\u2022 Billing",
            "\u2022 Compromised Account",
            "\u2022 Copyright/DMCA",
            "\u2022 Derogatory/Harassment",
            "\u2022 Depressive",
            "\u2022 Discriminatory",
            "\u2022 Exploiting",
            "\u2022 Text Filter / Profanity",
            "\u2022 Gr###ing",
            "\u2022 Illicit Substance",
            "\u2022 Malicious",
            "\u2022 Misleading",
            "\u2022 Dating",
            "\u2022 Phishing/Scam",
            "\u2022 Real Info",
            "\u2022 RMT (Note: Real money transaction)",
            "\u2022 S##ual/Adult Content",
            "\u2022 Shock",
            "\u2022 Threats",
            "\u2022 Real-Life Tragedy",
            "\u2022 Politics",
            "\u2022 Encouraging Dangerous Behavior",
            "\u2022 Other",
            "\u2022 Dating and Romantic Content",
            "\u2022 S##ual Content",
            "\u2022 Directing Users Off-Platform",
            "\u2022 Privacy: Asking for PII",
            "\u2022 Privacy: Giving PII",
            "\u2022 Impersonation",
            "\u2022 Extortion and Blackmail",
            "\u2022 Illegal and Regulated Content",
            "\u2022 Misusing Roblox Systems",
            "\u2022 Political Content",
            "\u2022 T###orism/Extremism",
            "\u2022 Child Endangerment",
            "\u2022 Real-Life Threats",
            "\u2022 Cheat and Exploits",
            "\u2022 Seeking S##ual Content",
            "\u2022 Disruptive Audio",
            "\u2022 Contests and Sweepstakes",
            "\u2022 Threats or Abuse of Roblox Employees or Affiliates",
            "\u2022 Roblox Economy",
            "\u2022 IRL Dangerous Activities",
            "\u2022 Intellectual Property Violation",
            "\u2022 Off Platform Speech and Behavior",
            "\u2022 Violent Content and Gore",
            "\u2022 Advertising",
            "\u2022 Chargeback",
            "\u2022 DMCA Early Legal Strike",
            "\u2022 DMCA Final Legal Strike",
            "\u2022 You created or used an account to avoid an enforcement action taken against another account determined from your account information, such as your account email, phone number, or other information (Note: This is not a ban reason; this is a moderator note)",
            "\u2022 Trademark Violation",
            "\u2022 Roblox does not permit using third-parties to buy, sell, or trade Robux, promotional codes that falsely appear to be from Roblox Corporation, or inappropriate use of the community payout system. (Note: This is not a ban reason; this is a moderator note)",
            "- Note: Fun fact\u2014the 'using third-parties to buy, sell, or trade Robux' moderator notes are called 'Virtual Casino' bans in the code."
          ],
          default: null
        },
        appealstuff: {
          label: "Appeals related stuff",
          description: [
            "**Appeal Outcomes & Decisions**",
            "- Appeal denied",
            "- We have reviewed your appeal. This activity is still in violation of Roblox Community Standards.",
            "- Appeal accepted",
            "- We have reviewed your appeal. This activity is not in violation of Roblox Community Standards. Any consequence related to this activity is reversed.",
            "- We have reviewed your appeal. This activity is still in violation of Roblox Community Standards. However, we\u2019ve updated the violation category.",
            "**Appeal Instructions & Information**",
            "- Appeal something not shown",
            "- Request Appeal",
            "- Additional info (optional)",
            "- You can appeal by {date}",
            `- View past violations and manage your appeals. All content and behavior must adhere to the {link}Roblox Community
Standards{linkEnd}.`,
            "- Reviews are based on {link}Roblox Community Standards{linkEnd}",
            "- Learn more about appeals {link}here{linkEnd}.",
            "**Error Messages & Support Fallbacks**",
            "- Appeals information not found",
            "- If you would like to appeal something not shown here please visit {link}Support{linkEnd}",
            "- You've reached the maximum number of appeals. You may no longer appeal this {assetType}."
          ],
          default: null
        },
        captcha: {
          label: "All the places where you can get a captcha on Roblox",
          description: [
            "Roblox, I'm still mad that you denied my captcha bypass just to fix it a few weeks later \u{1F621}\u{1F621}\u{1F621}\u{1F621}\u{1F621}",
            "- sign up",
            "- login",
            "- change password",
            "- redeeming a gift card",
            "- submitting a support ticket",
            "- buying an item (speculation, might have been removed)",
            "- posting on a group wall (likely gonna be the same for group forum posts)",
            "- joining a group",
            "- 'generic challenge'\u2014no idea what they mean by that.",
            "- following a user",
            "- uploading 'clothing asset'\u2014could also be the same for any asset, but I'm unsure.",
            "- posting a comment on an asset (comments on assets have been removed)"
          ],
          default: null
        }
      }
    },
    WebsiteCustomization: {
      title: "Website Customization",
      settings: {
        CustomThemeBackgroundEnabled: {
          label: "Customizable Background Image",
          description: "Allows you to add a custom background image to the Roblox website.",
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          childSettings: {
            customBackgroundImage: {
              label: "Background Image Configuration",
              type: "backgroundImage",
              default: DEFAULT_BACKGROUND_IMAGE,
              hidden: !0
            },
            openCustomThemeBackground: {
              label: "Customize Image Settings",
              description: "Adjust the image's opacity, blur, position, size, and more.",
              type: "button",
              buttonText: "Edit",
              event: "rovalra:openCustomThemeBackground"
            }
          }
        },
        CustomThemeVariablesEnabled: {
          label: "Custom Theme Colors",
          description: [
            "Lets you use any Roblox theme, like Nebula Drift, and change the color variables Roblox uses for its themes.",
            "Picking a Roblox Plus theme applies it for free without requiring Roblox Plus. Any colors you change are layered on top of it, for both dark and light mode."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            customThemeVariables: {
              label: "Roblox Plus Themes",
              type: "themeVariables",
              default: DEFAULT_THEME_VARIABLES
            },
            customThemeVariableSaved: {
              label: "Saved Themes",
              type: "savedThemeVariables",
              default: [],
              hidden: !0
            }
          }
        },
        customRobloxBannerEnabled: {
          label: "Roblox Logo Customization",
          description: [
            "Replaces the Roblox banner in the top-left navigation bar with an image loaded from a URL you provide.",
            "Also supports GIFs!",
            "Recommended image: square PNG or WebP with transparency, 256x256 pixels.",
            'You can use this link "https://www.roblox.com/images/roblox_logo.png" to get back the old Roblox Logo!'
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          storageKey: [
            "customRobloxBannerImageUrl",
            "customRobloxBannerImage",
            "customRobloxBannerPositionX",
            "customRobloxBannerPositionY",
            "customRobloxBannerZoom"
          ],
          childSettings: {
            customRobloxBannerImageUrl: {
              label: "Custom Roblox Banner URL",
              description: [
                "Enter a direct image URL to use as your Roblox banner."
              ],
              type: "input",
              inputType: "url",
              inputWidth: "280px",
              placeholder: "https://example.com/banner.png",
              trim: !0,
              validateHttpUrl: !0,
              imageUrlPreview: !0,
              default: null
            },
            customRobloxBannerFitMode: {
              label: "Display Mode",
              description: [
                "Contain keeps the whole image visible.",
                "Cover fills the banner area while preserving aspect ratio.",
                "Stretch fills the full default Roblox banner area and may distort the image."
              ],
              type: "select",
              options: [
                { label: "Contain", value: "contain" },
                { label: "Cover", value: "cover" },
                { label: "Stretch", value: "stretch" }
              ],
              default: "contain"
            },
            customRobloxBannerPositionControls: {
              label: "Image Position",
              description: [
                "Moves the image inside the banner area. This is most useful in Cover mode."
              ],
              type: "buttonGroup",
              buttons: [
                {
                  text: "\u2191",
                  event: "rovalra:customRobloxBannerMoveUp"
                },
                {
                  text: "\u2193",
                  event: "rovalra:customRobloxBannerMoveDown"
                },
                {
                  text: "\u2190",
                  event: "rovalra:customRobloxBannerMoveLeft"
                },
                {
                  text: "\u2192",
                  event: "rovalra:customRobloxBannerMoveRight"
                },
                {
                  text: "Center",
                  event: "rovalra:customRobloxBannerCenter"
                },
                {
                  text: "Zoom In",
                  event: "rovalra:customRobloxBannerZoomIn"
                },
                {
                  text: "Zoom Out",
                  event: "rovalra:customRobloxBannerZoomOut"
                }
              ]
            },
            customRobloxBannerPositionX: {
              label: "Image Position X",
              description: "Horizontal image position from left to right. 50 is centered.",
              type: "number",
              min: 0,
              max: 100,
              step: 1,
              default: 50,
              hidden: !0
            },
            customRobloxBannerPositionY: {
              label: "Image Position Y",
              description: "Vertical image position from top to bottom. 50 is centered.",
              type: "number",
              min: 0,
              max: 100,
              step: 1,
              default: 50,
              hidden: !0
            },
            customRobloxBannerZoom: {
              label: "Image Zoom",
              description: "Image zoom percentage. 100 is the default size.",
              type: "number",
              min: 25,
              max: 300,
              step: 10,
              default: 100,
              hidden: !0
            }
          }
        },
        cursorBuddyEnabled: {
          label: "Cursor Buddy",
          description: [
            "A cute little buddy follows your cursor around Roblox."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          childSettings: {
            cursorBuddyCompanion: {
              label: "Buddy",
              type: "select",
              options: [
                { label: "Oneko", value: "cat" },
                { label: "Kitten", value: "kitten" }
              ],
              default: "cat"
            },
            cursorBuddySize: {
              label: "Size",
              description: "Choose how big your buddy looks.",
              type: "input",
              inputType: "number",
              min: 24,
              max: 128,
              step: 1,
              default: 32
            },
            cursorBuddyFollowSpeed: {
              label: "Follow Speed",
              description: "Choose how quickly your buddy follows your cursor.",
              type: "input",
              inputType: "number",
              min: 40,
              max: 600,
              step: 10,
              default: 240
            }
          }
        },
        customScrollbarEnabled: {
          label: "Customize Scroll Bar",
          description: ["Make Roblox scrollbars look the way you want."],
          type: "checkbox",
          default: !1,
          contributors: ["476449201"],
          childSettings: {
            customScrollbarHide: {
              label: "Hide Scroll Bar",
              description: "Hide the scrollbar entirely.",
              type: "checkbox",
              default: !1
            },
            customScrollbarWidth: {
              label: "Width",
              description: "Set the scrollbar width in pixels (1-24).",
              type: "input",
              inputType: "number",
              min: 1,
              max: 24,
              default: 8
            },
            customScrollbarRadius: {
              label: "Border Radius",
              description: "Set the scrollbar corner radius in pixels (0-24).",
              type: "input",
              inputType: "number",
              min: 0,
              max: 24,
              default: 8
            },
            customScrollbarThumbColor: {
              label: "Thumb Color",
              description: "Set the color of the moving scrollbar thumb.",
              type: "color",
              default: "#4f545c"
            },
            customScrollbarTrackColor: {
              label: "Track Color",
              description: "Set the background color of the scrollbar.",
              type: "color",
              default: "#202124"
            }
          }
        },
        customFaviconEnabled: {
          label: "Favicon Customization",
          description: [
            "Replaces the current favicon (the logo next to your tab) with an image loaded from a URL you provide.",
            "Recommended image: square PNG or WebP, 256x256 pixels or SVG.",
            'You can use this link "https://static.wikia.nocookie.net/logopedia/images/b/b7/ROBLOX_2006-2009.svg" to get back the old Roblox favicon!'
            // The link is a wikipedia link
          ],
          type: "checkbox",
          default: !1,
          contributors: ["3050364170"],
          childSettings: {
            customFaviconUrl: {
              label: "Custom Favicon URL",
              description: [
                "Enter a direct image URL to use as your favicon."
              ],
              type: "input",
              inputType: "url",
              inputWidth: "280px",
              placeholder: "https://example.com/favicon.png",
              trim: !0,
              validateHttpUrl: !0,
              imageUrlPreview: !0,
              default: null
            }
          }
        },
        Customfont: {
          label: "Custom font",
          description: [
            "This allows you to set a custom font for the Roblox website."
          ],
          type: "checkbox",
          default: !1,
          contributors: [48255812],
          childSettings: {
            Customfontlink: {
              label: "Google Fonts link",
              description: [
                "You can find Fonts at https://fonts.google.com/",
                'The link should look like "https://fonts.google.com/specimen/Comic+Neue"'
              ],
              type: "input",
              default: null,
              placeholder: "Enter Font Link here..."
            }
          }
        }
      }
    },
    PublicDeveloper: {
      title: "Developer",
      settings: {
        exportSettings: {
          label: "Export Settings",
          description: [
            "Export or import your RoValra settings as a JSON file."
          ],
          type: "buttonGroup",
          buttons: [
            {
              id: "export-rovalra-settings",
              text: "Export Settings"
            },
            {
              id: "import-rovalra-settings",
              text: "Import Settings"
            }
          ]
        },
        EnableRobloxApiDocsv2: {
          label: "Roblox API docs",
          description: [
            "Adds OpenAPI documentation for Roblox and RoValra APIs on https://www.roblox.com/docs.",
            "This documents undocumented Roblox APIs, which can be really useful for Developers.",
            "All Roblox APIs were documented by [Cam](https://www.roblox.com/users/4866259395/profile)"
          ],
          type: "checkbox",
          default: !0,
          locked: "Temporarily disabled while the API Docs feature is being rebuilt.",
          isPermanent: !1,
          contributors: ["4866259395", "447170745"],
          childSettings: {
            apiDocsSidebarLinkEnabled: {
              label: "API Docs sidebar link",
              description: "Adds an API Docs link below Communities in the Roblox sidebar.",
              type: "checkbox",
              default: !1
            }
          }
        },
        viewIdEnabled: {
          label: "View Bundled IDs",
          description: "Allows you to view all bundles items and their IDs of any catalog item.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["contextMenus"],
          contributors: ["1564574922"]
        },
        copyIdEnabled: {
          label: "Allows you to quickly copy an ID of a thing you're right-clicking.",
          description: "This adds a Copy ID button directly to the right-click context menu, so you don't have to open the link and copy the ID from it.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["contextMenus"],
          contributors: ["447170745", "1564574922"]
        },
        copyUniverseIdEnabled: {
          label: "Allows you to quickly copy a universe id",
          description: "This adds a copy universe id button directly into the right click context menu.",
          type: "checkbox",
          default: !1,
          requiredPermissions: ["contextMenus"]
        },
        DownloadCreateEnabled: {
          label: "Adds a download button to create.roblox.com",
          description: "This feature allows you to download assets like meshes, images, audios, etc from the create page.",
          type: "checkbox",
          default: !0,
          contributors: ["447170745", "126448532"]
        }
      }
    },
    Developer: {
      title: "RoValra Developer",
      settings: {
        info: {
          label: ["RoValra Developer Settings"],
          description: [
            "These are features used mostly to develop RoValra. If you don't know what you're doing, don't touch them."
          ],
          type: "yay"
        },
        homePlaytimeEnabled: {
          label: "Home Playtime Section",
          description: [
            "Adds the Playtime carousel and per-game playtime to the home page."
          ],
          type: "checkbox",
          default: !1
        },
        alwaysShowDeveloperSettings: {
          label: ["Always show RoValra developer settings tab"],
          description: [
            "This makes the RoValra developer settings tab always show, so you don't have to perform the Easter egg every time."
          ],
          type: "checkbox",
          default: !1
        },
        overwriteRemoteSettingLocks: {
          label: ["Override remotely disabled settings"],
          description: [
            "Allows RoValra features to remain enabled even when they're disabled by the remote settings service. This is for testing and may expose unstable features."
          ],
          type: "checkbox",
          default: !1
        },
        forceGuidelinesPopup: {
          label: "Force Guidelines Popup",
          description: [
            "Shows the RoValra Guidelines every time you try to use a feature that requires them, even after you previously agreed."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["10646979010"]
        },
        debugOverlayEnabled: {
          label: "Debug Overlay",
          description: [
            "Shows a debug overlay with performance, loading and graphics information.",
            "Press F3 to show or hide it."
          ],
          type: "checkbox",
          default: !1,
          contributors: ["2239549101"]
        },
        alwaysShowAccountStandingTab: {
          label: ["Always show Account Standing tab"],
          description: [
            "This will make the Account Standing tab show even when your account has no current or previous RoValra moderation action."
          ],
          type: "checkbox",
          default: !1
        },
        profileTestTabEnabled: {
          label: ["Profile test tab"],
          description: [
            'Adds a test tab containing the text "test" to profiles.'
          ],
          type: "checkbox",
          default: !1
        },
        EnablebannerTest: {
          label: ["Banner test"],
          description: ["This adds a test banner to experiences"],
          type: "checkbox",
          default: !1
        },
        impersonateRobloxStaffSetting: {
          label: ["Impersonate User Option On Profiles"],
          description: [
            "This enables the 'Impersonate User' option on people's profiles, used by Roblox internally.",
            "Pressing the 'Impersonate User' option does nothing other than produce an error unless you're authorized to use it."
          ],
          deprecated: "Roblox removed it with the new profile overhaul",
          locked: "This internal Roblox feature was removed during the profile page redesign.",
          isPermanent: !0,
          type: "checkbox",
          default: !1
        },
        EarlyAccessProgram: {
          label: ["Early Access Program Showcase"],
          description: [
            "This tricks Roblox into thinking you're in an early access program, making Roblox add the early access program UI to your settings.",
            "This setting won't allow you to join any early access programs you weren't invited to.",
            "This will also overwrite any early access programs you might already be in."
          ],
          type: "checkbox",
          default: !1
        },
        fakePreviousBetaProgramEnabled: {
          label: ["Fake Previous Beta Program"],
          description: [
            "Adds a fake previous beta program to the beta programs dropdown for testing.",
            "Requires previous beta programs to be enabled."
          ],
          type: "checkbox",
          default: !1
        },
        showUserAgeEnabled: {
          label: "Show Friend Age Range",
          description: "This shows the account age range of anyone on your friends list.",
          type: "checkbox",
          default: !1,
          locked: "This was made when Roblox decided it was a good idea to leak everyone's age range. It was only made to shed light on the issue, which has now been resolved.",
          isPermanent: !0
        },
        EnableVideoTest: {
          label: ["Video test"],
          description: [
            "This adds a video test for experience trailers not uploaded to YouTube at https://www.roblox.com/videotest.",
            "Since this feature is only supported on the client."
          ],
          type: "checkbox",
          default: !1
        },
        privateApiDocsEnabled: {
          label: ["Private RoValra API docs"],
          description: [
            "Adds RoValra API documentation at https://www.roblox.com/rovalra-api-docs.",
            "The documentation is loaded from RoValra and is only available to accounts with access to it."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            privateApiDocsSidebarLinkEnabled: {
              label: "RoValra API sidebar link",
              description: "Adds a RoValra API link below Communities in the Roblox sidebar.",
              type: "checkbox",
              default: !0
            }
          }
        },
        onboardingShown: {
          label: ["Show onboarding"],
          description: [
            "This will show RoValra's onboarding screen again when this setting is disabled."
          ],
          type: "checkbox",
          default: !1
        },
        simulateRoValraServerErrors: {
          label: ["Simulate RoValra Server Errors / downtime"],
          description: [
            "This will simulate RoValra Server errors / downtime, useful when testing how the extension handles stuff like that."
          ],
          type: "checkbox",
          default: !1
        },
        simulateRoValraApiTimeout: {
          label: ["Simulate RoValra Region API Timeout"],
          description: [
            "Makes the preferred region search wait the full 5 second RoValra API limit without finding a server, then fall back to scanning locally. Useful for testing the fallback user experience."
          ],
          type: "checkbox",
          default: !1
        },
        simulateRobloxJoinErrors: {
          label: ["Simulate Roblox Join Errors"],
          description: [
            "Simulates network errors for the Roblox Join API to test handling of critical join failures."
          ],
          type: "checkbox",
          default: !1,
          childSettings: {
            simulateRobloxJoinHttpErrors: {
              label: ["Simulate Roblox Join 500 Errors"],
              description: [
                "Simulates HTTP 500 errors for the Roblox Join API to test handling of internal server errors."
              ],
              type: "checkbox",
              default: !1
            }
          }
        },
        forceReviewPopup: {
          label: ["Force Review Popup"],
          description: [
            "When enabled, shows the review popup every time it's triggered, ignoring all requirements. For testing purposes."
          ],
          type: "checkbox",
          default: !1
        },
        forceRegionDonationPopup: {
          label: ["Force Region Donation Popup"],
          description: [
            "When enabled, shows the region selector donation popup every time it's triggered, ignoring donor and cadence requirements. For testing purposes."
          ],
          type: "checkbox",
          default: !1
        },
        forceFeatureStatusPrompt: {
          label: ["Force Feature Status Prompt"],
          description: [
            "When enabled, shows the feature status acknowledgement every time an off by default experimental, beta, or deprecated feature is enabled. For testing purposes."
          ],
          type: "checkbox",
          default: !1
        },
        rendererDeveloperToggles: {
          label: "3D renderer Developer toggles",
          type: "checkbox",
          default: !1
        },
        forceFallbackAuth: {
          label: "Force Fallback Authentication",
          description: [
            "Forces the use of the fallback verification system instead of OAuth.",
            "This auth is used in cases where OAuth doesn't work."
          ],
          type: "checkbox",
          default: !1
        },
        profile3DRenderBypassCheck: {
          label: "Bypass Graphics Check",
          description: [
            "Bypasses the compatibility check for the 3D Profile Renderer.",
            "Only enable this if the 3D renderer was disabled due to graphics issues but you want to try anyway."
          ],
          type: "checkbox",
          default: !1
        },
        disablePrivateGameRedirection: {
          label: "Disable Private Game Redirection",
          description: [
            "Disables the automatic redirection to the standard experience page when a public experience is detected in the private experience viewer."
          ],
          type: "checkbox",
          default: !1
        },
        localStorageUsage: {
          label: "Show Local Storage Usage",
          description: [
            "Displays the total storage used by RoValra in Chrome's local storage."
          ],
          type: "button",
          buttonText: "Calculate Storage",
          event: "rovalra:showLocalStorageUsage"
        },
        verboseDebug: {
          label: "Verbose Debugging",
          description: ["Displays extended debugging information."],
          type: "checkbox",
          default: !1,
          contributors: ["1564574922"],
          experimental: "This feature isn't yet widely used within RoValra."
        }
      }
    }
  };

  // src/content/core/debug.ts
  var verbose = !1;
  async function init() {
    verbose = (await chrome.storage.local.get({ verboseDebug: !1 })).verboseDebug;
  }
  __name(init, "init");
  init();
  function debugVerbose(fmt, ...args) {
    verbose && console.debug(fmt, ...args);
  }
  __name(debugVerbose, "debugVerbose");

  // src/background/settingsCompat.ts
  var settingDeprecations = {
    EnableGameTrailer: void 0,
    currencyTransferEnabled: void 0
  }, CONFIG = Object.freeze({
    COUNT_REPLACED_IF_INACTIVE: !0,
    // havent tested with this off
    COUNT_DEPRECATED_REMOVED_IF_INACTIVE: !0,
    // havent tested with this off
    SEEN_TRACK_STORAGE_KEY: "rovalra:settingsCompat:seenLocked"
  });
  function _getSeenStorageKey(name) {
    return `${CONFIG.SEEN_TRACK_STORAGE_KEY}:${name}`;
  }
  __name(_getSeenStorageKey, "_getSeenStorageKey");
  async function alreadySeenLockedSetting(name) {
    return !!(await chrome.storage.local.get({ [_getSeenStorageKey(name)]: !1 }))[_getSeenStorageKey(name)];
  }
  __name(alreadySeenLockedSetting, "alreadySeenLockedSetting");
  function markSeenLockedSettings(names) {
    return chrome.storage.local.set(Object.fromEntries(
      names.map((n) => [_getSeenStorageKey(n), !0])
    ));
  }
  __name(markSeenLockedSettings, "markSeenLockedSettings");
  function markLockedSettingAsUnseen(name) {
    return chrome.storage.local.remove(_getSeenStorageKey(name));
  }
  __name(markLockedSettingAsUnseen, "markLockedSettingAsUnseen");
  var compatResults = null, getStoredSettingValue = /* @__PURE__ */ __name(async (setting) => {
    let individual = await chrome.storage.local.get({
      [setting]: void 0
    });
    return individual[setting] !== void 0 ? individual[setting] : (await chrome.storage.local.get({
      rovalra_settings: {}
    })).rovalra_settings?.[setting];
  }, "getStoredSettingValue"), FLAT_SETTINGS_CONFIG = {};
  for (let category of Object.values(SETTINGS_CONFIG))
    for (let [key, value] of Object.entries(category.settings))
      FLAT_SETTINGS_CONFIG[key] = value;
  var cleanup = /* @__PURE__ */ __name((async () => {
  }), "cleanup"), init2 = /* @__PURE__ */ __name((async () => {
    let toAwait = [];
    console.debug("RoValra: Verifying settings compat.");
    let deleted = [], replaced = [], deletedOrReplacedKeys = [];
    for (let [setting, replaceFn] of Object.entries(settingDeprecations))
      try {
        let v;
        if ((v = await getStoredSettingValue(setting)) === !0 || CONFIG.COUNT_REPLACED_IF_INACTIVE)
          if (debugVerbose(`Replaced setting ${setting}.`, { replacement: String(replaceFn) }), replaceFn === void 0)
            await alreadySeenLockedSetting(setting) || (deleted.push(FLAT_SETTINGS_CONFIG[setting].label), deletedOrReplacedKeys.push(setting));
          else
            try {
              let replacements = {};
              await replaceFn(
                v,
                async (key) => (await chrome.storage.local.get({ [key]: void 0 }))[key],
                (key, newValue) => {
                  replacements[key] = newValue;
                }
              ), await chrome.storage.local.set(replacements), await alreadySeenLockedSetting(setting) || (replaced.push(setting), deletedOrReplacedKeys.push(setting));
            } catch (e) {
              console.error(`Failed to update setting ${setting} \u2014 unexpected error: `, e);
            }
      } catch (e) {
        console.error(`Failed to retrieve setting ${setting} for compat checks \u2014 unexpected error: `, e);
      }
    let forEachLockedSetting = /* @__PURE__ */ __name(async (key, data) => {
      let name = data.label;
      await alreadySeenLockedSetting(key) || (deleted.push(name), deletedOrReplacedKeys.push(key));
    }, "forEachLockedSetting");
    for (let [category, settings] of Object.entries(SETTINGS_CONFIG))
      for (let [setting, data] of Object.entries(settings.settings))
        if (data.locked !== void 0 || data.deprecated !== void 0) {
          let value = await getStoredSettingValue(setting);
          (value !== void 0 && value !== !1 || CONFIG.COUNT_DEPRECATED_REMOVED_IF_INACTIVE) && (debugVerbose(`Locked/deprecated setting: ${setting}`, data), await forEachLockedSetting(setting, data), await chrome.storage.local.set({ [setting]: !1 }));
        } else
          await alreadySeenLockedSetting(setting) && (debugVerbose(`Marking setting ${setting} as unseen.`, {
            key: setting,
            label: data.label,
            seen: await alreadySeenLockedSetting(setting),
            locked: data.deprecated,
            deprecated: data.deprecated
          }), toAwait.push(markLockedSettingAsUnseen(setting)));
    await Promise.all(toAwait), debugVerbose(`Marking ${deletedOrReplacedKeys.length} as seen.`, { values: deletedOrReplacedKeys }), await markSeenLockedSettings(deletedOrReplacedKeys), compatResults = { replaced, deleted }, await cleanup(), console.debug("Setting compat checks finished.");
  }), "init");
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => (message.type === "settingsCompatGetRes" && (debugVerbose("Recieved signal settingsCompatGetRes.", { message, data: compatResults }), sendResponse(compatResults), compatResults = { replaced: [], deleted: [] }), !0));
  var settingsCompat_default = init2;

  // src/shared/gameBookmarks.js
  var BOOKMARKS_KEY = "rovalra_game_bookmarks", DEFAULT_CATEGORY_ID = "uncategorized";
  function positiveId(value) {
    let id = Number(value);
    return Number.isSafeInteger(id) && id > 0 ? id : null;
  }
  __name(positiveId, "positiveId");
  function normalizeBookmarks(value) {
    let categories = [{ id: DEFAULT_CATEGORY_ID, name: "Uncategorized" }], ids = /* @__PURE__ */ new Set([DEFAULT_CATEGORY_ID]);
    for (let category of Array.isArray(value?.categories) ? value.categories : [])
      typeof category?.id != "string" || ids.has(category.id) || typeof category.name != "string" || !category.name.trim() || (categories.push({
        id: category.id,
        name: category.name.trim().slice(0, 60)
      }), ids.add(category.id));
    let bookmarks = {};
    for (let entry of Object.values(value?.bookmarks || {})) {
      let universeId = positiveId(entry?.universeId), rootPlaceId = positiveId(entry?.rootPlaceId);
      if (!universeId || !rootPlaceId) continue;
      let categoryIds = Array.isArray(entry.categoryIds) ? entry.categoryIds : [entry.categoryId], validCategoryIds = [
        ...new Set(categoryIds.filter((categoryId) => ids.has(categoryId)))
      ];
      bookmarks[universeId] = {
        universeId,
        rootPlaceId,
        categoryIds: validCategoryIds.length ? validCategoryIds : [DEFAULT_CATEGORY_ID]
      };
    }
    return { version: 1, categories, bookmarks };
  }
  __name(normalizeBookmarks, "normalizeBookmarks");
  function applyBookmarkOperation(value, operation) {
    let state2 = normalizeBookmarks(value);
    if (!["save", "remove", "deleteCategory"].includes(operation?.type))
      throw new Error("Invalid bookmark operation");
    if (operation.type === "deleteCategory") {
      if (typeof operation.categoryId != "string" || operation.categoryId === DEFAULT_CATEGORY_ID)
        throw new Error("Invalid category");
      if (!state2.categories.some((item) => item.id === operation.categoryId))
        throw new Error("Category no longer exists");
      state2.categories = state2.categories.filter(
        (item) => item.id !== operation.categoryId
      );
      for (let bookmark of Object.values(state2.bookmarks))
        bookmark.categoryIds = bookmark.categoryIds.filter(
          (categoryId) => categoryId !== operation.categoryId
        ), bookmark.categoryIds.length || (bookmark.categoryIds = [DEFAULT_CATEGORY_ID]);
      return state2;
    }
    let universeId = positiveId(operation.universeId);
    if (!universeId) throw new Error("Invalid universe");
    if (operation.type === "remove")
      return delete state2.bookmarks[universeId], state2;
    let rootPlaceId = positiveId(operation.rootPlaceId);
    if (!rootPlaceId) throw new Error("Invalid root place");
    let categoryIds = Array.isArray(operation.categoryIds) ? operation.categoryIds : [operation.categoryId || DEFAULT_CATEGORY_ID];
    if (typeof operation.newCategory == "string") {
      let name = operation.newCategory.trim();
      if (!name || name.length > 60)
        throw new Error("Category must contain 1\u201360 characters");
      let category = state2.categories.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );
      category || (category = { id: crypto.randomUUID(), name }, state2.categories.push(category)), categoryIds = [.../* @__PURE__ */ new Set([...categoryIds, category.id])];
    }
    return categoryIds = [...new Set(categoryIds)].filter(
      (categoryId) => state2.categories.some((item) => item.id === categoryId)
    ), categoryIds.length || (categoryIds = [DEFAULT_CATEGORY_ID]), state2.bookmarks[universeId] = { universeId, rootPlaceId, categoryIds }, state2;
  }
  __name(applyBookmarkOperation, "applyBookmarkOperation");

  // src/background/gameBookmarks.js
  var writes = Promise.resolve();
  function updateGameBookmarks(operation) {
    let result = writes.then(async () => {
      let data = await chrome.storage.local.get(BOOKMARKS_KEY);
      if (data[BOOKMARKS_KEY]?.version > 1)
        throw new Error("Unsupported bookmark version");
      let state2 = applyBookmarkOperation(data[BOOKMARKS_KEY], operation);
      return await chrome.storage.local.set({ [BOOKMARKS_KEY]: state2 }), state2;
    });
    return writes = result.catch(() => {
    }), result;
  }
  __name(updateGameBookmarks, "updateGameBookmarks");

  // src/background/notifications.js
  var STATE_KEY = "rovalra_notifications_state", PINNED_KEY = "rovalra_pinned_friends", ICON_URL = "public/Assets/icon-128.png", ROLIMONS_URL = "https://apis.rovalra.com/v1/rolimons/limiteds";
  var SETTING_DEFAULTS = {
    browserNotificationsEnabled: !1,
    tradeNotificationsEnabled: !0,
    friendNotificationsEnabled: !0
  }, api, interval = null, rolimons = { items: null, fetchedAt: 0 };
  async function hasPermission() {
    return chrome.permissions.contains({ permissions: ["notifications"] });
  }
  __name(hasPermission, "hasPermission");
  async function getEnabled() {
    let settings = await chrome.storage.local.get(SETTING_DEFAULTS), on = settings.browserNotificationsEnabled && await hasPermission();
    return {
      trades: on && settings.tradeNotificationsEnabled,
      friends: on && settings.friendNotificationsEnabled
    };
  }
  __name(getEnabled, "getEnabled");
  async function getStrings() {
    let { rovalraLanguage, rovalra_autolang } = await chrome.storage.local.get(["rovalraLanguage", "rovalra_autolang"]), lang = rovalraLanguage === "auto" ? rovalra_autolang : rovalraLanguage, load = /* @__PURE__ */ __name(async (code) => (await (await fetch(
      chrome.runtime.getURL(`public/Assets/locales/${code}.json`)
    )).json()).notifications || {}, "load"), en = await load("en");
    return !lang || lang === "en" ? en : { ...en, ...await load(lang).catch(() => ({})) };
  }
  __name(getStrings, "getStrings");
  function format(text, values) {
    return text.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? "");
  }
  __name(format, "format");
  function notify(id, title, message) {
    chrome.notifications.create(id, {
      type: "basic",
      iconUrl: chrome.runtime.getURL(ICON_URL),
      title,
      message
    });
  }
  __name(notify, "notify");
  async function getJson(options) {
    let res = await api(options);
    return res.ok ? res.json() : null;
  }
  __name(getJson, "getJson");
  async function getRolimonsItems() {
    if (Date.now() - rolimons.fetchedAt > 6e5) {
      let res = await fetch(ROLIMONS_URL, { credentials: "omit" }).catch(
        () => null
      ), json = res?.ok ? await res.json() : null;
      json?.items && (rolimons = { items: json.items, fetchedAt: Date.now() });
    }
    return rolimons.items || {};
  }
  __name(getRolimonsItems, "getRolimonsItems");
  function getOfferTotals(offer, items, robux) {
    return (offer?.items || []).reduce(
      (totals, item) => {
        let data = items[item.itemTarget?.targetId], rap = Number(data?.rap || item.recentAveragePrice) || 0;
        return totals.rap += rap, totals.value += Number(data?.default_price ?? rap) || 0, totals;
      },
      { value: robux, rap: robux }
    );
  }
  __name(getOfferTotals, "getOfferTotals");
  async function getTradeDiff(tradeId, partnerId) {
    let trade = await getJson({
      subdomain: "trades",
      endpoint: `/v2/trades/${tradeId}`
    });
    if (!trade) return null;
    let items = await getRolimonsItems(), partnerIsA = String(trade.participantAOffer?.user?.id) === String(partnerId), mine = partnerIsA ? trade.participantBOffer : trade.participantAOffer, theirs = partnerIsA ? trade.participantAOffer : trade.participantBOffer, give = getOfferTotals(mine, items, Number(mine?.robux) || 0), get2 = getOfferTotals(
      theirs,
      items,
      Math.floor((Number(theirs?.robux) || 0) * 0.7)
    );
    return { value: get2.value - give.value, rap: get2.rap - give.rap };
  }
  __name(getTradeDiff, "getTradeDiff");
  function signed(number) {
    return `${number < 0 ? "-" : "+"}${Math.abs(number).toLocaleString("en-US")}`;
  }
  __name(signed, "signed");
  async function checkTrades(seen, strings) {
    let data = await getJson({
      subdomain: "trades",
      endpoint: "/v1/trades/Inbound?limit=10&sortOrder=Desc"
    });
    if (!data?.data) return seen;
    let ids = data.data.map((trade) => trade.id);
    if (seen)
      for (let trade of data.data) {
        if (seen.includes(trade.id)) continue;
        let from = format(strings.tradeFrom, {
          name: trade.user.displayName || trade.user.name
        }), diff = await getTradeDiff(trade.id, trade.user.id).catch(
          () => null
        ), stats = diff ? format(strings.tradeStats, {
          value: signed(diff.value),
          rap: signed(diff.rap)
        }) : "";
        notify(
          `rovalra-trade-${trade.id}`,
          strings.newTrade,
          stats ? `${from}
${stats}` : from
        );
      }
    return [.../* @__PURE__ */ new Set([...ids, ...seen || []])].slice(0, 50);
  }
  __name(checkTrades, "checkTrades");
  async function checkFriends(previous, strings) {
    let { [PINNED_KEY]: pinned = [] } = await chrome.storage.local.get(PINNED_KEY);
    if (!pinned.length) return {};
    let data = await getJson({
      subdomain: "presence",
      endpoint: "/v1/presence/users",
      method: "POST",
      body: { userIds: pinned.map(Number) }
    });
    if (!data?.userPresences) return previous;
    let playing = {}, joined = [];
    for (let presence of data.userPresences)
      presence.userPresenceType !== 2 || !presence.rootPlaceId || (playing[presence.userId] = presence.rootPlaceId, previous && previous[presence.userId] !== presence.rootPlaceId && joined.push(presence));
    if (!joined.length) return playing;
    let users = await getJson({
      subdomain: "users",
      endpoint: "/v1/users",
      method: "POST",
      body: {
        userIds: joined.map((p) => p.userId),
        excludeBannedUsers: !1
      }
    }), names = Object.fromEntries(
      (users?.data || []).map((u) => [u.id, u.displayName || u.name])
    );
    for (let presence of joined)
      notify(
        `rovalra-game-${presence.rootPlaceId}-${presence.userId}`,
        format(strings.friendPlaying, {
          name: names[presence.userId] || presence.userId
        }),
        presence.lastLocation || strings.unknownGame
      );
    return playing;
  }
  __name(checkFriends, "checkFriends");
  async function check() {
    let enabled = await getEnabled(), { [STATE_KEY]: state2 = {} } = await chrome.storage.local.get(STATE_KEY), strings = await getStrings();
    enabled.trades ? state2.trades = await checkTrades(state2.trades, strings) : delete state2.trades, enabled.friends ? state2.friends = await checkFriends(state2.friends, strings) : delete state2.friends, await chrome.storage.local.set({ [STATE_KEY]: state2 });
  }
  __name(check, "check");
  function onClicked(id) {
    let [, type, placeId] = id.split("-"), url = type === "trade" ? "https://www.roblox.com/trades" : `https://www.roblox.com/games/${placeId}`;
    chrome.tabs.create({ url }), chrome.notifications.clear(id);
  }
  __name(onClicked, "onClicked");
  async function syncNotifications() {
    await hasPermission() && !chrome.notifications.onClicked.hasListener(onClicked) && chrome.notifications.onClicked.addListener(onClicked);
    let { trades, friends } = await getEnabled(), enabled = trades || friends;
    enabled && !interval ? (interval = setInterval(() => check().catch(() => {
    }), 6e4), check().catch(() => {
    })) : !enabled && interval && (clearInterval(interval), interval = null, chrome.storage.local.remove(STATE_KEY));
  }
  __name(syncNotifications, "syncNotifications");
  function setupNotifications(callApi) {
    api = callApi, chrome.storage.onChanged.addListener((changes, namespace) => {
      namespace === "local" && Object.keys(SETTING_DEFAULTS).some((key) => key in changes) && syncNotifications();
    }), chrome.permissions.onAdded.addListener(syncNotifications), chrome.permissions.onRemoved.addListener(syncNotifications), syncNotifications();
  }
  __name(setupNotifications, "setupNotifications");

  // node_modules/dexie/import-wrapper.mjs
  var import_dexie = __toESM(require_dexie(), 1), DexieSymbol = /* @__PURE__ */ Symbol.for("Dexie"), Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = import_dexie.default);
  if (import_dexie.default.semVer !== Dexie.semVer)
    throw new Error(`Two different versions of Dexie loaded in the same app: ${import_dexie.default.semVer} and ${Dexie.semVer}`);
  var {
    liveQuery,
    mergeRanges,
    rangesOverlap,
    RangeSet,
    cmp,
    Entity,
    PropModification,
    replacePrefix,
    add,
    remove,
    DexieYProvider
  } = Dexie;
  var import_wrapper_default = Dexie;

  // src/background/indexedDb.js
  var db = new import_wrapper_default("rovalra");
  db.version(1).stores({
    entries: "[store+key], store"
  });
  function notifyChange(store, key) {
    chrome.tabs.query({}, (tabs) => {
      for (let tab of tabs || [])
        chrome.tabs.sendMessage(tab.id, {
          action: "indexedDbChanged",
          store,
          key
        }).catch(() => {
        });
    });
  }
  __name(notifyChange, "notifyChange");
  async function get(store, key) {
    let entry = await db.entries.get([store, String(key)]);
    return entry ? entry.value : null;
  }
  __name(get, "get");
  async function set(store, key, value) {
    await db.entries.put({ store, key: String(key), value }), notifyChange(store, String(key));
  }
  __name(set, "set");
  async function remove2(store, key) {
    await db.entries.delete([store, String(key)]), notifyChange(store, String(key));
  }
  __name(remove2, "remove");
  async function clearStore(store) {
    await db.entries.where("store").equals(store).delete(), notifyChange(store, null);
  }
  __name(clearStore, "clearStore");
  var messageHandlers = {
    indexedDbGet: /* @__PURE__ */ __name((request) => get(request.store, request.key), "indexedDbGet"),
    indexedDbSet: /* @__PURE__ */ __name((request) => set(request.store, request.key, request.value), "indexedDbSet"),
    indexedDbRemove: /* @__PURE__ */ __name((request) => remove2(request.store, request.key), "indexedDbRemove"),
    indexedDbClearStore: /* @__PURE__ */ __name((request) => clearStore(request.store), "indexedDbClearStore")
  };
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let handler = messageHandlers[request?.action];
    return handler ? (handler(request).then((value) => sendResponse({ value: value ?? null })).catch((error) => sendResponse({ error: error.message })), !0) : !1;
  });

  // src/background/background.js
  var state = {
    isMemoryFixEnabled: !1,
    programmaticallyNavigatedUrls: /* @__PURE__ */ new Set(),
    currentUserId: null,
    latestPresence: null,
    pollingInterval: null,
    csrfTokenCache: null,
    rotatorInterval: null,
    rotatorIndex: 0,
    bannedUserRedirects: /* @__PURE__ */ new Map(),
    privateGameRedirects: /* @__PURE__ */ new Map()
  }, rateLimitCooldowns = /* @__PURE__ */ new Map();
  chrome.storage.session && chrome.storage.session.setAccessLevel && chrome.storage.session.setAccessLevel({
    accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS"
  }).catch(
    (err) => console.error("RoValra: Failed to set session access level", err)
  );
  function getDefaultSettings() {
    let defaults = {};
    for (let category of Object.values(SETTINGS_CONFIG))
      for (let [settingName, settingDef] of Object.entries(
        category.settings
      ))
        if (settingDef.default !== void 0 && (defaults[settingName] = settingDef.default), settingDef.childSettings)
          for (let [childName, childSettingDef] of Object.entries(
            settingDef.childSettings
          ))
            childSettingDef.default !== void 0 && (defaults[childName] = childSettingDef.default);
    return defaults;
  }
  __name(getDefaultSettings, "getDefaultSettings");
  function initializeSettings(reason) {
    let defaults = getDefaultSettings();
    chrome.storage.local.get(null, async (currentSettings) => {
      await settingsCompat_default();
      let settingsToUpdate = {}, needsUpdate = !1;
      for (let [key, defaultValue] of Object.entries(defaults)) {
        let storedValue = currentSettings[key];
        if (storedValue === void 0)
          settingsToUpdate[key] = defaultValue, needsUpdate = !0;
        else if (defaultValue !== null) {
          let defaultType = typeof defaultValue, storedType = typeof storedValue;
          storedValue === null ? (console.warn(
            `RoValra: Setting '${key}' was null but expected ${defaultType}. Resetting.`
          ), settingsToUpdate[key] = defaultValue, needsUpdate = !0) : storedType !== defaultType && (console.warn(
            `RoValra: Type mismatch for '${key}'. Expected ${defaultType}, got ${storedType}. Resetting.`
          ), settingsToUpdate[key] = defaultValue, needsUpdate = !0);
        }
      }
      needsUpdate && chrome.storage.local.set(settingsToUpdate, () => {
        chrome.runtime.lastError ? console.error(
          "RoValra: Failed to sync settings.",
          chrome.runtime.lastError
        ) : console.log(
          `RoValra: Synced/Fixed ${Object.keys(settingsToUpdate).length} settings (Trigger: ${reason}).`
        );
      });
    });
  }
  __name(initializeSettings, "initializeSettings");
  function updateUserAgentRule() {
    let originalUA = self.navigator.userAgent, browser = "Unknown", engine = "Unknown";
    originalUA.includes("Firefox/") ? (browser = "Firefox", engine = "Gecko") : originalUA.includes("Edg/") ? (browser = "Edge", engine = "Chromium") : originalUA.includes("OPR/") || originalUA.includes("Opera/") ? (browser = "Opera", engine = "Chromium") : originalUA.includes("Chrome/") ? (browser = "Chrome", engine = "Chromium") : originalUA.includes("Safari/") && (browser = "Safari", engine = "WebKit");
    let manifest = chrome.runtime.getManifest(), version = manifest.version || "Unknown", environment = !("update_url" in manifest) ? "Development" : "Production", rovalraSuffix = `RoValraExtension(RoValra/${browser}/${engine}/${version}/${environment})`;
    (engine === "Gecko" || engine === "WebKit") && (rovalraSuffix += " UnofficialRoValraVersion");
    let rules = [
      {
        id: 999,
        priority: 5,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "User-Agent",
              operation: "set",
              value: `${originalUA} ${rovalraSuffix}`
            }
          ]
        },
        condition: {
          regexFilter: ".*_RoValraRequest=",
          resourceTypes: ["xmlhttprequest"]
        }
      },
      {
        id: 1e3,
        priority: 10,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "User-Agent",
              operation: "set",
              value: `Roblox/WinInet ${rovalraSuffix}`
            }
          ]
        },
        condition: {
          regexFilter: "^https://gamejoin\\.roblox\\.com/.*_RoValraRequest=|^https://apis\\.roblox\\.com/player-hydration-service/v1/players/signed",
          resourceTypes: ["xmlhttprequest"]
        }
      }
    ];
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [999, 1e3],
      addRules: rules
    });
  }
  __name(updateUserAgentRule, "updateUserAgentRule");
  function onBeforeRedirectHandler(details) {
    let match = details.url.match(/users\/(\d+)\/profile/);
    match && match[1] && state.bannedUserRedirects.set(details.tabId, match[1]);
  }
  __name(onBeforeRedirectHandler, "onBeforeRedirectHandler");
  function updateBannedUserListener() {
    chrome.webRequest && chrome.permissions.contains({ permissions: ["webRequest"] }, (granted) => {
      granted && chrome.storage.local.get(
        { bannedUserDetectionFallbackEnabled: !1 },
        (data) => {
          data.bannedUserDetectionFallbackEnabled ? chrome.webRequest.onBeforeRedirect.hasListener(
            onBeforeRedirectHandler
          ) || chrome.webRequest.onBeforeRedirect.addListener(
            onBeforeRedirectHandler,
            {
              urls: [
                "*://www.roblox.com/users/*/profile*"
              ]
            }
          ) : chrome.webRequest.onBeforeRedirect.removeListener(
            onBeforeRedirectHandler
          );
        }
      );
    });
  }
  __name(updateBannedUserListener, "updateBannedUserListener");
  function onPrivateGameRedirectHandler(details) {
    let match = details.url.match(/games\/(\d+)/);
    if (match && match[1]) {
      let placeId = match[1];
      state.privateGameRedirects.set(details.tabId, placeId);
    }
  }
  __name(onPrivateGameRedirectHandler, "onPrivateGameRedirectHandler");
  function updatePrivateGameListener() {
    chrome.webRequest && chrome.permissions.contains({ permissions: ["webRequest"] }, (granted) => {
      granted && chrome.storage.local.get(
        { privateGameDetectionFallbackEnabled: !1 },
        (data) => {
          data.privateGameDetectionFallbackEnabled ? chrome.webRequest.onBeforeRedirect.hasListener(
            onPrivateGameRedirectHandler
          ) || chrome.webRequest.onBeforeRedirect.addListener(
            onPrivateGameRedirectHandler,
            {
              urls: ["*://www.roblox.com/games/*"]
            }
          ) : chrome.webRequest.onBeforeRedirect.removeListener(
            onPrivateGameRedirectHandler
          );
        }
      );
    });
  }
  __name(updatePrivateGameListener, "updatePrivateGameListener");
  var handleMemoryLeakNavigation = /* @__PURE__ */ __name((details) => {
    if (state.programmaticallyNavigatedUrls.has(details.url)) {
      state.programmaticallyNavigatedUrls.delete(details.url);
      return;
    }
    if (details.frameId !== 0 || details.transitionType === "auto_subframe" || details.transitionType === "reload" || details.url.includes("/download/client"))
      return;
    let newUrl = details.url, tabId = details.tabId;
    state.programmaticallyNavigatedUrls.add(newUrl), chrome.tabs.update(tabId, { url: "about:blank" }, () => {
      setTimeout(() => {
        chrome.tabs.update(tabId, { url: newUrl });
      }, 50);
    });
  }, "handleMemoryLeakNavigation"), navigationListener = /* @__PURE__ */ __name((details) => {
    state.isMemoryFixEnabled && handleMemoryLeakNavigation(details);
  }, "navigationListener");
  async function setupNavigationListener() {
    await chrome.permissions.contains({
      permissions: ["webNavigation"]
    }) && !chrome.webNavigation.onBeforeNavigate.hasListener(navigationListener) && chrome.webNavigation.onBeforeNavigate.addListener(navigationListener, {
      url: [{ hostContains: ".roblox.com" }],
      urlExcludes: ["roblox-player:*"]
    });
  }
  __name(setupNavigationListener, "setupNavigationListener");
  var contextMenuClickListener = /* @__PURE__ */ __name(async (info, tab) => {
    if (info.menuItemId.startsWith("rovalra-copy-universe-")) {
      let placeId = info.menuItemId.replace("rovalra-copy-universe-", ""), universeId = await getUniverseIdFromPlaceId(placeId);
      universeId && tab?.id && chrome.tabs.sendMessage(tab.id, {
        action: "copyToClipboard",
        text: String(universeId)
      });
    } else if (info.menuItemId.startsWith("rovalra-viewid-")) {
      let id = info.menuItemId.replace("rovalra-viewid-", "");
      id && tab?.id && chrome.tabs.sendMessage(tab.id, {
        action: "view-ids",
        data: {
          targetId: id
        }
      });
    } else if (info.menuItemId.startsWith("rovalra-copy-") && tab?.id) {
      let textToCopy = info.menuItemId.replace("rovalra-copy-", "");
      chrome.tabs.sendMessage(tab.id, {
        action: "copyToClipboard",
        text: textToCopy
      });
    }
  }, "contextMenuClickListener");
  async function setupContextMenuListener() {
    await chrome.permissions.contains({
      permissions: ["contextMenus"]
    }) && chrome.contextMenus && !chrome.contextMenus.onClicked.hasListener(contextMenuClickListener) && chrome.contextMenus.onClicked.addListener(contextMenuClickListener);
  }
  __name(setupContextMenuListener, "setupContextMenuListener");
  async function getUniverseIdFromPlaceId(placeId) {
    try {
      let response = await callRobloxApiBackground({
        subdomain: "apis",
        endpoint: `/universes/v1/places/${placeId}/universe`
      });
      return response.ok ? (await response.json()).universeId : null;
    } catch (e) {
      return console.error("RoValra: Error fetching universe ID from place ID", e), null;
    }
  }
  __name(getUniverseIdFromPlaceId, "getUniverseIdFromPlaceId");
  async function callRobloxApiBackground(options) {
    let {
      subdomain = "api",
      endpoint,
      method = "GET",
      body = null,
      headers = {},
      fullUrl = null,
      isRovalraApi = !1
    } = options, url;
    if (isRovalraApi) {
      if (subdomain !== "apis")
        throw new Error(
          "Unsupported RoValra subdomain for background fetch"
        );
      url = `https://apis.rovalra.com${endpoint}`;
    } else if (fullUrl) {
      let parsedUrl = new URL(fullUrl);
      if (parsedUrl.hostname !== "setup.rbxcdn.com")
        throw new Error("Unsupported fullUrl host for background fetch");
      url = parsedUrl.toString();
    } else
      url = `https://${subdomain}.roblox.com${endpoint}`;
    let separator = url.includes("?") ? "&" : "?";
    endpoint?.includes("/player-hydration-service/v1/players/signed") || (url += `${separator}_RoValraRequest=`);
    let fetchOptions = { method, headers: { ...headers } };
    isRovalraApi && (fetchOptions.credentials = "omit"), body && (typeof body == "object" ? (fetchOptions.headers["Content-Type"] = "application/json", fetchOptions.body = JSON.stringify(body)) : fetchOptions.body = body), !isRovalraApi && method !== "GET" && method !== "HEAD" && state.csrfTokenCache && (fetchOptions.headers["X-CSRF-TOKEN"] = state.csrfTokenCache);
    let rateLimitKey = new URL(url).origin, cooldownUntil = rateLimitCooldowns.get(rateLimitKey) || 0;
    cooldownUntil > Date.now() ? await sleep(cooldownUntil - Date.now()) : rateLimitCooldowns.delete(rateLimitKey);
    let response = await fetch(url, fetchOptions);
    if (response.status === 429) {
      let cooldown = getRateLimitDelay(response);
      cooldown > 0 && rateLimitCooldowns.set(
        rateLimitKey,
        Math.max(
          rateLimitCooldowns.get(rateLimitKey) || 0,
          Date.now() + cooldown
        )
      );
    }
    if (!isRovalraApi && response.status === 403 && method !== "GET" && method !== "HEAD") {
      let newCsrf = response.headers.get("x-csrf-token");
      newCsrf && (state.csrfTokenCache = newCsrf, fetchOptions.headers["X-CSRF-TOKEN"] = newCsrf, response = await fetch(url, fetchOptions));
    }
    return response;
  }
  __name(callRobloxApiBackground, "callRobloxApiBackground");
  async function wearOutfit(outfitData) {
    let callWithRetry = /* @__PURE__ */ __name(async (options) => {
      let response;
      for (let i = 0; i < 4; i++) {
        if (response = await callRobloxApiBackground(options), response.ok) return response;
        if (response.status === 429 || response.status >= 500) {
          i < 3 && await new Promise((r) => setTimeout(r, 1e3));
          continue;
        }
        return response;
      }
      return response;
    }, "callWithRetry");
    try {
      let outfitId = typeof outfitData == "object" && outfitData !== null ? outfitData.itemId : outfitData;
      if (!outfitId)
        return console.error(
          "RoValra: wearOutfit called with invalid outfitData",
          outfitData
        ), { ok: !1 };
      let details = await new Promise((resolve) => {
        chrome.storage.local.get(
          "rovalra_avatar_rotator_details",
          (data) => {
            resolve(
              data.rovalra_avatar_rotator_details?.[String(outfitId)] || null
            );
          }
        );
      });
      if (!details) {
        let detailsRes = await callWithRetry({
          subdomain: "avatar",
          endpoint: `/v4/outfits/${outfitId}/details`
        });
        if (!detailsRes?.ok) return { ok: !1 };
        details = await detailsRes.json();
      }
      let outfitModel = details.outfitModel || details, assets = [...outfitModel.assets || []], bodyColor3s = details.bodyColor3s || outfitModel.bodyColor3s;
      !bodyColor3s && outfitModel.bodyColors && (bodyColor3s = Object.fromEntries(
        Object.entries({
          headColor: "headColor3",
          torsoColor: "torsoColor3",
          leftArmColor: "leftArmColor3",
          rightArmColor: "rightArmColor3",
          leftLegColor: "leftLegColor3",
          rightLegColor: "rightLegColor3"
        }).filter(([key]) => outfitModel.bodyColors[key]).map(([key, outputKey]) => {
          let color = String(outfitModel.bodyColors[key]);
          return [
            outputKey,
            color.startsWith("#") ? color : `#${color}`
          ];
        })
      ));
      let backgroundAsset = details.outfitConfigurations?.background?.backgroundAsset, promises = [];
      return backgroundAsset?.id && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v4/avatar",
          method: "PATCH",
          body: {
            updateTypes: ["UpdateBackground"],
            avatarDefinition: {
              updateAvatarConfig: {
                backgroundRequestModel: {
                  id: backgroundAsset.id
                }
              }
            }
          }
        })
      ), assets.length > 0 && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v2/avatar/set-wearing-assets",
          method: "POST",
          body: { assets }
        })
      ), outfitModel.playerAvatarType && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v1/avatar/set-player-avatar-type",
          method: "POST",
          body: { playerAvatarType: outfitModel.playerAvatarType }
        })
      ), outfitModel.scale && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v1/avatar/set-scales",
          method: "POST",
          body: outfitModel.scale
        })
      ), bodyColor3s && promises.push(
        callWithRetry({
          subdomain: "avatar",
          endpoint: "/v2/avatar/set-body-colors",
          method: "POST",
          body: bodyColor3s
        })
      ), { ok: (await Promise.all(promises)).every((r) => r && r.ok) };
    } catch (e) {
      return console.error("RoValra: Error wearing outfit", e), { ok: !1 };
    }
  }
  __name(wearOutfit, "wearOutfit");
  function handlePresenceUpdate(presence) {
    if (JSON.stringify(presence) !== JSON.stringify(state.latestPresence)) {
      let oldPresence = state.latestPresence;
      state.latestPresence = presence, chrome.tabs.query({ url: "*://*.roblox.com/*" }, (tabs) => {
        tabs.forEach(
          (tab) => chrome.tabs.sendMessage(tab.id, {
            action: "presenceUpdate",
            presence: state.latestPresence
          }).catch(() => {
          })
        );
      });
      let isJoiningGame = /* @__PURE__ */ __name((p) => p && (p.userPresenceType === 2 || p.userPresenceType === 4), "isJoiningGame");
      isJoiningGame(presence) && presence.gameId && presence.rootPlaceId && (!isJoiningGame(oldPresence) || oldPresence.gameId !== presence.gameId) && chrome.storage.local.get(
        { rovalra_server_history: {} },
        (res) => {
          let history = res.rovalra_server_history || {}, gameId = presence.rootPlaceId.toString(), gameHistory = history[gameId] || [], now = Date.now();
          gameHistory = gameHistory.filter(
            (entry) => now - entry.timestamp < 1440 * 60 * 1e3
          );
          let serverIndex = gameHistory.findIndex(
            (entry) => entry.presence.gameId === presence.gameId
          );
          serverIndex > -1 && gameHistory.splice(serverIndex, 1), gameHistory.unshift({ presence, timestamp: now }), history[gameId] = gameHistory.slice(0, 4), chrome.storage.local.set({
            rovalra_server_history: history
          });
        }
      );
    }
  }
  __name(handlePresenceUpdate, "handlePresenceUpdate");
  function pollUserPresence() {
    state.currentUserId && chrome.storage.local.get(
      { recentServersEnabled: !0 },
      async (settings) => {
        if (settings.recentServersEnabled)
          try {
            let response = await callRobloxApiBackground({
              subdomain: "presence",
              endpoint: "/v1/presence/users",
              method: "POST",
              body: { userIds: [parseInt(state.currentUserId, 10)] }
            });
            if (response.ok) {
              let presence = (await response.json())?.userPresences?.[0];
              presence && handlePresenceUpdate(presence);
            }
          } catch {
          }
      }
    );
  }
  __name(pollUserPresence, "pollUserPresence");
  function updateAvatarRotator() {
    chrome.storage.local.get(
      [
        "rovalra_avatar_rotator_enabled",
        "rovalra_avatar_rotator_ids",
        "rovalra_avatar_rotator_interval"
      ],
      (data) => {
        if (state.rotatorInterval && (clearInterval(state.rotatorInterval), state.rotatorInterval = null), data.rovalra_avatar_rotator_enabled && data.rovalra_avatar_rotator_ids?.length > 0) {
          let ids = data.rovalra_avatar_rotator_ids;
          state.rotatorIndex = 0;
          let intervalSeconds = Math.max(
            parseInt(data.rovalra_avatar_rotator_interval, 10) || 5,
            5
          ), rotate = /* @__PURE__ */ __name(() => {
            if (ids.length === 0) return;
            let outfit = ids[state.rotatorIndex];
            wearOutfit(outfit), state.rotatorIndex = (state.rotatorIndex + 1) % ids.length;
          }, "rotate");
          rotate(), state.rotatorInterval = setInterval(
            rotate,
            intervalSeconds * 1e3
          );
        }
      }
    );
  }
  __name(updateAvatarRotator, "updateAvatarRotator");
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  __name(sleep, "sleep");
  function getRateLimitDelay(response) {
    let retryAfter = response.headers.get("retry-after");
    if (retryAfter) {
      let retryAfterSeconds = Number(retryAfter);
      if (Number.isFinite(retryAfterSeconds))
        return Math.max(0, retryAfterSeconds * 1e3) + 1e3;
      let retryAt = Date.parse(retryAfter);
      if (Number.isFinite(retryAt))
        return Math.max(0, retryAt - Date.now()) + 1e3;
    }
    let remaining = Number(response.headers.get("x-ratelimit-remaining")), resetValue = Number(response.headers.get("x-ratelimit-reset"));
    return Number.isFinite(remaining) && remaining <= 1 && Number.isFinite(resetValue) && resetValue > 0 ? (resetValue > 1e9 ? Math.max(0, resetValue * 1e3 - Date.now()) : resetValue * 1e3) + 1e3 : 0;
  }
  __name(getRateLimitDelay, "getRateLimitDelay");
  function uint8ToBase64(u8) {
    let binary = "";
    for (let i = 0; i < u8.length; i += 8192)
      binary += String.fromCharCode.apply(null, u8.subarray(i, i + 8192));
    return btoa(binary);
  }
  __name(uint8ToBase64, "uint8ToBase64");
  var customFontCache = /* @__PURE__ */ new Map();
  function getAssetIdFromValue(value) {
    if (typeof value == "number" && Number.isFinite(value))
      return String(Math.trunc(value));
    if (typeof value != "string") return null;
    let match = value.match(/\d+/);
    return match ? match[0] : null;
  }
  __name(getAssetIdFromValue, "getAssetIdFromValue");
  function detectFontMimeType(bytes) {
    if (!(bytes instanceof Uint8Array) || bytes.length < 4)
      return "application/octet-stream";
    let signature = String.fromCharCode(
      bytes[0],
      bytes[1],
      bytes[2],
      bytes[3]
    );
    return signature === "OTTO" ? "font/otf" : signature === "ttcf" ? "font/collection" : signature === "wOFF" ? "font/woff" : signature === "wOF2" ? "font/woff2" : bytes[0] === 0 && bytes[1] === 1 && bytes[2] === 0 && bytes[3] === 0 || signature === "true" || signature === "typ1" ? "font/ttf" : "application/octet-stream";
  }
  __name(detectFontMimeType, "detectFontMimeType");
  function findFontFaces(fontInfo) {
    return !fontInfo || typeof fontInfo != "object" ? [] : Array.isArray(fontInfo.faces) ? fontInfo.faces : Array.isArray(fontInfo.Faces) ? fontInfo.Faces : Array.isArray(fontInfo.fonts) ? fontInfo.fonts : [fontInfo];
  }
  __name(findFontFaces, "findFontFaces");
  async function fetchAssetDelivery(assetId) {
    return callRobloxApiBackground({
      subdomain: "assetdelivery",
      endpoint: `/v1/asset/?id=${encodeURIComponent(assetId)}`
    });
  }
  __name(fetchAssetDelivery, "fetchAssetDelivery");
  async function getCustomFontFamily(assetId) {
    let normalizedAssetId = getAssetIdFromValue(assetId);
    if (!normalizedAssetId) throw new Error("Invalid custom font asset id");
    if (customFontCache.has(normalizedAssetId))
      return customFontCache.get(normalizedAssetId);
    let promise = (async () => {
      let infoResponse = await fetchAssetDelivery(normalizedAssetId);
      if (!infoResponse.ok)
        throw new Error(
          `Font info request failed: HTTP ${infoResponse.status}`
        );
      let fontInfo = await infoResponse.json(), familyName = `RoValraCustomFont${normalizedAssetId}`, faces = [];
      for (let face of findFontFaces(fontInfo)) {
        let faceAssetId = getAssetIdFromValue(
          face.assetId ?? face.AssetId ?? face.assetID ?? face.id ?? face.Id
        );
        if (!faceAssetId) continue;
        let fileResponse = await fetchAssetDelivery(faceAssetId);
        if (!fileResponse.ok) {
          console.warn(
            `RoValra: Custom font file ${faceAssetId} failed with HTTP ${fileResponse.status}`
          );
          continue;
        }
        let fontBytes = new Uint8Array(await fileResponse.arrayBuffer());
        faces.push({
          weight: Number(face.weight ?? face.Weight ?? 400) || 400,
          style: face.style ?? face.Style ?? "normal",
          mimeType: detectFontMimeType(fontBytes),
          base64: uint8ToBase64(fontBytes)
        });
      }
      if (faces.length === 0)
        throw new Error(
          "Custom font did not contain any downloadable faces"
        );
      return { success: !0, name: familyName, faces };
    })();
    customFontCache.set(normalizedAssetId, promise);
    try {
      return await promise;
    } catch (error) {
      throw customFontCache.delete(normalizedAssetId), error;
    }
  }
  __name(getCustomFontFamily, "getCustomFontFamily");
  chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.remove("rovalra_transactions_data"), chrome.storage.local.get({ rovalra_installed_at: null }, (result) => {
      result.rovalra_installed_at || chrome.storage.local.set({ rovalra_installed_at: Date.now() });
    }), initializeSettings(details.reason), setupContextMenuListener();
  });
  chrome.runtime.onStartup.addListener(() => {
    initializeSettings("startup"), setupContextMenuListener();
  });
  chrome.storage.onChanged.addListener((changes, namespace) => {
    namespace === "local" && (changes.MemoryleakFixEnabled && (state.isMemoryFixEnabled = changes.MemoryleakFixEnabled.newValue, state.isMemoryFixEnabled && setupNavigationListener()), (changes.rovalra_avatar_rotator_enabled || changes.rovalra_avatar_rotator_ids || changes.rovalra_avatar_rotator_interval) && updateAvatarRotator(), (changes.privateGameViewerEnabled || changes.privateGameDetectionFallbackEnabled) && updatePrivateGameListener(), (changes.bannedUserViewerEnabled || changes.bannedUserDetectionFallbackEnabled) && updateBannedUserListener());
  });
  chrome.permissions.onAdded.addListener((permissions) => {
    permissions.permissions?.includes("webNavigation") && setupNavigationListener(), permissions.permissions?.includes("contextMenus") && setupContextMenuListener(), permissions.permissions?.includes("webRequest") && (updateBannedUserListener(), updatePrivateGameListener()), chrome.tabs.query({}, (tabs) => {
      tabs.forEach(
        (tab) => chrome.tabs.sendMessage(tab.id, { action: "permissionsUpdated" }).catch(() => {
        })
      );
    });
  });
  chrome.permissions.onRemoved.addListener((permissions) => {
    permissions.permissions?.includes("webNavigation") && chrome.webNavigation.onBeforeNavigate.hasListener(navigationListener) && chrome.webNavigation.onBeforeNavigate.removeListener(
      navigationListener
    ), permissions.permissions?.includes("contextMenus") && chrome.contextMenus?.onClicked.hasListener(contextMenuClickListener) && chrome.contextMenus.onClicked.removeListener(contextMenuClickListener), permissions.permissions?.includes("webRequest") && chrome.webRequest.onBeforeRedirect.removeListener(
      onBeforeRedirectHandler
    ), chrome.tabs.query({}, (tabs) => {
      tabs.forEach(
        (tab) => chrome.tabs.sendMessage(tab.id, { action: "permissionsUpdated" }).catch(() => {
        })
      );
    });
  });
  function getImageTypeFromBytes(bytes) {
    let startsWith = /* @__PURE__ */ __name((signature, offset = 0) => signature.every((byte, i) => bytes[offset + i] === byte), "startsWith"), ascii = /* @__PURE__ */ __name((text) => [...text].map((char) => char.charCodeAt(0)), "ascii");
    return startsWith([137, 80, 78, 71]) ? "image/png" : startsWith([255, 216, 255]) ? "image/jpeg" : startsWith(ascii("GIF8")) ? "image/gif" : startsWith(ascii("RIFF")) && startsWith(ascii("WEBP"), 8) ? "image/webp" : startsWith(ascii("BM")) ? "image/bmp" : startsWith(ascii("ftypavif"), 4) ? "image/avif" : null;
  }
  __name(getImageTypeFromBytes, "getImageTypeFromBytes");
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
      case "updateGameBookmarks":
        return updateGameBookmarks(request.operation).then((state2) => sendResponse({ state: state2 })).catch((error) => sendResponse({ error: error.message })), !0;
      case "fetchJson":
        return fetch(request.url).then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        }).then((data) => sendResponse({ data })).catch((err) => sendResponse({ error: err.message })), !0;
      case "updateOfflineRule":
        return chrome.declarativeNetRequest.updateEnabledRulesets(
          request.enabled ? { enableRulesetIds: ["ruleset_status"] } : { disableRulesetIds: ["ruleset_status"] }
        ), sendResponse({ success: !0 }), !1;
      case "updateEarlyAccessRule":
        return chrome.declarativeNetRequest.updateEnabledRulesets(
          request.enabled ? { enableRulesetIds: ["ruleset_3"] } : { disableRulesetIds: ["ruleset_3"] }
        ), sendResponse({ success: !0 }), !1;
      case "enableServerJoinHeaders":
        return chrome.declarativeNetRequest.updateEnabledRulesets({
          enableRulesetIds: ["ruleset_2"]
        }), !1;
      case "disableServerJoinHeaders":
        return chrome.declarativeNetRequest.updateEnabledRulesets({
          disableRulesetIds: ["ruleset_2"]
        }), !1;
      case "injectScript":
        return chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          world: "MAIN",
          func: /* @__PURE__ */ __name((code) => {
            try {
              let script = document.createElement("script");
              script.textContent = code, document.documentElement.appendChild(script), script.remove();
            } catch {
            }
          }, "func"),
          args: [request.codeToInject]
        }).then(() => sendResponse({ success: !0 })).catch(
          (err) => sendResponse({ success: !1, error: err.message })
        ), !0;
      case "toggleMemoryLeakFix":
        return state.isMemoryFixEnabled = request.enabled, sendResponse({ success: !0 }), !1;
      case "injectMainWorldScript":
        return sender.tab?.id && chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          files: [request.path],
          world: "MAIN"
        }), sendResponse({ success: !0 }), !1;
      case "checkPermission":
        return chrome.permissions.contains(
          { permissions: [].concat(request.permission) },
          (granted) => {
            sendResponse({ granted });
          }
        ), !0;
      case "requestPermission":
        return chrome.permissions.request(
          { permissions: [].concat(request.permission) },
          (granted) => {
            chrome.runtime.lastError && console.warn(
              "RoValra: Permission request failed:",
              chrome.runtime.lastError
            ), sendResponse({ granted: !!granted });
          }
        ), !0;
      case "revokePermission":
        return chrome.permissions.remove(
          { permissions: [].concat(request.permission) },
          (removed) => {
            chrome.runtime.lastError ? sendResponse({
              revoked: !1,
              error: chrome.runtime.lastError.message
            }) : sendResponse({ revoked: removed });
          }
        ), !0;
      case "updateUserId":
        return request.userId && request.userId !== state.currentUserId && (state.currentUserId = request.userId, state.latestPresence = null, state.pollingInterval && clearInterval(state.pollingInterval), pollUserPresence(), state.pollingInterval = setInterval(pollUserPresence, 5e3)), !1;
      case "getBannedUserRedirect": {
        let userId = state.bannedUserRedirects.get(sender.tab?.id);
        return state.bannedUserRedirects.delete(sender.tab?.id), sendResponse({ userId }), !1;
      }
      case "getPrivateGameRedirect": {
        let placeId = state.privateGameRedirects.get(sender.tab?.id);
        return state.privateGameRedirects.delete(sender.tab?.id), sendResponse({ placeId }), !1;
      }
      case "presencePollResult":
        return !1;
      case "getLatestPresence":
        return sendResponse({ presence: state.latestPresence }), !1;
      case "wearOutfit":
        return wearOutfit(request.outfitId).then(sendResponse), !0;
      case "getCustomFontFamily":
        return getCustomFontFamily(request.assetId).then(sendResponse).catch((err) => {
          sendResponse({ success: !1, error: err.message });
        }), !0;
      case "fetchImageAsDataUrl": {
        let imageUrl;
        try {
          imageUrl = new URL(request.url);
        } catch {
          return sendResponse({ error: "Invalid URL" }), !1;
        }
        return imageUrl.protocol !== "https:" && imageUrl.protocol !== "http:" ? (sendResponse({ error: "Unsupported protocol" }), !1) : (fetch(imageUrl.toString(), { credentials: "omit" }).then(async (response) => {
          if (!response.ok)
            throw new Error(`Request failed (${response.status})`);
          let bytes = new Uint8Array(await response.arrayBuffer());
          if (bytes.length > 20 * 1024 * 1024)
            throw new Error("Image too large");
          let contentType = (response.headers.get("content-type") || "").split(";")[0], imageType = contentType.startsWith("image/") ? contentType : getImageTypeFromBytes(bytes);
          if (!imageType) throw new Error("Not an image");
          let binary = "";
          for (let i = 0; i < bytes.length; i += 32768)
            binary += String.fromCharCode(
              ...bytes.subarray(i, i + 32768)
            );
          sendResponse({
            dataUrl: `data:${imageType};base64,${btoa(binary)}`
          });
        }).catch((err) => sendResponse({ error: err.message })), !0);
      }
      case "proxyFetch": {
        let parsedUrl;
        try {
          parsedUrl = new URL(request.url);
        } catch {
          return sendResponse({ error: "Invalid URL" }), !1;
        }
        if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:")
          return sendResponse({ error: "Unsupported protocol" }), !1;
        let { method, headers, body, credentials, cache, redirect } = request.options || {};
        return fetch(parsedUrl.toString(), {
          method,
          headers,
          body,
          credentials,
          cache,
          redirect
        }).then(async (response) => {
          let responseHeaders = {};
          response.headers.forEach(
            (val, key) => responseHeaders[key] = val
          ), sendResponse({
            status: response.status,
            statusText: response.statusText,
            headers: responseHeaders,
            body: await response.arrayBuffer().catch(() => null)
          });
        }).catch((err) => sendResponse({ error: err.message })), !0;
      }
      case "fetchRobloxApi":
        return callRobloxApiBackground(request.options).then(async (response) => {
          let headers = {};
          response.headers.forEach(
            (val, key) => headers[key] = val
          );
          let body = request.options?.responseType === "arrayBuffer" ? await response.arrayBuffer().catch(() => null) : await response.text().catch(() => null);
          sendResponse({
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            headers,
            body
          });
        }).catch((err) => {
          console.error("RoValra: Background API fetch failed", err), sendResponse({
            ok: !1,
            status: 500,
            statusText: "Extension Error",
            body: null
          });
        }), !0;
      case "updateContextMenu":
        return chrome.contextMenus && (request.feature === "copyid" ? chrome.storage.local.get(
          ["copyIdEnabled", "copyUniverseIdEnabled"],
          (settings) => {
            chrome.contextMenus.removeAll(() => {
              !chrome.runtime.lastError && request.ids?.length > 0 && request.ids.forEach((item) => {
                item.type === "Universe" ? settings.copyUniverseIdEnabled && chrome.contextMenus.create({
                  id: `rovalra-copy-universe-${item.id}`,
                  title: item.title,
                  contexts: ["link"],
                  documentUrlPatterns: [
                    "*://*.roblox.com/*"
                  ]
                }) : settings.copyIdEnabled && chrome.contextMenus.create({
                  id: `rovalra-copy-${item.id}`,
                  title: item.title,
                  contexts: ["link"],
                  documentUrlPatterns: [
                    "*://*.roblox.com/*"
                  ]
                });
              });
            });
          }
        ) : request.feature === "viewid" && request.ids.forEach((id) => {
          chrome.storage.local.get(
            ["viewIdEnabled"],
            (settings) => {
              settings.viewIdEnabled && chrome.contextMenus.create({
                id: `rovalra-viewid-${id}`,
                title: request.data.title,
                contexts: ["link"],
                documentUrlPatterns: [
                  "*://*.roblox.com/*"
                ]
              });
            }
          );
        })), !1;
    }
    return !1;
  });
  chrome.storage.local.get("MemoryleakFixEnabled", (result) => {
    result.MemoryleakFixEnabled && (state.isMemoryFixEnabled = !0, setupNavigationListener());
  });
  updateUserAgentRule();
  updateAvatarRotator();
  setupContextMenuListener();
  updateBannedUserListener();
  updatePrivateGameListener();
  setupNotifications(callRobloxApiBackground);
})();

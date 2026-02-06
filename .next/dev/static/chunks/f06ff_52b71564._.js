(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/allset/node_modules/@chakra-ui/react/dist/esm/components/center/center.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Center",
    ()=>Center
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@chakra-ui/react/dist/esm/styled-system/factory.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const Center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chakra"])("div", {
    base: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    variants: {
        inline: {
            true: {
                display: "inline-flex"
            }
        }
    }
});
Center.displayName = "Center";
;
}),
"[project]/Desktop/allset/node_modules/@chakra-ui/react/dist/esm/components/heading/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>Heading,
    "HeadingPropsProvider",
    ()=>HeadingPropsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$create$2d$recipe$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@chakra-ui/react/dist/esm/styled-system/create-recipe-context.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const { withContext, PropsProvider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$create$2d$recipe$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRecipeContext"])({
    key: "heading"
});
const Heading = withContext("h2");
Heading.displayName = "Heading";
const HeadingPropsProvider = PropsProvider;
;
}),
"[project]/Desktop/allset/node_modules/typewriter-effect/dist/react.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t(__turbopack_context__.r("[project]/Desktop/allset/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)")) : "TURBOPACK unreachable";
}("undefined" != typeof self ? self : /*TURBOPACK member replacement*/ __turbopack_context__.e, (e)=>(()=>{
        var t = {
            2: (e, t, r)=>{
                var n = r(2199), o = r(4664), a = r(5950);
                e.exports = function(e) {
                    return n(e, a, o);
                };
            },
            79: (e, t, r)=>{
                var n = r(3702), o = r(80), a = r(4739), i = r(8655), s = r(1175);
                function u(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.clear(); ++t < r;){
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e.exports = u;
            },
            80: (e, t, r)=>{
                var n = r(6025), o = Array.prototype.splice;
                e.exports = function(e) {
                    var t = this.__data__, r = n(t, e);
                    return !(r < 0 || (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, 0));
                };
            },
            270: (e, t, r)=>{
                var n = r(7068), o = r(346);
                e.exports = function e(t, r, a, i, s) {
                    return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, a, i, e, s));
                };
            },
            289: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e) {
                    return n(this, e).get(e);
                };
            },
            294: (e)=>{
                e.exports = function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
                };
            },
            317: (e)=>{
                e.exports = function(e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach(function(e, n) {
                        r[++t] = [
                            n,
                            e
                        ];
                    }), r;
                };
            },
            346: (e)=>{
                e.exports = function(e) {
                    return null != e && "object" == typeof e;
                };
            },
            361: (e)=>{
                var t = /^(?:0|[1-9]\d*)$/;
                e.exports = function(e, r) {
                    var n = typeof e;
                    return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r;
                };
            },
            392: (e)=>{
                e.exports = function(e, t) {
                    return null == e ? void 0 : e[t];
                };
            },
            659: (e, t, r)=>{
                var n = r(1873), o = Object.prototype, a = o.hasOwnProperty, i = o.toString, s = n ? n.toStringTag : void 0;
                e.exports = function(e) {
                    var t = a.call(e, s), r = e[s];
                    try {
                        e[s] = void 0;
                        var n = !0;
                    } catch (e) {}
                    var o = i.call(e);
                    return n && (t ? e[s] = r : delete e[s]), o;
                };
            },
            689: (e, t, r)=>{
                var n = r(2), o = Object.prototype.hasOwnProperty;
                e.exports = function(e, t, r, a, i, s) {
                    var u = 1 & r, c = n(e), p = c.length;
                    if (p != n(t).length && !u) return !1;
                    for(var l = p; l--;){
                        var f = c[l];
                        if (!(u ? f in t : o.call(t, f))) return !1;
                    }
                    var v = s.get(e), d = s.get(t);
                    if (v && d) return v == t && d == e;
                    var h = !0;
                    s.set(e, t), s.set(t, e);
                    for(var y = u; ++l < p;){
                        var b = e[f = c[l]], m = t[f];
                        if (a) var _ = u ? a(m, b, f, t, e, s) : a(b, m, f, e, t, s);
                        if (!(void 0 === _ ? b === m || i(b, m, r, a, s) : _)) {
                            h = !1;
                            break;
                        }
                        y || (y = "constructor" == f);
                    }
                    if (h && !y) {
                        var g = e.constructor, w = t.constructor;
                        g == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (h = !1);
                    }
                    return s.delete(e), s.delete(t), h;
                };
            },
            695: (e, t, r)=>{
                var n = r(8096), o = r(2428), a = r(6449), i = r(3656), s = r(361), u = r(7167), c = Object.prototype.hasOwnProperty;
                e.exports = function(e, t) {
                    var r = a(e), p = !r && o(e), l = !r && !p && i(e), f = !r && !p && !l && u(e), v = r || p || l || f, d = v ? n(e.length, String) : [], h = d.length;
                    for(var y in e)!t && !c.call(e, y) || v && ("length" == y || l && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, h)) || d.push(y);
                    return d;
                };
            },
            938: (e)=>{
                e.exports = function(e) {
                    var t = this.__data__, r = t.delete(e);
                    return this.size = t.size, r;
                };
            },
            945: (e, t, r)=>{
                var n = r(79), o = r(8223), a = r(3661);
                e.exports = function(e, t) {
                    var r = this.__data__;
                    if (r instanceof n) {
                        var i = r.__data__;
                        if (!o || i.length < 199) return i.push([
                            e,
                            t
                        ]), this.size = ++r.size, this;
                        r = this.__data__ = new a(i);
                    }
                    return r.set(e, t), this.size = r.size, this;
                };
            },
            1042: (e, t, r)=>{
                var n = r(6110)(Object, "create");
                e.exports = n;
            },
            1175: (e, t, r)=>{
                var n = r(6025);
                e.exports = function(e, t) {
                    var r = this.__data__, o = n(r, e);
                    return o < 0 ? (++this.size, r.push([
                        e,
                        t
                    ])) : r[o][1] = t, this;
                };
            },
            1380: (e)=>{
                e.exports = function(e) {
                    return this.__data__.set(e, "__lodash_hash_undefined__"), this;
                };
            },
            1420: (e, t, r)=>{
                var n = r(79);
                e.exports = function() {
                    this.__data__ = new n, this.size = 0;
                };
            },
            1459: (e)=>{
                e.exports = function(e) {
                    return this.__data__.has(e);
                };
            },
            1549: (e, t, r)=>{
                var n = r(2032), o = r(3862), a = r(6721), i = r(2749), s = r(5749);
                function u(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.clear(); ++t < r;){
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e.exports = u;
            },
            1873: (e, t, r)=>{
                var n = r(9325).Symbol;
                e.exports = n;
            },
            1882: (e, t, r)=>{
                var n = r(2552), o = r(3805);
                e.exports = function(e) {
                    if (!o(e)) return !1;
                    var t = n(e);
                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
                };
            },
            1986: (e, t, r)=>{
                var n = r(1873), o = r(7828), a = r(5288), i = r(5911), s = r(317), u = r(4247), c = n ? n.prototype : void 0, p = c ? c.valueOf : void 0;
                e.exports = function(e, t, r, n, c, l, f) {
                    switch(r){
                        case "[object DataView]":
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case "[object ArrayBuffer]":
                            return !(e.byteLength != t.byteLength || !l(new o(e), new o(t)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return a(+e, +t);
                        case "[object Error]":
                            return e.name == t.name && e.message == t.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return e == t + "";
                        case "[object Map]":
                            var v = s;
                        case "[object Set]":
                            var d = 1 & n;
                            if (v || (v = u), e.size != t.size && !d) return !1;
                            var h = f.get(e);
                            if (h) return h == t;
                            n |= 2, f.set(e, t);
                            var y = i(v(e), v(t), n, c, l, f);
                            return f.delete(e), y;
                        case "[object Symbol]":
                            if (p) return p.call(e) == p.call(t);
                    }
                    return !1;
                };
            },
            2032: (e, t, r)=>{
                var n = r(1042);
                e.exports = function() {
                    this.__data__ = n ? n(null) : {}, this.size = 0;
                };
            },
            2199: (e, t, r)=>{
                var n = r(4528), o = r(6449);
                e.exports = function(e, t, r) {
                    var a = t(e);
                    return o(e) ? a : n(a, r(e));
                };
            },
            2404: (e, t, r)=>{
                var n = r(270);
                e.exports = function(e, t) {
                    return n(e, t);
                };
            },
            2428: (e, t, r)=>{
                var n = r(7534), o = r(346), a = Object.prototype, i = a.hasOwnProperty, s = a.propertyIsEnumerable, u = n(function() {
                    return arguments;
                }()) ? n : function(e) {
                    return o(e) && i.call(e, "callee") && !s.call(e, "callee");
                };
                e.exports = u;
            },
            2552: (e, t, r)=>{
                var n = r(1873), o = r(659), a = r(9350), i = n ? n.toStringTag : void 0;
                e.exports = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e);
                };
            },
            2651: (e, t, r)=>{
                var n = r(4218);
                e.exports = function(e, t) {
                    var r = e.__data__;
                    return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
                };
            },
            2749: (e, t, r)=>{
                var n = r(1042), o = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    var t = this.__data__;
                    return n ? void 0 !== t[e] : o.call(t, e);
                };
            },
            2804: (e, t, r)=>{
                var n = r(6110)(r(9325), "Promise");
                e.exports = n;
            },
            2949: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e, t) {
                    var r = n(this, e), o = r.size;
                    return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
                };
            },
            3040: (e, t, r)=>{
                var n = r(1549), o = r(79), a = r(8223);
                e.exports = function() {
                    this.size = 0, this.__data__ = {
                        hash: new n,
                        map: new (a || o),
                        string: new n
                    };
                };
            },
            3146: (e, t, r)=>{
                for(var n = r(3491), o = "undefined" == typeof window ? r.g : window, a = [
                    "moz",
                    "webkit"
                ], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], c = 0; !s && c < a.length; c++)s = o[a[c] + "Request" + i], u = o[a[c] + "Cancel" + i] || o[a[c] + "CancelRequest" + i];
                if (!s || !u) {
                    var p = 0, l = 0, f = [], v = 1e3 / 60;
                    s = function(e) {
                        if (0 === f.length) {
                            var t = n(), r = Math.max(0, v - (t - p));
                            p = r + t, setTimeout(function() {
                                var e = f.slice(0);
                                f.length = 0;
                                for(var t = 0; t < e.length; t++)if (!e[t].cancelled) try {
                                    e[t].callback(p);
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e;
                                    }, 0);
                                }
                            }, Math.round(r));
                        }
                        return f.push({
                            handle: ++l,
                            callback: e,
                            cancelled: !1
                        }), l;
                    }, u = function(e) {
                        for(var t = 0; t < f.length; t++)f[t].handle === e && (f[t].cancelled = !0);
                    };
                }
                e.exports = function(e) {
                    return s.call(o, e);
                }, e.exports.cancel = function() {
                    u.apply(o, arguments);
                }, e.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u;
                };
            },
            3345: (e)=>{
                e.exports = function() {
                    return [];
                };
            },
            3491: function(e) {
                (function() {
                    var t, r, n, o, a, i;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now();
                    } : "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && null !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hrtime ? (e.exports = function() {
                        return (t() - a) / 1e6;
                    }, r = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hrtime, o = (t = function() {
                        var e;
                        return 1e9 * (e = r())[0] + e[1];
                    })(), i = 1e9 * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].uptime(), a = o - i) : Date.now ? (e.exports = function() {
                        return Date.now() - n;
                    }, n = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - n;
                    }, n = (new Date).getTime());
                }).call(this);
            },
            3605: (e)=>{
                e.exports = function(e) {
                    return this.__data__.get(e);
                };
            },
            3650: (e, t, r)=>{
                var n = r(4335)(Object.keys, Object);
                e.exports = n;
            },
            3656: (e, t, r)=>{
                e = r.nmd(e);
                var n = r(9325), o = r(9935), a = t && !t.nodeType && t, i = a && e && !e.nodeType && e, s = i && i.exports === a ? n.Buffer : void 0, u = (s ? s.isBuffer : void 0) || o;
                e.exports = u;
            },
            3661: (e, t, r)=>{
                var n = r(3040), o = r(7670), a = r(289), i = r(4509), s = r(2949);
                function u(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.clear(); ++t < r;){
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e.exports = u;
            },
            3702: (e)=>{
                e.exports = function() {
                    this.__data__ = [], this.size = 0;
                };
            },
            3805: (e)=>{
                e.exports = function(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t);
                };
            },
            3862: (e)=>{
                e.exports = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t;
                };
            },
            4218: (e)=>{
                e.exports = function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
                };
            },
            4247: (e)=>{
                e.exports = function(e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach(function(e) {
                        r[++t] = e;
                    }), r;
                };
            },
            4248: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = null == e ? 0 : e.length; ++r < n;)if (t(e[r], r, e)) return !0;
                    return !1;
                };
            },
            4335: (e)=>{
                e.exports = function(e, t) {
                    return function(r) {
                        return e(t(r));
                    };
                };
            },
            4509: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e) {
                    return n(this, e).has(e);
                };
            },
            4528: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = t.length, o = e.length; ++r < n;)e[o + r] = t[r];
                    return e;
                };
            },
            4664: (e, t, r)=>{
                var n = r(9770), o = r(3345), a = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e) {
                    return null == e ? [] : (e = Object(e), n(i(e), function(t) {
                        return a.call(e, t);
                    }));
                } : o;
                e.exports = s;
            },
            4739: (e, t, r)=>{
                var n = r(6025);
                e.exports = function(e) {
                    var t = this.__data__, r = n(t, e);
                    return r < 0 ? void 0 : t[r][1];
                };
            },
            4840: (e, t, r)=>{
                var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
                e.exports = n;
            },
            4894: (e, t, r)=>{
                var n = r(1882), o = r(294);
                e.exports = function(e) {
                    return null != e && o(e.length) && !n(e);
                };
            },
            4901: (e, t, r)=>{
                var n = r(2552), o = r(294), a = r(346), i = {};
                i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
                    return a(e) && o(e.length) && !!i[n(e)];
                };
            },
            5083: (e, t, r)=>{
                var n = r(1882), o = r(7296), a = r(3805), i = r(7473), s = /^\[object .+?Constructor\]$/, u = Function.prototype, c = Object.prototype, p = u.toString, l = c.hasOwnProperty, f = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                e.exports = function(e) {
                    return !(!a(e) || o(e)) && (n(e) ? f : s).test(i(e));
                };
            },
            5288: (e)=>{
                e.exports = function(e, t) {
                    return e === t || e != e && t != t;
                };
            },
            5481: (e, t, r)=>{
                var n = r(9325)["__core-js_shared__"];
                e.exports = n;
            },
            5527: (e)=>{
                var t = Object.prototype;
                e.exports = function(e) {
                    var r = e && e.constructor;
                    return e === ("function" == typeof r && r.prototype || t);
                };
            },
            5580: (e, t, r)=>{
                var n = r(6110)(r(9325), "DataView");
                e.exports = n;
            },
            5749: (e, t, r)=>{
                var n = r(1042);
                e.exports = function(e, t) {
                    var r = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this;
                };
            },
            5861: (e, t, r)=>{
                var n = r(5580), o = r(8223), a = r(2804), i = r(6545), s = r(8303), u = r(2552), c = r(7473), p = "[object Map]", l = "[object Promise]", f = "[object Set]", v = "[object WeakMap]", d = "[object DataView]", h = c(n), y = c(o), b = c(a), m = c(i), _ = c(s), g = u;
                (n && g(new n(new ArrayBuffer(1))) != d || o && g(new o) != p || a && g(a.resolve()) != l || i && g(new i) != f || s && g(new s) != v) && (g = function(e) {
                    var t = u(e), r = "[object Object]" == t ? e.constructor : void 0, n = r ? c(r) : "";
                    if (n) switch(n){
                        case h:
                            return d;
                        case y:
                            return p;
                        case b:
                            return l;
                        case m:
                            return f;
                        case _:
                            return v;
                    }
                    return t;
                }), e.exports = g;
            },
            5911: (e, t, r)=>{
                var n = r(8859), o = r(4248), a = r(9219);
                e.exports = function(e, t, r, i, s, u) {
                    var c = 1 & r, p = e.length, l = t.length;
                    if (p != l && !(c && l > p)) return !1;
                    var f = u.get(e), v = u.get(t);
                    if (f && v) return f == t && v == e;
                    var d = -1, h = !0, y = 2 & r ? new n : void 0;
                    for(u.set(e, t), u.set(t, e); ++d < p;){
                        var b = e[d], m = t[d];
                        if (i) var _ = c ? i(m, b, d, t, e, u) : i(b, m, d, e, t, u);
                        if (void 0 !== _) {
                            if (_) continue;
                            h = !1;
                            break;
                        }
                        if (y) {
                            if (!o(t, function(e, t) {
                                if (!a(y, t) && (b === e || s(b, e, r, i, u))) return y.push(t);
                            })) {
                                h = !1;
                                break;
                            }
                        } else if (b !== m && !s(b, m, r, i, u)) {
                            h = !1;
                            break;
                        }
                    }
                    return u.delete(e), u.delete(t), h;
                };
            },
            5950: (e, t, r)=>{
                var n = r(695), o = r(8984), a = r(4894);
                e.exports = function(e) {
                    return a(e) ? n(e) : o(e);
                };
            },
            6009: (e, t, r)=>{
                e = r.nmd(e);
                var n = r(4840), o = t && !t.nodeType && t, a = o && e && !e.nodeType && e, i = a && a.exports === o && n.process, s = function() {
                    try {
                        return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
                    } catch (e) {}
                }();
                e.exports = s;
            },
            6025: (e, t, r)=>{
                var n = r(5288);
                e.exports = function(e, t) {
                    for(var r = e.length; r--;)if (n(e[r][0], t)) return r;
                    return -1;
                };
            },
            6110: (e, t, r)=>{
                var n = r(5083), o = r(392);
                e.exports = function(e, t) {
                    var r = o(e, t);
                    return n(r) ? r : void 0;
                };
            },
            6449: (e)=>{
                var t = Array.isArray;
                e.exports = t;
            },
            6545: (e, t, r)=>{
                var n = r(6110)(r(9325), "Set");
                e.exports = n;
            },
            6721: (e, t, r)=>{
                var n = r(1042), o = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    var t = this.__data__;
                    if (n) {
                        var r = t[e];
                        return "__lodash_hash_undefined__" === r ? void 0 : r;
                    }
                    return o.call(t, e) ? t[e] : void 0;
                };
            },
            7068: (e, t, r)=>{
                var n = r(7217), o = r(5911), a = r(1986), i = r(689), s = r(5861), u = r(6449), c = r(3656), p = r(7167), l = "[object Arguments]", f = "[object Array]", v = "[object Object]", d = Object.prototype.hasOwnProperty;
                e.exports = function(e, t, r, h, y, b) {
                    var m = u(e), _ = u(t), g = m ? f : s(e), w = _ ? f : s(t), x = (g = g == l ? v : g) == v, j = (w = w == l ? v : w) == v, E = g == w;
                    if (E && c(e)) {
                        if (!c(t)) return !1;
                        m = !0, x = !1;
                    }
                    if (E && !x) return b || (b = new n), m || p(e) ? o(e, t, r, h, y, b) : a(e, t, g, r, h, y, b);
                    if (!(1 & r)) {
                        var O = x && d.call(e, "__wrapped__"), T = j && d.call(t, "__wrapped__");
                        if (O || T) {
                            var A = O ? e.value() : e, S = T ? t.value() : t;
                            return b || (b = new n), y(A, S, r, h, b);
                        }
                    }
                    return !!E && (b || (b = new n), i(e, t, r, h, y, b));
                };
            },
            7167: (e, t, r)=>{
                var n = r(4901), o = r(7301), a = r(6009), i = a && a.isTypedArray, s = i ? o(i) : n;
                e.exports = s;
            },
            7217: (e, t, r)=>{
                var n = r(79), o = r(1420), a = r(938), i = r(3605), s = r(9817), u = r(945);
                function c(e) {
                    var t = this.__data__ = new n(e);
                    this.size = t.size;
                }
                c.prototype.clear = o, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = s, c.prototype.set = u, e.exports = c;
            },
            7296: (e, t, r)=>{
                var n, o = r(5481), a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
                e.exports = function(e) {
                    return !!a && a in e;
                };
            },
            7301: (e)=>{
                e.exports = function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            },
            7473: (e)=>{
                var t = Function.prototype.toString;
                e.exports = function(e) {
                    if (null != e) {
                        try {
                            return t.call(e);
                        } catch (e) {}
                        try {
                            return e + "";
                        } catch (e) {}
                    }
                    return "";
                };
            },
            7534: (e, t, r)=>{
                var n = r(2552), o = r(346);
                e.exports = function(e) {
                    return o(e) && "[object Arguments]" == n(e);
                };
            },
            7670: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e) {
                    var t = n(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t;
                };
            },
            7828: (e, t, r)=>{
                var n = r(9325).Uint8Array;
                e.exports = n;
            },
            8096: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = Array(e); ++r < e;)n[r] = t(r);
                    return n;
                };
            },
            8223: (e, t, r)=>{
                var n = r(6110)(r(9325), "Map");
                e.exports = n;
            },
            8303: (e, t, r)=>{
                var n = r(6110)(r(9325), "WeakMap");
                e.exports = n;
            },
            8655: (e, t, r)=>{
                var n = r(6025);
                e.exports = function(e) {
                    return n(this.__data__, e) > -1;
                };
            },
            8859: (e, t, r)=>{
                var n = r(3661), o = r(1380), a = r(1459);
                function i(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.__data__ = new n; ++t < r;)this.add(e[t]);
                }
                i.prototype.add = i.prototype.push = o, i.prototype.has = a, e.exports = i;
            },
            8984: (e, t, r)=>{
                var n = r(5527), o = r(3650), a = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    if (!n(e)) return o(e);
                    var t = [];
                    for(var r in Object(e))a.call(e, r) && "constructor" != r && t.push(r);
                    return t;
                };
            },
            9155: (t)=>{
                "use strict";
                t.exports = e;
            },
            9219: (e)=>{
                e.exports = function(e, t) {
                    return e.has(t);
                };
            },
            9325: (e, t, r)=>{
                var n = r(4840), o = "object" == typeof self && self && self.Object === Object && self, a = n || o || Function("return this")();
                e.exports = a;
            },
            9350: (e)=>{
                var t = Object.prototype.toString;
                e.exports = function(e) {
                    return t.call(e);
                };
            },
            9770: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;){
                        var i = e[r];
                        t(i, r, e) && (a[o++] = i);
                    }
                    return a;
                };
            },
            9817: (e)=>{
                e.exports = function(e) {
                    return this.__data__.has(e);
                };
            },
            9905: (e, t, r)=>{
                "use strict";
                r.d(t, {
                    default: ()=>A
                });
                var n = r(3146), o = r.n(n);
                const a = function(e) {
                    return new RegExp(/<[a-z][\s\S]*>/i).test(e);
                }, i = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e;
                };
                var s = "TYPE_CHARACTER", u = "REMOVE_CHARACTER", c = "REMOVE_ALL", p = "REMOVE_LAST_VISIBLE_NODE", l = "PAUSE_FOR", f = "CALL_FUNCTION", v = "ADD_HTML_TAG_ELEMENT", d = "CHANGE_DELETE_SPEED", h = "CHANGE_DELAY", y = "CHANGE_CURSOR", b = "PASTE_STRING", m = "HTML_TAG";
                function _(e) {
                    return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, _(e);
                }
                function g(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), r.push.apply(r, n);
                    }
                    return r;
                }
                function w(e) {
                    for(var t = 1; t < arguments.length; t++){
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(r), !0).forEach(function(t) {
                            O(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                    return e;
                }
                function x(e) {
                    return function(e) {
                        if (Array.isArray(e)) return j(e);
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return j(e, t);
                            var r = ({}).toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0;
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function j(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var r = 0, n = Array(t); r < t; r++)n[r] = e[r];
                    return n;
                }
                function E(e, t) {
                    for(var r = 0; r < t.length; r++){
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, T(n.key), n);
                    }
                }
                function O(e, t, r) {
                    return (t = T(t)) in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e;
                }
                function T(e) {
                    var t = function(e) {
                        if ("object" != _(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != _(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(e);
                    }(e);
                    return "symbol" == _(t) ? t : t + "";
                }
                const A = function() {
                    function e(t, r) {
                        var _ = this;
                        if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), O(this, "state", {
                            cursorAnimation: null,
                            lastFrameTime: null,
                            pauseUntil: null,
                            eventQueue: [],
                            eventLoop: null,
                            eventLoopPaused: !1,
                            reverseCalledEvents: [],
                            calledEvents: [],
                            visibleNodes: [],
                            initialOptions: null,
                            elements: {
                                container: null,
                                wrapper: document.createElement("span"),
                                cursor: document.createElement("span")
                            }
                        }), O(this, "options", {
                            strings: null,
                            cursor: "|",
                            delay: "natural",
                            pauseFor: 1500,
                            deleteSpeed: "natural",
                            loop: !1,
                            autoStart: !1,
                            devMode: !1,
                            skipAddStyles: !1,
                            wrapperClassName: "Typewriter__wrapper",
                            cursorClassName: "Typewriter__cursor",
                            stringSplitter: null,
                            onCreateTextNode: null,
                            onRemoveNode: null
                        }), O(this, "setupWrapperElement", function() {
                            _.state.elements.container && (_.state.elements.wrapper.className = _.options.wrapperClassName, _.state.elements.cursor.className = _.options.cursorClassName, _.state.elements.cursor.innerHTML = _.options.cursor, _.state.elements.container.innerHTML = "", _.state.elements.container.appendChild(_.state.elements.wrapper), _.state.elements.container.appendChild(_.state.elements.cursor));
                        }), O(this, "start", function() {
                            return _.state.eventLoopPaused = !1, _.runEventLoop(), _;
                        }), O(this, "pause", function() {
                            return _.state.eventLoopPaused = !0, _;
                        }), O(this, "stop", function() {
                            return _.state.eventLoop && ((0, n.cancel)(_.state.eventLoop), _.state.eventLoop = null), _;
                        }), O(this, "pauseFor", function(e) {
                            return _.addEventToQueue(l, {
                                ms: e
                            }), _;
                        }), O(this, "typeOutAllStrings", function() {
                            return "string" == typeof _.options.strings ? (_.typeString(_.options.strings).pauseFor(_.options.pauseFor), _) : (_.options.strings.forEach(function(e) {
                                _.typeString(e).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed);
                            }), _);
                        }), O(this, "typeString", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            if (a(e)) return _.typeOutHTMLString(e, t);
                            if (e) {
                                var r = (_.options || {}).stringSplitter, n = "function" == typeof r ? r(e) : e.split("");
                                _.typeCharacters(n, t);
                            }
                            return _;
                        }), O(this, "pasteString", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return a(e) ? _.typeOutHTMLString(e, t, !0) : (e && _.addEventToQueue(b, {
                                character: e,
                                node: t
                            }), _);
                        }), O(this, "typeOutHTMLString", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 ? arguments[2] : void 0, n = function(e) {
                                var t = document.createElement("div");
                                return t.innerHTML = e, t.childNodes;
                            }(e);
                            if (n.length > 0) for(var o = 0; o < n.length; o++){
                                var a = n[o], i = a.innerHTML;
                                a && 3 !== a.nodeType ? (a.innerHTML = "", _.addEventToQueue(v, {
                                    node: a,
                                    parentNode: t
                                }), r ? _.pasteString(i, a) : _.typeString(i, a)) : a.textContent && (r ? _.pasteString(a.textContent, t) : _.typeString(a.textContent, t));
                            }
                            return _;
                        }), O(this, "deleteAll", function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                            return _.addEventToQueue(c, {
                                speed: e
                            }), _;
                        }), O(this, "changeDeleteSpeed", function(e) {
                            if (!e) throw new Error("Must provide new delete speed");
                            return _.addEventToQueue(d, {
                                speed: e
                            }), _;
                        }), O(this, "changeDelay", function(e) {
                            if (!e) throw new Error("Must provide new delay");
                            return _.addEventToQueue(h, {
                                delay: e
                            }), _;
                        }), O(this, "changeCursor", function(e) {
                            if (!e) throw new Error("Must provide new cursor");
                            return _.addEventToQueue(y, {
                                cursor: e
                            }), _;
                        }), O(this, "deleteChars", function(e) {
                            if (!e) throw new Error("Must provide amount of characters to delete");
                            for(var t = 0; t < e; t++)_.addEventToQueue(u);
                            return _;
                        }), O(this, "callFunction", function(e, t) {
                            if (!e || "function" != typeof e) throw new Error("Callback must be a function");
                            return _.addEventToQueue(f, {
                                cb: e,
                                thisArg: t
                            }), _;
                        }), O(this, "typeCharacters", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                            return e.forEach(function(e) {
                                _.addEventToQueue(s, {
                                    character: e,
                                    node: t
                                });
                            }), _;
                        }), O(this, "removeCharacters", function(e) {
                            if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                            return e.forEach(function() {
                                _.addEventToQueue(u);
                            }), _;
                        }), O(this, "addEventToQueue", function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return _.addEventToStateProperty(e, t, r, "eventQueue");
                        }), O(this, "addReverseCalledEvent", function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return _.options.loop ? _.addEventToStateProperty(e, t, r, "reverseCalledEvents") : _;
                        }), O(this, "addEventToStateProperty", function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = arguments.length > 3 ? arguments[3] : void 0, o = {
                                eventName: e,
                                eventArgs: t || {}
                            };
                            return _.state[n] = r ? [
                                o
                            ].concat(x(_.state[n])) : [].concat(x(_.state[n]), [
                                o
                            ]), _;
                        }), O(this, "runEventLoop", function() {
                            _.state.lastFrameTime || (_.state.lastFrameTime = Date.now());
                            var e = Date.now(), t = e - _.state.lastFrameTime;
                            if (!_.state.eventQueue.length) {
                                if (!_.options.loop) return;
                                _.state.eventQueue = x(_.state.calledEvents), _.state.calledEvents = [], _.options = w({}, _.state.initialOptions);
                            }
                            if (_.state.eventLoop = o()(_.runEventLoop), !_.state.eventLoopPaused) {
                                if (_.state.pauseUntil) {
                                    if (e < _.state.pauseUntil) return;
                                    _.state.pauseUntil = null;
                                }
                                var r, n = x(_.state.eventQueue), a = n.shift();
                                if (!(t <= (r = a.eventName === p || a.eventName === u ? "natural" === _.options.deleteSpeed ? i(40, 80) : _.options.deleteSpeed : "natural" === _.options.delay ? i(120, 160) : _.options.delay))) {
                                    var g = a.eventName, j = a.eventArgs;
                                    switch(_.logInDevMode({
                                        currentEvent: a,
                                        state: _.state,
                                        delay: r
                                    }), g){
                                        case b:
                                        case s:
                                            var E = j.character, O = j.node, T = document.createTextNode(E), A = T;
                                            _.options.onCreateTextNode && "function" == typeof _.options.onCreateTextNode && (A = _.options.onCreateTextNode(E, T)), A && (O ? O.appendChild(A) : _.state.elements.wrapper.appendChild(A)), _.state.visibleNodes = [].concat(x(_.state.visibleNodes), [
                                                {
                                                    type: "TEXT_NODE",
                                                    character: E,
                                                    node: A
                                                }
                                            ]);
                                            break;
                                        case u:
                                            n.unshift({
                                                eventName: p,
                                                eventArgs: {
                                                    removingCharacterNode: !0
                                                }
                                            });
                                            break;
                                        case l:
                                            var S = a.eventArgs.ms;
                                            _.state.pauseUntil = Date.now() + parseInt(S);
                                            break;
                                        case f:
                                            var N = a.eventArgs, P = N.cb, C = N.thisArg;
                                            P.call(C, {
                                                elements: _.state.elements
                                            });
                                            break;
                                        case v:
                                            var L = a.eventArgs, k = L.node, D = L.parentNode;
                                            D ? D.appendChild(k) : _.state.elements.wrapper.appendChild(k), _.state.visibleNodes = [].concat(x(_.state.visibleNodes), [
                                                {
                                                    type: m,
                                                    node: k,
                                                    parentNode: D || _.state.elements.wrapper
                                                }
                                            ]);
                                            break;
                                        case c:
                                            var M = _.state.visibleNodes, R = j.speed, F = [];
                                            R && F.push({
                                                eventName: d,
                                                eventArgs: {
                                                    speed: R,
                                                    temp: !0
                                                }
                                            });
                                            for(var z = 0, Q = M.length; z < Q; z++)F.push({
                                                eventName: p,
                                                eventArgs: {
                                                    removingCharacterNode: !1
                                                }
                                            });
                                            R && F.push({
                                                eventName: d,
                                                eventArgs: {
                                                    speed: _.options.deleteSpeed,
                                                    temp: !0
                                                }
                                            }), n.unshift.apply(n, F);
                                            break;
                                        case p:
                                            var I = a.eventArgs.removingCharacterNode;
                                            if (_.state.visibleNodes.length) {
                                                var U = _.state.visibleNodes.pop(), H = U.type, q = U.node, B = U.character;
                                                _.options.onRemoveNode && "function" == typeof _.options.onRemoveNode && _.options.onRemoveNode({
                                                    node: q,
                                                    character: B
                                                }), q && q.parentNode.removeChild(q), H === m && I && n.unshift({
                                                    eventName: p,
                                                    eventArgs: {}
                                                });
                                            }
                                            break;
                                        case d:
                                            _.options.deleteSpeed = a.eventArgs.speed;
                                            break;
                                        case h:
                                            _.options.delay = a.eventArgs.delay;
                                            break;
                                        case y:
                                            _.options.cursor = a.eventArgs.cursor, _.state.elements.cursor.innerHTML = a.eventArgs.cursor;
                                    }
                                    _.options.loop && (a.eventName === p || a.eventArgs && a.eventArgs.temp || (_.state.calledEvents = [].concat(x(_.state.calledEvents), [
                                        a
                                    ]))), _.state.eventQueue = n, _.state.lastFrameTime = e;
                                }
                            }
                        }), t) if ("string" == typeof t) {
                            var g = document.querySelector(t);
                            if (!g) throw new Error("Could not find container element");
                            this.state.elements.container = g;
                        } else this.state.elements.container = t;
                        r && (this.options = w(w({}, this.options), r)), this.state.initialOptions = w({}, this.options), this.init();
                    }
                    var t, r;
                    return t = e, (r = [
                        {
                            key: "init",
                            value: function() {
                                var e, t;
                                this.setupWrapperElement(), this.addEventToQueue(y, {
                                    cursor: this.options.cursor
                                }, !0), this.addEventToQueue(c, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                            }
                        },
                        {
                            key: "logInDevMode",
                            value: function(e) {
                                this.options.devMode && console.log(e);
                            }
                        }
                    ]) && E(t.prototype, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }();
            },
            9935: (e)=>{
                e.exports = function() {
                    return !1;
                };
            }
        }, r = {};
        function n(e) {
            var o = r[e];
            if (void 0 !== o) return o.exports;
            var a = r[e] = {
                id: e,
                loaded: !1,
                exports: {}
            };
            return t[e].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), n.nmd = (e)=>(e.paths = [], e.children || (e.children = []), e);
        var o = {};
        return (()=>{
            "use strict";
            n.d(o, {
                default: ()=>h
            });
            var e = n(9155), t = n.n(e), r = n(9905), a = n(2404), i = n.n(a);
            function s(e) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s(e);
            }
            function u(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v(n.key), n);
                }
            }
            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e;
                }, c(e, t);
            }
            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function l() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                } catch (e) {}
                return (l = function() {
                    return !!e;
                })();
            }
            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                }, f(e);
            }
            function v(e) {
                var t = function(e) {
                    if ("object" != s(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != s(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == s(t) ? t : t + "";
            }
            var d = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && c(e, t);
                }(d, e);
                var n, o, a = function(e) {
                    var t = l();
                    return function() {
                        var r, n = f(e);
                        if (t) {
                            var o = f(this).constructor;
                            r = Reflect.construct(n, arguments, o);
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" == s(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return p(e);
                        }(this, r);
                    };
                }(d);
                function d() {
                    var e, t, r, n;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, d);
                    for(var o = arguments.length, i = new Array(o), s = 0; s < o; s++)i[s] = arguments[s];
                    return t = p(e = a.call.apply(a, [
                        this
                    ].concat(i))), n = {
                        instance: null
                    }, (r = v(r = "state")) in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n, e;
                }
                return n = d, (o = [
                    {
                        key: "componentDidMount",
                        value: function() {
                            var e = this, t = new r.default(this.typewriter, this.props.options);
                            this.setState({
                                instance: t
                            }, function() {
                                var r = e.props.onInit;
                                r && r(t);
                            });
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function(e) {
                            i()(this.props.options, e.options) || this.setState({
                                instance: new r.default(this.typewriter, this.props.options)
                            });
                        }
                    },
                    {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.instance && this.state.instance.stop();
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var e = this, r = this.props.component;
                            return t().createElement(r, {
                                ref: function(t) {
                                    return e.typewriter = t;
                                },
                                className: "Typewriter",
                                "data-testid": "typewriter-wrapper"
                            });
                        }
                    }
                ]) && u(n.prototype, o), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), d;
            }(e.Component);
            d.defaultProps = {
                component: "div"
            };
            const h = d;
        })(), o.default;
    })()); //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/allset/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text,
    "TextPropsProvider",
    ()=>TextPropsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$create$2d$recipe$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/@chakra-ui/react/dist/esm/styled-system/create-recipe-context.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const { withContext, PropsProvider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$create$2d$recipe$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRecipeContext"])({
    key: "text"
});
const Text = withContext("p");
Text.displayName = "Text";
const TextPropsProvider = PropsProvider;
;
}),
"[project]/Desktop/allset/node_modules/nuqs/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLoader",
    ()=>createLoader,
    "createMultiParser",
    ()=>createMultiParser,
    "createParser",
    ()=>createParser,
    "createSerializer",
    ()=>createSerializer,
    "createStandardSchemaV1",
    ()=>createStandardSchemaV1,
    "parseAsArrayOf",
    ()=>parseAsArrayOf,
    "parseAsBoolean",
    ()=>parseAsBoolean,
    "parseAsFloat",
    ()=>parseAsFloat,
    "parseAsHex",
    ()=>parseAsHex,
    "parseAsIndex",
    ()=>parseAsIndex,
    "parseAsInteger",
    ()=>parseAsInteger,
    "parseAsIsoDate",
    ()=>parseAsIsoDate,
    "parseAsIsoDateTime",
    ()=>parseAsIsoDateTime,
    "parseAsJson",
    ()=>parseAsJson,
    "parseAsNativeArrayOf",
    ()=>parseAsNativeArrayOf,
    "parseAsNumberLiteral",
    ()=>parseAsNumberLiteral,
    "parseAsString",
    ()=>parseAsString,
    "parseAsStringEnum",
    ()=>parseAsStringEnum,
    "parseAsStringLiteral",
    ()=>parseAsStringLiteral,
    "parseAsTimestamp",
    ()=>parseAsTimestamp,
    "useQueryState",
    ()=>useQueryState,
    "useQueryStates",
    ()=>useQueryStates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/debounce-C70-rAd_.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/context-DRdo5A2P.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$compare$2d$Br3z3FUS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/nuqs/dist/compare-Br3z3FUS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/allset/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
//#region src/loader.ts
function createLoader(parsers, { urlKeys = {} } = {}) {
    function loadSearchParams(input, { strict = false } = {}) {
        if (input instanceof Promise) return input.then((i)=>loadSearchParams(i, {
                strict
            }));
        const searchParams = extractSearchParams(input);
        const result = {};
        for (const [key, parser] of Object.entries(parsers)){
            const urlKey = urlKeys[key] ?? key;
            const query = parser.type === "multi" ? searchParams.getAll(urlKey) : searchParams.get(urlKey);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(query)) {
                result[key] = parser.defaultValue ?? null;
                continue;
            }
            let parsedValue;
            try {
                parsedValue = parser.parse(query);
            } catch (error$1) {
                if (strict) throw new Error(`[nuqs] Error while parsing query \`${query}\` for key \`${key}\`: ${error$1}`);
                parsedValue = null;
            }
            if (strict && query && parsedValue === null) throw new Error(`[nuqs] Failed to parse query \`${query}\` for key \`${key}\` (got null)`);
            result[key] = parsedValue ?? parser.defaultValue ?? null;
        }
        return result;
    }
    return loadSearchParams;
}
function extractSearchParams(input) {
    try {
        if (input instanceof Request) return input.url ? new URL(input.url).searchParams : new URLSearchParams();
        if (input instanceof URL) return input.searchParams;
        if (input instanceof URLSearchParams) return input;
        if (typeof input === "object") {
            const searchParams = new URLSearchParams();
            for (const [key, value] of Object.entries(input))if (Array.isArray(value)) for (const v of value)searchParams.append(key, v);
            else if (value !== void 0) searchParams.set(key, value);
            return searchParams;
        }
        if (typeof input === "string") {
            if (URL.hasOwnProperty("canParse") && URL.canParse(input)) return new URL(input).searchParams;
            return new URLSearchParams(input);
        }
    } catch  {}
    return new URLSearchParams();
}
//#endregion
//#region src/lib/safe-parse.ts
function safeParse(parser, value, key) {
    try {
        return parser(value);
    } catch (error$1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("[nuqs] Error while parsing value `%s`: %O" + (key ? " (for key `%s`)" : ""), value, error$1, key);
        return null;
    }
}
//#endregion
//#region src/parsers.ts
/**
* Wrap a set of parse/serialize functions into a builder pattern parser
* you can pass to one of the hooks, making its default value type safe.
*/ function createParser(parser) {
    function parseServerSideNullable(value) {
        if (typeof value === "undefined") return null;
        let str = "";
        if (Array.isArray(value)) {
            if (value[0] === void 0) return null;
            str = value[0];
        }
        if (typeof value === "string") str = value;
        return safeParse(parser.parse, str);
    }
    return {
        type: "single",
        eq: (a, b)=>a === b,
        ...parser,
        parseServerSide: parseServerSideNullable,
        withDefault (defaultValue) {
            return {
                ...this,
                defaultValue,
                parseServerSide (value) {
                    return parseServerSideNullable(value) ?? defaultValue;
                }
            };
        },
        withOptions (options) {
            return {
                ...this,
                ...options
            };
        }
    };
}
function createMultiParser(parser) {
    function parseServerSideNullable(value) {
        if (typeof value === "undefined") return null;
        return safeParse(parser.parse, Array.isArray(value) ? value : [
            value
        ]);
    }
    return {
        type: "multi",
        eq: (a, b)=>a === b,
        ...parser,
        parseServerSide: parseServerSideNullable,
        withDefault (defaultValue) {
            return {
                ...this,
                defaultValue,
                parseServerSide (value) {
                    return parseServerSideNullable(value) ?? defaultValue;
                }
            };
        },
        withOptions (options) {
            return {
                ...this,
                ...options
            };
        }
    };
}
const parseAsString = createParser({
    parse: (v)=>v,
    serialize: String
});
const parseAsInteger = createParser({
    parse: (v)=>{
        const int = parseInt(v);
        return int == int ? int : null;
    },
    serialize: (v)=>"" + Math.round(v)
});
const parseAsIndex = createParser({
    parse: (v)=>{
        const int = parseInt(v);
        return int == int ? int - 1 : null;
    },
    serialize: (v)=>"" + Math.round(v + 1)
});
const parseAsHex = createParser({
    parse: (v)=>{
        const int = parseInt(v, 16);
        return int == int ? int : null;
    },
    serialize: (v)=>{
        const hex = Math.round(v).toString(16);
        return (hex.length & 1 ? "0" : "") + hex;
    }
});
const parseAsFloat = createParser({
    parse: (v)=>{
        const float = parseFloat(v);
        return float == float ? float : null;
    },
    serialize: String
});
const parseAsBoolean = createParser({
    parse: (v)=>v.toLowerCase() === "true",
    serialize: String
});
function compareDates(a, b) {
    return a.valueOf() === b.valueOf();
}
/**
* Querystring encoded as the number of milliseconds since epoch,
* and returned as a Date object.
*/ const parseAsTimestamp = createParser({
    parse: (v)=>{
        const ms = parseInt(v);
        return ms == ms ? new Date(ms) : null;
    },
    serialize: (v)=>"" + v.valueOf(),
    eq: compareDates
});
/**
* Querystring encoded as an ISO-8601 string (UTC),
* and returned as a Date object.
*/ const parseAsIsoDateTime = createParser({
    parse: (v)=>{
        const date = new Date(v);
        return date.valueOf() == date.valueOf() ? date : null;
    },
    serialize: (v)=>v.toISOString(),
    eq: compareDates
});
/**
* Querystring encoded as an ISO-8601 string (UTC)
* without the time zone offset, and returned as
* a Date object.
*
* The Date is parsed without the time zone offset,
* making it at 00:00:00 UTC.
*/ const parseAsIsoDate = createParser({
    parse: (v)=>{
        const date = new Date(v.slice(0, 10));
        return date.valueOf() == date.valueOf() ? date : null;
    },
    serialize: (v)=>v.toISOString().slice(0, 10),
    eq: compareDates
});
/**
* String-based enums provide better type-safety for known sets of values.
* You will need to pass the parseAsStringEnum function a list of your enum values
* in order to validate the query string. Anything else will return `null`,
* or your default value if specified.
*
* Example:
* ```ts
* enum Direction {
*   up = 'UP',
*   down = 'DOWN',
*   left = 'LEFT',
*   right = 'RIGHT'
* }
*
* const [direction, setDirection] = useQueryState(
*   'direction',
*    parseAsStringEnum<Direction>(Object.values(Direction)) // pass a list of allowed values
*      .withDefault(Direction.up)
* )
* ```
*
* Note: the query string value will be the value of the enum, not its name
* (example above: `direction=UP`).
*
* @param validValues The values you want to accept
*/ function parseAsStringEnum(validValues) {
    return parseAsStringLiteral(validValues);
}
/**
* String-based literals provide better type-safety for known sets of values.
* You will need to pass the parseAsStringLiteral function a list of your string values
* in order to validate the query string. Anything else will return `null`,
* or your default value if specified.
*
* Example:
* ```ts
* const colors = ["red", "green", "blue"] as const
*
* const [color, setColor] = useQueryState(
*   'color',
*    parseAsStringLiteral(colors) // pass a readonly list of allowed values
*      .withDefault("red")
* )
* ```
*
* @param validValues The values you want to accept
*/ function parseAsStringLiteral(validValues) {
    return createParser({
        parse: (query)=>{
            const asConst = query;
            return validValues.includes(asConst) ? asConst : null;
        },
        serialize: String
    });
}
/**
* Number-based literals provide better type-safety for known sets of values.
* You will need to pass the parseAsNumberLiteral function a list of your number values
* in order to validate the query string. Anything else will return `null`,
* or your default value if specified.
*
* Example:
* ```ts
* const diceSides = [1, 2, 3, 4, 5, 6] as const
*
* const [side, setSide] = useQueryState(
*   'side',
*    parseAsNumberLiteral(diceSides) // pass a readonly list of allowed values
*      .withDefault(4)
* )
* ```
*
* @param validValues The values you want to accept
*/ function parseAsNumberLiteral(validValues) {
    return createParser({
        parse: (query)=>{
            const asConst = parseFloat(query);
            if (validValues.includes(asConst)) return asConst;
            return null;
        },
        serialize: String
    });
}
/**
* Encode any object shape into the querystring value as JSON.
* Note: you may want to use `useQueryStates` for finer control over
* multiple related query keys.
*
* @param runtimeParser Runtime parser (eg: Zod schema or Standard Schema) to validate after JSON.parse
*/ function parseAsJson(validator) {
    return createParser({
        parse: (query)=>{
            try {
                const obj = JSON.parse(query);
                if ("~standard" in validator) {
                    const result = validator["~standard"].validate(obj);
                    if (result instanceof Promise) throw new Error("[nuqs] Only synchronous Standard Schemas are supported in parseAsJson.");
                    return result.issues ? null : result.value;
                }
                return validator(obj);
            } catch  {
                return null;
            }
        },
        serialize: (value)=>JSON.stringify(value),
        eq (a, b) {
            return a === b || JSON.stringify(a) === JSON.stringify(b);
        }
    });
}
/**
* A comma-separated list of items.
* Items are URI-encoded for safety, so they may not look nice in the URL.
*
* @param itemParser Parser for each individual item in the array
* @param separator The character to use to separate items (default ',')
*/ function parseAsArrayOf(itemParser, separator = ",") {
    const itemEq = itemParser.eq ?? ((a, b)=>a === b);
    const encodedSeparator = encodeURIComponent(separator);
    return createParser({
        parse: (query)=>{
            if (query === "") return [];
            return query.split(separator).map((item, index)=>safeParse(itemParser.parse, item.replaceAll(encodedSeparator, separator), `[${index}]`)).filter((value)=>value !== null && value !== void 0);
        },
        serialize: (values)=>values.map((value)=>{
                return (itemParser.serialize ? itemParser.serialize(value) : String(value)).replaceAll(separator, encodedSeparator);
            }).join(separator),
        eq (a, b) {
            if (a === b) return true;
            if (a.length !== b.length) return false;
            return a.every((value, index)=>itemEq(value, b[index]));
        }
    });
}
function parseAsNativeArrayOf(itemParser) {
    const itemEq = itemParser.eq ?? ((a, b)=>a === b);
    return createMultiParser({
        parse: (query)=>{
            const parsed = query.map((item, index)=>safeParse(itemParser.parse, item, `[${index}]`)).filter((value)=>value !== null && value !== void 0);
            return parsed.length === 0 ? null : parsed;
        },
        serialize: (values)=>{
            return (Array.isArray(values) ? values : [
                values
            ]).flatMap((value)=>{
                const serialized = itemParser.serialize?.(value) ?? String(value);
                return typeof serialized === "string" ? [
                    serialized
                ] : [
                    ...serialized
                ];
            });
        },
        eq (a, b) {
            if (a === b) return true;
            if (a.length !== b.length) return false;
            return a.every((value, index)=>itemEq(value, b[index]));
        }
    }).withDefault([]);
}
//#endregion
//#region src/serializer.ts
function createSerializer(parsers, { clearOnDefault = true, urlKeys = {}, processUrlSearchParams } = {}) {
    function serialize(arg1BaseOrValues, arg2values = {}) {
        let [base, search] = isBase(arg1BaseOrValues) ? splitBase(arg1BaseOrValues) : [
            "",
            new URLSearchParams()
        ];
        const values = isBase(arg1BaseOrValues) ? arg2values : arg1BaseOrValues;
        if (values === null) {
            for(const key in parsers){
                const urlKey = urlKeys[key] ?? key;
                search.delete(urlKey);
            }
            if (processUrlSearchParams) search = processUrlSearchParams(search);
            return base + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(search);
        }
        for(const key in parsers){
            const parser = parsers[key];
            const value = values[key];
            if (!parser || value === void 0) continue;
            const urlKey = urlKeys[key] ?? key;
            const isMatchingDefault = parser.defaultValue !== void 0 && value !== null && (parser.eq ?? ((a, b)=>a === b))(value, parser.defaultValue);
            if (value === null || (parser.clearOnDefault ?? clearOnDefault ?? true) && isMatchingDefault) search.delete(urlKey);
            else search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(parser.serialize(value), urlKey, search);
        }
        if (processUrlSearchParams) search = processUrlSearchParams(search);
        return base + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(search);
    }
    return serialize;
}
function isBase(base) {
    return typeof base === "string" || base instanceof URLSearchParams || base instanceof URL;
}
function splitBase(base) {
    if (typeof base === "string") {
        const [path = "", ...search] = base.split("?");
        return [
            path,
            new URLSearchParams(search.join("?"))
        ];
    } else if (base instanceof URLSearchParams) return [
        "",
        new URLSearchParams(base)
    ];
    else return [
        base.origin + base.pathname,
        new URLSearchParams(base.searchParams)
    ];
}
//#endregion
//#region src/standard-schema.ts
function createStandardSchemaV1(parsers, { urlKeys, partialOutput = false } = {}) {
    const serialize = createSerializer(parsers, {
        urlKeys
    });
    const load = createLoader(parsers, {
        urlKeys
    });
    return {
        "~standard": {
            version: 1,
            vendor: "nuqs",
            validate (input) {
                try {
                    const value = load(serialize(input), {
                        strict: true
                    });
                    if (partialOutput) {
                        for(const key in value)if (!(key in input)) delete value[key];
                    }
                    return {
                        value
                    };
                } catch (error$1) {
                    return {
                        issues: [
                            {
                                message: error$1 instanceof Error ? error$1.message : String(error$1)
                            }
                        ]
                    };
                }
            }
        }
    };
}
//#endregion
//#region src/lib/sync.ts
const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])();
//#endregion
//#region src/useQueryStates.ts
const defaultUrlKeys = {};
/**
* Synchronise multiple query string arguments to React state in Next.js
*
* @param keys - An object describing the keys to synchronise and how to
*               serialise and parse them.
*               Use `parseAs(String|Integer|Float|...)` for quick shorthands.
* @param options - Optional history mode, shallow routing and scroll restoration options.
*/ function useQueryStates(keyMap, options = {}) {
    const hookId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])();
    const processUrlSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])();
    const { history = "replace", scroll = defaultOptions?.scroll ?? false, shallow = defaultOptions?.shallow ?? true, throttleMs = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"].timeMs, limitUrlUpdates = defaultOptions?.limitUrlUpdates, clearOnDefault = defaultOptions?.clearOnDefault ?? true, startTransition: startTransition$1, urlKeys = defaultUrlKeys } = options;
    const stateKeys = Object.keys(keyMap).join(",");
    const resolvedUrlKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQueryStates.useMemo[resolvedUrlKeys]": ()=>Object.fromEntries(Object.keys(keyMap).map({
                "useQueryStates.useMemo[resolvedUrlKeys]": (key)=>[
                        key,
                        urlKeys[key] ?? key
                    ]
            }["useQueryStates.useMemo[resolvedUrlKeys]"]))
    }["useQueryStates.useMemo[resolvedUrlKeys]"], [
        stateKeys,
        JSON.stringify(urlKeys)
    ]);
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(Object.values(resolvedUrlKeys));
    const initialSearchParams = adapter.searchParams;
    const queryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const defaultValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQueryStates.useMemo[defaultValues]": ()=>Object.fromEntries(Object.keys(keyMap).map({
                "useQueryStates.useMemo[defaultValues]": (key)=>[
                        key,
                        keyMap[key].defaultValue ?? null
                    ]
            }["useQueryStates.useMemo[defaultValues]"]))
    }["useQueryStates.useMemo[defaultValues]"], [
        Object.values(keyMap).map({
            "useQueryStates.useMemo[defaultValues]": ({ defaultValue })=>defaultValue
        }["useQueryStates.useMemo[defaultValues]"]).join(",")
    ]);
    const queuedQueries = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"].useQueuedQueries(Object.values(resolvedUrlKeys));
    const [internalState, setInternalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useQueryStates.useState": ()=>{
            return parseMap(keyMap, urlKeys, initialSearchParams ?? new URLSearchParams(), queuedQueries).state;
        }
    }["useQueryStates.useState"]);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(internalState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] render - state: %O, iSP: %s", hookId, stateKeys, internalState, initialSearchParams);
    if (Object.keys(queryRef.current).join("&") !== Object.values(resolvedUrlKeys).join("&")) {
        const { state, hasChanged } = parseMap(keyMap, urlKeys, initialSearchParams, queuedQueries, queryRef.current, stateRef.current);
        if (hasChanged) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] State changed: %O", hookId, stateKeys, {
                state,
                initialSearchParams,
                queuedQueries,
                queryRef: queryRef.current,
                stateRef: stateRef.current
            });
            stateRef.current = state;
            setInternalState(state);
        }
        queryRef.current = Object.fromEntries(Object.entries(resolvedUrlKeys).map(([key, urlKey])=>{
            return [
                urlKey,
                keyMap[key]?.type === "multi" ? initialSearchParams?.getAll(urlKey) : initialSearchParams?.get(urlKey) ?? null
            ];
        }));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQueryStates.useEffect": ()=>{
            const { state, hasChanged } = parseMap(keyMap, urlKeys, initialSearchParams, queuedQueries, queryRef.current, stateRef.current);
            if (hasChanged) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] State changed: %O", hookId, stateKeys, {
                    state,
                    initialSearchParams,
                    queuedQueries,
                    queryRef: queryRef.current,
                    stateRef: stateRef.current
                });
                stateRef.current = state;
                setInternalState(state);
            }
        }
    }["useQueryStates.useEffect"], [
        Object.values(resolvedUrlKeys).map({
            "useQueryStates.useEffect": (key)=>`${key}=${initialSearchParams?.getAll(key)}`
        }["useQueryStates.useEffect"]).join("&"),
        JSON.stringify(queuedQueries)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQueryStates.useEffect": ()=>{
            const handlers = Object.keys(keyMap).reduce({
                "useQueryStates.useEffect.handlers": (handlers$1, stateKey)=>{
                    handlers$1[stateKey] = ({
                        "useQueryStates.useEffect.handlers": ({ state, query })=>{
                            setInternalState({
                                "useQueryStates.useEffect.handlers": (currentState)=>{
                                    const { defaultValue } = keyMap[stateKey];
                                    const urlKey = resolvedUrlKeys[stateKey];
                                    const nextValue = state ?? defaultValue ?? null;
                                    const currentValue = currentState[stateKey] ?? defaultValue ?? null;
                                    if (Object.is(currentValue, nextValue)) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O", hookId, stateKeys, urlKey, state, defaultValue, stateRef.current);
                                        return currentState;
                                    }
                                    stateRef.current = {
                                        ...stateRef.current,
                                        [stateKey]: nextValue
                                    };
                                    queryRef.current[urlKey] = query;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O", hookId, stateKeys, urlKey, state, defaultValue, stateRef.current);
                                    return stateRef.current;
                                }
                            }["useQueryStates.useEffect.handlers"]);
                        }
                    })["useQueryStates.useEffect.handlers"];
                    return handlers$1;
                }
            }["useQueryStates.useEffect.handlers"], {});
            for (const stateKey of Object.keys(keyMap)){
                const urlKey = resolvedUrlKeys[stateKey];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] Subscribing to sync for `%s`", hookId, urlKey, stateKeys);
                emitter.on(urlKey, handlers[stateKey]);
            }
            return ({
                "useQueryStates.useEffect": ()=>{
                    for (const stateKey of Object.keys(keyMap)){
                        const urlKey = resolvedUrlKeys[stateKey];
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] Unsubscribing to sync for `%s`", hookId, urlKey, stateKeys);
                        emitter.off(urlKey, handlers[stateKey]);
                    }
                }
            })["useQueryStates.useEffect"];
        }
    }["useQueryStates.useEffect"], [
        stateKeys,
        resolvedUrlKeys
    ]);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQueryStates.useCallback[update]": (stateUpdater, callOptions = {})=>{
            const nullMap = Object.fromEntries(Object.keys(keyMap).map({
                "useQueryStates.useCallback[update].nullMap": (key)=>[
                        key,
                        null
                    ]
            }["useQueryStates.useCallback[update].nullMap"]));
            const newState = typeof stateUpdater === "function" ? stateUpdater(applyDefaultValues(stateRef.current, defaultValues)) ?? nullMap : stateUpdater ?? nullMap;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])("[nuq+ %s `%s`] setState: %O", hookId, stateKeys, newState);
            let returnedPromise = void 0;
            let maxDebounceTime = 0;
            let doFlush = false;
            const debounceAborts = [];
            for (let [stateKey, value] of Object.entries(newState)){
                const parser = keyMap[stateKey];
                const urlKey = resolvedUrlKeys[stateKey];
                if (!parser) continue;
                if ((callOptions.clearOnDefault ?? parser.clearOnDefault ?? clearOnDefault) && value !== null && parser.defaultValue !== void 0 && (parser.eq ?? ({
                    "useQueryStates.useCallback[update]": (a, b)=>a === b
                })["useQueryStates.useCallback[update]"])(value, parser.defaultValue)) value = null;
                const query = value === null ? null : (parser.serialize ?? String)(value);
                emitter.emit(urlKey, {
                    state: value,
                    query
                });
                const update$1 = {
                    key: urlKey,
                    query,
                    options: {
                        history: callOptions.history ?? parser.history ?? history,
                        shallow: callOptions.shallow ?? parser.shallow ?? shallow,
                        scroll: callOptions.scroll ?? parser.scroll ?? scroll,
                        startTransition: callOptions.startTransition ?? parser.startTransition ?? startTransition$1
                    }
                };
                if (callOptions?.limitUrlUpdates?.method === "debounce" || limitUrlUpdates?.method === "debounce" || parser.limitUrlUpdates?.method === "debounce") {
                    if (update$1.options.shallow === true) console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$DRdo5A2P$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(422));
                    const timeMs = callOptions?.limitUrlUpdates?.timeMs ?? limitUrlUpdates?.timeMs ?? parser.limitUrlUpdates?.timeMs ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"].timeMs;
                    const debouncedPromise = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"].push(update$1, timeMs, adapter);
                    if (maxDebounceTime < timeMs) {
                        returnedPromise = debouncedPromise;
                        maxDebounceTime = timeMs;
                    }
                } else {
                    const timeMs = callOptions?.limitUrlUpdates?.timeMs ?? parser?.limitUrlUpdates?.timeMs ?? limitUrlUpdates?.timeMs ?? callOptions.throttleMs ?? parser.throttleMs ?? throttleMs;
                    debounceAborts.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"].abort(urlKey));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"].push(update$1, timeMs);
                    doFlush = true;
                }
            }
            const globalPromise = debounceAborts.reduce({
                "useQueryStates.useCallback[update].globalPromise": (previous, fn)=>fn(previous)
            }["useQueryStates.useCallback[update].globalPromise"], doFlush ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"].flush(adapter, processUrlSearchParams) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"].getPendingPromise(adapter));
            return returnedPromise ?? globalPromise;
        }
    }["useQueryStates.useCallback[update]"], [
        stateKeys,
        history,
        shallow,
        scroll,
        throttleMs,
        limitUrlUpdates?.method,
        limitUrlUpdates?.timeMs,
        startTransition$1,
        resolvedUrlKeys,
        adapter.updateUrl,
        adapter.getSearchParamsSnapshot,
        adapter.rateLimitFactor,
        processUrlSearchParams,
        defaultValues
    ]);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "useQueryStates.useMemo": ()=>applyDefaultValues(internalState, defaultValues)
        }["useQueryStates.useMemo"], [
            internalState,
            defaultValues
        ]),
        update
    ];
}
function parseMap(keyMap, urlKeys, searchParams, queuedQueries, cachedQuery, cachedState) {
    let hasChanged = false;
    const state = Object.entries(keyMap).reduce((out, [stateKey, parser])=>{
        const urlKey = urlKeys?.[stateKey] ?? stateKey;
        const queuedQuery = queuedQueries[urlKey];
        const fallbackValue = parser.type === "multi" ? [] : null;
        const query = queuedQuery === void 0 ? (parser.type === "multi" ? searchParams?.getAll(urlKey) : searchParams?.get(urlKey)) ?? fallbackValue : queuedQuery;
        if (cachedQuery && cachedState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$compare$2d$Br3z3FUS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(cachedQuery[urlKey] ?? fallbackValue, query)) {
            out[stateKey] = cachedState[stateKey] ?? null;
            return out;
        }
        hasChanged = true;
        out[stateKey] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$C70$2d$rAd_$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(query) ? null : safeParse(parser.parse, query, urlKey)) ?? null;
        if (cachedQuery) cachedQuery[urlKey] = query;
        return out;
    }, {});
    if (!hasChanged) {
        const keyMapKeys = Object.keys(keyMap);
        const cachedStateKeys = Object.keys(cachedState ?? {});
        hasChanged = keyMapKeys.length !== cachedStateKeys.length || keyMapKeys.some((key)=>!cachedStateKeys.includes(key));
    }
    return {
        state,
        hasChanged
    };
}
function applyDefaultValues(state, defaults) {
    return Object.fromEntries(Object.keys(state).map((key)=>[
            key,
            state[key] ?? defaults[key] ?? null
        ]));
}
//#endregion
//#region src/useQueryState.ts
/**
* React state hook synchronized with a URL query string in Next.js
*
* If used without a `defaultValue` supplied in the options, and the query is
* missing in the URL, the state will be `null`.
*
* ### Behaviour with default values:
*
* _Note: the URL will **not** be updated with the default value if the query
* is missing._
*
* Setting the value to `null` will clear the query in the URL, and return
* the default value as state.
*
* Example usage:
* ```ts
*   // Blog posts filtering by tag
*   const [tag, selectTag] = useQueryState('tag')
*   const filteredPosts = posts.filter(post => tag ? post.tag === tag : true)
*   const clearTag = () => selectTag(null)
*
*   // With default values
*
*   const [count, setCount] = useQueryState(
*     'count',
*     parseAsInteger.defaultValue(0)
*   )
*
*   const increment = () => setCount(oldCount => oldCount + 1)
*   const decrement = () => setCount(oldCount => oldCount - 1)
*   const clearCountQuery = () => setCount(null)
*
*   // --
*
*   const [date, setDate] = useQueryState(
*     'date',
*     parseAsIsoDateTime.withDefault(new Date('2021-01-01'))
*   )
*
*   const setToNow = () => setDate(new Date())
*   const addOneHour = () => {
*     setDate(oldDate => new Date(oldDate.valueOf() + 3600_000))
*   }
* ```
* @param key The URL query string key to bind to
* @param options - Parser (defines the state data type), optional default value and history mode.
*/ function useQueryState(key, options = {}) {
    const { parse, type, serialize, eq, defaultValue, ...hookOptions } = options;
    const [{ [key]: state }, setState] = useQueryStates({
        [key]: {
            parse: parse ?? ({
                "useQueryState.useQueryStates": (x)=>x
            })["useQueryState.useQueryStates"],
            type,
            serialize,
            eq,
            defaultValue
        }
    }, hookOptions);
    return [
        state,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$allset$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useQueryState.useCallback": (stateUpdater, callOptions = {})=>setState({
                    "useQueryState.useCallback": (old)=>({
                            [key]: typeof stateUpdater === "function" ? stateUpdater(old[key]) : stateUpdater
                        })
                }["useQueryState.useCallback"], callOptions)
        }["useQueryState.useCallback"], [
            key,
            setState
        ])
    ];
}
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=f06ff_52b71564._.js.map
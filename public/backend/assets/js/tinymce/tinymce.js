/**
 * TinyMCE version 6.7.2 (2023-10-25)
 */
!(function () {
    "use strict";
    var e = function (e) {
            if (null === e) return "null";
            if (void 0 === e) return "undefined";
            var t = typeof e;
            return "object" === t && (Array.prototype.isPrototypeOf(e) || (e.constructor && "Array" === e.constructor.name))
                ? "array"
                : "object" === t && (String.prototype.isPrototypeOf(e) || (e.constructor && "String" === e.constructor.name))
                ? "string"
                : t;
        },
        t = function (e) {
            return { eq: e };
        },
        n = t(function (e, t) {
            return e === t;
        }),
        o = function (e) {
            return t(function (t, n) {
                if (t.length !== n.length) return !1;
                for (var o = t.length, r = 0; r < o; r++) if (!e.eq(t[r], n[r])) return !1;
                return !0;
            });
        },
        r = function (e) {
            return t(function (r, s) {
                var a = Object.keys(r),
                    i = Object.keys(s);
                if (
                    !(function (e, n) {
                        return (function (e, n) {
                            return t(function (t, o) {
                                return e.eq(n(t), n(o));
                            });
                        })(o(e), function (e) {
                            return (function (e, t) {
                                return Array.prototype.slice.call(e).sort(t);
                            })(e, n);
                        });
                    })(n).eq(a, i)
                )
                    return !1;
                for (var l = a.length, d = 0; d < l; d++) {
                    var c = a[d];
                    if (!e.eq(r[c], s[c])) return !1;
                }
                return !0;
            });
        },
        s = t(function (t, n) {
            if (t === n) return !0;
            var a = e(t);
            return (
                a === e(n) &&
                ((function (e) {
                    return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e);
                })(a)
                    ? t === n
                    : "array" === a
                    ? o(s).eq(t, n)
                    : "object" === a && r(s).eq(t, n))
            );
        });
    const a = Object.getPrototypeOf,
        i = (e, t, n) => {
            var o;
            return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name;
        },
        l = (e) => (t) =>
            ((e) => {
                const t = typeof e;
                return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, (e, t) => t.isPrototypeOf(e)) ? "string" : t;
            })(t) === e,
        d = (e) => (t) => typeof t === e,
        c = (e) => (t) => e === t,
        u = (e, t) => f(e) && i(e, t, (e, t) => a(e) === t),
        m = l("string"),
        f = l("object"),
        g = (e) => u(e, Object),
        p = l("array"),
        h = c(null),
        b = d("boolean"),
        v = c(void 0),
        y = (e) => null == e,
        C = (e) => !y(e),
        w = d("function"),
        x = d("number"),
        k = (e, t) => {
            if (p(e)) {
                for (let n = 0, o = e.length; n < o; ++n) if (!t(e[n])) return !1;
                return !0;
            }
            return !1;
        },
        E = () => {},
        S = (e, t) => (...n) => e(t.apply(null, n)),
        _ = (e, t) => (n) => e(t(n)),
        N = (e) => () => e,
        R = (e) => e,
        A = (e, t) => e === t;
    function O(e, ...t) {
        return (...n) => {
            const o = t.concat(n);
            return e.apply(null, o);
        };
    }
    const T = (e) => (t) => !e(t),
        B = (e) => () => {
            throw new Error(e);
        },
        D = (e) => e(),
        P = (e) => {
            e();
        },
        L = N(!1),
        M = N(!0);
    class I {
        constructor(e, t) {
            (this.tag = e), (this.value = t);
        }
        static some(e) {
            return new I(!0, e);
        }
        static none() {
            return I.singletonNone;
        }
        fold(e, t) {
            return this.tag ? t(this.value) : e();
        }
        isSome() {
            return this.tag;
        }
        isNone() {
            return !this.tag;
        }
        map(e) {
            return this.tag ? I.some(e(this.value)) : I.none();
        }
        bind(e) {
            return this.tag ? e(this.value) : I.none();
        }
        exists(e) {
            return this.tag && e(this.value);
        }
        forall(e) {
            return !this.tag || e(this.value);
        }
        filter(e) {
            return !this.tag || e(this.value) ? this : I.none();
        }
        getOr(e) {
            return this.tag ? this.value : e;
        }
        or(e) {
            return this.tag ? this : e;
        }
        getOrThunk(e) {
            return this.tag ? this.value : e();
        }
        orThunk(e) {
            return this.tag ? this : e();
        }
        getOrDie(e) {
            if (this.tag) return this.value;
            throw new Error(null != e ? e : "Called getOrDie on None");
        }
        static from(e) {
            return C(e) ? I.some(e) : I.none();
        }
        getOrNull() {
            return this.tag ? this.value : null;
        }
        getOrUndefined() {
            return this.value;
        }
        each(e) {
            this.tag && e(this.value);
        }
        toArray() {
            return this.tag ? [this.value] : [];
        }
        toString() {
            return this.tag ? `some(${this.value})` : "none()";
        }
    }
    I.singletonNone = new I(!1);
    const F = Array.prototype.slice,
        U = Array.prototype.indexOf,
        z = Array.prototype.push,
        j = (e, t) => U.call(e, t),
        H = (e, t) => j(e, t) > -1,
        $ = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return !0;
            return !1;
        },
        q = (e, t) => {
            const n = e.length,
                o = new Array(n);
            for (let r = 0; r < n; r++) {
                const n = e[r];
                o[r] = t(n, r);
            }
            return o;
        },
        V = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) t(e[n], n);
        },
        W = (e, t) => {
            for (let n = e.length - 1; n >= 0; n--) t(e[n], n);
        },
        K = (e, t) => {
            const n = [],
                o = [];
            for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r];
                (t(s, r) ? n : o).push(s);
            }
            return { pass: n, fail: o };
        },
        G = (e, t) => {
            const n = [];
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                t(r, o) && n.push(r);
            }
            return n;
        },
        Y = (e, t, n) => (
            W(e, (e, o) => {
                n = t(n, e, o);
            }),
            n
        ),
        X = (e, t, n) => (
            V(e, (e, o) => {
                n = t(n, e, o);
            }),
            n
        ),
        Q = (e, t, n) => {
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                if (t(r, o)) return I.some(r);
                if (n(r, o)) break;
            }
            return I.none();
        },
        J = (e, t) => Q(e, t, L),
        Z = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return I.some(n);
            return I.none();
        },
        ee = (e) => {
            const t = [];
            for (let n = 0, o = e.length; n < o; ++n) {
                if (!p(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                z.apply(t, e[n]);
            }
            return t;
        },
        te = (e, t) => ee(q(e, t)),
        ne = (e, t) => {
            for (let n = 0, o = e.length; n < o; ++n) if (!0 !== t(e[n], n)) return !1;
            return !0;
        },
        oe = (e) => {
            const t = F.call(e, 0);
            return t.reverse(), t;
        },
        re = (e, t) => G(e, (e) => !H(t, e)),
        se = (e, t) => {
            const n = {};
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                n[String(r)] = t(r, o);
            }
            return n;
        },
        ae = (e, t) => {
            const n = F.call(e, 0);
            return n.sort(t), n;
        },
        ie = (e, t) => (t >= 0 && t < e.length ? I.some(e[t]) : I.none()),
        le = (e) => ie(e, 0),
        de = (e) => ie(e, e.length - 1),
        ce = w(Array.from) ? Array.from : (e) => F.call(e),
        ue = (e, t) => {
            for (let n = 0; n < e.length; n++) {
                const o = t(e[n], n);
                if (o.isSome()) return o;
            }
            return I.none();
        },
        me = Object.keys,
        fe = Object.hasOwnProperty,
        ge = (e, t) => {
            const n = me(e);
            for (let o = 0, r = n.length; o < r; o++) {
                const r = n[o];
                t(e[r], r);
            }
        },
        pe = (e, t) => he(e, (e, n) => ({ k: n, v: t(e, n) })),
        he = (e, t) => {
            const n = {};
            return (
                ge(e, (e, o) => {
                    const r = t(e, o);
                    n[r.k] = r.v;
                }),
                n
            );
        },
        be = (e) => (t, n) => {
            e[n] = t;
        },
        ve = (e, t, n, o) => {
            ge(e, (e, r) => {
                (t(e, r) ? n : o)(e, r);
            });
        },
        ye = (e, t) => {
            const n = {};
            return ve(e, t, be(n), E), n;
        },
        Ce = (e, t) => {
            const n = [];
            return (
                ge(e, (e, o) => {
                    n.push(t(e, o));
                }),
                n
            );
        },
        we = (e) => Ce(e, R),
        xe = (e, t) => (ke(e, t) ? I.from(e[t]) : I.none()),
        ke = (e, t) => fe.call(e, t),
        Ee = (e, t) => ke(e, t) && void 0 !== e[t] && null !== e[t],
        Se = (e) => {
            const t = {};
            return (
                V(e, (e) => {
                    t[e] = {};
                }),
                me(t)
            );
        },
        _e = (e) => void 0 !== e.length,
        Ne = Array.isArray,
        Re = (e, t, n) => {
            if (!e) return !1;
            if (((n = n || e), _e(e))) {
                for (let o = 0, r = e.length; o < r; o++) if (!1 === t.call(n, e[o], o, e)) return !1;
            } else for (const o in e) if (ke(e, o) && !1 === t.call(n, e[o], o, e)) return !1;
            return !0;
        },
        Ae = (e, t) => {
            const n = [];
            return (
                Re(e, (o, r) => {
                    n.push(t(o, r, e));
                }),
                n
            );
        },
        Oe = (e, t) => {
            const n = [];
            return (
                Re(e, (o, r) => {
                    (t && !t(o, r, e)) || n.push(o);
                }),
                n
            );
        },
        Te = (e, t, n, o) => {
            let r = v(n) ? e[0] : n;
            for (let n = 0; n < e.length; n++) r = t.call(o, r, e[n], n);
            return r;
        },
        Be = (e, t, n) => {
            for (let o = 0, r = e.length; o < r; o++) if (t.call(n, e[o], o, e)) return o;
            return -1;
        },
        De = (e) => e[e.length - 1],
        Pe = (e) => {
            let t,
                n = !1;
            return (...o) => (n || ((n = !0), (t = e.apply(null, o))), t);
        },
        Le = () => Me(0, 0),
        Me = (e, t) => ({ major: e, minor: t }),
        Ie = {
            nu: Me,
            detect: (e, t) => {
                const n = String(t).toLowerCase();
                return 0 === e.length
                    ? Le()
                    : ((e, t) => {
                          const n = ((e, t) => {
                              for (let n = 0; n < e.length; n++) {
                                  const o = e[n];
                                  if (o.test(t)) return o;
                              }
                          })(e, t);
                          if (!n) return { major: 0, minor: 0 };
                          const o = (e) => Number(t.replace(n, "$" + e));
                          return Me(o(1), o(2));
                      })(e, n);
            },
            unknown: Le,
        },
        Fe = (e, t) => {
            const n = String(t).toLowerCase();
            return J(e, (e) => e.search(n));
        },
        Ue = (e, t, n) => "" === t || (e.length >= t.length && e.substr(n, n + t.length) === t),
        ze = (e, t) => (He(e, t) ? ((e, t) => e.substring(t))(e, t.length) : e),
        je = (e, t, n = 0, o) => {
            const r = e.indexOf(t, n);
            return -1 !== r && (!!v(o) || r + t.length <= o);
        },
        He = (e, t) => Ue(e, t, 0),
        $e = (e, t) => Ue(e, t, e.length - t.length),
        qe = (e) => (t) => t.replace(e, ""),
        Ve = qe(/^\s+|\s+$/g),
        We = qe(/^\s+/g),
        Ke = qe(/\s+$/g),
        Ge = (e) => e.length > 0,
        Ye = (e) => !Ge(e),
        Xe = (e, t = 10) => {
            const n = parseInt(e, t);
            return isNaN(n) ? I.none() : I.some(n);
        },
        Qe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Je = (e) => (t) => je(t, e),
        Ze = [
            { name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: (e) => je(e, "edge/") && je(e, "chrome") && je(e, "safari") && je(e, "applewebkit") },
            { name: "Chromium", brand: "Chromium", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Qe], search: (e) => je(e, "chrome") && !je(e, "chromeframe") },
            { name: "IE", versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/], search: (e) => je(e, "msie") || je(e, "trident") },
            { name: "Opera", versionRegexes: [Qe, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Je("opera") },
            { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: Je("firefox") },
            { name: "Safari", versionRegexes: [Qe, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: (e) => (je(e, "safari") || je(e, "mobile/")) && je(e, "applewebkit") },
        ],
        et = [
            { name: "Windows", search: Je("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] },
            { name: "iOS", search: (e) => je(e, "iphone") || je(e, "ipad"), versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/] },
            { name: "Android", search: Je("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] },
            { name: "macOS", search: Je("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] },
            { name: "Linux", search: Je("linux"), versionRegexes: [] },
            { name: "Solaris", search: Je("sunos"), versionRegexes: [] },
            { name: "FreeBSD", search: Je("freebsd"), versionRegexes: [] },
            { name: "ChromeOS", search: Je("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] },
        ],
        tt = { browsers: N(Ze), oses: N(et) },
        nt = "Edge",
        ot = "Chromium",
        rt = "Opera",
        st = "Firefox",
        at = "Safari",
        it = (e) => {
            const t = e.current,
                n = e.version,
                o = (e) => () => t === e;
            return { current: t, version: n, isEdge: o(nt), isChromium: o(ot), isIE: o("IE"), isOpera: o(rt), isFirefox: o(st), isSafari: o(at) };
        },
        lt = () => it({ current: void 0, version: Ie.unknown() }),
        dt = it,
        ct = (N(nt), N(ot), N("IE"), N(rt), N(st), N(at), "Windows"),
        ut = "Android",
        mt = "Linux",
        ft = "macOS",
        gt = "Solaris",
        pt = "FreeBSD",
        ht = "ChromeOS",
        bt = (e) => {
            const t = e.current,
                n = e.version,
                o = (e) => () => t === e;
            return { current: t, version: n, isWindows: o(ct), isiOS: o("iOS"), isAndroid: o(ut), isMacOS: o(ft), isLinux: o(mt), isSolaris: o(gt), isFreeBSD: o(pt), isChromeOS: o(ht) };
        },
        vt = () => bt({ current: void 0, version: Ie.unknown() }),
        yt = bt,
        Ct = (N(ct), N("iOS"), N(ut), N(mt), N(ft), N(gt), N(pt), N(ht), (e) => window.matchMedia(e).matches);
    let wt = Pe(() =>
        ((e, t, n) => {
            const o = tt.browsers(),
                r = tt.oses(),
                s = t
                    .bind((e) =>
                        ((e, t) =>
                            ue(t.brands, (t) => {
                                const n = t.brand.toLowerCase();
                                return J(e, (e) => {
                                    var t;
                                    return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
                                }).map((e) => ({ current: e.name, version: Ie.nu(parseInt(t.version, 10), 0) }));
                            }))(o, e)
                    )
                    .orThunk(() =>
                        ((e, t) =>
                            Fe(e, t).map((e) => {
                                const n = Ie.detect(e.versionRegexes, t);
                                return { current: e.name, version: n };
                            }))(o, e)
                    )
                    .fold(lt, dt),
                a = ((e, t) =>
                    Fe(e, t).map((e) => {
                        const n = Ie.detect(e.versionRegexes, t);
                        return { current: e.name, version: n };
                    }))(r, e).fold(vt, yt),
                i = ((e, t, n, o) => {
                    const r = e.isiOS() && !0 === /ipad/i.test(n),
                        s = e.isiOS() && !r,
                        a = e.isiOS() || e.isAndroid(),
                        i = a || o("(pointer:coarse)"),
                        l = r || (!s && a && o("(min-device-width:768px)")),
                        d = s || (a && !l),
                        c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
                        u = !d && !l && !c;
                    return { isiPad: N(r), isiPhone: N(s), isTablet: N(l), isPhone: N(d), isTouch: N(i), isAndroid: e.isAndroid, isiOS: e.isiOS, isWebView: N(c), isDesktop: N(u) };
                })(a, s, e, n);
            return { browser: s, os: a, deviceType: i };
        })(navigator.userAgent, I.from(navigator.userAgentData), Ct)
    );
    const xt = () => wt(),
        kt = navigator.userAgent,
        Et = xt(),
        St = Et.browser,
        _t = Et.os,
        Nt = Et.deviceType,
        Rt = -1 !== kt.indexOf("Windows Phone"),
        At = {
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            documentMode: St.isIE() ? document.documentMode || 7 : 10,
            cacheSuffix: null,
            container: null,
            canHaveCSP: !St.isIE(),
            windowsPhone: Rt,
            browser: { current: St.current, version: St.version, isChromium: St.isChromium, isEdge: St.isEdge, isFirefox: St.isFirefox, isIE: St.isIE, isOpera: St.isOpera, isSafari: St.isSafari },
            os: {
                current: _t.current,
                version: _t.version,
                isAndroid: _t.isAndroid,
                isChromeOS: _t.isChromeOS,
                isFreeBSD: _t.isFreeBSD,
                isiOS: _t.isiOS,
                isLinux: _t.isLinux,
                isMacOS: _t.isMacOS,
                isSolaris: _t.isSolaris,
                isWindows: _t.isWindows,
            },
            deviceType: { isDesktop: Nt.isDesktop, isiPad: Nt.isiPad, isiPhone: Nt.isiPhone, isPhone: Nt.isPhone, isTablet: Nt.isTablet, isTouch: Nt.isTouch, isWebView: Nt.isWebView },
        },
        Ot = /^\s*|\s*$/g,
        Tt = (e) => (y(e) ? "" : ("" + e).replace(Ot, "")),
        Bt = function (e, t, n, o) {
            (o = o || this), e && (n && (e = e[n]), Re(e, (e, r) => !1 !== t.call(o, e, r, n) && (Bt(e, t, n, o), !0)));
        },
        Dt = {
            trim: Tt,
            isArray: Ne,
            is: (e, t) => (t ? !("array" !== t || !Ne(e)) || typeof e === t : void 0 !== e),
            toArray: (e) => {
                if (Ne(e)) return e;
                {
                    const t = [];
                    for (let n = 0, o = e.length; n < o; n++) t[n] = e[n];
                    return t;
                }
            },
            makeMap: (e, t, n = {}) => {
                const o = m(e) ? e.split(t || ",") : e || [];
                let r = o.length;
                for (; r--; ) n[o[r]] = {};
                return n;
            },
            each: Re,
            map: Ae,
            grep: Oe,
            inArray: (e, t) => {
                if (e) for (let n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
                return -1;
            },
            hasOwn: ke,
            extend: (e, ...t) => {
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    for (const t in o)
                        if (ke(o, t)) {
                            const n = o[t];
                            void 0 !== n && (e[t] = n);
                        }
                }
                return e;
            },
            walk: Bt,
            resolve: (e, t = window) => {
                const n = e.split(".");
                for (let e = 0, o = n.length; e < o && (t = t[n[e]]); e++);
                return t;
            },
            explode: (e, t) => (p(e) ? e : "" === e ? [] : Ae(e.split(t || ","), Tt)),
            _addCacheSuffix: (e) => {
                const t = At.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            },
        },
        Pt = (e, t, n = A) => e.exists((e) => n(e, t)),
        Lt = (e, t, n = A) => Mt(e, t, n).getOr(e.isNone() && t.isNone()),
        Mt = (e, t, n) => (e.isSome() && t.isSome() ? I.some(n(e.getOrDie(), t.getOrDie())) : I.none()),
        It = (e, t) => (e ? I.some(t) : I.none()),
        Ft = "undefined" != typeof window ? window : Function("return this;")(),
        Ut = (e, t) =>
            ((e, t) => {
                let n = null != t ? t : Ft;
                for (let t = 0; t < e.length && null != n; ++t) n = n[e[t]];
                return n;
            })(e.split("."), t),
        zt = Object.getPrototypeOf,
        jt = (e) => {
            const t = Ut("ownerDocument.defaultView", e);
            return (
                f(e) &&
                (((e) =>
                    ((e, t) => {
                        const n = ((e, t) => Ut(e, t))(e, t);
                        if (null == n) throw new Error(e + " not available on this browser");
                        return n;
                    })("HTMLElement", e))(t).prototype.isPrototypeOf(e) ||
                    /^HTML\w*Element$/.test(zt(e).constructor.name))
            );
        },
        Ht = (e) => e.dom.nodeName.toLowerCase(),
        $t = (e) => e.dom.nodeType,
        qt = (e) => (t) => $t(t) === e,
        Vt = (e) => Wt(e) && jt(e.dom),
        Wt = qt(1),
        Kt = qt(3),
        Gt = qt(9),
        Yt = qt(11),
        Xt = (e) => (t) => Wt(t) && Ht(t) === e,
        Qt = (e, t, n) => {
            if (!(m(n) || b(n) || x(n))) throw (console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple"));
            e.setAttribute(t, n + "");
        },
        Jt = (e, t, n) => {
            Qt(e.dom, t, n);
        },
        Zt = (e, t) => {
            const n = e.dom;
            ge(t, (e, t) => {
                Qt(n, t, e);
            });
        },
        en = (e, t) => {
            const n = e.dom.getAttribute(t);
            return null === n ? void 0 : n;
        },
        tn = (e, t) => I.from(en(e, t)),
        nn = (e, t) => {
            const n = e.dom;
            return !(!n || !n.hasAttribute) && n.hasAttribute(t);
        },
        on = (e, t) => {
            e.dom.removeAttribute(t);
        },
        rn = (e) => X(e.dom.attributes, (e, t) => ((e[t.name] = t.value), e), {}),
        sn = (e, t) => {
            const n = en(e, t);
            return void 0 === n || "" === n ? [] : n.split(" ");
        },
        an = (e) => void 0 !== e.dom.classList,
        ln = (e) => sn(e, "class"),
        dn = (e, t) =>
            ((e, t, n) => {
                const o = sn(e, t).concat([n]);
                return Jt(e, t, o.join(" ")), !0;
            })(e, "class", t),
        cn = (e, t) =>
            ((e, t, n) => {
                const o = G(sn(e, t), (e) => e !== n);
                return o.length > 0 ? Jt(e, t, o.join(" ")) : on(e, t), !1;
            })(e, "class", t),
        un = (e, t) => {
            an(e) ? e.dom.classList.add(t) : dn(e, t);
        },
        mn = (e) => {
            0 === (an(e) ? e.dom.classList : ln(e)).length && on(e, "class");
        },
        fn = (e, t) => {
            an(e) ? e.dom.classList.remove(t) : cn(e, t), mn(e);
        },
        gn = (e, t) => an(e) && e.dom.classList.contains(t),
        pn = (e) => {
            if (null == e) throw new Error("Node cannot be null or undefined");
            return { dom: e };
        },
        hn = (e, t) => {
            const n = (t || document).createElement("div");
            if (((n.innerHTML = e), !n.hasChildNodes() || n.childNodes.length > 1)) {
                const t = "HTML does not have a single root node";
                throw (console.error(t, e), new Error(t));
            }
            return pn(n.childNodes[0]);
        },
        bn = (e, t) => {
            const n = (t || document).createElement(e);
            return pn(n);
        },
        vn = (e, t) => {
            const n = (t || document).createTextNode(e);
            return pn(n);
        },
        yn = pn,
        Cn = (e, t, n) => I.from(e.dom.elementFromPoint(t, n)).map(pn),
        wn = (e, t) => {
            const n = [],
                o = (e) => (n.push(e), t(e));
            let r = t(e);
            do {
                r = r.bind(o);
            } while (r.isSome());
            return n;
        },
        xn = (e, t) => {
            const n = e.dom;
            if (1 !== n.nodeType) return !1;
            {
                const e = n;
                if (void 0 !== e.matches) return e.matches(t);
                if (void 0 !== e.msMatchesSelector) return e.msMatchesSelector(t);
                if (void 0 !== e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
                if (void 0 !== e.mozMatchesSelector) return e.mozMatchesSelector(t);
                throw new Error("Browser lacks native selectors");
            }
        },
        kn = (e) => (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) || 0 === e.childElementCount,
        En = (e, t) => e.dom === t.dom,
        Sn = (e, t) => {
            const n = e.dom,
                o = t.dom;
            return n !== o && n.contains(o);
        },
        _n = (e) => yn(e.dom.ownerDocument),
        Nn = (e) => (Gt(e) ? e : _n(e)),
        Rn = (e) => yn(Nn(e).dom.defaultView),
        An = (e) => I.from(e.dom.parentNode).map(yn),
        On = (e) => I.from(e.dom.parentElement).map(yn),
        Tn = (e, t) => {
            const n = w(t) ? t : L;
            let o = e.dom;
            const r = [];
            for (; null !== o.parentNode && void 0 !== o.parentNode; ) {
                const e = o.parentNode,
                    t = yn(e);
                if ((r.push(t), !0 === n(t))) break;
                o = e;
            }
            return r;
        },
        Bn = (e) => I.from(e.dom.previousSibling).map(yn),
        Dn = (e) => I.from(e.dom.nextSibling).map(yn),
        Pn = (e) => oe(wn(e, Bn)),
        Ln = (e) => wn(e, Dn),
        Mn = (e) => q(e.dom.childNodes, yn),
        In = (e, t) => {
            const n = e.dom.childNodes;
            return I.from(n[t]).map(yn);
        },
        Fn = (e) => In(e, 0),
        Un = (e) => In(e, e.dom.childNodes.length - 1),
        zn = (e) => e.dom.childNodes.length,
        jn = (e) => Yt(e) && C(e.dom.host),
        Hn = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode),
        $n = N(Hn),
        qn = Hn ? (e) => yn(e.dom.getRootNode()) : Nn,
        Vn = (e) =>
            jn(e)
                ? e
                : ((e) => {
                      const t = e.dom.head;
                      if (null == t) throw new Error("Head is not available yet");
                      return yn(t);
                  })(Nn(e)),
        Wn = (e) => yn(e.dom.host),
        Kn = (e) => {
            if ($n() && C(e.target)) {
                const t = yn(e.target);
                if (Wt(t) && Gn(t) && e.composed && e.composedPath) {
                    const t = e.composedPath();
                    if (t) return le(t);
                }
            }
            return I.from(e.target);
        },
        Gn = (e) => C(e.dom.shadowRoot),
        Yn = (e) => {
            const t = Kt(e) ? e.dom.parentNode : e.dom;
            if (null == t || null === t.ownerDocument) return !1;
            const n = t.ownerDocument;
            return ((e) => {
                const t = qn(e);
                return jn(t) ? I.some(t) : I.none();
            })(yn(t)).fold(() => n.body.contains(t), _(Yn, Wn));
        };
    var Xn = (e, t, n, o, r) => (e(n, o) ? I.some(n) : w(r) && r(n) ? I.none() : t(n, o, r));
    const Qn = (e, t, n) => {
            let o = e.dom;
            const r = w(n) ? n : L;
            for (; o.parentNode; ) {
                o = o.parentNode;
                const e = yn(o);
                if (t(e)) return I.some(e);
                if (r(e)) break;
            }
            return I.none();
        },
        Jn = (e, t, n) => Xn((e, t) => t(e), Qn, e, t, n),
        Zn = (e, t, n) => Qn(e, (e) => xn(e, t), n),
        eo = (e, t) =>
            ((e, t) => {
                const n = void 0 === t ? document : t.dom;
                return kn(n) ? I.none() : I.from(n.querySelector(e)).map(yn);
            })(t, e),
        to = (e, t, n) => Xn((e, t) => xn(e, t), Zn, e, t, n),
        no = (e, t = !1) => {
            return Yn(e) ? e.dom.isContentEditable : ((n = e), to(n, "[contenteditable]")).fold(N(t), (e) => "true" === oo(e));
            var n;
        },
        oo = (e) => e.dom.contentEditable,
        ro = (e) => void 0 !== e.style && w(e.style.getPropertyValue),
        so = (e, t, n) => {
            if (!m(n)) throw (console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n));
            ro(e) && e.style.setProperty(t, n);
        },
        ao = (e, t, n) => {
            const o = e.dom;
            so(o, t, n);
        },
        io = (e, t) => {
            const n = e.dom;
            ge(t, (e, t) => {
                so(n, t, e);
            });
        },
        lo = (e, t) => {
            const n = e.dom,
                o = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== o || Yn(e) ? o : co(n, t);
        },
        co = (e, t) => (ro(e) ? e.style.getPropertyValue(t) : ""),
        uo = (e, t) => {
            const n = e.dom,
                o = co(n, t);
            return I.from(o).filter((e) => e.length > 0);
        },
        mo = (e) => {
            const t = {},
                n = e.dom;
            if (ro(n))
                for (let e = 0; e < n.style.length; e++) {
                    const o = n.style.item(e);
                    t[o] = n.style[o];
                }
            return t;
        },
        fo = (e, t) => {
            ((e, t) => {
                ro(e) && e.style.removeProperty(t);
            })(e.dom, t),
                Pt(tn(e, "style").map(Ve), "") && on(e, "style");
        },
        go = (e, t) => {
            An(e).each((n) => {
                n.dom.insertBefore(t.dom, e.dom);
            });
        },
        po = (e, t) => {
            Dn(e).fold(
                () => {
                    An(e).each((e) => {
                        bo(e, t);
                    });
                },
                (e) => {
                    go(e, t);
                }
            );
        },
        ho = (e, t) => {
            Fn(e).fold(
                () => {
                    bo(e, t);
                },
                (n) => {
                    e.dom.insertBefore(t.dom, n.dom);
                }
            );
        },
        bo = (e, t) => {
            e.dom.appendChild(t.dom);
        },
        vo = (e, t) => {
            go(e, t), bo(t, e);
        },
        yo = (e, t) => {
            V(t, (t) => {
                bo(e, t);
            });
        },
        Co = (e) => {
            (e.dom.textContent = ""),
                V(Mn(e), (e) => {
                    wo(e);
                });
        },
        wo = (e) => {
            const t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t);
        },
        xo = (e) => {
            const t = Mn(e);
            var n, o;
            t.length > 0 &&
                ((n = e),
                V((o = t), (e, t) => {
                    const r = 0 === t ? n : o[t - 1];
                    po(r, e);
                })),
                wo(e);
        },
        ko = (e) => q(e, yn),
        Eo = (e) => e.dom.innerHTML,
        So = (e, t) => {
            const n = _n(e).dom,
                o = yn(n.createDocumentFragment()),
                r = ((e, t) => {
                    const n = (t || document).createElement("div");
                    return (n.innerHTML = e), Mn(yn(n));
                })(t, n);
            yo(o, r), Co(e), bo(e, o);
        },
        _o = (e, t, n, o) =>
            ((e, t, n, o, r) => {
                const s = ((e, t) => (n) => {
                    e(n) &&
                        t(
                            ((e) => {
                                const t = yn(Kn(e).getOr(e.target)),
                                    n = () => e.stopPropagation(),
                                    o = () => e.preventDefault(),
                                    r = S(o, n);
                                return ((e, t, n, o, r, s, a) => ({ target: e, x: t, y: n, stop: o, prevent: r, kill: s, raw: a }))(t, e.clientX, e.clientY, n, o, r, e);
                            })(n)
                        );
                })(n, o);
                return e.dom.addEventListener(t, s, false), { unbind: O(No, e, t, s, false) };
            })(e, t, n, o),
        No = (e, t, n, o) => {
            e.dom.removeEventListener(t, n, o);
        },
        Ro = (e, t) => ({ left: e, top: t, translate: (n, o) => Ro(e + n, t + o) }),
        Ao = Ro,
        Oo = (e, t) => (void 0 !== e ? e : void 0 !== t ? t : 0),
        To = (e) => {
            const t = e.dom,
                n = t.ownerDocument.body;
            return n === t
                ? Ao(n.offsetLeft, n.offsetTop)
                : Yn(e)
                ? ((e) => {
                      const t = e.getBoundingClientRect();
                      return Ao(t.left, t.top);
                  })(t)
                : Ao(0, 0);
        },
        Bo = (e) => {
            const t = void 0 !== e ? e.dom : document,
                n = t.body.scrollLeft || t.documentElement.scrollLeft,
                o = t.body.scrollTop || t.documentElement.scrollTop;
            return Ao(n, o);
        },
        Do = (e, t, n) => {
            const o = (void 0 !== n ? n.dom : document).defaultView;
            o && o.scrollTo(e, t);
        },
        Po = (e, t) => {
            xt().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
        },
        Lo = (e, t, n, o) => ({ x: e, y: t, width: n, height: o, right: e + n, bottom: t + o }),
        Mo = (e) => {
            const t = void 0 === e ? window : e,
                n = t.document,
                o = Bo(yn(n));
            return ((e) => {
                const t = void 0 === e ? window : e;
                return xt().browser.isFirefox() ? I.none() : I.from(t.visualViewport);
            })(t).fold(
                () => {
                    const e = t.document.documentElement,
                        n = e.clientWidth,
                        r = e.clientHeight;
                    return Lo(o.left, o.top, n, r);
                },
                (e) => Lo(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height)
            );
        },
        Io = (e, t) => {
            let n = [];
            return (
                V(Mn(e), (e) => {
                    t(e) && (n = n.concat([e])), (n = n.concat(Io(e, t)));
                }),
                n
            );
        },
        Fo = (e, t) =>
            ((e, t) => {
                const n = void 0 === t ? document : t.dom;
                return kn(n) ? [] : q(n.querySelectorAll(e), yn);
            })(t, e),
        Uo = (e, t, n) => Zn(e, t, n).isSome();
    class zo {
        constructor(e, t) {
            (this.node = e), (this.rootNode = t), (this.current = this.current.bind(this)), (this.next = this.next.bind(this)), (this.prev = this.prev.bind(this)), (this.prev2 = this.prev2.bind(this));
        }
        current() {
            return this.node;
        }
        next(e) {
            return (this.node = this.findSibling(this.node, "firstChild", "nextSibling", e)), this.node;
        }
        prev(e) {
            return (this.node = this.findSibling(this.node, "lastChild", "previousSibling", e)), this.node;
        }
        prev2(e) {
            return (this.node = this.findPreviousNode(this.node, e)), this.node;
        }
        findSibling(e, t, n, o) {
            if (e) {
                if (!o && e[t]) return e[t];
                if (e !== this.rootNode) {
                    let t = e[n];
                    if (t) return t;
                    for (let o = e.parentNode; o && o !== this.rootNode; o = o.parentNode) if (((t = o[n]), t)) return t;
                }
            }
        }
        findPreviousNode(e, t) {
            if (e) {
                const n = e.previousSibling;
                if (this.rootNode && n === this.rootNode) return;
                if (n) {
                    if (!t) for (let e = n.lastChild; e; e = e.lastChild) if (!e.lastChild) return e;
                    return n;
                }
                const o = e.parentNode;
                if (o && o !== this.rootNode) return o;
            }
        }
    }
    const jo = (e) => (t) => !!t && t.nodeType === e,
        Ho = (e) => !!e && !Object.getPrototypeOf(e),
        $o = jo(1),
        qo = (e) => {
            const t = e.toLowerCase();
            return (e) => C(e) && e.nodeName.toLowerCase() === t;
        },
        Vo = (e) => {
            const t = e.map((e) => e.toLowerCase());
            return (e) => {
                if (e && e.nodeName) {
                    const n = e.nodeName.toLowerCase();
                    return H(t, n);
                }
                return !1;
            };
        },
        Wo = (e, t) => {
            const n = t.toLowerCase().split(" ");
            return (t) => {
                if ($o(t)) {
                    const o = t.ownerDocument.defaultView;
                    if (o)
                        for (let r = 0; r < n.length; r++) {
                            const s = o.getComputedStyle(t, null);
                            if ((s ? s.getPropertyValue(e) : null) === n[r]) return !0;
                        }
                }
                return !1;
            };
        },
        Ko = (e) => (t) => $o(t) && t.hasAttribute(e),
        Go = (e) => $o(e) && e.hasAttribute("data-mce-bogus"),
        Yo = (e) => $o(e) && "TABLE" === e.tagName,
        Xo = (e) => (t) => {
            if ($o(t)) {
                if (t.contentEditable === e) return !0;
                if (t.getAttribute("data-mce-contenteditable") === e) return !0;
            }
            return !1;
        },
        Qo = Vo(["textarea", "input"]),
        Jo = jo(3),
        Zo = jo(4),
        er = jo(7),
        tr = jo(8),
        nr = jo(9),
        or = jo(11),
        rr = qo("br"),
        sr = qo("img"),
        ar = Xo("true"),
        ir = Xo("false"),
        lr = Vo(["td", "th"]),
        dr = Vo(["td", "th", "caption"]),
        cr = Vo(["video", "audio", "object", "embed"]),
        ur = qo("li"),
        mr = qo("details"),
        fr = qo("summary"),
        gr = "\ufeff",
        pr = "\xa0",
        hr = (e) => e === gr,
        br = ((e, t) => {
            const n = (t) => (e(t) ? I.from(t.dom.nodeValue) : I.none());
            return {
                get: (t) => {
                    if (!e(t)) throw new Error("Can only get text value of a text node");
                    return n(t).getOr("");
                },
                getOption: n,
                set: (t, n) => {
                    if (!e(t)) throw new Error("Can only set raw text value of a text node");
                    t.dom.nodeValue = n;
                },
            };
        })(Kt),
        vr = (e) => br.get(e),
        yr = (e) => br.getOption(e),
        Cr = ["pre"].concat(["h1", "h2", "h3", "h4", "h5", "h6"]),
        wr = (e) => {
            let t;
            return (n) => ((t = t || se(e, M)), ke(t, Ht(n)));
        },
        xr = wr([
            "article",
            "aside",
            "details",
            "div",
            "dt",
            "figcaption",
            "footer",
            "form",
            "fieldset",
            "header",
            "hgroup",
            "html",
            "main",
            "nav",
            "section",
            "summary",
            "body",
            "p",
            "dl",
            "multicol",
            "dd",
            "figure",
            "address",
            "center",
            "blockquote",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "listing",
            "xmp",
            "pre",
            "plaintext",
            "menu",
            "dir",
            "ul",
            "ol",
            "li",
            "hr",
            "table",
            "tbody",
            "thead",
            "tfoot",
            "th",
            "tr",
            "td",
            "caption",
        ]),
        kr = (e) => Wt(e) && !xr(e),
        Er = (e) => Wt(e) && "br" === Ht(e),
        Sr = wr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        _r = wr(["ul", "ol", "dl"]),
        Nr = wr(["li", "dd", "dt"]),
        Rr = wr(["thead", "tbody", "tfoot"]),
        Ar = wr(["td", "th"]),
        Or = wr(["pre", "script", "textarea", "style"]),
        Tr = wr(Cr),
        Br = (e) => Tr(e) || kr(e),
        Dr = () => {
            const e = bn("br");
            return Jt(e, "data-mce-bogus", "1"), e;
        },
        Pr = (e) => {
            Co(e), bo(e, Dr());
        },
        Lr = (e) => {
            Un(e).each((t) => {
                Bn(t).each((n) => {
                    xr(e) && Er(t) && xr(n) && wo(t);
                });
            });
        },
        Mr = gr,
        Ir = hr,
        Fr = (e) => e.replace(/\uFEFF/g, ""),
        Ur = $o,
        zr = Jo,
        jr = (e) => (zr(e) && (e = e.parentNode), Ur(e) && e.hasAttribute("data-mce-caret")),
        Hr = (e) => zr(e) && Ir(e.data),
        $r = (e) => jr(e) || Hr(e),
        qr = (e) => e.firstChild !== e.lastChild || !rr(e.firstChild),
        Vr = (e) => {
            const t = e.container();
            return !!Jo(t) && (t.data.charAt(e.offset()) === Mr || (e.isAtStart() && Hr(t.previousSibling)));
        },
        Wr = (e) => {
            const t = e.container();
            return !!Jo(t) && (t.data.charAt(e.offset() - 1) === Mr || (e.isAtEnd() && Hr(t.nextSibling)));
        },
        Kr = (e) => zr(e) && e.data[0] === Mr,
        Gr = (e) => zr(e) && e.data[e.data.length - 1] === Mr,
        Yr = (e) =>
            e && e.hasAttribute("data-mce-caret")
                ? (((e) => {
                      var t;
                      const n = e.getElementsByTagName("br"),
                          o = n[n.length - 1];
                      Go(o) && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o));
                  })(e),
                  e.removeAttribute("data-mce-caret"),
                  e.removeAttribute("data-mce-bogus"),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-mce-style"),
                  e.removeAttribute("_moz_abspos"),
                  e)
                : null,
        Xr = (e) => jr(e.startContainer),
        Qr = ar,
        Jr = ir,
        Zr = rr,
        es = Jo,
        ts = Vo(["script", "style", "textarea"]),
        ns = Vo(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        os = Vo(["table"]),
        rs = $r,
        ss = (e) => !rs(e) && (es(e) ? !ts(e.parentNode) : ns(e) || Zr(e) || os(e) || as(e)),
        as = (e) => !((e) => $o(e) && "true" === e.getAttribute("unselectable"))(e) && Jr(e),
        is = (e, t) =>
            ss(e) &&
            ((e, t) => {
                for (let n = e.parentNode; n && n !== t; n = n.parentNode) {
                    if (as(n)) return !1;
                    if (Qr(n)) return !0;
                }
                return !0;
            })(e, t),
        ls = /^[ \t\r\n]*$/,
        ds = (e) => ls.test(e),
        cs = (e) => {
            for (const t of e) if (!hr(t)) return !1;
            return !0;
        },
        us = (e) => "\n" === e || "\r" === e,
        ms = (e, t = 4, n = !0, o = !0) => {
            const r = ((e, t) => (t <= 0 ? "" : new Array(t + 1).join(" ")))(0, t),
                s = e.replace(/\t/g, r),
                a = X(
                    s,
                    (e, t) =>
                        ((e) => -1 !== " \f\t\v".indexOf(e))(t) || t === pr
                            ? e.pcIsSpace || ("" === e.str && n) || (e.str.length === s.length - 1 && o) || ((e, t) => t < e.length && t >= 0 && us(e[t]))(s, e.str.length + 1)
                                ? { pcIsSpace: !1, str: e.str + pr }
                                : { pcIsSpace: !0, str: e.str + " " }
                            : { pcIsSpace: us(t), str: e.str + t },
                    { pcIsSpace: !1, str: "" }
                );
            return a.str;
        },
        fs = (e, t) =>
            (ss(e) &&
                !((e, t) =>
                    Jo(e) &&
                    ds(e.data) &&
                    !((e, t) => {
                        const n = yn(t),
                            o = yn(e);
                        return Uo(o, "pre,code", O(En, n));
                    })(e, t))(e, t)) ||
            ((e) => $o(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id")))(e) ||
            gs(e),
        gs = Ko("data-mce-bookmark"),
        ps = Ko("data-mce-bogus"),
        hs = ("data-mce-bogus", "all", (e) => $o(e) && "all" === e.getAttribute("data-mce-bogus"));
    const bs = (e, t = !0) =>
            ((e, t) => {
                let n = 0;
                if (fs(e, e)) return !1;
                {
                    let o = e.firstChild;
                    if (!o) return !0;
                    const r = new zo(o, e);
                    do {
                        if (t) {
                            if (hs(o)) {
                                o = r.next(!0);
                                continue;
                            }
                            if (ps(o)) {
                                o = r.next();
                                continue;
                            }
                        }
                        if (rr(o)) n++, (o = r.next());
                        else {
                            if (fs(o, e)) return !1;
                            o = r.next();
                        }
                    } while (o);
                    return n <= 1;
                }
            })(e.dom, t),
        vs = "data-mce-block",
        ys = (e) => ((e) => G(me(e), (e) => !/[A-Z]/.test(e)))(e).join(","),
        Cs = (e, t) => (C(t.querySelector(e)) ? (t.setAttribute(vs, "true"), "inline-boundary" === t.getAttribute("data-mce-selected") && t.removeAttribute("data-mce-selected"), !0) : (t.removeAttribute(vs), !1)),
        ws = (e, t) => {
            const n = ys(e.getTransparentElements()),
                o = ys(e.getBlockElements());
            return G(t.querySelectorAll(n), (e) => Cs(o, e));
        },
        xs = (e, t) => {
            var n;
            const o = t ? "lastChild" : "firstChild";
            for (let t = e[o]; t; t = t[o]) if (bs(yn(t))) return void (null === (n = t.parentNode) || void 0 === n || n.removeChild(t));
        },
        ks = (e, t, n) => {
            const o = e.getBlockElements(),
                r = yn(t),
                s = (e) => Ht(e) in o,
                a = (e) => En(e, r);
            V(ko(n), (t) => {
                Qn(t, s, a).each((n) => {
                    const o = ((t, o) => G(Mn(t), (t) => s(t) && !e.isValidChild(Ht(n), Ht(t))))(t);
                    if (o.length > 0) {
                        const t = On(n);
                        V(o, (e) => {
                            Qn(e, s, a).each((t) => {
                                ((e, t) => {
                                    const n = document.createRange(),
                                        o = e.parentNode;
                                    if (o) {
                                        n.setStartBefore(e), n.setEndBefore(t);
                                        const r = n.extractContents();
                                        xs(r, !0), n.setStartAfter(t), n.setEndAfter(e);
                                        const s = n.extractContents();
                                        xs(s, !1), bs(yn(r)) || o.insertBefore(r, e), bs(yn(t)) || o.insertBefore(t, e), bs(yn(s)) || o.insertBefore(s, e), o.removeChild(e);
                                    }
                                })(t.dom, e.dom);
                            });
                        }),
                            t.each((t) => ws(e, t.dom));
                    }
                });
            });
        },
        Es = (e, t) => {
            const n = ws(e, t);
            ks(e, t, n),
                ((e, t, n) => {
                    V([...n, ...(As(e, t) ? [t] : [])], (t) =>
                        V(Fo(yn(t), t.nodeName.toLowerCase()), (t) => {
                            Os(e, t.dom) && xo(t);
                        })
                    );
                })(e, t, n);
        },
        Ss = (e, t) => {
            if (Rs(e, t)) {
                const n = ys(e.getBlockElements());
                Cs(n, t);
            }
        },
        _s = (e) => e.hasAttribute(vs),
        Ns = (e, t) => ke(e.getTransparentElements(), t),
        Rs = (e, t) => $o(t) && Ns(e, t.nodeName),
        As = (e, t) => Rs(e, t) && _s(t),
        Os = (e, t) => Rs(e, t) && !_s(t),
        Ts = (e, t) => 1 === t.type && Ns(e, t.name) && m(t.attr(vs)),
        Bs = xt().browser,
        Ds = (e) => J(e, Wt),
        Ps = (e, t) => e.children && H(e.children, t),
        Ls = (e, t = {}) => {
            let n = 0;
            const o = {},
                r = yn(e),
                s = Nn(r),
                a = (e) =>
                    new Promise((a, i) => {
                        let l;
                        const d = Dt._addCacheSuffix(e),
                            c = ((e) => xe(o, e).getOrThunk(() => ({ id: "mce-u" + n++, passed: [], failed: [], count: 0 })))(d);
                        (o[d] = c), c.count++;
                        const u = (e, t) => {
                                V(e, P), (c.status = t), (c.passed = []), (c.failed = []), l && ((l.onload = null), (l.onerror = null), (l = null));
                            },
                            m = () => u(c.passed, 2),
                            f = () => u(c.failed, 3);
                        if ((a && c.passed.push(a), i && c.failed.push(i), 1 === c.status)) return;
                        if (2 === c.status) return void m();
                        if (3 === c.status) return void f();
                        c.status = 1;
                        const g = bn("link", s.dom);
                        var p;
                        Zt(g, { rel: "stylesheet", type: "text/css", id: c.id }),
                            t.contentCssCors && Jt(g, "crossOrigin", "anonymous"),
                            t.referrerPolicy && Jt(g, "referrerpolicy", t.referrerPolicy),
                            (l = g.dom),
                            (l.onload = m),
                            (l.onerror = f),
                            (p = g),
                            bo(Vn(r), p),
                            Jt(g, "href", d);
                    }),
                i = (e) => {
                    const t = Dt._addCacheSuffix(e);
                    xe(o, t).each((e) => {
                        0 == --e.count &&
                            (delete o[t],
                            ((e) => {
                                const t = Vn(r);
                                eo(t, "#" + e).each(wo);
                            })(e.id));
                    });
                };
            return {
                load: a,
                loadAll: (e) =>
                    Promise.allSettled(q(e, (e) => a(e).then(N(e)))).then((e) => {
                        const t = K(e, (e) => "fulfilled" === e.status);
                        return t.fail.length > 0 ? Promise.reject(q(t.fail, (e) => e.reason)) : q(t.pass, (e) => e.value);
                    }),
                unload: i,
                unloadAll: (e) => {
                    V(e, (e) => {
                        i(e);
                    });
                },
                _setReferrerPolicy: (e) => {
                    t.referrerPolicy = e;
                },
                _setContentCssCors: (e) => {
                    t.contentCssCors = e;
                },
            };
        },
        Ms = (() => {
            const e = new WeakMap();
            return {
                forElement: (t, n) => {
                    const o = qn(t).dom;
                    return I.from(e.get(o)).getOrThunk(() => {
                        const t = Ls(o, n);
                        return e.set(o, t), t;
                    });
                },
            };
        })(),
        Is = (e, t) => C(e) && (fs(e, t) || kr(yn(e))),
        Fs = (e) => ((e) => "span" === e.nodeName.toLowerCase())(e) && "bookmark" === e.getAttribute("data-mce-type"),
        Us = (e, t, n) => {
            var o;
            const r = n || t;
            if ($o(t) && Fs(t)) return t;
            const s = t.childNodes;
            for (let t = s.length - 1; t >= 0; t--) Us(e, s[t], r);
            if ($o(t)) {
                const e = t.childNodes;
                1 === e.length && Fs(e[0]) && (null === (o = t.parentNode) || void 0 === o || o.insertBefore(e[0], t));
            }
            return (
                ((e) => or(e) || nr(e))(t) ||
                    fs(t, r) ||
                    ((e) => !!$o(e) && e.childNodes.length > 0)(t) ||
                    ((e, t) =>
                        Jo(e) &&
                        e.data.length > 0 &&
                        ((e, t) => {
                            const n = new zo(e, t).prev(!1),
                                o = new zo(e, t).next(!1),
                                r = v(n) || Is(n, t),
                                s = v(o) || Is(o, t);
                            return r && s;
                        })(e, t))(t, r) ||
                    e.remove(t),
                t
            );
        },
        zs = Dt.makeMap,
        js = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Hs = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        $s = /[<>&\"\']/g,
        qs = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        Vs = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178",
        },
        Ws = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" },
        Ks = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" },
        Gs = (e, t) => {
            const n = {};
            if (e) {
                const o = e.split(",");
                t = t || 10;
                for (let e = 0; e < o.length; e += 2) {
                    const r = String.fromCharCode(parseInt(o[e], t));
                    if (!Ws[r]) {
                        const t = "&" + o[e + 1] + ";";
                        (n[r] = t), (n[t] = r);
                    }
                }
                return n;
            }
        },
        Ys = Gs(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
        ),
        Xs = (e, t) => e.replace(t ? js : Hs, (e) => Ws[e] || e),
        Qs = (e, t) => e.replace(t ? js : Hs, (e) => (e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Ws[e] || "&#" + e.charCodeAt(0) + ";")),
        Js = (e, t, n) => {
            const o = n || Ys;
            return e.replace(t ? js : Hs, (e) => Ws[e] || o[e] || e);
        },
        Zs = {
            encodeRaw: Xs,
            encodeAllRaw: (e) => ("" + e).replace($s, (e) => Ws[e] || e),
            encodeNumeric: Qs,
            encodeNamed: Js,
            getEncodeFunc: (e, t) => {
                const n = Gs(t) || Ys,
                    o = zs(e.replace(/\+/g, ","));
                return o.named && o.numeric
                    ? (e, t) =>
                          e.replace(t ? js : Hs, (e) => (void 0 !== Ws[e] ? Ws[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"))
                    : o.named
                    ? t
                        ? (e, t) => Js(e, t, n)
                        : Js
                    : o.numeric
                    ? Qs
                    : Xs;
            },
            decode: (e) =>
                e.replace(qs, (e, t) =>
                    t
                        ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535
                            ? ((t -= 65536), String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                            : Vs[t] || String.fromCharCode(t)
                        : Ks[e] ||
                          Ys[e] ||
                          ((e) => {
                              const t = bn("div").dom;
                              return (t.innerHTML = e), t.textContent || t.innerText || e;
                          })(e)
                ),
        },
        ea = (e, t) => ((e = Dt.trim(e)) ? e.split(t || " ") : []),
        ta = (e) => new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$"),
        na = {},
        oa = Dt.makeMap,
        ra = Dt.each,
        sa = Dt.extend,
        aa = Dt.explode,
        ia = (e, t = {}) => {
            const n = oa(e, " ", oa(e.toUpperCase(), " "));
            return sa(n, t);
        },
        la = (e) => ia("td th li dt dd figcaption caption details summary", e.getTextBlockElements()),
        da = (e, t) => {
            if (e) {
                const n = {};
                return (
                    m(e) && (e = { "*": e }),
                    ra(e, (e, o) => {
                        n[o] = n[o.toUpperCase()] = "map" === t ? oa(e, /[, ]/) : aa(e, /[, ]/);
                    }),
                    n
                );
            }
        },
        ca = (e = {}) => {
            var t;
            const n = {},
                o = {};
            let r = [];
            const s = {},
                a = {},
                i = (t, n, o) => {
                    const r = e[t];
                    if (r) return oa(r, /[, ]/, oa(r.toUpperCase(), /[, ]/));
                    {
                        let e = na[t];
                        return e || ((e = ia(n, o)), (na[t] = e)), e;
                    }
                },
                l = null !== (t = e.schema) && void 0 !== t ? t : "html5",
                d = ((e) => {
                    const { globalAttributes: t, phrasingContent: n, flowContent: o } = ((e) => {
                            let t, n, o, r;
                            return (
                                (t = "id accesskey class dir lang style tabindex title role"),
                                (n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                                (o = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                                "html4" !== e &&
                                    ((t += " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                                    (n += " article aside details dialog figure main header footer hgroup section nav a ins del canvas map"),
                                    (o += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                                "html5-strict" !== e && ((t += " xml:lang"), (o = [o, "acronym applet basefont big font strike tt"].join(" ")), (n = [n, "center dir isindex noframes"].join(" ")), (r = [n, o].join(" "))),
                                (r = r || [n, o].join(" ")),
                                { globalAttributes: t, blockContent: n, phrasingContent: o, flowContent: r }
                            );
                        })(e),
                        r = {},
                        s = (e, n = "", o = "") => {
                            const s = ea(o),
                                a = ea(e);
                            let i = a.length;
                            for (; i--; ) {
                                const e = ea([t, n].join(" "));
                                r[a[i]] = { attributes: se(e, N({})), attributesOrder: e, children: se(s, N({})) };
                            }
                        },
                        a = (e, t) => {
                            const n = ea(e),
                                o = ea(t);
                            let s = n.length;
                            for (; s--; ) {
                                const e = r[n[s]];
                                for (let t = 0, n = o.length; t < n; t++) (e.attributes[o[t]] = {}), e.attributesOrder.push(o[t]);
                            }
                        };
                    return (
                        "html5-strict" !== e &&
                            (V(ea("acronym applet basefont big font strike tt"), (e) => {
                                s(e, "", n);
                            }),
                            V(ea("center dir isindex noframes"), (e) => {
                                s(e, "", o);
                            })),
                        s("html", "manifest", "head body"),
                        s("head", "", "base command link meta noscript script style title"),
                        s("title hr noscript br"),
                        s("base", "href target"),
                        s("link", "href rel media hreflang type sizes hreflang"),
                        s("meta", "name http-equiv content charset"),
                        s("style", "media type scoped"),
                        s("script", "src async defer type charset"),
                        s("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", o),
                        s("dd div", "", o),
                        s("address dt caption", "", "html4" === e ? n : o),
                        s("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n),
                        s("blockquote", "cite", o),
                        s("ol", "reversed start type", "li"),
                        s("ul", "", "li"),
                        s("li", "value", o),
                        s("dl", "", "dt dd"),
                        s("a", "href target rel media hreflang type", "html4" === e ? n : o),
                        s("q", "cite", n),
                        s("ins del", "cite datetime", o),
                        s("img", "src sizes srcset alt usemap ismap width height"),
                        s("iframe", "src name width height", o),
                        s("embed", "src type width height"),
                        s("object", "data type typemustmatch name usemap form width height", [o, "param"].join(" ")),
                        s("param", "name value"),
                        s("map", "name", [o, "area"].join(" ")),
                        s("area", "alt coords shape href target rel media hreflang type"),
                        s("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")),
                        s("colgroup", "span", "col"),
                        s("col", "span"),
                        s("tbody thead tfoot", "", "tr"),
                        s("tr", "", "td th"),
                        s("td", "colspan rowspan headers", o),
                        s("th", "colspan rowspan headers scope abbr", o),
                        s("form", "accept-charset action autocomplete enctype method name novalidate target", o),
                        s("fieldset", "disabled form name", [o, "legend"].join(" ")),
                        s("label", "form for", n),
                        s(
                            "input",
                            "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                        ),
                        s("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? o : n),
                        s("select", "disabled form multiple name required size", "option optgroup"),
                        s("optgroup", "disabled label", "option"),
                        s("option", "disabled label selected value"),
                        s("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"),
                        s("menu", "type label", [o, "li"].join(" ")),
                        s("noscript", "", o),
                        "html4" !== e &&
                            (s("wbr"),
                            s("ruby", "", [n, "rt rp"].join(" ")),
                            s("figcaption", "", o),
                            s("mark rt rp summary bdi", "", n),
                            s("canvas", "width height", o),
                            s("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [o, "track source"].join(" ")),
                            s("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [o, "track source"].join(" ")),
                            s("picture", "", "img source"),
                            s("source", "src srcset type media sizes"),
                            s("track", "kind src srclang label default"),
                            s("datalist", "", [n, "option"].join(" ")),
                            s("article section nav aside main header footer", "", o),
                            s("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                            s("figure", "", [o, "figcaption"].join(" ")),
                            s("time", "datetime", n),
                            s("dialog", "open", o),
                            s("command", "type label icon disabled checked radiogroup command"),
                            s("output", "for form name", n),
                            s("progress", "value max", n),
                            s("meter", "value min max low high optimum", n),
                            s("details", "open", [o, "summary"].join(" ")),
                            s("keygen", "autofocus challenge disabled form keytype name")),
                        "html5-strict" !== e &&
                            (a("script", "language xml:space"),
                            a("style", "xml:space"),
                            a("object", "declare classid code codebase codetype archive standby align border hspace vspace"),
                            a("embed", "align name hspace vspace"),
                            a("param", "valuetype type"),
                            a("a", "charset name rev shape coords"),
                            a("br", "clear"),
                            a("applet", "codebase archive code object alt name width height align hspace vspace"),
                            a("img", "name longdesc align border hspace vspace"),
                            a("iframe", "longdesc frameborder marginwidth marginheight scrolling align"),
                            a("font basefont", "size color face"),
                            a("input", "usemap align"),
                            a("select"),
                            a("textarea"),
                            a("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                            a("ul", "type compact"),
                            a("li", "type"),
                            a("ol dl menu dir", "compact"),
                            a("pre", "width xml:space"),
                            a("hr", "align noshade size width"),
                            a("isindex", "prompt"),
                            a("table", "summary width frame rules cellspacing cellpadding align bgcolor"),
                            a("col", "width align char charoff valign"),
                            a("colgroup", "width align char charoff valign"),
                            a("thead", "align char charoff valign"),
                            a("tr", "align char charoff valign bgcolor"),
                            a("th", "axis align char charoff valign nowrap bgcolor width height"),
                            a("form", "accept"),
                            a("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"),
                            a("tfoot", "align char charoff valign"),
                            a("tbody", "align char charoff valign"),
                            a("area", "nohref"),
                            a("body", "background bgcolor text link vlink alink")),
                        "html4" !== e &&
                            (a("input button select textarea", "autofocus"),
                            a("input textarea", "placeholder"),
                            a("a", "download"),
                            a("link script img", "crossorigin"),
                            a("img", "loading"),
                            a("iframe", "sandbox seamless allow allowfullscreen loading")),
                        "html4" !== e &&
                            V([r.video, r.audio], (e) => {
                                delete e.children.audio, delete e.children.video;
                            }),
                        V(ea("a form meter progress dfn"), (e) => {
                            r[e] && delete r[e].children[e];
                        }),
                        delete r.caption.children.table,
                        delete r.script,
                        r
                    );
                })(l);
            !1 === e.verify_html && (e.valid_elements = "*[*]");
            const c = da(e.valid_styles),
                u = da(e.invalid_styles, "map"),
                m = da(e.valid_classes, "map"),
                f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
                g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
                p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
                h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),
                b = "td th iframe video audio object script code",
                v = i("non_empty_elements", b + " pre", p),
                y = i("move_caret_before_on_enter_elements", b + " table", p),
                C = i("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
                w = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", C),
                x = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp"),
                k = i("transparent_elements", "a ins del canvas map");
            ra("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), (e) => {
                a[e] = new RegExp("</" + e + "[^>]*>", "gi");
            });
            const E = (e) => {
                    const t = I.from(n["@"]),
                        o = /[*?+]/;
                    V(
                        ((e, t) => {
                            const n = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/;
                            return te(ea(t, ","), (t) => {
                                const o = n.exec(t);
                                if (o) {
                                    const t = o[1],
                                        n = o[2],
                                        r = o[3],
                                        s = o[4],
                                        a = o[5],
                                        i = { attributes: {}, attributesOrder: [] };
                                    if (
                                        (e.each((e) =>
                                            ((e, t) => {
                                                ge(e.attributes, (e, n) => {
                                                    t.attributes[n] = e;
                                                }),
                                                    t.attributesOrder.push(...e.attributesOrder);
                                            })(e, i)
                                        ),
                                        "#" === t ? (i.paddEmpty = !0) : "-" === t && (i.removeEmpty = !0),
                                        "!" === s && (i.removeEmptyAttrs = !0),
                                        a &&
                                            ((e, t) => {
                                                const n = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
                                                    o = /[*?+]/,
                                                    { attributes: r, attributesOrder: s } = t;
                                                V(ea(e, "|"), (e) => {
                                                    const a = n.exec(e);
                                                    if (a) {
                                                        const e = {},
                                                            n = a[1],
                                                            i = a[2].replace(/[\\:]:/g, ":"),
                                                            l = a[3],
                                                            d = a[4];
                                                        if (("!" === n && ((t.attributesRequired = t.attributesRequired || []), t.attributesRequired.push(i), (e.required = !0)), "-" === n))
                                                            return delete r[i], void s.splice(Dt.inArray(s, i), 1);
                                                        if (
                                                            (l &&
                                                                ("=" === l
                                                                    ? ((t.attributesDefault = t.attributesDefault || []), t.attributesDefault.push({ name: i, value: d }), (e.defaultValue = d))
                                                                    : "~" === l
                                                                    ? ((t.attributesForced = t.attributesForced || []), t.attributesForced.push({ name: i, value: d }), (e.forcedValue = d))
                                                                    : "<" === l && (e.validValues = Dt.makeMap(d, "?"))),
                                                            o.test(i))
                                                        ) {
                                                            const n = e;
                                                            (t.attributePatterns = t.attributePatterns || []), (n.pattern = ta(i)), t.attributePatterns.push(n);
                                                        } else r[i] || s.push(i), (r[i] = e);
                                                    }
                                                });
                                            })(a, i),
                                        r && (i.outputName = n),
                                        "@" === n)
                                    ) {
                                        if (!e.isNone()) return [];
                                        e = I.some(i);
                                    }
                                    return [r ? { name: n, element: i, aliasName: r } : { name: n, element: i }];
                                }
                                return [];
                            });
                        })(t, null != e ? e : ""),
                        ({ name: e, element: t, aliasName: s }) => {
                            if ((s && (n[s] = t), o.test(e))) {
                                const n = t;
                                (n.pattern = ta(e)), r.push(n);
                            } else n[e] = t;
                        }
                    );
                },
                S = (e) => {
                    (r = []),
                        V(me(n), (e) => {
                            delete n[e];
                        }),
                        E(e);
                },
                _ = (e) => {
                    delete na.text_block_elements,
                        delete na.block_elements,
                        V(
                            ((e) => {
                                const t = /^(~)?(.+)$/;
                                return te(ea(e, ","), (e) => {
                                    const n = t.exec(e);
                                    if (n) {
                                        const e = "~" === n[1];
                                        return [{ inline: e, cloneName: e ? "span" : "div", name: n[2] }];
                                    }
                                    return [];
                                });
                            })(null != e ? e : ""),
                            ({ inline: e, name: t, cloneName: r }) => {
                                if (((o[t] = o[r]), (s[t] = r), (v[t.toUpperCase()] = {}), (v[t] = {}), e || ((w[t.toUpperCase()] = {}), (w[t] = {})), !n[t])) {
                                    let e = n[r];
                                    (e = sa({}, e)), delete e.removeEmptyAttrs, delete e.removeEmpty, (n[t] = e);
                                }
                                ge(o, (e, n) => {
                                    e[r] && ((o[n] = e = sa({}, o[n])), (e[t] = e[r]));
                                });
                            }
                        );
                },
                R = (e) => {
                    V(
                        ((e) => {
                            const t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                            return te(ea(e, ","), (e) => {
                                const n = t.exec(e);
                                if (n) {
                                    const e = n[1],
                                        t = e ? ((e) => ("-" === e ? "remove" : "add"))(e) : "replace";
                                    return [{ operation: t, name: n[2], validChildren: ea(n[3], "|") }];
                                }
                                return [];
                            });
                        })(null != e ? e : ""),
                        ({ operation: e, name: t, validChildren: n }) => {
                            const r = "replace" === e ? { "#comment": {} } : o[t];
                            V(n, (t) => {
                                "remove" === e ? delete r[t] : (r[t] = {});
                            }),
                                (o[t] = r);
                        }
                    );
                },
                A = (e) => {
                    const t = n[e];
                    if (t) return t;
                    let o = r.length;
                    for (; o--; ) {
                        const t = r[o];
                        if (t.pattern.test(e)) return t;
                    }
                };
            e.valid_elements
                ? (S(e.valid_elements),
                  ra(d, (e, t) => {
                      o[t] = e.children;
                  }))
                : (ra(d, (e, t) => {
                      (n[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }), (o[t] = e.children);
                  }),
                  ra(ea("strong/b em/i"), (e) => {
                      const t = ea(e, "/");
                      n[t[1]].outputName = t[0];
                  }),
                  ra(x, (t, o) => {
                      n[o] && (e.padd_empty_block_inline_children && (n[o].paddInEmptyBlock = !0), (n[o].removeEmpty = !0));
                  }),
                  ra(ea("ol ul blockquote a table tbody"), (e) => {
                      n[e] && (n[e].removeEmpty = !0);
                  }),
                  ra(ea("p h1 h2 h3 h4 h5 h6 th td pre div address caption li summary"), (e) => {
                      n[e] && (n[e].paddEmpty = !0);
                  }),
                  ra(ea("span"), (e) => {
                      n[e].removeEmptyAttrs = !0;
                  })),
                _(e.custom_elements),
                R(e.valid_children),
                E(e.extended_valid_elements),
                R("+ol[ul|ol],+ul[ul|ol]"),
                ra({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, (e, t) => {
                    n[t] && (n[t].parentsRequired = ea(e));
                }),
                e.invalid_elements &&
                    ra(aa(e.invalid_elements), (e) => {
                        n[e] && delete n[e];
                    }),
                A("span") || E("span[!data-mce-type|*]");
            const O = N(c),
                T = N(u),
                B = N(m),
                D = N(h),
                P = N(w),
                L = N(C),
                M = N(x),
                F = N(Object.seal(p)),
                U = N(g),
                z = N(v),
                j = N(y),
                H = N(f),
                $ = N(k),
                q = N(Object.seal(a)),
                W = N(s);
            return {
                type: l,
                children: o,
                elements: n,
                getValidStyles: O,
                getValidClasses: B,
                getBlockElements: P,
                getInvalidStyles: T,
                getVoidElements: F,
                getTextBlockElements: L,
                getTextInlineElements: M,
                getBoolAttrs: D,
                getElementRule: A,
                getSelfClosingElements: U,
                getNonEmptyElements: z,
                getMoveCaretBeforeOnEnterElements: j,
                getWhitespaceElements: H,
                getTransparentElements: $,
                getSpecialElements: q,
                isValidChild: (e, t) => {
                    const n = o[e.toLowerCase()];
                    return !(!n || !n[t.toLowerCase()]);
                },
                isValid: (e, t) => {
                    const n = A(e);
                    if (n) {
                        if (!t) return !0;
                        {
                            if (n.attributes[t]) return !0;
                            const e = n.attributePatterns;
                            if (e) {
                                let n = e.length;
                                for (; n--; ) if (e[n].pattern.test(t)) return !0;
                            }
                        }
                    }
                    return !1;
                },
                getCustomElements: W,
                addValidElements: E,
                setValidElements: S,
                addCustomElements: _,
                addValidChildren: R,
            };
        },
        ua = (e = {}, t) => {
            const n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                o = /\s*([^:]+):\s*([^;]+);?/g,
                r = /\s+$/,
                s = {};
            let a, i;
            const l = gr;
            t && ((a = t.getValidStyles()), (i = t.getInvalidStyles()));
            const d = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
            for (let e = 0; e < d.length; e++) (s[d[e]] = l + e), (s[l + e] = d[e]);
            const c = {
                parse: (t) => {
                    const a = {};
                    let i = !1;
                    const d = e.url_converter,
                        u = e.url_converter_scope || c,
                        m = (e, t, n) => {
                            const o = a[e + "-top" + t];
                            if (!o) return;
                            const r = a[e + "-right" + t];
                            if (!r) return;
                            const s = a[e + "-bottom" + t];
                            if (!s) return;
                            const i = a[e + "-left" + t];
                            if (!i) return;
                            const l = [o, r, s, i];
                            let d = l.length - 1;
                            for (; d-- && l[d] === l[d + 1]; );
                            (d > -1 && n) || ((a[e + t] = -1 === d ? l[0] : l.join(" ")), delete a[e + "-top" + t], delete a[e + "-right" + t], delete a[e + "-bottom" + t], delete a[e + "-left" + t]);
                        },
                        f = (e) => {
                            const t = a[e];
                            if (!t) return;
                            const n = t.indexOf(",") > -1 ? [t] : t.split(" ");
                            let o = n.length;
                            for (; o--; ) if (n[o] !== n[0]) return !1;
                            return (a[e] = n[0]), !0;
                        },
                        g = (e) => ((i = !0), s[e]),
                        p = (e, t) => (i && (e = e.replace(/\uFEFF[0-9]/g, (e) => s[e])), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e),
                        h = (e) => String.fromCharCode(parseInt(e.slice(1), 16)),
                        b = (e) => e.replace(/\\[0-9a-f]+/gi, h),
                        v = (t, n, o, r, s, a) => {
                            if ((s = s || a)) return "'" + (s = p(s)).replace(/\'/g, "\\'") + "'";
                            if (((n = p(n || o || r || "")), !e.allow_script_urls)) {
                                const t = n.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(t)) return "";
                                if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(t)) return "";
                            }
                            return d && (n = d.call(u, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')";
                        };
                    if (t) {
                        let s;
                        for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, g).replace(/\"[^\"]+\"|\'[^\']+\'/g, (e) => e.replace(/[;:]/g, g)); (s = o.exec(t)); ) {
                            o.lastIndex = s.index + s[0].length;
                            let t = s[1].replace(r, "").toLowerCase(),
                                d = s[2].replace(r, "");
                            if (t && d) {
                                if (((t = b(t)), (d = b(d)), -1 !== t.indexOf(l) || -1 !== t.indexOf('"'))) continue;
                                if (!e.allow_script_urls && ("behavior" === t || /expression\s*\(|\/\*|\*\//.test(d))) continue;
                                "font-weight" === t && "700" === d ? (d = "bold") : ("color" !== t && "background-color" !== t) || (d = d.toLowerCase()), (d = d.replace(n, v)), (a[t] = i ? p(d, !0) : d);
                            }
                        }
                        m("border", "", !0),
                            m("border", "-width"),
                            m("border", "-color"),
                            m("border", "-style"),
                            m("padding", ""),
                            m("margin", ""),
                            "border",
                            (C = "border-style"),
                            (w = "border-color"),
                            f((y = "border-width")) && f(C) && f(w) && ((a.border = a[y] + " " + a[C] + " " + a[w]), delete a[y], delete a[C], delete a[w]),
                            "medium none" === a.border && delete a.border,
                            "none" === a["border-image"] && delete a["border-image"];
                    }
                    var y, C, w;
                    return a;
                },
                serialize: (e, t) => {
                    let n = "";
                    const o = (t, o) => {
                        const r = o[t];
                        if (r)
                            for (let t = 0, o = r.length; t < o; t++) {
                                const o = r[t],
                                    s = e[o];
                                s && (n += (n.length > 0 ? " " : "") + o + ": " + s + ";");
                            }
                    };
                    return (
                        t && a
                            ? (o("*", a), o(t, a))
                            : ge(e, (e, o) => {
                                  e &&
                                      ((e, t) => {
                                          if (!i || !t) return !0;
                                          let n = i["*"];
                                          return !((n && n[e]) || ((n = i[t]), n && n[e]));
                                      })(o, t) &&
                                      (n += (n.length > 0 ? " " : "") + o + ": " + e + ";");
                              }),
                        n
                    );
                },
            };
            return c;
        },
        ma = { keyLocation: !0, layerX: !0, layerY: !0, returnValue: !0, webkitMovementX: !0, webkitMovementY: !0, keyIdentifier: !0, mozPressure: !0 },
        fa = (e, t) => {
            const n = null != t ? t : {};
            for (const t in e) ke(ma, t) || (n[t] = e[t]);
            return C(e.composedPath) && (n.composedPath = () => e.composedPath()), C(e.getModifierState) && (n.getModifierState = (t) => e.getModifierState(t)), n;
        },
        ga = (e, t, n, o) => {
            var r;
            const s = fa(t, o);
            return (
                (s.type = e),
                y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n),
                ((e) => y(e.preventDefault) || ((e) => e instanceof Event || w(e.initEvent))(e))(t) &&
                    ((s.preventDefault = () => {
                        (s.defaultPrevented = !0), (s.isDefaultPrevented = M), w(t.preventDefault) && t.preventDefault();
                    }),
                    (s.stopPropagation = () => {
                        (s.cancelBubble = !0), (s.isPropagationStopped = M), w(t.stopPropagation) && t.stopPropagation();
                    }),
                    (s.stopImmediatePropagation = () => {
                        (s.isImmediatePropagationStopped = M), s.stopPropagation();
                    }),
                    ((e) => e.isDefaultPrevented === M || e.isDefaultPrevented === L)(s) ||
                        ((s.isDefaultPrevented = !0 === s.defaultPrevented ? M : L), (s.isPropagationStopped = !0 === s.cancelBubble ? M : L), (s.isImmediatePropagationStopped = L))),
                s
            );
        },
        pa = /^(?:mouse|contextmenu)|click/,
        ha = (e, t, n, o) => {
            e.addEventListener(t, n, o || !1);
        },
        ba = (e, t, n, o) => {
            e.removeEventListener(t, n, o || !1);
        },
        va = (e, t) => {
            const n = ga(e.type, e, document, t);
            if (((e) => C(e) && pa.test(e.type))(e) && v(e.pageX) && !v(e.clientX)) {
                const t = n.target.ownerDocument || document,
                    o = t.documentElement,
                    r = t.body,
                    s = n;
                (s.pageX = e.clientX + ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) - ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
                    (s.pageY = e.clientY + ((o && o.scrollTop) || (r && r.scrollTop) || 0) - ((o && o.clientTop) || (r && r.clientTop) || 0));
            }
            return n;
        },
        ya = (e, t, n) => {
            const o = e.document,
                r = { type: "ready" };
            if (n.domLoaded) return void t(r);
            const s = () => {
                ba(e, "DOMContentLoaded", s), ba(e, "load", s), n.domLoaded || ((n.domLoaded = !0), t(r)), (e = null);
            };
            "complete" === o.readyState || ("interactive" === o.readyState && o.body) ? s() : ha(e, "DOMContentLoaded", s), n.domLoaded || ha(e, "load", s);
        };
    class Ca {
        constructor() {
            (this.domLoaded = !1), (this.events = {}), (this.count = 1), (this.expando = "mce-data-" + (+new Date()).toString(32)), (this.hasFocusIn = "onfocusin" in document.documentElement), (this.count = 1);
        }
        bind(e, t, n, o) {
            const r = this;
            let s;
            const a = window,
                i = (e) => {
                    r.executeHandlers(va(e || a.event), l);
                };
            if (!e || Jo(e) || tr(e)) return n;
            let l;
            e[r.expando] ? (l = e[r.expando]) : ((l = r.count++), (e[r.expando] = l), (r.events[l] = {})), (o = o || e);
            const d = t.split(" ");
            let c = d.length;
            for (; c--; ) {
                let t = d[c],
                    u = i,
                    m = !1,
                    f = !1;
                "DOMContentLoaded" === t && (t = "ready"),
                    r.domLoaded && "ready" === t && "complete" === e.readyState
                        ? n.call(o, va({ type: t }))
                        : (r.hasFocusIn ||
                              ("focusin" !== t && "focusout" !== t) ||
                              ((m = !0),
                              (f = "focusin" === t ? "focus" : "blur"),
                              (u = (e) => {
                                  const t = va(e || a.event);
                                  (t.type = "focus" === t.type ? "focusin" : "focusout"), r.executeHandlers(t, l);
                              })),
                          (s = r.events[l][t]),
                          s
                              ? "ready" === t && r.domLoaded
                                  ? n(va({ type: t }))
                                  : s.push({ func: n, scope: o })
                              : ((r.events[l][t] = s = [{ func: n, scope: o }]), (s.fakeName = f), (s.capture = m), (s.nativeHandler = u), "ready" === t ? ya(e, u, r) : ha(e, f || t, u, m)));
            }
            return (e = s = null), n;
        }
        unbind(e, t, n) {
            if (!e || Jo(e) || tr(e)) return this;
            const o = e[this.expando];
            if (o) {
                let r = this.events[o];
                if (t) {
                    const o = t.split(" ");
                    let s = o.length;
                    for (; s--; ) {
                        const t = o[s],
                            a = r[t];
                        if (a) {
                            if (n) {
                                let e = a.length;
                                for (; e--; )
                                    if (a[e].func === n) {
                                        const n = a.nativeHandler,
                                            o = a.fakeName,
                                            s = a.capture,
                                            i = a.slice(0, e).concat(a.slice(e + 1));
                                        (i.nativeHandler = n), (i.fakeName = o), (i.capture = s), (r[t] = i);
                                    }
                            }
                            (n && 0 !== a.length) || (delete r[t], ba(e, a.fakeName || t, a.nativeHandler, a.capture));
                        }
                    }
                } else
                    ge(r, (t, n) => {
                        ba(e, t.fakeName || n, t.nativeHandler, t.capture);
                    }),
                        (r = {});
                for (const e in r) if (ke(r, e)) return this;
                delete this.events[o];
                try {
                    delete e[this.expando];
                } catch (t) {
                    e[this.expando] = null;
                }
            }
            return this;
        }
        fire(e, t, n) {
            return this.dispatch(e, t, n);
        }
        dispatch(e, t, n) {
            if (!e || Jo(e) || tr(e)) return this;
            const o = va({ type: t, target: e }, n);
            do {
                const t = e[this.expando];
                t && this.executeHandlers(o, t), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow);
            } while (e && !o.isPropagationStopped());
            return this;
        }
        clean(e) {
            if (!e || Jo(e) || tr(e)) return this;
            if ((e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)) {
                this.unbind(e);
                const t = e.getElementsByTagName("*");
                let n = t.length;
                for (; n--; ) (e = t[n])[this.expando] && this.unbind(e);
            }
            return this;
        }
        destroy() {
            this.events = {};
        }
        cancel(e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
        }
        executeHandlers(e, t) {
            const n = this.events[t],
                o = n && n[e.type];
            if (o)
                for (let t = 0, n = o.length; t < n; t++) {
                    const n = o[t];
                    if ((n && !1 === n.func.call(n.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped())) return;
                }
        }
    }
    Ca.Event = new Ca();
    const wa = Dt.each,
        xa = Dt.grep,
        ka = "data-mce-style",
        Ea = Dt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "),
        Sa = (e, t, n) => {
            y(n) || "" === n ? on(e, t) : Jt(e, t, n);
        },
        _a = (e) => e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        Na = (e, t) => {
            let n = 0;
            if (e)
                for (let o = e.nodeType, r = e.previousSibling; r; r = r.previousSibling) {
                    const e = r.nodeType;
                    (!t || !Jo(r) || (e !== o && r.data.length)) && (n++, (o = e));
                }
            return n;
        },
        Ra = (e, t) => {
            const n = en(t, "style"),
                o = e.serialize(e.parse(n), Ht(t));
            Sa(t, ka, o);
        },
        Aa = (e, t, n) => {
            const o = _a(t);
            y(n) || "" === n ? fo(e, o) : ao(e, o, ((e, t) => (x(e) ? (ke(Ea, t) ? e + "" : e + "px") : e))(n, o));
        },
        Oa = (e, t = {}) => {
            const n = {},
                o = window,
                r = {};
            let s = 0;
            const a = Ms.forElement(yn(e), { contentCssCors: t.contentCssCors, referrerPolicy: t.referrerPolicy }),
                i = [],
                l = t.schema ? t.schema : ca({}),
                d = ua({ url_converter: t.url_converter, url_converter_scope: t.url_converter_scope }, t.schema),
                c = t.ownEvents ? new Ca() : Ca.Event,
                u = l.getBlockElements(),
                f = (t) => (t && e && m(t) ? e.getElementById(t) : t),
                g = (e) => {
                    const t = f(e);
                    return C(t) ? yn(t) : null;
                },
                h = (e, t, n = "") => {
                    let o;
                    const r = g(e);
                    if (C(r) && Wt(r)) {
                        const e = Y[t];
                        o = e && e.get ? e.get(r.dom, t) : en(r, t);
                    }
                    return C(o) ? o : n;
                },
                b = (e) => {
                    const t = f(e);
                    return y(t) ? [] : t.attributes;
                },
                v = (e, n, o) => {
                    T(e, (e) => {
                        if ($o(e)) {
                            const r = yn(e),
                                s = "" === o ? null : o,
                                a = en(r, n),
                                i = Y[n];
                            i && i.set ? i.set(r.dom, s, n) : Sa(r, n, s), a !== s && t.onSetAttrib && t.onSetAttrib({ attrElm: r.dom, attrName: n, attrValue: s });
                        }
                    });
                },
                x = () => t.root_element || e.body,
                k = (t, n) =>
                    ((e, t, n) => {
                        let o = 0,
                            r = 0;
                        const s = e.ownerDocument;
                        if (((n = n || e), t)) {
                            if (n === e && t.getBoundingClientRect && "static" === lo(yn(e), "position")) {
                                const n = t.getBoundingClientRect();
                                return (o = n.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft), (r = n.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop), { x: o, y: r };
                            }
                            let a = t;
                            for (; a && a !== n && a.nodeType && !Ps(a, n); ) {
                                const e = a;
                                (o += e.offsetLeft || 0), (r += e.offsetTop || 0), (a = e.offsetParent);
                            }
                            for (a = t.parentNode; a && a !== n && a.nodeType && !Ps(a, n); ) (o -= a.scrollLeft || 0), (r -= a.scrollTop || 0), (a = a.parentNode);
                            r += ((e) =>
                                Bs.isFirefox() && "table" === Ht(e)
                                    ? Ds(Mn(e))
                                          .filter((e) => "caption" === Ht(e))
                                          .bind((e) =>
                                              Ds(Ln(e)).map((t) => {
                                                  const n = t.dom.offsetTop,
                                                      o = e.dom.offsetTop,
                                                      r = e.dom.offsetHeight;
                                                  return n <= o ? -r : 0;
                                              })
                                          )
                                          .getOr(0)
                                    : 0)(yn(t));
                        }
                        return { x: o, y: r };
                    })(e.body, f(t), n),
                S = (e, t, n) => {
                    const o = f(e);
                    if (!y(o) && $o(o)) return n ? lo(yn(o), _a(t)) : ("float" === (t = t.replace(/-(\D)/g, (e, t) => t.toUpperCase())) && (t = "cssFloat"), o.style ? o.style[t] : void 0);
                },
                _ = (e) => {
                    const t = f(e);
                    if (!t) return { w: 0, h: 0 };
                    let n = S(t, "width"),
                        o = S(t, "height");
                    return (n && -1 !== n.indexOf("px")) || (n = "0"), (o && -1 !== o.indexOf("px")) || (o = "0"), { w: parseInt(n, 10) || t.offsetWidth || t.clientWidth, h: parseInt(o, 10) || t.offsetHeight || t.clientHeight };
                },
                R = (e, t) => {
                    if (!e) return !1;
                    const n = p(e) ? e : [e];
                    return $(n, (e) => xn(yn(e), t));
                },
                A = (e, t, n, o) => {
                    const r = [];
                    let s = f(e);
                    o = void 0 === o;
                    const a = n || ("BODY" !== x().nodeName ? x().parentNode : null);
                    if (m(t))
                        if ("*" === t) t = $o;
                        else {
                            const e = t;
                            t = (t) => R(t, e);
                        }
                    for (; s && !(s === a || y(s.nodeType) || nr(s) || or(s)); ) {
                        if (!t || t(s)) {
                            if (!o) return [s];
                            r.push(s);
                        }
                        s = s.parentNode;
                    }
                    return o ? r : null;
                },
                O = (e, t, n) => {
                    let o = t;
                    if (e) {
                        m(t) && (o = (e) => R(e, t));
                        for (let t = e[n]; t; t = t[n]) if (w(o) && o(t)) return t;
                    }
                    return null;
                },
                T = function (e, t, n) {
                    const o = null != n ? n : this;
                    if (p(e)) {
                        const n = [];
                        return (
                            wa(e, (e, r) => {
                                const s = f(e);
                                s && n.push(t.call(o, s, r));
                            }),
                            n
                        );
                    }
                    {
                        const n = f(e);
                        return !!n && t.call(o, n);
                    }
                },
                B = (e, t) => {
                    T(e, (e) => {
                        ge(t, (t, n) => {
                            v(e, n, t);
                        });
                    });
                },
                D = (e, t) => {
                    T(e, (e) => {
                        const n = yn(e);
                        So(n, t);
                    });
                },
                P = (t, n, o, r, s) =>
                    T(t, (t) => {
                        const a = m(n) ? e.createElement(n) : n;
                        return C(o) && B(a, o), r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && D(a, r)), s ? a : t.appendChild(a);
                    }),
                L = (t, n, o) => P(e.createElement(t), t, n, o, !0),
                M = Zs.encodeAllRaw,
                I = (e, t) =>
                    T(e, (e) => {
                        const n = yn(e);
                        return (
                            t &&
                                V(Mn(n), (e) => {
                                    Kt(e) && 0 === e.dom.length ? wo(e) : go(n, e);
                                }),
                            wo(n),
                            n.dom
                        );
                    }),
                F = (e, t, n) => {
                    T(e, (e) => {
                        if ($o(e)) {
                            const o = yn(e),
                                r = t.split(" ");
                            V(r, (e) => {
                                C(n)
                                    ? (n ? un : fn)(o, e)
                                    : ((e, t) => {
                                          const n = an(e) ? e.dom.classList.toggle(t) : ((e, t) => (H(ln(e), t) ? cn(e, t) : dn(e, t)))(e, t);
                                          mn(e);
                                      })(o, e);
                            });
                        }
                    });
                },
                U = (e, t, n) =>
                    T(t, (o) => {
                        var r;
                        const s = p(t) ? e.cloneNode(!0) : e;
                        return (
                            n &&
                                wa(xa(o.childNodes), (e) => {
                                    s.appendChild(e);
                                }),
                            null === (r = o.parentNode) || void 0 === r || r.replaceChild(s, o),
                            o
                        );
                    }),
                z = (e) => {
                    if ($o(e)) {
                        const t = "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");
                        if (h(e, "name") || h(e, "data-mce-bookmark") || t) return !0;
                    }
                    return !1;
                },
                j = () => e.createRange(),
                q = (n, r, s, a) => {
                    if (p(n)) {
                        let e = n.length;
                        const t = [];
                        for (; e--; ) t[e] = q(n[e], r, s, a);
                        return t;
                    }
                    return !t.collect || (n !== e && n !== o) || i.push([n, r, s, a]), c.bind(n, r, s, a || G);
                },
                W = (t, n, r) => {
                    if (p(t)) {
                        let e = t.length;
                        const o = [];
                        for (; e--; ) o[e] = W(t[e], n, r);
                        return o;
                    }
                    if (i.length > 0 && (t === e || t === o)) {
                        let e = i.length;
                        for (; e--; ) {
                            const [o, s, a] = i[e];
                            t !== o || (n && n !== s) || (r && r !== a) || c.unbind(o, s, a);
                        }
                    }
                    return c.unbind(t, n, r);
                },
                K = (e) => {
                    if (e && $o(e)) {
                        const t = e.getAttribute("data-mce-contenteditable");
                        return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null;
                    }
                    return null;
                },
                G = {
                    doc: e,
                    settings: t,
                    win: o,
                    files: r,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: a,
                    boundEvents: i,
                    styles: d,
                    schema: l,
                    events: c,
                    isBlock: (e) => (m(e) ? ke(u, e) : $o(e) && (ke(u, e.nodeName) || As(l, e))),
                    root: null,
                    clone: (e, t) => e.cloneNode(t),
                    getRoot: x,
                    getViewPort: (e) => {
                        const t = Mo(e);
                        return { x: t.x, y: t.y, w: t.width, h: t.height };
                    },
                    getRect: (e) => {
                        const t = f(e),
                            n = k(t),
                            o = _(t);
                        return { x: n.x, y: n.y, w: o.w, h: o.h };
                    },
                    getSize: _,
                    getParent: (e, t, n) => {
                        const o = A(e, t, n, !1);
                        return o && o.length > 0 ? o[0] : null;
                    },
                    getParents: A,
                    get: f,
                    getNext: (e, t) => O(e, t, "nextSibling"),
                    getPrev: (e, t) => O(e, t, "previousSibling"),
                    select: (n, o) => {
                        var r, s;
                        const a = null !== (s = null !== (r = f(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e;
                        return w(a.querySelectorAll) ? ce(a.querySelectorAll(n)) : [];
                    },
                    is: R,
                    add: P,
                    create: L,
                    createHTML: (e, t, n = "") => {
                        let o = "<" + e;
                        for (const e in t) Ee(t, e) && (o += " " + e + '="' + M(t[e]) + '"');
                        return Ye(n) && ke(l.getVoidElements(), e) ? o + " />" : o + ">" + n + "</" + e + ">";
                    },
                    createFragment: (t) => {
                        const n = e.createElement("div"),
                            o = e.createDocumentFragment();
                        let r;
                        for (o.appendChild(n), t && (n.innerHTML = t); (r = n.firstChild); ) o.appendChild(r);
                        return o.removeChild(n), o;
                    },
                    remove: I,
                    setStyle: (e, n, o) => {
                        T(e, (e) => {
                            const r = yn(e);
                            Aa(r, n, o), t.update_styles && Ra(d, r);
                        });
                    },
                    getStyle: S,
                    setStyles: (e, n) => {
                        T(e, (e) => {
                            const o = yn(e);
                            ge(n, (e, t) => {
                                Aa(o, t, e);
                            }),
                                t.update_styles && Ra(d, o);
                        });
                    },
                    removeAllAttribs: (e) =>
                        T(e, (e) => {
                            const t = e.attributes;
                            for (let n = t.length - 1; n >= 0; n--) e.removeAttributeNode(t.item(n));
                        }),
                    setAttrib: v,
                    setAttribs: B,
                    getAttrib: h,
                    getPos: k,
                    parseStyle: (e) => d.parse(e),
                    serializeStyle: (e, t) => d.serialize(e, t),
                    addStyle: (t) => {
                        if (G !== Oa.DOM && e === document) {
                            if (n[t]) return;
                            n[t] = !0;
                        }
                        let o = e.getElementById("mceDefaultStyles");
                        if (!o) {
                            (o = e.createElement("style")), (o.id = "mceDefaultStyles"), (o.type = "text/css");
                            const t = e.head;
                            t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o);
                        }
                        o.styleSheet ? (o.styleSheet.cssText += t) : o.appendChild(e.createTextNode(t));
                    },
                    loadCSS: (e) => {
                        e || (e = ""),
                            V(e.split(","), (e) => {
                                (r[e] = !0), a.load(e).catch(E);
                            });
                    },
                    addClass: (e, t) => {
                        F(e, t, !0);
                    },
                    removeClass: (e, t) => {
                        F(e, t, !1);
                    },
                    hasClass: (e, t) => {
                        const n = g(e),
                            o = t.split(" ");
                        return C(n) && ne(o, (e) => gn(n, e));
                    },
                    toggleClass: F,
                    show: (e) => {
                        T(e, (e) => fo(yn(e), "display"));
                    },
                    hide: (e) => {
                        T(e, (e) => ao(yn(e), "display", "none"));
                    },
                    isHidden: (e) => {
                        const t = g(e);
                        return C(t) && Pt(uo(t, "display"), "none");
                    },
                    uniqueId: (e) => (e || "mce_") + s++,
                    setHTML: D,
                    getOuterHTML: (e) => {
                        const t = g(e);
                        return C(t)
                            ? $o(t.dom)
                                ? t.dom.outerHTML
                                : ((e) => {
                                      const t = bn("div"),
                                          n = yn(e.dom.cloneNode(!0));
                                      return bo(t, n), Eo(t);
                                  })(t)
                            : "";
                    },
                    setOuterHTML: (e, t) => {
                        T(e, (e) => {
                            $o(e) && (e.outerHTML = t);
                        });
                    },
                    decode: Zs.decode,
                    encode: M,
                    insertAfter: (e, t) => {
                        const n = f(t);
                        return T(e, (e) => {
                            const t = null == n ? void 0 : n.parentNode,
                                o = null == n ? void 0 : n.nextSibling;
                            return t && (o ? t.insertBefore(e, o) : t.appendChild(e)), e;
                        });
                    },
                    replace: U,
                    rename: (e, t) => {
                        if (e.nodeName !== t.toUpperCase()) {
                            const n = L(t);
                            return (
                                wa(b(e), (t) => {
                                    v(n, t.nodeName, h(e, t.nodeName));
                                }),
                                U(n, e, !0),
                                n
                            );
                        }
                        return e;
                    },
                    findCommonAncestor: (e, t) => {
                        let n = e;
                        for (; n; ) {
                            let e = t;
                            for (; e && n !== e; ) e = e.parentNode;
                            if (n === e) break;
                            n = n.parentNode;
                        }
                        return !n && e.ownerDocument ? e.ownerDocument.documentElement : n;
                    },
                    run: T,
                    getAttribs: b,
                    isEmpty: (e, t, n) => {
                        let o = 0;
                        if (z(e)) return !1;
                        const r = e.firstChild;
                        if (r) {
                            const s = new zo(r, e),
                                a = l ? l.getWhitespaceElements() : {},
                                i = t || (l ? l.getNonEmptyElements() : null);
                            let d = r;
                            do {
                                if ($o(d)) {
                                    const e = d.getAttribute("data-mce-bogus");
                                    if (e) {
                                        d = s.next("all" === e);
                                        continue;
                                    }
                                    const t = d.nodeName.toLowerCase();
                                    if (i && i[t]) {
                                        if ("br" === t) {
                                            o++, (d = s.next());
                                            continue;
                                        }
                                        return !1;
                                    }
                                    if (z(d)) return !1;
                                }
                                if (tr(d)) return !1;
                                if (Jo(d) && !ds(d.data) && (!(null == n ? void 0 : n.includeZwsp) || !cs(d.data))) return !1;
                                if (Jo(d) && d.parentNode && a[d.parentNode.nodeName] && ds(d.data)) return !1;
                                d = s.next();
                            } while (d);
                        }
                        return o <= 1;
                    },
                    createRng: j,
                    nodeIndex: Na,
                    split: (e, t, n) => {
                        let o,
                            r,
                            s = j();
                        if (e && t && e.parentNode && t.parentNode) {
                            const a = e.parentNode;
                            return (
                                s.setStart(a, Na(e)),
                                s.setEnd(t.parentNode, Na(t)),
                                (o = s.extractContents()),
                                (s = j()),
                                s.setStart(t.parentNode, Na(t) + 1),
                                s.setEnd(a, Na(e) + 1),
                                (r = s.extractContents()),
                                a.insertBefore(Us(G, o), e),
                                n ? a.insertBefore(n, e) : a.insertBefore(t, e),
                                a.insertBefore(Us(G, r), e),
                                I(e),
                                n || t
                            );
                        }
                    },
                    bind: q,
                    unbind: W,
                    fire: (e, t, n) => c.dispatch(e, t, n),
                    dispatch: (e, t, n) => c.dispatch(e, t, n),
                    getContentEditable: K,
                    getContentEditableParent: (e) => {
                        const t = x();
                        let n = null;
                        for (let o = e; o && o !== t && ((n = K(o)), null === n); o = o.parentNode);
                        return n;
                    },
                    isEditable: (e) => {
                        if (C(e)) {
                            const t = $o(e) ? e : e.parentElement;
                            return C(t) && no(yn(t));
                        }
                        return !1;
                    },
                    destroy: () => {
                        if (i.length > 0) {
                            let e = i.length;
                            for (; e--; ) {
                                const [t, n, o] = i[e];
                                c.unbind(t, n, o);
                            }
                        }
                        ge(r, (e, t) => {
                            a.unload(t), delete r[t];
                        });
                    },
                    isChildOf: (e, t) => e === t || t.contains(e),
                    dumpRng: (e) => "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset,
                },
                Y = ((e, t, n) => {
                    const o = t.keep_values,
                        r = {
                            set: (e, o, r) => {
                                const s = yn(e);
                                w(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), String(o), r, e)), Sa(s, "data-mce-" + r, o), Sa(s, r, o);
                            },
                            get: (e, t) => {
                                const n = yn(e);
                                return en(n, "data-mce-" + t) || en(n, t);
                            },
                        },
                        s = {
                            style: {
                                set: (t, n) => {
                                    const r = yn(t);
                                    o && Sa(r, ka, n), on(r, "style"), m(n) && io(r, e.parse(n));
                                },
                                get: (t) => {
                                    const n = yn(t),
                                        o = en(n, ka) || en(n, "style");
                                    return e.serialize(e.parse(o), Ht(n));
                                },
                            },
                        };
                    return o && (s.href = s.src = r), s;
                })(d, t, N(G));
            return G;
        };
    (Oa.DOM = Oa(document)), (Oa.nodeIndex = Na);
    const Ta = Oa.DOM;
    class Ba {
        constructor(e = {}) {
            (this.states = {}), (this.queue = []), (this.scriptLoadedCallbacks = {}), (this.queueLoadedCallbacks = []), (this.loading = !1), (this.settings = e);
        }
        _setReferrerPolicy(e) {
            this.settings.referrerPolicy = e;
        }
        loadScript(e) {
            return new Promise((t, n) => {
                const o = Ta;
                let r;
                const s = () => {
                        o.remove(a), r && (r.onerror = r.onload = r = null);
                    },
                    a = o.uniqueId();
                (r = document.createElement("script")),
                    (r.id = a),
                    (r.type = "text/javascript"),
                    (r.src = Dt._addCacheSuffix(e)),
                    this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy),
                    (r.onload = () => {
                        s(), t();
                    }),
                    (r.onerror = () => {
                        s(), n("Failed to load script: " + e);
                    }),
                    (document.getElementsByTagName("head")[0] || document.body).appendChild(r);
            });
        }
        isDone(e) {
            return 2 === this.states[e];
        }
        markDone(e) {
            this.states[e] = 2;
        }
        add(e) {
            const t = this;
            return (
                t.queue.push(e),
                void 0 === t.states[e] && (t.states[e] = 0),
                new Promise((n, o) => {
                    t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []), t.scriptLoadedCallbacks[e].push({ resolve: n, reject: o });
                })
            );
        }
        load(e) {
            return this.add(e);
        }
        remove(e) {
            delete this.states[e], delete this.scriptLoadedCallbacks[e];
        }
        loadQueue() {
            const e = this.queue;
            return (this.queue = []), this.loadScripts(e);
        }
        loadScripts(e) {
            const t = this,
                n = (e, n) => {
                    xe(t.scriptLoadedCallbacks, n).each((t) => {
                        V(t, (t) => t[e](n));
                    }),
                        delete t.scriptLoadedCallbacks[n];
                },
                o = (e) => {
                    const t = G(e, (e) => "rejected" === e.status);
                    return t.length > 0 ? Promise.reject(te(t, ({ reason: e }) => (p(e) ? e : [e]))) : Promise.resolve();
                },
                r = (e) =>
                    Promise.allSettled(
                        q(e, (e) =>
                            2 === t.states[e]
                                ? (n("resolve", e), Promise.resolve())
                                : 3 === t.states[e]
                                ? (n("reject", e), Promise.reject(e))
                                : ((t.states[e] = 1),
                                  t.loadScript(e).then(
                                      () => {
                                          (t.states[e] = 2), n("resolve", e);
                                          const s = t.queue;
                                          return s.length > 0 ? ((t.queue = []), r(s).then(o)) : Promise.resolve();
                                      },
                                      () => ((t.states[e] = 3), n("reject", e), Promise.reject(e))
                                  ))
                        )
                    ),
                s = (e) => (
                    (t.loading = !0),
                    r(e).then((e) => {
                        t.loading = !1;
                        const n = t.queueLoadedCallbacks.shift();
                        return I.from(n).each(P), o(e);
                    })
                ),
                a = Se(e);
            return t.loading
                ? new Promise((e, n) => {
                      t.queueLoadedCallbacks.push(() => {
                          s(a).then(e, n);
                      });
                  })
                : s(a);
        }
    }
    Ba.ScriptLoader = new Ba();
    const Da = (e) => {
            let t = e;
            return {
                get: () => t,
                set: (e) => {
                    t = e;
                },
            };
        },
        Pa = {},
        La = Da("en"),
        Ma = () => xe(Pa, La.get()),
        Ia = {
            getData: () => pe(Pa, (e) => ({ ...e })),
            setCode: (e) => {
                e && La.set(e);
            },
            getCode: () => La.get(),
            add: (e, t) => {
                let n = Pa[e];
                n || (Pa[e] = n = {});
                const o = q(me(t), (e) => e.toLowerCase());
                ge(t, (e, r) => {
                    const s = r.toLowerCase();
                    s !== r &&
                    ((e, t) => {
                        const n = e.indexOf(t);
                        return -1 !== n && e.indexOf(t, n + 1) > n;
                    })(o, s)
                        ? (ke(t, s) || (n[s] = e), (n[r] = e))
                        : (n[s] = e);
                });
            },
            translate: (e) => {
                const t = Ma().getOr({}),
                    n = (e) => (w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e),
                    o = (e) => "" === e || null == e,
                    r = (e) => {
                        const o = n(e);
                        return ke(t, o) ? n(t[o]) : xe(t, o.toLowerCase()).map(n).getOr(o);
                    },
                    s = (e) => e.replace(/{context:\w+}$/, "");
                if (o(e)) return "";
                if (f((a = e)) && ke(a, "raw")) return n(e.raw);
                var a;
                if (((e) => p(e) && e.length > 1)(e)) {
                    const t = e.slice(1);
                    return s(r(e[0]).replace(/\{([0-9]+)\}/g, (e, o) => (ke(t, o) ? n(t[o]) : e)));
                }
                return s(r(e));
            },
            isRtl: () =>
                Ma()
                    .bind((e) => xe(e, "_dir"))
                    .exists((e) => "rtl" === e),
            hasCode: (e) => ke(Pa, e),
        },
        Fa = () => {
            const e = [],
                t = {},
                n = {},
                o = [],
                r = (e, t) => {
                    const n = G(o, (n) => n.name === e && n.state === t);
                    V(n, (e) => e.resolve());
                },
                s = (e) => ke(t, e),
                a = (e, n) => {
                    const o = Ia.getCode();
                    !o || (n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",")) || Ba.ScriptLoader.add(t[e] + "/langs/" + o + ".js");
                },
                i = (e, t = "added") =>
                    ("added" === t && ((e) => ke(n, e))(e)) || ("loaded" === t && s(e))
                        ? Promise.resolve()
                        : new Promise((n) => {
                              o.push({ name: e, state: t, resolve: n });
                          });
            return {
                items: e,
                urls: t,
                lookup: n,
                get: (e) => {
                    if (n[e]) return n[e].instance;
                },
                requireLangPack: (e, t) => {
                    !1 !== Fa.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then(() => a(e, t)));
                },
                add: (t, o) => (e.push(o), (n[t] = { instance: o }), r(t, "added"), o),
                remove: (e) => {
                    delete t[e], delete n[e];
                },
                createUrl: (e, t) => (m(t) ? (m(e) ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix }) : t),
                load: (e, o) => {
                    if (t[e]) return Promise.resolve();
                    let s = m(o) ? o : o.prefix + o.resource + o.suffix;
                    0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = Fa.baseURL + "/" + s), (t[e] = s.substring(0, s.lastIndexOf("/")));
                    const a = () => (r(e, "loaded"), Promise.resolve());
                    return n[e] ? a() : Ba.ScriptLoader.add(s).then(a);
                },
                waitFor: i,
            };
        };
    (Fa.languageLoad = !0), (Fa.baseURL = ""), (Fa.PluginManager = Fa()), (Fa.ThemeManager = Fa()), (Fa.ModelManager = Fa());
    const Ua = (e) => {
            const t = Da(I.none()),
                n = () => t.get().each((e) => clearInterval(e));
            return {
                clear: () => {
                    n(), t.set(I.none());
                },
                isSet: () => t.get().isSome(),
                get: () => t.get(),
                set: (o) => {
                    n(), t.set(I.some(setInterval(o, e)));
                },
            };
        },
        za = () => {
            const e = ((e) => {
                const t = Da(I.none()),
                    n = () => t.get().each(e);
                return {
                    clear: () => {
                        n(), t.set(I.none());
                    },
                    isSet: () => t.get().isSome(),
                    get: () => t.get(),
                    set: (e) => {
                        n(), t.set(I.some(e));
                    },
                };
            })(E);
            return { ...e, on: (t) => e.get().each(t) };
        },
        ja = (e, t) => {
            let n = null;
            return {
                cancel: () => {
                    h(n) || (clearTimeout(n), (n = null));
                },
                throttle: (...o) => {
                    h(n) &&
                        (n = setTimeout(() => {
                            (n = null), e.apply(null, o);
                        }, t));
                },
            };
        },
        Ha = (e, t) => {
            let n = null;
            const o = () => {
                h(n) || (clearTimeout(n), (n = null));
            };
            return {
                cancel: o,
                throttle: (...r) => {
                    o(),
                        (n = setTimeout(() => {
                            (n = null), e.apply(null, r);
                        }, t));
                },
            };
        },
        $a = N("mce-annotation"),
        qa = N("data-mce-annotation"),
        Va = N("data-mce-annotation-uid"),
        Wa = N("data-mce-annotation-active"),
        Ka = N("data-mce-annotation-classes"),
        Ga = N("data-mce-annotation-attrs"),
        Ya = (e) => (t) => En(t, e),
        Xa = (e, t) => {
            const n = e.selection.getRng(),
                o = yn(n.startContainer),
                r = yn(e.getBody()),
                s = t.fold(
                    () => "." + $a(),
                    (e) => `[${qa()}="${e}"]`
                ),
                a = In(o, n.startOffset).getOr(o);
            return to(a, s, Ya(r)).bind((t) =>
                tn(t, `${Va()}`).bind((n) =>
                    tn(t, `${qa()}`).map((t) => {
                        const o = Ja(e, n);
                        return { uid: n, name: t, elements: o };
                    })
                )
            );
        },
        Qa = (e, t) => nn(e, "data-mce-bogus") || Uo(e, '[data-mce-bogus="all"]', Ya(t)),
        Ja = (e, t) => {
            const n = yn(e.getBody()),
                o = Fo(n, `[${Va()}="${t}"]`);
            return G(o, (e) => !Qa(e, n));
        },
        Za = (e, t) => {
            const n = yn(e.getBody()),
                o = Fo(n, `[${qa()}="${t}"]`),
                r = {};
            return (
                V(o, (e) => {
                    if (!Qa(e, n)) {
                        const t = en(e, Va()),
                            n = xe(r, t).getOr([]);
                        r[t] = n.concat([e]);
                    }
                }),
                r
            );
        };
    let ei = 0;
    const ti = (e) => {
            const t = new Date().getTime(),
                n = Math.floor(1e9 * Math.random());
            return ei++, e + "_" + n + ei + String(t);
        },
        ni = (e, t) => yn(e.dom.cloneNode(t)),
        oi = (e) => ni(e, !1),
        ri = (e) => ni(e, !0),
        si = (e, t, n = L) => {
            const o = new zo(e, t),
                r = (e) => {
                    let t;
                    do {
                        t = o[e]();
                    } while (t && !Jo(t) && !n(t));
                    return I.from(t).filter(Jo);
                };
            return { current: () => I.from(o.current()).filter(Jo), next: () => r("next"), prev: () => r("prev"), prev2: () => r("prev2") };
        },
        ai = (e, t) => {
            const n = t || ((t) => e.isBlock(t) || rr(t) || ir(t)),
                o = (e, t, n, r) => {
                    if (Jo(e)) {
                        const n = r(e, t, e.data);
                        if (-1 !== n) return I.some({ container: e, offset: n });
                    }
                    return n().bind((e) => o(e.container, e.offset, n, r));
                };
            return {
                backwards: (t, r, s, a) => {
                    const i = si(t, null != a ? a : e.getRoot(), n);
                    return o(t, r, () => i.prev().map((e) => ({ container: e, offset: e.length })), s).getOrNull();
                },
                forwards: (t, r, s, a) => {
                    const i = si(t, null != a ? a : e.getRoot(), n);
                    return o(t, r, () => i.next().map((e) => ({ container: e, offset: 0 })), s).getOrNull();
                },
            };
        },
        ii = Math.round,
        li = (e) => (e ? { left: ii(e.left), top: ii(e.top), bottom: ii(e.bottom), right: ii(e.right), width: ii(e.width), height: ii(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 }),
        di = (e, t) => ((e = li(e)), t || (e.left = e.left + e.width), (e.right = e.left), (e.width = 0), e),
        ci = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2,
        ui = (e, t) => {
            const n = Math.min(t.height / 2, e.height / 2);
            return e.bottom - n < t.top || (!(e.top > t.bottom) && ci(t.top - e.bottom, e, t));
        },
        mi = (e, t) => e.top > t.bottom || (!(e.bottom < t.top) && ci(t.bottom - e.top, e, t)),
        fi = (e, t, n) => {
            const o = Math.max(Math.min(t, e.left + e.width), e.left),
                r = Math.max(Math.min(n, e.top + e.height), e.top);
            return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r));
        },
        gi = (e) => {
            const t = e.startContainer,
                n = e.startOffset;
            return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
        },
        pi = (e, t) => {
            if ($o(e) && e.hasChildNodes()) {
                const n = e.childNodes,
                    o = ((e, t, n) => Math.min(Math.max(e, 0), n))(t, 0, n.length - 1);
                return n[o];
            }
            return e;
        },
        hi = new RegExp(
            "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
        ),
        bi = (e) => m(e) && e.charCodeAt(0) >= 768 && hi.test(e),
        vi = $o,
        yi = ss,
        Ci = Wo("display", "block table"),
        wi = Wo("float", "left right"),
        xi = ((...e) => (t) => {
            for (let n = 0; n < e.length; n++) if (!e[n](t)) return !1;
            return !0;
        })(vi, yi, T(wi)),
        ki = T(Wo("white-space", "pre pre-line pre-wrap")),
        Ei = Jo,
        Si = rr,
        _i = Oa.nodeIndex,
        Ni = (e, t) => (t < 0 && $o(e) && e.hasChildNodes() ? void 0 : pi(e, t)),
        Ri = (e) => (e ? e.createRange() : Oa.DOM.createRng()),
        Ai = (e) => m(e) && /[\r\n\t ]/.test(e),
        Oi = (e) => !!e.setStart && !!e.setEnd,
        Ti = (e) => {
            const t = e.startContainer,
                n = e.startOffset;
            if (Ai(e.toString()) && ki(t.parentNode) && Jo(t)) {
                const e = t.data;
                if (Ai(e[n - 1]) || Ai(e[n + 1])) return !0;
            }
            return !1;
        },
        Bi = (e) => 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom,
        Di = (e) => {
            var t;
            let n;
            const o = e.getClientRects();
            return (
                (n = o.length > 0 ? li(o[0]) : li(e.getBoundingClientRect())),
                !Oi(e) && Si(e) && Bi(n)
                    ? ((e) => {
                          const t = e.ownerDocument,
                              n = Ri(t),
                              o = t.createTextNode(pr),
                              r = e.parentNode;
                          r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
                          const s = li(n.getBoundingClientRect());
                          return r.removeChild(o), s;
                      })(e)
                    : Bi(n) &&
                      Oi(e) &&
                      null !==
                          (t = ((e) => {
                              const t = e.startContainer,
                                  n = e.endContainer,
                                  o = e.startOffset,
                                  r = e.endOffset;
                              if (t === n && Jo(n) && 0 === o && 1 === r) {
                                  const t = e.cloneRange();
                                  return t.setEndAfter(n), Di(t);
                              }
                              return null;
                          })(e)) &&
                      void 0 !== t
                    ? t
                    : n
            );
        },
        Pi = (e, t) => {
            const n = di(e, t);
            return (n.width = 1), (n.right = n.left + 1), n;
        },
        Li = (e, t, n) => {
            const o = () => (
                n ||
                    (n = ((e) => {
                        const t = [],
                            n = (e) => {
                                var n, o;
                                0 !== e.height && ((t.length > 0 && ((n = e), (o = t[t.length - 1]), n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right)) || t.push(e));
                            },
                            o = (e, t) => {
                                const o = Ri(e.ownerDocument);
                                if (t < e.data.length) {
                                    if (bi(e.data[t])) return;
                                    if (bi(e.data[t - 1]) && (o.setStart(e, t), o.setEnd(e, t + 1), !Ti(o))) return void n(Pi(Di(o), !1));
                                }
                                t > 0 && (o.setStart(e, t - 1), o.setEnd(e, t), Ti(o) || n(Pi(Di(o), !1))), t < e.data.length && (o.setStart(e, t), o.setEnd(e, t + 1), Ti(o) || n(Pi(Di(o), !0)));
                            },
                            r = e.container(),
                            s = e.offset();
                        if (Ei(r)) return o(r, s), t;
                        if (vi(r))
                            if (e.isAtEnd()) {
                                const e = Ni(r, s);
                                Ei(e) && o(e, e.data.length), xi(e) && !Si(e) && n(Pi(Di(e), !1));
                            } else {
                                const a = Ni(r, s);
                                if ((Ei(a) && o(a, 0), xi(a) && e.isAtEnd())) return n(Pi(Di(a), !1)), t;
                                const i = Ni(e.container(), e.offset() - 1);
                                xi(i) && !Si(i) && (Ci(i) || Ci(a) || !xi(a)) && n(Pi(Di(i), !1)), xi(a) && n(Pi(Di(a), !0));
                            }
                        return t;
                    })(Li(e, t))),
                n
            );
            return {
                container: N(e),
                offset: N(t),
                toRange: () => {
                    const n = Ri(e.ownerDocument);
                    return n.setStart(e, t), n.setEnd(e, t), n;
                },
                getClientRects: o,
                isVisible: () => o().length > 0,
                isAtStart: () => (Ei(e), 0 === t),
                isAtEnd: () => (Ei(e) ? t >= e.data.length : t >= e.childNodes.length),
                isEqual: (n) => n && e === n.container() && t === n.offset(),
                getNode: (n) => Ni(e, n ? t - 1 : t),
            };
        };
    (Li.fromRangeStart = (e) => Li(e.startContainer, e.startOffset)),
        (Li.fromRangeEnd = (e) => Li(e.endContainer, e.endOffset)),
        (Li.after = (e) => Li(e.parentNode, _i(e) + 1)),
        (Li.before = (e) => Li(e.parentNode, _i(e))),
        (Li.isAbove = (e, t) => Mt(le(t.getClientRects()), de(e.getClientRects()), ui).getOr(!1)),
        (Li.isBelow = (e, t) => Mt(de(t.getClientRects()), le(e.getClientRects()), mi).getOr(!1)),
        (Li.isAtStart = (e) => !!e && e.isAtStart()),
        (Li.isAtEnd = (e) => !!e && e.isAtEnd()),
        (Li.isTextPosition = (e) => !!e && Jo(e.container())),
        (Li.isElementPosition = (e) => !Li.isTextPosition(e));
    const Mi = (e, t) => {
            Jo(t) && 0 === t.data.length && e.remove(t);
        },
        Ii = (e, t, n) => {
            or(n)
                ? ((e, t, n) => {
                      const o = I.from(n.firstChild),
                          r = I.from(n.lastChild);
                      t.insertNode(n), o.each((t) => Mi(e, t.previousSibling)), r.each((t) => Mi(e, t.nextSibling));
                  })(e, t, n)
                : ((e, t, n) => {
                      t.insertNode(n), Mi(e, n.previousSibling), Mi(e, n.nextSibling);
                  })(e, t, n);
        },
        Fi = Jo,
        Ui = Go,
        zi = Oa.nodeIndex,
        ji = (e) => {
            const t = e.parentNode;
            return Ui(t) ? ji(t) : t;
        },
        Hi = (e) => (e ? Te(e.childNodes, (e, t) => (Ui(t) && "BR" !== t.nodeName ? (e = e.concat(Hi(t))) : e.push(t), e), []) : []),
        $i = (e) => (t) => e === t,
        qi = (e) =>
            (Fi(e) ? "text()" : e.nodeName.toLowerCase()) +
            "[" +
            ((e) => {
                let t, n;
                (t = Hi(ji(e))), (n = Be(t, $i(e), e)), (t = t.slice(0, n + 1));
                const o = Te(t, (e, n, o) => (Fi(n) && Fi(t[o - 1]) && e++, e), 0);
                return (t = Oe(t, Vo([e.nodeName]))), (n = Be(t, $i(e), e)), n - o;
            })(e) +
            "]",
        Vi = (e, t) => {
            let n,
                o = [],
                r = t.container(),
                s = t.offset();
            if (Fi(r))
                n = ((e, t) => {
                    let n = e;
                    for (; (n = n.previousSibling) && Fi(n); ) t += n.data.length;
                    return t;
                })(r, s);
            else {
                const e = r.childNodes;
                s >= e.length ? ((n = "after"), (s = e.length - 1)) : (n = "before"), (r = e[s]);
            }
            o.push(qi(r));
            let a = ((e, t, n) => {
                const o = [];
                for (let n = t.parentNode; n && n !== e; n = n.parentNode) o.push(n);
                return o;
            })(e, r);
            return (a = Oe(a, T(Go))), (o = o.concat(Ae(a, (e) => qi(e)))), o.reverse().join("/") + "," + n;
        },
        Wi = (e, t) => {
            if (!t) return null;
            const n = t.split(","),
                o = n[0].split("/"),
                r = n.length > 1 ? n[1] : "before",
                s = Te(
                    o,
                    (e, t) => {
                        const n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                        return n
                            ? ("text()" === n[1] && (n[1] = "#text"),
                              ((e, t, n) => {
                                  let o = Hi(e);
                                  return (o = Oe(o, (e, t) => !Fi(e) || !Fi(o[t - 1]))), (o = Oe(o, Vo([t]))), o[n];
                              })(e, n[1], parseInt(n[2], 10)))
                            : null;
                    },
                    e
                );
            if (!s) return null;
            if (!Fi(s) && s.parentNode) {
                let e;
                return (e = "after" === r ? zi(s) + 1 : zi(s)), Li(s.parentNode, e);
            }
            return ((e, t) => {
                let n = e,
                    o = 0;
                for (; Fi(n); ) {
                    const r = n.data.length;
                    if (t >= o && t <= o + r) {
                        (e = n), (t -= o);
                        break;
                    }
                    if (!Fi(n.nextSibling)) {
                        (e = n), (t = r);
                        break;
                    }
                    (o += r), (n = n.nextSibling);
                }
                return Fi(e) && t > e.data.length && (t = e.data.length), Li(e, t);
            })(s, parseInt(r, 10));
        },
        Ki = ir,
        Gi = (e, t, n, o, r) => {
            const s = r ? o.startContainer : o.endContainer;
            let a = r ? o.startOffset : o.endOffset;
            const i = [],
                l = e.getRoot();
            if (Jo(s))
                i.push(
                    n
                        ? ((e, t, n) => {
                              let o = e(t.data.slice(0, n)).length;
                              for (let n = t.previousSibling; n && Jo(n); n = n.previousSibling) o += e(n.data).length;
                              return o;
                          })(t, s, a)
                        : a
                );
            else {
                let t = 0;
                const o = s.childNodes;
                a >= o.length && o.length && ((t = 1), (a = Math.max(0, o.length - 1))), i.push(e.nodeIndex(o[a], n) + t);
            }
            for (let t = s; t && t !== l; t = t.parentNode) i.push(e.nodeIndex(t, n));
            return i;
        },
        Yi = (e, t, n) => {
            let o = 0;
            return Dt.each(e.select(t), (e) => ("all" === e.getAttribute("data-mce-bogus") ? void 0 : e !== n && void o++)), o;
        },
        Xi = (e, t) => {
            let n = t ? e.startContainer : e.endContainer,
                o = t ? e.startOffset : e.endOffset;
            if ($o(n) && "TR" === n.nodeName) {
                const r = n.childNodes;
                (n = r[Math.min(t ? o : o - 1, r.length - 1)]), n && ((o = t ? 0 : n.childNodes.length), t ? e.setStart(n, o) : e.setEnd(n, o));
            }
        },
        Qi = (e) => (Xi(e, !0), Xi(e, !1), e),
        Ji = (e, t) => {
            if ($o(e) && ((e = pi(e, t)), Ki(e))) return e;
            if ($r(e)) {
                Jo(e) && jr(e) && (e = e.parentNode);
                let t = e.previousSibling;
                if (Ki(t)) return t;
                if (((t = e.nextSibling), Ki(t))) return t;
            }
        },
        Zi = (e, t, n) => {
            const o = n.getNode(),
                r = n.getRng();
            if ("IMG" === o.nodeName || Ki(o)) {
                const e = o.nodeName;
                return { name: e, index: Yi(n.dom, e, o) };
            }
            const s = ((e) => Ji(e.startContainer, e.startOffset) || Ji(e.endContainer, e.endOffset))(r);
            if (s) {
                const e = s.tagName;
                return { name: e, index: Yi(n.dom, e, s) };
            }
            return ((e, t, n, o) => {
                const r = t.dom,
                    s = Gi(r, e, n, o, !0),
                    a = t.isForward(),
                    i = Xr(o) ? { isFakeCaret: !0 } : {};
                return t.isCollapsed() ? { start: s, forward: a, ...i } : { start: s, end: Gi(r, e, n, o, !1), forward: a, ...i };
            })(e, n, t, r);
        },
        el = (e, t, n) => {
            const o = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" };
            return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o);
        },
        tl = (e, t) => {
            const n = e.dom;
            let o = e.getRng();
            const r = n.uniqueId(),
                s = e.isCollapsed(),
                a = e.getNode(),
                i = a.nodeName,
                l = e.isForward();
            if ("IMG" === i) return { name: i, index: Yi(n, i, a) };
            const d = Qi(o.cloneRange());
            if (!s) {
                d.collapse(!1);
                const e = el(n, r + "_end", t);
                Ii(n, d, e);
            }
            (o = Qi(o)), o.collapse(!0);
            const c = el(n, r + "_start", t);
            return Ii(n, o, c), e.moveToBookmark({ id: r, keep: !0, forward: l }), { id: r, forward: l };
        },
        nl = O(Zi, R, !0),
        ol = (e) => {
            const t = (t) => t(e),
                n = N(e),
                o = () => r,
                r = {
                    tag: !0,
                    inner: e,
                    fold: (t, n) => n(e),
                    isValue: M,
                    isError: L,
                    map: (t) => sl.value(t(e)),
                    mapError: o,
                    bind: t,
                    exists: t,
                    forall: t,
                    getOr: n,
                    or: o,
                    getOrThunk: n,
                    orThunk: o,
                    getOrDie: n,
                    each: (t) => {
                        t(e);
                    },
                    toOptional: () => I.some(e),
                };
            return r;
        },
        rl = (e) => {
            const t = () => n,
                n = {
                    tag: !1,
                    inner: e,
                    fold: (t, n) => t(e),
                    isValue: L,
                    isError: M,
                    map: t,
                    mapError: (t) => sl.error(t(e)),
                    bind: t,
                    exists: L,
                    forall: M,
                    getOr: R,
                    or: R,
                    getOrThunk: D,
                    orThunk: D,
                    getOrDie: B(String(e)),
                    each: E,
                    toOptional: I.none,
                };
            return n;
        },
        sl = { value: ol, error: rl, fromOption: (e, t) => e.fold(() => rl(t), ol) },
        al = (e) => {
            if (!p(e)) throw new Error("cases must be an array");
            if (0 === e.length) throw new Error("there must be at least one case");
            const t = [],
                n = {};
            return (
                V(e, (o, r) => {
                    const s = me(o);
                    if (1 !== s.length) throw new Error("one and only one name per case");
                    const a = s[0],
                        i = o[a];
                    if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
                    if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
                    if (!p(i)) throw new Error("case arguments must be an array");
                    t.push(a),
                        (n[a] = (...n) => {
                            const o = n.length;
                            if (o !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o);
                            return {
                                fold: (...t) => {
                                    if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
                                    return t[r].apply(null, n);
                                },
                                match: (e) => {
                                    const o = me(e);
                                    if (t.length !== o.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(","));
                                    if (!ne(t, (e) => H(o, e))) throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", "));
                                    return e[a].apply(null, n);
                                },
                                log: (e) => {
                                    console.log(e, { constructors: t, constructor: a, params: n });
                                },
                            };
                        });
                }),
                n
            );
        };
    al([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]);
    const il = (e) => "inline-command" === e.type || "inline-format" === e.type,
        ll = (e) => "block-command" === e.type || "block-format" === e.type,
        dl = (e) => {
            const t = (t) => sl.error({ message: t, pattern: e }),
                n = (n, o, r) => {
                    if (void 0 !== e.format) {
                        let r;
                        if (p(e.format)) {
                            if (!ne(e.format, m)) return t(n + " pattern has non-string items in the `format` array");
                            r = e.format;
                        } else {
                            if (!m(e.format)) return t(n + " pattern has non-string `format` parameter");
                            r = [e.format];
                        }
                        return sl.value(o(r));
                    }
                    return void 0 !== e.cmd ? (m(e.cmd) ? sl.value(r(e.cmd, e.value)) : t(n + " pattern has non-string `cmd` parameter")) : t(n + " pattern is missing both `format` and `cmd` parameters");
                };
            if (!f(e)) return t("Raw pattern is not an object");
            if (!m(e.start)) return t("Raw pattern is missing `start` parameter");
            if (void 0 !== e.end) {
                if (!m(e.end)) return t("Inline pattern has non-string `end` parameter");
                if (0 === e.start.length && 0 === e.end.length) return t("Inline pattern has empty `start` and `end` parameters");
                let o = e.start,
                    r = e.end;
                return (
                    0 === r.length && ((r = o), (o = "")),
                    n(
                        "Inline",
                        (e) => ({ type: "inline-format", start: o, end: r, format: e }),
                        (e, t) => ({ type: "inline-command", start: o, end: r, cmd: e, value: t })
                    )
                );
            }
            return void 0 !== e.replacement
                ? m(e.replacement)
                    ? 0 === e.start.length
                        ? t("Replacement pattern has empty `start` parameter")
                        : sl.value({ type: "inline-command", start: "", end: e.start, cmd: "mceInsertContent", value: e.replacement })
                    : t("Replacement pattern has non-string `replacement` parameter")
                : 0 === e.start.length
                ? t("Block pattern has empty `start` parameter")
                : n(
                      "Block",
                      (t) => ({ type: "block-format", start: e.start, format: t[0] }),
                      (t, n) => ({ type: "block-command", start: e.start, cmd: t, value: n })
                  );
        },
        cl = (e) => G(e, ll),
        ul = (e) => G(e, il),
        ml = (e) => {
            const t = ((e) => {
                const t = [],
                    n = [];
                return (
                    V(e, (e) => {
                        e.fold(
                            (e) => {
                                t.push(e);
                            },
                            (e) => {
                                n.push(e);
                            }
                        );
                    }),
                    { errors: t, values: n }
                );
            })(q(e, dl));
            return V(t.errors, (e) => console.error(e.message, e.pattern)), t.values;
        },
        fl = xt().deviceType,
        gl = fl.isTouch(),
        pl = Oa.DOM,
        hl = (e) => u(e, RegExp),
        bl = (e) => (t) => t.options.get(e),
        vl = (e) => m(e) || f(e),
        yl = (e, t = "") => (n) => {
            const o = m(n);
            if (o) {
                if (-1 !== n.indexOf("=")) {
                    const r = ((e) => {
                        const t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
                        return X(
                            t,
                            (e, t) => {
                                const n = t.split("="),
                                    o = n[0],
                                    r = n.length > 1 ? n[1] : o;
                                return (e[Ve(o)] = Ve(r)), e;
                            },
                            {}
                        );
                    })(n);
                    return { value: xe(r, e.id).getOr(t), valid: o };
                }
                return { value: n, valid: o };
            }
            return { valid: !1, message: "Must be a string." };
        },
        Cl = bl("iframe_attrs"),
        wl = bl("doctype"),
        xl = bl("document_base_url"),
        kl = bl("body_id"),
        El = bl("body_class"),
        Sl = bl("content_security_policy"),
        _l = bl("br_in_pre"),
        Nl = bl("forced_root_block"),
        Rl = bl("forced_root_block_attrs"),
        Al = bl("newline_behavior"),
        Ol = bl("br_newline_selector"),
        Tl = bl("no_newline_selector"),
        Bl = bl("keep_styles"),
        Dl = bl("end_container_on_empty_block"),
        Pl = bl("automatic_uploads"),
        Ll = bl("images_reuse_filename"),
        Ml = bl("images_replace_blob_uris"),
        Il = bl("icons"),
        Fl = bl("icons_url"),
        Ul = bl("images_upload_url"),
        zl = bl("images_upload_base_path"),
        jl = bl("images_upload_credentials"),
        Hl = bl("images_upload_handler"),
        $l = bl("content_css_cors"),
        ql = bl("referrer_policy"),
        Vl = bl("language"),
        Wl = bl("language_url"),
        Kl = bl("indent_use_margin"),
        Gl = bl("indentation"),
        Yl = bl("content_css"),
        Xl = bl("content_style"),
        Ql = bl("font_css"),
        Jl = bl("directionality"),
        Zl = bl("inline_boundaries_selector"),
        ed = bl("object_resizing"),
        td = bl("resize_img_proportional"),
        nd = bl("placeholder"),
        od = bl("event_root"),
        rd = bl("service_message"),
        sd = bl("theme"),
        ad = bl("theme_url"),
        id = bl("model"),
        ld = bl("model_url"),
        dd = bl("inline_boundaries"),
        cd = bl("formats"),
        ud = bl("preview_styles"),
        md = bl("format_empty_lines"),
        fd = bl("format_noneditable_selector"),
        gd = bl("custom_ui_selector"),
        pd = bl("inline"),
        hd = bl("hidden_input"),
        bd = bl("submit_patch"),
        vd = bl("add_form_submit_trigger"),
        yd = bl("add_unload_trigger"),
        Cd = bl("custom_undo_redo_levels"),
        wd = bl("disable_nodechange"),
        xd = bl("readonly"),
        kd = bl("editable_root"),
        Ed = bl("content_css_cors"),
        Sd = bl("plugins"),
        _d = bl("external_plugins"),
        Nd = bl("block_unsupported_drop"),
        Rd = bl("visual"),
        Ad = bl("visual_table_class"),
        Od = bl("visual_anchor_class"),
        Td = bl("iframe_aria_text"),
        Bd = bl("setup"),
        Dd = bl("init_instance_callback"),
        Pd = bl("urlconverter_callback"),
        Ld = bl("auto_focus"),
        Md = bl("browser_spellcheck"),
        Id = bl("protect"),
        Fd = bl("paste_block_drop"),
        Ud = bl("paste_data_images"),
        zd = bl("paste_preprocess"),
        jd = bl("paste_postprocess"),
        Hd = bl("newdocument_content"),
        $d = bl("paste_webkit_styles"),
        qd = bl("paste_remove_styles_if_webkit"),
        Vd = bl("paste_merge_formats"),
        Wd = bl("smart_paste"),
        Kd = bl("paste_as_text"),
        Gd = bl("paste_tab_spaces"),
        Yd = bl("allow_html_data_urls"),
        Xd = bl("text_patterns"),
        Qd = bl("text_patterns_lookup"),
        Jd = bl("noneditable_class"),
        Zd = bl("editable_class"),
        ec = bl("noneditable_regexp"),
        tc = bl("preserve_cdata"),
        nc = bl("highlight_on_focus"),
        oc = bl("xss_sanitization"),
        rc = bl("init_content_sync"),
        sc = (e) => Dt.explode(e.options.get("images_file_types")),
        ac = bl("table_tab_navigation"),
        ic = bl("details_initial_state"),
        lc = bl("details_serialized_state"),
        dc = $o,
        cc = Jo,
        uc = (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        mc = (e) => {
            const t = Fr(e);
            return { count: e.length - t.length, text: t };
        },
        fc = (e) => {
            let t;
            for (; -1 !== (t = e.data.lastIndexOf(Mr)); ) e.deleteData(t, 1);
        },
        gc = (e, t) => (hc(e), t),
        pc = (e, t) =>
            Li.isTextPosition(t)
                ? ((e, t) =>
                      cc(e) && t.container() === e
                          ? ((e, t) => {
                                const n = mc(e.data.substr(0, t.offset())),
                                    o = mc(e.data.substr(t.offset()));
                                return (n.text + o.text).length > 0 ? (fc(e), Li(e, t.offset() - n.count)) : t;
                            })(e, t)
                          : gc(e, t))(e, t)
                : ((e, t) =>
                      t.container() === e.parentNode
                          ? ((e, t) => {
                                const n = t.container(),
                                    o = ((e, t) => {
                                        const n = j(e, t);
                                        return -1 === n ? I.none() : I.some(n);
                                    })(ce(n.childNodes), e)
                                        .map((e) => (e < t.offset() ? Li(n, t.offset() - 1) : t))
                                        .getOr(t);
                                return hc(e), o;
                            })(e, t)
                          : gc(e, t))(e, t),
        hc = (e) => {
            dc(e) && $r(e) && (qr(e) ? e.removeAttribute("data-mce-caret") : uc(e)), cc(e) && (fc(e), 0 === e.data.length && uc(e));
        },
        bc = ir,
        vc = cr,
        yc = lr,
        Cc = (e, t, n) => {
            const o = di(t.getBoundingClientRect(), n);
            let r, s;
            if ("BODY" === e.tagName) {
                const t = e.ownerDocument.documentElement;
                (r = e.scrollLeft || t.scrollLeft), (s = e.scrollTop || t.scrollTop);
            } else {
                const t = e.getBoundingClientRect();
                (r = e.scrollLeft - t.left), (s = e.scrollTop - t.top);
            }
            (o.left += r), (o.right += r), (o.top += s), (o.bottom += s), (o.width = 1);
            let a = t.offsetWidth - t.clientWidth;
            return a > 0 && (n && (a *= -1), (o.left += a), (o.right += a)), o;
        },
        wc = (e, t, n, o) => {
            const r = za();
            let s, a;
            const i = Nl(e),
                l = e.dom,
                d = () => {
                    ((e) => {
                        var t, n;
                        const o = Fo(yn(e), "*[contentEditable=false],video,audio,embed,object");
                        for (let e = 0; e < o.length; e++) {
                            const r = o[e].dom;
                            let s = r.previousSibling;
                            if (Gr(s)) {
                                const e = s.data;
                                1 === e.length ? null === (t = s.parentNode) || void 0 === t || t.removeChild(s) : s.deleteData(e.length - 1, 1);
                            }
                            (s = r.nextSibling), Kr(s) && (1 === s.data.length ? null === (n = s.parentNode) || void 0 === n || n.removeChild(s) : s.deleteData(0, 1));
                        }
                    })(t),
                        a && (hc(a), (a = null)),
                        r.on((e) => {
                            l.remove(e.caret), r.clear();
                        }),
                        s && (clearInterval(s), (s = void 0));
                };
            return {
                show: (e, c) => {
                    let u;
                    if ((d(), yc(c))) return null;
                    if (!n(c))
                        return (
                            (a = ((e, t) => {
                                var n;
                                const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Mr),
                                    r = e.parentNode;
                                if (t) {
                                    const t = e.previousSibling;
                                    if (zr(t)) {
                                        if ($r(t)) return t;
                                        if (Gr(t)) return t.splitText(t.data.length - 1);
                                    }
                                    null == r || r.insertBefore(o, e);
                                } else {
                                    const t = e.nextSibling;
                                    if (zr(t)) {
                                        if ($r(t)) return t;
                                        if (Kr(t)) return t.splitText(1), t;
                                    }
                                    e.nextSibling ? null == r || r.insertBefore(o, e.nextSibling) : null == r || r.appendChild(o);
                                }
                                return o;
                            })(c, e)),
                            (u = c.ownerDocument.createRange()),
                            kc(a.nextSibling) ? (u.setStart(a, 0), u.setEnd(a, 0)) : (u.setStart(a, 1), u.setEnd(a, 1)),
                            u
                        );
                    {
                        const n = ((e, t, n) => {
                                var o;
                                const r = (null !== (o = t.ownerDocument) && void 0 !== o ? o : document).createElement(e);
                                r.setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(Dr().dom);
                                const s = t.parentNode;
                                return n ? null == s || s.insertBefore(r, t) : t.nextSibling ? null == s || s.insertBefore(r, t.nextSibling) : null == s || s.appendChild(r), r;
                            })(i, c, e),
                            d = Cc(t, c, e);
                        l.setStyle(n, "top", d.top), (a = n);
                        const m = l.create("div", { class: "mce-visual-caret", "data-mce-bogus": "all" });
                        l.setStyles(m, { ...d }),
                            l.add(t, m),
                            r.set({ caret: m, element: c, before: e }),
                            e && l.addClass(m, "mce-visual-caret-before"),
                            (s = setInterval(() => {
                                r.on((e) => {
                                    o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden");
                                });
                            }, 500)),
                            (u = c.ownerDocument.createRange()),
                            u.setStart(n, 0),
                            u.setEnd(n, 0);
                    }
                    return u;
                },
                hide: d,
                getCss: () =>
                    ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
                reposition: () => {
                    r.on((e) => {
                        const n = Cc(t, e.element, e.before);
                        l.setStyles(e.caret, { ...n });
                    });
                },
                destroy: () => clearInterval(s),
            };
        },
        xc = () => At.browser.isFirefox(),
        kc = (e) => bc(e) || vc(e),
        Ec = (e) => (kc(e) || (Yo(e) && xc())) && On(yn(e)).exists(no),
        Sc = ar,
        _c = ir,
        Nc = cr,
        Rc = Wo("display", "block table table-cell table-caption list-item"),
        Ac = $r,
        Oc = jr,
        Tc = $o,
        Bc = Jo,
        Dc = ss,
        Pc = (e) => e > 0,
        Lc = (e) => e < 0,
        Mc = (e, t) => {
            let n;
            for (; (n = e(t)); ) if (!Oc(n)) return n;
            return null;
        },
        Ic = (e, t, n, o, r) => {
            const s = new zo(e, o),
                a = _c(e) || Oc(e);
            let i;
            if (Lc(t)) {
                if (a && ((i = Mc(s.prev.bind(s), !0)), n(i))) return i;
                for (; (i = Mc(s.prev.bind(s), r)); ) if (n(i)) return i;
            }
            if (Pc(t)) {
                if (a && ((i = Mc(s.next.bind(s), !0)), n(i))) return i;
                for (; (i = Mc(s.next.bind(s), r)); ) if (n(i)) return i;
            }
            return null;
        },
        Fc = (e, t) => {
            for (; e && e !== t; ) {
                if (Rc(e)) return e;
                e = e.parentNode;
            }
            return null;
        },
        Uc = (e, t, n) => Fc(e.container(), n) === Fc(t.container(), n),
        zc = (e, t) => {
            if (!t) return I.none();
            const n = t.container(),
                o = t.offset();
            return Tc(n) ? I.from(n.childNodes[o + e]) : I.none();
        },
        jc = (e, t) => {
            var n;
            const o = (null !== (n = t.ownerDocument) && void 0 !== n ? n : document).createRange();
            return e ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), o;
        },
        Hc = (e, t, n) => Fc(t, e) === Fc(n, e),
        $c = (e, t, n) => {
            const o = e ? "previousSibling" : "nextSibling";
            let r = n;
            for (; r && r !== t; ) {
                let e = r[o];
                if ((e && Ac(e) && (e = e[o]), _c(e) || Nc(e))) {
                    if (Hc(t, e, r)) return e;
                    break;
                }
                if (Dc(e)) break;
                r = r.parentNode;
            }
            return null;
        },
        qc = O(jc, !0),
        Vc = O(jc, !1),
        Wc = (e, t, n) => {
            let o;
            const r = O($c, !0, t),
                s = O($c, !1, t),
                a = n.startContainer,
                i = n.startOffset;
            if (jr(a)) {
                const e = Bc(a) ? a.parentNode : a,
                    t = e.getAttribute("data-mce-caret");
                if ("before" === t && ((o = e.nextSibling), Ec(o))) return qc(o);
                if ("after" === t && ((o = e.previousSibling), Ec(o))) return Vc(o);
            }
            if (!n.collapsed) return n;
            if (Jo(a)) {
                if (Ac(a)) {
                    if (1 === e) {
                        if (((o = s(a)), o)) return qc(o);
                        if (((o = r(a)), o)) return Vc(o);
                    }
                    if (-1 === e) {
                        if (((o = r(a)), o)) return Vc(o);
                        if (((o = s(a)), o)) return qc(o);
                    }
                    return n;
                }
                if (Gr(a) && i >= a.data.length - 1) return 1 === e && ((o = s(a)), o) ? qc(o) : n;
                if (Kr(a) && i <= 1) return -1 === e && ((o = r(a)), o) ? Vc(o) : n;
                if (i === a.data.length) return (o = s(a)), o ? qc(o) : n;
                if (0 === i) return (o = r(a)), o ? Vc(o) : n;
            }
            return n;
        },
        Kc = (e, t) => zc(e ? 0 : -1, t).filter(_c),
        Gc = (e, t, n) => {
            const o = Wc(e, t, n);
            return -1 === e ? Li.fromRangeStart(o) : Li.fromRangeEnd(o);
        },
        Yc = (e) => I.from(e.getNode()).map(yn),
        Xc = (e, t) => {
            let n = t;
            for (; (n = e(n)); ) if (n.isVisible()) return n;
            return n;
        },
        Qc = (e, t) => {
            const n = Uc(e, t);
            return !(n || !rr(e.getNode())) || n;
        };
    var Jc;
    !(function (e) {
        (e[(e.Backwards = -1)] = "Backwards"), (e[(e.Forwards = 1)] = "Forwards");
    })(Jc || (Jc = {}));
    const Zc = ir,
        eu = Jo,
        tu = $o,
        nu = rr,
        ou = ss,
        ru = (e) => ns(e) || ((e) => !!as(e) && !X(ce(e.getElementsByTagName("*")), (e, t) => e || Qr(t), !1))(e),
        su = is,
        au = (e, t) => (e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null),
        iu = (e, t) => {
            if (Pc(e)) {
                if (ou(t.previousSibling) && !eu(t.previousSibling)) return Li.before(t);
                if (eu(t)) return Li(t, 0);
            }
            if (Lc(e)) {
                if (ou(t.nextSibling) && !eu(t.nextSibling)) return Li.after(t);
                if (eu(t)) return Li(t, t.data.length);
            }
            return Lc(e) ? (nu(t) ? Li.before(t) : Li.after(t)) : Li.before(t);
        },
        lu = (e, t, n) => {
            let o, r, s, a;
            if (!tu(n) || !t) return null;
            if (t.isEqual(Li.after(n)) && n.lastChild) {
                if (((a = Li.after(n.lastChild)), Lc(e) && ou(n.lastChild) && tu(n.lastChild))) return nu(n.lastChild) ? Li.before(n.lastChild) : a;
            } else a = t;
            const i = a.container();
            let l = a.offset();
            if (eu(i)) {
                if (Lc(e) && l > 0) return Li(i, --l);
                if (Pc(e) && l < i.length) return Li(i, ++l);
                o = i;
            } else {
                if (Lc(e) && l > 0 && ((r = au(i, l - 1)), ou(r))) return !ru(r) && ((s = Ic(r, e, su, r)), s) ? (eu(s) ? Li(s, s.data.length) : Li.after(s)) : eu(r) ? Li(r, r.data.length) : Li.before(r);
                if (Pc(e) && l < i.childNodes.length && ((r = au(i, l)), ou(r)))
                    return nu(r)
                        ? ((e, t) => {
                              const n = t.nextSibling;
                              return n && ou(n) ? (eu(n) ? Li(n, 0) : Li.before(n)) : lu(Jc.Forwards, Li.after(t), e);
                          })(n, r)
                        : !ru(r) && ((s = Ic(r, e, su, r)), s)
                        ? eu(s)
                            ? Li(s, 0)
                            : Li.before(s)
                        : eu(r)
                        ? Li(r, 0)
                        : Li.after(r);
                o = r || a.getNode();
            }
            if (o && ((Pc(e) && a.isAtEnd()) || (Lc(e) && a.isAtStart())) && ((o = Ic(o, e, M, n, !0)), su(o, n))) return iu(e, o);
            r = o ? Ic(o, e, su, n) : o;
            const d = De(
                G(
                    ((e, t) => {
                        const n = [];
                        let o = e;
                        for (; o && o !== t; ) n.push(o), (o = o.parentNode);
                        return n;
                    })(i, n),
                    Zc
                )
            );
            return !d || (r && d.contains(r)) ? (r ? iu(e, r) : null) : ((a = Pc(e) ? Li.after(d) : Li.before(d)), a);
        },
        du = (e) => ({ next: (t) => lu(Jc.Forwards, t, e), prev: (t) => lu(Jc.Backwards, t, e) }),
        cu = (e) => (Li.isTextPosition(e) ? 0 === e.offset() : ss(e.getNode())),
        uu = (e) => {
            if (Li.isTextPosition(e)) {
                const t = e.container();
                return e.offset() === t.data.length;
            }
            return ss(e.getNode(!0));
        },
        mu = (e, t) => !Li.isTextPosition(e) && !Li.isTextPosition(t) && e.getNode() === t.getNode(!0),
        fu = (e, t, n) => {
            const o = du(t);
            return I.from(e ? o.next(n) : o.prev(n));
        },
        gu = (e, t, n) =>
            fu(e, t, n).bind((o) =>
                Uc(n, o, t) &&
                ((e, t, n) => {
                    return e ? !mu(t, n) && ((o = t), !(!Li.isTextPosition(o) && rr(o.getNode()))) && uu(t) && cu(n) : !mu(n, t) && cu(t) && uu(n);
                    var o;
                })(e, n, o)
                    ? fu(e, t, o)
                    : I.some(o)
            ),
        pu = (e, t, n, o) => gu(e, t, n).bind((n) => (o(n) ? pu(e, t, n, o) : I.some(n))),
        hu = (e, t) => {
            const n = e ? t.firstChild : t.lastChild;
            return Jo(n)
                ? I.some(Li(n, e ? 0 : n.data.length))
                : n
                ? ss(n)
                    ? I.some(e ? Li.before(n) : rr((o = n)) ? Li.before(o) : Li.after(o))
                    : ((e, t, n) => {
                          const o = e ? Li.before(n) : Li.after(n);
                          return fu(e, t, o);
                      })(e, t, n)
                : I.none();
            var o;
        },
        bu = O(fu, !0),
        vu = O(fu, !1),
        yu = O(hu, !0),
        Cu = O(hu, !1),
        wu = "_mce_caret",
        xu = (e) => $o(e) && e.id === wu,
        ku = (e, t) => {
            let n = t;
            for (; n && n !== e; ) {
                if (xu(n)) return n;
                n = n.parentNode;
            }
            return null;
        },
        Eu = (e) => ke(e, "name"),
        Su = (e) => Dt.isArray(e.start),
        _u = (e) => !(!Eu(e) && b(e.forward)) || e.forward,
        Nu = (e, t) => ($o(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t),
        Ru = (e, t) => Cu(e).fold(L, (e) => (t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0)),
        Au = (e, t, n) =>
            !(
                !((e) => !e.hasChildNodes())(t) ||
                !ku(e, t) ||
                (((e, t) => {
                    var n;
                    const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Mr);
                    e.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0);
                })(t, n),
                0)
            ),
        Ou = (e, t, n, o) => {
            const r = n[t ? "start" : "end"],
                s = e.getRoot();
            if (r) {
                let e = s,
                    n = r[0];
                for (let t = r.length - 1; e && t >= 1; t--) {
                    const n = e.childNodes;
                    if (Au(s, e, o)) return !0;
                    if (r[t] > n.length - 1) return !!Au(s, e, o) || Ru(e, o);
                    e = n[r[t]];
                }
                Jo(e) && (n = Math.min(r[0], e.data.length)), $o(e) && (n = Math.min(r[0], e.childNodes.length)), t ? o.setStart(e, n) : o.setEnd(e, n);
            }
            return !0;
        },
        Tu = (e) => Jo(e) && e.data.length > 0,
        Bu = (e, t, n) => {
            const o = e.get(n.id + "_" + t),
                r = null == o ? void 0 : o.parentNode,
                s = n.keep;
            if (o && r) {
                let a, i;
                if (
                    ("start" === t
                        ? s
                            ? o.hasChildNodes()
                                ? ((a = o.firstChild), (i = 1))
                                : Tu(o.nextSibling)
                                ? ((a = o.nextSibling), (i = 0))
                                : Tu(o.previousSibling)
                                ? ((a = o.previousSibling), (i = o.previousSibling.data.length))
                                : ((a = r), (i = e.nodeIndex(o) + 1))
                            : ((a = r), (i = e.nodeIndex(o)))
                        : s
                        ? o.hasChildNodes()
                            ? ((a = o.firstChild), (i = 1))
                            : Tu(o.previousSibling)
                            ? ((a = o.previousSibling), (i = o.previousSibling.data.length))
                            : ((a = r), (i = e.nodeIndex(o)))
                        : ((a = r), (i = e.nodeIndex(o))),
                    !s)
                ) {
                    const r = o.previousSibling,
                        s = o.nextSibling;
                    let l;
                    for (
                        Dt.each(Dt.grep(o.childNodes), (e) => {
                            Jo(e) && (e.data = e.data.replace(/\uFEFF/g, ""));
                        });
                        (l = e.get(n.id + "_" + t));

                    )
                        e.remove(l, !0);
                    if (Jo(s) && Jo(r) && !At.browser.isOpera()) {
                        const t = r.data.length;
                        r.appendData(s.data), e.remove(s), (a = r), (i = t);
                    }
                }
                return I.some(Li(a, i));
            }
            return I.none();
        },
        Du = (e, t, n) =>
            ((e, t, n = !1) =>
                2 === t
                    ? Zi(Fr, n, e)
                    : 3 === t
                    ? ((e) => {
                          const t = e.getRng();
                          return { start: Vi(e.dom.getRoot(), Li.fromRangeStart(t)), end: Vi(e.dom.getRoot(), Li.fromRangeEnd(t)), forward: e.isForward() };
                      })(e)
                    : t
                    ? ((e) => ({ rng: e.getRng(), forward: e.isForward() }))(e)
                    : tl(e, !1))(e, t, n),
        Pu = (e, t) => {
            ((e, t) => {
                const n = e.dom;
                if (t) {
                    if (Su(t))
                        return ((e, t) => {
                            const n = e.createRng();
                            return Ou(e, !0, t, n) && Ou(e, !1, t, n) ? I.some({ range: n, forward: _u(t) }) : I.none();
                        })(n, t);
                    if (((e) => m(e.start))(t))
                        return ((e, t) => {
                            const n = I.from(Wi(e.getRoot(), t.start)),
                                o = I.from(Wi(e.getRoot(), t.end));
                            return Mt(n, o, (n, o) => {
                                const r = e.createRng();
                                return r.setStart(n.container(), n.offset()), r.setEnd(o.container(), o.offset()), { range: r, forward: _u(t) };
                            });
                        })(n, t);
                    if (((e) => ke(e, "id"))(t))
                        return ((e, t) => {
                            const n = Bu(e, "start", t),
                                o = Bu(e, "end", t);
                            return Mt(n, o.or(n), (n, o) => {
                                const r = e.createRng();
                                return r.setStart(Nu(e, n.container()), n.offset()), r.setEnd(Nu(e, o.container()), o.offset()), { range: r, forward: _u(t) };
                            });
                        })(n, t);
                    if (Eu(t))
                        return ((e, t) =>
                            I.from(e.select(t.name)[t.index]).map((t) => {
                                const n = e.createRng();
                                return n.selectNode(t), { range: n, forward: !0 };
                            }))(n, t);
                    if (((e) => ke(e, "rng"))(t)) return I.some({ range: t.rng, forward: _u(t) });
                }
                return I.none();
            })(e, t).each(({ range: t, forward: n }) => {
                e.setRng(t, n);
            });
        },
        Lu = (e) => $o(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type"),
        Mu = ((Iu = pr), (e) => Iu === e);
    var Iu;
    const Fu = (e) => "" !== e && -1 !== " \f\n\r\t\v".indexOf(e),
        Uu = (e) => !Fu(e) && !Mu(e) && !hr(e),
        zu = (e) => {
            const t = e.toString(16);
            return (1 === t.length ? "0" + t : t).toUpperCase();
        },
        ju = (e) =>
            ((e) => {
                return { value: ((t = e), ze(t, "#").toUpperCase()) };
                var t;
            })(zu(e.red) + zu(e.green) + zu(e.blue)),
        Hu = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
        $u = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
        qu = (e, t, n, o) => ({ red: e, green: t, blue: n, alpha: o }),
        Vu = (e, t, n, o) => {
            const r = parseInt(e, 10),
                s = parseInt(t, 10),
                a = parseInt(n, 10),
                i = parseFloat(o);
            return qu(r, s, a, i);
        },
        Wu = (e) =>
            ((e) => {
                if ("transparent" === e) return I.some(qu(0, 0, 0, 0));
                const t = Hu.exec(e);
                if (null !== t) return I.some(Vu(t[1], t[2], t[3], "1"));
                const n = $u.exec(e);
                return null !== n ? I.some(Vu(n[1], n[2], n[3], n[4])) : I.none();
            })(e)
                .map(ju)
                .map((e) => "#" + e.value)
                .getOr(e),
        Ku = (e) => {
            const t = [];
            if (e) for (let n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t;
        },
        Gu = (e, t) => {
            const n = Fo(t, "td[data-mce-selected],th[data-mce-selected]");
            return n.length > 0
                ? n
                : ((e) =>
                      G(
                          ((e) =>
                              te(e, (e) => {
                                  const t = gi(e);
                                  return t ? [yn(t)] : [];
                              }))(e),
                          Ar
                      ))(e);
        },
        Yu = (e) => Gu(Ku(e.selection.getSel()), yn(e.getBody())),
        Xu = (e, t) => Zn(e, "table", t),
        Qu = (e) => Fn(e).fold(N([e]), (t) => [e].concat(Qu(t))),
        Ju = (e) =>
            Un(e).fold(N([e]), (t) =>
                "br" === Ht(t)
                    ? Bn(t)
                          .map((t) => [e].concat(Ju(t)))
                          .getOr([])
                    : [e].concat(Ju(t))
            ),
        Zu = (e, t) =>
            Mt(
                ((e) => {
                    const t = e.startContainer,
                        n = e.startOffset;
                    return Jo(t) ? (0 === n ? I.some(yn(t)) : I.none()) : I.from(t.childNodes[n]).map(yn);
                })(t),
                ((e) => {
                    const t = e.endContainer,
                        n = e.endOffset;
                    return Jo(t) ? (n === t.data.length ? I.some(yn(t)) : I.none()) : I.from(t.childNodes[n - 1]).map(yn);
                })(t),
                (t, n) => {
                    const o = J(Qu(e), O(En, t)),
                        r = J(Ju(e), O(En, n));
                    return o.isSome() && r.isSome();
                }
            ).getOr(!1),
        em = (e, t, n, o) => {
            const r = n,
                s = new zo(n, r),
                a = ye(e.schema.getMoveCaretBeforeOnEnterElements(), (e, t) => !H(["td", "th", "table"], t.toLowerCase()));
            let i = n;
            do {
                if (Jo(i) && 0 !== Dt.trim(i.data).length) return void (o ? t.setStart(i, 0) : t.setEnd(i, i.data.length));
                if (a[i.nodeName]) return void (o ? t.setStartBefore(i) : "BR" === i.nodeName ? t.setEndBefore(i) : t.setEndAfter(i));
            } while ((i = o ? s.next() : s.prev()));
            "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length));
        },
        tm = (e) => {
            const t = e.selection.getSel();
            return C(t) && t.rangeCount > 0;
        },
        nm = (e, t) => {
            const n = Yu(e);
            n.length > 0
                ? V(n, (n) => {
                      const o = n.dom,
                          r = e.dom.createRng();
                      r.setStartBefore(o), r.setEndAfter(o), t(r, !0);
                  })
                : t(e.selection.getRng(), !1);
        },
        om = (e, t, n) => {
            const o = tl(e, t);
            n(o), e.moveToBookmark(o);
        },
        rm = (e) => x(null == e ? void 0 : e.nodeType),
        sm = (e) => $o(e) && !Lu(e) && !xu(e) && !Go(e),
        am = (e) => !0 === e.isContentEditable,
        im = (e, t, n) => {
            const { selection: o, dom: r } = e,
                s = o.getNode(),
                a = ir(s);
            om(o, !0, () => {
                t();
            }),
                a && ir(s) && r.isChildOf(s, e.getBody()) ? e.selection.select(s) : n(o.getStart()) && lm(r, o);
        },
        lm = (e, t) => {
            var n, o;
            const r = t.getRng(),
                { startContainer: s, startOffset: a } = r;
            if (
                !((e, t) => {
                    if (sm(t) && !/^(TD|TH)$/.test(t.nodeName)) {
                        const n = e.getAttrib(t, "data-mce-selected"),
                            o = parseInt(n, 10);
                        return !isNaN(o) && o > 0;
                    }
                    return !1;
                })(e, t.getNode()) &&
                $o(s)
            ) {
                const i = s.childNodes,
                    l = e.getRoot();
                let d;
                if (a < i.length) {
                    const t = i[a];
                    d = new zo(t, null !== (n = e.getParent(t, e.isBlock)) && void 0 !== n ? n : l);
                } else {
                    const t = i[i.length - 1];
                    (d = new zo(t, null !== (o = e.getParent(t, e.isBlock)) && void 0 !== o ? o : l)), d.next(!0);
                }
                for (let n = d.current(); n; n = d.next()) {
                    if ("false" === e.getContentEditable(n)) return;
                    if (Jo(n) && !mm(n)) return r.setStart(n, 0), void t.setRng(r);
                }
            }
        },
        dm = (e, t, n) => {
            if (e) {
                const o = t ? "nextSibling" : "previousSibling";
                for (e = n ? e : e[o]; e; e = e[o]) if ($o(e) || !mm(e)) return e;
            }
        },
        cm = (e, t) => !!e.getTextBlockElements()[t.nodeName.toLowerCase()] || As(e, t),
        um = (e, t, n) => e.schema.isValidChild(t, n),
        mm = (e, t = !1) => {
            if (C(e) && Jo(e)) {
                const n = t ? e.data.replace(/ /g, "\xa0") : e.data;
                return ds(n);
            }
            return !1;
        },
        fm = (e, t) => {
            const n = e.dom;
            return (
                sm(t) &&
                "false" === n.getContentEditable(t) &&
                ((e, t) => {
                    const n = "[data-mce-cef-wrappable]",
                        o = fd(e),
                        r = Ye(o) ? n : `${n},${o}`;
                    return xn(yn(t), r);
                })(e, t) &&
                0 === n.select('[contenteditable="true"]', t).length
            );
        },
        gm = (e, t) => (w(e) ? e(t) : (C(t) && (e = e.replace(/%(\w+)/g, (e, n) => t[n] || e)), e)),
        pm = (e, t) => ((t = t || ""), (e = "" + ((e = e || "").nodeName || e)), (t = "" + (t.nodeName || t)), e.toLowerCase() === t.toLowerCase()),
        hm = (e, t) => {
            if (y(e)) return null;
            {
                let n = String(e);
                return ("color" !== t && "backgroundColor" !== t) || (n = Wu(n)), "fontWeight" === t && 700 === e && (n = "bold"), "fontFamily" === t && (n = n.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), n;
            }
        },
        bm = (e, t, n) => {
            const o = e.getStyle(t, n);
            return hm(o, n);
        },
        vm = (e, t) => {
            let n;
            return e.getParent(t, (t) => !!$o(t) && ((n = e.getStyle(t, "text-decoration")), !!n && "none" !== n)), n;
        },
        ym = (e, t, n) => e.getParents(t, n, e.getRoot()),
        Cm = (e, t, n) => {
            const o = e.formatter.get(t);
            return C(o) && $(o, n);
        },
        wm = (e) => Ee(e, "block"),
        xm = (e) => Ee(e, "selector"),
        km = (e) => Ee(e, "inline"),
        Em = (e) => xm(e) && !1 !== e.expand && !km(e),
        Sm = Lu,
        _m = ym,
        Nm = mm,
        Rm = cm,
        Am = (e, t) => {
            let n = t;
            for (; n; ) {
                if ($o(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode;
            }
            return t;
        },
        Om = (e, t, n, o) => {
            const r = t.data;
            if (e) {
                for (let e = n; e > 0; e--) if (o(r.charAt(e - 1))) return e;
            } else for (let e = n; e < r.length; e++) if (o(r.charAt(e))) return e;
            return -1;
        },
        Tm = (e, t, n) => Om(e, t, n, (e) => Mu(e) || Fu(e)),
        Bm = (e, t, n) => Om(e, t, n, Uu),
        Dm = (e, t, n, o, r, s) => {
            let a;
            const i = e.getParent(n, e.isBlock) || t,
                l = (t, n, o) => {
                    const s = ai(e),
                        l = r ? s.backwards : s.forwards;
                    return I.from(l(t, n, (e, t) => (Sm(e.parentNode) ? -1 : ((a = e), o(r, e, t))), i));
                };
            return l(n, o, Tm)
                .bind((e) => (s ? l(e.container, e.offset + (r ? -1 : 0), Bm) : I.some(e)))
                .orThunk(() => (a ? I.some({ container: a, offset: r ? 0 : a.length }) : I.none()));
        },
        Pm = (e, t, n, o, r) => {
            const s = o[r];
            Jo(o) && Ye(o.data) && s && (o = s);
            const a = _m(e, o);
            for (let o = 0; o < a.length; o++)
                for (let r = 0; r < t.length; r++) {
                    const s = t[r];
                    if ((!C(s.collapsed) || s.collapsed === n.collapsed) && xm(s) && e.is(a[o], s.selector)) return a[o];
                }
            return o;
        },
        Lm = (e, t, n, o) => {
            var r;
            let s = n;
            const a = e.getRoot(),
                i = t[0];
            if ((wm(i) && (s = i.wrapper ? null : e.getParent(n, i.block, a)), !s)) {
                const t = null !== (r = e.getParent(n, "LI,TD,TH")) && void 0 !== r ? r : a;
                s = e.getParent(Jo(n) ? n.parentNode : n, (t) => t !== a && Rm(e.schema, t), t);
            }
            if ((s && wm(i) && i.wrapper && (s = _m(e, s, "ul,ol").reverse()[0] || s), !s)) for (s = n; s && s[o] && !e.isBlock(s[o]) && ((s = s[o]), !pm(s, "br")); );
            return s || n;
        },
        Mm = (e, t, n, o) => {
            const r = n.parentNode;
            return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || Mm(e, t, r, o));
        },
        Im = (e, t, n, o, r) => {
            let s = n;
            const a = r ? "previousSibling" : "nextSibling",
                i = e.getRoot();
            if (Jo(n) && !Nm(n) && (r ? o > 0 : o < n.data.length)) return n;
            for (; s; ) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (let t = s[a]; t; t = t[a]) {
                    const n = Jo(t) && !Mm(e, i, t, a);
                    if (!Sm(t) && (!rr((l = t)) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !Nm(t, n)) return s;
                }
                if (s === i || s.parentNode === i) {
                    n = s;
                    break;
                }
                s = s.parentNode;
            }
            var l;
            return n;
        },
        Fm = (e) => Sm(e.parentNode) || Sm(e),
        Um = (e, t, n, o = !1) => {
            let { startContainer: r, startOffset: s, endContainer: a, endOffset: i } = t;
            const l = n[0];
            return (
                $o(r) && r.hasChildNodes() && ((r = pi(r, s)), Jo(r) && (s = 0)),
                $o(a) && a.hasChildNodes() && ((a = pi(a, t.collapsed ? i : i - 1)), Jo(a) && (i = a.data.length)),
                (r = Am(e, r)),
                (a = Am(e, a)),
                Fm(r) && ((r = Sm(r) ? r : r.parentNode), (r = t.collapsed ? r.previousSibling || r : r.nextSibling || r), Jo(r) && (s = t.collapsed ? r.length : 0)),
                Fm(a) && ((a = Sm(a) ? a : a.parentNode), (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a), Jo(a) && (i = t.collapsed ? 0 : a.length)),
                t.collapsed &&
                    (Dm(e, e.getRoot(), r, s, !0, o).each(({ container: e, offset: t }) => {
                        (r = e), (s = t);
                    }),
                    Dm(e, e.getRoot(), a, i, !1, o).each(({ container: e, offset: t }) => {
                        (a = e), (i = t);
                    })),
                (km(l) || l.block_expand) && ((km(l) && Jo(r) && 0 !== s) || (r = Im(e, n, r, s, !0)), (km(l) && Jo(a) && i !== a.data.length) || (a = Im(e, n, a, i, !1))),
                Em(l) && ((r = Pm(e, n, t, r, "previousSibling")), (a = Pm(e, n, t, a, "nextSibling"))),
                (wm(l) || xm(l)) && ((r = Lm(e, n, r, "previousSibling")), (a = Lm(e, n, a, "nextSibling")), wm(l) && (e.isBlock(r) || (r = Im(e, n, r, s, !0)), e.isBlock(a) || (a = Im(e, n, a, i, !1)))),
                $o(r) && r.parentNode && ((s = e.nodeIndex(r)), (r = r.parentNode)),
                $o(a) && a.parentNode && ((i = e.nodeIndex(a) + 1), (a = a.parentNode)),
                { startContainer: r, startOffset: s, endContainer: a, endOffset: i }
            );
        },
        zm = (e, t, n) => {
            var o;
            const r = t.startOffset,
                s = pi(t.startContainer, r),
                a = t.endOffset,
                i = pi(t.endContainer, a - 1),
                l = (e) => {
                    const t = e[0];
                    Jo(t) && t === s && r >= t.data.length && e.splice(0, 1);
                    const n = e[e.length - 1];
                    return 0 === a && e.length > 0 && n === i && Jo(n) && e.splice(e.length - 1, 1), e;
                },
                d = (e, t, n) => {
                    const o = [];
                    for (; e && e !== n; e = e[t]) o.push(e);
                    return o;
                },
                c = (t, n) => e.getParent(t, (e) => e.parentNode === n, n),
                u = (e, t, o) => {
                    const r = o ? "nextSibling" : "previousSibling";
                    for (let s = e, a = s.parentNode; s && s !== t; s = a) {
                        a = s.parentNode;
                        const t = d(s === e ? s : s[r], r);
                        t.length && (o || t.reverse(), n(l(t)));
                    }
                };
            if (s === i) return n(l([s]));
            const m = null !== (o = e.findCommonAncestor(s, i)) && void 0 !== o ? o : e.getRoot();
            if (e.isChildOf(s, i)) return u(s, m, !0);
            if (e.isChildOf(i, s)) return u(i, m);
            const f = c(s, m) || s,
                g = c(i, m) || i;
            u(s, f, !0);
            const p = d(f === s ? f : f.nextSibling, "nextSibling", g === i ? g.nextSibling : g);
            p.length && n(l(p)), u(i, g);
        },
        jm = ['pre[class*=language-][contenteditable="false"]', "figure.image", "div[data-ephox-embed-iri]", "div.tiny-pageembed", "div.mce-toc", "div[data-mce-toc]"],
        Hm = (e, t, n, o, r, s) => {
            const { uid: a = t, ...i } = n;
            un(e, $a()), Jt(e, `${Va()}`, a), Jt(e, `${qa()}`, o);
            const { attributes: l = {}, classes: d = [] } = r(a, i);
            if (
                (Zt(e, l),
                ((e, t) => {
                    V(t, (t) => {
                        un(e, t);
                    });
                })(e, d),
                s)
            ) {
                d.length > 0 && Jt(e, `${Ka()}`, d.join(","));
                const t = me(l);
                t.length > 0 && Jt(e, `${Ga()}`, t.join(","));
            }
        },
        $m = (e, t, n, o, r) => {
            const s = bn("span", e);
            return Hm(s, t, n, o, r, !1), s;
        },
        qm = (e, t, n, o, r, s) => {
            const a = [],
                i = $m(e.getDoc(), n, s, o, r),
                l = za(),
                d = () => {
                    l.clear();
                },
                c = (e) => {
                    V(e, u);
                },
                u = (t) => {
                    switch (
                        ((e, t, n, o) =>
                            An(t).fold(
                                () => "skipping",
                                (r) =>
                                    "br" === o || ((e) => Kt(e) && vr(e) === Mr)(t)
                                        ? "valid"
                                        : ((e) => Wt(e) && gn(e, $a()))(t)
                                        ? "existing"
                                        : xu(t.dom)
                                        ? "caret"
                                        : $(jm, (e) => xn(t, e))
                                        ? "valid-block"
                                        : um(e, n, o) && um(e, Ht(r), n)
                                        ? "valid"
                                        : "invalid-child"
                            ))(e, t, "span", Ht(t))
                    ) {
                        case "invalid-child": {
                            d();
                            const e = Mn(t);
                            c(e), d();
                            break;
                        }
                        case "valid-block":
                            d(), Hm(t, n, s, o, r, !0);
                            break;
                        case "valid": {
                            const e = l.get().getOrThunk(() => {
                                const e = oi(i);
                                return a.push(e), l.set(e), e;
                            });
                            vo(t, e);
                            break;
                        }
                    }
                };
            return (
                zm(e.dom, t, (e) => {
                    d(),
                        ((e) => {
                            const t = q(e, yn);
                            c(t);
                        })(e);
                }),
                a
            );
        },
        Vm = (e) => {
            const t = (() => {
                const e = {};
                return {
                    register: (t, n) => {
                        e[t] = { name: t, settings: n };
                    },
                    lookup: (t) => xe(e, t).map((e) => e.settings),
                    getNames: () => me(e),
                };
            })();
            ((e, t) => {
                const n = qa(),
                    o = (e) => I.from(e.attr(n)).bind(t.lookup),
                    r = (e) => {
                        var t, n;
                        e.attr(Va(), null), e.attr(qa(), null), e.attr(Wa(), null);
                        const o = I.from(e.attr(Ga()))
                                .map((e) => e.split(","))
                                .getOr([]),
                            r = I.from(e.attr(Ka()))
                                .map((e) => e.split(","))
                                .getOr([]);
                        V(o, (t) => e.attr(t, null));
                        const s = null !== (n = null === (t = e.attr("class")) || void 0 === t ? void 0 : t.split(" ")) && void 0 !== n ? n : [],
                            a = re(s, [$a()].concat(r));
                        e.attr("class", a.length > 0 ? a.join(" ") : null), e.attr(Ka(), null), e.attr(Ga(), null);
                    };
                e.serializer.addTempAttr(Wa()),
                    e.serializer.addAttributeFilter(n, (e) => {
                        for (const t of e)
                            o(t).each((e) => {
                                !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t));
                            });
                    });
            })(e, t);
            const n = ((e, t) => {
                    const n = Da({}),
                        o = () => ({ listeners: [], previous: za() }),
                        r = (e, t) => {
                            s(e, (e) => (t(e), e));
                        },
                        s = (e, t) => {
                            const r = n.get(),
                                s = t(xe(r, e).getOrThunk(o));
                            (r[e] = s), n.set(r);
                        },
                        a = (t, n) => {
                            V(Ja(e, t), (e) => {
                                n ? Jt(e, Wa(), "true") : on(e, Wa());
                            });
                        },
                        i = Ha(() => {
                            const n = ae(t.getNames());
                            V(n, (t) => {
                                s(t, (n) => {
                                    const o = n.previous.get();
                                    return (
                                        Xa(e, I.some(t)).fold(
                                            () => {
                                                o.each((e) => {
                                                    ((e) => {
                                                        r(e, (t) => {
                                                            V(t.listeners, (t) => t(!1, e));
                                                        });
                                                    })(t),
                                                        n.previous.clear(),
                                                        a(e, !1);
                                                });
                                            },
                                            ({ uid: e, name: t, elements: s }) => {
                                                Pt(o, e) ||
                                                    (o.each((e) => a(e, !1)),
                                                    ((e, t, n) => {
                                                        r(e, (o) => {
                                                            V(o.listeners, (o) => o(!0, e, { uid: t, nodes: q(n, (e) => e.dom) }));
                                                        });
                                                    })(t, e, s),
                                                    n.previous.set(e),
                                                    a(e, !0));
                                            }
                                        ),
                                        { previous: n.previous, listeners: n.listeners }
                                    );
                                });
                            });
                        }, 30);
                    return (
                        e.on("remove", () => {
                            i.cancel();
                        }),
                        e.on("NodeChange", () => {
                            i.throttle();
                        }),
                        {
                            addListener: (e, t) => {
                                s(e, (e) => ({ previous: e.previous, listeners: e.listeners.concat([t]) }));
                            },
                        }
                    );
                })(e, t),
                o = Xt("span"),
                r = (e) => {
                    V(e, (e) => {
                        o(e)
                            ? xo(e)
                            : ((e) => {
                                  fn(e, $a()), on(e, `${Va()}`), on(e, `${qa()}`), on(e, `${Wa()}`);
                                  const t = tn(e, `${Ga()}`)
                                          .map((e) => e.split(","))
                                          .getOr([]),
                                      n = tn(e, `${Ka()}`)
                                          .map((e) => e.split(","))
                                          .getOr([]);
                                  var o;
                                  V(t, (t) => on(e, t)),
                                      (o = e),
                                      V(n, (e) => {
                                          fn(o, e);
                                      }),
                                      on(e, `${Ka()}`),
                                      on(e, `${Ga()}`);
                              })(e);
                    });
                };
            return {
                register: (e, n) => {
                    t.register(e, n);
                },
                annotate: (n, o) => {
                    t.lookup(n).each((t) => {
                        ((e, t, n, o) => {
                            e.undoManager.transact(() => {
                                const r = e.selection,
                                    s = r.getRng(),
                                    a = Yu(e).length > 0,
                                    i = ti("mce-annotation");
                                if (
                                    (s.collapsed &&
                                        !a &&
                                        ((e, t) => {
                                            const n = Um(e.dom, t, [{ inline: "span" }]);
                                            t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t);
                                        })(e, s),
                                    r.getRng().collapsed && !a)
                                ) {
                                    const s = $m(e.getDoc(), i, o, t, n.decorate);
                                    So(s, pr), r.getRng().insertNode(s.dom), r.select(s.dom);
                                } else
                                    om(r, !1, () => {
                                        nm(e, (r) => {
                                            qm(e, r, i, t, n.decorate, o);
                                        });
                                    });
                            });
                        })(e, n, t, o);
                    });
                },
                annotationChanged: (e, t) => {
                    n.addListener(e, t);
                },
                remove: (t) => {
                    Xa(e, I.some(t)).each(({ elements: t }) => {
                        const n = e.selection.getBookmark();
                        r(t), e.selection.moveToBookmark(n);
                    });
                },
                removeAll: (t) => {
                    const n = e.selection.getBookmark();
                    ge(Za(e, t), (e, t) => {
                        r(e);
                    }),
                        e.selection.moveToBookmark(n);
                },
                getAll: (t) => {
                    const n = Za(e, t);
                    return pe(n, (e) => q(e, (e) => e.dom));
                },
            };
        },
        Wm = (e) => ({ getBookmark: O(Du, e), moveToBookmark: O(Pu, e) });
    Wm.isBookmarkNode = Lu;
    const Km = (e, t, n) => !n.collapsed && $(n.getClientRects(), (n) => ((e, t, n) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)(n, e, t)),
        Gm = (e, t, n) => {
            e.dispatch(t, n);
        },
        Ym = (e, t, n, o) => {
            e.dispatch("FormatApply", { format: t, node: n, vars: o });
        },
        Xm = (e, t, n, o) => {
            e.dispatch("FormatRemove", { format: t, node: n, vars: o });
        },
        Qm = (e, t) => e.dispatch("SetContent", t),
        Jm = (e, t) => e.dispatch("GetContent", t),
        Zm = (e, t) => e.dispatch("PastePlainTextToggle", { state: t }),
        ef = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            modifierPressed: (e) => e.shiftKey || e.ctrlKey || e.altKey || ef.metaKeyPressed(e),
            metaKeyPressed: (e) => (At.os.isMacOS() || At.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey),
        },
        tf = "data-mce-selected",
        nf = Math.abs,
        of = Math.round,
        rf = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] },
        sf = (e, t) => {
            const n = t.dom,
                o = t.getDoc(),
                r = document,
                s = t.getBody();
            let a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;
            const x = (e) => C(e) && (sr(e) || n.is(e, "figure.image")),
                k = (e) => cr(e) || n.hasClass(e, "mce-preview-object"),
                E = (e) => {
                    const n = e.target;
                    ((e, t) => {
                        if (((e) => "longpress" === e.type || 0 === e.type.indexOf("touch"))(e)) {
                            const n = e.touches[0];
                            return x(e.target) && !Km(n.clientX, n.clientY, t);
                        }
                        return x(e.target) && !Km(e.clientX, e.clientY, t);
                    })(e, t.selection.getRng()) &&
                        !e.isDefaultPrevented() &&
                        t.selection.select(n);
                },
                S = (e) => (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : n.is(e, "figure.image") ? [e.querySelector("img")] : [e]),
                _ = (e) => {
                    const o = ed(t);
                    return !!o && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? xn(yn(e.firstElementChild), o) : xn(yn(e), o));
                },
                N = (e, o, r) => {
                    if (C(r)) {
                        const s = S(e);
                        V(s, (e) => {
                            e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o) ? n.setStyle(e, o, r) : n.setAttrib(e, o, "" + r);
                        });
                    }
                },
                R = (e, t, n) => {
                    N(e, "width", t), N(e, "height", n);
                },
                A = (e) => {
                    let o, r, c, C, E;
                    (o = e.screenX - u),
                        (r = e.screenY - m),
                        (b = o * d[2] + f),
                        (v = r * d[3] + g),
                        (b = b < 5 ? 5 : b),
                        (v = v < 5 ? 5 : v),
                        (c = (x(a) || k(a)) && !1 !== td(t) ? !ef.modifierPressed(e) : ef.modifierPressed(e)),
                        c && (nf(o) > nf(r) ? ((v = of(b * p)), (b = of(v / p))) : ((b = of(v / p)), (v = of(b * p)))),
                        R(i, b, v),
                        (C = d.startPos.x + o),
                        (E = d.startPos.y + r),
                        (C = C > 0 ? C : 0),
                        (E = E > 0 ? E : 0),
                        n.setStyles(l, { left: C, top: E, display: "block" }),
                        (l.innerHTML = b + " &times; " + v),
                        d[2] < 0 && i.clientWidth <= b && n.setStyle(i, "left", void 0 + (f - b)),
                        d[3] < 0 && i.clientHeight <= v && n.setStyle(i, "top", void 0 + (g - v)),
                        (o = s.scrollWidth - y),
                        (r = s.scrollHeight - w),
                        o + r !== 0 && n.setStyles(l, { left: C - o, top: E - r }),
                        h ||
                            (((e, t, n, o, r) => {
                                e.dispatch("ObjectResizeStart", { target: t, width: n, height: o, origin: r });
                            })(t, a, f, g, "corner-" + d.name),
                            (h = !0));
                },
                O = () => {
                    const e = h;
                    (h = !1),
                        e && (N(a, "width", b), N(a, "height", v)),
                        n.unbind(o, "mousemove", A),
                        n.unbind(o, "mouseup", O),
                        r !== o && (n.unbind(r, "mousemove", A), n.unbind(r, "mouseup", O)),
                        n.remove(i),
                        n.remove(l),
                        n.remove(c),
                        T(a),
                        e &&
                            (((e, t, n, o, r) => {
                                e.dispatch("ObjectResized", { target: t, width: n, height: o, origin: r });
                            })(t, a, b, v, "corner-" + d.name),
                            n.setAttrib(a, "style", n.getAttrib(a, "style"))),
                        t.nodeChanged();
                },
                T = (e) => {
                    M();
                    const h = n.getPos(e, s),
                        C = h.x,
                        x = h.y,
                        E = e.getBoundingClientRect(),
                        N = E.width || E.right - E.left,
                        T = E.height || E.bottom - E.top;
                    a !== e && (D(), (a = e), (b = v = 0));
                    const B = t.dispatch("ObjectSelected", { target: e });
                    _(e) && !B.isDefaultPrevented()
                        ? ge(rf, (e, t) => {
                              let h = n.get("mceResizeHandle" + t);
                              h && n.remove(h),
                                  (h = n.add(s, "div", { id: "mceResizeHandle" + t, "data-mce-bogus": "all", class: "mce-resizehandle", unselectable: !0, style: "cursor:" + t + "-resize; margin:0; padding:0" })),
                                  n.bind(h, "mousedown", (h) => {
                                      h.stopImmediatePropagation(),
                                          h.preventDefault(),
                                          ((h) => {
                                              const b = S(a)[0];
                                              var v;
                                              (u = h.screenX),
                                                  (m = h.screenY),
                                                  (f = b.clientWidth),
                                                  (g = b.clientHeight),
                                                  (p = g / f),
                                                  (d = e),
                                                  (d.name = t),
                                                  (d.startPos = { x: N * e[0] + C, y: T * e[1] + x }),
                                                  (y = s.scrollWidth),
                                                  (w = s.scrollHeight),
                                                  (c = n.add(s, "div", { class: "mce-resize-backdrop", "data-mce-bogus": "all" })),
                                                  n.setStyles(c, { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" }),
                                                  (i = k((v = a)) ? n.create("img", { src: At.transparentSrc }) : v.cloneNode(!0)),
                                                  n.addClass(i, "mce-clonedresizable"),
                                                  n.setAttrib(i, "data-mce-bogus", "all"),
                                                  (i.contentEditable = "false"),
                                                  n.setStyles(i, { left: C, top: x, margin: 0 }),
                                                  R(i, N, T),
                                                  i.removeAttribute(tf),
                                                  s.appendChild(i),
                                                  n.bind(o, "mousemove", A),
                                                  n.bind(o, "mouseup", O),
                                                  r !== o && (n.bind(r, "mousemove", A), n.bind(r, "mouseup", O)),
                                                  (l = n.add(s, "div", { class: "mce-resize-helper", "data-mce-bogus": "all" }, f + " &times; " + g));
                                          })(h);
                                  }),
                                  (e.elm = h),
                                  n.setStyles(h, { left: N * e[0] + C - h.offsetWidth / 2, top: T * e[1] + x - h.offsetHeight / 2 });
                          })
                        : D(!1);
                },
                B = ja(T, 0),
                D = (e = !0) => {
                    B.cancel(),
                        M(),
                        a && e && a.removeAttribute(tf),
                        ge(rf, (e, t) => {
                            const o = n.get("mceResizeHandle" + t);
                            o && (n.unbind(o), n.remove(o));
                        });
                },
                P = (e, t) => n.isChildOf(e, t),
                L = (o) => {
                    if (h || t.removed || t.composing) return;
                    const r = "mousedown" === o.type ? o.target : e.getNode(),
                        a = to(yn(r), "table,img,figure.image,hr,video,span.mce-preview-object,details")
                            .map((e) => e.dom)
                            .filter((e) => n.isEditable(e.parentElement))
                            .getOrUndefined(),
                        i = C(a) ? n.getAttrib(a, tf, "1") : "1";
                    if (
                        (V(n.select(`img[${tf}],hr[${tf}]`), (e) => {
                            e.removeAttribute(tf);
                        }),
                        C(a) && P(a, s) && t.hasFocus())
                    ) {
                        I();
                        const t = e.getStart(!0);
                        if (P(t, a) && P(e.getEnd(!0), a)) return n.setAttrib(a, tf, i), void B.throttle(a);
                    }
                    D();
                },
                M = () => {
                    ge(rf, (e) => {
                        e.elm && (n.unbind(e.elm), delete e.elm);
                    });
                },
                I = () => {
                    try {
                        t.getDoc().execCommand("enableObjectResizing", !1, "false");
                    } catch (e) {}
                };
            return (
                t.on("init", () => {
                    I(),
                        t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L),
                        t.on("keyup compositionend", (e) => {
                            a && "TABLE" === a.nodeName && L(e);
                        }),
                        t.on("hide blur", D),
                        t.on("contextmenu longpress", E, !0);
                }),
                t.on("remove", M),
                {
                    isResizable: _,
                    showResizeRect: T,
                    hideResizeRect: D,
                    updateResizeRect: L,
                    destroy: () => {
                        B.cancel(), (a = i = c = null);
                    },
                }
            );
        },
        af = (e, t, n) => {
            const o = e.document.createRange();
            var r;
            return (
                (r = o),
                t.fold(
                    (e) => {
                        r.setStartBefore(e.dom);
                    },
                    (e, t) => {
                        r.setStart(e.dom, t);
                    },
                    (e) => {
                        r.setStartAfter(e.dom);
                    }
                ),
                ((e, t) => {
                    t.fold(
                        (t) => {
                            e.setEndBefore(t.dom);
                        },
                        (t, n) => {
                            e.setEnd(t.dom, n);
                        },
                        (t) => {
                            e.setEndAfter(t.dom);
                        }
                    );
                })(o, n),
                o
            );
        },
        lf = (e, t, n, o, r) => {
            const s = e.document.createRange();
            return s.setStart(t.dom, n), s.setEnd(o.dom, r), s;
        },
        df = al([{ ltr: ["start", "soffset", "finish", "foffset"] }, { rtl: ["start", "soffset", "finish", "foffset"] }]),
        cf = (e, t, n) => t(yn(n.startContainer), n.startOffset, yn(n.endContainer), n.endOffset);
    df.ltr, df.rtl;
    const uf = (e, t, n, o) => ({ start: e, soffset: t, finish: n, foffset: o }),
        mf = document.caretPositionFromPoint
            ? (e, t, n) => {
                  var o, r;
                  return I.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind((t) => {
                      if (null === t.offsetNode) return I.none();
                      const n = e.dom.createRange();
                      return n.setStart(t.offsetNode, t.offset), n.collapse(), I.some(n);
                  });
              }
            : document.caretRangeFromPoint
            ? (e, t, n) => {
                  var o, r;
                  return I.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n));
              }
            : I.none,
        ff = al([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        gf = { before: ff.before, on: ff.on, after: ff.after, cata: (e, t, n, o) => e.fold(t, n, o), getStart: (e) => e.fold(R, R, R) },
        pf = al([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        hf = {
            domRange: pf.domRange,
            relative: pf.relative,
            exact: pf.exact,
            exactFromRange: (e) => pf.exact(e.start, e.soffset, e.finish, e.foffset),
            getWin: (e) => {
                const t = ((e) => e.match({ domRange: (e) => yn(e.startContainer), relative: (e, t) => gf.getStart(e), exact: (e, t, n, o) => e }))(e);
                return Rn(t);
            },
            range: uf,
        },
        bf = (e, t) => {
            const n = Ht(e);
            return "input" === n ? gf.after(e) : H(["br", "img"], n) ? (0 === t ? gf.before(e) : gf.after(e)) : gf.on(e, t);
        },
        vf = (e, t) => {
            const n = e.fold(gf.before, bf, gf.after),
                o = t.fold(gf.before, bf, gf.after);
            return hf.relative(n, o);
        },
        yf = (e, t, n, o) => {
            const r = bf(e, t),
                s = bf(n, o);
            return hf.relative(r, s);
        },
        Cf = (e, t) => {
            const n = (t || document).createDocumentFragment();
            return (
                V(e, (e) => {
                    n.appendChild(e.dom);
                }),
                yn(n)
            );
        },
        wf = (e) => {
            const t = hf.getWin(e).dom,
                n = (e, n, o, r) => lf(t, e, n, o, r),
                o = ((e) =>
                    e.match({
                        domRange: (e) => {
                            const t = yn(e.startContainer),
                                n = yn(e.endContainer);
                            return yf(t, e.startOffset, n, e.endOffset);
                        },
                        relative: vf,
                        exact: yf,
                    }))(e);
            return ((e, t) => {
                const n = ((e, t) =>
                    t.match({
                        domRange: (e) => ({ ltr: N(e), rtl: I.none }),
                        relative: (t, n) => ({ ltr: Pe(() => af(e, t, n)), rtl: Pe(() => I.some(af(e, n, t))) }),
                        exact: (t, n, o, r) => ({ ltr: Pe(() => lf(e, t, n, o, r)), rtl: Pe(() => I.some(lf(e, o, r, t, n))) }),
                    }))(e, t);
                return ((e, t) => {
                    const n = t.ltr();
                    return n.collapsed
                        ? t
                              .rtl()
                              .filter((e) => !1 === e.collapsed)
                              .map((e) => df.rtl(yn(e.endContainer), e.endOffset, yn(e.startContainer), e.startOffset))
                              .getOrThunk(() => cf(0, df.ltr, n))
                        : cf(0, df.ltr, n);
                })(0, n);
            })(t, o).match({ ltr: n, rtl: n });
        },
        xf = (e, t, n) =>
            ((e, t, n) =>
                ((e, t, n) => {
                    const o = yn(e.document);
                    return mf(o, t, n).map((e) => uf(yn(e.startContainer), e.startOffset, yn(e.endContainer), e.endOffset));
                })(e, t, n))(Rn(yn(n)).dom, e, t)
                .map((e) => {
                    const t = n.createRange();
                    return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), t;
                })
                .getOrUndefined(),
        kf = (e, t) => C(e) && C(t) && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset,
        Ef = (e, t, n) =>
            null !==
            ((e, t, n) => {
                let o = e;
                for (; o && o !== t; ) {
                    if (n(o)) return o;
                    o = o.parentNode;
                }
                return null;
            })(e, t, n),
        Sf = (e, t, n) => Ef(e, t, (e) => e.nodeName === n),
        _f = (e, t) => $r(e) && !Ef(e, t, xu),
        Nf = (e, t, n) => {
            const o = t.parentNode;
            if (o) {
                const r = new zo(t, e.getParent(o, e.isBlock) || e.getRoot());
                let s;
                for (; (s = r[n ? "prev" : "next"]()); ) if (rr(s)) return !0;
            }
            return !1;
        },
        Rf = (e, t, n, o, r) => {
            const s = e.getRoot(),
                a = e.schema.getNonEmptyElements(),
                i = r.parentNode;
            let l, d;
            if (!i) return I.none();
            const c = e.getParent(i, e.isBlock) || s;
            if (o && rr(r) && t && e.isEmpty(c)) return I.some(Li(i, e.nodeIndex(r)));
            const u = new zo(r, c);
            for (; (d = u[o ? "prev" : "next"]()); ) {
                if ("false" === e.getContentEditableParent(d) || _f(d, s)) return I.none();
                if (Jo(d) && d.data.length > 0) return Sf(d, s, "A") ? I.none() : I.some(Li(d, o ? d.data.length : 0));
                if (e.isBlock(d) || a[d.nodeName.toLowerCase()]) return I.none();
                l = d;
            }
            return tr(l) ? I.none() : n && l ? I.some(Li(l, 0)) : I.none();
        },
        Af = (e, t, n, o) => {
            const r = e.getRoot();
            let s,
                a = !1,
                i = n ? o.startContainer : o.endContainer,
                l = n ? o.startOffset : o.endOffset;
            const d = $o(i) && l === i.childNodes.length,
                c = e.schema.getNonEmptyElements();
            let u = n;
            if ($r(i)) return I.none();
            if (($o(i) && l > i.childNodes.length - 1 && (u = !1), nr(i) && ((i = r), (l = 0)), i === r)) {
                if (u && ((s = i.childNodes[l > 0 ? l - 1 : 0]), s)) {
                    if ($r(s)) return I.none();
                    if (c[s.nodeName] || Yo(s)) return I.none();
                }
                if (i.hasChildNodes()) {
                    if (((l = Math.min(!u && l > 0 ? l - 1 : l, i.childNodes.length - 1)), (i = i.childNodes[l]), (l = Jo(i) && d ? i.data.length : 0), !t && i === r.lastChild && Yo(i))) return I.none();
                    if (
                        ((e, t) => {
                            let n = t;
                            for (; n && n !== e; ) {
                                if (ir(n)) return !0;
                                n = n.parentNode;
                            }
                            return !1;
                        })(r, i) ||
                        $r(i)
                    )
                        return I.none();
                    if (i.hasChildNodes() && !Yo(i)) {
                        s = i;
                        const t = new zo(i, r);
                        do {
                            if (ir(s) || $r(s)) {
                                a = !1;
                                break;
                            }
                            if (Jo(s) && s.data.length > 0) {
                                (l = u ? 0 : s.data.length), (i = s), (a = !0);
                                break;
                            }
                            if (c[s.nodeName.toLowerCase()] && !dr(s)) {
                                (l = e.nodeIndex(s)), (i = s.parentNode), u || l++, (a = !0);
                                break;
                            }
                        } while ((s = u ? t.next() : t.prev()));
                    }
                }
            }
            return (
                t &&
                    (Jo(i) &&
                        0 === l &&
                        Rf(e, d, t, !0, i).each((e) => {
                            (i = e.container()), (l = e.offset()), (a = !0);
                        }),
                    $o(i) &&
                        ((s = i.childNodes[l]),
                        s || (s = i.childNodes[l - 1]),
                        !s ||
                            !rr(s) ||
                            ((e, t) => {
                                var n;
                                return "A" === (null === (n = e.previousSibling) || void 0 === n ? void 0 : n.nodeName);
                            })(s) ||
                            Nf(e, s, !1) ||
                            Nf(e, s, !0) ||
                            Rf(e, d, t, !0, s).each((e) => {
                                (i = e.container()), (l = e.offset()), (a = !0);
                            }))),
                u &&
                    !t &&
                    Jo(i) &&
                    l === i.data.length &&
                    Rf(e, d, t, !1, i).each((e) => {
                        (i = e.container()), (l = e.offset()), (a = !0);
                    }),
                a && i ? I.some(Li(i, l)) : I.none()
            );
        },
        Of = (e, t) => {
            const n = t.collapsed,
                o = t.cloneRange(),
                r = Li.fromRangeStart(t);
            return (
                Af(e, n, !0, o).each((e) => {
                    (n && Li.isAbove(r, e)) || o.setStart(e.container(), e.offset());
                }),
                n ||
                    Af(e, n, !1, o).each((e) => {
                        o.setEnd(e.container(), e.offset());
                    }),
                n && o.collapse(!0),
                kf(t, o) ? I.none() : I.some(o)
            );
        },
        Tf = (e, t) => e.splitText(t),
        Bf = (e) => {
            let t = e.startContainer,
                n = e.startOffset,
                o = e.endContainer,
                r = e.endOffset;
            if (t === o && Jo(t)) {
                if (n > 0 && n < t.data.length)
                    if (((o = Tf(t, n)), (t = o.previousSibling), r > n)) {
                        r -= n;
                        const e = Tf(o, r).previousSibling;
                        (t = o = e), (r = e.data.length), (n = 0);
                    } else r = 0;
            } else if ((Jo(t) && n > 0 && n < t.data.length && ((t = Tf(t, n)), (n = 0)), Jo(o) && r > 0 && r < o.data.length)) {
                const e = Tf(o, r).previousSibling;
                (o = e), (r = e.data.length);
            }
            return { startContainer: t, startOffset: n, endContainer: o, endOffset: r };
        },
        Df = (e) => ({
            walk: (t, n) => zm(e, t, n),
            split: Bf,
            expand: (t, n = { type: "word" }) => {
                if ("word" === n.type) {
                    const n = Um(e, t, [{ inline: "span" }]),
                        o = e.createRng();
                    return o.setStart(n.startContainer, n.startOffset), o.setEnd(n.endContainer, n.endOffset), o;
                }
                return t;
            },
            normalize: (t) => Of(e, t).fold(L, (e) => (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0)),
        });
    (Df.compareRanges = kf), (Df.getCaretRangeFromPoint = xf), (Df.getSelectedNode = gi), (Df.getNode = pi);
    const Pf = ((e, t) => {
            const n = (t) => {
                    const n = ((e) => {
                        const t = e.dom;
                        return Yn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
                    })(t);
                    if (n <= 0 || null === n) {
                        const n = lo(t, e);
                        return parseFloat(n) || 0;
                    }
                    return n;
                },
                o = (e, t) =>
                    X(
                        t,
                        (t, n) => {
                            const o = lo(e, n),
                                r = void 0 === o ? 0 : parseInt(o, 10);
                            return isNaN(r) ? t : t + r;
                        },
                        0
                    );
            return {
                set: (t, n) => {
                    if (!x(n) && !n.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + n);
                    const o = t.dom;
                    ro(o) && (o.style[e] = n + "px");
                },
                get: n,
                getOuter: n,
                aggregate: o,
                max: (e, t, n) => {
                    const r = o(e, n);
                    return t > r ? t - r : 0;
                },
            };
        })("height"),
        Lf = () => yn(document),
        Mf = (e, t) =>
            e.view(t).fold(N([]), (t) => {
                const n = e.owner(t),
                    o = Mf(e, n);
                return [t].concat(o);
            });
    var If = Object.freeze({
        __proto__: null,
        view: (e) => {
            var t;
            return (e.dom === document ? I.none() : I.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(yn);
        },
        owner: (e) => Nn(e),
    });
    const Ff = (e) => "textarea" === Ht(e),
        Uf = (e, t) => {
            const n = ((e) => {
                    const t = e.dom.ownerDocument,
                        n = t.body,
                        o = t.defaultView,
                        r = t.documentElement;
                    if (n === e.dom) return Ao(n.offsetLeft, n.offsetTop);
                    const s = Oo(null == o ? void 0 : o.pageYOffset, r.scrollTop),
                        a = Oo(null == o ? void 0 : o.pageXOffset, r.scrollLeft),
                        i = Oo(r.clientTop, n.clientTop),
                        l = Oo(r.clientLeft, n.clientLeft);
                    return To(e).translate(a - l, s - i);
                })(e),
                o = ((e) => Pf.get(e))(e);
            return { element: e, bottom: n.top + o, height: o, pos: n, cleanup: t };
        },
        zf = (e, t, n, o) => {
            qf(e, (r, s) => Hf(e, t, n, o), n);
        },
        jf = (e, t, n, o, r) => {
            const s = { elm: o.element.dom, alignToTop: r };
            ((e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented())(e, s) ||
                (n(e, t, Bo(t).top, o, r),
                ((e, t) => {
                    e.dispatch("AfterScrollIntoView", t);
                })(e, s));
        },
        Hf = (e, t, n, o) => {
            const r = yn(e.getBody()),
                s = yn(e.getDoc());
            r.dom.offsetWidth;
            const a = ((e, t) => {
                const n = ((e, t) => {
                        const n = Mn(e);
                        if (0 === n.length || Ff(e)) return { element: e, offset: t };
                        if (t < n.length && !Ff(n[t])) return { element: n[t], offset: 0 };
                        {
                            const o = n[n.length - 1];
                            return Ff(o) ? { element: e, offset: t } : "img" === Ht(o) ? { element: o, offset: 1 } : Kt(o) ? { element: o, offset: vr(o).length } : { element: o, offset: Mn(o).length };
                        }
                    })(e, t),
                    o = hn('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>');
                return go(n.element, o), Uf(o, () => wo(o));
            })(yn(n.startContainer), n.startOffset);
            jf(e, s, t, a, o), a.cleanup();
        },
        $f = (e, t, n, o) => {
            const r = yn(e.getDoc());
            jf(e, r, n, ((e) => Uf(yn(e), E))(t), o);
        },
        qf = (e, t, n) => {
            const o = n.startContainer,
                r = n.startOffset,
                s = n.endContainer,
                a = n.endOffset;
            t(yn(o), yn(s));
            const i = e.dom.createRng();
            i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n);
        },
        Vf = (e, t, n, o, r) => {
            const s = t.pos;
            if (o) Do(s.left, s.top, r);
            else {
                const o = s.top - n + t.height;
                Do(-e.getBody().getBoundingClientRect().left, o, r);
            }
        },
        Wf = (e, t, n, o, r, s) => {
            const a = o + n,
                i = r.pos.top,
                l = r.bottom,
                d = l - i >= o;
            i < n ? Vf(e, r, o, !1 !== s, t) : i > a ? Vf(e, r, o, d ? !1 !== s : !0 === s, t) : l > a && !d && Vf(e, r, o, !0 === s, t);
        },
        Kf = (e, t, n, o, r) => {
            const s = Rn(t).dom.innerHeight;
            Wf(e, t, n, s, o, r);
        },
        Gf = (e, t, n, o, r) => {
            const s = Rn(t).dom.innerHeight;
            Wf(e, t, n, s, o, r);
            const a = ((e) => {
                    const t = Lf(),
                        n = Bo(t),
                        o = ((e, t) => {
                            const n = t.owner(e);
                            return Mf(t, n);
                        })(e, If),
                        r = To(e),
                        s = Y(
                            o,
                            (e, t) => {
                                const n = To(t);
                                return { left: e.left + n.left, top: e.top + n.top };
                            },
                            { left: 0, top: 0 }
                        );
                    return Ao(s.left + r.left + n.left, s.top + r.top + n.top);
                })(o.element),
                i = Mo(window);
            a.top < i.y ? Po(o.element, !1 !== r) : a.top > i.bottom && Po(o.element, !0 === r);
        },
        Yf = (e, t, n) => zf(e, Kf, t, n),
        Xf = (e, t, n) => $f(e, t, Kf, n),
        Qf = (e, t, n) => zf(e, Gf, t, n),
        Jf = (e, t, n) => $f(e, t, Gf, n),
        Zf = (e, t, n) => {
            (e.inline ? Yf : Qf)(e, t, n);
        },
        eg = (e) => e.dom.focus(),
        tg = (e) => {
            const t = qn(e).dom;
            return e.dom === t.activeElement;
        },
        ng = (e = Lf()) => I.from(e.dom.activeElement).map(yn),
        og = (e, t) => {
            const n = Kt(t) ? vr(t).length : Mn(t).length + 1;
            return e > n ? n : e < 0 ? 0 : e;
        },
        rg = (e) => hf.range(e.start, og(e.soffset, e.start), e.finish, og(e.foffset, e.finish)),
        sg = (e, t) => !Ho(t.dom) && (Sn(e, t) || En(e, t)),
        ag = (e) => (t) => sg(e, t.start) && sg(e, t.finish),
        ig = (e) => hf.range(yn(e.startContainer), e.startOffset, yn(e.endContainer), e.endOffset),
        lg = (e) => {
            const t = document.createRange();
            try {
                return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), I.some(t);
            } catch (e) {
                return I.none();
            }
        },
        dg = (e) => {
            const t = ((e) => e.inline || At.browser.isFirefox())(e)
                ? ((n = yn(e.getBody())),
                  ((e) => {
                      const t = e.getSelection();
                      return (t && 0 !== t.rangeCount ? I.from(t.getRangeAt(0)) : I.none()).map(ig);
                  })(Rn(n).dom).filter(ag(n)))
                : I.none();
            var n;
            e.bookmark = t.isSome() ? t : e.bookmark;
        },
        cg = (e) =>
            (e.bookmark ? e.bookmark : I.none())
                .bind((t) => {
                    return (n = yn(e.getBody())), (o = t), I.from(o).filter(ag(n)).map(rg);
                    var n, o;
                })
                .bind(lg),
        ug = {
            isEditorUIElement: (e) => {
                const t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
            },
        },
        mg = {
            setEditorTimeout: (e, t, n) =>
                ((e, t) => (x(t) || (t = 0), setTimeout(e, t)))(() => {
                    e.removed || t();
                }, n),
            setEditorInterval: (e, t, n) => {
                const o = ((e, t) => (x(t) || (t = 0), setInterval(e, t)))(() => {
                    e.removed ? clearInterval(o) : t();
                }, n);
                return o;
            },
        };
    let fg;
    const gg = Oa.DOM,
        pg = (e) => {
            const t = e.classList;
            return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"));
        },
        hg = (e, t) => {
            const n = gd(e),
                o = gg.getParent(t, (t) => ((e) => $o(e) && ug.isEditorUIElement(e))(t) || (!!n && e.dom.is(t, n)));
            return null !== o;
        },
        bg = (e) => {
            try {
                const t = qn(yn(e.getElement()));
                return ng(t).fold(
                    () => document.body,
                    (e) => e.dom
                );
            } catch (e) {
                return document.body;
            }
        },
        vg = (e, t) => {
            const n = t.editor;
            ((e) => {
                const t = ja(() => {
                    dg(e);
                }, 0);
                e.on("init", () => {
                    e.inline &&
                        ((e, t) => {
                            const n = () => {
                                t.throttle();
                            };
                            Oa.DOM.bind(document, "mouseup", n),
                                e.on("remove", () => {
                                    Oa.DOM.unbind(document, "mouseup", n);
                                });
                        })(e, t),
                        ((e, t) => {
                            ((e, t) => {
                                e.on("mouseup touchend", (e) => {
                                    t.throttle();
                                });
                            })(e, t),
                                e.on("keyup NodeChange AfterSetSelectionRange", (t) => {
                                    ((e) => "nodechange" === e.type && e.selectionChange)(t) || dg(e);
                                });
                        })(e, t);
                }),
                    e.on("remove", () => {
                        t.cancel();
                    });
            })(n);
            const o = (e, t) => {
                nc(e) && !0 !== e.inline && t(yn(e.getContainer()), "tox-edit-focus");
            };
            n.on("focusin", () => {
                const t = e.focusedEditor;
                pg(bg(n)) && o(n, un), t !== n && (t && t.dispatch("blur", { focusedEditor: n }), e.setActive(n), (e.focusedEditor = n), n.dispatch("focus", { blurredEditor: t }), n.focus(!0));
            }),
                n.on("focusout", () => {
                    mg.setEditorTimeout(n, () => {
                        const t = e.focusedEditor;
                        (pg(bg(n)) && t === n) || o(n, fn), hg(n, bg(n)) || t !== n || (n.dispatch("blur", { focusedEditor: null }), (e.focusedEditor = null));
                    });
                }),
                fg ||
                    ((fg = (t) => {
                        const n = e.activeEditor;
                        n &&
                            Kn(t).each((t) => {
                                const o = t;
                                o.ownerDocument === document && (o === document.body || hg(n, o) || e.focusedEditor !== n || (n.dispatch("blur", { focusedEditor: null }), (e.focusedEditor = null)));
                            });
                    }),
                    gg.bind(document, "focusin", fg));
        },
        yg = (e, t) => {
            e.focusedEditor === t.editor && (e.focusedEditor = null), !e.activeEditor && fg && (gg.unbind(document, "focusin", fg), (fg = null));
        },
        Cg = (e, t) => {
            ((e, t) => ((e) => (e.collapsed ? I.from(pi(e.startContainer, e.startOffset)).map(yn) : I.none()))(t).bind((t) => (Rr(t) ? I.some(t) : Sn(e, t) ? I.none() : I.some(e))))(yn(e.getBody()), t)
                .bind((e) => yu(e.dom))
                .fold(
                    () => {
                        e.selection.normalize();
                    },
                    (t) => e.selection.setRng(t.toRange())
                );
        },
        wg = (e) => {
            if (e.setActive)
                try {
                    e.setActive();
                } catch (t) {
                    e.focus();
                }
            else e.focus();
        },
        xg = (e) =>
            e.inline
                ? ((e) => {
                      const t = e.getBody();
                      return t && ((n = yn(t)), tg(n) || ((o = n), ng(qn(o)).filter((e) => o.dom.contains(e.dom))).isSome());
                      var n, o;
                  })(e)
                : ((e) => C(e.iframeElement) && tg(yn(e.iframeElement)))(e),
        kg = (e) => e.editorManager.setActive(e),
        Eg = (e, t, n, o, r) => {
            const s = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return I.from(s)
                .map(yn)
                .map((e) => (o && t.collapsed ? e : In(e, r(e, a)).getOr(e)))
                .bind((e) => (Wt(e) ? I.some(e) : An(e).filter(Wt)))
                .map((e) => e.dom)
                .getOr(e);
        },
        Sg = (e, t, n = !1) => Eg(e, t, !0, n, (e, t) => Math.min(zn(e), t)),
        _g = (e, t, n = !1) => Eg(e, t, !1, n, (e, t) => (t > 0 ? t - 1 : t)),
        Ng = (e, t) => {
            const n = e;
            for (; e && Jo(e) && 0 === e.length; ) e = t ? e.nextSibling : e.previousSibling;
            return e || n;
        },
        Rg = (e, t) =>
            q(t, (t) => {
                const n = e.dispatch("GetSelectionRange", { range: t });
                return n.range !== t ? n.range : t;
            }),
        Ag = ["img", "br"],
        Og = (e) => {
            const t = yr(e)
                .filter((e) => 0 !== e.trim().length || e.indexOf(pr) > -1)
                .isSome();
            return t || H(Ag, Ht(e)) || ((e) => Vt(e) && "false" === en(e, "contenteditable"))(e);
        },
        Tg = "[data-mce-autocompleter]",
        Bg = (e, t) => {
            if (Dg(yn(e.getBody())).isNone()) {
                const o = hn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
                bo(o, yn(t.extractContents())),
                    t.insertNode(o.dom),
                    An(o).each((e) => e.dom.normalize()),
                    ((n = o),
                    ((e, t) => {
                        const n = (e) => {
                            const o = Mn(e);
                            for (let e = o.length - 1; e >= 0; e--) {
                                const r = o[e];
                                if (t(r)) return I.some(r);
                                const s = n(r);
                                if (s.isSome()) return s;
                            }
                            return I.none();
                        };
                        return n(e);
                    })(n, Og)).map((t) => {
                        e.selection.setCursorLocation(
                            t.dom,
                            ((e) =>
                                "img" === Ht(e)
                                    ? 1
                                    : yr(e).fold(
                                          () => Mn(e).length,
                                          (e) => e.length
                                      ))(t)
                        );
                    });
            }
            var n;
        },
        Dg = (e) => eo(e, Tg),
        Pg = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        Lg = (e, t, n) => {
            const o = n ? "lastChild" : "firstChild",
                r = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                let n = e[r];
                if (n) return n;
                for (let o = e.parent; o && o !== t; o = o.parent) if (((n = o[r]), n)) return n;
            }
        },
        Mg = (e) => {
            var t;
            const n = null !== (t = e.value) && void 0 !== t ? t : "";
            if (!ds(n)) return !1;
            const o = e.parent;
            return !o || ("span" === o.name && !o.attr("style")) || !/^[ ]+$/.test(n);
        },
        Ig = (e) => {
            const t = "a" === e.name && !e.attr("href") && e.attr("id");
            return e.attr("name") || (e.attr("id") && !e.firstChild) || e.attr("data-mce-bookmark") || t;
        };
    class Fg {
        static create(e, t) {
            const n = new Fg(e, Pg[e] || 1);
            return (
                t &&
                    ge(t, (e, t) => {
                        n.attr(t, e);
                    }),
                n
            );
        }
        constructor(e, t) {
            (this.name = e), (this.type = t), 1 === t && ((this.attributes = []), (this.attributes.map = {}));
        }
        replace(e) {
            const t = this;
            return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
        }
        attr(e, t) {
            const n = this;
            if (!m(e))
                return (
                    C(e) &&
                        ge(e, (e, t) => {
                            n.attr(t, e);
                        }),
                    n
                );
            const o = n.attributes;
            if (o) {
                if (void 0 !== t) {
                    if (null === t) {
                        if (e in o.map) {
                            delete o.map[e];
                            let t = o.length;
                            for (; t--; ) if (o[t].name === e) return o.splice(t, 1), n;
                        }
                        return n;
                    }
                    if (e in o.map) {
                        let n = o.length;
                        for (; n--; )
                            if (o[n].name === e) {
                                o[n].value = t;
                                break;
                            }
                    } else o.push({ name: e, value: t });
                    return (o.map[e] = t), n;
                }
                return o.map[e];
            }
        }
        clone() {
            const e = this,
                t = new Fg(e.name, e.type),
                n = e.attributes;
            if (n) {
                const e = [];
                e.map = {};
                for (let t = 0, o = n.length; t < o; t++) {
                    const o = n[t];
                    "id" !== o.name && ((e[e.length] = { name: o.name, value: o.value }), (e.map[o.name] = o.value));
                }
                t.attributes = e;
            }
            return (t.value = e.value), t;
        }
        wrap(e) {
            const t = this;
            return t.parent && (t.parent.insert(e, t), e.append(t)), t;
        }
        unwrap() {
            const e = this;
            for (let t = e.firstChild; t; ) {
                const n = t.next;
                e.insert(t, e, !0), (t = n);
            }
            e.remove();
        }
        remove() {
            const e = this,
                t = e.parent,
                n = e.next,
                o = e.prev;
            return t && (t.firstChild === e ? ((t.firstChild = n), n && (n.prev = null)) : o && (o.next = n), t.lastChild === e ? ((t.lastChild = o), o && (o.next = null)) : n && (n.prev = o), (e.parent = e.next = e.prev = null)), e;
        }
        append(e) {
            const t = this;
            e.parent && e.remove();
            const n = t.lastChild;
            return n ? ((n.next = e), (e.prev = n), (t.lastChild = e)) : (t.lastChild = t.firstChild = e), (e.parent = t), e;
        }
        insert(e, t, n) {
            e.parent && e.remove();
            const o = t.parent || this;
            return (
                n
                    ? (t === o.firstChild ? (o.firstChild = e) : t.prev && (t.prev.next = e), (e.prev = t.prev), (e.next = t), (t.prev = e))
                    : (t === o.lastChild ? (o.lastChild = e) : t.next && (t.next.prev = e), (e.next = t.next), (e.prev = t), (t.next = e)),
                (e.parent = o),
                e
            );
        }
        getAll(e) {
            const t = this,
                n = [];
            for (let o = t.firstChild; o; o = Lg(o, t)) o.name === e && n.push(o);
            return n;
        }
        children() {
            const e = [];
            for (let t = this.firstChild; t; t = t.next) e.push(t);
            return e;
        }
        empty() {
            const e = this;
            if (e.firstChild) {
                const t = [];
                for (let n = e.firstChild; n; n = Lg(n, e)) t.push(n);
                let n = t.length;
                for (; n--; ) {
                    const e = t[n];
                    e.parent = e.firstChild = e.lastChild = e.next = e.prev = null;
                }
            }
            return (e.firstChild = e.lastChild = null), e;
        }
        isEmpty(e, t = {}, n) {
            var o;
            const r = this;
            let s = r.firstChild;
            if (Ig(r)) return !1;
            if (s)
                do {
                    if (1 === s.type) {
                        if (s.attr("data-mce-bogus")) continue;
                        if (e[s.name]) return !1;
                        if (Ig(s)) return !1;
                    }
                    if (8 === s.type) return !1;
                    if (3 === s.type && !Mg(s)) return !1;
                    if (3 === s.type && s.parent && t[s.parent.name] && ds(null !== (o = s.value) && void 0 !== o ? o : "")) return !1;
                    if (n && n(s)) return !1;
                } while ((s = Lg(s, r)));
            return !0;
        }
        walk(e) {
            return Lg(this, null, e);
        }
    }
    const Ug = (e) => (0 === e.length ? "" : `${q(e, (e) => `[${e}]`).join(",")},`) + '[data-mce-bogus="all"]',
        zg = (e) => document.createTreeWalker(e, NodeFilter.SHOW_COMMENT, null),
        jg = (e, t) => null !== e.querySelector(Ug(t)),
        Hg = (e, t) => {
            V(((e, t) => e.querySelectorAll(Ug(t)))(e, t), (e) => {
                const n = yn(e);
                "all" === en(n, "data-mce-bogus")
                    ? wo(n)
                    : V(t, (e) => {
                          nn(n, e) && on(n, e);
                      });
            });
        },
        $g = (e) => e.cloneNode(!0),
        qg = (e, t) => {
            let n = e;
            return (
                ((e) => null !== zg(e).nextNode())(e)
                    ? ((n = $g(e)),
                      ((e) => {
                          const t = zg(e);
                          let n = t.nextNode();
                          for (; null !== n; ) {
                              const e = t.currentNode;
                              (n = t.nextNode()), m(e.nodeValue) && e.nodeValue.includes(Mr) && wo(yn(e));
                          }
                      })(n),
                      jg(n, t) && Hg(n, t))
                    : jg(e, t) && ((n = $g(e)), Hg(n, t)),
                n
            );
        },
        Vg = (e) => {
            const t = Fo(e, "[data-mce-bogus]");
            V(t, (e) => {
                "all" === en(e, "data-mce-bogus") ? wo(e) : Er(e) ? (go(e, vn(gr)), wo(e)) : xo(e);
            });
        },
        Wg = (e) => {
            const t = Fo(e, "input");
            V(t, (e) => {
                on(e, "name");
            });
        },
        Kg = (e, t, n) => {
            let o;
            return (
                (o =
                    "raw" === t.format
                        ? Dt.trim(Fr(qg(n, e.serializer.getTempAttrs()).innerHTML))
                        : "text" === t.format
                        ? ((e, t) => {
                              const n = e.getDoc(),
                                  o = qn(yn(e.getBody())),
                                  r = bn("div", n);
                              Jt(r, "data-mce-bogus", "all"), io(r, { position: "fixed", left: "-9999999px", top: "0" }), So(r, t.innerHTML), Vg(r), Wg(r);
                              const s = ((e) => (jn(e) ? e : yn(Nn(e).dom.body)))(o);
                              bo(s, r);
                              const a = Fr(r.dom.innerText);
                              return wo(r), a;
                          })(e, n)
                        : "tree" === t.format
                        ? e.serializer.serialize(n, t)
                        : ((e, t) => {
                              const n = Nl(e),
                                  o = new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);
                              return t.replace(o, "");
                          })(e, e.serializer.serialize(n, t))),
                "text" !== t.format && !Or(yn(n)) && m(o) ? Dt.trim(o) : o
            );
        },
        Gg = Dt.makeMap,
        Yg = (e) => {
            const t = [],
                n = (e = e || {}).indent,
                o = Gg(e.indent_before || ""),
                r = Gg(e.indent_after || ""),
                s = Zs.getEncodeFunc(e.entity_encoding || "raw", e.entities),
                a = "xhtml" !== e.element_format;
            return {
                start: (e, i, l) => {
                    if (n && o[e] && t.length > 0) {
                        const e = t[t.length - 1];
                        e.length > 0 && "\n" !== e && t.push("\n");
                    }
                    if ((t.push("<", e), i))
                        for (let e = 0, n = i.length; e < n; e++) {
                            const n = i[e];
                            t.push(" ", n.name, '="', s(n.value, !0), '"');
                        }
                    if (((t[t.length] = !l || a ? ">" : " />"), l && n && r[e] && t.length > 0)) {
                        const e = t[t.length - 1];
                        e.length > 0 && "\n" !== e && t.push("\n");
                    }
                },
                end: (e) => {
                    let o;
                    t.push("</", e, ">"), n && r[e] && t.length > 0 && ((o = t[t.length - 1]), o.length > 0 && "\n" !== o && t.push("\n"));
                },
                text: (e, n) => {
                    e.length > 0 && (t[t.length] = n ? e : s(e));
                },
                cdata: (e) => {
                    t.push("<![CDATA[", e, "]]>");
                },
                comment: (e) => {
                    t.push("\x3c!--", e, "--\x3e");
                },
                pi: (e, o) => {
                    o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"), n && t.push("\n");
                },
                doctype: (e) => {
                    t.push("<!DOCTYPE", e, ">", n ? "\n" : "");
                },
                reset: () => {
                    t.length = 0;
                },
                getContent: () => t.join("").replace(/\n$/, ""),
            };
        },
        Xg = (e = {}, t = ca()) => {
            const n = Yg(e);
            return (
                (e.validate = !("validate" in e) || e.validate),
                {
                    serialize: (o) => {
                        const r = e.validate,
                            s = {
                                3: (e) => {
                                    var t;
                                    n.text(null !== (t = e.value) && void 0 !== t ? t : "", e.raw);
                                },
                                8: (e) => {
                                    var t;
                                    n.comment(null !== (t = e.value) && void 0 !== t ? t : "");
                                },
                                7: (e) => {
                                    n.pi(e.name, e.value);
                                },
                                10: (e) => {
                                    var t;
                                    n.doctype(null !== (t = e.value) && void 0 !== t ? t : "");
                                },
                                4: (e) => {
                                    var t;
                                    n.cdata(null !== (t = e.value) && void 0 !== t ? t : "");
                                },
                                11: (e) => {
                                    let t = e;
                                    if ((t = t.firstChild))
                                        do {
                                            a(t);
                                        } while ((t = t.next));
                                },
                            };
                        n.reset();
                        const a = (e) => {
                            var o;
                            const i = s[e.type];
                            if (i) i(e);
                            else {
                                const s = e.name,
                                    i = s in t.getVoidElements();
                                let l = e.attributes;
                                if (r && l && l.length > 1) {
                                    const n = [];
                                    n.map = {};
                                    const o = t.getElementRule(e.name);
                                    if (o) {
                                        for (let e = 0, t = o.attributesOrder.length; e < t; e++) {
                                            const t = o.attributesOrder[e];
                                            if (t in l.map) {
                                                const e = l.map[t];
                                                (n.map[t] = e), n.push({ name: t, value: e });
                                            }
                                        }
                                        for (let e = 0, t = l.length; e < t; e++) {
                                            const t = l[e].name;
                                            if (!(t in n.map)) {
                                                const e = l.map[t];
                                                (n.map[t] = e), n.push({ name: t, value: e });
                                            }
                                        }
                                        l = n;
                                    }
                                }
                                if ((n.start(s, l, i), !i)) {
                                    let t = e.firstChild;
                                    if (t) {
                                        ("pre" !== s && "textarea" !== s) || 3 !== t.type || "\n" !== (null === (o = t.value) || void 0 === o ? void 0 : o[0]) || n.text("\n", !0);
                                        do {
                                            a(t);
                                        } while ((t = t.next));
                                    }
                                    n.end(s);
                                }
                            }
                        };
                        return 1 !== o.type || e.inner ? (3 === o.type ? s[3](o) : s[11](o)) : a(o), n.getContent();
                    },
                }
            );
        },
        Qg = new Set();
    V(
        [
            "margin",
            "margin-left",
            "margin-right",
            "margin-top",
            "margin-bottom",
            "padding",
            "padding-left",
            "padding-right",
            "padding-top",
            "padding-bottom",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "float",
            "position",
            "left",
            "right",
            "top",
            "bottom",
            "z-index",
            "display",
            "transform",
            "width",
            "max-width",
            "min-width",
            "height",
            "max-height",
            "min-height",
            "overflow",
            "overflow-x",
            "overflow-y",
            "text-overflow",
            "vertical-align",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
        ],
        (e) => {
            Qg.add(e);
        }
    );
    const Jg = ["font", "text-decoration", "text-emphasis"],
        Zg = (e, t) => me(e.parseStyle(e.getAttrib(t, "style"))),
        ep = (e, t, n) => {
            const o = Zg(e, t),
                r = Zg(e, n),
                s = (o) => {
                    var r, s;
                    const a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
                        i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
                    return Ge(a) && Ge(i) && a !== i;
                };
            return $(o, (e) => {
                const t = (t) => $(t, (t) => t === e);
                if (!t(r) && t(Jg)) {
                    const e = G(r, (e) => $(Jg, (t) => He(e, t)));
                    return $(e, s);
                }
                return s(e);
            });
        },
        tp = (e, t, n) =>
            I.from(n.container())
                .filter(Jo)
                .exists((o) => {
                    const r = e ? 0 : -1;
                    return t(o.data.charAt(n.offset() + r));
                }),
        np = O(tp, !0, Fu),
        op = O(tp, !1, Fu),
        rp = (e) => {
            const t = e.container();
            return Jo(t) && (0 === t.data.length || (Ir(t.data) && Wm.isBookmarkNode(t.parentNode)));
        },
        sp = (e, t) => (n) =>
            zc(e ? 0 : -1, n)
                .filter(t)
                .isSome(),
        ap = (e) => sr(e) && "block" === lo(yn(e), "display"),
        ip = (e) => ir(e) && !((e) => $o(e) && "all" === e.getAttribute("data-mce-bogus"))(e),
        lp = sp(!0, ap),
        dp = sp(!1, ap),
        cp = sp(!0, cr),
        up = sp(!1, cr),
        mp = sp(!0, Yo),
        fp = sp(!1, Yo),
        gp = sp(!0, ip),
        pp = sp(!1, ip),
        hp = (e, t) => ((e, t, n) => (Sn(t, e) ? Tn(e, (e) => n(e) || En(e, t)).slice(0, -1) : []))(e, t, L),
        bp = (e, t) => [e].concat(hp(e, t)),
        vp = (e, t, n) => pu(e, t, n, rp),
        yp = (e, t) => J(bp(yn(t.container()), e), xr),
        Cp = (e, t, n) =>
            vp(e, t.dom, n).forall((e) =>
                yp(t, n).fold(
                    () => !Uc(e, n, t.dom),
                    (o) => !Uc(e, n, t.dom) && Sn(o, yn(e.container()))
                )
            ),
        wp = (e, t, n) =>
            yp(t, n).fold(
                () => vp(e, t.dom, n).forall((e) => !Uc(e, n, t.dom)),
                (t) => vp(e, t.dom, n).isNone()
            ),
        xp = O(wp, !1),
        kp = O(wp, !0),
        Ep = O(Cp, !1),
        Sp = O(Cp, !0),
        _p = (e) => Yc(e).exists(Er),
        Np = (e, t, n) => {
            const o = G(bp(yn(n.container()), t), xr),
                r = le(o).getOr(t);
            return fu(e, r.dom, n).filter(_p);
        },
        Rp = (e, t) => Yc(t).exists(Er) || Np(!0, e, t).isSome(),
        Ap = (e, t) => ((e) => I.from(e.getNode(!0)).map(yn))(t).exists(Er) || Np(!1, e, t).isSome(),
        Op = O(Np, !1),
        Tp = O(Np, !0),
        Bp = (e) => Li.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(),
        Dp = (e, t) => {
            const n = G(bp(yn(t.container()), e), xr);
            return le(n).getOr(e);
        },
        Pp = (e, t) => (Bp(t) ? op(t) : op(t) || vu(Dp(e, t).dom, t).exists(op)),
        Lp = (e, t) => (Bp(t) ? np(t) : np(t) || bu(Dp(e, t).dom, t).exists(np)),
        Mp = (e) =>
            Yc(e)
                .bind((e) => Jn(e, Wt))
                .exists((e) => ((e) => H(["pre", "pre-wrap"], e))(lo(e, "white-space"))),
        Ip = (e, t) => (n) => {
            return (o = new zo(n, e)[t]()), C(o) && ir(o) && Rc(o);
            var o;
        },
        Fp = (e, t) => !Mp(t) && (((e, t) => ((e, t) => vu(e.dom, t).isNone())(e, t) || ((e, t) => bu(e.dom, t).isNone())(e, t) || xp(e, t) || kp(e, t) || Ap(e, t) || Rp(e, t))(e, t) || Pp(e, t) || Lp(e, t)),
        Up = (e, t) =>
            !Mp(t) &&
            (xp(e, t) ||
                Ep(e, t) ||
                Ap(e, t) ||
                Pp(e, t) ||
                ((e, t) => {
                    const n = vu(e.dom, t).getOr(t),
                        o = Ip(e.dom, "prev");
                    return t.isAtStart() && (o(t.container()) || o(n.container()));
                })(e, t)),
        zp = (e, t) =>
            !Mp(t) &&
            (kp(e, t) ||
                Sp(e, t) ||
                Rp(e, t) ||
                Lp(e, t) ||
                ((e, t) => {
                    const n = bu(e.dom, t).getOr(t),
                        o = Ip(e.dom, "next");
                    return t.isAtEnd() && (o(t.container()) || o(n.container()));
                })(e, t)),
        jp = (e, t) =>
            Up(e, t) ||
            zp(
                e,
                ((e) => {
                    const t = e.container(),
                        n = e.offset();
                    return Jo(t) && n < t.data.length ? Li(t, n + 1) : e;
                })(t)
            ),
        Hp = (e, t) => Mu(e.charAt(t)),
        $p = (e, t) => Fu(e.charAt(t)),
        qp = (e, t, n) => {
            const o = t.data,
                r = Li(t, 0);
            return n || !Hp(o, 0) || jp(e, r) ? !!(n && $p(o, 0) && Up(e, r)) && ((t.data = pr + o.slice(1)), !0) : ((t.data = " " + o.slice(1)), !0);
        },
        Vp = (e, t, n) => {
            const o = t.data,
                r = Li(t, o.length - 1);
            return n || !Hp(o, o.length - 1) || jp(e, r) ? !!(n && $p(o, o.length - 1) && zp(e, r)) && ((t.data = o.slice(0, -1) + pr), !0) : ((t.data = o.slice(0, -1) + " "), !0);
        },
        Wp = (e, t) => {
            const n = t.container();
            if (!Jo(n)) return I.none();
            if (
                ((e) => {
                    const t = e.container();
                    return Jo(t) && je(t.data, pr);
                })(t)
            ) {
                const o =
                    qp(e, n, !1) ||
                    ((e) => {
                        const t = e.data,
                            n = ((e) => {
                                const t = e.split("");
                                return q(t, (e, n) => (Mu(e) && n > 0 && n < t.length - 1 && Uu(t[n - 1]) && Uu(t[n + 1]) ? " " : e)).join("");
                            })(t);
                        return n !== t && ((e.data = n), !0);
                    })(n) ||
                    Vp(e, n, !1);
                return It(o, t);
            }
            if (jp(e, t)) {
                const o = qp(e, n, !0) || Vp(e, n, !0);
                return It(o, t);
            }
            return I.none();
        },
        Kp = (e, t, n) => {
            if (0 === n) return;
            const o = yn(e),
                r = Qn(o, xr).getOr(o),
                s = e.data.slice(t, t + n),
                a = t + n >= e.data.length && zp(r, Li(e, e.data.length)),
                i = 0 === t && Up(r, Li(e, 0));
            e.replaceData(t, n, ms(s, 4, i, a));
        },
        Gp = (e, t) => {
            const n = e.data.slice(t),
                o = n.length - We(n).length;
            Kp(e, t, o);
        },
        Yp = (e, t) => {
            const n = e.data.slice(0, t),
                o = n.length - Ke(n).length;
            Kp(e, t - o, o);
        },
        Xp = (e, t, n, o = !0) => {
            const r = Ke(e.data).length,
                s = o ? e : t,
                a = o ? t : e;
            return o ? s.appendData(a.data) : s.insertData(0, a.data), wo(yn(a)), n && Gp(s, r), s;
        },
        Qp = (e, t) =>
            ((e, t) => {
                const n = e.container(),
                    o = e.offset();
                return !Li.isTextPosition(e) && n === t.parentNode && o > Li.before(t).offset();
            })(t, e)
                ? Li(t.container(), t.offset() - 1)
                : t,
        Jp = (e) => {
            return ss(e.previousSibling) ? I.some(((t = e.previousSibling), Jo(t) ? Li(t, t.data.length) : Li.after(t))) : e.previousSibling ? Cu(e.previousSibling) : I.none();
            var t;
        },
        Zp = (e) => {
            return ss(e.nextSibling) ? I.some(((t = e.nextSibling), Jo(t) ? Li(t, 0) : Li.before(t))) : e.nextSibling ? yu(e.nextSibling) : I.none();
            var t;
        },
        eh = (e, t, n) =>
            ((e, t, n) =>
                e
                    ? ((e, t) =>
                          Zp(t)
                              .orThunk(() => Jp(t))
                              .orThunk(() => ((e, t) => bu(e, Li.after(t)).orThunk(() => vu(e, Li.before(t))))(e, t)))(t, n)
                    : ((e, t) =>
                          Jp(t)
                              .orThunk(() => Zp(t))
                              .orThunk(() =>
                                  ((e, t) =>
                                      I.from(t.previousSibling ? t.previousSibling : t.parentNode)
                                          .bind((t) => vu(e, Li.before(t)))
                                          .orThunk(() => bu(e, Li.after(t))))(e, t)
                              ))(t, n))(e, t, n).map(O(Qp, n)),
        th = (e, t, n) => {
            n.fold(
                () => {
                    e.focus();
                },
                (n) => {
                    e.selection.setRng(n.toRange(), t);
                }
            );
        },
        nh = (e, t) => t && ke(e.schema.getBlockElements(), Ht(t)),
        oh = (e) => {
            if (bs(e)) {
                const t = hn('<br data-mce-bogus="1">');
                return Co(e), bo(e, t), I.some(Li.before(t.dom));
            }
            return I.none();
        },
        rh = (e, t, n, o = !0) => {
            const r = eh(t, e.getBody(), n.dom),
                s = Qn(n, O(nh, e), ((a = e.getBody()), (e) => e.dom === a));
            var a;
            const i = ((e, t, n) => {
                const o = Bn(e).filter(Kt),
                    r = Dn(e).filter(Kt);
                return (
                    wo(e),
                    ((s = o),
                    (a = r),
                    (i = t),
                    (l = (e, t, o) => {
                        const r = e.dom,
                            s = t.dom,
                            a = r.data.length;
                        return Xp(r, s, n), o.container() === s ? Li(r, a) : o;
                    }),
                    s.isSome() && a.isSome() && i.isSome() ? I.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie())) : I.none()).orThunk(() => (n && (o.each((e) => Yp(e.dom, e.dom.length)), r.each((e) => Gp(e.dom, 0))), t))
                );
                var s, a, i, l;
            })(n, r, ((e, t) => ke(e.schema.getTextInlineElements(), Ht(t)))(e, n));
            e.dom.isEmpty(e.getBody())
                ? (e.setContent(""), e.selection.setCursorLocation())
                : s.bind(oh).fold(
                      () => {
                          o && th(e, t, i);
                      },
                      (n) => {
                          o && th(e, t, I.some(n));
                      }
                  );
        },
        sh = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        ah = (e, t) => xn(yn(t), Zl(e)) && !As(e.schema, t) && e.dom.isEditable(t),
        ih = (e) => {
            var t;
            return "rtl" === Oa.DOM.getStyle(e, "direction", !0) || ((e) => sh.test(e))(null !== (t = e.textContent) && void 0 !== t ? t : "");
        },
        lh = (e, t, n) => {
            const o = ((e, t, n) => G(Oa.DOM.getParents(n.container(), "*", t), e))(e, t, n);
            return I.from(o[o.length - 1]);
        },
        dh = (e, t) => {
            const n = t.container(),
                o = t.offset();
            return e
                ? Hr(n)
                    ? Jo(n.nextSibling)
                        ? Li(n.nextSibling, 0)
                        : Li.after(n)
                    : Vr(t)
                    ? Li(n, o + 1)
                    : t
                : Hr(n)
                ? Jo(n.previousSibling)
                    ? Li(n.previousSibling, n.previousSibling.data.length)
                    : Li.before(n)
                : Wr(t)
                ? Li(n, o - 1)
                : t;
        },
        ch = O(dh, !0),
        uh = O(dh, !1),
        mh = (e, t) => {
            const n = (e) => e.stopImmediatePropagation();
            e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n);
        },
        fh = (e) => mh(e, "Delete"),
        gh = (e) => Sr(e) || Nr(e),
        ph = (e, t) => (Sn(e, t) ? Jn(t, gh, ((e) => (t) => Pt(An(t), e, En))(e)) : I.none()),
        hh = (e, t = !0) => {
            e.dom.isEmpty(e.getBody()) && e.setContent("", { no_selection: !t });
        },
        bh = (e, t, n) =>
            Mt(yu(n), Cu(n), (o, r) => {
                const s = dh(!0, o),
                    a = dh(!1, r),
                    i = dh(!1, t);
                return e ? bu(n, i).exists((e) => e.isEqual(a) && t.isEqual(s)) : vu(n, i).exists((e) => e.isEqual(s) && t.isEqual(a));
            }).getOr(!0),
        vh = (e) => {
            var t;
            return (8 === $t((t = e)) || "#comment" === Ht(t) ? Bn(e) : Un(e)).bind(vh).orThunk(() => I.some(e));
        },
        yh = (e, t, n, o = !0) => {
            var r;
            t.deleteContents();
            const s = vh(n).getOr(n),
                a = yn(null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r ? r : n.dom);
            if ((a.dom === e.getBody() ? hh(e, o) : bs(a) && (Pr(a), o && e.selection.setCursorLocation(a.dom, 0)), !En(n, a))) {
                const e = Pt(An(a), n)
                    ? []
                    : An((i = a))
                          .map(Mn)
                          .map((e) => G(e, (e) => !En(i, e)))
                          .getOr([]);
                V(e.concat(Mn(n)), (e) => {
                    En(e, a) || Sn(e, a) || !bs(e) || wo(e);
                });
            }
            var i;
        },
        Ch = (e) => Fo(e, "td,th"),
        wh = (e, t) => ({ start: e, end: t }),
        xh = al([{ singleCellTable: ["rng", "cell"] }, { fullTable: ["table"] }, { partialTable: ["cells", "outsideDetails"] }, { multiTable: ["startTableCells", "endTableCells", "betweenRng"] }]),
        kh = (e, t) => to(yn(e), "td,th", t),
        Eh = (e) => !En(e.start, e.end),
        Sh = (e, t) => Xu(e.start, t).bind((n) => Xu(e.end, t).bind((e) => It(En(n, e), n))),
        _h = (e) => (t) => Sh(t, e).map((e) => ((e, t, n) => ({ rng: e, table: t, cells: n }))(t, e, Ch(e))),
        Nh = (e, t, n, o) => {
            if (n.collapsed || !e.forall(Eh)) return I.none();
            if (t.isSameTable) {
                const t = e.bind(_h(o));
                return I.some({ start: t, end: t });
            }
            {
                const e = kh(n.startContainer, o),
                    t = kh(n.endContainer, o),
                    r = e.bind(((e) => (t) => Xu(t, e).bind((e) => de(Ch(e)).map((e) => wh(t, e))))(o)).bind(_h(o)),
                    s = t.bind(((e) => (t) => Xu(t, e).bind((e) => le(Ch(e)).map((e) => wh(e, t))))(o)).bind(_h(o));
                return I.some({ start: r, end: s });
            }
        },
        Rh = (e, t) => Z(e, (e) => En(e, t)),
        Ah = (e) => Mt(Rh(e.cells, e.rng.start), Rh(e.cells, e.rng.end), (t, n) => e.cells.slice(t, n + 1)),
        Oh = (e, t) => {
            const { startTable: n, endTable: o } = t,
                r = e.cloneRange();
            return n.each((e) => r.setStartAfter(e.dom)), o.each((e) => r.setEndBefore(e.dom)), r;
        },
        Th = (e, t) => {
            const n = ((e) => (t) => En(e, t))(e),
                o = ((e, t) => {
                    const n = kh(e.startContainer, t),
                        o = kh(e.endContainer, t);
                    return Mt(n, o, wh);
                })(t, n),
                r = ((e, t) => {
                    const n = (e) => Xu(yn(e), t),
                        o = n(e.startContainer),
                        r = n(e.endContainer),
                        s = o.isSome(),
                        a = r.isSome(),
                        i = Mt(o, r, En).getOr(!1);
                    return { startTable: o, endTable: r, isStartInTable: s, isEndInTable: a, isSameTable: i, isMultiTable: !i && s && a };
                })(t, n);
            return ((e, t, n) =>
                e.exists(
                    (e) =>
                        ((e, t) =>
                            !Eh(e) &&
                            Sh(e, t).exists((e) => {
                                const t = e.dom.rows;
                                return 1 === t.length && 1 === t[0].cells.length;
                            }))(e, n) && Zu(e.start, t)
                ))(o, t, n)
                ? o.map((e) => xh.singleCellTable(t, e.start))
                : r.isMultiTable
                ? ((e, t, n, o) =>
                      Nh(e, t, n, o).bind(({ start: e, end: o }) => {
                          const r = e.bind(Ah).getOr([]),
                              s = o.bind(Ah).getOr([]);
                          if (r.length > 0 && s.length > 0) {
                              const e = Oh(n, t);
                              return I.some(xh.multiTable(r, s, e));
                          }
                          return I.none();
                      }))(o, r, t, n)
                : ((e, t, n, o) =>
                      Nh(e, t, n, o)
                          .bind(({ start: e, end: t }) => e.or(t))
                          .bind((e) => {
                              const { isSameTable: o } = t,
                                  r = Ah(e).getOr([]);
                              if (o && e.cells.length === r.length) return I.some(xh.fullTable(e.table));
                              if (r.length > 0) {
                                  if (o) return I.some(xh.partialTable(r, I.none()));
                                  {
                                      const e = Oh(n, t);
                                      return I.some(xh.partialTable(r, I.some({ ...t, rng: e })));
                                  }
                              }
                              return I.none();
                          }))(o, r, t, n);
        },
        Bh = (e) =>
            V(e, (e) => {
                on(e, "contenteditable"), Pr(e);
            }),
        Dh = (e, t, n, o) => {
            const r = n.cloneRange();
            o ? (r.setStart(n.startContainer, n.startOffset), r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild), r.setEnd(n.endContainer, n.endOffset)), Ih(e, r, t, !1).each((e) => e());
        },
        Ph = (e) => {
            const t = Yu(e),
                n = yn(e.selection.getNode());
            lr(n.dom) && bs(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && $(t, (e) => En(e, n)) && Jt(n, "data-mce-selected", "1");
        },
        Lh = (e, t, n) =>
            I.some(() => {
                const o = e.selection.getRng(),
                    r = n
                        .bind(({ rng: n, isStartInTable: r }) => {
                            const s = ((e, t) => I.from(e.dom.getParent(t, e.dom.isBlock)).map(yn))(e, r ? n.endContainer : n.startContainer);
                            n.deleteContents(),
                                ((e, t, n) => {
                                    n.each((n) => {
                                        t ? wo(n) : (Pr(n), e.selection.setCursorLocation(n.dom, 0));
                                    });
                                })(e, r, s.filter(bs));
                            const a = r ? t[0] : t[t.length - 1];
                            return Dh(e, a, o, r), bs(a) ? I.none() : I.some(r ? t.slice(1) : t.slice(0, -1));
                        })
                        .getOr(t);
                Bh(r), Ph(e);
            }),
        Mh = (e, t, n, o) =>
            I.some(() => {
                const r = e.selection.getRng(),
                    s = t[0],
                    a = n[n.length - 1];
                Dh(e, s, r, !0), Dh(e, a, r, !1);
                const i = bs(s) ? t : t.slice(1),
                    l = bs(a) ? n : n.slice(0, -1);
                Bh(i.concat(l)), o.deleteContents(), Ph(e);
            }),
        Ih = (e, t, n, o = !0) =>
            I.some(() => {
                yh(e, t, n, o);
            }),
        Fh = (e, t) => I.some(() => rh(e, !1, t)),
        Uh = (e, t) => J(bp(t, e), Ar),
        zh = (e, t) => J(bp(t, e), Xt("caption")),
        jh = (e, t) =>
            I.some(() => {
                Pr(t), e.selection.setCursorLocation(t.dom, 0);
            }),
        Hh = (e, t) => (e ? mp(t) : fp(t)),
        $h = (e, t, n) => {
            const o = yn(e.getBody());
            return zh(o, n).fold(
                () =>
                    ((e, t, n, o) => {
                        const r = Li.fromRangeStart(e.selection.getRng());
                        return Uh(n, o).bind((o) => (bs(o) ? jh(e, o) : ((e, t, n, o, r) => gu(n, e.getBody(), r).bind((e) => Uh(t, yn(e.getNode())).bind((e) => (En(e, o) ? I.none() : I.some(E)))))(e, n, t, o, r)));
                    })(e, t, o, n).orThunk(() =>
                        It(
                            ((e, t) => {
                                const n = Li.fromRangeStart(e.selection.getRng());
                                return Hh(t, n) || fu(t, e.getBody(), n).exists((e) => Hh(t, e));
                            })(e, t),
                            E
                        )
                    ),
                (n) =>
                    ((e, t, n, o) => {
                        const r = Li.fromRangeStart(e.selection.getRng());
                        return bs(o)
                            ? jh(e, o)
                            : ((e, t, n, o, r) =>
                                  gu(n, e.getBody(), r).fold(
                                      () => I.some(E),
                                      (s) =>
                                          ((e, t, n, o) =>
                                              yu(e.dom)
                                                  .bind((r) => Cu(e.dom).map((e) => (t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r))))
                                                  .getOr(!0))(o, n, r, s)
                                              ? ((e, t) => jh(e, t))(e, o)
                                              : ((e, t, n) =>
                                                    zh(e, yn(n.getNode())).fold(
                                                        () => I.some(E),
                                                        (e) => It(!En(e, t), E)
                                                    ))(t, o, s)
                                  ))(e, n, t, o, r);
                    })(e, t, o, n)
            );
        },
        qh = (e, t) => {
            const n = yn(e.selection.getStart(!0)),
                o = Yu(e);
            return e.selection.isCollapsed() && 0 === o.length
                ? $h(e, t, n)
                : ((e, t, n) => {
                      const o = yn(e.getBody()),
                          r = e.selection.getRng();
                      return 0 !== n.length
                          ? Lh(e, n, I.none())
                          : ((e, t, n, o) =>
                                zh(t, o).fold(
                                    () => ((e, t, n) => Th(t, n).bind((t) => t.fold(O(Ih, e), O(Fh, e), O(Lh, e), O(Mh, e))))(e, t, n),
                                    (t) => ((e, t) => jh(e, t))(e, t)
                                ))(e, o, r, t);
                  })(e, n, o);
        },
        Vh = (e, t) => {
            let n = t;
            for (; n && n !== e; ) {
                if (ar(n) || ir(n)) return n;
                n = n.parentNode;
            }
            return null;
        },
        Wh = ["data-ephox-", "data-mce-", "data-alloy-", "data-snooker-", "_"],
        Kh = Dt.each,
        Gh = (e) => {
            const t = e.dom,
                n = new Set(e.serializer.getTempAttrs()),
                o = (e) => $(Wh, (t) => He(e, t)) || n.has(e);
            return {
                compare: (e, n) => {
                    if (e.nodeName !== n.nodeName || e.nodeType !== n.nodeType) return !1;
                    const r = (e) => {
                            const n = {};
                            return (
                                Kh(t.getAttribs(e), (r) => {
                                    const s = r.nodeName.toLowerCase();
                                    "style" === s || o(s) || (n[s] = t.getAttrib(e, s));
                                }),
                                n
                            );
                        },
                        s = (e, t) => {
                            for (const n in e)
                                if (ke(e, n)) {
                                    const o = t[n];
                                    if (v(o)) return !1;
                                    if (e[n] !== o) return !1;
                                    delete t[n];
                                }
                            for (const e in t) if (ke(t, e)) return !1;
                            return !0;
                        };
                    if ($o(e) && $o(n)) {
                        if (!s(r(e), r(n))) return !1;
                        if (!s(t.parseStyle(t.getAttrib(e, "style")), t.parseStyle(t.getAttrib(n, "style")))) return !1;
                    }
                    return !Lu(e) && !Lu(n);
                },
                isAttributeInternal: o,
            };
        },
        Yh = (e, t, n, o) => {
            const r = n.name;
            for (let t = 0, s = e.length; t < s; t++) {
                const s = e[t];
                if (s.name === r) {
                    const e = o.nodes[r];
                    e ? e.nodes.push(n) : (o.nodes[r] = { filter: s, nodes: [n] });
                }
            }
            if (n.attributes)
                for (let e = 0, r = t.length; e < r; e++) {
                    const r = t[e],
                        s = r.name;
                    if (s in n.attributes.map) {
                        const e = o.attributes[s];
                        e ? e.nodes.push(n) : (o.attributes[s] = { filter: r, nodes: [n] });
                    }
                }
        },
        Xh = (e, t) => {
            const n = (e, n) => {
                ge(e, (e) => {
                    const o = ce(e.nodes);
                    V(e.filter.callbacks, (r) => {
                        for (let t = o.length - 1; t >= 0; t--) {
                            const r = o[t];
                            ((n ? void 0 !== r.attr(e.filter.name) : r.name === e.filter.name) && !y(r.parent)) || o.splice(t, 1);
                        }
                        o.length > 0 && r(o, e.filter.name, t);
                    });
                });
            };
            n(e.nodes, !1), n(e.attributes, !0);
        },
        Qh = (e, t, n, o = {}) => {
            const r = ((e, t, n) => {
                const o = { nodes: {}, attributes: {} };
                return (
                    n.firstChild &&
                        ((n, r) => {
                            let s = n;
                            for (; (s = s.walk()); ) Yh(e, t, s, o);
                        })(n),
                    o
                );
            })(e, t, n);
            Xh(r, o);
        },
        Jh = (e, t, n, o) => {
            if ((e.pad_empty_with_br || t.insert) && n(o)) {
                const e = new Fg("br", 1);
                t.insert && e.attr("data-mce-bogus", "1"), o.empty().append(e);
            } else o.empty().append(new Fg("#text", 3)).value = pr;
        },
        Zh = (e, t) => {
            const n = null == e ? void 0 : e.firstChild;
            return C(n) && n === e.lastChild && n.name === t;
        },
        eb = (e, t, n, o) =>
            o.isEmpty(t, n, (t) =>
                ((e, t) => {
                    const n = e.getElementRule(t.name);
                    return !0 === (null == n ? void 0 : n.paddEmpty);
                })(e, t)
            ),
        tb = (e) => {
            let t;
            for (let n = e; n; n = n.parent) {
                const e = n.attr("contenteditable");
                if ("false" === e) break;
                "true" === e && (t = n);
            }
            return I.from(t);
        },
        nb = (e, t, n = e.parent) => {
            if (t.getSpecialElements()[e.name]) e.empty().remove();
            else {
                const o = e.children();
                for (const e of o) n && !t.isValidChild(n.name, e.name) && nb(e, t, n);
                e.unwrap();
            }
        },
        ob = (e, t, n, o = E) => {
            const r = t.getTextBlockElements(),
                s = t.getNonEmptyElements(),
                a = t.getWhitespaceElements(),
                i = Dt.makeMap("tr,td,th,tbody,thead,tfoot,table,summary"),
                l = new Set(),
                d = (e) => e !== n && !i[e.name];
            for (let n = 0; n < e.length; n++) {
                const i = e[n];
                let c, u, m;
                if (!i.parent || l.has(i)) continue;
                if (r[i.name] && "li" === i.parent.name) {
                    let e = i.next;
                    for (; e && r[e.name]; ) (e.name = "li"), l.add(e), i.parent.insert(e, i.parent), (e = e.next);
                    i.unwrap();
                    continue;
                }
                const f = [i];
                for (c = i.parent; c && !t.isValidChild(c.name, i.name) && d(c); c = c.parent) f.push(c);
                if (c && f.length > 1)
                    if (t.isValidChild(c.name, i.name)) {
                        f.reverse(), (u = f[0].clone()), o(u);
                        let e = u;
                        for (let n = 0; n < f.length - 1; n++) {
                            t.isValidChild(e.name, f[n].name) && n > 0 ? ((m = f[n].clone()), o(m), e.append(m)) : (m = e);
                            for (let e = f[n].firstChild; e && e !== f[n + 1]; ) {
                                const t = e.next;
                                m.append(e), (e = t);
                            }
                            e = m;
                        }
                        eb(t, s, a, u) ? c.insert(i, f[0], !0) : (c.insert(u, f[0], !0), c.insert(i, u)), (c = f[0]), (eb(t, s, a, c) || Zh(c, "br")) && c.empty().remove();
                    } else nb(i, t);
                else if (i.parent) {
                    if ("li" === i.name) {
                        let e = i.prev;
                        if (e && ("ul" === e.name || "ol" === e.name)) {
                            e.append(i);
                            continue;
                        }
                        if (((e = i.next), e && ("ul" === e.name || "ol" === e.name) && e.firstChild)) {
                            e.insert(i, e.firstChild, !0);
                            continue;
                        }
                        const t = new Fg("ul", 1);
                        o(t), i.wrap(t);
                        continue;
                    }
                    if (t.isValidChild(i.parent.name, "div") && t.isValidChild("div", i.name)) {
                        const e = new Fg("div", 1);
                        o(e), i.wrap(e);
                    } else nb(i, t);
                }
            }
        },
        rb = (e, t, n = t.parent) =>
            !(!n || !e.children[t.name] || e.isValidChild(n.name, t.name)) ||
            !(
                !n ||
                "a" !== t.name ||
                !((e, t) => {
                    let n = e;
                    for (; n; ) {
                        if ("a" === n.name) return !0;
                        n = n.parent;
                    }
                    return !1;
                })(n)
            ),
        sb = (e) =>
            e.collapsed
                ? e
                : ((e) => {
                      const t = Li.fromRangeStart(e),
                          n = Li.fromRangeEnd(e),
                          o = e.commonAncestorContainer;
                      return fu(!1, o, n)
                          .map((r) =>
                              !Uc(t, n, o) && Uc(t, r, o)
                                  ? ((e, t, n, o) => {
                                        const r = document.createRange();
                                        return r.setStart(e, t), r.setEnd(n, o), r;
                                    })(t.container(), t.offset(), r.container(), r.offset())
                                  : e
                          )
                          .getOr(e);
                  })(e),
        ab = (e, t) => {
            let n = t.firstChild,
                o = t.lastChild;
            return (
                n && "meta" === n.name && (n = n.next),
                o && "mce_marker" === o.attr("id") && (o = o.prev),
                ((e, t) => {
                    const n = e.getNonEmptyElements();
                    return C(t) && (t.isEmpty(n) || ((e, t) => e.getBlockElements()[t.name] && ((e) => C(e.firstChild) && e.firstChild === e.lastChild)(t) && ((e) => "br" === e.name || e.value === pr)(t.firstChild))(e, t));
                })(e, o) && (o = null == o ? void 0 : o.prev),
                !(!n || n !== o || ("ul" !== n.name && "ol" !== n.name))
            );
        },
        ib = (e) => {
            return e.length > 0 && (!(n = e[e.length - 1]).firstChild || (C(null == (t = n) ? void 0 : t.firstChild) && t.firstChild === t.lastChild && ((e) => e.data === pr || rr(e))(t.firstChild))) ? e.slice(0, -1) : e;
            var t, n;
        },
        lb = (e, t) => {
            const n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null;
        },
        db = (e, t) => {
            const n = Li.after(e),
                o = du(t).prev(n);
            return o ? o.toRange() : null;
        },
        cb = (e, t, n, o) => {
            const r = ((e, t, n) => {
                    const o = t.serialize(n);
                    return ((e) => {
                        var t, n;
                        const o = e.firstChild,
                            r = e.lastChild;
                        return o && "META" === o.nodeName && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o)), r && "mce_marker" === r.id && (null === (n = r.parentNode) || void 0 === n || n.removeChild(r)), e;
                    })(e.createFragment(o));
                })(t, e, o),
                s = lb(t, n.startContainer),
                a = ib(((i = r.firstChild), G(null !== (l = null == i ? void 0 : i.childNodes) && void 0 !== l ? l : [], (e) => "LI" === e.nodeName)));
            var i, l;
            const d = t.getRoot(),
                c = (e) => {
                    const o = Li.fromRangeStart(n),
                        r = du(t.getRoot()),
                        a = 1 === e ? r.prev(o) : r.next(o),
                        i = null == a ? void 0 : a.getNode();
                    return !i || lb(t, i) !== s;
                };
            return s
                ? c(1)
                    ? ((e, t, n) => {
                          const o = e.parentNode;
                          return (
                              o &&
                                  Dt.each(t, (t) => {
                                      o.insertBefore(t, e);
                                  }),
                              ((e, t) => {
                                  const n = Li.before(e),
                                      o = du(t).next(n);
                                  return o ? o.toRange() : null;
                              })(e, n)
                          );
                      })(s, a, d)
                    : c(2)
                    ? ((e, t, n, o) => (o.insertAfter(t.reverse(), e), db(t[0], n)))(s, a, d, t)
                    : ((e, t, n, o) => {
                          const r = ((e, t) => {
                                  const n = t.cloneRange(),
                                      o = t.cloneRange();
                                  return n.setStartBefore(e), o.setEndAfter(e), [n.cloneContents(), o.cloneContents()];
                              })(e, o),
                              s = e.parentNode;
                          return (
                              s &&
                                  (s.insertBefore(r[0], e),
                                  Dt.each(t, (t) => {
                                      s.insertBefore(t, e);
                                  }),
                                  s.insertBefore(r[1], e),
                                  s.removeChild(e)),
                              db(t[t.length - 1], n)
                          );
                      })(s, a, d, n)
                : null;
        },
        ub = ["pre"],
        mb = lr,
        fb = (e, t, n) => {
            var o, r;
            const s = e.selection,
                a = e.dom,
                i = e.parser,
                l = n.merge,
                d = Xg({ validate: !0 }, e.schema),
                c = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
            -1 === t.indexOf("{$caret}") && (t += "{$caret}"), (t = t.replace(/\{\$caret\}/, c));
            let u = s.getRng();
            const m = u.startContainer,
                f = e.getBody();
            m === f &&
                s.isCollapsed() &&
                a.isBlock(f.firstChild) &&
                ((e, t) => C(t) && !e.schema.getVoidElements()[t.nodeName])(e, f.firstChild) &&
                a.isEmpty(f.firstChild) &&
                ((u = a.createRng()), u.setStart(f.firstChild, 0), u.setEnd(f.firstChild, 0), s.setRng(u)),
                s.isCollapsed() ||
                    ((e) => {
                        const t = e.dom,
                            n = sb(e.selection.getRng());
                        e.selection.setRng(n);
                        const o = t.getParent(n.startContainer, mb);
                        ((e, t, n) => !!C(n) && n === e.getParent(t.endContainer, mb) && Zu(yn(n), t))(t, n, o)
                            ? Ih(e, n, yn(o))
                            : n.startContainer === n.endContainer && n.endOffset - n.startOffset == 1 && Jo(n.startContainer.childNodes[n.startOffset])
                            ? n.deleteContents()
                            : e.getDoc().execCommand("Delete", !1);
                    })(e);
            const g = s.getNode(),
                p = { context: g.nodeName.toLowerCase(), data: n.data, insert: !0 },
                h = i.parse(t, p);
            if (!0 === n.paste && ab(e.schema, h) && ((e, t) => !!lb(e, t))(a, g)) return (u = cb(d, a, s.getRng(), h)), u && s.setRng(u), t;
            !0 === n.paste &&
                ((e, t, n, o) => {
                    var r;
                    const s = t.firstChild,
                        a = t.lastChild,
                        i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a),
                        l = H(ub, s.name);
                    if (i && l) {
                        const t = "false" !== s.attr("contenteditable"),
                            a = (null === (r = e.getParent(n, e.isBlock)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) === s.name,
                            i = I.from(Vh(o, n)).forall(ar);
                        return t && a && i;
                    }
                    return !1;
                })(a, h, g, e.getBody()) &&
                (null === (o = h.firstChild) || void 0 === o || o.unwrap()),
                ((e) => {
                    let t = e;
                    for (; (t = t.walk()); ) 1 === t.type && t.attr("data-mce-fragment", "1");
                })(h);
            let b = h.lastChild;
            if (b && "mce_marker" === b.attr("id")) {
                const t = b;
                for (b = b.prev; b; b = b.walk(!0))
                    if (3 === b.type || !a.isBlock(b.name)) {
                        b.parent && e.schema.isValidChild(b.parent.name, "span") && b.parent.insert(t, b, "br" === b.name);
                        break;
                    }
            }
            if ((e._selectionOverrides.showBlockCaretContainer(g), p.invalid)) {
                e.selection.setContent(c);
                let n,
                    o = s.getNode();
                const l = e.getBody();
                for (nr(o) ? (o = n = l) : (n = o); n && n !== l; ) (o = n), (n = n.parentNode);
                t = o === l ? l.innerHTML : a.getOuterHTML(o);
                const u = i.parse(t),
                    m = ((e) => {
                        for (let t = e; t; t = t.walk()) if ("mce_marker" === t.attr("id")) return I.some(t);
                        return I.none();
                    })(u),
                    f = m.bind(tb).getOr(u);
                m.each((e) => e.replace(h));
                const g = h.children(),
                    p = null !== (r = h.parent) && void 0 !== r ? r : u;
                h.unwrap();
                const b = G(g, (t) => rb(e.schema, t, p));
                ob(b, e.schema, f), Qh(i.getNodeFilters(), i.getAttributeFilters(), u), (t = d.serialize(u)), o === l ? a.setHTML(l, t) : a.setOuterHTML(o, t);
            } else
                (t = d.serialize(h)),
                    ((e, t, n) => {
                        var o;
                        if ("all" === n.getAttribute("data-mce-bogus")) null === (o = n.parentNode) || void 0 === o || o.insertBefore(e.dom.createFragment(t), n);
                        else {
                            const o = n.firstChild,
                                r = n.lastChild;
                            !o || (o === r && "BR" === o.nodeName) ? e.dom.setHTML(n, t) : e.selection.setContent(t, { no_events: !0 });
                        }
                    })(e, t, g);
            var v;
            return (
                ((e, t) => {
                    const n = e.schema.getTextInlineElements(),
                        o = e.dom;
                    if (t) {
                        const t = e.getBody(),
                            r = Gh(e);
                        Dt.each(o.select("*[data-mce-fragment]"), (e) => {
                            if (C(n[e.nodeName.toLowerCase()]) && ((e, t) => ne(Zg(e, t), (e) => !((e) => Qg.has(e))(e)))(o, e))
                                for (let n = e.parentElement; C(n) && n !== t && !ep(o, e, n); n = n.parentElement)
                                    if (r.compare(n, e)) {
                                        o.remove(e, !0);
                                        break;
                                    }
                        });
                    }
                })(e, l),
                ((e, t) => {
                    var n, o, r;
                    let s;
                    const a = e.dom,
                        i = e.selection;
                    if (!t) return;
                    i.scrollIntoView(t);
                    const l = Vh(e.getBody(), t);
                    if (l && "false" === a.getContentEditable(l)) return a.remove(t), void i.select(l);
                    let d = a.createRng();
                    const c = t.previousSibling;
                    if (Jo(c)) {
                        d.setStart(c, null !== (o = null === (n = c.nodeValue) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0);
                        const e = t.nextSibling;
                        Jo(e) && (c.appendData(e.data), null === (r = e.parentNode) || void 0 === r || r.removeChild(e));
                    } else d.setStartBefore(t), d.setEndBefore(t);
                    const u = a.getParent(t, a.isBlock);
                    if ((a.remove(t), u && a.isEmpty(u))) {
                        const t = mb(u);
                        Co(yn(u)),
                            d.setStart(u, 0),
                            d.setEnd(u, 0),
                            t ||
                            ((e) => !!e.getAttribute("data-mce-fragment"))(u) ||
                            !(s = ((t) => {
                                let n = Li.fromRangeStart(t);
                                return (n = du(e.getBody()).next(n)), null == n ? void 0 : n.toRange();
                            })(d))
                                ? a.add(u, a.create("br", t ? {} : { "data-mce-bogus": "1" }))
                                : ((d = s), a.remove(u));
                    }
                    i.setRng(d);
                })(e, a.get("mce_marker")),
                (v = e.getBody()),
                Dt.each(v.getElementsByTagName("*"), (e) => {
                    e.removeAttribute("data-mce-fragment");
                }),
                ((e, t) => {
                    I.from(e.getParent(t, "td,th")).map(yn).each(Lr);
                })(a, s.getStart()),
                ((e, t, n) => {
                    const o = Tn(yn(n), (e) => En(e, yn(t)));
                    ie(o, o.length - 2)
                        .filter(Wt)
                        .fold(
                            () => Es(e, t),
                            (t) => Es(e, t.dom)
                        );
                })(e.schema, e.getBody(), s.getStart()),
                t
            );
        },
        gb = (e) => e instanceof Fg,
        pb = (e, t, n) => {
            e.dom.setHTML(e.getBody(), t),
                !0 !== n &&
                    ((e) => {
                        xg(e) &&
                            yu(e.getBody()).each((t) => {
                                const n = t.getNode(),
                                    o = Yo(n) ? yu(n).getOr(t) : t;
                                e.selection.setRng(o.toRange());
                            });
                    })(e);
        },
        hb = (e, t) =>
            ((e, t) => {
                const n = e.dom;
                return n.parentNode ? ((e, t) => J(e.dom.childNodes, (e) => t(yn(e))).map(yn))(yn(n.parentNode), (n) => !En(e, n) && t(n)) : I.none();
            })(e, t).isSome(),
        bb = (e) => (w(e) ? e : L),
        vb = (e, t, n) => {
            const o = t(e),
                r = bb(n);
            return o.orThunk(() =>
                r(e)
                    ? I.none()
                    : ((e, t, n) => {
                          let o = e.dom;
                          const r = bb(n);
                          for (; o.parentNode; ) {
                              o = o.parentNode;
                              const e = yn(o),
                                  n = t(e);
                              if (n.isSome()) return n;
                              if (r(e)) break;
                          }
                          return I.none();
                      })(e, t, r)
            );
        },
        yb = pm,
        Cb = (e, t, n) => {
            const o = e.formatter.get(n);
            if (o)
                for (let n = 0; n < o.length; n++) {
                    const r = o[n];
                    if (xm(r) && !1 === r.inherit && e.dom.is(t, r.selector)) return !0;
                }
            return !1;
        },
        wb = (e, t, n, o, r) => {
            const s = e.dom.getRoot();
            if (t === s) return !1;
            const a = e.dom.getParent(t, (t) => !!Cb(e, t, n) || t.parentNode === s || !!Eb(e, t, n, o, !0));
            return !!Eb(e, a, n, o, r);
        },
        xb = (e, t, n) => !(!km(n) || !yb(t, n.inline)) || !(!wm(n) || !yb(t, n.block)) || (!!xm(n) && $o(t) && e.is(t, n.selector)),
        kb = (e, t, n, o, r, s) => {
            const a = n[o],
                i = "attributes" === o;
            if (w(n.onmatch)) return n.onmatch(t, n, o);
            if (a)
                if (_e(a)) {
                    for (let n = 0; n < a.length; n++) if (i ? e.getAttrib(t, a[n]) : bm(e, t, a[n])) return !0;
                } else
                    for (const o in a)
                        if (ke(a, o)) {
                            const l = i ? e.getAttrib(t, o) : bm(e, t, o),
                                d = gm(a[o], s),
                                c = y(l) || Ye(l);
                            if (c && y(d)) continue;
                            if (r && c && !n.exact) return !1;
                            if ((!r || n.exact) && !yb(l, hm(d, o))) return !1;
                        }
            return !0;
        },
        Eb = (e, t, n, o, r) => {
            const s = e.formatter.get(n),
                a = e.dom;
            if (s && $o(t))
                for (let n = 0; n < s.length; n++) {
                    const i = s[n];
                    if (xb(e.dom, t, i) && kb(a, t, i, "attributes", r, o) && kb(a, t, i, "styles", r, o)) {
                        const n = i.classes;
                        if (n) for (let r = 0; r < n.length; r++) if (!e.dom.hasClass(t, gm(n[r], o))) return;
                        return i;
                    }
                }
        },
        Sb = (e, t, n, o, r) => {
            if (o) return wb(e, o, t, n, r);
            if (((o = e.selection.getNode()), wb(e, o, t, n, r))) return !0;
            const s = e.selection.getStart();
            return !(s === o || !wb(e, s, t, n, r));
        },
        _b = Mr,
        Nb = (e) =>
            ((e) => {
                const t = [];
                let n = e;
                for (; n; ) {
                    if ((Jo(n) && n.data !== _b) || n.childNodes.length > 1) return [];
                    $o(n) && t.push(n), (n = n.firstChild);
                }
                return t;
            })(e).length > 0,
        Rb = (e) => {
            if (e) {
                const t = new zo(e, e);
                for (let e = t.current(); e; e = t.next()) if (Jo(e)) return e;
            }
            return null;
        },
        Ab = (e) => {
            const t = bn("span");
            return Zt(t, { id: wu, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && bo(t, vn(_b)), t;
        },
        Ob = (e, t, n = !0) => {
            const o = e.dom,
                r = e.selection;
            if (Nb(t)) rh(e, !1, yn(t), n);
            else {
                const e = r.getRng(),
                    n = o.getParent(t, o.isBlock),
                    s = e.startContainer,
                    a = e.startOffset,
                    i = e.endContainer,
                    l = e.endOffset,
                    d = ((e) => {
                        const t = Rb(e);
                        return t && t.data.charAt(0) === _b && t.deleteData(0, 1), t;
                    })(t);
                o.remove(t, !0), s === d && a > 0 && e.setStart(d, a - 1), i === d && l > 0 && e.setEnd(d, l - 1), n && o.isEmpty(n) && Pr(yn(n)), r.setRng(e);
            }
        },
        Tb = (e, t, n = !0) => {
            const o = e.dom,
                r = e.selection;
            if (t) Ob(e, t, n);
            else if (!(t = ku(e.getBody(), r.getStart()))) for (; (t = o.get(wu)); ) Ob(e, t, n);
        },
        Bb = (e, t) => (e.appendChild(t), t),
        Db = (e, t) => {
            var n;
            const o = Y(e, (e, t) => Bb(e, t.cloneNode(!1)), t),
                r = null !== (n = o.ownerDocument) && void 0 !== n ? n : document;
            return Bb(o, r.createTextNode(_b));
        },
        Pb = (e, t, n, o) => {
            const a = e.dom,
                i = e.selection;
            let l = !1;
            const d = e.formatter.get(t);
            if (!d) return;
            const c = i.getRng(),
                u = c.startContainer,
                m = c.startOffset;
            let f = u;
            Jo(u) && (m !== u.data.length && (l = !0), (f = f.parentNode));
            const g = [];
            let h;
            for (; f; ) {
                if (Eb(e, f, t, n, o)) {
                    h = f;
                    break;
                }
                f.nextSibling && (l = !0), g.push(f), (f = f.parentNode);
            }
            if (h)
                if (l) {
                    const r = i.getBookmark();
                    c.collapse(!0);
                    let s = Um(a, c, d, !0);
                    (s = Bf(s)), e.formatter.remove(t, n, s, o), i.moveToBookmark(r);
                } else {
                    const l = ku(e.getBody(), h),
                        d = Ab(!1).dom;
                    ((e, t, n) => {
                        var o, r;
                        const s = e.dom,
                            a = s.getParent(n, O(cm, e.schema));
                        a && s.isEmpty(a)
                            ? null === (o = n.parentNode) || void 0 === o || o.replaceChild(t, n)
                            : (((e) => {
                                  const t = Fo(e, "br"),
                                      n = G(
                                          ((e) => {
                                              const t = [];
                                              let n = e.dom;
                                              for (; n; ) t.push(yn(n)), (n = n.lastChild);
                                              return t;
                                          })(e).slice(-1),
                                          Er
                                      );
                                  t.length === n.length && V(n, wo);
                              })(yn(n)),
                              s.isEmpty(n) ? null === (r = n.parentNode) || void 0 === r || r.replaceChild(t, n) : s.insertAfter(t, n));
                    })(e, d, null != l ? l : h);
                    const c = ((e, t, n, o, a, i) => {
                            const l = e.formatter,
                                d = e.dom,
                                c = G(me(l.get()), (e) => e !== o && !je(e, "removeformat")),
                                u = ((e, t, n) =>
                                    X(
                                        n,
                                        (n, o) => {
                                            const r = ((e, t) =>
                                                Cm(e, t, (e) => {
                                                    const t = (e) => w(e) || (e.length > 1 && "%" === e.charAt(0));
                                                    return $(["styles", "attributes"], (n) =>
                                                        xe(e, n).exists((e) => {
                                                            const n = p(e) ? e : we(e);
                                                            return $(n, t);
                                                        })
                                                    );
                                                }))(e, o);
                                            return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n;
                                        },
                                        []
                                    ))(e, n, c);
                            if (
                                G(
                                    u,
                                    (t) =>
                                        !((e, t, n) => {
                                            const o = ["inline", "block", "selector", "attributes", "styles", "classes"],
                                                a = (e) => ye(e, (e, t) => $(o, (e) => e === t));
                                            return Cm(e, t, (t) => {
                                                const o = a(t);
                                                return Cm(e, n, (e) => {
                                                    const t = a(e);
                                                    return ((e, t, n = s) => r(n).eq(e, t))(o, t);
                                                });
                                            });
                                        })(e, t, o)
                                ).length > 0
                            ) {
                                const e = n.cloneNode(!1);
                                return d.add(t, e), l.remove(o, a, e, i), d.remove(e), I.some(e);
                            }
                            return I.none();
                        })(e, d, h, t, n, o),
                        u = Db(g.concat(c.toArray()), d);
                    l && Ob(e, l, !1), i.setCursorLocation(u, 1), a.isEmpty(h) && a.remove(h);
                }
        },
        Lb = (e) => {
            const t = Ab(!1),
                n = Db(e, t.dom);
            return { caretContainer: t, caretPosition: Li(n, 0) };
        },
        Mb = (e, t) => {
            const { caretContainer: n, caretPosition: o } = Lb(t);
            return go(yn(e), n), wo(yn(e)), o;
        },
        Ib = (e, t) => {
            const n = e.schema.getTextInlineElements();
            return ke(n, Ht(t)) && !xu(t.dom) && !Go(t.dom);
        },
        Fb = (e) => xu(e.dom) && Nb(e.dom),
        Ub = {},
        zb = Vo(["pre"]);
    ((e, t) => {
        Ub[e] || (Ub[e] = []),
            Ub[e].push((e) => {
                if (!e.selection.getRng().collapsed) {
                    const t = e.selection.getSelectedBlocks(),
                        n = G(
                            G(t, zb),
                            ((e) => (t) => {
                                const n = t.previousSibling;
                                return zb(n) && H(e, n);
                            })(t)
                        );
                    V(n, (e) => {
                        ((e, t) => {
                            const n = yn(t),
                                o = Nn(n).dom;
                            wo(n), yo(yn(e), [bn("br", o), bn("br", o), ...Mn(n)]);
                        })(e.previousSibling, e);
                    });
                }
            });
    })("pre");
    const jb = ["fontWeight", "fontStyle", "color", "fontSize", "fontFamily"],
        Hb = (e, t) => {
            const n = e.get(t);
            return p(n) ? J(n, (e) => km(e) && "span" === e.inline && ((e) => f(e.styles) && $(me(e.styles), (e) => H(jb, e)))(e)) : I.none();
        },
        $b = (e, t) => vu(t, Li.fromRangeStart(e)).isNone(),
        qb = (e, t) => !1 === bu(t, Li.fromRangeEnd(e)).exists((e) => !rr(e.getNode()) || bu(t, e).isSome()),
        Vb = (e) => (t) => ur(t) && e.isEditable(t),
        Wb = (e) => G(e.getSelectedBlocks(), Vb(e.dom)),
        Kb = Dt.each,
        Gb = (e) => $o(e) && !Lu(e) && !xu(e) && !Go(e),
        Yb = (e, t) => {
            for (let n = e; n; n = n[t]) {
                if (Jo(n) && Ge(n.data)) return e;
                if ($o(n) && !Lu(n)) return n;
            }
            return e;
        },
        Xb = (e, t, n) => {
            const o = Gh(e),
                r = $o(t) && am(t),
                s = $o(n) && am(n);
            if (r && s) {
                const r = Yb(t, "previousSibling"),
                    s = Yb(n, "nextSibling");
                if (o.compare(r, s)) {
                    for (let e = r.nextSibling; e && e !== s; ) {
                        const t = e;
                        (e = e.nextSibling), r.appendChild(t);
                    }
                    return (
                        e.dom.remove(s),
                        Dt.each(Dt.grep(s.childNodes), (e) => {
                            r.appendChild(e);
                        }),
                        r
                    );
                }
            }
            return n;
        },
        Qb = (e, t, n, o) => {
            var r;
            if (o && !1 !== t.merge_siblings) {
                const t = null !== (r = Xb(e, dm(o), o)) && void 0 !== r ? r : o;
                Xb(e, t, dm(t, !0));
            }
        },
        Jb = (e, t, n) => {
            Kb(e.childNodes, (e) => {
                Gb(e) && (t(e) && n(e), e.hasChildNodes() && Jb(e, t, n));
            });
        },
        Zb = (e, t) => (n) => !(!n || !bm(e, n, t)),
        ev = (e, t, n) => (o) => {
            e.setStyle(o, t, n),
                "" === o.getAttribute("style") && o.removeAttribute("style"),
                ((e, t) => {
                    "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0);
                })(e, o);
        },
        tv = al([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
        nv = /^(src|href|style)$/,
        ov = Dt.each,
        rv = pm,
        sv = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n),
        av = (e, t, n) => {
            let o = t[n ? "startContainer" : "endContainer"],
                r = t[n ? "startOffset" : "endOffset"];
            if ($o(o)) {
                const e = o.childNodes.length - 1;
                !n && r && r--, (o = o.childNodes[r > e ? e : r]);
            }
            return Jo(o) && n && r >= o.data.length && (o = new zo(o, e.getBody()).next() || o), Jo(o) && !n && 0 === r && (o = new zo(o, e.getBody()).prev() || o), o;
        },
        iv = (e, t) => {
            const n = t ? "firstChild" : "lastChild",
                o = e[n];
            return ((e) => /^(TR|TH|TD)$/.test(e.nodeName))(e) && o ? ("TR" === e.nodeName && o[n]) || o : e;
        },
        lv = (e, t, n, o) => {
            var r;
            const s = e.create(n, o);
            return null === (r = t.parentNode) || void 0 === r || r.insertBefore(s, t), s.appendChild(t), s;
        },
        dv = (e, t, n, o, r) => {
            const s = yn(t),
                a = yn(e.create(o, r)),
                i = n ? Ln(s) : Pn(s);
            return yo(a, i), n ? (go(s, a), ho(a, s)) : (po(s, a), bo(a, s)), a.dom;
        },
        cv = (e, t, n) => {
            const o = t.parentNode;
            let r;
            const s = e.dom,
                a = Nl(e);
            wm(n) &&
                o === s.getRoot() &&
                ((n.list_block && rv(t, n.list_block)) ||
                    V(ce(t.childNodes), (t) => {
                        um(e, a, t.nodeName.toLowerCase()) ? (r ? r.appendChild(t) : ((r = lv(s, t, a)), s.setAttribs(r, Rl(e)))) : (r = null);
                    })),
                (((e) => xm(e) && km(e) && Pt(xe(e, "mixed"), !0))(n) && !rv(n.inline, t)) || s.remove(t, !0);
        },
        uv = (e, t, n) => (x(e) ? { name: t, value: null } : { name: e, value: gm(t, n) }),
        mv = (e, t) => {
            "" === e.getAttrib(t, "style") && (t.removeAttribute("style"), t.removeAttribute("data-mce-style"));
        },
        fv = (e, t, n, o, r) => {
            let s = !1;
            ov(n.styles, (a, i) => {
                const { name: l, value: d } = uv(i, a, o),
                    c = hm(d, l);
                (n.remove_similar || h(d) || !$o(r) || rv(bm(e, r, l), c)) && e.setStyle(t, l, ""), (s = !0);
            }),
                s && mv(e, t);
        },
        gv = (e, t, n, o, r) => {
            const s = e.dom,
                a = Gh(e),
                i = e.schema;
            if (km(t) && Ns(i, t.inline) && As(i, o) && o.parentElement === e.getBody()) return cv(e, o, t), tv.removed();
            if (!t.ceFalseOverride && o && "false" === s.getContentEditableParent(o)) return tv.keep();
            if (o && !xb(s, o, t) && !((e, t) => t.links && "A" === e.nodeName)(o, t)) return tv.keep();
            const l = o,
                d = t.preserve_attributes;
            if (km(t) && "all" === t.remove && p(d)) {
                const e = G(s.getAttribs(l), (e) => H(d, e.name.toLowerCase()));
                if ((s.removeAllAttribs(l), V(e, (e) => s.setAttrib(l, e.name, e.value)), e.length > 0)) return tv.rename("span");
            }
            if ("all" !== t.remove) {
                fv(s, l, t, n, r),
                    ov(t.attributes, (e, o) => {
                        const { name: a, value: i } = uv(o, e, n);
                        if (t.remove_similar || h(i) || !$o(r) || rv(s.getAttrib(r, a), i)) {
                            if ("class" === a) {
                                const e = s.getAttrib(l, a);
                                if (e) {
                                    let t = "";
                                    if (
                                        (V(e.split(/\s+/), (e) => {
                                            /mce\-\w+/.test(e) && (t += (t ? " " : "") + e);
                                        }),
                                        t)
                                    )
                                        return void s.setAttrib(l, a, t);
                                }
                            }
                            if ((nv.test(a) && l.removeAttribute("data-mce-" + a), "style" === a && Vo(["li"])(l) && "none" === s.getStyle(l, "list-style-type"))) return l.removeAttribute(a), void s.setStyle(l, "list-style-type", "none");
                            "class" === a && l.removeAttribute("className"), l.removeAttribute(a);
                        }
                    }),
                    ov(t.classes, (e) => {
                        (e = gm(e, n)), ($o(r) && !s.hasClass(r, e)) || s.removeClass(l, e);
                    });
                const e = s.getAttribs(l);
                for (let t = 0; t < e.length; t++) {
                    const n = e[t].nodeName;
                    if (!a.isAttributeInternal(n)) return tv.keep();
                }
            }
            return "none" !== t.remove ? (cv(e, l, t), tv.removed()) : tv.keep();
        },
        pv = (e, t, n, o) => gv(e, t, n, o, o).fold(N(o), (t) => (e.dom.createFragment().appendChild(o), e.dom.rename(o, t)), N(null)),
        hv = (e, t, n, o, r) => {
            (o || e.selection.isEditable()) &&
                ((e, t, n, o, r) => {
                    const s = e.formatter.get(t),
                        a = s[0],
                        i = e.dom,
                        l = e.selection,
                        d = (o) => {
                            const i = ((e, t, n, o, r) => {
                                let s;
                                return (
                                    t.parentNode &&
                                        V(ym(e.dom, t.parentNode).reverse(), (t) => {
                                            if (!s && $o(t) && "_start" !== t.id && "_end" !== t.id) {
                                                const a = Eb(e, t, n, o, r);
                                                a && !1 !== a.split && (s = t);
                                            }
                                        }),
                                    s
                                );
                            })(e, o, t, n, r);
                            return ((e, t, n, o, r, s, a, i) => {
                                var l, d;
                                let c, u;
                                const m = e.dom;
                                if (n) {
                                    const s = n.parentNode;
                                    for (let n = o.parentNode; n && n !== s; n = n.parentNode) {
                                        let o = m.clone(n, !1);
                                        for (let n = 0; n < t.length && ((o = pv(e, t[n], i, o)), null !== o); n++);
                                        o && (c && o.appendChild(c), u || (u = o), (c = o));
                                    }
                                    (a.mixed && m.isBlock(n)) || (o = null !== (l = m.split(n, o)) && void 0 !== l ? l : o),
                                        c && u && (null === (d = r.parentNode) || void 0 === d || d.insertBefore(c, r), u.appendChild(r), km(a) && Qb(e, a, 0, c));
                                }
                                return o;
                            })(e, s, i, o, o, 0, a, n);
                        },
                        c = (t) => $(s, (o) => bv(e, o, n, t, t)),
                        u = (t) => {
                            const n = ce(t.childNodes),
                                o = c(t) || $(s, (e) => xb(i, t, e)),
                                r = t.parentNode;
                            if ((!o && C(r) && Em(a) && c(r), a.deep && n.length)) for (let e = 0; e < n.length; e++) u(n[e]);
                            V(["underline", "line-through", "overline"], (n) => {
                                $o(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && vm(i, t.parentNode) === n && bv(e, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: n } }, void 0, t);
                            });
                        },
                        m = (e) => {
                            const t = i.get(e ? "_start" : "_end");
                            if (t) {
                                let n = t[e ? "firstChild" : "lastChild"];
                                return (
                                    ((e) => Lu(e) && $o(e) && ("_start" === e.id || "_end" === e.id))(n) && (n = n[e ? "firstChild" : "lastChild"]),
                                    Jo(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling),
                                    i.remove(t, !0),
                                    n
                                );
                            }
                            return null;
                        },
                        f = (t) => {
                            let n,
                                o,
                                r = Um(i, t, s, t.collapsed);
                            if (a.split) {
                                if (((r = Bf(r)), (n = av(e, r, !0)), (o = av(e, r)), n !== o)) {
                                    if (((n = iv(n, !0)), (o = iv(o, !1)), sv(i, n, o))) {
                                        const e = I.from(n.firstChild).getOr(n);
                                        return d(dv(i, e, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void m(!0);
                                    }
                                    if (sv(i, o, n)) {
                                        const e = I.from(o.lastChild).getOr(o);
                                        return d(dv(i, e, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void m(!1);
                                    }
                                    (n = lv(i, n, "span", { id: "_start", "data-mce-type": "bookmark" })), (o = lv(i, o, "span", { id: "_end", "data-mce-type": "bookmark" }));
                                    const e = i.createRng();
                                    e.setStartAfter(n),
                                        e.setEndBefore(o),
                                        zm(i, e, (e) => {
                                            V(e, (e) => {
                                                Lu(e) || Lu(e.parentNode) || d(e);
                                            });
                                        }),
                                        d(n),
                                        d(o),
                                        (n = m(!0)),
                                        (o = m());
                                } else n = o = d(n);
                                (r.startContainer = n.parentNode ? n.parentNode : n), (r.startOffset = i.nodeIndex(n)), (r.endContainer = o.parentNode ? o.parentNode : o), (r.endOffset = i.nodeIndex(o) + 1);
                            }
                            zm(i, r, (e) => {
                                V(e, u);
                            });
                        };
                    if (o) {
                        if (rm(o)) {
                            const e = i.createRng();
                            e.setStartBefore(o), e.setEndAfter(o), f(e);
                        } else f(o);
                        Xm(e, t, o, n);
                    } else
                        l.isCollapsed() && km(a) && !Yu(e).length
                            ? Pb(e, t, n, r)
                            : (im(
                                  e,
                                  () => nm(e, f),
                                  (o) => km(a) && Sb(e, t, n, o)
                              ),
                              e.nodeChanged()),
                            ((e, t, n) => {
                                "removeformat" === t
                                    ? V(Wb(e.selection), (t) => {
                                          V(jb, (n) => e.dom.setStyle(t, n, "")), mv(e.dom, t);
                                      })
                                    : Hb(e.formatter, t).each((t) => {
                                          V(Wb(e.selection), (o) => fv(e.dom, o, t, n, null));
                                      });
                            })(e, t, n),
                            Xm(e, t, o, n);
                })(e, t, n, o, r);
        },
        bv = (e, t, n, o, r) => gv(e, t, n, o, r).fold(L, (t) => (e.dom.rename(o, t), !0), M),
        vv = Dt.each,
        yv = Dt.each,
        Cv = (e, t, n, o) => {
            if (
                (yv(n.styles, (n, r) => {
                    e.setStyle(t, r, gm(n, o));
                }),
                n.styles)
            ) {
                const n = e.getAttrib(t, "style");
                n && e.setAttrib(t, "data-mce-style", n);
            }
        },
        wv = (e, t, n, o) => {
            const r = e.formatter.get(t),
                s = r[0],
                a = !o && e.selection.isCollapsed(),
                i = e.dom,
                l = e.selection,
                d = (e, t = s) => {
                    w(t.onformat) && t.onformat(e, t, n, o),
                        Cv(i, e, t, n),
                        yv(t.attributes, (t, o) => {
                            i.setAttrib(e, o, gm(t, n));
                        }),
                        yv(t.classes, (t) => {
                            const o = gm(t, n);
                            i.hasClass(e, o) || i.addClass(e, o);
                        });
                },
                c = (e, t) => {
                    let n = !1;
                    return yv(e, (e) => !(!xm(e) || (("false" !== i.getContentEditable(t) || e.ceFalseOverride) && (!C(e.collapsed) || e.collapsed === a) && i.is(t, e.selector) && !xu(t) && (d(t, e), (n = !0), 1)))), n;
                },
                u = (e) => {
                    if (m(e)) {
                        const t = i.create(e);
                        return d(t), t;
                    }
                    return null;
                },
                f = (o, a, i) => {
                    const l = [];
                    let m = !0;
                    const f = s.inline || s.block,
                        g = u(f);
                    zm(o, a, (a) => {
                        let u;
                        const p = (a) => {
                            let h = !1,
                                b = m,
                                v = !1;
                            const y = a.parentNode,
                                w = y.nodeName.toLowerCase(),
                                x = o.getContentEditable(a);
                            C(x) && ((b = m), (m = "true" === x), (h = !0), (v = fm(e, a)));
                            const k = m && !h;
                            if (
                                rr(a) &&
                                !((e, t, n, o) => {
                                    if (md(e) && km(t) && n.parentNode) {
                                        const t = la(e.schema),
                                            r = hb(yn(n), (e) => xu(e.dom));
                                        return Ee(t, o) && bs(yn(n.parentNode), !1) && !r;
                                    }
                                    return !1;
                                })(e, s, a, w)
                            )
                                return (u = null), void (wm(s) && o.remove(a));
                            if (((o) => ((e) => wm(e) && !0 === e.wrapper)(s) && Eb(e, o, t, n))(a)) u = null;
                            else {
                                if (
                                    ((t, n, o) => {
                                        const r = ((e) => wm(e) && !0 !== e.wrapper)(s) && cm(e.schema, t) && um(e, n, f);
                                        return o && r;
                                    })(a, w, k)
                                ) {
                                    const e = o.rename(a, f);
                                    return d(e), l.push(e), void (u = null);
                                }
                                if (xm(s)) {
                                    let e = c(r, a);
                                    if ((!e && C(y) && Em(s) && (e = c(r, y)), !km(s) || e)) return void (u = null);
                                }
                                C(g) &&
                                ((t, n, r, a) => {
                                    const l = t.nodeName.toLowerCase(),
                                        d = um(e, f, l) && um(e, n, f),
                                        c = !i && Jo(t) && Ir(t.data),
                                        u = xu(t),
                                        m = !km(s) || !o.isBlock(t);
                                    return (r || a) && d && !c && !u && m;
                                })(a, w, k, v)
                                    ? (u || ((u = o.clone(g, !1)), y.insertBefore(u, a), l.push(u)), v && h && (m = b), u.appendChild(a))
                                    : ((u = null), V(ce(a.childNodes), p), h && (m = b), (u = null));
                            }
                        };
                        V(a, p);
                    }),
                        !0 === s.links &&
                            V(l, (e) => {
                                const t = (e) => {
                                    "A" === e.nodeName && d(e, s), V(ce(e.childNodes), t);
                                };
                                t(e);
                            }),
                        V(l, (a) => {
                            const i = ((e) => {
                                let t = 0;
                                return (
                                    V(e.childNodes, (e) => {
                                        ((e) => C(e) && Jo(e) && 0 === e.length)(e) || Lu(e) || t++;
                                    }),
                                    t
                                );
                            })(a);
                            (!(l.length > 1) && o.isBlock(a)) || 0 !== i
                                ? (km(s) || (wm(s) && s.wrapper)) &&
                                  (s.exact ||
                                      1 !== i ||
                                      (a = ((e) => {
                                          const t = J(e.childNodes, sm).filter((e) => "false" !== o.getContentEditable(e) && xb(o, e, s));
                                          return t
                                              .map((t) => {
                                                  const n = o.clone(t, !1);
                                                  return d(n), o.replace(n, e, !0), o.remove(t, !0), n;
                                              })
                                              .getOr(e);
                                      })(a)),
                                  ((e, t, n, o) => {
                                      vv(t, (t) => {
                                          km(t) &&
                                              vv(e.dom.select(t.inline, o), (o) => {
                                                  Gb(o) && bv(e, t, n, o, t.exact ? o : null);
                                              }),
                                              ((e, t, n) => {
                                                  if (t.clear_child_styles) {
                                                      const o = t.links ? "*:not(a)" : "*";
                                                      Kb(e.select(o, n), (n) => {
                                                          Gb(n) &&
                                                              am(n) &&
                                                              Kb(t.styles, (t, o) => {
                                                                  e.setStyle(n, o, "");
                                                              });
                                                      });
                                                  }
                                              })(e.dom, t, o);
                                      });
                                  })(e, r, n, a),
                                  ((e, t, n, o, r) => {
                                      const s = r.parentNode;
                                      (Eb(e, s, n, o) && bv(e, t, o, r)) || (t.merge_with_parents && s && e.dom.getParent(s, (s) => !!Eb(e, s, n, o) && (bv(e, t, o, r), !0)));
                                  })(e, s, t, n, a),
                                  ((e, t, n, o) => {
                                      if (t.styles && t.styles.backgroundColor) {
                                          const r = Zb(e, "fontSize");
                                          Jb(o, (e) => r(e) && am(e), ev(e, "backgroundColor", gm(t.styles.backgroundColor, n)));
                                      }
                                  })(o, s, n, a),
                                  ((e, t, n, o) => {
                                      const r = (t) => {
                                          if ($o(t) && $o(t.parentNode) && am(t)) {
                                              const n = vm(e, t.parentNode);
                                              e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null);
                                          }
                                      };
                                      t.styles && (t.styles.color || t.styles.textDecoration) && (Dt.walk(o, r, "childNodes"), r(o));
                                  })(o, s, 0, a),
                                  ((e, t, n, o) => {
                                      if (km(t) && ("sub" === t.inline || "sup" === t.inline)) {
                                          const n = Zb(e, "fontSize");
                                          Jb(o, (e) => n(e) && am(e), ev(e, "fontSize", ""));
                                          const r = G(e.select("sup" === t.inline ? "sub" : "sup", o), am);
                                          e.remove(r, !0);
                                      }
                                  })(o, s, 0, a),
                                  Qb(e, s, 0, a))
                                : o.remove(a, !0);
                        });
                },
                g = rm(o) ? o : l.getNode();
            if ("false" === i.getContentEditable(g) && !fm(e, g)) return c(r, (o = g)), void Ym(e, t, o, n);
            if (s) {
                if (o)
                    if (rm(o)) {
                        if (!c(r, o)) {
                            const e = i.createRng();
                            e.setStartBefore(o), e.setEndAfter(o), f(i, Um(i, e, r), !0);
                        }
                    } else f(i, o, !0);
                else
                    a && km(s) && !Yu(e).length
                        ? ((e, t, n) => {
                              let o;
                              const r = e.selection,
                                  s = e.formatter.get(t);
                              if (!s) return;
                              const a = r.getRng();
                              let i = a.startOffset;
                              const l = a.startContainer.nodeValue;
                              o = ku(e.getBody(), r.getStart());
                              const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                              if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
                                  const o = r.getBookmark();
                                  a.collapse(!0);
                                  let i = Um(e.dom, a, s);
                                  (i = Bf(i)), e.formatter.apply(t, n, i), r.moveToBookmark(o);
                              } else {
                                  let s = o ? Rb(o) : null;
                                  (o && (null == s ? void 0 : s.data) === _b) || ((c = e.getDoc()), (u = Ab(!0).dom), (o = c.importNode(u, !0)), (s = o.firstChild), a.insertNode(o), (i = 1)),
                                      e.formatter.apply(t, n, o),
                                      r.setCursorLocation(s, i);
                              }
                              var c, u;
                          })(e, t, n)
                        : (l.setRng(sb(l.getRng())),
                          im(
                              e,
                              () => {
                                  nm(e, (e, t) => {
                                      const n = t ? e : Um(i, e, r);
                                      f(i, n, !1);
                                  });
                              },
                              M
                          ),
                          e.nodeChanged()),
                        Hb(e.formatter, t).each((t) => {
                            V(
                                ((e) =>
                                    G(
                                        ((e) => {
                                            const t = e.getSelectedBlocks(),
                                                n = e.getRng();
                                            if (e.isCollapsed()) return [];
                                            if (1 === t.length) return $b(n, t[0]) && qb(n, t[0]) ? t : [];
                                            {
                                                const e = le(t)
                                                        .filter((e) => $b(n, e))
                                                        .toArray(),
                                                    o = de(t)
                                                        .filter((e) => qb(n, e))
                                                        .toArray(),
                                                    r = t.slice(1, -1);
                                                return e.concat(r).concat(o);
                                            }
                                        })(e),
                                        Vb(e.dom)
                                    ))(e.selection),
                                (e) => Cv(i, e, t, n)
                            );
                        });
                ((e, t) => {
                    ke(Ub, e) &&
                        V(Ub[e], (e) => {
                            e(t);
                        });
                })(t, e);
            }
            Ym(e, t, o, n);
        },
        xv = (e, t, n, o) => {
            (o || e.selection.isEditable()) && wv(e, t, n, o);
        },
        kv = (e) => ke(e, "vars"),
        Ev = (e) => e.selection.getStart(),
        Sv = (e, t, n, o, r) =>
            Q(
                t,
                (t) => {
                    const s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
                    return !v(s);
                },
                (t) => !!Cb(e, t, n) || (!o && C(e.formatter.matchNode(t, n, r, !0)))
            ),
        _v = (e, t) => {
            const n = null != t ? t : Ev(e);
            return G(ym(e.dom, n), (e) => $o(e) && !Go(e));
        },
        Nv = (e, t, n) => {
            const o = _v(e, t);
            ge(n, (n, r) => {
                const s = (n) => {
                    const s = Sv(e, o, r, n.similar, kv(n) ? n.vars : void 0),
                        a = s.isSome();
                    if (n.state.get() !== a) {
                        n.state.set(a);
                        const e = s.getOr(t);
                        kv(n) ? n.callback(a, { node: e, format: r, parents: o }) : V(n.callbacks, (t) => t(a, { node: e, format: r, parents: o }));
                    }
                };
                V([n.withSimilar, n.withoutSimilar], s), V(n.withVars, s);
            });
        },
        Rv = Dt.explode,
        Av = () => {
            const e = {};
            return {
                addFilter: (t, n) => {
                    V(Rv(t), (t) => {
                        ke(e, t) || (e[t] = { name: t, callbacks: [] }), e[t].callbacks.push(n);
                    });
                },
                getFilters: () => we(e),
                removeFilter: (t, n) => {
                    V(Rv(t), (t) => {
                        if (ke(e, t))
                            if (C(n)) {
                                const o = e[t],
                                    r = G(o.callbacks, (e) => e !== n);
                                r.length > 0 ? (o.callbacks = r) : delete e[t];
                            } else delete e[t];
                    });
                },
            };
        },
        Ov = (e, t, n) => {
            var o;
            const r = ua();
            t.convert_fonts_to_spans &&
                ((e, t, n) => {
                    e.addNodeFilter("font", (e) => {
                        V(e, (e) => {
                            const o = t.parse(e.attr("style")),
                                r = e.attr("color"),
                                s = e.attr("face"),
                                a = e.attr("size");
                            r && (o.color = r),
                                s && (o["font-family"] = s),
                                a &&
                                    Xe(a).each((e) => {
                                        o["font-size"] = n[e - 1];
                                    }),
                                (e.name = "span"),
                                e.attr("style", t.serialize(o)),
                                ((e, t) => {
                                    V(["color", "face", "size"], (t) => {
                                        e.attr(t, null);
                                    });
                                })(e);
                        });
                    });
                })(e, r, Dt.explode(null !== (o = t.font_size_legacy_values) && void 0 !== o ? o : "")),
                ((e, t, n) => {
                    e.addNodeFilter("strike", (e) => {
                        const o = "html4" !== t.type;
                        V(e, (e) => {
                            if (o) e.name = "s";
                            else {
                                const t = n.parse(e.attr("style"));
                                (t["text-decoration"] = "line-through"), (e.name = "span"), e.attr("style", n.serialize(t));
                            }
                        });
                    });
                })(e, n, r);
        },
        Tv = (e, t, n) => {
            t.addNodeFilter("br", (t, o, r) => {
                const s = Dt.extend({}, n.getBlockElements()),
                    a = n.getNonEmptyElements(),
                    i = n.getWhitespaceElements();
                s.body = 1;
                const l = (e) => e.name in s || Ts(n, e);
                for (let o = 0, d = t.length; o < d; o++) {
                    let d = t[o],
                        c = d.parent;
                    if (c && l(c) && d === c.lastChild) {
                        let t = d.prev;
                        for (; t; ) {
                            const e = t.name;
                            if ("span" !== e || "bookmark" !== t.attr("data-mce-type")) {
                                "br" === e && (d = null);
                                break;
                            }
                            t = t.prev;
                        }
                        if (d && (d.remove(), eb(n, a, i, c))) {
                            const t = n.getElementRule(c.name);
                            t && (t.removeEmpty ? c.remove() : t.paddEmpty && Jh(e, r, l, c));
                        }
                    } else {
                        let e = d;
                        for (; c && c.firstChild === e && c.lastChild === e && ((e = c), !s[c.name]); ) c = c.parent;
                        if (e === c) {
                            const e = new Fg("#text", 3);
                            (e.value = pr), d.replace(e);
                        }
                    }
                }
            });
        },
        Bv = (e) => {
            const [t, ...n] = e.split(","),
                o = n.join(","),
                r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);
            if (r) {
                const e = ";base64" === r[2],
                    t = e
                        ? ((e) => {
                              const t = /([a-z0-9+\/=\s]+)/i.exec(e);
                              return t ? t[1] : "";
                          })(o)
                        : decodeURIComponent(o);
                return I.some({ type: r[1], data: t, base64Encoded: e });
            }
            return I.none();
        },
        Dv = (e, t, n = !0) => {
            let o = t;
            if (n)
                try {
                    o = atob(t);
                } catch (e) {
                    return I.none();
                }
            const r = new Uint8Array(o.length);
            for (let e = 0; e < r.length; e++) r[e] = o.charCodeAt(e);
            return I.some(new Blob([r], { type: e }));
        },
        Pv = (e) =>
            new Promise((t, n) => {
                const o = new FileReader();
                (o.onloadend = () => {
                    t(o.result);
                }),
                    (o.onerror = () => {
                        var e;
                        n(null === (e = o.error) || void 0 === e ? void 0 : e.message);
                    }),
                    o.readAsDataURL(e);
            });
    let Lv = 0;
    const Mv = (e, t, n) =>
            Bv(e).bind(({ data: e, type: o, base64Encoded: r }) => {
                if (t && !r) return I.none();
                {
                    const t = r ? e : btoa(e);
                    return n(t, o);
                }
            }),
        Iv = (e, t, n) => {
            const o = e.create("blobid" + Lv++, t, n);
            return e.add(o), o;
        },
        Fv = (e, t, n = !1) => Mv(t, n, (t, n) => I.from(e.getByData(t, n)).orThunk(() => Dv(n, t).map((n) => Iv(e, n, t)))),
        Uv = (e, t) => {
            const n = e.schema;
            t.remove_trailing_brs && Tv(t, e, n),
                e.addAttributeFilter("href", (e) => {
                    let n = e.length;
                    const o = (e) => {
                        const t = e ? Dt.trim(e) : "";
                        return /\b(noopener)\b/g.test(t)
                            ? t
                            : ((e) =>
                                  e
                                      .split(" ")
                                      .filter((e) => e.length > 0)
                                      .concat(["noopener"])
                                      .sort()
                                      .join(" "))(t);
                    };
                    if (!t.allow_unsafe_link_target)
                        for (; n--; ) {
                            const t = e[n];
                            "a" === t.name && "_blank" === t.attr("target") && t.attr("rel", o(t.attr("rel")));
                        }
                }),
                t.allow_html_in_named_anchor ||
                    e.addAttributeFilter("id,name", (e) => {
                        let t,
                            n,
                            o,
                            r,
                            s = e.length;
                        for (; s--; ) if (((r = e[s]), "a" === r.name && r.firstChild && !r.attr("href"))) for (o = r.parent, t = r.lastChild; t && o; ) (n = t.prev), o.insert(t, r), (t = n);
                    }),
                t.fix_list_elements &&
                    e.addNodeFilter("ul,ol", (e) => {
                        let t,
                            n,
                            o = e.length;
                        for (; o--; )
                            if (((t = e[o]), (n = t.parent), n && ("ul" === n.name || "ol" === n.name)))
                                if (t.prev && "li" === t.prev.name) t.prev.append(t);
                                else {
                                    const e = new Fg("li", 1);
                                    e.attr("style", "list-style-type: none"), t.wrap(e);
                                }
                    });
            const o = n.getValidClasses();
            t.validate &&
                o &&
                e.addAttributeFilter("class", (e) => {
                    var t;
                    let n = e.length;
                    for (; n--; ) {
                        const r = e[n],
                            s = null !== (t = r.attr("class")) && void 0 !== t ? t : "",
                            a = Dt.explode(s, " ");
                        let i = "";
                        for (let e = 0; e < a.length; e++) {
                            const t = a[e];
                            let n = !1,
                                s = o["*"];
                            s && s[t] && (n = !0), (s = o[r.name]), !n && s && s[t] && (n = !0), n && (i && (i += " "), (i += t));
                        }
                        i.length || (i = null), r.attr("class", i);
                    }
                }),
                ((e, t) => {
                    const { blob_cache: n } = t;
                    if (n) {
                        const t = (e) => {
                            const t = e.attr("src");
                            ((e) => e.attr("src") === At.transparentSrc || C(e.attr("data-mce-placeholder")))(e) ||
                                ((e) => C(e.attr("data-mce-bogus")))(e) ||
                                y(t) ||
                                Fv(n, t, !0).each((t) => {
                                    e.attr("src", t.blobUri());
                                });
                        };
                        e.addAttributeFilter("src", (e) => V(e, t));
                    }
                })(e, t);
        };
    function zv(e) {
        return (
            (zv =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            zv(e)
        );
    }
    function jv(e, t) {
        return (
            (jv =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                }),
            jv(e, t)
        );
    }
    function Hv(e, t, n) {
        return (
            (Hv = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()
                ? Reflect.construct
                : function (e, t, n) {
                      var o = [null];
                      o.push.apply(o, t);
                      var r = new (Function.bind.apply(e, o))();
                      return n && jv(r, n.prototype), r;
                  }),
            Hv.apply(null, arguments)
        );
    }
    function $v(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return qv(e);
            })(e) ||
            (function (e) {
                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            })(e) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return qv(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qv(e, t) : void 0;
                }
            })(e) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function qv(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
    }
    var Vv = Object.hasOwnProperty,
        Wv = Object.setPrototypeOf,
        Kv = Object.isFrozen,
        Gv = Object.getPrototypeOf,
        Yv = Object.getOwnPropertyDescriptor,
        Xv = Object.freeze,
        Qv = Object.seal,
        Jv = Object.create,
        Zv = "undefined" != typeof Reflect && Reflect,
        ey = Zv.apply,
        ty = Zv.construct;
    ey ||
        (ey = function (e, t, n) {
            return e.apply(t, n);
        }),
        Xv ||
            (Xv = function (e) {
                return e;
            }),
        Qv ||
            (Qv = function (e) {
                return e;
            }),
        ty ||
            (ty = function (e, t) {
                return Hv(e, $v(t));
            });
    var ny,
        oy = fy(Array.prototype.forEach),
        ry = fy(Array.prototype.pop),
        sy = fy(Array.prototype.push),
        ay = fy(String.prototype.toLowerCase),
        iy = fy(String.prototype.match),
        ly = fy(String.prototype.replace),
        dy = fy(String.prototype.indexOf),
        cy = fy(String.prototype.trim),
        uy = fy(RegExp.prototype.test),
        my =
            ((ny = TypeError),
            function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ty(ny, t);
            });
    function fy(e) {
        return function (t) {
            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
            return ey(e, t, o);
        };
    }
    function gy(e, t) {
        Wv && Wv(e, null);
        for (var n = t.length; n--; ) {
            var o = t[n];
            if ("string" == typeof o) {
                var r = ay(o);
                r !== o && (Kv(t) || (t[n] = r), (o = r));
            }
            e[o] = !0;
        }
        return e;
    }
    function py(e) {
        var t,
            n = Jv(null);
        for (t in e) ey(Vv, e, [t]) && (n[t] = e[t]);
        return n;
    }
    function hy(e, t) {
        for (; null !== e; ) {
            var n = Yv(e, t);
            if (n) {
                if (n.get) return fy(n.get);
                if ("function" == typeof n.value) return fy(n.value);
            }
            e = Gv(e);
        }
        return function (e) {
            return console.warn("fallback value for", e), null;
        };
    }
    var by = Xv([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
        ]),
        vy = Xv([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern",
        ]),
        yy = Xv([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
        ]),
        Cy = Xv([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "fedropshadow",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use",
        ]),
        wy = Xv([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover",
        ]),
        xy = Xv(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        ky = Xv(["#text"]),
        Ey = Xv([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "nonce",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "xmlns",
            "slot",
        ]),
        Sy = Xv([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "targetx",
            "targety",
            "transform",
            "transform-origin",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan",
        ]),
        _y = Xv([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns",
        ]),
        Ny = Xv(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        Ry = Qv(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        Ay = Qv(/<%[\w\W]*|[\w\W]*%>/gm),
        Oy = Qv(/^data-[\-\w.\u00B7-\uFFFF]/),
        Ty = Qv(/^aria-[\-\w]+$/),
        By = Qv(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        Dy = Qv(/^(?:\w+script|data):/i),
        Py = Qv(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Ly = Qv(/^html$/i),
        My = function () {
            return "undefined" == typeof window ? null : window;
        },
        Iy = (function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : My(),
                n = function (t) {
                    return e(t);
                };
            if (((n.version = "2.3.8"), (n.removed = []), !t || !t.document || 9 !== t.document.nodeType)) return (n.isSupported = !1), n;
            var o = t.document,
                r = t.document,
                s = t.DocumentFragment,
                a = t.HTMLTemplateElement,
                i = t.Node,
                l = t.Element,
                d = t.NodeFilter,
                c = t.NamedNodeMap,
                u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c,
                m = t.HTMLFormElement,
                f = t.DOMParser,
                g = t.trustedTypes,
                p = l.prototype,
                h = hy(p, "cloneNode"),
                b = hy(p, "nextSibling"),
                v = hy(p, "childNodes"),
                y = hy(p, "parentNode");
            if ("function" == typeof a) {
                var C = r.createElement("template");
                C.content && C.content.ownerDocument && (r = C.content.ownerDocument);
            }
            var w = (function (e, t) {
                    if ("object" !== zv(e) || "function" != typeof e.createPolicy) return null;
                    var n = null,
                        o = "data-tt-policy-suffix";
                    t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
                    var r = "dompurify" + (n ? "#" + n : "");
                    try {
                        return e.createPolicy(r, {
                            createHTML: function (e) {
                                return e;
                            },
                        });
                    } catch (e) {
                        return console.warn("TrustedTypes policy " + r + " could not be created."), null;
                    }
                })(g, o),
                x = w ? w.createHTML("") : "",
                k = r,
                E = k.implementation,
                S = k.createNodeIterator,
                _ = k.createDocumentFragment,
                N = k.getElementsByTagName,
                R = o.importNode,
                A = {};
            try {
                A = py(r).documentMode ? r.documentMode : {};
            } catch (e) {}
            var O = {};
            n.isSupported = "function" == typeof y && E && void 0 !== E.createHTMLDocument && 9 !== A;
            var T,
                B,
                D = Ry,
                P = Ay,
                L = Oy,
                M = Ty,
                I = Dy,
                F = Py,
                U = By,
                z = null,
                j = gy({}, [].concat($v(by), $v(vy), $v(yy), $v(wy), $v(ky))),
                H = null,
                $ = gy({}, [].concat($v(Ey), $v(Sy), $v(_y), $v(Ny))),
                q = Object.seal(
                    Object.create(null, {
                        tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                        attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                        allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                    })
                ),
                V = null,
                W = null,
                K = !0,
                G = !0,
                Y = !1,
                X = !1,
                Q = !1,
                J = !1,
                Z = !1,
                ee = !1,
                te = !1,
                ne = !1,
                oe = !0,
                re = !0,
                se = !1,
                ae = {},
                ie = null,
                le = gy({}, [
                    "annotation-xml",
                    "audio",
                    "colgroup",
                    "desc",
                    "foreignobject",
                    "head",
                    "iframe",
                    "math",
                    "mi",
                    "mn",
                    "mo",
                    "ms",
                    "mtext",
                    "noembed",
                    "noframes",
                    "noscript",
                    "plaintext",
                    "script",
                    "style",
                    "svg",
                    "template",
                    "thead",
                    "title",
                    "video",
                    "xmp",
                ]),
                de = null,
                ce = gy({}, ["audio", "video", "img", "source", "image", "track"]),
                ue = null,
                me = gy({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                fe = "http://www.w3.org/1998/Math/MathML",
                ge = "http://www.w3.org/2000/svg",
                pe = "http://www.w3.org/1999/xhtml",
                he = pe,
                be = !1,
                ve = ["application/xhtml+xml", "text/html"],
                ye = null,
                Ce = r.createElement("form"),
                we = function (e) {
                    return e instanceof RegExp || e instanceof Function;
                },
                xe = function (e) {
                    (ye && ye === e) ||
                        ((e && "object" === zv(e)) || (e = {}),
                        (e = py(e)),
                        (z = "ALLOWED_TAGS" in e ? gy({}, e.ALLOWED_TAGS) : j),
                        (H = "ALLOWED_ATTR" in e ? gy({}, e.ALLOWED_ATTR) : $),
                        (ue = "ADD_URI_SAFE_ATTR" in e ? gy(py(me), e.ADD_URI_SAFE_ATTR) : me),
                        (de = "ADD_DATA_URI_TAGS" in e ? gy(py(ce), e.ADD_DATA_URI_TAGS) : ce),
                        (ie = "FORBID_CONTENTS" in e ? gy({}, e.FORBID_CONTENTS) : le),
                        (V = "FORBID_TAGS" in e ? gy({}, e.FORBID_TAGS) : {}),
                        (W = "FORBID_ATTR" in e ? gy({}, e.FORBID_ATTR) : {}),
                        (ae = "USE_PROFILES" in e && e.USE_PROFILES),
                        (K = !1 !== e.ALLOW_ARIA_ATTR),
                        (G = !1 !== e.ALLOW_DATA_ATTR),
                        (Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                        (X = e.SAFE_FOR_TEMPLATES || !1),
                        (Q = e.WHOLE_DOCUMENT || !1),
                        (ee = e.RETURN_DOM || !1),
                        (te = e.RETURN_DOM_FRAGMENT || !1),
                        (ne = e.RETURN_TRUSTED_TYPE || !1),
                        (Z = e.FORCE_BODY || !1),
                        (oe = !1 !== e.SANITIZE_DOM),
                        (re = !1 !== e.KEEP_CONTENT),
                        (se = e.IN_PLACE || !1),
                        (U = e.ALLOWED_URI_REGEXP || U),
                        (he = e.NAMESPACE || pe),
                        e.CUSTOM_ELEMENT_HANDLING && we(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING && we(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (q.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        (T = T = -1 === ve.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE),
                        (B =
                            "application/xhtml+xml" === T
                                ? function (e) {
                                      return e;
                                  }
                                : ay),
                        X && (G = !1),
                        te && (ee = !0),
                        ae &&
                            ((z = gy({}, $v(ky))),
                            (H = []),
                            !0 === ae.html && (gy(z, by), gy(H, Ey)),
                            !0 === ae.svg && (gy(z, vy), gy(H, Sy), gy(H, Ny)),
                            !0 === ae.svgFilters && (gy(z, yy), gy(H, Sy), gy(H, Ny)),
                            !0 === ae.mathMl && (gy(z, wy), gy(H, _y), gy(H, Ny))),
                        e.ADD_TAGS && (z === j && (z = py(z)), gy(z, e.ADD_TAGS)),
                        e.ADD_ATTR && (H === $ && (H = py(H)), gy(H, e.ADD_ATTR)),
                        e.ADD_URI_SAFE_ATTR && gy(ue, e.ADD_URI_SAFE_ATTR),
                        e.FORBID_CONTENTS && (ie === le && (ie = py(ie)), gy(ie, e.FORBID_CONTENTS)),
                        re && (z["#text"] = !0),
                        Q && gy(z, ["html", "head", "body"]),
                        z.table && (gy(z, ["tbody"]), delete V.tbody),
                        Xv && Xv(e),
                        (ye = e));
                },
                ke = gy({}, ["mi", "mo", "mn", "ms", "mtext"]),
                Ee = gy({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                Se = gy({}, ["title", "style", "font", "a", "script"]),
                _e = gy({}, vy);
            gy(_e, yy), gy(_e, Cy);
            var Ne = gy({}, wy);
            gy(Ne, xy);
            var Re = function (e) {
                    sy(n.removed, { element: e });
                    try {
                        e.parentNode.removeChild(e);
                    } catch (t) {
                        try {
                            e.outerHTML = x;
                        } catch (t) {
                            e.remove();
                        }
                    }
                },
                Ae = function (e, t) {
                    try {
                        sy(n.removed, { attribute: t.getAttributeNode(e), from: t });
                    } catch (e) {
                        sy(n.removed, { attribute: null, from: t });
                    }
                    if ((t.removeAttribute(e), "is" === e && !H[e]))
                        if (ee || te)
                            try {
                                Re(t);
                            } catch (e) {}
                        else
                            try {
                                t.setAttribute(e, "");
                            } catch (e) {}
                },
                Oe = function (e) {
                    var t, n;
                    if (Z) e = "<remove></remove>" + e;
                    else {
                        var o = iy(e, /^[\r\n\t ]+/);
                        n = o && o[0];
                    }
                    "application/xhtml+xml" === T && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                    var s = w ? w.createHTML(e) : e;
                    if (he === pe)
                        try {
                            t = new f().parseFromString(s, T);
                        } catch (e) {}
                    if (!t || !t.documentElement) {
                        t = E.createDocument(he, "template", null);
                        try {
                            t.documentElement.innerHTML = be ? "" : s;
                        } catch (e) {}
                    }
                    var a = t.body || t.documentElement;
                    return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), he === pe ? N.call(t, Q ? "html" : "body")[0] : Q ? t.documentElement : a;
                },
                Te = function (e) {
                    return S.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1);
                },
                Be = function (e) {
                    return "object" === zv(i) ? e instanceof i : e && "object" === zv(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
                },
                De = function (e, t, o) {
                    O[e] &&
                        oy(O[e], function (e) {
                            e.call(n, t, o, ye);
                        });
                },
                Pe = function (e) {
                    var t, o;
                    if (
                        (De("beforeSanitizeElements", e, null),
                        (o = e) instanceof m &&
                            ("string" != typeof o.nodeName ||
                                "string" != typeof o.textContent ||
                                "function" != typeof o.removeChild ||
                                !(o.attributes instanceof u) ||
                                "function" != typeof o.removeAttribute ||
                                "function" != typeof o.setAttribute ||
                                "string" != typeof o.namespaceURI ||
                                "function" != typeof o.insertBefore))
                    )
                        return Re(e), !0;
                    if (uy(/[\u0080-\uFFFF]/, e.nodeName)) return Re(e), !0;
                    var r = B(e.nodeName);
                    if (
                        (De("uponSanitizeElement", e, { tagName: r, allowedTags: z }),
                        e.hasChildNodes() && !Be(e.firstElementChild) && (!Be(e.content) || !Be(e.content.firstElementChild)) && uy(/<[/\w]/g, e.innerHTML) && uy(/<[/\w]/g, e.textContent))
                    )
                        return Re(e), !0;
                    if ("select" === r && uy(/<template/i, e.innerHTML)) return Re(e), !0;
                    if (!z[r] || V[r]) {
                        if (!V[r] && Me(r)) {
                            if (q.tagNameCheck instanceof RegExp && uy(q.tagNameCheck, r)) return !1;
                            if (q.tagNameCheck instanceof Function && q.tagNameCheck(r)) return !1;
                        }
                        if (re && !ie[r]) {
                            var s = y(e) || e.parentNode,
                                a = v(e) || e.childNodes;
                            if (a && s) for (var i = a.length - 1; i >= 0; --i) s.insertBefore(h(a[i], !0), b(e));
                        }
                        return Re(e), !0;
                    }
                    return e instanceof l &&
                        !(function (e) {
                            var t = y(e);
                            (t && t.tagName) || (t = { namespaceURI: pe, tagName: "template" });
                            var n = ay(e.tagName),
                                o = ay(t.tagName);
                            return e.namespaceURI === ge
                                ? t.namespaceURI === pe
                                    ? "svg" === n
                                    : t.namespaceURI === fe
                                    ? "svg" === n && ("annotation-xml" === o || ke[o])
                                    : Boolean(_e[n])
                                : e.namespaceURI === fe
                                ? t.namespaceURI === pe
                                    ? "math" === n
                                    : t.namespaceURI === ge
                                    ? "math" === n && Ee[o]
                                    : Boolean(Ne[n])
                                : e.namespaceURI === pe && !(t.namespaceURI === ge && !Ee[o]) && !(t.namespaceURI === fe && !ke[o]) && !Ne[n] && (Se[n] || !_e[n]);
                        })(e)
                        ? (Re(e), !0)
                        : ("noscript" !== r && "noembed" !== r) || !uy(/<\/no(script|embed)/i, e.innerHTML)
                        ? (X && 3 === e.nodeType && ((t = e.textContent), (t = ly(t, D, " ")), (t = ly(t, P, " ")), e.textContent !== t && (sy(n.removed, { element: e.cloneNode() }), (e.textContent = t))),
                          De("afterSanitizeElements", e, null),
                          !1)
                        : (Re(e), !0);
                },
                Le = function (e, t, n) {
                    if (oe && ("id" === t || "name" === t) && (n in r || n in Ce)) return !1;
                    if (G && !W[t] && uy(L, t));
                    else if (K && uy(M, t));
                    else if (!H[t] || W[t]) {
                        if (
                            !(
                                (Me(e) &&
                                    ((q.tagNameCheck instanceof RegExp && uy(q.tagNameCheck, e)) || (q.tagNameCheck instanceof Function && q.tagNameCheck(e))) &&
                                    ((q.attributeNameCheck instanceof RegExp && uy(q.attributeNameCheck, t)) || (q.attributeNameCheck instanceof Function && q.attributeNameCheck(t)))) ||
                                ("is" === t && q.allowCustomizedBuiltInElements && ((q.tagNameCheck instanceof RegExp && uy(q.tagNameCheck, n)) || (q.tagNameCheck instanceof Function && q.tagNameCheck(n))))
                            )
                        )
                            return !1;
                    } else if (ue[t]);
                    else if (uy(U, ly(n, F, "")));
                    else if (("src" !== t && "xlink:href" !== t && "href" !== t) || "script" === e || 0 !== dy(n, "data:") || !de[e])
                        if (Y && !uy(I, ly(n, F, "")));
                        else if (n) return !1;
                    return !0;
                },
                Me = function (e) {
                    return e.indexOf("-") > 0;
                },
                Ie = function (e) {
                    var t, n, o, r;
                    De("beforeSanitizeAttributes", e, null);
                    var s = e.attributes;
                    if (s) {
                        var a = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: H };
                        for (r = s.length; r--; ) {
                            var i = (t = s[r]),
                                l = i.name,
                                d = i.namespaceURI;
                            (n = "value" === l ? t.value : cy(t.value)), (o = B(l));
                            var c = n;
                            if (((a.attrName = o), (a.attrValue = n), (a.keepAttr = !0), (a.forceKeepAttr = void 0), De("uponSanitizeAttribute", e, a), (n = a.attrValue), !a.forceKeepAttr))
                                if (a.keepAttr)
                                    if (uy(/\/>/i, n)) Ae(l, e);
                                    else {
                                        X && ((n = ly(n, D, " ")), (n = ly(n, P, " ")));
                                        var u = B(e.nodeName);
                                        if (Le(u, o, n)) {
                                            if (n !== c)
                                                try {
                                                    d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n);
                                                } catch (t) {
                                                    Ae(l, e);
                                                }
                                        } else Ae(l, e);
                                    }
                                else Ae(l, e);
                        }
                        De("afterSanitizeAttributes", e, null);
                    }
                },
                Fe = function e(t) {
                    var n,
                        o = Te(t);
                    for (De("beforeSanitizeShadowDOM", t, null); (n = o.nextNode()); ) De("uponSanitizeShadowNode", n, null), Pe(n) || (n.content instanceof s && e(n.content), Ie(n));
                    De("afterSanitizeShadowDOM", t, null);
                };
            return (
                (n.sanitize = function (e, r) {
                    var a, l, d, c, u;
                    if (((be = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Be(e))) {
                        if ("function" != typeof e.toString) throw my("toString is not a function");
                        if ("string" != typeof (e = e.toString())) throw my("dirty is not a string, aborting");
                    }
                    if (!n.isSupported) {
                        if ("object" === zv(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                            if ("string" == typeof e) return t.toStaticHTML(e);
                            if (Be(e)) return t.toStaticHTML(e.outerHTML);
                        }
                        return e;
                    }
                    if ((J || xe(r), (n.removed = []), "string" == typeof e && (se = !1), se)) {
                        if (e.nodeName) {
                            var m = B(e.nodeName);
                            if (!z[m] || V[m]) throw my("root node is forbidden and cannot be sanitized in-place");
                        }
                    } else if (e instanceof i) (1 === (l = (a = Oe("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName) || "HTML" === l.nodeName ? (a = l) : a.appendChild(l);
                    else {
                        if (!ee && !X && !Q && -1 === e.indexOf("<")) return w && ne ? w.createHTML(e) : e;
                        if (!(a = Oe(e))) return ee ? null : ne ? x : "";
                    }
                    a && Z && Re(a.firstChild);
                    for (var f = Te(se ? e : a); (d = f.nextNode()); ) (3 === d.nodeType && d === c) || Pe(d) || (d.content instanceof s && Fe(d.content), Ie(d), (c = d));
                    if (((c = null), se)) return e;
                    if (ee) {
                        if (te) for (u = _.call(a.ownerDocument); a.firstChild; ) u.appendChild(a.firstChild);
                        else u = a;
                        return H.shadowroot && (u = R.call(o, u, !0)), u;
                    }
                    var g = Q ? a.outerHTML : a.innerHTML;
                    return (
                        Q && z["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && uy(Ly, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g),
                        X && ((g = ly(g, D, " ")), (g = ly(g, P, " "))),
                        w && ne ? w.createHTML(g) : g
                    );
                }),
                (n.setConfig = function (e) {
                    xe(e), (J = !0);
                }),
                (n.clearConfig = function () {
                    (ye = null), (J = !1);
                }),
                (n.isValidAttribute = function (e, t, n) {
                    ye || xe({});
                    var o = B(e),
                        r = B(t);
                    return Le(o, r, n);
                }),
                (n.addHook = function (e, t) {
                    "function" == typeof t && ((O[e] = O[e] || []), sy(O[e], t));
                }),
                (n.removeHook = function (e) {
                    if (O[e]) return ry(O[e]);
                }),
                (n.removeHooks = function (e) {
                    O[e] && (O[e] = []);
                }),
                (n.removeAllHooks = function () {
                    O = {};
                }),
                n
            );
        })();
    const Fy = Dt.each,
        Uy = Dt.trim,
        zy = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        jy = { ftp: 21, http: 80, https: 443, mailto: 25 },
        Hy = ["img", "video"],
        $y = (e, t, n) => {
            const o = ((e) => {
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return unescape(e);
                }
            })(t).replace(/\s/g, "");
            return (
                !e.allow_script_urls &&
                (!!/((java|vb)script|mhtml):/i.test(o) ||
                    (!e.allow_html_data_urls && (/^data:image\//i.test(o) ? ((e, t) => (C(e) ? !e : !C(t) || !H(Hy, t)))(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o))))
            );
        };
    class qy {
        static parseDataUri(e) {
            let t;
            const n = decodeURIComponent(e).split(","),
                o = /data:([^;]+)/.exec(n[0]);
            return o && (t = o[1]), { type: t, data: n[1] };
        }
        static isDomSafe(e, t, n = {}) {
            if (n.allow_script_urls) return !0;
            {
                const o = Zs.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
                return !$y(n, o, t);
            }
        }
        static getDocumentBaseUrl(e) {
            var t;
            let n;
            return (
                (n = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? (null !== (t = e.href) && void 0 !== t ? t : "") : e.protocol + "//" + e.host + e.pathname),
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(n) || (n += "/")),
                n
            );
        }
        constructor(e, t = {}) {
            (this.path = ""), (this.directory = ""), (e = Uy(e)), (this.settings = t);
            const n = t.base_uri,
                o = this;
            if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void (o.source = e);
            const r = 0 === e.indexOf("//");
            if ((0 !== e.indexOf("/") || r || (e = ((n && n.protocol) || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e))) {
                const t = n ? n.path : new qy(document.location.href).directory;
                if ("" === (null == n ? void 0 : n.protocol)) e = "//mce_host" + o.toAbsPath(t, e);
                else {
                    const r = /([^#?]*)([#?]?.*)/.exec(e);
                    r && (e = ((n && n.protocol) || "http") + "://mce_host" + o.toAbsPath(t, r[1]) + r[2]);
                }
            }
            e = e.replace(/@@/g, "(mce_at)");
            const s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                e
            );
            s &&
                Fy(zy, (e, t) => {
                    let n = s[t];
                    n && (n = n.replace(/\(mce_at\)/g, "@@")), (o[e] = n);
                }),
                n && (o.protocol || (o.protocol = n.protocol), o.userInfo || (o.userInfo = n.userInfo), o.port || "mce_host" !== o.host || (o.port = n.port), (o.host && "mce_host" !== o.host) || (o.host = n.host), (o.source = "")),
                r && (o.protocol = "");
        }
        setPath(e) {
            const t = /^(.*?)\/?(\w+)?$/.exec(e);
            t && ((this.path = t[0]), (this.directory = t[1]), (this.file = t[2])), (this.source = ""), this.getURI();
        }
        toRelative(e) {
            if ("./" === e) return e;
            const t = new qy(e, { base_uri: this });
            if (("mce_host" !== t.host && this.host !== t.host && t.host) || this.port !== t.port || (this.protocol !== t.protocol && "" !== t.protocol)) return t.getURI();
            const n = this.getURI(),
                o = t.getURI();
            if (n === o || ("/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === o)) return n;
            let r = this.toRelPath(this.path, t.path);
            return t.query && (r += "?" + t.query), t.anchor && (r += "#" + t.anchor), r;
        }
        toAbsolute(e, t) {
            const n = new qy(e, { base_uri: this });
            return n.getURI(t && this.isSameOrigin(n));
        }
        isSameOrigin(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                const t = this.protocol ? jy[this.protocol] : null;
                if (t && (this.port || t) == (e.port || t)) return !0;
            }
            return !1;
        }
        toRelPath(e, t) {
            let n,
                o,
                r = 0,
                s = "";
            const a = e.substring(0, e.lastIndexOf("/")).split("/"),
                i = t.split("/");
            if (a.length >= i.length)
                for (n = 0, o = a.length; n < o; n++)
                    if (n >= i.length || a[n] !== i[n]) {
                        r = n + 1;
                        break;
                    }
            if (a.length < i.length)
                for (n = 0, o = i.length; n < o; n++)
                    if (n >= a.length || a[n] !== i[n]) {
                        r = n + 1;
                        break;
                    }
            if (1 === r) return t;
            for (n = 0, o = a.length - (r - 1); n < o; n++) s += "../";
            for (n = r - 1, o = i.length; n < o; n++) s += n !== r - 1 ? "/" + i[n] : i[n];
            return s;
        }
        toAbsPath(e, t) {
            let n = 0;
            const o = /\/$/.test(t) ? "/" : "",
                r = e.split("/"),
                s = t.split("/"),
                a = [];
            Fy(r, (e) => {
                e && a.push(e);
            });
            const i = [];
            for (let e = s.length - 1; e >= 0; e--) 0 !== s[e].length && "." !== s[e] && (".." !== s[e] ? (n > 0 ? n-- : i.push(s[e])) : n++);
            const l = a.length - n;
            let d;
            return (d = l <= 0 ? oe(i).join("/") : a.slice(0, l).join("/") + "/" + oe(i).join("/")), 0 !== d.indexOf("/") && (d = "/" + d), o && d.lastIndexOf("/") !== d.length - 1 && (d += o), d;
        }
        getURI(e = !1) {
            let t;
            return (
                (this.source && !e) ||
                    ((t = ""),
                    e || (this.protocol ? (t += this.protocol + "://") : (t += "//"), this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)),
                    this.path && (t += this.path),
                    this.query && (t += "?" + this.query),
                    this.anchor && (t += "#" + this.anchor),
                    (this.source = t)),
                this.source
            );
        }
    }
    const Vy = Dt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),
        Wy = "data-mce-type";
    let Ky = 0;
    const Gy = (e, t, n, o) => {
            var r, s, a, i;
            const l = t.validate,
                d = n.getSpecialElements();
            8 === e.nodeType && !t.allow_conditional_comments && /^\[if/i.test(null !== (r = e.nodeValue) && void 0 !== r ? r : "") && (e.nodeValue = " " + e.nodeValue);
            const c = null !== (s = null == o ? void 0 : o.tagName) && void 0 !== s ? s : e.nodeName.toLowerCase();
            if (1 !== e.nodeType || "body" === c) return;
            const u = yn(e),
                f = nn(u, Wy),
                g = en(u, "data-mce-bogus");
            if (!f && m(g)) return void ("all" === g ? wo(u) : xo(u));
            const p = n.getElementRule(c);
            if (!l || p) {
                if ((C(o) && (o.allowedTags[c] = !0), l && p && !f)) {
                    if (
                        (V(null !== (a = p.attributesForced) && void 0 !== a ? a : [], (e) => {
                            Jt(u, e.name, "{$uid}" === e.value ? "mce_" + Ky++ : e.value);
                        }),
                        V(null !== (i = p.attributesDefault) && void 0 !== i ? i : [], (e) => {
                            nn(u, e.name) || Jt(u, e.name, "{$uid}" === e.value ? "mce_" + Ky++ : e.value);
                        }),
                        p.attributesRequired && !$(p.attributesRequired, (e) => nn(u, e)))
                    )
                        return void xo(u);
                    if (
                        p.removeEmptyAttrs &&
                        ((e) => {
                            const t = e.dom.attributes;
                            return null == t || 0 === t.length;
                        })(u)
                    )
                        return void xo(u);
                    p.outputName &&
                        p.outputName !== c &&
                        ((e, t) => {
                            const n = ((e, t) => {
                                const n = bn(t),
                                    o = rn(e);
                                return Zt(n, o), n;
                            })(e, t);
                            po(e, n);
                            const o = Mn(e);
                            yo(n, o), wo(e);
                        })(u, p.outputName);
                }
            } else ke(d, c) ? wo(u) : xo(u);
        },
        Yy = (e, t, n, o, r) => !(o in Vy && $y(e, r, n)) && (!e.validate || t.isValid(n, o) || He(o, "data-") || He(o, "aria-")),
        Xy = (e, t) => e.hasAttribute(Wy) && ("id" === t || "class" === t || "style" === t),
        Qy = (e, t) => e in t.getBoolAttrs(),
        Jy = (e, t, n) => {
            const { attributes: o } = e;
            for (let r = o.length - 1; r >= 0; r--) {
                const s = o[r],
                    a = s.name,
                    i = s.value;
                Yy(t, n, e.tagName.toLowerCase(), a, i) || Xy(e, a) ? Qy(a, n) && e.setAttribute(a, a) : e.removeAttribute(a);
            }
        },
        Zy = (e, t) => {
            const n = Iy();
            return (
                n.addHook("uponSanitizeElement", (n, o) => {
                    Gy(n, e, t, o);
                }),
                n.addHook("uponSanitizeAttribute", (n, o) => {
                    const r = n.tagName.toLowerCase(),
                        { attrName: s, attrValue: a } = o;
                    (o.keepAttr = Yy(e, t, r, s, a)),
                        o.keepAttr ? ((o.allowedAttributes[s] = !0), Qy(s, t) && (o.attrValue = s), e.allow_svg_data_urls && He(a, "data:image/svg+xml") && (o.forceKeepAttr = !0)) : Xy(n, s) && (o.forceKeepAttr = !0);
                }),
                n
            );
        },
        eC = Dt.makeMap,
        tC = Dt.extend,
        nC = (e, t, n) => {
            const o = e.name,
                r = o in n && "title" !== o && "textarea" !== o,
                s = t.childNodes;
            for (let t = 0, o = s.length; t < o; t++) {
                const o = s[t],
                    a = new Fg(o.nodeName.toLowerCase(), o.nodeType);
                if ($o(o)) {
                    const e = o.attributes;
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        a.attr(n.name, n.value);
                    }
                } else Jo(o) ? ((a.value = o.data), r && (a.raw = !0)) : (tr(o) || Zo(o) || er(o)) && (a.value = o.data);
                nC(a, o, n), e.append(a);
            }
        },
        oC = (e = {}, t = ca()) => {
            const n = Av(),
                o = Av(),
                r = { validate: !0, root_name: "body", sanitize: !0, ...e },
                s = new DOMParser(),
                a = ((e, t) => {
                    if (e.sanitize) {
                        const n = Zy(e, t);
                        return (t, o) => {
                            n.sanitize(
                                t,
                                ((e, t) => {
                                    const n = { IN_PLACE: !0, ALLOW_UNKNOWN_PROTOCOLS: !0, ALLOWED_TAGS: ["#comment", "#cdata-section", "body"], ALLOWED_ATTR: [] };
                                    return (n.PARSER_MEDIA_TYPE = t), e.allow_script_urls ? (n.ALLOWED_URI_REGEXP = /.*/) : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), n;
                                })(e, o)
                            ),
                                (n.removed = []);
                        };
                    }
                    return (n, o) => {
                        const r = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT);
                        let s;
                        for (; (s = r.nextNode()); ) Gy(s, e, t), $o(s) && Jy(s, e, t);
                    };
                })(r, t),
                i = n.addFilter,
                l = n.getFilters,
                d = n.removeFilter,
                c = o.addFilter,
                u = o.getFilters,
                f = o.removeFilter,
                g = (e, n) => {
                    const o = m(n.attr(Wy)),
                        r = 1 === n.type && !ke(e, n.name) && !Ts(t, n);
                    return 3 === n.type || (r && !o);
                },
                p = {
                    schema: t,
                    addAttributeFilter: c,
                    getAttributeFilters: u,
                    removeAttributeFilter: f,
                    addNodeFilter: i,
                    getNodeFilters: l,
                    removeNodeFilter: d,
                    parse: (e, n = {}) => {
                        var o;
                        const i = r.validate,
                            d = null !== (o = n.context) && void 0 !== o ? o : r.root_name,
                            c = ((e, n, o = "html") => {
                                const r = "xhtml" === o ? "application/xhtml+xml" : "text/html",
                                    i = ke(t.getSpecialElements(), n.toLowerCase()),
                                    l = i ? `<${n}>${e}</${n}>` : e,
                                    d = "xhtml" === o ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${l}</body></html>` : `<body>${l}</body>`,
                                    c = s.parseFromString(d, r).body;
                                return a(c, r), i ? c.firstChild : c;
                            })(e, d, n.format);
                        Es(t, c);
                        const m = new Fg(d, 11);
                        nC(m, c, t.getSpecialElements()), (c.innerHTML = "");
                        const [f, p] = ((e, t, n, o) => {
                                const r = n.validate,
                                    s = t.getNonEmptyElements(),
                                    a = t.getWhitespaceElements(),
                                    i = tC(eC("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
                                    l = la(t),
                                    d = /[ \t\r\n]+/g,
                                    c = /^[ \t\r\n]+/,
                                    u = /[ \t\r\n]+$/,
                                    m = (e) => {
                                        let t = e.parent;
                                        for (; C(t); ) {
                                            if (t.name in a) return !0;
                                            t = t.parent;
                                        }
                                        return !1;
                                    },
                                    f = (e) => e.name in i || Ts(t, e),
                                    g = (t, n) => {
                                        const r = n ? t.prev : t.next;
                                        return !C(r) && !y(t.parent) && f(t.parent) && (t.parent !== e || !0 === o.isRootContent);
                                    };
                                return [
                                    (e) => {
                                        var t;
                                        if (3 === e.type && !m(e)) {
                                            let n = null !== (t = e.value) && void 0 !== t ? t : "";
                                            (n = n.replace(d, " ")), (((e, t) => C(e) && (t(e) || "br" === e.name))(e.prev, f) || g(e, !0)) && (n = n.replace(c, "")), 0 === n.length ? e.remove() : (e.value = n);
                                        }
                                    },
                                    (e) => {
                                        var i;
                                        if (1 === e.type) {
                                            const i = t.getElementRule(e.name);
                                            if (r && i) {
                                                const r = eb(t, s, a, e);
                                                i.paddInEmptyBlock &&
                                                r &&
                                                ((e) => {
                                                    let n = e;
                                                    for (; C(n); ) {
                                                        if (n.name in l) return eb(t, s, a, n);
                                                        n = n.parent;
                                                    }
                                                    return !1;
                                                })(e)
                                                    ? Jh(n, o, f, e)
                                                    : i.removeEmpty && r
                                                    ? f(e)
                                                        ? e.remove()
                                                        : e.unwrap()
                                                    : i.paddEmpty &&
                                                      (r ||
                                                          ((e) => {
                                                              var t;
                                                              return Zh(e, "#text") && (null === (t = null == e ? void 0 : e.firstChild) || void 0 === t ? void 0 : t.value) === pr;
                                                          })(e)) &&
                                                      Jh(n, o, f, e);
                                            }
                                        } else if (3 === e.type && !m(e)) {
                                            let t = null !== (i = e.value) && void 0 !== i ? i : "";
                                            ((e.next && f(e.next)) || g(e, !1)) && (t = t.replace(u, "")), 0 === t.length ? e.remove() : (e.value = t);
                                        }
                                    },
                                ];
                            })(m, t, r, n),
                            h = [],
                            b = i
                                ? (e) =>
                                      ((e, n) => {
                                          rb(t, e) && n.push(e);
                                      })(e, h)
                                : E,
                            v = { nodes: {}, attributes: {} },
                            w = (e) => Yh(l(), u(), e, v);
                        if (
                            (((e, t, n) => {
                                const o = [];
                                for (let n = e, r = n; n; r = n, n = n.walk()) {
                                    const s = n;
                                    V(t, (e) => e(s)), y(s.parent) && s !== e ? (n = r) : o.push(s);
                                }
                                for (let e = o.length - 1; e >= 0; e--) {
                                    const t = o[e];
                                    V(n, (e) => e(t));
                                }
                            })(m, [f, w], [p, b]),
                            h.reverse(),
                            i && h.length > 0)
                        )
                            if (n.context) {
                                const { pass: e, fail: o } = K(h, (e) => e.parent === m);
                                ob(o, t, m, w), (n.invalid = e.length > 0);
                            } else ob(h, t, m, w);
                        const x = ((e, t) => {
                            var n;
                            const o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block;
                            return !1 === o ? "" : !0 === o ? "p" : o;
                        })(r, n);
                        return (
                            x &&
                                ("body" === m.name || n.isRootContent) &&
                                ((e, n) => {
                                    const o = tC(eC("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
                                        s = /^[ \t\r\n]+/,
                                        a = /[ \t\r\n]+$/;
                                    let i = e.firstChild,
                                        l = null;
                                    const d = (e) => {
                                        var t, n;
                                        e &&
                                            ((i = e.firstChild),
                                            i && 3 === i.type && (i.value = null === (t = i.value) || void 0 === t ? void 0 : t.replace(s, "")),
                                            (i = e.lastChild),
                                            i && 3 === i.type && (i.value = null === (n = i.value) || void 0 === n ? void 0 : n.replace(a, "")));
                                    };
                                    if (t.isValidChild(e.name, n.toLowerCase())) {
                                        for (; i; ) {
                                            const t = i.next;
                                            g(o, i) ? (l || ((l = new Fg(n, 1)), l.attr(r.forced_root_block_attrs), e.insert(l, i)), l.append(i)) : (d(l), (l = null)), (i = t);
                                        }
                                        d(l);
                                    }
                                })(m, x),
                            n.invalid || Xh(v, n),
                            m
                        );
                    },
                };
            return (
                Uv(p, r),
                ((e, t, n) => {
                    t.inline_styles && Ov(e, t, n);
                })(p, r, t),
                p
            );
        },
        rC = (e, t, n) => {
            const o = ((e) => (gb(e) ? Xg({ validate: !1 }).serialize(e) : e))(e),
                r = t(o);
            if (r.isDefaultPrevented()) return r;
            if (gb(e)) {
                if (r.content !== o) {
                    const t = oC({ validate: !1, forced_root_block: !1, sanitize: n }).parse(r.content, { context: e.name });
                    return { ...r, content: t };
                }
                return { ...r, content: e };
            }
            return r;
        },
        sC = (e, t) => {
            if (t.no_events) return sl.value(t);
            {
                const n = ((e, t) => e.dispatch("BeforeGetContent", t))(e, t);
                return n.isDefaultPrevented() ? sl.error(Jm(e, { content: "", ...n }).content) : sl.value(n);
            }
        },
        aC = (e, t, n) => {
            if (n.no_events) return t;
            {
                const o = rC(t, (t) => Jm(e, { ...n, content: t }), oc(e));
                return o.content;
            }
        },
        iC = (e, t) => {
            if (t.no_events) return sl.value(t);
            {
                const n = rC(t.content, (n) => ((e, t) => e.dispatch("BeforeSetContent", t))(e, { ...t, content: n }), oc(e));
                return n.isDefaultPrevented() ? (Qm(e, n), sl.error(void 0)) : sl.value(n);
            }
        },
        lC = (e, t, n) => {
            n.no_events || Qm(e, { ...n, content: t });
        },
        dC = (e, t, n) => ({ element: e, width: t, rows: n }),
        cC = (e, t) => ({ element: e, cells: t }),
        uC = (e, t) => ({ x: e, y: t }),
        mC = (e, t) => tn(e, t).bind(Xe).getOr(1),
        fC = (e, t, n) => {
            const o = e.rows;
            return !!(o[n] ? o[n].cells : [])[t];
        },
        gC = (e) => X(e, (e, t) => (t.cells.length > e ? t.cells.length : e), 0),
        pC = (e, t) => {
            const n = e.rows;
            for (let e = 0; e < n.length; e++) {
                const o = n[e].cells;
                for (let n = 0; n < o.length; n++) if (En(o[n], t)) return I.some(uC(n, e));
            }
            return I.none();
        },
        hC = (e, t, n, o, r) => {
            const s = [],
                a = e.rows;
            for (let e = n; e <= r; e++) {
                const n = a[e].cells,
                    r = t < o ? n.slice(t, o + 1) : n.slice(o, t + 1);
                s.push(cC(a[e].element, r));
            }
            return s;
        },
        bC = (e) =>
            ((e, t) => {
                const n = oi(e.element),
                    o = bn("tbody");
                return yo(o, t), bo(n, o), n;
            })(
                e,
                ((e) =>
                    q(e.rows, (e) => {
                        const t = q(e.cells, (e) => {
                                const t = ri(e);
                                return on(t, "colspan"), on(t, "rowspan"), t;
                            }),
                            n = oi(e.element);
                        return yo(n, t), n;
                    }))(e)
            ),
        vC = (e, t) => {
            const n = yn(t.commonAncestorContainer),
                o = bp(n, e),
                r = G(o, Br),
                s = ((e, t) =>
                    J(e, (e) => "li" === Ht(e) && Zu(e, t)).fold(N([]), (t) =>
                        ((e) => J(e, (e) => "ul" === Ht(e) || "ol" === Ht(e)))(e)
                            .map((e) => {
                                const t = bn(Ht(e)),
                                    n = ye(mo(e), (e, t) => He(t, "list-style"));
                                return io(t, n), [bn("li"), t];
                            })
                            .getOr([])
                    ))(o, t),
                a = r.concat(
                    s.length
                        ? s
                        : ((e) =>
                              Nr(e)
                                  ? An(e)
                                        .filter(_r)
                                        .fold(N([]), (t) => [e, t])
                                  : _r(e)
                                  ? [e]
                                  : [])(n)
                );
            return q(a, oi);
        },
        yC = () => Cf([]),
        CC = (e, t) =>
            ((e, t) => Zn(t, "table", O(En, e)))(e, t[0])
                .bind((e) => {
                    const n = t[0],
                        o = t[t.length - 1],
                        r = ((e) => {
                            const t = dC(oi(e), 0, []);
                            return (
                                V(Fo(e, "tr"), (e, n) => {
                                    V(Fo(e, "td,th"), (o, r) => {
                                        ((e, t, n, o, r) => {
                                            const s = mC(r, "rowspan"),
                                                a = mC(r, "colspan"),
                                                i = e.rows;
                                            for (let e = n; e < n + s; e++) {
                                                i[e] || (i[e] = cC(ri(o), []));
                                                for (let o = t; o < t + a; o++) i[e].cells[o] = e === n && o === t ? r : oi(r);
                                            }
                                        })(
                                            t,
                                            ((e, t, n) => {
                                                for (; fC(e, t, n); ) t++;
                                                return t;
                                            })(t, r, n),
                                            n,
                                            e,
                                            o
                                        );
                                    });
                                }),
                                dC(t.element, gC(t.rows), t.rows)
                            );
                        })(e);
                    return ((e, t, n) =>
                        pC(e, t).bind((t) =>
                            pC(e, n).map((n) =>
                                ((e, t, n) => {
                                    const o = t.x,
                                        r = t.y,
                                        s = n.x,
                                        a = n.y,
                                        i = r < a ? hC(e, o, r, s, a) : hC(e, o, a, s, r);
                                    return dC(e.element, gC(i), i);
                                })(e, t, n)
                            )
                        ))(r, n, o).map((e) => Cf([bC(e)]));
                })
                .getOrThunk(yC),
        wC = (e, t) => {
            const n = Gu(t, e);
            return n.length > 0
                ? CC(e, n)
                : ((e, t) =>
                      t.length > 0 && t[0].collapsed
                          ? yC()
                          : ((e, t) =>
                                ((e, t) => {
                                    const n = X(t, (e, t) => (bo(t, e), t), e);
                                    return t.length > 0 ? Cf([n]) : n;
                                })(yn(t.cloneContents()), vC(e, t)))(e, t[0]))(e, t);
        },
        xC = (e, t) => t >= 0 && t < e.length && Fu(e.charAt(t)),
        kC = (e) => Fr(e.innerText),
        EC = (e) => ($o(e) ? e.outerHTML : Jo(e) ? Zs.encodeRaw(e.data, !1) : tr(e) ? "\x3c!--" + e.data + "--\x3e" : ""),
        SC = (e, t) => (
            ((e, t) => {
                let n = 0;
                V(e, (e) => {
                    0 === e[0]
                        ? n++
                        : 1 === e[0]
                        ? (((e, t, n) => {
                              const o = ((e) => {
                                  let t;
                                  const n = document.createElement("div"),
                                      o = document.createDocumentFragment();
                                  for (e && (n.innerHTML = e); (t = n.firstChild); ) o.appendChild(t);
                                  return o;
                              })(t);
                              if (e.hasChildNodes() && n < e.childNodes.length) {
                                  const t = e.childNodes[n];
                                  e.insertBefore(o, t);
                              } else e.appendChild(o);
                          })(t, e[1], n),
                          n++)
                        : 2 === e[0] &&
                          ((e, t) => {
                              if (e.hasChildNodes() && t < e.childNodes.length) {
                                  const n = e.childNodes[t];
                                  e.removeChild(n);
                              }
                          })(t, n);
                });
            })(
                ((e, t) => {
                    const n = e.length + t.length + 2,
                        o = new Array(n),
                        r = new Array(n),
                        s = (n, o, r, a, l) => {
                            const d = i(n, o, r, a);
                            if (null === d || (d.start === o && d.diag === o - a) || (d.end === n && d.diag === n - r)) {
                                let s = n,
                                    i = r;
                                for (; s < o || i < a; ) s < o && i < a && e[s] === t[i] ? (l.push([0, e[s]]), ++s, ++i) : o - n > a - r ? (l.push([2, e[s]]), ++s) : (l.push([1, t[i]]), ++i);
                            } else {
                                s(n, d.start, r, d.start - d.diag, l);
                                for (let t = d.start; t < d.end; ++t) l.push([0, e[t]]);
                                s(d.end, o, d.end - d.diag, a, l);
                            }
                        },
                        a = (n, o, r, s) => {
                            let a = n;
                            for (; a - o < s && a < r && e[a] === t[a - o]; ) ++a;
                            return ((e, t, n) => ({ start: e, end: t, diag: n }))(n, a, o);
                        },
                        i = (n, s, i, l) => {
                            const d = s - n,
                                c = l - i;
                            if (0 === d || 0 === c) return null;
                            const u = d - c,
                                m = c + d,
                                f = (m % 2 == 0 ? m : m + 1) / 2;
                            let g, p, h, b, v;
                            for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) {
                                for (p = -g; p <= g; p += 2) {
                                    for (h = p + f, p === -g || (p !== g && o[h - 1] < o[h + 1]) ? (o[h] = o[h + 1]) : (o[h] = o[h - 1] + 1), b = o[h], v = b - n + i - p; b < s && v < l && e[b] === t[v]; ) (o[h] = ++b), ++v;
                                    if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h]) return a(r[h - u], p + n - i, s, l);
                                }
                                for (p = u - g; p <= u + g; p += 2) {
                                    for (h = p + f - u, p === u - g || (p !== u + g && r[h + 1] <= r[h - 1]) ? (r[h] = r[h + 1] - 1) : (r[h] = r[h - 1]), b = r[h] - 1, v = b - n + i - p; b >= n && v >= i && e[b] === t[v]; )
                                        (r[h] = b--), v--;
                                    if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u]) return a(r[h], p + n - i, s, l);
                                }
                            }
                            return null;
                        },
                        l = [];
                    return s(0, e.length, 0, t.length, l), l;
                })(q(ce(t.childNodes), EC), e),
                t
            ),
            t
        ),
        _C = Pe(() => document.implementation.createHTMLDocument("undo")),
        NC = (e) => {
            const t = e.serializer.getTempAttrs(),
                n = qg(e.getBody(), t);
            return ((e) => null !== e.querySelector("iframe"))(n)
                ? { type: "fragmented", fragments: G(q(ce(n.childNodes), S(Fr, EC)), (e) => e.length > 0), content: "", bookmark: null, beforeBookmark: null }
                : { type: "complete", fragments: null, content: Fr(n.innerHTML), bookmark: null, beforeBookmark: null };
        },
        RC = (e, t, n) => {
            const o = n ? t.beforeBookmark : t.bookmark;
            "fragmented" === t.type ? SC(t.fragments, e.getBody()) : e.setContent(t.content, { format: "raw", no_selection: !C(o) || !Su(o) || !o.isFakeCaret }), o && (e.selection.moveToBookmark(o), e.selection.scrollIntoView());
        },
        AC = (e) => ("fragmented" === e.type ? e.fragments.join("") : e.content),
        OC = (e) => {
            const t = bn("body", _C());
            return So(t, AC(e)), V(Fo(t, "*[data-mce-bogus]"), xo), Eo(t);
        },
        TC = (e, t) => !(!e || !t) && (!!((e, t) => AC(e) === AC(t))(e, t) || ((e, t) => OC(e) === OC(t))(e, t)),
        BC = (e) => 0 === e.get(),
        DC = (e, t, n) => {
            BC(n) && (e.typing = t);
        },
        PC = (e, t) => {
            e.typing && (DC(e, !1, t), e.add());
        },
        LC = (e) => ({
            init: { bindEvents: E },
            undoManager: {
                beforeChange: (t, n) =>
                    ((e, t, n) => {
                        BC(t) && n.set(nl(e.selection));
                    })(e, t, n),
                add: (t, n, o, r, s, a) =>
                    ((e, t, n, o, r, s, a) => {
                        const i = NC(e),
                            l = Dt.extend(s || {}, i);
                        if (!BC(o) || e.removed) return null;
                        const d = t.data[n.get()];
                        if (e.dispatch("BeforeAddUndo", { level: l, lastLevel: d, originalEvent: a }).isDefaultPrevented()) return null;
                        if (d && TC(d, l)) return null;
                        t.data[n.get()] &&
                            r.get().each((e) => {
                                t.data[n.get()].beforeBookmark = e;
                            });
                        const c = Cd(e);
                        if (c && t.data.length > c) {
                            for (let e = 0; e < t.data.length - 1; e++) t.data[e] = t.data[e + 1];
                            t.data.length--, n.set(t.data.length);
                        }
                        (l.bookmark = nl(e.selection)), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(l), n.set(t.data.length - 1);
                        const u = { level: l, lastLevel: d, originalEvent: a };
                        return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", u), e.dispatch("change", u)) : e.dispatch("AddUndo", u), l;
                    })(e, t, n, o, r, s, a),
                undo: (t, n, o) =>
                    ((e, t, n, o) => {
                        let r;
                        return t.typing && (t.add(), (t.typing = !1), DC(t, !1, n)), o.get() > 0 && (o.set(o.get() - 1), (r = t.data[o.get()]), RC(e, r, !0), e.setDirty(!0), e.dispatch("Undo", { level: r })), r;
                    })(e, t, n, o),
                redo: (t, n) =>
                    ((e, t, n) => {
                        let o;
                        return t.get() < n.length - 1 && (t.set(t.get() + 1), (o = n[t.get()]), RC(e, o, !1), e.setDirty(!0), e.dispatch("Redo", { level: o })), o;
                    })(e, t, n),
                clear: (t, n) =>
                    ((e, t, n) => {
                        (t.data = []), n.set(0), (t.typing = !1), e.dispatch("ClearUndos");
                    })(e, t, n),
                reset: (e) =>
                    ((e) => {
                        e.clear(), e.add();
                    })(e),
                hasUndo: (t, n) => ((e, t, n) => n.get() > 0 || (t.typing && t.data[0] && !TC(NC(e), t.data[0])))(e, t, n),
                hasRedo: (e, t) => ((e, t) => t.get() < e.data.length - 1 && !e.typing)(e, t),
                transact: (e, t, n) => ((e, t, n) => (PC(e, t), e.beforeChange(), e.ignore(n), e.add()))(e, t, n),
                ignore: (e, t) =>
                    ((e, t) => {
                        try {
                            e.set(e.get() + 1), t();
                        } finally {
                            e.set(e.get() - 1);
                        }
                    })(e, t),
                extra: (t, n, o, r) =>
                    ((e, t, n, o, r) => {
                        if (t.transact(o)) {
                            const o = t.data[n.get()].bookmark,
                                s = t.data[n.get() - 1];
                            RC(e, s, !0), t.transact(r) && (t.data[n.get() - 1].beforeBookmark = o);
                        }
                    })(e, t, n, o, r),
            },
            formatter: {
                match: (t, n, o, r) => Sb(e, t, n, o, r),
                matchAll: (t, n) =>
                    ((e, t, n) => {
                        const o = [],
                            r = {},
                            s = e.selection.getStart();
                        return (
                            e.dom.getParent(
                                s,
                                (s) => {
                                    for (let a = 0; a < t.length; a++) {
                                        const i = t[a];
                                        !r[i] && Eb(e, s, i, n) && ((r[i] = !0), o.push(i));
                                    }
                                },
                                e.dom.getRoot()
                            ),
                            o
                        );
                    })(e, t, n),
                matchNode: (t, n, o, r) => Eb(e, t, n, o, r),
                canApply: (t) =>
                    ((e, t) => {
                        const n = e.formatter.get(t),
                            o = e.dom;
                        if (n && e.selection.isEditable()) {
                            const t = e.selection.getStart(),
                                r = ym(o, t);
                            for (let e = n.length - 1; e >= 0; e--) {
                                const t = n[e];
                                if (!xm(t)) return !0;
                                for (let e = r.length - 1; e >= 0; e--) if (o.is(r[e], t.selector)) return !0;
                            }
                        }
                        return !1;
                    })(e, t),
                closest: (t) =>
                    ((e, t) => {
                        const n = (t) => En(t, yn(e.getBody()));
                        return I.from(e.selection.getStart(!0))
                            .bind((o) => vb(yn(o), (n) => ue(t, (t) => ((t, n) => (Eb(e, t.dom, n) ? I.some(n) : I.none()))(n, t)), n))
                            .getOrNull();
                    })(e, t),
                apply: (t, n, o) => xv(e, t, n, o),
                remove: (t, n, o, r) => hv(e, t, n, o, r),
                toggle: (t, n, o) =>
                    ((e, t, n, o) => {
                        const r = e.formatter.get(t);
                        r && (!Sb(e, t, n, o) || ("toggle" in r[0] && !r[0].toggle) ? xv(e, t, n, o) : hv(e, t, n, o));
                    })(e, t, n, o),
                formatChanged: (t, n, o, r, s) =>
                    ((e, t, n, o, r, s) => (
                        ((e, t, n, o, r, s) => {
                            const a = t.get();
                            V(n.split(","), (t) => {
                                const n = xe(a, t).getOrThunk(() => {
                                        const e = { withSimilar: { state: Da(!1), similar: !0, callbacks: [] }, withoutSimilar: { state: Da(!1), similar: !1, callbacks: [] }, withVars: [] };
                                        return (a[t] = e), e;
                                    }),
                                    i = () => {
                                        const n = _v(e);
                                        return Sv(e, n, t, r, s).isSome();
                                    };
                                if (v(s)) {
                                    const e = r ? n.withSimilar : n.withoutSimilar;
                                    e.callbacks.push(o), 1 === e.callbacks.length && e.state.set(i());
                                } else n.withVars.push({ state: Da(i()), similar: r, vars: s, callback: o });
                            }),
                                t.set(a);
                        })(e, t, n, o, r, s),
                        {
                            unbind: () =>
                                ((e, t, n) => {
                                    const o = e.get();
                                    V(t.split(","), (e) =>
                                        xe(o, e).each((t) => {
                                            o[e] = {
                                                withSimilar: { ...t.withSimilar, callbacks: G(t.withSimilar.callbacks, (e) => e !== n) },
                                                withoutSimilar: { ...t.withoutSimilar, callbacks: G(t.withoutSimilar.callbacks, (e) => e !== n) },
                                                withVars: G(t.withVars, (e) => e.callback !== n),
                                            };
                                        })
                                    ),
                                        e.set(o);
                                })(t, n, o),
                        }
                    ))(e, t, n, o, r, s),
            },
            editor: {
                getContent: (t) => ((e, t) => I.from(e.getBody()).fold(N("tree" === t.format ? new Fg("body", 11) : ""), (n) => Kg(e, t, n)))(e, t),
                setContent: (t, n) =>
                    ((e, t, n) =>
                        I.from(e.getBody())
                            .map((o) =>
                                gb(t)
                                    ? ((e, t, n, o) => {
                                          Qh(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                                          const r = Xg({ validate: !1 }, e.schema).serialize(n),
                                              s = Or(yn(t)) ? r : Dt.trim(r);
                                          return pb(e, s, o.no_selection), { content: n, html: s };
                                      })(e, o, t, n)
                                    : ((e, t, n, o) => {
                                          if (0 === n.length || /^\s+$/.test(n)) {
                                              const r = '<br data-mce-bogus="1">';
                                              "TABLE" === t.nodeName ? (n = "<tr><td>" + r + "</td></tr>") : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + r + "</li>");
                                              const s = Nl(e);
                                              return e.schema.isValidChild(t.nodeName.toLowerCase(), s.toLowerCase()) ? ((n = r), (n = e.dom.createHTML(s, Rl(e), n))) : n || (n = r), pb(e, n, o.no_selection), { content: n, html: n };
                                          }
                                          {
                                              "raw" !== o.format && (n = Xg({ validate: !1 }, e.schema).serialize(e.parser.parse(n, { isRootContent: !0, insert: !0 })));
                                              const r = Or(yn(t)) ? n : Dt.trim(n);
                                              return pb(e, r, o.no_selection), { content: r, html: r };
                                          }
                                      })(e, o, t, n)
                            )
                            .getOr({ content: t, html: gb(n.content) ? "" : n.content }))(e, t, n),
                insertContent: (t, n) => fb(e, t, n),
                addVisual: (t) =>
                    ((e, t) => {
                        const n = e.dom,
                            o = C(t) ? t : e.getBody();
                        V(n.select("table,a", o), (t) => {
                            switch (t.nodeName) {
                                case "TABLE":
                                    const o = Ad(e),
                                        r = n.getAttrib(t, "border");
                                    (r && "0" !== r) || !e.hasVisual ? n.removeClass(t, o) : n.addClass(t, o);
                                    break;
                                case "A":
                                    if (!n.getAttrib(t, "href")) {
                                        const o = n.getAttrib(t, "name") || t.id,
                                            r = Od(e);
                                        o && e.hasVisual ? n.addClass(t, r) : n.removeClass(t, r);
                                    }
                            }
                        }),
                            e.dispatch("VisualAid", { element: t, hasVisual: e.hasVisual });
                    })(e, t),
            },
            selection: {
                getContent: (t, n) =>
                    ((e, t, n = {}) => {
                        const o = ((e, t) => ({ ...e, format: t, get: !0, selection: !0, getInner: !0 }))(n, t);
                        return sC(e, o).fold(R, (t) => {
                            const n = ((e, t) => {
                                if ("text" === t.format)
                                    return ((e) =>
                                        I.from(e.selection.getRng())
                                            .map((t) => {
                                                var n;
                                                const o = I.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)),
                                                    r = e.getBody(),
                                                    s = ((e) =>
                                                        e
                                                            .map((e) => e.nodeName)
                                                            .getOr("div")
                                                            .toLowerCase())(o),
                                                    a = yn(t.cloneContents());
                                                Vg(a), Wg(a);
                                                const i = e.dom.add(r, s, { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, a.dom),
                                                    l = kC(i),
                                                    d = Fr(null !== (n = i.textContent) && void 0 !== n ? n : "");
                                                if ((e.dom.remove(i), xC(d, 0) || xC(d, d.length - 1))) {
                                                    const e = o.getOr(r),
                                                        t = kC(e),
                                                        n = t.indexOf(l);
                                                    return -1 === n ? l : (xC(t, n - 1) ? " " : "") + l + (xC(t, n + l.length) ? " " : "");
                                                }
                                                return l;
                                            })
                                            .getOr(""))(e);
                                {
                                    const n = ((e, t) => {
                                        const n = e.selection.getRng(),
                                            o = e.dom.create("body"),
                                            r = e.selection.getSel(),
                                            s = Rg(e, Ku(r)),
                                            a = t.contextual ? wC(yn(e.getBody()), s).dom : n.cloneContents();
                                        return a && o.appendChild(a), e.selection.serializer.serialize(o, t);
                                    })(e, t);
                                    return "tree" === t.format ? n : e.selection.isCollapsed() ? "" : n;
                                }
                            })(e, t);
                            return aC(e, n, t);
                        });
                    })(e, t, n),
            },
            autocompleter: {
                addDecoration: (t) => Bg(e, t),
                removeDecoration: () =>
                    ((e, t) =>
                        Dg(t).each((t) => {
                            const n = e.selection.getBookmark();
                            xo(t), e.selection.moveToBookmark(n);
                        }))(e, yn(e.getBody())),
            },
            raw: { getModel: () => I.none() },
        }),
        MC = (e) => ke(e.plugins, "rtc"),
        IC = (e) => (e.rtcInstance ? e.rtcInstance : LC(e)),
        FC = (e) => {
            const t = e.rtcInstance;
            if (t) return t;
            throw new Error("Failed to get RTC instance not yet initialized.");
        },
        UC = (e) => FC(e).init.bindEvents(),
        zC = (e) => (0 === e.dom.length ? (wo(e), I.none()) : I.some(e)),
        jC = (e, t, n, o) => {
            e.bind(
                (e) => (
                    (o ? Yp : Gp)(e.dom, o ? e.dom.length : 0),
                    t.filter(Kt).map((t) =>
                        ((e, t, n, o) => {
                            const r = e.dom,
                                s = t.dom,
                                a = o ? r.length : s.length;
                            o ? (Xp(r, s, !1, !o), n.setStart(s, a)) : (Xp(s, r, !1, !o), n.setEnd(s, a));
                        })(e, t, n, o)
                    )
                )
            ).orThunk(() => {
                const e = ((e, t) => e.filter((e) => Wm.isBookmarkNode(e.dom)).bind(t ? Dn : Bn))(t, o).or(t).filter(Kt);
                return e.map((e) =>
                    ((e, t) => {
                        An(e).each((n) => {
                            const o = e.dom;
                            t && Up(n, Li(o, 0)) ? Gp(o, 0) : !t && zp(n, Li(o, o.length)) && Yp(o, o.length);
                        });
                    })(e, o)
                );
            });
        },
        HC = (e, t, n) => {
            if (ke(e, t)) {
                const o = G(e[t], (e) => e !== n);
                0 === o.length ? delete e[t] : (e[t] = o);
            }
        };
    const $C = (e) => !(!e || !e.ownerDocument) && Sn(yn(e.ownerDocument), yn(e)),
        qC = (e, t, n, o) => {
            let r, s;
            const { selectorChangedWithUnbind: a } = ((e, t) => {
                    let n, o;
                    const r = (t, n) => J(n, (n) => e.is(n, t)),
                        s = (t) => e.getParents(t, void 0, e.getRoot());
                    return {
                        selectorChangedWithUnbind: (e, a) => (
                            n ||
                                ((n = {}),
                                (o = {}),
                                t.on("NodeChange", (e) => {
                                    const t = e.element,
                                        a = s(t),
                                        i = {};
                                    ge(n, (e, t) => {
                                        r(t, a).each((n) => {
                                            o[t] ||
                                                (V(e, (e) => {
                                                    e(!0, { node: n, selector: t, parents: a });
                                                }),
                                                (o[t] = e)),
                                                (i[t] = e);
                                        });
                                    }),
                                        ge(o, (e, n) => {
                                            i[n] ||
                                                (delete o[n],
                                                V(e, (e) => {
                                                    e(!1, { node: t, selector: n, parents: a });
                                                }));
                                        });
                                })),
                            n[e] || (n[e] = []),
                            n[e].push(a),
                            r(e, s(t.selection.getStart())).each(() => {
                                o[e] = n[e];
                            }),
                            {
                                unbind: () => {
                                    HC(n, e, a), HC(o, e, a);
                                },
                            }
                        ),
                    };
                })(e, o),
                i = (e, t) =>
                    ((e, t, n = {}) => {
                        const o = ((e, t) => ({ format: "html", ...e, set: !0, selection: !0, content: t }))(n, t);
                        iC(e, o).each((t) => {
                            const n = ((e, t) => {
                                    if ("raw" !== t.format) {
                                        const n = e.selection.getRng(),
                                            o = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                                            r = o ? { context: o.nodeName.toLowerCase() } : {},
                                            s = e.parser.parse(t.content, { forced_root_block: !1, ...r, ...t });
                                        return Xg({ validate: !1 }, e.schema).serialize(s);
                                    }
                                    return t.content;
                                })(e, t),
                                o = e.selection.getRng();
                            ((e, t) => {
                                const n = I.from(t.firstChild).map(yn),
                                    o = I.from(t.lastChild).map(yn);
                                e.deleteContents(), e.insertNode(t);
                                const r = n.bind(Bn).filter(Kt).bind(zC),
                                    s = o.bind(Dn).filter(Kt).bind(zC);
                                jC(r, n, e, !0), jC(s, o, e, !1), e.collapse(!1);
                            })(o, o.createContextualFragment(n)),
                                e.selection.setRng(o),
                                Zf(e, o),
                                lC(e, n, t);
                        });
                    })(o, e, t),
                l = (e) => {
                    const t = c();
                    t.collapse(!!e), u(t);
                },
                d = () => (t.getSelection ? t.getSelection() : t.document.selection),
                c = () => {
                    let n;
                    const a = (e, t, n) => {
                            try {
                                return t.compareBoundaryPoints(e, n);
                            } catch (e) {
                                return -1;
                            }
                        },
                        i = t.document;
                    if (C(o.bookmark) && !xg(o)) {
                        const e = cg(o);
                        if (e.isSome()) return e.map((e) => Rg(o, [e])[0]).getOr(i.createRange());
                    }
                    try {
                        const e = d();
                        e && !Ho(e.anchorNode) && ((n = e.rangeCount > 0 ? e.getRangeAt(0) : i.createRange()), (n = Rg(o, [n])[0]));
                    } catch (e) {}
                    if ((n || (n = i.createRange()), nr(n.startContainer) && n.collapsed)) {
                        const t = e.getRoot();
                        n.setStart(t, 0), n.setEnd(t, 0);
                    }
                    return r && s && (0 === a(n.START_TO_START, n, r) && 0 === a(n.END_TO_END, n, r) ? (n = s) : ((r = null), (s = null))), n;
                },
                u = (e, t) => {
                    if (!((e) => !!e && $C(e.startContainer) && $C(e.endContainer))(e)) return;
                    const n = d();
                    if (((e = o.dispatch("SetSelectionRange", { range: e, forward: t }).range), n)) {
                        s = e;
                        try {
                            n.removeAllRanges(), n.addRange(e);
                        } catch (e) {}
                        !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), (r = n.rangeCount > 0 ? n.getRangeAt(0) : null);
                    }
                    if (!e.collapsed && e.startContainer === e.endContainer && (null == n ? void 0 : n.setBaseAndExtent) && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes()) {
                        const t = e.startContainer.childNodes[e.startOffset];
                        t &&
                            "IMG" === t.nodeName &&
                            (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), (n.anchorNode === e.startContainer && n.focusNode === e.endContainer) || n.setBaseAndExtent(t, 0, t, 1));
                    }
                    o.dispatch("AfterSetSelectionRange", { range: e, forward: t });
                },
                m = () => {
                    const t = d(),
                        n = null == t ? void 0 : t.anchorNode,
                        o = null == t ? void 0 : t.focusNode;
                    if (!t || !n || !o || Ho(n) || Ho(o)) return !0;
                    const r = e.createRng(),
                        s = e.createRng();
                    try {
                        r.setStart(n, t.anchorOffset), r.collapse(!0), s.setStart(o, t.focusOffset), s.collapse(!0);
                    } catch (e) {
                        return !0;
                    }
                    return r.compareBoundaryPoints(r.START_TO_START, s) <= 0;
                },
                f = {
                    dom: e,
                    win: t,
                    serializer: n,
                    editor: o,
                    expand: (t = { type: "word" }) => u(Df(e).expand(c(), t)),
                    collapse: l,
                    setCursorLocation: (t, n) => {
                        const r = e.createRng();
                        C(t) && C(n) ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1)) : (em(e, r, o.getBody(), !0), u(r));
                    },
                    getContent: (e) => ((e, t = {}) => ((e, t, n) => FC(e).selection.getContent(t, n))(e, t.format ? t.format : "html", t))(o, e),
                    setContent: i,
                    getBookmark: (e, t) => g.getBookmark(e, t),
                    moveToBookmark: (e) => g.moveToBookmark(e),
                    select: (t, n) => (
                        ((e, t, n) =>
                            I.from(t).bind((t) =>
                                I.from(t.parentNode).map((o) => {
                                    const r = e.nodeIndex(t),
                                        s = e.createRng();
                                    return s.setStart(o, r), s.setEnd(o, r + 1), n && (em(e, s, t, !0), em(e, s, t, !1)), s;
                                })
                            ))(e, t, n).each(u),
                        t
                    ),
                    isCollapsed: () => {
                        const e = c(),
                            t = d();
                        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
                    },
                    isEditable: () => {
                        const t = c(),
                            n = o.getBody().querySelectorAll('[data-mce-selected="1"]');
                        return n.length > 0 ? ne(n, (t) => e.isEditable(t.parentElement)) : t.startContainer === t.endContainer ? e.isEditable(t.startContainer) : e.isEditable(t.startContainer) && e.isEditable(t.endContainer);
                    },
                    isForward: m,
                    setNode: (t) => (i(e.getOuterHTML(t)), t),
                    getNode: () =>
                        ((e, t) => {
                            if (!t) return e;
                            let n = t.startContainer,
                                o = t.endContainer;
                            const r = t.startOffset,
                                s = t.endOffset;
                            let a = t.commonAncestorContainer;
                            t.collapsed ||
                                (n === o && s - r < 2 && n.hasChildNodes() && (a = n.childNodes[r]),
                                Jo(n) && Jo(o) && ((n = n.length === r ? Ng(n.nextSibling, !0) : n.parentNode), (o = 0 === s ? Ng(o.previousSibling, !1) : o.parentNode), n && n === o && (a = n)));
                            const i = Jo(a) ? a.parentNode : a;
                            return $o(i) ? i : e;
                        })(o.getBody(), c()),
                    getSel: d,
                    setRng: u,
                    getRng: c,
                    getStart: (e) => Sg(o.getBody(), c(), e),
                    getEnd: (e) => _g(o.getBody(), c(), e),
                    getSelectedBlocks: (t, n) =>
                        ((e, t, n, o) => {
                            const r = [],
                                s = e.getRoot(),
                                a = e.getParent(n || Sg(s, t, t.collapsed), e.isBlock),
                                i = e.getParent(o || _g(s, t, t.collapsed), e.isBlock);
                            if ((a && a !== s && r.push(a), a && i && a !== i)) {
                                let t;
                                const n = new zo(a, s);
                                for (; (t = n.next()) && t !== i; ) e.isBlock(t) && r.push(t);
                            }
                            return i && a !== i && i !== s && r.push(i), r;
                        })(e, c(), t, n),
                    normalize: () => {
                        const t = c(),
                            n = d();
                        if (!(Ku(n).length > 1) && tm(o)) {
                            const n = Of(e, t);
                            return (
                                n.each((e) => {
                                    u(e, m());
                                }),
                                n.getOr(t)
                            );
                        }
                        return t;
                    },
                    selectorChanged: (e, t) => (a(e, t), f),
                    selectorChangedWithUnbind: a,
                    getScrollContainer: () => {
                        let t,
                            n = e.getRoot();
                        for (; n && "BODY" !== n.nodeName; ) {
                            if (n.scrollHeight > n.clientHeight) {
                                t = n;
                                break;
                            }
                            n = n.parentNode;
                        }
                        return t;
                    },
                    scrollIntoView: (e, t) => {
                        C(e)
                            ? ((e, t, n) => {
                                  (e.inline ? Xf : Jf)(e, t, n);
                              })(o, e, t)
                            : Zf(o, c(), t);
                    },
                    placeCaretAt: (e, t) => u(xf(e, t, o.getDoc())),
                    getBoundingClientRect: () => {
                        const e = c();
                        return e.collapsed ? Li.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
                    },
                    destroy: () => {
                        (t = r = s = null), p.destroy();
                    },
                },
                g = Wm(f),
                p = sf(f, o);
            return (f.bookmarkManager = g), (f.controlSelection = p), f;
        },
        VC = (e, t, n) => {
            -1 === Dt.inArray(t, n) &&
                (e.addAttributeFilter(n, (e, t) => {
                    let n = e.length;
                    for (; n--; ) e[n].attr(t, null);
                }),
                t.push(n));
        },
        WC = (e, t) => {
            const n = ["data-mce-selected"],
                o = { entity_encoding: "named", remove_trailing_brs: !0, pad_empty_with_br: !1, ...e },
                r = t && t.dom ? t.dom : Oa.DOM,
                s = t && t.schema ? t.schema : ca(o),
                a = oC(o, s);
            return (
                ((e, t, n) => {
                    e.addAttributeFilter("data-mce-tabindex", (e, t) => {
                        let n = e.length;
                        for (; n--; ) {
                            const o = e[n];
                            o.attr("tabindex", o.attr("data-mce-tabindex")), o.attr(t, null);
                        }
                    }),
                        e.addAttributeFilter("src,href,style", (e, o) => {
                            const r = "data-mce-" + o,
                                s = t.url_converter,
                                a = t.url_converter_scope;
                            let i = e.length;
                            for (; i--; ) {
                                const t = e[i];
                                let l = t.attr(r);
                                void 0 !== l
                                    ? (t.attr(o, l.length > 0 ? l : null), t.attr(r, null))
                                    : ((l = t.attr(o)), "style" === o ? (l = n.serializeStyle(n.parseStyle(l), t.name)) : s && (l = s.call(a, l, o, t.name)), t.attr(o, l.length > 0 ? l : null));
                            }
                        }),
                        e.addAttributeFilter("class", (e) => {
                            let t = e.length;
                            for (; t--; ) {
                                const n = e[t];
                                let o = n.attr("class");
                                o && ((o = o.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")), n.attr("class", o.length > 0 ? o : null));
                            }
                        }),
                        e.addAttributeFilter("data-mce-type", (e, t, n) => {
                            let o = e.length;
                            for (; o--; ) {
                                const t = e[o];
                                if ("bookmark" === t.attr("data-mce-type") && !n.cleanup) {
                                    const e = I.from(t.firstChild).exists((e) => {
                                        var t;
                                        return !Ir(null !== (t = e.value) && void 0 !== t ? t : "");
                                    });
                                    e ? t.unwrap() : t.remove();
                                }
                            }
                        }),
                        e.addNodeFilter("noscript", (e) => {
                            var t;
                            let n = e.length;
                            for (; n--; ) {
                                const o = e[n].firstChild;
                                o && (o.value = Zs.decode(null !== (t = o.value) && void 0 !== t ? t : ""));
                            }
                        }),
                        e.addNodeFilter("script,style", (e, n) => {
                            var o;
                            const r = (e) =>
                                e
                                    .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                                    .replace(/^[\r\n]*|[\r\n]*$/g, "")
                                    .replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "")
                                    .replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                            let s = e.length;
                            for (; s--; ) {
                                const a = e[s],
                                    i = a.firstChild,
                                    l = null !== (o = null == i ? void 0 : i.value) && void 0 !== o ? o : "";
                                if ("script" === n) {
                                    const e = a.attr("type");
                                    e && a.attr("type", "mce-no/type" === e ? null : e.replace(/^mce\-/, "")), "xhtml" === t.element_format && i && l.length > 0 && (i.value = "// <![CDATA[\n" + r(l) + "\n// ]]>");
                                } else "xhtml" === t.element_format && i && l.length > 0 && (i.value = "\x3c!--\n" + r(l) + "\n--\x3e");
                            }
                        }),
                        e.addNodeFilter("#comment", (e) => {
                            let o = e.length;
                            for (; o--; ) {
                                const r = e[o],
                                    s = r.value;
                                t.preserve_cdata && 0 === (null == s ? void 0 : s.indexOf("[CDATA["))
                                    ? ((r.name = "#cdata"), (r.type = 4), (r.value = n.decode(s.replace(/^\[CDATA\[|\]\]$/g, ""))))
                                    : 0 === (null == s ? void 0 : s.indexOf("mce:protected ")) && ((r.name = "#text"), (r.type = 3), (r.raw = !0), (r.value = unescape(s).substr(14)));
                            }
                        }),
                        e.addNodeFilter("xml:namespace,input", (e, t) => {
                            let n = e.length;
                            for (; n--; ) {
                                const o = e[n];
                                7 === o.type ? o.remove() : 1 === o.type && ("input" !== t || o.attr("type") || o.attr("type", "text"));
                            }
                        }),
                        e.addAttributeFilter("data-mce-type", (t) => {
                            V(t, (t) => {
                                "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap());
                            });
                        }),
                        e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder", (e, t) => {
                            let n = e.length;
                            for (; n--; ) e[n].attr(t, null);
                        }),
                        t.remove_trailing_brs && Tv(t, e, e.schema);
                })(a, o, r),
                {
                    schema: s,
                    addNodeFilter: a.addNodeFilter,
                    addAttributeFilter: a.addAttributeFilter,
                    serialize: (e, n = {}) => {
                        const i = { format: "html", ...n },
                            l = ((e, t, n) =>
                                ((e, t) => C(e) && e.hasEventListeners("PreProcess") && !t.no_events)(e, n)
                                    ? ((e, t, n) => {
                                          let o;
                                          const r = e.dom;
                                          let s = t.cloneNode(!0);
                                          const a = document.implementation;
                                          if (a.createHTMLDocument) {
                                              const e = a.createHTMLDocument("");
                                              Dt.each("BODY" === s.nodeName ? s.childNodes : [s], (t) => {
                                                  e.body.appendChild(e.importNode(t, !0));
                                              }),
                                                  (s = "BODY" !== s.nodeName ? e.body.firstChild : e.body),
                                                  (o = r.doc),
                                                  (r.doc = e);
                                          }
                                          return (
                                              ((e, t) => {
                                                  e.dispatch("PreProcess", t);
                                              })(e, { ...n, node: s }),
                                              o && (r.doc = o),
                                              s
                                          );
                                      })(e, t, n)
                                    : t)(t, e, i),
                            d = ((e, t, n) => {
                                const o = Fr(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                                return n.selection || Or(yn(t)) ? o : Dt.trim(o);
                            })(r, l, i),
                            c = ((e, t, n) => {
                                const o = n.selection ? { forced_root_block: !1, ...n } : n,
                                    r = e.parse(t, o);
                                return (
                                    ((e) => {
                                        const t = (e) => "br" === (null == e ? void 0 : e.name),
                                            n = e.lastChild;
                                        if (t(n)) {
                                            const e = n.prev;
                                            t(e) && (n.remove(), e.remove());
                                        }
                                    })(r),
                                    r
                                );
                            })(a, d, i);
                        return "tree" === i.format
                            ? c
                            : ((e, t, n, o, r) => {
                                  const s = ((e, t, n) => Xg(e, t).serialize(n))(t, n, o);
                                  return ((e, t, n) => {
                                      if (!t.no_events && e) {
                                          const o = ((e, t) => e.dispatch("PostProcess", t))(e, { ...t, content: n });
                                          return o.content;
                                      }
                                      return n;
                                  })(e, r, s);
                              })(t, o, s, c, i);
                    },
                    addRules: s.addValidElements,
                    setRules: s.setValidElements,
                    addTempAttr: O(VC, a, n),
                    getTempAttrs: N(n),
                    getNodeFilters: a.getNodeFilters,
                    getAttributeFilters: a.getAttributeFilters,
                    removeNodeFilter: a.removeNodeFilter,
                    removeAttributeFilter: a.removeAttributeFilter,
                }
            );
        },
        KC = (e, t) => {
            const n = WC(e, t);
            return {
                schema: n.schema,
                addNodeFilter: n.addNodeFilter,
                addAttributeFilter: n.addAttributeFilter,
                serialize: n.serialize,
                addRules: n.addRules,
                setRules: n.setRules,
                addTempAttr: n.addTempAttr,
                getTempAttrs: n.getTempAttrs,
                getNodeFilters: n.getNodeFilters,
                getAttributeFilters: n.getAttributeFilters,
                removeNodeFilter: n.removeNodeFilter,
                removeAttributeFilter: n.removeAttributeFilter,
            };
        },
        GC = (e, t, n = {}) => {
            const o = ((e, t) => ({ format: "html", ...e, set: !0, content: t }))(n, t);
            return iC(e, o)
                .map((t) => {
                    const n = ((e, t, n) => IC(e).editor.setContent(t, n))(e, t.content, t);
                    return lC(e, n.html, t), n.content;
                })
                .getOr(t);
        },
        YC = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(
            ","
        ),
        XC = "template_cdate_classes,template_mdate_classes,template_selected_content_classes,template_preview_replace_values,template_replace_values,templates,template_cdate_format,template_mdate_format".split(","),
        QC = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
        JC = [{ name: "template", replacedWith: "Advanced Template" }, { name: "rtc" }],
        ZC = (e, t) => {
            const n = G(t, (t) => ke(e, t));
            return ae(n);
        },
        ew = (e) => {
            const t = ZC(e, YC),
                n = e.forced_root_block;
            return (!1 !== n && "" !== n) || t.push("forced_root_block (false only)"), ae(t);
        },
        tw = (e) => ZC(e, XC),
        nw = (e, t) => {
            const n = Dt.makeMap(e.plugins, " "),
                o = G(t, (e) => ke(n, e));
            return ae(o);
        },
        ow = (e) => nw(e, QC),
        rw = (e) =>
            nw(
                e,
                JC.map((e) => e.name)
            ),
        sw = (e) =>
            J(JC, (t) => t.name === e).fold(
                () => e,
                (t) => (t.replacedWith ? `${e}, replaced by ${t.replacedWith}` : e)
            ),
        aw = Oa.DOM,
        iw = (e) => I.from(e).each((e) => e.destroy()),
        lw = (() => {
            const e = {};
            return {
                add: (t, n) => {
                    e[t] = n;
                },
                get: (t) => (e[t] ? e[t] : { icons: {} }),
                has: (t) => ke(e, t),
            };
        })(),
        dw = Fa.ModelManager,
        cw = (e, t) => t.dom[e],
        uw = (e, t) => parseInt(lo(t, e), 10),
        mw = O(cw, "clientWidth"),
        fw = O(cw, "clientHeight"),
        gw = O(uw, "margin-top"),
        pw = O(uw, "margin-left"),
        hw = (e) => {
            const t = [],
                n = () => {
                    const t = e.theme;
                    return t && t.getNotificationManagerImpl
                        ? t.getNotificationManagerImpl()
                        : (() => {
                              const e = () => {
                                  throw new Error("Theme did not provide a NotificationManager implementation.");
                              };
                              return { open: e, close: e, getArgs: e };
                          })();
                },
                o = () => I.from(t[0]),
                r = () => {
                    V(t, (e) => {
                        e.reposition();
                    });
                },
                s = (e) => {
                    Z(t, (t) => t === e).each((e) => {
                        t.splice(e, 1);
                    });
                },
                a = (a, i = !0) =>
                    e.removed ||
                    !((e) => {
                        return ((t = e.inline ? e.getBody() : e.getContentAreaContainer()), I.from(t).map(yn)).map(Yn).getOr(!1);
                        var t;
                    })(e)
                        ? {}
                        : (i && e.dispatch("BeforeOpenNotification", { notification: a }),
                          J(t, (e) => {
                              return (t = n().getArgs(e)), (o = a), !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout);
                              var t, o;
                          }).getOrThunk(() => {
                              e.editorManager.setActive(e);
                              const i = n().open(a, () => {
                                  s(i),
                                      r(),
                                      o().fold(
                                          () => e.focus(),
                                          (e) => eg(yn(e.getEl()))
                                      );
                              });
                              return (
                                  ((e) => {
                                      t.push(e);
                                  })(i),
                                  r(),
                                  e.dispatch("OpenNotification", { notification: { ...i } }),
                                  i
                              );
                          })),
                i = N(t);
            return (
                ((e) => {
                    e.on("SkinLoaded", () => {
                        const t = rd(e);
                        t && a({ text: t, type: "warning", timeout: 0 }, !1), r();
                    }),
                        e.on("show ResizeEditor ResizeWindow NodeChange", () => {
                            requestAnimationFrame(r);
                        }),
                        e.on("remove", () => {
                            V(t.slice(), (e) => {
                                n().close(e);
                            });
                        });
                })(e),
                {
                    open: a,
                    close: () => {
                        o().each((e) => {
                            n().close(e), s(e), r();
                        });
                    },
                    getNotifications: i,
                }
            );
        },
        bw = Fa.PluginManager,
        vw = Fa.ThemeManager,
        yw = (e) => {
            let t = [];
            const n = () => {
                    const t = e.theme;
                    return t && t.getWindowManagerImpl
                        ? t.getWindowManagerImpl()
                        : (() => {
                              const e = () => {
                                  throw new Error("Theme did not provide a WindowManager implementation.");
                              };
                              return { open: e, openUrl: e, alert: e, confirm: e, close: e };
                          })();
                },
                o = (e, t) => (...n) => (t ? t.apply(e, n) : void 0),
                r = (n) => {
                    ((t) => {
                        e.dispatch("CloseWindow", { dialog: t });
                    })(n),
                        (t = G(t, (e) => e !== n)),
                        0 === t.length && e.focus();
                },
                s = (n) => {
                    e.editorManager.setActive(e), dg(e), e.ui.show();
                    const o = n();
                    return (
                        ((n) => {
                            t.push(n),
                                ((t) => {
                                    e.dispatch("OpenWindow", { dialog: t });
                                })(n);
                        })(o),
                        o
                    );
                };
            return (
                e.on("remove", () => {
                    V(t, (e) => {
                        n().close(e);
                    });
                }),
                {
                    open: (e, t) => s(() => n().open(e, t, r)),
                    openUrl: (e) => s(() => n().openUrl(e, r)),
                    alert: (e, t, r) => {
                        const s = n();
                        s.alert(e, o(r || s, t));
                    },
                    confirm: (e, t, r) => {
                        const s = n();
                        s.confirm(e, o(r || s, t));
                    },
                    close: () => {
                        I.from(t[t.length - 1]).each((e) => {
                            n().close(e), r(e);
                        });
                    },
                }
            );
        },
        Cw = (e, t) => {
            e.notificationManager.open({ type: "error", text: t });
        },
        ww = (e, t) => {
            e._skinLoaded
                ? Cw(e, t)
                : e.on("SkinLoaded", () => {
                      Cw(e, t);
                  });
        },
        xw = (e, t, n) => {
            Gm(e, t, { message: n }), console.error(n);
        },
        kw = (e, t, n) => (n ? `Failed to load ${e}: ${n} from url ${t}` : `Failed to load ${e} url: ${t}`),
        Ew = (e, ...t) => {
            const n = window.console;
            n && (n.error ? n.error(e, ...t) : n.log(e, ...t));
        },
        Sw = (e, t) => {
            const n = e.editorManager.baseURL + "/skins/content",
                o = `content${e.editorManager.suffix}.css`;
            return q(t, (t) => (((e) => /^[a-z0-9\-]+$/i.test(e))(t) && !e.inline ? `${n}/${t}/${o}` : e.documentBaseURI.toAbsolute(t)));
        },
        _w = (e, t) => {
            const n = {};
            return {
                findAll: (o, r = M) => {
                    const s = G(((e) => (e ? ce(e.getElementsByTagName("img")) : []))(o), (t) => {
                            const n = t.src;
                            return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === At.transparentSrc) && (He(n, "blob:") ? !e.isUploaded(n) && r(t) : !!He(n, "data:") && r(t));
                        }),
                        a = q(s, (e) => {
                            const o = e.src;
                            if (ke(n, o)) return n[o].then((t) => (m(t) ? t : { image: e, blobInfo: t.blobInfo }));
                            {
                                const r = ((e, t) => {
                                    const n = () => Promise.reject("Invalid data URI");
                                    if (He(t, "blob:")) {
                                        const s = e.getByUri(t);
                                        return C(s)
                                            ? Promise.resolve(s)
                                            : ((o = t),
                                              He(o, "blob:")
                                                  ? ((e) =>
                                                        fetch(e)
                                                            .then((e) => (e.ok ? e.blob() : Promise.reject()))
                                                            .catch(() => Promise.reject({ message: `Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`, uriType: "blob" })))(o)
                                                  : He(o, "data:")
                                                  ? ((r = o),
                                                    new Promise((e, t) => {
                                                        Bv(r)
                                                            .bind(({ type: e, data: t, base64Encoded: n }) => Dv(e, t, n))
                                                            .fold(() => t("Invalid data URI"), e);
                                                    }))
                                                  : Promise.reject("Unknown URI format")).then((t) => Pv(t).then((o) => Mv(o, !1, (n) => I.some(Iv(e, t, n))).getOrThunk(n)));
                                    }
                                    var o, r;
                                    return He(t, "data:") ? Fv(e, t).fold(n, (e) => Promise.resolve(e)) : Promise.reject("Unknown image data format");
                                })(t, o)
                                    .then((t) => (delete n[o], { image: e, blobInfo: t }))
                                    .catch((e) => (delete n[o], e));
                                return (n[o] = r), r;
                            }
                        });
                    return Promise.all(a);
                },
            };
        },
        Nw = () => {
            let e = {};
            const t = (e, t) => ({ status: e, resultUri: t }),
                n = (t) => t in e;
            return {
                hasBlobUri: n,
                getResultUri: (t) => {
                    const n = e[t];
                    return n ? n.resultUri : null;
                },
                isPending: (t) => !!n(t) && 1 === e[t].status,
                isUploaded: (t) => !!n(t) && 2 === e[t].status,
                markPending: (n) => {
                    e[n] = t(1, null);
                },
                markUploaded: (n, o) => {
                    e[n] = t(2, o);
                },
                removeFailed: (t) => {
                    delete e[t];
                },
                destroy: () => {
                    e = {};
                },
            };
        };
    let Rw = 0;
    const Aw = (e, t) => {
            const n = {},
                o = (e, n) =>
                    new Promise((o, r) => {
                        const s = new XMLHttpRequest();
                        s.open("POST", t.url),
                            (s.withCredentials = t.credentials),
                            (s.upload.onprogress = (e) => {
                                n((e.loaded / e.total) * 100);
                            }),
                            (s.onerror = () => {
                                r("Image upload failed due to a XHR Transport error. Code: " + s.status);
                            }),
                            (s.onload = () => {
                                if (s.status < 200 || s.status >= 300) return void r("HTTP Error: " + s.status);
                                const e = JSON.parse(s.responseText);
                                var n, a;
                                e && m(e.location) ? o(((n = t.basePath), (a = e.location), n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText);
                            });
                        const a = new FormData();
                        a.append("file", e.blob(), e.filename()), s.send(a);
                    }),
                r = w(t.handler) ? t.handler : o,
                s = (e, t) => ({ url: t, blobInfo: e, status: !0 }),
                a = (e, t) => ({ url: "", blobInfo: e, status: !1, error: t }),
                i = (e, t) => {
                    Dt.each(n[e], (e) => {
                        e(t);
                    }),
                        delete n[e];
                };
            return {
                upload: (l, d) =>
                    t.url || r !== o
                        ? ((t, o) => (
                              (t = Dt.grep(t, (t) => !e.isUploaded(t.blobUri()))),
                              Promise.all(
                                  Dt.map(t, (t) =>
                                      e.isPending(t.blobUri())
                                          ? ((e) => {
                                                const t = e.blobUri();
                                                return new Promise((e) => {
                                                    (n[t] = n[t] || []), n[t].push(e);
                                                });
                                            })(t)
                                          : ((t, n, o) => (
                                                e.markPending(t.blobUri()),
                                                new Promise((r) => {
                                                    let l, d;
                                                    try {
                                                        const c = () => {
                                                                l && (l.close(), (d = E));
                                                            },
                                                            u = (n) => {
                                                                c(), e.markUploaded(t.blobUri(), n), i(t.blobUri(), s(t, n)), r(s(t, n));
                                                            },
                                                            f = (n) => {
                                                                c(), e.removeFailed(t.blobUri()), i(t.blobUri(), a(t, n)), r(a(t, n));
                                                            };
                                                        (d = (e) => {
                                                            e < 0 ||
                                                                e > 100 ||
                                                                I.from(l)
                                                                    .orThunk(() => I.from(o).map(D))
                                                                    .each((t) => {
                                                                        (l = t), t.progressBar.value(e);
                                                                    });
                                                        }),
                                                            n(t, d).then(u, (e) => {
                                                                f(m(e) ? { message: e } : e);
                                                            });
                                                    } catch (e) {
                                                        r(a(t, e));
                                                    }
                                                })
                                            ))(t, r, o)
                                  )
                              )
                          ))(l, d)
                        : new Promise((e) => {
                              e([]);
                          }),
            };
        },
        Ow = (e) => () => e.notificationManager.open({ text: e.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 }),
        Tw = (e, t) => Aw(t, { url: Ul(e), basePath: zl(e), credentials: jl(e), handler: Hl(e) }),
        Bw = (e) => {
            const t = (() => {
                let e = [];
                const t = (e) => {
                        if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                        const t =
                                e.id ||
                                "blobid" +
                                    Rw++ +
                                    (() => {
                                        const e = () => Math.round(4294967295 * Math.random()).toString(36);
                                        return "s" + new Date().getTime().toString(36) + e() + e() + e();
                                    })(),
                            n = e.name || t,
                            o = e.blob;
                        var r;
                        return {
                            id: N(t),
                            name: N(n),
                            filename: N(
                                e.filename ||
                                    n +
                                        "." +
                                        ((r = o.type),
                                        {
                                            "image/jpeg": "jpg",
                                            "image/jpg": "jpg",
                                            "image/gif": "gif",
                                            "image/png": "png",
                                            "image/apng": "apng",
                                            "image/avif": "avif",
                                            "image/svg+xml": "svg",
                                            "image/webp": "webp",
                                            "image/bmp": "bmp",
                                            "image/tiff": "tiff",
                                        }[r.toLowerCase()] || "dat")
                            ),
                            blob: N(o),
                            base64: N(e.base64),
                            blobUri: N(e.blobUri || URL.createObjectURL(o)),
                            uri: N(e.uri),
                        };
                    },
                    n = (t) => J(e, t).getOrUndefined(),
                    o = (e) => n((t) => t.id() === e);
                return {
                    create: (e, n, o, r, s) => {
                        if (m(e)) return t({ id: e, name: r, filename: s, blob: n, base64: o });
                        if (f(e)) return t(e);
                        throw new Error("Unknown input type");
                    },
                    add: (t) => {
                        o(t.id()) || e.push(t);
                    },
                    get: o,
                    getByUri: (e) => n((t) => t.blobUri() === e),
                    getByData: (e, t) => n((n) => n.base64() === e && n.blob().type === t),
                    findFirst: n,
                    removeByUri: (t) => {
                        e = G(e, (e) => e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1));
                    },
                    destroy: () => {
                        V(e, (e) => {
                            URL.revokeObjectURL(e.blobUri());
                        }),
                            (e = []);
                    },
                };
            })();
            let n, o;
            const r = Nw(),
                s = [],
                a = (t) => (n) => (e.selection ? t(n) : []),
                i = (e, t, n) => {
                    let o = 0;
                    do {
                        (o = e.indexOf(t, o)), -1 !== o && ((e = e.substring(0, o) + n + e.substr(o + t.length)), (o += n.length - t.length + 1));
                    } while (-1 !== o);
                    return e;
                },
                l = (e, t, n) => {
                    const o = `src="${n}"${n === At.transparentSrc ? ' data-mce-placeholder="1"' : ""}`;
                    return (e = i(e, `src="${t}"`, o)), i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"');
                },
                d = (t, n) => {
                    V(e.undoManager.data, (e) => {
                        "fragmented" === e.type ? (e.fragments = q(e.fragments, (e) => l(e, t, n))) : (e.content = l(e.content, t, n));
                    });
                },
                c = () => (
                    n || (n = Tw(e, r)),
                    p().then(
                        a((o) => {
                            const r = q(o, (e) => e.blobInfo);
                            return n.upload(r, Ow(e)).then(
                                a((n) => {
                                    const r = [];
                                    let s = !1;
                                    const a = q(n, (n, a) => {
                                        const { blobInfo: i, image: l } = o[a];
                                        let c = !1;
                                        return (
                                            n.status && Ml(e)
                                                ? (n.url && !je(l.src, n.url) && (s = !0),
                                                  t.removeByUri(l.src),
                                                  MC(e) ||
                                                      ((t, n) => {
                                                          const o = e.convertURL(n, "src");
                                                          var r;
                                                          d(t.src, n), Zt(yn(t), { src: Ll(e) ? ((r = n), r + (-1 === r.indexOf("?") ? "?" : "&") + new Date().getTime()) : n, "data-mce-src": o });
                                                      })(l, n.url))
                                                : n.error &&
                                                  (n.error.remove && (d(l.src, At.transparentSrc), r.push(l), (c = !0)),
                                                  ((e, t) => {
                                                      ww(e, Ia.translate(["Failed to upload image: {0}", t]));
                                                  })(e, n.error.message)),
                                            { element: l, status: n.status, uploadUri: n.url, blobInfo: i, removed: c }
                                        );
                                    });
                                    return (
                                        r.length > 0 && !MC(e)
                                            ? e.undoManager.transact(() => {
                                                  V(ko(r), (n) => {
                                                      const o = An(n);
                                                      wo(n),
                                                          o.each(
                                                              ((e) => (t) => {
                                                                  ((e, t) => e.dom.isEmpty(t.dom) && C(e.schema.getTextBlockElements()[Ht(t)]))(e, t) && bo(t, hn('<br data-mce-bogus="1" />'));
                                                              })(e)
                                                          ),
                                                          t.removeByUri(n.dom.src);
                                                  });
                                              })
                                            : s && e.undoManager.dispatchChange(),
                                        a
                                    );
                                })
                            );
                        })
                    )
                ),
                u = () => (Pl(e) ? c() : Promise.resolve([])),
                g = (e) => ne(s, (t) => t(e)),
                p = () => (
                    o || (o = _w(r, t)),
                    o.findAll(e.getBody(), g).then(
                        a((t) => {
                            const n = G(t, (t) => (m(t) ? (ww(e, t), !1) : "blob" !== t.uriType));
                            return (
                                MC(e) ||
                                    V(n, (e) => {
                                        d(e.image.src, e.blobInfo.blobUri()), (e.image.src = e.blobInfo.blobUri()), e.image.removeAttribute("data-mce-src");
                                    }),
                                n
                            );
                        })
                    )
                ),
                h = (n) =>
                    n.replace(/src="(blob:[^"]+)"/g, (n, o) => {
                        const s = r.getResultUri(o);
                        if (s) return 'src="' + s + '"';
                        let a = t.getByUri(o);
                        return a || (a = X(e.editorManager.get(), (e, t) => e || (t.editorUpload && t.editorUpload.blobCache.getByUri(o)), void 0)), a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n;
                    });
            return (
                e.on("SetContent", () => {
                    Pl(e) ? u() : p();
                }),
                e.on("RawSaveContent", (e) => {
                    e.content = h(e.content);
                }),
                e.on("GetContent", (e) => {
                    e.source_view || "raw" === e.format || "tree" === e.format || (e.content = h(e.content));
                }),
                e.on("PostRender", () => {
                    e.parser.addNodeFilter("img", (e) => {
                        V(e, (e) => {
                            const n = e.attr("src");
                            if (!n || t.getByUri(n)) return;
                            const o = r.getResultUri(n);
                            o && e.attr("src", o);
                        });
                    });
                }),
                {
                    blobCache: t,
                    addFilter: (e) => {
                        s.push(e);
                    },
                    uploadImages: c,
                    uploadImagesAuto: u,
                    scanForImages: p,
                    destroy: () => {
                        t.destroy(), r.destroy(), (o = n = null);
                    },
                }
            );
        },
        Dw = { remove_similar: !0, inherit: !1 },
        Pw = { selector: "td,th", ...Dw },
        Lw = {
            tablecellbackgroundcolor: { styles: { backgroundColor: "%value" }, ...Pw },
            tablecellverticalalign: { styles: { "vertical-align": "%value" }, ...Pw },
            tablecellbordercolor: { styles: { borderColor: "%value" }, ...Pw },
            tablecellclass: { classes: ["%value"], ...Pw },
            tableclass: { selector: "table", classes: ["%value"], ...Dw },
            tablecellborderstyle: { styles: { borderStyle: "%value" }, ...Pw },
            tablecellborderwidth: { styles: { borderWidth: "%value" }, ...Pw },
        },
        Mw = N(Lw),
        Iw = Dt.each,
        Fw = Oa.DOM,
        Uw = (e) => C(e) && f(e),
        zw = (e, t) => {
            const n = (t && t.schema) || ca({}),
                o = (e) => {
                    const t = m(e) ? { name: e, classes: [], attrs: {} } : e,
                        n = Fw.create(t.name);
                    return (
                        ((e, t) => {
                            t.classes.length > 0 && Fw.addClass(e, t.classes.join(" ")), Fw.setAttribs(e, t.attrs);
                        })(n, t),
                        n
                    );
                },
                r = (e, t, s) => {
                    let a;
                    const i = t[0],
                        l = Uw(i) ? i.name : void 0,
                        d = ((e, t) => {
                            const o = n.getElementRule(e.nodeName.toLowerCase()),
                                r = null == o ? void 0 : o.parentsRequired;
                            return !(!r || !r.length) && (t && H(r, t) ? t : r[0]);
                        })(e, l);
                    if (d) l === d ? ((a = i), (t = t.slice(1))) : (a = d);
                    else if (i) (a = i), (t = t.slice(1));
                    else if (!s) return e;
                    const c = a ? o(a) : Fw.create("div");
                    c.appendChild(e),
                        s &&
                            Dt.each(s, (t) => {
                                const n = o(t);
                                c.insertBefore(n, e);
                            });
                    const u = Uw(a) ? a.siblings : void 0;
                    return r(c, t, u);
                },
                s = Fw.create("div");
            if (e.length > 0) {
                const t = e[0],
                    n = o(t),
                    a = Uw(t) ? t.siblings : void 0;
                s.appendChild(r(n, e.slice(1), a));
            }
            return s;
        },
        jw = (e) => {
            let t = "div";
            const n = { name: t, classes: [], attrs: {}, selector: (e = Dt.trim(e)) };
            return (
                "*" !== e &&
                    (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, (e, t, o, r, s) => {
                        switch (t) {
                            case "#":
                                n.attrs.id = o;
                                break;
                            case ".":
                                n.classes.push(o);
                                break;
                            case ":":
                                -1 !== Dt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o);
                        }
                        if ("[" === r) {
                            const e = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                            e && (n.attrs[e[1]] = e[2]);
                        }
                        return "";
                    })),
                (n.name = t || "div"),
                n
            );
        },
        Hw = (e, t) => {
            let n = "",
                o = ud(e);
            if ("" === o) return "";
            const r = (e) => (m(e) ? e.replace(/%(\w+)/g, "") : ""),
                s = (t, n) => Fw.getStyle(null != n ? n : e.getBody(), t, !0);
            if (m(t)) {
                const n = e.formatter.get(t);
                if (!n) return "";
                t = n[0];
            }
            if ("preview" in t) {
                const e = t.preview;
                if (!1 === e) return "";
                o = e || o;
            }
            let a,
                i = t.block || t.inline || "span";
            const l =
                ((d = t.selector),
                m(d)
                    ? ((d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
                      Dt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), (e) => {
                          const t = Dt.map(e.split(/(?:~\+|~|\+)/), jw),
                              n = t.pop();
                          return t.length && (n.siblings = t), n;
                      }).reverse())
                    : []);
            var d;
            l.length > 0 ? (l[0].name || (l[0].name = i), (i = t.selector), (a = zw(l, e))) : (a = zw([i], e));
            const c = Fw.select(i, a)[0] || a.firstChild;
            Iw(t.styles, (e, t) => {
                const n = r(e);
                n && Fw.setStyle(c, t, n);
            }),
                Iw(t.attributes, (e, t) => {
                    const n = r(e);
                    n && Fw.setAttrib(c, t, n);
                }),
                Iw(t.classes, (e) => {
                    const t = r(e);
                    Fw.hasClass(c, t) || Fw.addClass(c, t);
                }),
                e.dispatch("PreviewFormats"),
                Fw.setStyles(a, { position: "absolute", left: -65535 }),
                e.getBody().appendChild(a);
            const u = s("fontSize"),
                f = /px$/.test(u) ? parseInt(u, 10) : 0;
            return (
                Iw(o.split(" "), (e) => {
                    let t = s(e, c);
                    if (!(("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && ((t = s(e)), "#ffffff" === Wu(t).toLowerCase())) || ("color" === e && "#000000" === Wu(t).toLowerCase()))) {
                        if ("font-size" === e && /em|%$/.test(t)) {
                            if (0 === f) return;
                            t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * f + "px";
                        }
                        "border" === e && t && (n += "padding:0 2px;"), (n += e + ":" + t + ";");
                    }
                }),
                e.dispatch("AfterPreviewFormats"),
                Fw.remove(a),
                n
            );
        },
        $w = (e) => {
            const t = ((e) => {
                    const t = {},
                        n = (e, o) => {
                            e &&
                                (m(e)
                                    ? (p(o) || (o = [o]),
                                      V(o, (e) => {
                                          v(e.deep) && (e.deep = !xm(e)),
                                              v(e.split) && (e.split = !xm(e) || km(e)),
                                              v(e.remove) && xm(e) && !km(e) && (e.remove = "none"),
                                              xm(e) && km(e) && ((e.mixed = !0), (e.block_expand = !0)),
                                              m(e.classes) && (e.classes = e.classes.split(/\s+/));
                                      }),
                                      (t[e] = o))
                                    : ge(e, (e, t) => {
                                          n(t, e);
                                      }));
                        };
                    return (
                        n(
                            ((e) => {
                                const t = e.dom,
                                    n = e.schema.type,
                                    o = {
                                        valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }],
                                        valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }],
                                        valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }],
                                        alignleft: [
                                            { selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" },
                                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre", styles: { textAlign: "left" }, inherit: !1, preview: !1 },
                                            { selector: "img,audio,video", collapsed: !1, styles: { float: "left" }, preview: "font-family font-size" },
                                            {
                                                selector: "table",
                                                collapsed: !1,
                                                styles: { marginLeft: "0px", marginRight: "auto" },
                                                onformat: (e) => {
                                                    t.setStyle(e, "float", null);
                                                },
                                                preview: "font-family font-size",
                                            },
                                            { selector: ".mce-preview-object,[data-ephox-embed-iri]", ceFalseOverride: !0, styles: { float: "left" } },
                                        ],
                                        aligncenter: [
                                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size" },
                                            { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" },
                                            { selector: "img,audio,video", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 },
                                            { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" },
                                            { selector: ".mce-preview-object", ceFalseOverride: !0, styles: { display: "table", marginLeft: "auto", marginRight: "auto" }, preview: !1 },
                                            { selector: "[data-ephox-embed-iri]", ceFalseOverride: !0, styles: { marginLeft: "auto", marginRight: "auto" }, preview: !1 },
                                        ],
                                        alignright: [
                                            { selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" },
                                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size" },
                                            { selector: "img,audio,video", collapsed: !1, styles: { float: "right" }, preview: "font-family font-size" },
                                            {
                                                selector: "table",
                                                collapsed: !1,
                                                styles: { marginRight: "0px", marginLeft: "auto" },
                                                onformat: (e) => {
                                                    t.setStyle(e, "float", null);
                                                },
                                                preview: "font-family font-size",
                                            },
                                            { selector: ".mce-preview-object,[data-ephox-embed-iri]", ceFalseOverride: !0, styles: { float: "right" }, preview: !1 },
                                        ],
                                        alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre", styles: { textAlign: "justify" }, inherit: !1, preview: "font-family font-size" }],
                                        bold: [
                                            { inline: "strong", remove: "all", preserve_attributes: ["class", "style"] },
                                            { inline: "span", styles: { fontWeight: "bold" } },
                                            { inline: "b", remove: "all", preserve_attributes: ["class", "style"] },
                                        ],
                                        italic: [
                                            { inline: "em", remove: "all", preserve_attributes: ["class", "style"] },
                                            { inline: "span", styles: { fontStyle: "italic" } },
                                            { inline: "i", remove: "all", preserve_attributes: ["class", "style"] },
                                        ],
                                        underline: [
                                            { inline: "span", styles: { textDecoration: "underline" }, exact: !0 },
                                            { inline: "u", remove: "all", preserve_attributes: ["class", "style"] },
                                        ],
                                        strikethrough: (() => {
                                            const e = { inline: "span", styles: { textDecoration: "line-through" }, exact: !0 },
                                                t = { inline: "strike", remove: "all", preserve_attributes: ["class", "style"] },
                                                o = { inline: "s", remove: "all", preserve_attributes: ["class", "style"] };
                                            return "html4" !== n ? [o, e, t] : [e, o, t];
                                        })(),
                                        forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                                        hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                                        fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 },
                                        fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 },
                                        lineheight: { selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", styles: { lineHeight: "%value" } },
                                        fontsize_class: { inline: "span", attributes: { class: "%value" } },
                                        blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                                        subscript: { inline: "sub" },
                                        superscript: { inline: "sup" },
                                        code: { inline: "code" },
                                        link: {
                                            inline: "a",
                                            selector: "a",
                                            remove: "all",
                                            split: !0,
                                            deep: !0,
                                            onmatch: (e, t, n) => $o(e) && e.hasAttribute("href"),
                                            onformat: (e, n, o) => {
                                                Dt.each(o, (n, o) => {
                                                    t.setAttrib(e, o, n);
                                                });
                                            },
                                        },
                                        lang: {
                                            inline: "span",
                                            clear_child_styles: !0,
                                            remove_similar: !0,
                                            attributes: {
                                                lang: "%value",
                                                "data-mce-lang": (e) => {
                                                    var t;
                                                    return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null;
                                                },
                                            },
                                        },
                                        removeformat: [
                                            { selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 },
                                            { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 },
                                            { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 },
                                        ],
                                    };
                                return (
                                    Dt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), (e) => {
                                        o[e] = { block: e, remove: "all" };
                                    }),
                                    o
                                );
                            })(e)
                        ),
                        n(Mw()),
                        n(cd(e)),
                        { get: (e) => (C(e) ? t[e] : t), has: (e) => ke(t, e), register: n, unregister: (e) => (e && t[e] && delete t[e], t) }
                    );
                })(e),
                n = Da({});
            return (
                ((e) => {
                    e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                    for (let t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                    e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
                })(e),
                ((e) => {
                    e.on("mouseup keydown", (t) => {
                        var n;
                        ((e, t, n) => {
                            const o = e.selection,
                                r = e.getBody();
                            Tb(e, null, n), (8 !== t && 46 !== t) || !o.isCollapsed() || o.getStart().innerHTML !== _b || Tb(e, ku(r, o.getStart())), (37 !== t && 39 !== t) || Tb(e, ku(r, o.getStart()));
                        })(e, t.keyCode, ((n = e.selection.getRng().endContainer), Jo(n) && $e(n.data, pr)));
                    });
                })(e),
                MC(e) ||
                    ((e, t) => {
                        e.set({}),
                            t.on("NodeChange", (n) => {
                                Nv(t, n.element, e.get());
                            }),
                            t.on("FormatApply FormatRemove", (n) => {
                                const o = I.from(n.node)
                                    .map((e) => (rm(e) ? e : e.startContainer))
                                    .bind((e) => ($o(e) ? I.some(e) : I.from(e.parentElement)))
                                    .getOrThunk(() => Ev(t));
                                Nv(t, o, e.get());
                            });
                    })(n, e),
                {
                    get: t.get,
                    has: t.has,
                    register: t.register,
                    unregister: t.unregister,
                    apply: (t, n, o) => {
                        ((e, t, n, o) => {
                            FC(e).formatter.apply(t, n, o);
                        })(e, t, n, o);
                    },
                    remove: (t, n, o, r) => {
                        ((e, t, n, o, r) => {
                            FC(e).formatter.remove(t, n, o, r);
                        })(e, t, n, o, r);
                    },
                    toggle: (t, n, o) => {
                        ((e, t, n, o) => {
                            FC(e).formatter.toggle(t, n, o);
                        })(e, t, n, o);
                    },
                    match: (t, n, o, r) => ((e, t, n, o, r) => FC(e).formatter.match(t, n, o, r))(e, t, n, o, r),
                    closest: (t) => ((e, t) => FC(e).formatter.closest(t))(e, t),
                    matchAll: (t, n) => ((e, t, n) => FC(e).formatter.matchAll(t, n))(e, t, n),
                    matchNode: (t, n, o, r) => ((e, t, n, o, r) => FC(e).formatter.matchNode(t, n, o, r))(e, t, n, o, r),
                    canApply: (t) => ((e, t) => FC(e).formatter.canApply(t))(e, t),
                    formatChanged: (t, o, r, s) => ((e, t, n, o, r, s) => FC(e).formatter.formatChanged(t, n, o, r, s))(e, n, t, o, r, s),
                    getCssText: O(Hw, e),
                }
            );
        },
        qw = (e) => {
            switch (e.toLowerCase()) {
                case "undo":
                case "redo":
                case "mcefocus":
                    return !0;
                default:
                    return !1;
            }
        },
        Vw = (e) => {
            const t = za(),
                n = Da(0),
                o = Da(0),
                r = {
                    data: [],
                    typing: !1,
                    beforeChange: () => {
                        ((e, t, n) => {
                            FC(e).undoManager.beforeChange(t, n);
                        })(e, n, t);
                    },
                    add: (s, a) => ((e, t, n, o, r, s, a) => FC(e).undoManager.add(t, n, o, r, s, a))(e, r, o, n, t, s, a),
                    dispatchChange: () => {
                        e.setDirty(!0);
                        const t = NC(e);
                        (t.bookmark = nl(e.selection)), e.dispatch("change", { level: t, lastLevel: ie(r.data, o.get()).getOrUndefined() });
                    },
                    undo: () => ((e, t, n, o) => FC(e).undoManager.undo(t, n, o))(e, r, n, o),
                    redo: () => ((e, t, n) => FC(e).undoManager.redo(t, n))(e, o, r.data),
                    clear: () => {
                        ((e, t, n) => {
                            FC(e).undoManager.clear(t, n);
                        })(e, r, o);
                    },
                    reset: () => {
                        ((e, t) => {
                            FC(e).undoManager.reset(t);
                        })(e, r);
                    },
                    hasUndo: () => ((e, t, n) => FC(e).undoManager.hasUndo(t, n))(e, r, o),
                    hasRedo: () => ((e, t, n) => FC(e).undoManager.hasRedo(t, n))(e, r, o),
                    transact: (t) => ((e, t, n, o) => FC(e).undoManager.transact(t, n, o))(e, r, n, t),
                    ignore: (t) => {
                        ((e, t, n) => {
                            FC(e).undoManager.ignore(t, n);
                        })(e, n, t);
                    },
                    extra: (t, n) => {
                        ((e, t, n, o, r) => {
                            FC(e).undoManager.extra(t, n, o, r);
                        })(e, r, o, t, n);
                    },
                };
            return (
                MC(e) ||
                    ((e, t, n) => {
                        const o = Da(!1),
                            r = (e) => {
                                DC(t, !1, n), t.add({}, e);
                            };
                        e.on("init", () => {
                            t.add();
                        }),
                            e.on("BeforeExecCommand", (e) => {
                                const o = e.command;
                                qw(o) || (PC(t, n), t.beforeChange());
                            }),
                            e.on("ExecCommand", (e) => {
                                const t = e.command;
                                qw(t) || r(e);
                            }),
                            e.on("ObjectResizeStart cut", () => {
                                t.beforeChange();
                            }),
                            e.on("SaveContent ObjectResized blur", r),
                            e.on("dragend", r),
                            e.on("keyup", (n) => {
                                const s = n.keyCode;
                                if (n.isDefaultPrevented()) return;
                                const a = At.os.isMacOS() && "Meta" === n.key;
                                ((s >= 33 && s <= 36) || (s >= 37 && s <= 40) || 45 === s || n.ctrlKey || a) && (r(), e.nodeChanged()),
                                    (46 !== s && 8 !== s) || e.nodeChanged(),
                                    o.get() && t.typing && !TC(NC(e), t.data[0]) && (e.isDirty() || e.setDirty(!0), e.dispatch("TypingUndo"), o.set(!1), e.nodeChanged());
                            }),
                            e.on("keydown", (e) => {
                                const s = e.keyCode;
                                if (e.isDefaultPrevented()) return;
                                if ((s >= 33 && s <= 36) || (s >= 37 && s <= 40) || 45 === s) return void (t.typing && r(e));
                                const a = (e.ctrlKey && !e.altKey) || e.metaKey;
                                if ((s < 16 || s > 20) && 224 !== s && 91 !== s && !t.typing && !a) return t.beforeChange(), DC(t, !0, n), t.add({}, e), void o.set(!0);
                                (At.os.isMacOS() ? e.metaKey : e.ctrlKey && !e.altKey) && t.beforeChange();
                            }),
                            e.on("mousedown", (e) => {
                                t.typing && r(e);
                            }),
                            e.on("input", (e) => {
                                var t;
                                e.inputType &&
                                    ("insertReplacementText" === e.inputType || ("insertText" === (t = e).inputType && null === t.data) || ((e) => "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType)(e)) &&
                                    r(e);
                            }),
                            e.on("AddUndo Undo Redo ClearUndos", (t) => {
                                t.isDefaultPrevented() || e.nodeChanged();
                            });
                    })(e, r, n),
                ((e) => {
                    e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo");
                })(e),
                r
            );
        },
        Ww = [9, 27, ef.HOME, ef.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, ef.DOWN, ef.UP, ef.LEFT, ef.RIGHT].concat(At.browser.isFirefox() ? [224] : []),
        Kw = "data-mce-placeholder",
        Gw = (e) => "keydown" === e.type || "keyup" === e.type,
        Yw = (e) => {
            const t = e.keyCode;
            return t === ef.BACKSPACE || t === ef.DELETE;
        },
        Xw = (e, t) => ({ from: e, to: t }),
        Qw = (e, t) => {
            const n = yn(e),
                o = yn(t.container());
            return ph(n, o).map((e) => ((e, t) => ({ block: e, position: t }))(e, t));
        },
        Jw = (e, t) =>
            Jn(
                t,
                (e) => Ar(e) || ar(e.dom),
                (t) => En(t, e)
            )
                .filter(Wt)
                .getOr(e),
        Zw = (e) => {
            const t = ((e) => {
                const t = Mn(e);
                return Z(t, xr).fold(N(t), (e) => t.slice(0, e));
            })(e);
            return V(t, wo), t;
        },
        ex = (e, t) => {
            const n = bp(t, e);
            return J(n.reverse(), (e) => bs(e)).each(wo);
        },
        tx = (e, t, n, o) => {
            if (bs(n)) return Pr(n), yu(n.dom);
            0 === G(Pn(o), (e) => !bs(e)).length && bs(t) && go(o, bn("br"));
            const r = vu(n.dom, Li.before(o.dom));
            return (
                V(Zw(t), (e) => {
                    go(o, e);
                }),
                ex(e, t),
                r
            );
        },
        nx = (e, t, n) => {
            if (bs(n)) {
                if (bs(t)) {
                    const e = (e) => {
                            const t = (e, n) =>
                                Fn(e).fold(
                                    () => n,
                                    (e) => (kr(e) ? t(e, n.concat(oi(e))) : n)
                                );
                            return t(e, []);
                        },
                        o = Y(e(n), (e, t) => (vo(e, t), t), Dr());
                    Co(t), bo(t, o);
                }
                return wo(n), yu(t.dom);
            }
            const o = Cu(n.dom);
            return (
                V(Zw(t), (e) => {
                    bo(n, e);
                }),
                ex(e, t),
                o
            );
        },
        ox = (e, t) => {
            hu(e, t.dom)
                .bind((e) => I.from(e.getNode()))
                .map(yn)
                .filter(Er)
                .each(wo);
        },
        rx = (e, t, n) => (
            ox(!0, t),
            ox(!1, n),
            ((e, t) =>
                Sn(t, e)
                    ? ((e, t) => {
                          const n = bp(t, e);
                          return I.from(n[n.length - 1]);
                      })(t, e)
                    : I.none())(t, n).fold(O(nx, e, t, n), O(tx, e, t, n))
        ),
        sx = (e, t, n, o) => (t ? rx(e, o, n) : rx(e, n, o)),
        ax = (e, t) => {
            const n = yn(e.getBody()),
                o = ((e, t, n) =>
                    n.collapsed
                        ? ((e, t, n) => {
                              const o = Qw(e, Li.fromRangeStart(n)),
                                  r = o.bind((n) =>
                                      fu(t, e, n.position).bind((n) =>
                                          Qw(e, n).map((n) =>
                                              ((e, t, n) =>
                                                  rr(n.position.getNode()) && !bs(n.block)
                                                      ? hu(!1, n.block.dom)
                                                            .bind((o) => (o.isEqual(n.position) ? fu(t, e, o).bind((t) => Qw(e, t)) : I.some(n)))
                                                            .getOr(n)
                                                      : n)(e, t, n)
                                          )
                                      )
                                  );
                              return Mt(o, r, Xw).filter(
                                  (t) =>
                                      ((e) => !En(e.from.block, e.to.block))(t) &&
                                      ((e, t) => {
                                          const n = yn(e);
                                          return En(Jw(n, t.from.block), Jw(n, t.to.block));
                                      })(e, t) &&
                                      ((e) => !1 === ir(e.from.block.dom) && !1 === ir(e.to.block.dom))(t) &&
                                      ((e) => {
                                          const t = (e) => Sr(e) || _s(e.dom);
                                          return t(e.from.block) && t(e.to.block);
                                      })(t)
                              );
                          })(e, t, n)
                        : I.none())(n.dom, t, e.selection.getRng()).map((o) => () => {
                    sx(n, t, o.from.block, o.to.block).each((t) => {
                        e.selection.setRng(t.toRange());
                    });
                });
            return o;
        },
        ix = (e, t) => {
            const n = yn(t),
                o = O(En, e);
            return Qn(n, Ar, o).isSome();
        },
        lx = (e) => {
            const t = yn(e.getBody());
            return ((e, t) => {
                const n = vu(e.dom, Li.fromRangeStart(t)).isNone(),
                    o = bu(e.dom, Li.fromRangeEnd(t)).isNone();
                return !((e, t) => ix(e, t.startContainer) || ix(e, t.endContainer))(e, t) && n && o;
            })(t, e.selection.getRng())
                ? ((e) =>
                      I.some(() => {
                          e.setContent(""), e.selection.setCursorLocation();
                      }))(e)
                : ((e, t) => {
                      const n = t.getRng();
                      return Mt(ph(e, yn(n.startContainer)), ph(e, yn(n.endContainer)), (o, r) =>
                          En(o, r)
                              ? I.none()
                              : I.some(() => {
                                    n.deleteContents(),
                                        sx(e, !0, o, r).each((e) => {
                                            t.setRng(e.toRange());
                                        });
                                })
                      ).getOr(I.none());
                  })(t, e.selection);
        },
        dx = (e, t) => (e.selection.isCollapsed() ? I.none() : lx(e)),
        cx = (e, t, n, o, r) => I.from(t._selectionOverrides.showCaret(e, n, o, r)),
        ux = (e, t) =>
            e.dispatch("BeforeObjectSelected", { target: t }).isDefaultPrevented()
                ? I.none()
                : I.some(
                      ((e) => {
                          const t = e.ownerDocument.createRange();
                          return t.selectNode(e), t;
                      })(t)
                  ),
        mx = (e, t, n) =>
            t.collapsed
                ? ((e, t, n) => {
                      const o = Wc(1, e.getBody(), t),
                          r = Li.fromRangeStart(o),
                          s = r.getNode();
                      if (kc(s)) return cx(1, e, s, !r.isAtEnd(), !1);
                      const a = r.getNode(!0);
                      if (kc(a)) return cx(1, e, a, !1, !1);
                      const i = Vh(e.dom.getRoot(), r.getNode());
                      return kc(i) ? cx(1, e, i, !1, n) : I.none();
                  })(e, t, n).getOr(t)
                : t,
        fx = (e) => gp(e) || cp(e),
        gx = (e) => pp(e) || up(e),
        px = (e, t, n, o, r, s) => {
            cx(o, e, s.getNode(!r), r, !0).each((n) => {
                if (t.collapsed) {
                    const e = t.cloneRange();
                    r ? e.setEnd(n.startContainer, n.startOffset) : e.setStart(n.endContainer, n.endOffset), e.deleteContents();
                } else t.deleteContents();
                e.selection.setRng(n);
            }),
                ((e, t) => {
                    Jo(t) && 0 === t.data.length && e.remove(t);
                })(e.dom, n);
        },
        hx = (e, t) =>
            ((e, t) => {
                const n = e.selection.getRng();
                if (!Jo(n.commonAncestorContainer)) return I.none();
                const o = t ? Jc.Forwards : Jc.Backwards,
                    r = du(e.getBody()),
                    s = O(Xc, t ? r.next : r.prev),
                    a = t ? fx : gx,
                    i = Gc(o, e.getBody(), n),
                    l = s(i),
                    d = l ? dh(t, l) : l;
                if (!d || !Qc(i, d)) return I.none();
                if (a(d)) return I.some(() => px(e, n, i.getNode(), o, t, d));
                const c = s(d);
                return c && a(c) && Qc(d, c) ? I.some(() => px(e, n, i.getNode(), o, t, c)) : I.none();
            })(e, t),
        bx = (e, t) => {
            const n = e.getBody();
            return t ? yu(n).filter(gp) : Cu(n).filter(pp);
        },
        vx = (e) => {
            const t = e.selection.getRng();
            return !t.collapsed && (bx(e, !0).exists((e) => e.isEqual(Li.fromRangeStart(t))) || bx(e, !1).exists((e) => e.isEqual(Li.fromRangeEnd(t))));
        },
        yx = al([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        Cx = (e, t, n) =>
            fu(t, e, n).bind((o) => {
                return (
                    (r = o.getNode()),
                    (C(r) && (Ar(yn(r)) || Nr(yn(r)))) ||
                    ((e, t, n, o) => {
                        const r = (t) => kr(yn(t)) && !Uc(n, o, e);
                        return Kc(!t, n).fold(() => Kc(t, o).fold(L, r), r);
                    })(e, t, n, o)
                        ? I.none()
                        : (t && ir(o.getNode())) || (!t && ir(o.getNode(!0)))
                        ? ((e, t, n, o) => {
                              const r = o.getNode(!t);
                              return ph(yn(e), yn(n.getNode()))
                                  .map((e) => (bs(e) ? yx.remove(e.dom) : yx.moveToElement(r)))
                                  .orThunk(() => I.some(yx.moveToElement(r)));
                          })(e, t, n, o)
                        : (t && pp(n)) || (!t && gp(n))
                        ? I.some(yx.moveToPosition(o))
                        : I.none()
                );
                var r;
            }),
        wx = (e, t) => I.from(Vh(e.getBody(), t)),
        xx = (e, t) => {
            const n = e.selection.getNode();
            return wx(e, n)
                .filter(ir)
                .fold(
                    () =>
                        ((e, t, n) => {
                            const o = Wc(t ? 1 : -1, e, n),
                                r = Li.fromRangeStart(o),
                                s = yn(e);
                            return !t && pp(r)
                                ? I.some(yx.remove(r.getNode(!0)))
                                : t && gp(r)
                                ? I.some(yx.remove(r.getNode()))
                                : !t && gp(r) && Ap(s, r)
                                ? Op(s, r).map((e) => yx.remove(e.getNode()))
                                : t && pp(r) && Rp(s, r)
                                ? Tp(s, r).map((e) => yx.remove(e.getNode()))
                                : ((e, t, n) =>
                                      ((e, t) => {
                                          const n = t.getNode(!e),
                                              o = e ? "after" : "before";
                                          return $o(n) && n.getAttribute("data-mce-caret") === o;
                                      })(t, n)
                                          ? ((e, t) => (y(t) ? I.none() : e && ir(t.nextSibling) ? I.some(yx.moveToElement(t.nextSibling)) : !e && ir(t.previousSibling) ? I.some(yx.moveToElement(t.previousSibling)) : I.none()))(
                                                t,
                                                n.getNode(!t)
                                            ).orThunk(() => Cx(e, t, n))
                                          : Cx(e, t, n).bind((t) =>
                                                ((e, t, n) =>
                                                    n.fold(
                                                        (e) => I.some(yx.remove(e)),
                                                        (e) => I.some(yx.moveToElement(e)),
                                                        (n) => (Uc(t, n, e) ? I.none() : I.some(yx.moveToPosition(n)))
                                                    ))(e, n, t)
                                            ))(e, t, r);
                        })(e.getBody(), t, e.selection.getRng()).map((n) => () =>
                            n.fold(
                                ((e, t) => (n) => (e._selectionOverrides.hideFakeCaret(), rh(e, t, yn(n)), !0))(e, t),
                                ((e, t) => (n) => {
                                    const o = t ? Li.before(n) : Li.after(n);
                                    return e.selection.setRng(o.toRange()), !0;
                                })(e, t),
                                ((e) => (t) => (e.selection.setRng(t.toRange()), !0))(e)
                            )
                        ),
                    () => I.some(E)
                );
        },
        kx = (e) => {
            const t = e.dom,
                n = e.selection,
                o = Vh(e.getBody(), n.getNode());
            if (ar(o) && t.isBlock(o) && t.isEmpty(o)) {
                const e = t.create("br", { "data-mce-bogus": "1" });
                t.setHTML(o, ""), o.appendChild(e), n.setRng(Li.before(e).toRange());
            }
            return !0;
        },
        Ex = (e, t) =>
            e.selection.isCollapsed()
                ? xx(e, t)
                : ((e, t) => {
                      const n = e.selection.getNode();
                      return ir(n) && !lr(n)
                          ? wx(e, n.parentNode)
                                .filter(ir)
                                .fold(
                                    () =>
                                        I.some(() => {
                                            var n;
                                            (n = yn(e.getBody())), V(Fo(n, ".mce-offscreen-selection"), wo), rh(e, t, yn(e.selection.getNode())), hh(e);
                                        }),
                                    () => I.some(E)
                                )
                          : vx(e)
                          ? I.some(() => {
                                yh(e, e.selection.getRng(), yn(e.getBody()));
                            })
                          : I.none();
                  })(e, t),
        Sx = (e, t) =>
            e.selection.isCollapsed()
                ? ((e, t) => {
                      const n = Li.fromRangeStart(e.selection.getRng());
                      return fu(t, e.getBody(), n)
                          .filter((e) => (t ? lp(e) : dp(e)))
                          .bind((e) => zc(t ? 0 : -1, e))
                          .map((t) => () => e.selection.select(t));
                  })(e, t)
                : I.none(),
        _x = Jo,
        Nx = (e) => _x(e) && e.data[0] === Mr,
        Rx = (e) => _x(e) && e.data[e.data.length - 1] === Mr,
        Ax = (e) => {
            var t;
            return (null !== (t = e.ownerDocument) && void 0 !== t ? t : document).createTextNode(Mr);
        },
        Ox = (e, t) =>
            e
                ? ((e) => {
                      var t;
                      if (_x(e.previousSibling)) return Rx(e.previousSibling) || e.previousSibling.appendData(Mr), e.previousSibling;
                      if (_x(e)) return Nx(e) || e.insertData(0, Mr), e;
                      {
                          const n = Ax(e);
                          return null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e), n;
                      }
                  })(t)
                : ((e) => {
                      var t, n;
                      if (_x(e.nextSibling)) return Nx(e.nextSibling) || e.nextSibling.insertData(0, Mr), e.nextSibling;
                      if (_x(e)) return Rx(e) || e.appendData(Mr), e;
                      {
                          const o = Ax(e);
                          return e.nextSibling ? null === (t = e.parentNode) || void 0 === t || t.insertBefore(o, e.nextSibling) : null === (n = e.parentNode) || void 0 === n || n.appendChild(o), o;
                      }
                  })(t),
        Tx = O(Ox, !0),
        Bx = O(Ox, !1),
        Dx = (e, t) => (Jo(e.container()) ? Ox(t, e.container()) : Ox(t, e.getNode())),
        Px = (e, t) => {
            const n = t.get();
            return n && e.container() === n && Hr(n);
        },
        Lx = (e, t) =>
            t.fold(
                (t) => {
                    hc(e.get());
                    const n = Tx(t);
                    return e.set(n), I.some(Li(n, n.length - 1));
                },
                (t) =>
                    yu(t).map((t) => {
                        if (Px(t, e)) {
                            const t = e.get();
                            return Li(t, 1);
                        }
                        {
                            hc(e.get());
                            const n = Dx(t, !0);
                            return e.set(n), Li(n, 1);
                        }
                    }),
                (t) =>
                    Cu(t).map((t) => {
                        if (Px(t, e)) {
                            const t = e.get();
                            return Li(t, t.length - 1);
                        }
                        {
                            hc(e.get());
                            const n = Dx(t, !1);
                            return e.set(n), Li(n, n.length - 1);
                        }
                    }),
                (t) => {
                    hc(e.get());
                    const n = Bx(t);
                    return e.set(n), I.some(Li(n, 1));
                }
            ),
        Mx = (e, t) => {
            for (let n = 0; n < e.length; n++) {
                const o = e[n].apply(null, t);
                if (o.isSome()) return o;
            }
            return I.none();
        },
        Ix = al([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        Fx = (e, t) => Fc(t, e) || e,
        Ux = (e, t, n) => {
            const o = ch(n),
                r = Fx(t, o.container());
            return lh(e, r, o).fold(
                () =>
                    bu(r, o)
                        .bind(O(lh, e, r))
                        .map((e) => Ix.before(e)),
                I.none
            );
        },
        zx = (e, t) => null === ku(e, t),
        jx = (e, t, n) => lh(e, t, n).filter(O(zx, t)),
        Hx = (e, t, n) => {
            const o = uh(n);
            return jx(e, t, o).bind((e) => (vu(e, o).isNone() ? I.some(Ix.start(e)) : I.none()));
        },
        $x = (e, t, n) => {
            const o = ch(n);
            return jx(e, t, o).bind((e) => (bu(e, o).isNone() ? I.some(Ix.end(e)) : I.none()));
        },
        qx = (e, t, n) => {
            const o = uh(n),
                r = Fx(t, o.container());
            return lh(e, r, o).fold(
                () =>
                    vu(r, o)
                        .bind(O(lh, e, r))
                        .map((e) => Ix.after(e)),
                I.none
            );
        },
        Vx = (e) => !ih(Kx(e)),
        Wx = (e, t, n) => Mx([Ux, Hx, $x, qx], [e, t, n]).filter(Vx),
        Kx = (e) => e.fold(R, R, R, R),
        Gx = (e) => e.fold(N("before"), N("start"), N("end"), N("after")),
        Yx = (e) => e.fold(Ix.before, Ix.before, Ix.after, Ix.after),
        Xx = (e) => e.fold(Ix.start, Ix.start, Ix.end, Ix.end),
        Qx = (e, t, n, o, r, s) =>
            Mt(lh(t, n, o), lh(t, n, r), (t, o) =>
                t !== o &&
                ((e, t, n) => {
                    const o = Fc(t, e),
                        r = Fc(n, e);
                    return C(o) && o === r;
                })(n, t, o)
                    ? Ix.after(e ? t : o)
                    : s
            ).getOr(s),
        Jx = (e, t) =>
            e.fold(M, (e) => {
                return (o = t), !(Gx((n = e)) === Gx(o) && Kx(n) === Kx(o));
                var n, o;
            }),
        Zx = (e, t) => (e ? t.fold(S(I.some, Ix.start), I.none, S(I.some, Ix.after), I.none) : t.fold(I.none, S(I.some, Ix.before), I.none, S(I.some, Ix.end))),
        ek = (e, t, n) => {
            const o = e ? 1 : -1;
            return t.setRng(Li(n.container(), n.offset() + o).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
        };
    var tk;
    !(function (e) {
        (e[(e.Br = 0)] = "Br"), (e[(e.Block = 1)] = "Block"), (e[(e.Wrap = 2)] = "Wrap"), (e[(e.Eol = 3)] = "Eol");
    })(tk || (tk = {}));
    const nk = (e, t) => (e === Jc.Backwards ? oe(t) : t),
        ok = (e, t, n) => (e === Jc.Forwards ? t.next(n) : t.prev(n)),
        rk = (e, t, n, o) => (rr(o.getNode(t === Jc.Forwards)) ? tk.Br : !1 === Uc(n, o) ? tk.Block : tk.Wrap),
        sk = (e, t, n, o) => {
            const r = du(n);
            let s = o;
            const a = [];
            for (; s; ) {
                const n = ok(t, r, s);
                if (!n) break;
                if (rr(n.getNode(!1))) return t === Jc.Forwards ? { positions: nk(t, a).concat([n]), breakType: tk.Br, breakAt: I.some(n) } : { positions: nk(t, a), breakType: tk.Br, breakAt: I.some(n) };
                if (n.isVisible()) {
                    if (e(s, n)) {
                        const e = rk(0, t, s, n);
                        return { positions: nk(t, a), breakType: e, breakAt: I.some(n) };
                    }
                    a.push(n), (s = n);
                } else s = n;
            }
            return { positions: nk(t, a), breakType: tk.Eol, breakAt: I.none() };
        },
        ak = (e, t, n, o) =>
            t(n, o)
                .breakAt.map((o) => {
                    const r = t(n, o).positions;
                    return e === Jc.Backwards ? r.concat(o) : [o].concat(r);
                })
                .getOr([]),
        ik = (e, t) =>
            X(
                e,
                (e, n) =>
                    e.fold(
                        () => I.some(n),
                        (o) =>
                            Mt(le(o.getClientRects()), le(n.getClientRects()), (e, r) => {
                                const s = Math.abs(t - e.left);
                                return Math.abs(t - r.left) <= s ? n : o;
                            }).or(e)
                    ),
                I.none()
            ),
        lk = (e, t) => le(t.getClientRects()).bind((t) => ik(e, t.left)),
        dk = O(sk, Li.isAbove, -1),
        ck = O(sk, Li.isBelow, 1),
        uk = O(ak, -1, dk),
        mk = O(ak, 1, ck),
        fk = (e, t) => dk(e, t).breakAt.isNone(),
        gk = (e, t) => ck(e, t).breakAt.isNone(),
        pk = (e, t) => lk(uk(e, t), t),
        hk = (e, t) => lk(mk(e, t), t),
        bk = ir,
        vk = (e, t) => Math.abs(e.left - t),
        yk = (e, t) => Math.abs(e.right - t),
        Ck = (e, t) =>
            Te(e, (e, n) => {
                const o = Math.min(vk(e, t), yk(e, t)),
                    r = Math.min(vk(n, t), yk(n, t));
                return (r === o && Ee(n, "node") && bk(n.node)) || r < o ? n : e;
            }),
        wk = (e) => {
            const t = (t) =>
                q(t, (t) => {
                    const n = li(t);
                    return (n.node = e), n;
                });
            if ($o(e)) return t(e.getClientRects());
            if (Jo(e)) {
                const n = e.ownerDocument.createRange();
                return n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects());
            }
            return [];
        },
        xk = (e) => te(e, wk);
    var kk;
    !(function (e) {
        (e[(e.Up = -1)] = "Up"), (e[(e.Down = 1)] = "Down");
    })(kk || (kk = {}));
    const Ek = (e, t, n, o, r, s) => {
            let a = 0;
            const i = [],
                l = (o) => {
                    let s = xk([o]);
                    -1 === e && (s = s.reverse());
                    for (let e = 0; e < s.length; e++) {
                        const o = s[e];
                        if (!n(o, d)) {
                            if ((i.length > 0 && t(o, De(i)) && a++, (o.line = a), r(o))) return !0;
                            i.push(o);
                        }
                    }
                    return !1;
                },
                d = De(s.getClientRects());
            if (!d) return i;
            const c = s.getNode();
            return (
                c &&
                    (l(c),
                    ((e, t, n, o) => {
                        let r = o;
                        for (; (r = Ic(r, e, is, t)); ) if (n(r)) return;
                    })(e, o, l, c)),
                i
            );
        },
        Sk = O(Ek, kk.Up, ui, mi),
        _k = O(Ek, kk.Down, mi, ui),
        Nk = (e) => De(e.getClientRects()),
        Rk = (e) => (t) => ((e, t) => t.line > e)(e, t),
        Ak = (e) => (t) => ((e, t) => t.line === e)(e, t),
        Ok = (e, t) => {
            e.selection.setRng(t), Zf(e, e.selection.getRng());
        },
        Tk = (e, t, n) => I.some(mx(e, t, n)),
        Bk = (e, t, n, o, r, s) => {
            const a = t === Jc.Forwards,
                i = du(e.getBody()),
                l = O(Xc, a ? i.next : i.prev),
                d = a ? o : r;
            if (!n.collapsed) {
                const o = gi(n);
                if (s(o)) return cx(t, e, o, t === Jc.Backwards, !1);
                if (vx(e)) {
                    const e = n.cloneRange();
                    return e.collapse(t === Jc.Backwards), I.from(e);
                }
            }
            const c = Gc(t, e.getBody(), n);
            if (d(c)) return ux(e, c.getNode(!a));
            let u = l(c);
            const m = Xr(n);
            if (!u) return m ? I.some(n) : I.none();
            if (((u = dh(a, u)), d(u))) return cx(t, e, u.getNode(!a), a, !1);
            const f = l(u);
            return f && d(f) && Qc(u, f) ? cx(t, e, f.getNode(!a), a, !1) : m ? Tk(e, u.toRange(), !1) : I.none();
        },
        Dk = (e, t, n, o, r, s) => {
            const a = Gc(t, e.getBody(), n),
                i = De(a.getClientRects()),
                l = t === kk.Down,
                d = e.getBody();
            if (!i) return I.none();
            if (vx(e)) {
                const e = l ? Li.fromRangeEnd(n) : Li.fromRangeStart(n);
                return (l ? hk : pk)(d, e)
                    .orThunk(() => I.from(e))
                    .map((e) => e.toRange());
            }
            const c = (l ? _k : Sk)(d, Rk(1), a),
                u = G(c, Ak(1)),
                m = i.left,
                f = Ck(u, m);
            if (f && s(f.node)) {
                const n = Math.abs(m - f.left),
                    o = Math.abs(m - f.right);
                return cx(t, e, f.node, n < o, !1);
            }
            let g;
            if (((g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : gi(n)), g)) {
                const n = ((e, t, n, o) => {
                    const r = du(t);
                    let s, a, i, l;
                    const d = [];
                    let c = 0;
                    1 === e ? ((s = r.next), (a = mi), (i = ui), (l = Li.after(o))) : ((s = r.prev), (a = ui), (i = mi), (l = Li.before(o)));
                    const u = Nk(l);
                    do {
                        if (!l.isVisible()) continue;
                        const e = Nk(l);
                        if (i(e, u)) continue;
                        d.length > 0 && a(e, De(d)) && c++;
                        const t = li(e);
                        if (((t.position = l), (t.line = c), n(t))) return d;
                        d.push(t);
                    } while ((l = s(l)));
                    return d;
                })(t, d, Rk(1), g);
                let o = Ck(G(n, Ak(1)), m);
                if (o) return Tk(e, o.position.toRange(), !1);
                if (((o = De(G(n, Ak(0)))), o)) return Tk(e, o.position.toRange(), !1);
            }
            return 0 === u.length
                ? Pk(e, l)
                      .filter(l ? r : o)
                      .map((t) => mx(e, t.toRange(), !1))
                : I.none();
        },
        Pk = (e, t) => {
            const n = e.selection.getRng(),
                o = t ? Li.fromRangeEnd(n) : Li.fromRangeStart(n),
                r =
                    ((s = o.container()),
                    (a = e.getBody()),
                    Qn(
                        yn(s),
                        (e) => Sc(e.dom),
                        (e) => e.dom === a
                    )
                        .map((e) => e.dom)
                        .getOr(a));
            var s, a;
            if (t) {
                const e = ck(r, o);
                return de(e.positions);
            }
            {
                const e = dk(r, o);
                return le(e.positions);
            }
        },
        Lk = (e, t, n) =>
            Pk(e, t)
                .filter(n)
                .exists((t) => (e.selection.setRng(t.toRange()), !0)),
        Mk = (e, t) => {
            const n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
        },
        Ik = (e, t) => {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
        },
        Fk = (e, t, n) => Lx(t, n).map((t) => (Mk(e, t), n)),
        Uk = (e, t, n) => {
            const o = e.getBody(),
                r = ((e, t, n) => {
                    const o = Li.fromRangeStart(e);
                    if (e.collapsed) return o;
                    {
                        const r = Li.fromRangeEnd(e);
                        return n ? vu(t, r).getOr(r) : bu(t, o).getOr(o);
                    }
                })(e.selection.getRng(), o, n);
            return ((e, t, n, o) => {
                const r = dh(e, o),
                    s = Wx(t, n, r);
                return Wx(t, n, r)
                    .bind(O(Zx, e))
                    .orThunk(() =>
                        ((e, t, n, o, r) => {
                            const s = dh(e, r);
                            return fu(e, n, s)
                                .map(O(dh, e))
                                .fold(
                                    () => o.map(Yx),
                                    (r) => Wx(t, n, r).map(O(Qx, e, t, n, s, r)).filter(O(Jx, o))
                                )
                                .filter(Vx);
                        })(e, t, n, s, o)
                    );
            })(n, O(ah, e), o, r).bind((n) => Fk(e, t, n));
        },
        zk = (e, t, n) => !!dd(e) && Uk(e, t, n).isSome(),
        jk = (e, t, n) =>
            !!dd(t) &&
            ((e, t) => {
                const n = t.selection.getRng(),
                    o = e ? Li.fromRangeEnd(n) : Li.fromRangeStart(n);
                return !!((e) => w(e.selection.getSel().modify))(t) && (e && Vr(o) ? ek(!0, t.selection, o) : !(e || !Wr(o)) && ek(!1, t.selection, o));
            })(e, t),
        Hk = (e) => {
            const t = Da(null),
                n = O(ah, e);
            return (
                e.on("NodeChange", (o) => {
                    dd(e) &&
                        (((e, t, n) => {
                            const o = q(Fo(yn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), (e) => e.dom),
                                r = G(o, e),
                                s = G(n, e);
                            V(re(r, s), O(Ik, !1)), V(re(s, r), O(Ik, !0));
                        })(n, e.dom, o.parents),
                        ((e, t) => {
                            const n = t.get();
                            if (e.selection.isCollapsed() && !e.composing && n) {
                                const o = Li.fromRangeStart(e.selection.getRng());
                                Li.isTextPosition(o) && !((e) => Vr(e) || Wr(e))(o) && (Mk(e, pc(n, o)), t.set(null));
                            }
                        })(e, t),
                        ((e, t, n, o) => {
                            if (t.selection.isCollapsed()) {
                                const r = G(o, e);
                                V(r, (o) => {
                                    const r = Li.fromRangeStart(t.selection.getRng());
                                    Wx(e, t.getBody(), r).bind((e) => Fk(t, n, e));
                                });
                            }
                        })(n, e, t, o.parents));
                }),
                t
            );
        },
        $k = O(jk, !0),
        qk = O(jk, !1),
        Vk = (e, t, n) => {
            if (dd(e)) {
                const o = Pk(e, t).getOrThunk(() => {
                    const n = e.selection.getRng();
                    return t ? Li.fromRangeEnd(n) : Li.fromRangeStart(n);
                });
                return Wx(O(ah, e), e.getBody(), o).exists((t) => {
                    const o = Yx(t);
                    return Lx(n, o).exists((t) => (Mk(e, t), !0));
                });
            }
            return !1;
        },
        Wk = (e, t) => (n) => Lx(t, n).map((t) => () => Mk(e, t)),
        Kk = (e, t, n, o) => {
            const r = e.getBody(),
                s = O(ah, e);
            e.undoManager.ignore(() => {
                e.selection.setRng(
                    ((e, t) => {
                        const n = document.createRange();
                        return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n;
                    })(n, o)
                ),
                    fh(e),
                    Wx(s, r, Li.fromRangeStart(e.selection.getRng())).map(Xx).bind(Wk(e, t)).each(P);
            }),
                e.nodeChanged();
        },
        Gk = (e, t, n) => {
            if (e.selection.isCollapsed() && dd(e)) {
                const o = Li.fromRangeStart(e.selection.getRng());
                return ((e, t, n, o) => {
                    const r = ((e, t) => Fc(t, e) || e)(e.getBody(), o.container()),
                        s = O(ah, e),
                        a = Wx(s, r, o);
                    return a
                        .bind((e) => (n ? e.fold(N(I.some(Xx(e))), I.none, N(I.some(Yx(e))), I.none) : e.fold(I.none, N(I.some(Yx(e))), I.none, N(I.some(Xx(e))))))
                        .map(Wk(e, t))
                        .getOrThunk(() => {
                            const i = gu(n, r, o),
                                l = i.bind((e) => Wx(s, r, e));
                            return Mt(a, l, () =>
                                lh(s, r, o).bind((t) =>
                                    ((e) =>
                                        Mt(yu(e), Cu(e), (t, n) => {
                                            const o = dh(!0, t),
                                                r = dh(!1, n);
                                            return bu(e, o).forall((e) => e.isEqual(r));
                                        }).getOr(!0))(t)
                                        ? I.some(() => {
                                              rh(e, n, yn(t));
                                          })
                                        : I.none()
                                )
                            ).getOrThunk(() =>
                                l.bind(() =>
                                    i.map((r) => () => {
                                        n ? Kk(e, t, o, r) : Kk(e, t, r, o);
                                    })
                                )
                            );
                        });
                })(e, t, n, o);
            }
            return I.none();
        },
        Yk = (e, t) => {
            const n = yn(e.getBody()),
                o = yn(e.selection.getStart()),
                r = bp(o, n);
            return Z(r, t).fold(N(r), (e) => r.slice(0, e));
        },
        Xk = (e) => 1 === zn(e),
        Qk = (e, t) => {
            const n = O(Ib, e);
            return te(t, (e) => (n(e) ? [e.dom] : []));
        },
        Jk = (e) => {
            const t = ((e) => Yk(e, xr))(e);
            return Qk(e, t);
        },
        Zk = (e, t) => {
            const n = G(((e) => Yk(e, (e) => xr(e) || ((e) => zn(e) > 1)(e)))(e), Xk);
            return de(n).bind((o) => {
                const r = Li.fromRangeStart(e.selection.getRng());
                return bh(t, r, o.dom) && !Fb(o)
                    ? I.some(() =>
                          ((e, t, n, o) => {
                              const r = Qk(t, o);
                              if (0 === r.length) rh(t, e, n);
                              else {
                                  const e = Mb(n.dom, r);
                                  t.selection.setRng(e.toRange());
                              }
                          })(t, e, o, n)
                      )
                    : I.none();
            });
        },
        eE = (e, t) => {
            const n = e.selection.getStart(),
                o =
                    ((e, t) => {
                        const n = t.parentElement;
                        return rr(t) && !h(n) && e.dom.isEmpty(n);
                    })(e, n) || Fb(yn(n))
                        ? Mb(n, t)
                        : ((e, t) => {
                              const { caretContainer: n, caretPosition: o } = Lb(t);
                              return e.insertNode(n.dom), o;
                          })(e.selection.getRng(), t);
            e.selection.setRng(o.toRange());
        },
        tE = (e) => Jo(e.startContainer),
        nE = (e) => {
            const t = e.selection.getRng();
            return (
                ((e) => 0 === e.startOffset && tE(e))(t) &&
                ((e, t) => {
                    const n = t.startContainer.parentElement;
                    return !h(n) && Ib(e, yn(n));
                })(e, t) &&
                ((e) =>
                    ((e) =>
                        ((e) => {
                            const t = e.startContainer.parentNode,
                                n = e.endContainer.parentNode;
                            return !h(t) && !h(n) && t.isEqualNode(n);
                        })(e) &&
                        ((e) => {
                            const t = e.endContainer;
                            return e.endOffset === (Jo(t) ? t.length : t.childNodes.length);
                        })(e))(e) || ((e) => !e.endContainer.isEqualNode(e.commonAncestorContainer))(e))(t)
            );
        },
        oE = (e, t) =>
            e.selection.isCollapsed()
                ? Zk(e, t)
                : ((e) => {
                      if (nE(e)) {
                          const t = Jk(e);
                          return I.some(() => {
                              fh(e),
                                  ((e, t) => {
                                      const n = re(t, Jk(e));
                                      n.length > 0 && eE(e, n);
                                  })(e, t);
                          });
                      }
                      return I.none();
                  })(e),
        rE = (e) => ((e, t, n) => Qn(e, (e) => xu(e.dom), n).isSome())(e, 0, xr),
        sE = (e) => (
            ((e) => {
                const t = e.selection.getRng();
                return t.collapsed && (tE(t) || e.dom.isEmpty(t.startContainer)) && !((e) => rE(yn(e.selection.getStart())))(e);
            })(e) && eE(e, []),
            !0
        ),
        aE = (e, t, n) =>
            C(n)
                ? I.some(() => {
                      e._selectionOverrides.hideFakeCaret(), rh(e, t, yn(n));
                  })
                : I.none(),
        iE = (e, t) =>
            e.selection.isCollapsed()
                ? ((e, t) => {
                      const n = t ? cp : up,
                          o = t ? Jc.Forwards : Jc.Backwards,
                          r = Gc(o, e.getBody(), e.selection.getRng());
                      return n(r)
                          ? aE(e, t, r.getNode(!t))
                          : I.from(dh(t, r))
                                .filter((e) => n(e) && Qc(r, e))
                                .bind((n) => aE(e, t, n.getNode(!t)));
                  })(e, t)
                : ((e, t) => {
                      const n = e.selection.getNode();
                      return cr(n) ? aE(e, t, n) : I.none();
                  })(e, t),
        lE = (e) => Xe(null != e ? e : "").getOr(0),
        dE = (e, t) => (e || "table" === Ht(t) ? "margin" : "padding") + ("rtl" === lo(t, "direction") ? "-right" : "-left"),
        cE = (e) => {
            const t = mE(e);
            return (
                !e.mode.isReadOnly() &&
                (t.length > 1 ||
                    ((e, t) =>
                        ne(t, (t) => {
                            const n = dE(Kl(e), t),
                                o = uo(t, n).map(lE).getOr(0);
                            return "false" !== e.dom.getContentEditable(t.dom) && o > 0;
                        }))(e, t))
            );
        },
        uE = (e) => _r(e) || Nr(e),
        mE = (e) => G(ko(e.selection.getSelectedBlocks()), (e) => !uE(e) && !((e) => An(e).exists(uE))(e) && Jn(e, (e) => ar(e.dom) || ir(e.dom)).exists((e) => ar(e.dom))),
        fE = (e, t) => {
            var n, o;
            const { dom: r } = e,
                s = Gl(e),
                a = null !== (o = null === (n = /[a-z%]+$/i.exec(s)) || void 0 === n ? void 0 : n[0]) && void 0 !== o ? o : "px",
                i = lE(s),
                l = Kl(e);
            V(mE(e), (e) => {
                ((e, t, n, o, r, s) => {
                    const a = dE(n, yn(s)),
                        i = lE(e.getStyle(s, a));
                    if ("outdent" === t) {
                        const t = Math.max(0, i - o);
                        e.setStyle(s, a, t ? t + r : "");
                    } else {
                        const t = i + o + r;
                        e.setStyle(s, a, t);
                    }
                })(r, t, l, i, a, e.dom);
            });
        },
        gE = (e) => fE(e, "outdent"),
        pE = (e) => {
            if (e.selection.isCollapsed() && cE(e)) {
                const t = e.dom,
                    n = e.selection.getRng(),
                    o = Li.fromRangeStart(n),
                    r = t.getParent(n.startContainer, t.isBlock);
                if (null !== r && xp(yn(r), o)) return I.some(() => gE(e));
            }
            return I.none();
        },
        hE = (e, t, n) => ue([pE, Ex, hx, (e, n) => Gk(e, t, n), ax, qh, Sx, iE, dx, oE], (t) => t(e, n)).filter((t) => e.selection.isEditable()),
        bE = (e, t) => {
            e.addCommand("delete", () => {
                ((e, t) => {
                    hE(e, t, !1).fold(() => {
                        fh(e), hh(e);
                    }, P);
                })(e, t);
            }),
                e.addCommand("forwardDelete", () => {
                    ((e, t) => {
                        hE(e, t, !0).fold(() => ((e) => mh(e, "ForwardDelete"))(e), P);
                    })(e, t);
                });
        },
        vE = (e) => (void 0 === e.touches || 1 !== e.touches.length ? I.none() : I.some(e.touches[0])),
        yE = (e, t) => ke(e, t.nodeName),
        CE = (e, t) => !!Jo(t) || (!!$o(t) && !yE(e.getBlockElements(), t) && !Lu(t) && !As(e, t)),
        wE = (e, t) => {
            if (Jo(t)) {
                if (0 === t.data.length) return !0;
                if (/^\s+$/.test(t.data) && (!t.nextSibling || yE(e, t.nextSibling))) return !0;
            }
            return !1;
        },
        xE = (e) => e.dom.create(Nl(e), Rl(e)),
        kE = (e) => {
            const t = e.dom,
                n = e.selection,
                o = e.schema,
                r = o.getBlockElements(),
                s = n.getStart(),
                a = e.getBody();
            let i,
                l,
                d = !1;
            const c = Nl(e);
            if (!s || !$o(s)) return;
            const u = a.nodeName.toLowerCase();
            if (!o.isValidChild(u, c.toLowerCase()) || ((e, t, n) => $(hp(yn(n), yn(t)), (t) => yE(e, t.dom)))(r, a, s)) return;
            const m = n.getRng(),
                { startContainer: f, startOffset: g, endContainer: p, endOffset: h } = m,
                b = xg(e);
            let v = a.firstChild;
            for (; v; )
                if (($o(v) && Ss(o, v), CE(o, v))) {
                    if (wE(r, v)) {
                        (l = v), (v = v.nextSibling), t.remove(l);
                        continue;
                    }
                    i || ((i = xE(e)), a.insertBefore(i, v), (d = !0)), (l = v), (v = v.nextSibling), i.appendChild(l);
                } else (i = null), (v = v.nextSibling);
            d && b && (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged());
        },
        EE = (e, t, n) => {
            const o = yn(xE(e)),
                r = Dr();
            bo(o, r), n(t, o);
            const s = document.createRange();
            return s.setStartBefore(r.dom), s.setEndBefore(r.dom), s;
        },
        SE = (e) => (t) => -1 !== (" " + t.attr("class") + " ").indexOf(e),
        _E = (e, t, n) =>
            function (o) {
                const r = arguments,
                    s = r[r.length - 2],
                    a = s > 0 ? t.charAt(s - 1) : "";
                if ('"' === a) return o;
                if (">" === a) {
                    const e = t.lastIndexOf("<", s);
                    if (-1 !== e && -1 !== t.substring(e, s).indexOf('contenteditable="false"')) return o;
                }
                return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>";
            },
        NE = (e, t) => {
            t.hasAttribute("data-mce-caret") && (Yr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t));
        },
        RE = (e, t) => {
            const n = ((e) =>
                eo(yn(e.getBody()), "*[data-mce-caret]")
                    .map((e) => e.dom)
                    .getOrNull())(e);
            if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void NE(e, n)) : void (qr(n) && (NE(e, n), e.undoManager.add()));
        },
        AE = ir,
        OE = (e, t, n) => {
            const o = du(e.getBody()),
                r = O(Xc, 1 === t ? o.next : o.prev);
            if (n.collapsed) {
                const o = e.dom.getParent(n.startContainer, "PRE");
                if (!o) return;
                if (!r(Li.fromRangeStart(n))) {
                    const n = yn(
                        ((e) => {
                            const t = e.dom.create(Nl(e));
                            return (t.innerHTML = '<br data-mce-bogus="1">'), t;
                        })(e)
                    );
                    1 === t ? po(yn(o), n) : go(yn(o), n), e.selection.select(n.dom, !0), e.selection.collapse();
                }
            }
        },
        TE = (e, t) =>
            ((e, t) => {
                const n = t ? Jc.Forwards : Jc.Backwards,
                    o = e.selection.getRng();
                return ((e, t, n) => Bk(t, e, n, gp, pp, AE))(n, e, o).orThunk(() => (OE(e, n, o), I.none()));
            })(
                e,
                ((e, t) => {
                    const n = t ? e.getEnd(!0) : e.getStart(!0);
                    return ih(n) ? !t : t;
                })(e.selection, t)
            ).exists((t) => (Ok(e, t), !0)),
        BE = (e, t) =>
            ((e, t) => {
                const n = t ? 1 : -1,
                    o = e.selection.getRng();
                return ((e, t, n) =>
                    Dk(
                        t,
                        e,
                        n,
                        (e) => gp(e) || mp(e),
                        (e) => pp(e) || fp(e),
                        AE
                    ))(n, e, o).orThunk(() => (OE(e, n, o), I.none()));
            })(e, t).exists((t) => (Ok(e, t), !0)),
        DE = (e, t) => Lk(e, t, t ? pp : gp),
        PE = (e, t) =>
            bx(e, !t)
                .map((n) => {
                    const o = n.toRange(),
                        r = e.selection.getRng();
                    return t ? o.setStart(r.startContainer, r.startOffset) : o.setEnd(r.endContainer, r.endOffset), o;
                })
                .exists((t) => (Ok(e, t), !0)),
        LE = (e) => H(["figcaption"], Ht(e)),
        ME = (e, t) =>
            !!e.selection.isCollapsed() &&
            ((e, t) => {
                const n = yn(e.getBody()),
                    o = Li.fromRangeStart(e.selection.getRng());
                return ((e, t) => {
                    const n = O(En, t);
                    return Jn(yn(e.container()), xr, n).filter(LE);
                })(o, n).exists(() => {
                    if (((e, t, n) => (t ? gk(e.dom, n) : fk(e.dom, n)))(n, t, o)) {
                        const o = EE(e, n, t ? bo : ho);
                        return e.selection.setRng(o), !0;
                    }
                    return !1;
                });
            })(e, t),
        IE = (e, t) =>
            ((e, t) =>
                t
                    ? I.from(e.dom.getParent(e.selection.getNode(), "details"))
                          .map((t) =>
                              ((e, t) => {
                                  const n = e.selection.getRng(),
                                      o = Li.fromRangeStart(n);
                                  return !(e.getBody().lastChild !== t || !gk(t, o) || (e.execCommand("InsertNewBlockAfter"), 0));
                              })(e, t)
                          )
                          .getOr(!1)
                    : I.from(e.dom.getParent(e.selection.getNode(), "summary"))
                          .bind((t) =>
                              I.from(e.dom.getParent(t, "details")).map((n) =>
                                  ((e, t, n) => {
                                      const o = e.selection.getRng(),
                                          r = Li.fromRangeStart(o);
                                      return !(e.getBody().firstChild !== t || !fk(n, r) || (e.execCommand("InsertNewBlockBefore"), 0));
                                  })(e, n, t)
                              )
                          )
                          .getOr(!1))(e, t),
        FE = { shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0 },
        UE = (e, t) => t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey,
        zE = (e, ...t) => () => e.apply(null, t),
        jE = (e, t) => J(((e, t) => te(((e) => q(e, (e) => ({ ...FE, ...e })))(e), (e) => (UE(e, t) ? [e] : [])))(e, t), (e) => e.action()),
        HE = (e, t) => ue(((e, t) => te(((e) => q(e, (e) => ({ ...FE, ...e })))(e), (e) => (UE(e, t) ? [e] : [])))(e, t), (e) => e.action()),
        $E = (e, t) => {
            const n = t ? Jc.Forwards : Jc.Backwards,
                o = e.selection.getRng();
            return Bk(e, n, o, cp, up, cr).exists((t) => (Ok(e, t), !0));
        },
        qE = (e, t) => {
            const n = t ? 1 : -1,
                o = e.selection.getRng();
            return Dk(e, n, o, cp, up, cr).exists((t) => (Ok(e, t), !0));
        },
        VE = (e, t) => Lk(e, t, t ? up : cp),
        WE = al([{ none: ["current"] }, { first: ["current"] }, { middle: ["current", "target"] }, { last: ["current"] }]),
        KE = { ...WE, none: (e) => WE.none(e) },
        GE = (e, t, n) => te(Mn(e), (e) => (xn(e, t) ? (n(e) ? [e] : []) : GE(e, t, n))),
        YE = (e, t) => to(e, "table", t),
        XE = (e, t, n, o, r = M) => {
            const s = 1 === o;
            if (!s && n <= 0) return KE.first(e[0]);
            if (s && n >= e.length - 1) return KE.last(e[e.length - 1]);
            {
                const s = n + o,
                    a = e[s];
                return r(a) ? KE.middle(t, a) : XE(e, t, s, o, r);
            }
        },
        QE = (e, t) =>
            YE(e, t).bind((t) => {
                const n = GE(t, "th,td", M);
                return Z(n, (t) => En(e, t)).map((e) => ({ index: e, all: n }));
            }),
        JE = (e, t, n, o, r) => {
            const s = Fo(yn(n), "td,th,caption").map((e) => e.dom),
                a = G(
                    ((e, t) =>
                        te(t, (t) => {
                            const n = ((e, t) => ({ left: e.left - t, top: e.top - t, right: e.right + -2, bottom: e.bottom + -2, width: e.width + t, height: e.height + t }))(li(t.getBoundingClientRect()), -1);
                            return [
                                { x: n.left, y: e(n), cell: t },
                                { x: n.right, y: e(n), cell: t },
                            ];
                        }))(e, s),
                    (e) => t(e, r)
                );
            return ((e, t, n) =>
                X(
                    e,
                    (e, o) =>
                        e.fold(
                            () => I.some(o),
                            (e) => {
                                const r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                                    s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
                                return I.some(s < r ? o : e);
                            }
                        ),
                    I.none()
                ))(a, o, r).map((e) => e.cell);
        },
        ZE = O(
            JE,
            (e) => e.bottom,
            (e, t) => e.y < t
        ),
        eS = O(
            JE,
            (e) => e.top,
            (e, t) => e.y > t
        ),
        tS = (e, t, n) => {
            const o = e(t, n);
            return ((e) => e.breakType === tk.Wrap && 0 === e.positions.length)(o) || (!rr(n.getNode()) && ((e) => e.breakType === tk.Br && 1 === e.positions.length)(o))
                ? !((e, t, n) => n.breakAt.exists((n) => e(t, n).breakAt.isSome()))(e, t, o)
                : o.breakAt.isNone();
        },
        nS = O(tS, dk),
        oS = O(tS, ck),
        rS = (e, t, n, o) => {
            const r = e.selection.getRng(),
                s = t ? 1 : -1;
            return !(
                !xc() ||
                !((e, t, n) => {
                    const o = Li.fromRangeStart(t);
                    return hu(!e, n).exists((e) => e.isEqual(o));
                })(t, r, n) ||
                (cx(s, e, n, !t, !1).each((t) => {
                    Ok(e, t);
                }),
                0)
            );
        },
        sS = (e, t, n) => {
            const o = ((e, t) => {
                    const n = t.getNode(e);
                    return Yo(n) ? I.some(n) : I.none();
                })(!!t, n),
                r = !1 === t;
            o.fold(
                () => Ok(e, n.toRange()),
                (o) =>
                    hu(r, e.getBody())
                        .filter((e) => e.isEqual(n))
                        .fold(
                            () => Ok(e, n.toRange()),
                            (n) =>
                                ((e, t, n) => {
                                    t.undoManager.transact(() => {
                                        const o = e ? po : go,
                                            r = EE(t, yn(n), o);
                                        Ok(t, r);
                                    });
                                })(t, e, o)
                        )
            );
        },
        aS = (e, t, n, o) => {
            const r = e.selection.getRng(),
                s = Li.fromRangeStart(r),
                a = e.getBody();
            if (!t && nS(o, s)) {
                const o = ((e, t, n) =>
                    ((e, t) =>
                        le(t.getClientRects())
                            .bind((t) => ZE(e, t.left, t.top))
                            .bind((e) => {
                                return lk(
                                    Cu((n = e))
                                        .map((e) => dk(n, e).positions.concat(e))
                                        .getOr([]),
                                    t
                                );
                                var n;
                            }))(t, n)
                        .orThunk(() => le(n.getClientRects()).bind((n) => ik(uk(e, Li.before(t)), n.left)))
                        .getOr(Li.before(t)))(a, n, s);
                return sS(e, t, o), !0;
            }
            if (t && oS(o, s)) {
                const o = ((e, t, n) =>
                    ((e, t) =>
                        de(t.getClientRects())
                            .bind((t) => eS(e, t.left, t.top))
                            .bind((e) => {
                                return lk(
                                    yu((n = e))
                                        .map((e) => [e].concat(ck(n, e).positions))
                                        .getOr([]),
                                    t
                                );
                                var n;
                            }))(t, n)
                        .orThunk(() => le(n.getClientRects()).bind((n) => ik(mk(e, Li.after(t)), n.left)))
                        .getOr(Li.after(t)))(a, n, s);
                return sS(e, t, o), !0;
            }
            return !1;
        },
        iS = (e, t, n) =>
            I.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                .bind((o) => I.from(e.dom.getParent(o, "table")).map((r) => n(e, t, r, o)))
                .getOr(!1),
        lS = (e, t) => iS(e, t, rS),
        dS = (e, t) => iS(e, t, aS),
        cS = (e, t, n) =>
            n.fold(
                I.none,
                I.none,
                (e, t) => {
                    return ((n = t),
                    ((e, t) => {
                        const n = (e) => {
                            for (let o = 0; o < e.childNodes.length; o++) {
                                const r = yn(e.childNodes[o]);
                                if (t(r)) return I.some(r);
                                const s = n(e.childNodes[o]);
                                if (s.isSome()) return s;
                            }
                            return I.none();
                        };
                        return n(e.dom);
                    })(n, Og)).map((e) =>
                        ((e) => {
                            const t = hf.exact(e, 0, e, 0);
                            return wf(t);
                        })(e)
                    );
                    var n;
                },
                (n) => (e.execCommand("mceTableInsertRowAfter"), uS(e, t, n))
            ),
        uS = (e, t, n) => {
            return cS(
                e,
                t,
                ((r = no),
                QE((o = n), void 0).fold(
                    () => KE.none(o),
                    (e) => XE(e.all, o, e.index, 1, r)
                ))
            );
            var o, r;
        },
        mS = (e, t, n) => {
            return cS(
                e,
                t,
                ((r = no),
                QE((o = n), void 0).fold(
                    () => KE.none(),
                    (e) => XE(e.all, o, e.index, -1, r)
                ))
            );
            var o, r;
        },
        fS = (e, t) => {
            const n = ["table", "li", "dl"],
                o = yn(e.getBody()),
                r = (e) => {
                    const t = Ht(e);
                    return En(e, o) || H(n, t);
                },
                s = e.selection.getRng();
            return ((e, t) => ((e, t, n = L) => (n(t) ? I.none() : H(e, Ht(t)) ? I.some(t) : Zn(t, e.join(","), (e) => xn(e, "table") || n(e))))(["td", "th"], e, t))(yn(t ? s.endContainer : s.startContainer), r)
                .map(
                    (n) => (
                        YE(n, r).each((t) => {
                            e.model.table.clearSelectedCells(t.dom);
                        }),
                        e.selection.collapse(!t),
                        (t ? uS : mS)(e, r, n).each((t) => {
                            e.selection.setRng(t);
                        }),
                        !0
                    )
                )
                .getOr(!1);
        },
        gS = (e, t) => ({ container: e, offset: t }),
        pS = Oa.DOM,
        hS = (e) => (t) => (e === t ? -1 : 0),
        bS = (e, t, n) => {
            if (Jo(e) && t >= 0) return I.some(gS(e, t));
            {
                const o = ai(pS);
                return I.from(o.backwards(e, t, hS(e), n)).map((e) => gS(e.container, e.container.data.length));
            }
        },
        vS = (e, t, n) => {
            if (!Jo(e)) return I.none();
            const o = e.data;
            if (t >= 0 && t <= o.length) return I.some(gS(e, t));
            {
                const o = ai(pS);
                return I.from(o.backwards(e, t, hS(e), n)).bind((e) => {
                    const o = e.container.data;
                    return vS(e.container, t + o.length, n);
                });
            }
        },
        yS = (e, t, n) => {
            if (!Jo(e)) return I.none();
            const o = e.data;
            if (t <= o.length) return I.some(gS(e, t));
            {
                const r = ai(pS);
                return I.from(r.forwards(e, t, hS(e), n)).bind((e) => yS(e.container, t - o.length, n));
            }
        },
        CS = (e, t, n, o, r) => {
            const s = ai(e, ((e) => (t) => e.isBlock(t) || H(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t))(e));
            return I.from(s.backwards(t, n, o, r));
        },
        wS = (e) => Fr(e.toString().replace(/\u00A0/g, " ")),
        xS = (e) => "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e),
        kS = (e, t) => e.substring(t.length),
        ES = (e, t, n, o = 0) => {
            return ((r = yn(t.startContainer)), to(r, Tg)).fold(
                () =>
                    ((e, t, n, o = 0) => {
                        if (!(r = t).collapsed || !Jo(r.startContainer)) return I.none();
                        var r;
                        const s = { text: "", offset: 0 },
                            a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
                        return CS(
                            e,
                            t.startContainer,
                            t.startOffset,
                            (e, t, o) => (
                                (s.text = o + s.text),
                                (s.offset += t),
                                ((e, t, n) => {
                                    let o;
                                    const r = n.charAt(0);
                                    for (o = t - 1; o >= 0; o--) {
                                        const s = e.charAt(o);
                                        if (xS(s)) return I.none();
                                        if (r === s && je(e, n, o, t)) break;
                                    }
                                    return I.some(o);
                                })(s.text, s.offset, n).getOr(t)
                            ),
                            a
                        ).bind((e) => {
                            const r = t.cloneRange();
                            if ((r.setStart(e.container, e.offset), r.setEnd(t.endContainer, t.endOffset), r.collapsed)) return I.none();
                            const s = wS(r);
                            return 0 !== s.lastIndexOf(n) || kS(s, n).length < o ? I.none() : I.some({ text: kS(s, n), range: r, trigger: n });
                        });
                    })(e, t, n, o),
                (t) => {
                    const o = e.createRng();
                    o.selectNode(t.dom);
                    const r = wS(o);
                    return I.some({ range: o, text: kS(r, n), trigger: n });
                }
            );
            var r;
        },
        SS = (e) => {
            if (((e) => 3 === e.nodeType)(e)) return gS(e, e.data.length);
            {
                const t = e.childNodes;
                return t.length > 0 ? SS(t[t.length - 1]) : gS(e, t.length);
            }
        },
        _S = (e, t) => {
            const n = e.childNodes;
            return n.length > 0 && t < n.length ? _S(n[t], 0) : n.length > 0 && ((e) => 1 === e.nodeType)(e) && n.length === t ? SS(n[n.length - 1]) : gS(e, t);
        },
        NS = (e, t, n, o = {}) => {
            var r;
            const s = t(),
                a = null !== (r = e.selection.getRng().startContainer.nodeValue) && void 0 !== r ? r : "",
                i = G(
                    s.lookupByTrigger(n.trigger),
                    (t) =>
                        n.text.length >= t.minChars &&
                        t.matches.getOrThunk(() =>
                            ((e) => (t) => {
                                const n = _S(t.startContainer, t.startOffset);
                                return !((e, t) => {
                                    var n;
                                    const o = null !== (n = e.getParent(t.container, e.isBlock)) && void 0 !== n ? n : e.getRoot();
                                    return CS(e, t.container, t.offset, (e, t) => (0 === t ? -1 : t), o)
                                        .filter((e) => {
                                            const t = e.container.data.charAt(e.offset - 1);
                                            return !xS(t);
                                        })
                                        .isSome();
                                })(e, n);
                            })(e.dom)
                        )(n.range, a, n.text)
                );
            if (0 === i.length) return I.none();
            const l = Promise.all(q(i, (e) => e.fetch(n.text, e.maxResults, o).then((t) => ({ matchText: n.text, items: t, columns: e.columns, onAction: e.onAction, highlightOn: e.highlightOn }))));
            return I.some({ lookupData: l, context: n });
        };
    var RS;
    !(function (e) {
        (e[(e.Error = 0)] = "Error"), (e[(e.Value = 1)] = "Value");
    })(RS || (RS = {}));
    const AS = (e, t, n) => (e.stype === RS.Error ? t(e.serror) : n(e.svalue)),
        OS = (e) => ({ stype: RS.Value, svalue: e }),
        TS = (e) => ({ stype: RS.Error, serror: e }),
        BS = AS,
        DS = (e) => (f(e) && me(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2)),
        PS = (e, t) => TS([{ path: e, getErrorInfo: t }]),
        LS = (e, t) => ({
            extract: (n, o) =>
                xe(o, e).fold(
                    () => ((e, t) => PS(e, () => 'Choice schema did not contain choice key: "' + t + '"'))(n, e),
                    (e) =>
                        ((e, t, n, o) =>
                            xe(n, o).fold(
                                () => ((e, t, n) => PS(e, () => 'The chosen schema: "' + n + '" did not exist in branches: ' + DS(t)))(e, n, o),
                                (n) => n.extract(e.concat(["branch: " + o]), t)
                            ))(n, o, t, e)
                ),
            toString: () => "chooseOn(" + e + "). Possible values: " + me(t),
        }),
        MS = (e) => (...t) => {
            if (0 === t.length) throw new Error("Can't merge zero objects");
            const n = {};
            for (let o = 0; o < t.length; o++) {
                const r = t[o];
                for (const t in r) ke(r, t) && (n[t] = e(n[t], r[t]));
            }
            return n;
        },
        IS = MS((e, t) => (g(e) && g(t) ? IS(e, t) : t)),
        FS = (MS((e, t) => t), (e) => ({ tag: "defaultedThunk", process: N(e) })),
        US = (e) => {
            const t = ((e) => {
                const t = [],
                    n = [];
                return (
                    V(e, (e) => {
                        AS(
                            e,
                            (e) => n.push(e),
                            (e) => t.push(e)
                        );
                    }),
                    { values: t, errors: n }
                );
            })(e);
            return t.errors.length > 0 ? ((n = t.errors), S(TS, ee)(n)) : OS(t.values);
            var n;
        },
        zS = (e, t, n) => {
            switch (e.tag) {
                case "field":
                    return t(e.key, e.newKey, e.presence, e.prop);
                case "custom":
                    return n(e.newKey, e.instantiator);
            }
        },
        jS = (e) => ({
            extract: (t, n) => {
                return (o = e(n)), (r = (e) => ((e, t) => PS(e, N(t)))(t, e)), o.stype === RS.Error ? r(o.serror) : o;
                var o, r;
            },
            toString: N("val"),
        }),
        HS = jS(OS),
        $S = (e, t, n, o) => o(xe(e, t).getOrThunk(() => n(e))),
        qS = (e, t, n, o, r) => {
            const s = (e) => r.extract(t.concat([o]), e),
                a = (e) =>
                    e.fold(
                        () => OS(I.none()),
                        (e) => {
                            const n = r.extract(t.concat([o]), e);
                            return (s = n), (a = I.some), s.stype === RS.Value ? { stype: RS.Value, svalue: a(s.svalue) } : s;
                            var s, a;
                        }
                    );
            switch (e.tag) {
                case "required":
                    return ((e, t, n, o) => xe(t, n).fold(() => ((e, t, n) => PS(e, () => 'Could not find valid *required* value for "' + t + '" in ' + DS(n)))(e, n, t), o))(t, n, o, s);
                case "defaultedThunk":
                    return $S(n, o, e.process, s);
                case "option":
                    return ((e, t, n) => n(xe(e, t)))(n, o, a);
                case "defaultedOptionThunk":
                    return ((e, t, n, o) => o(xe(e, t).map((t) => (!0 === t ? n(e) : t))))(n, o, e.process, a);
                case "mergeWithThunk":
                    return $S(n, o, N({}), (t) => {
                        const o = IS(e.process(n), t);
                        return s(o);
                    });
            }
        },
        VS = (e) => ({
            extract: (t, n) =>
                ((e, t, n) => {
                    const o = {},
                        r = [];
                    for (const s of n)
                        zS(
                            s,
                            (n, s, a, i) => {
                                const l = qS(a, e, t, n, i);
                                BS(
                                    l,
                                    (e) => {
                                        r.push(...e);
                                    },
                                    (e) => {
                                        o[s] = e;
                                    }
                                );
                            },
                            (e, n) => {
                                o[e] = n(t);
                            }
                        );
                    return r.length > 0 ? TS(r) : OS(o);
                })(t, n, e),
            toString: () => {
                const t = q(e, (e) =>
                    zS(
                        e,
                        (e, t, n, o) => e + " -> " + o.toString(),
                        (e, t) => "state(" + e + ")"
                    )
                );
                return "obj{\n" + t.join("\n") + "}";
            },
        }),
        WS = (e) => ({
            extract: (t, n) => {
                const o = q(n, (n, o) => e.extract(t.concat(["[" + o + "]"]), n));
                return US(o);
            },
            toString: () => "array(" + e.toString() + ")",
        }),
        KS = (e, t, n) => {
            return (o = ((e, t, n) => ((e, t) => (e.stype === RS.Error ? { stype: RS.Error, serror: t(e.serror) } : e))(t.extract([e], n), (e) => ({ input: n, errors: e })))(e, t, n)), AS(o, sl.error, sl.value);
            var o;
        },
        GS = (e, t) => LS(e, pe(t, VS)),
        YS = N(HS),
        XS = (e, t) =>
            jS((n) => {
                const o = typeof n;
                return e(n) ? OS(n) : TS(`Expected type: ${t} but got: ${o}`);
            }),
        QS = XS(x, "number"),
        JS = XS(m, "string"),
        ZS = XS(b, "boolean"),
        e_ = XS(w, "function"),
        t_ = (e, t, n, o) => ({ tag: "field", key: e, newKey: t, presence: n, prop: o }),
        n_ = (e, t) => ({ tag: "custom", newKey: e, instantiator: t }),
        o_ = (e, t) => t_(e, e, { tag: "required", process: {} }, t),
        r_ = (e) => o_(e, JS),
        s_ = (e) => o_(e, e_),
        a_ = (e, t) => t_(e, e, { tag: "option", process: {} }, t),
        i_ = (e) => a_(e, JS),
        l_ = (e, t, n) => t_(e, e, FS(t), n),
        d_ = (e, t) => l_(e, t, QS),
        c_ = (e, t, n) =>
            l_(
                e,
                t,
                ((e) => {
                    return (t = (t) => (H(e, t) ? sl.value(t) : sl.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`))), jS((e) => t(e).fold(TS, OS));
                    var t;
                })(n)
            ),
        u_ = (e, t) => l_(e, t, ZS),
        m_ = (e, t) => l_(e, t, e_),
        f_ = r_("type"),
        g_ = s_("fetch"),
        p_ = s_("onAction"),
        h_ = m_("onSetup", () => E),
        b_ = i_("text"),
        v_ = i_("icon"),
        y_ = i_("tooltip"),
        C_ = i_("label"),
        w_ = u_("active", !1),
        x_ = u_("enabled", !0),
        k_ = u_("primary", !1),
        E_ = (e) => ((e, t) => l_("type", t, JS))(0, e),
        S_ = VS([f_, r_("trigger"), d_("minChars", 1), (1, ((e, t) => t_(e, e, FS(1), YS()))("columns")), d_("maxResults", 10), ("matches", a_("matches", e_)), g_, p_, ((__ = JS), l_("highlightOn", [], WS(__)))]);
    var __;
    const N_ = [x_, y_, v_, b_, h_],
        R_ = [w_].concat(N_),
        A_ = [m_("predicate", L), c_("scope", "node", ["node", "editor"]), c_("position", "selection", ["node", "selection", "line"])],
        O_ = N_.concat([E_("contextformbutton"), k_, p_, n_("original", R)]),
        T_ = R_.concat([E_("contextformbutton"), k_, p_, n_("original", R)]),
        B_ = N_.concat([E_("contextformbutton")]),
        D_ = R_.concat([E_("contextformtogglebutton")]),
        P_ = GS("type", { contextformbutton: O_, contextformtogglebutton: T_ });
    VS([E_("contextform"), m_("initValue", N("")), C_, ((e, t) => t_(e, e, { tag: "required", process: {} }, WS(t)))("commands", P_), a_("launch", GS("type", { contextformbutton: B_, contextformtogglebutton: D_ }))].concat(A_));
    const L_ = (e) => {
            const t = e.ui.registry.getAll().popups,
                n = pe(t, (e) => {
                    return ((t = e), KS("Autocompleter", S_, { trigger: t.ch, ...t })).fold((e) => {
                        throw new Error(
                            "Errors: \n" +
                                ((e) => {
                                    const t = e.length > 10 ? e.slice(0, 10).concat([{ path: [], getErrorInfo: N("... (only showing first ten failures)") }]) : e;
                                    return q(t, (e) => "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo());
                                })((t = e).errors).join("\n") +
                                "\n\nInput object: " +
                                DS(t.input)
                        );
                        var t;
                    }, R);
                    var t;
                }),
                o = Se(Ce(n, (e) => e.trigger)),
                r = we(n);
            return { dataset: n, triggers: o, lookupByTrigger: (e) => G(r, (t) => t.trigger === e) };
        },
        M_ = (e) => {
            const t = za(),
                n = Da(!1),
                o = t.isSet,
                r = () => {
                    o() &&
                        (((e) => {
                            FC(e).autocompleter.removeDecoration();
                        })(e),
                        ((e) => {
                            e.dispatch("AutocompleterEnd");
                        })(e),
                        n.set(!1),
                        t.clear());
                },
                s = Pe(() => L_(e)),
                a = (a) => {
                    ((n) =>
                        t
                            .get()
                            .map((t) => ES(e.dom, e.selection.getRng(), t.trigger).bind((t) => NS(e, s, t, n)))
                            .getOrThunk(() =>
                                ((e, t) => {
                                    const n = t(),
                                        o = e.selection.getRng();
                                    return ((e, t, n) => ue(n.triggers, (n) => ES(e, t, n)))(e.dom, o, n).bind((n) => NS(e, t, n));
                                })(e, s)
                            ))(a).fold(r, (s) => {
                        ((n) => {
                            o() ||
                                (((e, t) => {
                                    FC(e).autocompleter.addDecoration(t);
                                })(e, n.range),
                                t.set({ trigger: n.trigger, matchLength: n.text.length }));
                        })(s.context),
                            s.lookupData.then((o) => {
                                t.get().map((a) => {
                                    const i = s.context;
                                    a.trigger === i.trigger &&
                                        (i.text.length - a.matchLength >= 10
                                            ? r()
                                            : (t.set({ ...a, matchLength: i.text.length }),
                                              n.get()
                                                  ? ((e, t) => {
                                                        e.dispatch("AutocompleterUpdate", t);
                                                    })(e, { lookupData: o })
                                                  : (n.set(!0),
                                                    ((e, t) => {
                                                        e.dispatch("AutocompleterStart", t);
                                                    })(e, { lookupData: o }))));
                                });
                            });
                    });
                };
            e.addCommand("mceAutocompleterReload", (e, t) => {
                const n = f(t) ? t.fetchOptions : {};
                a(n);
            }),
                e.addCommand("mceAutocompleterClose", r),
                ((e, t) => {
                    const n = Ha(t.load, 50);
                    e.on("keypress compositionend", (e) => {
                        27 !== e.which && n.throttle();
                    }),
                        e.on("keydown", (e) => {
                            const o = e.which;
                            8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary();
                        }),
                        e.on("remove", n.cancel);
                })(e, { cancelIfNecessary: r, load: a });
        },
        I_ = xt().browser.isSafari(),
        F_ = (e) => Pr(yn(e)),
        U_ = (e, t) => {
            var n;
            return 0 === e.startOffset && e.endOffset === (null === (n = t.textContent) || void 0 === n ? void 0 : n.length);
        },
        z_ = (e, t) => I.from(e.getParent(t.container(), "details")),
        j_ = (e, t) => z_(e, t).isSome(),
        H_ = (e, t) => {
            const n = t.getNode();
            v(n) || e.selection.setCursorLocation(n, t.offset());
        },
        $_ = (e, t, n) => {
            const o = e.dom.getParent(t.container(), "details");
            if (o && !o.open) {
                const t = e.dom.select("summary", o)[0];
                t && (n ? yu(t) : Cu(t)).each((t) => H_(e, t));
            } else H_(e, t);
        },
        q_ = (e, t, n) => {
            const { dom: o, selection: r } = e,
                s = e.getBody();
            if ("character" === n) {
                const n = Li.fromRangeStart(r.getRng()),
                    a = o.getParent(n.container(), o.isBlock),
                    i = z_(o, n),
                    l = a && o.isEmpty(a),
                    d = h(null == a ? void 0 : a.previousSibling),
                    c = h(null == a ? void 0 : a.nextSibling);
                return (
                    !!(l && (t ? c : d) && gu(!t, s, n).exists((e) => j_(o, e) && !Lt(i, z_(o, e)))) ||
                    gu(t, s, n).fold(L, (n) => {
                        const r = z_(o, n);
                        if (j_(o, n) && !Lt(i, r)) {
                            if ((t || $_(e, n, !1), a && l)) {
                                if (t && d) return !0;
                                if (!t && c) return !0;
                                $_(e, n, t), e.dom.remove(a);
                            }
                            return !0;
                        }
                        return !1;
                    })
                );
            }
            return !1;
        },
        V_ = (e, t, n, o) => {
            const r = e.selection.getRng(),
                s = Li.fromRangeStart(r),
                a = e.getBody();
            return "selection" === o
                ? ((e, t) => {
                      const n = t.startSummary.exists((t) => t.contains(e.startContainer)),
                          o = t.startSummary.exists((t) => t.contains(e.endContainer)),
                          r = t.startDetails.forall((e) => t.endDetails.forall((t) => e !== t));
                      return ((n || o) && !(n && o)) || r;
                  })(r, t)
                : n
                ? ((e, t) => t.startSummary.exists((t) => ((e, t) => Cu(t).exists((n) => (rr(n.getNode()) && vu(t, n).exists((t) => t.isEqual(e))) || n.isEqual(e)))(e, t)))(s, t) ||
                  ((e, t, n) => n.startDetails.exists((n) => bu(e, t).forall((e) => !n.contains(e.container()))))(a, s, t)
                : ((e, t) => t.startSummary.exists((t) => ((e, t) => yu(t).exists((t) => t.isEqual(e)))(e, t)))(s, t) ||
                  ((e, t) => t.startDetails.exists((n) => vu(n, e).forall((n) => t.startSummary.exists((t) => !t.contains(e.container()) && t.contains(n.container())))))(s, t);
        },
        W_ = (e, t, n) =>
            ((e, t, n) =>
                ((e, t) => {
                    const n = I.from(e.getParent(t.startContainer, "details")),
                        o = I.from(e.getParent(t.endContainer, "details"));
                    if (n.isSome() || o.isSome()) {
                        const t = n.bind((t) => I.from(e.select("summary", t)[0]));
                        return I.some({ startSummary: t, startDetails: n, endDetails: o });
                    }
                    return I.none();
                })(e.dom, e.selection.getRng()).fold(
                    () => q_(e, t, n),
                    (o) => V_(e, o, t, n) || q_(e, t, n)
                ))(e, t, n) ||
            (I_ &&
                ((e, t, n) => {
                    const o = e.selection,
                        r = o.getNode(),
                        s = o.getRng(),
                        a = Li.fromRangeStart(s);
                    return (
                        !!fr(r) &&
                        (("selection" === n && U_(s, r)) || bh(t, a, r)
                            ? F_(r)
                            : e.undoManager.transact(() => {
                                  const s = o.getSel();
                                  let { anchorNode: a, anchorOffset: i, focusNode: l, focusOffset: d } = null != s ? s : {};
                                  const c = () => {
                                          C(a) && C(i) && C(l) && C(d) && (null == s || s.setBaseAndExtent(a, i, l, d));
                                      },
                                      u = (e, t) => {
                                          V(e.childNodes, (e) => {
                                              rm(e) && t.appendChild(e);
                                          });
                                      },
                                      m = e.dom.create("span", { "data-mce-bogus": "1" });
                                  u(r, m),
                                      r.appendChild(m),
                                      c(),
                                      ("word" !== n && "line" !== n) || null == s || s.modify("extend", t ? "right" : "left", n),
                                      !o.isCollapsed() && U_(o.getRng(), m)
                                          ? F_(r)
                                          : (e.execCommand(t ? "ForwardDelete" : "Delete"),
                                            (a = null == s ? void 0 : s.anchorNode),
                                            (i = null == s ? void 0 : s.anchorOffset),
                                            (l = null == s ? void 0 : s.focusNode),
                                            (d = null == s ? void 0 : s.focusOffset),
                                            u(m, r),
                                            c()),
                                      e.dom.remove(m);
                              }),
                        !0)
                    );
                })(e, t, n))
                ? I.some(E)
                : I.none(),
        K_ = (e) => (t, n, o = {}) => {
            const r = t.getBody(),
                s = {
                    bubbles: !0,
                    composed: !0,
                    data: null,
                    isComposing: !1,
                    detail: 0,
                    view: null,
                    target: r,
                    currentTarget: r,
                    eventPhase: Event.AT_TARGET,
                    originalTarget: r,
                    explicitOriginalTarget: r,
                    isTrusted: !1,
                    srcElement: r,
                    cancelable: !1,
                    preventDefault: E,
                    inputType: n,
                },
                a = fa(new InputEvent(e));
            return t.dispatch(e, { ...a, ...s, ...o });
        },
        G_ = K_("input"),
        Y_ = K_("beforeinput"),
        X_ = xt(),
        Q_ = X_.os,
        J_ = Q_.isMacOS() || Q_.isiOS(),
        Z_ = X_.browser.isFirefox(),
        eN = (e, t) => {
            const n = e.dom,
                o = e.schema.getMoveCaretBeforeOnEnterElements();
            if (!t) return;
            if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                const e = ((e) => {
                    for (; e; ) {
                        if ($o(e) || (Jo(e) && e.data && /[\r\n\s]/.test(e.data))) return e;
                        e = e.nextSibling;
                    }
                    return null;
                })(t.firstChild);
                e && /^(UL|OL|DL)$/.test(e.nodeName) && t.insertBefore(n.doc.createTextNode(pr), t.firstChild);
            }
            const r = n.createRng();
            if ((t.normalize(), t.hasChildNodes())) {
                const e = new zo(t, t);
                let n,
                    s = t;
                for (; (n = e.current()); ) {
                    if (Jo(n)) {
                        r.setStart(n, 0), r.setEnd(n, 0);
                        break;
                    }
                    if (o[n.nodeName.toLowerCase()]) {
                        r.setStartBefore(n), r.setEndBefore(n);
                        break;
                    }
                    (s = n), (n = e.next());
                }
                n || (r.setStart(s, 0), r.setEnd(s, 0));
            } else rr(t) ? (t.nextSibling && n.isBlock(t.nextSibling) ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t))) : (r.setStart(t, 0), r.setEnd(t, 0));
            e.selection.setRng(r), Zf(e, r);
        },
        tN = (e, t) => {
            const n = e.getRoot();
            let o,
                r = t;
            for (; r !== n && r && "false" !== e.getContentEditable(r); ) {
                if ("true" === e.getContentEditable(r)) {
                    o = r;
                    break;
                }
                r = r.parentNode;
            }
            return r !== n ? o : n;
        },
        nN = (e) => I.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)),
        oN = (e) => {
            e.innerHTML = '<br data-mce-bogus="1">';
        },
        rN = (e, t) => {
            Nl(e).toLowerCase() === t.tagName.toLowerCase() &&
                ((e, t, n) => {
                    const o = e.dom;
                    I.from(n.style)
                        .map(o.parseStyle)
                        .each((e) => {
                            const n = { ...mo(yn(t)), ...e };
                            o.setStyles(t, n);
                        });
                    const r = I.from(n.class).map((e) => e.split(/\s+/)),
                        s = I.from(t.className).map((e) => G(e.split(/\s+/), (e) => "" !== e));
                    Mt(r, s, (e, n) => {
                        const r = G(n, (t) => !H(e, t)),
                            s = [...e, ...r];
                        o.setAttrib(t, "class", s.join(" "));
                    });
                    const a = ["style", "class"],
                        i = ye(n, (e, t) => !H(a, t));
                    o.setAttribs(t, i);
                })(e, t, Rl(e));
        },
        sN = (e, t, n, o, r = !0, s) => {
            const a = e.dom,
                i = e.schema,
                l = Nl(e),
                d = n ? n.nodeName.toUpperCase() : "";
            let c = t;
            const u = i.getTextInlineElements();
            let m;
            m = s || "TABLE" === d || "HR" === d ? a.create(s || l) : n.cloneNode(!1);
            let f = m;
            if (r) {
                do {
                    if (u[c.nodeName]) {
                        if (xu(c) || Lu(c)) continue;
                        const e = c.cloneNode(!1);
                        a.setAttrib(e, "id", ""), m.hasChildNodes() ? (e.appendChild(m.firstChild), m.appendChild(e)) : ((f = e), m.appendChild(e));
                    }
                } while ((c = c.parentNode) && c !== o);
            } else a.setAttrib(m, "style", null), a.setAttrib(m, "class", null);
            return rN(e, m), oN(f), m;
        },
        aN = (e, t) => {
            const n = null == e ? void 0 : e.parentNode;
            return C(n) && n.nodeName === t;
        },
        iN = (e) => C(e) && /^(OL|UL|LI)$/.test(e.nodeName),
        lN = (e) => {
            const t = e.parentNode;
            return C((n = t)) && /^(LI|DT|DD)$/.test(n.nodeName) ? t : e;
            var n;
        },
        dN = (e, t, n) => {
            let o = e[n ? "firstChild" : "lastChild"];
            for (; o && !$o(o); ) o = o[n ? "nextSibling" : "previousSibling"];
            return o === t;
        },
        cN = (e, t) => t && "A" === t.nodeName && e.isEmpty(t),
        uN = (e, t) => e.nodeName === t || (e.previousSibling && e.previousSibling.nodeName === t),
        mN = (e, t) => C(t) && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && e.isEditable(t.parentNode) && "false" !== e.getContentEditable(t),
        fN = (e, t, n) => (Jo(t) ? (e ? (1 === n && t.data.charAt(n - 1) === Mr ? 0 : n) : n === t.data.length - 1 && t.data.charAt(n) === Mr ? t.data.length : n) : n),
        gN = {
            insert: (e, t) => {
                let n,
                    o,
                    r,
                    s,
                    a = !1;
                const i = e.dom,
                    l = e.schema.getNonEmptyElements(),
                    d = e.selection.getRng(),
                    c = Nl(e),
                    u = yn(d.startContainer),
                    f = In(u, d.startOffset),
                    g = f.exists((e) => Vt(e) && !no(e)),
                    p = d.collapsed && g,
                    b = (t) => sN(e, n, S, E, Bl(e), t),
                    v = (e) => {
                        const t = fN(e, n, o);
                        if (Jo(n) && (e ? t > 0 : t < n.data.length)) return !1;
                        if (n.parentNode === S && a && !e) return !0;
                        if (e && $o(n) && n === S.firstChild) return !0;
                        if (uN(n, "TABLE") || uN(n, "HR")) return (a && !e) || (!a && e);
                        const r = new zo(n, S);
                        let s;
                        for (Jo(n) && (e && 0 === t ? r.prev() : e || t !== n.data.length || r.next()); (s = r.current()); ) {
                            if ($o(s)) {
                                if (!s.getAttribute("data-mce-bogus")) {
                                    const e = s.nodeName.toLowerCase();
                                    if (l[e] && "br" !== e) return !1;
                                }
                            } else if (Jo(s) && !ds(s.data)) return !1;
                            e ? r.prev() : r.next();
                        }
                        return !0;
                    },
                    w = () => {
                        let t;
                        return (
                            (t = /^(H[1-6]|PRE|FIGURE)$/.test(r) && "HGROUP" !== _ ? b(c) : b()),
                            ((e, t) => {
                                const n = Dl(e);
                                return !y(t) && (m(n) ? H(Dt.explode(n), t.nodeName.toLowerCase()) : n);
                            })(e, s) &&
                            mN(i, s) &&
                            i.isEmpty(S, void 0, { includeZwsp: !0 })
                                ? (t = i.split(s, S))
                                : i.insertAfter(t, S),
                            eN(e, t),
                            t
                        );
                    };
                Of(i, d).each((e) => {
                    d.setStart(e.startContainer, e.startOffset), d.setEnd(e.endContainer, e.endOffset);
                }),
                    (n = d.startContainer),
                    (o = d.startOffset);
                const x = !(!t || !t.shiftKey),
                    k = !(!t || !t.ctrlKey);
                $o(n) && n.hasChildNodes() && !p && ((a = o > n.childNodes.length - 1), (n = n.childNodes[Math.min(o, n.childNodes.length - 1)] || n), (o = a && Jo(n) ? n.data.length : 0));
                const E = tN(i, n);
                if (
                    !E ||
                    ((e, t) => {
                        const n = e.dom.getParent(t, "ol,ul,dl");
                        return null !== n && "false" === e.dom.getContentEditableParent(n);
                    })(e, n)
                )
                    return;
                x ||
                    (n = ((e, t, n, o, r) => {
                        var s, a;
                        const i = e.dom,
                            l = null !== (s = tN(i, o)) && void 0 !== s ? s : i.getRoot();
                        let d = i.getParent(o, i.isBlock);
                        if (!d || !mN(i, d)) {
                            if (((d = d || l), !d.hasChildNodes())) {
                                const o = i.create(t);
                                return rN(e, o), d.appendChild(o), n.setStart(o, 0), n.setEnd(o, 0), o;
                            }
                            let s,
                                c = o;
                            for (; c && c.parentNode !== d; ) c = c.parentNode;
                            for (; c && !i.isBlock(c); ) (s = c), (c = c.previousSibling);
                            const u = null === (a = null == s ? void 0 : s.parentElement) || void 0 === a ? void 0 : a.nodeName;
                            if (s && u && e.schema.isValidChild(u, t.toLowerCase())) {
                                const a = s.parentNode,
                                    l = i.create(t);
                                for (rN(e, l), a.insertBefore(l, s), c = s; c && !i.isBlock(c); ) {
                                    const e = c.nextSibling;
                                    l.appendChild(c), (c = e);
                                }
                                n.setStart(o, r), n.setEnd(o, r);
                            }
                        }
                        return o;
                    })(e, c, d, n, o));
                let S = i.getParent(n, i.isBlock) || i.getRoot();
                (s = C(null == S ? void 0 : S.parentNode) ? i.getParent(S.parentNode, i.isBlock) : null), (r = S ? S.nodeName.toUpperCase() : "");
                const _ = s ? s.nodeName.toUpperCase() : "";
                if (
                    ("LI" !== _ || k || ((S = s), (s = s.parentNode), (r = _)),
                    $o(s) &&
                        ((e, t, n) =>
                            !t &&
                            n.nodeName.toLowerCase() === Nl(e) &&
                            e.dom.isEmpty(n) &&
                            ((t, n, o) => {
                                let r = n;
                                for (; r && r !== t && h(r.nextSibling); ) {
                                    const t = r.parentElement;
                                    if (!t || ((s = t), !ke(e.schema.getTextBlockElements(), s.nodeName.toLowerCase()))) return mr(t);
                                    r = t;
                                }
                                var s;
                                return !1;
                            })(e.getBody(), n))(e, x, S))
                )
                    return ((e, t, n) => {
                        var o, r, s;
                        const a = t(Nl(e)),
                            i = ((e, t) => e.dom.getParent(t, mr))(e, n);
                        i &&
                            (e.dom.insertAfter(a, i),
                            eN(e, a),
                            (null !== (s = null === (r = null === (o = n.parentElement) || void 0 === o ? void 0 : o.childNodes) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0) > 1 && e.dom.remove(n));
                    })(e, b, S);
                if (/^(LI|DT|DD)$/.test(r) && $o(s) && i.isEmpty(S))
                    return void ((e, t, n, o, r) => {
                        const s = e.dom,
                            a = e.selection.getRng(),
                            i = n.parentNode;
                        if (n === e.getBody() || !i) return;
                        var l;
                        iN((l = n)) && iN(l.parentNode) && (r = "LI");
                        let d = t(r);
                        if (dN(n, o, !0) && dN(n, o, !1))
                            if (aN(n, "LI")) {
                                const e = lN(n);
                                s.insertAfter(d, e),
                                    ((e) => {
                                        var t;
                                        return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e;
                                    })(n)
                                        ? s.remove(e)
                                        : s.remove(n);
                            } else s.replace(d, n);
                        else if (dN(n, o, !0)) aN(n, "LI") ? (s.insertAfter(d, lN(n)), d.appendChild(s.doc.createTextNode(" ")), d.appendChild(n)) : i.insertBefore(d, n), s.remove(o);
                        else if (dN(n, o, !1)) s.insertAfter(d, lN(n)), s.remove(o);
                        else {
                            n = lN(n);
                            const e = a.cloneRange();
                            e.setStartAfter(o), e.setEndAfter(n);
                            const t = e.extractContents();
                            "LI" === r && ((e, t) => e.firstChild && "LI" === e.firstChild.nodeName)(t) ? ((d = t.firstChild), s.insertAfter(t, n)) : (s.insertAfter(t, n), s.insertAfter(d, n)), s.remove(o);
                        }
                        eN(e, d);
                    })(e, b, s, S, c);
                if (!(p || (S !== e.getBody() && mN(i, S)))) return;
                const N = S.parentNode;
                let R;
                if (p)
                    (R = b(c)),
                        f.fold(
                            () => {
                                bo(u, yn(R));
                            },
                            (e) => {
                                go(e, yn(R));
                            }
                        ),
                        e.selection.setCursorLocation(R, 0);
                else if (jr(S)) (R = Yr(S)), i.isEmpty(S) && oN(S), rN(e, R), eN(e, R);
                else if (v(!1)) R = w();
                else if (v(!0) && N) {
                    R = N.insertBefore(b(), S);
                    const t = yn(d.startContainer).dom.hasChildNodes() && d.collapsed;
                    eN(e, uN(S, "HR") || t ? R : S);
                } else {
                    const t = ((e) => {
                        const t = e.cloneRange();
                        return t.setStart(e.startContainer, fN(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, fN(!1, e.endContainer, e.endOffset)), t;
                    })(d).cloneRange();
                    t.setEndAfter(S);
                    const n = t.extractContents();
                    ((e) => {
                        V(Io(yn(e), Kt), (e) => {
                            const t = e.dom;
                            t.nodeValue = Fr(t.data);
                        });
                    })(n),
                        ((e) => {
                            let t = e;
                            do {
                                Jo(t) && (t.data = t.data.replace(/^[\r\n]+/, "")), (t = t.firstChild);
                            } while (t);
                        })(n),
                        (R = n.firstChild),
                        i.insertAfter(n, S),
                        ((e, t, n) => {
                            var o;
                            const r = [];
                            if (!n) return;
                            let s = n;
                            for (; (s = s.firstChild); ) {
                                if (e.isBlock(s)) return;
                                $o(s) && !t[s.nodeName.toLowerCase()] && r.push(s);
                            }
                            let a = r.length;
                            for (; a--; ) (s = r[a]), (!s.hasChildNodes() || (s.firstChild === s.lastChild && "" === (null === (o = s.firstChild) || void 0 === o ? void 0 : o.nodeValue)) || cN(e, s)) && e.remove(s);
                        })(i, l, R),
                        ((e, t) => {
                            t.normalize();
                            const n = t.lastChild;
                            (!n || ($o(n) && /^(left|right)$/gi.test(e.getStyle(n, "float", !0)))) && e.add(t, "br");
                        })(i, S),
                        i.isEmpty(S) && oN(S),
                        R.normalize(),
                        i.isEmpty(R) ? (i.remove(R), w()) : (rN(e, R), eN(e, R));
                }
                i.setAttrib(R, "id", ""), e.dispatch("NewBlock", { newBlock: R });
            },
            fakeEventName: "insertParagraph",
        },
        pN = (e, t, n) => {
            const o = e.dom.createRng();
            n ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), e.selection.setRng(o), Zf(e, o);
        },
        hN = (e, t) => {
            const n = bn("br");
            go(yn(t), n), e.undoManager.add();
        },
        bN = (e, t) => {
            vN(e.getBody(), t) || po(yn(t), bn("br"));
            const n = bn("br");
            po(yn(t), n), pN(e, n.dom, !1), e.undoManager.add();
        },
        vN = (e, t) => {
            return (
                (n = Li.after(t)),
                !!rr(n.getNode()) ||
                    bu(e, Li.after(t))
                        .map((e) => rr(e.getNode()))
                        .getOr(!1)
            );
            var n;
        },
        yN = (e) => e && "A" === e.nodeName && "href" in e,
        CN = (e) => e.fold(L, yN, yN, L),
        wN = (e, t) => {
            t.fold(E, O(hN, e), O(bN, e), E);
        },
        xN = {
            insert: (e, t) => {
                const n = ((e) => {
                    const t = O(ah, e),
                        n = Li.fromRangeStart(e.selection.getRng());
                    return Wx(t, e.getBody(), n).filter(CN);
                })(e);
                n.isSome()
                    ? n.each(O(wN, e))
                    : ((e, t) => {
                          const n = e.selection,
                              o = e.dom,
                              r = n.getRng();
                          let s,
                              a = !1;
                          Of(o, r).each((e) => {
                              r.setStart(e.startContainer, e.startOffset), r.setEnd(e.endContainer, e.endOffset);
                          });
                          let i = r.startOffset,
                              l = r.startContainer;
                          if ($o(l) && l.hasChildNodes()) {
                              const e = i > l.childNodes.length - 1;
                              (l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l), (i = e && Jo(l) ? l.data.length : 0);
                          }
                          let d = o.getParent(l, o.isBlock);
                          const c = d && d.parentNode ? o.getParent(d.parentNode, o.isBlock) : null,
                              u = c ? c.nodeName.toUpperCase() : "",
                              m = !(!t || !t.ctrlKey);
                          "LI" !== u || m || (d = c),
                              Jo(l) &&
                                  i >= l.data.length &&
                                  (((e, t, n) => {
                                      const o = new zo(t, n);
                                      let r;
                                      const s = e.getNonEmptyElements();
                                      for (; (r = o.next()); ) if (s[r.nodeName.toLowerCase()] || (Jo(r) && r.length > 0)) return !0;
                                      return !1;
                                  })(e.schema, l, d || o.getRoot()) ||
                                      ((s = o.create("br")), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), (a = !0))),
                              (s = o.create("br")),
                              Ii(o, r, s),
                              pN(e, s, a),
                              e.undoManager.add();
                      })(e, t);
            },
            fakeEventName: "insertLineBreak",
        },
        kN = (e, t) =>
            nN(e)
                .filter((e) => t.length > 0 && xn(yn(e), t))
                .isSome(),
        EN = al([{ br: [] }, { block: [] }, { none: [] }]),
        SN = (e, t) => ((e) => kN(e, Tl(e)))(e),
        _N = (e) => (t, n) =>
            ((e) =>
                nN(e)
                    .filter((e) => Nr(yn(e)))
                    .isSome())(t) === e,
        NN = (e, t) => (n, o) => {
            const r = ((e) => nN(e).fold(N(""), (e) => e.nodeName.toUpperCase()))(n) === e.toUpperCase();
            return r === t;
        },
        RN = (e) => {
            const t = tN(e.dom, e.selection.getStart());
            return y(t);
        },
        AN = (e) => NN("pre", e),
        ON = (e) => (t, n) => _l(t) === e,
        TN = (e, t) => ((e) => kN(e, Ol(e)))(e),
        BN = (e, t) => t,
        DN = (e) => {
            const t = Nl(e),
                n = tN(e.dom, e.selection.getStart());
            return C(n) && e.schema.isValidChild(n.nodeName, t);
        },
        PN = (e) => {
            const t = e.selection.getRng(),
                n = yn(t.startContainer),
                o = In(n, t.startOffset).map((e) => Vt(e) && !no(e));
            return t.collapsed && o.getOr(!0);
        },
        LN = (e, t) => (n, o) => (X(e, (e, t) => e && t(n, o), !0) ? I.some(t) : I.none()),
        MN = (e, t, n) => {
            t.selection.isCollapsed() ||
                ((e) => {
                    e.execCommand("delete");
                })(t),
                (C(n) && Y_(t, e.fakeEventName).isDefaultPrevented()) || (e.insert(t, n), C(n) && G_(t, e.fakeEventName));
        },
        IN = (e, t) => {
            const n = () => MN(xN, e, t),
                o = () => MN(gN, e, t),
                r = ((e, t) =>
                    Mx(
                        [
                            LN([SN], EN.none()),
                            LN([AN(!0), RN], EN.none()),
                            LN([NN("summary", !0)], EN.br()),
                            LN([AN(!0), ON(!1), BN], EN.br()),
                            LN([AN(!0), ON(!1)], EN.block()),
                            LN([AN(!0), ON(!0), BN], EN.block()),
                            LN([AN(!0), ON(!0)], EN.br()),
                            LN([_N(!0), BN], EN.br()),
                            LN([_N(!0)], EN.block()),
                            LN([TN], EN.br()),
                            LN([BN], EN.br()),
                            LN([DN], EN.block()),
                            LN([PN], EN.block()),
                        ],
                        [e, !(!t || !t.shiftKey)]
                    ).getOr(EN.none()))(e, t);
            switch (Al(e)) {
                case "linebreak":
                    r.fold(n, n, E);
                    break;
                case "block":
                    r.fold(o, o, E);
                    break;
                case "invert":
                    r.fold(o, n, E);
                    break;
                default:
                    r.fold(n, o, E);
            }
        },
        FN = xt(),
        UN = FN.os.isiOS() && FN.browser.isSafari(),
        zN = (e, t) => {
            var n;
            t.isDefaultPrevented() ||
                (t.preventDefault(),
                (n = e.undoManager).typing && ((n.typing = !1), n.add()),
                e.undoManager.transact(() => {
                    IN(e, t);
                }));
        },
        jN = xt(),
        HN = (e) => e.stopImmediatePropagation(),
        $N = (e) => e.keyCode === ef.PAGE_UP || e.keyCode === ef.PAGE_DOWN,
        qN = (e, t, n) => {
            n && !e.get() ? t.on("NodeChange", HN, !0) : !n && e.get() && t.off("NodeChange", HN), e.set(n);
        },
        VN = (e, t) => {
            const n = t.container(),
                o = t.offset();
            return Jo(n)
                ? (n.insertData(o, e), I.some(Li(n, o + e.length)))
                : Yc(t).map((n) => {
                      const o = vn(e);
                      return t.isAtEnd() ? po(n, o) : go(n, o), Li(o.dom, e.length);
                  });
        },
        WN = O(VN, pr),
        KN = O(VN, " "),
        GN = (e) => (t) => {
            e.selection.setRng(t.toRange()), e.nodeChanged();
        },
        YN = (e) => {
            const t = Li.fromRangeStart(e.selection.getRng()),
                n = yn(e.getBody());
            if (e.selection.isCollapsed()) {
                const o = O(ah, e),
                    r = Li.fromRangeStart(e.selection.getRng());
                return Wx(o, e.getBody(), r)
                    .bind(
                        ((e) => (t) =>
                            t.fold(
                                (t) => vu(e.dom, Li.before(t)),
                                (e) => yu(e),
                                (e) => Cu(e),
                                (t) => bu(e.dom, Li.after(t))
                            ))(n)
                    )
                    .map((o) => () => ((e, t) => (n) => (Fp(e, n) ? WN(t) : KN(t)))(n, t)(o).each(GN(e)));
            }
            return I.none();
        },
        XN = (e) => {
            return It(At.browser.isFirefox() && e.selection.isEditable() && ((t = e.dom), (n = e.selection.getRng().startContainer), t.isEditable(t.getParent(n, "summary"))), () => {
                const t = yn(e.getBody());
                e.selection.isCollapsed() || e.getDoc().execCommand("Delete"), ((e, t) => (Fp(e, t) ? WN(t) : KN(t)))(t, Li.fromRangeStart(e.selection.getRng())).each(GN(e));
            });
            var t, n;
        },
        QN = (e) =>
            ac(e)
                ? [
                      { keyCode: ef.TAB, action: zE(fS, e, !0) },
                      { keyCode: ef.TAB, shiftKey: !0, action: zE(fS, e, !1) },
                  ]
                : [],
        JN = (e) => {
            if ((e.addShortcut("Meta+P", "", "mcePrint"), M_(e), MC(e))) return Da(null);
            {
                const t = Hk(e);
                return (
                    ((e) => {
                        e.on("keyup compositionstart", O(RE, e));
                    })(e),
                    ((e, t) => {
                        e.on("keydown", (n) => {
                            n.isDefaultPrevented() ||
                                ((e, t, n) => {
                                    const o = At.os.isMacOS() || At.os.isiOS();
                                    jE(
                                        [
                                            { keyCode: ef.RIGHT, action: zE(TE, e, !0) },
                                            { keyCode: ef.LEFT, action: zE(TE, e, !1) },
                                            { keyCode: ef.UP, action: zE(BE, e, !1) },
                                            { keyCode: ef.DOWN, action: zE(BE, e, !0) },
                                            ...(o
                                                ? [
                                                      { keyCode: ef.UP, action: zE(PE, e, !1), metaKey: !0, shiftKey: !0 },
                                                      { keyCode: ef.DOWN, action: zE(PE, e, !0), metaKey: !0, shiftKey: !0 },
                                                  ]
                                                : []),
                                            { keyCode: ef.RIGHT, action: zE(lS, e, !0) },
                                            { keyCode: ef.LEFT, action: zE(lS, e, !1) },
                                            { keyCode: ef.UP, action: zE(dS, e, !1) },
                                            { keyCode: ef.DOWN, action: zE(dS, e, !0) },
                                            { keyCode: ef.UP, action: zE(dS, e, !1) },
                                            { keyCode: ef.UP, action: zE(IE, e, !1) },
                                            { keyCode: ef.DOWN, action: zE(IE, e, !0) },
                                            { keyCode: ef.RIGHT, action: zE($E, e, !0) },
                                            { keyCode: ef.LEFT, action: zE($E, e, !1) },
                                            { keyCode: ef.UP, action: zE(qE, e, !1) },
                                            { keyCode: ef.DOWN, action: zE(qE, e, !0) },
                                            { keyCode: ef.RIGHT, action: zE(zk, e, t, !0) },
                                            { keyCode: ef.LEFT, action: zE(zk, e, t, !1) },
                                            { keyCode: ef.RIGHT, ctrlKey: !o, altKey: o, action: zE($k, e, t) },
                                            { keyCode: ef.LEFT, ctrlKey: !o, altKey: o, action: zE(qk, e, t) },
                                            { keyCode: ef.UP, action: zE(ME, e, !1) },
                                            { keyCode: ef.DOWN, action: zE(ME, e, !0) },
                                        ],
                                        n
                                    ).each((e) => {
                                        n.preventDefault();
                                    });
                                })(e, t, n);
                        });
                    })(e, t),
                    ((e, t) => {
                        let n = !1;
                        e.on("keydown", (o) => {
                            (n = o.keyCode === ef.BACKSPACE),
                                o.isDefaultPrevented() ||
                                    ((e, t, n) => {
                                        const o = n.keyCode === ef.BACKSPACE ? "deleteContentBackward" : "deleteContentForward",
                                            r = e.selection.isCollapsed(),
                                            s = r ? "character" : "selection",
                                            a = (e) => (r ? (e ? "word" : "line") : "selection");
                                        HE(
                                            [
                                                { keyCode: ef.BACKSPACE, action: zE(pE, e) },
                                                { keyCode: ef.BACKSPACE, action: zE(Ex, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(Ex, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(hx, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(hx, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(Gk, e, t, !1) },
                                                { keyCode: ef.DELETE, action: zE(Gk, e, t, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(qh, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(qh, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(W_, e, !1, s) },
                                                { keyCode: ef.DELETE, action: zE(W_, e, !0, s) },
                                                ...(J_
                                                    ? [
                                                          { keyCode: ef.BACKSPACE, altKey: !0, action: zE(W_, e, !1, a(!0)) },
                                                          { keyCode: ef.DELETE, altKey: !0, action: zE(W_, e, !0, a(!0)) },
                                                          { keyCode: ef.BACKSPACE, metaKey: !0, action: zE(W_, e, !1, a(!1)) },
                                                      ]
                                                    : [
                                                          { keyCode: ef.BACKSPACE, ctrlKey: !0, action: zE(W_, e, !1, a(!0)) },
                                                          { keyCode: ef.DELETE, ctrlKey: !0, action: zE(W_, e, !0, a(!0)) },
                                                      ]),
                                                { keyCode: ef.BACKSPACE, action: zE(Sx, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(Sx, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(iE, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(iE, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(dx, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(dx, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(ax, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(ax, e, !0) },
                                                { keyCode: ef.BACKSPACE, action: zE(oE, e, !1) },
                                                { keyCode: ef.DELETE, action: zE(oE, e, !0) },
                                            ],
                                            n
                                        )
                                            .filter((t) => e.selection.isEditable())
                                            .each((t) => {
                                                n.preventDefault(), Y_(e, o).isDefaultPrevented() || (t(), G_(e, o));
                                            });
                                    })(e, t, o);
                        }),
                            e.on("keyup", (t) => {
                                t.isDefaultPrevented() ||
                                    ((e, t, n) => {
                                        jE(
                                            [
                                                { keyCode: ef.BACKSPACE, action: zE(kx, e) },
                                                { keyCode: ef.DELETE, action: zE(kx, e) },
                                                ...(J_
                                                    ? [{ keyCode: ef.BACKSPACE, altKey: !0, action: zE(sE, e) }, { keyCode: ef.DELETE, altKey: !0, action: zE(sE, e) }, ...(n ? [{ keyCode: Z_ ? 224 : 91, action: zE(sE, e) }] : [])]
                                                    : [
                                                          { keyCode: ef.BACKSPACE, ctrlKey: !0, action: zE(sE, e) },
                                                          { keyCode: ef.DELETE, ctrlKey: !0, action: zE(sE, e) },
                                                      ]),
                                            ],
                                            t
                                        );
                                    })(e, t, n),
                                    (n = !1);
                            });
                    })(e, t),
                    ((e) => {
                        let t = I.none();
                        e.on("keydown", (n) => {
                            n.keyCode === ef.ENTER &&
                                (UN &&
                                ((e) => {
                                    if (!e.collapsed) return !1;
                                    const t = e.startContainer;
                                    if (Jo(t)) {
                                        const n = /^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]$/,
                                            o = t.data.charAt(e.startOffset - 1);
                                        return n.test(o);
                                    }
                                    return !1;
                                })(e.selection.getRng())
                                    ? ((e) => {
                                          (t = I.some(e.selection.getBookmark())), e.undoManager.add();
                                      })(e)
                                    : zN(e, n));
                        }),
                            e.on("keyup", (n) => {
                                n.keyCode === ef.ENTER &&
                                    t.each(() =>
                                        ((e, n) => {
                                            e.undoManager.undo(), t.fold(E, (t) => e.selection.moveToBookmark(t)), zN(e, n), (t = I.none());
                                        })(e, n)
                                    );
                            });
                    })(e),
                    ((e) => {
                        e.on("keydown", (t) => {
                            t.isDefaultPrevented() ||
                                ((e, t) => {
                                    HE(
                                        [
                                            { keyCode: ef.SPACEBAR, action: zE(YN, e) },
                                            { keyCode: ef.SPACEBAR, action: zE(XN, e) },
                                        ],
                                        t
                                    ).each((n) => {
                                        t.preventDefault(), Y_(e, "insertText", { data: " " }).isDefaultPrevented() || (n(), G_(e, "insertText", { data: " " }));
                                    });
                                })(e, t);
                        });
                    })(e),
                    ((e) => {
                        e.on("input", (t) => {
                            t.isComposing ||
                                ((e) => {
                                    const t = yn(e.getBody());
                                    e.selection.isCollapsed() &&
                                        Wp(t, Li.fromRangeStart(e.selection.getRng())).each((t) => {
                                            e.selection.setRng(t.toRange());
                                        });
                                })(e);
                        });
                    })(e),
                    ((e) => {
                        e.on("keydown", (t) => {
                            t.isDefaultPrevented() ||
                                ((e, t) => {
                                    jE([...QN(e)], t).each((e) => {
                                        t.preventDefault();
                                    });
                                })(e, t);
                        });
                    })(e),
                    ((e, t) => {
                        e.on("keydown", (n) => {
                            n.isDefaultPrevented() ||
                                ((e, t, n) => {
                                    const o = At.os.isMacOS() || At.os.isiOS();
                                    jE(
                                        [
                                            { keyCode: ef.END, action: zE(DE, e, !0) },
                                            { keyCode: ef.HOME, action: zE(DE, e, !1) },
                                            ...(o
                                                ? []
                                                : [
                                                      { keyCode: ef.HOME, action: zE(PE, e, !1), ctrlKey: !0, shiftKey: !0 },
                                                      { keyCode: ef.END, action: zE(PE, e, !0), ctrlKey: !0, shiftKey: !0 },
                                                  ]),
                                            { keyCode: ef.END, action: zE(VE, e, !0) },
                                            { keyCode: ef.HOME, action: zE(VE, e, !1) },
                                            { keyCode: ef.END, action: zE(Vk, e, !0, t) },
                                            { keyCode: ef.HOME, action: zE(Vk, e, !1, t) },
                                        ],
                                        n
                                    ).each((e) => {
                                        n.preventDefault();
                                    });
                                })(e, t, n);
                        });
                    })(e, t),
                    ((e, t) => {
                        if (jN.os.isMacOS()) return;
                        const n = Da(!1);
                        e.on("keydown", (t) => {
                            $N(t) && qN(n, e, !0);
                        }),
                            e.on("keyup", (o) => {
                                o.isDefaultPrevented() ||
                                    ((e, t, n) => {
                                        jE(
                                            [
                                                { keyCode: ef.PAGE_UP, action: zE(Vk, e, !1, t) },
                                                { keyCode: ef.PAGE_DOWN, action: zE(Vk, e, !0, t) },
                                            ],
                                            n
                                        );
                                    })(e, t, o),
                                    $N(o) && n.get() && (qN(n, e, !1), e.nodeChanged());
                            });
                    })(e, t),
                    t
                );
            }
        };
    class ZN {
        constructor(e) {
            let t;
            (this.lastPath = []), (this.editor = e);
            const n = this;
            "onselectionchange" in e.getDoc() ||
                e.on("NodeChange click mouseup keyup focus", (n) => {
                    const o = e.selection.getRng(),
                        r = { startContainer: o.startContainer, startOffset: o.startOffset, endContainer: o.endContainer, endOffset: o.endOffset };
                    ("nodechange" !== n.type && kf(r, t)) || e.dispatch("SelectionChange"), (t = r);
                }),
                e.on("contextmenu", () => {
                    e.dispatch("SelectionChange");
                }),
                e.on("SelectionChange", () => {
                    const t = e.selection.getStart(!0);
                    t && tm(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({ selectionChange: !0 });
                }),
                e.on("mouseup", (t) => {
                    !t.isDefaultPrevented() &&
                        tm(e) &&
                        ("IMG" === e.selection.getNode().nodeName
                            ? mg.setEditorTimeout(e, () => {
                                  e.nodeChanged();
                              })
                            : e.nodeChanged());
                });
        }
        nodeChanged(e = {}) {
            const t = this.editor.selection;
            let n;
            if (this.editor.initialized && t && !wd(this.editor) && !this.editor.mode.isReadOnly()) {
                const o = this.editor.getBody();
                (n = t.getStart(!0) || o), (n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, o)) || (n = o);
                const r = [];
                this.editor.dom.getParent(n, (e) => e === o || (r.push(e), !1)), this.editor.dispatch("NodeChange", { ...e, element: n, parents: r });
            }
        }
        isSameElementPath(e) {
            let t;
            const n = this.editor,
                o = oe(n.dom.getParents(e, M, n.getBody()));
            if (o.length === this.lastPath.length) {
                for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--);
                if (-1 === t) return (this.lastPath = o), !0;
            }
            return (this.lastPath = o), !1;
        }
    }
    const eR = ti("image"),
        tR = ti("event"),
        nR = (e) => (t) => {
            t[tR] = e;
        },
        oR = nR(0),
        rR = nR(2),
        sR = nR(1),
        aR =
            (0,
            (e) => {
                const t = e;
                return I.from(t[tR]).exists((e) => 0 === e);
            });
    const iR = ti("mode"),
        lR = (e) => (t) => {
            t[iR] = e;
        },
        dR = (e, t) => lR(t)(e),
        cR = lR(0),
        uR = lR(2),
        mR = lR(1),
        fR = (e) => (t) => {
            const n = t;
            return I.from(n[iR]).exists((t) => t === e);
        },
        gR = fR(0),
        pR = fR(1),
        hR = ["none", "copy", "link", "move"],
        bR = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all", "uninitialized"],
        vR = () => {
            const e = new window.DataTransfer();
            let t = "move",
                n = "all";
            const o = {
                get dropEffect() {
                    return t;
                },
                set dropEffect(e) {
                    H(hR, e) && (t = e);
                },
                get effectAllowed() {
                    return n;
                },
                set effectAllowed(e) {
                    aR(o) && H(bR, e) && (n = e);
                },
                get items() {
                    return ((e, t) => ({
                        ...t,
                        get length() {
                            return t.length;
                        },
                        add: (n, o) => {
                            if (gR(e)) {
                                if (!m(n)) return t.add(n);
                                if (!v(o)) return t.add(n, o);
                            }
                            return null;
                        },
                        remove: (n) => {
                            gR(e) && t.remove(n);
                        },
                        clear: () => {
                            gR(e) && t.clear();
                        },
                    }))(o, e.items);
                },
                get files() {
                    return pR(o) ? Object.freeze({ length: 0, item: (e) => null }) : e.files;
                },
                get types() {
                    return e.types;
                },
                setDragImage: (t, n, r) => {
                    var s;
                    gR(o) && ((s = { image: t, x: n, y: r }), (o[eR] = s), e.setDragImage(t, n, r));
                },
                getData: (t) => (pR(o) ? "" : e.getData(t)),
                setData: (t, n) => {
                    gR(o) && e.setData(t, n);
                },
                clearData: (t) => {
                    gR(o) && e.clearData(t);
                },
            };
            return cR(o), o;
        },
        yR = (e, t) => e.setData("text/html", t),
        CR = "x-tinymce/html",
        wR = N(CR),
        xR = "\x3c!-- " + CR + " --\x3e",
        kR = (e) => xR + e,
        ER = (e) => -1 !== e.indexOf(xR),
        SR = "%MCEPASTEBIN%",
        _R = (e) => e.dom.get("mcepastebin"),
        NR = (e) => C(e) && "mcepastebin" === e.id,
        RR = (e) => e === SR,
        AR = (e, t) => (
            Dt.each(t, (t) => {
                e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1]);
            }),
            e
        ),
        OR = (e) =>
            AR(e, [
                /^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,
                /<!--StartFragment-->|<!--EndFragment-->/g,
                [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, (e, t, n) => (t || n ? pr : " ")],
                /<br class="Apple-interchange-newline">/g,
                /<br>$/i,
            ]),
        TR = (e, t) => ({ content: e, cancelled: t }),
        BR = (e, t) => (e.insertContent(t, { merge: Vd(e), paste: !0 }), !0),
        DR = (e) => /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e),
        PR = (e, t, n) =>
            !(e.selection.isCollapsed() || !DR(t)) &&
            ((e, t, n) => (
                e.undoManager.extra(
                    () => {
                        n(e, t);
                    },
                    () => {
                        e.execCommand("mceInsertLink", !1, t);
                    }
                ),
                !0
            ))(e, t, n),
        LR = (e, t, n) =>
            !!((e, t) => DR(t) && $(sc(e), (e) => $e(t.toLowerCase(), `.${e.toLowerCase()}`)))(e, t) &&
            ((e, t, n) => (
                e.undoManager.extra(
                    () => {
                        n(e, t);
                    },
                    () => {
                        e.insertContent('<img src="' + t + '">');
                    }
                ),
                !0
            ))(e, t, n),
        MR = ((e) => {
            let t = 0;
            return () => "mceclip" + t++;
        })(),
        IR = (e) => {
            const t = vR();
            return yR(t, e), uR(t), t;
        },
        FR = (e, t, n, o, r) => {
            const s = ((e, t, n) =>
                ((e, t, n) => {
                    const o = ((e, t, n) => e.dispatch("PastePreProcess", { content: t, internal: n }))(e, t, n),
                        r = ((e, t) => {
                            const n = oC({ sanitize: oc(e) }, e.schema);
                            n.addNodeFilter("meta", (e) => {
                                Dt.each(e, (e) => {
                                    e.remove();
                                });
                            });
                            const o = n.parse(t, { forced_root_block: !1, isRootContent: !0 });
                            return Xg({ validate: !0 }, e.schema).serialize(o);
                        })(e, o.content);
                    return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented()
                        ? ((e, t, n) => {
                              const o = e.dom.create("div", { style: "display:none" }, t),
                                  r = ((e, t, n) => e.dispatch("PastePostProcess", { node: t, internal: n }))(e, o, n);
                              return TR(r.node.innerHTML, r.isDefaultPrevented());
                          })(e, r, n)
                        : TR(r, o.isDefaultPrevented());
                })(e, t, n))(e, t, n);
            if (!s.cancelled) {
                const t = s.content,
                    n = () =>
                        ((e, t, n) => {
                            n || !Wd(e)
                                ? BR(e, t)
                                : ((e, t) => {
                                      Dt.each([PR, LR, BR], (n) => !n(e, t, BR));
                                  })(e, t);
                        })(e, t, o);
                r ? Y_(e, "insertFromPaste", { dataTransfer: IR(t) }).isDefaultPrevented() || (n(), G_(e, "insertFromPaste")) : n();
            }
        },
        UR = (e, t, n, o) => {
            const r = n || ER(t);
            FR(e, ((e) => e.replace(xR, ""))(t), r, !1, o);
        },
        zR = (e, t, n) => {
            const o = e.dom.encode(t).replace(/\r\n/g, "\n"),
                r = ((e, t, n) => {
                    const o = e.split(/\n\n/),
                        r = ((e, t) => {
                            let n = "<" + e;
                            const o = Ce(t, (e, t) => t + '="' + Zs.encodeAllRaw(e) + '"');
                            return o.length && (n += " " + o.join(" ")), n + ">";
                        })(t, n),
                        s = "</" + t + ">",
                        a = q(o, (e) => e.split(/\n/).join("<br />"));
                    return 1 === a.length ? a[0] : q(a, (e) => r + e + s).join("");
                })(ms(o, Gd(e)), Nl(e), Rl(e));
            FR(e, r, !1, !0, n);
        },
        jR = (e) => {
            const t = {};
            if (e && e.types)
                for (let n = 0; n < e.types.length; n++) {
                    const o = e.types[n];
                    try {
                        t[o] = e.getData(o);
                    } catch (e) {
                        t[o] = "";
                    }
                }
            return t;
        },
        HR = (e, t) => t in e && e[t].length > 0,
        $R = (e) => HR(e, "text/html") || HR(e, "text/plain"),
        qR = (e, t, n) => {
            const o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
            var r;
            if (Ud(e) && o) {
                const s = ((e, t) => {
                    const n = t.items ? te(ce(t.items), (e) => ("file" === e.kind ? [e.getAsFile()] : [])) : [],
                        o = t.files ? ce(t.files) : [];
                    return G(
                        n.length > 0 ? n : o,
                        ((e) => {
                            const t = sc(e);
                            return (e) =>
                                He(e.type, "image/") &&
                                $(
                                    t,
                                    (t) =>
                                        ((e) => {
                                            const t = e.toLowerCase(),
                                                n = { jpg: "jpeg", jpe: "jpeg", jfi: "jpeg", jif: "jpeg", jfif: "jpeg", pjpeg: "jpeg", pjp: "jpeg", svg: "svg+xml" };
                                            return Dt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t;
                                        })(t) === e.type
                                );
                        })(e)
                    );
                })(e, o);
                if (s.length > 0)
                    return (
                        t.preventDefault(),
                        ((r = s), Promise.all(q(r, (e) => Pv(e).then((t) => ({ file: e, uri: t }))))).then((t) => {
                            n && e.selection.setRng(n),
                                V(t, (t) => {
                                    ((e, t) => {
                                        Bv(t.uri).each(({ data: n, type: o, base64Encoded: r }) => {
                                            const s = r ? n : btoa(n),
                                                a = t.file,
                                                i = e.editorUpload.blobCache,
                                                l = i.getByData(s, o),
                                                d =
                                                    null != l
                                                        ? l
                                                        : ((e, t, n, o) => {
                                                              const r = MR(),
                                                                  s = Ll(e) && C(n.name),
                                                                  a = s
                                                                      ? ((e, t) => {
                                                                            const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
                                                                            return C(n) ? e.dom.encode(n[1]) : void 0;
                                                                        })(e, n.name)
                                                                      : r,
                                                                  i = s ? n.name : void 0,
                                                                  l = t.create(r, n, o, a, i);
                                                              return t.add(l), l;
                                                          })(e, i, a, s);
                                            UR(e, `<img src="${d.blobUri()}">`, !1, !0);
                                        });
                                    })(e, t);
                                });
                        }),
                        !0
                    );
            }
            return !1;
        },
        VR = (e, t, n, o, r) => {
            let s = OR(n);
            const a = HR(t, wR()) || ER(n),
                i = !a && ((e) => !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e))(s),
                l = DR(s);
            (RR(s) || !s.length || (i && !l)) && (o = !0),
                (o || l) &&
                    (s =
                        HR(t, "text/plain") && i
                            ? t["text/plain"]
                            : ((e) => {
                                  const t = ca(),
                                      n = oC({}, t);
                                  let o = "";
                                  const r = t.getVoidElements(),
                                      s = Dt.makeMap("script noscript style textarea video audio iframe object", " "),
                                      a = t.getBlockElements(),
                                      i = (e) => {
                                          const n = e.name,
                                              l = e;
                                          if ("br" !== n) {
                                              if ("wbr" !== n)
                                                  if ((r[n] && (o += " "), s[n])) o += " ";
                                                  else {
                                                      if ((3 === e.type && (o += e.value), !(e.name in t.getVoidElements()))) {
                                                          let t = e.firstChild;
                                                          if (t)
                                                              do {
                                                                  i(t);
                                                              } while ((t = t.next));
                                                      }
                                                      a[n] && l.next && ((o += "\n"), "p" === n && (o += "\n"));
                                                  }
                                          } else o += "\n";
                                      };
                                  return (e = AR(e, [/<!\[[^\]]+\]>/g])), i(n.parse(e)), o;
                              })(s)),
                RR(s) || (o ? zR(e, s, r) : UR(e, s, a, r));
        },
        WR = (e, t, n) => {
            ((e, t, n) => {
                let o;
                e.on("keydown", (e) => {
                    ((e) => (ef.metaKeyPressed(e) && 86 === e.keyCode) || (e.shiftKey && 45 === e.keyCode))(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode);
                }),
                    e.on("paste", (r) => {
                        if (
                            r.isDefaultPrevented() ||
                            ((e) => {
                                var t, n;
                                return At.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length);
                            })(r)
                        )
                            return;
                        const s = "text" === n.get() || o;
                        o = !1;
                        const a = jR(r.clipboardData);
                        (!$R(a) && qR(e, r, t.getLastRng() || e.selection.getRng())) ||
                            (HR(a, "text/html")
                                ? (r.preventDefault(), VR(e, a, a["text/html"], s, !0))
                                : HR(a, "text/plain") && HR(a, "text/uri-list")
                                ? (r.preventDefault(), VR(e, a, a["text/plain"], s, !0))
                                : (t.create(),
                                  mg.setEditorTimeout(
                                      e,
                                      () => {
                                          const n = t.getHtml();
                                          t.remove(), VR(e, a, n, s, !1);
                                      },
                                      0
                                  )));
                    });
            })(e, t, n),
                ((e) => {
                    const t = (e) => He(e, "webkit-fake-url"),
                        n = (e) => He(e, "data:");
                    e.parser.addNodeFilter("img", (o, r, s) => {
                        if (
                            !Ud(e) &&
                            ((e) => {
                                var t;
                                return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste);
                            })(s)
                        )
                            for (const r of o) {
                                const o = r.attr("src");
                                m(o) && !r.attr("data-mce-object") && o !== At.transparentSrc && (t(o) || (!Yd(e) && n(o))) && r.remove();
                            }
                    });
                })(e);
        },
        KR = (e, t, n, o) => {
            ((e, t, n) => {
                if (!e) return !1;
                try {
                    return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(wR(), t), !0;
                } catch (e) {
                    return !1;
                }
            })(e.clipboardData, t.html, t.text)
                ? (e.preventDefault(), o())
                : n(t.html, o);
        },
        GR = (e) => (t, n) => {
            const { dom: o, selection: r } = e,
                s = o.create("div", { contenteditable: "false", "data-mce-bogus": "all" }),
                a = o.create("div", { contenteditable: "true" }, t);
            o.setStyles(s, { position: "fixed", top: "0", left: "-3000px", width: "1000px", overflow: "hidden" }), s.appendChild(a), o.add(e.getBody(), s);
            const i = r.getRng();
            a.focus();
            const l = o.createRng();
            l.selectNodeContents(a),
                r.setRng(l),
                mg.setEditorTimeout(
                    e,
                    () => {
                        r.setRng(i), o.remove(s), n();
                    },
                    0
                );
        },
        YR = (e) => ({ html: kR(e.selection.getContent({ contextual: !0 })), text: e.selection.getContent({ format: "text" }) }),
        XR = (e) => !e.selection.isCollapsed() || ((e) => !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody()))(e),
        QR = (e, t) => {
            var n, o;
            return Df.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc());
        },
        JR = (e, t) => {
            e.focus(), t && e.selection.setRng(t);
        },
        ZR = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
        eA = (e) => Dt.trim(e).replace(ZR, Wu).toLowerCase(),
        tA = (e, t, n) => {
            const o = $d(e);
            if (n || "all" === o || !qd(e)) return t;
            const r = o ? o.split(/[, ]/) : [];
            if (r && "none" !== o) {
                const n = e.dom,
                    o = e.selection.getNode();
                t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, (e, t, s, a) => {
                    const i = n.parseStyle(n.decode(s)),
                        l = {};
                    for (let e = 0; e < r.length; e++) {
                        const t = i[r[e]];
                        let s = t,
                            a = n.getStyle(o, r[e], !0);
                        /color/.test(r[e]) && ((s = eA(s)), (a = eA(a))), a !== s && (l[r[e]] = t);
                    }
                    const d = n.serializeStyle(l, "span");
                    return d ? t + ' style="' + d + '"' + a : t + a;
                });
            } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
            return (t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, (e, t, n, o) => t + ' style="' + n + '"' + o)), t;
        },
        nA = (e) => {
            const t = Da(!1),
                n = Da(Kd(e) ? "text" : "html"),
                o = ((e) => {
                    const t = Da(null);
                    return {
                        create: () =>
                            ((e, t) => {
                                const { dom: n, selection: o } = e,
                                    r = e.getBody();
                                t.set(o.getRng());
                                const s = n.add(
                                    e.getBody(),
                                    "div",
                                    { id: "mcepastebin", class: "mce-pastebin", contentEditable: !0, "data-mce-bogus": "all", style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0" },
                                    SR
                                );
                                At.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535),
                                    n.bind(s, "beforedeactivate focusin focusout", (e) => {
                                        e.stopPropagation();
                                    }),
                                    s.focus(),
                                    o.select(s, !0);
                            })(e, t),
                        remove: () =>
                            ((e, t) => {
                                const n = e.dom;
                                if (_R(e)) {
                                    let o;
                                    const r = t.get();
                                    for (; (o = _R(e)); ) n.remove(o), n.unbind(o);
                                    r && e.selection.setRng(r);
                                }
                                t.set(null);
                            })(e, t),
                        getEl: () => _R(e),
                        getHtml: () =>
                            ((e) => {
                                const t = e.dom,
                                    n = (e, n) => {
                                        e.appendChild(n), t.remove(n, !0);
                                    },
                                    [o, ...r] = G(e.getBody().childNodes, NR);
                                V(r, (e) => {
                                    n(o, e);
                                });
                                const s = t.select("div[id=mcepastebin]", o);
                                for (let e = s.length - 1; e >= 0; e--) {
                                    const r = t.create("div");
                                    o.insertBefore(r, s[e]), n(r, s[e]);
                                }
                                return o ? o.innerHTML : "";
                            })(e),
                        getLastRng: t.get,
                    };
                })(e);
            ((e) => {
                (At.browser.isChromium() || At.browser.isSafari()) &&
                    ((e, t) => {
                        e.on("PastePreProcess", (n) => {
                            n.content = t(e, n.content, n.internal);
                        });
                    })(e, tA);
            })(e),
                ((e, t) => {
                    e.addCommand("mceTogglePlainTextPaste", () => {
                        ((e, t) => {
                            "text" === t.get() ? (t.set("html"), Zm(e, !1)) : (t.set("text"), Zm(e, !0)), e.focus();
                        })(e, t);
                    }),
                        e.addCommand("mceInsertClipboardContent", (t, n) => {
                            n.html && UR(e, n.html, n.internal, !1), n.text && zR(e, n.text, !1);
                        });
                })(e, n),
                ((e) => {
                    const t = (t) => (n) => {
                            t(e, n);
                        },
                        n = zd(e);
                    w(n) && e.on("PastePreProcess", t(n));
                    const o = jd(e);
                    w(o) && e.on("PastePostProcess", t(o));
                })(e),
                e.on("PreInit", () => {
                    ((e) => {
                        e.on(
                            "cut",
                            ((e) => (t) => {
                                !t.isDefaultPrevented() &&
                                    XR(e) &&
                                    KR(t, YR(e), GR(e), () => {
                                        if (At.browser.isChromium() || At.browser.isFirefox()) {
                                            const t = e.selection.getRng();
                                            mg.setEditorTimeout(
                                                e,
                                                () => {
                                                    e.selection.setRng(t), e.execCommand("Delete");
                                                },
                                                0
                                            );
                                        } else e.execCommand("Delete");
                                    });
                            })(e)
                        ),
                            e.on(
                                "copy",
                                ((e) => (t) => {
                                    !t.isDefaultPrevented() && XR(e) && KR(t, YR(e), GR(e), E);
                                })(e)
                            );
                    })(e),
                        ((e, t) => {
                            Fd(e) &&
                                e.on("dragend dragover draggesture dragdrop drop drag", (e) => {
                                    e.preventDefault(), e.stopPropagation();
                                }),
                                Ud(e) ||
                                    e.on("drop", (e) => {
                                        const t = e.dataTransfer;
                                        t && ((e) => $(e.files, (e) => /^image\//.test(e.type)))(t) && e.preventDefault();
                                    }),
                                e.on("drop", (n) => {
                                    if (n.isDefaultPrevented()) return;
                                    const o = QR(e, n);
                                    if (y(o)) return;
                                    const r = jR(n.dataTransfer),
                                        s = HR(r, wR());
                                    if (
                                        (!$R(r) ||
                                            ((e) => {
                                                const t = e["text/plain"];
                                                return !!t && 0 === t.indexOf("file://");
                                            })(r)) &&
                                        qR(e, n, o)
                                    )
                                        return;
                                    const a = r[wR()],
                                        i = a || r["text/html"] || r["text/plain"],
                                        l = ((e, t, n, o) => {
                                            const r = e.getParent(n, (e) => As(t, e));
                                            if (!h(e.getParent(n, "summary"))) return !0;
                                            if (r && ke(o, "text/html")) {
                                                const e = new DOMParser().parseFromString(o["text/html"], "text/html").body;
                                                return !h(e.querySelector(r.nodeName.toLowerCase()));
                                            }
                                            return !1;
                                        })(e.dom, e.schema, o.startContainer, r),
                                        d = t.get();
                                    (d && !l) ||
                                        (i &&
                                            (n.preventDefault(),
                                            mg.setEditorTimeout(e, () => {
                                                e.undoManager.transact(() => {
                                                    (a || (d && l)) && e.execCommand("Delete"), JR(e, o);
                                                    const t = OR(i);
                                                    r["text/html"] ? UR(e, t, s, !0) : zR(e, t, !0);
                                                });
                                            })));
                                }),
                                e.on("dragstart", (e) => {
                                    t.set(!0);
                                }),
                                e.on("dragover dragend", (n) => {
                                    Ud(e) && !t.get() && (n.preventDefault(), JR(e, QR(e, n))), "dragend" === n.type && t.set(!1);
                                }),
                                ((e) => {
                                    e.on("input", (t) => {
                                        const n = (e) => h(e.querySelector("summary"));
                                        if ("deleteByDrag" === t.inputType) {
                                            const t = G(e.dom.select("details"), n);
                                            V(t, (t) => {
                                                rr(t.firstChild) && t.firstChild.remove();
                                                const n = e.dom.create("summary");
                                                n.appendChild(Dr().dom), t.prepend(n);
                                            });
                                        }
                                    });
                                })(e);
                        })(e, t),
                        WR(e, o, n);
                });
        },
        oA = rr,
        rA = Jo,
        sA = (e) => ir(e.dom),
        aA = (e) => (t) => En(yn(e), t),
        iA = (e, t) => Jn(yn(e), sA, aA(t)),
        lA = (e, t, n) => {
            const o = new zo(e, t),
                r = n ? o.next.bind(o) : o.prev.bind(o);
            let s = e;
            for (let t = n ? e : r(); t && !oA(t); t = r()) ss(t) && (s = t);
            return s;
        },
        dA = (e) => {
            const t = ((e, t) => {
                const n = Li.fromRangeStart(e).getNode(),
                    o = ((e, t) => Jn(yn(e), (e) => ((e) => ar(e.dom))(e) || xr(e), aA(t)).getOr(yn(t)).dom)(n, t),
                    r = lA(n, o, !1),
                    s = lA(n, o, !0),
                    a = document.createRange();
                return (
                    iA(r, o).fold(
                        () => {
                            rA(r) ? a.setStart(r, 0) : a.setStartBefore(r);
                        },
                        (e) => a.setStartBefore(e.dom)
                    ),
                    iA(s, o).fold(
                        () => {
                            rA(s) ? a.setEnd(s, s.data.length) : a.setEndAfter(s);
                        },
                        (e) => a.setEndAfter(e.dom)
                    ),
                    a
                );
            })(e.selection.getRng(), e.getBody());
            e.selection.setRng(sb(t));
        };
    var cA;
    !(function (e) {
        (e.Before = "before"), (e.After = "after");
    })(cA || (cA = {}));
    const uA = (e, t) => Math.abs(e.left - t),
        mA = (e, t) => Math.abs(e.right - t),
        fA = (e, t) =>
            ((e) =>
                X(
                    e,
                    (e, t) =>
                        e.fold(
                            () => I.some(t),
                            (e) => {
                                const n = Math.min(t.left, e.left),
                                    o = Math.min(t.top, e.top),
                                    r = Math.max(t.right, e.right),
                                    s = Math.max(t.bottom, e.bottom);
                                return I.some({ top: o, right: r, bottom: s, left: n, width: r - n, height: s - o });
                            }
                        ),
                    I.none()
                ))(
                G(e, (e) => {
                    return (n = t) >= (o = e).top && n <= o.bottom;
                    var n, o;
                })
            ).fold(
                () => [[], e],
                (t) => {
                    const { pass: n, fail: o } = K(e, (e) =>
                        ((e, t) => {
                            const n = ((e, t) => Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)))(e, t) / Math.min(e.height, t.height);
                            return ((e, t) => e.top < t.bottom && e.bottom > t.top)(e, t) && n > 0.5;
                        })(e, t)
                    );
                    return [n, o];
                }
            ),
        gA = (e, t, n) => (t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t))),
        pA = (e, t, n) => {
            const o = (e) => (ss(e.node) ? I.some(e) : $o(e.node) ? pA(ce(e.node.childNodes), t, n) : I.none()),
                r = (e, r) => {
                    const s = ae(e, (e, o) => r(e, t, n) - r(o, t, n));
                    return ((e, r) => {
                        if (e.length >= 2) {
                            const s = o(e[0]).getOr(e[0]),
                                a = o(e[1]).getOr(e[1]);
                            if (Math.abs(r(s, t, n) - r(a, t, n)) < 2) {
                                if (Jo(s.node)) return I.some(s);
                                if (Jo(a.node)) return I.some(a);
                            }
                        }
                        return I.none();
                    })(s, r).orThunk(() => ue(s, o));
                },
                [s, a] = fA(xk(e), n),
                { pass: i, fail: l } = K(a, (e) => e.top < n);
            return r(s, gA)
                .orThunk(() => r(l, fi))
                .orThunk(() => r(i, fi));
        },
        hA = (e, t, n) =>
            ((e, t, n) => {
                const o = yn(e),
                    r = Nn(o),
                    s = Cn(r, t, n)
                        .filter((e) => Sn(o, e))
                        .getOr(o);
                return ((e, t, n, o) => {
                    const r = (t, s) => {
                        const a = G(
                            t.dom.childNodes,
                            T((e) => $o(e) && e.classList.contains("mce-drag-container"))
                        );
                        return s
                            .fold(
                                () => pA(a, n, o),
                                (e) => {
                                    const t = G(a, (t) => t !== e.dom);
                                    return pA(t, n, o);
                                }
                            )
                            .orThunk(() => (En(t, e) ? I.none() : On(t)).bind((e) => r(e, I.some(t))));
                    };
                    return r(t, I.none());
                })(o, s, t, n);
            })(e, t, n)
                .filter((e) => Ec(e.node))
                .map((e) => ((e, t) => ({ node: e.node, position: uA(e, t) < mA(e, t) ? cA.Before : cA.After }))(e, t)),
        bA = (e) => {
            var t, n;
            const o = e.getBoundingClientRect(),
                r = e.ownerDocument,
                s = r.documentElement,
                a = r.defaultView;
            return { top: o.top + (null !== (t = null == a ? void 0 : a.scrollY) && void 0 !== t ? t : 0) - s.clientTop, left: o.left + (null !== (n = null == a ? void 0 : a.scrollX) && void 0 !== n ? n : 0) - s.clientLeft };
        },
        vA = (e) => ({ target: e, srcElement: e }),
        yA = (e, t, n, o) => {
            const r = ((e, t) => {
                const n = ((e) => {
                    const t = vR(),
                        n = ((e) => {
                            const t = e;
                            return I.from(t[iR]);
                        })(e);
                    return (
                        uR(e),
                        oR(t),
                        (t.dropEffect = e.dropEffect),
                        (t.effectAllowed = e.effectAllowed),
                        ((e) => {
                            const t = e;
                            return I.from(t[eR]);
                        })(e).each((e) => t.setDragImage(e.image, e.x, e.y)),
                        V(e.types, (n) => {
                            "Files" !== n && t.setData(n, e.getData(n));
                        }),
                        V(e.files, (e) => t.items.add(e)),
                        ((e) => {
                            const t = e;
                            return I.from(t[tR]);
                        })(e).each((e) => {
                            ((e, t) => {
                                nR(t)(e);
                            })(t, e);
                        }),
                        n.each((n) => {
                            dR(e, n), dR(t, n);
                        }),
                        t
                    );
                })(e);
                return "dragstart" === t ? (oR(n), cR(n)) : "drop" === t ? (rR(n), uR(n)) : (sR(n), mR(n)), n;
            })(n, e);
            return v(o)
                ? ((e, t, n) => {
                      const o = B("Function not supported on simulated event.");
                      return {
                          bubbles: !0,
                          cancelBubble: !1,
                          cancelable: !0,
                          composed: !1,
                          currentTarget: null,
                          defaultPrevented: !1,
                          eventPhase: 0,
                          isTrusted: !0,
                          returnValue: !1,
                          timeStamp: 0,
                          type: e,
                          composedPath: o,
                          initEvent: o,
                          preventDefault: E,
                          stopImmediatePropagation: E,
                          stopPropagation: E,
                          AT_TARGET: window.Event.AT_TARGET,
                          BUBBLING_PHASE: window.Event.BUBBLING_PHASE,
                          CAPTURING_PHASE: window.Event.CAPTURING_PHASE,
                          NONE: window.Event.NONE,
                          altKey: !1,
                          button: 0,
                          buttons: 0,
                          clientX: 0,
                          clientY: 0,
                          ctrlKey: !1,
                          metaKey: !1,
                          movementX: 0,
                          movementY: 0,
                          offsetX: 0,
                          offsetY: 0,
                          pageX: 0,
                          pageY: 0,
                          relatedTarget: null,
                          screenX: 0,
                          screenY: 0,
                          shiftKey: !1,
                          x: 0,
                          y: 0,
                          detail: 0,
                          view: null,
                          which: 0,
                          initUIEvent: o,
                          initMouseEvent: o,
                          getModifierState: o,
                          dataTransfer: n,
                          ...vA(t),
                      };
                  })(e, t, r)
                : ((e, t, n, o) => ({ ...t, dataTransfer: o, type: e, ...vA(n) }))(e, o, t, r);
        },
        CA = ir,
        wA = ((...e) => (t) => {
            for (let n = 0; n < e.length; n++) if (e[n](t)) return !0;
            return !1;
        })(CA, ar),
        xA = (e, t, n, o) => {
            const r = e.dom,
                s = t.cloneNode(!0);
            r.setStyles(s, { width: n, height: o }), r.setAttrib(s, "data-mce-selected", null);
            const a = r.create("div", { class: "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" });
            return r.setStyles(a, { position: "absolute", opacity: 0.5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: n, height: o }), r.setStyles(s, { margin: 0, boxSizing: "border-box" }), a.appendChild(s), a;
        },
        kA = (e, t) => (n) => () => {
            const o = "left" === e ? n.scrollX : n.scrollY;
            n.scroll({ [e]: o + t, behavior: "smooth" });
        },
        EA = kA("left", -32),
        SA = kA("left", 32),
        _A = kA("top", -32),
        NA = kA("top", 32),
        RA = (e) => {
            e && e.parentNode && e.parentNode.removeChild(e);
        },
        AA = (e, t, n, o, r) => {
            "dragstart" === t && yR(o, e.dom.getOuterHTML(n));
            const s = yA(t, n, o, r);
            return e.dispatch(t, s);
        },
        OA = (e, t) => {
            const n = ja(
                (e, n) =>
                    ((e, t, n) => {
                        e._selectionOverrides.hideFakeCaret(),
                            hA(e.getBody(), t, n).fold(
                                () => e.selection.placeCaretAt(t, n),
                                (o) => {
                                    const r = e._selectionOverrides.showCaret(1, o.node, o.position === cA.Before, !1);
                                    r ? e.selection.setRng(r) : e.selection.placeCaretAt(t, n);
                                }
                            );
                    })(t, e, n),
                0
            );
            t.on("remove", n.cancel);
            const o = e;
            return (r) =>
                e.on((e) => {
                    const s = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));
                    if (!e.dragging && s > 10) {
                        const n = AA(t, "dragstart", e.element, e.dataTransfer, r);
                        if ((C(n.dataTransfer) && (e.dataTransfer = n.dataTransfer), n.isDefaultPrevented())) return;
                        (e.dragging = !0), t.focus();
                    }
                    if (e.dragging) {
                        const s = r.currentTarget === t.getDoc().documentElement,
                            l = ((e, t) => ({ pageX: t.pageX - e.relX, pageY: t.pageY + 5 }))(
                                e,
                                ((e, t) => {
                                    return (
                                        (n = ((e) => (e.inline ? bA(e.getBody()) : { left: 0, top: 0 }))(e)),
                                        (o = ((e) => {
                                            const t = e.getBody();
                                            return e.inline ? { left: t.scrollLeft, top: t.scrollTop } : { left: 0, top: 0 };
                                        })(e)),
                                        (r = ((e, t) => {
                                            if (t.target.ownerDocument !== e.getDoc()) {
                                                const n = bA(e.getContentAreaContainer()),
                                                    o = ((e) => {
                                                        const t = e.getBody(),
                                                            n = e.getDoc().documentElement,
                                                            o = { left: t.scrollLeft, top: t.scrollTop },
                                                            r = { left: t.scrollLeft || n.scrollLeft, top: t.scrollTop || n.scrollTop };
                                                        return e.inline ? o : r;
                                                    })(e);
                                                return { left: t.pageX - n.left + o.left, top: t.pageY - n.top + o.top };
                                            }
                                            return { left: t.pageX, top: t.pageY };
                                        })(e, t)),
                                        { pageX: r.left - n.left + o.left, pageY: r.top - n.top + o.top }
                                    );
                                    var n, o, r;
                                })(t, r)
                            );
                        (a = e.ghost),
                            (i = t.getBody()),
                            a.parentNode !== i && i.appendChild(a),
                            ((e, t, n, o, r, s, a, i, l, d, c, u) => {
                                let m = 0,
                                    f = 0;
                                (e.style.left = t.pageX + "px"),
                                    (e.style.top = t.pageY + "px"),
                                    t.pageX + n > r && (m = t.pageX + n - r),
                                    t.pageY + o > s && (f = t.pageY + o - s),
                                    (e.style.width = n - m + "px"),
                                    (e.style.height = o - f + "px");
                                const g = l.clientHeight,
                                    p = l.clientWidth,
                                    h = a + l.getBoundingClientRect().top,
                                    b = i + l.getBoundingClientRect().left;
                                c.on((e) => {
                                    e.intervalId.clear(),
                                        e.dragging &&
                                            u &&
                                            (a + 8 >= g
                                                ? e.intervalId.set(NA(d))
                                                : a - 8 <= 0
                                                ? e.intervalId.set(_A(d))
                                                : i + 8 >= p
                                                ? e.intervalId.set(SA(d))
                                                : i - 8 <= 0
                                                ? e.intervalId.set(EA(d))
                                                : h + 16 >= window.innerHeight
                                                ? e.intervalId.set(NA(window))
                                                : h - 16 <= 0
                                                ? e.intervalId.set(_A(window))
                                                : b + 16 >= window.innerWidth
                                                ? e.intervalId.set(SA(window))
                                                : b - 16 <= 0 && e.intervalId.set(EA(window)));
                                });
                            })(e.ghost, l, e.width, e.height, e.maxX, e.maxY, r.clientY, r.clientX, t.getContentAreaContainer(), t.getWin(), o, s),
                            n.throttle(r.clientX, r.clientY);
                    }
                    var a, i;
                });
        },
        TA = (e, t, n) => {
            e.on((e) => {
                e.intervalId.clear(),
                    e.dragging &&
                        n.fold(
                            () => AA(t, "dragend", e.element, e.dataTransfer),
                            (n) => AA(t, "dragend", e.element, e.dataTransfer, n)
                        );
            }),
                BA(e);
        },
        BA = (e) => {
            e.on((e) => {
                e.intervalId.clear(), RA(e.ghost);
            }),
                e.clear();
        },
        DA = (e) => {
            const t = za(),
                n = Oa.DOM,
                o = document,
                r = ((e, t) => (n) => {
                    if (((e) => 0 === e.button)(n)) {
                        const o = J(t.dom.getParents(n.target), wA).getOr(null);
                        if (C(o) && ((e, t, n) => CA(n) && n !== t && e.isEditable(n.parentElement))(t.dom, t.getBody(), o)) {
                            const r = t.dom.getPos(o),
                                s = t.getBody(),
                                a = t.getDoc().documentElement;
                            e.set({
                                element: o,
                                dataTransfer: vR(),
                                dragging: !1,
                                screenX: n.screenX,
                                screenY: n.screenY,
                                maxX: (t.inline ? s.scrollWidth : a.offsetWidth) - 2,
                                maxY: (t.inline ? s.scrollHeight : a.offsetHeight) - 2,
                                relX: n.pageX - r.x,
                                relY: n.pageY - r.y,
                                width: o.offsetWidth,
                                height: o.offsetHeight,
                                ghost: xA(t, o, o.offsetWidth, o.offsetHeight),
                                intervalId: Ua(100),
                            });
                        }
                    }
                })(t, e),
                s = OA(t, e),
                a = ((e, t) => (n) => {
                    e.on((e) => {
                        var o;
                        if ((e.intervalId.clear(), e.dragging)) {
                            if (
                                ((e, t, n) => !y(t) && t !== n && !e.dom.isChildOf(t, n) && e.dom.isEditable(t))(
                                    t,
                                    ((e) => {
                                        const t = e.getSel();
                                        if (C(t)) {
                                            const e = t.getRangeAt(0).startContainer;
                                            return Jo(e) ? e.parentNode : e;
                                        }
                                        return null;
                                    })(t.selection),
                                    e.element
                                )
                            ) {
                                const r = null !== (o = t.getDoc().elementFromPoint(n.clientX, n.clientY)) && void 0 !== o ? o : t.getBody();
                                AA(t, "drop", r, e.dataTransfer, n).isDefaultPrevented() ||
                                    t.undoManager.transact(() => {
                                        ((e, t) => {
                                            const n = e.getParent(t.parentNode, e.isBlock);
                                            RA(t), n && n !== e.getRoot() && e.isEmpty(n) && Pr(yn(n));
                                        })(t.dom, e.element),
                                            ((e) => {
                                                const t = e.getData("text/html");
                                                return "" === t ? I.none() : I.some(t);
                                            })(e.dataTransfer).each((e) => t.insertContent(e)),
                                            t._selectionOverrides.hideFakeCaret();
                                    });
                            }
                            AA(t, "dragend", t.getBody(), e.dataTransfer, n);
                        }
                    }),
                        BA(e);
                })(t, e),
                i = ((e, t) => (n) => TA(e, t, I.some(n)))(t, e);
            e.on("mousedown", r),
                e.on("mousemove", s),
                e.on("mouseup", a),
                n.bind(o, "mousemove", s),
                n.bind(o, "mouseup", i),
                e.on("remove", () => {
                    n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i);
                }),
                e.on("keydown", (n) => {
                    n.keyCode === ef.ESC && TA(t, e, I.none());
                });
        },
        PA = ir,
        LA = (e, t) => Vh(e.getBody(), t),
        MA = (e) => {
            const t = e.selection,
                n = e.dom,
                o = e.getBody(),
                r = wc(e, o, n.isBlock, () => xg(e)),
                s = "sel-" + n.uniqueId(),
                a = "data-mce-selected";
            let i;
            const l = (e) => e !== o && (PA(e) || cr(e)) && n.isChildOf(e, o) && n.isEditable(e.parentNode),
                d = (n, o, s, a = !0) => (e.dispatch("ShowCaret", { target: o, direction: n, before: s }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n), r.show(s, o))),
                c = (e) => $r(e) || Kr(e) || Gr(e),
                u = (e) => c(e.startContainer) || c(e.endContainer),
                m = (t) => {
                    const o = e.schema.getVoidElements(),
                        r = n.createRng(),
                        s = t.startContainer,
                        a = t.startOffset,
                        i = t.endContainer,
                        l = t.endOffset;
                    return ke(o, s.nodeName.toLowerCase()) ? (0 === a ? r.setStartBefore(s) : r.setStartAfter(s)) : r.setStart(s, a), ke(o, i.nodeName.toLowerCase()) ? (0 === l ? r.setEndBefore(i) : r.setEndAfter(i)) : r.setEnd(i, l), r;
                },
                f = (r, c) => {
                    if (!r) return null;
                    if (r.collapsed) {
                        if (!u(r)) {
                            const e = c ? 1 : -1,
                                t = Gc(e, o, r),
                                s = t.getNode(!c);
                            if (C(s)) {
                                if (Ec(s)) return d(e, s, !!c && !t.isAtEnd(), !1);
                                if (Hr(s) && ir(s.nextSibling)) {
                                    const e = n.createRng();
                                    return e.setStart(s, 0), e.setEnd(s, 0), e;
                                }
                            }
                            const a = t.getNode(c);
                            if (C(a)) {
                                if (Ec(a)) return d(e, a, !c && !t.isAtEnd(), !1);
                                if (Hr(a) && ir(a.previousSibling)) {
                                    const e = n.createRng();
                                    return e.setStart(a, 1), e.setEnd(a, 1), e;
                                }
                            }
                        }
                        return null;
                    }
                    let m = r.startContainer,
                        f = r.startOffset;
                    const g = r.endOffset;
                    if ((Jo(m) && 0 === f && PA(m.parentNode) && ((m = m.parentNode), (f = n.nodeIndex(m)), (m = m.parentNode)), !$o(m))) return null;
                    if (g === f + 1 && m === r.endContainer) {
                        const o = m.childNodes[f];
                        if (l(o))
                            return ((o) => {
                                const r = o.cloneNode(!0),
                                    l = e.dispatch("ObjectSelected", { target: o, targetClone: r });
                                if (l.isDefaultPrevented()) return null;
                                const d = ((o, r) => {
                                        const a = yn(e.getBody()),
                                            i = e.getDoc(),
                                            l = eo(a, "#" + s).getOrThunk(() => {
                                                const e = hn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i);
                                                return Jt(e, "id", s), bo(a, e), e;
                                            }),
                                            d = n.createRng();
                                        Co(l), yo(l, [vn(pr, i), yn(r), vn(pr, i)]), d.setStart(l.dom.firstChild, 1), d.setEnd(l.dom.lastChild, 0), io(l, { top: n.getPos(o, e.getBody()).y + "px" }), eg(l);
                                        const c = t.getSel();
                                        return c && (c.removeAllRanges(), c.addRange(d)), d;
                                    })(o, l.targetClone),
                                    c = yn(o);
                                return (
                                    V(Fo(yn(e.getBody()), `*[${a}]`), (e) => {
                                        En(c, e) || on(e, a);
                                    }),
                                    n.getAttrib(o, a) || o.setAttribute(a, "1"),
                                    (i = o),
                                    p(),
                                    d
                                );
                            })(o);
                    }
                    return null;
                },
                g = () => {
                    i && i.removeAttribute(a), eo(yn(e.getBody()), "#" + s).each(wo), (i = null);
                },
                p = () => {
                    r.hide();
                };
            return (
                MC(e) ||
                    (e.on("click", (t) => {
                        n.isEditable(t.target) || (t.preventDefault(), e.focus());
                    }),
                    e.on("blur NewBlock", g),
                    e.on("ResizeWindow FullscreenStateChanged", r.reposition),
                    e.on(
                        "tap",
                        (t) => {
                            const n = t.target,
                                o = LA(e, n);
                            PA(o) ? (t.preventDefault(), ux(e, o).each(f)) : l(n) && ux(e, n).each(f);
                        },
                        !0
                    ),
                    e.on("mousedown", (r) => {
                        const s = r.target;
                        if (s !== o && "HTML" !== s.nodeName && !n.isChildOf(s, o)) return;
                        if (
                            !((e, t, n) => {
                                const o = yn(e.getBody()),
                                    r = e.inline ? o : yn(Nn(o).dom.documentElement),
                                    s = ((e, t, n, o) => {
                                        const r = ((e) => e.dom.getBoundingClientRect())(t);
                                        return { x: n - (e ? r.left + t.dom.clientLeft + pw(t) : 0), y: o - (e ? r.top + t.dom.clientTop + gw(t) : 0) };
                                    })(e.inline, r, t, n);
                                return ((e, t, n) => {
                                    const o = mw(e),
                                        r = fw(e);
                                    return t >= 0 && n >= 0 && t <= o && n <= r;
                                })(r, s.x, s.y);
                            })(e, r.clientX, r.clientY)
                        )
                            return;
                        g(), p();
                        const a = LA(e, s);
                        PA(a)
                            ? (r.preventDefault(), ux(e, a).each(f))
                            : hA(o, r.clientX, r.clientY).each((n) => {
                                  var o;
                                  r.preventDefault(), (o = d(1, n.node, n.position === cA.Before, !1)) && t.setRng(o), $o(a) ? a.focus() : e.getBody().focus();
                              });
                    }),
                    e.on("keypress", (e) => {
                        ef.modifierPressed(e) || (PA(t.getNode()) && e.preventDefault());
                    }),
                    e.on("GetSelectionRange", (e) => {
                        let t = e.range;
                        if (i) {
                            if (!i.parentNode) return void (i = null);
                            (t = t.cloneRange()), t.selectNode(i), (e.range = t);
                        }
                    }),
                    e.on("SetSelectionRange", (e) => {
                        e.range = m(e.range);
                        const t = f(e.range, e.forward);
                        t && (e.range = t);
                    }),
                    e.on("AfterSetSelectionRange", (e) => {
                        const t = e.range,
                            o = t.startContainer.parentElement;
                        var r;
                        u(t) || ($o((r = o)) && "mcepastebin" === r.id) || p(), ((e) => C(e) && n.hasClass(e, "mce-offscreen-selection"))(o) || g();
                    }),
                    ((e) => {
                        DA(e),
                            Nd(e) &&
                                ((e) => {
                                    const t = (t) => {
                                            if (!t.isDefaultPrevented()) {
                                                const n = t.dataTransfer;
                                                n && (H(n.types, "Files") || n.files.length > 0) && (t.preventDefault(), "drop" === t.type && ww(e, "Dropped file type is not supported"));
                                            }
                                        },
                                        n = (n) => {
                                            hg(e, n.target) && t(n);
                                        },
                                        o = () => {
                                            const o = Oa.DOM,
                                                r = e.dom,
                                                s = document,
                                                a = e.inline ? e.getBody() : e.getDoc(),
                                                i = ["drop", "dragover"];
                                            V(i, (e) => {
                                                o.bind(s, e, n), r.bind(a, e, t);
                                            }),
                                                e.on("remove", () => {
                                                    V(i, (e) => {
                                                        o.unbind(s, e, n), r.unbind(a, e, t);
                                                    });
                                                });
                                        };
                                    e.on("init", () => {
                                        mg.setEditorTimeout(e, o, 0);
                                    });
                                })(e);
                    })(e),
                    ((e) => {
                        const t = ja(() => {
                            if (!e.removed && e.getBody().contains(document.activeElement)) {
                                const t = e.selection.getRng();
                                if (t.collapsed) {
                                    const n = mx(e, t, !1);
                                    e.selection.setRng(n);
                                }
                            }
                        }, 0);
                        e.on("focus", () => {
                            t.throttle();
                        }),
                            e.on("blur", () => {
                                t.cancel();
                            });
                    })(e),
                    ((e) => {
                        e.on("init", () => {
                            e.on("focusin", (t) => {
                                const n = t.target;
                                if (cr(n)) {
                                    const t = Vh(e.getBody(), n),
                                        o = ir(t) ? t : n;
                                    e.selection.getNode() !== o && ux(e, o).each((t) => e.selection.setRng(t));
                                }
                            });
                        });
                    })(e)),
                {
                    showCaret: d,
                    showBlockCaretContainer: (e) => {
                        e.hasAttribute("data-mce-caret") && (Yr(e), t.scrollIntoView(e));
                    },
                    hideFakeCaret: p,
                    destroy: () => {
                        r.destroy(), (i = null);
                    },
                }
            );
        },
        IA = (e, t) => {
            let n = t;
            for (let t = e.previousSibling; Jo(t); t = t.previousSibling) n += t.data.length;
            return n;
        },
        FA = (e, t, n, o, r) => {
            if (Jo(n) && (o < 0 || o > n.data.length)) return [];
            const s = r && Jo(n) ? [IA(n, o)] : [o];
            let a = n;
            for (; a !== t && a.parentNode; ) s.push(e.nodeIndex(a, r)), (a = a.parentNode);
            return a === t ? s.reverse() : [];
        },
        UA = (e, t, n, o, r, s, a = !1) => ({ start: FA(e, t, n, o, a), end: FA(e, t, r, s, a) }),
        zA = (e, t) => {
            const n = t.slice(),
                o = n.pop();
            return x(o) ? X(n, (e, t) => e.bind((e) => I.from(e.childNodes[t])), I.some(e)).bind((e) => (Jo(e) && (o < 0 || o > e.data.length) ? I.none() : I.some({ node: e, offset: o }))) : I.none();
        },
        jA = (e, t) =>
            zA(e, t.start).bind(({ node: n, offset: o }) =>
                zA(e, t.end).map(({ node: e, offset: t }) => {
                    const r = document.createRange();
                    return r.setStart(n, o), r.setEnd(e, t), r;
                })
            ),
        HA = (e, t, n) => {
            if (t && e.isEmpty(t) && !n(t)) {
                const o = t.parentNode;
                e.remove(t, Jo(t.firstChild) && ds(t.firstChild.data)), HA(e, o, n);
            }
        },
        $A = (e, t, n, o = !0) => {
            const r = t.startContainer.parentNode,
                s = t.endContainer.parentNode;
            t.deleteContents(),
                o &&
                    !n(t.startContainer) &&
                    (Jo(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer), Jo(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer), HA(e, r, n), r !== s && HA(e, s, n));
        },
        qA = (e, t) => I.from(e.dom.getParent(t.startContainer, e.dom.isBlock)),
        VA = (e, t, n) => {
            const o = e.dynamicPatternsLookup({ text: n, block: t });
            return { ...e, blockPatterns: cl(o).concat(e.blockPatterns), inlinePatterns: ul(o).concat(e.inlinePatterns) };
        },
        WA = (e, t, n, o) => {
            const r = e.createRng();
            return r.setStart(t, 0), r.setEnd(n, o), r.toString();
        },
        KA = (e, t, n) => {
            ((e, t, n) => {
                if (Jo(e) && 0 >= e.length) return I.some(gS(e, 0));
                {
                    const t = ai(pS);
                    return I.from(t.forwards(e, 0, hS(e), n)).map((e) => gS(e.container, 0));
                }
            })(t, 0, t).each((o) => {
                const r = o.container;
                yS(r, n.start.length, t).each((n) => {
                    const o = e.createRng();
                    o.setStart(r, 0), o.setEnd(n.container, n.offset), $A(e, o, (e) => e === t);
                });
                const s = yn(r),
                    a = vr(s);
                /^\s[^\s]/.test(a) &&
                    ((e, t) => {
                        br.set(e, t);
                    })(s, a.slice(1));
            });
        },
        GA = (e, t) => e.create("span", { "data-mce-type": "bookmark", id: t }),
        YA = (e, t) => {
            const n = e.createRng();
            return n.setStartAfter(t.start), n.setEndBefore(t.end), n;
        },
        XA = (e, t, n) => {
            const o = jA(e.getRoot(), n).getOrDie("Unable to resolve path range"),
                r = o.startContainer,
                s = o.endContainer,
                a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
                i = 0 === o.startOffset ? r : r.splitText(o.startOffset),
                l = i.parentNode;
            return { prefix: t, end: a.parentNode.insertBefore(GA(e, t + "-end"), a), start: l.insertBefore(GA(e, t + "-start"), i) };
        },
        QA = (e, t, n) => {
            HA(e, e.get(t.prefix + "-end"), n), HA(e, e.get(t.prefix + "-start"), n);
        },
        JA = (e) => 0 === e.start.length,
        ZA = (e, t, n, o) => {
            const r = t.start;
            var s;
            return CS(
                e,
                o.container,
                o.offset,
                ((s = r),
                (e, t) => {
                    const n = e.data.substring(0, t),
                        o = n.lastIndexOf(s.charAt(s.length - 1)),
                        r = n.lastIndexOf(s);
                    return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1;
                }),
                n
            ).bind((o) => {
                var s, a;
                const i = null !== (a = null === (s = n.textContent) || void 0 === s ? void 0 : s.indexOf(r)) && void 0 !== a ? a : -1;
                if (-1 !== i && o.offset >= i + r.length) {
                    const t = e.createRng();
                    return t.setStart(o.container, o.offset - r.length), t.setEnd(o.container, o.offset), I.some(t);
                }
                {
                    const s = o.offset - r.length;
                    return vS(o.container, s, n)
                        .map((t) => {
                            const n = e.createRng();
                            return n.setStart(t.container, t.offset), n.setEnd(o.container, o.offset), n;
                        })
                        .filter((e) => e.toString() === r)
                        .orThunk(() => ZA(e, t, n, gS(o.container, 0)));
                }
            });
        },
        eO = (e, t, n, o) => {
            const r = e.dom,
                s = r.getRoot(),
                a = n.pattern,
                i = n.position.container,
                l = n.position.offset;
            return vS(i, l - n.pattern.end.length, t).bind((d) => {
                const c = UA(r, s, d.container, d.offset, i, l, o);
                if (JA(a)) return I.some({ matches: [{ pattern: a, startRng: c, endRng: c }], position: d });
                {
                    const i = tO(e, n.remainingPatterns, d.container, d.offset, t, o),
                        l = i.getOr({ matches: [], position: d }),
                        u = l.position,
                        m = ((e, t, n, o, r, s = !1) => {
                            if (0 === t.start.length && !s) {
                                const t = e.createRng();
                                return t.setStart(n, o), t.setEnd(n, o), I.some(t);
                            }
                            return bS(n, o, r).bind((n) =>
                                ZA(e, t, r, n).bind((e) => {
                                    var t;
                                    if (s) {
                                        if (e.endContainer === n.container && e.endOffset === n.offset) return I.none();
                                        if (0 === n.offset && (null === (t = e.endContainer.textContent) || void 0 === t ? void 0 : t.length) === e.endOffset) return I.none();
                                    }
                                    return I.some(e);
                                })
                            );
                        })(r, a, u.container, u.offset, t, i.isNone());
                    return m.map((e) => {
                        const t = ((e, t, n, o = !1) => UA(e, t, n.startContainer, n.startOffset, n.endContainer, n.endOffset, o))(r, s, e, o);
                        return { matches: l.matches.concat([{ pattern: a, startRng: t, endRng: c }]), position: gS(e.startContainer, e.startOffset) };
                    });
                }
            });
        },
        tO = (e, t, n, o, r, s) => {
            const a = e.dom;
            return bS(n, o, a.getRoot()).bind((i) => {
                const l = WA(a, r, n, o);
                for (let a = 0; a < t.length; a++) {
                    const d = t[a];
                    if (!$e(l, d.end)) continue;
                    const c = t.slice();
                    c.splice(a, 1);
                    const u = eO(e, r, { pattern: d, remainingPatterns: c, position: i }, s);
                    if (u.isNone() && o > 0) return tO(e, t, n, o - 1, r, s);
                    if (u.isSome()) return u;
                }
                return I.none();
            });
        },
        nO = (e, t, n) => {
            e.selection.setRng(n),
                "inline-format" === t.type
                    ? V(t.format, (t) => {
                          e.formatter.apply(t);
                      })
                    : e.execCommand(t.cmd, !1, t.value);
        },
        oO = (e, t, n, o, r, s) => {
            var a;
            return ((e, t) => {
                const n = ne(e, (e) => $(t, (t) => e.pattern.start === t.pattern.start && e.pattern.end === t.pattern.end));
                return e.length === t.length ? (n ? e : t) : e.length > t.length ? e : t;
            })(
                tO(e, r.inlinePatterns, n, o, t, s).fold(
                    () => [],
                    (e) => e.matches
                ),
                tO(e, ((a = r.inlinePatterns), ae(a, (e, t) => t.end.length - e.end.length)), n, o, t, s).fold(
                    () => [],
                    (e) => e.matches
                )
            );
        },
        rO = (e, t) => {
            if (0 === t.length) return;
            const n = e.dom,
                o = e.selection.getBookmark(),
                r = ((e, t) => {
                    const n = ti("mce_textpattern"),
                        o = Y(
                            t,
                            (t, o) => {
                                const r = XA(e, n + `_end${t.length}`, o.endRng);
                                return t.concat([{ ...o, endMarker: r }]);
                            },
                            []
                        );
                    return Y(
                        o,
                        (t, r) => {
                            const s = o.length - t.length - 1,
                                a = JA(r.pattern) ? r.endMarker : XA(e, n + `_start${s}`, r.startRng);
                            return t.concat([{ ...r, startMarker: a }]);
                        },
                        []
                    );
                })(n, t);
            V(r, (t) => {
                const o = n.getParent(t.startMarker.start, n.isBlock),
                    r = (e) => e === o;
                JA(t.pattern)
                    ? ((e, t, n, o) => {
                          const r = YA(e.dom, n);
                          $A(e.dom, r, o), nO(e, t, r);
                      })(e, t.pattern, t.endMarker, r)
                    : ((e, t, n, o, r) => {
                          const s = e.dom,
                              a = YA(s, o),
                              i = YA(s, n);
                          $A(s, i, r), $A(s, a, r);
                          const l = { prefix: n.prefix, start: n.end, end: o.start },
                              d = YA(s, l);
                          nO(e, t, d);
                      })(e, t.pattern, t.startMarker, t.endMarker, r),
                    QA(n, t.endMarker, r),
                    QA(n, t.startMarker, r);
            }),
                e.selection.moveToBookmark(o);
        },
        sO = (e, t) => {
            const n = e.selection.getRng();
            return qA(e, n)
                .map((o) => {
                    var r;
                    const s = Math.max(0, n.startOffset),
                        a = VA(t, o, null !== (r = o.textContent) && void 0 !== r ? r : ""),
                        i = oO(e, o, n.startContainer, s, a, !0),
                        l = ((e, t, n, o) => {
                            var r;
                            const s = e.dom,
                                a = Nl(e);
                            if (!s.is(t, a)) return [];
                            const i = null !== (r = t.textContent) && void 0 !== r ? r : "";
                            return ((e, t) => {
                                const n = ((e) => ae(e, (e, t) => t.start.length - e.start.length))(e),
                                    o = t.replace(pr, " ");
                                return J(n, (e) => 0 === t.indexOf(e.start) || 0 === o.indexOf(e.start));
                            })(n.blockPatterns, i)
                                .map((e) => (Dt.trim(i).length === e.start.length ? [] : [{ pattern: e, range: UA(s, s.getRoot(), t, 0, t, 0, true) }]))
                                .getOr([]);
                        })(e, o, a);
                    return (
                        (l.length > 0 || i.length > 0) &&
                        (e.undoManager.add(),
                        e.undoManager.extra(
                            () => {
                                e.execCommand("mceInsertNewLine");
                            },
                            () => {
                                e.insertContent(gr),
                                    rO(e, i),
                                    ((e, t) => {
                                        if (0 === t.length) return;
                                        const n = e.selection.getBookmark();
                                        V(t, (t) =>
                                            ((e, t) => {
                                                const n = e.dom,
                                                    o = t.pattern,
                                                    r = jA(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
                                                return (
                                                    qA(e, r).each((t) => {
                                                        "block-format" === o.type
                                                            ? ((e, t) => {
                                                                  const n = t.get(e);
                                                                  return p(n) && le(n).exists((e) => ke(e, "block"));
                                                              })(o.format, e.formatter) &&
                                                              e.undoManager.transact(() => {
                                                                  KA(e.dom, t, o), e.formatter.apply(o.format);
                                                              })
                                                            : "block-command" === o.type &&
                                                              e.undoManager.transact(() => {
                                                                  KA(e.dom, t, o), e.execCommand(o.cmd, !1, o.value);
                                                              });
                                                    }),
                                                    !0
                                                );
                                            })(e, t)
                                        ),
                                            e.selection.moveToBookmark(n);
                                    })(e, l);
                                const t = e.selection.getRng(),
                                    n = bS(t.startContainer, t.startOffset, e.dom.getRoot());
                                e.execCommand("mceInsertNewLine"),
                                    n.each((t) => {
                                        const n = t.container;
                                        n.data.charAt(t.offset - 1) === gr && (n.deleteData(t.offset - 1, 1), HA(e.dom, n.parentNode, (t) => t === e.dom.getRoot()));
                                    });
                            }
                        ),
                        !0)
                    );
                })
                .getOr(!1);
        },
        aO = (e, t, n) => {
            for (let o = 0; o < e.length; o++) if (n(e[o], t)) return !0;
            return !1;
        },
        iO = (e) => {
            const t = Dt.each,
                n = ef.BACKSPACE,
                o = ef.DELETE,
                r = e.dom,
                s = e.selection,
                a = e.parser,
                i = At.browser,
                l = i.isFirefox(),
                d = i.isChromium() || i.isSafari(),
                c = At.deviceType.isiPhone() || At.deviceType.isiPad(),
                u = At.os.isMacOS() || At.os.isiOS(),
                f = (t, n) => {
                    try {
                        e.getDoc().execCommand(t, !1, String(n));
                    } catch (e) {}
                },
                g = (e) => e.isDefaultPrevented(),
                p = () => {
                    e.shortcuts.add("meta+a", null, "SelectAll");
                },
                h = () => {
                    e.inline ||
                        r.bind(e.getDoc(), "mousedown mouseup", (t) => {
                            let n;
                            if (t.target === e.getDoc().documentElement)
                                if (((n = s.getRng()), e.getBody().focus(), "mousedown" === t.type)) {
                                    if ($r(n.startContainer)) return;
                                    s.placeCaretAt(t.clientX, t.clientY);
                                } else s.setRng(n);
                        });
                },
                b = () => {
                    Range.prototype.getClientRects ||
                        e.on("mousedown", (t) => {
                            if (!g(t) && "HTML" === t.target.nodeName) {
                                const t = e.getBody();
                                t.blur(),
                                    mg.setEditorTimeout(e, () => {
                                        t.focus();
                                    });
                            }
                        });
                },
                v = () => {
                    const t = Od(e);
                    e.on("click", (n) => {
                        const o = n.target;
                        /^(IMG|HR)$/.test(o.nodeName) && r.isEditable(o.parentNode) && (n.preventDefault(), e.selection.select(o), e.nodeChanged()),
                            "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && r.isEditable(o.parentNode) && (n.preventDefault(), s.select(o));
                    });
                },
                y = () => {
                    e.on("keydown", (e) => {
                        if (!g(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) {
                            const t = s.getNode().previousSibling;
                            if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1;
                        }
                        return !0;
                    });
                },
                C = () => {
                    xd(e) ||
                        e.on("BeforeExecCommand mousedown", () => {
                            f("StyleWithCSS", !1), f("enableInlineTableEditing", !1), ed(e) || f("enableObjectResizing", !1);
                        });
                },
                w = () => {
                    e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
                },
                x = () => {
                    e.inline ||
                        e.on("keydown", () => {
                            document.activeElement === document.body && e.getWin().focus();
                        });
                },
                k = () => {
                    e.inline ||
                        (e.contentStyles.push("body {min-height: 150px}"),
                        e.on("click", (t) => {
                            let n;
                            "HTML" === t.target.nodeName && ((n = e.selection.getRng()), e.getBody().focus(), e.selection.setRng(n), e.selection.normalize(), e.nodeChanged());
                        }));
                },
                S = () => {
                    u &&
                        e.on("keydown", (t) => {
                            !ef.metaKeyPressed(t) || t.shiftKey || (37 !== t.keyCode && 39 !== t.keyCode) || (t.preventDefault(), e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary"));
                        });
                },
                _ = () => {
                    e.on("click", (e) => {
                        let t = e.target;
                        do {
                            if ("A" === t.tagName) return void e.preventDefault();
                        } while ((t = t.parentNode));
                    }),
                        e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
                },
                N = () => {
                    e.on("init", () => {
                        e.dom.bind(e.getBody(), "submit", (e) => {
                            e.preventDefault();
                        });
                    });
                },
                R = E;
            return (
                MC(e)
                    ? (d && (h(), v(), N(), p(), c && (x(), k(), _())), l && (b(), C(), w(), S()))
                    : (e.on("keydown", (t) => {
                          if (g(t) || t.keyCode !== ef.BACKSPACE) return;
                          let n = s.getRng();
                          const o = n.startContainer,
                              a = n.startOffset,
                              i = r.getRoot();
                          let l = o;
                          if (n.collapsed && 0 === a) {
                              for (; l.parentNode && l.parentNode.firstChild === l && l.parentNode !== i; ) l = l.parentNode;
                              "BLOCKQUOTE" === l.nodeName && (e.formatter.toggle("blockquote", void 0, l), (n = r.createRng()), n.setStart(o, 0), n.setEnd(o, 0), s.setRng(n));
                          }
                      }),
                      (() => {
                          const t = (e) => {
                              const t = r.create("body"),
                                  n = e.cloneContents();
                              return t.appendChild(n), s.serializer.serialize(t, { format: "html" });
                          };
                          e.on("keydown", (s) => {
                              const a = s.keyCode;
                              if (!g(s) && (a === o || a === n) && e.selection.isEditable()) {
                                  const n = e.selection.isCollapsed(),
                                      o = e.getBody();
                                  if (
                                      n &&
                                      (!r.isEmpty(o) ||
                                          ((e) => {
                                              const t = yn(e);
                                              return $(Fo(t, '[contenteditable="true"]'), (e) => On(e).exists((e) => !no(e)));
                                          })(o))
                                  )
                                      return;
                                  if (
                                      !n &&
                                      !((n) => {
                                          const o = t(n),
                                              s = r.createRng();
                                          return s.selectNode(e.getBody()), o === t(s);
                                      })(e.selection.getRng())
                                  )
                                      return;
                                  s.preventDefault(), e.setContent(""), o.firstChild && r.isBlock(o.firstChild) ? e.selection.setCursorLocation(o.firstChild, 0) : e.selection.setCursorLocation(o, 0), e.nodeChanged();
                              }
                          });
                      })(),
                      At.windowsPhone ||
                          e.on(
                              "keyup focusin mouseup",
                              (t) => {
                                  ef.modifierPressed(t) ||
                                      ((e) => {
                                          const t = e.getBody(),
                                              n = e.selection.getRng();
                                          return n.startContainer === n.endContainer && n.startContainer === t && 0 === n.startOffset && n.endOffset === t.childNodes.length;
                                      })(e) ||
                                      s.normalize();
                              },
                              !0
                          ),
                      d &&
                          (h(),
                          v(),
                          e.on("init", () => {
                              f("DefaultParagraphSeparator", Nl(e));
                          }),
                          N(),
                          y(),
                          a.addNodeFilter("br", (e) => {
                              let t = e.length;
                              for (; t--; ) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
                          }),
                          c ? (x(), k(), _()) : p()),
                      l &&
                          (e.on("keydown", (t) => {
                              if (!g(t) && t.keyCode === n) {
                                  if (!e.getBody().getElementsByTagName("hr").length) return;
                                  if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                                      const e = s.getNode(),
                                          n = e.previousSibling;
                                      if ("HR" === e.nodeName) return r.remove(e), void t.preventDefault();
                                      n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (r.remove(n), t.preventDefault());
                                  }
                              }
                          }),
                          b(),
                          (() => {
                              const n = () => {
                                      const n = r.getAttribs(s.getStart().cloneNode(!1));
                                      return () => {
                                          const o = s.getStart();
                                          o !== e.getBody() &&
                                              (r.setAttrib(o, "style", null),
                                              t(n, (e) => {
                                                  o.setAttributeNode(e.cloneNode(!0));
                                              }));
                                      };
                                  },
                                  o = () => !s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
                              e.on("keypress", (t) => {
                                  let r;
                                  return !(!(g(t) || (8 !== t.keyCode && 46 !== t.keyCode)) && o() && ((r = n()), e.getDoc().execCommand("delete", !1), r(), t.preventDefault(), 1));
                              }),
                                  r.bind(e.getDoc(), "cut", (t) => {
                                      if (!g(t) && o()) {
                                          const t = n();
                                          mg.setEditorTimeout(e, () => {
                                              t();
                                          });
                                      }
                                  });
                          })(),
                          C(),
                          e.on("SetContent ExecCommand", (e) => {
                              ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                                  t(r.select("a:not([data-mce-block])"), (e) => {
                                      var t;
                                      let n = e.parentNode;
                                      const o = r.getRoot();
                                      if ((null == n ? void 0 : n.lastChild) === e) {
                                          for (; n && !r.isBlock(n); ) {
                                              if ((null === (t = n.parentNode) || void 0 === t ? void 0 : t.lastChild) !== n || n === o) return;
                                              n = n.parentNode;
                                          }
                                          r.add(n, "br", { "data-mce-bogus": 1 });
                                      }
                                  });
                          }),
                          w(),
                          S(),
                          y(),
                          e.on("drop", (t) => {
                              var n;
                              const o = null === (n = t.dataTransfer) || void 0 === n ? void 0 : n.getData("text/html");
                              m(o) && /^<img[^>]*>$/.test(o) && e.dispatch("dragend", new window.DragEvent("dragend", t));
                          }))),
                {
                    refreshContentEditable: R,
                    isHidden: () => {
                        if (!l || e.removed) return !1;
                        const t = e.selection.getSel();
                        return !t || !t.rangeCount || 0 === t.rangeCount;
                    },
                }
            );
        },
        lO = Oa.DOM,
        dO = (e) => (e.inline ? e.getElement().nodeName.toLowerCase() : void 0),
        cO = (e) => ye(e, (e) => !1 === v(e)),
        uO = (e) => {
            const t = e.options.get,
                n = e.editorUpload.blobCache;
            return cO({
                allow_conditional_comments: t("allow_conditional_comments"),
                allow_html_data_urls: t("allow_html_data_urls"),
                allow_svg_data_urls: t("allow_svg_data_urls"),
                allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
                allow_script_urls: t("allow_script_urls"),
                allow_unsafe_link_target: t("allow_unsafe_link_target"),
                convert_fonts_to_spans: t("convert_fonts_to_spans"),
                fix_list_elements: t("fix_list_elements"),
                font_size_legacy_values: t("font_size_legacy_values"),
                forced_root_block: t("forced_root_block"),
                forced_root_block_attrs: t("forced_root_block_attrs"),
                preserve_cdata: t("preserve_cdata"),
                inline_styles: t("inline_styles"),
                root_name: dO(e),
                sanitize: t("xss_sanitization"),
                validate: !0,
                blob_cache: n,
                document: e.getDoc(),
            });
        },
        mO = (e) => {
            const t = e.options.get;
            return cO({
                custom_elements: t("custom_elements"),
                extended_valid_elements: t("extended_valid_elements"),
                invalid_elements: t("invalid_elements"),
                invalid_styles: t("invalid_styles"),
                schema: t("schema"),
                valid_children: t("valid_children"),
                valid_classes: t("valid_classes"),
                valid_elements: t("valid_elements"),
                valid_styles: t("valid_styles"),
                verify_html: t("verify_html"),
                padd_empty_block_inline_children: t("format_empty_lines"),
            });
        },
        fO = (e) => (e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader),
        gO = (e) => {
            const t = fO(e),
                n = Ql(e),
                o = e.contentCSS,
                r = () => {
                    t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n);
                },
                s = () => {
                    e.removed ? r() : e.on("remove", r);
                };
            if (e.contentStyles.length > 0) {
                let t = "";
                Dt.each(e.contentStyles, (e) => {
                    t += e + "\r\n";
                }),
                    e.dom.addStyle(t);
            }
            const a = Promise.all(
                    ((e, t, n) => {
                        const o = [fO(e).loadAll(t)];
                        return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)]);
                    })(e, o, n)
                )
                    .then(s)
                    .catch(s),
                i = Xl(e);
            return (
                i &&
                    ((e, t) => {
                        const n = yn(e.getBody()),
                            o = Vn(qn(n)),
                            r = bn("style");
                        Jt(r, "type", "text/css"),
                            bo(r, vn(t)),
                            bo(o, r),
                            e.on("remove", () => {
                                wo(r);
                            });
                    })(e, i),
                a
            );
        },
        pO = (e) => {
            !0 !== e.removed &&
                (((e) => {
                    MC(e) || e.load({ initial: !0, format: "html" }), (e.startContent = e.getContent({ format: "raw" }));
                })(e),
                ((e) => {
                    e.bindPendingEventDelegates(),
                        (e.initialized = !0),
                        ((e) => {
                            e.dispatch("Init");
                        })(e),
                        e.focus(!0),
                        ((e) => {
                            const t = e.dom.getRoot();
                            e.inline ||
                                (tm(e) && e.selection.getStart(!0) !== t) ||
                                yu(t).each((t) => {
                                    const n = t.getNode(),
                                        o = Yo(n) ? yu(n).getOr(t) : t;
                                    e.selection.setRng(o.toRange());
                                });
                        })(e),
                        e.nodeChanged({ initial: !0 });
                    const t = Dd(e);
                    w(t) && t.call(e, e),
                        ((e) => {
                            const t = Ld(e);
                            t &&
                                mg.setEditorTimeout(
                                    e,
                                    () => {
                                        let n;
                                        (n = !0 === t ? e : e.editorManager.get(t)), n && !n.destroyed && (n.focus(), n.selection.scrollIntoView());
                                    },
                                    100
                                );
                        })(e);
                })(e));
        },
        hO = (e) => {
            const t = e.getElement();
            let n = e.getDoc();
            e.inline && (lO.addClass(t, "mce-content-body"), (e.contentDocument = n = document), (e.contentWindow = window), (e.bodyElement = t), (e.contentAreaContainer = t));
            const o = e.getBody();
            (o.disabled = !0),
                (e.readonly = xd(e)),
                (e._editableRoot = kd(e)),
                !e.readonly && e.hasEditableRoot() && (e.inline && "static" === lO.getStyle(o, "position", !0) && (o.style.position = "relative"), (o.contentEditable = "true")),
                (o.disabled = !1),
                (e.editorUpload = Bw(e)),
                (e.schema = ca(mO(e))),
                (e.dom = Oa(n, {
                    keep_values: !0,
                    url_converter: e.convertURL,
                    url_converter_scope: e,
                    update_styles: !0,
                    root_element: e.inline ? e.getBody() : null,
                    collect: e.inline,
                    schema: e.schema,
                    contentCssCors: $l(e),
                    referrerPolicy: ql(e),
                    onSetAttrib: (t) => {
                        e.dispatch("SetAttrib", t);
                    },
                })),
                (e.parser = ((e) => {
                    const t = oC(uO(e), e.schema);
                    return (
                        t.addAttributeFilter("src,href,style,tabindex", (t, n) => {
                            const o = e.dom,
                                r = "data-mce-" + n;
                            let s = t.length;
                            for (; s--; ) {
                                const a = t[s];
                                let i = a.attr(n);
                                if (i && !a.attr(r)) {
                                    if (0 === i.indexOf("data:") || 0 === i.indexOf("blob:")) continue;
                                    "style" === n
                                        ? ((i = o.serializeStyle(o.parseStyle(i), a.name)), i.length || (i = null), a.attr(r, i), a.attr(n, i))
                                        : "tabindex" === n
                                        ? (a.attr(r, i), a.attr(n, null))
                                        : a.attr(r, e.convertURL(i, n, a.name));
                                }
                            }
                        }),
                        t.addNodeFilter("script", (e) => {
                            let t = e.length;
                            for (; t--; ) {
                                const n = e[t],
                                    o = n.attr("type") || "no/type";
                                0 !== o.indexOf("mce-") && n.attr("type", "mce-" + o);
                            }
                        }),
                        tc(e) &&
                            t.addNodeFilter("#cdata", (t) => {
                                var n;
                                let o = t.length;
                                for (; o--; ) {
                                    const r = t[o];
                                    (r.type = 8), (r.name = "#comment"), (r.value = "[CDATA[" + e.dom.encode(null !== (n = r.value) && void 0 !== n ? n : "") + "]]");
                                }
                            }),
                        t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (t) => {
                            let n = t.length;
                            const o = e.schema.getNonEmptyElements();
                            for (; n--; ) {
                                const e = t[n];
                                e.isEmpty(o) && 0 === e.getAll("br").length && e.append(new Fg("br", 1));
                            }
                        }),
                        t
                    );
                })(e)),
                (e.serializer = KC(
                    ((e) => {
                        const t = e.options.get;
                        return {
                            ...uO(e),
                            ...mO(e),
                            ...cO({
                                remove_trailing_brs: t("remove_trailing_brs"),
                                pad_empty_with_br: t("pad_empty_with_br"),
                                url_converter: t("url_converter"),
                                url_converter_scope: t("url_converter_scope"),
                                element_format: t("element_format"),
                                entities: t("entities"),
                                entity_encoding: t("entity_encoding"),
                                indent: t("indent"),
                                indent_after: t("indent_after"),
                                indent_before: t("indent_before"),
                            }),
                        };
                    })(e),
                    e
                )),
                (e.selection = qC(e.dom, e.getWin(), e.serializer, e)),
                (e.annotator = Vm(e)),
                (e.formatter = $w(e)),
                (e.undoManager = Vw(e)),
                (e._nodeChangeDispatcher = new ZN(e)),
                (e._selectionOverrides = MA(e)),
                ((e) => {
                    const t = za(),
                        n = Da(!1),
                        o = Ha((t) => {
                            e.dispatch("longpress", { ...t, type: "longpress" }), n.set(!0);
                        }, 400);
                    e.on(
                        "touchstart",
                        (e) => {
                            vE(e).each((r) => {
                                o.cancel();
                                const s = { x: r.clientX, y: r.clientY, target: e.target };
                                o.throttle(e), n.set(!1), t.set(s);
                            });
                        },
                        !0
                    ),
                        e.on(
                            "touchmove",
                            (r) => {
                                o.cancel(),
                                    vE(r).each((o) => {
                                        t.on((r) => {
                                            ((e, t) => {
                                                const n = Math.abs(e.clientX - t.x),
                                                    o = Math.abs(e.clientY - t.y);
                                                return n > 5 || o > 5;
                                            })(o, r) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"));
                                        });
                                    });
                            },
                            !0
                        ),
                        e.on(
                            "touchend touchcancel",
                            (r) => {
                                o.cancel(),
                                    "touchcancel" !== r.type &&
                                        t
                                            .get()
                                            .filter((e) => e.target.isEqualNode(r.target))
                                            .each(() => {
                                                n.get() ? r.preventDefault() : e.dispatch("tap", { ...r, type: "tap" });
                                            });
                            },
                            !0
                        );
                })(e),
                ((e) => {
                    ((e) => {
                        e.on("click", (t) => {
                            e.dom.getParent(t.target, "details") && t.preventDefault();
                        });
                    })(e),
                        ((e) => {
                            e.parser.addNodeFilter("details", (t) => {
                                const n = ic(e);
                                V(t, (e) => {
                                    "expanded" === n ? e.attr("open", "open") : "collapsed" === n && e.attr("open", null);
                                });
                            }),
                                e.serializer.addNodeFilter("details", (t) => {
                                    const n = lc(e);
                                    V(t, (e) => {
                                        "expanded" === n ? e.attr("open", "open") : "collapsed" === n && e.attr("open", null);
                                    });
                                });
                        })(e);
                })(e),
                ((e) => {
                    const t = "contenteditable",
                        n = " " + Dt.trim(Zd(e)) + " ",
                        o = " " + Dt.trim(Jd(e)) + " ",
                        r = SE(n),
                        s = SE(o),
                        a = ec(e);
                    a.length > 0 &&
                        e.on("BeforeSetContent", (t) => {
                            ((e, t, n) => {
                                let o = t.length,
                                    r = n.content;
                                if ("raw" !== n.format) {
                                    for (; o--; ) r = r.replace(t[o], _E(e, r, Jd(e)));
                                    n.content = r;
                                }
                            })(e, a, t);
                        }),
                        e.parser.addAttributeFilter("class", (e) => {
                            let n = e.length;
                            for (; n--; ) {
                                const o = e[n];
                                r(o) ? o.attr(t, "true") : s(o) && o.attr(t, "false");
                            }
                        }),
                        e.serializer.addAttributeFilter(t, (e) => {
                            let n = e.length;
                            for (; n--; ) {
                                const o = e[n];
                                (r(o) || s(o)) && (a.length > 0 && o.attr("data-mce-content") ? ((o.name = "#text"), (o.type = 3), (o.raw = !0), (o.value = o.attr("data-mce-content"))) : o.attr(t, null));
                            }
                        });
                })(e),
                MC(e) ||
                    (((e) => {
                        e.on("mousedown", (t) => {
                            t.detail >= 3 && (t.preventDefault(), dA(e));
                        });
                    })(e),
                    ((e) => {
                        ((e) => {
                            const t = [",", ".", ";", ":", "!", "?"],
                                n = [32],
                                o = () => {
                                    return (t = Xd(e)), (n = Qd(e)), { inlinePatterns: ul(t), blockPatterns: cl(t), dynamicPatternsLookup: n };
                                    var t, n;
                                },
                                r = () => ((e) => e.options.isSet("text_patterns_lookup"))(e);
                            e.on(
                                "keydown",
                                (t) => {
                                    if (13 === t.keyCode && !ef.modifierPressed(t) && e.selection.isCollapsed()) {
                                        const n = o();
                                        (n.inlinePatterns.length > 0 || n.blockPatterns.length > 0 || r()) && sO(e, n) && t.preventDefault();
                                    }
                                },
                                !0
                            );
                            const s = () => {
                                if (e.selection.isCollapsed()) {
                                    const t = o();
                                    (t.inlinePatterns.length > 0 || r()) &&
                                        ((e, t) => {
                                            const n = e.selection.getRng();
                                            qA(e, n).map((o) => {
                                                const r = Math.max(0, n.startOffset - 1),
                                                    s = WA(e.dom, o, n.startContainer, r),
                                                    a = VA(t, o, s),
                                                    i = oO(e, o, n.startContainer, r, a, !1);
                                                i.length > 0 &&
                                                    e.undoManager.transact(() => {
                                                        rO(e, i);
                                                    });
                                            });
                                        })(e, t);
                                }
                            };
                            e.on("keyup", (e) => {
                                aO(n, e, (e, t) => e === t.keyCode && !ef.modifierPressed(t)) && s();
                            }),
                                e.on("keypress", (n) => {
                                    aO(t, n, (e, t) => e.charCodeAt(0) === t.charCode) && mg.setEditorTimeout(e, s);
                                });
                        })(e);
                    })(e));
            const r = JN(e);
            bE(e, r),
                ((e) => {
                    e.on("NodeChange", O(kE, e));
                })(e),
                ((e) => {
                    var t;
                    const n = e.dom,
                        o = Nl(e),
                        r = null !== (t = nd(e)) && void 0 !== t ? t : "",
                        s = (t, a) => {
                            if (
                                ((e) => {
                                    if (Gw(e)) {
                                        const t = e.keyCode;
                                        return !Yw(e) && (ef.metaKeyPressed(e) || e.altKey || (t >= 112 && t <= 123) || H(Ww, t));
                                    }
                                    return !1;
                                })(t)
                            )
                                return;
                            const i = e.getBody(),
                                l =
                                    !((e) => Gw(e) && !(Yw(e) || ("keyup" === e.type && 229 === e.keyCode)))(t) &&
                                    ((e, t, n) => {
                                        if (bs(yn(t), !1)) {
                                            const o = t.firstElementChild;
                                            return !o || (!e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === o.nodeName.toLowerCase());
                                        }
                                        return !1;
                                    })(n, i, o);
                            (("" !== n.getAttrib(i, Kw)) !== l || a) &&
                                (n.setAttrib(i, Kw, l ? r : null),
                                n.setAttrib(i, "aria-placeholder", l ? r : null),
                                ((e, t) => {
                                    e.dispatch("PlaceholderToggle", { state: t });
                                })(e, l),
                                e.on(l ? "keydown" : "keyup", s),
                                e.off(l ? "keyup" : "keydown", s));
                        };
                    Ge(r) &&
                        e.on("init", (t) => {
                            s(t, !0), e.on("change SetContent ExecCommand", s), e.on("paste", (t) => mg.setEditorTimeout(e, () => s(t)));
                        });
                })(e),
                nA(e);
            const s = ((e) => {
                const t = e;
                return ((e) => xe(e.plugins, "rtc").bind((e) => I.from(e.setup)))(e).fold(
                    () => ((t.rtcInstance = LC(e)), I.none()),
                    (e) => (
                        (t.rtcInstance = (() => {
                            const e = N(null),
                                t = N("");
                            return {
                                init: { bindEvents: E },
                                undoManager: { beforeChange: E, add: e, undo: e, redo: e, clear: E, reset: E, hasUndo: L, hasRedo: L, transact: e, ignore: E, extra: E },
                                formatter: { match: L, matchAll: N([]), matchNode: N(void 0), canApply: L, closest: t, apply: E, remove: E, toggle: E, formatChanged: N({ unbind: E }) },
                                editor: { getContent: t, setContent: N({ content: "", html: "" }), insertContent: N(""), addVisual: E },
                                selection: { getContent: t },
                                autocompleter: { addDecoration: E, removeDecoration: E },
                                raw: { getModel: N(I.none()) },
                            };
                        })()),
                        I.some(() =>
                            e().then(
                                (e) => (
                                    (t.rtcInstance = ((e) => {
                                        const t = (e) => (f(e) ? e : {}),
                                            { init: n, undoManager: o, formatter: r, editor: s, selection: a, autocompleter: i, raw: l } = e;
                                        return {
                                            init: { bindEvents: n.bindEvents },
                                            undoManager: {
                                                beforeChange: o.beforeChange,
                                                add: o.add,
                                                undo: o.undo,
                                                redo: o.redo,
                                                clear: o.clear,
                                                reset: o.reset,
                                                hasUndo: o.hasUndo,
                                                hasRedo: o.hasRedo,
                                                transact: (e, t, n) => o.transact(n),
                                                ignore: (e, t) => o.ignore(t),
                                                extra: (e, t, n, r) => o.extra(n, r),
                                            },
                                            formatter: {
                                                match: (e, n, o, s) => r.match(e, t(n), s),
                                                matchAll: r.matchAll,
                                                matchNode: r.matchNode,
                                                canApply: (e) => r.canApply(e),
                                                closest: (e) => r.closest(e),
                                                apply: (e, n, o) => r.apply(e, t(n)),
                                                remove: (e, n, o, s) => r.remove(e, t(n)),
                                                toggle: (e, n, o) => r.toggle(e, t(n)),
                                                formatChanged: (e, t, n, o, s) => r.formatChanged(t, n, o, s),
                                            },
                                            editor: { getContent: (e) => s.getContent(e), setContent: (e, t) => ({ content: s.setContent(e, t), html: "" }), insertContent: (e, t) => (s.insertContent(e), ""), addVisual: s.addVisual },
                                            selection: { getContent: (e, t) => a.getContent(t) },
                                            autocompleter: { addDecoration: i.addDecoration, removeDecoration: i.removeDecoration },
                                            raw: { getModel: () => I.some(l.getRawModel()) },
                                        };
                                    })(e)),
                                    e.rtc.isRemote
                                )
                            )
                        )
                    )
                );
            })(e);
            ((e) => {
                const t = e.getDoc(),
                    n = e.getBody();
                ((e) => {
                    e.dispatch("PreInit");
                })(e),
                    Md(e) || ((t.body.spellcheck = !1), lO.setAttrib(n, "spellcheck", "false")),
                    (e.quirks = iO(e)),
                    ((e) => {
                        e.dispatch("PostRender");
                    })(e);
                const o = Jl(e);
                void 0 !== o && (n.dir = o);
                const r = Id(e);
                r &&
                    e.on("BeforeSetContent", (e) => {
                        Dt.each(r, (t) => {
                            e.content = e.content.replace(t, (e) => "\x3c!--mce:protected " + escape(e) + "--\x3e");
                        });
                    }),
                    e.on("SetContent", () => {
                        e.addVisual(e.getBody());
                    }),
                    e.on("compositionstart compositionend", (t) => {
                        e.composing = "compositionstart" === t.type;
                    });
            })(e),
                s.fold(
                    () => {
                        const t = ((e) => {
                            let t = !1;
                            const n = setTimeout(() => {
                                t || e.setProgressState(!0);
                            }, 500);
                            return () => {
                                clearTimeout(n), (t = !0), e.setProgressState(!1);
                            };
                        })(e);
                        gO(e).then(() => {
                            pO(e), t();
                        });
                    },
                    (t) => {
                        e.setProgressState(!0),
                            gO(e).then(() => {
                                t().then(
                                    (t) => {
                                        e.setProgressState(!1), pO(e), UC(e);
                                    },
                                    (t) => {
                                        e.notificationManager.open({ type: "error", text: String(t) }), pO(e), UC(e);
                                    }
                                );
                            });
                    }
                );
        },
        bO = M,
        vO = Oa.DOM,
        yO = Oa.DOM,
        CO = (e, t) => ({ editorContainer: e, iframeContainer: t, api: {} }),
        wO = (e) => {
            const t = e.getElement();
            return e.inline
                ? CO(null)
                : ((e) => {
                      const t = yO.create("div");
                      return yO.insertAfter(t, e), CO(t, t);
                  })(t);
        },
        xO = async (e) => {
            e.dispatch("ScriptsLoaded"),
                ((e) => {
                    const t = Dt.trim(Il(e)),
                        n = e.ui.registry.getAll().icons,
                        o = { ...lw.get("default").icons, ...lw.get(t).icons };
                    ge(o, (t, o) => {
                        ke(n, o) || e.ui.registry.addIcon(o, t);
                    });
                })(e),
                ((e) => {
                    const t = sd(e);
                    if (m(t)) {
                        const n = vw.get(t);
                        (e.theme = n(e, vw.urls[t]) || {}), w(e.theme.init) && e.theme.init(e, vw.urls[t] || e.documentBaseUrl.replace(/\/$/, ""));
                    } else e.theme = {};
                })(e),
                ((e) => {
                    const t = id(e),
                        n = dw.get(t);
                    e.model = n(e, dw.urls[t]);
                })(e),
                ((e) => {
                    const t = [];
                    V(Sd(e), (n) => {
                        ((e, t, n) => {
                            const o = bw.get(n),
                                r = bw.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
                            if (((n = Dt.trim(n)), o && -1 === Dt.inArray(t, n))) {
                                if (e.plugins[n]) return;
                                try {
                                    const s = o(e, r) || {};
                                    (e.plugins[n] = s), w(s.init) && (s.init(e, r), t.push(n));
                                } catch (t) {
                                    ((e, t, n) => {
                                        const o = Ia.translate(["Failed to initialize plugin: {0}", t]);
                                        Gm(e, "PluginLoadError", { message: o }), Ew(o, n), ww(e, o);
                                    })(e, n, t);
                                }
                            }
                        })(e, t, ((e) => e.replace(/^\-/, ""))(n));
                    });
                })(e);
            const t = await ((e) => {
                const t = e.getElement();
                return (
                    (e.orgDisplay = t.style.display),
                    m(sd(e))
                        ? ((e) => {
                              const t = e.theme.renderUI;
                              return t ? t() : wO(e);
                          })(e)
                        : w(sd(e))
                        ? ((e) => {
                              const t = e.getElement(),
                                  n = sd(e)(e, t);
                              return (
                                  n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"),
                                  n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"),
                                  (n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight),
                                  n
                              );
                          })(e)
                        : wO(e)
                );
            })(e);
            ((e, t) => {
                const n = {
                    show: I.from(t.show).getOr(E),
                    hide: I.from(t.hide).getOr(E),
                    isEnabled: I.from(t.isEnabled).getOr(M),
                    setEnabled: (n) => {
                        e.mode.isReadOnly() || I.from(t.setEnabled).each((e) => e(n));
                    },
                };
                e.ui = { ...e.ui, ...n };
            })(e, I.from(t.api).getOr({})),
                (e.editorContainer = t.editorContainer),
                ((e) => {
                    e.contentCSS = e.contentCSS.concat(((e) => Sw(e, Yl(e)))(e), ((e) => Sw(e, Ql(e)))(e));
                })(e),
                e.inline
                    ? hO(e)
                    : ((e, t) => {
                          ((e, t) => {
                              const n = e.translate("Rich Text Area"),
                                  o = tn(yn(e.getElement()), "tabindex").bind(Xe),
                                  r = ((e, t, n, o) => {
                                      const r = bn("iframe");
                                      return o.each((e) => Jt(r, "tabindex", e)), Zt(r, n), Zt(r, { id: e + "_ifr", frameBorder: "0", allowTransparency: "true", title: t }), un(r, "tox-edit-area__iframe"), r;
                                  })(e.id, n, Cl(e), o).dom;
                              (r.onload = () => {
                                  (r.onload = null), e.dispatch("load");
                              }),
                                  (e.contentAreaContainer = t.iframeContainer),
                                  (e.iframeElement = r),
                                  (e.iframeHTML = ((e) => {
                                      let t = wl(e) + "<html><head>";
                                      xl(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), (t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
                                      const n = kl(e),
                                          o = El(e),
                                          r = e.translate(Td(e));
                                      return (
                                          Sl(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + Sl(e) + '" />'),
                                          (t += `</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`),
                                          t
                                      );
                                  })(e)),
                                  vO.add(t.iframeContainer, r);
                          })(e, t),
                              t.editorContainer && ((t.editorContainer.style.display = e.orgDisplay), (e.hidden = vO.isHidden(t.editorContainer))),
                              (e.getElement().style.display = "none"),
                              vO.setAttrib(e.id, "aria-hidden", "true"),
                              (e.getElement().style.visibility = e.orgVisibility),
                              ((e) => {
                                  const t = e.iframeElement,
                                      n = () => {
                                          (e.contentDocument = t.contentDocument), hO(e);
                                      };
                                  if (rc(e) || At.browser.isFirefox()) {
                                      const t = e.getDoc();
                                      t.open(), t.write(e.iframeHTML), t.close(), n();
                                  } else {
                                      const r =
                                          ((o = yn(t)),
                                          _o(o, "load", bO, () => {
                                              r.unbind(), n();
                                          }));
                                      t.srcdoc = e.iframeHTML;
                                  }
                                  var o;
                              })(e);
                      })(e, { editorContainer: t.editorContainer, iframeContainer: t.iframeContainer });
        },
        kO = Oa.DOM,
        EO = (e) => "-" === e.charAt(0),
        SO = (e, t, n) =>
            I.from(t)
                .filter((e) => Ge(e) && !lw.has(e))
                .map((t) => ({ url: `${e.editorManager.baseURL}/icons/${t}/icons${n}.js`, name: I.some(t) })),
        _O = (e, t) => {
            const n = Ba.ScriptLoader,
                o = () => {
                    !e.removed &&
                        ((e) => {
                            const t = sd(e);
                            return !m(t) || C(vw.get(t));
                        })(e) &&
                        ((e) => {
                            const t = id(e);
                            return C(dw.get(t));
                        })(e) &&
                        xO(e);
                };
            ((e, t) => {
                const n = sd(e);
                if (m(n) && !EO(n) && !ke(vw.urls, n)) {
                    const o = ad(e),
                        r = o ? e.documentBaseURI.toAbsolute(o) : `themes/${n}/theme${t}.js`;
                    vw.load(n, r).catch(() => {
                        ((e, t, n) => {
                            xw(e, "ThemeLoadError", kw("theme", t, n));
                        })(e, r, n);
                    });
                }
            })(e, t),
                ((e, t) => {
                    const n = id(e);
                    if ("plugin" !== n && !ke(dw.urls, n)) {
                        const o = ld(e),
                            r = m(o) ? e.documentBaseURI.toAbsolute(o) : `models/${n}/model${t}.js`;
                        dw.load(n, r).catch(() => {
                            ((e, t, n) => {
                                xw(e, "ModelLoadError", kw("model", t, n));
                            })(e, r, n);
                        });
                    }
                })(e, t),
                ((e, t) => {
                    const n = Vl(t),
                        o = Wl(t);
                    if (!Ia.hasCode(n) && "en" !== n) {
                        const r = Ge(o) ? o : `${t.editorManager.baseURL}/langs/${n}.js`;
                        e.add(r).catch(() => {
                            ((e, t, n) => {
                                xw(e, "LanguageLoadError", kw("language", t, n));
                            })(t, r, n);
                        });
                    }
                })(n, e),
                ((e, t, n) => {
                    const o = SO(t, "default", n),
                        r = ((e) =>
                            I.from(Fl(e))
                                .filter(Ge)
                                .map((e) => ({ url: e, name: I.none() })))(t).orThunk(() => SO(t, Il(t), ""));
                    V(
                        ((e) => {
                            const t = [],
                                n = (e) => {
                                    t.push(e);
                                };
                            for (let t = 0; t < e.length; t++) e[t].each(n);
                            return t;
                        })([o, r]),
                        (n) => {
                            e.add(n.url).catch(() => {
                                ((e, t, n) => {
                                    xw(e, "IconsLoadError", kw("icons", t, n));
                                })(t, n.url, n.name.getOrUndefined());
                            });
                        }
                    );
                })(n, e, t),
                ((e, t) => {
                    const n = (t, n) => {
                        bw.load(t, n).catch(() => {
                            ((e, t, n) => {
                                xw(e, "PluginLoadError", kw("plugin", t, n));
                            })(e, n, t);
                        });
                    };
                    ge(_d(e), (t, o) => {
                        n(o, t), e.options.set("plugins", Sd(e).concat(o));
                    }),
                        V(Sd(e), (e) => {
                            !(e = Dt.trim(e)) || bw.urls[e] || EO(e) || n(e, `plugins/${e}/plugin${t}.js`);
                        });
                })(e, t),
                n.loadQueue().then(o, o);
        },
        NO = xt().deviceType,
        RO = NO.isPhone(),
        AO = NO.isTablet(),
        OO = (e) => {
            if (y(e)) return [];
            {
                const t = p(e) ? e : e.split(/[ ,]/),
                    n = q(t, Ve);
                return G(n, Ge);
            }
        },
        TO = (e, t) => {
            const n = ((t, n) => {
                const o = {},
                    r = {};
                return ve(t, (t, n) => H(e, n), be(o), be(r)), { t: o, f: r };
            })(t);
            return (o = n.t), (r = n.f), { sections: N(o), options: N(r) };
            var o, r;
        },
        BO = (e, t) => ke(e.sections(), t),
        DO = (e, t) => ({ table_grid: !1, object_resizing: !1, resize: !1, toolbar_mode: xe(e, "toolbar_mode").getOr("scrolling"), toolbar_sticky: !1, ...(t ? { menubar: !1 } : {}) }),
        PO = (e, t) => {
            var n;
            const o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
            return e && e.external_plugins ? Dt.extend({}, e.external_plugins, o) : o;
        },
        LO = (e, t, n, o, r) => {
            var s;
            const a = e ? { mobile: DO(null !== (s = r.mobile) && void 0 !== s ? s : {}, t) } : {},
                i = TO(["mobile"], IS(a, r)),
                l = Dt.extend(
                    n,
                    o,
                    i.options(),
                    ((e, t) => e && BO(t, "mobile"))(e, i)
                        ? ((e, t, n = {}) => {
                              const o = e.sections(),
                                  r = xe(o, t).getOr({});
                              return Dt.extend({}, n, r);
                          })(i, "mobile")
                        : {},
                    { external_plugins: PO(o, i.options()) }
                );
            return ((e, t, n, o) => {
                const r = OO(n.forced_plugins),
                    s = OO(o.plugins),
                    a = ((e, t) => (BO(e, t) ? e.sections()[t] : {}))(t, "mobile"),
                    i = ((e, t, n, o) => (e && BO(t, "mobile") ? o : n))(e, t, s, a.plugins ? OO(a.plugins) : s),
                    l = ((e, t) => [...OO(e), ...OO(t)])(r, i);
                return Dt.extend(o, { forced_plugins: r, plugins: l });
            })(e, i, o, l);
        },
        MO = (e) => {
            ((e) => {
                const t = (t) => () => {
                    V("left,center,right,justify".split(","), (n) => {
                        t !== n && e.formatter.remove("align" + n);
                    }),
                        "none" !== t &&
                            ((t, n) => {
                                e.formatter.toggle(t, void 0), e.nodeChanged();
                            })("align" + t);
                };
                e.editorCommands.addCommands({ JustifyLeft: t("left"), JustifyCenter: t("center"), JustifyRight: t("right"), JustifyFull: t("justify"), JustifyNone: t("none") });
            })(e),
                ((e) => {
                    const t = (t) => () => {
                        const n = e.selection,
                            o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
                        return $(o, (n) => C(e.formatter.matchNode(n, t)));
                    };
                    e.editorCommands.addCommands({ JustifyLeft: t("alignleft"), JustifyCenter: t("aligncenter"), JustifyRight: t("alignright"), JustifyFull: t("alignjustify") }, "state");
                })(e);
        },
        IO = (e, t) => {
            const n = e.selection,
                o = e.dom;
            return /^ | $/.test(t)
                ? ((e, t, n) => {
                      const o = yn(e.getRoot());
                      return (n = Up(o, Li.fromRangeStart(t)) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " ")), zp(o, Li.fromRangeEnd(t)) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ");
                  })(o, n.getRng(), t)
                : t;
        },
        FO = (e, t) => {
            if (e.selection.isEditable()) {
                const { content: n, details: o } = ((e) => {
                    if ("string" != typeof e) {
                        const t = Dt.extend({ paste: e.paste, data: { paste: e.paste } }, e);
                        return { content: e.content, details: t };
                    }
                    return { content: e, details: {} };
                })(t);
                iC(e, { ...o, content: IO(e, n), format: "html", set: !1, selection: !0 }).each((t) => {
                    const n = ((e, t, n) => IC(e).editor.insertContent(t, n))(e, t.content, o);
                    lC(e, n, t), e.addVisual();
                });
            }
        },
        UO = { "font-size": "size", "font-family": "face" },
        zO = Xt("font"),
        jO = (e) => (t, n) =>
            I.from(n)
                .map(yn)
                .filter(Wt)
                .bind((n) =>
                    ((e, t, n) =>
                        vb(
                            yn(n),
                            (t) => ((t) => uo(t, e).orThunk(() => (zO(t) ? xe(UO, e).bind((e) => tn(t, e)) : I.none())))(t),
                            (e) => En(yn(t), e)
                        ))(e, t, n.dom).or(((e, t) => I.from(Oa.DOM.getStyle(t, e, !0)))(e, n.dom))
                )
                .getOr(""),
        HO = jO("font-size"),
        $O = S((e) => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ","), jO("font-family")),
        qO = (e) =>
            yu(e.getBody()).bind((e) => {
                const t = e.container();
                return I.from(Jo(t) ? t.parentNode : t);
            }),
        VO = (e, t) =>
            ((e, t) =>
                ((e) =>
                    I.from(e.selection.getRng()).bind((t) => {
                        const n = e.getBody();
                        return t.startContainer === n && 0 === t.startOffset ? I.none() : I.from(e.selection.getStart(!0));
                    }))(e)
                    .orThunk(O(qO, e))
                    .map(yn)
                    .filter(Wt)
                    .bind(t))(e, _(I.some, t)),
        WO = (e, t) => {
            if (/^[0-9.]+$/.test(t)) {
                const n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                    const o = ((e) => Dt.explode(e.options.get("font_size_style_values")))(e),
                        r = ((e) => Dt.explode(e.options.get("font_size_classes")))(e);
                    return r.length > 0 ? r[n - 1] || t : o[n - 1] || t;
                }
                return t;
            }
            return t;
        },
        KO = (e) => {
            const t = e.split(/\s*,\s*/);
            return q(t, (e) => (-1 === e.indexOf(" ") || He(e, '"') || He(e, "'") ? e : `'${e}'`)).join(",");
        },
        GO = (e, t) => {
            const n = e.dom,
                o = e.selection.getRng(),
                r = t ? e.selection.getStart() : e.selection.getEnd(),
                s = t ? o.startContainer : o.endContainer,
                a = tN(n, s);
            if (!a || !a.isContentEditable) return;
            const i = t ? go : po,
                l = Nl(e);
            ((e, t, n, o) => {
                const r = e.dom,
                    s = (e) => r.isBlock(e) && e.parentElement === n,
                    a = s(t) ? t : r.getParent(o, s, n);
                return I.from(a).map(yn);
            })(e, r, a, s).each((t) => {
                const n = sN(e, s, t.dom, a, !1, l);
                i(t, yn(n)), e.selection.setCursorLocation(n, 0), e.dispatch("NewBlock", { newBlock: n }), G_(e, "insertParagraph");
            });
        },
        YO = (e) => {
            MO(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        "Cut,Copy,Paste": (t) => {
                            const n = e.getDoc();
                            let o;
                            try {
                                n.execCommand(t);
                            } catch (e) {
                                o = !0;
                            }
                            if (("paste" !== t || n.queryCommandEnabled(t) || (o = !0), o || !n.queryCommandSupported(t))) {
                                let t = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                                (At.os.isMacOS() || At.os.isiOS()) && (t = t.replace(/Ctrl\+/g, "\u2318+")), e.notificationManager.open({ text: t, type: "error" });
                            }
                        },
                    });
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        mceAddUndoLevel: () => {
                            e.undoManager.add();
                        },
                        mceEndUndoLevel: () => {
                            e.undoManager.add();
                        },
                        Undo: () => {
                            e.undoManager.undo();
                        },
                        Redo: () => {
                            e.undoManager.redo();
                        },
                    });
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        mceSelectNodeDepth: (t, n, o) => {
                            let r = 0;
                            e.dom.getParent(e.selection.getNode(), (t) => !$o(t) || r++ !== o || (e.selection.select(t), !1), e.getBody());
                        },
                        mceSelectNode: (t, n, o) => {
                            e.selection.select(o);
                        },
                        selectAll: () => {
                            const t = e.dom.getParent(e.selection.getStart(), ar);
                            if (t) {
                                const n = e.dom.createRng();
                                n.selectNodeContents(t), e.selection.setRng(n);
                            }
                        },
                    });
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        mceCleanup: () => {
                            const t = e.selection.getBookmark();
                            e.setContent(e.getContent()), e.selection.moveToBookmark(t);
                        },
                        insertImage: (t, n, o) => {
                            FO(e, e.dom.createHTML("img", { src: o }));
                        },
                        insertHorizontalRule: () => {
                            e.execCommand("mceInsertContent", !1, "<hr>");
                        },
                        insertText: (t, n, o) => {
                            FO(e, e.dom.encode(o));
                        },
                        insertHTML: (t, n, o) => {
                            FO(e, o);
                        },
                        mceInsertContent: (t, n, o) => {
                            FO(e, o);
                        },
                        mceSetContent: (t, n, o) => {
                            e.setContent(o);
                        },
                        mceReplaceContent: (t, n, o) => {
                            e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({ format: "text" })));
                        },
                        mceNewDocument: () => {
                            e.setContent(Hd(e));
                        },
                    });
                })(e),
                ((e) => {
                    const t = (t, n, o) => {
                        const r = m(o) ? { href: o } : o,
                            s = e.dom.getParent(e.selection.getNode(), "a");
                        f(r) && m(r.href) && ((r.href = r.href.replace(/ /g, "%20")), (s && r.href) || e.formatter.remove("link"), r.href && e.formatter.apply("link", r, s));
                    };
                    e.editorCommands.addCommands({
                        unlink: () => {
                            if (e.selection.isEditable()) {
                                if (e.selection.isCollapsed()) {
                                    const t = e.dom.getParent(e.selection.getStart(), "a");
                                    return void (t && e.dom.remove(t, !0));
                                }
                                e.formatter.remove("link");
                            }
                        },
                        mceInsertLink: t,
                        createLink: t,
                    });
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        Indent: () => {
                            ((e) => {
                                fE(e, "indent");
                            })(e);
                        },
                        Outdent: () => {
                            gE(e);
                        },
                    }),
                        e.editorCommands.addCommands({ Outdent: () => cE(e) }, "state");
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        InsertNewBlockBefore: () => {
                            ((e) => {
                                GO(e, !0);
                            })(e);
                        },
                        InsertNewBlockAfter: () => {
                            ((e) => {
                                GO(e, !1);
                            })(e);
                        },
                    });
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        insertParagraph: () => {
                            MN(gN, e);
                        },
                        mceInsertNewLine: (t, n, o) => {
                            IN(e, o);
                        },
                        InsertLineBreak: (t, n, o) => {
                            MN(xN, e);
                        },
                    });
                })(e),
                ((e) => {
                    ((e) => {
                        e.editorCommands.addCommands({
                            "InsertUnorderedList,InsertOrderedList": (t) => {
                                e.getDoc().execCommand(t);
                                const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
                                if (n) {
                                    const t = n.parentNode;
                                    if (t && /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)) {
                                        const o = e.selection.getBookmark();
                                        e.dom.split(t, n), e.selection.moveToBookmark(o);
                                    }
                                }
                            },
                        });
                    })(e),
                        ((e) => {
                            e.editorCommands.addCommands(
                                {
                                    "InsertUnorderedList,InsertOrderedList": (t) => {
                                        const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                                        return n && (("insertunorderedlist" === t && "UL" === n.tagName) || ("insertorderedlist" === t && "OL" === n.tagName));
                                    },
                                },
                                "state"
                            );
                        })(e);
                })(e),
                ((e) => {
                    ((e) => {
                        const t = (t, n) => {
                            e.formatter.toggle(t, n), e.nodeChanged();
                        };
                        e.editorCommands.addCommands({
                            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (e) => {
                                t(e);
                            },
                            "ForeColor,HiliteColor": (e, n, o) => {
                                t(e, { value: o });
                            },
                            BackColor: (e, n, o) => {
                                t("hilitecolor", { value: o });
                            },
                            FontName: (t, n, o) => {
                                ((e, t) => {
                                    const n = WO(e, t);
                                    e.formatter.toggle("fontname", { value: KO(n) }), e.nodeChanged();
                                })(e, o);
                            },
                            FontSize: (t, n, o) => {
                                ((e, t) => {
                                    e.formatter.toggle("fontsize", { value: WO(e, t) }), e.nodeChanged();
                                })(e, o);
                            },
                            LineHeight: (t, n, o) => {
                                ((e, t) => {
                                    e.formatter.toggle("lineheight", { value: String(t) }), e.nodeChanged();
                                })(e, o);
                            },
                            Lang: (e, n, o) => {
                                var r;
                                t(e, { value: o.code, customValue: null !== (r = o.customCode) && void 0 !== r ? r : null });
                            },
                            RemoveFormat: (t) => {
                                e.formatter.remove(t);
                            },
                            mceBlockQuote: () => {
                                t("blockquote");
                            },
                            FormatBlock: (e, n, o) => {
                                t(m(o) ? o : "p");
                            },
                            mceToggleFormat: (e, n, o) => {
                                t(o);
                            },
                        });
                    })(e),
                        ((e) => {
                            const t = (t) => e.formatter.match(t);
                            e.editorCommands.addCommands({ "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": (e) => t(e), mceBlockQuote: () => t("blockquote") }, "state"),
                                e.editorCommands.addQueryValueHandler("FontName", () => ((e) => VO(e, (t) => $O(e.getBody(), t.dom)).getOr(""))(e)),
                                e.editorCommands.addQueryValueHandler("FontSize", () => ((e) => VO(e, (t) => HO(e.getBody(), t.dom)).getOr(""))(e)),
                                e.editorCommands.addQueryValueHandler("LineHeight", () =>
                                    ((e) =>
                                        VO(e, (t) => {
                                            const n = yn(e.getBody()),
                                                o = vb(t, (e) => uo(e, "line-height"), O(En, n));
                                            return o.getOrThunk(() => {
                                                const e = parseFloat(lo(t, "line-height")),
                                                    n = parseFloat(lo(t, "font-size"));
                                                return String(e / n);
                                            });
                                        }).getOr(""))(e)
                                );
                        })(e);
                })(e),
                ((e) => {
                    e.editorCommands.addCommands({
                        mceRemoveNode: (t, n, o) => {
                            const r = null != o ? o : e.selection.getNode();
                            if (r !== e.getBody()) {
                                const t = e.selection.getBookmark();
                                e.dom.remove(r, !0), e.selection.moveToBookmark(t);
                            }
                        },
                        mcePrint: () => {
                            e.getWin().print();
                        },
                        mceFocus: (t, n, o) => {
                            ((e, t) => {
                                e.removed ||
                                    (t
                                        ? kg(e)
                                        : ((e) => {
                                              const t = e.selection,
                                                  n = e.getBody();
                                              let o = t.getRng();
                                              e.quirks.refreshContentEditable(),
                                                  C(e.bookmark) &&
                                                      !xg(e) &&
                                                      cg(e).each((t) => {
                                                          e.selection.setRng(t), (o = t);
                                                      });
                                              const r = ((e, t) => e.dom.getParent(t, (t) => "true" === e.dom.getContentEditable(t)))(e, t.getNode());
                                              if (r && e.dom.isChildOf(r, n)) return wg(r), Cg(e, o), void kg(e);
                                              e.inline || (At.browser.isOpera() || wg(n), e.getWin().focus()), (At.browser.isFirefox() || e.inline) && (wg(n), Cg(e, o)), kg(e);
                                          })(e));
                            })(e, !0 === o);
                        },
                        mceToggleVisualAid: () => {
                            (e.hasVisual = !e.hasVisual), e.addVisual();
                        },
                    });
                })(e);
        },
        XO = ["toggleview"],
        QO = (e) => H(XO, e.toLowerCase());
    class JO {
        constructor(e) {
            (this.commands = { state: {}, exec: {}, value: {} }), (this.editor = e);
        }
        execCommand(e, t = !1, n, o) {
            const r = this.editor,
                s = e.toLowerCase(),
                a = null == o ? void 0 : o.skip_focus;
            if (r.removed) return !1;
            if (
                ("mcefocus" !== s &&
                    (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a
                        ? ((e) => {
                              cg(e).each((t) => e.selection.setRng(t));
                          })(r)
                        : r.focus()),
                r.dispatch("BeforeExecCommand", { command: e, ui: t, value: n }).isDefaultPrevented())
            )
                return !1;
            const i = this.commands.exec[s];
            return !!w(i) && (i(s, t, n), r.dispatch("ExecCommand", { command: e, ui: t, value: n }), !0);
        }
        queryCommandState(e) {
            if ((!QO(e) && this.editor.quirks.isHidden()) || this.editor.removed) return !1;
            const t = e.toLowerCase(),
                n = this.commands.state[t];
            return !!w(n) && n(t);
        }
        queryCommandValue(e) {
            if ((!QO(e) && this.editor.quirks.isHidden()) || this.editor.removed) return "";
            const t = e.toLowerCase(),
                n = this.commands.value[t];
            return w(n) ? n(t) : "";
        }
        addCommands(e, t = "exec") {
            const n = this.commands;
            ge(e, (e, o) => {
                V(o.toLowerCase().split(","), (o) => {
                    n[t][o] = e;
                });
            });
        }
        addCommand(e, t, n) {
            const o = e.toLowerCase();
            this.commands.exec[o] = (e, o, r) => t.call(null != n ? n : this.editor, o, r);
        }
        queryCommandSupported(e) {
            const t = e.toLowerCase();
            return !!this.commands.exec[t];
        }
        addQueryStateHandler(e, t, n) {
            this.commands.state[e.toLowerCase()] = () => t.call(null != n ? n : this.editor);
        }
        addQueryValueHandler(e, t, n) {
            this.commands.value[e.toLowerCase()] = () => t.call(null != n ? n : this.editor);
        }
    }
    const ZO = "data-mce-contenteditable",
        eT = (e, t, n) => {
            try {
                e.getDoc().execCommand(t, !1, String(n));
            } catch (e) {}
        },
        tT = (e, t) => {
            e.dom.contentEditable = t ? "true" : "false";
        },
        nT = (e, t) => {
            const n = yn(e.getBody());
            ((e, t, n) => {
                gn(e, t) && !n ? fn(e, t) : n && un(e, t);
            })(n, "mce-content-readonly", t),
                t
                    ? (e.selection.controlSelection.hideResizeRect(),
                      e._selectionOverrides.hideFakeCaret(),
                      ((e) => {
                          I.from(e.selection.getNode()).each((e) => {
                              e.removeAttribute("data-mce-selected");
                          });
                      })(e),
                      (e.readonly = !0),
                      tT(n, !1),
                      V(Fo(n, '*[contenteditable="true"]'), (e) => {
                          Jt(e, ZO, "true"), tT(e, !1);
                      }))
                    : ((e.readonly = !1),
                      e.hasEditableRoot() && tT(n, !0),
                      V(Fo(n, `*[${ZO}="true"]`), (e) => {
                          on(e, ZO), tT(e, !0);
                      }),
                      eT(e, "StyleWithCSS", !1),
                      eT(e, "enableInlineTableEditing", !1),
                      eT(e, "enableObjectResizing", !1),
                      ((e) =>
                          xg(e) ||
                          ((e) => {
                              const t = qn(yn(e.getElement()));
                              return ng(t)
                                  .filter((t) => !pg(t.dom) && hg(e, t.dom))
                                  .isSome();
                          })(e))(e) && e.focus(),
                      ((e) => {
                          e.selection.setRng(e.selection.getRng());
                      })(e),
                      e.nodeChanged());
        },
        oT = (e) => e.readonly,
        rT = (e) => {
            e.parser.addAttributeFilter("contenteditable", (t) => {
                oT(e) &&
                    V(t, (e) => {
                        e.attr(ZO, e.attr("contenteditable")), e.attr("contenteditable", "false");
                    });
            }),
                e.serializer.addAttributeFilter(ZO, (t) => {
                    oT(e) &&
                        V(t, (e) => {
                            e.attr("contenteditable", e.attr(ZO));
                        });
                }),
                e.serializer.addTempAttr(ZO);
        },
        sT = ["copy"],
        aT = Dt.makeMap(
            "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
            " "
        );
    class iT {
        static isNative(e) {
            return !!aT[e.toLowerCase()];
        }
        constructor(e) {
            (this.bindings = {}), (this.settings = e || {}), (this.scope = this.settings.scope || this), (this.toggleEvent = this.settings.toggleEvent || L);
        }
        fire(e, t) {
            return this.dispatch(e, t);
        }
        dispatch(e, t) {
            const n = e.toLowerCase(),
                o = ga(n, null != t ? t : {}, this.scope);
            this.settings.beforeFire && this.settings.beforeFire(o);
            const r = this.bindings[n];
            if (r)
                for (let e = 0, t = r.length; e < t; e++) {
                    const t = r[e];
                    if (!t.removed) {
                        if ((t.once && this.off(n, t.func), o.isImmediatePropagationStopped())) return o;
                        if (!1 === t.func.call(this.scope, o)) return o.preventDefault(), o;
                    }
                }
            return o;
        }
        on(e, t, n, o) {
            if ((!1 === t && (t = L), t)) {
                const r = { func: t, removed: !1 };
                o && Dt.extend(r, o);
                const s = e.toLowerCase().split(" ");
                let a = s.length;
                for (; a--; ) {
                    const e = s[a];
                    let t = this.bindings[e];
                    t || ((t = []), this.toggleEvent(e, !0)), (t = n ? [r, ...t] : [...t, r]), (this.bindings[e] = t);
                }
            }
            return this;
        }
        off(e, t) {
            if (e) {
                const n = e.toLowerCase().split(" ");
                let o = n.length;
                for (; o--; ) {
                    const r = n[o];
                    let s = this.bindings[r];
                    if (!r)
                        return (
                            ge(this.bindings, (e, t) => {
                                this.toggleEvent(t, !1), delete this.bindings[t];
                            }),
                            this
                        );
                    if (s) {
                        if (t) {
                            const e = K(s, (e) => e.func === t);
                            (s = e.fail),
                                (this.bindings[r] = s),
                                V(e.pass, (e) => {
                                    e.removed = !0;
                                });
                        } else s.length = 0;
                        s.length || (this.toggleEvent(e, !1), delete this.bindings[r]);
                    }
                }
            } else
                ge(this.bindings, (e, t) => {
                    this.toggleEvent(t, !1);
                }),
                    (this.bindings = {});
            return this;
        }
        once(e, t, n) {
            return this.on(e, t, n, { once: !0 });
        }
        has(e) {
            e = e.toLowerCase();
            const t = this.bindings[e];
            return !(!t || 0 === t.length);
        }
    }
    const lT = (e) => (
            e._eventDispatcher ||
                (e._eventDispatcher = new iT({
                    scope: e,
                    toggleEvent: (t, n) => {
                        iT.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n);
                    },
                })),
            e._eventDispatcher
        ),
        dT = {
            fire(e, t, n) {
                return this.dispatch(e, t, n);
            },
            dispatch(e, t, n) {
                const o = this;
                if (o.removed && "remove" !== e && "detach" !== e) return ga(e.toLowerCase(), null != t ? t : {}, o);
                const r = lT(o).dispatch(e, t);
                if (!1 !== n && o.parent) {
                    let t = o.parent();
                    for (; t && !r.isPropagationStopped(); ) t.dispatch(e, r, !1), (t = t.parent ? t.parent() : void 0);
                }
                return r;
            },
            on(e, t, n) {
                return lT(this).on(e, t, n);
            },
            off(e, t) {
                return lT(this).off(e, t);
            },
            once(e, t) {
                return lT(this).once(e, t);
            },
            hasEventListeners(e) {
                return lT(this).has(e);
            },
        },
        cT = Oa.DOM;
    let uT;
    const mT = (e, t) => {
            if ("selectionchange" === t) return e.getDoc();
            if (!e.inline && /^(?:mouse|touch|click|contextmenu|drop|dragover|dragend)/.test(t)) return e.getDoc().documentElement;
            const n = od(e);
            return n ? (e.eventRoot || (e.eventRoot = cT.select(n)[0]), e.eventRoot) : e.getBody();
        },
        fT = (e, t, n) => {
            ((e) => !e.hidden && !oT(e))(e)
                ? e.dispatch(t, n)
                : oT(e) &&
                  ((e, t) => {
                      if (((e) => "click" === e.type)(t) && !ef.metaKeyPressed(t)) {
                          const n = yn(t.target);
                          ((e, t) => to(t, "a", (t) => En(t, yn(e.getBody()))).bind((e) => tn(e, "href")))(e, n).each((n) => {
                              if ((t.preventDefault(), /^#/.test(n))) {
                                  const t = e.dom.select(`${n},[name="${ze(n, "#")}"]`);
                                  t.length && e.selection.scrollIntoView(t[0], !0);
                              } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
                          });
                      } else ((e) => H(sT, e.type))(t) && e.dispatch(t.type, t);
                  })(e, n);
        },
        gT = (e, t) => {
            if ((e.delegates || (e.delegates = {}), e.delegates[t] || e.removed)) return;
            const n = mT(e, t);
            if (od(e)) {
                if (
                    (uT ||
                        ((uT = {}),
                        e.editorManager.on("removeEditor", () => {
                            e.editorManager.activeEditor ||
                                (uT &&
                                    (ge(uT, (t, n) => {
                                        e.dom.unbind(mT(e, n));
                                    }),
                                    (uT = null)));
                        })),
                    uT[t])
                )
                    return;
                const o = (n) => {
                    const o = n.target,
                        r = e.editorManager.get();
                    let s = r.length;
                    for (; s--; ) {
                        const e = r[s].getBody();
                        (e === o || cT.isChildOf(o, e)) && fT(r[s], t, n);
                    }
                };
                (uT[t] = o), cT.bind(n, t, o);
            } else {
                const o = (n) => {
                    fT(e, t, n);
                };
                cT.bind(n, t, o), (e.delegates[t] = o);
            }
        },
        pT = {
            ...dT,
            bindPendingEventDelegates() {
                const e = this;
                Dt.each(e._pendingNativeEvents, (t) => {
                    gT(e, t);
                });
            },
            toggleNativeEvent(e, t) {
                const n = this;
                "focus" !== e &&
                    "blur" !== e &&
                    (n.removed ||
                        (t
                            ? n.initialized
                                ? gT(n, e)
                                : n._pendingNativeEvents
                                ? n._pendingNativeEvents.push(e)
                                : (n._pendingNativeEvents = [e])
                            : n.initialized && n.delegates && (n.dom.unbind(mT(n, e), e, n.delegates[e]), delete n.delegates[e])));
            },
            unbindAllNativeEvents() {
                const e = this,
                    t = e.getBody(),
                    n = e.dom;
                e.delegates &&
                    (ge(e.delegates, (t, n) => {
                        e.dom.unbind(mT(e, n), n, t);
                    }),
                    delete e.delegates),
                    !e.inline && t && n && ((t.onload = null), n.unbind(e.getWin()), n.unbind(e.getDoc())),
                    n && (n.unbind(t), n.unbind(e.getContainer()));
            },
        },
        hT = (e) => (m(e) ? { value: e.split(/[ ,]/), valid: !0 } : k(e, m) ? { value: e, valid: !0 } : { valid: !1, message: "The value must be a string[] or a comma/space separated string." }),
        bT = (e, t) => e + (Ye(t.message) ? "" : `. ${t.message}`),
        vT = (e) => e.valid,
        yT = (e, t, n = "") => {
            const o = t(e);
            return b(o) ? (o ? { value: e, valid: !0 } : { valid: !1, message: n }) : o;
        },
        CT = ["design", "readonly"],
        wT = (e, t, n, o) => {
            const r = n[t.get()],
                s = n[o];
            try {
                s.activate();
            } catch (e) {
                return void console.error(`problem while activating editor mode ${o}:`, e);
            }
            r.deactivate(),
                r.editorReadOnly !== s.editorReadOnly && nT(e, s.editorReadOnly),
                t.set(o),
                ((e, t) => {
                    e.dispatch("SwitchMode", { mode: t });
                })(e, o);
        },
        xT = Dt.each,
        kT = Dt.explode,
        ET = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        ST = Dt.makeMap("alt,ctrl,shift,meta,access"),
        _T = (e) => {
            const t = {},
                n = At.os.isMacOS() || At.os.isiOS();
            xT(kT(e.toLowerCase(), "+"), (e) => {
                ((e) => e in ST)(e) ? (t[e] = !0) : /^[0-9]{2,}$/.test(e) ? (t.keyCode = parseInt(e, 10)) : ((t.charCode = e.charCodeAt(0)), (t.keyCode = ET[e] || e.toUpperCase().charCodeAt(0)));
            });
            const o = [t.keyCode];
            let r;
            for (r in ST) t[r] ? o.push(r) : (t[r] = !1);
            return (t.id = o.join(",")), t.access && ((t.alt = !0), n ? (t.ctrl = !0) : (t.shift = !0)), t.meta && (n ? (t.meta = !0) : ((t.ctrl = !0), (t.meta = !1))), t;
        };
    class NT {
        constructor(e) {
            (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
            const t = this;
            e.on("keyup keypress keydown", (e) => {
                (!t.hasModifier(e) && !t.isFunctionKey(e)) ||
                    e.isDefaultPrevented() ||
                    (xT(t.shortcuts, (n) => {
                        t.matchShortcut(e, n) && ((t.pendingPatterns = n.subpatterns.slice(0)), "keydown" === e.type && t.executeShortcutAction(n));
                    }),
                    t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]), t.pendingPatterns.shift()));
            });
        }
        add(e, t, n, o) {
            const r = this,
                s = r.normalizeCommandFunc(n);
            return (
                xT(kT(Dt.trim(e)), (e) => {
                    const n = r.createShortcut(e, t, s, o);
                    r.shortcuts[n.id] = n;
                }),
                !0
            );
        }
        remove(e) {
            const t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
        }
        normalizeCommandFunc(e) {
            const t = this,
                n = e;
            return "string" == typeof n
                ? () => {
                      t.editor.execCommand(n, !1, null);
                  }
                : Dt.isArray(n)
                ? () => {
                      t.editor.execCommand(n[0], n[1], n[2]);
                  }
                : n;
        }
        createShortcut(e, t, n, o) {
            const r = Dt.map(kT(e, ">"), _T);
            return (r[r.length - 1] = Dt.extend(r[r.length - 1], { func: n, scope: o || this.editor })), Dt.extend(r[0], { desc: this.editor.translate(t), subpatterns: r.slice(1) });
        }
        hasModifier(e) {
            return e.altKey || e.ctrlKey || e.metaKey;
        }
        isFunctionKey(e) {
            return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123;
        }
        matchShortcut(e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || (e.charCode && e.charCode === t.charCode)) && (e.preventDefault(), !0);
        }
        executeShortcutAction(e) {
            return e.func ? e.func.call(e.scope) : null;
        }
    }
    const RT = () => {
            const e = (() => {
                const e = {},
                    t = {},
                    n = {},
                    o = {},
                    r = {},
                    s = {},
                    a = {},
                    i = {},
                    l = (e, t) => (n, o) => {
                        e[n.toLowerCase()] = { ...o, type: t };
                    };
                return {
                    addButton: l(e, "button"),
                    addGroupToolbarButton: l(e, "grouptoolbarbutton"),
                    addToggleButton: l(e, "togglebutton"),
                    addMenuButton: l(e, "menubutton"),
                    addSplitButton: l(e, "splitbutton"),
                    addMenuItem: l(t, "menuitem"),
                    addNestedMenuItem: l(t, "nestedmenuitem"),
                    addToggleMenuItem: l(t, "togglemenuitem"),
                    addAutocompleter: l(n, "autocompleter"),
                    addContextMenu: l(r, "contextmenu"),
                    addContextToolbar: l(s, "contexttoolbar"),
                    addContextForm: l(s, "contextform"),
                    addSidebar: l(a, "sidebar"),
                    addView: l(i, "views"),
                    addIcon: (e, t) => (o[e.toLowerCase()] = t),
                    getAll: () => ({ buttons: e, menuItems: t, icons: o, popups: n, contextMenus: r, contextToolbars: s, sidebars: a, views: i }),
                };
            })();
            return {
                addAutocompleter: e.addAutocompleter,
                addButton: e.addButton,
                addContextForm: e.addContextForm,
                addContextMenu: e.addContextMenu,
                addContextToolbar: e.addContextToolbar,
                addIcon: e.addIcon,
                addMenuButton: e.addMenuButton,
                addMenuItem: e.addMenuItem,
                addNestedMenuItem: e.addNestedMenuItem,
                addSidebar: e.addSidebar,
                addSplitButton: e.addSplitButton,
                addToggleButton: e.addToggleButton,
                addGroupToolbarButton: e.addGroupToolbarButton,
                addToggleMenuItem: e.addToggleMenuItem,
                addView: e.addView,
                getAll: e.getAll,
            };
        },
        AT = Oa.DOM,
        OT = Dt.extend,
        TT = Dt.each;
    class BT {
        constructor(e, t, n) {
            (this.plugins = {}),
                (this.contentCSS = []),
                (this.contentStyles = []),
                (this.loadedCSS = {}),
                (this.isNotDirty = !1),
                (this.composing = !1),
                (this.destroyed = !1),
                (this.hasHiddenInput = !1),
                (this.iframeElement = null),
                (this.initialized = !1),
                (this.readonly = !1),
                (this.removed = !1),
                (this.startContent = ""),
                (this._pendingNativeEvents = []),
                (this._skinLoaded = !1),
                (this._editableRoot = !0),
                (this.editorManager = n),
                (this.documentBaseUrl = n.documentBaseURL),
                OT(this, pT);
            const o = this;
            (this.id = e), (this.hidden = !1);
            const r = ((e, t) => LO(RO || AO, RO, t, e, t))(n.defaultOptions, t);
            (this.options = ((e, t) => {
                const n = {},
                    o = {},
                    r = (e, t, n) => {
                        const r = yT(t, n);
                        return vT(r) ? ((o[e] = r.value), !0) : (console.warn(bT(`Invalid value passed for the ${e} option`, r)), !1);
                    },
                    s = (e) => ke(n, e);
                return {
                    register: (e, s) => {
                        const a = ((e) => m(e.processor))(s)
                                ? ((e) => {
                                      const t = (() => {
                                          switch (e) {
                                              case "array":
                                                  return p;
                                              case "boolean":
                                                  return b;
                                              case "function":
                                                  return w;
                                              case "number":
                                                  return x;
                                              case "object":
                                                  return f;
                                              case "string":
                                                  return m;
                                              case "string[]":
                                                  return hT;
                                              case "object[]":
                                                  return (e) => k(e, f);
                                              case "regexp":
                                                  return (e) => u(e, RegExp);
                                              default:
                                                  return M;
                                          }
                                      })();
                                      return (n) => yT(n, t, `The value must be a ${e}.`);
                                  })(s.processor)
                                : s.processor,
                            i = ((e, t, n) => {
                                if (!v(t)) {
                                    const o = yT(t, n);
                                    if (vT(o)) return o.value;
                                    console.error(bT(`Invalid default value passed for the "${e}" option`, o));
                                }
                            })(e, s.default, a);
                        (n[e] = { ...s, default: i, processor: a }),
                            xe(o, e)
                                .orThunk(() => xe(t, e))
                                .each((t) => r(e, t, a));
                    },
                    isRegistered: s,
                    get: (e) =>
                        xe(o, e)
                            .orThunk(() => xe(n, e).map((e) => e.default))
                            .getOrUndefined(),
                    set: (e, t) => {
                        if (s(e)) {
                            const o = n[e];
                            return o.immutable ? (console.error(`"${e}" is an immutable option and cannot be updated`), !1) : r(e, t, o.processor);
                        }
                        return console.warn(`"${e}" is not a registered option. Ensure the option has been registered before setting a value.`), !1;
                    },
                    unset: (e) => {
                        const t = s(e);
                        return t && delete o[e], t;
                    },
                    isSet: (e) => ke(o, e),
                };
            })(0, r)),
                ((e) => {
                    const t = e.options.register;
                    t("id", { processor: "string", default: e.id }),
                        t("selector", { processor: "string" }),
                        t("target", { processor: "object" }),
                        t("suffix", { processor: "string" }),
                        t("cache_suffix", { processor: "string" }),
                        t("base_url", { processor: "string" }),
                        t("referrer_policy", { processor: "string", default: "" }),
                        t("language_load", { processor: "boolean", default: !0 }),
                        t("inline", { processor: "boolean", default: !1 }),
                        t("iframe_attrs", { processor: "object", default: {} }),
                        t("doctype", { processor: "string", default: "<!DOCTYPE html>" }),
                        t("document_base_url", { processor: "string", default: e.documentBaseUrl }),
                        t("body_id", { processor: yl(e, "tinymce"), default: "tinymce" }),
                        t("body_class", { processor: yl(e), default: "" }),
                        t("content_security_policy", { processor: "string", default: "" }),
                        t("br_in_pre", { processor: "boolean", default: !0 }),
                        t("forced_root_block", {
                            processor: (e) => {
                                const t = m(e) && Ge(e);
                                return t ? { value: e, valid: t } : { valid: !1, message: "Must be a non-empty string." };
                            },
                            default: "p",
                        }),
                        t("forced_root_block_attrs", { processor: "object", default: {} }),
                        t("newline_behavior", {
                            processor: (e) => {
                                const t = H(["block", "linebreak", "invert", "default"], e);
                                return t ? { value: e, valid: t } : { valid: !1, message: "Must be one of: block, linebreak, invert or default." };
                            },
                            default: "default",
                        }),
                        t("br_newline_selector", { processor: "string", default: ".mce-toc h2,figcaption,caption" }),
                        t("no_newline_selector", { processor: "string", default: "" }),
                        t("keep_styles", { processor: "boolean", default: !0 }),
                        t("end_container_on_empty_block", { processor: (e) => (b(e) || m(e) ? { valid: !0, value: e } : { valid: !1, message: "Must be boolean or a string" }), default: "blockquote" }),
                        t("font_size_style_values", { processor: "string", default: "xx-small,x-small,small,medium,large,x-large,xx-large" }),
                        t("font_size_legacy_values", { processor: "string", default: "xx-small,small,medium,large,x-large,xx-large,300%" }),
                        t("font_size_classes", { processor: "string", default: "" }),
                        t("automatic_uploads", { processor: "boolean", default: !0 }),
                        t("images_reuse_filename", { processor: "boolean", default: !1 }),
                        t("images_replace_blob_uris", { processor: "boolean", default: !0 }),
                        t("icons", { processor: "string", default: "" }),
                        t("icons_url", { processor: "string", default: "" }),
                        t("images_upload_url", { processor: "string", default: "" }),
                        t("images_upload_base_path", { processor: "string", default: "" }),
                        t("images_upload_credentials", { processor: "boolean", default: !1 }),
                        t("images_upload_handler", { processor: "function" }),
                        t("language", { processor: "string", default: "en" }),
                        t("language_url", { processor: "string", default: "" }),
                        t("entity_encoding", { processor: "string", default: "named" }),
                        t("indent", { processor: "boolean", default: !0 }),
                        t("indent_before", {
                            processor: "string",
                            default:
                                "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                        }),
                        t("indent_after", {
                            processor: "string",
                            default:
                                "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                        }),
                        t("indent_use_margin", { processor: "boolean", default: !1 }),
                        t("indentation", { processor: "string", default: "40px" }),
                        t("content_css", {
                            processor: (e) => {
                                const t = !1 === e || m(e) || k(e, m);
                                return t
                                    ? m(e)
                                        ? { value: q(e.split(","), Ve), valid: t }
                                        : p(e)
                                        ? { value: e, valid: t }
                                        : !1 === e
                                        ? { value: [], valid: t }
                                        : { value: e, valid: t }
                                    : { valid: !1, message: "Must be false, a string or an array of strings." };
                            },
                            default: pd(e) ? [] : ["default"],
                        }),
                        t("content_style", { processor: "string" }),
                        t("content_css_cors", { processor: "boolean", default: !1 }),
                        t("font_css", {
                            processor: (e) => {
                                const t = m(e) || k(e, m);
                                return t ? { value: p(e) ? e : q(e.split(","), Ve), valid: t } : { valid: !1, message: "Must be a string or an array of strings." };
                            },
                            default: [],
                        }),
                        t("inline_boundaries", { processor: "boolean", default: !0 }),
                        t("inline_boundaries_selector", { processor: "string", default: "a[href],code,span.mce-annotation" }),
                        t("object_resizing", {
                            processor: (e) => {
                                const t = b(e) || m(e);
                                return t
                                    ? !1 === e || fl.isiPhone() || fl.isiPad()
                                        ? { value: "", valid: t }
                                        : { value: !0 === e ? "table,img,figure.image,div,video,iframe" : e, valid: t }
                                    : { valid: !1, message: "Must be boolean or a string" };
                            },
                            default: !gl,
                        }),
                        t("resize_img_proportional", { processor: "boolean", default: !0 }),
                        t("event_root", { processor: "object" }),
                        t("service_message", { processor: "string" }),
                        t("theme", { processor: (e) => !1 === e || m(e) || w(e), default: "silver" }),
                        t("theme_url", { processor: "string" }),
                        t("formats", { processor: "object" }),
                        t("format_empty_lines", { processor: "boolean", default: !1 }),
                        t("format_noneditable_selector", { processor: "string", default: "" }),
                        t("preview_styles", {
                            processor: (e) => {
                                const t = !1 === e || m(e);
                                return t ? { value: !1 === e ? "" : e, valid: t } : { valid: !1, message: "Must be false or a string" };
                            },
                            default: "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow",
                        }),
                        t("custom_ui_selector", { processor: "string", default: "" }),
                        t("hidden_input", { processor: "boolean", default: !0 }),
                        t("submit_patch", { processor: "boolean", default: !0 }),
                        t("encoding", { processor: "string" }),
                        t("add_form_submit_trigger", { processor: "boolean", default: !0 }),
                        t("add_unload_trigger", { processor: "boolean", default: !0 }),
                        t("custom_undo_redo_levels", { processor: "number", default: 0 }),
                        t("disable_nodechange", { processor: "boolean", default: !1 }),
                        t("readonly", { processor: "boolean", default: !1 }),
                        t("editable_root", { processor: "boolean", default: !0 }),
                        t("plugins", { processor: "string[]", default: [] }),
                        t("external_plugins", { processor: "object" }),
                        t("forced_plugins", { processor: "string[]" }),
                        t("model", { processor: "string", default: e.hasPlugin("rtc") ? "plugin" : "dom" }),
                        t("model_url", { processor: "string" }),
                        t("block_unsupported_drop", { processor: "boolean", default: !0 }),
                        t("visual", { processor: "boolean", default: !0 }),
                        t("visual_table_class", { processor: "string", default: "mce-item-table" }),
                        t("visual_anchor_class", { processor: "string", default: "mce-item-anchor" }),
                        t("iframe_aria_text", { processor: "string", default: "Rich Text Area. Press ALT-0 for help." }),
                        t("setup", { processor: "function" }),
                        t("init_instance_callback", { processor: "function" }),
                        t("url_converter", { processor: "function", default: e.convertURL }),
                        t("url_converter_scope", { processor: "object", default: e }),
                        t("urlconverter_callback", { processor: "function" }),
                        t("allow_conditional_comments", { processor: "boolean", default: !1 }),
                        t("allow_html_data_urls", { processor: "boolean", default: !1 }),
                        t("allow_svg_data_urls", { processor: "boolean" }),
                        t("allow_html_in_named_anchor", { processor: "boolean", default: !1 }),
                        t("allow_script_urls", { processor: "boolean", default: !1 }),
                        t("allow_unsafe_link_target", { processor: "boolean", default: !1 }),
                        t("convert_fonts_to_spans", { processor: "boolean", default: !0, deprecated: !0 }),
                        t("fix_list_elements", { processor: "boolean", default: !1 }),
                        t("preserve_cdata", { processor: "boolean", default: !1 }),
                        t("remove_trailing_brs", { processor: "boolean", default: !0 }),
                        t("pad_empty_with_br", { processor: "boolean", default: !1 }),
                        t("inline_styles", { processor: "boolean", default: !0, deprecated: !0 }),
                        t("element_format", { processor: "string", default: "html" }),
                        t("entities", { processor: "string" }),
                        t("schema", { processor: "string", default: "html5" }),
                        t("convert_urls", { processor: "boolean", default: !0 }),
                        t("relative_urls", { processor: "boolean", default: !0 }),
                        t("remove_script_host", { processor: "boolean", default: !0 }),
                        t("custom_elements", { processor: "string" }),
                        t("extended_valid_elements", { processor: "string" }),
                        t("invalid_elements", { processor: "string" }),
                        t("invalid_styles", { processor: vl }),
                        t("valid_children", { processor: "string" }),
                        t("valid_classes", { processor: vl }),
                        t("valid_elements", { processor: "string" }),
                        t("valid_styles", { processor: vl }),
                        t("verify_html", { processor: "boolean", default: !0 }),
                        t("auto_focus", { processor: (e) => m(e) || !0 === e }),
                        t("browser_spellcheck", { processor: "boolean", default: !1 }),
                        t("protect", { processor: "array" }),
                        t("images_file_types", { processor: "string", default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp" }),
                        t("deprecation_warnings", { processor: "boolean", default: !0 }),
                        t("a11y_advanced_options", { processor: "boolean", default: !1 }),
                        t("api_key", { processor: "string" }),
                        t("paste_block_drop", { processor: "boolean", default: !1 }),
                        t("paste_data_images", { processor: "boolean", default: !0 }),
                        t("paste_preprocess", { processor: "function" }),
                        t("paste_postprocess", { processor: "function" }),
                        t("paste_webkit_styles", { processor: "string", default: "none" }),
                        t("paste_remove_styles_if_webkit", { processor: "boolean", default: !0 }),
                        t("paste_merge_formats", { processor: "boolean", default: !0 }),
                        t("smart_paste", { processor: "boolean", default: !0 }),
                        t("paste_as_text", { processor: "boolean", default: !1 }),
                        t("paste_tab_spaces", { processor: "number", default: 4 }),
                        t("text_patterns", {
                            processor: (e) => (k(e, f) || !1 === e ? { value: ml(!1 === e ? [] : e), valid: !0 } : { valid: !1, message: "Must be an array of objects or false." }),
                            default: [
                                { start: "*", end: "*", format: "italic" },
                                { start: "**", end: "**", format: "bold" },
                                { start: "#", format: "h1" },
                                { start: "##", format: "h2" },
                                { start: "###", format: "h3" },
                                { start: "####", format: "h4" },
                                { start: "#####", format: "h5" },
                                { start: "######", format: "h6" },
                                { start: "1. ", cmd: "InsertOrderedList" },
                                { start: "* ", cmd: "InsertUnorderedList" },
                                { start: "- ", cmd: "InsertUnorderedList" },
                            ],
                        }),
                        t("text_patterns_lookup", {
                            processor: (e) => {
                                return w(e)
                                    ? {
                                          value:
                                              ((t = e),
                                              (e) => {
                                                  const n = t(e);
                                                  return ml(n);
                                              }),
                                          valid: !0,
                                      }
                                    : { valid: !1, message: "Must be a single function" };
                                var t;
                            },
                            default: (e) => [],
                        }),
                        t("noneditable_class", { processor: "string", default: "mceNonEditable" }),
                        t("editable_class", { processor: "string", default: "mceEditable" }),
                        t("noneditable_regexp", { processor: (e) => (k(e, hl) ? { value: e, valid: !0 } : hl(e) ? { value: [e], valid: !0 } : { valid: !1, message: "Must be a RegExp or an array of RegExp." }), default: [] }),
                        t("table_tab_navigation", { processor: "boolean", default: !0 }),
                        t("highlight_on_focus", { processor: "boolean", default: !1 }),
                        t("xss_sanitization", { processor: "boolean", default: !0 }),
                        t("details_initial_state", {
                            processor: (e) => {
                                const t = H(["inherited", "collapsed", "expanded"], e);
                                return t ? { value: e, valid: t } : { valid: !1, message: "Must be one of: inherited, collapsed, or expanded." };
                            },
                            default: "inherited",
                        }),
                        t("details_serialized_state", {
                            processor: (e) => {
                                const t = H(["inherited", "collapsed", "expanded"], e);
                                return t ? { value: e, valid: t } : { valid: !1, message: "Must be one of: inherited, collapsed, or expanded." };
                            },
                            default: "inherited",
                        }),
                        t("init_content_sync", { processor: "boolean", default: !1 }),
                        t("newdocument_content", { processor: "string", default: "" }),
                        e.on("ScriptsLoaded", () => {
                            t("directionality", { processor: "string", default: Ia.isRtl() ? "rtl" : void 0 }), t("placeholder", { processor: "string", default: pl.getAttrib(e.getElement(), "placeholder") });
                        });
                })(o);
            const s = this.options.get;
            s("deprecation_warnings") &&
                ((e, t) => {
                    ((e, t) => {
                        const n = ew(e),
                            o = ow(t),
                            r = o.length > 0,
                            s = n.length > 0,
                            a = "mobile" === t.theme;
                        if (r || s || a) {
                            const e = "\n- ",
                                t = a ? `\n\nThemes:${e}mobile` : "",
                                i = r ? `\n\nPlugins:${e}${o.join(e)}` : "",
                                l = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                            console.warn(
                                "The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." +
                                    t +
                                    i +
                                    l
                            );
                        }
                    })(e, t),
                        ((e, t) => {
                            const n = tw(e),
                                o = rw(t),
                                r = o.length > 0,
                                s = n.length > 0;
                            if (r || s) {
                                const e = "\n- ",
                                    t = r ? `\n\nPlugins:${e}${o.map(sw).join(e)}` : "",
                                    a = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                                console.warn("The following deprecated features are currently enabled but will be removed soon." + t + a);
                            }
                        })(e, t);
                })(t, r);
            const a = s("suffix");
            a && (n.suffix = a), (this.suffix = n.suffix);
            const i = s("base_url");
            i && n._setBaseUrl(i), (this.baseUri = n.baseURI);
            const l = ql(o);
            l && (Ba.ScriptLoader._setReferrerPolicy(l), Oa.DOM.styleSheetLoader._setReferrerPolicy(l));
            const d = Ed(o);
            C(d) && Oa.DOM.styleSheetLoader._setContentCssCors(d),
                (Fa.languageLoad = s("language_load")),
                (Fa.baseURL = n.baseURL),
                this.setDirty(!1),
                (this.documentBaseURI = new qy(xl(o), { base_uri: this.baseUri })),
                (this.baseURI = this.baseUri),
                (this.inline = pd(o)),
                (this.hasVisual = Rd(o)),
                (this.shortcuts = new NT(this)),
                (this.editorCommands = new JO(this)),
                YO(this);
            const c = s("cache_suffix");
            c && (At.cacheSuffix = c.replace(/^[\?\&]+/, "")),
                (this.ui = { registry: RT(), styleSheetLoader: void 0, show: E, hide: E, setEnabled: E, isEnabled: M }),
                (this.mode = ((e) => {
                    const t = Da("design"),
                        n = Da({ design: { activate: E, deactivate: E, editorReadOnly: !1 }, readonly: { activate: E, deactivate: E, editorReadOnly: !0 } });
                    return (
                        ((e) => {
                            e.serializer
                                ? rT(e)
                                : e.on("PreInit", () => {
                                      rT(e);
                                  });
                        })(e),
                        ((e) => {
                            e.on("ShowCaret", (t) => {
                                oT(e) && t.preventDefault();
                            }),
                                e.on("ObjectSelected", (t) => {
                                    oT(e) && t.preventDefault();
                                });
                        })(e),
                        {
                            isReadOnly: () => oT(e),
                            set: (o) =>
                                ((e, t, n, o) => {
                                    if (o !== n.get()) {
                                        if (!ke(t, o)) throw new Error(`Editor mode '${o}' is invalid`);
                                        e.initialized ? wT(e, n, t, o) : e.on("init", () => wT(e, n, t, o));
                                    }
                                })(e, n.get(), t, o),
                            get: () => t.get(),
                            register: (e, t) => {
                                n.set(
                                    ((e, t, n) => {
                                        if (H(CT, t)) throw new Error(`Cannot override default mode ${t}`);
                                        return {
                                            ...e,
                                            [t]: {
                                                ...n,
                                                deactivate: () => {
                                                    try {
                                                        n.deactivate();
                                                    } catch (e) {
                                                        console.error(`problem while deactivating editor mode ${t}:`, e);
                                                    }
                                                },
                                            },
                                        };
                                    })(n.get(), e, t)
                                );
                            },
                        }
                    );
                })(o)),
                n.dispatch("SetupEditor", { editor: this });
            const g = Bd(o);
            w(g) && g.call(o, o);
        }
        render() {
            ((e) => {
                const t = e.id;
                Ia.setCode(Vl(e));
                const n = () => {
                    kO.unbind(window, "ready", n), e.render();
                };
                if (!Ca.Event.domLoaded) return void kO.bind(window, "ready", n);
                if (!e.getElement()) return;
                const o = yn(e.getElement()),
                    r = rn(o);
                e.on("remove", () => {
                    W(o.dom.attributes, (e) => on(o, e.name)), Zt(o, r);
                }),
                    (e.ui.styleSheetLoader = ((e, t) => Ms.forElement(e, { contentCssCors: Ed(t), referrerPolicy: ql(t) }))(o, e)),
                    pd(e) ? (e.inline = !0) : ((e.orgVisibility = e.getElement().style.visibility), (e.getElement().style.visibility = "hidden"));
                const s = e.getElement().form || kO.getParent(t, "form");
                s &&
                    ((e.formElement = s),
                    hd(e) && !Qo(e.getElement()) && (kO.insertAfter(kO.create("input", { type: "hidden", name: t }), t), (e.hasHiddenInput = !0)),
                    (e.formEventDelegate = (t) => {
                        e.dispatch(t.type, t);
                    }),
                    kO.bind(s, "submit reset", e.formEventDelegate),
                    e.on("reset", () => {
                        e.resetContent();
                    }),
                    !bd(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || ((s._mceOldSubmit = s.submit), (s.submit = () => (e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s))))),
                    (e.windowManager = yw(e)),
                    (e.notificationManager = hw(e)),
                    ((e) => "xml" === e.options.get("encoding"))(e) &&
                        e.on("GetContent", (e) => {
                            e.save && (e.content = kO.encode(e.content));
                        }),
                    vd(e) &&
                        e.on("submit", () => {
                            e.initialized && e.save();
                        }),
                    yd(e) &&
                        ((e._beforeUnload = () => {
                            !e.initialized || e.destroyed || e.isHidden() || e.save({ format: "raw", no_events: !0, set_dirty: !1 });
                        }),
                        e.editorManager.on("BeforeUnload", e._beforeUnload)),
                    e.editorManager.add(e),
                    _O(e, e.suffix);
            })(this);
        }
        focus(e) {
            this.execCommand("mceFocus", !1, e);
        }
        hasFocus() {
            return xg(this);
        }
        translate(e) {
            return Ia.translate(e);
        }
        getParam(e, t, n) {
            const o = this.options;
            return o.isRegistered(e) || (C(n) ? o.register(e, { processor: n, default: t }) : o.register(e, { processor: M, default: t })), o.isSet(e) || v(t) ? o.get(e) : t;
        }
        hasPlugin(e, t) {
            return !(!H(Sd(this), e) || (t && void 0 === bw.get(e)));
        }
        nodeChanged(e) {
            this._nodeChangeDispatcher.nodeChanged(e);
        }
        addCommand(e, t, n) {
            this.editorCommands.addCommand(e, t, n);
        }
        addQueryStateHandler(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n);
        }
        addQueryValueHandler(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n);
        }
        addShortcut(e, t, n, o) {
            this.shortcuts.add(e, t, n, o);
        }
        execCommand(e, t, n, o) {
            return this.editorCommands.execCommand(e, t, n, o);
        }
        queryCommandState(e) {
            return this.editorCommands.queryCommandState(e);
        }
        queryCommandValue(e) {
            return this.editorCommands.queryCommandValue(e);
        }
        queryCommandSupported(e) {
            return this.editorCommands.queryCommandSupported(e);
        }
        show() {
            const e = this;
            e.hidden && ((e.hidden = !1), e.inline ? (e.getBody().contentEditable = "true") : (AT.show(e.getContainer()), AT.hide(e.id)), e.load(), e.dispatch("show"));
        }
        hide() {
            const e = this;
            e.hidden ||
                (e.save(),
                e.inline ? ((e.getBody().contentEditable = "false"), e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (AT.hide(e.getContainer()), AT.setStyle(e.id, "display", e.orgDisplay)),
                (e.hidden = !0),
                e.dispatch("hide"));
        }
        isHidden() {
            return this.hidden;
        }
        setProgressState(e, t) {
            this.dispatch("ProgressState", { state: e, time: t });
        }
        load(e = {}) {
            const t = this,
                n = t.getElement();
            if (t.removed) return "";
            if (n) {
                const o = { ...e, load: !0 },
                    r = Qo(n) ? n.value : n.innerHTML,
                    s = t.setContent(r, o);
                return o.no_events || t.dispatch("LoadContent", { ...o, element: n }), s;
            }
            return "";
        }
        save(e = {}) {
            const t = this;
            let n = t.getElement();
            if (!n || !t.initialized || t.removed) return "";
            const o = { ...e, save: !0, element: n };
            let r = t.getContent(o);
            const s = { ...o, content: r };
            if ((s.no_events || t.dispatch("SaveContent", s), "raw" === s.format && t.dispatch("RawSaveContent", s), (r = s.content), Qo(n))) n.value = r;
            else {
                (!e.is_removing && t.inline) || (n.innerHTML = r);
                const o = AT.getParent(t.id, "form");
                o && TT(o.elements, (e) => e.name !== t.id || ((e.value = r), !1));
            }
            return (s.element = o.element = n = null), !1 !== s.set_dirty && t.setDirty(!1), r;
        }
        setContent(e, t) {
            return GC(this, e, t);
        }
        getContent(e) {
            return ((e, t = {}) => {
                const n = ((e, t) => ({ ...e, format: t, get: !0, getInner: !0 }))(t, t.format ? t.format : "html");
                return sC(e, n).fold(R, (t) => {
                    const n = ((e, t) => IC(e).editor.getContent(t))(e, t);
                    return aC(e, n, t);
                });
            })(this, e);
        }
        insertContent(e, t) {
            t && (e = OT({ content: e }, t)), this.execCommand("mceInsertContent", !1, e);
        }
        resetContent(e) {
            void 0 === e ? GC(this, this.startContent, { format: "raw" }) : GC(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
        }
        isDirty() {
            return !this.isNotDirty;
        }
        setDirty(e) {
            const t = !this.isNotDirty;
            (this.isNotDirty = !e), e && e !== t && this.dispatch("dirty");
        }
        getContainer() {
            const e = this;
            return e.container || (e.container = e.editorContainer || AT.get(e.id + "_parent")), e.container;
        }
        getContentAreaContainer() {
            return this.contentAreaContainer;
        }
        getElement() {
            return this.targetElm || (this.targetElm = AT.get(this.id)), this.targetElm;
        }
        getWin() {
            const e = this;
            if (!e.contentWindow) {
                const t = e.iframeElement;
                t && (e.contentWindow = t.contentWindow);
            }
            return e.contentWindow;
        }
        getDoc() {
            const e = this;
            if (!e.contentDocument) {
                const t = e.getWin();
                t && (e.contentDocument = t.document);
            }
            return e.contentDocument;
        }
        getBody() {
            var e, t;
            const n = this.getDoc();
            return null !== (t = null !== (e = this.bodyElement) && void 0 !== e ? e : null == n ? void 0 : n.body) && void 0 !== t ? t : null;
        }
        convertURL(e, t, n) {
            const o = this,
                r = o.options.get,
                s = Pd(o);
            return w(s)
                ? s.call(o, e, n, !0, t)
                : !r("convert_urls") || "link" === n || (f(n) && "LINK" === n.nodeName) || 0 === e.indexOf("file:") || 0 === e.length
                ? e
                : r("relative_urls")
                ? o.documentBaseURI.toRelative(e)
                : (e = o.documentBaseURI.toAbsolute(e, r("remove_script_host")));
        }
        addVisual(e) {
            ((e, t) => {
                ((e, t) => {
                    FC(e).editor.addVisual(t);
                })(e, t);
            })(this, e);
        }
        setEditableRoot(e) {
            ((e, t) => {
                e._editableRoot !== t &&
                    ((e._editableRoot = t),
                    e.readonly || ((e.getBody().contentEditable = String(e.hasEditableRoot())), e.nodeChanged()),
                    ((e, t) => {
                        e.dispatch("EditableRootStateChange", { state: t });
                    })(e, t));
            })(this, e);
        }
        hasEditableRoot() {
            return this._editableRoot;
        }
        remove() {
            ((e) => {
                if (!e.removed) {
                    const { _selectionOverrides: t, editorUpload: n } = e,
                        o = e.getBody(),
                        r = e.getElement();
                    o && e.save({ is_removing: !0 }),
                        (e.removed = !0),
                        e.unbindAllNativeEvents(),
                        e.hasHiddenInput && C(null == r ? void 0 : r.nextSibling) && aw.remove(r.nextSibling),
                        ((e) => {
                            e.dispatch("remove");
                        })(e),
                        e.editorManager.remove(e),
                        !e.inline &&
                            o &&
                            ((e) => {
                                aw.setStyle(e.id, "display", e.orgDisplay);
                            })(e),
                        ((e) => {
                            e.dispatch("detach");
                        })(e),
                        aw.remove(e.getContainer()),
                        iw(t),
                        iw(n),
                        e.destroy();
                }
            })(this);
        }
        destroy(e) {
            ((e, t) => {
                const { selection: n, dom: o } = e;
                e.destroyed ||
                    (t || e.removed
                        ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), iw(n), iw(o)),
                          ((e) => {
                              const t = e.formElement;
                              t && (t._mceOldSubmit && ((t.submit = t._mceOldSubmit), delete t._mceOldSubmit), aw.unbind(t, "submit reset", e.formEventDelegate));
                          })(e),
                          ((e) => {
                              const t = e;
                              (t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null), (t.bodyElement = t.contentDocument = t.contentWindow = null), (t.iframeElement = t.targetElm = null);
                              const n = e.selection;
                              if (n) {
                                  const e = n.dom;
                                  t.selection = n.win = n.dom = e.doc = null;
                              }
                          })(e),
                          (e.destroyed = !0))
                        : e.remove());
            })(this, e);
        }
        uploadImages() {
            return this.editorUpload.uploadImages();
        }
        _scanForImages() {
            return this.editorUpload.scanForImages();
        }
    }
    const DT = Oa.DOM,
        PT = Dt.each;
    let LT,
        MT = !1,
        IT = [];
    const FT = (e) => {
            const t = e.type;
            PT(HT.get(), (n) => {
                switch (t) {
                    case "scroll":
                        n.dispatch("ScrollWindow", e);
                        break;
                    case "resize":
                        n.dispatch("ResizeWindow", e);
                }
            });
        },
        UT = (e) => {
            if (e !== MT) {
                const t = Oa.DOM;
                e ? (t.bind(window, "resize", FT), t.bind(window, "scroll", FT)) : (t.unbind(window, "resize", FT), t.unbind(window, "scroll", FT)), (MT = e);
            }
        },
        zT = (e) => {
            const t = IT;
            return (IT = G(IT, (t) => e !== t)), HT.activeEditor === e && (HT.activeEditor = IT.length > 0 ? IT[0] : null), HT.focusedEditor === e && (HT.focusedEditor = null), t.length !== IT.length;
        },
        jT = "CSS1Compat" !== document.compatMode,
        HT = {
            ...dT,
            baseURI: null,
            baseURL: null,
            defaultOptions: {},
            documentBaseURL: null,
            suffix: null,
            majorVersion: "6",
            minorVersion: "7.2",
            releaseDate: "2023-10-25",
            i18n: Ia,
            activeEditor: null,
            focusedEditor: null,
            setup() {
                const e = this;
                let t = "",
                    n = "",
                    o = qy.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(o) && ((o = o.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(o) || (o += "/"));
                const r = window.tinymce || window.tinyMCEPreInit;
                if (r) (t = r.base || r.baseURL), (n = r.suffix);
                else {
                    const e = document.getElementsByTagName("script");
                    for (let o = 0; o < e.length; o++) {
                        const r = e[o].src || "";
                        if ("" === r) continue;
                        const s = r.substring(r.lastIndexOf("/"));
                        if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                            -1 !== s.indexOf(".min") && (n = ".min"), (t = r.substring(0, r.lastIndexOf("/")));
                            break;
                        }
                    }
                    if (!t && document.currentScript) {
                        const e = document.currentScript.src;
                        -1 !== e.indexOf(".min") && (n = ".min"), (t = e.substring(0, e.lastIndexOf("/")));
                    }
                }
                var s;
                (e.baseURL = new qy(o).toAbsolute(t)), (e.documentBaseURL = o), (e.baseURI = new qy(e.baseURL)), (e.suffix = n), (s = e).on("AddEditor", O(vg, s)), s.on("RemoveEditor", O(yg, s));
            },
            overrideDefaults(e) {
                const t = e.base_url;
                t && this._setBaseUrl(t);
                const n = e.suffix;
                n && (this.suffix = n), (this.defaultOptions = e);
                const o = e.plugin_base_urls;
                void 0 !== o &&
                    ge(o, (e, t) => {
                        Fa.PluginManager.urls[t] = e;
                    });
            },
            init(e) {
                const t = this;
                let n;
                const o = Dt.makeMap(
                    "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                    " "
                );
                let r = (e) => {
                    n = e;
                };
                const s = () => {
                    let n = 0;
                    const a = [];
                    let i;
                    DT.unbind(window, "ready", s),
                        ((n) => {
                            const o = e.onpageload;
                            o && o.apply(t, []);
                        })(),
                        (i = ((e, t) => {
                            const n = [],
                                o = w(t) ? (e) => $(n, (n) => t(n, e)) : (e) => H(n, e);
                            for (let t = 0, r = e.length; t < r; t++) {
                                const r = e[t];
                                o(r) || n.push(r);
                            }
                            return n;
                        })(
                            ((e) =>
                                At.browser.isIE() || At.browser.isEdge()
                                    ? (Ew("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), [])
                                    : jT
                                    ? (Ew("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [])
                                    : m(e.selector)
                                    ? DT.select(e.selector)
                                    : C(e.target)
                                    ? [e.target]
                                    : [])(e)
                        )),
                        Dt.each(i, (e) => {
                            var n;
                            (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (zT(n), n.unbindAllNativeEvents(), n.destroy(!0), (n.removed = !0));
                        }),
                        (i = Dt.grep(i, (e) => !t.get(e.id))),
                        0 === i.length
                            ? r([])
                            : PT(i, (s) => {
                                  ((e, t) => e.inline && t.tagName.toLowerCase() in o)(e, s)
                                      ? Ew("Could not initialize inline editor on invalid inline target element", s)
                                      : ((e, o, s) => {
                                            const l = new BT(e, o, t);
                                            a.push(l),
                                                l.on("init", () => {
                                                    ++n === i.length && r(a);
                                                }),
                                                (l.targetElm = l.targetElm || s),
                                                l.render();
                                        })(
                                            ((e) => {
                                                let t = e.id;
                                                return (
                                                    t ||
                                                        ((t = xe(e, "name")
                                                            .filter((e) => !DT.get(e))
                                                            .getOrThunk(DT.uniqueId)),
                                                        e.setAttribute("id", t)),
                                                    t
                                                );
                                            })(s),
                                            e,
                                            s
                                        );
                              });
                };
                return (
                    DT.bind(window, "ready", s),
                    new Promise((e) => {
                        n
                            ? e(n)
                            : (r = (t) => {
                                  e(t);
                              });
                    })
                );
            },
            get(e) {
                return 0 === arguments.length ? IT.slice(0) : m(e) ? J(IT, (t) => t.id === e).getOr(null) : x(e) && IT[e] ? IT[e] : null;
            },
            add(e) {
                const t = this,
                    n = t.get(e.id);
                return (
                    n === e ||
                        (null === n && IT.push(e),
                        UT(!0),
                        (t.activeEditor = e),
                        t.dispatch("AddEditor", { editor: e }),
                        LT ||
                            ((LT = (e) => {
                                const n = t.dispatch("BeforeUnload");
                                if (n.returnValue) return e.preventDefault(), (e.returnValue = n.returnValue), n.returnValue;
                            }),
                            window.addEventListener("beforeunload", LT))),
                    e
                );
            },
            createEditor(e, t) {
                return this.add(new BT(e, t, this));
            },
            remove(e) {
                const t = this;
                let n;
                if (e) {
                    if (!m(e)) return (n = e), h(t.get(n.id)) ? null : (zT(n) && t.dispatch("RemoveEditor", { editor: n }), 0 === IT.length && window.removeEventListener("beforeunload", LT), n.remove(), UT(IT.length > 0), n);
                    PT(DT.select(e), (e) => {
                        (n = t.get(e.id)), n && t.remove(n);
                    });
                } else for (let e = IT.length - 1; e >= 0; e--) t.remove(IT[e]);
            },
            execCommand(e, t, n) {
                var o;
                const r = this,
                    s = f(n) ? (null !== (o = n.id) && void 0 !== o ? o : n.index) : n;
                switch (e) {
                    case "mceAddEditor":
                        if (!r.get(s)) {
                            const e = n.options;
                            new BT(s, e, r).render();
                        }
                        return !0;
                    case "mceRemoveEditor": {
                        const e = r.get(s);
                        return e && e.remove(), !0;
                    }
                    case "mceToggleEditor": {
                        const e = r.get(s);
                        return e ? (e.isHidden() ? e.show() : e.hide(), !0) : (r.execCommand("mceAddEditor", !1, n), !0);
                    }
                }
                return !!r.activeEditor && r.activeEditor.execCommand(e, t, n);
            },
            triggerSave: () => {
                PT(IT, (e) => {
                    e.save();
                });
            },
            addI18n: (e, t) => {
                Ia.add(e, t);
            },
            translate: (e) => Ia.translate(e),
            setActive(e) {
                const t = this.activeEditor;
                this.activeEditor !== e && (t && t.dispatch("deactivate", { relatedTarget: e }), e.dispatch("activate", { relatedTarget: t })), (this.activeEditor = e);
            },
            _setBaseUrl(e) {
                (this.baseURL = new qy(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, ""))), (this.baseURI = new qy(this.baseURL));
            },
        };
    HT.setup();
    const $T = (() => {
            const e = za();
            return {
                FakeClipboardItem: (e) => ({ items: e, types: me(e), getType: (t) => xe(e, t).getOrUndefined() }),
                write: (t) => {
                    e.set(t);
                },
                read: () => e.get().getOrUndefined(),
                clear: e.clear,
            };
        })(),
        qT = Math.min,
        VT = Math.max,
        WT = Math.round,
        KT = (e, t, n) => {
            let o = t.x,
                r = t.y;
            const s = e.w,
                a = e.h,
                i = t.w,
                l = t.h,
                d = (n || "").split("");
            return (
                "b" === d[0] && (r += l),
                "r" === d[1] && (o += i),
                "c" === d[0] && (r += WT(l / 2)),
                "c" === d[1] && (o += WT(i / 2)),
                "b" === d[3] && (r -= a),
                "r" === d[4] && (o -= s),
                "c" === d[3] && (r -= WT(a / 2)),
                "c" === d[4] && (o -= WT(s / 2)),
                GT(o, r, s, a)
            );
        },
        GT = (e, t, n, o) => ({ x: e, y: t, w: n, h: o }),
        YT = {
            inflate: (e, t, n) => GT(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n),
            relativePosition: KT,
            findBestRelativePosition: (e, t, n, o) => {
                for (let r = 0; r < o.length; r++) {
                    const s = KT(e, t, o[r]);
                    if (s.x >= n.x && s.x + s.w <= n.w + n.x && s.y >= n.y && s.y + s.h <= n.h + n.y) return o[r];
                }
                return null;
            },
            intersect: (e, t) => {
                const n = VT(e.x, t.x),
                    o = VT(e.y, t.y),
                    r = qT(e.x + e.w, t.x + t.w),
                    s = qT(e.y + e.h, t.y + t.h);
                return r - n < 0 || s - o < 0 ? null : GT(n, o, r - n, s - o);
            },
            clamp: (e, t, n) => {
                let o = e.x,
                    r = e.y,
                    s = e.x + e.w,
                    a = e.y + e.h;
                const i = t.x + t.w,
                    l = t.y + t.h,
                    d = VT(0, t.x - o),
                    c = VT(0, t.y - r),
                    u = VT(0, s - i),
                    m = VT(0, a - l);
                return (o += d), (r += c), n && ((s += d), (a += c), (o -= u), (r -= m)), (s -= u), (a -= m), GT(o, r, s - o, a - r);
            },
            create: GT,
            fromClientRect: (e) => GT(e.left, e.top, e.width, e.height),
        },
        XT = (() => {
            const e = {},
                t = {};
            return {
                load: (n, o) => {
                    const r = `Script at URL "${o}" failed to load`,
                        s = `Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;
                    if (void 0 !== e[n]) return e[n];
                    {
                        const a = new Promise((e, a) => {
                            const i = ((e, t, n = 1e3) => {
                                let o = !1,
                                    r = null;
                                const s = (e) => (...t) => {
                                        o || ((o = !0), null !== r && (clearTimeout(r), (r = null)), e.apply(null, t));
                                    },
                                    a = s(e),
                                    i = s(t);
                                return {
                                    start: (...e) => {
                                        o || null !== r || (r = setTimeout(() => i.apply(null, e), n));
                                    },
                                    resolve: a,
                                    reject: i,
                                };
                            })(e, a);
                            (t[n] = i.resolve),
                                Ba.ScriptLoader.loadScript(o).then(
                                    () => i.start(s),
                                    () => i.reject(r)
                                );
                        });
                        return (e[n] = a), a;
                    }
                },
                add: (n, o) => {
                    void 0 !== t[n] && (t[n](o), delete t[n]), (e[n] = Promise.resolve(o));
                },
                unload: (t) => {
                    delete e[t];
                },
            };
        })();
    let QT;
    try {
        const e = "__storage_test__";
        (QT = window.localStorage), QT.setItem(e, e), QT.removeItem(e);
    } catch (e) {
        QT = (() => {
            let e = {},
                t = [];
            const n = {
                getItem: (t) => e[t] || null,
                setItem: (n, o) => {
                    t.push(n), (e[n] = String(o));
                },
                key: (e) => t[e],
                removeItem: (n) => {
                    (t = t.filter((e) => e === n)), delete e[n];
                },
                clear: () => {
                    (t = []), (e = {});
                },
                length: 0,
            };
            return Object.defineProperty(n, "length", { get: () => t.length, configurable: !1, enumerable: !1 }), n;
        })();
    }
    const JT = {
            geom: { Rect: YT },
            util: {
                Delay: mg,
                Tools: Dt,
                VK: ef,
                URI: qy,
                EventDispatcher: iT,
                Observable: dT,
                I18n: Ia,
                LocalStorage: QT,
                ImageUploader: (e) => {
                    const t = Nw(),
                        n = Tw(e, t);
                    return { upload: (t, o = !0) => n.upload(t, o ? Ow(e) : void 0) };
                },
            },
            dom: { EventUtils: Ca, TreeWalker: zo, TextSeeker: ai, DOMUtils: Oa, ScriptLoader: Ba, RangeUtils: Df, Serializer: KC, StyleSheetLoader: Ls, ControlSelection: sf, BookmarkManager: Wm, Selection: qC, Event: Ca.Event },
            html: { Styles: ua, Entities: Zs, Node: Fg, Schema: ca, DomParser: oC, Writer: Yg, Serializer: Xg },
            Env: At,
            AddOnManager: Fa,
            Annotator: Vm,
            Formatter: $w,
            UndoManager: Vw,
            EditorCommands: JO,
            WindowManager: yw,
            NotificationManager: hw,
            EditorObservable: pT,
            Shortcuts: NT,
            Editor: BT,
            FocusManager: ug,
            EditorManager: HT,
            DOM: Oa.DOM,
            ScriptLoader: Ba.ScriptLoader,
            PluginManager: bw,
            ThemeManager: vw,
            ModelManager: dw,
            IconManager: lw,
            Resource: XT,
            FakeClipboard: $T,
            trim: Dt.trim,
            isArray: Dt.isArray,
            is: Dt.is,
            toArray: Dt.toArray,
            makeMap: Dt.makeMap,
            each: Dt.each,
            map: Dt.map,
            grep: Dt.grep,
            inArray: Dt.inArray,
            extend: Dt.extend,
            walk: Dt.walk,
            resolve: Dt.resolve,
            explode: Dt.explode,
            _addCacheSuffix: Dt._addCacheSuffix,
        },
        ZT = Dt.extend(HT, JT);
    ((e) => {
        (window.tinymce = e), (window.tinyMCE = e);
    })(ZT),
        ((e) => {
            if ("object" == typeof module)
                try {
                    module.exports = e;
                } catch (e) {}
        })(ZT);
})();

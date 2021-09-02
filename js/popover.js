/ ** *
@ popperjs / core v2 .9 .2 - Licencia MIT *
    /

"use estricto";
! function(e, t) {
    "object" == typeof
    export && "undefined"! = typeof module ? t(
        export) : "function" == typeof define && define.amd ? define(["export"], t) : t((e = "undefined"! = typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function(e) {
    function t(e) { return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } }

    function n(e) { return null == e ? window : "[object Window]"! == e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e }

    function o(e) { return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset } }

    function r(e) { return e instanceof n(e).Element || e instanceof Element }
    función i(e) { return e instancia de n(e).HTMLElement || e instancia de HTMLElement }
    función a(e) { return "undefined "! = tipo de ShadowRoot && (e instancia de n(e).ShadowRoot || e instancia de ShadowRoot) }
    función s(e) { return e ? (e.nodeName || " ").toLowerCase() : null }
    función f(e) { return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement }

    function p(e) { return t(f(e)).left + o(e).scrollLeft }

    function c(e) { return n(e).getComputedStyle(e) }

    function l(e) { return e = c(e), / auto | scroll | overlay | hidden /.test(e.overflow + e.overflowY + e.overflowX) }
    función u(e, r, a) {
        void 0 === a && (a = !1);
        var c = f(r);
        e = t(e);
        var u = i(r),
            d = { scrollLeft: 0, scrollTop: 0 },
            m = { x: 0, y: 0 };
        return (u || !u && !a) && (("body"! == s(r) || l(c)) && (d = r! == n(r) && i(r) ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop } : o(r)), i(r) ? ((m = t(r)).x + = r.clientLeft, m.y + = r.clientTop) : c && (mx = p(c))), { x: e.left + d.scrollLeft - mx, y: e.top + d.scrollTop - my, ancho: e.ancho, alto: e.height }
    }
    función d(e) {
        var n = t(e),
            o = e.offsetWidth,
            r = e.offsetHeight;
        return 1 > = Math.abs(n.width - o) && (o = n.width), 1 > = Math.abs(n.height - r) && (r = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
    }

    function m(e) { return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e) }
    función h(e) { return 0 <= ["html", "cuerpo", "# documento"].indexOf(s(e)) ? e.ownerDocument.body : i(e) && l(e) ? e : h(m(e)) }
    función v(e, t) {
        var o;
        void 0 === t && (t = []);
        var r = h(e);
        return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = n(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(v(m(r)))
    }
    función g(e) { return i(e) && "fijo"! == c(e).position ? e.offsetParent : null }

    function y(e) {
        for (var t = n(e), o = g(e); o && 0 <= ["table", "td ", " th "].indexOf(s(o)) && " static " === c(o).position;) o = g(o);
        if (o && (" html " === s(o) || "cuerpo" === s(o) && "estático" === c(o).posición)) return t;
        if (!o) e: {
            if (o = -1! == navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !i(e) || "fijo"! == c(e).position)
                for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e));) {
                    var r = c(e);
                    if ("none"! = = r.transform || "none"! == r.perspective || "paint" === r.contain || -1! == ["transform", "perspectiva"].indexOf(r.willChange) | | o && "filter" === r.willChange || o && r.filter && "none"! == r.filter) { o = e; break e }
                    e = e.parentNode
                }
            o = null
        }
        return o || t
    }

    function b(e) {
        función t(e) { o.add(e.name), [].concat(e.requiere || [], e.requiresIfExists || []).forEach((function(e) { o.has(e) || (e = n.get(e)) && t(e) })), r.push(e) }
        var n = new Map,
            o = new Set,
            r = [];
        return e.forEach((function(e) { n.set(e.name, e) })), e.forEach((function(e) { o.has(e.name) || t(e) })), r
    }

    function w(e) { var t; return function() { return t || (t = new Promise((function(n) { Promise.resolve().then((function() { t = void 0, n(e()) })) }))), t } }
    función x(e) { return e.split("-")[0] }
    función O(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && a(n))
            do {
                if (t && e.isSameNode(t)) return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }

    function j(e) { return Object.assign({}, e, { left: ex, top: ey, right: e.x + e.width, bottom: e.y + e.height }) }
    función E(e, r) {
        if ("viewport" === r) {
            r = n(e);
            var a = f(e);
            r = r.visualViewport;
            var s = a.clientWidth;
            a = a.clientHeight;
            var l = 0,
                u = 0;
            r && (s = r.ancho, a = r.height, / ^ ((?! chrome | android).) * safari /
                i.test(navigator.userAgent) || (l = r.offsetLeft, u = r.offsetTop)), e = j(e = { ancho: s, alto: a, x: l + p(e), y: u })
        }
        más i(r) ? ((e = t(r)).top + = r.clientTop, e.left + = r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, ex = e.izquierda, ey = e.top) : (u = f(e), e = f(u), s = o(u), r = null == (a = u.ownerDocument) ? void 0 : a.body, a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(r || e).direction && (u + = _(e.clientWidth, r ? r.clientWidth : 0) - a), e = j({ ancho: a, alto: l, x: u, y: s }));
        return e
    }
    función D(e, t, n) {
        return t = "clippingParents" === t ? función(e) {
            var t = v(m(e)),
                n = 0 <= ["absoluto", "fijo"].indexOf(c(e).posición) && i(e) ? y(e) : e;
            return r(n) ? t.filter((function(e) { return r(e) && O(e, n) && "body"! == s(e) })) : []
        }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function(t, n) { return n = E(e, n), t.top = _(n.top, t.top), t.right = U(n.right, t.right), t.bottom = U(n.bottom, t.abajo), t.izquierda = _(n.izquierda, t.izquierda), t }), E(e, n[0]))).ancho = n.derecha - n.izquierda, n.altura = n.bottom - n.top, nx = n.left, ny = n.top, n
    }

    function L(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : " y " }
    función P(e) {
        var t = e.reference,
            n = e.element,
            o = (e = e.placement) ? x(e) : null;
        e = e ? e.split(" - ")[1] : nulo;
        var r = t.x + t.width / 2 - n.width / 2,
            i = t.y + t.height / 2 - n.height / 2;
        switch (o) {
            case "arriba":
                r = { x: r, y: ty - n.altura };
                romper;
                caso "abajo": r = { x: r, y: t.y + t.altura };
                romper;
                caso "derecha ": r = { x: t.x + t.width, y: i };
                break;
            case " left ":
                r = { x: tx - n.width, y: i };
                break;
                predeterminado: r = { x: tx, y: ty }
        }
        if (null! = (o = o ? L(o) : null)) switch (i = "y" === o ? "height" : "ancho", e) {
            caso "inicio": r[o] - = t[i] / 2 - n[i] / 2;
            descanso;
            caso "fin": r[o] + = t[i] / 2 - n[i] / 2
        }
        return r
    }
    función M(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) }

    function k(e, t) { return t.reduce((function(t, n) { return t[n] = e, t }), {}) }

    function A(e, n) {
        void 0 === n && (n = {});
        var o = n;
        n = void 0 === (n = o.placement) ? e.placement : n;
        var i = o.boundary,
            a = void 0 === i ? "clippingParents" : i,
            s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
        i = void 0 === (i = o.elementContext) ? "popper" : i;
        var p = o.altBoundary,
            c = void 0! == p && p;
        o = M("number"! = typeof(o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C));
        var l = e.elements.reference;
        p = e.rects.popper, a = D(r(c = e.elements[c ? "popper" === i ? "reference" : "popper " : i]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({ referencia: s = t(l), elemento: p, estrategia: " absoluta ", ubicación: n }), p = j(Object.assign({}, p, c)), s = " popper " === i ? p : s;
        var u = { top: a.top - s.top + o.top, bottom: s.bottom - a.bottom + o.bottom, izquierda: a.izquierda - s.izquierda + o.izquierda, derecha: s.derecha - a.derecha + o.derecha };
        if (e = e.modifiersData.offset, "popper" === i && e) {
            var d = e[n];
            Object.keys(u).forEach((function(e) {
                var t = 0 <= [" right ", " bottom "].indexOf(e) ? 1 : -1,
                    n = 0 <= [" top ", " bottom "].indexOf(e) ? " y " : " x ";
                u[e] + = d[n] * t
            }))
        }
        return u
    }
    función W() { para(var e = argumentos.length, t = Array(e), n = 0; n < e; n++) t[n] = argumentos[n]; return !t.some((function(e) { return !(e && "function" == typeof e.getBoundingClientRect) })) }
    función B(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers,
            n = vacío 0 === t ? [] : t,
            o = vacío 0 === (e = e.defaultOptions) ? F : e;
        función de retorno(e, t, i) {
            función a() { f.forEach((function(e) { return e() })), f = [] }
            void 0 === i && (i = o);
            var s = { ubicación: "bottom", orderModifiers: [], opciones: Object.assign({}, F, o), modifiersData: {}, elementos: { referencia: e, popper: t }, atributos: {}, estilos: {} },
                f = [],
                p = !1,
                c = {
                    estado: s,
                    setOptions: function(i) {
                        return a(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = { referencia: r(e) ? v(e) : e.contextElement ? v(e.contextElement) : [], popper: v(t) }, i = function(e) { var t = b(e); return I.reduce((function(e, n) { return e.concat(t.filter((function(e) { return e.phase === n }))) }), []) }(function(e) {
                            var t = e.reduce((function(e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { opciones: Object.assign({}, n.options, t.options), datos: Object.assign({}, n.data, t.data) }) : t, e }), {});
                            devuelve Object.keys(t).map((function(e) { return t[e] }))
                        }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function(e) { return e.enabled })), s.orderedModifiers.forEach((function(e) {
                            var t = e.name,
                                n = e.options;
                            n = void 0 === n ? {} : n, "function" == typeof(e = e.effect) && (t = e({ estado: s, nombre: t, instancia: c, opciones: n }), f.push(t || función() {}))
                        })), c.update()
                    },
                    forceUpdate: function() {
                        if (!p) {
                            var e = s.elements,
                                t = e.reference;
                            if (W(t, e = e.popper)) para(s.rects = { referencia: u(t, y(e), "fijo" === s.options.strategy), popper: d(e) }, s.reset = !1, s.placement = s.options.ubicación, s.orderedModifiers.forEach((function(e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++) if (!0 === s.reset) s.reset = !1, t = -1;
                                else {
                                    var n = s.orderedModifiers[t];
                                    e = n.fn;
                                    var o = n.options;
                                    o = vacío 0 === o ? {} : o, n = n.nombre, "función" == tipo de e && (s = e({ estado: s, opciones: o, nombre: n, instancia: c }) || s)
                                }
                        }
                    },
                    actualización: w((function() { return new Promise((function(e) { c.forceUpdate(), e(s) })) })),
                    destroy: function() { a(), p = !0 }
                };
            return W(e, t) ? (c.setOptions(i).then((function(e) {!p && i.onFirstUpdate && i.onFirstUpdate(e) })), c) : c
        }
    }
    función T(e) {
        var t, o = e.popper,
            r = e.popperRect,
            i = e.placement,
            a = e.compensaciones,
            s = e.position,
            p = por ejemplo,
            puAcceleration, l = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = ay;
            var u = window.devicePixelRatio || 1;
            e = { x: z(z(ax * u) / u) || 0, y: z(z(e * u) / u) || 0 }
        }
        más e = "función" == tipo de e ? e(a) : a;
        e = vacío 0 === (e = (u = e).x) ? 0 : e, u = vacío 0 === (u = uy) ? 0 : u;
        var d = a.hasOwnProperty("x");
        a = a.hasOwnProperty("y");
        var m, h = "left",
            v = "top",
            g = window;
        if (l) {
            var b = y(o),
                w = "clientHeight",
                x = "clientWidth";
            b === n(o) && ("static"! == c(b = f(o)).position && (w = "scrollHeight ", x = " scrollWidth ")), " top " === i && (v = " bottom ", u - = b[w] - r.height, u * = p ? 1 : -1), " left " === i && (h = " derecha ", e - = b[x] - r.width, e * = p ? 1 : -1)
        }
        return o = Object.assign({ position: s }, l && J), p ? Object.assign({}, o, ((m = {})[v] = a ? "0" : "", m[h] = d ? "0" : "", m.transform = 2 > (g.devicePixelRatio || 1) ? "Translate (" + e + "px," + u + "px)" : "translate3d (" + e + "px," + u + "px, 0)", m)) : Object.assign({}, o, ((t = {})[v] = a ? U + "px" : "", t[h] = d ? E + "px" : "", t.transform = "", t))
    }
    función H(e) {
        return e.replace(/ left | right | bottom | top /
            g, (function(e) { return $[e] }))
    }

    function R(e) {
        return e.replace(/ start | end /
            g, (function(e) { return ee[e] }))
    }

    function S(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { arriba: e.top - t.height - ny, derecha: e.right - t.width + nx, abajo: e.bottom - t.height + ny, izquierda: e.left - t.width - nx } }
    función q(e) { retorno["arriba", "derecha", "abajo", "izquierda"].algunos((función(t) { retorno 0 <= e[t] })) }
    var C = ["arriba", "abajo", "derecha", "izquierda"],
        N = C.reduce((función(e, t) { return e.concat([t + "- inicio", t + "- fin "]) }), []),
        V = [].Concat(C, [" auto "]).Reduce((function(e, t) { return e.concat([t, t + " - start ", t + "- end"]) }), []),
        I = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(""),
        _ = Math.max,
        U = Math.min,
        z = Math.round,
        F = { ubicación: "inferior", modificadores: [], estrategia: "absoluta" },
        X = { pasivo: !0 },
        Y = {
            nombre: "eventListeners",
            habilitado: !0,
            fase: "escribir ",
            fn: función() {},
            efecto: función(e) {
                var t = e.state,
                    o = e.instance,
                    r = (e = e.options).scroll,
                    i = void 0 === r || r,
                    a = void 0 == = (e = e.resize) || e,
                    s = n(t.elements.popper),
                    f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return i && f.forEach((function(e) { e.addEventListener("scroll", o.update, X) })), a && s.addEventListener("resize", o.update, X),
                    function() { i && f.forEach((function(e) { e.removeEventListener("scroll", o.update, X) })), a && s.removeEventListener("resize", o.update, X) }
            },
            data: {}
        },
        G = {
            name: "popperOffsets",
            habilitado: !0,
            fase: "leer",
            fn: función(e) {
                var t = e.state;
                t.modifiersData[e.name] = P({ referencia: t.rects.reference, elemento: t.rects.popper, estrategia: "absoluta", ubicación: t.placement })
            },
            datos: {}
        },
        J = { arriba: "auto", derecha: "auto", abajo: "auto", izquierda: "auto " },
        K = {
            nombre: "computeStyles",
            habilitado: !0,
            fase: "beforeWrite",
            fn: función(e) {
                var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e;
                var o = n.adaptive;
                o = void 0 === o || o, n = void 0 === (n = n.RoundOffsets) || n, e = { ubicación: x(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null! = t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, { compensaciones: t.modifiersData.popperOffsets, posición: t.options.strategy, adaptive: o, roundOffsets: n })))), null! = t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, { compensaciones: t.modifiersData.arrow, posición: " absoluto ", adaptativo: !1, roundOffsets: n })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { " data-popper-position ": t.placement })
            },
            datos: {}
        },
        Q = {
            nombre: "applyStyles",
            habilitado: !0,
            fase: "escribir",
            fn: función(e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function(e) {
                    var n = t.styles[e] || {},
                        o = t.attributes[e] || {},
                        r = t.elements[e];
                    i(r) && s(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function(e) { var t = o[e];!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 == = t ? "" : t) })))
                }))
            },
            efecto: función(e) {
                var t = e.state,
                    n = { popper: { position: t.options.strategy, left: "0", arriba: "0", margen: "0" }, flecha: { posición: "absoluta" }, referencia: {} };
                return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() {
                        Object.keys(t.elements).forEach((function(e) {
                            var o = t.elements[e],
                                r = t.attributes[e] || {};
                            e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) { return e[t] = "", e }), {}), i(o) && s(o) && (Object.assign(o.style, e), Object.keys(r).forEach((function(e) { o.removeAttribute(e) })))
                        }))
                    }
            },
            requiere: ["computeStyles"]
        },
        Z = {
            nombre: "offset",
            habilitado: !0,
            fase: "principal",
            requiere: ["popperOffsets"],
            fn: función(e) {
                var t = e.state,
                    n = e.name,
                    o = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    r = (e = V.reduce((función(e, n) {
                        var r = t.rects,
                            i = x(n),
                            a = 0 <= ["left ", " top "].indexOf(i) ? -1 : 1,
                            s = " function " == typeof o ? o(Object.assign({}, r, { ubicación: n })) : o;
                        return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["izquierda", "derecha"].indexOf(i) ? { x: s, y: r } : { x: r, y: s }, e[n] = i, e
                    }), {}))[t.position],
                    i = rx;
                r = ry, null! = t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x + = i, t.modifiersData.popperOffsets.y + = r), t.modifiersData[n] = e
            }
        },
        $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
        ee = { start: "end", end: "start " },
        te = {
            nombre: " flip ",
            habilitado: !0,
            fase: " principal ",
            fn: función(e) {
                var t = e.state,
                    n = e.options;
                if (e = e.name, !t.modifiersData[e]._ skip) {
                    var o = n.mainAxis;
                    o = void 0 === o || o;
                    var r = n.altAxis;
                    r = void 0 === r || r;
                    var i = n.fallbackPlacements,
                        a = n.padding,
                        s = n.boundary,
                        f = n.rootBoundary,
                        p = n.altBoundary,
                        c = n.flipVariations,
                        l = void 0 === c || c,
                        u = n.allowedAutoPlacements;
                    c = x(n = t.options.placement), i = i || (c! == n && l ? function(e) { if ("auto" === x(e)) return []; var t = H(e); return [R(e), t, R(t)] }(n) : [H(n)]);
                    var d = [n].concat(i).reduce((function(e, n) {
                        return e.concat("auto" === x(n) ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t.límite,
                                o = t.rootBoundary,
                                r = t.padding,
                                i = t.flipVariations,
                                a = t.permitidosAutoPlacements,
                                s = void 0 === a ? V : a,
                                f = t.placement.split("-")[1];
                            0 === (i = (t = f ? i ? N : N.filter((function(e) { return e.split("-")[1] === f })) : C).filter((function(e) { return 0 <= s.indexOf(e) }))).length && (i = t);
                            var p = i.reduce((function(t, i) { return t[i] = A(e, { ubicación: i, boundary: n, rootBoundary: o, padding: r })[x(i)], t }), {});
                            return Object.keys(p).sort((function(e, t) { return p[e] - p[t] }))
                        }(t, { ubicación: n, límite: s, límite raíz: f, relleno: a, flipVariations: l, ubicaciones automáticas permitidas: u }) : n)
                    }), []);
                    n = t.rects.reference, i = t.rects.popper;
                    var m = new Map;
                    c = !0;
                    for (var h = d[0], v = 0; v < d.length; v++) {
                        var g = d[v],
                            y = x(g),
                            b = "start" === g.split("-")[1],
                            w = 0 <= ["top", "bottom"].indexOf(y),
                            O = w ? "width " : " altura ",
                            j = A(t, { ubicación: g, límite: s, límite raíz: f, límite alto: p, relleno: a });
                        if (b = w ? b ? "derecha " : " izquierda " : b ? " abajo " : " arriba ", n[O] > i[O] && (b = H(b)), O = H(b), w = [], o && w.push(0 > = j[y]), r && w.push(0 > = j[b], 0 > = j[O]), w.every((function(e) { return e }))) { h = g, c = !1; break }
                        m.set(g, w)
                    }
                    if (c)
                        for (o = function(e) { var t = d.find((function(t) { if (t = m.get(t)) return t.slice(0, e).every((function(e) { return e })) })); if (t) return h = t, "break" }, r = l ? 3 : 1; 0 < r && "break"! == o(r); r - );
                    t.placement! == h && (t.modifiersData[e]._ skip = !0, t.placement = h, t.reset = !0)
                }
            },
            requireIfExists: ["offset"],
            data: { _ skip: !1 }
        },
        ne = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var o = n.mainAxis,
                    r = void 0 === o || o,
                    i = void 0! == (o = n.altAxis) && o;
                o = vacío 0 === (o = n.tether) || o;
                var a = n.tetherOffset,
                    s = vacío 0 === a ? 0 : a,
                    f = A(t, { límite: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary });
                n = x(t.placement);
                var p = t.placement.split("-")[1],
                    c = !p,
                    l = L(n);
                n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets;
                var u = t.rects.reference,
                    m = t.rects.popper,
                    h = "function" == typeof s ? s(Object.assign({}, t.rects, { location: t.placement })) : s;
                if (s = { x: 0, y: 0 }, a) {
                    if (r || i) {
                        var v = "y" === l ? "top" : "left",
                            g = "y" === l ? "bottom" : "right",
                            b = "y" === l ? "altura" : "ancho",
                            w = a[l],
                            O = a[l] + f[v],
                            j = a[l] - f[g],
                            E = o ? -m[b] / 2 : 0,
                            D = "inicio" === p ? u[b] : m[b];
                        p = "inicio" === p ? -m[b] : -u[b], m = t.elements.arrow, m = o && m ? d(m) : { width: 0, height: 0 };
                        var P = t.modifiersData["arrow # persistent"] ? t.modifiersData["flecha # persistente"].relleno : { arriba: 0, derecha: 0, abajo: 0, izquierda: 0 };
                        v = P[v], g = P[g], m = _(0, U(u[b], m[b])), D = c ? u[b] / 2 - Emvh : Dmvh, u = c ? -U[b] / 2 + E + m + g + h : p + m + g + h, c = t.elements.arrow && y(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + Dh - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + uh, r && (r = o ? U(O, c) : O, j = o ? _(J, u) : j, r = _(r, U(w, j)), a[l] = r, s[l] = rw), i && (r = (i = a[n]) + f["x" === l ? "arriba" : "izquierda"], f = si["x" === l ? "abajo" : "derecha"], r = o ? U(r, c) : r, o = o ? _(f, u) : f, o = _(r, U(i, o)), a[n] = o, s[n] = oi)
                    }
                    t.modifiersData[e] = s
                }
            },
            requireIfExists: ["offset"]
        },
        oe = {
            nombre: "flecha",
            habilitado: !0,
            fase: "principal",
            fn: función(e) {
                var t, n = e.state,
                    o = e.name,
                    r = e.options,
                    i = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    s = x(n.lugar);
                if (e = L(s), s = 0 <= ["izquierda", "derecha "].indexOf(s) ? "height" : "width", i && a) {
                    r = M("number"! = typeof(r = "function" == typeof(r = r.padding) ? r(Object.assign({}, n.rects, { ubicación: n.ubicación })) : r) ? r : k(r, C));
                    var f = d(i),
                        p = "y" === e ? "top" : "izquierda",
                        c = "y" === e ? "abajo" : "derecha",
                        l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
                    a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = _(r[p], U(a,
                        if [s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = sa, t)
                }
            },
            efecto: función(e) {
                var t = e.state;
                if (null! = (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
                    if ("cadena" == tipo de e && !(e = t.elements.popper.querySelector(e))) return;
                    O(t.elements.popper, e) && (t.elements.arrow = e)
                }
            },
            requiere: ["popperOffsets"],
            requireIfExists: ["preventOverflow"]
        },
        re = {
            nombre: "ocultar",
            habilitado: !0,
            fase: "principal",
            requireIfExists: ["preventOverflow"],
            fn: función(e) {
                var t = e.state;
                e = e.name;
                var n = t.rects.reference,
                    o = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    i = A(t, { elementContext: "referencia" }),
                    a = A(t, { altBoundary: !0 });
                n = S(i, n), o = S(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: o, isReferenceHidden: r, hasPopperEscaped: a }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper -reference-hidden ": r, " data-popper-escaped ": a })
            }
        },
        es decir, = B({ defaultModifiers: [Y, G, K, Q] }),
        ae = [Y, G, K, Q, Z, te, ne, oe, re],
        se = B({ defaultModifiers: ae });
    e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = es decir, e.defaultModifiers = ae, e.detectOverflow = A, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__ esModule", { valor: !0 })
}));
// # sourceMappingURL = popper.min.js.map
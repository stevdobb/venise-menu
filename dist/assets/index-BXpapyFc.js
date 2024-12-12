var Ld = Object.defineProperty;
var kd = (e, t, n) =>
  t in e
    ? Ld(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Rd = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var at = (e, t, n) => kd(e, typeof t != "symbol" ? t + "" : t, n);
var zx = Rd((me, be) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      r(s);
    new MutationObserver((s) => {
      for (const i of s)
        if (i.type === "childList")
          for (const o of i.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
      const i = {};
      return (
        s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials"
          ? (i.credentials = "include")
          : s.crossOrigin === "anonymous"
            ? (i.credentials = "omit")
            : (i.credentials = "same-origin"),
        i
      );
    }
    function r(s) {
      if (s.ep) return;
      s.ep = !0;
      const i = n(s);
      fetch(s.href, i);
    }
  })();
  /**
   * @vue/shared v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ /*! #__NO_SIDE_EFFECTS__ */ function ha(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const Mt = {},
    Cr = [],
    Qe = () => {},
    Id = () => !1,
    Yi = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    da = (e) => e.startsWith("onUpdate:"),
    Gt = Object.assign,
    pa = (e, t) => {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    },
    qd = Object.prototype.hasOwnProperty,
    It = (e, t) => qd.call(e, t),
    _t = Array.isArray,
    Or = (e) => Fs(e) === "[object Map]",
    Ji = (e) => Fs(e) === "[object Set]",
    rc = (e) => Fs(e) === "[object Date]",
    At = (e) => typeof e == "function",
    zt = (e) => typeof e == "string",
    en = (e) => typeof e == "symbol",
    jt = (e) => e !== null && typeof e == "object",
    nf = (e) => (jt(e) || At(e)) && At(e.then) && At(e.catch),
    rf = Object.prototype.toString,
    Fs = (e) => rf.call(e),
    Md = (e) => Fs(e).slice(8, -1),
    sf = (e) => Fs(e) === "[object Object]",
    ga = (e) =>
      zt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    gs = ha(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    Qi = (e) => {
      const t = Object.create(null);
      return (n) => t[n] || (t[n] = e(n));
    },
    Pd = /-(\w)/g,
    Ne = Qi((e) => e.replace(Pd, (t, n) => (n ? n.toUpperCase() : ""))),
    Bd = /\B([A-Z])/g,
    ir = Qi((e) => e.replace(Bd, "-$1").toLowerCase()),
    Xi = Qi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    nl = Qi((e) => (e ? `on${Xi(e)}` : "")),
    Pn = (e, t) => !Object.is(e, t),
    Ai = (e, ...t) => {
      for (let n = 0; n < e.length; n++) e[n](...t);
    },
    of = (e, t, n, r = !1) => {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n,
      });
    },
    Pi = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    };
  let sc;
  const to = () =>
    sc ||
    (sc =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});
  function ma(e) {
    if (_t(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n],
          s = zt(r) ? Ud(r) : ma(r);
        if (s) for (const i in s) t[i] = s[i];
      }
      return t;
    } else if (zt(e) || jt(e)) return e;
  }
  const jd = /;(?![^(]*\))/g,
    Dd = /:([^]+)/,
    $d = /\/\*[^]*?\*\//g;
  function Ud(e) {
    const t = {};
    return (
      e
        .replace($d, "")
        .split(jd)
        .forEach((n) => {
          if (n) {
            const r = n.split(Dd);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }),
      t
    );
  }
  function mn(e) {
    let t = "";
    if (zt(e)) t = e;
    else if (_t(e))
      for (let n = 0; n < e.length; n++) {
        const r = mn(e[n]);
        r && (t += r + " ");
      }
    else if (jt(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  }
  const Fd =
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Hd = ha(Fd);
  function lf(e) {
    return !!e || e === "";
  }
  function zd(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = eo(e[r], t[r]);
    return n;
  }
  function eo(e, t) {
    if (e === t) return !0;
    let n = rc(e),
      r = rc(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (((n = en(e)), (r = en(t)), n || r)) return e === t;
    if (((n = _t(e)), (r = _t(t)), n || r)) return n && r ? zd(e, t) : !1;
    if (((n = jt(e)), (r = jt(t)), n || r)) {
      if (!n || !r) return !1;
      const s = Object.keys(e).length,
        i = Object.keys(t).length;
      if (s !== i) return !1;
      for (const o in e) {
        const l = e.hasOwnProperty(o),
          a = t.hasOwnProperty(o);
        if ((l && !a) || (!l && a) || !eo(e[o], t[o])) return !1;
      }
    }
    return String(e) === String(t);
  }
  function Kd(e, t) {
    return e.findIndex((n) => eo(n, t));
  }
  const af = (e) => !!(e && e.__v_isRef === !0),
    pn = (e) =>
      zt(e)
        ? e
        : e == null
          ? ""
          : _t(e) || (jt(e) && (e.toString === rf || !At(e.toString)))
            ? af(e)
              ? pn(e.value)
              : JSON.stringify(e, cf, 2)
            : String(e),
    cf = (e, t) =>
      af(t)
        ? cf(e, t.value)
        : Or(t)
          ? {
              [`Map(${t.size})`]: [...t.entries()].reduce(
                (n, [r, s], i) => ((n[rl(r, i) + " =>"] = s), n),
                {},
              ),
            }
          : Ji(t)
            ? { [`Set(${t.size})`]: [...t.values()].map((n) => rl(n)) }
            : en(t)
              ? rl(t)
              : jt(t) && !_t(t) && !sf(t)
                ? String(t)
                : t,
    rl = (e, t = "") => {
      var n;
      return en(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
  /**
   * @vue/reactivity v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let de;
  class Vd {
    constructor(t = !1) {
      (this.detached = t),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this.parent = de),
        !t &&
          de &&
          (this.index = (de.scopes || (de.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = !0;
        let t, n;
        if (this.scopes)
          for (t = 0, n = this.scopes.length; t < n; t++)
            this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++)
          this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = !1;
        let t, n;
        if (this.scopes)
          for (t = 0, n = this.scopes.length; t < n; t++)
            this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++)
          this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = de;
        try {
          return (de = this), t();
        } finally {
          de = n;
        }
      }
    }
    on() {
      de = this;
    }
    off() {
      de = this.parent;
    }
    stop(t) {
      if (this._active) {
        this._active = !1;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (
          this.effects.length = 0, n = 0, r = this.cleanups.length;
          n < r;
          n++
        )
          this.cleanups[n]();
        if (((this.cleanups.length = 0), this.scopes)) {
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s &&
            s !== this &&
            ((this.parent.scopes[this.index] = s), (s.index = this.index));
        }
        this.parent = void 0;
      }
    }
  }
  function Gd() {
    return de;
  }
  let Bt;
  const sl = new WeakSet();
  class uf {
    constructor(t) {
      (this.fn = t),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        de && de.active && de.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 &&
        ((this.flags &= -65),
        sl.has(this) && (sl.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || hf(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), ic(this), df(this);
      const t = Bt,
        n = Pe;
      (Bt = this), (Pe = !0);
      try {
        return this.fn();
      } finally {
        pf(this), (Bt = t), (Pe = n), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) va(t);
        (this.deps = this.depsTail = void 0),
          ic(this),
          this.onStop && this.onStop(),
          (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64
        ? sl.add(this)
        : this.scheduler
          ? this.scheduler()
          : this.runIfDirty();
    }
    runIfDirty() {
      Ol(this) && this.run();
    }
    get dirty() {
      return Ol(this);
    }
  }
  let ff = 0,
    ms,
    bs;
  function hf(e, t = !1) {
    if (((e.flags |= 8), t)) {
      (e.next = bs), (bs = e);
      return;
    }
    (e.next = ms), (ms = e);
  }
  function ba() {
    ff++;
  }
  function ya() {
    if (--ff > 0) return;
    if (bs) {
      let t = bs;
      for (bs = void 0; t; ) {
        const n = t.next;
        (t.next = void 0), (t.flags &= -9), (t = n);
      }
    }
    let e;
    for (; ms; ) {
      let t = ms;
      for (ms = void 0; t; ) {
        const n = t.next;
        if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
          try {
            t.trigger();
          } catch (r) {
            e || (e = r);
          }
        t = n;
      }
    }
    if (e) throw e;
  }
  function df(e) {
    for (let t = e.deps; t; t = t.nextDep)
      (t.version = -1),
        (t.prevActiveLink = t.dep.activeLink),
        (t.dep.activeLink = t);
  }
  function pf(e) {
    let t,
      n = e.depsTail,
      r = n;
    for (; r; ) {
      const s = r.prevDep;
      r.version === -1 ? (r === n && (n = s), va(r), Wd(r)) : (t = r),
        (r.dep.activeLink = r.prevActiveLink),
        (r.prevActiveLink = void 0),
        (r = s);
    }
    (e.deps = t), (e.depsTail = n);
  }
  function Ol(e) {
    for (let t = e.deps; t; t = t.nextDep)
      if (
        t.dep.version !== t.version ||
        (t.dep.computed && (gf(t.dep.computed) || t.dep.version !== t.version))
      )
        return !0;
    return !!e._dirty;
  }
  function gf(e) {
    if (
      (e.flags & 4 && !(e.flags & 16)) ||
      ((e.flags &= -17), e.globalVersion === Cs)
    )
      return;
    e.globalVersion = Cs;
    const t = e.dep;
    if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ol(e))) {
      e.flags &= -3;
      return;
    }
    const n = Bt,
      r = Pe;
    (Bt = e), (Pe = !0);
    try {
      df(e);
      const s = e.fn(e._value);
      (t.version === 0 || Pn(s, e._value)) && ((e._value = s), t.version++);
    } catch (s) {
      throw (t.version++, s);
    } finally {
      (Bt = n), (Pe = r), pf(e), (e.flags &= -3);
    }
  }
  function va(e, t = !1) {
    const { dep: n, prevSub: r, nextSub: s } = e;
    if (
      (r && ((r.nextSub = s), (e.prevSub = void 0)),
      s && ((s.prevSub = r), (e.nextSub = void 0)),
      n.subs === e && ((n.subs = r), !r && n.computed))
    ) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) va(i, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Wd(e) {
    const { prevDep: t, nextDep: n } = e;
    t && ((t.nextDep = n), (e.prevDep = void 0)),
      n && ((n.prevDep = t), (e.nextDep = void 0));
  }
  let Pe = !0;
  const mf = [];
  function Dn() {
    mf.push(Pe), (Pe = !1);
  }
  function $n() {
    const e = mf.pop();
    Pe = e === void 0 ? !0 : e;
  }
  function ic(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
      const n = Bt;
      Bt = void 0;
      try {
        t();
      } finally {
        Bt = n;
      }
    }
  }
  let Cs = 0,
    Zd = class {
      constructor(t, n) {
        (this.sub = t),
          (this.dep = n),
          (this.version = n.version),
          (this.nextDep =
            this.prevDep =
            this.nextSub =
            this.prevSub =
            this.prevActiveLink =
              void 0);
      }
    };
  class wa {
    constructor(t) {
      (this.computed = t),
        (this.version = 0),
        (this.activeLink = void 0),
        (this.subs = void 0),
        (this.map = void 0),
        (this.key = void 0),
        (this.sc = 0);
    }
    track(t) {
      if (!Bt || !Pe || Bt === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Bt)
        (n = this.activeLink = new Zd(Bt, this)),
          Bt.deps
            ? ((n.prevDep = Bt.depsTail),
              (Bt.depsTail.nextDep = n),
              (Bt.depsTail = n))
            : (Bt.deps = Bt.depsTail = n),
          bf(n);
      else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
        const r = n.nextDep;
        (r.prevDep = n.prevDep),
          n.prevDep && (n.prevDep.nextDep = r),
          (n.prevDep = Bt.depsTail),
          (n.nextDep = void 0),
          (Bt.depsTail.nextDep = n),
          (Bt.depsTail = n),
          Bt.deps === n && (Bt.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, Cs++, this.notify(t);
    }
    notify(t) {
      ba();
      try {
        for (let n = this.subs; n; n = n.prevSub)
          n.sub.notify() && n.sub.dep.notify();
      } finally {
        ya();
      }
    }
  }
  function bf(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) bf(r);
      }
      const n = e.dep.subs;
      n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
    }
  }
  const Ll = new WeakMap(),
    Qn = Symbol(""),
    kl = Symbol(""),
    Os = Symbol("");
  function ee(e, t, n) {
    if (Pe && Bt) {
      let r = Ll.get(e);
      r || Ll.set(e, (r = new Map()));
      let s = r.get(n);
      s || (r.set(n, (s = new wa())), (s.map = r), (s.key = n)), s.track();
    }
  }
  function bn(e, t, n, r, s, i) {
    const o = Ll.get(e);
    if (!o) {
      Cs++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if ((ba(), t === "clear")) o.forEach(l);
    else {
      const a = _t(e),
        u = a && ga(n);
      if (a && n === "length") {
        const f = Number(r);
        o.forEach((d, h) => {
          (h === "length" || h === Os || (!en(h) && h >= f)) && l(d);
        });
      } else
        switch (
          ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Os)), t)
        ) {
          case "add":
            a ? u && l(o.get("length")) : (l(o.get(Qn)), Or(e) && l(o.get(kl)));
            break;
          case "delete":
            a || (l(o.get(Qn)), Or(e) && l(o.get(kl)));
            break;
          case "set":
            Or(e) && l(o.get(Qn));
            break;
        }
    }
    ya();
  }
  function yr(e) {
    const t = Rt(e);
    return t === e ? t : (ee(t, "iterate", Os), Se(e) ? t : t.map(ne));
  }
  function no(e) {
    return ee((e = Rt(e)), "iterate", Os), e;
  }
  const Yd = {
    __proto__: null,
    [Symbol.iterator]() {
      return il(this, Symbol.iterator, ne);
    },
    concat(...e) {
      return yr(this).concat(...e.map((t) => (_t(t) ? yr(t) : t)));
    },
    entries() {
      return il(this, "entries", (e) => ((e[1] = ne(e[1])), e));
    },
    every(e, t) {
      return fn(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return fn(this, "filter", e, t, (n) => n.map(ne), arguments);
    },
    find(e, t) {
      return fn(this, "find", e, t, ne, arguments);
    },
    findIndex(e, t) {
      return fn(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return fn(this, "findLast", e, t, ne, arguments);
    },
    findLastIndex(e, t) {
      return fn(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return fn(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return ol(this, "includes", e);
    },
    indexOf(...e) {
      return ol(this, "indexOf", e);
    },
    join(e) {
      return yr(this).join(e);
    },
    lastIndexOf(...e) {
      return ol(this, "lastIndexOf", e);
    },
    map(e, t) {
      return fn(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return is(this, "pop");
    },
    push(...e) {
      return is(this, "push", e);
    },
    reduce(e, ...t) {
      return oc(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return oc(this, "reduceRight", e, t);
    },
    shift() {
      return is(this, "shift");
    },
    some(e, t) {
      return fn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return is(this, "splice", e);
    },
    toReversed() {
      return yr(this).toReversed();
    },
    toSorted(e) {
      return yr(this).toSorted(e);
    },
    toSpliced(...e) {
      return yr(this).toSpliced(...e);
    },
    unshift(...e) {
      return is(this, "unshift", e);
    },
    values() {
      return il(this, "values", ne);
    },
  };
  function il(e, t, n) {
    const r = no(e),
      s = r[t]();
    return (
      r !== e &&
        !Se(e) &&
        ((s._next = s.next),
        (s.next = () => {
          const i = s._next();
          return i.value && (i.value = n(i.value)), i;
        })),
      s
    );
  }
  const Jd = Array.prototype;
  function fn(e, t, n, r, s, i) {
    const o = no(e),
      l = o !== e && !Se(e),
      a = o[t];
    if (a !== Jd[t]) {
      const d = a.apply(e, i);
      return l ? ne(d) : d;
    }
    let u = n;
    o !== e &&
      (l
        ? (u = function (d, h) {
            return n.call(this, ne(d), h, e);
          })
        : n.length > 2 &&
          (u = function (d, h) {
            return n.call(this, d, h, e);
          }));
    const f = a.call(o, u, r);
    return l && s ? s(f) : f;
  }
  function oc(e, t, n, r) {
    const s = no(e);
    let i = n;
    return (
      s !== e &&
        (Se(e)
          ? n.length > 3 &&
            (i = function (o, l, a) {
              return n.call(this, o, l, a, e);
            })
          : (i = function (o, l, a) {
              return n.call(this, o, ne(l), a, e);
            })),
      s[t](i, ...r)
    );
  }
  function ol(e, t, n) {
    const r = Rt(e);
    ee(r, "iterate", Os);
    const s = r[t](...n);
    return (s === -1 || s === !1) && Ea(n[0])
      ? ((n[0] = Rt(n[0])), r[t](...n))
      : s;
  }
  function is(e, t, n = []) {
    Dn(), ba();
    const r = Rt(e)[t].apply(e, n);
    return ya(), $n(), r;
  }
  const Qd = ha("__proto__,__v_isRef,__isVue"),
    yf = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== "arguments" && e !== "caller")
        .map((e) => Symbol[e])
        .filter(en),
    );
  function Xd(e) {
    en(e) || (e = String(e));
    const t = Rt(this);
    return ee(t, "has", e), t.hasOwnProperty(e);
  }
  class vf {
    constructor(t = !1, n = !1) {
      (this._isReadonly = t), (this._isShallow = n);
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const s = this._isReadonly,
        i = this._isShallow;
      if (n === "__v_isReactive") return !s;
      if (n === "__v_isReadonly") return s;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw")
        return r === (s ? (i ? cp : Ef) : i ? xf : _f).get(t) ||
          Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
          ? t
          : void 0;
      const o = _t(t);
      if (!s) {
        let a;
        if (o && (a = Yd[n])) return a;
        if (n === "hasOwnProperty") return Xd;
      }
      const l = Reflect.get(t, n, ie(t) ? t : r);
      return (en(n) ? yf.has(n) : Qd(n)) || (s || ee(t, "get", n), i)
        ? l
        : ie(l)
          ? o && ga(n)
            ? l
            : l.value
          : jt(l)
            ? s
              ? Tf(l)
              : ro(l)
            : l;
    }
  }
  class wf extends vf {
    constructor(t = !1) {
      super(!1, t);
    }
    set(t, n, r, s) {
      let i = t[n];
      if (!this._isShallow) {
        const a = Xn(i);
        if (
          (!Se(r) && !Xn(r) && ((i = Rt(i)), (r = Rt(r))),
          !_t(t) && ie(i) && !ie(r))
        )
          return a ? !1 : ((i.value = r), !0);
      }
      const o = _t(t) && ga(n) ? Number(n) < t.length : It(t, n),
        l = Reflect.set(t, n, r, ie(t) ? t : s);
      return (
        t === Rt(s) &&
          (o ? Pn(r, i) && bn(t, "set", n, r) : bn(t, "add", n, r)),
        l
      );
    }
    deleteProperty(t, n) {
      const r = It(t, n);
      t[n];
      const s = Reflect.deleteProperty(t, n);
      return s && r && bn(t, "delete", n, void 0), s;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!en(n) || !yf.has(n)) && ee(t, "has", n), r;
    }
    ownKeys(t) {
      return ee(t, "iterate", _t(t) ? "length" : Qn), Reflect.ownKeys(t);
    }
  }
  class tp extends vf {
    constructor(t = !1) {
      super(!0, t);
    }
    set(t, n) {
      return !0;
    }
    deleteProperty(t, n) {
      return !0;
    }
  }
  const ep = new wf(),
    np = new tp(),
    rp = new wf(!0),
    Rl = (e) => e,
    fi = (e) => Reflect.getPrototypeOf(e);
  function sp(e, t, n) {
    return function (...r) {
      const s = this.__v_raw,
        i = Rt(s),
        o = Or(i),
        l = e === "entries" || (e === Symbol.iterator && o),
        a = e === "keys" && o,
        u = s[e](...r),
        f = n ? Rl : t ? Il : ne;
      return (
        !t && ee(i, "iterate", a ? kl : Qn),
        {
          next() {
            const { value: d, done: h } = u.next();
            return h
              ? { value: d, done: h }
              : { value: l ? [f(d[0]), f(d[1])] : f(d), done: h };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function hi(e) {
    return function (...t) {
      return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
  }
  function ip(e, t) {
    const n = {
      get(s) {
        const i = this.__v_raw,
          o = Rt(i),
          l = Rt(s);
        e || (Pn(s, l) && ee(o, "get", s), ee(o, "get", l));
        const { has: a } = fi(o),
          u = t ? Rl : e ? Il : ne;
        if (a.call(o, s)) return u(i.get(s));
        if (a.call(o, l)) return u(i.get(l));
        i !== o && i.get(s);
      },
      get size() {
        const s = this.__v_raw;
        return !e && ee(Rt(s), "iterate", Qn), Reflect.get(s, "size", s);
      },
      has(s) {
        const i = this.__v_raw,
          o = Rt(i),
          l = Rt(s);
        return (
          e || (Pn(s, l) && ee(o, "has", s), ee(o, "has", l)),
          s === l ? i.has(s) : i.has(s) || i.has(l)
        );
      },
      forEach(s, i) {
        const o = this,
          l = o.__v_raw,
          a = Rt(l),
          u = t ? Rl : e ? Il : ne;
        return (
          !e && ee(a, "iterate", Qn),
          l.forEach((f, d) => s.call(i, u(f), u(d), o))
        );
      },
    };
    return (
      Gt(
        n,
        e
          ? {
              add: hi("add"),
              set: hi("set"),
              delete: hi("delete"),
              clear: hi("clear"),
            }
          : {
              add(s) {
                !t && !Se(s) && !Xn(s) && (s = Rt(s));
                const i = Rt(this);
                return (
                  fi(i).has.call(i, s) || (i.add(s), bn(i, "add", s, s)), this
                );
              },
              set(s, i) {
                !t && !Se(i) && !Xn(i) && (i = Rt(i));
                const o = Rt(this),
                  { has: l, get: a } = fi(o);
                let u = l.call(o, s);
                u || ((s = Rt(s)), (u = l.call(o, s)));
                const f = a.call(o, s);
                return (
                  o.set(s, i),
                  u ? Pn(i, f) && bn(o, "set", s, i) : bn(o, "add", s, i),
                  this
                );
              },
              delete(s) {
                const i = Rt(this),
                  { has: o, get: l } = fi(i);
                let a = o.call(i, s);
                a || ((s = Rt(s)), (a = o.call(i, s))), l && l.call(i, s);
                const u = i.delete(s);
                return a && bn(i, "delete", s, void 0), u;
              },
              clear() {
                const s = Rt(this),
                  i = s.size !== 0,
                  o = s.clear();
                return i && bn(s, "clear", void 0, void 0), o;
              },
            },
      ),
      ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
        n[s] = sp(s, e, t);
      }),
      n
    );
  }
  function _a(e, t) {
    const n = ip(e, t);
    return (r, s, i) =>
      s === "__v_isReactive"
        ? !e
        : s === "__v_isReadonly"
          ? e
          : s === "__v_raw"
            ? r
            : Reflect.get(It(n, s) && s in r ? n : r, s, i);
  }
  const op = { get: _a(!1, !1) },
    lp = { get: _a(!1, !0) },
    ap = { get: _a(!0, !1) },
    _f = new WeakMap(),
    xf = new WeakMap(),
    Ef = new WeakMap(),
    cp = new WeakMap();
  function up(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function fp(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : up(Md(e));
  }
  function ro(e) {
    return Xn(e) ? e : xa(e, !1, ep, op, _f);
  }
  function Af(e) {
    return xa(e, !1, rp, lp, xf);
  }
  function Tf(e) {
    return xa(e, !0, np, ap, Ef);
  }
  function xa(e, t, n, r, s) {
    if (!jt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = s.get(e);
    if (i) return i;
    const o = fp(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? r : n);
    return s.set(e, l), l;
  }
  function Lr(e) {
    return Xn(e) ? Lr(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Xn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Se(e) {
    return !!(e && e.__v_isShallow);
  }
  function Ea(e) {
    return e ? !!e.__v_raw : !1;
  }
  function Rt(e) {
    const t = e && e.__v_raw;
    return t ? Rt(t) : e;
  }
  function hp(e) {
    return (
      !It(e, "__v_skip") && Object.isExtensible(e) && of(e, "__v_skip", !0), e
    );
  }
  const ne = (e) => (jt(e) ? ro(e) : e),
    Il = (e) => (jt(e) ? Tf(e) : e);
  function ie(e) {
    return e ? e.__v_isRef === !0 : !1;
  }
  function dp(e) {
    return Sf(e, !1);
  }
  function pp(e) {
    return Sf(e, !0);
  }
  function Sf(e, t) {
    return ie(e) ? e : new gp(e, t);
  }
  class gp {
    constructor(t, n) {
      (this.dep = new wa()),
        (this.__v_isRef = !0),
        (this.__v_isShallow = !1),
        (this._rawValue = n ? t : Rt(t)),
        (this._value = n ? t : ne(t)),
        (this.__v_isShallow = n);
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue,
        r = this.__v_isShallow || Se(t) || Xn(t);
      (t = r ? t : Rt(t)),
        Pn(t, n) &&
          ((this._rawValue = t),
          (this._value = r ? t : ne(t)),
          this.dep.trigger());
    }
  }
  function kr(e) {
    return ie(e) ? e.value : e;
  }
  const mp = {
    get: (e, t, n) => (t === "__v_raw" ? e : kr(Reflect.get(e, t, n))),
    set: (e, t, n, r) => {
      const s = e[t];
      return ie(s) && !ie(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
    },
  };
  function Nf(e) {
    return Lr(e) ? e : new Proxy(e, mp);
  }
  class bp {
    constructor(t, n, r) {
      (this.fn = t),
        (this.setter = n),
        (this._value = void 0),
        (this.dep = new wa(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = Cs - 1),
        (this.next = void 0),
        (this.effect = this),
        (this.__v_isReadonly = !n),
        (this.isSSR = r);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && Bt !== this))
        return hf(this, !0), !0;
    }
    get value() {
      const t = this.dep.track();
      return gf(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function yp(e, t, n = !1) {
    let r, s;
    return At(e) ? (r = e) : ((r = e.get), (s = e.set)), new bp(r, s, n);
  }
  const di = {},
    Bi = new WeakMap();
  let Yn;
  function vp(e, t = !1, n = Yn) {
    if (n) {
      let r = Bi.get(n);
      r || Bi.set(n, (r = [])), r.push(e);
    }
  }
  function wp(e, t, n = Mt) {
    const {
        immediate: r,
        deep: s,
        once: i,
        scheduler: o,
        augmentJob: l,
        call: a,
      } = n,
      u = (Z) => (s ? Z : Se(Z) || s === !1 || s === 0 ? yn(Z, 1) : yn(Z));
    let f,
      d,
      h,
      g,
      w = !1,
      T = !1;
    if (
      (ie(e)
        ? ((d = () => e.value), (w = Se(e)))
        : Lr(e)
          ? ((d = () => u(e)), (w = !0))
          : _t(e)
            ? ((T = !0),
              (w = e.some((Z) => Lr(Z) || Se(Z))),
              (d = () =>
                e.map((Z) => {
                  if (ie(Z)) return Z.value;
                  if (Lr(Z)) return u(Z);
                  if (At(Z)) return a ? a(Z, 2) : Z();
                })))
            : At(e)
              ? t
                ? (d = a ? () => a(e, 2) : e)
                : (d = () => {
                    if (h) {
                      Dn();
                      try {
                        h();
                      } finally {
                        $n();
                      }
                    }
                    const Z = Yn;
                    Yn = f;
                    try {
                      return a ? a(e, 3, [g]) : e(g);
                    } finally {
                      Yn = Z;
                    }
                  })
              : (d = Qe),
      t && s)
    ) {
      const Z = d,
        st = s === !0 ? 1 / 0 : s;
      d = () => yn(Z(), st);
    }
    const N = Gd(),
      C = () => {
        f.stop(), N && N.active && pa(N.effects, f);
      };
    if (i && t) {
      const Z = t;
      t = (...st) => {
        Z(...st), C();
      };
    }
    let M = T ? new Array(e.length).fill(di) : di;
    const H = (Z) => {
      if (!(!(f.flags & 1) || (!f.dirty && !Z)))
        if (t) {
          const st = f.run();
          if (s || w || (T ? st.some((vt, lt) => Pn(vt, M[lt])) : Pn(st, M))) {
            h && h();
            const vt = Yn;
            Yn = f;
            try {
              const lt = [st, M === di ? void 0 : T && M[0] === di ? [] : M, g];
              a ? a(t, 3, lt) : t(...lt), (M = st);
            } finally {
              Yn = vt;
            }
          }
        } else f.run();
    };
    return (
      l && l(H),
      (f = new uf(d)),
      (f.scheduler = o ? () => o(H, !1) : H),
      (g = (Z) => vp(Z, !1, f)),
      (h = f.onStop =
        () => {
          const Z = Bi.get(f);
          if (Z) {
            if (a) a(Z, 4);
            else for (const st of Z) st();
            Bi.delete(f);
          }
        }),
      t ? (r ? H(!0) : (M = f.run())) : o ? o(H.bind(null, !0), !0) : f.run(),
      (C.pause = f.pause.bind(f)),
      (C.resume = f.resume.bind(f)),
      (C.stop = C),
      C
    );
  }
  function yn(e, t = 1 / 0, n) {
    if (t <= 0 || !jt(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
      return e;
    if ((n.add(e), t--, ie(e))) yn(e.value, t, n);
    else if (_t(e)) for (let r = 0; r < e.length; r++) yn(e[r], t, n);
    else if (Ji(e) || Or(e))
      e.forEach((r) => {
        yn(r, t, n);
      });
    else if (sf(e)) {
      for (const r in e) yn(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e))
        Object.prototype.propertyIsEnumerable.call(e, r) && yn(e[r], t, n);
    }
    return e;
  }
  /**
   * @vue/runtime-core v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function Hs(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (s) {
      so(s, t, n);
    }
  }
  function nn(e, t, n, r) {
    if (At(e)) {
      const s = Hs(e, t, n, r);
      return (
        s &&
          nf(s) &&
          s.catch((i) => {
            so(i, t, n);
          }),
        s
      );
    }
    if (_t(e)) {
      const s = [];
      for (let i = 0; i < e.length; i++) s.push(nn(e[i], t, n, r));
      return s;
    }
  }
  function so(e, t, n, r = !0) {
    const s = t ? t.vnode : null,
      { errorHandler: i, throwUnhandledErrorInProduction: o } =
        (t && t.appContext.config) || Mt;
    if (t) {
      let l = t.parent;
      const a = t.proxy,
        u = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; l; ) {
        const f = l.ec;
        if (f) {
          for (let d = 0; d < f.length; d++) if (f[d](e, a, u) === !1) return;
        }
        l = l.parent;
      }
      if (i) {
        Dn(), Hs(i, null, 10, [e, a, u]), $n();
        return;
      }
    }
    _p(e, n, s, r, o);
  }
  function _p(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e);
  }
  const ce = [];
  let We = -1;
  const Rr = [];
  let Ln = null,
    wr = 0;
  const Cf = Promise.resolve();
  let ji = null;
  function Aa(e) {
    const t = ji || Cf;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function xp(e) {
    let t = We + 1,
      n = ce.length;
    for (; t < n; ) {
      const r = (t + n) >>> 1,
        s = ce[r],
        i = Ls(s);
      i < e || (i === e && s.flags & 2) ? (t = r + 1) : (n = r);
    }
    return t;
  }
  function Ta(e) {
    if (!(e.flags & 1)) {
      const t = Ls(e),
        n = ce[ce.length - 1];
      !n || (!(e.flags & 2) && t >= Ls(n))
        ? ce.push(e)
        : ce.splice(xp(t), 0, e),
        (e.flags |= 1),
        Of();
    }
  }
  function Of() {
    ji || (ji = Cf.then(kf));
  }
  function Ep(e) {
    _t(e)
      ? Rr.push(...e)
      : Ln && e.id === -1
        ? Ln.splice(wr + 1, 0, e)
        : e.flags & 1 || (Rr.push(e), (e.flags |= 1)),
      Of();
  }
  function lc(e, t, n = We + 1) {
    for (; n < ce.length; n++) {
      const r = ce[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        ce.splice(n, 1),
          n--,
          r.flags & 4 && (r.flags &= -2),
          r(),
          r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Lf(e) {
    if (Rr.length) {
      const t = [...new Set(Rr)].sort((n, r) => Ls(n) - Ls(r));
      if (((Rr.length = 0), Ln)) {
        Ln.push(...t);
        return;
      }
      for (Ln = t, wr = 0; wr < Ln.length; wr++) {
        const n = Ln[wr];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
      }
      (Ln = null), (wr = 0);
    }
  }
  const Ls = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
  function kf(e) {
    try {
      for (We = 0; We < ce.length; We++) {
        const t = ce[We];
        t &&
          !(t.flags & 8) &&
          (t.flags & 4 && (t.flags &= -2),
          Hs(t, t.i, t.i ? 15 : 14),
          t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; We < ce.length; We++) {
        const t = ce[We];
        t && (t.flags &= -2);
      }
      (We = -1),
        (ce.length = 0),
        Lf(),
        (ji = null),
        (ce.length || Rr.length) && kf();
    }
  }
  let pe = null,
    Rf = null;
  function Di(e) {
    const t = pe;
    return (pe = e), (Rf = (e && e.type.__scopeId) || null), t;
  }
  function Ti(e, t = pe, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
      r._d && bc(-1);
      const i = Di(t);
      let o;
      try {
        o = e(...s);
      } finally {
        Di(i), r._d && bc(1);
      }
      return o;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function vr(e, t) {
    if (pe === null) return e;
    const n = ao(pe),
      r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
      let [i, o, l, a = Mt] = t[s];
      i &&
        (At(i) && (i = { mounted: i, updated: i }),
        i.deep && yn(o),
        r.push({
          dir: i,
          instance: n,
          value: o,
          oldValue: void 0,
          arg: l,
          modifiers: a,
        }));
    }
    return e;
  }
  function Wn(e, t, n, r) {
    const s = e.dirs,
      i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      i && (l.oldValue = i[o].value);
      let a = l.dir[r];
      a && (Dn(), nn(a, n, 8, [e.el, l, e, t]), $n());
    }
  }
  const Ap = Symbol("_vte"),
    Tp = (e) => e.__isTeleport;
  function Sa(e, t) {
    e.shapeFlag & 6 && e.component
      ? ((e.transition = t), Sa(e.component.subTree, t))
      : e.shapeFlag & 128
        ? ((e.ssContent.transition = t.clone(e.ssContent)),
          (e.ssFallback.transition = t.clone(e.ssFallback)))
        : (e.transition = t);
  }
  /*! #__NO_SIDE_EFFECTS__ */ function If(e, t) {
    return At(e) ? Gt({ name: e.name }, t, { setup: e }) : e;
  }
  function qf(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
  }
  function $i(e, t, n, r, s = !1) {
    if (_t(e)) {
      e.forEach((w, T) => $i(w, t && (_t(t) ? t[T] : t), n, r, s));
      return;
    }
    if (ys(r) && !s) {
      r.shapeFlag & 512 &&
        r.type.__asyncResolved &&
        r.component.subTree.component &&
        $i(e, t, n, r.component.subTree);
      return;
    }
    const i = r.shapeFlag & 4 ? ao(r.component) : r.el,
      o = s ? null : i,
      { i: l, r: a } = e,
      u = t && t.r,
      f = l.refs === Mt ? (l.refs = {}) : l.refs,
      d = l.setupState,
      h = Rt(d),
      g = d === Mt ? () => !1 : (w) => It(h, w);
    if (
      (u != null &&
        u !== a &&
        (zt(u)
          ? ((f[u] = null), g(u) && (d[u] = null))
          : ie(u) && (u.value = null)),
      At(a))
    )
      Hs(a, l, 12, [o, f]);
    else {
      const w = zt(a),
        T = ie(a);
      if (w || T) {
        const N = () => {
          if (e.f) {
            const C = w ? (g(a) ? d[a] : f[a]) : a.value;
            s
              ? _t(C) && pa(C, i)
              : _t(C)
                ? C.includes(i) || C.push(i)
                : w
                  ? ((f[a] = [i]), g(a) && (d[a] = f[a]))
                  : ((a.value = [i]), e.k && (f[e.k] = a.value));
          } else
            w
              ? ((f[a] = o), g(a) && (d[a] = o))
              : T && ((a.value = o), e.k && (f[e.k] = o));
        };
        o ? ((N.id = -1), he(N, n)) : N();
      }
    }
  }
  to().requestIdleCallback;
  to().cancelIdleCallback;
  const ys = (e) => !!e.type.__asyncLoader,
    Mf = (e) => e.type.__isKeepAlive;
  function Sp(e, t) {
    Pf(e, "a", t);
  }
  function Np(e, t) {
    Pf(e, "da", t);
  }
  function Pf(e, t, n = re) {
    const r =
      e.__wdc ||
      (e.__wdc = () => {
        let s = n;
        for (; s; ) {
          if (s.isDeactivated) return;
          s = s.parent;
        }
        return e();
      });
    if ((io(t, r, n), n)) {
      let s = n.parent;
      for (; s && s.parent; )
        Mf(s.parent.vnode) && Cp(r, t, n, s), (s = s.parent);
    }
  }
  function Cp(e, t, n, r) {
    const s = io(t, e, r, !0);
    Bf(() => {
      pa(r[t], s);
    }, n);
  }
  function io(e, t, n = re, r = !1) {
    if (n) {
      const s = n[e] || (n[e] = []),
        i =
          t.__weh ||
          (t.__weh = (...o) => {
            Dn();
            const l = zs(n),
              a = nn(t, n, e, o);
            return l(), $n(), a;
          });
      return r ? s.unshift(i) : s.push(i), i;
    }
  }
  const En =
      (e) =>
      (t, n = re) => {
        (!Rs || e === "sp") && io(e, (...r) => t(...r), n);
      },
    Op = En("bm"),
    Lp = En("m"),
    kp = En("bu"),
    Rp = En("u"),
    Ip = En("bum"),
    Bf = En("um"),
    qp = En("sp"),
    Mp = En("rtg"),
    Pp = En("rtc");
  function Bp(e, t = re) {
    io("ec", e, t);
  }
  const jp = "components";
  function ac(e, t) {
    return $p(jp, e, !0, t) || e;
  }
  const Dp = Symbol.for("v-ndc");
  function $p(e, t, n = !0, r = !1) {
    const s = pe || re;
    if (s) {
      const i = s.type;
      {
        const l = Cg(i, !1);
        if (l && (l === t || l === Ne(t) || l === Xi(Ne(t)))) return i;
      }
      const o = cc(s[e] || i[e], t) || cc(s.appContext[e], t);
      return !o && r ? i : o;
    }
  }
  function cc(e, t) {
    return e && (e[t] || e[Ne(t)] || e[Xi(Ne(t))]);
  }
  function Up(e, t, n, r) {
    let s;
    const i = n,
      o = _t(e);
    if (o || zt(e)) {
      const l = o && Lr(e);
      let a = !1;
      l && ((a = !Se(e)), (e = no(e))), (s = new Array(e.length));
      for (let u = 0, f = e.length; u < f; u++)
        s[u] = t(a ? ne(e[u]) : e[u], u, void 0, i);
    } else if (typeof e == "number") {
      s = new Array(e);
      for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, i);
    } else if (jt(e))
      if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, i));
      else {
        const l = Object.keys(e);
        s = new Array(l.length);
        for (let a = 0, u = l.length; a < u; a++) {
          const f = l[a];
          s[a] = t(e[f], f, a, i);
        }
      }
    else s = [];
    return s;
  }
  const ql = (e) => (e ? (rh(e) ? ao(e) : ql(e.parent)) : null),
    vs = Gt(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => ql(e.parent),
      $root: (e) => ql(e.root),
      $host: (e) => e.ce,
      $emit: (e) => e.emit,
      $options: (e) => Na(e),
      $forceUpdate: (e) =>
        e.f ||
        (e.f = () => {
          Ta(e.update);
        }),
      $nextTick: (e) => e.n || (e.n = Aa.bind(e.proxy)),
      $watch: (e) => ag.bind(e),
    }),
    ll = (e, t) => e !== Mt && !e.__isScriptSetup && It(e, t),
    Fp = {
      get({ _: e }, t) {
        if (t === "__v_skip") return !0;
        const {
          ctx: n,
          setupState: r,
          data: s,
          props: i,
          accessCache: o,
          type: l,
          appContext: a,
        } = e;
        let u;
        if (t[0] !== "$") {
          const g = o[t];
          if (g !== void 0)
            switch (g) {
              case 1:
                return r[t];
              case 2:
                return s[t];
              case 4:
                return n[t];
              case 3:
                return i[t];
            }
          else {
            if (ll(r, t)) return (o[t] = 1), r[t];
            if (s !== Mt && It(s, t)) return (o[t] = 2), s[t];
            if ((u = e.propsOptions[0]) && It(u, t)) return (o[t] = 3), i[t];
            if (n !== Mt && It(n, t)) return (o[t] = 4), n[t];
            Ml && (o[t] = 0);
          }
        }
        const f = vs[t];
        let d, h;
        if (f) return t === "$attrs" && ee(e.attrs, "get", ""), f(e);
        if ((d = l.__cssModules) && (d = d[t])) return d;
        if (n !== Mt && It(n, t)) return (o[t] = 4), n[t];
        if (((h = a.config.globalProperties), It(h, t))) return h[t];
      },
      set({ _: e }, t, n) {
        const { data: r, setupState: s, ctx: i } = e;
        return ll(s, t)
          ? ((s[t] = n), !0)
          : r !== Mt && It(r, t)
            ? ((r[t] = n), !0)
            : It(e.props, t) || (t[0] === "$" && t.slice(1) in e)
              ? !1
              : ((i[t] = n), !0);
      },
      has(
        {
          _: {
            data: e,
            setupState: t,
            accessCache: n,
            ctx: r,
            appContext: s,
            propsOptions: i,
          },
        },
        o,
      ) {
        let l;
        return (
          !!n[o] ||
          (e !== Mt && It(e, o)) ||
          ll(t, o) ||
          ((l = i[0]) && It(l, o)) ||
          It(r, o) ||
          It(vs, o) ||
          It(s.config.globalProperties, o)
        );
      },
      defineProperty(e, t, n) {
        return (
          n.get != null
            ? (e._.accessCache[t] = 0)
            : It(n, "value") && this.set(e, t, n.value, null),
          Reflect.defineProperty(e, t, n)
        );
      },
    };
  function uc(e) {
    return _t(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
  }
  let Ml = !0;
  function Hp(e) {
    const t = Na(e),
      n = e.proxy,
      r = e.ctx;
    (Ml = !1), t.beforeCreate && fc(t.beforeCreate, e, "bc");
    const {
      data: s,
      computed: i,
      methods: o,
      watch: l,
      provide: a,
      inject: u,
      created: f,
      beforeMount: d,
      mounted: h,
      beforeUpdate: g,
      updated: w,
      activated: T,
      deactivated: N,
      beforeDestroy: C,
      beforeUnmount: M,
      destroyed: H,
      unmounted: Z,
      render: st,
      renderTracked: vt,
      renderTriggered: lt,
      errorCaptured: A,
      serverPrefetch: E,
      expose: V,
      inheritAttrs: b,
      components: O,
      directives: _,
      filters: F,
    } = t;
    if ((u && zp(u, r, null), o))
      for (const S in o) {
        const z = o[S];
        At(z) && (r[S] = z.bind(n));
      }
    if (s) {
      const S = s.call(n, n);
      jt(S) && (e.data = ro(S));
    }
    if (((Ml = !0), i))
      for (const S in i) {
        const z = i[S],
          K = At(z) ? z.bind(n, n) : At(z.get) ? z.get.bind(n, n) : Qe,
          Q = !At(z) && At(z.set) ? z.set.bind(n) : Qe,
          ct = qe({ get: K, set: Q });
        Object.defineProperty(r, S, {
          enumerable: !0,
          configurable: !0,
          get: () => ct.value,
          set: (D) => (ct.value = D),
        });
      }
    if (l) for (const S in l) jf(l[S], r, n, S);
    if (a) {
      const S = At(a) ? a.call(n) : a;
      Reflect.ownKeys(S).forEach((z) => {
        Si(z, S[z]);
      });
    }
    f && fc(f, e, "c");
    function R(S, z) {
      _t(z) ? z.forEach((K) => S(K.bind(n))) : z && S(z.bind(n));
    }
    if (
      (R(Op, d),
      R(Lp, h),
      R(kp, g),
      R(Rp, w),
      R(Sp, T),
      R(Np, N),
      R(Bp, A),
      R(Pp, vt),
      R(Mp, lt),
      R(Ip, M),
      R(Bf, Z),
      R(qp, E),
      _t(V))
    )
      if (V.length) {
        const S = e.exposed || (e.exposed = {});
        V.forEach((z) => {
          Object.defineProperty(S, z, {
            get: () => n[z],
            set: (K) => (n[z] = K),
          });
        });
      } else e.exposed || (e.exposed = {});
    st && e.render === Qe && (e.render = st),
      b != null && (e.inheritAttrs = b),
      O && (e.components = O),
      _ && (e.directives = _),
      E && qf(e);
  }
  function zp(e, t, n = Qe) {
    _t(e) && (e = Pl(e));
    for (const r in e) {
      const s = e[r];
      let i;
      jt(s)
        ? "default" in s
          ? (i = vn(s.from || r, s.default, !0))
          : (i = vn(s.from || r))
        : (i = vn(s)),
        ie(i)
          ? Object.defineProperty(t, r, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: (o) => (i.value = o),
            })
          : (t[r] = i);
    }
  }
  function fc(e, t, n) {
    nn(_t(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function jf(e, t, n, r) {
    let s = r.includes(".") ? Qf(n, r) : () => n[r];
    if (zt(e)) {
      const i = t[e];
      At(i) && Ni(s, i);
    } else if (At(e)) Ni(s, e.bind(n));
    else if (jt(e))
      if (_t(e)) e.forEach((i) => jf(i, t, n, r));
      else {
        const i = At(e.handler) ? e.handler.bind(n) : t[e.handler];
        At(i) && Ni(s, i, e);
      }
  }
  function Na(e) {
    const t = e.type,
      { mixins: n, extends: r } = t,
      {
        mixins: s,
        optionsCache: i,
        config: { optionMergeStrategies: o },
      } = e.appContext,
      l = i.get(t);
    let a;
    return (
      l
        ? (a = l)
        : !s.length && !n && !r
          ? (a = t)
          : ((a = {}),
            s.length && s.forEach((u) => Ui(a, u, o, !0)),
            Ui(a, t, o)),
      jt(t) && i.set(t, a),
      a
    );
  }
  function Ui(e, t, n, r = !1) {
    const { mixins: s, extends: i } = t;
    i && Ui(e, i, n, !0), s && s.forEach((o) => Ui(e, o, n, !0));
    for (const o in t)
      if (!(r && o === "expose")) {
        const l = Kp[o] || (n && n[o]);
        e[o] = l ? l(e[o], t[o]) : t[o];
      }
    return e;
  }
  const Kp = {
    data: hc,
    props: dc,
    emits: dc,
    methods: fs,
    computed: fs,
    beforeCreate: ae,
    created: ae,
    beforeMount: ae,
    mounted: ae,
    beforeUpdate: ae,
    updated: ae,
    beforeDestroy: ae,
    beforeUnmount: ae,
    destroyed: ae,
    unmounted: ae,
    activated: ae,
    deactivated: ae,
    errorCaptured: ae,
    serverPrefetch: ae,
    components: fs,
    directives: fs,
    watch: Gp,
    provide: hc,
    inject: Vp,
  };
  function hc(e, t) {
    return t
      ? e
        ? function () {
            return Gt(
              At(e) ? e.call(this, this) : e,
              At(t) ? t.call(this, this) : t,
            );
          }
        : t
      : e;
  }
  function Vp(e, t) {
    return fs(Pl(e), Pl(t));
  }
  function Pl(e) {
    if (_t(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function ae(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function fs(e, t) {
    return e ? Gt(Object.create(null), e, t) : t;
  }
  function dc(e, t) {
    return e
      ? _t(e) && _t(t)
        ? [...new Set([...e, ...t])]
        : Gt(Object.create(null), uc(e), uc(t ?? {}))
      : t;
  }
  function Gp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Gt(Object.create(null), e);
    for (const r in t) n[r] = ae(e[r], t[r]);
    return n;
  }
  function Df() {
    return {
      app: null,
      config: {
        isNativeTag: Id,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let Wp = 0;
  function Zp(e, t) {
    return function (r, s = null) {
      At(r) || (r = Gt({}, r)), s != null && !jt(s) && (s = null);
      const i = Df(),
        o = new WeakSet(),
        l = [];
      let a = !1;
      const u = (i.app = {
        _uid: Wp++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: Lg,
        get config() {
          return i.config;
        },
        set config(f) {},
        use(f, ...d) {
          return (
            o.has(f) ||
              (f && At(f.install)
                ? (o.add(f), f.install(u, ...d))
                : At(f) && (o.add(f), f(u, ...d))),
            u
          );
        },
        mixin(f) {
          return i.mixins.includes(f) || i.mixins.push(f), u;
        },
        component(f, d) {
          return d ? ((i.components[f] = d), u) : i.components[f];
        },
        directive(f, d) {
          return d ? ((i.directives[f] = d), u) : i.directives[f];
        },
        mount(f, d, h) {
          if (!a) {
            const g = u._ceVNode || Vt(r, s);
            return (
              (g.appContext = i),
              h === !0 ? (h = "svg") : h === !1 && (h = void 0),
              d && t ? t(g, f) : e(g, f, h),
              (a = !0),
              (u._container = f),
              (f.__vue_app__ = u),
              ao(g.component)
            );
          }
        },
        onUnmount(f) {
          l.push(f);
        },
        unmount() {
          a &&
            (nn(l, u._instance, 16),
            e(null, u._container),
            delete u._container.__vue_app__);
        },
        provide(f, d) {
          return (i.provides[f] = d), u;
        },
        runWithContext(f) {
          const d = Ir;
          Ir = u;
          try {
            return f();
          } finally {
            Ir = d;
          }
        },
      });
      return u;
    };
  }
  let Ir = null;
  function Si(e, t) {
    if (re) {
      let n = re.provides;
      const r = re.parent && re.parent.provides;
      r === n && (n = re.provides = Object.create(r)), (n[e] = t);
    }
  }
  function vn(e, t, n = !1) {
    const r = re || pe;
    if (r || Ir) {
      const s = Ir
        ? Ir._context.provides
        : r
          ? r.parent == null
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides
          : void 0;
      if (s && e in s) return s[e];
      if (arguments.length > 1) return n && At(t) ? t.call(r && r.proxy) : t;
    }
  }
  const $f = {},
    Uf = () => Object.create($f),
    Ff = (e) => Object.getPrototypeOf(e) === $f;
  function Yp(e, t, n, r = !1) {
    const s = {},
      i = Uf();
    (e.propsDefaults = Object.create(null)), Hf(e, t, s, i);
    for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
    n
      ? (e.props = r ? s : Af(s))
      : e.type.props
        ? (e.props = s)
        : (e.props = i),
      (e.attrs = i);
  }
  function Jp(e, t, n, r) {
    const {
        props: s,
        attrs: i,
        vnode: { patchFlag: o },
      } = e,
      l = Rt(s),
      [a] = e.propsOptions;
    let u = !1;
    if ((r || o > 0) && !(o & 16)) {
      if (o & 8) {
        const f = e.vnode.dynamicProps;
        for (let d = 0; d < f.length; d++) {
          let h = f[d];
          if (oo(e.emitsOptions, h)) continue;
          const g = t[h];
          if (a)
            if (It(i, h)) g !== i[h] && ((i[h] = g), (u = !0));
            else {
              const w = Ne(h);
              s[w] = Bl(a, l, w, g, e, !1);
            }
          else g !== i[h] && ((i[h] = g), (u = !0));
        }
      }
    } else {
      Hf(e, t, s, i) && (u = !0);
      let f;
      for (const d in l)
        (!t || (!It(t, d) && ((f = ir(d)) === d || !It(t, f)))) &&
          (a
            ? n &&
              (n[d] !== void 0 || n[f] !== void 0) &&
              (s[d] = Bl(a, l, d, void 0, e, !0))
            : delete s[d]);
      if (i !== l)
        for (const d in i) (!t || !It(t, d)) && (delete i[d], (u = !0));
    }
    u && bn(e.attrs, "set", "");
  }
  function Hf(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1,
      l;
    if (t)
      for (let a in t) {
        if (gs(a)) continue;
        const u = t[a];
        let f;
        s && It(s, (f = Ne(a)))
          ? !i || !i.includes(f)
            ? (n[f] = u)
            : ((l || (l = {}))[f] = u)
          : oo(e.emitsOptions, a) ||
            ((!(a in r) || u !== r[a]) && ((r[a] = u), (o = !0)));
      }
    if (i) {
      const a = Rt(n),
        u = l || Mt;
      for (let f = 0; f < i.length; f++) {
        const d = i[f];
        n[d] = Bl(s, a, d, u[d], e, !It(u, d));
      }
    }
    return o;
  }
  function Bl(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
      const l = It(o, "default");
      if (l && r === void 0) {
        const a = o.default;
        if (o.type !== Function && !o.skipFactory && At(a)) {
          const { propsDefaults: u } = s;
          if (n in u) r = u[n];
          else {
            const f = zs(s);
            (r = u[n] = a.call(null, t)), f();
          }
        } else r = a;
        s.ce && s.ce._setProp(n, r);
      }
      o[0] &&
        (i && !l ? (r = !1) : o[1] && (r === "" || r === ir(n)) && (r = !0));
    }
    return r;
  }
  const Qp = new WeakMap();
  function zf(e, t, n = !1) {
    const r = n ? Qp : t.propsCache,
      s = r.get(e);
    if (s) return s;
    const i = e.props,
      o = {},
      l = [];
    let a = !1;
    if (!At(e)) {
      const f = (d) => {
        a = !0;
        const [h, g] = zf(d, t, !0);
        Gt(o, h), g && l.push(...g);
      };
      !n && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f);
    }
    if (!i && !a) return jt(e) && r.set(e, Cr), Cr;
    if (_t(i))
      for (let f = 0; f < i.length; f++) {
        const d = Ne(i[f]);
        pc(d) && (o[d] = Mt);
      }
    else if (i)
      for (const f in i) {
        const d = Ne(f);
        if (pc(d)) {
          const h = i[f],
            g = (o[d] = _t(h) || At(h) ? { type: h } : Gt({}, h)),
            w = g.type;
          let T = !1,
            N = !0;
          if (_t(w))
            for (let C = 0; C < w.length; ++C) {
              const M = w[C],
                H = At(M) && M.name;
              if (H === "Boolean") {
                T = !0;
                break;
              } else H === "String" && (N = !1);
            }
          else T = At(w) && w.name === "Boolean";
          (g[0] = T), (g[1] = N), (T || It(g, "default")) && l.push(d);
        }
      }
    const u = [o, l];
    return jt(e) && r.set(e, u), u;
  }
  function pc(e) {
    return e[0] !== "$" && !gs(e);
  }
  const Kf = (e) => e[0] === "_" || e === "$stable",
    Ca = (e) => (_t(e) ? e.map(Je) : [Je(e)]),
    Xp = (e, t, n) => {
      if (t._n) return t;
      const r = Ti((...s) => Ca(t(...s)), n);
      return (r._c = !1), r;
    },
    Vf = (e, t, n) => {
      const r = e._ctx;
      for (const s in e) {
        if (Kf(s)) continue;
        const i = e[s];
        if (At(i)) t[s] = Xp(s, i, r);
        else if (i != null) {
          const o = Ca(i);
          t[s] = () => o;
        }
      }
    },
    Gf = (e, t) => {
      const n = Ca(t);
      e.slots.default = () => n;
    },
    Wf = (e, t, n) => {
      for (const r in t) (n || r !== "_") && (e[r] = t[r]);
    },
    tg = (e, t, n) => {
      const r = (e.slots = Uf());
      if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (Wf(r, t, n), n && of(r, "_", s, !0)) : Vf(t, r);
      } else t && Gf(e, t);
    },
    eg = (e, t, n) => {
      const { vnode: r, slots: s } = e;
      let i = !0,
        o = Mt;
      if (r.shapeFlag & 32) {
        const l = t._;
        l
          ? n && l === 1
            ? (i = !1)
            : Wf(s, t, n)
          : ((i = !t.$stable), Vf(t, s)),
          (o = t);
      } else t && (Gf(e, t), (o = { default: 1 }));
      if (i) for (const l in s) !Kf(l) && o[l] == null && delete s[l];
    },
    he = gg;
  function ng(e) {
    return rg(e);
  }
  function rg(e, t) {
    const n = to();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: i,
        createElement: o,
        createText: l,
        createComment: a,
        setText: u,
        setElementText: f,
        parentNode: d,
        nextSibling: h,
        setScopeId: g = Qe,
        insertStaticContent: w,
      } = e,
      T = (
        m,
        y,
        x,
        q = null,
        I = null,
        G = null,
        tt = void 0,
        J = null,
        Y = !!y.dynamicChildren,
      ) => {
        if (m === y) return;
        m && !os(m, y) && ((q = L(m)), D(m, I, G, !0), (m = null)),
          y.patchFlag === -2 && ((Y = !1), (y.dynamicChildren = null));
        const { type: j, ref: it, shapeFlag: et } = y;
        switch (j) {
          case lo:
            N(m, y, x, q);
            break;
          case tr:
            C(m, y, x, q);
            break;
          case Ci:
            m == null && M(y, x, q, tt);
            break;
          case Ye:
            O(m, y, x, q, I, G, tt, J, Y);
            break;
          default:
            et & 1
              ? st(m, y, x, q, I, G, tt, J, Y)
              : et & 6
                ? _(m, y, x, q, I, G, tt, J, Y)
                : (et & 64 || et & 128) &&
                  j.process(m, y, x, q, I, G, tt, J, Y, $);
        }
        it != null && I && $i(it, m && m.ref, G, y || m, !y);
      },
      N = (m, y, x, q) => {
        if (m == null) r((y.el = l(y.children)), x, q);
        else {
          const I = (y.el = m.el);
          y.children !== m.children && u(I, y.children);
        }
      },
      C = (m, y, x, q) => {
        m == null ? r((y.el = a(y.children || "")), x, q) : (y.el = m.el);
      },
      M = (m, y, x, q) => {
        [m.el, m.anchor] = w(m.children, y, x, q, m.el, m.anchor);
      },
      H = ({ el: m, anchor: y }, x, q) => {
        let I;
        for (; m && m !== y; ) (I = h(m)), r(m, x, q), (m = I);
        r(y, x, q);
      },
      Z = ({ el: m, anchor: y }) => {
        let x;
        for (; m && m !== y; ) (x = h(m)), s(m), (m = x);
        s(y);
      },
      st = (m, y, x, q, I, G, tt, J, Y) => {
        y.type === "svg" ? (tt = "svg") : y.type === "math" && (tt = "mathml"),
          m == null ? vt(y, x, q, I, G, tt, J, Y) : E(m, y, I, G, tt, J, Y);
      },
      vt = (m, y, x, q, I, G, tt, J) => {
        let Y, j;
        const { props: it, shapeFlag: et, transition: X, dirs: bt } = m;
        if (
          ((Y = m.el = o(m.type, G, it && it.is, it)),
          et & 8
            ? f(Y, m.children)
            : et & 16 && A(m.children, Y, null, q, I, al(m, G), tt, J),
          bt && Wn(m, null, q, "created"),
          lt(Y, m, m.scopeId, tt, q),
          it)
        ) {
          for (const Tt in it)
            Tt !== "value" && !gs(Tt) && i(Y, Tt, null, it[Tt], G, q);
          "value" in it && i(Y, "value", null, it.value, G),
            (j = it.onVnodeBeforeMount) && Ge(j, q, m);
        }
        bt && Wn(m, null, q, "beforeMount");
        const wt = sg(I, X);
        wt && X.beforeEnter(Y),
          r(Y, y, x),
          ((j = it && it.onVnodeMounted) || wt || bt) &&
            he(() => {
              j && Ge(j, q, m),
                wt && X.enter(Y),
                bt && Wn(m, null, q, "mounted");
            }, I);
      },
      lt = (m, y, x, q, I) => {
        if ((x && g(m, x), q)) for (let G = 0; G < q.length; G++) g(m, q[G]);
        if (I) {
          let G = I.subTree;
          if (
            y === G ||
            (th(G.type) && (G.ssContent === y || G.ssFallback === y))
          ) {
            const tt = I.vnode;
            lt(m, tt, tt.scopeId, tt.slotScopeIds, I.parent);
          }
        }
      },
      A = (m, y, x, q, I, G, tt, J, Y = 0) => {
        for (let j = Y; j < m.length; j++) {
          const it = (m[j] = J ? kn(m[j]) : Je(m[j]));
          T(null, it, y, x, q, I, G, tt, J);
        }
      },
      E = (m, y, x, q, I, G, tt) => {
        const J = (y.el = m.el);
        let { patchFlag: Y, dynamicChildren: j, dirs: it } = y;
        Y |= m.patchFlag & 16;
        const et = m.props || Mt,
          X = y.props || Mt;
        let bt;
        if (
          (x && Zn(x, !1),
          (bt = X.onVnodeBeforeUpdate) && Ge(bt, x, y, m),
          it && Wn(y, m, x, "beforeUpdate"),
          x && Zn(x, !0),
          ((et.innerHTML && X.innerHTML == null) ||
            (et.textContent && X.textContent == null)) &&
            f(J, ""),
          j
            ? V(m.dynamicChildren, j, J, x, q, al(y, I), G)
            : tt || z(m, y, J, null, x, q, al(y, I), G, !1),
          Y > 0)
        ) {
          if (Y & 16) b(J, et, X, x, I);
          else if (
            (Y & 2 && et.class !== X.class && i(J, "class", null, X.class, I),
            Y & 4 && i(J, "style", et.style, X.style, I),
            Y & 8)
          ) {
            const wt = y.dynamicProps;
            for (let Tt = 0; Tt < wt.length; Tt++) {
              const xt = wt[Tt],
                St = et[xt],
                Ot = X[xt];
              (Ot !== St || xt === "value") && i(J, xt, St, Ot, I, x);
            }
          }
          Y & 1 && m.children !== y.children && f(J, y.children);
        } else !tt && j == null && b(J, et, X, x, I);
        ((bt = X.onVnodeUpdated) || it) &&
          he(() => {
            bt && Ge(bt, x, y, m), it && Wn(y, m, x, "updated");
          }, q);
      },
      V = (m, y, x, q, I, G, tt) => {
        for (let J = 0; J < y.length; J++) {
          const Y = m[J],
            j = y[J],
            it =
              Y.el && (Y.type === Ye || !os(Y, j) || Y.shapeFlag & 70)
                ? d(Y.el)
                : x;
          T(Y, j, it, null, q, I, G, tt, !0);
        }
      },
      b = (m, y, x, q, I) => {
        if (y !== x) {
          if (y !== Mt)
            for (const G in y) !gs(G) && !(G in x) && i(m, G, y[G], null, I, q);
          for (const G in x) {
            if (gs(G)) continue;
            const tt = x[G],
              J = y[G];
            tt !== J && G !== "value" && i(m, G, J, tt, I, q);
          }
          "value" in x && i(m, "value", y.value, x.value, I);
        }
      },
      O = (m, y, x, q, I, G, tt, J, Y) => {
        const j = (y.el = m ? m.el : l("")),
          it = (y.anchor = m ? m.anchor : l(""));
        let { patchFlag: et, dynamicChildren: X, slotScopeIds: bt } = y;
        bt && (J = J ? J.concat(bt) : bt),
          m == null
            ? (r(j, x, q),
              r(it, x, q),
              A(y.children || [], x, it, I, G, tt, J, Y))
            : et > 0 && et & 64 && X && m.dynamicChildren
              ? (V(m.dynamicChildren, X, x, I, G, tt, J),
                (y.key != null || (I && y === I.subTree)) && Zf(m, y, !0))
              : z(m, y, x, it, I, G, tt, J, Y);
      },
      _ = (m, y, x, q, I, G, tt, J, Y) => {
        (y.slotScopeIds = J),
          m == null
            ? y.shapeFlag & 512
              ? I.ctx.activate(y, x, q, tt, Y)
              : F(y, x, q, I, G, tt, Y)
            : W(m, y, Y);
      },
      F = (m, y, x, q, I, G, tt) => {
        const J = (m.component = Eg(m, q, I));
        if ((Mf(m) && (J.ctx.renderer = $), Ag(J, !1, tt), J.asyncDep)) {
          if ((I && I.registerDep(J, R, tt), !m.el)) {
            const Y = (J.subTree = Vt(tr));
            C(null, Y, y, x);
          }
        } else R(J, m, y, x, I, G, tt);
      },
      W = (m, y, x) => {
        const q = (y.component = m.component);
        if (dg(m, y, x))
          if (q.asyncDep && !q.asyncResolved) {
            S(q, y, x);
            return;
          } else (q.next = y), q.update();
        else (y.el = m.el), (q.vnode = y);
      },
      R = (m, y, x, q, I, G, tt) => {
        const J = () => {
          if (m.isMounted) {
            let { next: et, bu: X, u: bt, parent: wt, vnode: Tt } = m;
            {
              const Ut = Yf(m);
              if (Ut) {
                et && ((et.el = Tt.el), S(m, et, tt)),
                  Ut.asyncDep.then(() => {
                    m.isUnmounted || J();
                  });
                return;
              }
            }
            let xt = et,
              St;
            Zn(m, !1),
              et ? ((et.el = Tt.el), S(m, et, tt)) : (et = Tt),
              X && Ai(X),
              (St = et.props && et.props.onVnodeBeforeUpdate) &&
                Ge(St, wt, et, Tt),
              Zn(m, !0);
            const Ot = cl(m),
              qt = m.subTree;
            (m.subTree = Ot),
              T(qt, Ot, d(qt.el), L(qt), m, I, G),
              (et.el = Ot.el),
              xt === null && pg(m, Ot.el),
              bt && he(bt, I),
              (St = et.props && et.props.onVnodeUpdated) &&
                he(() => Ge(St, wt, et, Tt), I);
          } else {
            let et;
            const { el: X, props: bt } = y,
              { bm: wt, m: Tt, parent: xt, root: St, type: Ot } = m,
              qt = ys(y);
            if (
              (Zn(m, !1),
              wt && Ai(wt),
              !qt && (et = bt && bt.onVnodeBeforeMount) && Ge(et, xt, y),
              Zn(m, !0),
              X && ot)
            ) {
              const Ut = () => {
                (m.subTree = cl(m)), ot(X, m.subTree, m, I, null);
              };
              qt && Ot.__asyncHydrate ? Ot.__asyncHydrate(X, m, Ut) : Ut();
            } else {
              St.ce && St.ce._injectChildStyle(Ot);
              const Ut = (m.subTree = cl(m));
              T(null, Ut, x, q, m, I, G), (y.el = Ut.el);
            }
            if ((Tt && he(Tt, I), !qt && (et = bt && bt.onVnodeMounted))) {
              const Ut = y;
              he(() => Ge(et, xt, Ut), I);
            }
            (y.shapeFlag & 256 ||
              (xt && ys(xt.vnode) && xt.vnode.shapeFlag & 256)) &&
              m.a &&
              he(m.a, I),
              (m.isMounted = !0),
              (y = x = q = null);
          }
        };
        m.scope.on();
        const Y = (m.effect = new uf(J));
        m.scope.off();
        const j = (m.update = Y.run.bind(Y)),
          it = (m.job = Y.runIfDirty.bind(Y));
        (it.i = m),
          (it.id = m.uid),
          (Y.scheduler = () => Ta(it)),
          Zn(m, !0),
          j();
      },
      S = (m, y, x) => {
        y.component = m;
        const q = m.vnode.props;
        (m.vnode = y),
          (m.next = null),
          Jp(m, y.props, q, x),
          eg(m, y.children, x),
          Dn(),
          lc(m),
          $n();
      },
      z = (m, y, x, q, I, G, tt, J, Y = !1) => {
        const j = m && m.children,
          it = m ? m.shapeFlag : 0,
          et = y.children,
          { patchFlag: X, shapeFlag: bt } = y;
        if (X > 0) {
          if (X & 128) {
            Q(j, et, x, q, I, G, tt, J, Y);
            return;
          } else if (X & 256) {
            K(j, et, x, q, I, G, tt, J, Y);
            return;
          }
        }
        bt & 8
          ? (it & 16 && mt(j, I, G), et !== j && f(x, et))
          : it & 16
            ? bt & 16
              ? Q(j, et, x, q, I, G, tt, J, Y)
              : mt(j, I, G, !0)
            : (it & 8 && f(x, ""), bt & 16 && A(et, x, q, I, G, tt, J, Y));
      },
      K = (m, y, x, q, I, G, tt, J, Y) => {
        (m = m || Cr), (y = y || Cr);
        const j = m.length,
          it = y.length,
          et = Math.min(j, it);
        let X;
        for (X = 0; X < et; X++) {
          const bt = (y[X] = Y ? kn(y[X]) : Je(y[X]));
          T(m[X], bt, x, null, I, G, tt, J, Y);
        }
        j > it ? mt(m, I, G, !0, !1, et) : A(y, x, q, I, G, tt, J, Y, et);
      },
      Q = (m, y, x, q, I, G, tt, J, Y) => {
        let j = 0;
        const it = y.length;
        let et = m.length - 1,
          X = it - 1;
        for (; j <= et && j <= X; ) {
          const bt = m[j],
            wt = (y[j] = Y ? kn(y[j]) : Je(y[j]));
          if (os(bt, wt)) T(bt, wt, x, null, I, G, tt, J, Y);
          else break;
          j++;
        }
        for (; j <= et && j <= X; ) {
          const bt = m[et],
            wt = (y[X] = Y ? kn(y[X]) : Je(y[X]));
          if (os(bt, wt)) T(bt, wt, x, null, I, G, tt, J, Y);
          else break;
          et--, X--;
        }
        if (j > et) {
          if (j <= X) {
            const bt = X + 1,
              wt = bt < it ? y[bt].el : q;
            for (; j <= X; )
              T(null, (y[j] = Y ? kn(y[j]) : Je(y[j])), x, wt, I, G, tt, J, Y),
                j++;
          }
        } else if (j > X) for (; j <= et; ) D(m[j], I, G, !0), j++;
        else {
          const bt = j,
            wt = j,
            Tt = new Map();
          for (j = wt; j <= X; j++) {
            const Ft = (y[j] = Y ? kn(y[j]) : Je(y[j]));
            Ft.key != null && Tt.set(Ft.key, j);
          }
          let xt,
            St = 0;
          const Ot = X - wt + 1;
          let qt = !1,
            Ut = 0;
          const $t = new Array(Ot);
          for (j = 0; j < Ot; j++) $t[j] = 0;
          for (j = bt; j <= et; j++) {
            const Ft = m[j];
            if (St >= Ot) {
              D(Ft, I, G, !0);
              continue;
            }
            let Wt;
            if (Ft.key != null) Wt = Tt.get(Ft.key);
            else
              for (xt = wt; xt <= X; xt++)
                if ($t[xt - wt] === 0 && os(Ft, y[xt])) {
                  Wt = xt;
                  break;
                }
            Wt === void 0
              ? D(Ft, I, G, !0)
              : (($t[Wt - wt] = j + 1),
                Wt >= Ut ? (Ut = Wt) : (qt = !0),
                T(Ft, y[Wt], x, null, I, G, tt, J, Y),
                St++);
          }
          const ve = qt ? ig($t) : Cr;
          for (xt = ve.length - 1, j = Ot - 1; j >= 0; j--) {
            const Ft = wt + j,
              Wt = y[Ft],
              He = Ft + 1 < it ? y[Ft + 1].el : q;
            $t[j] === 0
              ? T(null, Wt, x, He, I, G, tt, J, Y)
              : qt && (xt < 0 || j !== ve[xt] ? ct(Wt, x, He, 2) : xt--);
          }
        }
      },
      ct = (m, y, x, q, I = null) => {
        const { el: G, type: tt, transition: J, children: Y, shapeFlag: j } = m;
        if (j & 6) {
          ct(m.component.subTree, y, x, q);
          return;
        }
        if (j & 128) {
          m.suspense.move(y, x, q);
          return;
        }
        if (j & 64) {
          tt.move(m, y, x, $);
          return;
        }
        if (tt === Ye) {
          r(G, y, x);
          for (let et = 0; et < Y.length; et++) ct(Y[et], y, x, q);
          r(m.anchor, y, x);
          return;
        }
        if (tt === Ci) {
          H(m, y, x);
          return;
        }
        if (q !== 2 && j & 1 && J)
          if (q === 0) J.beforeEnter(G), r(G, y, x), he(() => J.enter(G), I);
          else {
            const { leave: et, delayLeave: X, afterLeave: bt } = J,
              wt = () => r(G, y, x),
              Tt = () => {
                et(G, () => {
                  wt(), bt && bt();
                });
              };
            X ? X(G, wt, Tt) : Tt();
          }
        else r(G, y, x);
      },
      D = (m, y, x, q = !1, I = !1) => {
        const {
          type: G,
          props: tt,
          ref: J,
          children: Y,
          dynamicChildren: j,
          shapeFlag: it,
          patchFlag: et,
          dirs: X,
          cacheIndex: bt,
        } = m;
        if (
          (et === -2 && (I = !1),
          J != null && $i(J, null, x, m, !0),
          bt != null && (y.renderCache[bt] = void 0),
          it & 256)
        ) {
          y.ctx.deactivate(m);
          return;
        }
        const wt = it & 1 && X,
          Tt = !ys(m);
        let xt;
        if (
          (Tt && (xt = tt && tt.onVnodeBeforeUnmount) && Ge(xt, y, m), it & 6)
        )
          rt(m.component, x, q);
        else {
          if (it & 128) {
            m.suspense.unmount(x, q);
            return;
          }
          wt && Wn(m, null, y, "beforeUnmount"),
            it & 64
              ? m.type.remove(m, y, x, $, q)
              : j && !j.hasOnce && (G !== Ye || (et > 0 && et & 64))
                ? mt(j, y, x, !1, !0)
                : ((G === Ye && et & 384) || (!I && it & 16)) && mt(Y, y, x),
            q && ut(m);
        }
        ((Tt && (xt = tt && tt.onVnodeUnmounted)) || wt) &&
          he(() => {
            xt && Ge(xt, y, m), wt && Wn(m, null, y, "unmounted");
          }, x);
      },
      ut = (m) => {
        const { type: y, el: x, anchor: q, transition: I } = m;
        if (y === Ye) {
          pt(x, q);
          return;
        }
        if (y === Ci) {
          Z(m);
          return;
        }
        const G = () => {
          s(x), I && !I.persisted && I.afterLeave && I.afterLeave();
        };
        if (m.shapeFlag & 1 && I && !I.persisted) {
          const { leave: tt, delayLeave: J } = I,
            Y = () => tt(x, G);
          J ? J(m.el, G, Y) : Y();
        } else G();
      },
      pt = (m, y) => {
        let x;
        for (; m !== y; ) (x = h(m)), s(m), (m = x);
        s(y);
      },
      rt = (m, y, x) => {
        const { bum: q, scope: I, job: G, subTree: tt, um: J, m: Y, a: j } = m;
        gc(Y),
          gc(j),
          q && Ai(q),
          I.stop(),
          G && ((G.flags |= 8), D(tt, m, y, x)),
          J && he(J, y),
          he(() => {
            m.isUnmounted = !0;
          }, y),
          y &&
            y.pendingBranch &&
            !y.isUnmounted &&
            m.asyncDep &&
            !m.asyncResolved &&
            m.suspenseId === y.pendingId &&
            (y.deps--, y.deps === 0 && y.resolve());
      },
      mt = (m, y, x, q = !1, I = !1, G = 0) => {
        for (let tt = G; tt < m.length; tt++) D(m[tt], y, x, q, I);
      },
      L = (m) => {
        if (m.shapeFlag & 6) return L(m.component.subTree);
        if (m.shapeFlag & 128) return m.suspense.next();
        const y = h(m.anchor || m.el),
          x = y && y[Ap];
        return x ? h(x) : y;
      };
    let P = !1;
    const k = (m, y, x) => {
        m == null
          ? y._vnode && D(y._vnode, null, null, !0)
          : T(y._vnode || null, m, y, null, null, null, x),
          (y._vnode = m),
          P || ((P = !0), lc(), Lf(), (P = !1));
      },
      $ = {
        p: T,
        um: D,
        m: ct,
        r: ut,
        mt: F,
        mc: A,
        pc: z,
        pbc: V,
        n: L,
        o: e,
      };
    let nt, ot;
    return { render: k, hydrate: nt, createApp: Zp(k, nt) };
  }
  function al({ type: e, props: t }, n) {
    return (n === "svg" && e === "foreignObject") ||
      (n === "mathml" &&
        e === "annotation-xml" &&
        t &&
        t.encoding &&
        t.encoding.includes("html"))
      ? void 0
      : n;
  }
  function Zn({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
  }
  function sg(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
  }
  function Zf(e, t, n = !1) {
    const r = e.children,
      s = t.children;
    if (_t(r) && _t(s))
      for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let l = s[i];
        l.shapeFlag & 1 &&
          !l.dynamicChildren &&
          ((l.patchFlag <= 0 || l.patchFlag === 32) &&
            ((l = s[i] = kn(s[i])), (l.el = o.el)),
          !n && l.patchFlag !== -2 && Zf(o, l)),
          l.type === lo && (l.el = o.el);
      }
  }
  function ig(e) {
    const t = e.slice(),
      n = [0];
    let r, s, i, o, l;
    const a = e.length;
    for (r = 0; r < a; r++) {
      const u = e[r];
      if (u !== 0) {
        if (((s = n[n.length - 1]), e[s] < u)) {
          (t[r] = s), n.push(r);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; )
          (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l);
        u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
    return n;
  }
  function Yf(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Yf(t);
  }
  function gc(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const og = Symbol.for("v-scx"),
    lg = () => vn(og);
  function Ni(e, t, n) {
    return Jf(e, t, n);
  }
  function Jf(e, t, n = Mt) {
    const { immediate: r, deep: s, flush: i, once: o } = n,
      l = Gt({}, n),
      a = (t && r) || (!t && i !== "post");
    let u;
    if (Rs) {
      if (i === "sync") {
        const g = lg();
        u = g.__watcherHandles || (g.__watcherHandles = []);
      } else if (!a) {
        const g = () => {};
        return (g.stop = Qe), (g.resume = Qe), (g.pause = Qe), g;
      }
    }
    const f = re;
    l.call = (g, w, T) => nn(g, f, w, T);
    let d = !1;
    i === "post"
      ? (l.scheduler = (g) => {
          he(g, f && f.suspense);
        })
      : i !== "sync" &&
        ((d = !0),
        (l.scheduler = (g, w) => {
          w ? g() : Ta(g);
        })),
      (l.augmentJob = (g) => {
        t && (g.flags |= 4),
          d && ((g.flags |= 2), f && ((g.id = f.uid), (g.i = f)));
      });
    const h = wp(e, t, l);
    return Rs && (u ? u.push(h) : a && h()), h;
  }
  function ag(e, t, n) {
    const r = this.proxy,
      s = zt(e) ? (e.includes(".") ? Qf(r, e) : () => r[e]) : e.bind(r, r);
    let i;
    At(t) ? (i = t) : ((i = t.handler), (n = t));
    const o = zs(this),
      l = Jf(s, i.bind(r), n);
    return o(), l;
  }
  function Qf(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let s = 0; s < n.length && r; s++) r = r[n[s]];
      return r;
    };
  }
  const cg = (e, t) =>
    t === "modelValue" || t === "model-value"
      ? e.modelModifiers
      : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${ir(t)}Modifiers`];
  function ug(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Mt;
    let s = n;
    const i = t.startsWith("update:"),
      o = i && cg(r, t.slice(7));
    o &&
      (o.trim && (s = n.map((f) => (zt(f) ? f.trim() : f))),
      o.number && (s = n.map(Pi)));
    let l,
      a = r[(l = nl(t))] || r[(l = nl(Ne(t)))];
    !a && i && (a = r[(l = nl(ir(t)))]), a && nn(a, e, 6, s);
    const u = r[l + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      (e.emitted[l] = !0), nn(u, e, 6, s);
    }
  }
  function Xf(e, t, n = !1) {
    const r = t.emitsCache,
      s = r.get(e);
    if (s !== void 0) return s;
    const i = e.emits;
    let o = {},
      l = !1;
    if (!At(e)) {
      const a = (u) => {
        const f = Xf(u, t, !0);
        f && ((l = !0), Gt(o, f));
      };
      !n && t.mixins.length && t.mixins.forEach(a),
        e.extends && a(e.extends),
        e.mixins && e.mixins.forEach(a);
    }
    return !i && !l
      ? (jt(e) && r.set(e, null), null)
      : (_t(i) ? i.forEach((a) => (o[a] = null)) : Gt(o, i),
        jt(e) && r.set(e, o),
        o);
  }
  function oo(e, t) {
    return !e || !Yi(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, "")),
        It(e, t[0].toLowerCase() + t.slice(1)) || It(e, ir(t)) || It(e, t));
  }
  function cl(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [i],
        slots: o,
        attrs: l,
        emit: a,
        render: u,
        renderCache: f,
        props: d,
        data: h,
        setupState: g,
        ctx: w,
        inheritAttrs: T,
      } = e,
      N = Di(e);
    let C, M;
    try {
      if (n.shapeFlag & 4) {
        const Z = s || r,
          st = Z;
        (C = Je(u.call(st, Z, f, d, g, h, w))), (M = l);
      } else {
        const Z = t;
        (C = Je(
          Z.length > 1 ? Z(d, { attrs: l, slots: o, emit: a }) : Z(d, null),
        )),
          (M = t.props ? l : fg(l));
      }
    } catch (Z) {
      (ws.length = 0), so(Z, e, 1), (C = Vt(tr));
    }
    let H = C;
    if (M && T !== !1) {
      const Z = Object.keys(M),
        { shapeFlag: st } = H;
      Z.length &&
        st & 7 &&
        (i && Z.some(da) && (M = hg(M, i)), (H = jr(H, M, !1, !0)));
    }
    return (
      n.dirs &&
        ((H = jr(H, null, !1, !0)),
        (H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs)),
      n.transition && Sa(H, n.transition),
      (C = H),
      Di(N),
      C
    );
  }
  const fg = (e) => {
      let t;
      for (const n in e)
        (n === "class" || n === "style" || Yi(n)) &&
          ((t || (t = {}))[n] = e[n]);
      return t;
    },
    hg = (e, t) => {
      const n = {};
      for (const r in e) (!da(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
      return n;
    };
  function dg(e, t, n) {
    const { props: r, children: s, component: i } = e,
      { props: o, children: l, patchFlag: a } = t,
      u = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
      if (a & 1024) return !0;
      if (a & 16) return r ? mc(r, o, u) : !!o;
      if (a & 8) {
        const f = t.dynamicProps;
        for (let d = 0; d < f.length; d++) {
          const h = f[d];
          if (o[h] !== r[h] && !oo(u, h)) return !0;
        }
      }
    } else
      return (s || l) && (!l || !l.$stable)
        ? !0
        : r === o
          ? !1
          : r
            ? o
              ? mc(r, o, u)
              : !0
            : !!o;
    return !1;
  }
  function mc(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (t[i] !== e[i] && !oo(n, i)) return !0;
    }
    return !1;
  }
  function pg({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (
        (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      )
        ((e = t.vnode).el = n), (t = t.parent);
      else break;
    }
  }
  const th = (e) => e.__isSuspense;
  function gg(e, t) {
    t && t.pendingBranch
      ? _t(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : Ep(e);
  }
  const Ye = Symbol.for("v-fgt"),
    lo = Symbol.for("v-txt"),
    tr = Symbol.for("v-cmt"),
    Ci = Symbol.for("v-stc"),
    ws = [];
  let ge = null;
  function _e(e = !1) {
    ws.push((ge = e ? null : []));
  }
  function mg() {
    ws.pop(), (ge = ws[ws.length - 1] || null);
  }
  let ks = 1;
  function bc(e, t = !1) {
    (ks += e), e < 0 && ge && t && (ge.hasOnce = !0);
  }
  function eh(e) {
    return (
      (e.dynamicChildren = ks > 0 ? ge || Cr : null),
      mg(),
      ks > 0 && ge && ge.push(e),
      e
    );
  }
  function Re(e, t, n, r, s, i) {
    return eh(ht(e, t, n, r, s, i, !0));
  }
  function bg(e, t, n, r, s) {
    return eh(Vt(e, t, n, r, s, !0));
  }
  function Fi(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function os(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const nh = ({ key: e }) => e ?? null,
    Oi = ({ ref: e, ref_key: t, ref_for: n }) => (
      typeof e == "number" && (e = "" + e),
      e != null
        ? zt(e) || ie(e) || At(e)
          ? { i: pe, r: e, k: t, f: !!n }
          : e
        : null
    );
  function ht(
    e,
    t = null,
    n = null,
    r = 0,
    s = null,
    i = e === Ye ? 0 : 1,
    o = !1,
    l = !1,
  ) {
    const a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && nh(t),
      ref: t && Oi(t),
      scopeId: Rf,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: pe,
    };
    return (
      l
        ? (Oa(a, n), i & 128 && e.normalize(a))
        : n && (a.shapeFlag |= zt(n) ? 8 : 16),
      ks > 0 &&
        !o &&
        ge &&
        (a.patchFlag > 0 || i & 6) &&
        a.patchFlag !== 32 &&
        ge.push(a),
      a
    );
  }
  const Vt = yg;
  function yg(e, t = null, n = null, r = 0, s = null, i = !1) {
    if (((!e || e === Dp) && (e = tr), Fi(e))) {
      const l = jr(e, t, !0);
      return (
        n && Oa(l, n),
        ks > 0 &&
          !i &&
          ge &&
          (l.shapeFlag & 6 ? (ge[ge.indexOf(e)] = l) : ge.push(l)),
        (l.patchFlag = -2),
        l
      );
    }
    if ((Og(e) && (e = e.__vccOpts), t)) {
      t = vg(t);
      let { class: l, style: a } = t;
      l && !zt(l) && (t.class = mn(l)),
        jt(a) && (Ea(a) && !_t(a) && (a = Gt({}, a)), (t.style = ma(a)));
    }
    const o = zt(e) ? 1 : th(e) ? 128 : Tp(e) ? 64 : jt(e) ? 4 : At(e) ? 2 : 0;
    return ht(e, t, n, r, s, o, i, !0);
  }
  function vg(e) {
    return e ? (Ea(e) || Ff(e) ? Gt({}, e) : e) : null;
  }
  function jr(e, t, n = !1, r = !1) {
    const { props: s, ref: i, patchFlag: o, children: l, transition: a } = e,
      u = t ? wg(s || {}, t) : s,
      f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && nh(u),
        ref:
          t && t.ref
            ? n && i
              ? _t(i)
                ? i.concat(Oi(t))
                : [i, Oi(t)]
              : Oi(t)
            : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ye ? (o === -1 ? 16 : o | 16) : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: a,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && jr(e.ssContent),
        ssFallback: e.ssFallback && jr(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
      };
    return a && r && Sa(f, a.clone(f)), f;
  }
  function er(e = " ", t = 0) {
    return Vt(lo, null, e, t);
  }
  function _s(e, t) {
    const n = Vt(Ci, null, e);
    return (n.staticCount = t), n;
  }
  function Li(e = "", t = !1) {
    return t ? (_e(), bg(tr, null, e)) : Vt(tr, null, e);
  }
  function Je(e) {
    return e == null || typeof e == "boolean"
      ? Vt(tr)
      : _t(e)
        ? Vt(Ye, null, e.slice())
        : Fi(e)
          ? kn(e)
          : Vt(lo, null, String(e));
  }
  function kn(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : jr(e);
  }
  function Oa(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (_t(t)) n = 16;
    else if (typeof t == "object")
      if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), Oa(e, s()), s._c && (s._d = !0));
        return;
      } else {
        n = 32;
        const s = t._;
        !s && !Ff(t)
          ? (t._ctx = pe)
          : s === 3 &&
            pe &&
            (pe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
      }
    else
      At(t)
        ? ((t = { default: t, _ctx: pe }), (n = 32))
        : ((t = String(t)), r & 64 ? ((n = 16), (t = [er(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
  }
  function wg(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const s in r)
        if (s === "class")
          t.class !== r.class && (t.class = mn([t.class, r.class]));
        else if (s === "style") t.style = ma([t.style, r.style]);
        else if (Yi(s)) {
          const i = t[s],
            o = r[s];
          o &&
            i !== o &&
            !(_t(i) && i.includes(o)) &&
            (t[s] = i ? [].concat(i, o) : o);
        } else s !== "" && (t[s] = r[s]);
    }
    return t;
  }
  function Ge(e, t, n, r = null) {
    nn(e, t, 7, [n, r]);
  }
  const _g = Df();
  let xg = 0;
  function Eg(e, t, n) {
    const r = e.type,
      s = (t ? t.appContext : e.appContext) || _g,
      i = {
        uid: xg++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Vd(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: zf(r, s),
        emitsOptions: Xf(r, s),
        emit: null,
        emitted: null,
        propsDefaults: Mt,
        inheritAttrs: r.inheritAttrs,
        ctx: Mt,
        data: Mt,
        props: Mt,
        attrs: Mt,
        slots: Mt,
        refs: Mt,
        setupState: Mt,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (
      (i.ctx = { _: i }),
      (i.root = t ? t.root : i),
      (i.emit = ug.bind(null, i)),
      e.ce && e.ce(i),
      i
    );
  }
  let re = null,
    Hi,
    jl;
  {
    const e = to(),
      t = (n, r) => {
        let s;
        return (
          (s = e[n]) || (s = e[n] = []),
          s.push(r),
          (i) => {
            s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
          }
        );
      };
    (Hi = t("__VUE_INSTANCE_SETTERS__", (n) => (re = n))),
      (jl = t("__VUE_SSR_SETTERS__", (n) => (Rs = n)));
  }
  const zs = (e) => {
      const t = re;
      return (
        Hi(e),
        e.scope.on(),
        () => {
          e.scope.off(), Hi(t);
        }
      );
    },
    yc = () => {
      re && re.scope.off(), Hi(null);
    };
  function rh(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Rs = !1;
  function Ag(e, t = !1, n = !1) {
    t && jl(t);
    const { props: r, children: s } = e.vnode,
      i = rh(e);
    Yp(e, r, i, t), tg(e, s, n);
    const o = i ? Tg(e, t) : void 0;
    return t && jl(!1), o;
  }
  function Tg(e, t) {
    const n = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Fp));
    const { setup: r } = n;
    if (r) {
      Dn();
      const s = (e.setupContext = r.length > 1 ? Ng(e) : null),
        i = zs(e),
        o = Hs(r, e, 0, [e.props, s]),
        l = nf(o);
      if (($n(), i(), (l || e.sp) && !ys(e) && qf(e), l)) {
        if ((o.then(yc, yc), t))
          return o
            .then((a) => {
              vc(e, a, t);
            })
            .catch((a) => {
              so(a, e, 0);
            });
        e.asyncDep = o;
      } else vc(e, o, t);
    } else sh(e, t);
  }
  function vc(e, t, n) {
    At(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : jt(t) && (e.setupState = Nf(t)),
      sh(e, n);
  }
  let wc;
  function sh(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && wc && !r.render) {
        const s = r.template || Na(e).template;
        if (s) {
          const { isCustomElement: i, compilerOptions: o } =
              e.appContext.config,
            { delimiters: l, compilerOptions: a } = r,
            u = Gt(Gt({ isCustomElement: i, delimiters: l }, o), a);
          r.render = wc(s, u);
        }
      }
      e.render = r.render || Qe;
    }
    {
      const s = zs(e);
      Dn();
      try {
        Hp(e);
      } finally {
        $n(), s();
      }
    }
  }
  const Sg = {
    get(e, t) {
      return ee(e, "get", ""), e[t];
    },
  };
  function Ng(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Sg),
      slots: e.slots,
      emit: e.emit,
      expose: t,
    };
  }
  function ao(e) {
    return e.exposed
      ? e.exposeProxy ||
          (e.exposeProxy = new Proxy(Nf(hp(e.exposed)), {
            get(t, n) {
              if (n in t) return t[n];
              if (n in vs) return vs[n](e);
            },
            has(t, n) {
              return n in t || n in vs;
            },
          }))
      : e.proxy;
  }
  function Cg(e, t = !0) {
    return At(e) ? e.displayName || e.name : e.name || (t && e.__name);
  }
  function Og(e) {
    return At(e) && "__vccOpts" in e;
  }
  const qe = (e, t) => yp(e, t, Rs);
  function ih(e, t, n) {
    const r = arguments.length;
    return r === 2
      ? jt(t) && !_t(t)
        ? Fi(t)
          ? Vt(e, null, [t])
          : Vt(e, t)
        : Vt(e, null, t)
      : (r > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : r === 3 && Fi(n) && (n = [n]),
        Vt(e, t, n));
  }
  const Lg = "3.5.13";
  /**
   * @vue/runtime-dom v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Dl;
  const _c = typeof window < "u" && window.trustedTypes;
  if (_c)
    try {
      Dl = _c.createPolicy("vue", { createHTML: (e) => e });
    } catch {}
  const oh = Dl ? (e) => Dl.createHTML(e) : (e) => e,
    kg = "http://www.w3.org/2000/svg",
    Rg = "http://www.w3.org/1998/Math/MathML",
    gn = typeof document < "u" ? document : null,
    xc = gn && gn.createElement("template"),
    Ig = {
      insert: (e, t, n) => {
        t.insertBefore(e, n || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, n, r) => {
        const s =
          t === "svg"
            ? gn.createElementNS(kg, e)
            : t === "mathml"
              ? gn.createElementNS(Rg, e)
              : n
                ? gn.createElement(e, { is: n })
                : gn.createElement(e);
        return (
          e === "select" &&
            r &&
            r.multiple != null &&
            s.setAttribute("multiple", r.multiple),
          s
        );
      },
      createText: (e) => gn.createTextNode(e),
      createComment: (e) => gn.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => gn.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, "");
      },
      insertStaticContent(e, t, n, r, s, i) {
        const o = n ? n.previousSibling : t.lastChild;
        if (s && (s === i || s.nextSibling))
          for (
            ;
            t.insertBefore(s.cloneNode(!0), n),
              !(s === i || !(s = s.nextSibling));

          );
        else {
          xc.innerHTML = oh(
            r === "svg"
              ? `<svg>${e}</svg>`
              : r === "mathml"
                ? `<math>${e}</math>`
                : e,
          );
          const l = xc.content;
          if (r === "svg" || r === "mathml") {
            const a = l.firstChild;
            for (; a.firstChild; ) l.appendChild(a.firstChild);
            l.removeChild(a);
          }
          t.insertBefore(l, n);
        }
        return [
          o ? o.nextSibling : t.firstChild,
          n ? n.previousSibling : t.lastChild,
        ];
      },
    },
    qg = Symbol("_vtc");
  function Mg(e, t, n) {
    const r = e[qg];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
      t == null
        ? e.removeAttribute("class")
        : n
          ? e.setAttribute("class", t)
          : (e.className = t);
  }
  const Ec = Symbol("_vod"),
    Pg = Symbol("_vsh"),
    Bg = Symbol(""),
    jg = /(^|;)\s*display\s*:/;
  function Dg(e, t, n) {
    const r = e.style,
      s = zt(n);
    let i = !1;
    if (n && !s) {
      if (t)
        if (zt(t))
          for (const o of t.split(";")) {
            const l = o.slice(0, o.indexOf(":")).trim();
            n[l] == null && ki(r, l, "");
          }
        else for (const o in t) n[o] == null && ki(r, o, "");
      for (const o in n) o === "display" && (i = !0), ki(r, o, n[o]);
    } else if (s) {
      if (t !== n) {
        const o = r[Bg];
        o && (n += ";" + o), (r.cssText = n), (i = jg.test(n));
      }
    } else t && e.removeAttribute("style");
    Ec in e && ((e[Ec] = i ? r.display : ""), e[Pg] && (r.display = "none"));
  }
  const Ac = /\s*!important$/;
  function ki(e, t, n) {
    if (_t(n)) n.forEach((r) => ki(e, t, r));
    else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
    else {
      const r = $g(e, t);
      Ac.test(n)
        ? e.setProperty(ir(r), n.replace(Ac, ""), "important")
        : (e[r] = n);
    }
  }
  const Tc = ["Webkit", "Moz", "ms"],
    ul = {};
  function $g(e, t) {
    const n = ul[t];
    if (n) return n;
    let r = Ne(t);
    if (r !== "filter" && r in e) return (ul[t] = r);
    r = Xi(r);
    for (let s = 0; s < Tc.length; s++) {
      const i = Tc[s] + r;
      if (i in e) return (ul[t] = i);
    }
    return t;
  }
  const Sc = "http://www.w3.org/1999/xlink";
  function Nc(e, t, n, r, s, i = Hd(t)) {
    r && t.startsWith("xlink:")
      ? n == null
        ? e.removeAttributeNS(Sc, t.slice(6, t.length))
        : e.setAttributeNS(Sc, t, n)
      : n == null || (i && !lf(n))
        ? e.removeAttribute(t)
        : e.setAttribute(t, i ? "" : en(n) ? String(n) : n);
  }
  function Cc(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? oh(n) : n);
      return;
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
        a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
      (l !== a || !("_value" in e)) && (e.value = a),
        n == null && e.removeAttribute(t),
        (e._value = n);
      return;
    }
    let o = !1;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean"
        ? (n = lf(n))
        : n == null && l === "string"
          ? ((n = ""), (o = !0))
          : l === "number" && ((n = 0), (o = !0));
    }
    try {
      e[t] = n;
    } catch {}
    o && e.removeAttribute(s || t);
  }
  function Jn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Ug(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const Oc = Symbol("_vei");
  function Fg(e, t, n, r, s = null) {
    const i = e[Oc] || (e[Oc] = {}),
      o = i[t];
    if (r && o) o.value = r;
    else {
      const [l, a] = Hg(t);
      if (r) {
        const u = (i[t] = Vg(r, s));
        Jn(e, l, u, a);
      } else o && (Ug(e, l, o, a), (i[t] = void 0));
    }
  }
  const Lc = /(?:Once|Passive|Capture)$/;
  function Hg(e) {
    let t;
    if (Lc.test(e)) {
      t = {};
      let r;
      for (; (r = e.match(Lc)); )
        (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
    }
    return [e[2] === ":" ? e.slice(3) : ir(e.slice(2)), t];
  }
  let fl = 0;
  const zg = Promise.resolve(),
    Kg = () => fl || (zg.then(() => (fl = 0)), (fl = Date.now()));
  function Vg(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      nn(Gg(r, n.value), t, 5, [r]);
    };
    return (n.value = e), (n.attached = Kg()), n;
  }
  function Gg(e, t) {
    if (_t(t)) {
      const n = e.stopImmediatePropagation;
      return (
        (e.stopImmediatePropagation = () => {
          n.call(e), (e._stopped = !0);
        }),
        t.map((r) => (s) => !s._stopped && r && r(s))
      );
    } else return t;
  }
  const kc = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      e.charCodeAt(2) > 96 &&
      e.charCodeAt(2) < 123,
    Wg = (e, t, n, r, s, i) => {
      const o = s === "svg";
      t === "class"
        ? Mg(e, r, o)
        : t === "style"
          ? Dg(e, n, r)
          : Yi(t)
            ? da(t) || Fg(e, t, n, r, i)
            : (
                  t[0] === "."
                    ? ((t = t.slice(1)), !0)
                    : t[0] === "^"
                      ? ((t = t.slice(1)), !1)
                      : Zg(e, t, r, o)
                )
              ? (Cc(e, t, r),
                !e.tagName.includes("-") &&
                  (t === "value" || t === "checked" || t === "selected") &&
                  Nc(e, t, r, o, i, t !== "value"))
              : e._isVueCE && (/[A-Z]/.test(t) || !zt(r))
                ? Cc(e, Ne(t), r, i, t)
                : (t === "true-value"
                    ? (e._trueValue = r)
                    : t === "false-value" && (e._falseValue = r),
                  Nc(e, t, r, o));
    };
  function Zg(e, t, n, r) {
    if (r)
      return !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && kc(t) && At(n))
      );
    if (
      t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA")
    )
      return !1;
    if (t === "width" || t === "height") {
      const s = e.tagName;
      if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
        return !1;
    }
    return kc(t) && zt(n) ? !1 : t in e;
  }
  const zi = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return _t(t) ? (n) => Ai(t, n) : t;
  };
  function Yg(e) {
    e.target.composing = !0;
  }
  function Rc(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
  }
  const qr = Symbol("_assign"),
    ls = {
      created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
        e[qr] = zi(s);
        const i = r || (s.props && s.props.type === "number");
        Jn(e, t ? "change" : "input", (o) => {
          if (o.target.composing) return;
          let l = e.value;
          n && (l = l.trim()), i && (l = Pi(l)), e[qr](l);
        }),
          n &&
            Jn(e, "change", () => {
              e.value = e.value.trim();
            }),
          t ||
            (Jn(e, "compositionstart", Yg),
            Jn(e, "compositionend", Rc),
            Jn(e, "change", Rc));
      },
      mounted(e, { value: t }) {
        e.value = t ?? "";
      },
      beforeUpdate(
        e,
        { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } },
        o,
      ) {
        if (((e[qr] = zi(o)), e.composing)) return;
        const l =
            (i || e.type === "number") && !/^0\d/.test(e.value)
              ? Pi(e.value)
              : e.value,
          a = t ?? "";
        l !== a &&
          ((document.activeElement === e &&
            e.type !== "range" &&
            ((r && t === n) || (s && e.value.trim() === a))) ||
            (e.value = a));
      },
    },
    Jg = {
      deep: !0,
      created(e, { value: t, modifiers: { number: n } }, r) {
        const s = Ji(t);
        Jn(e, "change", () => {
          const i = Array.prototype.filter
            .call(e.options, (o) => o.selected)
            .map((o) => (n ? Pi(Ki(o)) : Ki(o)));
          e[qr](e.multiple ? (s ? new Set(i) : i) : i[0]),
            (e._assigning = !0),
            Aa(() => {
              e._assigning = !1;
            });
        }),
          (e[qr] = zi(r));
      },
      mounted(e, { value: t }) {
        Ic(e, t);
      },
      beforeUpdate(e, t, n) {
        e[qr] = zi(n);
      },
      updated(e, { value: t }) {
        e._assigning || Ic(e, t);
      },
    };
  function Ic(e, t) {
    const n = e.multiple,
      r = _t(t);
    if (!(n && !r && !Ji(t))) {
      for (let s = 0, i = e.options.length; s < i; s++) {
        const o = e.options[s],
          l = Ki(o);
        if (n)
          if (r) {
            const a = typeof l;
            a === "string" || a === "number"
              ? (o.selected = t.some((u) => String(u) === String(l)))
              : (o.selected = Kd(t, l) > -1);
          } else o.selected = t.has(l);
        else if (eo(Ki(o), t)) {
          e.selectedIndex !== s && (e.selectedIndex = s);
          return;
        }
      }
      !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
  }
  function Ki(e) {
    return "_value" in e ? e._value : e.value;
  }
  const Qg = ["ctrl", "shift", "alt", "meta"],
    Xg = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => "button" in e && e.button !== 0,
      middle: (e) => "button" in e && e.button !== 1,
      right: (e) => "button" in e && e.button !== 2,
      exact: (e, t) => Qg.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    tm = (e, t) => {
      const n = e._withMods || (e._withMods = {}),
        r = t.join(".");
      return (
        n[r] ||
        (n[r] = (s, ...i) => {
          for (let o = 0; o < t.length; o++) {
            const l = Xg[t[o]];
            if (l && l(s, t)) return;
          }
          return e(s, ...i);
        })
      );
    },
    em = Gt({ patchProp: Wg }, Ig);
  let qc;
  function nm() {
    return qc || (qc = ng(em));
  }
  const rm = (...e) => {
    const t = nm().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = im(r);
        if (!s) return;
        const i = t._component;
        !At(i) && !i.render && !i.template && (i.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = "");
        const o = n(s, !1, sm(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          o
        );
      }),
      t
    );
  };
  function sm(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
      return "mathml";
  }
  function im(e) {
    return zt(e) ? document.querySelector(e) : e;
  }
  const om = "/venise-menu/logo-venise-white.png",
    La = (e, t) => {
      const n = e.__vccOpts || e;
      for (const [r, s] of t) n[r] = s;
      return n;
    },
    lm = { name: "App" },
    am = { id: "app" },
    cm = {
      class:
        "bg-gray-100 border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-100",
    },
    um = { class: "flex flex-wrap mx-auto max-w-screen-xl" },
    fm = {
      class:
        "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-5",
      id: "mobile-menu-2",
    },
    hm = {
      class: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0",
    },
    dm = { class: "p-4" };
  function pm(e, t, n, r, s, i) {
    const o = ac("router-link"),
      l = ac("router-view");
    return (
      _e(),
      Re("div", am, [
        ht("header", null, [
          ht("nav", cm, [
            ht("div", um, [
              Vt(
                o,
                { to: "/", class: "flex items-center" },
                {
                  default: Ti(
                    () =>
                      t[0] ||
                      (t[0] = [
                        ht(
                          "img",
                          {
                            src: om,
                            class: "mr-3 w-32 ml-3",
                            alt: "Venise Logo",
                          },
                          null,
                          -1,
                        ),
                      ]),
                  ),
                  _: 1,
                },
              ),
              t[3] ||
                (t[3] = _s(
                  '<div class="flex items-center lg:order-2"><button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>',
                  1,
                )),
              ht("div", fm, [
                ht("ul", hm, [
                  Vt(
                    o,
                    {
                      to: "/",
                      class: "mr-4 text-gray-700 text-sm hover:underline",
                    },
                    { default: Ti(() => t[1] || (t[1] = [er("Home")])), _: 1 },
                  ),
                  Vt(
                    o,
                    {
                      to: "/edit",
                      class: "text-gray-700 text-sm hover:underline",
                    },
                    {
                      default: Ti(() => t[2] || (t[2] = [er("Wijzig menu")])),
                      _: 1,
                    },
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
        ht("main", dm, [Vt(l)]),
      ])
    );
  }
  const gm = La(lm, [["render", pm]]);
  /*!
   * vue-router v4.5.0
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ const _r = typeof document < "u";
  function lh(e) {
    return (
      typeof e == "object" ||
      "displayName" in e ||
      "props" in e ||
      "__vccOpts" in e
    );
  }
  function mm(e) {
    return (
      e.__esModule ||
      e[Symbol.toStringTag] === "Module" ||
      (e.default && lh(e.default))
    );
  }
  const kt = Object.assign;
  function hl(e, t) {
    const n = {};
    for (const r in t) {
      const s = t[r];
      n[r] = je(s) ? s.map(e) : e(s);
    }
    return n;
  }
  const xs = () => {},
    je = Array.isArray,
    ah = /#/g,
    bm = /&/g,
    ym = /\//g,
    vm = /=/g,
    wm = /\?/g,
    ch = /\+/g,
    _m = /%5B/g,
    xm = /%5D/g,
    uh = /%5E/g,
    Em = /%60/g,
    fh = /%7B/g,
    Am = /%7C/g,
    hh = /%7D/g,
    Tm = /%20/g;
  function ka(e) {
    return encodeURI("" + e)
      .replace(Am, "|")
      .replace(_m, "[")
      .replace(xm, "]");
  }
  function Sm(e) {
    return ka(e).replace(fh, "{").replace(hh, "}").replace(uh, "^");
  }
  function $l(e) {
    return ka(e)
      .replace(ch, "%2B")
      .replace(Tm, "+")
      .replace(ah, "%23")
      .replace(bm, "%26")
      .replace(Em, "`")
      .replace(fh, "{")
      .replace(hh, "}")
      .replace(uh, "^");
  }
  function Nm(e) {
    return $l(e).replace(vm, "%3D");
  }
  function Cm(e) {
    return ka(e).replace(ah, "%23").replace(wm, "%3F");
  }
  function Om(e) {
    return e == null ? "" : Cm(e).replace(ym, "%2F");
  }
  function Is(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {}
    return "" + e;
  }
  const Lm = /\/$/,
    km = (e) => e.replace(Lm, "");
  function dl(e, t, n = "/") {
    let r,
      s = {},
      i = "",
      o = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return (
      l < a && l >= 0 && (a = -1),
      a > -1 &&
        ((r = t.slice(0, a)),
        (i = t.slice(a + 1, l > -1 ? l : t.length)),
        (s = e(i))),
      l > -1 && ((r = r || t.slice(0, l)), (o = t.slice(l, t.length))),
      (r = Mm(r ?? t, n)),
      { fullPath: r + (i && "?") + i + o, path: r, query: s, hash: Is(o) }
    );
  }
  function Rm(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Mc(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase())
      ? e
      : e.slice(t.length) || "/";
  }
  function Im(e, t, n) {
    const r = t.matched.length - 1,
      s = n.matched.length - 1;
    return (
      r > -1 &&
      r === s &&
      Dr(t.matched[r], n.matched[s]) &&
      dh(t.params, n.params) &&
      e(t.query) === e(n.query) &&
      t.hash === n.hash
    );
  }
  function Dr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function dh(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!qm(e[n], t[n])) return !1;
    return !0;
  }
  function qm(e, t) {
    return je(e) ? Pc(e, t) : je(t) ? Pc(t, e) : e === t;
  }
  function Pc(e, t) {
    return je(t)
      ? e.length === t.length && e.every((n, r) => n === t[r])
      : e.length === 1 && e[0] === t;
  }
  function Mm(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
      r = e.split("/"),
      s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1,
      o,
      l;
    for (o = 0; o < r.length; o++)
      if (((l = r[o]), l !== "."))
        if (l === "..") i > 1 && i--;
        else break;
    return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
  }
  const Cn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  };
  var qs;
  (function (e) {
    (e.pop = "pop"), (e.push = "push");
  })(qs || (qs = {}));
  var Es;
  (function (e) {
    (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
  })(Es || (Es = {}));
  function Pm(e) {
    if (!e)
      if (_r) {
        const t = document.querySelector("base");
        (e = (t && t.getAttribute("href")) || "/"),
          (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
      } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), km(e);
  }
  const Bm = /^[^#]+#/;
  function jm(e, t) {
    return e.replace(Bm, "#") + t;
  }
  function Dm(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
      r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0),
    };
  }
  const co = () => ({ left: window.scrollX, top: window.scrollY });
  function $m(e) {
    let t;
    if ("el" in e) {
      const n = e.el,
        r = typeof n == "string" && n.startsWith("#"),
        s =
          typeof n == "string"
            ? r
              ? document.getElementById(n.slice(1))
              : document.querySelector(n)
            : n;
      if (!s) return;
      t = Dm(s, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style
      ? window.scrollTo(t)
      : window.scrollTo(
          t.left != null ? t.left : window.scrollX,
          t.top != null ? t.top : window.scrollY,
        );
  }
  function Bc(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Ul = new Map();
  function Um(e, t) {
    Ul.set(e, t);
  }
  function Fm(e) {
    const t = Ul.get(e);
    return Ul.delete(e), t;
  }
  let Hm = () => location.protocol + "//" + location.host;
  function ph(e, t) {
    const { pathname: n, search: r, hash: s } = t,
      i = e.indexOf("#");
    if (i > -1) {
      let l = s.includes(e.slice(i)) ? e.slice(i).length : 1,
        a = s.slice(l);
      return a[0] !== "/" && (a = "/" + a), Mc(a, "");
    }
    return Mc(n, e) + r + s;
  }
  function zm(e, t, n, r) {
    let s = [],
      i = [],
      o = null;
    const l = ({ state: h }) => {
      const g = ph(e, location),
        w = n.value,
        T = t.value;
      let N = 0;
      if (h) {
        if (((n.value = g), (t.value = h), o && o === w)) {
          o = null;
          return;
        }
        N = T ? h.position - T.position : 0;
      } else r(g);
      s.forEach((C) => {
        C(n.value, w, {
          delta: N,
          type: qs.pop,
          direction: N ? (N > 0 ? Es.forward : Es.back) : Es.unknown,
        });
      });
    };
    function a() {
      o = n.value;
    }
    function u(h) {
      s.push(h);
      const g = () => {
        const w = s.indexOf(h);
        w > -1 && s.splice(w, 1);
      };
      return i.push(g), g;
    }
    function f() {
      const { history: h } = window;
      h.state && h.replaceState(kt({}, h.state, { scroll: co() }), "");
    }
    function d() {
      for (const h of i) h();
      (i = []),
        window.removeEventListener("popstate", l),
        window.removeEventListener("beforeunload", f);
    }
    return (
      window.addEventListener("popstate", l),
      window.addEventListener("beforeunload", f, { passive: !0 }),
      { pauseListeners: a, listen: u, destroy: d }
    );
  }
  function jc(e, t, n, r = !1, s = !1) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: s ? co() : null,
    };
  }
  function Km(e) {
    const { history: t, location: n } = window,
      r = { value: ph(e, n) },
      s = { value: t.state };
    s.value ||
      i(
        r.value,
        {
          back: null,
          current: r.value,
          forward: null,
          position: t.length - 1,
          replaced: !0,
          scroll: null,
        },
        !0,
      );
    function i(a, u, f) {
      const d = e.indexOf("#"),
        h =
          d > -1
            ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a
            : Hm() + e + a;
      try {
        t[f ? "replaceState" : "pushState"](u, "", h), (s.value = u);
      } catch (g) {
        console.error(g), n[f ? "replace" : "assign"](h);
      }
    }
    function o(a, u) {
      const f = kt({}, t.state, jc(s.value.back, a, s.value.forward, !0), u, {
        position: s.value.position,
      });
      i(a, f, !0), (r.value = a);
    }
    function l(a, u) {
      const f = kt({}, s.value, t.state, { forward: a, scroll: co() });
      i(f.current, f, !0);
      const d = kt({}, jc(r.value, a, null), { position: f.position + 1 }, u);
      i(a, d, !1), (r.value = a);
    }
    return { location: r, state: s, push: l, replace: o };
  }
  function Vm(e) {
    e = Pm(e);
    const t = Km(e),
      n = zm(e, t.state, t.location, t.replace);
    function r(i, o = !0) {
      o || n.pauseListeners(), history.go(i);
    }
    const s = kt(
      { location: "", base: e, go: r, createHref: jm.bind(null, e) },
      t,
      n,
    );
    return (
      Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value,
      }),
      Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value,
      }),
      s
    );
  }
  function Gm(e) {
    return typeof e == "string" || (e && typeof e == "object");
  }
  function gh(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const mh = Symbol("");
  var Dc;
  (function (e) {
    (e[(e.aborted = 4)] = "aborted"),
      (e[(e.cancelled = 8)] = "cancelled"),
      (e[(e.duplicated = 16)] = "duplicated");
  })(Dc || (Dc = {}));
  function $r(e, t) {
    return kt(new Error(), { type: e, [mh]: !0 }, t);
  }
  function hn(e, t) {
    return e instanceof Error && mh in e && (t == null || !!(e.type & t));
  }
  const $c = "[^/]+?",
    Wm = { sensitive: !1, strict: !1, start: !0, end: !0 },
    Zm = /[.+*?^${}()[\]/\\]/g;
  function Ym(e, t) {
    const n = kt({}, Wm, t),
      r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const u of e) {
      const f = u.length ? [] : [90];
      n.strict && !u.length && (s += "/");
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        let g = 40 + (n.sensitive ? 0.25 : 0);
        if (h.type === 0)
          d || (s += "/"), (s += h.value.replace(Zm, "\\$&")), (g += 40);
        else if (h.type === 1) {
          const { value: w, repeatable: T, optional: N, regexp: C } = h;
          i.push({ name: w, repeatable: T, optional: N });
          const M = C || $c;
          if (M !== $c) {
            g += 10;
            try {
              new RegExp(`(${M})`);
            } catch (Z) {
              throw new Error(
                `Invalid custom RegExp for param "${w}" (${M}): ` + Z.message,
              );
            }
          }
          let H = T ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
          d || (H = N && u.length < 2 ? `(?:/${H})` : "/" + H),
            N && (H += "?"),
            (s += H),
            (g += 20),
            N && (g += -8),
            T && (g += -20),
            M === ".*" && (g += -50);
        }
        f.push(g);
      }
      r.push(f);
    }
    if (n.strict && n.end) {
      const u = r.length - 1;
      r[u][r[u].length - 1] += 0.7000000000000001;
    }
    n.strict || (s += "/?"),
      n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const o = new RegExp(s, n.sensitive ? "" : "i");
    function l(u) {
      const f = u.match(o),
        d = {};
      if (!f) return null;
      for (let h = 1; h < f.length; h++) {
        const g = f[h] || "",
          w = i[h - 1];
        d[w.name] = g && w.repeatable ? g.split("/") : g;
      }
      return d;
    }
    function a(u) {
      let f = "",
        d = !1;
      for (const h of e) {
        (!d || !f.endsWith("/")) && (f += "/"), (d = !1);
        for (const g of h)
          if (g.type === 0) f += g.value;
          else if (g.type === 1) {
            const { value: w, repeatable: T, optional: N } = g,
              C = w in u ? u[w] : "";
            if (je(C) && !T)
              throw new Error(
                `Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`,
              );
            const M = je(C) ? C.join("/") : C;
            if (!M)
              if (N)
                h.length < 2 &&
                  (f.endsWith("/") ? (f = f.slice(0, -1)) : (d = !0));
              else throw new Error(`Missing required param "${w}"`);
            f += M;
          }
      }
      return f || "/";
    }
    return { re: o, score: r, keys: i, parse: l, stringify: a };
  }
  function Jm(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length
      ? e.length === 1 && e[0] === 80
        ? -1
        : 1
      : e.length > t.length
        ? t.length === 1 && t[0] === 80
          ? 1
          : -1
        : 0;
  }
  function bh(e, t) {
    let n = 0;
    const r = e.score,
      s = t.score;
    for (; n < r.length && n < s.length; ) {
      const i = Jm(r[n], s[n]);
      if (i) return i;
      n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
      if (Uc(r)) return 1;
      if (Uc(s)) return -1;
    }
    return s.length - r.length;
  }
  function Uc(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const Qm = { type: 0, value: "" },
    Xm = /[a-zA-Z0-9_]/;
  function t1(e) {
    if (!e) return [[]];
    if (e === "/") return [[Qm]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(g) {
      throw new Error(`ERR (${n})/"${u}": ${g}`);
    }
    let n = 0,
      r = n;
    const s = [];
    let i;
    function o() {
      i && s.push(i), (i = []);
    }
    let l = 0,
      a,
      u = "",
      f = "";
    function d() {
      u &&
        (n === 0
          ? i.push({ type: 0, value: u })
          : n === 1 || n === 2 || n === 3
            ? (i.length > 1 &&
                (a === "*" || a === "+") &&
                t(
                  `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
                ),
              i.push({
                type: 1,
                value: u,
                regexp: f,
                repeatable: a === "*" || a === "+",
                optional: a === "*" || a === "?",
              }))
            : t("Invalid state to consume buffer"),
        (u = ""));
    }
    function h() {
      u += a;
    }
    for (; l < e.length; ) {
      if (((a = e[l++]), a === "\\" && n !== 2)) {
        (r = n), (n = 4);
        continue;
      }
      switch (n) {
        case 0:
          a === "/" ? (u && d(), o()) : a === ":" ? (d(), (n = 1)) : h();
          break;
        case 4:
          h(), (n = r);
          break;
        case 1:
          a === "("
            ? (n = 2)
            : Xm.test(a)
              ? h()
              : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
          break;
        case 2:
          a === ")"
            ? f[f.length - 1] == "\\"
              ? (f = f.slice(0, -1) + a)
              : (n = 3)
            : (f += a);
          break;
        case 3:
          d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (f = "");
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return (
      n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), o(), s
    );
  }
  function e1(e, t, n) {
    const r = Ym(t1(e.path), n),
      s = kt(r, { record: e, parent: t, children: [], alias: [] });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
  }
  function n1(e, t) {
    const n = [],
      r = new Map();
    t = Kc({ strict: !1, end: !0, sensitive: !1 }, t);
    function s(d) {
      return r.get(d);
    }
    function i(d, h, g) {
      const w = !g,
        T = Hc(d);
      T.aliasOf = g && g.record;
      const N = Kc(t, d),
        C = [T];
      if ("alias" in d) {
        const Z = typeof d.alias == "string" ? [d.alias] : d.alias;
        for (const st of Z)
          C.push(
            Hc(
              kt({}, T, {
                components: g ? g.record.components : T.components,
                path: st,
                aliasOf: g ? g.record : T,
              }),
            ),
          );
      }
      let M, H;
      for (const Z of C) {
        const { path: st } = Z;
        if (h && st[0] !== "/") {
          const vt = h.record.path,
            lt = vt[vt.length - 1] === "/" ? "" : "/";
          Z.path = h.record.path + (st && lt + st);
        }
        if (
          ((M = e1(Z, h, N)),
          g
            ? g.alias.push(M)
            : ((H = H || M),
              H !== M && H.alias.push(M),
              w && d.name && !zc(M) && o(d.name)),
          yh(M) && a(M),
          T.children)
        ) {
          const vt = T.children;
          for (let lt = 0; lt < vt.length; lt++)
            i(vt[lt], M, g && g.children[lt]);
        }
        g = g || M;
      }
      return H
        ? () => {
            o(H);
          }
        : xs;
    }
    function o(d) {
      if (gh(d)) {
        const h = r.get(d);
        h &&
          (r.delete(d),
          n.splice(n.indexOf(h), 1),
          h.children.forEach(o),
          h.alias.forEach(o));
      } else {
        const h = n.indexOf(d);
        h > -1 &&
          (n.splice(h, 1),
          d.record.name && r.delete(d.record.name),
          d.children.forEach(o),
          d.alias.forEach(o));
      }
    }
    function l() {
      return n;
    }
    function a(d) {
      const h = i1(d, n);
      n.splice(h, 0, d), d.record.name && !zc(d) && r.set(d.record.name, d);
    }
    function u(d, h) {
      let g,
        w = {},
        T,
        N;
      if ("name" in d && d.name) {
        if (((g = r.get(d.name)), !g)) throw $r(1, { location: d });
        (N = g.record.name),
          (w = kt(
            Fc(
              h.params,
              g.keys
                .filter((H) => !H.optional)
                .concat(g.parent ? g.parent.keys.filter((H) => H.optional) : [])
                .map((H) => H.name),
            ),
            d.params &&
              Fc(
                d.params,
                g.keys.map((H) => H.name),
              ),
          )),
          (T = g.stringify(w));
      } else if (d.path != null)
        (T = d.path),
          (g = n.find((H) => H.re.test(T))),
          g && ((w = g.parse(T)), (N = g.record.name));
      else {
        if (
          ((g = h.name ? r.get(h.name) : n.find((H) => H.re.test(h.path))), !g)
        )
          throw $r(1, { location: d, currentLocation: h });
        (N = g.record.name),
          (w = kt({}, h.params, d.params)),
          (T = g.stringify(w));
      }
      const C = [];
      let M = g;
      for (; M; ) C.unshift(M.record), (M = M.parent);
      return { name: N, path: T, params: w, matched: C, meta: s1(C) };
    }
    e.forEach((d) => i(d));
    function f() {
      (n.length = 0), r.clear();
    }
    return {
      addRoute: i,
      resolve: u,
      removeRoute: o,
      clearRoutes: f,
      getRoutes: l,
      getRecordMatcher: s,
    };
  }
  function Fc(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function Hc(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: r1(e),
      children: e.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components:
        "components" in e
          ? e.components || null
          : e.component && { default: e.component },
    };
    return Object.defineProperty(t, "mods", { value: {} }), t;
  }
  function r1(e) {
    const t = {},
      n = e.props || !1;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function zc(e) {
    for (; e; ) {
      if (e.record.aliasOf) return !0;
      e = e.parent;
    }
    return !1;
  }
  function s1(e) {
    return e.reduce((t, n) => kt(t, n.meta), {});
  }
  function Kc(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function i1(e, t) {
    let n = 0,
      r = t.length;
    for (; n !== r; ) {
      const i = (n + r) >> 1;
      bh(e, t[i]) < 0 ? (r = i) : (n = i + 1);
    }
    const s = o1(e);
    return s && (r = t.lastIndexOf(s, r - 1)), r;
  }
  function o1(e) {
    let t = e;
    for (; (t = t.parent); ) if (yh(t) && bh(e, t) === 0) return t;
  }
  function yh({ record: e }) {
    return !!(
      e.name ||
      (e.components && Object.keys(e.components).length) ||
      e.redirect
    );
  }
  function l1(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
      const i = r[s].replace(ch, " "),
        o = i.indexOf("="),
        l = Is(o < 0 ? i : i.slice(0, o)),
        a = o < 0 ? null : Is(i.slice(o + 1));
      if (l in t) {
        let u = t[l];
        je(u) || (u = t[l] = [u]), u.push(a);
      } else t[l] = a;
    }
    return t;
  }
  function Vc(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (((n = Nm(n)), r == null)) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (je(r) ? r.map((i) => i && $l(i)) : [r && $l(r)]).forEach((i) => {
        i !== void 0 &&
          ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
      });
    }
    return t;
  }
  function a1(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 &&
        (t[n] = je(r)
          ? r.map((s) => (s == null ? null : "" + s))
          : r == null
            ? r
            : "" + r);
    }
    return t;
  }
  const c1 = Symbol(""),
    Gc = Symbol(""),
    Ra = Symbol(""),
    vh = Symbol(""),
    Fl = Symbol("");
  function as() {
    let e = [];
    function t(r) {
      return (
        e.push(r),
        () => {
          const s = e.indexOf(r);
          s > -1 && e.splice(s, 1);
        }
      );
    }
    function n() {
      e = [];
    }
    return { add: t, list: () => e.slice(), reset: n };
  }
  function Rn(e, t, n, r, s, i = (o) => o()) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () =>
      new Promise((l, a) => {
        const u = (h) => {
            h === !1
              ? a($r(4, { from: n, to: t }))
              : h instanceof Error
                ? a(h)
                : Gm(h)
                  ? a($r(2, { from: t, to: h }))
                  : (o &&
                      r.enterCallbacks[s] === o &&
                      typeof h == "function" &&
                      o.push(h),
                    l());
          },
          f = i(() => e.call(r && r.instances[s], t, n, u));
        let d = Promise.resolve(f);
        e.length < 3 && (d = d.then(u)), d.catch((h) => a(h));
      });
  }
  function pl(e, t, n, r, s = (i) => i()) {
    const i = [];
    for (const o of e)
      for (const l in o.components) {
        let a = o.components[l];
        if (!(t !== "beforeRouteEnter" && !o.instances[l]))
          if (lh(a)) {
            const f = (a.__vccOpts || a)[t];
            f && i.push(Rn(f, n, r, o, l, s));
          } else {
            let u = a();
            i.push(() =>
              u.then((f) => {
                if (!f)
                  throw new Error(
                    `Couldn't resolve component "${l}" at "${o.path}"`,
                  );
                const d = mm(f) ? f.default : f;
                (o.mods[l] = f), (o.components[l] = d);
                const g = (d.__vccOpts || d)[t];
                return g && Rn(g, n, r, o, l, s)();
              }),
            );
          }
      }
    return i;
  }
  function Wc(e) {
    const t = vn(Ra),
      n = vn(vh),
      r = qe(() => {
        const a = kr(e.to);
        return t.resolve(a);
      }),
      s = qe(() => {
        const { matched: a } = r.value,
          { length: u } = a,
          f = a[u - 1],
          d = n.matched;
        if (!f || !d.length) return -1;
        const h = d.findIndex(Dr.bind(null, f));
        if (h > -1) return h;
        const g = Zc(a[u - 2]);
        return u > 1 && Zc(f) === g && d[d.length - 1].path !== g
          ? d.findIndex(Dr.bind(null, a[u - 2]))
          : h;
      }),
      i = qe(() => s.value > -1 && p1(n.params, r.value.params)),
      o = qe(
        () =>
          s.value > -1 &&
          s.value === n.matched.length - 1 &&
          dh(n.params, r.value.params),
      );
    function l(a = {}) {
      if (d1(a)) {
        const u = t[kr(e.replace) ? "replace" : "push"](kr(e.to)).catch(xs);
        return (
          e.viewTransition &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            document.startViewTransition(() => u),
          u
        );
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: qe(() => r.value.href),
      isActive: i,
      isExactActive: o,
      navigate: l,
    };
  }
  function u1(e) {
    return e.length === 1 ? e[0] : e;
  }
  const f1 = If({
      name: "RouterLink",
      compatConfig: { MODE: 3 },
      props: {
        to: { type: [String, Object], required: !0 },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: { type: String, default: "page" },
      },
      useLink: Wc,
      setup(e, { slots: t }) {
        const n = ro(Wc(e)),
          { options: r } = vn(Ra),
          s = qe(() => ({
            [Yc(e.activeClass, r.linkActiveClass, "router-link-active")]:
              n.isActive,
            [Yc(
              e.exactActiveClass,
              r.linkExactActiveClass,
              "router-link-exact-active",
            )]: n.isExactActive,
          }));
        return () => {
          const i = t.default && u1(t.default(n));
          return e.custom
            ? i
            : ih(
                "a",
                {
                  "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                  href: n.href,
                  onClick: n.navigate,
                  class: s.value,
                },
                i,
              );
        };
      },
    }),
    h1 = f1;
  function d1(e) {
    if (
      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
      !e.defaultPrevented &&
      !(e.button !== void 0 && e.button !== 0)
    ) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), !0;
    }
  }
  function p1(e, t) {
    for (const n in t) {
      const r = t[n],
        s = e[n];
      if (typeof r == "string") {
        if (r !== s) return !1;
      } else if (
        !je(s) ||
        s.length !== r.length ||
        r.some((i, o) => i !== s[o])
      )
        return !1;
    }
    return !0;
  }
  function Zc(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
  }
  const Yc = (e, t, n) => e ?? t ?? n,
    g1 = If({
      name: "RouterView",
      inheritAttrs: !1,
      props: { name: { type: String, default: "default" }, route: Object },
      compatConfig: { MODE: 3 },
      setup(e, { attrs: t, slots: n }) {
        const r = vn(Fl),
          s = qe(() => e.route || r.value),
          i = vn(Gc, 0),
          o = qe(() => {
            let u = kr(i);
            const { matched: f } = s.value;
            let d;
            for (; (d = f[u]) && !d.components; ) u++;
            return u;
          }),
          l = qe(() => s.value.matched[o.value]);
        Si(
          Gc,
          qe(() => o.value + 1),
        ),
          Si(c1, l),
          Si(Fl, s);
        const a = dp();
        return (
          Ni(
            () => [a.value, l.value, e.name],
            ([u, f, d], [h, g, w]) => {
              f &&
                ((f.instances[d] = u),
                g &&
                  g !== f &&
                  u &&
                  u === h &&
                  (f.leaveGuards.size || (f.leaveGuards = g.leaveGuards),
                  f.updateGuards.size || (f.updateGuards = g.updateGuards))),
                u &&
                  f &&
                  (!g || !Dr(f, g) || !h) &&
                  (f.enterCallbacks[d] || []).forEach((T) => T(u));
            },
            { flush: "post" },
          ),
          () => {
            const u = s.value,
              f = e.name,
              d = l.value,
              h = d && d.components[f];
            if (!h) return Jc(n.default, { Component: h, route: u });
            const g = d.props[f],
              w = g
                ? g === !0
                  ? u.params
                  : typeof g == "function"
                    ? g(u)
                    : g
                : null,
              N = ih(
                h,
                kt({}, w, t, {
                  onVnodeUnmounted: (C) => {
                    C.component.isUnmounted && (d.instances[f] = null);
                  },
                  ref: a,
                }),
              );
            return Jc(n.default, { Component: N, route: u }) || N;
          }
        );
      },
    });
  function Jc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const m1 = g1;
  function b1(e) {
    const t = n1(e.routes, e),
      n = e.parseQuery || l1,
      r = e.stringifyQuery || Vc,
      s = e.history,
      i = as(),
      o = as(),
      l = as(),
      a = pp(Cn);
    let u = Cn;
    _r &&
      e.scrollBehavior &&
      "scrollRestoration" in history &&
      (history.scrollRestoration = "manual");
    const f = hl.bind(null, (L) => "" + L),
      d = hl.bind(null, Om),
      h = hl.bind(null, Is);
    function g(L, P) {
      let k, $;
      return (
        gh(L) ? ((k = t.getRecordMatcher(L)), ($ = P)) : ($ = L),
        t.addRoute($, k)
      );
    }
    function w(L) {
      const P = t.getRecordMatcher(L);
      P && t.removeRoute(P);
    }
    function T() {
      return t.getRoutes().map((L) => L.record);
    }
    function N(L) {
      return !!t.getRecordMatcher(L);
    }
    function C(L, P) {
      if (((P = kt({}, P || a.value)), typeof L == "string")) {
        const y = dl(n, L, P.path),
          x = t.resolve({ path: y.path }, P),
          q = s.createHref(y.fullPath);
        return kt(y, x, {
          params: h(x.params),
          hash: Is(y.hash),
          redirectedFrom: void 0,
          href: q,
        });
      }
      let k;
      if (L.path != null) k = kt({}, L, { path: dl(n, L.path, P.path).path });
      else {
        const y = kt({}, L.params);
        for (const x in y) y[x] == null && delete y[x];
        (k = kt({}, L, { params: d(y) })), (P.params = d(P.params));
      }
      const $ = t.resolve(k, P),
        nt = L.hash || "";
      $.params = f(h($.params));
      const ot = Rm(r, kt({}, L, { hash: Sm(nt), path: $.path })),
        m = s.createHref(ot);
      return kt(
        {
          fullPath: ot,
          hash: nt,
          query: r === Vc ? a1(L.query) : L.query || {},
        },
        $,
        { redirectedFrom: void 0, href: m },
      );
    }
    function M(L) {
      return typeof L == "string" ? dl(n, L, a.value.path) : kt({}, L);
    }
    function H(L, P) {
      if (u !== L) return $r(8, { from: P, to: L });
    }
    function Z(L) {
      return lt(L);
    }
    function st(L) {
      return Z(kt(M(L), { replace: !0 }));
    }
    function vt(L) {
      const P = L.matched[L.matched.length - 1];
      if (P && P.redirect) {
        const { redirect: k } = P;
        let $ = typeof k == "function" ? k(L) : k;
        return (
          typeof $ == "string" &&
            (($ =
              $.includes("?") || $.includes("#") ? ($ = M($)) : { path: $ }),
            ($.params = {})),
          kt(
            {
              query: L.query,
              hash: L.hash,
              params: $.path != null ? {} : L.params,
            },
            $,
          )
        );
      }
    }
    function lt(L, P) {
      const k = (u = C(L)),
        $ = a.value,
        nt = L.state,
        ot = L.force,
        m = L.replace === !0,
        y = vt(k);
      if (y)
        return lt(
          kt(M(y), {
            state: typeof y == "object" ? kt({}, nt, y.state) : nt,
            force: ot,
            replace: m,
          }),
          P || k,
        );
      const x = k;
      x.redirectedFrom = P;
      let q;
      return (
        !ot &&
          Im(r, $, k) &&
          ((q = $r(16, { to: x, from: $ })), ct($, $, !0, !1)),
        (q ? Promise.resolve(q) : V(x, $))
          .catch((I) => (hn(I) ? (hn(I, 2) ? I : Q(I)) : z(I, x, $)))
          .then((I) => {
            if (I) {
              if (hn(I, 2))
                return lt(
                  kt({ replace: m }, M(I.to), {
                    state:
                      typeof I.to == "object" ? kt({}, nt, I.to.state) : nt,
                    force: ot,
                  }),
                  P || x,
                );
            } else I = O(x, $, !0, m, nt);
            return b(x, $, I), I;
          })
      );
    }
    function A(L, P) {
      const k = H(L, P);
      return k ? Promise.reject(k) : Promise.resolve();
    }
    function E(L) {
      const P = pt.values().next().value;
      return P && typeof P.runWithContext == "function"
        ? P.runWithContext(L)
        : L();
    }
    function V(L, P) {
      let k;
      const [$, nt, ot] = y1(L, P);
      k = pl($.reverse(), "beforeRouteLeave", L, P);
      for (const y of $)
        y.leaveGuards.forEach((x) => {
          k.push(Rn(x, L, P));
        });
      const m = A.bind(null, L, P);
      return (
        k.push(m),
        mt(k)
          .then(() => {
            k = [];
            for (const y of i.list()) k.push(Rn(y, L, P));
            return k.push(m), mt(k);
          })
          .then(() => {
            k = pl(nt, "beforeRouteUpdate", L, P);
            for (const y of nt)
              y.updateGuards.forEach((x) => {
                k.push(Rn(x, L, P));
              });
            return k.push(m), mt(k);
          })
          .then(() => {
            k = [];
            for (const y of ot)
              if (y.beforeEnter)
                if (je(y.beforeEnter))
                  for (const x of y.beforeEnter) k.push(Rn(x, L, P));
                else k.push(Rn(y.beforeEnter, L, P));
            return k.push(m), mt(k);
          })
          .then(
            () => (
              L.matched.forEach((y) => (y.enterCallbacks = {})),
              (k = pl(ot, "beforeRouteEnter", L, P, E)),
              k.push(m),
              mt(k)
            ),
          )
          .then(() => {
            k = [];
            for (const y of o.list()) k.push(Rn(y, L, P));
            return k.push(m), mt(k);
          })
          .catch((y) => (hn(y, 8) ? y : Promise.reject(y)))
      );
    }
    function b(L, P, k) {
      l.list().forEach(($) => E(() => $(L, P, k)));
    }
    function O(L, P, k, $, nt) {
      const ot = H(L, P);
      if (ot) return ot;
      const m = P === Cn,
        y = _r ? history.state : {};
      k &&
        ($ || m
          ? s.replace(L.fullPath, kt({ scroll: m && y && y.scroll }, nt))
          : s.push(L.fullPath, nt)),
        (a.value = L),
        ct(L, P, k, m),
        Q();
    }
    let _;
    function F() {
      _ ||
        (_ = s.listen((L, P, k) => {
          if (!rt.listening) return;
          const $ = C(L),
            nt = vt($);
          if (nt) {
            lt(kt(nt, { replace: !0, force: !0 }), $).catch(xs);
            return;
          }
          u = $;
          const ot = a.value;
          _r && Um(Bc(ot.fullPath, k.delta), co()),
            V($, ot)
              .catch((m) =>
                hn(m, 12)
                  ? m
                  : hn(m, 2)
                    ? (lt(kt(M(m.to), { force: !0 }), $)
                        .then((y) => {
                          hn(y, 20) &&
                            !k.delta &&
                            k.type === qs.pop &&
                            s.go(-1, !1);
                        })
                        .catch(xs),
                      Promise.reject())
                    : (k.delta && s.go(-k.delta, !1), z(m, $, ot)),
              )
              .then((m) => {
                (m = m || O($, ot, !1)),
                  m &&
                    (k.delta && !hn(m, 8)
                      ? s.go(-k.delta, !1)
                      : k.type === qs.pop && hn(m, 20) && s.go(-1, !1)),
                  b($, ot, m);
              })
              .catch(xs);
        }));
    }
    let W = as(),
      R = as(),
      S;
    function z(L, P, k) {
      Q(L);
      const $ = R.list();
      return (
        $.length ? $.forEach((nt) => nt(L, P, k)) : console.error(L),
        Promise.reject(L)
      );
    }
    function K() {
      return S && a.value !== Cn
        ? Promise.resolve()
        : new Promise((L, P) => {
            W.add([L, P]);
          });
    }
    function Q(L) {
      return (
        S ||
          ((S = !L),
          F(),
          W.list().forEach(([P, k]) => (L ? k(L) : P())),
          W.reset()),
        L
      );
    }
    function ct(L, P, k, $) {
      const { scrollBehavior: nt } = e;
      if (!_r || !nt) return Promise.resolve();
      const ot =
        (!k && Fm(Bc(L.fullPath, 0))) ||
        (($ || !k) && history.state && history.state.scroll) ||
        null;
      return Aa()
        .then(() => nt(L, P, ot))
        .then((m) => m && $m(m))
        .catch((m) => z(m, L, P));
    }
    const D = (L) => s.go(L);
    let ut;
    const pt = new Set(),
      rt = {
        currentRoute: a,
        listening: !0,
        addRoute: g,
        removeRoute: w,
        clearRoutes: t.clearRoutes,
        hasRoute: N,
        getRoutes: T,
        resolve: C,
        options: e,
        push: Z,
        replace: st,
        go: D,
        back: () => D(-1),
        forward: () => D(1),
        beforeEach: i.add,
        beforeResolve: o.add,
        afterEach: l.add,
        onError: R.add,
        isReady: K,
        install(L) {
          const P = this;
          L.component("RouterLink", h1),
            L.component("RouterView", m1),
            (L.config.globalProperties.$router = P),
            Object.defineProperty(L.config.globalProperties, "$route", {
              enumerable: !0,
              get: () => kr(a),
            }),
            _r &&
              !ut &&
              a.value === Cn &&
              ((ut = !0), Z(s.location).catch((nt) => {}));
          const k = {};
          for (const nt in Cn)
            Object.defineProperty(k, nt, {
              get: () => a.value[nt],
              enumerable: !0,
            });
          L.provide(Ra, P), L.provide(vh, Af(k)), L.provide(Fl, a);
          const $ = L.unmount;
          pt.add(L),
            (L.unmount = function () {
              pt.delete(L),
                pt.size < 1 &&
                  ((u = Cn),
                  _ && _(),
                  (_ = null),
                  (a.value = Cn),
                  (ut = !1),
                  (S = !1)),
                $();
            });
        },
      };
    function mt(L) {
      return L.reduce((P, k) => P.then(() => E(k)), Promise.resolve());
    }
    return rt;
  }
  function y1(e, t) {
    const n = [],
      r = [],
      s = [],
      i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
      const l = t.matched[o];
      l && (e.matched.find((u) => Dr(u, l)) ? r.push(l) : n.push(l));
      const a = e.matched[o];
      a && (t.matched.find((u) => Dr(u, a)) || s.push(a));
    }
    return [n, r, s];
  }
  var In =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function Ia(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Ri = { exports: {} };
  /* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/ var v1 = Ri.exports,
    Qc;
  function w1() {
    return (
      Qc ||
        ((Qc = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r();
          })(v1, function n() {
            var r =
                typeof self < "u"
                  ? self
                  : typeof window < "u"
                    ? window
                    : r !== void 0
                      ? r
                      : {},
              s = !r.document && !!r.postMessage,
              i = r.IS_PAPA_WORKER || !1,
              o = {},
              l = 0,
              a = {
                parse: function (A, E) {
                  var V = (E = E || {}).dynamicTyping || !1;
                  if (
                    (lt(V) && ((E.dynamicTypingFunction = V), (V = {})),
                    (E.dynamicTyping = V),
                    (E.transform = !!lt(E.transform) && E.transform),
                    E.worker && a.WORKERS_SUPPORTED)
                  ) {
                    var b = (function () {
                      if (!a.WORKERS_SUPPORTED) return !1;
                      var _ =
                          ((W = r.URL || r.webkitURL || null),
                          (R = n.toString()),
                          a.BLOB_URL ||
                            (a.BLOB_URL = W.createObjectURL(
                              new Blob(
                                [
                                  "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                  "(",
                                  R,
                                  ")();",
                                ],
                                { type: "text/javascript" },
                              ),
                            ))),
                        F = new r.Worker(_),
                        W,
                        R;
                      return (F.onmessage = M), (F.id = l++), (o[F.id] = F);
                    })();
                    return (
                      (b.userStep = E.step),
                      (b.userChunk = E.chunk),
                      (b.userComplete = E.complete),
                      (b.userError = E.error),
                      (E.step = lt(E.step)),
                      (E.chunk = lt(E.chunk)),
                      (E.complete = lt(E.complete)),
                      (E.error = lt(E.error)),
                      delete E.worker,
                      void b.postMessage({
                        input: A,
                        config: E,
                        workerId: b.id,
                      })
                    );
                  }
                  var O = null;
                  return (
                    a.NODE_STREAM_INPUT,
                    typeof A == "string"
                      ? ((A = (function (_) {
                          return _.charCodeAt(0) === 65279 ? _.slice(1) : _;
                        })(A)),
                        (O = E.download ? new d(E) : new g(E)))
                      : A.readable === !0 && lt(A.read) && lt(A.on)
                        ? (O = new w(E))
                        : ((r.File && A instanceof File) ||
                            A instanceof Object) &&
                          (O = new h(E)),
                    O.stream(A)
                  );
                },
                unparse: function (A, E) {
                  var V = !1,
                    b = !0,
                    O = ",",
                    _ = `\r
`,
                    F = '"',
                    W = F + F,
                    R = !1,
                    S = null,
                    z = !1;
                  (function () {
                    if (typeof E == "object") {
                      if (
                        (typeof E.delimiter != "string" ||
                          a.BAD_DELIMITERS.filter(function (D) {
                            return E.delimiter.indexOf(D) !== -1;
                          }).length ||
                          (O = E.delimiter),
                        (typeof E.quotes == "boolean" ||
                          typeof E.quotes == "function" ||
                          Array.isArray(E.quotes)) &&
                          (V = E.quotes),
                        (typeof E.skipEmptyLines != "boolean" &&
                          typeof E.skipEmptyLines != "string") ||
                          (R = E.skipEmptyLines),
                        typeof E.newline == "string" && (_ = E.newline),
                        typeof E.quoteChar == "string" && (F = E.quoteChar),
                        typeof E.header == "boolean" && (b = E.header),
                        Array.isArray(E.columns))
                      ) {
                        if (E.columns.length === 0)
                          throw new Error("Option columns is empty");
                        S = E.columns;
                      }
                      E.escapeChar !== void 0 && (W = E.escapeChar + F),
                        (typeof E.escapeFormulae == "boolean" ||
                          E.escapeFormulae instanceof RegExp) &&
                          (z =
                            E.escapeFormulae instanceof RegExp
                              ? E.escapeFormulae
                              : /^[=+\-@\t\r].*$/);
                    }
                  })();
                  var K = new RegExp(N(F), "g");
                  if (
                    (typeof A == "string" && (A = JSON.parse(A)),
                    Array.isArray(A))
                  ) {
                    if (!A.length || Array.isArray(A[0])) return Q(null, A, R);
                    if (typeof A[0] == "object")
                      return Q(S || Object.keys(A[0]), A, R);
                  } else if (typeof A == "object")
                    return (
                      typeof A.data == "string" &&
                        (A.data = JSON.parse(A.data)),
                      Array.isArray(A.data) &&
                        (A.fields ||
                          (A.fields = (A.meta && A.meta.fields) || S),
                        A.fields ||
                          (A.fields = Array.isArray(A.data[0])
                            ? A.fields
                            : typeof A.data[0] == "object"
                              ? Object.keys(A.data[0])
                              : []),
                        Array.isArray(A.data[0]) ||
                          typeof A.data[0] == "object" ||
                          (A.data = [A.data])),
                      Q(A.fields || [], A.data || [], R)
                    );
                  throw new Error("Unable to serialize unrecognized input");
                  function Q(D, ut, pt) {
                    var rt = "";
                    typeof D == "string" && (D = JSON.parse(D)),
                      typeof ut == "string" && (ut = JSON.parse(ut));
                    var mt = Array.isArray(D) && 0 < D.length,
                      L = !Array.isArray(ut[0]);
                    if (mt && b) {
                      for (var P = 0; P < D.length; P++)
                        0 < P && (rt += O), (rt += ct(D[P], P));
                      0 < ut.length && (rt += _);
                    }
                    for (var k = 0; k < ut.length; k++) {
                      var $ = mt ? D.length : ut[k].length,
                        nt = !1,
                        ot = mt
                          ? Object.keys(ut[k]).length === 0
                          : ut[k].length === 0;
                      if (
                        (pt &&
                          !mt &&
                          (nt =
                            pt === "greedy"
                              ? ut[k].join("").trim() === ""
                              : ut[k].length === 1 && ut[k][0].length === 0),
                        pt === "greedy" && mt)
                      ) {
                        for (var m = [], y = 0; y < $; y++) {
                          var x = L ? D[y] : y;
                          m.push(ut[k][x]);
                        }
                        nt = m.join("").trim() === "";
                      }
                      if (!nt) {
                        for (var q = 0; q < $; q++) {
                          0 < q && !ot && (rt += O);
                          var I = mt && L ? D[q] : q;
                          rt += ct(ut[k][I], q);
                        }
                        k < ut.length - 1 &&
                          (!pt || (0 < $ && !ot)) &&
                          (rt += _);
                      }
                    }
                    return rt;
                  }
                  function ct(D, ut) {
                    if (D == null) return "";
                    if (D.constructor === Date)
                      return JSON.stringify(D).slice(1, 25);
                    var pt = !1;
                    z &&
                      typeof D == "string" &&
                      z.test(D) &&
                      ((D = "'" + D), (pt = !0));
                    var rt = D.toString().replace(K, W);
                    return (pt =
                      pt ||
                      V === !0 ||
                      (typeof V == "function" && V(D, ut)) ||
                      (Array.isArray(V) && V[ut]) ||
                      (function (mt, L) {
                        for (var P = 0; P < L.length; P++)
                          if (-1 < mt.indexOf(L[P])) return !0;
                        return !1;
                      })(rt, a.BAD_DELIMITERS) ||
                      -1 < rt.indexOf(O) ||
                      rt.charAt(0) === " " ||
                      rt.charAt(rt.length - 1) === " ")
                      ? F + rt + F
                      : rt;
                  }
                },
              };
            if (
              ((a.RECORD_SEP = ""),
              (a.UNIT_SEP = ""),
              (a.BYTE_ORDER_MARK = "\uFEFF"),
              (a.BAD_DELIMITERS = [
                "\r",
                `
`,
                '"',
                a.BYTE_ORDER_MARK,
              ]),
              (a.WORKERS_SUPPORTED = !s && !!r.Worker),
              (a.NODE_STREAM_INPUT = 1),
              (a.LocalChunkSize = 10485760),
              (a.RemoteChunkSize = 5242880),
              (a.DefaultDelimiter = ","),
              (a.Parser = C),
              (a.ParserHandle = T),
              (a.NetworkStreamer = d),
              (a.FileStreamer = h),
              (a.StringStreamer = g),
              (a.ReadableStreamStreamer = w),
              r.jQuery)
            ) {
              var u = r.jQuery;
              u.fn.parse = function (A) {
                var E = A.config || {},
                  V = [];
                return (
                  this.each(function (_) {
                    if (
                      !(
                        u(this).prop("tagName").toUpperCase() === "INPUT" &&
                        u(this).attr("type").toLowerCase() === "file" &&
                        r.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var F = 0; F < this.files.length; F++)
                      V.push({
                        file: this.files[F],
                        inputElem: this,
                        instanceConfig: u.extend({}, E),
                      });
                  }),
                  b(),
                  this
                );
                function b() {
                  if (V.length !== 0) {
                    var _,
                      F,
                      W,
                      R,
                      S = V[0];
                    if (lt(A.before)) {
                      var z = A.before(S.file, S.inputElem);
                      if (typeof z == "object") {
                        if (z.action === "abort")
                          return (
                            (_ = "AbortError"),
                            (F = S.file),
                            (W = S.inputElem),
                            (R = z.reason),
                            void (lt(A.error) && A.error({ name: _ }, F, W, R))
                          );
                        if (z.action === "skip") return void O();
                        typeof z.config == "object" &&
                          (S.instanceConfig = u.extend(
                            S.instanceConfig,
                            z.config,
                          ));
                      } else if (z === "skip") return void O();
                    }
                    var K = S.instanceConfig.complete;
                    (S.instanceConfig.complete = function (Q) {
                      lt(K) && K(Q, S.file, S.inputElem), O();
                    }),
                      a.parse(S.file, S.instanceConfig);
                  } else lt(A.complete) && A.complete();
                }
                function O() {
                  V.splice(0, 1), b();
                }
              };
            }
            function f(A) {
              (this._handle = null),
                (this._finished = !1),
                (this._completed = !1),
                (this._halted = !1),
                (this._input = null),
                (this._baseIndex = 0),
                (this._partialLine = ""),
                (this._rowCount = 0),
                (this._start = 0),
                (this._nextChunk = null),
                (this.isFirstChunk = !0),
                (this._completeResults = { data: [], errors: [], meta: {} }),
                function (E) {
                  var V = st(E);
                  (V.chunkSize = parseInt(V.chunkSize)),
                    E.step || E.chunk || (V.chunkSize = null),
                    (this._handle = new T(V)),
                    ((this._handle.streamer = this)._config = V);
                }.call(this, A),
                (this.parseChunk = function (E, V) {
                  if (this.isFirstChunk && lt(this._config.beforeFirstChunk)) {
                    var b = this._config.beforeFirstChunk(E);
                    b !== void 0 && (E = b);
                  }
                  (this.isFirstChunk = !1), (this._halted = !1);
                  var O = this._partialLine + E;
                  this._partialLine = "";
                  var _ = this._handle.parse(
                    O,
                    this._baseIndex,
                    !this._finished,
                  );
                  if (!this._handle.paused() && !this._handle.aborted()) {
                    var F = _.meta.cursor;
                    this._finished ||
                      ((this._partialLine = O.substring(F - this._baseIndex)),
                      (this._baseIndex = F)),
                      _ && _.data && (this._rowCount += _.data.length);
                    var W =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview);
                    if (i)
                      r.postMessage({
                        results: _,
                        workerId: a.WORKER_ID,
                        finished: W,
                      });
                    else if (lt(this._config.chunk) && !V) {
                      if (
                        (this._config.chunk(_, this._handle),
                        this._handle.paused() || this._handle.aborted())
                      )
                        return void (this._halted = !0);
                      (_ = void 0), (this._completeResults = void 0);
                    }
                    return (
                      this._config.step ||
                        this._config.chunk ||
                        ((this._completeResults.data =
                          this._completeResults.data.concat(_.data)),
                        (this._completeResults.errors =
                          this._completeResults.errors.concat(_.errors)),
                        (this._completeResults.meta = _.meta)),
                      this._completed ||
                        !W ||
                        !lt(this._config.complete) ||
                        (_ && _.meta.aborted) ||
                        (this._config.complete(
                          this._completeResults,
                          this._input,
                        ),
                        (this._completed = !0)),
                      W || (_ && _.meta.paused) || this._nextChunk(),
                      _
                    );
                  }
                  this._halted = !0;
                }),
                (this._sendError = function (E) {
                  lt(this._config.error)
                    ? this._config.error(E)
                    : i &&
                      this._config.error &&
                      r.postMessage({
                        workerId: a.WORKER_ID,
                        error: E,
                        finished: !1,
                      });
                });
            }
            function d(A) {
              var E;
              (A = A || {}).chunkSize || (A.chunkSize = a.RemoteChunkSize),
                f.call(this, A),
                (this._nextChunk = s
                  ? function () {
                      this._readChunk(), this._chunkLoaded();
                    }
                  : function () {
                      this._readChunk();
                    }),
                (this.stream = function (V) {
                  (this._input = V), this._nextChunk();
                }),
                (this._readChunk = function () {
                  if (this._finished) this._chunkLoaded();
                  else {
                    if (
                      ((E = new XMLHttpRequest()),
                      this._config.withCredentials &&
                        (E.withCredentials = this._config.withCredentials),
                      s ||
                        ((E.onload = vt(this._chunkLoaded, this)),
                        (E.onerror = vt(this._chunkError, this))),
                      E.open(
                        this._config.downloadRequestBody ? "POST" : "GET",
                        this._input,
                        !s,
                      ),
                      this._config.downloadRequestHeaders)
                    ) {
                      var V = this._config.downloadRequestHeaders;
                      for (var b in V) E.setRequestHeader(b, V[b]);
                    }
                    if (this._config.chunkSize) {
                      var O = this._start + this._config.chunkSize - 1;
                      E.setRequestHeader(
                        "Range",
                        "bytes=" + this._start + "-" + O,
                      );
                    }
                    try {
                      E.send(this._config.downloadRequestBody);
                    } catch (_) {
                      this._chunkError(_.message);
                    }
                    s && E.status === 0 && this._chunkError();
                  }
                }),
                (this._chunkLoaded = function () {
                  E.readyState === 4 &&
                    (E.status < 200 || 400 <= E.status
                      ? this._chunkError()
                      : ((this._start += this._config.chunkSize
                          ? this._config.chunkSize
                          : E.responseText.length),
                        (this._finished =
                          !this._config.chunkSize ||
                          this._start >=
                            (function (V) {
                              var b = V.getResponseHeader("Content-Range");
                              return b === null
                                ? -1
                                : parseInt(b.substring(b.lastIndexOf("/") + 1));
                            })(E)),
                        this.parseChunk(E.responseText)));
                }),
                (this._chunkError = function (V) {
                  var b = E.statusText || V;
                  this._sendError(new Error(b));
                });
            }
            function h(A) {
              var E, V;
              (A = A || {}).chunkSize || (A.chunkSize = a.LocalChunkSize),
                f.call(this, A);
              var b = typeof FileReader < "u";
              (this.stream = function (O) {
                (this._input = O),
                  (V = O.slice || O.webkitSlice || O.mozSlice),
                  b
                    ? (((E = new FileReader()).onload = vt(
                        this._chunkLoaded,
                        this,
                      )),
                      (E.onerror = vt(this._chunkError, this)))
                    : (E = new FileReaderSync()),
                  this._nextChunk();
              }),
                (this._nextChunk = function () {
                  this._finished ||
                    (this._config.preview &&
                      !(this._rowCount < this._config.preview)) ||
                    this._readChunk();
                }),
                (this._readChunk = function () {
                  var O = this._input;
                  if (this._config.chunkSize) {
                    var _ = Math.min(
                      this._start + this._config.chunkSize,
                      this._input.size,
                    );
                    O = V.call(O, this._start, _);
                  }
                  var F = E.readAsText(O, this._config.encoding);
                  b || this._chunkLoaded({ target: { result: F } });
                }),
                (this._chunkLoaded = function (O) {
                  (this._start += this._config.chunkSize),
                    (this._finished =
                      !this._config.chunkSize ||
                      this._start >= this._input.size),
                    this.parseChunk(O.target.result);
                }),
                (this._chunkError = function () {
                  this._sendError(E.error);
                });
            }
            function g(A) {
              var E;
              f.call(this, (A = A || {})),
                (this.stream = function (V) {
                  return (E = V), this._nextChunk();
                }),
                (this._nextChunk = function () {
                  if (!this._finished) {
                    var V,
                      b = this._config.chunkSize;
                    return (
                      b
                        ? ((V = E.substring(0, b)), (E = E.substring(b)))
                        : ((V = E), (E = "")),
                      (this._finished = !E),
                      this.parseChunk(V)
                    );
                  }
                });
            }
            function w(A) {
              f.call(this, (A = A || {}));
              var E = [],
                V = !0,
                b = !1;
              (this.pause = function () {
                f.prototype.pause.apply(this, arguments), this._input.pause();
              }),
                (this.resume = function () {
                  f.prototype.resume.apply(this, arguments),
                    this._input.resume();
                }),
                (this.stream = function (O) {
                  (this._input = O),
                    this._input.on("data", this._streamData),
                    this._input.on("end", this._streamEnd),
                    this._input.on("error", this._streamError);
                }),
                (this._checkIsFinished = function () {
                  b && E.length === 1 && (this._finished = !0);
                }),
                (this._nextChunk = function () {
                  this._checkIsFinished(),
                    E.length ? this.parseChunk(E.shift()) : (V = !0);
                }),
                (this._streamData = vt(function (O) {
                  try {
                    E.push(
                      typeof O == "string"
                        ? O
                        : O.toString(this._config.encoding),
                    ),
                      V &&
                        ((V = !1),
                        this._checkIsFinished(),
                        this.parseChunk(E.shift()));
                  } catch (_) {
                    this._streamError(_);
                  }
                }, this)),
                (this._streamError = vt(function (O) {
                  this._streamCleanUp(), this._sendError(O);
                }, this)),
                (this._streamEnd = vt(function () {
                  this._streamCleanUp(), (b = !0), this._streamData("");
                }, this)),
                (this._streamCleanUp = vt(function () {
                  this._input.removeListener("data", this._streamData),
                    this._input.removeListener("end", this._streamEnd),
                    this._input.removeListener("error", this._streamError);
                }, this));
            }
            function T(A) {
              var E,
                V,
                b,
                O = Math.pow(2, 53),
                _ = -O,
                F = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                W =
                  /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                R = this,
                S = 0,
                z = 0,
                K = !1,
                Q = !1,
                ct = [],
                D = { data: [], errors: [], meta: {} };
              if (lt(A.step)) {
                var ut = A.step;
                A.step = function (k) {
                  if (((D = k), mt())) rt();
                  else {
                    if ((rt(), D.data.length === 0)) return;
                    (S += k.data.length),
                      A.preview && S > A.preview
                        ? V.abort()
                        : ((D.data = D.data[0]), ut(D, R));
                  }
                };
              }
              function pt(k) {
                return A.skipEmptyLines === "greedy"
                  ? k.join("").trim() === ""
                  : k.length === 1 && k[0].length === 0;
              }
              function rt() {
                return (
                  D &&
                    b &&
                    (P(
                      "Delimiter",
                      "UndetectableDelimiter",
                      "Unable to auto-detect delimiting character; defaulted to '" +
                        a.DefaultDelimiter +
                        "'",
                    ),
                    (b = !1)),
                  A.skipEmptyLines &&
                    (D.data = D.data.filter(function (k) {
                      return !pt(k);
                    })),
                  mt() &&
                    (function () {
                      if (!D) return;
                      function k(nt, ot) {
                        lt(A.transformHeader) &&
                          (nt = A.transformHeader(nt, ot)),
                          ct.push(nt);
                      }
                      if (Array.isArray(D.data[0])) {
                        for (var $ = 0; mt() && $ < D.data.length; $++)
                          D.data[$].forEach(k);
                        D.data.splice(0, 1);
                      } else D.data.forEach(k);
                    })(),
                  (function () {
                    if (!D || (!A.header && !A.dynamicTyping && !A.transform))
                      return D;
                    function k(nt, ot) {
                      var m,
                        y = A.header ? {} : [];
                      for (m = 0; m < nt.length; m++) {
                        var x = m,
                          q = nt[m];
                        A.header &&
                          (x = m >= ct.length ? "__parsed_extra" : ct[m]),
                          A.transform && (q = A.transform(q, x)),
                          (q = L(x, q)),
                          x === "__parsed_extra"
                            ? ((y[x] = y[x] || []), y[x].push(q))
                            : (y[x] = q);
                      }
                      return (
                        A.header &&
                          (m > ct.length
                            ? P(
                                "FieldMismatch",
                                "TooManyFields",
                                "Too many fields: expected " +
                                  ct.length +
                                  " fields but parsed " +
                                  m,
                                z + ot,
                              )
                            : m < ct.length &&
                              P(
                                "FieldMismatch",
                                "TooFewFields",
                                "Too few fields: expected " +
                                  ct.length +
                                  " fields but parsed " +
                                  m,
                                z + ot,
                              )),
                        y
                      );
                    }
                    var $ = 1;
                    return (
                      !D.data.length || Array.isArray(D.data[0])
                        ? ((D.data = D.data.map(k)), ($ = D.data.length))
                        : (D.data = k(D.data, 0)),
                      A.header && D.meta && (D.meta.fields = ct),
                      (z += $),
                      D
                    );
                  })()
                );
              }
              function mt() {
                return A.header && ct.length === 0;
              }
              function L(k, $) {
                return (
                  (nt = k),
                  A.dynamicTypingFunction &&
                    A.dynamicTyping[nt] === void 0 &&
                    (A.dynamicTyping[nt] = A.dynamicTypingFunction(nt)),
                  (A.dynamicTyping[nt] || A.dynamicTyping) === !0
                    ? $ === "true" ||
                      $ === "TRUE" ||
                      ($ !== "false" &&
                        $ !== "FALSE" &&
                        ((function (ot) {
                          if (F.test(ot)) {
                            var m = parseFloat(ot);
                            if (_ < m && m < O) return !0;
                          }
                          return !1;
                        })($)
                          ? parseFloat($)
                          : W.test($)
                            ? new Date($)
                            : $ === ""
                              ? null
                              : $))
                    : $
                );
                var nt;
              }
              function P(k, $, nt, ot) {
                var m = { type: k, code: $, message: nt };
                ot !== void 0 && (m.row = ot), D.errors.push(m);
              }
              (this.parse = function (k, $, nt) {
                var ot = A.quoteChar || '"';
                if (
                  (A.newline ||
                    (A.newline = (function (x, q) {
                      x = x.substring(0, 1048576);
                      var I = new RegExp(N(q) + "([^]*?)" + N(q), "gm"),
                        G = (x = x.replace(I, "")).split("\r"),
                        tt = x.split(`
`),
                        J = 1 < tt.length && tt[0].length < G[0].length;
                      if (G.length === 1 || J)
                        return `
`;
                      for (var Y = 0, j = 0; j < G.length; j++)
                        G[j][0] ===
                          `
` && Y++;
                      return Y >= G.length / 2
                        ? `\r
`
                        : "\r";
                    })(k, ot)),
                  (b = !1),
                  A.delimiter)
                )
                  lt(A.delimiter) &&
                    ((A.delimiter = A.delimiter(k)),
                    (D.meta.delimiter = A.delimiter));
                else {
                  var m = (function (x, q, I, G, tt) {
                    var J, Y, j, it;
                    tt = tt || [",", "	", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                    for (var et = 0; et < tt.length; et++) {
                      var X = tt[et],
                        bt = 0,
                        wt = 0,
                        Tt = 0;
                      j = void 0;
                      for (
                        var xt = new C({
                            comments: G,
                            delimiter: X,
                            newline: q,
                            preview: 10,
                          }).parse(x),
                          St = 0;
                        St < xt.data.length;
                        St++
                      )
                        if (I && pt(xt.data[St])) Tt++;
                        else {
                          var Ot = xt.data[St].length;
                          (wt += Ot),
                            j !== void 0
                              ? 0 < Ot && ((bt += Math.abs(Ot - j)), (j = Ot))
                              : (j = Ot);
                        }
                      0 < xt.data.length && (wt /= xt.data.length - Tt),
                        (Y === void 0 || bt <= Y) &&
                          (it === void 0 || it < wt) &&
                          1.99 < wt &&
                          ((Y = bt), (J = X), (it = wt));
                    }
                    return {
                      successful: !!(A.delimiter = J),
                      bestDelimiter: J,
                    };
                  })(
                    k,
                    A.newline,
                    A.skipEmptyLines,
                    A.comments,
                    A.delimitersToGuess,
                  );
                  m.successful
                    ? (A.delimiter = m.bestDelimiter)
                    : ((b = !0), (A.delimiter = a.DefaultDelimiter)),
                    (D.meta.delimiter = A.delimiter);
                }
                var y = st(A);
                return (
                  A.preview && A.header && y.preview++,
                  (E = k),
                  (V = new C(y)),
                  (D = V.parse(E, $, nt)),
                  rt(),
                  K ? { meta: { paused: !0 } } : D || { meta: { paused: !1 } }
                );
              }),
                (this.paused = function () {
                  return K;
                }),
                (this.pause = function () {
                  (K = !0),
                    V.abort(),
                    (E = lt(A.chunk) ? "" : E.substring(V.getCharIndex()));
                }),
                (this.resume = function () {
                  R.streamer._halted
                    ? ((K = !1), R.streamer.parseChunk(E, !0))
                    : setTimeout(R.resume, 3);
                }),
                (this.aborted = function () {
                  return Q;
                }),
                (this.abort = function () {
                  (Q = !0),
                    V.abort(),
                    (D.meta.aborted = !0),
                    lt(A.complete) && A.complete(D),
                    (E = "");
                });
            }
            function N(A) {
              return A.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
            function C(A) {
              var E,
                V = (A = A || {}).delimiter,
                b = A.newline,
                O = A.comments,
                _ = A.step,
                F = A.preview,
                W = A.fastMode,
                R = (E =
                  A.quoteChar === void 0 || A.quoteChar === null
                    ? '"'
                    : A.quoteChar);
              if (
                (A.escapeChar !== void 0 && (R = A.escapeChar),
                (typeof V != "string" || -1 < a.BAD_DELIMITERS.indexOf(V)) &&
                  (V = ","),
                O === V)
              )
                throw new Error("Comment character same as delimiter");
              O === !0
                ? (O = "#")
                : (typeof O != "string" || -1 < a.BAD_DELIMITERS.indexOf(O)) &&
                  (O = !1),
                b !==
                  `
` &&
                  b !== "\r" &&
                  b !==
                    `\r
` &&
                  (b = `
`);
              var S = 0,
                z = !1;
              (this.parse = function (K, Q, ct) {
                if (typeof K != "string")
                  throw new Error("Input must be a string");
                var D = K.length,
                  ut = V.length,
                  pt = b.length,
                  rt = O.length,
                  mt = lt(_),
                  L = [],
                  P = [],
                  k = [],
                  $ = (S = 0);
                if (!K) return qt();
                if (A.header && !Q) {
                  var nt = K.split(b)[0].split(V),
                    ot = [],
                    m = {},
                    y = !1;
                  for (var x in nt) {
                    var q = nt[x];
                    lt(A.transformHeader) && (q = A.transformHeader(q, x));
                    var I = q,
                      G = m[q] || 0;
                    for (
                      0 < G && ((y = !0), (I = q + "_" + G)), m[q] = G + 1;
                      ot.includes(I);

                    )
                      I = I + "_" + G;
                    ot.push(I);
                  }
                  if (y) {
                    var tt = K.split(b);
                    (tt[0] = ot.join(V)), (K = tt.join(b));
                  }
                }
                if (W || (W !== !1 && K.indexOf(E) === -1)) {
                  for (var J = K.split(b), Y = 0; Y < J.length; Y++) {
                    if (((k = J[Y]), (S += k.length), Y !== J.length - 1))
                      S += b.length;
                    else if (ct) return qt();
                    if (!O || k.substring(0, rt) !== O) {
                      if (mt) {
                        if (((L = []), Tt(k.split(V)), Ut(), z)) return qt();
                      } else Tt(k.split(V));
                      if (F && F <= Y) return (L = L.slice(0, F)), qt(!0);
                    }
                  }
                  return qt();
                }
                for (
                  var j = K.indexOf(V, S),
                    it = K.indexOf(b, S),
                    et = new RegExp(N(R) + N(E), "g"),
                    X = K.indexOf(E, S);
                  ;

                )
                  if (K[S] !== E)
                    if (O && k.length === 0 && K.substring(S, S + rt) === O) {
                      if (it === -1) return qt();
                      (S = it + pt),
                        (it = K.indexOf(b, S)),
                        (j = K.indexOf(V, S));
                    } else if (j !== -1 && (j < it || it === -1))
                      k.push(K.substring(S, j)),
                        (S = j + ut),
                        (j = K.indexOf(V, S));
                    else {
                      if (it === -1) break;
                      if (
                        (k.push(K.substring(S, it)),
                        Ot(it + pt),
                        mt && (Ut(), z))
                      )
                        return qt();
                      if (F && L.length >= F) return qt(!0);
                    }
                  else
                    for (X = S, S++; ; ) {
                      if ((X = K.indexOf(E, X + 1)) === -1)
                        return (
                          ct ||
                            P.push({
                              type: "Quotes",
                              code: "MissingQuotes",
                              message: "Quoted field unterminated",
                              row: L.length,
                              index: S,
                            }),
                          St()
                        );
                      if (X === D - 1)
                        return St(K.substring(S, X).replace(et, E));
                      if (E !== R || K[X + 1] !== R) {
                        if (E === R || X === 0 || K[X - 1] !== R) {
                          j !== -1 && j < X + 1 && (j = K.indexOf(V, X + 1)),
                            it !== -1 &&
                              it < X + 1 &&
                              (it = K.indexOf(b, X + 1));
                          var bt = xt(it === -1 ? j : Math.min(j, it));
                          if (K.substr(X + 1 + bt, ut) === V) {
                            k.push(K.substring(S, X).replace(et, E)),
                              K[(S = X + 1 + bt + ut)] !== E &&
                                (X = K.indexOf(E, S)),
                              (j = K.indexOf(V, S)),
                              (it = K.indexOf(b, S));
                            break;
                          }
                          var wt = xt(it);
                          if (K.substring(X + 1 + wt, X + 1 + wt + pt) === b) {
                            if (
                              (k.push(K.substring(S, X).replace(et, E)),
                              Ot(X + 1 + wt + pt),
                              (j = K.indexOf(V, S)),
                              (X = K.indexOf(E, S)),
                              mt && (Ut(), z))
                            )
                              return qt();
                            if (F && L.length >= F) return qt(!0);
                            break;
                          }
                          P.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message:
                              "Trailing quote on quoted field is malformed",
                            row: L.length,
                            index: S,
                          }),
                            X++;
                        }
                      } else X++;
                    }
                return St();
                function Tt($t) {
                  L.push($t), ($ = S);
                }
                function xt($t) {
                  var ve = 0;
                  if ($t !== -1) {
                    var Ft = K.substring(X + 1, $t);
                    Ft && Ft.trim() === "" && (ve = Ft.length);
                  }
                  return ve;
                }
                function St($t) {
                  return (
                    ct ||
                      ($t === void 0 && ($t = K.substring(S)),
                      k.push($t),
                      (S = D),
                      Tt(k),
                      mt && Ut()),
                    qt()
                  );
                }
                function Ot($t) {
                  (S = $t), Tt(k), (k = []), (it = K.indexOf(b, S));
                }
                function qt($t) {
                  return {
                    data: L,
                    errors: P,
                    meta: {
                      delimiter: V,
                      linebreak: b,
                      aborted: z,
                      truncated: !!$t,
                      cursor: $ + (Q || 0),
                    },
                  };
                }
                function Ut() {
                  _(qt()), (L = []), (P = []);
                }
              }),
                (this.abort = function () {
                  z = !0;
                }),
                (this.getCharIndex = function () {
                  return S;
                });
            }
            function M(A) {
              var E = A.data,
                V = o[E.workerId],
                b = !1;
              if (E.error) V.userError(E.error, E.file);
              else if (E.results && E.results.data) {
                var O = {
                  abort: function () {
                    (b = !0),
                      H(E.workerId, {
                        data: [],
                        errors: [],
                        meta: { aborted: !0 },
                      });
                  },
                  pause: Z,
                  resume: Z,
                };
                if (lt(V.userStep)) {
                  for (
                    var _ = 0;
                    _ < E.results.data.length &&
                    (V.userStep(
                      {
                        data: E.results.data[_],
                        errors: E.results.errors,
                        meta: E.results.meta,
                      },
                      O,
                    ),
                    !b);
                    _++
                  );
                  delete E.results;
                } else
                  lt(V.userChunk) &&
                    (V.userChunk(E.results, O, E.file), delete E.results);
              }
              E.finished && !b && H(E.workerId, E.results);
            }
            function H(A, E) {
              var V = o[A];
              lt(V.userComplete) && V.userComplete(E),
                V.terminate(),
                delete o[A];
            }
            function Z() {
              throw new Error("Not implemented.");
            }
            function st(A) {
              if (typeof A != "object" || A === null) return A;
              var E = Array.isArray(A) ? [] : {};
              for (var V in A) E[V] = st(A[V]);
              return E;
            }
            function vt(A, E) {
              return function () {
                A.apply(E, arguments);
              };
            }
            function lt(A) {
              return typeof A == "function";
            }
            return (
              i &&
                (r.onmessage = function (A) {
                  var E = A.data;
                  if (
                    (a.WORKER_ID === void 0 && E && (a.WORKER_ID = E.workerId),
                    typeof E.input == "string")
                  )
                    r.postMessage({
                      workerId: a.WORKER_ID,
                      results: a.parse(E.input, E.config),
                      finished: !0,
                    });
                  else if (
                    (r.File && E.input instanceof File) ||
                    E.input instanceof Object
                  ) {
                    var V = a.parse(E.input, E.config);
                    V &&
                      r.postMessage({
                        workerId: a.WORKER_ID,
                        results: V,
                        finished: !0,
                      });
                  }
                }),
              ((d.prototype = Object.create(f.prototype)).constructor = d),
              ((h.prototype = Object.create(f.prototype)).constructor = h),
              ((g.prototype = Object.create(g.prototype)).constructor = g),
              ((w.prototype = Object.create(f.prototype)).constructor = w),
              a
            );
          });
        })(Ri)),
      Ri.exports
    );
  }
  var _1 = w1();
  const x1 = Ia(_1);
  var wh =
      typeof global == "object" && global && global.Object === Object && global,
    E1 = typeof self == "object" && self && self.Object === Object && self,
    on = wh || E1 || Function("return this")(),
    jn = on.Symbol,
    _h = Object.prototype,
    A1 = _h.hasOwnProperty,
    T1 = _h.toString,
    cs = jn ? jn.toStringTag : void 0;
  function S1(e) {
    var t = A1.call(e, cs),
      n = e[cs];
    try {
      e[cs] = void 0;
      var r = !0;
    } catch {}
    var s = T1.call(e);
    return r && (t ? (e[cs] = n) : delete e[cs]), s;
  }
  var N1 = Object.prototype,
    C1 = N1.toString;
  function O1(e) {
    return C1.call(e);
  }
  var L1 = "[object Null]",
    k1 = "[object Undefined]",
    Xc = jn ? jn.toStringTag : void 0;
  function Vr(e) {
    return e == null
      ? e === void 0
        ? k1
        : L1
      : Xc && Xc in Object(e)
        ? S1(e)
        : O1(e);
  }
  function wn(e) {
    return e != null && typeof e == "object";
  }
  var nr = Array.isArray;
  function Un(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  function xh(e) {
    return e;
  }
  var R1 = "[object AsyncFunction]",
    I1 = "[object Function]",
    q1 = "[object GeneratorFunction]",
    M1 = "[object Proxy]";
  function qa(e) {
    if (!Un(e)) return !1;
    var t = Vr(e);
    return t == I1 || t == q1 || t == R1 || t == M1;
  }
  var gl = on["__core-js_shared__"],
    tu = (function () {
      var e = /[^.]+$/.exec((gl && gl.keys && gl.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function P1(e) {
    return !!tu && tu in e;
  }
  var B1 = Function.prototype,
    j1 = B1.toString;
  function or(e) {
    if (e != null) {
      try {
        return j1.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var D1 = /[\\^$.*+?()[\]{}|]/g,
    $1 = /^\[object .+?Constructor\]$/,
    U1 = Function.prototype,
    F1 = Object.prototype,
    H1 = U1.toString,
    z1 = F1.hasOwnProperty,
    K1 = RegExp(
      "^" +
        H1.call(z1)
          .replace(D1, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function V1(e) {
    if (!Un(e) || P1(e)) return !1;
    var t = qa(e) ? K1 : $1;
    return t.test(or(e));
  }
  function G1(e, t) {
    return e == null ? void 0 : e[t];
  }
  function lr(e, t) {
    var n = G1(e, t);
    return V1(n) ? n : void 0;
  }
  var Hl = lr(on, "WeakMap"),
    eu = Object.create,
    W1 = (function () {
      function e() {}
      return function (t) {
        if (!Un(t)) return {};
        if (eu) return eu(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })();
  function Z1(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  function Eh(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  }
  var Y1 = 800,
    J1 = 16,
    Q1 = Date.now;
  function X1(e) {
    var t = 0,
      n = 0;
    return function () {
      var r = Q1(),
        s = J1 - (r - n);
      if (((n = r), s > 0)) {
        if (++t >= Y1) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  function t0(e) {
    return function () {
      return e;
    };
  }
  var Vi = (function () {
      try {
        var e = lr(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    e0 = Vi
      ? function (e, t) {
          return Vi(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: t0(t),
            writable: !0,
          });
        }
      : xh,
    n0 = X1(e0);
  function r0(e, t) {
    for (
      var n = -1, r = e == null ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  var s0 = 9007199254740991,
    i0 = /^(?:0|[1-9]\d*)$/;
  function Ah(e, t) {
    var n = typeof e;
    return (
      (t = t ?? s0),
      !!t &&
        (n == "number" || (n != "symbol" && i0.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  function Ma(e, t, n) {
    t == "__proto__" && Vi
      ? Vi(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  function Ks(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var o0 = Object.prototype,
    l0 = o0.hasOwnProperty;
  function Th(e, t, n) {
    var r = e[t];
    (!(l0.call(e, t) && Ks(r, n)) || (n === void 0 && !(t in e))) &&
      Ma(e, t, n);
  }
  function Vs(e, t, n, r) {
    var s = !n;
    n || (n = {});
    for (var i = -1, o = t.length; ++i < o; ) {
      var l = t[i],
        a = void 0;
      a === void 0 && (a = e[l]), s ? Ma(n, l, a) : Th(n, l, a);
    }
    return n;
  }
  var nu = Math.max;
  function a0(e, t, n) {
    return (
      (t = nu(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var r = arguments, s = -1, i = nu(r.length - t, 0), o = Array(i);
          ++s < i;

        )
          o[s] = r[t + s];
        s = -1;
        for (var l = Array(t + 1); ++s < t; ) l[s] = r[s];
        return (l[t] = n(o)), Z1(e, this, l);
      }
    );
  }
  function c0(e, t) {
    return n0(a0(e, t, xh), e + "");
  }
  var u0 = 9007199254740991;
  function Sh(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= u0;
  }
  function uo(e) {
    return e != null && Sh(e.length) && !qa(e);
  }
  function f0(e, t, n) {
    if (!Un(n)) return !1;
    var r = typeof t;
    return (r == "number" ? uo(n) && Ah(t, n.length) : r == "string" && t in n)
      ? Ks(n[t], e)
      : !1;
  }
  function h0(e) {
    return c0(function (t, n) {
      var r = -1,
        s = n.length,
        i = s > 1 ? n[s - 1] : void 0,
        o = s > 2 ? n[2] : void 0;
      for (
        i = e.length > 3 && typeof i == "function" ? (s--, i) : void 0,
          o && f0(n[0], n[1], o) && ((i = s < 3 ? void 0 : i), (s = 1)),
          t = Object(t);
        ++r < s;

      ) {
        var l = n[r];
        l && e(t, l, r, i);
      }
      return t;
    });
  }
  var d0 = Object.prototype;
  function Pa(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || d0;
    return e === n;
  }
  function p0(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var g0 = "[object Arguments]";
  function ru(e) {
    return wn(e) && Vr(e) == g0;
  }
  var Nh = Object.prototype,
    m0 = Nh.hasOwnProperty,
    b0 = Nh.propertyIsEnumerable,
    zl = ru(
      (function () {
        return arguments;
      })(),
    )
      ? ru
      : function (e) {
          return wn(e) && m0.call(e, "callee") && !b0.call(e, "callee");
        };
  function y0() {
    return !1;
  }
  var Ch = typeof me == "object" && me && !me.nodeType && me,
    su = Ch && typeof be == "object" && be && !be.nodeType && be,
    v0 = su && su.exports === Ch,
    iu = v0 ? on.Buffer : void 0,
    w0 = iu ? iu.isBuffer : void 0,
    Ms = w0 || y0,
    _0 = "[object Arguments]",
    x0 = "[object Array]",
    E0 = "[object Boolean]",
    A0 = "[object Date]",
    T0 = "[object Error]",
    S0 = "[object Function]",
    N0 = "[object Map]",
    C0 = "[object Number]",
    O0 = "[object Object]",
    L0 = "[object RegExp]",
    k0 = "[object Set]",
    R0 = "[object String]",
    I0 = "[object WeakMap]",
    q0 = "[object ArrayBuffer]",
    M0 = "[object DataView]",
    P0 = "[object Float32Array]",
    B0 = "[object Float64Array]",
    j0 = "[object Int8Array]",
    D0 = "[object Int16Array]",
    $0 = "[object Int32Array]",
    U0 = "[object Uint8Array]",
    F0 = "[object Uint8ClampedArray]",
    H0 = "[object Uint16Array]",
    z0 = "[object Uint32Array]",
    Dt = {};
  Dt[P0] =
    Dt[B0] =
    Dt[j0] =
    Dt[D0] =
    Dt[$0] =
    Dt[U0] =
    Dt[F0] =
    Dt[H0] =
    Dt[z0] =
      !0;
  Dt[_0] =
    Dt[x0] =
    Dt[q0] =
    Dt[E0] =
    Dt[M0] =
    Dt[A0] =
    Dt[T0] =
    Dt[S0] =
    Dt[N0] =
    Dt[C0] =
    Dt[O0] =
    Dt[L0] =
    Dt[k0] =
    Dt[R0] =
    Dt[I0] =
      !1;
  function K0(e) {
    return wn(e) && Sh(e.length) && !!Dt[Vr(e)];
  }
  function Ba(e) {
    return function (t) {
      return e(t);
    };
  }
  var Oh = typeof me == "object" && me && !me.nodeType && me,
    As = Oh && typeof be == "object" && be && !be.nodeType && be,
    V0 = As && As.exports === Oh,
    ml = V0 && wh.process,
    Ur = (function () {
      try {
        var e = As && As.require && As.require("util").types;
        return e || (ml && ml.binding && ml.binding("util"));
      } catch {}
    })(),
    ou = Ur && Ur.isTypedArray,
    ja = ou ? Ba(ou) : K0,
    G0 = Object.prototype,
    W0 = G0.hasOwnProperty;
  function Lh(e, t) {
    var n = nr(e),
      r = !n && zl(e),
      s = !n && !r && Ms(e),
      i = !n && !r && !s && ja(e),
      o = n || r || s || i,
      l = o ? p0(e.length, String) : [],
      a = l.length;
    for (var u in e)
      (t || W0.call(e, u)) &&
        !(
          o &&
          (u == "length" ||
            (s && (u == "offset" || u == "parent")) ||
            (i && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            Ah(u, a))
        ) &&
        l.push(u);
    return l;
  }
  function kh(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var Z0 = kh(Object.keys, Object),
    Y0 = Object.prototype,
    J0 = Y0.hasOwnProperty;
  function Q0(e) {
    if (!Pa(e)) return Z0(e);
    var t = [];
    for (var n in Object(e)) J0.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function Da(e) {
    return uo(e) ? Lh(e) : Q0(e);
  }
  function X0(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var tb = Object.prototype,
    eb = tb.hasOwnProperty;
  function nb(e) {
    if (!Un(e)) return X0(e);
    var t = Pa(e),
      n = [];
    for (var r in e) (r == "constructor" && (t || !eb.call(e, r))) || n.push(r);
    return n;
  }
  function Gs(e) {
    return uo(e) ? Lh(e, !0) : nb(e);
  }
  var Ps = lr(Object, "create");
  function rb() {
    (this.__data__ = Ps ? Ps(null) : {}), (this.size = 0);
  }
  function sb(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var ib = "__lodash_hash_undefined__",
    ob = Object.prototype,
    lb = ob.hasOwnProperty;
  function ab(e) {
    var t = this.__data__;
    if (Ps) {
      var n = t[e];
      return n === ib ? void 0 : n;
    }
    return lb.call(t, e) ? t[e] : void 0;
  }
  var cb = Object.prototype,
    ub = cb.hasOwnProperty;
  function fb(e) {
    var t = this.__data__;
    return Ps ? t[e] !== void 0 : ub.call(t, e);
  }
  var hb = "__lodash_hash_undefined__";
  function db(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = Ps && t === void 0 ? hb : t),
      this
    );
  }
  function rr(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  rr.prototype.clear = rb;
  rr.prototype.delete = sb;
  rr.prototype.get = ab;
  rr.prototype.has = fb;
  rr.prototype.set = db;
  function pb() {
    (this.__data__ = []), (this.size = 0);
  }
  function fo(e, t) {
    for (var n = e.length; n--; ) if (Ks(e[n][0], t)) return n;
    return -1;
  }
  var gb = Array.prototype,
    mb = gb.splice;
  function bb(e) {
    var t = this.__data__,
      n = fo(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : mb.call(t, n, 1), --this.size, !0;
  }
  function yb(e) {
    var t = this.__data__,
      n = fo(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function vb(e) {
    return fo(this.__data__, e) > -1;
  }
  function wb(e, t) {
    var n = this.__data__,
      r = fo(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function An(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  An.prototype.clear = pb;
  An.prototype.delete = bb;
  An.prototype.get = yb;
  An.prototype.has = vb;
  An.prototype.set = wb;
  var Bs = lr(on, "Map");
  function _b() {
    (this.size = 0),
      (this.__data__ = {
        hash: new rr(),
        map: new (Bs || An)(),
        string: new rr(),
      });
  }
  function xb(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function ho(e, t) {
    var n = e.__data__;
    return xb(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Eb(e) {
    var t = ho(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Ab(e) {
    return ho(this, e).get(e);
  }
  function Tb(e) {
    return ho(this, e).has(e);
  }
  function Sb(e, t) {
    var n = ho(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function ar(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  ar.prototype.clear = _b;
  ar.prototype.delete = Eb;
  ar.prototype.get = Ab;
  ar.prototype.has = Tb;
  ar.prototype.set = Sb;
  function Rh(e, t) {
    for (var n = -1, r = t.length, s = e.length; ++n < r; ) e[s + n] = t[n];
    return e;
  }
  var $a = kh(Object.getPrototypeOf, Object),
    Nb = "[object Object]",
    Cb = Function.prototype,
    Ob = Object.prototype,
    Ih = Cb.toString,
    Lb = Ob.hasOwnProperty,
    kb = Ih.call(Object);
  function Rb(e) {
    if (!wn(e) || Vr(e) != Nb) return !1;
    var t = $a(e);
    if (t === null) return !0;
    var n = Lb.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Ih.call(n) == kb;
  }
  function Ib() {
    (this.__data__ = new An()), (this.size = 0);
  }
  function qb(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function Mb(e) {
    return this.__data__.get(e);
  }
  function Pb(e) {
    return this.__data__.has(e);
  }
  var Bb = 200;
  function jb(e, t) {
    var n = this.__data__;
    if (n instanceof An) {
      var r = n.__data__;
      if (!Bs || r.length < Bb - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new ar(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  function Xe(e) {
    var t = (this.__data__ = new An(e));
    this.size = t.size;
  }
  Xe.prototype.clear = Ib;
  Xe.prototype.delete = qb;
  Xe.prototype.get = Mb;
  Xe.prototype.has = Pb;
  Xe.prototype.set = jb;
  function Db(e, t) {
    return e && Vs(t, Da(t), e);
  }
  function $b(e, t) {
    return e && Vs(t, Gs(t), e);
  }
  var qh = typeof me == "object" && me && !me.nodeType && me,
    lu = qh && typeof be == "object" && be && !be.nodeType && be,
    Ub = lu && lu.exports === qh,
    au = Ub ? on.Buffer : void 0,
    cu = au ? au.allocUnsafe : void 0;
  function Mh(e, t) {
    if (t) return e.slice();
    var n = e.length,
      r = cu ? cu(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function Fb(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, s = 0, i = []; ++n < r; ) {
      var o = e[n];
      t(o, n, e) && (i[s++] = o);
    }
    return i;
  }
  function Ph() {
    return [];
  }
  var Hb = Object.prototype,
    zb = Hb.propertyIsEnumerable,
    uu = Object.getOwnPropertySymbols,
    Ua = uu
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              Fb(uu(e), function (t) {
                return zb.call(e, t);
              }));
        }
      : Ph;
  function Kb(e, t) {
    return Vs(e, Ua(e), t);
  }
  var Vb = Object.getOwnPropertySymbols,
    Bh = Vb
      ? function (e) {
          for (var t = []; e; ) Rh(t, Ua(e)), (e = $a(e));
          return t;
        }
      : Ph;
  function Gb(e, t) {
    return Vs(e, Bh(e), t);
  }
  function jh(e, t, n) {
    var r = t(e);
    return nr(e) ? r : Rh(r, n(e));
  }
  function Kl(e) {
    return jh(e, Da, Ua);
  }
  function Wb(e) {
    return jh(e, Gs, Bh);
  }
  var Vl = lr(on, "DataView"),
    Gl = lr(on, "Promise"),
    Wl = lr(on, "Set"),
    fu = "[object Map]",
    Zb = "[object Object]",
    hu = "[object Promise]",
    du = "[object Set]",
    pu = "[object WeakMap]",
    gu = "[object DataView]",
    Yb = or(Vl),
    Jb = or(Bs),
    Qb = or(Gl),
    Xb = or(Wl),
    ty = or(Hl),
    Ie = Vr;
  ((Vl && Ie(new Vl(new ArrayBuffer(1))) != gu) ||
    (Bs && Ie(new Bs()) != fu) ||
    (Gl && Ie(Gl.resolve()) != hu) ||
    (Wl && Ie(new Wl()) != du) ||
    (Hl && Ie(new Hl()) != pu)) &&
    (Ie = function (e) {
      var t = Vr(e),
        n = t == Zb ? e.constructor : void 0,
        r = n ? or(n) : "";
      if (r)
        switch (r) {
          case Yb:
            return gu;
          case Jb:
            return fu;
          case Qb:
            return hu;
          case Xb:
            return du;
          case ty:
            return pu;
        }
      return t;
    });
  var ey = Object.prototype,
    ny = ey.hasOwnProperty;
  function ry(e) {
    var t = e.length,
      n = new e.constructor(t);
    return (
      t &&
        typeof e[0] == "string" &&
        ny.call(e, "index") &&
        ((n.index = e.index), (n.input = e.input)),
      n
    );
  }
  var Gi = on.Uint8Array;
  function Fa(e) {
    var t = new e.constructor(e.byteLength);
    return new Gi(t).set(new Gi(e)), t;
  }
  function sy(e, t) {
    var n = t ? Fa(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var iy = /\w*$/;
  function oy(e) {
    var t = new e.constructor(e.source, iy.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var mu = jn ? jn.prototype : void 0,
    bu = mu ? mu.valueOf : void 0;
  function ly(e) {
    return bu ? Object(bu.call(e)) : {};
  }
  function Dh(e, t) {
    var n = t ? Fa(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var ay = "[object Boolean]",
    cy = "[object Date]",
    uy = "[object Map]",
    fy = "[object Number]",
    hy = "[object RegExp]",
    dy = "[object Set]",
    py = "[object String]",
    gy = "[object Symbol]",
    my = "[object ArrayBuffer]",
    by = "[object DataView]",
    yy = "[object Float32Array]",
    vy = "[object Float64Array]",
    wy = "[object Int8Array]",
    _y = "[object Int16Array]",
    xy = "[object Int32Array]",
    Ey = "[object Uint8Array]",
    Ay = "[object Uint8ClampedArray]",
    Ty = "[object Uint16Array]",
    Sy = "[object Uint32Array]";
  function Ny(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case my:
        return Fa(e);
      case ay:
      case cy:
        return new r(+e);
      case by:
        return sy(e, n);
      case yy:
      case vy:
      case wy:
      case _y:
      case xy:
      case Ey:
      case Ay:
      case Ty:
      case Sy:
        return Dh(e, n);
      case uy:
        return new r();
      case fy:
      case py:
        return new r(e);
      case hy:
        return oy(e);
      case dy:
        return new r();
      case gy:
        return ly(e);
    }
  }
  function $h(e) {
    return typeof e.constructor == "function" && !Pa(e) ? W1($a(e)) : {};
  }
  var Cy = "[object Map]";
  function Oy(e) {
    return wn(e) && Ie(e) == Cy;
  }
  var yu = Ur && Ur.isMap,
    Ly = yu ? Ba(yu) : Oy,
    ky = "[object Set]";
  function Ry(e) {
    return wn(e) && Ie(e) == ky;
  }
  var vu = Ur && Ur.isSet,
    Iy = vu ? Ba(vu) : Ry,
    qy = 1,
    My = 2,
    Py = 4,
    Uh = "[object Arguments]",
    By = "[object Array]",
    jy = "[object Boolean]",
    Dy = "[object Date]",
    $y = "[object Error]",
    Fh = "[object Function]",
    Uy = "[object GeneratorFunction]",
    Fy = "[object Map]",
    Hy = "[object Number]",
    Hh = "[object Object]",
    zy = "[object RegExp]",
    Ky = "[object Set]",
    Vy = "[object String]",
    Gy = "[object Symbol]",
    Wy = "[object WeakMap]",
    Zy = "[object ArrayBuffer]",
    Yy = "[object DataView]",
    Jy = "[object Float32Array]",
    Qy = "[object Float64Array]",
    Xy = "[object Int8Array]",
    tv = "[object Int16Array]",
    ev = "[object Int32Array]",
    nv = "[object Uint8Array]",
    rv = "[object Uint8ClampedArray]",
    sv = "[object Uint16Array]",
    iv = "[object Uint32Array]",
    Pt = {};
  Pt[Uh] =
    Pt[By] =
    Pt[Zy] =
    Pt[Yy] =
    Pt[jy] =
    Pt[Dy] =
    Pt[Jy] =
    Pt[Qy] =
    Pt[Xy] =
    Pt[tv] =
    Pt[ev] =
    Pt[Fy] =
    Pt[Hy] =
    Pt[Hh] =
    Pt[zy] =
    Pt[Ky] =
    Pt[Vy] =
    Pt[Gy] =
    Pt[nv] =
    Pt[rv] =
    Pt[sv] =
    Pt[iv] =
      !0;
  Pt[$y] = Pt[Fh] = Pt[Wy] = !1;
  function Ii(e, t, n, r, s, i) {
    var o,
      l = t & qy,
      a = t & My,
      u = t & Py;
    if (o !== void 0) return o;
    if (!Un(e)) return e;
    var f = nr(e);
    if (f) {
      if (((o = ry(e)), !l)) return Eh(e, o);
    } else {
      var d = Ie(e),
        h = d == Fh || d == Uy;
      if (Ms(e)) return Mh(e, l);
      if (d == Hh || d == Uh || (h && !s)) {
        if (((o = a || h ? {} : $h(e)), !l))
          return a ? Gb(e, $b(o, e)) : Kb(e, Db(o, e));
      } else {
        if (!Pt[d]) return s ? e : {};
        o = Ny(e, d, l);
      }
    }
    i || (i = new Xe());
    var g = i.get(e);
    if (g) return g;
    i.set(e, o),
      Iy(e)
        ? e.forEach(function (N) {
            o.add(Ii(N, t, n, N, e, i));
          })
        : Ly(e) &&
          e.forEach(function (N, C) {
            o.set(C, Ii(N, t, n, C, e, i));
          });
    var w = u ? (a ? Wb : Kl) : a ? Gs : Da,
      T = f ? void 0 : w(e);
    return (
      r0(T || e, function (N, C) {
        T && ((C = N), (N = e[C])), Th(o, C, Ii(N, t, n, C, e, i));
      }),
      o
    );
  }
  var ov = 1,
    lv = 4;
  function Mr(e) {
    return Ii(e, ov | lv);
  }
  var av = "__lodash_hash_undefined__";
  function cv(e) {
    return this.__data__.set(e, av), this;
  }
  function uv(e) {
    return this.__data__.has(e);
  }
  function Wi(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.__data__ = new ar(); ++t < n; ) this.add(e[t]);
  }
  Wi.prototype.add = Wi.prototype.push = cv;
  Wi.prototype.has = uv;
  function fv(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
      if (t(e[n], n, e)) return !0;
    return !1;
  }
  function hv(e, t) {
    return e.has(t);
  }
  var dv = 1,
    pv = 2;
  function zh(e, t, n, r, s, i) {
    var o = n & dv,
      l = e.length,
      a = t.length;
    if (l != a && !(o && a > l)) return !1;
    var u = i.get(e),
      f = i.get(t);
    if (u && f) return u == t && f == e;
    var d = -1,
      h = !0,
      g = n & pv ? new Wi() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < l; ) {
      var w = e[d],
        T = t[d];
      if (r) var N = o ? r(T, w, d, t, e, i) : r(w, T, d, e, t, i);
      if (N !== void 0) {
        if (N) continue;
        h = !1;
        break;
      }
      if (g) {
        if (
          !fv(t, function (C, M) {
            if (!hv(g, M) && (w === C || s(w, C, n, r, i))) return g.push(M);
          })
        ) {
          h = !1;
          break;
        }
      } else if (!(w === T || s(w, T, n, r, i))) {
        h = !1;
        break;
      }
    }
    return i.delete(e), i.delete(t), h;
  }
  function gv(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (r, s) {
        n[++t] = [s, r];
      }),
      n
    );
  }
  function mv(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (r) {
        n[++t] = r;
      }),
      n
    );
  }
  var bv = 1,
    yv = 2,
    vv = "[object Boolean]",
    wv = "[object Date]",
    _v = "[object Error]",
    xv = "[object Map]",
    Ev = "[object Number]",
    Av = "[object RegExp]",
    Tv = "[object Set]",
    Sv = "[object String]",
    Nv = "[object Symbol]",
    Cv = "[object ArrayBuffer]",
    Ov = "[object DataView]",
    wu = jn ? jn.prototype : void 0,
    bl = wu ? wu.valueOf : void 0;
  function Lv(e, t, n, r, s, i, o) {
    switch (n) {
      case Ov:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
          return !1;
        (e = e.buffer), (t = t.buffer);
      case Cv:
        return !(e.byteLength != t.byteLength || !i(new Gi(e), new Gi(t)));
      case vv:
      case wv:
      case Ev:
        return Ks(+e, +t);
      case _v:
        return e.name == t.name && e.message == t.message;
      case Av:
      case Sv:
        return e == t + "";
      case xv:
        var l = gv;
      case Tv:
        var a = r & bv;
        if ((l || (l = mv), e.size != t.size && !a)) return !1;
        var u = o.get(e);
        if (u) return u == t;
        (r |= yv), o.set(e, t);
        var f = zh(l(e), l(t), r, s, i, o);
        return o.delete(e), f;
      case Nv:
        if (bl) return bl.call(e) == bl.call(t);
    }
    return !1;
  }
  var kv = 1,
    Rv = Object.prototype,
    Iv = Rv.hasOwnProperty;
  function qv(e, t, n, r, s, i) {
    var o = n & kv,
      l = Kl(e),
      a = l.length,
      u = Kl(t),
      f = u.length;
    if (a != f && !o) return !1;
    for (var d = a; d--; ) {
      var h = l[d];
      if (!(o ? h in t : Iv.call(t, h))) return !1;
    }
    var g = i.get(e),
      w = i.get(t);
    if (g && w) return g == t && w == e;
    var T = !0;
    i.set(e, t), i.set(t, e);
    for (var N = o; ++d < a; ) {
      h = l[d];
      var C = e[h],
        M = t[h];
      if (r) var H = o ? r(M, C, h, t, e, i) : r(C, M, h, e, t, i);
      if (!(H === void 0 ? C === M || s(C, M, n, r, i) : H)) {
        T = !1;
        break;
      }
      N || (N = h == "constructor");
    }
    if (T && !N) {
      var Z = e.constructor,
        st = t.constructor;
      Z != st &&
        "constructor" in e &&
        "constructor" in t &&
        !(
          typeof Z == "function" &&
          Z instanceof Z &&
          typeof st == "function" &&
          st instanceof st
        ) &&
        (T = !1);
    }
    return i.delete(e), i.delete(t), T;
  }
  var Mv = 1,
    _u = "[object Arguments]",
    xu = "[object Array]",
    pi = "[object Object]",
    Pv = Object.prototype,
    Eu = Pv.hasOwnProperty;
  function Bv(e, t, n, r, s, i) {
    var o = nr(e),
      l = nr(t),
      a = o ? xu : Ie(e),
      u = l ? xu : Ie(t);
    (a = a == _u ? pi : a), (u = u == _u ? pi : u);
    var f = a == pi,
      d = u == pi,
      h = a == u;
    if (h && Ms(e)) {
      if (!Ms(t)) return !1;
      (o = !0), (f = !1);
    }
    if (h && !f)
      return (
        i || (i = new Xe()),
        o || ja(e) ? zh(e, t, n, r, s, i) : Lv(e, t, a, n, r, s, i)
      );
    if (!(n & Mv)) {
      var g = f && Eu.call(e, "__wrapped__"),
        w = d && Eu.call(t, "__wrapped__");
      if (g || w) {
        var T = g ? e.value() : e,
          N = w ? t.value() : t;
        return i || (i = new Xe()), s(T, N, n, r, i);
      }
    }
    return h ? (i || (i = new Xe()), qv(e, t, n, r, s, i)) : !1;
  }
  function Kh(e, t, n, r, s) {
    return e === t
      ? !0
      : e == null || t == null || (!wn(e) && !wn(t))
        ? e !== e && t !== t
        : Bv(e, t, n, r, Kh, s);
  }
  function jv(e) {
    return function (t, n, r) {
      for (var s = -1, i = Object(t), o = r(t), l = o.length; l--; ) {
        var a = o[++s];
        if (n(i[a], a, i) === !1) break;
      }
      return t;
    };
  }
  var Dv = jv();
  function Zl(e, t, n) {
    ((n !== void 0 && !Ks(e[t], n)) || (n === void 0 && !(t in e))) &&
      Ma(e, t, n);
  }
  function $v(e) {
    return wn(e) && uo(e);
  }
  function Yl(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
      return e[t];
  }
  function Uv(e) {
    return Vs(e, Gs(e));
  }
  function Fv(e, t, n, r, s, i, o) {
    var l = Yl(e, n),
      a = Yl(t, n),
      u = o.get(a);
    if (u) {
      Zl(e, n, u);
      return;
    }
    var f = i ? i(l, a, n + "", e, t, o) : void 0,
      d = f === void 0;
    if (d) {
      var h = nr(a),
        g = !h && Ms(a),
        w = !h && !g && ja(a);
      (f = a),
        h || g || w
          ? nr(l)
            ? (f = l)
            : $v(l)
              ? (f = Eh(l))
              : g
                ? ((d = !1), (f = Mh(a, !0)))
                : w
                  ? ((d = !1), (f = Dh(a, !0)))
                  : (f = [])
          : Rb(a) || zl(a)
            ? ((f = l), zl(l) ? (f = Uv(l)) : (!Un(l) || qa(l)) && (f = $h(a)))
            : (d = !1);
    }
    d && (o.set(a, f), s(f, a, r, i, o), o.delete(a)), Zl(e, n, f);
  }
  function Vh(e, t, n, r, s) {
    e !== t &&
      Dv(
        t,
        function (i, o) {
          if ((s || (s = new Xe()), Un(i))) Fv(e, t, o, n, Vh, r, s);
          else {
            var l = r ? r(Yl(e, o), i, o + "", e, t, s) : void 0;
            l === void 0 && (l = i), Zl(e, o, l);
          }
        },
        Gs,
      );
  }
  function Ha(e, t) {
    return Kh(e, t);
  }
  var Bn = h0(function (e, t, n) {
      Vh(e, t, n);
    }),
    gt = ((e) => (
      (e[(e.TYPE = 3)] = "TYPE"),
      (e[(e.LEVEL = 12)] = "LEVEL"),
      (e[(e.ATTRIBUTE = 13)] = "ATTRIBUTE"),
      (e[(e.BLOT = 14)] = "BLOT"),
      (e[(e.INLINE = 7)] = "INLINE"),
      (e[(e.BLOCK = 11)] = "BLOCK"),
      (e[(e.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
      (e[(e.INLINE_BLOT = 6)] = "INLINE_BLOT"),
      (e[(e.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
      (e[(e.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
      (e[(e.ANY = 15)] = "ANY"),
      e
    ))(gt || {});
  class rn {
    constructor(t, n, r = {}) {
      (this.attrName = t), (this.keyName = n);
      const s = gt.TYPE & gt.ATTRIBUTE;
      (this.scope = r.scope != null ? (r.scope & gt.LEVEL) | s : gt.ATTRIBUTE),
        r.whitelist != null && (this.whitelist = r.whitelist);
    }
    static keys(t) {
      return Array.from(t.attributes).map((n) => n.name);
    }
    add(t, n) {
      return this.canAdd(t, n) ? (t.setAttribute(this.keyName, n), !0) : !1;
    }
    canAdd(t, n) {
      return this.whitelist == null
        ? !0
        : typeof n == "string"
          ? this.whitelist.indexOf(n.replace(/["']/g, "")) > -1
          : this.whitelist.indexOf(n) > -1;
    }
    remove(t) {
      t.removeAttribute(this.keyName);
    }
    value(t) {
      const n = t.getAttribute(this.keyName);
      return this.canAdd(t, n) && n ? n : "";
    }
  }
  class Pr extends Error {
    constructor(t) {
      (t = "[Parchment] " + t),
        super(t),
        (this.message = t),
        (this.name = this.constructor.name);
    }
  }
  const Gh = class Jl {
    constructor() {
      (this.attributes = {}),
        (this.classes = {}),
        (this.tags = {}),
        (this.types = {});
    }
    static find(t, n = !1) {
      if (t == null) return null;
      if (this.blots.has(t)) return this.blots.get(t) || null;
      if (n) {
        let r = null;
        try {
          r = t.parentNode;
        } catch {
          return null;
        }
        return this.find(r, n);
      }
      return null;
    }
    create(t, n, r) {
      const s = this.query(n);
      if (s == null) throw new Pr(`Unable to create ${n} blot`);
      const i = s,
        o =
          n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : i.create(r),
        l = new i(t, o, r);
      return Jl.blots.set(l.domNode, l), l;
    }
    find(t, n = !1) {
      return Jl.find(t, n);
    }
    query(t, n = gt.ANY) {
      let r;
      return (
        typeof t == "string"
          ? (r = this.types[t] || this.attributes[t])
          : t instanceof Text || t.nodeType === Node.TEXT_NODE
            ? (r = this.types.text)
            : typeof t == "number"
              ? t & gt.LEVEL & gt.BLOCK
                ? (r = this.types.block)
                : t & gt.LEVEL & gt.INLINE && (r = this.types.inline)
              : t instanceof Element &&
                ((t.getAttribute("class") || "")
                  .split(/\s+/)
                  .some((s) => ((r = this.classes[s]), !!r)),
                (r = r || this.tags[t.tagName])),
        r == null
          ? null
          : "scope" in r && n & gt.LEVEL & r.scope && n & gt.TYPE & r.scope
            ? r
            : null
      );
    }
    register(...t) {
      return t.map((n) => {
        const r = "blotName" in n,
          s = "attrName" in n;
        if (!r && !s) throw new Pr("Invalid definition");
        if (r && n.blotName === "abstract")
          throw new Pr("Cannot register abstract class");
        const i = r ? n.blotName : s ? n.attrName : void 0;
        return (
          (this.types[i] = n),
          s
            ? typeof n.keyName == "string" && (this.attributes[n.keyName] = n)
            : r &&
              (n.className && (this.classes[n.className] = n),
              n.tagName &&
                (Array.isArray(n.tagName)
                  ? (n.tagName = n.tagName.map((o) => o.toUpperCase()))
                  : (n.tagName = n.tagName.toUpperCase()),
                (Array.isArray(n.tagName) ? n.tagName : [n.tagName]).forEach(
                  (o) => {
                    (this.tags[o] == null || n.className == null) &&
                      (this.tags[o] = n);
                  },
                ))),
          n
        );
      });
    }
  };
  Gh.blots = new WeakMap();
  let Fr = Gh;
  function Au(e, t) {
    return (e.getAttribute("class") || "")
      .split(/\s+/)
      .filter((n) => n.indexOf(`${t}-`) === 0);
  }
  class Hv extends rn {
    static keys(t) {
      return (t.getAttribute("class") || "")
        .split(/\s+/)
        .map((n) => n.split("-").slice(0, -1).join("-"));
    }
    add(t, n) {
      return this.canAdd(t, n)
        ? (this.remove(t), t.classList.add(`${this.keyName}-${n}`), !0)
        : !1;
    }
    remove(t) {
      Au(t, this.keyName).forEach((n) => {
        t.classList.remove(n);
      }),
        t.classList.length === 0 && t.removeAttribute("class");
    }
    value(t) {
      const n = (Au(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
      return this.canAdd(t, n) ? n : "";
    }
  }
  const $e = Hv;
  function yl(e) {
    const t = e.split("-"),
      n = t
        .slice(1)
        .map((r) => r[0].toUpperCase() + r.slice(1))
        .join("");
    return t[0] + n;
  }
  class zv extends rn {
    static keys(t) {
      return (t.getAttribute("style") || "")
        .split(";")
        .map((n) => n.split(":")[0].trim());
    }
    add(t, n) {
      return this.canAdd(t, n) ? ((t.style[yl(this.keyName)] = n), !0) : !1;
    }
    remove(t) {
      (t.style[yl(this.keyName)] = ""),
        t.getAttribute("style") || t.removeAttribute("style");
    }
    value(t) {
      const n = t.style[yl(this.keyName)];
      return this.canAdd(t, n) ? n : "";
    }
  }
  const Fn = zv;
  class Kv {
    constructor(t) {
      (this.attributes = {}), (this.domNode = t), this.build();
    }
    attribute(t, n) {
      n
        ? t.add(this.domNode, n) &&
          (t.value(this.domNode) != null
            ? (this.attributes[t.attrName] = t)
            : delete this.attributes[t.attrName])
        : (t.remove(this.domNode), delete this.attributes[t.attrName]);
    }
    build() {
      this.attributes = {};
      const t = Fr.find(this.domNode);
      if (t == null) return;
      const n = rn.keys(this.domNode),
        r = $e.keys(this.domNode),
        s = Fn.keys(this.domNode);
      n.concat(r)
        .concat(s)
        .forEach((i) => {
          const o = t.scroll.query(i, gt.ATTRIBUTE);
          o instanceof rn && (this.attributes[o.attrName] = o);
        });
    }
    copy(t) {
      Object.keys(this.attributes).forEach((n) => {
        const r = this.attributes[n].value(this.domNode);
        t.format(n, r);
      });
    }
    move(t) {
      this.copy(t),
        Object.keys(this.attributes).forEach((n) => {
          this.attributes[n].remove(this.domNode);
        }),
        (this.attributes = {});
    }
    values() {
      return Object.keys(this.attributes).reduce(
        (t, n) => ((t[n] = this.attributes[n].value(this.domNode)), t),
        {},
      );
    }
  }
  const po = Kv,
    Wh = class {
      constructor(t, n) {
        (this.scroll = t),
          (this.domNode = n),
          Fr.blots.set(n, this),
          (this.prev = null),
          (this.next = null);
      }
      static create(t) {
        if (this.tagName == null)
          throw new Pr("Blot definition missing tagName");
        let n, r;
        return (
          Array.isArray(this.tagName)
            ? (typeof t == "string"
                ? ((r = t.toUpperCase()),
                  parseInt(r, 10).toString() === r && (r = parseInt(r, 10)))
                : typeof t == "number" && (r = t),
              typeof r == "number"
                ? (n = document.createElement(this.tagName[r - 1]))
                : r && this.tagName.indexOf(r) > -1
                  ? (n = document.createElement(r))
                  : (n = document.createElement(this.tagName[0])))
            : (n = document.createElement(this.tagName)),
          this.className && n.classList.add(this.className),
          n
        );
      }
      get statics() {
        return this.constructor;
      }
      attach() {}
      clone() {
        const t = this.domNode.cloneNode(!1);
        return this.scroll.create(t);
      }
      detach() {
        this.parent != null && this.parent.removeChild(this),
          Fr.blots.delete(this.domNode);
      }
      deleteAt(t, n) {
        this.isolate(t, n).remove();
      }
      formatAt(t, n, r, s) {
        const i = this.isolate(t, n);
        if (this.scroll.query(r, gt.BLOT) != null && s) i.wrap(r, s);
        else if (this.scroll.query(r, gt.ATTRIBUTE) != null) {
          const o = this.scroll.create(this.statics.scope);
          i.wrap(o), o.format(r, s);
        }
      }
      insertAt(t, n, r) {
        const s =
            r == null
              ? this.scroll.create("text", n)
              : this.scroll.create(n, r),
          i = this.split(t);
        this.parent.insertBefore(s, i || void 0);
      }
      isolate(t, n) {
        const r = this.split(t);
        if (r == null) throw new Error("Attempt to isolate at end");
        return r.split(n), r;
      }
      length() {
        return 1;
      }
      offset(t = this.parent) {
        return this.parent == null || this === t
          ? 0
          : this.parent.children.offset(this) + this.parent.offset(t);
      }
      optimize(t) {
        this.statics.requiredContainer &&
          !(this.parent instanceof this.statics.requiredContainer) &&
          this.wrap(this.statics.requiredContainer.blotName);
      }
      remove() {
        this.domNode.parentNode != null &&
          this.domNode.parentNode.removeChild(this.domNode),
          this.detach();
      }
      replaceWith(t, n) {
        const r = typeof t == "string" ? this.scroll.create(t, n) : t;
        return (
          this.parent != null &&
            (this.parent.insertBefore(r, this.next || void 0), this.remove()),
          r
        );
      }
      split(t, n) {
        return t === 0 ? this : this.next;
      }
      update(t, n) {}
      wrap(t, n) {
        const r = typeof t == "string" ? this.scroll.create(t, n) : t;
        if (
          (this.parent != null &&
            this.parent.insertBefore(r, this.next || void 0),
          typeof r.appendChild != "function")
        )
          throw new Pr(`Cannot wrap ${t}`);
        return r.appendChild(this), r;
      }
    };
  Wh.blotName = "abstract";
  let Zh = Wh;
  const Yh = class extends Zh {
    static value(t) {
      return !0;
    }
    index(t, n) {
      return this.domNode === t ||
        this.domNode.compareDocumentPosition(t) &
          Node.DOCUMENT_POSITION_CONTAINED_BY
        ? Math.min(n, 1)
        : -1;
    }
    position(t, n) {
      let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
      return t > 0 && (r += 1), [this.parent.domNode, r];
    }
    value() {
      return {
        [this.statics.blotName]: this.statics.value(this.domNode) || !0,
      };
    }
  };
  Yh.scope = gt.INLINE_BLOT;
  let Vv = Yh;
  const se = Vv;
  class Gv {
    constructor() {
      (this.head = null), (this.tail = null), (this.length = 0);
    }
    append(...t) {
      if ((this.insertBefore(t[0], null), t.length > 1)) {
        const n = t.slice(1);
        this.append(...n);
      }
    }
    at(t) {
      const n = this.iterator();
      let r = n();
      for (; r && t > 0; ) (t -= 1), (r = n());
      return r;
    }
    contains(t) {
      const n = this.iterator();
      let r = n();
      for (; r; ) {
        if (r === t) return !0;
        r = n();
      }
      return !1;
    }
    indexOf(t) {
      const n = this.iterator();
      let r = n(),
        s = 0;
      for (; r; ) {
        if (r === t) return s;
        (s += 1), (r = n());
      }
      return -1;
    }
    insertBefore(t, n) {
      t != null &&
        (this.remove(t),
        (t.next = n),
        n != null
          ? ((t.prev = n.prev),
            n.prev != null && (n.prev.next = t),
            (n.prev = t),
            n === this.head && (this.head = t))
          : this.tail != null
            ? ((this.tail.next = t), (t.prev = this.tail), (this.tail = t))
            : ((t.prev = null), (this.head = this.tail = t)),
        (this.length += 1));
    }
    offset(t) {
      let n = 0,
        r = this.head;
      for (; r != null; ) {
        if (r === t) return n;
        (n += r.length()), (r = r.next);
      }
      return -1;
    }
    remove(t) {
      this.contains(t) &&
        (t.prev != null && (t.prev.next = t.next),
        t.next != null && (t.next.prev = t.prev),
        t === this.head && (this.head = t.next),
        t === this.tail && (this.tail = t.prev),
        (this.length -= 1));
    }
    iterator(t = this.head) {
      return () => {
        const n = t;
        return t != null && (t = t.next), n;
      };
    }
    find(t, n = !1) {
      const r = this.iterator();
      let s = r();
      for (; s; ) {
        const i = s.length();
        if (
          t < i ||
          (n && t === i && (s.next == null || s.next.length() !== 0))
        )
          return [s, t];
        (t -= i), (s = r());
      }
      return [null, 0];
    }
    forEach(t) {
      const n = this.iterator();
      let r = n();
      for (; r; ) t(r), (r = n());
    }
    forEachAt(t, n, r) {
      if (n <= 0) return;
      const [s, i] = this.find(t);
      let o = t - i;
      const l = this.iterator(s);
      let a = l();
      for (; a && o < t + n; ) {
        const u = a.length();
        t > o
          ? r(a, t - o, Math.min(n, o + u - t))
          : r(a, 0, Math.min(u, t + n - o)),
          (o += u),
          (a = l());
      }
    }
    map(t) {
      return this.reduce((n, r) => (n.push(t(r)), n), []);
    }
    reduce(t, n) {
      const r = this.iterator();
      let s = r();
      for (; s; ) (n = t(n, s)), (s = r());
      return n;
    }
  }
  function Tu(e, t) {
    const n = t.find(e);
    if (n) return n;
    try {
      return t.create(e);
    } catch {
      const r = t.create(gt.INLINE);
      return (
        Array.from(e.childNodes).forEach((s) => {
          r.domNode.appendChild(s);
        }),
        e.parentNode && e.parentNode.replaceChild(r.domNode, e),
        r.attach(),
        r
      );
    }
  }
  const Jh = class On extends Zh {
    constructor(t, n) {
      super(t, n), (this.uiNode = null), this.build();
    }
    appendChild(t) {
      this.insertBefore(t);
    }
    attach() {
      super.attach(),
        this.children.forEach((t) => {
          t.attach();
        });
    }
    attachUI(t) {
      this.uiNode != null && this.uiNode.remove(),
        (this.uiNode = t),
        On.uiClass && this.uiNode.classList.add(On.uiClass),
        this.uiNode.setAttribute("contenteditable", "false"),
        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
    }
    build() {
      (this.children = new Gv()),
        Array.from(this.domNode.childNodes)
          .filter((t) => t !== this.uiNode)
          .reverse()
          .forEach((t) => {
            try {
              const n = Tu(t, this.scroll);
              this.insertBefore(n, this.children.head || void 0);
            } catch (n) {
              if (n instanceof Pr) return;
              throw n;
            }
          });
    }
    deleteAt(t, n) {
      if (t === 0 && n === this.length()) return this.remove();
      this.children.forEachAt(t, n, (r, s, i) => {
        r.deleteAt(s, i);
      });
    }
    descendant(t, n = 0) {
      const [r, s] = this.children.find(n);
      return (t.blotName == null && t(r)) ||
        (t.blotName != null && r instanceof t)
        ? [r, s]
        : r instanceof On
          ? r.descendant(t, s)
          : [null, -1];
    }
    descendants(t, n = 0, r = Number.MAX_VALUE) {
      let s = [],
        i = r;
      return (
        this.children.forEachAt(n, r, (o, l, a) => {
          ((t.blotName == null && t(o)) ||
            (t.blotName != null && o instanceof t)) &&
            s.push(o),
            o instanceof On && (s = s.concat(o.descendants(t, l, i))),
            (i -= a);
        }),
        s
      );
    }
    detach() {
      this.children.forEach((t) => {
        t.detach();
      }),
        super.detach();
    }
    enforceAllowedChildren() {
      let t = !1;
      this.children.forEach((n) => {
        t ||
          this.statics.allowedChildren.some((r) => n instanceof r) ||
          (n.statics.scope === gt.BLOCK_BLOT
            ? (n.next != null && this.splitAfter(n),
              n.prev != null && this.splitAfter(n.prev),
              n.parent.unwrap(),
              (t = !0))
            : n instanceof On
              ? n.unwrap()
              : n.remove());
      });
    }
    formatAt(t, n, r, s) {
      this.children.forEachAt(t, n, (i, o, l) => {
        i.formatAt(o, l, r, s);
      });
    }
    insertAt(t, n, r) {
      const [s, i] = this.children.find(t);
      if (s) s.insertAt(i, n, r);
      else {
        const o =
          r == null ? this.scroll.create("text", n) : this.scroll.create(n, r);
        this.appendChild(o);
      }
    }
    insertBefore(t, n) {
      t.parent != null && t.parent.children.remove(t);
      let r = null;
      this.children.insertBefore(t, n || null),
        (t.parent = this),
        n != null && (r = n.domNode),
        (this.domNode.parentNode !== t.domNode ||
          this.domNode.nextSibling !== r) &&
          this.domNode.insertBefore(t.domNode, r),
        t.attach();
    }
    length() {
      return this.children.reduce((t, n) => t + n.length(), 0);
    }
    moveChildren(t, n) {
      this.children.forEach((r) => {
        t.insertBefore(r, n);
      });
    }
    optimize(t) {
      if (
        (super.optimize(t),
        this.enforceAllowedChildren(),
        this.uiNode != null &&
          this.uiNode !== this.domNode.firstChild &&
          this.domNode.insertBefore(this.uiNode, this.domNode.firstChild),
        this.children.length === 0)
      )
        if (this.statics.defaultChild != null) {
          const n = this.scroll.create(this.statics.defaultChild.blotName);
          this.appendChild(n);
        } else this.remove();
    }
    path(t, n = !1) {
      const [r, s] = this.children.find(t, n),
        i = [[this, t]];
      return r instanceof On
        ? i.concat(r.path(s, n))
        : (r != null && i.push([r, s]), i);
    }
    removeChild(t) {
      this.children.remove(t);
    }
    replaceWith(t, n) {
      const r = typeof t == "string" ? this.scroll.create(t, n) : t;
      return r instanceof On && this.moveChildren(r), super.replaceWith(r);
    }
    split(t, n = !1) {
      if (!n) {
        if (t === 0) return this;
        if (t === this.length()) return this.next;
      }
      const r = this.clone();
      return (
        this.parent && this.parent.insertBefore(r, this.next || void 0),
        this.children.forEachAt(t, this.length(), (s, i, o) => {
          const l = s.split(i, n);
          l != null && r.appendChild(l);
        }),
        r
      );
    }
    splitAfter(t) {
      const n = this.clone();
      for (; t.next != null; ) n.appendChild(t.next);
      return this.parent && this.parent.insertBefore(n, this.next || void 0), n;
    }
    unwrap() {
      this.parent && this.moveChildren(this.parent, this.next || void 0),
        this.remove();
    }
    update(t, n) {
      const r = [],
        s = [];
      t.forEach((i) => {
        i.target === this.domNode &&
          i.type === "childList" &&
          (r.push(...i.addedNodes), s.push(...i.removedNodes));
      }),
        s.forEach((i) => {
          if (
            i.parentNode != null &&
            i.tagName !== "IFRAME" &&
            document.body.compareDocumentPosition(i) &
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            return;
          const o = this.scroll.find(i);
          o != null &&
            (o.domNode.parentNode == null ||
              o.domNode.parentNode === this.domNode) &&
            o.detach();
        }),
        r
          .filter((i) => i.parentNode === this.domNode && i !== this.uiNode)
          .sort((i, o) =>
            i === o
              ? 0
              : i.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING
                ? 1
                : -1,
          )
          .forEach((i) => {
            let o = null;
            i.nextSibling != null && (o = this.scroll.find(i.nextSibling));
            const l = Tu(i, this.scroll);
            (l.next !== o || l.next == null) &&
              (l.parent != null && l.parent.removeChild(this),
              this.insertBefore(l, o || void 0));
          }),
        this.enforceAllowedChildren();
    }
  };
  Jh.uiClass = "";
  let Wv = Jh;
  const Be = Wv;
  function Zv(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (e[n] !== t[n]) return !1;
    return !0;
  }
  const xr = class Er extends Be {
    static create(t) {
      return super.create(t);
    }
    static formats(t, n) {
      const r = n.query(Er.blotName);
      if (!(r != null && t.tagName === r.tagName)) {
        if (typeof this.tagName == "string") return !0;
        if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
      }
    }
    constructor(t, n) {
      super(t, n), (this.attributes = new po(this.domNode));
    }
    format(t, n) {
      if (t === this.statics.blotName && !n)
        this.children.forEach((r) => {
          r instanceof Er || (r = r.wrap(Er.blotName, !0)),
            this.attributes.copy(r);
        }),
          this.unwrap();
      else {
        const r = this.scroll.query(t, gt.INLINE);
        if (r == null) return;
        r instanceof rn
          ? this.attributes.attribute(r, n)
          : n &&
            (t !== this.statics.blotName || this.formats()[t] !== n) &&
            this.replaceWith(t, n);
      }
    }
    formats() {
      const t = this.attributes.values(),
        n = this.statics.formats(this.domNode, this.scroll);
      return n != null && (t[this.statics.blotName] = n), t;
    }
    formatAt(t, n, r, s) {
      this.formats()[r] != null || this.scroll.query(r, gt.ATTRIBUTE)
        ? this.isolate(t, n).format(r, s)
        : super.formatAt(t, n, r, s);
    }
    optimize(t) {
      super.optimize(t);
      const n = this.formats();
      if (Object.keys(n).length === 0) return this.unwrap();
      const r = this.next;
      r instanceof Er &&
        r.prev === this &&
        Zv(n, r.formats()) &&
        (r.moveChildren(this), r.remove());
    }
    replaceWith(t, n) {
      const r = super.replaceWith(t, n);
      return this.attributes.copy(r), r;
    }
    update(t, n) {
      super.update(t, n),
        t.some((r) => r.target === this.domNode && r.type === "attributes") &&
          this.attributes.build();
    }
    wrap(t, n) {
      const r = super.wrap(t, n);
      return r instanceof Er && this.attributes.move(r), r;
    }
  };
  (xr.allowedChildren = [xr, se]),
    (xr.blotName = "inline"),
    (xr.scope = gt.INLINE_BLOT),
    (xr.tagName = "SPAN");
  let Yv = xr;
  const za = Yv,
    Ar = class Ql extends Be {
      static create(t) {
        return super.create(t);
      }
      static formats(t, n) {
        const r = n.query(Ql.blotName);
        if (!(r != null && t.tagName === r.tagName)) {
          if (typeof this.tagName == "string") return !0;
          if (Array.isArray(this.tagName)) return t.tagName.toLowerCase();
        }
      }
      constructor(t, n) {
        super(t, n), (this.attributes = new po(this.domNode));
      }
      format(t, n) {
        const r = this.scroll.query(t, gt.BLOCK);
        r != null &&
          (r instanceof rn
            ? this.attributes.attribute(r, n)
            : t === this.statics.blotName && !n
              ? this.replaceWith(Ql.blotName)
              : n &&
                (t !== this.statics.blotName || this.formats()[t] !== n) &&
                this.replaceWith(t, n));
      }
      formats() {
        const t = this.attributes.values(),
          n = this.statics.formats(this.domNode, this.scroll);
        return n != null && (t[this.statics.blotName] = n), t;
      }
      formatAt(t, n, r, s) {
        this.scroll.query(r, gt.BLOCK) != null
          ? this.format(r, s)
          : super.formatAt(t, n, r, s);
      }
      insertAt(t, n, r) {
        if (r == null || this.scroll.query(n, gt.INLINE) != null)
          super.insertAt(t, n, r);
        else {
          const s = this.split(t);
          if (s != null) {
            const i = this.scroll.create(n, r);
            s.parent.insertBefore(i, s);
          } else throw new Error("Attempt to insertAt after block boundaries");
        }
      }
      replaceWith(t, n) {
        const r = super.replaceWith(t, n);
        return this.attributes.copy(r), r;
      }
      update(t, n) {
        super.update(t, n),
          t.some((r) => r.target === this.domNode && r.type === "attributes") &&
            this.attributes.build();
      }
    };
  (Ar.blotName = "block"),
    (Ar.scope = gt.BLOCK_BLOT),
    (Ar.tagName = "P"),
    (Ar.allowedChildren = [za, Ar, se]);
  let Jv = Ar;
  const js = Jv,
    Xl = class extends Be {
      checkMerge() {
        return (
          this.next !== null &&
          this.next.statics.blotName === this.statics.blotName
        );
      }
      deleteAt(t, n) {
        super.deleteAt(t, n), this.enforceAllowedChildren();
      }
      formatAt(t, n, r, s) {
        super.formatAt(t, n, r, s), this.enforceAllowedChildren();
      }
      insertAt(t, n, r) {
        super.insertAt(t, n, r), this.enforceAllowedChildren();
      }
      optimize(t) {
        super.optimize(t),
          this.children.length > 0 &&
            this.next != null &&
            this.checkMerge() &&
            (this.next.moveChildren(this), this.next.remove());
      }
    };
  (Xl.blotName = "container"), (Xl.scope = gt.BLOCK_BLOT);
  let Qv = Xl;
  const go = Qv;
  class Xv extends se {
    static formats(t, n) {}
    format(t, n) {
      super.formatAt(0, this.length(), t, n);
    }
    formatAt(t, n, r, s) {
      t === 0 && n === this.length()
        ? this.format(r, s)
        : super.formatAt(t, n, r, s);
    }
    formats() {
      return this.statics.formats(this.domNode, this.scroll);
    }
  }
  const ye = Xv,
    tw = {
      attributes: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    },
    ew = 100,
    Tr = class extends Be {
      constructor(t, n) {
        super(null, n),
          (this.registry = t),
          (this.scroll = this),
          this.build(),
          (this.observer = new MutationObserver((r) => {
            this.update(r);
          })),
          this.observer.observe(this.domNode, tw),
          this.attach();
      }
      create(t, n) {
        return this.registry.create(this, t, n);
      }
      find(t, n = !1) {
        const r = this.registry.find(t, n);
        return r
          ? r.scroll === this
            ? r
            : n
              ? this.find(r.scroll.domNode.parentNode, !0)
              : null
          : null;
      }
      query(t, n = gt.ANY) {
        return this.registry.query(t, n);
      }
      register(...t) {
        return this.registry.register(...t);
      }
      build() {
        this.scroll != null && super.build();
      }
      detach() {
        super.detach(), this.observer.disconnect();
      }
      deleteAt(t, n) {
        this.update(),
          t === 0 && n === this.length()
            ? this.children.forEach((r) => {
                r.remove();
              })
            : super.deleteAt(t, n);
      }
      formatAt(t, n, r, s) {
        this.update(), super.formatAt(t, n, r, s);
      }
      insertAt(t, n, r) {
        this.update(), super.insertAt(t, n, r);
      }
      optimize(t = [], n = {}) {
        super.optimize(n);
        const r = n.mutationsMap || new WeakMap();
        let s = Array.from(this.observer.takeRecords());
        for (; s.length > 0; ) t.push(s.pop());
        const i = (a, u = !0) => {
            a == null ||
              a === this ||
              (a.domNode.parentNode != null &&
                (r.has(a.domNode) || r.set(a.domNode, []), u && i(a.parent)));
          },
          o = (a) => {
            r.has(a.domNode) &&
              (a instanceof Be && a.children.forEach(o),
              r.delete(a.domNode),
              a.optimize(n));
          };
        let l = t;
        for (let a = 0; l.length > 0; a += 1) {
          if (a >= ew)
            throw new Error("[Parchment] Maximum optimize iterations reached");
          for (
            l.forEach((u) => {
              const f = this.find(u.target, !0);
              f != null &&
                (f.domNode === u.target &&
                  (u.type === "childList"
                    ? (i(this.find(u.previousSibling, !1)),
                      Array.from(u.addedNodes).forEach((d) => {
                        const h = this.find(d, !1);
                        i(h, !1),
                          h instanceof Be &&
                            h.children.forEach((g) => {
                              i(g, !1);
                            });
                      }))
                    : u.type === "attributes" && i(f.prev)),
                i(f));
            }),
              this.children.forEach(o),
              l = Array.from(this.observer.takeRecords()),
              s = l.slice();
            s.length > 0;

          )
            t.push(s.pop());
        }
      }
      update(t, n = {}) {
        t = t || this.observer.takeRecords();
        const r = new WeakMap();
        t
          .map((s) => {
            const i = this.find(s.target, !0);
            return i == null
              ? null
              : r.has(i.domNode)
                ? (r.get(i.domNode).push(s), null)
                : (r.set(i.domNode, [s]), i);
          })
          .forEach((s) => {
            s != null &&
              s !== this &&
              r.has(s.domNode) &&
              s.update(r.get(s.domNode) || [], n);
          }),
          (n.mutationsMap = r),
          r.has(this.domNode) && super.update(r.get(this.domNode), n),
          this.optimize(t, n);
      }
    };
  (Tr.blotName = "scroll"),
    (Tr.defaultChild = js),
    (Tr.allowedChildren = [js, go]),
    (Tr.scope = gt.BLOCK_BLOT),
    (Tr.tagName = "DIV");
  let nw = Tr;
  const Ka = nw,
    ta = class Qh extends se {
      static create(t) {
        return document.createTextNode(t);
      }
      static value(t) {
        return t.data;
      }
      constructor(t, n) {
        super(t, n), (this.text = this.statics.value(this.domNode));
      }
      deleteAt(t, n) {
        this.domNode.data = this.text =
          this.text.slice(0, t) + this.text.slice(t + n);
      }
      index(t, n) {
        return this.domNode === t ? n : -1;
      }
      insertAt(t, n, r) {
        r == null
          ? ((this.text = this.text.slice(0, t) + n + this.text.slice(t)),
            (this.domNode.data = this.text))
          : super.insertAt(t, n, r);
      }
      length() {
        return this.text.length;
      }
      optimize(t) {
        super.optimize(t),
          (this.text = this.statics.value(this.domNode)),
          this.text.length === 0
            ? this.remove()
            : this.next instanceof Qh &&
              this.next.prev === this &&
              (this.insertAt(this.length(), this.next.value()),
              this.next.remove());
      }
      position(t, n = !1) {
        return [this.domNode, t];
      }
      split(t, n = !1) {
        if (!n) {
          if (t === 0) return this;
          if (t === this.length()) return this.next;
        }
        const r = this.scroll.create(this.domNode.splitText(t));
        return (
          this.parent.insertBefore(r, this.next || void 0),
          (this.text = this.statics.value(this.domNode)),
          r
        );
      }
      update(t, n) {
        t.some(
          (r) => r.type === "characterData" && r.target === this.domNode,
        ) && (this.text = this.statics.value(this.domNode));
      }
      value() {
        return this.text;
      }
    };
  (ta.blotName = "text"), (ta.scope = gt.INLINE_BLOT);
  let rw = ta;
  const Zi = rw,
    sw = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Attributor: rn,
          AttributorStore: po,
          BlockBlot: js,
          ClassAttributor: $e,
          ContainerBlot: go,
          EmbedBlot: ye,
          InlineBlot: za,
          LeafBlot: se,
          ParentBlot: Be,
          Registry: Fr,
          Scope: gt,
          ScrollBlot: Ka,
          StyleAttributor: Fn,
          TextBlot: Zi,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  var gi = { exports: {} },
    vl,
    Su;
  function iw() {
    if (Su) return vl;
    Su = 1;
    var e = -1,
      t = 1,
      n = 0;
    function r(b, O, _, F, W) {
      if (b === O) return b ? [[n, b]] : [];
      if (_ != null) {
        var R = E(b, O, _);
        if (R) return R;
      }
      var S = l(b, O),
        z = b.substring(0, S);
      (b = b.substring(S)), (O = O.substring(S)), (S = u(b, O));
      var K = b.substring(b.length - S);
      (b = b.substring(0, b.length - S)), (O = O.substring(0, O.length - S));
      var Q = s(b, O);
      return z && Q.unshift([n, z]), K && Q.push([n, K]), M(Q, W), F && d(Q), Q;
    }
    function s(b, O) {
      var _;
      if (!b) return [[t, O]];
      if (!O) return [[e, b]];
      var F = b.length > O.length ? b : O,
        W = b.length > O.length ? O : b,
        R = F.indexOf(W);
      if (R !== -1)
        return (
          (_ = [
            [t, F.substring(0, R)],
            [n, W],
            [t, F.substring(R + W.length)],
          ]),
          b.length > O.length && (_[0][0] = _[2][0] = e),
          _
        );
      if (W.length === 1)
        return [
          [e, b],
          [t, O],
        ];
      var S = f(b, O);
      if (S) {
        var z = S[0],
          K = S[1],
          Q = S[2],
          ct = S[3],
          D = S[4],
          ut = r(z, Q),
          pt = r(K, ct);
        return ut.concat([[n, D]], pt);
      }
      return i(b, O);
    }
    function i(b, O) {
      for (
        var _ = b.length,
          F = O.length,
          W = Math.ceil((_ + F) / 2),
          R = W,
          S = 2 * W,
          z = new Array(S),
          K = new Array(S),
          Q = 0;
        Q < S;
        Q++
      )
        (z[Q] = -1), (K[Q] = -1);
      (z[R + 1] = 0), (K[R + 1] = 0);
      for (
        var ct = _ - F, D = ct % 2 !== 0, ut = 0, pt = 0, rt = 0, mt = 0, L = 0;
        L < W;
        L++
      ) {
        for (var P = -L + ut; P <= L - pt; P += 2) {
          var k = R + P,
            $;
          P === -L || (P !== L && z[k - 1] < z[k + 1])
            ? ($ = z[k + 1])
            : ($ = z[k - 1] + 1);
          for (
            var nt = $ - P;
            $ < _ && nt < F && b.charAt($) === O.charAt(nt);

          )
            $++, nt++;
          if (((z[k] = $), $ > _)) pt += 2;
          else if (nt > F) ut += 2;
          else if (D) {
            var ot = R + ct - P;
            if (ot >= 0 && ot < S && K[ot] !== -1) {
              var m = _ - K[ot];
              if ($ >= m) return o(b, O, $, nt);
            }
          }
        }
        for (var y = -L + rt; y <= L - mt; y += 2) {
          var ot = R + y,
            m;
          y === -L || (y !== L && K[ot - 1] < K[ot + 1])
            ? (m = K[ot + 1])
            : (m = K[ot - 1] + 1);
          for (
            var x = m - y;
            m < _ && x < F && b.charAt(_ - m - 1) === O.charAt(F - x - 1);

          )
            m++, x++;
          if (((K[ot] = m), m > _)) mt += 2;
          else if (x > F) rt += 2;
          else if (!D) {
            var k = R + ct - y;
            if (k >= 0 && k < S && z[k] !== -1) {
              var $ = z[k],
                nt = R + $ - k;
              if (((m = _ - m), $ >= m)) return o(b, O, $, nt);
            }
          }
        }
      }
      return [
        [e, b],
        [t, O],
      ];
    }
    function o(b, O, _, F) {
      var W = b.substring(0, _),
        R = O.substring(0, F),
        S = b.substring(_),
        z = O.substring(F),
        K = r(W, R),
        Q = r(S, z);
      return K.concat(Q);
    }
    function l(b, O) {
      if (!b || !O || b.charAt(0) !== O.charAt(0)) return 0;
      for (var _ = 0, F = Math.min(b.length, O.length), W = F, R = 0; _ < W; )
        b.substring(R, W) == O.substring(R, W) ? ((_ = W), (R = _)) : (F = W),
          (W = Math.floor((F - _) / 2 + _));
      return H(b.charCodeAt(W - 1)) && W--, W;
    }
    function a(b, O) {
      var _ = b.length,
        F = O.length;
      if (_ == 0 || F == 0) return 0;
      _ > F ? (b = b.substring(_ - F)) : _ < F && (O = O.substring(0, _));
      var W = Math.min(_, F);
      if (b == O) return W;
      for (var R = 0, S = 1; ; ) {
        var z = b.substring(W - S),
          K = O.indexOf(z);
        if (K == -1) return R;
        (S += K),
          (K == 0 || b.substring(W - S) == O.substring(0, S)) && ((R = S), S++);
      }
    }
    function u(b, O) {
      if (!b || !O || b.slice(-1) !== O.slice(-1)) return 0;
      for (var _ = 0, F = Math.min(b.length, O.length), W = F, R = 0; _ < W; )
        b.substring(b.length - W, b.length - R) ==
        O.substring(O.length - W, O.length - R)
          ? ((_ = W), (R = _))
          : (F = W),
          (W = Math.floor((F - _) / 2 + _));
      return Z(b.charCodeAt(b.length - W)) && W--, W;
    }
    function f(b, O) {
      var _ = b.length > O.length ? b : O,
        F = b.length > O.length ? O : b;
      if (_.length < 4 || F.length * 2 < _.length) return null;
      function W(pt, rt, mt) {
        for (
          var L = pt.substring(mt, mt + Math.floor(pt.length / 4)),
            P = -1,
            k = "",
            $,
            nt,
            ot,
            m;
          (P = rt.indexOf(L, P + 1)) !== -1;

        ) {
          var y = l(pt.substring(mt), rt.substring(P)),
            x = u(pt.substring(0, mt), rt.substring(0, P));
          k.length < x + y &&
            ((k = rt.substring(P - x, P) + rt.substring(P, P + y)),
            ($ = pt.substring(0, mt - x)),
            (nt = pt.substring(mt + y)),
            (ot = rt.substring(0, P - x)),
            (m = rt.substring(P + y)));
        }
        return k.length * 2 >= pt.length ? [$, nt, ot, m, k] : null;
      }
      var R = W(_, F, Math.ceil(_.length / 4)),
        S = W(_, F, Math.ceil(_.length / 2)),
        z;
      if (!R && !S) return null;
      S ? (R ? (z = R[4].length > S[4].length ? R : S) : (z = S)) : (z = R);
      var K, Q, ct, D;
      b.length > O.length
        ? ((K = z[0]), (Q = z[1]), (ct = z[2]), (D = z[3]))
        : ((ct = z[0]), (D = z[1]), (K = z[2]), (Q = z[3]));
      var ut = z[4];
      return [K, Q, ct, D, ut];
    }
    function d(b) {
      for (
        var O = !1, _ = [], F = 0, W = null, R = 0, S = 0, z = 0, K = 0, Q = 0;
        R < b.length;

      )
        b[R][0] == n
          ? ((_[F++] = R), (S = K), (z = Q), (K = 0), (Q = 0), (W = b[R][1]))
          : (b[R][0] == t ? (K += b[R][1].length) : (Q += b[R][1].length),
            W &&
              W.length <= Math.max(S, z) &&
              W.length <= Math.max(K, Q) &&
              (b.splice(_[F - 1], 0, [e, W]),
              (b[_[F - 1] + 1][0] = t),
              F--,
              F--,
              (R = F > 0 ? _[F - 1] : -1),
              (S = 0),
              (z = 0),
              (K = 0),
              (Q = 0),
              (W = null),
              (O = !0))),
          R++;
      for (O && M(b), C(b), R = 1; R < b.length; ) {
        if (b[R - 1][0] == e && b[R][0] == t) {
          var ct = b[R - 1][1],
            D = b[R][1],
            ut = a(ct, D),
            pt = a(D, ct);
          ut >= pt
            ? (ut >= ct.length / 2 || ut >= D.length / 2) &&
              (b.splice(R, 0, [n, D.substring(0, ut)]),
              (b[R - 1][1] = ct.substring(0, ct.length - ut)),
              (b[R + 1][1] = D.substring(ut)),
              R++)
            : (pt >= ct.length / 2 || pt >= D.length / 2) &&
              (b.splice(R, 0, [n, ct.substring(0, pt)]),
              (b[R - 1][0] = t),
              (b[R - 1][1] = D.substring(0, D.length - pt)),
              (b[R + 1][0] = e),
              (b[R + 1][1] = ct.substring(pt)),
              R++),
            R++;
        }
        R++;
      }
    }
    var h = /[^a-zA-Z0-9]/,
      g = /\s/,
      w = /[\r\n]/,
      T = /\n\r?\n$/,
      N = /^\r?\n\r?\n/;
    function C(b) {
      function O(pt, rt) {
        if (!pt || !rt) return 6;
        var mt = pt.charAt(pt.length - 1),
          L = rt.charAt(0),
          P = mt.match(h),
          k = L.match(h),
          $ = P && mt.match(g),
          nt = k && L.match(g),
          ot = $ && mt.match(w),
          m = nt && L.match(w),
          y = ot && pt.match(T),
          x = m && rt.match(N);
        return y || x
          ? 5
          : ot || m
            ? 4
            : P && !$ && nt
              ? 3
              : $ || nt
                ? 2
                : P || k
                  ? 1
                  : 0;
      }
      for (var _ = 1; _ < b.length - 1; ) {
        if (b[_ - 1][0] == n && b[_ + 1][0] == n) {
          var F = b[_ - 1][1],
            W = b[_][1],
            R = b[_ + 1][1],
            S = u(F, W);
          if (S) {
            var z = W.substring(W.length - S);
            (F = F.substring(0, F.length - S)),
              (W = z + W.substring(0, W.length - S)),
              (R = z + R);
          }
          for (
            var K = F, Q = W, ct = R, D = O(F, W) + O(W, R);
            W.charAt(0) === R.charAt(0);

          ) {
            (F += W.charAt(0)),
              (W = W.substring(1) + R.charAt(0)),
              (R = R.substring(1));
            var ut = O(F, W) + O(W, R);
            ut >= D && ((D = ut), (K = F), (Q = W), (ct = R));
          }
          b[_ - 1][1] != K &&
            (K ? (b[_ - 1][1] = K) : (b.splice(_ - 1, 1), _--),
            (b[_][1] = Q),
            ct ? (b[_ + 1][1] = ct) : (b.splice(_ + 1, 1), _--));
        }
        _++;
      }
    }
    function M(b, O) {
      b.push([n, ""]);
      for (var _ = 0, F = 0, W = 0, R = "", S = "", z; _ < b.length; ) {
        if (_ < b.length - 1 && !b[_][1]) {
          b.splice(_, 1);
          continue;
        }
        switch (b[_][0]) {
          case t:
            W++, (S += b[_][1]), _++;
            break;
          case e:
            F++, (R += b[_][1]), _++;
            break;
          case n:
            var K = _ - W - F - 1;
            if (O) {
              if (K >= 0 && vt(b[K][1])) {
                var Q = b[K][1].slice(-1);
                if (
                  ((b[K][1] = b[K][1].slice(0, -1)),
                  (R = Q + R),
                  (S = Q + S),
                  !b[K][1])
                ) {
                  b.splice(K, 1), _--;
                  var ct = K - 1;
                  b[ct] && b[ct][0] === t && (W++, (S = b[ct][1] + S), ct--),
                    b[ct] && b[ct][0] === e && (F++, (R = b[ct][1] + R), ct--),
                    (K = ct);
                }
              }
              if (st(b[_][1])) {
                var Q = b[_][1].charAt(0);
                (b[_][1] = b[_][1].slice(1)), (R += Q), (S += Q);
              }
            }
            if (_ < b.length - 1 && !b[_][1]) {
              b.splice(_, 1);
              break;
            }
            if (R.length > 0 || S.length > 0) {
              R.length > 0 &&
                S.length > 0 &&
                ((z = l(S, R)),
                z !== 0 &&
                  (K >= 0
                    ? (b[K][1] += S.substring(0, z))
                    : (b.splice(0, 0, [n, S.substring(0, z)]), _++),
                  (S = S.substring(z)),
                  (R = R.substring(z))),
                (z = u(S, R)),
                z !== 0 &&
                  ((b[_][1] = S.substring(S.length - z) + b[_][1]),
                  (S = S.substring(0, S.length - z)),
                  (R = R.substring(0, R.length - z))));
              var D = W + F;
              R.length === 0 && S.length === 0
                ? (b.splice(_ - D, D), (_ = _ - D))
                : R.length === 0
                  ? (b.splice(_ - D, D, [t, S]), (_ = _ - D + 1))
                  : S.length === 0
                    ? (b.splice(_ - D, D, [e, R]), (_ = _ - D + 1))
                    : (b.splice(_ - D, D, [e, R], [t, S]), (_ = _ - D + 2));
            }
            _ !== 0 && b[_ - 1][0] === n
              ? ((b[_ - 1][1] += b[_][1]), b.splice(_, 1))
              : _++,
              (W = 0),
              (F = 0),
              (R = ""),
              (S = "");
            break;
        }
      }
      b[b.length - 1][1] === "" && b.pop();
      var ut = !1;
      for (_ = 1; _ < b.length - 1; )
        b[_ - 1][0] === n &&
          b[_ + 1][0] === n &&
          (b[_][1].substring(b[_][1].length - b[_ - 1][1].length) ===
          b[_ - 1][1]
            ? ((b[_][1] =
                b[_ - 1][1] +
                b[_][1].substring(0, b[_][1].length - b[_ - 1][1].length)),
              (b[_ + 1][1] = b[_ - 1][1] + b[_ + 1][1]),
              b.splice(_ - 1, 1),
              (ut = !0))
            : b[_][1].substring(0, b[_ + 1][1].length) == b[_ + 1][1] &&
              ((b[_ - 1][1] += b[_ + 1][1]),
              (b[_][1] = b[_][1].substring(b[_ + 1][1].length) + b[_ + 1][1]),
              b.splice(_ + 1, 1),
              (ut = !0))),
          _++;
      ut && M(b, O);
    }
    function H(b) {
      return b >= 55296 && b <= 56319;
    }
    function Z(b) {
      return b >= 56320 && b <= 57343;
    }
    function st(b) {
      return Z(b.charCodeAt(0));
    }
    function vt(b) {
      return H(b.charCodeAt(b.length - 1));
    }
    function lt(b) {
      for (var O = [], _ = 0; _ < b.length; _++)
        b[_][1].length > 0 && O.push(b[_]);
      return O;
    }
    function A(b, O, _, F) {
      return vt(b) || st(F)
        ? null
        : lt([
            [n, b],
            [e, O],
            [t, _],
            [n, F],
          ]);
    }
    function E(b, O, _) {
      var F = typeof _ == "number" ? { index: _, length: 0 } : _.oldRange,
        W = typeof _ == "number" ? null : _.newRange,
        R = b.length,
        S = O.length;
      if (F.length === 0 && (W === null || W.length === 0)) {
        var z = F.index,
          K = b.slice(0, z),
          Q = b.slice(z),
          ct = W ? W.index : null;
        t: {
          var D = z + S - R;
          if ((ct !== null && ct !== D) || D < 0 || D > S) break t;
          var ut = O.slice(0, D),
            pt = O.slice(D);
          if (pt !== Q) break t;
          var rt = Math.min(z, D),
            mt = K.slice(0, rt),
            L = ut.slice(0, rt);
          if (mt !== L) break t;
          var P = K.slice(rt),
            k = ut.slice(rt);
          return A(mt, P, k, Q);
        }
        t: {
          if (ct !== null && ct !== z) break t;
          var $ = z,
            ut = O.slice(0, $),
            pt = O.slice($);
          if (ut !== K) break t;
          var nt = Math.min(R - $, S - $),
            ot = Q.slice(Q.length - nt),
            m = pt.slice(pt.length - nt);
          if (ot !== m) break t;
          var P = Q.slice(0, Q.length - nt),
            k = pt.slice(0, pt.length - nt);
          return A(K, P, k, ot);
        }
      }
      if (F.length > 0 && W && W.length === 0)
        t: {
          var mt = b.slice(0, F.index),
            ot = b.slice(F.index + F.length),
            rt = mt.length,
            nt = ot.length;
          if (S < rt + nt) break t;
          var L = O.slice(0, rt),
            m = O.slice(S - nt);
          if (mt !== L || ot !== m) break t;
          var P = b.slice(rt, R - nt),
            k = O.slice(rt, S - nt);
          return A(mt, P, k, ot);
        }
      return null;
    }
    function V(b, O, _, F) {
      return r(b, O, _, F, !0);
    }
    return (V.INSERT = t), (V.DELETE = e), (V.EQUAL = n), (vl = V), vl;
  }
  var hs = { exports: {} };
  hs.exports;
  var Nu;
  function Xh() {
    return (
      Nu ||
        ((Nu = 1),
        (function (e, t) {
          var n = 200,
            r = "__lodash_hash_undefined__",
            s = 9007199254740991,
            i = "[object Arguments]",
            o = "[object Array]",
            l = "[object Boolean]",
            a = "[object Date]",
            u = "[object Error]",
            f = "[object Function]",
            d = "[object GeneratorFunction]",
            h = "[object Map]",
            g = "[object Number]",
            w = "[object Object]",
            T = "[object Promise]",
            N = "[object RegExp]",
            C = "[object Set]",
            M = "[object String]",
            H = "[object Symbol]",
            Z = "[object WeakMap]",
            st = "[object ArrayBuffer]",
            vt = "[object DataView]",
            lt = "[object Float32Array]",
            A = "[object Float64Array]",
            E = "[object Int8Array]",
            V = "[object Int16Array]",
            b = "[object Int32Array]",
            O = "[object Uint8Array]",
            _ = "[object Uint8ClampedArray]",
            F = "[object Uint16Array]",
            W = "[object Uint32Array]",
            R = /[\\^$.*+?()[\]{}|]/g,
            S = /\w*$/,
            z = /^\[object .+?Constructor\]$/,
            K = /^(?:0|[1-9]\d*)$/,
            Q = {};
          (Q[i] =
            Q[o] =
            Q[st] =
            Q[vt] =
            Q[l] =
            Q[a] =
            Q[lt] =
            Q[A] =
            Q[E] =
            Q[V] =
            Q[b] =
            Q[h] =
            Q[g] =
            Q[w] =
            Q[N] =
            Q[C] =
            Q[M] =
            Q[H] =
            Q[O] =
            Q[_] =
            Q[F] =
            Q[W] =
              !0),
            (Q[u] = Q[f] = Q[Z] = !1);
          var ct = typeof In == "object" && In && In.Object === Object && In,
            D =
              typeof self == "object" && self && self.Object === Object && self,
            ut = ct || D || Function("return this")(),
            pt = t && !t.nodeType && t,
            rt = pt && !0 && e && !e.nodeType && e,
            mt = rt && rt.exports === pt;
          function L(c, p) {
            return c.set(p[0], p[1]), c;
          }
          function P(c, p) {
            return c.add(p), c;
          }
          function k(c, p) {
            for (
              var v = -1, B = c ? c.length : 0;
              ++v < B && p(c[v], v, c) !== !1;

            );
            return c;
          }
          function $(c, p) {
            for (var v = -1, B = p.length, Et = c.length; ++v < B; )
              c[Et + v] = p[v];
            return c;
          }
          function nt(c, p, v, B) {
            for (var Et = -1, yt = c ? c.length : 0; ++Et < yt; )
              v = p(v, c[Et], Et, c);
            return v;
          }
          function ot(c, p) {
            for (var v = -1, B = Array(c); ++v < c; ) B[v] = p(v);
            return B;
          }
          function m(c, p) {
            return c == null ? void 0 : c[p];
          }
          function y(c) {
            var p = !1;
            if (c != null && typeof c.toString != "function")
              try {
                p = !!(c + "");
              } catch {}
            return p;
          }
          function x(c) {
            var p = -1,
              v = Array(c.size);
            return (
              c.forEach(function (B, Et) {
                v[++p] = [Et, B];
              }),
              v
            );
          }
          function q(c, p) {
            return function (v) {
              return c(p(v));
            };
          }
          function I(c) {
            var p = -1,
              v = Array(c.size);
            return (
              c.forEach(function (B) {
                v[++p] = B;
              }),
              v
            );
          }
          var G = Array.prototype,
            tt = Function.prototype,
            J = Object.prototype,
            Y = ut["__core-js_shared__"],
            j = (function () {
              var c = /[^.]+$/.exec((Y && Y.keys && Y.keys.IE_PROTO) || "");
              return c ? "Symbol(src)_1." + c : "";
            })(),
            it = tt.toString,
            et = J.hasOwnProperty,
            X = J.toString,
            bt = RegExp(
              "^" +
                it
                  .call(et)
                  .replace(R, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?",
                  ) +
                "$",
            ),
            wt = mt ? ut.Buffer : void 0,
            Tt = ut.Symbol,
            xt = ut.Uint8Array,
            St = q(Object.getPrototypeOf, Object),
            Ot = Object.create,
            qt = J.propertyIsEnumerable,
            Ut = G.splice,
            $t = Object.getOwnPropertySymbols,
            ve = wt ? wt.isBuffer : void 0,
            Ft = q(Object.keys, Object),
            Wt = Oe(ut, "DataView"),
            He = Oe(ut, "Map"),
            Ce = Oe(ut, "Promise"),
            hr = Oe(ut, "Set"),
            Gr = Oe(ut, "WeakMap"),
            Hn = Oe(Object, "create"),
            Wr = le(Wt),
            zn = le(He),
            Zr = le(Ce),
            Yr = le(hr),
            Jr = le(Gr),
            Sn = Tt ? Tt.prototype : void 0,
            Qs = Sn ? Sn.valueOf : void 0;
          function ln(c) {
            var p = -1,
              v = c ? c.length : 0;
            for (this.clear(); ++p < v; ) {
              var B = c[p];
              this.set(B[0], B[1]);
            }
          }
          function vo() {
            this.__data__ = Hn ? Hn(null) : {};
          }
          function wo(c) {
            return this.has(c) && delete this.__data__[c];
          }
          function _o(c) {
            var p = this.__data__;
            if (Hn) {
              var v = p[c];
              return v === r ? void 0 : v;
            }
            return et.call(p, c) ? p[c] : void 0;
          }
          function Xs(c) {
            var p = this.__data__;
            return Hn ? p[c] !== void 0 : et.call(p, c);
          }
          function Qr(c, p) {
            var v = this.__data__;
            return (v[c] = Hn && p === void 0 ? r : p), this;
          }
          (ln.prototype.clear = vo),
            (ln.prototype.delete = wo),
            (ln.prototype.get = _o),
            (ln.prototype.has = Xs),
            (ln.prototype.set = Qr);
          function Zt(c) {
            var p = -1,
              v = c ? c.length : 0;
            for (this.clear(); ++p < v; ) {
              var B = c[p];
              this.set(B[0], B[1]);
            }
          }
          function xo() {
            this.__data__ = [];
          }
          function Eo(c) {
            var p = this.__data__,
              v = pr(p, c);
            if (v < 0) return !1;
            var B = p.length - 1;
            return v == B ? p.pop() : Ut.call(p, v, 1), !0;
          }
          function Ao(c) {
            var p = this.__data__,
              v = pr(p, c);
            return v < 0 ? void 0 : p[v][1];
          }
          function To(c) {
            return pr(this.__data__, c) > -1;
          }
          function So(c, p) {
            var v = this.__data__,
              B = pr(v, c);
            return B < 0 ? v.push([c, p]) : (v[B][1] = p), this;
          }
          (Zt.prototype.clear = xo),
            (Zt.prototype.delete = Eo),
            (Zt.prototype.get = Ao),
            (Zt.prototype.has = To),
            (Zt.prototype.set = So);
          function Qt(c) {
            var p = -1,
              v = c ? c.length : 0;
            for (this.clear(); ++p < v; ) {
              var B = c[p];
              this.set(B[0], B[1]);
            }
          }
          function No() {
            this.__data__ = {
              hash: new ln(),
              map: new (He || Zt)(),
              string: new ln(),
            };
          }
          function Co(c) {
            return Vn(this, c).delete(c);
          }
          function Oo(c) {
            return Vn(this, c).get(c);
          }
          function Lo(c) {
            return Vn(this, c).has(c);
          }
          function ko(c, p) {
            return Vn(this, c).set(c, p), this;
          }
          (Qt.prototype.clear = No),
            (Qt.prototype.delete = Co),
            (Qt.prototype.get = Oo),
            (Qt.prototype.has = Lo),
            (Qt.prototype.set = ko);
          function ue(c) {
            this.__data__ = new Zt(c);
          }
          function Ro() {
            this.__data__ = new Zt();
          }
          function Io(c) {
            return this.__data__.delete(c);
          }
          function qo(c) {
            return this.__data__.get(c);
          }
          function Mo(c) {
            return this.__data__.has(c);
          }
          function Po(c, p) {
            var v = this.__data__;
            if (v instanceof Zt) {
              var B = v.__data__;
              if (!He || B.length < n - 1) return B.push([c, p]), this;
              v = this.__data__ = new Qt(B);
            }
            return v.set(c, p), this;
          }
          (ue.prototype.clear = Ro),
            (ue.prototype.delete = Io),
            (ue.prototype.get = qo),
            (ue.prototype.has = Mo),
            (ue.prototype.set = Po);
          function dr(c, p) {
            var v = ns(c) || mr(c) ? ot(c.length, String) : [],
              B = v.length,
              Et = !!B;
            for (var yt in c)
              et.call(c, yt) &&
                !(Et && (yt == "length" || Yo(yt, B))) &&
                v.push(yt);
            return v;
          }
          function ti(c, p, v) {
            var B = c[p];
            (!(et.call(c, p) && ii(B, v)) || (v === void 0 && !(p in c))) &&
              (c[p] = v);
          }
          function pr(c, p) {
            for (var v = c.length; v--; ) if (ii(c[v][0], p)) return v;
            return -1;
          }
          function ze(c, p) {
            return c && es(p, ss(p), c);
          }
          function Xr(c, p, v, B, Et, yt, Ct) {
            var Nt;
            if ((B && (Nt = yt ? B(c, Et, yt, Ct) : B(c)), Nt !== void 0))
              return Nt;
            if (!Ve(c)) return c;
            var Ht = ns(c);
            if (Ht) {
              if (((Nt = Wo(c)), !p)) return Ko(c, Nt);
            } else {
              var Lt = cn(c),
                Xt = Lt == f || Lt == d;
              if (oi(c)) return gr(c, p);
              if (Lt == w || Lt == i || (Xt && !yt)) {
                if (y(c)) return yt ? c : {};
                if (((Nt = Ke(Xt ? {} : c)), !p)) return Vo(c, ze(Nt, c));
              } else {
                if (!Q[Lt]) return yt ? c : {};
                Nt = Zo(c, Lt, Xr, p);
              }
            }
            Ct || (Ct = new ue());
            var fe = Ct.get(c);
            if (fe) return fe;
            if ((Ct.set(c, Nt), !Ht)) var Kt = v ? Go(c) : ss(c);
            return (
              k(Kt || c, function (te, Yt) {
                Kt && ((Yt = te), (te = c[Yt])),
                  ti(Nt, Yt, Xr(te, p, v, B, Yt, c, Ct));
              }),
              Nt
            );
          }
          function Bo(c) {
            return Ve(c) ? Ot(c) : {};
          }
          function jo(c, p, v) {
            var B = p(c);
            return ns(c) ? B : $(B, v(c));
          }
          function Do(c) {
            return X.call(c);
          }
          function $o(c) {
            if (!Ve(c) || Qo(c)) return !1;
            var p = rs(c) || y(c) ? bt : z;
            return p.test(le(c));
          }
          function Uo(c) {
            if (!ri(c)) return Ft(c);
            var p = [];
            for (var v in Object(c))
              et.call(c, v) && v != "constructor" && p.push(v);
            return p;
          }
          function gr(c, p) {
            if (p) return c.slice();
            var v = new c.constructor(c.length);
            return c.copy(v), v;
          }
          function ts(c) {
            var p = new c.constructor(c.byteLength);
            return new xt(p).set(new xt(c)), p;
          }
          function Kn(c, p) {
            var v = p ? ts(c.buffer) : c.buffer;
            return new c.constructor(v, c.byteOffset, c.byteLength);
          }
          function ei(c, p, v) {
            var B = p ? v(x(c), !0) : x(c);
            return nt(B, L, new c.constructor());
          }
          function ni(c) {
            var p = new c.constructor(c.source, S.exec(c));
            return (p.lastIndex = c.lastIndex), p;
          }
          function Fo(c, p, v) {
            var B = p ? v(I(c), !0) : I(c);
            return nt(B, P, new c.constructor());
          }
          function Ho(c) {
            return Qs ? Object(Qs.call(c)) : {};
          }
          function zo(c, p) {
            var v = p ? ts(c.buffer) : c.buffer;
            return new c.constructor(v, c.byteOffset, c.length);
          }
          function Ko(c, p) {
            var v = -1,
              B = c.length;
            for (p || (p = Array(B)); ++v < B; ) p[v] = c[v];
            return p;
          }
          function es(c, p, v, B) {
            v || (v = {});
            for (var Et = -1, yt = p.length; ++Et < yt; ) {
              var Ct = p[Et],
                Nt = void 0;
              ti(v, Ct, Nt === void 0 ? c[Ct] : Nt);
            }
            return v;
          }
          function Vo(c, p) {
            return es(c, an(c), p);
          }
          function Go(c) {
            return jo(c, ss, an);
          }
          function Vn(c, p) {
            var v = c.__data__;
            return Jo(p) ? v[typeof p == "string" ? "string" : "hash"] : v.map;
          }
          function Oe(c, p) {
            var v = m(c, p);
            return $o(v) ? v : void 0;
          }
          var an = $t ? q($t, Object) : tl,
            cn = Do;
          ((Wt && cn(new Wt(new ArrayBuffer(1))) != vt) ||
            (He && cn(new He()) != h) ||
            (Ce && cn(Ce.resolve()) != T) ||
            (hr && cn(new hr()) != C) ||
            (Gr && cn(new Gr()) != Z)) &&
            (cn = function (c) {
              var p = X.call(c),
                v = p == w ? c.constructor : void 0,
                B = v ? le(v) : void 0;
              if (B)
                switch (B) {
                  case Wr:
                    return vt;
                  case zn:
                    return h;
                  case Zr:
                    return T;
                  case Yr:
                    return C;
                  case Jr:
                    return Z;
                }
              return p;
            });
          function Wo(c) {
            var p = c.length,
              v = c.constructor(p);
            return (
              p &&
                typeof c[0] == "string" &&
                et.call(c, "index") &&
                ((v.index = c.index), (v.input = c.input)),
              v
            );
          }
          function Ke(c) {
            return typeof c.constructor == "function" && !ri(c)
              ? Bo(St(c))
              : {};
          }
          function Zo(c, p, v, B) {
            var Et = c.constructor;
            switch (p) {
              case st:
                return ts(c);
              case l:
              case a:
                return new Et(+c);
              case vt:
                return Kn(c, B);
              case lt:
              case A:
              case E:
              case V:
              case b:
              case O:
              case _:
              case F:
              case W:
                return zo(c, B);
              case h:
                return ei(c, B, v);
              case g:
              case M:
                return new Et(c);
              case N:
                return ni(c);
              case C:
                return Fo(c, B, v);
              case H:
                return Ho(c);
            }
          }
          function Yo(c, p) {
            return (
              (p = p ?? s),
              !!p &&
                (typeof c == "number" || K.test(c)) &&
                c > -1 &&
                c % 1 == 0 &&
                c < p
            );
          }
          function Jo(c) {
            var p = typeof c;
            return p == "string" ||
              p == "number" ||
              p == "symbol" ||
              p == "boolean"
              ? c !== "__proto__"
              : c === null;
          }
          function Qo(c) {
            return !!j && j in c;
          }
          function ri(c) {
            var p = c && c.constructor,
              v = (typeof p == "function" && p.prototype) || J;
            return c === v;
          }
          function le(c) {
            if (c != null) {
              try {
                return it.call(c);
              } catch {}
              try {
                return c + "";
              } catch {}
            }
            return "";
          }
          function si(c) {
            return Xr(c, !0, !0);
          }
          function ii(c, p) {
            return c === p || (c !== c && p !== p);
          }
          function mr(c) {
            return (
              Xo(c) &&
              et.call(c, "callee") &&
              (!qt.call(c, "callee") || X.call(c) == i)
            );
          }
          var ns = Array.isArray;
          function br(c) {
            return c != null && li(c.length) && !rs(c);
          }
          function Xo(c) {
            return ai(c) && br(c);
          }
          var oi = ve || el;
          function rs(c) {
            var p = Ve(c) ? X.call(c) : "";
            return p == f || p == d;
          }
          function li(c) {
            return typeof c == "number" && c > -1 && c % 1 == 0 && c <= s;
          }
          function Ve(c) {
            var p = typeof c;
            return !!c && (p == "object" || p == "function");
          }
          function ai(c) {
            return !!c && typeof c == "object";
          }
          function ss(c) {
            return br(c) ? dr(c) : Uo(c);
          }
          function tl() {
            return [];
          }
          function el() {
            return !1;
          }
          e.exports = si;
        })(hs, hs.exports)),
      hs.exports
    );
  }
  var ds = { exports: {} };
  ds.exports;
  var Cu;
  function td() {
    return (
      Cu ||
        ((Cu = 1),
        (function (e, t) {
          var n = 200,
            r = "__lodash_hash_undefined__",
            s = 1,
            i = 2,
            o = 9007199254740991,
            l = "[object Arguments]",
            a = "[object Array]",
            u = "[object AsyncFunction]",
            f = "[object Boolean]",
            d = "[object Date]",
            h = "[object Error]",
            g = "[object Function]",
            w = "[object GeneratorFunction]",
            T = "[object Map]",
            N = "[object Number]",
            C = "[object Null]",
            M = "[object Object]",
            H = "[object Promise]",
            Z = "[object Proxy]",
            st = "[object RegExp]",
            vt = "[object Set]",
            lt = "[object String]",
            A = "[object Symbol]",
            E = "[object Undefined]",
            V = "[object WeakMap]",
            b = "[object ArrayBuffer]",
            O = "[object DataView]",
            _ = "[object Float32Array]",
            F = "[object Float64Array]",
            W = "[object Int8Array]",
            R = "[object Int16Array]",
            S = "[object Int32Array]",
            z = "[object Uint8Array]",
            K = "[object Uint8ClampedArray]",
            Q = "[object Uint16Array]",
            ct = "[object Uint32Array]",
            D = /[\\^$.*+?()[\]{}|]/g,
            ut = /^\[object .+?Constructor\]$/,
            pt = /^(?:0|[1-9]\d*)$/,
            rt = {};
          (rt[_] =
            rt[F] =
            rt[W] =
            rt[R] =
            rt[S] =
            rt[z] =
            rt[K] =
            rt[Q] =
            rt[ct] =
              !0),
            (rt[l] =
              rt[a] =
              rt[b] =
              rt[f] =
              rt[O] =
              rt[d] =
              rt[h] =
              rt[g] =
              rt[T] =
              rt[N] =
              rt[M] =
              rt[st] =
              rt[vt] =
              rt[lt] =
              rt[V] =
                !1);
          var mt = typeof In == "object" && In && In.Object === Object && In,
            L =
              typeof self == "object" && self && self.Object === Object && self,
            P = mt || L || Function("return this")(),
            k = t && !t.nodeType && t,
            $ = k && !0 && e && !e.nodeType && e,
            nt = $ && $.exports === k,
            ot = nt && mt.process,
            m = (function () {
              try {
                return ot && ot.binding && ot.binding("util");
              } catch {}
            })(),
            y = m && m.isTypedArray;
          function x(c, p) {
            for (
              var v = -1, B = c == null ? 0 : c.length, Et = 0, yt = [];
              ++v < B;

            ) {
              var Ct = c[v];
              p(Ct, v, c) && (yt[Et++] = Ct);
            }
            return yt;
          }
          function q(c, p) {
            for (var v = -1, B = p.length, Et = c.length; ++v < B; )
              c[Et + v] = p[v];
            return c;
          }
          function I(c, p) {
            for (var v = -1, B = c == null ? 0 : c.length; ++v < B; )
              if (p(c[v], v, c)) return !0;
            return !1;
          }
          function G(c, p) {
            for (var v = -1, B = Array(c); ++v < c; ) B[v] = p(v);
            return B;
          }
          function tt(c) {
            return function (p) {
              return c(p);
            };
          }
          function J(c, p) {
            return c.has(p);
          }
          function Y(c, p) {
            return c == null ? void 0 : c[p];
          }
          function j(c) {
            var p = -1,
              v = Array(c.size);
            return (
              c.forEach(function (B, Et) {
                v[++p] = [Et, B];
              }),
              v
            );
          }
          function it(c, p) {
            return function (v) {
              return c(p(v));
            };
          }
          function et(c) {
            var p = -1,
              v = Array(c.size);
            return (
              c.forEach(function (B) {
                v[++p] = B;
              }),
              v
            );
          }
          var X = Array.prototype,
            bt = Function.prototype,
            wt = Object.prototype,
            Tt = P["__core-js_shared__"],
            xt = bt.toString,
            St = wt.hasOwnProperty,
            Ot = (function () {
              var c = /[^.]+$/.exec((Tt && Tt.keys && Tt.keys.IE_PROTO) || "");
              return c ? "Symbol(src)_1." + c : "";
            })(),
            qt = wt.toString,
            Ut = RegExp(
              "^" +
                xt
                  .call(St)
                  .replace(D, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?",
                  ) +
                "$",
            ),
            $t = nt ? P.Buffer : void 0,
            ve = P.Symbol,
            Ft = P.Uint8Array,
            Wt = wt.propertyIsEnumerable,
            He = X.splice,
            Ce = ve ? ve.toStringTag : void 0,
            hr = Object.getOwnPropertySymbols,
            Gr = $t ? $t.isBuffer : void 0,
            Hn = it(Object.keys, Object),
            Wr = an(P, "DataView"),
            zn = an(P, "Map"),
            Zr = an(P, "Promise"),
            Yr = an(P, "Set"),
            Jr = an(P, "WeakMap"),
            Sn = an(Object, "create"),
            Qs = le(Wr),
            ln = le(zn),
            vo = le(Zr),
            wo = le(Yr),
            _o = le(Jr),
            Xs = ve ? ve.prototype : void 0,
            Qr = Xs ? Xs.valueOf : void 0;
          function Zt(c) {
            var p = -1,
              v = c == null ? 0 : c.length;
            for (this.clear(); ++p < v; ) {
              var B = c[p];
              this.set(B[0], B[1]);
            }
          }
          function xo() {
            (this.__data__ = Sn ? Sn(null) : {}), (this.size = 0);
          }
          function Eo(c) {
            var p = this.has(c) && delete this.__data__[c];
            return (this.size -= p ? 1 : 0), p;
          }
          function Ao(c) {
            var p = this.__data__;
            if (Sn) {
              var v = p[c];
              return v === r ? void 0 : v;
            }
            return St.call(p, c) ? p[c] : void 0;
          }
          function To(c) {
            var p = this.__data__;
            return Sn ? p[c] !== void 0 : St.call(p, c);
          }
          function So(c, p) {
            var v = this.__data__;
            return (
              (this.size += this.has(c) ? 0 : 1),
              (v[c] = Sn && p === void 0 ? r : p),
              this
            );
          }
          (Zt.prototype.clear = xo),
            (Zt.prototype.delete = Eo),
            (Zt.prototype.get = Ao),
            (Zt.prototype.has = To),
            (Zt.prototype.set = So);
          function Qt(c) {
            var p = -1,
              v = c == null ? 0 : c.length;
            for (this.clear(); ++p < v; ) {
              var B = c[p];
              this.set(B[0], B[1]);
            }
          }
          function No() {
            (this.__data__ = []), (this.size = 0);
          }
          function Co(c) {
            var p = this.__data__,
              v = gr(p, c);
            if (v < 0) return !1;
            var B = p.length - 1;
            return v == B ? p.pop() : He.call(p, v, 1), --this.size, !0;
          }
          function Oo(c) {
            var p = this.__data__,
              v = gr(p, c);
            return v < 0 ? void 0 : p[v][1];
          }
          function Lo(c) {
            return gr(this.__data__, c) > -1;
          }
          function ko(c, p) {
            var v = this.__data__,
              B = gr(v, c);
            return B < 0 ? (++this.size, v.push([c, p])) : (v[B][1] = p), this;
          }
          (Qt.prototype.clear = No),
            (Qt.prototype.delete = Co),
            (Qt.prototype.get = Oo),
            (Qt.prototype.has = Lo),
            (Qt.prototype.set = ko);
          function ue(c) {
            var p = -1,
              v = c == null ? 0 : c.length;
            for (this.clear(); ++p < v; ) {
              var B = c[p];
              this.set(B[0], B[1]);
            }
          }
          function Ro() {
            (this.size = 0),
              (this.__data__ = {
                hash: new Zt(),
                map: new (zn || Qt)(),
                string: new Zt(),
              });
          }
          function Io(c) {
            var p = Oe(this, c).delete(c);
            return (this.size -= p ? 1 : 0), p;
          }
          function qo(c) {
            return Oe(this, c).get(c);
          }
          function Mo(c) {
            return Oe(this, c).has(c);
          }
          function Po(c, p) {
            var v = Oe(this, c),
              B = v.size;
            return v.set(c, p), (this.size += v.size == B ? 0 : 1), this;
          }
          (ue.prototype.clear = Ro),
            (ue.prototype.delete = Io),
            (ue.prototype.get = qo),
            (ue.prototype.has = Mo),
            (ue.prototype.set = Po);
          function dr(c) {
            var p = -1,
              v = c == null ? 0 : c.length;
            for (this.__data__ = new ue(); ++p < v; ) this.add(c[p]);
          }
          function ti(c) {
            return this.__data__.set(c, r), this;
          }
          function pr(c) {
            return this.__data__.has(c);
          }
          (dr.prototype.add = dr.prototype.push = ti), (dr.prototype.has = pr);
          function ze(c) {
            var p = (this.__data__ = new Qt(c));
            this.size = p.size;
          }
          function Xr() {
            (this.__data__ = new Qt()), (this.size = 0);
          }
          function Bo(c) {
            var p = this.__data__,
              v = p.delete(c);
            return (this.size = p.size), v;
          }
          function jo(c) {
            return this.__data__.get(c);
          }
          function Do(c) {
            return this.__data__.has(c);
          }
          function $o(c, p) {
            var v = this.__data__;
            if (v instanceof Qt) {
              var B = v.__data__;
              if (!zn || B.length < n - 1)
                return B.push([c, p]), (this.size = ++v.size), this;
              v = this.__data__ = new ue(B);
            }
            return v.set(c, p), (this.size = v.size), this;
          }
          (ze.prototype.clear = Xr),
            (ze.prototype.delete = Bo),
            (ze.prototype.get = jo),
            (ze.prototype.has = Do),
            (ze.prototype.set = $o);
          function Uo(c, p) {
            var v = mr(c),
              B = !v && ii(c),
              Et = !v && !B && br(c),
              yt = !v && !B && !Et && ai(c),
              Ct = v || B || Et || yt,
              Nt = Ct ? G(c.length, String) : [],
              Ht = Nt.length;
            for (var Lt in c)
              St.call(c, Lt) &&
                !(
                  Ct &&
                  (Lt == "length" ||
                    (Et && (Lt == "offset" || Lt == "parent")) ||
                    (yt &&
                      (Lt == "buffer" ||
                        Lt == "byteLength" ||
                        Lt == "byteOffset")) ||
                    Zo(Lt, Ht))
                ) &&
                Nt.push(Lt);
            return Nt;
          }
          function gr(c, p) {
            for (var v = c.length; v--; ) if (si(c[v][0], p)) return v;
            return -1;
          }
          function ts(c, p, v) {
            var B = p(c);
            return mr(c) ? B : q(B, v(c));
          }
          function Kn(c) {
            return c == null
              ? c === void 0
                ? E
                : C
              : Ce && Ce in Object(c)
                ? cn(c)
                : ri(c);
          }
          function ei(c) {
            return Ve(c) && Kn(c) == l;
          }
          function ni(c, p, v, B, Et) {
            return c === p
              ? !0
              : c == null || p == null || (!Ve(c) && !Ve(p))
                ? c !== c && p !== p
                : Fo(c, p, v, B, ni, Et);
          }
          function Fo(c, p, v, B, Et, yt) {
            var Ct = mr(c),
              Nt = mr(p),
              Ht = Ct ? a : Ke(c),
              Lt = Nt ? a : Ke(p);
            (Ht = Ht == l ? M : Ht), (Lt = Lt == l ? M : Lt);
            var Xt = Ht == M,
              fe = Lt == M,
              Kt = Ht == Lt;
            if (Kt && br(c)) {
              if (!br(p)) return !1;
              (Ct = !0), (Xt = !1);
            }
            if (Kt && !Xt)
              return (
                yt || (yt = new ze()),
                Ct || ai(c)
                  ? es(c, p, v, B, Et, yt)
                  : Vo(c, p, Ht, v, B, Et, yt)
              );
            if (!(v & s)) {
              var te = Xt && St.call(c, "__wrapped__"),
                Yt = fe && St.call(p, "__wrapped__");
              if (te || Yt) {
                var Nn = te ? c.value() : c,
                  un = Yt ? p.value() : p;
                return yt || (yt = new ze()), Et(Nn, un, v, B, yt);
              }
            }
            return Kt ? (yt || (yt = new ze()), Go(c, p, v, B, Et, yt)) : !1;
          }
          function Ho(c) {
            if (!li(c) || Jo(c)) return !1;
            var p = oi(c) ? Ut : ut;
            return p.test(le(c));
          }
          function zo(c) {
            return Ve(c) && rs(c.length) && !!rt[Kn(c)];
          }
          function Ko(c) {
            if (!Qo(c)) return Hn(c);
            var p = [];
            for (var v in Object(c))
              St.call(c, v) && v != "constructor" && p.push(v);
            return p;
          }
          function es(c, p, v, B, Et, yt) {
            var Ct = v & s,
              Nt = c.length,
              Ht = p.length;
            if (Nt != Ht && !(Ct && Ht > Nt)) return !1;
            var Lt = yt.get(c);
            if (Lt && yt.get(p)) return Lt == p;
            var Xt = -1,
              fe = !0,
              Kt = v & i ? new dr() : void 0;
            for (yt.set(c, p), yt.set(p, c); ++Xt < Nt; ) {
              var te = c[Xt],
                Yt = p[Xt];
              if (B)
                var Nn = Ct ? B(Yt, te, Xt, p, c, yt) : B(te, Yt, Xt, c, p, yt);
              if (Nn !== void 0) {
                if (Nn) continue;
                fe = !1;
                break;
              }
              if (Kt) {
                if (
                  !I(p, function (un, Gn) {
                    if (!J(Kt, Gn) && (te === un || Et(te, un, v, B, yt)))
                      return Kt.push(Gn);
                  })
                ) {
                  fe = !1;
                  break;
                }
              } else if (!(te === Yt || Et(te, Yt, v, B, yt))) {
                fe = !1;
                break;
              }
            }
            return yt.delete(c), yt.delete(p), fe;
          }
          function Vo(c, p, v, B, Et, yt, Ct) {
            switch (v) {
              case O:
                if (
                  c.byteLength != p.byteLength ||
                  c.byteOffset != p.byteOffset
                )
                  return !1;
                (c = c.buffer), (p = p.buffer);
              case b:
                return !(
                  c.byteLength != p.byteLength || !yt(new Ft(c), new Ft(p))
                );
              case f:
              case d:
              case N:
                return si(+c, +p);
              case h:
                return c.name == p.name && c.message == p.message;
              case st:
              case lt:
                return c == p + "";
              case T:
                var Nt = j;
              case vt:
                var Ht = B & s;
                if ((Nt || (Nt = et), c.size != p.size && !Ht)) return !1;
                var Lt = Ct.get(c);
                if (Lt) return Lt == p;
                (B |= i), Ct.set(c, p);
                var Xt = es(Nt(c), Nt(p), B, Et, yt, Ct);
                return Ct.delete(c), Xt;
              case A:
                if (Qr) return Qr.call(c) == Qr.call(p);
            }
            return !1;
          }
          function Go(c, p, v, B, Et, yt) {
            var Ct = v & s,
              Nt = Vn(c),
              Ht = Nt.length,
              Lt = Vn(p),
              Xt = Lt.length;
            if (Ht != Xt && !Ct) return !1;
            for (var fe = Ht; fe--; ) {
              var Kt = Nt[fe];
              if (!(Ct ? Kt in p : St.call(p, Kt))) return !1;
            }
            var te = yt.get(c);
            if (te && yt.get(p)) return te == p;
            var Yt = !0;
            yt.set(c, p), yt.set(p, c);
            for (var Nn = Ct; ++fe < Ht; ) {
              Kt = Nt[fe];
              var un = c[Kt],
                Gn = p[Kt];
              if (B)
                var nc = Ct ? B(Gn, un, Kt, p, c, yt) : B(un, Gn, Kt, c, p, yt);
              if (!(nc === void 0 ? un === Gn || Et(un, Gn, v, B, yt) : nc)) {
                Yt = !1;
                break;
              }
              Nn || (Nn = Kt == "constructor");
            }
            if (Yt && !Nn) {
              var ci = c.constructor,
                ui = p.constructor;
              ci != ui &&
                "constructor" in c &&
                "constructor" in p &&
                !(
                  typeof ci == "function" &&
                  ci instanceof ci &&
                  typeof ui == "function" &&
                  ui instanceof ui
                ) &&
                (Yt = !1);
            }
            return yt.delete(c), yt.delete(p), Yt;
          }
          function Vn(c) {
            return ts(c, ss, Wo);
          }
          function Oe(c, p) {
            var v = c.__data__;
            return Yo(p) ? v[typeof p == "string" ? "string" : "hash"] : v.map;
          }
          function an(c, p) {
            var v = Y(c, p);
            return Ho(v) ? v : void 0;
          }
          function cn(c) {
            var p = St.call(c, Ce),
              v = c[Ce];
            try {
              c[Ce] = void 0;
              var B = !0;
            } catch {}
            var Et = qt.call(c);
            return B && (p ? (c[Ce] = v) : delete c[Ce]), Et;
          }
          var Wo = hr
              ? function (c) {
                  return c == null
                    ? []
                    : ((c = Object(c)),
                      x(hr(c), function (p) {
                        return Wt.call(c, p);
                      }));
                }
              : tl,
            Ke = Kn;
          ((Wr && Ke(new Wr(new ArrayBuffer(1))) != O) ||
            (zn && Ke(new zn()) != T) ||
            (Zr && Ke(Zr.resolve()) != H) ||
            (Yr && Ke(new Yr()) != vt) ||
            (Jr && Ke(new Jr()) != V)) &&
            (Ke = function (c) {
              var p = Kn(c),
                v = p == M ? c.constructor : void 0,
                B = v ? le(v) : "";
              if (B)
                switch (B) {
                  case Qs:
                    return O;
                  case ln:
                    return T;
                  case vo:
                    return H;
                  case wo:
                    return vt;
                  case _o:
                    return V;
                }
              return p;
            });
          function Zo(c, p) {
            return (
              (p = p ?? o),
              !!p &&
                (typeof c == "number" || pt.test(c)) &&
                c > -1 &&
                c % 1 == 0 &&
                c < p
            );
          }
          function Yo(c) {
            var p = typeof c;
            return p == "string" ||
              p == "number" ||
              p == "symbol" ||
              p == "boolean"
              ? c !== "__proto__"
              : c === null;
          }
          function Jo(c) {
            return !!Ot && Ot in c;
          }
          function Qo(c) {
            var p = c && c.constructor,
              v = (typeof p == "function" && p.prototype) || wt;
            return c === v;
          }
          function ri(c) {
            return qt.call(c);
          }
          function le(c) {
            if (c != null) {
              try {
                return xt.call(c);
              } catch {}
              try {
                return c + "";
              } catch {}
            }
            return "";
          }
          function si(c, p) {
            return c === p || (c !== c && p !== p);
          }
          var ii = ei(
              (function () {
                return arguments;
              })(),
            )
              ? ei
              : function (c) {
                  return Ve(c) && St.call(c, "callee") && !Wt.call(c, "callee");
                },
            mr = Array.isArray;
          function ns(c) {
            return c != null && rs(c.length) && !oi(c);
          }
          var br = Gr || el;
          function Xo(c, p) {
            return ni(c, p);
          }
          function oi(c) {
            if (!li(c)) return !1;
            var p = Kn(c);
            return p == g || p == w || p == u || p == Z;
          }
          function rs(c) {
            return typeof c == "number" && c > -1 && c % 1 == 0 && c <= o;
          }
          function li(c) {
            var p = typeof c;
            return c != null && (p == "object" || p == "function");
          }
          function Ve(c) {
            return c != null && typeof c == "object";
          }
          var ai = y ? tt(y) : zo;
          function ss(c) {
            return ns(c) ? Uo(c) : Ko(c);
          }
          function tl() {
            return [];
          }
          function el() {
            return !1;
          }
          e.exports = Xo;
        })(ds, ds.exports)),
      ds.exports
    );
  }
  var mi = {},
    Ou;
  function ow() {
    if (Ou) return mi;
    (Ou = 1), Object.defineProperty(mi, "__esModule", { value: !0 });
    const e = Xh(),
      t = td();
    var n;
    return (
      (function (r) {
        function s(a = {}, u = {}, f = !1) {
          typeof a != "object" && (a = {}), typeof u != "object" && (u = {});
          let d = e(u);
          f ||
            (d = Object.keys(d).reduce(
              (h, g) => (d[g] != null && (h[g] = d[g]), h),
              {},
            ));
          for (const h in a)
            a[h] !== void 0 && u[h] === void 0 && (d[h] = a[h]);
          return Object.keys(d).length > 0 ? d : void 0;
        }
        r.compose = s;
        function i(a = {}, u = {}) {
          typeof a != "object" && (a = {}), typeof u != "object" && (u = {});
          const f = Object.keys(a)
            .concat(Object.keys(u))
            .reduce(
              (d, h) => (
                t(a[h], u[h]) || (d[h] = u[h] === void 0 ? null : u[h]), d
              ),
              {},
            );
          return Object.keys(f).length > 0 ? f : void 0;
        }
        r.diff = i;
        function o(a = {}, u = {}) {
          a = a || {};
          const f = Object.keys(u).reduce(
            (d, h) => (u[h] !== a[h] && a[h] !== void 0 && (d[h] = u[h]), d),
            {},
          );
          return Object.keys(a).reduce(
            (d, h) => (a[h] !== u[h] && u[h] === void 0 && (d[h] = null), d),
            f,
          );
        }
        r.invert = o;
        function l(a, u, f = !1) {
          if (typeof a != "object") return u;
          if (typeof u != "object") return;
          if (!f) return u;
          const d = Object.keys(u).reduce(
            (h, g) => (a[g] === void 0 && (h[g] = u[g]), h),
            {},
          );
          return Object.keys(d).length > 0 ? d : void 0;
        }
        r.transform = l;
      })(n || (n = {})),
      (mi.default = n),
      mi
    );
  }
  var bi = {},
    Lu;
  function ed() {
    if (Lu) return bi;
    (Lu = 1), Object.defineProperty(bi, "__esModule", { value: !0 });
    var e;
    return (
      (function (t) {
        function n(r) {
          return typeof r.delete == "number"
            ? r.delete
            : typeof r.retain == "number"
              ? r.retain
              : typeof r.retain == "object" && r.retain !== null
                ? 1
                : typeof r.insert == "string"
                  ? r.insert.length
                  : 1;
        }
        t.length = n;
      })(e || (e = {})),
      (bi.default = e),
      bi
    );
  }
  var yi = {},
    ku;
  function lw() {
    if (ku) return yi;
    (ku = 1), Object.defineProperty(yi, "__esModule", { value: !0 });
    const e = ed();
    class t {
      constructor(r) {
        (this.ops = r), (this.index = 0), (this.offset = 0);
      }
      hasNext() {
        return this.peekLength() < 1 / 0;
      }
      next(r) {
        r || (r = 1 / 0);
        const s = this.ops[this.index];
        if (s) {
          const i = this.offset,
            o = e.default.length(s);
          if (
            (r >= o - i
              ? ((r = o - i), (this.index += 1), (this.offset = 0))
              : (this.offset += r),
            typeof s.delete == "number")
          )
            return { delete: r };
          {
            const l = {};
            return (
              s.attributes && (l.attributes = s.attributes),
              typeof s.retain == "number"
                ? (l.retain = r)
                : typeof s.retain == "object" && s.retain !== null
                  ? (l.retain = s.retain)
                  : typeof s.insert == "string"
                    ? (l.insert = s.insert.substr(i, r))
                    : (l.insert = s.insert),
              l
            );
          }
        } else return { retain: 1 / 0 };
      }
      peek() {
        return this.ops[this.index];
      }
      peekLength() {
        return this.ops[this.index]
          ? e.default.length(this.ops[this.index]) - this.offset
          : 1 / 0;
      }
      peekType() {
        const r = this.ops[this.index];
        return r
          ? typeof r.delete == "number"
            ? "delete"
            : typeof r.retain == "number" ||
                (typeof r.retain == "object" && r.retain !== null)
              ? "retain"
              : "insert"
          : "retain";
      }
      rest() {
        if (this.hasNext()) {
          if (this.offset === 0) return this.ops.slice(this.index);
          {
            const r = this.offset,
              s = this.index,
              i = this.next(),
              o = this.ops.slice(this.index);
            return (this.offset = r), (this.index = s), [i].concat(o);
          }
        } else return [];
      }
    }
    return (yi.default = t), yi;
  }
  var Ru;
  function aw() {
    return (
      Ru ||
        ((Ru = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.AttributeMap = t.OpIterator = t.Op = void 0);
          const n = iw(),
            r = Xh(),
            s = td(),
            i = ow();
          t.AttributeMap = i.default;
          const o = ed();
          t.Op = o.default;
          const l = lw();
          t.OpIterator = l.default;
          const a = "\0",
            u = (d, h) => {
              if (typeof d != "object" || d === null)
                throw new Error(`cannot retain a ${typeof d}`);
              if (typeof h != "object" || h === null)
                throw new Error(`cannot retain a ${typeof h}`);
              const g = Object.keys(d)[0];
              if (!g || g !== Object.keys(h)[0])
                throw new Error(
                  `embed types not matched: ${g} != ${Object.keys(h)[0]}`,
                );
              return [g, d[g], h[g]];
            };
          class f {
            constructor(h) {
              Array.isArray(h)
                ? (this.ops = h)
                : h != null && Array.isArray(h.ops)
                  ? (this.ops = h.ops)
                  : (this.ops = []);
            }
            static registerEmbed(h, g) {
              this.handlers[h] = g;
            }
            static unregisterEmbed(h) {
              delete this.handlers[h];
            }
            static getHandler(h) {
              const g = this.handlers[h];
              if (!g) throw new Error(`no handlers for embed type "${h}"`);
              return g;
            }
            insert(h, g) {
              const w = {};
              return typeof h == "string" && h.length === 0
                ? this
                : ((w.insert = h),
                  g != null &&
                    typeof g == "object" &&
                    Object.keys(g).length > 0 &&
                    (w.attributes = g),
                  this.push(w));
            }
            delete(h) {
              return h <= 0 ? this : this.push({ delete: h });
            }
            retain(h, g) {
              if (typeof h == "number" && h <= 0) return this;
              const w = { retain: h };
              return (
                g != null &&
                  typeof g == "object" &&
                  Object.keys(g).length > 0 &&
                  (w.attributes = g),
                this.push(w)
              );
            }
            push(h) {
              let g = this.ops.length,
                w = this.ops[g - 1];
              if (((h = r(h)), typeof w == "object")) {
                if (typeof h.delete == "number" && typeof w.delete == "number")
                  return (
                    (this.ops[g - 1] = { delete: w.delete + h.delete }), this
                  );
                if (
                  typeof w.delete == "number" &&
                  h.insert != null &&
                  ((g -= 1), (w = this.ops[g - 1]), typeof w != "object")
                )
                  return this.ops.unshift(h), this;
                if (s(h.attributes, w.attributes)) {
                  if (
                    typeof h.insert == "string" &&
                    typeof w.insert == "string"
                  )
                    return (
                      (this.ops[g - 1] = { insert: w.insert + h.insert }),
                      typeof h.attributes == "object" &&
                        (this.ops[g - 1].attributes = h.attributes),
                      this
                    );
                  if (
                    typeof h.retain == "number" &&
                    typeof w.retain == "number"
                  )
                    return (
                      (this.ops[g - 1] = { retain: w.retain + h.retain }),
                      typeof h.attributes == "object" &&
                        (this.ops[g - 1].attributes = h.attributes),
                      this
                    );
                }
              }
              return (
                g === this.ops.length
                  ? this.ops.push(h)
                  : this.ops.splice(g, 0, h),
                this
              );
            }
            chop() {
              const h = this.ops[this.ops.length - 1];
              return (
                h &&
                  typeof h.retain == "number" &&
                  !h.attributes &&
                  this.ops.pop(),
                this
              );
            }
            filter(h) {
              return this.ops.filter(h);
            }
            forEach(h) {
              this.ops.forEach(h);
            }
            map(h) {
              return this.ops.map(h);
            }
            partition(h) {
              const g = [],
                w = [];
              return (
                this.forEach((T) => {
                  (h(T) ? g : w).push(T);
                }),
                [g, w]
              );
            }
            reduce(h, g) {
              return this.ops.reduce(h, g);
            }
            changeLength() {
              return this.reduce(
                (h, g) =>
                  g.insert
                    ? h + o.default.length(g)
                    : g.delete
                      ? h - g.delete
                      : h,
                0,
              );
            }
            length() {
              return this.reduce((h, g) => h + o.default.length(g), 0);
            }
            slice(h = 0, g = 1 / 0) {
              const w = [],
                T = new l.default(this.ops);
              let N = 0;
              for (; N < g && T.hasNext(); ) {
                let C;
                N < h ? (C = T.next(h - N)) : ((C = T.next(g - N)), w.push(C)),
                  (N += o.default.length(C));
              }
              return new f(w);
            }
            compose(h) {
              const g = new l.default(this.ops),
                w = new l.default(h.ops),
                T = [],
                N = w.peek();
              if (
                N != null &&
                typeof N.retain == "number" &&
                N.attributes == null
              ) {
                let M = N.retain;
                for (; g.peekType() === "insert" && g.peekLength() <= M; )
                  (M -= g.peekLength()), T.push(g.next());
                N.retain - M > 0 && w.next(N.retain - M);
              }
              const C = new f(T);
              for (; g.hasNext() || w.hasNext(); )
                if (w.peekType() === "insert") C.push(w.next());
                else if (g.peekType() === "delete") C.push(g.next());
                else {
                  const M = Math.min(g.peekLength(), w.peekLength()),
                    H = g.next(M),
                    Z = w.next(M);
                  if (Z.retain) {
                    const st = {};
                    if (typeof H.retain == "number")
                      st.retain = typeof Z.retain == "number" ? M : Z.retain;
                    else if (typeof Z.retain == "number")
                      H.retain == null
                        ? (st.insert = H.insert)
                        : (st.retain = H.retain);
                    else {
                      const lt = H.retain == null ? "insert" : "retain",
                        [A, E, V] = u(H[lt], Z.retain),
                        b = f.getHandler(A);
                      st[lt] = { [A]: b.compose(E, V, lt === "retain") };
                    }
                    const vt = i.default.compose(
                      H.attributes,
                      Z.attributes,
                      typeof H.retain == "number",
                    );
                    if (
                      (vt && (st.attributes = vt),
                      C.push(st),
                      !w.hasNext() && s(C.ops[C.ops.length - 1], st))
                    ) {
                      const lt = new f(g.rest());
                      return C.concat(lt).chop();
                    }
                  } else
                    typeof Z.delete == "number" &&
                      (typeof H.retain == "number" ||
                        (typeof H.retain == "object" && H.retain !== null)) &&
                      C.push(Z);
                }
              return C.chop();
            }
            concat(h) {
              const g = new f(this.ops.slice());
              return (
                h.ops.length > 0 &&
                  (g.push(h.ops[0]), (g.ops = g.ops.concat(h.ops.slice(1)))),
                g
              );
            }
            diff(h, g) {
              if (this.ops === h.ops) return new f();
              const w = [this, h].map((H) =>
                  H.map((Z) => {
                    if (Z.insert != null)
                      return typeof Z.insert == "string" ? Z.insert : a;
                    const st = H === h ? "on" : "with";
                    throw new Error("diff() called " + st + " non-document");
                  }).join(""),
                ),
                T = new f(),
                N = n(w[0], w[1], g, !0),
                C = new l.default(this.ops),
                M = new l.default(h.ops);
              return (
                N.forEach((H) => {
                  let Z = H[1].length;
                  for (; Z > 0; ) {
                    let st = 0;
                    switch (H[0]) {
                      case n.INSERT:
                        (st = Math.min(M.peekLength(), Z)), T.push(M.next(st));
                        break;
                      case n.DELETE:
                        (st = Math.min(Z, C.peekLength())),
                          C.next(st),
                          T.delete(st);
                        break;
                      case n.EQUAL:
                        st = Math.min(C.peekLength(), M.peekLength(), Z);
                        const vt = C.next(st),
                          lt = M.next(st);
                        s(vt.insert, lt.insert)
                          ? T.retain(
                              st,
                              i.default.diff(vt.attributes, lt.attributes),
                            )
                          : T.push(lt).delete(st);
                        break;
                    }
                    Z -= st;
                  }
                }),
                T.chop()
              );
            }
            eachLine(
              h,
              g = `
`,
            ) {
              const w = new l.default(this.ops);
              let T = new f(),
                N = 0;
              for (; w.hasNext(); ) {
                if (w.peekType() !== "insert") return;
                const C = w.peek(),
                  M = o.default.length(C) - w.peekLength(),
                  H =
                    typeof C.insert == "string"
                      ? C.insert.indexOf(g, M) - M
                      : -1;
                if (H < 0) T.push(w.next());
                else if (H > 0) T.push(w.next(H));
                else {
                  if (h(T, w.next(1).attributes || {}, N) === !1) return;
                  (N += 1), (T = new f());
                }
              }
              T.length() > 0 && h(T, {}, N);
            }
            invert(h) {
              const g = new f();
              return (
                this.reduce((w, T) => {
                  if (T.insert) g.delete(o.default.length(T));
                  else {
                    if (typeof T.retain == "number" && T.attributes == null)
                      return g.retain(T.retain), w + T.retain;
                    if (T.delete || typeof T.retain == "number") {
                      const N = T.delete || T.retain;
                      return (
                        h.slice(w, w + N).forEach((M) => {
                          T.delete
                            ? g.push(M)
                            : T.retain &&
                              T.attributes &&
                              g.retain(
                                o.default.length(M),
                                i.default.invert(T.attributes, M.attributes),
                              );
                        }),
                        w + N
                      );
                    } else if (
                      typeof T.retain == "object" &&
                      T.retain !== null
                    ) {
                      const N = h.slice(w, w + 1),
                        C = new l.default(N.ops).next(),
                        [M, H, Z] = u(T.retain, C.insert),
                        st = f.getHandler(M);
                      return (
                        g.retain(
                          { [M]: st.invert(H, Z) },
                          i.default.invert(T.attributes, C.attributes),
                        ),
                        w + 1
                      );
                    }
                  }
                  return w;
                }, 0),
                g.chop()
              );
            }
            transform(h, g = !1) {
              if (((g = !!g), typeof h == "number"))
                return this.transformPosition(h, g);
              const w = h,
                T = new l.default(this.ops),
                N = new l.default(w.ops),
                C = new f();
              for (; T.hasNext() || N.hasNext(); )
                if (
                  T.peekType() === "insert" &&
                  (g || N.peekType() !== "insert")
                )
                  C.retain(o.default.length(T.next()));
                else if (N.peekType() === "insert") C.push(N.next());
                else {
                  const M = Math.min(T.peekLength(), N.peekLength()),
                    H = T.next(M),
                    Z = N.next(M);
                  if (H.delete) continue;
                  if (Z.delete) C.push(Z);
                  else {
                    const st = H.retain,
                      vt = Z.retain;
                    let lt = typeof vt == "object" && vt !== null ? vt : M;
                    if (
                      typeof st == "object" &&
                      st !== null &&
                      typeof vt == "object" &&
                      vt !== null
                    ) {
                      const A = Object.keys(st)[0];
                      if (A === Object.keys(vt)[0]) {
                        const E = f.getHandler(A);
                        E && (lt = { [A]: E.transform(st[A], vt[A], g) });
                      }
                    }
                    C.retain(
                      lt,
                      i.default.transform(H.attributes, Z.attributes, g),
                    );
                  }
                }
              return C.chop();
            }
            transformPosition(h, g = !1) {
              g = !!g;
              const w = new l.default(this.ops);
              let T = 0;
              for (; w.hasNext() && T <= h; ) {
                const N = w.peekLength(),
                  C = w.peekType();
                if ((w.next(), C === "delete")) {
                  h -= Math.min(N, h - T);
                  continue;
                } else C === "insert" && (T < h || !g) && (h += N);
                T += N;
              }
              return h;
            }
          }
          (f.Op = o.default),
            (f.OpIterator = l.default),
            (f.AttributeMap = i.default),
            (f.handlers = {}),
            (t.default = f),
            (e.exports = f),
            (e.exports.default = f);
        })(gi, gi.exports)),
      gi.exports
    );
  }
  var Te = aw();
  const dt = Ia(Te);
  class Ue extends ye {
    static value() {}
    optimize() {
      (this.prev || this.next) && this.remove();
    }
    length() {
      return 0;
    }
    value() {
      return "";
    }
  }
  Ue.blotName = "break";
  Ue.tagName = "BR";
  let De = class extends Zi {};
  const cw = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  function mo(e) {
    return e.replace(/[&<>"']/g, (t) => cw[t]);
  }
  const Ze = class Ze extends za {
    static compare(t, n) {
      const r = Ze.order.indexOf(t),
        s = Ze.order.indexOf(n);
      return r >= 0 || s >= 0 ? r - s : t === n ? 0 : t < n ? -1 : 1;
    }
    formatAt(t, n, r, s) {
      if (
        Ze.compare(this.statics.blotName, r) < 0 &&
        this.scroll.query(r, gt.BLOT)
      ) {
        const i = this.isolate(t, n);
        s && i.wrap(r, s);
      } else super.formatAt(t, n, r, s);
    }
    optimize(t) {
      if (
        (super.optimize(t),
        this.parent instanceof Ze &&
          Ze.compare(this.statics.blotName, this.parent.statics.blotName) > 0)
      ) {
        const n = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(n), n.wrap(this);
      }
    }
  };
  at(Ze, "allowedChildren", [Ze, Ue, ye, De]),
    at(Ze, "order", [
      "cursor",
      "inline",
      "link",
      "underline",
      "strike",
      "italic",
      "bold",
      "script",
      "code",
    ]);
  let sn = Ze;
  const Iu = 1;
  class Jt extends js {
    constructor() {
      super(...arguments);
      at(this, "cache", {});
    }
    delta() {
      return (
        this.cache.delta == null && (this.cache.delta = nd(this)),
        this.cache.delta
      );
    }
    deleteAt(n, r) {
      super.deleteAt(n, r), (this.cache = {});
    }
    formatAt(n, r, s, i) {
      r <= 0 ||
        (this.scroll.query(s, gt.BLOCK)
          ? n + r === this.length() && this.format(s, i)
          : super.formatAt(n, Math.min(r, this.length() - n - 1), s, i),
        (this.cache = {}));
    }
    insertAt(n, r, s) {
      if (s != null) {
        super.insertAt(n, r, s), (this.cache = {});
        return;
      }
      if (r.length === 0) return;
      const i = r.split(`
`),
        o = i.shift();
      o.length > 0 &&
        (n < this.length() - 1 || this.children.tail == null
          ? super.insertAt(Math.min(n, this.length() - 1), o)
          : this.children.tail.insertAt(this.children.tail.length(), o),
        (this.cache = {}));
      let l = this;
      i.reduce(
        (a, u) => ((l = l.split(a, !0)), l.insertAt(0, u), u.length),
        n + o.length,
      );
    }
    insertBefore(n, r) {
      const { head: s } = this.children;
      super.insertBefore(n, r),
        s instanceof Ue && s.remove(),
        (this.cache = {});
    }
    length() {
      return (
        this.cache.length == null && (this.cache.length = super.length() + Iu),
        this.cache.length
      );
    }
    moveChildren(n, r) {
      super.moveChildren(n, r), (this.cache = {});
    }
    optimize(n) {
      super.optimize(n), (this.cache = {});
    }
    path(n) {
      return super.path(n, !0);
    }
    removeChild(n) {
      super.removeChild(n), (this.cache = {});
    }
    split(n) {
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (r && (n === 0 || n >= this.length() - Iu)) {
        const i = this.clone();
        return n === 0
          ? (this.parent.insertBefore(i, this), this)
          : (this.parent.insertBefore(i, this.next), i);
      }
      const s = super.split(n, r);
      return (this.cache = {}), s;
    }
  }
  Jt.blotName = "block";
  Jt.tagName = "P";
  Jt.defaultChild = Ue;
  Jt.allowedChildren = [Ue, sn, ye, De];
  class Ae extends ye {
    attach() {
      super.attach(), (this.attributes = new po(this.domNode));
    }
    delta() {
      return new dt().insert(this.value(), {
        ...this.formats(),
        ...this.attributes.values(),
      });
    }
    format(t, n) {
      const r = this.scroll.query(t, gt.BLOCK_ATTRIBUTE);
      r != null && this.attributes.attribute(r, n);
    }
    formatAt(t, n, r, s) {
      this.format(r, s);
    }
    insertAt(t, n, r) {
      if (r != null) {
        super.insertAt(t, n, r);
        return;
      }
      const s = n.split(`
`),
        i = s.pop(),
        o = s.map((a) => {
          const u = this.scroll.create(Jt.blotName);
          return u.insertAt(0, a), u;
        }),
        l = this.split(t);
      o.forEach((a) => {
        this.parent.insertBefore(a, l);
      }),
        i && this.parent.insertBefore(this.scroll.create("text", i), l);
    }
  }
  Ae.scope = gt.BLOCK_BLOT;
  function nd(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e
      .descendants(se)
      .reduce(
        (n, r) => (r.length() === 0 ? n : n.insert(r.value(), xe(r, {}, t))),
        new dt(),
      )
      .insert(
        `
`,
        xe(e),
      );
  }
  function xe(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return e == null ||
      ("formats" in e &&
        typeof e.formats == "function" &&
        ((t = { ...t, ...e.formats() }), n && delete t["code-token"]),
      e.parent == null ||
        e.parent.statics.blotName === "scroll" ||
        e.parent.statics.scope !== e.statics.scope)
      ? t
      : xe(e.parent, t, n);
  }
  const we = class we extends ye {
    static value() {}
    constructor(t, n, r) {
      super(t, n),
        (this.selection = r),
        (this.textNode = document.createTextNode(we.CONTENTS)),
        this.domNode.appendChild(this.textNode),
        (this.savedLength = 0);
    }
    detach() {
      this.parent != null && this.parent.removeChild(this);
    }
    format(t, n) {
      if (this.savedLength !== 0) {
        super.format(t, n);
        return;
      }
      let r = this,
        s = 0;
      for (; r != null && r.statics.scope !== gt.BLOCK_BLOT; )
        (s += r.offset(r.parent)), (r = r.parent);
      r != null &&
        ((this.savedLength = we.CONTENTS.length),
        r.optimize(),
        r.formatAt(s, we.CONTENTS.length, t, n),
        (this.savedLength = 0));
    }
    index(t, n) {
      return t === this.textNode ? 0 : super.index(t, n);
    }
    length() {
      return this.savedLength;
    }
    position() {
      return [this.textNode, this.textNode.data.length];
    }
    remove() {
      super.remove(), (this.parent = null);
    }
    restore() {
      if (this.selection.composing || this.parent == null) return null;
      const t = this.selection.getNativeRange();
      for (
        ;
        this.domNode.lastChild != null &&
        this.domNode.lastChild !== this.textNode;

      )
        this.domNode.parentNode.insertBefore(
          this.domNode.lastChild,
          this.domNode,
        );
      const n = this.prev instanceof De ? this.prev : null,
        r = n ? n.length() : 0,
        s = this.next instanceof De ? this.next : null,
        i = s ? s.text : "",
        { textNode: o } = this,
        l = o.data.split(we.CONTENTS).join("");
      o.data = we.CONTENTS;
      let a;
      if (n)
        (a = n), (l || s) && (n.insertAt(n.length(), l + i), s && s.remove());
      else if (s) (a = s), s.insertAt(0, l);
      else {
        const u = document.createTextNode(l);
        (a = this.scroll.create(u)), this.parent.insertBefore(a, this);
      }
      if ((this.remove(), t)) {
        const u = (h, g) =>
            n && h === n.domNode
              ? g
              : h === o
                ? r + g - 1
                : s && h === s.domNode
                  ? r + l.length + g
                  : null,
          f = u(t.start.node, t.start.offset),
          d = u(t.end.node, t.end.offset);
        if (f !== null && d !== null)
          return {
            startNode: a.domNode,
            startOffset: f,
            endNode: a.domNode,
            endOffset: d,
          };
      }
      return null;
    }
    update(t, n) {
      if (
        t.some((r) => r.type === "characterData" && r.target === this.textNode)
      ) {
        const r = this.restore();
        r && (n.range = r);
      }
    }
    optimize(t) {
      super.optimize(t);
      let { parent: n } = this;
      for (; n; ) {
        if (n.domNode.tagName === "A") {
          (this.savedLength = we.CONTENTS.length),
            n.isolate(this.offset(n), this.length()).unwrap(),
            (this.savedLength = 0);
          break;
        }
        n = n.parent;
      }
    }
    value() {
      return "";
    }
  };
  at(we, "blotName", "cursor"),
    at(we, "className", "ql-cursor"),
    at(we, "tagName", "span"),
    at(we, "CONTENTS", "\uFEFF");
  let Hr = we;
  var wl = { exports: {} },
    qu;
  function uw() {
    return (
      qu ||
        ((qu = 1),
        (function (e) {
          var t = Object.prototype.hasOwnProperty,
            n = "~";
          function r() {}
          Object.create &&
            ((r.prototype = Object.create(null)),
            new r().__proto__ || (n = !1));
          function s(a, u, f) {
            (this.fn = a), (this.context = u), (this.once = f || !1);
          }
          function i(a, u, f, d, h) {
            if (typeof f != "function")
              throw new TypeError("The listener must be a function");
            var g = new s(f, d || a, h),
              w = n ? n + u : u;
            return (
              a._events[w]
                ? a._events[w].fn
                  ? (a._events[w] = [a._events[w], g])
                  : a._events[w].push(g)
                : ((a._events[w] = g), a._eventsCount++),
              a
            );
          }
          function o(a, u) {
            --a._eventsCount === 0
              ? (a._events = new r())
              : delete a._events[u];
          }
          function l() {
            (this._events = new r()), (this._eventsCount = 0);
          }
          (l.prototype.eventNames = function () {
            var u = [],
              f,
              d;
            if (this._eventsCount === 0) return u;
            for (d in (f = this._events))
              t.call(f, d) && u.push(n ? d.slice(1) : d);
            return Object.getOwnPropertySymbols
              ? u.concat(Object.getOwnPropertySymbols(f))
              : u;
          }),
            (l.prototype.listeners = function (u) {
              var f = n ? n + u : u,
                d = this._events[f];
              if (!d) return [];
              if (d.fn) return [d.fn];
              for (var h = 0, g = d.length, w = new Array(g); h < g; h++)
                w[h] = d[h].fn;
              return w;
            }),
            (l.prototype.listenerCount = function (u) {
              var f = n ? n + u : u,
                d = this._events[f];
              return d ? (d.fn ? 1 : d.length) : 0;
            }),
            (l.prototype.emit = function (u, f, d, h, g, w) {
              var T = n ? n + u : u;
              if (!this._events[T]) return !1;
              var N = this._events[T],
                C = arguments.length,
                M,
                H;
              if (N.fn) {
                switch (
                  (N.once && this.removeListener(u, N.fn, void 0, !0), C)
                ) {
                  case 1:
                    return N.fn.call(N.context), !0;
                  case 2:
                    return N.fn.call(N.context, f), !0;
                  case 3:
                    return N.fn.call(N.context, f, d), !0;
                  case 4:
                    return N.fn.call(N.context, f, d, h), !0;
                  case 5:
                    return N.fn.call(N.context, f, d, h, g), !0;
                  case 6:
                    return N.fn.call(N.context, f, d, h, g, w), !0;
                }
                for (H = 1, M = new Array(C - 1); H < C; H++)
                  M[H - 1] = arguments[H];
                N.fn.apply(N.context, M);
              } else {
                var Z = N.length,
                  st;
                for (H = 0; H < Z; H++)
                  switch (
                    (N[H].once && this.removeListener(u, N[H].fn, void 0, !0),
                    C)
                  ) {
                    case 1:
                      N[H].fn.call(N[H].context);
                      break;
                    case 2:
                      N[H].fn.call(N[H].context, f);
                      break;
                    case 3:
                      N[H].fn.call(N[H].context, f, d);
                      break;
                    case 4:
                      N[H].fn.call(N[H].context, f, d, h);
                      break;
                    default:
                      if (!M)
                        for (st = 1, M = new Array(C - 1); st < C; st++)
                          M[st - 1] = arguments[st];
                      N[H].fn.apply(N[H].context, M);
                  }
              }
              return !0;
            }),
            (l.prototype.on = function (u, f, d) {
              return i(this, u, f, d, !1);
            }),
            (l.prototype.once = function (u, f, d) {
              return i(this, u, f, d, !0);
            }),
            (l.prototype.removeListener = function (u, f, d, h) {
              var g = n ? n + u : u;
              if (!this._events[g]) return this;
              if (!f) return o(this, g), this;
              var w = this._events[g];
              if (w.fn)
                w.fn === f &&
                  (!h || w.once) &&
                  (!d || w.context === d) &&
                  o(this, g);
              else {
                for (var T = 0, N = [], C = w.length; T < C; T++)
                  (w[T].fn !== f ||
                    (h && !w[T].once) ||
                    (d && w[T].context !== d)) &&
                    N.push(w[T]);
                N.length
                  ? (this._events[g] = N.length === 1 ? N[0] : N)
                  : o(this, g);
              }
              return this;
            }),
            (l.prototype.removeAllListeners = function (u) {
              var f;
              return (
                u
                  ? ((f = n ? n + u : u), this._events[f] && o(this, f))
                  : ((this._events = new r()), (this._eventsCount = 0)),
                this
              );
            }),
            (l.prototype.off = l.prototype.removeListener),
            (l.prototype.addListener = l.prototype.on),
            (l.prefixed = n),
            (l.EventEmitter = l),
            (e.exports = l);
        })(wl)),
      wl.exports
    );
  }
  var fw = uw();
  const hw = Ia(fw),
    ea = new WeakMap(),
    na = ["error", "warn", "log", "info"];
  let ra = "warn";
  function rd(e) {
    if (ra && na.indexOf(e) <= na.indexOf(ra)) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      console[e](...n);
    }
  }
  function Tn(e) {
    return na.reduce((t, n) => ((t[n] = rd.bind(console, n, e)), t), {});
  }
  Tn.level = (e) => {
    ra = e;
  };
  rd.level = Tn.level;
  const _l = Tn("quill:events"),
    dw = ["selectionchange", "mousedown", "mouseup", "click"];
  dw.forEach((e) => {
    document.addEventListener(e, function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
        const i = ea.get(s);
        i && i.emitter && i.emitter.handleDOM(...n);
      });
    });
  });
  class ft extends hw {
    constructor() {
      super(), (this.domListeners = {}), this.on("error", _l.error);
    }
    emit() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return _l.log.call(_l, ...n), super.emit(...n);
    }
    handleDOM(t) {
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
        s < n;
        s++
      )
        r[s - 1] = arguments[s];
      (this.domListeners[t.type] || []).forEach((i) => {
        let { node: o, handler: l } = i;
        (t.target === o || o.contains(t.target)) && l(t, ...r);
      });
    }
    listenDOM(t, n, r) {
      this.domListeners[t] || (this.domListeners[t] = []),
        this.domListeners[t].push({ node: n, handler: r });
    }
  }
  at(ft, "events", {
    EDITOR_CHANGE: "editor-change",
    SCROLL_BEFORE_UPDATE: "scroll-before-update",
    SCROLL_BLOT_MOUNT: "scroll-blot-mount",
    SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
    SCROLL_OPTIMIZE: "scroll-optimize",
    SCROLL_UPDATE: "scroll-update",
    SCROLL_EMBED_UPDATE: "scroll-embed-update",
    SELECTION_CHANGE: "selection-change",
    TEXT_CHANGE: "text-change",
    COMPOSITION_BEFORE_START: "composition-before-start",
    COMPOSITION_START: "composition-start",
    COMPOSITION_BEFORE_END: "composition-before-end",
    COMPOSITION_END: "composition-end",
  }),
    at(ft, "sources", { API: "api", SILENT: "silent", USER: "user" });
  const xl = Tn("quill:selection");
  class sr {
    constructor(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      (this.index = t), (this.length = n);
    }
  }
  class pw {
    constructor(t, n) {
      (this.emitter = n),
        (this.scroll = t),
        (this.composing = !1),
        (this.mouseDown = !1),
        (this.root = this.scroll.domNode),
        (this.cursor = this.scroll.create("cursor", this)),
        (this.savedRange = new sr(0, 0)),
        (this.lastRange = this.savedRange),
        (this.lastNative = null),
        this.handleComposition(),
        this.handleDragging(),
        this.emitter.listenDOM("selectionchange", document, () => {
          !this.mouseDown &&
            !this.composing &&
            setTimeout(this.update.bind(this, ft.sources.USER), 1);
        }),
        this.emitter.on(ft.events.SCROLL_BEFORE_UPDATE, () => {
          if (!this.hasFocus()) return;
          const r = this.getNativeRange();
          r != null &&
            r.start.node !== this.cursor.textNode &&
            this.emitter.once(ft.events.SCROLL_UPDATE, (s, i) => {
              try {
                this.root.contains(r.start.node) &&
                  this.root.contains(r.end.node) &&
                  this.setNativeRange(
                    r.start.node,
                    r.start.offset,
                    r.end.node,
                    r.end.offset,
                  );
                const o = i.some(
                  (l) =>
                    l.type === "characterData" ||
                    l.type === "childList" ||
                    (l.type === "attributes" && l.target === this.root),
                );
                this.update(o ? ft.sources.SILENT : s);
              } catch {}
            });
        }),
        this.emitter.on(ft.events.SCROLL_OPTIMIZE, (r, s) => {
          if (s.range) {
            const {
              startNode: i,
              startOffset: o,
              endNode: l,
              endOffset: a,
            } = s.range;
            this.setNativeRange(i, o, l, a), this.update(ft.sources.SILENT);
          }
        }),
        this.update(ft.sources.SILENT);
    }
    handleComposition() {
      this.emitter.on(ft.events.COMPOSITION_BEFORE_START, () => {
        this.composing = !0;
      }),
        this.emitter.on(ft.events.COMPOSITION_END, () => {
          if (((this.composing = !1), this.cursor.parent)) {
            const t = this.cursor.restore();
            if (!t) return;
            setTimeout(() => {
              this.setNativeRange(
                t.startNode,
                t.startOffset,
                t.endNode,
                t.endOffset,
              );
            }, 1);
          }
        });
    }
    handleDragging() {
      this.emitter.listenDOM("mousedown", document.body, () => {
        this.mouseDown = !0;
      }),
        this.emitter.listenDOM("mouseup", document.body, () => {
          (this.mouseDown = !1), this.update(ft.sources.USER);
        });
    }
    focus() {
      this.hasFocus() ||
        (this.root.focus({ preventScroll: !0 }),
        this.setRange(this.savedRange));
    }
    format(t, n) {
      this.scroll.update();
      const r = this.getNativeRange();
      if (
        !(r == null || !r.native.collapsed || this.scroll.query(t, gt.BLOCK))
      ) {
        if (r.start.node !== this.cursor.textNode) {
          const s = this.scroll.find(r.start.node, !1);
          if (s == null) return;
          if (s instanceof se) {
            const i = s.split(r.start.offset);
            s.parent.insertBefore(this.cursor, i);
          } else s.insertBefore(this.cursor, r.start.node);
          this.cursor.attach();
        }
        this.cursor.format(t, n),
          this.scroll.optimize(),
          this.setNativeRange(
            this.cursor.textNode,
            this.cursor.textNode.data.length,
          ),
          this.update();
      }
    }
    getBounds(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      const r = this.scroll.length();
      (t = Math.min(t, r - 1)), (n = Math.min(t + n, r - 1) - t);
      let s,
        [i, o] = this.scroll.leaf(t);
      if (i == null) return null;
      if (n > 0 && o === i.length()) {
        const [f] = this.scroll.leaf(t + 1);
        if (f) {
          const [d] = this.scroll.line(t),
            [h] = this.scroll.line(t + 1);
          d === h && ((i = f), (o = 0));
        }
      }
      [s, o] = i.position(o, !0);
      const l = document.createRange();
      if (n > 0)
        return (
          l.setStart(s, o),
          ([i, o] = this.scroll.leaf(t + n)),
          i == null
            ? null
            : (([s, o] = i.position(o, !0)),
              l.setEnd(s, o),
              l.getBoundingClientRect())
        );
      let a = "left",
        u;
      if (s instanceof Text) {
        if (!s.data.length) return null;
        o < s.data.length
          ? (l.setStart(s, o), l.setEnd(s, o + 1))
          : (l.setStart(s, o - 1), l.setEnd(s, o), (a = "right")),
          (u = l.getBoundingClientRect());
      } else {
        if (!(i.domNode instanceof Element)) return null;
        (u = i.domNode.getBoundingClientRect()), o > 0 && (a = "right");
      }
      return {
        bottom: u.top + u.height,
        height: u.height,
        left: u[a],
        right: u[a],
        top: u.top,
        width: 0,
      };
    }
    getNativeRange() {
      const t = document.getSelection();
      if (t == null || t.rangeCount <= 0) return null;
      const n = t.getRangeAt(0);
      if (n == null) return null;
      const r = this.normalizeNative(n);
      return xl.info("getNativeRange", r), r;
    }
    getRange() {
      const t = this.scroll.domNode;
      if ("isConnected" in t && !t.isConnected) return [null, null];
      const n = this.getNativeRange();
      return n == null ? [null, null] : [this.normalizedToRange(n), n];
    }
    hasFocus() {
      return (
        document.activeElement === this.root ||
        (document.activeElement != null &&
          El(this.root, document.activeElement))
      );
    }
    normalizedToRange(t) {
      const n = [[t.start.node, t.start.offset]];
      t.native.collapsed || n.push([t.end.node, t.end.offset]);
      const r = n.map((o) => {
          const [l, a] = o,
            u = this.scroll.find(l, !0),
            f = u.offset(this.scroll);
          return a === 0
            ? f
            : u instanceof se
              ? f + u.index(l, a)
              : f + u.length();
        }),
        s = Math.min(Math.max(...r), this.scroll.length() - 1),
        i = Math.min(s, ...r);
      return new sr(i, s - i);
    }
    normalizeNative(t) {
      if (
        !El(this.root, t.startContainer) ||
        (!t.collapsed && !El(this.root, t.endContainer))
      )
        return null;
      const n = {
        start: { node: t.startContainer, offset: t.startOffset },
        end: { node: t.endContainer, offset: t.endOffset },
        native: t,
      };
      return (
        [n.start, n.end].forEach((r) => {
          let { node: s, offset: i } = r;
          for (; !(s instanceof Text) && s.childNodes.length > 0; )
            if (s.childNodes.length > i) (s = s.childNodes[i]), (i = 0);
            else if (s.childNodes.length === i)
              (s = s.lastChild),
                s instanceof Text
                  ? (i = s.data.length)
                  : s.childNodes.length > 0
                    ? (i = s.childNodes.length)
                    : (i = s.childNodes.length + 1);
            else break;
          (r.node = s), (r.offset = i);
        }),
        n
      );
    }
    rangeToNative(t) {
      const n = this.scroll.length(),
        r = (s, i) => {
          s = Math.min(n - 1, s);
          const [o, l] = this.scroll.leaf(s);
          return o ? o.position(l, i) : [null, -1];
        };
      return [...r(t.index, !1), ...r(t.index + t.length, !0)];
    }
    setNativeRange(t, n) {
      let r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t,
        s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : n,
        i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
      if (
        (xl.info("setNativeRange", t, n, r, s),
        t != null &&
          (this.root.parentNode == null ||
            t.parentNode == null ||
            r.parentNode == null))
      )
        return;
      const o = document.getSelection();
      if (o != null)
        if (t != null) {
          this.hasFocus() || this.root.focus({ preventScroll: !0 });
          const { native: l } = this.getNativeRange() || {};
          if (
            l == null ||
            i ||
            t !== l.startContainer ||
            n !== l.startOffset ||
            r !== l.endContainer ||
            s !== l.endOffset
          ) {
            t instanceof Element &&
              t.tagName === "BR" &&
              ((n = Array.from(t.parentNode.childNodes).indexOf(t)),
              (t = t.parentNode)),
              r instanceof Element &&
                r.tagName === "BR" &&
                ((s = Array.from(r.parentNode.childNodes).indexOf(r)),
                (r = r.parentNode));
            const a = document.createRange();
            a.setStart(t, n),
              a.setEnd(r, s),
              o.removeAllRanges(),
              o.addRange(a);
          }
        } else o.removeAllRanges(), this.root.blur();
    }
    setRange(t) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : ft.sources.API;
      if (
        (typeof n == "string" && ((r = n), (n = !1)),
        xl.info("setRange", t),
        t != null)
      ) {
        const s = this.rangeToNative(t);
        this.setNativeRange(...s, n);
      } else this.setNativeRange(null);
      this.update(r);
    }
    update() {
      let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : ft.sources.USER;
      const n = this.lastRange,
        [r, s] = this.getRange();
      if (
        ((this.lastRange = r),
        (this.lastNative = s),
        this.lastRange != null && (this.savedRange = this.lastRange),
        !Ha(n, this.lastRange))
      ) {
        if (
          !this.composing &&
          s != null &&
          s.native.collapsed &&
          s.start.node !== this.cursor.textNode
        ) {
          const o = this.cursor.restore();
          o &&
            this.setNativeRange(
              o.startNode,
              o.startOffset,
              o.endNode,
              o.endOffset,
            );
        }
        const i = [ft.events.SELECTION_CHANGE, Mr(this.lastRange), Mr(n), t];
        this.emitter.emit(ft.events.EDITOR_CHANGE, ...i),
          t !== ft.sources.SILENT && this.emitter.emit(...i);
      }
    }
  }
  function El(e, t) {
    try {
      t.parentNode;
    } catch {
      return !1;
    }
    return e.contains(t);
  }
  const gw = /^[ -~]*$/;
  class mw {
    constructor(t) {
      (this.scroll = t), (this.delta = this.getDelta());
    }
    applyDelta(t) {
      this.scroll.update();
      let n = this.scroll.length();
      this.scroll.batchStart();
      const r = Mu(t),
        s = new dt();
      return (
        yw(r.ops.slice()).reduce((o, l) => {
          const a = Te.Op.length(l);
          let u = l.attributes || {},
            f = !1,
            d = !1;
          if (l.insert != null) {
            if ((s.retain(a), typeof l.insert == "string")) {
              const w = l.insert;
              (d =
                !w.endsWith(`
`) &&
                (n <= o || !!this.scroll.descendant(Ae, o)[0])),
                this.scroll.insertAt(o, w);
              const [T, N] = this.scroll.line(o);
              let C = Bn({}, xe(T));
              if (T instanceof Jt) {
                const [M] = T.descendant(se, N);
                M && (C = Bn(C, xe(M)));
              }
              u = Te.AttributeMap.diff(C, u) || {};
            } else if (typeof l.insert == "object") {
              const w = Object.keys(l.insert)[0];
              if (w == null) return o;
              const T = this.scroll.query(w, gt.INLINE) != null;
              if (T) (n <= o || this.scroll.descendant(Ae, o)[0]) && (d = !0);
              else if (o > 0) {
                const [N, C] = this.scroll.descendant(se, o - 1);
                N instanceof De
                  ? N.value()[C] !==
                      `
` && (f = !0)
                  : N instanceof ye &&
                    N.statics.scope === gt.INLINE_BLOT &&
                    (f = !0);
              }
              if ((this.scroll.insertAt(o, w, l.insert[w]), T)) {
                const [N] = this.scroll.descendant(se, o);
                if (N) {
                  const C = Bn({}, xe(N));
                  u = Te.AttributeMap.diff(C, u) || {};
                }
              }
            }
            n += a;
          } else if (
            (s.push(l), l.retain !== null && typeof l.retain == "object")
          ) {
            const w = Object.keys(l.retain)[0];
            if (w == null) return o;
            this.scroll.updateEmbedAt(o, w, l.retain[w]);
          }
          Object.keys(u).forEach((w) => {
            this.scroll.formatAt(o, a, w, u[w]);
          });
          const h = f ? 1 : 0,
            g = d ? 1 : 0;
          return (n += h + g), s.retain(h), s.delete(g), o + a + h + g;
        }, 0),
        s.reduce(
          (o, l) =>
            typeof l.delete == "number"
              ? (this.scroll.deleteAt(o, l.delete), o)
              : o + Te.Op.length(l),
          0,
        ),
        this.scroll.batchEnd(),
        this.scroll.optimize(),
        this.update(r)
      );
    }
    deleteText(t, n) {
      return (
        this.scroll.deleteAt(t, n), this.update(new dt().retain(t).delete(n))
      );
    }
    formatLine(t, n) {
      let r =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.scroll.update(),
        Object.keys(r).forEach((i) => {
          this.scroll.lines(t, Math.max(n, 1)).forEach((o) => {
            o.format(i, r[i]);
          });
        }),
        this.scroll.optimize();
      const s = new dt().retain(t).retain(n, Mr(r));
      return this.update(s);
    }
    formatText(t, n) {
      let r =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Object.keys(r).forEach((i) => {
        this.scroll.formatAt(t, n, i, r[i]);
      });
      const s = new dt().retain(t).retain(n, Mr(r));
      return this.update(s);
    }
    getContents(t, n) {
      return this.delta.slice(t, t + n);
    }
    getDelta() {
      return this.scroll
        .lines()
        .reduce((t, n) => t.concat(n.delta()), new dt());
    }
    getFormat(t) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = [],
        s = [];
      n === 0
        ? this.scroll.path(t).forEach((l) => {
            const [a] = l;
            a instanceof Jt ? r.push(a) : a instanceof se && s.push(a);
          })
        : ((r = this.scroll.lines(t, n)),
          (s = this.scroll.descendants(se, t, n)));
      const [i, o] = [r, s].map((l) => {
        const a = l.shift();
        if (a == null) return {};
        let u = xe(a);
        for (; Object.keys(u).length > 0; ) {
          const f = l.shift();
          if (f == null) return u;
          u = bw(xe(f), u);
        }
        return u;
      });
      return { ...i, ...o };
    }
    getHTML(t, n) {
      const [r, s] = this.scroll.line(t);
      if (r) {
        const i = r.length();
        return r.length() >= s + n && !(s === 0 && n === i)
          ? Ds(r, s, n, !0)
          : Ds(this.scroll, t, n, !0);
      }
      return "";
    }
    getText(t, n) {
      return this.getContents(t, n)
        .filter((r) => typeof r.insert == "string")
        .map((r) => r.insert)
        .join("");
    }
    insertContents(t, n) {
      const r = Mu(n),
        s = new dt().retain(t).concat(r);
      return this.scroll.insertContents(t, r), this.update(s);
    }
    insertEmbed(t, n, r) {
      return (
        this.scroll.insertAt(t, n, r),
        this.update(new dt().retain(t).insert({ [n]: r }))
      );
    }
    insertText(t, n) {
      let r =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return (
        (n = n
          .replace(
            /\r\n/g,
            `
`,
          )
          .replace(
            /\r/g,
            `
`,
          )),
        this.scroll.insertAt(t, n),
        Object.keys(r).forEach((s) => {
          this.scroll.formatAt(t, n.length, s, r[s]);
        }),
        this.update(new dt().retain(t).insert(n, Mr(r)))
      );
    }
    isBlank() {
      if (this.scroll.children.length === 0) return !0;
      if (this.scroll.children.length > 1) return !1;
      const t = this.scroll.children.head;
      if ((t == null ? void 0 : t.statics.blotName) !== Jt.blotName) return !1;
      const n = t;
      return n.children.length > 1 ? !1 : n.children.head instanceof Ue;
    }
    removeFormat(t, n) {
      const r = this.getText(t, n),
        [s, i] = this.scroll.line(t + n);
      let o = 0,
        l = new dt();
      s != null &&
        ((o = s.length() - i),
        (l = s.delta().slice(i, i + o - 1).insert(`
`)));
      const u = this.getContents(t, n + o).diff(new dt().insert(r).concat(l)),
        f = new dt().retain(t).concat(u);
      return this.applyDelta(f);
    }
    update(t) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        r =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : void 0;
      const s = this.delta;
      if (
        n.length === 1 &&
        n[0].type === "characterData" &&
        n[0].target.data.match(gw) &&
        this.scroll.find(n[0].target)
      ) {
        const i = this.scroll.find(n[0].target),
          o = xe(i),
          l = i.offset(this.scroll),
          a = n[0].oldValue.replace(Hr.CONTENTS, ""),
          u = new dt().insert(a),
          f = new dt().insert(i.value()),
          d = r && {
            oldRange: Pu(r.oldRange, -l),
            newRange: Pu(r.newRange, -l),
          };
        (t = new dt()
          .retain(l)
          .concat(u.diff(f, d))
          .reduce(
            (g, w) => (w.insert ? g.insert(w.insert, o) : g.push(w)),
            new dt(),
          )),
          (this.delta = s.compose(t));
      } else
        (this.delta = this.getDelta()),
          (!t || !Ha(s.compose(t), this.delta)) && (t = s.diff(this.delta, r));
      return t;
    }
  }
  function Sr(e, t, n) {
    if (e.length === 0) {
      const [g] = Al(n.pop());
      return t <= 0 ? `</li></${g}>` : `</li></${g}>${Sr([], t - 1, n)}`;
    }
    const [{ child: r, offset: s, length: i, indent: o, type: l }, ...a] = e,
      [u, f] = Al(l);
    if (o > t)
      return (
        n.push(l),
        o === t + 1
          ? `<${u}><li${f}>${Ds(r, s, i)}${Sr(a, o, n)}`
          : `<${u}><li>${Sr(e, t + 1, n)}`
      );
    const d = n[n.length - 1];
    if (o === t && l === d) return `</li><li${f}>${Ds(r, s, i)}${Sr(a, o, n)}`;
    const [h] = Al(n.pop());
    return `</li></${h}>${Sr(e, t - 1, n)}`;
  }
  function Ds(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if ("html" in e && typeof e.html == "function") return e.html(t, n);
    if (e instanceof De)
      return mo(e.value().slice(t, t + n)).replaceAll(" ", "&nbsp;");
    if (e instanceof Be) {
      if (e.statics.blotName === "list-container") {
        const u = [];
        return (
          e.children.forEachAt(t, n, (f, d, h) => {
            const g =
              "formats" in f && typeof f.formats == "function"
                ? f.formats()
                : {};
            u.push({
              child: f,
              offset: d,
              length: h,
              indent: g.indent || 0,
              type: g.list,
            });
          }),
          Sr(u, -1, [])
        );
      }
      const s = [];
      if (
        (e.children.forEachAt(t, n, (u, f, d) => {
          s.push(Ds(u, f, d));
        }),
        r || e.statics.blotName === "list")
      )
        return s.join("");
      const { outerHTML: i, innerHTML: o } = e.domNode,
        [l, a] = i.split(`>${o}<`);
      return l === "<table"
        ? `<table style="border: 1px solid #000;">${s.join("")}<${a}`
        : `${l}>${s.join("")}<${a}`;
    }
    return e.domNode instanceof Element ? e.domNode.outerHTML : "";
  }
  function bw(e, t) {
    return Object.keys(t).reduce((n, r) => {
      if (e[r] == null) return n;
      const s = t[r];
      return (
        s === e[r]
          ? (n[r] = s)
          : Array.isArray(s)
            ? s.indexOf(e[r]) < 0
              ? (n[r] = s.concat([e[r]]))
              : (n[r] = s)
            : (n[r] = [s, e[r]]),
        n
      );
    }, {});
  }
  function Al(e) {
    const t = e === "ordered" ? "ol" : "ul";
    switch (e) {
      case "checked":
        return [t, ' data-list="checked"'];
      case "unchecked":
        return [t, ' data-list="unchecked"'];
      default:
        return [t, ""];
    }
  }
  function Mu(e) {
    return e.reduce((t, n) => {
      if (typeof n.insert == "string") {
        const r = n.insert
          .replace(
            /\r\n/g,
            `
`,
          )
          .replace(
            /\r/g,
            `
`,
          );
        return t.insert(r, n.attributes);
      }
      return t.push(n);
    }, new dt());
  }
  function Pu(e, t) {
    let { index: n, length: r } = e;
    return new sr(n + t, r);
  }
  function yw(e) {
    const t = [];
    return (
      e.forEach((n) => {
        typeof n.insert == "string"
          ? n.insert
              .split(
                `
`,
              )
              .forEach((s, i) => {
                i &&
                  t.push({
                    insert: `
`,
                    attributes: n.attributes,
                  }),
                  s && t.push({ insert: s, attributes: n.attributes });
              })
          : t.push(n);
      }),
      t
    );
  }
  class Fe {
    constructor(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (this.quill = t), (this.options = n);
    }
  }
  at(Fe, "DEFAULTS", {});
  const vi = "\uFEFF";
  class Va extends ye {
    constructor(t, n) {
      super(t, n),
        (this.contentNode = document.createElement("span")),
        this.contentNode.setAttribute("contenteditable", "false"),
        Array.from(this.domNode.childNodes).forEach((r) => {
          this.contentNode.appendChild(r);
        }),
        (this.leftGuard = document.createTextNode(vi)),
        (this.rightGuard = document.createTextNode(vi)),
        this.domNode.appendChild(this.leftGuard),
        this.domNode.appendChild(this.contentNode),
        this.domNode.appendChild(this.rightGuard);
    }
    index(t, n) {
      return t === this.leftGuard
        ? 0
        : t === this.rightGuard
          ? 1
          : super.index(t, n);
    }
    restore(t) {
      let n = null,
        r;
      const s = t.data.split(vi).join("");
      if (t === this.leftGuard)
        if (this.prev instanceof De) {
          const i = this.prev.length();
          this.prev.insertAt(i, s),
            (n = { startNode: this.prev.domNode, startOffset: i + s.length });
        } else
          (r = document.createTextNode(s)),
            this.parent.insertBefore(this.scroll.create(r), this),
            (n = { startNode: r, startOffset: s.length });
      else
        t === this.rightGuard &&
          (this.next instanceof De
            ? (this.next.insertAt(0, s),
              (n = { startNode: this.next.domNode, startOffset: s.length }))
            : ((r = document.createTextNode(s)),
              this.parent.insertBefore(this.scroll.create(r), this.next),
              (n = { startNode: r, startOffset: s.length })));
      return (t.data = vi), n;
    }
    update(t, n) {
      t.forEach((r) => {
        if (
          r.type === "characterData" &&
          (r.target === this.leftGuard || r.target === this.rightGuard)
        ) {
          const s = this.restore(r.target);
          s && (n.range = s);
        }
      });
    }
  }
  class vw {
    constructor(t, n) {
      at(this, "isComposing", !1);
      (this.scroll = t), (this.emitter = n), this.setupListeners();
    }
    setupListeners() {
      this.scroll.domNode.addEventListener("compositionstart", (t) => {
        this.isComposing || this.handleCompositionStart(t);
      }),
        this.scroll.domNode.addEventListener("compositionend", (t) => {
          this.isComposing &&
            queueMicrotask(() => {
              this.handleCompositionEnd(t);
            });
        });
    }
    handleCompositionStart(t) {
      const n =
        t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
      n &&
        !(n instanceof Va) &&
        (this.emitter.emit(ft.events.COMPOSITION_BEFORE_START, t),
        this.scroll.batchStart(),
        this.emitter.emit(ft.events.COMPOSITION_START, t),
        (this.isComposing = !0));
    }
    handleCompositionEnd(t) {
      this.emitter.emit(ft.events.COMPOSITION_BEFORE_END, t),
        this.scroll.batchEnd(),
        this.emitter.emit(ft.events.COMPOSITION_END, t),
        (this.isComposing = !1);
    }
  }
  const Ss = class Ss {
    constructor(t, n) {
      at(this, "modules", {});
      (this.quill = t), (this.options = n);
    }
    init() {
      Object.keys(this.options.modules).forEach((t) => {
        this.modules[t] == null && this.addModule(t);
      });
    }
    addModule(t) {
      const n = this.quill.constructor.import(`modules/${t}`);
      return (
        (this.modules[t] = new n(this.quill, this.options.modules[t] || {})),
        this.modules[t]
      );
    }
  };
  at(Ss, "DEFAULTS", { modules: {} }), at(Ss, "themes", { default: Ss });
  let zr = Ss;
  const ww = (e) => e.parentElement || e.getRootNode().host || null,
    _w = (e) => {
      const t = e.getBoundingClientRect(),
        n = ("offsetWidth" in e && Math.abs(t.width) / e.offsetWidth) || 1,
        r = ("offsetHeight" in e && Math.abs(t.height) / e.offsetHeight) || 1;
      return {
        top: t.top,
        right: t.left + e.clientWidth * n,
        bottom: t.top + e.clientHeight * r,
        left: t.left,
      };
    },
    wi = (e) => {
      const t = parseInt(e, 10);
      return Number.isNaN(t) ? 0 : t;
    },
    Bu = (e, t, n, r, s, i) =>
      e < n && t > r
        ? 0
        : e < n
          ? -(n - e + s)
          : t > r
            ? t - e > r - n
              ? e + s - n
              : t - r + i
            : 0,
    xw = (e, t) => {
      var i, o, l;
      const n = e.ownerDocument;
      let r = t,
        s = e;
      for (; s; ) {
        const a = s === n.body,
          u = a
            ? {
                top: 0,
                right:
                  ((i = window.visualViewport) == null ? void 0 : i.width) ??
                  n.documentElement.clientWidth,
                bottom:
                  ((o = window.visualViewport) == null ? void 0 : o.height) ??
                  n.documentElement.clientHeight,
                left: 0,
              }
            : _w(s),
          f = getComputedStyle(s),
          d = Bu(
            r.left,
            r.right,
            u.left,
            u.right,
            wi(f.scrollPaddingLeft),
            wi(f.scrollPaddingRight),
          ),
          h = Bu(
            r.top,
            r.bottom,
            u.top,
            u.bottom,
            wi(f.scrollPaddingTop),
            wi(f.scrollPaddingBottom),
          );
        if (d || h)
          if (a) (l = n.defaultView) == null || l.scrollBy(d, h);
          else {
            const { scrollLeft: g, scrollTop: w } = s;
            h && (s.scrollTop += h), d && (s.scrollLeft += d);
            const T = s.scrollLeft - g,
              N = s.scrollTop - w;
            r = {
              left: r.left - T,
              top: r.top - N,
              right: r.right - T,
              bottom: r.bottom - N,
            };
          }
        s = a || f.position === "fixed" ? null : ww(s);
      }
    },
    Ew = 100,
    Aw = ["block", "break", "cursor", "inline", "scroll", "text"],
    Tw = (e, t, n) => {
      const r = new Fr();
      return (
        Aw.forEach((s) => {
          const i = t.query(s);
          i && r.register(i);
        }),
        e.forEach((s) => {
          let i = t.query(s);
          i ||
            n.error(
              `Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`,
            );
          let o = 0;
          for (; i; )
            if (
              (r.register(i),
              (i = "blotName" in i ? (i.requiredContainer ?? null) : null),
              (o += 1),
              o > Ew)
            ) {
              n.error(
                `Cycle detected in registering blot requiredContainer: "${s}"`,
              );
              break;
            }
        }),
        r
      );
    },
    Br = Tn("quill"),
    _i = new Fr();
  Be.uiClass = "ql-ui";
  const ke = class ke {
    static debug(t) {
      t === !0 && (t = "log"), Tn.level(t);
    }
    static find(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return ea.get(t) || _i.find(t, n);
    }
    static import(t) {
      return (
        this.imports[t] == null &&
          Br.error(`Cannot import ${t}. Are you sure it was registered?`),
        this.imports[t]
      );
    }
    static register() {
      if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
        const t = arguments.length <= 0 ? void 0 : arguments[0],
          n = !!(!(arguments.length <= 1) && arguments[1]),
          r = "attrName" in t ? t.attrName : t.blotName;
        typeof r == "string"
          ? this.register(`formats/${r}`, t, n)
          : Object.keys(t).forEach((s) => {
              this.register(s, t[s], n);
            });
      } else {
        const t = arguments.length <= 0 ? void 0 : arguments[0],
          n = arguments.length <= 1 ? void 0 : arguments[1],
          r = !!(!(arguments.length <= 2) && arguments[2]);
        this.imports[t] != null && !r && Br.warn(`Overwriting ${t} with`, n),
          (this.imports[t] = n),
          (t.startsWith("blots/") || t.startsWith("formats/")) &&
            n &&
            typeof n != "boolean" &&
            n.blotName !== "abstract" &&
            _i.register(n),
          typeof n.register == "function" && n.register(_i);
      }
    }
    constructor(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        ((this.options = Sw(t, n)),
        (this.container = this.options.container),
        this.container == null)
      ) {
        Br.error("Invalid Quill container", t);
        return;
      }
      this.options.debug && ke.debug(this.options.debug);
      const r = this.container.innerHTML.trim();
      this.container.classList.add("ql-container"),
        (this.container.innerHTML = ""),
        ea.set(this.container, this),
        (this.root = this.addContainer("ql-editor")),
        this.root.classList.add("ql-blank"),
        (this.emitter = new ft());
      const s = Ka.blotName,
        i = this.options.registry.query(s);
      if (!i || !("blotName" in i))
        throw new Error(`Cannot initialize Quill without "${s}" blot`);
      if (
        ((this.scroll = new i(this.options.registry, this.root, {
          emitter: this.emitter,
        })),
        (this.editor = new mw(this.scroll)),
        (this.selection = new pw(this.scroll, this.emitter)),
        (this.composition = new vw(this.scroll, this.emitter)),
        (this.theme = new this.options.theme(this, this.options)),
        (this.keyboard = this.theme.addModule("keyboard")),
        (this.clipboard = this.theme.addModule("clipboard")),
        (this.history = this.theme.addModule("history")),
        (this.uploader = this.theme.addModule("uploader")),
        this.theme.addModule("input"),
        this.theme.addModule("uiNode"),
        this.theme.init(),
        this.emitter.on(ft.events.EDITOR_CHANGE, (o) => {
          o === ft.events.TEXT_CHANGE &&
            this.root.classList.toggle("ql-blank", this.editor.isBlank());
        }),
        this.emitter.on(ft.events.SCROLL_UPDATE, (o, l) => {
          const a = this.selection.lastRange,
            [u] = this.selection.getRange(),
            f = a && u ? { oldRange: a, newRange: u } : void 0;
          Le.call(this, () => this.editor.update(null, l, f), o);
        }),
        this.emitter.on(ft.events.SCROLL_EMBED_UPDATE, (o, l) => {
          const a = this.selection.lastRange,
            [u] = this.selection.getRange(),
            f = a && u ? { oldRange: a, newRange: u } : void 0;
          Le.call(
            this,
            () => {
              const d = new dt()
                .retain(o.offset(this))
                .retain({ [o.statics.blotName]: l });
              return this.editor.update(d, [], f);
            },
            ke.sources.USER,
          );
        }),
        r)
      ) {
        const o = this.clipboard.convert({
          html: `${r}<p><br></p>`,
          text: `
`,
        });
        this.setContents(o);
      }
      this.history.clear(),
        this.options.placeholder &&
          this.root.setAttribute("data-placeholder", this.options.placeholder),
        this.options.readOnly && this.disable(),
        (this.allowReadOnlyEdits = !1);
    }
    addContainer(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (typeof t == "string") {
        const r = t;
        (t = document.createElement("div")), t.classList.add(r);
      }
      return this.container.insertBefore(t, n), t;
    }
    blur() {
      this.selection.setRange(null);
    }
    deleteText(t, n, r) {
      return (
        ([t, n, , r] = dn(t, n, r)),
        Le.call(this, () => this.editor.deleteText(t, n), r, t, -1 * n)
      );
    }
    disable() {
      this.enable(!1);
    }
    editReadOnly(t) {
      this.allowReadOnlyEdits = !0;
      const n = t();
      return (this.allowReadOnlyEdits = !1), n;
    }
    enable() {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
    }
    focus() {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
    }
    format(t, n) {
      let r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : ft.sources.API;
      return Le.call(
        this,
        () => {
          const s = this.getSelection(!0);
          let i = new dt();
          if (s == null) return i;
          if (this.scroll.query(t, gt.BLOCK))
            i = this.editor.formatLine(s.index, s.length, { [t]: n });
          else {
            if (s.length === 0) return this.selection.format(t, n), i;
            i = this.editor.formatText(s.index, s.length, { [t]: n });
          }
          return this.setSelection(s, ft.sources.SILENT), i;
        },
        r,
      );
    }
    formatLine(t, n, r, s, i) {
      let o;
      return (
        ([t, n, o, i] = dn(t, n, r, s, i)),
        Le.call(this, () => this.editor.formatLine(t, n, o), i, t, 0)
      );
    }
    formatText(t, n, r, s, i) {
      let o;
      return (
        ([t, n, o, i] = dn(t, n, r, s, i)),
        Le.call(this, () => this.editor.formatText(t, n, o), i, t, 0)
      );
    }
    getBounds(t) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = null;
      if (
        (typeof t == "number"
          ? (r = this.selection.getBounds(t, n))
          : (r = this.selection.getBounds(t.index, t.length)),
        !r)
      )
        return null;
      const s = this.container.getBoundingClientRect();
      return {
        bottom: r.bottom - s.top,
        height: r.height,
        left: r.left - s.left,
        right: r.right - s.left,
        top: r.top - s.top,
        width: r.width,
      };
    }
    getContents() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : this.getLength() - t;
      return ([t, n] = dn(t, n)), this.editor.getContents(t, n);
    }
    getFormat() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : this.getSelection(!0),
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return typeof t == "number"
        ? this.editor.getFormat(t, n)
        : this.editor.getFormat(t.index, t.length);
    }
    getIndex(t) {
      return t.offset(this.scroll);
    }
    getLength() {
      return this.scroll.length();
    }
    getLeaf(t) {
      return this.scroll.leaf(t);
    }
    getLine(t) {
      return this.scroll.line(t);
    }
    getLines() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : Number.MAX_VALUE;
      return typeof t != "number"
        ? this.scroll.lines(t.index, t.length)
        : this.scroll.lines(t, n);
    }
    getModule(t) {
      return this.theme.modules[t];
    }
    getSelection() {
      return (
        (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) &&
          this.focus(),
        this.update(),
        this.selection.getRange()[0]
      );
    }
    getSemanticHTML() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        n = arguments.length > 1 ? arguments[1] : void 0;
      return (
        typeof t == "number" && (n = n ?? this.getLength() - t),
        ([t, n] = dn(t, n)),
        this.editor.getHTML(t, n)
      );
    }
    getText() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        n = arguments.length > 1 ? arguments[1] : void 0;
      return (
        typeof t == "number" && (n = n ?? this.getLength() - t),
        ([t, n] = dn(t, n)),
        this.editor.getText(t, n)
      );
    }
    hasFocus() {
      return this.selection.hasFocus();
    }
    insertEmbed(t, n, r) {
      let s =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : ke.sources.API;
      return Le.call(this, () => this.editor.insertEmbed(t, n, r), s, t);
    }
    insertText(t, n, r, s, i) {
      let o;
      return (
        ([t, , o, i] = dn(t, 0, r, s, i)),
        Le.call(this, () => this.editor.insertText(t, n, o), i, t, n.length)
      );
    }
    isEnabled() {
      return this.scroll.isEnabled();
    }
    off() {
      return this.emitter.off(...arguments);
    }
    on() {
      return this.emitter.on(...arguments);
    }
    once() {
      return this.emitter.once(...arguments);
    }
    removeFormat(t, n, r) {
      return (
        ([t, n, , r] = dn(t, n, r)),
        Le.call(this, () => this.editor.removeFormat(t, n), r, t)
      );
    }
    scrollRectIntoView(t) {
      xw(this.root, t);
    }
    scrollIntoView() {
      console.warn(
        "Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.",
      ),
        this.scrollSelectionIntoView();
    }
    scrollSelectionIntoView() {
      const t = this.selection.lastRange,
        n = t && this.selection.getBounds(t.index, t.length);
      n && this.scrollRectIntoView(n);
    }
    setContents(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : ft.sources.API;
      return Le.call(
        this,
        () => {
          t = new dt(t);
          const r = this.getLength(),
            s = this.editor.deleteText(0, r),
            i = this.editor.insertContents(0, t),
            o = this.editor.deleteText(this.getLength() - 1, 1);
          return s.compose(i).compose(o);
        },
        n,
      );
    }
    setSelection(t, n, r) {
      t == null
        ? this.selection.setRange(null, n || ke.sources.API)
        : (([t, n, , r] = dn(t, n, r)),
          this.selection.setRange(new sr(Math.max(0, t), n), r),
          r !== ft.sources.SILENT && this.scrollSelectionIntoView());
    }
    setText(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : ft.sources.API;
      const r = new dt().insert(t);
      return this.setContents(r, n);
    }
    update() {
      let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : ft.sources.USER;
      const n = this.scroll.update(t);
      return this.selection.update(t), n;
    }
    updateContents(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : ft.sources.API;
      return Le.call(
        this,
        () => ((t = new dt(t)), this.editor.applyDelta(t)),
        n,
        !0,
      );
    }
  };
  at(ke, "DEFAULTS", {
    bounds: null,
    modules: { clipboard: !0, keyboard: !0, history: !0, uploader: !0 },
    placeholder: "",
    readOnly: !1,
    registry: _i,
    theme: "default",
  }),
    at(ke, "events", ft.events),
    at(ke, "sources", ft.sources),
    at(ke, "version", "2.0.3"),
    at(ke, "imports", {
      delta: dt,
      parchment: sw,
      "core/module": Fe,
      "core/theme": zr,
    });
  let U = ke;
  function ju(e) {
    return typeof e == "string" ? document.querySelector(e) : e;
  }
  function Tl(e) {
    return Object.entries(e ?? {}).reduce((t, n) => {
      let [r, s] = n;
      return { ...t, [r]: s === !0 ? {} : s };
    }, {});
  }
  function Du(e) {
    return Object.fromEntries(Object.entries(e).filter((t) => t[1] !== void 0));
  }
  function Sw(e, t) {
    const n = ju(e);
    if (!n) throw new Error("Invalid Quill container");
    const s =
      !t.theme || t.theme === U.DEFAULTS.theme
        ? zr
        : U.import(`themes/${t.theme}`);
    if (!s) throw new Error(`Invalid theme ${t.theme}. Did you register it?`);
    const { modules: i, ...o } = U.DEFAULTS,
      { modules: l, ...a } = s.DEFAULTS;
    let u = Tl(t.modules);
    u != null &&
      u.toolbar &&
      u.toolbar.constructor !== Object &&
      (u = { ...u, toolbar: { container: u.toolbar } });
    const f = Bn({}, Tl(i), Tl(l), u),
      d = { ...o, ...Du(a), ...Du(t) };
    let h = t.registry;
    return (
      h
        ? t.formats &&
          Br.warn('Ignoring "formats" option because "registry" is specified')
        : (h = t.formats ? Tw(t.formats, d.registry, Br) : d.registry),
      {
        ...d,
        registry: h,
        container: n,
        theme: s,
        modules: Object.entries(f).reduce((g, w) => {
          let [T, N] = w;
          if (!N) return g;
          const C = U.import(`modules/${T}`);
          return C == null
            ? (Br.error(
                `Cannot load ${T} module. Are you sure you registered it?`,
              ),
              g)
            : { ...g, [T]: Bn({}, C.DEFAULTS || {}, N) };
        }, {}),
        bounds: ju(d.bounds),
      }
    );
  }
  function Le(e, t, n, r) {
    if (!this.isEnabled() && t === ft.sources.USER && !this.allowReadOnlyEdits)
      return new dt();
    let s = n == null ? null : this.getSelection();
    const i = this.editor.delta,
      o = e();
    if (
      (s != null &&
        (n === !0 && (n = s.index),
        r == null ? (s = $u(s, o, t)) : r !== 0 && (s = $u(s, n, r, t)),
        this.setSelection(s, ft.sources.SILENT)),
      o.length() > 0)
    ) {
      const l = [ft.events.TEXT_CHANGE, o, i, t];
      this.emitter.emit(ft.events.EDITOR_CHANGE, ...l),
        t !== ft.sources.SILENT && this.emitter.emit(...l);
    }
    return o;
  }
  function dn(e, t, n, r, s) {
    let i = {};
    return (
      typeof e.index == "number" && typeof e.length == "number"
        ? typeof t != "number"
          ? ((s = r), (r = n), (n = t), (t = e.length), (e = e.index))
          : ((t = e.length), (e = e.index))
        : typeof t != "number" && ((s = r), (r = n), (n = t), (t = 0)),
      typeof n == "object"
        ? ((i = n), (s = r))
        : typeof n == "string" && (r != null ? (i[n] = r) : (s = n)),
      (s = s || ft.sources.API),
      [e, t, i, s]
    );
  }
  function $u(e, t, n, r) {
    const s = typeof n == "number" ? n : 0;
    if (e == null) return null;
    let i, o;
    return (
      t && typeof t.transformPosition == "function"
        ? ([i, o] = [e.index, e.index + e.length].map((l) =>
            t.transformPosition(l, r !== ft.sources.USER),
          ))
        : ([i, o] = [e.index, e.index + e.length].map((l) =>
            l < t || (l === t && r === ft.sources.USER)
              ? l
              : s >= 0
                ? l + s
                : Math.max(t, l + s),
          )),
      new sr(i, o - i)
    );
  }
  class cr extends go {}
  function Uu(e) {
    return e instanceof Jt || e instanceof Ae;
  }
  function Fu(e) {
    return typeof e.updateContent == "function";
  }
  class Nr extends Ka {
    constructor(t, n, r) {
      let { emitter: s } = r;
      super(t, n),
        (this.emitter = s),
        (this.batch = !1),
        this.optimize(),
        this.enable(),
        this.domNode.addEventListener("dragstart", (i) =>
          this.handleDragStart(i),
        );
    }
    batchStart() {
      Array.isArray(this.batch) || (this.batch = []);
    }
    batchEnd() {
      if (!this.batch) return;
      const t = this.batch;
      (this.batch = !1), this.update(t);
    }
    emitMount(t) {
      this.emitter.emit(ft.events.SCROLL_BLOT_MOUNT, t);
    }
    emitUnmount(t) {
      this.emitter.emit(ft.events.SCROLL_BLOT_UNMOUNT, t);
    }
    emitEmbedUpdate(t, n) {
      this.emitter.emit(ft.events.SCROLL_EMBED_UPDATE, t, n);
    }
    deleteAt(t, n) {
      const [r, s] = this.line(t),
        [i] = this.line(t + n);
      if ((super.deleteAt(t, n), i != null && r !== i && s > 0)) {
        if (r instanceof Ae || i instanceof Ae) {
          this.optimize();
          return;
        }
        const o = i.children.head instanceof Ue ? null : i.children.head;
        r.moveChildren(i, o), r.remove();
      }
      this.optimize();
    }
    enable() {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      this.domNode.setAttribute("contenteditable", t ? "true" : "false");
    }
    formatAt(t, n, r, s) {
      super.formatAt(t, n, r, s), this.optimize();
    }
    insertAt(t, n, r) {
      if (t >= this.length())
        if (r == null || this.scroll.query(n, gt.BLOCK) == null) {
          const s = this.scroll.create(this.statics.defaultChild.blotName);
          this.appendChild(s),
            r == null &&
            n.endsWith(`
`)
              ? s.insertAt(0, n.slice(0, -1), r)
              : s.insertAt(0, n, r);
        } else {
          const s = this.scroll.create(n, r);
          this.appendChild(s);
        }
      else super.insertAt(t, n, r);
      this.optimize();
    }
    insertBefore(t, n) {
      if (t.statics.scope === gt.INLINE_BLOT) {
        const r = this.scroll.create(this.statics.defaultChild.blotName);
        r.appendChild(t), super.insertBefore(r, n);
      } else super.insertBefore(t, n);
    }
    insertContents(t, n) {
      const r = this.deltaToRenderBlocks(
          n.concat(
            new dt().insert(`
`),
          ),
        ),
        s = r.pop();
      if (s == null) return;
      this.batchStart();
      const i = r.shift();
      if (i) {
        const a =
            i.type === "block" &&
            (i.delta.length() === 0 ||
              (!this.descendant(Ae, t)[0] && t < this.length())),
          u =
            i.type === "block"
              ? i.delta
              : new dt().insert({ [i.key]: i.value });
        Sl(this, t, u);
        const f = i.type === "block" ? 1 : 0,
          d = t + u.length() + f;
        a &&
          this.insertAt(
            d - 1,
            `
`,
          );
        const h = xe(this.line(t)[0]),
          g = Te.AttributeMap.diff(h, i.attributes) || {};
        Object.keys(g).forEach((w) => {
          this.formatAt(d - 1, 1, w, g[w]);
        }),
          (t = d);
      }
      let [o, l] = this.children.find(t);
      if (
        (r.length &&
          (o && ((o = o.split(l)), (l = 0)),
          r.forEach((a) => {
            if (a.type === "block") {
              const u = this.createBlock(a.attributes, o || void 0);
              Sl(u, 0, a.delta);
            } else {
              const u = this.create(a.key, a.value);
              this.insertBefore(u, o || void 0),
                Object.keys(a.attributes).forEach((f) => {
                  u.format(f, a.attributes[f]);
                });
            }
          })),
        s.type === "block" && s.delta.length())
      ) {
        const a = o ? o.offset(o.scroll) + l : this.length();
        Sl(this, a, s.delta);
      }
      this.batchEnd(), this.optimize();
    }
    isEnabled() {
      return this.domNode.getAttribute("contenteditable") === "true";
    }
    leaf(t) {
      const n = this.path(t).pop();
      if (!n) return [null, -1];
      const [r, s] = n;
      return r instanceof se ? [r, s] : [null, -1];
    }
    line(t) {
      return t === this.length() ? this.line(t - 1) : this.descendant(Uu, t);
    }
    lines() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        n =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : Number.MAX_VALUE;
      const r = (s, i, o) => {
        let l = [],
          a = o;
        return (
          s.children.forEachAt(i, o, (u, f, d) => {
            Uu(u) ? l.push(u) : u instanceof go && (l = l.concat(r(u, f, a))),
              (a -= d);
          }),
          l
        );
      };
      return r(this, t, n);
    }
    optimize() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.batch ||
        (super.optimize(t, n),
        t.length > 0 && this.emitter.emit(ft.events.SCROLL_OPTIMIZE, t, n));
    }
    path(t) {
      return super.path(t).slice(1);
    }
    remove() {}
    update(t) {
      if (this.batch) {
        Array.isArray(t) && (this.batch = this.batch.concat(t));
        return;
      }
      let n = ft.sources.USER;
      typeof t == "string" && (n = t),
        Array.isArray(t) || (t = this.observer.takeRecords()),
        (t = t.filter((r) => {
          let { target: s } = r;
          const i = this.find(s, !0);
          return i && !Fu(i);
        })),
        t.length > 0 && this.emitter.emit(ft.events.SCROLL_BEFORE_UPDATE, n, t),
        super.update(t.concat([])),
        t.length > 0 && this.emitter.emit(ft.events.SCROLL_UPDATE, n, t);
    }
    updateEmbedAt(t, n, r) {
      const [s] = this.descendant((i) => i instanceof Ae, t);
      s && s.statics.blotName === n && Fu(s) && s.updateContent(r);
    }
    handleDragStart(t) {
      t.preventDefault();
    }
    deltaToRenderBlocks(t) {
      const n = [];
      let r = new dt();
      return (
        t.forEach((s) => {
          const i = s == null ? void 0 : s.insert;
          if (i)
            if (typeof i == "string") {
              const o = i.split(`
`);
              o.slice(0, -1).forEach((a) => {
                r.insert(a, s.attributes),
                  n.push({
                    type: "block",
                    delta: r,
                    attributes: s.attributes ?? {},
                  }),
                  (r = new dt());
              });
              const l = o[o.length - 1];
              l && r.insert(l, s.attributes);
            } else {
              const o = Object.keys(i)[0];
              if (!o) return;
              this.query(o, gt.INLINE)
                ? r.push(s)
                : (r.length() &&
                    n.push({ type: "block", delta: r, attributes: {} }),
                  (r = new dt()),
                  n.push({
                    type: "blockEmbed",
                    key: o,
                    value: i[o],
                    attributes: s.attributes ?? {},
                  }));
            }
        }),
        r.length() && n.push({ type: "block", delta: r, attributes: {} }),
        n
      );
    }
    createBlock(t, n) {
      let r;
      const s = {};
      Object.entries(t).forEach((l) => {
        let [a, u] = l;
        this.query(a, gt.BLOCK & gt.BLOT) != null ? (r = a) : (s[a] = u);
      });
      const i = this.create(
        r || this.statics.defaultChild.blotName,
        r ? t[r] : void 0,
      );
      this.insertBefore(i, n || void 0);
      const o = i.length();
      return (
        Object.entries(s).forEach((l) => {
          let [a, u] = l;
          i.formatAt(0, o, a, u);
        }),
        i
      );
    }
  }
  at(Nr, "blotName", "scroll"),
    at(Nr, "className", "ql-editor"),
    at(Nr, "tagName", "DIV"),
    at(Nr, "defaultChild", Jt),
    at(Nr, "allowedChildren", [Jt, Ae, cr]);
  function Sl(e, t, n) {
    n.reduce((r, s) => {
      const i = Te.Op.length(s);
      let o = s.attributes || {};
      if (s.insert != null) {
        if (typeof s.insert == "string") {
          const l = s.insert;
          e.insertAt(r, l);
          const [a] = e.descendant(se, r),
            u = xe(a);
          o = Te.AttributeMap.diff(u, o) || {};
        } else if (typeof s.insert == "object") {
          const l = Object.keys(s.insert)[0];
          if (l == null) return r;
          if (
            (e.insertAt(r, l, s.insert[l]),
            e.scroll.query(l, gt.INLINE) != null)
          ) {
            const [u] = e.descendant(se, r),
              f = xe(u);
            o = Te.AttributeMap.diff(f, o) || {};
          }
        }
      }
      return (
        Object.keys(o).forEach((l) => {
          e.formatAt(r, i, l, o[l]);
        }),
        r + i
      );
    }, t);
  }
  const Ga = { scope: gt.BLOCK, whitelist: ["right", "center", "justify"] },
    Nw = new rn("align", "align", Ga),
    sd = new $e("align", "ql-align", Ga),
    id = new Fn("align", "text-align", Ga);
  class od extends Fn {
    value(t) {
      let n = super.value(t);
      return n.startsWith("rgb(")
        ? ((n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")),
          `#${n
            .split(",")
            .map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2))
            .join("")}`)
        : n;
    }
  }
  const Cw = new $e("color", "ql-color", { scope: gt.INLINE }),
    Wa = new od("color", "color", { scope: gt.INLINE }),
    Ow = new $e("background", "ql-bg", { scope: gt.INLINE }),
    Za = new od("background", "background-color", { scope: gt.INLINE });
  class ur extends cr {
    static create(t) {
      const n = super.create(t);
      return n.setAttribute("spellcheck", "false"), n;
    }
    code(t, n) {
      return this.children
        .map((r) => (r.length() <= 1 ? "" : r.domNode.innerText))
        .join(
          `
`,
        )
        .slice(t, t + n);
    }
    html(t, n) {
      return `<pre>
${mo(this.code(t, n))}
</pre>`;
    }
  }
  class oe extends Jt {
    static register() {
      U.register(ur);
    }
  }
  at(oe, "TAB", "  ");
  class Ya extends sn {}
  Ya.blotName = "code";
  Ya.tagName = "CODE";
  oe.blotName = "code-block";
  oe.className = "ql-code-block";
  oe.tagName = "DIV";
  ur.blotName = "code-block-container";
  ur.className = "ql-code-block-container";
  ur.tagName = "DIV";
  ur.allowedChildren = [oe];
  oe.allowedChildren = [De, Ue, Hr];
  oe.requiredContainer = ur;
  const Ja = { scope: gt.BLOCK, whitelist: ["rtl"] },
    ld = new rn("direction", "dir", Ja),
    ad = new $e("direction", "ql-direction", Ja),
    cd = new Fn("direction", "direction", Ja),
    ud = { scope: gt.INLINE, whitelist: ["serif", "monospace"] },
    fd = new $e("font", "ql-font", ud);
  class Lw extends Fn {
    value(t) {
      return super.value(t).replace(/["']/g, "");
    }
  }
  const hd = new Lw("font", "font-family", ud),
    dd = new $e("size", "ql-size", {
      scope: gt.INLINE,
      whitelist: ["small", "large", "huge"],
    }),
    pd = new Fn("size", "font-size", {
      scope: gt.INLINE,
      whitelist: ["10px", "18px", "32px"],
    }),
    kw = Tn("quill:keyboard"),
    Rw = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
  class bo extends Fe {
    static match(t, n) {
      return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
        (r) => !!n[r] !== t[r] && n[r] !== null,
      )
        ? !1
        : n.key === t.key || n.key === t.which;
    }
    constructor(t, n) {
      super(t, n),
        (this.bindings = {}),
        Object.keys(this.options.bindings).forEach((r) => {
          this.options.bindings[r] && this.addBinding(this.options.bindings[r]);
        }),
        this.addBinding({ key: "Enter", shiftKey: null }, this.handleEnter),
        this.addBinding(
          { key: "Enter", metaKey: null, ctrlKey: null, altKey: null },
          () => {},
        ),
        /Firefox/i.test(navigator.userAgent)
          ? (this.addBinding(
              { key: "Backspace" },
              { collapsed: !0 },
              this.handleBackspace,
            ),
            this.addBinding(
              { key: "Delete" },
              { collapsed: !0 },
              this.handleDelete,
            ))
          : (this.addBinding(
              { key: "Backspace" },
              { collapsed: !0, prefix: /^.?$/ },
              this.handleBackspace,
            ),
            this.addBinding(
              { key: "Delete" },
              { collapsed: !0, suffix: /^.?$/ },
              this.handleDelete,
            )),
        this.addBinding(
          { key: "Backspace" },
          { collapsed: !1 },
          this.handleDeleteRange,
        ),
        this.addBinding(
          { key: "Delete" },
          { collapsed: !1 },
          this.handleDeleteRange,
        ),
        this.addBinding(
          {
            key: "Backspace",
            altKey: null,
            ctrlKey: null,
            metaKey: null,
            shiftKey: null,
          },
          { collapsed: !0, offset: 0 },
          this.handleBackspace,
        ),
        this.listen();
    }
    addBinding(t) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const s = qw(t);
      if (s == null) {
        kw.warn("Attempted to add invalid keyboard binding", s);
        return;
      }
      typeof n == "function" && (n = { handler: n }),
        typeof r == "function" && (r = { handler: r }),
        (Array.isArray(s.key) ? s.key : [s.key]).forEach((o) => {
          const l = { ...s, key: o, ...n, ...r };
          (this.bindings[l.key] = this.bindings[l.key] || []),
            this.bindings[l.key].push(l);
        });
    }
    listen() {
      this.quill.root.addEventListener("keydown", (t) => {
        if (
          t.defaultPrevented ||
          t.isComposing ||
          (t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace"))
        )
          return;
        const s = (this.bindings[t.key] || [])
          .concat(this.bindings[t.which] || [])
          .filter((C) => bo.match(t, C));
        if (s.length === 0) return;
        const i = U.find(t.target, !0);
        if (i && i.scroll !== this.quill.scroll) return;
        const o = this.quill.getSelection();
        if (o == null || !this.quill.hasFocus()) return;
        const [l, a] = this.quill.getLine(o.index),
          [u, f] = this.quill.getLeaf(o.index),
          [d, h] =
            o.length === 0 ? [u, f] : this.quill.getLeaf(o.index + o.length),
          g = u instanceof Zi ? u.value().slice(0, f) : "",
          w = d instanceof Zi ? d.value().slice(h) : "",
          T = {
            collapsed: o.length === 0,
            empty: o.length === 0 && l.length() <= 1,
            format: this.quill.getFormat(o),
            line: l,
            offset: a,
            prefix: g,
            suffix: w,
            event: t,
          };
        s.some((C) => {
          if (
            (C.collapsed != null && C.collapsed !== T.collapsed) ||
            (C.empty != null && C.empty !== T.empty) ||
            (C.offset != null && C.offset !== T.offset)
          )
            return !1;
          if (Array.isArray(C.format)) {
            if (C.format.every((M) => T.format[M] == null)) return !1;
          } else if (
            typeof C.format == "object" &&
            !Object.keys(C.format).every((M) =>
              C.format[M] === !0
                ? T.format[M] != null
                : C.format[M] === !1
                  ? T.format[M] == null
                  : Ha(C.format[M], T.format[M]),
            )
          )
            return !1;
          return (C.prefix != null && !C.prefix.test(T.prefix)) ||
            (C.suffix != null && !C.suffix.test(T.suffix))
            ? !1
            : C.handler.call(this, o, T, C) !== !0;
        }) && t.preventDefault();
      });
    }
    handleBackspace(t, n) {
      const r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(n.prefix) ? 2 : 1;
      if (t.index === 0 || this.quill.getLength() <= 1) return;
      let s = {};
      const [i] = this.quill.getLine(t.index);
      let o = new dt().retain(t.index - r).delete(r);
      if (n.offset === 0) {
        const [l] = this.quill.getLine(t.index - 1);
        if (l && !(l.statics.blotName === "block" && l.length() <= 1)) {
          const u = i.formats(),
            f = this.quill.getFormat(t.index - 1, 1);
          if (
            ((s = Te.AttributeMap.diff(u, f) || {}), Object.keys(s).length > 0)
          ) {
            const d = new dt().retain(t.index + i.length() - 2).retain(1, s);
            o = o.compose(d);
          }
        }
      }
      this.quill.updateContents(o, U.sources.USER), this.quill.focus();
    }
    handleDelete(t, n) {
      const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(n.suffix) ? 2 : 1;
      if (t.index >= this.quill.getLength() - r) return;
      let s = {};
      const [i] = this.quill.getLine(t.index);
      let o = new dt().retain(t.index).delete(r);
      if (n.offset >= i.length() - 1) {
        const [l] = this.quill.getLine(t.index + 1);
        if (l) {
          const a = i.formats(),
            u = this.quill.getFormat(t.index, 1);
          (s = Te.AttributeMap.diff(a, u) || {}),
            Object.keys(s).length > 0 &&
              (o = o.retain(l.length() - 1).retain(1, s));
        }
      }
      this.quill.updateContents(o, U.sources.USER), this.quill.focus();
    }
    handleDeleteRange(t) {
      Qa({ range: t, quill: this.quill }), this.quill.focus();
    }
    handleEnter(t, n) {
      const r = Object.keys(n.format).reduce(
          (i, o) => (
            this.quill.scroll.query(o, gt.BLOCK) &&
              !Array.isArray(n.format[o]) &&
              (i[o] = n.format[o]),
            i
          ),
          {},
        ),
        s = new dt()
          .retain(t.index)
          .delete(t.length)
          .insert(
            `
`,
            r,
          );
      this.quill.updateContents(s, U.sources.USER),
        this.quill.setSelection(t.index + 1, U.sources.SILENT),
        this.quill.focus();
    }
  }
  const Iw = {
    bindings: {
      bold: Nl("bold"),
      italic: Nl("italic"),
      underline: Nl("underline"),
      indent: {
        key: "Tab",
        format: ["blockquote", "indent", "list"],
        handler(e, t) {
          return t.collapsed && t.offset !== 0
            ? !0
            : (this.quill.format("indent", "+1", U.sources.USER), !1);
        },
      },
      outdent: {
        key: "Tab",
        shiftKey: !0,
        format: ["blockquote", "indent", "list"],
        handler(e, t) {
          return t.collapsed && t.offset !== 0
            ? !0
            : (this.quill.format("indent", "-1", U.sources.USER), !1);
        },
      },
      "outdent backspace": {
        key: "Backspace",
        collapsed: !0,
        shiftKey: null,
        metaKey: null,
        ctrlKey: null,
        altKey: null,
        format: ["indent", "list"],
        offset: 0,
        handler(e, t) {
          t.format.indent != null
            ? this.quill.format("indent", "-1", U.sources.USER)
            : t.format.list != null &&
              this.quill.format("list", !1, U.sources.USER);
        },
      },
      "indent code-block": Hu(!0),
      "outdent code-block": Hu(!1),
      "remove tab": {
        key: "Tab",
        shiftKey: !0,
        collapsed: !0,
        prefix: /\t$/,
        handler(e) {
          this.quill.deleteText(e.index - 1, 1, U.sources.USER);
        },
      },
      tab: {
        key: "Tab",
        handler(e, t) {
          if (t.format.table) return !0;
          this.quill.history.cutoff();
          const n = new dt().retain(e.index).delete(e.length).insert("	");
          return (
            this.quill.updateContents(n, U.sources.USER),
            this.quill.history.cutoff(),
            this.quill.setSelection(e.index + 1, U.sources.SILENT),
            !1
          );
        },
      },
      "blockquote empty enter": {
        key: "Enter",
        collapsed: !0,
        format: ["blockquote"],
        empty: !0,
        handler() {
          this.quill.format("blockquote", !1, U.sources.USER);
        },
      },
      "list empty enter": {
        key: "Enter",
        collapsed: !0,
        format: ["list"],
        empty: !0,
        handler(e, t) {
          const n = { list: !1 };
          t.format.indent && (n.indent = !1),
            this.quill.formatLine(e.index, e.length, n, U.sources.USER);
        },
      },
      "checklist enter": {
        key: "Enter",
        collapsed: !0,
        format: { list: "checked" },
        handler(e) {
          const [t, n] = this.quill.getLine(e.index),
            r = { ...t.formats(), list: "checked" },
            s = new dt()
              .retain(e.index)
              .insert(
                `
`,
                r,
              )
              .retain(t.length() - n - 1)
              .retain(1, { list: "unchecked" });
          this.quill.updateContents(s, U.sources.USER),
            this.quill.setSelection(e.index + 1, U.sources.SILENT),
            this.quill.scrollSelectionIntoView();
        },
      },
      "header enter": {
        key: "Enter",
        collapsed: !0,
        format: ["header"],
        suffix: /^$/,
        handler(e, t) {
          const [n, r] = this.quill.getLine(e.index),
            s = new dt()
              .retain(e.index)
              .insert(
                `
`,
                t.format,
              )
              .retain(n.length() - r - 1)
              .retain(1, { header: null });
          this.quill.updateContents(s, U.sources.USER),
            this.quill.setSelection(e.index + 1, U.sources.SILENT),
            this.quill.scrollSelectionIntoView();
        },
      },
      "table backspace": {
        key: "Backspace",
        format: ["table"],
        collapsed: !0,
        offset: 0,
        handler() {},
      },
      "table delete": {
        key: "Delete",
        format: ["table"],
        collapsed: !0,
        suffix: /^$/,
        handler() {},
      },
      "table enter": {
        key: "Enter",
        shiftKey: null,
        format: ["table"],
        handler(e) {
          const t = this.quill.getModule("table");
          if (t) {
            const [n, r, s, i] = t.getTable(e),
              o = Mw(n, r, s, i);
            if (o == null) return;
            let l = n.offset();
            if (o < 0) {
              const a = new dt().retain(l).insert(`
`);
              this.quill.updateContents(a, U.sources.USER),
                this.quill.setSelection(
                  e.index + 1,
                  e.length,
                  U.sources.SILENT,
                );
            } else if (o > 0) {
              l += n.length();
              const a = new dt().retain(l).insert(`
`);
              this.quill.updateContents(a, U.sources.USER),
                this.quill.setSelection(l, U.sources.USER);
            }
          }
        },
      },
      "table tab": {
        key: "Tab",
        shiftKey: null,
        format: ["table"],
        handler(e, t) {
          const { event: n, line: r } = t,
            s = r.offset(this.quill.scroll);
          n.shiftKey
            ? this.quill.setSelection(s - 1, U.sources.USER)
            : this.quill.setSelection(s + r.length(), U.sources.USER);
        },
      },
      "list autofill": {
        key: " ",
        shiftKey: null,
        collapsed: !0,
        format: { "code-block": !1, blockquote: !1, table: !1 },
        prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
        handler(e, t) {
          if (this.quill.scroll.query("list") == null) return !0;
          const { length: n } = t.prefix,
            [r, s] = this.quill.getLine(e.index);
          if (s > n) return !0;
          let i;
          switch (t.prefix.trim()) {
            case "[]":
            case "[ ]":
              i = "unchecked";
              break;
            case "[x]":
              i = "checked";
              break;
            case "-":
            case "*":
              i = "bullet";
              break;
            default:
              i = "ordered";
          }
          this.quill.insertText(e.index, " ", U.sources.USER),
            this.quill.history.cutoff();
          const o = new dt()
            .retain(e.index - s)
            .delete(n + 1)
            .retain(r.length() - 2 - s)
            .retain(1, { list: i });
          return (
            this.quill.updateContents(o, U.sources.USER),
            this.quill.history.cutoff(),
            this.quill.setSelection(e.index - n, U.sources.SILENT),
            !1
          );
        },
      },
      "code exit": {
        key: "Enter",
        collapsed: !0,
        format: ["code-block"],
        prefix: /^$/,
        suffix: /^\s*$/,
        handler(e) {
          const [t, n] = this.quill.getLine(e.index);
          let r = 2,
            s = t;
          for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
            if (((s = s.prev), (r -= 1), r <= 0)) {
              const i = new dt()
                .retain(e.index + t.length() - n - 2)
                .retain(1, { "code-block": null })
                .delete(1);
              return (
                this.quill.updateContents(i, U.sources.USER),
                this.quill.setSelection(e.index - 1, U.sources.SILENT),
                !1
              );
            }
          return !0;
        },
      },
      "embed left": xi("ArrowLeft", !1),
      "embed left shift": xi("ArrowLeft", !0),
      "embed right": xi("ArrowRight", !1),
      "embed right shift": xi("ArrowRight", !0),
      "table down": zu(!1),
      "table up": zu(!0),
    },
  };
  bo.DEFAULTS = Iw;
  function Hu(e) {
    return {
      key: "Tab",
      shiftKey: !e,
      format: { "code-block": !0 },
      handler(t, n) {
        let { event: r } = n;
        const s = this.quill.scroll.query("code-block"),
          { TAB: i } = s;
        if (t.length === 0 && !r.shiftKey) {
          this.quill.insertText(t.index, i, U.sources.USER),
            this.quill.setSelection(t.index + i.length, U.sources.SILENT);
          return;
        }
        const o =
          t.length === 0
            ? this.quill.getLines(t.index, 1)
            : this.quill.getLines(t);
        let { index: l, length: a } = t;
        o.forEach((u, f) => {
          e
            ? (u.insertAt(0, i), f === 0 ? (l += i.length) : (a += i.length))
            : u.domNode.textContent.startsWith(i) &&
              (u.deleteAt(0, i.length),
              f === 0 ? (l -= i.length) : (a -= i.length));
        }),
          this.quill.update(U.sources.USER),
          this.quill.setSelection(l, a, U.sources.SILENT);
      },
    };
  }
  function xi(e, t) {
    return {
      key: e,
      shiftKey: t,
      altKey: null,
      [e === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
      handler(r) {
        let { index: s } = r;
        e === "ArrowRight" && (s += r.length + 1);
        const [i] = this.quill.getLeaf(s);
        return i instanceof ye
          ? (e === "ArrowLeft"
              ? t
                ? this.quill.setSelection(
                    r.index - 1,
                    r.length + 1,
                    U.sources.USER,
                  )
                : this.quill.setSelection(r.index - 1, U.sources.USER)
              : t
                ? this.quill.setSelection(r.index, r.length + 1, U.sources.USER)
                : this.quill.setSelection(
                    r.index + r.length + 1,
                    U.sources.USER,
                  ),
            !1)
          : !0;
      },
    };
  }
  function Nl(e) {
    return {
      key: e[0],
      shortKey: !0,
      handler(t, n) {
        this.quill.format(e, !n.format[e], U.sources.USER);
      },
    };
  }
  function zu(e) {
    return {
      key: e ? "ArrowUp" : "ArrowDown",
      collapsed: !0,
      format: ["table"],
      handler(t, n) {
        const r = e ? "prev" : "next",
          s = n.line,
          i = s.parent[r];
        if (i != null) {
          if (i.statics.blotName === "table-row") {
            let o = i.children.head,
              l = s;
            for (; l.prev != null; ) (l = l.prev), (o = o.next);
            const a =
              o.offset(this.quill.scroll) + Math.min(n.offset, o.length() - 1);
            this.quill.setSelection(a, 0, U.sources.USER);
          }
        } else {
          const o = s.table()[r];
          o != null &&
            (e
              ? this.quill.setSelection(
                  o.offset(this.quill.scroll) + o.length() - 1,
                  0,
                  U.sources.USER,
                )
              : this.quill.setSelection(
                  o.offset(this.quill.scroll),
                  0,
                  U.sources.USER,
                ));
        }
        return !1;
      },
    };
  }
  function qw(e) {
    if (typeof e == "string" || typeof e == "number") e = { key: e };
    else if (typeof e == "object") e = Mr(e);
    else return null;
    return e.shortKey && ((e[Rw] = e.shortKey), delete e.shortKey), e;
  }
  function Qa(e) {
    let { quill: t, range: n } = e;
    const r = t.getLines(n);
    let s = {};
    if (r.length > 1) {
      const i = r[0].formats(),
        o = r[r.length - 1].formats();
      s = Te.AttributeMap.diff(o, i) || {};
    }
    t.deleteText(n, U.sources.USER),
      Object.keys(s).length > 0 && t.formatLine(n.index, 1, s, U.sources.USER),
      t.setSelection(n.index, U.sources.SILENT);
  }
  function Mw(e, t, n, r) {
    return t.prev == null && t.next == null
      ? n.prev == null && n.next == null
        ? r === 0
          ? -1
          : 1
        : n.prev == null
          ? -1
          : 1
      : t.prev == null
        ? -1
        : t.next == null
          ? 1
          : null;
  }
  const Pw = /font-weight:\s*normal/,
    Bw = ["P", "OL", "UL"],
    Ku = (e) => e && Bw.includes(e.tagName),
    jw = (e) => {
      Array.from(e.querySelectorAll("br"))
        .filter((t) => Ku(t.previousElementSibling) && Ku(t.nextElementSibling))
        .forEach((t) => {
          var n;
          (n = t.parentNode) == null || n.removeChild(t);
        });
    },
    Dw = (e) => {
      Array.from(e.querySelectorAll('b[style*="font-weight"]'))
        .filter((t) => {
          var n;
          return (n = t.getAttribute("style")) == null ? void 0 : n.match(Pw);
        })
        .forEach((t) => {
          var r;
          const n = e.createDocumentFragment();
          n.append(...t.childNodes),
            (r = t.parentNode) == null || r.replaceChild(n, t);
        });
    };
  function $w(e) {
    e.querySelector('[id^="docs-internal-guid-"]') && (Dw(e), jw(e));
  }
  const Uw = /\bmso-list:[^;]*ignore/i,
    Fw = /\bmso-list:[^;]*\bl(\d+)/i,
    Hw = /\bmso-list:[^;]*\blevel(\d+)/i,
    zw = (e, t) => {
      const n = e.getAttribute("style"),
        r = n == null ? void 0 : n.match(Fw);
      if (!r) return null;
      const s = Number(r[1]),
        i = n == null ? void 0 : n.match(Hw),
        o = i ? Number(i[1]) : 1,
        l = new RegExp(
          `@list l${s}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`,
          "i",
        ),
        a = t.match(l),
        u = a && a[1] === "bullet" ? "bullet" : "ordered";
      return { id: s, indent: o, type: u, element: e };
    },
    Kw = (e) => {
      var o, l;
      const t = Array.from(e.querySelectorAll("[style*=mso-list]")),
        n = [],
        r = [];
      t.forEach((a) => {
        (a.getAttribute("style") || "").match(Uw) ? n.push(a) : r.push(a);
      }),
        n.forEach((a) => {
          var u;
          return (u = a.parentNode) == null ? void 0 : u.removeChild(a);
        });
      const s = e.documentElement.innerHTML,
        i = r.map((a) => zw(a, s)).filter((a) => a);
      for (; i.length; ) {
        const a = [];
        let u = i.shift();
        for (; u; )
          a.push(u),
            (u =
              i.length &&
              ((o = i[0]) == null ? void 0 : o.element) ===
                u.element.nextElementSibling &&
              i[0].id === u.id
                ? i.shift()
                : null);
        const f = document.createElement("ul");
        a.forEach((g) => {
          const w = document.createElement("li");
          w.setAttribute("data-list", g.type),
            g.indent > 1 &&
              w.setAttribute("class", `ql-indent-${g.indent - 1}`),
            (w.innerHTML = g.element.innerHTML),
            f.appendChild(w);
        });
        const d = (l = a[0]) == null ? void 0 : l.element,
          { parentNode: h } = d ?? {};
        d && (h == null || h.replaceChild(f, d)),
          a.slice(1).forEach((g) => {
            let { element: w } = g;
            h == null || h.removeChild(w);
          });
      }
    };
  function Vw(e) {
    e.documentElement.getAttribute("xmlns:w") ===
      "urn:schemas-microsoft-com:office:word" && Kw(e);
  }
  const Gw = [Vw, $w],
    Ww = (e) => {
      e.documentElement &&
        Gw.forEach((t) => {
          t(e);
        });
    },
    Zw = Tn("quill:clipboard"),
    Yw = [
      [Node.TEXT_NODE, a_],
      [Node.TEXT_NODE, Gu],
      ["br", e_],
      [Node.ELEMENT_NODE, Gu],
      [Node.ELEMENT_NODE, t_],
      [Node.ELEMENT_NODE, Xw],
      [Node.ELEMENT_NODE, o_],
      ["li", s_],
      ["ol, ul", i_],
      ["pre", n_],
      ["tr", l_],
      ["b", Cl("bold")],
      ["i", Cl("italic")],
      ["strike", Cl("strike")],
      ["style", r_],
    ],
    Jw = [Nw, ld].reduce((e, t) => ((e[t.keyName] = t), e), {}),
    Vu = [id, Za, Wa, cd, hd, pd].reduce((e, t) => ((e[t.keyName] = t), e), {});
  class gd extends Fe {
    constructor(t, n) {
      super(t, n),
        this.quill.root.addEventListener("copy", (r) =>
          this.onCaptureCopy(r, !1),
        ),
        this.quill.root.addEventListener("cut", (r) =>
          this.onCaptureCopy(r, !0),
        ),
        this.quill.root.addEventListener(
          "paste",
          this.onCapturePaste.bind(this),
        ),
        (this.matchers = []),
        Yw.concat(this.options.matchers ?? []).forEach((r) => {
          let [s, i] = r;
          this.addMatcher(s, i);
        });
    }
    addMatcher(t, n) {
      this.matchers.push([t, n]);
    }
    convert(t) {
      let { html: n, text: r } = t,
        s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (s[oe.blotName])
        return new dt().insert(r || "", { [oe.blotName]: s[oe.blotName] });
      if (!n) return new dt().insert(r || "", s);
      const i = this.convertHTML(n);
      return Ws(
        i,
        `
`,
      ) &&
        (i.ops[i.ops.length - 1].attributes == null || s.table)
        ? i.compose(new dt().retain(i.length() - 1).delete(1))
        : i;
    }
    normalizeHTML(t) {
      Ww(t);
    }
    convertHTML(t) {
      const n = new DOMParser().parseFromString(t, "text/html");
      this.normalizeHTML(n);
      const r = n.body,
        s = new WeakMap(),
        [i, o] = this.prepareMatching(r, s);
      return Xa(this.quill.scroll, r, i, o, s);
    }
    dangerouslyPasteHTML(t, n) {
      let r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : U.sources.API;
      if (typeof t == "string") {
        const s = this.convert({ html: t, text: "" });
        this.quill.setContents(s, n),
          this.quill.setSelection(0, U.sources.SILENT);
      } else {
        const s = this.convert({ html: n, text: "" });
        this.quill.updateContents(new dt().retain(t).concat(s), r),
          this.quill.setSelection(t + s.length(), U.sources.SILENT);
      }
    }
    onCaptureCopy(t) {
      var o, l;
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (t.defaultPrevented) return;
      t.preventDefault();
      const [r] = this.quill.selection.getRange();
      if (r == null) return;
      const { html: s, text: i } = this.onCopy(r, n);
      (o = t.clipboardData) == null || o.setData("text/plain", i),
        (l = t.clipboardData) == null || l.setData("text/html", s),
        n && Qa({ range: r, quill: this.quill });
    }
    normalizeURIList(t) {
      return t.split(/\r?\n/).filter((n) => n[0] !== "#").join(`
`);
    }
    onCapturePaste(t) {
      var o, l, a, u, f;
      if (t.defaultPrevented || !this.quill.isEnabled()) return;
      t.preventDefault();
      const n = this.quill.getSelection(!0);
      if (n == null) return;
      const r = (o = t.clipboardData) == null ? void 0 : o.getData("text/html");
      let s = (l = t.clipboardData) == null ? void 0 : l.getData("text/plain");
      if (!r && !s) {
        const d =
          (a = t.clipboardData) == null ? void 0 : a.getData("text/uri-list");
        d && (s = this.normalizeURIList(d));
      }
      const i = Array.from(
        ((u = t.clipboardData) == null ? void 0 : u.files) || [],
      );
      if (!r && i.length > 0) {
        this.quill.uploader.upload(n, i);
        return;
      }
      if (r && i.length > 0) {
        const d = new DOMParser().parseFromString(r, "text/html");
        if (
          d.body.childElementCount === 1 &&
          ((f = d.body.firstElementChild) == null ? void 0 : f.tagName) ===
            "IMG"
        ) {
          this.quill.uploader.upload(n, i);
          return;
        }
      }
      this.onPaste(n, { html: r, text: s });
    }
    onCopy(t) {
      const n = this.quill.getText(t);
      return { html: this.quill.getSemanticHTML(t), text: n };
    }
    onPaste(t, n) {
      let { text: r, html: s } = n;
      const i = this.quill.getFormat(t.index),
        o = this.convert({ text: r, html: s }, i);
      Zw.log("onPaste", o, { text: r, html: s });
      const l = new dt().retain(t.index).delete(t.length).concat(o);
      this.quill.updateContents(l, U.sources.USER),
        this.quill.setSelection(l.length() - t.length, U.sources.SILENT),
        this.quill.scrollSelectionIntoView();
    }
    prepareMatching(t, n) {
      const r = [],
        s = [];
      return (
        this.matchers.forEach((i) => {
          const [o, l] = i;
          switch (o) {
            case Node.TEXT_NODE:
              s.push(l);
              break;
            case Node.ELEMENT_NODE:
              r.push(l);
              break;
            default:
              Array.from(t.querySelectorAll(o)).forEach((a) => {
                if (n.has(a)) {
                  const u = n.get(a);
                  u == null || u.push(l);
                } else n.set(a, [l]);
              });
              break;
          }
        }),
        [r, s]
      );
    }
  }
  at(gd, "DEFAULTS", { matchers: [] });
  function fr(e, t, n, r) {
    return r.query(t)
      ? e.reduce((s, i) => {
          if (!i.insert) return s;
          if (i.attributes && i.attributes[t]) return s.push(i);
          const o = n ? { [t]: n } : {};
          return s.insert(i.insert, { ...o, ...i.attributes });
        }, new dt())
      : e;
  }
  function Ws(e, t) {
    let n = "";
    for (let r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
      const s = e.ops[r];
      if (typeof s.insert != "string") break;
      n = s.insert + n;
    }
    return n.slice(-1 * t.length) === t;
  }
  function qn(e, t) {
    if (!(e instanceof Element)) return !1;
    const n = t.query(e);
    return n && n.prototype instanceof ye
      ? !1
      : [
          "address",
          "article",
          "blockquote",
          "canvas",
          "dd",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "iframe",
          "li",
          "main",
          "nav",
          "ol",
          "output",
          "p",
          "pre",
          "section",
          "table",
          "td",
          "tr",
          "ul",
          "video",
        ].includes(e.tagName.toLowerCase());
  }
  function Qw(e, t) {
    return (
      e.previousElementSibling &&
      e.nextElementSibling &&
      !qn(e.previousElementSibling, t) &&
      !qn(e.nextElementSibling, t)
    );
  }
  const Ei = new WeakMap();
  function md(e) {
    return e == null
      ? !1
      : (Ei.has(e) ||
          (e.tagName === "PRE" ? Ei.set(e, !0) : Ei.set(e, md(e.parentNode))),
        Ei.get(e));
  }
  function Xa(e, t, n, r, s) {
    return t.nodeType === t.TEXT_NODE
      ? r.reduce((i, o) => o(t, i, e), new dt())
      : t.nodeType === t.ELEMENT_NODE
        ? Array.from(t.childNodes || []).reduce((i, o) => {
            let l = Xa(e, o, n, r, s);
            return (
              o.nodeType === t.ELEMENT_NODE &&
                ((l = n.reduce((a, u) => u(o, a, e), l)),
                (l = (s.get(o) || []).reduce((a, u) => u(o, a, e), l))),
              i.concat(l)
            );
          }, new dt())
        : new dt();
  }
  function Cl(e) {
    return (t, n, r) => fr(n, e, !0, r);
  }
  function Xw(e, t, n) {
    const r = rn.keys(e),
      s = $e.keys(e),
      i = Fn.keys(e),
      o = {};
    return (
      r
        .concat(s)
        .concat(i)
        .forEach((l) => {
          let a = n.query(l, gt.ATTRIBUTE);
          (a != null && ((o[a.attrName] = a.value(e)), o[a.attrName])) ||
            ((a = Jw[l]),
            a != null &&
              (a.attrName === l || a.keyName === l) &&
              (o[a.attrName] = a.value(e) || void 0),
            (a = Vu[l]),
            a != null &&
              (a.attrName === l || a.keyName === l) &&
              ((a = Vu[l]), (o[a.attrName] = a.value(e) || void 0)));
        }),
      Object.entries(o).reduce((l, a) => {
        let [u, f] = a;
        return fr(l, u, f, n);
      }, t)
    );
  }
  function t_(e, t, n) {
    const r = n.query(e);
    if (r == null) return t;
    if (r.prototype instanceof ye) {
      const s = {},
        i = r.value(e);
      if (i != null)
        return (s[r.blotName] = i), new dt().insert(s, r.formats(e, n));
    } else if (
      (r.prototype instanceof js &&
        !Ws(
          t,
          `
`,
        ) &&
        t.insert(`
`),
      "blotName" in r && "formats" in r && typeof r.formats == "function")
    )
      return fr(t, r.blotName, r.formats(e, n), n);
    return t;
  }
  function e_(e, t) {
    return (
      Ws(
        t,
        `
`,
      ) ||
        t.insert(`
`),
      t
    );
  }
  function n_(e, t, n) {
    const r = n.query("code-block"),
      s =
        r && "formats" in r && typeof r.formats == "function"
          ? r.formats(e, n)
          : !0;
    return fr(t, "code-block", s, n);
  }
  function r_() {
    return new dt();
  }
  function s_(e, t, n) {
    const r = n.query(e);
    if (
      r == null ||
      r.blotName !== "list" ||
      !Ws(
        t,
        `
`,
      )
    )
      return t;
    let s = -1,
      i = e.parentNode;
    for (; i != null; )
      ["OL", "UL"].includes(i.tagName) && (s += 1), (i = i.parentNode);
    return s <= 0
      ? t
      : t.reduce(
          (o, l) =>
            l.insert
              ? l.attributes && typeof l.attributes.indent == "number"
                ? o.push(l)
                : o.insert(l.insert, { indent: s, ...(l.attributes || {}) })
              : o,
          new dt(),
        );
  }
  function i_(e, t, n) {
    const r = e;
    let s = r.tagName === "OL" ? "ordered" : "bullet";
    const i = r.getAttribute("data-checked");
    return (
      i && (s = i === "true" ? "checked" : "unchecked"), fr(t, "list", s, n)
    );
  }
  function Gu(e, t, n) {
    if (
      !Ws(
        t,
        `
`,
      )
    ) {
      if (
        qn(e, n) &&
        (e.childNodes.length > 0 || e instanceof HTMLParagraphElement)
      )
        return t.insert(`
`);
      if (t.length() > 0 && e.nextSibling) {
        let r = e.nextSibling;
        for (; r != null; ) {
          if (qn(r, n))
            return t.insert(`
`);
          const s = n.query(r);
          if (s && s.prototype instanceof Ae)
            return t.insert(`
`);
          r = r.firstChild;
        }
      }
    }
    return t;
  }
  function o_(e, t, n) {
    var i;
    const r = {},
      s = e.style || {};
    return (
      s.fontStyle === "italic" && (r.italic = !0),
      s.textDecoration === "underline" && (r.underline = !0),
      s.textDecoration === "line-through" && (r.strike = !0),
      (((i = s.fontWeight) != null && i.startsWith("bold")) ||
        parseInt(s.fontWeight, 10) >= 700) &&
        (r.bold = !0),
      (t = Object.entries(r).reduce((o, l) => {
        let [a, u] = l;
        return fr(o, a, u, n);
      }, t)),
      parseFloat(s.textIndent || 0) > 0 ? new dt().insert("	").concat(t) : t
    );
  }
  function l_(e, t, n) {
    var s, i;
    const r =
      ((s = e.parentElement) == null ? void 0 : s.tagName) === "TABLE"
        ? e.parentElement
        : (i = e.parentElement) == null
          ? void 0
          : i.parentElement;
    if (r != null) {
      const l = Array.from(r.querySelectorAll("tr")).indexOf(e) + 1;
      return fr(t, "table", l, n);
    }
    return t;
  }
  function a_(e, t, n) {
    var s;
    let r = e.data;
    if (((s = e.parentElement) == null ? void 0 : s.tagName) === "O:P")
      return t.insert(r.trim());
    if (!md(e)) {
      if (
        r.trim().length === 0 &&
        r.includes(`
`) &&
        !Qw(e, n)
      )
        return t;
      (r = r.replace(/[^\S\u00a0]/g, " ")),
        (r = r.replace(/ {2,}/g, " ")),
        ((e.previousSibling == null &&
          e.parentElement != null &&
          qn(e.parentElement, n)) ||
          (e.previousSibling instanceof Element && qn(e.previousSibling, n))) &&
          (r = r.replace(/^ /, "")),
        ((e.nextSibling == null &&
          e.parentElement != null &&
          qn(e.parentElement, n)) ||
          (e.nextSibling instanceof Element && qn(e.nextSibling, n))) &&
          (r = r.replace(/ $/, "")),
        (r = r.replaceAll(" ", " "));
    }
    return t.insert(r);
  }
  class bd extends Fe {
    constructor(n, r) {
      super(n, r);
      at(this, "lastRecorded", 0);
      at(this, "ignoreChange", !1);
      at(this, "stack", { undo: [], redo: [] });
      at(this, "currentRange", null);
      this.quill.on(U.events.EDITOR_CHANGE, (s, i, o, l) => {
        s === U.events.SELECTION_CHANGE
          ? i && l !== U.sources.SILENT && (this.currentRange = i)
          : s === U.events.TEXT_CHANGE &&
            (this.ignoreChange ||
              (!this.options.userOnly || l === U.sources.USER
                ? this.record(i, o)
                : this.transform(i)),
            (this.currentRange = sa(this.currentRange, i)));
      }),
        this.quill.keyboard.addBinding(
          { key: "z", shortKey: !0 },
          this.undo.bind(this),
        ),
        this.quill.keyboard.addBinding(
          { key: ["z", "Z"], shortKey: !0, shiftKey: !0 },
          this.redo.bind(this),
        ),
        /Win/i.test(navigator.platform) &&
          this.quill.keyboard.addBinding(
            { key: "y", shortKey: !0 },
            this.redo.bind(this),
          ),
        this.quill.root.addEventListener("beforeinput", (s) => {
          s.inputType === "historyUndo"
            ? (this.undo(), s.preventDefault())
            : s.inputType === "historyRedo" &&
              (this.redo(), s.preventDefault());
        });
    }
    change(n, r) {
      if (this.stack[n].length === 0) return;
      const s = this.stack[n].pop();
      if (!s) return;
      const i = this.quill.getContents(),
        o = s.delta.invert(i);
      this.stack[r].push({ delta: o, range: sa(s.range, o) }),
        (this.lastRecorded = 0),
        (this.ignoreChange = !0),
        this.quill.updateContents(s.delta, U.sources.USER),
        (this.ignoreChange = !1),
        this.restoreSelection(s);
    }
    clear() {
      this.stack = { undo: [], redo: [] };
    }
    cutoff() {
      this.lastRecorded = 0;
    }
    record(n, r) {
      if (n.ops.length === 0) return;
      this.stack.redo = [];
      let s = n.invert(r),
        i = this.currentRange;
      const o = Date.now();
      if (
        this.lastRecorded + this.options.delay > o &&
        this.stack.undo.length > 0
      ) {
        const l = this.stack.undo.pop();
        l && ((s = s.compose(l.delta)), (i = l.range));
      } else this.lastRecorded = o;
      s.length() !== 0 &&
        (this.stack.undo.push({ delta: s, range: i }),
        this.stack.undo.length > this.options.maxStack &&
          this.stack.undo.shift());
    }
    redo() {
      this.change("redo", "undo");
    }
    transform(n) {
      Wu(this.stack.undo, n), Wu(this.stack.redo, n);
    }
    undo() {
      this.change("undo", "redo");
    }
    restoreSelection(n) {
      if (n.range) this.quill.setSelection(n.range, U.sources.USER);
      else {
        const r = u_(this.quill.scroll, n.delta);
        this.quill.setSelection(r, U.sources.USER);
      }
    }
  }
  at(bd, "DEFAULTS", { delay: 1e3, maxStack: 100, userOnly: !1 });
  function Wu(e, t) {
    let n = t;
    for (let r = e.length - 1; r >= 0; r -= 1) {
      const s = e[r];
      (e[r] = {
        delta: n.transform(s.delta, !0),
        range: s.range && sa(s.range, n),
      }),
        (n = s.delta.transform(n)),
        e[r].delta.length() === 0 && e.splice(r, 1);
    }
  }
  function c_(e, t) {
    const n = t.ops[t.ops.length - 1];
    return n == null
      ? !1
      : n.insert != null
        ? typeof n.insert == "string" &&
          n.insert.endsWith(`
`)
        : n.attributes != null
          ? Object.keys(n.attributes).some((r) => e.query(r, gt.BLOCK) != null)
          : !1;
  }
  function u_(e, t) {
    const n = t.reduce((s, i) => s + (i.delete || 0), 0);
    let r = t.length() - n;
    return c_(e, t) && (r -= 1), r;
  }
  function sa(e, t) {
    if (!e) return e;
    const n = t.transformPosition(e.index),
      r = t.transformPosition(e.index + e.length);
    return { index: n, length: r - n };
  }
  class yd extends Fe {
    constructor(t, n) {
      super(t, n),
        t.root.addEventListener("drop", (r) => {
          var o;
          r.preventDefault();
          let s = null;
          if (document.caretRangeFromPoint)
            s = document.caretRangeFromPoint(r.clientX, r.clientY);
          else if (document.caretPositionFromPoint) {
            const l = document.caretPositionFromPoint(r.clientX, r.clientY);
            (s = document.createRange()),
              s.setStart(l.offsetNode, l.offset),
              s.setEnd(l.offsetNode, l.offset);
          }
          const i = s && t.selection.normalizeNative(s);
          if (i) {
            const l = t.selection.normalizedToRange(i);
            (o = r.dataTransfer) != null &&
              o.files &&
              this.upload(l, r.dataTransfer.files);
          }
        });
    }
    upload(t, n) {
      const r = [];
      Array.from(n).forEach((s) => {
        var i;
        s &&
          (i = this.options.mimetypes) != null &&
          i.includes(s.type) &&
          r.push(s);
      }),
        r.length > 0 && this.options.handler.call(this, t, r);
    }
  }
  yd.DEFAULTS = {
    mimetypes: ["image/png", "image/jpeg"],
    handler(e, t) {
      if (!this.quill.scroll.query("image")) return;
      const n = t.map(
        (r) =>
          new Promise((s) => {
            const i = new FileReader();
            (i.onload = () => {
              s(i.result);
            }),
              i.readAsDataURL(r);
          }),
      );
      Promise.all(n).then((r) => {
        const s = r.reduce(
          (i, o) => i.insert({ image: o }),
          new dt().retain(e.index).delete(e.length),
        );
        this.quill.updateContents(s, ft.sources.USER),
          this.quill.setSelection(e.index + r.length, ft.sources.SILENT);
      });
    },
  };
  const f_ = ["insertText", "insertReplacementText"];
  class h_ extends Fe {
    constructor(t, n) {
      super(t, n),
        t.root.addEventListener("beforeinput", (r) => {
          this.handleBeforeInput(r);
        }),
        /Android/i.test(navigator.userAgent) ||
          t.on(U.events.COMPOSITION_BEFORE_START, () => {
            this.handleCompositionStart();
          });
    }
    deleteRange(t) {
      Qa({ range: t, quill: this.quill });
    }
    replaceText(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      if (t.length === 0) return !1;
      if (n) {
        const r = this.quill.getFormat(t.index, 1);
        this.deleteRange(t),
          this.quill.updateContents(
            new dt().retain(t.index).insert(n, r),
            U.sources.USER,
          );
      } else this.deleteRange(t);
      return (
        this.quill.setSelection(t.index + n.length, 0, U.sources.SILENT), !0
      );
    }
    handleBeforeInput(t) {
      if (
        this.quill.composition.isComposing ||
        t.defaultPrevented ||
        !f_.includes(t.inputType)
      )
        return;
      const n = t.getTargetRanges ? t.getTargetRanges()[0] : null;
      if (!n || n.collapsed === !0) return;
      const r = d_(t);
      if (r == null) return;
      const s = this.quill.selection.normalizeNative(n),
        i = s ? this.quill.selection.normalizedToRange(s) : null;
      i && this.replaceText(i, r) && t.preventDefault();
    }
    handleCompositionStart() {
      const t = this.quill.getSelection();
      t && this.replaceText(t);
    }
  }
  function d_(e) {
    var t;
    return typeof e.data == "string"
      ? e.data
      : (t = e.dataTransfer) != null && t.types.includes("text/plain")
        ? e.dataTransfer.getData("text/plain")
        : null;
  }
  const p_ = /Mac/i.test(navigator.platform),
    g_ = 100,
    m_ = (e) =>
      !!(
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "Home" ||
        (p_ && e.key === "a" && e.ctrlKey === !0)
      );
  class b_ extends Fe {
    constructor(n, r) {
      super(n, r);
      at(this, "isListening", !1);
      at(this, "selectionChangeDeadline", 0);
      this.handleArrowKeys(), this.handleNavigationShortcuts();
    }
    handleArrowKeys() {
      this.quill.keyboard.addBinding({
        key: ["ArrowLeft", "ArrowRight"],
        offset: 0,
        shiftKey: null,
        handler(n, r) {
          let { line: s, event: i } = r;
          if (!(s instanceof Be) || !s.uiNode) return !0;
          const o = getComputedStyle(s.domNode).direction === "rtl";
          return (o && i.key !== "ArrowRight") || (!o && i.key !== "ArrowLeft")
            ? !0
            : (this.quill.setSelection(
                n.index - 1,
                n.length + (i.shiftKey ? 1 : 0),
                U.sources.USER,
              ),
              !1);
        },
      });
    }
    handleNavigationShortcuts() {
      this.quill.root.addEventListener("keydown", (n) => {
        !n.defaultPrevented && m_(n) && this.ensureListeningToSelectionChange();
      });
    }
    ensureListeningToSelectionChange() {
      if (((this.selectionChangeDeadline = Date.now() + g_), this.isListening))
        return;
      this.isListening = !0;
      const n = () => {
        (this.isListening = !1),
          Date.now() <= this.selectionChangeDeadline &&
            this.handleSelectionChange();
      };
      document.addEventListener("selectionchange", n, { once: !0 });
    }
    handleSelectionChange() {
      const n = document.getSelection();
      if (!n) return;
      const r = n.getRangeAt(0);
      if (r.collapsed !== !0 || r.startOffset !== 0) return;
      const s = this.quill.scroll.find(r.startContainer);
      if (!(s instanceof Be) || !s.uiNode) return;
      const i = document.createRange();
      i.setStartAfter(s.uiNode),
        i.setEndAfter(s.uiNode),
        n.removeAllRanges(),
        n.addRange(i);
    }
  }
  U.register({
    "blots/block": Jt,
    "blots/block/embed": Ae,
    "blots/break": Ue,
    "blots/container": cr,
    "blots/cursor": Hr,
    "blots/embed": Va,
    "blots/inline": sn,
    "blots/scroll": Nr,
    "blots/text": De,
    "modules/clipboard": gd,
    "modules/history": bd,
    "modules/keyboard": bo,
    "modules/uploader": yd,
    "modules/input": h_,
    "modules/uiNode": b_,
  });
  class y_ extends $e {
    add(t, n) {
      let r = 0;
      if (n === "+1" || n === "-1") {
        const s = this.value(t) || 0;
        r = n === "+1" ? s + 1 : s - 1;
      } else typeof n == "number" && (r = n);
      return r === 0 ? (this.remove(t), !0) : super.add(t, r.toString());
    }
    canAdd(t, n) {
      return super.canAdd(t, n) || super.canAdd(t, parseInt(n, 10));
    }
    value(t) {
      return parseInt(super.value(t), 10) || void 0;
    }
  }
  const v_ = new y_("indent", "ql-indent", {
    scope: gt.BLOCK,
    whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
  });
  class ia extends Jt {}
  at(ia, "blotName", "blockquote"), at(ia, "tagName", "blockquote");
  class oa extends Jt {
    static formats(t) {
      return this.tagName.indexOf(t.tagName) + 1;
    }
  }
  at(oa, "blotName", "header"),
    at(oa, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
  class Zs extends cr {}
  Zs.blotName = "list-container";
  Zs.tagName = "OL";
  class Ys extends Jt {
    static create(t) {
      const n = super.create();
      return n.setAttribute("data-list", t), n;
    }
    static formats(t) {
      return t.getAttribute("data-list") || void 0;
    }
    static register() {
      U.register(Zs);
    }
    constructor(t, n) {
      super(t, n);
      const r = n.ownerDocument.createElement("span"),
        s = (i) => {
          if (!t.isEnabled()) return;
          const o = this.statics.formats(n, t);
          o === "checked"
            ? (this.format("list", "unchecked"), i.preventDefault())
            : o === "unchecked" &&
              (this.format("list", "checked"), i.preventDefault());
        };
      r.addEventListener("mousedown", s),
        r.addEventListener("touchstart", s),
        this.attachUI(r);
    }
    format(t, n) {
      t === this.statics.blotName && n
        ? this.domNode.setAttribute("data-list", n)
        : super.format(t, n);
    }
  }
  Ys.blotName = "list";
  Ys.tagName = "LI";
  Zs.allowedChildren = [Ys];
  Ys.requiredContainer = Zs;
  class $s extends sn {
    static create() {
      return super.create();
    }
    static formats() {
      return !0;
    }
    optimize(t) {
      super.optimize(t),
        this.domNode.tagName !== this.statics.tagName[0] &&
          this.replaceWith(this.statics.blotName);
    }
  }
  at($s, "blotName", "bold"), at($s, "tagName", ["STRONG", "B"]);
  class la extends $s {}
  at(la, "blotName", "italic"), at(la, "tagName", ["EM", "I"]);
  class Mn extends sn {
    static create(t) {
      const n = super.create(t);
      return (
        n.setAttribute("href", this.sanitize(t)),
        n.setAttribute("rel", "noopener noreferrer"),
        n.setAttribute("target", "_blank"),
        n
      );
    }
    static formats(t) {
      return t.getAttribute("href");
    }
    static sanitize(t) {
      return vd(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
    }
    format(t, n) {
      t !== this.statics.blotName || !n
        ? super.format(t, n)
        : this.domNode.setAttribute("href", this.constructor.sanitize(n));
    }
  }
  at(Mn, "blotName", "link"),
    at(Mn, "tagName", "A"),
    at(Mn, "SANITIZED_URL", "about:blank"),
    at(Mn, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
  function vd(e, t) {
    const n = document.createElement("a");
    n.href = e;
    const r = n.href.slice(0, n.href.indexOf(":"));
    return t.indexOf(r) > -1;
  }
  class aa extends sn {
    static create(t) {
      return t === "super"
        ? document.createElement("sup")
        : t === "sub"
          ? document.createElement("sub")
          : super.create(t);
    }
    static formats(t) {
      if (t.tagName === "SUB") return "sub";
      if (t.tagName === "SUP") return "super";
    }
  }
  at(aa, "blotName", "script"), at(aa, "tagName", ["SUB", "SUP"]);
  class ca extends $s {}
  at(ca, "blotName", "strike"), at(ca, "tagName", ["S", "STRIKE"]);
  class ua extends sn {}
  at(ua, "blotName", "underline"), at(ua, "tagName", "U");
  class qi extends Va {
    static create(t) {
      if (window.katex == null)
        throw new Error("Formula module requires KaTeX.");
      const n = super.create(t);
      return (
        typeof t == "string" &&
          (window.katex.render(t, n, { throwOnError: !1, errorColor: "#f00" }),
          n.setAttribute("data-value", t)),
        n
      );
    }
    static value(t) {
      return t.getAttribute("data-value");
    }
    html() {
      const { formula: t } = this.value();
      return `<span>${t}</span>`;
    }
  }
  at(qi, "blotName", "formula"),
    at(qi, "className", "ql-formula"),
    at(qi, "tagName", "SPAN");
  const Zu = ["alt", "height", "width"];
  class fa extends ye {
    static create(t) {
      const n = super.create(t);
      return typeof t == "string" && n.setAttribute("src", this.sanitize(t)), n;
    }
    static formats(t) {
      return Zu.reduce(
        (n, r) => (t.hasAttribute(r) && (n[r] = t.getAttribute(r)), n),
        {},
      );
    }
    static match(t) {
      return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
    }
    static sanitize(t) {
      return vd(t, ["http", "https", "data"]) ? t : "//:0";
    }
    static value(t) {
      return t.getAttribute("src");
    }
    format(t, n) {
      Zu.indexOf(t) > -1
        ? n
          ? this.domNode.setAttribute(t, n)
          : this.domNode.removeAttribute(t)
        : super.format(t, n);
    }
  }
  at(fa, "blotName", "image"), at(fa, "tagName", "IMG");
  const Yu = ["height", "width"];
  class Mi extends Ae {
    static create(t) {
      const n = super.create(t);
      return (
        n.setAttribute("frameborder", "0"),
        n.setAttribute("allowfullscreen", "true"),
        n.setAttribute("src", this.sanitize(t)),
        n
      );
    }
    static formats(t) {
      return Yu.reduce(
        (n, r) => (t.hasAttribute(r) && (n[r] = t.getAttribute(r)), n),
        {},
      );
    }
    static sanitize(t) {
      return Mn.sanitize(t);
    }
    static value(t) {
      return t.getAttribute("src");
    }
    format(t, n) {
      Yu.indexOf(t) > -1
        ? n
          ? this.domNode.setAttribute(t, n)
          : this.domNode.removeAttribute(t)
        : super.format(t, n);
    }
    html() {
      const { video: t } = this.value();
      return `<a href="${t}">${t}</a>`;
    }
  }
  at(Mi, "blotName", "video"),
    at(Mi, "className", "ql-video"),
    at(Mi, "tagName", "IFRAME");
  const ps = new $e("code-token", "hljs", { scope: gt.INLINE });
  class _n extends sn {
    static formats(t, n) {
      for (; t != null && t !== n.domNode; ) {
        if (t.classList && t.classList.contains(oe.className))
          return super.formats(t, n);
        t = t.parentNode;
      }
    }
    constructor(t, n, r) {
      super(t, n, r), ps.add(this.domNode, r);
    }
    format(t, n) {
      t !== _n.blotName
        ? super.format(t, n)
        : n
          ? ps.add(this.domNode, n)
          : (ps.remove(this.domNode),
            this.domNode.classList.remove(this.statics.className));
    }
    optimize() {
      super.optimize(...arguments), ps.value(this.domNode) || this.unwrap();
    }
  }
  _n.blotName = "code-token";
  _n.className = "ql-token";
  class Ee extends oe {
    static create(t) {
      const n = super.create(t);
      return typeof t == "string" && n.setAttribute("data-language", t), n;
    }
    static formats(t) {
      return t.getAttribute("data-language") || "plain";
    }
    static register() {}
    format(t, n) {
      t === this.statics.blotName && n
        ? this.domNode.setAttribute("data-language", n)
        : super.format(t, n);
    }
    replaceWith(t, n) {
      return (
        this.formatAt(0, this.length(), _n.blotName, !1),
        super.replaceWith(t, n)
      );
    }
  }
  class Ts extends ur {
    attach() {
      super.attach(), (this.forceNext = !1), this.scroll.emitMount(this);
    }
    format(t, n) {
      t === Ee.blotName &&
        ((this.forceNext = !0),
        this.children.forEach((r) => {
          r.format(t, n);
        }));
    }
    formatAt(t, n, r, s) {
      r === Ee.blotName && (this.forceNext = !0), super.formatAt(t, n, r, s);
    }
    highlight(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (this.children.head == null) return;
      const s = `${Array.from(this.domNode.childNodes)
          .filter((o) => o !== this.uiNode)
          .map((o) => o.textContent).join(`
`)}
`,
        i = Ee.formats(this.children.head.domNode);
      if (n || this.forceNext || this.cachedText !== s) {
        if (s.trim().length > 0 || this.cachedText == null) {
          const o = this.children.reduce(
              (a, u) => a.concat(nd(u, !1)),
              new dt(),
            ),
            l = t(s, i);
          o.diff(l).reduce((a, u) => {
            let { retain: f, attributes: d } = u;
            return f
              ? (d &&
                  Object.keys(d).forEach((h) => {
                    [Ee.blotName, _n.blotName].includes(h) &&
                      this.formatAt(a, f, h, d[h]);
                  }),
                a + f)
              : a;
          }, 0);
        }
        (this.cachedText = s), (this.forceNext = !1);
      }
    }
    html(t, n) {
      const [r] = this.children.find(t);
      return `<pre data-language="${r ? Ee.formats(r.domNode) : "plain"}">
${mo(this.code(t, n))}
</pre>`;
    }
    optimize(t) {
      if (
        (super.optimize(t),
        this.parent != null &&
          this.children.head != null &&
          this.uiNode != null)
      ) {
        const n = Ee.formats(this.children.head.domNode);
        n !== this.uiNode.value && (this.uiNode.value = n);
      }
    }
  }
  Ts.allowedChildren = [Ee];
  Ee.requiredContainer = Ts;
  Ee.allowedChildren = [_n, Hr, De, Ue];
  const w_ = (e, t, n) => {
    if (typeof e.versionString == "string") {
      const r = e.versionString.split(".")[0];
      if (parseInt(r, 10) >= 11) return e.highlight(n, { language: t }).value;
    }
    return e.highlight(t, n).value;
  };
  class wd extends Fe {
    static register() {
      U.register(_n, !0), U.register(Ee, !0), U.register(Ts, !0);
    }
    constructor(t, n) {
      if ((super(t, n), this.options.hljs == null))
        throw new Error(
          "Syntax module requires highlight.js. Please include the library on the page before Quill.",
        );
      (this.languages = this.options.languages.reduce((r, s) => {
        let { key: i } = s;
        return (r[i] = !0), r;
      }, {})),
        (this.highlightBlot = this.highlightBlot.bind(this)),
        this.initListener(),
        this.initTimer();
    }
    initListener() {
      this.quill.on(U.events.SCROLL_BLOT_MOUNT, (t) => {
        if (!(t instanceof Ts)) return;
        const n = this.quill.root.ownerDocument.createElement("select");
        this.options.languages.forEach((r) => {
          let { key: s, label: i } = r;
          const o = n.ownerDocument.createElement("option");
          (o.textContent = i), o.setAttribute("value", s), n.appendChild(o);
        }),
          n.addEventListener("change", () => {
            t.format(Ee.blotName, n.value),
              this.quill.root.focus(),
              this.highlight(t, !0);
          }),
          t.uiNode == null &&
            (t.attachUI(n),
            t.children.head && (n.value = Ee.formats(t.children.head.domNode)));
      });
    }
    initTimer() {
      let t = null;
      this.quill.on(U.events.SCROLL_OPTIMIZE, () => {
        t && clearTimeout(t),
          (t = setTimeout(() => {
            this.highlight(), (t = null);
          }, this.options.interval));
      });
    }
    highlight() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (this.quill.selection.composing) return;
      this.quill.update(U.sources.USER);
      const r = this.quill.getSelection();
      (t == null ? this.quill.scroll.descendants(Ts) : [t]).forEach((i) => {
        i.highlight(this.highlightBlot, n);
      }),
        this.quill.update(U.sources.SILENT),
        r != null && this.quill.setSelection(r, U.sources.SILENT);
    }
    highlightBlot(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : "plain";
      if (((n = this.languages[n] ? n : "plain"), n === "plain"))
        return mo(t)
          .split(
            `
`,
          )
          .reduce(
            (s, i, o) => (
              o !== 0 &&
                s.insert(
                  `
`,
                  { [oe.blotName]: n },
                ),
              s.insert(i)
            ),
            new dt(),
          );
      const r = this.quill.root.ownerDocument.createElement("div");
      return (
        r.classList.add(oe.className),
        (r.innerHTML = w_(this.options.hljs, n, t)),
        Xa(
          this.quill.scroll,
          r,
          [
            (s, i) => {
              const o = ps.value(s);
              return o
                ? i.compose(new dt().retain(i.length(), { [_n.blotName]: o }))
                : i;
            },
          ],
          [
            (s, i) =>
              s.data
                .split(
                  `
`,
                )
                .reduce(
                  (o, l, a) => (
                    a !== 0 &&
                      o.insert(
                        `
`,
                        { [oe.blotName]: n },
                      ),
                    o.insert(l)
                  ),
                  i,
                ),
          ],
          new WeakMap(),
        )
      );
    }
  }
  wd.DEFAULTS = {
    hljs: window.hljs,
    interval: 1e3,
    languages: [
      { key: "plain", label: "Plain" },
      { key: "bash", label: "Bash" },
      { key: "cpp", label: "C++" },
      { key: "cs", label: "C#" },
      { key: "css", label: "CSS" },
      { key: "diff", label: "Diff" },
      { key: "xml", label: "HTML/XML" },
      { key: "java", label: "Java" },
      { key: "javascript", label: "JavaScript" },
      { key: "markdown", label: "Markdown" },
      { key: "php", label: "PHP" },
      { key: "python", label: "Python" },
      { key: "ruby", label: "Ruby" },
      { key: "sql", label: "SQL" },
    ],
  };
  const Ns = class Ns extends Jt {
    static create(t) {
      const n = super.create();
      return (
        t ? n.setAttribute("data-row", t) : n.setAttribute("data-row", tc()), n
      );
    }
    static formats(t) {
      if (t.hasAttribute("data-row")) return t.getAttribute("data-row");
    }
    cellOffset() {
      return this.parent ? this.parent.children.indexOf(this) : -1;
    }
    format(t, n) {
      t === Ns.blotName && n
        ? this.domNode.setAttribute("data-row", n)
        : super.format(t, n);
    }
    row() {
      return this.parent;
    }
    rowOffset() {
      return this.row() ? this.row().rowOffset() : -1;
    }
    table() {
      return this.row() && this.row().table();
    }
  };
  at(Ns, "blotName", "table"), at(Ns, "tagName", "TD");
  let Me = Ns;
  class xn extends cr {
    checkMerge() {
      if (super.checkMerge() && this.next.children.head != null) {
        const t = this.children.head.formats(),
          n = this.children.tail.formats(),
          r = this.next.children.head.formats(),
          s = this.next.children.tail.formats();
        return (
          t.table === n.table && t.table === r.table && t.table === s.table
        );
      }
      return !1;
    }
    optimize(t) {
      super.optimize(t),
        this.children.forEach((n) => {
          if (n.next == null) return;
          const r = n.formats(),
            s = n.next.formats();
          if (r.table !== s.table) {
            const i = this.splitAfter(n);
            i && i.optimize(), this.prev && this.prev.optimize();
          }
        });
    }
    rowOffset() {
      return this.parent ? this.parent.children.indexOf(this) : -1;
    }
    table() {
      return this.parent && this.parent.parent;
    }
  }
  at(xn, "blotName", "table-row"), at(xn, "tagName", "TR");
  class tn extends cr {}
  at(tn, "blotName", "table-body"), at(tn, "tagName", "TBODY");
  class Kr extends cr {
    balanceCells() {
      const t = this.descendants(xn),
        n = t.reduce((r, s) => Math.max(s.children.length, r), 0);
      t.forEach((r) => {
        new Array(n - r.children.length).fill(0).forEach(() => {
          let s;
          r.children.head != null && (s = Me.formats(r.children.head.domNode));
          const i = this.scroll.create(Me.blotName, s);
          r.appendChild(i), i.optimize();
        });
      });
    }
    cells(t) {
      return this.rows().map((n) => n.children.at(t));
    }
    deleteColumn(t) {
      const [n] = this.descendant(tn);
      n == null ||
        n.children.head == null ||
        n.children.forEach((r) => {
          const s = r.children.at(t);
          s != null && s.remove();
        });
    }
    insertColumn(t) {
      const [n] = this.descendant(tn);
      n == null ||
        n.children.head == null ||
        n.children.forEach((r) => {
          const s = r.children.at(t),
            i = Me.formats(r.children.head.domNode),
            o = this.scroll.create(Me.blotName, i);
          r.insertBefore(o, s);
        });
    }
    insertRow(t) {
      const [n] = this.descendant(tn);
      if (n == null || n.children.head == null) return;
      const r = tc(),
        s = this.scroll.create(xn.blotName);
      n.children.head.children.forEach(() => {
        const o = this.scroll.create(Me.blotName, r);
        s.appendChild(o);
      });
      const i = n.children.at(t);
      n.insertBefore(s, i);
    }
    rows() {
      const t = this.children.head;
      return t == null ? [] : t.children.map((n) => n);
    }
  }
  at(Kr, "blotName", "table-container"), at(Kr, "tagName", "TABLE");
  Kr.allowedChildren = [tn];
  tn.requiredContainer = Kr;
  tn.allowedChildren = [xn];
  xn.requiredContainer = tn;
  xn.allowedChildren = [Me];
  Me.requiredContainer = xn;
  function tc() {
    return `row-${Math.random().toString(36).slice(2, 6)}`;
  }
  class __ extends Fe {
    static register() {
      U.register(Me), U.register(xn), U.register(tn), U.register(Kr);
    }
    constructor() {
      super(...arguments), this.listenBalanceCells();
    }
    balanceTables() {
      this.quill.scroll.descendants(Kr).forEach((t) => {
        t.balanceCells();
      });
    }
    deleteColumn() {
      const [t, , n] = this.getTable();
      n != null &&
        (t.deleteColumn(n.cellOffset()), this.quill.update(U.sources.USER));
    }
    deleteRow() {
      const [, t] = this.getTable();
      t != null && (t.remove(), this.quill.update(U.sources.USER));
    }
    deleteTable() {
      const [t] = this.getTable();
      if (t == null) return;
      const n = t.offset();
      t.remove(),
        this.quill.update(U.sources.USER),
        this.quill.setSelection(n, U.sources.SILENT);
    }
    getTable() {
      let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.quill.getSelection();
      if (t == null) return [null, null, null, -1];
      const [n, r] = this.quill.getLine(t.index);
      if (n == null || n.statics.blotName !== Me.blotName)
        return [null, null, null, -1];
      const s = n.parent;
      return [s.parent.parent, s, n, r];
    }
    insertColumn(t) {
      const n = this.quill.getSelection();
      if (!n) return;
      const [r, s, i] = this.getTable(n);
      if (i == null) return;
      const o = i.cellOffset();
      r.insertColumn(o + t), this.quill.update(U.sources.USER);
      let l = s.rowOffset();
      t === 0 && (l += 1),
        this.quill.setSelection(n.index + l, n.length, U.sources.SILENT);
    }
    insertColumnLeft() {
      this.insertColumn(0);
    }
    insertColumnRight() {
      this.insertColumn(1);
    }
    insertRow(t) {
      const n = this.quill.getSelection();
      if (!n) return;
      const [r, s, i] = this.getTable(n);
      if (i == null) return;
      const o = s.rowOffset();
      r.insertRow(o + t),
        this.quill.update(U.sources.USER),
        t > 0
          ? this.quill.setSelection(n, U.sources.SILENT)
          : this.quill.setSelection(
              n.index + s.children.length,
              n.length,
              U.sources.SILENT,
            );
    }
    insertRowAbove() {
      this.insertRow(0);
    }
    insertRowBelow() {
      this.insertRow(1);
    }
    insertTable(t, n) {
      const r = this.quill.getSelection();
      if (r == null) return;
      const s = new Array(t).fill(0).reduce((i) => {
        const o = new Array(n)
          .fill(
            `
`,
          )
          .join("");
        return i.insert(o, { table: tc() });
      }, new dt().retain(r.index));
      this.quill.updateContents(s, U.sources.USER),
        this.quill.setSelection(r.index, U.sources.SILENT),
        this.balanceTables();
    }
    listenBalanceCells() {
      this.quill.on(U.events.SCROLL_OPTIMIZE, (t) => {
        t.some((n) =>
          ["TD", "TR", "TBODY", "TABLE"].includes(n.target.tagName)
            ? (this.quill.once(U.events.TEXT_CHANGE, (r, s, i) => {
                i === U.sources.USER && this.balanceTables();
              }),
              !0)
            : !1,
        );
      });
    }
  }
  const Ju = Tn("quill:toolbar");
  class ec extends Fe {
    constructor(t, n) {
      var r, s;
      if ((super(t, n), Array.isArray(this.options.container))) {
        const i = document.createElement("div");
        i.setAttribute("role", "toolbar"),
          x_(i, this.options.container),
          (s = (r = t.container) == null ? void 0 : r.parentNode) == null ||
            s.insertBefore(i, t.container),
          (this.container = i);
      } else
        typeof this.options.container == "string"
          ? (this.container = document.querySelector(this.options.container))
          : (this.container = this.options.container);
      if (!(this.container instanceof HTMLElement)) {
        Ju.error("Container required for toolbar", this.options);
        return;
      }
      this.container.classList.add("ql-toolbar"),
        (this.controls = []),
        (this.handlers = {}),
        this.options.handlers &&
          Object.keys(this.options.handlers).forEach((i) => {
            var l;
            const o = (l = this.options.handlers) == null ? void 0 : l[i];
            o && this.addHandler(i, o);
          }),
        Array.from(this.container.querySelectorAll("button, select")).forEach(
          (i) => {
            this.attach(i);
          },
        ),
        this.quill.on(U.events.EDITOR_CHANGE, () => {
          const [i] = this.quill.selection.getRange();
          this.update(i);
        });
    }
    addHandler(t, n) {
      this.handlers[t] = n;
    }
    attach(t) {
      let n = Array.from(t.classList).find((s) => s.indexOf("ql-") === 0);
      if (!n) return;
      if (
        ((n = n.slice(3)),
        t.tagName === "BUTTON" && t.setAttribute("type", "button"),
        this.handlers[n] == null && this.quill.scroll.query(n) == null)
      ) {
        Ju.warn("ignoring attaching to nonexistent format", n, t);
        return;
      }
      const r = t.tagName === "SELECT" ? "change" : "click";
      t.addEventListener(r, (s) => {
        let i;
        if (t.tagName === "SELECT") {
          if (t.selectedIndex < 0) return;
          const l = t.options[t.selectedIndex];
          l.hasAttribute("selected") ? (i = !1) : (i = l.value || !1);
        } else
          t.classList.contains("ql-active")
            ? (i = !1)
            : (i = t.value || !t.hasAttribute("value")),
            s.preventDefault();
        this.quill.focus();
        const [o] = this.quill.selection.getRange();
        if (this.handlers[n] != null) this.handlers[n].call(this, i);
        else if (this.quill.scroll.query(n).prototype instanceof ye) {
          if (((i = prompt(`Enter ${n}`)), !i)) return;
          this.quill.updateContents(
            new dt()
              .retain(o.index)
              .delete(o.length)
              .insert({ [n]: i }),
            U.sources.USER,
          );
        } else this.quill.format(n, i, U.sources.USER);
        this.update(o);
      }),
        this.controls.push([n, t]);
    }
    update(t) {
      const n = t == null ? {} : this.quill.getFormat(t);
      this.controls.forEach((r) => {
        const [s, i] = r;
        if (i.tagName === "SELECT") {
          let o = null;
          if (t == null) o = null;
          else if (n[s] == null) o = i.querySelector("option[selected]");
          else if (!Array.isArray(n[s])) {
            let l = n[s];
            typeof l == "string" && (l = l.replace(/"/g, '\\"')),
              (o = i.querySelector(`option[value="${l}"]`));
          }
          o == null
            ? ((i.value = ""), (i.selectedIndex = -1))
            : (o.selected = !0);
        } else if (t == null)
          i.classList.remove("ql-active"),
            i.setAttribute("aria-pressed", "false");
        else if (i.hasAttribute("value")) {
          const o = n[s],
            l =
              o === i.getAttribute("value") ||
              (o != null && o.toString() === i.getAttribute("value")) ||
              (o == null && !i.getAttribute("value"));
          i.classList.toggle("ql-active", l),
            i.setAttribute("aria-pressed", l.toString());
        } else {
          const o = n[s] != null;
          i.classList.toggle("ql-active", o),
            i.setAttribute("aria-pressed", o.toString());
        }
      });
    }
  }
  ec.DEFAULTS = {};
  function Qu(e, t, n) {
    const r = document.createElement("button");
    r.setAttribute("type", "button"),
      r.classList.add(`ql-${t}`),
      r.setAttribute("aria-pressed", "false"),
      n != null
        ? ((r.value = n), r.setAttribute("aria-label", `${t}: ${n}`))
        : r.setAttribute("aria-label", t),
      e.appendChild(r);
  }
  function x_(e, t) {
    Array.isArray(t[0]) || (t = [t]),
      t.forEach((n) => {
        const r = document.createElement("span");
        r.classList.add("ql-formats"),
          n.forEach((s) => {
            if (typeof s == "string") Qu(r, s);
            else {
              const i = Object.keys(s)[0],
                o = s[i];
              Array.isArray(o) ? E_(r, i, o) : Qu(r, i, o);
            }
          }),
          e.appendChild(r);
      });
  }
  function E_(e, t, n) {
    const r = document.createElement("select");
    r.classList.add(`ql-${t}`),
      n.forEach((s) => {
        const i = document.createElement("option");
        s !== !1
          ? i.setAttribute("value", String(s))
          : i.setAttribute("selected", "selected"),
          r.appendChild(i);
      }),
      e.appendChild(r);
  }
  ec.DEFAULTS = {
    container: null,
    handlers: {
      clean() {
        const e = this.quill.getSelection();
        if (e != null)
          if (e.length === 0) {
            const t = this.quill.getFormat();
            Object.keys(t).forEach((n) => {
              this.quill.scroll.query(n, gt.INLINE) != null &&
                this.quill.format(n, !1, U.sources.USER);
            });
          } else this.quill.removeFormat(e.index, e.length, U.sources.USER);
      },
      direction(e) {
        const { align: t } = this.quill.getFormat();
        e === "rtl" && t == null
          ? this.quill.format("align", "right", U.sources.USER)
          : !e &&
            t === "right" &&
            this.quill.format("align", !1, U.sources.USER),
          this.quill.format("direction", e, U.sources.USER);
      },
      indent(e) {
        const t = this.quill.getSelection(),
          n = this.quill.getFormat(t),
          r = parseInt(n.indent || 0, 10);
        if (e === "+1" || e === "-1") {
          let s = e === "+1" ? 1 : -1;
          n.direction === "rtl" && (s *= -1),
            this.quill.format("indent", r + s, U.sources.USER);
        }
      },
      link(e) {
        e === !0 && (e = prompt("Enter link URL:")),
          this.quill.format("link", e, U.sources.USER);
      },
      list(e) {
        const t = this.quill.getSelection(),
          n = this.quill.getFormat(t);
        e === "check"
          ? n.list === "checked" || n.list === "unchecked"
            ? this.quill.format("list", !1, U.sources.USER)
            : this.quill.format("list", "unchecked", U.sources.USER)
          : this.quill.format("list", e, U.sources.USER);
      },
    },
  };
  const A_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',
    T_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',
    S_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',
    N_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>',
    C_ =
      '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',
    O_ =
      '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',
    L_ =
      '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',
    k_ =
      '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',
    Xu =
      '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>',
    R_ =
      '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',
    I_ =
      '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',
    q_ =
      '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>',
    M_ =
      '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',
    P_ =
      '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',
    B_ =
      '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
    j_ =
      '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
    D_ =
      '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>',
    $_ =
      '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
    U_ =
      '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>',
    F_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',
    H_ =
      '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',
    z_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',
    K_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>',
    V_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',
    G_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',
    W_ =
      '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',
    Z_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>',
    Y_ =
      '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',
    J_ =
      '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>',
    Q_ =
      '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',
    X_ =
      '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',
    tx =
      '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',
    ex =
      '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>',
    Us = {
      align: { "": A_, center: T_, right: S_, justify: N_ },
      background: C_,
      blockquote: O_,
      bold: L_,
      clean: k_,
      code: Xu,
      "code-block": Xu,
      color: R_,
      direction: { "": I_, rtl: q_ },
      formula: M_,
      header: { 1: P_, 2: B_, 3: j_, 4: D_, 5: $_, 6: U_ },
      italic: F_,
      image: H_,
      indent: { "+1": z_, "-1": K_ },
      link: V_,
      list: { bullet: G_, check: W_, ordered: Z_ },
      script: { sub: Y_, super: J_ },
      strike: Q_,
      table: X_,
      underline: tx,
      video: ex,
    },
    nx =
      '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
  let tf = 0;
  function ef(e, t) {
    e.setAttribute(t, `${e.getAttribute(t) !== "true"}`);
  }
  class yo {
    constructor(t) {
      (this.select = t),
        (this.container = document.createElement("span")),
        this.buildPicker(),
        (this.select.style.display = "none"),
        this.select.parentNode.insertBefore(this.container, this.select),
        this.label.addEventListener("mousedown", () => {
          this.togglePicker();
        }),
        this.label.addEventListener("keydown", (n) => {
          switch (n.key) {
            case "Enter":
              this.togglePicker();
              break;
            case "Escape":
              this.escape(), n.preventDefault();
              break;
          }
        }),
        this.select.addEventListener("change", this.update.bind(this));
    }
    togglePicker() {
      this.container.classList.toggle("ql-expanded"),
        ef(this.label, "aria-expanded"),
        ef(this.options, "aria-hidden");
    }
    buildItem(t) {
      const n = document.createElement("span");
      (n.tabIndex = "0"),
        n.setAttribute("role", "button"),
        n.classList.add("ql-picker-item");
      const r = t.getAttribute("value");
      return (
        r && n.setAttribute("data-value", r),
        t.textContent && n.setAttribute("data-label", t.textContent),
        n.addEventListener("click", () => {
          this.selectItem(n, !0);
        }),
        n.addEventListener("keydown", (s) => {
          switch (s.key) {
            case "Enter":
              this.selectItem(n, !0), s.preventDefault();
              break;
            case "Escape":
              this.escape(), s.preventDefault();
              break;
          }
        }),
        n
      );
    }
    buildLabel() {
      const t = document.createElement("span");
      return (
        t.classList.add("ql-picker-label"),
        (t.innerHTML = nx),
        (t.tabIndex = "0"),
        t.setAttribute("role", "button"),
        t.setAttribute("aria-expanded", "false"),
        this.container.appendChild(t),
        t
      );
    }
    buildOptions() {
      const t = document.createElement("span");
      t.classList.add("ql-picker-options"),
        t.setAttribute("aria-hidden", "true"),
        (t.tabIndex = "-1"),
        (t.id = `ql-picker-options-${tf}`),
        (tf += 1),
        this.label.setAttribute("aria-controls", t.id),
        (this.options = t),
        Array.from(this.select.options).forEach((n) => {
          const r = this.buildItem(n);
          t.appendChild(r), n.selected === !0 && this.selectItem(r);
        }),
        this.container.appendChild(t);
    }
    buildPicker() {
      Array.from(this.select.attributes).forEach((t) => {
        this.container.setAttribute(t.name, t.value);
      }),
        this.container.classList.add("ql-picker"),
        (this.label = this.buildLabel()),
        this.buildOptions();
    }
    escape() {
      this.close(), setTimeout(() => this.label.focus(), 1);
    }
    close() {
      this.container.classList.remove("ql-expanded"),
        this.label.setAttribute("aria-expanded", "false"),
        this.options.setAttribute("aria-hidden", "true");
    }
    selectItem(t) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const r = this.container.querySelector(".ql-selected");
      t !== r &&
        (r != null && r.classList.remove("ql-selected"),
        t != null &&
          (t.classList.add("ql-selected"),
          (this.select.selectedIndex = Array.from(
            t.parentNode.children,
          ).indexOf(t)),
          t.hasAttribute("data-value")
            ? this.label.setAttribute(
                "data-value",
                t.getAttribute("data-value"),
              )
            : this.label.removeAttribute("data-value"),
          t.hasAttribute("data-label")
            ? this.label.setAttribute(
                "data-label",
                t.getAttribute("data-label"),
              )
            : this.label.removeAttribute("data-label"),
          n && (this.select.dispatchEvent(new Event("change")), this.close())));
    }
    update() {
      let t;
      if (this.select.selectedIndex > -1) {
        const r =
          this.container.querySelector(".ql-picker-options").children[
            this.select.selectedIndex
          ];
        (t = this.select.options[this.select.selectedIndex]),
          this.selectItem(r);
      } else this.selectItem(null);
      const n =
        t != null && t !== this.select.querySelector("option[selected]");
      this.label.classList.toggle("ql-active", n);
    }
  }
  class _d extends yo {
    constructor(t, n) {
      super(t),
        (this.label.innerHTML = n),
        this.container.classList.add("ql-color-picker"),
        Array.from(this.container.querySelectorAll(".ql-picker-item"))
          .slice(0, 7)
          .forEach((r) => {
            r.classList.add("ql-primary");
          });
    }
    buildItem(t) {
      const n = super.buildItem(t);
      return (n.style.backgroundColor = t.getAttribute("value") || ""), n;
    }
    selectItem(t, n) {
      super.selectItem(t, n);
      const r = this.label.querySelector(".ql-color-label"),
        s = (t && t.getAttribute("data-value")) || "";
      r && (r.tagName === "line" ? (r.style.stroke = s) : (r.style.fill = s));
    }
  }
  class xd extends yo {
    constructor(t, n) {
      super(t),
        this.container.classList.add("ql-icon-picker"),
        Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach(
          (r) => {
            r.innerHTML = n[r.getAttribute("data-value") || ""];
          },
        ),
        (this.defaultItem = this.container.querySelector(".ql-selected")),
        this.selectItem(this.defaultItem);
    }
    selectItem(t, n) {
      super.selectItem(t, n);
      const r = t || this.defaultItem;
      if (r != null) {
        if (this.label.innerHTML === r.innerHTML) return;
        this.label.innerHTML = r.innerHTML;
      }
    }
  }
  const rx = (e) => {
    const { overflowY: t } = getComputedStyle(e, null);
    return t !== "visible" && t !== "clip";
  };
  class Ed {
    constructor(t, n) {
      (this.quill = t),
        (this.boundsContainer = n || document.body),
        (this.root = t.addContainer("ql-tooltip")),
        (this.root.innerHTML = this.constructor.TEMPLATE),
        rx(this.quill.root) &&
          this.quill.root.addEventListener("scroll", () => {
            this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
          }),
        this.hide();
    }
    hide() {
      this.root.classList.add("ql-hidden");
    }
    position(t) {
      const n = t.left + t.width / 2 - this.root.offsetWidth / 2,
        r = t.bottom + this.quill.root.scrollTop;
      (this.root.style.left = `${n}px`),
        (this.root.style.top = `${r}px`),
        this.root.classList.remove("ql-flip");
      const s = this.boundsContainer.getBoundingClientRect(),
        i = this.root.getBoundingClientRect();
      let o = 0;
      if (
        (i.right > s.right &&
          ((o = s.right - i.right), (this.root.style.left = `${n + o}px`)),
        i.left < s.left &&
          ((o = s.left - i.left), (this.root.style.left = `${n + o}px`)),
        i.bottom > s.bottom)
      ) {
        const l = i.bottom - i.top,
          a = t.bottom - t.top + l;
        (this.root.style.top = `${r - a}px`),
          this.root.classList.add("ql-flip");
      }
      return o;
    }
    show() {
      this.root.classList.remove("ql-editing"),
        this.root.classList.remove("ql-hidden");
    }
  }
  const sx = [!1, "center", "right", "justify"],
    ix = [
      "#000000",
      "#e60000",
      "#ff9900",
      "#ffff00",
      "#008a00",
      "#0066cc",
      "#9933ff",
      "#ffffff",
      "#facccc",
      "#ffebcc",
      "#ffffcc",
      "#cce8cc",
      "#cce0f5",
      "#ebd6ff",
      "#bbbbbb",
      "#f06666",
      "#ffc266",
      "#ffff66",
      "#66b966",
      "#66a3e0",
      "#c285ff",
      "#888888",
      "#a10000",
      "#b26b00",
      "#b2b200",
      "#006100",
      "#0047b2",
      "#6b24b2",
      "#444444",
      "#5c0000",
      "#663d00",
      "#666600",
      "#003700",
      "#002966",
      "#3d1466",
    ],
    ox = [!1, "serif", "monospace"],
    lx = ["1", "2", "3", !1],
    ax = ["small", !1, "large", "huge"];
  class Js extends zr {
    constructor(t, n) {
      super(t, n);
      const r = (s) => {
        if (!document.body.contains(t.root)) {
          document.body.removeEventListener("click", r);
          return;
        }
        this.tooltip != null &&
          !this.tooltip.root.contains(s.target) &&
          document.activeElement !== this.tooltip.textbox &&
          !this.quill.hasFocus() &&
          this.tooltip.hide(),
          this.pickers != null &&
            this.pickers.forEach((i) => {
              i.container.contains(s.target) || i.close();
            });
      };
      t.emitter.listenDOM("click", document.body, r);
    }
    addModule(t) {
      const n = super.addModule(t);
      return t === "toolbar" && this.extendToolbar(n), n;
    }
    buildButtons(t, n) {
      Array.from(t).forEach((r) => {
        (r.getAttribute("class") || "").split(/\s+/).forEach((i) => {
          if (i.startsWith("ql-") && ((i = i.slice(3)), n[i] != null))
            if (i === "direction") r.innerHTML = n[i][""] + n[i].rtl;
            else if (typeof n[i] == "string") r.innerHTML = n[i];
            else {
              const o = r.value || "";
              o != null && n[i][o] && (r.innerHTML = n[i][o]);
            }
        });
      });
    }
    buildPickers(t, n) {
      this.pickers = Array.from(t).map((s) => {
        if (
          s.classList.contains("ql-align") &&
          (s.querySelector("option") == null && us(s, sx),
          typeof n.align == "object")
        )
          return new xd(s, n.align);
        if (
          s.classList.contains("ql-background") ||
          s.classList.contains("ql-color")
        ) {
          const i = s.classList.contains("ql-background")
            ? "background"
            : "color";
          return (
            s.querySelector("option") == null &&
              us(s, ix, i === "background" ? "#ffffff" : "#000000"),
            new _d(s, n[i])
          );
        }
        return (
          s.querySelector("option") == null &&
            (s.classList.contains("ql-font")
              ? us(s, ox)
              : s.classList.contains("ql-header")
                ? us(s, lx)
                : s.classList.contains("ql-size") && us(s, ax)),
          new yo(s)
        );
      });
      const r = () => {
        this.pickers.forEach((s) => {
          s.update();
        });
      };
      this.quill.on(ft.events.EDITOR_CHANGE, r);
    }
  }
  Js.DEFAULTS = Bn({}, zr.DEFAULTS, {
    modules: {
      toolbar: {
        handlers: {
          formula() {
            this.quill.theme.tooltip.edit("formula");
          },
          image() {
            let e = this.container.querySelector("input.ql-image[type=file]");
            e == null &&
              ((e = document.createElement("input")),
              e.setAttribute("type", "file"),
              e.setAttribute(
                "accept",
                this.quill.uploader.options.mimetypes.join(", "),
              ),
              e.classList.add("ql-image"),
              e.addEventListener("change", () => {
                const t = this.quill.getSelection(!0);
                this.quill.uploader.upload(t, e.files), (e.value = "");
              }),
              this.container.appendChild(e)),
              e.click();
          },
          video() {
            this.quill.theme.tooltip.edit("video");
          },
        },
      },
    },
  });
  class Ad extends Ed {
    constructor(t, n) {
      super(t, n),
        (this.textbox = this.root.querySelector('input[type="text"]')),
        this.listen();
    }
    listen() {
      this.textbox.addEventListener("keydown", (t) => {
        t.key === "Enter"
          ? (this.save(), t.preventDefault())
          : t.key === "Escape" && (this.cancel(), t.preventDefault());
      });
    }
    cancel() {
      this.hide(), this.restoreFocus();
    }
    edit() {
      let t =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : "link",
        n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (
        (this.root.classList.remove("ql-hidden"),
        this.root.classList.add("ql-editing"),
        this.textbox == null)
      )
        return;
      n != null
        ? (this.textbox.value = n)
        : t !== this.root.getAttribute("data-mode") &&
          (this.textbox.value = "");
      const r = this.quill.getBounds(this.quill.selection.savedRange);
      r != null && this.position(r),
        this.textbox.select(),
        this.textbox.setAttribute(
          "placeholder",
          this.textbox.getAttribute(`data-${t}`) || "",
        ),
        this.root.setAttribute("data-mode", t);
    }
    restoreFocus() {
      this.quill.focus({ preventScroll: !0 });
    }
    save() {
      let { value: t } = this.textbox;
      switch (this.root.getAttribute("data-mode")) {
        case "link": {
          const { scrollTop: n } = this.quill.root;
          this.linkRange
            ? (this.quill.formatText(
                this.linkRange,
                "link",
                t,
                ft.sources.USER,
              ),
              delete this.linkRange)
            : (this.restoreFocus(),
              this.quill.format("link", t, ft.sources.USER)),
            (this.quill.root.scrollTop = n);
          break;
        }
        case "video":
          t = cx(t);
        case "formula": {
          if (!t) break;
          const n = this.quill.getSelection(!0);
          if (n != null) {
            const r = n.index + n.length;
            this.quill.insertEmbed(
              r,
              this.root.getAttribute("data-mode"),
              t,
              ft.sources.USER,
            ),
              this.root.getAttribute("data-mode") === "formula" &&
                this.quill.insertText(r + 1, " ", ft.sources.USER),
              this.quill.setSelection(r + 2, ft.sources.USER);
          }
          break;
        }
      }
      (this.textbox.value = ""), this.hide();
    }
  }
  function cx(e) {
    let t =
      e.match(
        /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/,
      ) ||
      e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
    return t
      ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0`
      : (t = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
        ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/`
        : e;
  }
  function us(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    t.forEach((r) => {
      const s = document.createElement("option");
      r === n
        ? s.setAttribute("selected", "selected")
        : s.setAttribute("value", String(r)),
        e.appendChild(s);
    });
  }
  const ux = [
    ["bold", "italic", "link"],
    [{ header: 1 }, { header: 2 }, "blockquote"],
  ];
  class Td extends Ad {
    constructor(t, n) {
      super(t, n),
        this.quill.on(ft.events.EDITOR_CHANGE, (r, s, i, o) => {
          if (r === ft.events.SELECTION_CHANGE)
            if (s != null && s.length > 0 && o === ft.sources.USER) {
              this.show(),
                (this.root.style.left = "0px"),
                (this.root.style.width = ""),
                (this.root.style.width = `${this.root.offsetWidth}px`);
              const l = this.quill.getLines(s.index, s.length);
              if (l.length === 1) {
                const a = this.quill.getBounds(s);
                a != null && this.position(a);
              } else {
                const a = l[l.length - 1],
                  u = this.quill.getIndex(a),
                  f = Math.min(a.length() - 1, s.index + s.length - u),
                  d = this.quill.getBounds(new sr(u, f));
                d != null && this.position(d);
              }
            } else
              document.activeElement !== this.textbox &&
                this.quill.hasFocus() &&
                this.hide();
        });
    }
    listen() {
      super.listen(),
        this.root.querySelector(".ql-close").addEventListener("click", () => {
          this.root.classList.remove("ql-editing");
        }),
        this.quill.on(ft.events.SCROLL_OPTIMIZE, () => {
          setTimeout(() => {
            if (this.root.classList.contains("ql-hidden")) return;
            const t = this.quill.getSelection();
            if (t != null) {
              const n = this.quill.getBounds(t);
              n != null && this.position(n);
            }
          }, 1);
        });
    }
    cancel() {
      this.show();
    }
    position(t) {
      const n = super.position(t),
        r = this.root.querySelector(".ql-tooltip-arrow");
      return (
        (r.style.marginLeft = ""),
        n !== 0 && (r.style.marginLeft = `${-1 * n - r.offsetWidth / 2}px`),
        n
      );
    }
  }
  at(
    Td,
    "TEMPLATE",
    [
      '<span class="ql-tooltip-arrow"></span>',
      '<div class="ql-tooltip-editor">',
      '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
      '<a class="ql-close"></a>',
      "</div>",
    ].join(""),
  );
  class Sd extends Js {
    constructor(t, n) {
      n.modules.toolbar != null &&
        n.modules.toolbar.container == null &&
        (n.modules.toolbar.container = ux),
        super(t, n),
        this.quill.container.classList.add("ql-bubble");
    }
    extendToolbar(t) {
      (this.tooltip = new Td(this.quill, this.options.bounds)),
        t.container != null &&
          (this.tooltip.root.appendChild(t.container),
          this.buildButtons(t.container.querySelectorAll("button"), Us),
          this.buildPickers(t.container.querySelectorAll("select"), Us));
    }
  }
  Sd.DEFAULTS = Bn({}, Js.DEFAULTS, {
    modules: {
      toolbar: {
        handlers: {
          link(e) {
            e
              ? this.quill.theme.tooltip.edit()
              : this.quill.format("link", !1, U.sources.USER);
          },
        },
      },
    },
  });
  const fx = [
    [{ header: ["1", "2", "3", !1] }],
    ["bold", "italic", "underline", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ];
  class Nd extends Ad {
    constructor() {
      super(...arguments);
      at(this, "preview", this.root.querySelector("a.ql-preview"));
    }
    listen() {
      super.listen(),
        this.root
          .querySelector("a.ql-action")
          .addEventListener("click", (n) => {
            this.root.classList.contains("ql-editing")
              ? this.save()
              : this.edit("link", this.preview.textContent),
              n.preventDefault();
          }),
        this.root
          .querySelector("a.ql-remove")
          .addEventListener("click", (n) => {
            if (this.linkRange != null) {
              const r = this.linkRange;
              this.restoreFocus(),
                this.quill.formatText(r, "link", !1, ft.sources.USER),
                delete this.linkRange;
            }
            n.preventDefault(), this.hide();
          }),
        this.quill.on(ft.events.SELECTION_CHANGE, (n, r, s) => {
          if (n != null) {
            if (n.length === 0 && s === ft.sources.USER) {
              const [i, o] = this.quill.scroll.descendant(Mn, n.index);
              if (i != null) {
                this.linkRange = new sr(n.index - o, i.length());
                const l = Mn.formats(i.domNode);
                (this.preview.textContent = l),
                  this.preview.setAttribute("href", l),
                  this.show();
                const a = this.quill.getBounds(this.linkRange);
                a != null && this.position(a);
                return;
              }
            } else delete this.linkRange;
            this.hide();
          }
        });
    }
    show() {
      super.show(), this.root.removeAttribute("data-mode");
    }
  }
  at(
    Nd,
    "TEMPLATE",
    [
      '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
      '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
      '<a class="ql-action"></a>',
      '<a class="ql-remove"></a>',
    ].join(""),
  );
  class Cd extends Js {
    constructor(t, n) {
      n.modules.toolbar != null &&
        n.modules.toolbar.container == null &&
        (n.modules.toolbar.container = fx),
        super(t, n),
        this.quill.container.classList.add("ql-snow");
    }
    extendToolbar(t) {
      t.container != null &&
        (t.container.classList.add("ql-snow"),
        this.buildButtons(t.container.querySelectorAll("button"), Us),
        this.buildPickers(t.container.querySelectorAll("select"), Us),
        (this.tooltip = new Nd(this.quill, this.options.bounds)),
        t.container.querySelector(".ql-link") &&
          this.quill.keyboard.addBinding({ key: "k", shortKey: !0 }, (n, r) => {
            t.handlers.link.call(t, !r.format.link);
          }));
    }
  }
  Cd.DEFAULTS = Bn({}, Js.DEFAULTS, {
    modules: {
      toolbar: {
        handlers: {
          link(e) {
            if (e) {
              const t = this.quill.getSelection();
              if (t == null || t.length === 0) return;
              let n = this.quill.getText(t);
              /^\S+@\S+\.\S+$/.test(n) &&
                n.indexOf("mailto:") !== 0 &&
                (n = `mailto:${n}`);
              const { tooltip: r } = this.quill.theme;
              r.edit("link", n);
            } else this.quill.format("link", !1, U.sources.USER);
          },
        },
      },
    },
  });
  U.register(
    {
      "attributors/attribute/direction": ld,
      "attributors/class/align": sd,
      "attributors/class/background": Ow,
      "attributors/class/color": Cw,
      "attributors/class/direction": ad,
      "attributors/class/font": fd,
      "attributors/class/size": dd,
      "attributors/style/align": id,
      "attributors/style/background": Za,
      "attributors/style/color": Wa,
      "attributors/style/direction": cd,
      "attributors/style/font": hd,
      "attributors/style/size": pd,
    },
    !0,
  );
  U.register(
    {
      "formats/align": sd,
      "formats/direction": ad,
      "formats/indent": v_,
      "formats/background": Za,
      "formats/color": Wa,
      "formats/font": fd,
      "formats/size": dd,
      "formats/blockquote": ia,
      "formats/code-block": oe,
      "formats/header": oa,
      "formats/list": Ys,
      "formats/bold": $s,
      "formats/code": Ya,
      "formats/italic": la,
      "formats/link": Mn,
      "formats/script": aa,
      "formats/strike": ca,
      "formats/underline": ua,
      "formats/formula": qi,
      "formats/image": fa,
      "formats/video": Mi,
      "modules/syntax": wd,
      "modules/table": __,
      "modules/toolbar": ec,
      "themes/bubble": Sd,
      "themes/snow": Cd,
      "ui/icons": Us,
      "ui/picker": yo,
      "ui/icon-picker": xd,
      "ui/color-picker": _d,
      "ui/tooltip": Ed,
    },
    !0,
  );
  const hx = {
      data() {
        return {
          reservations: JSON.parse(localStorage.getItem("reservations")) || [],
          newReservation: { time: "", name: "", people: "", table: "" },
          searchQuery: "",
          selectedTemplate: "menukaart.html",
          date: "",
          totalGuests: "",
        };
      },
      mounted() {
        const e = localStorage.getItem("date"),
          t = localStorage.getItem("totalGuests"),
          n = localStorage.getItem("reservations"),
          r = [
            [{ header: [2, 3] }],
            ["bold", "italic", "underline", "strike"],
            ["link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote"],
            ["clean"],
            [{ align: [] }],
            [{ color: [] }],
          ];
        (this.editorBlock1 = new U("#editorBlock1", {
          theme: "snow",
          placeholder: "",
          modules: { toolbar: r },
        })),
          e && t && n
            ? ((this.date = e),
              (this.totalGuests = t),
              (this.reservations = JSON.parse(n)))
            : this.reservations.push({
                time: "-",
                people: "-",
                name: "beste klant",
                table: "-",
              });
      },
      computed: {
        filteredReservations() {
          return this.reservations.filter((e) =>
            e.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
          );
        },
      },
      methods: {
        async generateHtml(e) {
          const t = this.selectedTemplate,
            r = await (await fetch("/venise-menu/" + t)).text();
          console.log(e);
          const s = () =>
              new Date().toLocaleString("nl-NL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
            i =
              "<p>Laat ons beginnen met het belangrijkste: </p><p><strong>We wensen jullie een aangename dag en een smakelijke maaltijd toe!</strong></p><p>Geniet nu van je gezelschap, de omgeving en het eten. </p><p>Jullie zijn natuurlijk niet naar hier gekomen om onze krant te lezen maar vooral om culinair te genieten en daar gaan we met plezier voor zorgen.</p>",
            o =
              "<h2>Tapas (à 1 à 2 pers)</h2><p>kaasballetjes gefrituurd (10st. €8,90) </p><p>bloemkoolroosjes (€6,20) </p><p>kippeboutjes gefrituurd (6st. €12,90) </p><p>Kaasstengels Oude Kaas (6st. €12,90) </p><p>Camembert WARM (€17,90)</p><p>Crevettes Royal 6 st. (€18,20)</p><p>Garnaalkroketjes mini (8st. €27,80)</p><p>1/2 pot mosselen natuur (€21,90)</p><p>met wijn | met look | v/h huis (€23,90) </p><p>Potje paté 100gr. (€11,90)</p><p>Scampi in pankojasje (4st. €19,40) </p><p>Spaanse ham gedroogd (€20,90)</p><p>Duo van olijven &amp; Tapenade (€11,90) </p><p>Vleeskroketjes 'Royal' mini 10st. (€17,90) </p><p>Witte worst gegrild (€12,90)</p><p>Zalm gerookt 'PREMIUM' (€25,90)</p>",
            l =
              "<h2>Dagsuggesties - Voorgerechten</h2><p>Vitello Tonnato (€18,90)</p><p>Carpaccio gemarineerd rund (€23,90)</p><p>Ganzeleverpastei (€23,40)</p><p>Jacobsnootjes 3st. duroc-ham butternutzalf (€27,40)</p><p><br></p><h2>Hoofdgerechten</h2><p>Gehaktballetjes in tomatensaus (€17,90)</p><p>Karnemelksmeus &amp; garnalen (€26,90)</p><p><br></p><h2>Pasta's en rijst</h2><p>Pasta Carbonara (€19,80)</p><p><br></p><h2>Salades</h2><p>Slaatje burrata (€19,50)</p><p>Tomaat garnalen (€33,90)</p><p>Garnalensalade (€34,90)</p><p>Slaatje geitenkaas (spekjes) (€23,40)</p><p><br></p><h2>Vlees en wild</h2><p>Rundsbrochette GEGRILD (€32,90)</p><p>Herteragout (€32,90)</p><p>Hazerug met wildsausje (€37,60)</p><p><br></p><h2>Vis en mosselen</h2><p>garnaalkroketten 2st. €25,90 | 3st. €30,90</p><p>Jacobsnootjes 5st., duroc-ham butternutzalf (€34,90)</p><p>Verse tonijn pepersaus licht gebakken (€34,90)</p><p>Zeebaars Mousseline (€31,90)</p><p>Zeetong gebakken (€42,80) baktijd 25 min.</p><p>Zeeuwse mosselen Natuur (€33,90)</p><p>Witte wijn | Look | v/h huis (€36,90)</p>";
          let a = localStorage.getItem("editorContentBlock1"),
            u = localStorage.getItem("editorContentBlock2"),
            f = localStorage.getItem("editorContentBlock3");
          return (
            a || ((a = o), localStorage.setItem("editorContentBlock1", a)),
            u || ((u = l), localStorage.setItem("editorContentBlock2", u)),
            f || ((f = i), localStorage.setItem("editorContentBlock3", f)),
            r
              .replace("{{name}}", e.name)
              .replace("{{date}}", this.date)
              .replace("{{table}}", e.table)
              .replace("{{time}}", e.time.replace(/\"/g, ""))
              .replace("{{people}}", e.people)
              .replace("{{note}}", e.note || " ")
              .replace("{{block1}}", a)
              .replace("{{block2}}", u)
              .replace("{{block3}}", f)
              .replace("{{currentDate}}", s())
          );
        },
        addReservation() {
          const e = {
            ...this.newReservation,
            note: this.editorBlock1.root.innerHTML,
          };
          this.reservations.push(e),
            localStorage.setItem(
              "reservations",
              JSON.stringify(this.reservations),
            ),
            (this.editorBlock1.root.innerHTML = ""),
            (this.newReservation = {
              time: "",
              name: "",
              people: "",
              table: "",
            });
        },
        resetSearch() {
          this.searchQuery = "";
        },
        deleteReservation(e) {
          this.reservations.splice(e, 1),
            localStorage.setItem(
              "reservations",
              JSON.stringify(this.reservations),
            );
        },
        handleFileUpload(e) {
          const t = e.target.files[0];
          t &&
            (localStorage.removeItem("reservations"),
            localStorage.removeItem("date"),
            localStorage.removeItem("totalGuests"),
            x1.parse(t, {
              header: !1,
              skipEmptyLines: !0,
              quoteChar: '""',
              delimiter: ",",
              complete: (n) => {
                var l, a, u;
                const r = n.data[0],
                  s = n.data[1];
                this.date = (l = r[1]) == null ? void 0 : l.trim();
                const i = (a = s[0]) == null ? void 0 : a.trim();
                this.totalGuests = i
                  ? (u = i.split("-")[1]) == null
                    ? void 0
                    : u.trim()
                  : "";
                const o = n.data.slice(3);
                this.parseReservations(o),
                  localStorage.setItem("date", this.date),
                  localStorage.setItem("totalGuests", this.totalGuests),
                  localStorage.setItem(
                    "reservations",
                    JSON.stringify(this.reservations),
                  );
              },
            }));
        },
        parseReservations(e) {
          (this.reservations = e.map((t) => {
            var n, r, s, i;
            return {
              time: (n = t[0]) == null ? void 0 : n.trim(),
              people: (r = t[1]) == null ? void 0 : r.trim(),
              name: (s = t[2]) == null ? void 0 : s.replace(/"/g, "").trim(),
              table: (i = t[3]) == null ? void 0 : i.replace(/"/g, "").trim(),
            };
          })),
            this.reservations.push({
              time: "-",
              people: "-",
              name: "beste klant",
              table: "-",
            }),
            localStorage.setItem(
              "reservations",
              JSON.stringify(this.reservations),
            );
        },
        printMenu(e) {
          this.generateHtml(e).then((t) => {
            this.openPrintWindow(t);
          });
        },
        printAll(e) {
          Promise.all(e.map(this.generateHtml)).then((t) => {
            let n = t.join("<hr style='margin: 2rem 0;'>");
            this.openPrintWindow(n);
          });
        },
        openPrintWindow(e) {
          const t = window.open("", "_blank");
          t.document.open(),
            t.document.write(e),
            setTimeout(() => {
              t.document.close(), t.print();
            }, "500");
        },
      },
    },
    dx = { class: "flex flex-wrap justify-between mx-auto max-w-screen-xl" },
    px = { class: "p-4" },
    gx = { class: "flex flex-col md:flex-row justify-between" },
    mx = { class: "relative mb-4 md:mb-0" },
    bx = { class: "mb-4" },
    yx = { class: "flex flex-col" },
    vx = { key: 0, class: "mb-4" },
    wx = { class: "text-md font-semibold" },
    _x = { class: "text-md" },
    xx = { class: "text-md" },
    Ex = { class: "flex items-center gap-2 mb-0" },
    Ax = {
      class: "table-auto w-full border-collapse border border-gray-400 mt-4",
    },
    Tx = ["innerHTML"],
    Sx = ["onClick"],
    Nx = { class: "border border-gray-300 px-4 py-1" },
    Cx = ["onClick"],
    Ox = { key: 0 },
    Lx = { class: "mt-5 p-4 border border-gray-200 bg-gray-50 rounded" },
    kx = { class: "flex gap-4 mb-4" };
  function Rx(e, t, n, r, s, i) {
    return (
      _e(),
      Re("div", null, [
        ht("div", dx, [
          ht("div", px, [
            ht("div", gx, [
              ht("div", mx, [
                t[10] ||
                  (t[10] = _s(
                    '<h4 class="text-sm mb-1">Upload CSV bestand van ZenChef</h4><p class="text-xs mb-2">Opgelet! Vorige reservaties worden bij upload verwijderd.</p><label for="file-upload" class="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md shadow cursor-pointer hover:bg-blue-600 text-sm cursor-pointer"><svg class="w-6 h-6 mr-3 inline text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"></path></svg> Upload CSV bestand </label>',
                    3,
                  )),
                ht(
                  "input",
                  {
                    id: "file-upload",
                    type: "file",
                    accept: ".csv",
                    onChange:
                      t[0] ||
                      (t[0] = (...o) =>
                        i.handleFileUpload && i.handleFileUpload(...o)),
                    class:
                      "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer",
                  },
                  null,
                  32,
                ),
              ]),
              ht("div", bx, [
                t[12] ||
                  (t[12] = ht(
                    "label",
                    {
                      for: "template-select",
                      class: "block text-sm font-medium text-gray-700",
                    },
                    "Kies een template:",
                    -1,
                  )),
                vr(
                  ht(
                    "select",
                    {
                      id: "template-select",
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (o) => (s.selectedTemplate = o)),
                      class:
                        "mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                    },
                    t[11] ||
                      (t[11] = [
                        _s(
                          '<option value="menukaart.html">Standaard Menu</option><option value="menukaart-kerst.html">🎄 Kerst</option><option value="menukaart-nieuwjaar.html">🥂 Nieuwjaar</option><option value="menukaart-verjaardag.html">🎈 Verjaardag</option><option value="menukaart-valentijn.html">♥️ Valentijn</option><option value="menukaart-pasen.html">🐣 Pasen</option><option value="menukaart-sans-serif.html">Sans-serif font</option>',
                          7,
                        ),
                      ]),
                    512,
                  ),
                  [[Jg, s.selectedTemplate]],
                ),
              ]),
              ht("div", yx, [
                s.date && s.totalGuests
                  ? (_e(),
                    Re("div", vx, [
                      ht("p", wx, "Datum: " + pn(s.date), 1),
                      ht(
                        "p",
                        _x,
                        "Aantal reservaties: " + pn(s.reservations.length - 1),
                        1,
                      ),
                      ht(
                        "p",
                        xx,
                        "Totaal aantal gasten: " + pn(s.totalGuests),
                        1,
                      ),
                    ]))
                  : Li("", !0),
                ht(
                  "button",
                  {
                    onClick: t[2] || (t[2] = (o) => i.printAll(s.reservations)),
                    class:
                      "bg-gray-700 text-white px-4 py-1 rounded mt-0 mb-5 flex items-center text-sm",
                  },
                  t[13] ||
                    (t[13] = [
                      ht(
                        "svg",
                        {
                          class:
                            "w-6 h-6 inline text-white dark:text-white mr-2",
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          fill: "none",
                          viewBox: "0 0 24 24",
                        },
                        [
                          ht("path", {
                            stroke: "currentColor",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z",
                          }),
                        ],
                        -1,
                      ),
                      er(" Print alle menukaarten "),
                    ]),
                ),
              ]),
            ]),
            ht("div", Ex, [
              vr(
                ht(
                  "input",
                  {
                    "onUpdate:modelValue":
                      t[3] || (t[3] = (o) => (s.searchQuery = o)),
                    type: "text",
                    placeholder: "Zoek op naam...",
                    class:
                      "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none",
                  },
                  null,
                  512,
                ),
                [[ls, s.searchQuery]],
              ),
              s.searchQuery
                ? (_e(),
                  Re(
                    "button",
                    {
                      key: 0,
                      onClick:
                        t[4] ||
                        (t[4] = (...o) => i.resetSearch && i.resetSearch(...o)),
                      class:
                        "px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none",
                    },
                    " Reset ",
                  ))
                : Li("", !0),
            ]),
            ht("table", Ax, [
              t[16] ||
                (t[16] = ht(
                  "thead",
                  null,
                  [
                    ht("tr", null, [
                      ht(
                        "th",
                        { class: "border border-gray-300 px-4 py-1 text-left" },
                        "Tijd",
                      ),
                      ht(
                        "th",
                        { class: "border border-gray-300 px-4 py-1 text-left" },
                        "Personen",
                      ),
                      ht(
                        "th",
                        { class: "border border-gray-300 px-4 py-1 text-left" },
                        "Naam",
                      ),
                      ht(
                        "th",
                        { class: "border border-gray-300 px-4 py-1 text-left" },
                        "Tafel",
                      ),
                      ht(
                        "th",
                        { class: "border border-gray-300 px-4 py-1 text-left" },
                        "Notitie",
                      ),
                      ht("th", {
                        class: "border border-gray-300 px-4 py-1 text-left",
                      }),
                      ht("th", {
                        class: "border border-gray-300 px-4 py-1 text-left",
                      }),
                    ]),
                  ],
                  -1,
                )),
              ht("tbody", null, [
                (_e(!0),
                Re(
                  Ye,
                  null,
                  Up(
                    i.filteredReservations,
                    (o, l) => (
                      _e(),
                      Re("tr", { key: l, class: "text-sm" }, [
                        ht(
                          "td",
                          {
                            class: mn([
                              "border border-gray-300 px-4 py-1",
                              { "bg-gray-100": o.name === "beste klant" },
                            ]),
                          },
                          pn(o.time.replace(/"/g, "")),
                          3,
                        ),
                        ht(
                          "td",
                          {
                            class: mn([
                              "border border-gray-300 px-4 py-1",
                              { "bg-gray-100": o.name === "beste klant" },
                            ]),
                          },
                          pn(o.people),
                          3,
                        ),
                        ht(
                          "td",
                          {
                            class: mn([
                              { "bg-gray-100": o.name === "beste klant" },
                              "border border-gray-300 px-4 py-1",
                            ]),
                          },
                          pn(o.name),
                          3,
                        ),
                        ht(
                          "td",
                          {
                            class: mn([
                              "border border-gray-300 px-4 py-1",
                              { "bg-gray-100": o.name === "beste klant" },
                            ]),
                          },
                          pn(o.table),
                          3,
                        ),
                        ht(
                          "td",
                          {
                            class: mn([
                              "border border-gray-300 px-4 py-1",
                              { "bg-gray-100": o.name === "beste klant" },
                            ]),
                            style: { "max-width": "250px" },
                            innerHTML: o.note,
                          },
                          null,
                          10,
                          Tx,
                        ),
                        ht(
                          "td",
                          {
                            class: mn([
                              "border border-gray-300 px-4 py-1",
                              { "bg-gray-100": o.name === "beste klant" },
                            ]),
                          },
                          [
                            ht("div", null, [
                              ht(
                                "button",
                                {
                                  onClick: (a) => i.printMenu(o),
                                  class:
                                    "bg-gray-700 text-white text-sm px-4 py-1 rounded",
                                },
                                t[14] ||
                                  (t[14] = [
                                    ht(
                                      "svg",
                                      {
                                        class:
                                          "w-4 h-4 inline mr-1 text-white dark:text-white",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                      },
                                      [
                                        ht("path", {
                                          stroke: "currentColor",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z",
                                        }),
                                      ],
                                      -1,
                                    ),
                                    er(" Print Menu"),
                                  ]),
                                8,
                                Sx,
                              ),
                            ]),
                          ],
                          2,
                        ),
                        ht("td", Nx, [
                          ht(
                            "button",
                            {
                              onClick: (a) => i.deleteReservation(l),
                              class:
                                "bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600",
                            },
                            " x ",
                            8,
                            Cx,
                          ),
                        ]),
                      ])
                    ),
                  ),
                  128,
                )),
                s.reservations.length == 0
                  ? (_e(),
                    Re(
                      "tr",
                      Ox,
                      t[15] ||
                        (t[15] = [
                          ht(
                            "td",
                            {
                              colspan: "5",
                              class: "ml-2 text-md bg-gray-50 py-2 px-3",
                            },
                            "Nog geen reservaties",
                            -1,
                          ),
                        ]),
                    ))
                  : Li("", !0),
              ]),
            ]),
            ht("div", Lx, [
              t[18] ||
                (t[18] = ht(
                  "h3",
                  { class: "text-lg font-semibold mb-2" },
                  "Manueel nieuwe reservering toevoegen",
                  -1,
                )),
              ht(
                "form",
                {
                  onSubmit:
                    t[9] ||
                    (t[9] = tm(
                      (...o) => i.addReservation && i.addReservation(...o),
                      ["prevent"],
                    )),
                },
                [
                  ht("div", kx, [
                    vr(
                      ht(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            t[5] || (t[5] = (o) => (s.newReservation.time = o)),
                          placeholder: "Tijdstip (bv. 18:00)",
                          class: "border border-gray-300 px-4 py-1 w-1/4",
                          required: "",
                        },
                        null,
                        512,
                      ),
                      [[ls, s.newReservation.time]],
                    ),
                    vr(
                      ht(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            t[6] || (t[6] = (o) => (s.newReservation.name = o)),
                          placeholder: "Naam",
                          class: "border border-gray-300 px-4 py-1 w-1/4",
                          required: "",
                        },
                        null,
                        512,
                      ),
                      [[ls, s.newReservation.name]],
                    ),
                    vr(
                      ht(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            t[7] ||
                            (t[7] = (o) => (s.newReservation.people = o)),
                          placeholder: "Aantal Personen",
                          class: "border border-gray-300 px-4 py-1 w-1/4",
                        },
                        null,
                        512,
                      ),
                      [[ls, s.newReservation.people]],
                    ),
                    vr(
                      ht(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            t[8] ||
                            (t[8] = (o) => (s.newReservation.table = o)),
                          placeholder: "Tafel",
                          class: "border border-gray-300 px-4 py-1 w-1/4",
                        },
                        null,
                        512,
                      ),
                      [[ls, s.newReservation.table]],
                    ),
                  ]),
                  t[17] ||
                    (t[17] = _s(
                      '<div class="flex flex-wrap gap-4"><div class="block-1 flex-1 min-w-[300px]"><h2 class="text-sm font-bold mb-2">Persoonlijke notitie (komt onder verwelkoming)</h2><div id="editorBlock1" class="editor-small"></div></div></div><button type="submit" class="bg-blue-500 text-white px-4 py-1 rounded text-md hover:bg-blue-600"><svg class="w-4 h-4 inline mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"></path></svg> Voeg toe </button>',
                      2,
                    )),
                ],
                32,
              ),
            ]),
            t[19] || (t[19] = ht("div", { class: "mt-5 py-4" }, null, -1)),
          ]),
        ]),
      ])
    );
  }
  const Ix = La(hx, [["render", Rx]]),
    qx = {
      data() {
        return {
          editorBlock1: null,
          editorBlock2: null,
          editorBlock3: null,
          showNotification: !1,
          lastSaved: null,
        };
      },
      mounted() {
        const e = [
          [{ header: [2, 3] }],
          ["bold", "italic", "underline", "strike"],
          ["link"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote"],
          ["clean"],
          [{ align: [] }],
          [{ color: [] }],
        ];
        (this.editorBlock1 = new U("#editorBlock1", {
          theme: "snow",
          placeholder: "Pas de linkse tekst aan",
          modules: { toolbar: e },
        })),
          (this.editorBlock2 = new U("#editorBlock2", {
            theme: "snow",
            placeholder: "Pas de rechtse tekst aan...",
            modules: { toolbar: e },
          })),
          (this.editorBlock3 = new U("#editorBlock3", {
            theme: "snow",
            placeholder: "Pas de tekst linksboven aan...",
            modules: { toolbar: e },
          }));
        const t = localStorage.getItem("editorContentBlock1"),
          n = localStorage.getItem("editorContentBlock2"),
          r = localStorage.getItem("editorContentBlock3");
        t
          ? (this.editorBlock1.root.innerHTML = t)
          : (this.editorBlock1.root.innerHTML =
              "<h2>Tapas (à 1 à 2 pers)</h2><p>kaasballetjes gefrituurd (10st. €8,90) </p><p>bloemkoolroosjes (€6,20) </p><p>kippeboutjes gefrituurd (6st. €12,90) </p><p>Kaasstengels Oude Kaas (6st. €12,90) </p><p>Camembert WARM (€17,90)</p><p>Crevettes Royal 6 st. (€18,20)</p><p>Garnaalkroketjes mini (8st. €27,80)</p><p>1/2 pot mosselen natuur (€21,90)</p><p>met wijn | met look | v/h huis (€23,90) </p><p>Potje paté 100gr. (€11,90)</p><p>Scampi in pankojasje (4st. €19,40) </p><p>Spaanse ham gedroogd (€20,90)</p><p>Duo van olijven &amp; Tapenade (€11,90) </p><p>Vleeskroketjes 'Royal' mini 10st. (€17,90) </p><p>Witte worst gegrild (€12,90)</p><p>Zalm gerookt 'PREMIUM' (€25,90)</p>"),
          n
            ? (this.editorBlock2.root.innerHTML = n)
            : (this.editorBlock2.root.innerHTML =
                "<h2>Dagsuggesties - Voorgerechten</h2><p>Vitello Tonnato (€18,90)</p><p>Carpaccio gemarineerd rund (€23,90)</p><p>Ganzeleverpastei (€23,40)</p><p>Jacobsnootjes 3st. duroc-ham butternutzalf (€27,40)</p><p><br></p><h2>Hoofdgerechten</h2><p>Gehaktballetjes in tomatensaus (€17,90)</p><p>Karnemelksmeus &amp; garnalen (€26,90)</p><p><br></p><h2>Pasta's en rijst</h2><p>Pasta Carbonara (€19,80)</p><p><br></p><h2>Salades</h2><p>Slaatje burrata (€19,50)</p><p>Tomaat garnalen (€33,90)</p><p>Garnalensalade (€34,90)</p><p>Slaatje geitenkaas (spekjes) (€23,40)</p><p><br></p><h2>Vlees en wild</h2><p>Rundsbrochette GEGRILD (€32,90)</p><p>Herteragout (€32,90)</p><p>Hazerug met wildsausje (€37,60)</p><p><br></p><h2>Vis en mosselen</h2><p>garnaalkroketten 2st. €25,90 | 3st. €30,90</p><p>Jacobsnootjes 5st., duroc-ham butternutzalf (€34,90)</p><p>Verse tonijn pepersaus licht gebakken (€34,90)</p><p>Zeebaars Mousseline (€31,90)</p><p>Zeetong gebakken (€42,80) baktijd 25 min.</p><p>Zeeuwse mosselen Natuur (€33,90)</p><p>Witte wijn | Look | v/h huis (€36,90)</p>"),
          r
            ? (this.editorBlock3.root.innerHTML = r)
            : (this.editorBlock3.root.innerHTML =
                "<p>Laat ons beginnen met het belangrijkste: </p><p><strong>We wensen jullie een aangename dag en een smakelijke maaltijd toe!</strong></p><p>Geniet nu van je gezelschap, de omgeving en het eten. </p><p>Jullie zijn natuurlijk niet naar hier gekomen om onze krant te lezen maar vooral om culinair te genieten en daar gaan we met plezier voor zorgen.</p>");
        const s = localStorage.getItem("lastSavedTime");
        s && (this.lastSaved = s);
      },
      methods: {
        saveContent() {
          const e = this.editorBlock1.root.innerHTML,
            t = this.editorBlock2.root.innerHTML,
            n = this.editorBlock3.root.innerHTML;
          localStorage.setItem("editorContentBlock1", e),
            localStorage.setItem("editorContentBlock2", t),
            localStorage.setItem("editorContentBlock3", n);
          const r = new Date(),
            s = `${r.toLocaleDateString()} ${r.toLocaleTimeString()}`;
          (this.lastSaved = s),
            localStorage.setItem("lastSavedTime", s),
            (this.showNotification = !0),
            setTimeout(() => {
              this.showNotification = !1;
            }, 3e3);
        },
      },
    },
    Mx = { class: "p-6 max-w-7xl mx-auto" },
    Px = {
      key: 0,
      class:
        "p-2 px-4 text-sm text-gray-800 rounded-lg bg-gray-100 dark:bg-gray-100 dark:text-black dark:border dark:border-gray-200 dark:text-gray-700 mb-4",
      role: "alert",
    },
    Bx = { class: "font-medium" },
    jx = {
      key: 1,
      class:
        "flex items-center p-2 px-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-50 dark:text-yellow-800 dark:border dark:border-yellow-300",
      role: "alert",
    },
    Dx = {
      key: 2,
      class:
        "fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300",
    };
  function $x(e, t, n, r, s, i) {
    return (
      _e(),
      Re("div", Mx, [
        t[3] ||
          (t[3] = ht(
            "h1",
            { class: "text-2xl font-semibold mb-4" },
            "Bewerk menukaart",
            -1,
          )),
        s.lastSaved
          ? (_e(),
            Re("div", Px, [
              t[1] || (t[1] = er(" Laatst opgeslagen op: ")),
              ht("span", Bx, pn(s.lastSaved), 1),
            ]))
          : (_e(),
            Re(
              "div",
              jx,
              t[2] ||
                (t[2] = [
                  ht(
                    "svg",
                    {
                      class: "flex-shrink-0 inline w-4 h-4 me-3",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                    },
                    [
                      ht("path", {
                        d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z",
                      }),
                    ],
                    -1,
                  ),
                  er(
                    " Dit is een standaard versie. Er zijn nog geen aanpassingen gemaakt hier aan. ",
                  ),
                ]),
            )),
        t[4] ||
          (t[4] = _s(
            '<div class="flex flex-wrap gap-4"><div class="block-3 flex-1 min-w-[300px]"><h2 class="text-xl font-bold mb-2">Tekst links boven</h2><div id="editorBlock3" class="editor-small"></div></div></div><div class="flex flex-wrap gap-4"><div class="block-1 flex-1 min-w-[300px]"><h2 class="text-xl font-bold mb-2">Tekst links onder</h2><div id="editorBlock1" class="editor"></div></div><div class="block-2 flex-1 min-w-[300px]"><h2 class="text-xl font-bold mb-2">Tekst rechts</h2><div id="editorBlock2" class="editor"></div></div></div>',
            2,
          )),
        ht(
          "button",
          {
            onClick:
              t[0] || (t[0] = (...o) => i.saveContent && i.saveContent(...o)),
            class: "mt-4 bg-blue-500 text-white px-4 py-2 rounded",
          },
          " Opslaan ",
        ),
        s.showNotification
          ? (_e(), Re("div", Dx, " Inhoud opgeslagen! "))
          : Li("", !0),
      ])
    );
  }
  const Ux = La(qx, [["render", $x]]),
    Fx = [
      { path: "/", name: "HomePage", component: Ix },
      { path: "/edit", name: "EditPage", component: Ux },
    ],
    Hx = b1({ history: Vm("/venise-menu/"), routes: Fx }),
    Od = rm(gm);
  Od.use(Hx);
  Od.mount("#app");
});
export default zx();

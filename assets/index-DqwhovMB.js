(function () {
  const U = document.createElement("link").relList;
  if (U && U.supports && U.supports("modulepreload")) return;
  for (const X of document.querySelectorAll('link[rel="modulepreload"]')) o(X);
  new MutationObserver((X) => {
    for (const L of X)
      if (L.type === "childList")
        for (const dl of L.addedNodes)
          dl.tagName === "LINK" && dl.rel === "modulepreload" && o(dl);
  }).observe(document, { childList: !0, subtree: !0 });
  function _(X) {
    const L = {};
    return (
      X.integrity && (L.integrity = X.integrity),
      X.referrerPolicy && (L.referrerPolicy = X.referrerPolicy),
      X.crossOrigin === "use-credentials"
        ? (L.credentials = "include")
        : X.crossOrigin === "anonymous"
        ? (L.credentials = "omit")
        : (L.credentials = "same-origin"),
      L
    );
  }
  function o(X) {
    if (X.ep) return;
    X.ep = !0;
    const L = _(X);
    fetch(X.href, L);
  }
})();
function Yv(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default")
    ? S.default
    : S;
}
var If = { exports: {} },
  me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function Bv() {
  if (Fd) return me;
  Fd = 1;
  var S = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.fragment");
  function _(o, X, L) {
    var dl = null;
    if (
      (L !== void 0 && (dl = "" + L),
      X.key !== void 0 && (dl = "" + X.key),
      "key" in X)
    ) {
      L = {};
      for (var El in X) El !== "key" && (L[El] = X[El]);
    } else L = X;
    return (
      (X = L.ref),
      { $$typeof: S, type: o, key: dl, ref: X !== void 0 ? X : null, props: L }
    );
  }
  return (me.Fragment = U), (me.jsx = _), (me.jsxs = _), me;
}
var Id;
function Gv() {
  return Id || ((Id = 1), (If.exports = Bv())), If.exports;
}
var z = Gv(),
  Pf = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd;
function Xv() {
  if (Pd) return Q;
  Pd = 1;
  var S = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    L = Symbol.for("react.consumer"),
    dl = Symbol.for("react.context"),
    El = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    O = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    fl = Symbol.iterator;
  function nl(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (fl && s[fl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var Hl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    rt = {};
  function Bl(s, A, D) {
    (this.props = s),
      (this.context = A),
      (this.refs = rt),
      (this.updater = D || Hl);
  }
  (Bl.prototype.isReactComponent = {}),
    (Bl.prototype.setState = function (s, A) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, A, "setState");
    }),
    (Bl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function ru() {}
  ru.prototype = Bl.prototype;
  function Ot(s, A, D) {
    (this.props = s),
      (this.context = A),
      (this.refs = rt),
      (this.updater = D || Hl);
  }
  var Dl = (Ot.prototype = new ru());
  (Dl.constructor = Ot), ql(Dl, Bl.prototype), (Dl.isPureReactComponent = !0);
  var ot = Array.isArray,
    W = { H: null, A: null, T: null, S: null, V: null },
    Vl = Object.prototype.hasOwnProperty;
  function Ll(s, A, D, M, H, $) {
    return (
      (D = $.ref),
      { $$typeof: S, type: s, key: A, ref: D !== void 0 ? D : null, props: $ }
    );
  }
  function Kl(s, A) {
    return Ll(s.type, A, void 0, void 0, void 0, s.props);
  }
  function mt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === S;
  }
  function ju(s) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (D) {
        return A[D];
      })
    );
  }
  var zt = /\/+/g;
  function xl(s, A) {
    return typeof s == "object" && s !== null && s.key != null
      ? ju("" + s.key)
      : A.toString(36);
  }
  function ou() {}
  function vu(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(ou, ou)
            : ((s.status = "pending"),
              s.then(
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = A));
                },
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = A));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Ul(s, A, D, M, H) {
    var $ = typeof s;
    ($ === "undefined" || $ === "boolean") && (s = null);
    var C = !1;
    if (s === null) C = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          C = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case S:
            case U:
              C = !0;
              break;
            case j:
              return (C = s._init), Ul(C(s._payload), A, D, M, H);
          }
      }
    if (C)
      return (
        (H = H(s)),
        (C = M === "" ? "." + xl(s, 0) : M),
        ot(H)
          ? ((D = ""),
            C != null && (D = C.replace(zt, "$&/") + "/"),
            Ul(H, A, D, "", function (Ct) {
              return Ct;
            }))
          : H != null &&
            (mt(H) &&
              (H = Kl(
                H,
                D +
                  (H.key == null || (s && s.key === H.key)
                    ? ""
                    : ("" + H.key).replace(zt, "$&/") + "/") +
                  C
              )),
            A.push(H)),
        1
      );
    C = 0;
    var Jl = M === "" ? "." : M + ":";
    if (ot(s))
      for (var il = 0; il < s.length; il++)
        (M = s[il]), ($ = Jl + xl(M, il)), (C += Ul(M, A, D, $, H));
    else if (((il = nl(s)), typeof il == "function"))
      for (s = il.call(s), il = 0; !(M = s.next()).done; )
        (M = M.value), ($ = Jl + xl(M, il++)), (C += Ul(M, A, D, $, H));
    else if ($ === "object") {
      if (typeof s.then == "function") return Ul(vu(s), A, D, M, H);
      throw (
        ((A = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return C;
  }
  function b(s, A, D) {
    if (s == null) return s;
    var M = [],
      H = 0;
    return (
      Ul(s, M, "", "", function ($) {
        return A.call(D, $, H++);
      }),
      M
    );
  }
  function p(s) {
    if (s._status === -1) {
      var A = s._result;
      (A = A()),
        A.then(
          function (D) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = D));
          },
          function (D) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = D));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = A));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function al() {}
  return (
    (Q.Children = {
      map: b,
      forEach: function (s, A, D) {
        b(
          s,
          function () {
            A.apply(this, arguments);
          },
          D
        );
      },
      count: function (s) {
        var A = 0;
        return (
          b(s, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (s) {
        return (
          b(s, function (A) {
            return A;
          }) || []
        );
      },
      only: function (s) {
        if (!mt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (Q.Component = Bl),
    (Q.Fragment = _),
    (Q.Profiler = X),
    (Q.PureComponent = Ot),
    (Q.StrictMode = o),
    (Q.Suspense = N),
    (Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Q.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return W.H.useMemoCache(s);
      },
    }),
    (Q.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (Q.cloneElement = function (s, A, D) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var M = ql({}, s.props),
        H = s.key,
        $ = void 0;
      if (A != null)
        for (C in (A.ref !== void 0 && ($ = void 0),
        A.key !== void 0 && (H = "" + A.key),
        A))
          !Vl.call(A, C) ||
            C === "key" ||
            C === "__self" ||
            C === "__source" ||
            (C === "ref" && A.ref === void 0) ||
            (M[C] = A[C]);
      var C = arguments.length - 2;
      if (C === 1) M.children = D;
      else if (1 < C) {
        for (var Jl = Array(C), il = 0; il < C; il++)
          Jl[il] = arguments[il + 2];
        M.children = Jl;
      }
      return Ll(s.type, H, void 0, void 0, $, M);
    }),
    (Q.createContext = function (s) {
      return (
        (s = {
          $$typeof: dl,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: L, _context: s }),
        s
      );
    }),
    (Q.createElement = function (s, A, D) {
      var M,
        H = {},
        $ = null;
      if (A != null)
        for (M in (A.key !== void 0 && ($ = "" + A.key), A))
          Vl.call(A, M) &&
            M !== "key" &&
            M !== "__self" &&
            M !== "__source" &&
            (H[M] = A[M]);
      var C = arguments.length - 2;
      if (C === 1) H.children = D;
      else if (1 < C) {
        for (var Jl = Array(C), il = 0; il < C; il++)
          Jl[il] = arguments[il + 2];
        H.children = Jl;
      }
      if (s && s.defaultProps)
        for (M in ((C = s.defaultProps), C)) H[M] === void 0 && (H[M] = C[M]);
      return Ll(s, $, void 0, void 0, null, H);
    }),
    (Q.createRef = function () {
      return { current: null };
    }),
    (Q.forwardRef = function (s) {
      return { $$typeof: El, render: s };
    }),
    (Q.isValidElement = mt),
    (Q.lazy = function (s) {
      return { $$typeof: j, _payload: { _status: -1, _result: s }, _init: p };
    }),
    (Q.memo = function (s, A) {
      return { $$typeof: O, type: s, compare: A === void 0 ? null : A };
    }),
    (Q.startTransition = function (s) {
      var A = W.T,
        D = {};
      W.T = D;
      try {
        var M = s(),
          H = W.S;
        H !== null && H(D, M),
          typeof M == "object" &&
            M !== null &&
            typeof M.then == "function" &&
            M.then(al, B);
      } catch ($) {
        B($);
      } finally {
        W.T = A;
      }
    }),
    (Q.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Q.use = function (s) {
      return W.H.use(s);
    }),
    (Q.useActionState = function (s, A, D) {
      return W.H.useActionState(s, A, D);
    }),
    (Q.useCallback = function (s, A) {
      return W.H.useCallback(s, A);
    }),
    (Q.useContext = function (s) {
      return W.H.useContext(s);
    }),
    (Q.useDebugValue = function () {}),
    (Q.useDeferredValue = function (s, A) {
      return W.H.useDeferredValue(s, A);
    }),
    (Q.useEffect = function (s, A, D) {
      var M = W.H;
      if (typeof D == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return M.useEffect(s, A);
    }),
    (Q.useId = function () {
      return W.H.useId();
    }),
    (Q.useImperativeHandle = function (s, A, D) {
      return W.H.useImperativeHandle(s, A, D);
    }),
    (Q.useInsertionEffect = function (s, A) {
      return W.H.useInsertionEffect(s, A);
    }),
    (Q.useLayoutEffect = function (s, A) {
      return W.H.useLayoutEffect(s, A);
    }),
    (Q.useMemo = function (s, A) {
      return W.H.useMemo(s, A);
    }),
    (Q.useOptimistic = function (s, A) {
      return W.H.useOptimistic(s, A);
    }),
    (Q.useReducer = function (s, A, D) {
      return W.H.useReducer(s, A, D);
    }),
    (Q.useRef = function (s) {
      return W.H.useRef(s);
    }),
    (Q.useState = function (s) {
      return W.H.useState(s);
    }),
    (Q.useSyncExternalStore = function (s, A, D) {
      return W.H.useSyncExternalStore(s, A, D);
    }),
    (Q.useTransition = function () {
      return W.H.useTransition();
    }),
    (Q.version = "19.1.0"),
    Q
  );
}
var lr;
function ei() {
  return lr || ((lr = 1), (Pf.exports = Xv())), Pf.exports;
}
var sr = ei();
const Ru = Yv(sr);
var li = { exports: {} },
  ge = {},
  ti = { exports: {} },
  ui = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr;
function Cv() {
  return (
    tr ||
      ((tr = 1),
      (function (S) {
        function U(b, p) {
          var B = b.length;
          b.push(p);
          l: for (; 0 < B; ) {
            var al = (B - 1) >>> 1,
              s = b[al];
            if (0 < X(s, p)) (b[al] = p), (b[B] = s), (B = al);
            else break l;
          }
        }
        function _(b) {
          return b.length === 0 ? null : b[0];
        }
        function o(b) {
          if (b.length === 0) return null;
          var p = b[0],
            B = b.pop();
          if (B !== p) {
            b[0] = B;
            l: for (var al = 0, s = b.length, A = s >>> 1; al < A; ) {
              var D = 2 * (al + 1) - 1,
                M = b[D],
                H = D + 1,
                $ = b[H];
              if (0 > X(M, B))
                H < s && 0 > X($, M)
                  ? ((b[al] = $), (b[H] = B), (al = H))
                  : ((b[al] = M), (b[D] = B), (al = D));
              else if (H < s && 0 > X($, B)) (b[al] = $), (b[H] = B), (al = H);
              else break l;
            }
          }
          return p;
        }
        function X(b, p) {
          var B = b.sortIndex - p.sortIndex;
          return B !== 0 ? B : b.id - p.id;
        }
        if (
          ((S.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var L = performance;
          S.unstable_now = function () {
            return L.now();
          };
        } else {
          var dl = Date,
            El = dl.now();
          S.unstable_now = function () {
            return dl.now() - El;
          };
        }
        var N = [],
          O = [],
          j = 1,
          fl = null,
          nl = 3,
          Hl = !1,
          ql = !1,
          rt = !1,
          Bl = !1,
          ru = typeof setTimeout == "function" ? setTimeout : null,
          Ot = typeof clearTimeout == "function" ? clearTimeout : null,
          Dl = typeof setImmediate < "u" ? setImmediate : null;
        function ot(b) {
          for (var p = _(O); p !== null; ) {
            if (p.callback === null) o(O);
            else if (p.startTime <= b)
              o(O), (p.sortIndex = p.expirationTime), U(N, p);
            else break;
            p = _(O);
          }
        }
        function W(b) {
          if (((rt = !1), ot(b), !ql))
            if (_(N) !== null) (ql = !0), Vl || ((Vl = !0), xl());
            else {
              var p = _(O);
              p !== null && Ul(W, p.startTime - b);
            }
        }
        var Vl = !1,
          Ll = -1,
          Kl = 5,
          mt = -1;
        function ju() {
          return Bl ? !0 : !(S.unstable_now() - mt < Kl);
        }
        function zt() {
          if (((Bl = !1), Vl)) {
            var b = S.unstable_now();
            mt = b;
            var p = !0;
            try {
              l: {
                (ql = !1), rt && ((rt = !1), Ot(Ll), (Ll = -1)), (Hl = !0);
                var B = nl;
                try {
                  t: {
                    for (
                      ot(b), fl = _(N);
                      fl !== null && !(fl.expirationTime > b && ju());

                    ) {
                      var al = fl.callback;
                      if (typeof al == "function") {
                        (fl.callback = null), (nl = fl.priorityLevel);
                        var s = al(fl.expirationTime <= b);
                        if (((b = S.unstable_now()), typeof s == "function")) {
                          (fl.callback = s), ot(b), (p = !0);
                          break t;
                        }
                        fl === _(N) && o(N), ot(b);
                      } else o(N);
                      fl = _(N);
                    }
                    if (fl !== null) p = !0;
                    else {
                      var A = _(O);
                      A !== null && Ul(W, A.startTime - b), (p = !1);
                    }
                  }
                  break l;
                } finally {
                  (fl = null), (nl = B), (Hl = !1);
                }
                p = void 0;
              }
            } finally {
              p ? xl() : (Vl = !1);
            }
          }
        }
        var xl;
        if (typeof Dl == "function")
          xl = function () {
            Dl(zt);
          };
        else if (typeof MessageChannel < "u") {
          var ou = new MessageChannel(),
            vu = ou.port2;
          (ou.port1.onmessage = zt),
            (xl = function () {
              vu.postMessage(null);
            });
        } else
          xl = function () {
            ru(zt, 0);
          };
        function Ul(b, p) {
          Ll = ru(function () {
            b(S.unstable_now());
          }, p);
        }
        (S.unstable_IdlePriority = 5),
          (S.unstable_ImmediatePriority = 1),
          (S.unstable_LowPriority = 4),
          (S.unstable_NormalPriority = 3),
          (S.unstable_Profiling = null),
          (S.unstable_UserBlockingPriority = 2),
          (S.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (S.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Kl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (S.unstable_getCurrentPriorityLevel = function () {
            return nl;
          }),
          (S.unstable_next = function (b) {
            switch (nl) {
              case 1:
              case 2:
              case 3:
                var p = 3;
                break;
              default:
                p = nl;
            }
            var B = nl;
            nl = p;
            try {
              return b();
            } finally {
              nl = B;
            }
          }),
          (S.unstable_requestPaint = function () {
            Bl = !0;
          }),
          (S.unstable_runWithPriority = function (b, p) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var B = nl;
            nl = b;
            try {
              return p();
            } finally {
              nl = B;
            }
          }),
          (S.unstable_scheduleCallback = function (b, p, B) {
            var al = S.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? al + B : al))
                : (B = al),
              b)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = B + s),
              (b = {
                id: j++,
                callback: p,
                priorityLevel: b,
                startTime: B,
                expirationTime: s,
                sortIndex: -1,
              }),
              B > al
                ? ((b.sortIndex = B),
                  U(O, b),
                  _(N) === null &&
                    b === _(O) &&
                    (rt ? (Ot(Ll), (Ll = -1)) : (rt = !0), Ul(W, B - al)))
                : ((b.sortIndex = s),
                  U(N, b),
                  ql || Hl || ((ql = !0), Vl || ((Vl = !0), xl()))),
              b
            );
          }),
          (S.unstable_shouldYield = ju),
          (S.unstable_wrapCallback = function (b) {
            var p = nl;
            return function () {
              var B = nl;
              nl = p;
              try {
                return b.apply(this, arguments);
              } finally {
                nl = B;
              }
            };
          });
      })(ui)),
    ui
  );
}
var ur;
function Qv() {
  return ur || ((ur = 1), (ti.exports = Cv())), ti.exports;
}
var ai = { exports: {} },
  jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar;
function Zv() {
  if (ar) return jl;
  ar = 1;
  var S = ei();
  function U(N) {
    var O = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        O += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      N +
      "; visit " +
      O +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function _() {}
  var o = {
      d: {
        f: _,
        r: function () {
          throw Error(U(522));
        },
        D: _,
        C: _,
        L: _,
        m: _,
        X: _,
        S: _,
        M: _,
      },
      p: 0,
      findDOMNode: null,
    },
    X = Symbol.for("react.portal");
  function L(N, O, j) {
    var fl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: X,
      key: fl == null ? null : "" + fl,
      children: N,
      containerInfo: O,
      implementation: j,
    };
  }
  var dl = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function El(N, O) {
    if (N === "font") return "";
    if (typeof O == "string") return O === "use-credentials" ? O : "";
  }
  return (
    (jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (jl.createPortal = function (N, O) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!O || (O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11))
        throw Error(U(299));
      return L(N, O, null, j);
    }),
    (jl.flushSync = function (N) {
      var O = dl.T,
        j = o.p;
      try {
        if (((dl.T = null), (o.p = 2), N)) return N();
      } finally {
        (dl.T = O), (o.p = j), o.d.f();
      }
    }),
    (jl.preconnect = function (N, O) {
      typeof N == "string" &&
        (O
          ? ((O = O.crossOrigin),
            (O =
              typeof O == "string"
                ? O === "use-credentials"
                  ? O
                  : ""
                : void 0))
          : (O = null),
        o.d.C(N, O));
    }),
    (jl.prefetchDNS = function (N) {
      typeof N == "string" && o.d.D(N);
    }),
    (jl.preinit = function (N, O) {
      if (typeof N == "string" && O && typeof O.as == "string") {
        var j = O.as,
          fl = El(j, O.crossOrigin),
          nl = typeof O.integrity == "string" ? O.integrity : void 0,
          Hl = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
        j === "style"
          ? o.d.S(N, typeof O.precedence == "string" ? O.precedence : void 0, {
              crossOrigin: fl,
              integrity: nl,
              fetchPriority: Hl,
            })
          : j === "script" &&
            o.d.X(N, {
              crossOrigin: fl,
              integrity: nl,
              fetchPriority: Hl,
              nonce: typeof O.nonce == "string" ? O.nonce : void 0,
            });
      }
    }),
    (jl.preinitModule = function (N, O) {
      if (typeof N == "string")
        if (typeof O == "object" && O !== null) {
          if (O.as == null || O.as === "script") {
            var j = El(O.as, O.crossOrigin);
            o.d.M(N, {
              crossOrigin: j,
              integrity: typeof O.integrity == "string" ? O.integrity : void 0,
              nonce: typeof O.nonce == "string" ? O.nonce : void 0,
            });
          }
        } else O == null && o.d.M(N);
    }),
    (jl.preload = function (N, O) {
      if (
        typeof N == "string" &&
        typeof O == "object" &&
        O !== null &&
        typeof O.as == "string"
      ) {
        var j = O.as,
          fl = El(j, O.crossOrigin);
        o.d.L(N, j, {
          crossOrigin: fl,
          integrity: typeof O.integrity == "string" ? O.integrity : void 0,
          nonce: typeof O.nonce == "string" ? O.nonce : void 0,
          type: typeof O.type == "string" ? O.type : void 0,
          fetchPriority:
            typeof O.fetchPriority == "string" ? O.fetchPriority : void 0,
          referrerPolicy:
            typeof O.referrerPolicy == "string" ? O.referrerPolicy : void 0,
          imageSrcSet:
            typeof O.imageSrcSet == "string" ? O.imageSrcSet : void 0,
          imageSizes: typeof O.imageSizes == "string" ? O.imageSizes : void 0,
          media: typeof O.media == "string" ? O.media : void 0,
        });
      }
    }),
    (jl.preloadModule = function (N, O) {
      if (typeof N == "string")
        if (O) {
          var j = El(O.as, O.crossOrigin);
          o.d.m(N, {
            as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0,
            crossOrigin: j,
            integrity: typeof O.integrity == "string" ? O.integrity : void 0,
          });
        } else o.d.m(N);
    }),
    (jl.requestFormReset = function (N) {
      o.d.r(N);
    }),
    (jl.unstable_batchedUpdates = function (N, O) {
      return N(O);
    }),
    (jl.useFormState = function (N, O, j) {
      return dl.H.useFormState(N, O, j);
    }),
    (jl.useFormStatus = function () {
      return dl.H.useHostTransitionStatus();
    }),
    (jl.version = "19.1.0"),
    jl
  );
}
var er;
function Vv() {
  if (er) return ai.exports;
  er = 1;
  function S() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (U) {
        console.error(U);
      }
  }
  return S(), (ai.exports = Zv()), ai.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr;
function Lv() {
  if (nr) return ge;
  nr = 1;
  var S = Qv(),
    U = ei(),
    _ = Vv();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function X(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function L(l) {
    var t = l,
      u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (u = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function El(l) {
    if (L(l) !== l) throw Error(o(188));
  }
  function N(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = L(l)), t === null)) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((a = e.return), a !== null)) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return El(e), l;
          if (n === a) return El(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (u.return !== a.return) (u = e), (a = n);
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === u) {
            (c = !0), (u = e), (a = n);
            break;
          }
          if (f === a) {
            (c = !0), (a = e), (u = n);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === u) {
              (c = !0), (u = n), (a = e);
              break;
            }
            if (f === a) {
              (c = !0), (a = n), (u = e);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (u.alternate !== a) throw Error(o(190));
    }
    if (u.tag !== 3) throw Error(o(188));
    return u.stateNode.current === u ? l : t;
  }
  function O(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = O(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var j = Object.assign,
    fl = Symbol.for("react.element"),
    nl = Symbol.for("react.transitional.element"),
    Hl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    rt = Symbol.for("react.strict_mode"),
    Bl = Symbol.for("react.profiler"),
    ru = Symbol.for("react.provider"),
    Ot = Symbol.for("react.consumer"),
    Dl = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    Vl = Symbol.for("react.suspense_list"),
    Ll = Symbol.for("react.memo"),
    Kl = Symbol.for("react.lazy"),
    mt = Symbol.for("react.activity"),
    ju = Symbol.for("react.memo_cache_sentinel"),
    zt = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (zt && l[zt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ou = Symbol.for("react.client.reference");
  function vu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ou ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case Bl:
        return "Profiler";
      case rt:
        return "StrictMode";
      case W:
        return "Suspense";
      case Vl:
        return "SuspenseList";
      case mt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Hl:
          return "Portal";
        case Dl:
          return (l.displayName || "Context") + ".Provider";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case ot:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Ll:
          return (
            (t = l.displayName || null), t !== null ? t : vu(l.type) || "Memo"
          );
        case Kl:
          (t = l._payload), (l = l._init);
          try {
            return vu(l(t));
          } catch {}
      }
    return null;
  }
  var Ul = Array.isArray,
    b = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    p = _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    al = [],
    s = -1;
  function A(l) {
    return { current: l };
  }
  function D(l) {
    0 > s || ((l.current = al[s]), (al[s] = null), s--);
  }
  function M(l, t) {
    s++, (al[s] = l.current), (l.current = t);
  }
  var H = A(null),
    $ = A(null),
    C = A(null),
    Jl = A(null);
  function il(l, t) {
    switch ((M(C, t), M($, l), M(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? _d(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = _d(t)), (l = Md(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    D(H), M(H, l);
  }
  function Ct() {
    D(H), D($), D(C);
  }
  function Yn(l) {
    l.memoizedState !== null && M(Jl, l);
    var t = H.current,
      u = Md(t, l.type);
    t !== u && (M($, l), M(H, u));
  }
  function Se(l) {
    $.current === l && (D(H), D($)),
      Jl.current === l && (D(Jl), (re._currentValue = B));
  }
  var Bn = Object.prototype.hasOwnProperty,
    Gn = S.unstable_scheduleCallback,
    Xn = S.unstable_cancelCallback,
    vr = S.unstable_shouldYield,
    hr = S.unstable_requestPaint,
    gt = S.unstable_now,
    yr = S.unstable_getCurrentPriorityLevel,
    ni = S.unstable_ImmediatePriority,
    ci = S.unstable_UserBlockingPriority,
    be = S.unstable_NormalPriority,
    mr = S.unstable_LowPriority,
    fi = S.unstable_IdlePriority,
    gr = S.log,
    Sr = S.unstable_setDisableYieldValue,
    ba = null,
    wl = null;
  function Qt(l) {
    if (
      (typeof gr == "function" && Sr(l),
      wl && typeof wl.setStrictMode == "function")
    )
      try {
        wl.setStrictMode(ba, l);
      } catch {}
  }
  var Wl = Math.clz32 ? Math.clz32 : Tr,
    br = Math.log,
    Er = Math.LN2;
  function Tr(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((br(l) / Er) | 0)) | 0;
  }
  var Ee = 256,
    Te = 4194304;
  function hu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (e = hu(a))
            : ((c &= f),
              c !== 0
                ? (e = hu(c))
                : u || ((u = f & ~l), u !== 0 && (e = hu(u)))))
        : ((f = a & ~n),
          f !== 0
            ? (e = hu(f))
            : c !== 0
            ? (e = hu(c))
            : u || ((u = a & ~l), u !== 0 && (e = hu(u)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (u = t & -t),
          n >= u || (n === 32 && (u & 4194048) !== 0))
        ? t
        : e
    );
  }
  function Ea(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ar(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ii() {
    var l = Ee;
    return (Ee <<= 1), (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function si() {
    var l = Te;
    return (Te <<= 1), (Te & 62914560) === 0 && (Te = 4194304), l;
  }
  function Cn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ta(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Or(l, t, u, a, e, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = u),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= u),
      (l.entangledLanes &= u),
      (l.errorRecoveryDisabledLanes &= u),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      i = l.expirationTimes,
      h = l.hiddenUpdates;
    for (u = c & ~u; 0 < u; ) {
      var g = 31 - Wl(u),
        T = 1 << g;
      (f[g] = 0), (i[g] = -1);
      var y = h[g];
      if (y !== null)
        for (h[g] = null, g = 0; g < y.length; g++) {
          var m = y[g];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && di(l, a, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function di(l, t, u) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - Wl(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (u & 4194090));
  }
  function ri(l, t) {
    var u = (l.entangledLanes |= t);
    for (l = l.entanglements; u; ) {
      var a = 31 - Wl(u),
        e = 1 << a;
      (e & t) | (l[a] & t) && (l[a] |= t), (u &= ~e);
    }
  }
  function Qn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Zn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function oi() {
    var l = p.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Kd(l.type));
  }
  function zr(l, t) {
    var u = p.p;
    try {
      return (p.p = l), t();
    } finally {
      p.p = u;
    }
  }
  var Zt = Math.random().toString(36).slice(2),
    Nl = "__reactFiber$" + Zt,
    Gl = "__reactProps$" + Zt,
    Hu = "__reactContainer$" + Zt,
    Vn = "__reactEvents$" + Zt,
    _r = "__reactListeners$" + Zt,
    Mr = "__reactHandles$" + Zt,
    vi = "__reactResources$" + Zt,
    Aa = "__reactMarker$" + Zt;
  function Ln(l) {
    delete l[Nl], delete l[Gl], delete l[Vn], delete l[_r], delete l[Mr];
  }
  function qu(l) {
    var t = l[Nl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if ((t = u[Hu] || u[Nl])) {
        if (
          ((u = t.alternate),
          t.child !== null || (u !== null && u.child !== null))
        )
          for (l = Ud(l); l !== null; ) {
            if ((u = l[Nl])) return u;
            l = Ud(l);
          }
        return t;
      }
      (l = u), (u = l.parentNode);
    }
    return null;
  }
  function Yu(l) {
    if ((l = l[Nl] || l[Hu])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Oa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Bu(l) {
    var t = l[vi];
    return (
      t ||
        (t = l[vi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Tl(l) {
    l[Aa] = !0;
  }
  var hi = new Set(),
    yi = {};
  function yu(l, t) {
    Gu(l, t), Gu(l + "Capture", t);
  }
  function Gu(l, t) {
    for (yi[l] = t, l = 0; l < t.length; l++) hi.add(t[l]);
  }
  var pr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    mi = {},
    gi = {};
  function Dr(l) {
    return Bn.call(gi, l)
      ? !0
      : Bn.call(mi, l)
      ? !1
      : pr.test(l)
      ? (gi[l] = !0)
      : ((mi[l] = !0), !1);
  }
  function Oe(l, t, u) {
    if (Dr(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function ze(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function _t(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Kn, Si;
  function Xu(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        (Kn = (t && t[1]) || ""),
          (Si =
            -1 <
            u.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < u.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kn +
      l +
      Si
    );
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var y = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  y = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                y = m;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (m) {
            if (m && y && typeof m.stack == "string") return [m.stack, y.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          h = f.split(`
`);
        for (
          e = a = 0;
          a < i.length && !i[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (a === i.length || e === h.length)
          for (
            a = i.length - 1, e = h.length - 1;
            1 <= a && 0 <= e && i[a] !== h[e];

          )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== h[e]) {
            if (a !== 1 || e !== 1)
              do
                if ((a--, e--, 0 > e || i[a] !== h[e])) {
                  var g =
                    `
` + i[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      (Jn = !1), (Error.prepareStackTrace = u);
    }
    return (u = l ? l.displayName || l.name : "") ? Xu(u) : "";
  }
  function xr(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xu(l.type);
      case 16:
        return Xu("Lazy");
      case 13:
        return Xu("Suspense");
      case 19:
        return Xu("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Xu("Activity");
      default:
        return "";
    }
  }
  function bi(l) {
    try {
      var t = "";
      do (t += xr(l)), (l = l.return);
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  function ut(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ei(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ur(l) {
    var t = Ei(l) ? "checked" : "value",
      u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            (a = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function _e(l) {
    l._valueTracker || (l._valueTracker = Ur(l));
  }
  function Ti(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(),
      a = "";
    return (
      l && (a = Ei(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== u ? (t.setValue(l), !0) : !1
    );
  }
  function Me(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Nr = /[\n"\\]/g;
  function at(l) {
    return l.replace(Nr, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wn(l, t, u, a, e, n, c, f) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ut(t))
          : l.value !== "" + ut(t) && (l.value = "" + ut(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? $n(l, c, ut(t))
        : u != null
        ? $n(l, c, ut(u))
        : a != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ut(f))
        : l.removeAttribute("name");
  }
  function Ai(l, t, u, a, e, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || u != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (u = u != null ? "" + ut(u) : ""),
        (t = t != null ? "" + ut(t) : u),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? e),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function $n(l, t, u) {
    (t === "number" && Me(l.ownerDocument) === l) ||
      l.defaultValue === "" + u ||
      (l.defaultValue = "" + u);
  }
  function Cu(l, t, u, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        (e = t.hasOwnProperty("$" + l[u].value)),
          l[u].selected !== e && (l[u].selected = e),
          e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ut(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          (l[e].selected = !0), a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Oi(l, t, u) {
    if (
      t != null &&
      ((t = "" + ut(t)), t !== l.value && (l.value = t), u == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ut(u) : "";
  }
  function zi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(o(92));
        if (Ul(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), (t = u);
    }
    (u = ut(t)),
      (l.defaultValue = u),
      (a = l.textContent),
      a === u && a !== "" && a !== null && (l.value = a);
  }
  function Qu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Rr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _i(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, u)
      : typeof u != "number" || u === 0 || Rr.has(t)
      ? t === "float"
        ? (l.cssFloat = u)
        : (l[t] = ("" + u).trim())
      : (l[t] = u + "px");
  }
  function Mi(l, t, u) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((l = l.style), u != null)) {
      for (var a in u)
        !u.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var e in t)
        (a = t[e]), t.hasOwnProperty(e) && u[e] !== a && _i(l, e, a);
    } else for (var n in t) t.hasOwnProperty(n) && _i(l, n, t[n]);
  }
  function kn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Hr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pe(l) {
    return Hr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Fn = null;
  function In(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Zu = null,
    Vu = null;
  function pi(l) {
    var t = Yu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Gl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Wn(
              l,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name
            ),
            (t = u.name),
            u.type === "radio" && t != null)
          ) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                'input[name="' + at("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < u.length;
              t++
            ) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Gl] || null;
                if (!e) throw Error(o(90));
                Wn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              (a = u[t]), a.form === l.form && Ti(a);
          }
          break l;
        case "textarea":
          Oi(l, u.value, u.defaultValue);
          break l;
        case "select":
          (t = u.value), t != null && Cu(l, !!u.multiple, t, !1);
      }
    }
  }
  var Pn = !1;
  function Di(l, t, u) {
    if (Pn) return l(t, u);
    Pn = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((Pn = !1),
        (Zu !== null || Vu !== null) &&
          (vn(), Zu && ((t = Zu), (l = Vu), (Vu = Zu = null), pi(t), l)))
      )
        for (t = 0; t < l.length; t++) pi(l[t]);
    }
  }
  function za(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Gl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(o(231, t, typeof u));
    return u;
  }
  var Mt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lc = !1;
  if (Mt)
    try {
      var _a = {};
      Object.defineProperty(_a, "passive", {
        get: function () {
          lc = !0;
        },
      }),
        window.addEventListener("test", _a, _a),
        window.removeEventListener("test", _a, _a);
    } catch {
      lc = !1;
    }
  var Vt = null,
    tc = null,
    De = null;
  function xi() {
    if (De) return De;
    var l,
      t = tc,
      u = t.length,
      a,
      e = "value" in Vt ? Vt.value : Vt.textContent,
      n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++);
    var c = u - l;
    for (a = 1; a <= c && t[u - a] === e[n - a]; a++);
    return (De = e.slice(l, 1 < a ? 1 - a : void 0));
  }
  function xe(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ue() {
    return !0;
  }
  function Ui() {
    return !1;
  }
  function Xl(l) {
    function t(u, a, e, n, c) {
      (this._reactName = u),
        (this._targetInst = e),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((u = l[f]), (this[f] = u ? u(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ue
          : Ui),
        (this.isPropagationStopped = Ui),
        this
      );
    }
    return (
      j(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = Ue));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = Ue));
        },
        persist: function () {},
        isPersistent: Ue,
      }),
      t
    );
  }
  var mu = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ne = Xl(mu),
    Ma = j({}, mu, { view: 0, detail: 0 }),
    qr = Xl(Ma),
    uc,
    ac,
    pa,
    Re = j({}, Ma, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: nc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== pa &&
              (pa && l.type === "mousemove"
                ? ((uc = l.screenX - pa.screenX), (ac = l.screenY - pa.screenY))
                : (ac = uc = 0),
              (pa = l)),
            uc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ac;
      },
    }),
    Ni = Xl(Re),
    Yr = j({}, Re, { dataTransfer: 0 }),
    Br = Xl(Yr),
    Gr = j({}, Ma, { relatedTarget: 0 }),
    ec = Xl(Gr),
    Xr = j({}, mu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cr = Xl(Xr),
    Qr = j({}, mu, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zr = Xl(Qr),
    Vr = j({}, mu, { data: 0 }),
    Ri = Xl(Vr),
    Lr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Kr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Jr[l])
      ? !!t[l]
      : !1;
  }
  function nc() {
    return wr;
  }
  var Wr = j({}, Ma, {
      key: function (l) {
        if (l.key) {
          var t = Lr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = xe(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Kr[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: nc,
      charCode: function (l) {
        return l.type === "keypress" ? xe(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? xe(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    $r = Xl(Wr),
    kr = j({}, Re, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ji = Xl(kr),
    Fr = j({}, Ma, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nc,
    }),
    Ir = Xl(Fr),
    Pr = j({}, mu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lo = Xl(Pr),
    to = j({}, Re, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    uo = Xl(to),
    ao = j({}, mu, { newState: 0, oldState: 0 }),
    eo = Xl(ao),
    no = [9, 13, 27, 32],
    cc = Mt && "CompositionEvent" in window,
    Da = null;
  Mt && "documentMode" in document && (Da = document.documentMode);
  var co = Mt && "TextEvent" in window && !Da,
    Hi = Mt && (!cc || (Da && 8 < Da && 11 >= Da)),
    qi = " ",
    Yi = !1;
  function Bi(l, t) {
    switch (l) {
      case "keyup":
        return no.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gi(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = !1;
  function fo(l, t) {
    switch (l) {
      case "compositionend":
        return Gi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Yi = !0), qi);
      case "textInput":
        return (l = t.data), l === qi && Yi ? null : l;
      default:
        return null;
    }
  }
  function io(l, t) {
    if (Lu)
      return l === "compositionend" || (!cc && Bi(l, t))
        ? ((l = xi()), (De = tc = Vt = null), (Lu = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var so = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!so[l.type] : t === "textarea";
  }
  function Ci(l, t, u, a) {
    Zu ? (Vu ? Vu.push(a) : (Vu = [a])) : (Zu = a),
      (t = bn(t, "onChange")),
      0 < t.length &&
        ((u = new Ne("onChange", "change", null, u, a)),
        l.push({ event: u, listeners: t }));
  }
  var xa = null,
    Ua = null;
  function ro(l) {
    Ed(l, 0);
  }
  function je(l) {
    var t = Oa(l);
    if (Ti(t)) return l;
  }
  function Qi(l, t) {
    if (l === "change") return t;
  }
  var Zi = !1;
  if (Mt) {
    var fc;
    if (Mt) {
      var ic = "oninput" in document;
      if (!ic) {
        var Vi = document.createElement("div");
        Vi.setAttribute("oninput", "return;"),
          (ic = typeof Vi.oninput == "function");
      }
      fc = ic;
    } else fc = !1;
    Zi = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    xa && (xa.detachEvent("onpropertychange", Ki), (Ua = xa = null));
  }
  function Ki(l) {
    if (l.propertyName === "value" && je(Ua)) {
      var t = [];
      Ci(t, Ua, l, In(l)), Di(ro, t);
    }
  }
  function oo(l, t, u) {
    l === "focusin"
      ? (Li(), (xa = t), (Ua = u), xa.attachEvent("onpropertychange", Ki))
      : l === "focusout" && Li();
  }
  function vo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return je(Ua);
  }
  function ho(l, t) {
    if (l === "click") return je(t);
  }
  function yo(l, t) {
    if (l === "input" || l === "change") return je(t);
  }
  function mo(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var $l = typeof Object.is == "function" ? Object.is : mo;
  function Na(l, t) {
    if ($l(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var u = Object.keys(l),
      a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Bn.call(t, e) || !$l(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Ji(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wi(l, t) {
    var u = Ji(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (((a = l + u.textContent.length), l <= t && a >= t))
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Ji(u);
    }
  }
  function Wi(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wi(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function $i(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function sc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var go = Mt && "documentMode" in document && 11 >= document.documentMode,
    Ku = null,
    dc = null,
    Ra = null,
    rc = !1;
  function ki(l, t, u) {
    var a =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    rc ||
      Ku == null ||
      Ku !== Me(a) ||
      ((a = Ku),
      "selectionStart" in a && sc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ra && Na(Ra, a)) ||
        ((Ra = a),
        (a = bn(dc, "onSelect")),
        0 < a.length &&
          ((t = new Ne("onSelect", "select", null, t, u)),
          l.push({ event: t, listeners: a }),
          (t.target = Ku))));
  }
  function gu(l, t) {
    var u = {};
    return (
      (u[l.toLowerCase()] = t.toLowerCase()),
      (u["Webkit" + l] = "webkit" + t),
      (u["Moz" + l] = "moz" + t),
      u
    );
  }
  var Ju = {
      animationend: gu("Animation", "AnimationEnd"),
      animationiteration: gu("Animation", "AnimationIteration"),
      animationstart: gu("Animation", "AnimationStart"),
      transitionrun: gu("Transition", "TransitionRun"),
      transitionstart: gu("Transition", "TransitionStart"),
      transitioncancel: gu("Transition", "TransitionCancel"),
      transitionend: gu("Transition", "TransitionEnd"),
    },
    oc = {},
    Fi = {};
  Mt &&
    ((Fi = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ju.animationend.animation,
      delete Ju.animationiteration.animation,
      delete Ju.animationstart.animation),
    "TransitionEvent" in window || delete Ju.transitionend.transition);
  function Su(l) {
    if (oc[l]) return oc[l];
    if (!Ju[l]) return l;
    var t = Ju[l],
      u;
    for (u in t) if (t.hasOwnProperty(u) && u in Fi) return (oc[l] = t[u]);
    return l;
  }
  var Ii = Su("animationend"),
    Pi = Su("animationiteration"),
    ls = Su("animationstart"),
    So = Su("transitionrun"),
    bo = Su("transitionstart"),
    Eo = Su("transitioncancel"),
    ts = Su("transitionend"),
    us = new Map(),
    vc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  vc.push("scrollEnd");
  function vt(l, t) {
    us.set(l, t), yu(t, [l]);
  }
  var as = new WeakMap();
  function et(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = as.get(l);
      return u !== void 0
        ? u
        : ((t = { value: l, source: t, stack: bi(t) }), as.set(l, t), t);
    }
    return { value: l, source: t, stack: bi(t) };
  }
  var nt = [],
    wu = 0,
    hc = 0;
  function He() {
    for (var l = wu, t = (hc = wu = 0); t < l; ) {
      var u = nt[t];
      nt[t++] = null;
      var a = nt[t];
      nt[t++] = null;
      var e = nt[t];
      nt[t++] = null;
      var n = nt[t];
      if (((nt[t++] = null), a !== null && e !== null)) {
        var c = a.pending;
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (a.pending = e);
      }
      n !== 0 && es(u, e, n);
    }
  }
  function qe(l, t, u, a) {
    (nt[wu++] = l),
      (nt[wu++] = t),
      (nt[wu++] = u),
      (nt[wu++] = a),
      (hc |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function yc(l, t, u, a) {
    return qe(l, t, u, a), Ye(l);
  }
  function Wu(l, t) {
    return qe(l, null, null, t), Ye(l);
  }
  function es(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= u),
        (a = n.alternate),
        a !== null && (a.childLanes |= u),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Wl(u)),
          (l = n.hiddenUpdates),
          (a = l[e]),
          a === null ? (l[e] = [t]) : a.push(t),
          (t.lane = u | 536870912)),
        n)
      : null;
  }
  function Ye(l) {
    if (50 < ae) throw ((ae = 0), (Af = null), Error(o(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $u = {};
  function To(l, t, u, a) {
    (this.tag = l),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kl(l, t, u, a) {
    return new To(l, t, u, a);
  }
  function mc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function pt(l, t) {
    var u = l.alternate;
    return (
      u === null
        ? ((u = kl(l.tag, t, l.key, l.mode)),
          (u.elementType = l.elementType),
          (u.type = l.type),
          (u.stateNode = l.stateNode),
          (u.alternate = l),
          (l.alternate = u))
        : ((u.pendingProps = t),
          (u.type = l.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = l.flags & 65011712),
      (u.childLanes = l.childLanes),
      (u.lanes = l.lanes),
      (u.child = l.child),
      (u.memoizedProps = l.memoizedProps),
      (u.memoizedState = l.memoizedState),
      (u.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (u.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (u.sibling = l.sibling),
      (u.index = l.index),
      (u.ref = l.ref),
      (u.refCleanup = l.refCleanup),
      u
    );
  }
  function ns(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return (
      u === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = u.childLanes),
          (l.lanes = u.lanes),
          (l.child = u.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = u.memoizedProps),
          (l.memoizedState = u.memoizedState),
          (l.updateQueue = u.updateQueue),
          (l.type = u.type),
          (t = u.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Be(l, t, u, a, e, n) {
    var c = 0;
    if (((a = l), typeof l == "function")) mc(l) && (c = 1);
    else if (typeof l == "string")
      c = Ov(l, u, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case mt:
          return (l = kl(31, u, t, e)), (l.elementType = mt), (l.lanes = n), l;
        case ql:
          return bu(u.children, e, n, t);
        case rt:
          (c = 8), (e |= 24);
          break;
        case Bl:
          return (
            (l = kl(12, u, t, e | 2)), (l.elementType = Bl), (l.lanes = n), l
          );
        case W:
          return (l = kl(13, u, t, e)), (l.elementType = W), (l.lanes = n), l;
        case Vl:
          return (l = kl(19, u, t, e)), (l.elementType = Vl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ru:
              case Dl:
                c = 10;
                break l;
              case Ot:
                c = 9;
                break l;
              case ot:
                c = 11;
                break l;
              case Ll:
                c = 14;
                break l;
              case Kl:
                (c = 16), (a = null);
                break l;
            }
          (c = 29),
            (u = Error(o(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = kl(c, u, t, e)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function bu(l, t, u, a) {
    return (l = kl(7, l, a, t)), (l.lanes = u), l;
  }
  function gc(l, t, u) {
    return (l = kl(6, l, null, t)), (l.lanes = u), l;
  }
  function Sc(l, t, u) {
    return (
      (t = kl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = u),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ku = [],
    Fu = 0,
    Ge = null,
    Xe = 0,
    ct = [],
    ft = 0,
    Eu = null,
    Dt = 1,
    xt = "";
  function Tu(l, t) {
    (ku[Fu++] = Xe), (ku[Fu++] = Ge), (Ge = l), (Xe = t);
  }
  function cs(l, t, u) {
    (ct[ft++] = Dt), (ct[ft++] = xt), (ct[ft++] = Eu), (Eu = l);
    var a = Dt;
    l = xt;
    var e = 32 - Wl(a) - 1;
    (a &= ~(1 << e)), (u += 1);
    var n = 32 - Wl(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      (n = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (e -= c),
        (Dt = (1 << (32 - Wl(t) + e)) | (u << e) | a),
        (xt = n + l);
    } else (Dt = (1 << n) | (u << e) | a), (xt = l);
  }
  function bc(l) {
    l.return !== null && (Tu(l, 1), cs(l, 1, 0));
  }
  function Ec(l) {
    for (; l === Ge; )
      (Ge = ku[--Fu]), (ku[Fu] = null), (Xe = ku[--Fu]), (ku[Fu] = null);
    for (; l === Eu; )
      (Eu = ct[--ft]),
        (ct[ft] = null),
        (xt = ct[--ft]),
        (ct[ft] = null),
        (Dt = ct[--ft]),
        (ct[ft] = null);
  }
  var Yl = null,
    ol = null,
    F = !1,
    Au = null,
    St = !1,
    Tc = Error(o(519));
  function Ou(l) {
    var t = Error(o(418, ""));
    throw (qa(et(t, l)), Tc);
  }
  function fs(l) {
    var t = l.stateNode,
      u = l.type,
      a = l.memoizedProps;
    switch (((t[Nl] = l), (t[Gl] = a), u)) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++) J(ne[u], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t),
          Ai(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          _e(t);
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), zi(t, a.value, a.defaultValue, a.children), _e(t);
    }
    (u = a.children),
      (typeof u != "string" && typeof u != "number" && typeof u != "bigint") ||
      t.textContent === "" + u ||
      a.suppressHydrationWarning === !0 ||
      zd(t.textContent, u)
        ? (a.popover != null && (J("beforetoggle", t), J("toggle", t)),
          a.onScroll != null && J("scroll", t),
          a.onScrollEnd != null && J("scrollend", t),
          a.onClick != null && (t.onclick = En),
          (t = !0))
        : (t = !1),
      t || Ou(l);
  }
  function is(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function ja(l) {
    if (l !== Yl) return !1;
    if (!F) return is(l), (F = !0), !1;
    var t = l.tag,
      u;
    if (
      ((u = t !== 3 && t !== 27) &&
        ((u = t === 5) &&
          ((u = l.type),
          (u =
            !(u !== "form" && u !== "button") || Gf(l.type, l.memoizedProps))),
        (u = !u)),
      u && ol && Ou(l),
      is(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((u = l.data), u === "/$")) {
              if (t === 0) {
                ol = yt(l.nextSibling);
                break l;
              }
              t--;
            } else (u !== "$" && u !== "$!" && u !== "$?") || t++;
          l = l.nextSibling;
        }
        ol = null;
      }
    } else
      t === 27
        ? ((t = ol), nu(l.type) ? ((l = Zf), (Zf = null), (ol = l)) : (ol = t))
        : (ol = Yl ? yt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ha() {
    (ol = Yl = null), (F = !1);
  }
  function ss() {
    var l = Au;
    return (
      l !== null &&
        (Zl === null ? (Zl = l) : Zl.push.apply(Zl, l), (Au = null)),
      l
    );
  }
  function qa(l) {
    Au === null ? (Au = [l]) : Au.push(l);
  }
  var Ac = A(null),
    zu = null,
    Ut = null;
  function Lt(l, t, u) {
    M(Ac, t._currentValue), (t._currentValue = u);
  }
  function Nt(l) {
    (l._currentValue = Ac.current), D(Ac);
  }
  function Oc(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === u)
      )
        break;
      l = l.return;
    }
  }
  function zc(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              (n.lanes |= u),
                (f = n.alternate),
                f !== null && (f.lanes |= u),
                Oc(n.return, u, l),
                a || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(o(341));
        (c.lanes |= u),
          (n = c.alternate),
          n !== null && (n.lanes |= u),
          Oc(c, u, l),
          (c = null);
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            (e.return = c.return), (c = e);
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function Ya(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(o(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = e.type;
          $l(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === Jl.current) {
        if (((c = e.alternate), c === null)) throw Error(o(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(re) : (l = [re]));
      }
      e = e.return;
    }
    l !== null && zc(t, l, u, a), (t.flags |= 262144);
  }
  function Ce(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!$l(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function _u(l) {
    (zu = l),
      (Ut = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Rl(l) {
    return ds(zu, l);
  }
  function Qe(l, t) {
    return zu === null && _u(l), ds(l, t);
  }
  function ds(l, t) {
    var u = t._currentValue;
    if (((t = { context: t, memoizedValue: u, next: null }), Ut === null)) {
      if (l === null) throw Error(o(308));
      (Ut = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Ut = Ut.next = t;
    return u;
  }
  var Ao =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (u, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (u) {
                  return u();
                });
            };
          },
    Oo = S.unstable_scheduleCallback,
    zo = S.unstable_NormalPriority,
    Sl = {
      $$typeof: Dl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _c() {
    return { controller: new Ao(), data: new Map(), refCount: 0 };
  }
  function Ba(l) {
    l.refCount--,
      l.refCount === 0 &&
        Oo(zo, function () {
          l.controller.abort();
        });
  }
  var Ga = null,
    Mc = 0,
    Iu = 0,
    Pu = null;
  function _o(l, t) {
    if (Ga === null) {
      var u = (Ga = []);
      (Mc = 0),
        (Iu = xf()),
        (Pu = {
          status: "pending",
          value: void 0,
          then: function (a) {
            u.push(a);
          },
        });
    }
    return Mc++, t.then(rs, rs), t;
  }
  function rs() {
    if (--Mc === 0 && Ga !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = Ga;
      (Ga = null), (Iu = 0), (Pu = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Mo(l, t) {
    var u = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          u.push(e);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var e = 0; e < u.length; e++) (0, u[e])(t);
        },
        function (e) {
          for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
            (0, u[e])(void 0);
        }
      ),
      a
    );
  }
  var os = b.S;
  b.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      _o(l, t),
      os !== null && os(l, t);
  };
  var Mu = A(null);
  function pc() {
    var l = Mu.current;
    return l !== null ? l : cl.pooledCache;
  }
  function Ze(l, t) {
    t === null ? M(Mu, Mu.current) : M(Mu, t.pool);
  }
  function vs() {
    var l = pc();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var Xa = Error(o(460)),
    hs = Error(o(474)),
    Ve = Error(o(542)),
    Dc = { then: function () {} };
  function ys(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Le() {}
  function ms(l, t, u) {
    switch (
      ((u = l[u]),
      u === void 0 ? l.push(t) : u !== t && (t.then(Le, Le), (t = u)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ss(l), l);
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (((l = cl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(o(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ss(l), l);
        }
        throw ((Ca = t), Xa);
    }
  }
  var Ca = null;
  function gs() {
    if (Ca === null) throw Error(o(459));
    var l = Ca;
    return (Ca = null), l;
  }
  function Ss(l) {
    if (l === Xa || l === Ve) throw Error(o(483));
  }
  var Kt = !1;
  function xc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Uc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function Jt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function wt(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (I & 2) !== 0)) {
      var e = a.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (a.pending = t),
        (t = Ye(l)),
        es(l, null, u),
        t
      );
    }
    return qe(l, a, t, u), Ye(l);
  }
  function Qa(l, t, u) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), ri(l, u);
    }
  }
  function Nc(l, t) {
    var u = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), u === a)) {
      var e = null,
        n = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var c = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = c) : (n = n.next = c), (u = u.next);
        } while (u !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = u);
      return;
    }
    (l = u.lastBaseUpdate),
      l === null ? (u.firstBaseUpdate = t) : (l.next = t),
      (u.lastBaseUpdate = t);
  }
  var Rc = !1;
  function Za() {
    if (Rc) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function Va(l, t, u, a) {
    Rc = !1;
    var e = l.updateQueue;
    Kt = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f,
        h = i.next;
      (i.next = null), c === null ? (n = h) : (c.next = h), (c = i);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (f = g.lastBaseUpdate),
        f !== c &&
          (f === null ? (g.firstBaseUpdate = h) : (f.next = h),
          (g.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var T = e.baseState;
      (c = 0), (g = h = i = null), (f = n);
      do {
        var y = f.lane & -536870913,
          m = y !== f.lane;
        if (m ? (w & y) === y : (a & y) === y) {
          y !== 0 && y === Iu && (Rc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var G = l,
              q = f;
            y = t;
            var ul = u;
            switch (q.tag) {
              case 1:
                if (((G = q.payload), typeof G == "function")) {
                  T = G.call(ul, T, y);
                  break l;
                }
                T = G;
                break l;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = q.payload),
                  (y = typeof G == "function" ? G.call(ul, T, y) : G),
                  y == null)
                )
                  break l;
                T = j({}, T, y);
                break l;
              case 2:
                Kt = !0;
            }
          }
          (y = f.callback),
            y !== null &&
              ((l.flags |= 64),
              m && (l.flags |= 8192),
              (m = e.callbacks),
              m === null ? (e.callbacks = [y]) : m.push(y));
        } else
          (m = {
            lane: y,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            g === null ? ((h = g = m), (i = T)) : (g = g.next = m),
            (c |= y);
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          (m = f),
            (f = m.next),
            (m.next = null),
            (e.lastBaseUpdate = m),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (i = T),
        (e.baseState = i),
        (e.firstBaseUpdate = h),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (tu |= c),
        (l.lanes = c),
        (l.memoizedState = T);
    }
  }
  function bs(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function Es(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++) bs(u[l], t);
  }
  var la = A(null),
    Ke = A(0);
  function Ts(l, t) {
    (l = Gt), M(Ke, l), M(la, t), (Gt = l | t.baseLanes);
  }
  function jc() {
    M(Ke, Gt), M(la, la.current);
  }
  function Hc() {
    (Gt = Ke.current), D(la), D(Ke);
  }
  var Wt = 0,
    Z = null,
    ll = null,
    ml = null,
    Je = !1,
    ta = !1,
    pu = !1,
    we = 0,
    La = 0,
    ua = null,
    po = 0;
  function hl() {
    throw Error(o(321));
  }
  function qc(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!$l(l[u], t[u])) return !1;
    return !0;
  }
  function Yc(l, t, u, a, e, n) {
    return (
      (Wt = n),
      (Z = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? e0 : n0),
      (pu = !1),
      (n = u(a, e)),
      (pu = !1),
      ta && (n = Os(t, u, a, e)),
      As(l),
      n
    );
  }
  function As(l) {
    b.H = Pe;
    var t = ll !== null && ll.next !== null;
    if (((Wt = 0), (ml = ll = Z = null), (Je = !1), (La = 0), (ua = null), t))
      throw Error(o(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && Ce(l) && (Al = !0));
  }
  function Os(l, t, u, a) {
    Z = l;
    var e = 0;
    do {
      if ((ta && (ua = null), (La = 0), (ta = !1), 25 <= e))
        throw Error(o(301));
      if (((e += 1), (ml = ll = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (b.H = Ho), (n = t(u, a));
    } while (ta);
    return n;
  }
  function Do() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ka(t) : t),
      (l = l.useState()[0]),
      (ll !== null ? ll.memoizedState : null) !== l && (Z.flags |= 1024),
      t
    );
  }
  function Bc() {
    var l = we !== 0;
    return (we = 0), l;
  }
  function Gc(l, t, u) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~u);
  }
  function Xc(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Je = !1;
    }
    (Wt = 0), (ml = ll = Z = null), (ta = !1), (La = we = 0), (ua = null);
  }
  function Cl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ml === null ? (Z.memoizedState = ml = l) : (ml = ml.next = l), ml;
  }
  function gl() {
    if (ll === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = ml === null ? Z.memoizedState : ml.next;
    if (t !== null) (ml = t), (ll = l);
    else {
      if (l === null)
        throw Z.alternate === null ? Error(o(467)) : Error(o(310));
      (ll = l),
        (l = {
          memoizedState: ll.memoizedState,
          baseState: ll.baseState,
          baseQueue: ll.baseQueue,
          queue: ll.queue,
          next: null,
        }),
        ml === null ? (Z.memoizedState = ml = l) : (ml = ml.next = l);
    }
    return ml;
  }
  function Cc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return (
      (La += 1),
      ua === null && (ua = []),
      (l = ms(ua, l, t)),
      (t = Z),
      (ml === null ? t.memoizedState : ml.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? e0 : n0)),
      l
    );
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === Dl) return Rl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Qc(l) {
    var t = null,
      u = Z.updateQueue;
    if ((u !== null && (t = u.memoCache), t == null)) {
      var a = Z.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      u === null && ((u = Cc()), (Z.updateQueue = u)),
      (u.memoCache = t),
      (u = t.data[t.index]),
      u === void 0)
    )
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = ju;
    return t.index++, u;
  }
  function Rt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = gl();
    return Zc(t, ll, l);
  }
  function Zc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        (e.next = n.next), (n.next = c);
      }
      (t.baseQueue = e = n), (a.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (c = null),
        i = null,
        h = t,
        g = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (w & T) === T : (Wt & T) === T) {
          var y = h.revertLane;
          if (y === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              T === Iu && (g = !0);
          else if ((Wt & y) === y) {
            (h = h.next), y === Iu && (g = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              i === null ? ((f = i = T), (c = n)) : (i = i.next = T),
              (Z.lanes |= y),
              (tu |= y);
          (T = h.action),
            pu && u(n, T),
            (n = h.hasEagerState ? h.eagerState : u(n, T));
        } else
          (y = {
            lane: T,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            i === null ? ((f = i = y), (c = n)) : (i = i.next = y),
            (Z.lanes |= T),
            (tu |= T);
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !$l(n, l.memoizedState) && ((Al = !0), g && ((u = Pu), u !== null)))
      )
        throw u;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (a.lastRenderedState = n);
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Vc(l) {
    var t = gl(),
      u = t.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch,
      e = u.pending,
      n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var c = (e = e.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== e);
      $l(n, t.memoizedState) || (Al = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (u.lastRenderedState = n);
    }
    return [n, a];
  }
  function zs(l, t, u) {
    var a = Z,
      e = gl(),
      n = F;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var c = !$l((ll || e).memoizedState, u);
    c && ((e.memoizedState = u), (Al = !0)), (e = e.queue);
    var f = ps.bind(null, a, e, l);
    if (
      (Ja(2048, 8, f, [l]),
      e.getSnapshot !== t || c || (ml !== null && ml.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        aa(9, ke(), Ms.bind(null, a, e, u, t), null),
        cl === null)
      )
        throw Error(o(349));
      n || (Wt & 124) !== 0 || _s(a, t, u);
    }
    return u;
  }
  function _s(l, t, u) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: u }),
      (t = Z.updateQueue),
      t === null
        ? ((t = Cc()), (Z.updateQueue = t), (t.stores = [l]))
        : ((u = t.stores), u === null ? (t.stores = [l]) : u.push(l));
  }
  function Ms(l, t, u, a) {
    (t.value = u), (t.getSnapshot = a), Ds(t) && xs(l);
  }
  function ps(l, t, u) {
    return u(function () {
      Ds(t) && xs(l);
    });
  }
  function Ds(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !$l(l, u);
    } catch {
      return !0;
    }
  }
  function xs(l) {
    var t = Wu(l, 2);
    t !== null && tt(t, l, 2);
  }
  function Lc(l) {
    var t = Cl();
    if (typeof l == "function") {
      var u = l;
      if (((l = u()), pu)) {
        Qt(!0);
        try {
          u();
        } finally {
          Qt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Us(l, t, u, a) {
    return (l.baseState = u), Zc(l, ll, typeof a == "function" ? a : Rt);
  }
  function xo(l, t, u, a, e) {
    if (Ie(l)) throw Error(o(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      b.T !== null ? u(!0) : (n.isTransition = !1),
        a(n),
        (u = t.pending),
        u === null
          ? ((n.next = t.pending = n), Ns(t, n))
          : ((n.next = u.next), (t.pending = u.next = n));
    }
  }
  function Ns(l, t) {
    var u = t.action,
      a = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = b.T,
        c = {};
      b.T = c;
      try {
        var f = u(e, a),
          i = b.S;
        i !== null && i(c, f), Rs(l, t, f);
      } catch (h) {
        Kc(l, t, h);
      } finally {
        b.T = n;
      }
    } else
      try {
        (n = u(e, a)), Rs(l, t, n);
      } catch (h) {
        Kc(l, t, h);
      }
  }
  function Rs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function"
      ? u.then(
          function (a) {
            js(l, t, a);
          },
          function (a) {
            return Kc(l, t, a);
          }
        )
      : js(l, t, u);
  }
  function js(l, t, u) {
    (t.status = "fulfilled"),
      (t.value = u),
      Hs(t),
      (l.state = u),
      (t = l.pending),
      t !== null &&
        ((u = t.next),
        u === t ? (l.pending = null) : ((u = u.next), (t.next = u), Ns(l, u)));
  }
  function Kc(l, t, u) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = u), Hs(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Hs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function qs(l, t) {
    return t;
  }
  function Ys(l, t) {
    if (F) {
      var u = cl.formState;
      if (u !== null) {
        l: {
          var a = Z;
          if (F) {
            if (ol) {
              t: {
                for (var e = ol, n = St; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = yt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (ol = yt(e.nextSibling)), (a = e.data === "F!");
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return (
      (u = Cl()),
      (u.memoizedState = u.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qs,
        lastRenderedState: t,
      }),
      (u.queue = a),
      (u = t0.bind(null, Z, a)),
      (a.dispatch = u),
      (a = Lc(!1)),
      (n = kc.bind(null, Z, !1, a.queue)),
      (a = Cl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = e),
      (u = xo.bind(null, Z, e, n, u)),
      (e.dispatch = u),
      (a.memoizedState = l),
      [t, u, !1]
    );
  }
  function Bs(l) {
    var t = gl();
    return Gs(t, ll, l);
  }
  function Gs(l, t, u) {
    if (
      ((t = Zc(l, t, qs)[0]),
      (l = $e(Rt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Ka(t);
      } catch (c) {
        throw c === Xa ? Ve : c;
      }
    else a = t;
    t = gl();
    var e = t.queue,
      n = e.dispatch;
    return (
      u !== t.memoizedState &&
        ((Z.flags |= 2048), aa(9, ke(), Uo.bind(null, e, u), null)),
      [a, n, l]
    );
  }
  function Uo(l, t) {
    l.action = t;
  }
  function Xs(l) {
    var t = gl(),
      u = ll;
    if (u !== null) return Gs(t, u, l);
    gl(), (t = t.memoizedState), (u = gl());
    var a = u.queue.dispatch;
    return (u.memoizedState = l), [t, a, !1];
  }
  function aa(l, t, u, a) {
    return (
      (l = { tag: l, create: u, deps: a, inst: t, next: null }),
      (t = Z.updateQueue),
      t === null && ((t = Cc()), (Z.updateQueue = t)),
      (u = t.lastEffect),
      u === null
        ? (t.lastEffect = l.next = l)
        : ((a = u.next), (u.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function ke() {
    return { destroy: void 0, resource: void 0 };
  }
  function Cs() {
    return gl().memoizedState;
  }
  function Fe(l, t, u, a) {
    var e = Cl();
    (a = a === void 0 ? null : a),
      (Z.flags |= l),
      (e.memoizedState = aa(1 | t, ke(), u, a));
  }
  function Ja(l, t, u, a) {
    var e = gl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ll !== null && a !== null && qc(a, ll.memoizedState.deps)
      ? (e.memoizedState = aa(t, n, u, a))
      : ((Z.flags |= l), (e.memoizedState = aa(1 | t, n, u, a)));
  }
  function Qs(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Zs(l, t) {
    Ja(2048, 8, l, t);
  }
  function Vs(l, t) {
    return Ja(4, 2, l, t);
  }
  function Ls(l, t) {
    return Ja(4, 4, l, t);
  }
  function Ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function () {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Js(l, t, u) {
    (u = u != null ? u.concat([l]) : null), Ja(4, 4, Ks.bind(null, t, l), u);
  }
  function Jc() {}
  function ws(l, t) {
    var u = gl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && qc(t, a[1]) ? a[0] : ((u.memoizedState = [l, t]), l);
  }
  function Ws(l, t) {
    var u = gl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && qc(t, a[1])) return a[0];
    if (((a = l()), pu)) {
      Qt(!0);
      try {
        l();
      } finally {
        Qt(!1);
      }
    }
    return (u.memoizedState = [a, t]), a;
  }
  function wc(l, t, u) {
    return u === void 0 || (Wt & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = u), (l = F0()), (Z.lanes |= l), (tu |= l), u);
  }
  function $s(l, t, u, a) {
    return $l(u, t)
      ? u
      : la.current !== null
      ? ((l = wc(l, u, a)), $l(l, t) || (Al = !0), l)
      : (Wt & 42) === 0
      ? ((Al = !0), (l.memoizedState = u))
      : ((l = F0()), (Z.lanes |= l), (tu |= l), t);
  }
  function ks(l, t, u, a, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var c = b.T,
      f = {};
    (b.T = f), kc(l, !1, t, u);
    try {
      var i = e(),
        h = b.S;
      if (
        (h !== null && h(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var g = Mo(i, a);
        wa(l, t, g, lt(l));
      } else wa(l, t, a, lt(l));
    } catch (T) {
      wa(l, t, { then: function () {}, status: "rejected", reason: T }, lt());
    } finally {
      (p.p = n), (b.T = c);
    }
  }
  function No() {}
  function Wc(l, t, u, a) {
    if (l.tag !== 5) throw Error(o(476));
    var e = Fs(l).queue;
    ks(
      l,
      e,
      t,
      B,
      u === null
        ? No
        : function () {
            return Is(l), u(a);
          }
    );
  }
  function Fs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rt,
        lastRenderedState: B,
      },
      next: null,
    };
    var u = {};
    return (
      (t.next = {
        memoizedState: u,
        baseState: u,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Rt,
          lastRenderedState: u,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Is(l) {
    var t = Fs(l).next.queue;
    wa(l, t, {}, lt());
  }
  function $c() {
    return Rl(re);
  }
  function Ps() {
    return gl().memoizedState;
  }
  function l0() {
    return gl().memoizedState;
  }
  function Ro(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = lt();
          l = Jt(u);
          var a = wt(t, l, u);
          a !== null && (tt(a, t, u), Qa(a, t, u)),
            (t = { cache: _c() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function jo(l, t, u) {
    var a = lt();
    (u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ie(l)
        ? u0(t, u)
        : ((u = yc(l, t, u, a)), u !== null && (tt(u, l, a), a0(u, t, a)));
  }
  function t0(l, t, u) {
    var a = lt();
    wa(l, t, u, a);
  }
  function wa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ie(l)) u0(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, u);
          if (((e.hasEagerState = !0), (e.eagerState = f), $l(f, c)))
            return qe(l, t, e, 0), cl === null && He(), !1;
        } catch {
        } finally {
        }
      if (((u = yc(l, t, e, a)), u !== null))
        return tt(u, l, a), a0(u, t, a), !0;
    }
    return !1;
  }
  function kc(l, t, u, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: xf(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ie(l))
    ) {
      if (t) throw Error(o(479));
    } else (t = yc(l, u, a, 2)), t !== null && tt(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === Z || (t !== null && t === Z);
  }
  function u0(l, t) {
    ta = Je = !0;
    var u = l.pending;
    u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (l.pending = t);
  }
  function a0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), ri(l, u);
    }
  }
  var Pe = {
      readContext: Rl,
      use: We,
      useCallback: hl,
      useContext: hl,
      useEffect: hl,
      useImperativeHandle: hl,
      useLayoutEffect: hl,
      useInsertionEffect: hl,
      useMemo: hl,
      useReducer: hl,
      useRef: hl,
      useState: hl,
      useDebugValue: hl,
      useDeferredValue: hl,
      useTransition: hl,
      useSyncExternalStore: hl,
      useId: hl,
      useHostTransitionStatus: hl,
      useFormState: hl,
      useActionState: hl,
      useOptimistic: hl,
      useMemoCache: hl,
      useCacheRefresh: hl,
    },
    e0 = {
      readContext: Rl,
      use: We,
      useCallback: function (l, t) {
        return (Cl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Rl,
      useEffect: Qs,
      useImperativeHandle: function (l, t, u) {
        (u = u != null ? u.concat([l]) : null),
          Fe(4194308, 4, Ks.bind(null, t, l), u);
      },
      useLayoutEffect: function (l, t) {
        return Fe(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Fe(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var u = Cl();
        t = t === void 0 ? null : t;
        var a = l();
        if (pu) {
          Qt(!0);
          try {
            l();
          } finally {
            Qt(!1);
          }
        }
        return (u.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, u) {
        var a = Cl();
        if (u !== void 0) {
          var e = u(t);
          if (pu) {
            Qt(!0);
            try {
              u(t);
            } finally {
              Qt(!1);
            }
          }
        } else e = t;
        return (
          (a.memoizedState = a.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (a.queue = l),
          (l = l.dispatch = jo.bind(null, Z, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Cl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Lc(l);
        var t = l.queue,
          u = t0.bind(null, Z, t);
        return (t.dispatch = u), [l.memoizedState, u];
      },
      useDebugValue: Jc,
      useDeferredValue: function (l, t) {
        var u = Cl();
        return wc(u, l, t);
      },
      useTransition: function () {
        var l = Lc(!1);
        return (
          (l = ks.bind(null, Z, l.queue, !0, !1)),
          (Cl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, u) {
        var a = Z,
          e = Cl();
        if (F) {
          if (u === void 0) throw Error(o(407));
          u = u();
        } else {
          if (((u = t()), cl === null)) throw Error(o(349));
          (w & 124) !== 0 || _s(a, t, u);
        }
        e.memoizedState = u;
        var n = { value: u, getSnapshot: t };
        return (
          (e.queue = n),
          Qs(ps.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          aa(9, ke(), Ms.bind(null, a, n, u, t), null),
          u
        );
      },
      useId: function () {
        var l = Cl(),
          t = cl.identifierPrefix;
        if (F) {
          var u = xt,
            a = Dt;
          (u = (a & ~(1 << (32 - Wl(a) - 1))).toString(32) + u),
            (t = "«" + t + "R" + u),
            (u = we++),
            0 < u && (t += "H" + u.toString(32)),
            (t += "»");
        } else (u = po++), (t = "«" + t + "r" + u.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: $c,
      useFormState: Ys,
      useActionState: Ys,
      useOptimistic: function (l) {
        var t = Cl();
        t.memoizedState = t.baseState = l;
        var u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = u), (t = kc.bind(null, Z, !0, u)), (u.dispatch = t), [l, t]
        );
      },
      useMemoCache: Qc,
      useCacheRefresh: function () {
        return (Cl().memoizedState = Ro.bind(null, Z));
      },
    },
    n0 = {
      readContext: Rl,
      use: We,
      useCallback: ws,
      useContext: Rl,
      useEffect: Zs,
      useImperativeHandle: Js,
      useInsertionEffect: Vs,
      useLayoutEffect: Ls,
      useMemo: Ws,
      useReducer: $e,
      useRef: Cs,
      useState: function () {
        return $e(Rt);
      },
      useDebugValue: Jc,
      useDeferredValue: function (l, t) {
        var u = gl();
        return $s(u, ll.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $e(Rt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : Ka(l), t];
      },
      useSyncExternalStore: zs,
      useId: Ps,
      useHostTransitionStatus: $c,
      useFormState: Bs,
      useActionState: Bs,
      useOptimistic: function (l, t) {
        var u = gl();
        return Us(u, ll, l, t);
      },
      useMemoCache: Qc,
      useCacheRefresh: l0,
    },
    Ho = {
      readContext: Rl,
      use: We,
      useCallback: ws,
      useContext: Rl,
      useEffect: Zs,
      useImperativeHandle: Js,
      useInsertionEffect: Vs,
      useLayoutEffect: Ls,
      useMemo: Ws,
      useReducer: Vc,
      useRef: Cs,
      useState: function () {
        return Vc(Rt);
      },
      useDebugValue: Jc,
      useDeferredValue: function (l, t) {
        var u = gl();
        return ll === null ? wc(u, l, t) : $s(u, ll.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Vc(Rt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : Ka(l), t];
      },
      useSyncExternalStore: zs,
      useId: Ps,
      useHostTransitionStatus: $c,
      useFormState: Xs,
      useActionState: Xs,
      useOptimistic: function (l, t) {
        var u = gl();
        return ll !== null
          ? Us(u, ll, l, t)
          : ((u.baseState = l), [l, u.queue.dispatch]);
      },
      useMemoCache: Qc,
      useCacheRefresh: l0,
    },
    ea = null,
    Wa = 0;
  function ln(l) {
    var t = Wa;
    return (Wa += 1), ea === null && (ea = []), ms(ea, l, t);
  }
  function $a(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function tn(l, t) {
    throw t.$$typeof === fl
      ? Error(o(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function c0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function f0(l) {
    function t(r, d) {
      if (l) {
        var v = r.deletions;
        v === null ? ((r.deletions = [d]), (r.flags |= 16)) : v.push(d);
      }
    }
    function u(r, d) {
      if (!l) return null;
      for (; d !== null; ) t(r, d), (d = d.sibling);
      return null;
    }
    function a(r) {
      for (var d = new Map(); r !== null; )
        r.key !== null ? d.set(r.key, r) : d.set(r.index, r), (r = r.sibling);
      return d;
    }
    function e(r, d) {
      return (r = pt(r, d)), (r.index = 0), (r.sibling = null), r;
    }
    function n(r, d, v) {
      return (
        (r.index = v),
        l
          ? ((v = r.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((r.flags |= 67108866), d) : v)
              : ((r.flags |= 67108866), d))
          : ((r.flags |= 1048576), d)
      );
    }
    function c(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function f(r, d, v, E) {
      return d === null || d.tag !== 6
        ? ((d = gc(v, r.mode, E)), (d.return = r), d)
        : ((d = e(d, v)), (d.return = r), d);
    }
    function i(r, d, v, E) {
      var x = v.type;
      return x === ql
        ? g(r, d, v.props.children, E, v.key)
        : d !== null &&
          (d.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === Kl &&
              c0(x) === d.type))
        ? ((d = e(d, v.props)), $a(d, v), (d.return = r), d)
        : ((d = Be(v.type, v.key, v.props, null, r.mode, E)),
          $a(d, v),
          (d.return = r),
          d);
    }
    function h(r, d, v, E) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = Sc(v, r.mode, E)), (d.return = r), d)
        : ((d = e(d, v.children || [])), (d.return = r), d);
    }
    function g(r, d, v, E, x) {
      return d === null || d.tag !== 7
        ? ((d = bu(v, r.mode, E, x)), (d.return = r), d)
        : ((d = e(d, v)), (d.return = r), d);
    }
    function T(r, d, v) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = gc("" + d, r.mode, v)), (d.return = r), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nl:
            return (
              (v = Be(d.type, d.key, d.props, null, r.mode, v)),
              $a(v, d),
              (v.return = r),
              v
            );
          case Hl:
            return (d = Sc(d, r.mode, v)), (d.return = r), d;
          case Kl:
            var E = d._init;
            return (d = E(d._payload)), T(r, d, v);
        }
        if (Ul(d) || xl(d))
          return (d = bu(d, r.mode, v, null)), (d.return = r), d;
        if (typeof d.then == "function") return T(r, ln(d), v);
        if (d.$$typeof === Dl) return T(r, Qe(r, d), v);
        tn(r, d);
      }
      return null;
    }
    function y(r, d, v, E) {
      var x = d !== null ? d.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return x !== null ? null : f(r, d, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case nl:
            return v.key === x ? i(r, d, v, E) : null;
          case Hl:
            return v.key === x ? h(r, d, v, E) : null;
          case Kl:
            return (x = v._init), (v = x(v._payload)), y(r, d, v, E);
        }
        if (Ul(v) || xl(v)) return x !== null ? null : g(r, d, v, E, null);
        if (typeof v.then == "function") return y(r, d, ln(v), E);
        if (v.$$typeof === Dl) return y(r, d, Qe(r, v), E);
        tn(r, v);
      }
      return null;
    }
    function m(r, d, v, E, x) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (r = r.get(v) || null), f(d, r, "" + E, x);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case nl:
            return (
              (r = r.get(E.key === null ? v : E.key) || null), i(d, r, E, x)
            );
          case Hl:
            return (
              (r = r.get(E.key === null ? v : E.key) || null), h(d, r, E, x)
            );
          case Kl:
            var V = E._init;
            return (E = V(E._payload)), m(r, d, v, E, x);
        }
        if (Ul(E) || xl(E)) return (r = r.get(v) || null), g(d, r, E, x, null);
        if (typeof E.then == "function") return m(r, d, v, ln(E), x);
        if (E.$$typeof === Dl) return m(r, d, v, Qe(d, E), x);
        tn(d, E);
      }
      return null;
    }
    function G(r, d, v, E) {
      for (
        var x = null, V = null, R = d, Y = (d = 0), zl = null;
        R !== null && Y < v.length;
        Y++
      ) {
        R.index > Y ? ((zl = R), (R = null)) : (zl = R.sibling);
        var k = y(r, R, v[Y], E);
        if (k === null) {
          R === null && (R = zl);
          break;
        }
        l && R && k.alternate === null && t(r, R),
          (d = n(k, d, Y)),
          V === null ? (x = k) : (V.sibling = k),
          (V = k),
          (R = zl);
      }
      if (Y === v.length) return u(r, R), F && Tu(r, Y), x;
      if (R === null) {
        for (; Y < v.length; Y++)
          (R = T(r, v[Y], E)),
            R !== null &&
              ((d = n(R, d, Y)),
              V === null ? (x = R) : (V.sibling = R),
              (V = R));
        return F && Tu(r, Y), x;
      }
      for (R = a(R); Y < v.length; Y++)
        (zl = m(R, r, Y, v[Y], E)),
          zl !== null &&
            (l &&
              zl.alternate !== null &&
              R.delete(zl.key === null ? Y : zl.key),
            (d = n(zl, d, Y)),
            V === null ? (x = zl) : (V.sibling = zl),
            (V = zl));
      return (
        l &&
          R.forEach(function (du) {
            return t(r, du);
          }),
        F && Tu(r, Y),
        x
      );
    }
    function q(r, d, v, E) {
      if (v == null) throw Error(o(151));
      for (
        var x = null, V = null, R = d, Y = (d = 0), zl = null, k = v.next();
        R !== null && !k.done;
        Y++, k = v.next()
      ) {
        R.index > Y ? ((zl = R), (R = null)) : (zl = R.sibling);
        var du = y(r, R, k.value, E);
        if (du === null) {
          R === null && (R = zl);
          break;
        }
        l && R && du.alternate === null && t(r, R),
          (d = n(du, d, Y)),
          V === null ? (x = du) : (V.sibling = du),
          (V = du),
          (R = zl);
      }
      if (k.done) return u(r, R), F && Tu(r, Y), x;
      if (R === null) {
        for (; !k.done; Y++, k = v.next())
          (k = T(r, k.value, E)),
            k !== null &&
              ((d = n(k, d, Y)),
              V === null ? (x = k) : (V.sibling = k),
              (V = k));
        return F && Tu(r, Y), x;
      }
      for (R = a(R); !k.done; Y++, k = v.next())
        (k = m(R, r, Y, k.value, E)),
          k !== null &&
            (l && k.alternate !== null && R.delete(k.key === null ? Y : k.key),
            (d = n(k, d, Y)),
            V === null ? (x = k) : (V.sibling = k),
            (V = k));
      return (
        l &&
          R.forEach(function (qv) {
            return t(r, qv);
          }),
        F && Tu(r, Y),
        x
      );
    }
    function ul(r, d, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === ql &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case nl:
            l: {
              for (var x = v.key; d !== null; ) {
                if (d.key === x) {
                  if (((x = v.type), x === ql)) {
                    if (d.tag === 7) {
                      u(r, d.sibling),
                        (E = e(d, v.props.children)),
                        (E.return = r),
                        (r = E);
                      break l;
                    }
                  } else if (
                    d.elementType === x ||
                    (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === Kl &&
                      c0(x) === d.type)
                  ) {
                    u(r, d.sibling),
                      (E = e(d, v.props)),
                      $a(E, v),
                      (E.return = r),
                      (r = E);
                    break l;
                  }
                  u(r, d);
                  break;
                } else t(r, d);
                d = d.sibling;
              }
              v.type === ql
                ? ((E = bu(v.props.children, r.mode, E, v.key)),
                  (E.return = r),
                  (r = E))
                : ((E = Be(v.type, v.key, v.props, null, r.mode, E)),
                  $a(E, v),
                  (E.return = r),
                  (r = E));
            }
            return c(r);
          case Hl:
            l: {
              for (x = v.key; d !== null; ) {
                if (d.key === x)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    u(r, d.sibling),
                      (E = e(d, v.children || [])),
                      (E.return = r),
                      (r = E);
                    break l;
                  } else {
                    u(r, d);
                    break;
                  }
                else t(r, d);
                d = d.sibling;
              }
              (E = Sc(v, r.mode, E)), (E.return = r), (r = E);
            }
            return c(r);
          case Kl:
            return (x = v._init), (v = x(v._payload)), ul(r, d, v, E);
        }
        if (Ul(v)) return G(r, d, v, E);
        if (xl(v)) {
          if (((x = xl(v)), typeof x != "function")) throw Error(o(150));
          return (v = x.call(v)), q(r, d, v, E);
        }
        if (typeof v.then == "function") return ul(r, d, ln(v), E);
        if (v.$$typeof === Dl) return ul(r, d, Qe(r, v), E);
        tn(r, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (u(r, d.sibling), (E = e(d, v)), (E.return = r), (r = E))
            : (u(r, d), (E = gc(v, r.mode, E)), (E.return = r), (r = E)),
          c(r))
        : u(r, d);
    }
    return function (r, d, v, E) {
      try {
        Wa = 0;
        var x = ul(r, d, v, E);
        return (ea = null), x;
      } catch (R) {
        if (R === Xa || R === Ve) throw R;
        var V = kl(29, R, null, r.mode);
        return (V.lanes = E), (V.return = r), V;
      } finally {
      }
    };
  }
  var na = f0(!0),
    i0 = f0(!1),
    it = A(null),
    bt = null;
  function $t(l) {
    var t = l.alternate;
    M(bl, bl.current & 1),
      M(it, l),
      bt === null &&
        (t === null || la.current !== null || t.memoizedState !== null) &&
        (bt = l);
  }
  function s0(l) {
    if (l.tag === 22) {
      if ((M(bl, bl.current), M(it, l), bt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (bt = l);
      }
    } else kt();
  }
  function kt() {
    M(bl, bl.current), M(it, it.current);
  }
  function jt(l) {
    D(it), bt === l && (bt = null), D(bl);
  }
  var bl = A(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (
          u !== null &&
          ((u = u.dehydrated), u === null || u.data === "$?" || Qf(u))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Fc(l, t, u, a) {
    (t = l.memoizedState),
      (u = u(a, t)),
      (u = u == null ? t : j({}, t, u)),
      (l.memoizedState = u),
      l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Ic = {
    enqueueSetState: function (l, t, u) {
      l = l._reactInternals;
      var a = lt(),
        e = Jt(a);
      (e.payload = t),
        u != null && (e.callback = u),
        (t = wt(l, e, a)),
        t !== null && (tt(t, l, a), Qa(t, l, a));
    },
    enqueueReplaceState: function (l, t, u) {
      l = l._reactInternals;
      var a = lt(),
        e = Jt(a);
      (e.tag = 1),
        (e.payload = t),
        u != null && (e.callback = u),
        (t = wt(l, e, a)),
        t !== null && (tt(t, l, a), Qa(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var u = lt(),
        a = Jt(u);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = wt(l, a, u)),
        t !== null && (tt(t, l, u), Qa(t, l, u));
    },
  };
  function d0(l, t, u, a, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Na(u, a) || !Na(e, n)
        : !0
    );
  }
  function r0(l, t, u, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(u, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(u, a),
      t.state !== l && Ic.enqueueReplaceState(t, t.state, null);
  }
  function Du(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      u === t && (u = j({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var an =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function o0(l) {
    an(l);
  }
  function v0(l) {
    console.error(l);
  }
  function h0(l) {
    an(l);
  }
  function en(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function y0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Pc(l, t, u) {
    return (
      (u = Jt(u)),
      (u.tag = 3),
      (u.payload = { element: null }),
      (u.callback = function () {
        en(l, t);
      }),
      u
    );
  }
  function m0(l) {
    return (l = Jt(l)), (l.tag = 3), l;
  }
  function g0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          y0(t, u, a);
        });
    }
    var c = u.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        y0(t, u, a),
          typeof e != "function" &&
            (uu === null ? (uu = new Set([this])) : uu.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function qo(l, t, u, a, e) {
    if (
      ((u.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = u.alternate),
        t !== null && Ya(t, u, e, !0),
        (u = it.current),
        u !== null)
      ) {
        switch (u.tag) {
          case 13:
            return (
              bt === null ? zf() : u.alternate === null && vl === 0 && (vl = 3),
              (u.flags &= -257),
              (u.flags |= 65536),
              (u.lanes = e),
              a === Dc
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null ? (u.updateQueue = new Set([a])) : t.add(a),
                  Mf(l, a, e)),
              !1
            );
          case 22:
            return (
              (u.flags |= 65536),
              a === Dc
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (u.updateQueue = t))
                    : ((u = t.retryQueue),
                      u === null ? (t.retryQueue = new Set([a])) : u.add(a)),
                  Mf(l, a, e)),
              !1
            );
        }
        throw Error(o(435, u.tag));
      }
      return Mf(l, a, e), zf(), !1;
    }
    if (F)
      return (
        (t = it.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            a !== Tc && ((l = Error(o(422), { cause: a })), qa(et(l, u))))
          : (a !== Tc && ((t = Error(o(423), { cause: a })), qa(et(t, u))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (a = et(a, u)),
            (e = Pc(l.stateNode, a, e)),
            Nc(l, e),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(o(520), { cause: a });
    if (
      ((n = et(n, u)),
      ue === null ? (ue = [n]) : ue.push(n),
      vl !== 4 && (vl = 2),
      t === null)
    )
      return !0;
    (a = et(a, u)), (u = t);
    do {
      switch (u.tag) {
        case 3:
          return (
            (u.flags |= 65536),
            (l = e & -e),
            (u.lanes |= l),
            (l = Pc(u.stateNode, a, l)),
            Nc(u, l),
            !1
          );
        case 1:
          if (
            ((t = u.type),
            (n = u.stateNode),
            (u.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (uu === null || !uu.has(n)))))
          )
            return (
              (u.flags |= 65536),
              (e &= -e),
              (u.lanes |= e),
              (e = m0(e)),
              g0(e, l, u, a),
              Nc(u, e),
              !1
            );
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var S0 = Error(o(461)),
    Al = !1;
  function _l(l, t, u, a) {
    t.child = l === null ? i0(t, null, u, a) : na(t, l.child, u, a);
  }
  function b0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a) f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return (
      _u(t),
      (a = Yc(l, t, u, c, n, e)),
      (f = Bc()),
      l !== null && !Al
        ? (Gc(l, t, e), Ht(l, t, e))
        : (F && f && bc(t), (t.flags |= 1), _l(l, t, a, e), t.child)
    );
  }
  function E0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" &&
        !mc(n) &&
        n.defaultProps === void 0 &&
        u.compare === null
        ? ((t.tag = 15), (t.type = n), T0(l, t, n, a, e))
        : ((l = Be(u.type, null, a, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !ff(l, e))) {
      var c = n.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : Na), u(c, a) && l.ref === t.ref)
      )
        return Ht(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = pt(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function T0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Na(n, a) && l.ref === t.ref)
        if (((Al = !1), (t.pendingProps = a = n), ff(l, e)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return (t.lanes = l.lanes), Ht(l, t, e);
    }
    return lf(l, t, u, a, e);
  }
  function A0(l, t, u) {
    var a = t.pendingProps,
      e = a.children,
      n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | u : u), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return O0(l, t, a, u);
      }
      if ((u & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ze(t, n !== null ? n.cachePool : null),
          n !== null ? Ts(t, n) : jc(),
          s0(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          O0(l, t, n !== null ? n.baseLanes | u : u, u)
        );
    } else
      n !== null
        ? (Ze(t, n.cachePool), Ts(t, n), kt(), (t.memoizedState = null))
        : (l !== null && Ze(t, null), jc(), kt());
    return _l(l, t, e, u), t.child;
  }
  function O0(l, t, u, a) {
    var e = pc();
    return (
      (e = e === null ? null : { parent: Sl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: u, cachePool: e }),
      l !== null && Ze(t, null),
      jc(),
      s0(t),
      l !== null && Ya(l, t, a, !0),
      null
    );
  }
  function nn(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(o(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function lf(l, t, u, a, e) {
    return (
      _u(t),
      (u = Yc(l, t, u, a, void 0, e)),
      (a = Bc()),
      l !== null && !Al
        ? (Gc(l, t, e), Ht(l, t, e))
        : (F && a && bc(t), (t.flags |= 1), _l(l, t, u, e), t.child)
    );
  }
  function z0(l, t, u, a, e, n) {
    return (
      _u(t),
      (t.updateQueue = null),
      (u = Os(t, a, u, e)),
      As(l),
      (a = Bc()),
      l !== null && !Al
        ? (Gc(l, t, n), Ht(l, t, n))
        : (F && a && bc(t), (t.flags |= 1), _l(l, t, u, n), t.child)
    );
  }
  function _0(l, t, u, a, e) {
    if ((_u(t), t.stateNode === null)) {
      var n = $u,
        c = u.contextType;
      typeof c == "object" && c !== null && (n = Rl(c)),
        (n = new u(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Ic),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        xc(t),
        (c = u.contextType),
        (n.context = typeof c == "object" && c !== null ? Rl(c) : $u),
        (n.state = t.memoizedState),
        (c = u.getDerivedStateFromProps),
        typeof c == "function" && (Fc(t, u, c, a), (n.state = t.memoizedState)),
        typeof u.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && Ic.enqueueReplaceState(n, n.state, null),
          Va(t, a, n, e),
          Za(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Du(u, f);
      n.props = i;
      var h = n.context,
        g = u.contextType;
      (c = $u), typeof g == "object" && g !== null && (c = Rl(g));
      var T = u.getDerivedStateFromProps;
      (g =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || h !== c) && r0(t, n, a, c)),
        (Kt = !1);
      var y = t.memoizedState;
      (n.state = y),
        Va(t, a, n, e),
        Za(),
        (h = t.memoizedState),
        f || y !== h || Kt
          ? (typeof T == "function" && (Fc(t, u, T, a), (h = t.memoizedState)),
            (i = Kt || d0(t, u, i, a, y, h, c))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = h)),
            (n.props = a),
            (n.state = h),
            (n.context = c),
            (a = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        Uc(l, t),
        (c = t.memoizedProps),
        (g = Du(u, c)),
        (n.props = g),
        (T = t.pendingProps),
        (y = n.context),
        (h = u.contextType),
        (i = $u),
        typeof h == "object" && h !== null && (i = Rl(h)),
        (f = u.getDerivedStateFromProps),
        (h =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== T || y !== i) && r0(t, n, a, i)),
        (Kt = !1),
        (y = t.memoizedState),
        (n.state = y),
        Va(t, a, n, e),
        Za();
      var m = t.memoizedState;
      c !== T ||
      y !== m ||
      Kt ||
      (l !== null && l.dependencies !== null && Ce(l.dependencies))
        ? (typeof f == "function" && (Fc(t, u, f, a), (m = t.memoizedState)),
          (g =
            Kt ||
            d0(t, u, g, a, y, m, i) ||
            (l !== null && l.dependencies !== null && Ce(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, m, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, m, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = m)),
          (n.props = a),
          (n.state = m),
          (n.context = i),
          (a = g))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      nn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (u =
            a && typeof u.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = na(t, l.child, null, e)),
              (t.child = na(t, null, u, e)))
            : _l(l, t, u, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Ht(l, t, e)),
      l
    );
  }
  function M0(l, t, u, a) {
    return Ha(), (t.flags |= 256), _l(l, t, u, a), t.child;
  }
  var tf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function uf(l) {
    return { baseLanes: l, cachePool: vs() };
  }
  function af(l, t, u) {
    return (l = l !== null ? l.childLanes & ~u : 0), t && (l |= st), l;
  }
  function p0(l, t, u) {
    var a = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (F) {
        if ((e ? $t(t) : kt(), F)) {
          var f = ol,
            i;
          if ((i = f)) {
            l: {
              for (i = f, f = St; i.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (((i = yt(i.nextSibling)), i === null)) {
                  f = null;
                  break l;
                }
              }
              f = i;
            }
            f !== null
              ? ((t.memoizedState = {
                  dehydrated: f,
                  treeContext: Eu !== null ? { id: Dt, overflow: xt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = kl(18, null, null, 0)),
                (i.stateNode = f),
                (i.return = t),
                (t.child = i),
                (Yl = t),
                (ol = null),
                (i = !0))
              : (i = !1);
          }
          i || Ou(t);
        }
        if (
          ((f = t.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return Qf(f) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        jt(t);
      }
      return (
        (f = a.children),
        (a = a.fallback),
        e
          ? (kt(),
            (e = t.mode),
            (f = cn({ mode: "hidden", children: f }, e)),
            (a = bu(a, e, u, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (e = t.child),
            (e.memoizedState = uf(u)),
            (e.childLanes = af(l, c, u)),
            (t.memoizedState = tf),
            a)
          : ($t(t), ef(t, f))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((f = i.dehydrated), f !== null))
    ) {
      if (n)
        t.flags & 256
          ? ($t(t), (t.flags &= -257), (t = nf(l, t, u)))
          : t.memoizedState !== null
          ? (kt(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (kt(),
            (e = a.fallback),
            (f = t.mode),
            (a = cn({ mode: "visible", children: a.children }, f)),
            (e = bu(e, f, u, null)),
            (e.flags |= 2),
            (a.return = t),
            (e.return = t),
            (a.sibling = e),
            (t.child = a),
            na(t, l.child, null, u),
            (a = t.child),
            (a.memoizedState = uf(u)),
            (a.childLanes = af(l, c, u)),
            (t.memoizedState = tf),
            (t = e));
      else if (($t(t), Qf(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var h = c.dgst;
        (c = h),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = c),
          qa({ value: a, source: null, stack: null }),
          (t = nf(l, t, u));
      } else if (
        (Al || Ya(l, t, u, !1), (c = (u & l.childLanes) !== 0), Al || c)
      ) {
        if (
          ((c = cl),
          c !== null &&
            ((a = u & -u),
            (a = (a & 42) !== 0 ? 1 : Qn(a)),
            (a = (a & (c.suspendedLanes | u)) !== 0 ? 0 : a),
            a !== 0 && a !== i.retryLane))
        )
          throw ((i.retryLane = a), Wu(l, a), tt(c, l, a), S0);
        f.data === "$?" || zf(), (t = nf(l, t, u));
      } else
        f.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (ol = yt(f.nextSibling)),
            (Yl = t),
            (F = !0),
            (Au = null),
            (St = !1),
            l !== null &&
              ((ct[ft++] = Dt),
              (ct[ft++] = xt),
              (ct[ft++] = Eu),
              (Dt = l.id),
              (xt = l.overflow),
              (Eu = t)),
            (t = ef(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (kt(),
        (e = a.fallback),
        (f = t.mode),
        (i = l.child),
        (h = i.sibling),
        (a = pt(i, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = i.subtreeFlags & 65011712),
        h !== null ? (e = pt(h, e)) : ((e = bu(e, f, u, null)), (e.flags |= 2)),
        (e.return = t),
        (a.return = t),
        (a.sibling = e),
        (t.child = a),
        (a = e),
        (e = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = uf(u))
          : ((i = f.cachePool),
            i !== null
              ? ((h = Sl._currentValue),
                (i = i.parent !== h ? { parent: h, pool: h } : i))
              : (i = vs()),
            (f = { baseLanes: f.baseLanes | u, cachePool: i })),
        (e.memoizedState = f),
        (e.childLanes = af(l, c, u)),
        (t.memoizedState = tf),
        a)
      : ($t(t),
        (u = l.child),
        (l = u.sibling),
        (u = pt(u, { mode: "visible", children: a.children })),
        (u.return = t),
        (u.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = u),
        (t.memoizedState = null),
        u);
  }
  function ef(l, t) {
    return (
      (t = cn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function cn(l, t) {
    return (
      (l = kl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function nf(l, t, u) {
    return (
      na(t, l.child, null, u),
      (l = ef(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function D0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Oc(l.return, t, u);
  }
  function cf(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: u,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = u),
        (n.tailMode = e));
  }
  function x0(l, t, u) {
    var a = t.pendingProps,
      e = a.revealOrder,
      n = a.tail;
    if ((_l(l, t, a.children, u), (a = bl.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && D0(l, u, t);
          else if (l.tag === 19) D0(l, u, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((M(bl, a), e)) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          (l = u.alternate),
            l !== null && un(l) === null && (e = u),
            (u = u.sibling);
        (u = e),
          u === null
            ? ((e = t.child), (t.child = null))
            : ((e = u.sibling), (u.sibling = null)),
          cf(t, !1, e, u, n);
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && un(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = u), (u = e), (e = l);
        }
        cf(t, !0, u, null, n);
        break;
      case "together":
        cf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ht(l, t, u) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (tu |= t.lanes),
      (u & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Ya(l, t, u, !1), (u & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        l = t.child, u = pt(l, l.pendingProps), t.child = u, u.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (u = u.sibling = pt(l, l.pendingProps)),
          (u.return = t);
      u.sibling = null;
    }
    return t.child;
  }
  function ff(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ce(l)));
  }
  function Yo(l, t, u) {
    switch (t.tag) {
      case 3:
        il(t, t.stateNode.containerInfo),
          Lt(t, Sl, l.memoizedState.cache),
          Ha();
        break;
      case 27:
      case 5:
        Yn(t);
        break;
      case 4:
        il(t, t.stateNode.containerInfo);
        break;
      case 10:
        Lt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? ($t(t), (t.flags |= 128), null)
            : (u & t.child.childLanes) !== 0
            ? p0(l, t, u)
            : ($t(t), (l = Ht(l, t, u)), l !== null ? l.sibling : null);
        $t(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((a = (u & t.childLanes) !== 0),
          a || (Ya(l, t, u, !1), (a = (u & t.childLanes) !== 0)),
          e)
        ) {
          if (a) return x0(l, t, u);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          M(bl, bl.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), A0(l, t, u);
      case 24:
        Lt(t, Sl, l.memoizedState.cache);
    }
    return Ht(l, t, u);
  }
  function U0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Al = !0;
      else {
        if (!ff(l, u) && (t.flags & 128) === 0) return (Al = !1), Yo(l, t, u);
        Al = (l.flags & 131072) !== 0;
      }
    else (Al = !1), F && (t.flags & 1048576) !== 0 && cs(t, Xe, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            e = a._init;
          if (((a = e(a._payload)), (t.type = a), typeof a == "function"))
            mc(a)
              ? ((l = Du(a, l)), (t.tag = 1), (t = _0(null, t, a, l, u)))
              : ((t.tag = 0), (t = lf(null, t, a, l, u)));
          else {
            if (a != null) {
              if (((e = a.$$typeof), e === ot)) {
                (t.tag = 11), (t = b0(null, t, a, l, u));
                break l;
              } else if (e === Ll) {
                (t.tag = 14), (t = E0(null, t, a, l, u));
                break l;
              }
            }
            throw ((t = vu(a) || a), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return lf(l, t, t.type, t.pendingProps, u);
      case 1:
        return (a = t.type), (e = Du(a, t.pendingProps)), _0(l, t, a, e, u);
      case 3:
        l: {
          if ((il(t, t.stateNode.containerInfo), l === null))
            throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Uc(l, t), Va(t, a, null, u);
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            Lt(t, Sl, a),
            a !== n.cache && zc(t, [Sl], u, !0),
            Za(),
            (a = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = M0(l, t, a, u);
              break l;
            } else if (a !== e) {
              (e = et(Error(o(424)), t)), qa(e), (t = M0(l, t, a, u));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                ol = yt(l.firstChild),
                  Yl = t,
                  F = !0,
                  Au = null,
                  St = !0,
                  u = i0(t, null, a, u),
                  t.child = u;
                u;

              )
                (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
            }
          else {
            if ((Ha(), a === e)) {
              t = Ht(l, t, u);
              break l;
            }
            _l(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          nn(l, t),
          l === null
            ? (u = Hd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = u)
              : F ||
                ((u = t.type),
                (l = t.pendingProps),
                (a = Tn(C.current).createElement(u)),
                (a[Nl] = t),
                (a[Gl] = l),
                pl(a, u, l),
                Tl(a),
                (t.stateNode = a))
            : (t.memoizedState = Hd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Yn(t),
          l === null &&
            F &&
            ((a = t.stateNode = Nd(t.type, t.pendingProps, C.current)),
            (Yl = t),
            (St = !0),
            (e = ol),
            nu(t.type) ? ((Zf = e), (ol = yt(a.firstChild))) : (ol = e)),
          _l(l, t, t.pendingProps.children, u),
          nn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            F &&
            ((e = a = ol) &&
              ((a = dv(a, t.type, t.pendingProps, St)),
              a !== null
                ? ((t.stateNode = a),
                  (Yl = t),
                  (ol = yt(a.firstChild)),
                  (St = !1),
                  (e = !0))
                : (e = !1)),
            e || Ou(t)),
          Yn(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Gf(e, n) ? (a = null) : c !== null && Gf(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Yc(l, t, Do, null, null, u)), (re._currentValue = e)),
          nn(l, t),
          _l(l, t, a, u),
          t.child
        );
      case 6:
        return (
          l === null &&
            F &&
            ((l = u = ol) &&
              ((u = rv(u, t.pendingProps, St)),
              u !== null
                ? ((t.stateNode = u), (Yl = t), (ol = null), (l = !0))
                : (l = !1)),
            l || Ou(t)),
          null
        );
      case 13:
        return p0(l, t, u);
      case 4:
        return (
          il(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = na(t, null, a, u)) : _l(l, t, a, u),
          t.child
        );
      case 11:
        return b0(l, t, t.type, t.pendingProps, u);
      case 7:
        return _l(l, t, t.pendingProps, u), t.child;
      case 8:
        return _l(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return _l(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          Lt(t, t.type, a.value),
          _l(l, t, a.children, u),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (a = t.pendingProps.children),
          _u(t),
          (e = Rl(e)),
          (a = a(e)),
          (t.flags |= 1),
          _l(l, t, a, u),
          t.child
        );
      case 14:
        return E0(l, t, t.type, t.pendingProps, u);
      case 15:
        return T0(l, t, t.type, t.pendingProps, u);
      case 19:
        return x0(l, t, u);
      case 31:
        return (
          (a = t.pendingProps),
          (u = t.mode),
          (a = { mode: a.mode, children: a.children }),
          l === null
            ? ((u = cn(a, u)),
              (u.ref = t.ref),
              (t.child = u),
              (u.return = t),
              (t = u))
            : ((u = pt(l.child, a)),
              (u.ref = t.ref),
              (t.child = u),
              (u.return = t),
              (t = u)),
          t
        );
      case 22:
        return A0(l, t, u);
      case 24:
        return (
          _u(t),
          (a = Rl(Sl)),
          l === null
            ? ((e = pc()),
              e === null &&
                ((e = cl),
                (n = _c()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= u),
                (e = n)),
              (t.memoizedState = { parent: a, cache: e }),
              xc(t),
              Lt(t, Sl, e))
            : ((l.lanes & u) !== 0 && (Uc(l, t), Va(t, null, null, u), Za()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== a
                ? ((e = { parent: a, cache: a }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Lt(t, Sl, a))
                : ((a = n.cache),
                  Lt(t, Sl, a),
                  a !== e.cache && zc(t, [Sl], u, !0))),
          _l(l, t, t.pendingProps.children, u),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function qt(l) {
    l.flags |= 4;
  }
  function N0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Xd(t))) {
      if (
        ((t = it.current),
        t !== null &&
          ((w & 4194048) === w
            ? bt !== null
            : ((w & 62914560) !== w && (w & 536870912) === 0) || t !== bt))
      )
        throw ((Ca = Dc), hs);
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? si() : 536870912), (l.lanes |= t), (sa |= t));
  }
  function ka(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), (t = t.sibling);
          u === null ? (l.tail = null) : (u.sibling = null);
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), (u = u.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function rl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      u = 0,
      a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags & 65011712),
          (a |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags),
          (a |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = u), t;
  }
  function Bo(l, t, u) {
    var a = t.pendingProps;
    switch ((Ec(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rl(t), null;
      case 1:
        return rl(t), null;
      case 3:
        return (
          (u = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Nt(Sl),
          Ct(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (l === null || l.child === null) &&
            (ja(t)
              ? qt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ss())),
          rl(t),
          null
        );
      case 26:
        return (
          (u = t.memoizedState),
          l === null
            ? (qt(t),
              u !== null ? (rl(t), N0(t, u)) : (rl(t), (t.flags &= -16777217)))
            : u
            ? u !== l.memoizedState
              ? (qt(t), rl(t), N0(t, u))
              : (rl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== a && qt(t), rl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Se(t), (u = C.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && qt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return rl(t), null;
          }
          (l = H.current),
            ja(t) ? fs(t) : ((l = Nd(e, a, u)), (t.stateNode = l), qt(t));
        }
        return rl(t), null;
      case 5:
        if ((Se(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && qt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return rl(t), null;
          }
          if (((l = H.current), ja(t))) fs(t);
          else {
            switch (((e = Tn(C.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof a.is == "string"
                        ? e.createElement("select", { is: a.is })
                        : e.createElement("select")),
                      a.multiple
                        ? (l.multiple = !0)
                        : a.size && (l.size = a.size);
                    break;
                  default:
                    l =
                      typeof a.is == "string"
                        ? e.createElement(u, { is: a.is })
                        : e.createElement(u);
                }
            }
            (l[Nl] = t), (l[Gl] = a);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((pl(l, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && qt(t);
          }
        }
        return rl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (((l = C.current), ja(t))) {
            if (
              ((l = t.stateNode),
              (u = t.memoizedProps),
              (a = null),
              (e = Yl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            (l[Nl] = t),
              (l = !!(
                l.nodeValue === u ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                zd(l.nodeValue, u)
              )),
              l || Ou(t);
          } else (l = Tn(l).createTextNode(a)), (l[Nl] = t), (t.stateNode = l);
        }
        return rl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = ja(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(317));
              e[Nl] = t;
            } else
              Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            rl(t), (e = !1);
          } else
            (e = ss()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if ((jt(t), (t.flags & 128) !== 0)) return (t.lanes = u), t;
        if (
          ((u = a !== null), (l = l !== null && l.memoizedState !== null), u)
        ) {
          (a = t.child),
            (e = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== e && (a.flags |= 2048);
        }
        return (
          u !== l && u && (t.child.flags |= 8192),
          fn(t, t.updateQueue),
          rl(t),
          null
        );
      case 4:
        return Ct(), l === null && jf(t.stateNode.containerInfo), rl(t), null;
      case 10:
        return Nt(t.type), rl(t), null;
      case 19:
        if ((D(bl), (e = t.memoizedState), e === null)) return rl(t), null;
        if (((a = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (a) ka(e, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = un(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ka(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      fn(t, l),
                      t.subtreeFlags = 0,
                      l = u,
                      u = t.child;
                    u !== null;

                  )
                    ns(u, l), (u = u.sibling);
                  return M(bl, (bl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              gt() > rn &&
              ((t.flags |= 128), (a = !0), ka(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = un(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                fn(t, l),
                ka(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !F)
              )
                return rl(t), null;
            } else
              2 * gt() - e.renderingStartTime > rn &&
                u !== 536870912 &&
                ((t.flags |= 128), (a = !0), ka(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = gt()),
            (t.sibling = null),
            (l = bl.current),
            M(bl, a ? (l & 1) | 2 : l & 1),
            t)
          : (rl(t), null);
      case 22:
      case 23:
        return (
          jt(t),
          Hc(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (u & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rl(t),
          (u = t.updateQueue),
          u !== null && fn(t, u.retryQueue),
          (u = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== u && (t.flags |= 2048),
          l !== null && D(Mu),
          null
        );
      case 24:
        return (
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Nt(Sl),
          rl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Go(l, t) {
    switch ((Ec(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nt(Sl),
          Ct(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (
          (jt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Ha();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return D(bl), null;
      case 4:
        return Ct(), null;
      case 10:
        return Nt(t.type), null;
      case 22:
      case 23:
        return (
          jt(t),
          Hc(),
          l !== null && D(Mu),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Nt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function R0(l, t) {
    switch ((Ec(t), t.tag)) {
      case 3:
        Nt(Sl), Ct();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        D(bl);
        break;
      case 10:
        Nt(t.type);
        break;
      case 22:
      case 23:
        jt(t), Hc(), l !== null && D(Mu);
        break;
      case 24:
        Nt(Sl);
    }
  }
  function Fa(l, t) {
    try {
      var u = t.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create,
              c = u.inst;
            (a = n()), (c.destroy = a);
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (f) {
      el(t, t.return, f);
    }
  }
  function Ft(l, t, u) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (e = t);
              var i = u,
                h = f;
              try {
                h();
              } catch (g) {
                el(e, i, g);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      el(t, t.return, g);
    }
  }
  function j0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Es(t, u);
      } catch (a) {
        el(l, l.return, a);
      }
    }
  }
  function H0(l, t, u) {
    (u.props = Du(l.type, l.memoizedProps)), (u.state = l.memoizedState);
    try {
      u.componentWillUnmount();
    } catch (a) {
      el(l, t, a);
    }
  }
  function Ia(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? (l.refCleanup = u(a)) : (u.current = a);
      }
    } catch (e) {
      el(l, t, e);
    }
  }
  function Et(l, t) {
    var u = l.ref,
      a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          el(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          el(l, t, e);
        }
      else u.current = null;
  }
  function q0(l) {
    var t = l.type,
      u = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? (a.src = u.src) : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function sf(l, t, u) {
    try {
      var a = l.stateNode;
      nv(a, l.type, u, t), (a[Gl] = t);
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function Y0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && nu(l.type)) ||
      l.tag === 4
    );
  }
  function df(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Y0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && nu(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function rf(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (u.nodeType === 9
              ? u.body
              : u.nodeName === "HTML"
              ? u.ownerDocument.body
              : u
            ).insertBefore(l, t)
          : ((t =
              u.nodeType === 9
                ? u.body
                : u.nodeName === "HTML"
                ? u.ownerDocument.body
                : u),
            t.appendChild(l),
            (u = u._reactRootContainer),
            u != null || t.onclick !== null || (t.onclick = En));
    else if (
      a !== 4 &&
      (a === 27 && nu(l.type) && ((u = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (rf(l, t, u), l = l.sibling; l !== null; )
        rf(l, t, u), (l = l.sibling);
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && nu(l.type) && (u = l.stateNode), (l = l.child), l !== null)
    )
      for (sn(l, t, u), l = l.sibling; l !== null; )
        sn(l, t, u), (l = l.sibling);
  }
  function B0(l) {
    var t = l.stateNode,
      u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      pl(t, a, u), (t[Nl] = l), (t[Gl] = u);
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Yt = !1,
    yl = !1,
    of = !1,
    G0 = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null;
  function Xo(l, t) {
    if (((l = l.containerInfo), (Yf = pn), (l = $i(l)), sc(l))) {
      if ("selectionStart" in l)
        var u = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          u = ((u = l.ownerDocument) && u.defaultView) || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              h = 0,
              g = 0,
              T = l,
              y = null;
            t: for (;;) {
              for (
                var m;
                T !== u || (e !== 0 && T.nodeType !== 3) || (f = c + e),
                  T !== n || (a !== 0 && T.nodeType !== 3) || (i = c + a),
                  T.nodeType === 3 && (c += T.nodeValue.length),
                  (m = T.firstChild) !== null;

              )
                (y = T), (T = m);
              for (;;) {
                if (T === l) break t;
                if (
                  (y === u && ++h === e && (f = c),
                  y === n && ++g === a && (i = c),
                  (m = T.nextSibling) !== null)
                )
                  break;
                (T = y), (y = T.parentNode);
              }
              T = m;
            }
            u = f === -1 || i === -1 ? null : { start: f, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (
      Bf = { focusedElem: l, selectionRange: u }, pn = !1, Ol = t;
      Ol !== null;

    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ol = l);
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (u = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = u.stateNode);
                try {
                  var G = Du(u.type, e, u.elementType === u.type);
                  (l = a.getSnapshotBeforeUpdate(G, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (q) {
                  el(u, u.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (u = l.nodeType), u === 9)
                )
                  Cf(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ol = l);
            break;
          }
          Ol = t.return;
        }
  }
  function X0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        It(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if ((It(l, u), a & 4))
          if (((l = u.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              el(u, u.return, c);
            }
          else {
            var e = Du(u.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              el(u, u.return, c);
            }
          }
        a & 64 && j0(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if ((It(l, u), a & 64 && ((l = u.updateQueue), l !== null))) {
          if (((t = null), u.child !== null))
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Es(l, t);
          } catch (c) {
            el(u, u.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && B0(u);
      case 26:
      case 5:
        It(l, u), t === null && a & 4 && q0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        It(l, u);
        break;
      case 13:
        It(l, u),
          a & 4 && Z0(l, u),
          a & 64 &&
            ((l = u.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((u = Wo.bind(null, u)), ov(l, u))));
        break;
      case 22:
        if (((a = u.memoizedState !== null || Yt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || yl), (e = Yt);
          var n = yl;
          (Yt = a),
            (yl = t) && !n ? Pt(l, u, (u.subtreeFlags & 8772) !== 0) : It(l, u),
            (Yt = e),
            (yl = n);
        }
        break;
      case 30:
        break;
      default:
        It(l, u);
    }
  }
  function C0(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), C0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Ln(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var sl = null,
    Ql = !1;
  function Bt(l, t, u) {
    for (u = u.child; u !== null; ) Q0(l, t, u), (u = u.sibling);
  }
  function Q0(l, t, u) {
    if (wl && typeof wl.onCommitFiberUnmount == "function")
      try {
        wl.onCommitFiberUnmount(ba, u);
      } catch {}
    switch (u.tag) {
      case 26:
        yl || Et(u, t),
          Bt(l, t, u),
          u.memoizedState
            ? u.memoizedState.count--
            : u.stateNode && ((u = u.stateNode), u.parentNode.removeChild(u));
        break;
      case 27:
        yl || Et(u, t);
        var a = sl,
          e = Ql;
        nu(u.type) && ((sl = u.stateNode), (Ql = !1)),
          Bt(l, t, u),
          fe(u.stateNode),
          (sl = a),
          (Ql = e);
        break;
      case 5:
        yl || Et(u, t);
      case 6:
        if (
          ((a = sl),
          (e = Ql),
          (sl = null),
          Bt(l, t, u),
          (sl = a),
          (Ql = e),
          sl !== null)
        )
          if (Ql)
            try {
              (sl.nodeType === 9
                ? sl.body
                : sl.nodeName === "HTML"
                ? sl.ownerDocument.body
                : sl
              ).removeChild(u.stateNode);
            } catch (n) {
              el(u, t, n);
            }
          else
            try {
              sl.removeChild(u.stateNode);
            } catch (n) {
              el(u, t, n);
            }
        break;
      case 18:
        sl !== null &&
          (Ql
            ? ((l = sl),
              xd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                u.stateNode
              ),
              ye(l))
            : xd(sl, u.stateNode));
        break;
      case 4:
        (a = sl),
          (e = Ql),
          (sl = u.stateNode.containerInfo),
          (Ql = !0),
          Bt(l, t, u),
          (sl = a),
          (Ql = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl || Ft(2, u, t), yl || Ft(4, u, t), Bt(l, t, u);
        break;
      case 1:
        yl ||
          (Et(u, t),
          (a = u.stateNode),
          typeof a.componentWillUnmount == "function" && H0(u, t, a)),
          Bt(l, t, u);
        break;
      case 21:
        Bt(l, t, u);
        break;
      case 22:
        (yl = (a = yl) || u.memoizedState !== null), Bt(l, t, u), (yl = a);
        break;
      default:
        Bt(l, t, u);
    }
  }
  function Z0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        ye(l);
      } catch (u) {
        el(t, t.return, u);
      }
  }
  function Co(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new G0()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new G0()),
          t
        );
      default:
        throw Error(o(435, l.tag));
    }
  }
  function vf(l, t) {
    var u = Co(l);
    t.forEach(function (a) {
      var e = $o.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function Fl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (nu(f.type)) {
                (sl = f.stateNode), (Ql = !1);
                break l;
              }
              break;
            case 5:
              (sl = f.stateNode), (Ql = !1);
              break l;
            case 3:
            case 4:
              (sl = f.stateNode.containerInfo), (Ql = !0);
              break l;
          }
          f = f.return;
        }
        if (sl === null) throw Error(o(160));
        Q0(n, c, e),
          (sl = null),
          (Ql = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) V0(t, l), (t = t.sibling);
  }
  var ht = null;
  function V0(l, t) {
    var u = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l),
          Il(l),
          a & 4 && (Ft(3, l, l.return), Fa(3, l), Ft(5, l, l.return));
        break;
      case 1:
        Fl(t, l),
          Il(l),
          a & 512 && (yl || u === null || Et(u, u.return)),
          a & 64 &&
            Yt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((u = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = u === null ? a : u.concat(a)))));
        break;
      case 26:
        var e = ht;
        if (
          (Fl(t, l),
          Il(l),
          a & 512 && (yl || u === null || Et(u, u.return)),
          a & 4)
        ) {
          var n = u !== null ? u.memoizedState : null;
          if (((a = l.memoizedState), u === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (u = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (a) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Aa] ||
                          n[Nl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(a)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        pl(n, a, u),
                        (n[Nl] = l),
                        Tl(n),
                        (a = n);
                      break l;
                    case "link":
                      var c = Bd("link", "href", e).get(a + (u.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (u.href == null || u.href === ""
                                ? null
                                : u.href) &&
                              n.getAttribute("rel") ===
                                (u.rel == null ? null : u.rel) &&
                              n.getAttribute("title") ===
                                (u.title == null ? null : u.title) &&
                              n.getAttribute("crossorigin") ===
                                (u.crossOrigin == null ? null : u.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        pl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Bd("meta", "content", e).get(
                          a + (u.content || "")
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (u.content == null ? null : "" + u.content) &&
                              n.getAttribute("name") ===
                                (u.name == null ? null : u.name) &&
                              n.getAttribute("property") ===
                                (u.property == null ? null : u.property) &&
                              n.getAttribute("http-equiv") ===
                                (u.httpEquiv == null ? null : u.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (u.charSet == null ? null : u.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        pl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (n[Nl] = l), Tl(n), (a = n);
                }
                l.stateNode = a;
              } else Gd(e, l.type, l.stateNode);
            else l.stateNode = Yd(e, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? u.stateNode !== null &&
                    ((u = u.stateNode), u.parentNode.removeChild(u))
                  : n.count--,
                a === null
                  ? Gd(e, l.type, l.stateNode)
                  : Yd(e, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                sf(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        Fl(t, l),
          Il(l),
          a & 512 && (yl || u === null || Et(u, u.return)),
          u !== null && a & 4 && sf(l, l.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (
          (Fl(t, l),
          Il(l),
          a & 512 && (yl || u === null || Et(u, u.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Qu(e, "");
          } catch (m) {
            el(l, l.return, m);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), sf(l, e, u !== null ? u.memoizedProps : e)),
          a & 1024 && (of = !0);
        break;
      case 6:
        if ((Fl(t, l), Il(l), a & 4)) {
          if (l.stateNode === null) throw Error(o(162));
          (a = l.memoizedProps), (u = l.stateNode);
          try {
            u.nodeValue = a;
          } catch (m) {
            el(l, l.return, m);
          }
        }
        break;
      case 3:
        if (
          ((zn = null),
          (e = ht),
          (ht = An(t.containerInfo)),
          Fl(t, l),
          (ht = e),
          Il(l),
          a & 4 && u !== null && u.memoizedState.isDehydrated)
        )
          try {
            ye(t.containerInfo);
          } catch (m) {
            el(l, l.return, m);
          }
        of && ((of = !1), L0(l));
        break;
      case 4:
        (a = ht),
          (ht = An(l.stateNode.containerInfo)),
          Fl(t, l),
          Il(l),
          (ht = a);
        break;
      case 12:
        Fl(t, l), Il(l);
        break;
      case 13:
        Fl(t, l),
          Il(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (u !== null && u.memoizedState !== null) &&
            (bf = gt()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vf(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null,
          h = Yt,
          g = yl;
        if (
          ((Yt = h || e),
          (yl = g || i),
          Fl(t, l),
          (yl = g),
          (Yt = h),
          Il(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (u === null || i || Yt || yl || xu(l)),
              u = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (((n = i.stateNode), e))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    f = i.stateNode;
                    var T = i.memoizedProps.style,
                      y =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    f.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (m) {
                  el(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  el(i, i.return, m);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), (t = t.return);
            }
            u === t && (u = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((u = a.retryQueue),
            u !== null && ((a.retryQueue = null), vf(l, u))));
        break;
      case 19:
        Fl(t, l),
          Il(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vf(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Y0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode,
              n = df(l);
            sn(l, n, e);
            break;
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Qu(c, ""), (u.flags &= -33));
            var f = df(l);
            sn(l, f, c);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo,
              h = df(l);
            rf(l, h, i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        el(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function L0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        L0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function It(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) X0(l, t.alternate, t), (t = t.sibling);
  }
  function xu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ft(4, t, t.return), xu(t);
          break;
        case 1:
          Et(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && H0(t, t.return, u),
            xu(t);
          break;
        case 27:
          fe(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), xu(t);
          break;
        case 22:
          t.memoizedState === null && xu(t);
          break;
        case 30:
          xu(t);
          break;
        default:
          xu(t);
      }
      l = l.sibling;
    }
  }
  function Pt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Pt(e, n, u), Fa(4, n);
          break;
        case 1:
          if (
            (Pt(e, n, u),
            (a = n),
            (e = a.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (h) {
              el(a, a.return, h);
            }
          if (((a = n), (e = a.updateQueue), e !== null)) {
            var f = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  bs(i[e], f);
            } catch (h) {
              el(a, a.return, h);
            }
          }
          u && c & 64 && j0(n), Ia(n, n.return);
          break;
        case 27:
          B0(n);
        case 26:
        case 5:
          Pt(e, n, u), u && a === null && c & 4 && q0(n), Ia(n, n.return);
          break;
        case 12:
          Pt(e, n, u);
          break;
        case 13:
          Pt(e, n, u), u && c & 4 && Z0(e, n);
          break;
        case 22:
          n.memoizedState === null && Pt(e, n, u), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          Pt(e, n, u);
      }
      t = t.sibling;
    }
  }
  function hf(l, t) {
    var u = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (u = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== u && (l != null && l.refCount++, u != null && Ba(u));
  }
  function yf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ba(l));
  }
  function Tt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) K0(l, t, u, a), (t = t.sibling);
  }
  function K0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(l, t, u, a), e & 2048 && Fa(9, t);
        break;
      case 1:
        Tt(l, t, u, a);
        break;
      case 3:
        Tt(l, t, u, a),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ba(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(l, t, u, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            el(t, t.return, i);
          }
        } else Tt(l, t, u, a);
        break;
      case 13:
        Tt(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Tt(l, t, u, a)
              : Pa(l, t)
            : n._visibility & 2
            ? Tt(l, t, u, a)
            : ((n._visibility |= 2),
              ca(l, t, u, a, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && hf(c, t);
        break;
      case 24:
        Tt(l, t, u, a), e & 2048 && yf(t.alternate, t);
        break;
      default:
        Tt(l, t, u, a);
    }
  }
  function ca(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        f = u,
        i = a,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ca(n, c, f, i, e), Fa(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null
            ? g._visibility & 2
              ? ca(n, c, f, i, e)
              : Pa(n, c)
            : ((g._visibility |= 2), ca(n, c, f, i, e)),
            e && h & 2048 && hf(c.alternate, c);
          break;
        case 24:
          ca(n, c, f, i, e), e && h & 2048 && yf(c.alternate, c);
          break;
        default:
          ca(n, c, f, i, e);
      }
      t = t.sibling;
    }
  }
  function Pa(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l,
          a = t,
          e = a.flags;
        switch (a.tag) {
          case 22:
            Pa(u, a), e & 2048 && hf(a.alternate, a);
            break;
          case 24:
            Pa(u, a), e & 2048 && yf(a.alternate, a);
            break;
          default:
            Pa(u, a);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function fa(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; ) J0(l), (l = l.sibling);
  }
  function J0(l) {
    switch (l.tag) {
      case 26:
        fa(l),
          l.flags & le &&
            l.memoizedState !== null &&
            _v(ht, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        fa(l);
        break;
      case 3:
      case 4:
        var t = ht;
        (ht = An(l.stateNode.containerInfo)), fa(l), (ht = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = le), (le = 16777216), fa(l), (le = t))
            : fa(l));
        break;
      default:
        fa(l);
    }
  }
  function w0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Ol = a), $0(a, l);
        }
      w0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) W0(l), (l = l.sibling);
  }
  function W0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && Ft(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), dn(l))
          : te(l);
        break;
      default:
        te(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Ol = a), $0(a, l);
        }
      w0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          Ft(8, t, t.return), dn(t);
          break;
        case 22:
          (u = t.stateNode),
            u._visibility & 2 && ((u._visibility &= -3), dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function $0(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ft(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ba(u.memoizedState.cache);
      }
      if (((a = u.child), a !== null)) (a.return = u), (Ol = a);
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling,
            n = a.return;
          if ((C0(a), a === u)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Ol = e);
            break l;
          }
          Ol = n;
        }
    }
  }
  var Qo = {
      getCacheForType: function (l) {
        var t = Rl(Sl),
          u = t.data.get(l);
        return u === void 0 && ((u = l()), t.data.set(l, u)), u;
      },
    },
    Zo = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    cl = null,
    K = null,
    w = 0,
    P = 0,
    Pl = null,
    lu = !1,
    ia = !1,
    mf = !1,
    Gt = 0,
    vl = 0,
    tu = 0,
    Uu = 0,
    gf = 0,
    st = 0,
    sa = 0,
    ue = null,
    Zl = null,
    Sf = !1,
    bf = 0,
    rn = 1 / 0,
    on = null,
    uu = null,
    Ml = 0,
    au = null,
    da = null,
    ra = 0,
    Ef = 0,
    Tf = null,
    k0 = null,
    ae = 0,
    Af = null;
  function lt() {
    if ((I & 2) !== 0 && w !== 0) return w & -w;
    if (b.T !== null) {
      var l = Iu;
      return l !== 0 ? l : xf();
    }
    return oi();
  }
  function F0() {
    st === 0 && (st = (w & 536870912) === 0 || F ? ii() : 536870912);
    var l = it.current;
    return l !== null && (l.flags |= 32), st;
  }
  function tt(l, t, u) {
    ((l === cl && (P === 2 || P === 9)) || l.cancelPendingCommit !== null) &&
      (oa(l, 0), eu(l, w, st, !1)),
      Ta(l, u),
      ((I & 2) === 0 || l !== cl) &&
        (l === cl && ((I & 2) === 0 && (Uu |= u), vl === 4 && eu(l, w, st, !1)),
        At(l));
  }
  function I0(l, t, u) {
    if ((I & 6) !== 0) throw Error(o(327));
    var a = (!u && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Ea(l, t),
      e = a ? Ko(l, t) : _f(l, t, !0),
      n = a;
    do {
      if (e === 0) {
        ia && !a && eu(l, t, 0, !1);
        break;
      } else {
        if (((u = l.current.alternate), n && !Vo(u))) {
          (e = _f(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = ue;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (oa(f, c).flags |= 256), (c = _f(f, c, !1)), c !== 2)) {
                if (mf && !i) {
                  (f.errorRecoveryDisabledLanes |= n), (Uu |= n), (e = 4);
                  break l;
                }
                (n = Zl),
                  (Zl = e),
                  n !== null && (Zl === null ? (Zl = n) : Zl.push.apply(Zl, n));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          oa(l, 0), eu(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              eu(a, t, st, !lu);
              break l;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((e = bf + 300 - gt()), 10 < e)) {
            if ((eu(a, t, st, !lu), Ae(a, 0, !0) !== 0)) break l;
            a.timeoutHandle = pd(
              P0.bind(null, a, u, Zl, on, Sf, t, st, Uu, sa, lu, n, 2, -0, 0),
              e
            );
            break l;
          }
          P0(a, u, Zl, on, Sf, t, st, Uu, sa, lu, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    At(l);
  }
  function P0(l, t, u, a, e, n, c, f, i, h, g, T, y, m) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((de = { stylesheets: null, count: 0, unsuspend: zv }),
        J0(t),
        (T = Mv()),
        T !== null))
    ) {
      (l.cancelPendingCommit = T(
        cd.bind(null, l, t, n, u, a, e, c, f, i, g, 1, y, m)
      )),
        eu(l, n, c, !h);
      return;
    }
    cd(l, t, n, u, a, e, c, f, i);
  }
  function Vo(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if (
        (u === 0 || u === 11 || u === 15) &&
        t.flags & 16384 &&
        ((u = t.updateQueue), u !== null && ((u = u.stores), u !== null))
      )
        for (var a = 0; a < u.length; a++) {
          var e = u[a],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!$l(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((u = t.child), t.subtreeFlags & 16384 && u !== null))
        (u.return = t), (t = u);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function eu(l, t, u, a) {
    (t &= ~gf),
      (t &= ~Uu),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Wl(e),
        c = 1 << n;
      (a[n] = -1), (e &= ~c);
    }
    u !== 0 && di(l, u, t);
  }
  function vn() {
    return (I & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Of() {
    if (K !== null) {
      if (P === 0) var l = K.return;
      else (l = K), (Ut = zu = null), Xc(l), (ea = null), (Wa = 0), (l = K);
      for (; l !== null; ) R0(l.alternate, l), (l = l.return);
      K = null;
    }
  }
  function oa(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && ((l.timeoutHandle = -1), fv(u)),
      (u = l.cancelPendingCommit),
      u !== null && ((l.cancelPendingCommit = null), u()),
      Of(),
      (cl = l),
      (K = u = pt(l.current, null)),
      (w = t),
      (P = 0),
      (Pl = null),
      (lu = !1),
      (ia = Ea(l, t)),
      (mf = !1),
      (sa = st = gf = Uu = tu = vl = 0),
      (Zl = ue = null),
      (Sf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Wl(a),
          n = 1 << e;
        (t |= l[e]), (a &= ~n);
      }
    return (Gt = t), He(), u;
  }
  function ld(l, t) {
    (Z = null),
      (b.H = Pe),
      t === Xa || t === Ve
        ? ((t = gs()), (P = 3))
        : t === hs
        ? ((t = gs()), (P = 4))
        : (P =
            t === S0
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Pl = t),
      K === null && ((vl = 1), en(l, et(t, l.current)));
  }
  function td() {
    var l = b.H;
    return (b.H = Pe), l === null ? Pe : l;
  }
  function ud() {
    var l = b.A;
    return (b.A = Qo), l;
  }
  function zf() {
    (vl = 4),
      lu || ((w & 4194048) !== w && it.current !== null) || (ia = !0),
      ((tu & 134217727) === 0 && (Uu & 134217727) === 0) ||
        cl === null ||
        eu(cl, w, st, !1);
  }
  function _f(l, t, u) {
    var a = I;
    I |= 2;
    var e = td(),
      n = ud();
    (cl !== l || w !== t) && ((on = null), oa(l, t)), (t = !1);
    var c = vl;
    l: do
      try {
        if (P !== 0 && K !== null) {
          var f = K,
            i = Pl;
          switch (P) {
            case 8:
              Of(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var h = P;
              if (((P = 0), (Pl = null), va(l, f, i, h), u && ia)) {
                c = 0;
                break l;
              }
              break;
            default:
              (h = P), (P = 0), (Pl = null), va(l, f, i, h);
          }
        }
        Lo(), (c = vl);
        break;
      } catch (g) {
        ld(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Ut = zu = null),
      (I = a),
      (b.H = e),
      (b.A = n),
      K === null && ((cl = null), (w = 0), He()),
      c
    );
  }
  function Lo() {
    for (; K !== null; ) ad(K);
  }
  function Ko(l, t) {
    var u = I;
    I |= 2;
    var a = td(),
      e = ud();
    cl !== l || w !== t
      ? ((on = null), (rn = gt() + 500), oa(l, t))
      : (ia = Ea(l, t));
    l: do
      try {
        if (P !== 0 && K !== null) {
          t = K;
          var n = Pl;
          t: switch (P) {
            case 1:
              (P = 0), (Pl = null), va(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ys(n)) {
                (P = 0), (Pl = null), ed(t);
                break;
              }
              (t = function () {
                (P !== 2 && P !== 9) || cl !== l || (P = 7), At(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              P = 7;
              break l;
            case 4:
              P = 5;
              break l;
            case 7:
              ys(n)
                ? ((P = 0), (Pl = null), ed(t))
                : ((P = 0), (Pl = null), va(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (K.tag) {
                case 26:
                  c = K.memoizedState;
                case 5:
                case 27:
                  var f = K;
                  if (!c || Xd(c)) {
                    (P = 0), (Pl = null);
                    var i = f.sibling;
                    if (i !== null) K = i;
                    else {
                      var h = f.return;
                      h !== null ? ((K = h), hn(h)) : (K = null);
                    }
                    break t;
                  }
              }
              (P = 0), (Pl = null), va(l, t, n, 5);
              break;
            case 6:
              (P = 0), (Pl = null), va(l, t, n, 6);
              break;
            case 8:
              Of(), (vl = 6);
              break l;
            default:
              throw Error(o(462));
          }
        }
        Jo();
        break;
      } catch (g) {
        ld(l, g);
      }
    while (!0);
    return (
      (Ut = zu = null),
      (b.H = a),
      (b.A = e),
      (I = u),
      K !== null ? 0 : ((cl = null), (w = 0), He(), vl)
    );
  }
  function Jo() {
    for (; K !== null && !vr(); ) ad(K);
  }
  function ad(l) {
    var t = U0(l.alternate, l, Gt);
    (l.memoizedProps = l.pendingProps), t === null ? hn(l) : (K = t);
  }
  function ed(l) {
    var t = l,
      u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = z0(u, t, t.pendingProps, t.type, void 0, w);
        break;
      case 11:
        t = z0(u, t, t.pendingProps, t.type.render, t.ref, w);
        break;
      case 5:
        Xc(t);
      default:
        R0(u, t), (t = K = ns(t, Gt)), (t = U0(u, t, Gt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? hn(l) : (K = t);
  }
  function va(l, t, u, a) {
    (Ut = zu = null), Xc(t), (ea = null), (Wa = 0);
    var e = t.return;
    try {
      if (qo(l, e, t, u, w)) {
        (vl = 1), en(l, et(u, l.current)), (K = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((K = e), n);
      (vl = 1), en(l, et(u, l.current)), (K = null);
      return;
    }
    t.flags & 32768
      ? (F || a === 1
          ? (l = !0)
          : ia || (w & 536870912) !== 0
          ? (l = !1)
          : ((lu = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = it.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        nd(t, l))
      : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nd(t, lu);
        return;
      }
      l = t.return;
      var u = Bo(t.alternate, t, Gt);
      if (u !== null) {
        K = u;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function nd(l, t) {
    do {
      var u = Go(l.alternate, l);
      if (u !== null) {
        (u.flags &= 32767), (K = u);
        return;
      }
      if (
        ((u = l.return),
        u !== null &&
          ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        K = l;
        return;
      }
      K = l = u;
    } while (l !== null);
    (vl = 6), (K = null);
  }
  function cd(l, t, u, a, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do yn();
    while (Ml !== 0);
    if ((I & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= hc),
        Or(l, u, n, c, f, i),
        l === cl && ((K = cl = null), (w = 0)),
        (da = t),
        (au = l),
        (ra = u),
        (Ef = n),
        (Tf = e),
        (k0 = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ko(be, function () {
              return rd(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = b.T), (b.T = null), (e = p.p), (p.p = 2), (c = I), (I |= 4);
        try {
          Xo(l, t, u);
        } finally {
          (I = c), (p.p = e), (b.T = a);
        }
      }
      (Ml = 1), fd(), id(), sd();
    }
  }
  function fd() {
    if (Ml === 1) {
      Ml = 0;
      var l = au,
        t = da,
        u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        (u = b.T), (b.T = null);
        var a = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          V0(t, l);
          var n = Bf,
            c = $i(l.containerInfo),
            f = n.focusedElem,
            i = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            Wi(f.ownerDocument.documentElement, f)
          ) {
            if (i !== null && sc(f)) {
              var h = i.start,
                g = i.end;
              if ((g === void 0 && (g = h), "selectionStart" in f))
                (f.selectionStart = h),
                  (f.selectionEnd = Math.min(g, f.value.length));
              else {
                var T = f.ownerDocument || document,
                  y = (T && T.defaultView) || window;
                if (y.getSelection) {
                  var m = y.getSelection(),
                    G = f.textContent.length,
                    q = Math.min(i.start, G),
                    ul = i.end === void 0 ? q : Math.min(i.end, G);
                  !m.extend && q > ul && ((c = ul), (ul = q), (q = c));
                  var r = wi(f, q),
                    d = wi(f, ul);
                  if (
                    r &&
                    d &&
                    (m.rangeCount !== 1 ||
                      m.anchorNode !== r.node ||
                      m.anchorOffset !== r.offset ||
                      m.focusNode !== d.node ||
                      m.focusOffset !== d.offset)
                  ) {
                    var v = T.createRange();
                    v.setStart(r.node, r.offset),
                      m.removeAllRanges(),
                      q > ul
                        ? (m.addRange(v), m.extend(d.node, d.offset))
                        : (v.setEnd(d.node, d.offset), m.addRange(v));
                  }
                }
              }
            }
            for (T = [], m = f; (m = m.parentNode); )
              m.nodeType === 1 &&
                T.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < T.length;
              f++
            ) {
              var E = T[f];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (pn = !!Yf), (Bf = Yf = null);
        } finally {
          (I = e), (p.p = a), (b.T = u);
        }
      }
      (l.current = t), (Ml = 2);
    }
  }
  function id() {
    if (Ml === 2) {
      Ml = 0;
      var l = au,
        t = da,
        u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        (u = b.T), (b.T = null);
        var a = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          X0(l, t.alternate, t);
        } finally {
          (I = e), (p.p = a), (b.T = u);
        }
      }
      Ml = 3;
    }
  }
  function sd() {
    if (Ml === 4 || Ml === 3) {
      (Ml = 0), hr();
      var l = au,
        t = da,
        u = ra,
        a = k0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ml = 5)
        : ((Ml = 0), (da = au = null), dd(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (uu = null),
        Zn(u),
        (t = t.stateNode),
        wl && typeof wl.onCommitFiberRoot == "function")
      )
        try {
          wl.onCommitFiberRoot(ba, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = b.T), (e = p.p), (p.p = 2), (b.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (b.T = t), (p.p = e);
        }
      }
      (ra & 3) !== 0 && yn(),
        At(l),
        (e = l.pendingLanes),
        (u & 4194090) !== 0 && (e & 42) !== 0
          ? l === Af
            ? ae++
            : ((ae = 0), (Af = l))
          : (ae = 0),
        ee(0);
    }
  }
  function dd(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ba(t)));
  }
  function yn(l) {
    return fd(), id(), sd(), rd();
  }
  function rd() {
    if (Ml !== 5) return !1;
    var l = au,
      t = Ef;
    Ef = 0;
    var u = Zn(ra),
      a = b.T,
      e = p.p;
    try {
      (p.p = 32 > u ? 32 : u), (b.T = null), (u = Tf), (Tf = null);
      var n = au,
        c = ra;
      if (((Ml = 0), (da = au = null), (ra = 0), (I & 6) !== 0))
        throw Error(o(331));
      var f = I;
      if (
        ((I |= 4),
        W0(n.current),
        K0(n, n.current, c, u),
        (I = f),
        ee(0, !1),
        wl && typeof wl.onPostCommitFiberRoot == "function")
      )
        try {
          wl.onPostCommitFiberRoot(ba, n);
        } catch {}
      return !0;
    } finally {
      (p.p = e), (b.T = a), dd(l, t);
    }
  }
  function od(l, t, u) {
    (t = et(u, t)),
      (t = Pc(l.stateNode, t, 2)),
      (l = wt(l, t, 2)),
      l !== null && (Ta(l, 2), At(l));
  }
  function el(l, t, u) {
    if (l.tag === 3) od(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          od(t, l, u);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (uu === null || !uu.has(a)))
          ) {
            (l = et(u, l)),
              (u = m0(2)),
              (a = wt(t, u, 2)),
              a !== null && (g0(u, a, t, l), Ta(a, 2), At(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mf(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Zo();
      var e = new Set();
      a.set(t, e);
    } else (e = a.get(t)), e === void 0 && ((e = new Set()), a.set(t, e));
    e.has(u) ||
      ((mf = !0), e.add(u), (l = wo.bind(null, l, t, u)), t.then(l, l));
  }
  function wo(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & u),
      (l.warmLanes &= ~u),
      cl === l &&
        (w & u) === u &&
        (vl === 4 || (vl === 3 && (w & 62914560) === w && 300 > gt() - bf)
          ? (I & 2) === 0 && oa(l, 0)
          : (gf |= u),
        sa === w && (sa = 0)),
      At(l);
  }
  function vd(l, t) {
    t === 0 && (t = si()), (l = Wu(l, t)), l !== null && (Ta(l, t), At(l));
  }
  function Wo(l) {
    var t = l.memoizedState,
      u = 0;
    t !== null && (u = t.retryLane), vd(l, u);
  }
  function $o(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), vd(l, u);
  }
  function ko(l, t) {
    return Gn(l, t);
  }
  var mn = null,
    ha = null,
    pf = !1,
    gn = !1,
    Df = !1,
    Nu = 0;
  function At(l) {
    l !== ha &&
      l.next === null &&
      (ha === null ? (mn = ha = l) : (ha = ha.next = l)),
      (gn = !0),
      pf || ((pf = !0), Io());
  }
  function ee(l, t) {
    if (!Df && gn) {
      Df = !0;
      do
        for (var u = !1, a = mn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = a.suspendedLanes,
                f = a.pingedLanes;
              (n = (1 << (31 - Wl(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((u = !0), gd(a, n));
          } else
            (n = w),
              (n = Ae(
                a,
                a === cl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ea(a, n) || ((u = !0), gd(a, n));
          a = a.next;
        }
      while (u);
      Df = !1;
    }
  }
  function Fo() {
    hd();
  }
  function hd() {
    gn = pf = !1;
    var l = 0;
    Nu !== 0 && (cv() && (l = Nu), (Nu = 0));
    for (var t = gt(), u = null, a = mn; a !== null; ) {
      var e = a.next,
        n = yd(a, t);
      n === 0
        ? ((a.next = null),
          u === null ? (mn = e) : (u.next = e),
          e === null && (ha = u))
        : ((u = a), (l !== 0 || (n & 3) !== 0) && (gn = !0)),
        (a = e);
    }
    ee(l);
  }
  function yd(l, t) {
    for (
      var u = l.suspendedLanes,
        a = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - Wl(n),
        f = 1 << c,
        i = e[c];
      i === -1
        ? ((f & u) === 0 || (f & a) !== 0) && (e[c] = Ar(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((t = cl),
      (u = w),
      (u = Ae(
        l,
        l === t ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      u === 0 ||
        (l === t && (P === 2 || P === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Xn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((u & 3) === 0 || Ea(l, u)) {
      if (((t = u & -u), t === l.callbackPriority)) return t;
      switch ((a !== null && Xn(a), Zn(u))) {
        case 2:
        case 8:
          u = ci;
          break;
        case 32:
          u = be;
          break;
        case 268435456:
          u = fi;
          break;
        default:
          u = be;
      }
      return (
        (a = md.bind(null, l)),
        (u = Gn(u, a)),
        (l.callbackPriority = t),
        (l.callbackNode = u),
        t
      );
    }
    return (
      a !== null && a !== null && Xn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function md(l, t) {
    if (Ml !== 0 && Ml !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var u = l.callbackNode;
    if (yn() && l.callbackNode !== u) return null;
    var a = w;
    return (
      (a = Ae(
        l,
        l === cl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (I0(l, a, t),
          yd(l, gt()),
          l.callbackNode != null && l.callbackNode === u
            ? md.bind(null, l)
            : null)
    );
  }
  function gd(l, t) {
    if (yn()) return null;
    I0(l, t, !0);
  }
  function Io() {
    iv(function () {
      (I & 6) !== 0 ? Gn(ni, Fo) : hd();
    });
  }
  function xf() {
    return Nu === 0 && (Nu = ii()), Nu;
  }
  function Sd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : pe("" + l);
  }
  function bd(l, t) {
    var u = t.ownerDocument.createElement("input");
    return (
      (u.name = t.name),
      (u.value = t.value),
      l.id && u.setAttribute("form", l.id),
      t.parentNode.insertBefore(u, t),
      (l = new FormData(l)),
      u.parentNode.removeChild(u),
      l
    );
  }
  function Po(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Sd((e[Gl] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[Gl] || null)
          ? Sd(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new Ne("action", "action", null, a, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nu !== 0) {
                  var i = c ? bd(e, c) : new FormData(e);
                  Wc(
                    u,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? bd(e, c) : new FormData(e)),
                  Wc(
                    u,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Uf = 0; Uf < vc.length; Uf++) {
    var Nf = vc[Uf],
      lv = Nf.toLowerCase(),
      tv = Nf[0].toUpperCase() + Nf.slice(1);
    vt(lv, "on" + tv);
  }
  vt(Ii, "onAnimationEnd"),
    vt(Pi, "onAnimationIteration"),
    vt(ls, "onAnimationStart"),
    vt("dblclick", "onDoubleClick"),
    vt("focusin", "onFocus"),
    vt("focusout", "onBlur"),
    vt(So, "onTransitionRun"),
    vt(bo, "onTransitionStart"),
    vt(Eo, "onTransitionCancel"),
    vt(ts, "onTransitionEnd"),
    Gu("onMouseEnter", ["mouseout", "mouseover"]),
    Gu("onMouseLeave", ["mouseout", "mouseover"]),
    Gu("onPointerEnter", ["pointerout", "pointerover"]),
    Gu("onPointerLeave", ["pointerout", "pointerover"]),
    yu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    yu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    yu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    yu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    yu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    yu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ne =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    uv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ne)
    );
  function Ed(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u],
        e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c],
              i = f.instance,
              h = f.currentTarget;
            if (((f = f.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = f), (e.currentTarget = h);
            try {
              n(e);
            } catch (g) {
              an(g);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((f = a[c]),
              (i = f.instance),
              (h = f.currentTarget),
              (f = f.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = f), (e.currentTarget = h);
            try {
              n(e);
            } catch (g) {
              an(g);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function J(l, t) {
    var u = t[Vn];
    u === void 0 && (u = t[Vn] = new Set());
    var a = l + "__bubble";
    u.has(a) || (Td(t, l, 2, !1), u.add(a));
  }
  function Rf(l, t, u) {
    var a = 0;
    t && (a |= 4), Td(u, l, a, t);
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function jf(l) {
    if (!l[Sn]) {
      (l[Sn] = !0),
        hi.forEach(function (u) {
          u !== "selectionchange" && (uv.has(u) || Rf(u, !1, l), Rf(u, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || ((t[Sn] = !0), Rf("selectionchange", !1, t));
    }
  }
  function Td(l, t, u, a) {
    switch (Kd(t)) {
      case 2:
        var e = xv;
        break;
      case 8:
        e = Uv;
        break;
      default:
        e = wf;
    }
    (u = e.bind(null, t, u, l)),
      (e = void 0),
      !lc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      a
        ? e !== void 0
          ? l.addEventListener(t, u, { capture: !0, passive: e })
          : l.addEventListener(t, u, !0)
        : e !== void 0
        ? l.addEventListener(t, u, { passive: e })
        : l.addEventListener(t, u, !1);
  }
  function Hf(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = qu(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              a = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Di(function () {
      var h = n,
        g = In(u),
        T = [];
      l: {
        var y = us.get(l);
        if (y !== void 0) {
          var m = Ne,
            G = l;
          switch (l) {
            case "keypress":
              if (xe(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = $r;
              break;
            case "focusin":
              (G = "focus"), (m = ec);
              break;
            case "focusout":
              (G = "blur"), (m = ec);
              break;
            case "beforeblur":
            case "afterblur":
              m = ec;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ni;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Br;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Ir;
              break;
            case Ii:
            case Pi:
            case ls:
              m = Cr;
              break;
            case ts:
              m = lo;
              break;
            case "scroll":
            case "scrollend":
              m = qr;
              break;
            case "wheel":
              m = uo;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Zr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = ji;
              break;
            case "toggle":
            case "beforetoggle":
              m = eo;
          }
          var q = (t & 4) !== 0,
            ul = !q && (l === "scroll" || l === "scrollend"),
            r = q ? (y !== null ? y + "Capture" : null) : y;
          q = [];
          for (var d = h, v; d !== null; ) {
            var E = d;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                r === null ||
                ((E = za(d, r)), E != null && q.push(ce(d, E, v))),
              ul)
            )
              break;
            d = d.return;
          }
          0 < q.length &&
            ((y = new m(y, G, null, u, g)), T.push({ event: y, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (m = l === "mouseout" || l === "pointerout"),
            y &&
              u !== Fn &&
              (G = u.relatedTarget || u.fromElement) &&
              (qu(G) || G[Hu]))
          )
            break l;
          if (
            (m || y) &&
            ((y =
              g.window === g
                ? g
                : (y = g.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
            m
              ? ((G = u.relatedTarget || u.toElement),
                (m = h),
                (G = G ? qu(G) : null),
                G !== null &&
                  ((ul = L(G)),
                  (q = G.tag),
                  G !== ul || (q !== 5 && q !== 27 && q !== 6)) &&
                  (G = null))
              : ((m = null), (G = h)),
            m !== G)
          ) {
            if (
              ((q = Ni),
              (E = "onMouseLeave"),
              (r = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = ji),
                (E = "onPointerLeave"),
                (r = "onPointerEnter"),
                (d = "pointer")),
              (ul = m == null ? y : Oa(m)),
              (v = G == null ? y : Oa(G)),
              (y = new q(E, d + "leave", m, u, g)),
              (y.target = ul),
              (y.relatedTarget = v),
              (E = null),
              qu(g) === h &&
                ((q = new q(r, d + "enter", G, u, g)),
                (q.target = v),
                (q.relatedTarget = ul),
                (E = q)),
              (ul = E),
              m && G)
            )
              t: {
                for (q = m, r = G, d = 0, v = q; v; v = ya(v)) d++;
                for (v = 0, E = r; E; E = ya(E)) v++;
                for (; 0 < d - v; ) (q = ya(q)), d--;
                for (; 0 < v - d; ) (r = ya(r)), v--;
                for (; d--; ) {
                  if (q === r || (r !== null && q === r.alternate)) break t;
                  (q = ya(q)), (r = ya(r));
                }
                q = null;
              }
            else q = null;
            m !== null && Ad(T, y, m, q, !1),
              G !== null && ul !== null && Ad(T, ul, G, q, !0);
          }
        }
        l: {
          if (
            ((y = h ? Oa(h) : window),
            (m = y.nodeName && y.nodeName.toLowerCase()),
            m === "select" || (m === "input" && y.type === "file"))
          )
            var x = Qi;
          else if (Xi(y))
            if (Zi) x = yo;
            else {
              x = vo;
              var V = oo;
            }
          else
            (m = y.nodeName),
              !m ||
              m.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? h && kn(h.elementType) && (x = Qi)
                : (x = ho);
          if (x && (x = x(l, h))) {
            Ci(T, x, u, g);
            break l;
          }
          V && V(l, y, h),
            l === "focusout" &&
              h &&
              y.type === "number" &&
              h.memoizedProps.value != null &&
              $n(y, "number", y.value);
        }
        switch (((V = h ? Oa(h) : window), l)) {
          case "focusin":
            (Xi(V) || V.contentEditable === "true") &&
              ((Ku = V), (dc = h), (Ra = null));
            break;
          case "focusout":
            Ra = dc = Ku = null;
            break;
          case "mousedown":
            rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (rc = !1), ki(T, u, g);
            break;
          case "selectionchange":
            if (go) break;
          case "keydown":
          case "keyup":
            ki(T, u, g);
        }
        var R;
        if (cc)
          l: {
            switch (l) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break l;
              case "compositionend":
                Y = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break l;
            }
            Y = void 0;
          }
        else
          Lu
            ? Bi(l, u) && (Y = "onCompositionEnd")
            : l === "keydown" &&
              u.keyCode === 229 &&
              (Y = "onCompositionStart");
        Y &&
          (Hi &&
            u.locale !== "ko" &&
            (Lu || Y !== "onCompositionStart"
              ? Y === "onCompositionEnd" && Lu && (R = xi())
              : ((Vt = g),
                (tc = "value" in Vt ? Vt.value : Vt.textContent),
                (Lu = !0))),
          (V = bn(h, Y)),
          0 < V.length &&
            ((Y = new Ri(Y, l, null, u, g)),
            T.push({ event: Y, listeners: V }),
            R ? (Y.data = R) : ((R = Gi(u)), R !== null && (Y.data = R)))),
          (R = co ? fo(l, u) : io(l, u)) &&
            ((Y = bn(h, "onBeforeInput")),
            0 < Y.length &&
              ((V = new Ri("onBeforeInput", "beforeinput", null, u, g)),
              T.push({ event: V, listeners: Y }),
              (V.data = R))),
          Po(T, l, h, u, g);
      }
      Ed(T, t);
    });
  }
  function ce(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function bn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = za(l, u)),
          e != null && a.unshift(ce(l, e, n)),
          (e = za(l, t)),
          e != null && a.push(ce(l, e, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function ya(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ad(l, t, u, a, e) {
    for (var n = t._reactName, c = []; u !== null && u !== a; ) {
      var f = u,
        i = f.alternate,
        h = f.stateNode;
      if (((f = f.tag), i !== null && i === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        h === null ||
        ((i = h),
        e
          ? ((h = za(u, n)), h != null && c.unshift(ce(u, h, i)))
          : e || ((h = za(u, n)), h != null && c.push(ce(u, h, i)))),
        (u = u.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var av = /\r\n?/g,
    ev = /\u0000|\uFFFD/g;
  function Od(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        av,
        `
`
      )
      .replace(ev, "");
  }
  function zd(l, t) {
    return (t = Od(t)), Od(l) === t;
  }
  function En() {}
  function tl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Qu(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Qu(l, "" + a);
        break;
      case "className":
        ze(l, "class", a);
        break;
      case "tabIndex":
        ze(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, u, a);
        break;
      case "style":
        Mi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(u);
          break;
        }
        (a = pe("" + a)), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (u === "formAction"
              ? (t !== "input" && tl(l, t, "name", e.name, e, null),
                tl(l, t, "formEncType", e.formEncType, e, null),
                tl(l, t, "formMethod", e.formMethod, e, null),
                tl(l, t, "formTarget", e.formTarget, e, null))
              : (tl(l, t, "encType", e.encType, e, null),
                tl(l, t, "method", e.method, e, null),
                tl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        (a = pe("" + a)), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = En);
        break;
      case "onScroll":
        a != null && J("scroll", l);
        break;
      case "onScrollEnd":
        a != null && J("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (u = pe("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "" + a)
          : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "")
          : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(u, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(u)
          : l.setAttribute(u, a);
        break;
      case "popover":
        J("beforetoggle", l), J("toggle", l), Oe(l, "popover", a);
        break;
      case "xlinkActuate":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        _t(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        _t(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        _t(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Oe(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) ||
          (u[0] !== "o" && u[0] !== "O") ||
          (u[1] !== "n" && u[1] !== "N")) &&
          ((u = jr.get(u) || u), Oe(l, u, a));
    }
  }
  function qf(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Mi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Qu(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Qu(l, "" + a);
        break;
      case "onScroll":
        a != null && J("scroll", l);
        break;
      case "onScrollEnd":
        a != null && J("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = En);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!yi.hasOwnProperty(u))
          l: {
            if (
              u[0] === "o" &&
              u[1] === "n" &&
              ((e = u.endsWith("Capture")),
              (t = u.slice(2, e ? u.length - 7 : void 0)),
              (n = l[Gl] || null),
              (n = n != null ? n[u] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (u in l
                  ? (l[u] = null)
                  : l.hasAttribute(u) && l.removeAttribute(u)),
                l.addEventListener(t, a, e);
              break l;
            }
            u in l
              ? (l[u] = a)
              : a === !0
              ? l.setAttribute(u, "")
              : Oe(l, u, a);
          }
    }
  }
  function pl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        J("error", l), J("load", l);
        var a = !1,
          e = !1,
          n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var c = u[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  tl(l, t, n, c, u, null);
              }
          }
        e && tl(l, t, "srcSet", u.srcSet, u, null),
          a && tl(l, t, "src", u.src, u, null);
        return;
      case "input":
        J("invalid", l);
        var f = (n = c = e = null),
          i = null,
          h = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  h = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  f = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(o(137, t));
                  break;
                default:
                  tl(l, t, a, g, u, null);
              }
          }
        Ai(l, n, f, i, h, c, e, !1), _e(l);
        return;
      case "select":
        J("invalid", l), (a = c = n = null);
        for (e in u)
          if (u.hasOwnProperty(e) && ((f = u[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                tl(l, t, e, f, u, null);
            }
        (t = n),
          (u = c),
          (l.multiple = !!a),
          t != null ? Cu(l, !!a, t, !1) : u != null && Cu(l, !!a, u, !0);
        return;
      case "textarea":
        J("invalid", l), (n = e = a = null);
        for (c in u)
          if (u.hasOwnProperty(c) && ((f = u[c]), f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                tl(l, t, c, f, u, null);
            }
        zi(l, a, e, n), _e(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && ((a = u[i]), a != null))
            switch (i) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                tl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++) J(ne[a], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in u)
          if (u.hasOwnProperty(h) && ((a = u[h]), a != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                tl(l, t, h, a, u, null);
            }
        return;
      default:
        if (kn(t)) {
          for (g in u)
            u.hasOwnProperty(g) &&
              ((a = u[g]), a !== void 0 && qf(l, t, g, a, u, void 0));
          return;
        }
    }
    for (f in u)
      u.hasOwnProperty(f) && ((a = u[f]), a != null && tl(l, t, f, a, u, null));
  }
  function nv(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          f = null,
          i = null,
          h = null,
          g = null;
        for (m in u) {
          var T = u[m];
          if (u.hasOwnProperty(m) && T != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(m) || tl(l, t, m, null, a, T);
            }
        }
        for (var y in a) {
          var m = a[y];
          if (((T = u[y]), a.hasOwnProperty(y) && (m != null || T != null)))
            switch (y) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                h = m;
                break;
              case "defaultChecked":
                g = m;
                break;
              case "value":
                c = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(137, t));
                break;
              default:
                m !== T && tl(l, t, y, m, a, T);
            }
        }
        Wn(l, c, f, i, h, g, n, e);
        return;
      case "select":
        m = c = f = y = null;
        for (n in u)
          if (((i = u[n]), u.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                a.hasOwnProperty(n) || tl(l, t, n, null, a, i);
            }
        for (e in a)
          if (
            ((n = a[e]),
            (i = u[e]),
            a.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && tl(l, t, e, n, a, i);
            }
        (t = f),
          (u = c),
          (a = m),
          y != null
            ? Cu(l, !!u, y, !1)
            : !!a != !!u &&
              (t != null ? Cu(l, !!u, t, !0) : Cu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = y = null;
        for (f in u)
          if (
            ((e = u[f]),
            u.hasOwnProperty(f) && e != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, f, null, a, e);
            }
        for (c in a)
          if (
            ((e = a[c]),
            (n = u[c]),
            a.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                y = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && tl(l, t, c, e, a, n);
            }
        Oi(l, y, m);
        return;
      case "option":
        for (var G in u)
          if (
            ((y = u[G]),
            u.hasOwnProperty(G) && y != null && !a.hasOwnProperty(G))
          )
            switch (G) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(l, t, G, null, a, y);
            }
        for (i in a)
          if (
            ((y = a[i]),
            (m = u[i]),
            a.hasOwnProperty(i) && y !== m && (y != null || m != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                tl(l, t, i, y, a, m);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in u)
          (y = u[q]),
            u.hasOwnProperty(q) &&
              y != null &&
              !a.hasOwnProperty(q) &&
              tl(l, t, q, null, a, y);
        for (h in a)
          if (
            ((y = a[h]),
            (m = u[h]),
            a.hasOwnProperty(h) && y !== m && (y != null || m != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(137, t));
                break;
              default:
                tl(l, t, h, y, a, m);
            }
        return;
      default:
        if (kn(t)) {
          for (var ul in u)
            (y = u[ul]),
              u.hasOwnProperty(ul) &&
                y !== void 0 &&
                !a.hasOwnProperty(ul) &&
                qf(l, t, ul, void 0, a, y);
          for (g in a)
            (y = a[g]),
              (m = u[g]),
              !a.hasOwnProperty(g) ||
                y === m ||
                (y === void 0 && m === void 0) ||
                qf(l, t, g, y, a, m);
          return;
        }
    }
    for (var r in u)
      (y = u[r]),
        u.hasOwnProperty(r) &&
          y != null &&
          !a.hasOwnProperty(r) &&
          tl(l, t, r, null, a, y);
    for (T in a)
      (y = a[T]),
        (m = u[T]),
        !a.hasOwnProperty(T) ||
          y === m ||
          (y == null && m == null) ||
          tl(l, t, T, y, a, m);
  }
  var Yf = null,
    Bf = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function _d(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Md(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Gf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Xf = null;
  function cv() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Xf
        ? !1
        : ((Xf = l), !0)
      : ((Xf = null), !1);
  }
  var pd = typeof setTimeout == "function" ? setTimeout : void 0,
    fv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Dd = typeof Promise == "function" ? Promise : void 0,
    iv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Dd < "u"
        ? function (l) {
            return Dd.resolve(null).then(l).catch(sv);
          }
        : pd;
  function sv(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function nu(l) {
    return l === "head";
  }
  function xd(l, t) {
    var u = t,
      a = 0,
      e = 0;
    do {
      var n = u.nextSibling;
      if ((l.removeChild(u), n && n.nodeType === 8))
        if (((u = n.data), u === "/$")) {
          if (0 < a && 8 > a) {
            u = a;
            var c = l.ownerDocument;
            if ((u & 1 && fe(c.documentElement), u & 2 && fe(c.body), u & 4))
              for (u = c.head, fe(u), c = u.firstChild; c; ) {
                var f = c.nextSibling,
                  i = c.nodeName;
                c[Aa] ||
                  i === "SCRIPT" ||
                  i === "STYLE" ||
                  (i === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  u.removeChild(c),
                  (c = f);
              }
          }
          if (e === 0) {
            l.removeChild(n), ye(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!"
            ? e++
            : (a = u.charCodeAt(0) - 48);
      else a = 0;
      u = n;
    } while (u);
    ye(t);
  }
  function Cf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (((t = t.nextSibling), u.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cf(u), Ln(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function dv(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Aa])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = yt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function rv(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !u) ||
        ((l = yt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Qf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function ov(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete") t();
    else {
      var a = function () {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function yt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Zf = null;
  function Ud(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Nd(l, t, u) {
    switch (((t = Tn(u)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(o(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(o(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function fe(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Ln(l);
  }
  var dt = new Map(),
    Rd = new Set();
  function An(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Xt = p.d;
  p.d = { f: vv, r: hv, D: yv, C: mv, L: gv, m: Sv, X: Ev, S: bv, M: Tv };
  function vv() {
    var l = Xt.f(),
      t = vn();
    return l || t;
  }
  function hv(l) {
    var t = Yu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Is(t) : Xt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function jd(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = at(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof u == "string" && (e += '[crossorigin="' + u + '"]'),
        Rd.has(e) ||
          (Rd.add(e),
          (l = { rel: l, crossOrigin: u, href: t }),
          a.querySelector(e) === null &&
            ((t = a.createElement("link")),
            pl(t, "link", l),
            Tl(t),
            a.head.appendChild(t)));
    }
  }
  function yv(l) {
    Xt.D(l), jd("dns-prefetch", l, null);
  }
  function mv(l, t) {
    Xt.C(l, t), jd("preconnect", l, t);
  }
  function gv(l, t, u) {
    Xt.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + at(t) + '"]';
      t === "image" && u && u.imageSrcSet
        ? ((e += '[imagesrcset="' + at(u.imageSrcSet) + '"]'),
          typeof u.imageSizes == "string" &&
            (e += '[imagesizes="' + at(u.imageSizes) + '"]'))
        : (e += '[href="' + at(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      dt.has(n) ||
        ((l = j(
          {
            rel: "preload",
            href: t === "image" && u && u.imageSrcSet ? void 0 : l,
            as: t,
          },
          u
        )),
        dt.set(n, l),
        a.querySelector(e) !== null ||
          (t === "style" && a.querySelector(ie(n))) ||
          (t === "script" && a.querySelector(se(n))) ||
          ((t = a.createElement("link")),
          pl(t, "link", l),
          Tl(t),
          a.head.appendChild(t)));
    }
  }
  function Sv(l, t) {
    Xt.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + at(a) + '"][href="' + at(l) + '"]',
        n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (
        !dt.has(n) &&
        ((l = j({ rel: "modulepreload", href: l }, t)),
        dt.set(n, l),
        u.querySelector(e) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(se(n))) return;
        }
        (a = u.createElement("link")),
          pl(a, "link", l),
          Tl(a),
          u.head.appendChild(a);
      }
    }
  }
  function bv(l, t, u) {
    Xt.S(l, t, u);
    var a = ma;
    if (a && l) {
      var e = Bu(a).hoistableStyles,
        n = ga(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = a.querySelector(ie(n)))) f.loading = 5;
        else {
          (l = j({ rel: "stylesheet", href: l, "data-precedence": t }, u)),
            (u = dt.get(n)) && Vf(l, u);
          var i = (c = a.createElement("link"));
          Tl(i),
            pl(i, "link", l),
            (i._p = new Promise(function (h, g) {
              (i.onload = h), (i.onerror = g);
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            On(c, t, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          e.set(n, c);
      }
    }
  }
  function Ev(l, t) {
    Xt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Bu(u).hoistableScripts,
        e = Sa(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(se(e))),
        n ||
          ((l = j({ src: l, async: !0 }, t)),
          (t = dt.get(e)) && Lf(l, t),
          (n = u.createElement("script")),
          Tl(n),
          pl(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function Tv(l, t) {
    Xt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = Bu(u).hoistableScripts,
        e = Sa(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(se(e))),
        n ||
          ((l = j({ src: l, async: !0, type: "module" }, t)),
          (t = dt.get(e)) && Lf(l, t),
          (n = u.createElement("script")),
          Tl(n),
          pl(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function Hd(l, t, u, a) {
    var e = (e = C.current) ? An(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string"
          ? ((t = ga(u.href)),
            (u = Bu(e).hoistableStyles),
            (a = u.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              u.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          u.rel === "stylesheet" &&
          typeof u.href == "string" &&
          typeof u.precedence == "string"
        ) {
          l = ga(u.href);
          var n = Bu(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(ie(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              dt.has(l) ||
                ((u = {
                  rel: "preload",
                  as: "style",
                  href: u.href,
                  crossOrigin: u.crossOrigin,
                  integrity: u.integrity,
                  media: u.media,
                  hrefLang: u.hrefLang,
                  referrerPolicy: u.referrerPolicy,
                }),
                dt.set(l, u),
                n || Av(e, l, u, c.state))),
            t && a === null)
          )
            throw Error(o(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = u.async),
          (u = u.src),
          typeof u == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Sa(u)),
              (u = Bu(e).hoistableScripts),
              (a = u.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                u.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, l));
    }
  }
  function ga(l) {
    return 'href="' + at(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qd(l) {
    return j({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Av(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        pl(t, "link", u),
        Tl(t),
        l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + at(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Yd(l, t, u) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + at(u.href) + '"]');
          if (a) return (t.instance = a), Tl(a), a;
          var e = j({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Tl(a),
            pl(a, "style", e),
            On(a, u.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(ie(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Tl(n), n;
          (a = qd(u)),
            (e = dt.get(e)) && Vf(a, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Tl(n);
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              (c.onload = f), (c.onerror = i);
            })),
            pl(n, "link", a),
            (t.state.loading |= 4),
            On(n, u.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Sa(u.src)),
            (e = l.querySelector(se(n)))
              ? ((t.instance = e), Tl(e), e)
              : ((a = u),
                (e = dt.get(n)) && ((a = j({}, u)), Lf(a, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Tl(e),
                pl(e, "link", a),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), On(a, u.precedence, l));
    return t.instance;
  }
  function On(l, t, u) {
    for (
      var a = u.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = a.length ? a[a.length - 1] : null,
        n = e,
        c = 0;
      c < a.length;
      c++
    ) {
      var f = a[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = u.nodeType === 9 ? u.head : u), t.insertBefore(l, t.firstChild));
  }
  function Vf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Lf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function Bd(l, t, u) {
    if (zn === null) {
      var a = new Map(),
        e = (zn = new Map());
      e.set(u, a);
    } else (e = zn), (a = e.get(u)), a || ((a = new Map()), e.set(u, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), u = u.getElementsByTagName(l), e = 0;
      e < u.length;
      e++
    ) {
      var n = u[e];
      if (
        !(
          n[Aa] ||
          n[Nl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = a.get(c);
        f ? f.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function Gd(l, t, u) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        u,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Ov(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function zv() {}
  function _v(l, t, u) {
    if (de === null) throw Error(o(475));
    var a = de;
    if (
      t.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = ga(u.href),
          n = l.querySelector(ie(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (a.count++, (a = _n.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = n),
            Tl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (u = qd(u)),
          (e = dt.get(e)) && Vf(u, e),
          (n = n.createElement("link")),
          Tl(n);
        var c = n;
        (c._p = new Promise(function (f, i) {
          (c.onload = f), (c.onerror = i);
        })),
          pl(n, "link", u),
          (t.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = _n.bind(a)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function Mv() {
    if (de === null) throw Error(o(475));
    var l = de;
    return (
      l.stylesheets && l.count === 0 && Kf(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Kf(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function _n() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Kf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Mn = null;
  function Kf(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Mn = new Map()),
        t.forEach(pv, l),
        (Mn = null),
        _n.call(l));
  }
  function pv(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Mn.get(l);
      if (u) var a = u.get(null);
      else {
        (u = new Map()), Mn.set(l, u);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (u.set(c.dataset.precedence, c), (a = c));
        }
        a && u.set(null, a);
      }
      (e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = u.get(c) || a),
        n === a && u.set(null, e),
        u.set(c, e),
        this.count++,
        (a = _n.bind(this)),
        e.addEventListener("load", a),
        e.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var re = {
    $$typeof: Dl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function Dv(l, t, u, a, e, n, c, f) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Cn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Cn(0)),
      (this.hiddenUpdates = Cn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function Cd(l, t, u, a, e, n, c, f, i, h, g, T) {
    return (
      (l = new Dv(l, t, u, c, f, i, h, T)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = kl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = _c()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: u, cache: t }),
      xc(n),
      l
    );
  }
  function Qd(l) {
    return l ? ((l = $u), l) : $u;
  }
  function Zd(l, t, u, a, e, n) {
    (e = Qd(e)),
      a.context === null ? (a.context = e) : (a.pendingContext = e),
      (a = Jt(t)),
      (a.payload = { element: u }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (u = wt(l, a, t)),
      u !== null && (tt(u, l, t), Qa(u, l, t));
  }
  function Vd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Jf(l, t) {
    Vd(l, t), (l = l.alternate) && Vd(l, t);
  }
  function Ld(l) {
    if (l.tag === 13) {
      var t = Wu(l, 67108864);
      t !== null && tt(t, l, 67108864), Jf(l, 67108864);
    }
  }
  var pn = !0;
  function xv(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      (p.p = 2), wf(l, t, u, a);
    } finally {
      (p.p = n), (b.T = e);
    }
  }
  function Uv(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      (p.p = 8), wf(l, t, u, a);
    } finally {
      (p.p = n), (b.T = e);
    }
  }
  function wf(l, t, u, a) {
    if (pn) {
      var e = Wf(a);
      if (e === null) Hf(l, t, a, Dn, u), Jd(l, a);
      else if (Rv(e, l, t, u, a)) a.stopPropagation();
      else if ((Jd(l, a), t & 4 && -1 < Nv.indexOf(l))) {
        for (; e !== null; ) {
          var n = Yu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = hu(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - Wl(c));
                      (f.entanglements[1] |= i), (c &= ~i);
                    }
                    At(n), (I & 6) === 0 && ((rn = gt() + 500), ee(0));
                  }
                }
                break;
              case 13:
                (f = Wu(n, 2)), f !== null && tt(f, n, 2), vn(), Jf(n, 2);
            }
          if (((n = Wf(a)), n === null && Hf(l, t, a, Dn, u), n === e)) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else Hf(l, t, a, null, u);
    }
  }
  function Wf(l) {
    return (l = In(l)), $f(l);
  }
  var Dn = null;
  function $f(l) {
    if (((Dn = null), (l = qu(l)), l !== null)) {
      var t = L(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (((l = dl(t)), l !== null)) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Dn = l), null;
  }
  function Kd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yr()) {
          case ni:
            return 2;
          case ci:
            return 8;
          case be:
          case mr:
            return 32;
          case fi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kf = !1,
    cu = null,
    fu = null,
    iu = null,
    oe = new Map(),
    ve = new Map(),
    su = [],
    Nv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Jd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        cu = null;
        break;
      case "dragenter":
      case "dragleave":
        fu = null;
        break;
      case "mouseover":
      case "mouseout":
        iu = null;
        break;
      case "pointerover":
      case "pointerout":
        oe.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function he(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: u,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Yu(t)), t !== null && Ld(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Rv(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return (cu = he(cu, l, t, u, a, e)), !0;
      case "dragenter":
        return (fu = he(fu, l, t, u, a, e)), !0;
      case "mouseover":
        return (iu = he(iu, l, t, u, a, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return oe.set(n, he(oe.get(n) || null, l, t, u, a, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ve.set(n, he(ve.get(n) || null, l, t, u, a, e)), !0
        );
    }
    return !1;
  }
  function wd(l) {
    var t = qu(l.target);
    if (t !== null) {
      var u = L(t);
      if (u !== null) {
        if (((t = u.tag), t === 13)) {
          if (((t = dl(u)), t !== null)) {
            (l.blockedOn = t),
              zr(l.priority, function () {
                if (u.tag === 13) {
                  var a = lt();
                  a = Qn(a);
                  var e = Wu(u, a);
                  e !== null && tt(e, u, a), Jf(u, a);
                }
              });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function xn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Wf(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        (Fn = a), u.target.dispatchEvent(a), (Fn = null);
      } else return (t = Yu(u)), t !== null && Ld(t), (l.blockedOn = u), !1;
      t.shift();
    }
    return !0;
  }
  function Wd(l, t, u) {
    xn(l) && u.delete(t);
  }
  function jv() {
    (kf = !1),
      cu !== null && xn(cu) && (cu = null),
      fu !== null && xn(fu) && (fu = null),
      iu !== null && xn(iu) && (iu = null),
      oe.forEach(Wd),
      ve.forEach(Wd);
  }
  function Un(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      kf ||
        ((kf = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, jv)));
  }
  var Nn = null;
  function $d(l) {
    Nn !== l &&
      ((Nn = l),
      S.unstable_scheduleCallback(S.unstable_NormalPriority, function () {
        Nn === l && (Nn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t],
            a = l[t + 1],
            e = l[t + 2];
          if (typeof a != "function") {
            if ($f(a || u) === null) continue;
            break;
          }
          var n = Yu(u);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Wc(n, { pending: !0, data: e, method: u.method, action: a }, a, e));
        }
      }));
  }
  function ye(l) {
    function t(i) {
      return Un(i, l);
    }
    cu !== null && Un(cu, l),
      fu !== null && Un(fu, l),
      iu !== null && Un(iu, l),
      oe.forEach(t),
      ve.forEach(t);
    for (var u = 0; u < su.length; u++) {
      var a = su[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < su.length && ((u = su[0]), u.blockedOn === null); )
      wd(u), u.blockedOn === null && su.shift();
    if (((u = (l.ownerDocument || l).$$reactFormReplay), u != null))
      for (a = 0; a < u.length; a += 3) {
        var e = u[a],
          n = u[a + 1],
          c = e[Gl] || null;
        if (typeof n == "function") c || $d(u);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Gl] || null))) f = c.formAction;
            else if ($f(e) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (u[a + 1] = f) : (u.splice(a, 3), (a -= 3)),
            $d(u);
        }
      }
  }
  function Ff(l) {
    this._internalRoot = l;
  }
  (Rn.prototype.render = Ff.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var u = t.current,
        a = lt();
      Zd(u, a, l, t, null, null);
    }),
    (Rn.prototype.unmount = Ff.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Zd(l.current, 2, null, l, null, null), vn(), (t[Hu] = null);
        }
      });
  function Rn(l) {
    this._internalRoot = l;
  }
  Rn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = oi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < su.length && t !== 0 && t < su[u].priority; u++);
      su.splice(u, 0, l), u === 0 && wd(l);
    }
  };
  var kd = U.version;
  if (kd !== "19.1.0") throw Error(o(527, kd, "19.1.0"));
  p.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(o(188))
        : ((l = Object.keys(l).join(",")), Error(o(268, l)));
    return (
      (l = N(t)),
      (l = l !== null ? O(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Hv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jn.isDisabled && jn.supportsFiber)
      try {
        (ba = jn.inject(Hv)), (wl = jn);
      } catch {}
  }
  return (
    (ge.createRoot = function (l, t) {
      if (!X(l)) throw Error(o(299));
      var u = !1,
        a = "",
        e = o0,
        n = v0,
        c = h0,
        f = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (u = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks)),
        (t = Cd(l, 1, !1, null, null, u, a, e, n, c, f, null)),
        (l[Hu] = t.current),
        jf(l),
        new Ff(t)
      );
    }),
    (ge.hydrateRoot = function (l, t, u) {
      if (!X(l)) throw Error(o(299));
      var a = !1,
        e = "",
        n = o0,
        c = v0,
        f = h0,
        i = null,
        h = null;
      return (
        u != null &&
          (u.unstable_strictMode === !0 && (a = !0),
          u.identifierPrefix !== void 0 && (e = u.identifierPrefix),
          u.onUncaughtError !== void 0 && (n = u.onUncaughtError),
          u.onCaughtError !== void 0 && (c = u.onCaughtError),
          u.onRecoverableError !== void 0 && (f = u.onRecoverableError),
          u.unstable_transitionCallbacks !== void 0 &&
            (i = u.unstable_transitionCallbacks),
          u.formState !== void 0 && (h = u.formState)),
        (t = Cd(l, 1, !0, t, u ?? null, a, e, n, c, f, i, h)),
        (t.context = Qd(null)),
        (u = t.current),
        (a = lt()),
        (a = Qn(a)),
        (e = Jt(a)),
        (e.callback = null),
        wt(u, e, a),
        (u = a),
        (t.current.lanes = u),
        Ta(t, u),
        At(t),
        (l[Hu] = t.current),
        jf(l),
        new Rn(t)
      );
    }),
    (ge.version = "19.1.0"),
    ge
  );
}
var cr;
function Kv() {
  if (cr) return li.exports;
  cr = 1;
  function S() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (U) {
        console.error(U);
      }
  }
  return S(), (li.exports = Lv()), li.exports;
}
var Jv = Kv();
const wv = () =>
    z.jsxs("section", {
      className: "bg-white p-8 grid-cols-2",
      children: [
        z.jsxs("div", {
          children: [
            z.jsx("h2", {
              className: "text-indigo-600 font-bold text-3xl mb-4 text-center",
              children: "QUI SOMMES-NOUS?",
            }),
            z.jsx("p", {
              className: "text-black",
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur neque aliquam earum voluptates dolor nobis deleniti praesentium. Repellat voluptates distinctio doloremque tempore nostrum cum, doloribus at mollitia laborum cupiditate adipisci ea nam perferendis alias nihil perspiciatis iure voluptate consectetur praesentium excepturi molestias nemo? Temporibus, laboriosam saepe. Quis voluptate ducimus impedit at magni omnis placeat quae aliquid nemo fugit, debitis ipsa sit laborum sed repellat minus reprehenderit praesentium reiciendis aut amet odio libero dolorem quod. A praesentium voluptates aliquid officiis pariatur aspernatur quibusdam nulla ut, ipsa neque, numquam, quas voluptatibus accusantium cupiditate! Sint quae, necessitatibus perspiciatis ut eius modi porro!",
            }),
          ],
        }),
        z.jsx("img", {
          src: "./assets/Image/singe.jpg",
          className: "w-2rem rounded-lg shadow",
        }),
      ],
    }),
  Wv = () => {
    const S = [
        { race: "akita-japonais", image: "./assets/Image/akita-japonais.jpg" },
        {
          race: "berger_belge_groenendael",
          image: "./assets/Image/berger_belge_groenendael.jpg",
        },
        { race: "basenji_chien", image: "./assets/Image/basenji_chien.jpg" },
        { race: "Bichon-frise", image: "./assets/Image/Bichon-frise.jpg" },
        { race: "bobtail", image: "./assets/Image/bobtail.jpeg" },
      ],
      U = [
        { race: "Chat_Persan", image: "./assets/Image/Chat_Persan.jpg" },
        { race: "Chat_Cymric", image: "./assets/Image/Chat_Cymric.jpg" },
        { race: "Chat_Devon_Rex", image: "./assets/Image/Chat_Devon_Rex.jpg" },
        {
          race: "Chat_Mau_Egyptien",
          image: "./assets/Image/Chat_Mau_Egyptien.jpg",
        },
        { race: "Chat_Norvégien", image: "./assets/Image/Chat_Norvégien.jpg" },
      ];
    return z.jsxs("section", {
      className: "bg-indigo-600 p-8",
      children: [
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-3xl text-white font-bold mb4 text-center",
              children: "NOS SERVICES",
            }),
            z.jsx("p", {
              className: "text-white text-center",
              children:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, aut. Perspiciatis minus natus dolore autem id sed? Id eligendi soluta rem voluptatibus accusantium neque vel, illum reiciendis, quod ex earum!",
            }),
          ],
        }),
        z.jsxs("div", {
          className: "p-8",
          children: [
            z.jsx("h4", {
              className:
                "text-white text-2xl uppercase text-center font-semibold mb-4",
              children: "Les chiens",
            }),
            z.jsx("div", {
              className: "grid grid-cols-5 gap-3",
              children: S.map((_, o) =>
                z.jsxs(
                  "article",
                  {
                    children: [
                      z.jsx("img", {
                        src: _.image,
                        className: "rounded-lg shadow-lg",
                        alt: _.race,
                        "border-2": !0,
                        "hover-scale-105": !0,
                        transition: !0,
                        all: !0,
                      }),
                      z.jsx("h5", {
                        className: "text-white text-lg text-center",
                        children: _.race,
                      }),
                    ],
                  },
                  o
                )
              ),
            }),
            z.jsx("div", {
              children: z.jsx("h4", {
                className: "text-center font-semibold mt-3 text-2xl",
                children: "LES CHATS",
              }),
            }),
            z.jsx("div", {
              className: "grid grid-cols-5 gap-3",
              children: U.map((_, o) =>
                z.jsxs(
                  "action",
                  {
                    children: [
                      z.jsx("img", {
                        src: _.image,
                        alt: _.race,
                        className: "rounded-lg shadow-lg",
                      }),
                      z.jsx("h5", {
                        className: "text-center",
                        children: _.race,
                      }),
                    ],
                  },
                  o
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  $v = () =>
    z.jsx("div", {
      className: `w-full h-[500px]\r
        bg-start bg-cover flex items-center justify-center`,
      style: { backgroundImage: "url('./assets/Image/clinique.jpg')" },
      children: z.jsx("h1", {
        className: "text-5xl font-extrabold text-white",
        children: "BIENVENUE CHEZ VOTRE VETERINAIRE",
      }),
    }),
  kv = () =>
    z.jsxs("nav", {
      className: "bg-indigo-600 flex items-center justify-between p-6",
      children: [
        z.jsx("h2", {
          className: "text-white font-bold italic text-2x1",
          children: "Clinique vétérinaire",
        }),
        z.jsxs("ul", {
          className:
            "bg-indigo-600 text-lg text-white flex space-x-8 justify-end",
          children: [
            z.jsx("li", { children: z.jsx("a", { children: "A PROPOS" }) }),
            z.jsx("li", { children: z.jsx("a", { children: "SERVICES" }) }),
            z.jsx("li", { children: z.jsx("a", { children: "CONTACT" }) }),
          ],
        }),
      ],
    }),
  Fv = () =>
    z.jsxs("section", {
      className: "bg-white flex flex-col items-center justify-between p-8",
      children: [
        z.jsx("h2", {
          className: "text-3xl text-indigo-600 font-bold mb-4 text-center",
          children: "CONTACTEZ NOUS",
        }),
        z.jsxs("form", {
          onSubmit: () => alert("vous avez envoyé votre message"),
          className:
            "bg-gray-900 p-8 rounded-lg shadow-sm space-y-3 w-fit flex flex-col",
          children: [
            z.jsx("input", {
              type: "email",
              placeholder: "entrer votre adresse email",
              className:
                " bg-white w-64 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("input", {
              type: "text",
              placeholder: "votre nom complet",
              className:
                " bg-white w-64 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("input", {
              type: "tel",
              placeholder: "téléphone",
              className:
                " bg-white w-64 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("textarea", {
              type: "text",
              placeholder: "votre message",
              className:
                " bg-white w-64 text-gray-700 p-2 rounded-lg outline-indigo-400",
            }),
            z.jsx("input", {
              type: "submit",
              value: "envoyer",
              className: " bg-indigo-600 hover:bg-indigo-700text-gray-700 p-3",
            }),
          ],
        }),
      ],
    });
var dr = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  fr = Ru.createContext && Ru.createContext(dr),
  Iv = ["attr", "size", "title"];
function Pv(S, U) {
  if (S == null) return {};
  var _ = lh(S, U),
    o,
    X;
  if (Object.getOwnPropertySymbols) {
    var L = Object.getOwnPropertySymbols(S);
    for (X = 0; X < L.length; X++)
      (o = L[X]),
        !(U.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(S, o) &&
          (_[o] = S[o]);
  }
  return _;
}
function lh(S, U) {
  if (S == null) return {};
  var _ = {};
  for (var o in S)
    if (Object.prototype.hasOwnProperty.call(S, o)) {
      if (U.indexOf(o) >= 0) continue;
      _[o] = S[o];
    }
  return _;
}
function Hn() {
  return (
    (Hn = Object.assign
      ? Object.assign.bind()
      : function (S) {
          for (var U = 1; U < arguments.length; U++) {
            var _ = arguments[U];
            for (var o in _)
              Object.prototype.hasOwnProperty.call(_, o) && (S[o] = _[o]);
          }
          return S;
        }),
    Hn.apply(this, arguments)
  );
}
function ir(S, U) {
  var _ = Object.keys(S);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(S);
    U &&
      (o = o.filter(function (X) {
        return Object.getOwnPropertyDescriptor(S, X).enumerable;
      })),
      _.push.apply(_, o);
  }
  return _;
}
function qn(S) {
  for (var U = 1; U < arguments.length; U++) {
    var _ = arguments[U] != null ? arguments[U] : {};
    U % 2
      ? ir(Object(_), !0).forEach(function (o) {
          th(S, o, _[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(_))
      : ir(Object(_)).forEach(function (o) {
          Object.defineProperty(S, o, Object.getOwnPropertyDescriptor(_, o));
        });
  }
  return S;
}
function th(S, U, _) {
  return (
    (U = uh(U)),
    U in S
      ? Object.defineProperty(S, U, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (S[U] = _),
    S
  );
}
function uh(S) {
  var U = ah(S, "string");
  return typeof U == "symbol" ? U : U + "";
}
function ah(S, U) {
  if (typeof S != "object" || !S) return S;
  var _ = S[Symbol.toPrimitive];
  if (_ !== void 0) {
    var o = _.call(S, U);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (U === "string" ? String : Number)(S);
}
function rr(S) {
  return (
    S &&
    S.map((U, _) =>
      Ru.createElement(U.tag, qn({ key: _ }, U.attr), rr(U.child))
    )
  );
}
function or(S) {
  return (U) =>
    Ru.createElement(eh, Hn({ attr: qn({}, S.attr) }, U), rr(S.child));
}
function eh(S) {
  var U = (_) => {
    var { attr: o, size: X, title: L } = S,
      dl = Pv(S, Iv),
      El = X || _.size || "1em",
      N;
    return (
      _.className && (N = _.className),
      S.className && (N = (N ? N + " " : "") + S.className),
      Ru.createElement(
        "svg",
        Hn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          _.attr,
          o,
          dl,
          {
            className: N,
            style: qn(qn({ color: S.color || _.color }, _.style), S.style),
            height: El,
            width: El,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        L && Ru.createElement("title", null, L),
        S.children
      )
    );
  };
  return fr !== void 0
    ? Ru.createElement(fr.Consumer, null, (_) => U(_))
    : U(dr);
}
function nh(S) {
  return or({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
        },
        child: [],
      },
    ],
  })(S);
}
function ch(S) {
  return or({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
        },
        child: [],
      },
    ],
  })(S);
}
const fh = () =>
  z.jsx("footer", {
    className: "p-8 bg-gradient-to-b from-indigo-600 to-indigo-900",
    children: z.jsxs("section", {
      className: "grid grid-cols-4 gap-8",
      children: [
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Clinique veterinaire",
            }),
            z.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iure pariatur debitis. Dignissimos, numquam eius delectus quaerat eum voluptatibus alias voluptate quod adipisci a soluta quia sit sed inventore consequatur.",
            }),
          ],
        }),
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Nos services",
            }),
            z.jsxs("ul", {
              children: [
                z.jsx("li", { children: "Soins vétérinaires" }),
                z.jsx("li", { children: "Vaccination" }),
                z.jsx("li", { children: "Reproduction" }),
              ],
            }),
          ],
        }),
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Nos services",
            }),
            z.jsxs("ul", {
              children: [
                z.jsx("li", { children: z.jsx("a", { children: "Accueil" }) }),
                z.jsx("li", { children: z.jsx("a", { children: "A propos" }) }),
                z.jsx("li", { children: z.jsx("a", { children: "Services" }) }),
                z.jsx("li", { children: z.jsx("a", { children: "Contact" }) }),
              ],
            }),
          ],
        }),
        z.jsxs("div", {
          className: "flex flex-col",
          children: [
            z.jsx("h2", {
              className: "text-xl font-bold text-left uppercase mb-4",
              children: "Contact",
            }),
            z.jsxs("ul", {
              children: [
                z.jsxs("li", {
                  className: "flex items-center gap-3",
                  children: [
                    z.jsx(nh, {}),
                    z.jsx("a", { children: "(+237 6 58811960)" }),
                  ],
                }),
                z.jsxs("li", {
                  className: "flex items-center gap-3",
                  children: [
                    z.jsx(ch, {}),
                    z.jsx("a", { children: "clinique@gmail.com" }),
                  ],
                }),
                z.jsx("li", {
                  className: "flex items-center gap-3",
                  children: z.jsx("a", { children: "Yaounde, Cameroun" }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
function ih() {
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx(kv, {}),
      z.jsx($v, {}),
      z.jsx(wv, {}),
      z.jsx(Wv, {}),
      z.jsx(Fv, {}),
      z.jsx(fh, {}),
    ],
  });
}
Jv.createRoot(document.getElementById("root")).render(
  z.jsx(sr.StrictMode, { children: z.jsx(ih, {}) })
);

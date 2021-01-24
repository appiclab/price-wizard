!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("PolarisVue", [], e)
    : "object" == typeof exports
    ? (exports.PolarisVue = e())
    : (t.PolarisVue = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function a(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
    }
    return (
      (a.m = t),
      (a.c = e),
      (a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (a.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (a.t = function (t, e) {
        if ((1 & e && (t = a(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (a.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            a.d(
              n,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return n;
      }),
      (a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return a.d(e, "a", e), e;
      }),
      (a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (a.p = ""),
      a((a.s = 64))
    );
  })([
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" fill="#637381" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5z" fill="#212B35" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 12l-5-5-5 5z" fill="#212B35"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar1&quot;] .cls-1{fill:#245b48} [data-name=&quot;PolarisAvatar1&quot;] .cls-2{fill:#2db167} [data-name=&quot;PolarisAvatar1&quot;] .cls-3{fill:#fff} [data-name=&quot;PolarisAvatar1&quot;] .cls-4{fill:#8dc958} [data-name=&quot;PolarisAvatar1&quot;] .cls-5{fill:#ebedf1; opacity:.2} </style></defs><path class="cls-1" d="M0 0h100v100H0z"></path><path class="cls-2" d="M69 0v65.65l-2-.01v19.85l2 .02V100H0V0h69z"></path><path class="cls-3" d="M67 65.64v19.85l-25.57-.19C32 85.22 25.6 81.46 25.68 72.06s.25-6.74.25-6.74z"></path><path class="cls-4" d="M86.99 58H69V0h10.93l7.06 58z"></path><path class="cls-5" d="M24.53 40.29a12.23 12.23 0 0 1 24.46 0"></path><path class="cls-4" d="M59.62 58A10.69 10.69 0 0 1 81 58z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar2&quot;] .cls-1{fill:#1e265c} [data-name=&quot;PolarisAvatar2&quot;] .cls-2{fill:#5d6cc1} [data-name=&quot;PolarisAvatar2&quot;] .cls-3, [data-name=&quot;PolarisAvatar2&quot;] .cls-5{fill:#fff} [data-name=&quot;PolarisAvatar2&quot;] .cls-4{fill:#ffc04d} [data-name=&quot;PolarisAvatar2&quot;] .cls-5{stroke:#fff;stroke-miterlimit:10} </style></defs><path class="cls-1" d="M-.01 0h100v100h-100z"></path><path class="cls-2" d="M-.01 0h69.02v100H-.01z"></path><path class="cls-3" d="M68.93 65.88l-24.44-.19-.05 6.09c0 5.22 3.48 9.47 8.69 9.52l15.8.12z"></path><path class="cls-4" d="M68.91 11.3l19.17 46.29-19.17-.16V11.3z"></path><path class="cls-5" d="M23.25 36.43a3.22 3.22 0 1 0 0 6.44m21.01-6.44a3.22 3.22 0 0 0 0 6.44m-13.55 3.74a3.22 3.22 0 1 0 0 6.44m3.22-25.51a3.22 3.22 0 0 0 0 6.44"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar3&quot;] .cls-1{fill:#5d6cc1} [data-name=&quot;PolarisAvatar3&quot;] .cls-2{fill:#6dcace} [data-name=&quot;PolarisAvatar3&quot;] .cls-3{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px} [data-name=&quot;PolarisAvatar3&quot;] .cls-4{fill:#ebedf1;opacity:.2} [data-name=&quot;PolarisAvatar3&quot;] .cls-5{fill:#fff} </style></defs><path class="cls-1" d="M-.02 0h100v100h-100z"></path><path class="cls-2" d="M.39 0h69.02v100H.39z"></path><path class="cls-3" d="M24.18 31.21v3.47A10.43 10.43 0 0 0 34.4 45.21a10.43 10.43 0 0 0 10.22-10.53v-3.47"></path><path class="cls-4" d="M20.11 49.07a16.22 16.22 0 1 1 0 32.44"></path><path class="cls-5" d="M69.44 18.83L90 71H69.44V18.83z"></path><path class="cls-5" d="M57.59 71a6 6 0 0 1 12 0z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar4&quot;] .cls-1{fill:#ffe0c3} [data-name=&quot;PolarisAvatar4&quot;] .cls-2{fill:#5d6cc1} [data-name=&quot;PolarisAvatar4&quot;] .cls-3{fill:#ff967d} [data-name=&quot;PolarisAvatar4&quot;] .cls-4{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px} [data-name=&quot;PolarisAvatar4&quot;] .cls-5{fill:#ebedf1;opacity:.2} </style></defs><path class="cls-1" d="M0-.01h100v100H0z"></path><path class="cls-2" d="M0 0h69.02v100H0z"></path><path class="cls-3" d="M69.02 0l24.03 61.69H69.02V0z"></path><path class="cls-4" d="M30.69 31.91v-3c0-4.78 3.46-8.65 8-8.65s8 3.87 8 8.65v3"></path><path class="cls-5" d="M12.76 56.06a13.36 13.36 0 1 1 26.72 0"></path><path class="cls-3" d="M80 61.46l-29.34.23v-7.33c0-6.28 4.07-11.36 10.34-11.44l19-.14z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar5&quot;] .cls-1{fill:#8dc958} [data-name=&quot;PolarisAvatar5&quot;] .cls-2{fill:#2db167} [data-name=&quot;PolarisAvatar5&quot;] .cls-3{fill:#245b48} [data-name=&quot;PolarisAvatar5&quot;] .cls-4{fill:#ebedf1;opacity:.2} </style></defs><path class="cls-1" d="M0 0h70.02v100H0z"></path><path class="cls-2" d="M69.92 0v56.32L49 67l-.3 25.07V100H100V0z"></path><path class="cls-3" d="M59.27 58.29a5.22 5.22 0 0 0-9.43 4.48"></path><path class="cls-2" d="M27.12 9.33h44.53v2.19H27.12zm-12.41 9.49h56.94v2.19H14.71z"></path><circle class="cls-4" cx="19.66" cy="44.8" r="11.22"></circle></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar6&quot;] .cls-1{fill:#ffe0c3} [data-name=&quot;PolarisAvatar6&quot;] .cls-2{fill:#ff967d} [data-name=&quot;PolarisAvatar6&quot;] .cls-3{fill:#32cac6} [data-name=&quot;PolarisAvatar6&quot;] .cls-4{fill:#009796} [data-name=&quot;PolarisAvatar6&quot;] .cls-5, [data-name=&quot;PolarisAvatar6&quot;] .cls-6{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10} [data-name=&quot;PolarisAvatar6&quot;] .cls-5{stroke-width:5px} [data-name=&quot;PolarisAvatar6&quot;] .cls-6{stroke-width:4px} </style></defs><path class="cls-1" d="M-.02-.01h100v100h-100z"></path><path class="cls-2" d="M0 0h69.41v100H0z"></path><path class="cls-1" d="M69.92 0v44.32L51.34 55v45H100V0z"></path><path class="cls-3" d="M39.32 76a11.85 11.85 0 0 0 12 11.62V76"></path><path class="cls-4" d="M39.32 76a12 12 0 0 1 12-11.82V76"></path><path class="cls-5" d="M43.74 19.83a12.82 12.82 0 1 1-25.64 0"></path><path class="cls-6" d="M27.39 31.6l-1.58 5.96m9.37-5.72l2.55 5.47m4.26-9.85l3.53 4.5m-25.43-4.5l-3.53 4.5"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar7&quot;] .cls-1{fill:#8dc958} [data-name=&quot;PolarisAvatar7&quot;] .cls-2{fill:#2db167} [data-name=&quot;PolarisAvatar7&quot;] .cls-3{fill:#fff} [data-name=&quot;PolarisAvatar7&quot;] .cls-4{fill:#245b48} </style></defs><path class="cls-1" d="M0 0h100v100.48H0z"></path><path class="cls-2" d="M83 68v32l-14-.16v.16H0V0h69v68h14z"></path><path class="cls-1" d="M69.29 41.69H20.66s-.09-3-.17 7.15 7 18.51 17.35 18.59l31.45.57z"></path><path class="cls-3" d="M68.7 12.4l11.54 29.29H68.7V12.4z"></path><path class="cls-3" d="M62.22 41.69a3.34 3.34 0 1 1 6.69 0z"></path><path class="cls-4" d="M41.45 18.06a2.57 2.57 0 0 0-5.14 0M33.33 24a2.57 2.57 0 1 0-5.14 0m20.36 2.58a2.57 2.57 0 1 0-5.14 0"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar8&quot;] .cls-1{fill:#ffedb9} [data-name=&quot;PolarisAvatar8&quot;] .cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:5px} [data-name=&quot;PolarisAvatar8&quot;] .cls-3{fill:#ffc04d} [data-name=&quot;PolarisAvatar8&quot;] .cls-4{fill:#5d6cc1} </style></defs><path class="cls-1" d="M0 0h100v100H0z"></path><path class="cls-2" d="M64.63 17.33a17 17 0 0 1 5 29.72 16.75 16.75 0 0 1-5 2.62"></path><path class="cls-3" d="M0 0h69.02v100H0z"></path><circle class="cls-2" cx="45.11" cy="33.49" r="16.98" transform="rotate(-37.02 45.124 33.493)"></circle><path class="cls-4" d="M69.02 34.48l19.47 38.74-19.47 1.53V34.48z"></path><path class="cls-2" d="M61.6 33.67a10.17 10.17 0 0 1 15.4.08"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg data-name="PolarisAvatar9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style> [data-name=&quot;PolarisAvatar9&quot;] .cls-1{fill:#ffc04d} [data-name=&quot;PolarisAvatar9&quot;] .cls-2{fill:#5d6cc1} [data-name=&quot;PolarisAvatar9&quot;] .cls-3{fill:#41236e} [data-name=&quot;PolarisAvatar9&quot;] .cls-4{fill:#ebedf1;opacity:.2} </style></defs><path class="cls-1" d="M0 0h100v100H0z"></path><path class="cls-2" d="M0 0h69.41v100H0z"></path><path class="cls-1" d="M70.21 80.88h-15.1c-4.81 0-5.68-5.84-5.68-5.84h20.78"></path><path class="cls-2" d="M82 60.48l-14 .25V0h10.17C80.59 20.14 82 60.48 82 60.48z"></path><path class="cls-3" d="M57.71 60.48a5.44 5.44 0 1 1 10.87 0"></path><circle class="cls-4" cx="24.77" cy="40.19" r="11.22"></circle></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.667,405.333h-56.811C424.619,374.592,396.373,352,362.667,352s-61.931,22.592-71.189,53.333H21.333 C9.557,405.333,0,414.891,0,426.667S9.557,448,21.333,448h270.144c9.237,30.741,37.483,53.333,71.189,53.333 s61.931-22.592,71.189-53.333h56.811c11.797,0,21.333-9.557,21.333-21.333S502.464,405.333,490.667,405.333z M362.667,458.667 c-17.643,0-32-14.357-32-32s14.357-32,32-32s32,14.357,32,32S380.309,458.667,362.667,458.667z"></path><path d="M490.667,64h-56.811c-9.259-30.741-37.483-53.333-71.189-53.333S300.736,33.259,291.477,64H21.333 C9.557,64,0,73.557,0,85.333s9.557,21.333,21.333,21.333h270.144C300.736,137.408,328.96,160,362.667,160 s61.931-22.592,71.189-53.333h56.811c11.797,0,21.333-9.557,21.333-21.333S502.464,64,490.667,64z M362.667,117.333 c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C394.667,102.976,380.309,117.333,362.667,117.333z"></path><path d="M490.667,234.667H220.523c-9.259-30.741-37.483-53.333-71.189-53.333s-61.931,22.592-71.189,53.333H21.333 C9.557,234.667,0,244.224,0,256c0,11.776,9.557,21.333,21.333,21.333h56.811c9.259,30.741,37.483,53.333,71.189,53.333 s61.931-22.592,71.189-53.333h270.144c11.797,0,21.333-9.557,21.333-21.333C512,244.224,502.464,234.667,490.667,234.667z M149.333,288c-17.643,0-32-14.357-32-32s14.357-32,32-32c17.643,0,32,14.357,32,32S166.976,288,149.333,288z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707l5-5a.999.999 0 1 0-1.414-1.414L11 14.586V3a1 1 0 1 0-2 0v11.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.707 9.293l-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 17V5.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a.999.999 0 0 0-1.414 0l-5 5a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0L9 5.414V17a1 1 0 1 0 2 0" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h12V6H4v2zm9 4h2v-2h-2v2zm-4 0h2v-2H9v2zm0 4h2v-2H9v2zm-4-4h2v-2H5v2zm0 4h2v-2H5v2zM17 4h-2V3a1 1 0 1 0-2 0v1H7V3a1 1 0 1 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#919EAB" fill-rule="evenodd"><path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path><path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path></g></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 14a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L10 11.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 14" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.242 12.829l-1.414 1.414L10 11.413l-2.828 2.83-1.414-1.414 2.828-2.83-2.828-2.827 1.414-1.414L10 8.586l2.828-2.828 1.414 1.414L11.414 10l2.828 2.829zM10 1.999A8 8 0 1 0 10 18a8 8 0 0 0 0-16z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.414L5.293 8.707l1.414-1.414L10 10.586l3.293-3.293 1.414 1.414L10 13.414zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.293 5.293l1.414 1.414L9.414 10l3.293 3.293-1.414 1.414L6.586 10l4.707-4.707zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 14.707l-1.414-1.414L10.586 10 7.293 6.707l1.414-1.414L13.414 10l-4.707 4.707zM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.707 11.293l-1.414 1.414L10 9.414l-3.293 3.293-1.414-1.414L10 6.586l4.707 4.707zM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 11h-4v4H9v-4H5V9h4V5h2v4h4v2zm-5-9a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 11h2V9h-2v2zm-4 0h2V9H9v2zm-4 0h2V9H5v2zm5-9c-4.411 0-8 3.589-8 8 0 1.504.425 2.908 1.15 4.111l-1.069 2.495a1 1 0 0 0 1.314 1.313l2.494-1.069A7.939 7.939 0 0 0 10 18c4.411 0 8-3.589 8-8s-3.589-8-8-8z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 16a5.961 5.961 0 0 1-3.471-1.115l8.356-8.356A5.961 5.961 0 0 1 16 10c0 3.309-2.691 6-6 6m0-12c1.294 0 2.49.416 3.471 1.115l-8.356 8.356A5.961 5.961 0 0 1 4 10c0-3.309 2.691-6 6-6m0-2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h2V6H9v4zm0 4h2v-2H9v2zm-7-4c0 4.411 3.589 8 8 8a7.939 7.939 0 0 0 4.111-1.15l2.494 1.069a1 1 0 0 0 1.314-1.313l-1.069-2.495A7.939 7.939 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 12h8V4H8v8zm4 4H4V8h2v5a1 1 0 0 0 1 1h5v2zm5-14H7a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520"><path transform="matrix(0.793614 0 0 0.793614 54.5786 54.5786)" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v2h12v-2a1 1 0 0 1 1-1zm0-11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4H4v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1h14zm.555 7.168a1.001 1.001 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.109-1.664L15.198 10l-1.752-1.168a1 1 0 1 1 1.109-1.664l3 2zM6.832 7.445a1 1 0 0 1-.277 1.387L4.803 10l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.001 1.001 0 0 1 0-1.664l3-2a1 1 0 0 1 1.387.277zM9 14.001a1 1 0 0 1-.948-1.317l2-6a1 1 0 0 1 1.896.633l-2 6A.999.999 0 0 1 9 14z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 13.707l-3-3a.999.999 0 1 1 1.414-1.414L9 10.586V3a1 1 0 1 1 2 0v7.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a.999.999 0 0 1-1.414 0zM17 16a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h14z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-7.293 7.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 4H13a1 1 0 1 1 0-2h4zm-4 9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4v8h8v-4a1 1 0 0 1 1-1z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="#FFF"></circle><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-4a1 1 0 1 0 0 2 1 1 0 1 0 0-2m0-10C8.346 4 7 5.346 7 7a1 1 0 1 0 2 0 1.001 1.001 0 1 1 1.591.808C9.58 8.548 9 9.616 9 10.737V11a1 1 0 1 0 2 0v-.263c0-.653.484-1.105.773-1.317A3.013 3.013 0 0 0 13 7c0-1.654-1.346-3-3-3"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.707 6.707a.997.997 0 0 1-1.414 0L11 5.414V13a1 1 0 1 1-2 0V5.414L7.707 6.707a.999.999 0 1 1-1.414-1.414l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 0 1 0 1.414zM17 18H3a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 11h8V9H6v2zm0 4h8v-2H6v2zm0-8h4V5H6v2zm9.707-1.707l-3-3A.996.996 0 0 0 12 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a.997.997 0 0 0-.293-.707z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14 11h2V9h-2v2zM7 7h6V4H7v3zm0 9h6v-2H7v2zm10-9h-2V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 11a1 1 0 0 1 1 1c0 1.654-1.346 3-3 3H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a.999.999 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 13H15c.552 0 1-.449 1-1a1 1 0 0 1 1-1zM3 9a1 1 0 0 1-1-1c0-1.654 1.346-3 3-3h9.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a.999.999 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 7H5c-.552 0-1 .449-1 1a1 1 0 0 1-1 1z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h2V8H9v4zm0 4h2v-2H9v2zm8.895.509l-7-14c-.339-.678-1.451-.678-1.79 0l-7 14A.999.999 0 0 0 3 17.956h14a1.001 1.001 0 0 0 .895-1.447z" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 4h-3a1 1 0 1 0 0 2h2v10H4V4h3.586L9 5.414v5.172L7.707 9.293a1 1 0 0 0-1.414 1.414l3 3a.996.996 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 10.586V5a.997.997 0 0 0-.293-.707l-2-2A.994.994 0 0 0 8 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m9.707 4.293l-4.82-4.82A5.968 5.968 0 0 0 14 8 6 6 0 0 0 2 8a6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 9H5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.928 9.628C17.836 9.399 15.611 4 9.999 4S2.162 9.399 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.162 10.601 4.387 16 9.999 16s7.837-5.399 7.929-5.628a1.017 1.017 0 0 0 0-.744zM9.999 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6A2 2 0 1 0 10 12.001 2 2 0 0 0 10 8z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FFF" cx="10" cy="10" r="9"></circle><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2.293-10.707L9 10.586 7.707 9.293a1 1 0 1 0-1.414 1.414l2 2a.997.997 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414" fill="#919EAB"></path></g></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M2 3h11v4h6l-2 4 2 4H8v-4H3"></path><path d="M16.105 11.447L17.381 14H9v-2h4a1 1 0 0 0 1-1V8h3.38l-1.274 2.552a.993.993 0 0 0 0 .895zM2.69 4H12v6H4.027L2.692 4zm15.43 7l1.774-3.553A1 1 0 0 0 19 6h-5V3c0-.554-.447-1-1-1H2.248L1.976.782a1 1 0 1 0-1.953.434l4 18a1.006 1.006 0 0 0 1.193.76 1 1 0 0 0 .76-1.194L4.47 12H7v3a1 1 0 0 0 1 1h11c.346 0 .67-.18.85-.476a.993.993 0 0 0 .044-.972l-1.775-3.553z" fill="#919EAB"></path></g></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FFF" cx="10" cy="10" r="9"></circle><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-13a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2" fill="#919EAB"></path></g></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FFF" cx="10" cy="10" r="9"></circle><path d="M2 10c0-1.846.635-3.543 1.688-4.897l11.209 11.209A7.954 7.954 0 0 1 10 18c-4.411 0-8-3.589-8-8m14.312 4.897L5.103 3.688A7.954 7.954 0 0 1 10 2c4.411 0 8 3.589 8 8a7.952 7.952 0 0 1-1.688 4.897M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10" fill="#919EAB"></path></g></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="9" fill="#FFF"></circle><path fill="#919EAB" d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m1-5v-3a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2m-1-5.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"></path></g></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16" fill="#31373D" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill-rule="evenodd"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"></path></svg>';
    },
    function (t, e) {
      t.exports =
        '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"></path></svg>';
    },
    function (t, e, a) {
      "use strict";
      a.r(e);
      var n = {};
      a.r(n),
        a.d(n, "camelCaseTransform", function () {
          return v;
        }),
        a.d(n, "camelCaseTransformMerge", function () {
          return f;
        }),
        a.d(n, "camelCase", function () {
          return m;
        }),
        a.d(n, "capitalCaseTransform", function () {
          return g;
        }),
        a.d(n, "capitalCase", function () {
          return b;
        }),
        a.d(n, "constantCase", function () {
          return w;
        }),
        a.d(n, "dotCase", function () {
          return y;
        }),
        a.d(n, "headerCase", function () {
          return C;
        }),
        a.d(n, "noCase", function () {
          return c;
        }),
        a.d(n, "paramCase", function () {
          return S;
        }),
        a.d(n, "pascalCaseTransform", function () {
          return d;
        }),
        a.d(n, "pascalCaseTransformMerge", function () {
          return p;
        }),
        a.d(n, "pascalCase", function () {
          return h;
        }),
        a.d(n, "pathCase", function () {
          return P;
        }),
        a.d(n, "sentenceCaseTransform", function () {
          return A;
        }),
        a.d(n, "sentenceCase", function () {
          return B;
        }),
        a.d(n, "snakeCase", function () {
          return L;
        });
      var i = {};
      a.r(i),
        a.d(i, "avatarOne", function () {
          return K.a;
        }),
        a.d(i, "avatarTwo", function () {
          return Y.a;
        }),
        a.d(i, "avatarThree", function () {
          return et.a;
        }),
        a.d(i, "avatarFour", function () {
          return nt.a;
        }),
        a.d(i, "avatarFive", function () {
          return st.a;
        }),
        a.d(i, "avatarSix", function () {
          return ot.a;
        }),
        a.d(i, "avatarSeven", function () {
          return ct.a;
        }),
        a.d(i, "avatarEight", function () {
          return dt.a;
        }),
        a.d(i, "avatarNine", function () {
          return ht.a;
        });
      var s = function () {
        return (s =
          Object.assign ||
          function (t) {
            for (var e, a = 1, n = arguments.length; a < n; a++)
              for (var i in (e = arguments[a]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      Object.create;
      function l(t) {
        return t.toLowerCase();
      }
      var o = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
        r = /[^A-Z0-9]+/gi;
      function c(t, e) {
        void 0 === e && (e = {});
        for (
          var a = e.splitRegexp,
            n = void 0 === a ? o : a,
            i = e.stripRegexp,
            s = void 0 === i ? r : i,
            c = e.transform,
            d = void 0 === c ? l : c,
            p = e.delimiter,
            h = void 0 === p ? " " : p,
            v = u(u(t, n, "$1\0$2"), s, "\0"),
            f = 0,
            m = v.length;
          "\0" === v.charAt(f);

        )
          f++;
        for (; "\0" === v.charAt(m - 1); ) m--;
        return v.slice(f, m).split("\0").map(d).join(h);
      }
      function u(t, e, a) {
        return e instanceof RegExp
          ? t.replace(e, a)
          : e.reduce(function (t, e) {
              return t.replace(e, a);
            }, t);
      }
      function d(t, e) {
        var a = t.charAt(0),
          n = t.substr(1).toLowerCase();
        return e > 0 && a >= "0" && a <= "9"
          ? "_" + a + n
          : "" + a.toUpperCase() + n;
      }
      function p(t) {
        return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
      }
      function h(t, e) {
        return (
          void 0 === e && (e = {}), c(t, s({ delimiter: "", transform: d }, e))
        );
      }
      function v(t, e) {
        return 0 === e ? t.toLowerCase() : d(t, e);
      }
      function f(t, e) {
        return 0 === e ? t.toLowerCase() : p(t);
      }
      function m(t, e) {
        return void 0 === e && (e = {}), h(t, s({ transform: v }, e));
      }
      function _(t) {
        return t.charAt(0).toUpperCase() + t.substr(1);
      }
      function g(t) {
        return _(t.toLowerCase());
      }
      function b(t, e) {
        return (
          void 0 === e && (e = {}), c(t, s({ delimiter: " ", transform: g }, e))
        );
      }
      function x(t) {
        return t.toUpperCase();
      }
      function w(t, e) {
        return (
          void 0 === e && (e = {}), c(t, s({ delimiter: "_", transform: x }, e))
        );
      }
      function y(t, e) {
        return void 0 === e && (e = {}), c(t, s({ delimiter: "." }, e));
      }
      function C(t, e) {
        return void 0 === e && (e = {}), b(t, s({ delimiter: "-" }, e));
      }
      function S(t, e) {
        return void 0 === e && (e = {}), y(t, s({ delimiter: "-" }, e));
      }
      function P(t, e) {
        return void 0 === e && (e = {}), y(t, s({ delimiter: "/" }, e));
      }
      function A(t, e) {
        var a = t.toLowerCase();
        return 0 === e ? _(a) : a;
      }
      function B(t, e) {
        return (
          void 0 === e && (e = {}), c(t, s({ delimiter: " ", transform: A }, e))
        );
      }
      function L(t, e) {
        return void 0 === e && (e = {}), y(t, s({ delimiter: "_" }, e));
      }
      function k(t, e) {
        var a;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (a = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return T(t, e);
              var a = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === a && t.constructor && (a = t.constructor.name);
              if ("Map" === a || "Set" === a) return Array.from(t);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return T(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            a && (t = a);
            var n = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          l = !0,
          o = !1;
        return {
          s: function () {
            a = t[Symbol.iterator]();
          },
          n: function () {
            var t = a.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (o = !0), (s = t);
          },
          f: function () {
            try {
              l || null == a.return || a.return();
            } finally {
              if (o) throw s;
            }
          },
        };
      }
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
        return n;
      }
      function M(t, e) {
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var z = new ((function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.componentNameFormat = function (t) {
                return t;
              });
          }
          var e, a, i;
          return (
            (e = t),
            (a = [
              {
                key: "setComponentNameFormat",
                value: function (t) {
                  this.componentNameFormat = t;
                },
              },
              {
                key: "makeComponentClass",
                value: function (t, e, a) {
                  var n = {};
                  n[t] = !0;
                  var i,
                    s = k(e);
                  try {
                    for (s.s(); !(i = s.n()).done; ) {
                      var l = i.value,
                        o = a[l],
                        r = "";
                      o &&
                        "string" == typeof o &&
                        (r = o.charAt(0).toUpperCase() + o.slice(1)),
                        (n[t + "--" + l + r] = a[l]);
                    }
                  } catch (t) {
                    s.e(t);
                  } finally {
                    s.f();
                  }
                  return n;
                },
              },
              {
                key: "isNodeOfComponent",
                value: function (t, e) {
                  return (
                    !(!t || !t.componentOptions) &&
                    t.componentOptions.tag ===
                      this.getComponentName(e.polarisName)
                  );
                },
              },
              {
                key: "getComponentName",
                value: function (t) {
                  return t ? this.componentNameFormat(t, n) : "";
                },
              },
              {
                key: "wrapNodesWithComponent",
                value: function (t, e, a) {
                  var n,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [],
                    s = [],
                    l = k(e);
                  try {
                    for (l.s(); !(n = l.n()).done; ) {
                      var o = n.value;
                      if (o.tag || o.text.trim()) {
                        var r = !1;
                        if (this.isNodeOfComponent(o, a)) (r = !0), s.push(o);
                        else {
                          var c,
                            u = k(i);
                          try {
                            for (u.s(); !(c = u.n()).done; ) {
                              var d = c.value;
                              if (this.isNodeOfComponent(o, d)) {
                                (r = !0), s.push(o);
                                break;
                              }
                            }
                          } catch (t) {
                            u.e(t);
                          } finally {
                            u.f();
                          }
                        }
                        r || s.push(t(a, {}, [o]));
                      }
                    }
                  } catch (t) {
                    l.e(t);
                  } finally {
                    l.f();
                  }
                  return s;
                },
              },
            ]) && M(e.prototype, a),
            i && M(e, i),
            t
          );
        })())(),
        I = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "polaris-card",
            { attrs: { sectioned: "" } },
            [
              a(
                "polaris-setting-action",
                [
                  a(
                    "polaris-stack",
                    { attrs: { slot: "children" }, slot: "children" },
                    [
                      t.connected && t.avatarUrl
                        ? a(
                            "polaris-stack-item",
                            [
                              a("polaris-avatar", {
                                attrs: {
                                  source: t.avatarUrl,
                                  name: t.realTitle,
                                },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      a("polaris-stack-item", { attrs: { fill: "" } }, [
                        a(
                          "div",
                          { staticClass: "Polaris-AccountConnection__Content" },
                          [
                            t._t("title", [
                              a("div", [t._v(t._s(t.realTitle))]),
                            ]),
                            t._v(" "),
                            t.details || this.$slots.details
                              ? a(
                                  "div",
                                  [
                                    a(
                                      "polaris-text-style",
                                      { attrs: { variation: "subdued" } },
                                      [
                                        t._t("details", [
                                          t._v(t._s(t.details)),
                                        ]),
                                      ],
                                      2
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                          ],
                          2
                        ),
                      ]),
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "polaris-button",
                    {
                      attrs: {
                        slot: "action",
                        primary: !t.connected,
                        url: t.action.url,
                        destructive: t.action.destructive,
                        disabled: t.action.disabled,
                        icon: t.action.icon,
                        "accessibility-label": t.action.accessibilityLabel,
                      },
                      on: {
                        click: function (e) {
                          return t.handleAction(t.action);
                        },
                      },
                      slot: "action",
                    },
                    [t._v("\n      " + t._s(t.action.content) + "\n    ")]
                  ),
                ],
                1
              ),
              t._v(" "),
              t.$slots.default || t.$slots.termsOfService || t.termsOfService
                ? a(
                    "div",
                    {
                      staticClass: "Polaris-AccountConnection__TermsOfService",
                    },
                    [
                      t._t("default", [
                        t._t("termsOfService", [t._v(t._s(t.termsOfService))]),
                      ]),
                    ],
                    2
                  )
                : t._e(),
            ],
            1
          );
        };
      function H(t, e, a, n, i, s, l, o) {
        var r,
          c = "function" == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = a), (c._compiled = !0)),
          n && (c.functional = !0),
          s && (c._scopeId = "data-v-" + s),
          l
            ? ((r = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(l);
              }),
              (c._ssrRegister = r))
            : i &&
              (r = o
                ? function () {
                    i.call(
                      this,
                      (c.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    );
                  }
                : i),
          r)
        )
          if (c.functional) {
            c._injectStyles = r;
            var u = c.render;
            c.render = function (t, e) {
              return r.call(e), u(t, e);
            };
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, r) : [r];
          }
        return { exports: t, options: c };
      }
      I._withStripped = !0;
      var $ = H(
        {
          props: {
            connected: Boolean,
            action: Object,
            avatarUrl: String,
            accountName: String,
            title: String,
            details: String,
            termsOfService: String,
          },
          computed: {
            realTitle: function () {
              return this.title || this.accountName;
            },
          },
          methods: {
            handleAction: function (t) {
              t.onAction && t.onAction();
            },
          },
        },
        I,
        [],
        !1,
        null,
        null,
        null
      );
      $.options.__file = "components/AccountConnection/AccountConnection.vue";
      var F = $.exports,
        q = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "dynamic-tag",
            {
              staticClass: "Polaris-ActionList",
              attrs: { tag: t.hasMultipleSections ? "div" : "ul" },
            },
            t._l(t.finalSections, function (e, n) {
              return a("polaris-action-list-section", {
                key: n,
                attrs: {
                  section: e,
                  "has-multiple-sections": t.hasMultipleSections,
                },
                on: { "action-any-item": t.onActionAnyItem },
              });
            }),
            1
          );
        };
      q._withStripped = !0;
      var E = {
          render: function (t) {
            return t(
              this.tag,
              { on: this.on, domProps: { value: this.value }, ref: "element" },
              this.$slots.default
            );
          },
          props: {
            tag: { type: String, required: !0 },
            on: {
              type: Object,
              default: function () {
                return {};
              },
            },
            value: { type: [String, Number] },
          },
          methods: {
            blur: function () {
              this.$refs.element.blur();
            },
            focus: function () {
              this.$refs.element.focus();
            },
          },
        },
        O = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "optional-tag",
            { attrs: { tag: "li", active: t.hasMultipleSections } },
            [
              a("div", { class: t.classes }, [
                t.section.title
                  ? a("p", { staticClass: "Polaris-ActionList__Title" }, [
                      t._v("\n      " + t._s(t.section.title) + "\n    "),
                    ])
                  : t._e(),
                t._v(" "),
                a(
                  "ul",
                  { staticClass: "Polaris-ActionList__Actions" },
                  t._l(t.section.items, function (e, n) {
                    return a("polaris-action-list-item", {
                      key: n,
                      attrs: { content: e.content, action: t.wrapAction(e) },
                    });
                  }),
                  1
                ),
              ]),
            ]
          );
        };
      O._withStripped = !0;
      var D = {
          render: function (t) {
            var e = this.$slots.default,
              a = e ? e[0] : t("div");
            return this.active ? t(this.tag, {}, [a]) : a;
          },
          props: {
            tag: { type: String, required: !0 },
            active: { type: Boolean, default: !0 },
          },
        },
        V = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "li",
            [
              t.url
                ? a(
                    "polaris-unstyled-link",
                    {
                      staticClass: "Polaris-ActionList__Item",
                      attrs: { url: t.url },
                      on: {
                        click: function (e) {
                          return t.handleAction(t.action);
                        },
                      },
                    },
                    [
                      t.icon || t.image
                        ? [
                            a(
                              "div",
                              { staticClass: "Polaris-ActionList__Content" },
                              [
                                a(
                                  "div",
                                  {
                                    staticClass: "Polaris-ActionList__Image",
                                    style: {
                                      backgroundImage: t.icon
                                        ? null
                                        : "url(" + t.image + ")",
                                    },
                                    attrs: { role: "presentation" },
                                  },
                                  [
                                    t.icon
                                      ? a("polaris-icon", {
                                          attrs: { source: t.icon },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                a(
                                  "div",
                                  { staticClass: "Polaris-ActionList__Text" },
                                  [
                                    t._t("default", [
                                      t._t("content", [t._v(t._s(t.content))]),
                                    ]),
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ]
                        : [t._v(t._s(t.content))],
                    ],
                    2
                  )
                : t._e(),
              t._v(" "),
              t.url
                ? t._e()
                : a(
                    "button",
                    {
                      class: t.classes,
                      attrs: { disabled: t.disabled },
                      on: {
                        click: function (e) {
                          return t.handleAction(t.action);
                        },
                      },
                    },
                    [
                      t.icon || t.image
                        ? [
                            a(
                              "div",
                              { staticClass: "Polaris-ActionList__Content" },
                              [
                                a(
                                  "div",
                                  {
                                    staticClass: "Polaris-ActionList__Image",
                                    style: {
                                      backgroundImage: t.icon
                                        ? null
                                        : "url('" + t.image + "')",
                                    },
                                    attrs: { role: "presentation" },
                                  },
                                  [
                                    t.icon
                                      ? a("polaris-icon", {
                                          attrs: { source: t.icon },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                a(
                                  "div",
                                  { staticClass: "Polaris-ActionList__Text" },
                                  [
                                    t._t("default", [
                                      t._t("content", [t._v(t._s(t.content))]),
                                    ]),
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ]
                        : [
                            t._t("default", [
                              t._t("content", [t._v(t._s(t.content))]),
                            ]),
                          ],
                    ],
                    2
                  ),
            ],
            1
          );
        };
      V._withStripped = !0;
      var N = H(
        {
          props: {
            content: String,
            url: String,
            action: Object,
            icon: String,
            image: String,
            disabled: Boolean,
          },
          computed: {
            classes: function () {
              return z.makeComponentClass(
                "Polaris-ActionList__Item",
                ["disabled"],
                this
              );
            },
          },
          methods: {
            handleAction: function (t) {
              var e = !0;
              t.onAction && (e = t.onAction()),
                e && t.url && (window.location.href = t.url);
            },
          },
        },
        V,
        [],
        !1,
        null,
        null,
        null
      );
      N.options.__file = "components/ActionListItem/ActionListItem.vue";
      var j = N.exports,
        R = H(
          {
            props: {
              section: {
                type: Object,
                default: function () {
                  return {};
                },
              },
              hasMultipleSections: Boolean,
            },
            components: { OptionalTag: D, PolarisActionListItem: j },
            computed: {
              classes: function () {
                return {
                  "Polaris-ActionList__Section": 1,
                  "Polaris-ActionList__Section--withoutTitle": !this.section
                    .title,
                };
              },
            },
            methods: {
              wrapAction: function (t) {
                var e = this,
                  a = t.onAction,
                  n = Object.assign({}, t);
                return (
                  a &&
                    (n.onAction = function () {
                      a(), e.$emit("action-any-item", t);
                    }),
                  n
                );
              },
              handleAction: function (t) {
                var e = !0;
                t.onAction && (e = t.onAction()),
                  e && t.url && (window.location.href = t.url),
                  this.$emit("action-any-item", t);
              },
            },
          },
          O,
          [],
          !1,
          null,
          null,
          null
        );
      function U(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return G(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return G(t, e);
            var a = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === a && t.constructor && (a = t.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(t);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return G(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function G(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
        return n;
      }
      R.options.__file = "components/ActionListSection/ActionListSection.vue";
      var W = H(
        {
          components: { DynamicTag: E, PolarisActionListSection: R.exports },
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
            sections: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            finalSections: function () {
              return this.items
                ? [{ items: this.items }].concat(U(this.sections))
                : this.sections;
            },
            hasMultipleSections: function () {
              return this.finalSections.length > 0;
            },
          },
          methods: {
            onActionAnyItem: function (t) {
              this.$emit("action-any-item", t);
            },
            handleAction: function (t) {
              var e = !0;
              t.onAction && (e = t.onAction()),
                e && t.url && (window.location.href = t.url);
            },
          },
        },
        q,
        [],
        !1,
        null,
        null,
        null
      );
      W.options.__file = "components/ActionList/ActionList.vue";
      var Z = W.exports,
        X = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "span",
            { class: t.classes, attrs: { "aria-label": t.label, role: "img" } },
            [
              t.source
                ? a("polaris-image", {
                    staticClass: "Polaris-Avatar__Image",
                    attrs: {
                      role: "presentation",
                      source: t.source,
                      alt: t.alt,
                    },
                  })
                : t._e(),
              t._v(" "),
              t.source || t.customer
                ? t._e()
                : a(
                    "span",
                    {
                      staticClass: "Polaris-Avatar__Initials",
                      attrs: { "aria-hidden": "true" },
                    },
                    [t._v("\n      " + t._s(t.initials) + "\n    ")]
                  ),
              t._v(" "),
              !t.source && t.customer
                ? a("span", {
                    staticClass: "Polaris-Avatar__Image",
                    domProps: { innerHTML: t._s(t.customerSvg) },
                  })
                : t._e(),
            ],
            1
          );
        };
      X._withStripped = !0;
      var J = a(5),
        K = a.n(J),
        Q = a(6),
        Y = a.n(Q),
        tt = a(7),
        et = a.n(tt),
        at = a(8),
        nt = a.n(at),
        it = a(9),
        st = a.n(it),
        lt = a(10),
        ot = a.n(lt),
        rt = a(11),
        ct = a.n(rt),
        ut = a(12),
        dt = a.n(ut),
        pt = a(13),
        ht = a.n(pt),
        vt = [];
      for (var ft in i) vt.push(i[ft]);
      var mt = [
          "styleOne",
          "styleTwo",
          "styleThree",
          "styleFour",
          "styleFive",
          "styleSix",
        ],
        _t = ["small", "medium", "large"],
        gt = H(
          {
            props: {
              size: {
                type: String,
                default: "medium",
                validator: function (t) {
                  return -1 !== _t.indexOf(t);
                },
              },
              alt: String,
              name: String,
              initials: String,
              customer: Boolean,
              source: String,
              accessibilityLabel: String,
            },
            computed: {
              label: function () {
                return (
                  this.accessibilityLabel ||
                  this.name ||
                  (!!this.initials &&
                    "Avatar with initials " +
                      this.initials.split("").join(" ")) ||
                  "Avatar"
                );
              },
              customerSvg: function () {
                return this.customer
                  ? this.customerPlaceholder(this.name || this.initials)
                  : null;
              },
              classes: function () {
                var t = z.makeComponentClass("Polaris-Avatar", ["size"], this);
                return (
                  (t[
                    "Polaris-Avatar--" +
                      this.styleClass(this.name || this.initials)
                  ] = !0),
                  t
                );
              },
            },
            methods: {
              customerPlaceholder: function (t) {
                return t ? vt[t.charCodeAt(0) % vt.length] : vt[0];
              },
              styleClass: function (t) {
                return t ? mt[t.charCodeAt(0) % mt.length] : mt[0];
              },
            },
          },
          X,
          [],
          !1,
          null,
          null,
          null
        );
      gt.options.__file = "components/Avatar/Avatar.vue";
      var bt = gt.exports,
        xt = function () {
          var t = this.$createElement;
          return (this._self._c || t)(
            "span",
            { class: this.classes },
            [this._t("default")],
            2
          );
        };
      xt._withStripped = !0;
      var wt = ["default", "success", "info", "attention", "warning"],
        yt = H(
          {
            props: {
              status: {
                type: String,
                default: "default",
                validator: function (t) {
                  return -1 !== wt.indexOf(t);
                },
              },
            },
            computed: {
              classes: function () {
                return z.makeComponentClass("Polaris-Badge", ["status"], this);
              },
            },
          },
          xt,
          [],
          !1,
          null,
          null,
          null
        );
      yt.options.__file = "components/Badge/Badge.vue";
      var Ct = yt.exports,
        St = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              class: t.classes,
              attrs: {
                tabindex: "0",
                role:
                  "banner " +
                  ("warning" == t.status || "critical" == t.status
                    ? "alert"
                    : ""),
                "aria-describedby": t.realId + "Content",
                "aria-labelledby": t.realId + "Heading",
              },
            },
            [
              t.hasOnDismissHandler
                ? a(
                    "div",
                    { staticClass: "Polaris-Banner__Dismiss" },
                    [
                      a("polaris-button", {
                        attrs: {
                          plain: "",
                          "icon-only": "",
                          "accessibility-label": "Dimiss notification",
                          icon: t.dismissIcon,
                        },
                        on: { click: t.onDismiss },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              a(
                "div",
                { staticClass: "Polaris-Banner__Ribbon" },
                [
                  a("polaris-icon", {
                    attrs: {
                      source: t.iconSource,
                      color: t.iconColor,
                      backdrop: "",
                    },
                  }),
                ],
                1
              ),
              t._v(" "),
              a("div", [
                t.title
                  ? a(
                      "div",
                      {
                        staticClass: "Polaris-Banner__Heading",
                        attrs: { id: t.realId + "Heading" },
                      },
                      [
                        a("polaris-heading", { attrs: { tag: "p" } }, [
                          t._v(t._s(t.title)),
                        ]),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t.$slots.default || t.action || t.secondaryAction || t.children
                  ? a(
                      "div",
                      {
                        staticClass: "Polaris-Banner__Content",
                        attrs: { id: "realId+'Content'" },
                      },
                      [
                        t._t("default", [
                          t.children
                            ? a("div", [t._v(t._s(t.children))])
                            : t._e(),
                        ]),
                        t._v(" "),
                        t.action
                          ? a(
                              "div",
                              { staticClass: "Polaris-Banner__Actions" },
                              [
                                a(
                                  "polaris-button-group",
                                  [
                                    a(
                                      "polaris-button",
                                      {
                                        attrs: {
                                          slot: "1",
                                          outline: "",
                                          url: t.action.url,
                                          destructive: t.action.destructive,
                                          disabled: t.action.disabled,
                                          "accessibility-label":
                                            t.action.accessibilityLabel,
                                          icon: t.action.label,
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.handleAction(t.action);
                                          },
                                        },
                                        slot: "1",
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(t.action.content) +
                                            "\n          "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.secondaryAction
                                      ? a(
                                          "div",
                                          {
                                            staticClass:
                                              "Polaris-Banner__SecondaryAction",
                                            attrs: { slot: "2" },
                                            on: {
                                              click: function (e) {
                                                return t.handleAction(
                                                  t.secondaryAction,
                                                  !0
                                                );
                                              },
                                            },
                                            slot: "2",
                                          },
                                          [
                                            a(
                                              "span",
                                              {
                                                staticClass:
                                                  "Polaris-Banner__Text",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.secondaryAction.content
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      2
                    )
                  : t._e(),
              ]),
            ]
          );
        };
      St._withStripped = !0;
      var Pt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "span",
          { class: t.classes, attrs: { "aria-label": t.accessibilityLabel } },
          [
            "placeholder" !== t.source && t.finalSource
              ? t._e()
              : a("div", { staticClass: "Polaris-Icon__Placeholder" }),
            t._v(" "),
            "placeholder" !== t.source && t.finalSource
              ? a("svg", {
                  staticClass: "Polaris-Icon__Svg",
                  attrs: { viewBox: t.finalSource.viewBox },
                  domProps: { innerHTML: t._s(t.finalSource.body) },
                })
              : t._e(),
          ]
        );
      };
      Pt._withStripped = !0;
      var At = /(<svg[^>]*>|<\/svg>)/g,
        Bt = /viewBox="([^"]*)"/,
        Lt = function (t) {
          return { viewBox: Bt.exec(t)[1], body: t.replace(At, "") };
        },
        kt = a(14),
        Tt = a.n(kt),
        Mt = a(15),
        zt = a.n(Mt),
        It = a(16),
        Ht = a.n(It),
        $t = a(17),
        Ft = a.n($t),
        qt = a(18),
        Et = a.n(qt),
        Ot = a(19),
        Dt = a.n(Ot),
        Vt = a(20),
        Nt = a.n(Vt),
        jt = a(0),
        Rt = a.n(jt),
        Ut = a(21),
        Gt = a.n(Ut),
        Wt = a(22),
        Zt = a.n(Wt),
        Xt = a(1),
        Jt = a.n(Xt),
        Kt = a(2),
        Qt = a.n(Kt),
        Yt = a(3),
        te = a.n(Yt),
        ee = a(23),
        ae = a.n(ee),
        ne = a(24),
        ie = a.n(ne),
        se = a(25),
        le = a.n(se),
        oe = a(26),
        re = a.n(oe),
        ce = a(27),
        ue = a.n(ce),
        de = a(28),
        pe = a.n(de),
        he = a(29),
        ve = a.n(he),
        fe = a(30),
        me = a.n(fe),
        _e = a(31),
        ge = a.n(_e),
        be = a(32),
        xe = a.n(be),
        we = a(33),
        ye = a.n(we),
        Ce = a(34),
        Se = a.n(Ce),
        Pe = a(35),
        Ae = a.n(Pe),
        Be = a(36),
        Le = a.n(Be),
        ke = a(37),
        Te = a.n(ke),
        Me = a(38),
        ze = a.n(Me),
        Ie = a(39),
        He = a.n(Ie),
        $e = a(40),
        Fe = a.n($e),
        qe = a(41),
        Ee = a.n(qe),
        Oe = a(42),
        De = a.n(Oe),
        Ve = a(43),
        Ne = a.n(Ve),
        je = a(44),
        Re = a.n(je),
        Ue = a(45),
        Ge = a.n(Ue),
        We = a(46),
        Ze = a.n(We),
        Xe = a(47),
        Je = a.n(Xe),
        Ke = a(48),
        Qe = a.n(Ke),
        Ye = a(49),
        ta = a.n(Ye),
        ea = a(50),
        aa = a.n(ea),
        na = a(51),
        ia = a.n(na),
        sa = a(52),
        la = a.n(sa),
        oa = a(53),
        ra = a.n(oa),
        ca = {
          add: Tt.a,
          alert: Ht.a,
          arrowDown: Ft.a,
          arrowLeft: Et.a,
          arrowRight: Dt.a,
          arrowUp: Nt.a,
          arrowUpDown: Rt.a,
          adjust: zt.a,
          calendar: Gt.a,
          cancel: Zt.a,
          cancelSmall: Jt.a,
          caretDown: Qt.a,
          caretUp: te.a,
          checkmark: ae.a,
          chevronDown: ie.a,
          chevronLeft: le.a,
          chevronRight: re.a,
          chevronUp: ue.a,
          circleCancel: pe.a,
          circleChevronDown: ve.a,
          circleChevronLeft: me.a,
          circleChevronRight: ge.a,
          circleChevronUp: xe.a,
          circlePlus: ye.a,
          conversation: Se.a,
          delete: Ae.a,
          disable: Le.a,
          dispute: Te.a,
          duplicate: ze.a,
          edit: He.a,
          embed: Fe.a,
          export: Ee.a,
          external: De.a,
          help: Ne.a,
          horizontalDots: Re.a,
          import: Ge.a,
          notes: Ze.a,
          print: Je.a,
          refresh: Qe.a,
          risk: ta.a,
          save: aa.a,
          search: ia.a,
          subtract: la.a,
          view: ra.a,
        },
        ua = H(
          {
            props: {
              color: { type: String, default: "" },
              accessibilityLabel: { type: String, default: "" },
              backdrop: { type: Boolean, default: !1 },
              source: { type: String, default: "", required: !0 },
            },
            computed: {
              finalSource: function () {
                var t = this.source;
                if ("string" == typeof this.source) {
                  var e = ca[this.source];
                  e && (t = e);
                }
                try {
                  return Lt(t);
                } catch (t) {
                  return null;
                }
              },
              classes: function () {
                var t = {
                  "Polaris-Icon": !0,
                  "Polaris-Icon--hasBackdrop": this.backdrop,
                };
                this.color &&
                  (t[
                    "Polaris-Icon--color" +
                      (this.color.charAt(0).toUpperCase() + this.color.slice(1))
                  ] = !0);
                return t;
              },
            },
          },
          Pt,
          [],
          !1,
          null,
          null,
          null
        );
      ua.options.__file = "components/Icon/Icon.vue";
      var da = ua.exports,
        pa = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "dynamic-tag",
            {
              class: t.classes,
              attrs: {
                tag: t.url ? "a" : "button",
                on: { click: t.onClick, blur: t.onBlur, focus: t.onFocus },
                type: !t.url && (t.submit ? "submit" : "button"),
                "aria-label": t.accessibilityLabel,
                "data-polaris-unstyled": t.url,
                href: t.url,
                disabled: t.isDisabled,
                target: !!t.external && "_blank",
                role: t.loading ? "alert" : null,
                "aria-busy": !!t.loading || null,
              },
            },
            [
              t.loading
                ? a(
                    "span",
                    { staticClass: "Polaris-Button__Spinner" },
                    [
                      a("polaris-spinner", {
                        attrs: {
                          size: "small",
                          color: t.spinnerColor,
                          "accessibility-label": "Loading",
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t.icon
                ? a(
                    "span",
                    { staticClass: "Polaris-Button__Icon" },
                    [a("polaris-icon", { attrs: { source: t.realIcon } })],
                    1
                  )
                : t._e(),
              t._v(" "),
              t.$slots.default
                ? a(
                    "span",
                    { staticClass: "Polaris-Button__Content" },
                    [t._t("default")],
                    2
                  )
                : t._e(),
              t._v(" "),
              t.disclosure
                ? a(
                    "span",
                    { staticClass: "Polaris-Button__Icon" },
                    [
                      a("polaris-icon", {
                        attrs: { source: t.disclosureIcon },
                      }),
                    ],
                    1
                  )
                : t._e(),
            ]
          );
        };
      pa._withStripped = !0;
      var ha = ["default", "slim", "large"],
        va = H(
          {
            components: { DynamicTag: E },
            props: {
              primary: { type: Boolean, default: !1 },
              outline: { type: Boolean, default: !1 },
              destructive: { type: Boolean, default: !1 },
              disabled: { type: Boolean, default: !1 },
              loading: { type: Boolean, default: !1 },
              fullWidth: { type: Boolean, default: !1 },
              disclosure: { type: Boolean, default: !1 },
              submit: { type: Boolean, default: !1 },
              plain: { type: Boolean, default: !1 },
              external: { type: Boolean, default: !1 },
              iconOnly: { type: Boolean, default: !1 },
              url: { type: String, default: "" },
              icon: { type: String, default: "" },
              accessibilityLabel: { type: String, default: "" },
              size: {
                type: String,
                default: "default",
                validator: function (t) {
                  return -1 !== ha.indexOf(t);
                },
              },
            },
            computed: {
              disclosureIcon: function () {
                return this.loading ? "placeholder" : "caretDown";
              },
              isDisabled: function () {
                return this.disabled || this.loading;
              },
              realIcon: function () {
                return this.loading ? "placeholder" : this.icon;
              },
              spinnerColor: function () {
                return this.primary || this.destructive
                  ? "white"
                  : "inkLightest";
              },
              classes: function () {
                var t = z.makeComponentClass(
                  "Polaris-Button",
                  [
                    "primary",
                    "outline",
                    "destructive",
                    "fullWidth",
                    "plain",
                    "size",
                    "iconOnly",
                  ],
                  this
                );
                return (
                  this.isDisabled && (t["Polaris-Button--disabled"] = !0), t
                );
              },
            },
            methods: {
              onFocus: function (t) {
                this.$emit("focus");
              },
              onBlur: function (t) {
                this.$emit("blur");
              },
              onClick: function (t) {
                return (
                  !this.disabled &&
                  (this.submit || this.$emit("click", t)) &&
                  !0
                );
              },
            },
          },
          pa,
          [],
          !1,
          null,
          null,
          null
        );
      va.options.__file = "components/Button/Button.vue";
      var fa = va.exports,
        ma = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { class: t.classes },
            [
              t._t("default"),
              t._v(" "),
              t._l(t.$slots, function (e, n) {
                return a(
                  "polaris-button-group-item",
                  { key: n },
                  ["default" !== n ? [t._t(n)] : t._e()],
                  2
                );
              }),
            ],
            2
          );
        };
      ma._withStripped = !0;
      var _a = H(
        {
          props: { segmented: Boolean, default: !1 },
          computed: {
            classes: function () {
              return {
                "Polaris-ButtonGroup": !0,
                "Polaris-ButtonGroup--segmented": this.segmented,
              };
            },
          },
        },
        ma,
        [],
        !1,
        null,
        null,
        null
      );
      _a.options.__file = "components/ButtonGroup/ButtonGroup.vue";
      var ga = _a.exports,
        ba = function () {
          var t = this.$createElement;
          return (this._self._c || t)(
            "dynamic-tag",
            { staticClass: "Polaris-Heading", attrs: { tag: this.tag } },
            [this._t("default")],
            2
          );
        };
      ba._withStripped = !0;
      var xa = H(
        {
          components: { DynamicTag: E },
          props: { tag: { type: String, default: "h2" } },
        },
        ba,
        [],
        !1,
        null,
        null,
        null
      );
      xa.options.__file = "components/Heading/Heading.vue";
      var wa = xa.exports,
        ya = a(54),
        Ca = a.n(ya),
        Sa = a(55),
        Pa = a.n(Sa),
        Aa = a(56),
        Ba = a.n(Aa),
        La = a(57),
        ka = a.n(La),
        Ta = a(58),
        Ma = a.n(Ta),
        za = a(59),
        Ia = a.n(za),
        Ha = ["default", "success", "info", "warning", "critical"],
        $a = H(
          {
            components: {
              PolarisIcon: da,
              PolarisButton: fa,
              PolarisButtonGroup: ga,
              PolarisHeading: wa,
            },
            props: {
              title: String,
              icon: String,
              status: {
                type: String,
                default: "default",
                validator: function (t) {
                  return -1 !== Ha.indexOf(t);
                },
              },
              action: Object,
              secondaryAction: Object,
              children: String,
            },
            data: function () {
              return { dismissIcon: Ia.a };
            },
            methods: {
              handleAction: function (t, e) {
                t.onAction && t.onAction(),
                  e && t.url && (window.location.href = t.url);
              },
              onDismiss: function () {
                this.$emit("dismiss");
              },
            },
            computed: {
              hasOnDismissHandler: function () {
                return this._events.dismiss && this._events.dismiss.length > 0;
              },
              realId: function () {
                return "Banner" + this._uid;
              },
              finalIconSource: function () {
                return this.iconSource;
              },
              iconSource: function () {
                var t = this.icon;
                if (!t)
                  switch (this.status) {
                    case "success":
                      return Ca.a;
                    case "info":
                      return Ma.a;
                    case "warning":
                      return Ba.a;
                    case "critical":
                      return ka.a;
                    default:
                      return Pa.a;
                  }
                return t;
              },
              iconColor: function () {
                switch (this.status) {
                  case "success":
                    return "greenDark";
                  case "info":
                    return "tealDark";
                  case "warning":
                    return "yellowDark";
                  case "critical":
                    return "redDark";
                  default:
                    return "inkLighter";
                }
              },
              classes: function () {
                var t = z.makeComponentClass(
                  "Polaris-Banner",
                  ["status"],
                  this
                );
                return (
                  this.hasOnDismissHandler &&
                    (t["Polaris-Banner--hasDismiss"] = !0),
                  t
                );
              },
            },
          },
          St,
          [],
          !1,
          null,
          null,
          null
        );
      $a.options.__file = "components/Banner/Banner.vue";
      var Fa = $a.exports,
        qa = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "nav",
            { attrs: { role: "navigation" } },
            [
              this.breadcrumbAction
                ? e(
                    "polaris-unstyled-link",
                    {
                      staticClass: "Polaris-Breadcrumbs__Breadcrumb",
                      attrs: { url: this.breadcrumbAction.url },
                    },
                    [
                      e(
                        "span",
                        { staticClass: "Polaris-Breadcrumbs__Icon" },
                        [
                          e("polaris-icon", {
                            attrs: { source: this.chevronIcon },
                          }),
                        ],
                        1
                      ),
                      this._v(
                        "\n    " +
                          this._s(this.breadcrumbAction.content) +
                          "\n  "
                      ),
                    ]
                  )
                : this._e(),
            ],
            1
          );
        };
      qa._withStripped = !0;
      var Ea = a(60),
        Oa = a.n(Ea),
        Da = H(
          {
            props: {
              breadcrumbs: {
                type: Array,
                default: function () {
                  return [];
                },
              },
            },
            data: function () {
              return { chevronIcon: Oa.a };
            },
            computed: {
              breadcrumbAction: function () {
                return this.breadcrumbs.length < 1
                  ? null
                  : this.breadcrumbs[this.breadcrumbs.length - 1];
              },
            },
          },
          qa,
          [],
          !1,
          null,
          null,
          null
        );
      Da.options.__file = "components/Breadcrumbs/Breadcrumbs.vue";
      var Va = Da.exports,
        Na = function () {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            {
              class: t.classes,
              attrs: { tabindex: "-1" },
              on: {
                focusin: function (e) {
                  t.focused = !0;
                },
                focusout: function (e) {
                  t.focused = !1;
                },
              },
            },
            [t._t("default")],
            2
          );
        };
      Na._withStripped = !0;
      var ja = H(
        {
          props: { plain: Boolean },
          data: function () {
            return { focused: !1 };
          },
          computed: {
            classes: function () {
              return z.makeComponentClass(
                "Polaris-ButtonGroup__Item",
                ["focused", "plain"],
                this
              );
            },
          },
        },
        Na,
        [],
        !1,
        null,
        null,
        null
      );
      ja.options.__file = "components/ButtonGroupItem/ButtonGroupItem.vue";
      var Ra = ja.exports,
        Ua = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { class: t.classes },
            [
              t.title || t.actions.length > 0
                ? a(
                    "div",
                    { staticClass: "Polaris-Card__Header" },
                    [
                      t.title && 0 === t.actions.length
                        ? a("h2", { staticClass: "Polaris-Heading" }, [
                            t._v(t._s(t.title)),
                          ])
                        : t._e(),
                      t._v(" "),
                      t.actions.length > 0
                        ? a(
                            "polaris-stack",
                            { attrs: { alignment: "baseline" } },
                            [
                              t.title
                                ? a(
                                    "polaris-stack-item",
                                    { attrs: { fill: "" } },
                                    [
                                      a(
                                        "h2",
                                        { staticClass: "Polaris-Heading" },
                                        [t._v(t._s(t.title))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              a(
                                "polaris-stack-item",
                                [
                                  a(
                                    "polaris-button-group",
                                    t._l(t.actions, function (e, n) {
                                      return a(
                                        "polaris-button",
                                        {
                                          key: e,
                                          attrs: {
                                            slot: n,
                                            url: e.url,
                                            destructive: e.destructive,
                                            disabled: e.disabled,
                                            "accessibility-label":
                                              e.accessiblityLabel,
                                            icon: e.icon,
                                            plain: "",
                                          },
                                          on: {
                                            click: function (a) {
                                              return t.handleAction(e);
                                            },
                                          },
                                          slot: n,
                                        },
                                        [t._v(t._s(e.content))]
                                      );
                                    }),
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t.sectioned ? t._e() : [t._t("default")],
              t._v(" "),
              t.sectioned
                ? [a("polaris-card-section", [t._t("default")], 2)]
                : t._e(),
              t._v(" "),
              t.primaryFooterAction
                ? a(
                    "div",
                    { staticClass: "Polaris-Card__Footer" },
                    [
                      a(
                        "polaris-button-group",
                        [
                          t.primaryFooterAction
                            ? [
                                a(
                                  "polaris-button",
                                  {
                                    attrs: {
                                      slot: "1",
                                      primary: "",
                                      "accessibility-label":
                                        t.primaryFooterAction
                                          .accessibilityLabel,
                                      url: t.primaryFooterAction.url,
                                      disabled: t.primaryFooterAction.disabled,
                                      destructive:
                                        t.primaryFooterAction.destructive,
                                      icon: t.primaryFooterAction.icon,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.handleAction(
                                          t.primaryFooterAction
                                        );
                                      },
                                    },
                                    slot: "1",
                                  },
                                  [t._v(t._s(t.primaryFooterAction.content))]
                                ),
                              ]
                            : t._e(),
                          t._v(" "),
                          t.secondaryFooterAction
                            ? [
                                a(
                                  "polaris-button",
                                  {
                                    attrs: {
                                      slot: "2",
                                      "accessibility-label":
                                        t.secondaryFooterAction
                                          .accessibilityLabel,
                                      url: t.secondaryFooterAction.url,
                                      disabled:
                                        t.secondaryFooterAction.disabled,
                                      destructive:
                                        t.secondaryFooterAction.destructive,
                                      icon: t.secondaryFooterAction.icon,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.handleAction(
                                          t.secondaryFooterAction
                                        );
                                      },
                                    },
                                    slot: "2",
                                  },
                                  [t._v(t._s(t.secondaryFooterAction.content))]
                                ),
                              ]
                            : t._e(),
                        ],
                        2
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            2
          );
        };
      Ua._withStripped = !0;
      var Ga = H(
        {
          props: {
            title: String,
            subdued: Boolean,
            sectioned: Boolean,
            primaryFooterAction: Object,
            secondaryFooterAction: Object,
            actions: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            classes: function () {
              return {
                "Polaris-Card": !0,
                "Polaris-Card--subdued": this.subdued,
              };
            },
          },
          methods: {
            handleAction: function (t) {
              t.onAction && t.onAction();
            },
          },
        },
        Ua,
        [],
        !1,
        null,
        null,
        null
      );
      Ga.options.__file = "components/Card/Card.vue";
      var Wa = Ga.exports,
        Za = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { class: t.classes },
            [
              t.title
                ? a(
                    "div",
                    { staticClass: "Polaris-Card__SectionHeader" },
                    [
                      a("polaris-subheading", { attrs: { tag: "h3" } }, [
                        t._v("\n      " + t._s(t.title) + "\n    "),
                      ]),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t._t("default"),
            ],
            2
          );
        };
      Za._withStripped = !0;
      var Xa = H(
        {
          props: { subdued: Boolean, title: String },
          computed: {
            classes: function () {
              return z.makeComponentClass(
                "Polaris-Card__Section",
                ["subdued"],
                this
              );
            },
          },
        },
        Za,
        [],
        !1,
        null,
        null,
        null
      );
      Xa.options.__file = "components/CardSection/CardSection.vue";
      var Ja = Xa.exports,
        Ka = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("label", { class: t.labelClasses, attrs: { for: t.realId } }, [
              a("span", { staticClass: "Polaris-Choice__Control" }, [
                a("div", { class: t.checkboxClasses }, [
                  a("input", {
                    class: t.inputClasses,
                    attrs: {
                      type: "checkbox",
                      id: t.realId,
                      name: t.name,
                      "aria-invald": 1 == t.error,
                      "aria-describedBy": t.helpTextId + " " + t.errorId,
                      role: "checkbox",
                      "aria-checked": t.indeterminate
                        ? "mixed"
                        : t.checked
                        ? "true"
                        : null,
                      disabled: t.disabled,
                    },
                    domProps: { value: t.value, checked: t.checked },
                    on: {
                      change: t.onChange,
                      focus: t.onFocus,
                      blur: t.onBlur,
                    },
                  }),
                  t._v(" "),
                  a("div", { staticClass: "Polaris-Checkbox__Backdrop" }),
                  t._v(" "),
                  a(
                    "div",
                    { staticClass: "Polaris-Checkbox__Icon" },
                    [a("polaris-icon", { attrs: { source: t.checkIcon } })],
                    1
                  ),
                ]),
              ]),
              t._v(" "),
              a("span", { staticClass: "Polaris-Choice__Label" }, [
                t._v(t._s(t.label)),
              ]),
            ]),
            t._v(" "),
            t.helpText ||
            t.$slots.helpText ||
            (t.error && "string" == typeof t.error)
              ? a("div", { staticClass: "Polaris-Choice__Descriptions" }, [
                  t.error && "string" == typeof t.error
                    ? a(
                        "div",
                        {
                          staticClass: "Polaris-Choice__Error",
                          attrs: { id: "errorId" },
                        },
                        [
                          a(
                            "div",
                            { staticClass: "Polaris-Choice__ErrorIcon" },
                            [
                              a("polaris-icon", {
                                attrs: { source: t.checkboxErrorIcon },
                              }),
                            ],
                            1
                          ),
                          t._v("\n      " + t._s(t.error) + "\n    "),
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.helpText || t.$slots.helpText
                    ? a(
                        "div",
                        {
                          staticClass: "Polaris-Choice__HelpText",
                          attrs: { id: t.helpTextId },
                        },
                        [t._t("helpText", [t._v(t._s(t.helpText))])],
                        2
                      )
                    : t._e(),
                ])
              : t._e(),
          ]);
        };
      Ka._withStripped = !0;
      var Qa = a(61),
        Ya = a.n(Qa),
        tn = H(
          {
            model: { prop: "checked", event: "change" },
            props: {
              label: String,
              labelHidden: Boolean,
              checked: {
                type: [Boolean, String],
                default: !1,
                validator: function (t) {
                  return !t || "string" != typeof t || "indeterminate" === t;
                },
              },
              helpText: String,
              id: String,
              name: String,
              value: String,
              error: Boolean,
              disabled: Boolean,
            },
            data: function () {
              return { checkboxErrorIcon: Ya.a };
            },
            computed: {
              checkIcon: function () {
                return this.indeterminate ? "subtract" : "checkmark";
              },
              indeterminate: function () {
                return "indeterminate" == this.checked;
              },
              realId: function () {
                return this.id || "Checkbox" + this._uid;
              },
              helpTextId: function () {
                return this.helpText ? this.realId + "HelpText" : null;
              },
              errorId: function () {
                return this.error && "string" == typeof this.error
                  ? this.realId + "Error"
                  : null;
              },
              inputClasses: function () {
                return {
                  "Polaris-Checkbox__Input": !0,
                  "Polaris-Checkbox__Input--checked": this.checked,
                  "Polaris-Checkbox__Input--indeterminate": this.indeterminate,
                };
              },
              labelClasses: function () {
                return {
                  "Polaris-Choice": !0,
                  "Polaris-Choice--labelHidden": this.labelHidden,
                };
              },
              checkboxClasses: function () {
                return {
                  "Polaris-Checkbox": !0,
                  "Polaris-Checkbox--error": this.error,
                };
              },
            },
            methods: {
              onChange: function (t) {
                var e = t.target || t.srcElement;
                this.$emit("change", e.checked);
              },
              onFocus: function (t) {
                this.$emit("focus", t);
              },
              onBlur: function (t) {
                this.$emit("blur", t);
              },
            },
          },
          Ka,
          [],
          !1,
          null,
          null,
          null
        );
      tn.options.__file = "components/Checkbox/Checkbox.vue";
      var en = tn.exports,
        an = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("label", { class: t.labelClasses, attrs: { for: t.id } }, [
              a(
                "span",
                { staticClass: "Polaris-Choice__Control" },
                [
                  t.$slots.children
                    ? t._e()
                    : t._t("default", [t._v(t._s(t.children))]),
                  t._v(" "),
                  t._t("children"),
                ],
                2
              ),
              t._v(" "),
              a("span", { staticClass: "Polaris-Choice__Label" }, [
                t._v(t._s(t.label)),
              ]),
            ]),
            t._v(" "),
            "string" == typeof t.error || t.helpText || t.$slots.helpText
              ? a("div", { staticClass: "Polaris-Choice__Descriptions" }, [
                  "string" == typeof t.error
                    ? a(
                        "div",
                        {
                          staticClass: "Polaris-Choice__Error",
                          attrs: { id: t.id + "Error" },
                        },
                        [
                          a(
                            "div",
                            { staticClass: "Polaris-Choice__ErrorIcon" },
                            [
                              a("polaris-icon", {
                                attrs: { source: t.alertIcon },
                              }),
                              t._v("\n        " + t._s(t.error) + "\n      "),
                            ],
                            1
                          ),
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.helpText || t.$slots.helpText
                    ? a(
                        "div",
                        {
                          staticClass: "Polaris-Choice__HelpText",
                          attrs: { id: t.id + "HelpText" },
                        },
                        [t._t("helpText", [t._v(t._s(t.helpText))])],
                        2
                      )
                    : t._e(),
                ])
              : t._e(),
          ]);
        };
      an._withStripped = !0;
      var nn = a(4),
        sn = a.n(nn),
        ln = H(
          {
            props: {
              id: String,
              label: String,
              error: [String, Boolean],
              children: String,
              labelHidden: Boolean,
              helpText: String,
            },
            data: function () {
              return { alertIcon: sn.a };
            },
            computed: {
              labelClasses: function () {
                return z.makeComponentClass(
                  "Polaris-Choice",
                  ["labelHidden"],
                  this
                );
              },
            },
          },
          an,
          [],
          !1,
          null,
          null,
          null
        );
      ln.options.__file = "components/Choice/Choice.vue";
      var on = ln.exports,
        rn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("fieldset", { class: t.classes }, [
            t.title
              ? a("legend", { staticClass: "Polaris-ChoiceList__Title" }, [
                  t._v("\n    " + t._s(t.title) + "\n  "),
                ])
              : t._e(),
            t._v(" "),
            a(
              "ul",
              { staticClass: "Polaris-ChoiceList__Choices" },
              t._l(t.choices, function (e) {
                return a(
                  "li",
                  { key: e.label },
                  [
                    t.allowMultiple
                      ? [
                          a("polaris-checkbox", {
                            attrs: {
                              name: t.finalName,
                              value: e.value,
                              label: e.label,
                              helpText: e.helpText,
                              disabled: t.disabled,
                              checked: t.choiceIsSelected(e),
                            },
                            on: {
                              change: function (a) {
                                return t.handleChange(a, e);
                              },
                            },
                          }),
                        ]
                      : t._e(),
                    t._v(" "),
                    t.allowMultiple
                      ? t._e()
                      : [
                          a("polaris-radio-button", {
                            attrs: {
                              name: t.finalName,
                              value: e.value,
                              label: e.label,
                              helpText: e.helpText,
                              disabled: t.disabled,
                              checked: t.choiceIsSelected(e),
                            },
                            on: {
                              change: function (a) {
                                return t.handleChange(a, e);
                              },
                            },
                          }),
                        ],
                  ],
                  2
                );
              }),
              0
            ),
          ]);
        };
      rn._withStripped = !0;
      var cn = H(
        {
          model: { prop: "selected", event: "change" },
          props: {
            title: String,
            titleHidden: Boolean,
            choices: {
              type: Array,
              default: function () {
                return [];
              },
            },
            selected: {
              type: Array,
              default: function () {
                return [];
              },
            },
            name: String,
            allowMultiple: { type: Boolean, default: !1 },
            disabled: Boolean,
          },
          computed: {
            finalName: function () {
              return this.allowMultiple ? this.name + "[]" : this.name;
            },
            classes: function () {
              return z.makeComponentClass(
                "Polaris-ChoiceList",
                ["titleHidden"],
                this
              );
            },
          },
          methods: {
            choiceIsSelected: function (t) {
              return !!this.selected && this.selected.indexOf(t.value) >= 0;
            },
            handleChange: function (t, e) {
              var a = [];
              t
                ? this.allowMultiple
                  ? (a = (this.selected || []).slice()).push(e.value)
                  : (a = [e.value])
                : (a = (this.selected || []).slice().filter(function (t) {
                    return t !== e.value;
                  })),
                this.$emit("change", a);
            },
          },
        },
        rn,
        [],
        !1,
        null,
        null,
        null
      );
      cn.options.__file = "components/ChoiceList/ChoiceList.vue";
      var un = cn.exports,
        dn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              class: t.classes,
              attrs: {
                role: "group",
                "aria-labelledBy": t.title ? t.id + "Title" : null,
                "aria-describedby": t.helpText ? t.id + "HelpText" : null,
              },
            },
            [
              t.title
                ? a(
                    "div",
                    {
                      staticClass: "Polaris-FormLayout__Title",
                      attrs: { id: t.id + "Title" },
                    },
                    [t._v("\r\n        " + t._s(t.title) + "\r\n    ")]
                  )
                : t._e(),
              t._v(" "),
              a("polaris-form-layout-group-item-wrapper", [t._t("default")], 2),
              t._v(" "),
              t.helpText || t.$slots.helpText
                ? a(
                    "div",
                    {
                      staticClass: "Polaris-FormLayout__HelpText",
                      attrs: { id: t.id + "helpText" },
                    },
                    [
                      t._t("helpText", [
                        t._v(
                          "\r\n            " + t._s(t.helpText) + "\r\n        "
                        ),
                      ]),
                    ],
                    2
                  )
                : t._e(),
            ],
            1
          );
        };
      dn._withStripped = !0;
      var pn = function () {
        var t = this.$createElement;
        return (this._self._c || t)(
          "div",
          { staticClass: "Polaris-FormLayout__Item" },
          [this._t("default")],
          2
        );
      };
      pn._withStripped = !0;
      var hn = H({}, pn, [], !1, null, null, null);
      hn.options.__file = "components/FormLayoutItem/FormLayoutItem.vue";
      var vn = hn.exports,
        fn = H(
          {
            render: function (t) {
              return t(
                "div",
                { class: "Polaris-FormLayout__Items" },
                z.wrapNodesWithComponent(t, this.$slots.default, vn)
              );
            },
          },
          void 0,
          void 0,
          !1,
          null,
          null,
          null
        );
      fn.options.__file =
        "components/FormLayoutGroupItemWrapper/FormLayoutGroupItemWrapper.vue";
      var mn = H(
        {
          polarisName: "FormLayoutGroup",
          components: { PolarisFormLayoutGroupItemWrapper: fn.exports },
          props: {
            children: String,
            condensed: Boolean,
            title: String,
            helpText: String,
          },
          computed: {
            id: function () {
              return "PolarisFormLayoutGroup" + this._uid;
            },
            classes: function () {
              return { "Polaris-FormLayout--condensed": this.condensed };
            },
          },
        },
        dn,
        [],
        !1,
        null,
        null,
        null
      );
      mn.options.__file = "components/FormLayoutGroup/FormLayoutGroup.vue";
      var _n = mn.exports,
        gn = H(
          {
            render: function (t) {
              return t(
                "div",
                { class: "Polaris-FormLayout" },
                z.wrapNodesWithComponent(t, this.$slots.default, vn, [_n])
              );
            },
          },
          void 0,
          void 0,
          !1,
          null,
          null,
          null
        );
      gn.options.__file = "components/FormLayout/FormLayout.vue";
      var bn = gn.exports,
        xn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { class: t.classes }, [
            a(
              "label",
              {
                staticClass: "Polaris-Label__Text",
                attrs: { id: t.uid + "Label", for: t.uid },
              },
              [
                t.$slots.children
                  ? t._e()
                  : t._t("default", [t._v(t._s(t.children))]),
                t._v(" "),
                t._t("children"),
              ],
              2
            ),
          ]);
        };
      xn._withStripped = !0;
      var wn = H(
        {
          props: {
            children: String,
            id: { type: String, default: "" },
            hidden: { type: Boolean, default: !1 },
          },
          computed: {
            uid: function () {
              return "" !== this.id ? this.id : this._uid;
            },
            classes: function () {
              return {
                "Polaris-Label": !0,
                "Polaris-Label--hidden": this.hidden,
              };
            },
          },
          methods: {
            handleAction: function (t) {
              t.onAction && t.onAction();
            },
          },
          created: function () {
            console.log();
          },
        },
        xn,
        [],
        !1,
        null,
        null,
        null
      );
      wn.options.__file = "components/Label/Label.vue";
      var yn = wn.exports,
        Cn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { class: t.classes },
            [
              t.label
                ? a(
                    "div",
                    { staticClass: "Polaris-Labelled__LabelWrapper" },
                    [
                      a(
                        "polaris-label",
                        { attrs: { id: t.id, hidden: !1, action: t.action } },
                        [t._v("\n      " + t._s(t.label) + "\n    ")]
                      ),
                      t._v(" "),
                      t.action
                        ? a(
                            "polaris-button",
                            {
                              attrs: {
                                plain: "",
                                "accessibility-label":
                                  t.action.accessibiltyLabel,
                                url: t.action.url,
                                external: t.action.external,
                                disabled: t.action.disabled,
                                destructive: t.action.destructive,
                                icon: t.action.icon,
                                loading: t.action.loading,
                              },
                              on: {
                                click: function (e) {
                                  return t.handleAction(t.action, !0);
                                },
                              },
                            },
                            [
                              t._v(
                                "\n      " + t._s(t.action.content) + "\n    "
                              ),
                            ]
                          )
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t._t("children"),
              t._v(" "),
              t.$slots.children
                ? t._e()
                : t._t("default", [t._v(t._s(t.children))]),
              t._v(" "),
              t.error && "string" == typeof t.error
                ? a(
                    "div",
                    {
                      staticClass: "Polaris-Labelled__Error",
                      attrs: { id: t.id + "Error" },
                    },
                    [
                      a(
                        "div",
                        { staticClass: "Polaris-Labelled__ErrorIcon" },
                        [a("polaris-icon", { attrs: { source: t.alertIcon } })],
                        1
                      ),
                      t._v("\n    " + t._s(t.error) + "\n  "),
                    ]
                  )
                : t._e(),
              t._v(" "),
              t.helpText || t.$slots.helpText
                ? a(
                    "div",
                    {
                      staticClass: "Polaris-Labelled__HelpText",
                      attrs: { id: t.id + "HelpText" },
                    },
                    [t._t("helpText", [t._v(t._s(t.helpText))])],
                    2
                  )
                : t._e(),
            ],
            2
          );
        };
      Cn._withStripped = !0;
      var Sn = H(
        {
          props: {
            id: String,
            label: String,
            error: [Boolean, String],
            action: Object,
            helpText: String,
            children: String,
            labelHidden: Boolean,
          },
          data: function () {
            return { alertIcon: sn.a };
          },
          computed: {
            classes: function () {
              return {
                "Polaris-Labelled": !0,
                "Polaris-Labelled--hidden": this.labelHidden,
              };
            },
          },
          methods: {
            handleAction: function (t, e) {
              t.onAction && t.onAction(),
                e && t.url && (window.location.href = t.url);
            },
          },
        },
        Cn,
        [],
        !1,
        null,
        null,
        null
      );
      Sn.options.__file = "components/Labelled/Labelled.vue";
      var Pn = Sn.exports,
        An = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "Polaris-Layout" },
            [
              t._l(t.$slots, function (e, n) {
                return t.sectioned
                  ? [a("polaris-layout-section", { key: n }, [t._t(n)], 2)]
                  : t._e();
              }),
              t._v(" "),
              t._l(t.$slots, function (e, a) {
                return t.sectioned ? t._e() : [t._t(a)];
              }),
            ],
            2
          );
        };
      An._withStripped = !0;
      var Bn = H(
        { props: { sectioned: Boolean } },
        An,
        [],
        !1,
        null,
        null,
        null
      );
      Bn.options.__file = "components/Layout/Layout.vue";
      var Ln = Bn.exports,
        kn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "Polaris-Layout__AnnotatedSection" }, [
            a("div", { staticClass: "Polaris-Layout__AnnotationWrapper" }, [
              a(
                "div",
                { staticClass: "Polaris-Layout__Annotation" },
                [
                  a(
                    "polaris-text-container",
                    [
                      a("polaris-heading", { attrs: { tag: "h2" } }, [
                        t._v("\n          " + t._s(t.title) + "\n        "),
                      ]),
                      t._v(" "),
                      t.description
                        ? a("p", [t._v(t._s(t.description))])
                        : t._e(),
                      t._v(" "),
                      t._t("description"),
                    ],
                    2
                  ),
                ],
                1
              ),
              t._v(" "),
              a(
                "div",
                { staticClass: "Polaris-Layout__AnnotationContent" },
                [t._t("default")],
                2
              ),
            ]),
          ]);
        };
      kn._withStripped = !0;
      var Tn = H(
        { props: { title: String, description: String } },
        kn,
        [],
        !1,
        null,
        null,
        null
      );
      Tn.options.__file =
        "components/LayoutAnnotatedSection/LayoutAnnotatedSection.vue";
      var Mn = Tn.exports,
        zn = function () {
          var t = this.$createElement;
          return (this._self._c || t)(
            "div",
            { class: this.classes },
            [this._t("default")],
            2
          );
        };
      zn._withStripped = !0;
      var In = H(
        {
          name: "LayoutSection",
          props: { secondary: Boolean, fullWidth: Boolean },
          computed: {
            classes: function () {
              return z.makeComponentClass(
                "Polaris-Layout__Section",
                ["secondary", "fullWidth"],
                this
              );
            },
          },
        },
        zn,
        [],
        !1,
        null,
        null,
        null
      );
      In.options.__file = "components/LayoutSection/LayoutSection.vue";
      var Hn = In.exports,
        $n = function () {
          var t = this.$createElement;
          return (this._self._c || t)(
            "dynamic-tag",
            { class: this.classes, attrs: { tag: this.tag } },
            [this._t("default")],
            2
          );
        };
      $n._withStripped = !0;
      var Fn = H(
        {
          components: { DynamicTag: E },
          props: { type: { type: String, default: "bullet" } },
          computed: {
            classes: function () {
              return z.makeComponentClass("Polaris-List", ["type"], this);
            },
            tag: function () {
              return "bullet" === this.type ? "ul" : "ol";
            },
          },
        },
        $n,
        [],
        !1,
        null,
        null,
        null
      );
      Fn.options.__file = "components/List/List.vue";
      var qn = Fn.exports,
        En = function () {
          var t = this.$createElement;
          return (this._self._c || t)(
            "li",
            { staticClass: "Polaris-List__Item" },
            [this._t("default")],
            2
          );
        };
      En._withStripped = !0;
      var On = H({}, En, [], !1, null, null, null);
      On.options.__file = "components/ListItem/ListItem.vue";
      var Dn = On.exports,
        Vn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "Polaris-PageActions" },
            [
              a(
                "polaris-stack",
                {
                  attrs: {
                    spacing: "tight",
                    distribution:
                      t.secondaryActions.length > 0
                        ? "equalSpacing"
                        : "trailing",
                  },
                },
                [
                  t.secondaryActions.length > 0
                    ? a(
                        "polaris-stack-item",
                        [
                          a(
                            "polaris-button-group",
                            t._l(t.secondaryActions, function (e, n) {
                              return a(
                                "polaris-button",
                                {
                                  key: n,
                                  attrs: {
                                    slot: n,
                                    "accessibility-label": e.accessibilityLabel,
                                    url: e.url,
                                    disabled: e.disabled,
                                    destructive: e.destructive,
                                  },
                                  on: {
                                    click: function (a) {
                                      return t.handleAction(e);
                                    },
                                  },
                                  slot: n,
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(e.content) +
                                      "\n        "
                                  ),
                                ]
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.primaryAction
                    ? a(
                        "polaris-stack-item",
                        [
                          a(
                            "polaris-button",
                            {
                              attrs: {
                                "accessibility-label":
                                  t.primaryAction.accessibilityLabel,
                                url: t.primaryAction.url,
                                disabled: t.primaryAction.disabled,
                                destructive: t.primaryAction.destructive,
                                primary: "",
                              },
                              on: {
                                click: function (e) {
                                  return t.handleAction(t.primaryAction);
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.primaryAction.content) +
                                  "\n      "
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        };
      Vn._withStripped = !0;
      var Nn = H(
        {
          props: {
            primaryAction: Object,
            secondaryActions: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          methods: {
            handleAction: function (t) {
              t.onAction && t.onAction();
            },
          },
        },
        Vn,
        [],
        !1,
        null,
        null,
        null
      );
      Nn.options.__file = "components/PageActions/PageActions.vue";
      var jn = Nn.exports,
        Rn = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "polaris-choice",
            {
              attrs: {
                label: t.label,
                "label-hidden": t.labelHidden,
                id: t.realId,
                "help-text": t.helpText,
              },
            },
            [
              t.$slots.helpText
                ? a("template", { slot: "helpText" }, [t._t("helpText")], 2)
                : t._e(),
              t._v(" "),
              a("div", { staticClass: "Polaris-RadioButton" }, [
                a("input", {
                  staticClass: "Polaris-RadioButton__Input",
                  attrs: {
                    id: t.realId,
                    name: t.name,
                    type: "radio",
                    disabled: t.disabled,
                    "aria-describedby": t.helpText ? t.id + "HelpText" : "",
                  },
                  domProps: { value: t.value, checked: t.checked },
                  on: { change: t.onChange, focus: t.onFocus, blur: t.onBlur },
                }),
                t._v(" "),
                a("div", { staticClass: "Polaris-RadioButton__Backdrop" }),
                t._v(" "),
                a("div", { staticClass: "Polaris-RadioButton__Icon" }),
              ]),
            ],
            2
          );
        };
      Rn._withStripped = !0;
      var Un = H(
        {
          model: { prop: "checked", event: "change" },
          components: { PolarisChoice: on },
          props: {
            label: String,
            labelHidden: Boolean,
            helpText: String,
            checked: Boolean,
            id: String,
            name: String,
            value: String,
            disabled: Boolean,
          },
          computed: {
            realId: function () {
              return this.id || "PolarisRadioButton" + this._uid;
            },
          },
          methods: {
            onChange: function (t) {
              var e = t.target || t.srcElement;
              this.$emit("change", e.checked);
            },
            onFocus: function () {
              this.$emit("focus");
            },
            onBlur: function () {
              this.$emit("blur");
            },
          },
        },
        Rn,
        [],
        !1,
        null,
        null,
        null
      );
      Un.options.__file = "components/RadioButton/RadioButton.vue";
      var Gn = Un.exports,
        Wn = function () {
          var t = this.$createElement;
          return (this._self._c || t)("svg", {
            class: this.classes,
            attrs: {
              "view-box": this.spinnerSVG.viewBox,
              "aria-label": this.accessibilityLabel,
              role: "status",
            },
            domProps: { innerHTML: this._s(this.spinnerSVG.body) },
          });
        };
      Wn._withStripped = !0;
      var Zn = a(62),
        Xn = a.n(Zn),
        Jn = a(63),
        Kn = a.n(Jn),
        Qn = ["small", "large"],
        Yn = ["white", "teal", "inkLightest"],
        ti = H(
          {
            props: {
              accessibilityLabel: { type: String },
              size: {
                type: String,
                default: "large",
                validator: function (t) {
                  return Qn.indexOf(t) > -1;
                },
              },
              color: {
                type: String,
                default: "teal",
                validator: function (t) {
                  return Yn.indexOf(t) > -1;
                },
              },
            },
            computed: {
              spinnerSVG: function () {
                var t = "large" === this.size ? Xn.a : Kn.a;
                return Lt(t);
              },
              classes: function () {
                return z.makeComponentClass(
                  "Polaris-Spinner",
                  ["color", "size"],
                  this
                );
              },
            },
          },
          Wn,
          [],
          !1,
          null,
          null,
          null
        );
      ti.options.__file = "components/Spinner/Spinner.vue";
      var ei = ti.exports,
        ai = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "polaris-labelled",
            {
              attrs: {
                id: t.realId,
                label: t.label,
                error: t.error,
                action: t.labelAction,
                "label-hidden": t.hiddenLabel,
                "help-text": t.helpText,
              },
            },
            [
              t.$slots.helpText
                ? a("template", { slot: "helpText" }, [t._t("helpText")], 2)
                : t._e(),
              t._v(" "),
              a(
                "div",
                { class: t.classes },
                [
                  a(
                    "select",
                    {
                      staticClass: "Polaris-Select__Input",
                      attrs: {
                        id: t.realId,
                        name: t.name,
                        "aria-invalid": !!t.error,
                        "aria-describedby": t.describedBy,
                        disabled: t.disabled,
                      },
                      domProps: { value: t.value },
                      on: {
                        focus: t.onFocus,
                        blur: t.onBlur,
                        change: t.onChange,
                      },
                    },
                    [
                      t._l(t.options, function (e) {
                        return [
                          "string" == typeof e
                            ? [
                                a(
                                  "option",
                                  { key: e, domProps: { value: e } },
                                  [t._v(t._s(e))]
                                ),
                              ]
                            : [
                                e.hasOwnProperty("title")
                                  ? [
                                      a(
                                        "optgroup",
                                        {
                                          key: e.title,
                                          attrs: { label: e.title },
                                        },
                                        [
                                          t._l(e.optgroup, function (e) {
                                            return [
                                              a(
                                                "option",
                                                {
                                                  key: e.label,
                                                  domProps: { value: e.value },
                                                },
                                                [
                                                  t._v(
                                                    "\n                  " +
                                                      t._s(e.label) +
                                                      "\n                "
                                                  ),
                                                ]
                                              ),
                                            ];
                                          }),
                                        ],
                                        2
                                      ),
                                    ]
                                  : t._e(),
                                t._v(" "),
                                e.hasOwnProperty("title")
                                  ? t._e()
                                  : [
                                      a(
                                        "option",
                                        {
                                          key: e.label,
                                          domProps: { value: e.value },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(e.label) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                    ],
                              ],
                        ];
                      }),
                    ],
                    2
                  ),
                  t._v(" "),
                  [
                    a(
                      "div",
                      {
                        staticClass: "Polaris-Select__Content",
                        attrs: { "aria-hidden": !0, "aria-disabled": !0 },
                      },
                      [
                        t.inlineLabel
                          ? a(
                              "span",
                              { staticClass: "Polaris-Select__InlineLabel" },
                              [
                                t._v(
                                  "\n          " + t._s(t.label) + "\n        "
                                ),
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        t.value || t.theValue || !t.placeholder
                          ? a(
                              "span",
                              { staticClass: "Polaris-Select__SelectedOption" },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.theValue) +
                                    "\n        "
                                ),
                              ]
                            )
                          : a(
                              "span",
                              {
                                staticClass:
                                  "Polaris-Select__SelectedOption Polaris-Select__SelectedOption--Placeholder",
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.placeholder) +
                                    "\n        "
                                ),
                              ]
                            ),
                        t._v(" "),
                        a(
                          "span",
                          { staticClass: "Polaris-Select__Icon" },
                          [
                            a("polaris-icon", {
                              attrs: { source: t.arrowUpDown },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  t._v(" "),
                  a("div", { staticClass: "Polaris-Select__Backdrop" }),
                ],
                2
              ),
            ],
            2
          );
        };
      ai._withStripped = !0;
      var ni = H(
        {
          model: { prop: "value", event: "change" },
          data: function () {
            return { arrowUpDown: Rt.a, theValue: null };
          },
          props: {
            options: {
              type: Array,
              default: function () {
                return [];
              },
            },
            label: String,
            inlineLabel: Boolean,
            labelAction: Object,
            labelHidden: Boolean,
            helpText: String,
            id: String,
            name: String,
            error: [Boolean, String],
            disabled: Boolean,
            value: String,
            placeholder: String,
          },
          computed: {
            realId: function () {
              return this.id || "PolarisSelect" + this._uid;
            },
            classes: function () {
              var t = z.makeComponentClass(
                "Polaris-Select",
                ["disabled"],
                this
              );
              return (
                this.error && (t["Polaris-Select--error"] = !0),
                null == this.value &&
                  null == this.theValue &&
                  null != this.placeholder &&
                  (t["Polaris-Select--placeholder"] = !0),
                t
              );
            },
            hiddenLabel: function () {
              return !!this.inlineLabel || this.labelHidden;
            },
            describedBy: function () {
              var t = [];
              return (
                (this.helpText || this.$slots.helpText) &&
                  t.push(this.realId + "HelpText"),
                this.error &&
                  "string" == typeof this.error &&
                  t.push(this.realId + "Error"),
                t
              );
            },
          },
          methods: {
            onFocus: function () {
              this.$emit("focus");
            },
            onBlur: function () {
              this.$emit("blur");
            },
            onChange: function (t) {
              if (
                (this.$emit("change", t.currentTarget.value),
                void 0 !== this.options[0].value)
              )
                for (var e = 0; e < this.options.length; e++)
                  if (this.options[e].value === t.currentTarget.value)
                    return (this.theValue = this.options[e].label);
              this.theValue = t.currentTarget.value;
            },
          },
          created: function () {
            this.theValue = this.value;
          },
        },
        ai,
        [],
        !1,
        null,
        null,
        null
      );
      ni.options.__file = "components/Select/Select.vue";
      var ii = ni.exports,
        si = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "div",
            { staticClass: "Polaris-SkeletonBodyTextContainer" },
            this._l(this.lines, function (t) {
              return e("div", {
                key: t,
                staticClass: "Polaris-SkeletonBodyText",
              });
            }),
            0
          );
        };
      si._withStripped = !0;
      var li = H(
        { props: { lines: { type: Number, default: 3 } } },
        si,
        [],
        !1,
        null,
        null,
        null
      );
      li.options.__file = "components/SkeletonBodyText/SkeletonBodyText.vue";
      var oi = li.exports,
        ri = function () {
          var t = this.$createElement;
          return (this._self._c || t)("div", { class: this.classes });
        };
      ri._withStripped = !0;
      var ci = ["small", "medium", "large", "extraLarge"],
        ui = H(
          {
            props: {
              size: {
                type: String,
                default: "large",
                validate: function (t) {
                  return ci.indexOf(t) > -1;
                },
              },
            },
            computed: {
              classes: function () {
                var t = z.makeComponentClass(
                  "Polaris-SkeletonDisplayText",
                  ["size"],
                  this
                );
                return (
                  (t["Polaris-SkeletonDisplayText"] = !1),
                  (t["Polaris-SkeletonDisplayText__DisplayText"] = !0),
                  t
                );
              },
            },
          },
          ri,
          [],
          !1,
          null,
          null,
          null
        );
      ui.options.__file =
        "components/SkeletonDisplayText/SkeletonDisplayText.vue";
      var di = ui.exports,
        pi = function () {
          var t = this.$createElement;
          return (this._self._c || t)(
            "div",
            { class: this.classes },
            [this._t("default")],
            2
          );
        };
      pi._withStripped = !0;
      var hi = H(
        {
          polarisName: "polaris-stack-item",
          props: { fill: { type: Boolean, default: !1 } },
          computed: {
            classes: function () {
              return {
                "Polaris-Stack__Item": !0,
                "Polaris-Stack__Item--fill": this.fill,
              };
            },
          },
        },
        pi,
        [],
        !1,
        null,
        null,
        null
      );
      hi.options.__file = "components/StackItem/StackItem.vue";
      var vi = hi.exports,
        fi = ["extraTight", "tight", "loose", "extraLoose", "none"],
        mi = ["leading", "trailing", "center", "fill", "baseline"],
        _i = [
          "equalSpacing",
          "leading",
          "trailing",
          "center",
          "fill",
          "baseline",
          "fillEvenly",
        ],
        gi = H(
          {
            polarisName: "polaris-stack",
            render: function (t) {
              return t(
                "div",
                { class: this.classes },
                z.wrapNodesWithComponent(t, this.$slots.default, vi)
              );
            },
            props: {
              vertical: { type: Boolean, default: !1 },
              wrap: { type: Boolean, default: !1 },
              spacing: {
                type: String,
                default: "tight",
                validator: function (t) {
                  return -1 !== fi.indexOf(t);
                },
              },
              alignment: {
                type: String,
                default: "leading",
                validator: function (t) {
                  return -1 !== mi.indexOf(t);
                },
              },
              distribution: {
                type: String,
                default: "leading",
                validator: function (t) {
                  return -1 !== _i.indexOf(t);
                },
              },
            },
            computed: {
              classes: function () {
                var t = z.makeComponentClass(
                  "Polaris-Stack",
                  ["vertical", "spacing", "alignment", "distribution"],
                  this
                );
                return (t["Polaris-Stack--noWrap"] = !this.wrap), t;
              },
            },
          },
          void 0,
          void 0,
          !1,
          null,
          null,
          null
        );
      gi.options.__file = "components/Stack/Stack.vue";
      var bi = gi.exports,
        xi = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a("div", { staticClass: "Polaris-Tabs__Wrapper" }, [
                a(
                  "ul",
                  { staticClass: "Polaris-Tabs", attrs: { role: "tablist" } },
                  [
                    t._l(t.tabNames, function (e, n) {
                      return [
                        a(
                          "li",
                          {
                            key: n,
                            staticClass: "Polaris-Tabs__TabContainer",
                            attrs: { role: "presentation" },
                          },
                          [
                            a(
                              "button",
                              {
                                class: {
                                  "Polaris-Tabs__Tab": !0,
                                  "Polaris-Tabs__Tab--selected":
                                    t.activeTab === e,
                                },
                                attrs: {
                                  role: "tab",
                                  tabindex: t.activeTab === e ? 0 : -1,
                                },
                                on: {
                                  click: function (a) {
                                    t.activeTab = e;
                                  },
                                },
                              },
                              [
                                a(
                                  "span",
                                  { staticClass: "Polaris-Tabs__Title" },
                                  [t._v(t._s(e))]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ];
                    }),
                  ],
                  2
                ),
              ]),
              t._v(" "),
              t._l(t.tabNames, function (e, n) {
                return [
                  e === t.activeTab
                    ? a(
                        "div",
                        { key: n, staticClass: "Polaris-Tabs__Panel" },
                        [t._t(e)],
                        2
                      )
                    : t._e(),
                ];
              }),
            ],
            2
          );
        };
      xi._withStripped = !0;
      var wi = H(
        {
          model: { prop: "value", event: "change" },
          props: { value: { type: String, default: "" } },
          data: function () {
            return { activeTab: "" };
          },
          computed: {
            tabNames: function () {
              return Object.keys(this.$slots);
            },
          },
          watch: {
            tabNames: function () {
              this.loadActiveTab();
            },
            activeTab: function () {
              this.$emit("change", this.activeTab);
            },
            value: function () {
              this.activeTab = this.value;
            },
          },
          created: function () {
            this.value && this.tabNames.indexOf(this.value) > -1
              ? (this.activeTab = this.value)
              : this.loadActiveTab();
          },
          methods: {
            loadActiveTab: function () {
              !this.activeTab &&
                this.tabNames.length > 0 &&
                (this.activeTab = this.tabNames[0]);
            },
          },
        },
        xi,
        [],
        !1,
        null,
        null,
        null
      );
      wi.options.__file = "components/Tabs/Tabs.vue";
      var yi = wi.exports,
        Ci = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "span",
            {
              staticClass: "Polaris-Tag",
              class: { "Polaris-Tag__pointer": t.hasClickListner },
              on: {
                click: function (e) {
                  return t.$emit("click", e);
                },
              },
            },
            [
              a(
                "span",
                t._b(
                  { staticClass: "Polaris-Tag__Title" },
                  "span",
                  t.$attrs,
                  !1
                ),
                [t._t("default")],
                2
              ),
              t._v(" "),
              t.hasRemoveListener
                ? [
                    a(
                      "button",
                      {
                        staticClass: "Polaris-Tag__Button",
                        attrs: { "aria-label": "Remove" },
                        on: {
                          click: function (e) {
                            return e.stopPropagation(), t.$emit("remove");
                          },
                          mouseUp: t.handleMouseUp,
                        },
                      },
                      [a("polaris-icon", { attrs: { source: t.cancelSmall } })],
                      1
                    ),
                  ]
                : t._e(),
            ],
            2
          );
        };
      Ci._withStripped = !0;
      var Si = H(
        {
          props: {},
          data: function () {
            return { cancelSmall: Jt.a };
          },
          computed: {
            hasClickListner: function () {
              return !!this.$listeners.click;
            },
            hasRemoveListener: function () {
              return !!this.$listeners.remove;
            },
          },
          methods: {
            handleMouseUp: function (t) {
              t.currentTarget.blur();
            },
          },
        },
        Ci,
        [],
        !1,
        null,
        null,
        null
      );
      Si.options.__file = "components/Tag/Tag.vue";
      var Pi = Si.exports,
        Ai = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "polaris-labelled",
            {
              attrs: {
                label: t.label,
                id: t.realId,
                error: t.error,
                action: t.labelAction,
                "label-hidden": t.labelHidden,
                "help-text": t.helpText,
              },
            },
            [
              t.$slots.helpText
                ? a("template", { slot: "helpText" }, [t._t("helpText")], 2)
                : t._e(),
              t._v(" "),
              a(
                "polaris-connected",
                [
                  a(
                    "template",
                    { slot: "left" },
                    [t._t("connectedLeft", [t._v(t._s(t.connectedLeft))])],
                    2
                  ),
                  t._v(" "),
                  a(
                    "template",
                    { slot: "right" },
                    [t._t("connectedRight", [t._v(t._s(t.connectedRight))])],
                    2
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      class: t.classes,
                      on: {
                        focus: t.onFocus,
                        blur: t.onBlur,
                        click: t.onClick,
                      },
                    },
                    [
                      t.prefix
                        ? a(
                            "div",
                            {
                              staticClass: "Polaris-TextField__Prefix",
                              attrs: { id: t.realId + "Prefix" },
                            },
                            [t._v("\n        " + t._s(t.prefix) + "\n      ")]
                          )
                        : t._e(),
                      t._v(" "),
                      t.prefixIcon
                        ? a(
                            "div",
                            {
                              staticClass: "Polaris-TextField__Prefix",
                              attrs: { id: t.realId + "Prefix" },
                            },
                            [
                              a("polaris-icon", {
                                attrs: { source: t.prefixIcon },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      a("dynamic-tag", {
                        ref: "input",
                        staticClass: "Polaris-TextField__Input",
                        style: {
                          height:
                            t.multiline && t.height ? t.height + "px" : null,
                        },
                        attrs: {
                          tag: t.multiline ? "textarea" : "input",
                          name: t.name,
                          id: t.realId,
                          type: t.type,
                          disabled: t.disabled,
                          readonly: t.readOnly,
                          autofocus: t.autoFocus,
                          value: t.value,
                          placeholder: t.placeholder,
                          on: {
                            input: t.handleChange,
                            focus: t.onFocus,
                            blur: t.onBlur,
                          },
                          autocomplete: t.autoComplete,
                          "aria-describedby": t.describedBy,
                          "aria-labelledby": t.labelledBy,
                          "aria-invalid": Boolean(t.error),
                        },
                      }),
                      t._v(" "),
                      t.suffix
                        ? a(
                            "div",
                            {
                              staticClass: "Polaris-TextField__Suffix",
                              attrs: { id: t.realId + "Suffix" },
                            },
                            [t._v("\n        " + t._s(t.suffix) + "\n      ")]
                          )
                        : t._e(),
                      t._v(" "),
                      "number" !== t.type || t.disabled
                        ? t._e()
                        : a("polaris-text-field-spinner", {
                            on: { change: t.handleNumberChange },
                          }),
                      t._v(" "),
                      a("div", { staticClass: "Polaris-TextField__Backdrop" }),
                      t._v(" "),
                      t.multiline
                        ? a("polaris-text-field-resizer", {
                            attrs: {
                              contents: t.value || t.placeholder,
                              "current-height": t.height,
                              "minimum-lines":
                                "number" == typeof t.multiline
                                  ? t.multiline
                                  : 1,
                            },
                            on: { heightchange: t.handleExpandingResize },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            2
          );
        };
      Ai._withStripped = !0;
      var Bi = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          {
            staticClass: "Polaris-TextField__Resizer",
            attrs: { "aria-hidden": "" },
          },
          [
            a("div", {
              ref: "dummyInput",
              staticClass: "Polaris-TextField__DummyInput",
              domProps: { innerHTML: t._s(t.finalContents) },
            }),
            t._v(" "),
            t.minimumLines
              ? a("div", {
                  staticClass: "Polaris-TextField__DummyInput",
                  domProps: { innerHTML: t._s(t.minimumLinesContent) },
                })
              : t._e(),
            t._v("\n  " + t._s(t.minimumLinesContent) + "\n"),
          ]
        );
      };
      Bi._withStripped = !0;
      var Li = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\n": "<br>" },
        ki = /[\n&<>]/g,
        Ti = H(
          {
            props: {
              contents: String,
              currentHeight: Number,
              minimumLines: Number,
            },
            mounted: function () {
              this.handleHeightCheck();
            },
            computed: {
              finalContents: function () {
                return this.contents
                  ? this.contents.replace(ki, this.replaceEntity) + "<br>"
                  : "<br>";
              },
              minimumLinesContent: function () {
                for (var t = "", e = 0; e < this.minimumLines; e++) t += "<br>";
                return t;
              },
            },
            methods: {
              replaceEntity: function (t) {
                return Li[t] || t;
              },
              handleHeightCheck: function () {
                if (
                  null != this.$refs.dummyInput &&
                  null != this.$refs.minimumLines
                ) {
                  var t = this.$refs.dummyInput.offsetHeight,
                    e = this.$refs.minimumLines
                      ? this.$refs.minimumLines.offsetHeight
                      : 0,
                    a = Math.max(t, e);
                  this.currentHeight != a && this.$emit("heightchange", a);
                }
              },
            },
          },
          Bi,
          [],
          !1,
          null,
          null,
          null
        );
      Ti.options.__file = "components/TextFieldResizer/TextFieldResizer.vue";
      var Mi = Ti.exports,
        zi = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "Polaris-TextField__Spinner",
              attrs: { "aria-hidden": "" },
              on: { click: t.onClick },
            },
            [
              a(
                "div",
                {
                  staticClass: "Polaris-TextField__Segment",
                  attrs: { role: "button", tabindex: "-1" },
                  on: {
                    click: function (e) {
                      return t.handleStep(1);
                    },
                  },
                },
                [
                  a(
                    "div",
                    { staticClass: "Polaris-TextField__SpinnerIcon" },
                    [a("polaris-icon", { attrs: { source: t.caretUp } })],
                    1
                  ),
                ]
              ),
              t._v(" "),
              a(
                "div",
                {
                  staticClass: "Polaris-TextField__Segment",
                  attrs: { role: "button", tabindex: "-1" },
                  on: {
                    click: function (e) {
                      return t.handleStep(-1);
                    },
                  },
                },
                [
                  a(
                    "div",
                    { staticClass: "Polaris-TextField__SpinnerIcon" },
                    [a("polaris-icon", { attrs: { source: t.caretDown } })],
                    1
                  ),
                ]
              ),
            ]
          );
        };
      zi._withStripped = !0;
      var Ii = H(
        {
          components: { PolarisIcon: da },
          data: function () {
            return { caretUp: te.a, caretDown: Qt.a };
          },
          methods: {
            onClick: function () {
              this.$emit("click");
            },
            handleStep: function (t) {
              this.$emit("change", t);
            },
          },
        },
        zi,
        [],
        !1,
        null,
        null,
        null
      );
      Ii.options.__file = "components/TextFieldSpinner/TextFieldSpinner.vue";
      var Hi = Ii.exports,
        $i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "Polaris-Connected" },
            [
              t.$slots.left || t.left
                ? a(
                    "polaris-connected-item",
                    { attrs: { position: "Left" } },
                    [t._t("left", [t._v(t._s(t.left))])],
                    2
                  )
                : t._e(),
              t._v(" "),
              a(
                "polaris-connected-item",
                { attrs: { position: "Primary" } },
                [
                  t.$slots.children
                    ? t._e()
                    : t._t("default", [t._v(t._s(t.children))]),
                  t._v(" "),
                  t._t("children"),
                ],
                2
              ),
              t._v(" "),
              t.$slots.right || t.right
                ? a(
                    "polaris-connected-item",
                    { attrs: { position: "Right" } },
                    [t._t("right", [t._v(t._s(t.right))])],
                    2
                  )
                : t._e(),
            ],
            1
          );
        };
      $i._withStripped = !0;
      var Fi = function () {
        var t = this,
          e = t.$createElement;
        return (t._self._c || e)(
          "div",
          {
            class: t.classes,
            on: {
              blur: function (e) {
                t.focused = !1;
              },
              focus: function (e) {
                t.focused = !0;
              },
            },
          },
          [
            t.$slots.children
              ? t._e()
              : t._t("default", [t._v(t._s(t.children))]),
            t._v(" "),
            t._t("children"),
          ],
          2
        );
      };
      Fi._withStripped = !0;
      var qi = H(
        {
          props: {
            position: {
              type: String,
              validate: function (t) {
                return ["Left", "Primary", "Right"].indexOf(t) > -1;
              },
            },
            children: String,
          },
          data: function () {
            return { focused: !1 };
          },
          computed: {
            classes: function () {
              return {
                "Polaris-Connected__Item": !0,
                "Polaris-Connected__Item--focused": this.focused,
                "Polaris-Connected__Item--primary": "Primary" === this.position,
                "Polaris-Connected__Item--connection":
                  "Primary" !== this.position,
              };
            },
          },
        },
        Fi,
        [],
        !1,
        null,
        null,
        null
      );
      qi.options.__file = "components/ConnectedItem/ConnectedItem.vue";
      var Ei = H(
        {
          components: { PolarisConnectedItem: qi.exports },
          props: { left: String, right: String, children: String },
          data: function () {
            return { focused: String };
          },
        },
        $i,
        [],
        !1,
        null,
        null,
        null
      );
      Ei.options.__file = "components/Connected/Connected.vue";
      var Oi = H(
        {
          model: { prop: "value", event: "change" },
          components: {
            DynamicTag: E,
            PolarisTextFieldResizer: Mi,
            PolarisTextFieldSpinner: Hi,
            PolarisConnected: Ei.exports,
          },
          props: {
            prefix: String,
            suffix: String,
            prefixIcon: String,
            placeholder: String,
            value: [String, Number],
            helpText: String,
            label: String,
            labelAction: Object,
            labelHidden: Boolean,
            disabled: Boolean,
            readOnly: Boolean,
            autoFocus: Boolean,
            multiline: [Boolean, Number],
            error: [Boolean, String],
            connectedRight: String,
            connectedLeft: String,
            type: String,
            name: String,
            id: String,
            step: String,
            autoComplete: Boolean,
            max: Number,
            maxLength: Number,
            min: Number,
            minLength: Number,
            pattern: String,
            spellCheck: Boolean,
            focused: Boolean,
          },
          data: function () {
            return { height: null, focus: !1 };
          },
          watch: {
            focused: function () {
              this.focused && !this.focus
                ? this.$refs.input.focus()
                : !this.focused && this.focus && this.$refs.input.blur();
            },
          },
          computed: {
            realId: function () {
              return this.id || "PolarisTextField" + this._uid;
            },
            describedBy: function () {
              var t = [];
              return (
                this.error &&
                  "string" == typeof this.error &&
                  t.push(this.realId + "Error"),
                this.helpText && t.push(this.realId + "HelpText"),
                t.join(" ")
              );
            },
            labelledBy: function () {
              var t = [];
              return (
                this.prefix && t.push(this.realId + "Prefix"),
                this.suffix && t.push(this.realId + "Suffix"),
                t.join(" ")
              );
            },
            classes: function () {
              var t = z.makeComponentClass(
                "Polaris-TextField",
                ["disabled", "readOnly", "multiline", "focus"],
                this
              );
              return (
                this.error && (t["Polaris-TextField--error"] = !0),
                this.value && (t["Polaris-TextField--hasValue"] = !0),
                t
              );
            },
          },
          methods: {
            onFocus: function (t) {
              (this.focus = !0), this.$emit("focus", t.target);
            },
            onBlur: function (t) {
              (this.focus = !1), this.$emit("blur", t.target);
            },
            onClick: function () {
              this.$refs.input.focus();
            },
            handleExpandingResize: function (t) {
              this.height = t;
            },
            handleChange: function (t) {
              this.$emit("change", (t.target || t.srcElement).value);
            },
            handleInputFocus: function () {
              this.$refs.input.focus();
            },
            handleNumberChange: function (t) {
              var e = this.value ? parseFloat(this.value) : 0;
              if (!isNaN(e)) {
                var a = this.min || -1 / 0,
                  n = this.max || 1 / 0,
                  i = this.step || 1,
                  s = Math.min(n, Math.max(a, e + t * i));
                this.$emit("change", s);
              }
            },
          },
        },
        Ai,
        [],
        !1,
        null,
        null,
        null
      );
      Oi.options.__file = "components/TextField/TextField.vue";
      var Di = Oi.exports,
        Vi = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              {
                ref: "modal",
                staticClass: "modal fade",
                class: { show: t.show },
                style: { display: t.show ? "block" : "none" },
                attrs: { id: "ProductModal", role: "dialog" },
              },
              [
                a(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    a(
                      "div",
                      { staticClass: "modal-content" },
                      [
                        a(
                          "polaris-card-section",
                          [
                            a(
                              "polaris-stack",
                              {
                                attrs: {
                                  alignment: "center",
                                  distribution: "equalSpacing",
                                },
                              },
                              [
                                t._v("\n            Header\n            "),
                                a(
                                  "button",
                                  {
                                    staticClass: "modal-btn",
                                    attrs: { type: "button" },
                                    on: { click: t.closeModal },
                                  },
                                  [
                                    a("polaris-icon", {
                                      attrs: {
                                        source: "cancel",
                                        color: "skyDark",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        t._v(" "),
                        a("polaris-card-section", [t._t("default")], 2),
                        t._v(" "),
                        a("polaris-card-section", [t._v("Footer")]),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            t._v(" "),
            a("div", {
              staticClass: "modal-backdrop fade",
              class: { show: t.show },
            }),
          ]);
        };
      Vi._withStripped = !0;
      var Ni = H(
        {
          name: "Modal.vue",
          model: { prop: "show", event: "change" },
          props: {
            show: { type: Boolean, default: !1 },
            closeOnLayout: { type: Boolean, default: !1 },
          },
          watch: {
            show: function () {
              document
                .querySelector("body")
                .classList[this.show ? "add" : "remove"]("modal-open"),
                this.show &&
                  this.closeOnLayout &&
                  this.$refs.modal.addEventListener("click", this.closeOnclick);
            },
          },
          methods: {
            closeOnclick: function (t) {
              "dialog" === t.target.getAttribute("role") && this.closeModal();
            },
            closeModal: function () {
              this.$emit("change", !1),
                this.$refs.modal.removeEventListener(
                  "click",
                  this.closeOnclick
                );
            },
          },
        },
        Vi,
        [],
        !1,
        null,
        null,
        null
      );
      Ni.options.__file = "components/Modal/Modal.vue";
      var ji = Ni.exports,
        Ri = {
          AccountConnection: F,
          ActionList: Z,
          Avatar: bt,
          Badge: Ct,
          Banner: Fa,
          Breadcrumbs: Va,
          Button: fa,
          ButtonGroup: ga,
          ButtonGroupItem: Ra,
          Card: Wa,
          CardSection: Ja,
          Checkbox: en,
          Choice: on,
          ChoiceList: un,
          FormLayout: bn,
          FormLayoutGroup: _n,
          FormLayoutItem: vn,
          Icon: da,
          Label: yn,
          Labelled: Pn,
          Layout: Ln,
          LayoutAnnotatedSection: Mn,
          LayoutSection: Hn,
          List: qn,
          ListItem: Dn,
          PageActions: jn,
          RadioButton: Gn,
          Spinner: ei,
          Select: ii,
          SkeletonBodyText: oi,
          SkeletonDisplayText: di,
          Stack: bi,
          StackItem: vi,
          Tabs: yi,
          Tag: Pi,
          TextField: Di,
          Modal: ji,
        };
      e.default = {
        install: function (t, e) {
          for (var a in ((e = Object.assign(
            {
              componentNameFormat: function (t, e) {
                return "polaris-".concat(e.paramCase(t));
              },
            },
            e
          )),
          z.setComponentNameFormat(e.componentNameFormat),
          Ri)) {
            var n = z.getComponentName(a);
            t.component(n, Ri[a]);
          }
        },
      };
    },
  ]);
});

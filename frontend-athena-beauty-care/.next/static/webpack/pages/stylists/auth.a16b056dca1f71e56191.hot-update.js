"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/auth",{

/***/ "./pages/stylists/auth.js":
/*!********************************!*\
  !*** ./pages/stylists/auth.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auth; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\auth.js",
    _s = $RefreshSig$();




function Auth() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!router.isReady) return;
    var code = router.query.code;
    console.log(code); //if(typeof code === "undefined" || !!code) return router.push("/stylists/calendar");

    localStorage.setItem("authCode", code);
    return router.push("/stylists/calendar");
  }, [router.isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "dashboard"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Auth, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c = Auth;

var _c;

$RefreshReg$(_c, "Auth");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvYXV0aC5hMTZiMDU2ZGNhMWY3MWU1NjE5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZSxTQUFTRSxJQUFULEdBQWlCO0FBQUE7O0FBRTVCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBRVosUUFBRyxDQUFDRSxNQUFNLENBQUNDLE9BQVgsRUFBb0I7QUFFcEIsUUFBUUMsSUFBUixHQUFpQkYsTUFBTSxDQUFDRyxLQUF4QixDQUFRRCxJQUFSO0FBRUFFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBTlksQ0FRWjs7QUFFQUksSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDTCxJQUFqQztBQUVBLFdBQU9GLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLG9CQUFaLENBQVA7QUFFSCxHQWRRLEVBY04sQ0FBQ1IsTUFBTSxDQUFDQyxPQUFSLENBZE0sQ0FBVDtBQWtCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIOztHQXpCdUJGO1VBRUxGOzs7S0FGS0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvYXV0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCAoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2RlKTtcclxuXHJcbiAgICAgICAgLy9pZih0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhIWNvZGUpIHJldHVybiByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9jYWxlbmRhclwiKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhDb2RlXCIsIGNvZGUpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2NhbGVuZGFyXCIpO1xyXG4gICAgICAgXHJcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKSBcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj48L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQXV0aCIsInJvdXRlciIsImlzUmVhZHkiLCJjb2RlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(() => {
var exports = {};
exports.id = "pages/stylists/auth";
exports.ids = ["pages/stylists/auth"];
exports.modules = {

/***/ "./pages/stylists/auth.js":
/*!********************************!*\
  !*** ./pages/stylists/auth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\auth.js";



function Auth() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!router.isReady) return;
    const {
      code
    } = router.query;
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

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/stylists/auth.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc3R5bGlzdHMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNFLElBQVQsR0FBaUI7QUFFNUIsUUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFFWixRQUFHLENBQUNFLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQjtBQUVwQixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBV0YsTUFBTSxDQUFDRyxLQUF4QjtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQU5ZLENBUVo7O0FBRUFJLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixFQUFpQ0wsSUFBakM7QUFFQSxXQUFPRixNQUFNLENBQUNRLElBQVAsQ0FBWSxvQkFBWixDQUFQO0FBRUgsR0FkUSxFQWNOLENBQUNSLE1BQU0sQ0FBQ0MsT0FBUixDQWRNLENBQVQ7QUFrQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7Ozs7Ozs7OztBQzdCRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9wYWdlcy9zdHlsaXN0cy9hdXRoLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCAoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2RlKTtcclxuXHJcbiAgICAgICAgLy9pZih0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhIWNvZGUpIHJldHVybiByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9jYWxlbmRhclwiKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhDb2RlXCIsIGNvZGUpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2NhbGVuZGFyXCIpO1xyXG4gICAgICAgXHJcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKSBcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj48L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkF1dGgiLCJyb3V0ZXIiLCJpc1JlYWR5IiwiY29kZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==
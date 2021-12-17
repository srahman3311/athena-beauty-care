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
    } = router.query; //if(typeof code === "undefined" || !code) return router.push("/stylists/calendar");

    console.log(code); //if(typeof code === "undefined" || !!code) return router.push("/stylists/calendar");

    localStorage.setItem("authCode", code);
    return router.push("/stylists/calendar");
  }, [router.isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "dashboard"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc3R5bGlzdHMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNFLElBQVQsR0FBaUI7QUFFNUIsUUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFFWixRQUFHLENBQUNFLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQjtBQUlwQixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBV0YsTUFBTSxDQUFDRyxLQUF4QixDQU5ZLENBUVo7O0FBRUFDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBVlksQ0FZWjs7QUFFQUksSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDTCxJQUFqQztBQUVBLFdBQU9GLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLG9CQUFaLENBQVA7QUFFSCxHQWxCUSxFQWtCTixDQUFDUixNQUFNLENBQUNDLE9BQVIsQ0FsQk0sQ0FBVDtBQXNCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIOzs7Ozs7Ozs7O0FDakNEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3BhZ2VzL3N0eWxpc3RzL2F1dGguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoICgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgICAgICAvL2lmKHR5cGVvZiBjb2RlID09PSBcInVuZGVmaW5lZFwiIHx8ICFjb2RlKSByZXR1cm4gcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvY2FsZW5kYXJcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvZGUpO1xyXG5cclxuICAgICAgICAvL2lmKHR5cGVvZiBjb2RlID09PSBcInVuZGVmaW5lZFwiIHx8ICEhY29kZSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2NhbGVuZGFyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aENvZGVcIiwgY29kZSk7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvY2FsZW5kYXJcIik7XHJcbiAgICAgICBcclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pIFxyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPjwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQXV0aCIsInJvdXRlciIsImlzUmVhZHkiLCJjb2RlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
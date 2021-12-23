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
    if (!router.isReady) return; // typeof router.query.code is undefined means user has denied access to his/her google calendar. So redirect
    // him/her to the calendar page

    if (typeof router.query.code === "undefined") return router.push("/stylists/calendar"); // User has given the access, now get it from the router.query object

    const {
      code
    } = router.query; // Save the auth code in the localStorage to use it inside the calendar route. 

    localStorage.setItem("authCode", code);
    return router.push("/stylists/calendar");
  }, [router.isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "dashboard"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc3R5bGlzdHMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNFLElBQVQsR0FBaUI7QUFFNUIsUUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFFWixRQUFHLENBQUNFLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQixPQUZSLENBSVo7QUFDQTs7QUFDQSxRQUFHLE9BQU9ELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUFwQixLQUE2QixXQUFoQyxFQUE2QyxPQUFPSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxvQkFBWixDQUFQLENBTmpDLENBUVo7O0FBQ0EsVUFBTTtBQUFFRCxNQUFBQTtBQUFGLFFBQVdILE1BQU0sQ0FBQ0UsS0FBeEIsQ0FUWSxDQVdaOztBQUNBRyxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNILElBQWpDO0FBRUEsV0FBT0gsTUFBTSxDQUFDSSxJQUFQLENBQVksb0JBQVosQ0FBUDtBQUVILEdBaEJRLEVBZ0JOLENBQUNKLE1BQU0sQ0FBQ0MsT0FBUixDQWhCTSxDQUFUO0FBb0JBLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0g7Ozs7Ozs7Ozs7QUMvQkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vcGFnZXMvc3R5bGlzdHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGggKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyB0eXBlb2Ygcm91dGVyLnF1ZXJ5LmNvZGUgaXMgdW5kZWZpbmVkIG1lYW5zIHVzZXIgaGFzIGRlbmllZCBhY2Nlc3MgdG8gaGlzL2hlciBnb29nbGUgY2FsZW5kYXIuIFNvIHJlZGlyZWN0XHJcbiAgICAgICAgLy8gaGltL2hlciB0byB0aGUgY2FsZW5kYXIgcGFnZVxyXG4gICAgICAgIGlmKHR5cGVvZiByb3V0ZXIucXVlcnkuY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2NhbGVuZGFyXCIpOyAgICAgIFxyXG5cclxuICAgICAgICAvLyBVc2VyIGhhcyBnaXZlbiB0aGUgYWNjZXNzLCBub3cgZ2V0IGl0IGZyb20gdGhlIHJvdXRlci5xdWVyeSBvYmplY3RcclxuICAgICAgICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAgICAgLy8gU2F2ZSB0aGUgYXV0aCBjb2RlIGluIHRoZSBsb2NhbFN0b3JhZ2UgdG8gdXNlIGl0IGluc2lkZSB0aGUgY2FsZW5kYXIgcm91dGUuIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aENvZGVcIiwgY29kZSk7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvY2FsZW5kYXJcIik7XHJcbiAgICAgICBcclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pIFxyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPjwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQXV0aCIsInJvdXRlciIsImlzUmVhZHkiLCJxdWVyeSIsImNvZGUiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=
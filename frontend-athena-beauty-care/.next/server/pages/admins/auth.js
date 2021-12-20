"use strict";
(() => {
var exports = {};
exports.id = "pages/admins/auth";
exports.ids = ["pages/admins/auth"];
exports.modules = {

/***/ "./pages/admins/auth.js":
/*!******************************!*\
  !*** ./pages/admins/auth.js ***!
  \******************************/
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
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\auth.js";



function Auth() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!router.isReady) return; // typeof router.query.code is undefined means user has denied access to his/her google calendar. So redirect
    // him/her to the calendar page

    if (typeof router.query.code === "undefined") return router.push("/admins/calendar"); // User has given the access, now get it from the router.query object

    const {
      code
    } = router.query; // Save the auth code in the localStorage to use it inside the calendar route. 

    localStorage.setItem("authCode", code);
    return router.push("/admins/calendar");
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
var __webpack_exports__ = (__webpack_exec__("./pages/admins/auth.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWRtaW5zL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZSxTQUFTRSxJQUFULEdBQWlCO0FBRTVCLFFBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBRVosUUFBRyxDQUFDRSxNQUFNLENBQUNDLE9BQVgsRUFBb0IsT0FGUixDQUlaO0FBQ0E7O0FBQ0EsUUFBRyxPQUFPRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsSUFBcEIsS0FBNkIsV0FBaEMsRUFBNkMsT0FBT0gsTUFBTSxDQUFDSSxJQUFQLENBQVksa0JBQVosQ0FBUCxDQU5qQyxDQVFaOztBQUNBLFVBQU07QUFBRUQsTUFBQUE7QUFBRixRQUFXSCxNQUFNLENBQUNFLEtBQXhCLENBVFksQ0FXWjs7QUFDQUcsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDSCxJQUFqQztBQUVBLFdBQU9ILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGtCQUFaLENBQVA7QUFHSCxHQWpCUSxFQWlCTixDQUFDSixNQUFNLENBQUNDLE9BQVIsQ0FqQk0sQ0FBVDtBQW9CQSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIOzs7Ozs7Ozs7O0FDL0JEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3BhZ2VzL2FkbWlucy9hdXRoLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCAoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHR5cGVvZiByb3V0ZXIucXVlcnkuY29kZSBpcyB1bmRlZmluZWQgbWVhbnMgdXNlciBoYXMgZGVuaWVkIGFjY2VzcyB0byBoaXMvaGVyIGdvb2dsZSBjYWxlbmRhci4gU28gcmVkaXJlY3RcclxuICAgICAgICAvLyBoaW0vaGVyIHRvIHRoZSBjYWxlbmRhciBwYWdlXHJcbiAgICAgICAgaWYodHlwZW9mIHJvdXRlci5xdWVyeS5jb2RlID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gcm91dGVyLnB1c2goXCIvYWRtaW5zL2NhbGVuZGFyXCIpOyAgICAgIFxyXG5cclxuICAgICAgICAvLyBVc2VyIGhhcyBnaXZlbiB0aGUgYWNjZXNzLCBub3cgZ2V0IGl0IGZyb20gdGhlIHJvdXRlci5xdWVyeSBvYmplY3RcclxuICAgICAgICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAgICAgLy8gU2F2ZSB0aGUgYXV0aCBjb2RlIGluIHRoZSBsb2NhbFN0b3JhZ2UgdG8gdXNlIGl0IGluc2lkZSB0aGUgY2FsZW5kYXIgcm91dGUuIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aENvZGVcIiwgY29kZSk7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvYWRtaW5zL2NhbGVuZGFyXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pIFxyXG5cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+PC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJBdXRoIiwicm91dGVyIiwiaXNSZWFkeSIsInF1ZXJ5IiwiY29kZSIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./auth/CheckAuth.js":
/*!***************************!*\
  !*** ./auth/CheckAuth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckAuth": () => (/* binding */ CheckAuth)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);
// Component for checking if user is authenticated or not
//import { useRouter } from "next/router";

const CheckAuth = () => {
  //const router = useRouter();
  const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
  const jwtToken = cookies.get("jwtToken");
  if (typeof jwtToken === "undefined") return false;
  return true;
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_CheckAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/CheckAuth */ "./auth/CheckAuth.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this) // <CheckAuth>
  // </CheckAuth>
  ;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFFM0I7QUFDQSxRQUFNQyxPQUFPLEdBQUcsSUFBSUYseURBQUosRUFBaEI7QUFFQSxRQUFNRyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQVosQ0FBakI7QUFFQSxNQUFHLE9BQU9ELFFBQVAsS0FBb0IsV0FBdkIsRUFBb0MsT0FBTyxLQUFQO0FBRXBDLFNBQU8sSUFBUDtBQUVILENBWE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ0E7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUV2QyxzQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUVFO0FBRUE7QUFKRjtBQVFEOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9hdXRoL0NoZWNrQXV0aC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnQgZm9yIGNoZWNraW5nIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCBvciBub3RcclxuLy9pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja0F1dGggPSAoKSA9PiB7XHJcblxyXG4gICAgLy9jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBqd3RUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiand0VG9rZW5cIik7XHJcblxyXG4gICAgaWYodHlwZW9mIGp3dFRva2VuID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgICBcclxufSIsIi8vXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBDaGVja0F1dGggfSBmcm9tICcuLi9hdXRoL0NoZWNrQXV0aCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgLy8gPENoZWNrQXV0aD5cbiAgICAgIFxuICAgIC8vIDwvQ2hlY2tBdXRoPlxuIFxuICApO1xuIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7Il0sIm5hbWVzIjpbIkNvb2tpZXMiLCJDaGVja0F1dGgiLCJjb29raWVzIiwiand0VG9rZW4iLCJnZXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/login",{

/***/ "./components/reusable-components/UserLogin.js":
/*!*****************************************************!*\
  !*** ./components/reusable-components/UserLogin.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserLogin; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputField */ "./components/reusable-components/InputField.js");
/* harmony import */ var _ServerErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServerErrorMessage */ "./components/reusable-components/ServerErrorMessage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\UserLogin.js";
// Next Modules


 // For google fonts and others
// Stylesheet

 //Images


 // components




function UserLogin(_ref) {
  var emailUsername = _ref.emailUsername,
      password = _ref.password,
      validationError = _ref.validationError,
      serverErrorMessage = _ref.serverErrorMessage,
      handleChange = _ref.handleChange,
      login = _ref.login;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().login_content),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().bgImage),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: "Login Background Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().login_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_4__.default,
          alt: "Cartoon woman"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_5__.default, {
          labelText: "Username or email",
          type: "email",
          name: "emailUsername",
          value: emailUsername,
          placeholder: "type your username or email here",
          validationError: validationError,
          validationErrorMessageFor: "email",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_5__.default, {
          labelText: "Password",
          type: "password",
          name: "password",
          value: password,
          placeholder: "type your password here",
          validationError: validationError,
          validationErrorMessageFor: "password",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_8___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
      serverErrorMessage: serverErrorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}
_c = UserLogin;

var _c;

$RefreshReg$(_c, "UserLogin");

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


/***/ }),

/***/ "./pages/stylists/login.js":
/*!*********************************!*\
  !*** ./pages/stylists/login.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_reusable_components_UserLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/reusable-components/UserLogin */ "./components/reusable-components/UserLogin.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\login.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Next Modules
 // For Redirecting 

 // For google fonts and others

 // React Modules


 // components



function Login() {
  _s();

  // Initializing next router
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      serverErrorMessage = _useState[0],
      setServerErrorMessage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    emailUsername: "",
    password: ""
  }),
      stylistInfo = _useState2[0],
      setStylistInfo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      validationError = _useState3[0],
      setValidationError = _useState3[1];

  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setStylistInfo(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
    });
  }

  function login(event) {
    event.preventDefault();
    var emailUsername = stylistInfo.emailUsername,
        password = stylistInfo.password;
    if (!emailUsername || !password) return setValidationError(true);
    axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:7070/api/stylists/login", stylistInfo, {
      withCredentials: true
    }).then(function (response) {
      var _response$data = response.data,
          email = _response$data.email,
          username = _response$data.username,
          stylistHasAddedGoogleCalendar = _response$data.stylistHasAddedGoogleCalendar;
      console.log(response.data);
      localStorage.setItem("stylistEmail", email);
      localStorage.setItem("stylistUsername", username);
      localStorage.setItem("stylistHasAddedGoogleCalendar", stylistHasAddedGoogleCalendar);
      router.push("/stylists/calendar");
    })["catch"](function (error) {
      return setServerErrorMessage(error.response.data);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().login),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_reusable_components_UserLogin__WEBPACK_IMPORTED_MODULE_5__.default, {
      emailUsername: stylistInfo.emailUsername,
      password: stylistInfo.password,
      validationError: validationError,
      serverErrorMessage: serverErrorMessage,
      handleChange: handleChange,
      login: login
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

_s(Login, "9OYVGvIgRbnTintRlnUcjuOIyA8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uNTc0NWVjN2ZkNWFmY2NjM2E0NGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUM4QjtBQUU5Qjs7Q0FHQTs7QUFFQTtDQUdBOztBQUNBO0FBQ0E7O0FBR2UsU0FBU1EsU0FBVCxPQVFaO0FBQUEsTUFQQ0MsYUFPRCxRQVBDQSxhQU9EO0FBQUEsTUFOQ0MsUUFNRCxRQU5DQSxRQU1EO0FBQUEsTUFMQ0MsZUFLRCxRQUxDQSxlQUtEO0FBQUEsTUFKQ0Msa0JBSUQsUUFKQ0Esa0JBSUQ7QUFBQSxNQUhDQyxZQUdELFFBSENBLFlBR0Q7QUFBQSxNQUZDQyxLQUVELFFBRkNBLEtBRUQ7QUFHQyxzQkFDSTtBQUFLLGFBQVMsRUFBRVgsK0VBQWhCO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUVBLHlFQUFoQjtBQUFBLDZCQUNJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFJQyxxRkFBZDtBQUE0QixXQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU1JO0FBQUssZUFBUyxFQUFFRCwrRUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFJRSw2REFBZDtBQUF5QixhQUFHLEVBQUU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUksaUJBQVMsRUFBRUYsOEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU1JO0FBQU0saUJBQVMsRUFBRUEsbUZBQWpCO0FBQUEsZ0NBQ0ksOERBQUMsZ0RBQUQ7QUFDSSxtQkFBUyxFQUFHLG1CQURoQjtBQUVJLGNBQUksRUFBRyxPQUZYO0FB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b2dpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vL0ltYWdlc1xyXG5cclxuaW1wb3J0IGxvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NhcnRvbi13b21hbi5qcGdcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4vSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgU2VydmVyRXJyb3JNZXNzYWdlIGZyb20gXCIuL1NlcnZlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMb2dpbiAoeyBcclxuICAgIGVtYWlsVXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHZhbGlkYXRpb25FcnJvcixcclxuICAgIHNlcnZlckVycm9yTWVzc2FnZSxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIGxvZ2luXHJcbiAgICBcclxufSkge1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRlbnR9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMgPSB7bG9naW5CZ0ltYWdlfSBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge2xvZ29JbWFnZX0gYWx0ID1cIkNhcnRvb24gd29tYW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5faGVhZGVyfT5IZWxsbyBHb3JnZW91cyE8L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jcmVkZW50aWFsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJVc2VybmFtZSBvciBlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlbWFpbFVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwidHlwZSB5b3VyIHVzZXJuYW1lIG9yIGVtYWlsIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlRm9yID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcInR5cGUgeW91ciBwYXNzd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZUZvciA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2xvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdF9wYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VydmVyRXJyb3JNZXNzYWdlIHNlcnZlckVycm9yTWVzc2FnZSA9IHtzZXJ2ZXJFcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgVXNlckxvZ2luIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvVXNlckxvZ2luXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4gKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3NlcnZlckVycm9yTWVzc2FnZSwgc2V0U2VydmVyRXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0eWxpc3RJbmZvLCBzZXRTdHlsaXN0SW5mb10gPSB1c2VTdGF0ZSh7IGVtYWlsVXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIHNldFN0eWxpc3RJbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbG9naW4gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbFVzZXJuYW1lLCBwYXNzd29yZCB9ID0gc3R5bGlzdEluZm87XHJcblxyXG4gICAgICAgIGlmKCFlbWFpbFVzZXJuYW1lIHx8ICFwYXNzd29yZCkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvbG9naW5cIiwgc3R5bGlzdEluZm8sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgdXNlcm5hbWUsIHN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0RW1haWxcIiwgZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0VXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhclwiLCBzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhcik7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9jYWxlbmRhclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cclxuXHJcbiAgICAgICAgICAgIDxVc2VyTG9naW4gXHJcbiAgICAgICAgICAgICAgICBlbWFpbFVzZXJuYW1lID0ge3N0eWxpc3RJbmZvLmVtYWlsVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA9IHtzdHlsaXN0SW5mby5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7c2VydmVyRXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGxvZ2luID0ge2xvZ2lufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiSGVhZCIsInN0eWxlcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIklucHV0RmllbGQiLCJTZXJ2ZXJFcnJvck1lc3NhZ2UiLCJVc2VyTG9naW4iLCJlbWFpbFVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJsb2dpbiIsImxvZ2luX2NvbnRlbnQiLCJiZ0ltYWdlIiwibG9nbyIsImxvZ2luX2hlYWRlciIsImxvZ2luX2NyZWRlbnRpYWxzIiwibG9naW5fYnV0dG9uIiwiZm9yZ290X3Bhc3N3b3JkIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJheGlvcyIsIkxvZ2luIiwicm91dGVyIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwic3R5bGlzdEluZm8iLCJzZXRTdHlsaXN0SW5mbyIsInNldFZhbGlkYXRpb25FcnJvciIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
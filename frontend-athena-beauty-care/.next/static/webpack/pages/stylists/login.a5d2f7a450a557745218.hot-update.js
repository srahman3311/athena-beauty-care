"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/login",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/reusable-components/ServerErrorMessage */ "./components/reusable-components/ServerErrorMessage.js");
/* harmony import */ var _components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/admins/login/LoginInput */ "./components/admins/login/LoginInput.js");
/* harmony import */ var _components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/InputField */ "./components/reusable-components/InputField.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\login.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Next Modules

 // For Redirecting 


 // For google fonts and others

 // React Modules


 //Images



 // components




function Login() {
  _s();

  // Initializing next router
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      serverErrorMessage = _useState[0],
      setServerErrorMessage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    emailUsername: "",
    password: ""
  }),
      stylistInfo = _useState2[0],
      setStylistInfo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      validationError = _useState3[0],
      setValidationError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    isEmpty: false,
    doesAdminExist: false,
    isPasswordInvalid: false
  }),
      validationErrors = _useState4[0],
      setValidationErrors = _useState4[1];

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
    axios__WEBPACK_IMPORTED_MODULE_6___default().post("http://localhost:7070/api/stylists/login", stylistInfo, {
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
    }) //.catch(error => setServerErrorMessage(error.response.data.msg))
    ["catch"](function (error) {
      return console.log(error.response.data);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().bgImage),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()) // layout and objecFit properties must be set to fill to make the image fit to it's container.  
      , {
        layout: "fill",
        objectFit: "fill",
        src: _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__.default,
        alt: "Login Background Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_8__.default,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_9__.default, {
        serverErrorMessage: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_11__.default, {
          labelText: "Username or email",
          type: "email",
          name: "emailUsername",
          value: stylistInfo.emailUsername,
          placeholder: "type your username or email here",
          validationError: validationError,
          validationErrorMessageFor: "email",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_11__.default, {
          labelText: "Password",
          type: "password",
          name: "password",
          value: stylistInfo.password,
          placeholder: "type your password here",
          validationError: validationError,
          validationErrorMessageFor: "password",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

_s(Login, "kAeA4aePMHfB65wjz0h1Kbl+Lpo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uYTVkMmY3YTQ1MGE1NTc3NDUyMTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ3lDOztBQUN6QztDQUM4Qjs7Q0FHOUI7O0FBQ0E7Q0FLQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTs7QUFFZSxTQUFTYSxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHYixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9TLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NWLCtDQUFRLENBQUM7QUFBRVcsSUFBQUEsYUFBYSxFQUFFLEVBQWpCO0FBQXFCQyxJQUFBQSxRQUFRLEVBQUU7QUFBL0IsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQSxNQUFPZSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBZ0RoQiwrQ0FBUSxDQUFDO0FBQ3JEaUIsSUFBQUEsT0FBTyxFQUFFLEtBRDRDO0FBRXJEQyxJQUFBQSxjQUFjLEVBQUUsS0FGcUM7QUFHckRDLElBQUFBLGlCQUFpQixFQUFFO0FBSGtDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPQyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBUUEsV0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFMUIsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQ7QUFFQVosSUFBQUEsY0FBYyxDQUFDLFVBQUFhLFlBQVksRUFBSTtBQUMzQiw2Q0FDT0Es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SnpCO0FBS0kscUJBQVcsRUFBRyx5QkFMbEI7QUFNSSx5QkFBZSxFQUFJRyxlQU52QjtBQU9JLG1DQUF5QixFQUFHLFVBUGhDO0FBUUksc0JBQVksRUFBSU87QUFScEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQStDSTtBQUFLLGlCQUFTLEVBQUV4QiwrRUFBaEI7QUFBQSwrQkFDSTtBQUFRLGlCQUFPLEVBQUk4QixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQ0osZUFrREksK0RBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUcsbUJBQVMsRUFBRTlCLGtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9FSDs7R0F6SHVCUztVQUdMWjs7O0tBSEtZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxpc3RzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIEZvciBnb29nbGUgZm9udHMgYW5kIG90aGVyc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuLy9JbWFnZXNcclxuaW1wb3J0IGxvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NhcnRvbi13b21hbi5qcGdcIjtcclxuaW1wb3J0IFNlcnZlckVycm9yTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlcnZlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9naW5JbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvbG9naW4vTG9naW5JbnB1dFwiO1xyXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0lucHV0RmllbGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgbmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtzZXJ2ZXJFcnJvck1lc3NhZ2UsIHNldFNlcnZlckVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdHlsaXN0SW5mbywgc2V0U3R5bGlzdEluZm9dID0gdXNlU3RhdGUoeyBlbWFpbFVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvbkVycm9ycywgc2V0VmFsaWRhdGlvbkVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNFbXB0eTogZmFsc2UsXHJcbiAgICAgICAgZG9lc0FkbWluRXhpc3Q6IGZhbHNlLFxyXG4gICAgICAgIGlzUGFzc3dvcmRJbnZhbGlkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBzZXRTdHlsaXN0SW5mbyhjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ2luIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHsgZW1haWxVc2VybmFtZSwgcGFzc3dvcmQgfSA9IHN0eWxpc3RJbmZvO1xyXG5cclxuICAgICAgICBpZighZW1haWxVc2VybmFtZSB8fCAhcGFzc3dvcmQpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2xvZ2luXCIsIHN0eWxpc3RJbmZvLCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHVzZXJuYW1lLCBzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdEVtYWlsXCIsIGVtYWlsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdFVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIiwgc3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvY2FsZW5kYXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vLmNhdGNoKGVycm9yID0+IHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhLm1zZykpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ2luQmdJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9oZWFkZXJ9PkhlbGxvIEdvcmdlb3VzITwvaDI+XHJcbiAgICAgICAgICAgICAgICA8U2VydmVyRXJyb3JNZXNzYWdlIHNlcnZlckVycm9yTWVzc2FnZSA9IHtzZXJ2ZXJFcnJvck1lc3NhZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY3JlZGVudGlhbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA9IFwiVXNlcm5hbWUgb3IgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8uZW1haWxVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcInR5cGUgeW91ciB1c2VybmFtZSBvciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZUZvciA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJ0eXBlIHlvdXIgcGFzc3dvcmQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VGb3IgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TG9naW5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiVXNlcm5hbWUvRW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8uZW1haWxVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBlbWFpbCBvciB1c2VybmFtZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBwYXNzd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtsb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RfcGFzc3dvcmR9PkZvcmdvdCBwYXNzd29yZD88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIkltYWdlIiwiSGVhZCIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJsb2dpbkJnSW1hZ2UiLCJsb2dvSW1hZ2UiLCJTZXJ2ZXJFcnJvck1lc3NhZ2UiLCJMb2dpbklucHV0IiwiSW5wdXRGaWVsZCIsIkxvZ2luIiwicm91dGVyIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwiZW1haWxVc2VybmFtZSIsInBhc3N3b3JkIiwic3R5bGlzdEluZm8iLCJzZXRTdHlsaXN0SW5mbyIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsImlzRW1wdHkiLCJkb2VzQWRtaW5FeGlzdCIsImlzUGFzc3dvcmRJbnZhbGlkIiwidmFsaWRhdGlvbkVycm9ycyIsInNldFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZSIsImxvZ2luIiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwiYmdJbWFnZSIsImxvZ2luX2NvbnRlbnQiLCJsb2dvIiwibG9naW5faGVhZGVyIiwibG9naW5fY3JlZGVudGlhbHMiLCJsb2dpbl9idXR0b24iLCJmb3Jnb3RfcGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9
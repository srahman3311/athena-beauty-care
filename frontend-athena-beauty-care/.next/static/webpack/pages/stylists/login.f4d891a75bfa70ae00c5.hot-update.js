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
    event.preventDefault(); // Form Validation

    if (!stylistInfo.emailUsername || !stylistInfo.password) {
      return setValidationErrors(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          isEmpty: true
        });
      });
    }

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
        lineNumber: 80,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
          lineNumber: 91,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_9__.default, {
        serverErrorMessage: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_11__.default, {
          labelText: "Username or email",
          type: "email",
          name: "emailUsername",
          value: stylistInfo.emailUsername,
          placeholder: "type your username/email here",
          validationError: validationError,
          validationErrorMessageFor: "email",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uZjRkODkxYTc1YmZhNzBhZTAwYzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ3lDOztBQUN6QztDQUM4Qjs7Q0FHOUI7O0FBQ0E7Q0FLQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTs7QUFFZSxTQUFTYSxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHYixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9TLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NWLCtDQUFRLENBQUM7QUFBRVcsSUFBQUEsYUFBYSxFQUFFLEVBQWpCO0FBQXFCQyxJQUFBQSxRQUFRLEVBQUU7QUFBL0IsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQSxNQUFPZSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBZ0RoQiwrQ0FBUSxDQUFDO0FBQ3JEaUIsSUFBQUEsT0FBTyxFQUFFLEtBRDRDO0FBRXJEQyxJQUFBQSxjQUFjLEVBQUUsS0FGcUM7QUFHckRDLElBQUFBLGlCQUFpQixFQUFFO0FBSGtDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPQyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBUUEsV0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFMUIsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQ7QUFFQVosSUFBQUEsY0FBYyxDQUFDLFVBQUFhLFlBQVksRUFBSTtBQUMzQiw2Q0FDT0Es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SFg7QUFJSSxlQUFLLEVBQUlULFdBQVcsQ0FBQ0QsUUFKekI7QUFLSSxxQkFBVyxFQUFHLHlCQUxsQjtBQU1JLHlCQUFlLEVBQUlHLGVBTnZCO0FBT0ksbUNBQXlCLEVBQUcsVUFQaEM7QUFRSSxzQkFBWSxFQUFJTztBQVJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBK0NJO0FBQUssaUJBQVMsRUFBRXhCLCtFQUFoQjtBQUFBLCtCQUNJO0FBQVEsaUJBQU8sRUFBSThCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9DSixlQWtESSwrREFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBRyxtQkFBUyxFQUFFOUIsa0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0VIOztHQTFIdUJTO1VBR0xaOzs7S0FIS1kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG4vL0ltYWdlc1xyXG5pbXBvcnQgbG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZ1wiO1xyXG5pbXBvcnQgU2VydmVyRXJyb3JNZXNzYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VydmVyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMb2dpbklucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9sb2dpbi9Mb2dpbklucHV0XCI7XHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4gKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3NlcnZlckVycm9yTWVzc2FnZSwgc2V0U2VydmVyRXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0eWxpc3RJbmZvLCBzZXRTdHlsaXN0SW5mb10gPSB1c2VTdGF0ZSh7IGVtYWlsVXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3JzLCBzZXRWYWxpZGF0aW9uRXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpc0VtcHR5OiBmYWxzZSxcclxuICAgICAgICBkb2VzQWRtaW5FeGlzdDogZmFsc2UsXHJcbiAgICAgICAgaXNQYXNzd29yZEludmFsaWQ6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIHNldFN0eWxpc3RJbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbG9naW4gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgLy8gRm9ybSBWYWxpZGF0aW9uXHJcbiAgICAgICAgaWYoIXN0eWxpc3RJbmZvLmVtYWlsVXNlcm5hbWUgfHwgIXN0eWxpc3RJbmZvLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3JzKGN1cnJlbnRWYWx1ZSA9PiB7IHJldHVybiB7Li4uY3VycmVudFZhbHVlLCBpc0VtcHR5OiB0cnVlfSB9KTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0cy9sb2dpblwiLCBzdHlsaXN0SW5mbywge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtYWlsLCB1c2VybmFtZSwgc3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0eWxpc3RFbWFpbFwiLCBlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0eWxpc3RVc2VybmFtZVwiLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIsIHN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2NhbGVuZGFyXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLy5jYXRjaChlcnJvciA9PiBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0IGFuZCBvYmplY0ZpdCBwcm9wZXJ0aWVzIG11c3QgYmUgc2V0IHRvIGZpbGwgdG8gbWFrZSB0aGUgaW1hZ2UgZml0IHRvIGl0J3MgY29udGFpbmVyLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dpbkJnSW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ2luIEJhY2tncm91bmQgSW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb0ltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5faGVhZGVyfT5IZWxsbyBHb3JnZW91cyE8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFNlcnZlckVycm9yTWVzc2FnZSBzZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7c2VydmVyRXJyb3JNZXNzYWdlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NyZWRlbnRpYWxzfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgPSBcIlVzZXJuYW1lIG9yIGVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLmVtYWlsVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJ0eXBlIHlvdXIgdXNlcm5hbWUvZW1haWwgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VGb3IgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA9IFwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwidHlwZSB5b3VyIHBhc3N3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlRm9yID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlVzZXJuYW1lL0VtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLmVtYWlsVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJUeXBlIHlvdXIgZW1haWwgb3IgdXNlcm5hbWUgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMgPSB7dmFsaWRhdGlvbkVycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dpbklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJUeXBlIHlvdXIgcGFzc3dvcmQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMgPSB7dmFsaWRhdGlvbkVycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bG9naW59PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290X3Bhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwibG9naW5CZ0ltYWdlIiwibG9nb0ltYWdlIiwiU2VydmVyRXJyb3JNZXNzYWdlIiwiTG9naW5JbnB1dCIsIklucHV0RmllbGQiLCJMb2dpbiIsInJvdXRlciIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImVtYWlsVXNlcm5hbWUiLCJwYXNzd29yZCIsInN0eWxpc3RJbmZvIiwic2V0U3R5bGlzdEluZm8iLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJpc0VtcHR5IiwiZG9lc0FkbWluRXhpc3QiLCJpc1Bhc3N3b3JkSW52YWxpZCIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdXJyZW50VmFsdWUiLCJsb2dpbiIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlbWFpbCIsInVzZXJuYW1lIiwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJlcnJvciIsImJnSW1hZ2UiLCJsb2dpbl9jb250ZW50IiwibG9nbyIsImxvZ2luX2hlYWRlciIsImxvZ2luX2NyZWRlbnRpYWxzIiwibG9naW5fYnV0dG9uIiwiZm9yZ290X3Bhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==
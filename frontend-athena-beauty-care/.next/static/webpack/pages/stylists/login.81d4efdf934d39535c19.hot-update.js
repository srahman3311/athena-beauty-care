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
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/reusable-components/InputField */ "./components/reusable-components/InputField.js");
/* harmony import */ var _components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusable-components/ServerErrorMessage */ "./components/reusable-components/ServerErrorMessage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
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
    })["catch"](function (error) {
      return setServerErrorMessage(error.response.data);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().bgImage),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()) // layout and objecFit properties must be set to fill to make the image fit to it's container.  
      , {
        layout: "fill",
        objectFit: "fill",
        src: _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__.default,
        alt: "Login Background Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_8__.default,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_10__.default, {
        serverErrorMessage: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_9__.default, {
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
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_9__.default, {
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
          lineNumber: 99,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, this);
}

_s(Login, "9OYVGvIgRbnTintRlnUcjuOIyA8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uODFkNGVmZGY5MzRkMzk1MzVjMTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FDeUM7O0FBQ3pDO0NBQzhCOztDQUc5Qjs7QUFDQTtDQUtBOztBQUNBO0NBSUE7O0FBQ0E7QUFDQTs7QUFFZSxTQUFTWSxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9RLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NULCtDQUFRLENBQUM7QUFBRVUsSUFBQUEsYUFBYSxFQUFFLEVBQWpCO0FBQXFCQyxJQUFBQSxRQUFRLEVBQUU7QUFBL0IsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDYiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQSxNQUFPYyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFHQSxXQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQix3QkFBd0JBLEtBQUssQ0FBQ0MsTUFBOUI7QUFBQSxRQUFRQyxJQUFSLGlCQUFRQSxJQUFSO0FBQUEsUUFBY0MsS0FBZCxpQkFBY0EsS0FBZDtBQUVBUCxJQUFBQSxjQUFjLENBQUMsVUFBQVEsWUFBWSxFQUFJO0FBQzNCLDZDQUNPQSxZQURQLHVNQUVLRixJQUZMLEVBRVlDLEtBRlo7QUFJSCxLQUxhLENBQWQ7QUFNSDs7QUFHRCxXQUFTRSxLQUFULENBQWdCTCxLQUFoQixFQUF1QjtBQUVuQkEsSUFBQUEsS0FBSyxDQUFDTSxjQUFOO0FBR0EsUUFBUWIsYUFBUixHQUFvQ0UsV0FBcEMsQ0FBUUYsYUFBUjtBQUFBLFFBQXVCQyxRQUF2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LCtCQUNJO0FBQVEsaUJBQU8sRUFBSXdCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCSixlQWdDSSwrREFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBRyxtQkFBUyxFQUFFeEIsa0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaURIOztHQS9GdUJRO1VBR0xYOzs7S0FIS1ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG4vL0ltYWdlc1xyXG5pbXBvcnQgbG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZ1wiO1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBTZXJ2ZXJFcnJvck1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZXJ2ZXJFcnJvck1lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgbmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtzZXJ2ZXJFcnJvck1lc3NhZ2UsIHNldFNlcnZlckVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdHlsaXN0SW5mbywgc2V0U3R5bGlzdEluZm9dID0gdXNlU3RhdGUoeyBlbWFpbFVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBzZXRTdHlsaXN0SW5mbyhjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ2luIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHsgZW1haWxVc2VybmFtZSwgcGFzc3dvcmQgfSA9IHN0eWxpc3RJbmZvO1xyXG5cclxuICAgICAgICBpZighZW1haWxVc2VybmFtZSB8fCAhcGFzc3dvcmQpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2xvZ2luXCIsIHN0eWxpc3RJbmZvLCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHVzZXJuYW1lLCBzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdEVtYWlsXCIsIGVtYWlsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdFVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIiwgc3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvY2FsZW5kYXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ2luQmdJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9oZWFkZXJ9PkhlbGxvIEdvcmdlb3VzITwvaDI+XHJcbiAgICAgICAgICAgICAgICA8U2VydmVyRXJyb3JNZXNzYWdlIHNlcnZlckVycm9yTWVzc2FnZSA9IHtzZXJ2ZXJFcnJvck1lc3NhZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY3JlZGVudGlhbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA9IFwiVXNlcm5hbWUgb3IgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8uZW1haWxVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcInR5cGUgeW91ciB1c2VybmFtZSBvciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZUZvciA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJ0eXBlIHlvdXIgcGFzc3dvcmQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VGb3IgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtsb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RfcGFzc3dvcmR9PkZvcmdvdCBwYXNzd29yZD88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwibG9naW5CZ0ltYWdlIiwibG9nb0ltYWdlIiwiSW5wdXRGaWVsZCIsIlNlcnZlckVycm9yTWVzc2FnZSIsIkxvZ2luIiwicm91dGVyIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwiZW1haWxVc2VybmFtZSIsInBhc3N3b3JkIiwic3R5bGlzdEluZm8iLCJzZXRTdHlsaXN0SW5mbyIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFZhbHVlIiwibG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZW1haWwiLCJ1c2VybmFtZSIsInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZXJyb3IiLCJiZ0ltYWdlIiwibG9naW5fY29udGVudCIsImxvZ28iLCJsb2dpbl9oZWFkZXIiLCJsb2dpbl9jcmVkZW50aWFscyIsImxvZ2luX2J1dHRvbiIsImZvcmdvdF9wYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=
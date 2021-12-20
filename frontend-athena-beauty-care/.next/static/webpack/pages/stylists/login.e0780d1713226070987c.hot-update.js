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
        lineNumber: 74,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
          lineNumber: 85,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_10__.default, {
        serverErrorMessage: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 91,
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
          lineNumber: 101,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uZTA3ODBkMTcxMzIyNjA3MDk4N2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FDeUM7O0FBQ3pDO0NBQzhCOztDQUc5Qjs7QUFDQTtDQUtBOztBQUNBO0NBSUE7O0FBQ0E7QUFDQTs7QUFFZSxTQUFTWSxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9RLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NULCtDQUFRLENBQUM7QUFBRVUsSUFBQUEsYUFBYSxFQUFFLEVBQWpCO0FBQXFCQyxJQUFBQSxRQUFRLEVBQUU7QUFBL0IsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQThDYiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQSxNQUFPYyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFLQSxXQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQix3QkFBd0JBLEtBQUssQ0FBQ0MsTUFBOUI7QUFBQSxRQUFRQyxJQUFSLGlCQUFRQSxJQUFSO0FBQUEsUUFBY0MsS0FBZCxpQkFBY0EsS0FBZDtBQUVBUCxJQUFBQSxjQUFjLENBQUMsVUFBQVEsWUFBWSxFQUFJO0FBQzNCLDZDQUNPQSxZQURQLHVNQUVLRixJQUZMLEVBRVlDLEtBRlo7QUFJSCxLQUxhLENBQWQ7QUFNSDs7QUFHRCxXQUFTRSxLQUFULENBQWdCTCxLQUFoQixFQUF1QjtBQUVuQkEsSUFBQUEsS0FBSyxDQUFDTSxjQUFOO0FBR0EsUUFBUWIsYUFBUixHQUFvQ0UsV0FBcEMsQ0FBUUYsYUFBUjtBQUFBLFFBQXVCQyxRQUF2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LCtCQUNJO0FBQVEsaUJBQU8sRUFBSXdCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9DSixlQWtESSwrREFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBRyxtQkFBUyxFQUFFeEIsa0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0VIOztHQXBIdUJRO1VBR0xYOzs7S0FIS1ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG4vL0ltYWdlc1xyXG5pbXBvcnQgbG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZ1wiO1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBTZXJ2ZXJFcnJvck1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZXJ2ZXJFcnJvck1lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgbmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtzZXJ2ZXJFcnJvck1lc3NhZ2UsIHNldFNlcnZlckVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdHlsaXN0SW5mbywgc2V0U3R5bGlzdEluZm9dID0gdXNlU3RhdGUoeyBlbWFpbFVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIFxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIHNldFN0eWxpc3RJbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbG9naW4gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbFVzZXJuYW1lLCBwYXNzd29yZCB9ID0gc3R5bGlzdEluZm87XHJcblxyXG4gICAgICAgIGlmKCFlbWFpbFVzZXJuYW1lIHx8ICFwYXNzd29yZCkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvbG9naW5cIiwgc3R5bGlzdEluZm8sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgdXNlcm5hbWUsIHN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0RW1haWxcIiwgZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0VXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhclwiLCBzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhcik7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9jYWxlbmRhclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9naW5CZ0ltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2hlYWRlcn0+SGVsbG8gR29yZ2VvdXMhPC9oMj5cclxuICAgICAgICAgICAgICAgIDxTZXJ2ZXJFcnJvck1lc3NhZ2Ugc2VydmVyRXJyb3JNZXNzYWdlID0ge3NlcnZlckVycm9yTWVzc2FnZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jcmVkZW50aWFsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJVc2VybmFtZSBvciBlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5lbWFpbFVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwidHlwZSB5b3VyIHVzZXJuYW1lIG9yIGVtYWlsIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlRm9yID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcInR5cGUgeW91ciBwYXNzd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZUZvciA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxMb2dpbklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJVc2VybmFtZS9FbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5lbWFpbFVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiVHlwZSB5b3VyIGVtYWlsIG9yIHVzZXJuYW1lIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzID0ge3ZhbGlkYXRpb25FcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9naW5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiVHlwZSB5b3VyIHBhc3N3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzID0ge3ZhbGlkYXRpb25FcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2xvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdF9wYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIklucHV0RmllbGQiLCJTZXJ2ZXJFcnJvck1lc3NhZ2UiLCJMb2dpbiIsInJvdXRlciIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImVtYWlsVXNlcm5hbWUiLCJwYXNzd29yZCIsInN0eWxpc3RJbmZvIiwic2V0U3R5bGlzdEluZm8iLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZSIsImxvZ2luIiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwiYmdJbWFnZSIsImxvZ2luX2NvbnRlbnQiLCJsb2dvIiwibG9naW5faGVhZGVyIiwibG9naW5fY3JlZGVudGlhbHMiLCJsb2dpbl9idXR0b24iLCJmb3Jnb3RfcGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9
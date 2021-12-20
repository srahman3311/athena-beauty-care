"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/login",{

/***/ "./pages/admins/login.js":
/*!*******************************!*\
  !*** ./pages/admins/login.js ***!
  \*******************************/
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


var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\login.js",
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
      adminInfo = _useState2[0],
      setAdminInfo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      validationError = _useState3[0],
      setValidationError = _useState3[1];

  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setAdminInfo(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
    });
  }

  function login(event) {
    event.preventDefault();
    var emailUsername = adminInfo.emailUsername,
        password = adminInfo.password;
    if (!emailUsername || !password) return setValidationError(true);
    axios__WEBPACK_IMPORTED_MODULE_6___default().post("http://localhost:7070/api/admins/login", adminInfo, {
      withCredentials: true
    }).then(function (response) {
      var _response$data = response.data,
          email = _response$data.email,
          username = _response$data.username,
          adminHasAddedGoogleCalendar = _response$data.adminHasAddedGoogleCalendar;
      console.log(response.data);
      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminUsername", username);
      localStorage.setItem("adminHasAddedGoogleCalendar", adminHasAddedGoogleCalendar);
      router.push("/admins/calendar");
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
        lineNumber: 70,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
          lineNumber: 81,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_10__.default, {
        serverErrorMessage: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_9__.default, {
          labelText: "Username or email",
          type: "email",
          name: "emailUsername",
          value: adminInfo.emailUsername,
          placeholder: "type your username or email here",
          validationError: validationError,
          validationErrorMessageFor: "email",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_reusable_components_InputField__WEBPACK_IMPORTED_MODULE_9__.default, {
          labelText: "Password",
          type: "password",
          name: "password",
          value: adminInfo.password,
          placeholder: "type your password here",
          validationError: validationError,
          validationErrorMessageFor: "password",
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_12___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

_s(Login, "rKiStylWp0VAX6F+AtzAAYjdZq0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2xvZ2luLjU1MjAzNGM4MTA0Y2QyZDc1NTI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ3lDOztBQUN6QztDQUM4Qjs7Q0FHOUI7O0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBR2UsU0FBU1ksS0FBVCxHQUFrQjtBQUFBOztBQUU3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR1osc0RBQVMsRUFBeEI7O0FBRUEsa0JBQW9ESywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPUSxrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQWtDVCwrQ0FBUSxDQUFDO0FBQUVVLElBQUFBLGFBQWEsRUFBRSxFQUFqQjtBQUFxQkMsSUFBQUEsUUFBUSxFQUFFO0FBQS9CLEdBQUQsQ0FBMUM7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE4Q2IsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUEsTUFBT2MsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBR0EsV0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFMUIsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQ7QUFFQVAsSUFBQUEsWUFBWSxDQUFDLFVBQUFRLFlBQVksRUFBSTtBQUN6Qiw2Q0FDT0EsWUFEUCx1TUFFS0YsSUFGTCxFQUVZQyxLQUZaO0FBSUgsS0FMVyxDQUFaO0FBTUg7O0FBR0QsV0FBU0UsS0FBVCxDQUFnQkwsS0FBaEIsRUFBdUI7QUFFbkJBLElBQUFBLEtBQUssQ0FBQ00sY0FBTjtBQUdBLFFBQVFiLGFBQVIsR0FBb0NFLFNBQXBDLENBQVFGLGFBQVI7QUFBQSxRQUF1QkMsUUFBdkIs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QUNJO0FBQVEsaUJBQU8sRUFBSXdCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCSixlQWdDSSwrREFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBRyxtQkFBUyxFQUFFeEIsa0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaURIOztHQS9GdUJRO1VBR0xYOzs7S0FIS1ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIEZvciBnb29nbGUgZm9udHMgYW5kIG90aGVyc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vSW1hZ2VzXHJcbmltcG9ydCBsb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9jYXJ0b24td29tYW4uanBnXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgU2VydmVyRXJyb3JNZXNzYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VydmVyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4gKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3NlcnZlckVycm9yTWVzc2FnZSwgc2V0U2VydmVyRXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2FkbWluSW5mbywgc2V0QWRtaW5JbmZvXSA9IHVzZVN0YXRlKHsgZW1haWxVc2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICBcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgc2V0QWRtaW5JbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbG9naW4gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbFVzZXJuYW1lLCBwYXNzd29yZCB9ID0gYWRtaW5JbmZvO1xyXG5cclxuICAgICAgICBpZighZW1haWxVc2VybmFtZSB8fCAhcGFzc3dvcmQpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2FkbWlucy9sb2dpblwiLCBhZG1pbkluZm8sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgdXNlcm5hbWUsIGFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRtaW5FbWFpbFwiLCBlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkbWluVXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIiwgYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FkbWlucy9jYWxlbmRhclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9naW5CZ0ltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2hlYWRlcn0+SGVsbG8gR29yZ2VvdXMhPC9oMj5cclxuICAgICAgICAgICAgICAgIDxTZXJ2ZXJFcnJvck1lc3NhZ2Ugc2VydmVyRXJyb3JNZXNzYWdlID0ge3NlcnZlckVycm9yTWVzc2FnZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jcmVkZW50aWFsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJVc2VybmFtZSBvciBlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHthZG1pbkluZm8uZW1haWxVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcInR5cGUgeW91ciB1c2VybmFtZSBvciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZUZvciA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7YWRtaW5JbmZvLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwidHlwZSB5b3VyIHBhc3N3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlRm9yID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bG9naW59PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290X3Bhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIklucHV0RmllbGQiLCJTZXJ2ZXJFcnJvck1lc3NhZ2UiLCJMb2dpbiIsInJvdXRlciIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImVtYWlsVXNlcm5hbWUiLCJwYXNzd29yZCIsImFkbWluSW5mbyIsInNldEFkbWluSW5mbyIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFZhbHVlIiwibG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZW1haWwiLCJ1c2VybmFtZSIsImFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwiYmdJbWFnZSIsImxvZ2luX2NvbnRlbnQiLCJsb2dvIiwibG9naW5faGVhZGVyIiwibG9naW5fY3JlZGVudGlhbHMiLCJsb2dpbl9idXR0b24iLCJmb3Jnb3RfcGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/admins/login/LoginInput */ "./components/admins/login/LoginInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
    email: "",
    password: ""
  }),
      stylistInfo = _useState2[0],
      setStylistInfo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    isEmpty: false,
    doesAdminExist: false,
    isPasswordInvalid: false
  }),
      validationErrors = _useState3[0],
      setValidationErrors = _useState3[1];

  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setStylistInfo(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
    });
  }

  function login() {
    // Form Validation
    if (!adminInfo.email || !adminInfo.password) {
      return setValidationErrors(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          isEmpty: true
        });
      });
    }

    axios__WEBPACK_IMPORTED_MODULE_6___default().post("http://localhost:7070/api/admins/login", adminInfo, {
      withCredentials: true
    }).then(function (response) {
      console.log(response.data);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("calendarAccessCode", response.data.calendarAccessCode);
      router.push("/admins/calendar");
    })["catch"](function (error) {
      return setServerErrorMessage(error.response.data.msg);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().bgImage),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()) // layout and objecFit properties must be set to fill to make the image fit to it's container.  
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().serverError_message),
        style: {
          display: serverErrorMessage ? "block" : "none"
        },
        children: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Email",
          type: "email",
          name: "email",
          value: stylistInfo.email,
          placeholder: "Type your email here",
          validationErrors: validationErrors,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Password",
          type: "password",
          name: "password",
          value: stylistInfo.password,
          placeholder: "Type your password here",
          validationErrors: validationErrors,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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

_s(Login, "CvAac/BV9S6NqoALLZF1V2pVW2o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uMDk2ZDc0NzI5OGVjZDAxZjI2NjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUN5Qzs7QUFDekM7Q0FDOEI7O0NBRzlCOztBQUNBO0NBS0E7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFZSxTQUFTVyxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9PLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUM7QUFBRVMsSUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsSUFBQUEsUUFBUSxFQUFFO0FBQXZCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFnRFosK0NBQVEsQ0FBQztBQUNyRGEsSUFBQUEsT0FBTyxFQUFFLEtBRDRDO0FBRXJEQyxJQUFBQSxjQUFjLEVBQUUsS0FGcUM7QUFHckRDLElBQUFBLGlCQUFpQixFQUFFO0FBSGtDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPQyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBUUEsV0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFMUIsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQ7QUFFQVYsSUFBQUEsY0FBYyxDQUFDLFVBQUFXLFlBQVksRUFBSTtBQUMzQiw2Q0FDT0EsWUFEUCx1TUFFS0YsSUFGTCxFQUVZQyxLQUZaO0FBSUgsS0FMYSxDQUFkO0FBTUg7O0FBR0QsV0FBU0UsS0FBVCxHQUFrQjtBQUtkO0FBQ0EsUUFBRyxD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STBCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDSixlQXFDSSwrREFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBRyxtQkFBUyxFQUFFMUIsa0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdURIOztHQXZHdUJPO1VBR0xWOzs7S0FIS1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG4vL0ltYWdlc1xyXG5pbXBvcnQgbG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZ1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9naW5JbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvbG9naW4vTG9naW5JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4gKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3NlcnZlckVycm9yTWVzc2FnZSwgc2V0U2VydmVyRXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0eWxpc3RJbmZvLCBzZXRTdHlsaXN0SW5mb10gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3JzLCBzZXRWYWxpZGF0aW9uRXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpc0VtcHR5OiBmYWxzZSxcclxuICAgICAgICBkb2VzQWRtaW5FeGlzdDogZmFsc2UsXHJcbiAgICAgICAgaXNQYXNzd29yZEludmFsaWQ6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIHNldFN0eWxpc3RJbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbG9naW4gKCkge1xyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vIEZvcm0gVmFsaWRhdGlvblxyXG4gICAgICAgIGlmKCFhZG1pbkluZm8uZW1haWwgfHwgIWFkbWluSW5mby5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9ycyhjdXJyZW50VmFsdWUgPT4geyByZXR1cm4gey4uLmN1cnJlbnRWYWx1ZSwgaXNFbXB0eTogdHJ1ZX0gfSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvYWRtaW5zL2xvZ2luXCIsIGFkbWluSW5mbywge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCByZXNwb25zZS5kYXRhLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIsIHJlc3BvbnNlLmRhdGEuY2FsZW5kYXJBY2Nlc3NDb2RlKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FkbWlucy9jYWxlbmRhclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhLm1zZykpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ2luQmdJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9oZWFkZXJ9PkhlbGxvIEdvcmdlb3VzITwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmVyRXJyb3JfbWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6IHNlcnZlckVycm9yTWVzc2FnZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2ZXJFcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jcmVkZW50aWFsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBwYXNzd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bG9naW59PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290X3Bhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwibG9naW5CZ0ltYWdlIiwibG9nb0ltYWdlIiwiTG9naW5JbnB1dCIsIkxvZ2luIiwicm91dGVyIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwiZW1haWwiLCJwYXNzd29yZCIsInN0eWxpc3RJbmZvIiwic2V0U3R5bGlzdEluZm8iLCJpc0VtcHR5IiwiZG9lc0FkbWluRXhpc3QiLCJpc1Bhc3N3b3JkSW52YWxpZCIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdXJyZW50VmFsdWUiLCJsb2dpbiIsImFkbWluSW5mbyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjYWxlbmRhckFjY2Vzc0NvZGUiLCJwdXNoIiwiZXJyb3IiLCJtc2ciLCJiZ0ltYWdlIiwibG9naW5fY29udGVudCIsImxvZ28iLCJsb2dpbl9oZWFkZXIiLCJzZXJ2ZXJFcnJvcl9tZXNzYWdlIiwiZGlzcGxheSIsImxvZ2luX2NyZWRlbnRpYWxzIiwibG9naW5fYnV0dG9uIiwiZm9yZ290X3Bhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==
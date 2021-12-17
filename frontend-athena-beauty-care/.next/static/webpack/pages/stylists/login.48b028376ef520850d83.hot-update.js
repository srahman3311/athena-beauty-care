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
    emailUsername: "",
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
      console.log(response.data); // localStorage.setItem("stylistEmail", response.data.email);
      // localStorage.setItem("stylistUsername", response.data.username);
      // localStorage.setItem("calendarAccessCode", response.data.calendarAccessCode);
      // router.push("/stylists/calendar");
    }) //.catch(error => setServerErrorMessage(error.response.data.msg))
    ["catch"](function (error) {
      return console.log(error.response.data);
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
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
          lineNumber: 86,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().serverError_message),
        style: {
          display: serverErrorMessage ? "block" : "none"
        },
        children: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Username/Email",
          type: "email",
          name: "emailUsername",
          value: stylistInfo.emailUsername,
          placeholder: "Type your email or username here",
          validationErrors: validationErrors,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, this);
}

_s(Login, "OaXc0osBG1UFU7KbVqbTi4VivpI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uNDhiMDI4Mzc2ZWY1MjA4NTBkODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUN5Qzs7QUFDekM7Q0FDOEI7O0NBRzlCOztBQUNBO0NBS0E7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFZSxTQUFTVyxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9PLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUM7QUFBRVMsSUFBQUEsYUFBYSxFQUFFLEVBQWpCO0FBQXFCQyxJQUFBQSxRQUFRLEVBQUU7QUFBL0IsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdEWiwrQ0FBUSxDQUFDO0FBQ3JEYSxJQUFBQSxPQUFPLEVBQUUsS0FENEM7QUFFckRDLElBQUFBLGNBQWMsRUFBRSxLQUZxQztBQUdyREMsSUFBQUEsaUJBQWlCLEVBQUU7QUFIa0MsR0FBRCxDQUF4RDtBQUFBLE1BQU9DLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFRQSxXQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQix3QkFBd0JBLEtBQUssQ0FBQ0MsTUFBOUI7QUFBQSxRQUFRQyxJQUFSLGlCQUFRQSxJQUFSO0FBQUEsUUFBY0MsS0FBZCxpQkFBY0EsS0FBZDtBQUVBVixJQUFBQSxjQUFjLENBQUMsVUFBQVcsWUFBWSxFQUFJO0FBQzNCLDZDQUNPQSxZQURQLHVNQUVLRixJQUZMLEVBRVlDLEtBRlo7QUFJSCxLQUxhLENBQWQ7QUFNSDs7QUFHRCxXQUFTRSxLQUFULENBQWdCTCxLQUFoQixFQUF1QjtB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QkFBZTtBQUFHLG1CQUFTLEVBQUUxQixrRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzREg7O0dBekd1Qk87VUFHTFY7OztLQUhLVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHlsaXN0cy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgLy8gRm9yIFJlZGlyZWN0aW5nIFxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiOyAvLyBGb3IgZ29vZ2xlIGZvbnRzIGFuZCBvdGhlcnNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0xvZ2luLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuXHJcbi8vSW1hZ2VzXHJcbmltcG9ydCBsb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9jYXJ0b24td29tYW4uanBnXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMb2dpbklucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9sb2dpbi9Mb2dpbklucHV0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbiAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIG5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbc2VydmVyRXJyb3JNZXNzYWdlLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3R5bGlzdEluZm8sIHNldFN0eWxpc3RJbmZvXSA9IHVzZVN0YXRlKHsgZW1haWxVc2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvbkVycm9ycywgc2V0VmFsaWRhdGlvbkVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNFbXB0eTogZmFsc2UsXHJcbiAgICAgICAgZG9lc0FkbWluRXhpc3Q6IGZhbHNlLFxyXG4gICAgICAgIGlzUGFzc3dvcmRJbnZhbGlkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBzZXRTdHlsaXN0SW5mbyhjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ2luIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIC8vIEZvcm0gVmFsaWRhdGlvblxyXG4gICAgICAgIGlmKCFzdHlsaXN0SW5mby5lbWFpbFVzZXJuYW1lIHx8ICFzdHlsaXN0SW5mby5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9ycyhjdXJyZW50VmFsdWUgPT4geyByZXR1cm4gey4uLmN1cnJlbnRWYWx1ZSwgaXNFbXB0eTogdHJ1ZX0gfSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvbG9naW5cIiwgc3R5bGlzdEluZm8sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0eWxpc3RFbWFpbFwiLCByZXNwb25zZS5kYXRhLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdFVzZXJuYW1lXCIsIHJlc3BvbnNlLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIiwgcmVzcG9uc2UuZGF0YS5jYWxlbmRhckFjY2Vzc0NvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvY2FsZW5kYXJcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vLmNhdGNoKGVycm9yID0+IHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhLm1zZykpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ2luQmdJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9oZWFkZXJ9PkhlbGxvIEdvcmdlb3VzITwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VydmVyRXJyb3JfbWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6IHNlcnZlckVycm9yTWVzc2FnZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2ZXJFcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY3JlZGVudGlhbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dpbklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJVc2VybmFtZS9FbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5lbWFpbFVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiVHlwZSB5b3VyIGVtYWlsIG9yIHVzZXJuYW1lIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzID0ge3ZhbGlkYXRpb25FcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9naW5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiVHlwZSB5b3VyIHBhc3N3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzID0ge3ZhbGlkYXRpb25FcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bG9naW59PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290X3Bhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwibG9naW5CZ0ltYWdlIiwibG9nb0ltYWdlIiwiTG9naW5JbnB1dCIsIkxvZ2luIiwicm91dGVyIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwiZW1haWxVc2VybmFtZSIsInBhc3N3b3JkIiwic3R5bGlzdEluZm8iLCJzZXRTdHlsaXN0SW5mbyIsImlzRW1wdHkiLCJkb2VzQWRtaW5FeGlzdCIsImlzUGFzc3dvcmRJbnZhbGlkIiwidmFsaWRhdGlvbkVycm9ycyIsInNldFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZSIsImxvZ2luIiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImJnSW1hZ2UiLCJsb2dpbl9jb250ZW50IiwibG9nbyIsImxvZ2luX2hlYWRlciIsInNlcnZlckVycm9yX21lc3NhZ2UiLCJkaXNwbGF5IiwibG9naW5fY3JlZGVudGlhbHMiLCJsb2dpbl9idXR0b24iLCJmb3Jnb3RfcGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9
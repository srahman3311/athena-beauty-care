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

  function login(event) {
    event.preventDefault(); // Form Validation

    if (!stylistInfo.email || !stylistInfo.password) {
      return setValidationErrors(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          isEmpty: true
        });
      });
    }

    axios__WEBPACK_IMPORTED_MODULE_6___default().post("http://localhost:7070/api/stylists/login", stylistInfo, {
      withCredentials: true
    }).then(function (response) {
      console.log(response.data); // localStorage.setItem("email", response.data.email);
      // localStorage.setItem("calendarAccessCode", response.data.calendarAccessCode);
      // router.push("/admins/calendar");
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
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
          lineNumber: 87,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().serverError_message),
        style: {
          display: serverErrorMessage ? "block" : "none"
        },
        children: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Username/Email",
          type: "email",
          name: "email",
          value: stylistInfo.email,
          placeholder: "Type your email here",
          validationErrors: validationErrors,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
          lineNumber: 108,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uYmEyOGE1Yzk1MTIxODMxNWYyZTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUN5Qzs7QUFDekM7Q0FDOEI7O0NBRzlCOztBQUNBO0NBS0E7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFZSxTQUFTVyxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9PLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUM7QUFBRVMsSUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsSUFBQUEsUUFBUSxFQUFFO0FBQXZCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFnRFosK0NBQVEsQ0FBQztBQUNyRGEsSUFBQUEsT0FBTyxFQUFFLEtBRDRDO0FBRXJEQyxJQUFBQSxjQUFjLEVBQUUsS0FGcUM7QUFHckRDLElBQUFBLGlCQUFpQixFQUFFO0FBSGtDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPQyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBUUEsV0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFMUIsd0JBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsUUFBUUMsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFFBQWNDLEtBQWQsaUJBQWNBLEtBQWQ7QUFFQVYsSUFBQUEsY0FBYyxDQUFDLFVBQUFXLFlBQVksRUFBSTtBQUMzQiw2Q0FDT0EsWUFEUCx1TUFFS0YsSUFGTCxFQUVZQyxLQUZaO0FBSUgsS0FMYSxDQUFkO0FBTUg7O0FBR0QsV0FBU0UsS0FBVCxDQUFnQkwsS0FBaEIsRUFBdUI7QUFF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QUcsbUJBQVMsRUFBRTFCLGtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNESDs7R0ExR3VCTztVQUdMVjs7O0tBSEtVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxpc3RzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIEZvciBnb29nbGUgZm9udHMgYW5kIG90aGVyc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuLy9JbWFnZXNcclxuaW1wb3J0IGxvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NhcnRvbi13b21hbi5qcGdcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExvZ2luSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2xvZ2luL0xvZ2luSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgbmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtzZXJ2ZXJFcnJvck1lc3NhZ2UsIHNldFNlcnZlckVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdHlsaXN0SW5mbywgc2V0U3R5bGlzdEluZm9dID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvbkVycm9ycywgc2V0VmFsaWRhdGlvbkVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNFbXB0eTogZmFsc2UsXHJcbiAgICAgICAgZG9lc0FkbWluRXhpc3Q6IGZhbHNlLFxyXG4gICAgICAgIGlzUGFzc3dvcmRJbnZhbGlkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBzZXRTdHlsaXN0SW5mbyhjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ2luIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vIEZvcm0gVmFsaWRhdGlvblxyXG4gICAgICAgIGlmKCFzdHlsaXN0SW5mby5lbWFpbCB8fCAhc3R5bGlzdEluZm8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcnMoY3VycmVudFZhbHVlID0+IHsgcmV0dXJuIHsuLi5jdXJyZW50VmFsdWUsIGlzRW1wdHk6IHRydWV9IH0pO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2xvZ2luXCIsIHN0eWxpc3RJbmZvLCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCByZXNwb25zZS5kYXRhLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIsIHJlc3BvbnNlLmRhdGEuY2FsZW5kYXJBY2Nlc3NDb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2FkbWlucy9jYWxlbmRhclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8uY2F0Y2goZXJyb3IgPT4gc2V0U2VydmVyRXJyb3JNZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9naW5CZ0ltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2hlYWRlcn0+SGVsbG8gR29yZ2VvdXMhPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2ZXJFcnJvcl9tZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogc2VydmVyRXJyb3JNZXNzYWdlID8gXCJibG9ja1wiIDogXCJub25lXCIsIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlcnZlckVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jcmVkZW50aWFsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlVzZXJuYW1lL0VtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBwYXNzd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2xvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdF9wYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIkxvZ2luSW5wdXQiLCJMb2dpbiIsInJvdXRlciIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdHlsaXN0SW5mbyIsInNldFN0eWxpc3RJbmZvIiwiaXNFbXB0eSIsImRvZXNBZG1pbkV4aXN0IiwiaXNQYXNzd29yZEludmFsaWQiLCJ2YWxpZGF0aW9uRXJyb3JzIiwic2V0VmFsaWRhdGlvbkVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFZhbHVlIiwibG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiYmdJbWFnZSIsImxvZ2luX2NvbnRlbnQiLCJsb2dvIiwibG9naW5faGVhZGVyIiwic2VydmVyRXJyb3JfbWVzc2FnZSIsImRpc3BsYXkiLCJsb2dpbl9jcmVkZW50aWFscyIsImxvZ2luX2J1dHRvbiIsImZvcmdvdF9wYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=
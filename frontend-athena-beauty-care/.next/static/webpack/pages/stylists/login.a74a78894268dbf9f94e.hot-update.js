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
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ "./components/reusable-components/InputField.js");
/* harmony import */ var _ServerErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServerErrorMessage */ "./components/reusable-components/ServerErrorMessage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\UserLogin.js";
// Next Modules

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().login_content),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().bgImage),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__.default,
        alt: "Login Background Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().login_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: "Cartoon woman"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__.default, {
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
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__.default, {
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
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_7___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ServerErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      serverErrorMessage: serverErrorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uYTc0YTc4ODk0MjY4ZGJmOWY5NGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUdlLFNBQVNPLFNBQVQsT0FRWjtBQUFBLE1BUENDLGFBT0QsUUFQQ0EsYUFPRDtBQUFBLE1BTkNDLFFBTUQsUUFOQ0EsUUFNRDtBQUFBLE1BTENDLGVBS0QsUUFMQ0EsZUFLRDtBQUFBLE1BSkNDLGtCQUlELFFBSkNBLGtCQUlEO0FBQUEsTUFIQ0MsWUFHRCxRQUhDQSxZQUdEO0FBQUEsTUFGQ0MsS0FFRCxRQUZDQSxLQUVEO0FBR0Msc0JBQ0k7QUFBSyxhQUFTLEVBQUVYLCtFQUFoQjtBQUFBLDRCQUVJO0FBQUssZUFBUyxFQUFFQSx5RUFBaEI7QUFBQSw2QkFDSSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBSUMscUZBQWQ7QUFBNEIsV0FBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSTtBQUFLLGVBQVMsRUFBRUQsK0VBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSxzRUFBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLGFBQUcsRUFBSUUsNkRBQWQ7QUFBeUIsYUFBRyxFQUFFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFJLGlCQUFTLEVBQUVGLDhFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFNSTtBQUFNLGlCQUFTLEVBQUVBLG1GQUFqQjtBQUFBLGdDQUNJLDhEQUFDLGdEQUFEO0FBQ0ksbUJBQVMsRUFBRyxtQkFEaEI7QUFFSSxjQUFJLEVBQUcsT0FGWDtBQUdJLGNBQUksRUFBRyxlQUhYO0FBSUksZUFBSyxFQUFJTSxhQUpiO0FBS0kscUJBQVcsRUFBRyxrQ0FMbEI7QUFNSSx5QkFBZSxFQUFJRSxlQU52QjtBQU9JLG1DQUF5QixFQUFHLE9BUGhDO0FBUUksc0JBQVksRUFBSUU7QUFScEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVdJLDhEQUFDLGdEQUFEO0FBQ0ksbUJBQVMsRUFBRyxVQURoQjtBQUVJLGNBQUksRUFBRyxVQUZYO0FBR0ksY0FBSSxFQUFHLFVBSFg7QUFJSSxlQUFLLEVBQUlILFFBSmI7QUFLSSxxQkFBVyxFQUFHLHlCQUxsQjtBQU1JLHlCQUFlLEVBQUlDLGVBTnZCO0FBT0ksbUNBQXlCLEVBQUcsVUFQaEM7QUFRSSxzQkFBWSxFQUFJRTtBQVJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBNEJJO0FBQUssaUJBQVMsRUFBRVYsOEVBQWhCO0FBQUEsK0JBQ0k7QUFBUSxpQkFBTyxFQUFJVyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkosZUErQkksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUcsbUJBQVMsRUFBRVgsaUZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBdUNJLDhEQUFDLHdEQUFEO0FBQW9CLHdCQUFrQixFQUFJUztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkNIO0tBdER1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1VzZXJMb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0xvZ2luLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vSW1hZ2VzXHJcbmltcG9ydCBsb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9jYXJ0b24td29tYW4uanBnXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuL0lucHV0RmllbGRcIjtcclxuaW1wb3J0IFNlcnZlckVycm9yTWVzc2FnZSBmcm9tIFwiLi9TZXJ2ZXJFcnJvck1lc3NhZ2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTG9naW4gKHsgXHJcbiAgICBlbWFpbFVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICB2YWxpZGF0aW9uRXJyb3IsXHJcbiAgICBzZXJ2ZXJFcnJvck1lc3NhZ2UsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICBsb2dpblxyXG4gICAgXHJcbn0pIHtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250ZW50fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge2xvZ2luQmdJbWFnZX0gYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYyA9IHtsb2dvSW1hZ2V9IGFsdCA9XCJDYXJ0b29uIHdvbWFuXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2hlYWRlcn0+SGVsbG8gR29yZ2VvdXMhPC9oMj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY3JlZGVudGlhbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA9IFwiVXNlcm5hbWUgb3IgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWxVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcInR5cGUgeW91ciB1c2VybmFtZSBvciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZUZvciA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gXCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJ0eXBlIHlvdXIgcGFzc3dvcmQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VGb3IgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtsb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RfcGFzc3dvcmR9PkZvcmdvdCBwYXNzd29yZD88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNlcnZlckVycm9yTWVzc2FnZSBzZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7c2VydmVyRXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJzdHlsZXMiLCJsb2dpbkJnSW1hZ2UiLCJsb2dvSW1hZ2UiLCJJbnB1dEZpZWxkIiwiU2VydmVyRXJyb3JNZXNzYWdlIiwiVXNlckxvZ2luIiwiZW1haWxVc2VybmFtZSIsInBhc3N3b3JkIiwidmFsaWRhdGlvbkVycm9yIiwic2VydmVyRXJyb3JNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwibG9naW4iLCJsb2dpbl9jb250ZW50IiwiYmdJbWFnZSIsImxvZ28iLCJsb2dpbl9oZWFkZXIiLCJsb2dpbl9jcmVkZW50aWFscyIsImxvZ2luX2J1dHRvbiIsImZvcmdvdF9wYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=
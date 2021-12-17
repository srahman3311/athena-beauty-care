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
        lineNumber: 74,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
          lineNumber: 85,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_header),
        children: "Hello Gorgeous!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().serverError_message),
        style: {
          display: serverErrorMessage ? "block" : "none"
        },
        children: serverErrorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_credentials),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_admins_login_LoginInput__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Username/Email",
          type: "text",
          name: "emailUsername",
          value: stylistInfo.emailUsername,
          placeholder: "Type your email or username here",
          validationErrors: validationErrors,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
          lineNumber: 106,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().login_button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().forgot_password),
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvbG9naW4uYmI2OGU0MjkzYzA0ZmExNGQzNWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUN5Qzs7QUFDekM7Q0FDOEI7O0NBRzlCOztBQUNBO0NBS0E7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFZSxTQUFTVyxLQUFULEdBQWtCO0FBQUE7O0FBRTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFFQSxrQkFBb0RLLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9PLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUM7QUFBRVMsSUFBQUEsYUFBYSxFQUFFLEVBQWpCO0FBQXFCQyxJQUFBQSxRQUFRLEVBQUU7QUFBL0IsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdEWiwrQ0FBUSxDQUFDO0FBQ3JEYSxJQUFBQSxPQUFPLEVBQUUsS0FENEM7QUFFckRDLElBQUFBLGNBQWMsRUFBRSxLQUZxQztBQUdyREMsSUFBQUEsaUJBQWlCLEVBQUU7QUFIa0MsR0FBRCxDQUF4RDtBQUFBLE1BQU9DLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFRQSxXQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQix3QkFBd0JBLEtBQUssQ0FBQ0MsTUFBOUI7QUFBQSxRQUFRQyxJQUFSLGlCQUFRQSxJQUFSO0FBQUEsUUFBY0MsS0FBZCxpQkFBY0EsS0FBZDtBQUVBVixJQUFBQSxjQUFjLENBQUMsVUFBQVcsWUFBWSxFQUFJO0FBQzNCLDZDQUNPQSxZQURQLHVNQUVLRixJQUZMLEVBRVlDLEtBRlo7QUFJSCxLQUxhLENBQWQ7QUFNSDs7QUFHRCxXQUFTRSxLQUFULENBQWdCTCxLQUFoQixFQUF1QjtB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QUFBRyxtQkFBUyxFQUFFMUIsa0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0RIOztHQXhHdUJPO1VBR0xWOzs7S0FIS1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG4vL0ltYWdlc1xyXG5pbXBvcnQgbG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZ1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9naW5JbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvbG9naW4vTG9naW5JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4gKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW3NlcnZlckVycm9yTWVzc2FnZSwgc2V0U2VydmVyRXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0eWxpc3RJbmZvLCBzZXRTdHlsaXN0SW5mb10gPSB1c2VTdGF0ZSh7IGVtYWlsVXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGlzRW1wdHk6IGZhbHNlLFxyXG4gICAgICAgIGRvZXNBZG1pbkV4aXN0OiBmYWxzZSxcclxuICAgICAgICBpc1Bhc3N3b3JkSW52YWxpZDogZmFsc2VcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgc2V0U3R5bGlzdEluZm8oY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBsb2dpbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBcclxuICAgICAgICAvLyBGb3JtIFZhbGlkYXRpb25cclxuICAgICAgICBpZighc3R5bGlzdEluZm8uZW1haWxVc2VybmFtZSB8fCAhc3R5bGlzdEluZm8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcnMoY3VycmVudFZhbHVlID0+IHsgcmV0dXJuIHsuLi5jdXJyZW50VmFsdWUsIGlzRW1wdHk6IHRydWV9IH0pO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2xvZ2luXCIsIHN0eWxpc3RJbmZvLCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCByZXNwb25zZS5kYXRhLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIsIHJlc3BvbnNlLmRhdGEuY2FsZW5kYXJBY2Nlc3NDb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2FkbWlucy9jYWxlbmRhclwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8uY2F0Y2goZXJyb3IgPT4gc2V0U2VydmVyRXJyb3JNZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9naW5CZ0ltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2hlYWRlcn0+SGVsbG8gR29yZ2VvdXMhPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2ZXJFcnJvcl9tZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogc2VydmVyRXJyb3JNZXNzYWdlID8gXCJibG9ja1wiIDogXCJub25lXCIsIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlcnZlckVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jcmVkZW50aWFsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlVzZXJuYW1lL0VtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8uZW1haWxVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBlbWFpbCBvciB1c2VybmFtZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlR5cGUgeW91ciBwYXNzd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycyA9IHt2YWxpZGF0aW9uRXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2xvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdF9wYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIkxvZ2luSW5wdXQiLCJMb2dpbiIsInJvdXRlciIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImVtYWlsVXNlcm5hbWUiLCJwYXNzd29yZCIsInN0eWxpc3RJbmZvIiwic2V0U3R5bGlzdEluZm8iLCJpc0VtcHR5IiwiZG9lc0FkbWluRXhpc3QiLCJpc1Bhc3N3b3JkSW52YWxpZCIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdXJyZW50VmFsdWUiLCJsb2dpbiIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJiZ0ltYWdlIiwibG9naW5fY29udGVudCIsImxvZ28iLCJsb2dpbl9oZWFkZXIiLCJzZXJ2ZXJFcnJvcl9tZXNzYWdlIiwiZGlzcGxheSIsImxvZ2luX2NyZWRlbnRpYWxzIiwibG9naW5fYnV0dG9uIiwiZm9yZ290X3Bhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==
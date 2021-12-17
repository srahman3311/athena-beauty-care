"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/calendar",{

/***/ "./components/admins/common/SideNav2.js":
/*!**********************************************!*\
  !*** ./components/admins/common/SideNav2.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SideNav2; }
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/Nav.module.css */ "./styles/Nav.module.css");
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\common\\SideNav2.js";
// Next Modules


 // React Modules

 // User Image

 // Stylesheet



function SideNav2(_ref) {
  var hasGoogleCalendarAdded = _ref.hasGoogleCalendarAdded;
  // Google Calendar API Parameters
  var SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
  var accessType = "access_type=offline";
  var includeScope = "include_granted_scopes=true";
  var responseType = "response_type=code";
  var redirectUri = "redirect_uri=http://localhost:3000/admins/auth"; // Google Calendar API Endpoint

  var ep1 = "https://accounts.google.com/o/oauth2/v2/auth?";
  var ep2 = "scope=".concat(SCOPES, "&").concat(accessType, "&").concat(includeScope, "&").concat(responseType, "&").concat(redirectUri, "&client_id=").concat("992814202061-vdjdbj5vd0j7m73b69s88q6ciq2u4ob8.apps.googleusercontent.com");
  var googleOauthEndpoint = ep1 + ep2;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidenav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://kit.fontawesome.com/14ab8b126d.js",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidenav_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidenav_image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          objectFit: "contain",
          id: "profile-avatar",
          src: _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_4__.default,
          alt: "Login Background Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
            className: "fas fa-home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
            className: "fas fa-briefcase"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
            className: "fas fa-user-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/admins/control-panel",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
            className: "fas fa-cog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: googleOauthEndpoint,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          style: {
            display: hasGoogleCalendarAdded === "No" ? "block" : "none"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("i", {
            className: "fas fa-calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}
_c = SideNav2;

var _c;

$RefreshReg$(_c, "SideNav2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuYTVkNjczN2RkOTBiNDIwNjJhMTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0NBR0E7O0FBQ0E7O0FBS2UsU0FBU08sUUFBVCxPQUErQztBQUFBLE1BQTFCQyxzQkFBMEIsUUFBMUJBLHNCQUEwQjtBQUUxRDtBQUNBLE1BQU1DLE1BQU0sR0FBRywwRkFBZjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxxQkFBbkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsNkJBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLG9CQUFyQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxnREFBcEIsQ0FQMEQsQ0FTMUQ7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHLCtDQUFaO0FBQ0EsTUFBTUMsR0FBRyxtQkFBWU4sTUFBWixjQUFzQkMsVUFBdEIsY0FBb0NDLFlBQXBDLGNBQW9EQyxZQUFwRCxjQUFvRUMsV0FBcEUsd0JBQTZGRywwRUFBN0YsQ0FBVDtBQUNBLE1BQU1HLG1CQUFtQixHQUFHTCxHQUFHLEdBQUdDLEdBQWxDO0FBR0Esc0JBRUk7QUFBSyxhQUFTLEVBQUVULHVFQUFoQjtBQUFBLDRCQUNJLDhEQUFDLG9EQUFEO0FBQVEsU0FBRyxFQUFDLDJDQUFaO0FBQXdELGlCQUFXLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUVBLCtFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsNkVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFDLFNBQWpCO0FBQTJCLFlBQUUsRUFBQyxnQkFBOUI7QUFBK0MsYUFBRyxFQUFFRCw2REFBcEQ7QUFBa0UsYUFBRyxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0k7QUFBQSxpQ0FBRztBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQVFJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSTtBQUFBLGlDQUFHO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBV0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJO0FBQUEsaUNBQUc7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFjSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyx1QkFBWDtBQUFBLCtCQUNJO0FBQUEsaUNBQUc7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosZUFpQkksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVjLG1CQUFaO0FBQUEsK0JBQ0k7QUFDSSxlQUFLLEVBQUk7QUFBQ0ksWUFBQUEsT0FBTyxFQUFFZixzQkFBc0IsS0FBSyxJQUEzQixHQUFrQyxPQUFsQyxHQUE0QztBQUF0RCxXQURiO0FBQUEsaUNBR0k7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBK0JIO0tBOUN1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbnMvY29tbW9uL1NpZGVOYXYyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBVc2VyIEltYWdlXHJcbmltcG9ydCBsb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9jYXJ0b24td29tYW4uanBnXCJcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL05hdi5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXYyICh7IGhhc0dvb2dsZUNhbGVuZGFyQWRkZWQgfSkge1xyXG5cclxuICAgIC8vIEdvb2dsZSBDYWxlbmRhciBBUEkgUGFyYW1ldGVyc1xyXG4gICAgY29uc3QgU0NPUEVTID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NhbGVuZGFyIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2FsZW5kYXIuZXZlbnRzXCI7XHJcbiAgICBjb25zdCBhY2Nlc3NUeXBlID0gXCJhY2Nlc3NfdHlwZT1vZmZsaW5lXCI7XHJcbiAgICBjb25zdCBpbmNsdWRlU2NvcGUgPSBcImluY2x1ZGVfZ3JhbnRlZF9zY29wZXM9dHJ1ZVwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gXCJyZXNwb25zZV90eXBlPWNvZGVcIjtcclxuICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gXCJyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDozMDAwL2FkbWlucy9hdXRoXCI7XHJcblxyXG4gICAgLy8gR29vZ2xlIENhbGVuZGFyIEFQSSBFbmRwb2ludFxyXG4gICAgY29uc3QgZXAxID0gXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9cIjtcclxuICAgIGNvbnN0IGVwMiA9IGBzY29wZT0ke1NDT1BFU30mJHthY2Nlc3NUeXBlfSYke2luY2x1ZGVTY29wZX0mJHtyZXNwb25zZVR5cGV9JiR7cmVkaXJlY3RVcml9JmNsaWVudF9pZD0ke3Byb2Nlc3MuZW52LmNsaWVudElkfWA7XHJcbiAgICBjb25zdCBnb29nbGVPYXV0aEVuZHBvaW50ID0gZXAxICsgZXAyO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlbmF2fT5cclxuICAgICAgICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMTRhYjhiMTI2ZC5qc1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlbmF2X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlbmF2X2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugb2JqZWN0Rml0PVwiY29udGFpblwiIGlkPVwicHJvZmlsZS1hdmF0YXJcIiBzcmM9e2xvZ2luQmdJbWFnZX0gYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1icmllZmNhc2VcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbnMvY29udHJvbC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2dcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Z29vZ2xlT2F1dGhFbmRwb2ludH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBoYXNHb29nbGVDYWxlbmRhckFkZGVkID09PSBcIk5vXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiU2NyaXB0IiwiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2dpbkJnSW1hZ2UiLCJzdHlsZXMiLCJTaWRlTmF2MiIsImhhc0dvb2dsZUNhbGVuZGFyQWRkZWQiLCJTQ09QRVMiLCJhY2Nlc3NUeXBlIiwiaW5jbHVkZVNjb3BlIiwicmVzcG9uc2VUeXBlIiwicmVkaXJlY3RVcmkiLCJlcDEiLCJlcDIiLCJwcm9jZXNzIiwiZW52IiwiY2xpZW50SWQiLCJnb29nbGVPYXV0aEVuZHBvaW50Iiwic2lkZW5hdiIsInNpZGVuYXZfY29udGVudCIsInNpZGVuYXZfaW1hZ2UiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
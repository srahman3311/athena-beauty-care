"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/calendar",{

/***/ "./libs/updateStylistToken.js":
/*!************************************!*\
  !*** ./libs/updateStylistToken.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


// Modules needed to update admin info


var updateStylistToken = /*#__PURE__*/function () {
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(endpoint, username, authCode) {
    var response;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(authCode);
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(endpoint, {
              username: username,
              authCode: authCode
            }, {
              withCredentials: true
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", _context.t0.response.data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function updateStylistToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateStylistToken);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuNTVkZTNmNWZiZmQ1M2FmNTk1YzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1DLGtCQUFrQjtBQUFBLHlZQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxRQUFqQixFQUEyQkMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUZ1QjtBQUFBO0FBQUEsbUJBTUlKLGlEQUFBLENBQVdFLFFBQVgsRUFBcUI7QUFBRUMsY0FBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLGNBQUFBLFFBQVEsRUFBUkE7QUFBWixhQUFyQixFQUE2QztBQUFDSSxjQUFBQSxlQUFlLEVBQUU7QUFBbEIsYUFBN0MsQ0FOSjs7QUFBQTtBQU1iQyxZQUFBQSxRQU5hO0FBQUEsNkNBUVpBLFFBQVEsQ0FBQ0MsSUFSRzs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FhWixZQUFNRCxRQUFOLENBQWVDLElBYkg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEJULGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFrQkEsK0RBQWVBLGtCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvdXBkYXRlU3R5bGlzdFRva2VuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZXMgbmVlZGVkIHRvIHVwZGF0ZSBhZG1pbiBpbmZvXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5jb25zdCB1cGRhdGVTdHlsaXN0VG9rZW4gPSBhc3luYyAoZW5kcG9pbnQsIHVzZXJuYW1lLCBhdXRoQ29kZSkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGF1dGhDb2RlKTtcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIHsgdXNlcm5hbWUsIGF1dGhDb2RlIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVTdHlsaXN0VG9rZW47XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVwZGF0ZVN0eWxpc3RUb2tlbiIsImVuZHBvaW50IiwidXNlcm5hbWUiLCJhdXRoQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/calendar",{

/***/ "./libs/updateUserToken.js":
/*!*********************************!*\
  !*** ./libs/updateUserToken.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchGoogleCalendarEvents */ "./libs/fetchGoogleCalendarEvents.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// Modules needed to update admin info



var updateUserToken = /*#__PURE__*/function () {
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage) {
    var authCode, response;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authCode = localStorage.getItem("authCode");
            _context.prev = 1;
            setLoading(true);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(tokenEndpoint, {
              username: username,
              authCode: authCode
            }, {
              withCredentials: true
            });

          case 5:
            response = _context.sent;
            localStorage.removeItem("authCode");
            (0,_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__.default)(eventEndpoint, username, setLoading, setEvents, setServerErrorMessage);
            _context.next = 15;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            localStorage.removeItem("authCode");
            setServerErrorMessage(_context.t0.response.data);
            alert(_context.t0.response.data);

          case 15:
            _context.prev = 15;
            setLoading(false);
            return _context.finish(15);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10, 15, 18]]);
  }));

  return function updateUserToken(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateUserToken);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuMWI2MGQzNjU0OTcxOGZjMGNmNDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1FLGVBQWU7QUFBQSx5WUFBRyxpQkFBT0MsUUFBUCxFQUFpQkMsYUFBakIsRUFBZ0NDLGFBQWhDLEVBQStDQyxVQUEvQyxFQUEyREMsU0FBM0QsRUFBc0VDLHFCQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsWUFBQUEsUUFGYyxHQUVIQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FGRztBQUFBO0FBTWhCTCxZQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBTmdCO0FBQUEsbUJBUU9OLGlEQUFBLENBQVdJLGFBQVgsRUFBMEI7QUFBRUQsY0FBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlNLGNBQUFBLFFBQVEsRUFBUkE7QUFBWixhQUExQixFQUFrRDtBQUFDSSxjQUFBQSxlQUFlLEVBQUU7QUFBbEIsYUFBbEQsQ0FSUDs7QUFBQTtBQVFWQyxZQUFBQSxRQVJVO0FBVWhCSixZQUFBQSxZQUFZLENBQUNLLFVBQWIsQ0FBd0IsVUFBeEI7QUFFQWQsWUFBQUEsbUVBQXlCLENBQUNJLGFBQUQsRUFBZ0JGLFFBQWhCLEVBQTBCRyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLHFCQUFqRCxDQUF6QjtBQVpnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCaEJFLFlBQUFBLFlBQVksQ0FBQ0ssVUFBYixDQUF3QixVQUF4QjtBQUVBUCxZQUFBQSxxQkFBcUIsQ0FBQyxZQUFNTSxRQUFOLENBQWVFLElBQWhCLENBQXJCO0FBQ0FDLFlBQUFBLEtBQUssQ0FBQyxZQUFNSCxRQUFOLENBQWVFLElBQWhCLENBQUw7O0FBbkJnQjtBQUFBO0FBdUJoQlYsWUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQXZCZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkosZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUE2QkEsK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy91cGRhdGVVc2VyVG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlcyBuZWVkZWQgdG8gdXBkYXRlIGFkbWluIGluZm9cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyBmcm9tIFwiLi9mZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzXCI7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyVG9rZW4gPSBhc3luYyAodXNlcm5hbWUsIHRva2VuRW5kcG9pbnQsIGV2ZW50RW5kcG9pbnQsIHNldExvYWRpbmcsIHNldEV2ZW50cywgc2V0U2VydmVyRXJyb3JNZXNzYWdlKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYXV0aENvZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhDb2RlXCIpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodG9rZW5FbmRwb2ludCwgeyB1c2VybmFtZSwgYXV0aENvZGUgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhDb2RlXCIpO1xyXG5cclxuICAgICAgICBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGV2ZW50RW5kcG9pbnQsIHVzZXJuYW1lLCBzZXRMb2FkaW5nLCBzZXRFdmVudHMsIHNldFNlcnZlckVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhDb2RlXCIpO1xyXG5cclxuICAgICAgICBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVXNlclRva2VuO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMiLCJ1cGRhdGVVc2VyVG9rZW4iLCJ1c2VybmFtZSIsInRva2VuRW5kcG9pbnQiLCJldmVudEVuZHBvaW50Iiwic2V0TG9hZGluZyIsInNldEV2ZW50cyIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImF1dGhDb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9
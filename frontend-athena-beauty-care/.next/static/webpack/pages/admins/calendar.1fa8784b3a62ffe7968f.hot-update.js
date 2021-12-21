"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/calendar",{

/***/ "./libs/fetchGoogleCalendarEvents.js":
/*!*******************************************!*\
  !*** ./libs/fetchGoogleCalendarEvents.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




function fetchGoogleCalendarEvents(_x, _x2) {
  return _fetchGoogleCalendarEvents.apply(this, arguments);
}

function _fetchGoogleCalendarEvents() {
  _fetchGoogleCalendarEvents = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(endpoint, username) {
    var response, data;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(endpoint, {
              username: username
            }, {
              withCredentials: true
            });

          case 3:
            response = _context.sent;
            data = response.data.map(function (item) {
              return {
                title: item.summary,
                end: new Date(item.end.dateTime),
                start: new Date(item.start.dateTime),
                allDay: false
              };
            });
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0.response.data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _fetchGoogleCalendarEvents.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchGoogleCalendarEvents);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLjFmYTg3ODRiM2E2MmZmZTc5NjhmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBRWVDOzs7OzsyWkFBZixpQkFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSStCSCxpREFBQSxDQUFXRSxRQUFYLEVBQXFCO0FBQUVDLGNBQUFBLFFBQVEsRUFBUkE7QUFBRixhQUFyQixFQUFtQztBQUFDRSxjQUFBQSxlQUFlLEVBQUU7QUFBbEIsYUFBbkMsQ0FKL0I7O0FBQUE7QUFJY0MsWUFBQUEsUUFKZDtBQU1jQyxZQUFBQSxJQU5kLEdBTXFCRCxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxJQUFJLEVBQUk7QUFDbkMscUJBQU87QUFDSEMsZ0JBQUFBLEtBQUssRUFBRUQsSUFBSSxDQUFDRSxPQURUO0FBRUhDLGdCQUFBQSxHQUFHLEVBQUUsSUFBSUMsSUFBSixDQUFTSixJQUFJLENBQUNHLEdBQUwsQ0FBU0UsUUFBbEIsQ0FGRjtBQUdIQyxnQkFBQUEsS0FBSyxFQUFFLElBQUlGLElBQUosQ0FBU0osSUFBSSxDQUFDTSxLQUFMLENBQVdELFFBQXBCLENBSEo7QUFJSEUsZ0JBQUFBLE1BQU0sRUFBRTtBQUpMLGVBQVA7QUFNSCxhQVBZLENBTnJCO0FBQUEsNkNBZWVULElBZmY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBbUJlLFlBQU1ELFFBQU4sQ0FBZUMsSUFuQjlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBNEJBLCtEQUFlTix5QkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL2ZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyhlbmRwb2ludCwgdXNlcm5hbWUpIHtcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIHsgdXNlcm5hbWUgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5zdW1tYXJ5LFxyXG4gICAgICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZShpdGVtLmVuZC5kYXRlVGltZSksXHJcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoaXRlbS5zdGFydC5kYXRlVGltZSksXHJcbiAgICAgICAgICAgICAgICBhbGxEYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcblxyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50czsiXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIiwiZW5kcG9pbnQiLCJ1c2VybmFtZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZSIsImRhdGEiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJzdW1tYXJ5IiwiZW5kIiwiRGF0ZSIsImRhdGVUaW1lIiwic3RhcnQiLCJhbGxEYXkiXSwic291cmNlUm9vdCI6IiJ9
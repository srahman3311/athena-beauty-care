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
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage, routerPathname) {
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
            if (routerPathname === "/admins/calendar") localStorage.setItem("adminHasAddedGoogleCalendar", "Yes");
            if (routerPathname === "/stylists/calendar") localStorage.setItem("stylistHasAddedGoogleCalendar", "Yes");
            (0,_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__.default)(eventEndpoint, username, setLoading, setEvents, setServerErrorMessage);
            _context.next = 17;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            localStorage.removeItem("authCode");
            setServerErrorMessage(_context.t0.response.data);
            alert(_context.t0.response.data);

          case 17:
            _context.prev = 17;
            setLoading(false);
            return _context.finish(17);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12, 17, 20]]);
  }));

  return function updateUserToken(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuMjJmYzk2YWZhYTFmMWQ0MGUxYTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1FLGVBQWU7QUFBQSx5WUFBRyxpQkFDcEJDLFFBRG9CLEVBQ1ZDLGFBRFUsRUFDS0MsYUFETCxFQUNvQkMsVUFEcEIsRUFDZ0NDLFNBRGhDLEVBQzJDQyxxQkFEM0MsRUFDa0VDLGNBRGxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlkQyxZQUFBQSxRQUpjLEdBSUhDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUpHO0FBQUE7QUFRaEJOLFlBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFSZ0I7QUFBQSxtQkFVT04saURBQUEsQ0FBV0ksYUFBWCxFQUEwQjtBQUFFRCxjQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWU8sY0FBQUEsUUFBUSxFQUFSQTtBQUFaLGFBQTFCLEVBQWtEO0FBQUNJLGNBQUFBLGVBQWUsRUFBRTtBQUFsQixhQUFsRCxDQVZQOztBQUFBO0FBVVZDLFlBQUFBLFFBVlU7QUFZaEJKLFlBQUFBLFlBQVksQ0FBQ0ssVUFBYixDQUF3QixVQUF4QjtBQUNBLGdCQUFHUCxjQUFjLEtBQUssa0JBQXRCLEVBQTBDRSxZQUFZLENBQUNNLE9BQWIsQ0FBcUIsNkJBQXJCLEVBQW9ELEtBQXBEO0FBQzFDLGdCQUFHUixjQUFjLEtBQUssb0JBQXRCLEVBQTRDRSxZQUFZLENBQUNNLE9BQWIsQ0FBcUIsK0JBQXJCLEVBQXNELEtBQXREO0FBRTVDaEIsWUFBQUEsbUVBQXlCLENBQUNJLGFBQUQsRUFBZ0JGLFFBQWhCLEVBQTBCRyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLHFCQUFqRCxDQUF6QjtBQWhCZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQmhCRyxZQUFBQSxZQUFZLENBQUNLLFVBQWIsQ0FBd0IsVUFBeEI7QUFFQVIsWUFBQUEscUJBQXFCLENBQUMsWUFBTU8sUUFBTixDQUFlRyxJQUFoQixDQUFyQjtBQUNBQyxZQUFBQSxLQUFLLENBQUMsWUFBTUosUUFBTixDQUFlRyxJQUFoQixDQUFMOztBQXZCZ0I7QUFBQTtBQTJCaEJaLFlBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUEzQmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZKLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBaUNBLCtEQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvdXBkYXRlVXNlclRva2VuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZXMgbmVlZGVkIHRvIHVwZGF0ZSBhZG1pbiBpbmZvXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMgZnJvbSBcIi4vZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50c1wiO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlclRva2VuID0gYXN5bmMgKFxyXG4gICAgdXNlcm5hbWUsIHRva2VuRW5kcG9pbnQsIGV2ZW50RW5kcG9pbnQsIHNldExvYWRpbmcsIHNldEV2ZW50cywgc2V0U2VydmVyRXJyb3JNZXNzYWdlLCByb3V0ZXJQYXRobmFtZVxyXG4pID0+IHtcclxuXHJcbiAgICBjb25zdCBhdXRoQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIik7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh0b2tlbkVuZHBvaW50LCB7IHVzZXJuYW1lLCBhdXRoQ29kZSB9LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aENvZGVcIik7XHJcbiAgICAgICAgaWYocm91dGVyUGF0aG5hbWUgPT09IFwiL2FkbWlucy9jYWxlbmRhclwiKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhclwiLCBcIlllc1wiKTtcclxuICAgICAgICBpZihyb3V0ZXJQYXRobmFtZSA9PT0gXCIvc3R5bGlzdHMvY2FsZW5kYXJcIikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhclwiLCBcIlllc1wiKTtcclxuXHJcbiAgICAgICAgZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyhldmVudEVuZHBvaW50LCB1c2VybmFtZSwgc2V0TG9hZGluZywgc2V0RXZlbnRzLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoQ29kZVwiKTtcclxuXHJcbiAgICAgICAgc2V0U2VydmVyRXJyb3JNZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVVzZXJUb2tlbjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIiwidXBkYXRlVXNlclRva2VuIiwidXNlcm5hbWUiLCJ0b2tlbkVuZHBvaW50IiwiZXZlbnRFbmRwb2ludCIsInNldExvYWRpbmciLCJzZXRFdmVudHMiLCJzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UiLCJyb3V0ZXJQYXRobmFtZSIsImF1dGhDb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZGF0YSIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==
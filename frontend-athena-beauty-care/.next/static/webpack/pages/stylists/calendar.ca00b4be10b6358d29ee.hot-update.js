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
            alert("Hi");
            localStorage.removeItem("authCode");
            (0,_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__.default)(eventEndpoint, username, setLoading, setEvents, setServerErrorMessage);
            _context.next = 16;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            localStorage.removeItem("authCode");
            setServerErrorMessage(_context.t0.response.data);
            alert(_context.t0.response.data);

          case 16:
            _context.prev = 16;
            setLoading(false);
            return _context.finish(16);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11, 16, 19]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuY2EwMGI0YmUxMGI2MzU4ZDI5ZWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1FLGVBQWU7QUFBQSx5WUFBRyxpQkFBT0MsUUFBUCxFQUFpQkMsYUFBakIsRUFBZ0NDLGFBQWhDLEVBQStDQyxVQUEvQyxFQUEyREMsU0FBM0QsRUFBc0VDLHFCQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsWUFBQUEsUUFGYyxHQUVIQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FGRztBQUFBO0FBTWhCTCxZQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBTmdCO0FBQUEsbUJBUU9OLGlEQUFBLENBQVdJLGFBQVgsRUFBMEI7QUFBRUQsY0FBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlNLGNBQUFBLFFBQVEsRUFBUkE7QUFBWixhQUExQixFQUFrRDtBQUFDSSxjQUFBQSxlQUFlLEVBQUU7QUFBbEIsYUFBbEQsQ0FSUDs7QUFBQTtBQVFWQyxZQUFBQSxRQVJVO0FBU2hCQyxZQUFBQSxLQUFLLENBQUMsSUFBRCxDQUFMO0FBRUFMLFlBQUFBLFlBQVksQ0FBQ00sVUFBYixDQUF3QixVQUF4QjtBQUVBZixZQUFBQSxtRUFBeUIsQ0FBQ0ksYUFBRCxFQUFnQkYsUUFBaEIsRUFBMEJHLFVBQTFCLEVBQXNDQyxTQUF0QyxFQUFpREMscUJBQWpELENBQXpCO0FBYmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJoQkUsWUFBQUEsWUFBWSxDQUFDTSxVQUFiLENBQXdCLFVBQXhCO0FBRUFSLFlBQUFBLHFCQUFxQixDQUFDLFlBQU1NLFFBQU4sQ0FBZUcsSUFBaEIsQ0FBckI7QUFDQUYsWUFBQUEsS0FBSyxDQUFDLFlBQU1ELFFBQU4sQ0FBZUcsSUFBaEIsQ0FBTDs7QUFwQmdCO0FBQUE7QUF3QmhCWCxZQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBeEJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmSixlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQThCQSwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL3VwZGF0ZVVzZXJUb2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVzIG5lZWRlZCB0byB1cGRhdGUgYWRtaW4gaW5mb1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIGZyb20gXCIuL2ZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHNcIjtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXJUb2tlbiA9IGFzeW5jICh1c2VybmFtZSwgdG9rZW5FbmRwb2ludCwgZXZlbnRFbmRwb2ludCwgc2V0TG9hZGluZywgc2V0RXZlbnRzLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UpID0+IHtcclxuXHJcbiAgICBjb25zdCBhdXRoQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHRva2VuRW5kcG9pbnQsIHsgdXNlcm5hbWUsIGF1dGhDb2RlIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuICAgICAgICBhbGVydChcIkhpXCIpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhDb2RlXCIpO1xyXG5cclxuICAgICAgICBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGV2ZW50RW5kcG9pbnQsIHVzZXJuYW1lLCBzZXRMb2FkaW5nLCBzZXRFdmVudHMsIHNldFNlcnZlckVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhDb2RlXCIpO1xyXG5cclxuICAgICAgICBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVXNlclRva2VuO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMiLCJ1cGRhdGVVc2VyVG9rZW4iLCJ1c2VybmFtZSIsInRva2VuRW5kcG9pbnQiLCJldmVudEVuZHBvaW50Iiwic2V0TG9hZGluZyIsInNldEV2ZW50cyIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImF1dGhDb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZSIsImFsZXJ0IiwicmVtb3ZlSXRlbSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9
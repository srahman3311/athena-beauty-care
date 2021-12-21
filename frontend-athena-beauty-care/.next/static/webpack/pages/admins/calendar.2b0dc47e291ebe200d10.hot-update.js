"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/calendar",{

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
/*
const updateUserToken = async (endpoint, username, authCode) => {

    console.log(authCode);

    try {

        const response = await axios.post(endpoint, { username, authCode }, {withCredentials: true});

        return response.data;
    }

    catch(error) {

        return error.response.data;
    }

}

export default updateUserToken;
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLjJiMGRjNDdlMjkxZWJlMjAwZDEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxlQUFlO0FBQUEseVlBQUcsaUJBQU9DLFFBQVAsRUFBaUJDLGFBQWpCLEVBQWdDQyxhQUFoQyxFQUErQ0MsVUFBL0MsRUFBMkRDLFNBQTNELEVBQXNFQyxxQkFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWRDLFlBQUFBLFFBRmMsR0FFSEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBRkc7QUFBQTtBQU1oQkwsWUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQU5nQjtBQUFBLG1CQVFPTixpREFBQSxDQUFXSSxhQUFYLEVBQTBCO0FBQUVELGNBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZTSxjQUFBQSxRQUFRLEVBQVJBO0FBQVosYUFBMUIsRUFBa0Q7QUFBQ0ksY0FBQUEsZUFBZSxFQUFFO0FBQWxCLGFBQWxELENBUlA7O0FBQUE7QUFRVkMsWUFBQUEsUUFSVTtBQVVoQkosWUFBQUEsWUFBWSxDQUFDSyxVQUFiLENBQXdCLFVBQXhCO0FBRUFkLFlBQUFBLG1FQUF5QixDQUFDSSxhQUFELEVBQWdCRixRQUFoQixFQUEwQkcsVUFBMUIsRUFBc0NDLFNBQXRDLEVBQWlEQyxxQkFBakQsQ0FBekI7QUFaZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQmhCRSxZQUFBQSxZQUFZLENBQUNLLFVBQWIsQ0FBd0IsVUFBeEI7QUFFQVAsWUFBQUEscUJBQXFCLENBQUMsWUFBTU0sUUFBTixDQUFlRSxJQUFoQixDQUFyQjtBQUNBQyxZQUFBQSxLQUFLLENBQUMsWUFBTUgsUUFBTixDQUFlRSxJQUFoQixDQUFMOztBQW5CZ0I7QUFBQTtBQXVCaEJWLFlBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUF2QmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZKLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBNkJBLCtEQUFlQSxlQUFmO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL3VwZGF0ZVVzZXJUb2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVzIG5lZWRlZCB0byB1cGRhdGUgYWRtaW4gaW5mb1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIGZyb20gXCIuL2ZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHNcIjtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXJUb2tlbiA9IGFzeW5jICh1c2VybmFtZSwgdG9rZW5FbmRwb2ludCwgZXZlbnRFbmRwb2ludCwgc2V0TG9hZGluZywgc2V0RXZlbnRzLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UpID0+IHtcclxuXHJcbiAgICBjb25zdCBhdXRoQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHRva2VuRW5kcG9pbnQsIHsgdXNlcm5hbWUsIGF1dGhDb2RlIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoQ29kZVwiKVxyXG5cclxuICAgICAgICBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGV2ZW50RW5kcG9pbnQsIHVzZXJuYW1lLCBzZXRMb2FkaW5nLCBzZXRFdmVudHMsIHNldFNlcnZlckVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhDb2RlXCIpO1xyXG5cclxuICAgICAgICBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVXNlclRva2VuO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5jb25zdCB1cGRhdGVVc2VyVG9rZW4gPSBhc3luYyAoZW5kcG9pbnQsIHVzZXJuYW1lLCBhdXRoQ29kZSkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGF1dGhDb2RlKTtcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIHsgdXNlcm5hbWUsIGF1dGhDb2RlIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVVc2VyVG9rZW47XHJcbiovXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyIsInVwZGF0ZVVzZXJUb2tlbiIsInVzZXJuYW1lIiwidG9rZW5FbmRwb2ludCIsImV2ZW50RW5kcG9pbnQiLCJzZXRMb2FkaW5nIiwic2V0RXZlbnRzIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwiYXV0aENvZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlIiwicmVtb3ZlSXRlbSIsImRhdGEiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=
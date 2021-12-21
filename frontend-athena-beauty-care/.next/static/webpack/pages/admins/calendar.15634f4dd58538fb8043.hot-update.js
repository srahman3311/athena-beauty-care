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




function fetchGoogleCalendarEvents(_x, _x2, _x3, _x4, _x5) {
  return _fetchGoogleCalendarEvents.apply(this, arguments);
}

function _fetchGoogleCalendarEvents() {
  _fetchGoogleCalendarEvents = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(endpoint, username, setLoading, setEvents, setServerErrorMessage) {
    var response, data;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(endpoint, {
              username: username
            }, {
              withCredentials: true
            });

          case 4:
            response = _context.sent;
            data = response.data.map(function (item) {
              return {
                title: item.summary,
                end: new Date(item.end.dateTime),
                start: new Date(item.start.dateTime),
                allDay: false
              };
            });
            setEvents(data);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            setServerErrorMessage(_context.t0.response.data);

          case 12:
            _context.prev = 12;
            setLoading(false);
            return _context.finish(12);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9, 12, 15]]);
  }));
  return _fetchGoogleCalendarEvents.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchGoogleCalendarEvents);
/*
import axios from "axios";

async function fetchGoogleCalendarEvents(endpoint, username) {


    try {

        const response = await axios.post(endpoint, { username }, {withCredentials: true});

        const data = response.data.map(item => {
            return {
                title: item.summary,
                end: new Date(item.end.dateTime),
                start: new Date(item.start.dateTime),
                allDay: false
            }
        });

        return data;

    } catch(error) {

        return error.response.data;

    }

}


export default fetchGoogleCalendarEvents;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLjE1NjM0ZjRkZDU4NTM4ZmI4MDQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBRWVDOzs7OzsyWkFBZixpQkFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsVUFBN0QsRUFBeUVDLFNBQXpFLEVBQW9GQyxxQkFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLUUYsWUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUxSO0FBQUEsbUJBTytCSixpREFBQSxDQUFXRSxRQUFYLEVBQXFCO0FBQUVDLGNBQUFBLFFBQVEsRUFBUkE7QUFBRixhQUFyQixFQUFtQztBQUFDSyxjQUFBQSxlQUFlLEVBQUU7QUFBbEIsYUFBbkMsQ0FQL0I7O0FBQUE7QUFPY0MsWUFBQUEsUUFQZDtBQVNjQyxZQUFBQSxJQVRkLEdBU3FCRCxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxJQUFJLEVBQUk7QUFDbkMscUJBQU87QUFDSEMsZ0JBQUFBLEtBQUssRUFBRUQsSUFBSSxDQUFDRSxPQURUO0FBRUhDLGdCQUFBQSxHQUFHLEVBQUUsSUFBSUMsSUFBSixDQUFTSixJQUFJLENBQUNHLEdBQUwsQ0FBU0UsUUFBbEIsQ0FGRjtBQUdIQyxnQkFBQUEsS0FBSyxFQUFFLElBQUlGLElBQUosQ0FBU0osSUFBSSxDQUFDTSxLQUFMLENBQVdELFFBQXBCLENBSEo7QUFJSEUsZ0JBQUFBLE1BQU0sRUFBRTtBQUpMLGVBQVA7QUFNSCxhQVBZLENBVHJCO0FBa0JRZCxZQUFBQSxTQUFTLENBQUNLLElBQUQsQ0FBVDtBQWxCUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXNCUUosWUFBQUEscUJBQXFCLENBQUMsWUFBTUcsUUFBTixDQUFlQyxJQUFoQixDQUFyQjs7QUF0QlI7QUFBQTtBQTBCUU4sWUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQTFCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlDQSwrREFBZUgseUJBQWY7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGVuZHBvaW50LCB1c2VybmFtZSwgc2V0TG9hZGluZywgc2V0RXZlbnRzLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UpIHtcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCB7IHVzZXJuYW1lIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uc3VtbWFyeSxcclxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoaXRlbS5lbmQuZGF0ZVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgYWxsRGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEV2ZW50cyhkYXRhKTtcclxuXHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgIHNldFNlcnZlckVycm9yTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyhlbmRwb2ludCwgdXNlcm5hbWUpIHtcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCB7IHVzZXJuYW1lIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uc3VtbWFyeSxcclxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoaXRlbS5lbmQuZGF0ZVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgYWxsRGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG5cclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHM7XHJcbiovIl0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyIsImVuZHBvaW50IiwidXNlcm5hbWUiLCJzZXRMb2FkaW5nIiwic2V0RXZlbnRzIiwic2V0U2VydmVyRXJyb3JNZXNzYWdlIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsInN1bW1hcnkiLCJlbmQiLCJEYXRlIiwiZGF0ZVRpbWUiLCJzdGFydCIsImFsbERheSJdLCJzb3VyY2VSb290IjoiIn0=
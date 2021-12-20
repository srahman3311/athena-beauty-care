"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/calendar",{

/***/ "./pages/admins/calendar.js":
/*!**********************************!*\
  !*** ./pages/admins/calendar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CalendarEvents; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/fetchGoogleCalendarEvents */ "./libs/fetchGoogleCalendarEvents.js");
/* harmony import */ var _libs_updateUserToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/updateUserToken */ "./libs/updateUserToken.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _auth_CheckAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../auth/CheckAuth */ "./auth/CheckAuth.js");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/Calendar.module.css */ "./styles/Calendar.module.css");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/admins/common/SideNav2 */ "./components/admins/common/SideNav2.js");
/* harmony import */ var _components_admins_common_Title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/admins/common/Title */ "./components/admins/common/Title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\calendar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


// Next Modules
 // For Redirecting 


 // React & Other Modules




 // Auth Middleware

 // libraries
// import { fetchEvents } from "../../lib/fetchEvents";
// import { updateAdminInfo } from "../../lib/updateAdminInfo";
// Stylesheets


 // React Big Calendar
// Components


 // Localizing the date time


var localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_9__.momentLocalizer)((moment__WEBPACK_IMPORTED_MODULE_10___default()));
function CalendarEvents() {
  _s();

  // Initializing next router
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    title: "",
    start: "",
    end: ""
  }),
      eventInfo = _useState[0],
      setEventInfo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      events = _useState2[0],
      setEvents = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      displayModal = _useState3[0],
      setDisplayModal = _useState3[1]; // It will be used inside SideNav component to show or not show the integrate google calendar icon/button.
  // Default value set to No


  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("No"),
      hasGoogleCalendarAdded = _useState4[0],
      setHasGoogleCalendarAdded = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    // if user is not logged in redirect to login page
    if (!(0,_auth_CheckAuth__WEBPACK_IMPORTED_MODULE_11__.CheckAuth)()) return router.push("/admins/login");
    var adminUsername = localStorage.getItem("adminUsername");
    var adminHasAddedGoogleCalendar = localStorage.getItem("adminHasAddedGoogleCalendar"); // Update the hasGoogleCalendarAdded state with the value from localStorage. 

    setHasGoogleCalendarAdded(adminHasAddedGoogleCalendar);

    function fetchEvents() {
      return _fetchEvents.apply(this, arguments);
    }

    function _fetchEvents() {
      _fetchEvents = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var endpoint, data;
        return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(adminHasAddedGoogleCalendar === "Yes")) {
                  _context2.next = 6;
                  break;
                }

                endpoint = "http://localhost:7070/api/admins/fetch-google-events";
                _context2.next = 4;
                return (0,_libs_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5__.default)(endpoint, adminUsername);

              case 4:
                data = _context2.sent;
                setEvents(data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _fetchEvents.apply(this, arguments);
    }

    fetchEvents(); // If user is integrating google calendar then authCode will have a value. Use it to update the refreshToken 
    // field of the stylist to use it later to fetch her google calendar events

    if (localStorage.getItem("authCode")) {
      var updateToken = /*#__PURE__*/function () {
        var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
          var endpoint, authCode, response;
          return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  endpoint = "http://localhost:7070/api/admins/update-token";
                  authCode = localStorage.getItem("authCode"); // get the refreshToken by calling the updateStylistToken function

                  _context.next = 4;
                  return (0,_libs_updateUserToken__WEBPACK_IMPORTED_MODULE_6__.default)(endpoint, adminUsername, authCode);

                case 4:
                  response = _context.sent;

                  if (response === "success") {
                    localStorage.setItem("adminHasAddedGoogleCalendar", "Yes");
                    setHasGoogleCalendarAdded("Yes"); // As stylist is done integrating her google calendar remove authCode from localStorage

                    localStorage.removeItem("authCode"); // Finally feth her google calendar events to populate the calendar

                    fetchEvents();
                  } else {
                    alert(response);
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function updateToken() {
          return _ref.apply(this, arguments);
        };
      }();

      updateToken();
    }
  }, [router.isReady]);

  function fetchUserSpecificEvents(event) {
    if (event.target.value === "select User") return;
    return alert(event.target.value);
  }

  function handleSelect(_ref2) {
    var start = _ref2.start,
        end = _ref2.end;
    var title = window.prompt("Title");
    var newEvent = {
      title: title,
      start: start,
      end: end,
      allDay: false
    };
    setEvents(function (currentVal) {
      return [].concat((0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(currentVal), [newEvent]);
    });
  }

  function displayEvent(event) {
    console.log(event, typeof event.start);
    var start = "".concat(event.start.getHours().toString(), ":").concat(event.start.getMinutes().toString());
    setEventInfo(function (currentVal) {
      return _objectSpread(_objectSpread({}, currentVal), {}, {
        title: event.title,
        start: start,
        end: event.end.getHours().toString()
      });
    });
    setDisplayModal(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
    className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().calendar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_admins_common_Title__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_13__.default, {
        authorizedRedirectUri: "http://localhost:3000/admins/auth",
        hasGoogleCalendarAdded: hasGoogleCalendarAdded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_9__.Calendar, {
          selectable: true // Needed for creating event, otherwise slots can't be selected
          ,
          localizer: localizer,
          defaultView: "week",
          events: events,
          timeslots: 6,
          step: 10,
          startAccessor: "start",
          endAccessor: "end",
          onSelectSlot: handleSelect,
          onSelectEvent: displayEvent,
          style: {
            width: "100%",
            height: "95%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 9
  }, this);
}

_s(CalendarEvents, "IdxEyy6qjjKxdq4PSeftOn7XpyA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = CalendarEvents;

var _c;

$RefreshReg$(_c, "CalendarEvents");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLmQ3NGRkMjA0NGVjMmY5ZGQ5YmNkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDeUM7O0FBQ3pDO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Q0FDNEQ7QUFFNUQ7O0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTWEsU0FBUyxHQUFHTixtRUFBZSxDQUFDQyxnREFBRCxDQUFqQztBQUllLFNBQVNNLGNBQVQsR0FBMkI7QUFBQTs7QUFFdEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUVBLGtCQUFrQ0ksK0NBQVEsQ0FBQztBQUFDWSxJQUFBQSxLQUFLLEVBQUUsRUFBUjtBQUFZQyxJQUFBQSxLQUFLLEVBQUUsRUFBbkI7QUFBdUJDLElBQUFBLEdBQUcsRUFBRTtBQUE1QixHQUFELENBQTFDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBNEJoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPaUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdDbEIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT21CLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsaUJBUHNDLENBU3RDO0FBQ0E7OztBQUNBLG1CQUE0RHBCLCtDQUFRLENBQUMsSUFBRCxDQUFwRTtBQUFBLE1BQU9xQixzQkFBUDtBQUFBLE1BQStCQyx5QkFBL0I7O0FBRUF2QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFFWjtBQUNBLFFBQUcsQ0FBQ00sMkRBQVMsRUFBYixFQUFpQixPQUFPTSxNQUFNLENBQUNZLElBQVAsQ0FBWSxlQUFaLENBQVA7QUFFakIsUUFBTUMsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIs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QVEsbUJBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBSUk7QUFBUSxtQkFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVVJLCtEQUFDLHdEQUFEO0FBQ0ksb0JBQVUsTUFEZCxDQUNlO0FBRGY7QUFFSSxtQkFBUyxFQUFFN0IsU0FGZjtBQUdJLHFCQUFXLEVBQUMsTUFIaEI7QUFJSSxnQkFBTSxFQUFFUSxNQUpaO0FBS0ksbUJBQVMsRUFBRSxDQUxmO0FBTUksY0FBSSxFQUFFLEVBTlY7QUFPSSx1QkFBYSxFQUFDLE9BUGxCO0FBUUkscUJBQVcsRUFBQyxLQVJoQjtBQVNJLHNCQUFZLEVBQUV5QixZQVRsQjtBQVVJLHVCQUFhLEVBQUVNLFlBVm5CO0FBV0ksZUFBSyxFQUFFO0FBQUVVLFlBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFBQSxNQUFNLEVBQUU7QUFBekI7QUFYWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBMkRIOztHQW5MdUJqRDtVQUdMZDs7O0tBSEtjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMgZnJvbSBcIi4uLy4uL2xpYnMvZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50c1wiO1xyXG5pbXBvcnQgdXBkYXRlVXNlclRva2VuIGZyb20gXCIuLi8uLi9saWJzL3VwZGF0ZVVzZXJUb2tlblwiO1xyXG5cclxuXHJcbi8vIFJlYWN0ICYgT3RoZXIgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG4vLyBBdXRoIE1pZGRsZXdhcmVcclxuaW1wb3J0IHsgQ2hlY2tBdXRoIH0gZnJvbSBcIi4uLy4uL2F1dGgvQ2hlY2tBdXRoXCI7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuLy8gaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi4vLi4vbGliL2ZldGNoRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7IHVwZGF0ZUFkbWluSW5mbyB9IGZyb20gXCIuLi8uLi9saWIvdXBkYXRlQWRtaW5JbmZvXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FsZW5kYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1iaWctY2FsZW5kYXIvbGliL2Nzcy9yZWFjdC1iaWctY2FsZW5kYXIuY3NzXCI7IC8vIFJlYWN0IEJpZyBDYWxlbmRhclxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZU5hdjIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9TaWRlTmF2MlwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9UaXRsZVwiO1xyXG5cclxuLy8gTG9jYWxpemluZyB0aGUgZGF0ZSB0aW1lXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhckV2ZW50cyAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIG5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnRJbmZvLCBzZXRFdmVudEluZm9dID0gdXNlU3RhdGUoe3RpdGxlOiBcIlwiLCBzdGFydDogXCJcIiwgZW5kOiBcIlwifSk7XHJcbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Rpc3BsYXlNb2RhbCwgc2V0RGlzcGxheU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBJdCB3aWxsIGJlIHVzZWQgaW5zaWRlIFNpZGVOYXYgY29tcG9uZW50IHRvIHNob3cgb3Igbm90IHNob3cgdGhlIGludGVncmF0ZSBnb29nbGUgY2FsZW5kYXIgaWNvbi9idXR0b24uXHJcbiAgICAvLyBEZWZhdWx0IHZhbHVlIHNldCB0byBOb1xyXG4gICAgY29uc3QgW2hhc0dvb2dsZUNhbGVuZGFyQWRkZWQsIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWRdID0gdXNlU3RhdGUoXCJOb1wiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIGlmKCFDaGVja0F1dGgoKSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2FkbWlucy9sb2dpblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRtaW5Vc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5Vc2VybmFtZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIik7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCBzdGF0ZSB3aXRoIHRoZSB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZS4gXHJcbiAgICAgICAgc2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZChhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIpO1xyXG5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEV2ZW50cygpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciA9PT0gXCJZZXNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2FkbWlucy9mZXRjaC1nb29nbGUtZXZlbnRzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMoZW5kcG9pbnQsIGFkbWluVXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50cyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8vIElmIHVzZXIgaXMgaW50ZWdyYXRpbmcgZ29vZ2xlIGNhbGVuZGFyIHRoZW4gYXV0aENvZGUgd2lsbCBoYXZlIGEgdmFsdWUuIFVzZSBpdCB0byB1cGRhdGUgdGhlIHJlZnJlc2hUb2tlbiBcclxuICAgICAgICAvLyBmaWVsZCBvZiB0aGUgc3R5bGlzdCB0byB1c2UgaXQgbGF0ZXIgdG8gZmV0Y2ggaGVyIGdvb2dsZSBjYWxlbmRhciBldmVudHNcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhDb2RlXCIpKSB7IFxyXG5cclxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVG9rZW4oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvYWRtaW5zL3VwZGF0ZS10b2tlblwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhDb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoQ29kZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHJlZnJlc2hUb2tlbiBieSBjYWxsaW5nIHRoZSB1cGRhdGVTdHlsaXN0VG9rZW4gZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBkYXRlVXNlclRva2VuKGVuZHBvaW50LCBhZG1pblVzZXJuYW1lLCBhdXRoQ29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UgPT09IFwic3VjY2Vzc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIsIFwiWWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWQoXCJZZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIHN0eWxpc3QgaXMgZG9uZSBpbnRlZ3JhdGluZyBoZXIgZ29vZ2xlIGNhbGVuZGFyIHJlbW92ZSBhdXRoQ29kZSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsbHkgZmV0aCBoZXIgZ29vZ2xlIGNhbGVuZGFyIGV2ZW50cyB0byBwb3B1bGF0ZSB0aGUgY2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaEV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlVG9rZW4oKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoVXNlclNwZWNpZmljRXZlbnRzIChldmVudCkge1xyXG5cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwic2VsZWN0IFVzZXJcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICByZXR1cm4gYWxlcnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0ICh7IHN0YXJ0LCBlbmQgfSkge1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJUaXRsZVwiKTtcclxuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHt0aXRsZSwgc3RhcnQsIGVuZCwgYWxsRGF5OiBmYWxzZX07XHJcblxyXG4gICAgICAgIHNldEV2ZW50cyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICBuZXdFdmVudFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RXZlbnQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCB0eXBlb2YgZXZlbnQuc3RhcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydCA9IGAke2V2ZW50LnN0YXJ0LmdldEhvdXJzKCkudG9TdHJpbmcoKX06JHtldmVudC5zdGFydC5nZXRNaW51dGVzKCkudG9TdHJpbmcoKX1gXHJcblxyXG4gICAgICAgIHNldEV2ZW50SW5mbyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZDogZXZlbnQuZW5kLmdldEhvdXJzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldERpc3BsYXlNb2RhbCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgXHJcbiBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxTaWRlTmF2MlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6ZWRSZWRpcmVjdFVyaT0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRtaW5zL2F1dGhcIiBcclxuICAgICAgICAgICAgICAgICAgICBoYXNHb29nbGVDYWxlbmRhckFkZGVkID0ge2hhc0dvb2dsZUNhbGVuZGFyQWRkZWR9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnX2NhbGVuZGFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ19jYWxlbmRhcl9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2FsZW5kYXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJiZWF1dGljaWFuXCIgb25DaGFuZ2UgPSB7ZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlbGVjdCBVc2VyXCI+U2VsZWN0IFVzZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdGhlbmFcIj5BdGhlbmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaWNoZWxsZVwiPk1pY2hlbGxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTmljb2xlXCI+Tmljb2xlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlIC8vIE5lZWRlZCBmb3IgY3JlYXRpbmcgZXZlbnQsIG90aGVyd2lzZSBzbG90cyBjYW4ndCBiZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZXI9e2xvY2FsaXplcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZpZXc9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzPXtldmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzbG90cz17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWNjZXNzb3I9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFjY2Vzc29yPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RTbG90PXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0RXZlbnQ9e2Rpc3BsYXlFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfSBzdHlsZT17e2Rpc3BsYXk6IGRpc3BsYXlNb2RhbCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudF90aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5zdGFydH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPi0tLS0tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXZlbnRJbmZvLmVuZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2V2ZW50SW5mby50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwIE1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IHRpbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmxvY2F0aW9uIDE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZV9tb2RhbH0gb25DbGljayA9IHsoKSA9PiBzZXREaXNwbGF5TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIiwidXBkYXRlVXNlclRva2VuIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNhbGVuZGFyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiQ2hlY2tBdXRoIiwic3R5bGVzIiwiU2lkZU5hdjIiLCJUaXRsZSIsImxvY2FsaXplciIsIkNhbGVuZGFyRXZlbnRzIiwicm91dGVyIiwidGl0bGUiLCJzdGFydCIsImVuZCIsImV2ZW50SW5mbyIsInNldEV2ZW50SW5mbyIsImV2ZW50cyIsInNldEV2ZW50cyIsImRpc3BsYXlNb2RhbCIsInNldERpc3BsYXlNb2RhbCIsImhhc0dvb2dsZUNhbGVuZGFyQWRkZWQiLCJzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkIiwicHVzaCIsImFkbWluVXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyIiwiZmV0Y2hFdmVudHMiLCJlbmRwb2ludCIsImRhdGEiLCJ1cGRhdGVUb2tlbiIsImF1dGhDb2RlIiwicmVzcG9uc2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImFsZXJ0IiwiaXNSZWFkeSIsImZldGNoVXNlclNwZWNpZmljRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlbGVjdCIsIndpbmRvdyIsInByb21wdCIsIm5ld0V2ZW50IiwiYWxsRGF5IiwiY3VycmVudFZhbCIsImRpc3BsYXlFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRIb3VycyIsInRvU3RyaW5nIiwiZ2V0TWludXRlcyIsImNhbGVuZGFyIiwiY2FsZW5kYXJfY29udGVudCIsImJpZ19jYWxlbmRhciIsImJpZ19jYWxlbmRhcl9oZWFkZXIiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=
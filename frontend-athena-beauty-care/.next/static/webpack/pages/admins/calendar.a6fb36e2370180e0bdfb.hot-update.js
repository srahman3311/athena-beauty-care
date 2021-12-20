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
  /*
  useEffect(async () => {
        // if user is not logged in redirect to login page
      if(!CheckAuth()) return router.push("/stylists/login");
        // setCalendarAccessCode(localStorage.getItem("calendarAccessCode"));
        // if there is authCode in the local storage that means stylist is integrating her google calendar. 
      // In this case stylist info must be updated by calling the google oauth token endpoint
      if(localStorage.getItem("authCode")) { // if something doesn't exist in the local storage that means it is null.
            // get the refreshToken by calling the updateAdminInfo function
          const newRefreshToken = await updateAdminInfo();
            await localStorage.setItem("calendarAccessCode", newRefreshToken);
            // fetch events now
          const data = await fetchEvents(newRefreshToken);
            // update the events state
          await setEvents(data);
            // just to relaunch the calendar component so that calendar icon at sidenav dissappears
          return setCalendarAccessCode(localStorage.getItem("calendarAccessCode"));
      }
        const calendarAccessCode = await localStorage.getItem("calendarAccessCode");
      // if the user has logged in for the first time so he/she is yet to integrate his/her gooogle calendar,
      // which means refreshToken of this user is just empty string. So there will be no calendar events to show 
      if(calendarAccessCode === "" || calendarAccessCode === "undefined") {
          console.log("refresh token is empty string");
          return setEvents([]);
      }
        //if user has already integrated his/her google calendar then fetch all the events and update the events state
      const data = await fetchEvents(calendarAccessCode);
      return setEvents(data);
     
  }, [calendarAccessCode]);
  */

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
      lineNumber: 197,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_13__.default, {
        redirectUri: "http://localhost:3000/admins/auth",
        hasGoogleCalendarAdded: hasGoogleCalendarAdded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
          lineNumber: 213,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 196,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLmE2ZmIzNmUyMzcwMTgwZTBiZGZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDeUM7O0FBQ3pDO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Q0FDNEQ7QUFFNUQ7O0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTWEsU0FBUyxHQUFHTixtRUFBZSxDQUFDQyxnREFBRCxDQUFqQztBQUllLFNBQVNNLGNBQVQsR0FBMkI7QUFBQTs7QUFFdEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUVBLGtCQUFrQ0ksK0NBQVEsQ0FBQztBQUFDWSxJQUFBQSxLQUFLLEVBQUUsRUFBUjtBQUFZQyxJQUFBQSxLQUFLLEVBQUUsRUFBbkI7QUFBdUJDLElBQUFBLEdBQUcsRUFBRTtBQUE1QixHQUFELENBQTFDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBNEJoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPaUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdDbEIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT21CLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsaUJBUHNDLENBU3RDO0FBQ0E7OztBQUNBLG1CQUE0RHBCLCtDQUFRLENBQUMsSUFBRCxDQUFwRTtBQUFBLE1BQU9xQixzQkFBUDtBQUFBLE1BQStCQyx5QkFBL0I7O0FBRUF2QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFFWjtBQUNBLFFBQUcsQ0FBQ00sMkRBQVMsRUFBYixFQUFpQixPQUFPTSxNQUFNLENBQUNZLElBQVAsQ0FBWSxlQUFaLENBQVA7QUFFakIsUUFBTUMsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIs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QVEsRUFBSWdDLHVCQUF0QztBQUFBLG9DQUNJO0FBQVEsbUJBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBUSxtQkFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFRLG1CQUFLLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQUlJO0FBQVEsbUJBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFVSSwrREFBQyx3REFBRDtBQUNJLG9CQUFVLE1BRGQsQ0FDZTtBQURmO0FBRUksbUJBQVMsRUFBRTdCLFNBRmY7QUFHSSxxQkFBVyxFQUFDLE1BSGhCO0FBSUksZ0JBQU0sRUFBRVEsTUFKWjtBQUtJLG1CQUFTLEVBQUUsQ0FMZjtBQU1JLGNBQUksRUFBRSxFQU5WO0FBT0ksdUJBQWEsRUFBQyxPQVBsQjtBQVFJLHFCQUFXLEVBQUMsS0FSaEI7QUFTSSxzQkFBWSxFQUFFeUIsWUFUbEI7QUFVSSx1QkFBYSxFQUFFTSxZQVZuQjtBQVdJLGVBQUssRUFBRTtBQUFFVSxZQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBQUEsTUFBTSxFQUFFO0FBQXpCO0FBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQTJESDs7R0E1TnVCakQ7VUFHTGQ7OztLQUhLYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbnMvY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIGZyb20gXCIuLi8uLi9saWJzL2ZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHNcIjtcclxuaW1wb3J0IHVwZGF0ZVVzZXJUb2tlbiBmcm9tIFwiLi4vLi4vbGlicy91cGRhdGVVc2VyVG9rZW5cIjtcclxuXHJcblxyXG4vLyBSZWFjdCAmIE90aGVyIE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tIFwicmVhY3QtYmlnLWNhbGVuZGFyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuLy8gQXV0aCBNaWRkbGV3YXJlXHJcbmltcG9ydCB7IENoZWNrQXV0aCB9IGZyb20gXCIuLi8uLi9hdXRoL0NoZWNrQXV0aFwiO1xyXG5cclxuLy8gbGlicmFyaWVzXHJcbi8vIGltcG9ydCB7IGZldGNoRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2xpYi9mZXRjaEV2ZW50c1wiO1xyXG4vLyBpbXBvcnQgeyB1cGRhdGVBZG1pbkluZm8gfSBmcm9tIFwiLi4vLi4vbGliL3VwZGF0ZUFkbWluSW5mb1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhbGVuZGFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtYmlnLWNhbGVuZGFyL2xpYi9jc3MvcmVhY3QtYmlnLWNhbGVuZGFyLmNzc1wiOyAvLyBSZWFjdCBCaWcgQ2FsZW5kYXJcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFNpZGVOYXYyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vU2lkZU5hdjJcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vVGl0bGVcIjtcclxuXHJcbi8vIExvY2FsaXppbmcgdGhlIGRhdGUgdGltZVxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsZW5kYXJFdmVudHMgKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50SW5mbywgc2V0RXZlbnRJbmZvXSA9IHVzZVN0YXRlKHt0aXRsZTogXCJcIiwgc3RhcnQ6IFwiXCIsIGVuZDogXCJcIn0pO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkaXNwbGF5TW9kYWwsIHNldERpc3BsYXlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gSXQgd2lsbCBiZSB1c2VkIGluc2lkZSBTaWRlTmF2IGNvbXBvbmVudCB0byBzaG93IG9yIG5vdCBzaG93IHRoZSBpbnRlZ3JhdGUgZ29vZ2xlIGNhbGVuZGFyIGljb24vYnV0dG9uLlxyXG4gICAgLy8gRGVmYXVsdCB2YWx1ZSBzZXQgdG8gTm9cclxuICAgIGNvbnN0IFtoYXNHb29nbGVDYWxlbmRhckFkZGVkLCBzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkXSA9IHVzZVN0YXRlKFwiTm9cIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICBpZighQ2hlY2tBdXRoKCkpIHJldHVybiByb3V0ZXIucHVzaChcIi9hZG1pbnMvbG9naW5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkbWluVXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluVXNlcm5hbWVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc0dvb2dsZUNhbGVuZGFyQWRkZWQgc3RhdGUgd2l0aCB0aGUgdmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2UuIFxyXG4gICAgICAgIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWQoYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyKTtcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hFdmVudHMoKSB7XHJcblxyXG4gICAgICAgICAgICBpZihhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgPT09IFwiWWVzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9hZG1pbnMvZmV0Y2gtZ29vZ2xlLWV2ZW50c1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGVuZHBvaW50LCBhZG1pblVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaEV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBJZiB1c2VyIGlzIGludGVncmF0aW5nIGdvb2dsZSBjYWxlbmRhciB0aGVuIGF1dGhDb2RlIHdpbGwgaGF2ZSBhIHZhbHVlLiBVc2UgaXQgdG8gdXBkYXRlIHRoZSByZWZyZXNoVG9rZW4gXHJcbiAgICAgICAgLy8gZmllbGQgb2YgdGhlIHN0eWxpc3QgdG8gdXNlIGl0IGxhdGVyIHRvIGZldGNoIGhlciBnb29nbGUgY2FsZW5kYXIgZXZlbnRzXHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoQ29kZVwiKSkgeyBcclxuXHJcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRva2VuKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2FkbWlucy91cGRhdGUtdG9rZW5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWZyZXNoVG9rZW4gYnkgY2FsbGluZyB0aGUgdXBkYXRlU3R5bGlzdFRva2VuIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZVVzZXJUb2tlbihlbmRwb2ludCwgYWRtaW5Vc2VybmFtZSwgYXV0aENvZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlID09PSBcInN1Y2Nlc3NcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhclwiLCBcIlllc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkKFwiWWVzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBcyBzdHlsaXN0IGlzIGRvbmUgaW50ZWdyYXRpbmcgaGVyIGdvb2dsZSBjYWxlbmRhciByZW1vdmUgYXV0aENvZGUgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhDb2RlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGx5IGZldGggaGVyIGdvb2dsZSBjYWxlbmRhciBldmVudHMgdG8gcG9wdWxhdGUgdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZVRva2VuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKVxyXG5cclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIGlmKCFDaGVja0F1dGgoKSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2xvZ2luXCIpO1xyXG5cclxuICAgICAgICAvLyBzZXRDYWxlbmRhckFjY2Vzc0NvZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIikpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhdXRoQ29kZSBpbiB0aGUgbG9jYWwgc3RvcmFnZSB0aGF0IG1lYW5zIHN0eWxpc3QgaXMgaW50ZWdyYXRpbmcgaGVyIGdvb2dsZSBjYWxlbmRhci4gXHJcbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlIHN0eWxpc3QgaW5mbyBtdXN0IGJlIHVwZGF0ZWQgYnkgY2FsbGluZyB0aGUgZ29vZ2xlIG9hdXRoIHRva2VuIGVuZHBvaW50XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoQ29kZVwiKSkgeyAvLyBpZiBzb21ldGhpbmcgZG9lc24ndCBleGlzdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSB0aGF0IG1lYW5zIGl0IGlzIG51bGwuXHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHJlZnJlc2hUb2tlbiBieSBjYWxsaW5nIHRoZSB1cGRhdGVBZG1pbkluZm8gZnVuY3Rpb25cclxuICAgICAgICAgICAgY29uc3QgbmV3UmVmcmVzaFRva2VuID0gYXdhaXQgdXBkYXRlQWRtaW5JbmZvKCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiLCBuZXdSZWZyZXNoVG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gZmV0Y2ggZXZlbnRzIG5vd1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hFdmVudHMobmV3UmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZXZlbnRzIHN0YXRlXHJcbiAgICAgICAgICAgIGF3YWl0IHNldEV2ZW50cyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGp1c3QgdG8gcmVsYXVuY2ggdGhlIGNhbGVuZGFyIGNvbXBvbmVudCBzbyB0aGF0IGNhbGVuZGFyIGljb24gYXQgc2lkZW5hdiBkaXNzYXBwZWFyc1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0Q2FsZW5kYXJBY2Nlc3NDb2RlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbGVuZGFyQWNjZXNzQ29kZSA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIpO1xyXG4gICAgICAgIC8vIGlmIHRoZSB1c2VyIGhhcyBsb2dnZWQgaW4gZm9yIHRoZSBmaXJzdCB0aW1lIHNvIGhlL3NoZSBpcyB5ZXQgdG8gaW50ZWdyYXRlIGhpcy9oZXIgZ29vb2dsZSBjYWxlbmRhcixcclxuICAgICAgICAvLyB3aGljaCBtZWFucyByZWZyZXNoVG9rZW4gb2YgdGhpcyB1c2VyIGlzIGp1c3QgZW1wdHkgc3RyaW5nLiBTbyB0aGVyZSB3aWxsIGJlIG5vIGNhbGVuZGFyIGV2ZW50cyB0byBzaG93IFxyXG4gICAgICAgIGlmKGNhbGVuZGFyQWNjZXNzQ29kZSA9PT0gXCJcIiB8fCBjYWxlbmRhckFjY2Vzc0NvZGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWZyZXNoIHRva2VuIGlzIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldEV2ZW50cyhbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2lmIHVzZXIgaGFzIGFscmVhZHkgaW50ZWdyYXRlZCBoaXMvaGVyIGdvb2dsZSBjYWxlbmRhciB0aGVuIGZldGNoIGFsbCB0aGUgZXZlbnRzIGFuZCB1cGRhdGUgdGhlIGV2ZW50cyBzdGF0ZVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEV2ZW50cyhjYWxlbmRhckFjY2Vzc0NvZGUpO1xyXG4gICAgICAgIHJldHVybiBzZXRFdmVudHMoZGF0YSk7XHJcbiAgICAgICBcclxuICAgIH0sIFtjYWxlbmRhckFjY2Vzc0NvZGVdKTtcclxuICAgICovXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHMgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJzZWxlY3QgVXNlclwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIHJldHVybiBhbGVydChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QgKHsgc3RhcnQsIGVuZCB9KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gd2luZG93LnByb21wdChcIlRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge3RpdGxlLCBzdGFydCwgZW5kLCBhbGxEYXk6IGZhbHNlfTtcclxuXHJcbiAgICAgICAgc2V0RXZlbnRzKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgIG5ld0V2ZW50XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlFdmVudCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIHR5cGVvZiBldmVudC5zdGFydCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gYCR7ZXZlbnQuc3RhcnQuZ2V0SG91cnMoKS50b1N0cmluZygpfToke2V2ZW50LnN0YXJ0LmdldE1pbnV0ZXMoKS50b1N0cmluZygpfWBcclxuXHJcbiAgICAgICAgc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiBldmVudC5lbmQuZ2V0SG91cnMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RGlzcGxheU1vZGFsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBcclxuIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPFNpZGVOYXYyXHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmk9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkbWlucy9hdXRoXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCA9IHtoYXNHb29nbGVDYWxlbmRhckFkZGVkfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ19jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNhbGVuZGFyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmVhdXRpY2lhblwiIG9uQ2hhbmdlID0ge2ZldGNoVXNlclNwZWNpZmljRXZlbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3QgVXNlclwiPlNlbGVjdCBVc2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXRoZW5hXCI+QXRoZW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWljaGVsbGVcIj5NaWNoZWxsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pY29sZVwiPk5pY29sZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZSAvLyBOZWVkZWQgZm9yIGNyZWF0aW5nIGV2ZW50LCBvdGhlcndpc2Ugc2xvdHMgY2FuJ3QgYmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc2xvdHM9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U2xvdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEV2ZW50PXtkaXNwbGF5RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5TW9kYWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uc3RhcnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tLS0tLTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5lbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudEluZm8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4yMCBNaW51dGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCB0aW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5sb2NhdGlvbiAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VfbW9kYWx9IG9uQ2xpY2sgPSB7KCkgPT4gc2V0RGlzcGxheU1vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyIsInVwZGF0ZVVzZXJUb2tlbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDYWxlbmRhciIsIm1vbWVudExvY2FsaXplciIsIm1vbWVudCIsIkNoZWNrQXV0aCIsInN0eWxlcyIsIlNpZGVOYXYyIiwiVGl0bGUiLCJsb2NhbGl6ZXIiLCJDYWxlbmRhckV2ZW50cyIsInJvdXRlciIsInRpdGxlIiwic3RhcnQiLCJlbmQiLCJldmVudEluZm8iLCJzZXRFdmVudEluZm8iLCJldmVudHMiLCJzZXRFdmVudHMiLCJkaXNwbGF5TW9kYWwiLCJzZXREaXNwbGF5TW9kYWwiLCJoYXNHb29nbGVDYWxlbmRhckFkZGVkIiwic2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCIsInB1c2giLCJhZG1pblVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImZldGNoRXZlbnRzIiwiZW5kcG9pbnQiLCJkYXRhIiwidXBkYXRlVG9rZW4iLCJhdXRoQ29kZSIsInJlc3BvbnNlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhbGVydCIsImlzUmVhZHkiLCJmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWxlY3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJuZXdFdmVudCIsImFsbERheSIsImN1cnJlbnRWYWwiLCJkaXNwbGF5RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsImdldE1pbnV0ZXMiLCJjYWxlbmRhciIsImNhbGVuZGFyX2NvbnRlbnQiLCJiaWdfY2FsZW5kYXIiLCJiaWdfY2FsZW5kYXJfaGVhZGVyIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
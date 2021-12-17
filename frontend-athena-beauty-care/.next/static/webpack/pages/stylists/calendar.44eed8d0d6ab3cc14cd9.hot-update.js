"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/calendar",{

/***/ "./pages/stylists/calendar.js":
/*!************************************!*\
  !*** ./pages/stylists/calendar.js ***!
  \************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/Calendar.module.css */ "./styles/Calendar.module.css");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/admins/common/SideNav2 */ "./components/admins/common/SideNav2.js");
/* harmony import */ var _components_admins_common_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/admins/common/Title */ "./components/admins/common/Title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\calendar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


// Next Modules
 // For Redirecting 
// React & Other Modules

 // import axios from "axios";


 // Auth Middleware
// import { CheckAuth } from "../../auth/CheckAuth";
// libraries
// import { fetchEvents } from "../../lib/fetchEvents";
// import { updateAdminInfo } from "../../lib/updateAdminInfo";
// Stylesheets


 // React Big Calendar
// Components


 // Localizing the date time


var localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_6__.momentLocalizer)((moment__WEBPACK_IMPORTED_MODULE_7___default()));
function CalendarEvents() {
  _s();

  // Initializing next router
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    title: "",
    start: "",
    end: ""
  }),
      eventInfo = _useState[0],
      setEventInfo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      events = _useState2[0],
      setEvents = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      displayModal = _useState3[0],
      setDisplayModal = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      calendarAccessCode = _useState4[0],
      setCalendarAccessCode = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var stylistUsername = localStorage.getItem("stylistUsername");

    function fetchStylistGoogleCalendarEvents() {
      return _fetchStylistGoogleCalendarEvents.apply(this, arguments);
    } // if(localStorage.getItem("stylistHasAddedGoogleCalendar") === "Yes") {
    //     fetchStylistGoogleCalendarEvents(username)
    // }


    function _fetchStylistGoogleCalendarEvents() {
      _fetchStylistGoogleCalendarEvents = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var endpoint, response;
        return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(localStorage.getItem("stylistHasAddedGoogleCalendar") === "Yes")) {
                  _context.next = 10;
                  break;
                }

                endpoint = "http://localhost:7070/api/stylists/fetch-google-events";
                _context.prev = 2;
                _context.next = 5;
                return axios.post(endpoint, {
                  stylistUsername: stylistUsername
                }, {
                  withCredentials: true
                });

              case 5:
                response = _context.sent;
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));
      return _fetchStylistGoogleCalendarEvents.apply(this, arguments);
    }

    fetchStylistGoogleCalendarEvents();
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

  function handleSelect(_ref) {
    var start = _ref.start,
        end = _ref.end;
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().calendar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_admins_common_Title__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_9__.default, {
        calendarAccessCode: "Yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_6__.Calendar, {
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
          lineNumber: 175,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 9
  }, this);
}

_s(CalendarEvents, "nbxcfo3slftu3o9aoIFJT0Pqv5o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuNDRlZWQ4ZDBkNmFiM2NjMTRjZDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDeUM7QUFFekM7O0NBRUE7O0FBQ0E7Q0FHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Q0FDNEQ7QUFFNUQ7O0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTVMsU0FBUyxHQUFHTCxtRUFBZSxDQUFDQywrQ0FBRCxDQUFqQztBQUllLFNBQVNLLGNBQVQsR0FBMkI7QUFBQTs7QUFFdEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCOztBQUVBLGtCQUFrQ0UsK0NBQVEsQ0FBQztBQUFDVSxJQUFBQSxLQUFLLEVBQUUsRUFBUjtBQUFZQyxJQUFBQSxLQUFLLEVBQUUsRUFBbkI7QUFBdUJDLElBQUFBLEdBQUcsRUFBRTtBQUE1QixHQUFELENBQTFDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBNEJkLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9lLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3Q2hCLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU9pQixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFvRGxCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9tQixrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBRUFyQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFFWixRQUFNc0IsZUFBZSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQXhCOztBQUZZLGFBSUdDLGdDQUpIO0FBQUE7QUFBQSxNQXVCWjtBQUVBO0FBQ0E7OztBQTFCWTtBQUFBLHNhQUlaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVPRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsK0JBQXJCLE1BQTBELEtBRmpFO0FBQUE7QUFBQTtBQUFBOztBQUljRSxnQkFBQUEsUUFKZCxHQUl5Qix3REFKekI7QUFBQTtBQUFBO0FBQUEsdUJBUW1DQyxLQUFLLENBQUNDLElBQU4sQ0FBV0YsUUFBWCxFQUFxQjtBQUFFSixrQkFBQUEsZUFBZSxFQUFmQTtBQUFGLGlCQUFyQixFQUEwQztBQUFDTyxrQkFBQUEsZUFBZSxFQUFFO0FBQWxCLGlCQUExQyxDQVJuQzs7QUFBQTtBQVFrQkMsZ0JBQUFBLFFBUmxCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FKWTtBQUFBO0FBQUE7O0FBNkJaTCxJQUFBQSxnQ0FBZ0M7QUFJbkMsR0FqQ1EsRUFpQ04sQ0FBQ2YsTUFBTSxDQUFDcUIsT0FBUixDQWpDTSxDQUFUO0FBbUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlJLFdBQVNDLHVCQUFULENBQWtDQyxLQUFsQyxFQUF5QztBQUVyQyxRQUFHQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixLQUF1QixhQUExQixFQUF5QztBQUV6QyxXQUFPQyxLQUFLLENBQUNILEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVo7QUFDSDs7QUFHRCxXQUFTRSxZQUFULE9BQXVDO0FBQUEsUUFBZHpCLEtBQWMsUUFBZEEsS0FBYztBQUFBLFFBQVBDLEdBQU8sUUFBUEEsR0FBTztBQUVuQyxRQUFNRixLQUFLLEdBQUcyQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxPQUFkLENBQWQ7QUFDQSxRQUFNQyxRQUFRLEdBQUc7QUFBQzdCLE1BQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRQyxNQUFBQSxLQUFLLEVBQUxBLEtBQVI7QUFBZUMsTUFBQUEsR0FBRyxFQUFIQSxHQUFmO0FBQW9CNEIsTUFBQUEsTUFBTSxFQUFFO0FBQTVCLEtBQWpCO0FBRUF4QixJQUFBQSxTQUFTLENBQUMsVUFBQXlCLFVBQVUsRUFBSTtBQUNwQixzTkFDT0EsVUFEUCxJQUVJRixRQUZKO0FBSUgsS0FMUSxDQUFUO0FBT0g7O0FBRUQsV0FBU0csWUFBVCxDQUF1QlYsS0FBdkIsRUFBOEI7QUFFMUJXLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaLEVBQW1CLE9BQU9BLEtBQUssQ0FBQ3JCLEtBQWhDO0FBRUEsUUFBTUEsS0FBSyxhQUFNcUIsS0FBSyxDQUFDckIsS0FBTixDQUFZa0MsUUFBWixHQUF1QkMsUUFBdkIsRUFBTixjQUEyQ2QsS0FBSyxDQUFDckIsS0FBTixDQUFZb0MsVUFBWixHQUF5QkQsUUFBekIsRUFBM0MsQ0FBWDtBQUVBaEMsSUFBQUEsWUFBWSxDQUFDLFVBQUEyQixVQUFVLEVBQUk7QUFDdkIsNkNBQ09BLFVBRFA7QUFFSS9CLFFBQUFBLEtBQUssRUFBRXNCLEtBQUssQ0FBQ3RCLEtBRmpCO0FBR0lDLFFBQUFBLEtBQUssRUFBTEEsS0FISjtBQUlJQyxRQUFBQSxHQUFHLEVBQUVvQixLQUFLLENBQUNwQixHQUFOLENBQVVpQyxRQUFWLEdBQXFCQyxRQUFyQjtBQUpUO0FBTUgsS0FQVyxDQUFaO0FBUUE1QixJQUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0g7O0FBS0Qsc0JBRUk7QUFBSyxhQUFTLEVBQUVkLDhFQUFoQjtBQUFBLDRCQUNJLCtEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFFQSxzRkFBaEI7QUFBQSw4QkFDSSwrREFBQyx1RUFBRDtBQUFVLDBCQUFrQixFQUFHO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUEsa0ZBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFQSx5RkFBaEI7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQVEsZ0JBQUksRUFBQyxZQUFiO0FBQTBCLG9CQUFRLEVBQUkyQix1QkFBdEM7QUFBQSxvQ0FDSTtBQUFRLG1CQUFLLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQVEsbUJBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBUSxtQkFBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFJSTtBQUFRLG1CQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUksK0RBQUMsd0RBQUQ7QUFDSSxvQkFBVSxNQURkLENBQ2U7QUFEZjtBQUVJLG1CQUFTLEVBQUV4QixTQUZmO0FBR0kscUJBQVcsRUFBQyxNQUhoQjtBQUlJLGdCQUFNLEVBQUVRLE1BSlo7QUFLSSxtQkFBUyxFQUFFLENBTGY7QUFNSSxjQUFJLEVBQUUsRUFOVjtBQU9JLHVCQUFhLEVBQUMsT0FQbEI7QUFRSSxxQkFBVyxFQUFDLEtBUmhCO0FBU0ksc0JBQVksRUFBRXFCLFlBVGxCO0FBVUksdUJBQWEsRUFBRU0sWUFWbkI7QUFXSSxlQUFLLEVBQUU7QUFBRVUsWUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQUFBLE1BQU0sRUFBRTtBQUF6QjtBQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUF3REg7O0dBekx1QjdDO1VBR0xWOzs7S0FIS1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcblxyXG4vLyBSZWFjdCAmIE90aGVyIE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tIFwicmVhY3QtYmlnLWNhbGVuZGFyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuLy8gQXV0aCBNaWRkbGV3YXJlXHJcbi8vIGltcG9ydCB7IENoZWNrQXV0aCB9IGZyb20gXCIuLi8uLi9hdXRoL0NoZWNrQXV0aFwiO1xyXG5cclxuLy8gbGlicmFyaWVzXHJcbi8vIGltcG9ydCB7IGZldGNoRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2xpYi9mZXRjaEV2ZW50c1wiO1xyXG4vLyBpbXBvcnQgeyB1cGRhdGVBZG1pbkluZm8gfSBmcm9tIFwiLi4vLi4vbGliL3VwZGF0ZUFkbWluSW5mb1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhbGVuZGFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtYmlnLWNhbGVuZGFyL2xpYi9jc3MvcmVhY3QtYmlnLWNhbGVuZGFyLmNzc1wiOyAvLyBSZWFjdCBCaWcgQ2FsZW5kYXJcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFNpZGVOYXYyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vU2lkZU5hdjJcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vVGl0bGVcIjtcclxuXHJcbi8vIExvY2FsaXppbmcgdGhlIGRhdGUgdGltZVxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsZW5kYXJFdmVudHMgKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50SW5mbywgc2V0RXZlbnRJbmZvXSA9IHVzZVN0YXRlKHt0aXRsZTogXCJcIiwgc3RhcnQ6IFwiXCIsIGVuZDogXCJcIn0pO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkaXNwbGF5TW9kYWwsIHNldERpc3BsYXlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2FsZW5kYXJBY2Nlc3NDb2RlLCBzZXRDYWxlbmRhckFjY2Vzc0NvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdFVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHlsaXN0VXNlcm5hbWVcIik7XHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoU3R5bGlzdEdvb2dsZUNhbGVuZGFyRXZlbnRzKCkge1xyXG5cclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhclwiKSA9PT0gXCJZZXNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2ZldGNoLWdvb2dsZS1ldmVudHNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIHsgc3R5bGlzdFVzZXJuYW1lIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIpID09PSBcIlllc1wiKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cyh1c2VybmFtZSlcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cygpO1xyXG5cclxuXHJcblxyXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSlcclxuXHJcbiAgICAvKlxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICBpZighQ2hlY2tBdXRoKCkpIHJldHVybiByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9sb2dpblwiKTtcclxuXHJcbiAgICAgICAgLy8gc2V0Q2FsZW5kYXJBY2Nlc3NDb2RlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIpKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYXV0aENvZGUgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBzdHlsaXN0IGlzIGludGVncmF0aW5nIGhlciBnb29nbGUgY2FsZW5kYXIuIFxyXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSBzdHlsaXN0IGluZm8gbXVzdCBiZSB1cGRhdGVkIGJ5IGNhbGxpbmcgdGhlIGdvb2dsZSBvYXV0aCB0b2tlbiBlbmRwb2ludFxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIikpIHsgLy8gaWYgc29tZXRoaW5nIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBpdCBpcyBudWxsLlxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWZyZXNoVG9rZW4gYnkgY2FsbGluZyB0aGUgdXBkYXRlQWRtaW5JbmZvIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlZnJlc2hUb2tlbiA9IGF3YWl0IHVwZGF0ZUFkbWluSW5mbygpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIiwgbmV3UmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZldGNoIGV2ZW50cyBub3dcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRXZlbnRzKG5ld1JlZnJlc2hUb2tlbik7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGV2ZW50cyBzdGF0ZVxyXG4gICAgICAgICAgICBhd2FpdCBzZXRFdmVudHMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBqdXN0IHRvIHJlbGF1bmNoIHRoZSBjYWxlbmRhciBjb21wb25lbnQgc28gdGhhdCBjYWxlbmRhciBpY29uIGF0IHNpZGVuYXYgZGlzc2FwcGVhcnNcclxuICAgICAgICAgICAgcmV0dXJuIHNldENhbGVuZGFyQWNjZXNzQ29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYWxlbmRhckFjY2Vzc0NvZGUgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKTtcclxuICAgICAgICAvLyBpZiB0aGUgdXNlciBoYXMgbG9nZ2VkIGluIGZvciB0aGUgZmlyc3QgdGltZSBzbyBoZS9zaGUgaXMgeWV0IHRvIGludGVncmF0ZSBoaXMvaGVyIGdvb29nbGUgY2FsZW5kYXIsXHJcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgcmVmcmVzaFRva2VuIG9mIHRoaXMgdXNlciBpcyBqdXN0IGVtcHR5IHN0cmluZy4gU28gdGhlcmUgd2lsbCBiZSBubyBjYWxlbmRhciBldmVudHMgdG8gc2hvdyBcclxuICAgICAgICBpZihjYWxlbmRhckFjY2Vzc0NvZGUgPT09IFwiXCIgfHwgY2FsZW5kYXJBY2Nlc3NDb2RlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaCB0b2tlbiBpcyBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRFdmVudHMoW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIGhhcyBhbHJlYWR5IGludGVncmF0ZWQgaGlzL2hlciBnb29nbGUgY2FsZW5kYXIgdGhlbiBmZXRjaCBhbGwgdGhlIGV2ZW50cyBhbmQgdXBkYXRlIHRoZSBldmVudHMgc3RhdGVcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hFdmVudHMoY2FsZW5kYXJBY2Nlc3NDb2RlKTtcclxuICAgICAgICByZXR1cm4gc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgXHJcbiAgICB9LCBbY2FsZW5kYXJBY2Nlc3NDb2RlXSk7XHJcbiAgICAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoVXNlclNwZWNpZmljRXZlbnRzIChldmVudCkge1xyXG5cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwic2VsZWN0IFVzZXJcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICByZXR1cm4gYWxlcnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0ICh7IHN0YXJ0LCBlbmQgfSkge1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJUaXRsZVwiKTtcclxuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHt0aXRsZSwgc3RhcnQsIGVuZCwgYWxsRGF5OiBmYWxzZX07XHJcblxyXG4gICAgICAgIHNldEV2ZW50cyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICBuZXdFdmVudFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RXZlbnQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCB0eXBlb2YgZXZlbnQuc3RhcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydCA9IGAke2V2ZW50LnN0YXJ0LmdldEhvdXJzKCkudG9TdHJpbmcoKX06JHtldmVudC5zdGFydC5nZXRNaW51dGVzKCkudG9TdHJpbmcoKX1gXHJcblxyXG4gICAgICAgIHNldEV2ZW50SW5mbyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZDogZXZlbnQuZW5kLmdldEhvdXJzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldERpc3BsYXlNb2RhbCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgXHJcbiBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxTaWRlTmF2MiBjYWxlbmRhckFjY2Vzc0NvZGUgPSBcIlllc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ19jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNhbGVuZGFyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmVhdXRpY2lhblwiIG9uQ2hhbmdlID0ge2ZldGNoVXNlclNwZWNpZmljRXZlbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3QgVXNlclwiPlNlbGVjdCBVc2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXRoZW5hXCI+QXRoZW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWljaGVsbGVcIj5NaWNoZWxsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pY29sZVwiPk5pY29sZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZSAvLyBOZWVkZWQgZm9yIGNyZWF0aW5nIGV2ZW50LCBvdGhlcndpc2Ugc2xvdHMgY2FuJ3QgYmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc2xvdHM9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U2xvdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEV2ZW50PXtkaXNwbGF5RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5TW9kYWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uc3RhcnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tLS0tLTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5lbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudEluZm8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4yMCBNaW51dGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCB0aW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5sb2NhdGlvbiAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VfbW9kYWx9IG9uQ2xpY2sgPSB7KCkgPT4gc2V0RGlzcGxheU1vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhbGVuZGFyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50Iiwic3R5bGVzIiwiU2lkZU5hdjIiLCJUaXRsZSIsImxvY2FsaXplciIsIkNhbGVuZGFyRXZlbnRzIiwicm91dGVyIiwidGl0bGUiLCJzdGFydCIsImVuZCIsImV2ZW50SW5mbyIsInNldEV2ZW50SW5mbyIsImV2ZW50cyIsInNldEV2ZW50cyIsImRpc3BsYXlNb2RhbCIsInNldERpc3BsYXlNb2RhbCIsImNhbGVuZGFyQWNjZXNzQ29kZSIsInNldENhbGVuZGFyQWNjZXNzQ29kZSIsInN0eWxpc3RVc2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cyIsImVuZHBvaW50IiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJpc1JlYWR5IiwiZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJoYW5kbGVTZWxlY3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJuZXdFdmVudCIsImFsbERheSIsImN1cnJlbnRWYWwiLCJkaXNwbGF5RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsImdldE1pbnV0ZXMiLCJjYWxlbmRhciIsImNhbGVuZGFyX2NvbnRlbnQiLCJiaWdfY2FsZW5kYXIiLCJiaWdfY2FsZW5kYXJfaGVhZGVyIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
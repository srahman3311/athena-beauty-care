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
    }

    function _fetchStylistGoogleCalendarEvents() {
      _fetchStylistGoogleCalendarEvents = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var endpoint, response, data;
        return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(localStorage.getItem("stylistHasAddedGoogleCalendar") === "Yes")) {
                  _context.next = 13;
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
                data = response.data.map(function (item) {
                  return {
                    title: item.summary,
                    end: new Date(item.end.dateTime),
                    start: new Date(item.start.dateTime),
                    allDay: false
                  };
                });
                setEvents(data);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0.response.data);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
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
      lineNumber: 166,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_9__.default, {
        calendarAccessCode: "Yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_12___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 179,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuOWNjMTg3OGJiZjAyNzZjZjM2NDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDeUM7QUFFekM7O0NBRUE7O0FBQ0E7Q0FHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Q0FDNEQ7QUFFNUQ7O0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTVMsU0FBUyxHQUFHTCxtRUFBZSxDQUFDQywrQ0FBRCxDQUFqQztBQUllLFNBQVNLLGNBQVQsR0FBMkI7QUFBQTs7QUFFdEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCOztBQUVBLGtCQUFrQ0UsK0NBQVEsQ0FBQztBQUFDVSxJQUFBQSxLQUFLLEVBQUUsRUFBUjtBQUFZQyxJQUFBQSxLQUFLLEVBQUUsRUFBbkI7QUFBdUJDLElBQUFBLEdBQUcsRUFBRTtBQUE1QixHQUFELENBQTFDO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBNEJkLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9lLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3Q2hCLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU9pQixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFvRGxCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9tQixrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBRUFyQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFFWixRQUFNc0IsZUFBZSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQXhCOztBQUZZLGFBSUdDLGdDQUpIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNhQUlaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVPRixZQUFZ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RUksbUJBQVMsRUFBRWpDLFNBRmY7QUFHSSxxQkFBVyxFQUFDLE1BSGhCO0FBSUksZ0JBQU0sRUFBRVEsTUFKWjtBQUtJLG1CQUFTLEVBQUUsQ0FMZjtBQU1JLGNBQUksRUFBRSxFQU5WO0FBT0ksdUJBQWEsRUFBQyxPQVBsQjtBQVFJLHFCQUFXLEVBQUMsS0FSaEI7QUFTSSxzQkFBWSxFQUFFOEIsWUFUbEI7QUFVSSx1QkFBYSxFQUFFSyxZQVZuQjtBQVdJLGVBQUssRUFBRTtBQUFFUSxZQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBQUEsTUFBTSxFQUFFO0FBQXpCO0FBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQXdESDs7R0E3THVCbkQ7VUFHTFY7OztLQUhLVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHlsaXN0cy9jYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuXHJcbi8vIFJlYWN0ICYgT3RoZXIgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG4vLyBBdXRoIE1pZGRsZXdhcmVcclxuLy8gaW1wb3J0IHsgQ2hlY2tBdXRoIH0gZnJvbSBcIi4uLy4uL2F1dGgvQ2hlY2tBdXRoXCI7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuLy8gaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi4vLi4vbGliL2ZldGNoRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7IHVwZGF0ZUFkbWluSW5mbyB9IGZyb20gXCIuLi8uLi9saWIvdXBkYXRlQWRtaW5JbmZvXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FsZW5kYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1iaWctY2FsZW5kYXIvbGliL2Nzcy9yZWFjdC1iaWctY2FsZW5kYXIuY3NzXCI7IC8vIFJlYWN0IEJpZyBDYWxlbmRhclxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZU5hdjIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9TaWRlTmF2MlwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9UaXRsZVwiO1xyXG5cclxuLy8gTG9jYWxpemluZyB0aGUgZGF0ZSB0aW1lXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhckV2ZW50cyAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIG5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnRJbmZvLCBzZXRFdmVudEluZm9dID0gdXNlU3RhdGUoe3RpdGxlOiBcIlwiLCBzdGFydDogXCJcIiwgZW5kOiBcIlwifSk7XHJcbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Rpc3BsYXlNb2RhbCwgc2V0RGlzcGxheU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYWxlbmRhckFjY2Vzc0NvZGUsIHNldENhbGVuZGFyQWNjZXNzQ29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsaXN0VXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RVc2VybmFtZVwiKTtcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHMoKSB7XHJcblxyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIpID09PSBcIlllc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvZmV0Y2gtZ29vZ2xlLWV2ZW50c1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgeyBzdHlsaXN0VXNlcm5hbWUgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5zdW1tYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZShpdGVtLmVuZC5kYXRlVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoaXRlbS5zdGFydC5kYXRlVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxEYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cygpO1xyXG5cclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pXHJcblxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiByZWRpcmVjdCB0byBsb2dpbiBwYWdlXHJcbiAgICAgICAgaWYoIUNoZWNrQXV0aCgpKSByZXR1cm4gcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvbG9naW5cIik7XHJcblxyXG4gICAgICAgIC8vIHNldENhbGVuZGFyQWNjZXNzQ29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKSk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGF1dGhDb2RlIGluIHRoZSBsb2NhbCBzdG9yYWdlIHRoYXQgbWVhbnMgc3R5bGlzdCBpcyBpbnRlZ3JhdGluZyBoZXIgZ29vZ2xlIGNhbGVuZGFyLiBcclxuICAgICAgICAvLyBJbiB0aGlzIGNhc2Ugc3R5bGlzdCBpbmZvIG11c3QgYmUgdXBkYXRlZCBieSBjYWxsaW5nIHRoZSBnb29nbGUgb2F1dGggdG9rZW4gZW5kcG9pbnRcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhDb2RlXCIpKSB7IC8vIGlmIHNvbWV0aGluZyBkb2Vzbid0IGV4aXN0IGluIHRoZSBsb2NhbCBzdG9yYWdlIHRoYXQgbWVhbnMgaXQgaXMgbnVsbC5cclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgcmVmcmVzaFRva2VuIGJ5IGNhbGxpbmcgdGhlIHVwZGF0ZUFkbWluSW5mbyBmdW5jdGlvblxyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWZyZXNoVG9rZW4gPSBhd2FpdCB1cGRhdGVBZG1pbkluZm8oKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIsIG5ld1JlZnJlc2hUb2tlbik7XHJcblxyXG4gICAgICAgICAgICAvLyBmZXRjaCBldmVudHMgbm93XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEV2ZW50cyhuZXdSZWZyZXNoVG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBldmVudHMgc3RhdGVcclxuICAgICAgICAgICAgYXdhaXQgc2V0RXZlbnRzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8ganVzdCB0byByZWxhdW5jaCB0aGUgY2FsZW5kYXIgY29tcG9uZW50IHNvIHRoYXQgY2FsZW5kYXIgaWNvbiBhdCBzaWRlbmF2IGRpc3NhcHBlYXJzXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRDYWxlbmRhckFjY2Vzc0NvZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2FsZW5kYXJBY2Nlc3NDb2RlID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIik7XHJcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgaGFzIGxvZ2dlZCBpbiBmb3IgdGhlIGZpcnN0IHRpbWUgc28gaGUvc2hlIGlzIHlldCB0byBpbnRlZ3JhdGUgaGlzL2hlciBnb29vZ2xlIGNhbGVuZGFyLFxyXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHJlZnJlc2hUb2tlbiBvZiB0aGlzIHVzZXIgaXMganVzdCBlbXB0eSBzdHJpbmcuIFNvIHRoZXJlIHdpbGwgYmUgbm8gY2FsZW5kYXIgZXZlbnRzIHRvIHNob3cgXHJcbiAgICAgICAgaWYoY2FsZW5kYXJBY2Nlc3NDb2RlID09PSBcIlwiIHx8IGNhbGVuZGFyQWNjZXNzQ29kZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2ggdG9rZW4gaXMgZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0RXZlbnRzKFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBoYXMgYWxyZWFkeSBpbnRlZ3JhdGVkIGhpcy9oZXIgZ29vZ2xlIGNhbGVuZGFyIHRoZW4gZmV0Y2ggYWxsIHRoZSBldmVudHMgYW5kIHVwZGF0ZSB0aGUgZXZlbnRzIHN0YXRlXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRXZlbnRzKGNhbGVuZGFyQWNjZXNzQ29kZSk7XHJcbiAgICAgICAgcmV0dXJuIHNldEV2ZW50cyhkYXRhKTtcclxuICAgICAgIFxyXG4gICAgfSwgW2NhbGVuZGFyQWNjZXNzQ29kZV0pO1xyXG4gICAgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcInNlbGVjdCBVc2VyXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdCAoeyBzdGFydCwgZW5kIH0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiVGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgbmV3RXZlbnQgPSB7dGl0bGUsIHN0YXJ0LCBlbmQsIGFsbERheTogZmFsc2V9O1xyXG5cclxuICAgICAgICBzZXRFdmVudHMoY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgbmV3RXZlbnRcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUV2ZW50IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgdHlwZW9mIGV2ZW50LnN0YXJ0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBgJHtldmVudC5zdGFydC5nZXRIb3VycygpLnRvU3RyaW5nKCl9OiR7ZXZlbnQuc3RhcnQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCl9YFxyXG5cclxuICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGV2ZW50LmVuZC5nZXRIb3VycygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXREaXNwbGF5TW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIFxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgICAgPFRpdGxlIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8U2lkZU5hdjIgY2FsZW5kYXJBY2Nlc3NDb2RlID0gXCJZZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnX2NhbGVuZGFyX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DYWxlbmRhcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJlYXV0aWNpYW5cIiBvbkNoYW5nZSA9IHtmZXRjaFVzZXJTcGVjaWZpY0V2ZW50c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsZWN0IFVzZXJcIj5TZWxlY3QgVXNlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF0aGVuYVwiPkF0aGVuYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pY2hlbGxlXCI+TWljaGVsbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOaWNvbGVcIj5OaWNvbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGUgLy8gTmVlZGVkIGZvciBjcmVhdGluZyBldmVudCwgb3RoZXJ3aXNlIHNsb3RzIGNhbid0IGJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Vmlldz1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM9e2V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXNsb3RzPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWNjZXNzb3I9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdFNsb3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RFdmVudD17ZGlzcGxheUV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHN0eWxlPXt7ZGlzcGxheTogZGlzcGxheU1vZGFsID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X3RpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXZlbnRJbmZvLnN0YXJ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LS0tLS08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uZW5kfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZXZlbnRJbmZvLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAgTWludXRlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgdGltZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+bG9jYXRpb24gMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlX21vZGFsfSBvbkNsaWNrID0geygpID0+IHNldERpc3BsYXlNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYWxlbmRhciIsIm1vbWVudExvY2FsaXplciIsIm1vbWVudCIsInN0eWxlcyIsIlNpZGVOYXYyIiwiVGl0bGUiLCJsb2NhbGl6ZXIiLCJDYWxlbmRhckV2ZW50cyIsInJvdXRlciIsInRpdGxlIiwic3RhcnQiLCJlbmQiLCJldmVudEluZm8iLCJzZXRFdmVudEluZm8iLCJldmVudHMiLCJzZXRFdmVudHMiLCJkaXNwbGF5TW9kYWwiLCJzZXREaXNwbGF5TW9kYWwiLCJjYWxlbmRhckFjY2Vzc0NvZGUiLCJzZXRDYWxlbmRhckFjY2Vzc0NvZGUiLCJzdHlsaXN0VXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHMiLCJlbmRwb2ludCIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJzdW1tYXJ5IiwiRGF0ZSIsImRhdGVUaW1lIiwiYWxsRGF5IiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsImhhbmRsZVNlbGVjdCIsIndpbmRvdyIsInByb21wdCIsIm5ld0V2ZW50IiwiY3VycmVudFZhbCIsImRpc3BsYXlFdmVudCIsImdldEhvdXJzIiwidG9TdHJpbmciLCJnZXRNaW51dGVzIiwiY2FsZW5kYXIiLCJjYWxlbmRhcl9jb250ZW50IiwiYmlnX2NhbGVuZGFyIiwiYmlnX2NhbGVuZGFyX2hlYWRlciIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
self["webpackHotUpdate_N_E"]("pages/stylists/calendar",{

/***/ "./libs/fetchStylistGoogleCalendarEvents.js":
/*!**************************************************!*\
  !*** ./libs/fetchStylistGoogleCalendarEvents.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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


/***/ }),

/***/ "./pages/stylists/calendar.js":
/*!************************************!*\
  !*** ./pages/stylists/calendar.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _libs_fetchStylistGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/fetchStylistGoogleCalendarEvents */ "./libs/fetchStylistGoogleCalendarEvents.js");
/* harmony import */ var _libs_fetchStylistGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_libs_fetchStylistGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/Calendar.module.css */ "./styles/Calendar.module.css");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admins/common/SideNav2 */ "./components/admins/common/SideNav2.js");
/* harmony import */ var _components_admins_common_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/common/Title */ "./components/admins/common/Title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\calendar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


// Next Modules
 // For Redirecting 

 // React & Other Modules




 // Auth Middleware
// import { CheckAuth } from "../../auth/CheckAuth";
// libraries
// import { fetchEvents } from "../../lib/fetchEvents";
// import { updateAdminInfo } from "../../lib/updateAdminInfo";
// Stylesheets


 // React Big Calendar
// Components


 // Localizing the date time


var localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_8__.momentLocalizer)((moment__WEBPACK_IMPORTED_MODULE_9___default()));
function CalendarEvents() {
  _s();

  // Initializing next router
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    title: "",
    start: "",
    end: ""
  }),
      eventInfo = _useState[0],
      setEventInfo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      events = _useState2[0],
      setEvents = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      displayModal = _useState3[0],
      setDisplayModal = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      calendarAccessCode = _useState4[0],
      setCalendarAccessCode = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var stylistUsername = localStorage.getItem("stylistUsername");

    function fetchEvents() {
      return _fetchEvents.apply(this, arguments);
    }

    function _fetchEvents() {
      _fetchEvents = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var endpoint, data;
        return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(localStorage.getItem("stylistHasAddedGoogleCalendar") === "Yes")) {
                  _context.next = 6;
                  break;
                }

                endpoint = "http://localhost:7070/api/stylists/fetch-google-events";
                _context.next = 4;
                return _libs_fetchStylistGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5___default()(endpoint, stylistUsername);

              case 4:
                data = _context.sent;
                setEvents(data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchEvents.apply(this, arguments);
    }

    fetchEvents();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
    className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().calendar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_admins_common_Title__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_11__.default, {
        calendarAccessCode: "Yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, {
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
          lineNumber: 163,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuZjFhNDZiZDU4ZDQyOGViZGM2MDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUN5Qzs7Q0FHekM7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0NBQzREO0FBRTVEOztBQUNBO0NBR0E7OztBQUNBLElBQU1XLFNBQVMsR0FBR0wsbUVBQWUsQ0FBQ0MsK0NBQUQsQ0FBakM7QUFJZSxTQUFTSyxjQUFULEdBQTJCO0FBQUE7O0FBRXRDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHYixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBa0NHLCtDQUFRLENBQUM7QUFBQ1csSUFBQUEsS0FBSyxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsS0FBSyxFQUFFLEVBQW5CO0FBQXVCQyxJQUFBQSxHQUFHLEVBQUU7QUFBNUIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdDakIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT2tCLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQW9EbkIsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQUEsTUFBT29CLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFFQXRCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU11QixlQUFlLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FBeEI7O0FBRlksYUFJ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Y2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cyBmcm9tIFwiLi4vLi4vbGlicy9mZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50c1wiO1xyXG5cclxuLy8gUmVhY3QgJiBPdGhlciBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgbW9tZW50TG9jYWxpemVyIH0gZnJvbSBcInJlYWN0LWJpZy1jYWxlbmRhclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbi8vIEF1dGggTWlkZGxld2FyZVxyXG4vLyBpbXBvcnQgeyBDaGVja0F1dGggfSBmcm9tIFwiLi4vLi4vYXV0aC9DaGVja0F1dGhcIjtcclxuXHJcbi8vIGxpYnJhcmllc1xyXG4vLyBpbXBvcnQgeyBmZXRjaEV2ZW50cyB9IGZyb20gXCIuLi8uLi9saWIvZmV0Y2hFdmVudHNcIjtcclxuLy8gaW1wb3J0IHsgdXBkYXRlQWRtaW5JbmZvIH0gZnJvbSBcIi4uLy4uL2xpYi91cGRhdGVBZG1pbkluZm9cIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DYWxlbmRhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWJpZy1jYWxlbmRhci9saWIvY3NzL3JlYWN0LWJpZy1jYWxlbmRhci5jc3NcIjsgLy8gUmVhY3QgQmlnIENhbGVuZGFyXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBTaWRlTmF2MiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29tbW9uL1NpZGVOYXYyXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29tbW9uL1RpdGxlXCI7XHJcblxyXG4vLyBMb2NhbGl6aW5nIHRoZSBkYXRlIHRpbWVcclxuY29uc3QgbG9jYWxpemVyID0gbW9tZW50TG9jYWxpemVyKG1vbWVudCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGVuZGFyRXZlbnRzICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgbmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudEluZm8sIHNldEV2ZW50SW5mb10gPSB1c2VTdGF0ZSh7dGl0bGU6IFwiXCIsIHN0YXJ0OiBcIlwiLCBlbmQ6IFwiXCJ9KTtcclxuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGlzcGxheU1vZGFsLCBzZXREaXNwbGF5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhbGVuZGFyQWNjZXNzQ29kZSwgc2V0Q2FsZW5kYXJBY2Nlc3NDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxpc3RVc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R5bGlzdFVzZXJuYW1lXCIpO1xyXG5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEV2ZW50cygpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIikgPT09IFwiWWVzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0cy9mZXRjaC1nb29nbGUtZXZlbnRzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoU3R5bGlzdEdvb2dsZUNhbGVuZGFyRXZlbnRzKGVuZHBvaW50LCBzdHlsaXN0VXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoRXZlbnRzKCk7XHJcblxyXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSlcclxuXHJcbiAgICAvKlxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICBpZighQ2hlY2tBdXRoKCkpIHJldHVybiByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9sb2dpblwiKTtcclxuXHJcbiAgICAgICAgLy8gc2V0Q2FsZW5kYXJBY2Nlc3NDb2RlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIpKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYXV0aENvZGUgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBzdHlsaXN0IGlzIGludGVncmF0aW5nIGhlciBnb29nbGUgY2FsZW5kYXIuIFxyXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSBzdHlsaXN0IGluZm8gbXVzdCBiZSB1cGRhdGVkIGJ5IGNhbGxpbmcgdGhlIGdvb2dsZSBvYXV0aCB0b2tlbiBlbmRwb2ludFxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIikpIHsgLy8gaWYgc29tZXRoaW5nIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBpdCBpcyBudWxsLlxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWZyZXNoVG9rZW4gYnkgY2FsbGluZyB0aGUgdXBkYXRlQWRtaW5JbmZvIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlZnJlc2hUb2tlbiA9IGF3YWl0IHVwZGF0ZUFkbWluSW5mbygpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIiwgbmV3UmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZldGNoIGV2ZW50cyBub3dcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRXZlbnRzKG5ld1JlZnJlc2hUb2tlbik7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGV2ZW50cyBzdGF0ZVxyXG4gICAgICAgICAgICBhd2FpdCBzZXRFdmVudHMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBqdXN0IHRvIHJlbGF1bmNoIHRoZSBjYWxlbmRhciBjb21wb25lbnQgc28gdGhhdCBjYWxlbmRhciBpY29uIGF0IHNpZGVuYXYgZGlzc2FwcGVhcnNcclxuICAgICAgICAgICAgcmV0dXJuIHNldENhbGVuZGFyQWNjZXNzQ29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYWxlbmRhckFjY2Vzc0NvZGUgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKTtcclxuICAgICAgICAvLyBpZiB0aGUgdXNlciBoYXMgbG9nZ2VkIGluIGZvciB0aGUgZmlyc3QgdGltZSBzbyBoZS9zaGUgaXMgeWV0IHRvIGludGVncmF0ZSBoaXMvaGVyIGdvb29nbGUgY2FsZW5kYXIsXHJcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgcmVmcmVzaFRva2VuIG9mIHRoaXMgdXNlciBpcyBqdXN0IGVtcHR5IHN0cmluZy4gU28gdGhlcmUgd2lsbCBiZSBubyBjYWxlbmRhciBldmVudHMgdG8gc2hvdyBcclxuICAgICAgICBpZihjYWxlbmRhckFjY2Vzc0NvZGUgPT09IFwiXCIgfHwgY2FsZW5kYXJBY2Nlc3NDb2RlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaCB0b2tlbiBpcyBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRFdmVudHMoW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIGhhcyBhbHJlYWR5IGludGVncmF0ZWQgaGlzL2hlciBnb29nbGUgY2FsZW5kYXIgdGhlbiBmZXRjaCBhbGwgdGhlIGV2ZW50cyBhbmQgdXBkYXRlIHRoZSBldmVudHMgc3RhdGVcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hFdmVudHMoY2FsZW5kYXJBY2Nlc3NDb2RlKTtcclxuICAgICAgICByZXR1cm4gc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgXHJcbiAgICB9LCBbY2FsZW5kYXJBY2Nlc3NDb2RlXSk7XHJcbiAgICAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoVXNlclNwZWNpZmljRXZlbnRzIChldmVudCkge1xyXG5cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwic2VsZWN0IFVzZXJcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICByZXR1cm4gYWxlcnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0ICh7IHN0YXJ0LCBlbmQgfSkge1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJUaXRsZVwiKTtcclxuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHt0aXRsZSwgc3RhcnQsIGVuZCwgYWxsRGF5OiBmYWxzZX07XHJcblxyXG4gICAgICAgIHNldEV2ZW50cyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICBuZXdFdmVudFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RXZlbnQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCB0eXBlb2YgZXZlbnQuc3RhcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydCA9IGAke2V2ZW50LnN0YXJ0LmdldEhvdXJzKCkudG9TdHJpbmcoKX06JHtldmVudC5zdGFydC5nZXRNaW51dGVzKCkudG9TdHJpbmcoKX1gXHJcblxyXG4gICAgICAgIHNldEV2ZW50SW5mbyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZDogZXZlbnQuZW5kLmdldEhvdXJzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldERpc3BsYXlNb2RhbCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgXHJcbiBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxTaWRlTmF2MiBjYWxlbmRhckFjY2Vzc0NvZGUgPSBcIlllc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ19jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNhbGVuZGFyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmVhdXRpY2lhblwiIG9uQ2hhbmdlID0ge2ZldGNoVXNlclNwZWNpZmljRXZlbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3QgVXNlclwiPlNlbGVjdCBVc2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXRoZW5hXCI+QXRoZW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWljaGVsbGVcIj5NaWNoZWxsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pY29sZVwiPk5pY29sZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZSAvLyBOZWVkZWQgZm9yIGNyZWF0aW5nIGV2ZW50LCBvdGhlcndpc2Ugc2xvdHMgY2FuJ3QgYmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc2xvdHM9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U2xvdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEV2ZW50PXtkaXNwbGF5RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5TW9kYWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uc3RhcnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tLS0tLTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5lbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudEluZm8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4yMCBNaW51dGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCB0aW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5sb2NhdGlvbiAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VfbW9kYWx9IG9uQ2xpY2sgPSB7KCkgPT4gc2V0RGlzcGxheU1vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDYWxlbmRhciIsIm1vbWVudExvY2FsaXplciIsIm1vbWVudCIsInN0eWxlcyIsIlNpZGVOYXYyIiwiVGl0bGUiLCJsb2NhbGl6ZXIiLCJDYWxlbmRhckV2ZW50cyIsInJvdXRlciIsInRpdGxlIiwic3RhcnQiLCJlbmQiLCJldmVudEluZm8iLCJzZXRFdmVudEluZm8iLCJldmVudHMiLCJzZXRFdmVudHMiLCJkaXNwbGF5TW9kYWwiLCJzZXREaXNwbGF5TW9kYWwiLCJjYWxlbmRhckFjY2Vzc0NvZGUiLCJzZXRDYWxlbmRhckFjY2Vzc0NvZGUiLCJzdHlsaXN0VXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hFdmVudHMiLCJlbmRwb2ludCIsImRhdGEiLCJpc1JlYWR5IiwiZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJoYW5kbGVTZWxlY3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJuZXdFdmVudCIsImFsbERheSIsImN1cnJlbnRWYWwiLCJkaXNwbGF5RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsImdldE1pbnV0ZXMiLCJjYWxlbmRhciIsImNhbGVuZGFyX2NvbnRlbnQiLCJiaWdfY2FsZW5kYXIiLCJiaWdfY2FsZW5kYXJfaGVhZGVyIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
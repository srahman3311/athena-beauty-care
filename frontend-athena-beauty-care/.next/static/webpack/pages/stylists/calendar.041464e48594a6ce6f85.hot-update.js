"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/calendar",{

/***/ "./libs/updateStylistToken.js":
/*!************************************!*\
  !*** ./libs/updateStylistToken.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


// Modules needed to update admin info


var updateStylistToken = /*#__PURE__*/function () {
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(endpoint, username, authCode) {
    var response;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(endpoint, {
              username: username,
              authCode: authCode
            }, {
              withCredentials: true
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0.response.data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function updateStylistToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateStylistToken);

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
/* harmony import */ var _libs_updateStylistToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/updateStylistToken */ "./libs/updateStylistToken.js");
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




var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\calendar.js",
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
      setDisplayModal = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      calendarAccessCode = _useState4[0],
      setCalendarAccessCode = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("No"),
      hasGoogleCalendarAdded = _useState5[0],
      setHasGoogleCalendarAdded = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    // if user is not logged in redirect to login page
    if (!(0,_auth_CheckAuth__WEBPACK_IMPORTED_MODULE_11__.CheckAuth)()) return router.push("/stylists/login");
    var stylistUsername = localStorage.getItem("stylistUsername");
    var stylistHasAddedGoogleCalendar = localStorage.getItem("stylistHasAddedGoogleCalendar");
    setHasGoogleCalendarAdded(stylistHasAddedGoogleCalendar);

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
                if (!(stylistHasAddedGoogleCalendar === "Yes")) {
                  _context2.next = 6;
                  break;
                }

                endpoint = "http://localhost:7070/api/stylists/fetch-google-events";
                _context2.next = 4;
                return (0,_libs_fetchStylistGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_5__.default)(endpoint, stylistUsername);

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

    fetchEvents(); // if something doesn't exist in the local storage that means it is null.

    if (localStorage.getItem("authCode")) {
      var updateToken = /*#__PURE__*/function () {
        var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
          var endpoint, authCode, response;
          return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  endpoint = "http://localhost:7070/api/stylists/update-token";
                  authCode = localStorage.getItem("authCode"); // get the refreshToken by calling the updateStylistToken function

                  _context.next = 4;
                  return (0,_libs_updateStylistToken__WEBPACK_IMPORTED_MODULE_6__.default)(endpoint, stylistUsername, authCode);

                case 4:
                  response = _context.sent;

                  if (!(response === "success")) {
                    _context.next = 9;
                    break;
                  }

                  localStorage.setItem("stylistHasAddedGoogleCalendar", "Yes");
                  setHasGoogleCalendarAdded("Yes");
                  return _context.abrupt("return", fetchEvents());

                case 9:
                  alert(response);

                case 10:
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
      lineNumber: 184,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_13__.default, {
        hasGoogleCalendarAdded: hasGoogleCalendarAdded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
          lineNumber: 197,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 9
  }, this);
}

_s(CalendarEvents, "KtoS7TPYVvtDbE6ySm32X+h1glg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuMDQxNDY0ZTQ4NTk0YTZjZTZmODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1DLGtCQUFrQjtBQUFBLHlZQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxRQUFqQixFQUEyQkMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUlJSixpREFBQSxDQUFXRSxRQUFYLEVBQXFCO0FBQUVDLGNBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxjQUFBQSxRQUFRLEVBQVJBO0FBQVosYUFBckIsRUFBNkM7QUFBQ0UsY0FBQUEsZUFBZSxFQUFFO0FBQWxCLGFBQTdDLENBSko7O0FBQUE7QUFJYkMsWUFBQUEsUUFKYTtBQUFBLDZDQU1aQSxRQUFRLENBQUNDLElBTkc7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBV1osWUFBTUQsUUFBTixDQUFlQyxJQVhIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCUCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBZ0JBLCtEQUFlQSxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0NBQ3lDOztBQUN6QztDQUdBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0NBQzREO0FBRTVEOztBQUNBO0NBR0E7OztBQUNBLElBQU1tQixTQUFTLEdBQUdOLG1FQUFlLENBQUNDLGdEQUFELENBQWpDO0FBSWUsU0FBU00sY0FBVCxHQUEyQjtBQUFBOztBQUV0QztBQUNBLE1BQU1DLE1BQU0sR0FBR2Isc0RBQVMsRUFB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R0kscUJBQVcsRUFBQyxNQUhoQjtBQUlJLGdCQUFNLEVBQUVRLE1BSlo7QUFLSSxtQkFBUyxFQUFFLENBTGY7QUFNSSxjQUFJLEVBQUUsRUFOVjtBQU9JLHVCQUFhLEVBQUMsT0FQbEI7QUFRSSxxQkFBVyxFQUFDLEtBUmhCO0FBU0ksc0JBQVksRUFBRXNCLFlBVGxCO0FBVUksdUJBQWEsRUFBRU0sWUFWbkI7QUFXSSxlQUFLLEVBQUU7QUFBRVUsWUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQUFBLE1BQU0sRUFBRTtBQUF6QjtBQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUF3REg7O0dBN011QjlDO1VBR0xaOzs7S0FIS1kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy91cGRhdGVTdHlsaXN0VG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxpc3RzL2NhbGVuZGFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZXMgbmVlZGVkIHRvIHVwZGF0ZSBhZG1pbiBpbmZvXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5jb25zdCB1cGRhdGVTdHlsaXN0VG9rZW4gPSBhc3luYyAoZW5kcG9pbnQsIHVzZXJuYW1lLCBhdXRoQ29kZSkgPT4ge1xyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgeyB1c2VybmFtZSwgYXV0aENvZGUgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVN0eWxpc3RUb2tlbjtcclxuXHJcblxyXG5cclxuIiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cyBmcm9tIFwiLi4vLi4vbGlicy9mZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50c1wiO1xyXG5pbXBvcnQgdXBkYXRlU3R5bGlzdFRva2VuIGZyb20gXCIuLi8uLi9saWJzL3VwZGF0ZVN0eWxpc3RUb2tlblwiO1xyXG5cclxuLy8gUmVhY3QgJiBPdGhlciBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgbW9tZW50TG9jYWxpemVyIH0gZnJvbSBcInJlYWN0LWJpZy1jYWxlbmRhclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbi8vIEF1dGggTWlkZGxld2FyZVxyXG5pbXBvcnQgeyBDaGVja0F1dGggfSBmcm9tIFwiLi4vLi4vYXV0aC9DaGVja0F1dGhcIjtcclxuXHJcbi8vIGxpYnJhcmllc1xyXG4vLyBpbXBvcnQgeyBmZXRjaEV2ZW50cyB9IGZyb20gXCIuLi8uLi9saWIvZmV0Y2hFdmVudHNcIjtcclxuLy8gaW1wb3J0IHsgdXBkYXRlQWRtaW5JbmZvIH0gZnJvbSBcIi4uLy4uL2xpYi91cGRhdGVBZG1pbkluZm9cIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DYWxlbmRhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWJpZy1jYWxlbmRhci9saWIvY3NzL3JlYWN0LWJpZy1jYWxlbmRhci5jc3NcIjsgLy8gUmVhY3QgQmlnIENhbGVuZGFyXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBTaWRlTmF2MiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29tbW9uL1NpZGVOYXYyXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29tbW9uL1RpdGxlXCI7XHJcblxyXG4vLyBMb2NhbGl6aW5nIHRoZSBkYXRlIHRpbWVcclxuY29uc3QgbG9jYWxpemVyID0gbW9tZW50TG9jYWxpemVyKG1vbWVudCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGVuZGFyRXZlbnRzICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgbmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudEluZm8sIHNldEV2ZW50SW5mb10gPSB1c2VTdGF0ZSh7dGl0bGU6IFwiXCIsIHN0YXJ0OiBcIlwiLCBlbmQ6IFwiXCJ9KTtcclxuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGlzcGxheU1vZGFsLCBzZXREaXNwbGF5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhbGVuZGFyQWNjZXNzQ29kZSwgc2V0Q2FsZW5kYXJBY2Nlc3NDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hhc0dvb2dsZUNhbGVuZGFyQWRkZWQsIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWRdID0gdXNlU3RhdGUoXCJOb1wiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIGlmKCFDaGVja0F1dGgoKSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2xvZ2luXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsaXN0VXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RVc2VybmFtZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIpO1xyXG5cclxuICAgICAgICBzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkKHN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyKTtcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hFdmVudHMoKSB7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciA9PT0gXCJZZXNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2ZldGNoLWdvb2dsZS1ldmVudHNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHMoZW5kcG9pbnQsIHN0eWxpc3RVc2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hFdmVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgc29tZXRoaW5nIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBpdCBpcyBudWxsLlxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIikpIHsgXHJcblxyXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVUb2tlbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0cy91cGRhdGUtdG9rZW5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWZyZXNoVG9rZW4gYnkgY2FsbGluZyB0aGUgdXBkYXRlU3R5bGlzdFRva2VuIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZVN0eWxpc3RUb2tlbihlbmRwb2ludCwgc3R5bGlzdFVzZXJuYW1lLCBhdXRoQ29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UgPT09IFwic3VjY2Vzc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIiwgXCJZZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZChcIlllc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVUb2tlbigpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSlcclxuXHJcbiAgICAvKlxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICBpZighQ2hlY2tBdXRoKCkpIHJldHVybiByb3V0ZXIucHVzaChcIi9zdHlsaXN0cy9sb2dpblwiKTtcclxuXHJcbiAgICAgICAgLy8gc2V0Q2FsZW5kYXJBY2Nlc3NDb2RlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIpKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYXV0aENvZGUgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBzdHlsaXN0IGlzIGludGVncmF0aW5nIGhlciBnb29nbGUgY2FsZW5kYXIuIFxyXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSBzdHlsaXN0IGluZm8gbXVzdCBiZSB1cGRhdGVkIGJ5IGNhbGxpbmcgdGhlIGdvb2dsZSBvYXV0aCB0b2tlbiBlbmRwb2ludFxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIikpIHsgLy8gaWYgc29tZXRoaW5nIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBpdCBpcyBudWxsLlxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWZyZXNoVG9rZW4gYnkgY2FsbGluZyB0aGUgdXBkYXRlQWRtaW5JbmZvIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlZnJlc2hUb2tlbiA9IGF3YWl0IHVwZGF0ZUFkbWluSW5mbygpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIiwgbmV3UmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZldGNoIGV2ZW50cyBub3dcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRXZlbnRzKG5ld1JlZnJlc2hUb2tlbik7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGV2ZW50cyBzdGF0ZVxyXG4gICAgICAgICAgICBhd2FpdCBzZXRFdmVudHMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBqdXN0IHRvIHJlbGF1bmNoIHRoZSBjYWxlbmRhciBjb21wb25lbnQgc28gdGhhdCBjYWxlbmRhciBpY29uIGF0IHNpZGVuYXYgZGlzc2FwcGVhcnNcclxuICAgICAgICAgICAgcmV0dXJuIHNldENhbGVuZGFyQWNjZXNzQ29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYWxlbmRhckFjY2Vzc0NvZGUgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKTtcclxuICAgICAgICAvLyBpZiB0aGUgdXNlciBoYXMgbG9nZ2VkIGluIGZvciB0aGUgZmlyc3QgdGltZSBzbyBoZS9zaGUgaXMgeWV0IHRvIGludGVncmF0ZSBoaXMvaGVyIGdvb29nbGUgY2FsZW5kYXIsXHJcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgcmVmcmVzaFRva2VuIG9mIHRoaXMgdXNlciBpcyBqdXN0IGVtcHR5IHN0cmluZy4gU28gdGhlcmUgd2lsbCBiZSBubyBjYWxlbmRhciBldmVudHMgdG8gc2hvdyBcclxuICAgICAgICBpZihjYWxlbmRhckFjY2Vzc0NvZGUgPT09IFwiXCIgfHwgY2FsZW5kYXJBY2Nlc3NDb2RlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaCB0b2tlbiBpcyBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRFdmVudHMoW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIGhhcyBhbHJlYWR5IGludGVncmF0ZWQgaGlzL2hlciBnb29nbGUgY2FsZW5kYXIgdGhlbiBmZXRjaCBhbGwgdGhlIGV2ZW50cyBhbmQgdXBkYXRlIHRoZSBldmVudHMgc3RhdGVcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hFdmVudHMoY2FsZW5kYXJBY2Nlc3NDb2RlKTtcclxuICAgICAgICByZXR1cm4gc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgXHJcbiAgICB9LCBbY2FsZW5kYXJBY2Nlc3NDb2RlXSk7XHJcbiAgICAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoVXNlclNwZWNpZmljRXZlbnRzIChldmVudCkge1xyXG5cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwic2VsZWN0IFVzZXJcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICByZXR1cm4gYWxlcnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0ICh7IHN0YXJ0LCBlbmQgfSkge1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJUaXRsZVwiKTtcclxuICAgICAgICBjb25zdCBuZXdFdmVudCA9IHt0aXRsZSwgc3RhcnQsIGVuZCwgYWxsRGF5OiBmYWxzZX07XHJcblxyXG4gICAgICAgIHNldEV2ZW50cyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICBuZXdFdmVudFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RXZlbnQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCB0eXBlb2YgZXZlbnQuc3RhcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydCA9IGAke2V2ZW50LnN0YXJ0LmdldEhvdXJzKCkudG9TdHJpbmcoKX06JHtldmVudC5zdGFydC5nZXRNaW51dGVzKCkudG9TdHJpbmcoKX1gXHJcblxyXG4gICAgICAgIHNldEV2ZW50SW5mbyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZDogZXZlbnQuZW5kLmdldEhvdXJzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldERpc3BsYXlNb2RhbCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgXHJcbiBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxTaWRlTmF2MiBoYXNHb29nbGVDYWxlbmRhckFkZGVkID0ge2hhc0dvb2dsZUNhbGVuZGFyQWRkZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ19jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNhbGVuZGFyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmVhdXRpY2lhblwiIG9uQ2hhbmdlID0ge2ZldGNoVXNlclNwZWNpZmljRXZlbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3QgVXNlclwiPlNlbGVjdCBVc2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXRoZW5hXCI+QXRoZW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWljaGVsbGVcIj5NaWNoZWxsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pY29sZVwiPk5pY29sZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZSAvLyBOZWVkZWQgZm9yIGNyZWF0aW5nIGV2ZW50LCBvdGhlcndpc2Ugc2xvdHMgY2FuJ3QgYmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc2xvdHM9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U2xvdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEV2ZW50PXtkaXNwbGF5RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5TW9kYWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uc3RhcnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tLS0tLTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5lbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudEluZm8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4yMCBNaW51dGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCB0aW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5sb2NhdGlvbiAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VfbW9kYWx9IG9uQ2xpY2sgPSB7KCkgPT4gc2V0RGlzcGxheU1vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVwZGF0ZVN0eWxpc3RUb2tlbiIsImVuZHBvaW50IiwidXNlcm5hbWUiLCJhdXRoQ29kZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VSb3V0ZXIiLCJmZXRjaFN0eWxpc3RHb29nbGVDYWxlbmRhckV2ZW50cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FsZW5kYXIiLCJtb21lbnRMb2NhbGl6ZXIiLCJtb21lbnQiLCJDaGVja0F1dGgiLCJzdHlsZXMiLCJTaWRlTmF2MiIsIlRpdGxlIiwibG9jYWxpemVyIiwiQ2FsZW5kYXJFdmVudHMiLCJyb3V0ZXIiLCJ0aXRsZSIsInN0YXJ0IiwiZW5kIiwiZXZlbnRJbmZvIiwic2V0RXZlbnRJbmZvIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiZGlzcGxheU1vZGFsIiwic2V0RGlzcGxheU1vZGFsIiwiY2FsZW5kYXJBY2Nlc3NDb2RlIiwic2V0Q2FsZW5kYXJBY2Nlc3NDb2RlIiwiaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCIsInNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWQiLCJwdXNoIiwic3R5bGlzdFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyIiwiZmV0Y2hFdmVudHMiLCJ1cGRhdGVUb2tlbiIsInNldEl0ZW0iLCJhbGVydCIsImlzUmVhZHkiLCJmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWxlY3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJuZXdFdmVudCIsImFsbERheSIsImN1cnJlbnRWYWwiLCJkaXNwbGF5RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsImdldE1pbnV0ZXMiLCJjYWxlbmRhciIsImNhbGVuZGFyX2NvbnRlbnQiLCJiaWdfY2FsZW5kYXIiLCJiaWdfY2FsZW5kYXJfaGVhZGVyIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
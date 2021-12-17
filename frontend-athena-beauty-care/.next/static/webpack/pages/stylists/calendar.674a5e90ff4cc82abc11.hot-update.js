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
      setCalendarAccessCode = _useState4[1]; // It will be used inside SideNav component to show or not show the integrate google calendar icon/button.
  // Default value set to No


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

                  if (response === "success") {
                    localStorage.setItem("stylistHasAddedGoogleCalendar", "Yes");
                    setHasGoogleCalendarAdded("Yes"); // As stylist is done integrating her google calendar remove authCode from localStorage

                    localStorage.removeItem("authCode");
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
      lineNumber: 193,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_13__.default, {
        hasGoogleCalendarAdded: hasGoogleCalendarAdded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_16___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          lineNumber: 206,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuNjc0YTVlOTBmZjRjYzgyYWJjMTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUN5Qzs7QUFDekM7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtDQUM0RDtBQUU1RDs7QUFDQTtDQUdBOzs7QUFDQSxJQUFNYSxTQUFTLEdBQUdOLG1FQUFlLENBQUNDLGdEQUFELENBQWpDO0FBSWUsU0FBU00sY0FBVCxHQUEyQjtBQUFBOztBQUV0QztBQUNBLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7O0FBRUEsa0JBQWtDSSwrQ0FBUSxDQUFDO0FBQUNZLElBQUFBLEtBQUssRUFBRSxFQUFSO0FBQVlDLElBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsSUFBQUEsR0FBRyxFQUFFO0FBQTVCLEdBQUQsQ0FBMUM7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0QmhCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9pQixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBd0NsQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPbUIsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBb0RwQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPcUIsa0JBQVA7QUFBQSxNQUEyQkMscUJBQTNCLGlCQVJzQyxDQVV0QztBQUNBOzs7QUFDQSxtQkFBNER0QiwrQ0FBUSxDQUFDLElBQUQsQ0FBcEU7QUFBQSxNQUFPdUIsc0JBQVA7QUFBQSxNQUErQkMseUJBQS9COztBQUVBekIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBRVo7QUFDQSxRQUFHLENBQUNNLDJEQUFTLEVBQWIsRUFBaUIs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QUFRLGdCQUFJLEVBQUMsWUFBYjtBQUEwQixvQkFBUSxFQUFJa0MsdUJBQXRDO0FBQUEsb0NBQ0k7QUFBUSxtQkFBSyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFRLG1CQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQVEsbUJBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBSUk7QUFBUSxtQkFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVVJLCtEQUFDLHdEQUFEO0FBQ0ksb0JBQVUsTUFEZCxDQUNlO0FBRGY7QUFFSSxtQkFBUyxFQUFFL0IsU0FGZjtBQUdJLHFCQUFXLEVBQUMsTUFIaEI7QUFJSSxnQkFBTSxFQUFFUSxNQUpaO0FBS0ksbUJBQVMsRUFBRSxDQUxmO0FBTUksY0FBSSxFQUFFLEVBTlY7QUFPSSx1QkFBYSxFQUFDLE9BUGxCO0FBUUkscUJBQVcsRUFBQyxLQVJoQjtBQVNJLHNCQUFZLEVBQUUyQixZQVRsQjtBQVVJLHVCQUFhLEVBQUVNLFlBVm5CO0FBV0ksZUFBSyxFQUFFO0FBQUVVLFlBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFBQSxNQUFNLEVBQUU7QUFBekI7QUFYWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBd0RIOztHQXROdUJuRDtVQUdMZDs7O0tBSEtjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxpc3RzL2NhbGVuZGFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgLy8gRm9yIFJlZGlyZWN0aW5nIFxyXG5pbXBvcnQgZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHMgZnJvbSBcIi4uLy4uL2xpYnMvZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHNcIjtcclxuaW1wb3J0IHVwZGF0ZVN0eWxpc3RUb2tlbiBmcm9tIFwiLi4vLi4vbGlicy91cGRhdGVTdHlsaXN0VG9rZW5cIjtcclxuXHJcbi8vIFJlYWN0ICYgT3RoZXIgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG4vLyBBdXRoIE1pZGRsZXdhcmVcclxuaW1wb3J0IHsgQ2hlY2tBdXRoIH0gZnJvbSBcIi4uLy4uL2F1dGgvQ2hlY2tBdXRoXCI7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuLy8gaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi4vLi4vbGliL2ZldGNoRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7IHVwZGF0ZUFkbWluSW5mbyB9IGZyb20gXCIuLi8uLi9saWIvdXBkYXRlQWRtaW5JbmZvXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FsZW5kYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1iaWctY2FsZW5kYXIvbGliL2Nzcy9yZWFjdC1iaWctY2FsZW5kYXIuY3NzXCI7IC8vIFJlYWN0IEJpZyBDYWxlbmRhclxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZU5hdjIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9TaWRlTmF2MlwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9UaXRsZVwiO1xyXG5cclxuLy8gTG9jYWxpemluZyB0aGUgZGF0ZSB0aW1lXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhckV2ZW50cyAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIG5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnRJbmZvLCBzZXRFdmVudEluZm9dID0gdXNlU3RhdGUoe3RpdGxlOiBcIlwiLCBzdGFydDogXCJcIiwgZW5kOiBcIlwifSk7XHJcbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Rpc3BsYXlNb2RhbCwgc2V0RGlzcGxheU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYWxlbmRhckFjY2Vzc0NvZGUsIHNldENhbGVuZGFyQWNjZXNzQ29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICAvLyBJdCB3aWxsIGJlIHVzZWQgaW5zaWRlIFNpZGVOYXYgY29tcG9uZW50IHRvIHNob3cgb3Igbm90IHNob3cgdGhlIGludGVncmF0ZSBnb29nbGUgY2FsZW5kYXIgaWNvbi9idXR0b24uXHJcbiAgICAvLyBEZWZhdWx0IHZhbHVlIHNldCB0byBOb1xyXG4gICAgY29uc3QgW2hhc0dvb2dsZUNhbGVuZGFyQWRkZWQsIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWRdID0gdXNlU3RhdGUoXCJOb1wiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIGlmKCFDaGVja0F1dGgoKSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2xvZ2luXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsaXN0VXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RVc2VybmFtZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIpO1xyXG5cclxuICAgICAgICBzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkKHN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyKTtcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hFdmVudHMoKSB7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciA9PT0gXCJZZXNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL2ZldGNoLWdvb2dsZS1ldmVudHNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHMoZW5kcG9pbnQsIHN0eWxpc3RVc2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hFdmVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgc29tZXRoaW5nIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgdGhhdCBtZWFucyBpdCBpcyBudWxsLlxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIikpIHsgXHJcblxyXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVUb2tlbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0cy91cGRhdGUtdG9rZW5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWZyZXNoVG9rZW4gYnkgY2FsbGluZyB0aGUgdXBkYXRlU3R5bGlzdFRva2VuIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZVN0eWxpc3RUb2tlbihlbmRwb2ludCwgc3R5bGlzdFVzZXJuYW1lLCBhdXRoQ29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UgPT09IFwic3VjY2Vzc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIiwgXCJZZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZChcIlllc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXMgc3R5bGlzdCBpcyBkb25lIGludGVncmF0aW5nIGhlciBnb29nbGUgY2FsZW5kYXIgcmVtb3ZlIGF1dGhDb2RlIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoQ29kZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlVG9rZW4oKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pXHJcblxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiByZWRpcmVjdCB0byBsb2dpbiBwYWdlXHJcbiAgICAgICAgaWYoIUNoZWNrQXV0aCgpKSByZXR1cm4gcm91dGVyLnB1c2goXCIvc3R5bGlzdHMvbG9naW5cIik7XHJcblxyXG4gICAgICAgIC8vIHNldENhbGVuZGFyQWNjZXNzQ29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhbGVuZGFyQWNjZXNzQ29kZVwiKSk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGF1dGhDb2RlIGluIHRoZSBsb2NhbCBzdG9yYWdlIHRoYXQgbWVhbnMgc3R5bGlzdCBpcyBpbnRlZ3JhdGluZyBoZXIgZ29vZ2xlIGNhbGVuZGFyLiBcclxuICAgICAgICAvLyBJbiB0aGlzIGNhc2Ugc3R5bGlzdCBpbmZvIG11c3QgYmUgdXBkYXRlZCBieSBjYWxsaW5nIHRoZSBnb29nbGUgb2F1dGggdG9rZW4gZW5kcG9pbnRcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhDb2RlXCIpKSB7IC8vIGlmIHNvbWV0aGluZyBkb2Vzbid0IGV4aXN0IGluIHRoZSBsb2NhbCBzdG9yYWdlIHRoYXQgbWVhbnMgaXQgaXMgbnVsbC5cclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgcmVmcmVzaFRva2VuIGJ5IGNhbGxpbmcgdGhlIHVwZGF0ZUFkbWluSW5mbyBmdW5jdGlvblxyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWZyZXNoVG9rZW4gPSBhd2FpdCB1cGRhdGVBZG1pbkluZm8oKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FsZW5kYXJBY2Nlc3NDb2RlXCIsIG5ld1JlZnJlc2hUb2tlbik7XHJcblxyXG4gICAgICAgICAgICAvLyBmZXRjaCBldmVudHMgbm93XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEV2ZW50cyhuZXdSZWZyZXNoVG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBldmVudHMgc3RhdGVcclxuICAgICAgICAgICAgYXdhaXQgc2V0RXZlbnRzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8ganVzdCB0byByZWxhdW5jaCB0aGUgY2FsZW5kYXIgY29tcG9uZW50IHNvIHRoYXQgY2FsZW5kYXIgaWNvbiBhdCBzaWRlbmF2IGRpc3NhcHBlYXJzXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRDYWxlbmRhckFjY2Vzc0NvZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2FsZW5kYXJBY2Nlc3NDb2RlID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYWxlbmRhckFjY2Vzc0NvZGVcIik7XHJcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgaGFzIGxvZ2dlZCBpbiBmb3IgdGhlIGZpcnN0IHRpbWUgc28gaGUvc2hlIGlzIHlldCB0byBpbnRlZ3JhdGUgaGlzL2hlciBnb29vZ2xlIGNhbGVuZGFyLFxyXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHJlZnJlc2hUb2tlbiBvZiB0aGlzIHVzZXIgaXMganVzdCBlbXB0eSBzdHJpbmcuIFNvIHRoZXJlIHdpbGwgYmUgbm8gY2FsZW5kYXIgZXZlbnRzIHRvIHNob3cgXHJcbiAgICAgICAgaWYoY2FsZW5kYXJBY2Nlc3NDb2RlID09PSBcIlwiIHx8IGNhbGVuZGFyQWNjZXNzQ29kZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2ggdG9rZW4gaXMgZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0RXZlbnRzKFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBoYXMgYWxyZWFkeSBpbnRlZ3JhdGVkIGhpcy9oZXIgZ29vZ2xlIGNhbGVuZGFyIHRoZW4gZmV0Y2ggYWxsIHRoZSBldmVudHMgYW5kIHVwZGF0ZSB0aGUgZXZlbnRzIHN0YXRlXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRXZlbnRzKGNhbGVuZGFyQWNjZXNzQ29kZSk7XHJcbiAgICAgICAgcmV0dXJuIHNldEV2ZW50cyhkYXRhKTtcclxuICAgICAgIFxyXG4gICAgfSwgW2NhbGVuZGFyQWNjZXNzQ29kZV0pO1xyXG4gICAgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcInNlbGVjdCBVc2VyXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdCAoeyBzdGFydCwgZW5kIH0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiVGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgbmV3RXZlbnQgPSB7dGl0bGUsIHN0YXJ0LCBlbmQsIGFsbERheTogZmFsc2V9O1xyXG5cclxuICAgICAgICBzZXRFdmVudHMoY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgbmV3RXZlbnRcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUV2ZW50IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgdHlwZW9mIGV2ZW50LnN0YXJ0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBgJHtldmVudC5zdGFydC5nZXRIb3VycygpLnRvU3RyaW5nKCl9OiR7ZXZlbnQuc3RhcnQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCl9YFxyXG5cclxuICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGV2ZW50LmVuZC5nZXRIb3VycygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXREaXNwbGF5TW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIFxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgICAgPFRpdGxlIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8U2lkZU5hdjIgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCA9IHtoYXNHb29nbGVDYWxlbmRhckFkZGVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnX2NhbGVuZGFyX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DYWxlbmRhcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJlYXV0aWNpYW5cIiBvbkNoYW5nZSA9IHtmZXRjaFVzZXJTcGVjaWZpY0V2ZW50c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsZWN0IFVzZXJcIj5TZWxlY3QgVXNlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF0aGVuYVwiPkF0aGVuYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pY2hlbGxlXCI+TWljaGVsbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOaWNvbGVcIj5OaWNvbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGUgLy8gTmVlZGVkIGZvciBjcmVhdGluZyBldmVudCwgb3RoZXJ3aXNlIHNsb3RzIGNhbid0IGJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Vmlldz1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM9e2V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXNsb3RzPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWNjZXNzb3I9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdFNsb3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RFdmVudD17ZGlzcGxheUV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHN0eWxlPXt7ZGlzcGxheTogZGlzcGxheU1vZGFsID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X3RpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXZlbnRJbmZvLnN0YXJ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LS0tLS08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uZW5kfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZXZlbnRJbmZvLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAgTWludXRlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgdGltZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+bG9jYXRpb24gMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlX21vZGFsfSBvbkNsaWNrID0geygpID0+IHNldERpc3BsYXlNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmV0Y2hTdHlsaXN0R29vZ2xlQ2FsZW5kYXJFdmVudHMiLCJ1cGRhdGVTdHlsaXN0VG9rZW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2FsZW5kYXIiLCJtb21lbnRMb2NhbGl6ZXIiLCJtb21lbnQiLCJDaGVja0F1dGgiLCJzdHlsZXMiLCJTaWRlTmF2MiIsIlRpdGxlIiwibG9jYWxpemVyIiwiQ2FsZW5kYXJFdmVudHMiLCJyb3V0ZXIiLCJ0aXRsZSIsInN0YXJ0IiwiZW5kIiwiZXZlbnRJbmZvIiwic2V0RXZlbnRJbmZvIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiZGlzcGxheU1vZGFsIiwic2V0RGlzcGxheU1vZGFsIiwiY2FsZW5kYXJBY2Nlc3NDb2RlIiwic2V0Q2FsZW5kYXJBY2Nlc3NDb2RlIiwiaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCIsInNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWQiLCJwdXNoIiwic3R5bGlzdFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0eWxpc3RIYXNBZGRlZEdvb2dsZUNhbGVuZGFyIiwiZmV0Y2hFdmVudHMiLCJlbmRwb2ludCIsImRhdGEiLCJ1cGRhdGVUb2tlbiIsImF1dGhDb2RlIiwicmVzcG9uc2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImFsZXJ0IiwiaXNSZWFkeSIsImZldGNoVXNlclNwZWNpZmljRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlbGVjdCIsIndpbmRvdyIsInByb21wdCIsIm5ld0V2ZW50IiwiYWxsRGF5IiwiY3VycmVudFZhbCIsImRpc3BsYXlFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRIb3VycyIsInRvU3RyaW5nIiwiZ2V0TWludXRlcyIsImNhbGVuZGFyIiwiY2FsZW5kYXJfY29udGVudCIsImJpZ19jYWxlbmRhciIsImJpZ19jYWxlbmRhcl9oZWFkZXIiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=
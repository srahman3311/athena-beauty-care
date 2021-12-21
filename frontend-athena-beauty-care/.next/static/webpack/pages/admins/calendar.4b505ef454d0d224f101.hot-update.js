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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/fetchGoogleCalendarEvents */ "./libs/fetchGoogleCalendarEvents.js");
/* harmony import */ var _libs_updateUserToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/updateUserToken */ "./libs/updateUserToken.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _auth_CheckAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../auth/CheckAuth */ "./auth/CheckAuth.js");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/Calendar.module.css */ "./styles/Calendar.module.css");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admins/common/SideNav2 */ "./components/admins/common/SideNav2.js");
/* harmony import */ var _components_admins_common_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/common/Title */ "./components/admins/common/Title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
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


var localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_7__.momentLocalizer)((moment__WEBPACK_IMPORTED_MODULE_8___default()));
function CalendarEvents() {
  _s();

  // Initializing next router
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

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
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      serverErrorMessage = _useState4[0],
      setServerErrorMessage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      displayModal = _useState5[0],
      setDisplayModal = _useState5[1]; // It will be used inside SideNav component to show or not show the integrate google calendar icon/button.
  // Default value set to No


  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("No"),
      hasGoogleCalendarAdded = _useState6[0],
      setHasGoogleCalendarAdded = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    // if user is not logged in redirect to login page
    if (!(0,_auth_CheckAuth__WEBPACK_IMPORTED_MODULE_9__.CheckAuth)()) return router.push("/admins/login");
    var adminUsername = localStorage.getItem("adminUsername");
    var adminHasAddedGoogleCalendar = localStorage.getItem("adminHasAddedGoogleCalendar"); // Update the hasGoogleCalendarAdded state with the value from localStorage. 

    setHasGoogleCalendarAdded(adminHasAddedGoogleCalendar);
    var eventEndpoint = "http://localhost:7070/api/admins/fetch-google-events";
    var tokenEndpoint = "http://localhost:7070/api/admins/update-token"; //

    if (adminHasAddedGoogleCalendar === "Yes") {
      (0,_libs_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__.default)(eventEndpoint, adminUsername, setLoading, setEvents, setServerErrorMessage);
      return;
    } //


    if (localStorage.getItem("authCode")) {
      (0,_libs_updateUserToken__WEBPACK_IMPORTED_MODULE_4__.default)(adminUsername, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage);
      return;
    } // async function fetchEvents() {
    //     if(adminHasAddedGoogleCalendar === "Yes") {
    //         const endpoint = "http://localhost:7070/api/admins/fetch-google-events";
    //         const data = await fetchGoogleCalendarEvents(endpoint, adminUsername);
    //         setEvents(data);
    //     }
    // }
    // fetchEvents();

    /*
    // If user is integrating google calendar then authCode will have a value. Use it to update the refreshToken 
    // field of the stylist to use it later to fetch her google calendar events
    if(localStorage.getItem("authCode")) { 
          async function updateToken() {
              const endpoint = "http://localhost:7070/api/admins/update-token";
              const authCode = localStorage.getItem("authCode");
              // get the refreshToken by calling the updateStylistToken function
            const response = await updateUserToken(endpoint, adminUsername, authCode);
              if(response === "success") {
                  localStorage.setItem("adminHasAddedGoogleCalendar", "Yes");
                
                setHasGoogleCalendarAdded("Yes");
                  // As stylist is done integrating her google calendar remove authCode from localStorage
                localStorage.removeItem("authCode");
                  // Finally feth her google calendar events to populate the calendar
                fetchEvents();
              } else {
                alert(response);
            }
          }
          updateToken();
    }
    */

  }, [router.isReady]);

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
      lineNumber: 176,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_11__.default, {
        authorizedRedirectUri: "http://localhost:3000/admins/auth",
        hasGoogleCalendarAdded: hasGoogleCalendarAdded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar, {
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
          lineNumber: 192,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 9
  }, this);
}

_s(CalendarEvents, "IsAgP7evqeO4Suj6PLsXmW2fnoE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLjRiNTA1ZWY0NTRkMGQyMjRmMTAxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3lDOztBQUN6QztDQUlBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0NBQzREO0FBRTVEOztBQUNBO0NBR0E7OztBQUNBLElBQU1hLFNBQVMsR0FBR04sbUVBQWUsQ0FBQ0MsK0NBQUQsQ0FBakM7QUFJZSxTQUFTTSxjQUFULEdBQTJCO0FBQUE7O0FBRXRDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHZixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBa0NJLCtDQUFRLENBQUM7QUFBQ1ksSUFBQUEsS0FBSyxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsS0FBSyxFQUFFLEVBQW5CO0FBQXVCQyxJQUFBQSxHQUFHLEVBQUU7QUFBNUIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCaEIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2lCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE4QmxCLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9tQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFvRHBCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9xQixrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQXdDdEIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT3VCLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsaUJBVHNDLENBV3RDO0FBQ0E7OztBQUNBLG1CQUE0RHhCLCtDQUFRLENBQUMsSUFBRCxDQUFwRTtBQUFBLE1BQU95QixzQkFBUDtBQUFBLE1BQStCQyx5QkFBL0I7O0FB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LGNBQUksRUFBRSxFQU5WO0FBT0ksdUJBQWEsRUFBQyxPQVBsQjtBQVFJLHFCQUFXLEVBQUMsS0FSaEI7QUFTSSxzQkFBWSxFQUFFdUIsWUFUbEI7QUFVSSx1QkFBYSxFQUFFTSxZQVZuQjtBQVdJLGVBQUssRUFBRTtBQUFFVSxZQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBQUEsTUFBTSxFQUFFO0FBQXpCO0FBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQTJESDs7R0F2TXVCL0M7VUFHTGQ7OztLQUhLYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbnMvY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzIGZyb20gXCIuLi8uLi9saWJzL2ZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHNcIjtcclxuaW1wb3J0IHVwZGF0ZVVzZXJUb2tlbiBmcm9tIFwiLi4vLi4vbGlicy91cGRhdGVVc2VyVG9rZW5cIjtcclxuXHJcblxyXG4vLyBSZWFjdCAmIE90aGVyIE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tIFwicmVhY3QtYmlnLWNhbGVuZGFyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuLy8gQXV0aCBNaWRkbGV3YXJlXHJcbmltcG9ydCB7IENoZWNrQXV0aCB9IGZyb20gXCIuLi8uLi9hdXRoL0NoZWNrQXV0aFwiO1xyXG5cclxuLy8gbGlicmFyaWVzXHJcbi8vIGltcG9ydCB7IGZldGNoRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2xpYi9mZXRjaEV2ZW50c1wiO1xyXG4vLyBpbXBvcnQgeyB1cGRhdGVBZG1pbkluZm8gfSBmcm9tIFwiLi4vLi4vbGliL3VwZGF0ZUFkbWluSW5mb1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhbGVuZGFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtYmlnLWNhbGVuZGFyL2xpYi9jc3MvcmVhY3QtYmlnLWNhbGVuZGFyLmNzc1wiOyAvLyBSZWFjdCBCaWcgQ2FsZW5kYXJcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFNpZGVOYXYyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vU2lkZU5hdjJcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vVGl0bGVcIjtcclxuXHJcbi8vIExvY2FsaXppbmcgdGhlIGRhdGUgdGltZVxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsZW5kYXJFdmVudHMgKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50SW5mbywgc2V0RXZlbnRJbmZvXSA9IHVzZVN0YXRlKHt0aXRsZTogXCJcIiwgc3RhcnQ6IFwiXCIsIGVuZDogXCJcIn0pO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZXJ2ZXJFcnJvck1lc3NhZ2UsIHNldFNlcnZlckVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkaXNwbGF5TW9kYWwsIHNldERpc3BsYXlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gSXQgd2lsbCBiZSB1c2VkIGluc2lkZSBTaWRlTmF2IGNvbXBvbmVudCB0byBzaG93IG9yIG5vdCBzaG93IHRoZSBpbnRlZ3JhdGUgZ29vZ2xlIGNhbGVuZGFyIGljb24vYnV0dG9uLlxyXG4gICAgLy8gRGVmYXVsdCB2YWx1ZSBzZXQgdG8gTm9cclxuICAgIGNvbnN0IFtoYXNHb29nbGVDYWxlbmRhckFkZGVkLCBzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkXSA9IHVzZVN0YXRlKFwiTm9cIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICBpZighQ2hlY2tBdXRoKCkpIHJldHVybiByb3V0ZXIucHVzaChcIi9hZG1pbnMvbG9naW5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkbWluVXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluVXNlcm5hbWVcIik7XHJcbiAgICAgICAgY29uc3QgYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIik7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCBzdGF0ZSB3aXRoIHRoZSB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZS4gXHJcbiAgICAgICAgc2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZChhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRFbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9hZG1pbnMvZmV0Y2gtZ29vZ2xlLWV2ZW50c1wiO1xyXG4gICAgICAgIGNvbnN0IHRva2VuRW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvYWRtaW5zL3VwZGF0ZS10b2tlblwiO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKGFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciA9PT0gXCJZZXNcIikge1xyXG4gICAgICAgICAgICBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGV2ZW50RW5kcG9pbnQsIGFkbWluVXNlcm5hbWUsIHNldExvYWRpbmcsIHNldEV2ZW50cywgc2V0U2VydmVyRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoQ29kZVwiKSkgeyBcclxuICAgICAgICAgICAgdXBkYXRlVXNlclRva2VuKGFkbWluVXNlcm5hbWUsIHRva2VuRW5kcG9pbnQsIGV2ZW50RW5kcG9pbnQsIHNldExvYWRpbmcsIHNldEV2ZW50cywgc2V0U2VydmVyRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hFdmVudHMoKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBpZihhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgPT09IFwiWWVzXCIpIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9hZG1pbnMvZmV0Y2gtZ29vZ2xlLWV2ZW50c1wiO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEdvb2dsZUNhbGVuZGFyRXZlbnRzKGVuZHBvaW50LCBhZG1pblVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBmZXRjaEV2ZW50cygpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vIElmIHVzZXIgaXMgaW50ZWdyYXRpbmcgZ29vZ2xlIGNhbGVuZGFyIHRoZW4gYXV0aENvZGUgd2lsbCBoYXZlIGEgdmFsdWUuIFVzZSBpdCB0byB1cGRhdGUgdGhlIHJlZnJlc2hUb2tlbiBcclxuICAgICAgICAvLyBmaWVsZCBvZiB0aGUgc3R5bGlzdCB0byB1c2UgaXQgbGF0ZXIgdG8gZmV0Y2ggaGVyIGdvb2dsZSBjYWxlbmRhciBldmVudHNcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhDb2RlXCIpKSB7IFxyXG5cclxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVG9rZW4oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvYWRtaW5zL3VwZGF0ZS10b2tlblwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhDb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoQ29kZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHJlZnJlc2hUb2tlbiBieSBjYWxsaW5nIHRoZSB1cGRhdGVTdHlsaXN0VG9rZW4gZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBkYXRlVXNlclRva2VuKGVuZHBvaW50LCBhZG1pblVzZXJuYW1lLCBhdXRoQ29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UgPT09IFwic3VjY2Vzc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyXCIsIFwiWWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWQoXCJZZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIHN0eWxpc3QgaXMgZG9uZSBpbnRlZ3JhdGluZyBoZXIgZ29vZ2xlIGNhbGVuZGFyIHJlbW92ZSBhdXRoQ29kZSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aENvZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsbHkgZmV0aCBoZXIgZ29vZ2xlIGNhbGVuZGFyIGV2ZW50cyB0byBwb3B1bGF0ZSB0aGUgY2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaEV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlVG9rZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG4gICAgfSwgW3JvdXRlci5pc1JlYWR5XSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHMgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJzZWxlY3QgVXNlclwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIHJldHVybiBhbGVydChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QgKHsgc3RhcnQsIGVuZCB9KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gd2luZG93LnByb21wdChcIlRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge3RpdGxlLCBzdGFydCwgZW5kLCBhbGxEYXk6IGZhbHNlfTtcclxuXHJcbiAgICAgICAgc2V0RXZlbnRzKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgIG5ld0V2ZW50XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlFdmVudCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIHR5cGVvZiBldmVudC5zdGFydCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gYCR7ZXZlbnQuc3RhcnQuZ2V0SG91cnMoKS50b1N0cmluZygpfToke2V2ZW50LnN0YXJ0LmdldE1pbnV0ZXMoKS50b1N0cmluZygpfWBcclxuXHJcbiAgICAgICAgc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiBldmVudC5lbmQuZ2V0SG91cnMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RGlzcGxheU1vZGFsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBcclxuIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPFNpZGVOYXYyXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXplZFJlZGlyZWN0VXJpPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZG1pbnMvYXV0aFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0dvb2dsZUNhbGVuZGFyQWRkZWQgPSB7aGFzR29vZ2xlQ2FsZW5kYXJBZGRlZH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnX2NhbGVuZGFyX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DYWxlbmRhcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJlYXV0aWNpYW5cIiBvbkNoYW5nZSA9IHtmZXRjaFVzZXJTcGVjaWZpY0V2ZW50c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsZWN0IFVzZXJcIj5TZWxlY3QgVXNlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF0aGVuYVwiPkF0aGVuYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pY2hlbGxlXCI+TWljaGVsbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOaWNvbGVcIj5OaWNvbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGUgLy8gTmVlZGVkIGZvciBjcmVhdGluZyBldmVudCwgb3RoZXJ3aXNlIHNsb3RzIGNhbid0IGJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Vmlldz1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHM9e2V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXNsb3RzPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWNjZXNzb3I9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdFNsb3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RFdmVudD17ZGlzcGxheUV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI5NSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHN0eWxlPXt7ZGlzcGxheTogZGlzcGxheU1vZGFsID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X3RpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXZlbnRJbmZvLnN0YXJ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+LS0tLS08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uZW5kfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZXZlbnRJbmZvLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAgTWludXRlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgdGltZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+bG9jYXRpb24gMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlX21vZGFsfSBvbkNsaWNrID0geygpID0+IHNldERpc3BsYXlNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMiLCJ1cGRhdGVVc2VyVG9rZW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2FsZW5kYXIiLCJtb21lbnRMb2NhbGl6ZXIiLCJtb21lbnQiLCJDaGVja0F1dGgiLCJzdHlsZXMiLCJTaWRlTmF2MiIsIlRpdGxlIiwibG9jYWxpemVyIiwiQ2FsZW5kYXJFdmVudHMiLCJyb3V0ZXIiLCJ0aXRsZSIsInN0YXJ0IiwiZW5kIiwiZXZlbnRJbmZvIiwic2V0RXZlbnRJbmZvIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UiLCJkaXNwbGF5TW9kYWwiLCJzZXREaXNwbGF5TW9kYWwiLCJoYXNHb29nbGVDYWxlbmRhckFkZGVkIiwic2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCIsInB1c2giLCJhZG1pblVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImV2ZW50RW5kcG9pbnQiLCJ0b2tlbkVuZHBvaW50IiwiaXNSZWFkeSIsImZldGNoVXNlclNwZWNpZmljRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsZXJ0IiwiaGFuZGxlU2VsZWN0Iiwid2luZG93IiwicHJvbXB0IiwibmV3RXZlbnQiLCJhbGxEYXkiLCJjdXJyZW50VmFsIiwiZGlzcGxheUV2ZW50IiwiY29uc29sZSIsImxvZyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJnZXRNaW51dGVzIiwiY2FsZW5kYXIiLCJjYWxlbmRhcl9jb250ZW50IiwiYmlnX2NhbGVuZGFyIiwiYmlnX2NhbGVuZGFyX2hlYWRlciIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
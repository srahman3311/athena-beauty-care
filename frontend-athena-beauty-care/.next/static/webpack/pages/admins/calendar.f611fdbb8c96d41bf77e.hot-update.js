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
    var tokenEndpoint = "http://localhost:7070/api/admins/update-token"; // If user has already added his/her google calendar then fetch the google events and return once done fetching

    if (adminHasAddedGoogleCalendar === "Yes") {
      (0,_libs_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__.default)(eventEndpoint, adminUsername, setLoading, setEvents, setServerErrorMessage);
      return;
    } //


    if (localStorage.getItem("authCode")) {
      (0,_libs_updateUserToken__WEBPACK_IMPORTED_MODULE_4__.default)(adminUsername, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage);
      return;
    }
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
      lineNumber: 123,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().calendar_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_11__.default, {
        authorizedRedirectUri: "http://localhost:3000/admins/auth",
        hasGoogleCalendarAdded: hasGoogleCalendarAdded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().big_calendar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_14___default().big_calendar_header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h2", {
            children: "Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("select", {
            name: "beautician",
            onChange: fetchUserSpecificEvents,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "select User",
              children: "Select User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "athena",
              children: "Athena"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "Michelle",
              children: "Michelle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("option", {
              value: "Nicole",
              children: "Nicole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
          lineNumber: 139,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhbGVuZGFyLmY2MTFmZGJiOGM5NmQ0MWJmNzdlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3lDOztBQUN6QztDQUlBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0NBQzREO0FBRTVEOztBQUNBO0NBR0E7OztBQUNBLElBQU1hLFNBQVMsR0FBR04sbUVBQWUsQ0FBQ0MsK0NBQUQsQ0FBakM7QUFJZSxTQUFTTSxjQUFULEdBQTJCO0FBQUE7O0FBRXRDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHZixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBa0NJLCtDQUFRLENBQUM7QUFBQ1ksSUFBQUEsS0FBSyxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsS0FBSyxFQUFFLEVBQW5CO0FBQXVCQyxJQUFBQSxHQUFHLEVBQUU7QUFBNUIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCaEIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2lCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE4QmxCLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9tQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFvRHBCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9xQixrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQXdDdEIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT3VCLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsaUJBVHNDLENBV3RDO0FBQ0E7OztBQUNBLG1CQUE0RHhCLCtDQUFRLENBQUMsSUFBRCxDQUFwRTtBQUFBLE1BQU95QixzQkFBUDtBQUFBLE1BQStCQyx5QkFBL0I7O0FB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QUU7QUFBekI7QUFYWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBMkRIOztHQWxKdUIvQztVQUdMZDs7O0tBSEtjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMgZnJvbSBcIi4uLy4uL2xpYnMvZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50c1wiO1xyXG5pbXBvcnQgdXBkYXRlVXNlclRva2VuIGZyb20gXCIuLi8uLi9saWJzL3VwZGF0ZVVzZXJUb2tlblwiO1xyXG5cclxuXHJcbi8vIFJlYWN0ICYgT3RoZXIgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG4vLyBBdXRoIE1pZGRsZXdhcmVcclxuaW1wb3J0IHsgQ2hlY2tBdXRoIH0gZnJvbSBcIi4uLy4uL2F1dGgvQ2hlY2tBdXRoXCI7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuLy8gaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi4vLi4vbGliL2ZldGNoRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7IHVwZGF0ZUFkbWluSW5mbyB9IGZyb20gXCIuLi8uLi9saWIvdXBkYXRlQWRtaW5JbmZvXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FsZW5kYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1iaWctY2FsZW5kYXIvbGliL2Nzcy9yZWFjdC1iaWctY2FsZW5kYXIuY3NzXCI7IC8vIFJlYWN0IEJpZyBDYWxlbmRhclxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZU5hdjIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9TaWRlTmF2MlwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbW1vbi9UaXRsZVwiO1xyXG5cclxuLy8gTG9jYWxpemluZyB0aGUgZGF0ZSB0aW1lXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhckV2ZW50cyAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIG5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnRJbmZvLCBzZXRFdmVudEluZm9dID0gdXNlU3RhdGUoe3RpdGxlOiBcIlwiLCBzdGFydDogXCJcIiwgZW5kOiBcIlwifSk7XHJcbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlcnZlckVycm9yTWVzc2FnZSwgc2V0U2VydmVyRXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Rpc3BsYXlNb2RhbCwgc2V0RGlzcGxheU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBJdCB3aWxsIGJlIHVzZWQgaW5zaWRlIFNpZGVOYXYgY29tcG9uZW50IHRvIHNob3cgb3Igbm90IHNob3cgdGhlIGludGVncmF0ZSBnb29nbGUgY2FsZW5kYXIgaWNvbi9idXR0b24uXHJcbiAgICAvLyBEZWZhdWx0IHZhbHVlIHNldCB0byBOb1xyXG4gICAgY29uc3QgW2hhc0dvb2dsZUNhbGVuZGFyQWRkZWQsIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWRdID0gdXNlU3RhdGUoXCJOb1wiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIGlmKCFDaGVja0F1dGgoKSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2FkbWlucy9sb2dpblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRtaW5Vc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5Vc2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCBhZG1pbkhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhclwiKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNHb29nbGVDYWxlbmRhckFkZGVkIHN0YXRlIHdpdGggdGhlIHZhbHVlIGZyb20gbG9jYWxTdG9yYWdlLiBcclxuICAgICAgICBzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkKGFkbWluSGFzQWRkZWRHb29nbGVDYWxlbmRhcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50RW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvYWRtaW5zL2ZldGNoLWdvb2dsZS1ldmVudHNcIjtcclxuICAgICAgICBjb25zdCB0b2tlbkVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2FkbWlucy91cGRhdGUtdG9rZW5cIjtcclxuXHJcbiAgICAgICAgLy8gSWYgdXNlciBoYXMgYWxyZWFkeSBhZGRlZCBoaXMvaGVyIGdvb2dsZSBjYWxlbmRhciB0aGVuIGZldGNoIHRoZSBnb29nbGUgZXZlbnRzIGFuZCByZXR1cm4gb25jZSBkb25lIGZldGNoaW5nXHJcbiAgICAgICAgaWYoYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyID09PSBcIlllc1wiKSB7XHJcbiAgICAgICAgICAgIGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMoZXZlbnRFbmRwb2ludCwgYWRtaW5Vc2VybmFtZSwgc2V0TG9hZGluZywgc2V0RXZlbnRzLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhDb2RlXCIpKSB7IFxyXG4gICAgICAgICAgICB1cGRhdGVVc2VyVG9rZW4oYWRtaW5Vc2VybmFtZSwgdG9rZW5FbmRwb2ludCwgZXZlbnRFbmRwb2ludCwgc2V0TG9hZGluZywgc2V0RXZlbnRzLCBzZXRTZXJ2ZXJFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcInNlbGVjdCBVc2VyXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdCAoeyBzdGFydCwgZW5kIH0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiVGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgbmV3RXZlbnQgPSB7dGl0bGUsIHN0YXJ0LCBlbmQsIGFsbERheTogZmFsc2V9O1xyXG5cclxuICAgICAgICBzZXRFdmVudHMoY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgbmV3RXZlbnRcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUV2ZW50IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgdHlwZW9mIGV2ZW50LnN0YXJ0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBgJHtldmVudC5zdGFydC5nZXRIb3VycygpLnRvU3RyaW5nKCl9OiR7ZXZlbnQuc3RhcnQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCl9YFxyXG5cclxuICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGV2ZW50LmVuZC5nZXRIb3VycygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXREaXNwbGF5TW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIFxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgICAgPFRpdGxlIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8U2lkZU5hdjJcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemVkUmVkaXJlY3RVcmk9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkbWlucy9hdXRoXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCA9IHtoYXNHb29nbGVDYWxlbmRhckFkZGVkfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ19jYWxlbmRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNhbGVuZGFyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmVhdXRpY2lhblwiIG9uQ2hhbmdlID0ge2ZldGNoVXNlclNwZWNpZmljRXZlbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3QgVXNlclwiPlNlbGVjdCBVc2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXRoZW5hXCI+QXRoZW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWljaGVsbGVcIj5NaWNoZWxsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pY29sZVwiPk5pY29sZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZSAvLyBOZWVkZWQgZm9yIGNyZWF0aW5nIGV2ZW50LCBvdGhlcndpc2Ugc2xvdHMgY2FuJ3QgYmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc2xvdHM9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U2xvdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEV2ZW50PXtkaXNwbGF5RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5TW9kYWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudEluZm8uc3RhcnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4tLS0tLTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5lbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudEluZm8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4yMCBNaW51dGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCB0aW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5sb2NhdGlvbiAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VfbW9kYWx9IG9uQ2xpY2sgPSB7KCkgPT4gc2V0RGlzcGxheU1vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyIsInVwZGF0ZVVzZXJUb2tlbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDYWxlbmRhciIsIm1vbWVudExvY2FsaXplciIsIm1vbWVudCIsIkNoZWNrQXV0aCIsInN0eWxlcyIsIlNpZGVOYXYyIiwiVGl0bGUiLCJsb2NhbGl6ZXIiLCJDYWxlbmRhckV2ZW50cyIsInJvdXRlciIsInRpdGxlIiwic3RhcnQiLCJlbmQiLCJldmVudEluZm8iLCJzZXRFdmVudEluZm8iLCJldmVudHMiLCJzZXRFdmVudHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImRpc3BsYXlNb2RhbCIsInNldERpc3BsYXlNb2RhbCIsImhhc0dvb2dsZUNhbGVuZGFyQWRkZWQiLCJzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkIiwicHVzaCIsImFkbWluVXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRtaW5IYXNBZGRlZEdvb2dsZUNhbGVuZGFyIiwiZXZlbnRFbmRwb2ludCIsInRva2VuRW5kcG9pbnQiLCJpc1JlYWR5IiwiZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJoYW5kbGVTZWxlY3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJuZXdFdmVudCIsImFsbERheSIsImN1cnJlbnRWYWwiLCJkaXNwbGF5RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsImdldE1pbnV0ZXMiLCJjYWxlbmRhciIsImNhbGVuZGFyX2NvbnRlbnQiLCJiaWdfY2FsZW5kYXIiLCJiaWdfY2FsZW5kYXJfaGVhZGVyIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
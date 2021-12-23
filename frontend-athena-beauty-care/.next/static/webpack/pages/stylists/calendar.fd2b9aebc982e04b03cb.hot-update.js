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
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/Calendar.module.css */ "./styles/Calendar.module.css");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/common/SideNav2 */ "./components/admins/common/SideNav2.js");
/* harmony import */ var _components_admins_common_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/admins/common/Title */ "./components/admins/common/Title.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
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
    if (!(0,_auth_CheckAuth__WEBPACK_IMPORTED_MODULE_9__.CheckAuth)()) return router.push("/stylists/login");
    var stylistUsername = localStorage.getItem("stylistUsername");
    var stylistHasAddedGoogleCalendar = localStorage.getItem("stylistHasAddedGoogleCalendar"); // Update the hasGoogleCalendarAdded state with the value from localStorage. 

    setHasGoogleCalendarAdded(stylistHasAddedGoogleCalendar);
    var eventEndpoint = "http://localhost:7070/api/stylists/fetch-google-events";
    var tokenEndpoint = "http://localhost:7070/api/stylists/update-token"; // If user has already added his/her google calendar then fetch the google events and return once done fetching

    if (stylistHasAddedGoogleCalendar === "Yes") {
      (0,_libs_fetchGoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_3__.default)(eventEndpoint, stylistUsername, setLoading, setEvents, setServerErrorMessage);
      return;
    } // If user is trying to integrate his/her google calendar then call updateUserToken function. If everything
    // goes ok then updateUserToken will call fetchGoogleCalendarEvents from there and fetch user's google events


    if (localStorage.getItem("authCode")) {
      (0,_libs_updateUserToken__WEBPACK_IMPORTED_MODULE_4__.default)(stylistUsername, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_11__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15___default().calendar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15___default().calendar_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_admins_common_SideNav2__WEBPACK_IMPORTED_MODULE_12__.default, {
          authorizedRedirectUri: "http://localhost:3000/stylists/auth",
          hasGoogleCalendarAdded: hasGoogleCalendarAdded
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15___default().big_calendar),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_15___default().big_calendar_header),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h2", {
              children: "Calendar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("select", {
              name: "beautician",
              onChange: fetchUserSpecificEvents,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("option", {
                value: "select User",
                children: "Select User"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("option", {
                value: "athena",
                children: "Athena"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("option", {
                value: "Michelle",
                children: "Michelle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("option", {
                value: "Nicole",
                children: "Nicole"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar, {
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
            lineNumber: 143,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvY2FsZW5kYXIuZmQyYjlhZWJjOTgyZTA0YjAzY2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3lDOztBQUN6QztDQUlBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0NBQzREO0FBRTVEOztBQUNBO0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTWMsU0FBUyxHQUFHUCxtRUFBZSxDQUFDQywrQ0FBRCxDQUFqQztBQUllLFNBQVNPLGNBQVQsR0FBMkI7QUFBQTs7QUFFdEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdoQixzREFBUyxFQUF4Qjs7QUFFQSxrQkFBa0NJLCtDQUFRLENBQUM7QUFBQ2EsSUFBQUEsS0FBSyxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsS0FBSyxFQUFFLEVBQW5CO0FBQXVCQyxJQUFBQSxHQUFHLEVBQUU7QUFBNUIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCakIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2tCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE4Qm5CLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9vQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFvRHJCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9zQixrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQXdDdkIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT3dCLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsaUJBVHNDLENBWXRDO0FBQ0E7OztBQUNBLG1CQUE0RHpCLCtDQUFRLENBQUMsSUFBRCxDQUFwRTtBQUFBLE1BQU8wQixzQkFBUDtBQUFBLE1BQStCQyx5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QUFFO0FBQXpCO0FBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQTZESDs7R0F0SnVCL0M7VUFHTGY7OztLQUhLZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHlsaXN0cy9jYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IGZldGNoR29vZ2xlQ2FsZW5kYXJFdmVudHMgZnJvbSBcIi4uLy4uL2xpYnMvZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50c1wiO1xyXG5pbXBvcnQgdXBkYXRlVXNlclRva2VuIGZyb20gXCIuLi8uLi9saWJzL3VwZGF0ZVVzZXJUb2tlblwiO1xyXG5cclxuXHJcbi8vIFJlYWN0ICYgT3RoZXIgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG4vLyBBdXRoIE1pZGRsZXdhcmVcclxuaW1wb3J0IHsgQ2hlY2tBdXRoIH0gZnJvbSBcIi4uLy4uL2F1dGgvQ2hlY2tBdXRoXCI7XHJcblxyXG4vLyBsaWJyYXJpZXNcclxuLy8gaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi4vLi4vbGliL2ZldGNoRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7IHVwZGF0ZUFkbWluSW5mbyB9IGZyb20gXCIuLi8uLi9saWIvdXBkYXRlQWRtaW5JbmZvXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FsZW5kYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1iaWctY2FsZW5kYXIvbGliL2Nzcy9yZWFjdC1iaWctY2FsZW5kYXIuY3NzXCI7IC8vIFJlYWN0IEJpZyBDYWxlbmRhclxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFNpZGVOYXYyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vU2lkZU5hdjJcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb21tb24vVGl0bGVcIjtcclxuXHJcbi8vIExvY2FsaXppbmcgdGhlIGRhdGUgdGltZVxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsZW5kYXJFdmVudHMgKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBuZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50SW5mbywgc2V0RXZlbnRJbmZvXSA9IHVzZVN0YXRlKHt0aXRsZTogXCJcIiwgc3RhcnQ6IFwiXCIsIGVuZDogXCJcIn0pO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZXJ2ZXJFcnJvck1lc3NhZ2UsIHNldFNlcnZlckVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkaXNwbGF5TW9kYWwsIHNldERpc3BsYXlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuXHJcbiAgICAvLyBJdCB3aWxsIGJlIHVzZWQgaW5zaWRlIFNpZGVOYXYgY29tcG9uZW50IHRvIHNob3cgb3Igbm90IHNob3cgdGhlIGludGVncmF0ZSBnb29nbGUgY2FsZW5kYXIgaWNvbi9idXR0b24uXHJcbiAgICAvLyBEZWZhdWx0IHZhbHVlIHNldCB0byBOb1xyXG4gICAgY29uc3QgW2hhc0dvb2dsZUNhbGVuZGFyQWRkZWQsIHNldEhhc0dvb2dsZUNhbGVuZGFyQWRkZWRdID0gdXNlU3RhdGUoXCJOb1wiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIGlmKCFDaGVja0F1dGgoKSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3N0eWxpc3RzL2xvZ2luXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsaXN0VXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxpc3RVc2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCBzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXJcIik7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCBzdGF0ZSB3aXRoIHRoZSB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZS4gXHJcbiAgICAgICAgc2V0SGFzR29vZ2xlQ2FsZW5kYXJBZGRlZChzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50RW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvZmV0Y2gtZ29vZ2xlLWV2ZW50c1wiO1xyXG4gICAgICAgIGNvbnN0IHRva2VuRW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvdXBkYXRlLXRva2VuXCI7XHJcblxyXG4gICAgICAgIC8vIElmIHVzZXIgaGFzIGFscmVhZHkgYWRkZWQgaGlzL2hlciBnb29nbGUgY2FsZW5kYXIgdGhlbiBmZXRjaCB0aGUgZ29vZ2xlIGV2ZW50cyBhbmQgcmV0dXJuIG9uY2UgZG9uZSBmZXRjaGluZ1xyXG4gICAgICAgICAgaWYoc3R5bGlzdEhhc0FkZGVkR29vZ2xlQ2FsZW5kYXIgPT09IFwiWWVzXCIpIHtcclxuICAgICAgICAgICAgZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyhldmVudEVuZHBvaW50LCBzdHlsaXN0VXNlcm5hbWUsIHNldExvYWRpbmcsIHNldEV2ZW50cywgc2V0U2VydmVyRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vIElmIHVzZXIgaXMgdHJ5aW5nIHRvIGludGVncmF0ZSBoaXMvaGVyIGdvb2dsZSBjYWxlbmRhciB0aGVuIGNhbGwgdXBkYXRlVXNlclRva2VuIGZ1bmN0aW9uLiBJZiBldmVyeXRoaW5nXHJcbiAgICAgICAgLy8gZ29lcyBvayB0aGVuIHVwZGF0ZVVzZXJUb2tlbiB3aWxsIGNhbGwgZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyBmcm9tIHRoZXJlIGFuZCBmZXRjaCB1c2VyJ3MgZ29vZ2xlIGV2ZW50c1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aENvZGVcIikpIHsgXHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJUb2tlbihzdHlsaXN0VXNlcm5hbWUsIHRva2VuRW5kcG9pbnQsIGV2ZW50RW5kcG9pbnQsIHNldExvYWRpbmcsIHNldEV2ZW50cywgc2V0U2VydmVyRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKVxyXG5cclxuICAgXHJcbiAgICBmdW5jdGlvbiBmZXRjaFVzZXJTcGVjaWZpY0V2ZW50cyAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcInNlbGVjdCBVc2VyXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdCAoeyBzdGFydCwgZW5kIH0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiVGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgbmV3RXZlbnQgPSB7dGl0bGUsIHN0YXJ0LCBlbmQsIGFsbERheTogZmFsc2V9O1xyXG5cclxuICAgICAgICBzZXRFdmVudHMoY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgbmV3RXZlbnRcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUV2ZW50IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgdHlwZW9mIGV2ZW50LnN0YXJ0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBgJHtldmVudC5zdGFydC5nZXRIb3VycygpLnRvU3RyaW5nKCl9OiR7ZXZlbnQuc3RhcnQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCl9YFxyXG5cclxuICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGV2ZW50LmVuZC5nZXRIb3VycygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXREaXNwbGF5TW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIFxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8VGl0bGUgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTmF2MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemVkUmVkaXJlY3RVcmk9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3N0eWxpc3RzL2F1dGhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzR29vZ2xlQ2FsZW5kYXJBZGRlZCA9IHtoYXNHb29nbGVDYWxlbmRhckFkZGVkfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnX2NhbGVuZGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdfY2FsZW5kYXJfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DYWxlbmRhcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJiZWF1dGljaWFuXCIgb25DaGFuZ2UgPSB7ZmV0Y2hVc2VyU3BlY2lmaWNFdmVudHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3QgVXNlclwiPlNlbGVjdCBVc2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF0aGVuYVwiPkF0aGVuYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaWNoZWxsZVwiPk1pY2hlbGxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pY29sZVwiPk5pY29sZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGUgLy8gTmVlZGVkIGZvciBjcmVhdGluZyBldmVudCwgb3RoZXJ3aXNlIHNsb3RzIGNhbid0IGJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZXI9e2xvY2FsaXplcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM9e2V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzbG90cz17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFjY2Vzc29yPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U2xvdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RFdmVudD17ZGlzcGxheUV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0gc3R5bGU9e3tkaXNwbGF5OiBkaXNwbGF5TW9kYWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfdGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXZlbnRJbmZvLnN0YXJ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPi0tLS0tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V2ZW50SW5mby5lbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudEluZm8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAgTWludXRlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IHRpbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5sb2NhdGlvbiAxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZV9tb2RhbH0gb25DbGljayA9IHsoKSA9PiBzZXREaXNwbGF5TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICBcclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmV0Y2hHb29nbGVDYWxlbmRhckV2ZW50cyIsInVwZGF0ZVVzZXJUb2tlbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDYWxlbmRhciIsIm1vbWVudExvY2FsaXplciIsIm1vbWVudCIsIkNoZWNrQXV0aCIsInN0eWxlcyIsIkxheW91dCIsIlNpZGVOYXYyIiwiVGl0bGUiLCJsb2NhbGl6ZXIiLCJDYWxlbmRhckV2ZW50cyIsInJvdXRlciIsInRpdGxlIiwic3RhcnQiLCJlbmQiLCJldmVudEluZm8iLCJzZXRFdmVudEluZm8iLCJldmVudHMiLCJzZXRFdmVudHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlcnZlckVycm9yTWVzc2FnZSIsInNldFNlcnZlckVycm9yTWVzc2FnZSIsImRpc3BsYXlNb2RhbCIsInNldERpc3BsYXlNb2RhbCIsImhhc0dvb2dsZUNhbGVuZGFyQWRkZWQiLCJzZXRIYXNHb29nbGVDYWxlbmRhckFkZGVkIiwicHVzaCIsInN0eWxpc3RVc2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdHlsaXN0SGFzQWRkZWRHb29nbGVDYWxlbmRhciIsImV2ZW50RW5kcG9pbnQiLCJ0b2tlbkVuZHBvaW50IiwiaXNSZWFkeSIsImZldGNoVXNlclNwZWNpZmljRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsZXJ0IiwiaGFuZGxlU2VsZWN0Iiwid2luZG93IiwicHJvbXB0IiwibmV3RXZlbnQiLCJhbGxEYXkiLCJjdXJyZW50VmFsIiwiZGlzcGxheUV2ZW50IiwiY29uc29sZSIsImxvZyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJnZXRNaW51dGVzIiwiY2FsZW5kYXIiLCJjYWxlbmRhcl9jb250ZW50IiwiYmlnX2NhbGVuZGFyIiwiYmlnX2NhbGVuZGFyX2hlYWRlciIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==
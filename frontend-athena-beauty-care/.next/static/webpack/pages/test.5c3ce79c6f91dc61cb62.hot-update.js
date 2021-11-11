"use strict";
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./lib/find-time-slots-copy/findTimeSlots.js":
/*!***************************************************!*\
  !*** ./lib/find-time-slots-copy/findTimeSlots.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTimeSlots": function() { return /* binding */ findTimeSlots; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fetchStylistsEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchStylistsEvents */ "./lib/find-time-slots-copy/fetchStylistsEvents.js");
/* harmony import */ var _findBusyTimes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./findBusyTimes */ "./lib/find-time-slots-copy/findBusyTimes.js");
/* harmony import */ var _getDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDateTime */ "./lib/find-time-slots-copy/getDateTime.js");
/* harmony import */ var _getEventDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getEventDetails */ "./lib/find-time-slots-copy/getEventDetails.js");
/* harmony import */ var _getStylists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getStylists */ "./lib/find-time-slots-copy/getStylists.js");
/* harmony import */ var _helper_functions_getStylistsAllWorkingTimes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper-functions/getStylistsAllWorkingTimes */ "./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// Modules needed to fetch events







var findTimeSlots = /*#__PURE__*/function () {
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var newTreatments, location, dateTimeArray, allStylists, calendarEvents, stylistsByName, stylistsWorkingTimes, filteredDateTimeArray, stylistsWithFreeTimes, abcd, availableStartingTimesWithDates;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newTreatments = [{
              category: "Brows",
              choosenStylist: "Nicole Gorgeous",
              location: "Athena Beauty Care - Gulshan",
              treatmentDuration: 35,
              treatmentPrice: 23,
              treatmentTitle: "Shaping brows"
            }, {
              category: "Plasma Ion",
              choosenStylist: "Andrea Gorgeous",
              location: "Athena Beauty Care - Gulshan",
              treatmentDuration: 70,
              treatmentPrice: 42,
              treatmentTitle: "Plasma Ion with light facials"
            }, {
              category: "Permanent Makeup",
              choosenStylist: "Soudi Gorgeous",
              location: "Athena Beauty Care - Gulshan",
              treatmentDuration: 85,
              treatmentPrice: 45,
              treatmentTitle: "Permanent Makeup with light massage"
            }];
            location = newTreatments[0].location;
            _context2.next = 4;
            return (0,_getDateTime__WEBPACK_IMPORTED_MODULE_5__.getDateTime)();

          case 4:
            dateTimeArray = _context2.sent;
            _context2.next = 7;
            return (0,_getStylists__WEBPACK_IMPORTED_MODULE_7__.getStylists)(newTreatments);

          case 7:
            allStylists = _context2.sent;
            _context2.next = 10;
            return (0,_fetchStylistsEvents__WEBPACK_IMPORTED_MODULE_3__.fetchStylistsEvents)();

          case 10:
            calendarEvents = _context2.sent;
            stylistsByName = [];
            newTreatments.forEach(function (treatment) {
              stylistsByName.push(treatment.choosenStylist);
            });
            stylistsWorkingTimes = (0,_helper_functions_getStylistsAllWorkingTimes__WEBPACK_IMPORTED_MODULE_8__.getStylistsAllWorkingTimes)(allStylists);
            console.log(dateTimeArray);
            console.log(allStylists);
            console.log(calendarEvents); // calendarEvents.forEach(calendarEvent => {
            //     console.log(new Date(calendarEvent.startTime), new Date(calendarEvent.endTime));
            // });
            // Steps
            // 1. dateTimeArray contains the dates of 30 days from today. 
            // Find all the dates based on dayName (example - Monday) when all choosen stylists are available at the choosen location
            // and push it to the filteredDateTimeArray 

            filteredDateTimeArray = []; // For each date of the dateTimeArray loop through the each stylist's workSchdule to find day match.

            dateTimeArray.forEach(function (dateTime) {
              var date = new Date(dateTime.date); // get the day name (example - Monday) from the date to check against each stylist's workSchedule's day Name

              var dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
              }); // Initialize the count variable with the initial value 0

              var count = 0; // Loot through all stylists to be able to loop through their workSchedule 

              allStylists.forEach(function (stylist) {
                // Loop through the each stylist's workSchedule and see if they are all available on dayName
                stylist.workSchedule.forEach(function (schedule) {
                  if (schedule.location === location && schedule.day === dayName) {
                    count += 1;
                  }
                });
              }); // If all stylists are available on this date based on dayName then add that date to filteredDateTimeArray

              if (count === newTreatments.length) filteredDateTimeArray.push(dateTime);
            });
            console.log(filteredDateTimeArray);
            filteredDateTimeArray.forEach(function (newDateTime) {
              stylistsByName.forEach(function (stylistName) {
                calendarEvents.forEach(function (event) {
                  var eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));

                  if (stylistName === event.stylist && newDateTime.date === eventDate && location === event.eventLocation) {
                    console.log(event);
                  }
                });
              });
            });
            return _context2.abrupt("return");

          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function findTimeSlots() {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ "./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js":
/*!*********************************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStylistsAllWorkingTimes": function() { return /* binding */ getStylistsAllWorkingTimes; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
var getStylistsAllWorkingTimes = function getStylistsAllWorkingTimes(startTime, endTime) {
  var startTimeIndex = times.indexOf(startTime);
  var endTimeIndex = times.indexOf(endTime);
  var stylistWorkingTimes = [];

  for (var i = startTimeIndex; i <= endTimeIndex; i++) {
    stylistWorkingTimes.push(times[i]);
  }

  return stylistWorkingTimes;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC41YzNjZTc5YzZmOTFkYzYxY2I2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNTyxhQUFhO0FBQUEseVlBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR25CQyxZQUFBQSxhQUhtQixHQUdILENBQ2xCO0FBQ0lDLGNBQUFBLFFBQVEsRUFBRSxPQURkO0FBRUlDLGNBQUFBLGNBQWMsRUFBRSxpQkFGcEI7QUFHSUMsY0FBQUEsUUFBUSxFQUFFLDhCQUhkO0FBSUlDLGNBQUFBLGlCQUFpQixFQUFFLEVBSnZCO0FBS0lDLGNBQUFBLGNBQWMsRUFBRSxFQUxwQjtBQU1JQyxjQUFBQSxjQUFjLEVBQUU7QUFOcEIsYUFEa0IsRUFTbEI7QUFDSUwsY0FBQUEsUUFBUSxFQUFFLFlBRGQ7QUFFSUMsY0FBQUEsY0FBYyxFQUFFLGlCQUZwQjtBQUdJQyxjQUFBQSxRQUFRLEVBQUUsOEJBSGQ7QUFJSUMsY0FBQUEsaUJBQWlCLEVBQUUsRUFKdkI7QUFLSUMsY0FBQUEsY0FBYyxFQUFFLEVBTHBCO0FBTUlDLGNBQUFBLGNBQWMsRUFBRTtBQU5wQixhQVRrQixFQWlCbEI7QUFDSUwsY0FBQUEsUUFBUSxFQUFFLGtCQURkO0FBRUlDLGNBQUFBLGNBQWMsRUFBRSxnQkFGcEI7QUFHSUMsY0FBQUEsUUFBUSxFQUFFLDhCQUhkO0FBSUlDLGNBQUFBLGlCQUFpQixFQUFFLEVBSnZCO0FBS0lDLGNBQUFBLGNBQWMsRUFBRSxFQUxwQjtBQU1JQyxjQUFBQSxjQUFjLEVBQUU7QUFOcEIsYUFqQmtCLENBSEc7QUErQm5CSCxZQUFBQSxRQS9CbUIsR0ErQlJILGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJHLFFBL0JUO0FBQUE7QUFBQSxtQkFnQ0dSLHlEQUFXLEVBaENkOztBQUFBO0FBZ0NuQlksWUFB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R0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFAsSUFBTXVDLEtBQUssR0FBRyxDQUNWLE9BRFUsRUFDRCxPQURDLEVBQ1EsT0FEUixFQUNpQixPQURqQixFQUMwQixPQUQxQixFQUNtQyxPQURuQyxFQUM0QyxPQUQ1QyxFQUNxRCxPQURyRCxFQUM4RCxPQUQ5RCxFQUN1RSxPQUR2RSxFQUNnRixPQURoRixFQUN5RixPQUR6RixFQUVWLE9BRlUsRUFFRCxPQUZDLEVBRVEsT0FGUixFQUVpQixPQUZqQixFQUUwQixPQUYxQixFQUVtQyxPQUZuQyxFQUU0QyxPQUY1QyxFQUVxRCxPQUZyRCxFQUU4RCxPQUY5RCxFQUV1RSxPQUZ2RSxFQUVnRixPQUZoRixFQUV5RixPQUZ6RixFQUdWLE9BSFUsRUFHRCxPQUhDLEVBR1EsT0FIUixFQUdpQixPQUhqQixFQUcwQixPQUgxQixDQUFkO0FBT08sSUFBTXhDLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ29DLFNBQUQsRUFBWUssT0FBWixFQUF3QjtBQUc5RCxNQUFNQyxjQUFjLEdBQUdGLEtBQUssQ0FBQ0YsT0FBTixDQUFjRixTQUFkLENBQXZCO0FBQ0EsTUFBTU8sWUFBWSxHQUFHSCxLQUFLLENBQUNGLE9BQU4sQ0FBY0csT0FBZCxDQUFyQjtBQUdBLE1BQU1HLG1CQUFtQixHQUFHLEVBQTVCOztBQUdBLE9BQUksSUFBSUMsQ0FBQyxHQUFHSCxjQUFaLEVBQTRCRyxDQUFDLElBQUlGLFlBQWpDLEVBQStDRSxDQUFDLEVBQWhELEVBQW9EO0FBRWhERCxJQUFBQSxtQkFBbUIsQ0FBQzdCLElBQXBCLENBQXlCeUIsS0FBSyxDQUFDSyxDQUFELENBQTlCO0FBRUg7O0FBR0QsU0FBT0QsbUJBQVA7QUFHSCxDQXBCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHNBbGxXb3JraW5nVGltZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlcyBuZWVkZWQgdG8gZmV0Y2ggZXZlbnRzXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZmV0Y2hTdHlsaXN0c0V2ZW50cyB9IGZyb20gXCIuL2ZldGNoU3R5bGlzdHNFdmVudHNcIjtcclxuaW1wb3J0IHsgZmluZEJ1c3lUaW1lcyB9IGZyb20gXCIuL2ZpbmRCdXN5VGltZXNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZVRpbWUgfSBmcm9tIFwiLi9nZXREYXRlVGltZVwiO1xyXG5pbXBvcnQgeyBnZXRFdmVudERldGFpbHMgfSBmcm9tIFwiLi9nZXRFdmVudERldGFpbHNcIjtcclxuaW1wb3J0IHsgZ2V0U3R5bGlzdHMgfSBmcm9tIFwiLi9nZXRTdHlsaXN0c1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lcyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHNBbGxXb3JraW5nVGltZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGltZVNsb3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBuZXdUcmVhdG1lbnRzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQnJvd3NcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiTmljb2xlIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEd1bHNoYW5cIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDM1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogMjMsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlNoYXBpbmcgYnJvd3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQbGFzbWEgSW9uXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkFuZHJlYSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBHdWxzaGFuXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA3MCxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQyLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJQbGFzbWEgSW9uIHdpdGggbGlnaHQgZmFjaWFsc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBlcm1hbmVudCBNYWtldXBcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiU291ZGkgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gR3Vsc2hhblwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogODUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiA0NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiUGVybWFuZW50IE1ha2V1cCB3aXRoIGxpZ2h0IG1hc3NhZ2VcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3VHJlYXRtZW50c1swXS5sb2NhdGlvbjtcclxuICAgIGNvbnN0IGRhdGVUaW1lQXJyYXkgPSBhd2FpdCBnZXREYXRlVGltZSgpO1xyXG4gICAgY29uc3QgYWxsU3R5bGlzdHMgPSBhd2FpdCBnZXRTdHlsaXN0cyhuZXdUcmVhdG1lbnRzKTtcclxuICAgIC8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIGNvbnN0IGNhbGVuZGFyRXZlbnRzID0gYXdhaXQgZmV0Y2hTdHlsaXN0c0V2ZW50cygpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxpc3RzQnlOYW1lID0gW107XHJcblxyXG4gICAgbmV3VHJlYXRtZW50cy5mb3JFYWNoKHRyZWF0bWVudCA9PiB7XHJcbiAgICAgICAgc3R5bGlzdHNCeU5hbWUucHVzaCh0cmVhdG1lbnQuY2hvb3NlblN0eWxpc3QpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzdHlsaXN0c1dvcmtpbmdUaW1lcyA9IGdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzKGFsbFN0eWxpc3RzKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgXHJcbiAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGVUaW1lQXJyYXkpO1xyXG4gICAgY29uc29sZS5sb2coYWxsU3R5bGlzdHMpO1xyXG4gICAgY29uc29sZS5sb2coY2FsZW5kYXJFdmVudHMpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gY2FsZW5kYXJFdmVudHMuZm9yRWFjaChjYWxlbmRhckV2ZW50ID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZShjYWxlbmRhckV2ZW50LnN0YXJ0VGltZSksIG5ldyBEYXRlKGNhbGVuZGFyRXZlbnQuZW5kVGltZSkpO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBTdGVwc1xyXG5cclxuICAgIC8vIDEuIGRhdGVUaW1lQXJyYXkgY29udGFpbnMgdGhlIGRhdGVzIG9mIDMwIGRheXMgZnJvbSB0b2RheS4gXHJcblxyXG5cclxuICAgIC8vIEZpbmQgYWxsIHRoZSBkYXRlcyBiYXNlZCBvbiBkYXlOYW1lIChleGFtcGxlIC0gTW9uZGF5KSB3aGVuIGFsbCBjaG9vc2VuIHN0eWxpc3RzIGFyZSBhdmFpbGFibGUgYXQgdGhlIGNob29zZW4gbG9jYXRpb25cclxuICAgIC8vIGFuZCBwdXNoIGl0IHRvIHRoZSBmaWx0ZXJlZERhdGVUaW1lQXJyYXkgXHJcbiAgICBjb25zdCBmaWx0ZXJlZERhdGVUaW1lQXJyYXkgPSBbXTtcclxuXHJcblxyXG4gICAgLy8gRm9yIGVhY2ggZGF0ZSBvZiB0aGUgZGF0ZVRpbWVBcnJheSBsb29wIHRocm91Z2ggdGhlIGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hkdWxlIHRvIGZpbmQgZGF5IG1hdGNoLlxyXG4gICAgZGF0ZVRpbWVBcnJheS5mb3JFYWNoKGRhdGVUaW1lID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lLmRhdGUpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGRheSBuYW1lIChleGFtcGxlIC0gTW9uZGF5KSBmcm9tIHRoZSBkYXRlIHRvIGNoZWNrIGFnYWluc3QgZWFjaCBzdHlsaXN0J3Mgd29ya1NjaGVkdWxlJ3MgZGF5IE5hbWVcclxuICAgICAgICBjb25zdCBkYXlOYW1lID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBjb3VudCB2YXJpYWJsZSB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIDBcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgICAgICAvLyBMb290IHRocm91Z2ggYWxsIHN0eWxpc3RzIHRvIGJlIGFibGUgdG8gbG9vcCB0aHJvdWdoIHRoZWlyIHdvcmtTY2hlZHVsZSBcclxuICAgICAgICBhbGxTdHlsaXN0cy5mb3JFYWNoKHN0eWxpc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBlYWNoIHN0eWxpc3QncyB3b3JrU2NoZWR1bGUgYW5kIHNlZSBpZiB0aGV5IGFyZSBhbGwgYXZhaWxhYmxlIG9uIGRheU5hbWVcclxuICAgICAgICAgICAgc3R5bGlzdC53b3JrU2NoZWR1bGUuZm9yRWFjaChzY2hlZHVsZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2NoZWR1bGUubG9jYXRpb24gPT09IGxvY2F0aW9uICYmIHNjaGVkdWxlLmRheSA9PT0gZGF5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSWYgYWxsIHN0eWxpc3RzIGFyZSBhdmFpbGFibGUgb24gdGhpcyBkYXRlIGJhc2VkIG9uIGRheU5hbWUgdGhlbiBhZGQgdGhhdCBkYXRlIHRvIGZpbHRlcmVkRGF0ZVRpbWVBcnJheVxyXG4gICAgICAgIGlmKGNvdW50ID09PSBuZXdUcmVhdG1lbnRzLmxlbmd0aCkgZmlsdGVyZWREYXRlVGltZUFycmF5LnB1c2goZGF0ZVRpbWUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0ZVRpbWVBcnJheSk7XHJcblxyXG5cclxuICAgIGZpbHRlcmVkRGF0ZVRpbWVBcnJheS5mb3JFYWNoKG5ld0RhdGVUaW1lID0+IHtcclxuXHJcbiAgICAgICAgc3R5bGlzdHNCeU5hbWUuZm9yRWFjaChzdHlsaXN0TmFtZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdHlsaXN0TmFtZSA9PT0gZXZlbnQuc3R5bGlzdCAmJiBuZXdEYXRlVGltZS5kYXRlID09PSBldmVudERhdGUgJiYgbG9jYXRpb24gPT09IGV2ZW50LmV2ZW50TG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNXaXRoQnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgLy8gZmlsdGVyZWREYXRlVGltZUFycmF5LmZvckVhY2goZGF0ZVRpbWUgPT4ge1xyXG5cclxuICAgICAgICBcclxuICAgIC8vICAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKGRhdGVUaW1lLmRhdGUgIT09IGV2ZW50RGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYoZXZlbnQuZXZlbnRMb2NhdGlvbiAhPT0gbG9jYXRpb24pIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKCFzdHlsaXN0c0J5TmFtZS5pbmNsdWRlcyhldmVudC5zdHlsaXN0KSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGV2ZW50U3RhcnRUaW1lID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgZXZlbnRFbmRUaW1lID0gZXZlbnQuZW5kVGltZS5zdWJzdHJpbmcoZXZlbnQuZW5kVGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LmVuZFRpbWUubGVuZ3RoKTtcclxuXHJcblxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNXaXRoRnJlZVRpbWVzID0gW107XHJcbiAgICBcclxuICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goKGNhbGVuZGFyRXZlbnQsIGNhbGVuZGFyRXZlbnRJbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBpZihjYWxlbmRhckV2ZW50LnN0eWxpc3QgIT09IFwiTm8gcHJlZmVyZW5jZVwiKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRlVGltZUFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRlVGltZUFycmF5LmZvckVhY2goKGRhdGVUaW1lLCBkYXRlVGltZUluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJ1c3lUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyZWVUaW1lcyA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudC5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjYWxlbmRhckV2ZW50LmV2ZW50c1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgZXZlbnREYXRlLCBzdGFydFRpbWUsIHN0YXJ0aW5nSG91ciwgc3RhcnRpbmdNaW51dGUsIGV2ZW50RHVyYXRpb24gfSA9IGdldEV2ZW50RGV0YWlscyhldmVudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRlVGltZS5kYXRlID09PSBldmVudERhdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKHN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAxOyBqIDwgTWF0aC5jZWlsKGV2ZW50RHVyYXRpb24gLyAxNSk7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9ICgxNSAqIGopICsgc3RhcnRpbmdNaW51dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IHN0YXJ0aW5nSG91cjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbCAvIDYwIGdpdmVzIHVzIHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmUgYWRkZWQgdG8gaG91ci4gRm9yIGV4YW1wbGUgLSBpZiBpbnRlcnZhbCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGhvdXIgaW5jcmVtZW50IHdpdGggaG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXJJbmNyZW1lbnQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIDEgdGhlbiBpbnRlcnZhbCB2YWx1ZSBtdXN0IGJlIHJlLWNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbnRlcnZhbCBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChgMCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFidXN5VGltZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVRpbWVzLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFidXN5VGltZXMuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lcy5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3RGF0ZVRpbWVBcnJheS5wdXNoKHtkYXRlOiBkYXRlVGltZS5kYXRlLCBmcmVlVGltZXN9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdHlsaXN0c1dpdGhGcmVlVGltZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogY2FsZW5kYXJFdmVudC50cmVhdG1lbnRUaXRsZSxcclxuICAgICAgICAgICAgICAgIHN0eWxpc3Q6IGNhbGVuZGFyRXZlbnQuc3R5bGlzdCwgXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY2FsZW5kYXJFdmVudC5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBjYWxlbmRhckV2ZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgZnJlZVRpbWVzQXJyYXk6IG5ld0RhdGVUaW1lQXJyYXlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50LmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGVUaW1lQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGVUaW1lQXJyYXkuZm9yRWFjaChhc3luYyAoZGF0ZVRpbWUsIGRhdGVUaW1lSW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1c3lUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmVlVGltZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGNhbGVuZGFyRXZlbnQuZXZlbnRzW2ldLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGNhbGVuZGFyRXZlbnQuZXZlbnRzW2ldW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgZXZlbnREYXRlLCBzdGFydFRpbWUsIHN0YXJ0aW5nSG91ciwgc3RhcnRpbmdNaW51dGUsIGV2ZW50RHVyYXRpb24gfSA9IGF3YWl0IGdldEV2ZW50RGV0YWlscyhldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRlVGltZS5kYXRlID09PSBldmVudERhdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChzdGFydFRpbWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDwgTWF0aC5jZWlsKGV2ZW50RHVyYXRpb24gLyAxNSk7IGsrKykge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gKDE1ICogaykgKyBzdGFydGluZ01pbnV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IHN0YXJ0aW5nSG91cjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVydmFsIC8gNjAgZ2l2ZXMgdXMgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZSBhZGRlZCB0byBob3VyLiBGb3IgZXhhbXBsZSAtIGlmIGludGVydmFsIGlzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGhvdXIgaW5jcmVtZW50IHdpdGggaG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXJJbmNyZW1lbnQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIDEgdGhlbiBpbnRlcnZhbCB2YWx1ZSBtdXN0IGJlIHJlLWNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGludGVydmFsIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighYnVzeVRpbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZS5kZWZhdWx0VGltZS5mb3JFYWNoKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVRpbWVzLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWJ1c3lUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lcy5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRlVGltZUFycmF5LnB1c2goe2RhdGU6IGRhdGVUaW1lLmRhdGUsIGZyZWVUaW1lc30pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjYWxlbmRhckV2ZW50LnN0eWxpc3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lc0FycmF5OiBuZXdEYXRlVGltZUFycmF5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0eWxpc3RzV2l0aEZyZWVUaW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBjYWxlbmRhckV2ZW50LnRyZWF0bWVudFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3R5bGlzdDogY2FsZW5kYXJFdmVudC5zdHlsaXN0LCBcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBjYWxlbmRhckV2ZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmV3QXJyYXk6IG5ld0FycmF5XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coc3R5bGlzdHNXaXRoRnJlZVRpbWVzKTtcclxuXHJcblxyXG4gICAgbGV0IGFiY2QgPSAwO1xyXG4gICAgdHJlYXRtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICBpZihpdGVtLnN0eWxpc3QgIT09IFwiTm8gcHJlZmVyZW5jZVwiKSBhYmNkICs9IChNYXRoLmNlaWwoaXRlbS5kdXJhdGlvbiAvIDE1KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBTdGFydGluZyB0aW1lcyBmcm9tIHdoaWNoIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIG9uZSBhZnRlciB0aGUgb3RoZXJcclxuICAgIGNvbnN0IGF2YWlsYWJsZVN0YXJ0aW5nVGltZXNXaXRoRGF0ZXMgPSBbXTtcclxuXHJcbiAgICBkYXRlVGltZUFycmF5LmZvckVhY2goKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBUaGlzIGFycmF5IHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYWxsIHRoZSBzdGFydGluZyBmcmVlIHRpbWVzIG9mIGVhY2ggZGF0ZSBzdGFydGluZyBmcm9tIHRvZGF5IHVwIHRvIDMwIGRheXNcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVUaW1lc0J5RGF0ZSA9IFtdO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0ZVRpbWUuZGVmYXVsdFRpbWUubGVuZ3RoIC0gYWJjZDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvLyB0b3RhbFRpbWVDb3VudCB2YWx1ZSB3aWxsIGJlIHVwZGF0ZWQgb24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSBpbiB0aGUgZm9sbG93aW5nIGxvb3AuIFxyXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGhhcyB0aHJlZSBpdGVtcyAoc2F5IGZpcnN0IGl0ZW0ncyBkdXJhdGlvbiBpcyA0NSwgc2Vjb25kIGlzIDU1IFxyXG4gICAgICAgICAgICAvLyBhbmQgdGhpcmQgaXMgMjUpIHRoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbG9vcCB0b3RhbFRpbWVDb3VudCB3aWxsIGJlIChNYXRoLmNlaWwoNDUgLyAxNSkgKyAgTWF0aC5jZWlsKDU1IC8gMTUpXHJcbiAgICAgICAgICAgIC8vICsgTWF0aC5jZWlsKDI1IC8gMTUpKSAzICsgNCArIDIgPSA5XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFRpbWVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IGFycmF5IHdoaWNoIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggZnJlZSB0aW1lcyBvZiBlYWNoIHN0eWxpc3QgYnkgbG9vcGluZyB0aHJvdWdoIHRoZSBcclxuICAgICAgICAgICAgLy8gc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBzdHlsaXN0c1dpdGhGcmVlVGltZXMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3R5bGlzdHNXaXRoRnJlZVRpbWVzW2pdO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5zdHlsaXN0ICE9PSBcIk5vIHByZWZlcmVuY2VcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb3VudCB3aWxsIGRldGVybWluZSBob3cgbWFueSBmcmVlIHRpbWVzIHNob3VsZCBiZSBsb29rZWQgZm9yLiBGb3IgZXhhbXBsZSBpZiBjb3VudCBpcyAzIGFuZCBzdGFydGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgaXMgMDk6MzAgdGhlbiAwOTozMCwgMDk6NDUgJiAxMDowMCBzaG91bGQgYmUgbG9va2VkIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKGl0ZW0uZHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIHNhaWQgYWJvdmUgdG90YWxUaW1lQ291bnQgbXVzdCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB2ZXJ5IGNydWNpYWwuIE9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgdGhpcyBzdGFydGluZ1RpbWUgd2lsbCBiZSB1cGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIC0gc2F5IHdlIGFyZSBhdCAwOTowMCBvbiBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSwgY291bnQgaXMgM1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gMDk6NDUgZm9yIHRoZSAybmQgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkuIFNheSBmb3IgdGhlIHNlY29uZCBpdGVtIGNvdW50IGlzIDQgYW5kIHN0eWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBhdmFpbGFibGUgb24gYWxsIGZvdXIgdGltZXMgMDk6NDUsIDEwOjAwLCAxMDoxNSAmIDEwOjMwLCBzbyBzdGFydGluZ1RpbWUgZm9yIHRoZSB0aGlyZCBpdGVtIG9mIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRpbmdUaW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRlbXAgbGVuZ3RoIGlzIHplcm8gdGhlbiB3ZSBhcmUgYXQgdGhlIGZpcnN0IGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nVGltZSA9IGRhdGVUaW1lLmRlZmF1bHRUaW1lW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXh0IHRpbWUgYWZ0ZXIgdGhlIHRpbWUgb2YgbGFzdCBpdGVtIG9mIHRlbXAgYXJyYXkuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gZGF0ZVRpbWUuZGVmYXVsdFRpbWUuaW5kZXhPZih0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkYXRlVGltZS5kZWZhdWx0VGltZVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyA5XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDAwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMTsgayA8PSBjb3VudDsgaysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBtaW51dGVzIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWludXRlcyA9PT0gMCkgbWludXRlcyArPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAke2hvdXJ9OiR7bWludXRlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJlZVRpbWVzID0gaXRlbS5mcmVlVGltZXNBcnJheVtpbmRleF0uZnJlZVRpbWVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmcmVlVGltZXMuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBOdW1iZXIobWludXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgKz0gMTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F5IHN0YXJ0aW5nVGltZSBpcyAwOTowMCAmIGNvdW50IGlzIDMuIFNvIHRvdGFsVGltZUNvdW50IGlzIGFsc28gMy4gQWZ0ZXIgZmlyc3QgaXRlcmF0aW9uIHRlbXAubGVuZ3RoIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG11c3QgYmUgZXF1YWxzIHRvIDMgb3RoZXJ3aXNlIGl0IG1lYW5zIHRoYXQgc3R5bGlzdCBpcyBub3QgYXZhaWxhYmxlIGF0IGFsbCB0aHJlZSB0aW1lcyAoMDk6MDAuIDA5OjE1ICYgMDk6MzApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlbXAubGVuZ3RoIDwgdG90YWxUaW1lQ291bnQpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkYXRlVGltZS5kZWZhdWx0VGltZVtpXSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXZhaWxhYmxlU3RhcnRpbmdUaW1lc1dpdGhEYXRlcy5wdXNoKHtkYXRlOiBkYXRlVGltZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coYXZhaWxhYmxlU3RhcnRpbmdUaW1lc1dpdGhEYXRlcyk7XHJcbiAgICBcclxuXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxufSAgXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAiLCJjb25zdCB0aW1lcyA9IFtcclxuICAgIFwiMTA6MDBcIiwgXCIxMDoxNVwiLCBcIjEwOjMwXCIsIFwiMTA6NDVcIiwgXCIxMTowMFwiLCBcIjExOjE1XCIsIFwiMTE6MzBcIiwgXCIxMTo0NVwiLCBcIjEyOjAwXCIsIFwiMTI6MTVcIiwgXCIxMjozMFwiLCBcIjEyOjQ1XCIsIFxyXG4gICAgXCIxMzowMFwiLCBcIjEzOjE1XCIsIFwiMTM6MzBcIiwgXCIxMzo0NVwiLCBcIjE0OjAwXCIsIFwiMTQ6MTVcIiwgXCIxNDozMFwiLCBcIjE0OjQ1XCIsIFwiMTU6MDBcIiwgXCIxNToxNVwiLCBcIjE1OjMwXCIsIFwiMTU6NDVcIiwgXHJcbiAgICBcIjE2OjAwXCIsIFwiMTY6MTVcIiwgXCIxNjozMFwiLCBcIjE2OjQ1XCIsIFwiMTc6MDBcIlxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzID0gKHN0YXJ0VGltZSwgZW5kVGltZSkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBzdGFydFRpbWVJbmRleCA9IHRpbWVzLmluZGV4T2Yoc3RhcnRUaW1lKTtcclxuICAgIGNvbnN0IGVuZFRpbWVJbmRleCA9IHRpbWVzLmluZGV4T2YoZW5kVGltZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHN0eWxpc3RXb3JraW5nVGltZXMgPSBbXTtcclxuXHJcblxyXG4gICAgZm9yKGxldCBpID0gc3RhcnRUaW1lSW5kZXg7IGkgPD0gZW5kVGltZUluZGV4OyBpKyspIHtcclxuXHJcbiAgICAgICAgc3R5bGlzdFdvcmtpbmdUaW1lcy5wdXNoKHRpbWVzW2ldKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBzdHlsaXN0V29ya2luZ1RpbWVzXHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoU3R5bGlzdHNFdmVudHMiLCJmaW5kQnVzeVRpbWVzIiwiZ2V0RGF0ZVRpbWUiLCJnZXRFdmVudERldGFpbHMiLCJnZXRTdHlsaXN0cyIsImdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzIiwiZmluZFRpbWVTbG90cyIsIm5ld1RyZWF0bWVudHMiLCJjYXRlZ29yeSIsImNob29zZW5TdHlsaXN0IiwibG9jYXRpb24iLCJ0cmVhdG1lbnREdXJhdGlvbiIsInRyZWF0bWVudFByaWNlIiwidHJlYXRtZW50VGl0bGUiLCJkYXRlVGltZUFycmF5IiwiYWxsU3R5bGlzdHMiLCJjYWxlbmRhckV2ZW50cyIsInN0eWxpc3RzQnlOYW1lIiwiZm9yRWFjaCIsInRyZWF0bWVudCIsInB1c2giLCJzdHlsaXN0c1dvcmtpbmdUaW1lcyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZERhdGVUaW1lQXJyYXkiLCJkYXRlVGltZSIsImRhdGUiLCJEYXRlIiwiZGF5TmFtZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJjb3VudCIsInN0eWxpc3QiLCJ3b3JrU2NoZWR1bGUiLCJzY2hlZHVsZSIsImRheSIsImxlbmd0aCIsIm5ld0RhdGVUaW1lIiwic3R5bGlzdE5hbWUiLCJldmVudCIsImV2ZW50RGF0ZSIsInN0YXJ0VGltZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJldmVudExvY2F0aW9uIiwidGltZXMiLCJlbmRUaW1lIiwic3RhcnRUaW1lSW5kZXgiLCJlbmRUaW1lSW5kZXgiLCJzdHlsaXN0V29ya2luZ1RpbWVzIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var _getDates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDates */ "./lib/find-time-slots-copy/getDates.js");
/* harmony import */ var _getEventDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getEventDetails */ "./lib/find-time-slots-copy/getEventDetails.js");
/* harmony import */ var _getStylists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getStylists */ "./lib/find-time-slots-copy/getStylists.js");
/* harmony import */ var _helper_functions_getStylistsAllWorkingTimes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper-functions/getStylistsAllWorkingTimes */ "./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// Modules needed to fetch events







var defaultTime = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
var findTimeSlots = /*#__PURE__*/function () {
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var newTreatments, location, dateTimeArray, allStylists, calendarEvents, stylistsByName, filteredDateTimeArray, stylistsWithFreeTimes, abcd, availableStartingTimesWithDates;
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
            return (0,_getDates__WEBPACK_IMPORTED_MODULE_5__.getDateTime)();

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
            console.log(filteredDateTimeArray); // const stylistsWorkingTimes = getStylistsAllWorkingTimes(filteredDateTimeArray, allStylists);
            // return console.log(stylistsWorkingTimes);

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

          case 29:
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

/***/ "./lib/find-time-slots-copy/getDates.js":
/*!**********************************************!*\
  !*** ./lib/find-time-slots-copy/getDates.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDates": function() { return /* binding */ getDates; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
//
var getDates = function getDates() {
  var defaultTime = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
  var dateAndTimeArray = []; // populating dateTimeArray with 30 dates from today

  for (var i = 0; i < 30; i++) {
    var date = new Date(new Date().getTime() + 86400000 * i);
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    if (month < 10) month = "0".concat(month);
    if (day < 10) day = "0".concat(day);
    var newDate = "".concat(year, "-").concat(month, "-").concat(day);
    dateAndTimeArray.push({
      date: newDate,
      defaultTime: defaultTime
    });
  }

  return dateAndTimeArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5hZmZiZmM4N2NhYzliYjc2NzE5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxXQUFXLEdBQUcsQ0FDaEIsT0FEZ0IsRUFDUCxPQURPLEVBQ0UsT0FERixFQUNXLE9BRFgsRUFDb0IsT0FEcEIsRUFDNkIsT0FEN0IsRUFDc0MsT0FEdEMsRUFDK0MsT0FEL0MsRUFDd0QsT0FEeEQsRUFDaUUsT0FEakUsRUFDMEUsT0FEMUUsRUFDbUYsT0FEbkYsRUFFaEIsT0FGZ0IsRUFFUCxPQUZPLEVBRUUsT0FGRixFQUVXLE9BRlgsRUFFb0IsT0FGcEIsRUFFNkIsT0FGN0IsRUFFc0MsT0FGdEMsRUFFK0MsT0FGL0MsRUFFd0QsT0FGeEQsRUFFaUUsT0FGakUsRUFFMEUsT0FGMUUsRUFFbUYsT0FGbkYsRUFHaEIsT0FIZ0IsRUFHUCxPQUhPLEVBR0UsT0FIRixFQUdXLE9BSFgsRUFHb0IsT0FIcEIsQ0FBcEI7QUFNTyxJQUFNQyxhQUFhO0FBQUEseVlBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR25CQyxZQUFBQSxhQUhtQixHQUdILENBQ2xCO0FBQ0lDLGNBQUFBLFFBQVEsRUFBRSxPQURkO0FBRUlDLGNBQUFBLGNBQWMsRUFBRSxpQkFGcEI7QUFHSUMsY0FBQUEsUUFBUSxFQUFFLDhCQUhkO0FBSUlDLGNBQUFBLGlCQUFpQixFQUFFLEVBSnZCO0FBS0lDLGNBQUFBLGNBQWMsRUFBRSxFQUxwQjtBQU1JQyxjQUFBQSxjQUFjLEVBQUU7QUFOcEIsYUFEa0IsRUFTbEI7QUFDSUwsY0FBQUEsUUFBUSxFQUFFLFlBRGQ7QUFFSUMsY0FBQUEsY0FBYyxFQUFFLGlCQUZwQjtBQUdJQyxjQUFBQSxRQUFRLEVBQUUsOEJBSGQ7QUFJSUMsY0FBQUEsaUJBQWlCLEVBQUUsRUFKdkI7QUFL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QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUV4QixRQUFNckIsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBUyxJQUFJQSxJQUFKLEdBQVdxQixPQUFYLEtBQXdCLFdBQVdELENBQTVDLENBQWI7QUFFQSxRQUFNRSxJQUFJLEdBQUd2QixJQUFJLENBQUN3QixXQUFMLEdBQW1CQyxRQUFuQixFQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQUMxQixJQUFJLENBQUMyQixRQUFMLEtBQWtCLENBQW5CLEVBQXNCRixRQUF0QixFQUFaO0FBQ0EsUUFBSWhCLEdBQUcsR0FBR1QsSUFBSSxDQUFDNEIsT0FBTCxHQUFlSCxRQUFmLEVBQVY7QUFFQSxRQUFJQyxLQUFLLEdBQUcsRUFBWixFQUFnQkEsS0FBSyxjQUFPQSxLQUFQLENBQUw7QUFDaEIsUUFBSWpCLEdBQUcsR0FBRyxFQUFWLEVBQWNBLEdBQUcsY0FBT0EsR0FBUCxDQUFIO0FBR2QsUUFBTW9CLE9BQU8sYUFBTU4sSUFBTixjQUFjRyxLQUFkLGNBQXVCakIsR0FBdkIsQ0FBYjtBQUNBVyxJQUFBQSxnQkFBZ0IsQ0FBQ3pCLElBQWpCLENBQXNCO0FBQUNLLE1BQUFBLElBQUksRUFBRTZCLE9BQVA7QUFBZ0JqRCxNQUFBQSxXQUFXLEVBQVhBO0FBQWhCLEtBQXRCO0FBRUg7O0FBRUQsU0FBT3dDLGdCQUFQO0FBRUgsQ0EvQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2ZpbmRUaW1lU2xvdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9nZXREYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVzIG5lZWRlZCB0byBmZXRjaCBldmVudHNcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFN0eWxpc3RzRXZlbnRzIH0gZnJvbSBcIi4vZmV0Y2hTdHlsaXN0c0V2ZW50c1wiO1xyXG5pbXBvcnQgeyBmaW5kQnVzeVRpbWVzIH0gZnJvbSBcIi4vZmluZEJ1c3lUaW1lc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlVGltZSB9IGZyb20gXCIuL2dldERhdGVzXCI7XHJcbmltcG9ydCB7IGdldEV2ZW50RGV0YWlscyB9IGZyb20gXCIuL2dldEV2ZW50RGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0cyB9IGZyb20gXCIuL2dldFN0eWxpc3RzXCI7XHJcbmltcG9ydCB7IGdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFRpbWUgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRUaW1lU2xvdHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJCcm93c1wiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJOaWNvbGUgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gR3Vsc2hhblwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogMzUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiAyMyxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiU2hhcGluZyBicm93c1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBsYXNtYSBJb25cIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQW5kcmVhIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEd1bHNoYW5cIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDcwLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlBsYXNtYSBJb24gd2l0aCBsaWdodCBmYWNpYWxzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUGVybWFuZW50IE1ha2V1cFwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJTb3VkaSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBHdWxzaGFuXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA4NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQ1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJQZXJtYW5lbnQgTWFrZXVwIHdpdGggbGlnaHQgbWFzc2FnZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXdUcmVhdG1lbnRzWzBdLmxvY2F0aW9uO1xyXG4gICAgY29uc3QgZGF0ZVRpbWVBcnJheSA9IGF3YWl0IGdldERhdGVUaW1lKCk7XHJcbiAgICBjb25zdCBhbGxTdHlsaXN0cyA9IGF3YWl0IGdldFN0eWxpc3RzKG5ld1RyZWF0bWVudHMpO1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4gICAgY29uc3QgY2FsZW5kYXJFdmVudHMgPSBhd2FpdCBmZXRjaFN0eWxpc3RzRXZlbnRzKCk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNCeU5hbWUgPSBbXTtcclxuXHJcbiAgICBuZXdUcmVhdG1lbnRzLmZvckVhY2godHJlYXRtZW50ID0+IHtcclxuICAgICAgICBzdHlsaXN0c0J5TmFtZS5wdXNoKHRyZWF0bWVudC5jaG9vc2VuU3R5bGlzdCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICBcclxuICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0ZVRpbWVBcnJheSk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxTdHlsaXN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhjYWxlbmRhckV2ZW50cyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGNhbGVuZGFyRXZlbnQgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKGNhbGVuZGFyRXZlbnQuc3RhcnRUaW1lKSwgbmV3IERhdGUoY2FsZW5kYXJFdmVudC5lbmRUaW1lKSk7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIFN0ZXBzXHJcblxyXG4gICAgLy8gMS4gZGF0ZVRpbWVBcnJheSBjb250YWlucyB0aGUgZGF0ZXMgb2YgMzAgZGF5cyBmcm9tIHRvZGF5LiBcclxuXHJcblxyXG4gICAgLy8gRmluZCBhbGwgdGhlIGRhdGVzIGJhc2VkIG9uIGRheU5hbWUgKGV4YW1wbGUgLSBNb25kYXkpIHdoZW4gYWxsIGNob29zZW4gc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBhdCB0aGUgY2hvb3NlbiBsb2NhdGlvblxyXG4gICAgLy8gYW5kIHB1c2ggaXQgdG8gdGhlIGZpbHRlcmVkRGF0ZVRpbWVBcnJheSBcclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0ZVRpbWVBcnJheSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBGb3IgZWFjaCBkYXRlIG9mIHRoZSBkYXRlVGltZUFycmF5IGxvb3AgdGhyb3VnaCB0aGUgZWFjaCBzdHlsaXN0J3Mgd29ya1NjaGR1bGUgdG8gZmluZCBkYXkgbWF0Y2guXHJcbiAgICBkYXRlVGltZUFycmF5LmZvckVhY2goZGF0ZVRpbWUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUuZGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgZGF5IG5hbWUgKGV4YW1wbGUgLSBNb25kYXkpIGZyb20gdGhlIGRhdGUgdG8gY2hlY2sgYWdhaW5zdCBlYWNoIHN0eWxpc3QncyB3b3JrU2NoZWR1bGUncyBkYXkgTmFtZVxyXG4gICAgICAgIGNvbnN0IGRheU5hbWUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGNvdW50IHZhcmlhYmxlIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgMFxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIC8vIExvb3QgdGhyb3VnaCBhbGwgc3R5bGlzdHMgdG8gYmUgYWJsZSB0byBsb29wIHRocm91Z2ggdGhlaXIgd29ya1NjaGVkdWxlIFxyXG4gICAgICAgIGFsbFN0eWxpc3RzLmZvckVhY2goc3R5bGlzdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hlZHVsZSBhbmQgc2VlIGlmIHRoZXkgYXJlIGFsbCBhdmFpbGFibGUgb24gZGF5TmFtZVxyXG4gICAgICAgICAgICBzdHlsaXN0LndvcmtTY2hlZHVsZS5mb3JFYWNoKHNjaGVkdWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY2hlZHVsZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24gJiYgc2NoZWR1bGUuZGF5ID09PSBkYXlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBJZiBhbGwgc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBvbiB0aGlzIGRhdGUgYmFzZWQgb24gZGF5TmFtZSB0aGVuIGFkZCB0aGF0IGRhdGUgdG8gZmlsdGVyZWREYXRlVGltZUFycmF5XHJcbiAgICAgICAgaWYoY291bnQgPT09IG5ld1RyZWF0bWVudHMubGVuZ3RoKSBmaWx0ZXJlZERhdGVUaW1lQXJyYXkucHVzaChkYXRlVGltZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWREYXRlVGltZUFycmF5KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNXb3JraW5nVGltZXMgPSBnZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lcyhmaWx0ZXJlZERhdGVUaW1lQXJyYXksIGFsbFN0eWxpc3RzKTtcclxuICAgIC8vIHJldHVybiBjb25zb2xlLmxvZyhzdHlsaXN0c1dvcmtpbmdUaW1lcyk7XHJcblxyXG5cclxuICAgIGZpbHRlcmVkRGF0ZVRpbWVBcnJheS5mb3JFYWNoKG5ld0RhdGVUaW1lID0+IHtcclxuXHJcbiAgICAgICAgc3R5bGlzdHNCeU5hbWUuZm9yRWFjaChzdHlsaXN0TmFtZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdHlsaXN0TmFtZSA9PT0gZXZlbnQuc3R5bGlzdCAmJiBuZXdEYXRlVGltZS5kYXRlID09PSBldmVudERhdGUgJiYgbG9jYXRpb24gPT09IGV2ZW50LmV2ZW50TG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNXaXRoQnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgLy8gZmlsdGVyZWREYXRlVGltZUFycmF5LmZvckVhY2goZGF0ZVRpbWUgPT4ge1xyXG5cclxuICAgICAgICBcclxuICAgIC8vICAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKGRhdGVUaW1lLmRhdGUgIT09IGV2ZW50RGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYoZXZlbnQuZXZlbnRMb2NhdGlvbiAhPT0gbG9jYXRpb24pIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKCFzdHlsaXN0c0J5TmFtZS5pbmNsdWRlcyhldmVudC5zdHlsaXN0KSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGV2ZW50U3RhcnRUaW1lID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgZXZlbnRFbmRUaW1lID0gZXZlbnQuZW5kVGltZS5zdWJzdHJpbmcoZXZlbnQuZW5kVGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LmVuZFRpbWUubGVuZ3RoKTtcclxuXHJcblxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNXaXRoRnJlZVRpbWVzID0gW107XHJcbiAgICBcclxuICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goKGNhbGVuZGFyRXZlbnQsIGNhbGVuZGFyRXZlbnRJbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBpZihjYWxlbmRhckV2ZW50LnN0eWxpc3QgIT09IFwiTm8gcHJlZmVyZW5jZVwiKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRlVGltZUFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRlVGltZUFycmF5LmZvckVhY2goKGRhdGVUaW1lLCBkYXRlVGltZUluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJ1c3lUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyZWVUaW1lcyA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudC5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjYWxlbmRhckV2ZW50LmV2ZW50c1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgZXZlbnREYXRlLCBzdGFydFRpbWUsIHN0YXJ0aW5nSG91ciwgc3RhcnRpbmdNaW51dGUsIGV2ZW50RHVyYXRpb24gfSA9IGdldEV2ZW50RGV0YWlscyhldmVudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRlVGltZS5kYXRlID09PSBldmVudERhdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKHN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAxOyBqIDwgTWF0aC5jZWlsKGV2ZW50RHVyYXRpb24gLyAxNSk7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9ICgxNSAqIGopICsgc3RhcnRpbmdNaW51dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IHN0YXJ0aW5nSG91cjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbCAvIDYwIGdpdmVzIHVzIHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmUgYWRkZWQgdG8gaG91ci4gRm9yIGV4YW1wbGUgLSBpZiBpbnRlcnZhbCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGhvdXIgaW5jcmVtZW50IHdpdGggaG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXJJbmNyZW1lbnQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIDEgdGhlbiBpbnRlcnZhbCB2YWx1ZSBtdXN0IGJlIHJlLWNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbnRlcnZhbCBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChgMCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFidXN5VGltZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVRpbWVzLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFidXN5VGltZXMuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lcy5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3RGF0ZVRpbWVBcnJheS5wdXNoKHtkYXRlOiBkYXRlVGltZS5kYXRlLCBmcmVlVGltZXN9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdHlsaXN0c1dpdGhGcmVlVGltZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogY2FsZW5kYXJFdmVudC50cmVhdG1lbnRUaXRsZSxcclxuICAgICAgICAgICAgICAgIHN0eWxpc3Q6IGNhbGVuZGFyRXZlbnQuc3R5bGlzdCwgXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY2FsZW5kYXJFdmVudC5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBjYWxlbmRhckV2ZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgZnJlZVRpbWVzQXJyYXk6IG5ld0RhdGVUaW1lQXJyYXlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50LmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGVUaW1lQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGVUaW1lQXJyYXkuZm9yRWFjaChhc3luYyAoZGF0ZVRpbWUsIGRhdGVUaW1lSW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1c3lUaW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmVlVGltZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGNhbGVuZGFyRXZlbnQuZXZlbnRzW2ldLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGNhbGVuZGFyRXZlbnQuZXZlbnRzW2ldW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgZXZlbnREYXRlLCBzdGFydFRpbWUsIHN0YXJ0aW5nSG91ciwgc3RhcnRpbmdNaW51dGUsIGV2ZW50RHVyYXRpb24gfSA9IGF3YWl0IGdldEV2ZW50RGV0YWlscyhldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRlVGltZS5kYXRlID09PSBldmVudERhdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChzdGFydFRpbWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDwgTWF0aC5jZWlsKGV2ZW50RHVyYXRpb24gLyAxNSk7IGsrKykge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gKDE1ICogaykgKyBzdGFydGluZ01pbnV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IHN0YXJ0aW5nSG91cjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVydmFsIC8gNjAgZ2l2ZXMgdXMgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZSBhZGRlZCB0byBob3VyLiBGb3IgZXhhbXBsZSAtIGlmIGludGVydmFsIGlzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGhvdXIgaW5jcmVtZW50IHdpdGggaG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXJJbmNyZW1lbnQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIDEgdGhlbiBpbnRlcnZhbCB2YWx1ZSBtdXN0IGJlIHJlLWNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGludGVydmFsIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighYnVzeVRpbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZS5kZWZhdWx0VGltZS5mb3JFYWNoKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVRpbWVzLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWJ1c3lUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lcy5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRlVGltZUFycmF5LnB1c2goe2RhdGU6IGRhdGVUaW1lLmRhdGUsIGZyZWVUaW1lc30pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjYWxlbmRhckV2ZW50LnN0eWxpc3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lc0FycmF5OiBuZXdEYXRlVGltZUFycmF5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0eWxpc3RzV2l0aEZyZWVUaW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBjYWxlbmRhckV2ZW50LnRyZWF0bWVudFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3R5bGlzdDogY2FsZW5kYXJFdmVudC5zdHlsaXN0LCBcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBjYWxlbmRhckV2ZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmV3QXJyYXk6IG5ld0FycmF5XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coc3R5bGlzdHNXaXRoRnJlZVRpbWVzKTtcclxuXHJcblxyXG4gICAgbGV0IGFiY2QgPSAwO1xyXG4gICAgdHJlYXRtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICBpZihpdGVtLnN0eWxpc3QgIT09IFwiTm8gcHJlZmVyZW5jZVwiKSBhYmNkICs9IChNYXRoLmNlaWwoaXRlbS5kdXJhdGlvbiAvIDE1KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBTdGFydGluZyB0aW1lcyBmcm9tIHdoaWNoIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIG9uZSBhZnRlciB0aGUgb3RoZXJcclxuICAgIGNvbnN0IGF2YWlsYWJsZVN0YXJ0aW5nVGltZXNXaXRoRGF0ZXMgPSBbXTtcclxuXHJcbiAgICBkYXRlVGltZUFycmF5LmZvckVhY2goKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBUaGlzIGFycmF5IHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYWxsIHRoZSBzdGFydGluZyBmcmVlIHRpbWVzIG9mIGVhY2ggZGF0ZSBzdGFydGluZyBmcm9tIHRvZGF5IHVwIHRvIDMwIGRheXNcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVUaW1lc0J5RGF0ZSA9IFtdO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0ZVRpbWUuZGVmYXVsdFRpbWUubGVuZ3RoIC0gYWJjZDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvLyB0b3RhbFRpbWVDb3VudCB2YWx1ZSB3aWxsIGJlIHVwZGF0ZWQgb24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSBpbiB0aGUgZm9sbG93aW5nIGxvb3AuIFxyXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGhhcyB0aHJlZSBpdGVtcyAoc2F5IGZpcnN0IGl0ZW0ncyBkdXJhdGlvbiBpcyA0NSwgc2Vjb25kIGlzIDU1IFxyXG4gICAgICAgICAgICAvLyBhbmQgdGhpcmQgaXMgMjUpIHRoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbG9vcCB0b3RhbFRpbWVDb3VudCB3aWxsIGJlIChNYXRoLmNlaWwoNDUgLyAxNSkgKyAgTWF0aC5jZWlsKDU1IC8gMTUpXHJcbiAgICAgICAgICAgIC8vICsgTWF0aC5jZWlsKDI1IC8gMTUpKSAzICsgNCArIDIgPSA5XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFRpbWVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IGFycmF5IHdoaWNoIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggZnJlZSB0aW1lcyBvZiBlYWNoIHN0eWxpc3QgYnkgbG9vcGluZyB0aHJvdWdoIHRoZSBcclxuICAgICAgICAgICAgLy8gc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBzdHlsaXN0c1dpdGhGcmVlVGltZXMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc3R5bGlzdHNXaXRoRnJlZVRpbWVzW2pdO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5zdHlsaXN0ICE9PSBcIk5vIHByZWZlcmVuY2VcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb3VudCB3aWxsIGRldGVybWluZSBob3cgbWFueSBmcmVlIHRpbWVzIHNob3VsZCBiZSBsb29rZWQgZm9yLiBGb3IgZXhhbXBsZSBpZiBjb3VudCBpcyAzIGFuZCBzdGFydGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgaXMgMDk6MzAgdGhlbiAwOTozMCwgMDk6NDUgJiAxMDowMCBzaG91bGQgYmUgbG9va2VkIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKGl0ZW0uZHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIHNhaWQgYWJvdmUgdG90YWxUaW1lQ291bnQgbXVzdCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB2ZXJ5IGNydWNpYWwuIE9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgdGhpcyBzdGFydGluZ1RpbWUgd2lsbCBiZSB1cGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIC0gc2F5IHdlIGFyZSBhdCAwOTowMCBvbiBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSwgY291bnQgaXMgM1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gMDk6NDUgZm9yIHRoZSAybmQgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkuIFNheSBmb3IgdGhlIHNlY29uZCBpdGVtIGNvdW50IGlzIDQgYW5kIHN0eWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBhdmFpbGFibGUgb24gYWxsIGZvdXIgdGltZXMgMDk6NDUsIDEwOjAwLCAxMDoxNSAmIDEwOjMwLCBzbyBzdGFydGluZ1RpbWUgZm9yIHRoZSB0aGlyZCBpdGVtIG9mIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRpbmdUaW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRlbXAgbGVuZ3RoIGlzIHplcm8gdGhlbiB3ZSBhcmUgYXQgdGhlIGZpcnN0IGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nVGltZSA9IGRhdGVUaW1lLmRlZmF1bHRUaW1lW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXh0IHRpbWUgYWZ0ZXIgdGhlIHRpbWUgb2YgbGFzdCBpdGVtIG9mIHRlbXAgYXJyYXkuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gZGF0ZVRpbWUuZGVmYXVsdFRpbWUuaW5kZXhPZih0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkYXRlVGltZS5kZWZhdWx0VGltZVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyA5XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDAwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMTsgayA8PSBjb3VudDsgaysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBtaW51dGVzIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWludXRlcyA9PT0gMCkgbWludXRlcyArPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAke2hvdXJ9OiR7bWludXRlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJlZVRpbWVzID0gaXRlbS5mcmVlVGltZXNBcnJheVtpbmRleF0uZnJlZVRpbWVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmcmVlVGltZXMuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBOdW1iZXIobWludXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgKz0gMTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F5IHN0YXJ0aW5nVGltZSBpcyAwOTowMCAmIGNvdW50IGlzIDMuIFNvIHRvdGFsVGltZUNvdW50IGlzIGFsc28gMy4gQWZ0ZXIgZmlyc3QgaXRlcmF0aW9uIHRlbXAubGVuZ3RoIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG11c3QgYmUgZXF1YWxzIHRvIDMgb3RoZXJ3aXNlIGl0IG1lYW5zIHRoYXQgc3R5bGlzdCBpcyBub3QgYXZhaWxhYmxlIGF0IGFsbCB0aHJlZSB0aW1lcyAoMDk6MDAuIDA5OjE1ICYgMDk6MzApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlbXAubGVuZ3RoIDwgdG90YWxUaW1lQ291bnQpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkYXRlVGltZS5kZWZhdWx0VGltZVtpXSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXZhaWxhYmxlU3RhcnRpbmdUaW1lc1dpdGhEYXRlcy5wdXNoKHtkYXRlOiBkYXRlVGltZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coYXZhaWxhYmxlU3RhcnRpbmdUaW1lc1dpdGhEYXRlcyk7XHJcbiAgICBcclxuXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxufSAgXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAiLCIvL1xyXG5leHBvcnQgY29uc3QgZ2V0RGF0ZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdFRpbWUgPSBbXHJcbiAgICAgICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICAgICAgXCIxMzowMFwiLCBcIjEzOjE1XCIsIFwiMTM6MzBcIiwgXCIxMzo0NVwiLCBcIjE0OjAwXCIsIFwiMTQ6MTVcIiwgXCIxNDozMFwiLCBcIjE0OjQ1XCIsIFwiMTU6MDBcIiwgXCIxNToxNVwiLCBcIjE1OjMwXCIsIFwiMTU6NDVcIiwgXHJcbiAgICAgICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBkYXRlQW5kVGltZUFycmF5ID0gW107XHJcblxyXG5cclxuICAgIC8vIHBvcHVsYXRpbmcgZGF0ZVRpbWVBcnJheSB3aXRoIDMwIGRhdGVzIGZyb20gdG9kYXlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoODY0MDAwMDAgKiBpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgaWYgKGRheSA8IDEwKSBkYXkgPSBgMCR7ZGF5fWA7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgICAgICBkYXRlQW5kVGltZUFycmF5LnB1c2goe2RhdGU6IG5ld0RhdGUsIGRlZmF1bHRUaW1lfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlQW5kVGltZUFycmF5O1xyXG5cclxufSJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoU3R5bGlzdHNFdmVudHMiLCJmaW5kQnVzeVRpbWVzIiwiZ2V0RGF0ZVRpbWUiLCJnZXRFdmVudERldGFpbHMiLCJnZXRTdHlsaXN0cyIsImdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzIiwiZGVmYXVsdFRpbWUiLCJmaW5kVGltZVNsb3RzIiwibmV3VHJlYXRtZW50cyIsImNhdGVnb3J5IiwiY2hvb3NlblN0eWxpc3QiLCJsb2NhdGlvbiIsInRyZWF0bWVudER1cmF0aW9uIiwidHJlYXRtZW50UHJpY2UiLCJ0cmVhdG1lbnRUaXRsZSIsImRhdGVUaW1lQXJyYXkiLCJhbGxTdHlsaXN0cyIsImNhbGVuZGFyRXZlbnRzIiwic3R5bGlzdHNCeU5hbWUiLCJmb3JFYWNoIiwidHJlYXRtZW50IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZERhdGVUaW1lQXJyYXkiLCJkYXRlVGltZSIsImRhdGUiLCJEYXRlIiwiZGF5TmFtZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJjb3VudCIsInN0eWxpc3QiLCJ3b3JrU2NoZWR1bGUiLCJzY2hlZHVsZSIsImRheSIsImxlbmd0aCIsIm5ld0RhdGVUaW1lIiwic3R5bGlzdE5hbWUiLCJldmVudCIsImV2ZW50RGF0ZSIsInN0YXJ0VGltZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJldmVudExvY2F0aW9uIiwiZ2V0RGF0ZXMiLCJkYXRlQW5kVGltZUFycmF5IiwiaSIsImdldFRpbWUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwibmV3RGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=
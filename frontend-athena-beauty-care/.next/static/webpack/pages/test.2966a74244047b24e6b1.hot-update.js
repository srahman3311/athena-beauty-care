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
/* harmony import */ var _helper_functions_fetchEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions/fetchEvents */ "./lib/find-time-slots-copy/helper-functions/fetchEvents.js");
/* harmony import */ var _helper_functions_getDates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions/getDates */ "./lib/find-time-slots-copy/helper-functions/getDates.js");
/* harmony import */ var _helper_functions_getStylists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-functions/getStylists */ "./lib/find-time-slots-copy/helper-functions/getStylists.js");
/* harmony import */ var _helper_functions_getWorkingTimes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper-functions/getWorkingTimes */ "./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// Modules needed to fetch events




var defaultTimesArray = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
var findTimeSlots = /*#__PURE__*/function () {
  var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var newTreatments, datesArray, location, allStylists, calendarEvents, stylistsWorkingTimesOnAvailableDates, stylistsFreeTimesOnAvailableDates, countOfTimesToOmmit, qqq;
    return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newTreatments = [{
              category: "Permanent Makeup",
              choosenStylist: "Jennifer Gorgeous",
              location: "Athena Beauty Care - Bogur",
              treatmentDuration: 85,
              treatmentPrice: 23,
              treatmentTitle: "Permanent Makeup with light massage"
            }, {
              category: "Massage",
              choosenStylist: "Andrea Gorgeous",
              location: "Athena Beauty Care - Bogur",
              treatmentDuration: 75,
              treatmentPrice: 42,
              treatmentTitle: "Massage for 30 mins"
            }, {
              category: "Brows",
              choosenStylist: "Athena Gorgeous",
              location: "Athena Beauty Care - Bogur",
              treatmentDuration: 35,
              treatmentPrice: 45,
              treatmentTitle: "Shaping brows"
            }]; // Calculate total 30 dates in the format 'year-month-date' format starting from today

            datesArray = (0,_helper_functions_getDates__WEBPACK_IMPORTED_MODULE_3__.getDates)(); // Putting the location info in a variable

            location = newTreatments[0].location; // Fetching information of all stylists as per all treatments

            _context.next = 5;
            return (0,_helper_functions_getStylists__WEBPACK_IMPORTED_MODULE_4__.getStylists)(newTreatments);

          case 5:
            allStylists = _context.sent;
            console.log(allStylists); // Fetching calendar events of all stylists

            _context.next = 9;
            return (0,_helper_functions_fetchEvents__WEBPACK_IMPORTED_MODULE_2__.fetchEvents)();

          case 9:
            calendarEvents = _context.sent;
            //console.log("Calendar events: ", calendarEvents);
            // Find the dates when all stylists are available at the requested location. Also find all the workingTimes of all stylists
            // on those dates
            stylistsWorkingTimesOnAvailableDates = (0,_helper_functions_getWorkingTimes__WEBPACK_IMPORTED_MODULE_5__.getWorkingTimes)(datesArray, allStylists, newTreatments, location);
            console.log(stylistsWorkingTimesOnAvailableDates); // const stylistsFreeTimesOnAvailableDates = findFreeTimes(stylistsWorkingTimesOnAvailableDates, calendarEvents);
            // console.log(stylistsFreeTimesOnAvailableDates);

            stylistsFreeTimesOnAvailableDates = [];
            stylistsWorkingTimesOnAvailableDates.forEach(function (workingTime) {
              var xxx = [];
              workingTime.stylistWorkingTimes.forEach(function (item) {
                var busyTimes = [];
                calendarEvents.forEach(function (event) {
                  var eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));
                  var startingTime = event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length);
                  var startingHour = Number(startingTime.substring(0, 2));
                  var startingMinute = Number(startingTime.substring(3, 5));

                  if (event.status === "Active") {
                    if (eventDate === workingTime.date && event.stylist === item.stylist && event.eventLocation === location) {
                      for (var k = 0; k < Math.ceil(event.eventDuration / 15); k++) {
                        var interval = 15 * k + startingMinute;
                        var hour = startingHour; // interval / 60 gives us the value which should be added to hour. For example - if interval is 
                        // 75 then we must add 1 with hour 

                        var hourIncrement = Math.floor(interval / 60); // Adding hour increment with hour

                        hour += hourIncrement; // if hourIncrement is more than or equal to 1 then interval value must be re-calculated

                        if (hourIncrement >= 1) {
                          interval = interval - 60 * hourIncrement;
                        } // if interval is 0 then add extra one 0 to keep the minute value in two digits


                        if (interval === 0) interval += "0"; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

                        if (hour < 10) {
                          busyTimes.push("0".concat(hour, ":").concat(interval));
                        } else {
                          busyTimes.push("".concat(hour, ":").concat(interval));
                        }
                      }
                    }
                  }
                });
                var newWorkingTimes = item.workingTimes.filter(function (time) {
                  return !busyTimes.includes(time);
                });
                xxx.push({
                  stylist: item.stylist,
                  freeTimes: newWorkingTimes
                });
              });
              stylistsFreeTimesOnAvailableDates.push({
                date: workingTime.date,
                stylistsAndTheirFreeTimes: xxx
              });
            });
            console.log(stylistsFreeTimesOnAvailableDates); // Reduce function accepts two arguments. First one is a function with two parameters and the second is initial value
            // If initial value is not explicitly defined (for following case, 0) then reduce function will by default take the
            // first item of the array as the initial value.   

            countOfTimesToOmmit = newTreatments.reduce(function (total, treatment) {
              return total + Math.ceil(treatment.treatmentDuration / 15);
            }, 0);
            qqq = [];
            stylistsFreeTimesOnAvailableDates.forEach(function (date, index) {
              // 2021-11-15
              // This array will be populated with all the starting free times of each date
              var availableTimesByDate = [];

              for (var i = 0; i < defaultTimesArray.length - countOfTimesToOmmit; i++) {
                // 10:00
                // totalTimeCount value will be updated on each item of stylistsWithFreeTimes array in the following loop. 
                // For example, if stylistsWithFreeTimes has three items (say first item's duration is 45, second is 55 
                // and third is 25) then at the end of the loop totalTimeCount will be (Math.ceil(45 / 15) +  Math.ceil(55 / 15)
                // + Math.ceil(25 / 15)) 3 + 4 + 2 = 9
                var totalTimeCount = 0; // This is a temporary array which will be populated with free times of each stylist by looping through the 
                // stylistsWithFreeTimes array

                var temp = [];

                for (var j = 0; j < date.stylistsAndTheirFreeTimes.length; j++) {
                  var item = date.stylistsAndTheirFreeTimes[j]; // Count will determine how many free times should be looked for. For example if count is 3 and starting
                  // time is 09:30 then 09:30, 09:45 & 10:00 should be looked for

                  var count = Math.ceil(newTreatments[j].treatmentDuration / 15); // As said above totalTimeCount must be updated on each item of stylistsWithFreeTimes array

                  totalTimeCount += count; // This is very crucial. On each item of stylistsWithFreeTimes array this startingTime will be updated,
                  // for example - say we are at 09:00 on first item of stylistsWithFreeTimes array, count is 3
                  // and stylist of this item is available on all three times 09:00, 09:15 & 9:30. So startingTime must be 
                  // from 09:45 for the 2nd item of stylistsWithFreeTimes array. Say for the second item count is 4 and stylist
                  // is available on all four times 09:45, 10:00, 10:15 & 10:30, so startingTime for the third item of the 
                  //  stylistsWithFreeTimes array 10:45. 

                  var startingTime = ""; // if temp length is zero then we are at the first item of stylistsWithFreeTimes array

                  if (!temp.length) {
                    startingTime = defaultTimesArray[i];
                  } else {
                    // For each consecutive item after the first one of stylistsWithFreeTimes array startingTime will be 
                    // the next time after the time of last item of temp array. 
                    var y = defaultTimesArray.indexOf(temp[temp.length - 1]);
                    startingTime = defaultTimesArray[y + 1];
                  } //


                  var hour = Number(startingTime.substring(0, 2)); // 11

                  var minutes = Number(startingTime.substring(3, 5)); // 30

                  for (var k = 1; k <= count; k++) {
                    var hourIncrement = Math.floor(minutes / 60);
                    hour += hourIncrement;

                    if (hourIncrement >= 1) {
                      minutes = minutes - 60 * hourIncrement;
                    } // if minutes is 0 then add extra one 0 to keep the minute value in two digits


                    if (minutes === 0) minutes += "0";
                    var time = ""; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

                    if (hour < 10) {
                      time = "0".concat(hour, ":").concat(minutes);
                    } else {
                      time = "".concat(hour, ":").concat(minutes);
                    } //const freeTimes = item.freeTimesArray[index].freeTimes;


                    var freeTimes = item.freeTimes;

                    if (freeTimes.includes(time)) {
                      temp.push(time);
                    }

                    ;
                    minutes = Number(minutes);
                    minutes += 15;
                  } // Say startingTime is 09:00 & count is 3. So totalTimeCount is also 3. After first iteration temp.length 
                  // must be equals to 3 otherwise it means that stylist is not available at all three times (09:00. 09:15 & 09:30)
                  // In such case further iteration is not necessary. 


                  if (temp.length < totalTimeCount) break;
                }

                if (totalTimeCount === temp.length) availableTimesByDate.push(defaultTimesArray[i]);
              }

              qqq.push({
                date: date.date,
                times: availableTimesByDate
              });
            });
            console.log(qqq);
            return _context.abrupt("return");

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4yOTY2YTc0MjQ0MDQ3YjI0ZTZiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1JLGlCQUFpQixHQUFHLENBQ3RCLE9BRHNCLEVBQ2IsT0FEYSxFQUNKLE9BREksRUFDSyxPQURMLEVBQ2MsT0FEZCxFQUN1QixPQUR2QixFQUNnQyxPQURoQyxFQUN5QyxPQUR6QyxFQUNrRCxPQURsRCxFQUMyRCxPQUQzRCxFQUNvRSxPQURwRSxFQUM2RSxPQUQ3RSxFQUV0QixPQUZzQixFQUViLE9BRmEsRUFFSixPQUZJLEVBRUssT0FGTCxFQUVjLE9BRmQsRUFFdUIsT0FGdkIsRUFFZ0MsT0FGaEMsRUFFeUMsT0FGekMsRUFFa0QsT0FGbEQsRUFFMkQsT0FGM0QsRUFFb0UsT0FGcEUsRUFFNkUsT0FGN0UsRUFHdEIsT0FIc0IsRUFHYixPQUhhLEVBR0osT0FISSxFQUdLLE9BSEwsRUFHYyxPQUhkLENBQTFCO0FBTU8sSUFBTUMsYUFBYTtBQUFBLHlZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUduQkMsWUFBQUEsYUFIbUIsR0FHSCxDQUNsQjtBQUNJQyxjQUFBQSxRQUFRLEVBQUUsa0JBRGQ7QUFFSUMsY0FBQUEsY0FBYyxFQUFFLG1CQUZwQjtBQUdJQyxjQUFBQSxRQUFRLEVBQUUsNEJBSGQ7QUFJSUMsY0FBQUEsaUJBQWlCLEVBQUUsRUFKdkI7QUFLSUMsY0FBQUEsY0FBYyxFQUFFLEVBTHBCO0FBTUlDLGNBQUFBLGNBQWMsRUFBRTtBQU5wQixhQURrQixFQVNsQjtBQUNJTCxjQUFBQSxRQUFRLEVBQUUsU0FEZDtBQUVJQyxjQUFBQSxjQUFjLEVBQUUsaUJBRnBCO0FBR0lDLGNBQUFBLFFBQVEsRUFBRSw0QkFIZDtBQUlJQyxjQUFBQSxpQkFBaUIsRUFBRSxFQUp2QjtBQUtJQyxjQUFBQSxjQUFjLEVBQUUsRUFM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LGtCQUFidkQsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVzIG5lZWRlZCB0byBmZXRjaCBldmVudHNcclxuaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2ZldGNoRXZlbnRzXCI7XHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlc1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0cyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHNcIjtcclxuaW1wb3J0IHsgZ2V0V29ya2luZ1RpbWVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRXb3JraW5nVGltZXNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRUaW1lc0FycmF5ID0gW1xyXG4gICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICBcIjEzOjAwXCIsIFwiMTM6MTVcIiwgXCIxMzozMFwiLCBcIjEzOjQ1XCIsIFwiMTQ6MDBcIiwgXCIxNDoxNVwiLCBcIjE0OjMwXCIsIFwiMTQ6NDVcIiwgXCIxNTowMFwiLCBcIjE1OjE1XCIsIFwiMTU6MzBcIiwgXCIxNTo0NVwiLCBcclxuICAgIFwiMTY6MDBcIiwgXCIxNjoxNVwiLCBcIjE2OjMwXCIsIFwiMTY6NDVcIiwgXCIxNzowMFwiXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGltZVNsb3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBuZXdUcmVhdG1lbnRzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUGVybWFuZW50IE1ha2V1cFwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJKZW5uaWZlciBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBCb2d1clwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogODUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiAyMyxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiUGVybWFuZW50IE1ha2V1cCB3aXRoIGxpZ2h0IG1hc3NhZ2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJNYXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkFuZHJlYSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBCb2d1clwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogNzUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiA0MixcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiTWFzc2FnZSBmb3IgMzAgbWluc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkJyb3dzXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkF0aGVuYSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBCb2d1clwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogMzUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiA0NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiU2hhcGluZyBicm93c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIF07XHJcblxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCAzMCBkYXRlcyBpbiB0aGUgZm9ybWF0ICd5ZWFyLW1vbnRoLWRhdGUnIGZvcm1hdCBzdGFydGluZyBmcm9tIHRvZGF5XHJcbiAgICBjb25zdCBkYXRlc0FycmF5ID0gZ2V0RGF0ZXMoKTtcclxuXHJcbiAgICAvLyBQdXR0aW5nIHRoZSBsb2NhdGlvbiBpbmZvIGluIGEgdmFyaWFibGVcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3VHJlYXRtZW50c1swXS5sb2NhdGlvbjtcclxuICAgIFxyXG4gICAgLy8gRmV0Y2hpbmcgaW5mb3JtYXRpb24gb2YgYWxsIHN0eWxpc3RzIGFzIHBlciBhbGwgdHJlYXRtZW50c1xyXG4gICAgY29uc3QgYWxsU3R5bGlzdHMgPSBhd2FpdCBnZXRTdHlsaXN0cyhuZXdUcmVhdG1lbnRzKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFN0eWxpc3RzKTtcclxuXHJcbiAgICAvLyBGZXRjaGluZyBjYWxlbmRhciBldmVudHMgb2YgYWxsIHN0eWxpc3RzXHJcbiAgICBjb25zdCBjYWxlbmRhckV2ZW50cyA9IGF3YWl0IGZldGNoRXZlbnRzKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiQ2FsZW5kYXIgZXZlbnRzOiBcIiwgY2FsZW5kYXJFdmVudHMpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gRmluZCB0aGUgZGF0ZXMgd2hlbiBhbGwgc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBhdCB0aGUgcmVxdWVzdGVkIGxvY2F0aW9uLiBBbHNvIGZpbmQgYWxsIHRoZSB3b3JraW5nVGltZXMgb2YgYWxsIHN0eWxpc3RzXHJcbiAgICAvLyBvbiB0aG9zZSBkYXRlc1xyXG4gICAgY29uc3Qgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzID0gZ2V0V29ya2luZ1RpbWVzKGRhdGVzQXJyYXksIGFsbFN0eWxpc3RzLCBuZXdUcmVhdG1lbnRzLCBsb2NhdGlvbik7XHJcblxyXG4gICBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG5cclxuICAgIC8vIGNvbnN0IHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyA9IGZpbmRGcmVlVGltZXMoc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLCBjYWxlbmRhckV2ZW50cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKHdvcmtpbmdUaW1lID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeHh4ID0gW107XHJcblxyXG4gICAgICAgIHdvcmtpbmdUaW1lLnN0eWxpc3RXb3JraW5nVGltZXMuZm9yRWFjaChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1c3lUaW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY2FsZW5kYXJFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnREYXRlID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZygwLCBldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nVGltZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuc3RhcnRUaW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGluZ0hvdXIgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygwLCAyKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGluZ01pbnV0ZSA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDMsIDUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnN0YXR1cyA9PT0gXCJBY3RpdmVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihldmVudERhdGUgPT09IHdvcmtpbmdUaW1lLmRhdGUgJiYgZXZlbnQuc3R5bGlzdCA9PT0gaXRlbS5zdHlsaXN0ICYmIGV2ZW50LmV2ZW50TG9jYXRpb24gPT09IGxvY2F0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgTWF0aC5jZWlsKGV2ZW50LmV2ZW50RHVyYXRpb24gLyAxNSk7IGsrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gKDE1ICogaykgKyBzdGFydGluZ01pbnV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob3VyID0gc3RhcnRpbmdIb3VyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVydmFsIC8gNjAgZ2l2ZXMgdXMgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZSBhZGRlZCB0byBob3VyLiBGb3IgZXhhbXBsZSAtIGlmIGludGVydmFsIGlzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNzUgdGhlbiB3ZSBtdXN0IGFkZCAxIHdpdGggaG91ciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob3VySW5jcmVtZW50ID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIDYwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgaG91ciBpbmNyZW1lbnQgd2l0aCBob3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IGhvdXJJbmNyZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ckluY3JlbWVudCBpcyBtb3JlIHRoYW4gb3IgZXF1YWwgdG8gMSB0aGVuIGludGVydmFsIHZhbHVlIG11c3QgYmUgcmUtY2FsY3VsYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGludGVydmFsIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGludGVydmFsID09PSAwKSBpbnRlcnZhbCArPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VyIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAwJHtob3VyfToke2ludGVydmFsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChgJHtob3VyfToke2ludGVydmFsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdXb3JraW5nVGltZXMgPSBpdGVtLndvcmtpbmdUaW1lcy5maWx0ZXIodGltZSA9PiAhYnVzeVRpbWVzLmluY2x1ZGVzKHRpbWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHh4eC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHN0eWxpc3Q6IGl0ZW0uc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgIGZyZWVUaW1lczogbmV3V29ya2luZ1RpbWVzXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzLnB1c2goeyBkYXRlOiB3b3JraW5nVGltZS5kYXRlLCBzdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzOiB4eHh9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzKTtcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIFJlZHVjZSBmdW5jdGlvbiBhY2NlcHRzIHR3byBhcmd1bWVudHMuIEZpcnN0IG9uZSBpcyBhIGZ1bmN0aW9uIHdpdGggdHdvIHBhcmFtZXRlcnMgYW5kIHRoZSBzZWNvbmQgaXMgaW5pdGlhbCB2YWx1ZVxyXG4gICAgLy8gSWYgaW5pdGlhbCB2YWx1ZSBpcyBub3QgZXhwbGljaXRseSBkZWZpbmVkIChmb3IgZm9sbG93aW5nIGNhc2UsIDApIHRoZW4gcmVkdWNlIGZ1bmN0aW9uIHdpbGwgYnkgZGVmYXVsdCB0YWtlIHRoZVxyXG4gICAgLy8gZmlyc3QgaXRlbSBvZiB0aGUgYXJyYXkgYXMgdGhlIGluaXRpYWwgdmFsdWUuICAgXHJcbiAgICBjb25zdCBjb3VudE9mVGltZXNUb09tbWl0ID0gbmV3VHJlYXRtZW50cy5yZWR1Y2UoKHRvdGFsLCB0cmVhdG1lbnQpID0+IHRvdGFsICsgKE1hdGguY2VpbCh0cmVhdG1lbnQudHJlYXRtZW50RHVyYXRpb24gLyAxNSkpLCAwKTtcclxuICBcclxuXHJcblxyXG4gICAgY29uc3QgcXFxID0gW107XHJcblxyXG4gICAgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzLmZvckVhY2goKGRhdGUsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIC8vIDIwMjEtMTEtMTVcclxuXHJcbiAgICAgICAgLy8gVGhpcyBhcnJheSB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGFsbCB0aGUgc3RhcnRpbmcgZnJlZSB0aW1lcyBvZiBlYWNoIGRhdGVcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVUaW1lc0J5RGF0ZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVmYXVsdFRpbWVzQXJyYXkubGVuZ3RoIC0gY291bnRPZlRpbWVzVG9PbW1pdDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMDowMFxyXG5cclxuICAgICAgICAgICAgLy8gdG90YWxUaW1lQ291bnQgdmFsdWUgd2lsbCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgaW4gdGhlIGZvbGxvd2luZyBsb29wLiBcclxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBoYXMgdGhyZWUgaXRlbXMgKHNheSBmaXJzdCBpdGVtJ3MgZHVyYXRpb24gaXMgNDUsIHNlY29uZCBpcyA1NSBcclxuICAgICAgICAgICAgLy8gYW5kIHRoaXJkIGlzIDI1KSB0aGVuIGF0IHRoZSBlbmQgb2YgdGhlIGxvb3AgdG90YWxUaW1lQ291bnQgd2lsbCBiZSAoTWF0aC5jZWlsKDQ1IC8gMTUpICsgIE1hdGguY2VpbCg1NSAvIDE1KVxyXG4gICAgICAgICAgICAvLyArIE1hdGguY2VpbCgyNSAvIDE1KSkgMyArIDQgKyAyID0gOVxyXG4gICAgICAgICAgICBsZXQgdG90YWxUaW1lQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRlbXBvcmFyeSBhcnJheSB3aGljaCB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGZyZWUgdGltZXMgb2YgZWFjaCBzdHlsaXN0IGJ5IGxvb3BpbmcgdGhyb3VnaCB0aGUgXHJcbiAgICAgICAgICAgIC8vIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZGF0ZS5zdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lc1tqXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgd2lsbCBkZXRlcm1pbmUgaG93IG1hbnkgZnJlZSB0aW1lcyBzaG91bGQgYmUgbG9va2VkIGZvci4gRm9yIGV4YW1wbGUgaWYgY291bnQgaXMgMyBhbmQgc3RhcnRpbmdcclxuICAgICAgICAgICAgICAgIC8vIHRpbWUgaXMgMDk6MzAgdGhlbiAwOTozMCwgMDk6NDUgJiAxMDowMCBzaG91bGQgYmUgbG9va2VkIGZvclxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLmNlaWwobmV3VHJlYXRtZW50c1tqXS50cmVhdG1lbnREdXJhdGlvbiAvIDE1KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFzIHNhaWQgYWJvdmUgdG90YWxUaW1lQ291bnQgbXVzdCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRvdGFsVGltZUNvdW50ICs9IGNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdmVyeSBjcnVjaWFsLiBPbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IHRoaXMgc3RhcnRpbmdUaW1lIHdpbGwgYmUgdXBkYXRlZCxcclxuICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIC0gc2F5IHdlIGFyZSBhdCAwOTowMCBvbiBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSwgY291bnQgaXMgM1xyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHN0eWxpc3Qgb2YgdGhpcyBpdGVtIGlzIGF2YWlsYWJsZSBvbiBhbGwgdGhyZWUgdGltZXMgMDk6MDAsIDA5OjE1ICYgOTozMC4gU28gc3RhcnRpbmdUaW1lIG11c3QgYmUgXHJcbiAgICAgICAgICAgICAgICAvLyBmcm9tIDA5OjQ1IGZvciB0aGUgMm5kIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5LiBTYXkgZm9yIHRoZSBzZWNvbmQgaXRlbSBjb3VudCBpcyA0IGFuZCBzdHlsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyBpcyBhdmFpbGFibGUgb24gYWxsIGZvdXIgdGltZXMgMDk6NDUsIDEwOjAwLCAxMDoxNSAmIDEwOjMwLCBzbyBzdGFydGluZ1RpbWUgZm9yIHRoZSB0aGlyZCBpdGVtIG9mIHRoZSBcclxuICAgICAgICAgICAgICAgIC8vICBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgMTA6NDUuIFxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0aW5nVGltZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRlbXAgbGVuZ3RoIGlzIHplcm8gdGhlbiB3ZSBhcmUgYXQgdGhlIGZpcnN0IGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZighdGVtcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggY29uc2VjdXRpdmUgaXRlbSBhZnRlciB0aGUgZmlyc3Qgb25lIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSBzdGFydGluZ1RpbWUgd2lsbCBiZSBcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCB0aW1lIGFmdGVyIHRoZSB0aW1lIG9mIGxhc3QgaXRlbSBvZiB0ZW1wIGFycmF5LiBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gZGVmYXVsdFRpbWVzQXJyYXkuaW5kZXhPZih0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nVGltZSA9IGRlZmF1bHRUaW1lc0FycmF5W3kgKyAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygwLCAyKSk7IC8vIDExXHJcbiAgICAgICAgICAgICAgICBsZXQgbWludXRlcyA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDMsIDUpKTsgLy8gMzBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDE7IGsgPD0gY291bnQ7IGsrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICBob3VyICs9IGhvdXJJbmNyZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbWludXRlcyBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWludXRlcyA9PT0gMCkgbWludXRlcyArPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgPSAoYDAke2hvdXJ9OiR7bWludXRlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAke2hvdXJ9OiR7bWludXRlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgZnJlZVRpbWVzID0gaXRlbS5mcmVlVGltZXNBcnJheVtpbmRleF0uZnJlZVRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnJlZVRpbWVzLmluY2x1ZGVzKHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTnVtYmVyKG1pbnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgKz0gMTU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNheSBzdGFydGluZ1RpbWUgaXMgMDk6MDAgJiBjb3VudCBpcyAzLiBTbyB0b3RhbFRpbWVDb3VudCBpcyBhbHNvIDMuIEFmdGVyIGZpcnN0IGl0ZXJhdGlvbiB0ZW1wLmxlbmd0aCBcclxuICAgICAgICAgICAgICAgIC8vIG11c3QgYmUgZXF1YWxzIHRvIDMgb3RoZXJ3aXNlIGl0IG1lYW5zIHRoYXQgc3R5bGlzdCBpcyBub3QgYXZhaWxhYmxlIGF0IGFsbCB0aHJlZSB0aW1lcyAoMDk6MDAuIDA5OjE1ICYgMDk6MzApXHJcbiAgICAgICAgICAgICAgICAvLyBJbiBzdWNoIGNhc2UgZnVydGhlciBpdGVyYXRpb24gaXMgbm90IG5lY2Vzc2FyeS4gXHJcbiAgICAgICAgICAgICAgICBpZih0ZW1wLmxlbmd0aCA8IHRvdGFsVGltZUNvdW50KSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodG90YWxUaW1lQ291bnQgPT09IHRlbXAubGVuZ3RoKSBhdmFpbGFibGVUaW1lc0J5RGF0ZS5wdXNoKGRlZmF1bHRUaW1lc0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHFxcS5wdXNoKHtkYXRlOiBkYXRlLmRhdGUsIHRpbWVzOiBhdmFpbGFibGVUaW1lc0J5RGF0ZX0pO1xyXG4gICAgICAgXHJcblxyXG4gICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2cocXFxKTtcclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZmV0Y2hFdmVudHMiLCJnZXREYXRlcyIsImdldFN0eWxpc3RzIiwiZ2V0V29ya2luZ1RpbWVzIiwiZGVmYXVsdFRpbWVzQXJyYXkiLCJmaW5kVGltZVNsb3RzIiwibmV3VHJlYXRtZW50cyIsImNhdGVnb3J5IiwiY2hvb3NlblN0eWxpc3QiLCJsb2NhdGlvbiIsInRyZWF0bWVudER1cmF0aW9uIiwidHJlYXRtZW50UHJpY2UiLCJ0cmVhdG1lbnRUaXRsZSIsImRhdGVzQXJyYXkiLCJhbGxTdHlsaXN0cyIsImNvbnNvbGUiLCJsb2ciLCJjYWxlbmRhckV2ZW50cyIsInN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyIsInN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyIsImZvckVhY2giLCJ3b3JraW5nVGltZSIsInh4eCIsInN0eWxpc3RXb3JraW5nVGltZXMiLCJpdGVtIiwiYnVzeVRpbWVzIiwiZXZlbnQiLCJldmVudERhdGUiLCJzdGFydFRpbWUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwic3RhcnRpbmdUaW1lIiwibGVuZ3RoIiwic3RhcnRpbmdIb3VyIiwiTnVtYmVyIiwic3RhcnRpbmdNaW51dGUiLCJzdGF0dXMiLCJkYXRlIiwic3R5bGlzdCIsImV2ZW50TG9jYXRpb24iLCJrIiwiTWF0aCIsImNlaWwiLCJldmVudER1cmF0aW9uIiwiaW50ZXJ2YWwiLCJob3VyIiwiaG91ckluY3JlbWVudCIsImZsb29yIiwicHVzaCIsIm5ld1dvcmtpbmdUaW1lcyIsIndvcmtpbmdUaW1lcyIsImZpbHRlciIsInRpbWUiLCJpbmNsdWRlcyIsImZyZWVUaW1lcyIsInN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXMiLCJjb3VudE9mVGltZXNUb09tbWl0IiwicmVkdWNlIiwidG90YWwiLCJ0cmVhdG1lbnQiLCJxcXEiLCJpbmRleCIsImF2YWlsYWJsZVRpbWVzQnlEYXRlIiwiaSIsInRvdGFsVGltZUNvdW50IiwidGVtcCIsImoiLCJjb3VudCIsInkiLCJtaW51dGVzIiwidGltZXMiXSwic291cmNlUm9vdCI6IiJ9
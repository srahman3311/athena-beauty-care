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
/* harmony import */ var _getStylists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStylists */ "./lib/find-time-slots-copy/getStylists.js");
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
            return (0,_getStylists__WEBPACK_IMPORTED_MODULE_4__.getStylists)(newTreatments);

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
            }); //console.log(qqq);

            return _context.abrupt("return");

          case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC44Njc5NjQ5MjQwYTVmODA1OTY3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1JLGlCQUFpQixHQUFHLENBQ3RCLE9BRHNCLEVBQ2IsT0FEYSxFQUNKLE9BREksRUFDSyxPQURMLEVBQ2MsT0FEZCxFQUN1QixPQUR2QixFQUNnQyxPQURoQyxFQUN5QyxPQUR6QyxFQUNrRCxPQURsRCxFQUMyRCxPQUQzRCxFQUNvRSxPQURwRSxFQUM2RSxPQUQ3RSxFQUV0QixPQUZzQixFQUViLE9BRmEsRUFFSixPQUZJLEVBRUssT0FGTCxFQUVjLE9BRmQsRUFFdUIsT0FGdkIsRUFFZ0MsT0FGaEMsRUFFeUMsT0FGekMsRUFFa0QsT0FGbEQsRUFFMkQsT0FGM0QsRUFFb0UsT0FGcEUsRUFFNkUsT0FGN0UsRUFHdEIsT0FIc0IsRUFHYixPQUhhLEVBR0osT0FISSxFQUdLLE9BSEwsRUFHYyxPQUhkLENBQTFCO0FBTU8sSUFBTUMsYUFBYTtBQUFBLHlZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUduQkMsWUFBQUEsYUFIbUIsR0FHSCxDQUNsQjtBQUNJQyxjQUFBQSxRQUFRLEVBQUUsa0JBRGQ7QUFFSUMsY0FBQUEsY0FBYyxFQUFFLG1CQUZwQjtBQUdJQyxjQUFBQSxRQUFRLEVBQUUsNEJBSGQ7QUFJSUMsY0FBQUEsaUJBQWlCLEVBQUUsRUFKdkI7QUFLSUMsY0FBQUEsY0FBYyxFQUFFLEVBTHBCO0FBTUlDLGNBQUFBLGNBQWMsRUFBRTtBQU5wQixhQURrQixFQVNsQjtBQUNJTCxjQUFBQSxRQUFRLEVBQUUsU0FEZDtBQUVJQyxjQUFBQSxjQUFjLEVBQUUsaUJBRnBCO0FBR0lDLGNBQUFBLFFBQVEsRUFBRSw0QkFIZDtBQUlJQyxjQUFBQSxpQkFBaUIsRUFBRSxFQUp2QjtBQUtJQyxjQUFBQSxjQUFjLEVBQUUsRUFMcEI7QUFNSUMsY0FBQUEsY0FBYyxFQUFFO0FBTnBCLGFBVGtCLEVBaUJsQjtBQUNJTCxjQUFBQSxRQUFRLEVBQUUsT0FEZDtBQUVJQyxjQUFBQSxjQUFjLEVBQUUsaUJBRnBCO0FBR0lDLGNBQUFBLFFBQVEsRUFBRSw0QkFIZDtBQUlJQyxjQUFBQSxpQkFBaUIsRUFBRSxFQUp2QjtBQUtJQyxjQUFBQSxjQUFjLEVBQUUsRUFMcEI7QUFNSUMsY0FBQUEsY0FBYyxFQUFFO0FBTnBCLGFBakJrQixDQUhHLEVBZ0N6Qjs7QUFDTUMsWUFBQUEsVUFqQ21CLEdBaUNOWixvRUFBUSxFQWpDRixFQW1DekI7O0FBQ01RLFlBQUFBLFFBcENtQixHQW9DUkgsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkcsUUFwQ1QsRUFzQ3pCOztBQXRDeUI7QUFBQSxtQkF1Q0NQLHlEQUFXLENBQUNJLGFBQUQsQ0F2Q1o7O0FBQUE7QUF1Q25CUSxZQUFBQSxXQXZDbUI7QUF3Q3pCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWixFQXhDeUIsQ0EwQ3pCOztBQTFDeUI7QUFBQSxtQkEyQ0lkLDBFQUFXLEVBM0NmOztBQUFBO0FBMkNuQmlCLFlBQUFBLGNBM0NtQjtBQTRDekI7QUFJQTtBQUNBO0FBQ01DLFlBQUFBLG9DQWxEbUIsR0FrRG9CZixrRkFBZSxDQUFDVSxVQUFELEVBQWFDLFdBQWIsRUFBMEJSLGFBQTFCLEVBQXlDRyxRQUF6QyxDQWxEbkM7QUFzRHpCTSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsb0NBQVosRUF0RHlCLENBd0R6QjtBQUNBOztBQUlNQyxZQUFBQSxpQ0E3RG1CLEdBNkRpQixFQTdEakI7QUErRHpCRCxZQUFBQSxvQ0FBb0MsQ0FBQ0UsT0FBckMsQ0FBNkMsVUFBQUMsV0FBVyxFQUFJO0FBRXhELGtCQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUVBRCxjQUFBQSxXQUFXLENBQUNFLG1CQUFaLENBQWdDSCxPQUFoQyxDQUF3QyxVQUFBSSxJQUFJLEVBQUk7QUFFNUMsb0JBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUVBUixnQkFBQUEsY0FBYyxDQUFDRyxPQUFmLENBQXVCLFVBQUFNLEtBQUssRUFBSTtBQUU1QixzQkFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCSCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JFLE9BQWhCLENBQXdCLEdBQXhCLENBQTdCLENBQWxCO0FBRUEsc0JBQU1DLFlBQVksR0FBR0wsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxTQUFoQixDQUEwQkgsS0FBSyxDQUFDRSxTQUFOLENBQWdCRSxPQUFoQixDQUF3QixHQUF4QixJQUErQixDQUF6RCxFQUE0REosS0FBSyxDQUFDRSxTQUFOLENBQWdCSSxNQUE1RSxDQUFyQjtBQUNBLHNCQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0gsWUFBWSxDQUFDRixTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQUQsQ0FBM0I7QUFDQSxzQkFBTU0sY0FBYyxHQUFHRCxNQUFNLENBQUNILFlBQVksQ0FBQ0YsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFELENBQTdCOztBQUdBLHNCQUFHSCxLQUFLLENBQUNVLE1BQU4sS0FBaUIsUUFBcEIsRUFBOEI7QUFFMUIsd0JBQUdULFNBQVMsS0FBS04sV0FBVyxDQUFDZ0IsSUFBMUIsSUFBa0NYLEtBQUssQ0FBQ1ksT0FBTixLQUFrQmQsSUFBSSxDQUFDYyxPQUF6RCxJQUFvRVosS0FBSyxDQUFDYSxhQUFOLEtBQXdCOUIsUUFBL0YsRUFBeUc7QUFFckcsMkJBQUksSUFBSStCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVoQixLQUFLLENBQUNpQixhQUFOLEdBQXNCLEVBQWhDLENBQW5CLEVBQXdESCxDQUFDLEVBQXpELEVBQTZEO0FBRXpELDRCQUFJSSxRQUFRLEdBQUksS0FBS0osQ0FBTixHQUFXTCxjQUExQjtBQUNBLDRCQUFJVSxJQUFJLEdBQUdaLFlBQVgsQ0FIeUQsQ0FLekQ7QUFDQTs7QUFDQSw0QkFBSWEsYUFBYSxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV0gsUUFBUSxHQUFHLEVBQXRCLENBQXBCLENBUHlELENBU3pEOztBQUNBQyx3QkFBQUEsSUFBSSxJQUFJQyxhQUFSLENBVnlELENBWXpEOztBQUNBLDRCQUFHQSxhQUFhLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJGLDBCQUFBQSxRQUFRLEdBQUdBLFFBQVEsR0FBSSxLQUFLRSxhQUE1QjtBQUNILHlCQWZ3RCxDQWlCekQ7OztBQUNBLDRCQUFHRixRQUFRLEtBQUssQ0FBaEIsRUFBbUJBLFFBQVEsSUFBSSxHQUFaLENBbEJzQyxDQW9CekQ7O0FBQ0EsNEJBQUdDLElBQUksR0FBRyxFQUFWLEVBQWM7QUFDZHBCLDBCQUFBQSxTQUFTLENBQUN1QixJQUFWLFlBQW1CSCxJQUFuQixjQUEyQkQsUUFBM0I7QUFDQyx5QkFGRCxNQUVPO0FBQ0huQiwwQkFBQUEsU0FBUyxDQUFDdUIsSUFBVixXQUFrQkgsSUFBbEIsY0FBMEJELFFBQTFCO0FBQ0g7QUFDSjtBQUVKO0FBQ0o7QUFFSixpQkE1Q0Q7QUE4Q0Esb0JBQU1LLGVBQWUsR0FBR3pCLElBQUksQ0FBQzBCLFlBQUwsQ0FBa0JDLE1BQWxCLENBQXlCLFVBQUFDLElBQUk7QUFBQSx5QkFBSSxDQUFDM0IsU0FBUyxDQUFDNEIsUUFBVixDQUFtQkQsSUFBbkIsQ0FBTDtBQUFBLGlCQUE3QixDQUF4QjtBQUVBOUIsZ0JBQUFBLEdBQUcsQ0FBQzBCLElBQUosQ0FBUztBQUNMVixrQkFBQUEsT0FBTyxFQUFFZCxJQUFJLENBQUNjLE9BRFQ7QUFFTGdCLGtCQUFBQSxTQUFTLEVBQUVMO0FBRk4saUJBQVQ7QUFLSCxlQXpERDtBQTJEQTlCLGNBQUFBLGlDQUFpQyxDQUFDNkIsSUFBbEMsQ0FBdUM7QUFBRVgsZ0JBQUFBLElBQUksRUFBRWhCLFdBQVcsQ0FBQ2dCLElBQXBCO0FBQTBCa0IsZ0JBQUFBLHlCQUF5QixFQUFFakM7QUFBckQsZUFBdkM7QUFHSCxhQWxFRDtBQW9FQVAsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGlDQUFaLEVBbkl5QixDQXlJekI7QUFDQTtBQUNBOztBQUNNcUMsWUFBQUEsbUJBNUltQixHQTRJR2xELGFBQWEsQ0FBQ21ELE1BQWQsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFRQyxTQUFSO0FBQUEscUJBQXNCRCxLQUFLLEdBQUlqQixJQUFJLENBQUNDLElBQUwsQ0FBVWlCLFNBQVMsQ0FBQ2pELGlCQUFWLEdBQThCLEVBQXhDLENBQS9CO0FBQUEsYUFBckIsRUFBa0csQ0FBbEcsQ0E1SUg7QUFnSm5Ca0QsWUFBQUEsR0FoSm1CLEdBZ0piLEVBaEphO0FBa0p6QnpDLFlBQUFBLGlDQUFpQyxDQUFDQyxPQUFsQyxDQUEwQyxVQUFDaUIsSUFBRCxFQUFPd0IsS0FBUCxFQUFpQjtBQUV2RDtBQUVBO0FBQ0Esa0JBQU1DLG9CQUFvQixHQUFHLEVBQTdCOztBQUVBLG1CQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRzNELGlCQUFpQixDQUFDNEIsTUFBbEIsR0FBMkJ3QixtQkFBOUMsRUFBbUVPLENBQUMsRUFBcEUsRUFBd0U7QUFFcEU7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFJQyxjQUFjLEdBQUcsQ0FBckIsQ0FSb0UsQ0FVcEU7QUFDQTs7QUFDQSxvQkFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEscUJBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHN0IsSUFBSSxDQUFDa0IseUJBQUwsQ0FBK0J2QixNQUFsRCxFQUEwRGtDLENBQUMsRUFBM0QsRUFBK0Q7QUFFM0Qsc0JBQU0xQyxJQUFJLEdBQUdhLElBQUksQ0FBQ2tCLHlCQUFMLENBQStCVyxDQUEvQixDQUFiLENBRjJELENBSTNEO0FBQ0E7O0FBQ0Esc0JBQU1DLEtBQUssR0FBRzFCLElBQUksQ0FBQ0MsSUFBTCxDQUFVcEMsYUFBYSxDQUFDNEQsQ0FBRCxDQUFiLENBQWlCeEQsaUJBQWpCLEdBQXFDLEVBQS9DLENBQWQsQ0FOMkQsQ0FRM0Q7O0FBQ0FzRCxrQkFBQUEsY0FBYyxJQUFJRyxLQUFsQixDQVQyRCxDQVczRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQUlwQyxZQUFZLEdBQUcsRUFBbkIsQ0FqQjJELENBb0IzRDs7QUFDQSxzQkFBRyxDQUFDa0MsSUFBSSxDQUFDakMsTUFBVCxFQUFpQjtBQUNiRCxvQkFBQUEsWUFBWSxHQUFHM0IsaUJBQWlCLENBQUMyRCxDQUFELENBQWhDO0FBQ0gsbUJBRkQsTUFFTztBQUNIO0FBQ0E7QUFDQSx3QkFBTUssQ0FBQyxHQUFHaEUsaUJBQWlCLENBQUMwQixPQUFsQixDQUEwQm1DLElBQUksQ0FBQ0EsSUFBSSxDQUFDakMsTUFBTCxHQUFjLENBQWYsQ0FBOUIsQ0FBVjtBQUNBRCxvQkFBQUEsWUFBWSxHQUFHM0IsaUJBQWlCLENBQUNnRSxDQUFDLEdBQUcsQ0FBTCxDQUFoQztBQUNILG1CQTVCMEQsQ0E4QjNEOzs7QUFDQSxzQkFBSXZCLElBQUksR0FBR1gsTUFBTSxDQUFDSCxZQUFZLENBQUNGLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBRCxDQUFqQixDQS9CMkQsQ0ErQlY7O0FBQ2pELHNCQUFJd0MsT0FBTyxHQUFHbkMsTUFBTSxDQUFDSCxZQUFZLENBQUNGLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBRCxDQUFwQixDQWhDMkQsQ0FnQ1A7O0FBRXBELHVCQUFJLElBQUlXLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBSTJCLEtBQXBCLEVBQTJCM0IsQ0FBQyxFQUE1QixFQUFnQztBQUU1Qix3QkFBSU0sYUFBYSxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV3NCLE9BQU8sR0FBRyxFQUFyQixDQUFwQjtBQUNBeEIsb0JBQUFBLElBQUksSUFBSUMsYUFBUjs7QUFFQSx3QkFBR0EsYUFBYSxJQUFJLENBQXBCLEVBQXVCO0FBQ25CdUIsc0JBQUFBLE9BQU8sR0FBR0EsT0FBTyxHQUFJLEtBQUt2QixhQUExQjtBQUNILHFCQVAyQixDQVM1Qjs7O0FBQ0Esd0JBQUd1QixPQUFPLEtBQUssQ0FBZixFQUFrQkEsT0FBTyxJQUFJLEdBQVg7QUFFbEIsd0JBQUlqQixJQUFJLEdBQUcsRUFBWCxDQVo0QixDQWM1Qjs7QUFDQSx3QkFBR1AsSUFBSSxHQUFHLEVBQVYsRUFBYztBQUNWTyxzQkFBQUEsSUFBSSxjQUFRUCxJQUFSLGNBQWdCd0IsT0FBaEIsQ0FBSjtBQUNILHFCQUZELE1BRU87QUFDSGpCLHNCQUFBQSxJQUFJLGFBQU9QLElBQVAsY0FBZXdCLE9BQWYsQ0FBSjtBQUNILHFCQW5CMkIsQ0FxQjVCOzs7QUFDQSx3QkFBTWYsU0FBUyxHQUFHOUIsSUFBSSxDQUFDOEIsU0FBdkI7O0FBRUEsd0JBQUdBLFNBQVMsQ0FBQ0QsUUFBVixDQUFtQkQsSUFBbkIsQ0FBSCxFQUE2QjtBQUN6QmEsc0JBQUFBLElBQUksQ0FBQ2pCLElBQUwsQ0FBVUksSUFBVjtBQUNIOztBQUFBO0FBRURpQixvQkFBQUEsT0FBTyxHQUFHbkMsTUFBTSxDQUFDbUMsT0FBRCxDQUFoQjtBQUNBQSxvQkFBQUEsT0FBTyxJQUFJLEVBQVg7QUFFSCxtQkFqRTBELENBbUUzRDtBQUNBO0FBQ0E7OztBQUNBLHNCQUFHSixJQUFJLENBQUNqQyxNQUFMLEdBQWNnQyxjQUFqQixFQUFpQztBQUNwQzs7QUFFRCxvQkFBR0EsY0FBYyxLQUFLQyxJQUFJLENBQUNqQyxNQUEzQixFQUFtQzhCLG9CQUFvQixDQUFDZCxJQUFyQixDQUEwQjVDLGlCQUFpQixDQUFDMkQsQ0FBRCxDQUEzQztBQUN0Qzs7QUFFREgsY0FBQUEsR0FBRyxDQUFDWixJQUFKLENBQVM7QUFBQ1gsZ0JBQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFaO0FBQWtCaUMsZ0JBQUFBLEtBQUssRUFBRVI7QUFBekIsZUFBVDtBQUlILGFBckdELEVBbEp5QixDQXlQekI7O0FBelB5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFiekQsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVzIG5lZWRlZCB0byBmZXRjaCBldmVudHNcclxuaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2ZldGNoRXZlbnRzXCI7XHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlc1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0cyB9IGZyb20gXCIuL2dldFN0eWxpc3RzXCI7XHJcbmltcG9ydCB7IGdldFdvcmtpbmdUaW1lcyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0V29ya2luZ1RpbWVzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0VGltZXNBcnJheSA9IFtcclxuICAgIFwiMTA6MDBcIiwgXCIxMDoxNVwiLCBcIjEwOjMwXCIsIFwiMTA6NDVcIiwgXCIxMTowMFwiLCBcIjExOjE1XCIsIFwiMTE6MzBcIiwgXCIxMTo0NVwiLCBcIjEyOjAwXCIsIFwiMTI6MTVcIiwgXCIxMjozMFwiLCBcIjEyOjQ1XCIsIFxyXG4gICAgXCIxMzowMFwiLCBcIjEzOjE1XCIsIFwiMTM6MzBcIiwgXCIxMzo0NVwiLCBcIjE0OjAwXCIsIFwiMTQ6MTVcIiwgXCIxNDozMFwiLCBcIjE0OjQ1XCIsIFwiMTU6MDBcIiwgXCIxNToxNVwiLCBcIjE1OjMwXCIsIFwiMTU6NDVcIiwgXHJcbiAgICBcIjE2OjAwXCIsIFwiMTY6MTVcIiwgXCIxNjozMFwiLCBcIjE2OjQ1XCIsIFwiMTc6MDBcIlxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZmluZFRpbWVTbG90cyA9IGFzeW5jICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgbmV3VHJlYXRtZW50cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBlcm1hbmVudCBNYWtldXBcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiSmVubmlmZXIgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDg1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogMjMsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlBlcm1hbmVudCBNYWtldXAgd2l0aCBsaWdodCBtYXNzYWdlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiTWFzc2FnZVwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJBbmRyZWEgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDc1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIk1hc3NhZ2UgZm9yIDMwIG1pbnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJCcm93c1wiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJBdGhlbmEgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDM1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlNoYXBpbmcgYnJvd3NcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgMzAgZGF0ZXMgaW4gdGhlIGZvcm1hdCAneWVhci1tb250aC1kYXRlJyBmb3JtYXQgc3RhcnRpbmcgZnJvbSB0b2RheVxyXG4gICAgY29uc3QgZGF0ZXNBcnJheSA9IGdldERhdGVzKCk7XHJcblxyXG4gICAgLy8gUHV0dGluZyB0aGUgbG9jYXRpb24gaW5mbyBpbiBhIHZhcmlhYmxlXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ld1RyZWF0bWVudHNbMF0ubG9jYXRpb247XHJcbiAgICBcclxuICAgIC8vIEZldGNoaW5nIGluZm9ybWF0aW9uIG9mIGFsbCBzdHlsaXN0cyBhcyBwZXIgYWxsIHRyZWF0bWVudHNcclxuICAgIGNvbnN0IGFsbFN0eWxpc3RzID0gYXdhaXQgZ2V0U3R5bGlzdHMobmV3VHJlYXRtZW50cyk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxTdHlsaXN0cyk7XHJcblxyXG4gICAgLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4gICAgY29uc3QgY2FsZW5kYXJFdmVudHMgPSBhd2FpdCBmZXRjaEV2ZW50cygpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIkNhbGVuZGFyIGV2ZW50czogXCIsIGNhbGVuZGFyRXZlbnRzKTtcclxuXHJcblxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGRhdGVzIHdoZW4gYWxsIHN0eWxpc3RzIGFyZSBhdmFpbGFibGUgYXQgdGhlIHJlcXVlc3RlZCBsb2NhdGlvbi4gQWxzbyBmaW5kIGFsbCB0aGUgd29ya2luZ1RpbWVzIG9mIGFsbCBzdHlsaXN0c1xyXG4gICAgLy8gb24gdGhvc2UgZGF0ZXNcclxuICAgIGNvbnN0IHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyA9IGdldFdvcmtpbmdUaW1lcyhkYXRlc0FycmF5LCBhbGxTdHlsaXN0cywgbmV3VHJlYXRtZW50cywgbG9jYXRpb24pO1xyXG5cclxuICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzKTtcclxuXHJcbiAgICAvLyBjb25zdCBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBmaW5kRnJlZVRpbWVzKHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcywgY2FsZW5kYXJFdmVudHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzKTtcclxuXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBbXTtcclxuXHJcbiAgICBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMuZm9yRWFjaCh3b3JraW5nVGltZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHh4eCA9IFtdO1xyXG5cclxuICAgICAgICB3b3JraW5nVGltZS5zdHlsaXN0V29ya2luZ1RpbWVzLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidXN5VGltZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGluZ1RpbWUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LnN0YXJ0VGltZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdIb3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdNaW51dGUgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5zdGF0dXMgPT09IFwiQWN0aXZlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnREYXRlID09PSB3b3JraW5nVGltZS5kYXRlICYmIGV2ZW50LnN0eWxpc3QgPT09IGl0ZW0uc3R5bGlzdCAmJiBldmVudC5ldmVudExvY2F0aW9uID09PSBsb2NhdGlvbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMDsgayA8IE1hdGguY2VpbChldmVudC5ldmVudER1cmF0aW9uIC8gMTUpOyBrKyspIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9ICgxNSAqIGspICsgc3RhcnRpbmdNaW51dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IHN0YXJ0aW5nSG91cjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbCAvIDYwIGdpdmVzIHVzIHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmUgYWRkZWQgdG8gaG91ci4gRm9yIGV4YW1wbGUgLSBpZiBpbnRlcnZhbCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGhvdXIgaW5jcmVtZW50IHdpdGggaG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXJJbmNyZW1lbnQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIDEgdGhlbiBpbnRlcnZhbCB2YWx1ZSBtdXN0IGJlIHJlLWNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbnRlcnZhbCBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChgMCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3V29ya2luZ1RpbWVzID0gaXRlbS53b3JraW5nVGltZXMuZmlsdGVyKHRpbWUgPT4gIWJ1c3lUaW1lcy5pbmNsdWRlcyh0aW1lKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB4eHgucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzdHlsaXN0OiBpdGVtLnN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICBmcmVlVGltZXM6IG5ld1dvcmtpbmdUaW1lc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5wdXNoKHsgZGF0ZTogd29ya2luZ1RpbWUuZGF0ZSwgc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lczogeHh4fSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBSZWR1Y2UgZnVuY3Rpb24gYWNjZXB0cyB0d28gYXJndW1lbnRzLiBGaXJzdCBvbmUgaXMgYSBmdW5jdGlvbiB3aXRoIHR3byBwYXJhbWV0ZXJzIGFuZCB0aGUgc2Vjb25kIGlzIGluaXRpYWwgdmFsdWVcclxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgaXMgbm90IGV4cGxpY2l0bHkgZGVmaW5lZCAoZm9yIGZvbGxvd2luZyBjYXNlLCAwKSB0aGVuIHJlZHVjZSBmdW5jdGlvbiB3aWxsIGJ5IGRlZmF1bHQgdGFrZSB0aGVcclxuICAgIC8vIGZpcnN0IGl0ZW0gb2YgdGhlIGFycmF5IGFzIHRoZSBpbml0aWFsIHZhbHVlLiAgIFxyXG4gICAgY29uc3QgY291bnRPZlRpbWVzVG9PbW1pdCA9IG5ld1RyZWF0bWVudHMucmVkdWNlKCh0b3RhbCwgdHJlYXRtZW50KSA9PiB0b3RhbCArIChNYXRoLmNlaWwodHJlYXRtZW50LnRyZWF0bWVudER1cmF0aW9uIC8gMTUpKSwgMCk7XHJcbiAgXHJcblxyXG5cclxuICAgIGNvbnN0IHFxcSA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKChkYXRlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAyMDIxLTExLTE1XHJcblxyXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbGwgdGhlIHN0YXJ0aW5nIGZyZWUgdGltZXMgb2YgZWFjaCBkYXRlXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZXNCeURhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCAtIGNvdW50T2ZUaW1lc1RvT21taXQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy8gMTA6MDBcclxuXHJcbiAgICAgICAgICAgIC8vIHRvdGFsVGltZUNvdW50IHZhbHVlIHdpbGwgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IGluIHRoZSBmb2xsb3dpbmcgbG9vcC4gXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgaGFzIHRocmVlIGl0ZW1zIChzYXkgZmlyc3QgaXRlbSdzIGR1cmF0aW9uIGlzIDQ1LCBzZWNvbmQgaXMgNTUgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGlyZCBpcyAyNSkgdGhlbiBhdCB0aGUgZW5kIG9mIHRoZSBsb29wIHRvdGFsVGltZUNvdW50IHdpbGwgYmUgKE1hdGguY2VpbCg0NSAvIDE1KSArICBNYXRoLmNlaWwoNTUgLyAxNSlcclxuICAgICAgICAgICAgLy8gKyBNYXRoLmNlaWwoMjUgLyAxNSkpIDMgKyA0ICsgMiA9IDlcclxuICAgICAgICAgICAgbGV0IHRvdGFsVGltZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0ZW1wb3JhcnkgYXJyYXkgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBmcmVlIHRpbWVzIG9mIGVhY2ggc3R5bGlzdCBieSBsb29waW5nIHRocm91Z2ggdGhlIFxyXG4gICAgICAgICAgICAvLyBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRlLnN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXNbal07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvdW50IHdpbGwgZGV0ZXJtaW5lIGhvdyBtYW55IGZyZWUgdGltZXMgc2hvdWxkIGJlIGxvb2tlZCBmb3IuIEZvciBleGFtcGxlIGlmIGNvdW50IGlzIDMgYW5kIHN0YXJ0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lIGlzIDA5OjMwIHRoZW4gMDk6MzAsIDA5OjQ1ICYgMTA6MDAgc2hvdWxkIGJlIGxvb2tlZCBmb3JcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKG5ld1RyZWF0bWVudHNbal0udHJlYXRtZW50RHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBcyBzYWlkIGFib3ZlIHRvdGFsVGltZUNvdW50IG11c3QgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHZlcnkgY3J1Y2lhbC4gT24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSB0aGlzIHN0YXJ0aW5nVGltZSB3aWxsIGJlIHVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAtIHNheSB3ZSBhcmUgYXQgMDk6MDAgb24gZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXksIGNvdW50IGlzIDNcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAwOTo0NSBmb3IgdGhlIDJuZCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheS4gU2F5IGZvciB0aGUgc2Vjb25kIGl0ZW0gY291bnQgaXMgNCBhbmQgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlIG9uIGFsbCBmb3VyIHRpbWVzIDA5OjQ1LCAxMDowMCwgMTA6MTUgJiAxMDozMCwgc28gc3RhcnRpbmdUaW1lIGZvciB0aGUgdGhpcmQgaXRlbSBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydGluZ1RpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0ZW1wIGxlbmd0aCBpcyB6ZXJvIHRoZW4gd2UgYXJlIGF0IHRoZSBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGVmYXVsdFRpbWVzQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBhZnRlciB0aGUgdGltZSBvZiBsYXN0IGl0ZW0gb2YgdGVtcCBhcnJheS4gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRlZmF1bHRUaW1lc0FycmF5LmluZGV4T2YodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyAxMVxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDw9IGNvdW50OyBrKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG1pbnV0ZXMgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT09IDApIG1pbnV0ZXMgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzQXJyYXlbaW5kZXhdLmZyZWVUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmVlVGltZXMgPSBpdGVtLmZyZWVUaW1lcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyZWVUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE51bWJlcihtaW51dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzICs9IDE1O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXkgc3RhcnRpbmdUaW1lIGlzIDA5OjAwICYgY291bnQgaXMgMy4gU28gdG90YWxUaW1lQ291bnQgaXMgYWxzbyAzLiBBZnRlciBmaXJzdCBpdGVyYXRpb24gdGVtcC5sZW5ndGggXHJcbiAgICAgICAgICAgICAgICAvLyBtdXN0IGJlIGVxdWFscyB0byAzIG90aGVyd2lzZSBpdCBtZWFucyB0aGF0IHN0eWxpc3QgaXMgbm90IGF2YWlsYWJsZSBhdCBhbGwgdGhyZWUgdGltZXMgKDA5OjAwLiAwOToxNSAmIDA5OjMwKVxyXG4gICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgaWYodGVtcC5sZW5ndGggPCB0b3RhbFRpbWVDb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkZWZhdWx0VGltZXNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxcXEucHVzaCh7ZGF0ZTogZGF0ZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuICAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhxcXEpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJmZXRjaEV2ZW50cyIsImdldERhdGVzIiwiZ2V0U3R5bGlzdHMiLCJnZXRXb3JraW5nVGltZXMiLCJkZWZhdWx0VGltZXNBcnJheSIsImZpbmRUaW1lU2xvdHMiLCJuZXdUcmVhdG1lbnRzIiwiY2F0ZWdvcnkiLCJjaG9vc2VuU3R5bGlzdCIsImxvY2F0aW9uIiwidHJlYXRtZW50RHVyYXRpb24iLCJ0cmVhdG1lbnRQcmljZSIsInRyZWF0bWVudFRpdGxlIiwiZGF0ZXNBcnJheSIsImFsbFN0eWxpc3RzIiwiY29uc29sZSIsImxvZyIsImNhbGVuZGFyRXZlbnRzIiwic3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzIiwic3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzIiwiZm9yRWFjaCIsIndvcmtpbmdUaW1lIiwieHh4Iiwic3R5bGlzdFdvcmtpbmdUaW1lcyIsIml0ZW0iLCJidXN5VGltZXMiLCJldmVudCIsImV2ZW50RGF0ZSIsInN0YXJ0VGltZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJzdGFydGluZ1RpbWUiLCJsZW5ndGgiLCJzdGFydGluZ0hvdXIiLCJOdW1iZXIiLCJzdGFydGluZ01pbnV0ZSIsInN0YXR1cyIsImRhdGUiLCJzdHlsaXN0IiwiZXZlbnRMb2NhdGlvbiIsImsiLCJNYXRoIiwiY2VpbCIsImV2ZW50RHVyYXRpb24iLCJpbnRlcnZhbCIsImhvdXIiLCJob3VySW5jcmVtZW50IiwiZmxvb3IiLCJwdXNoIiwibmV3V29ya2luZ1RpbWVzIiwid29ya2luZ1RpbWVzIiwiZmlsdGVyIiwidGltZSIsImluY2x1ZGVzIiwiZnJlZVRpbWVzIiwic3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcyIsImNvdW50T2ZUaW1lc1RvT21taXQiLCJyZWR1Y2UiLCJ0b3RhbCIsInRyZWF0bWVudCIsInFxcSIsImluZGV4IiwiYXZhaWxhYmxlVGltZXNCeURhdGUiLCJpIiwidG90YWxUaW1lQ291bnQiLCJ0ZW1wIiwiaiIsImNvdW50IiwieSIsIm1pbnV0ZXMiLCJ0aW1lcyJdLCJzb3VyY2VSb290IjoiIn0=
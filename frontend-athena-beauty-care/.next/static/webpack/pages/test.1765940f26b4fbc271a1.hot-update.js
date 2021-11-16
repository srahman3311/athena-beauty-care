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
            console.log(defaultTimesArray.length - countOfTimesToOmmit);
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

          case 21:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4xNzY1OTQwZjI2YjRmYmMyNzFhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1JLGlCQUFpQixHQUFHLENBQ3RCLE9BRHNCLEVBQ2IsT0FEYSxFQUNKLE9BREksRUFDSyxPQURMLEVBQ2MsT0FEZCxFQUN1QixPQUR2QixFQUNnQyxPQURoQyxFQUN5QyxPQUR6QyxFQUNrRCxPQURsRCxFQUMyRCxPQUQzRCxFQUNvRSxPQURwRSxFQUM2RSxPQUQ3RSxFQUV0QixPQUZzQixFQUViLE9BRmEsRUFFSixPQUZJLEVBRUssT0FGTCxFQUVjLE9BRmQsRUFFdUIsT0FGdkIsRUFFZ0MsT0FGaEMsRUFFeUMsT0FGekMsRUFFa0QsT0FGbEQsRUFFMkQsT0FGM0QsRUFFb0UsT0FGcEUsRUFFNkUsT0FGN0UsRUFHdEIsT0FIc0IsRUFHYixPQUhhLEVBR0osT0FISSxFQUdLLE9BSEwsRUFHYyxPQUhkLENBQTFCO0FBTU8sSUFBTUMsYUFBYTtBQUFBLHlZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUduQkMsWUFBQUEsYUFIbUIsR0FHSCxDQUNsQjtBQUNJQyxjQUFBQSxRQUFRLEVBQUUsa0JBRGQ7QUFFSUMsY0FBQUEsY0FBYyxFQUFFLG1CQUZwQjtBQUdJQyxjQUFBQSxRQUFRLEVBQUUsNEJBSGQ7QUFJSUMsY0FBQUEsaUJBQWlCLEVBQUUsRUFKdkI7QUFLSUMsY0FBQUEsY0FBYyxFQUFFLEVBTHBCO0FBTUlDLGNBQUFBLGNBQWMsRUFBRTtBQU5wQixhQURrQixFQVNsQjtBQUNJTCxjQUFBQSxRQUFRLEVBQUUsU0FEZDtBQUVJQyxjQUFBQSxjQUFjLEVBQUUsaUJBRnBCO0FBR0lDLGNBQUFBLFFBQVEsRUFBRSw0QkFIZDtBQUlJQyxjQUFBQSxpQkFBaUIsRUFBRSxFQUp2QjtBQUtJQyxjQUFBQSxjQUFjLEVBQUUsRUFMcEI7QUFNSUMsY0FBQUEsY0FBYyxFQUFFO0FBTnBCLGFBVGtCLEVBaUJsQjtBQUNJTCxjQUFBQSxRQUFRLEVBQUUsT0FEZDtBQUVJQyxjQUFBQSxjQUFjLEVBQUUsaUJBRnBCO0FBR0lDLGNBQUFBLFFBQVEsRUFBRSw0QkFIZDtBQUlJQyxjQUFBQSxpQkFBaUIsRUFBRSxFQUp2QjtBQUtJQyxjQUFBQSxjQUFjLEVBQUUsRUFMcEI7QUFNSUMsY0FBQUEsY0FBYyxFQUFFO0FBTnBCLGFBakJrQixDQUhHLEVBZ0N6Qjs7QUFDTUMsWUFBQUEsVUFqQ21CLEdBaUNOWixvRUFBUSxFQWpDRixFQW1DekI7O0FBQ01RLFlBQUFBLFFBcENtQixHQW9DUkgsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkcsUUFwQ1QsRUFzQ3pCOztBQXRDeUI7QUFBQSxtQkF1Q0NQLDBFQUFXLENBQUNJLGFBQUQsQ0F2Q1o7O0FBQUE7QUF1Q25CUSxZQUFBQSxXQXZDbUI7QUF3Q3pCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWixFQXhDeUIsQ0EwQ3pCOztBQTFDeUI7QUFBQSxtQkEyQ0lkLDBFQUFXLEVBM0NmOztBQUFBO0FBMkNuQmlCLFlBQUFBLGNBM0NtQjtBQTRDekI7QUFJQTtBQUNBO0FBQ01DLFlBQUFBLG9DQWxEbUIsR0FrRG9CZixrRkFBZSxDQUFDVSxVQUFELEVBQWFDLFdBQWIsRUFBMEJSLGFBQTFCLEVBQXlDRyxRQUF6QyxDQWxEbkM7QUFzRHpCTSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsb0NBQVosRUF0RHlCLENBd0R6QjtBQUNBOztBQUlNQyxZQUFBQSxpQ0E3RG1CLEdBNkRpQixFQTdEakI7QUErRHpCRCxZQUFBQSxvQ0FBb0MsQ0FBQ0UsT0FBckMsQ0FBNkMsVUFBQUMsV0FBVyxFQUFJO0FBRXhELGtCQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUVBRCxjQUFBQSxXQUFXLENBQUNFLG1CQUFaLENBQWdDSCxPQUFoQyxDQUF3QyxVQUFBSSxJQUFJLEVBQUk7QUFFNUMsb0JBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUVBUixnQkFBQUEsY0FBYyxDQUFDRyxPQUFmLENBQXVCLFVBQUFNLEtBQUssRUFBSTtBQUU1QixzQkFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCSCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JFLE9BQWhCLENBQXdCLEdBQXhCLENBQTdCLENBQWxCO0FBRUEsc0JBQU1DLFlBQVksR0FBR0wsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxTQUFoQixDQUEwQkgsS0FBSyxDQUFDRSxTQUFOLENBQWdCRSxPQUFoQixDQUF3QixHQUF4QixJQUErQixDQUF6RCxFQUE0REosS0FBSyxDQUFDRSxTQUFOLENBQWdCSSxNQUE1RSxDQUFyQjtBQUNBLHNCQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0gsWUFBWSxDQUFDRixTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQUQsQ0FBM0I7QUFDQSxzQkFBTU0sY0FBYyxHQUFHRCxNQUFNLENBQUNILFlBQVksQ0FBQ0YsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFELENBQTdCOztBQUdBLHNCQUFHSCxLQUFLLENBQUNVLE1BQU4sS0FBaUIsUUFBcEIsRUFBOEI7QUFFMUIsd0JBQUdULFNBQVMsS0FBS04sV0FBVyxDQUFDZ0IsSUFBMUIsSUFBa0NYLEtBQUssQ0FBQ1ksT0FBTixLQUFrQmQsSUFBSSxDQUFDYyxPQUF6RCxJQUFvRVosS0FBSyxDQUFDYSxhQUFOLEtBQXdCOUIsUUFBL0YsRUFBeUc7QUFFckcsMkJBQUksSUFBSStCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVoQixLQUFLLENBQUNpQixhQUFOLEdBQXNCLEVBQWhDLENBQW5CLEVBQXdESCxDQUFDLEVBQXpELEVBQTZEO0FBRXpELDRCQUFJSSxRQUFRLEdBQUksS0FBS0osQ0FBTixHQUFXTCxjQUExQjtBQUNBLDRCQUFJVSxJQUFJLEdBQUdaLFlBQVgsQ0FIeUQsQ0FLekQ7QUFDQTs7QUFDQSw0QkFBSWEsYUFBYSxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV0gsUUFBUSxHQUFHLEVBQXRCLENBQXBCLENBUHlELENBU3pEOztBQUNBQyx3QkFBQUEsSUFBSSxJQUFJQyxhQUFSLENBVnlELENBWXpEOztBQUNBLDRCQUFHQSxhQUFhLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJGLDBCQUFBQSxRQUFRLEdBQUdBLFFBQVEsR0FBSSxLQUFLRSxhQUE1QjtBQUNILHlCQWZ3RCxDQWlCekQ7OztBQUNBLDRCQUFHRixRQUFRLEtBQUssQ0FBaEIsRUFBbUJBLFFBQVEsSUFBSSxHQUFaLENBbEJzQyxDQW9CekQ7O0FBQ0EsNEJBQUdDLElBQUksR0FBRyxFQUFWLEVBQWM7QUFDZHBCLDBCQUFBQSxTQUFTLENBQUN1QixJQUFWLFlBQW1CSCxJQUFuQixjQUEyQkQsUUFBM0I7QUFDQyx5QkFGRCxNQUVPO0FBQ0huQiwwQkFBQUEsU0FBUyxDQUFDdUIsSUFBVixXQUFrQkgsSUFBbEIsY0FBMEJELFFBQTFCO0FBQ0g7QUFDSjtBQUVKO0FBQ0o7QUFFSixpQkE1Q0Q7QUE4Q0Esb0JBQU1LLGVBQWUsR0FBR3pCLElBQUksQ0FBQzBCLFlBQUwsQ0FBa0JDLE1BQWxCLENBQXlCLFVBQUFDLElBQUk7QUFBQSx5QkFBSSxDQUFDM0IsU0FBUyxDQUFDNEIsUUFBVixDQUFtQkQsSUFBbkIsQ0FBTDtBQUFBLGlCQUE3QixDQUF4QjtBQUVBOUIsZ0JBQUFBLEdBQUcsQ0FBQzBCLElBQUosQ0FBUztBQUNMVixrQkFBQUEsT0FBTyxFQUFFZCxJQUFJLENBQUNjLE9BRFQ7QUFFTGdCLGtCQUFBQSxTQUFTLEVBQUVMO0FBRk4saUJBQVQ7QUFLSCxlQXpERDtBQTJEQTlCLGNBQUFBLGlDQUFpQyxDQUFDNkIsSUFBbEMsQ0FBdUM7QUFBRVgsZ0JBQUFBLElBQUksRUFBRWhCLFdBQVcsQ0FBQ2dCLElBQXBCO0FBQTBCa0IsZ0JBQUFBLHlCQUF5QixFQUFFakM7QUFBckQsZUFBdkM7QUFHSCxhQWxFRDtBQW9FQVAsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGlDQUFaLEVBbkl5QixDQXlJekI7QUFDQTtBQUNBOztBQUNNcUMsWUFBQUEsbUJBNUltQixHQTRJR2xELGFBQWEsQ0FBQ21ELE1BQWQsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFRQyxTQUFSO0FBQUEscUJBQXNCRCxLQUFLLEdBQUlqQixJQUFJLENBQUNDLElBQUwsQ0FBVWlCLFNBQVMsQ0FBQ2pELGlCQUFWLEdBQThCLEVBQXhDLENBQS9CO0FBQUEsYUFBckIsRUFBa0csQ0FBbEcsQ0E1SUg7QUErSXpCSyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosaUJBQWlCLENBQUM0QixNQUFsQixHQUEyQndCLG1CQUF2QztBQUVNSSxZQUFBQSxHQWpKbUIsR0FpSmIsRUFqSmE7QUFtSnpCekMsWUFBQUEsaUNBQWlDLENBQUNDLE9BQWxDLENBQTBDLFVBQUNpQixJQUFELEVBQU93QixLQUFQLEVBQWlCO0FBRXZEO0FBRUE7QUFDQSxrQkFBTUMsb0JBQW9CLEdBQUcsRUFBN0I7O0FBRUEsbUJBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHM0QsaUJBQWlCLENBQUM0QixNQUFsQixHQUEyQndCLG1CQUE5QyxFQUFtRU8sQ0FBQyxFQUFwRSxFQUF3RTtBQUVwRTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQUlDLGNBQWMsR0FBRyxDQUFyQixDQVJvRSxDQVVwRTtBQUNBOztBQUNBLG9CQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxxQkFBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUc3QixJQUFJLENBQUNrQix5QkFBTCxDQUErQnZCLE1BQWxELEVBQTBEa0MsQ0FBQyxFQUEzRCxFQUErRDtBQUUzRCxzQkFBTTFDLElBQUksR0FBR2EsSUFBSSxDQUFDa0IseUJBQUwsQ0FBK0JXLENBQS9CLENBQWIsQ0FGMkQsQ0FJM0Q7QUFDQTs7QUFDQSxzQkFBTUMsS0FBSyxHQUFHMUIsSUFBSSxDQUFDQyxJQUFMLENBQVVwQyxhQUFhLENBQUM0RCxDQUFELENBQWIsQ0FBaUJ4RCxpQkFBakIsR0FBcUMsRUFBL0MsQ0FBZCxDQU4yRCxDQVEzRDs7QUFDQXNELGtCQUFBQSxjQUFjLElBQUlHLEtBQWxCLENBVDJELENBVzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFBSXBDLFlBQVksR0FBRyxFQUFuQixDQWpCMkQsQ0FvQjNEOztBQUNBLHNCQUFHLENBQUNrQyxJQUFJLENBQUNqQyxNQUFULEVBQWlCO0FBQ2JELG9CQUFBQSxZQUFZLEdBQUczQixpQkFBaUIsQ0FBQzJELENBQUQsQ0FBaEM7QUFDSCxtQkFGRCxNQUVPO0FBQ0g7QUFDQTtBQUNBLHdCQUFNSyxDQUFDLEdBQUdoRSxpQkFBaUIsQ0FBQzBCLE9BQWxCLENBQTBCbUMsSUFBSSxDQUFDQSxJQUFJLENBQUNqQyxNQUFMLEdBQWMsQ0FBZixDQUE5QixDQUFWO0FBQ0FELG9CQUFBQSxZQUFZLEdBQUczQixpQkFBaUIsQ0FBQ2dFLENBQUMsR0FBRyxDQUFMLENBQWhDO0FBQ0gsbUJBNUIwRCxDQThCM0Q7OztBQUNBLHNCQUFJdkIsSUFBSSxHQUFHWCxNQUFNLENBQUNILFlBQVksQ0FBQ0YsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFELENBQWpCLENBL0IyRCxDQStCVjs7QUFDakQsc0JBQUl3QyxPQUFPLEdBQUduQyxNQUFNLENBQUNILFlBQVksQ0FBQ0YsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFELENBQXBCLENBaEMyRCxDQWdDUDs7QUFFcEQsdUJBQUksSUFBSVcsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxJQUFJMkIsS0FBcEIsRUFBMkIzQixDQUFDLEVBQTVCLEVBQWdDO0FBRTVCLHdCQUFJTSxhQUFhLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXc0IsT0FBTyxHQUFHLEVBQXJCLENBQXBCO0FBQ0F4QixvQkFBQUEsSUFBSSxJQUFJQyxhQUFSOztBQUVBLHdCQUFHQSxhQUFhLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJ1QixzQkFBQUEsT0FBTyxHQUFHQSxPQUFPLEdBQUksS0FBS3ZCLGFBQTFCO0FBQ0gscUJBUDJCLENBUzVCOzs7QUFDQSx3QkFBR3VCLE9BQU8sS0FBSyxDQUFmLEVBQWtCQSxPQUFPLElBQUksR0FBWDtBQUVsQix3QkFBSWpCLElBQUksR0FBRyxFQUFYLENBWjRCLENBYzVCOztBQUNBLHdCQUFHUCxJQUFJLEdBQUcsRUFBVixFQUFjO0FBQ1ZPLHNCQUFBQSxJQUFJLGNBQVFQLElBQVIsY0FBZ0J3QixPQUFoQixDQUFKO0FBQ0gscUJBRkQsTUFFTztBQUNIakIsc0JBQUFBLElBQUksYUFBT1AsSUFBUCxjQUFld0IsT0FBZixDQUFKO0FBQ0gscUJBbkIyQixDQXFCNUI7OztBQUNBLHdCQUFNZixTQUFTLEdBQUc5QixJQUFJLENBQUM4QixTQUF2Qjs7QUFFQSx3QkFBR0EsU0FBUyxDQUFDRCxRQUFWLENBQW1CRCxJQUFuQixDQUFILEVBQTZCO0FBQ3pCYSxzQkFBQUEsSUFBSSxDQUFDakIsSUFBTCxDQUFVSSxJQUFWO0FBQ0g7O0FBQUE7QUFFRGlCLG9CQUFBQSxPQUFPLEdBQUduQyxNQUFNLENBQUNtQyxPQUFELENBQWhCO0FBQ0FBLG9CQUFBQSxPQUFPLElBQUksRUFBWDtBQUVILG1CQWpFMEQsQ0FtRTNEO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQUdKLElBQUksQ0FBQ2pDLE1BQUwsR0FBY2dDLGNBQWpCLEVBQWlDO0FBQ3BDOztBQUVELG9CQUFHQSxjQUFjLEtBQUtDLElBQUksQ0FBQ2pDLE1BQTNCLEVBQW1DOEIsb0JBQW9CLENBQUNkLElBQXJCLENBQTBCNUMsaUJBQWlCLENBQUMyRCxDQUFELENBQTNDO0FBQ3RDOztBQUVESCxjQUFBQSxHQUFHLENBQUNaLElBQUosQ0FBUztBQUFDWCxnQkFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNBLElBQVo7QUFBa0JpQyxnQkFBQUEsS0FBSyxFQUFFUjtBQUF6QixlQUFUO0FBSUgsYUFyR0Q7QUF3R0EvQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTRDLEdBQVo7QUEzUHlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJ2RCxhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9maW5kVGltZVNsb3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZXMgbmVlZGVkIHRvIGZldGNoIGV2ZW50c1xyXG5pbXBvcnQgeyBmZXRjaEV2ZW50cyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZmV0Y2hFdmVudHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldERhdGVzXCI7XHJcbmltcG9ydCB7IGdldFN0eWxpc3RzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0c1wiO1xyXG5pbXBvcnQgeyBnZXRXb3JraW5nVGltZXMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldFdvcmtpbmdUaW1lc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFRpbWVzQXJyYXkgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRUaW1lU2xvdHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQZXJtYW5lbnQgTWFrZXVwXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkplbm5pZmVyIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA4NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDIzLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJQZXJtYW5lbnQgTWFrZXVwIHdpdGggbGlnaHQgbWFzc2FnZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk1hc3NhZ2VcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQW5kcmVhIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA3NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQyLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJNYXNzYWdlIGZvciAzMCBtaW5zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQnJvd3NcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQXRoZW5hIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiAzNSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQ1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJTaGFwaW5nIGJyb3dzXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIDMwIGRhdGVzIGluIHRoZSBmb3JtYXQgJ3llYXItbW9udGgtZGF0ZScgZm9ybWF0IHN0YXJ0aW5nIGZyb20gdG9kYXlcclxuICAgIGNvbnN0IGRhdGVzQXJyYXkgPSBnZXREYXRlcygpO1xyXG5cclxuICAgIC8vIFB1dHRpbmcgdGhlIGxvY2F0aW9uIGluZm8gaW4gYSB2YXJpYWJsZVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXdUcmVhdG1lbnRzWzBdLmxvY2F0aW9uO1xyXG4gICAgXHJcbiAgICAvLyBGZXRjaGluZyBpbmZvcm1hdGlvbiBvZiBhbGwgc3R5bGlzdHMgYXMgcGVyIGFsbCB0cmVhdG1lbnRzXHJcbiAgICBjb25zdCBhbGxTdHlsaXN0cyA9IGF3YWl0IGdldFN0eWxpc3RzKG5ld1RyZWF0bWVudHMpO1xyXG4gICAgY29uc29sZS5sb2coYWxsU3R5bGlzdHMpO1xyXG5cclxuICAgIC8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIGNvbnN0IGNhbGVuZGFyRXZlbnRzID0gYXdhaXQgZmV0Y2hFdmVudHMoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJDYWxlbmRhciBldmVudHM6IFwiLCBjYWxlbmRhckV2ZW50cyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBkYXRlcyB3aGVuIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIGF0IHRoZSByZXF1ZXN0ZWQgbG9jYXRpb24uIEFsc28gZmluZCBhbGwgdGhlIHdvcmtpbmdUaW1lcyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIC8vIG9uIHRob3NlIGRhdGVzXHJcbiAgICBjb25zdCBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBnZXRXb3JraW5nVGltZXMoZGF0ZXNBcnJheSwgYWxsU3R5bGlzdHMsIG5ld1RyZWF0bWVudHMsIGxvY2F0aW9uKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gZmluZEZyZWVUaW1lcyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMsIGNhbGVuZGFyRXZlbnRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcblxyXG4gICAgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLmZvckVhY2god29ya2luZ1RpbWUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB4eHggPSBbXTtcclxuXHJcbiAgICAgICAgd29ya2luZ1RpbWUuc3R5bGlzdFdvcmtpbmdUaW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudERhdGUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdUaW1lID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nSG91ciA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDAsIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTWludXRlID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMywgNSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuc3RhdHVzID09PSBcIkFjdGl2ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50RGF0ZSA9PT0gd29ya2luZ1RpbWUuZGF0ZSAmJiBldmVudC5zdHlsaXN0ID09PSBpdGVtLnN0eWxpc3QgJiYgZXZlbnQuZXZlbnRMb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDA7IGsgPCBNYXRoLmNlaWwoZXZlbnQuZXZlbnREdXJhdGlvbiAvIDE1KTsgaysrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSAoMTUgKiBrKSArIHN0YXJ0aW5nTWludXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJ2YWwgLyA2MCBnaXZlcyB1cyB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIGhvdXIuIEZvciBleGFtcGxlIC0gaWYgaW50ZXJ2YWwgaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3NSB0aGVuIHdlIG11c3QgYWRkIDEgd2l0aCBob3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBob3VyIGluY3JlbWVudCB3aXRoIGhvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsIC0gKDYwICogaG91ckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW50ZXJ2YWwgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXJ2YWwgPT09IDApIGludGVydmFsICs9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dvcmtpbmdUaW1lcyA9IGl0ZW0ud29ya2luZ1RpbWVzLmZpbHRlcih0aW1lID0+ICFidXN5VGltZXMuaW5jbHVkZXModGltZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeHh4LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3R5bGlzdDogaXRlbS5zdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgZnJlZVRpbWVzOiBuZXdXb3JraW5nVGltZXNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMucHVzaCh7IGRhdGU6IHdvcmtpbmdUaW1lLmRhdGUsIHN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXM6IHh4eH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gUmVkdWNlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50cy4gRmlyc3Qgb25lIGlzIGEgZnVuY3Rpb24gd2l0aCB0d28gcGFyYW1ldGVycyBhbmQgdGhlIHNlY29uZCBpcyBpbml0aWFsIHZhbHVlXHJcbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWQgKGZvciBmb2xsb3dpbmcgY2FzZSwgMCkgdGhlbiByZWR1Y2UgZnVuY3Rpb24gd2lsbCBieSBkZWZhdWx0IHRha2UgdGhlXHJcbiAgICAvLyBmaXJzdCBpdGVtIG9mIHRoZSBhcnJheSBhcyB0aGUgaW5pdGlhbCB2YWx1ZS4gICBcclxuICAgIGNvbnN0IGNvdW50T2ZUaW1lc1RvT21taXQgPSBuZXdUcmVhdG1lbnRzLnJlZHVjZSgodG90YWwsIHRyZWF0bWVudCkgPT4gdG90YWwgKyAoTWF0aC5jZWlsKHRyZWF0bWVudC50cmVhdG1lbnREdXJhdGlvbiAvIDE1KSksIDApO1xyXG4gIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCAtIGNvdW50T2ZUaW1lc1RvT21taXQpO1xyXG5cclxuICAgIGNvbnN0IHFxcSA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKChkYXRlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAyMDIxLTExLTE1XHJcblxyXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbGwgdGhlIHN0YXJ0aW5nIGZyZWUgdGltZXMgb2YgZWFjaCBkYXRlXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZXNCeURhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCAtIGNvdW50T2ZUaW1lc1RvT21taXQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy8gMTA6MDBcclxuXHJcbiAgICAgICAgICAgIC8vIHRvdGFsVGltZUNvdW50IHZhbHVlIHdpbGwgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IGluIHRoZSBmb2xsb3dpbmcgbG9vcC4gXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgaGFzIHRocmVlIGl0ZW1zIChzYXkgZmlyc3QgaXRlbSdzIGR1cmF0aW9uIGlzIDQ1LCBzZWNvbmQgaXMgNTUgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGlyZCBpcyAyNSkgdGhlbiBhdCB0aGUgZW5kIG9mIHRoZSBsb29wIHRvdGFsVGltZUNvdW50IHdpbGwgYmUgKE1hdGguY2VpbCg0NSAvIDE1KSArICBNYXRoLmNlaWwoNTUgLyAxNSlcclxuICAgICAgICAgICAgLy8gKyBNYXRoLmNlaWwoMjUgLyAxNSkpIDMgKyA0ICsgMiA9IDlcclxuICAgICAgICAgICAgbGV0IHRvdGFsVGltZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0ZW1wb3JhcnkgYXJyYXkgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBmcmVlIHRpbWVzIG9mIGVhY2ggc3R5bGlzdCBieSBsb29waW5nIHRocm91Z2ggdGhlIFxyXG4gICAgICAgICAgICAvLyBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRlLnN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXNbal07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvdW50IHdpbGwgZGV0ZXJtaW5lIGhvdyBtYW55IGZyZWUgdGltZXMgc2hvdWxkIGJlIGxvb2tlZCBmb3IuIEZvciBleGFtcGxlIGlmIGNvdW50IGlzIDMgYW5kIHN0YXJ0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lIGlzIDA5OjMwIHRoZW4gMDk6MzAsIDA5OjQ1ICYgMTA6MDAgc2hvdWxkIGJlIGxvb2tlZCBmb3JcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKG5ld1RyZWF0bWVudHNbal0udHJlYXRtZW50RHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBcyBzYWlkIGFib3ZlIHRvdGFsVGltZUNvdW50IG11c3QgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHZlcnkgY3J1Y2lhbC4gT24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSB0aGlzIHN0YXJ0aW5nVGltZSB3aWxsIGJlIHVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAtIHNheSB3ZSBhcmUgYXQgMDk6MDAgb24gZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXksIGNvdW50IGlzIDNcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAwOTo0NSBmb3IgdGhlIDJuZCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheS4gU2F5IGZvciB0aGUgc2Vjb25kIGl0ZW0gY291bnQgaXMgNCBhbmQgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlIG9uIGFsbCBmb3VyIHRpbWVzIDA5OjQ1LCAxMDowMCwgMTA6MTUgJiAxMDozMCwgc28gc3RhcnRpbmdUaW1lIGZvciB0aGUgdGhpcmQgaXRlbSBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydGluZ1RpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0ZW1wIGxlbmd0aCBpcyB6ZXJvIHRoZW4gd2UgYXJlIGF0IHRoZSBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGVmYXVsdFRpbWVzQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBhZnRlciB0aGUgdGltZSBvZiBsYXN0IGl0ZW0gb2YgdGVtcCBhcnJheS4gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRlZmF1bHRUaW1lc0FycmF5LmluZGV4T2YodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyAxMVxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDw9IGNvdW50OyBrKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG1pbnV0ZXMgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT09IDApIG1pbnV0ZXMgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzQXJyYXlbaW5kZXhdLmZyZWVUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmVlVGltZXMgPSBpdGVtLmZyZWVUaW1lcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyZWVUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE51bWJlcihtaW51dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzICs9IDE1O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXkgc3RhcnRpbmdUaW1lIGlzIDA5OjAwICYgY291bnQgaXMgMy4gU28gdG90YWxUaW1lQ291bnQgaXMgYWxzbyAzLiBBZnRlciBmaXJzdCBpdGVyYXRpb24gdGVtcC5sZW5ndGggXHJcbiAgICAgICAgICAgICAgICAvLyBtdXN0IGJlIGVxdWFscyB0byAzIG90aGVyd2lzZSBpdCBtZWFucyB0aGF0IHN0eWxpc3QgaXMgbm90IGF2YWlsYWJsZSBhdCBhbGwgdGhyZWUgdGltZXMgKDA5OjAwLiAwOToxNSAmIDA5OjMwKVxyXG4gICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgaWYodGVtcC5sZW5ndGggPCB0b3RhbFRpbWVDb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkZWZhdWx0VGltZXNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxcXEucHVzaCh7ZGF0ZTogZGF0ZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuICAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHFxcSk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm47XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImZldGNoRXZlbnRzIiwiZ2V0RGF0ZXMiLCJnZXRTdHlsaXN0cyIsImdldFdvcmtpbmdUaW1lcyIsImRlZmF1bHRUaW1lc0FycmF5IiwiZmluZFRpbWVTbG90cyIsIm5ld1RyZWF0bWVudHMiLCJjYXRlZ29yeSIsImNob29zZW5TdHlsaXN0IiwibG9jYXRpb24iLCJ0cmVhdG1lbnREdXJhdGlvbiIsInRyZWF0bWVudFByaWNlIiwidHJlYXRtZW50VGl0bGUiLCJkYXRlc0FycmF5IiwiYWxsU3R5bGlzdHMiLCJjb25zb2xlIiwibG9nIiwiY2FsZW5kYXJFdmVudHMiLCJzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMiLCJzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMiLCJmb3JFYWNoIiwid29ya2luZ1RpbWUiLCJ4eHgiLCJzdHlsaXN0V29ya2luZ1RpbWVzIiwiaXRlbSIsImJ1c3lUaW1lcyIsImV2ZW50IiwiZXZlbnREYXRlIiwic3RhcnRUaW1lIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInN0YXJ0aW5nVGltZSIsImxlbmd0aCIsInN0YXJ0aW5nSG91ciIsIk51bWJlciIsInN0YXJ0aW5nTWludXRlIiwic3RhdHVzIiwiZGF0ZSIsInN0eWxpc3QiLCJldmVudExvY2F0aW9uIiwiayIsIk1hdGgiLCJjZWlsIiwiZXZlbnREdXJhdGlvbiIsImludGVydmFsIiwiaG91ciIsImhvdXJJbmNyZW1lbnQiLCJmbG9vciIsInB1c2giLCJuZXdXb3JraW5nVGltZXMiLCJ3b3JraW5nVGltZXMiLCJmaWx0ZXIiLCJ0aW1lIiwiaW5jbHVkZXMiLCJmcmVlVGltZXMiLCJzdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzIiwiY291bnRPZlRpbWVzVG9PbW1pdCIsInJlZHVjZSIsInRvdGFsIiwidHJlYXRtZW50IiwicXFxIiwiaW5kZXgiLCJhdmFpbGFibGVUaW1lc0J5RGF0ZSIsImkiLCJ0b3RhbFRpbWVDb3VudCIsInRlbXAiLCJqIiwiY291bnQiLCJ5IiwibWludXRlcyIsInRpbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==
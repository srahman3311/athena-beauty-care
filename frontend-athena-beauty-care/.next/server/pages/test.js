"use strict";
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./lib/find-time-slots-copy/findTimeSlots.js":
/*!***************************************************!*\
  !*** ./lib/find-time-slots-copy/findTimeSlots.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTimeSlots": () => (/* binding */ findTimeSlots)
/* harmony export */ });
/* harmony import */ var _helper_functions_fetchEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/fetchEvents */ "./lib/find-time-slots-copy/helper-functions/fetchEvents.js");
/* harmony import */ var _helper_functions_getDates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/getDates */ "./lib/find-time-slots-copy/helper-functions/getDates.js");
/* harmony import */ var _helper_functions_getStylists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions/getStylists */ "./lib/find-time-slots-copy/helper-functions/getStylists.js");
/* harmony import */ var _helper_functions_getWorkingTimes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions/getWorkingTimes */ "./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js");
// Modules needed to fetch events




const defaultTimesArray = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
const findTimeSlots = async () => {
  const newTreatments = [{
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

  const datesArray = (0,_helper_functions_getDates__WEBPACK_IMPORTED_MODULE_1__.getDates)(); // Putting the location info in a variable

  const location = newTreatments[0].location; // Fetching information of all stylists as per all treatments

  const allStylists = await (0,_helper_functions_getStylists__WEBPACK_IMPORTED_MODULE_2__.getStylists)(newTreatments);
  console.log(allStylists); // Fetching calendar events of all stylists

  const calendarEvents = await (0,_helper_functions_fetchEvents__WEBPACK_IMPORTED_MODULE_0__.fetchEvents)(); //console.log("Calendar events: ", calendarEvents);
  // Find the dates when all stylists are available at the requested location. Also find all the workingTimes of all stylists
  // on those dates

  const stylistsWorkingTimesOnAvailableDates = (0,_helper_functions_getWorkingTimes__WEBPACK_IMPORTED_MODULE_3__.getWorkingTimes)(datesArray, allStylists, newTreatments, location);
  console.log(stylistsWorkingTimesOnAvailableDates); // const stylistsFreeTimesOnAvailableDates = findFreeTimes(stylistsWorkingTimesOnAvailableDates, calendarEvents);
  // console.log(stylistsFreeTimesOnAvailableDates);

  const stylistsFreeTimesOnAvailableDates = [];
  stylistsWorkingTimesOnAvailableDates.forEach(workingTime => {
    const xxx = [];
    workingTime.stylistWorkingTimes.forEach(item => {
      const busyTimes = [];
      calendarEvents.forEach(event => {
        const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));
        const startingTime = event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length);
        const startingHour = Number(startingTime.substring(0, 2));
        const startingMinute = Number(startingTime.substring(3, 5));

        if (event.status === "Active") {
          if (eventDate === workingTime.date && event.stylist === item.stylist && event.eventLocation === location) {
            for (let k = 0; k < Math.ceil(event.eventDuration / 15); k++) {
              let interval = 15 * k + startingMinute;
              let hour = startingHour; // interval / 60 gives us the value which should be added to hour. For example - if interval is 
              // 75 then we must add 1 with hour 

              let hourIncrement = Math.floor(interval / 60); // Adding hour increment with hour

              hour += hourIncrement; // if hourIncrement is more than or equal to 1 then interval value must be re-calculated

              if (hourIncrement >= 1) {
                interval = interval - 60 * hourIncrement;
              } // if interval is 0 then add extra one 0 to keep the minute value in two digits


              if (interval === 0) interval += "0"; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

              if (hour < 10) {
                busyTimes.push(`0${hour}:${interval}`);
              } else {
                busyTimes.push(`${hour}:${interval}`);
              }
            }
          }
        }
      });
      const newWorkingTimes = item.workingTimes.filter(time => !busyTimes.includes(time));
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

  const countOfTimesToOmmit = newTreatments.reduce((total, treatment) => total + Math.ceil(treatment.treatmentDuration / 15), 0);
  console.log(defaultTimesArray.length);
  console.log(countOfTimesToOmmit);
  console.log(defaultTimesArray.length - countOfTimesToOmmit);
  const qqq = [];
  stylistsFreeTimesOnAvailableDates.forEach((date, index) => {
    // 2021-11-15
    // This array will be populated with all the starting free times of each date
    const availableTimesByDate = [];

    for (let i = 0; i < defaultTimesArray.length + 1 - countOfTimesToOmmit; i++) {
      // 10:00
      // totalTimeCount value will be updated on each item of stylistsWithFreeTimes array in the following loop. 
      // For example, if stylistsWithFreeTimes has three items (say first item's duration is 45, second is 55 
      // and third is 25) then at the end of the loop totalTimeCount will be (Math.ceil(45 / 15) +  Math.ceil(55 / 15)
      // + Math.ceil(25 / 15)) 3 + 4 + 2 = 9
      let totalTimeCount = 0; // This is a temporary array which will be populated with free times of each stylist by looping through the 
      // stylistsWithFreeTimes array

      const temp = [];

      for (let j = 0; j < date.stylistsAndTheirFreeTimes.length; j++) {
        const item = date.stylistsAndTheirFreeTimes[j]; // Count will determine how many free times should be looked for. For example if count is 3 and starting
        // time is 09:30 then 09:30, 09:45 & 10:00 should be looked for

        const count = Math.ceil(newTreatments[j].treatmentDuration / 15); // As said above totalTimeCount must be updated on each item of stylistsWithFreeTimes array

        totalTimeCount += count; // This is very crucial. On each item of stylistsWithFreeTimes array this startingTime will be updated,
        // for example - say we are at 09:00 on first item of stylistsWithFreeTimes array, count is 3
        // and stylist of this item is available on all three times 09:00, 09:15 & 9:30. So startingTime must be 
        // from 09:45 for the 2nd item of stylistsWithFreeTimes array. Say for the second item count is 4 and stylist
        // is available on all four times 09:45, 10:00, 10:15 & 10:30, so startingTime for the third item of the 
        //  stylistsWithFreeTimes array 10:45. 

        let startingTime = ""; // if temp length is zero then we are at the first item of stylistsWithFreeTimes array

        if (!temp.length) {
          startingTime = defaultTimesArray[i];
        } else {
          // For each consecutive item after the first one of stylistsWithFreeTimes array startingTime will be 
          // the next time after the time of last item of temp array. 
          const y = defaultTimesArray.indexOf(temp[temp.length - 1]);
          startingTime = defaultTimesArray[y + 1];
        } //


        let hour = Number(startingTime.substring(0, 2)); // 11

        let minutes = Number(startingTime.substring(3, 5)); // 30

        for (let k = 1; k <= count; k++) {
          let hourIncrement = Math.floor(minutes / 60);
          hour += hourIncrement;

          if (hourIncrement >= 1) {
            minutes = minutes - 60 * hourIncrement;
          } // if minutes is 0 then add extra one 0 to keep the minute value in two digits


          if (minutes === 0) minutes += "0";
          let time = ""; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

          if (hour < 10) {
            time = `0${hour}:${minutes}`;
          } else {
            time = `${hour}:${minutes}`;
          } //const freeTimes = item.freeTimesArray[index].freeTimes;


          const freeTimes = item.freeTimes;

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
  return;
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/fetchEvents.js":
/*!******************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/fetchEvents.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchEvents": () => (/* binding */ fetchEvents)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Axios
 // Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.

const fetchEvents = async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/events");
    return response.data.events;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/getDates.js":
/*!***************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getDates.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDates": () => (/* binding */ getDates)
/* harmony export */ });
const getDates = () => {
  const dates = []; // Populating dateTimeArray with 30 dates from today

  for (let i = 0; i <= 30; i++) {
    // One day equals 86400000 milliseconds. For each iteration we need to add (86400000 * i) milliseconds with today. This way
    // we can calculate dates as many as we want.   
    const date = new Date(new Date().getTime() + 86400000 * i);
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    const newDate = `${year}-${month}-${day}`;
    dates.push(newDate);
  }

  return dates;
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/getStylists.js":
/*!******************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getStylists.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStylists": () => (/* binding */ getStylists)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Axios
 // Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.

const getStylists = async newTreatments => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/stylists");
    const stylists = [];
    newTreatments.forEach(treatment => {
      response.data.stylists.forEach(stylist => {
        const stylistFullName = stylist.firstName + " " + stylist.lastName;
        if (treatment.choosenStylist === stylistFullName) stylists.push(stylist);
      });
    });
    return stylists;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js":
/*!**********************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWorkingTimes": () => (/* binding */ getWorkingTimes)
/* harmony export */ });
const times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]; // 2021-11-15

const getWorkingTimes = (datesArray, allStylists, newTreatments, location) => {
  const stylistsWorkingTimesOnAvailableDates = []; // For each date of the dateTimeArray loop through the each stylist's workSchdule to find day match.

  datesArray.forEach(date => {
    const newDate = new Date(date); // get the day name (example - Monday) from the date to check against each stylist's workSchedule's day Name

    const dayName = newDate.toLocaleDateString("en-US", {
      weekday: "long"
    }); // No stylist has workSchedule on Saturday and Sunday so end the current iteration here

    if (dayName === "Saturday" || dayName === "Sunday") return;
    const temp = []; // Loot through all stylists to be able to loop through their workSchedule 

    allStylists.forEach(stylist => {
      // Only one from the stylist workSchedule array will match with the current date iteration, if it's found no need to
      // loop through the rest of the schedules
      for (let p = 0; p < stylist.workSchedule.length; p++) {
        const schedule = stylist.workSchedule[p];

        if (schedule.location === location && schedule.day === dayName) {
          // Array of times above has all the possible working times. startTimeIndex is the index of time from the times
          // array, endTimeIndex is the 
          // Check which times from the times array above match with the working start and end time of the current stylist
          // on current date. We need to put all the times starting from startTime and ending at endTime
          const startTimeIndex = times.indexOf(schedule.startTime);
          const endTimeIndex = times.indexOf(schedule.endTime);
          const workingTimes = [];

          for (let q = startTimeIndex; q <= endTimeIndex; q++) {
            workingTimes.push(times[q]);
          }

          temp.push({
            stylist: stylist.firstName + " " + stylist.lastName,
            workingTimes
          });
          break;
        }
      }
    }); // Say day of current date iteration is Monday and all stylists are available on this day at the requested location. It
    // means a 

    if (temp.length === newTreatments.length) stylistsWorkingTimesOnAvailableDates.push({
      date,
      stylistWorkingTimes: temp
    });
  });
  return stylistsWorkingTimesOnAvailableDates;
};

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Test)
/* harmony export */ });
/* harmony import */ var _lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/find-time-slots-copy/findTimeSlots */ "./lib/find-time-slots-copy/findTimeSlots.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\test.js";


function Test() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: _lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_0__.findTimeSlots,
      children: "Test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9mZXRjaEV2ZW50cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRXb3JraW5nVGltZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vcGFnZXMvdGVzdC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZXMgbmVlZGVkIHRvIGZldGNoIGV2ZW50c1xyXG5pbXBvcnQgeyBmZXRjaEV2ZW50cyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZmV0Y2hFdmVudHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldERhdGVzXCI7XHJcbmltcG9ydCB7IGdldFN0eWxpc3RzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0c1wiO1xyXG5pbXBvcnQgeyBnZXRXb3JraW5nVGltZXMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldFdvcmtpbmdUaW1lc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFRpbWVzQXJyYXkgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRUaW1lU2xvdHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQZXJtYW5lbnQgTWFrZXVwXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkplbm5pZmVyIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA4NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDIzLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJQZXJtYW5lbnQgTWFrZXVwIHdpdGggbGlnaHQgbWFzc2FnZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk1hc3NhZ2VcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQW5kcmVhIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA3NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQyLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJNYXNzYWdlIGZvciAzMCBtaW5zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQnJvd3NcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQXRoZW5hIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiAzNSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQ1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJTaGFwaW5nIGJyb3dzXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIDMwIGRhdGVzIGluIHRoZSBmb3JtYXQgJ3llYXItbW9udGgtZGF0ZScgZm9ybWF0IHN0YXJ0aW5nIGZyb20gdG9kYXlcclxuICAgIGNvbnN0IGRhdGVzQXJyYXkgPSBnZXREYXRlcygpO1xyXG5cclxuICAgIC8vIFB1dHRpbmcgdGhlIGxvY2F0aW9uIGluZm8gaW4gYSB2YXJpYWJsZVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXdUcmVhdG1lbnRzWzBdLmxvY2F0aW9uO1xyXG4gICAgXHJcbiAgICAvLyBGZXRjaGluZyBpbmZvcm1hdGlvbiBvZiBhbGwgc3R5bGlzdHMgYXMgcGVyIGFsbCB0cmVhdG1lbnRzXHJcbiAgICBjb25zdCBhbGxTdHlsaXN0cyA9IGF3YWl0IGdldFN0eWxpc3RzKG5ld1RyZWF0bWVudHMpO1xyXG4gICAgY29uc29sZS5sb2coYWxsU3R5bGlzdHMpO1xyXG5cclxuICAgIC8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIGNvbnN0IGNhbGVuZGFyRXZlbnRzID0gYXdhaXQgZmV0Y2hFdmVudHMoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJDYWxlbmRhciBldmVudHM6IFwiLCBjYWxlbmRhckV2ZW50cyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBkYXRlcyB3aGVuIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIGF0IHRoZSByZXF1ZXN0ZWQgbG9jYXRpb24uIEFsc28gZmluZCBhbGwgdGhlIHdvcmtpbmdUaW1lcyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIC8vIG9uIHRob3NlIGRhdGVzXHJcbiAgICBjb25zdCBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBnZXRXb3JraW5nVGltZXMoZGF0ZXNBcnJheSwgYWxsU3R5bGlzdHMsIG5ld1RyZWF0bWVudHMsIGxvY2F0aW9uKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gZmluZEZyZWVUaW1lcyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMsIGNhbGVuZGFyRXZlbnRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcblxyXG4gICAgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLmZvckVhY2god29ya2luZ1RpbWUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB4eHggPSBbXTtcclxuXHJcbiAgICAgICAgd29ya2luZ1RpbWUuc3R5bGlzdFdvcmtpbmdUaW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudERhdGUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdUaW1lID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nSG91ciA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDAsIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTWludXRlID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMywgNSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuc3RhdHVzID09PSBcIkFjdGl2ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50RGF0ZSA9PT0gd29ya2luZ1RpbWUuZGF0ZSAmJiBldmVudC5zdHlsaXN0ID09PSBpdGVtLnN0eWxpc3QgJiYgZXZlbnQuZXZlbnRMb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDA7IGsgPCBNYXRoLmNlaWwoZXZlbnQuZXZlbnREdXJhdGlvbiAvIDE1KTsgaysrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSAoMTUgKiBrKSArIHN0YXJ0aW5nTWludXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJ2YWwgLyA2MCBnaXZlcyB1cyB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIGhvdXIuIEZvciBleGFtcGxlIC0gaWYgaW50ZXJ2YWwgaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3NSB0aGVuIHdlIG11c3QgYWRkIDEgd2l0aCBob3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBob3VyIGluY3JlbWVudCB3aXRoIGhvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsIC0gKDYwICogaG91ckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW50ZXJ2YWwgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXJ2YWwgPT09IDApIGludGVydmFsICs9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dvcmtpbmdUaW1lcyA9IGl0ZW0ud29ya2luZ1RpbWVzLmZpbHRlcih0aW1lID0+ICFidXN5VGltZXMuaW5jbHVkZXModGltZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeHh4LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3R5bGlzdDogaXRlbS5zdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgZnJlZVRpbWVzOiBuZXdXb3JraW5nVGltZXNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMucHVzaCh7IGRhdGU6IHdvcmtpbmdUaW1lLmRhdGUsIHN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXM6IHh4eH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gUmVkdWNlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50cy4gRmlyc3Qgb25lIGlzIGEgZnVuY3Rpb24gd2l0aCB0d28gcGFyYW1ldGVycyBhbmQgdGhlIHNlY29uZCBpcyBpbml0aWFsIHZhbHVlXHJcbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWQgKGZvciBmb2xsb3dpbmcgY2FzZSwgMCkgdGhlbiByZWR1Y2UgZnVuY3Rpb24gd2lsbCBieSBkZWZhdWx0IHRha2UgdGhlXHJcbiAgICAvLyBmaXJzdCBpdGVtIG9mIHRoZSBhcnJheSBhcyB0aGUgaW5pdGlhbCB2YWx1ZS4gICBcclxuICAgIGNvbnN0IGNvdW50T2ZUaW1lc1RvT21taXQgPSBuZXdUcmVhdG1lbnRzLnJlZHVjZSgodG90YWwsIHRyZWF0bWVudCkgPT4gdG90YWwgKyAoTWF0aC5jZWlsKHRyZWF0bWVudC50cmVhdG1lbnREdXJhdGlvbiAvIDE1KSksIDApO1xyXG4gIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3VudE9mVGltZXNUb09tbWl0KTtcclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCAtIGNvdW50T2ZUaW1lc1RvT21taXQpO1xyXG5cclxuICAgIGNvbnN0IHFxcSA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKChkYXRlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAyMDIxLTExLTE1XHJcblxyXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbGwgdGhlIHN0YXJ0aW5nIGZyZWUgdGltZXMgb2YgZWFjaCBkYXRlXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZXNCeURhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IChkZWZhdWx0VGltZXNBcnJheS5sZW5ndGggKyAxKSAtIGNvdW50T2ZUaW1lc1RvT21taXQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy8gMTA6MDBcclxuXHJcbiAgICAgICAgICAgIC8vIHRvdGFsVGltZUNvdW50IHZhbHVlIHdpbGwgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IGluIHRoZSBmb2xsb3dpbmcgbG9vcC4gXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgaGFzIHRocmVlIGl0ZW1zIChzYXkgZmlyc3QgaXRlbSdzIGR1cmF0aW9uIGlzIDQ1LCBzZWNvbmQgaXMgNTUgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGlyZCBpcyAyNSkgdGhlbiBhdCB0aGUgZW5kIG9mIHRoZSBsb29wIHRvdGFsVGltZUNvdW50IHdpbGwgYmUgKE1hdGguY2VpbCg0NSAvIDE1KSArICBNYXRoLmNlaWwoNTUgLyAxNSlcclxuICAgICAgICAgICAgLy8gKyBNYXRoLmNlaWwoMjUgLyAxNSkpIDMgKyA0ICsgMiA9IDlcclxuICAgICAgICAgICAgbGV0IHRvdGFsVGltZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0ZW1wb3JhcnkgYXJyYXkgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBmcmVlIHRpbWVzIG9mIGVhY2ggc3R5bGlzdCBieSBsb29waW5nIHRocm91Z2ggdGhlIFxyXG4gICAgICAgICAgICAvLyBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRlLnN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXNbal07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvdW50IHdpbGwgZGV0ZXJtaW5lIGhvdyBtYW55IGZyZWUgdGltZXMgc2hvdWxkIGJlIGxvb2tlZCBmb3IuIEZvciBleGFtcGxlIGlmIGNvdW50IGlzIDMgYW5kIHN0YXJ0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lIGlzIDA5OjMwIHRoZW4gMDk6MzAsIDA5OjQ1ICYgMTA6MDAgc2hvdWxkIGJlIGxvb2tlZCBmb3JcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKG5ld1RyZWF0bWVudHNbal0udHJlYXRtZW50RHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBcyBzYWlkIGFib3ZlIHRvdGFsVGltZUNvdW50IG11c3QgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHZlcnkgY3J1Y2lhbC4gT24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSB0aGlzIHN0YXJ0aW5nVGltZSB3aWxsIGJlIHVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAtIHNheSB3ZSBhcmUgYXQgMDk6MDAgb24gZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXksIGNvdW50IGlzIDNcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAwOTo0NSBmb3IgdGhlIDJuZCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheS4gU2F5IGZvciB0aGUgc2Vjb25kIGl0ZW0gY291bnQgaXMgNCBhbmQgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlIG9uIGFsbCBmb3VyIHRpbWVzIDA5OjQ1LCAxMDowMCwgMTA6MTUgJiAxMDozMCwgc28gc3RhcnRpbmdUaW1lIGZvciB0aGUgdGhpcmQgaXRlbSBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydGluZ1RpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0ZW1wIGxlbmd0aCBpcyB6ZXJvIHRoZW4gd2UgYXJlIGF0IHRoZSBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGVmYXVsdFRpbWVzQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBhZnRlciB0aGUgdGltZSBvZiBsYXN0IGl0ZW0gb2YgdGVtcCBhcnJheS4gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRlZmF1bHRUaW1lc0FycmF5LmluZGV4T2YodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyAxMVxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDw9IGNvdW50OyBrKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG1pbnV0ZXMgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT09IDApIG1pbnV0ZXMgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzQXJyYXlbaW5kZXhdLmZyZWVUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmVlVGltZXMgPSBpdGVtLmZyZWVUaW1lcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyZWVUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE51bWJlcihtaW51dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzICs9IDE1O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXkgc3RhcnRpbmdUaW1lIGlzIDA5OjAwICYgY291bnQgaXMgMy4gU28gdG90YWxUaW1lQ291bnQgaXMgYWxzbyAzLiBBZnRlciBmaXJzdCBpdGVyYXRpb24gdGVtcC5sZW5ndGggXHJcbiAgICAgICAgICAgICAgICAvLyBtdXN0IGJlIGVxdWFscyB0byAzIG90aGVyd2lzZSBpdCBtZWFucyB0aGF0IHN0eWxpc3QgaXMgbm90IGF2YWlsYWJsZSBhdCBhbGwgdGhyZWUgdGltZXMgKDA5OjAwLiAwOToxNSAmIDA5OjMwKVxyXG4gICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgaWYodGVtcC5sZW5ndGggPCB0b3RhbFRpbWVDb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkZWZhdWx0VGltZXNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxcXEucHVzaCh7ZGF0ZTogZGF0ZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuICAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHFxcSk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm47XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gQXhpb3NcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuLy8gZm9yIGxvb3AgaXMgdGhlIHdheSB0byBnbyBmb3IgZmV0Y2hpbmcgZGF0YSB0aHJvdWdoIGFwaSBjYWxscy4gZm9yRWFjaCBzdWNrcy5cclxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmV2ZW50cztcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IGdldERhdGVzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGVzID0gW107XHJcblxyXG4gICAgLy8gUG9wdWxhdGluZyBkYXRlVGltZUFycmF5IHdpdGggMzAgZGF0ZXMgZnJvbSB0b2RheVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSAzMDsgaSsrKSB7XHJcblxyXG4gICAgICAgIC8vIE9uZSBkYXkgZXF1YWxzIDg2NDAwMDAwIG1pbGxpc2Vjb25kcy4gRm9yIGVhY2ggaXRlcmF0aW9uIHdlIG5lZWQgdG8gYWRkICg4NjQwMDAwMCAqIGkpIG1pbGxpc2Vjb25kcyB3aXRoIHRvZGF5LiBUaGlzIHdheVxyXG4gICAgICAgIC8vIHdlIGNhbiBjYWxjdWxhdGUgZGF0ZXMgYXMgbWFueSBhcyB3ZSB3YW50LiAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg4NjQwMDAwMCAqIGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxMCkgbW9udGggPSBgMCR7bW9udGh9YDtcclxuICAgICAgICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YDtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgICAgIGRhdGVzLnB1c2gobmV3RGF0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlcztcclxuXHJcbn0iLCIvLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4vLyBmb3IgbG9vcCBpcyB0aGUgd2F5IHRvIGdvIGZvciBmZXRjaGluZyBkYXRhIHRocm91Z2ggYXBpIGNhbGxzLiBmb3JFYWNoIHN1Y2tzLlxyXG5leHBvcnQgY29uc3QgZ2V0U3R5bGlzdHMgPSBhc3luYyAobmV3VHJlYXRtZW50cykgPT4ge1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0c1wiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdHMgPSBbXTtcclxuXHJcbiAgICAgICAgbmV3VHJlYXRtZW50cy5mb3JFYWNoKHRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLnN0eWxpc3RzLmZvckVhY2goc3R5bGlzdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGlzdEZ1bGxOYW1lID0gc3R5bGlzdC5maXJzdE5hbWUgKyBcIiBcIiArIHN0eWxpc3QubGFzdE5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodHJlYXRtZW50LmNob29zZW5TdHlsaXN0ID09PSBzdHlsaXN0RnVsbE5hbWUpIHN0eWxpc3RzLnB1c2goc3R5bGlzdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsaXN0cztcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiY29uc3QgdGltZXMgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXTtcclxuXHJcbi8vIDIwMjEtMTEtMTVcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXb3JraW5nVGltZXMgPSAoZGF0ZXNBcnJheSwgYWxsU3R5bGlzdHMsIG5ld1RyZWF0bWVudHMsIGxvY2F0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcblxyXG4gICAgLy8gRm9yIGVhY2ggZGF0ZSBvZiB0aGUgZGF0ZVRpbWVBcnJheSBsb29wIHRocm91Z2ggdGhlIGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hkdWxlIHRvIGZpbmQgZGF5IG1hdGNoLlxyXG4gICAgZGF0ZXNBcnJheS5mb3JFYWNoKGRhdGUgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBkYXkgbmFtZSAoZXhhbXBsZSAtIE1vbmRheSkgZnJvbSB0aGUgZGF0ZSB0byBjaGVjayBhZ2FpbnN0IGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hlZHVsZSdzIGRheSBOYW1lXHJcbiAgICAgICAgY29uc3QgZGF5TmFtZSA9IG5ld0RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gTm8gc3R5bGlzdCBoYXMgd29ya1NjaGVkdWxlIG9uIFNhdHVyZGF5IGFuZCBTdW5kYXkgc28gZW5kIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBoZXJlXHJcbiAgICAgICAgaWYoZGF5TmFtZSA9PT0gXCJTYXR1cmRheVwiIHx8IGRheU5hbWUgPT09IFwiU3VuZGF5XCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBMb290IHRocm91Z2ggYWxsIHN0eWxpc3RzIHRvIGJlIGFibGUgdG8gbG9vcCB0aHJvdWdoIHRoZWlyIHdvcmtTY2hlZHVsZSBcclxuICAgICAgICBhbGxTdHlsaXN0cy5mb3JFYWNoKHN0eWxpc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gT25seSBvbmUgZnJvbSB0aGUgc3R5bGlzdCB3b3JrU2NoZWR1bGUgYXJyYXkgd2lsbCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IGRhdGUgaXRlcmF0aW9uLCBpZiBpdCdzIGZvdW5kIG5vIG5lZWQgdG9cclxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXN0IG9mIHRoZSBzY2hlZHVsZXNcclxuICAgICAgICAgICAgZm9yKGxldCBwID0gMDsgcCA8IHN0eWxpc3Qud29ya1NjaGVkdWxlLmxlbmd0aDsgcCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGUgPSBzdHlsaXN0LndvcmtTY2hlZHVsZVtwXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY2hlZHVsZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24gJiYgc2NoZWR1bGUuZGF5ID09PSBkYXlOYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFycmF5IG9mIHRpbWVzIGFib3ZlIGhhcyBhbGwgdGhlIHBvc3NpYmxlIHdvcmtpbmcgdGltZXMuIHN0YXJ0VGltZUluZGV4IGlzIHRoZSBpbmRleCBvZiB0aW1lIGZyb20gdGhlIHRpbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXksIGVuZFRpbWVJbmRleCBpcyB0aGUgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdoaWNoIHRpbWVzIGZyb20gdGhlIHRpbWVzIGFycmF5IGFib3ZlIG1hdGNoIHdpdGggdGhlIHdvcmtpbmcgc3RhcnQgYW5kIGVuZCB0aW1lIG9mIHRoZSBjdXJyZW50IHN0eWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbiBjdXJyZW50IGRhdGUuIFdlIG5lZWQgdG8gcHV0IGFsbCB0aGUgdGltZXMgc3RhcnRpbmcgZnJvbSBzdGFydFRpbWUgYW5kIGVuZGluZyBhdCBlbmRUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lSW5kZXggPSB0aW1lcy5pbmRleE9mKHNjaGVkdWxlLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kVGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihzY2hlZHVsZS5lbmRUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ya2luZ1RpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgcSA9IHN0YXJ0VGltZUluZGV4OyBxIDw9IGVuZFRpbWVJbmRleDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdUaW1lcy5wdXNoKHRpbWVzW3FdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCh7IHN0eWxpc3Q6IHN0eWxpc3QuZmlyc3ROYW1lICsgXCIgXCIgKyBzdHlsaXN0Lmxhc3ROYW1lLCB3b3JraW5nVGltZXN9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNheSBkYXkgb2YgY3VycmVudCBkYXRlIGl0ZXJhdGlvbiBpcyBNb25kYXkgYW5kIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIG9uIHRoaXMgZGF5IGF0IHRoZSByZXF1ZXN0ZWQgbG9jYXRpb24uIEl0XHJcbiAgICAgICAgLy8gbWVhbnMgYSBcclxuICAgICAgICBpZih0ZW1wLmxlbmd0aCA9PT0gbmV3VHJlYXRtZW50cy5sZW5ndGgpIHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcy5wdXNoKHsgZGF0ZSwgc3R5bGlzdFdvcmtpbmdUaW1lczogdGVtcH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXM7XHJcblxyXG59IiwiaW1wb3J0IHsgZmluZFRpbWVTbG90cyB9IGZyb20gXCIuLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCAoKSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7ZmluZFRpbWVTbG90c30+VGVzdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiZmV0Y2hFdmVudHMiLCJnZXREYXRlcyIsImdldFN0eWxpc3RzIiwiZ2V0V29ya2luZ1RpbWVzIiwiZGVmYXVsdFRpbWVzQXJyYXkiLCJmaW5kVGltZVNsb3RzIiwibmV3VHJlYXRtZW50cyIsImNhdGVnb3J5IiwiY2hvb3NlblN0eWxpc3QiLCJsb2NhdGlvbiIsInRyZWF0bWVudER1cmF0aW9uIiwidHJlYXRtZW50UHJpY2UiLCJ0cmVhdG1lbnRUaXRsZSIsImRhdGVzQXJyYXkiLCJhbGxTdHlsaXN0cyIsImNvbnNvbGUiLCJsb2ciLCJjYWxlbmRhckV2ZW50cyIsInN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyIsInN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyIsImZvckVhY2giLCJ3b3JraW5nVGltZSIsInh4eCIsInN0eWxpc3RXb3JraW5nVGltZXMiLCJpdGVtIiwiYnVzeVRpbWVzIiwiZXZlbnQiLCJldmVudERhdGUiLCJzdGFydFRpbWUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwic3RhcnRpbmdUaW1lIiwibGVuZ3RoIiwic3RhcnRpbmdIb3VyIiwiTnVtYmVyIiwic3RhcnRpbmdNaW51dGUiLCJzdGF0dXMiLCJkYXRlIiwic3R5bGlzdCIsImV2ZW50TG9jYXRpb24iLCJrIiwiTWF0aCIsImNlaWwiLCJldmVudER1cmF0aW9uIiwiaW50ZXJ2YWwiLCJob3VyIiwiaG91ckluY3JlbWVudCIsImZsb29yIiwicHVzaCIsIm5ld1dvcmtpbmdUaW1lcyIsIndvcmtpbmdUaW1lcyIsImZpbHRlciIsInRpbWUiLCJpbmNsdWRlcyIsImZyZWVUaW1lcyIsInN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXMiLCJjb3VudE9mVGltZXNUb09tbWl0IiwicmVkdWNlIiwidG90YWwiLCJ0cmVhdG1lbnQiLCJxcXEiLCJpbmRleCIsImF2YWlsYWJsZVRpbWVzQnlEYXRlIiwiaSIsInRvdGFsVGltZUNvdW50IiwidGVtcCIsImoiLCJjb3VudCIsInkiLCJtaW51dGVzIiwidGltZXMiLCJheGlvcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImV2ZW50cyIsImVyciIsIm1zZyIsImRhdGVzIiwiRGF0ZSIsImdldFRpbWUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwibmV3RGF0ZSIsInN0eWxpc3RzIiwic3R5bGlzdEZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkYXlOYW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInAiLCJ3b3JrU2NoZWR1bGUiLCJzY2hlZHVsZSIsInN0YXJ0VGltZUluZGV4IiwiZW5kVGltZUluZGV4IiwiZW5kVGltZSIsInEiLCJUZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==
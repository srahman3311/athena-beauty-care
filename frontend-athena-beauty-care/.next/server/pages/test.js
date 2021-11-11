"use strict";
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./lib/find-time-slots-copy/fetchStylistsEvents.js":
/*!*********************************************************!*\
  !*** ./lib/find-time-slots-copy/fetchStylistsEvents.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchStylistsEvents": () => (/* binding */ fetchStylistsEvents)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Axios
 // Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.

const fetchStylistsEvents = async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/events");
    return response.data.events;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

/***/ }),

/***/ "./lib/find-time-slots-copy/findBusyTimes.js":
/*!***************************************************!*\
  !*** ./lib/find-time-slots-copy/findBusyTimes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findBusyTimes": () => (/* binding */ findBusyTimes)
/* harmony export */ });
//
const findBusyTimes = (eventDuration, startingMinute, startingHour) => {
  for (let i = 1; i < Math.ceil(eventDuration / 15); i++) {
    let interval = 15 * i + startingMinute;
    let hour = startingHour; // interval / 60 gives us the value which should be added to hour. For example - if interval is 
    // 75 then we must add 1 with hour 

    let hourIncrement = Math.floor(interval / 60); // Adding hour increment with hour

    hour += hourIncrement; // if hourIncrement is more than or equal to 1 then interval value must be re-calculated

    if (hourIncrement >= 1) {
      interval = interval - 60 * hourIncrement;
    } // if interval is 0 then add extra one 0 to keep the minute value in two digits


    if (interval === 0) interval += "0"; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

    if (hour < 10) return `0${hour}:${interval}`;
    return `${hour}:${interval}`;
  }
};

/***/ }),

/***/ "./lib/find-time-slots-copy/findTimeSlots.js":
/*!***************************************************!*\
  !*** ./lib/find-time-slots-copy/findTimeSlots.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTimeSlots": () => (/* binding */ findTimeSlots)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetchStylistsEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchStylistsEvents */ "./lib/find-time-slots-copy/fetchStylistsEvents.js");
/* harmony import */ var _findBusyTimes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findBusyTimes */ "./lib/find-time-slots-copy/findBusyTimes.js");
/* harmony import */ var _getDates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDates */ "./lib/find-time-slots-copy/getDates.js");
/* harmony import */ var _getEventDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getEventDetails */ "./lib/find-time-slots-copy/getEventDetails.js");
/* harmony import */ var _getStylists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getStylists */ "./lib/find-time-slots-copy/getStylists.js");
/* harmony import */ var _helper_functions_getStylistsAllWorkingTimes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper-functions/getStylistsAllWorkingTimes */ "./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js");
// Modules needed to fetch events







const defaultTime = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
const findTimeSlots = async () => {
  const newTreatments = [{
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
  const location = newTreatments[0].location;
  const datesArray = await (0,_getDates__WEBPACK_IMPORTED_MODULE_3__.getDates)();
  const allStylists = await (0,_getStylists__WEBPACK_IMPORTED_MODULE_5__.getStylists)(newTreatments); // Fetching calendar events of all stylists

  const calendarEvents = await (0,_fetchStylistsEvents__WEBPACK_IMPORTED_MODULE_1__.fetchStylistsEvents)();
  const stylistsByName = [];
  newTreatments.forEach(treatment => {
    stylistsByName.push(treatment.choosenStylist);
  }); // console.log(datesArray);
  // console.log(allStylists);

  console.log(calendarEvents); // calendarEvents.forEach(calendarEvent => {
  //     console.log(new Date(calendarEvent.startTime), new Date(calendarEvent.endTime));
  // });
  // Steps
  // 1. dateTimeArray contains the dates of 30 days from today. 

  const stylistsWorkingTimesOnAvailableDates = []; // For each date of the dateTimeArray loop through the each stylist's workSchdule to find day match.

  datesArray.forEach(date => {
    const newDate = new Date(date); // get the day name (example - Monday) from the date to check against each stylist's workSchedule's day Name

    const dayName = newDate.toLocaleDateString("en-US", {
      weekday: "long"
    });
    const temp = []; // Loot through all stylists to be able to loop through their workSchedule 

    allStylists.forEach(stylist => {
      // Loop through the each stylist's workSchedule and see if they are all available on dayName
      stylist.workSchedule.forEach(schedule => {
        if (schedule.location === location && schedule.day === dayName) {
          const workingTimes = (0,_helper_functions_getStylistsAllWorkingTimes__WEBPACK_IMPORTED_MODULE_6__.getStylistsAllWorkingTimes)(schedule.startTime, schedule.endTime);
          temp.push({
            stylist: stylist.firstName + " " + stylist.lastName,
            workingTimes
          });
        }
      });
    });
    if (temp.length === newTreatments.length) stylistsWorkingTimesOnAvailableDates.push({
      date,
      stylistWorkingTimes: temp
    });
  });
  return console.log(stylistsWorkingTimesOnAvailableDates);
  filteredDates.forEach(newDateTime => {
    stylistsByName.forEach(stylistName => {
      calendarEvents.forEach(event => {
        const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));

        if (stylistName === event.stylist && newDateTime.date === eventDate && location === event.eventLocation) {
          console.log(event);
        }
      });
    });
  });
  return; // const stylistsWithBusyTimes = [];
  // filteredDates.forEach(dateTime => {
  //     calendarEvents.forEach(event => {
  //         const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));
  //         if(dateTime.date !== eventDate) return;
  //         if(event.eventLocation !== location) return;
  //         if(!stylistsByName.includes(event.stylist)) return;
  //         const eventStartTime = event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length);
  //         const eventEndTime = event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length);
  //     });
  // });

  const stylistsWithFreeTimes = [];
  calendarEvents.forEach((calendarEvent, calendarEventIndex) => {
    if (calendarEvent.stylist !== "No preference") {
      const newDateTimeArray = [];
      dateTimeArray.forEach((dateTime, dateTimeIndex) => {
        let busyTimes = [];
        let freeTimes = [];

        for (let i = 0; i < calendarEvent.events.length; i++) {
          const event = calendarEvent.events[i];
          let {
            eventDate,
            startTime,
            startingHour,
            startingMinute,
            eventDuration
          } = (0,_getEventDetails__WEBPACK_IMPORTED_MODULE_4__.getEventDetails)(event);

          if (dateTime.date === eventDate) {
            busyTimes.push(startTime);

            for (let j = 1; j < Math.ceil(eventDuration / 15); j++) {
              let interval = 15 * j + startingMinute;
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

        if (!busyTimes.length) {
          dateTime.defaultTime.forEach(time => {
            freeTimes.push(time);
          });
        } else {
          dateTime.defaultTime.forEach(time => {
            if (!busyTimes.includes(time)) {
              freeTimes.push(time);
            }
          });
        }

        newDateTimeArray.push({
          date: dateTime.date,
          freeTimes
        });
      });
      stylistsWithFreeTimes.push({
        event: calendarEvent.treatmentTitle,
        stylist: calendarEvent.stylist,
        email: calendarEvent.email,
        duration: calendarEvent.duration,
        freeTimesArray: newDateTimeArray
      });
    } else {
      const newArray = [];

      for (let i = 0; i < calendarEvent.events.length; i++) {
        const newDateTimeArray = [];
        dateTimeArray.forEach(async (dateTime, dateTimeIndex) => {
          let busyTimes = [];
          let freeTimes = [];

          for (let j = 0; j < calendarEvent.events[i].length; j++) {
            const event = calendarEvent.events[i][j];
            let {
              eventDate,
              startTime,
              startingHour,
              startingMinute,
              eventDuration
            } = await (0,_getEventDetails__WEBPACK_IMPORTED_MODULE_4__.getEventDetails)(event);

            if (dateTime.date === eventDate) {
              busyTimes.push(startTime);

              for (let k = 1; k < Math.ceil(eventDuration / 15); k++) {
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

          if (!busyTimes.length) {
            dateTime.defaultTime.forEach(time => {
              freeTimes.push(time);
            });
          } else {
            dateTime.defaultTime.forEach(time => {
              if (!busyTimes.includes(time)) {
                freeTimes.push(time);
              }
            });
          }

          newDateTimeArray.push({
            date: dateTime.date,
            freeTimes
          });
        });
        newArray.push({
          email: calendarEvent.stylists[i],
          freeTimesArray: newDateTimeArray
        });
      }

      stylistsWithFreeTimes.push({
        event: calendarEvent.treatmentTitle,
        stylist: calendarEvent.stylist,
        duration: calendarEvent.duration,
        newArray: newArray
      });
    }
  });
  console.log(stylistsWithFreeTimes);
  let abcd = 0;
  treatments.forEach(item => {
    if (item.stylist !== "No preference") abcd += Math.ceil(item.duration / 15);
  }); // Starting times from which all stylists are available one after the other

  const availableStartingTimesWithDates = [];
  dateTimeArray.forEach((dateTime, index) => {
    // This array will be populated with all the starting free times of each date starting from today up to 30 days
    const availableTimesByDate = [];

    for (let i = 0; i < dateTime.defaultTime.length - abcd; i++) {
      // totalTimeCount value will be updated on each item of stylistsWithFreeTimes array in the following loop. 
      // For example, if stylistsWithFreeTimes has three items (say first item's duration is 45, second is 55 
      // and third is 25) then at the end of the loop totalTimeCount will be (Math.ceil(45 / 15) +  Math.ceil(55 / 15)
      // + Math.ceil(25 / 15)) 3 + 4 + 2 = 9
      let totalTimeCount = 0; // This is a temporary array which will be populated with free times of each stylist by looping through the 
      // stylistsWithFreeTimes array

      const temp = [];

      for (let j = 0; j < stylistsWithFreeTimes.length; j++) {
        const item = stylistsWithFreeTimes[j];

        if (item.stylist !== "No preference") {
          // Count will determine how many free times should be looked for. For example if count is 3 and starting
          // time is 09:30 then 09:30, 09:45 & 10:00 should be looked for
          const count = Math.ceil(item.duration / 15); // As said above totalTimeCount must be updated on each item of stylistsWithFreeTimes array

          totalTimeCount += count; // This is very crucial. On each item of stylistsWithFreeTimes array this startingTime will be updated,
          // for example - say we are at 09:00 on first item of stylistsWithFreeTimes array, count is 3
          // and stylist of this item is available on all three times 09:00, 09:15 & 9:30. So startingTime must be 
          // from 09:45 for the 2nd item of stylistsWithFreeTimes array. Say for the second item count is 4 and stylist
          // is available on all four times 09:45, 10:00, 10:15 & 10:30, so startingTime for the third item of the 
          //  stylistsWithFreeTimes array 10:45. 

          let startingTime = ""; // if temp length is zero then we are at the first item of stylistsWithFreeTimes array

          if (!temp.length) {
            startingTime = dateTime.defaultTime[i];
          } else {
            // For each consecutive item after the first one of stylistsWithFreeTimes array startingTime will be 
            // the next time after the time of last item of temp array. 
            const y = dateTime.defaultTime.indexOf(temp[temp.length - 1]);
            startingTime = dateTime.defaultTime[y + 1];
          } //


          let hour = Number(startingTime.substring(0, 2)); // 9

          let minutes = Number(startingTime.substring(3, 5)); // 00

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
            }

            const freeTimes = item.freeTimesArray[index].freeTimes;

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
      }

      if (totalTimeCount === temp.length) availableTimesByDate.push(dateTime.defaultTime[i]);
    }

    availableStartingTimesWithDates.push({
      date: dateTime.date,
      times: availableTimesByDate
    });
  });
  console.log(availableStartingTimesWithDates);
};

/***/ }),

/***/ "./lib/find-time-slots-copy/getDates.js":
/*!**********************************************!*\
  !*** ./lib/find-time-slots-copy/getDates.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDates": () => (/* binding */ getDates)
/* harmony export */ });
//
const getDates = () => {
  const dates = []; // populating dateTimeArray with 30 dates from today

  for (let i = 0; i < 30; i++) {
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

/***/ "./lib/find-time-slots-copy/getEventDetails.js":
/*!*****************************************************!*\
  !*** ./lib/find-time-slots-copy/getEventDetails.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEventDetails": () => (/* binding */ getEventDetails)
/* harmony export */ });
//
const getEventDetails = event => {
  const eventDate = event.start.dateTime.substring(0, event.start.dateTime.indexOf("T"));
  const startIndexOfT = event.start.dateTime.indexOf("T");
  const endIndexOfT = event.end.dateTime.indexOf("T");
  const startTime = event.start.dateTime.substring(startIndexOfT + 1, startIndexOfT + 6);
  const endTime = event.end.dateTime.substring(endIndexOfT + 1, endIndexOfT + 6);
  const startingHour = Number(startTime.substring(0, 2));
  const endingHour = Number(endTime.substring(0, 2));
  const startingMinute = Number(startTime.substring(3, 5));
  const endingMinute = Number(endTime.substring(3, 5));
  const startTimeInMinute = startingHour * 60 + startingMinute;
  const endTimeInMinute = endingHour * 60 + endingMinute;
  ;
  const eventDuration = endTimeInMinute - startTimeInMinute;
  return {
    eventDate,
    startTime,
    endTime,
    startingHour,
    endingHour,
    startingMinute,
    endingMinute,
    startTimeInMinute,
    endTimeInMinute,
    eventDuration
  };
};

/***/ }),

/***/ "./lib/find-time-slots-copy/getStylists.js":
/*!*************************************************!*\
  !*** ./lib/find-time-slots-copy/getStylists.js ***!
  \*************************************************/
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
    response.data.stylists.forEach(stylist => {
      newTreatments.forEach(treatment => {
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

/***/ "./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js":
/*!*********************************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStylistsAllWorkingTimes": () => (/* binding */ getStylistsAllWorkingTimes)
/* harmony export */ });
const times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
const getStylistsAllWorkingTimes = (startTime, endTime) => {
  const startTimeIndex = times.indexOf(startTime);
  const endTimeIndex = times.indexOf(endTime);
  const stylistWorkingTimes = [];

  for (let i = startTimeIndex; i <= endTimeIndex; i++) {
    stylistWorkingTimes.push(times[i]);
  }

  return stylistWorkingTimes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFDSTtBQUFRLGFBQU8sRUFBSTVGLGtGQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOzs7Ozs7Ozs7O0FDWEQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9mZXRjaFN0eWxpc3RzRXZlbnRzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9maW5kQnVzeVRpbWVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9maW5kVGltZVNsb3RzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZ2V0RXZlbnREZXRhaWxzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9nZXRTdHlsaXN0cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9wYWdlcy90ZXN0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXhpb3NcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuLy8gZm9yIGxvb3AgaXMgdGhlIHdheSB0byBnbyBmb3IgZmV0Y2hpbmcgZGF0YSB0aHJvdWdoIGFwaSBjYWxscy4gZm9yRWFjaCBzdWNrcy5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3R5bGlzdHNFdmVudHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50c1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZXZlbnRzO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCIvL1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRCdXN5VGltZXMgPSAoZXZlbnREdXJhdGlvbiwgc3RhcnRpbmdNaW51dGUsIHN0YXJ0aW5nSG91cikgPT4ge1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBNYXRoLmNlaWwoZXZlbnREdXJhdGlvbiAvIDE1KTsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9ICgxNSAqIGkpICsgc3RhcnRpbmdNaW51dGU7XHJcbiAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcblxyXG4gICAgICAgIC8vIGludGVydmFsIC8gNjAgZ2l2ZXMgdXMgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZSBhZGRlZCB0byBob3VyLiBGb3IgZXhhbXBsZSAtIGlmIGludGVydmFsIGlzIFxyXG4gICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG5cclxuICAgICAgICAvLyBBZGRpbmcgaG91ciBpbmNyZW1lbnQgd2l0aCBob3VyXHJcbiAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIGludGVydmFsIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICBpZihob3VyIDwgMTApIHJldHVybiBgMCR7aG91cn06JHtpbnRlcnZhbH1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBgJHtob3VyfToke2ludGVydmFsfWA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLyBNb2R1bGVzIG5lZWRlZCB0byBmZXRjaCBldmVudHNcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFN0eWxpc3RzRXZlbnRzIH0gZnJvbSBcIi4vZmV0Y2hTdHlsaXN0c0V2ZW50c1wiO1xyXG5pbXBvcnQgeyBmaW5kQnVzeVRpbWVzIH0gZnJvbSBcIi4vZmluZEJ1c3lUaW1lc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuL2dldERhdGVzXCI7XHJcbmltcG9ydCB7IGdldEV2ZW50RGV0YWlscyB9IGZyb20gXCIuL2dldEV2ZW50RGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0cyB9IGZyb20gXCIuL2dldFN0eWxpc3RzXCI7XHJcbmltcG9ydCB7IGdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFRpbWUgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRUaW1lU2xvdHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJCcm93c1wiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJOaWNvbGUgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gR3Vsc2hhblwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogMzUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiAyMyxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiU2hhcGluZyBicm93c1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBsYXNtYSBJb25cIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQW5kcmVhIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEd1bHNoYW5cIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDcwLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlBsYXNtYSBJb24gd2l0aCBsaWdodCBmYWNpYWxzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUGVybWFuZW50IE1ha2V1cFwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJTb3VkaSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBHdWxzaGFuXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA4NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQ1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJQZXJtYW5lbnQgTWFrZXVwIHdpdGggbGlnaHQgbWFzc2FnZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXdUcmVhdG1lbnRzWzBdLmxvY2F0aW9uO1xyXG4gICAgY29uc3QgZGF0ZXNBcnJheSA9IGF3YWl0IGdldERhdGVzKCk7XHJcbiAgICBjb25zdCBhbGxTdHlsaXN0cyA9IGF3YWl0IGdldFN0eWxpc3RzKG5ld1RyZWF0bWVudHMpO1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4gICAgY29uc3QgY2FsZW5kYXJFdmVudHMgPSBhd2FpdCBmZXRjaFN0eWxpc3RzRXZlbnRzKCk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNCeU5hbWUgPSBbXTtcclxuXHJcbiAgICBuZXdUcmVhdG1lbnRzLmZvckVhY2godHJlYXRtZW50ID0+IHtcclxuICAgICAgICBzdHlsaXN0c0J5TmFtZS5wdXNoKHRyZWF0bWVudC5jaG9vc2VuU3R5bGlzdCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZXNBcnJheSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxTdHlsaXN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhjYWxlbmRhckV2ZW50cyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGNhbGVuZGFyRXZlbnQgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKGNhbGVuZGFyRXZlbnQuc3RhcnRUaW1lKSwgbmV3IERhdGUoY2FsZW5kYXJFdmVudC5lbmRUaW1lKSk7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIFN0ZXBzXHJcblxyXG4gICAgLy8gMS4gZGF0ZVRpbWVBcnJheSBjb250YWlucyB0aGUgZGF0ZXMgb2YgMzAgZGF5cyBmcm9tIHRvZGF5LiBcclxuXHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcbiAgICAvLyBGb3IgZWFjaCBkYXRlIG9mIHRoZSBkYXRlVGltZUFycmF5IGxvb3AgdGhyb3VnaCB0aGUgZWFjaCBzdHlsaXN0J3Mgd29ya1NjaGR1bGUgdG8gZmluZCBkYXkgbWF0Y2guXHJcbiAgICBkYXRlc0FycmF5LmZvckVhY2goZGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBkYXkgbmFtZSAoZXhhbXBsZSAtIE1vbmRheSkgZnJvbSB0aGUgZGF0ZSB0byBjaGVjayBhZ2FpbnN0IGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hlZHVsZSdzIGRheSBOYW1lXHJcbiAgICAgICAgY29uc3QgZGF5TmFtZSA9IG5ld0RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTG9vdCB0aHJvdWdoIGFsbCBzdHlsaXN0cyB0byBiZSBhYmxlIHRvIGxvb3AgdGhyb3VnaCB0aGVpciB3b3JrU2NoZWR1bGUgXHJcbiAgICAgICAgYWxsU3R5bGlzdHMuZm9yRWFjaChzdHlsaXN0ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgZWFjaCBzdHlsaXN0J3Mgd29ya1NjaGVkdWxlIGFuZCBzZWUgaWYgdGhleSBhcmUgYWxsIGF2YWlsYWJsZSBvbiBkYXlOYW1lXHJcbiAgICAgICAgICAgIHN0eWxpc3Qud29ya1NjaGVkdWxlLmZvckVhY2goc2NoZWR1bGUgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNjaGVkdWxlLmxvY2F0aW9uID09PSBsb2NhdGlvbiAmJiBzY2hlZHVsZS5kYXkgPT09IGRheU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ya2luZ1RpbWVzID0gZ2V0U3R5bGlzdHNBbGxXb3JraW5nVGltZXMoc2NoZWR1bGUuc3RhcnRUaW1lLCBzY2hlZHVsZS5lbmRUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKHsgc3R5bGlzdDogc3R5bGlzdC5maXJzdE5hbWUgKyBcIiBcIiArIHN0eWxpc3QubGFzdE5hbWUsIHdvcmtpbmdUaW1lc30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBpZih0ZW1wLmxlbmd0aCA9PT0gbmV3VHJlYXRtZW50cy5sZW5ndGgpIHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcy5wdXNoKHsgZGF0ZSwgc3R5bGlzdFdvcmtpbmdUaW1lczogdGVtcH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb25zb2xlLmxvZyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG5cclxuXHJcblxyXG4gICAgZmlsdGVyZWREYXRlcy5mb3JFYWNoKG5ld0RhdGVUaW1lID0+IHtcclxuXHJcbiAgICAgICAgc3R5bGlzdHNCeU5hbWUuZm9yRWFjaChzdHlsaXN0TmFtZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdHlsaXN0TmFtZSA9PT0gZXZlbnQuc3R5bGlzdCAmJiBuZXdEYXRlVGltZS5kYXRlID09PSBldmVudERhdGUgJiYgbG9jYXRpb24gPT09IGV2ZW50LmV2ZW50TG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNXaXRoQnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgLy8gZmlsdGVyZWREYXRlcy5mb3JFYWNoKGRhdGVUaW1lID0+IHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgY2FsZW5kYXJFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCBldmVudERhdGUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSk7XHJcblxyXG4gICAgLy8gICAgICAgICBpZihkYXRlVGltZS5kYXRlICE9PSBldmVudERhdGUpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKGV2ZW50LmV2ZW50TG9jYXRpb24gIT09IGxvY2F0aW9uKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgICAgICBpZighc3R5bGlzdHNCeU5hbWUuaW5jbHVkZXMoZXZlbnQuc3R5bGlzdCkpIHJldHVybjtcclxuXHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCBldmVudFN0YXJ0VGltZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuc3RhcnRUaW1lLmxlbmd0aCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGV2ZW50RW5kVGltZSA9IGV2ZW50LmVuZFRpbWUuc3Vic3RyaW5nKGV2ZW50LmVuZFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5lbmRUaW1lLmxlbmd0aCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHN0eWxpc3RzV2l0aEZyZWVUaW1lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKChjYWxlbmRhckV2ZW50LCBjYWxlbmRhckV2ZW50SW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoY2FsZW5kYXJFdmVudC5zdHlsaXN0ICE9PSBcIk5vIHByZWZlcmVuY2VcIikge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0ZVRpbWVBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0ZVRpbWVBcnJheS5mb3JFYWNoKChkYXRlVGltZSwgZGF0ZVRpbWVJbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBidXN5VGltZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBmcmVlVGltZXMgPSBbXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyRXZlbnQuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY2FsZW5kYXJFdmVudC5ldmVudHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IGV2ZW50RGF0ZSwgc3RhcnRUaW1lLCBzdGFydGluZ0hvdXIsIHN0YXJ0aW5nTWludXRlLCBldmVudER1cmF0aW9uIH0gPSBnZXRFdmVudERldGFpbHMoZXZlbnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0ZVRpbWUuZGF0ZSA9PT0gZXZlbnREYXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChzdGFydFRpbWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMTsgaiA8IE1hdGguY2VpbChldmVudER1cmF0aW9uIC8gMTUpOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSAoMTUgKiBqKSArIHN0YXJ0aW5nTWludXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJ2YWwgLyA2MCBnaXZlcyB1cyB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIGhvdXIuIEZvciBleGFtcGxlIC0gaWYgaW50ZXJ2YWwgaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3NSB0aGVuIHdlIG11c3QgYWRkIDEgd2l0aCBob3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBob3VyIGluY3JlbWVudCB3aXRoIGhvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsIC0gKDYwICogaG91ckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW50ZXJ2YWwgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXJ2YWwgPT09IDApIGludGVydmFsICs9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZighYnVzeVRpbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lLmRlZmF1bHRUaW1lLmZvckVhY2godGltZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lcy5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lLmRlZmF1bHRUaW1lLmZvckVhY2godGltZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighYnVzeVRpbWVzLmluY2x1ZGVzKHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmVlVGltZXMucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld0RhdGVUaW1lQXJyYXkucHVzaCh7ZGF0ZTogZGF0ZVRpbWUuZGF0ZSwgZnJlZVRpbWVzfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGNhbGVuZGFyRXZlbnQudHJlYXRtZW50VGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdHlsaXN0OiBjYWxlbmRhckV2ZW50LnN0eWxpc3QsIFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGNhbGVuZGFyRXZlbnQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogY2FsZW5kYXJFdmVudC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGZyZWVUaW1lc0FycmF5OiBuZXdEYXRlVGltZUFycmF5XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudC5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRlVGltZUFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRlVGltZUFycmF5LmZvckVhY2goYXN5bmMgKGRhdGVUaW1lLCBkYXRlVGltZUluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXN5VGltZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnJlZVRpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjYWxlbmRhckV2ZW50LmV2ZW50c1tpXS5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjYWxlbmRhckV2ZW50LmV2ZW50c1tpXVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IGV2ZW50RGF0ZSwgc3RhcnRUaW1lLCBzdGFydGluZ0hvdXIsIHN0YXJ0aW5nTWludXRlLCBldmVudER1cmF0aW9uIH0gPSBhd2FpdCBnZXRFdmVudERldGFpbHMoZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0ZVRpbWUuZGF0ZSA9PT0gZXZlbnREYXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goc3RhcnRUaW1lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMTsgayA8IE1hdGguY2VpbChldmVudER1cmF0aW9uIC8gMTUpOyBrKyspIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9ICgxNSAqIGspICsgc3RhcnRpbmdNaW51dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbCAvIDYwIGdpdmVzIHVzIHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmUgYWRkZWQgdG8gaG91ci4gRm9yIGV4YW1wbGUgLSBpZiBpbnRlcnZhbCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3NSB0aGVuIHdlIG11c3QgYWRkIDEgd2l0aCBob3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob3VySW5jcmVtZW50ID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIDYwKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBob3VyIGluY3JlbWVudCB3aXRoIGhvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IGhvdXJJbmNyZW1lbnQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbnRlcnZhbCBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXJ2YWwgPT09IDApIGludGVydmFsICs9IFwiMFwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAwJHtob3VyfToke2ludGVydmFsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWJ1c3lUaW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUuZGVmYXVsdFRpbWUuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVUaW1lcy5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lLmRlZmF1bHRUaW1lLmZvckVhY2godGltZSA9PiB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFidXN5VGltZXMuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmVlVGltZXMucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0ZVRpbWVBcnJheS5wdXNoKHtkYXRlOiBkYXRlVGltZS5kYXRlLCBmcmVlVGltZXN9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogY2FsZW5kYXJFdmVudC5zdHlsaXN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICBmcmVlVGltZXNBcnJheTogbmV3RGF0ZVRpbWVBcnJheVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdHlsaXN0c1dpdGhGcmVlVGltZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogY2FsZW5kYXJFdmVudC50cmVhdG1lbnRUaXRsZSxcclxuICAgICAgICAgICAgICAgIHN0eWxpc3Q6IGNhbGVuZGFyRXZlbnQuc3R5bGlzdCwgXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogY2FsZW5kYXJFdmVudC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIG5ld0FycmF5OiBuZXdBcnJheVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzV2l0aEZyZWVUaW1lcyk7XHJcblxyXG5cclxuICAgIGxldCBhYmNkID0gMDtcclxuICAgIHRyZWF0bWVudHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgaWYoaXRlbS5zdHlsaXN0ICE9PSBcIk5vIHByZWZlcmVuY2VcIikgYWJjZCArPSAoTWF0aC5jZWlsKGl0ZW0uZHVyYXRpb24gLyAxNSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gU3RhcnRpbmcgdGltZXMgZnJvbSB3aGljaCBhbGwgc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBvbmUgYWZ0ZXIgdGhlIG90aGVyXHJcbiAgICBjb25zdCBhdmFpbGFibGVTdGFydGluZ1RpbWVzV2l0aERhdGVzID0gW107XHJcblxyXG4gICAgZGF0ZVRpbWVBcnJheS5mb3JFYWNoKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBhcnJheSB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGFsbCB0aGUgc3RhcnRpbmcgZnJlZSB0aW1lcyBvZiBlYWNoIGRhdGUgc3RhcnRpbmcgZnJvbSB0b2RheSB1cCB0byAzMCBkYXlzXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZXNCeURhdGUgPSBbXTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGVUaW1lLmRlZmF1bHRUaW1lLmxlbmd0aCAtIGFiY2Q7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy8gdG90YWxUaW1lQ291bnQgdmFsdWUgd2lsbCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgaW4gdGhlIGZvbGxvd2luZyBsb29wLiBcclxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBoYXMgdGhyZWUgaXRlbXMgKHNheSBmaXJzdCBpdGVtJ3MgZHVyYXRpb24gaXMgNDUsIHNlY29uZCBpcyA1NSBcclxuICAgICAgICAgICAgLy8gYW5kIHRoaXJkIGlzIDI1KSB0aGVuIGF0IHRoZSBlbmQgb2YgdGhlIGxvb3AgdG90YWxUaW1lQ291bnQgd2lsbCBiZSAoTWF0aC5jZWlsKDQ1IC8gMTUpICsgIE1hdGguY2VpbCg1NSAvIDE1KVxyXG4gICAgICAgICAgICAvLyArIE1hdGguY2VpbCgyNSAvIDE1KSkgMyArIDQgKyAyID0gOVxyXG4gICAgICAgICAgICBsZXQgdG90YWxUaW1lQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRlbXBvcmFyeSBhcnJheSB3aGljaCB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGZyZWUgdGltZXMgb2YgZWFjaCBzdHlsaXN0IGJ5IGxvb3BpbmcgdGhyb3VnaCB0aGUgXHJcbiAgICAgICAgICAgIC8vIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc3R5bGlzdHNXaXRoRnJlZVRpbWVzLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN0eWxpc3RzV2l0aEZyZWVUaW1lc1tqXTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0uc3R5bGlzdCAhPT0gXCJObyBwcmVmZXJlbmNlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ291bnQgd2lsbCBkZXRlcm1pbmUgaG93IG1hbnkgZnJlZSB0aW1lcyBzaG91bGQgYmUgbG9va2VkIGZvci4gRm9yIGV4YW1wbGUgaWYgY291bnQgaXMgMyBhbmQgc3RhcnRpbmdcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aW1lIGlzIDA5OjMwIHRoZW4gMDk6MzAsIDA5OjQ1ICYgMTA6MDAgc2hvdWxkIGJlIGxvb2tlZCBmb3JcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguY2VpbChpdGVtLmR1cmF0aW9uIC8gMTUpOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBBcyBzYWlkIGFib3ZlIHRvdGFsVGltZUNvdW50IG11c3QgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxUaW1lQ291bnQgKz0gY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdmVyeSBjcnVjaWFsLiBPbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IHRoaXMgc3RhcnRpbmdUaW1lIHdpbGwgYmUgdXBkYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAtIHNheSB3ZSBhcmUgYXQgMDk6MDAgb24gZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXksIGNvdW50IGlzIDNcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgc3R5bGlzdCBvZiB0aGlzIGl0ZW0gaXMgYXZhaWxhYmxlIG9uIGFsbCB0aHJlZSB0aW1lcyAwOTowMCwgMDk6MTUgJiA5OjMwLiBTbyBzdGFydGluZ1RpbWUgbXVzdCBiZSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIDA5OjQ1IGZvciB0aGUgMm5kIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5LiBTYXkgZm9yIHRoZSBzZWNvbmQgaXRlbSBjb3VudCBpcyA0IGFuZCBzdHlsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlIG9uIGFsbCBmb3VyIHRpbWVzIDA5OjQ1LCAxMDowMCwgMTA6MTUgJiAxMDozMCwgc28gc3RhcnRpbmdUaW1lIGZvciB0aGUgdGhpcmQgaXRlbSBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSAxMDo0NS4gXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0aW5nVGltZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0ZW1wIGxlbmd0aCBpcyB6ZXJvIHRoZW4gd2UgYXJlIGF0IHRoZSBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0ZW1wLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkYXRlVGltZS5kZWZhdWx0VGltZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWFjaCBjb25zZWN1dGl2ZSBpdGVtIGFmdGVyIHRoZSBmaXJzdCBvbmUgb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IHN0YXJ0aW5nVGltZSB3aWxsIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCB0aW1lIGFmdGVyIHRoZSB0aW1lIG9mIGxhc3QgaXRlbSBvZiB0ZW1wIGFycmF5LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRhdGVUaW1lLmRlZmF1bHRUaW1lLmluZGV4T2YodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGF0ZVRpbWUuZGVmYXVsdFRpbWVbeSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDAsIDIpKTsgLy8gOVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW51dGVzID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMywgNSkpOyAvLyAwMFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDE7IGsgPD0gY291bnQ7IGsrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgbWludXRlcyBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT09IDApIG1pbnV0ZXMgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgMCR7aG91cn06JHttaW51dGVzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzQXJyYXlbaW5kZXhdLmZyZWVUaW1lcztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZnJlZVRpbWVzLmluY2x1ZGVzKHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTnVtYmVyKG1pbnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzICs9IDE1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNheSBzdGFydGluZ1RpbWUgaXMgMDk6MDAgJiBjb3VudCBpcyAzLiBTbyB0b3RhbFRpbWVDb3VudCBpcyBhbHNvIDMuIEFmdGVyIGZpcnN0IGl0ZXJhdGlvbiB0ZW1wLmxlbmd0aCBcclxuICAgICAgICAgICAgICAgICAgICAvLyBtdXN0IGJlIGVxdWFscyB0byAzIG90aGVyd2lzZSBpdCBtZWFucyB0aGF0IHN0eWxpc3QgaXMgbm90IGF2YWlsYWJsZSBhdCBhbGwgdGhyZWUgdGltZXMgKDA5OjAwLiAwOToxNSAmIDA5OjMwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHN1Y2ggY2FzZSBmdXJ0aGVyIGl0ZXJhdGlvbiBpcyBub3QgbmVjZXNzYXJ5LiBcclxuICAgICAgICAgICAgICAgICAgICBpZih0ZW1wLmxlbmd0aCA8IHRvdGFsVGltZUNvdW50KSBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZih0b3RhbFRpbWVDb3VudCA9PT0gdGVtcC5sZW5ndGgpIGF2YWlsYWJsZVRpbWVzQnlEYXRlLnB1c2goZGF0ZVRpbWUuZGVmYXVsdFRpbWVbaV0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF2YWlsYWJsZVN0YXJ0aW5nVGltZXNXaXRoRGF0ZXMucHVzaCh7ZGF0ZTogZGF0ZVRpbWUuZGF0ZSwgdGltZXM6IGF2YWlsYWJsZVRpbWVzQnlEYXRlfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGF2YWlsYWJsZVN0YXJ0aW5nVGltZXNXaXRoRGF0ZXMpO1xyXG4gICAgXHJcblxyXG4gICBcclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0gIFxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIiwiLy9cclxuZXhwb3J0IGNvbnN0IGdldERhdGVzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGVzID0gW107XHJcblxyXG5cclxuICAgIC8vIHBvcHVsYXRpbmcgZGF0ZVRpbWVBcnJheSB3aXRoIDMwIGRhdGVzIGZyb20gdG9kYXlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoODY0MDAwMDAgKiBpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgaWYgKGRheSA8IDEwKSBkYXkgPSBgMCR7ZGF5fWA7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgICAgICBkYXRlcy5wdXNoKG5ld0RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZXM7XHJcblxyXG59IiwiLy9cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50RGV0YWlscyA9IGV2ZW50ID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgZXZlbnREYXRlID0gZXZlbnQuc3RhcnQuZGF0ZVRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0LmRhdGVUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEluZGV4T2ZUID0gZXZlbnQuc3RhcnQuZGF0ZVRpbWUuaW5kZXhPZihcIlRcIik7XHJcbiAgICBjb25zdCBlbmRJbmRleE9mVCA9IGV2ZW50LmVuZC5kYXRlVGltZS5pbmRleE9mKFwiVFwiKTtcclxuXHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBldmVudC5zdGFydC5kYXRlVGltZS5zdWJzdHJpbmcoc3RhcnRJbmRleE9mVCArIDEsIHN0YXJ0SW5kZXhPZlQgKyA2KTtcclxuICAgIGNvbnN0IGVuZFRpbWUgPSBldmVudC5lbmQuZGF0ZVRpbWUuc3Vic3RyaW5nKGVuZEluZGV4T2ZUICsgMSwgZW5kSW5kZXhPZlQgKyA2KTtcclxuXHJcbiAgICBjb25zdCBzdGFydGluZ0hvdXIgPSBOdW1iZXIoc3RhcnRUaW1lLnN1YnN0cmluZygwLCAyKSk7XHJcbiAgICBjb25zdCBlbmRpbmdIb3VyID0gTnVtYmVyKGVuZFRpbWUuc3Vic3RyaW5nKDAsIDIpKTtcclxuXHJcbiAgICBjb25zdCBzdGFydGluZ01pbnV0ZSA9IE51bWJlcihzdGFydFRpbWUuc3Vic3RyaW5nKDMsIDUpKTtcclxuICAgIGNvbnN0IGVuZGluZ01pbnV0ZSA9IE51bWJlcihlbmRUaW1lLnN1YnN0cmluZygzLCA1KSk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRUaW1lSW5NaW51dGUgPSBzdGFydGluZ0hvdXIgKiA2MCArIHN0YXJ0aW5nTWludXRlO1xyXG4gICAgY29uc3QgZW5kVGltZUluTWludXRlID0gZW5kaW5nSG91ciAqIDYwICsgZW5kaW5nTWludXRlOztcclxuXHJcbiAgICBjb25zdCBldmVudER1cmF0aW9uID0gZW5kVGltZUluTWludXRlIC0gc3RhcnRUaW1lSW5NaW51dGU7IFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXZlbnREYXRlLFxyXG4gICAgICAgIHN0YXJ0VGltZSwgXHJcbiAgICAgICAgZW5kVGltZSwgXHJcbiAgICAgICAgc3RhcnRpbmdIb3VyLCBcclxuICAgICAgICBlbmRpbmdIb3VyLCBcclxuICAgICAgICBzdGFydGluZ01pbnV0ZSwgXHJcbiAgICAgICAgZW5kaW5nTWludXRlLCBcclxuICAgICAgICBzdGFydFRpbWVJbk1pbnV0ZSwgXHJcbiAgICAgICAgZW5kVGltZUluTWludXRlLCBcclxuICAgICAgICBldmVudER1cmF0aW9uXHJcbiAgICB9XHJcbn0iLCIvLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4vLyBmb3IgbG9vcCBpcyB0aGUgd2F5IHRvIGdvIGZvciBmZXRjaGluZyBkYXRhIHRocm91Z2ggYXBpIGNhbGxzLiBmb3JFYWNoIHN1Y2tzLlxyXG5leHBvcnQgY29uc3QgZ2V0U3R5bGlzdHMgPSBhc3luYyAobmV3VHJlYXRtZW50cykgPT4ge1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0c1wiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdHMgPSBbXTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5zdHlsaXN0cy5mb3JFYWNoKHN0eWxpc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgbmV3VHJlYXRtZW50cy5mb3JFYWNoKHRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGlzdEZ1bGxOYW1lID0gc3R5bGlzdC5maXJzdE5hbWUgKyBcIiBcIiArIHN0eWxpc3QubGFzdE5hbWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmVhdG1lbnQuY2hvb3NlblN0eWxpc3QgPT09IHN0eWxpc3RGdWxsTmFtZSkgc3R5bGlzdHMucHVzaChzdHlsaXN0KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsaXN0cztcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiY29uc3QgdGltZXMgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lcyA9IChzdGFydFRpbWUsIGVuZFRpbWUpID0+IHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHN0YXJ0VGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihzdGFydFRpbWUpO1xyXG4gICAgY29uc3QgZW5kVGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihlbmRUaW1lKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdFdvcmtpbmdUaW1lcyA9IFtdO1xyXG5cclxuXHJcbiAgICBmb3IobGV0IGkgPSBzdGFydFRpbWVJbmRleDsgaSA8PSBlbmRUaW1lSW5kZXg7IGkrKykge1xyXG5cclxuICAgICAgICBzdHlsaXN0V29ya2luZ1RpbWVzLnB1c2godGltZXNbaV0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHN0eWxpc3RXb3JraW5nVGltZXM7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGZpbmRUaW1lU2xvdHMgfSBmcm9tIFwiLi4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2ZpbmRUaW1lU2xvdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QgKCkge1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2ZpbmRUaW1lU2xvdHN9PlRlc3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hTdHlsaXN0c0V2ZW50cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImV2ZW50cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJmaW5kQnVzeVRpbWVzIiwiZXZlbnREdXJhdGlvbiIsInN0YXJ0aW5nTWludXRlIiwic3RhcnRpbmdIb3VyIiwiaSIsIk1hdGgiLCJjZWlsIiwiaW50ZXJ2YWwiLCJob3VyIiwiaG91ckluY3JlbWVudCIsImZsb29yIiwiZ2V0RGF0ZXMiLCJnZXRFdmVudERldGFpbHMiLCJnZXRTdHlsaXN0cyIsImdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzIiwiZGVmYXVsdFRpbWUiLCJmaW5kVGltZVNsb3RzIiwibmV3VHJlYXRtZW50cyIsImNhdGVnb3J5IiwiY2hvb3NlblN0eWxpc3QiLCJsb2NhdGlvbiIsInRyZWF0bWVudER1cmF0aW9uIiwidHJlYXRtZW50UHJpY2UiLCJ0cmVhdG1lbnRUaXRsZSIsImRhdGVzQXJyYXkiLCJhbGxTdHlsaXN0cyIsImNhbGVuZGFyRXZlbnRzIiwic3R5bGlzdHNCeU5hbWUiLCJmb3JFYWNoIiwidHJlYXRtZW50IiwicHVzaCIsInN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyIsImRhdGUiLCJuZXdEYXRlIiwiRGF0ZSIsImRheU5hbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwidGVtcCIsInN0eWxpc3QiLCJ3b3JrU2NoZWR1bGUiLCJzY2hlZHVsZSIsImRheSIsIndvcmtpbmdUaW1lcyIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImxlbmd0aCIsInN0eWxpc3RXb3JraW5nVGltZXMiLCJmaWx0ZXJlZERhdGVzIiwibmV3RGF0ZVRpbWUiLCJzdHlsaXN0TmFtZSIsImV2ZW50IiwiZXZlbnREYXRlIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImV2ZW50TG9jYXRpb24iLCJzdHlsaXN0c1dpdGhGcmVlVGltZXMiLCJjYWxlbmRhckV2ZW50IiwiY2FsZW5kYXJFdmVudEluZGV4IiwibmV3RGF0ZVRpbWVBcnJheSIsImRhdGVUaW1lQXJyYXkiLCJkYXRlVGltZSIsImRhdGVUaW1lSW5kZXgiLCJidXN5VGltZXMiLCJmcmVlVGltZXMiLCJqIiwidGltZSIsImluY2x1ZGVzIiwiZW1haWwiLCJkdXJhdGlvbiIsImZyZWVUaW1lc0FycmF5IiwibmV3QXJyYXkiLCJrIiwic3R5bGlzdHMiLCJhYmNkIiwidHJlYXRtZW50cyIsIml0ZW0iLCJhdmFpbGFibGVTdGFydGluZ1RpbWVzV2l0aERhdGVzIiwiaW5kZXgiLCJhdmFpbGFibGVUaW1lc0J5RGF0ZSIsInRvdGFsVGltZUNvdW50IiwiY291bnQiLCJzdGFydGluZ1RpbWUiLCJ5IiwiTnVtYmVyIiwibWludXRlcyIsInRpbWVzIiwiZGF0ZXMiLCJnZXRUaW1lIiwieWVhciIsImdldEZ1bGxZZWFyIiwidG9TdHJpbmciLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInN0YXJ0Iiwic3RhcnRJbmRleE9mVCIsImVuZEluZGV4T2ZUIiwiZW5kIiwiZW5kaW5nSG91ciIsImVuZGluZ01pbnV0ZSIsInN0YXJ0VGltZUluTWludXRlIiwiZW5kVGltZUluTWludXRlIiwic3R5bGlzdEZ1bGxOYW1lIiwic3RhcnRUaW1lSW5kZXgiLCJlbmRUaW1lSW5kZXgiLCJUZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==
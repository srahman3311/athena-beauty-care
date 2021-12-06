(() => {
var exports = {};
exports.id = "pages/admins/events";
exports.ids = ["pages/admins/events"];
exports.modules = {

/***/ "./components/admins/control-panel/ControlPanel.js":
/*!*********************************************************!*\
  !*** ./components/admins/control-panel/ControlPanel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlPanel)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/ControlPanel.module.css */ "./styles/ControlPanel.module.css");
/* harmony import */ var _styles_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\control-panel\\ControlPanel.js";
// eslint
 // Stylesheet



function ControlPanel() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_2___default().control_panel),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/admins/locations",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        children: "Location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 44
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/admins/categories",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        children: "Categories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 45
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/admins/treatments",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        children: "Treatments"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 45
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/admins/events",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        children: "Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 41
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/admins/stylists",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        children: "Stylists"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 43
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/events",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        children: "Coupons"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 34
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/AddEvent.js":
/*!**********************************************!*\
  !*** ./components/admins/events/AddEvent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddEvent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var _libs_event_modifiers_times__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/event-modifiers/times */ "./libs/event-modifiers/times.js");
/* harmony import */ var _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/event-modifiers/eventInfoOnChange */ "./libs/event-modifiers/eventInfoOnChange.js");
/* harmony import */ var _libs_event_modifiers_addUpdateEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/event-modifiers/addUpdateEvent */ "./libs/event-modifiers/addUpdateEvent.js");
/* harmony import */ var _reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reusable-components/DropdownList */ "./components/reusable-components/DropdownList.js");
/* harmony import */ var _SelectTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SelectTime */ "./components/admins/events/SelectTime.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CategoryList */ "./components/admins/events/CategoryList.js");
/* harmony import */ var _TreatmentList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TreatmentList */ "./components/admins/events/TreatmentList.js");
/* harmony import */ var _LocationList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LocationList */ "./components/admins/events/LocationList.js");
/* harmony import */ var _reusable_components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../reusable-components/Input */ "./components/reusable-components/Input.js");
/* harmony import */ var _StylistList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./StylistList */ "./components/admins/events/StylistList.js");
/* harmony import */ var _reusable_components_SaveButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reusable-components/SaveButton */ "./components/reusable-components/SaveButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\AddEvent.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React Modules





 // event-modifiers


 // Components






 // import SelectInput from "../../reusable-components/SelectInput";


 // import CloseFormButton from "../../reusable-components/CloseFormButton";
// Stylesheet
// import styles from "../../../styles/locations/AddLocation.module.css"
// import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";


function AddEvent({
  treatmentInfo,
  setTreatmentInfo,
  isAddingUpdating,
  setIsAddingUpdating,
  displayHideTreatmentForm
}) {
  const {
    0: successFailMessage,
    1: setSuccessFailMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: validationError,
    1: setValidationError
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: eventState,
    1: setEventState
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    locations: [],
    categories: [],
    treatments: [],
    stylists: []
  });
  const {
    0: eventInfo,
    1: setEventInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    eventId: "",
    eventDate: null,
    // Set inital values of start and end time with the first item of times array. If user forgets to pick the times
    // then setting the initial values will make sure that an error message is shown to the user.  
    startTime: _libs_event_modifiers_times__WEBPACK_IMPORTED_MODULE_5__.times[0],
    endTime: _libs_event_modifiers_times__WEBPACK_IMPORTED_MODULE_5__.times[0],
    treatmentCategory: "",
    treatmentName: "",
    stylist: "",
    stylistEmail: "",
    eventLocation: "",
    eventDuration: 0,
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    eventDescription: "",
    eventPrice: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/locations").then(response => {
      setEventState(currentVal => {
        return _objectSpread(_objectSpread({}, currentVal), {}, {
          locations: response.data
        });
      });

      if (response.data.length) {
        setEventInfo(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            eventLocation: response.data[0].title
          });
        });
      }
    }).catch(error => alert(error.response.data.msg)); // System will let user select category from the dropdown. So fetch all the categories and update the state

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/categories").then(response => {
      const newCategories = response.data;
      setEventState(currentVal => {
        return _objectSpread(_objectSpread({}, currentVal), {}, {
          categories: newCategories
        });
      }); // Fetch treatments based on category and stylists based on treatments. Intial values of treatment dropdown
      // will bebased on first category of the category dropdown. Initial values of stylist dropdown will be based 
      // on first treatment of the treatment dropdown.

      const endpoint = "http://localhost:7070/api/treatments/find-by-category";
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(endpoint, {
        category: newCategories[0].title
      }).then(newResponse => {
        const newTreatments = newResponse.data.treatments;
        const newStylists = newTreatments[0].stylists;
        setEventState(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            treatments: newTreatments,
            stylists: newStylists
          });
        }); // If user is okay with first category of the category dropdown and first treatment of the treatment 
        // dropdown and first stylist of the stylist dropdown then he/she won't bother to change any of the 
        // three. In that case update the eventInfo state with the first category, first treatment and first
        // stylist and first treatment's duration

        setEventInfo(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            treatmentCategory: newCategories[0].title,
            treatmentName: newTreatments[0].title,
            stylist: newStylists[0],
            eventDuration: newTreatments[0].duration
          });
        });
      }).catch(err => alert(err.response.data.msg));
    }).catch(err => alert(err.response.data.msg));
  }, []);

  function handleDropdownOnchange(event) {
    (0,_libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange)(event, setEventInfo, eventState, setEventState);
  }

  return (
    /*#__PURE__*/
    // Styles are in globals.css
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "add_event",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
        selected: eventInfo.eventDate,
        onChange: date => (0,_libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange)(date, setEventInfo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_SelectTime__WEBPACK_IMPORTED_MODULE_9__.default, {
        label: "Start Time",
        name: "startTime",
        value: eventInfo.startTime,
        times: _libs_event_modifiers_times__WEBPACK_IMPORTED_MODULE_5__.times,
        setEventInfo: setEventInfo,
        eventInfoOnChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_CategoryList__WEBPACK_IMPORTED_MODULE_10__.default, {
        eventState: eventState,
        setEventState: setEventState,
        eventInfo: eventInfo,
        setEventInfo: setEventInfo,
        eventInfoOnChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_TreatmentList__WEBPACK_IMPORTED_MODULE_11__.default, {
        eventState: eventState,
        setEventState: setEventState,
        eventInfo: eventInfo,
        setEventInfo: setEventInfo,
        eventInfoOnChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_StylistList__WEBPACK_IMPORTED_MODULE_14__.default, {
        eventState: eventState,
        eventInfo: eventInfo,
        setEventInfo: setEventInfo,
        eventInfoOnChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_LocationList__WEBPACK_IMPORTED_MODULE_12__.default, {
        eventState: eventState,
        eventInfo: eventInfo,
        setEventInfo: setEventInfo,
        eventInfoOnChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_13__.default, {
        label: "Client Name",
        type: "text",
        name: "clientName",
        setData: setEventInfo,
        value: eventInfo.clientName,
        placeholder: "grace heart",
        onChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_13__.default, {
        label: "Client Email",
        type: "email",
        name: "clientEmail",
        setData: setEventInfo,
        value: eventInfo.clientEmail,
        placeholder: "grace.heart@abc.com",
        onChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_13__.default, {
        label: "Client Phone",
        type: "text",
        name: "clientPhone",
        setData: setEventInfo,
        value: eventInfo.clientPhone,
        placeholder: "+88 01717062884",
        onChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_13__.default, {
        label: "Event Description",
        type: "text",
        name: "eventDescription",
        setData: setEventInfo,
        value: eventInfo.eventDescription,
        placeholder: "anything",
        onChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_13__.default, {
        label: "Event Price",
        type: "number",
        name: "eventPrice",
        setData: setEventInfo,
        value: eventInfo.eventPrice,
        placeholder: "",
        onChange: _libs_event_modifiers_eventInfoOnChange__WEBPACK_IMPORTED_MODULE_6__.eventInfoOnChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_reusable_components_SaveButton__WEBPACK_IMPORTED_MODULE_15__.default // To pass to addUpdateLocation function. Empty string will make http request to backend at 
      // add_location endpoint, else update request will be made to backend 
      , {
        _id: eventInfo.eventId,
        data: eventInfo,
        setError: setValidationError,
        setSuccessFailMessage: setSuccessFailMessage,
        addNewItem: _libs_event_modifiers_addUpdateEvent__WEBPACK_IMPORTED_MODULE_7__.addUpdateEvent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }, this)
  );
}

/***/ }),

/***/ "./components/admins/events/CategoryList.js":
/*!**************************************************!*\
  !*** ./components/admins/events/CategoryList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryList)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\CategoryList.js";

function CategoryList({
  eventState,
  setEventState,
  eventInfo,
  setEventInfo,
  eventInfoOnChange
}) {
  const {
    categories
  } = eventState;
  const {
    treatmentCategory
  } = eventInfo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "product_dropdown",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Select Category"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: "treatmentCategory",
      onChange: event => eventInfoOnChange(event, setEventInfo, eventState, setEventState),
      value: categories.length && !treatmentCategory ? categories[0].title : treatmentCategory,
      children: categories.map((category, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          children: category.title
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/EventDetails.js":
/*!**************************************************!*\
  !*** ./components/admins/events/EventDetails.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Events.module.css */ "./styles/Events.module.css");
/* harmony import */ var _styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\EventDetails.js";
// Stylesheet




const EventDetails = ({
  events,
  treatmentId,
  setTreatmentId
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: events.map(event => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1___default().eventDetails_modal),
        style: {
          display: treatmentId === event._id.toString() ? "block" : "none"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: event.treatmentName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => setTreatmentId(""),
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, undefined)]
      }, event._id.toString(), true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDetails);

/***/ }),

/***/ "./components/admins/events/EventList.js":
/*!***********************************************!*\
  !*** ./components/admins/events/EventList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventList)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\EventList.js";
// Next Modules

 // For Redirecting 


 // For google fonts and others
//import styles from "../../styles/ControlPanel.module.css";
// React Modules


 // components
// import ControlPanel from "../../components/admins/control-panel/ControlPanel";


function EventList() {
  async function addEvent() {
    try {
      const endpoint = "http://localhost:7070/api/events/add-event";
      const event = {
        email: "samsur.rahman3311@gmail.com",
        summary: "This is an event",
        start: new Date("2021-10-25T15:30:00").toLocaleString("en-US", {
          timeZone: "Asia/Dhaka"
        }),
        end: new Date("2021-10-25T16:15:00").toLocaleString("en-US", {
          timeZone: "Asia/Dhaka"
        })
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().post(endpoint, event);
      console.log(response.data.msg);
    } catch (error) {
      console.log(error.response.data.msg);
    }

    axios__WEBPACK_IMPORTED_MODULE_5___default().post("");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "events",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: addEvent,
      children: "Add Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/LocationList.js":
/*!**************************************************!*\
  !*** ./components/admins/events/LocationList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationList)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\LocationList.js";

function LocationList({
  eventState,
  setEventState,
  eventInfo,
  setEventInfo,
  eventInfoOnChange
}) {
  const {
    locations
  } = eventState;
  const {
    eventLocation
  } = eventInfo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "product_dropdown",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Select location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: "eventLocation",
      onChange: event => eventInfoOnChange(event, setEventInfo, eventState, setEventState),
      value: locations.length && !eventLocation ? locations[0].title : eventLocation,
      children: locations.map((location, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          children: location.title
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, this) // !product.availability && <OptionComponent key = {index + 1} product = {product} />
        ;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/SelectTime.js":
/*!************************************************!*\
  !*** ./components/admins/events/SelectTime.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectTime)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\SelectTime.js";

// Styles are in Stylist.module.css
function SelectTime({
  name,
  label,
  times,
  value,
  eventInfoOnChange,
  setEventInfo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "select_time",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      style: {
        width: "100px"
      },
      name: name,
      onChange: event => eventInfoOnChange(event, setEventInfo),
      value: value,
      children: times.map((time, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: time,
          children: time
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, this) // !product.availability && <OptionComponent key = {index + 1} product = {product} />
        ;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/StylistList.js":
/*!*************************************************!*\
  !*** ./components/admins/events/StylistList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylistList)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\StylistList.js";

function StylistList({
  eventState,
  eventInfo,
  setEventInfo,
  eventInfoOnChange
}) {
  const {
    stylists
  } = eventState;
  const {
    stylist
  } = eventInfo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "product_dropdown",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Select stylist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: "stylist",
      onChange: event => eventInfoOnChange(event, setEventInfo),
      value: stylists.length && !stylist ? stylists[0] : stylist,
      children: stylists.map((stylist, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          children: stylist
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this) // !product.availability && <OptionComponent key = {index + 1} product = {product} />
        ;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/TreatmentList.js":
/*!***************************************************!*\
  !*** ./components/admins/events/TreatmentList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TreatmentList)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\TreatmentList.js";

function TreatmentList({
  eventState,
  eventInfo,
  setEventState,
  setEventInfo,
  eventInfoOnChange
}) {
  const {
    treatments
  } = eventState;
  const {
    treatmentName
  } = eventInfo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "product_dropdown",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Select Treatment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: "treatmentName",
      onChange: event => eventInfoOnChange(event, setEventInfo, eventState, setEventState),
      value: treatments.length && !treatmentName ? treatments[0].title : treatmentName,
      children: treatments.map((treatment, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          children: treatment.title
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, this) // !product.availability && <OptionComponent key = {index + 1} product = {product} />
        ;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/events-table/EventsTableData.js":
/*!******************************************************************!*\
  !*** ./components/admins/events/events-table/EventsTableData.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsTableData)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\events-table\\EventsTableData.js";

//
function EventsTableData({
  events,
  setEventId,
  eventState,
  setEventState,
  deleteEvent
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
    children: events.map((event, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.eventLocation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.stylist
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.treatmentCategory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.treatmentName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: [event.eventDuration, " minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: ["$", event.eventPrice]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.endTime.substring(0, event.endTime.indexOf("T"))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.clientName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.clientEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.clientPhone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: event.status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this)]
      }, index + 1, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/admins/events/events-table/EventsTableHeader.js":
/*!********************************************************************!*\
  !*** ./components/admins/events/events-table/EventsTableHeader.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsTableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\events-table\\EventsTableHeader.js";

//
function EventsTableHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Stylist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Category"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Treatment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Duration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Event Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Event Date"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Start Time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "End Time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Client Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Client Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Client Phone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/reusable-components/DropdownList.js":
/*!********************************************************!*\
  !*** ./components/reusable-components/DropdownList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownList)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\DropdownList.js";

function DropdownList({
  name,
  nameKey,
  blankOptionValue,
  data,
  handleDropdownOnchange
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "dropdown_list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
      name: name,
      onChange: handleDropdownOnchange,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: "",
        children: blankOptionValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), data.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: item[nameKey],
          children: item[nameKey]
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
/*

Reusable Dropdown/Select Component
https://stackoverflow.com/questions/52789363/react-how-to-fit-json-api-data-into-reusable-select-component

*/

/***/ }),

/***/ "./components/reusable-components/ErrorMessage.js":
/*!********************************************************!*\
  !*** ./components/reusable-components/ErrorMessage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var _styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/common-styles/CommonStyles.module.css */ "./styles/common-styles/CommonStyles.module.css");
/* harmony import */ var _styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\ErrorMessage.js";
// Stylesheet


function ErrorMessage({
  error,
  name,
  value,
  content
}) {
  const condition = error && !value && name !== "remarks" && name !== "clientName" && name !== "clientPhone" && name !== "eventDescription"; // treatment has remarks property which is not a mandatory field. So if user doesn't want to add a remark we should be
  // okay with this and won't show validation error message

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().error_message),
    style: {
      display: condition ? "block" : "none"
    },
    children: ["* ", content]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/reusable-components/Input.js":
/*!*************************************************!*\
  !*** ./components/reusable-components/Input.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage */ "./components/reusable-components/ErrorMessage.js");
/* harmony import */ var _styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/common-styles/CommonStyles.module.css */ "./styles/common-styles/CommonStyles.module.css");
/* harmony import */ var _styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\Input.js";
// Components
 // Stylesheet



function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  setData,
  error
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      className: (_styles_common_styles_CommonStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_label),
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      // style = {{width: (name === "address1" || name === "address2" || name === "title") && "350px" }} 
      type: type,
      name: name,
      placeholder: placeholder,
      value: value,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_0__.default, {
      error: error,
      name: name,
      value: value,
      content: `${label} can't be blank`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/reusable-components/SaveButton.js":
/*!******************************************************!*\
  !*** ./components/reusable-components/SaveButton.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveButton)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\SaveButton.js";

//
function SaveButton({
  _id,
  data,
  addNewItem,
  setError,
  setSuccessFailMessage
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "save_button",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      // _id is for
      value: _id,
      className: "",
      onClick: () => addNewItem(_id, data, setError, setSuccessFailMessage),
      children: "Save"
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

/***/ "./components/reusable-components/data-table/DataTable.js":
/*!****************************************************************!*\
  !*** ./components/reusable-components/data-table/DataTable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableHeader */ "./components/reusable-components/data-table/TableHeader.js");
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableData */ "./components/reusable-components/data-table/TableData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\data-table\\DataTable.js";




const DataTable = ({
  tableFor,
  tableHeaders,
  tableData,
  dynamicClass,
  setItemId,
  openDeletePrompt
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "data-table",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_TableHeader__WEBPACK_IMPORTED_MODULE_0__.default, {
        tableHeaders: tableHeaders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_TableData__WEBPACK_IMPORTED_MODULE_1__.default, {
        tableFor: tableFor,
        tableData: tableData,
        setItemId: setItemId,
        openDeletePrompt: openDeletePrompt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);

/***/ }),

/***/ "./components/reusable-components/data-table/TableData.js":
/*!****************************************************************!*\
  !*** ./components/reusable-components/data-table/TableData.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableData)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\data-table\\TableData.js";
//


function TableData({
  tableFor,
  tableData,
  setItemId,
  openDeletePrompt
}) {
  console.log(tableData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tbody", {
    children: tableData.map(item => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
        children: item.data.map((value, index) => {
          // Table data fields might content plain numbers and as in JavaScript numbers don't have an
          // include method so we need to check if it's a string 
          if (typeof value === "string") {
            if (value.includes("View Details")) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  value: value.substring(value.indexOf("-") + 1, value.length),
                  onClick: event => setItemId(event.target.value),
                  children: "View Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 45
                }, this)
              }, index + 1, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 41
              }, this);
            }

            if (value.includes("Delete")) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  value: value.substring(value.indexOf("-") + 1, value.length),
                  onClick: openDeletePrompt,
                  children: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 45
                }, this)
              }, index + 1, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 41
              }, this);
            }

            if (value.includes("http")) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: value,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    children: "View Details"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 65
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 45
                }, this)
              }, index + 1, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 41
              }, this);
            }
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: value
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 33
          }, this);
        })
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/reusable-components/data-table/TableHeader.js":
/*!******************************************************************!*\
  !*** ./components/reusable-components/data-table/TableHeader.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\data-table\\TableHeader.js";

//
function TableHeader({
  tableHeaders
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: tableHeaders.map(header => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          children: header
        }, header, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 28
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./libs/data.js":
/*!**********************!*\
  !*** ./libs/data.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysOfTheWeek": () => (/* binding */ daysOfTheWeek),
/* harmony export */   "times": () => (/* binding */ times),
/* harmony export */   "locationDataTableHeaders": () => (/* binding */ locationDataTableHeaders),
/* harmony export */   "categoryDataTableHeaders": () => (/* binding */ categoryDataTableHeaders),
/* harmony export */   "treatmentDataTableHeaders": () => (/* binding */ treatmentDataTableHeaders),
/* harmony export */   "stylistDataTableHeaders": () => (/* binding */ stylistDataTableHeaders),
/* harmony export */   "eventsDataTableHeaders": () => (/* binding */ eventsDataTableHeaders)
/* harmony export */ });
const daysOfTheWeek = [{
  id: 1,
  name: "Monday"
}, {
  id: 1,
  name: "Tuesday"
}, {
  id: 1,
  name: "Wednesday"
}, {
  id: 1,
  name: "Thursday"
}, {
  id: 1,
  name: "Friday"
}];
const times = [{
  id: 1,
  time: "10:00"
}, {
  id: 2,
  time: "10:30"
}, {
  id: 3,
  time: "11:00"
}, {
  id: 4,
  time: "11:30"
}, {
  id: 5,
  time: "12:00"
}, {
  id: 6,
  time: "12:30"
}, {
  id: 7,
  time: "13:00"
}, {
  id: 8,
  time: "13:30"
}, {
  id: 9,
  time: "14:00"
}, {
  id: 10,
  time: "14:30"
}, {
  id: 11,
  time: "15:00"
}, {
  id: 12,
  time: "15:30"
}, {
  id: 13,
  time: "16:00"
}, {
  id: 14,
  time: "16:30"
}, {
  id: 15,
  time: "17:00"
}];
const locationDataTableHeaders = ["Title", "Address1", "Address2", "City", "Country", "Phone", "Zip Code", "Action", "Delete"];
const categoryDataTableHeaders = ["Title", "Action", "Delete"];
const treatmentDataTableHeaders = ["Category", "Title", "Description", "Duration", "Price", "Remarks", "Action", "Delete"];
const stylistDataTableHeaders = ["First Name", "Last Name", "Email", "Password", "Details"];
const eventsDataTableHeaders = ["Location", "Category", "Treatment", "Stylist", "Event Date", "Start Time", "End Time", "Client", "Action", "Delete"];

/***/ }),

/***/ "./libs/event-modifiers/addUpdateEvent.js":
/*!************************************************!*\
  !*** ./libs/event-modifiers/addUpdateEvent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUpdateEvent": () => (/* binding */ addUpdateEvent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Modules

const addUpdateEvent = async (eventId, eventInfo, setValidationError, setSuccessFailMessage) => {
  console.log(eventInfo);
  const {
    eventDate,
    startTime,
    endTime,
    clientEmail,
    eventPrice
  } = eventInfo;
  if (!eventDate) return alert("Please select a date"); // Client email and event price must also be provided. Otherwise return with an error message

  if (!clientEmail || !eventPrice) return setValidationError(true); // if eventPrice is minus figure then

  if (Number(eventPrice) <= 0) return alert("Price can't be equal to or less than 0");

  try {
    // Default endpoint is add event
    let endpoint = "http://localhost:7070/api/events/add-event"; // But if eventId is not empty then update request should be sent

    if (eventId) endpoint = "http://localhost:7070/api/events/update";
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(endpoint, eventInfo);
    return alert(response.data.msg);
    setSuccessFailMessage(response.data.msg);
  } catch (error) {
    alert(error.response.data.msg); //setSuccessFailMessage(error.response.data.msg);
  }
};

/***/ }),

/***/ "./libs/event-modifiers/eventInfoOnChange.js":
/*!***************************************************!*\
  !*** ./libs/event-modifiers/eventInfoOnChange.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventInfoOnChange": () => (/* binding */ eventInfoOnChange)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//

const eventInfoOnChange = async (event, setEventInfo, eventState, setEventState) => {
  // if user is trying to backspace on date picker and empty the input field then just return. It will prevent
  // app from breaking
  if (event === null) return; // if typeof event.target is undefined that means user is picking a date

  if (typeof event.target === "undefined") {
    const date = new Date(event).getDate();
    const month = new Date(event).getMonth() + 1;
    const year = new Date(event).getFullYear(); //console.log(`${date}-${month}-${year}`)

    return setEventInfo(currentVal => {
      return _objectSpread(_objectSpread({}, currentVal), {}, {
        eventDate: event
      });
    });
  }

  const name = event.target.name;
  const value = event.target.value; // If name is treatmentCategory then user is selecting a category. So update the eventState of treatments with related 
  // treatments of selected category and update the eventState of stylists with the related stylists of the first treatment

  if (name === "treatmentCategory") {
    const endpoint = "http://localhost:7070/api/treatments/find-by-category";

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(endpoint, {
        category: value
      });
      const treatments = response.data.treatments;
      const stylists = treatments[0].stylists;
      setEventState(currentVal => {
        return _objectSpread(_objectSpread({}, currentVal), {}, {
          treatments,
          stylists
        });
      }); // values of treatmentCategory, treatment, stylist and eventDuration of eventInfo state must also change based on 
      // category change. treatment value will be first treatment of the updated treatment list, stylist value will 
      // be first stylist of the stylists of the first treatment and eventDuration will be the duration of the first
      // treatment's duration

      return setEventInfo(currentVal => {
        return _objectSpread(_objectSpread({}, currentVal), {}, {
          treatmentCategory: value,
          treatmentName: treatments[0].title,
          stylist: stylists[0],
          eventDuration: treatments[0].duration
        });
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  } // stylists of eventState must be repopulated with the stylists of selected treatment. And the stylist value of 
  // eventInfo state will be new stylists array's first value. 


  if (name === "treatmentName") {
    for (let x = 0; x < eventState.treatments.length; x++) {
      const treatment = eventState.treatments[x];

      if (treatment.title === value) {
        setEventState(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            stylists: treatment.stylists
          });
        });
        setEventInfo(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            treatmentName: value,
            stylist: treatment.stylists[0],
            eventDuration: treatment.duration
          });
        });
        break;
      }
    }

    return;
  }

  setEventInfo(currentVal => {
    return _objectSpread(_objectSpread({}, currentVal), {}, {
      [name]: value
    });
  });
};

/***/ }),

/***/ "./libs/event-modifiers/fetchEventData.js":
/*!************************************************!*\
  !*** ./libs/event-modifiers/fetchEventData.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchEventData": () => (/* binding */ fetchEventData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Modules

const fetchEventData = async (eventState, newSkip, setEventState, setEventTableData) => {
  let {
    searchText,
    limit
  } = eventState;

  try {
    const endpoint = "http://localhost:7070/api/events";
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(endpoint, {
      searchText,
      skip: newSkip,
      limit
    });
    const {
      events,
      dataLength
    } = response.data;
    setEventState(currentValue => {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        events,
        skip: newSkip,
        limit,
        dataLength
      });
    });
    const newData = [];
    events.forEach((event, index) => {
      newData.push({
        id: index + 1,
        data: [event.eventLocation, event.treatmentCategory, event.treatmentName, event.stylist, event.startTime.substring(0, event.startTime.indexOf("T")), event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length), event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length), event.clientEmail, `View Details-${event._id.toString()}`, `Delete-${event._id.toString()}`]
      });
    });
    setEventTableData(newData);
  } catch (error) {
    // setSuccessFailMessage(error.response.data.msg);
    console.log(error.response.data.msg);
  }
};

/***/ }),

/***/ "./libs/event-modifiers/times.js":
/*!***************************************!*\
  !*** ./libs/event-modifiers/times.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "times": () => (/* binding */ times)
/* harmony export */ });
const times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];

/***/ }),

/***/ "./libs/useAxios.js":
/*!**************************!*\
  !*** ./libs/useAxios.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAxios)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function useAxios(method, url, body, happening) {
  // // Need to put following three in the useEffect's dependecy array to allow for dynamic data fetching based on user's 
  // // search input, navigation to previous and next items.
  // let searchText = "";
  // let skip = 0;
  // let limit = 0;
  // // If it's a post request then body will contain searchText, skip and limit. Update the above three with the body's values
  // if(body !== "undefined") {
  //     searchText = body.searchText;
  //     skip = body.skip;
  //     limit = body.limit
  // }
  // console.log(searchText, skip, limit);
  // console.log(method, url, body);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: totalDataCount,
    1: setTotalDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method,
        url,
        data: body
      });
      const newData = await response.data;
      console.log(newData); // If data are being fetched with get method then an array of json objects has been sent from backend

      if (Array.isArray(newData)) return setData(newData);

      if (response.data.items === "undefined") {
        return setData(newData);
      } // Else, data are being fetched with post method. So an object has been sent from backend which contains data and
      // totalDataCount


      const {
        items,
        totalItemCount
      } = response.data;
      setData(items);
      setTotalDataCount(totalItemCount);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, [url, happening]);
  console.log(data);
  return {
    data,
    totalDataCount,
    error,
    loading
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/admins/events.js":
/*!********************************!*\
  !*** ./pages/admins/events.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _libs_event_modifiers_fetchEventData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/event-modifiers/fetchEventData */ "./libs/event-modifiers/fetchEventData.js");
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_events_EventList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/events/EventList */ "./components/admins/events/EventList.js");
/* harmony import */ var _components_admins_events_AddEvent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/admins/events/AddEvent */ "./components/admins/events/AddEvent.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/admins/events/EventDetails */ "./components/admins/events/EventDetails.js");
/* harmony import */ var _components_admins_events_events_table_EventsTableHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/admins/events/events-table/EventsTableHeader */ "./components/admins/events/events-table/EventsTableHeader.js");
/* harmony import */ var _components_admins_events_events_table_EventsTableData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/admins/events/events-table/EventsTableData */ "./components/admins/events/events-table/EventsTableData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\events.js";
// event-modifiers


 // Next Modules


 // For Redirecting 


 // For google fonts and others

 // React Modules


 //Images


 // components









function Events() {
  const {
    0: treatmentId,
    1: setTreatmentId
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
  const {
    0: isAddingUpdating,
    1: setIsAddingUpdating
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: eventTableData,
    1: setEventTableData
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const {
    0: eventState,
    1: setEventState
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    events: [],
    locations: [],
    categories: [],
    treatments: [],
    stylists: [],
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    (0,_libs_event_modifiers_fetchEventData__WEBPACK_IMPORTED_MODULE_0__.fetchEventData)(eventState, eventState.skip, setEventState, setEventTableData);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
    className: "",
    style: {
      display: "flex",
      position: "relative",
      height: "100vh"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_admins_events_AddEvent__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_14__.default, {
      tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_1__.eventsDataTableHeaders,
      tableData: eventTableData,
      tableFor: "events",
      setItemId: setTreatmentId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_15__.default, {
      events: eventState.events,
      treatmentId: treatmentId,
      setTreatmentId: setTreatmentId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./images/carton-woman.jpg":
/*!*********************************!*\
  !*** ./images/carton-woman.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/carton-woman.9a5b8e2a1854bfe0556165a147e0fa18.jpg","height":1300,"width":1300,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcarton-woman.9a5b8e2a1854bfe0556165a147e0fa18.jpg&w=8&q=70"});

/***/ }),

/***/ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/raphael-lovaski-Pe9IXUuC6QU-unsplash.ecb8cc4722137904d7022c5918349a6f.jpg","height":4000,"width":6000,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fraphael-lovaski-Pe9IXUuC6QU-unsplash.ecb8cc4722137904d7022c5918349a6f.jpg&w=8&q=70"});

/***/ }),

/***/ "./styles/ControlPanel.module.css":
/*!****************************************!*\
  !*** ./styles/ControlPanel.module.css ***!
  \****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"admin_area": "ControlPanel_admin_area__1kuUV",
	"control_panel": "ControlPanel_control_panel__3g-SD",
	"create_new_event": "ControlPanel_create_new_event__2-15B",
	"event_info": "ControlPanel_event_info__3DEYC",
	"event_info_div": "ControlPanel_event_info_div__3-JbX",
	"input_label": "ControlPanel_input_label__1bRgg",
	"input_field": "ControlPanel_input_field__1DWs7",
	"text_input": "ControlPanel_text_input__32vxW",
	"qa_content": "ControlPanel_qa_content__PwvId",
	"qa_title": "ControlPanel_qa_title__1Yxe-",
	"qa_headers": "ControlPanel_qa_headers__2xVtT",
	"qa_question_header": "ControlPanel_qa_question_header__3Hk_o",
	"qa_answer_header": "ControlPanel_qa_answer_header__3kTsB",
	"qa_answer_title": "ControlPanel_qa_answer_title__2pm4z",
	"qa_answer_blank": "ControlPanel_qa_answer_blank__1AwTF",
	"qa_main_content": "ControlPanel_qa_main_content__tICKF",
	"qa_question_content": "ControlPanel_qa_question_content__3_yji",
	"qa_answer_content": "ControlPanel_qa_answer_content__a-4_T",
	"qa_answer_text_input": "ControlPanel_qa_answer_text_input__1z48k",
	"qa_answer_radio_input": "ControlPanel_qa_answer_radio_input__ioSNk"
};


/***/ }),

/***/ "./styles/Events.module.css":
/*!**********************************!*\
  !*** ./styles/Events.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"eventDetails_modal": "Events_eventDetails_modal__2vNjG"
};


/***/ }),

/***/ "./styles/common-styles/CommonStyles.module.css":
/*!******************************************************!*\
  !*** ./styles/common-styles/CommonStyles.module.css ***!
  \******************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"section_header": "CommonStyles_section_header__1hz8b",
	"sectionHeader_content": "CommonStyles_sectionHeader_content__3rbF9",
	"search": "CommonStyles_search__3soOm",
	"admin_add_form": "CommonStyles_admin_add_form__2Olqj",
	"buttons": "CommonStyles_buttons___zmm2",
	"profile_picture": "CommonStyles_profile_picture__2qVbB",
	"image_uploader": "CommonStyles_image_uploader__1zGnM",
	"user_info_container": "CommonStyles_user_info_container__3QoxL",
	"user_info": "CommonStyles_user_info__McZ8C",
	"basic_info_inputs": "CommonStyles_basic_info_inputs__1Tjo3",
	"email_inputs": "CommonStyles_email_inputs__11DMd",
	"password_inputs": "CommonStyles_password_inputs__29Ejj",
	"input": "CommonStyles_input__2R2f1",
	"input_label": "CommonStyles_input_label__1sm55",
	"image_preview": "CommonStyles_image_preview__1wWKh",
	"image_file_input": "CommonStyles_image_file_input__3mGAX",
	"image_filename": "CommonStyles_image_filename__1OZkm",
	"image_upload_button": "CommonStyles_image_upload_button__3M81H",
	"error_message": "CommonStyles_error_message__3FLty",
	"successFail_message": "CommonStyles_successFail_message__2fyIJ"
};


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admins/events.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQWpRLGlFQUFlLENBQUMsaVNBQWlTOzs7Ozs7Ozs7O0FDQWpUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvQWRkRXZlbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL0NhdGVnb3J5TGlzdC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvRXZlbnREZXRhaWxzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9FdmVudExpc3QuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL0xvY2F0aW9uTGlzdC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvU2VsZWN0VGltZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvU3R5bGlzdExpc3QuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL1RyZWF0bWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL2V2ZW50cy10YWJsZS9FdmVudHNUYWJsZURhdGEuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL2V2ZW50cy10YWJsZS9FdmVudHNUYWJsZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRHJvcGRvd25MaXN0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0lucHV0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9UYWJsZURhdGEuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvVGFibGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGlicy9kYXRhLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvZXZlbnQtbW9kaWZpZXJzL2FkZFVwZGF0ZUV2ZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvZXZlbnQtbW9kaWZpZXJzL2V2ZW50SW5mb09uQ2hhbmdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvZXZlbnQtbW9kaWZpZXJzL2ZldGNoRXZlbnREYXRhLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvZXZlbnQtbW9kaWZpZXJzL3RpbWVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvdXNlQXhpb3MuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9wYWdlcy9hZG1pbnMvZXZlbnRzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9jYXJ0b24td29tYW4uanBnIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9Db250cm9sUGFuZWwubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvRXZlbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL2NvbW1vbi1zdHlsZXMvQ29tbW9uU3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9pZ25vcmVkfEQ6XFxwcm9ncmFtbWluZ1xcZml2ZXJyLXByb2plY3RzXFxuZXh0anMtcHJvamVjdHNcXGF0aGVuYS1iZWF1dHktY2FyZVxcZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludFxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Db250cm9sUGFuZWwubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cm9sUGFuZWwgKCkgIHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbF9wYW5lbH0+XHJcbiAgICAgICAgICAgIHsvKiA8aDM+Q29udHJvbCBQYW5lbDwvaDM+ICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWlucy9sb2NhdGlvbnNcIj48YT5Mb2NhdGlvbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5zL2NhdGVnb3JpZXNcIj48YT5DYXRlZ29yaWVzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbnMvdHJlYXRtZW50c1wiPjxhPlRyZWF0bWVudHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWlucy9ldmVudHNcIj48YT5FdmVudHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWlucy9zdHlsaXN0c1wiPjxhPlN0eWxpc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudHNcIj48YT5Db3Vwb25zPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG4iLCIvLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuaW1wb3J0IHsgdGltZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9ldmVudC1tb2RpZmllcnMvdGltZXNcIjtcclxuXHJcbi8vIGV2ZW50LW1vZGlmaWVyc1xyXG5pbXBvcnQgeyBldmVudEluZm9PbkNoYW5nZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL2V2ZW50LW1vZGlmaWVycy9ldmVudEluZm9PbkNoYW5nZVwiO1xyXG5pbXBvcnQgeyBhZGRVcGRhdGVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9saWJzL2V2ZW50LW1vZGlmaWVycy9hZGRVcGRhdGVFdmVudFwiO1xyXG5cclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IERyb3Bkb3duTGlzdCBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9Ecm9wZG93bkxpc3RcIjtcclxuaW1wb3J0IFNlbGVjdFRpbWUgZnJvbSBcIi4vU2VsZWN0VGltZVwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gXCIuL0NhdGVnb3J5TGlzdFwiO1xyXG5pbXBvcnQgVHJlYXRtZW50TGlzdCBmcm9tIFwiLi9UcmVhdG1lbnRMaXN0XCI7XHJcbmltcG9ydCBMb2NhdGlvbkxpc3QgZnJvbSBcIi4vTG9jYXRpb25MaXN0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dFwiO1xyXG4vLyBpbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL3JldXNhYmxlLWNvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcclxuaW1wb3J0IFN0eWxpc3RMaXN0IGZyb20gXCIuL1N0eWxpc3RMaXN0XCI7XHJcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gXCIuLi8uLi9yZXVzYWJsZS1jb21wb25lbnRzL1NhdmVCdXR0b25cIjtcclxuLy8gaW1wb3J0IENsb3NlRm9ybUJ1dHRvbiBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9DbG9zZUZvcm1CdXR0b25cIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xvY2F0aW9ucy9BZGRMb2NhdGlvbi5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IFN1Y2Nlc3NGYWlsTWVzc2FnZSBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9TdWNjZXNzRmFpbE1lc3NhZ2VcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEV2ZW50ICh7IFxyXG4gICAgdHJlYXRtZW50SW5mbywgc2V0VHJlYXRtZW50SW5mbywgaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZywgZGlzcGxheUhpZGVUcmVhdG1lbnRGb3JtIFxyXG59KSB7XHJcblxyXG4gICAgY29uc3QgW3N1Y2Nlc3NGYWlsTWVzc2FnZSwgc2V0U3VjY2Vzc0ZhaWxNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2V2ZW50U3RhdGUsIHNldEV2ZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGxvY2F0aW9uczogW10sXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgdHJlYXRtZW50czogW10sXHJcbiAgICAgICAgc3R5bGlzdHM6IFtdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnRJbmZvLCBzZXRFdmVudEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGV2ZW50SWQ6IFwiXCIsXHJcbiAgICAgICAgZXZlbnREYXRlOiBudWxsLFxyXG4gICAgICAgIC8vIFNldCBpbml0YWwgdmFsdWVzIG9mIHN0YXJ0IGFuZCBlbmQgdGltZSB3aXRoIHRoZSBmaXJzdCBpdGVtIG9mIHRpbWVzIGFycmF5LiBJZiB1c2VyIGZvcmdldHMgdG8gcGljayB0aGUgdGltZXNcclxuICAgICAgICAvLyB0aGVuIHNldHRpbmcgdGhlIGluaXRpYWwgdmFsdWVzIHdpbGwgbWFrZSBzdXJlIHRoYXQgYW4gZXJyb3IgbWVzc2FnZSBpcyBzaG93biB0byB0aGUgdXNlci4gIFxyXG4gICAgICAgIHN0YXJ0VGltZTogdGltZXNbMF0sXHJcbiAgICAgICAgZW5kVGltZTogdGltZXNbMF0sXHJcbiAgICAgICAgdHJlYXRtZW50Q2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgdHJlYXRtZW50TmFtZTogXCJcIixcclxuICAgICAgICBzdHlsaXN0OiBcIlwiLFxyXG4gICAgICAgIHN0eWxpc3RFbWFpbDogXCJcIixcclxuICAgICAgICBldmVudExvY2F0aW9uOiBcIlwiLFxyXG4gICAgICAgIGV2ZW50RHVyYXRpb246IDAsXHJcbiAgICAgICAgY2xpZW50TmFtZTogXCJcIixcclxuICAgICAgICBjbGllbnRFbWFpbDogXCJcIixcclxuICAgICAgICBjbGllbnRQaG9uZTogXCJcIixcclxuICAgICAgICBldmVudERlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIGV2ZW50UHJpY2U6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zXCIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEV2ZW50U3RhdGUoY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFZhbCwgbG9jYXRpb25zOiByZXNwb25zZS5kYXRhfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiByZXNwb25zZS5kYXRhWzBdLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8gU3lzdGVtIHdpbGwgbGV0IHVzZXIgc2VsZWN0IGNhdGVnb3J5IGZyb20gdGhlIGRyb3Bkb3duLiBTbyBmZXRjaCBhbGwgdGhlIGNhdGVnb3JpZXMgYW5kIHVwZGF0ZSB0aGUgc3RhdGVcclxuICAgICAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXNcIilcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50U3RhdGUoY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogbmV3Q2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCB0cmVhdG1lbnRzIGJhc2VkIG9uIGNhdGVnb3J5IGFuZCBzdHlsaXN0cyBiYXNlZCBvbiB0cmVhdG1lbnRzLiBJbnRpYWwgdmFsdWVzIG9mIHRyZWF0bWVudCBkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBiZWJhc2VkIG9uIGZpcnN0IGNhdGVnb3J5IG9mIHRoZSBjYXRlZ29yeSBkcm9wZG93bi4gSW5pdGlhbCB2YWx1ZXMgb2Ygc3R5bGlzdCBkcm9wZG93biB3aWxsIGJlIGJhc2VkIFxyXG4gICAgICAgICAgICAgICAgLy8gb24gZmlyc3QgdHJlYXRtZW50IG9mIHRoZSB0cmVhdG1lbnQgZHJvcGRvd24uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS90cmVhdG1lbnRzL2ZpbmQtYnktY2F0ZWdvcnlcIlxyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoZW5kcG9pbnQsIHtjYXRlZ29yeTogbmV3Q2F0ZWdvcmllc1swXS50aXRsZX0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihuZXdSZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBuZXdSZXNwb25zZS5kYXRhLnRyZWF0bWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3R5bGlzdHMgPSBuZXdUcmVhdG1lbnRzWzBdLnN0eWxpc3RzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudFN0YXRlKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudHM6IG5ld1RyZWF0bWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsaXN0czogbmV3U3R5bGlzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB1c2VyIGlzIG9rYXkgd2l0aCBmaXJzdCBjYXRlZ29yeSBvZiB0aGUgY2F0ZWdvcnkgZHJvcGRvd24gYW5kIGZpcnN0IHRyZWF0bWVudCBvZiB0aGUgdHJlYXRtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRyb3Bkb3duIGFuZCBmaXJzdCBzdHlsaXN0IG9mIHRoZSBzdHlsaXN0IGRyb3Bkb3duIHRoZW4gaGUvc2hlIHdvbid0IGJvdGhlciB0byBjaGFuZ2UgYW55IG9mIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aHJlZS4gSW4gdGhhdCBjYXNlIHVwZGF0ZSB0aGUgZXZlbnRJbmZvIHN0YXRlIHdpdGggdGhlIGZpcnN0IGNhdGVnb3J5LCBmaXJzdCB0cmVhdG1lbnQgYW5kIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGlzdCBhbmQgZmlyc3QgdHJlYXRtZW50J3MgZHVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudENhdGVnb3J5OiBuZXdDYXRlZ29yaWVzWzBdLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50TmFtZTogbmV3VHJlYXRtZW50c1swXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxpc3Q6IG5ld1N0eWxpc3RzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnREdXJhdGlvbjogbmV3VHJlYXRtZW50c1swXS5kdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gYWxlcnQoZXJyLnJlc3BvbnNlLmRhdGEubXNnKSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gYWxlcnQoZXJyLnJlc3BvbnNlLmRhdGEubXNnKSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJvcGRvd25PbmNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBldmVudEluZm9PbkNoYW5nZShldmVudCwgc2V0RXZlbnRJbmZvLCBldmVudFN0YXRlLCBzZXRFdmVudFN0YXRlKTtcclxuXHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgLy8gU3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzc1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkX2V2ZW50XCI+XHJcblxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17ZXZlbnRJbmZvLmV2ZW50RGF0ZX0gb25DaGFuZ2U9e2RhdGUgPT4gZXZlbnRJbmZvT25DaGFuZ2UoZGF0ZSwgc2V0RXZlbnRJbmZvKX0gLz5cclxuICAgICAgICAgICAgPFNlbGVjdFRpbWVcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTdGFydCBUaW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcInN0YXJ0VGltZVwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZXZlbnRJbmZvLnN0YXJ0VGltZX1cclxuICAgICAgICAgICAgICAgIHRpbWVzID0ge3RpbWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJbmZvID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIGV2ZW50SW5mb09uQ2hhbmdlID0ge2V2ZW50SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIDxEcm9wZG93bkxpc3RcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcInRyZWF0bWVudENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgIG5hbWVLZXkgPSBcInRpdGxlXCIgXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgPENhdGVnb3J5TGlzdCBcclxuICAgICAgICAgICAgICAgIGV2ZW50U3RhdGUgPSB7ZXZlbnRTdGF0ZX1cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50U3RhdGUgPSB7c2V0RXZlbnRTdGF0ZX1cclxuICAgICAgICAgICAgICAgIGV2ZW50SW5mbyA9IHtldmVudEluZm99XHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8gPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgZXZlbnRJbmZvT25DaGFuZ2UgPSB7ZXZlbnRJbmZvT25DaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8VHJlYXRtZW50TGlzdCBcclxuICAgICAgICAgICAgICAgIGV2ZW50U3RhdGUgPSB7ZXZlbnRTdGF0ZX1cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50U3RhdGUgPSB7c2V0RXZlbnRTdGF0ZX1cclxuICAgICAgICAgICAgICAgIGV2ZW50SW5mbyA9IHtldmVudEluZm99XHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8gPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgZXZlbnRJbmZvT25DaGFuZ2UgPSB7ZXZlbnRJbmZvT25DaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGlzdExpc3QgXHJcbiAgICAgICAgICAgICAgICBldmVudFN0YXRlID0ge2V2ZW50U3RhdGV9XHJcbiAgICAgICAgICAgICAgICBldmVudEluZm8gPSB7ZXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJbmZvID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIGV2ZW50SW5mb09uQ2hhbmdlID0ge2V2ZW50SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMb2NhdGlvbkxpc3QgXHJcbiAgICAgICAgICAgICAgICBldmVudFN0YXRlID0ge2V2ZW50U3RhdGV9XHJcbiAgICAgICAgICAgICAgICBldmVudEluZm8gPSB7ZXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJbmZvID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIGV2ZW50SW5mb09uQ2hhbmdlID0ge2V2ZW50SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPiAgXHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2xpZW50IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJjbGllbnROYW1lXCJcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZXZlbnRJbmZvLmNsaWVudE5hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiZ3JhY2UgaGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnRJbmZvT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2xpZW50IEVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImNsaWVudEVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZXZlbnRJbmZvLmNsaWVudEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcImdyYWNlLmhlYXJ0QGFiYy5jb21cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnRJbmZvT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2xpZW50IFBob25lXCJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiY2xpZW50UGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSA9IHtzZXRFdmVudEluZm99XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtldmVudEluZm8uY2xpZW50UGhvbmV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiKzg4IDAxNzE3MDYyODg0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkV2ZW50IERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZXZlbnREZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2V2ZW50SW5mby5ldmVudERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcImFueXRoaW5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkV2ZW50IFByaWNlXCJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJldmVudFByaWNlXCJcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZXZlbnRJbmZvLmV2ZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB7LyogPFN1Y2Nlc3NGYWlsTWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NGYWlsTWVzc2FnZSA9IHtzdWNjZXNzRmFpbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UgPSB7c2V0U3VjY2Vzc0ZhaWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDbG9zZUZvcm1CdXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbG9zZUZvcm0gPSB7ZGlzcGxheUhpZGVUcmVhdG1lbnRGb3JtfSBcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0VHJlYXRtZW50SW5mb30gXHJcbiAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8U2F2ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy8gVG8gcGFzcyB0byBhZGRVcGRhdGVMb2NhdGlvbiBmdW5jdGlvbi4gRW1wdHkgc3RyaW5nIHdpbGwgbWFrZSBodHRwIHJlcXVlc3QgdG8gYmFja2VuZCBhdCBcclxuICAgICAgICAgICAgICAgIC8vIGFkZF9sb2NhdGlvbiBlbmRwb2ludCwgZWxzZSB1cGRhdGUgcmVxdWVzdCB3aWxsIGJlIG1hZGUgdG8gYmFja2VuZCBcclxuICAgICAgICAgICAgICAgIF9pZCA9IHtldmVudEluZm8uZXZlbnRJZH0gXHJcbiAgICAgICAgICAgICAgICBkYXRhID0ge2V2ZW50SW5mb30gXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvciA9IHtzZXRWYWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgc2V0U3VjY2Vzc0ZhaWxNZXNzYWdlID0ge3NldFN1Y2Nlc3NGYWlsTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIGFkZE5ld0l0ZW0gPSB7YWRkVXBkYXRlRXZlbnR9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KHsgZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZSwgZXZlbnRJbmZvLCBzZXRFdmVudEluZm8sIGV2ZW50SW5mb09uQ2hhbmdlIH0pIHtcclxuXHJcbiAgICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGV2ZW50U3RhdGU7XHJcbiAgICBjb25zdCB7IHRyZWF0bWVudENhdGVnb3J5IH0gPSBldmVudEluZm87XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IENhdGVnb3J5PC9wPlxyXG4gICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJ0cmVhdG1lbnRDYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gZXZlbnRJbmZvT25DaGFuZ2UoZXZlbnQsIHNldEV2ZW50SW5mbywgZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZSl9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7IGNhdGVnb3JpZXMubGVuZ3RoICYmICF0cmVhdG1lbnRDYXRlZ29yeSA/IGNhdGVnb3JpZXNbMF0udGl0bGUgOiB0cmVhdG1lbnRDYXRlZ29yeSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXkgPSB7aW5kZXggKyAxfT57Y2F0ZWdvcnkudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRXZlbnRzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBFdmVudERldGFpbHMgPSAoeyBldmVudHMsIHRyZWF0bWVudElkLCBzZXRUcmVhdG1lbnRJZCB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2V2ZW50Ll9pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLmV2ZW50RGV0YWlsc19tb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiB0cmVhdG1lbnRJZCA9PT0gZXZlbnQuX2lkLnRvU3RyaW5nKCkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZXZlbnQudHJlYXRtZW50TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PiBzZXRUcmVhdG1lbnRJZChcIlwiKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWxzOyIsIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIEZvciBnb29nbGUgZm9udHMgYW5kIG90aGVyc1xyXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Db250cm9sUGFuZWwubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcbi8vIGltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudExpc3QgKCkge1xyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkRXZlbnQgKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzL2FkZC1ldmVudFwiO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBcInNhbXN1ci5yYWhtYW4zMzExQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogXCJUaGlzIGlzIGFuIGV2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoXCIyMDIxLTEwLTI1VDE1OjMwOjAwXCIpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3RpbWVab25lOiBcIkFzaWEvRGhha2FcIn0pLFxyXG4gICAgICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZShcIjIwMjEtMTAtMjVUMTY6MTU6MDBcIikudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7dGltZVpvbmU6IFwiQXNpYS9EaGFrYVwifSlcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJcIilcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuICAgICAgICAgICA8aDE+RXZlbnRzPC9oMT5cclxuICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEV2ZW50fT5BZGQgRXZlbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25MaXN0KHsgZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZSwgZXZlbnRJbmZvLCBzZXRFdmVudEluZm8sIGV2ZW50SW5mb09uQ2hhbmdlIH0pIHtcclxuXHJcbiAgICBjb25zdCB7IGxvY2F0aW9ucyB9ID0gZXZlbnRTdGF0ZTtcclxuICAgIGNvbnN0IHsgZXZlbnRMb2NhdGlvbiB9ID0gZXZlbnRJbmZvO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X2Ryb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBsb2NhdGlvbjwvcD5cclxuICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZXZlbnRMb2NhdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gZXZlbnRJbmZvT25DaGFuZ2UoZXZlbnQsIHNldEV2ZW50SW5mbywgZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZSl9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7IGxvY2F0aW9ucy5sZW5ndGggJiYgIWV2ZW50TG9jYXRpb24gPyBsb2NhdGlvbnNbMF0udGl0bGUgOmV2ZW50TG9jYXRpb24gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZSA9IFwiU2VsZWN0IHByb2R1Y3RcIj5TZWxlY3QgcHJvZHVjdDwvb3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChsb2NhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXkgPSB7aW5kZXggKyAxfT57bG9jYXRpb24udGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAhcHJvZHVjdC5hdmFpbGFiaWxpdHkgJiYgPE9wdGlvbkNvbXBvbmVudCBrZXkgPSB7aW5kZXggKyAxfSBwcm9kdWN0ID0ge3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIiwiXHJcblxyXG5cclxuXHJcbi8vIFN0eWxlcyBhcmUgaW4gU3R5bGlzdC5tb2R1bGUuY3NzXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdFRpbWUoeyBuYW1lLCBsYWJlbCwgdGltZXMsIHZhbHVlLCBldmVudEluZm9PbkNoYW5nZSwgc2V0RXZlbnRJbmZvIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdF90aW1lXCIgPlxyXG4gICAgICAgICAgICA8cD57bGFiZWx9PC9wPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7d2lkdGg6IFwiMTAwcHhcIn19IFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IGV2ZW50SW5mb09uQ2hhbmdlKGV2ZW50LCBzZXRFdmVudEluZm8pfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZSA9IFwiU2VsZWN0IHByb2R1Y3RcIj5TZWxlY3QgcHJvZHVjdDwvb3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgIHt0aW1lcy5tYXAoKHRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5ID0ge2luZGV4ICsgMX0gdmFsdWUgPSB7dGltZX0+e3RpbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAhcHJvZHVjdC5hdmFpbGFiaWxpdHkgJiYgPE9wdGlvbkNvbXBvbmVudCBrZXkgPSB7aW5kZXggKyAxfSBwcm9kdWN0ID0ge3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiIsIlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R5bGlzdExpc3QoeyBldmVudFN0YXRlLCBldmVudEluZm8sIHNldEV2ZW50SW5mbywgZXZlbnRJbmZvT25DaGFuZ2UgfSkge1xyXG5cclxuICAgIGNvbnN0IHsgc3R5bGlzdHMgfSA9IGV2ZW50U3RhdGU7XHJcbiAgICBjb25zdCB7IHN0eWxpc3QgfSA9IGV2ZW50SW5mbztcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IHN0eWxpc3Q8L3A+XHJcbiAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcInN0eWxpc3RcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IGV2ZW50SW5mb09uQ2hhbmdlKGV2ZW50LCBzZXRFdmVudEluZm8pfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RzLmxlbmd0aCAmJiAhc3R5bGlzdCA/IHN0eWxpc3RzWzBdIDogc3R5bGlzdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxvcHRpb24gdmFsdWUgPSBcIlNlbGVjdCBwcm9kdWN0XCI+U2VsZWN0IHByb2R1Y3Q8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICB7c3R5bGlzdHMubWFwKChzdHlsaXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleSA9IHtpbmRleCArIDF9PntzdHlsaXN0fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIXByb2R1Y3QuYXZhaWxhYmlsaXR5ICYmIDxPcHRpb25Db21wb25lbnQga2V5ID0ge2luZGV4ICsgMX0gcHJvZHVjdCA9IHtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiIsIlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJlYXRtZW50TGlzdCh7IGV2ZW50U3RhdGUsIGV2ZW50SW5mbywgc2V0RXZlbnRTdGF0ZSwgc2V0RXZlbnRJbmZvLCBldmVudEluZm9PbkNoYW5nZSB9KSB7XHJcblxyXG4gICAgY29uc3QgeyB0cmVhdG1lbnRzIH0gPSBldmVudFN0YXRlO1xyXG4gICAgY29uc3QgeyB0cmVhdG1lbnROYW1lIH0gPSBldmVudEluZm87XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IFRyZWF0bWVudDwvcD5cclxuICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwidHJlYXRtZW50TmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gZXZlbnRJbmZvT25DaGFuZ2UoZXZlbnQsIHNldEV2ZW50SW5mbywgZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZSl9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dHJlYXRtZW50cy5sZW5ndGggJiYgIXRyZWF0bWVudE5hbWUgPyB0cmVhdG1lbnRzWzBdLnRpdGxlIDogdHJlYXRtZW50TmFtZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxvcHRpb24gdmFsdWUgPSBcIlNlbGVjdCBwcm9kdWN0XCI+U2VsZWN0IHByb2R1Y3Q8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICB7dHJlYXRtZW50cy5tYXAoKHRyZWF0bWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXkgPSB7aW5kZXggKyAxfT57dHJlYXRtZW50LnRpdGxlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIXByb2R1Y3QuYXZhaWxhYmlsaXR5ICYmIDxPcHRpb25Db21wb25lbnQga2V5ID0ge2luZGV4ICsgMX0gcHJvZHVjdCA9IHtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiIsIi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudHNUYWJsZURhdGEgKHsgZXZlbnRzLCBzZXRFdmVudElkLCBldmVudFN0YXRlLCBzZXRFdmVudFN0YXRlLCBkZWxldGVFdmVudCB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7aW5kZXggKyAxfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+e2V2ZW50LnRpdGxlfTwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2V2ZW50LmV2ZW50TG9jYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5zdHlsaXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQudHJlYXRtZW50Q2F0ZWdvcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC50cmVhdG1lbnROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQuZXZlbnREdXJhdGlvbn0gbWludXRlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2V2ZW50LmV2ZW50UHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5lbmRUaW1lLnN1YnN0cmluZygwLCBldmVudC5lbmRUaW1lLmluZGV4T2YoXCJUXCIpKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2V2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuc3RhcnRUaW1lLmxlbmd0aCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5lbmRUaW1lLnN1YnN0cmluZyhldmVudC5lbmRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuZW5kVGltZS5sZW5ndGgpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQuY2xpZW50TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2V2ZW50LmNsaWVudEVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXZlbnQuY2xpZW50UGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldmVudC5zdGF0dXN9PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gIHNldEV2ZW50SWQoZXZlbnQuX2lkLnRvU3RyaW5nKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2V2ZW50Ll9pZC50b1N0cmluZygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2V2ZW50ID0+ICBkZWxldGVFdmVudChldmVudC50YXJnZXQudmFsdWUsIGV2ZW50U3RhdGUsIHNldEV2ZW50U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgKTtcclxufSIsIi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudHNUYWJsZUhlYWRlciAoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgIHsvKiA8dGg+VGl0bGU8L3RoPiAqL31cclxuICAgICAgICAgICAgICAgPHRoPkxvY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgPHRoPlN0eWxpc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICA8dGg+Q2F0ZWdvcnk8L3RoPlxyXG4gICAgICAgICAgICAgICA8dGg+VHJlYXRtZW50PC90aD5cclxuICAgICAgICAgICAgICAgPHRoPkR1cmF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgPHRoPkV2ZW50IFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgPHRoPkV2ZW50IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICA8dGg+U3RhcnQgVGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgIDx0aD5FbmQgVGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgIDx0aD5DbGllbnQgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgIDx0aD5DbGllbnQgRW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICA8dGg+Q2xpZW50IFBob25lPC90aD5cclxuICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICk7XHJcbn0iLCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bkxpc3QgKHsgbmFtZSwgbmFtZUtleSwgYmxhbmtPcHRpb25WYWx1ZSwgZGF0YSwgaGFuZGxlRHJvcGRvd25PbmNoYW5nZSB9KSB7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX2xpc3RcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lID0ge25hbWV9IG9uQ2hhbmdlID0ge2hhbmRsZURyb3Bkb3duT25jaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiXCI+e2JsYW5rT3B0aW9uVmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXkgPSB7aW5kZXggKyAxfSB2YWx1ZSA9IHtpdGVtW25hbWVLZXldfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtW25hbWVLZXldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuXHJcblJldXNhYmxlIERyb3Bkb3duL1NlbGVjdCBDb21wb25lbnRcclxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTI3ODkzNjMvcmVhY3QtaG93LXRvLWZpdC1qc29uLWFwaS1kYXRhLWludG8tcmV1c2FibGUtc2VsZWN0LWNvbXBvbmVudFxyXG5cclxuKi8iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21tb24tc3R5bGVzL0NvbW1vblN0eWxlcy5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvck1lc3NhZ2UoeyBlcnJvciwgbmFtZSwgdmFsdWUsIGNvbnRlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGVycm9yICYmICF2YWx1ZSAmJiBuYW1lICE9PSBcInJlbWFya3NcIiAmJiBuYW1lICE9PSBcImNsaWVudE5hbWVcIiAmJiBuYW1lICE9PSBcImNsaWVudFBob25lXCIgJiYgbmFtZSAhPT0gXCJldmVudERlc2NyaXB0aW9uXCJcclxuXHJcbiAgICAvLyB0cmVhdG1lbnQgaGFzIHJlbWFya3MgcHJvcGVydHkgd2hpY2ggaXMgbm90IGEgbWFuZGF0b3J5IGZpZWxkLiBTbyBpZiB1c2VyIGRvZXNuJ3Qgd2FudCB0byBhZGQgYSByZW1hcmsgd2Ugc2hvdWxkIGJlXHJcbiAgICAvLyBva2F5IHdpdGggdGhpcyBhbmQgd29uJ3Qgc2hvdyB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHAgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yX21lc3NhZ2V9IFxyXG4gICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogY29uZGl0aW9uID8gXCJibG9ja1wiIDogXCJub25lXCJ9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgKiB7Y29udGVudH1cclxuICAgICAgICA8L3A+ICBcclxuICAgICk7XHJcbn0iLCIvLyBDb21wb25lbnRzXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCJcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NvbW1vbi1zdHlsZXMvQ29tbW9uU3R5bGVzLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQgKHsgbGFiZWwsIHR5cGUsIG5hbWUsIHZhbHVlLCBwbGFjZWhvbGRlciwgb25DaGFuZ2UsIHNldERhdGEsIGVycm9yIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMuaW5wdXRfbGFiZWx9PntsYWJlbH08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIC8vIHN0eWxlID0ge3t3aWR0aDogKG5hbWUgPT09IFwiYWRkcmVzczFcIiB8fCBuYW1lID09PSBcImFkZHJlc3MyXCIgfHwgbmFtZSA9PT0gXCJ0aXRsZVwiKSAmJiBcIjM1MHB4XCIgfX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlID0ge3R5cGV9IFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfSBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0ge3BsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge29uQ2hhbmdlfSBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGVycm9yID0ge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0ge2Ake2xhYmVsfSBjYW4ndCBiZSBibGFua2B9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvL1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlQnV0dG9uKHsgX2lkLCBkYXRhLCBhZGROZXdJdGVtLCBzZXRFcnJvciwgc2V0U3VjY2Vzc0ZhaWxNZXNzYWdlIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZV9idXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy8gX2lkIGlzIGZvclxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7X2lkfSAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4gYWRkTmV3SXRlbShfaWQsIGRhdGEsIHNldEVycm9yLCBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBUYWJsZUhlYWRlciBmcm9tIFwiLi9UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgVGFibGVEYXRhIGZyb20gXCIuL1RhYmxlRGF0YVwiO1xyXG5cclxuY29uc3QgRGF0YVRhYmxlID0gKHsgdGFibGVGb3IsIHRhYmxlSGVhZGVycywgdGFibGVEYXRhLCBkeW5hbWljQ2xhc3MsIHNldEl0ZW1JZCwgb3BlbkRlbGV0ZVByb21wdCAgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB0YWJsZUhlYWRlcnMgPSB7dGFibGVIZWFkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlRGF0YSBcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUZvciA9IHt0YWJsZUZvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge3RhYmxlRGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldEl0ZW1JZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0IH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZTsiLCIvL1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZURhdGEgKHsgdGFibGVGb3IsIHRhYmxlRGF0YSwgc2V0SXRlbUlkLCBvcGVuRGVsZXRlUHJvbXB0IH0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0YWJsZURhdGEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3RhYmxlRGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRhdGEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUYWJsZSBkYXRhIGZpZWxkcyBtaWdodCBjb250ZW50IHBsYWluIG51bWJlcnMgYW5kIGFzIGluIEphdmFTY3JpcHQgbnVtYmVycyBkb24ndCBoYXZlIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNsdWRlIG1ldGhvZCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgYSBzdHJpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaW5jbHVkZXMoXCJWaWV3IERldGFpbHNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXkgPSB7aW5kZXggKyAxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKFwiLVwiKSArIDEsIHZhbHVlLmxlbmd0aCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2V2ZW50ID0+IHNldEl0ZW1JZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pbmNsdWRlcyhcIkRlbGV0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleSA9IHtpbmRleCArIDF9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKFwiLVwiKSArIDEsIHZhbHVlLmxlbmd0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7b3BlbkRlbGV0ZVByb21wdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleSA9IHtpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHt2YWx1ZX0+PGE+VmlldyBEZXRhaWxzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5ID0ge2luZGV4ICsgMX0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgKTtcclxufSIsIi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZUhlYWRlciAoeyB0YWJsZUhlYWRlcnMgfSkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge3RhYmxlSGVhZGVycy5tYXAoaGVhZGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleSA9IHtoZWFkZXJ9PntoZWFkZXJ9PC90aD5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGNvbnN0IGRheXNPZlRoZVdlZWsgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIk1vbmRheVwifSxcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiVHVlc2RheVwifSxcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiV2VkbmVzZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJUaHVyc2RheVwifSxcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiRnJpZGF5XCJ9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVzID0gW1xyXG4gICAgeyBpZDogMSwgdGltZTogXCIxMDowMFwiIH0sXHJcbiAgICB7IGlkOiAyLCB0aW1lOiBcIjEwOjMwXCIgfSxcclxuICAgIHsgaWQ6IDMsIHRpbWU6IFwiMTE6MDBcIiB9LFxyXG4gICAgeyBpZDogNCwgdGltZTogXCIxMTozMFwiIH0sXHJcbiAgICB7IGlkOiA1LCB0aW1lOiBcIjEyOjAwXCIgfSxcclxuICAgIHsgaWQ6IDYsIHRpbWU6IFwiMTI6MzBcIiB9LFxyXG4gICAgeyBpZDogNywgdGltZTogXCIxMzowMFwiIH0sXHJcbiAgICB7IGlkOiA4LCB0aW1lOiBcIjEzOjMwXCIgfSxcclxuICAgIHsgaWQ6IDksIHRpbWU6IFwiMTQ6MDBcIiB9LFxyXG4gICAgeyBpZDogMTAsIHRpbWU6IFwiMTQ6MzBcIiB9LFxyXG4gICAgeyBpZDogMTEsIHRpbWU6IFwiMTU6MDBcIiB9LFxyXG4gICAgeyBpZDogMTIsIHRpbWU6IFwiMTU6MzBcIiB9LFxyXG4gICAgeyBpZDogMTMsIHRpbWU6IFwiMTY6MDBcIiB9LFxyXG4gICAgeyBpZDogMTQsIHRpbWU6IFwiMTY6MzBcIiB9LFxyXG4gICAgeyBpZDogMTUsIHRpbWU6IFwiMTc6MDBcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvY2F0aW9uRGF0YVRhYmxlSGVhZGVycyA9IFtcclxuICAgIFwiVGl0bGVcIiwgXCJBZGRyZXNzMVwiLCBcIkFkZHJlc3MyXCIsIFwiQ2l0eVwiLCBcIkNvdW50cnlcIiwgXCJQaG9uZVwiLCBcIlppcCBDb2RlXCIsIFwiQWN0aW9uXCIsIFwiRGVsZXRlXCJcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgPSBbXCJUaXRsZVwiLCBcIkFjdGlvblwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmVhdG1lbnREYXRhVGFibGVIZWFkZXJzID0gW1wiQ2F0ZWdvcnlcIiwgXCJUaXRsZVwiLCBcIkRlc2NyaXB0aW9uXCIsIFwiRHVyYXRpb25cIiwgXCJQcmljZVwiLCBcIlJlbWFya3NcIiwgXCJBY3Rpb25cIiwgXCJEZWxldGVcIl07XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGlzdERhdGFUYWJsZUhlYWRlcnMgPSBbXCJGaXJzdCBOYW1lXCIsIFwiTGFzdCBOYW1lXCIsIFwiRW1haWxcIiwgXCJQYXNzd29yZFwiLCBcIkRldGFpbHNcIl07XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzRGF0YVRhYmxlSGVhZGVycyA9IFtcclxuICAgIFwiTG9jYXRpb25cIiwgXCJDYXRlZ29yeVwiLCBcIlRyZWF0bWVudFwiLCBcIlN0eWxpc3RcIiwgXCJFdmVudCBEYXRlXCIsIFwiU3RhcnQgVGltZVwiLCBcIkVuZCBUaW1lXCIsIFwiQ2xpZW50XCIsIFwiQWN0aW9uXCIsIFwiRGVsZXRlXCJcclxuXTtcclxuIiwiLy8gTW9kdWxlc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVwZGF0ZUV2ZW50ID0gYXN5bmMgKGV2ZW50SWQsIGV2ZW50SW5mbywgc2V0VmFsaWRhdGlvbkVycm9yLCBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UpID0+IHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coZXZlbnRJbmZvKTtcclxuICAgIGNvbnN0IHsgZXZlbnREYXRlLCBzdGFydFRpbWUsIGVuZFRpbWUsIGNsaWVudEVtYWlsLCBldmVudFByaWNlIH0gPSBldmVudEluZm9cclxuXHJcbiAgICBpZighZXZlbnREYXRlKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZGF0ZVwiKTtcclxuXHJcbiAgICAvLyBDbGllbnQgZW1haWwgYW5kIGV2ZW50IHByaWNlIG11c3QgYWxzbyBiZSBwcm92aWRlZC4gT3RoZXJ3aXNlIHJldHVybiB3aXRoIGFuIGVycm9yIG1lc3NhZ2VcclxuICAgIGlmKCFjbGllbnRFbWFpbCB8fCAhZXZlbnRQcmljZSkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAvLyBpZiBldmVudFByaWNlIGlzIG1pbnVzIGZpZ3VyZSB0aGVuXHJcbiAgICBpZihOdW1iZXIoZXZlbnRQcmljZSkgPD0gMCkgcmV0dXJuIGFsZXJ0KFwiUHJpY2UgY2FuJ3QgYmUgZXF1YWwgdG8gb3IgbGVzcyB0aGFuIDBcIik7XHJcblxyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgZW5kcG9pbnQgaXMgYWRkIGV2ZW50XHJcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50cy9hZGQtZXZlbnRcIjtcclxuXHJcbiAgICAgICAgLy8gQnV0IGlmIGV2ZW50SWQgaXMgbm90IGVtcHR5IHRoZW4gdXBkYXRlIHJlcXVlc3Qgc2hvdWxkIGJlIHNlbnRcclxuICAgICAgICBpZiAoZXZlbnRJZCkgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzL3VwZGF0ZVwiXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgZXZlbnRJbmZvKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICAgICAgc2V0U3VjY2Vzc0ZhaWxNZXNzYWdlKHJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgICAgICAvL3NldFN1Y2Nlc3NGYWlsTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi8vXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50SW5mb09uQ2hhbmdlID0gYXN5bmMgKGV2ZW50LCBzZXRFdmVudEluZm8sIGV2ZW50U3RhdGUsIHNldEV2ZW50U3RhdGUpID0+IHtcclxuXHJcbiAgICAvLyBpZiB1c2VyIGlzIHRyeWluZyB0byBiYWNrc3BhY2Ugb24gZGF0ZSBwaWNrZXIgYW5kIGVtcHR5IHRoZSBpbnB1dCBmaWVsZCB0aGVuIGp1c3QgcmV0dXJuLiBJdCB3aWxsIHByZXZlbnRcclxuICAgIC8vIGFwcCBmcm9tIGJyZWFraW5nXHJcbiAgICBpZihldmVudCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGlmIHR5cGVvZiBldmVudC50YXJnZXQgaXMgdW5kZWZpbmVkIHRoYXQgbWVhbnMgdXNlciBpcyBwaWNraW5nIGEgZGF0ZVxyXG4gICAgaWYodHlwZW9mIGV2ZW50LnRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnQpLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGV2ZW50KS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZXZlbnQpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYCR7ZGF0ZX0tJHttb250aH0tJHt5ZWFyfWApXHJcblxyXG4gICAgICAgIHJldHVybiBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRlOiBldmVudFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcblxyXG4gICAgLy8gSWYgbmFtZSBpcyB0cmVhdG1lbnRDYXRlZ29yeSB0aGVuIHVzZXIgaXMgc2VsZWN0aW5nIGEgY2F0ZWdvcnkuIFNvIHVwZGF0ZSB0aGUgZXZlbnRTdGF0ZSBvZiB0cmVhdG1lbnRzIHdpdGggcmVsYXRlZCBcclxuICAgIC8vIHRyZWF0bWVudHMgb2Ygc2VsZWN0ZWQgY2F0ZWdvcnkgYW5kIHVwZGF0ZSB0aGUgZXZlbnRTdGF0ZSBvZiBzdHlsaXN0cyB3aXRoIHRoZSByZWxhdGVkIHN0eWxpc3RzIG9mIHRoZSBmaXJzdCB0cmVhdG1lbnRcclxuICAgIGlmKG5hbWUgPT09IFwidHJlYXRtZW50Q2F0ZWdvcnlcIikge1xyXG5cclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS90cmVhdG1lbnRzL2ZpbmQtYnktY2F0ZWdvcnlcIjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCB7Y2F0ZWdvcnk6IHZhbHVlfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0cmVhdG1lbnRzID0gcmVzcG9uc2UuZGF0YS50cmVhdG1lbnRzO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsaXN0cyA9IHRyZWF0bWVudHNbMF0uc3R5bGlzdHM7XHJcblxyXG4gICAgICAgICAgICBzZXRFdmVudFN0YXRlKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFZhbCwgdHJlYXRtZW50cywgc3R5bGlzdHMgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB2YWx1ZXMgb2YgdHJlYXRtZW50Q2F0ZWdvcnksIHRyZWF0bWVudCwgc3R5bGlzdCBhbmQgZXZlbnREdXJhdGlvbiBvZiBldmVudEluZm8gc3RhdGUgbXVzdCBhbHNvIGNoYW5nZSBiYXNlZCBvbiBcclxuICAgICAgICAgICAgLy8gY2F0ZWdvcnkgY2hhbmdlLiB0cmVhdG1lbnQgdmFsdWUgd2lsbCBiZSBmaXJzdCB0cmVhdG1lbnQgb2YgdGhlIHVwZGF0ZWQgdHJlYXRtZW50IGxpc3QsIHN0eWxpc3QgdmFsdWUgd2lsbCBcclxuICAgICAgICAgICAgLy8gYmUgZmlyc3Qgc3R5bGlzdCBvZiB0aGUgc3R5bGlzdHMgb2YgdGhlIGZpcnN0IHRyZWF0bWVudCBhbmQgZXZlbnREdXJhdGlvbiB3aWxsIGJlIHRoZSBkdXJhdGlvbiBvZiB0aGUgZmlyc3RcclxuICAgICAgICAgICAgLy8gdHJlYXRtZW50J3MgZHVyYXRpb25cclxuICAgICAgICAgICAgcmV0dXJuIHNldEV2ZW50SW5mbyhjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRDYXRlZ29yeTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50TmFtZTogdHJlYXRtZW50c1swXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsaXN0OiBzdHlsaXN0c1swXSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudER1cmF0aW9uOiB0cmVhdG1lbnRzWzBdLmR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHN0eWxpc3RzIG9mIGV2ZW50U3RhdGUgbXVzdCBiZSByZXBvcHVsYXRlZCB3aXRoIHRoZSBzdHlsaXN0cyBvZiBzZWxlY3RlZCB0cmVhdG1lbnQuIEFuZCB0aGUgc3R5bGlzdCB2YWx1ZSBvZiBcclxuICAgIC8vIGV2ZW50SW5mbyBzdGF0ZSB3aWxsIGJlIG5ldyBzdHlsaXN0cyBhcnJheSdzIGZpcnN0IHZhbHVlLiBcclxuICAgIGlmKG5hbWUgPT09IFwidHJlYXRtZW50TmFtZVwiKSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBldmVudFN0YXRlLnRyZWF0bWVudHMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWF0bWVudCA9IGV2ZW50U3RhdGUudHJlYXRtZW50c1t4XTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZih0cmVhdG1lbnQudGl0bGUgPT09IHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRTdGF0ZShjdXJyZW50VmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50VmFsLCBzdHlsaXN0czogdHJlYXRtZW50LnN0eWxpc3RzIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50TmFtZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxpc3Q6IHRyZWF0bWVudC5zdHlsaXN0c1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnREdXJhdGlvbjogdHJlYXRtZW50LmR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbn0iLCIvLyBNb2R1bGVzXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEV2ZW50RGF0YSA9IGFzeW5jIChldmVudFN0YXRlLCBuZXdTa2lwLCBzZXRFdmVudFN0YXRlLCBzZXRFdmVudFRhYmxlRGF0YSkgPT4ge1xyXG5cclxuICAgIGxldCB7IHNlYXJjaFRleHQsIGxpbWl0IH0gPSBldmVudFN0YXRlO1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHNcIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIHsgc2VhcmNoVGV4dCwgc2tpcDogbmV3U2tpcCwgbGltaXQgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXZlbnRzLCBkYXRhTGVuZ3RoIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICBzZXRFdmVudFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBldmVudHMsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwLFxyXG4gICAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZXZlbnRMb2NhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJlYXRtZW50Q2F0ZWdvcnksIFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRyZWF0bWVudE5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZygwLCBldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuc3RhcnRUaW1lLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZW5kVGltZS5zdWJzdHJpbmcoZXZlbnQuZW5kVGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LmVuZFRpbWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jbGllbnRFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7ZXZlbnQuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICBgRGVsZXRlLSR7ZXZlbnQuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0RXZlbnRUYWJsZURhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgLy8gc2V0U3VjY2Vzc0ZhaWxNZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZylcclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IHRpbWVzID0gW1xyXG4gICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICBcIjEzOjAwXCIsIFwiMTM6MTVcIiwgXCIxMzozMFwiLCBcIjEzOjQ1XCIsIFwiMTQ6MDBcIiwgXCIxNDoxNVwiLCBcIjE0OjMwXCIsIFwiMTQ6NDVcIiwgXCIxNTowMFwiLCBcIjE1OjE1XCIsIFwiMTU6MzBcIiwgXCIxNTo0NVwiLCBcclxuICAgIFwiMTY6MDBcIiwgXCIxNjoxNVwiLCBcIjE2OjMwXCIsIFwiMTY6NDVcIiwgXCIxNzowMFwiXHJcbl0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBeGlvcyhtZXRob2QsIHVybCwgYm9keSwgaGFwcGVuaW5nKSB7XHJcblxyXG4gICAgLy8gLy8gTmVlZCB0byBwdXQgZm9sbG93aW5nIHRocmVlIGluIHRoZSB1c2VFZmZlY3QncyBkZXBlbmRlY3kgYXJyYXkgdG8gYWxsb3cgZm9yIGR5bmFtaWMgZGF0YSBmZXRjaGluZyBiYXNlZCBvbiB1c2VyJ3MgXHJcbiAgICAvLyAvLyBzZWFyY2ggaW5wdXQsIG5hdmlnYXRpb24gdG8gcHJldmlvdXMgYW5kIG5leHQgaXRlbXMuXHJcbiAgICAvLyBsZXQgc2VhcmNoVGV4dCA9IFwiXCI7XHJcbiAgICAvLyBsZXQgc2tpcCA9IDA7XHJcbiAgICAvLyBsZXQgbGltaXQgPSAwO1xyXG5cclxuICAgIC8vIC8vIElmIGl0J3MgYSBwb3N0IHJlcXVlc3QgdGhlbiBib2R5IHdpbGwgY29udGFpbiBzZWFyY2hUZXh0LCBza2lwIGFuZCBsaW1pdC4gVXBkYXRlIHRoZSBhYm92ZSB0aHJlZSB3aXRoIHRoZSBib2R5J3MgdmFsdWVzXHJcbiAgICAvLyBpZihib2R5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAvLyAgICAgc2VhcmNoVGV4dCA9IGJvZHkuc2VhcmNoVGV4dDtcclxuICAgIC8vICAgICBza2lwID0gYm9keS5za2lwO1xyXG4gICAgLy8gICAgIGxpbWl0ID0gYm9keS5saW1pdFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRleHQsIHNraXAsIGxpbWl0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1ldGhvZCwgdXJsLCBib2R5KTtcclxuXHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdG90YWxEYXRhQ291bnQsIHNldFRvdGFsRGF0YUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7IG1ldGhvZCwgdXJsLCBkYXRhOiBib2R5IH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGRhdGEgYXJlIGJlaW5nIGZldGNoZWQgd2l0aCBnZXQgbWV0aG9kIHRoZW4gYW4gYXJyYXkgb2YganNvbiBvYmplY3RzIGhhcyBiZWVuIHNlbnQgZnJvbSBiYWNrZW5kXHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkobmV3RGF0YSkpIHJldHVybiBzZXREYXRhKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pdGVtcyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVsc2UsIGRhdGEgYXJlIGJlaW5nIGZldGNoZWQgd2l0aCBwb3N0IG1ldGhvZC4gU28gYW4gb2JqZWN0IGhhcyBiZWVuIHNlbnQgZnJvbSBiYWNrZW5kIHdoaWNoIGNvbnRhaW5zIGRhdGEgYW5kXHJcbiAgICAgICAgICAgIC8vIHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsSXRlbUNvdW50IH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YShpdGVtcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUb3RhbERhdGFDb3VudCh0b3RhbEl0ZW1Db3VudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgICAgIGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW3VybCwgaGFwcGVuaW5nXSk7IFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9O1xyXG5cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiLy8gZXZlbnQtbW9kaWZpZXJzXHJcbmltcG9ydCB7IGZldGNoRXZlbnREYXRhIH0gZnJvbSBcIi4uLy4uL2xpYnMvZXZlbnQtbW9kaWZpZXJzL2ZldGNoRXZlbnREYXRhXCI7XHJcbmltcG9ydCB7IGV2ZW50c0RhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG5cclxuXHJcbi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyAvLyBGb3IgUmVkaXJlY3RpbmcgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIEZvciBnb29nbGUgZm9udHMgYW5kIG90aGVyc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvRXZlbnRzLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuXHJcbi8vSW1hZ2VzXHJcbmltcG9ydCBsb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9jYXJ0b24td29tYW4uanBnXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9FdmVudExpc3RcIjtcclxuaW1wb3J0IEFkZEV2ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvQWRkRXZlbnRcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcbmltcG9ydCBFdmVudERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9FdmVudERldGFpbHNcIjtcclxuaW1wb3J0IEV2ZW50c1RhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvZXZlbnRzLXRhYmxlL0V2ZW50c1RhYmxlSGVhZGVyXCI7XHJcbmltcG9ydCBFdmVudHNUYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9ldmVudHMtdGFibGUvRXZlbnRzVGFibGVEYXRhXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzICgpIHtcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW3RyZWF0bWVudElkLCBzZXRUcmVhdG1lbnRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0FkZGluZ1VwZGF0aW5nLCBzZXRJc0FkZGluZ1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtldmVudFRhYmxlRGF0YSwgc2V0RXZlbnRUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V2ZW50U3RhdGUsIHNldEV2ZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGV2ZW50czogW10sXHJcbiAgICAgICAgbG9jYXRpb25zOiBbXSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICB0cmVhdG1lbnRzOiBbXSxcclxuICAgICAgICBzdHlsaXN0czogW10sXHJcbiAgICAgICAgc2VhcmNoVGV4dDogXCJcIixcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBkYXRhTGVuZ3RoOiAwXHJcbiAgICB9KTtcclxuICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaEV2ZW50RGF0YShldmVudFN0YXRlLCBldmVudFN0YXRlLnNraXAsIHNldEV2ZW50U3RhdGUsIHNldEV2ZW50VGFibGVEYXRhKTtcclxuICAgICAgIFxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiBcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZSA9IHt7ZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGhlaWdodDogXCIxMDB2aFwifX0+XHJcbiAgICAgICAgICAgIDxDb250cm9sUGFuZWwgLz5cclxuICAgICAgICAgICAgPEFkZEV2ZW50IC8+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRFdmVudFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSB7c2VhcmNoVHJlYXRtZW50c30gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERpc3BsYXlGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRkIEV2ZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlRXZlbnRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ30gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbj5BZGQgRXZlbnQ8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7ZXZlbnRzRGF0YVRhYmxlSGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7ZXZlbnRUYWJsZURhdGF9IFxyXG4gICAgICAgICAgICAgICAgdGFibGVGb3IgPSBcImV2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0VHJlYXRtZW50SWR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RXZlbnREZXRhaWxzXHJcbiAgICAgICAgICAgICAgICBldmVudHMgPSB7ZXZlbnRTdGF0ZS5ldmVudHN9XHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRJZCA9IHt0cmVhdG1lbnRJZH0gXHJcbiAgICAgICAgICAgICAgICBzZXRUcmVhdG1lbnRJZCA9IHtzZXRUcmVhdG1lbnRJZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvY2FydG9uLXdvbWFuLjlhNWI4ZTJhMTg1NGJmZTA1NTYxNjVhMTQ3ZTBmYTE4LmpwZ1wiLFwiaGVpZ2h0XCI6MTMwMCxcIndpZHRoXCI6MTMwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZjYXJ0b24td29tYW4uOWE1YjhlMmExODU0YmZlMDU1NjE2NWExNDdlMGZhMTguanBnJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZ1wiLFwiaGVpZ2h0XCI6NDAwMCxcIndpZHRoXCI6NjAwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZyYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guZWNiOGNjNDcyMjEzNzkwNGQ3MDIyYzU5MTgzNDlhNmYuanBnJnc9OCZxPTcwXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFkbWluX2FyZWFcIjogXCJDb250cm9sUGFuZWxfYWRtaW5fYXJlYV9fMWt1VVZcIixcblx0XCJjb250cm9sX3BhbmVsXCI6IFwiQ29udHJvbFBhbmVsX2NvbnRyb2xfcGFuZWxfXzNnLVNEXCIsXG5cdFwiY3JlYXRlX25ld19ldmVudFwiOiBcIkNvbnRyb2xQYW5lbF9jcmVhdGVfbmV3X2V2ZW50X18yLTE1QlwiLFxuXHRcImV2ZW50X2luZm9cIjogXCJDb250cm9sUGFuZWxfZXZlbnRfaW5mb19fM0RFWUNcIixcblx0XCJldmVudF9pbmZvX2RpdlwiOiBcIkNvbnRyb2xQYW5lbF9ldmVudF9pbmZvX2Rpdl9fMy1KYlhcIixcblx0XCJpbnB1dF9sYWJlbFwiOiBcIkNvbnRyb2xQYW5lbF9pbnB1dF9sYWJlbF9fMWJSZ2dcIixcblx0XCJpbnB1dF9maWVsZFwiOiBcIkNvbnRyb2xQYW5lbF9pbnB1dF9maWVsZF9fMURXczdcIixcblx0XCJ0ZXh0X2lucHV0XCI6IFwiQ29udHJvbFBhbmVsX3RleHRfaW5wdXRfXzMydnhXXCIsXG5cdFwicWFfY29udGVudFwiOiBcIkNvbnRyb2xQYW5lbF9xYV9jb250ZW50X19Qd3ZJZFwiLFxuXHRcInFhX3RpdGxlXCI6IFwiQ29udHJvbFBhbmVsX3FhX3RpdGxlX18xWXhlLVwiLFxuXHRcInFhX2hlYWRlcnNcIjogXCJDb250cm9sUGFuZWxfcWFfaGVhZGVyc19fMnhWdFRcIixcblx0XCJxYV9xdWVzdGlvbl9oZWFkZXJcIjogXCJDb250cm9sUGFuZWxfcWFfcXVlc3Rpb25faGVhZGVyX18zSGtfb1wiLFxuXHRcInFhX2Fuc3dlcl9oZWFkZXJcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX2hlYWRlcl9fM2tUc0JcIixcblx0XCJxYV9hbnN3ZXJfdGl0bGVcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX3RpdGxlX18ycG00elwiLFxuXHRcInFhX2Fuc3dlcl9ibGFua1wiOiBcIkNvbnRyb2xQYW5lbF9xYV9hbnN3ZXJfYmxhbmtfXzFBd1RGXCIsXG5cdFwicWFfbWFpbl9jb250ZW50XCI6IFwiQ29udHJvbFBhbmVsX3FhX21haW5fY29udGVudF9fdElDS0ZcIixcblx0XCJxYV9xdWVzdGlvbl9jb250ZW50XCI6IFwiQ29udHJvbFBhbmVsX3FhX3F1ZXN0aW9uX2NvbnRlbnRfXzNfeWppXCIsXG5cdFwicWFfYW5zd2VyX2NvbnRlbnRcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX2NvbnRlbnRfX2EtNF9UXCIsXG5cdFwicWFfYW5zd2VyX3RleHRfaW5wdXRcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX3RleHRfaW5wdXRfXzF6NDhrXCIsXG5cdFwicWFfYW5zd2VyX3JhZGlvX2lucHV0XCI6IFwiQ29udHJvbFBhbmVsX3FhX2Fuc3dlcl9yYWRpb19pbnB1dF9faW9TTmtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV2ZW50RGV0YWlsc19tb2RhbFwiOiBcIkV2ZW50c19ldmVudERldGFpbHNfbW9kYWxfXzJ2TmpHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uX2hlYWRlclwiOiBcIkNvbW1vblN0eWxlc19zZWN0aW9uX2hlYWRlcl9fMWh6OGJcIixcblx0XCJzZWN0aW9uSGVhZGVyX2NvbnRlbnRcIjogXCJDb21tb25TdHlsZXNfc2VjdGlvbkhlYWRlcl9jb250ZW50X18zcmJGOVwiLFxuXHRcInNlYXJjaFwiOiBcIkNvbW1vblN0eWxlc19zZWFyY2hfXzNzb09tXCIsXG5cdFwiYWRtaW5fYWRkX2Zvcm1cIjogXCJDb21tb25TdHlsZXNfYWRtaW5fYWRkX2Zvcm1fXzJPbHFqXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkNvbW1vblN0eWxlc19idXR0b25zX19fem1tMlwiLFxuXHRcInByb2ZpbGVfcGljdHVyZVwiOiBcIkNvbW1vblN0eWxlc19wcm9maWxlX3BpY3R1cmVfXzJxVmJCXCIsXG5cdFwiaW1hZ2VfdXBsb2FkZXJcIjogXCJDb21tb25TdHlsZXNfaW1hZ2VfdXBsb2FkZXJfXzF6R25NXCIsXG5cdFwidXNlcl9pbmZvX2NvbnRhaW5lclwiOiBcIkNvbW1vblN0eWxlc191c2VyX2luZm9fY29udGFpbmVyX18zUW94TFwiLFxuXHRcInVzZXJfaW5mb1wiOiBcIkNvbW1vblN0eWxlc191c2VyX2luZm9fX01jWjhDXCIsXG5cdFwiYmFzaWNfaW5mb19pbnB1dHNcIjogXCJDb21tb25TdHlsZXNfYmFzaWNfaW5mb19pbnB1dHNfXzFUam8zXCIsXG5cdFwiZW1haWxfaW5wdXRzXCI6IFwiQ29tbW9uU3R5bGVzX2VtYWlsX2lucHV0c19fMTFETWRcIixcblx0XCJwYXNzd29yZF9pbnB1dHNcIjogXCJDb21tb25TdHlsZXNfcGFzc3dvcmRfaW5wdXRzX18yOUVqalwiLFxuXHRcImlucHV0XCI6IFwiQ29tbW9uU3R5bGVzX2lucHV0X18yUjJmMVwiLFxuXHRcImlucHV0X2xhYmVsXCI6IFwiQ29tbW9uU3R5bGVzX2lucHV0X2xhYmVsX18xc201NVwiLFxuXHRcImltYWdlX3ByZXZpZXdcIjogXCJDb21tb25TdHlsZXNfaW1hZ2VfcHJldmlld19fMXdXS2hcIixcblx0XCJpbWFnZV9maWxlX2lucHV0XCI6IFwiQ29tbW9uU3R5bGVzX2ltYWdlX2ZpbGVfaW5wdXRfXzNtR0FYXCIsXG5cdFwiaW1hZ2VfZmlsZW5hbWVcIjogXCJDb21tb25TdHlsZXNfaW1hZ2VfZmlsZW5hbWVfXzFPWmttXCIsXG5cdFwiaW1hZ2VfdXBsb2FkX2J1dHRvblwiOiBcIkNvbW1vblN0eWxlc19pbWFnZV91cGxvYWRfYnV0dG9uX18zTTgxSFwiLFxuXHRcImVycm9yX21lc3NhZ2VcIjogXCJDb21tb25TdHlsZXNfZXJyb3JfbWVzc2FnZV9fM0ZMdHlcIixcblx0XCJzdWNjZXNzRmFpbF9tZXNzYWdlXCI6IFwiQ29tbW9uU3R5bGVzX3N1Y2Nlc3NGYWlsX21lc3NhZ2VfXzJmeUlKXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkNvbnRyb2xQYW5lbCIsImNvbnRyb2xfcGFuZWwiLCJheGlvcyIsIkRhdGVQaWNrZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF4aW9zIiwidGltZXMiLCJldmVudEluZm9PbkNoYW5nZSIsImFkZFVwZGF0ZUV2ZW50IiwiRHJvcGRvd25MaXN0IiwiU2VsZWN0VGltZSIsIkNhdGVnb3J5TGlzdCIsIlRyZWF0bWVudExpc3QiLCJMb2NhdGlvbkxpc3QiLCJJbnB1dCIsIlN0eWxpc3RMaXN0IiwiU2F2ZUJ1dHRvbiIsIkFkZEV2ZW50IiwidHJlYXRtZW50SW5mbyIsInNldFRyZWF0bWVudEluZm8iLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsImRpc3BsYXlIaWRlVHJlYXRtZW50Rm9ybSIsInN1Y2Nlc3NGYWlsTWVzc2FnZSIsInNldFN1Y2Nlc3NGYWlsTWVzc2FnZSIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsImV2ZW50U3RhdGUiLCJzZXRFdmVudFN0YXRlIiwibG9jYXRpb25zIiwiY2F0ZWdvcmllcyIsInRyZWF0bWVudHMiLCJzdHlsaXN0cyIsImV2ZW50SW5mbyIsInNldEV2ZW50SW5mbyIsImV2ZW50SWQiLCJldmVudERhdGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidHJlYXRtZW50Q2F0ZWdvcnkiLCJ0cmVhdG1lbnROYW1lIiwic3R5bGlzdCIsInN0eWxpc3RFbWFpbCIsImV2ZW50TG9jYXRpb24iLCJldmVudER1cmF0aW9uIiwiY2xpZW50TmFtZSIsImNsaWVudEVtYWlsIiwiY2xpZW50UGhvbmUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRQcmljZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImN1cnJlbnRWYWwiLCJkYXRhIiwibGVuZ3RoIiwidGl0bGUiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJtc2ciLCJuZXdDYXRlZ29yaWVzIiwiZW5kcG9pbnQiLCJwb3N0IiwiY2F0ZWdvcnkiLCJuZXdSZXNwb25zZSIsIm5ld1RyZWF0bWVudHMiLCJuZXdTdHlsaXN0cyIsImR1cmF0aW9uIiwiZXJyIiwiaGFuZGxlRHJvcGRvd25PbmNoYW5nZSIsImV2ZW50IiwiZGF0ZSIsIm1hcCIsImluZGV4IiwiRXZlbnREZXRhaWxzIiwiZXZlbnRzIiwidHJlYXRtZW50SWQiLCJzZXRUcmVhdG1lbnRJZCIsImV2ZW50RGV0YWlsc19tb2RhbCIsImRpc3BsYXkiLCJfaWQiLCJ0b1N0cmluZyIsInVzZVJvdXRlciIsIkltYWdlIiwiSGVhZCIsIkV2ZW50TGlzdCIsImFkZEV2ZW50IiwiZW1haWwiLCJzdW1tYXJ5Iiwic3RhcnQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZSIsImVuZCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwid2lkdGgiLCJ0aW1lIiwidHJlYXRtZW50IiwiRXZlbnRzVGFibGVEYXRhIiwic2V0RXZlbnRJZCIsImRlbGV0ZUV2ZW50Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInN0YXR1cyIsIkV2ZW50c1RhYmxlSGVhZGVyIiwibmFtZUtleSIsImJsYW5rT3B0aW9uVmFsdWUiLCJpdGVtIiwiRXJyb3JNZXNzYWdlIiwiY29udGVudCIsImNvbmRpdGlvbiIsImVycm9yX21lc3NhZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInNldERhdGEiLCJpbnB1dCIsImlucHV0X2xhYmVsIiwiYWRkTmV3SXRlbSIsInNldEVycm9yIiwiVGFibGVIZWFkZXIiLCJUYWJsZURhdGEiLCJEYXRhVGFibGUiLCJ0YWJsZUZvciIsInRhYmxlSGVhZGVycyIsInRhYmxlRGF0YSIsImR5bmFtaWNDbGFzcyIsInNldEl0ZW1JZCIsIm9wZW5EZWxldGVQcm9tcHQiLCJpbmNsdWRlcyIsInRhcmdldCIsImlkIiwiaGVhZGVyIiwiZGF5c09mVGhlV2VlayIsImxvY2F0aW9uRGF0YVRhYmxlSGVhZGVycyIsImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsInRyZWF0bWVudERhdGFUYWJsZUhlYWRlcnMiLCJzdHlsaXN0RGF0YVRhYmxlSGVhZGVycyIsImV2ZW50c0RhdGFUYWJsZUhlYWRlcnMiLCJOdW1iZXIiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1lc3NhZ2UiLCJ4IiwiZmV0Y2hFdmVudERhdGEiLCJuZXdTa2lwIiwic2V0RXZlbnRUYWJsZURhdGEiLCJzZWFyY2hUZXh0IiwibGltaXQiLCJza2lwIiwiZGF0YUxlbmd0aCIsImN1cnJlbnRWYWx1ZSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwicHVzaCIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJoYXBwZW5pbmciLCJ0b3RhbERhdGFDb3VudCIsInNldFRvdGFsRGF0YUNvdW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtcyIsInRvdGFsSXRlbUNvdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJpIiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIkV2ZW50cyIsImV2ZW50VGFibGVEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==
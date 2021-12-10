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
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/data */ "./libs/data.js");
/* harmony import */ var _reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reusable-components/DropdownList */ "./components/reusable-components/DropdownList.js");
/* harmony import */ var _reusable_components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reusable-components/Input */ "./components/reusable-components/Input.js");
/* harmony import */ var _reusable_components_SaveButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reusable-components/SaveButton */ "./components/reusable-components/SaveButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\AddEvent.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React Modules





 // event-modifiers
// import { handleChange } from "../../../libs/event-modifiers/handleChange";
// import { addUpdateEvent } from "../../../libs/event-modifiers/addUpdateEvent";
// Components



 // import CloseFormButton from "../../reusable-components/CloseFormButton";
// Stylesheet

 // import styles from "../../../styles/locations/AddLocation.module.css"
// import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";


function AddEvent({
  locations,
  categories,
  treatments,
  eventInfo,
  setEventInfo,
  isAddingUpdating,
  setIsAddingUpdating,
  validationError,
  addUpdateEvent
}) {
  const {
    0: newTreatments,
    1: setNewTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    0: stylists,
    1: setStylists
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);

  function dateOnChange(date) {
    return setEventInfo(currentVal => {
      return _objectSpread(_objectSpread({}, currentVal), {}, {
        eventDate: date
      });
    });
  }

  function handleChange(event) {
    // Destructuring event.target
    const {
      name,
      value
    } = event.target; // If user is selecting/unselecting a category

    if (name === "treatmentCategory") {
      // If user is unselecting the category
      if (!value) {
        // After selecting the category user might also have selected a treatment and a stylist. If user has 
        // selected a treatment then values of eventDuration and eventPrice have also been updated with
        // duration and price info of the treatment. So they all must be blank again now. 
        setEventInfo(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            treatmentCategory: value,
            treatmentName: "",
            stylist: "",
            eventDuration: 0,
            eventPrice: 0
          });
        }); // Hide the treatment and stylist list after user's unselecting the category 

        setNewTreatments(null);
        return setStylists(null);
      } // if user is selecting a category then filter the treatments list with the category value 


      const filteredTreatments = treatments.filter(treatment => treatment.category === value); // And update the new treatment list with the values that match with the user's selected category

      setNewTreatments(filteredTreatments); // Finally update the eventState with the category value

      return setEventInfo(currentVal => {
        return _objectSpread(_objectSpread({}, currentVal), {}, {
          treatmentCategory: value
        });
      });
    } // If user is selecting/unselecting a treatment


    if (name === "treatmentName") {
      // if user is unselecting a treatment
      if (!value) {
        // After selecting the treatment user might also have selected a stylist. And after selecting the treatment
        // eventState's eventDuration and eventPrice were also updated with the values of the selected treatment's
        // duration and price. So they all must be blank again now. 
        setEventInfo(currentVal => {
          return _objectSpread(_objectSpread({}, currentVal), {}, {
            treatmentName: value,
            eventDuration: 0,
            eventPrice: 0,
            stylist: ""
          });
        }); // Hide the stylist list after user's unselecting the treatment

        return setStylists(null);
      } // If user is selecting a treatment
      // Find the treatment from the initially fetched master treatment list. We need to update the stylists,
      // eventDuration and eventPrice with the values of stylists, duration and price of the found treatment


      for (let x = 0; x < treatments.length; x++) {
        if (treatments[x].title === value) {
          // DropdownList's map function loops through an array of objects. But found treatment's stylist
          // list is an array of strings. So we need to create a new array of objects to feed the DropdownList
          const newStylists = [];
          treatments[x].stylists.forEach(stylist => {
            newStylists.push({
              id: stylist,
              stylist
            });
          }); // Now update the stylist list with the newly created array of objects

          setStylists(newStylists); // After that update eventInfo state with the values of selected treatment and selected treatment's
          // duration and price info

          setEventInfo(currentVal => {
            return _objectSpread(_objectSpread({}, currentVal), {}, {
              treatmentName: value,
              eventDuration: treatments[x].duration,
              eventPrice: treatments[x].price
            });
          }); // We are done, break the loop

          break;
        }
      }
    } // If name is not treatmentCategory or treatmentName then update the state with name value pairs


    setEventInfo(currentVal => {
      return _objectSpread(_objectSpread({}, currentVal), {}, {
        [name]: value
      });
    });
  }

  return (
    /*#__PURE__*/
    // Styles are in globals.css
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
      className: "add_location",
      method: "post",
      style: {
        display: isAddingUpdating ? "block" : "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
        children: "Pick a date"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
        selected: eventInfo.eventDate,
        onChange: dateOnChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "dropdown_input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
          children: "Select a location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "eventLocation",
          nameKey: "title",
          blankOptionValue: "Choose location",
          data: locations,
          handleDropdownOnchange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "dropdown_input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
          children: "Select a Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "treatmentCategory",
          nameKey: "title",
          blankOptionValue: "Choose category",
          data: categories,
          handleDropdownOnchange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }, this), newTreatments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "dropdown_input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
          children: "Select treatment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "treatmentName",
          nameKey: "title",
          blankOptionValue: "Choose treatment",
          data: newTreatments,
          handleDropdownOnchange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, this), stylists && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "dropdown_input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
          children: "Select stylist"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "stylist",
          nameKey: "stylist",
          blankOptionValue: "Choose stylist",
          data: stylists,
          handleDropdownOnchange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "dropdown_input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
          children: "Select the start time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "startTime",
          nameKey: "time",
          blankOptionValue: "Choose start time",
          data: _libs_data__WEBPACK_IMPORTED_MODULE_5__.times,
          handleDropdownOnchange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
        label: "Client Name",
        type: "text",
        name: "clientName",
        setData: setEventInfo,
        value: eventInfo.clientName,
        placeholder: "grace heart",
        onChange: handleChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
        label: "Client Email",
        type: "email",
        name: "clientEmail",
        setData: setEventInfo,
        value: eventInfo.clientEmail,
        placeholder: "grace.heart@abc.com",
        onChange: handleChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
        label: "Client Phone",
        type: "text",
        name: "clientPhone",
        setData: setEventInfo,
        value: eventInfo.clientPhone,
        placeholder: "+88 01717062884",
        onChange: handleChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
        label: "Event Description",
        type: "text",
        name: "eventDescription",
        setData: setEventInfo,
        value: eventInfo.eventDescription,
        placeholder: "anything",
        onChange: handleChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
        onClick: event => {
          event.preventDefault();
          setIsAddingUpdating(false);
        },
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
        value: eventInfo.eventId,
        onClick: addUpdateEvent,
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }, this)
  );
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Events_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/Events.module.css */ "./styles/Events.module.css");
/* harmony import */ var _styles_Events_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Events_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\events\\EventDetails.js";
 // Stylesheet





const EventDetails = ({
  events,
  eventId,
  setEventId,
  setActionMessage,
  setHappening
}) => {
  async function cancelEvent(event) {
    const _id = event.target.value;
    setEventId("");

    try {
      setActionMessage("Cancelling");
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:7070/api/events/cancel-event", {
        _id
      });
      setActionMessage(response.data);
    } catch (error) {
      setActionMessage(error.response.data);
    } finally {
      setHappening("re-fetching");
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: events.map((event, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Events_module_css__WEBPACK_IMPORTED_MODULE_2___default().eventDetails_modal),
        style: {
          display: eventId === event._id.toString() ? "block" : "none"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: event.treatmentName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: () => setEventId(""),
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          style: {
            display: event.status === "Active" ? "inline" : "none"
          },
          value: event._id.toString(),
          onClick: cancelEvent,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, undefined)]
      }, event._id.toString(), true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDetails);

/***/ }),

/***/ "./components/reusable-components/ClosePopUpMessageButton.js":
/*!*******************************************************************!*\
  !*** ./components/reusable-components/ClosePopUpMessageButton.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClosePopUpMessageButton)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\ClosePopUpMessageButton.js";

// styles are in globals.css
function ClosePopUpMessageButton({
  setActionMessage
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "close_popup_message_button",
    onClick: () => setActionMessage(null),
    children: "X"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
        lineNumber: 9,
        columnNumber: 17
      }, this), data.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: item[nameKey],
          children: item[nameKey]
        }, index + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ "./components/reusable-components/Message.js":
/*!***************************************************!*\
  !*** ./components/reusable-components/Message.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _ClosePopUpMessageButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClosePopUpMessageButton */ "./components/reusable-components/ClosePopUpMessageButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\Message.js";
 // styles are in globals.css


function Message({
  message,
  setActionMessage
}) {
  const messageStyle = {
    transform: message ? "translate(-50%, 0%)" : "translate(-50%, 150%)"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "message",
    style: messageStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ClosePopUpMessageButton__WEBPACK_IMPORTED_MODULE_0__.default, {
      setActionMessage: setActionMessage
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

/***/ "./components/reusable-components/NextPrevItems.js":
/*!*********************************************************!*\
  !*** ./components/reusable-components/NextPrevItems.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NextPrevItems)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\NextPrevItems.js";

function NextPrevItems({
  state,
  fetchNextPrevItems
}) {
  const {
    searchText,
    skip,
    limit,
    dataLength
  } = state; // Previous Button

  const firstCondtion = skip - limit < 0;
  const secondCondition = skip === dataLength && skip - limit * 2 >= 0 ? skip - limit * 2 : skip - limit;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "next-prev",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      name: "prev",
      onClick: fetchNextPrevItems,
      value: firstCondtion ? 0 : secondCondition,
      children: "\xAB Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      name: "next",
      onClick: fetchNextPrevItems,
      value: skip + limit > dataLength ? skip : skip + limit,
      children: "Next \xBB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/reusable-components/NextPrevView.js":
/*!********************************************************!*\
  !*** ./components/reusable-components/NextPrevView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\NextPrevView.js";


const NextPrevView = ({
  state
}) => {
  const {
    skip,
    limit,
    dataLength
  } = state;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "items-view",
    style: {
      backgroundColor: "#ccc",
      padding: "5px 0"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "data-content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Showing ", dataLength === 0 ? 0 : dataLength === skip ? limit + 1 > dataLength ? 1 : skip - limit + 1 : skip + 1, " to ", limit + skip > dataLength ? dataLength : limit + skip, " of ", dataLength, " results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPrevView);

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

/***/ "./components/reusable-components/SearchInput.js":
/*!*******************************************************!*\
  !*** ./components/reusable-components/SearchInput.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\SearchInput.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SearchInput({
  value,
  setState,
  setHappening
}) {
  function handleChange(event) {
    // User might search after navigating to next or previous items. If that's the case then skip and limit values
    // were updated. But we must show the search results without skipping any search results.  
    setState(currentValue => {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        searchText: event.target.value,
        skip: 0,
        limit: 20
      });
    });
    setHappening("searching");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "search",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      value: value,
      placeholder: "Search",
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

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
  time: "10:15"
}, {
  id: 3,
  time: "10:30"
}, {
  id: 4,
  time: "10:45"
}, {
  id: 5,
  time: "11:00"
}, {
  id: 6,
  time: "11:15"
}, {
  id: 7,
  time: "11:30"
}, {
  id: 8,
  time: "11:45"
}, {
  id: 9,
  time: "12:00"
}, {
  id: 10,
  time: "12:15"
}, {
  id: 11,
  time: "12:30"
}, {
  id: 12,
  time: "12:45"
}, {
  id: 13,
  time: "13:00"
}, {
  id: 14,
  time: "13:15"
}, {
  id: 15,
  time: "13:30"
}, {
  id: 16,
  time: "13:45"
}, {
  id: 17,
  time: "14:00"
}, {
  id: 18,
  time: "14:15"
}, {
  id: 19,
  time: "14:30"
}, {
  id: 20,
  time: "14:45"
}, {
  id: 21,
  time: "15:00"
}, {
  id: 22,
  time: "15:15"
}, {
  id: 23,
  time: "15:30"
}, {
  id: 24,
  time: "15:45"
}, {
  id: 25,
  time: "16:00"
}, {
  id: 26,
  time: "16:15"
}, {
  id: 27,
  time: "16:30"
}, {
  id: 28,
  time: "16:45"
}, {
  id: 29,
  time: "17:00"
}];
const locationDataTableHeaders = ["Title", "Address1", "Address2", "City", "Country", "Phone", "Zip Code", "Action", "Delete"];
const categoryDataTableHeaders = ["Title", "Action", "Delete"];
const treatmentDataTableHeaders = ["Category", "Title", "Description", "Duration", "Price", "Remarks", "Action", "Delete"];
const stylistDataTableHeaders = ["First Name", "Last Name", "Username", "Email", "Status", "Details"];
const eventsDataTableHeaders = ["Location", "Category", "Treatment", "Stylist", "Event Date", "Start Time", "End Time", "Client", "Status", "Action"];

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
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_admins_events_AddEvent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/events/AddEvent */ "./components/admins/events/AddEvent.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/admins/events/EventDetails */ "./components/admins/events/EventDetails.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevView */ "./components/reusable-components/NextPrevView.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\events.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// event-modifiers

 // Next Modules


 // For Redirecting 


 // For google fonts and others

 // React Modules


 //Images


 // components










function Events() {
  const {
    0: happening,
    1: setHappening
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("Fetching");
  const {
    0: eventState,
    1: setEventState
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }); // Custom hook call to fetch data

  const endpoint = "http://localhost:7070/api/events";
  const requestBody = {
    searchText: eventState.searchText,
    skip: eventState.skip,
    limit: eventState.limit
  };
  const {
    data,
    totalDataCount,
    error,
    loading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_1__.default)("post", endpoint, requestBody, happening);
  const {
    data: locationData,
    error: locationDataFetchingError,
    loading: locationDataFetchingLoading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_1__.default)("get", "http://localhost:7070/api/locations", {}, happening);
  const {
    data: categoryData,
    error: categoryDataFetchingError,
    loading: categoryDataFetchingLoading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_1__.default)("get", "http://localhost:7070/api/categories", {}, happening);
  const {
    data: treatmentData,
    error: treatmentDataFetchingError,
    loading: treatmentDataFetchingLoading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_1__.default)("get", "http://localhost:7070/api/treatments", {}, happening);
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const {
    0: treatments,
    1: setTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const {
    0: events,
    1: setEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const {
    0: eventTableData,
    1: setEventTableData
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const {
    0: actionMessage,
    1: setActionMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: validationError,
    1: setValidationError
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: eventId,
    1: setEventId
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
  const {
    0: isAddingUpdating,
    1: setIsAddingUpdating
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: eventInfo,
    1: setEventInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    eventId: "",
    eventDate: null,
    startTime: "",
    endTime: "",
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
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setHappening("fetching");

    if (data !== null) {
      setEvents(data);
      const newData = [];
      data.forEach((event, index) => {
        newData.push({
          id: index + 1,
          data: [event.eventLocation, event.treatmentCategory, event.treatmentName, event.stylist, event.startTime.substring(0, event.startTime.indexOf("T")), event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length), event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length), event.clientEmail, event.status, `View Details-${event._id.toString()}`]
        });
      });
      setEventTableData(newData);
      setEventState(currentValue => {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          dataLength: totalDataCount
        });
      });
    }

    if (locationData !== null) setLocations(locationData);
    if (categoryData !== null) setCategories(categoryData);
    if (treatmentData !== null) setTreatments(treatmentData);
  }, [data, locationData, categoryData, treatmentData, happening]);

  async function addUpdateEvent(event) {
    event.preventDefault();
    const {
      eventDate,
      eventLocation,
      treatmentCategory,
      treatmentName,
      stylist,
      startTime,
      clientEmail
    } = eventInfo;
    if (!eventDate) return alert("Please pick a date");
    if (!eventLocation) return alert("Please select a location");
    if (!treatmentCategory) return alert("Please select a category");
    if (!treatmentName) return alert("Please select a treatment");
    if (!stylist) return alert("Please select a stylist");
    if (!startTime) return alert("please select a start time");
    if (!clientEmail) return setValidationError(true);

    try {
      setActionMessage("Saving"); // Default endpoint is add event

      let endpoint = "http://localhost:7070/api/events/add-event"; // But if eventId is not empty then update request should be sent

      if (eventId) endpoint = "http://localhost:7070/api/events/update";
      const response = await axios__WEBPACK_IMPORTED_MODULE_7___default().post(endpoint, eventInfo);
      setActionMessage(response.data.msg);
    } catch (error) {
      setActionMessage(error.response.data.msg);
    } finally {
      setHappening("refetching afer adding");
    }
  }

  function fetchNextPrevItems(event) {
    const newSkip = Number(event.target.value);
    setEventState(currentValue => {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        skip: newSkip
      });
    });
    setHappening("refetching after next button clicked");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
    className: "events",
    style: {
      display: "flex",
      position: "relative",
      height: "100vh",
      overflow: "hidden"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
      className: "content",
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_admins_events_AddEvent__WEBPACK_IMPORTED_MODULE_12__.default, {
        isAddingUpdating: isAddingUpdating,
        setIsAddingUpdating: setIsAddingUpdating,
        eventInfo: eventInfo,
        setEventInfo: setEventInfo,
        locations: locations,
        categories: categories,
        treatments: treatments,
        addUpdateEvent: addUpdateEvent,
        validationError: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_11__.default, {
          value: eventState.searchText,
          setState: setEventState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("button", {
          onClick: () => setIsAddingUpdating(true),
          children: "Add event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__.default, {
        tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_0__.eventsDataTableHeaders,
        tableData: eventTableData,
        tableFor: "events",
        setItemId: setEventId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_14__.default, {
        events: events,
        eventId: eventId,
        setEventId: setEventId,
        setHappening: setHappening,
        setActionMessage: setActionMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_16__.default, {
        state: eventState,
        setState: setEventState,
        fetchNextPrevItems: fetchNextPrevItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_17__.default, {
        state: eventState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_15__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 217,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvQWRkRXZlbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvQ2xvc2VQb3BVcE1lc3NhZ2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0Ryb3Bkb3duTGlzdC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZWaWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TYXZlQnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZWFyY2hJbnB1dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvVGFibGVEYXRhLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvZGF0YS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWJzL3VzZUF4aW9zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vcGFnZXMvYWRtaW5zL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvQ29udHJvbFBhbmVsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0V2ZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9jb21tb24tc3R5bGVzL0NvbW1vblN0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9pZ25vcmVkfEQ6XFxwcm9ncmFtbWluZ1xcZml2ZXJyLXByb2plY3RzXFxuZXh0anMtcHJvamVjdHNcXGF0aGVuYS1iZWF1dHktY2FyZVxcZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludFxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Db250cm9sUGFuZWwubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cm9sUGFuZWwgKCkgIHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbF9wYW5lbH0+XHJcbiAgICAgICAgICAgIHsvKiA8aDM+Q29udHJvbCBQYW5lbDwvaDM+ICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWlucy9sb2NhdGlvbnNcIj48YT5Mb2NhdGlvbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5zL2NhdGVnb3JpZXNcIj48YT5DYXRlZ29yaWVzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbnMvdHJlYXRtZW50c1wiPjxhPlRyZWF0bWVudHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWlucy9ldmVudHNcIj48YT5FdmVudHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWlucy9zdHlsaXN0c1wiPjxhPlN0eWxpc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudHNcIj48YT5Db3Vwb25zPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG4iLCIvLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuaW1wb3J0IHsgdGltZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG4vLyBldmVudC1tb2RpZmllcnNcclxuLy8gaW1wb3J0IHsgaGFuZGxlQ2hhbmdlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvZXZlbnQtbW9kaWZpZXJzL2hhbmRsZUNoYW5nZVwiO1xyXG4vLyBpbXBvcnQgeyBhZGRVcGRhdGVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9saWJzL2V2ZW50LW1vZGlmaWVycy9hZGRVcGRhdGVFdmVudFwiO1xyXG5cclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IERyb3Bkb3duTGlzdCBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9Ecm9wZG93bkxpc3RcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dFwiO1xyXG5cclxuXHJcbmltcG9ydCBTYXZlQnV0dG9uIGZyb20gXCIuLi8uLi9yZXVzYWJsZS1jb21wb25lbnRzL1NhdmVCdXR0b25cIjtcclxuLy8gaW1wb3J0IENsb3NlRm9ybUJ1dHRvbiBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9DbG9zZUZvcm1CdXR0b25cIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xvY2F0aW9ucy9BZGRMb2NhdGlvbi5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xvY2F0aW9ucy9BZGRMb2NhdGlvbi5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IFN1Y2Nlc3NGYWlsTWVzc2FnZSBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9TdWNjZXNzRmFpbE1lc3NhZ2VcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEV2ZW50ICh7XHJcbiAgICBsb2NhdGlvbnMsXHJcbiAgICBjYXRlZ29yaWVzLFxyXG4gICAgdHJlYXRtZW50cywgXHJcbiAgICBldmVudEluZm8sIFxyXG4gICAgc2V0RXZlbnRJbmZvLCBcclxuICAgIGlzQWRkaW5nVXBkYXRpbmcsIFxyXG4gICAgc2V0SXNBZGRpbmdVcGRhdGluZywgXHJcbiAgICB2YWxpZGF0aW9uRXJyb3IsXHJcbiAgICBhZGRVcGRhdGVFdmVudCBcclxufSkge1xyXG5cclxuXHJcbiAgICBjb25zdCBbbmV3VHJlYXRtZW50cywgc2V0TmV3VHJlYXRtZW50c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdHlsaXN0cywgc2V0U3R5bGlzdHNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICBcclxuXHJcbiAgICBmdW5jdGlvbiBkYXRlT25DaGFuZ2UoZGF0ZSkge1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8gRGVzdHJ1Y3R1cmluZyBldmVudC50YXJnZXRcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIElmIHVzZXIgaXMgc2VsZWN0aW5nL3Vuc2VsZWN0aW5nIGEgY2F0ZWdvcnlcclxuICAgICAgICBpZihuYW1lID09PSBcInRyZWF0bWVudENhdGVnb3J5XCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgdW5zZWxlY3RpbmcgdGhlIGNhdGVnb3J5XHJcbiAgICAgICAgICAgIGlmKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc2VsZWN0aW5nIHRoZSBjYXRlZ29yeSB1c2VyIG1pZ2h0IGFsc28gaGF2ZSBzZWxlY3RlZCBhIHRyZWF0bWVudCBhbmQgYSBzdHlsaXN0LiBJZiB1c2VyIGhhcyBcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkIGEgdHJlYXRtZW50IHRoZW4gdmFsdWVzIG9mIGV2ZW50RHVyYXRpb24gYW5kIGV2ZW50UHJpY2UgaGF2ZSBhbHNvIGJlZW4gdXBkYXRlZCB3aXRoXHJcbiAgICAgICAgICAgICAgICAvLyBkdXJhdGlvbiBhbmQgcHJpY2UgaW5mbyBvZiB0aGUgdHJlYXRtZW50LiBTbyB0aGV5IGFsbCBtdXN0IGJlIGJsYW5rIGFnYWluIG5vdy4gXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50Q2F0ZWdvcnk6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsaXN0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudER1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFByaWNlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIHRyZWF0bWVudCBhbmQgc3R5bGlzdCBsaXN0IGFmdGVyIHVzZXIncyB1bnNlbGVjdGluZyB0aGUgY2F0ZWdvcnkgXHJcbiAgICAgICAgICAgICAgICBzZXROZXdUcmVhdG1lbnRzKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFN0eWxpc3RzKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHVzZXIgaXMgc2VsZWN0aW5nIGEgY2F0ZWdvcnkgdGhlbiBmaWx0ZXIgdGhlIHRyZWF0bWVudHMgbGlzdCB3aXRoIHRoZSBjYXRlZ29yeSB2YWx1ZSBcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRUcmVhdG1lbnRzID0gdHJlYXRtZW50cy5maWx0ZXIodHJlYXRtZW50ID0+IHRyZWF0bWVudC5jYXRlZ29yeSA9PT0gdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIHVwZGF0ZSB0aGUgbmV3IHRyZWF0bWVudCBsaXN0IHdpdGggdGhlIHZhbHVlcyB0aGF0IG1hdGNoIHdpdGggdGhlIHVzZXIncyBzZWxlY3RlZCBjYXRlZ29yeVxyXG4gICAgICAgICAgICBzZXROZXdUcmVhdG1lbnRzKGZpbHRlcmVkVHJlYXRtZW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5hbGx5IHVwZGF0ZSB0aGUgZXZlbnRTdGF0ZSB3aXRoIHRoZSBjYXRlZ29yeSB2YWx1ZVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudENhdGVnb3J5OiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdXNlciBpcyBzZWxlY3RpbmcvdW5zZWxlY3RpbmcgYSB0cmVhdG1lbnRcclxuICAgICAgICBpZihuYW1lID09PSBcInRyZWF0bWVudE5hbWVcIikge1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdXNlciBpcyB1bnNlbGVjdGluZyBhIHRyZWF0bWVudFxyXG4gICAgICAgICAgICBpZighdmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBzZWxlY3RpbmcgdGhlIHRyZWF0bWVudCB1c2VyIG1pZ2h0IGFsc28gaGF2ZSBzZWxlY3RlZCBhIHN0eWxpc3QuIEFuZCBhZnRlciBzZWxlY3RpbmcgdGhlIHRyZWF0bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbnRTdGF0ZSdzIGV2ZW50RHVyYXRpb24gYW5kIGV2ZW50UHJpY2Ugd2VyZSBhbHNvIHVwZGF0ZWQgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBzZWxlY3RlZCB0cmVhdG1lbnQnc1xyXG4gICAgICAgICAgICAgICAgLy8gZHVyYXRpb24gYW5kIHByaWNlLiBTbyB0aGV5IGFsbCBtdXN0IGJlIGJsYW5rIGFnYWluIG5vdy4gXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8oY3VycmVudFZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50TmFtZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50RHVyYXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50UHJpY2U6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxpc3Q6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgc3R5bGlzdCBsaXN0IGFmdGVyIHVzZXIncyB1bnNlbGVjdGluZyB0aGUgdHJlYXRtZW50XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0U3R5bGlzdHMobnVsbCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB1c2VyIGlzIHNlbGVjdGluZyBhIHRyZWF0bWVudFxyXG5cclxuICAgICAgICAgICAgLy8gRmluZCB0aGUgdHJlYXRtZW50IGZyb20gdGhlIGluaXRpYWxseSBmZXRjaGVkIG1hc3RlciB0cmVhdG1lbnQgbGlzdC4gV2UgbmVlZCB0byB1cGRhdGUgdGhlIHN0eWxpc3RzLFxyXG4gICAgICAgICAgICAvLyBldmVudER1cmF0aW9uIGFuZCBldmVudFByaWNlIHdpdGggdGhlIHZhbHVlcyBvZiBzdHlsaXN0cywgZHVyYXRpb24gYW5kIHByaWNlIG9mIHRoZSBmb3VuZCB0cmVhdG1lbnRcclxuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRyZWF0bWVudHMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmVhdG1lbnRzW3hdLnRpdGxlID09PSB2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEcm9wZG93bkxpc3QncyBtYXAgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCBhbiBhcnJheSBvZiBvYmplY3RzLiBCdXQgZm91bmQgdHJlYXRtZW50J3Mgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3QgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy4gU28gd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYXJyYXkgb2Ygb2JqZWN0cyB0byBmZWVkIHRoZSBEcm9wZG93bkxpc3RcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsaXN0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRzW3hdLnN0eWxpc3RzLmZvckVhY2goc3R5bGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0eWxpc3RzLnB1c2goeyBpZDogc3R5bGlzdCwgc3R5bGlzdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdyB1cGRhdGUgdGhlIHN0eWxpc3QgbGlzdCB3aXRoIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5IG9mIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsaXN0cyhuZXdTdHlsaXN0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIHRoYXQgdXBkYXRlIGV2ZW50SW5mbyBzdGF0ZSB3aXRoIHRoZSB2YWx1ZXMgb2Ygc2VsZWN0ZWQgdHJlYXRtZW50IGFuZCBzZWxlY3RlZCB0cmVhdG1lbnQnc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1cmF0aW9uIGFuZCBwcmljZSBpbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudE5hbWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnREdXJhdGlvbjogdHJlYXRtZW50c1t4XS5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50UHJpY2U6IHRyZWF0bWVudHNbeF0ucHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIGRvbmUsIGJyZWFrIHRoZSBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gSWYgbmFtZSBpcyBub3QgdHJlYXRtZW50Q2F0ZWdvcnkgb3IgdHJlYXRtZW50TmFtZSB0aGVuIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBuYW1lIHZhbHVlIHBhaXJzXHJcbiAgICAgICAgc2V0RXZlbnRJbmZvKGN1cnJlbnRWYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbCxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgLy8gU3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzc1xyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFkZF9sb2NhdGlvblwiIG1ldGhvZD1cInBvc3RcIiBzdHlsZSA9IHt7IGRpc3BsYXk6IGlzQWRkaW5nVXBkYXRpbmcgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxhYmVsPlBpY2sgYSBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQgPSB7ZXZlbnRJbmZvLmV2ZW50RGF0ZX0gb25DaGFuZ2U9e2RhdGVPbkNoYW5nZX0gLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBzdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IGEgbG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJldmVudExvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lS2V5ID0gXCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmxhbmtPcHRpb25WYWx1ZSA9IFwiQ2hvb3NlIGxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0ge2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcm9wZG93bk9uY2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBhIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwidHJlYXRtZW50Q2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVLZXkgPSBcInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBibGFua09wdGlvblZhbHVlID0gXCJDaG9vc2UgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcm9wZG93bk9uY2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXdUcmVhdG1lbnRzICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgdHJlYXRtZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ0cmVhdG1lbnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUtleSA9IFwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibGFua09wdGlvblZhbHVlID0gXCJDaG9vc2UgdHJlYXRtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHtuZXdUcmVhdG1lbnRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJvcGRvd25PbmNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHlsaXN0cyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc3R5bGlzdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwic3R5bGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVLZXkgPSBcInN0eWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibGFua09wdGlvblZhbHVlID0gXCJDaG9vc2Ugc3R5bGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7c3R5bGlzdHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcm9wZG93bk9uY2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgdGhlIHN0YXJ0IHRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJzdGFydFRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVLZXkgPSBcInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJsYW5rT3B0aW9uVmFsdWUgPSBcIkNob29zZSBzdGFydCB0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0ge3RpbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZURyb3Bkb3duT25jaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2xpZW50IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJjbGllbnROYW1lXCJcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZXZlbnRJbmZvLmNsaWVudE5hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiZ3JhY2UgaGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkNsaWVudCBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJjbGllbnRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2V2ZW50SW5mby5jbGllbnRFbWFpbH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJncmFjZS5oZWFydEBhYmMuY29tXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJDbGllbnQgUGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJjbGllbnRQaG9uZVwiXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2V2ZW50SW5mby5jbGllbnRQaG9uZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCIrODggMDE3MTcwNjI4ODRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkV2ZW50IERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZXZlbnREZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2V2ZW50SW5mby5ldmVudERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcImFueXRoaW5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSl9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdmFsdWUgPSB7ZXZlbnRJbmZvLmV2ZW50SWR9IG9uQ2xpY2sgPSB7YWRkVXBkYXRlRXZlbnR9PlNhdmU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB7LyogPFN1Y2Nlc3NGYWlsTWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NGYWlsTWVzc2FnZSA9IHtzdWNjZXNzRmFpbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UgPSB7c2V0U3VjY2Vzc0ZhaWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDbG9zZUZvcm1CdXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbG9zZUZvcm0gPSB7ZGlzcGxheUhpZGVUcmVhdG1lbnRGb3JtfSBcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0VHJlYXRtZW50SW5mb30gXHJcbiAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFNhdmVCdXR0b25cclxuICAgICAgICAgICAgICAgIC8vIFRvIHBhc3MgdG8gYWRkVXBkYXRlTG9jYXRpb24gZnVuY3Rpb24uIEVtcHR5IHN0cmluZyB3aWxsIG1ha2UgaHR0cCByZXF1ZXN0IHRvIGJhY2tlbmQgYXQgXHJcbiAgICAgICAgICAgICAgICAvLyBhZGRfbG9jYXRpb24gZW5kcG9pbnQsIGVsc2UgdXBkYXRlIHJlcXVlc3Qgd2lsbCBiZSBtYWRlIHRvIGJhY2tlbmQgXHJcbiAgICAgICAgICAgICAgICBfaWQgPSB7ZXZlbnRJbmZvLmV2ZW50SWR9IFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtldmVudEluZm99IFxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IgPSB7c2V0VmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3NGYWlsTWVzc2FnZSA9IHtzZXRTdWNjZXNzRmFpbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBhZGROZXdJdGVtID0ge2FkZFVwZGF0ZUV2ZW50fSBcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRXZlbnRzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBFdmVudERldGFpbHMgPSAoeyBldmVudHMsIGV2ZW50SWQsIHNldEV2ZW50SWQsIHNldEFjdGlvbk1lc3NhZ2UsIHNldEhhcHBlbmluZyB9KSA9PiB7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FuY2VsRXZlbnQoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgc2V0RXZlbnRJZChcIlwiKTtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkNhbmNlbGxpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50cy9jYW5jZWwtZXZlbnRcIiwgeyBfaWQgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmUtZmV0Y2hpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2V2ZW50Ll9pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLmV2ZW50RGV0YWlsc19tb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBldmVudElkID09PSBldmVudC5faWQudG9TdHJpbmcoKSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntldmVudC50cmVhdG1lbnROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldEV2ZW50SWQoXCJcIil9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBldmVudC5zdGF0dXMgPT09IFwiQWN0aXZlXCIgPyBcImlubGluZVwiIDogXCJub25lXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2V2ZW50Ll9pZC50b1N0cmluZygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7Y2FuY2VsRXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWxzOyIsIi8vIHN0eWxlcyBhcmUgaW4gZ2xvYmFscy5jc3NcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvc2VQb3BVcE1lc3NhZ2VCdXR0b24gKHsgc2V0QWN0aW9uTWVzc2FnZSB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiY2xvc2VfcG9wdXBfbWVzc2FnZV9idXR0b25cIiBvbkNsaWNrID0geygpID0+IHNldEFjdGlvbk1lc3NhZ2UobnVsbCl9Plg8L2J1dHRvbj5cclxuICAgICk7XHJcbn0iLCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bkxpc3QgKHsgbmFtZSwgbmFtZUtleSwgYmxhbmtPcHRpb25WYWx1ZSwgZGF0YSwgaGFuZGxlRHJvcGRvd25PbmNoYW5nZSB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX2xpc3RcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lID0ge25hbWV9IG9uQ2hhbmdlID0ge2hhbmRsZURyb3Bkb3duT25jaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiXCI+e2JsYW5rT3B0aW9uVmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5ID0ge2luZGV4ICsgMX0gdmFsdWUgPSB7aXRlbVtuYW1lS2V5XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVtuYW1lS2V5XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcblxyXG5SZXVzYWJsZSBEcm9wZG93bi9TZWxlY3QgQ29tcG9uZW50XHJcbmh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUyNzg5MzYzL3JlYWN0LWhvdy10by1maXQtanNvbi1hcGktZGF0YS1pbnRvLXJldXNhYmxlLXNlbGVjdC1jb21wb25lbnRcclxuXHJcbiovIiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tbW9uLXN0eWxlcy9Db21tb25TdHlsZXMubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHsgZXJyb3IsIG5hbWUsIHZhbHVlLCBjb250ZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBlcnJvciAmJiAhdmFsdWUgJiYgbmFtZSAhPT0gXCJyZW1hcmtzXCIgJiYgbmFtZSAhPT0gXCJjbGllbnROYW1lXCIgJiYgbmFtZSAhPT0gXCJjbGllbnRQaG9uZVwiICYmIG5hbWUgIT09IFwiZXZlbnREZXNjcmlwdGlvblwiXHJcblxyXG4gICAgLy8gdHJlYXRtZW50IGhhcyByZW1hcmtzIHByb3BlcnR5IHdoaWNoIGlzIG5vdCBhIG1hbmRhdG9yeSBmaWVsZC4gU28gaWYgdXNlciBkb2Vzbid0IHdhbnQgdG8gYWRkIGEgcmVtYXJrIHdlIHNob3VsZCBiZVxyXG4gICAgLy8gb2theSB3aXRoIHRoaXMgYW5kIHdvbid0IHNob3cgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcl9tZXNzYWdlfSBcclxuICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6IGNvbmRpdGlvbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgICoge2NvbnRlbnR9XHJcbiAgICAgICAgPC9wPiAgXHJcbiAgICApO1xyXG59IiwiLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiXHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21tb24tc3R5bGVzL0NvbW1vblN0eWxlcy5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0ICh7IGxhYmVsLCB0eXBlLCBuYW1lLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIG9uQ2hhbmdlLCBzZXREYXRhLCBlcnJvciB9KSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWUgPSB7c3R5bGVzLmlucHV0X2xhYmVsfT57bGFiZWx9PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZSA9IHt7d2lkdGg6IChuYW1lID09PSBcImFkZHJlc3MxXCIgfHwgbmFtZSA9PT0gXCJhZGRyZXNzMlwiIHx8IG5hbWUgPT09IFwidGl0bGVcIikgJiYgXCIzNTBweFwiIH19IFxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IHt0eXBlfSBcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB7bmFtZX0gXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IHtwbGFjZWhvbGRlcn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtvbkNoYW5nZX0gXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHtlcnJvcn1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSB7bmFtZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHtgJHtsYWJlbH0gY2FuJ3QgYmUgYmxhbmtgfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IENsb3NlUG9wVXBNZXNzYWdlQnV0dG9uIGZyb20gXCIuL0Nsb3NlUG9wVXBNZXNzYWdlQnV0dG9uXCI7XHJcblxyXG4vLyBzdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2UgKHsgbWVzc2FnZSwgc2V0QWN0aW9uTWVzc2FnZSB9KSB7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZVN0eWxlID0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbWVzc2FnZSA/IFwidHJhbnNsYXRlKC01MCUsIDAlKVwiIDogXCJ0cmFuc2xhdGUoLTUwJSwgMTUwJSlcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiIHN0eWxlID0ge21lc3NhZ2VTdHlsZX0+XHJcbiAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgIDxDbG9zZVBvcFVwTWVzc2FnZUJ1dHRvbiBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXh0UHJldkl0ZW1zICh7IHN0YXRlLCBmZXRjaE5leHRQcmV2SXRlbXMgfSkge1xyXG5cclxuICAgIGNvbnN0IHsgc2VhcmNoVGV4dCwgc2tpcCwgbGltaXQsIGRhdGFMZW5ndGggfSA9IHN0YXRlO1xyXG5cclxuICAgIC8vIFByZXZpb3VzIEJ1dHRvblxyXG4gICAgY29uc3QgZmlyc3RDb25kdGlvbiA9IHNraXAgLSBsaW1pdCA8IDA7XHJcbiAgICBjb25zdCBzZWNvbmRDb25kaXRpb24gPSBza2lwID09PSBkYXRhTGVuZ3RoICYmIHNraXAgLSBsaW1pdCAqIDIgPj0gMCA/IHNraXAgLSBsaW1pdCAqIDIgOiBza2lwIC0gbGltaXQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0LXByZXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcInByZXZcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZmV0Y2hOZXh0UHJldkl0ZW1zfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2ZpcnN0Q29uZHRpb24gPyAwIDogc2Vjb25kQ29uZGl0aW9uIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICZsYXF1bzsgUHJldlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtmZXRjaE5leHRQcmV2SXRlbXN9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7IHNraXAgKyBsaW1pdCA+IGRhdGFMZW5ndGggPyBza2lwIDogc2tpcCArIGxpbWl0IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dCAmcmFxdW87XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3QgTmV4dFByZXZWaWV3ID0gKHsgc3RhdGUgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgc2tpcCwgbGltaXQsIGRhdGFMZW5ndGggfSA9IHN0YXRlO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLXZpZXdcIiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIiwgcGFkZGluZzogXCI1cHggMFwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5TaG93aW5nIHsgXHJcbiAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoID09PSAwID8gMCA6IGRhdGFMZW5ndGggPT09IHNraXAgPyAobGltaXQgKyAxID4gZGF0YUxlbmd0aCA/IDEgOiBza2lwIC0gbGltaXQgKyAxKSA6IHNraXAgKyAxXHJcbiAgICAgICAgICAgICAgICB9IHRvIHsgXHJcbiAgICAgICAgICAgICAgICBsaW1pdCArIHNraXAgPiBkYXRhTGVuZ3RoID8gZGF0YUxlbmd0aCA6IGxpbWl0ICsgc2tpcCBcclxuICAgICAgICAgICAgICAgIH0gb2Yge2RhdGFMZW5ndGh9IHJlc3VsdHMgXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0UHJldlZpZXc7XHJcbiIsIi8vXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVCdXR0b24oeyBfaWQsIGRhdGEsIGFkZE5ld0l0ZW0sIHNldEVycm9yLCBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlX2J1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAvLyBfaWQgaXMgZm9yXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtfaWR9ICBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiIFxyXG4gICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiBhZGROZXdJdGVtKF9pZCwgZGF0YSwgc2V0RXJyb3IsIHNldFN1Y2Nlc3NGYWlsTWVzc2FnZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hJbnB1dCAoeyB2YWx1ZSwgc2V0U3RhdGUsIHNldEhhcHBlbmluZyB9KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIC8vIFVzZXIgbWlnaHQgc2VhcmNoIGFmdGVyIG5hdmlnYXRpbmcgdG8gbmV4dCBvciBwcmV2aW91cyBpdGVtcy4gSWYgdGhhdCdzIHRoZSBjYXNlIHRoZW4gc2tpcCBhbmQgbGltaXQgdmFsdWVzXHJcbiAgICAgICAgLy8gd2VyZSB1cGRhdGVkLiBCdXQgd2UgbXVzdCBzaG93IHRoZSBzZWFyY2ggcmVzdWx0cyB3aXRob3V0IHNraXBwaW5nIGFueSBzZWFyY2ggcmVzdWx0cy4gIFxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0OiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IDIwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInNlYXJjaGluZ1wiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7IiwiaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gXCIuL1RhYmxlSGVhZGVyXCI7XHJcbmltcG9ydCBUYWJsZURhdGEgZnJvbSBcIi4vVGFibGVEYXRhXCI7XHJcblxyXG5jb25zdCBEYXRhVGFibGUgPSAoeyB0YWJsZUZvciwgdGFibGVIZWFkZXJzLCB0YWJsZURhdGEsIGR5bmFtaWNDbGFzcywgc2V0SXRlbUlkLCBvcGVuRGVsZXRlUHJvbXB0ICB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdGFibGVcIj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHRhYmxlSGVhZGVycyA9IHt0YWJsZUhlYWRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVEYXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlRm9yID0ge3RhYmxlRm9yfSBcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7dGFibGVEYXRhfSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0SXRlbUlkfSBcclxuICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHQgfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlOyIsIi8vXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlRGF0YSAoeyB0YWJsZUZvciwgdGFibGVEYXRhLCBzZXRJdGVtSWQsIG9wZW5EZWxldGVQcm9tcHQgfSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRhYmxlRGF0YSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dGFibGVEYXRhLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRhYmxlIGRhdGEgZmllbGRzIG1pZ2h0IGNvbnRlbnQgcGxhaW4gbnVtYmVycyBhbmQgYXMgaW4gSmF2YVNjcmlwdCBudW1iZXJzIGRvbid0IGhhdmUgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY2x1ZGUgbWV0aG9kIHNvIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXQncyBhIHN0cmluZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pbmNsdWRlcyhcIlZpZXcgRGV0YWlsc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleSA9IHtpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoXCItXCIpICsgMSwgdmFsdWUubGVuZ3RoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZXZlbnQgPT4gc2V0SXRlbUlkKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKFwiRGVsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5ID0ge2luZGV4ICsgMX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoXCItXCIpICsgMSwgdmFsdWUubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtvcGVuRGVsZXRlUHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5ID0ge2luZGV4ICsgMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ge3ZhbHVlfT48YT5WaWV3IERldGFpbHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXkgPSB7aW5kZXggKyAxfT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICApO1xyXG59IiwiLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlSGVhZGVyICh7IHRhYmxlSGVhZGVycyB9KSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICB7dGFibGVIZWFkZXJzLm1hcChoZWFkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5ID0ge2hlYWRlcn0+e2hlYWRlcn08L3RoPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICk7XHJcbn0iLCJleHBvcnQgY29uc3QgZGF5c09mVGhlV2VlayA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiTW9uZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJUdWVzZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJXZWRuZXNkYXlcIn0sXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIlRodXJzZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJGcmlkYXlcIn0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdGltZXMgPSBbXHJcbiAgICB7IGlkOiAxLCB0aW1lOiBcIjEwOjAwXCIgfSxcclxuICAgIHsgaWQ6IDIsIHRpbWU6IFwiMTA6MTVcIiB9LFxyXG4gICAgeyBpZDogMywgdGltZTogXCIxMDozMFwiIH0sXHJcbiAgICB7IGlkOiA0LCB0aW1lOiBcIjEwOjQ1XCIgfSxcclxuICAgIHsgaWQ6IDUsIHRpbWU6IFwiMTE6MDBcIiB9LFxyXG4gICAgeyBpZDogNiwgdGltZTogXCIxMToxNVwiIH0sXHJcbiAgICB7IGlkOiA3LCB0aW1lOiBcIjExOjMwXCIgfSxcclxuICAgIHsgaWQ6IDgsIHRpbWU6IFwiMTE6NDVcIiB9LFxyXG4gICAgeyBpZDogOSwgdGltZTogXCIxMjowMFwiIH0sXHJcbiAgICB7IGlkOiAxMCwgdGltZTogXCIxMjoxNVwiIH0sXHJcbiAgICB7IGlkOiAxMSwgdGltZTogXCIxMjozMFwiIH0sXHJcbiAgICB7IGlkOiAxMiwgdGltZTogXCIxMjo0NVwiIH0sXHJcbiAgICB7IGlkOiAxMywgdGltZTogXCIxMzowMFwiIH0sXHJcbiAgICB7IGlkOiAxNCwgdGltZTogXCIxMzoxNVwiIH0sXHJcbiAgICB7IGlkOiAxNSwgdGltZTogXCIxMzozMFwiIH0sXHJcbiAgICB7IGlkOiAxNiwgdGltZTogXCIxMzo0NVwiIH0sXHJcbiAgICB7IGlkOiAxNywgdGltZTogXCIxNDowMFwiIH0sXHJcbiAgICB7IGlkOiAxOCwgdGltZTogXCIxNDoxNVwiIH0sXHJcbiAgICB7IGlkOiAxOSwgdGltZTogXCIxNDozMFwiIH0sXHJcbiAgICB7IGlkOiAyMCwgdGltZTogXCIxNDo0NVwiIH0sXHJcbiAgICB7IGlkOiAyMSwgdGltZTogXCIxNTowMFwiIH0sXHJcbiAgICB7IGlkOiAyMiwgdGltZTogXCIxNToxNVwiIH0sXHJcbiAgICB7IGlkOiAyMywgdGltZTogXCIxNTozMFwiIH0sXHJcbiAgICB7IGlkOiAyNCwgdGltZTogXCIxNTo0NVwiIH0sXHJcbiAgICB7IGlkOiAyNSwgdGltZTogXCIxNjowMFwiIH0sXHJcbiAgICB7IGlkOiAyNiwgdGltZTogXCIxNjoxNVwiIH0sXHJcbiAgICB7IGlkOiAyNywgdGltZTogXCIxNjozMFwiIH0sXHJcbiAgICB7IGlkOiAyOCwgdGltZTogXCIxNjo0NVwiIH0sXHJcbiAgICB7IGlkOiAyOSwgdGltZTogXCIxNzowMFwiIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvbkRhdGFUYWJsZUhlYWRlcnMgPSBbXHJcbiAgICBcIlRpdGxlXCIsIFwiQWRkcmVzczFcIiwgXCJBZGRyZXNzMlwiLCBcIkNpdHlcIiwgXCJDb3VudHJ5XCIsIFwiUGhvbmVcIiwgXCJaaXAgQ29kZVwiLCBcIkFjdGlvblwiLCBcIkRlbGV0ZVwiXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzID0gW1wiVGl0bGVcIiwgXCJBY3Rpb25cIiwgXCJEZWxldGVcIl07XHJcblxyXG5leHBvcnQgY29uc3QgdHJlYXRtZW50RGF0YVRhYmxlSGVhZGVycyA9IFtcIkNhdGVnb3J5XCIsIFwiVGl0bGVcIiwgXCJEZXNjcmlwdGlvblwiLCBcIkR1cmF0aW9uXCIsIFwiUHJpY2VcIiwgXCJSZW1hcmtzXCIsIFwiQWN0aW9uXCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxpc3REYXRhVGFibGVIZWFkZXJzID0gW1wiRmlyc3QgTmFtZVwiLCBcIkxhc3QgTmFtZVwiLCBcIlVzZXJuYW1lXCIsIFwiRW1haWxcIiwgXCJTdGF0dXNcIiwgXCJEZXRhaWxzXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50c0RhdGFUYWJsZUhlYWRlcnMgPSBbXHJcbiAgICBcIkxvY2F0aW9uXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUcmVhdG1lbnRcIiwgXCJTdHlsaXN0XCIsIFwiRXZlbnQgRGF0ZVwiLCBcIlN0YXJ0IFRpbWVcIiwgXCJFbmQgVGltZVwiLCBcIkNsaWVudFwiLCBcIlN0YXR1c1wiLCBcIkFjdGlvblwiXHJcbl07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF4aW9zKG1ldGhvZCwgdXJsLCBib2R5LCBoYXBwZW5pbmcpIHtcclxuXHJcbiAgICAvLyAvLyBOZWVkIHRvIHB1dCBmb2xsb3dpbmcgdGhyZWUgaW4gdGhlIHVzZUVmZmVjdCdzIGRlcGVuZGVjeSBhcnJheSB0byBhbGxvdyBmb3IgZHluYW1pYyBkYXRhIGZldGNoaW5nIGJhc2VkIG9uIHVzZXIncyBcclxuICAgIC8vIC8vIHNlYXJjaCBpbnB1dCwgbmF2aWdhdGlvbiB0byBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcy5cclxuICAgIC8vIGxldCBzZWFyY2hUZXh0ID0gXCJcIjtcclxuICAgIC8vIGxldCBza2lwID0gMDtcclxuICAgIC8vIGxldCBsaW1pdCA9IDA7XHJcblxyXG4gICAgLy8gLy8gSWYgaXQncyBhIHBvc3QgcmVxdWVzdCB0aGVuIGJvZHkgd2lsbCBjb250YWluIHNlYXJjaFRleHQsIHNraXAgYW5kIGxpbWl0LiBVcGRhdGUgdGhlIGFib3ZlIHRocmVlIHdpdGggdGhlIGJvZHkncyB2YWx1ZXNcclxuICAgIC8vIGlmKGJvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vICAgICBzZWFyY2hUZXh0ID0gYm9keS5zZWFyY2hUZXh0O1xyXG4gICAgLy8gICAgIHNraXAgPSBib2R5LnNraXA7XHJcbiAgICAvLyAgICAgbGltaXQgPSBib2R5LmxpbWl0XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGV4dCwgc2tpcCwgbGltaXQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWV0aG9kLCB1cmwsIGJvZHkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0b3RhbERhdGFDb3VudCwgc2V0VG90YWxEYXRhQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgbWV0aG9kLCB1cmwsIGRhdGE6IGJvZHkgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgZGF0YSBhcmUgYmVpbmcgZmV0Y2hlZCB3aXRoIGdldCBtZXRob2QgdGhlbiBhbiBhcnJheSBvZiBqc29uIG9iamVjdHMgaGFzIGJlZW4gc2VudCBmcm9tIGJhY2tlbmRcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShuZXdEYXRhKSkgcmV0dXJuIHNldERhdGEobmV3RGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLml0ZW1zID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0RGF0YShuZXdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRWxzZSwgZGF0YSBhcmUgYmVpbmcgZmV0Y2hlZCB3aXRoIHBvc3QgbWV0aG9kLiBTbyBhbiBvYmplY3QgaGFzIGJlZW4gc2VudCBmcm9tIGJhY2tlbmQgd2hpY2ggY29udGFpbnMgZGF0YSBhbmRcclxuICAgICAgICAgICAgLy8gdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxJdGVtQ291bnQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRvdGFsRGF0YUNvdW50KHRvdGFsSXRlbUNvdW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICB9LCBbdXJsLCBoYXBwZW5pbmddKTsgXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH07XHJcblxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCIvLyBldmVudC1tb2RpZmllcnNcclxuaW1wb3J0IHsgZXZlbnRzRGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9FdmVudHMubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuLy9JbWFnZXNcclxuaW1wb3J0IGxvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NhcnRvbi13b21hbi5qcGdcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IEFkZEV2ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvQWRkRXZlbnRcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcbmltcG9ydCBFdmVudERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9FdmVudERldGFpbHNcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9NZXNzYWdlXCI7XHJcbmltcG9ydCBOZXh0UHJldkl0ZW1zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtc1wiO1xyXG5pbXBvcnQgTmV4dFByZXZWaWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZWaWV3XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50cyAoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2V2ZW50U3RhdGUsIHNldEV2ZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHNcIjtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyBzZWFyY2hUZXh0OiBldmVudFN0YXRlLnNlYXJjaFRleHQsIHNraXA6IGV2ZW50U3RhdGUuc2tpcCwgbGltaXQ6IGV2ZW50U3RhdGUubGltaXQgfTtcclxuICAgIGNvbnN0IHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VBeGlvcyhcInBvc3RcIiwgZW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoYXBwZW5pbmcpO1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICBkYXRhOiBsb2NhdGlvbkRhdGEsIFxyXG4gICAgICAgIGVycm9yOiBsb2NhdGlvbkRhdGFGZXRjaGluZ0Vycm9yLCBcclxuICAgICAgICBsb2FkaW5nOiBsb2NhdGlvbkRhdGFGZXRjaGluZ0xvYWRpbmcgXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9uc1wiLCB7fSwgaGFwcGVuaW5nKTtcclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgZGF0YTogY2F0ZWdvcnlEYXRhLCBcclxuICAgICAgICBlcnJvcjogY2F0ZWdvcnlEYXRhRmV0Y2hpbmdFcnJvciwgXHJcbiAgICAgICAgbG9hZGluZzogY2F0ZWdvcnlEYXRhRmV0Y2hpbmdMb2FkaW5nIFxyXG4gICAgfSA9IHVzZUF4aW9zKFwiZ2V0XCIsIFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCIsIHt9LCBoYXBwZW5pbmcpO1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICBkYXRhOiB0cmVhdG1lbnREYXRhLCBcclxuICAgICAgICBlcnJvcjogdHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IsIFxyXG4gICAgICAgIGxvYWRpbmc6IHRyZWF0bWVudERhdGFGZXRjaGluZ0xvYWRpbmcgXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3RyZWF0bWVudHNcIiwge30sIGhhcHBlbmluZyk7XHJcbiAgIFxyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0cmVhdG1lbnRzLCBzZXRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXZlbnRUYWJsZURhdGEsIHNldEV2ZW50VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthY3Rpb25NZXNzYWdlLCBzZXRBY3Rpb25NZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudEluZm8sIHNldEV2ZW50SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXZlbnRJZDogXCJcIixcclxuICAgICAgICBldmVudERhdGU6IG51bGwsIFxyXG4gICAgICAgIHN0YXJ0VGltZTogXCJcIixcclxuICAgICAgICBlbmRUaW1lOiBcIlwiLFxyXG4gICAgICAgIHRyZWF0bWVudENhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIHRyZWF0bWVudE5hbWU6IFwiXCIsXHJcbiAgICAgICAgc3R5bGlzdDogXCJcIixcclxuICAgICAgICBzdHlsaXN0RW1haWw6IFwiXCIsXHJcbiAgICAgICAgZXZlbnRMb2NhdGlvbjogXCJcIixcclxuICAgICAgICBldmVudER1cmF0aW9uOiAwLFxyXG4gICAgICAgIGNsaWVudE5hbWU6IFwiXCIsXHJcbiAgICAgICAgY2xpZW50RW1haWw6IFwiXCIsXHJcbiAgICAgICAgY2xpZW50UGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZXZlbnREZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBldmVudFByaWNlOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZXZlbnRMb2NhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRyZWF0bWVudENhdGVnb3J5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJlYXRtZW50TmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZW5kVGltZS5zdWJzdHJpbmcoZXZlbnQuZW5kVGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LmVuZFRpbWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50RW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFZpZXcgRGV0YWlscy0ke2V2ZW50Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEV2ZW50VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldEV2ZW50U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihsb2NhdGlvbkRhdGEgIT09IG51bGwpIHNldExvY2F0aW9ucyhsb2NhdGlvbkRhdGEpO1xyXG4gICAgICAgIGlmKGNhdGVnb3J5RGF0YSAhPT0gbnVsbCkgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeURhdGEpO1xyXG4gICAgICAgIGlmKHRyZWF0bWVudERhdGEgIT09IG51bGwpIHNldFRyZWF0bWVudHModHJlYXRtZW50RGF0YSk7XHJcblxyXG4gICAgfSwgW2RhdGEsIGxvY2F0aW9uRGF0YSwgY2F0ZWdvcnlEYXRhLCB0cmVhdG1lbnREYXRhLCBoYXBwZW5pbmddKTtcclxuXHJcblxyXG4gICBcclxuICAgXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkVXBkYXRlRXZlbnQoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBldmVudERhdGUsIGV2ZW50TG9jYXRpb24sIHRyZWF0bWVudENhdGVnb3J5LCB0cmVhdG1lbnROYW1lLCBzdHlsaXN0LCBzdGFydFRpbWUsIGNsaWVudEVtYWlsIH0gPSBldmVudEluZm87XHJcblxyXG4gICAgICAgIGlmKCFldmVudERhdGUpIHJldHVybiBhbGVydChcIlBsZWFzZSBwaWNrIGEgZGF0ZVwiKTtcclxuICAgICAgICBpZighZXZlbnRMb2NhdGlvbikgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGxvY2F0aW9uXCIpO1xyXG4gICAgICAgIGlmKCF0cmVhdG1lbnRDYXRlZ29yeSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGNhdGVnb3J5XCIpO1xyXG4gICAgICAgIGlmKCF0cmVhdG1lbnROYW1lKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgdHJlYXRtZW50XCIpO1xyXG4gICAgICAgIGlmKCFzdHlsaXN0KSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgc3R5bGlzdFwiKTtcclxuICAgICAgICBpZighc3RhcnRUaW1lKSByZXR1cm4gYWxlcnQoXCJwbGVhc2Ugc2VsZWN0IGEgc3RhcnQgdGltZVwiKTtcclxuICAgICAgICBpZighY2xpZW50RW1haWwpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVmYXVsdCBlbmRwb2ludCBpcyBhZGQgZXZlbnRcclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50cy9hZGQtZXZlbnRcIjtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBCdXQgaWYgZXZlbnRJZCBpcyBub3QgZW1wdHkgdGhlbiB1cGRhdGUgcmVxdWVzdCBzaG91bGQgYmUgc2VudFxyXG4gICAgICAgICAgICBpZiAoZXZlbnRJZCkgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzL3VwZGF0ZVwiXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgZXZlbnRJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZlciBhZGRpbmdcIilcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaE5leHRQcmV2SXRlbXMoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U2tpcCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRFdmVudFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2tpcDogbmV3U2tpcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmdGVyIG5leHQgYnV0dG9uIGNsaWNrZWRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHNcIiBzdHlsZSA9IHt7ZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGhlaWdodDogXCIxMDB2aFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlID0ge3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8QWRkRXZlbnRcclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBldmVudEluZm8gPSB7ZXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50SW5mbyA9IHtzZXRFdmVudEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zID0ge2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzID0ge2NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50cyA9IHt0cmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZFVwZGF0ZUV2ZW50ID0ge2FkZFVwZGF0ZUV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtldmVudFN0YXRlLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldEV2ZW50U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhcHBlbmluZyA9IHtzZXRIYXBwZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSl9PkFkZCBldmVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtldmVudHNEYXRhVGFibGVIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7ZXZlbnRUYWJsZURhdGF9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlRm9yID0gXCJldmVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRFdmVudElkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RXZlbnREZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzID0ge2V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICBldmVudElkID0ge2V2ZW50SWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50SWQgPSB7c2V0RXZlbnRJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRIYXBwZW5pbmcgPSB7c2V0SGFwcGVuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UgPSB7c2V0QWN0aW9uTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2SXRlbXMgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7ZXZlbnRTdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0RXZlbnRTdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hOZXh0UHJldkl0ZW1zID0ge2ZldGNoTmV4dFByZXZJdGVtc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TmV4dFByZXZWaWV3IHN0YXRlID0ge2V2ZW50U3RhdGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0ge2FjdGlvbk1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZSA9IHtzZXRBY3Rpb25NZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvY2FydG9uLXdvbWFuLjlhNWI4ZTJhMTg1NGJmZTA1NTYxNjVhMTQ3ZTBmYTE4LmpwZ1wiLFwiaGVpZ2h0XCI6MTMwMCxcIndpZHRoXCI6MTMwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZjYXJ0b24td29tYW4uOWE1YjhlMmExODU0YmZlMDU1NjE2NWExNDdlMGZhMTguanBnJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZ1wiLFwiaGVpZ2h0XCI6NDAwMCxcIndpZHRoXCI6NjAwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZyYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guZWNiOGNjNDcyMjEzNzkwNGQ3MDIyYzU5MTgzNDlhNmYuanBnJnc9OCZxPTcwXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFkbWluX2FyZWFcIjogXCJDb250cm9sUGFuZWxfYWRtaW5fYXJlYV9fMWt1VVZcIixcblx0XCJjb250cm9sX3BhbmVsXCI6IFwiQ29udHJvbFBhbmVsX2NvbnRyb2xfcGFuZWxfXzNnLVNEXCIsXG5cdFwiY3JlYXRlX25ld19ldmVudFwiOiBcIkNvbnRyb2xQYW5lbF9jcmVhdGVfbmV3X2V2ZW50X18yLTE1QlwiLFxuXHRcImV2ZW50X2luZm9cIjogXCJDb250cm9sUGFuZWxfZXZlbnRfaW5mb19fM0RFWUNcIixcblx0XCJldmVudF9pbmZvX2RpdlwiOiBcIkNvbnRyb2xQYW5lbF9ldmVudF9pbmZvX2Rpdl9fMy1KYlhcIixcblx0XCJpbnB1dF9sYWJlbFwiOiBcIkNvbnRyb2xQYW5lbF9pbnB1dF9sYWJlbF9fMWJSZ2dcIixcblx0XCJpbnB1dF9maWVsZFwiOiBcIkNvbnRyb2xQYW5lbF9pbnB1dF9maWVsZF9fMURXczdcIixcblx0XCJ0ZXh0X2lucHV0XCI6IFwiQ29udHJvbFBhbmVsX3RleHRfaW5wdXRfXzMydnhXXCIsXG5cdFwicWFfY29udGVudFwiOiBcIkNvbnRyb2xQYW5lbF9xYV9jb250ZW50X19Qd3ZJZFwiLFxuXHRcInFhX3RpdGxlXCI6IFwiQ29udHJvbFBhbmVsX3FhX3RpdGxlX18xWXhlLVwiLFxuXHRcInFhX2hlYWRlcnNcIjogXCJDb250cm9sUGFuZWxfcWFfaGVhZGVyc19fMnhWdFRcIixcblx0XCJxYV9xdWVzdGlvbl9oZWFkZXJcIjogXCJDb250cm9sUGFuZWxfcWFfcXVlc3Rpb25faGVhZGVyX18zSGtfb1wiLFxuXHRcInFhX2Fuc3dlcl9oZWFkZXJcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX2hlYWRlcl9fM2tUc0JcIixcblx0XCJxYV9hbnN3ZXJfdGl0bGVcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX3RpdGxlX18ycG00elwiLFxuXHRcInFhX2Fuc3dlcl9ibGFua1wiOiBcIkNvbnRyb2xQYW5lbF9xYV9hbnN3ZXJfYmxhbmtfXzFBd1RGXCIsXG5cdFwicWFfbWFpbl9jb250ZW50XCI6IFwiQ29udHJvbFBhbmVsX3FhX21haW5fY29udGVudF9fdElDS0ZcIixcblx0XCJxYV9xdWVzdGlvbl9jb250ZW50XCI6IFwiQ29udHJvbFBhbmVsX3FhX3F1ZXN0aW9uX2NvbnRlbnRfXzNfeWppXCIsXG5cdFwicWFfYW5zd2VyX2NvbnRlbnRcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX2NvbnRlbnRfX2EtNF9UXCIsXG5cdFwicWFfYW5zd2VyX3RleHRfaW5wdXRcIjogXCJDb250cm9sUGFuZWxfcWFfYW5zd2VyX3RleHRfaW5wdXRfXzF6NDhrXCIsXG5cdFwicWFfYW5zd2VyX3JhZGlvX2lucHV0XCI6IFwiQ29udHJvbFBhbmVsX3FhX2Fuc3dlcl9yYWRpb19pbnB1dF9faW9TTmtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV2ZW50RGV0YWlsc19tb2RhbFwiOiBcIkV2ZW50c19ldmVudERldGFpbHNfbW9kYWxfXzJ2TmpHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uX2hlYWRlclwiOiBcIkNvbW1vblN0eWxlc19zZWN0aW9uX2hlYWRlcl9fMWh6OGJcIixcblx0XCJzZWN0aW9uSGVhZGVyX2NvbnRlbnRcIjogXCJDb21tb25TdHlsZXNfc2VjdGlvbkhlYWRlcl9jb250ZW50X18zcmJGOVwiLFxuXHRcInNlYXJjaFwiOiBcIkNvbW1vblN0eWxlc19zZWFyY2hfXzNzb09tXCIsXG5cdFwiYWRtaW5fYWRkX2Zvcm1cIjogXCJDb21tb25TdHlsZXNfYWRtaW5fYWRkX2Zvcm1fXzJPbHFqXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkNvbW1vblN0eWxlc19idXR0b25zX19fem1tMlwiLFxuXHRcInByb2ZpbGVfcGljdHVyZVwiOiBcIkNvbW1vblN0eWxlc19wcm9maWxlX3BpY3R1cmVfXzJxVmJCXCIsXG5cdFwiaW1hZ2VfdXBsb2FkZXJcIjogXCJDb21tb25TdHlsZXNfaW1hZ2VfdXBsb2FkZXJfXzF6R25NXCIsXG5cdFwidXNlcl9pbmZvX2NvbnRhaW5lclwiOiBcIkNvbW1vblN0eWxlc191c2VyX2luZm9fY29udGFpbmVyX18zUW94TFwiLFxuXHRcInVzZXJfaW5mb1wiOiBcIkNvbW1vblN0eWxlc191c2VyX2luZm9fX01jWjhDXCIsXG5cdFwiYmFzaWNfaW5mb19pbnB1dHNcIjogXCJDb21tb25TdHlsZXNfYmFzaWNfaW5mb19pbnB1dHNfXzFUam8zXCIsXG5cdFwiZW1haWxfaW5wdXRzXCI6IFwiQ29tbW9uU3R5bGVzX2VtYWlsX2lucHV0c19fMTFETWRcIixcblx0XCJwYXNzd29yZF9pbnB1dHNcIjogXCJDb21tb25TdHlsZXNfcGFzc3dvcmRfaW5wdXRzX18yOUVqalwiLFxuXHRcImlucHV0XCI6IFwiQ29tbW9uU3R5bGVzX2lucHV0X18yUjJmMVwiLFxuXHRcImlucHV0X2xhYmVsXCI6IFwiQ29tbW9uU3R5bGVzX2lucHV0X2xhYmVsX18xc201NVwiLFxuXHRcImltYWdlX3ByZXZpZXdcIjogXCJDb21tb25TdHlsZXNfaW1hZ2VfcHJldmlld19fMXdXS2hcIixcblx0XCJpbWFnZV9maWxlX2lucHV0XCI6IFwiQ29tbW9uU3R5bGVzX2ltYWdlX2ZpbGVfaW5wdXRfXzNtR0FYXCIsXG5cdFwiaW1hZ2VfZmlsZW5hbWVcIjogXCJDb21tb25TdHlsZXNfaW1hZ2VfZmlsZW5hbWVfXzFPWmttXCIsXG5cdFwiaW1hZ2VfdXBsb2FkX2J1dHRvblwiOiBcIkNvbW1vblN0eWxlc19pbWFnZV91cGxvYWRfYnV0dG9uX18zTTgxSFwiLFxuXHRcImVycm9yX21lc3NhZ2VcIjogXCJDb21tb25TdHlsZXNfZXJyb3JfbWVzc2FnZV9fM0ZMdHlcIixcblx0XCJzdWNjZXNzRmFpbF9tZXNzYWdlXCI6IFwiQ29tbW9uU3R5bGVzX3N1Y2Nlc3NGYWlsX21lc3NhZ2VfXzJmeUlKXCJcbn07XG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkNvbnRyb2xQYW5lbCIsImNvbnRyb2xfcGFuZWwiLCJheGlvcyIsIkRhdGVQaWNrZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF4aW9zIiwidGltZXMiLCJEcm9wZG93bkxpc3QiLCJJbnB1dCIsIlNhdmVCdXR0b24iLCJBZGRFdmVudCIsImxvY2F0aW9ucyIsImNhdGVnb3JpZXMiLCJ0cmVhdG1lbnRzIiwiZXZlbnRJbmZvIiwic2V0RXZlbnRJbmZvIiwiaXNBZGRpbmdVcGRhdGluZyIsInNldElzQWRkaW5nVXBkYXRpbmciLCJ2YWxpZGF0aW9uRXJyb3IiLCJhZGRVcGRhdGVFdmVudCIsIm5ld1RyZWF0bWVudHMiLCJzZXROZXdUcmVhdG1lbnRzIiwic3R5bGlzdHMiLCJzZXRTdHlsaXN0cyIsImRhdGVPbkNoYW5nZSIsImRhdGUiLCJjdXJyZW50VmFsIiwiZXZlbnREYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmVhdG1lbnRDYXRlZ29yeSIsInRyZWF0bWVudE5hbWUiLCJzdHlsaXN0IiwiZXZlbnREdXJhdGlvbiIsImV2ZW50UHJpY2UiLCJmaWx0ZXJlZFRyZWF0bWVudHMiLCJmaWx0ZXIiLCJ0cmVhdG1lbnQiLCJjYXRlZ29yeSIsIngiLCJsZW5ndGgiLCJ0aXRsZSIsIm5ld1N0eWxpc3RzIiwiZm9yRWFjaCIsInB1c2giLCJpZCIsImR1cmF0aW9uIiwicHJpY2UiLCJkaXNwbGF5IiwiY2xpZW50TmFtZSIsImNsaWVudEVtYWlsIiwiY2xpZW50UGhvbmUiLCJldmVudERlc2NyaXB0aW9uIiwicHJldmVudERlZmF1bHQiLCJldmVudElkIiwiRXZlbnREZXRhaWxzIiwiZXZlbnRzIiwic2V0RXZlbnRJZCIsInNldEFjdGlvbk1lc3NhZ2UiLCJzZXRIYXBwZW5pbmciLCJjYW5jZWxFdmVudCIsIl9pZCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJlcnJvciIsIm1hcCIsImluZGV4IiwiZXZlbnREZXRhaWxzX21vZGFsIiwidG9TdHJpbmciLCJzdGF0dXMiLCJDbG9zZVBvcFVwTWVzc2FnZUJ1dHRvbiIsIm5hbWVLZXkiLCJibGFua09wdGlvblZhbHVlIiwiaGFuZGxlRHJvcGRvd25PbmNoYW5nZSIsIml0ZW0iLCJFcnJvck1lc3NhZ2UiLCJjb250ZW50IiwiY29uZGl0aW9uIiwiZXJyb3JfbWVzc2FnZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJzZXREYXRhIiwiaW5wdXQiLCJpbnB1dF9sYWJlbCIsIk1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZVN0eWxlIiwidHJhbnNmb3JtIiwiTmV4dFByZXZJdGVtcyIsInN0YXRlIiwiZmV0Y2hOZXh0UHJldkl0ZW1zIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJmaXJzdENvbmR0aW9uIiwic2Vjb25kQ29uZGl0aW9uIiwiTmV4dFByZXZWaWV3IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImFkZE5ld0l0ZW0iLCJzZXRFcnJvciIsInNldFN1Y2Nlc3NGYWlsTWVzc2FnZSIsIlNlYXJjaElucHV0Iiwic2V0U3RhdGUiLCJjdXJyZW50VmFsdWUiLCJUYWJsZUhlYWRlciIsIlRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsInRhYmxlRm9yIiwidGFibGVIZWFkZXJzIiwidGFibGVEYXRhIiwiZHluYW1pY0NsYXNzIiwic2V0SXRlbUlkIiwib3BlbkRlbGV0ZVByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsImluZGV4T2YiLCJoZWFkZXIiLCJkYXlzT2ZUaGVXZWVrIiwidGltZSIsImxvY2F0aW9uRGF0YVRhYmxlSGVhZGVycyIsImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsInRyZWF0bWVudERhdGFUYWJsZUhlYWRlcnMiLCJzdHlsaXN0RGF0YVRhYmxlSGVhZGVycyIsImV2ZW50c0RhdGFUYWJsZUhlYWRlcnMiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwiaGFwcGVuaW5nIiwidG90YWxEYXRhQ291bnQiLCJzZXRUb3RhbERhdGFDb3VudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwibmV3RGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW1zIiwidG90YWxJdGVtQ291bnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsImkiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50IiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJJbWFnZSIsIkhlYWQiLCJsb2dpbkJnSW1hZ2UiLCJsb2dvSW1hZ2UiLCJFdmVudHMiLCJldmVudFN0YXRlIiwic2V0RXZlbnRTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvbkRhdGFGZXRjaGluZ0Vycm9yIiwibG9jYXRpb25EYXRhRmV0Y2hpbmdMb2FkaW5nIiwiY2F0ZWdvcnlEYXRhIiwiY2F0ZWdvcnlEYXRhRmV0Y2hpbmdFcnJvciIsImNhdGVnb3J5RGF0YUZldGNoaW5nTG9hZGluZyIsInRyZWF0bWVudERhdGEiLCJ0cmVhdG1lbnREYXRhRmV0Y2hpbmdFcnJvciIsInRyZWF0bWVudERhdGFGZXRjaGluZ0xvYWRpbmciLCJzZXRMb2NhdGlvbnMiLCJzZXRDYXRlZ29yaWVzIiwic2V0VHJlYXRtZW50cyIsInNldEV2ZW50cyIsImV2ZW50VGFibGVEYXRhIiwic2V0RXZlbnRUYWJsZURhdGEiLCJhY3Rpb25NZXNzYWdlIiwic2V0VmFsaWRhdGlvbkVycm9yIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInN0eWxpc3RFbWFpbCIsImV2ZW50TG9jYXRpb24iLCJhbGVydCIsIm1zZyIsIm5ld1NraXAiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9
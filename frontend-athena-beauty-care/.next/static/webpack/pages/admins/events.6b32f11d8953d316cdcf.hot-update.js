"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/events",{

/***/ "./pages/admins/events.js":
/*!********************************!*\
  !*** ./pages/admins/events.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Events; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_carton_woman_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/carton-woman.jpg */ "./images/carton-woman.jpg");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_admins_events_AddEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/admins/events/AddEvent */ "./components/admins/events/AddEvent.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/admins/events/EventDetails */ "./components/admins/events/EventDetails.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevView */ "./components/reusable-components/NextPrevView.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\events.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// event-modifiers

 // Next Modules


 // For Redirecting 


 // For google fonts and others

 // React Modules


 //Images


 // components










function Events() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      eventState = _useState2[0],
      setEventState = _useState2[1]; // Custom hook call to fetch data


  var endpoint = "http://localhost:7070/api/events";
  var requestBody = {
    searchText: eventState.searchText,
    skip: eventState.skip,
    limit: eventState.limit
  };

  var _useAxios = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default)("post", endpoint, requestBody, happening),
      data = _useAxios.data,
      totalDataCount = _useAxios.totalDataCount,
      error = _useAxios.error,
      loading = _useAxios.loading;

  var _useAxios2 = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default)("get", "http://localhost:7070/api/locations", {}, happening),
      locationData = _useAxios2.data,
      locationDataFetchingError = _useAxios2.error,
      locationDataFetchingLoading = _useAxios2.loading;

  var _useAxios3 = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default)("get", "http://localhost:7070/api/categories", {}, happening),
      categoryData = _useAxios3.data,
      categoryDataFetchingError = _useAxios3.error,
      categoryDataFetchingLoading = _useAxios3.loading;

  var _useAxios4 = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default)("get", "http://localhost:7070/api/treatments", {}, happening),
      treatmentData = _useAxios4.data,
      treatmentDataFetchingError = _useAxios4.error,
      treatmentDataFetchingLoading = _useAxios4.loading;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      locations = _useState3[0],
      setLocations = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categories = _useState4[0],
      setCategories = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      treatments = _useState5[0],
      setTreatments = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      events = _useState6[0],
      setEvents = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      eventTableData = _useState7[0],
      setEventTableData = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      actionMessage = _useState8[0],
      setActionMessage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showDeletePrompt = _useState9[0],
      setShowDeletePrompt = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      eventIdForDeleting = _useState10[0],
      setEventIdForDeleting = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      itemNameForDeletePrompt = _useState11[0],
      setItemNameForDeletePrompt = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      validationError = _useState12[0],
      setValidationError = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      eventId = _useState13[0],
      setEventId = _useState13[1];

  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      isAddingUpdating = _useState14[0],
      setIsAddingUpdating = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
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
  }),
      eventInfo = _useState15[0],
      setEventInfo = _useState15[1];

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    setHappening("fetching");

    if (data !== null) {
      setEvents(data);
      var newData = [];
      data.forEach(function (event, index) {
        newData.push({
          id: index + 1,
          data: [event.eventLocation, event.treatmentCategory, event.treatmentName, event.stylist, event.startTime.substring(0, event.startTime.indexOf("T")), event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length), event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length), event.clientEmail, event.status, "View Details-".concat(event._id.toString()) // `Delete-${event._id.toString()}`
          ]
        });
      });
      setEventTableData(newData);
      setEventState(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          dataLength: totalDataCount
        });
      });
    }

    if (locationData !== null) setLocations(locationData);
    if (categoryData !== null) setCategories(categoryData);
    if (treatmentData !== null) setTreatments(treatmentData);
  }, [data, locationData, categoryData, treatmentData, happening]);

  function addUpdateEvent(_x) {
    return _addUpdateEvent.apply(this, arguments);
  }

  function _addUpdateEvent() {
    _addUpdateEvent = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var eventDate, eventLocation, treatmentCategory, treatmentName, stylist, startTime, clientEmail, _endpoint, response;

      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              eventDate = eventInfo.eventDate, eventLocation = eventInfo.eventLocation, treatmentCategory = eventInfo.treatmentCategory, treatmentName = eventInfo.treatmentName, stylist = eventInfo.stylist, startTime = eventInfo.startTime, clientEmail = eventInfo.clientEmail;

              if (eventDate) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", alert("Please pick a date"));

            case 4:
              if (eventLocation) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", alert("Please select a location"));

            case 6:
              if (treatmentCategory) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", alert("Please select a category"));

            case 8:
              if (treatmentName) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", alert("Please select a treatment"));

            case 10:
              if (stylist) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", alert("Please select a stylist"));

            case 12:
              if (startTime) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", alert("please select a start time"));

            case 14:
              if (clientEmail) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", setValidationError(true));

            case 16:
              _context.prev = 16;
              setActionMessage("Saving"); // Default endpoint is add event

              _endpoint = "http://localhost:7070/api/events/add-event"; // But if eventId is not empty then update request should be sent

              if (eventId) _endpoint = "http://localhost:7070/api/events/update";
              _context.next = 22;
              return axios__WEBPACK_IMPORTED_MODULE_10___default().post(_endpoint, eventInfo);

            case 22:
              response = _context.sent;
              setActionMessage(response.data.msg);
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](16);
              setActionMessage(_context.t0.response.data.msg);

            case 29:
              _context.prev = 29;
              setHappening("refetching afer adding");
              return _context.finish(29);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[16, 26, 29, 32]]);
    }));
    return _addUpdateEvent.apply(this, arguments);
  }

  function fetchNextPrevItems(event) {
    var newSkip = Number(event.target.value);
    setEventState(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        skip: newSkip
      });
    });
    setHappening("refetching after next button clicked");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
    className: "events",
    style: {
      display: "flex",
      position: "relative",
      height: "100vh",
      overflow: "hidden"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
      className: "content",
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_events_AddEvent__WEBPACK_IMPORTED_MODULE_15__.default, {
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
        lineNumber: 225,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_14__.default, {
          value: eventState.searchText,
          setState: setEventState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("button", {
          onClick: function onClick() {
            return setIsAddingUpdating(true);
          },
          children: "Add event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_16__.default, {
        tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.eventsDataTableHeaders,
        tableData: eventTableData,
        tableFor: "events",
        setItemId: setEventId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_17__.default, {
        events: events,
        eventId: eventId,
        setEventId: setEventId,
        setHappening: setHappening,
        setActionMessage: setActionMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_19__.default, {
        state: eventState,
        setState: setEventState,
        fetchNextPrevItems: fetchNextPrevItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_20__.default, {
        state: eventState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_18__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 9
  }, this);
}

_s(Events, "3dpZeG9vS0VEH4mw9wJaKPW4XCg=", false, function () {
  return [_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default, _libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default, _libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default, _libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Events;

var _c;

$RefreshReg$(_c, "Events");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2V2ZW50cy42YjMyZjExZDg5NTNkMzE2Y2RjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBO0NBQ3lDOztBQUN6QztDQUM4Qjs7Q0FHOUI7O0FBQ0E7Q0FLQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT2UsU0FBU29CLE1BQVQsR0FBbUI7QUFBQTs7QUFHOUIsa0JBQWtDWiwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPYSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFvQ2QsK0NBQVEsQ0FBQztBQUN6Q2UsSUFBQUEsVUFBVSxFQUFFLEVBRDZCO0FBRXpDQyxJQUFBQSxJQUFJLEVBQUUsQ0FGbUM7QUFHekNDLElBQUFBLEtBQUssRUFBRSxFQUhrQztBQUl6Q0MsSUFBQUEsVUFBVSxFQUFFO0FBSjZCLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5CLGlCQUo4QixDQVc5Qjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLGtDQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFFUCxJQUFBQSxVQUFVLEVBQUVJLFVBQVUsQ0FBQ0osVUFBekI7QUFBcUNDLElBQUFBLElBQUksRUFBRUcsVUFBVSxDQUFDSCxJQUF0RDtBQUE0REMsSUFBQUEsS0FBSyxFQUFFRSxVQUFVLENBQUNGO0FBQTlFLEdBQXBCOztBQUNBLGtCQUFpRHhCLHVEQUFRLENBQUMsTUFBRCxFQUFTNEIsUUFBVCxFQUFtQkMsV0FBbkIsRUFBZ0NULFNBQWhDLENBQXpEO0FBQUEsTUFBUVUsSUFBUixhQUFRQSxJQUFSO0FBQUEsTUFBY0MsY0FBZCxhQUFjQSxjQUFkO0FBQUEsTUFBOEJDLEtBQTlCLGFBQThC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QUFBO0FBQUE7QUFBQSxZQS9ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVFSDs7R0E3UHVCbkM7VUFjNkJuQixxREFLN0NBLHFEQUtBQSxxREFLQUE7OztLQTdCZ0JtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbnMvZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV2ZW50LW1vZGlmaWVyc1xyXG5pbXBvcnQgeyBldmVudHNEYXRhVGFibGVIZWFkZXJzIH0gZnJvbSBcIi4uLy4uL2xpYnMvZGF0YVwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuXHJcblxyXG4vLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgLy8gRm9yIFJlZGlyZWN0aW5nIFxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiOyAvLyBGb3IgZ29vZ2xlIGZvbnRzIGFuZCBvdGhlcnNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0V2ZW50cy5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG4vL0ltYWdlc1xyXG5pbXBvcnQgbG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FydG9uLXdvbWFuLmpwZ1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbFwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgQWRkRXZlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9BZGRFdmVudFwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGVcIjtcclxuaW1wb3J0IEV2ZW50RGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvZXZlbnRzL0V2ZW50RGV0YWlsc1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBOZXh0UHJldlZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldlZpZXdcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzICgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgW2hhcHBlbmluZywgc2V0SGFwcGVuaW5nXSA9IHVzZVN0YXRlKFwiRmV0Y2hpbmdcIik7XHJcbiAgICBjb25zdCBbZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc2VhcmNoVGV4dDogXCJcIixcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBkYXRhTGVuZ3RoOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDdXN0b20gaG9vayBjYWxsIHRvIGZldGNoIGRhdGFcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50c1wiO1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IHNlYXJjaFRleHQ6IGV2ZW50U3RhdGUuc2VhcmNoVGV4dCwgc2tpcDogZXZlbnRTdGF0ZS5za2lwLCBsaW1pdDogZXZlbnRTdGF0ZS5saW1pdCB9O1xyXG4gICAgY29uc3QgeyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUF4aW9zKFwicG9zdFwiLCBlbmRwb2ludCwgcmVxdWVzdEJvZHksIGhhcHBlbmluZyk7XHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIGRhdGE6IGxvY2F0aW9uRGF0YSwgXHJcbiAgICAgICAgZXJyb3I6IGxvY2F0aW9uRGF0YUZldGNoaW5nRXJyb3IsIFxyXG4gICAgICAgIGxvYWRpbmc6IGxvY2F0aW9uRGF0YUZldGNoaW5nTG9hZGluZyBcclxuICAgIH0gPSB1c2VBeGlvcyhcImdldFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zXCIsIHt9LCBoYXBwZW5pbmcpO1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICBkYXRhOiBjYXRlZ29yeURhdGEsIFxyXG4gICAgICAgIGVycm9yOiBjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yLCBcclxuICAgICAgICBsb2FkaW5nOiBjYXRlZ29yeURhdGFGZXRjaGluZ0xvYWRpbmcgXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXNcIiwge30sIGhhcHBlbmluZyk7XHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIGRhdGE6IHRyZWF0bWVudERhdGEsIFxyXG4gICAgICAgIGVycm9yOiB0cmVhdG1lbnREYXRhRmV0Y2hpbmdFcnJvciwgXHJcbiAgICAgICAgbG9hZGluZzogdHJlYXRtZW50RGF0YUZldGNoaW5nTG9hZGluZyBcclxuICAgIH0gPSB1c2VBeGlvcyhcImdldFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvdHJlYXRtZW50c1wiLCB7fSwgaGFwcGVuaW5nKTtcclxuICAgXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyZWF0bWVudHMsIHNldFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtldmVudFRhYmxlRGF0YSwgc2V0RXZlbnRUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FjdGlvbk1lc3NhZ2UsIHNldEFjdGlvbk1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXZlbnRJZEZvckRlbGV0aW5nLCBzZXRFdmVudElkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudEluZm8sIHNldEV2ZW50SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXZlbnRJZDogXCJcIixcclxuICAgICAgICBldmVudERhdGU6IG51bGwsIFxyXG4gICAgICAgIHN0YXJ0VGltZTogXCJcIixcclxuICAgICAgICBlbmRUaW1lOiBcIlwiLFxyXG4gICAgICAgIHRyZWF0bWVudENhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIHRyZWF0bWVudE5hbWU6IFwiXCIsXHJcbiAgICAgICAgc3R5bGlzdDogXCJcIixcclxuICAgICAgICBzdHlsaXN0RW1haWw6IFwiXCIsXHJcbiAgICAgICAgZXZlbnRMb2NhdGlvbjogXCJcIixcclxuICAgICAgICBldmVudER1cmF0aW9uOiAwLFxyXG4gICAgICAgIGNsaWVudE5hbWU6IFwiXCIsXHJcbiAgICAgICAgY2xpZW50RW1haWw6IFwiXCIsXHJcbiAgICAgICAgY2xpZW50UGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZXZlbnREZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBldmVudFByaWNlOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZXZlbnRMb2NhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRyZWF0bWVudENhdGVnb3J5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJlYXRtZW50TmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZW5kVGltZS5zdWJzdHJpbmcoZXZlbnQuZW5kVGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LmVuZFRpbWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50RW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFZpZXcgRGV0YWlscy0ke2V2ZW50Ll9pZC50b1N0cmluZygpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBEZWxldGUtJHtldmVudC5faWQudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRFdmVudFRhYmxlRGF0YShuZXdEYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRFdmVudFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoOiB0b3RhbERhdGFDb3VudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobG9jYXRpb25EYXRhICE9PSBudWxsKSBzZXRMb2NhdGlvbnMobG9jYXRpb25EYXRhKTtcclxuICAgICAgICBpZihjYXRlZ29yeURhdGEgIT09IG51bGwpIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlEYXRhKTtcclxuICAgICAgICBpZih0cmVhdG1lbnREYXRhICE9PSBudWxsKSBzZXRUcmVhdG1lbnRzKHRyZWF0bWVudERhdGEpO1xyXG5cclxuICAgIH0sIFtkYXRhLCBsb2NhdGlvbkRhdGEsIGNhdGVnb3J5RGF0YSwgdHJlYXRtZW50RGF0YSwgaGFwcGVuaW5nXSk7XHJcblxyXG5cclxuICAgXHJcbiAgIFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFVwZGF0ZUV2ZW50KGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXZlbnREYXRlLCBldmVudExvY2F0aW9uLCB0cmVhdG1lbnRDYXRlZ29yeSwgdHJlYXRtZW50TmFtZSwgc3R5bGlzdCwgc3RhcnRUaW1lLCBjbGllbnRFbWFpbCB9ID0gZXZlbnRJbmZvO1xyXG5cclxuICAgICAgICBpZighZXZlbnREYXRlKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgcGljayBhIGRhdGVcIik7XHJcbiAgICAgICAgaWYoIWV2ZW50TG9jYXRpb24pIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBsb2NhdGlvblwiKTtcclxuICAgICAgICBpZighdHJlYXRtZW50Q2F0ZWdvcnkpIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBjYXRlZ29yeVwiKTtcclxuICAgICAgICBpZighdHJlYXRtZW50TmFtZSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHRyZWF0bWVudFwiKTtcclxuICAgICAgICBpZighc3R5bGlzdCkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHN0eWxpc3RcIik7XHJcbiAgICAgICAgaWYoIXN0YXJ0VGltZSkgcmV0dXJuIGFsZXJ0KFwicGxlYXNlIHNlbGVjdCBhIHN0YXJ0IHRpbWVcIik7XHJcbiAgICAgICAgaWYoIWNsaWVudEVtYWlsKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIlNhdmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlZmF1bHQgZW5kcG9pbnQgaXMgYWRkIGV2ZW50XHJcbiAgICAgICAgICAgIGxldCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHMvYWRkLWV2ZW50XCI7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQnV0IGlmIGV2ZW50SWQgaXMgbm90IGVtcHR5IHRoZW4gdXBkYXRlIHJlcXVlc3Qgc2hvdWxkIGJlIHNlbnRcclxuICAgICAgICAgICAgaWYgKGV2ZW50SWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50cy91cGRhdGVcIlxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIGV2ZW50SW5mbyk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgIFxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZlciBhZGRpbmdcIilcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hOZXh0UHJldkl0ZW1zKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NraXAgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0RXZlbnRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHNraXA6IG5ld1NraXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZnRlciBuZXh0IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzXCIgc3R5bGUgPSB7e2Rpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fT5cclxuICAgICAgICAgICAgPENvbnRyb2xQYW5lbCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEFkZEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJbmZvID0ge2V2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudEluZm8gPSB7c2V0RXZlbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucyA9IHtsb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IHtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudHMgPSB7dHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICBhZGRVcGRhdGVFdmVudCA9IHthZGRVcGRhdGVFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRFdmVudFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hEYXRhID0ge3NlYXJjaFRyZWF0bWVudHN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkFkZCBFdmVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVFdmVudEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtldmVudFN0YXRlLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldEV2ZW50U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhcHBlbmluZyA9IHtzZXRIYXBwZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSl9PkFkZCBldmVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24+QWRkIEV2ZW50PC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7ZXZlbnRzRGF0YVRhYmxlSGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2V2ZW50VGFibGVEYXRhfSBcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUZvciA9IFwiZXZlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0RXZlbnRJZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEV2ZW50RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cyA9IHtldmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJZCA9IHtldmVudElkfSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudElkID0ge3NldEV2ZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFwcGVuaW5nID0ge3NldEhhcHBlbmluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxOZXh0UHJldkl0ZW1zIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge2V2ZW50U3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldEV2ZW50U3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoTmV4dFByZXZJdGVtcyA9IHtmZXRjaE5leHRQcmV2SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2VmlldyBzdGF0ZSA9IHtldmVudFN0YXRlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHthY3Rpb25NZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UgPSB7c2V0QWN0aW9uTWVzc2FnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiZXZlbnRzRGF0YVRhYmxlSGVhZGVycyIsInVzZUF4aW9zIiwiTGluayIsInVzZVJvdXRlciIsIkltYWdlIiwiSGVhZCIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJsb2dpbkJnSW1hZ2UiLCJsb2dvSW1hZ2UiLCJDb250cm9sUGFuZWwiLCJTZWFyY2hJbnB1dCIsIkFkZEV2ZW50IiwiRGF0YVRhYmxlIiwiRXZlbnREZXRhaWxzIiwiTWVzc2FnZSIsIk5leHRQcmV2SXRlbXMiLCJOZXh0UHJldlZpZXciLCJFdmVudHMiLCJoYXBwZW5pbmciLCJzZXRIYXBwZW5pbmciLCJzZWFyY2hUZXh0Iiwic2tpcCIsImxpbWl0IiwiZGF0YUxlbmd0aCIsImV2ZW50U3RhdGUiLCJzZXRFdmVudFN0YXRlIiwiZW5kcG9pbnQiLCJyZXF1ZXN0Qm9keSIsImRhdGEiLCJ0b3RhbERhdGFDb3VudCIsImVycm9yIiwibG9hZGluZyIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uRGF0YUZldGNoaW5nRXJyb3IiLCJsb2NhdGlvbkRhdGFGZXRjaGluZ0xvYWRpbmciLCJjYXRlZ29yeURhdGEiLCJjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yIiwiY2F0ZWdvcnlEYXRhRmV0Y2hpbmdMb2FkaW5nIiwidHJlYXRtZW50RGF0YSIsInRyZWF0bWVudERhdGFGZXRjaGluZ0Vycm9yIiwidHJlYXRtZW50RGF0YUZldGNoaW5nTG9hZGluZyIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidHJlYXRtZW50cyIsInNldFRyZWF0bWVudHMiLCJldmVudHMiLCJzZXRFdmVudHMiLCJldmVudFRhYmxlRGF0YSIsInNldEV2ZW50VGFibGVEYXRhIiwiYWN0aW9uTWVzc2FnZSIsInNldEFjdGlvbk1lc3NhZ2UiLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsImV2ZW50SWRGb3JEZWxldGluZyIsInNldEV2ZW50SWRGb3JEZWxldGluZyIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJldmVudElkIiwic2V0RXZlbnRJZCIsImlzQWRkaW5nVXBkYXRpbmciLCJzZXRJc0FkZGluZ1VwZGF0aW5nIiwiZXZlbnREYXRlIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyZWF0bWVudENhdGVnb3J5IiwidHJlYXRtZW50TmFtZSIsInN0eWxpc3QiLCJzdHlsaXN0RW1haWwiLCJldmVudExvY2F0aW9uIiwiZXZlbnREdXJhdGlvbiIsImNsaWVudE5hbWUiLCJjbGllbnRFbWFpbCIsImNsaWVudFBob25lIiwiZXZlbnREZXNjcmlwdGlvbiIsImV2ZW50UHJpY2UiLCJldmVudEluZm8iLCJzZXRFdmVudEluZm8iLCJuZXdEYXRhIiwiZm9yRWFjaCIsImV2ZW50IiwiaW5kZXgiLCJwdXNoIiwiaWQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVuZ3RoIiwic3RhdHVzIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJhZGRVcGRhdGVFdmVudCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJwb3N0IiwicmVzcG9uc2UiLCJtc2ciLCJmZXRjaE5leHRQcmV2SXRlbXMiLCJuZXdTa2lwIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
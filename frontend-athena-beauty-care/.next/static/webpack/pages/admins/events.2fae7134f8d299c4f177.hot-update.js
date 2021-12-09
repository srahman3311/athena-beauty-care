"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/events",{

/***/ "./components/reusable-components/NextPrevItems.js":
/*!*********************************************************!*\
  !*** ./components/reusable-components/NextPrevItems.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NextPrevItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\NextPrevItems.js";

function NextPrevItems(_ref) {
  var state = _ref.state,
      fetchNextPrevItems = _ref.fetchNextPrevItems;
  var searchText = state.searchText,
      skip = state.skip,
      limit = state.limit,
      dataLength = state.dataLength; // Previous Button

  var firstCondtion = skip - limit < 0;
  var secondCondition = skip === dataLength && skip - limit * 2 >= 0 ? skip - limit * 2 : skip - limit;
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
_c = NextPrevItems;

var _c;

$RefreshReg$(_c, "NextPrevItems");

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

/***/ "./components/reusable-components/NextPrevView.js":
/*!********************************************************!*\
  !*** ./components/reusable-components/NextPrevView.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\NextPrevView.js",
    _this = undefined;



var NextPrevView = function NextPrevView(_ref) {
  var state = _ref.state;
  var skip = state.skip,
      limit = state.limit,
      dataLength = state.dataLength;
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = NextPrevView;
/* harmony default export */ __webpack_exports__["default"] = (NextPrevView);

var _c;

$RefreshReg$(_c, "NextPrevView");

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
    className: "events",
    style: {
      display: "flex",
      position: "relative",
      height: "100vh"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
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
        lineNumber: 209,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_14__.default, {
          value: eventState.searchText,
          setState: setEventState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("button", {
          onClick: function onClick() {
            return setIsAddingUpdating(true);
          },
          children: "Add event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_16__.default, {
        tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.eventsDataTableHeaders,
        tableData: eventTableData,
        tableFor: "events",
        setItemId: setEventId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_events_EventDetails__WEBPACK_IMPORTED_MODULE_17__.default, {
        events: events,
        eventId: eventId,
        setEventId: setEventId,
        setHappening: setHappening,
        setActionMessage: setActionMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_19__.default, {
        state: state,
        setState: setState,
        fetchNextPrevItems: fetchNextPrevItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_20__.default, {
        state: state
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_18__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 205,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2V2ZW50cy4yZmFlNzEzNGY4ZDI5OWM0ZjE3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtlLFNBQVNBLGFBQVQsT0FBdUQ7QUFBQSxNQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLGtCQUFzQixRQUF0QkEsa0JBQXNCO0FBRWxFLE1BQVFDLFVBQVIsR0FBZ0RGLEtBQWhELENBQVFFLFVBQVI7QUFBQSxNQUFvQkMsSUFBcEIsR0FBZ0RILEtBQWhELENBQW9CRyxJQUFwQjtBQUFBLE1BQTBCQyxLQUExQixHQUFnREosS0FBaEQsQ0FBMEJJLEtBQTFCO0FBQUEsTUFBaUNDLFVBQWpDLEdBQWdETCxLQUFoRCxDQUFpQ0ssVUFBakMsQ0FGa0UsQ0FJbEU7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUFyQztBQUNBLE1BQU1HLGVBQWUsR0FBR0osSUFBSSxLQUFLRSxVQUFULElBQXVCRixJQUFJLEdBQUdDLEtBQUssR0FBRyxDQUFmLElBQW9CLENBQTNDLEdBQStDRCxJQUFJLEdBQUdDLEtBQUssR0FBRyxDQUE5RCxHQUFrRUQsSUFBSSxHQUFHQyxLQUFqRztBQUVBLHNCQUVJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDSTtBQUNJLFVBQUksRUFBRyxNQURYO0FBRUksYUFBTyxFQUFJSCxrQkFGZjtBQUdJLFdBQUssRUFBSUssYUFBYSxHQUFHLENBQUgsR0FBT0MsZUFIakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJO0FBQ0ksVUFBSSxFQUFDLE1BRFQ7QUFFSSxhQUFPLEVBQUVOLGtCQUZiO0FBR0ksV0FBSyxFQUFLRSxJQUFJLEdBQUdDLEtBQVAsR0FBZUMsVUFBZixHQUE0QkYsSUFBNUIsR0FBbUNBLElBQUksR0FBR0MsS0FIeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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OEMsY0FGakI7QUFHSSxnQkFBUSxFQUFHLFFBSGY7QUFJSSxpQkFBUyxFQUFJYTtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENKLGVBNkNJLCtEQUFDLDRFQUFEO0FBQ0ksY0FBTSxFQUFJZixNQURkO0FBRUksZUFBTyxFQUFJYyxPQUZmO0FBR0ksa0JBQVUsRUFBSUMsVUFIbEI7QUFJSSxvQkFBWSxFQUFJdkMsWUFKcEI7QUFLSSx3QkFBZ0IsRUFBSTZCO0FBTHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0osZUFxREksK0RBQUMsbUZBQUQ7QUFDSSxhQUFLLEVBQUk1RCxLQURiO0FBRUksZ0JBQVEsRUFBSWdILFFBRmhCO0FBR0ksMEJBQWtCLEVBQUkvRztBQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckRKLGVBMERJLCtEQUFDLGtGQUFEO0FBQWMsYUFBSyxFQUFJRDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBK0RJLCtEQUFDLDZFQUFEO0FBQ0ksYUFBTyxFQUFJMkQsYUFEZjtBQUVJLHNCQUFnQixFQUFJQztBQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUVIOztHQTdPdUIvQjtVQWM2QmpCLHFEQUs3Q0EscURBS0FBLHFEQUtBQTs7O0tBN0JnQmlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZWaWV3LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbnMvZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dFByZXZJdGVtcyAoeyBzdGF0ZSwgZmV0Y2hOZXh0UHJldkl0ZW1zIH0pIHtcclxuXHJcbiAgICBjb25zdCB7IHNlYXJjaFRleHQsIHNraXAsIGxpbWl0LCBkYXRhTGVuZ3RoIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAvLyBQcmV2aW91cyBCdXR0b25cclxuICAgIGNvbnN0IGZpcnN0Q29uZHRpb24gPSBza2lwIC0gbGltaXQgPCAwO1xyXG4gICAgY29uc3Qgc2Vjb25kQ29uZGl0aW9uID0gc2tpcCA9PT0gZGF0YUxlbmd0aCAmJiBza2lwIC0gbGltaXQgKiAyID49IDAgPyBza2lwIC0gbGltaXQgKiAyIDogc2tpcCAtIGxpbWl0O1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dC1wcmV2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJwcmV2XCIgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2ZldGNoTmV4dFByZXZJdGVtc30gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmaXJzdENvbmR0aW9uID8gMCA6IHNlY29uZENvbmRpdGlvbiB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAmbGFxdW87IFByZXZcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmV4dFwiIFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hOZXh0UHJldkl0ZW1zfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0geyBza2lwICsgbGltaXQgPiBkYXRhTGVuZ3RoID8gc2tpcCA6IHNraXAgKyBsaW1pdCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHQgJnJhcXVvO1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IE5leHRQcmV2VmlldyA9ICh7IHN0YXRlIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHNraXAsIGxpbWl0LCBkYXRhTGVuZ3RoIH0gPSBzdGF0ZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy12aWV3XCIgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsIHBhZGRpbmc6IFwiNXB4IDBcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U2hvd2luZyB7IFxyXG4gICAgICAgICAgICAgICAgZGF0YUxlbmd0aCA9PT0gMCA/IDAgOiBkYXRhTGVuZ3RoID09PSBza2lwID8gKGxpbWl0ICsgMSA+IGRhdGFMZW5ndGggPyAxIDogc2tpcCAtIGxpbWl0ICsgMSkgOiBza2lwICsgMVxyXG4gICAgICAgICAgICAgICAgfSB0byB7IFxyXG4gICAgICAgICAgICAgICAgbGltaXQgKyBza2lwID4gZGF0YUxlbmd0aCA/IGRhdGFMZW5ndGggOiBsaW1pdCArIHNraXAgXHJcbiAgICAgICAgICAgICAgICB9IG9mIHtkYXRhTGVuZ3RofSByZXN1bHRzIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dFByZXZWaWV3O1xyXG4iLCIvLyBldmVudC1tb2RpZmllcnNcclxuaW1wb3J0IHsgZXZlbnRzRGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIEZvciBSZWRpcmVjdGluZyBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy8gRm9yIGdvb2dsZSBmb250cyBhbmQgb3RoZXJzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9FdmVudHMubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuLy9JbWFnZXNcclxuaW1wb3J0IGxvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NhcnRvbi13b21hbi5qcGdcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IEFkZEV2ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9ldmVudHMvQWRkRXZlbnRcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcbmltcG9ydCBFdmVudERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2V2ZW50cy9FdmVudERldGFpbHNcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9NZXNzYWdlXCI7XHJcbmltcG9ydCBOZXh0UHJldkl0ZW1zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtc1wiO1xyXG5pbXBvcnQgTmV4dFByZXZWaWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZWaWV3XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50cyAoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2V2ZW50U3RhdGUsIHNldEV2ZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHNcIjtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyBzZWFyY2hUZXh0OiBldmVudFN0YXRlLnNlYXJjaFRleHQsIHNraXA6IGV2ZW50U3RhdGUuc2tpcCwgbGltaXQ6IGV2ZW50U3RhdGUubGltaXQgfTtcclxuICAgIGNvbnN0IHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VBeGlvcyhcInBvc3RcIiwgZW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoYXBwZW5pbmcpO1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICBkYXRhOiBsb2NhdGlvbkRhdGEsIFxyXG4gICAgICAgIGVycm9yOiBsb2NhdGlvbkRhdGFGZXRjaGluZ0Vycm9yLCBcclxuICAgICAgICBsb2FkaW5nOiBsb2NhdGlvbkRhdGFGZXRjaGluZ0xvYWRpbmcgXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9uc1wiLCB7fSwgaGFwcGVuaW5nKTtcclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgZGF0YTogY2F0ZWdvcnlEYXRhLCBcclxuICAgICAgICBlcnJvcjogY2F0ZWdvcnlEYXRhRmV0Y2hpbmdFcnJvciwgXHJcbiAgICAgICAgbG9hZGluZzogY2F0ZWdvcnlEYXRhRmV0Y2hpbmdMb2FkaW5nIFxyXG4gICAgfSA9IHVzZUF4aW9zKFwiZ2V0XCIsIFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCIsIHt9LCBoYXBwZW5pbmcpO1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICBkYXRhOiB0cmVhdG1lbnREYXRhLCBcclxuICAgICAgICBlcnJvcjogdHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IsIFxyXG4gICAgICAgIGxvYWRpbmc6IHRyZWF0bWVudERhdGFGZXRjaGluZ0xvYWRpbmcgXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3RyZWF0bWVudHNcIiwge30sIGhhcHBlbmluZyk7XHJcbiAgIFxyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0cmVhdG1lbnRzLCBzZXRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXZlbnRUYWJsZURhdGEsIHNldEV2ZW50VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthY3Rpb25NZXNzYWdlLCBzZXRBY3Rpb25NZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQcm9tcHQsIHNldFNob3dEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2V2ZW50SWRGb3JEZWxldGluZywgc2V0RXZlbnRJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0LCBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0FkZGluZ1VwZGF0aW5nLCBzZXRJc0FkZGluZ1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnRJbmZvLCBzZXRFdmVudEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGV2ZW50SWQ6IFwiXCIsXHJcbiAgICAgICAgZXZlbnREYXRlOiBudWxsLCBcclxuICAgICAgICBzdGFydFRpbWU6IFwiXCIsXHJcbiAgICAgICAgZW5kVGltZTogXCJcIixcclxuICAgICAgICB0cmVhdG1lbnRDYXRlZ29yeTogXCJcIixcclxuICAgICAgICB0cmVhdG1lbnROYW1lOiBcIlwiLFxyXG4gICAgICAgIHN0eWxpc3Q6IFwiXCIsXHJcbiAgICAgICAgc3R5bGlzdEVtYWlsOiBcIlwiLFxyXG4gICAgICAgIGV2ZW50TG9jYXRpb246IFwiXCIsXHJcbiAgICAgICAgZXZlbnREdXJhdGlvbjogMCxcclxuICAgICAgICBjbGllbnROYW1lOiBcIlwiLFxyXG4gICAgICAgIGNsaWVudEVtYWlsOiBcIlwiLFxyXG4gICAgICAgIGNsaWVudFBob25lOiBcIlwiLFxyXG4gICAgICAgIGV2ZW50RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgZXZlbnRQcmljZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJmZXRjaGluZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChldmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmV2ZW50TG9jYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50cmVhdG1lbnRDYXRlZ29yeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRyZWF0bWVudE5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuc3RhcnRUaW1lLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmVuZFRpbWUuc3Vic3RyaW5nKGV2ZW50LmVuZFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5lbmRUaW1lLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudEVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBWaWV3IERldGFpbHMtJHtldmVudC5faWQudG9TdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgRGVsZXRlLSR7ZXZlbnQuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RXZlbnRUYWJsZURhdGEobmV3RGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0RXZlbnRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGxvY2F0aW9uRGF0YSAhPT0gbnVsbCkgc2V0TG9jYXRpb25zKGxvY2F0aW9uRGF0YSk7XHJcbiAgICAgICAgaWYoY2F0ZWdvcnlEYXRhICE9PSBudWxsKSBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5RGF0YSk7XHJcbiAgICAgICAgaWYodHJlYXRtZW50RGF0YSAhPT0gbnVsbCkgc2V0VHJlYXRtZW50cyh0cmVhdG1lbnREYXRhKTtcclxuXHJcbiAgICB9LCBbZGF0YSwgbG9jYXRpb25EYXRhLCBjYXRlZ29yeURhdGEsIHRyZWF0bWVudERhdGEsIGhhcHBlbmluZ10pO1xyXG5cclxuXHJcbiAgIFxyXG4gICBcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVFdmVudChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGV2ZW50RGF0ZSwgZXZlbnRMb2NhdGlvbiwgdHJlYXRtZW50Q2F0ZWdvcnksIHRyZWF0bWVudE5hbWUsIHN0eWxpc3QsIHN0YXJ0VGltZSwgY2xpZW50RW1haWwgfSA9IGV2ZW50SW5mbztcclxuXHJcbiAgICAgICAgaWYoIWV2ZW50RGF0ZSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHBpY2sgYSBkYXRlXCIpO1xyXG4gICAgICAgIGlmKCFldmVudExvY2F0aW9uKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgbG9jYXRpb25cIik7XHJcbiAgICAgICAgaWYoIXRyZWF0bWVudENhdGVnb3J5KSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgaWYoIXRyZWF0bWVudE5hbWUpIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSB0cmVhdG1lbnRcIik7XHJcbiAgICAgICAgaWYoIXN0eWxpc3QpIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBzdHlsaXN0XCIpO1xyXG4gICAgICAgIGlmKCFzdGFydFRpbWUpIHJldHVybiBhbGVydChcInBsZWFzZSBzZWxlY3QgYSBzdGFydCB0aW1lXCIpO1xyXG4gICAgICAgIGlmKCFjbGllbnRFbWFpbCkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJTYXZpbmdcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWZhdWx0IGVuZHBvaW50IGlzIGFkZCBldmVudFxyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzL2FkZC1ldmVudFwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEJ1dCBpZiBldmVudElkIGlzIG5vdCBlbXB0eSB0aGVuIHVwZGF0ZSByZXF1ZXN0IHNob3VsZCBiZSBzZW50XHJcbiAgICAgICAgICAgIGlmIChldmVudElkKSBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHMvdXBkYXRlXCJcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCBldmVudEluZm8pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICBcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmZXIgYWRkaW5nXCIpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHNcIiBzdHlsZSA9IHt7ZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGhlaWdodDogXCIxMDB2aFwifX0+XHJcbiAgICAgICAgICAgIDxDb250cm9sUGFuZWwgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGUgPSB7e3dpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxBZGRFdmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SW5mbyA9IHtldmVudEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRJbmZvID0ge3NldEV2ZW50SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMgPSB7bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRzID0ge3RyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVXBkYXRlRXZlbnQgPSB7YWRkVXBkYXRlRXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0RXZlbnRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IHtzZWFyY2hUcmVhdG1lbnRzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGQgRXZlbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlRXZlbnRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9hZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZXZlbnRTdGF0ZS5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRFdmVudFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXBwZW5pbmcgPSB7c2V0SGFwcGVuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PiBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpfT5BZGQgZXZlbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uPkFkZCBFdmVudDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzID0ge2V2ZW50c0RhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtldmVudFRhYmxlRGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGb3IgPSBcImV2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldEV2ZW50SWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxFdmVudERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMgPSB7ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWQgPSB7ZXZlbnRJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRJZCA9IHtzZXRFdmVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEhhcHBlbmluZyA9IHtzZXRIYXBwZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZSA9IHtzZXRBY3Rpb25NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmV4dFByZXZJdGVtcyBcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoTmV4dFByZXZJdGVtcyA9IHtmZXRjaE5leHRQcmV2SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2VmlldyBzdGF0ZSA9IHtzdGF0ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB7YWN0aW9uTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIk5leHRQcmV2SXRlbXMiLCJzdGF0ZSIsImZldGNoTmV4dFByZXZJdGVtcyIsInNlYXJjaFRleHQiLCJza2lwIiwibGltaXQiLCJkYXRhTGVuZ3RoIiwiZmlyc3RDb25kdGlvbiIsInNlY29uZENvbmRpdGlvbiIsIk5leHRQcmV2VmlldyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJldmVudHNEYXRhVGFibGVIZWFkZXJzIiwidXNlQXhpb3MiLCJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImxvZ2luQmdJbWFnZSIsImxvZ29JbWFnZSIsIkNvbnRyb2xQYW5lbCIsIlNlYXJjaElucHV0IiwiQWRkRXZlbnQiLCJEYXRhVGFibGUiLCJFdmVudERldGFpbHMiLCJNZXNzYWdlIiwiRXZlbnRzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwiZXZlbnRTdGF0ZSIsInNldEV2ZW50U3RhdGUiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwiZGF0YSIsInRvdGFsRGF0YUNvdW50IiwiZXJyb3IiLCJsb2FkaW5nIiwibG9jYXRpb25EYXRhIiwibG9jYXRpb25EYXRhRmV0Y2hpbmdFcnJvciIsImxvY2F0aW9uRGF0YUZldGNoaW5nTG9hZGluZyIsImNhdGVnb3J5RGF0YSIsImNhdGVnb3J5RGF0YUZldGNoaW5nRXJyb3IiLCJjYXRlZ29yeURhdGFGZXRjaGluZ0xvYWRpbmciLCJ0cmVhdG1lbnREYXRhIiwidHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IiLCJ0cmVhdG1lbnREYXRhRmV0Y2hpbmdMb2FkaW5nIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0cmVhdG1lbnRzIiwic2V0VHJlYXRtZW50cyIsImV2ZW50cyIsInNldEV2ZW50cyIsImV2ZW50VGFibGVEYXRhIiwic2V0RXZlbnRUYWJsZURhdGEiLCJhY3Rpb25NZXNzYWdlIiwic2V0QWN0aW9uTWVzc2FnZSIsInNob3dEZWxldGVQcm9tcHQiLCJzZXRTaG93RGVsZXRlUHJvbXB0IiwiZXZlbnRJZEZvckRlbGV0aW5nIiwic2V0RXZlbnRJZEZvckRlbGV0aW5nIiwiaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwiaXNBZGRpbmdVcGRhdGluZyIsInNldElzQWRkaW5nVXBkYXRpbmciLCJldmVudERhdGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidHJlYXRtZW50Q2F0ZWdvcnkiLCJ0cmVhdG1lbnROYW1lIiwic3R5bGlzdCIsInN0eWxpc3RFbWFpbCIsImV2ZW50TG9jYXRpb24iLCJldmVudER1cmF0aW9uIiwiY2xpZW50TmFtZSIsImNsaWVudEVtYWlsIiwiY2xpZW50UGhvbmUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRQcmljZSIsImV2ZW50SW5mbyIsInNldEV2ZW50SW5mbyIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiZXZlbnQiLCJpbmRleCIsInB1c2giLCJpZCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJsZW5ndGgiLCJzdGF0dXMiLCJfaWQiLCJ0b1N0cmluZyIsImN1cnJlbnRWYWx1ZSIsImFkZFVwZGF0ZUV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInBvc3QiLCJyZXNwb25zZSIsIm1zZyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwic2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9
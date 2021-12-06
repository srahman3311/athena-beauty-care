"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/locations",{

/***/ "./pages/admins/locations.js":
/*!***********************************!*\
  !*** ./pages/admins/locations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Location; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var _libs_location_modifiers_displayHideLocationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/location-modifiers/displayHideLocationForm */ "./libs/location-modifiers/displayHideLocationForm.js");
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/locations/AddLocation.module.css */ "./styles/locations/AddLocation.module.css");
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_location_AddLocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/location/AddLocation */ "./components/admins/location/AddLocation.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevView */ "./components/reusable-components/NextPrevView.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_location_LocationDetails__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/admins/location/LocationDetails */ "./components/admins/location/LocationDetails.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\locations.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Modifier functions

 //import { searchLocations } from "../../libs/location-modifiers/searchLocations";

 //import { deleteLocation } from "../../libs/location-modifiers/deleteLocation";

 // React Modules

 // Stylesheet

 // components

 // Table Components


 // Other Components











function Location() {
  _s();

  // Order of rendering/execution
  // 1. Component render for the first time, no state changes occur - render 1
  // 2. Component mounts - child component's useffect gets run first, in this case custom useAxios hooks' useEffect gets run
  //    so fetchData function is called. At the very first line of fetchData function loading state is set to true and on the next
  //    line axios callback is fired. As it's asynchronous so it doesn't block the other codes. So setLoading causes re-render
  //    everything. - render 2
  // 3. Once callback is finished executing setData and setTotalDataCount cause another re-render and this time value of data 
  //    has changed. - render 3
  // 4. As value of data has changed parent component's useEffect gets run as it has data inside it's dependency array. 
  //    Two state changes occur here (setLocations and setTotalDataCount) so another re-render happens. - render 4
  // 5. finally code block is run setLoading(false) causes another re-render - render 5
  // 6. After finally block has finished executing two useEffect hooks dependency array's values haven't changed so no re-render
  //    occurs 
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      state = _useState2[0],
      setState = _useState2[1]; // Custom hook call to fetch data


  var endpoint = "http://localhost:7070/api/locations";
  var requestBody = {
    searchText: state.searchText,
    skip: state.skip,
    limit: state.limit
  };

  var _useAxios = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default)("post", endpoint, requestBody, happening),
      data = _useAxios.data,
      totalDataCount = _useAxios.totalDataCount,
      error = _useAxios.error,
      loading = _useAxios.loading; // States


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
      actionMessage = _useState3[0],
      setActionMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      deleting = _useState4[0],
      setDeleting = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      showDeletePrompt = _useState5[0],
      setShowDeletePrompt = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      locationIdForDeleting = _useState6[0],
      setLocationIdForDeleting = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      itemNameForDeletePrompt = _useState7[0],
      setItemNameForDeletePrompt = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      locations = _useState8[0],
      setLocations = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      locationTableData = _useState9[0],
      setLocationTableData = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      locationId = _useState10[0],
      setLocationId = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      isAddingUpdating = _useState11[0],
      setIsAddingUpdating = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      validationError = _useState12[0],
      setValidationError = _useState12[1]; // const [display]


  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    locationId: "",
    title: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    phone: "",
    zipCode: ""
  }),
      locationInfo = _useState13[0],
      setLocationInfo = _useState13[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    setHappening("fetching");

    if (data !== null) {
      setLocations(data);
      var newData = [];
      data.forEach(function (location, index) {
        newData.push({
          id: index + 1,
          data: [location.title, location.address1, location.address2, location.city, location.country, location.phone, location.zipCode, "View Details-".concat(location._id.toString()), "Delete-".concat(location._id.toString())]
        });
      });
      setLocationTableData(newData);
      setState(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          dataLength: totalDataCount
        });
      });
    }
  }, [data, happening]);

  function openAddLocationModal(event) {
    var index = Number(event.target.value);
    setLocationInfo({
      locationId: locations[index]._id.toString(),
      title: locations[index].title,
      address1: locations[index].address1,
      address2: locations[index].address2,
      city: locations[index].city,
      country: locations[index].country,
      phone: locations[index].phone,
      zipCode: locations[index].zipCode
    });
    setLocationId("");
    setIsAddingUpdating(true);
  }

  function openDeletePrompt(event) {
    var _id = event.target.value;
    setLocationIdForDeleting(_id);

    for (var x = 0; x < locations.length; x++) {
      if (_id === locations[x]._id.toString()) {
        setItemNameForDeletePrompt(locations[x].title);
        break;
      }
    }

    setShowDeletePrompt(true);
  }

  function addUpdateLocation(_x) {
    return _addUpdateLocation.apply(this, arguments);
  }

  function _addUpdateLocation() {
    _addUpdateLocation = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var _id, title, address1, address2, city, country, phone, zipCode, _endpoint, response;

      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); // For updating purpose

              _id = event.target.value;
              title = locationInfo.title, address1 = locationInfo.address1, address2 = locationInfo.address2, city = locationInfo.city, country = locationInfo.country, phone = locationInfo.phone, zipCode = locationInfo.zipCode; // Form validation

              if (!(!title || !address1 || !address2 || !city || !country || !phone || !zipCode)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", setValidationError(true));

            case 5:
              setIsAddingUpdating(false);
              _context.prev = 6;
              setActionMessage("Saving");
              _endpoint = "http://localhost:7070/api/locations/add-location";
              if (_id) _endpoint = "http://localhost:7070/api/locations/update";
              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(_endpoint, locationInfo);

            case 12:
              response = _context.sent;
              setActionMessage(response.data);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);
              setActionMessage(_context.t0.response.data);

            case 19:
              _context.prev = 19;
              setLocationInfo({
                locationId: "",
                title: "",
                address1: "",
                address2: "",
                city: "",
                country: "",
                phone: "",
                zipCode: ""
              });
              setHappening("refetching afer adding/updating");
              return _context.finish(19);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16, 19, 23]]);
    }));
    return _addUpdateLocation.apply(this, arguments);
  }

  function deleteLocation(_x2) {
    return _deleteLocation.apply(this, arguments);
  }

  function _deleteLocation() {
    _deleteLocation = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(event) {
      var _id, response;

      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id = event.target.value;
              setShowDeletePrompt(false);
              _context2.prev = 2;
              setActionMessage("Deleting");
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post("http://localhost:7070/api/locations/delete", {
                _id: _id
              });

            case 6:
              response = _context2.sent;
              setActionMessage(response.data.msg);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);

            case 13:
              _context2.prev = 13;
              setHappening("re-fetching");
              return _context2.finish(13);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10, 13, 16]]);
    }));
    return _deleteLocation.apply(this, arguments);
  }

  function fetchNextPrevItems(event) {
    var newSkip = Number(event.target.value);
    setState(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        skip: newSkip
      });
    });
    setHappening("refetching after next button clicked");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21___default().locations),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "locations_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_admins_location_AddLocation__WEBPACK_IMPORTED_MODULE_12__.default // For input field values
      , {
        locationInfo: locationInfo // if true, isAddingUpdating will display the form and will hide if false
        ,
        isAddingUpdating: isAddingUpdating // Clicking on close button will invoke this function 
        ,
        displayHideLocationForm: _libs_location_modifiers_displayHideLocationForm__WEBPACK_IMPORTED_MODULE_5__.displayHideLocationForm // Following attributes will be passed to the displayHideLocationForm function as arguments for
        // updating the states on close button click event. isAddingUpdating will be set to false,
        // setLocationInfo will update the locationInfo state with it's initial empty values   
        ,
        setLocationInfo: setLocationInfo,
        setIsAddingUpdating: setIsAddingUpdating,
        addUpdateLocation: addUpdateLocation,
        validationError: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_15__.default, {
          value: state.searchText,
          setState: setCategoryState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("button", {
          onClick: function onClick() {
            return setIsAddingUpdating(true);
          },
          children: "Add Location"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_16__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_6__.locationDataTableHeaders,
          tableData: locationTableData,
          setItemId: setLocationId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_admins_location_LocationDetails__WEBPACK_IMPORTED_MODULE_17__.default, {
        locations: locations,
        locationId: locationId,
        setLocationId: setLocationId,
        openAddLocationModal: openAddLocationModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_13__.default, {
        state: state,
        setState: setState,
        fetchNextPrevItems: fetchNextPrevItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_14__.default, {
        state: state
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__.default, {
        deleting: deleting,
        itemId: locationIdForDeleting,
        itemNameForDeletePrompt: itemNameForDeletePrompt,
        showDeletePrompt: showDeletePrompt,
        setShowDeletePrompt: setShowDeletePrompt,
        deleteItem: deleteLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_19__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 9
  }, this);
}

_s(Location, "F29AL6Vbpj3XUVQRlni9bB9kU+E=", false, function () {
  return [_libs_useAxios__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Location;

var _c;

$RefreshReg$(_c, "Location");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2xvY2F0aW9ucy4wYWRjYzBlNWJiYjM2YmI0YTQ4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztDQUVBOztDQUlBOztDQUdBOztDQUdBOztDQUdBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNtQixRQUFULEdBQXFCO0FBQUE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0Esa0JBQWtDZCwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQmhCLCtDQUFRLENBQUM7QUFDL0JpQixJQUFBQSxVQUFVLEVBQUUsRUFEbUI7QUFFL0JDLElBQUFBLElBQUksRUFBRSxDQUZ5QjtBQUcvQkMsSUFBQUEsS0FBSyxFQUFFLEVBSHdCO0FBSS9CQyxJQUFBQSxVQUFVLEVBQUU7QUFKbUIsR0FBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkLGlCQWxCZ0MsQ0F5QmhDOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcscUNBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQUVQLElBQUFBLFVBQVUsRUFBRUksS0FBSyxDQUFDSixVQUFwQjtBQUFnQ0MsSUFBQUEsSUFBSSxFQUFFRyxLQUFLLENBQUNILElBQTVDO0FBQWtEQyxJQUFBQSxLQUFLLEVBQUVFLEtBQUssQ0FBQ0Y7QUFBL0QsR0FBcEI7O0FBQ0Esa0JBQWlEdkIsdURBQVEsQ0FBQyxNQUFELEVBQVMyQixRQUFULEVBQW1CQyxXQUFuQixFQUFnQ1QsU0FBaEMsQ0FBekQ7QUFBQSxNQUFRVSxJQUFSLGFBQVFBLElBQVI7QUFBQSxNQUFjQyxjQUFkLGFBQWNBLGNBQWQ7QUFBQSxNQUE4QkMsS0FBOUIsYUFBOEJBLEtBQTlCO0FBQUEsTUFBcUNDLE9BQXJDLGFBQXFDQSxPQUFyQyxDQTVCZ0MsQ0E4QmhDOzs7QUFFQSxtQkFBMEM1QiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEQ7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWdDOUIsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQUEsTUFBTytCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdEaEMsK0NBQVEsQ0FBQyxLQUFELENBQXhEO0FBQUEsTUFBT2lDLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFDQSxtQkFBMERsQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEU7QUFBQSxNQUFPbUMscUJBQVA7QUFBQSxNQUE4QkMsd0JBQTlCOztBQUNBLG1CQUE4RHBDLCtDQUFRLENBQUMsRUFBRCxDQUF0RTtBQUFBLE1BQU9xQyx1QkFBUDtBQUFBLE1BQWdDQywwQkFBaEM7O0FBQ0EsbUJBQWtDdEMsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT3VDLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQWtEeEMsK0NBQVEsQ0FBQyxFQUFELENBQTFEO0FBQUEsTUFBT3lDLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxvQkFBb0MxQywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPMkMsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxvQkFBZ0Q1QywrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFBQSxNQUFPNkMsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUNBLG9CQUE4QzlDLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUFBLE1BQU8rQyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4QixrQkF6Q2dDLENBMENoQzs7O0FBQ0Esb0JBQXdDaEQsK0NBQVEsQ0FBQztBQUM3QzJDLElBQUFBLFVBQVUsRUFBRSxFQURpQztBQUU3Q00sSUFBQUEsS0FBSyxFQUFFLEVBRnNDO0FBRzdDQyxJQUFBQSxRQUFRLEVBQUUsRUFIbUM7QUFJN0NDLElBQUFBLFFBQVEsRUFBRSxFQUptQztBQUs3Q0MsSUFBQUEsSUFBSSxFQUFFLEVBTHVDO0FBTTdDQyxJQUFBQSxPQUFPLEVBQUUsRUFOb0M7QUFPN0NDLElBQUFBLEtBQUssRUFBRSxFQVBzQztBQVE3Q0MsSUFBQUEsT0FBTyxFQUFFO0FBUm9DLEdBQUQsQ0FBaEQ7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQWFBMUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBRVppQixJQUFBQSxZQUFZLENBQUMsVUFBRCxDQUFaOztBQUVBLFFBQUdTLElBQUksS0FBSyxJQUFaLEVBQWtCO0FBRWRlLE1BQUFBLFlBQVksQ0FBQ2YsSUFBRCxDQUFaO0FBRUEsVUFBTWlDLE9BQU8sR0FBRyxFQUFoQjtBQUVBakMsTUFBQUEsSUFBSSxDQUFDa0MsT0FBTCxDQUFhLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUU5QkgsUUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQWE7QUFDVEMsVUFBQUEsRUFBRSxFQUFFRixLQUFLLEdBQUcsQ0FESDtBQUVUcEMsVUFBQUEsSUFBSSxFQUFFLENBQ0ZtQyxRQUFRLENBQUNYLEtBRFAsRUFFRlcsUUFBUSxDQUFDVixRQUZQLEVBR0ZVLFFBQVEsQ0FBQ1QsUUFIUCxFQUlGUyxRQUFRLENBQUNSLElBSlAsRUFLRlEsUUFBUSxDQUFDUCxPQUxQLEVBTUZPLFFBQVEsQ0FBQ04sS0FOUCxFQU9GTSxRQUFRLENBQUNMLE9BUFAseUJBUWNLLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhQyxRQUFiLEVBUmQsb0JBU1FMLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhQyxRQUFiLEVBVFI7QUFGRyxTQUFiO0FBZ0JILE9BbEJEO0FBb0JBdkIsTUFBQUEsb0JBQW9CLENBQUNnQixPQUFELENBQXBCO0FBR0FwQyxNQUFBQSxRQUFRLENBQUMsVUFBQTRDLFlBQVksRUFBSTtBQUNyQiwrQ0FDT0EsWUFEUDtBQUVJOUMsVUFBQUEsVUFBVSxFQUFFTTtBQUZoQjtBQUlILE9BTE8sQ0FBUjtBQU9IO0FBRUosR0ExQ1EsRUEwQ04sQ0FBQ0QsSUFBRCxFQUFPVixTQUFQLENBMUNNLENBQVQ7O0FBOENBLFdBQVNvRCxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFFakMsUUFBTVAsS0FBSyxHQUFHUSxNQUFNLENBQUNELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBRUFkLElBQUFBLGVBQWUsQ0FBQztBQUNaZCxNQUFBQSxVQUFVLEVBQUVKLFNBQVMsQ0FBQ3NCLEtBQUQsQ0FBVCxDQUFpQkcsR0FBakIsQ0FBcUJDLFFBQXJCLEVBREE7QUFFWmhCLE1BQUFBLEtBQUssRUFBRVYsU0FBUyxDQUFDc0IsS0FBRCxDQUFULENBQWlCWixLQUZaO0FBR1pDLE1BQUFBLFFBQVEsRUFBRVgsU0FBUyxDQUFDc0IsS0FBRCxDQUFULENBQWlCWCxRQUhmO0FBSVpDLE1BQUFBLFFBQVEsRUFBRVosU0FBUyxDQUFDc0IsS0FBRCxDQUFULENBQWlCVixRQUpmO0FBS1pDLE1BQUFBLElBQUksRUFBRWIsU0FBUyxDQUFDc0IsS0FBRCxDQUFULENBQWlCVCxJQUxYO0FBTVpDLE1BQUFBLE9BQU8sRUFBRWQsU0FBUyxDQUFDc0IsS0FBRCxDQUFULENBQWlCUixPQU5kO0FBT1pDLE1BQUFBLEtBQUssRUFBRWYsU0FBUyxDQUFDc0IsS0FBRCxDQUFULENBQWlCUCxLQVBaO0FBUVpDLE1BQUFBLE9BQU8sRUFBRWhCLFNBQVMsQ0FBQ3NCLEtBQUQsQ0FBVCxDQUFpQk47QUFSZCxLQUFELENBQWY7QUFXQVgsSUFBQUEsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBRSxJQUFBQSxtQkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0g7O0FBRUQsV0FBUzBCLGdCQUFULENBQTJCSixLQUEzQixFQUFrQztBQUU5QixRQUFNSixHQUFHLEdBQUdJLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUF6QjtBQUVBbkMsSUFBQUEsd0JBQXdCLENBQUM0QixHQUFELENBQXhCOztBQUVBLFNBQUksSUFBSVMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHbEMsU0FBUyxDQUFDbUMsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFFdEMsVUFBR1QsR0FBRyxLQUFLekIsU0FBUyxDQUFDa0MsQ0FBRCxDQUFULENBQWFULEdBQWIsQ0FBaUJDLFFBQWpCLEVBQVgsRUFBd0M7QUFDcEMzQixRQUFBQSwwQkFBMEIsQ0FBQ0MsU0FBUyxDQUFDa0MsQ0FBRCxDQUFULENBQWF4QixLQUFkLENBQTFCO0FBQ0E7QUFDSDtBQUNKOztBQUVEZixJQUFBQSxtQkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0g7O0FBeEkrQixXQTBJakJ5QyxpQkExSWlCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFaQTBJaEMsaUJBQWtDUCxLQUFsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUlBLGNBQUFBLEtBQUssQ0FBQ1EsY0FBTixHQUZKLENBSUk7O0FBQ01aLGNBQUFBLEdBTFYsR0FLZ0JJLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUw3QjtBQU9ZdEIsY0FBQUEsS0FQWixHQU95RU8sWUFQekUsQ0FPWVAsS0FQWixFQU9tQkMsUUFQbkIsR0FPeUVNLFlBUHpFLENBT21CTixRQVBuQixFQU82QkMsUUFQN0IsR0FPeUVLLFlBUHpFLENBTzZCTCxRQVA3QixFQU91Q0MsSUFQdkMsR0FPeUVJLFlBUHpFLENBT3VDSixJQVB2QyxFQU82Q0MsT0FQN0MsR0FPeUVHLFlBUHpFLENBTzZDSCxPQVA3QyxFQU9zREMsS0FQdEQsR0FPeUVFLFlBUHpFLENBT3NERixLQVB0RCxFQU82REMsT0FQN0QsR0FPeUVDLFlBUHpFLENBTzZERCxPQVA3RCxFQVNJOztBQVRKLG9CQVVRLENBQUNOLEtBQUQsSUFBVSxDQUFDQyxRQUFYLElBQXVCLENBQUNDLFFBQXhCLElBQW9DLENBQUNDLElBQXJDLElBQTZDLENBQUNDLE9BQTlDLElBQXlELENBQUNDLEtBQTFELElBQW1FLENBQUNDLE9BVjVFO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQVdlUCxrQkFBa0IsQ0FBQyxJQUFELENBWGpDOztBQUFBO0FBY0lGLGNBQUFBLG1CQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFkSjtBQWtCUWhCLGNBQUFBLGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFFSVAsY0FBQUEsU0FwQlosR0FvQnVCLGtEQXBCdkI7QUFzQlEsa0JBQUd5QyxHQUFILEVBQVF6QyxTQUFRLEdBQUcsNENBQVg7QUF0QmhCO0FBQUEscUJBd0IrQjVCLGlEQUFBLENBQVc0QixTQUFYLEVBQXFCaUMsWUFBckIsQ0F4Qi9COztBQUFBO0FBd0Jjc0IsY0FBQUEsUUF4QmQ7QUEwQlFoRCxjQUFBQSxnQkFBZ0IsQ0FBQ2dELFFBQVEsQ0FBQ3JELElBQVYsQ0FBaEI7QUExQlI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUErQlFLLGNBQUFBLGdCQUFnQixDQUFDLFlBQU1nRCxRQUFOLENBQWVyRCxJQUFoQixDQUFoQjs7QUEvQlI7QUFBQTtBQW1DUWdDLGNBQUFBLGVBQWUsQ0FBQztBQUNaZCxnQkFBQUEsVUFBVSxFQUFFLEVBREE7QUFFWk0sZ0JBQUFBLEtBQUssRUFBRSxFQUZLO0FBR1pDLGdCQUFBQSxRQUFRLEVBQUUsRUFIRTtBQUlaQyxnQkFBQUEsUUFBUSxFQUFFLEVBSkU7QUFLWkMsZ0JBQUFBLElBQUksRUFBRSxFQUxNO0FBTVpDLGdCQUFBQSxPQUFPLEVBQUUsRUFORztBQU9aQyxnQkFBQUEsS0FBSyxFQUFFLEVBUEs7QUFRWkMsZ0JBQUFBLE9BQU8sRUFBRTtBQVJHLGVBQUQsQ0FBZjtBQVdBdkMsY0FBQUEsWUFBWSxDQUFDLGlDQUFELENBQVo7QUE5Q1I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExSWdDO0FBQUE7QUFBQTs7QUFBQSxXQTZMakIrRCxjQTdMaUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa1pBNkxoQyxrQkFBOEJYLEtBQTlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVUosY0FBQUEsR0FGVixHQUVnQkksS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBRjdCO0FBSUlyQyxjQUFBQSxtQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBSko7QUFTUUosY0FBQUEsZ0JBQWdCLENBQUMsVUFBRCxDQUFoQjtBQVRSO0FBQUEscUJBVytCbkMsaURBQUEsQ0FBVyw0Q0FBWCxFQUF5RDtBQUFFcUUsZ0JBQUFBLEdBQUcsRUFBSEE7QUFBRixlQUF6RCxDQVgvQjs7QUFBQTtBQVdjYyxjQUFBQSxRQVhkO0FBYVFoRCxjQUFBQSxnQkFBZ0IsQ0FBQ2dELFFBQVEsQ0FBQ3JELElBQVQsQ0FBY3VELEdBQWYsQ0FBaEI7QUFiUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCUUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWpCUjtBQUFBO0FBcUJRbEUsY0FBQUEsWUFBWSxDQUFDLGFBQUQsQ0FBWjtBQXJCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdMZ0M7QUFBQTtBQUFBOztBQXVOaEMsV0FBU21FLGtCQUFULENBQTRCZixLQUE1QixFQUFtQztBQUUvQixRQUFNZ0IsT0FBTyxHQUFHZixNQUFNLENBQUNELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLENBQXRCO0FBRUFqRCxJQUFBQSxRQUFRLENBQUMsVUFBQTRDLFlBQVksRUFBSTtBQUVyQiw2Q0FDT0EsWUFEUDtBQUVJaEQsUUFBQUEsSUFBSSxFQUFFa0U7QUFGVjtBQUlILEtBTk8sQ0FBUjtBQVFBcEUsSUFBQUEsWUFBWSxDQUFDLHNDQUFELENBQVo7QUFFSDs7QUFHRCxzQkFDSTtBQUFLLGFBQVMsRUFBRWYsNEZBQWhCO0FBQWtDLFNBQUssRUFBRTtBQUFDb0YsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FBekM7QUFBQSw0QkFFSSwrREFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFJSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFLLEVBQUk7QUFBQ0MsUUFBQUEsS0FBSyxFQUFFO0FBQVIsT0FBNUM7QUFBQSw4QkFFSSwrREFBQyw2RUFBRCxDQUNJO0FBREo7QUFFSSxvQkFBWSxFQUFJOUIsWUFGcEIsQ0FHSTtBQUhKO0FBSUksd0JBQWdCLEVBQUlYLGdCQUp4QixDQUtJO0FBTEo7QUFNSSwrQkFBdUIsRUFBSWhELHFHQU4vQixDQU9JO0FBQ0E7QUFDQTtBQVRKO0FBVUksdUJBQWUsRUFBSTRELGVBVnZCO0FBV0ksMkJBQW1CLEVBQUlYLG1CQVgzQjtBQVlJLHlCQUFpQixFQUFJNkIsaUJBWnpCO0FBYUksdUJBQWUsRUFBSTVCO0FBYnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQWtCSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJLCtEQUFDLGlGQUFEO0FBQ0ksZUFBSyxFQUFJMUIsS0FBSyxDQUFDSixVQURuQjtBQUVJLGtCQUFRLEVBQUlzRSxnQkFGaEI7QUFHSSxzQkFBWSxFQUFJdkU7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU9JO0FBQVEsaUJBQU8sRUFBSTtBQUFBLG1CQUFNOEIsbUJBQW1CLENBQUMsSUFBRCxDQUF6QjtBQUFBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSixlQTJCSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUVRbkIsS0FBSyxnQkFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSyxHQUlMQyxPQUFPLGdCQUVQLCtEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRk8sZ0JBSVAsK0RBQUMsMEZBQUQ7QUFDSSxzQkFBWSxFQUFJOUIsZ0VBRHBCO0FBRUksbUJBQVMsRUFBSTJDLGlCQUZqQjtBQUdJLG1CQUFTLEVBQUlHLGFBSGpCO0FBSUksMEJBQWdCLEVBQUk0QjtBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSixlQThDSSwrREFBQyxpRkFBRDtBQUNJLGlCQUFTLEVBQUlqQyxTQURqQjtBQUVJLGtCQUFVLEVBQUlJLFVBRmxCO0FBR0kscUJBQWEsRUFBSUMsYUFIckI7QUFJSSw0QkFBb0IsRUFBSXVCO0FBSjVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0osZUFzRUksK0RBQUMsbUZBQUQ7QUFDSSxhQUFLLEVBQUk5QyxLQURiO0FBRUksZ0JBQVEsRUFBSUMsUUFGaEI7QUFHSSwwQkFBa0IsRUFBSTZEO0FBSDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0RUosZUEyRUksK0RBQUMsa0ZBQUQ7QUFBYyxhQUFLLEVBQUk5RDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0VKLGVBNEVJLCtEQUFDLGtGQUFEO0FBQ0ksZ0JBQVEsRUFBSVUsUUFEaEI7QUFFSSxjQUFNLEVBQUlJLHFCQUZkO0FBR0ksK0JBQXVCLEVBQUlFLHVCQUgvQjtBQUlJLHdCQUFnQixFQUFJSixnQkFKeEI7QUFLSSwyQkFBbUIsRUFBSUMsbUJBTDNCO0FBTUksa0JBQVUsRUFBSTZDO0FBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUEwRkksK0RBQUMsNkVBQUQ7QUFDSSxhQUFPLEVBQUlsRCxhQURmO0FBRUksc0JBQWdCLEVBQUlDO0FBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrR0g7O0dBMVV1QmhCO1VBNEI2QmxCOzs7S0E1QjdCa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2xvY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2RpZmllciBmdW5jdGlvbnNcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuLy9pbXBvcnQgeyBzZWFyY2hMb2NhdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGlicy9sb2NhdGlvbi1tb2RpZmllcnMvc2VhcmNoTG9jYXRpb25zXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIaWRlTG9jYXRpb25Gb3JtIH0gZnJvbSBcIi4uLy4uL2xpYnMvbG9jYXRpb24tbW9kaWZpZXJzL2Rpc3BsYXlIaWRlTG9jYXRpb25Gb3JtXCI7XHJcbi8vaW1wb3J0IHsgZGVsZXRlTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vbGlicy9sb2NhdGlvbi1tb2RpZmllcnMvZGVsZXRlTG9jYXRpb25cIjtcclxuaW1wb3J0IHsgbG9jYXRpb25EYXRhVGFibGVIZWFkZXJzIH0gZnJvbSBcIi4uLy4uL2xpYnMvZGF0YVwiO1xyXG5cclxuXHJcbi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvbG9jYXRpb25zL0FkZExvY2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcblxyXG4vLyBUYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBJdGVtVGFibGVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgSXRlbVRhYmxlRGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlRGF0YVwiO1xyXG5cclxuLy8gT3RoZXIgQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbFwiO1xyXG5pbXBvcnQgQWRkTG9jYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2xvY2F0aW9uL0FkZExvY2F0aW9uXCI7XHJcbmltcG9ydCBOZXh0UHJldkl0ZW1zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtc1wiO1xyXG5pbXBvcnQgTmV4dFByZXZWaWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZWaWV3XCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL0RhdGFUYWJsZVwiO1xyXG5pbXBvcnQgTG9jYXRpb25EZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9sb2NhdGlvbi9Mb2NhdGlvbkRldGFpbHNcIjtcclxuaW1wb3J0IERlbGV0ZVByb21wdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0RlbGV0ZVByb21wdFwiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24gKCkge1xyXG5cclxuICAgIC8vIE9yZGVyIG9mIHJlbmRlcmluZy9leGVjdXRpb25cclxuICAgIC8vIDEuIENvbXBvbmVudCByZW5kZXIgZm9yIHRoZSBmaXJzdCB0aW1lLCBubyBzdGF0ZSBjaGFuZ2VzIG9jY3VyIC0gcmVuZGVyIDFcclxuICAgIC8vIDIuIENvbXBvbmVudCBtb3VudHMgLSBjaGlsZCBjb21wb25lbnQncyB1c2VmZmVjdCBnZXRzIHJ1biBmaXJzdCwgaW4gdGhpcyBjYXNlIGN1c3RvbSB1c2VBeGlvcyBob29rcycgdXNlRWZmZWN0IGdldHMgcnVuXHJcbiAgICAvLyAgICBzbyBmZXRjaERhdGEgZnVuY3Rpb24gaXMgY2FsbGVkLiBBdCB0aGUgdmVyeSBmaXJzdCBsaW5lIG9mIGZldGNoRGF0YSBmdW5jdGlvbiBsb2FkaW5nIHN0YXRlIGlzIHNldCB0byB0cnVlIGFuZCBvbiB0aGUgbmV4dFxyXG4gICAgLy8gICAgbGluZSBheGlvcyBjYWxsYmFjayBpcyBmaXJlZC4gQXMgaXQncyBhc3luY2hyb25vdXMgc28gaXQgZG9lc24ndCBibG9jayB0aGUgb3RoZXIgY29kZXMuIFNvIHNldExvYWRpbmcgY2F1c2VzIHJlLXJlbmRlclxyXG4gICAgLy8gICAgZXZlcnl0aGluZy4gLSByZW5kZXIgMlxyXG4gICAgLy8gMy4gT25jZSBjYWxsYmFjayBpcyBmaW5pc2hlZCBleGVjdXRpbmcgc2V0RGF0YSBhbmQgc2V0VG90YWxEYXRhQ291bnQgY2F1c2UgYW5vdGhlciByZS1yZW5kZXIgYW5kIHRoaXMgdGltZSB2YWx1ZSBvZiBkYXRhIFxyXG4gICAgLy8gICAgaGFzIGNoYW5nZWQuIC0gcmVuZGVyIDNcclxuICAgIC8vIDQuIEFzIHZhbHVlIG9mIGRhdGEgaGFzIGNoYW5nZWQgcGFyZW50IGNvbXBvbmVudCdzIHVzZUVmZmVjdCBnZXRzIHJ1biBhcyBpdCBoYXMgZGF0YSBpbnNpZGUgaXQncyBkZXBlbmRlbmN5IGFycmF5LiBcclxuICAgIC8vICAgIFR3byBzdGF0ZSBjaGFuZ2VzIG9jY3VyIGhlcmUgKHNldExvY2F0aW9ucyBhbmQgc2V0VG90YWxEYXRhQ291bnQpIHNvIGFub3RoZXIgcmUtcmVuZGVyIGhhcHBlbnMuIC0gcmVuZGVyIDRcclxuICAgIC8vIDUuIGZpbmFsbHkgY29kZSBibG9jayBpcyBydW4gc2V0TG9hZGluZyhmYWxzZSkgY2F1c2VzIGFub3RoZXIgcmUtcmVuZGVyIC0gcmVuZGVyIDVcclxuICAgIC8vIDYuIEFmdGVyIGZpbmFsbHkgYmxvY2sgaGFzIGZpbmlzaGVkIGV4ZWN1dGluZyB0d28gdXNlRWZmZWN0IGhvb2tzIGRlcGVuZGVuY3kgYXJyYXkncyB2YWx1ZXMgaGF2ZW4ndCBjaGFuZ2VkIHNvIG5vIHJlLXJlbmRlclxyXG4gICAgLy8gICAgb2NjdXJzIFxyXG5cclxuXHJcbiAgICBjb25zdCBbaGFwcGVuaW5nLCBzZXRIYXBwZW5pbmddID0gdXNlU3RhdGUoXCJGZXRjaGluZ1wiKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBDdXN0b20gaG9vayBjYWxsIHRvIGZldGNoIGRhdGFcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9uc1wiO1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IHNlYXJjaFRleHQ6IHN0YXRlLnNlYXJjaFRleHQsIHNraXA6IHN0YXRlLnNraXAsIGxpbWl0OiBzdGF0ZS5saW1pdCB9O1xyXG4gICAgY29uc3QgeyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUF4aW9zKFwicG9zdFwiLCBlbmRwb2ludCwgcmVxdWVzdEJvZHksIGhhcHBlbmluZyk7XHJcblxyXG4gICAgLy8gU3RhdGVzXHJcbiAgICBcclxuICAgIGNvbnN0IFthY3Rpb25NZXNzYWdlLCBzZXRBY3Rpb25NZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbG9jYXRpb25JZEZvckRlbGV0aW5nLCBzZXRMb2NhdGlvbklkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2NhdGlvblRhYmxlRGF0YSwgc2V0TG9jYXRpb25UYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvY2F0aW9uSWQsIHNldExvY2F0aW9uSWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbbG9jYXRpb25JbmZvLCBzZXRMb2NhdGlvbkluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGxvY2F0aW9uSWQ6IFwiXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgYWRkcmVzczE6IFwiXCIsXHJcbiAgICAgICAgYWRkcmVzczI6IFwiXCIsXHJcbiAgICAgICAgY2l0eTogXCJcIixcclxuICAgICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgIHppcENvZGU6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJmZXRjaGluZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb25zKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChsb2NhdGlvbiwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmFkZHJlc3MyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uemlwQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFZpZXcgRGV0YWlscy0ke2xvY2F0aW9uLl9pZC50b1N0cmluZygpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBEZWxldGUtJHtsb2NhdGlvbi5faWQudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2NhdGlvblRhYmxlRGF0YShuZXdEYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2RhdGEsIGhhcHBlbmluZ10pO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkFkZExvY2F0aW9uTW9kYWwoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0TG9jYXRpb25JbmZvKHtcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogbG9jYXRpb25zW2luZGV4XS5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uc1tpbmRleF0udGl0bGUsXHJcbiAgICAgICAgICAgIGFkZHJlc3MxOiBsb2NhdGlvbnNbaW5kZXhdLmFkZHJlc3MxLFxyXG4gICAgICAgICAgICBhZGRyZXNzMjogbG9jYXRpb25zW2luZGV4XS5hZGRyZXNzMixcclxuICAgICAgICAgICAgY2l0eTogbG9jYXRpb25zW2luZGV4XS5jaXR5LFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBsb2NhdGlvbnNbaW5kZXhdLmNvdW50cnksXHJcbiAgICAgICAgICAgIHBob25lOiBsb2NhdGlvbnNbaW5kZXhdLnBob25lLFxyXG4gICAgICAgICAgICB6aXBDb2RlOiBsb2NhdGlvbnNbaW5kZXhdLnppcENvZGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0TG9jYXRpb25JZChcIlwiKTtcclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5EZWxldGVQcm9tcHQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgc2V0TG9jYXRpb25JZEZvckRlbGV0aW5nKF9pZCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBsb2NhdGlvbnMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCA9PT0gbG9jYXRpb25zW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChsb2NhdGlvbnNbeF0udGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkVXBkYXRlTG9jYXRpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIEZvciB1cGRhdGluZyBwdXJwb3NlXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBhZGRyZXNzMSwgYWRkcmVzczIsIGNpdHksIGNvdW50cnksIHBob25lLCB6aXBDb2RlIH0gPSBsb2NhdGlvbkluZm87XHJcblxyXG4gICAgICAgIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgIGlmICghdGl0bGUgfHwgIWFkZHJlc3MxIHx8ICFhZGRyZXNzMiB8fCAhY2l0eSB8fCAhY291bnRyeSB8fCAhcGhvbmUgfHwgIXppcENvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJTYXZpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL2FkZC1sb2NhdGlvblwiO1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkKSBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvdXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgbG9jYXRpb25JbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvY2F0aW9uSW5mbyh7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHppcENvZGU6IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmZXIgYWRkaW5nL3VwZGF0aW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlOyBcclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdChmYWxzZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiRGVsZXRpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy9kZWxldGVcIiwgeyBfaWQgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmUtZmV0Y2hpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaE5leHRQcmV2SXRlbXMoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U2tpcCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHNraXA6IG5ld1NraXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZnRlciBuZXh0IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbnN9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxDb250cm9sUGFuZWwgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25zX2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkTG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaW5wdXQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JbmZvID0ge2xvY2F0aW9uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0cnVlLCBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgZGlzcGxheSB0aGUgZm9ybSBhbmQgd2lsbCBoaWRlIGlmIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsaWNraW5nIG9uIGNsb3NlIGJ1dHRvbiB3aWxsIGludm9rZSB0aGlzIGZ1bmN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlTG9jYXRpb25Gb3JtID0ge2Rpc3BsYXlIaWRlTG9jYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvbGxvd2luZyBhdHRyaWJ1dGVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBkaXNwbGF5SGlkZUxvY2F0aW9uRm9ybSBmdW5jdGlvbiBhcyBhcmd1bWVudHMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHN0YXRlcyBvbiBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnQuIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9jYXRpb25JbmZvIHdpbGwgdXBkYXRlIHRoZSBsb2NhdGlvbkluZm8gc3RhdGUgd2l0aCBpdCdzIGluaXRpYWwgZW1wdHkgdmFsdWVzICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb25JbmZvID0ge3NldExvY2F0aW9uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVXBkYXRlTG9jYXRpb24gPSB7YWRkVXBkYXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0YXRlLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldENhdGVnb3J5U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhcHBlbmluZyA9IHtzZXRIYXBwZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSl9PkFkZCBMb2NhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7bG9jYXRpb25EYXRhVGFibGVIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtsb2NhdGlvblRhYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRMb2NhdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxMb2NhdGlvbkRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMgPSB7bG9jYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQgPSB7bG9jYXRpb25JZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb25JZCA9IHtzZXRMb2NhdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5BZGRMb2NhdGlvbk1vZGFsID0ge29wZW5BZGRMb2NhdGlvbk1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwcmV2XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtmZXRjaE5leHRJdGVtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnNraXAgLSBzdGF0ZS5saW1pdCA8IDAgPyAwIDogc3RhdGUuc2tpcCA9PT0gc3RhdGUuZGF0YUxlbmd0aCAmJiBzdGF0ZS5za2lwIC0gc3RhdGUubGltaXQgKiAyID49IDAgPyBzdGF0ZS5za2lwIC0gc3RhdGUubGltaXQgKiAyIDogc3RhdGUuc2tpcCAtIHN0YXRlLmxpbWl0IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJmxhcXVvOyBQcmV2XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3RhdGUuc2tpcCArIHN0YXRlLmxpbWl0ID4gc3RhdGUuZGF0YUxlbmd0aCA/IHN0YXRlLnNraXAgOiBzdGF0ZS5za2lwICsgc3RhdGUubGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtmZXRjaE5leHRJdGVtc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2SXRlbXMgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldFN0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaE5leHRQcmV2SXRlbXMgPSB7ZmV0Y2hOZXh0UHJldkl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxOZXh0UHJldlZpZXcgc3RhdGUgPSB7c3RhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlUHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRpbmcgPSB7ZGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2xvY2F0aW9uSWRGb3JEZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZUZvckRlbGV0ZVByb21wdCA9IHtpdGVtTmFtZUZvckRlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZVByb21wdCA9IHtzaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0ID0ge3NldFNob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHthY3Rpb25NZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UgPSB7c2V0QWN0aW9uTWVzc2FnZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlQXhpb3MiLCJkaXNwbGF5SGlkZUxvY2F0aW9uRm9ybSIsImxvY2F0aW9uRGF0YVRhYmxlSGVhZGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9hZGluZyIsIkl0ZW1UYWJsZUhlYWRlciIsIkl0ZW1UYWJsZURhdGEiLCJDb250cm9sUGFuZWwiLCJBZGRMb2NhdGlvbiIsIk5leHRQcmV2SXRlbXMiLCJOZXh0UHJldlZpZXciLCJTZWFyY2hJbnB1dCIsIkRhdGFUYWJsZSIsIkxvY2F0aW9uRGV0YWlscyIsIkRlbGV0ZVByb21wdCIsIk1lc3NhZ2UiLCJMb2NhdGlvbiIsImhhcHBlbmluZyIsInNldEhhcHBlbmluZyIsInNlYXJjaFRleHQiLCJza2lwIiwibGltaXQiLCJkYXRhTGVuZ3RoIiwic3RhdGUiLCJzZXRTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJhY3Rpb25NZXNzYWdlIiwic2V0QWN0aW9uTWVzc2FnZSIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsImxvY2F0aW9uSWRGb3JEZWxldGluZyIsInNldExvY2F0aW9uSWRGb3JEZWxldGluZyIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJsb2NhdGlvblRhYmxlRGF0YSIsInNldExvY2F0aW9uVGFibGVEYXRhIiwibG9jYXRpb25JZCIsInNldExvY2F0aW9uSWQiLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsInRpdGxlIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJjb3VudHJ5IiwicGhvbmUiLCJ6aXBDb2RlIiwibG9jYXRpb25JbmZvIiwic2V0TG9jYXRpb25JbmZvIiwibmV3RGF0YSIsImZvckVhY2giLCJsb2NhdGlvbiIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJvcGVuQWRkTG9jYXRpb25Nb2RhbCIsImV2ZW50IiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJvcGVuRGVsZXRlUHJvbXB0IiwieCIsImxlbmd0aCIsImFkZFVwZGF0ZUxvY2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzcG9uc2UiLCJkZWxldGVMb2NhdGlvbiIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaE5leHRQcmV2SXRlbXMiLCJuZXdTa2lwIiwiZGlzcGxheSIsIndpZHRoIiwic2V0Q2F0ZWdvcnlTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=
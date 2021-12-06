"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/categories",{

/***/ "./pages/admins/categories.js":
/*!************************************!*\
  !*** ./pages/admins/categories.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Category; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var _libs_category_modifiers_fetchCategoryData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/category-modifiers/fetchCategoryData */ "./libs/category-modifiers/fetchCategoryData.js");
/* harmony import */ var _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/category-modifiers/searchCategories */ "./libs/category-modifiers/searchCategories.js");
/* harmony import */ var _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/category-modifiers/displayHideCategoryForm */ "./libs/category-modifiers/displayHideCategoryForm.js");
/* harmony import */ var _libs_category_modifiers_deleteCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/category-modifiers/deleteCategory */ "./libs/category-modifiers/deleteCategory.js");
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styles/locations/AddLocation.module.css */ "./styles/locations/AddLocation.module.css");
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/admins/category/AddCategory */ "./components/admins/category/AddCategory.js");
/* harmony import */ var _components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/reusable-components/DisplayFormButton */ "./components/reusable-components/DisplayFormButton.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/item-details/ItemDetailsModal */ "./components/reusable-components/item-details/ItemDetailsModal.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\categories.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Modifier functions





 // React Modules

 // Stylesheet

 // components
// Table Components



 // Other Components










function Category() {
  _s();

  var categoryHeaders = ["_id", "Title", "Action", "__v", "Delete"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      categoryState = _useState2[0],
      setCategoryState = _useState2[1]; // Custom hook call to fetch data


  var endpoint = "http://localhost:7070/api/categories";
  var requestBody = {
    searchText: categoryState.searchText,
    skip: categoryState.skip,
    limit: categoryState.limit
  };

  var _useAxios = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_8__.default)("post", endpoint, requestBody, happening),
      data = _useAxios.data,
      totalDataCount = _useAxios.totalDataCount,
      error = _useAxios.error,
      loading = _useAxios.loading;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showDeletePrompt = _useState3[0],
      setShowDeletePrompt = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      itemNameForDeletePrompt = _useState4[0],
      setItemNameForDeletePrompt = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      deleting = _useState5[0],
      setDeleting = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categoryTableData = _useState7[0],
      setCategoryTableData = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      categoryId = _useState8[0],
      setCategoryId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      categoryIdForDeleting = _useState9[0],
      setCategoryIdForDeleting = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      isAddingUpdating = _useState10[0],
      setIsAddingUpdating = _useState10[1]; // const [display]


  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    categoryId: "",
    title: ""
  }),
      categoryInfo = _useState11[0],
      setCategoryInfo = _useState11[1];

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    setHappening("fetching");

    if (data !== null) {
      setCategories(data);
      var newData = [];
      data.forEach(function (category, index) {
        newData.push({
          id: index + 1,
          data: [category.title, "View Details-".concat(category._id.toString()), "Delete-".concat(category._id.toString())]
        });
      });
      setCategoryTableData(newData);
      setCategoryState(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          dataLength: totalDataCount
        });
      });
    }

    (0,_libs_category_modifiers_fetchCategoryData__WEBPACK_IMPORTED_MODULE_4__.fetchCategoryData)(state, state.skip, setState);
  }, []);

  function handleChange(event) {
    setState(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        searchText: event.target.value
      });
    });
    setHappening("searching");
  }

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
      var _id, _locationInfo, title, address1, address2, city, country, phone, zipCode, _endpoint, response;

      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); // For updating purpose

              _id = event.target.value;
              _locationInfo = locationInfo, title = _locationInfo.title, address1 = _locationInfo.address1, address2 = _locationInfo.address2, city = _locationInfo.city, country = _locationInfo.country, phone = _locationInfo.phone, zipCode = _locationInfo.zipCode; // Form validation

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
              return axios.post(_endpoint, locationInfo);

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
              return axios.post("http://localhost:7070/api/locations/delete", {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_22___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_14__.default // For input field values
      , {
        categoryInfo: categoryInfo // if true, isAddingUpdating will display the form and will hide if false
        ,
        isAddingUpdating: isAddingUpdating // Clicking on close button will invoke this function 
        ,
        displayHideCategoryForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_6__.displayHideCategoryForm // Following attributes will be passed to the displayHideCategoryForm function as arguments for
        // updating the states on close button click event. isAddingUpdating will be set to false,
        // setLocationInfo will update the locationInfo state with it's initial empty values   
        ,
        setCategoryInfo: setCategoryInfo,
        setIsAddingUpdating: setIsAddingUpdating
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_18__.default, {
          state: state,
          setState: setState,
          searchData: _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_5__.searchCategories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_15__.default, {
          text: "Add Category",
          displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_6__.displayHideCategoryForm,
          setIsAddingUpdating: setIsAddingUpdating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_12__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_16__.default, {
        state: state,
        setState: setState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_20__.default, {
        deleting: deleting,
        itemId: locationIdForDeleting,
        itemNameForDeletePrompt: itemNameForDeletePrompt,
        showDeletePrompt: showDeletePrompt,
        setShowDeletePrompt: setShowDeletePrompt,
        deleteItem: deleteLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_17__.default, {
        itemId: categoryId,
        setItemId: setCategoryId,
        items: state.categories,
        itemHeaders: categoryHeaders,
        setItemInfo: setCategoryInfo // For displaying location add/update form
        ,
        isAddingUpdating: isAddingUpdating,
        setIsAddingUpdating: setIsAddingUpdating // Add and update forms are same but need to populate the form's input fields with the data for updating
        ,
        displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_6__.displayHideCategoryForm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 9
  }, this);
}

_s(Category, "/trtRf/weQMU91wx51Kn1Dr5QwM=", false, function () {
  return [_libs_useAxios__WEBPACK_IMPORTED_MODULE_8__.default];
});

_c = Category;

var _c;

$RefreshReg$(_c, "Category");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuMWIxNTg2ZmIyOWJkOWQyZTcyMWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztDQUdBOztDQUdBO0FBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU29CLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDZCwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQ2hCLCtDQUFRLENBQUM7QUFDL0NpQixJQUFBQSxVQUFVLEVBQUUsRUFEbUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxDQUZ5QztBQUcvQ0MsSUFBQUEsS0FBSyxFQUFFLEVBSHdDO0FBSS9DQyxJQUFBQSxVQUFVLEVBQUU7QUFKbUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9DLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCLGlCQUxnQyxDQVloQzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFFUCxJQUFBQSxVQUFVLEVBQUVJLGFBQWEsQ0FBQ0osVUFBNUI7QUFBd0NDLElBQUFBLElBQUksRUFBRUcsYUFBYSxDQUFDSCxJQUE1RDtBQUFrRUMsSUFBQUEsS0FBSyxFQUFFRSxhQUFhLENBQUNGO0FBQXZGLEdBQXBCOztBQUNBLGtCQUFpRHJCLHVEQUFRLENBQUMsTUFBRCxFQUFTeUIsUUFBVCxFQUFtQkMsV0FBbkIsRUFBZ0NULFNB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QUFBQTtBQUFBLGNBakVKLGVBMkVJLCtEQUFDLG1HQUFEO0FBQ0ksY0FBTSxFQUFJaEQsVUFEZDtBQUVJLGlCQUFTLEVBQUlDLGFBRmpCO0FBR0ksYUFBSyxFQUFJaUIsS0FBSyxDQUFDdEIsVUFIbkI7QUFJSSxtQkFBVyxFQUFJckIsZUFKbkI7QUFLSSxtQkFBVyxFQUFJaUMsZUFMbkIsQ0FNSTtBQU5KO0FBT0ksd0JBQWdCLEVBQUlKLGdCQVB4QjtBQVFJLDJCQUFtQixFQUFJQyxtQkFSM0IsQ0FTSTtBQVRKO0FBVUksdUJBQWUsRUFBSWhELHFHQUF1QkE7QUFWOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlHSDs7R0F2VHVCaUI7VUFlNkJmOzs7S0FmN0JlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGlmaWVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5RGF0YSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9mZXRjaENhdGVnb3J5RGF0YVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL3NlYXJjaENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGlzcGxheUhpZGVDYXRlZ29yeUZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGVsZXRlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9sb2NhdGlvbnMvQWRkTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuLy8gVGFibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgSXRlbVRhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IEl0ZW1UYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZURhdGFcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcblxyXG4vLyBPdGhlciBDb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IERpc3BsYXlGb3JtQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGlzcGxheUZvcm1CdXR0b25cIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBJdGVtRGV0YWlsc01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS1kZXRhaWxzL0l0ZW1EZXRhaWxzTW9kYWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBEZWxldGVQcm9tcHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EZWxldGVQcm9tcHRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQcm9tcHQsIHNldFNob3dEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0LCBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZWxldGluZywgc2V0RGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5VGFibGVEYXRhLCBzZXRDYXRlZ29yeVRhYmxlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZCwgc2V0Q2F0ZWdvcnlJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkRm9yRGVsZXRpbmcsIHNldENhdGVnb3J5SWRGb3JEZWxldGluZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0FkZGluZ1VwZGF0aW5nLCBzZXRJc0FkZGluZ1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IFtkaXNwbGF5XVxyXG4gICAgY29uc3QgW2NhdGVnb3J5SW5mbywgc2V0Q2F0ZWdvcnlJbmZvXSA9IHVzZVN0YXRlKHsgY2F0ZWdvcnlJZDogXCJcIiwgdGl0bGU6IFwiXCIgfSk7XHJcblxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJmZXRjaGluZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBWaWV3IERldGFpbHMtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgRGVsZXRlLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlUYWJsZURhdGEobmV3RGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoQ2F0ZWdvcnlEYXRhKHN0YXRlLCBzdGF0ZS5za2lwLCBzZXRTdGF0ZSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInNlYXJjaGluZ1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkFkZExvY2F0aW9uTW9kYWwoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0TG9jYXRpb25JbmZvKHtcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogbG9jYXRpb25zW2luZGV4XS5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uc1tpbmRleF0udGl0bGUsXHJcbiAgICAgICAgICAgIGFkZHJlc3MxOiBsb2NhdGlvbnNbaW5kZXhdLmFkZHJlc3MxLFxyXG4gICAgICAgICAgICBhZGRyZXNzMjogbG9jYXRpb25zW2luZGV4XS5hZGRyZXNzMixcclxuICAgICAgICAgICAgY2l0eTogbG9jYXRpb25zW2luZGV4XS5jaXR5LFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBsb2NhdGlvbnNbaW5kZXhdLmNvdW50cnksXHJcbiAgICAgICAgICAgIHBob25lOiBsb2NhdGlvbnNbaW5kZXhdLnBob25lLFxyXG4gICAgICAgICAgICB6aXBDb2RlOiBsb2NhdGlvbnNbaW5kZXhdLnppcENvZGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0TG9jYXRpb25JZChcIlwiKTtcclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5EZWxldGVQcm9tcHQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgc2V0TG9jYXRpb25JZEZvckRlbGV0aW5nKF9pZCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBsb2NhdGlvbnMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCA9PT0gbG9jYXRpb25zW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChsb2NhdGlvbnNbeF0udGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkVXBkYXRlTG9jYXRpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIEZvciB1cGRhdGluZyBwdXJwb3NlXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBhZGRyZXNzMSwgYWRkcmVzczIsIGNpdHksIGNvdW50cnksIHBob25lLCB6aXBDb2RlIH0gPSBsb2NhdGlvbkluZm87XHJcblxyXG4gICAgICAgIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgIGlmICghdGl0bGUgfHwgIWFkZHJlc3MxIHx8ICFhZGRyZXNzMiB8fCAhY2l0eSB8fCAhY291bnRyeSB8fCAhcGhvbmUgfHwgIXppcENvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJTYXZpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL2FkZC1sb2NhdGlvblwiO1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkKSBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvdXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgbG9jYXRpb25JbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvY2F0aW9uSW5mbyh7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHppcENvZGU6IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmZXIgYWRkaW5nL3VwZGF0aW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlOyBcclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdChmYWxzZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiRGVsZXRpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy9kZWxldGVcIiwgeyBfaWQgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmUtZmV0Y2hpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaE5leHRQcmV2SXRlbXMoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U2tpcCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHNraXA6IG5ld1NraXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZnRlciBuZXh0IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cclxuICAgICAgICAgICAgPENvbnRyb2xQYW5lbCAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeV9jb250ZW50XCIgc3R5bGUgPSB7e3dpZHRoOiBcIjgwJVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFkZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGlucHV0IGZpZWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5mbyA9IHtjYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSwgaXNBZGRpbmdVcGRhdGluZyB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHdpbGwgaGlkZSBpZiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiBjbG9zZSBidXR0b24gd2lsbCBpbnZva2UgdGhpcyBmdW5jdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb2xsb3dpbmcgYXR0cmlidXRlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gZnVuY3Rpb24gYXMgYXJndW1lbnRzIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBzdGF0ZXMgb24gY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50LiBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgYmUgc2V0IHRvIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExvY2F0aW9uSW5mbyB3aWxsIHVwZGF0ZSB0aGUgbG9jYXRpb25JbmZvIHN0YXRlIHdpdGggaXQncyBpbml0aWFsIGVtcHR5IHZhbHVlcyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSB7c2VhcmNoQ2F0ZWdvcmllc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzcGxheUZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRkIENhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFsIGNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2NhdGVnb3J5VGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlSGVhZGVyIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZURhdGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2SXRlbXMgc3RhdGUgPSB7c3RhdGV9IHNldFN0YXRlID0ge3NldFN0YXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtsb2NhdGlvbklkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxJdGVtRGV0YWlsc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZGlzcGxheWluZyBsb2NhdGlvbiBhZGQvdXBkYXRlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgdXBkYXRlIGZvcm1zIGFyZSBzYW1lIGJ1dCBuZWVkIHRvIHBvcHVsYXRlIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzIHdpdGggdGhlIGRhdGEgZm9yIHVwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwibmV3RGF0YSIsImZvckVhY2giLCJjYXRlZ29yeSIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wZW5BZGRMb2NhdGlvbk1vZGFsIiwiTnVtYmVyIiwic2V0TG9jYXRpb25JbmZvIiwibG9jYXRpb25JZCIsImxvY2F0aW9ucyIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwiY291bnRyeSIsInBob25lIiwiemlwQ29kZSIsInNldExvY2F0aW9uSWQiLCJvcGVuRGVsZXRlUHJvbXB0Iiwic2V0TG9jYXRpb25JZEZvckRlbGV0aW5nIiwieCIsImxlbmd0aCIsImFkZFVwZGF0ZUxvY2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbkluZm8iLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJzZXRBY3Rpb25NZXNzYWdlIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkZWxldGVMb2NhdGlvbiIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaE5leHRQcmV2SXRlbXMiLCJuZXdTa2lwIiwiZGlzcGxheSIsIndpZHRoIiwibG9jYXRpb25JZEZvckRlbGV0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==
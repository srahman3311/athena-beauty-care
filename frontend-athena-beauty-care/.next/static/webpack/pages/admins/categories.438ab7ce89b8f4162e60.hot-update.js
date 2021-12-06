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

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    categories: [],
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      state = _useState12[0],
      setState = _useState12[1];

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
      lineNumber: 260,
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
        lineNumber: 264,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_18__.default, {
          state: state,
          setState: setState,
          searchData: _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_5__.searchCategories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_15__.default, {
          text: "Add Category",
          displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_6__.displayHideCategoryForm,
          setIsAddingUpdating: setIsAddingUpdating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_12__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_16__.default, {
        state: state,
        setState: setState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
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
        lineNumber: 327,
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
        lineNumber: 337,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 9
  }, this);
}

_s(Category, "nlpwPYavEwEe8QjeCLJpFBBKVUM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuNDM4YWI3Y2U4OWI4ZjQxNjJlNjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztDQUdBOztDQUdBO0FBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU29CLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDZCwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQ2hCLCtDQUFRLENBQUM7QUFDL0NpQixJQUFBQSxVQUFVLEVBQUUsRUFEbUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxDQUZ5QztBQUcvQ0MsSUFBQUEsS0FBSyxFQUFFLEVBSHdDO0FBSS9DQyxJQUFBQSxVQUFVLEVBQUU7QUFKbUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9DLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCLGlCQUxnQyxDQVloQzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFFUCxJQUFBQSxVQUFVLEVBQUVJLGFBQWEsQ0FBQ0osVUFBNUI7QUFBd0NDLElBQUFBLElBQUksRUFBRUcsYUFBYSxDQUFDSCxJQUE1RDtBQUFrRUMsSUFBQUEsS0FBSyxFQUFFRSxhQUFhLENBQUNGO0FBQXZGLEdBQXBCOztBQUNBLGtCQUFpRHJCLHVEQUFRLENBQUMsTUFBRCxFQUFTeUIsUUFBVCxFQUFtQkMsV0FBbkIsRUFBZ0NULFNB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O0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoRUosZUFpRUksK0RBQUMsa0ZBQUQ7QUFDSSxnQkFBUSxFQUFJaEIsUUFEaEI7QUFFSSxjQUFNLEVBQUk4RCxxQkFGZDtBQUdJLCtCQUF1QixFQUFJaEUsdUJBSC9CO0FBSUksd0JBQWdCLEVBQUlGLGdCQUp4QjtBQUtJLDJCQUFtQixFQUFJQyxtQkFMM0I7QUFNSSxrQkFBVSxFQUFJeUQ7QUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpFSixlQTJFSSwrREFBQyxtR0FBRDtBQUNJLGNBQU0sRUFBSWhELFVBRGQ7QUFFSSxpQkFBUyxFQUFJQyxhQUZqQjtBQUdJLGFBQUssRUFBSVEsS0FBSyxDQUFDYixVQUhuQjtBQUlJLG1CQUFXLEVBQUlyQixlQUpuQjtBQUtJLG1CQUFXLEVBQUlpQyxlQUxuQixDQU1JO0FBTko7QUFPSSx3QkFBZ0IsRUFBSUosZ0JBUHhCO0FBUUksMkJBQW1CLEVBQUlDLG1CQVIzQixDQVNJO0FBVEo7QUFVSSx1QkFBZSxFQUFJaEQscUdBQXVCQTtBQVY5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUdIOztHQTlUdUJpQjtVQWU2QmY7OztLQWY3QmUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kaWZpZXIgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ2F0ZWdvcnlEYXRhIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2ZldGNoQ2F0ZWdvcnlEYXRhXCI7XHJcbmltcG9ydCB7IHNlYXJjaENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvc2VhcmNoQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kZWxldGVDYXRlZ29yeVwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuXHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2xvY2F0aW9ucy9BZGRMb2NhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG4vLyBUYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBJdGVtVGFibGVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgSXRlbVRhYmxlRGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlRGF0YVwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGVcIjtcclxuXHJcbi8vIE90aGVyIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9BZGRDYXRlZ29yeVwiO1xyXG5pbXBvcnQgRGlzcGxheUZvcm1CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EaXNwbGF5Rm9ybUJ1dHRvblwiO1xyXG5pbXBvcnQgTmV4dFByZXZJdGVtcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL05leHRQcmV2SXRlbXNcIjtcclxuaW1wb3J0IEl0ZW1EZXRhaWxzTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLWRldGFpbHMvSXRlbURldGFpbHNNb2RhbFwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IERlbGV0ZVByb21wdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0RlbGV0ZVByb21wdFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSAoKSB7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJzID0gW1wiX2lkXCIsIFwiVGl0bGVcIiwgXCJBY3Rpb25cIiwgXCJfX3ZcIiwgXCJEZWxldGVcIl07XHJcblxyXG4gICAgY29uc3QgW2hhcHBlbmluZywgc2V0SGFwcGVuaW5nXSA9IHVzZVN0YXRlKFwiRmV0Y2hpbmdcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlTdGF0ZSwgc2V0Q2F0ZWdvcnlTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc2VhcmNoVGV4dDogXCJcIixcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBkYXRhTGVuZ3RoOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDdXN0b20gaG9vayBjYWxsIHRvIGZldGNoIGRhdGFcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyBzZWFyY2hUZXh0OiBjYXRlZ29yeVN0YXRlLnNlYXJjaFRleHQsIHNraXA6IGNhdGVnb3J5U3RhdGUuc2tpcCwgbGltaXQ6IGNhdGVnb3J5U3RhdGUubGltaXQgfTtcclxuICAgIGNvbnN0IHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VBeGlvcyhcInBvc3RcIiwgZW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoYXBwZW5pbmcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlUYWJsZURhdGEsIHNldENhdGVnb3J5VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWRGb3JEZWxldGluZywgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJbmZvLCBzZXRDYXRlZ29yeUluZm9dID0gdXNlU3RhdGUoeyBjYXRlZ29yeUlkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSlcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFZpZXcgRGV0YWlscy0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBEZWxldGUtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeVRhYmxlRGF0YShuZXdEYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeVN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoOiB0b3RhbERhdGFDb3VudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hDYXRlZ29yeURhdGEoc3RhdGUsIHN0YXRlLnNraXAsIHNldFN0YXRlKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwic2VhcmNoaW5nXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQWRkTG9jYXRpb25Nb2RhbChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbkluZm8oe1xyXG4gICAgICAgICAgICBsb2NhdGlvbklkOiBsb2NhdGlvbnNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogbG9jYXRpb25zW2luZGV4XS50aXRsZSxcclxuICAgICAgICAgICAgYWRkcmVzczE6IGxvY2F0aW9uc1tpbmRleF0uYWRkcmVzczEsXHJcbiAgICAgICAgICAgIGFkZHJlc3MyOiBsb2NhdGlvbnNbaW5kZXhdLmFkZHJlc3MyLFxyXG4gICAgICAgICAgICBjaXR5OiBsb2NhdGlvbnNbaW5kZXhdLmNpdHksXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGxvY2F0aW9uc1tpbmRleF0uY291bnRyeSxcclxuICAgICAgICAgICAgcGhvbmU6IGxvY2F0aW9uc1tpbmRleF0ucGhvbmUsXHJcbiAgICAgICAgICAgIHppcENvZGU6IGxvY2F0aW9uc1tpbmRleF0uemlwQ29kZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbklkKFwiXCIpO1xyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRlbGV0ZVByb21wdCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbklkRm9yRGVsZXRpbmcoX2lkKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGxvY2F0aW9ucy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBsb2NhdGlvbnNbeF0uX2lkLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0KGxvY2F0aW9uc1t4XS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVMb2NhdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHVwZGF0aW5nIHB1cnBvc2VcclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGFkZHJlc3MxLCBhZGRyZXNzMiwgY2l0eSwgY291bnRyeSwgcGhvbmUsIHppcENvZGUgfSA9IGxvY2F0aW9uSW5mbztcclxuXHJcbiAgICAgICAgLy8gRm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgaWYgKCF0aXRsZSB8fCAhYWRkcmVzczEgfHwgIWFkZHJlc3MyIHx8ICFjaXR5IHx8ICFjb3VudHJ5IHx8ICFwaG9uZSB8fCAhemlwQ29kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKHRydWUpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIlNhdmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvYWRkLWxvY2F0aW9uXCI7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy91cGRhdGVcIjtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCBsb2NhdGlvbkluZm8pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb25JbmZvKHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgemlwQ29kZTogXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZlciBhZGRpbmcvdXBkYXRpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7IFxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KGZhbHNlKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJEZWxldGluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL2RlbGV0ZVwiLCB7IF9pZCB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZS1mZXRjaGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoTmV4dFByZXZJdGVtcyhldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTa2lwID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2tpcDogbmV3U2tpcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmdGVyIG5leHQgYnV0dG9uIGNsaWNrZWRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaW5wdXQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmZvID0ge2NhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0cnVlLCBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgZGlzcGxheSB0aGUgZm9ybSBhbmQgd2lsbCBoaWRlIGlmIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsaWNraW5nIG9uIGNsb3NlIGJ1dHRvbiB3aWxsIGludm9rZSB0aGlzIGZ1bmN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvbGxvd2luZyBhdHRyaWJ1dGVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSBmdW5jdGlvbiBhcyBhcmd1bWVudHMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHN0YXRlcyBvbiBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnQuIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9jYXRpb25JbmZvIHdpbGwgdXBkYXRlIHRoZSBsb2NhdGlvbkluZm8gc3RhdGUgd2l0aCBpdCdzIGluaXRpYWwgZW1wdHkgdmFsdWVzICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IHtzZWFyY2hDYXRlZ29yaWVzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGQgQ2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWwgY3NzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzID0ge2NhdGVnb3J5RGF0YVRhYmxlSGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7Y2F0ZWdvcnlUYWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5EZWxldGVQcm9tcHQgPSB7b3BlbkRlbGV0ZVByb21wdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVIZWFkZXIgaXRlbUhlYWRlcnMgPSB7Y2F0ZWdvcnlIZWFkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlRGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0ge3N0YXRlLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmV4dFByZXZJdGVtcyBzdGF0ZSA9IHtzdGF0ZX0gc2V0U3RhdGUgPSB7c2V0U3RhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlUHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRpbmcgPSB7ZGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2xvY2F0aW9uSWRGb3JEZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZUZvckRlbGV0ZVByb21wdCA9IHtpdGVtTmFtZUZvckRlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZVByb21wdCA9IHtzaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0ID0ge3NldFNob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzICovfVxyXG4gICAgICAgICAgICAgICAgPEl0ZW1EZXRhaWxzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBkaXNwbGF5aW5nIGxvY2F0aW9uIGFkZC91cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFuZCB1cGRhdGUgZm9ybXMgYXJlIHNhbWUgYnV0IG5lZWQgdG8gcG9wdWxhdGUgdGhlIGZvcm0ncyBpbnB1dCBmaWVsZHMgd2l0aCB0aGUgZGF0YSBmb3IgdXBkYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIiwiZmV0Y2hDYXRlZ29yeURhdGEiLCJzZWFyY2hDYXRlZ29yaWVzIiwiZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0iLCJkZWxldGVDYXRlZ29yeSIsInVzZUF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJdGVtVGFibGVIZWFkZXIiLCJJdGVtVGFibGVEYXRhIiwiRGF0YVRhYmxlIiwiQ29udHJvbFBhbmVsIiwiQWRkQ2F0ZWdvcnkiLCJEaXNwbGF5Rm9ybUJ1dHRvbiIsIk5leHRQcmV2SXRlbXMiLCJJdGVtRGV0YWlsc01vZGFsIiwiU2VhcmNoSW5wdXQiLCJMb2FkaW5nIiwiRGVsZXRlUHJvbXB0IiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeUhlYWRlcnMiLCJoYXBwZW5pbmciLCJzZXRIYXBwZW5pbmciLCJzZWFyY2hUZXh0Iiwic2tpcCIsImxpbWl0IiwiZGF0YUxlbmd0aCIsImNhdGVnb3J5U3RhdGUiLCJzZXRDYXRlZ29yeVN0YXRlIiwiZW5kcG9pbnQiLCJyZXF1ZXN0Qm9keSIsImRhdGEiLCJ0b3RhbERhdGFDb3VudCIsImVycm9yIiwibG9hZGluZyIsInNob3dEZWxldGVQcm9tcHQiLCJzZXRTaG93RGVsZXRlUHJvbXB0IiwiaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNhdGVnb3J5VGFibGVEYXRhIiwic2V0Q2F0ZWdvcnlUYWJsZURhdGEiLCJjYXRlZ29yeUlkIiwic2V0Q2F0ZWdvcnlJZCIsImNhdGVnb3J5SWRGb3JEZWxldGluZyIsInNldENhdGVnb3J5SWRGb3JEZWxldGluZyIsImlzQWRkaW5nVXBkYXRpbmciLCJzZXRJc0FkZGluZ1VwZGF0aW5nIiwidGl0bGUiLCJjYXRlZ29yeUluZm8iLCJzZXRDYXRlZ29yeUluZm8iLCJzdGF0ZSIsInNldFN0YXRlIiwibmV3RGF0YSIsImZvckVhY2giLCJjYXRlZ29yeSIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib3BlbkFkZExvY2F0aW9uTW9kYWwiLCJOdW1iZXIiLCJzZXRMb2NhdGlvbkluZm8iLCJsb2NhdGlvbklkIiwibG9jYXRpb25zIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJjb3VudHJ5IiwicGhvbmUiLCJ6aXBDb2RlIiwic2V0TG9jYXRpb25JZCIsIm9wZW5EZWxldGVQcm9tcHQiLCJzZXRMb2NhdGlvbklkRm9yRGVsZXRpbmciLCJ4IiwibGVuZ3RoIiwiYWRkVXBkYXRlTG9jYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uSW5mbyIsInNldFZhbGlkYXRpb25FcnJvciIsInNldEFjdGlvbk1lc3NhZ2UiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImRlbGV0ZUxvY2F0aW9uIiwibXNnIiwiY29uc29sZSIsImxvZyIsImZldGNoTmV4dFByZXZJdGVtcyIsIm5ld1NraXAiLCJkaXNwbGF5Iiwid2lkdGgiLCJsb2NhdGlvbklkRm9yRGVsZXRpbmciXSwic291cmNlUm9vdCI6IiJ9
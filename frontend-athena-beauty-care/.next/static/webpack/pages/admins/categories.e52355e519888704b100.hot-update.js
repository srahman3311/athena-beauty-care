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
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var _libs_category_modifiers_fetchCategoryData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/category-modifiers/fetchCategoryData */ "./libs/category-modifiers/fetchCategoryData.js");
/* harmony import */ var _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/category-modifiers/searchCategories */ "./libs/category-modifiers/searchCategories.js");
/* harmony import */ var _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/category-modifiers/displayHideCategoryForm */ "./libs/category-modifiers/displayHideCategoryForm.js");
/* harmony import */ var _libs_category_modifiers_deleteCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/category-modifiers/deleteCategory */ "./libs/category-modifiers/deleteCategory.js");
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/locations/AddLocation.module.css */ "./styles/locations/AddLocation.module.css");
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/category/AddCategory */ "./components/admins/category/AddCategory.js");
/* harmony import */ var _components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/DisplayFormButton */ "./components/reusable-components/DisplayFormButton.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/reusable-components/item-details/ItemDetailsModal */ "./components/reusable-components/item-details/ItemDetailsModal.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\categories.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Modifier functions





 // React Modules

 // Stylesheet

 // components
// Table Components



 // Other Components










function Category() {
  _s();

  var categoryHeaders = ["_id", "Title", "Action", "__v", "Delete"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
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

  var _useAxios = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_6__.default)("post", endpoint, requestBody, happening),
      data = _useAxios.data,
      totalDataCount = _useAxios.totalDataCount,
      error = _useAxios.error,
      loading = _useAxios.loading;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      showDeletePrompt = _useState3[0],
      setShowDeletePrompt = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      itemNameForDeletePrompt = _useState4[0],
      setItemNameForDeletePrompt = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      deleting = _useState5[0],
      setDeleting = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      categoryTableData = _useState7[0],
      setCategoryTableData = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      categoryId = _useState8[0],
      setCategoryId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      categoryIdForDeleting = _useState9[0],
      setCategoryIdForDeleting = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      isAddingUpdating = _useState10[0],
      setIsAddingUpdating = _useState10[1]; // const [display]


  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    categoryId: "",
    title: ""
  }),
      categoryInfo = _useState11[0],
      setCategoryInfo = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    categories: [],
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      state = _useState12[0],
      setState = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
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

    (0,_libs_category_modifiers_fetchCategoryData__WEBPACK_IMPORTED_MODULE_2__.fetchCategoryData)(state, state.skip, setState);
  }, []);

  function openDeletePrompt(event) {
    var _id = event.target.value;
    setCategoryIdForDeleting(_id);

    for (var x = 0; x < locations.length; x++) {
      if (_id === locations[x]._id.toString()) {
        setItemNameForDeletePrompt(locations[x].title);
        break;
      }
    }

    setShowDeletePrompt(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_12__.default // For input field values
      , {
        categoryInfo: categoryInfo // if true, isAddingUpdating will display the form and will hide if false
        ,
        isAddingUpdating: isAddingUpdating // Clicking on close button will invoke this function 
        ,
        displayHideCategoryForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__.displayHideCategoryForm // Following attributes will be passed to the displayHideCategoryForm function as arguments for
        // updating the states on close button click event. isAddingUpdating will be set to false,
        // setLocationInfo will update the locationInfo state with it's initial empty values   
        ,
        setCategoryInfo: setCategoryInfo,
        setIsAddingUpdating: setIsAddingUpdating
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_16__.default, {
          state: state,
          setState: setState,
          searchData: _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_3__.searchCategories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_13__.default, {
          text: "Add Category",
          displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__.displayHideCategoryForm,
          setIsAddingUpdating: setIsAddingUpdating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_1__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_14__.default, {
        state: state,
        setState: setState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__.default, {
        deleting: deleting,
        itemId: locationIdForDeleting,
        itemNameForDeletePrompt: itemNameForDeletePrompt,
        showDeletePrompt: showDeletePrompt,
        setShowDeletePrompt: setShowDeletePrompt,
        deleteItem: deleteLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_15__.default, {
        itemId: categoryId,
        setItemId: setCategoryId,
        items: state.categories,
        itemHeaders: categoryHeaders,
        setItemInfo: setCategoryInfo // For displaying location add/update form
        ,
        isAddingUpdating: isAddingUpdating,
        setIsAddingUpdating: setIsAddingUpdating // Add and update forms are same but need to populate the form's input fields with the data for updating
        ,
        displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__.displayHideCategoryForm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }, this);
}

_s(Category, "nlpwPYavEwEe8QjeCLJpFBBKVUM=", false, function () {
  return [_libs_useAxios__WEBPACK_IMPORTED_MODULE_6__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuZTUyMzU1ZTUxOTg4ODcwNGIxMDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztDQUdBOztDQUdBO0FBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU29CLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDZCwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQ2hCLCtDQUFRLENBQUM7QUFDL0NpQixJQUFBQSxVQUFVLEVBQUUsRUFEbUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxDQUZ5QztBQUcvQ0MsSUFBQUEsS0FBSyxFQUFFLEVBSHdDO0FBSS9DQyxJQUFBQSxVQUFVLEVBQUU7QUFKbUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9DLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCLGlCQUxnQyxDQVloQzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFFUCxJQUFBQSxVQUFVLEVBQUVJLGFBQWEsQ0FBQ0osVUFBNUI7QUFBd0NDLElBQUFBLElBQUksRUFBRUcsYUFBYSxDQUFDSCxJQUE1RDtBQUFrRUMsSUFBQUEsS0FBSyxFQUFFRSxhQUFhLENBQUNGO0FBQXZGLEdBQXBCOztBQUNBLGtCQUFpRHJCLHVEQUFRLENBQUMsTUFBRCxFQUFTeUIsUUFBVCxFQUFtQkMsV0FBbkIsRUFBZ0NULFNBQWhDLENB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QixlQUpuQjtBQUtJLG1CQUFXLEVBQUlpQyxlQUxuQixDQU1JO0FBTko7QUFPSSx3QkFBZ0IsRUFBSUosZ0JBUHhCO0FBUUksMkJBQW1CLEVBQUlDLG1CQVIzQixDQVNJO0FBVEo7QUFVSSx1QkFBZSxFQUFJaEQscUdBQXVCQTtBQVY5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUdIOztHQWpNdUJpQjtVQWU2QmY7OztLQWY3QmUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kaWZpZXIgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ2F0ZWdvcnlEYXRhIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2ZldGNoQ2F0ZWdvcnlEYXRhXCI7XHJcbmltcG9ydCB7IHNlYXJjaENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvc2VhcmNoQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kZWxldGVDYXRlZ29yeVwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuXHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2xvY2F0aW9ucy9BZGRMb2NhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG4vLyBUYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBJdGVtVGFibGVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgSXRlbVRhYmxlRGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlRGF0YVwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGVcIjtcclxuXHJcbi8vIE90aGVyIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9BZGRDYXRlZ29yeVwiO1xyXG5pbXBvcnQgRGlzcGxheUZvcm1CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EaXNwbGF5Rm9ybUJ1dHRvblwiO1xyXG5pbXBvcnQgTmV4dFByZXZJdGVtcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL05leHRQcmV2SXRlbXNcIjtcclxuaW1wb3J0IEl0ZW1EZXRhaWxzTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLWRldGFpbHMvSXRlbURldGFpbHNNb2RhbFwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IERlbGV0ZVByb21wdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0RlbGV0ZVByb21wdFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSAoKSB7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJzID0gW1wiX2lkXCIsIFwiVGl0bGVcIiwgXCJBY3Rpb25cIiwgXCJfX3ZcIiwgXCJEZWxldGVcIl07XHJcblxyXG4gICAgY29uc3QgW2hhcHBlbmluZywgc2V0SGFwcGVuaW5nXSA9IHVzZVN0YXRlKFwiRmV0Y2hpbmdcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlTdGF0ZSwgc2V0Q2F0ZWdvcnlTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc2VhcmNoVGV4dDogXCJcIixcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBkYXRhTGVuZ3RoOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDdXN0b20gaG9vayBjYWxsIHRvIGZldGNoIGRhdGFcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyBzZWFyY2hUZXh0OiBjYXRlZ29yeVN0YXRlLnNlYXJjaFRleHQsIHNraXA6IGNhdGVnb3J5U3RhdGUuc2tpcCwgbGltaXQ6IGNhdGVnb3J5U3RhdGUubGltaXQgfTtcclxuICAgIGNvbnN0IHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VBeGlvcyhcInBvc3RcIiwgZW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoYXBwZW5pbmcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlUYWJsZURhdGEsIHNldENhdGVnb3J5VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWRGb3JEZWxldGluZywgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJbmZvLCBzZXRDYXRlZ29yeUluZm9dID0gdXNlU3RhdGUoeyBjYXRlZ29yeUlkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSlcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFZpZXcgRGV0YWlscy0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBEZWxldGUtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeVRhYmxlRGF0YShuZXdEYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeVN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoOiB0b3RhbERhdGFDb3VudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hDYXRlZ29yeURhdGEoc3RhdGUsIHN0YXRlLnNraXAsIHNldFN0YXRlKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRlbGV0ZVByb21wdCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmcoX2lkKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGxvY2F0aW9ucy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBsb2NhdGlvbnNbeF0uX2lkLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0KGxvY2F0aW9uc1t4XS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cclxuICAgICAgICAgICAgPENvbnRyb2xQYW5lbCAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeV9jb250ZW50XCIgc3R5bGUgPSB7e3dpZHRoOiBcIjgwJVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFkZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGlucHV0IGZpZWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5mbyA9IHtjYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSwgaXNBZGRpbmdVcGRhdGluZyB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHdpbGwgaGlkZSBpZiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiBjbG9zZSBidXR0b24gd2lsbCBpbnZva2UgdGhpcyBmdW5jdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb2xsb3dpbmcgYXR0cmlidXRlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gZnVuY3Rpb24gYXMgYXJndW1lbnRzIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBzdGF0ZXMgb24gY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50LiBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgYmUgc2V0IHRvIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExvY2F0aW9uSW5mbyB3aWxsIHVwZGF0ZSB0aGUgbG9jYXRpb25JbmZvIHN0YXRlIHdpdGggaXQncyBpbml0aWFsIGVtcHR5IHZhbHVlcyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSB7c2VhcmNoQ2F0ZWdvcmllc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzcGxheUZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRkIENhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFsIGNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2NhdGVnb3J5VGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlSGVhZGVyIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZURhdGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2SXRlbXMgc3RhdGUgPSB7c3RhdGV9IHNldFN0YXRlID0ge3NldFN0YXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtsb2NhdGlvbklkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxJdGVtRGV0YWlsc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZGlzcGxheWluZyBsb2NhdGlvbiBhZGQvdXBkYXRlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgdXBkYXRlIGZvcm1zIGFyZSBzYW1lIGJ1dCBuZWVkIHRvIHBvcHVsYXRlIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzIHdpdGggdGhlIGRhdGEgZm9yIHVwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJpbmRleCIsInB1c2giLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiY3VycmVudFZhbHVlIiwib3BlbkRlbGV0ZVByb21wdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ4IiwibG9jYXRpb25zIiwibGVuZ3RoIiwiZGlzcGxheSIsIndpZHRoIiwibG9jYXRpb25JZEZvckRlbGV0aW5nIiwiZGVsZXRlTG9jYXRpb24iXSwic291cmNlUm9vdCI6IiJ9
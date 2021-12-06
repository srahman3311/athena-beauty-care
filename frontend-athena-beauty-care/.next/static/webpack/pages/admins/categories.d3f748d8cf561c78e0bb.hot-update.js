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
    } //fetchCategoryData(state, state.skip, setState);

  }, []);

  function openDeletePrompt(event) {
    var _id = event.target.value;
    setCategoryIdForDeleting(_id);

    for (var x = 0; x < categories.length; x++) {
      if (_id === categories[x]._id.toString()) {
        setItemNameForDeletePrompt(categories[x].title);
        break;
      }
    }

    setShowDeletePrompt(true);
  }
  /*
  function handleChange(event) {
        setState(currentValue => {
          return {
              ...currentValue,
              searchText: event.target.value
          };
      });
        setHappening("searching");
    }
    function openAddLocationModal(event) {
        const index = Number(event.target.value);
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
   
  async function addUpdateLocation (event) {
        event.preventDefault();
        // For updating purpose
      const _id = event.target.value;
        const { title, address1, address2, city, country, phone, zipCode } = locationInfo;
        // Form validation
      if (!title || !address1 || !address2 || !city || !country || !phone || !zipCode) {
          return setValidationError(true);
      } 
        setIsAddingUpdating(false);
        try {
            setActionMessage("Saving");
            let endpoint = "http://localhost:7070/api/locations/add-location";
            if(_id) endpoint = "http://localhost:7070/api/locations/update";
            
          const response = await axios.post(endpoint, locationInfo);
            setActionMessage(response.data);
          
        } catch (error) {
            setActionMessage(error.response.data);
        } finally {
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
      }
    }
    async function deleteLocation(event) {
        const _id = event.target.value; 
        setShowDeletePrompt(false);
      
        try {
            setActionMessage("Deleting");
            const response = await axios.post("http://localhost:7070/api/locations/delete", { _id });
            setActionMessage(response.data.msg);
        } catch(error) {
            console.log(error);
        } finally {
            setHappening("re-fetching");
      }
    }
    function fetchNextPrevItems(event) {
        const newSkip = Number(event.target.value);
        setState(currentValue => {
            return {
              ...currentValue,
              skip: newSkip
          };
      });
        setHappening("refetching after next button clicked");
    }
  */


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_1__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 256,
    columnNumber: 9
  }, this);
}

_s(Category, "/trtRf/weQMU91wx51Kn1Dr5QwM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuZDNmNzQ4ZDhjZjU2MWM3OGUwYmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztDQUdBOztDQUdBO0FBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU29CLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDZCwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQ2hCLCtDQUFRLENBQUM7QUFDL0NpQixJQUFBQSxVQUFVLEVBQUUsRUFEbUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxDQUZ5QztBQUcvQ0MsSUFBQUEsS0FBSyxFQUFFLEVBSHdDO0FBSS9DQyxJQUFBQSxVQUFVLEVBQUU7QUFKbUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9DLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCLGlCQUxnQyxDQVloQzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFFUCxJQUFBQSxVQUFVLEVBQUVJLGFBQWEsQ0FBQ0osVUFBNUI7QUFBd0NDLElBQUFBLElBQUksRUFBRUcsYUFBYSxDQUFDSCxJQUE1RDtBQUFrRUMsSUFBQUEsS0FBSyxFQUFFRSxhQUFhLENBQUNGO0FBQXZGLEdBQXBCOztBQUNBLGtCQUFpRHJCLHVEQUFRLENBQUMsTUFBRCxFQUFTeUIsUUFBVCxFQUFtQkMsV0FBbkIsRUFBZ0NULFNBQWhDLENB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QUFDSSxzQkFBWSxFQUFJbkMsZ0VBRHBCO0FBRUksbUJBQVMsRUFBSTRDLGlCQUZqQjtBQUdJLG1CQUFTLEVBQUlHLGFBSGpCO0FBSUksMEJBQWdCLEVBQUlpQjtBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpR0g7O0dBNVR1QjVDO1VBZTZCZjs7O0tBZjdCZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbnMvY2F0ZWdvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2RpZmllciBmdW5jdGlvbnNcclxuaW1wb3J0IHsgY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIH0gZnJvbSBcIi4uLy4uL2xpYnMvZGF0YVwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hDYXRlZ29yeURhdGEgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZmV0Y2hDYXRlZ29yeURhdGFcIjtcclxuaW1wb3J0IHsgc2VhcmNoQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9zZWFyY2hDYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtXCI7XHJcbmltcG9ydCB7IGRlbGV0ZUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2RlbGV0ZUNhdGVnb3J5XCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG5cclxuXHJcbi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvbG9jYXRpb25zL0FkZExvY2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbi8vIFRhYmxlIENvbXBvbmVudHNcclxuaW1wb3J0IEl0ZW1UYWJsZUhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlSGVhZGVyXCI7XHJcbmltcG9ydCBJdGVtVGFibGVEYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVEYXRhXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL0RhdGFUYWJsZVwiO1xyXG5cclxuLy8gT3RoZXIgQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbFwiO1xyXG5pbXBvcnQgQWRkQ2F0ZWdvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0FkZENhdGVnb3J5XCI7XHJcbmltcG9ydCBEaXNwbGF5Rm9ybUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0Rpc3BsYXlGb3JtQnV0dG9uXCI7XHJcbmltcG9ydCBOZXh0UHJldkl0ZW1zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtc1wiO1xyXG5pbXBvcnQgSXRlbURldGFpbHNNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tZGV0YWlscy9JdGVtRGV0YWlsc01vZGFsXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRGVsZXRlUHJvbXB0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGVsZXRlUHJvbXB0XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5ICgpIHtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUhlYWRlcnMgPSBbXCJfaWRcIiwgXCJUaXRsZVwiLCBcIkFjdGlvblwiLCBcIl9fdlwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgICBjb25zdCBbaGFwcGVuaW5nLCBzZXRIYXBwZW5pbmddID0gdXNlU3RhdGUoXCJGZXRjaGluZ1wiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVN0YXRlLCBzZXRDYXRlZ29yeVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2hUZXh0OiBcIlwiLFxyXG4gICAgICAgIHNraXA6IDAsXHJcbiAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgIGRhdGFMZW5ndGg6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEN1c3RvbSBob29rIGNhbGwgdG8gZmV0Y2ggZGF0YVxyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiO1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IHNlYXJjaFRleHQ6IGNhdGVnb3J5U3RhdGUuc2VhcmNoVGV4dCwgc2tpcDogY2F0ZWdvcnlTdGF0ZS5za2lwLCBsaW1pdDogY2F0ZWdvcnlTdGF0ZS5saW1pdCB9O1xyXG4gICAgY29uc3QgeyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUF4aW9zKFwicG9zdFwiLCBlbmRwb2ludCwgcmVxdWVzdEJvZHksIGhhcHBlbmluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtzaG93RGVsZXRlUHJvbXB0LCBzZXRTaG93RGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpdGVtTmFtZUZvckRlbGV0ZVByb21wdCwgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVRhYmxlRGF0YSwgc2V0Q2F0ZWdvcnlUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWQsIHNldENhdGVnb3J5SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZEZvckRlbGV0aW5nLCBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZGlzcGxheV1cclxuICAgIGNvbnN0IFtjYXRlZ29yeUluZm8sIHNldENhdGVnb3J5SW5mb10gPSB1c2VTdGF0ZSh7IGNhdGVnb3J5SWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwiZmV0Y2hpbmdcIik7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYERlbGV0ZS0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2ZldGNoQ2F0ZWdvcnlEYXRhKHN0YXRlLCBzdGF0ZS5za2lwLCBzZXRTdGF0ZSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRGVsZXRlUHJvbXB0IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWRGb3JEZWxldGluZyhfaWQpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgY2F0ZWdvcmllcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBjYXRlZ29yaWVzW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChjYXRlZ29yaWVzW3hdLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwic2VhcmNoaW5nXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQWRkTG9jYXRpb25Nb2RhbChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbkluZm8oe1xyXG4gICAgICAgICAgICBsb2NhdGlvbklkOiBsb2NhdGlvbnNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogbG9jYXRpb25zW2luZGV4XS50aXRsZSxcclxuICAgICAgICAgICAgYWRkcmVzczE6IGxvY2F0aW9uc1tpbmRleF0uYWRkcmVzczEsXHJcbiAgICAgICAgICAgIGFkZHJlc3MyOiBsb2NhdGlvbnNbaW5kZXhdLmFkZHJlc3MyLFxyXG4gICAgICAgICAgICBjaXR5OiBsb2NhdGlvbnNbaW5kZXhdLmNpdHksXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGxvY2F0aW9uc1tpbmRleF0uY291bnRyeSxcclxuICAgICAgICAgICAgcGhvbmU6IGxvY2F0aW9uc1tpbmRleF0ucGhvbmUsXHJcbiAgICAgICAgICAgIHppcENvZGU6IGxvY2F0aW9uc1tpbmRleF0uemlwQ29kZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbklkKFwiXCIpO1xyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFVwZGF0ZUxvY2F0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBGb3IgdXBkYXRpbmcgcHVycG9zZVxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgYWRkcmVzczEsIGFkZHJlc3MyLCBjaXR5LCBjb3VudHJ5LCBwaG9uZSwgemlwQ29kZSB9ID0gbG9jYXRpb25JbmZvO1xyXG5cclxuICAgICAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgICAgICBpZiAoIXRpdGxlIHx8ICFhZGRyZXNzMSB8fCAhYWRkcmVzczIgfHwgIWNpdHkgfHwgIWNvdW50cnkgfHwgIXBob25lIHx8ICF6aXBDb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy9hZGQtbG9jYXRpb25cIjtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCkgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL3VwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIGxvY2F0aW9uSW5mbyk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2NhdGlvbkluZm8oe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczE6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMjogXCJcIixcclxuICAgICAgICAgICAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB6aXBDb2RlOiBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZy91cGRhdGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTsgXHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQoZmFsc2UpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkRlbGV0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvZGVsZXRlXCIsIHsgX2lkIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlLWZldGNoaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hOZXh0UHJldkl0ZW1zKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NraXAgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPEFkZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGlucHV0IGZpZWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5mbyA9IHtjYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSwgaXNBZGRpbmdVcGRhdGluZyB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHdpbGwgaGlkZSBpZiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiBjbG9zZSBidXR0b24gd2lsbCBpbnZva2UgdGhpcyBmdW5jdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb2xsb3dpbmcgYXR0cmlidXRlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gZnVuY3Rpb24gYXMgYXJndW1lbnRzIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBzdGF0ZXMgb24gY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50LiBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgYmUgc2V0IHRvIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExvY2F0aW9uSW5mbyB3aWxsIHVwZGF0ZSB0aGUgbG9jYXRpb25JbmZvIHN0YXRlIHdpdGggaXQncyBpbml0aWFsIGVtcHR5IHZhbHVlcyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IHtzZWFyY2hDYXRlZ29yaWVzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGQgQ2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFsIGNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2NhdGVnb3J5VGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlSGVhZGVyIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZURhdGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxOZXh0UHJldkl0ZW1zIHN0YXRlID0ge3N0YXRlfSBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtsb2NhdGlvbklkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFscy5jc3MgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEl0ZW1EZXRhaWxzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBkaXNwbGF5aW5nIGxvY2F0aW9uIGFkZC91cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFuZCB1cGRhdGUgZm9ybXMgYXJlIHNhbWUgYnV0IG5lZWQgdG8gcG9wdWxhdGUgdGhlIGZvcm0ncyBpbnB1dCBmaWVsZHMgd2l0aCB0aGUgZGF0YSBmb3IgdXBkYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwibmV3RGF0YSIsImZvckVhY2giLCJjYXRlZ29yeSIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJvcGVuRGVsZXRlUHJvbXB0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJsZW5ndGgiLCJkaXNwbGF5Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9
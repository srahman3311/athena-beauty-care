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
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/locations/AddLocation.module.css */ "./styles/locations/AddLocation.module.css");
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21__);
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
/* harmony import */ var _components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/admins/category/CategoryDetails */ "./components/admins/category/CategoryDetails.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
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
      setCategoryTableData = _useState7[1]; // This categoryId will be used to open the details of the category. 


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
          data: [category.title, // View Details and Delete button's values will be the id of the category which will be used
          // to open the details modal and delete prompt
          "View Details-".concat(category._id.toString()), "Delete-".concat(category._id.toString())]
        });
      });
      setCategoryTableData(newData);
      setCategoryState(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          dataLength: totalDataCount
        });
      });
    }
  }, [data, happening]);

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

  function openAddCategoryModal(event) {
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_21___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_1__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_19__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 262,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuNDljYjQ0OTNjMjViNTljMzE3MGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7Q0FHQTs7Q0FHQTtBQUVBOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU3FCLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDZiwrQ0FBUSxDQUFDLFVBQUQsQ0FBMUM7QUFBQSxNQUFPZ0IsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBMENqQiwrQ0FBUSxDQUFDO0FBQy9Da0IsSUFBQUEsVUFBVSxFQUFFLEVBRG1DO0FBRS9DQyxJQUFBQSxJQUFJLEVBQUUsQ0FGeUM7QUFHL0NDLElBQUFBLEtBQUssRUFBRSxFQUh3QztBQUkvQ0MsSUFBQUEsVUFBVSxFQUFFO0FBSm1DLEdBQUQsQ0FBbEQ7QUFBQSxNQUFPQyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFMZ0MsQ0FZaEM7OztBQUNBLE1BQU1DLFFBQVEsR0FBRyxzQ0FBakI7QUFDQSxNQUFNQyxXQUFXLEdBQUc7QUFBRVAsSUFBQUEsVUFBVSxFQUFFSSxhQUFhLENBQUNKLFVBQTVCO0FBQXdDQyxJQUFBQSxJQUFJLEVBQUVHLGFBQWEsQ0FBQ0gsSUFBNUQ7QUFBa0VDLElBQUFBLEtBQUssRUFBRUUsYUFBYSxDQUFDRjtBQUF2RixHQUFwQjs7QUFDQSxrQkFBaUR0Qix1REFBUSxDQUFDLE1BQUQsRUFBUzBCLFFBQVQsRUFBbUJDLFdBQW5CLEVBQWdDVCxT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QyxhQUhyQixDQUlJO0FBSko7QUFLSSw0QkFBb0IsRUFBSXVCO0FBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5R0g7O0dBelV1QmxEO1VBZTZCaEI7OztLQWY3QmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGlmaWVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5RGF0YSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9mZXRjaENhdGVnb3J5RGF0YVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL3NlYXJjaENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGlzcGxheUhpZGVDYXRlZ29yeUZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGVsZXRlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9sb2NhdGlvbnMvQWRkTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuLy8gVGFibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgSXRlbVRhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IEl0ZW1UYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZURhdGFcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcblxyXG4vLyBPdGhlciBDb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IERpc3BsYXlGb3JtQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGlzcGxheUZvcm1CdXR0b25cIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBJdGVtRGV0YWlsc01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS1kZXRhaWxzL0l0ZW1EZXRhaWxzTW9kYWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBEZWxldGVQcm9tcHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EZWxldGVQcm9tcHRcIjtcclxuaW1wb3J0IENhdGVnb3J5RGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQ2F0ZWdvcnlEZXRhaWxzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5ICgpIHtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUhlYWRlcnMgPSBbXCJfaWRcIiwgXCJUaXRsZVwiLCBcIkFjdGlvblwiLCBcIl9fdlwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgICBjb25zdCBbaGFwcGVuaW5nLCBzZXRIYXBwZW5pbmddID0gdXNlU3RhdGUoXCJGZXRjaGluZ1wiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVN0YXRlLCBzZXRDYXRlZ29yeVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2hUZXh0OiBcIlwiLFxyXG4gICAgICAgIHNraXA6IDAsXHJcbiAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgIGRhdGFMZW5ndGg6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEN1c3RvbSBob29rIGNhbGwgdG8gZmV0Y2ggZGF0YVxyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiO1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IHNlYXJjaFRleHQ6IGNhdGVnb3J5U3RhdGUuc2VhcmNoVGV4dCwgc2tpcDogY2F0ZWdvcnlTdGF0ZS5za2lwLCBsaW1pdDogY2F0ZWdvcnlTdGF0ZS5saW1pdCB9O1xyXG4gICAgY29uc3QgeyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUF4aW9zKFwicG9zdFwiLCBlbmRwb2ludCwgcmVxdWVzdEJvZHksIGhhcHBlbmluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtzaG93RGVsZXRlUHJvbXB0LCBzZXRTaG93RGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpdGVtTmFtZUZvckRlbGV0ZVByb21wdCwgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVRhYmxlRGF0YSwgc2V0Q2F0ZWdvcnlUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIFRoaXMgY2F0ZWdvcnlJZCB3aWxsIGJlIHVzZWQgdG8gb3BlbiB0aGUgZGV0YWlscyBvZiB0aGUgY2F0ZWdvcnkuIFxyXG4gICAgY29uc3QgW2NhdGVnb3J5SWQsIHNldENhdGVnb3J5SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZEZvckRlbGV0aW5nLCBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZGlzcGxheV1cclxuICAgIGNvbnN0IFtjYXRlZ29yeUluZm8sIHNldENhdGVnb3J5SW5mb10gPSB1c2VTdGF0ZSh7IGNhdGVnb3J5SWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwiZmV0Y2hpbmdcIik7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWaWV3IERldGFpbHMgYW5kIERlbGV0ZSBidXR0b24ncyB2YWx1ZXMgd2lsbCBiZSB0aGUgaWQgb2YgdGhlIGNhdGVnb3J5IHdoaWNoIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBvcGVuIHRoZSBkZXRhaWxzIG1vZGFsIGFuZCBkZWxldGUgcHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBWaWV3IERldGFpbHMtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgRGVsZXRlLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlUYWJsZURhdGEobmV3RGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2RhdGEsIGhhcHBlbmluZ10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRGVsZXRlUHJvbXB0IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWRGb3JEZWxldGluZyhfaWQpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgY2F0ZWdvcmllcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBjYXRlZ29yaWVzW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChjYXRlZ29yaWVzW3hdLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQWRkQ2F0ZWdvcnlNb2RhbChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbkluZm8oe1xyXG4gICAgICAgICAgICBsb2NhdGlvbklkOiBsb2NhdGlvbnNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogbG9jYXRpb25zW2luZGV4XS50aXRsZSxcclxuICAgICAgICAgICAgYWRkcmVzczE6IGxvY2F0aW9uc1tpbmRleF0uYWRkcmVzczEsXHJcbiAgICAgICAgICAgIGFkZHJlc3MyOiBsb2NhdGlvbnNbaW5kZXhdLmFkZHJlc3MyLFxyXG4gICAgICAgICAgICBjaXR5OiBsb2NhdGlvbnNbaW5kZXhdLmNpdHksXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGxvY2F0aW9uc1tpbmRleF0uY291bnRyeSxcclxuICAgICAgICAgICAgcGhvbmU6IGxvY2F0aW9uc1tpbmRleF0ucGhvbmUsXHJcbiAgICAgICAgICAgIHppcENvZGU6IGxvY2F0aW9uc1tpbmRleF0uemlwQ29kZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRMb2NhdGlvbklkKFwiXCIpO1xyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJzZWFyY2hpbmdcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVMb2NhdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHVwZGF0aW5nIHB1cnBvc2VcclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGFkZHJlc3MxLCBhZGRyZXNzMiwgY2l0eSwgY291bnRyeSwgcGhvbmUsIHppcENvZGUgfSA9IGxvY2F0aW9uSW5mbztcclxuXHJcbiAgICAgICAgLy8gRm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgaWYgKCF0aXRsZSB8fCAhYWRkcmVzczEgfHwgIWFkZHJlc3MyIHx8ICFjaXR5IHx8ICFjb3VudHJ5IHx8ICFwaG9uZSB8fCAhemlwQ29kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKHRydWUpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIlNhdmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvYWRkLWxvY2F0aW9uXCI7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy91cGRhdGVcIjtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCBsb2NhdGlvbkluZm8pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb25JbmZvKHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgemlwQ29kZTogXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZlciBhZGRpbmcvdXBkYXRpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7IFxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KGZhbHNlKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJEZWxldGluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL2RlbGV0ZVwiLCB7IF9pZCB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZS1mZXRjaGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoTmV4dFByZXZJdGVtcyhldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTa2lwID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2tpcDogbmV3U2tpcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmdGVyIG5leHQgYnV0dG9uIGNsaWNrZWRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cclxuICAgICAgICAgICAgPENvbnRyb2xQYW5lbCAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeV9jb250ZW50XCIgc3R5bGUgPSB7e3dpZHRoOiBcIjgwJVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxBZGRDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBpbnB1dCBmaWVsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUluZm8gPSB7Y2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRydWUsIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBkaXNwbGF5IHRoZSBmb3JtIGFuZCB3aWxsIGhpZGUgaWYgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xpY2tpbmcgb24gY2xvc2UgYnV0dG9uIHdpbGwgaW52b2tlIHRoaXMgZnVuY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9sbG93aW5nIGF0dHJpYnV0ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIGZ1bmN0aW9uIGFzIGFyZ3VtZW50cyBmb3JcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgc3RhdGVzIG9uIGNsb3NlIGJ1dHRvbiBjbGljayBldmVudC4gaXNBZGRpbmdVcGRhdGluZyB3aWxsIGJlIHNldCB0byBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRMb2NhdGlvbkluZm8gd2lsbCB1cGRhdGUgdGhlIGxvY2F0aW9uSW5mbyBzdGF0ZSB3aXRoIGl0J3MgaW5pdGlhbCBlbXB0eSB2YWx1ZXMgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSB7c2VhcmNoQ2F0ZWdvcmllc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzcGxheUZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRkIENhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbCBjc3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7Y2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtjYXRlZ29yeVRhYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZUhlYWRlciBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVEYXRhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8TmV4dFByZXZJdGVtcyBzdGF0ZSA9IHtzdGF0ZX0gc2V0U3RhdGUgPSB7c2V0U3RhdGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxEZWxldGVQcm9tcHRcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGluZyA9IHtkZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7bG9jYXRpb25JZEZvckRlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0ID0ge2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlUHJvbXB0ID0ge3Nob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQgPSB7c2V0U2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVMb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxJdGVtRGV0YWlsc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZGlzcGxheWluZyBsb2NhdGlvbiBhZGQvdXBkYXRlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgdXBkYXRlIGZvcm1zIGFyZSBzYW1lIGJ1dCBuZWVkIHRvIHBvcHVsYXRlIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzIHdpdGggdGhlIGRhdGEgZm9yIHVwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJZCA9IHtzZXRDYXRlZ29yeUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiB0aHcgdXBkYXRlIGJ1dHRvbiB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBvcGVuIHRoZSBBZGRDYXRlZ29yeSBNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeU1vZGFsID0ge29wZW5BZGRDYXRlZ29yeU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5RGV0YWlscyIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwibmV3RGF0YSIsImZvckVhY2giLCJjYXRlZ29yeSIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJvcGVuRGVsZXRlUHJvbXB0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJsZW5ndGgiLCJvcGVuQWRkQ2F0ZWdvcnlNb2RhbCIsIk51bWJlciIsInNldExvY2F0aW9uSW5mbyIsImxvY2F0aW9uSWQiLCJsb2NhdGlvbnMiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsImNvdW50cnkiLCJwaG9uZSIsInppcENvZGUiLCJzZXRMb2NhdGlvbklkIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
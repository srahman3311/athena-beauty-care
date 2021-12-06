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
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styles/category/Category.module.css */ "./styles/category/Category.module.css");
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24__);
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
/* harmony import */ var _components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/admins/category/CategoryDetails */ "./components/admins/category/CategoryDetails.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__);
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      actionMessage = _useState3[0],
      setActionMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showDeletePrompt = _useState4[0],
      setShowDeletePrompt = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      itemNameForDeletePrompt = _useState5[0],
      setItemNameForDeletePrompt = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      deleting = _useState6[0],
      setDeleting = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categories = _useState7[0],
      setCategories = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categoryTableData = _useState8[0],
      setCategoryTableData = _useState8[1]; // This categoryId will be used to open the details of the category. 


  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      categoryId = _useState9[0],
      setCategoryId = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      categoryIdForDeleting = _useState10[0],
      setCategoryIdForDeleting = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      isAddingUpdating = _useState11[0],
      setIsAddingUpdating = _useState11[1]; // const [display]


  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    categoryId: "",
    title: ""
  }),
      categoryInfo = _useState12[0],
      setCategoryInfo = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
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
    // category details modal's update button's value has been set with the index of the category. Use this value
    // to update the categoryInfo's properties
    var index = Number(event.target.value);
    setCategoryInfo({
      categoryId: categories[index]._id.toString(),
      title: categories[index].title
    });
    setCategoryId("");
    setIsAddingUpdating(true);
  }

  function addUpdateCategory(_x) {
    return _addUpdateCategory.apply(this, arguments);
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


  function _addUpdateCategory() {
    _addUpdateCategory = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var _id, _endpoint, response;

      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); // For updating purpose

              _id = event.target.value;
              return _context.abrupt("return", console.log(_id, categoryInfo));

            case 5:
              setIsAddingUpdating(false);
              _context.prev = 6;
              setActionMessage("Saving");
              _endpoint = "http://localhost:7070/api/categories/add-category";
              if (_id) _endpoint = "http://localhost:7070/api/categories/update";
              _context.next = 12;
              return axios.post(_endpoint, categoryInfo);

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
              setCategoryInfo({
                locationId: "",
                title: ""
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
    return _addUpdateCategory.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
    className: (_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_14__.default // For input field values
      , {
        categoryInfo: categoryInfo // if true, isAddingUpdating will display the form and will hide if false
        ,
        isAddingUpdating: isAddingUpdating,
        addUpdateCategory: addUpdateCategory // Following attributes will be passed to the displayHideCategoryForm function as arguments for
        // updating the states on close button click event. isAddingUpdating will be set to false,
        // setLocationInfo will update the locationInfo state with it's initial empty values   
        ,
        setCategoryInfo: setCategoryInfo,
        setIsAddingUpdating: setIsAddingUpdating
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_12__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_21__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_22__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 9
  }, this);
}

_s(Category, "nAC+k9ZdaOvEydoNj2lnULAgpIE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuMGE0MzU3NzZlNGJhZGJlY2VlMjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBR0E7O0NBR0E7QUFFQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU3NCLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDaEIsK0NBQVEsQ0FBQyxVQUFELENBQTFDO0FBQUEsTUFBT2lCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTBDbEIsK0NBQVEsQ0FBQztBQUMvQ21CLElBQUFBLFVBQVUsRUFBRSxFQURtQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLENBRnlDO0FBRy9DQyxJQUFBQSxLQUFLLEVBQUUsRUFId0M7QUFJL0NDLElBQUFBLFVBQVUsRUFBRTtBQUptQyxHQUFELENBQWxEO0FBQUEsTUFBT0MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEIsaUJBTGdDLENBWWhDOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsc0NBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQUVQLElBQUFBLFVBQVUsRUFBRUksYUFBYSxDQUFDSixVQUE1QjtBQUF3Q0MsSUFBQUEsSUFBSSxFQUFFRyxhQUFhLENBQUNILElBQTVEO0FBQWtFQyxJQUFBQSxLQUFLLEVBQUVFLGFBQWEsQ0FBQ0Y7QUFBdkYsR0FBcEI7O0FBQ0Esa0JBQWlEdkIsdURBQVEsQ0FBQyxNQUFELEVBQVMyQixRQUFULEVBQW1CQyxX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Li9wYWdlcy9hZG1pbnMvY2F0ZWdvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2RpZmllciBmdW5jdGlvbnNcclxuaW1wb3J0IHsgY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIH0gZnJvbSBcIi4uLy4uL2xpYnMvZGF0YVwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hDYXRlZ29yeURhdGEgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZmV0Y2hDYXRlZ29yeURhdGFcIjtcclxuaW1wb3J0IHsgc2VhcmNoQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9zZWFyY2hDYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtXCI7XHJcbmltcG9ydCB7IGRlbGV0ZUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2RlbGV0ZUNhdGVnb3J5XCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG5cclxuXHJcbi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2F0ZWdvcnkvQ2F0ZWdvcnkubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuLy8gVGFibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgSXRlbVRhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IEl0ZW1UYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZURhdGFcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcblxyXG4vLyBPdGhlciBDb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IERpc3BsYXlGb3JtQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGlzcGxheUZvcm1CdXR0b25cIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBJdGVtRGV0YWlsc01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS1kZXRhaWxzL0l0ZW1EZXRhaWxzTW9kYWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBEZWxldGVQcm9tcHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EZWxldGVQcm9tcHRcIjtcclxuaW1wb3J0IENhdGVnb3J5RGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQ2F0ZWdvcnlEZXRhaWxzXCI7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTWVzc2FnZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSAoKSB7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJzID0gW1wiX2lkXCIsIFwiVGl0bGVcIiwgXCJBY3Rpb25cIiwgXCJfX3ZcIiwgXCJEZWxldGVcIl07XHJcblxyXG4gICAgY29uc3QgW2hhcHBlbmluZywgc2V0SGFwcGVuaW5nXSA9IHVzZVN0YXRlKFwiRmV0Y2hpbmdcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlTdGF0ZSwgc2V0Q2F0ZWdvcnlTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc2VhcmNoVGV4dDogXCJcIixcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBkYXRhTGVuZ3RoOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDdXN0b20gaG9vayBjYWxsIHRvIGZldGNoIGRhdGFcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyBzZWFyY2hUZXh0OiBjYXRlZ29yeVN0YXRlLnNlYXJjaFRleHQsIHNraXA6IGNhdGVnb3J5U3RhdGUuc2tpcCwgbGltaXQ6IGNhdGVnb3J5U3RhdGUubGltaXQgfTtcclxuICAgIGNvbnN0IHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VBeGlvcyhcInBvc3RcIiwgZW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoYXBwZW5pbmcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbYWN0aW9uTWVzc2FnZSwgc2V0QWN0aW9uTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzaG93RGVsZXRlUHJvbXB0LCBzZXRTaG93RGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpdGVtTmFtZUZvckRlbGV0ZVByb21wdCwgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVRhYmxlRGF0YSwgc2V0Q2F0ZWdvcnlUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIFRoaXMgY2F0ZWdvcnlJZCB3aWxsIGJlIHVzZWQgdG8gb3BlbiB0aGUgZGV0YWlscyBvZiB0aGUgY2F0ZWdvcnkuIFxyXG4gICAgY29uc3QgW2NhdGVnb3J5SWQsIHNldENhdGVnb3J5SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZEZvckRlbGV0aW5nLCBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZGlzcGxheV1cclxuICAgIGNvbnN0IFtjYXRlZ29yeUluZm8sIHNldENhdGVnb3J5SW5mb10gPSB1c2VTdGF0ZSh7IGNhdGVnb3J5SWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwiZmV0Y2hpbmdcIik7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWaWV3IERldGFpbHMgYW5kIERlbGV0ZSBidXR0b24ncyB2YWx1ZXMgd2lsbCBiZSB0aGUgaWQgb2YgdGhlIGNhdGVnb3J5IHdoaWNoIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBvcGVuIHRoZSBkZXRhaWxzIG1vZGFsIGFuZCBkZWxldGUgcHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBWaWV3IERldGFpbHMtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgRGVsZXRlLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlUYWJsZURhdGEobmV3RGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2RhdGEsIGhhcHBlbmluZ10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRGVsZXRlUHJvbXB0IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWRGb3JEZWxldGluZyhfaWQpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgY2F0ZWdvcmllcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBjYXRlZ29yaWVzW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChjYXRlZ29yaWVzW3hdLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQWRkQ2F0ZWdvcnlNb2RhbChldmVudCkge1xyXG5cclxuICAgICAgICAvLyBjYXRlZ29yeSBkZXRhaWxzIG1vZGFsJ3MgdXBkYXRlIGJ1dHRvbidzIHZhbHVlIGhhcyBiZWVuIHNldCB3aXRoIHRoZSBpbmRleCBvZiB0aGUgY2F0ZWdvcnkuIFVzZSB0aGlzIHZhbHVlXHJcbiAgICAgICAgLy8gdG8gdXBkYXRlIHRoZSBjYXRlZ29yeUluZm8ncyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogY2F0ZWdvcmllc1tpbmRleF0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHRpdGxlOiBjYXRlZ29yaWVzW2luZGV4XS50aXRsZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkKFwiXCIpO1xyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFVwZGF0ZUNhdGVnb3J5IChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBGb3IgdXBkYXRpbmcgcHVycG9zZVxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coX2lkLCBjYXRlZ29yeUluZm8pO1xyXG5cclxuICAgICAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgICAgICBpZiAoIWNhdGVnb3J5SW5mby50aXRsZSkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvYWRkLWNhdGVnb3J5XCI7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvdXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgY2F0ZWdvcnlJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyh7IGxvY2F0aW9uSWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZy91cGRhdGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwic2VhcmNoaW5nXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlOyBcclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdChmYWxzZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiRGVsZXRpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy9kZWxldGVcIiwgeyBfaWQgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmUtZmV0Y2hpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaE5leHRQcmV2SXRlbXMoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U2tpcCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHNraXA6IG5ld1NraXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZnRlciBuZXh0IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG5cclxuICAgIH1cclxuICAgICovXHJcblxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxDb250cm9sUGFuZWwgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlfY29udGVudFwiIHN0eWxlID0ge3t3aWR0aDogXCI4MCVcIn19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxBZGRDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBpbnB1dCBmaWVsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUluZm8gPSB7Y2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRydWUsIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBkaXNwbGF5IHRoZSBmb3JtIGFuZCB3aWxsIGhpZGUgaWYgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVXBkYXRlQ2F0ZWdvcnkgPSB7YWRkVXBkYXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9sbG93aW5nIGF0dHJpYnV0ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIGZ1bmN0aW9uIGFzIGFyZ3VtZW50cyBmb3JcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgc3RhdGVzIG9uIGNsb3NlIGJ1dHRvbiBjbGljayBldmVudC4gaXNBZGRpbmdVcGRhdGluZyB3aWxsIGJlIHNldCB0byBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRMb2NhdGlvbkluZm8gd2lsbCB1cGRhdGUgdGhlIGxvY2F0aW9uSW5mbyBzdGF0ZSB3aXRoIGl0J3MgaW5pdGlhbCBlbXB0eSB2YWx1ZXMgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IHtzZWFyY2hDYXRlZ29yaWVzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGQgQ2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFsIGNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2NhdGVnb3J5VGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlSGVhZGVyIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZURhdGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxOZXh0UHJldkl0ZW1zIHN0YXRlID0ge3N0YXRlfSBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtsb2NhdGlvbklkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFscy5jc3MgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEl0ZW1EZXRhaWxzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBkaXNwbGF5aW5nIGxvY2F0aW9uIGFkZC91cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFuZCB1cGRhdGUgZm9ybXMgYXJlIHNhbWUgYnV0IG5lZWQgdG8gcG9wdWxhdGUgdGhlIGZvcm0ncyBpbnB1dCBmaWVsZHMgd2l0aCB0aGUgZGF0YSBmb3IgdXBkYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IHtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeUlkID0ge3NldENhdGVnb3J5SWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsaWNraW5nIG9uIHRodyB1cGRhdGUgYnV0dG9uIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIEFkZENhdGVnb3J5IE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkFkZENhdGVnb3J5TW9kYWwgPSB7b3BlbkFkZENhdGVnb3J5TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0ge2FjdGlvbk1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZSA9IHtzZXRBY3Rpb25NZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIiwiZmV0Y2hDYXRlZ29yeURhdGEiLCJzZWFyY2hDYXRlZ29yaWVzIiwiZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0iLCJkZWxldGVDYXRlZ29yeSIsInVzZUF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJdGVtVGFibGVIZWFkZXIiLCJJdGVtVGFibGVEYXRhIiwiRGF0YVRhYmxlIiwiQ29udHJvbFBhbmVsIiwiQWRkQ2F0ZWdvcnkiLCJEaXNwbGF5Rm9ybUJ1dHRvbiIsIk5leHRQcmV2SXRlbXMiLCJJdGVtRGV0YWlsc01vZGFsIiwiU2VhcmNoSW5wdXQiLCJMb2FkaW5nIiwiRGVsZXRlUHJvbXB0IiwiQ2F0ZWdvcnlEZXRhaWxzIiwiTWVzc2FnZSIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJhY3Rpb25NZXNzYWdlIiwic2V0QWN0aW9uTWVzc2FnZSIsInNob3dEZWxldGVQcm9tcHQiLCJzZXRTaG93RGVsZXRlUHJvbXB0IiwiaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNhdGVnb3J5VGFibGVEYXRhIiwic2V0Q2F0ZWdvcnlUYWJsZURhdGEiLCJjYXRlZ29yeUlkIiwic2V0Q2F0ZWdvcnlJZCIsImNhdGVnb3J5SWRGb3JEZWxldGluZyIsInNldENhdGVnb3J5SWRGb3JEZWxldGluZyIsImlzQWRkaW5nVXBkYXRpbmciLCJzZXRJc0FkZGluZ1VwZGF0aW5nIiwidGl0bGUiLCJjYXRlZ29yeUluZm8iLCJzZXRDYXRlZ29yeUluZm8iLCJuZXdEYXRhIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwiaW5kZXgiLCJwdXNoIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImN1cnJlbnRWYWx1ZSIsIm9wZW5EZWxldGVQcm9tcHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwieCIsImxlbmd0aCIsIm9wZW5BZGRDYXRlZ29yeU1vZGFsIiwiTnVtYmVyIiwiYWRkVXBkYXRlQ2F0ZWdvcnkiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImxvY2F0aW9uSWQiLCJkaXNwbGF5Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9
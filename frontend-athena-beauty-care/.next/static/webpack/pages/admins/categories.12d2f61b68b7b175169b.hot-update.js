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
              console.log(_id, categoryInfo); // Form validation

              if (categoryInfo.title) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", setValidationError(true));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuMTJkMmY2MWI2OGI3YjE3NTE2OWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBR0E7O0NBR0E7QUFFQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU3NCLFFBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FBeEI7O0FBRUEsa0JBQWtDaEIsK0NBQVEsQ0FBQyxVQUFELENBQTFDO0FBQUEsTUFBT2lCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTBDbEIsK0NBQVEsQ0FBQztBQUMvQ21CLElBQUFBLFVBQVUsRUFBRSxFQURtQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLENBRnlDO0FBRy9DQyxJQUFBQSxLQUFLLEVBQUUsRUFId0M7QUFJL0NDLElBQUFBLFVBQVUsRUFBRTtBQUptQyxHQUFELENBQWxEO0FBQUEsTUFBT0MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEIsaUJBTGdDLENBWWhDOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsc0NBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQUVQLElBQUFBLFVBQVUsRUFBRUksYUFBYSxDQUFDSixVQUE1QjtBQUF3Q0MsSUFBQUEsSUFBSSxFQUFFRyxhQUFhLENBQUNILElBQTVEO0FBQWtFQyxJQUFBQSxLQUFLLEVBQUVFLGFBQWEsQ0FBQ0Y7QUFBdkYsR0FBcEI7O0FBQ0Esa0JBQWlEdkIsdURBQVEsQ0FBQyxNQUFELEVBQVMyQixRQUFULEVBQW1CQyxX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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2R0g7O0dBalV1QmpCO1VBZTZCakI7OztLQWY3QmlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGlmaWVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5RGF0YSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9mZXRjaENhdGVnb3J5RGF0YVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL3NlYXJjaENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGlzcGxheUhpZGVDYXRlZ29yeUZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGVsZXRlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jYXRlZ29yeS9DYXRlZ29yeS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG4vLyBUYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBJdGVtVGFibGVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgSXRlbVRhYmxlRGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlRGF0YVwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGVcIjtcclxuXHJcbi8vIE90aGVyIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9BZGRDYXRlZ29yeVwiO1xyXG5pbXBvcnQgRGlzcGxheUZvcm1CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EaXNwbGF5Rm9ybUJ1dHRvblwiO1xyXG5pbXBvcnQgTmV4dFByZXZJdGVtcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL05leHRQcmV2SXRlbXNcIjtcclxuaW1wb3J0IEl0ZW1EZXRhaWxzTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLWRldGFpbHMvSXRlbURldGFpbHNNb2RhbFwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IERlbGV0ZVByb21wdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0RlbGV0ZVByb21wdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9DYXRlZ29yeURldGFpbHNcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9NZXNzYWdlXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5ICgpIHtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUhlYWRlcnMgPSBbXCJfaWRcIiwgXCJUaXRsZVwiLCBcIkFjdGlvblwiLCBcIl9fdlwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgICBjb25zdCBbaGFwcGVuaW5nLCBzZXRIYXBwZW5pbmddID0gdXNlU3RhdGUoXCJGZXRjaGluZ1wiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVN0YXRlLCBzZXRDYXRlZ29yeVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2hUZXh0OiBcIlwiLFxyXG4gICAgICAgIHNraXA6IDAsXHJcbiAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgIGRhdGFMZW5ndGg6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEN1c3RvbSBob29rIGNhbGwgdG8gZmV0Y2ggZGF0YVxyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiO1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IHNlYXJjaFRleHQ6IGNhdGVnb3J5U3RhdGUuc2VhcmNoVGV4dCwgc2tpcDogY2F0ZWdvcnlTdGF0ZS5za2lwLCBsaW1pdDogY2F0ZWdvcnlTdGF0ZS5saW1pdCB9O1xyXG4gICAgY29uc3QgeyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUF4aW9zKFwicG9zdFwiLCBlbmRwb2ludCwgcmVxdWVzdEJvZHksIGhhcHBlbmluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFthY3Rpb25NZXNzYWdlLCBzZXRBY3Rpb25NZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQcm9tcHQsIHNldFNob3dEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0LCBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZWxldGluZywgc2V0RGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5VGFibGVEYXRhLCBzZXRDYXRlZ29yeVRhYmxlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gVGhpcyBjYXRlZ29yeUlkIHdpbGwgYmUgdXNlZCB0byBvcGVuIHRoZSBkZXRhaWxzIG9mIHRoZSBjYXRlZ29yeS4gXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZCwgc2V0Q2F0ZWdvcnlJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkRm9yRGVsZXRpbmcsIHNldENhdGVnb3J5SWRGb3JEZWxldGluZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0FkZGluZ1VwZGF0aW5nLCBzZXRJc0FkZGluZ1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IFtkaXNwbGF5XVxyXG4gICAgY29uc3QgW2NhdGVnb3J5SW5mbywgc2V0Q2F0ZWdvcnlJbmZvXSA9IHVzZVN0YXRlKHsgY2F0ZWdvcnlJZDogXCJcIiwgdGl0bGU6IFwiXCIgfSk7XHJcblxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJmZXRjaGluZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZpZXcgRGV0YWlscyBhbmQgRGVsZXRlIGJ1dHRvbidzIHZhbHVlcyB3aWxsIGJlIHRoZSBpZCBvZiB0aGUgY2F0ZWdvcnkgd2hpY2ggd2lsbCBiZSB1c2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG9wZW4gdGhlIGRldGFpbHMgbW9kYWwgYW5kIGRlbGV0ZSBwcm9tcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFZpZXcgRGV0YWlscy0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBEZWxldGUtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeVRhYmxlRGF0YShuZXdEYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeVN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTGVuZ3RoOiB0b3RhbERhdGFDb3VudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbZGF0YSwgaGFwcGVuaW5nXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5EZWxldGVQcm9tcHQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nKF9pZCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBjYXRlZ29yaWVzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQgPT09IGNhdGVnb3JpZXNbeF0uX2lkLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0KGNhdGVnb3JpZXNbeF0udGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5BZGRDYXRlZ29yeU1vZGFsKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIC8vIGNhdGVnb3J5IGRldGFpbHMgbW9kYWwncyB1cGRhdGUgYnV0dG9uJ3MgdmFsdWUgaGFzIGJlZW4gc2V0IHdpdGggdGhlIGluZGV4IG9mIHRoZSBjYXRlZ29yeS4gVXNlIHRoaXMgdmFsdWVcclxuICAgICAgICAvLyB0byB1cGRhdGUgdGhlIGNhdGVnb3J5SW5mbydzIHByb3BlcnRpZXNcclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUluZm8oe1xyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yaWVzW2luZGV4XS5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgdGl0bGU6IGNhdGVnb3JpZXNbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWQoXCJcIik7XHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkVXBkYXRlQ2F0ZWdvcnkgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIEZvciB1cGRhdGluZyBwdXJwb3NlXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF9pZCwgY2F0ZWdvcnlJbmZvKTtcclxuXHJcbiAgICAgICAgLy8gRm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeUluZm8udGl0bGUpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIlNhdmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzL2FkZC1jYXRlZ29yeVwiO1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkKSBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzL3VwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIGNhdGVnb3J5SW5mbyk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeUluZm8oeyBsb2NhdGlvbklkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZlciBhZGRpbmcvdXBkYXRpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInNlYXJjaGluZ1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTsgXHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQoZmFsc2UpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkRlbGV0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvZGVsZXRlXCIsIHsgX2lkIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlLWZldGNoaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hOZXh0UHJldkl0ZW1zKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NraXAgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaW5wdXQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmZvID0ge2NhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0cnVlLCBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgZGlzcGxheSB0aGUgZm9ybSBhbmQgd2lsbCBoaWRlIGlmIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZFVwZGF0ZUNhdGVnb3J5ID0ge2FkZFVwZGF0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvbGxvd2luZyBhdHRyaWJ1dGVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSBmdW5jdGlvbiBhcyBhcmd1bWVudHMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHN0YXRlcyBvbiBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnQuIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9jYXRpb25JbmZvIHdpbGwgdXBkYXRlIHRoZSBsb2NhdGlvbkluZm8gc3RhdGUgd2l0aCBpdCdzIGluaXRpYWwgZW1wdHkgdmFsdWVzICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSB7c2VhcmNoQ2F0ZWdvcmllc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzcGxheUZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRkIENhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbCBjc3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7Y2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtjYXRlZ29yeVRhYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZUhlYWRlciBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVEYXRhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8TmV4dFByZXZJdGVtcyBzdGF0ZSA9IHtzdGF0ZX0gc2V0U3RhdGUgPSB7c2V0U3RhdGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxEZWxldGVQcm9tcHRcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGluZyA9IHtkZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7bG9jYXRpb25JZEZvckRlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0ID0ge2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlUHJvbXB0ID0ge3Nob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQgPSB7c2V0U2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVMb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxJdGVtRGV0YWlsc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZGlzcGxheWluZyBsb2NhdGlvbiBhZGQvdXBkYXRlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgdXBkYXRlIGZvcm1zIGFyZSBzYW1lIGJ1dCBuZWVkIHRvIHBvcHVsYXRlIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzIHdpdGggdGhlIGRhdGEgZm9yIHVwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJZCA9IHtzZXRDYXRlZ29yeUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiB0aHcgdXBkYXRlIGJ1dHRvbiB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBvcGVuIHRoZSBBZGRDYXRlZ29yeSBNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeU1vZGFsID0ge29wZW5BZGRDYXRlZ29yeU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHthY3Rpb25NZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UgPSB7c2V0QWN0aW9uTWVzc2FnZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5RGV0YWlscyIsIk1lc3NhZ2UiLCJDYXRlZ29yeSIsImNhdGVnb3J5SGVhZGVycyIsImhhcHBlbmluZyIsInNldEhhcHBlbmluZyIsInNlYXJjaFRleHQiLCJza2lwIiwibGltaXQiLCJkYXRhTGVuZ3RoIiwiY2F0ZWdvcnlTdGF0ZSIsInNldENhdGVnb3J5U3RhdGUiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwiZGF0YSIsInRvdGFsRGF0YUNvdW50IiwiZXJyb3IiLCJsb2FkaW5nIiwiYWN0aW9uTWVzc2FnZSIsInNldEFjdGlvbk1lc3NhZ2UiLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwibmV3RGF0YSIsImZvckVhY2giLCJjYXRlZ29yeSIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJvcGVuRGVsZXRlUHJvbXB0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJsZW5ndGgiLCJvcGVuQWRkQ2F0ZWdvcnlNb2RhbCIsIk51bWJlciIsImFkZFVwZGF0ZUNhdGVnb3J5IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0VmFsaWRhdGlvbkVycm9yIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhdGlvbklkIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
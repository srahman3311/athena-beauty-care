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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../styles/category/Category.module.css */ "./styles/category/Category.module.css");
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/admins/category/AddCategory */ "./components/admins/category/AddCategory.js");
/* harmony import */ var _components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/DisplayFormButton */ "./components/reusable-components/DisplayFormButton.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/item-details/ItemDetailsModal */ "./components/reusable-components/item-details/ItemDetailsModal.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var _components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/admins/category/CategoryDetails */ "./components/admins/category/CategoryDetails.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__);
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null),
      actionMessage = _useState3[0],
      setActionMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
      showDeletePrompt = _useState4[0],
      setShowDeletePrompt = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(""),
      itemNameForDeletePrompt = _useState5[0],
      setItemNameForDeletePrompt = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
      deleting = _useState6[0],
      setDeleting = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      categories = _useState7[0],
      setCategories = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      categoryTableData = _useState8[0],
      setCategoryTableData = _useState8[1]; // This categoryId will be used to open the details of the category. 


  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(""),
      categoryId = _useState9[0],
      setCategoryId = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(""),
      categoryIdForDeleting = _useState10[0],
      setCategoryIdForDeleting = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
      isAddingUpdating = _useState11[0],
      setIsAddingUpdating = _useState11[1]; // const [display]


  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
    categoryId: "",
    title: ""
  }),
      categoryInfo = _useState12[0],
      setCategoryInfo = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
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

              _id = event.target.value; //return console.log(_id, categoryInfo);
              // Form validation

              if (categoryInfo.title) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", setValidationError(true));

            case 4:
              setIsAddingUpdating(false);
              _context.prev = 5;
              setActionMessage("Saving");
              _endpoint = "http://localhost:7070/api/categories/add-category";
              if (_id) _endpoint = "http://localhost:7070/api/categories/update";
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_9___default().post(_endpoint, categoryInfo);

            case 11:
              response = _context.sent;
              setActionMessage(response.data);
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](5);
              setActionMessage(_context.t0.response.data);

            case 18:
              _context.prev = 18;
              setCategoryInfo({
                locationId: "",
                title: ""
              });
              setHappening("refetching afer adding/updating");
              return _context.finish(18);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 15, 18, 22]]);
    }));
    return _addUpdateCategory.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("div", {
    className: (_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_25___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_15__.default // For input field values
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
        lineNumber: 245,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_19__.default, {
          value: categoryState.searchText,
          setState: setCategoryState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("button", {
          onClick: function onClick() {
            return setIsAddingUpdating(true);
          },
          children: "Add Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_20__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_22__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_23__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuM2EwMjJjNDEzNDllNmNhYzQwMzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztDQUdBOztDQUdBO0FBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVN1QixRQUFULEdBQXFCO0FBQUE7O0FBRWhDLE1BQU1DLGVBQWUsR0FBRyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLEtBQTNCLEVBQWtDLFFBQWxDLENBQXhCOztBQUVBLGtCQUFrQ2hCLGdEQUFRLENBQUMsVUFBRCxDQUExQztBQUFBLE1BQU9pQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQ2xCLGdEQUFRLENBQUM7QUFDL0NtQixJQUFBQSxVQUFVLEVBQUUsRUFEbUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxDQUZ5QztBQUcvQ0MsSUFBQUEsS0FBSyxFQUFFLEVBSHdDO0FBSS9DQyxJQUFBQSxVQUFVLEVBQUU7QUFKbUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9DLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCLGlCQUxnQyxDQVloQzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUFFUCxJQUFBQSxVQUFVLEVBQUVJLGFBQWEsQ0FBQ0osVUFBNUI7QUFBd0NDLElBQUFBLElBQUksRUFBRUcsYUFBYSxDQUFDSCxJQUE1RDtBQUFrRUMsSUFBQUEsS0FBSyxFQUFFRSxhQUFhLENBQUNGO0FBQXZGLEdBQXBCOztBQUNBLGtCQUFpRHhCLHVEQUFRLENBQUMsTUFBRCxFQUFTNEIsUUFBVCxF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Sko7QUFLSSw0QkFBb0IsRUFBSXVCO0FBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFrR0ksK0RBQUMsNkVBQUQ7QUFDSSxhQUFPLEVBQUlwQyxhQURmO0FBRUksc0JBQWdCLEVBQUlDO0FBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwR0g7O0dBalR1QmpCO1VBZTZCbEI7OztLQWY3QmtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGlmaWVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5RGF0YSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9mZXRjaENhdGVnb3J5RGF0YVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL3NlYXJjaENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGlzcGxheUhpZGVDYXRlZ29yeUZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGVsZXRlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NhdGVnb3J5L0NhdGVnb3J5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbi8vIFRhYmxlIENvbXBvbmVudHNcclxuaW1wb3J0IEl0ZW1UYWJsZUhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlSGVhZGVyXCI7XHJcbmltcG9ydCBJdGVtVGFibGVEYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVEYXRhXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL0RhdGFUYWJsZVwiO1xyXG5cclxuLy8gT3RoZXIgQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbFwiO1xyXG5pbXBvcnQgQWRkQ2F0ZWdvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0FkZENhdGVnb3J5XCI7XHJcbmltcG9ydCBEaXNwbGF5Rm9ybUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0Rpc3BsYXlGb3JtQnV0dG9uXCI7XHJcbmltcG9ydCBOZXh0UHJldkl0ZW1zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtc1wiO1xyXG5pbXBvcnQgSXRlbURldGFpbHNNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tZGV0YWlscy9JdGVtRGV0YWlsc01vZGFsXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRGVsZXRlUHJvbXB0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGVsZXRlUHJvbXB0XCI7XHJcbmltcG9ydCBDYXRlZ29yeURldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0NhdGVnb3J5RGV0YWlsc1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbk1lc3NhZ2UsIHNldEFjdGlvbk1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlUYWJsZURhdGEsIHNldENhdGVnb3J5VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBUaGlzIGNhdGVnb3J5SWQgd2lsbCBiZSB1c2VkIHRvIG9wZW4gdGhlIGRldGFpbHMgb2YgdGhlIGNhdGVnb3J5LiBcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWRGb3JEZWxldGluZywgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJbmZvLCBzZXRDYXRlZ29yeUluZm9dID0gdXNlU3RhdGUoeyBjYXRlZ29yeUlkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmlldyBEZXRhaWxzIGFuZCBEZWxldGUgYnV0dG9uJ3MgdmFsdWVzIHdpbGwgYmUgdGhlIGlkIG9mIHRoZSBjYXRlZ29yeSB3aGljaCB3aWxsIGJlIHVzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gb3BlbiB0aGUgZGV0YWlscyBtb2RhbCBhbmQgZGVsZXRlIHByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYERlbGV0ZS0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtkYXRhLCBoYXBwZW5pbmddKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRlbGV0ZVByb21wdCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmcoX2lkKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGNhdGVnb3JpZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCA9PT0gY2F0ZWdvcmllc1t4XS5faWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQoY2F0ZWdvcmllc1t4XS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkFkZENhdGVnb3J5TW9kYWwoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8gY2F0ZWdvcnkgZGV0YWlscyBtb2RhbCdzIHVwZGF0ZSBidXR0b24ncyB2YWx1ZSBoYXMgYmVlbiBzZXQgd2l0aCB0aGUgaW5kZXggb2YgdGhlIGNhdGVnb3J5LiBVc2UgdGhpcyB2YWx1ZVxyXG4gICAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgY2F0ZWdvcnlJbmZvJ3MgcHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SW5mbyh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3JpZXNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogY2F0ZWdvcmllc1tpbmRleF0udGl0bGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJZChcIlwiKTtcclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVDYXRlZ29yeSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHVwZGF0aW5nIHB1cnBvc2VcclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy9yZXR1cm4gY29uc29sZS5sb2coX2lkLCBjYXRlZ29yeUluZm8pO1xyXG5cclxuICAgICAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgICAgICBpZiAoIWNhdGVnb3J5SW5mby50aXRsZSkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvYWRkLWNhdGVnb3J5XCI7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvdXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgY2F0ZWdvcnlJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyh7IGxvY2F0aW9uSWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZy91cGRhdGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuICAgIFxyXG4gICAgLypcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTsgXHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQoZmFsc2UpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkRlbGV0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvZGVsZXRlXCIsIHsgX2lkIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlLWZldGNoaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hOZXh0UHJldkl0ZW1zKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NraXAgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaW5wdXQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmZvID0ge2NhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0cnVlLCBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgZGlzcGxheSB0aGUgZm9ybSBhbmQgd2lsbCBoaWRlIGlmIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZFVwZGF0ZUNhdGVnb3J5ID0ge2FkZFVwZGF0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvbGxvd2luZyBhdHRyaWJ1dGVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSBmdW5jdGlvbiBhcyBhcmd1bWVudHMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHN0YXRlcyBvbiBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnQuIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9jYXRpb25JbmZvIHdpbGwgdXBkYXRlIHRoZSBsb2NhdGlvbkluZm8gc3RhdGUgd2l0aCBpdCdzIGluaXRpYWwgZW1wdHkgdmFsdWVzICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NhdGVnb3J5U3RhdGUuc2VhcmNoVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0Q2F0ZWdvcnlTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGFwcGVuaW5nID0ge3NldEhhcHBlbmluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gc2V0SXNBZGRpbmdVcGRhdGluZyh0cnVlKX0+QWRkIENhdGVnb3J5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWwgY3NzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzID0ge2NhdGVnb3J5RGF0YVRhYmxlSGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7Y2F0ZWdvcnlUYWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5EZWxldGVQcm9tcHQgPSB7b3BlbkRlbGV0ZVByb21wdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVIZWFkZXIgaXRlbUhlYWRlcnMgPSB7Y2F0ZWdvcnlIZWFkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlRGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0ge3N0YXRlLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPE5leHRQcmV2SXRlbXMgc3RhdGUgPSB7c3RhdGV9IHNldFN0YXRlID0ge3NldFN0YXRlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8RGVsZXRlUHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRpbmcgPSB7ZGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2xvY2F0aW9uSWRGb3JEZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZUZvckRlbGV0ZVByb21wdCA9IHtpdGVtTmFtZUZvckRlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZVByb21wdCA9IHtzaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0ID0ge3NldFNob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzcyAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8SXRlbURldGFpbHNNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0ge3N0YXRlLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUhlYWRlcnMgPSB7Y2F0ZWdvcnlIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGRpc3BsYXlpbmcgbG9jYXRpb24gYWRkL3VwZGF0ZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYW5kIHVwZGF0ZSBmb3JtcyBhcmUgc2FtZSBidXQgbmVlZCB0byBwb3B1bGF0ZSB0aGUgZm9ybSdzIGlucHV0IGZpZWxkcyB3aXRoIHRoZSBkYXRhIGZvciB1cGRhdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeURldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzID0ge2NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZCA9IHtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SWQgPSB7c2V0Q2F0ZWdvcnlJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xpY2tpbmcgb24gdGh3IHVwZGF0ZSBidXR0b24gd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gb3BlbiB0aGUgQWRkQ2F0ZWdvcnkgTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQWRkQ2F0ZWdvcnlNb2RhbCA9IHtvcGVuQWRkQ2F0ZWdvcnlNb2RhbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB7YWN0aW9uTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMiLCJmZXRjaENhdGVnb3J5RGF0YSIsInNlYXJjaENhdGVnb3JpZXMiLCJkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSIsImRlbGV0ZUNhdGVnb3J5IiwidXNlQXhpb3MiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5RGV0YWlscyIsIk1lc3NhZ2UiLCJDYXRlZ29yeSIsImNhdGVnb3J5SGVhZGVycyIsImhhcHBlbmluZyIsInNldEhhcHBlbmluZyIsInNlYXJjaFRleHQiLCJza2lwIiwibGltaXQiLCJkYXRhTGVuZ3RoIiwiY2F0ZWdvcnlTdGF0ZSIsInNldENhdGVnb3J5U3RhdGUiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwiZGF0YSIsInRvdGFsRGF0YUNvdW50IiwiZXJyb3IiLCJsb2FkaW5nIiwiYWN0aW9uTWVzc2FnZSIsInNldEFjdGlvbk1lc3NhZ2UiLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwibmV3RGF0YSIsImZvckVhY2giLCJjYXRlZ29yeSIsImluZGV4IiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjdXJyZW50VmFsdWUiLCJvcGVuRGVsZXRlUHJvbXB0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJsZW5ndGgiLCJvcGVuQWRkQ2F0ZWdvcnlNb2RhbCIsIk51bWJlciIsImFkZFVwZGF0ZUNhdGVnb3J5IiwicHJldmVudERlZmF1bHQiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhdGlvbklkIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
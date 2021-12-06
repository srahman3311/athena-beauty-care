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
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styles/category/Category.module.css */ "./styles/category/Category.module.css");
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/admins/category/AddCategory */ "./components/admins/category/AddCategory.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var _components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/admins/category/CategoryDetails */ "./components/admins/category/CategoryDetails.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevView */ "./components/reusable-components/NextPrevView.js");
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

  function fetchNextPrevItems(event) {
    var newSkip = Number(event.target.value);
    setCategoryState(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        skip: newSkip
      });
    });
    setHappening("refetching after next button clicked");
  }

  function deleteCategory(_x2) {
    return _deleteCategory.apply(this, arguments);
  }

  function _deleteCategory() {
    _deleteCategory = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(event) {
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
              return axios__WEBPACK_IMPORTED_MODULE_9___default().post("http://localhost:7070/api/categories/delete", {
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
    return _deleteCategory.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
    className: (_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_15__.default // For input field values
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
        lineNumber: 246,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_16__.default, {
          value: categoryState.searchText,
          setState: setCategoryState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("button", {
          onClick: function onClick() {
            return setIsAddingUpdating(true);
          },
          children: "Add Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__.default, {
        deleting: deleting,
        itemId: categoryIdForDeleting,
        itemNameForDeletePrompt: itemNameForDeletePrompt,
        showDeletePrompt: showDeletePrompt,
        setShowDeletePrompt: setShowDeletePrompt,
        deleteItem: deleteCategory
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_19__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_21__.default, {
        state: categoryState,
        setState: setCategoryState,
        fetchNextPrevItems: fetchNextPrevItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_22__.default, {
        state: categoryState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_20__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuNjg0NzNmYTYzNWE5ZTEyMTk1ZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBR0E7O0NBR0E7QUFFQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNzQixRQUFULEdBQXFCO0FBQUE7O0FBRWhDLE1BQU1DLGVBQWUsR0FBRyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLEtBQTNCLEVBQWtDLFFBQWxDLENBQXhCOztBQUVBLGtCQUFrQ2YsZ0RBQVEsQ0FBQyxVQUFELENBQTFDO0FBQUEsTUFBT2dCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTBDakIsZ0RBQVEsQ0FBQztBQUMvQ2tCLElBQUFBLFVBQVUsRUFBRSxFQURtQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLENBRnlDO0FBRy9DQyxJQUFBQSxLQUFLLEVBQUUsRUFId0M7QUFJL0NDLElBQUFBLFVBQVUsRUFBRTtBQUptQyxHQUFELENBQWxEO0FBQUEsTUFBT0MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEIsaUJBTGdDLENBWWhDOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsc0NBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQUVQLElBQUFBLFVBQVUsRUFBRUksYUFBYSxDQUFDSixVQUE1QjtBQUF3Q0MsSUFBQUEsSUFBSSxFQUFFRyxhQUFhLENBQUNILElBQTVEO0FBQWtFQyxJQUFBQSxLQUFLLEVBQUVFLGFBQWEsQ0FBQ0Y7QUFBdkYsR0FBcEI7O0FBQ0Esa0JBQWlEdkIsdURBQVEsQ0FBQyxNQUFELEVBQVMyQixRQUFULEVBQW1CQyxX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NURKLGVBb0VJLCtEQUFDLG1GQUFEO0FBQ0ksYUFBSyxFQUFJNUMsYUFEYjtBQUVJLGdCQUFRLEVBQUlDLGdCQUZoQjtBQUdJLDBCQUFrQixFQUFJbUQ7QUFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBFSixlQXlFSSwrREFBQyxrRkFBRDtBQUFjLGFBQUssRUFBSXBEO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFpRkksK0RBQUMsNkVBQUQ7QUFDSSxhQUFPLEVBQUlRLGFBRGY7QUFFSSxzQkFBZ0IsRUFBSUM7QUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlGSDs7R0FqU3VCakI7VUFlNkJqQjs7O0tBZjdCaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kaWZpZXIgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ2F0ZWdvcnlEYXRhIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2ZldGNoQ2F0ZWdvcnlEYXRhXCI7XHJcbmltcG9ydCB7IHNlYXJjaENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvc2VhcmNoQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kZWxldGVDYXRlZ29yeVwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2F0ZWdvcnkvQ2F0ZWdvcnkubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuLy8gVGFibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgSXRlbVRhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IEl0ZW1UYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZURhdGFcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcblxyXG4vLyBPdGhlciBDb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnlcIjtcclxuXHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRGVsZXRlUHJvbXB0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGVsZXRlUHJvbXB0XCI7XHJcbmltcG9ydCBDYXRlZ29yeURldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0NhdGVnb3J5RGV0YWlsc1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBOZXh0UHJldlZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldlZpZXdcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbk1lc3NhZ2UsIHNldEFjdGlvbk1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlUYWJsZURhdGEsIHNldENhdGVnb3J5VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBUaGlzIGNhdGVnb3J5SWQgd2lsbCBiZSB1c2VkIHRvIG9wZW4gdGhlIGRldGFpbHMgb2YgdGhlIGNhdGVnb3J5LiBcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWRGb3JEZWxldGluZywgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJbmZvLCBzZXRDYXRlZ29yeUluZm9dID0gdXNlU3RhdGUoeyBjYXRlZ29yeUlkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmlldyBEZXRhaWxzIGFuZCBEZWxldGUgYnV0dG9uJ3MgdmFsdWVzIHdpbGwgYmUgdGhlIGlkIG9mIHRoZSBjYXRlZ29yeSB3aGljaCB3aWxsIGJlIHVzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gb3BlbiB0aGUgZGV0YWlscyBtb2RhbCBhbmQgZGVsZXRlIHByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYERlbGV0ZS0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtkYXRhLCBoYXBwZW5pbmddKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRlbGV0ZVByb21wdCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmcoX2lkKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGNhdGVnb3JpZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCA9PT0gY2F0ZWdvcmllc1t4XS5faWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQoY2F0ZWdvcmllc1t4XS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkFkZENhdGVnb3J5TW9kYWwoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8gY2F0ZWdvcnkgZGV0YWlscyBtb2RhbCdzIHVwZGF0ZSBidXR0b24ncyB2YWx1ZSBoYXMgYmVlbiBzZXQgd2l0aCB0aGUgaW5kZXggb2YgdGhlIGNhdGVnb3J5LiBVc2UgdGhpcyB2YWx1ZVxyXG4gICAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgY2F0ZWdvcnlJbmZvJ3MgcHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SW5mbyh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3JpZXNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogY2F0ZWdvcmllc1tpbmRleF0udGl0bGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJZChcIlwiKTtcclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVDYXRlZ29yeSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHVwZGF0aW5nIHB1cnBvc2VcclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy9yZXR1cm4gY29uc29sZS5sb2coX2lkLCBjYXRlZ29yeUluZm8pO1xyXG5cclxuICAgICAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgICAgICBpZiAoIWNhdGVnb3J5SW5mby50aXRsZSkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvYWRkLWNhdGVnb3J5XCI7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvdXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgY2F0ZWdvcnlJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyh7IGxvY2F0aW9uSWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZy91cGRhdGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoTmV4dFByZXZJdGVtcyhldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTa2lwID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTsgXHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQoZmFsc2UpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkRlbGV0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzL2RlbGV0ZVwiLCB7IF9pZCB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZS1mZXRjaGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxDb250cm9sUGFuZWwgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlfY29udGVudFwiIHN0eWxlID0ge3t3aWR0aDogXCI4MCVcIn19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxBZGRDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBpbnB1dCBmaWVsZCB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUluZm8gPSB7Y2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRydWUsIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBkaXNwbGF5IHRoZSBmb3JtIGFuZCB3aWxsIGhpZGUgaWYgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVXBkYXRlQ2F0ZWdvcnkgPSB7YWRkVXBkYXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9sbG93aW5nIGF0dHJpYnV0ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIGZ1bmN0aW9uIGFzIGFyZ3VtZW50cyBmb3JcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgc3RhdGVzIG9uIGNsb3NlIGJ1dHRvbiBjbGljayBldmVudC4gaXNBZGRpbmdVcGRhdGluZyB3aWxsIGJlIHNldCB0byBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRMb2NhdGlvbkluZm8gd2lsbCB1cGRhdGUgdGhlIGxvY2F0aW9uSW5mbyBzdGF0ZSB3aXRoIGl0J3MgaW5pdGlhbCBlbXB0eSB2YWx1ZXMgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9hZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRDYXRlZ29yeVN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXBwZW5pbmcgPSB7c2V0SGFwcGVuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PiBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpfT5BZGQgQ2F0ZWdvcnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbCBjc3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7Y2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtjYXRlZ29yeVRhYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtjYXRlZ29yeUlkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IHtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeUlkID0ge3NldENhdGVnb3J5SWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsaWNraW5nIG9uIHRodyB1cGRhdGUgYnV0dG9uIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIEFkZENhdGVnb3J5IE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkFkZENhdGVnb3J5TW9kYWwgPSB7b3BlbkFkZENhdGVnb3J5TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxOZXh0UHJldkl0ZW1zIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge2NhdGVnb3J5U3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldENhdGVnb3J5U3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoTmV4dFByZXZJdGVtcyA9IHtmZXRjaE5leHRQcmV2SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE5leHRQcmV2VmlldyBzdGF0ZSA9IHtjYXRlZ29yeVN0YXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0ge2FjdGlvbk1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZSA9IHtzZXRBY3Rpb25NZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIiwiZmV0Y2hDYXRlZ29yeURhdGEiLCJzZWFyY2hDYXRlZ29yaWVzIiwiZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0iLCJkZWxldGVDYXRlZ29yeSIsInVzZUF4aW9zIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkl0ZW1UYWJsZUhlYWRlciIsIkl0ZW1UYWJsZURhdGEiLCJEYXRhVGFibGUiLCJDb250cm9sUGFuZWwiLCJBZGRDYXRlZ29yeSIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5RGV0YWlscyIsIk1lc3NhZ2UiLCJOZXh0UHJldkl0ZW1zIiwiTmV4dFByZXZWaWV3IiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeUhlYWRlcnMiLCJoYXBwZW5pbmciLCJzZXRIYXBwZW5pbmciLCJzZWFyY2hUZXh0Iiwic2tpcCIsImxpbWl0IiwiZGF0YUxlbmd0aCIsImNhdGVnb3J5U3RhdGUiLCJzZXRDYXRlZ29yeVN0YXRlIiwiZW5kcG9pbnQiLCJyZXF1ZXN0Qm9keSIsImRhdGEiLCJ0b3RhbERhdGFDb3VudCIsImVycm9yIiwibG9hZGluZyIsImFjdGlvbk1lc3NhZ2UiLCJzZXRBY3Rpb25NZXNzYWdlIiwic2hvd0RlbGV0ZVByb21wdCIsInNldFNob3dEZWxldGVQcm9tcHQiLCJpdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsInNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0IiwiZGVsZXRpbmciLCJzZXREZWxldGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcnlUYWJsZURhdGEiLCJzZXRDYXRlZ29yeVRhYmxlRGF0YSIsImNhdGVnb3J5SWQiLCJzZXRDYXRlZ29yeUlkIiwiY2F0ZWdvcnlJZEZvckRlbGV0aW5nIiwic2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nIiwiaXNBZGRpbmdVcGRhdGluZyIsInNldElzQWRkaW5nVXBkYXRpbmciLCJ0aXRsZSIsImNhdGVnb3J5SW5mbyIsInNldENhdGVnb3J5SW5mbyIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJpbmRleCIsInB1c2giLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiY3VycmVudFZhbHVlIiwib3BlbkRlbGV0ZVByb21wdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ4IiwibGVuZ3RoIiwib3BlbkFkZENhdGVnb3J5TW9kYWwiLCJOdW1iZXIiLCJhZGRVcGRhdGVDYXRlZ29yeSIsInByZXZlbnREZWZhdWx0Iiwic2V0VmFsaWRhdGlvbkVycm9yIiwicG9zdCIsInJlc3BvbnNlIiwibG9jYXRpb25JZCIsImZldGNoTmV4dFByZXZJdGVtcyIsIm5ld1NraXAiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/categories",{

/***/ "./components/reusable-components/NextPrevView.js":
/*!********************************************************!*\
  !*** ./components/reusable-components/NextPrevView.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\NextPrevView.js",
    _this = undefined;



var NextPrevView = function NextPrevView(_ref) {
  var state = _ref.state;
  var skip = state.skip,
      limit = state.limit,
      dataLength = state.dataLength;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "items-view",
    style: {
      backgroundColor: "#ccc",
      padding: "5px 0"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "data-content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Showing ", dataLength === 0 ? 0 : dataLength === skip ? limit + 1 > dataLength ? 1 : skip - limit + 1 : skip + 1, " to ", limit + skip > dataLength ? dataLength : limit + skip, " of ", dataLength, " results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = NextPrevView;
/* harmony default export */ __webpack_exports__["default"] = (NextPrevView);

var _c;

$RefreshReg$(_c, "NextPrevView");

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


/***/ }),

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
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../styles/category/Category.module.css */ "./styles/category/Category.module.css");
/* harmony import */ var _styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/admins/category/AddCategory */ "./components/admins/category/AddCategory.js");
/* harmony import */ var _components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/DisplayFormButton */ "./components/reusable-components/DisplayFormButton.js");
/* harmony import */ var _components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/item-details/ItemDetailsModal */ "./components/reusable-components/item-details/ItemDetailsModal.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var _components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/admins/category/CategoryDetails */ "./components/admins/category/CategoryDetails.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevView */ "./components/reusable-components/NextPrevView.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__);
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
   
  */


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)("div", {
    className: (_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_26___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_15__.default // For input field values
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
        lineNumber: 248,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_18__.default, {
          value: categoryState.searchText,
          setState: setCategoryState,
          setHappening: setHappening
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)("button", {
          onClick: function onClick() {
            return setIsAddingUpdating(true);
          },
          children: "Add Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_13__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_21__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_23__.default, {
        state: categoryState,
        setState: setCategoryState,
        fetchNextPrevItems: fetchNextPrevItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_reusable_components_NextPrevView__WEBPACK_IMPORTED_MODULE_24__.default, {
        state: categoryState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_22__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 242,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuMDNlYThhNWE4Yzg0MDFlYTRjYTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRWhDLE1BQVFDLElBQVIsR0FBb0NELEtBQXBDLENBQVFDLElBQVI7QUFBQSxNQUFjQyxLQUFkLEdBQW9DRixLQUFwQyxDQUFjRSxLQUFkO0FBQUEsTUFBcUJDLFVBQXJCLEdBQW9DSCxLQUFwQyxDQUFxQkcsVUFBckI7QUFFQSxzQkFFSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLFNBQUssRUFBSTtBQUFDQyxNQUFBQSxlQUFlLEVBQUUsTUFBbEI7QUFBMEJDLE1BQUFBLE9BQU8sRUFBRTtBQUFuQyxLQUFyQztBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFBLCtCQUNBRixVQUFVLEtBQUssQ0FBZixHQUFtQixDQUFuQixHQUF1QkEsVUFBVSxLQUFLRixJQUFmLEdBQXVCQyxLQUFLLEdBQUcsQ0FBUixHQUFZQyxVQUFaLEdBQXlCLENBQXpCLEdBQTZCRixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUFuRSxHQUF3RUQsSUFBSSxHQUFHLENBRHRHLFVBR0FDLEtBQUssR0FBR0QsSUFBUixHQUFlRSxVQUFmLEdBQTRCQSxVQUE1QixHQUF5Q0QsS0FBSyxHQUFHRCxJQUhqRCxVQUlNRSxVQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFjSCxDQWxCRDs7S0FBTUo7QUFvQk4sK0RBQWVBLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGVBNERJLCtEQUFDLGlGQUFEO0FBQ0ksa0JBQVUsRUFBSXRCLFVBRGxCO0FBRUksa0JBQVUsRUFBSUksVUFGbEI7QUFHSSxxQkFBYSxFQUFJQyxhQUhyQixDQUlJO0FBSko7QUFLSSw0QkFBb0IsRUFBSXVCO0FBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1REosZUFvRUksK0RBQUMsbUZBQUQ7QUFDSSxhQUFLLEVBQUk1QyxhQURiO0FBRUksZ0JBQVEsRUFBSUMsZ0JBRmhCO0FBR0ksMEJBQWtCLEVBQUltRDtBQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEVKLGVBeUVJLCtEQUFDLGtGQUFEO0FBQWMsYUFBSyxFQUFJcEQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQWlGSSwrREFBQyw2RUFBRDtBQUNJLGFBQU8sRUFBSVEsYUFEZjtBQUVJLHNCQUFnQixFQUFJQztBQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUZIOztHQWxTdUJkO1VBZTZCbEI7OztLQWY3QmtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldlZpZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5leHRQcmV2VmlldyA9ICh7IHN0YXRlIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHNraXAsIGxpbWl0LCBkYXRhTGVuZ3RoIH0gPSBzdGF0ZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy12aWV3XCIgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsIHBhZGRpbmc6IFwiNXB4IDBcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U2hvd2luZyB7IFxyXG4gICAgICAgICAgICAgICAgZGF0YUxlbmd0aCA9PT0gMCA/IDAgOiBkYXRhTGVuZ3RoID09PSBza2lwID8gKGxpbWl0ICsgMSA+IGRhdGFMZW5ndGggPyAxIDogc2tpcCAtIGxpbWl0ICsgMSkgOiBza2lwICsgMVxyXG4gICAgICAgICAgICAgICAgfSB0byB7IFxyXG4gICAgICAgICAgICAgICAgbGltaXQgKyBza2lwID4gZGF0YUxlbmd0aCA/IGRhdGFMZW5ndGggOiBsaW1pdCArIHNraXAgXHJcbiAgICAgICAgICAgICAgICB9IG9mIHtkYXRhTGVuZ3RofSByZXN1bHRzIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dFByZXZWaWV3O1xyXG4iLCIvLyBNb2RpZmllciBmdW5jdGlvbnNcclxuaW1wb3J0IHsgY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIH0gZnJvbSBcIi4uLy4uL2xpYnMvZGF0YVwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hDYXRlZ29yeURhdGEgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZmV0Y2hDYXRlZ29yeURhdGFcIjtcclxuaW1wb3J0IHsgc2VhcmNoQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9zZWFyY2hDYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtXCI7XHJcbmltcG9ydCB7IGRlbGV0ZUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2RlbGV0ZUNhdGVnb3J5XCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jYXRlZ29yeS9DYXRlZ29yeS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG4vLyBUYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBJdGVtVGFibGVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgSXRlbVRhYmxlRGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlRGF0YVwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGVcIjtcclxuXHJcbi8vIE90aGVyIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9BZGRDYXRlZ29yeVwiO1xyXG5pbXBvcnQgRGlzcGxheUZvcm1CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EaXNwbGF5Rm9ybUJ1dHRvblwiO1xyXG5pbXBvcnQgSXRlbURldGFpbHNNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tZGV0YWlscy9JdGVtRGV0YWlsc01vZGFsXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRGVsZXRlUHJvbXB0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGVsZXRlUHJvbXB0XCI7XHJcbmltcG9ydCBDYXRlZ29yeURldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0NhdGVnb3J5RGV0YWlsc1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBOZXh0UHJldlZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldlZpZXdcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbk1lc3NhZ2UsIHNldEFjdGlvbk1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlUYWJsZURhdGEsIHNldENhdGVnb3J5VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBUaGlzIGNhdGVnb3J5SWQgd2lsbCBiZSB1c2VkIHRvIG9wZW4gdGhlIGRldGFpbHMgb2YgdGhlIGNhdGVnb3J5LiBcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWRGb3JEZWxldGluZywgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJbmZvLCBzZXRDYXRlZ29yeUluZm9dID0gdXNlU3RhdGUoeyBjYXRlZ29yeUlkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmlldyBEZXRhaWxzIGFuZCBEZWxldGUgYnV0dG9uJ3MgdmFsdWVzIHdpbGwgYmUgdGhlIGlkIG9mIHRoZSBjYXRlZ29yeSB3aGljaCB3aWxsIGJlIHVzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gb3BlbiB0aGUgZGV0YWlscyBtb2RhbCBhbmQgZGVsZXRlIHByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYERlbGV0ZS0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtkYXRhLCBoYXBwZW5pbmddKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRlbGV0ZVByb21wdCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmcoX2lkKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGNhdGVnb3JpZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCA9PT0gY2F0ZWdvcmllc1t4XS5faWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQoY2F0ZWdvcmllc1t4XS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkFkZENhdGVnb3J5TW9kYWwoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8gY2F0ZWdvcnkgZGV0YWlscyBtb2RhbCdzIHVwZGF0ZSBidXR0b24ncyB2YWx1ZSBoYXMgYmVlbiBzZXQgd2l0aCB0aGUgaW5kZXggb2YgdGhlIGNhdGVnb3J5LiBVc2UgdGhpcyB2YWx1ZVxyXG4gICAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgY2F0ZWdvcnlJbmZvJ3MgcHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SW5mbyh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3JpZXNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogY2F0ZWdvcmllc1tpbmRleF0udGl0bGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJZChcIlwiKTtcclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVDYXRlZ29yeSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHVwZGF0aW5nIHB1cnBvc2VcclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy9yZXR1cm4gY29uc29sZS5sb2coX2lkLCBjYXRlZ29yeUluZm8pO1xyXG5cclxuICAgICAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgICAgICBpZiAoIWNhdGVnb3J5SW5mby50aXRsZSkgcmV0dXJuIHNldFZhbGlkYXRpb25FcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvYWRkLWNhdGVnb3J5XCI7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQpIGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXMvdXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgY2F0ZWdvcnlJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyh7IGxvY2F0aW9uSWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZy91cGRhdGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoTmV4dFByZXZJdGVtcyhldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTa2lwID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlOyBcclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdChmYWxzZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiRGVsZXRpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy9kZWxldGVcIiwgeyBfaWQgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmUtZmV0Y2hpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgKi9cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cclxuICAgICAgICAgICAgPENvbnRyb2xQYW5lbCAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeV9jb250ZW50XCIgc3R5bGUgPSB7e3dpZHRoOiBcIjgwJVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFkZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGlucHV0IGZpZWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5mbyA9IHtjYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSwgaXNBZGRpbmdVcGRhdGluZyB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHdpbGwgaGlkZSBpZiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBhZGRVcGRhdGVDYXRlZ29yeSA9IHthZGRVcGRhdGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb2xsb3dpbmcgYXR0cmlidXRlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gZnVuY3Rpb24gYXMgYXJndW1lbnRzIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBzdGF0ZXMgb24gY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50LiBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgYmUgc2V0IHRvIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExvY2F0aW9uSW5mbyB3aWxsIHVwZGF0ZSB0aGUgbG9jYXRpb25JbmZvIHN0YXRlIHdpdGggaXQncyBpbml0aWFsIGVtcHR5IHZhbHVlcyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjYXRlZ29yeVN0YXRlLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldENhdGVnb3J5U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhcHBlbmluZyA9IHtzZXRIYXBwZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSl9PkFkZCBDYXRlZ29yeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFsIGNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2NhdGVnb3J5VGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxOZXh0UHJldkl0ZW1zIHN0YXRlID0ge3N0YXRlfSBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtsb2NhdGlvbklkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJZCA9IHtzZXRDYXRlZ29yeUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiB0aHcgdXBkYXRlIGJ1dHRvbiB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBvcGVuIHRoZSBBZGRDYXRlZ29yeSBNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeU1vZGFsID0ge29wZW5BZGRDYXRlZ29yeU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmV4dFByZXZJdGVtcyBcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtjYXRlZ29yeVN0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRDYXRlZ29yeVN0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaE5leHRQcmV2SXRlbXMgPSB7ZmV0Y2hOZXh0UHJldkl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxOZXh0UHJldlZpZXcgc3RhdGUgPSB7Y2F0ZWdvcnlTdGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHthY3Rpb25NZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UgPSB7c2V0QWN0aW9uTWVzc2FnZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIk5leHRQcmV2VmlldyIsInN0YXRlIiwic2tpcCIsImxpbWl0IiwiZGF0YUxlbmd0aCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMiLCJmZXRjaENhdGVnb3J5RGF0YSIsInNlYXJjaENhdGVnb3JpZXMiLCJkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSIsImRlbGV0ZUNhdGVnb3J5IiwidXNlQXhpb3MiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJJdGVtRGV0YWlsc01vZGFsIiwiU2VhcmNoSW5wdXQiLCJMb2FkaW5nIiwiRGVsZXRlUHJvbXB0IiwiQ2F0ZWdvcnlEZXRhaWxzIiwiTWVzc2FnZSIsIk5leHRQcmV2SXRlbXMiLCJDYXRlZ29yeSIsImNhdGVnb3J5SGVhZGVycyIsImhhcHBlbmluZyIsInNldEhhcHBlbmluZyIsInNlYXJjaFRleHQiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJhY3Rpb25NZXNzYWdlIiwic2V0QWN0aW9uTWVzc2FnZSIsInNob3dEZWxldGVQcm9tcHQiLCJzZXRTaG93RGVsZXRlUHJvbXB0IiwiaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNhdGVnb3J5VGFibGVEYXRhIiwic2V0Q2F0ZWdvcnlUYWJsZURhdGEiLCJjYXRlZ29yeUlkIiwic2V0Q2F0ZWdvcnlJZCIsImNhdGVnb3J5SWRGb3JEZWxldGluZyIsInNldENhdGVnb3J5SWRGb3JEZWxldGluZyIsImlzQWRkaW5nVXBkYXRpbmciLCJzZXRJc0FkZGluZ1VwZGF0aW5nIiwidGl0bGUiLCJjYXRlZ29yeUluZm8iLCJzZXRDYXRlZ29yeUluZm8iLCJuZXdEYXRhIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwiaW5kZXgiLCJwdXNoIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImN1cnJlbnRWYWx1ZSIsIm9wZW5EZWxldGVQcm9tcHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwieCIsImxlbmd0aCIsIm9wZW5BZGRDYXRlZ29yeU1vZGFsIiwiTnVtYmVyIiwiYWRkVXBkYXRlQ2F0ZWdvcnkiLCJwcmV2ZW50RGVmYXVsdCIsInNldFZhbGlkYXRpb25FcnJvciIsInBvc3QiLCJyZXNwb25zZSIsImxvY2F0aW9uSWQiLCJmZXRjaE5leHRQcmV2SXRlbXMiLCJuZXdTa2lwIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
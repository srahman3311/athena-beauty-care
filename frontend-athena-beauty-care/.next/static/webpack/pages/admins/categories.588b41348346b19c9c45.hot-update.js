self["webpackHotUpdate_N_E"]("pages/admins/categories",{

/***/ "./components/admins/category/CategoryDetails.js":
/*!*******************************************************!*\
  !*** ./components/admins/category/CategoryDetails.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Events.module.css */ "./styles/Events.module.css");
/* harmony import */ var _styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\category\\CategoryDetails.js",
    _this = undefined;

// Stylesheet




var CategoryDetails = function CategoryDetails(_ref) {
  var categories = _ref.categories,
      categoryId = _ref.categoryId,
      setCategoryId = _ref.setCategoryId,
      openAddCategoryModal = _ref.openAddCategoryModal;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: categories.map(function (category, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Events_module_css__WEBPACK_IMPORTED_MODULE_1___default().eventDetails_modal),
        style: {
          display: categoryId === category._id.toString() ? "block" : "none"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: category.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            return setCategoryId("");
          },
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          value: index,
          onClick: openAddCategoryModal,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, _this)]
      }, category._id.toString(), true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
};

_c = CategoryDetails;
/* harmony default export */ __webpack_exports__["default"] = (CategoryDetails);

var _c;

$RefreshReg$(_c, "CategoryDetails");

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

"use strict";
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
      lineNumber: 259,
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
          lineNumber: 296,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_1__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_19__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 257,
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


/***/ }),

/***/ "./styles/Events.module.css":
/*!**********************************!*\
  !*** ./styles/Events.module.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Events.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Events.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Events.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Events.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Events.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Events.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Events.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Events.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Events_eventDetails_modal__2vNjG {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n    width: 50%;\r\n    height: 50%;\r\n    background-color: white;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}", "",{"version":3,"sources":["webpack://styles/Events.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,wCAAgC;YAAhC,gCAAgC;IAChC,UAAU;IACV,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,oFAA4E;YAA5E,4EAA4E;AAChF","sourcesContent":[".eventDetails_modal {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n    width: 50%;\r\n    height: 50%;\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"eventDetails_modal": "Events_eventDetails_modal__2vNjG"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuNTg4YjQxMzQ4MzQ2YjE5YzljNDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBR0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFxRTtBQUFBLE1BQWxFQyxVQUFrRSxRQUFsRUEsVUFBa0U7QUFBQSxNQUF0REMsVUFBc0QsUUFBdERBLFVBQXNEO0FBQUEsTUFBMUNDLGFBQTBDLFFBQTFDQSxhQUEwQztBQUFBLE1BQTNCQyxvQkFBMkIsUUFBM0JBLG9CQUEyQjtBQUV6RixzQkFDSTtBQUFBLGNBQ0tILFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUNqQywwQkFDSTtBQUVJLGlCQUFTLEVBQUlSLHFGQUZqQjtBQUdJLGFBQUssRUFBSTtBQUFDVSxVQUFBQSxPQUFPLEVBQUVQLFVBQVUsS0FBS0ksUUFBUSxDQUFDSSxHQUFULENBQWFDLFFBQWIsRUFBZixHQUF5QyxPQUF6QyxHQUFtRDtBQUE3RCxTQUhiO0FBQUEsZ0NBS0k7QUFBQSxvQkFBSUwsUUFBUSxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFRLGlCQUFPLEVBQUk7QUFBQSxtQkFBTVQsYUFBYSxDQUFDLEVBQUQsQ0FBbkI7QUFBQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9JO0FBQVEsZUFBSyxFQUFJSSxLQUFqQjtBQUF3QixpQkFBTyxFQUFJSCxvQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQSxTQUNXRSxRQUFRLENBQUNJLEdBQVQsQ0FBYUMsUUFBYixFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVdILEtBWkE7QUFETCxtQkFESjtBQWtCSCxDQXBCRDs7S0FBTVg7QUF1Qk4sK0RBQWVBLGVB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QkFBaUIsa0JBQWtCLHlDQUF5QyxtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MscUZBQXFGLEtBQUssbUJBQW1CO0FBQ2xrQztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0NhdGVnb3J5RGV0YWlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9FdmVudHMubW9kdWxlLmNzcz85MjdlIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvRXZlbnRzLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRXZlbnRzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeURldGFpbHMgPSAoeyBjYXRlZ29yaWVzLCBjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkLCBvcGVuQWRkQ2F0ZWdvcnlNb2RhbCB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3N0eWxlcy5ldmVudERldGFpbHNfbW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogY2F0ZWdvcnlJZCA9PT0gY2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2F0ZWdvcnkudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gc2V0Q2F0ZWdvcnlJZChcIlwiKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZSA9IHtpbmRleH0gb25DbGljayA9IHtvcGVuQWRkQ2F0ZWdvcnlNb2RhbH0+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeURldGFpbHM7IiwiLy8gTW9kaWZpZXIgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ2F0ZWdvcnlEYXRhIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2ZldGNoQ2F0ZWdvcnlEYXRhXCI7XHJcbmltcG9ydCB7IHNlYXJjaENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvc2VhcmNoQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kZWxldGVDYXRlZ29yeVwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuXHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2xvY2F0aW9ucy9BZGRMb2NhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG4vLyBUYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBJdGVtVGFibGVIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgSXRlbVRhYmxlRGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlRGF0YVwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGVcIjtcclxuXHJcbi8vIE90aGVyIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY29udHJvbC1wYW5lbC9Db250cm9sUGFuZWxcIjtcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9BZGRDYXRlZ29yeVwiO1xyXG5pbXBvcnQgRGlzcGxheUZvcm1CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EaXNwbGF5Rm9ybUJ1dHRvblwiO1xyXG5pbXBvcnQgTmV4dFByZXZJdGVtcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL05leHRQcmV2SXRlbXNcIjtcclxuaW1wb3J0IEl0ZW1EZXRhaWxzTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLWRldGFpbHMvSXRlbURldGFpbHNNb2RhbFwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IERlbGV0ZVByb21wdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0RlbGV0ZVByb21wdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jYXRlZ29yeS9DYXRlZ29yeURldGFpbHNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQcm9tcHQsIHNldFNob3dEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0LCBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZWxldGluZywgc2V0RGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5VGFibGVEYXRhLCBzZXRDYXRlZ29yeVRhYmxlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZCwgc2V0Q2F0ZWdvcnlJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkRm9yRGVsZXRpbmcsIHNldENhdGVnb3J5SWRGb3JEZWxldGluZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0FkZGluZ1VwZGF0aW5nLCBzZXRJc0FkZGluZ1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IFtkaXNwbGF5XVxyXG4gICAgY29uc3QgW2NhdGVnb3J5SW5mbywgc2V0Q2F0ZWdvcnlJbmZvXSA9IHVzZVN0YXRlKHsgY2F0ZWdvcnlJZDogXCJcIiwgdGl0bGU6IFwiXCIgfSk7XHJcblxyXG4gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJmZXRjaGluZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBWaWV3IERldGFpbHMtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgRGVsZXRlLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlUYWJsZURhdGEobmV3RGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2RhdGEsIGhhcHBlbmluZ10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRGVsZXRlUHJvbXB0IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWRGb3JEZWxldGluZyhfaWQpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgY2F0ZWdvcmllcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBjYXRlZ29yaWVzW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChjYXRlZ29yaWVzW3hdLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5BZGRDYXRlZ29yeU1vZGFsKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldExvY2F0aW9uSW5mbyh7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGxvY2F0aW9uc1tpbmRleF0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHRpdGxlOiBsb2NhdGlvbnNbaW5kZXhdLnRpdGxlLFxyXG4gICAgICAgICAgICBhZGRyZXNzMTogbG9jYXRpb25zW2luZGV4XS5hZGRyZXNzMSxcclxuICAgICAgICAgICAgYWRkcmVzczI6IGxvY2F0aW9uc1tpbmRleF0uYWRkcmVzczIsXHJcbiAgICAgICAgICAgIGNpdHk6IGxvY2F0aW9uc1tpbmRleF0uY2l0eSxcclxuICAgICAgICAgICAgY291bnRyeTogbG9jYXRpb25zW2luZGV4XS5jb3VudHJ5LFxyXG4gICAgICAgICAgICBwaG9uZTogbG9jYXRpb25zW2luZGV4XS5waG9uZSxcclxuICAgICAgICAgICAgemlwQ29kZTogbG9jYXRpb25zW2luZGV4XS56aXBDb2RlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldExvY2F0aW9uSWQoXCJcIik7XHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInNlYXJjaGluZ1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFVwZGF0ZUxvY2F0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBGb3IgdXBkYXRpbmcgcHVycG9zZVxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgYWRkcmVzczEsIGFkZHJlc3MyLCBjaXR5LCBjb3VudHJ5LCBwaG9uZSwgemlwQ29kZSB9ID0gbG9jYXRpb25JbmZvO1xyXG5cclxuICAgICAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgICAgICBpZiAoIXRpdGxlIHx8ICFhZGRyZXNzMSB8fCAhYWRkcmVzczIgfHwgIWNpdHkgfHwgIWNvdW50cnkgfHwgIXBob25lIHx8ICF6aXBDb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFwiU2F2aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy9hZGQtbG9jYXRpb25cIjtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCkgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL3VwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIGxvY2F0aW9uSW5mbyk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2NhdGlvbkluZm8oe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczE6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMjogXCJcIixcclxuICAgICAgICAgICAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB6aXBDb2RlOiBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZy91cGRhdGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTsgXHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQoZmFsc2UpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkRlbGV0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvZGVsZXRlXCIsIHsgX2lkIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlLWZldGNoaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hOZXh0UHJldkl0ZW1zKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NraXAgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPEFkZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGlucHV0IGZpZWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5mbyA9IHtjYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSwgaXNBZGRpbmdVcGRhdGluZyB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHdpbGwgaGlkZSBpZiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiBjbG9zZSBidXR0b24gd2lsbCBpbnZva2UgdGhpcyBmdW5jdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb2xsb3dpbmcgYXR0cmlidXRlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gZnVuY3Rpb24gYXMgYXJndW1lbnRzIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBzdGF0ZXMgb24gY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50LiBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgYmUgc2V0IHRvIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExvY2F0aW9uSW5mbyB3aWxsIHVwZGF0ZSB0aGUgbG9jYXRpb25JbmZvIHN0YXRlIHdpdGggaXQncyBpbml0aWFsIGVtcHR5IHZhbHVlcyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IHtzZWFyY2hDYXRlZ29yaWVzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGQgQ2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFsIGNzcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVycyA9IHtjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge2NhdGVnb3J5VGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGVsZXRlUHJvbXB0ID0ge29wZW5EZWxldGVQcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlSGVhZGVyIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZURhdGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxOZXh0UHJldkl0ZW1zIHN0YXRlID0ge3N0YXRlfSBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPERlbGV0ZVByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nID0ge2RlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtsb2NhdGlvbklkRm9yRGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQgPSB7aXRlbU5hbWVGb3JEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGVQcm9tcHQgPSB7c2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCA9IHtzZXRTaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0eWxlcyBhcmUgaW4gZ2xvYmFscy5jc3MgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEl0ZW1EZXRhaWxzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBkaXNwbGF5aW5nIGxvY2F0aW9uIGFkZC91cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFuZCB1cGRhdGUgZm9ybXMgYXJlIHNhbWUgYnV0IG5lZWQgdG8gcG9wdWxhdGUgdGhlIGZvcm0ncyBpbnB1dCBmaWVsZHMgd2l0aCB0aGUgZGF0YSBmb3IgdXBkYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IHtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeUlkID0ge3NldENhdGVnb3J5SWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeU1vZGFsID0ge29wZW5BZGRDYXRlZ29yeU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0V2ZW50cy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9FdmVudHMubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vRXZlbnRzLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkV2ZW50c19ldmVudERldGFpbHNfbW9kYWxfXzJ2TmpHIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0V2ZW50cy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsb0ZBQTRFO1lBQTVFLDRFQUE0RTtBQUNoRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZXZlbnREZXRhaWxzX21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJldmVudERldGFpbHNfbW9kYWxcIjogXCJFdmVudHNfZXZlbnREZXRhaWxzX21vZGFsX18ydk5qR1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXRlZ29yeURldGFpbHMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJvcGVuQWRkQ2F0ZWdvcnlNb2RhbCIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJldmVudERldGFpbHNfbW9kYWwiLCJkaXNwbGF5IiwiX2lkIiwidG9TdHJpbmciLCJ0aXRsZSIsImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsIml0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0Iiwic2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwic2V0Q2F0ZWdvcmllcyIsImNhdGVnb3J5VGFibGVEYXRhIiwic2V0Q2F0ZWdvcnlUYWJsZURhdGEiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsImNhdGVnb3J5SW5mbyIsInNldENhdGVnb3J5SW5mbyIsIm5ld0RhdGEiLCJmb3JFYWNoIiwicHVzaCIsImlkIiwiY3VycmVudFZhbHVlIiwib3BlbkRlbGV0ZVByb21wdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ4IiwibGVuZ3RoIiwiTnVtYmVyIiwic2V0TG9jYXRpb25JbmZvIiwibG9jYXRpb25JZCIsImxvY2F0aW9ucyIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwiY291bnRyeSIsInBob25lIiwiemlwQ29kZSIsInNldExvY2F0aW9uSWQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=
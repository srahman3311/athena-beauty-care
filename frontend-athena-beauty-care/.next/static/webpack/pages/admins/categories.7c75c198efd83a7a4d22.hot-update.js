self["webpackHotUpdate_N_E"]("pages/admins/categories",{

/***/ "./components/reusable-components/ClosePopUpMessageButton.js":
/*!*******************************************************************!*\
  !*** ./components/reusable-components/ClosePopUpMessageButton.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ClosePopUpMessageButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\ClosePopUpMessageButton.js";

// styles are in globals.css
function ClosePopUpMessageButton(_ref) {
  var setActionMessage = _ref.setActionMessage;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "close_popup_message_button",
    onClick: function onClick() {
      return setActionMessage(null);
    },
    children: "X"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = ClosePopUpMessageButton;

var _c;

$RefreshReg$(_c, "ClosePopUpMessageButton");

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

/***/ "./components/reusable-components/Message.js":
/*!***************************************************!*\
  !*** ./components/reusable-components/Message.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Message; }
/* harmony export */ });
/* harmony import */ var _ClosePopUpMessageButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClosePopUpMessageButton */ "./components/reusable-components/ClosePopUpMessageButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\Message.js";
 // styles are in globals.css


function Message(_ref) {
  var message = _ref.message,
      setActionMessage = _ref.setActionMessage;
  var messageStyle = {
    transform: message ? "translate(-50%, 0%)" : "translate(-50%, 150%)"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "message",
    style: messageStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ClosePopUpMessageButton__WEBPACK_IMPORTED_MODULE_0__.default, {
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
_c = Message;

var _c;

$RefreshReg$(_c, "Message");

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

              _id = event.target.value; // Form validation

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
              return axios.post(_endpoint, categoryInfo);

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
    className: (_styles_category_Category_module_css__WEBPACK_IMPORTED_MODULE_24___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
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
        lineNumber: 256,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_12__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_21__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_22__.default, {
      message: actionMessage,
      setActionMessage: setActionMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 250,
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


/***/ }),

/***/ "./styles/category/Category.module.css":
/*!*********************************************!*\
  !*** ./styles/category/Category.module.css ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Category.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/category/Category.module.css");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Category.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/category/Category.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Category.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/category/Category.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/category/Category.module.css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/category/Category.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Category_categories__coQWZ {\r\n    position: relative;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}", "",{"version":3,"sources":["webpack://styles/category/Category.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;AACpB","sourcesContent":[".categories {\r\n    position: relative;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"categories": "Category_categories__coQWZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuN2M3NWMxOThlZmQ4M2E3YTRkMjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLHVCQUFULE9BQXdEO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBRW5FLHNCQUNJO0FBQVEsYUFBUyxFQUFHLDRCQUFwQjtBQUFpRCxXQUFPLEVBQUk7QUFBQSxhQUFNQSxnQkFBZ0IsQ0FBQyxJQUFELENBQXRCO0FBQUEsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIO0tBTHVCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NDeEI7OztBQUNlLFNBQVNFLE9BQVQsT0FBaUQ7QUFBQSxNQUE3QkMsT0FBNkIsUUFBN0JBLE9BQTZCO0FBQUEsTUFBcEJGLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBRTVELE1BQU1HLFlBQVksR0FBRztBQUNqQkMsSUFBQUEsU0FBUyxFQUFFRixPQUFPLEdBQUcscUJBQUgsR0FBMkI7QUFENUIsR0FBckI7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUssRUFBSUMsWUFBbEM7QUFBQSw0QkFDRztBQUFBLGdCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQUVHLDhEQUFDLDZEQUFEO0FBQXlCLHNCQUFnQixFQUFJRjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDtLQVp1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDBiQUF1TjtBQUM3TjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDBiQUF1Tjs7QUFFalA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7QUNuRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLHVFQUF1RSwyQkFBMkIsc0JBQXNCLHlCQUF5QixLQUFLLE9BQU8sb0dBQW9HLFlBQVksV0FBVyxZQUFZLHVDQUF1QywyQkFBMkIsc0JBQXNCLHlCQUF5QixLQUFLLG1CQUFtQjtBQUM3YTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9DbG9zZVBvcFVwTWVzc2FnZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvY2F0ZWdvcnkvQ2F0ZWdvcnkubW9kdWxlLmNzcz83NDBhIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvY2F0ZWdvcnkvQ2F0ZWdvcnkubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3NlUG9wVXBNZXNzYWdlQnV0dG9uICh7IHNldEFjdGlvbk1lc3NhZ2UgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcImNsb3NlX3BvcHVwX21lc3NhZ2VfYnV0dG9uXCIgb25DbGljayA9IHsoKSA9PiBzZXRBY3Rpb25NZXNzYWdlKG51bGwpfT5YPC9idXR0b24+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IENsb3NlUG9wVXBNZXNzYWdlQnV0dG9uIGZyb20gXCIuL0Nsb3NlUG9wVXBNZXNzYWdlQnV0dG9uXCI7XHJcblxyXG4vLyBzdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2UgKHsgbWVzc2FnZSwgc2V0QWN0aW9uTWVzc2FnZSB9KSB7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZVN0eWxlID0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbWVzc2FnZSA/IFwidHJhbnNsYXRlKC01MCUsIDAlKVwiIDogXCJ0cmFuc2xhdGUoLTUwJSwgMTUwJSlcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiIHN0eWxlID0ge21lc3NhZ2VTdHlsZX0+XHJcbiAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgIDxDbG9zZVBvcFVwTWVzc2FnZUJ1dHRvbiBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gTW9kaWZpZXIgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyB9IGZyb20gXCIuLi8uLi9saWJzL2RhdGFcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ2F0ZWdvcnlEYXRhIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2ZldGNoQ2F0ZWdvcnlEYXRhXCI7XHJcbmltcG9ydCB7IHNlYXJjaENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvc2VhcmNoQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybVwiO1xyXG5pbXBvcnQgeyBkZWxldGVDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9kZWxldGVDYXRlZ29yeVwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuXHJcblxyXG4vLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NhdGVnb3J5L0NhdGVnb3J5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbi8vIFRhYmxlIENvbXBvbmVudHNcclxuaW1wb3J0IEl0ZW1UYWJsZUhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tdGFibGUvSXRlbVRhYmxlSGVhZGVyXCI7XHJcbmltcG9ydCBJdGVtVGFibGVEYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVEYXRhXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL0RhdGFUYWJsZVwiO1xyXG5cclxuLy8gT3RoZXIgQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbFwiO1xyXG5pbXBvcnQgQWRkQ2F0ZWdvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0FkZENhdGVnb3J5XCI7XHJcbmltcG9ydCBEaXNwbGF5Rm9ybUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0Rpc3BsYXlGb3JtQnV0dG9uXCI7XHJcbmltcG9ydCBOZXh0UHJldkl0ZW1zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTmV4dFByZXZJdGVtc1wiO1xyXG5pbXBvcnQgSXRlbURldGFpbHNNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2l0ZW0tZGV0YWlscy9JdGVtRGV0YWlsc01vZGFsXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRGVsZXRlUHJvbXB0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGVsZXRlUHJvbXB0XCI7XHJcbmltcG9ydCBDYXRlZ29yeURldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NhdGVnb3J5L0NhdGVnb3J5RGV0YWlsc1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbk1lc3NhZ2UsIHNldEFjdGlvbk1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVByb21wdCwgc2V0U2hvd0RlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlUYWJsZURhdGEsIHNldENhdGVnb3J5VGFibGVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBUaGlzIGNhdGVnb3J5SWQgd2lsbCBiZSB1c2VkIHRvIG9wZW4gdGhlIGRldGFpbHMgb2YgdGhlIGNhdGVnb3J5LiBcclxuICAgIGNvbnN0IFtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWRGb3JEZWxldGluZywgc2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzQWRkaW5nVXBkYXRpbmcsIHNldElzQWRkaW5nVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgW2Rpc3BsYXldXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJbmZvLCBzZXRDYXRlZ29yeUluZm9dID0gdXNlU3RhdGUoeyBjYXRlZ29yeUlkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcImZldGNoaW5nXCIpO1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmlldyBEZXRhaWxzIGFuZCBEZWxldGUgYnV0dG9uJ3MgdmFsdWVzIHdpbGwgYmUgdGhlIGlkIG9mIHRoZSBjYXRlZ29yeSB3aGljaCB3aWxsIGJlIHVzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gb3BlbiB0aGUgZGV0YWlscyBtb2RhbCBhbmQgZGVsZXRlIHByb21wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYERlbGV0ZS0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtkYXRhLCBoYXBwZW5pbmddKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkRlbGV0ZVByb21wdCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgX2lkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmcoX2lkKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGNhdGVnb3JpZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCA9PT0gY2F0ZWdvcmllc1t4XS5faWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQoY2F0ZWdvcmllc1t4XS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVByb21wdCh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkFkZENhdGVnb3J5TW9kYWwoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgLy8gY2F0ZWdvcnkgZGV0YWlscyBtb2RhbCdzIHVwZGF0ZSBidXR0b24ncyB2YWx1ZSBoYXMgYmVlbiBzZXQgd2l0aCB0aGUgaW5kZXggb2YgdGhlIGNhdGVnb3J5LiBVc2UgdGhpcyB2YWx1ZVxyXG4gICAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgY2F0ZWdvcnlJbmZvJ3MgcHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SW5mbyh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3JpZXNbaW5kZXhdLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0aXRsZTogY2F0ZWdvcmllc1tpbmRleF0udGl0bGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJZChcIlwiKTtcclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRVcGRhdGVDYXRlZ29yeSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHVwZGF0aW5nIHB1cnBvc2VcclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgIGlmICghY2F0ZWdvcnlJbmZvLnRpdGxlKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJTYXZpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnlcIjtcclxuXHJcbiAgICAgICAgICAgIGlmKF9pZCkgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllcy91cGRhdGVcIjtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGVuZHBvaW50LCBjYXRlZ29yeUluZm8pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvKHsgbG9jYXRpb25JZDogXCJcIiwgdGl0bGU6IFwiXCIgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmZXIgYWRkaW5nL3VwZGF0aW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJzZWFyY2hpbmdcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7IFxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KGZhbHNlKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJEZWxldGluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zL2RlbGV0ZVwiLCB7IF9pZCB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZS1mZXRjaGluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoTmV4dFByZXZJdGVtcyhldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTa2lwID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2tpcDogbmV3U2tpcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJyZWZldGNoaW5nIGFmdGVyIG5leHQgYnV0dG9uIGNsaWNrZWRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxyXG5cclxuICAgICAgICAgICAgPENvbnRyb2xQYW5lbCAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeV9jb250ZW50XCIgc3R5bGUgPSB7e3dpZHRoOiBcIjgwJVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFkZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGlucHV0IGZpZWxkIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5mbyA9IHtjYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdHJ1ZSwgaXNBZGRpbmdVcGRhdGluZyB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHdpbGwgaGlkZSBpZiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBhZGRVcGRhdGVDYXRlZ29yeSA9IHthZGRVcGRhdGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb2xsb3dpbmcgYXR0cmlidXRlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gZnVuY3Rpb24gYXMgYXJndW1lbnRzIGZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBzdGF0ZXMgb24gY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50LiBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgYmUgc2V0IHRvIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldExvY2F0aW9uSW5mbyB3aWxsIHVwZGF0ZSB0aGUgbG9jYXRpb25JbmZvIHN0YXRlIHdpdGggaXQncyBpbml0aWFsIGVtcHR5IHZhbHVlcyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9hZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hEYXRhID0ge3NlYXJjaENhdGVnb3JpZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkFkZCBDYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWwgY3NzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzID0ge2NhdGVnb3J5RGF0YVRhYmxlSGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7Y2F0ZWdvcnlUYWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5EZWxldGVQcm9tcHQgPSB7b3BlbkRlbGV0ZVByb21wdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVIZWFkZXIgaXRlbUhlYWRlcnMgPSB7Y2F0ZWdvcnlIZWFkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlRGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0ge3N0YXRlLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPE5leHRQcmV2SXRlbXMgc3RhdGUgPSB7c3RhdGV9IHNldFN0YXRlID0ge3NldFN0YXRlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8RGVsZXRlUHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRpbmcgPSB7ZGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2xvY2F0aW9uSWRGb3JEZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZUZvckRlbGV0ZVByb21wdCA9IHtpdGVtTmFtZUZvckRlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZVByb21wdCA9IHtzaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0ID0ge3NldFNob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzcyAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8SXRlbURldGFpbHNNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZCA9IHtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0ge3N0YXRlLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUhlYWRlcnMgPSB7Y2F0ZWdvcnlIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSW5mbyA9IHtzZXRDYXRlZ29yeUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGRpc3BsYXlpbmcgbG9jYXRpb24gYWRkL3VwZGF0ZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcgPSB7c2V0SXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYW5kIHVwZGF0ZSBmb3JtcyBhcmUgc2FtZSBidXQgbmVlZCB0byBwb3B1bGF0ZSB0aGUgZm9ybSdzIGlucHV0IGZpZWxkcyB3aXRoIHRoZSBkYXRhIGZvciB1cGRhdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeURldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzID0ge2NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZCA9IHtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5SWQgPSB7c2V0Q2F0ZWdvcnlJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xpY2tpbmcgb24gdGh3IHVwZGF0ZSBidXR0b24gd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gb3BlbiB0aGUgQWRkQ2F0ZWdvcnkgTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQWRkQ2F0ZWdvcnlNb2RhbCA9IHtvcGVuQWRkQ2F0ZWdvcnlNb2RhbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB7YWN0aW9uTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9DYXRlZ29yeS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9DYXRlZ29yeS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9DYXRlZ29yeS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5DYXRlZ29yeV9jYXRlZ29yaWVzX19jb1FXWiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9jYXRlZ29yeS9DYXRlZ29yeS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhdGVnb3JpZXMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNhdGVnb3JpZXNcIjogXCJDYXRlZ29yeV9jYXRlZ29yaWVzX19jb1FXWlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJDbG9zZVBvcFVwTWVzc2FnZUJ1dHRvbiIsInNldEFjdGlvbk1lc3NhZ2UiLCJNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VTdHlsZSIsInRyYW5zZm9ybSIsImNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyIsImZldGNoQ2F0ZWdvcnlEYXRhIiwic2VhcmNoQ2F0ZWdvcmllcyIsImRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ1c2VBeGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiTG9hZGluZyIsIkRlbGV0ZVByb21wdCIsIkNhdGVnb3J5RGV0YWlscyIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlIZWFkZXJzIiwiaGFwcGVuaW5nIiwic2V0SGFwcGVuaW5nIiwic2VhcmNoVGV4dCIsInNraXAiLCJsaW1pdCIsImRhdGFMZW5ndGgiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsImVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJkYXRhIiwidG90YWxEYXRhQ291bnQiLCJlcnJvciIsImxvYWRpbmciLCJhY3Rpb25NZXNzYWdlIiwic2hvd0RlbGV0ZVByb21wdCIsInNldFNob3dEZWxldGVQcm9tcHQiLCJpdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsInNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0IiwiZGVsZXRpbmciLCJzZXREZWxldGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcnlUYWJsZURhdGEiLCJzZXRDYXRlZ29yeVRhYmxlRGF0YSIsImNhdGVnb3J5SWQiLCJzZXRDYXRlZ29yeUlkIiwiY2F0ZWdvcnlJZEZvckRlbGV0aW5nIiwic2V0Q2F0ZWdvcnlJZEZvckRlbGV0aW5nIiwiaXNBZGRpbmdVcGRhdGluZyIsInNldElzQWRkaW5nVXBkYXRpbmciLCJ0aXRsZSIsImNhdGVnb3J5SW5mbyIsInNldENhdGVnb3J5SW5mbyIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJpbmRleCIsInB1c2giLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiY3VycmVudFZhbHVlIiwib3BlbkRlbGV0ZVByb21wdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ4IiwibGVuZ3RoIiwib3BlbkFkZENhdGVnb3J5TW9kYWwiLCJOdW1iZXIiLCJhZGRVcGRhdGVDYXRlZ29yeSIsInByZXZlbnREZWZhdWx0Iiwic2V0VmFsaWRhdGlvbkVycm9yIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhdGlvbklkIiwiZGlzcGxheSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
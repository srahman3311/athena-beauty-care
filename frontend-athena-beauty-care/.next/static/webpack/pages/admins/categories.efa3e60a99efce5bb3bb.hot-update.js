"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/categories",{

/***/ "./components/admins/category/AddCategory.js":
/*!***************************************************!*\
  !*** ./components/admins/category/AddCategory.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddCategory; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_category_modifiers_categoryInfoOnChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/category-modifiers/categoryInfoOnChange */ "./libs/category-modifiers/categoryInfoOnChange.js");
/* harmony import */ var _libs_category_modifiers_addUpdateCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/category-modifiers/addUpdateCategory */ "./libs/category-modifiers/addUpdateCategory.js");
/* harmony import */ var _reusable_components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusable-components/Input */ "./components/reusable-components/Input.js");
/* harmony import */ var _reusable_components_SaveButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reusable-components/SaveButton */ "./components/reusable-components/SaveButton.js");
/* harmony import */ var _reusable_components_CloseFormButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reusable-components/CloseFormButton */ "./components/reusable-components/CloseFormButton.js");
/* harmony import */ var _reusable_components_SuccessFailMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reusable-components/SuccessFailMessage */ "./components/reusable-components/SuccessFailMessage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\category\\AddCategory.js",
    _s = $RefreshSig$();

// React Modules
 // category-modifiers


 // Components



 // Stylesheet




function AddCategory(_ref) {
  _s();

  var categoryInfo = _ref.categoryInfo,
      setCategoryInfo = _ref.setCategoryInfo,
      isAddingUpdating = _ref.isAddingUpdating,
      setIsAddingUpdating = _ref.setIsAddingUpdating,
      addUpdateCategory = _ref.addUpdateCategory;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      successFailMessage = _useState[0],
      setSuccessFailMessage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      validationError = _useState2[0],
      setValidationError = _useState2[1];

  return (
    /*#__PURE__*/
    // Styles are in globals.css
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "add_location",
      style: {
        display: isAddingUpdating ? "block" : "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {
        label: "Title",
        type: "text",
        name: "title",
        setData: setCategoryInfo,
        value: categoryInfo.title,
        placeholder: "Brows",
        onChange: _libs_category_modifiers_categoryInfoOnChange__WEBPACK_IMPORTED_MODULE_1__.categoryInfoOnChange,
        error: validationError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_reusable_components_SuccessFailMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
        successFailMessage: successFailMessage,
        setSuccessFailMessage: setSuccessFailMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        onClick: function onClick() {
          return setIsAddingUpdating(false);
        },
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        value: categoryInfo.categoryId,
        onClick: addUpdateCategory,
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)
  );
}

_s(AddCategory, "PsYe5+240R7pAarm1sO7sZwRFqY=");

_c = AddCategory;

var _c;

$RefreshReg$(_c, "AddCategory");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../styles/locations/AddLocation.module.css */ "./styles/locations/AddLocation.module.css");
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_23__);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__);
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showDeletePrompt = _useState3[0],
      setShowDeletePrompt = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      itemNameForDeletePrompt = _useState4[0],
      setItemNameForDeletePrompt = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      deleting = _useState5[0],
      setDeleting = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]),
      categoryTableData = _useState7[0],
      setCategoryTableData = _useState7[1]; // This categoryId will be used to open the details of the category. 


  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      categoryId = _useState8[0],
      setCategoryId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),
      categoryIdForDeleting = _useState9[0],
      setCategoryIdForDeleting = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      isAddingUpdating = _useState10[0],
      setIsAddingUpdating = _useState10[1]; // const [display]


  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    categoryId: "",
    title: ""
  }),
      categoryInfo = _useState11[0],
      setCategoryInfo = _useState11[1];

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_23___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_14__.default // For input field values
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
        lineNumber: 254,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_12__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_3__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_admins_category_CategoryDetails__WEBPACK_IMPORTED_MODULE_21__.default, {
        categories: categories,
        categoryId: categoryId,
        setCategoryId: setCategoryId // Clicking on thw update button will call this function to open the AddCategory Modal
        ,
        openAddCategoryModal: openAddCategoryModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 9
  }, this);
}

_s(Category, "/trtRf/weQMU91wx51Kn1Dr5QwM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuZWZhM2U2MGE5OWVmY2U1YmIzYmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0NBSUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBS2UsU0FBU1MsV0FBVCxPQUVaO0FBQUE7O0FBQUEsTUFEQ0MsWUFDRCxRQURDQSxZQUNEO0FBQUEsTUFEZUMsZUFDZixRQURlQSxlQUNmO0FBQUEsTUFEZ0NDLGdCQUNoQyxRQURnQ0EsZ0JBQ2hDO0FBQUEsTUFEa0RDLG1CQUNsRCxRQURrREEsbUJBQ2xEO0FBQUEsTUFEdUVWLGlCQUN2RSxRQUR1RUEsaUJBQ3ZFOztBQUVDLGtCQUFvREYsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQUEsTUFBT2Esa0JBQVA7QUFBQSxNQUEyQkMscUJBQTNCOztBQUNBLG1CQUE4Q2QsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUEsTUFBT2UsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBSUE7QUFBQTtBQUVJO0FBQ0E7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUE4QixXQUFLLEVBQUk7QUFBQ0MsUUFBQUEsT0FBTyxFQUFFTixnQkFBZ0IsR0FBRyxPQUFILEdBQWE7QUFBdkMsT0FBdkM7QUFBQSw4QkFDSSw4REFBQywrREFBRDtBQUNJLGFBQUssRUFBRyxPQURaO0FBRUksWUFBSSxFQUFHLE1BRlg7QUFHSSxZQUFJLEVBQUcsT0FIWDtBQUlJLGVBQU8sRUFBSUQsZUFKZjtBQUtJLGFBQUssRUFBSUQsWUFBWSxDQUFDUyxLQUwxQjtBQU1JLG1CQUFXLEVBQUcsT0FObEI7QUFPSSxnQkFBUSxFQUFJakIsK0ZBUGhCO0FBUUksYUFBSyxFQUFJYztBQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVlJLDhEQUFDLDRFQUFEO0FBQ0ksMEJBQWtCLEVBQUlGLGtCQUQxQjtBQUVJLDZC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QTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0dIOztHQTFUdUI1QztVQWU2Qlo7OztLQWY3QlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWlucy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlYWN0IE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY2F0ZWdvcnktbW9kaWZpZXJzXHJcbmltcG9ydCB7IGNhdGVnb3J5SW5mb09uQ2hhbmdlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL2NhdGVnb3J5SW5mb09uQ2hhbmdlXCJcclxuaW1wb3J0IHsgYWRkVXBkYXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvYWRkVXBkYXRlQ2F0ZWdvcnlcIjtcclxuXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9TYXZlQnV0dG9uXCI7XHJcbmltcG9ydCBDbG9zZUZvcm1CdXR0b24gZnJvbSBcIi4uLy4uL3JldXNhYmxlLWNvbXBvbmVudHMvQ2xvc2VGb3JtQnV0dG9uXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9sb2NhdGlvbnMvQWRkTG9jYXRpb24ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBTdWNjZXNzRmFpbE1lc3NhZ2UgZnJvbSBcIi4uLy4uL3JldXNhYmxlLWNvbXBvbmVudHMvU3VjY2Vzc0ZhaWxNZXNzYWdlXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRDYXRlZ29yeSAoeyBcclxuICAgIGNhdGVnb3J5SW5mbywgc2V0Q2F0ZWdvcnlJbmZvLCBpc0FkZGluZ1VwZGF0aW5nLCBzZXRJc0FkZGluZ1VwZGF0aW5nLCBhZGRVcGRhdGVDYXRlZ29yeVxyXG59KSB7XHJcblxyXG4gICAgY29uc3QgW3N1Y2Nlc3NGYWlsTWVzc2FnZSwgc2V0U3VjY2Vzc0ZhaWxNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAvLyBTdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRfbG9jYXRpb25cIiBzdHlsZSA9IHt7ZGlzcGxheTogaXNBZGRpbmdVcGRhdGluZyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2F0ZWdvcnlJbmZvLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkJyb3dzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2NhdGVnb3J5SW5mb09uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFN1Y2Nlc3NGYWlsTWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NGYWlsTWVzc2FnZSA9IHtzdWNjZXNzRmFpbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UgPSB7c2V0U3VjY2Vzc0ZhaWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gc2V0SXNBZGRpbmdVcGRhdGluZyhmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdmFsdWUgPSB7Y2F0ZWdvcnlJbmZvLmNhdGVnb3J5SWR9IG9uQ2xpY2sgPSB7YWRkVXBkYXRlQ2F0ZWdvcnl9PlNhdmU8L2J1dHRvbj5cclxuXHJcbnsvKiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPENsb3NlRm9ybUJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsb3NlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX0gXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhID0ge3NldENhdGVnb3J5SW5mb30gXHJcbiAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTYXZlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAvLyBUbyBwYXNzIHRvIGFkZFVwZGF0ZUxvY2F0aW9uIGZ1bmN0aW9uLiBFbXB0eSBzdHJpbmcgd2lsbCBtYWtlIGh0dHAgcmVxdWVzdCB0byBiYWNrZW5kIGF0IFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkX2xvY2F0aW9uIGVuZHBvaW50LCBlbHNlIHVwZGF0ZSByZXF1ZXN0IHdpbGwgYmUgbWFkZSB0byBiYWNrZW5kIFxyXG4gICAgICAgICAgICAgICAgX2lkID0ge2NhdGVnb3J5SW5mby5jYXRlZ29yeUlkfSBcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB7Y2F0ZWdvcnlJbmZvfSBcclxuICAgICAgICAgICAgICAgIHNldEVycm9yID0ge3NldFZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzRmFpbE1lc3NhZ2UgPSB7c2V0U3VjY2Vzc0ZhaWxNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgYWRkTmV3SXRlbSA9IHthZGRVcGRhdGVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vIE1vZGlmaWVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5RGF0YSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9mZXRjaENhdGVnb3J5RGF0YVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL3NlYXJjaENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGlzcGxheUhpZGVDYXRlZ29yeUZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGVsZXRlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9sb2NhdGlvbnMvQWRkTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuLy8gVGFibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgSXRlbVRhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IEl0ZW1UYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZURhdGFcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcblxyXG4vLyBPdGhlciBDb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IERpc3BsYXlGb3JtQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGlzcGxheUZvcm1CdXR0b25cIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBJdGVtRGV0YWlsc01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS1kZXRhaWxzL0l0ZW1EZXRhaWxzTW9kYWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBEZWxldGVQcm9tcHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EZWxldGVQcm9tcHRcIjtcclxuaW1wb3J0IENhdGVnb3J5RGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQ2F0ZWdvcnlEZXRhaWxzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5ICgpIHtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUhlYWRlcnMgPSBbXCJfaWRcIiwgXCJUaXRsZVwiLCBcIkFjdGlvblwiLCBcIl9fdlwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgICBjb25zdCBbaGFwcGVuaW5nLCBzZXRIYXBwZW5pbmddID0gdXNlU3RhdGUoXCJGZXRjaGluZ1wiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVN0YXRlLCBzZXRDYXRlZ29yeVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2hUZXh0OiBcIlwiLFxyXG4gICAgICAgIHNraXA6IDAsXHJcbiAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgIGRhdGFMZW5ndGg6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEN1c3RvbSBob29rIGNhbGwgdG8gZmV0Y2ggZGF0YVxyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiO1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IHNlYXJjaFRleHQ6IGNhdGVnb3J5U3RhdGUuc2VhcmNoVGV4dCwgc2tpcDogY2F0ZWdvcnlTdGF0ZS5za2lwLCBsaW1pdDogY2F0ZWdvcnlTdGF0ZS5saW1pdCB9O1xyXG4gICAgY29uc3QgeyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUF4aW9zKFwicG9zdFwiLCBlbmRwb2ludCwgcmVxdWVzdEJvZHksIGhhcHBlbmluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtzaG93RGVsZXRlUHJvbXB0LCBzZXRTaG93RGVsZXRlUHJvbXB0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpdGVtTmFtZUZvckRlbGV0ZVByb21wdCwgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVRhYmxlRGF0YSwgc2V0Q2F0ZWdvcnlUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIFRoaXMgY2F0ZWdvcnlJZCB3aWxsIGJlIHVzZWQgdG8gb3BlbiB0aGUgZGV0YWlscyBvZiB0aGUgY2F0ZWdvcnkuIFxyXG4gICAgY29uc3QgW2NhdGVnb3J5SWQsIHNldENhdGVnb3J5SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZEZvckRlbGV0aW5nLCBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZGlzcGxheV1cclxuICAgIGNvbnN0IFtjYXRlZ29yeUluZm8sIHNldENhdGVnb3J5SW5mb10gPSB1c2VTdGF0ZSh7IGNhdGVnb3J5SWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG5cclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwiZmV0Y2hpbmdcIik7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWaWV3IERldGFpbHMgYW5kIERlbGV0ZSBidXR0b24ncyB2YWx1ZXMgd2lsbCBiZSB0aGUgaWQgb2YgdGhlIGNhdGVnb3J5IHdoaWNoIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBvcGVuIHRoZSBkZXRhaWxzIG1vZGFsIGFuZCBkZWxldGUgcHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBWaWV3IERldGFpbHMtJHtjYXRlZ29yeS5faWQudG9TdHJpbmcoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgRGVsZXRlLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlUYWJsZURhdGEobmV3RGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxlbmd0aDogdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2RhdGEsIGhhcHBlbmluZ10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRGVsZXRlUHJvbXB0IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWRGb3JEZWxldGluZyhfaWQpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgY2F0ZWdvcmllcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkID09PSBjYXRlZ29yaWVzW3hdLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdChjYXRlZ29yaWVzW3hdLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQWRkQ2F0ZWdvcnlNb2RhbChldmVudCkge1xyXG5cclxuICAgICAgICAvLyBjYXRlZ29yeSBkZXRhaWxzIG1vZGFsJ3MgdXBkYXRlIGJ1dHRvbidzIHZhbHVlIGhhcyBiZWVuIHNldCB3aXRoIHRoZSBpbmRleCBvZiB0aGUgY2F0ZWdvcnkuIFVzZSB0aGlzIHZhbHVlXHJcbiAgICAgICAgLy8gdG8gdXBkYXRlIHRoZSBjYXRlZ29yeUluZm8ncyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogY2F0ZWdvcmllc1tpbmRleF0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHRpdGxlOiBjYXRlZ29yaWVzW2luZGV4XS50aXRsZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRDYXRlZ29yeUlkKFwiXCIpO1xyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFVwZGF0ZUNhdGVnb3J5IChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBGb3IgdXBkYXRpbmcgcHVycG9zZVxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gRm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeUluZm8udGl0bGUpIHJldHVybiBzZXRWYWxpZGF0aW9uRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIHNldElzQWRkaW5nVXBkYXRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIlNhdmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzL2FkZC1jYXRlZ29yeVwiO1xyXG5cclxuICAgICAgICAgICAgaWYoX2lkKSBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzL3VwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZW5kcG9pbnQsIGNhdGVnb3J5SW5mbyk7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeUluZm8oeyBsb2NhdGlvbklkOiBcIlwiLCB0aXRsZTogXCJcIiB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZlciBhZGRpbmcvdXBkYXRpbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInNlYXJjaGluZ1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IF9pZCA9IGV2ZW50LnRhcmdldC52YWx1ZTsgXHJcblxyXG4gICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQoZmFsc2UpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShcIkRlbGV0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvZGVsZXRlXCIsIHsgX2lkIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEhhcHBlbmluZyhcInJlLWZldGNoaW5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hOZXh0UHJldkl0ZW1zKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NraXAgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBuZXdTa2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEhhcHBlbmluZyhcInJlZmV0Y2hpbmcgYWZ0ZXIgbmV4dCBidXR0b24gY2xpY2tlZFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaW5wdXQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmZvID0ge2NhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0cnVlLCBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgZGlzcGxheSB0aGUgZm9ybSBhbmQgd2lsbCBoaWRlIGlmIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZFVwZGF0ZUNhdGVnb3J5ID0ge2FkZFVwZGF0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvbGxvd2luZyBhdHRyaWJ1dGVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSBmdW5jdGlvbiBhcyBhcmd1bWVudHMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHN0YXRlcyBvbiBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnQuIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9jYXRpb25JbmZvIHdpbGwgdXBkYXRlIHRoZSBsb2NhdGlvbkluZm8gc3RhdGUgd2l0aCBpdCdzIGluaXRpYWwgZW1wdHkgdmFsdWVzICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2FkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSB7c2VhcmNoQ2F0ZWdvcmllc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzcGxheUZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRkIENhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlRm9ybSA9IHtkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbCBjc3MgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnMgPSB7Y2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtjYXRlZ29yeVRhYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UYWJsZUhlYWRlciBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVEYXRhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JZCA9IHtzZXRDYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUgPSB7c2V0U3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtID0ge2RlbGV0ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8TmV4dFByZXZJdGVtcyBzdGF0ZSA9IHtzdGF0ZX0gc2V0U3RhdGUgPSB7c2V0U3RhdGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxEZWxldGVQcm9tcHRcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGluZyA9IHtkZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7bG9jYXRpb25JZEZvckRlbGV0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0ID0ge2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlUHJvbXB0ID0ge3Nob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGVQcm9tcHQgPSB7c2V0U2hvd0RlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVMb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxJdGVtRGV0YWlsc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldENhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7c3RhdGUuY2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtSGVhZGVycyA9IHtjYXRlZ29yeUhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZGlzcGxheWluZyBsb2NhdGlvbiBhZGQvdXBkYXRlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBpc0FkZGluZ1VwZGF0aW5nID0ge2lzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBZGRpbmdVcGRhdGluZyA9IHtzZXRJc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgdXBkYXRlIGZvcm1zIGFyZSBzYW1lIGJ1dCBuZWVkIHRvIHBvcHVsYXRlIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzIHdpdGggdGhlIGRhdGEgZm9yIHVwZGF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkID0ge2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJZCA9IHtzZXRDYXRlZ29yeUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGlja2luZyBvbiB0aHcgdXBkYXRlIGJ1dHRvbiB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBvcGVuIHRoZSBBZGRDYXRlZ29yeSBNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5BZGRDYXRlZ29yeU1vZGFsID0ge29wZW5BZGRDYXRlZ29yeU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2F0ZWdvcnlJbmZvT25DaGFuZ2UiLCJhZGRVcGRhdGVDYXRlZ29yeSIsIklucHV0IiwiU2F2ZUJ1dHRvbiIsIkNsb3NlRm9ybUJ1dHRvbiIsInN0eWxlcyIsIlN1Y2Nlc3NGYWlsTWVzc2FnZSIsIkFkZENhdGVnb3J5IiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwiaXNBZGRpbmdVcGRhdGluZyIsInNldElzQWRkaW5nVXBkYXRpbmciLCJzdWNjZXNzRmFpbE1lc3NhZ2UiLCJzZXRTdWNjZXNzRmFpbE1lc3NhZ2UiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJkaXNwbGF5IiwidGl0bGUiLCJjYXRlZ29yeUlkIiwiY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIiwiZmV0Y2hDYXRlZ29yeURhdGEiLCJzZWFyY2hDYXRlZ29yaWVzIiwiZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0iLCJkZWxldGVDYXRlZ29yeSIsInVzZUF4aW9zIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkRhdGFUYWJsZSIsIkNvbnRyb2xQYW5lbCIsIkRpc3BsYXlGb3JtQnV0dG9uIiwiTmV4dFByZXZJdGVtcyIsIkl0ZW1EZXRhaWxzTW9kYWwiLCJTZWFyY2hJbnB1dCIsIkxvYWRpbmciLCJEZWxldGVQcm9tcHQiLCJDYXRlZ29yeURldGFpbHMiLCJDYXRlZ29yeSIsImNhdGVnb3J5SGVhZGVycyIsImhhcHBlbmluZyIsInNldEhhcHBlbmluZyIsInNlYXJjaFRleHQiLCJza2lwIiwibGltaXQiLCJkYXRhTGVuZ3RoIiwiY2F0ZWdvcnlTdGF0ZSIsInNldENhdGVnb3J5U3RhdGUiLCJlbmRwb2ludCIsInJlcXVlc3RCb2R5IiwiZGF0YSIsInRvdGFsRGF0YUNvdW50IiwiZXJyb3IiLCJsb2FkaW5nIiwic2hvd0RlbGV0ZVByb21wdCIsInNldFNob3dEZWxldGVQcm9tcHQiLCJpdGVtTmFtZUZvckRlbGV0ZVByb21wdCIsInNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0IiwiZGVsZXRpbmciLCJzZXREZWxldGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcnlUYWJsZURhdGEiLCJzZXRDYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJuZXdEYXRhIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwiaW5kZXgiLCJwdXNoIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImN1cnJlbnRWYWx1ZSIsIm9wZW5EZWxldGVQcm9tcHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwieCIsImxlbmd0aCIsIm9wZW5BZGRDYXRlZ29yeU1vZGFsIiwiTnVtYmVyIiwicHJldmVudERlZmF1bHQiLCJzZXRBY3Rpb25NZXNzYWdlIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhdGlvbklkIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9